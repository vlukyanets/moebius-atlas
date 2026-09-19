---
title: "[S] Properties of the Arithmetic Square Root"
tag: THM
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-16-lesson-16-identity-sqrt-a-squared-and-equation-x-squared-equals-a]
---

## Why It Matters

$\sqrt{50}$ is $\sqrt{25 \cdot 2} = 5\sqrt{2}$. $\sqrt{\frac{9}{16}} =
\frac{3}{4}$. $\sqrt{16 \cdot 81} = 4 \cdot 9$. Roots of products and
quotients split into products and quotients of roots - and that's what
lets you simplify $\sqrt{72}$, compare $\sqrt{50}$ with $7$, and, in
geometry, handle every length the Pythagorean theorem produces. Two
rules, and one warning about sums.

## The Big Idea

Why does $\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$? Because $\sqrt{a}\sqrt{b}$ is
non-negative and its square is $(\sqrt{a})^2 (\sqrt{b})^2 = ab$ - so it's
*the* non-negative number squaring to $ab$, which is $\sqrt{ab}$ by
definition. Same argument for quotients. The root of a power $a^{2k}$
is $a^k$ (for $a \geq 0$), since $(a^k)^2 = a^{2k}$.

The warning: there's no such rule for sums. $\sqrt{9 + 16} = \sqrt{25} =
5$, while $\sqrt{9} + \sqrt{16} = 7$. Roots split over $\cdot$ and $:$, never
over $+$ or $-$.

Simplifying $\sqrt{72}$: pull out the largest perfect square factor,
$72 = 36 \cdot 2$, so $\sqrt{72} = 6\sqrt{2}$. That's "taking a factor out
from under the root."

## The Rule

For $a \geq 0$, $b \geq 0$:

$$
\sqrt{ab} = \sqrt{a} \cdot \sqrt{b} \qquad \text{(root of a product)}
$$

For $a \geq 0$, $b > 0$:

$$
\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \qquad \text{(root of a quotient)}
$$

For $a \geq 0$ and natural $k$:

$$
\sqrt{a^{2k}} = a^k
$$

**Not** valid: $\sqrt{a + b} = \sqrt{a} + \sqrt{b}$ - false in general.

Read backwards, the rules combine roots: $\sqrt{a}\sqrt{b} = \sqrt{ab}$.
Comparing roots: for non-negative numbers, the larger number has the
larger root, so compare $5\sqrt{2}$ with $7$ by squaring both: $50$ vs
$49$.

## Worked Example

Compute $\sqrt{16 \cdot 81}$ and $\sqrt{\frac{49}{100}}$; simplify $\sqrt{72}$
and $\sqrt{12} \cdot \sqrt{3}$; compare $5\sqrt{2}$ and $7$; find $\sqrt{a^6}$
for $a \geq 0$.

- **$\sqrt{16 \cdot 81} = 4 \cdot 9 = 36$.** **$\sqrt{\frac{49}{100}} =
  \frac{7}{10}$.**
- **$\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$.**
- **$\sqrt{12} \cdot \sqrt{3} = \sqrt{36} = 6$** - combining first is easier
  than simplifying each.
- **$5\sqrt{2}$ vs $7$:** $(5\sqrt{2})^2 = 50$, $7^2 = 49$; $50 > 49$, so
  $5\sqrt{2} > 7$.
- **$\sqrt{a^6} = a^3$.**

A check on the warning: $\sqrt{9 + 16} = 5 \neq 3 + 4$.

## Common Mistake

Splitting a root over a sum: $\sqrt{x^2 + 9} = x + 3$. Try $x = 4$: left
$\sqrt{25} = 5$, right $7$. The identity doesn't exist. The other slip
is applying $\sqrt{ab} = \sqrt{a}\sqrt{b}$ to negative $a$ and $b$: $\sqrt{(-4)
(-9)} = \sqrt{36} = 6$, but $\sqrt{-4}$ and $\sqrt{-9}$ don't exist - the
rule needs non-negative factors.

## The Takeaway

Roots split over products and quotients of non-negative numbers, and
$\sqrt{a^{2k}} = a^k$; they never split over sums. Simplify a root by
pulling out the largest perfect square, and compare roots by
comparing what's under them.

## Check Yourself

1. Compute $\sqrt{25 \cdot 36}$ and $\sqrt{\frac{81}{4}}$.
2. Simplify $\sqrt{48}$ and $\sqrt{200}$.
3. Compute $\sqrt{8} \cdot \sqrt{2}$ and $\frac{\sqrt{75}}{\sqrt{3}}$.
4. Compare $3\sqrt{5}$ and $\sqrt{50}$.
5. Simplify $\sqrt{16b^4}$ for $b \geq 0$.
6. Someone writes $\sqrt{a^2 + b^2} = a + b$. Show it's wrong with $a = b
   = 1$.

> [!spoiler] Answers
>
> 1. $30$; $\frac{9}{2}$.
> 2. $4\sqrt{3}$; $10\sqrt{2}$.
> 3. $4$; $5$.
> 4. $(3\sqrt{5})^2 = 45 < 50$, so $3\sqrt{5} < \sqrt{50}$.
> 5. $4b^2$.
> 6. $\sqrt{1 + 1} = \sqrt{2} \approx 1.41 \neq 2$.
