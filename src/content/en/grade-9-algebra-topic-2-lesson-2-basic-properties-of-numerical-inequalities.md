---
title: "[S] Basic Properties of Numerical Inequalities"
tag: THM
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-1-lesson-1-numerical-inequalities]
---

## Why It Matters

You solve equations by doing the same thing to both sides. Can you do
that with inequalities? Mostly yes - but one operation flips the sign,
and forgetting which one is the single most common error in the whole
of grade 9 algebra. This topic proves, from the definition, exactly
what you may do to an inequality and what happens to its sign when you
do it.

## The Big Idea

Every property follows from one idea: $a > b$ means $a - b > 0$, so
check what an operation does to the difference. Adding the same $c$ to
both sides doesn't change the difference at all - $(a + c) - (b + c) =
a - b$ - so the sign stays. Multiplying both sides by $c$ multiplies
the difference by $c$: $ac - bc = c(a - b)$. If $c$ is positive the sign
stays; if $c$ is negative the difference changes sign, and the
inequality **flips**. Multiplying by a negative number reflects the
number line, and a reflection swaps left and right.

## The Rule

**Theorem 1.** If $a > b$ and $b > c$, then $a > c$ (transitivity).

**Theorem 2.** If $a > b$, then $a + c > b + c$ for any $c$. Adding the same
number to both sides keeps the inequality; a term can be moved across
with its sign changed.

**Theorem 3.** If $a > b$ and $c > 0$, then $ac > bc$; if $a > b$ and $c < 0$,
then $ac < bc$. Multiplying (or dividing) both sides by a positive
number keeps the sign; by a **negative** number reverses it.

**Corollary.** If $a > b > 0$, then $\frac{1}{a} < \frac{1}{b}$ - taking
reciprocals of positive numbers reverses the inequality.

*Proof of Theorem 3.* $ac - bc = c(a - b)$. Here $a - b > 0$; the product
is positive when $c > 0$ and negative when $c < 0$. $\square$

## Worked Example

Given $x > y$, compare: $x + 5$ and $y + 5$; $3x$ and $3y$; $-2x$ and $-2y$;
$5 - x$ and $5 - y$. Then: given $2 < a < 3$, estimate $-3a + 1$.

- **$x + 5 > y + 5$** - Theorem 2.
- **$3x > 3y$** - multiplied by $3 > 0$.
- **$-2x < -2y$** - multiplied by $-2 < 0$: the sign flips.
- **$5 - x < 5 - y$** - that's $-x < -y$ (flip) then $+5$ (keep).
- **Estimate.** From $2 < a < 3$, multiply by $-3$: $-6 > -3a > -9$, i.e.
  $-9 < -3a < -6$. Add $1$: $-8 < -3a + 1 < -5$.

Reciprocals: from $2 < a < 3$ (all positive), $\frac{1}{3} < \frac{1}{a} <
\frac{1}{2}$ - the ends swap.

## Common Mistake

Dividing by a negative number and keeping the sign: from $-2x > 6$
concluding $x > -3$. Dividing by $-2$ flips it: $x < -3$. Check with $x
= -4$: $-2 \cdot (-4) = 8 > 6$, true - and $-4 < -3$. The other slip is
multiplying by a letter without knowing its sign: from $a > b$ you
can't conclude $ac > bc$ unless you know $c > 0$. If the sign of $c$ is
unknown, the inequality could go either way.

## The Takeaway

Add anything to both sides - the sign stays. Multiply or divide by a
positive number - the sign stays. Multiply or divide by a negative
number - the sign **flips**. Reciprocals of positives flip it too. All
of it because $a > b$ is a statement about the sign of $a - b$.

## Check Yourself

1. Given $a < b$, compare $a - 7$ and $b - 7$.
2. Given $a < b$, compare $-\frac{a}{4}$ and $-\frac{b}{4}$.
3. Given $1 < x < 4$, estimate $2x - 3$.
4. Given $1 < x < 4$, estimate $-x$ and $\frac{1}{x}$.
5. Is it true that $a > b$ implies $a^2 > b^2$? Test $a = 1$, $b = -3$.
6. Someone solves $-x > 2$ and gets $x > -2$. Correct it and check with
   a number.

> [!spoiler] Answers
>
> 1. $a - 7 < b - 7$.
> 2. $-\frac{a}{4} > -\frac{b}{4}$.
> 3. $-1 < 2x - 3 < 5$.
> 4. $-4 < -x < -1$; $\frac{1}{4} < \frac{1}{x} < 1$.
> 5. No: $1 > -3$ but $1 < 9$. Squaring keeps the sign only for
>    non-negative numbers.
> 6. $x < -2$; $x = -5$: $-(-5) = 5 > 2$, true.
