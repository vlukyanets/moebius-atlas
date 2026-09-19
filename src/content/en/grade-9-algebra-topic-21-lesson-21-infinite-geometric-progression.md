---
title: "[S] Infinite Geometric Progression"
tag: THM
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-20-lesson-20-sum-of-a-geometric-progression]
---

## Why It Matters

$0.333\ldots$ is $\frac{1}{3}$ - but why, exactly? Because $0.3 + 0.03 +
0.003 + \dots$, an infinite list of terms, adds up to a finite number.
Achilles catches the tortoise for the same reason: infinitely many
ever-smaller steps make a finite distance. Adding infinitely many
numbers sounds impossible, and for most lists it is - but for a
geometric progression whose terms shrink, the sum is a clean
formula, and it's the first glimpse of a limit.

## The Big Idea

Take $S_n = \frac{b_1(1 - q^n)}{1 - q}$ and let $n$ grow. If $|q| < 1$, the
power $q^n$ gets closer and closer to $0$: $\left(\frac{1}{2}\right)^{10}$ is
about a thousandth, $\left(\frac{1}{2}\right)^{20}$ about a millionth. So
$S_n$ gets closer and closer to $\frac{b_1}{1 - q}$ - never quite
reaching it, but coming within any distance you name. That number is
*called* the sum of the infinite progression. If $|q| \geq 1$ the terms
don't shrink, $S_n$ runs off (or oscillates), and there is no sum.

## The Rule

An **infinite geometric progression** with $|q| < 1$ is called
**infinitely decreasing**. Its **sum** is the number that $S_n$
approaches as $n$ grows without bound:

$$
S = \frac{b_1}{1 - q}, \qquad |q| < 1
$$

For $|q| \geq 1$ the infinite progression has no sum.

**Repeating decimals** are infinite geometric progressions and are
converted to fractions by this formula: $0.\overline{a}$ has $b_1 = 0.a$,
$q = 0.1$.

## Worked Example

Find the sum of $8 + 4 + 2 + 1 + \dots$; of $1 - \frac{1}{3} + \frac{1}{9} -
\dots$. Then convert $0.\overline{7}$ and $0.2\overline{45}$ to fractions.
Then: a ball dropped from $2$ m bounces back to $\frac{3}{4}$ of its height
each time; find the total distance it travels.

- **$8 + 4 + 2 + \dots$:** $b_1 = 8$, $q = \frac{1}{2}$: $S = \frac{8}{1 -
  \frac{1}{2}} = 16$.
- **$1 - \frac{1}{3} + \dots$:** $q = -\frac{1}{3}$, $|q| < 1$: $S = \frac{1}{1 +
  \frac{1}{3}} = \frac{3}{4}$.
- **$0.\overline{7} = 0.7 + 0.07 + \dots$:** $b_1 = 0.7$, $q = 0.1$: $S =
  \frac{0.7}{0.9} = \frac{7}{9}$.
- **$0.2\overline{45} = 0.2 + (0.045 + 0.00045 + \dots)$:** the bracket has
  $b_1 = 0.045$, $q = 0.01$, sum $\frac{0.045}{0.99} = \frac{45}{990} =
  \frac{1}{22}$. Total: $\frac{1}{5} + \frac{1}{22} = \frac{27}{110}$.
- **Ball.** Down $2$; then up and down $2 \cdot \frac{3}{4}$ each, then $2
  \cdot \left(\frac{3}{4}\right)^2$ each way, ... Total $= 2 + 2 \cdot \frac{2 \cdot
  \frac{3}{4}}{1 - \frac{3}{4}} = 2 + 2 \cdot 6 = 14$ m.

Infinitely many bounces, $14$ metres - and it does stop, in finite
time, too.

## Common Mistake

Applying $\frac{b_1}{1 - q}$ when $|q| \geq 1$: "$1 + 2 + 4 + \dots =
\frac{1}{1 - 2} = -1$". The formula is derived assuming $q^n \to 0$, which
fails for $q = 2$; the partial sums $1, 3, 7, 15, \dots$ go to infinity
and there is no sum, let alone a negative one. Always check $|q| < 1$
first. The other slip is in repeating decimals: $0.2\overline{45}$ is
not $0.245 + 0.000245 + \dots$ - the non-repeating part is set aside
first.

## The Takeaway

Terms shrinking by a factor $|q| < 1$ add up to $\frac{b_1}{1 - q}$ - the
value the partial sums approach. No shrinking, no sum. Repeating
decimals are the everyday case: set aside the non-repeating part,
sum the rest.

## Check Yourself

1. Find the sum of $27 + 9 + 3 + \dots$
2. Find the sum of $1 - \frac{1}{2} + \frac{1}{4} - \dots$
3. Convert $0.\overline{4}$ to a fraction.
4. Convert $0.\overline{36}$ to a fraction.
5. Convert $0.1\overline{6}$ to a fraction.
6. Someone claims $3 + 6 + 12 + \dots = \frac{3}{1 - 2} = -3$. What went
   wrong?

> [!spoiler] Answers
>
> 1. $\frac{27}{1 - \frac{1}{3}} = 40.5$.
> 2. $\frac{1}{1 + \frac{1}{2}} = \frac{2}{3}$.
> 3. $\frac{0.4}{0.9} = \frac{4}{9}$.
> 4. $\frac{0.36}{0.99} = \frac{4}{11}$.
> 5. $\frac{1}{10} + \frac{0.06}{0.9} = \frac{1}{10} + \frac{1}{15} = \frac{1}{6}$.
> 6. $q = 2$, not less than $1$ in absolute value: the progression has
>    no sum.
