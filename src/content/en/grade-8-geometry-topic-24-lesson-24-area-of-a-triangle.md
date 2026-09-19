---
title: "[S] Area of a Triangle"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-23-lesson-23-area-of-a-parallelogram]
---

## Why It Matters

Every polygon can be cut into triangles, so once you can find the
area of a triangle you can find the area of anything with straight
sides - a plot of land, a roof, a sail. The formula is half of the
parallelogram's, and the reason is a picture: two copies of a triangle
make a parallelogram. This is the most used area formula in school
geometry, and its corollaries - the right triangle, the ratio of areas
along a common altitude - come up in problems for years.

## The Big Idea

Take any triangle and a second copy of it, turned around by $180^\circ$.
Glue them along a side: the two copies fill a parallelogram exactly,
with that side as base and the triangle's altitude as height. So the
parallelogram's area is base times height, and the triangle, being
half of it, has area half of base times height.

For a right triangle the legs are perpendicular, so one leg is the
base and the other is the altitude: half the product of the legs.

## The Rule

**Theorem.** The area of a triangle equals half the product of a side
and the altitude drawn to it:

$$
S = \frac{1}{2} a h_a = \frac{1}{2} b h_b = \frac{1}{2} c h_c
$$

*Proof.* Complete $ABC$ to a parallelogram $ABDC$ by drawing the copy
of the triangle across side $BC$. The diagonal $BC$ splits it into two
congruent triangles, so $S_{ABC} = \frac{1}{2} S_{ABDC} = \frac{1}{2} a
h_a$. $\square$

**Corollaries.**

- A right triangle with legs $a$ and $b$: $S = \frac{1}{2} ab$.
- Two triangles with the same altitude have areas in the ratio of
  their bases; a median divides a triangle into two triangles of
  equal area.
- Two triangles with a common angle have areas in the ratio of the
  products of the sides enclosing it.

## Worked Example

A triangle has sides $13, 14, 15$ and the altitude to the side of $14$ is
$12$. Find its area and the altitude to the side of $13$. Then: a right
triangle has hypotenuse $10$ and one leg $6$ - find its area and the
altitude to the hypotenuse.

- **Area:** $S = \frac{1}{2} \cdot 14 \cdot 12 = 84$.
- **Altitude to $13$:** $\frac{1}{2} \cdot 13 \cdot h = 84$, so $h = \frac{168}{13}
  \approx 12.9$.
- **Right triangle:** other leg $\sqrt{100 - 36} = 8$; area $\frac{1}{2}
  \cdot 6 \cdot 8 = 24$.
- **Altitude to the hypotenuse:** the same area written with the
  hypotenuse as base: $\frac{1}{2} \cdot 10 \cdot h = 24$, $h = 4.8$. This
  is the general trick: $h_c = \frac{ab}{c}$ - write the area two ways.

A median $AM$ of a triangle of area $30$ cuts it into two triangles of
area $15$ each - same altitude from $A$, equal bases $BM = MC$.

## Common Mistake

Forgetting the half - $14 \cdot 12 = 168$ is the parallelogram, not the
triangle. And, as with the parallelogram, using a side as the height:
the altitude is the perpendicular from a vertex to the opposite side,
and only in a right triangle do the two legs serve as base and height.
For the $13, 14, 15$ triangle, $\frac{1}{2} \cdot 13 \cdot 14$ is
meaningless.

## The Takeaway

Half of base times altitude, because two copies of a triangle make a
parallelogram. For a right triangle, half the product of the legs. The
same area written with different bases links the three altitudes, and
equal altitudes make areas proportional to bases.

## Check Yourself

1. Base $10$, altitude $7$. Find the area.
2. A right triangle has legs $5$ and $12$. Find its area and the
   altitude to the hypotenuse.
3. Area $36$, altitude to one side $9$. Find that side.
4. Two triangles share the altitude $h$ and have bases $3$ and $5$. Find
   the ratio of their areas.
5. An isosceles triangle has sides $10, 10, 12$. Find its area.
6. Someone finds the area of a triangle with sides $6, 8, 10$ as $\frac{1}{2}
   \cdot 6 \cdot 10 = 30$. What's wrong?

> [!spoiler] Answers
>
> 1. $35$.
> 2. $30$; hypotenuse $13$, altitude $\frac{60}{13} \approx 4.6$.
> 3. $8$.
> 4. $3 : 5$.
> 5. Altitude to the base $\sqrt{100 - 36} = 8$; area $48$.
> 6. $10$ is the hypotenuse, not a leg; the legs are $6$ and $8$, area
>    $24$.
