---
title: "[S] Sine, Cosine and Tangent of Angles from 0° to 180°. Trigonometric Identities"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-1-lesson-1-coordinate-plane, grade-8-geometry-topic-19-lesson-19-sine-cosine-tangent]
---

## Why It Matters

Last year sine and cosine were ratios in a right triangle, so they
only existed for angles under $90^\circ$. But a triangle can have an
obtuse angle, and the laws of cosines and sines - the tools for
solving *any* triangle - need $\cos 120^\circ$ to mean something. This
topic extends the definitions to $0^\circ \ldots 180^\circ$ using the
coordinate plane, and finds that an obtuse angle's cosine is
negative - which is exactly what makes the law of cosines work.

## The Big Idea

Draw a half-circle of radius $1$ above the $x$-axis, centred at the
origin. An angle $\alpha$ from $0^\circ$ to $180^\circ$, measured from the
positive $x$-axis, picks out one point on it. Define $\cos \alpha$ as that
point's $x$-coordinate and $\sin \alpha$ as its $y$-coordinate. For an
acute angle this agrees with the right-triangle ratios (the
hypotenuse is $1$). For an obtuse angle the point is to the left of
the $y$-axis, so the cosine is negative while the sine stays positive.
And since the point is on the unit circle, $x^2 + y^2 = 1$ - the
Pythagorean identity, for free.

## The Rule

On the unit half-circle, let $M(x; y)$ be the point at angle $\alpha \in
[0^\circ; 180^\circ]$ from the positive $x$-axis. Then

$$
\cos \alpha = x, \qquad \sin \alpha = y, \qquad \tan \alpha = \frac{\sin \alpha}
{\cos \alpha} \ (\alpha \neq 90^\circ)
$$

**Values:** $\sin 0^\circ = 0$, $\cos 0^\circ = 1$; $\sin 90^\circ = 1$, $\cos
90^\circ = 0$; $\sin 180^\circ = 0$, $\cos 180^\circ = -1$.

**Signs:** $\sin \alpha \geq 0$ for all $\alpha$ in the range; $\cos \alpha > 0$
for acute, $< 0$ for obtuse.

**Reduction formulas:** $\sin(180^\circ - \alpha) = \sin \alpha$, $\cos(180^\circ -
\alpha) = -\cos \alpha$, $\tan(180^\circ - \alpha) = -\tan \alpha$.

**Basic identity:** $\sin^2 \alpha + \cos^2 \alpha = 1$.

## Worked Example

Find $\sin 150^\circ$, $\cos 150^\circ$, $\tan 135^\circ$. Then: given $\cos
\alpha = -\frac{3}{5}$, find $\sin \alpha$ and $\tan \alpha$. Then: is the angle
with $\cos \alpha = -0.2$ acute or obtuse?

- **$150^\circ = 180^\circ - 30^\circ$:** $\sin 150^\circ = \sin 30^\circ =
  \frac{1}{2}$; $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$.
- **$\tan 135^\circ = -\tan 45^\circ = -1$.**
- **From $\cos \alpha = -\frac{3}{5}$.** $\sin^2 \alpha = 1 - \frac{9}{25} =
  \frac{16}{25}$, and $\sin \alpha \geq 0$, so $\sin \alpha = \frac{4}{5}$. $\tan
  \alpha = \frac{4/5}{-3/5} = -\frac{4}{3}$. (The angle is obtuse - the cosine
  is negative.)
- **$\cos \alpha = -0.2 < 0$:** obtuse.

Compare with grade 8: there $\sin$ and $\cos$ were positive by
construction; now the sign of the cosine *tells* you the type of
angle.

## Common Mistake

Taking $\sin \alpha = \pm \frac{4}{5}$ from $\sin^2 \alpha = \frac{16}{25}$. In
the range $0^\circ$ to $180^\circ$ the sine is never negative - the
half-circle is above the axis - so only $+\frac{4}{5}$. The other slip is
the reduction sign: $\cos(180^\circ - \alpha) = -\cos \alpha$, with a minus,
but $\sin(180^\circ - \alpha) = +\sin \alpha$. Picture the two points, mirror
images across the $y$-axis: same height, opposite $x$.

## The Takeaway

Sine and cosine are the $y$ and $x$ of a point on the unit half-circle;
tangent is their ratio. Obtuse angles have negative cosine, positive
sine. $\sin^2 + \cos^2 = 1$; and $180^\circ - \alpha$ keeps the sine, negates
the cosine and tangent.

## Check Yourself

1. Find $\sin 120^\circ$ and $\cos 120^\circ$.
2. Find $\cos 180^\circ$ and $\tan 180^\circ$.
3. Given $\sin \alpha = \frac{5}{13}$ and $\alpha$ obtuse, find $\cos \alpha$.
4. Given $\cos \alpha = \frac{1}{2}$, find $\alpha$. Given $\cos \alpha = -\frac{1}{2}$?
5. Simplify $\sin^2 \alpha - 1$.
6. Someone finds $\cos 135^\circ = \frac{\sqrt{2}}{2}$. Correct it.

> [!spoiler] Answers
>
> 1. $\frac{\sqrt{3}}{2}$; $-\frac{1}{2}$.
> 2. $-1$; $0$.
> 3. $\cos^2 \alpha = \frac{144}{169}$, obtuse: $-\frac{12}{13}$.
> 4. $60^\circ$; $120^\circ$.
> 5. $-\cos^2 \alpha$.
> 6. $\cos 135^\circ = -\cos 45^\circ = -\frac{\sqrt{2}}{2}$.
