---
title: "[S] Numerical Inequalities"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-6-topic-34-lesson-34-subtracting-rational-numbers]
---

## Why It Matters

"Is this bridge strong enough?", "will the budget cover it?", "which
route is shorter?" - most real questions are about *more or less*, not
*exactly equal*. Grade 9 algebra opens by taking the inequality sign
seriously: not as a comparison you do by eye, but as a statement with
a definition you can prove things from. Everything about solving
inequalities later - and much of the study of functions - rests on
that definition.

## The Big Idea

You've compared numbers since grade 5 by looking: $7 > 3$, $-2 < 1$. But
how do you compare $\frac{7}{9}$ and $\frac{11}{14}$, or $a + 1$ and $a$, or
$x^2 + 1$ and $2x$, where looking doesn't settle it? By subtracting. The
statement $a > b$ means exactly that $a - b$ is a positive number.
That turns any comparison into a question about the *sign* of a
difference - and signs of expressions are something algebra can find,
by factoring, completing a square, or simply computing.

## The Rule

**Definition.** A number $a$ is **greater** than $b$ ($a > b$) if the
difference $a - b$ is positive; $a$ is **less** than $b$ ($a < b$) if
$a - b$ is negative. So $a = b$ exactly when $a - b = 0$.

For any two numbers exactly one of $a > b$, $a = b$, $a < b$ holds.

**Strict** inequalities use $<$ and $>$; **non-strict** ones $\leq$
("less than or equal") and $\geq$. $a \geq b$ is true when $a > b$ *or*
$a = b$ - so $3 \geq 3$ and $5 \geq 3$ are both true.

To compare two numbers or expressions: form the difference, determine
its sign.

## Worked Example

Compare $\frac{7}{9}$ and $\frac{11}{14}$; then prove that $a^2 + 1 \geq 2a$ for
every $a$; then compare $(x + 2)(x + 4)$ and $(x + 1)(x + 5)$.

- **Fractions:** $\frac{7}{9} - \frac{11}{14} = \frac{98 - 99}{126} = -\frac{1}{126}
  < 0$, so $\frac{7}{9} < \frac{11}{14}$.
- **$a^2 + 1$ vs $2a$:** $a^2 + 1 - 2a = (a - 1)^2 \geq 0$ for every $a$,
  so $a^2 + 1 \geq 2a$. Equality holds only at $a = 1$. (This is the
  first of many inequalities proved by "the difference is a square".)
- **Products:** $(x + 2)(x + 4) - (x + 1)(x + 5) = (x^2 + 6x + 8) - (x^2 +
  6x + 5) = 3 > 0$, so $(x + 2)(x + 4) > (x + 1)(x + 5)$ for every $x$.

Notice that the last one holds for *every* $x$ - the sign of the
difference didn't depend on $x$ at all.

## Common Mistake

Comparing by looking at the expressions rather than their difference:
"$a^2$ is bigger than $a$ because it's squared". Take $a = \frac{1}{2}$:
$a^2 = \frac{1}{4} < \frac{1}{2}$. The difference $a^2 - a = a(a - 1)$ is
negative for $0 < a < 1$, positive for $a > 1$ or $a < 0$ - the answer
depends on $a$, and only the difference tells you how. Another slip:
reading $a \geq b$ as "a is greater than b" and rejecting $3 \geq 3$.
"Or equal" is part of the sign.

## The Takeaway

$a > b$ means $a - b > 0$; $a < b$ means $a - b < 0$. To compare, subtract
and find the sign of the difference - by computing, factoring or
recognizing a square. Non-strict signs allow equality.

## Check Yourself

1. Compare $\frac{5}{8}$ and $\frac{7}{11}$.
2. Prove that $(a + b)^2 \geq 4ab$ for all $a, b$.
3. Compare $(x - 3)(x + 3)$ and $(x - 4)(x + 4)$.
4. Is $-2 \geq -2$ true? Is $-2 > -2$?
5. For which $a$ is $a^3 > a^2$?
6. Someone says "$x^2 \geq x$ for every $x$, since squaring makes numbers
   bigger". Give a counterexample.

> [!spoiler] Answers
>
> 1. $\frac{5}{8} - \frac{7}{11} = \frac{55 - 56}{88} < 0$: $\frac{5}{8} <
>    \frac{7}{11}$.
> 2. $(a + b)^2 - 4ab = (a - b)^2 \geq 0$.
> 3. Difference $(x^2 - 9) - (x^2 - 16) = 7 > 0$: the first is greater.
> 4. Yes; no.
> 5. $a^3 - a^2 = a^2(a - 1) > 0$ when $a > 1$.
> 6. $x = \frac{1}{2}$: $\frac{1}{4} < \frac{1}{2}$.
