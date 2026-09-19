---
title: "[S] Symmetry About a Line"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-18-lesson-18-motions]
---

## Why It Matters

A butterfly, a face, a cathedral front, the letter A - mirror
symmetry is the one people notice first and find beautiful. It's
also the most fundamental motion: every other motion is a
combination of reflections, and a reflection is what a mirror does.
Geometrically it explains isosceles triangles, the perpendicular
bisector, and why the shortest path that touches a line bounces off
it at equal angles.

## The Big Idea

Fix a line $l$ - the mirror. Send every point $X$ to the point $X'$ on
the other side, the same distance from $l$, with $XX'$ perpendicular
to $l$: $l$ is the perpendicular bisector of $XX'$. Points on $l$ stay
put. This is reflection in $l$, and it preserves distances (by
congruent right triangles), so it's a motion - but a motion that
turns the plane over: a clockwise triangle becomes counterclockwise.
A figure with an axis of symmetry is one that this mirror maps onto
itself.

## The Rule

Points $X$ and $X'$ are **symmetric about a line $l$** if $l$ is the
perpendicular bisector of $XX'$. A point on $l$ is symmetric to itself.

**Axial symmetry** (reflection in $l$) is the transformation sending
each point to its symmetric point about $l$.

**Theorem.** Axial symmetry is a motion.

In coordinates: reflection in the $x$-axis $(x; y) \mapsto (x; -y)$; in
the $y$-axis $(x; y) \mapsto (-x; y)$; in the line $y = x$: $(x; y) \mapsto (y;
x)$.

A figure has an **axis of symmetry** $l$ if reflection in $l$ maps it
onto itself. Examples: an isosceles triangle (the altitude to the
base), a rectangle (two axes), a rhombus (its diagonals), a square
(four), a circle (every diameter), a regular $n$-gon ($n$ axes).

## Worked Example

Reflect $A(3; -2)$ in the $x$-axis, the $y$-axis, and the line $y = x$.
Then: count the axes of symmetry of a rectangle, a rhombus, a
square, an equilateral triangle, a parallelogram. Then: a ray of
light from $A$ must hit a mirror line $l$ and reach $B$ on the same
side; where should it hit to make the path shortest?

- **Reflections:** $(3; 2)$; $(-3; -2)$; $(-2; 3)$.
- **Axes.** Rectangle: $2$ (through midpoints of opposite sides - *not*
  the diagonals). Rhombus: $2$ (the diagonals - *not* the midlines).
  Square: $4$ (both kinds). Equilateral triangle: $3$. Parallelogram
  (general): $0$ - it has a centre but no axis.
- **Shortest path.** Reflect $B$ in $l$ to $B'$. Any path $A \to P \to B$
  with $P$ on $l$ has length $AP + PB = AP + PB' \geq AB'$, with equality
  when $P$ is on segment $AB'$. So hit at $P = l \cap AB'$ - and there
  the angles with $l$ are equal: the law of reflection.

The mirror trick - reflect the target and draw a straight line - is
the standard use of axial symmetry in problems.

## Common Mistake

Giving a rectangle its diagonals as axes. Fold a (non-square)
rectangle along a diagonal and the corners don't meet - the diagonal
is an axis of the *rhombus*, not the rectangle. Check each candidate
axis by folding. The other slip: forgetting that reflection reverses
orientation, so reflecting twice in the same line undoes it, while a
rotation by $180^\circ$ (two perpendicular reflections) does not.

## The Takeaway

Reflection in $l$: $l$ is the perpendicular bisector between a point
and its image. A motion that turns the plane over. Figures with axes
map onto themselves under folding; count axes by folding, not by
looking. Reflect the target to straighten a path.

## Check Yourself

1. Reflect $(-4; 5)$ in the $x$-axis; in the $y$-axis.
2. Reflect $(2; 7)$ in the line $y = x$.
3. $A(1; 3)$ and $A'(5; 3)$ are symmetric about a line. Which line?
4. How many axes of symmetry has a regular pentagon? A circle?
5. Which of the letters A, B, C, H, N, S have an axis of symmetry?
6. Someone says a rhombus has four axes of symmetry. Which two are
   wrong?

> [!spoiler] Answers
>
> 1. $(-4; -5)$; $(4; 5)$.
> 2. $(7; 2)$.
> 3. The vertical line $x = 3$.
> 4. $5$; infinitely many.
> 5. A, B, C, H (N and S have a centre, not an axis).
> 6. The lines through midpoints of opposite sides - those are axes
>    of a rectangle; a rhombus's axes are its diagonals.
