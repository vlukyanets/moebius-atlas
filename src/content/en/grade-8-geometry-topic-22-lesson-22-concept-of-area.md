---
title: "[S] The Concept of the Area of a Polygon"
tag: DEF
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-21-lesson-21-polygon-and-its-elements, grade-5-topic-25-lesson-25-area-of-rectangle-and-square]
---

## Why It Matters

You've computed areas since grade 5 - rectangles, then discs. But
what *is* area, such that a triangle and a trapezoid have one too, and
such that cutting a shape up and rearranging it doesn't change it?
Geometry answers with three plain properties, and everything about
area - every formula from here to the end of school - is deduced from
them. This topic states the rules of the game; the next three play it.

## The Big Idea

Area is a number attached to a figure, measuring how much of the
plane it covers. Three things must be true for it to deserve the name.
Congruent figures have the same area - moving a shape doesn't change
its size. A figure cut into pieces has area equal to the sum of the
pieces - that's what lets you compute a complicated shape from simple
ones, and it's why cutting and rearranging is a legal move. And the
unit square has area $1$, which fixes the scale.

From those three, the area of a rectangle is forced to be $ab$; and
from the rectangle, by cutting and rearranging, come the
parallelogram, the triangle and the trapezoid.

## The Rule

The **area** of a polygon is a positive quantity with the properties:

1. **equal polygons have equal areas**;
2. if a polygon is composed of several polygons, its area is the
   **sum** of their areas;
3. the area of a square with side $1$ (the unit square) is $1$.

The unit of area is the square of the unit of length: $\text{cm}^2$,
$\text{m}^2$, and so on.

**Theorem.** The area of a rectangle with sides $a$ and $b$ is

$$
S = ab
$$

(For whole-number sides it's counting unit squares; the general case
extends this by the three properties.) The area of a square with side
$a$ is $a^2$.

Figures with equal areas are called **equal in area** (equivalent);
equal figures are equal in area, but not conversely.

## Worked Example

Find the area of an L-shaped floor: a $6 \times 4$ rectangle with a $2
\times 2$ square cut from one corner. Then: a rectangle has area $54$
and one side $6$ - find the other and the perimeter. Then: are a $3
\times 8$ rectangle and a $4 \times 6$ rectangle equal? Equal in area?

- **L-shape.** By property 2, area of the whole minus the cut-out:
  $24 - 4 = 20$. Or split the L into a $6 \times 2$ strip and a $4 \times 2$
  strip: $12 + 8 = 20$. Same - as property 2 guarantees.
- **Rectangle:** other side $54 : 6 = 9$; perimeter $2(6 + 9) = 30$.
- **$3 \times 8$ vs $4 \times 6$:** both have area $24$ - equal in area. But
  not equal figures: their sides differ, so no motion carries one to
  the other.

Units: a rectangle $2$ m by $50$ cm has area $2 \cdot 0.5 = 1\ \text{m}^2$, or
$200 \cdot 50 = 10\,000\ \text{cm}^2$ - the same, since $1\ \text{m}^2 = 10\,000\
\text{cm}^2$.

## Common Mistake

Concluding that figures with equal areas are equal, or that equal
perimeters mean equal areas. Equal area is a much weaker relation
than congruence: $3 \times 8$ and $4 \times 6$ share area $24$ and nothing
else. And perimeter says nothing about area - a $1 \times 11$ rectangle
and a $6 \times 6$ square both have perimeter $24$, with areas $11$ and
$36$. Keep the three quantities apart: shape, boundary length, region
size.

## The Takeaway

Area is what stays the same under motion, adds up over pieces, and
gives the unit square $1$. Those three properties force $S = ab$ for a
rectangle and license every cut-and-rearrange argument to come. Equal
in area is weaker than equal.

## Check Yourself

1. Which property says that a figure's area doesn't change when it's
   moved?
2. A $5 \times 5$ square has a $1 \times 1$ hole. Find the remaining
   area.
3. A rectangle has area $72\ \text{cm}^2$ and sides in ratio $1 : 2$. Find
   the sides.
4. Are all rectangles of area $36$ equal in area? Are they all equal?
5. Express $2.5\ \text{m}^2$ in $\text{cm}^2$.
6. Someone says two rectangles with perimeter $20$ must have the same
   area. Give a counterexample.

> [!spoiler] Answers
>
> 1. Property 1 - equal polygons have equal areas.
> 2. $24$.
> 3. $x \cdot 2x = 72$, $x = 6$: $6$ cm and $12$ cm.
> 4. Yes; no - $4 \times 9$ and $6 \times 6$ differ.
> 5. $25\,000\ \text{cm}^2$.
> 6. $1 \times 9$ (area $9$) and $5 \times 5$ (area $25$).
