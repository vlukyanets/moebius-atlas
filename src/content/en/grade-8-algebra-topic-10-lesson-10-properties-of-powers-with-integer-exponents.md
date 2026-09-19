---
title: "[S] Properties of Powers with Integer Exponents"
tag: THM
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-9-lesson-9-power-with-an-integer-exponent]
---

## Why It Matters

$\frac{10^{-3} \cdot 10^{8}}{10^{2}}$ - do you really want to write out
the decimals? The five rules of powers from grade 7 work unchanged
for zero and negative exponents, so the answer is $10^{-3 + 8 - 2} =
10^3$ in one line. That's why scientists write everything as powers of
ten: with integer exponents the rules turn multiplying and dividing
into adding and subtracting small whole numbers.

## The Big Idea

The rules were proved for natural exponents by counting factors. For
integer exponents the definition $a^{-n} = \frac{1}{a^n}$ lets every case
be reduced to that one: $a^{-3} \cdot a^{5} = \frac{a^5}{a^3} = a^2 = a^{-3 +
5}$, and so on. The bookkeeping is the same; the only new
possibility is that the exponent you end up with may be negative or
zero, and then you write it as a fraction or as $1$.

The division rule no longer needs $m > n$: $a^m : a^n = a^{m - n}$ for
any integers, with $a^{m - n}$ read by the definition when $m - n \leq 0$.

## The Rule

For $a \neq 0$, $b \neq 0$ and any integers $m$, $n$:

$$
a^m \cdot a^n = a^{m + n}, \qquad a^m : a^n = a^{m - n}, \qquad (a^m)^n = a^{mn}
$$

$$
(ab)^n = a^n b^n, \qquad \left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}
$$

Exactly the grade-7 rules; the only change is that the exponents may
now be any integers, and the bases must be non-zero.

Standard practice: simplify with the rules, then write the result with
positive exponents only.

## Worked Example

Simplify $\frac{10^{-3} \cdot 10^{8}}{10^{2}}$, $(x^{-2})^{-3} \cdot x^{-4}$,
$\left(\frac{2a^{-1}}{b^2}\right)^{-2}$ and $\frac{a^{-5} b^{3}}{a^{-2}
b^{-1}}$.

- **First:** $10^{-3 + 8 - 2} = 10^3 = 1000$.
- **Second:** $(x^{-2})^{-3} = x^{6}$; times $x^{-4}$: $x^{2}$.
- **Third:** flip and square: $\left(\frac{b^2}{2a^{-1}}\right)^2 =
  \frac{b^4}{4a^{-2}} = \frac{a^2 b^4}{4}$.
- **Fourth:** $a^{-5 - (-2)} b^{3 - (-1)} = a^{-3} b^{4} = \frac{b^4}{a^3}$.

A numerical one: $\frac{4^{-2} \cdot 8}{2^{-3}} = \frac{2^{-4} \cdot
2^{3}}{2^{-3}} = 2^{-4 + 3 + 3} = 2^2 = 4$ - rewriting every base as a
power of $2$ first.

## Common Mistake

Subtracting exponents in the wrong direction, or losing the sign of a
negative one. $\frac{a^{-5}}{a^{-2}}$ is $a^{-5 - (-2)} = a^{-3}$, not
$a^{-7}$: subtracting a negative adds. And $(x^{-2})^{-3}$ is $x^{6}$, a
positive exponent - two minuses multiply to a plus. Write each
exponent operation out with its signs before simplifying.

## The Takeaway

The five power rules hold for all integer exponents with non-zero
bases: add when multiplying, subtract when dividing, multiply for a
power of a power, distribute over products and quotients. Finish by
writing the result with positive exponents.

## Check Yourself

1. Simplify $a^{-4} \cdot a^{7}$.
2. Simplify $\frac{b^{2}}{b^{-3}}$.
3. Simplify $(c^{-3})^{2}$ and write with a positive exponent.
4. Simplify $\left(\frac{x^{-1}}{y^{2}}\right)^{-3}$.
5. Compute $\frac{3^{-2} \cdot 3^{5}}{3^{4}}$.
6. Someone simplifies $\frac{a^{-5}}{a^{-2}}$ to $a^{-7}$. What's right?

> [!spoiler] Answers
>
> 1. $a^{3}$.
> 2. $b^{5}$.
> 3. $c^{-6} = \frac{1}{c^6}$.
> 4. $\frac{x^{3}}{y^{-6}} = x^3 y^6$.
> 5. $3^{-1} = \frac{1}{3}$.
> 6. $a^{-5 - (-2)} = a^{-3} = \frac{1}{a^3}$.
