---
title: "[S] Scalar Product of Vectors"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-9-lesson-9-multiplying-a-vector-by-a-number, grade-9-geometry-topic-2-lesson-2-sine-cosine-tangent-0-to-180]
---

## Why It Matters

Pull a sled with a rope at an angle: only the part of your force
along the ground does the work. Multiplying two vectors so as to
capture "how much of one lies along the other" is the scalar
product, and it does two jobs at once. In physics it's work, power,
projection. In geometry it's the angle between two vectors - and so
a way to test perpendicularity by arithmetic, and the seed of the
law of cosines.

## The Big Idea

Two vectors drawn from a common point make an angle. Multiply their
lengths and the cosine of that angle: that's the scalar product, a
*number*. If the vectors point the same way the cosine is $1$ and
you get the product of lengths; if they're perpendicular the cosine
is $0$ and so is the product; if the angle is obtuse the product is
negative. So the sign of the scalar product tells the type of angle.
Remarkably, in coordinates it's just $a_1 b_1 + a_2 b_2$ - which means
the angle between any two vectors can be found from their
coordinates alone.

## The Rule

The **angle** between nonzero vectors $\vec{a}$ and $\vec{b}$ is the angle
between them when drawn from a common point, in $[0^\circ; 180^\circ]$.

The **scalar product** is

$$
\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos \angle(\vec{a}, \vec{b})
$$

**Theorem.** In coordinates, $\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2$.

Consequences:

- $\vec{a} \cdot \vec{a} = |\vec{a}|^2$;
- $\vec{a} \perp \vec{b}$ exactly when $\vec{a} \cdot \vec{b} = 0$ (nonzero vectors);
- $\cos \angle(\vec{a}, \vec{b}) = \dfrac{a_1 b_1 + a_2 b_2}{\sqrt{a_1^2 + a_2^2}
  \cdot \sqrt{b_1^2 + b_2^2}}$;
- $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$; $(k\vec{a}) \cdot \vec{b} = k(\vec{a} \cdot
  \vec{b})$; $(\vec{a} + \vec{b}) \cdot \vec{c} = \vec{a} \cdot \vec{c} + \vec{b} \cdot \vec{c}$.

## Worked Example

$\vec{a} = (3; 4)$, $\vec{b} = (-1; 2)$. Find $\vec{a} \cdot \vec{b}$ and the angle
between them. Then: are $(2; 5)$ and $(-10; 4)$ perpendicular? Then:
find the angle $B$ of triangle $A(1; 1)$, $B(4; 1)$, $C(4; 4)$. Then: $|\vec{a}|
= 3$, $|\vec{b}| = 2$, angle $60^\circ$ - find $(\vec{a} + \vec{b})^2$.

- **Product:** $3 \cdot (-1) + 4 \cdot 2 = 5$. **Angle:** $\cos = \frac{5}{5
  \cdot \sqrt{5}} = \frac{1}{\sqrt{5}} \approx 0.447$, angle $\approx 63^\circ$.
- **Perpendicular?** $2 \cdot (-10) + 5 \cdot 4 = -20 + 20 = 0$ - yes.
- **Angle $B$.** Vectors from $B$: $\overrightarrow{BA} = (-3; 0)$,
  $\overrightarrow{BC} = (0; 3)$. Product $0$: $\angle B = 90^\circ$.
- **$(\vec{a} + \vec{b})^2 = \vec{a}^2 + 2\vec{a} \cdot \vec{b} + \vec{b}^2 = 9 + 2 \cdot 3 \cdot
  2 \cdot \frac{1}{2} + 4 = 19$**, so $|\vec{a} + \vec{b}| = \sqrt{19}$.

The angle of a triangle is the angle between the two vectors *from*
that vertex - both must start at $B$.

## Common Mistake

Treating the scalar product as a vector - writing $(3; 4) \cdot (-1; 2)
= (-3; 8)$. It's a *number*, $5$: multiply matching coordinates and
*add*. The other slip is the angle in a triangle: using
$\overrightarrow{AB}$ and $\overrightarrow{BC}$ for angle $B$ gives the
*exterior* angle (one vector arrives at $B$, the other leaves). Use
$\overrightarrow{BA}$ and $\overrightarrow{BC}$, both starting at $B$.

## The Takeaway

$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\varphi = a_1 b_1 + a_2 b_2$, a number.
Zero means perpendicular; the sign gives the type of angle; the
formula gives the angle itself. $\vec{a}^2 = |\vec{a}|^2$ turns lengths into
products - which the law of cosines will use.

## Check Yourself

1. Find $(2; -3) \cdot (4; 1)$.
2. For which $x$ are $(x; 6)$ and $(4; -2)$ perpendicular?
3. Find the cosine of the angle between $(1; 0)$ and $(1; 1)$, and the
   angle.
4. $|\vec{a}| = 4$, $|\vec{b}| = 5$, angle $120^\circ$. Find $\vec{a} \cdot \vec{b}$.
5. Find the angle $A$ of the triangle $A(0; 0)$, $B(2; 0)$, $C(1; \sqrt{3})$.
6. Someone computes the angle $B$ of a triangle using $\overrightarrow{AB}$
   and $\overrightarrow{BC}$ and gets $120^\circ$. What's the actual angle?

> [!spoiler] Answers
>
> 1. $8 - 3 = 5$.
> 2. $4x - 12 = 0$, $x = 3$.
> 3. $\frac{1}{\sqrt{2}}$; $45^\circ$.
> 4. $20 \cdot \left(-\frac{1}{2}\right) = -10$.
> 5. $\overrightarrow{AB} = (2; 0)$, $\overrightarrow{AC} = (1; \sqrt{3})$: $\cos =
>    \frac{2}{2 \cdot 2} = \frac{1}{2}$, $60^\circ$.
> 6. $60^\circ$ - they found the exterior angle.
