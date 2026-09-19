---
title: "[S] Random Events. Probability of a Random Event"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-6-topic-21-lesson-21-percent-ratio-and-percent-change]
---

## Why It Matters

"Will it rain tomorrow?", "will this coin land heads?", "will the
bus be late?" - nobody knows, and yet "$70\%$ chance of rain" is a
sensible thing to say. Probability is the mathematics of what you
can say about things you can't predict. It begins with naming: what
an experiment is, what an event is, which events are certain,
impossible or random - and with the discovery that a random event,
repeated many times, has a *frequency* that settles down.

## The Big Idea

Toss a coin once and nothing can be said. Toss it a thousand times
and heads comes up close to half the time - not exactly, but close,
and closer the more you toss. That stable fraction is the event's
probability: a number between $0$ and $1$ that says how often the
event happens in the long run. $0$ means never (impossible), $1$ means
always (certain), $\frac{1}{2}$ means about half the time. The
*statistical* way to find it is to repeat and count; the next topic
gives the way to compute it without repeating, when all outcomes are
equally likely.

## The Rule

A **random experiment** is a process whose outcome can't be predicted
with certainty but can be repeated under the same conditions (a coin
toss, a die roll, a card draw). Its possible results are
**outcomes**; an **event** is something that may or may not happen
in the experiment.

An event is **certain** if it always happens, **impossible** if it
never does, **random** otherwise.

If in $n$ repetitions the event $A$ happened $m$ times, the number
$\frac{m}{n}$ is its **relative frequency**. For large $n$ it settles
around a number $P(A)$, the **probability** of $A$:

- $0 \leq P(A) \leq 1$;
- $P(\text{certain}) = 1$, $P(\text{impossible}) = 0$.

Two events are **equally likely** if there's no reason to expect one
more than the other. The event "$A$ doesn't happen" is the
**opposite** event $\bar{A}$, with $P(\bar{A}) = 1 - P(A)$.

## Worked Example

Classify: "a rolled die shows a number under $7$"; "it shows $7$"; "it
shows an even number". Then: a drawing pin was dropped $500$ times and
landed point-up $180$ times; estimate the probability of point-up and
of point-down. Then: if $P(\text{rain}) = 0.3$, what is the probability
of no rain?

- **Under $7$:** every face is $1$ to $6$ - certain, probability $1$.
  **Shows $7$:** impossible, $0$. **Even:** random - it may or may not.
- **Drawing pin.** Relative frequency of point-up: $\frac{180}{500} =
  0.36$. So $P(\text{up}) \approx 0.36$ and $P(\text{down}) \approx 0.64$. A pin
  isn't symmetric, so there's no reason to expect $\frac{1}{2}$ - only
  experiment can tell.
- **No rain:** $1 - 0.3 = 0.7$.

A coin, by contrast, *is* symmetric: heads and tails are equally
likely, and $\frac{1}{2}$ can be asserted before a single toss.

## Common Mistake

Reading probability as a promise about the short run: "$P(\text{heads})
= \frac{1}{2}$, so in $10$ tosses I'll get exactly $5$", or "$4$ tails in a
row, so heads is due". The coin has no memory - the next toss is
$\frac{1}{2}$ either way. Probability describes the *long-run*
frequency, and short runs wander. The other slip is treating all
outcomes as equally likely when they aren't: a pin, a thumbtack or a
biased die can only be measured, not assumed.

## The Takeaway

An event is certain, impossible or random; a random event's
probability is the number its relative frequency $\frac{m}{n}$ settles
toward, between $0$ and $1$. Symmetric things can be assigned
probabilities by reasoning; anything else, by counting many trials.
The opposite event has probability $1 - P(A)$.

## Check Yourself

1. Classify: "a drawn card is red or black"; "a drawn card is green";
   "a drawn card is an ace".
2. In $200$ throws a die showed $6$ exactly $34$ times. Find the
   relative frequency.
3. A factory found $12$ faulty items among $600$. Estimate the
   probability that an item is faulty. That it's fine?
4. Can a probability be $1.2$? Be $-0.1$?
5. $P(A) = 0.85$. Find $P(\bar{A})$.
6. Someone says "I tossed heads three times, so tails is now more
   likely than $\frac{1}{2}$." What's wrong?

> [!spoiler] Answers
>
> 1. Certain; impossible; random.
> 2. $0.17$.
> 3. $0.02$; $0.98$.
> 4. No; no - probabilities lie in $[0; 1]$.
> 5. $0.15$.
> 6. Tosses are independent - the coin doesn't remember; it's still
>    $\frac{1}{2}$.
