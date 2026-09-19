---
title: "[S] Solving Equations Reducible to Quadratic"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-24-lesson-24-quadratic-trinomial, grade-8-algebra-topic-8-lesson-8-rational-equations]
---

## Why It Matters

$x^4 - 5x^2 + 4 = 0$ has a fourth power. $\frac{x}{x - 2} + \frac{6}{x + 2} =
1$ has the unknown downstairs. $(x^2 - 3x)^2 - 2(x^2 - 3x) = 8$ has a
bracket squared. None is a quadratic - and each becomes one with the
right move. Most equations you'll meet from now on aren't quadratic
as written; they're quadratic in disguise, and this topic is about
seeing through the disguise.

## The Big Idea

Two moves cover most cases. **Substitution:** if the equation is
built from one repeated block - $x^2$ in a biquadratic, or a whole
bracket - call the block $t$, solve the quadratic in $t$, then go back
to $x$ for each value of $t$ found. **Clearing denominators:** a
rational equation, multiplied through by the common denominator,
becomes polynomial, and often quadratic; then the domain check from
before decides which roots survive.

The pattern in both: transform to a quadratic, solve it, then
*translate the answer back* - $t = 4$ means $x^2 = 4$, two values of $x$;
$t = -1$ means $x^2 = -1$, none.

## The Rule

**Biquadratic equations** $ax^4 + bx^2 + c = 0$: substitute $t = x^2$
(with $t \geq 0$), solve $at^2 + bt + c = 0$, and for each non-negative
$t$ solve $x^2 = t$.

**Substitution in general:** when an expression $E(x)$ appears twice -
once squared, once plain - set $t = E(x)$, solve for $t$, then solve
$E(x) = t$ for each root.

**Rational equations:** find the domain, multiply by the common
denominator, solve the resulting (often quadratic) equation, discard
roots outside the domain.

**Factoring:** an equation whose one side factors into a product and
whose other side is $0$ splits into simpler equations, one per factor.

## Worked Example

Solve $x^4 - 5x^2 + 4 = 0$, then $(x^2 - 3x)^2 - 2(x^2 - 3x) - 8 = 0$, then
$\frac{x}{x - 2} + \frac{6}{x + 2} = 1$.

- **Biquadratic.** $t = x^2$: $t^2 - 5t + 4 = 0$, $t = 1$ or $t = 4$. Back:
  $x^2 = 1$ gives $x = \pm 1$; $x^2 = 4$ gives $x = \pm 2$. Four roots: $\pm 1$,
  $\pm 2$.
- **Bracket.** $t = x^2 - 3x$: $t^2 - 2t - 8 = 0$, $t = 4$ or $t = -2$. Back:
  $x^2 - 3x = 4$ gives $x^2 - 3x - 4 = 0$, $x = 4$ or $-1$; $x^2 - 3x = -2$
  gives $x^2 - 3x + 2 = 0$, $x = 1$ or $2$. Four roots: $-1, 1, 2, 4$.
- **Rational.** Domain $x \neq \pm 2$. Multiply by $(x - 2)(x + 2)$: $x(x + 2) +
  6(x - 2) = x^2 - 4$, so $x^2 + 2x + 6x - 12 = x^2 - 4$, $8x = 8$, $x =
  1$. In the domain. Root $1$.

A biquadratic with fewer roots: $x^4 + x^2 - 6 = 0$, $t = 2$ or $t = -3$;
only $t = 2$ is usable: $x = \pm\sqrt{2}$.

## Common Mistake

Stopping at $t$. "$t = 1$ or $t = 4$" answers the equation in $t$, not
the one in $x$; the back-substitution is where the four roots appear.
And accepting a negative $t$ for $t = x^2$: $x^2 = -3$ has no solutions,
so that branch dies quietly. For rational equations, the old warning:
a root that zeroes a denominator isn't a root.

## The Takeaway

See the quadratic inside: substitute for a repeated block, clear
denominators, or factor into a product. Solve the quadratic, then
carry every root back to $x$ - discarding negative values of $x^2$ and
anything outside the domain.

## Check Yourself

1. Solve $x^4 - 13x^2 + 36 = 0$.
2. Solve $x^4 - 3x^2 - 4 = 0$.
3. Solve $(x^2 + x)^2 - 8(x^2 + x) + 12 = 0$.
4. Solve $\frac{1}{x} + \frac{1}{x - 1} = \frac{3}{2}$.
5. Solve $x^3 - 4x = 0$ by factoring.
6. Someone solves $x^4 - 5x^2 + 4 = 0$ and answers "$x = 1$ or $x = 4$."
   What went wrong?

> [!spoiler] Answers
>
> 1. $t = 4$ or $9$: $x = \pm 2, \pm 3$.
> 2. $t = 4$ or $-1$: $x = \pm 2$.
> 3. $t = 2$ or $6$: $x^2 + x - 2 = 0$ gives $1, -2$; $x^2 + x - 6 = 0$ gives
>    $2, -3$.
> 4. $2(x - 1) + 2x = 3x(x - 1)$, $3x^2 - 7x + 2 = 0$: $x = 2$ or $\frac{1}{3}$
>    (both in the domain).
> 5. $x(x - 2)(x + 2) = 0$: $0, 2, -2$.
> 6. Those are values of $t = x^2$, not $x$; the roots are $\pm 1$, $\pm 2$.
