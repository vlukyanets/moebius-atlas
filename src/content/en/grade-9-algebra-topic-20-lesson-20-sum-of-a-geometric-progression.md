---
title: "[S] Sum of the First n Terms of a Geometric Progression"
tag: THM
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-18-lesson-18-geometric-progression]
---

## Why It Matters

The inventor of chess, the legend says, asked for one grain of rice
on the first square, two on the second, four on the third, and so on
- and the king agreed, not realising the total was $2^{64} - 1$ grains,
more than the world has ever grown. Adding up a geometric progression
is where that number comes from, and it's also the total of a series
of growing payments, the total distance of a bouncing ball, and the
setup for the infinite sums of the next topic.

## The Big Idea

Let $S = b_1 + b_1 q + b_1 q^2 + \dots + b_1 q^{n - 1}$. Multiply the whole
thing by $q$: every term shifts one place up, $Sq = b_1 q + b_1 q^2 +
\dots + b_1 q^n$. Subtract: almost everything cancels in pairs, leaving
$Sq - S = b_1 q^n - b_1$. So $S(q - 1) = b_1(q^n - 1)$, and dividing gives the
formula. The trick - multiply by $q$ and subtract - is worth
remembering in itself; it works whenever consecutive terms differ by
a constant factor.

## The Rule

**Theorem.** The sum of the first $n$ members of a geometric
progression with ratio $q \neq 1$ is

$$
S_n = \frac{b_1 (q^n - 1)}{q - 1}
$$

or, equivalently, $S_n = \frac{b_1 (1 - q^n)}{1 - q}$ - the same fraction
with both signs flipped, handier when $|q| < 1$.

With the last member: $S_n = \frac{b_n q - b_1}{q - 1}$.

For $q = 1$ all members are equal and $S_n = n b_1$.

## Worked Example

Find the sum of the first $10$ members of $1, 2, 4, \dots$; the sum of the
first $5$ members of $81, 27, 9, \dots$; then: how many members of $2, 6,
18, \dots$ add up to $728$?

- **$1, 2, 4, \dots$:** $b_1 = 1$, $q = 2$, $S_{10} = \frac{2^{10} - 1}{2 - 1} =
  1023$.
- **$81, 27, 9, \dots$:** $q = \frac{1}{3}$; $S_5 = \frac{81 \left(1 -
  \frac{1}{243}\right)}{1 - \frac{1}{3}} = \frac{81 \cdot \frac{242}{243}}{\frac{2}{3}} =
  \frac{242}{3} \cdot \frac{3}{2} = 121$. Check: $81 + 27 + 9 + 3 + 1 = 121$.
- **Sum $728$.** $\frac{2(3^n - 1)}{3 - 1} = 728$, $3^n - 1 = 728$, $3^n = 729 =
  3^6$: $n = 6$.

The chessboard: $b_1 = 1$, $q = 2$, $n = 64$: $2^{64} - 1 \approx 1.8 \cdot
10^{19}$ grains.

## Common Mistake

Using the formula with $q = 1$ - it divides by zero. A progression
with $q = 1$ is constant and the sum is just $n b_1$. The other slip is
the exponent: $S_n$ has $q^n$, the number of members, while $b_n$ has
$q^{n - 1}$. The two formulas look alike and are one off. When in
doubt, test on $n = 1$: $S_1$ must equal $b_1$, and $\frac{b_1(q - 1)}{q -
1}$ does.

## The Takeaway

Multiply the sum by $q$, subtract, cancel: $S_n = \frac{b_1(q^n - 1)}{q -
1}$ for $q \neq 1$, and $n b_1$ for $q = 1$. The exponent is $n$ here and $n -
1$ in the formula for the member.

## Check Yourself

1. Find $S_6$ for $b_1 = 3$, $q = 2$.
2. Find $S_4$ for $b_1 = 2$, $q = -3$.
3. Find $S_5$ for $b_1 = 16$, $q = \frac{1}{2}$.
4. Find the sum $1 + 3 + 9 + \dots + 243$.
5. How many members of $1, 2, 4, \dots$ sum to $255$?
6. Someone finds $S_3$ of $5, 5, 5$ with the formula and gets $\frac{0}{0}$.
   What's the sum?

> [!spoiler] Answers
>
> 1. $3 \cdot 63 = 189$.
> 2. $\frac{2(81 - 1)}{-4} = -40$; check $2 - 6 + 18 - 54 = -40$.
> 3. $\frac{16 \left(1 - \frac{1}{32}\right)}{\frac{1}{2}} = 31$.
> 4. $243 = 3^5$, so $n = 6$: $\frac{3^6 - 1}{2} = 364$.
> 5. $2^n - 1 = 255$, $n = 8$.
> 6. $q = 1$: $S_3 = 3 \cdot 5 = 15$.
