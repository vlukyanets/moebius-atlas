---
title: "[S] Identical Transformations of Rational Expressions"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-4-lesson-4-adding-and-subtracting-fractions-with-different-denominators, grade-8-algebra-topic-6-lesson-6-dividing-fractions]
---

## Why It Matters

Real formulas mix all four operations: $\left(\frac{a}{a - b} -
\frac{a}{a + b}\right) \cdot \frac{a^2 - b^2}{2ab}$. Physics, finance and
later maths hand you such things and expect a single clean fraction
back - or a proof that two ugly expressions are the same. This topic
puts the four operations together into one procedure, and the
procedure is the order of operations you've always used, applied
fraction by fraction.

## The Big Idea

Simplifying a compound expression is just evaluating it, except with
letters: do the brackets first, then multiplications and divisions,
then additions and subtractions, each step by the rule for that
operation on fractions. Every intermediate result is one fraction,
factored and cancelled as far as it goes. The end is a single fraction
in lowest terms - or a polynomial, if the denominator cancels away.

Proving an identity is the same procedure aimed at a target:
transform the left side until it matches the right, or both until
they meet. And every step keeps the domain in view: the final
expression equals the original only where the original was defined.

## The Rule

To **simplify a rational expression**:

1. follow the order of operations - brackets, then $\cdot$ and $:$,
   then $+$ and $-$;
2. carry out each operation by its rule, factoring and cancelling
   after every step;
3. write the result as a single irreducible fraction (or polynomial);
4. note the domain: all values for which every denominator in the
   original, and every divisor, is non-zero.

To **prove an identity** $A = B$: transform $A$ into $B$, or both into
the same expression, by identical transformations; or show $A - B =
0$.

## Worked Example

Simplify $\left(\frac{a}{a - b} - \frac{a}{a + b}\right) \cdot \frac{a^2 -
b^2}{2ab}$.

- **Bracket first.** LCD $(a - b)(a + b)$: $\frac{a(a + b) - a(a - b)}{(a -
  b)(a + b)} = \frac{a^2 + ab - a^2 + ab}{(a - b)(a + b)} = \frac{2ab}{(a -
  b)(a + b)}$.
- **Multiply.** $\frac{2ab}{(a - b)(a + b)} \cdot \frac{(a - b)(a + b)}{2ab}$.
  Everything cancels: $1$.
- **Domain.** $a \neq \pm b$ from the first denominators, and $2ab \neq
  0$ from the last: $a \neq 0$, $b \neq 0$.

So the whole expression equals $1$ wherever it's defined.

Prove $\frac{x}{x - 1} - \frac{1}{x + 1} = \frac{x^2 + 1}{x^2 - 1}$: left
side over $(x - 1)(x + 1)$ is $\frac{x(x + 1) - (x - 1)}{x^2 - 1} =
\frac{x^2 + 1}{x^2 - 1}$. $\square$

## Common Mistake

Breaking the order of operations - multiplying the second fraction
into only one term of the bracket, or adding before dividing. In the
example, distributing $\frac{a^2 - b^2}{2ab}$ over the bracket is legal
but doubles the work; doing the bracket first is the plan. And when
the answer is a constant like $1$, don't forget it's $1$ *on the
domain* - at $a = b$ the original is undefined, not $1$.

## The Takeaway

Order of operations, fraction by fraction: brackets, then multiply and
divide, then add and subtract, cancelling at every step, ending in one
irreducible fraction. Proving an identity is the same journey with a
known destination. The domain travels with the answer.

## Check Yourself

1. Simplify $\left(1 + \frac{1}{x}\right) \cdot \frac{x}{x + 1}$.
2. Simplify $\frac{a}{a + 2} - \frac{4}{a^2 + 2a}$.
3. Simplify $\left(\frac{1}{m} - \frac{1}{n}\right) : \frac{n - m}{mn}$.
4. Prove $\frac{a^2 - b^2}{a} \cdot \frac{1}{a + b} = 1 - \frac{b}{a}$.
5. Simplify $\frac{x^2 - 4}{x^2 + 4x + 4} + \frac{4}{x + 2}$.
6. Someone simplifies the worked example to $1$ and says it equals $1$
   for all $a$, $b$. What's missing?

> [!spoiler] Answers
>
> 1. $\frac{x + 1}{x} \cdot \frac{x}{x + 1} = 1$.
> 2. $\frac{a \cdot a - 4}{a(a + 2)} = \frac{(a - 2)(a + 2)}{a(a + 2)} =
>    \frac{a - 2}{a}$.
> 3. $\frac{n - m}{mn} \cdot \frac{mn}{n - m} = 1$.
> 4. Left: $\frac{(a - b)(a + b)}{a(a + b)} = \frac{a - b}{a} = 1 -
>    \frac{b}{a}$.
> 5. $\frac{x - 2}{x + 2} + \frac{4}{x + 2} = \frac{x + 2}{x + 2} = 1$.
> 6. The domain: $a \neq 0$, $b \neq 0$, $a \neq \pm b$.
