---
title: "[S] Circle Circumscribed about a Triangle"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-21-lesson-21-circle-and-disc, grade-7-geometry-topic-15-lesson-15-median-bisector-altitude]
---

## Why It Matters

Three towns want a hospital equally far from all of them - where does
it go? Three points on a broken plate - can you find where the plate's
centre was? Both ask for a circle through three given points. There's
always exactly one, and its centre is where the perpendicular
bisectors of the triangle's sides meet - the second "three lines, one
point" theorem, and the mirror image of the incircle.

## The Big Idea

A circle through $A$, $B$, $C$ has its centre equidistant from all
three - that's what radius means. Which points are equidistant from
$A$ and $B$? Exactly the points on the perpendicular bisector of $AB$:
for a point on it, the two triangles to $A$ and $B$ are congruent by
SAS (right angle, common leg, equal halves), so the distances match;
and conversely.

So the centre lies on the perpendicular bisector of $AB$ and of $BC$.
Those two lines meet (they're perpendicular to non-parallel sides);
their meeting point is equidistant from $A$, $B$, $C$ - and so lies on
the third bisector too. That point is the centre, and the common
distance is the radius.

## The Rule

A circle is **circumscribed** about a triangle if it passes through
all three vertices. The triangle is then **inscribed** in the circle.

**Lemma.** A point lies on the perpendicular bisector of a segment if
and only if it is equidistant from the segment's ends.

**Theorem.** The perpendicular bisectors of the sides of a triangle
intersect in one point, which is the centre of the circumscribed
circle. Every triangle has exactly one circumscribed circle.

*Proof.* The perpendicular bisectors of $AB$ and $BC$ meet at some $O$
(the sides aren't parallel, so neither are their perpendiculars). $O$ is
equidistant from $A$ and $B$, and from $B$ and $C$; so $OA = OB = OC$, and
$O$ is also on the perpendicular bisector of $AC$. The circle with
centre $O$ and radius $OA$ passes through all three vertices. $\square$

The **circumcentre** lies inside an acute triangle, on the hypotenuse
(at its midpoint) for a right triangle, and outside an obtuse
triangle.

## Worked Example

Three points $A$, $B$, $C$ are given. Construct the circle through them.
Then: in a right triangle with hypotenuse $10$, find the circumradius.
Then: the circumcentre of a triangle lies on one of its sides - what
kind of triangle is it?

- **Construct:** draw the perpendicular bisectors of $AB$ and $BC$
  (fold or compass); their intersection $O$ is the centre; radius $OA$.
- **Right triangle:** the centre is the midpoint of the hypotenuse, so
  the radius is half the hypotenuse: $5$.
- **Centre on a side:** that side is a diameter, and the opposite
  angle is right - a right triangle.

The hospital: at the circumcentre of the triangle formed by the three
towns - equidistant from all three.

## Common Mistake

Confusing the two circles. The *incircle* centre is where the
*bisectors of the angles* meet, and it's always inside. The
*circumcircle* centre is where the *perpendicular bisectors of the
sides* meet, and it can be outside. Angle bisectors are not
perpendicular bisectors - they pass through vertices; perpendicular
bisectors pass through midpoints at right angles.

## The Takeaway

The perpendicular bisectors of the sides meet in one point,
equidistant from the vertices - the centre of the unique circle
through all three. For a right triangle that centre is the midpoint of
the hypotenuse; for an obtuse one it's outside.

## Check Yourself

1. Where is the centre of the circle circumscribed about a triangle?
2. Where is the circumcentre of a right triangle?
3. A right triangle has legs $6$ and $8$ and hypotenuse $10$. Find the
   circumradius.
4. A triangle's circumcentre is outside it. What kind of triangle?
5. A point is equidistant from $A$ and $B$. On which line does it lie?
6. Someone finds the circumcentre as the intersection of the angle
   bisectors. Which circle did they find instead?

> [!spoiler] Answers
>
> 1. At the intersection of the perpendicular bisectors of the sides.
> 2. At the midpoint of the hypotenuse.
> 3. $5$.
> 4. Obtuse.
> 5. On the perpendicular bisector of $AB$.
> 6. The incircle's centre.
