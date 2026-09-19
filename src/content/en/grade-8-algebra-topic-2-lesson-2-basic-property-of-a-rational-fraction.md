---
title: "[S] Basic Property of a Rational Fraction"
tag: THM
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-1-lesson-1-rational-expressions-and-fractions]
---

## Why It Matters

$\frac{x^2 - 4}{x^2 + 2x}$ looks complicated. It's $\frac{x - 2}{x}$ - the
same fraction, cancelled, wherever both make sense. Cancelling is how
you simplify, how you spot that two fractions are equal, and how you
prepare fractions to be added. The rule is the one you learned for
$\frac{6}{8} = \frac{3}{4}$, with one new obligation: to say where it
holds.

## The Big Idea

Multiply top and bottom of a fraction by the same non-zero thing and
the fraction doesn't change - that was grade 6. With polynomials, the
"thing" can be a polynomial, and it's non-zero only on part of the
line. So $\frac{x - 2}{x} = \frac{(x - 2)(x + 2)}{x(x + 2)}$ is true for
every $x$ that keeps both denominators alive: $x \neq 0$ and $x \neq -2$.

Cancelling runs the other way: factor top and bottom, strike out the
common factor. The cancelled fraction has a *bigger* domain than the
original - $\frac{x - 2}{x}$ is fine at $x = -2$, the original isn't -
so the two are equal only on the original's domain. That's the price
of the simplification, and it's stated, not ignored.

## The Rule

**Basic property of a rational fraction.** Multiplying or dividing the
numerator and denominator of a rational fraction by the same non-zero
polynomial gives an identically equal fraction (on the common domain):

$$
\frac{P}{Q} = \frac{P \cdot R}{Q \cdot R}, \qquad R \neq 0
$$

**To cancel** a fraction: factor the numerator and denominator, then
divide both by their common factors.

**Sign changes:** $\frac{-P}{Q} = \frac{P}{-Q} = -\frac{P}{Q}$, and
$\frac{P}{Q} = \frac{-P}{-Q}$. In particular $\frac{a - b}{b - a} = -1$,
since $b - a = -(a - b)$.

After cancelling, the equality holds only where the *original*
fraction is defined.

## Worked Example

Cancel $\frac{x^2 - 4}{x^2 + 2x}$, $\frac{6a^2b}{9ab^3}$ and $\frac{3 -
x}{x^2 - 9}$, stating where each equality holds. Then bring
$\frac{2}{x - 1}$ to the denominator $x^2 - 1$.

- **$\frac{x^2 - 4}{x^2 + 2x}$.** Factor: $\frac{(x - 2)(x + 2)}{x(x + 2)}$.
  Cancel $x + 2$: $\frac{x - 2}{x}$, for $x \neq 0$, $x \neq -2$.
- **$\frac{6a^2b}{9ab^3}$.** Common factor $3ab$: $\frac{2a}{3b^2}$, for $a
  \neq 0$, $b \neq 0$.
- **$\frac{3 - x}{x^2 - 9}$.** Denominator $(x - 3)(x + 3)$; numerator $3 -
  x = -(x - 3)$. Cancel: $\frac{-1}{x + 3} = -\frac{1}{x + 3}$, for $x \neq
  \pm 3$.
- **New denominator.** $x^2 - 1 = (x - 1)(x + 1)$; the extra factor is $x +
  1$: $\frac{2(x + 1)}{x^2 - 1}$.

## Common Mistake

Cancelling terms instead of factors. $\frac{x + 2}{x}$ is not $\frac{2}{1}$
- the $x$'s are terms of a sum, not factors of a product, and nothing
cancels. Only a factor of the *whole* numerator against a factor of
the *whole* denominator may go. Factor first; if it doesn't factor,
it doesn't cancel. And $x - 3$ and $3 - x$ are opposites, not equal:
cancelling them leaves $-1$, not $1$.

## The Takeaway

Top and bottom may be multiplied or divided by the same non-zero
polynomial. Cancel by factoring and striking common factors -
factors, never terms - and remember the result equals the original
only on the original's domain. $a - b$ over $b - a$ is $-1$.

## Check Yourself

1. Cancel $\frac{4x^2y}{6xy^2}$.
2. Cancel $\frac{x^2 - 9}{x^2 - 3x}$ and state the domain.
3. Cancel $\frac{a - b}{b - a}$.
4. Cancel $\frac{x^2 + 2x + 1}{x^2 - 1}$.
5. Bring $\frac{x}{x + 3}$ to the denominator $x^2 - 9$.
6. Someone cancels $\frac{x + 5}{x}$ to $5$. Why is that wrong?

> [!spoiler] Answers
>
> 1. $\frac{2x}{3y}$.
> 2. $\frac{(x - 3)(x + 3)}{x(x - 3)} = \frac{x + 3}{x}$, $x \neq 0$, $x
>    \neq 3$.
> 3. $-1$ (for $a \neq b$).
> 4. $\frac{(x + 1)^2}{(x - 1)(x + 1)} = \frac{x + 1}{x - 1}$.
> 5. $\frac{x(x - 3)}{x^2 - 9}$.
> 6. $x$ is a term of the sum $x + 5$, not a factor; nothing cancels.
