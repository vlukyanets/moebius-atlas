---
title: "[S] Sine, Cosine and Tangent of an Acute Angle"
tag: DEF
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-17-lesson-17-pythagorean-theorem]
---

## Why It Matters

A ramp rises at $10^\circ$; you walk $50$ m along it - how high are you?
Pythagoras needs two sides; you have one side and an angle. What
connects an angle to the sides is trigonometry, and it starts with
three ratios in a right triangle - sine, cosine, tangent - that
depend only on the angle. They are why a $10^\circ$ ramp always rises the
same fraction of its length, and they're the basis of navigation,
surveying and physics.

## The Big Idea

All right triangles with an acute angle of $10^\circ$ are similar (AA:
right angle and $10^\circ$). So the ratio of any two sides is the same
in all of them - it depends on the angle, not the triangle. Name the
ratios: opposite leg over hypotenuse is the sine; adjacent leg over
hypotenuse is the cosine; opposite over adjacent is the tangent. Each
is a number attached to the angle, like $\sin 10^\circ \approx 0.17$, and
it can be looked up once and used forever.

Since the legs are shorter than the hypotenuse, sine and cosine are
less than $1$. And Pythagoras divided by $c^2$ gives $\sin^2 \alpha +
\cos^2 \alpha = 1$ - the identity that ties them.

## The Rule

In a right triangle with acute angle $\alpha$, opposite leg $a$,
adjacent leg $b$, hypotenuse $c$:

$$
\sin \alpha = \frac{a}{c}, \qquad \cos \alpha = \frac{b}{c}, \qquad \tan \alpha = \frac{a}{b}
$$

These depend only on $\alpha$ (similar triangles). $0 < \sin \alpha < 1$,
$0 < \cos \alpha < 1$; $\tan \alpha = \frac{\sin \alpha}{\cos \alpha}$.

**Basic identity:** $\sin^2 \alpha + \cos^2 \alpha = 1$.

**Complementary angles:** $\sin(90^\circ - \alpha) = \cos \alpha$, $\cos(90^\circ -
\alpha) = \sin \alpha$ - the other acute angle swaps opposite and
adjacent.

**Special values:**

- $\sin 30^\circ = \frac{1}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\tan 30^\circ = \frac{\sqrt{3}}{3}$;
- $\sin 45^\circ = \cos 45^\circ = \frac{\sqrt{2}}{2}$, $\tan 45^\circ = 1$;
- $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{1}{2}$, $\tan 60^\circ = \sqrt{3}$.

(From the half-equilateral triangle $1, \sqrt{3}, 2$ and the
half-square $1, 1, \sqrt{2}$.)

## Worked Example

A right triangle has legs $3$ and $4$. Find the sine, cosine and
tangent of the angle opposite the $3$. Then: $\sin \alpha = 0.6$ - find
$\cos \alpha$ and $\tan \alpha$. Then: the ramp at $10^\circ$, $50$ m long,
with $\sin 10^\circ \approx 0.17$.

- **Legs $3$, $4$:** hypotenuse $5$. For the angle opposite $3$: $\sin =
  \frac{3}{5} = 0.6$, $\cos = \frac{4}{5} = 0.8$, $\tan = \frac{3}{4} = 0.75$.
- **$\sin \alpha = 0.6$:** $\cos \alpha = \sqrt{1 - 0.36} = 0.8$; $\tan \alpha =
  \frac{0.6}{0.8} = 0.75$. (The same angle as above.)
- **Ramp:** height $= 50 \cdot \sin 10^\circ \approx 50 \cdot 0.17 = 8.5$ m.

Special check: in the $30^\circ$-$60^\circ$-$90^\circ$ triangle with
hypotenuse $2$, the leg opposite $30^\circ$ is $1$ (half the hypotenuse -
grade 7), so $\sin 30^\circ = \frac{1}{2}$.

## Common Mistake

Mixing up which leg is opposite. The opposite leg is the one that
doesn't touch the angle's vertex; the adjacent leg touches it (and
isn't the hypotenuse). For the angle opposite $3$, $\sin = \frac{3}{5}$;
for the *other* acute angle, $\sin = \frac{4}{5}$ - the roles swap. Name
the angle before writing a ratio. And sine, cosine of an acute angle
are never $\geq 1$: a result like $\sin \alpha = 1.2$ means a leg was put
over the wrong side.

## The Takeaway

Sine, cosine, tangent of an acute angle are the ratios opposite over
hypotenuse, adjacent over hypotenuse, opposite over adjacent -
depending only on the angle. $\sin^2 + \cos^2 = 1$, and the $30^\circ$,
$45^\circ$, $60^\circ$ values come from two triangles worth memorising.

## Check Yourself

1. Legs $5$ and $12$, hypotenuse $13$. Find $\sin$, $\cos$, $\tan$ of the
   angle opposite $5$.
2. $\cos \alpha = 0.28$. Find $\sin \alpha$.
3. Find $\sin 60^\circ \cdot \cos 30^\circ$.
4. $\tan \alpha = 1$. What is $\alpha$?
5. A $6$-m ladder makes $60^\circ$ with the ground. How high does it
   reach?
6. In a triangle with hypotenuse $5$ and a leg $4$, someone computes
   the sine of the angle opposite that leg as $\frac{5}{4}$. What went
   wrong?

> [!spoiler] Answers
>
> 1. $\frac{5}{13}$, $\frac{12}{13}$, $\frac{5}{12}$.
> 2. $\sqrt{1 - 0.0784} = 0.96$.
> 3. $\frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} = \frac{3}{4}$.
> 4. $45^\circ$.
> 5. $6 \sin 60^\circ = 3\sqrt{3} \approx 5.2$ m.
> 6. The hypotenuse must be the denominator: $\sin \alpha = \frac{4}{5}$.
