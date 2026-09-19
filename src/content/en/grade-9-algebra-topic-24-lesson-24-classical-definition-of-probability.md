---
title: "[S] Classical Definition of Probability"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-23-lesson-23-random-events-and-probability, grade-9-algebra-topic-22-lesson-22-combinatorial-problems]
---

## Why It Matters

You don't need to roll a die a thousand times to know that a six
comes up one time in six. When every outcome is equally likely,
probability is a *count*: the outcomes that suit you, divided by all
of them. This is the classical definition - the one lotteries,
dice, cards and every "what are the odds" question use - and it
turns the combinatorics of two topics ago into probabilities.

## The Big Idea

A die has six faces, each as likely as any other. The event "even"
is satisfied by three of them. So in the long run even comes up
three times out of six - probability $\frac{3}{6} = \frac{1}{2}$. That's the
whole idea: list the equally likely outcomes, count how many make the
event happen, divide. When the outcomes are too many to list -
two dice, a hand of cards - count them with the multiplication rule
instead. The definition only works when the outcomes *are* equally
likely, which is why symmetric objects (dice, coins, well-shuffled
cards) are its home.

## The Rule

Suppose an experiment has $n$ **equally likely** outcomes, and event
$A$ occurs in exactly $m$ of them (the outcomes **favourable** to $A$).
Then the **probability** of $A$ is

$$
P(A) = \frac{m}{n}
$$

Consequences: $0 \leq P(A) \leq 1$; the certain event has $m = n$, $P =
1$; the impossible has $m = 0$, $P = 0$; $P(\bar{A}) = \frac{n - m}{n} = 1 -
P(A)$.

**Method:** describe the outcomes; check they're equally likely;
count $n$; count $m$; divide.

## Worked Example

A die is rolled: find $P(\text{even})$, $P(\text{at least } 5)$. Two dice
are rolled: find $P(\text{sum} = 7)$ and $P(\text{doubles})$. A box holds $3$
red and $5$ blue balls; one is drawn: $P(\text{red})$? Two-digit number
chosen at random: $P(\text{divisible by } 9)$?

- **One die.** $n = 6$. Even: $m = 3$, $P = \frac{1}{2}$. At least $5$: faces
  $5, 6$, $m = 2$, $P = \frac{1}{3}$.
- **Two dice.** Outcomes are ordered pairs $(a; b)$: $n = 6 \cdot 6 = 36$,
  all equally likely. Sum $7$: $(1;6), (2;5), (3;4), (4;3), (5;2),
  (6;1)$ - $m = 6$, $P = \frac{6}{36} = \frac{1}{6}$. Doubles: $(1;1), \dots,
  (6;6)$, $m = 6$, $P = \frac{1}{6}$.
- **Balls.** $n = 8$, $m = 3$: $P = \frac{3}{8}$.
- **Two-digit numbers.** $n = 90$ ($10$ to $99$). Divisible by $9$: $18, 27,
  \dots, 99$ - $m = 10$. $P = \frac{10}{90} = \frac{1}{9}$.

Note the two dice: the outcomes are the $36$ *ordered pairs*, not the
$11$ possible sums - the sums are not equally likely.

## Common Mistake

Choosing outcomes that aren't equally likely. "Two dice: the sum is
$2$ to $12$, eleven outcomes, so $P(\text{sum} = 7) = \frac{1}{11}$." But
sum $7$ can happen six ways and sum $2$ only one; the eleven sums
aren't equally likely, and the definition doesn't apply to them. Go
down to the level where things are symmetric - the $36$ pairs. The
other slip is counting favourable outcomes carelessly: $(3; 4)$ and
$(4; 3)$ are two different outcomes.

## The Takeaway

$P(A) = \frac{m}{n}$: favourable over all, provided all outcomes are
equally likely. Find that level of symmetry (faces, ordered pairs,
individual balls), count with combinatorics, divide. The opposite
event is $1 - P(A)$.

## Check Yourself

1. A die is rolled. Find $P(\text{prime})$.
2. A card is drawn from $36$ ($6$ to ace in four suits). Find
   $P(\text{ace})$ and $P(\text{hearts})$.
3. Two coins are tossed. Find $P(\text{both heads})$ and $P(\text{exactly
   one head})$.
4. Two dice are rolled. Find $P(\text{sum} = 10)$.
5. A bag has $4$ white, $6$ black balls. Find $P(\text{not white})$.
6. Someone says two coins give three outcomes - $0$, $1$ or $2$ heads -
   so $P(2 \text{ heads}) = \frac{1}{3}$. Correct it.

> [!spoiler] Answers
>
> 1. $2, 3, 5$: $\frac{1}{2}$.
> 2. $\frac{4}{36} = \frac{1}{9}$; $\frac{9}{36} = \frac{1}{4}$.
> 3. Outcomes HH, HT, TH, TT: $\frac{1}{4}$; $\frac{2}{4} = \frac{1}{2}$.
> 4. $(4;6), (5;5), (6;4)$: $\frac{3}{36} = \frac{1}{12}$.
> 5. $\frac{6}{10} = 0.6$.
> 6. The four ordered outcomes are equally likely, not the three
>    counts: $P(2 \text{ heads}) = \frac{1}{4}$.
