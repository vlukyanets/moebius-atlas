---
title: "[S] Adding and Subtracting Fractions with the Same Denominator"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-2-lesson-2-basic-property-of-a-rational-fraction]
---

## Why It Matters

$\frac{2x}{x + 1} + \frac{3}{x + 1}$ - two fractions, one denominator. In
grade 5 you'd add the tops and keep the bottom, and that's still the
rule. What's new is that the tops are polynomials, so "add the tops"
means add polynomials, "subtract" means subtract with the bracket
rule, and the result usually wants cancelling. Same-denominator
addition is the warm-up for the general case, and it's where the sign
mistakes are made.

## The Big Idea

Fractions with the same denominator are counts of the same unit -
"$\frac{2x}{x + 1}$ is $2x$ units of $\frac{1}{x + 1}$, and $\frac{3}{x +
1}$ is $3$ of them," so together they're $2x + 3$ of them. The
denominator names the unit and doesn't change; the numerators combine
as polynomials.

Subtraction is where the bracket rule bites: $\frac{P}{Q} - \frac{R}{Q}
= \frac{P - R}{Q}$, and $P - R$ means the whole of $R$ is subtracted,
every term with its sign flipped. Then look at the result: numerator
and denominator may share a factor.

## The Rule

For fractions with the same denominator:

$$
\frac{P}{Q} + \frac{R}{Q} = \frac{P + R}{Q}, \qquad \frac{P}{Q} - \frac{R}{Q} = \frac{P - R}{Q}
$$

Steps:

1. write the sum or difference of the numerators over the common
   denominator - in brackets when subtracting;
2. expand and collect like terms in the numerator;
3. factor the numerator if possible and cancel with the denominator.

Denominators that are opposites, like $x - 2$ and $2 - x$, are made
equal by changing the sign of one fraction: $\frac{R}{2 - x} =
-\frac{R}{x - 2}$.

## Worked Example

Simplify $\frac{2x}{x + 1} + \frac{3}{x + 1}$, then $\frac{x^2}{x - 3} -
\frac{9}{x - 3}$, then $\frac{a^2}{a - b} - \frac{b^2}{b - a}$.

- **First:** $\frac{2x + 3}{x + 1}$. Nothing cancels.
- **Second:** $\frac{x^2 - 9}{x - 3} = \frac{(x - 3)(x + 3)}{x - 3} = x + 3$,
  for $x \neq 3$.
- **Third:** the denominators are opposites. Rewrite the second:
  $-\frac{b^2}{b - a} = \frac{b^2}{a - b}$. Now $\frac{a^2 + b^2}{a - b}$ -
  and that's it; $a^2 + b^2$ doesn't factor.

With a subtraction of a binomial: $\frac{x^2 + 1}{x} - \frac{x^2 - x}{x}
= \frac{x^2 + 1 - x^2 + x}{x} = \frac{x + 1}{x}$. Note the $-x^2$ *and*
the $+x$.

## Common Mistake

Subtracting only the first term of the second numerator: $\frac{x^2 +
1}{x} - \frac{x^2 - x}{x} = \frac{x^2 + 1 - x^2 - x}{x}$ - wrong; the
$-x$ in the second numerator becomes $+x$ when subtracted. Put the
whole numerator in brackets before removing them: $x^2 + 1 - (x^2 - x)$.
The second trap is cancelling too early - simplify the numerator
first, then factor, then cancel.

## The Takeaway

Same denominator: combine the numerators as polynomials over the
unchanged denominator, brackets around a subtracted numerator, then
factor and cancel. Opposite denominators become equal by flipping a
sign.

## Check Yourself

1. Find $\frac{5a}{a - 2} - \frac{10}{a - 2}$.
2. Find $\frac{x + 4}{3x} + \frac{2x - 4}{3x}$.
3. Find $\frac{y^2}{y + 1} - \frac{1}{y + 1}$.
4. Find $\frac{m^2 - 3m}{m - 1} - \frac{m - 3}{m - 1}$.
5. Find $\frac{x}{x - 5} + \frac{5}{5 - x}$.
6. Someone finds $\frac{a}{a + 1} - \frac{a - 2}{a + 1} = \frac{-2}{a + 1}$.
   What went wrong?

> [!spoiler] Answers
>
> 1. $\frac{5(a - 2)}{a - 2} = 5$.
> 2. $\frac{3x}{3x} = 1$.
> 3. $\frac{(y - 1)(y + 1)}{y + 1} = y - 1$.
> 4. $\frac{m^2 - 4m + 3}{m - 1} = \frac{(m - 1)(m - 3)}{m - 1} = m - 3$.
> 5. $\frac{x - 5}{x - 5} = 1$.
> 6. The subtracted numerator wasn't bracketed: $a - (a - 2) = 2$, so the
>    answer is $\frac{2}{a + 1}$.
