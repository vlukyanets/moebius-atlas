---
title: "[S] Multiplying a Polynomial by a Polynomial"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-12-lesson-12-multiplying-a-monomial-by-a-polynomial]
---

## Why It Matters

A garden $x + 3$ metres by $x + 5$ metres - what's its area as a
polynomial? A price of $p$ hryvnias sells $100 - 2p$ items - what's the
revenue? Both are one bracket times another. This is the last of the
multiplication rules for polynomials, and the one that makes the
famous formulas of the next topics - the square of a sum, the
difference of squares - fall out as special cases.

## The Big Idea

Look at the garden: a rectangle $x + 3$ by $x + 5$. Cut it by the lines
where $x$ ends: four pieces - $x \cdot x$, $x \cdot 5$, $3 \cdot x$, $3 \cdot 5$.
The area is $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$. Every term of the first
bracket met every term of the second, once.

That's the whole rule. Treat the second bracket as a single thing and
distribute the first bracket's terms over it, then distribute again:
$(a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd$. Two terms times
two terms gives four products; two times three gives six. Then collect
like terms.

## The Rule

To multiply a polynomial by a polynomial, multiply **each term** of the
first by **each term** of the second and add all the products:

$$
(a + b)(c + d) = ac + ad + bc + bd
$$

$$
(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15
$$

Signs follow the multiplication rule for each pair. After multiplying,
collect like terms and write in standard form. The number of products
before collecting is the number of terms in one bracket times the
number in the other.

## Worked Example

Expand $(2x - 3)(x^2 - x + 4)$ and $(a - b)(a + b)$; then find the revenue
$p(100 - 2p)$ and solve $(x + 2)(x - 1) = x^2 + 4$.

- **$(2x - 3)(x^2 - x + 4)$.** $2x$ times each: $2x^3 - 2x^2 + 8x$. $-3$
  times each: $-3x^2 + 3x - 12$. Together: $2x^3 - 5x^2 + 11x - 12$.
- **$(a - b)(a + b)$.** $a^2 + ab - ab - b^2 = a^2 - b^2$ - the middle terms
  cancel. Remember this one; it has a topic of its own coming.
- **Revenue.** $100p - 2p^2$ - a monomial times a binomial.
- **Solve.** Expand: $x^2 - x + 2x - 2 = x^2 + 4$, so $x^2 + x - 2 = x^2 +
  4$; the squares cancel: $x = 6$.

Check the first at $x = 1$: $(2 - 3)(1 - 1 + 4) = -4$; and $2 - 5 + 11 - 12
= -4$.

## Common Mistake

Multiplying only the first terms and the last terms - $(x + 3)(x + 5) =
x^2 + 15$ - and missing the cross terms $5x$ and $3x$. In the garden
picture that's counting the two square pieces and forgetting the two
strips. Every term must meet every term: for two binomials, that's
four products, and they're all there before anything cancels.

## The Takeaway

Each term of one polynomial times each term of the other, all added -
$m$ terms times $n$ terms make $mn$ products - then collect. It's the
distributive property applied twice, and the garden of four pieces is
the picture to keep.

## Check Yourself

1. Expand $(x + 2)(x + 7)$.
2. Expand $(3a - 1)(2a + 5)$.
3. Expand $(y - 4)(y^2 + 4y + 16)$.
4. Expand $(m + n)(m - n)$ and $(m + n)(m + n)$.
5. Solve $(x - 3)(x + 3) = x^2 - 2x$.
6. Someone expands $(x - 2)(x - 5)$ as $x^2 + 10$. What's the right
   answer?

> [!spoiler] Answers
>
> 1. $x^2 + 9x + 14$.
> 2. $6a^2 + 13a - 5$.
> 3. $y^3 - 64$.
> 4. $m^2 - n^2$; $m^2 + 2mn + n^2$.
> 5. $x^2 - 9 = x^2 - 2x$, $x = 4.5$.
> 6. $x^2 - 7x + 10$ - the cross terms $-5x$ and $-2x$ were dropped, and
>    $(-2)(-5) = +10$.
