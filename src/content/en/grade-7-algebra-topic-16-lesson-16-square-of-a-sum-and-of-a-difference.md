---
title: "[S] Square of a Sum and Square of a Difference"
tag: THM
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-14-lesson-14-multiplying-polynomials]
---

## Why It Matters

$(x + 3)^2$ comes up so often - in equations, areas, physics formulas -
that multiplying it out every time is a waste. There's a pattern: the
answer is always the first squared, plus twice the product, plus the
second squared. Learn the pattern and $(x + 3)^2 = x^2 + 6x + 9$ takes
one second. And it's not just algebra: $31^2 = (30 + 1)^2 = 900 + 60 + 1
= 961$, in your head.

## The Big Idea

A square with side $a + b$: cut it by the lines where $a$ ends. Four
pieces - a square $a \times a$, a square $b \times b$, and two rectangles
$a \times b$. So $(a + b)^2 = a^2 + 2ab + b^2$. The two rectangles are the
"$2ab$" that everyone forgets, and the picture shows exactly where they
come from.

For a difference, $(a - b)^2$, multiply it out: $(a - b)(a - b) = a^2 - ab -
ab + b^2 = a^2 - 2ab + b^2$. Same shape, minus in the middle. The last
term is $+b^2$ either way - a square is never negative.

## The Rule

**Square of a sum:**

$$
(a + b)^2 = a^2 + 2ab + b^2
$$

**Square of a difference:**

$$
(a - b)^2 = a^2 - 2ab + b^2
$$

In words: the square of the first, plus (or minus) twice the product
of the first and second, plus the square of the second. Both are
identities - true for all $a$ and $b$ - and $a$, $b$ can be any
expressions.

## Worked Example

Expand $(x + 3)^2$, $(2m - 5n)^2$ and $(-a + 4)^2$; then compute $31^2$
and $29^2$ mentally.

- **$(x + 3)^2$.** First squared $x^2$; twice the product $2 \cdot x \cdot 3
  = 6x$; second squared $9$. Result $x^2 + 6x + 9$.
- **$(2m - 5n)^2$.** $(2m)^2 = 4m^2$; $2 \cdot 2m \cdot 5n = 20mn$, with a
  minus; $(5n)^2 = 25n^2$. Result $4m^2 - 20mn + 25n^2$.
- **$(-a + 4)^2$.** This is $(4 - a)^2 = 16 - 8a + a^2$. Or square as is:
  $a^2 - 8a + 16$ - the same.
- **$31^2 = (30 + 1)^2 = 900 + 60 + 1 = 961$.** **$29^2 = (30 - 1)^2 = 900 -
  60 + 1 = 841$.**

Reversing: $x^2 + 10x + 25$ is $(x + 5)^2$ - check: $2 \cdot x \cdot 5 =
10x$. That's the next topic.

## Common Mistake

Dropping the middle term: $(x + 3)^2 = x^2 + 9$. That's the two
rectangles left out of the square - at $x = 1$ it gives $10$ instead of
$16$. A square of a sum has *three* terms. The other trap: $(2m)^2 =
2m^2$ - the coefficient must be squared too, $4m^2$.

## The Takeaway

$(a \pm b)^2 = a^2 \pm 2ab + b^2$: first squared, twice the product with
the sign of the bracket, second squared. Three terms, always; the last
one positive, always.

## Check Yourself

1. Expand $(y + 7)^2$ and $(y - 7)^2$.
2. Expand $(3a + 2b)^2$.
3. Expand $(x - 0.5)^2$.
4. Compute $102^2$ and $98^2$ using the formulas.
5. Simplify $(x + 2)^2 - (x - 2)^2$.
6. Someone expands $(a - b)^2$ as $a^2 - b^2$. What's the right answer?

> [!spoiler] Answers
>
> 1. $y^2 + 14y + 49$; $y^2 - 14y + 49$.
> 2. $9a^2 + 12ab + 4b^2$.
> 3. $x^2 - x + 0.25$.
> 4. $10\,404$; $9604$.
> 5. $x^2 + 4x + 4 - x^2 + 4x - 4 = 8x$.
> 6. $a^2 - 2ab + b^2$ - the middle term is missing and the sign of $b^2$ is
>    wrong.
