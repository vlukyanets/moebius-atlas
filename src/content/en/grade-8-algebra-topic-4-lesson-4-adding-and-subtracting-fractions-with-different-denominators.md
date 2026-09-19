---
title: "[S] Adding and Subtracting Fractions with Different Denominators"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-3-lesson-3-adding-and-subtracting-fractions-with-the-same-denominator]
---

## Why It Matters

Two pipes fill a tank: one in $x$ hours, the other in $x + 2$ hours.
Together, per hour, they do $\frac{1}{x} + \frac{1}{x + 2}$ of the job -
and to go further you must add those. Different denominators are the
normal case, and the method is the grade-6 one: find a common
denominator, rewrite, add. With polynomials, the common denominator
is found by factoring, and it's the step that decides whether the
rest is easy or a mess.

## The Big Idea

A common denominator is a polynomial that each denominator divides.
The product of the denominators always works, but it's often bigger
than needed; the *least* common denominator is built like an LCM:
factor each denominator, take every distinct factor to its highest
power. Then each fraction is multiplied top and bottom by whatever
its denominator is missing - the additional factor - and the numerators
are combined as in the same-denominator case.

The pipes: $\frac{1}{x} + \frac{1}{x + 2}$ has denominators with nothing
in common, so the LCD is $x(x + 2)$, and the sum is $\frac{x + 2 + x}{x(x +
2)} = \frac{2x + 2}{x(x + 2)}$.

## The Rule

To add or subtract fractions with different denominators:

1. **factor** each denominator;
2. find the **least common denominator** - the product of all distinct
   factors, each to the highest power it has in any denominator;
3. find each fraction's **additional factor** - the LCD divided by its
   denominator - and multiply numerator and denominator by it;
4. **combine** the numerators over the LCD, with brackets around any
   subtracted numerator;
5. **simplify** the numerator, factor it, cancel if possible.

Opposite denominators ($x - a$ and $a - x$) are made equal first by a
sign change.

## Worked Example

Simplify $\frac{3}{x - 2} - \frac{2}{x + 2}$, then $\frac{x}{x^2 - 4} +
\frac{1}{x + 2}$, then $\frac{1}{x} + \frac{1}{x + 2}$.

- **First.** Denominators don't factor further and share nothing: LCD
  $(x - 2)(x + 2)$. Additional factors $x + 2$ and $x - 2$. Numerator:
  $3(x + 2) - 2(x - 2) = 3x + 6 - 2x + 4 = x + 10$. Result $\frac{x +
  10}{(x - 2)(x + 2)}$.
- **Second.** $x^2 - 4 = (x - 2)(x + 2)$ - that's already the LCD. The
  second fraction needs $x - 2$: $\frac{x + (x - 2)}{(x - 2)(x + 2)} =
  \frac{2x - 2}{(x - 2)(x + 2)} = \frac{2(x - 1)}{(x - 2)(x + 2)}$.
- **Third (the pipes).** $\frac{(x + 2) + x}{x(x + 2)} = \frac{2x + 2}{x(x +
  2)} = \frac{2(x + 1)}{x(x + 2)}$.

With a whole expression: $x - \frac{x^2}{x + 1} = \frac{x(x + 1) - x^2}{x +
1} = \frac{x}{x + 1}$.

## Common Mistake

Multiplying only the denominator by the additional factor. Rewriting
$\frac{3}{x - 2}$ as $\frac{3}{(x - 2)(x + 2)}$ changes its value; the
numerator must be multiplied too: $\frac{3(x + 2)}{(x - 2)(x + 2)}$.
Second: using the product of the denominators when one is a factor of
the other - $\frac{x}{x^2 - 4} + \frac{1}{x + 2}$ doesn't need $(x^2 - 4)(x +
2)$; the LCD is $x^2 - 4$ itself. Factor before you choose.

## The Takeaway

Factor the denominators, build the least common denominator from
every distinct factor at its highest power, multiply each fraction
top and bottom by what it's missing, combine the numerators with
brackets, simplify, cancel. The LCD step is where the work is.

## Check Yourself

1. Find $\frac{1}{x} + \frac{1}{y}$.
2. Find $\frac{2}{a + 1} - \frac{1}{a - 1}$.
3. Find $\frac{x}{x - 3} - \frac{6}{x^2 - 9}$.
4. Find $\frac{1}{2x} + \frac{1}{3x^2}$.
5. Find $1 + \frac{a}{a - 1}$.
6. Someone adds $\frac{1}{x} + \frac{1}{x + 1}$ and gets $\frac{2}{x(x +
   1)}$. What's the right numerator?

> [!spoiler] Answers
>
> 1. $\frac{x + y}{xy}$.
> 2. $\frac{2(a - 1) - (a + 1)}{(a + 1)(a - 1)} = \frac{a - 3}{a^2 - 1}$.
> 3. $\frac{x(x + 3) - 6}{(x - 3)(x + 3)} = \frac{x^2 + 3x - 6}{x^2 - 9}$.
> 4. LCD $6x^2$: $\frac{3x + 2}{6x^2}$.
> 5. $\frac{a - 1 + a}{a - 1} = \frac{2a - 1}{a - 1}$.
> 6. $(x + 1) + x = 2x + 1$; the sum is $\frac{2x + 1}{x(x + 1)}$.
