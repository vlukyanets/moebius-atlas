---
title: Rounding Numbers
tag: MTD
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-2-lesson-2-comparing-natural-numbers]
---

## Why It Matters

A news report says "about 5000 people came to the game," not "4978 people
came to the game." A price tag says a phone costs "almost $800." Nobody's
being sloppy here - an exact number is often harder to picture and easier to
forget than a round one, and for most everyday questions, close enough is
genuinely enough. Rounding is how you trade a little bit of precision for a
number that's easier to say, compare, and remember.

## The Big Idea

Picture a number line with parking spots only at round numbers - for
rounding to the nearest hundred, a spot every hundred: $\dots, 4100, 4200,
4300, \dots$. Your number sits somewhere between two neighboring spots, and
rounding just means: which one is it closer to? You don't have to measure
the whole distance to find out - one single digit already tells you. The
digit right after the place you're rounding to acts like a scale: $0$
through $4$ tip toward the lower spot, $5$ through $9$ tip toward the higher
one. Once you know which way it tips, every digit after that scale digit
stops mattering - it gets replaced with zero, since keeping it would be
pretending to a precision you just gave up.

[!anim] rounding-digits

## The Rule

To round a number to a given place:

1. **Find the digit in that place** - this is the digit that might change.
2. **Look at the digit right after it** - call it the decider.
3. **If the decider is $0, 1, 2, 3$ or $4$, leave the digit alone** (round
   down). **If the decider is $5, 6, 7, 8$ or $9$, increase the digit by
   one** (round up).
4. **Replace every digit after the rounding place with zero.**

## Worked Example

Round $4278$ to the nearest hundred.

- **Find the hundreds digit.** It's $2$ - that's the digit that might
  change.
- **Look at the decider.** The digit right after the hundreds place is the
  tens digit, $7$.
- **Apply the rule.** $7$ is $5$ or more, so the hundreds digit rounds up:
  $2$ becomes $3$.
- **Zero out the rest.** The tens and ones digits become $0$ and $0$.

So $4278$ rounds to $4300$.

## Common Mistake

Rounding twice is not the same as rounding once. Round $649$ to the nearest
hundred directly: the hundreds digit is $6$, the decider is the tens digit
$4$, and $4$ is less than $5$ - so it rounds down to $600$. But round it in
two steps instead - first to the nearest ten ($649 \to 650$), then round
that result to the nearest hundred ($650 \to 700$) - and you get $700$,
which is wrong. The first rounding already threw away information; rounding
its rounded-up guess again just compounds the error. Always go straight from
the original number to the place you actually need, using that number's own
decider digit - never a decider digit borrowed from an earlier rounding.

## The Takeaway

Rounding to a given place always looks at exactly one digit - the one right
after that place, in the original number - and turns everything past it into
zero. It never looks at an already-rounded result.

## Check Yourself

1. Round $6172$ to the nearest hundred.
2. Round $6172$ to the nearest ten.
3. Round $895$ to the nearest hundred.
4. Round $6455$ to the nearest thousand.
5. Round $999$ to the nearest ten. Why does more than one digit change?
6. Someone rounds $649$ to the nearest hundred by first rounding it to the
   nearest ten ($649 \to 650$), then rounding that to the nearest hundred
   ($650 \to 700$). What went wrong, and what's the correct answer?

> [!spoiler] Answers
>
> 1. $6200$ - the decider (tens digit $7$) rounds the hundreds digit up.
> 2. $6170$ - the decider (ones digit $2$) rounds the tens digit down.
> 3. $900$ - the decider (tens digit $9$) rounds the hundreds digit up.
> 4. $6000$ - the decider (hundreds digit $4$) rounds the thousands digit
>    down.
> 5. $1000$ - the decider (ones digit $9$) rounds the tens digit up, but
>    $9 + 1$ is $10$, so that carries into the hundreds digit, which carries
>    into the thousands digit too.
> 6. Rounding is not supposed to be repeated - the second rounding used
>    $650$'s own decider instead of looking at $649$ directly. Rounding
>    $649$ straight to the nearest hundred gives $600$: the decider is the
>    tens digit $4$, which rounds down.
