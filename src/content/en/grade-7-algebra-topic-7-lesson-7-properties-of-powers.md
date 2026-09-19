---
title: "[S] Properties of Powers with Natural Exponents"
tag: THM
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-6-lesson-6-power-with-natural-exponent]
---

## Why It Matters

$2^{10} \cdot 2^{5}$ - do you really want to work out $1024 \cdot 32$? Or
$\frac{3^{12}}{3^{10}}$ by computing both? Powers have five rules that
turn such calculations into a glance at the exponents: $2^{15}$, $3^2$.
They're the grammar of every formula with powers in it - monomials,
polynomials, scientific notation, and eventually the laws of growth
and decay.

## The Big Idea

Everything comes from counting factors. $2^{10} \cdot 2^5$ is ten twos
times five twos - fifteen twos in a row: $2^{15}$. Multiplying powers of
the same base *adds* the exponents. $\frac{3^{12}}{3^{10}}$ is twelve
threes over ten threes; ten cancel, two remain: $3^2$. Dividing
*subtracts*. $(2^3)^4$ is four copies of "three twos" - twelve twos:
$2^{12}$. A power of a power *multiplies* exponents. And $(2 \cdot 5)^3$ is
$(2 \cdot 5)(2 \cdot 5)(2 \cdot 5) = 2^3 \cdot 5^3$ - a power of a product is
the product of the powers.

None of this needs memorising if you can picture the row of factors.

## The Rule

For any numbers $a$, $b$ and natural $m$, $n$:

$$
a^m \cdot a^n = a^{m + n} \qquad \text{(product of powers with the same base)}
$$

$$
a^m : a^n = a^{m - n}, \quad a \neq 0,\ m > n \qquad \text{(quotient)}
$$

$$
(a^m)^n = a^{mn} \qquad \text{(power of a power)}
$$

$$
(ab)^n = a^n b^n \qquad \text{(power of a product)}
$$

$$
\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}, \quad b \neq 0 \qquad \text{(power of a quotient)}
$$

The first two need the *same base*; there is no rule for $a^m \cdot b^n$
with different bases, and none for adding powers.

## Worked Example

Simplify $x^4 \cdot x^7$, $\frac{a^9}{a^3}$, $(y^2)^5$, $(2m)^4$ and
$(-3x^2)^3$; then compute $\frac{2^{13} \cdot 2^4}{2^{15}}$.

- **$x^4 \cdot x^7 = x^{11}$** - add.
- **$\frac{a^9}{a^3} = a^6$** - subtract.
- **$(y^2)^5 = y^{10}$** - multiply.
- **$(2m)^4 = 2^4 m^4 = 16m^4$** - each factor to the fourth.
- **$(-3x^2)^3 = (-3)^3 (x^2)^3 = -27x^6$** - the sign: odd exponent.
- **$\frac{2^{13} \cdot 2^4}{2^{15}} = \frac{2^{17}}{2^{15}} = 2^2 = 4$.**

A chain: $\frac{(a^3)^4 \cdot a}{a^{10}} = \frac{a^{12} \cdot a}{a^{10}} =
\frac{a^{13}}{a^{10}} = a^3$.

## Common Mistake

Multiplying the exponents when multiplying powers - $x^4 \cdot x^7 =
x^{28}$ - or adding them for a power of a power - $(y^2)^5 = y^7$. Each
rule says which operation the exponents undergo, and it's never the
same as the operation on the powers. And two more: $x^3 + x^3$ is
$2x^3$, not $x^6$; $2^3 \cdot 5^3$ *can* be combined - as $(2 \cdot 5)^3 =
10^3$ - but $2^3 \cdot 5^4$ can't.

## The Takeaway

Same base: multiply by adding exponents, divide by subtracting. Power
of a power: multiply exponents. Power of a product or quotient: raise
each part. Behind every rule is a row of identical factors being
counted.

## Check Yourself

1. Simplify $a^5 \cdot a \cdot a^2$.
2. Simplify $\frac{b^{10}}{b^4}$ and $(c^3)^3$.
3. Simplify $(5xy^2)^2$ and $\left(\frac{a}{2}\right)^3$.
4. Compute $\frac{3^7 \cdot 3^2}{3^8}$ and $\frac{(5^2)^3}{5^4}$.
5. Simplify $(-2a^3)^4$.
6. Someone writes $(x^3)^2 = x^5$ and $x^3 \cdot x^2 = x^6$. Fix both.

> [!spoiler] Answers
>
> 1. $a^8$.
> 2. $b^6$; $c^9$.
> 3. $25x^2y^4$; $\frac{a^3}{8}$.
> 4. $3$; $25$.
> 5. $16a^{12}$.
> 6. $(x^3)^2 = x^6$; $x^3 \cdot x^2 = x^5$.
