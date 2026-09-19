---
title: "[S] Circle Inscribed in a Triangle"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-22-lesson-22-tangent-to-a-circle, grade-7-geometry-topic-15-lesson-15-median-bisector-altitude]
---

## Why It Matters

What's the biggest coin that fits inside a triangular hole? A circle
that touches all three sides. Does one always exist, and where's its
centre? The answer is one of the neatest facts in geometry: the three
bisectors of a triangle always meet in a single point, and that point
is the centre. It's the first "three lines meet at one point" theorem,
and the incircle it produces is the bisector's most useful property.

## The Big Idea

A circle touching all three sides has its centre at the same distance
from each side - the radius. Which points are equidistant from the two
sides of an angle? Exactly the points on its bisector: drop
perpendiculars to both sides from a point on the bisector, and the two
right triangles are congruent (hypotenuse and acute angle), so the
perpendiculars are equal. And conversely.

So the centre must lie on the bisector of angle $A$, and of angle $B$.
Those two bisectors meet at a point; being on both, it's equidistant
from all three sides - hence also on the bisector of $C$. Three lines,
one point, and a circle of radius "that common distance" touches all
three sides from the inside.

## The Rule

A circle is **inscribed** in a triangle if it touches all three sides.
The triangle is then **circumscribed** about the circle.

**Lemma.** A point lies on the bisector of an angle if and only if it
is equidistant from the sides of the angle.

**Theorem.** The bisectors of a triangle intersect in one point, which
is the centre of the inscribed circle. Every triangle has exactly one
inscribed circle.

*Proof.* Let the bisectors from $A$ and $B$ meet at $O$. Being on the
bisector of $A$, $O$ is equidistant from $AB$ and $AC$; on the bisector
of $B$, from $AB$ and $BC$. So $O$ is equidistant from all three sides -
in particular from $AC$ and $BC$, so it lies on the bisector of $C$ too.
The circle with centre $O$ and radius that common distance touches
each side at the foot of the perpendicular (radius $\perp$ side).
$\square$

The **incentre** is inside the triangle for every triangle.

## Worked Example

In $\triangle ABC$, the incircle touches $AB$ at $K$, $BC$ at $L$, $CA$ at
$M$, with $AK = 3$, $BL = 4$, $CM = 5$. Find the perimeter. Then: $\angle A =
70^\circ$, $\angle B = 50^\circ$ - find $\angle AOB$ where $O$ is the incentre.

- **Tangent segments from a point are equal:** $AK = AM = 3$, $BK = BL =
  4$, $CL = CM = 5$.
- **Sides:** $AB = AK + KB = 7$, $BC = 4 + 5 = 9$, $CA = 5 + 3 = 8$.
  Perimeter $24$.
- **Angle at the incentre:** $O$ is on both bisectors, so $\angle OAB =
  35^\circ$, $\angle OBA = 25^\circ$, and $\angle AOB = 180^\circ - 35^\circ -
  25^\circ = 120^\circ$.

Construction: draw two bisectors, drop a perpendicular from their
intersection to any side - that's the radius.

## Common Mistake

Placing the centre at the intersection of the medians or the
altitudes. Those also meet in a point, but *different* points; only
the bisectors' meeting point is equidistant from the sides. And the
incircle touches the sides at the feet of the perpendiculars from the
centre - not at the midpoints of the sides (except in an equilateral
triangle).

## The Takeaway

The bisectors of a triangle meet in one point, equidistant from the
three sides; the circle with that centre and that distance as radius
touches all three sides - the incircle. Tangent segments from each
vertex to the incircle are equal, which turns side lengths into
sums.

## Check Yourself

1. Where is the centre of the incircle of a triangle?
2. Is the incentre ever outside the triangle?
3. The incircle touches the sides at $K$, $L$, $M$ with $AK = 2$, $BK =
   6$, $CL = 3$. Find all three sides.
4. $\angle C = 90^\circ$; find $\angle AOB$ for the incentre $O$.
5. In an isosceles triangle, on which line does the incentre lie?
6. Someone constructs the incircle from the intersection of two
   altitudes. Why doesn't it touch the sides?

> [!spoiler] Answers
>
> 1. At the intersection of the bisectors.
> 2. No.
> 3. $AB = 8$, $BC = 9$, $CA = 5$.
> 4. $180^\circ - \frac{90^\circ}{2} = 135^\circ$.
> 5. On the bisector from the apex - the axis of symmetry.
> 6. The altitudes' intersection isn't equidistant from the sides; only
>    the bisectors' is.
