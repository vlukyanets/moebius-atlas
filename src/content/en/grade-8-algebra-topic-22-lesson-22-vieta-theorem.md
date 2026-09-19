---
title: "[S] Vieta's Theorem and Its Converse"
tag: THM
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-21-lesson-21-quadratic-formula]
---

## Why It Matters

$x^2 - 5x + 6 = 0$: two numbers that add to $5$ and multiply to $6$ - that's
$2$ and $3$, and they're the roots. No discriminant, no formula, three
seconds. Vieta's theorem says the roots of a reduced quadratic always
add to minus the middle coefficient and multiply to the constant. It
solves easy equations by inspection, checks hard ones instantly, and
builds an equation from its roots on demand.

## The Big Idea

Take the two roots from the formula, $\frac{-b + \sqrt{D}}{2a}$ and $\frac{-b -
\sqrt{D}}{2a}$, and add them: the roots cancel, leaving $\frac{-2b}{2a} =
-\frac{b}{a}$. Multiply them: a difference of squares, $\frac{b^2 - D}{4a^2}
= \frac{4ac}{4a^2} = \frac{c}{a}$. So sum $= -\frac{b}{a}$, product $=
\frac{c}{a}$, and for a reduced equation ($a = 1$) simply $-b$ and $c$.

The converse turns it into a tool: if two numbers have sum $-p$ and
product $q$, they are the roots of $x^2 + px + q = 0$. That's why
guessing works - a guess that fits both the sum and the product is
guaranteed right.

## The Rule

**Vieta's theorem.** If $x_1$, $x_2$ are the roots of the reduced
quadratic $x^2 + px + q = 0$, then

$$
x_1 + x_2 = -p, \qquad x_1 x_2 = q
$$

For the general $ax^2 + bx + c = 0$: $x_1 + x_2 = -\frac{b}{a}$, $x_1 x_2 =
\frac{c}{a}$.

**Converse.** If numbers $x_1$, $x_2$ satisfy $x_1 + x_2 = -p$ and $x_1 x_2
= q$, then they are the roots of $x^2 + px + q = 0$.

Uses: find roots by inspection when they're integers; check a solved
equation; write an equation with given roots, $x^2 - (x_1 + x_2)x +
x_1x_2 = 0$; find the other root when one is known; read the signs of
the roots from $p$ and $q$ (product positive: same signs; negative:
opposite signs).

## Worked Example

Solve $x^2 - 5x + 6 = 0$ and $x^2 + 2x - 15 = 0$ by inspection; write a
reduced quadratic with roots $-3$ and $7$; one root of $x^2 - 9x + 14 = 0$
is $2$ - find the other.

- **$x^2 - 5x + 6$:** sum $5$, product $6$: $2$ and $3$. Roots $2$, $3$.
- **$x^2 + 2x - 15$:** sum $-2$, product $-15$: opposite signs, differing
  by $2$: $3$ and $-5$. Roots $3$, $-5$.
- **Roots $-3$ and $7$:** sum $4$, product $-21$: $x^2 - 4x - 21 = 0$.
- **Other root:** $2 + x_2 = 9$, so $x_2 = 7$. Check: $2 \cdot 7 = 14$.

Signs at a glance: $x^2 + 8x + 15 = 0$ has product $15 > 0$ and sum $-8 <
0$, so both roots negative: $-3$, $-5$.

## Common Mistake

Getting the sign of the sum wrong: for $x^2 - 5x + 6$, the sum is $+5$,
not $-5$ - it's *minus* the coefficient. And applying the reduced form
to a non-reduced equation: $2x^2 - 6x + 4 = 0$ has roots summing to
$\frac{6}{2} = 3$, not $6$. Divide by $a$ first, or use $-\frac{b}{a}$ and
$\frac{c}{a}$. Also: the converse needs *both* conditions - matching the
product alone isn't enough.

## The Takeaway

Roots of $x^2 + px + q = 0$ sum to $-p$ and multiply to $q$ - and any two
numbers with that sum and product are the roots. Use it to solve by
inspection, to check, to build equations from roots, and to find a
missing root.

## Check Yourself

1. Find the roots of $x^2 - 7x + 12 = 0$ by inspection.
2. Find the roots of $x^2 + 3x - 10 = 0$ by inspection.
3. Write a reduced quadratic with roots $4$ and $-1$.
4. One root of $x^2 + 5x - 24 = 0$ is $3$. Find the other.
5. Without solving, find the sum and product of the roots of $3x^2 -
   12x + 5 = 0$.
6. Someone says the roots of $x^2 + 6x + 8 = 0$ are $2$ and $4$ "since $2
   \cdot 4 = 8$." Check the sum.

> [!spoiler] Answers
>
> 1. $3$ and $4$.
> 2. $2$ and $-5$.
> 3. $x^2 - 3x - 4 = 0$.
> 4. $-8$.
> 5. Sum $4$, product $\frac{5}{3}$.
> 6. $2 + 4 = 6 \neq -6$; the roots are $-2$ and $-4$.
