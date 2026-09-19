---
title: "[S] Power with an Integer Exponent"
tag: DEF
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-2-lesson-2-basic-property-of-a-rational-fraction]
---

## Why It Matters

A millimetre is $10^{-3}$ m; a byte is $2^{-10}$ of a kibibyte; a lens
formula has $\frac{1}{f}$, which is $f^{-1}$. Exponents that are zero or
negative show up in every science, and they're not a new kind of
power - they're the old rules for powers pushed one step further, so
that $a^m : a^n = a^{m - n}$ keeps working even when $n$ is bigger than
$m$.

## The Big Idea

Look at what happens as the exponent counts down: $2^3 = 8$, $2^2 = 4$,
$2^1 = 2$ - each step divides by $2$. Keep going: $2^0$ should be $1$,
$2^{-1}$ should be $\frac{1}{2}$, $2^{-2}$ should be $\frac{1}{4}$. That
isn't a choice; it's forced if the pattern - and the division rule
$a^m : a^n = a^{m - n}$ - is to hold. $2^3 : 2^3 = 1$ and also $2^{3 - 3}
= 2^0$, so $2^0 = 1$. $2^2 : 2^5 = \frac{1}{8}$ and also $2^{-3}$, so
$2^{-3} = \frac{1}{2^3}$.

A negative exponent means "one over the positive power." A zero
exponent means $1$. And the base can't be zero for those - $0^0$ and
$0^{-n}$ would need division by zero.

## The Rule

For $a \neq 0$ and natural $n$:

$$
a^0 = 1, \qquad a^{-n} = \frac{1}{a^n}
$$

Together with $a^n$ for natural $n$, this defines a **power with an
integer exponent**. The base $0$ is allowed only for positive
exponents.

Consequences:

$$
\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n, \qquad \frac{1}{a^{-n}} = a^n
$$

A negative exponent flips the base; a power in a denominator can move
to the numerator by changing the sign of its exponent, and vice versa.

## Worked Example

Compute $5^{-2}$, $\left(\frac{2}{3}\right)^{-3}$, $(-4)^{-1}$, $7^0$ and
$(0.1)^{-2}$; then write $\frac{1}{x^3}$ and $\frac{a^{-2}}{b^{-3}}$ without
negative exponents.

- **$5^{-2} = \frac{1}{25}$.**
- **$\left(\frac{2}{3}\right)^{-3} = \left(\frac{3}{2}\right)^3 =
  \frac{27}{8}$.**
- **$(-4)^{-1} = \frac{1}{-4} = -\frac{1}{4}$.**
- **$7^0 = 1$.**
- **$(0.1)^{-2} = \frac{1}{0.01} = 100$.**
- **$\frac{1}{x^3} = x^{-3}$**, and **$\frac{a^{-2}}{b^{-3}} =
  \frac{b^3}{a^2}$** - each power crosses the bar with its exponent's sign
  flipped.

Units: $1$ mm $= 10^{-3}$ m, and $10^{-3} \cdot 10^3 = 10^0 = 1$ - a
thousand millimetres make a metre.

## Common Mistake

Reading a negative exponent as a negative number. $5^{-2}$ is not $-25$
and not $-\frac{1}{25}$; it's $+\frac{1}{25}$. The minus in the exponent
says "reciprocal," not "negative." And $a^0 = 1$, not $0$: anything
(except $0$) to the zero power is one. Both slips vanish if you write
the definition out - $a^{-n} = \frac{1}{a^n}$ - before computing.

## The Takeaway

$a^0 = 1$ and $a^{-n} = \frac{1}{a^n}$, for $a \neq 0$ - forced by the
division rule for powers. A negative exponent flips the base, moves a
power across a fraction bar, and never by itself makes anything
negative.

## Check Yourself

1. Compute $3^{-3}$, $10^{-1}$ and $(-2)^{-3}$.
2. Compute $\left(\frac{1}{4}\right)^{-2}$ and $\left(1\frac{1}{2}\right)^{-1}$.
3. Compute $2^0 + 2^{-1} + 2^{-2}$.
4. Write $\frac{x^2}{y^{-1}}$ without a negative exponent.
5. Write $\frac{3}{a^4}$ using a negative exponent.
6. Someone says $4^{-1} = -4$. What's the right value?

> [!spoiler] Answers
>
> 1. $\frac{1}{27}$; $0.1$; $-\frac{1}{8}$.
> 2. $16$; $\frac{2}{3}$.
> 3. $1 + 0.5 + 0.25 = 1.75$.
> 4. $x^2 y$.
> 5. $3a^{-4}$.
> 6. $\frac{1}{4}$.
