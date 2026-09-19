---
title: "[S] Solving Triangles. Applied Problems"
tag: MTD
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-12-lesson-12-law-of-sines]
---

## Why It Matters

How tall is a mountain you can't climb? How wide is a river you
can't cross? Measure what you can - a baseline on your side and a
couple of angles - and the triangle gives the rest. "Solving a
triangle" means finding all six of its parts, three sides and three
angles, from three that are given; the two laws just proved are the
whole toolkit, and knowing which one to reach for is the skill.

## The Big Idea

A triangle is fixed by three independent pieces of data (as long as
one is a side), and there are four cases. Two sides and the included
angle: the law of cosines gives the third side, then either law gives
an angle. Three sides: the law of cosines gives an angle, then
another. Two angles and a side: the third angle is immediate, then
the law of sines gives the sides. Two sides and a non-included angle:
the law of sines gives an angle, watching for two solutions. In every
case, once two angles are known the third is $180^\circ$ minus their
sum - use that whenever you can, it's the cheapest step.

## The Rule

**Solving a triangle** - finding its unknown sides and angles from
three given elements, at least one a side.

- **SAS** (two sides, included angle): the third side by the law of
  cosines; then a second angle by the law of cosines (safer) or
  sines; the third angle by subtraction.
- **SSS** (three sides): the largest angle by the law of cosines
  (this settles acute or obtuse); a second angle likewise or by the
  law of sines; the third by subtraction.
- **ASA / AAS** (a side and two angles): the third angle by
  subtraction; the other sides by the law of sines.
- **SSA** (two sides, non-included angle): the angle opposite the
  second side by the law of sines - check for a second, obtuse
  solution; then subtraction and the law of sines.

Round only at the end, and check that the largest side faces the
largest angle.

## Worked Example

Solve the triangle with $b = 7$, $c = 5$, $A = 60^\circ$. Then: a river;
from point $A$ on one bank a tree $T$ on the other is seen; along the
bank $AB = 50$ m is measured, and $\angle A = 80^\circ$, $\angle B = 70^\circ$.
Find the width of the river, the distance from $A$ to $T$ (use $\sin
70^\circ \approx 0.94$, $\sin 30^\circ = 0.5$, $\sin 80^\circ \approx 0.985$).

- **SAS.** $a^2 = 49 + 25 - 2 \cdot 7 \cdot 5 \cdot \frac{1}{2} = 39$, $a = \sqrt{39}
  \approx 6.24$. Angle $C$ (opposite the smaller side, so surely acute):
  $\cos C = \frac{a^2 + b^2 - c^2}{2ab} = \frac{39 + 49 - 25}{2 \cdot 6.24 \cdot 7}
  \approx 0.721$, $C \approx 44^\circ$. $B = 180^\circ - 60^\circ - 44^\circ = 76^\circ$.
  Check: largest side $b = 7$ faces the largest angle $B$.
- **River.** $\angle T = 180^\circ - 80^\circ - 70^\circ = 30^\circ$. $AT$ is
  opposite $\angle B$: $\frac{AT}{\sin 70^\circ} = \frac{50}{\sin 30^\circ}$, $AT =
  50 \cdot \frac{0.94}{0.5} = 94$ m. The width is the perpendicular from
  $T$ to the bank: $94 \cdot \sin 80^\circ \approx 92.6$ m.

The river problem is ASA; the triangle problem is SAS. Identify the
case first and the rest is routine.

## Common Mistake

Using the law of sines to find the *largest* angle: $\sin$ doesn't
distinguish $44^\circ$ from $136^\circ$, and picking the acute value for
an angle that is actually obtuse wrecks everything after it. Find
the largest angle by the law of cosines, whose sign is unambiguous,
or find the two smaller angles by sines and get the largest by
subtraction. The other slip is rounding early: $a \approx 6.2$ carried
into $\cos C$ shifts the angle by a degree.

## The Takeaway

Name the case - SAS, SSS, ASA, SSA - and pick the law: cosines when
two sides and their angle (or all three sides) are in play, sines
when a side faces a known angle. Subtraction gives the third angle
for free. Cosines for the largest angle, sines for the smaller ones,
rounding at the end.

## Check Yourself

1. $a = 3$, $b = 4$, $C = 90^\circ$. Solve the triangle.
2. $a = 5$, $b = 5$, $c = 5\sqrt{2}$. Find the angles.
3. $A = 45^\circ$, $B = 60^\circ$, $a = 6$. Find $b$.
4. Which law finds the third side from two sides and the angle between
   them?
5. From a point $100$ m from the base of a tower, its top is seen at an
   elevation of $30^\circ$. Find the height ($\tan 30^\circ \approx 0.577$).
6. Someone solves an SSS triangle with sides $4, 5, 8$, finds the angle
   opposite $8$ by the law of sines as $\approx 83^\circ$, and gets an angle
   sum of $180^\circ$ only by fudging. What went wrong?

> [!spoiler] Answers
>
> 1. $c = 5$, $A \approx 37^\circ$, $B \approx 53^\circ$.
> 2. $c^2 = 50 = a^2 + b^2$: $C = 90^\circ$, $A = B = 45^\circ$.
> 3. $b = 6 \cdot \frac{\sin 60^\circ}{\sin 45^\circ} = 3\sqrt{6} \approx 7.35$.
> 4. The law of cosines.
> 5. $100 \cdot 0.577 \approx 57.7$ m.
> 6. The angle opposite $8$ is obtuse ($64 > 16 + 25$); by the law of
>    cosines it's $\approx 97^\circ$, and the law of sines returned its
>    supplement.
