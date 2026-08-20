#!/usr/bin/env python3
"""Content check for the Moebius Atlas topic graph.

What it reads
    Every `src/content/en/<id>.md` file - the canonical topics. The file name
    without the extension is the topic id; only the frontmatter (the block
    between the first two `---` lines) is looked at, never the body. The fields
    that matter here are `track`, `grade` and `requires`. `src/content/uk/` is
    read too, but only to check that every translation has an English original.

What it checks
    1. Every id listed in `requires` exists, and no topic requires itself.
    2. Every translation file has an English original.
    3. The `requires` relation is acyclic.
    4. The relation is transitively reduced - no edge A -> C when a longer
       chain A -> B -> ... -> C already says the same thing. The path view
       computes its levels from these edges, so a shortcut puts a topic on the
       wrong level rather than merely repeating itself.
    5. No prerequisite is taught later than the topic that needs it (grades),
       and no school topic depends on an olympiad or advanced one.
    6. School topics declare a grade; topics on the other tracks do not.

What it writes
    One summary line (topics, edges, roots), then one "ERR ..." line per
    problem found, then the number of errors.

Exit code
    0 when the graph is clean, 1 when anything was reported - so the check can
    be dropped into CI as is.

Usage
    python tools/check_graph.py [--root PATH]

    --root defaults to the repository this script lives in, so the check gives
    the same answer from any working directory.
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

CONTENT_DIR = Path("src/content")
CANONICAL_LANG = "en"

FRONTMATTER_RE = re.compile(r"^---\s*$(.*?)^---\s*$", re.M | re.S)
FIELD_RE = re.compile(r"^(\w+):\s*(.*?)\s*$", re.M)
LIST_RE = re.compile(r"^\[(.*)\]$", re.S)


@dataclass
class Topic:
    """One topic, reduced to what the graph checks need."""

    id: str
    track: str = "other"
    grade: int | None = None
    requires: list[str] = field(default_factory=list)


def parse_frontmatter(text: str) -> dict[str, str]:
    """Return the frontmatter fields of a content file as plain strings."""
    match = FRONTMATTER_RE.search(text)
    if not match:
        return {}
    return dict(FIELD_RE.findall(match.group(1)))


def parse_id_list(value: str) -> list[str]:
    """Turn a bracketed frontmatter list into ids; anything else is empty."""
    match = LIST_RE.match(value.strip())
    if not match:
        return []
    return [item.strip() for item in match.group(1).split(",") if item.strip()]


def parse_grade(value: str | None) -> int | None:
    """Grades are small integers; a missing or unreadable value means none."""
    if value is None or not value.strip():
        return None
    try:
        return int(value.strip())
    except ValueError:
        return None


def load_topics(content_dir: Path) -> dict[str, Topic]:
    """Read the canonical (English) topics, keyed by id."""
    topics: dict[str, Topic] = {}
    for path in sorted((content_dir / CANONICAL_LANG).glob("*.md")):
        meta = parse_frontmatter(path.read_text(encoding="utf-8"))
        topics[path.stem] = Topic(
            id=path.stem,
            track=meta.get("track", "other"),
            grade=parse_grade(meta.get("grade")),
            requires=parse_id_list(meta.get("requires", "")),
        )
    return topics


def check_edges(topics: dict[str, Topic]) -> list[str]:
    """Every prerequisite resolves to a topic, and nothing requires itself."""
    errors = []
    for topic in topics.values():
        for prereq in topic.requires:
            if prereq == topic.id:
                errors.append(f"{topic.id}: self-loop")
            elif prereq not in topics:
                errors.append(f"{topic.id}: unknown prereq {prereq}")
    return errors


def check_translations(content_dir: Path, topics: dict[str, Topic]) -> list[str]:
    """A translation without its English original never reaches the build."""
    errors = []
    for lang_dir in sorted(content_dir.iterdir()):
        if not lang_dir.is_dir() or lang_dir.name == CANONICAL_LANG:
            continue
        for path in sorted(lang_dir.glob("*.md")):
            if path.stem not in topics:
                errors.append(f"{lang_dir.name}/{path.name}: no English counterpart")
    return errors


def check_acyclic(topics: dict[str, Topic]) -> list[str]:
    """Depth-first search: an edge back into the current stack is a cycle."""
    errors = []
    state: dict[str, int] = {}  # 1 = on the current stack, 2 = finished

    def visit(node: str, stack: list[str]) -> None:
        state[node] = 1
        for prereq in topics[node].requires:
            if prereq not in topics:
                continue
            if state.get(prereq) == 1:
                errors.append("cycle: " + " -> ".join([*stack, node, prereq]))
            elif not state.get(prereq):
                visit(prereq, [*stack, node])
        state[node] = 2

    for topic_id in topics:
        if not state.get(topic_id):
            visit(topic_id, [])
    return errors


def build_reachable(topics: dict[str, Topic]) -> dict[str, set[str]]:
    """For every topic, all prerequisites reachable from it, transitively."""
    reachable: dict[str, set[str]] = {}

    def walk(node: str) -> set[str]:
        cached = reachable.get(node)
        if cached is not None:
            return cached
        reachable[node] = set()  # placeholder: keeps a cycle from recursing
        found: set[str] = set()
        for prereq in topics[node].requires:
            if prereq in topics:
                found |= {prereq} | walk(prereq)
        reachable[node] = found
        return found

    for topic_id in topics:
        walk(topic_id)
    return reachable


def check_reduced(topics: dict[str, Topic], reachable: dict[str, set[str]]) -> list[str]:
    """An edge is redundant when another prerequisite already leads to it."""
    errors = []
    for topic in topics.values():
        for prereq in topic.requires:
            via_others: set[str] = set()
            for other in topic.requires:
                if other != prereq and other in topics:
                    via_others |= reachable[other]
            if prereq in via_others:
                errors.append(f"redundant edge {topic.id} -> {prereq}")
    return errors


def check_order(topics: dict[str, Topic]) -> list[str]:
    """Grades and tracks must not run backwards along a prerequisite edge."""
    errors = []
    for topic in topics.values():
        for prereq_id in topic.requires:
            prereq = topics.get(prereq_id)
            if prereq is None:
                continue
            if topic.grade and prereq.grade and prereq.grade > topic.grade:
                errors.append(
                    f"grade inversion: {topic.id} (g{topic.grade}) "
                    f"requires {prereq.id} (g{prereq.grade})"
                )
            if topic.track == "school" and prereq.track != "school":
                errors.append(
                    f"track inversion: school {topic.id} requires {prereq.track} {prereq.id}"
                )
        if topic.track == "school" and topic.grade is None:
            errors.append(f"{topic.id}: school topic without grade")
        if topic.track != "school" and topic.grade is not None:
            errors.append(f"{topic.id}: non-school topic with grade")
    return errors


def check_graph(root: Path) -> list[str]:
    """Run every check over the content under `root` and collect the errors."""
    content_dir = root / CONTENT_DIR
    topics = load_topics(content_dir)
    if not topics:
        return [f"no topics found under {content_dir / CANONICAL_LANG}"]

    errors = check_edges(topics)
    errors += check_translations(content_dir, topics)
    errors += check_acyclic(topics)
    errors += check_reduced(topics, build_reachable(topics))
    errors += check_order(topics)

    edges = sum(len(topic.requires) for topic in topics.values())
    roots = sum(1 for topic in topics.values() if not topic.requires)
    print(f"{len(topics)} topics, {edges} edges, {roots} roots")
    return errors


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Check the topic graph invariants.")
    parser.add_argument(
        "--root",
        type=Path,
        default=Path(__file__).resolve().parents[1],
        help="repository root holding src/content (default: this checkout)",
    )
    args = parser.parse_args(argv)

    errors = check_graph(args.root)
    for error in errors:
        print("ERR", error)
    print("errors:", len(errors))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
