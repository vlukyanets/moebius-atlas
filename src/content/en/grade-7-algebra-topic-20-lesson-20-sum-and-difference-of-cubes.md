---
title: "[S] Sum and Difference of Cubes"
tag: THM
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-19-lesson-19-factoring-a-difference-of-squares]
---

## Why It Matters

A difference of squares factors; a sum of squares doesn't. What about
cubes? $x^3 - 8$, $a^3 + 27$ - two terms, both cubes. It turns out
*both* factor, sum and difference alike, and the formulas are the last
two of the short-multiplication family. They're less common than the
squares, but when a cube shows up - in a volume, in an equation - they
are the only tool that opens it.

## The Big Idea

Try multiplying $(a - b)$ by $(a^2 + ab + b^2)$. Six products: $a^3 + a^2b +
ab^2 - a^2b - ab^2 - b^3$. The four middle ones cancel in pairs, and
$a^3 - b^3$ is left. So a difference of cubes is $(a - b)$ times a
trinomial that looks *almost* like the square of a sum - except the
middle term is $ab$, not $2ab$. That near-miss trinomial has a name:
the incomplete square of the sum.

The sum of cubes is the mirror image: $(a + b)(a^2 - ab + b^2) = a^3 +
b^3$. The signs alternate - plus in the binomial, minus in the
trinomial.

## The Rule

**Difference of cubes:**

$$
a^3 - b^3 = (a - b)(a^2 + ab + b^2)
$$

**Sum of cubes:**

$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2)
$$

The trinomial $a^2 \pm ab + b^2$ is the **incomplete square** of the sum
or difference - it has $ab$ where the true square has $2ab$, and it does
not factor further.

Pattern to remember: the binomial takes the sign of the original; the
trinomial takes the opposite sign in its middle term; the last term is
always $+b^2$.

## Worked Example

Factor $x^3 - 8$ and $27a^3 + b^3$; expand $(m + 2)(m^2 - 2m + 4)$; then
compute $11^3 - 1$ by the formula.

- **$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$.** Check the middle term:
  $x \cdot 2 = 2x$, plus sign since the original is a difference.
- **$27a^3 + b^3 = (3a)^3 + b^3 = (3a + b)(9a^2 - 3ab + b^2)$.**
- **$(m + 2)(m^2 - 2m + 4)$.** That's the sum-of-cubes pattern with
  $a = m$, $b = 2$: $m^3 + 8$. No need to multiply six products.
- **$11^3 - 1 = (11 - 1)(121 + 11 + 1) = 10 \cdot 133 = 1330$.** Check:
  $1331 - 1 = 1330$.

Solve $x^3 - 8 = 0$: $(x - 2)(x^2 + 2x + 4) = 0$. The trinomial is $(x +
1)^2 + 3$, never zero; so $x = 2$ only.

## Common Mistake

Writing $2ab$ in the trinomial. $a^3 - b^3 = (a - b)(a^2 + 2ab + b^2)$
expands to $a^3 + a^2b - ab^2 - b^3$, not a difference of cubes. The
trinomial is *incomplete* - $ab$, not $2ab$. The other slip is the
sign: for a sum of cubes the trinomial has $-ab$, for a difference,
$+ab$. Multiply back once to be sure.

## The Takeaway

$a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$: a binomial with the
original sign, times the incomplete square with the opposite sign in
the middle. Both sum and difference of cubes factor - unlike squares,
where only the difference does.

## Check Yourself

1. Factor $y^3 - 27$.
2. Factor $x^3 + 1$.
3. Factor $8m^3 - 125n^3$.
4. Expand $(a - 3)(a^2 + 3a + 9)$ without multiplying term by term.
5. Compute $9^3 + 1$ by the formula.
6. Someone factors $x^3 + 8$ as $(x + 2)(x^2 + 2x + 4)$. What's wrong?

> [!spoiler] Answers
>
> 1. $(y - 3)(y^2 + 3y + 9)$.
> 2. $(x + 1)(x^2 - x + 1)$.
> 3. $(2m - 5n)(4m^2 + 10mn + 25n^2)$.
> 4. $a^3 - 27$.
> 5. $(9 + 1)(81 - 9 + 1) = 10 \cdot 73 = 730$.
> 6. The middle sign: for a sum of cubes it's $(x + 2)(x^2 - 2x + 4)$.
