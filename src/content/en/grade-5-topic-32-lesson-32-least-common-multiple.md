---
title: "[S] Least Common Multiple"
tag: DEF
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-30-lesson-30-prime-factorization]
---

## Why It Matters

One bus comes every $12$ minutes, another every $18$; they've just left
together - when do they leave together next? Two gears with $8$ and $12$
teeth - after how many turns are they back where they started? Hot dogs
come in packs of $6$ and buns in packs of $8$ - what's the smallest number
of each you can buy with none left over? Every one of these is asking for
the smallest number that two others both go into. And in a few topics'
time, adding fractions will ask it constantly.

## The Big Idea

Multiples of $12$: $12, 24, 36, 48, 60, 72, \dots$ Multiples of $18$: $18,
36, 54, 72, \dots$ The first number on both lists is $36$ - that's the
least common multiple. The buses next leave together in $36$ minutes.

The recipes give it without any lists. $12 = 2^2 \cdot 3$ and $18 = 2
\cdot 3^2$. A common multiple has to contain the whole recipe of *each*
number: it needs at least two $2$s (for $12$) and at least two $3$s (for
$18$). The smallest one takes exactly that much and no more: $2^2 \cdot
3^2 = 36$. Where the GCD took the *fewest* copies of each prime, the LCM
takes the *most* - and it includes every prime either number has, not
just the shared ones.

## The Rule

The **least common multiple** of two or more numbers is the smallest
number that is divisible by each of them. It's written
$\operatorname{lcm}(a, b)$.

To find it:

1. factor each number into primes;
2. take every prime that appears in *any* of the factorizations, with
   the *largest* exponent it has in any of them;
3. multiply those together.

If the numbers are coprime, the LCM is simply their product:
$\operatorname{lcm}(8, 15) = 120$.

If one number divides the other, the larger one is the LCM:
$\operatorname{lcm}(12, 36) = 36$.

## Worked Example

Find $\operatorname{lcm}(24, 90)$.

- **Factor:** $24 = 2^3 \cdot 3$ and $90 = 2 \cdot 3^2 \cdot 5$.
- **All primes involved:** $2$, $3$, $5$ - the $5$ counts even though
  only $90$ has it.
- **Largest exponents:** $2^3$ (from $24$), $3^2$ (from $90$), $5$ (from
  $90$).
- **Multiply:** $8 \cdot 9 \cdot 5 = 360$.

So $\operatorname{lcm}(24, 90) = 360$. Check: $360 : 24 = 15$ and
$360 : 90 = 4$, both exact.

The hot dogs: $\operatorname{lcm}(6, 8)$. $6 = 2 \cdot 3$, $8 = 2^3$; LCM
$= 2^3 \cdot 3 = 24$. Buy $24$ of each: four packs of hot dogs, three
packs of buns.

## Common Mistake

Multiplying the numbers and calling that the LCM. $12 \cdot 18 = 216$ is
a common multiple, but not the least one - $36$ is six times smaller. The
product double-counts the primes the numbers share. It's only right when
the numbers are coprime and share nothing. Use the largest exponents, not
the sum of them.

## The Takeaway

The least common multiple is the smallest number all the given numbers
divide into. From the prime factorizations, take every prime that
appears anywhere, with its largest exponent, and multiply. GCD takes the
smallest exponents of the shared primes; LCM takes the largest of all of
them.

## Check Yourself

1. Find $\operatorname{lcm}(6, 9)$.
2. Find $\operatorname{lcm}(20, 36)$ using prime factorizations.
3. Find $\operatorname{lcm}(7, 10)$. Why is it just the product?
4. Find $\operatorname{lcm}(15, 60)$ without factoring.
5. Two gears have $8$ and $12$ teeth. After how many teeth pass do both
   return to their starting positions?
6. Someone says $\operatorname{lcm}(12, 18) = 216$. What's the right
   answer, and what went wrong?

> [!spoiler] Answers
>
> 1. $2 \cdot 3^2 = 18$.
> 2. $20 = 2^2 \cdot 5$, $36 = 2^2 \cdot 3^2$: $2^2 \cdot 3^2 \cdot 5 =
>    180$.
> 3. $70$ - they're coprime, so nothing is shared.
> 4. $60$, since $15$ divides $60$.
> 5. $\operatorname{lcm}(8, 12) = 24$ teeth.
> 6. $36$; multiplying counts the shared factors twice.
