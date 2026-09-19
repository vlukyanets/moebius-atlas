---
title: "[S] Systems of Linear Inequalities in One Variable"
tag: MTD
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-6-lesson-6-linear-inequalities-in-one-variable]
---

## Why It Matters

A medicine works above one dose and is dangerous above another; a
bridge needs a beam at least so long and at most so heavy. Two
conditions at once, both about the same quantity - that's a system of
inequalities, and its answer is where the two allowed stretches
overlap. It's also how a double inequality like $-1 < 2x + 3 \leq 7$ is
solved, and it's the tool the quadratic inequalities of this year
reduce to.

## The Big Idea

A system asks for numbers satisfying *both* inequalities. Solve each
one on its own - each gives an interval - then take the intersection:
draw both on one number line and keep the part shaded twice. That's
all there is to it; the care goes into the endpoints (included or
not, decided by both) and into the possibility that the two intervals
don't overlap, in which case the system has no solutions.

## The Rule

A **solution of a system** of inequalities in one variable is a value
of the variable satisfying every inequality of the system. To solve
the system is to find all such values or show there are none.

**Method:** solve each inequality separately; mark the solution sets
on one number line; the answer is their **intersection**.

A **double inequality** $a < f(x) < b$ is the system of $f(x) > a$ and
$f(x) < b$; when $f(x)$ is linear it can also be solved directly, doing
the same to all three parts (and flipping both signs on a negative
multiplier).

## Worked Example

Solve the system $2x - 1 > 3$, $5 - x \geq 1$. Then the system $x + 2 <
1$, $3x > 6$. Then the double inequality $-1 < 2x + 3 \leq 7$.

- **First system.** $2x > 4$, $x > 2$; and $-x \geq -4$, $x \leq 4$. On the
  line: $(2; +\infty)$ and $(-\infty; 4]$ overlap on $(2; 4]$. Answer:
  $(2; 4]$ - $2$ excluded, $4$ included.
- **Second system.** $x < -1$ and $x > 2$. The intervals $(-\infty; -1)$
  and $(2; +\infty)$ don't meet: no solutions.
- **Double inequality.** Subtract $3$ throughout: $-4 < 2x \leq 4$; divide
  by $2$: $-2 < x \leq 2$. Answer: $(-2; 2]$.

A double inequality with a negative coefficient: $1 \leq 3 - 2x < 5$.
Subtract $3$: $-2 \leq -2x < 2$; divide by $-2$ and flip both: $1 \geq x >
-1$, i.e. $(-1; 1]$.

## Common Mistake

Taking the union instead of the intersection - answering $(-\infty;
-1) \cup (2; +\infty)$ to the second system. A system is "and": a
number must satisfy *both*, and no number is both less than $-1$ and
greater than $2$. (The union would answer "or", a different question
called a *collection* of inequalities.) The other slip is at a shared
endpoint: in $(2; +\infty) \cap (-\infty; 4]$ the number $2$ is out,
because it fails the strict one, however the other treats it.

## The Takeaway

Solve each inequality, draw both, keep the overlap. No overlap means
no solutions. Endpoints are decided by the stricter condition. A
double inequality is a system in disguise - or, when linear, solved
in one pass on all three parts.

## Check Yourself

1. Solve the system $x - 3 < 1$, $2x \geq -6$.
2. Solve the system $3x + 1 > 7$, $x - 5 \leq -1$.
3. Solve the system $x > 4$, $x \leq 4$.
4. Solve $-3 \leq 4x + 1 < 9$.
5. Solve $2 < 5 - x \leq 6$.
6. Someone answers the system $x < 0$, $x > 3$ with $(-\infty; 0) \cup (3;
   +\infty)$. What's wrong?

> [!spoiler] Answers
>
> 1. $x < 4$ and $x \geq -3$: $[-3; 4)$.
> 2. $x > 2$ and $x \leq 4$: $(2; 4]$.
> 3. No solutions.
> 4. $-4 \leq 4x < 8$, $[-1; 2)$.
> 5. $-3 < -x \leq 1$, flip: $3 > x \geq -1$, $[-1; 3)$.
> 6. That's the union - "or". A system needs both, and nothing is both
>    negative and greater than $3$: no solutions.
