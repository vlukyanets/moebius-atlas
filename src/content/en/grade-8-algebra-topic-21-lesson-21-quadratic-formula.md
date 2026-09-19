---
title: "[S] Formula for the Roots of a Quadratic Equation"
tag: THM
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-20-lesson-20-quadratic-equations, grade-8-algebra-topic-17-lesson-17-properties-of-the-arithmetic-square-root]
---

## Why It Matters

$x^2 + 6x + 5 = 0$: all three coefficients present, no common factor, not
a perfect square. Factoring by inspection works here ($(x + 1)(x + 5)$),
but for $2x^2 - 7x + 4 = 0$ it doesn't. There's a formula that solves
*every* quadratic equation from its three coefficients alone, and a
single number - the discriminant - that tells you in advance whether
there are two roots, one, or none. This is the most-used formula of
school algebra.

## The Big Idea

The trick is completing the square: $x^2 + 6x + 5 = 0$ is $x^2 + 6x + 9 =
4$, that is $(x + 3)^2 = 4$, so $x + 3 = \pm 2$ and $x = -1$ or $x = -5$.
Add whatever makes the left side a perfect square, take roots, undo.
Do that with letters instead of $1, 6, 5$ and the formula falls out:
$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

Everything hinges on what's under the root, $D = b^2 - 4ac$. Positive:
two different roots. Zero: the $\pm$ gives the same thing twice - one
root. Negative: no square root, no real roots. The discriminant
"discriminates" between the three cases before you compute anything.

## The Rule

For $ax^2 + bx + c = 0$ with $a \neq 0$, the **discriminant** is

$$
D = b^2 - 4ac
$$

- $D > 0$: **two roots**, $x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$;
- $D = 0$: **one root**, $x = -\dfrac{b}{2a}$;
- $D < 0$: **no roots**.

For an even second coefficient, $b = 2k$, a lighter version:
$D_1 = k^2 - ac$ and $x_{1,2} = \dfrac{-k \pm \sqrt{D_1}}{a}$.

Plan: write the equation as $ax^2 + bx + c = 0$, read off $a$, $b$, $c$
with signs, compute $D$, decide, then compute the roots.

## Worked Example

Solve $x^2 + 6x + 5 = 0$, $2x^2 - 7x + 4 = 0$, $x^2 - 4x + 4 = 0$ and $x^2 +
x + 1 = 0$.

- **$x^2 + 6x + 5$:** $a = 1$, $b = 6$, $c = 5$. $D = 36 - 20 = 16 > 0$. $x =
  \frac{-6 \pm 4}{2}$: $x_1 = -1$, $x_2 = -5$.
- **$2x^2 - 7x + 4$:** $D = 49 - 32 = 17 > 0$. $x = \frac{7 \pm \sqrt{17}}{4}$ -
  two irrational roots, left exactly like that.
- **$x^2 - 4x + 4$:** $D = 16 - 16 = 0$. One root, $x = \frac{4}{2} = 2$.
  (Indeed it's $(x - 2)^2$.)
- **$x^2 + x + 1$:** $D = 1 - 4 = -3 < 0$. No roots.

The even-coefficient shortcut on the first: $k = 3$, $D_1 = 9 - 5 = 4$,
$x = -3 \pm 2$.

## Common Mistake

Losing the sign of $b$. In $2x^2 - 7x + 4 = 0$, $b = -7$, so $-b = 7$ and
$b^2 = 49$; writing $x = \frac{-7 \pm \ldots}{4}$ flips both roots. Read the
coefficients *with* their signs, and if the equation isn't in the form
$ax^2 + bx + c = 0$, put it there first. The second trap: computing
roots when $D < 0$ - there are none, and $\sqrt{-3}$ isn't a number.

## The Takeaway

$D = b^2 - 4ac$ decides: two roots if positive, one if zero, none if
negative; and $x = \frac{-b \pm \sqrt{D}}{2a}$ gives them. Read the
coefficients with signs from the standard form, and use the
half-$b$ shortcut when $b$ is even.

## Check Yourself

1. Solve $x^2 - 5x + 6 = 0$.
2. Solve $3x^2 + 5x - 2 = 0$.
3. Solve $x^2 + 8x + 16 = 0$.
4. Solve $2x^2 - 3x + 5 = 0$.
5. Solve $x^2 - 2x - 4 = 0$ (leave roots exact).
6. Someone solves $x^2 - 6x + 8 = 0$ with $b = 6$ and gets $x = -2$, $x =
   -4$. Which sign went wrong, and what are the roots?

> [!spoiler] Answers
>
> 1. $D = 1$: $x = 3$, $x = 2$.
> 2. $D = 49$: $x = \frac{-5 \pm 7}{6}$: $\frac{1}{3}$ and $-2$.
> 3. $D = 0$: $x = -4$.
> 4. $D = 9 - 40 < 0$: no roots.
> 5. $D_1 = 1 + 4 = 5$: $x = 1 \pm \sqrt{5}$.
> 6. $b = -6$, so $-b = +6$; the roots are $2$ and $4$.
