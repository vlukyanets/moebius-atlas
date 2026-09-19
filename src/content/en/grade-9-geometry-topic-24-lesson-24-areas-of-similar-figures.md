---
title: "[S] Areas of Similar Figures"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-23-lesson-23-similarity-transformation, grade-8-geometry-topic-24-lesson-24-area-of-a-triangle]
---

## Why It Matters

Double the side of a pizza and you get four times the pizza. Double
the scale of a map and the paper is four times bigger. A $12$-inch
pizza against a $6$-inch one is not twice the food - it's four times.
When lengths scale by $k$, areas scale by $k^2$, and getting this wrong
is one of the most common everyday errors in estimation. The theorem
is short; the consequences reach from pricing to the reason large
animals have thick legs.

## The Big Idea

Cut a figure into tiny squares. A similarity with coefficient $k$
maps each square to a square with side $k$ times as long - so each
has area $k^2$ times as big. Add them up: the whole figure's area is
multiplied by $k^2$. For triangles it's immediate from the formula:
$\frac{1}{2} (ka)(kh) = k^2 \cdot \frac{1}{2} ah$. And since a polygon is made of
triangles and a disc is a limit of polygons, it holds for
everything. Two similar figures have areas in the ratio of the
square of their similarity coefficient - equivalently, of the square
of any pair of corresponding lengths.

## The Rule

**Theorem.** If two figures are similar with coefficient $k$, the
ratio of their areas is $k^2$:

$$
\frac{S'}{S} = k^2
$$

In particular, for similar triangles (or polygons) with corresponding
sides $a$ and $a'$:

$$
\frac{S'}{S} = \left(\frac{a'}{a}\right)^2
$$

and the same with any corresponding lengths - altitudes, medians,
perimeters, diagonals.

*Proof for triangles.* Corresponding altitudes are also in ratio $k$
(the right triangles containing them are similar), so $S' =
\frac{1}{2} (ka)(kh_a) = k^2 S$. $\square$

## Worked Example

Two similar triangles have corresponding sides $3$ and $5$ and the
smaller has area $18$; find the larger's area. Then: a $12$-inch pizza
costs \$12 and a $6$-inch one \$4 - which is the better deal? Then:
the areas of two similar polygons are $16$ and $49$ and a side of the
first is $6$; find the corresponding side of the second. Then: a
midsegment cuts a triangle into a small triangle and a trapezoid;
find the ratio of their areas.

- **Triangles.** $k = \frac{5}{3}$, $S' = 18 \cdot \frac{25}{9} = 50$.
- **Pizza.** $k = 2$, so the $12$-inch has $4$ times the area at $3$ times
  the price. The big one is the better deal.
- **Polygons.** $k^2 = \frac{49}{16}$, $k = \frac{7}{4}$; side $6 \cdot \frac{7}{4} =
  10.5$.
- **Midsegment.** The small triangle is similar with $k = \frac{1}{2}$: area
  $\frac{1}{4}$ of the whole. The trapezoid is the other $\frac{3}{4}$. Ratio
  $1 : 3$.

The polygon problem runs the theorem backwards: from areas, take the
square root to get $k$.

## Common Mistake

Scaling areas by $k$ instead of $k^2$: "sides in ratio $3 : 5$, so
areas in ratio $3 : 5$". Areas are in ratio $9 : 25$. Every time a
length ratio is given and an area ratio asked, square; every time an
area ratio is given and a length asked, take the root. The other slip
is forgetting the square root in the reverse direction: areas $16$ and
$49$ give $k = \frac{7}{4}$, not $\frac{49}{16}$.

## The Takeaway

Similar with coefficient $k$: lengths times $k$, areas times $k^2$.
From sides to areas, square the ratio; from areas to sides, take its
root. A midsegment triangle is a quarter of the whole; doubling a
pizza's diameter quadruples it.

## Check Yourself

1. Two similar triangles have sides in ratio $2 : 3$. Find the ratio
   of areas.
2. Similar polygons have areas $9$ and $36$. Find the ratio of their
   perimeters.
3. A triangle of area $50$ is similar to one with sides $\frac{3}{5}$ as
   long. Find the smaller area.
4. A square's side is tripled. By what factor does its area grow?
5. A line parallel to the base of a triangle cuts off a triangle whose
   area is $\frac{1}{9}$ of the whole. In what ratio does it divide the
   altitude (from the apex)?
6. Someone says a $10$-inch pizza is "$25\%$ more" than an $8$-inch one.
   Find the actual ratio of areas.

> [!spoiler] Answers
>
> 1. $4 : 9$.
> 2. $1 : 2$.
> 3. $50 \cdot \frac{9}{25} = 18$.
> 4. $9$.
> 5. $k = \frac{1}{3}$: the altitude is divided $1 : 2$ from the apex.
> 6. $\left(\frac{10}{8}\right)^2 = 1.5625$ - about $56\%$ more.
