---
title: "[S] Solving Systems of Second-Degree Equations"
tag: MTD
track: school
grade: 9
subject: algebra
requires: [grade-7-algebra-topic-28-lesson-28-substitution-method, grade-8-algebra-topic-25-lesson-25-equations-reducible-to-quadratic]
---

## Why It Matters

Where does a line cross a circle? Two numbers with a given sum and a
given product? A rectangle of known perimeter and area? Each is two
equations in two unknowns where at least one has a square in it. The
substitution method from grade 7 still works - the difference is that
after substituting you get a quadratic, not a linear equation, and so
up to two solutions instead of one. Geometrically: a line meets a
parabola or a circle in up to two points.

## The Big Idea

Pick the equation from which one variable is easiest to isolate -
usually the linear one - express that variable, and substitute into
the other. You're left with one equation in one unknown, quadratic
(or reducible to it); solve, then go back and find the partner of
each root. Every root gives its own pair, and the solution of the
system is the list of pairs. When neither equation is linear, look
for something else to substitute: a product, a sum, or a whole
expression that appears in both.

## The Rule

A **system of second-degree equations** is one in which at least one
equation has degree two. A solution is a pair $(x; y)$ satisfying both.

**Substitution:**

1. from one equation (the linear one, if there is one), express one
   variable through the other;
2. substitute into the other equation;
3. solve the resulting equation in one variable;
4. for each root find the other variable from step 1;
5. write the answer as pairs.

**Other tools:** add or subtract the equations to eliminate a term;
introduce a new variable for an expression that appears in both
(e.g. $x + y = s$, $xy = p$ - then $x, y$ are the roots of $t^2 - st + p =
0$ by Vieta).

## Worked Example

Solve the system $x - y = 2$, $x^2 + y^2 = 20$. Then the system $x + y = 5$,
$xy = 6$. Then $x^2 + y^2 = 25$, $x^2 - y^2 = 7$.

- **First.** From the linear one, $x = y + 2$. Substitute: $(y + 2)^2 +
  y^2 = 20$, $2y^2 + 4y + 4 = 20$, $y^2 + 2y - 8 = 0$, $y = 2$ or $y = -4$.
  Partners: $x = 4$ or $x = -2$. Solutions: $(4; 2)$ and $(-2; -4)$.
  Check $(-2; -4)$: $-2 + 4 = 2$, $4 + 16 = 20$. Both pairs work.
- **Second.** Vieta: $x, y$ are the roots of $t^2 - 5t + 6 = 0$, i.e. $2$
  and $3$. Solutions: $(2; 3)$ and $(3; 2)$ - two, because the roles can
  swap. (Or substitute $y = 5 - x$: $x(5 - x) = 6$, same thing.)
- **Third.** Add: $2x^2 = 32$, $x^2 = 16$, $x = \pm 4$. Then $y^2 = 25 - 16 =
  9$, $y = \pm 3$. Every combination works: four solutions, $(\pm 4; \pm
  3)$.

The first system is a line crossing a circle of radius $\sqrt{20}$
at two points; the third, two curves meeting four times.

## Common Mistake

Finding $y = 2$ or $y = -4$ and pairing each with *every* $x$, or
pairing them with the wrong $x$. Each root has its own partner,
computed from the substitution equation: $y = 2$ goes with $x = 4$
only. Writing "$x = 4, -2$; $y = 2, -4$" as if any $x$ goes with any $y$
is wrong - $(4; -4)$ fails the first equation. The answer is a list of
*pairs*.

## The Takeaway

Express one variable from the linear equation, substitute, solve the
quadratic, find each root's partner, list the pairs. No linear
equation - add, subtract or substitute a whole expression. Expect up
to two solutions from a line and a curve, more from two curves.

## Check Yourself

1. Solve $y = x + 1$, $x^2 + y^2 = 25$.
2. Solve $x + y = 7$, $xy = 12$.
3. Solve $x - y = 1$, $x^2 - y^2 = 9$.
4. Solve $x^2 + y = 3$, $x + y = 1$.
5. Solve $x^2 + y^2 = 13$, $x^2 - y^2 = 5$.
6. Someone solves $x - y = 2$, $x^2 + y^2 = 20$, finds $y = 2, -4$ and
   $x = 4, -2$, and writes the answer as $(4; -4)$ and $(-2; 2)$. Fix it.

> [!spoiler] Answers
>
> 1. $(3; 4)$, $(-4; -3)$.
> 2. $(3; 4)$, $(4; 3)$.
> 3. Divide: $x + y = 9$; with $x - y = 1$: $(5; 4)$.
> 4. $y = 1 - x$: $x^2 - x + 1 = 3$, $x = 2, -1$: $(2; -1)$, $(-1; 2)$.
> 5. $x^2 = 9$, $y^2 = 4$: $(\pm 3; \pm 2)$, four solutions.
> 6. Pairs are $(4; 2)$ and $(-2; -4)$ - each $y$ with its own $x = y + 2$.
