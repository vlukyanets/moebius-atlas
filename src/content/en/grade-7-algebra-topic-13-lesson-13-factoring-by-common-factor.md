---
title: "[S] Factoring a Polynomial by Taking Out a Common Factor"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-12-lesson-12-multiplying-a-monomial-by-a-polynomial]
---

## Why It Matters

$x^2 - 5x = 0$ - how do you solve that? Not by the linear routine; the
$x^2$ won't go away. But write the left side as $x(x - 5)$ and it's
obvious: a product is zero when one of the factors is, so $x = 0$ or
$x = 5$. Turning a sum into a product is called factoring, and it's the
tool that solves equations the linear method can't touch, cancels
fractions, and computes things like $17 \cdot 23 + 17 \cdot 77$ in your
head.

## The Big Idea

Multiplying a monomial by a polynomial spread a factor across the
terms: $3x(2x + 5) = 6x^2 + 15x$. Factoring runs the film backwards.
Look at $6x^2 + 15x$: both terms contain $3$, and both contain $x$. Pull
$3x$ out and see what each term leaves behind - $2x$ from the first, $5$
from the second: $3x(2x + 5)$. The common factor is the biggest thing
both terms share: the GCD of the coefficients, and each variable to the
*smallest* power it has in any term.

## The Rule

To **factor** a polynomial is to write it as a product of polynomials.

**Taking out a common factor:** if every term of a polynomial has a
common factor, write that factor outside brackets and, inside, each
term divided by it - the distributive property in reverse:

$$
ab + ac - ad = a(b + c - d)
$$

$$
6x^2 + 15x = 3x(2x + 5), \qquad 4a^3b - 6a^2b^2 = 2a^2b(2a - 3b)
$$

Take out as much as possible: the GCD of the coefficients, and each
variable to the lowest exponent it has. Check by multiplying back.

If the leading coefficient is negative, it's often tidy to take out
$-1$ as well: $-x^2 + 3x = -x(x - 3)$.

## Worked Example

Factor $12a^3b^2 - 18a^2b^3 + 6a^2b$; then solve $x^2 - 5x = 0$; then
compute $17 \cdot 23 + 17 \cdot 77$.

- **Coefficients** $12$, $18$, $6$: GCD $6$. **$a$:** lowest power $a^2$.
  **$b$:** lowest power $b$. Common factor $6a^2b$.
- **Divide each term by it:** $2ab$, $-3b^2$, $1$. Result: $6a^2b(2ab -
  3b^2 + 1)$. Check the last term - dividing $6a^2b$ by itself leaves $1$,
  not nothing.
- **Solve.** $x(x - 5) = 0$. A product is zero only if a factor is:
  $x = 0$ or $x - 5 = 0$. Roots $0$ and $5$.
- **Compute.** $17(23 + 77) = 17 \cdot 100 = 1700$.

## Common Mistake

Losing the $1$. $6a^2b + 12a^2b^2 = 6a^2b(2b)$ leaves out the first term
entirely - it should be $6a^2b(1 + 2b)$. When a term *is* the common
factor, dividing leaves $1$, and the $1$ must be written. Multiplying
back catches it: $6a^2b \cdot 2b$ has only one term, the original had
two.

## The Takeaway

Factoring writes a sum as a product. Take out the largest common
factor - GCD of the coefficients, lowest power of each variable - and
keep what each term leaves, a $1$ included. Multiply back to check, and
use it to solve equations whose left side becomes a product.

## Check Yourself

1. Factor $5x + 10y$.
2. Factor $a^2 - a$.
3. Factor $8m^2n - 12mn^2$.
4. Factor $-3x^2 - 6x$ with a negative common factor.
5. Solve $2x^2 + 8x = 0$.
6. Someone factors $4x^2 + 4x$ as $4x(x)$. What's missing?

> [!spoiler] Answers
>
> 1. $5(x + 2y)$.
> 2. $a(a - 1)$.
> 3. $4mn(2m - 3n)$.
> 4. $-3x(x + 2)$.
> 5. $2x(x + 4) = 0$: $x = 0$ or $x = -4$.
> 6. The $+1$: $4x(x + 1)$.
