---
title: "[S] Power with a Natural Exponent"
tag: DEF
track: school
grade: 7
subject: algebra
requires: [grade-5-topic-8-lesson-8-powers-of-natural-numbers, grade-6-topic-36-lesson-36-multiplying-rational-numbers]
---

## Why It Matters

In grade 5 a power was a stack of identical natural numbers. Now the
base can be anything - a fraction, a decimal, a negative number, a
variable - and one question becomes urgent: what sign does $(-2)^5$
have? What about $(-2)^6$? And is $-2^4$ the same as $(-2)^4$? Powers run
through every formula from here to the end of school, and these sign
questions are where people slip.

## The Big Idea

Nothing about the definition changes: $a^n$ is $n$ copies of $a$
multiplied together. What changes is that $a$ may be negative, and then
the sign rule for products kicks in. $(-2)^5 = (-2)(-2)(-2)(-2)(-2)$ has
five minus signs - odd - so it's negative: $-32$. $(-2)^6$ has six - even
- so it's positive: $64$. A negative base flips sign with every extra
factor; an even exponent always lands positive.

And $-2^4$ is a different animal from $(-2)^4$. Without brackets, the
power binds tighter than the minus: $-2^4$ means $-(2^4) = -16$, "the
opposite of two to the fourth." With brackets, the minus is part of
the base: $(-2)^4 = 16$.

## The Rule

For any number $a$ and natural $n \geq 2$, the **power** $a^n$ is the
product of $n$ factors equal to $a$; $a^1 = a$. Here $a$ is the **base**,
$n$ the **exponent**.

Signs:

- $a > 0$: $a^n > 0$ for every $n$;
- $a < 0$, $n$ **even**: $a^n > 0$;
- $a < 0$, $n$ **odd**: $a^n < 0$;
- $0^n = 0$; $1^n = 1$; $(-1)^n$ is $1$ for even $n$ and $-1$ for odd $n$.

**Order of operations:** powers are computed before multiplication,
division, addition and subtraction. So $-a^n = -(a^n)$, while $(-a)^n$
raises the negative number itself.

Fractions and decimals: $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$,
and $(0.1)^3 = 0.001$.

## Worked Example

Compute $(-3)^4$, $-3^4$, $(-3)^3$, $\left(-\frac{1}{2}\right)^3$ and
$(-0.2)^2$; then find the value of $-x^2 + 2x^3$ for $x = -1$.

- **$(-3)^4$:** even exponent, negative base - positive: $81$.
- **$-3^4$:** the opposite of $3^4$: $-81$.
- **$(-3)^3$:** odd exponent - negative: $-27$.
- **$\left(-\frac{1}{2}\right)^3 = -\frac{1}{8}$.**
- **$(-0.2)^2 = 0.04$** - positive, two decimal places.
- **$-x^2 + 2x^3$ at $x = -1$:** $x^2 = 1$, $x^3 = -1$; so $-1 + 2 \cdot (-1)
  = -3$.

Signs at a glance: $(-5)^{17}$ is negative (odd), $(-5)^{18}$ positive,
$-5^{18}$ negative (the minus stands outside).

## Common Mistake

Reading $-2^4$ as $(-2)^4$. They differ in sign: $-16$ against $16$. The
exponent applies only to what's right next to it - the $2$ - unless
brackets say otherwise. In an expression like $-x^2$, the square is
taken first and then negated, so at $x = -1$ it's $-1$, not $1$.

## The Takeaway

A power is repeated multiplication, for any base. A negative base gives
a positive result for even exponents and a negative one for odd; and a
minus sign in front of a power, without brackets, stays outside the
power.

## Check Yourself

1. Compute $(-4)^2$, $-4^2$, $(-4)^3$.
2. Compute $\left(-\frac{2}{3}\right)^2$ and $(-0.1)^3$.
3. Which is bigger, $(-2)^7$ or $(-2)^6$?
4. What's the sign of $(-7)^{25}$? Of $-(-7)^{26}$?
5. Find the value of $2a^2 - a^3$ for $a = -2$.
6. Someone says $-3^2 = 9$. What's the right value, and why?

> [!spoiler] Answers
>
> 1. $16$, $-16$, $-64$.
> 2. $\frac{4}{9}$ and $-0.001$.
> 3. $(-2)^6 = 64$; $(-2)^7 = -128$.
> 4. Negative; negative (a positive power, negated).
> 5. $8 - (-8) = 16$.
> 6. $-9$: the power is computed first, then the minus applied.
