---
title: "[S] Divisors and Multiples"
tag: DEF
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-10-lesson-10-division-with-remainder]
---

## Why It Matters

$24$ pupils need to be split into equal teams - what sizes are possible?
Buses come every $12$ minutes and trams every $18$ - when do they arrive
together again? Both questions are about which numbers divide into which
without anything left over. Divisors and multiples are the vocabulary
for that, and the whole of the next few topics is built on them.

## The Big Idea

Take $24$ and ask which numbers go into it exactly - no remainder. Try
them: $1$ does, $2$ does, $3$ does, $4$ does, $5$ doesn't ($24 : 5$ leaves
$4$), $6$ does, $8$ does, $12$ does, $24$ does. Those are the divisors of
$24$ - the team sizes that split $24$ pupils with no one left over. There
are only finitely many, and none can be bigger than $24$ itself.

Now flip the question: which numbers does $12$ go into exactly? $12$,
$24$, $36$, $48$, ... - every twelfth number, forever. Those are the
multiples of $12$. Divisors look down from a number; multiples look up.

## The Rule

A natural number $b$ is a **divisor** of a natural number $a$ if $a$ is
divisible by $b$ - that is, $a : b$ has no remainder. In the same
situation $a$ is a **multiple** of $b$.

$$
24 : 6 = 4 \quad \Rightarrow \quad 6 \text{ is a divisor of } 24, \quad
24 \text{ is a multiple of } 6
$$

Every natural number has $1$ and itself as divisors, and its divisors are
never bigger than itself. Its multiples are itself, twice itself, three
times itself, ... - there's no last one.

A number that is a divisor of two numbers at once is their **common
divisor**; a number that is a multiple of both is their **common
multiple**.

## Worked Example

Find all the divisors of $36$.

- **Go in pairs.** Whenever $b$ is a divisor, so is $36 : b$ - the two
  multiply to $36$. So find them two at a time.
- $1$ and $36$. $2$ and $18$. $3$ and $12$. $4$ and $9$. $5$? No -
  remainder $1$. $6$ and $6$ - the pair meets in the middle, so stop.
- **List them:** $1, 2, 3, 4, 6, 9, 12, 18, 36$ - nine divisors.

Now the buses and trams. Multiples of $12$: $12, 24, 36, 48, \dots$
Multiples of $18$: $18, 36, 54, \dots$ The first number on both lists is
$36$ - a common multiple. They arrive together again after $36$ minutes.

## Common Mistake

Mixing up the two words. Since $6$ divides $24$, $6$ is the divisor and
$24$ is the multiple - the divisor is the smaller one that goes *in*, the
multiple is the bigger one that it goes *into*. Saying "$24$ is a
divisor of $6$" is backwards: $6 : 24$ isn't even a natural number. If
in doubt, check which division actually works.

## The Takeaway

A divisor goes into a number with no remainder; a multiple is what a
number goes into. A number's divisors are few and small; its multiples
are endless and go up in equal steps.

## Check Yourself

1. Is $7$ a divisor of $91$? Is $8$?
2. List all the divisors of $20$.
3. Write the first five multiples of $9$.
4. Find the common divisors of $18$ and $24$.
5. Find the smallest common multiple of $8$ and $6$.
6. Someone says "$45$ is a divisor of $9$." What should they have said?

> [!spoiler] Answers
>
> 1. Yes, $91 = 7 \cdot 13$; no, $91 : 8$ leaves a remainder of $3$.
> 2. $1, 2, 4, 5, 10, 20$.
> 3. $9, 18, 27, 36, 45$.
> 4. $1, 2, 3, 6$.
> 5. $24$.
> 6. "$45$ is a multiple of $9$" - or "$9$ is a divisor of $45$."
