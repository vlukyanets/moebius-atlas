---
title: "[S] Sphere and Ball"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-31-lesson-31-cylinder]
---

## Why It Matters

Planets, bubbles, ball bearings, oranges, the dome of a stadium -
the sphere is the shape that nature makes when nothing pulls in any
particular direction. It's the last solid of grade 9 and the only one
with no flat face and no edge. Its surface area and volume have
formulas Archimedes was proud enough of to have carved on his tomb:
a ball is exactly two-thirds of the cylinder that just contains it.

## The Big Idea

A sphere is the circle's idea in space: all points at one distance
$R$ from a centre. The solid it bounds is the ball. Cut a ball with
any plane and the cut is a disc; the closer the plane to the centre,
the bigger the disc, and a plane through the centre cuts a *great
circle* of radius $R$ - the equator. The formulas come from
Archimedes' comparison with the enclosing cylinder (radius $R$,
height $2R$): the ball's volume is $\frac{2}{3}$ of the cylinder's, $\frac{2}{3}
\cdot 2\pi R^3 = \frac{4}{3}\pi R^3$, and its surface equals the cylinder's
lateral surface, $2\pi R \cdot 2R = 4\pi R^2$ - four great circles' worth.

## The Rule

A **sphere** with centre $O$ and radius $R$ is the set of points in
space at distance $R$ from $O$. A **ball** is the set of points at
distance at most $R$ - the sphere together with its interior. A
**diameter** is a chord through the centre, of length $2R$.

**Section by a plane.** A plane at distance $d < R$ from the centre
cuts the sphere in a circle of radius $\sqrt{R^2 - d^2}$; for $d = 0$ it is
a **great circle** of radius $R$. A plane at distance $R$ is
**tangent** to the sphere (one common point); at distance $> R$ it
misses.

$$
S = 4\pi R^2, \qquad V = \frac{4}{3}\pi R^3
$$

## Worked Example

A ball has radius $3$. Find its surface area and volume. Then: a
plane cuts a sphere of radius $13$ at distance $5$ from the centre;
find the radius of the section. Then: how many times bigger is the
volume of the Earth ($R \approx 6400$ km) than the Moon's ($R \approx 1700$
km)? Then: verify Archimedes' ratio for $R = 3$.

- **Ball, $R = 3$.** $S = 36\pi \approx 113$; $V = \frac{4}{3}\pi \cdot 27 = 36\pi \approx
  113$. (Again a coincidence of numbers - only at $R = 3$.)
- **Section.** $\sqrt{169 - 25} = 12$.
- **Earth vs Moon.** Volumes scale as $R^3$: $\left(\frac{6400}{1700}\right)^3
  \approx 3.76^3 \approx 53$ times.
- **Archimedes.** Cylinder: $R = 3$, $h = 6$, $V = \pi \cdot 9 \cdot 6 = 54\pi$.
  Ball: $36\pi$. Ratio $\frac{36}{54} = \frac{2}{3}$. Lateral area of cylinder:
  $2\pi \cdot 3 \cdot 6 = 36\pi = S$ of the ball.

Volume goes with the cube of the radius: double the radius, eight
times the volume - which is why a small increase in a planet's size
means a large increase in its mass.

## Common Mistake

Mixing the two formulas - $4\pi R^3$ for the volume, or $\frac{4}{3}\pi R^2$
for the area. Area is two-dimensional and has $R^2$; volume has $R^3$
and the $\frac{4}{3}$. The other slip is the section radius: a plane at
distance $d$ from the centre cuts a circle of radius $\sqrt{R^2 - d^2}$,
*not* of radius $R - d$ - it's a right triangle (centre, foot of the
perpendicular, point on the circle), not a subtraction.

## The Takeaway

Sphere: all points at distance $R$; ball: at most $R$. Surface $4\pi
R^2$, volume $\frac{4}{3}\pi R^3$ - two-thirds of the enclosing cylinder.
A plane cuts a circle of radius $\sqrt{R^2 - d^2}$; through the centre,
a great circle. Volumes scale as the cube of the radius.

## Check Yourself

1. Find the surface area and volume of a ball with radius $6$.
2. A sphere has surface area $100\pi$. Find its radius and the ball's
   volume.
3. A plane at distance $4$ from the centre of a sphere of radius $5$
   cuts it. Find the section's radius and area.
4. A ball of radius $2$ and a ball of radius $4$. Compare their surface
   areas; their volumes.
5. A ball just fits in a cube of edge $10$. Find the ball's volume.
6. Someone finds the section of a sphere of radius $10$ by a plane at
   distance $6$ as a circle of radius $4$. Correct it.

> [!spoiler] Answers
>
> 1. $144\pi$; $288\pi$.
> 2. $R = 5$; $\frac{500\pi}{3}$.
> 3. $3$; $9\pi$.
> 4. $1 : 4$; $1 : 8$.
> 5. $R = 5$: $\frac{500\pi}{3} \approx 524$.
> 6. $\sqrt{100 - 36} = 8$.
