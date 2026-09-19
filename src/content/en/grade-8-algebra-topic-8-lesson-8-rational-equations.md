---
title: "[S] Rational Equations"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-7-lesson-7-identical-transformations-of-rational-expressions, grade-7-algebra-topic-2-lesson-2-linear-equation-in-one-variable]
---

## Why It Matters

A boat does $36$ km downstream and $36$ km back in $5$ hours; the
current is $3$ km/h - how fast is the boat? The equation is $\frac{36}{v +
3} + \frac{36}{v - 3} = 5$: the unknown is in the denominators. Such
equations come from every rate problem - work, speed, flow - and they
are solved by a plan that turns them into polynomial equations, with
one non-negotiable safety check at the end.

## The Big Idea

A fraction is zero exactly when its numerator is zero and its
denominator isn't. So: move everything to one side, combine it into a
single fraction, and the equation becomes "numerator $= 0$, denominator
$\neq 0$." Solve the numerator - a polynomial equation - and throw away
any root that makes the denominator zero.

A shortcut does the same job: multiply both sides by the common
denominator to clear the fractions. But multiplying by an expression
that can be zero may *introduce* roots that weren't there - values at
which the original was undefined. That's why every root must be
checked against the domain.

## The Rule

A **rational equation** is an equation whose sides are rational
expressions; if the variable appears in a denominator, it's a
**fractional** rational equation.

To solve:

1. find the **domain** - the values where every denominator is
   non-zero;
2. **clear the denominators**: multiply both sides by the common
   denominator (or bring everything to one side as a single fraction
   and set its numerator to zero);
3. **solve** the resulting polynomial equation;
4. **discard** any root outside the domain; the rest are the roots of
   the original equation.

An equation may end up with no roots at all if every candidate is
excluded.

## Worked Example

Solve $\frac{x + 2}{x - 1} = \frac{3}{x - 1}$ and $\frac{2}{x} - \frac{3}{x +
1} = \frac{1}{x}$, then set up the boat equation.

- **First.** Domain $x \neq 1$. Multiply by $x - 1$: $x + 2 = 3$, so $x = 1$.
  But $x = 1$ is excluded. **No roots.**
- **Second.** Domain $x \neq 0$, $x \neq -1$. Multiply by $x(x + 1)$: $2(x + 1) -
  3x = x + 1$, so $2x + 2 - 3x = x + 1$, $-x + 2 = x + 1$, $x =
  \frac{1}{2}$. In the domain. **Root $\frac{1}{2}$.**
- **Boat.** $\frac{36}{v + 3} + \frac{36}{v - 3} = 5$, domain $v \neq \pm 3$.
  Multiply by $(v + 3)(v - 3)$: $36(v - 3) + 36(v + 3) = 5(v^2 - 9)$, so
  $72v = 5v^2 - 45$ - a quadratic, $5v^2 - 72v - 45 = 0$. Its positive
  root, found once quadratics are covered, is $v = 15$; check: $\frac{36}
  {18} + \frac{36}{12} = 2 + 3 = 5$.

## Common Mistake

Keeping a root that kills a denominator. In the first example, $x = 1$
solves the cleared equation and fails the original - at $x = 1$ both
sides are undefined, not equal. Clearing denominators can create such
"roots"; the domain check removes them. Write the domain *before*
clearing, and compare every root against it *after*.

## The Takeaway

Find the domain, clear the denominators, solve the polynomial
equation, discard roots outside the domain. The check isn't optional:
multiplying by a variable expression can invent roots, and the domain
is what catches them.

## Check Yourself

1. Solve $\frac{5}{x} = \frac{1}{2}$.
2. Solve $\frac{x}{x - 3} = \frac{3}{x - 3}$.
3. Solve $\frac{1}{x} + \frac{1}{x + 2} = \frac{3}{x(x + 2)}$.
4. Solve $\frac{x + 1}{x - 2} = 2$.
5. Solve $\frac{4}{x - 1} - \frac{1}{x} = 0$.
6. Someone solves $\frac{x}{x - 3} = \frac{3}{x - 3}$ and answers $x = 3$.
   Why is that wrong?

> [!spoiler] Answers
>
> 1. $x = 10$.
> 2. No roots - $x = 3$ is excluded.
> 3. $(x + 2) + x = 3$, $x = \frac{1}{2}$.
> 4. $x + 1 = 2x - 4$, $x = 5$.
> 5. $4x - (x - 1) = 0$, $x = -\frac{1}{3}$.
> 6. At $x = 3$ both denominators are zero; the equation is undefined
>    there, so it has no roots.
