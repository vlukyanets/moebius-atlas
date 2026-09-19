---
title: "[S] Symmetry About a Point"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-18-lesson-18-motions]
---

## Why It Matters

Turn a playing card upside down and it looks the same; so does the
letter S, a parallelogram, and the yin-yang sign. That's symmetry
about a point: every part has a twin on the far side of the centre,
the same distance away. It's the first motion studied on its own,
and the simplest to compute - negate the coordinates - and it
explains why a parallelogram's diagonals bisect each other and why
$y = x^3$ looks the way it does.

## The Big Idea

Fix a point $O$. Send every point $X$ to the point $X'$ on the far side
of $O$, the same distance away - $O$ is the midpoint of $XX'$. Do this
to every point of the plane and you've got central symmetry about
$O$. It preserves distances (two triangles $XOY$ and $X'OY'$ are
congruent by SAS with vertical angles), so it's a motion. In
coordinates, with $O$ at the origin, $(x; y)$ goes to $(-x; -y)$. And a
figure is centrally symmetric when this motion maps it onto itself -
when it has a centre.

## The Rule

Points $X$ and $X'$ are **symmetric about a point $O$** if $O$ is the
midpoint of $XX'$. The point $O$ is symmetric to itself.

**Central symmetry** (symmetry about $O$) is the transformation
sending each point to its symmetric point about $O$.

**Theorem.** Central symmetry is a motion.

In coordinates, symmetry about the origin: $(x; y) \mapsto (-x; -y)$;
about $O(a; b)$: $(x; y) \mapsto (2a - x; 2b - y)$.

A figure has a **centre of symmetry** $O$ if symmetry about $O$ maps it
onto itself. Examples: a segment (its midpoint), a parallelogram
(the intersection of the diagonals), a circle (its centre), a line
(any point of it). A triangle has none.

Central symmetry equals a rotation by $180^\circ$ about $O$.

## Worked Example

Find the point symmetric to $A(3; -2)$ about the origin; about $O(1;
4)$. Then: which of a rectangle, a regular pentagon, a regular
hexagon, the letter N, have a centre of symmetry? Then: prove that a
parallelogram's diagonals bisect each other using symmetry.

- **About the origin:** $(-3; 2)$. **About $O(1; 4)$:** $(2 - 3; 8 + 2) = (-1;
  10)$. Check: the midpoint of $A$ and $(-1; 10)$ is $(1; 4)$.
- **Centres.** Rectangle: yes (centre). Regular pentagon: no - turn it
  $180^\circ$ and a vertex points down where none was (odd $n$). Regular
  hexagon: yes (even $n$). Letter N: yes - its midpoint.
- **Parallelogram.** Let $O$ be the midpoint of diagonal $AC$. Symmetry
  about $O$ sends $A \to C$, $C \to A$, and line $AB$ to the parallel line
  through $C$ - which is $CD$; likewise $AD \to CB$. So $B$, the
  intersection of $AB$ and $AD$... goes to the intersection of $CD$ and
  $CB$, which is $D$. Hence $O$ is the midpoint of $BD$ too. $\square$

The parallelogram argument shows the style: a motion that maps a
figure to itself swaps its parts, and the swap proves the equality.

## Common Mistake

Confusing symmetry about a point with symmetry about a line. A
central symmetry flips *both* coordinates - $(x; y) \to (-x; -y)$ - and
turns the figure upside down; a line symmetry flips one. The letter
S is centrally symmetric but has no axis; the letter A has an axis
but no centre. The other slip: assuming every "symmetric-looking"
regular polygon has a centre. Only those with an even number of
sides do.

## The Takeaway

Symmetric about $O$: $O$ is the midpoint between a point and its
image. In coordinates, negate both (relative to $O$). A motion, equal
to a half-turn. A figure with a centre maps onto itself: even
regular polygons, parallelograms, circles - and the proof technique
is to swap parts.

## Check Yourself

1. Find the point symmetric to $(-5; 7)$ about the origin.
2. Find the point symmetric to $(2; 3)$ about $O(0; 5)$.
3. $A(1; 2)$ and $A'(7; -4)$ are symmetric about $O$. Find $O$.
4. Which have a centre of symmetry: a rhombus, an isosceles
   trapezoid, an equilateral triangle, a circle?
5. Which letters of ABCHNOSZ have a centre of symmetry?
6. Someone reflects $(4; 1)$ "about the origin" and gets $(4; -1)$. What
   did they do instead?

> [!spoiler] Answers
>
> 1. $(5; -7)$.
> 2. $(-2; 7)$.
> 3. $(4; -1)$.
> 4. Rhombus, circle.
> 5. H, N, O, S, Z.
> 6. Reflected in the $x$-axis; about the origin it's $(-4; -1)$.
