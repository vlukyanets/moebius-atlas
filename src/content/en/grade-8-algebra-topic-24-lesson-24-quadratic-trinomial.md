---
title: "[S] Quadratic Trinomial. Factoring a Quadratic Trinomial"
tag: DEF
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-22-lesson-22-vieta-theorem]
---

## Why It Matters

$\frac{x^2 - 5x + 6}{x^2 - 4}$ can't be cancelled until the top is
factored - and $x^2 - 5x + 6$ isn't a difference of squares or a
perfect square. Grade-7 methods stall. But its roots are $2$ and $3$, and
$x^2 - 5x + 6 = (x - 2)(x - 3)$. Every quadratic trinomial with roots
factors this way, which finishes the factoring toolkit and makes
rational fractions with quadratic parts tractable.

## The Big Idea

Multiply $(x - 2)(x - 3)$: $x^2 - 3x - 2x + 6 = x^2 - 5x + 6$. The roots
went in as the numbers subtracted from $x$, and the middle coefficient
came out as minus their sum, the constant as their product - Vieta
running in reverse. So to factor $ax^2 + bx + c$, find the roots $x_1$,
$x_2$ (by formula or inspection) and write $a(x - x_1)(x - x_2)$.

If there are no roots ($D < 0$), the trinomial doesn't factor into
linear factors at all: it's positive for every $x$ (or negative for
every $x$), never crossing zero. And if $D = 0$, the two factors are the
same - a perfect square.

## The Rule

A **quadratic trinomial** is a polynomial $ax^2 + bx + c$ with $a \neq 0$.
Its **roots** are the roots of the equation $ax^2 + bx + c = 0$.

**Theorem.** If $x_1$, $x_2$ are the roots of $ax^2 + bx + c$, then

$$
ax^2 + bx + c = a(x - x_1)(x - x_2)
$$

If $D = 0$, the single root $x_1$ gives $a(x - x_1)^2$. If $D < 0$, the
trinomial has no roots and cannot be factored into linear factors.

To factor: solve $ax^2 + bx + c = 0$, then write $a(x - x_1)(x - x_2)$ -
keeping the leading coefficient $a$ in front.

## Worked Example

Factor $x^2 - 5x + 6$, $2x^2 + 5x - 3$, $x^2 - 6x + 9$ and $x^2 + x + 1$; then
cancel $\frac{x^2 - 5x + 6}{x^2 - 4}$.

- **$x^2 - 5x + 6$:** roots $2$, $3$ (Vieta): $(x - 2)(x - 3)$.
- **$2x^2 + 5x - 3$:** $D = 25 + 24 = 49$, $x = \frac{-5 \pm 7}{4}$: $\frac{1}{2}$
  and $-3$. So $2(x - \frac{1}{2})(x + 3)$; absorbing the $2$ into the first
  factor, $(2x - 1)(x + 3)$.
- **$x^2 - 6x + 9$:** $D = 0$, root $3$: $(x - 3)^2$.
- **$x^2 + x + 1$:** $D = -3 < 0$: doesn't factor.
- **Cancel:** $\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \frac{x - 3}{x + 2}$, for
  $x \neq \pm 2$.

Check the second by expanding: $(2x - 1)(x + 3) = 2x^2 + 6x - x - 3 = 2x^2 +
5x - 3$.

## Common Mistake

Dropping the leading coefficient. $2x^2 + 5x - 3$ with roots $\frac{1}{2}$
and $-3$ is not $(x - \frac{1}{2})(x + 3)$ - that expands to $x^2 + \ldots$,
half the original. The $a$ must stay: $2(x - \frac{1}{2})(x + 3)$, which
tidies to $(2x - 1)(x + 3)$. Expand your answer once to catch it. And
signs: roots $2$ and $3$ give factors $(x - 2)(x - 3)$, with minuses.

## The Takeaway

A quadratic trinomial with roots $x_1$, $x_2$ is $a(x - x_1)(x - x_2)$:
find the roots, subtract each from $x$, keep $a$ in front. No roots
means no linear factors. This is how quadratics get cancelled in
fractions.

## Check Yourself

1. Factor $x^2 - 7x + 10$.
2. Factor $x^2 + 4x - 21$.
3. Factor $3x^2 - 10x + 3$.
4. Factor $4x^2 - 4x + 1$.
5. Cancel $\frac{x^2 + 3x - 4}{x^2 - 1}$.
6. Someone factors $2x^2 - 8x + 6$ as $(x - 1)(x - 3)$. Expand it to see
   what's wrong, and fix it.

> [!spoiler] Answers
>
> 1. $(x - 2)(x - 5)$.
> 2. $(x + 7)(x - 3)$.
> 3. Roots $3$ and $\frac{1}{3}$: $(x - 3)(3x - 1)$.
> 4. $(2x - 1)^2$.
> 5. $\frac{(x + 4)(x - 1)}{(x - 1)(x + 1)} = \frac{x + 4}{x + 1}$.
> 6. It expands to $x^2 - 4x + 3$, half the original; the answer is $2(x -
>    1)(x - 3)$.
