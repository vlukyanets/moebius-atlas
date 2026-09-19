---
title: "[S] Polygon and Its Elements"
tag: DEF
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-1-lesson-1-quadrilateral-and-its-elements]
---

## Why It Matters

Stop signs have eight sides, honeycomb cells six, a pentagon five.
Triangles and quadrilaterals were the first two members of a family
with no last member, and the family has rules of its own: how many
diagonals a shape with $n$ sides has, and what its angles add up to.
Both come from the same move - cut it into triangles - and both are
formulas in $n$ that work for every polygon at once.

## The Big Idea

A polygon is a closed chain of segments: $n$ sides, $n$ vertices, $n$
angles. From one vertex, draw diagonals to every vertex it isn't
already joined to: $n - 3$ of them, cutting the polygon into $n - 2$
triangles. Each triangle brings $180^\circ$, so the angles of the
polygon total $(n - 2) \cdot 180^\circ$. For $n = 3$ that's $180^\circ$, for
$n = 4$ it's $360^\circ$ - the old results - and for a hexagon it's
$720^\circ$.

Counting all diagonals: each of $n$ vertices has $n - 3$, and each
diagonal was counted from both ends, so there are $\frac{n(n - 3)}{2}$.
A regular polygon - all sides and all angles equal - shares the total
evenly among its $n$ angles.

## The Rule

A **polygon** $A_1A_2 \ldots A_n$ is a closed broken line of $n$ segments
(**sides**) joining $n$ points (**vertices**), no two non-adjacent sides
crossing. It's an **$n$-gon**. A **diagonal** joins two non-adjacent
vertices. The polygon is **convex** if it lies on one side of each line
containing a side.

**Number of diagonals** of an $n$-gon: $\dfrac{n(n - 3)}{2}$.

**Theorem.** The sum of the interior angles of a convex $n$-gon is

$$
(n - 2) \cdot 180^\circ
$$

**Exterior angles** (one at each vertex, adjacent to the interior
angle) of a convex polygon sum to $360^\circ$.

A polygon is **regular** if all its sides are equal and all its angles
are equal. Each angle of a regular $n$-gon is $\dfrac{(n - 2) \cdot
180^\circ}{n}$.

## Worked Example

Find the angle sum of a hexagon, the number of its diagonals, and each
angle of a regular hexagon. Then: a polygon's angles sum to $1440^\circ$
- how many sides? Then: each angle of a regular polygon is $150^\circ$ -
how many sides?

- **Hexagon:** $n = 6$. Angle sum $(6 - 2) \cdot 180^\circ = 720^\circ$.
  Diagonals $\frac{6 \cdot 3}{2} = 9$. Regular: each angle $720^\circ : 6 =
  120^\circ$ - the honeycomb angle.
- **Sum $1440^\circ$:** $(n - 2) \cdot 180 = 1440$, $n - 2 = 8$, $n = 10$. A
  decagon.
- **Each angle $150^\circ$:** the exterior angle is $30^\circ$, and exterior
  angles sum to $360^\circ$: $n = 360 : 30 = 12$.

A regular pentagon: angle sum $540^\circ$, each angle $108^\circ$; $5$
diagonals.

## Common Mistake

Using $n \cdot 180^\circ$ or $(n - 1) \cdot 180^\circ$ for the angle sum. The
triangles cut from one vertex number $n - 2$ - a quadrilateral gives
two, not four - so it's $(n - 2)$. Test any formula on the triangle
and the square before trusting it. And the diagonal count divides by
$2$ - each diagonal has two ends - which people forget, doubling the
answer.

## The Takeaway

An $n$-gon has $\frac{n(n - 3)}{2}$ diagonals and interior angles
summing to $(n - 2) \cdot 180^\circ$ - both from cutting it into
triangles; its exterior angles always sum to $360^\circ$. A regular
$n$-gon shares the angle sum equally.

## Check Yourself

1. Find the angle sum of an octagon and each angle if it's regular.
2. How many diagonals does a pentagon have? A $10$-gon?
3. A convex polygon's angles sum to $900^\circ$. How many sides?
4. Each angle of a regular polygon is $140^\circ$. How many sides?
5. Can a regular polygon have angles of $100^\circ$?
6. Someone says a hexagon's angles sum to $1080^\circ$ "since $6 \cdot 180
   = 1080$." What's the right sum?

> [!spoiler] Answers
>
> 1. $1080^\circ$; $135^\circ$.
> 2. $5$; $35$.
> 3. $7$.
> 4. Exterior $40^\circ$: $9$.
> 5. No - exterior $80^\circ$, and $360 : 80$ isn't a whole number.
> 6. $(6 - 2) \cdot 180 = 720^\circ$.
