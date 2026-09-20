---
title: "[S] Pyramid"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-29-lesson-29-right-prism]
---

## Why It Matters

The pyramids of Giza, a tent, the roof of a tower, a crystal of
quartz - a polygon on the ground and a point above it, joined by
sloping triangles. A pyramid is the second polyhedron studied, and
its volume holds a surprise: it's exactly a *third* of the prism on
the same base with the same height. Three pyramids fill a prism -
which is why a cone is a third of a cylinder too, next topic.

## The Big Idea

Take a polygon (the base) and a point not in its plane (the apex);
join the apex to every vertex. The sides are triangles meeting at the
apex, and the height is the perpendicular from the apex to the base.
For a *regular* pyramid - regular base, apex above its centre - all
side triangles are congruent isosceles triangles, and their common
altitude is the **apothem**, which with the height and the base's
inradius makes a right triangle: the key to every computation. The
volume, $\frac{1}{3}$ of base times height, comes from cutting a prism
into three equal pyramids.

## The Rule

A **pyramid** is a polyhedron with a polygon as **base** and a point
outside its plane as **apex**, joined to each vertex of the base by
**lateral edges**; the **lateral faces** are triangles. Its
**height** $h$ is the perpendicular from the apex to the base plane. A
pyramid is named by its base: triangular, quadrilateral, etc.

A **regular pyramid** has a regular polygon as base and its apex
projecting to the base's centre. Its lateral faces are congruent
isosceles triangles; their common altitude is the **apothem** $l$.
With $r$ the inradius of the base: $l^2 = h^2 + r^2$.

For a regular pyramid with base perimeter $P$:

$$
S_{\text{lat}} = \frac{1}{2} P l, \qquad S_{\text{total}} = S_{\text{lat}} + S_{\text{base}}
$$

For any pyramid:

$$
V = \frac{1}{3} S_{\text{base}} \cdot h
$$

## Worked Example

A regular quadrilateral pyramid has base edge $6$ and height $4$. Find
its apothem, lateral area, total area and volume. Then: a regular
triangular pyramid has base edge $6$ and lateral edge $5$; find its
height. Then: how much canvas for a square tent $4$ m on a side and $3$
m tall (sides only)?

- **Apothem.** The base's inradius is $r = 3$ (half the edge). $l =
  \sqrt{16 + 9} = 5$.
- **Lateral area.** $P = 24$: $\frac{1}{2} \cdot 24 \cdot 5 = 60$. **Total:** $60 +
  36 = 96$. **Volume:** $\frac{1}{3} \cdot 36 \cdot 4 = 48$.
- **Triangular pyramid.** The apex projects to the centre, at
  circumradius $R = \frac{6}{\sqrt{3}} = 2\sqrt{3}$ from a vertex. The lateral
  edge, $R$ and $h$ form a right triangle: $h = \sqrt{25 - 12} = \sqrt{13}$.
- **Tent.** $r = 2$, $l = \sqrt{9 + 4} = \sqrt{13}$; $S_{\text{lat}} = \frac{1}{2} \cdot
  16 \cdot \sqrt{13} = 8\sqrt{13}$ m².

Two right triangles do all the work: (height, inradius, apothem)
and (height, circumradius, lateral edge).

## Common Mistake

Forgetting the $\frac{1}{3}$ - reporting $S \cdot h = 144$ instead of $48$.
A pyramid tapers to a point and holds a third of the prism around
it. The other slip is confusing apothem with height, or apothem with
lateral edge: the apothem runs down the middle of a side face to the
midpoint of a base edge; the height goes straight down inside; the
lateral edge goes to a corner. They're three different lengths, and
the two right triangles say how they relate.

## The Takeaway

A polygon and an apex: side triangles, height to the base. Volume
$\frac{1}{3}$ base $\times$ height. Regular pyramid: $S_{\text{lat}} = \frac{1}{2} P l$
with the apothem $l = \sqrt{h^2 + r^2}$; lateral edge $= \sqrt{h^2 + R^2}$.
Draw the right triangle you need before computing.

## Check Yourself

1. A pyramid has base area $20$ and height $6$. Find its volume.
2. A regular quadrilateral pyramid has base edge $10$ and apothem $13$.
   Find its height and lateral area.
3. A regular triangular pyramid has base edge $4$ and height $2$. Find
   its volume.
4. A regular quadrilateral pyramid has all edges equal to $2$. Find its
   height.
5. A pyramid and a prism have the same base and height. Compare
   volumes.
6. Someone computes the lateral area of the pyramid in the worked
   example as $\frac{1}{2} \cdot 24 \cdot 4 = 48$. Which length did they
   misuse?

> [!spoiler] Answers
>
> 1. $40$.
> 2. $h = \sqrt{169 - 25} = 12$; $S_{\text{lat}} = \frac{1}{2} \cdot 40 \cdot 13 = 260$.
> 3. Base $4\sqrt{3}$; $V = \frac{8\sqrt{3}}{3} \approx 4.6$.
> 4. $R = \sqrt{2}$; $h = \sqrt{4 - 2} = \sqrt{2}$.
> 5. The prism's is three times the pyramid's.
> 6. The height ($4$) instead of the apothem ($5$).
