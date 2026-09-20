---
title: "[S] Circumference. Length of an Arc"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-15-lesson-15-regular-polygons, grade-6-topic-23-lesson-23-circle-and-circumference]
---

## Why It Matters

You've used $C = 2\pi r$ since grade 6 - but why is the ratio of a
circle's circumference to its diameter the same for every circle,
and where does the number come from? Regular polygons answer both:
inscribe more and more sides and the perimeter closes in on the
circumference, while the ratio stays fixed by similarity. And once
the whole circle is known, any *arc* is a fraction of it - a piece of
track, the swing of a pendulum, the path of a satellite over one
hour.

## The Big Idea

All circles are similar, so the circumference is proportional to the
radius: $C = k \cdot r$ for one constant $k$, and $k$ is what we call
$2\pi$. To *find* the constant, put a regular $n$-gon inside the circle:
its perimeter $n \cdot 2R \sin\frac{180^\circ}{n}$ is a bit less than $C$,
and grows toward it as $n$ grows. Computing this for large $n$ gives $C
\approx 6.283R$, so $\pi \approx 3.1416$ - Archimedes did exactly this by
hand. An arc of $\alpha$ degrees is $\frac{\alpha}{360}$ of the whole
circumference.

## The Rule

**Theorem.** The circumference of a circle of radius $R$ is

$$
C = 2\pi R = \pi d
$$

where $\pi \approx 3.14159$ is the ratio of any circle's circumference to
its diameter (an irrational number).

The **length of an arc** with central angle $\alpha$ (in degrees) is

$$
l = \frac{\pi R \alpha}{180^\circ}
$$

- the fraction $\frac{\alpha}{360^\circ}$ of the circumference. In
particular, a $90^\circ$ arc is a quarter of the circle, $\frac{\pi R}{2}$.

## Worked Example

A wheel has radius $35$ cm; how far does a bike travel in $100$ turns -
exactly, and roughly, in metres?
Then: find the length of a $60^\circ$ arc of a circle with radius $12$.
Then: an arc of length $5\pi$ has radius $10$; find its central angle.
Then: a pendulum $80$ cm long swings through $15^\circ$; how far does
the bob travel?

- **Wheel.** One turn is $C = 2\pi \cdot 0.35 = 0.7\pi$ m; $100$ turns is
  $70\pi$ m - roughly $220$ m, with $\pi \approx 3.14$.
- **$60^\circ$ arc.** $l = \frac{\pi \cdot 12 \cdot 60}{180} = 4\pi$. (A sixth of
  $24\pi$.)
- **Angle.** $5\pi = \frac{\pi \cdot 10 \cdot \alpha}{180}$, $\alpha = 90^\circ$.
- **Pendulum.** $l = \frac{\pi \cdot 80 \cdot 15}{180} = \frac{20\pi}{3}$ cm.

The arc formula is just "fraction of the circle": $60^\circ$ is
$\frac{1}{6}$, so $\frac{1}{6}$ of $2\pi \cdot 12$.

## Common Mistake

Mixing up circumference and area formulas - $\pi R^2$ for the length
of a circle. Length is linear in $R$ ($2\pi R$); area is quadratic
($\pi R^2$); the units say which is which. And in the arc formula,
using $360$ in the denominator with $2\pi R$ *and* $180$ with $\pi R$ -
that's the same thing twice. $\frac{\alpha}{360} \cdot 2\pi R = \frac{\pi R
\alpha}{180}$; use one or the other.

## The Takeaway

$C = 2\pi R$, the same $\pi$ for every circle, approached by the
perimeters of inscribed regular polygons. An arc of $\alpha^\circ$ is
$\frac{\alpha}{360}$ of the circumference, $\frac{\pi R \alpha}{180}$. Length
grows with $R$, not $R^2$.

## Check Yourself

1. Find the circumference of a circle with radius $7$ (use $\pi \approx
   \frac{22}{7}$).
2. A circle has circumference $18\pi$. Find its radius.
3. Find the length of a $45^\circ$ arc of radius $8$.
4. An arc of radius $6$ has length $2\pi$. Find its central angle.
5. A regular hexagon is inscribed in a circle of radius $R$. Compare
   its perimeter with the circumference.
6. Someone finds the length of a $30^\circ$ arc of radius $6$ as $\frac{\pi
   \cdot 6 \cdot 30}{360} = \frac{\pi}{2}$. Correct it.

> [!spoiler] Answers
>
> 1. $44$.
> 2. $9$.
> 3. $2\pi$.
> 4. $60^\circ$.
> 5. $6R$ versus $2\pi R$; since $\pi > 3$, the perimeter is a little
>    less than the circumference.
> 6. $\frac{\pi \cdot 6 \cdot 30}{180} = \pi$ (or $\frac{30}{360} \cdot 12\pi = \pi$).
