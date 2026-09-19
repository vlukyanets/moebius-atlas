---
title: "[S] Rhombus and Its Properties"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-2-lesson-2-parallelogram-and-its-properties]
---

## Why It Matters

A rhombus is a parallelogram with all four sides equal - the diamond
on a playing card, the cell of a chain-link fence, a square that's
been leaned over. Where the rectangle's extra condition was about
angles, the rhombus's is about sides, and it buys two properties
about the diagonals: they're perpendicular, and they bisect the
angles. Together with the rectangle, it's one of the two roads to the
square.

## The Big Idea

A rhombus is a parallelogram, so its diagonals bisect each other. But
it's also four equal sides, so each diagonal splits it into two
isosceles triangles - and the other diagonal, passing through the
midpoint of the base of each, is the median of an isosceles triangle
to its base. In grade 7 that median was also the altitude and the
bisector. So the diagonal is perpendicular to the other diagonal and
bisects the angles at its ends. Both new properties come from one
old theorem.

## The Rule

A **rhombus** is a parallelogram with all sides equal. It has all the
properties of a parallelogram, and in addition:

**Theorem.** The diagonals of a rhombus are perpendicular and bisect
its angles.

*Proof.* Let the diagonals of rhombus $ABCD$ meet at $O$. $\triangle ABC$
is isosceles ($AB = BC$), and $BO$ is its median to the base $AC$ ($O$
is the midpoint of $AC$, since the diagonals of a parallelogram bisect
each other). A median to the base of an isosceles triangle is also
its altitude and bisector: $BO \perp AC$ and $\angle ABO = \angle CBO$. The
same for the other three angles. $\square$

**Criteria.** A parallelogram is a rhombus if its diagonals are
perpendicular, **or** if a diagonal bisects an angle.

Consequences: the diagonals split a rhombus into four congruent right
triangles; the perimeter is $4a$.

## Worked Example

In rhombus $ABCD$, $\angle A = 60^\circ$ and $AB = 6$. Find the shorter
diagonal and the angles the diagonals make with the sides. Then:
diagonals $6$ and $8$ - find the side (the $3, 4, 5$ triangle).

- **Shorter diagonal.** $\angle A = 60^\circ$, and $\triangle ABD$ is isosceles
  ($AB = AD$) with apex $60^\circ$ - equilateral. So $BD = AB = 6$.
- **Angles with the sides.** $AC$ bisects $\angle A$: $\angle BAC = 30^\circ$.
  $\angle B = 120^\circ$, and $BD$ bisects it: $\angle ABD = 60^\circ$. In
  $\triangle ABO$: $30^\circ$, $60^\circ$, $90^\circ$ - the diagonals are
  perpendicular, as the theorem says.
- **Diagonals $6$ and $8$.** Half-diagonals $3$ and $4$ meet at a right
  angle; the side is the hypotenuse: $5$. Perimeter $20$.

Criterion check: a parallelogram whose diagonals cross at $90^\circ$ is
a rhombus - the four right triangles are congruent (two legs), so all
sides are equal.

## Common Mistake

Assuming a rhombus's diagonals are equal. They aren't, unless it's a
square: in the $6, 8$ example they differ. Equal diagonals is the
rectangle's property; perpendicular diagonals is the rhombus's. And
"a quadrilateral with perpendicular diagonals is a rhombus" is false
without the parallelogram condition - a kite has perpendicular
diagonals and unequal sides.

## The Takeaway

Four equal sides make a parallelogram whose diagonals are
perpendicular and bisect the angles - each diagonal is the axis of
two isosceles triangles. Perpendicular diagonals or an angle-bisecting
diagonal, in a parallelogram, prove a rhombus.

## Check Yourself

1. In rhombus $ABCD$, $\angle ABD = 25^\circ$. Find $\angle ABC$ and $\angle
   BAD$.
2. A rhombus has perimeter $52$. Find its side.
3. The diagonals of a rhombus are $10$ and $24$. Find its side (the $5,
   12, 13$ triangle).
4. A rhombus has an angle of $60^\circ$ and side $8$. Find the shorter
   diagonal.
5. Is a rhombus with a right angle a rectangle? What is it?
6. Someone says "the diagonals are perpendicular, so the quadrilateral
   is a rhombus." What's missing from the argument?

> [!spoiler] Answers
>
> 1. $50^\circ$; $130^\circ$.
> 2. $13$.
> 3. $13$.
> 4. $8$.
> 5. Yes; a square.
> 6. That it's a parallelogram - a kite also has perpendicular
>    diagonals.
