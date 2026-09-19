---
title: "[S] Factoring with the Square Formulas"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-16-lesson-16-square-of-a-sum-and-of-a-difference, grade-7-algebra-topic-15-lesson-15-factoring-by-grouping]
---

## Why It Matters

$x^2 + 10x + 25 = 0$. No common factor, and grouping needs four terms.
But this trinomial is $(x + 5)^2$ in disguise, and $(x + 5)^2 = 0$ has
the obvious root $-5$. The square formulas read backwards are a
factoring method of their own: spot a perfect square, collapse it into
one bracket squared. It also proves things like "$x^2 - 6x + 10$ is
never zero," which will matter a great deal soon.

## The Big Idea

$(a + b)^2 = a^2 + 2ab + b^2$ read from right to left says: a trinomial
that looks like "square, plus twice a product, plus square" is a
bracket squared. So the job is recognition. Given $x^2 + 10x + 25$: the
first term is $x^2$ - a square of $x$; the last is $25$ - a square of $5$;
is the middle twice the product $x \cdot 5$? $2 \cdot x \cdot 5 = 10x$. Yes.
So it's $(x + 5)^2$. The sign of the middle term tells you whether the
bracket has a plus or a minus.

If the middle term doesn't match - $x^2 + 8x + 25$, say - it isn't a
perfect square, and this method doesn't apply.

## The Rule

A trinomial of the form $a^2 + 2ab + b^2$ or $a^2 - 2ab + b^2$ is a
**perfect square trinomial**, and it factors as

$$
a^2 + 2ab + b^2 = (a + b)^2, \qquad a^2 - 2ab + b^2 = (a - b)^2
$$

To recognise one:

1. two of the terms are squares of something - find $a$ and $b$;
2. the remaining term is $\pm 2ab$ - check by multiplying;
3. the sign of that term is the sign inside the bracket.

Often a common factor is taken out first, and the remaining trinomial
is then a perfect square.

## Worked Example

Factor $x^2 + 10x + 25$, $4m^2 - 12mn + 9n^2$ and $3a^2 + 6a + 3$; then
decide whether $x^2 + 8x + 25$ factors this way.

- **$x^2 + 10x + 25$.** Squares: $x^2$ and $5^2$. Middle: $2 \cdot x \cdot 5 =
  10x$, plus. So $(x + 5)^2$.
- **$4m^2 - 12mn + 9n^2$.** Squares: $(2m)^2$ and $(3n)^2$. Middle: $2 \cdot
  2m \cdot 3n = 12mn$, minus. So $(2m - 3n)^2$.
- **$3a^2 + 6a + 3$.** Common factor first: $3(a^2 + 2a + 1)$. Inside:
  $a^2$, $1^2$, middle $2 \cdot a \cdot 1 = 2a$. So $3(a + 1)^2$.
- **$x^2 + 8x + 25$.** Squares of $x$ and $5$, but the middle would have
  to be $10x$, and it's $8x$. Not a perfect square - this method
  doesn't apply.

Solve $x^2 + 10x + 25 = 0$: $(x + 5)^2 = 0$, so $x + 5 = 0$, $x = -5$.

## Common Mistake

Seeing two squares and writing the bracket without checking the middle
term. $x^2 + 8x + 25 = (x + 5)^2$ is false - expand and you get $10x$,
not $8x$. The two squares are only a hint; the middle term is the test.
Also watch the sign: $a^2 - 2ab + b^2$ is $(a - b)^2$, not $(a + b)^2$ - and
$a^2 + 2ab - b^2$ is not a perfect square at all.

## The Takeaway

Find the two squares, work out $2ab$, and if the middle term matches -
sign and all - the trinomial is $(a \pm b)^2$. Take out any common
factor first. If the middle term doesn't match, look for another
method.

## Check Yourself

1. Factor $y^2 + 6y + 9$.
2. Factor $x^2 - 14x + 49$.
3. Factor $25a^2 + 20ab + 4b^2$.
4. Factor $2x^2 - 4x + 2$.
5. Solve $x^2 - 8x + 16 = 0$.
6. Someone factors $x^2 + 4x + 16$ as $(x + 4)^2$. Why is that wrong?

> [!spoiler] Answers
>
> 1. $(y + 3)^2$.
> 2. $(x - 7)^2$.
> 3. $(5a + 2b)^2$.
> 4. $2(x - 1)^2$.
> 5. $(x - 4)^2 = 0$, $x = 4$.
> 6. $(x + 4)^2 = x^2 + 8x + 16$ - the middle term would be $8x$, not $4x$.
