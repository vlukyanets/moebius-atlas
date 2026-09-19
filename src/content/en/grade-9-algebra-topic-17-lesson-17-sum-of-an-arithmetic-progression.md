---
title: "[S] Sum of the First n Terms of an Arithmetic Progression"
tag: THM
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-16-lesson-16-arithmetic-progression]
---

## Why It Matters

Add up $1 + 2 + 3 + \dots + 100$. The story goes that a schoolboy named
Gauss did it in seconds: pair the first with the last ($101$), the
second with the second-last ($101$), fifty pairs - $5050$. That trick
is a theorem about every arithmetic progression, and it answers "how
much in total" for any same-step process: total payments, total seats,
total distance of something slowing down steadily.

## The Big Idea

Write the sum forwards and backwards under each other:

$$
S = a_1 + a_2 + \dots + a_n, \qquad S = a_n + a_{n - 1} + \dots + a_1.
$$

Add column by column. Every column is $a_1 + a_n$: as one term goes
up by $d$, its partner goes down by $d$. There are $n$ columns, so $2S =
n(a_1 + a_n)$. The sum is the average of the first and last members,
times how many there are - which is what "pair them off" means.

## The Rule

**Theorem.** The sum of the first $n$ members of an arithmetic
progression is

$$
S_n = \frac{a_1 + a_n}{2} \cdot n
$$

Substituting $a_n = a_1 + (n - 1)d$ gives the second form, for when the
last member isn't known:

$$
S_n = \frac{2a_1 + (n - 1)d}{2} \cdot n
$$

Use the first when you know the last member, the second when you
know $d$.

## Worked Example

Find $1 + 2 + \dots + 100$; then the sum of the first $20$ members of $3,
7, 11, \dots$; then the sum of all two-digit numbers divisible by $3$;
then: how many members of $5, 8, 11, \dots$ add up to $437$?

- **$1 + \dots + 100$:** $a_1 = 1$, $a_{100} = 100$, $n = 100$: $S = \frac{1 +
  100}{2} \cdot 100 = 5050$.
- **$3, 7, 11, \dots$, $n = 20$:** $d = 4$; $S_{20} = \frac{2 \cdot 3 + 19 \cdot 4}{2}
  \cdot 20 = \frac{82}{2} \cdot 20 = 820$.
- **Two-digit multiples of $3$.** From $12$ to $99$, step $3$: $99 = 12 +
  (n - 1) \cdot 3$, $n = 30$. $S = \frac{12 + 99}{2} \cdot 30 = 1665$.
- **Sum $437$.** $\frac{2 \cdot 5 + (n - 1) \cdot 3}{2} \cdot n = 437$, so $(3n + 7)n =
  874$, $3n^2 + 7n - 874 = 0$, $n = \frac{-7 + \sqrt{49 + 10488}}{6} = \frac{-7 +
  103}{6} = 16$. Sixteen members.

For the last one, the negative root is discarded: $n$ counts
members.

## Common Mistake

Using the wrong $n$ - counting the members of $12, 15, \dots, 99$ as
$\frac{99 - 12}{3} = 29$ instead of $29 + 1 = 30$. The number of members
is the number of steps plus one; find it from $a_n = a_1 + (n - 1)d$
rather than by guessing. The other slip is mixing the two forms:
$\frac{a_1 + a_n}{2} \cdot n$ needs the actual last member $a_n$, not $d$.

## The Takeaway

Pair the ends: $S_n = \frac{a_1 + a_n}{2} \cdot n$, or with $d$ in place of
$a_n$, $S_n = \frac{2a_1 + (n - 1)d}{2} \cdot n$. Get $n$ from the formula for
the $n$-th member, not by subtraction alone.

## Check Yourself

1. Find the sum of the first $30$ natural numbers.
2. Find $S_{10}$ for $a_1 = 4$, $d = 3$.
3. Find $S_{15}$ for $a_1 = 20$, $a_{15} = -8$.
4. Find the sum of all odd numbers from $1$ to $99$.
5. A theatre has $20$ rows; the first has $16$ seats and each next row
   has $2$ more. How many seats in all?
6. Someone sums $2, 4, \dots, 40$ as $\frac{2 + 40}{2} \cdot 19 = 399$. Find the
   slip.

> [!spoiler] Answers
>
> 1. $465$.
> 2. $\frac{8 + 27}{2} \cdot 10 = 175$.
> 3. $\frac{20 - 8}{2} \cdot 15 = 90$.
> 4. $50$ members: $\frac{1 + 99}{2} \cdot 50 = 2500$.
> 5. $\frac{2 \cdot 16 + 19 \cdot 2}{2} \cdot 20 = 700$.
> 6. There are $20$ members, not $19$: $420$.
