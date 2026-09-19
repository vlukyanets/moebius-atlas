---
title: "[S] Regular Polygons"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-8-geometry-topic-21-lesson-21-polygon-and-its-elements, grade-8-geometry-topic-20-lesson-20-solving-right-triangles]
---

## Why It Matters

Honeycombs, stop signs, floor tiles, the faces of dice and
footballs - regular polygons are the shapes nature and design reach
for when everything should be equal. They're also how the circle was
first measured: a regular polygon with many sides is almost a circle,
and Archimedes squeezed $\pi$ between a $96$-gon inside and one
outside. This topic gives the formulas that link a regular polygon's
side to the circles it sits between.

## The Big Idea

A regular polygon is as symmetric as a polygon can be: all sides
equal, all angles equal. That symmetry forces a centre - one point
equidistant from all the vertices *and* from all the sides - so every
regular polygon has both a circumscribed circle (through the
vertices, radius $R$) and an inscribed circle (touching the sides,
radius $r$), concentric. Join the centre to two adjacent vertices and
you get an isosceles triangle with apex angle $\frac{360^\circ}{n}$; split
it by the apothem and a right triangle appears, with half a side, $r$
and $R$ - and trigonometry links all three.

## The Rule

A polygon is **regular** if all its sides are equal and all its
angles are equal. Each interior angle is

$$
\alpha_n = \frac{(n - 2) \cdot 180^\circ}{n}
$$

**Theorem.** A regular polygon has a circumscribed circle and an
inscribed circle with a common centre.

For a regular $n$-gon with side $a_n$, circumradius $R$, inradius $r$:

$$
a_n = 2R \sin \frac{180^\circ}{n}, \qquad r = R \cos \frac{180^\circ}{n}, \qquad
a_n = 2r \tan \frac{180^\circ}{n}
$$

Special cases: $a_3 = R\sqrt{3}$, $a_4 = R\sqrt{2}$, $a_6 = R$; and $r = \frac{R}{2},
\frac{R\sqrt{2}}{2}, \frac{R\sqrt{3}}{2}$ respectively.

Area: $S = \frac{1}{2} P r$ where $P = n a_n$ is the perimeter.

## Worked Example

A regular hexagon is inscribed in a circle of radius $6$. Find its
side, inradius, interior angle and area. Then: a regular octagon has
inradius $5$; find its side ($\tan 22.5^\circ \approx 0.414$). Then: a
square is inscribed in a circle of radius $R$ and a circle is inscribed
in the square; find the ratio of the radii.

- **Hexagon.** $a_6 = R = 6$. $r = 6 \cos 30^\circ = 3\sqrt{3}$. Interior angle
  $\frac{4 \cdot 180^\circ}{6} = 120^\circ$. Area $\frac{1}{2} \cdot 36 \cdot 3\sqrt{3}
  = 54\sqrt{3}$ (or six equilateral triangles of side $6$).
- **Octagon.** $a_8 = 2 \cdot 5 \cdot \tan 22.5^\circ \approx 4.14$.
- **Square.** $r = R \cos 45^\circ = \frac{R\sqrt{2}}{2}$, so $\frac{r}{R} =
  \frac{\sqrt{2}}{2}$.

The hexagon is the friendliest: the central triangles are
equilateral, so the side equals the radius - which is why a compass
set to the radius steps around a circle exactly six times.

## Common Mistake

Using the whole central angle $\frac{360^\circ}{n}$ in the right
triangle. The apothem *bisects* the central angle, so the right
triangle's angle at the centre is $\frac{180^\circ}{n}$ - $30^\circ$ for the
hexagon, not $60^\circ$. Sanity check with $n = 6$: $2R \sin 30^\circ = R$,
correct; $2R \sin 60^\circ = R\sqrt{3}$ would be the triangle's side.

## The Takeaway

Regular: equal sides and equal angles, hence concentric circumscribed
and inscribed circles. Half a side, $r$ and $R$ form a right triangle
with angle $\frac{180^\circ}{n}$ at the centre, and every formula falls
out of it. Remember $a_6 = R$.

## Check Yourself

1. Find the interior angle of a regular pentagon; of a regular
   $12$-gon.
2. A regular triangle is inscribed in a circle of radius $4$. Find its
   side and inradius.
3. A square has side $10$. Find $R$ and $r$.
4. A regular hexagon has side $8$. Find its area.
5. How many sides has a regular polygon with interior angle
   $150^\circ$?
6. Someone computes the side of a regular hexagon in a circle of
   radius $5$ as $2 \cdot 5 \cdot \sin 60^\circ$. Correct it.

> [!spoiler] Answers
>
> 1. $108^\circ$; $150^\circ$.
> 2. $4\sqrt{3}$; $2$.
> 3. $R = 5\sqrt{2}$, $r = 5$.
> 4. $6 \cdot \frac{64\sqrt{3}}{4} = 96\sqrt{3}$.
> 5. $\frac{(n - 2)180}{n} = 150$, $n = 12$.
> 6. $2 \cdot 5 \cdot \sin 30^\circ = 5$.
