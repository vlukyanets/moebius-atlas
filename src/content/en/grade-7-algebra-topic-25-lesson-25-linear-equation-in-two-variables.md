---
title: "[S] Linear Equation in Two Variables"
tag: DEF
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-2-lesson-2-linear-equation-in-one-variable]
---

## Why It Matters

"Notebooks cost $5$ and pens cost $3$; I spent $30$." How many of each?
Write it down: $5x + 3y = 30$. One equation, two unknowns - and it
doesn't have one answer but a whole family: $6$ notebooks and $0$ pens,
$3$ and $5$, $0$ and $10$. Equations in two variables describe every
situation where two quantities are tied by one condition, and their
solutions are pairs, not numbers. Systems of such equations are the
next topic; this one is about what a single such equation means.

## The Big Idea

A solution of $5x + 3y = 30$ isn't a number, it's a *pair* of numbers,
one for each variable, that makes the equality true. $(6; 0)$ works;
$(3; 5)$ works; $(1; 2)$ doesn't. Pick any $x$ you like, and the equation
becomes a linear equation in $y$ alone with one root - so there's a
solution for every $x$, infinitely many pairs in all.

Because the pairs are points on the coordinate plane, an equation in
two variables has a picture. And two such equations can be asked for a
*common* solution - which is where systems come from.

## The Rule

A **linear equation in two variables** is an equation of the form

$$
ax + by = c
$$

where $x$, $y$ are the variables and $a$, $b$, $c$ are numbers.

A **solution** is a pair of values $(x; y)$ that turns the equation
into a true equality. The pair is written with $x$ first.

If $a$ and $b$ aren't both zero, the equation has **infinitely many
solutions**: choose any value of one variable, and the other is
determined. To find solutions, it helps to **express one variable
through the other**: from $5x + 3y = 30$, $y = \frac{30 - 5x}{3}$.

Equivalent transformations are the same as for one variable: moving
terms across with a sign change, multiplying both sides by a non-zero
number.

## Worked Example

Is $(3; 5)$ a solution of $5x + 3y = 30$? Is $(4; 4)$? Then express $y$
through $x$, and find three solutions; then find all solutions of
$2x - y = 1$ with $x$ a natural number under $4$.

- **$(3; 5)$:** $15 + 15 = 30$. Yes. **$(4; 4)$:** $20 + 12 = 32 \neq 30$. No.
- **Express $y$:** $3y = 30 - 5x$, so $y = 10 - \frac{5}{3}x$.
- **Three solutions:** $x = 0 \Rightarrow y = 10$; $x = 3 \Rightarrow y = 5$;
  $x = 6 \Rightarrow y = 0$. Pairs $(0; 10)$, $(3; 5)$, $(6; 0)$. (For
  whole notebooks and pens, $x$ has to be a multiple of $3$.)
- **$2x - y = 1$:** $y = 2x - 1$; $x = 1, 2, 3$ give $(1; 1)$, $(2; 3)$,
  $(3; 5)$.

Two equations, one pair: is $(2; 3)$ a solution of both $x + y = 5$ and
$2x - y = 1$? $2 + 3 = 5$, and $4 - 3 = 1$. Yes to both - a common
solution.

## Common Mistake

Writing the pair in the wrong order, or giving a single number as the
answer. The solution of $2x - y = 1$ that has $x = 2$ is the *pair*
$(2; 3)$, not "$3$"; and $(3; 2)$ is a different pair, and not a
solution. Always write $(x; y)$, $x$ first, and always give both.

## The Takeaway

A linear equation in two variables has pairs for solutions, and
infinitely many of them: fix one variable and the other follows.
Express one through the other to generate solutions, and check a
candidate pair by substituting both numbers.

## Check Yourself

1. Is $(1; -2)$ a solution of $3x - y = 5$? Is $(2; 1)$?
2. Express $y$ through $x$ from $4x + 2y = 10$.
3. Find three solutions of $x - 3y = 6$.
4. Find the solution of $2x + 5y = 1$ with $x = -2$.
5. Find all solutions of $x + y = 4$ in natural numbers.
6. Someone says the solution of $x + y = 7$ is "$x = 3$." What's
   missing, and how many solutions are there?

> [!spoiler] Answers
>
> 1. Yes ($3 + 2 = 5$); yes ($6 - 1 = 5$).
> 2. $y = 5 - 2x$.
> 3. For example $(0; -2)$, $(6; 0)$, $(3; -1)$.
> 4. $-4 + 5y = 1$, $y = 1$: $(-2; 1)$.
> 5. $(1; 3)$, $(2; 2)$, $(3; 1)$.
> 6. The $y$: with $x = 3$, $y = 4$, the pair $(3; 4)$; and there are
>    infinitely many pairs.
