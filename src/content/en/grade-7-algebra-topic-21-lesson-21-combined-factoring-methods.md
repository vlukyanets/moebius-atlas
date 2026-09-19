---
title: "[S] Applying Several Factoring Methods"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-17-lesson-17-factoring-with-square-formulas, grade-7-algebra-topic-20-lesson-20-sum-and-difference-of-cubes]
---

## Why It Matters

Real polynomials don't announce which method they want. $2x^3 - 8x$
needs a common factor *and then* a difference of squares. $a^2 - b^2 +
a - b$ needs a difference of squares *and then* grouping. Factoring
completely - until nothing can be factored further - is a small
strategy game, and there's an order of moves that almost always wins.

## The Big Idea

The methods you have are four: common factor, grouping, the square
formulas, the cube and difference-of-squares formulas. They combine,
and there's a natural order. Always look for a common factor first -
it's the cheapest move, and it exposes what's underneath. Then count
the terms: two terms suggest a difference of squares or a sum or
difference of cubes; three suggest a perfect square; four or more
suggest grouping. After each step, look at every factor you've
produced and ask whether it factors again.

Stop when every factor is a monomial, a bracket that can't be broken
down, or a sum of squares.

## The Rule

**To factor a polynomial completely:**

1. **Common factor** - take out the largest one, if any.
2. **Count the terms** of what remains:
   - two terms: try $a^2 - b^2$, $a^3 - b^3$, $a^3 + b^3$;
   - three terms: try a perfect square $a^2 \pm 2ab + b^2$;
   - four or more: try grouping.
3. **Check every factor** obtained for further factoring, and repeat.
4. **Multiply back** to verify.

Sometimes a polynomial must be rearranged or a term split before a
method applies; grouping in particular may need a different pairing
than the one written.

## Worked Example

Factor completely $2x^3 - 8x$, $a^2 - b^2 + a - b$ and $x^4 - 2x^2 + 1$.

- **$2x^3 - 8x$.** Common factor $2x$: $2x(x^2 - 4)$. Two terms inside, a
  difference of squares: $2x(x - 2)(x + 2)$. Nothing factors further.
- **$a^2 - b^2 + a - b$.** No common factor. Four terms - group:
  $(a^2 - b^2) + (a - b)$. The first pair is a difference of squares,
  $(a - b)(a + b)$; the second is $(a - b) \cdot 1$. Common bracket:
  $(a - b)(a + b + 1)$.
- **$x^4 - 2x^2 + 1$.** Three terms, a perfect square: $(x^2 - 1)^2$. But
  $x^2 - 1$ is a difference of squares: $((x - 1)(x + 1))^2 = (x - 1)^2(x +
  1)^2$.

Solve $2x^3 - 8x = 0$: $2x(x - 2)(x + 2) = 0$, roots $0$, $2$, $-2$.

## Common Mistake

Stopping too early. $2x^3 - 8x = 2x(x^2 - 4)$ is factored, but not
completely - the bracket still splits. And $x^4 - 1 = (x^2 - 1)(x^2 + 1)$
is only halfway: $x^2 - 1$ goes on to $(x - 1)(x + 1)$. After every step,
re-examine each factor as if it were a fresh problem. Only a sum of
squares, a monomial, or a bracket no method touches is finished.

## The Takeaway

Common factor first, then choose by the number of terms, then look at
each factor again. Factoring is complete when no factor can be broken
down further - and a product check confirms nothing was lost.

## Check Yourself

1. Factor completely $3a^2 - 27$.
2. Factor completely $x^3 - x^2 - 4x + 4$.
3. Factor completely $5y^3 + 10y^2 + 5y$.
4. Factor completely $a^4 - 81$.
5. Factor completely $x^3 - 9x + x^2 - 9$.
6. Someone factors $4m^2 - 16$ as $(2m - 4)(2m + 4)$ and stops. Finish
   it.

> [!spoiler] Answers
>
> 1. $3(a - 3)(a + 3)$.
> 2. $x^2(x - 1) - 4(x - 1) = (x - 1)(x - 2)(x + 2)$.
> 3. $5y(y + 1)^2$.
> 4. $(a - 3)(a + 3)(a^2 + 9)$.
> 5. $x(x^2 - 9) + (x^2 - 9) = (x + 1)(x - 3)(x + 3)$.
> 6. Each bracket has a common factor $2$: $4(m - 2)(m + 2)$.
