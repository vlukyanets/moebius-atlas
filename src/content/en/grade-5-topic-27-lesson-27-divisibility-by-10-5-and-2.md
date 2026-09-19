---
title: "[S] Divisibility by 10, 5 and 2"
tag: THM
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-26-lesson-26-divisors-and-multiples]
---

## Why It Matters

Is $4\,378\,296$ divisible by $2$? You could do the long division - or
you could glance at the last digit and say "yes" in a second. For some
divisors, a number gives itself away by its last digit alone, and $2$,
$5$ and $10$ are the three that do. Once you know the signs, checking is
faster than asking.

## The Big Idea

Every number is made of tens plus a last digit:
$4\,378\,296 = 4\,378\,290 + 6$. The first part is a whole number of tens,
and tens are divisible by $10$, by $5$ and by $2$ - all of them, always.
So whether the *whole* number is divisible by $10$, $5$ or $2$ depends only
on the leftover part: the last digit. Everything else in the number is
already taken care of.

That's why these three tests only ever look at one digit. Not because the
other digits don't matter - but because they're multiples of ten, and ten
has already passed the test.

## The Rule

- A number is **divisible by $10$** exactly when its last digit is $0$.
- A number is **divisible by $5$** exactly when its last digit is $0$ or
  $5$.
- A number is **divisible by $2$** exactly when its last digit is $0$,
  $2$, $4$, $6$ or $8$.

Numbers divisible by $2$ are called **even**; the rest - those ending in
$1$, $3$, $5$, $7$ or $9$ - are **odd**. Even and odd numbers alternate
along the number line: $1$ odd, $2$ even, $3$ odd, and so on.

The tests work both ways: if the last digit fits, the number is
divisible; if it doesn't, it isn't.

## Worked Example

Which of $4\,378\,296$, $70\,215$ and $9\,000$ are divisible by $2$, by
$5$, by $10$?

- **$4\,378\,296$.** Last digit $6$: even, so divisible by $2$. Not $0$ or
  $5$, so not by $5$. Not $0$, so not by $10$.
- **$70\,215$.** Last digit $5$: divisible by $5$. Odd, so not by $2$. Not
  by $10$.
- **$9\,000$.** Last digit $0$: divisible by all three - $10$, $5$ and
  $2$.

Now a puzzle: put a digit in place of $*$ so that $53*$ is divisible by
$5$ but not by $10$. It must end in $0$ or $5$ for the $5$, and not in
$0$ for the $10$ - so the digit is $5$: $535$.

## Common Mistake

Looking at the first digit, or at the sum of the digits. $25$ starts with
$2$ and isn't even; $61$ has digit sum $7$ and isn't divisible by $5$
or $7$ or anything interesting - it's the *last* digit, and only the
last digit, that these three tests read. The sum of the digits belongs to
a different test, for $3$ and $9$, and mixing them up gives wrong answers
in both directions.

## The Takeaway

Divisibility by $10$, $5$ and $2$ is written in the last digit: $0$ for
ten, $0$ or $5$ for five, any even digit for two. Even numbers end in an
even digit, odd numbers in an odd one.

## Check Yourself

1. Which of $348$, $1005$, $7770$, $2\,431$ are even?
2. Which of the same numbers are divisible by $5$? By $10$?
3. Write the smallest three-digit number divisible by $5$ but not by
   $10$.
4. Is $10^{6}$ divisible by $2$? By $5$?
5. A number ends in $0$. Is it necessarily divisible by $2$? By $5$?
6. Someone says $28$ is divisible by $5$ "because $2 + 8 = 10$." Where's
   the mistake?

> [!spoiler] Answers
>
> 1. $348$ and $7770$.
> 2. By $5$: $1005$ and $7770$; by $10$: only $7770$.
> 3. $105$.
> 4. Yes to both - it ends in $0$.
> 5. Yes to both - a last digit $0$ passes every test on this page.
> 6. The digit sum has nothing to do with $5$; the last digit is $8$, so
>    $28$ is not divisible by $5$.
