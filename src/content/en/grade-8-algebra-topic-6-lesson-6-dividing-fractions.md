---
title: "[S] Dividing Fractions"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-5-lesson-5-multiplying-fractions-and-raising-to-a-power]
---

## Why It Matters

Average speed is distance over time, and both may be fractions of
$x$: $\frac{s}{t}$ with $s = \frac{x^2 - 1}{x}$ and $t = \frac{x - 1}{2}$. To
find it you divide one rational fraction by another. The rule is the
grade-6 one - flip the second, multiply - but with polynomials a
division also carries a *third* condition on the domain: the fraction
you divide by must not be zero, so its numerator gets excluded too.

## The Big Idea

Dividing by $\frac{R}{S}$ is multiplying by $\frac{S}{R}$: the reciprocal
of a fraction is the fraction turned over, and that's true of rational
fractions for the same reason as for numbers - $\frac{R}{S} \cdot
\frac{S}{R} = 1$. After the flip, it's multiplication: factor, cancel
across, write what's left.

The domain needs one more exclusion. In $\frac{P}{Q} : \frac{R}{S}$, the
denominators $Q$ and $S$ must be non-zero as always - and the divisor
$\frac{R}{S}$ must be non-zero too, since you can't divide by zero. So
$R \neq 0$ as well. After the flip, $R$ is a denominator, which is the
same condition seen from the other side.

## The Rule

**Division:**

$$
\frac{P}{Q} : \frac{R}{S} = \frac{P}{Q} \cdot \frac{S}{R} = \frac{P \cdot S}{Q \cdot R}
$$

Valid when $Q \neq 0$, $S \neq 0$ **and** $R \neq 0$.

Dividing by a polynomial: $\frac{P}{Q} : R = \frac{P}{Q \cdot R}$. Dividing
a polynomial by a fraction: $P : \frac{R}{S} = \frac{P \cdot S}{R}$.

As with multiplication, factor and cancel across before writing the
product. A **compound fraction** - a fraction whose numerator or
denominator is itself a fraction - is a division written vertically:
$\dfrac{\frac{a}{b}}{\frac{c}{d}} = \frac{a}{b} : \frac{c}{d}$.

## Worked Example

Find $\frac{x^2 - 1}{x} : \frac{x - 1}{2}$, then $\frac{a^2 - 4}{a^2} :
(a + 2)$, then $\dfrac{\frac{x}{y}}{\frac{x^2}{y^2}}$, and state the domains.

- **First.** Flip and multiply: $\frac{(x - 1)(x + 1)}{x} \cdot \frac{2}{x -
  1}$. Cancel $x - 1$: $\frac{2(x + 1)}{x}$. Domain: $x \neq 0$ (denominator),
  $x \neq 1$ (the divisor must not be zero).
- **Second.** $\frac{(a - 2)(a + 2)}{a^2} \cdot \frac{1}{a + 2} = \frac{a -
  2}{a^2}$. Domain: $a \neq 0$, $a \neq -2$.
- **Third.** $\frac{x}{y} \cdot \frac{y^2}{x^2} = \frac{y}{x}$. Domain: $x
  \neq 0$, $y \neq 0$.

The average speed: $\frac{x^2 - 1}{x} : \frac{x - 1}{2} = \frac{2(x + 1)}{x}$,
for $x \neq 0$, $x \neq 1$.

## Common Mistake

Flipping the wrong fraction, or forgetting the divisor's numerator in
the domain. $\frac{x^2 - 1}{x} : \frac{x - 1}{2}$ is not $\frac{x}{x^2 - 1}
\cdot \frac{x - 1}{2}$ - only the second fraction turns over. And after
cancelling, $\frac{2(x + 1)}{x}$ looks fine at $x = 1$; but the original
divides by $\frac{x - 1}{2}$, which is zero there. The excluded value
came from a numerator, and it's easy to miss.

## The Takeaway

Divide by flipping the second fraction and multiplying - factor and
cancel across as usual. The domain excludes every denominator's zeros
*and* the divisor's numerator's zeros, because you can't divide by
zero.

## Check Yourself

1. Find $\frac{6x^2}{y} : \frac{3x}{y^2}$.
2. Find $\frac{x^2 - 9}{x + 1} : \frac{x + 3}{x + 1}$.
3. Find $\frac{a}{b^2} : a$.
4. Find $\dfrac{\frac{m^2 - n^2}{m}}{\frac{m + n}{m^2}}$.
5. State the full domain of $\frac{x}{x - 2} : \frac{x + 3}{x}$.
6. Someone divides $\frac{a}{b} : \frac{c}{d}$ as $\frac{b}{a} \cdot
   \frac{c}{d}$. What's the correct product?

> [!spoiler] Answers
>
> 1. $2xy$.
> 2. $\frac{(x - 3)(x + 3)}{x + 1} \cdot \frac{x + 1}{x + 3} = x - 3$.
> 3. $\frac{1}{b^2}$.
> 4. $\frac{(m - n)(m + n)}{m} \cdot \frac{m^2}{m + n} = m(m - n)$.
> 5. $x \neq 2$, $x \neq 0$, $x \neq -3$.
> 6. $\frac{a}{b} \cdot \frac{d}{c}$ - only the divisor is flipped.
