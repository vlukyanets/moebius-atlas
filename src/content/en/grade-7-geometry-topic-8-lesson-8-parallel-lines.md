---
title: "[S] Parallel Lines"
tag: DEF
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-7-lesson-7-perpendicular-lines-and-distance-to-a-line, grade-6-topic-45-lesson-45-parallel-lines]
---

## Why It Matters

Rails, ruled lines, the opposite sides of every rectangle - parallel
lines are everywhere, and grade 6 gave them a name. Now they get
what geometry needs: a definition, an axiom that only one parallel
passes through a point, and the first theorem that produces parallel
lines out of perpendicular ones. The theorem that follows this topic -
that the angles of a triangle add to $180^\circ$ - can't be proved
without them.

## The Big Idea

Two lines in a plane that never meet are parallel. Since a line has
no ends, "never" means never - not on the page and not beyond it. The
one thing about parallels that can't be proved from what came before
is that, through a point off a line, there's only *one* line parallel
to it. That's taken as an axiom - the parallel axiom, famous because
mathematicians spent two thousand years trying and failing to prove
it from the others.

What *can* be proved: two lines both perpendicular to a third are
parallel. If they met, the meeting point would have two different
perpendiculars to the third line - and through a point there's only
one.

## The Rule

Two lines in a plane are **parallel** if they do not intersect:
$a \parallel b$. Two segments (or rays) are parallel if they lie on
parallel lines.

**Parallel axiom.** Through a point not on a given line, at most one
line can be drawn parallel to the given line.

**Theorem.** Two lines perpendicular to the same line are parallel.

*Proof.* Let $a \perp c$ and $b \perp c$, with $a$ and $b$ distinct. If $a$
and $b$ met at a point $M$, then two different lines through $M$ would
be perpendicular to $c$ - impossible, since through a point there is
exactly one perpendicular to a line. So $a$ and $b$ don't meet:
$a \parallel b$. $\square$

Consequence: through a point not on a line, a parallel can always be
drawn (drop the perpendicular, then erect a perpendicular to it), and
by the axiom it's the only one.

**Theorem.** If two lines are parallel to a third, they're parallel to
each other. (If they met, two parallels to the third would pass
through the meeting point.)

## Worked Example

Lines $a$ and $b$ are both perpendicular to $c$. Are they parallel?
Then: $a \parallel b$ and $c$ intersects $a$ - must $c$ intersect $b$?
Then: $a \parallel b$, $b \parallel c$ - what about $a$ and $c$?

- **$a \perp c$, $b \perp c$:** by the theorem, $a \parallel b$.
- **$c$ crosses $a$ but not $b$?** Then $c \parallel b$, and $a \parallel
  b$ - two lines through the crossing point both parallel to $b$. The
  axiom allows only one. So $c$ must intersect $b$ as well.
- **$a \parallel b$, $b \parallel c$:** by the second theorem, $a \parallel c$
  (assuming $a \neq c$).

Construction: to draw the parallel to $a$ through $M$, drop the
perpendicular $MH$ to $a$, then draw the perpendicular to $MH$ at $M$.

## Common Mistake

Trying to prove the parallel axiom, or treating it as obvious enough
to skip mentioning. It's an axiom precisely because it can't be
deduced from the others; when a proof needs "only one parallel," cite
the axiom by name. And "parallel" means no common point at all - two
lines that fail to meet on the drawing but lean together are not
parallel.

## The Takeaway

Parallel lines never meet; through a point off a line there is exactly
one parallel - the existence proved, the uniqueness an axiom. Two
lines perpendicular to the same line are parallel, and two lines
parallel to the same line are parallel to each other.

## Check Yourself

1. $a \perp m$ and $b \perp m$. What is the relation between $a$ and $b$?
2. How many lines parallel to $a$ pass through a point off $a$?
3. $a \parallel b$ and $c$ intersects $b$. Does $c$ intersect $a$?
4. Can two lines both be parallel to a third and intersect each other?
5. Describe how to construct a parallel to a line through a point,
   using only perpendiculars.
6. Someone "proves" uniqueness of the parallel by drawing one and
   noting a second would cross. Why doesn't that work?

> [!spoiler] Answers
>
> 1. $a \parallel b$.
> 2. Exactly one.
> 3. Yes - otherwise $c \parallel a$, giving two parallels to $a$ through
>    the crossing point.
> 4. No - their meeting point would have two parallels to the third.
> 5. Drop the perpendicular from the point to the line; erect the
>    perpendicular to that at the point.
> 6. A drawing shows one case; uniqueness is the parallel axiom and is
>    not provable from the rest.
