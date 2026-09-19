---
title: "[S] Geometric Progression"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-15-lesson-15-number-sequences, grade-8-algebra-topic-10-lesson-10-properties-of-powers-with-integer-exponents]
---

## Why It Matters

A population that doubles every hour, a bank balance growing by $5\%$
a year, a ball that bounces back to $\frac{2}{3}$ of its previous height,
the legend of the grains of rice on the chessboard - each step
*multiplies* by the same number instead of adding. That's a geometric
progression, the sequence behind growth, decay and compound
interest, and the thing that makes "exponential" a word people use.

## The Big Idea

Start somewhere and keep multiplying by the same number $q$. After $n -
1$ steps you've multiplied by $q$ that many times, so $b_n = b_1 \cdot
q^{n - 1}$ - the same shape as the arithmetic formula, with "times" in
place of "plus" and a power in place of a product. Where an
arithmetic progression climbs steadily, a geometric one with $q > 1$
explodes and one with $0 < q < 1$ dies away; $q < 0$ makes the signs
alternate. And as each member is the *geometric* mean of its
neighbours - $b_n^2 = b_{n - 1} b_{n + 1}$ - the name follows.

## The Rule

A **geometric progression** is a sequence of nonzero numbers in which
each member, from the second on, equals the previous member times
the same number $q \neq 0$, the **common ratio**:

$$
b_{n + 1} = b_n \cdot q
$$

**Formula of the $n$-th member:**

$$
b_n = b_1 \cdot q^{n - 1}
$$

**Characteristic property:** $b_n^2 = b_{n - 1} \cdot b_{n + 1}$ for every $n
\geq 2$ - the square of a member is the product of its neighbours.

The ratio is $q = \frac{b_{n + 1}}{b_n}$; from two members $b_k$ and $b_m$,
$q^{m - k} = \frac{b_m}{b_k}$.

## Worked Example

For $3, 6, 12, \dots$ find $q$ and $b_8$. Then: $b_1 = 81$, $q = \frac{1}{3}$;
find $b_5$. Then: in a geometric progression $b_2 = 6$ and $b_4 = 54$; find
$b_1$ and $q$. Then: insert two numbers between $2$ and $54$ to make a
geometric progression.

- **$q = 2$**, $b_8 = 3 \cdot 2^7 = 384$.
- **$b_5 = 81 \cdot \left(\frac{1}{3}\right)^4 = 81 \cdot \frac{1}{81} = 1$.**
- **From $b_2, b_4$.** $\frac{b_4}{b_2} = q^2 = 9$, so $q = 3$ or $q = -3$. Then
  $b_1 = \frac{b_2}{q} = 2$ or $-2$. Two progressions fit: $2, 6, 18, 54$ and
  $-2, 6, -18, 54$.
- **Inserting.** $b_1 = 2$, $b_4 = 54$: $2q^3 = 54$, $q^3 = 27$, $q = 3$. The
  progression is $2, 6, 18, 54$.

A bouncing ball dropped from $2$ m returning to $\frac{2}{3}$ each time:
heights $2, \frac{4}{3}, \frac{8}{9}, \dots$; the fifth bounce is $2 \cdot
\left(\frac{2}{3}\right)^4 \approx 0.4$ m.

## Common Mistake

Taking only $q = 3$ from $q^2 = 9$. An even power hides the sign - both
$3$ and $-3$ square to $9$, and both give a valid progression. (An odd
power, $q^3 = 27$, fixes $q = 3$ alone.) The other slip is the
exponent: $b_8 = 3 \cdot 2^8$ instead of $2^7$ - member $8$ comes after $7$
multiplications, exactly as member $8$ of an arithmetic progression
comes after $7$ additions.

## The Takeaway

Same factor every time: $b_{n + 1} = b_n q$, so $b_n = b_1 q^{n - 1}$. Each
member squared is the product of its neighbours. From two members,
$q$ is a root - and an even root has two signs.

## Check Yourself

1. Find $q$ and $b_6$ for $5, 10, 20, \dots$
2. Find $b_4$ if $b_1 = 64$ and $q = -\frac{1}{2}$.
3. In a geometric progression $b_3 = 12$ and $b_5 = 48$. Find $q$ and
   $b_1$ (all possibilities).
4. Is $1, 3, 9, 27$ a geometric progression? Is $1, 2, 4, 7$?
5. Find $x$ so that $4$, $x$, $25$ form a geometric progression.
6. Someone finds $b_5$ of $1, 2, 4, \dots$ as $2^5 = 32$. Correct it.

> [!spoiler] Answers
>
> 1. $q = 2$, $b_6 = 160$.
> 2. $64 \cdot \left(-\frac{1}{8}\right) = -8$.
> 3. $q^2 = 4$: $q = 2$, $b_1 = 3$; or $q = -2$, $b_1 = 3$.
> 4. Yes ($q = 3$); no ($\frac{2}{1} \neq \frac{7}{4}$).
> 5. $x^2 = 100$, $x = \pm 10$.
> 6. $b_5 = 1 \cdot 2^4 = 16$.
