---
title: "[S] Number Intervals"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-1-lesson-1-numerical-inequalities, grade-8-algebra-topic-15-lesson-15-sets-and-number-sets]
---

## Why It Matters

The solutions of an inequality are a stretch of the number line, and
"all $x$ greater than $3$" is a clumsy way to write one. Number
intervals are the notation: $(3; +\infty)$ says it in five symbols and
draws itself. Every answer to an inequality from here on is written
this way, and so are domains of functions, ranges, and the intervals
where a function is positive or increasing. It's a small alphabet you
need fluent.

## The Big Idea

A stretch of the number line is described by its two ends and by
whether each end is included. Round brackets mean "up to but not
including", square brackets mean "including". An end can be
infinite - the stretch runs off forever - and an infinite end always
gets a round bracket, because infinity isn't a number you can reach.
On the picture, an included end is a filled dot and an excluded one
an empty circle, and the stretch itself is shaded.

Behind the notation is set language: an interval is the *set* of
numbers satisfying an inequality, and two intervals can be
intersected (numbers in both) or united (numbers in either).

## The Rule

For $a < b$:

- $[a; b]$ - the set of $x$ with $a \leq x \leq b$ (a **segment**, both
  ends included);
- $(a; b)$ - $a < x < b$ (an **interval**, ends excluded);
- $[a; b)$ and $(a; b]$ - one end included (**half-intervals**);
- $(a; +\infty)$ - $x > a$; $[a; +\infty)$ - $x \geq a$;
- $(-\infty; b)$ - $x < b$; $(-\infty; b]$ - $x \leq b$;
- $(-\infty; +\infty)$ - all real numbers, $\mathbb{R}$.

Infinity always takes a round bracket.

The **intersection** $A \cap B$ of two intervals is the set of numbers
in both; the **union** $A \cup B$ is the set of numbers in at least
one. On a picture, intersection is where the shadings overlap; union
is everything shaded.

## Worked Example

Write as intervals: $x \geq -2$; $-1 < x \leq 4$; $x < 0$. Then find
$[-3; 2] \cap (0; 5)$, $[-3; 2] \cup (0; 5)$ and $(-\infty; 1) \cap [1; 3]$.

- **$x \geq -2$:** $[-2; +\infty)$. **$-1 < x \leq 4$:** $(-1; 4]$. **$x < 0$:**
  $(-\infty; 0)$.
- **Intersection $[-3; 2] \cap (0; 5)$.** Draw both: they overlap from
  $0$ to $2$. Is $0$ in both? Not in $(0; 5)$ - excluded. Is $2$? Yes in
  both. So $(0; 2]$.
- **Union $[-3; 2] \cup (0; 5)$.** Everything shaded runs from $-3$
  (included) to $5$ (excluded): $[-3; 5)$.
- **$(-\infty; 1) \cap [1; 3]$.** The first stops just before $1$, the
  second starts at $1$: no number is in both. The intersection is
  **empty**, $\varnothing$.

A bracket at a shared endpoint is decided by *both* sets for an
intersection, by *either* for a union.

## Common Mistake

Square brackets at infinity - $[3; +\infty]$. Infinity is not a number
and can't be included; it's always $[3; +\infty)$. And mixing up which
end gets which bracket in something like $x \leq 4$: it's $(-\infty; 4]$,
the square bracket next to the $4$, since $4$ is in. Reading the
bracket off the inequality sign - $\leq$ is square, $<$ is round - keeps
it straight.

## The Takeaway

An interval is a stretch of the line named by its ends: square
bracket for an included end, round for an excluded one, always round
at infinity. Intersect for "both", unite for "either", and decide a
shared endpoint by checking both sets.

## Check Yourself

1. Write $x > 7$ and $-3 \leq x < 0$ as intervals.
2. Write $[2; 9)$ and $(-\infty; -1]$ as inequalities.
3. Which of $-1, 0, 5$ belong to $(-1; 5]$?
4. Find $[0; 4] \cap [2; 6]$ and $[0; 4] \cup [2; 6]$.
5. Find $(-\infty; 3) \cap (1; +\infty)$.
6. Someone writes the solutions of $x \geq 1$ as $[1; \infty]$. Two things
   are off - name them.

> [!spoiler] Answers
>
> 1. $(7; +\infty)$; $[-3; 0)$.
> 2. $2 \leq x < 9$; $x \leq -1$.
> 3. $0$ and $5$.
> 4. $[2; 4]$; $[0; 6]$.
> 5. $(1; 3)$.
> 6. The square bracket at infinity, and the missing $+$ sign: $[1;
>    +\infty)$.
