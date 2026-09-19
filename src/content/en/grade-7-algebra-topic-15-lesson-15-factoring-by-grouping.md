---
title: "[S] Factoring a Polynomial by Grouping"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-13-lesson-13-factoring-by-common-factor, grade-7-algebra-topic-14-lesson-14-multiplying-polynomials]
---

## Why It Matters

$ax + ay + bx + by$ has no factor common to all four terms - $a$ is in
two of them, $b$ in the other two. Taking out a common factor gets
stuck. Yet this polynomial *is* a product: $(a + b)(x + y)$. Grouping is
the trick that finds it, and it's the first factoring method that
works when the terms don't all share something - which is most of the
time.

## The Big Idea

Multiplying $(a + b)(x + y)$ gave four terms: $ax + ay + bx + by$. To
undo it, notice the terms come in pairs. The first two share $a$:
$a(x + y)$. The last two share $b$: $b(x + y)$. Now there are two
"terms," and *they* share something - the bracket $(x + y)$. Take it out:
$(x + y)(a + b)$. Two rounds of taking out a common factor, the second
round with a whole bracket as the factor.

The art is in choosing the pairs. If the first grouping doesn't leave
matching brackets, try another pairing - or the polynomial may not
factor this way at all.

## The Rule

**Factoring by grouping:**

1. split the terms into groups (usually pairs) so that each group has
   a common factor;
2. take the common factor out of each group;
3. if the brackets that remain are identical, take that bracket out as
   a common factor of the whole expression.

$$
ax + ay + bx + by = a(x + y) + b(x + y) = (x + y)(a + b)
$$

Watch the signs: to get identical brackets you may need to take out a
negative factor, so that $-bx - by = -b(x + y)$.

Check by multiplying back.

## Worked Example

Factor $2x^2 - 6x + xy - 3y$ and $ab - 3b - 2a + 6$; then factor
$x^3 + x^2 + x + 1$.

- **$2x^2 - 6x + xy - 3y$.** Group: $(2x^2 - 6x) + (xy - 3y)$. First pair
  shares $2x$: $2x(x - 3)$. Second shares $y$: $y(x - 3)$. Same bracket -
  take it out: $(x - 3)(2x + y)$.
- **$ab - 3b - 2a + 6$.** Group: $(ab - 3b) + (-2a + 6)$. First: $b(a - 3)$.
  Second: take out $-2$ to match: $-2(a - 3)$. Result $(a - 3)(b - 2)$.
- **$x^3 + x^2 + x + 1$.** $x^2(x + 1) + 1 \cdot (x + 1) = (x + 1)(x^2 + 1)$.

Check the second at $a = 4$, $b = 1$: $4 - 3 - 8 + 6 = -1$; $(1)(-1) = -1$.

## Common Mistake

Getting brackets that *almost* match and forcing it. $ab - 3b - 2a + 6$
grouped as $b(a - 3) + 2(-a + 3)$ gives $(a - 3)$ and $(-a + 3)$ - opposites,
not equals. Take out $-2$ instead of $2$ and they match. And if no
pairing produces matching brackets, don't invent one: a different
grouping, or a different method, is needed.

## The Takeaway

Group terms so each group has a common factor, take it out, and if the
brackets left are identical, take the bracket out too. Adjust the sign
of a factor to make brackets match, and always multiply back.

## Check Yourself

1. Factor $xy + 2x + 3y + 6$.
2. Factor $a^2 - ab + 4a - 4b$.
3. Factor $3m - 3n + mp - np$.
4. Factor $x^2 - xy - 5x + 5y$.
5. Factor $2a^3 - a^2 + 6a - 3$.
6. Someone groups $ab - 3b - 2a + 6$ as $b(a - 3) + 2(-a + 3)$ and stops.
   How should the second group be written?

> [!spoiler] Answers
>
> 1. $(y + 2)(x + 3)$.
> 2. $(a - b)(a + 4)$.
> 3. $(m - n)(3 + p)$.
> 4. $(x - y)(x - 5)$.
> 5. $(2a - 1)(a^2 + 3)$.
> 6. $-2(a - 3)$, so the whole thing is $(a - 3)(b - 2)$.
