---
title: "[S] Formulas for the Area of a Triangle"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-12-lesson-12-law-of-sines, grade-8-geometry-topic-24-lesson-24-area-of-a-triangle, grade-7-geometry-topic-23-lesson-23-incircle-of-a-triangle]
---

## Why It Matters

Half base times height needs the height - and the height is rarely
given. A surveyor knows two sides and the angle between them; a
carpenter knows three sides; a problem gives the inradius or the
circumradius. Each situation has its own area formula, and this
topic collects them: four ways to the same number, each using what's
at hand. Heron's, in particular, finds the area of any triangle from
its sides alone, with no angle and no height.

## The Big Idea

Every formula is $\frac{1}{2} a h$ with the height rewritten. The height
from $C$ onto $AB$ is $b \sin A$, so $S = \frac{1}{2} bc \sin A$ - two sides
and the sine of the included angle. Combine that with the law of
sines ($\sin A = \frac{a}{2R}$) and $S = \frac{abc}{4R}$. Cut the triangle into
three from the incentre, each with height $r$, and $S = pr$ with $p$ the
semiperimeter. And eliminate the angle from $\frac{1}{2} bc \sin A$ using
the law of cosines and some algebra, and Heron's formula appears -
area from the three sides.

## The Rule

For a triangle with sides $a, b, c$, angles $A, B, C$, semiperimeter
$p = \frac{a + b + c}{2}$, inradius $r$ and circumradius $R$:

$$
S = \frac{1}{2} ab \sin C = \frac{1}{2} bc \sin A = \frac{1}{2} ac \sin B
$$

$$
S = \sqrt{p(p - a)(p - b)(p - c)} \quad \text{(Heron)}
$$

$$
S = pr, \qquad S = \frac{abc}{4R}
$$

Together with grade 8's $S = \frac{1}{2} a h_a$. The last two are also
used *backwards*, to find $r$ and $R$ once $S$ is known.

## Worked Example

Find the area of the triangle with sides $13, 14, 15$; then its
inradius and circumradius. Then: sides $6$ and $10$ with a $150^\circ$
angle between them. Then: $a = 8$, $b = 5$, $C = 60^\circ$ - find the area
and then the height to side $a$.

- **Heron.** $p = 21$; $S = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{7056} = 84$.
- **$r$ and $R$.** $r = \frac{S}{p} = 4$; $R = \frac{abc}{4S} = \frac{2730}{336} =
  8.125$.
- **$150^\circ$.** $S = \frac{1}{2} \cdot 6 \cdot 10 \cdot \sin 150^\circ = 30 \cdot
  \frac{1}{2} = 15$. (An obtuse angle is fine - its sine is positive.)
- **$a = 8$, $b = 5$, $C = 60^\circ$.** $S = \frac{1}{2} \cdot 8 \cdot 5 \cdot
  \frac{\sqrt{3}}{2} = 10\sqrt{3}$. Height to $a$: $\frac{1}{2} \cdot 8 \cdot h =
  10\sqrt{3}$, $h = \frac{5\sqrt{3}}{2}$.

The $13, 14, 15$ triangle is the classic: its area is a whole number,
its altitude to $14$ is $12$, and $r = 4$ exactly.

## Common Mistake

Using the sine formula with an angle that is *not* between the two
sides: $\frac{1}{2} ab \sin C$ needs $C$ - the angle at the vertex where
$a$ and $b$ meet. With $a = 8$, $b = 5$ and angle $A$ given instead, the
formula doesn't apply directly. The other slip is in Heron's: using
the full perimeter, or forgetting the root. Check on a right
triangle $3, 4, 5$: $p = 6$, $\sqrt{6 \cdot 3 \cdot 2 \cdot 1} = 6 = \frac{1}{2} \cdot 3
\cdot 4$.

## The Takeaway

Two sides and the included angle: $\frac{1}{2} ab \sin C$. Three sides:
Heron. Inradius: $pr$. Circumradius: $\frac{abc}{4R}$. Pick the one whose
inputs you have, and use $S$ to get $r$, $R$ or a height when they're
what's asked.

## Check Yourself

1. Sides $5$ and $8$ with a $30^\circ$ angle between them. Find the area.
2. Sides $7, 8, 9$. Find the area by Heron.
3. For the $7, 8, 9$ triangle find $r$.
4. Sides $5, 12, 13$. Find the area and $R$.
5. An equilateral triangle has side $a$. Show that $S = \frac{a^2 \sqrt{3}}
   {4}$ using the sine formula.
6. Someone computes Heron for $3, 4, 5$ as $\sqrt{12 \cdot 9 \cdot 8 \cdot 7}$.
   Fix it.

> [!spoiler] Answers
>
> 1. $\frac{1}{2} \cdot 40 \cdot \frac{1}{2} = 10$.
> 2. $p = 12$; $\sqrt{12 \cdot 5 \cdot 4 \cdot 3} = \sqrt{720} = 12\sqrt{5} \approx 26.8$.
> 3. $r = \frac{12\sqrt{5}}{12} = \sqrt{5}$.
> 4. Right triangle: $S = 30$; $R = \frac{780}{120} = 6.5$ (half the
>    hypotenuse).
> 5. $\frac{1}{2} a \cdot a \cdot \sin 60^\circ = \frac{a^2 \sqrt{3}}{4}$.
> 6. $p$ is the *semi*perimeter $6$: $\sqrt{6 \cdot 3 \cdot 2 \cdot 1} = 6$.
