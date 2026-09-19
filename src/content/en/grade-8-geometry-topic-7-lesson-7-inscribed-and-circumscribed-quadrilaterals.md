---
title: "[S] Inscribed and Circumscribed Quadrilaterals"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-1-lesson-1-quadrilateral-and-its-elements, grade-7-geometry-topic-25-lesson-25-central-and-inscribed-angles, grade-7-geometry-topic-22-lesson-22-tangent-to-a-circle]
---

## Why It Matters

Every triangle has a circle through its corners and a circle touching
its sides. Quadrilaterals aren't so lucky: most have neither. Which
ones do? The answers are two clean tests - one on the angles, one on
the sides - and they turn out to be the two facts that decide whether
a four-sided frame can be set in a round window or wrapped around a
round pipe.

## The Big Idea

A quadrilateral inscribed in a circle has its four corners on the
circle, so each angle is an inscribed angle. Opposite angles $A$ and
$C$ stand on the two arcs that together make the whole circle - $360^\circ$
- so they measure half of $360^\circ$ between them: $\angle A + \angle C =
180^\circ$. Conversely, if opposite angles are supplementary, the fourth
vertex is forced onto the circle through the other three.

A quadrilateral circumscribed about a circle has the circle touching
all four sides. From each vertex, the two tangent segments are equal.
Going round, the sum of one pair of opposite sides collects the same
four tangent lengths as the other pair - so the two sums are equal.
And conversely.

## The Rule

A quadrilateral is **inscribed** in a circle if all its vertices lie
on the circle (the circle is **circumscribed** about it).

**Theorem.** In an inscribed quadrilateral, the sums of opposite angles
are equal: $\angle A + \angle C = \angle B + \angle D = 180^\circ$.

**Converse.** If the sum of two opposite angles of a quadrilateral is
$180^\circ$, a circle can be circumscribed about it.

A quadrilateral is **circumscribed** about a circle if all its sides
touch the circle (the circle is **inscribed** in it).

**Theorem.** In a circumscribed quadrilateral, the sums of opposite
sides are equal: $AB + CD = BC + AD$.

**Converse.** If the sums of opposite sides of a convex quadrilateral
are equal, a circle can be inscribed in it.

Consequences: every rectangle can be inscribed in a circle (opposite
angles $90^\circ + 90^\circ$); every rhombus can be circumscribed about
one ($a + a = a + a$); a square can be both; a parallelogram that is
neither can be neither.

## Worked Example

An inscribed quadrilateral has $\angle A = 75^\circ$ and $\angle B = 110^\circ$.
Find $\angle C$ and $\angle D$. Then: can a circle be inscribed in a
quadrilateral with sides $5, 7, 9, 11$ in order? And in one with sides
$5, 7, 11, 9$?

- **$\angle C = 180^\circ - 75^\circ = 105^\circ$; $\angle D = 180^\circ - 110^\circ =
  70^\circ$.** Check the total: $75 + 110 + 105 + 70 = 360$.
- **Sides $5, 7, 9, 11$:** opposite sums $5 + 9 = 14$ and $7 + 11 = 18$.
  Unequal - no inscribed circle.
- **Sides $5, 7, 11, 9$:** opposite sums $5 + 11 = 16$ and $7 + 9 = 16$.
  Equal - a circle can be inscribed.

Rectangle in a circle: opposite angles sum to $180^\circ$ - yes, always;
the centre is the diagonals' crossing.

## Common Mistake

Testing *adjacent* angles or *adjacent* sides. The inscribed test is
about *opposite* angles summing to $180^\circ$; adjacent angles summing to
$180^\circ$ is a trapezoid fact. The circumscribed test is about
*opposite* sides summing equally - $AB + CD$ against $BC + AD$, not
neighbours. Label the quadrilateral in order and pair across.

## The Takeaway

Corners on a circle $\iff$ opposite angles sum to $180^\circ$. Sides
touching a circle $\iff$ opposite sides have equal sums. Rectangles
inscribe, rhombi circumscribe, squares do both, general parallelograms
do neither.

## Check Yourself

1. An inscribed quadrilateral has $\angle A = 88^\circ$. Find $\angle C$.
2. Can a circle be circumscribed about a quadrilateral with angles
   $80^\circ$, $95^\circ$, $100^\circ$, $85^\circ$ in order?
3. A circumscribed quadrilateral has sides $4$, $6$, $5$ in order. Find
   the fourth.
4. Can a circle be inscribed in a rectangle $3 \times 5$? In a square?
5. Can a circle be circumscribed about a rhombus with a $60^\circ$ angle?
6. Someone checks whether a quadrilateral is inscribed by adding two
   adjacent angles. Which angles should be added?

> [!spoiler] Answers
>
> 1. $92^\circ$.
> 2. Yes: $80 + 100 = 180$ and $95 + 85 = 180$.
> 3. $4 + 5 = 6 + x$, $x = 3$.
> 4. No ($3 + 3 \neq 5 + 5$); yes.
> 5. No: opposite angles are $60^\circ$ and $60^\circ$, summing to $120^\circ$.
> 6. Opposite angles.
