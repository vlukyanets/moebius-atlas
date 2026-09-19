---
title: "[S] Right Prism"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-28-lesson-28-planes, grade-6-topic-49-lesson-49-volume-of-a-cuboid]
---

## Why It Matters

A box, a Toblerone bar, a hexagonal pencil, an office tower - a
flat shape pushed straight up to a height. That's a right prism, the
first solid studied properly, and the cuboid of grade 6 is one of
them. Its surface area is what paint and cardboard cost; its volume
is what it holds. Both come from the base polygon and the height,
using everything grade 9 has said about polygons.

## The Big Idea

Take any polygon and slide it straight up (perpendicular to itself)
by a height $h$. The region it sweeps is a right prism: two equal
parallel bases, and rectangles for sides, one per edge of the base.
Unfold the sides and they line up into one long rectangle of width
the base's perimeter and height $h$ - so the lateral area is
perimeter times height. Stack thin copies of the base to fill the
prism, and the volume is base area times height, just as for the
cuboid. A prism is *regular* when its base is a regular polygon.

## The Rule

A **prism** is a polyhedron with two equal polygons (the **bases**)
lying in parallel planes, with corresponding vertices joined by
parallel segments (the **lateral edges**); the lateral faces are
parallelograms. A **right prism** has lateral edges perpendicular
to the bases; its lateral faces are rectangles, and its **height**
$h$ equals a lateral edge. A **regular prism** is a right prism with
a regular polygon as base. A **cuboid** is a right prism with a
rectangular base; a **cube** has all edges equal.

For a right prism with base area $S_{\text{base}}$, base perimeter $P$
and height $h$:

$$
S_{\text{lat}} = P \cdot h, \qquad S_{\text{total}} = S_{\text{lat}} + 2 S_{\text{base}},
\qquad V = S_{\text{base}} \cdot h
$$

The **diagonal** of a cuboid with edges $a, b, c$ is $d = \sqrt{a^2 + b^2 +
c^2}$.

## Worked Example

A regular triangular prism has base edge $6$ and height $10$; find its
lateral area, total area and volume. Then: a cuboid has edges $3, 4,
12$; find its diagonal and volume. Then: a right prism has a
right-triangle base with legs $5$ and $12$ and volume $300$; find its
height and total area.

- **Triangular prism.** $P = 18$, $S_{\text{lat}} = 180$. Base area
  $\frac{36\sqrt{3}}{4} = 9\sqrt{3}$; total $180 + 18\sqrt{3} \approx 211.2$.
  Volume $9\sqrt{3} \cdot 10 = 90\sqrt{3} \approx 155.9$.
- **Cuboid.** $d = \sqrt{9 + 16 + 144} = 13$; $V = 144$.
- **Right-triangle base.** $S_{\text{base}} = 30$, so $h = \frac{300}{30} =
  10$. Hypotenuse $13$, $P = 30$, $S_{\text{lat}} = 300$, total $300 + 60 =
  360$.

The pattern: everything reduces to the base polygon (area,
perimeter) and the height.

## Common Mistake

Using the base's perimeter where its area is needed, or vice versa.
Lateral area is *perimeter* times height (a band around the sides);
volume is *area* times height (the base swept up). Check the units:
$P \cdot h$ is length squared, $S \cdot h$ is length cubed. The other
slip is the cuboid diagonal as $\sqrt{a^2 + b^2}$ - that's a face
diagonal; the space diagonal needs all three edges.

## The Takeaway

A right prism is a polygon pushed straight up: lateral area $=$
perimeter $\times$ height, volume $=$ base area $\times$ height, total
$=$ lateral $+$ two bases. Cuboid diagonal $\sqrt{a^2 + b^2 + c^2}$.
Everything reduces to the base and the height.

## Check Yourself

1. A regular quadrilateral prism has base edge $4$ and height $7$.
   Find its lateral area and volume.
2. A cube has edge $5$. Find its total area, volume and diagonal.
3. A cuboid has edges $2, 3, 6$. Find its diagonal.
4. A regular hexagonal prism has base edge $2$ and height $5$. Find its
   volume.
5. A right prism with a square base has lateral area $80$ and height
   $5$. Find the base edge and the volume.
6. Someone finds the volume of a triangular prism as "perimeter
   times height $= 18 \cdot 10 = 180$". Name the error.

> [!spoiler] Answers
>
> 1. $112$; $112$.
> 2. $150$; $125$; $5\sqrt{3}$.
> 3. $7$.
> 4. Base $6\sqrt{3}$; volume $30\sqrt{3} \approx 52$.
> 5. $4a = 16$, $a = 4$; $V = 80$.
> 6. That's the lateral area; volume needs the base *area*, $9\sqrt{3}$.
