---
title: "[S] Solving Problems with Equations Reducible to Quadratic"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-25-lesson-25-equations-reducible-to-quadratic, grade-8-algebra-topic-23-lesson-23-quadratic-equation-as-a-model]
---

## Why It Matters

A boat goes $30$ km downstream and back in $4$ hours; the current is
$2$ km/h - what's the boat's speed? In grade 7 you set that up as
$\frac{30}{v + 2} + \frac{30}{v - 2} = 4$ and could only check a guessed
answer. Now the rational equation clears to a quadratic, and you can
*solve* it. Motion on a river, two workers finishing a job, a pipe
that fills faster than another - the classic problems of this kind
all land here.

## The Big Idea

The story gives a rational equation because a *rate* is a quotient:
time is distance over speed, and speed is the unknown; or the rate of
work is one over the time, and the time is the unknown. Two such
quotients added or compared give an equation with the unknown in two
denominators. Multiply through by the common denominator, and the
result is a quadratic - usually with one root the story keeps and one
it throws away.

The discipline from the last two topics applies twice: the domain
(speeds aren't $\pm 2$), and the story (speeds aren't negative).

## The Rule

To solve such a problem:

1. **name the unknown** - typically the speed or the time of one
   participant;
2. **express** the other quantities; the standard shapes are
   $t = \frac{s}{v}$ for motion and $\frac{1}{t}$ for a rate of work;
3. **write the equation** - a rational equation - and note its
   **domain**;
4. **clear denominators**, obtain a quadratic, solve it;
5. **discard** roots outside the domain and roots the story rejects;
6. **answer** the question.

Templates: downstream $v + c$, upstream $v - c$; two workers,
$\frac{1}{x} + \frac{1}{x + d} = \frac{1}{T}$; two speeds differing by $d$
over the same distance, $\frac{s}{v} - \frac{s}{v + d} = \Delta t$.

## Worked Example

A boat goes $36$ km downstream and $36$ km back in $5$ hours. The current
is $3$ km/h. Find the boat's own speed.

- **Unknown:** the boat's speed $v$ km/h, $v > 3$ (it must beat the
  current).
- **Times:** downstream $\frac{36}{v + 3}$, upstream $\frac{36}{v - 3}$.
- **Equation:** $\frac{36}{v + 3} + \frac{36}{v - 3} = 5$; domain $v \neq \pm
  3$.
- **Clear:** $36(v - 3) + 36(v + 3) = 5(v^2 - 9)$, so $72v = 5v^2 - 45$,
  $5v^2 - 72v - 45 = 0$.
- **Solve:** $D = 5184 + 900 = 6084 = 78^2$, $v = \frac{72 \pm 78}{10}$: $15$
  or $-0.6$.
- **Filter:** a speed can't be negative, and $v = 15 > 3$. $v = 15$ km/h.
- **Check:** $\frac{36}{18} + \frac{36}{12} = 2 + 3 = 5$.

Two workers: one takes $5$ days longer than the other; together, $6$
days. $\frac{1}{x} + \frac{1}{x + 5} = \frac{1}{6}$: $6(x + 5) + 6x = x(x +
5)$, $x^2 - 7x - 30 = 0$, $x = 10$ or $-3$: $10$ and $15$ days.

## Common Mistake

Forgetting that the unknown speed has to exceed the current. A root
like $v = 1$ with current $3$ would put $v - 3 < 0$ - an upstream "time"
that's negative. The domain excludes only $v = \pm 3$; the *story*
excludes everything below $3$. Both filters run. And as always, a
negative time or speed is discarded, not reported.

## The Takeaway

Rates are quotients, so rate problems give rational equations; clear
the denominators and a quadratic appears. Solve it, then filter the
roots twice - by the domain and by the story - and answer with what
survives.

## Check Yourself

1. A boat goes $20$ km downstream and back in $\frac{9}{4}$ hours; the
   current is $2$ km/h. Set up the equation and find the boat's speed.
2. Two pipes fill a pool in $12$ hours together; alone, one takes $10$
   hours longer than the other. Find each time.
3. A cyclist covers $24$ km; at $2$ km/h faster he'd save $1$ hour. Find
   his speed.
4. Two consecutive natural numbers have reciprocals summing to
   $\frac{7}{12}$. Find them.
5. A boat's speed is $12$ km/h; it goes $32$ km downstream and back in
   $6$ hours. Find the current.
6. Someone finds $v = 15$ and $v = -0.6$ for the boat and reports both.
   What's the rule for keeping roots?

> [!spoiler] Answers
>
> 1. $\frac{20}{v + 2} + \frac{20}{v - 2} = \frac{9}{4}$: $160v = 9v^2 - 36$,
>    $9v^2 - 160v - 36 = 0$, $v = 18$ km/h (check: $1 + 1.25 = 2.25$).
> 2. $\frac{1}{x} + \frac{1}{x + 10} = \frac{1}{12}$: $x^2 - 14x - 120 = 0$,
>    $x = 20$: $20$ and $30$ hours.
> 3. $\frac{24}{v} - \frac{24}{v + 2} = 1$: $v^2 + 2v - 48 = 0$, $v = 6$ km/h.
> 4. $\frac{1}{n} + \frac{1}{n + 1} = \frac{7}{12}$: $7n^2 - 17n - 12 = 0$, $n =
>    3$: $3$ and $4$.
> 5. $\frac{32}{12 + c} + \frac{32}{12 - c} = 6$: $768 = 6(144 - c^2)$, $c^2 =
>    16$, $c = 4$ km/h.
> 6. Keep only roots in the domain that make sense in the story - a
>    speed is positive, so $15$.
