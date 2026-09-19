---
title: "[S] Prime and Composite Numbers"
tag: DEF
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-26-lesson-26-divisors-and-multiples]
---

## Why It Matters

Every message your phone sends is scrambled with a pair of enormous
numbers that nobody can split into factors in any reasonable time - and
the reason nobody can is that the numbers are built from primes. Primes
are the numbers that can't be broken down any further: the atoms of
arithmetic. Every other number is assembled from them, and the next few
topics are about taking numbers apart into those atoms.

## The Big Idea

Line up $12$ pebbles. You can arrange them as a $2 \times 6$ rectangle, or
$3 \times 4$, or $1 \times 12$. Now try $7$ pebbles: the only rectangle is
a single row, $1 \times 7$. Nothing else works. That's the difference. A
number that can only be a single row - divisible by $1$ and by itself and
nothing else - is prime. A number that can form a proper rectangle has
extra divisors, and is composite.

And $1$? A single pebble isn't a row of anything. It has just one divisor,
itself, so it belongs to neither club. It's the one number that's neither
prime nor composite.

## The Rule

A natural number is **prime** if it has exactly two divisors: $1$ and
itself.

$$
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, \dots
$$

A natural number is **composite** if it has more than two divisors -
that is, at least one divisor other than $1$ and itself.

$$
4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, \dots
$$

The number $1$ has only one divisor and is **neither** prime nor
composite.

$2$ is the only even prime - every other even number has $2$ as an extra
divisor. There is no largest prime: the list goes on forever.

To test a number for primeness, try dividing it by the primes $2, 3, 5, 7,
\dots$ in turn. If none divides it before the divisor's square passes the
number, it's prime.

## Worked Example

Is $91$ prime? Is $97$?

- **$91$.** Even? No. Digit sum $10$ - not divisible by $3$. Ends in $1$ -
  not divisible by $5$. Try $7$: $7 \cdot 13 = 91$. Yes! So $91$ has the
  divisors $1, 7, 13, 91$ - four of them. Composite.
- **$97$.** Not even; digit sum $16$, not divisible by $3$; doesn't end
  in $0$ or $5$; $97 : 7$ leaves $6$. Next prime is $11$, but
  $11 \cdot 11 = 121$ is already past $97$ - if $97$ had a divisor of $11$
  or more, the matching partner would be below $11$, and we've checked
  those. So $97$ is prime.

The small primes are worth knowing by heart: below $50$ they are $2, 3, 5,
7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$ - fifteen of them.

## Common Mistake

Calling every odd number prime. $9$, $15$, $21$, $25$, $27$ are all odd and
all composite - $9 = 3 \cdot 3$, $15 = 3 \cdot 5$, and so on. Odd only
means "not divisible by $2$"; prime means "not divisible by *anything*
except $1$ and itself." Every prime past $2$ is odd, but plenty of odd
numbers aren't prime. And in the other direction: $1$ is not prime,
however odd it is.

## The Takeaway

A prime has exactly two divisors, $1$ and itself; a composite has more;
$1$ has only one and is neither. Primes are the building blocks every
other number is made from.

## Check Yourself

1. Which of $21$, $23$, $27$, $29$ are prime?
2. Why is $1$ not a prime number?
3. Name the only even prime.
4. Is $51$ prime? Show your test.
5. Write all the primes between $30$ and $50$.
6. Someone says "$33$ is prime because it's odd." Where's the mistake?

> [!spoiler] Answers
>
> 1. $23$ and $29$; $21 = 3 \cdot 7$ and $27 = 3 \cdot 9$.
> 2. It has only one divisor, not two.
> 3. $2$.
> 4. No: digit sum $6$, so $51 = 3 \cdot 17$.
> 5. $31, 37, 41, 43, 47$.
> 6. Odd isn't the same as prime: $3 + 3 = 6$, so $33 = 3 \cdot 11$ -
>    composite.
