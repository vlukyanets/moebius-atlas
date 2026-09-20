---
title: "[S] Cone"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-31-lesson-31-cylinder, grade-9-geometry-topic-30-lesson-30-pyramid]
---

## Why It Matters

An ice-cream cone, a traffic cone, a funnel, a volcano, a party hat -
a disc on the ground and a point above its centre. The cone is to the
cylinder what the pyramid is to the prism: the same base, tapered to
a point, and a third of the volume. Its side unrolls into something
you might not expect - a sector of a circle - which is how a paper
party hat is actually cut.

## The Big Idea

Take a disc and a point above its centre (the apex); join the apex to
every point of the circle. The segments are the generators, all the
same length $l$, and with the height $h$ and the radius $R$ each one
makes a right triangle: $l^2 = h^2 + R^2$ - the cone's version of the
pyramid's apothem triangle. Cut the side along a generator and
flatten it: the generators fan out from the apex as radii of length
$l$, and the base circle becomes an arc of length $2\pi R$. So the side
is a sector of radius $l$ and arc $2\pi R$, with area $\pi R l$. The
volume is a third of the cylinder's, as the pyramid's is of the
prism's.

## The Rule

A **cone** (right circular) has a disc of radius $R$ as **base** and
an **apex** on the perpendicular through the centre; the
perpendicular's length is the **height** $h$; the segments from the
apex to the base circle are the **generators**, each of length

$$
l = \sqrt{R^2 + h^2}
$$

The lateral surface unrolls into a sector of radius $l$ with arc
$2\pi R$ (angle $\frac{360^\circ \cdot R}{l}$).

$$
S_{\text{lat}} = \pi R l, \qquad S_{\text{total}} = \pi R l + \pi R^2 = \pi R (l + R)
$$

$$
V = \frac{1}{3} \pi R^2 h
$$

The **axial section** is an isosceles triangle with base $2R$ and legs
$l$.

## Worked Example

A cone has radius $6$ and height $8$. Find its generator, lateral area,
total area and volume. Then: a party hat is cut from a sector of
radius $20$ cm with angle $180^\circ$; find the hat's radius and height.
Then: a cone's axial section is an equilateral triangle of side $10$;
find its volume.

- **Generator:** $l = \sqrt{36 + 64} = 10$. **Lateral:** $\pi \cdot 6 \cdot 10 =
  60\pi$. **Total:** $60\pi + 36\pi = 96\pi$. **Volume:** $\frac{1}{3} \pi \cdot 36
  \cdot 8 = 96\pi$. (Coincidence that they match.)
- **Party hat.** $l = 20$; the arc is half the circle of radius $20$:
  $\frac{1}{2} \cdot 40\pi = 20\pi = 2\pi R$, so $R = 10$ cm. Height $\sqrt{400 -
  100} = 10\sqrt{3} \approx 17.3$ cm.
- **Equilateral section.** $2R = 10$, $l = 10$: $R = 5$, $h = \sqrt{100 - 25} =
  5\sqrt{3}$. $V = \frac{1}{3} \pi \cdot 25 \cdot 5\sqrt{3} = \frac{125\sqrt{3}}{3}\pi$.

The sector's angle is the fraction $\frac{R}{l}$ of $360^\circ$: for $R = 6$,
$l = 10$ it's $216^\circ$.

## Common Mistake

Using the height in the lateral area: $\pi R h$ instead of $\pi R l$. The
slant length is what the side is made of - the height is inside the
cone and touches no surface. Compute $l$ from the right triangle
first, every time. The other slip, as with the pyramid, is the
missing $\frac{1}{3}$ in the volume - a cone is a third of its
cylinder.

## The Takeaway

A cone is a disc tapered to a point: generator $l = \sqrt{R^2 + h^2}$,
lateral area $\pi R l$ (a sector of radius $l$), total $\pi R(l + R)$,
volume $\frac{1}{3}\pi R^2 h$. The right triangle $(R, h, l)$ comes
first; the axial section is an isosceles triangle.

## Check Yourself

1. Radius $3$, height $4$. Find $l$, the lateral area and the volume.
2. A cone has generator $13$ and radius $5$. Find its height and volume.
3. A cone's axial section is a right isosceles triangle with
   hypotenuse $8$. Find the cone's volume.
4. A cone's lateral surface unrolls into a quarter-disc of radius $8$.
   Find the cone's radius.
5. A cone and a cylinder have the same base and height. Compare
   volumes.
6. Someone finds the lateral area of a cone with $R = 3$, $h = 4$ as $\pi
   \cdot 3 \cdot 4 = 12\pi$. Correct it.

> [!spoiler] Answers
>
> 1. $5$; $15\pi$; $12\pi$.
> 2. $12$; $100\pi$.
> 3. $R = h = 4$: $\frac{64\pi}{3}$.
> 4. Arc $\frac{1}{4} \cdot 16\pi = 4\pi = 2\pi R$: $R = 2$.
> 5. The cylinder's is three times the cone's.
> 6. $l = 5$: $\pi \cdot 3 \cdot 5 = 15\pi$.
