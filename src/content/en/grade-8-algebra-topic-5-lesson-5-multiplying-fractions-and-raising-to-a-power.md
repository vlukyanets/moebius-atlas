---
title: "[S] Multiplying Fractions. Raising a Fraction to a Power"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-2-lesson-2-basic-property-of-a-rational-fraction]
---

## Why It Matters

Multiplying fractions is the easy operation - top times top, bottom
times bottom - and with polynomials it stays easy, provided you do
one thing first: factor everything and cancel across before you
multiply. Skip that and you're expanding products you'll only have to
factor again. This topic is mostly about that discipline, plus the
matching rule for powers of a fraction.

## The Big Idea

$\frac{P}{Q} \cdot \frac{R}{S} = \frac{PR}{QS}$, exactly as with numbers.
But $\frac{x^2 - 9}{x + 1} \cdot \frac{x^2 - 1}{x - 3}$ multiplied out
gives a quartic over a quadratic, and hidden inside are factors that
cancel. Factor first - $\frac{(x - 3)(x + 3)}{x + 1} \cdot \frac{(x - 1)(x +
1)}{x - 3}$ - and $x - 3$ cancels with $x - 3$, $x + 1$ with $x + 1$,
leaving $(x + 3)(x - 1)$ with no fraction at all. The multiplication is
never actually carried out; it's a bookkeeping of factors.

A power of a fraction is the fraction multiplied by itself: raise top
and bottom separately.

## The Rule

**Multiplication:**

$$
\frac{P}{Q} \cdot \frac{R}{S} = \frac{P \cdot R}{Q \cdot S}
$$

In practice: factor every numerator and denominator, cancel any factor
of a numerator against any factor of a denominator, then write the
product of what's left.

**Power of a fraction:**

$$
\left(\frac{P}{Q}\right)^n = \frac{P^n}{Q^n}
$$

A polynomial multiplies a fraction as a fraction over $1$: $P \cdot
\frac{R}{S} = \frac{P R}{S}$.

The result is valid on the common domain - all denominators non-zero.

## Worked Example

Find $\frac{x^2 - 9}{x + 1} \cdot \frac{x^2 - 1}{x - 3}$, then $\frac{4a^2}{3b}
\cdot \frac{9b^2}{2a}$, then $\left(\frac{2x}{y^2}\right)^3$, then $(x - 2)
\cdot \frac{x + 2}{x^2 - 4}$.

- **First.** Factor: $\frac{(x - 3)(x + 3)}{x + 1} \cdot \frac{(x - 1)(x +
  1)}{x - 3}$. Cancel $x - 3$ and $x + 1$: $(x + 3)(x - 1) = x^2 + 2x - 3$.
  Valid for $x \neq -1$, $x \neq 3$.
- **Second.** Cancel across: $\frac{4a^2 \cdot 9b^2}{3b \cdot 2a} =
  \frac{36a^2b^2}{6ab} = 6ab$.
- **Third.** $\frac{(2x)^3}{(y^2)^3} = \frac{8x^3}{y^6}$.
- **Fourth.** $\frac{(x - 2)(x + 2)}{(x - 2)(x + 2)} = 1$, for $x \neq \pm 2$.

## Common Mistake

Multiplying out before cancelling - and then not seeing the cancel.
$\frac{x^2 - 9}{x + 1} \cdot \frac{x^2 - 1}{x - 3} = \frac{x^4 - 10x^2 +
9}{x^2 - 2x - 3}$ is correct and useless. Factor, cancel, *then* write
the product. The other trap is raising only the numerator: $\left(\frac{2x}
{y^2}\right)^3 \neq \frac{8x^3}{y^2}$ - the denominator gets the exponent
too.

## The Takeaway

Multiply fractions by multiplying numerators and denominators - but
factor and cancel across first, so the product is already simplified.
A power of a fraction raises top and bottom to that power.

## Check Yourself

1. Find $\frac{3x}{y} \cdot \frac{y^2}{6x^2}$.
2. Find $\frac{a^2 - 4}{a} \cdot \frac{a^2}{a + 2}$.
3. Find $\left(\frac{a^2}{3b}\right)^2$.
4. Find $\frac{x^2 - 2x + 1}{x + 1} \cdot \frac{x^2 - 1}{x - 1}$.
5. Find $\left(-\frac{x}{2y}\right)^3$.
6. Someone computes $\left(\frac{a}{b}\right)^2 = \frac{a^2}{b}$. Correct
   it.

> [!spoiler] Answers
>
> 1. $\frac{y}{2x}$.
> 2. $a(a - 2)$.
> 3. $\frac{a^4}{9b^2}$.
> 4. $\frac{(x - 1)^2 (x - 1)(x + 1)}{(x + 1)(x - 1)} = (x - 1)^2$.
> 5. $-\frac{x^3}{8y^3}$.
> 6. $\frac{a^2}{b^2}$.
