---
title: "[S] Quadratic Equations"
tag: DEF
track: school
grade: 8
subject: algebra
requires: [grade-7-algebra-topic-2-lesson-2-linear-equation-in-one-variable, grade-8-algebra-topic-16-lesson-16-identity-sqrt-a-squared-and-equation-x-squared-equals-a, grade-7-algebra-topic-21-lesson-21-combined-factoring-methods]
---

## Why It Matters

A ball thrown upward is at height $h = 20t - 5t^2$; when does it hit
the ground? A rectangle's area is $48$ and its length is $2$ more than
its width - what are the sides? Both lead to an equation with an $x^2$
in it. Linear equations covered everything that changes steadily;
quadratic equations cover everything that turns around - and their
theory, which starts here, is the centrepiece of the year.

## The Big Idea

A quadratic equation is $ax^2 + bx + c = 0$ with $a \neq 0$ - the
highest power is a square. Three coefficients, and the whole game is
about them. When one of $b$ or $c$ is zero the equation is incomplete
and you already have the tools: with $c = 0$, factor out $x$ and use
"a product is zero"; with $b = 0$, it's $x^2 = $ number, solved by roots.
When all three are present, a general formula is needed - that's the
next topic. This one names the parts and clears the easy cases.

## The Rule

A **quadratic equation** is an equation of the form

$$
ax^2 + bx + c = 0, \qquad a \neq 0
$$

with $a$ the **leading coefficient**, $b$ the **second coefficient**, $c$
the **constant term**. If $a = 1$ it's a **reduced** (monic) quadratic.

It's **incomplete** if $b = 0$ or $c = 0$ (or both):

- $ax^2 = 0$: the single root $x = 0$;
- $ax^2 + bx = 0$: factor, $x(ax + b) = 0$, so $x = 0$ or $x = -\frac{b}{a}$;
- $ax^2 + c = 0$: $x^2 = -\frac{c}{a}$; two roots $\pm\sqrt{-\frac{c}{a}}$ if
  $-\frac{c}{a} > 0$, none if it's negative.

A quadratic equation has at most two roots.

## Worked Example

Name the coefficients of $3x^2 - 5x + 2 = 0$ and $x^2 - 7 = 0$; solve
$2x^2 + 6x = 0$, $x^2 - 9 = 0$, $4x^2 + 1 = 0$ and $5x^2 = 0$; then the
ball.

- **Coefficients:** $a = 3$, $b = -5$, $c = 2$; and $a = 1$, $b = 0$, $c =
  -7$ (incomplete, reduced).
- **$2x^2 + 6x = 0$:** $2x(x + 3) = 0$, so $x = 0$ or $x = -3$.
- **$x^2 - 9 = 0$:** $x^2 = 9$, $x = \pm 3$. (Or $(x - 3)(x + 3) = 0$.)
- **$4x^2 + 1 = 0$:** $x^2 = -\frac{1}{4}$ - no roots.
- **$5x^2 = 0$:** $x = 0$.
- **Ball:** $20t - 5t^2 = 0$, $5t(4 - t) = 0$, $t = 0$ (launch) or $t = 4$
  seconds (landing).

## Common Mistake

Dividing $ax^2 + bx = 0$ by $x$ and losing the root $x = 0$. $2x^2 + 6x =
0$ divided by $x$ gives $2x + 6 = 0$, $x = -3$ - but $x = 0$ also works,
and dividing by $x$ silently assumed it didn't. Factor instead:
$x(2x + 6) = 0$ keeps both. And with $ax^2 + c = 0$, don't forget the
negative root: $x^2 = 9$ has two solutions.

## The Takeaway

$ax^2 + bx + c = 0$ with $a \neq 0$: leading coefficient, second
coefficient, constant term. Incomplete ones are solved by factoring
out $x$ or by taking square roots - never by dividing by $x$ - and
every quadratic has at most two roots.

## Check Yourself

1. Name $a$, $b$, $c$ in $-x^2 + 4x - 1 = 0$. Is it reduced?
2. Solve $x^2 - 5x = 0$.
3. Solve $3x^2 - 27 = 0$.
4. Solve $x^2 + 16 = 0$.
5. Solve $7x^2 = 14x$.
6. Someone solves $x^2 = 4x$ by dividing by $x$ and answers $x = 4$.
   What's missing?

> [!spoiler] Answers
>
> 1. $a = -1$, $b = 4$, $c = -1$; not reduced ($a \neq 1$).
> 2. $x(x - 5) = 0$: $x = 0$ or $x = 5$.
> 3. $x^2 = 9$: $x = \pm 3$.
> 4. No roots.
> 5. $7x^2 - 14x = 0$, $7x(x - 2) = 0$: $x = 0$ or $x = 2$.
> 6. The root $x = 0$; factor as $x(x - 4) = 0$.
