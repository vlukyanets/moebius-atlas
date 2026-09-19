---
title: "[S] Divisibility by 9 and 3"
tag: THM
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-27-lesson-27-divisibility-by-10-5-and-2]
---

## Why It Matters

$3$ and $9$ don't play by the last-digit rule: $13$ ends in $3$ and isn't
divisible by $3$, while $12$ ends in $2$ and is. So they need a test of
their own - and they have one, almost as quick, that reads the *sum* of
the digits instead. It's the trick behind every "add up the digits"
party puzzle, and it's the one you'll use most when cancelling
fractions.

## The Big Idea

Why does the last digit work for $2$, $5$ and $10$ but not for $3$? Because
$10$ is divisible by $2$ and $5$, so the tens can be ignored. But $10$ is
not divisible by $3$ - it's one more than $9$, which is. So a ten leaves a
remainder of $1$ when divided by $3$; a hundred, $99 + 1$, also leaves
$1$; a thousand, $999 + 1$, leaves $1$ too.

Take $4\,752$: that's $4$ thousands, $7$ hundreds, $5$ tens and $2$. Each
thousand leaves a remainder of $1$, so four thousands leave $4$; seven
hundreds leave $7$; five tens leave $5$; and the $2$ is $2$. Altogether
the leftover is $4 + 7 + 5 + 2 = 18$ - the sum of the digits. If *that* is
divisible by $3$, the whole number is. The same reasoning, with $9$
instead of $3$, gives the test for $9$ - because $9$, $99$, $999$ are all
divisible by $9$ too.

## The Rule

- A number is **divisible by $9$** exactly when the sum of its digits is
  divisible by $9$.
- A number is **divisible by $3$** exactly when the sum of its digits is
  divisible by $3$.

Every number divisible by $9$ is divisible by $3$ as well - but not the
other way round: $12$ is divisible by $3$ and not by $9$.

If the digit sum is itself large, add its digits again - the test can be
repeated until the sum is small.

## Worked Example

Are $4\,752$ and $80\,311$ divisible by $3$? By $9$?

- **$4\,752$.** Digit sum: $4 + 7 + 5 + 2 = 18$. $18$ is divisible by $9$,
  so $4\,752$ is divisible by $9$ - and therefore by $3$ as well. Check:
  $4\,752 : 9 = 528$.
- **$80\,311$.** Digit sum: $8 + 0 + 3 + 1 + 1 = 13$. $13$ isn't divisible
  by $3$ (it's $12 + 1$), so $80\,311$ isn't either - and so not by $9$.

Now fill the gap: for which digit is $2\,4*7$ divisible by $9$? The sum
is $2 + 4 + 7 + * = 13 + *$, and the next multiple of $9$ above $13$ is
$18$. So $* = 5$: $2\,457$. Check: $2\,457 : 9 = 273$.

## Common Mistake

Using the last digit. $23$ ends in $3$, so someone calls it divisible by
$3$ - but $2 + 3 = 5$, and $23 : 3$ leaves a remainder of $2$. The last
digit belongs to the tests for $2$, $5$ and $10$; for $3$ and $9$ only the
sum of all the digits counts. A number ending in $9$, like $19$, need
not be divisible by $9$, and one ending in $0$, like $30$, can be
divisible by $3$.

## The Takeaway

For $3$ and $9$, add up the digits: if the sum is divisible by $3$, so is
the number; if the sum is divisible by $9$, so is the number. Divisible by
$9$ always means divisible by $3$, but not the reverse.

## Check Yourself

1. Is $5\,283$ divisible by $3$? By $9$?
2. Is $700\,002$ divisible by $3$? By $9$?
3. Which digit makes $61*4$ divisible by $9$?
4. Which digits make $3*5$ divisible by $3$?
5. Is every number divisible by $3$ also divisible by $9$? Give an
   example either way.
6. Someone says $129$ is divisible by $9$ "because it ends in $9$." Test
   it properly.

> [!spoiler] Answers
>
> 1. Digit sum $18$: yes to both.
> 2. Digit sum $9$: yes to both.
> 3. $6 + 1 + 4 = 11$, next multiple of $9$ is $18$, so $* = 7$: $6174$.
> 4. $3 + 5 = 8$, so $* = 1$, $4$ or $7$ (sums $9$, $12$, $15$).
> 5. No: $12$ is divisible by $3$ but not by $9$.
> 6. $1 + 2 + 9 = 12$, divisible by $3$ but not by $9$ - so $129$ is not
>    divisible by $9$.
