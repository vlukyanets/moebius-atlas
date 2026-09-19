---
title: "[S] Factoring a Difference of Squares"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-18-lesson-18-difference-of-squares, grade-7-algebra-topic-13-lesson-13-factoring-by-common-factor]
---

## Why It Matters

$x^2 - 49 = 0$. Two terms, no common factor, not a perfect square - the
methods so far are stuck. But $x^2 - 49$ is $x^2 - 7^2$, a difference of
two squares, and the last topic says exactly what that is:
$(x - 7)(x + 7)$. Now the equation is a product equal to zero, with
roots $7$ and $-7$. Any subtraction of two squares factors this way -
the single most used factoring pattern there is.

## The Big Idea

The identity $(a - b)(a + b) = a^2 - b^2$ read from right to left: a
difference of squares is a difference times a sum. So when you see
"something squared minus something squared," write the two square
roots and put them in two brackets, one with minus, one with plus.
The "somethings" can be anything - numbers, monomials, whole brackets.

The sign matters. $a^2 - b^2$ factors; $a^2 + b^2$, a *sum* of squares,
does not - there's no pair of brackets whose product it is.

## The Rule

**A difference of squares factors as the product of the difference
and the sum of the bases:**

$$
a^2 - b^2 = (a - b)(a + b)
$$

To use it:

1. write each term as a square - find $a$ and $b$;
2. write $(a - b)(a + b)$.

Take out a common factor first if there is one; a difference of
squares often appears only after that. And check whether a resulting
bracket is itself a difference of squares - it can be factored again.

A sum of squares $a^2 + b^2$ **does not factor** over the numbers you
know.

## Worked Example

Factor $x^2 - 49$, $25m^2 - 16n^2$, $3a^2 - 12$ and $y^4 - 1$; then solve
$4x^2 = 9$.

- **$x^2 - 49 = x^2 - 7^2 = (x - 7)(x + 7)$.**
- **$25m^2 - 16n^2 = (5m)^2 - (4n)^2 = (5m - 4n)(5m + 4n)$.**
- **$3a^2 - 12$.** Common factor first: $3(a^2 - 4) = 3(a - 2)(a + 2)$.
- **$y^4 - 1 = (y^2)^2 - 1^2 = (y^2 - 1)(y^2 + 1)$.** The first bracket is
  again a difference of squares: $(y - 1)(y + 1)(y^2 + 1)$. The last
  bracket, a sum of squares, stays.
- **Solve.** $4x^2 - 9 = 0$, $(2x - 3)(2x + 3) = 0$, so $x = 1.5$ or $x =
  -1.5$.

Mental arithmetic: $63^2 - 37^2 = (63 - 37)(63 + 37) = 26 \cdot 100 = 2600$.

## Common Mistake

Factoring a sum of squares: $x^2 + 49 = (x + 7)(x + 7)$ - but that
expands to $x^2 + 14x + 49$. Or $x^2 + 49 = (x - 7)(x + 7)$ - that's
$x^2 - 49$. A sum of squares has no such factoring; leave it. And the
sign inside: $x^2 - 49$ needs one minus bracket and one plus bracket,
never two of the same.

## The Takeaway

Square minus square is (base minus base)(base plus base). Take out a
common factor first, look for a further difference of squares in the
result, and never try to factor a sum of squares.

## Check Yourself

1. Factor $a^2 - 81$.
2. Factor $9x^2 - y^2$.
3. Factor $50 - 2b^2$.
4. Factor $m^4 - 16$ completely.
5. Solve $x^2 - 121 = 0$.
6. Someone factors $p^2 + 25$ as $(p + 5)(p - 5)$. What's wrong?

> [!spoiler] Answers
>
> 1. $(a - 9)(a + 9)$.
> 2. $(3x - y)(3x + y)$.
> 3. $2(5 - b)(5 + b)$.
> 4. $(m - 2)(m + 2)(m^2 + 4)$.
> 5. $(x - 11)(x + 11) = 0$: $x = 11$ or $x = -11$.
> 6. $(p + 5)(p - 5) = p^2 - 25$; a sum of squares doesn't factor.
