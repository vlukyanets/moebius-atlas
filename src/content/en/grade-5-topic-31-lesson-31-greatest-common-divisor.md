---
title: "[S] Greatest Common Divisor"
tag: DEF
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-30-lesson-30-prime-factorization]
---

## Why It Matters

You have $36$ apples and $48$ pears and want to make identical gift bags
with nothing left over - what's the biggest number of bags you can make?
A floor $360$ cm by $270$ cm has to be tiled with the largest square tiles
that fit exactly - how big are they? Both questions ask for the biggest
number that divides two others at once. That's the greatest common
divisor, and the prime recipes from the last topic hand it over.

## The Big Idea

Two numbers can share divisors. $36$ has $1, 2, 3, 4, 6, 9, 12, 18, 36$;
$48$ has $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$. On both lists: $1, 2, 3, 4, 6,
12$. The biggest of these, $12$, is the greatest common divisor - the
most bags you can fill identically.

Listing is slow. The recipes are faster: $36 = 2^2 \cdot 3^2$ and
$48 = 2^4 \cdot 3$. A common divisor can only use primes both numbers
have, and only as many of each as the *poorer* number has. Both have
$2$s - $36$ has two, $48$ has four, so a common divisor gets at most two.
Both have $3$s - $36$ has two, $48$ has one, so at most one. The biggest
common divisor takes everything it's allowed: $2^2 \cdot 3 = 12$.

## The Rule

The **greatest common divisor** of two or more numbers is the largest
number that divides each of them. It's written $\gcd(a, b)$.

To find it:

1. factor each number into primes;
2. take every prime that appears in *all* the factorizations, with the
   *smallest* exponent it has in any of them;
3. multiply those together.

If the numbers share no prime at all, their GCD is $1$, and the numbers
are called **coprime**: $\gcd(8, 15) = 1$.

If one number divides the other, the smaller one is the GCD:
$\gcd(12, 36) = 12$.

## Worked Example

Find $\gcd(360, 270)$ - the largest square tile for the floor.

- **Factor:** $360 = 2^3 \cdot 3^2 \cdot 5$ and $270 = 2 \cdot 3^3 \cdot 5$.
- **Shared primes:** $2$, $3$ and $5$ all appear in both.
- **Smallest exponents:** $2$ appears as $2^3$ and $2^1$ - take $2^1$. $3$
  appears as $3^2$ and $3^3$ - take $3^2$. $5$ is $5^1$ in both - take
  $5$.
- **Multiply:** $2 \cdot 9 \cdot 5 = 90$.

So $\gcd(360, 270) = 90$: the tiles are $90$ cm square, four along one
side and three along the other.

Now three numbers: $\gcd(24, 36, 60)$. Factor: $2^3 \cdot 3$, $2^2 \cdot
3^2$, $2^2 \cdot 3 \cdot 5$. Shared by all three: $2$ and $3$. Smallest
exponents: $2^2$ and $3^1$. GCD $= 12$.

## Common Mistake

Taking the biggest exponent instead of the smallest. For $36 = 2^2
\cdot 3^2$ and $48 = 2^4 \cdot 3$, picking $2^4 \cdot 3^2 = 144$ gives a
number bigger than both - and $144$ certainly doesn't divide $36$. A
common divisor has to fit inside *each* number, so it can only carry as
many copies of a prime as the number with the fewest. Biggest exponents
belong to the least common multiple - the next topic - not here.

## The Takeaway

The greatest common divisor is the biggest number that divides all the
given numbers. From the prime factorizations, take the shared primes with
their smallest exponents and multiply. No shared primes means the GCD is
$1$.

## Check Yourself

1. Find $\gcd(28, 42)$.
2. Find $\gcd(72, 120)$ using prime factorizations.
3. Find $\gcd(9, 16)$. What are such numbers called?
4. Find $\gcd(15, 45)$ without factoring. Why is it easy?
5. $36$ apples and $48$ pears go into identical bags with nothing left.
   What's the most bags, and what's in each?
6. Someone finds $\gcd(36, 48) = 144$. What did they do wrong?

> [!spoiler] Answers
>
> 1. $28 = 2^2 \cdot 7$, $42 = 2 \cdot 3 \cdot 7$: $\gcd = 2 \cdot 7 = 14$.
> 2. $72 = 2^3 \cdot 3^2$, $120 = 2^3 \cdot 3 \cdot 5$: $\gcd = 2^3 \cdot 3
>    = 24$.
> 3. $1$ - they're coprime.
> 4. $15$, since $15$ divides $45$.
> 5. $12$ bags, each with $3$ apples and $4$ pears.
> 6. They took the largest exponents; those give the least common
>    multiple. The GCD is $2^2 \cdot 3 = 12$.
