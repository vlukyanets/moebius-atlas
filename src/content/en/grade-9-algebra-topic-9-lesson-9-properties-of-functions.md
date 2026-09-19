---
title: "[S] Properties of a Function"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-8-lesson-8-function-domain-and-range, grade-9-algebra-topic-5-lesson-5-number-intervals]
---

## Why It Matters

A graph tells a story - where the profit crosses zero, where the
temperature is rising, where it's above freezing. Reading that story
off a graph is a skill, and it needs names for what you see: *zeros*,
*intervals of constant sign*, *increasing* and *decreasing*. These
four properties are how any function is described from now on,
whether it's the parabola next month or the sine wave in two years.

## The Big Idea

Look at a graph left to right, like reading. Where does it cross the
$x$-axis? Those are the zeros - the inputs that give output $0$.
Between the zeros the graph is either entirely above the axis or
entirely below - intervals where the function is positive or
negative. And as you move right, the graph goes up or comes down -
the function increases or decreases. Every one of these is read off
the graph by eye, and each has an exact definition to fall back on
when the graph isn't there.

## The Rule

Let $f$ be a function with domain $D$.

- A **zero** of $f$ is a value $x_0$ with $f(x_0) = 0$. On the graph:
  where it meets the $x$-axis. Found by solving $f(x) = 0$.
- An **interval of constant sign** is an interval of the domain on
  which $f$ takes only positive values ($f(x) > 0$: graph above the
  axis) or only negative values ($f(x) < 0$: below).
- $f$ is **increasing** on an interval if a larger $x$ gives a larger
  $y$: for $x_1 < x_2$ in it, $f(x_1) < f(x_2)$. Graph rises left to
  right.
- $f$ is **decreasing** on an interval if a larger $x$ gives a smaller
  $y$: $x_1 < x_2$ implies $f(x_1) > f(x_2)$. Graph falls.

Also read off: the domain (the graph's shadow on the $x$-axis), the
range (its shadow on the $y$-axis), and the largest and smallest
values, if any.

## Worked Example

Describe $y = x^2 - 4$: zeros, sign intervals, monotonicity. Then $y =
\frac{6}{x}$. Then $y = 2x - 6$.

- **$x^2 - 4$.** Zeros: $x^2 - 4 = 0$, $x = \pm 2$. Sign: the parabola is
  below the axis between the zeros, so $f < 0$ on $(-2; 2)$ and $f > 0$ on
  $(-\infty; -2) \cup (2; +\infty)$. Monotonicity: decreasing on $(-\infty;
  0]$, increasing on $[0; +\infty)$. Smallest value $-4$ at $x = 0$; no
  largest.
- **$\frac{6}{x}$.** Domain $x \neq 0$; no zeros (a fraction is zero only
  when the numerator is). $f > 0$ on $(0; +\infty)$, $f < 0$ on $(-\infty;
  0)$. Decreasing on each of $(-\infty; 0)$ and $(0; +\infty)$ - but not
  "decreasing everywhere": $f(-1) = -6 < f(1) = 6$.
- **$2x - 6$.** Zero at $x = 3$; $f < 0$ on $(-\infty; 3)$, $f > 0$ on $(3;
  +\infty)$; increasing on all of $\mathbb{R}$.

Given only a graph, the same questions are answered by looking:
crossings, above/below, up/down.

## Common Mistake

Saying $y = \frac{6}{x}$ is decreasing on its whole domain. It falls on
each half separately, but jumps from very negative to very positive
across $x = 0$, so $-1 < 1$ with $f(-1) < f(1)$ - the definition fails.
Monotonicity is stated *per interval*, and a gap in the domain
separates the intervals. The other slip is reading the sign interval
with the endpoints in: on $[-2; 2]$ the function $x^2 - 4$ is not
negative - it's zero at the ends. Sign intervals are open at the
zeros.

## The Takeaway

Zeros: where $f(x) = 0$, the crossings. Sign intervals: between the
zeros (and the domain gaps), above or below. Increasing: rises to the
right; decreasing: falls - stated per interval, never across a hole.
All of it readable from the graph and definable without it.

## Check Yourself

1. Find the zeros of $y = x^2 - 9$ and of $y = 3x + 12$.
2. On which intervals is $y = x^2 - 9$ negative?
3. Where is $y = -2x + 4$ positive? Is it increasing or decreasing?
4. Is $y = x^2$ increasing on $(-\infty; +\infty)$? On $[0; +\infty)$?
5. Does $y = \frac{1}{x}$ have zeros? Where is it negative?
6. Someone says "$y = -\frac{2}{x}$ is increasing, because $-\frac{2}{-1} = 2
   < -\frac{2}{1} = -2$ is false, so $f(-1) > f(1)$..." - and gets tangled.
   Sort it out: on which intervals is it increasing?

> [!spoiler] Answers
>
> 1. $\pm 3$; $-4$.
> 2. $(-3; 3)$.
> 3. Positive on $(-\infty; 2)$; decreasing.
> 4. No; yes.
> 5. No zeros; negative on $(-\infty; 0)$.
> 6. Increasing on $(-\infty; 0)$ and on $(0; +\infty)$ separately - not on
>    the whole domain, since $f(-1) = 2 > f(1) = -2$.
