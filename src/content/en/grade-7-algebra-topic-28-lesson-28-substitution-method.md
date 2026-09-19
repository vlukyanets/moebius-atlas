---
title: "[S] Solving Systems by Substitution"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-27-lesson-27-system-of-two-linear-equations]
---

## Why It Matters

Drawing lines finds a crossing to the nearest square. Real answers -
$(\frac{7}{3}; -\frac{5}{6})$ - need algebra. The substitution method
is the first exact way to solve a system, and its idea is the one
you'd think of yourself: if one equation tells you what $y$ is in
terms of $x$, put that into the other equation, and now you have one
equation in one unknown, which you can solve.

## The Big Idea

Two unknowns are one too many. Use one equation to express one
unknown through the other - $y = 5 - x$, say - and then wherever $y$
appears in the second equation, write $5 - x$ instead. The second
equation now has only $x$ in it: a linear equation, solved in a line.
Once $x$ is known, $y = 5 - x$ gives $y$. Two steps: substitute, then
back-substitute.

The method always works. The only choice is which variable to
express, and the smart choice is whichever has a coefficient of $1$ or
$-1$, so no fractions appear.

## The Rule

**Substitution method:**

1. From one equation, **express one variable through the other**
   (pick the one with the simplest coefficient).
2. **Substitute** that expression into the other equation - you get an
   equation in one variable.
3. **Solve** it.
4. **Substitute the value found** into the expression from step 1 to
   get the other variable.
5. **Write the answer** as a pair $(x; y)$ and check in both original
   equations.

If step 3 gives a false statement like $0 = 5$, the system has no
solutions; if it gives $0 = 0$, infinitely many.

## Worked Example

Solve $\begin{cases} x + y = 5 \\ 2x - y = 1 \end{cases}$ and
$\begin{cases} 3x - 2y = 11 \\ x + 4y = -1 \end{cases}$.

- **First system.** From the first equation, $y = 5 - x$. Substitute:
  $2x - (5 - x) = 1$, so $2x - 5 + x = 1$, $3x = 6$, $x = 2$. Then $y = 5 - 2
  = 3$. Solution $(2; 3)$. Check: $2 + 3 = 5$, $4 - 3 = 1$.
- **Second.** The $x$ in the second equation has coefficient $1$: $x = -1 -
  4y$. Substitute into the first: $3(-1 - 4y) - 2y = 11$, so $-3 - 12y -
  2y = 11$, $-14y = 14$, $y = -1$. Then $x = -1 - 4(-1) = 3$. Solution
  $(3; -1)$. Check: $9 + 2 = 11$, $3 - 4 = -1$.

A system with none: $\begin{cases} y = 2x - 3 \\ 4x - 2y = 1 \end{cases}$.
Substitute: $4x - 2(2x - 3) = 1$, so $4x - 4x + 6 = 1$, $6 = 1$. False - no
solutions.

## Common Mistake

Substituting back into the same equation you expressed from. Taking
$y = 5 - x$ from the first equation and putting it into the *first*
equation gives $x + 5 - x = 5$, that is $5 = 5$ - true and useless. The
expression must go into the *other* equation, or nothing is learned.
The second slip: forgetting brackets when substituting, so $2x - (5 -
x)$ becomes $2x - 5 - x$.

## The Takeaway

Express one variable through the other from one equation, substitute
into the other, solve for one variable, back-substitute for the
second. Choose the variable with coefficient $\pm 1$ when you can, use
brackets when you substitute, and check the pair in both equations.

## Check Yourself

1. Solve $\begin{cases} y = 3x \\ x + y = 8 \end{cases}$.
2. Solve $\begin{cases} x - y = 4 \\ 2x + 3y = 3 \end{cases}$.
3. Solve $\begin{cases} 2x + y = 7 \\ 3x - 2y = 0 \end{cases}$.
4. Solve $\begin{cases} x + 2y = 1 \\ 2x + 4y = 2 \end{cases}$.
5. Two notebooks and a pen cost $13$; a notebook and two pens cost $11$.
   Find the prices by substitution.
6. Someone substitutes $y = 5 - x$ into $x + y = 5$ and gets $5 = 5$. What
   did they do wrong?

> [!spoiler] Answers
>
> 1. $x + 3x = 8$, $x = 2$, $y = 6$: $(2; 6)$.
> 2. $x = y + 4$; $2y + 8 + 3y = 3$, $y = -1$, $x = 3$: $(3; -1)$.
> 3. $y = 7 - 2x$; $3x - 14 + 4x = 0$, $x = 2$, $y = 3$: $(2; 3)$.
> 4. $x = 1 - 2y$; $2 - 4y + 4y = 2$, $0 = 0$: infinitely many.
> 5. $p = 13 - 2n$; $n + 26 - 4n = 11$, $n = 5$, $p = 3$.
> 6. They substituted into the equation they took $y$ from; it must go
>    into the other one.
