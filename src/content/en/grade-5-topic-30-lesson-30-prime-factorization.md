---
title: "[S] Prime Factorization"
tag: MTD
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-29-lesson-29-prime-and-composite-numbers, grade-5-topic-28-lesson-28-divisibility-by-9-and-3]
---

## Why It Matters

Primes are the atoms of numbers - so what's $360$ made of? Take it apart
and you get $2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5$: three twos, two
threes and a five, and nothing else, ever. That list is the number's
recipe. Once you have the recipe you can see every divisor a number has,
compare two numbers ingredient by ingredient, cancel a fraction in one
go, and find common multiples without listing anything. This is the tool
the next two topics run on.

## The Big Idea

Take $360$ and split it into two factors any way you like - $36 \cdot 10$,
say. Neither is prime, so split again: $36 = 6 \cdot 6$, $10 = 2 \cdot 5$.
The $6$s aren't prime either: $6 = 2 \cdot 3$. Now everything is prime:
$2 \cdot 3 \cdot 2 \cdot 3 \cdot 2 \cdot 5$. Sort it, and it's $2 \cdot 2
\cdot 2 \cdot 3 \cdot 3 \cdot 5$.

Here's the remarkable part. Start differently - $360 = 4 \cdot 90$, or
$8 \cdot 45$, or $12 \cdot 30$ - and keep splitting. You always end with
exactly the same primes, the same number of times. A number has one
recipe and only one, however you go about finding it.

## The Rule

To **factor a number into primes** is to write it as a product of prime
numbers only. Every composite number can be factored this way, and the
result is the same whatever order you find the factors in.

The tidy method is a column: write the number, find its smallest prime
divisor using the divisibility tests, divide, write the quotient
underneath, and repeat until you reach $1$. The primes down the side are
the answer. Repeated primes are collected into powers:

$$
360 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 = 2^3 \cdot 3^2 \cdot 5
$$

A prime number's factorization is just itself.

## Worked Example

Factor $1470$ into primes.

- **Smallest prime divisor?** $1470$ is even - divide by $2$:
  $1470 : 2 = 735$.
- **$735$.** Odd. Digit sum $15$ - divisible by $3$: $735 : 3 = 245$.
- **$245$.** Digit sum $11$ - not by $3$. Ends in $5$ - divide by $5$:
  $245 : 5 = 49$.
- **$49$.** Not by $2$, $3$ or $5$. Try $7$: $49 : 7 = 7$.
- **$7$.** Prime: $7 : 7 = 1$. Done.

Reading down the side: $1470 = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 7 = 2 \cdot 3
\cdot 5 \cdot 7^2$. Check by multiplying back: $2 \cdot 3 = 6$,
$6 \cdot 5 = 30$, $30 \cdot 49 = 1470$.

## Common Mistake

Stopping while a factor is still composite. $360 = 8 \cdot 45$ is a
factorization, but not into primes: $8$ is $2^3$ and $45$ is $3^2 \cdot 5$.
The job isn't finished until every factor on the page is prime. If you
work down the column with the smallest prime each time, this can't
happen - a quotient that's still composite always has a prime divisor
waiting.

## The Takeaway

Every composite number is a product of primes, and it's the same product
no matter how you find it. Peel off the smallest prime divisor again and
again until you reach $1$, then gather the repeats into powers.

## Check Yourself

1. Factor $84$ into primes.
2. Factor $225$ into primes and write the result with powers.
3. Factor $1000$ into primes.
4. Which number is $2^2 \cdot 3 \cdot 5^2$?
5. Is $2 \cdot 3 \cdot 6$ a prime factorization of $36$? Fix it if not.
6. Someone factors $126$ as $2 \cdot 63$ and stops. Finish the job.

> [!spoiler] Answers
>
> 1. $84 = 2 \cdot 2 \cdot 3 \cdot 7 = 2^2 \cdot 3 \cdot 7$.
> 2. $225 = 3 \cdot 3 \cdot 5 \cdot 5 = 3^2 \cdot 5^2$.
> 3. $1000 = 2^3 \cdot 5^3$.
> 4. $4 \cdot 3 \cdot 25 = 300$.
> 5. No - $6$ isn't prime. $36 = 2^2 \cdot 3^2$.
> 6. $63 = 3 \cdot 21 = 3 \cdot 3 \cdot 7$, so $126 = 2 \cdot 3^2 \cdot 7$.
