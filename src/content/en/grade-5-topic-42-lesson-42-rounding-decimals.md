---
title: "[S] Rounding Decimals"
tag: MTD
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-41-lesson-41-comparing-decimals, grade-5-topic-3-lesson-3-rounding-numbers]
---

## Why It Matters

A calculator says the bill split three ways is $14.333333$ hryvnias. You
can't pay a third of a kopiyka, so you pay $14.33$. A scale reads
$62.48$ kg and you say "about sixty-two and a half." Measurements and
divisions spit out more decimal places than anyone needs, and rounding
trims them to the ones that matter - by the very same rule you already
know for natural numbers.

## The Big Idea

Rounding a natural number looked at one digit - the decider, right after
the place you were rounding to - and replaced everything past it with
zeros. Decimals work identically, with one small twist at the end. The
places after the point are just more jars, and the decider is still the
digit one jar to the right. The twist: the digits you throw away were
*after* the point, and a zero at the end of a decimal means nothing - so
instead of writing zeros, you simply drop them.

Rounding to the nearest whole number, then, is rounding to the ones
place: look at the tenths digit, and everything after the point
disappears.

## The Rule

To round a decimal to a given place:

1. **Find the digit in that place.**
2. **Look at the digit right after it** - the decider.
3. **If the decider is $0$–$4$, leave the digit alone; if it's $5$–$9$,
   increase it by one.**
4. **Drop every digit after the rounding place.** (If the rounding place
   is before the point, the dropped digits before the point become zeros,
   as with natural numbers.)

$$
14.3333 \approx 14.33 \text{ (to hundredths)}, \qquad 62.48 \approx 62.5
\text{ (to tenths)}, \qquad 62.48 \approx 62 \text{ (to a whole)}
$$

The sign $\approx$ means "is approximately equal to."

## Worked Example

Round $7.2961$ to hundredths, to tenths and to a whole number.

- **To hundredths.** The hundredths digit is $9$; the decider is the
  thousandths digit, $6$. $6 \geq 5$, so round up: $9 + 1 = 10$ - write
  $0$ and carry into the tenths, which go from $2$ to $3$. Drop the rest:
  $7.30$, and since a trailing zero is optional, $7.3$. (Writing $7.30$
  is also fine, and it shows the rounding was to hundredths.)
- **To tenths.** Tenths digit $2$; decider is the hundredths digit, $9$.
  Round up: $7.3$.
- **To a whole number.** Ones digit $7$; decider is the tenths digit,
  $2$. Leave it: $7$.

And the bill: $14.3333\ldots$ to hundredths. Hundredths digit $3$, decider
$3$ - leave it. $14.33$ hryvnias.

## Common Mistake

Turning dropped digits into zeros after the point - or, the mirror
mistake, dropping digits *before* the point. $7.2961$ rounded to tenths is
$7.3$; writing $7.3000$ isn't wrong, just clumsy. But $2648.7$ rounded to
hundreds is $2600$, not $26$: digits before the point that get dropped
must be replaced by zeros, or the number shrinks a hundredfold. Zeros
after the point are optional; zeros before it are not.

## The Takeaway

Round a decimal exactly as you round a natural number - one decider
digit, up on $5$ or more - then drop the digits past the rounding place.
Dropped digits after the point vanish; dropped digits before it become
zeros.

## Check Yourself

1. Round $3.847$ to tenths and to hundredths.
2. Round $0.0951$ to hundredths.
3. Round $19.5$ to a whole number.
4. Round $6.997$ to hundredths. Why do several digits change?
5. A bill of $200$ hryvnias split among $7$ people comes to
   $28.5714\ldots$ each. How much does each pay, to the kopiyka?
6. Someone rounds $4532.6$ to hundreds and writes $45$. What's the right
   answer?

> [!spoiler] Answers
>
> 1. $3.8$ and $3.85$.
> 2. $0.10$, or $0.1$ - the decider $5$ carries $9$ up into $10$.
> 3. $20$ - the decider is $5$.
> 4. $7.00$, or $7$ - the $9$ becomes $10$, carries, and carries again.
> 5. $28.57$ hryvnias.
> 6. $4500$ - the dropped digits before the point become zeros.
