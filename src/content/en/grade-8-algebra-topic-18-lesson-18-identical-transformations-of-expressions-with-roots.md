---
title: "[S] Identical Transformations of Expressions with Square Roots"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-17-lesson-17-properties-of-the-arithmetic-square-root, grade-8-algebra-topic-7-lesson-7-identical-transformations-of-rational-expressions]
---

## Why It Matters

$\sqrt{50} + \sqrt{18} - \sqrt{8}$ looks like three unrelated numbers. It's
$4\sqrt{2}$. And $\frac{1}{\sqrt{2}}$, which a calculator hates, is
$\frac{\sqrt{2}}{2}$, which it doesn't. Expressions with roots can be
simplified, combined and cleaned exactly as expressions with letters,
because $\sqrt{2}$ behaves like a letter whose square happens to be
known. This topic is the toolkit: pulling factors out, pushing them
in, collecting like roots, and clearing roots from denominators.

## The Big Idea

Treat $\sqrt{2}$ as you'd treat $x$. Then $5\sqrt{2} + 3\sqrt{2} - 2\sqrt{2}$
is $6\sqrt{2}$ by collecting like terms - and $\sqrt{50} + \sqrt{18} -
\sqrt{8}$ is the same sum once each root is simplified to a multiple of
$\sqrt{2}$. Products expand by the usual rules, with $(\sqrt{2})^2$
replaced by $2$ wherever it appears; the short multiplication formulas
work, and $(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b}) = a - b$ is the one to
memorise.

That last formula is the key to denominators. A root downstairs is
removed by multiplying top and bottom by something that squares it
away: by the root itself, or by the *conjugate* $\sqrt{a} \mp \sqrt{b}$ of
a two-term denominator.

## The Rule

**Taking a factor out from under the root:** $\sqrt{a^2 b} = a\sqrt{b}$
for $a \geq 0$, $b \geq 0$. **Putting a factor under the root:** $a\sqrt{b} =
\sqrt{a^2 b}$ for $a \geq 0$ (for $a < 0$, $a\sqrt{b} = -\sqrt{a^2 b}$).

**Like radicals** - the same root with different coefficients - are
collected: $m\sqrt{a} + n\sqrt{a} = (m + n)\sqrt{a}$.

**Products** expand as with polynomials, using $(\sqrt{a})^2 = a$ and
$\sqrt{a}\sqrt{b} = \sqrt{ab}$; in particular

$$
(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b}) = a - b
$$

**Rationalising a denominator:** multiply numerator and denominator
by the root ($\frac{1}{\sqrt{a}} = \frac{\sqrt{a}}{a}$) or by the conjugate
($\frac{1}{\sqrt{a} + \sqrt{b}} = \frac{\sqrt{a} - \sqrt{b}}{a - b}$).

## Worked Example

Simplify $\sqrt{50} + \sqrt{18} - \sqrt{8}$; expand $(\sqrt{3} + 1)^2$ and
$(2\sqrt{5} - 3)(2\sqrt{5} + 3)$; rationalise $\frac{6}{\sqrt{3}}$ and
$\frac{1}{\sqrt{5} - 2}$.

- **Sum.** $\sqrt{50} = 5\sqrt{2}$, $\sqrt{18} = 3\sqrt{2}$, $\sqrt{8} =
  2\sqrt{2}$. Collect: $(5 + 3 - 2)\sqrt{2} = 6\sqrt{2}$.
- **$(\sqrt{3} + 1)^2 = 3 + 2\sqrt{3} + 1 = 4 + 2\sqrt{3}$.**
- **$(2\sqrt{5} - 3)(2\sqrt{5} + 3) = (2\sqrt{5})^2 - 9 = 20 - 9 = 11$.**
- **$\frac{6}{\sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}$.**
- **$\frac{1}{\sqrt{5} - 2}$:** multiply by the conjugate $\sqrt{5} + 2$:
  $\frac{\sqrt{5} + 2}{5 - 4} = \sqrt{5} + 2$.

Putting a factor in: $3\sqrt{2} = \sqrt{18}$; useful for comparing $3\sqrt{2}$
with $\sqrt{17}$ - it's bigger.

## Common Mistake

Adding unlike roots: $\sqrt{2} + \sqrt{3} = \sqrt{5}$. No - $\sqrt{2} +
\sqrt{3} \approx 3.15$, $\sqrt{5} \approx 2.24$. Only *like* radicals
combine, as only like terms do; $\sqrt{2}$ and $\sqrt{3}$ stay separate,
just as $x$ and $y$ would. And when rationalising a two-term
denominator, multiplying by the denominator itself doesn't help - it's
the *conjugate* that makes the difference of squares.

## The Takeaway

A root is a letter with a known square. Simplify each root, collect
like radicals, expand products with $(\sqrt{a})^2 = a$, and clear roots
from denominators by multiplying by the root or by the conjugate.
Unlike roots never combine.

## Check Yourself

1. Simplify $\sqrt{27} + \sqrt{12} - \sqrt{75}$.
2. Expand $(\sqrt{7} - \sqrt{2})^2$.
3. Expand $(\sqrt{6} - 2)(\sqrt{6} + 2)$.
4. Rationalise $\frac{10}{\sqrt{5}}$.
5. Rationalise $\frac{2}{\sqrt{3} + 1}$.
6. Someone simplifies $\sqrt{9} + \sqrt{16}$ to $\sqrt{25}$. What's the
   actual value of each side?

> [!spoiler] Answers
>
> 1. $3\sqrt{3} + 2\sqrt{3} - 5\sqrt{3} = 0$.
> 2. $9 - 2\sqrt{14}$.
> 3. $6 - 4 = 2$.
> 4. $2\sqrt{5}$.
> 5. $\frac{2(\sqrt{3} - 1)}{3 - 1} = \sqrt{3} - 1$.
> 6. Left $3 + 4 = 7$, right $5$; roots don't add under one sign.
