---
title: "[S] System of Two Linear Equations in Two Variables"
tag: DEF
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-26-lesson-26-graph-of-a-linear-equation-in-two-variables]
---

## Why It Matters

Two notebooks and a pen cost $13$; a notebook and two pens cost $11$.
What does each cost? One equation for each fact, two unknowns - a
system. Whenever two conditions tie the same two quantities, you get
one, and the question is which pair satisfies both at once. Systems
are the standard tool for two-unknown problems, and this topic says
what solving one means and what the picture looks like.

## The Big Idea

Each equation on its own has a line of solutions. A pair that solves
*both* must lie on *both* lines - so it's where the lines cross. Two
lines in a plane cross once, or never (parallel), or everywhere (the
same line drawn twice). That's the whole classification: a system has
one solution, no solutions, or infinitely many, and the slopes tell
you which before you solve anything.

Drawing both lines and reading the crossing is the graphical method.
It's honest but imprecise - fine for $(3; 5)$, hopeless for
$(\frac{7}{13}; -\frac{2}{9})$. The next two topics give exact methods.

## The Rule

A **system of two linear equations in two variables** is two such
equations considered together, written with a brace:

$$
\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}
$$

A **solution** of the system is a pair $(x; y)$ that is a solution of
*each* equation. **To solve** a system is to find all its solutions or
show there are none.

**Graphical method:** draw both lines; each common point is a
solution.

- Lines cross at one point: **one solution**.
- Lines are parallel and distinct: **no solutions**.
- Lines coincide: **infinitely many solutions** - every point of the
  line.

With both equations in the form $y = kx + b$: different slopes give
one solution; equal slopes with different intercepts give none; equal
slopes and intercepts give infinitely many.

## Worked Example

Solve graphically
$\begin{cases} x + y = 5 \\ 2x - y = 1 \end{cases}$, then decide how many
solutions
$\begin{cases} 2x - y = 3 \\ 4x - 2y = 1 \end{cases}$ and
$\begin{cases} x + y = 2 \\ 3x + 3y = 6 \end{cases}$ have.

- **First system.** $y = 5 - x$ through $(0; 5)$, $(5; 0)$; $y = 2x - 1$
  through $(0; -1)$, $(1; 1)$. They cross at $(2; 3)$. Check: $2 + 3 = 5$,
  $4 - 3 = 1$. Solution $(2; 3)$.
- **Second.** $y = 2x - 3$ and $y = 2x - 0.5$: same slope $2$, different
  intercepts - parallel. No solutions.
- **Third.** The second equation is the first times $3$: the same line.
  Infinitely many solutions - every $(x; 2 - x)$.

Notebooks and pens: $\begin{cases} 2n + p = 13 \\ n + 2p = 11 \end{cases}$.
Lines through $(0; 13), (6.5; 0)$ and $(0; 5.5), (11; 0)$ cross at $(5; 3)$:
a notebook is $5$, a pen $3$.

## Common Mistake

Reading a crossing point off a rough sketch and not checking it.
Graph paper gives $(2; 3)$ convincingly; a freehand drawing might give
$(2; 3)$ or $(2.5; 2.5)$. A solution must satisfy *both* equations
exactly - substitute before you believe the picture. And a pair that
solves only one equation isn't a solution of the system at all.

## The Takeaway

A system's solution is a pair that satisfies every equation - the
point where the lines meet. One crossing, one solution; parallel
lines, none; the same line, infinitely many. Draw to see, substitute
to be sure.

## Check Yourself

1. Is $(1; 2)$ a solution of $\begin{cases} x + y = 3 \\ x - y = 1
   \end{cases}$?
2. Solve graphically $\begin{cases} y = x + 1 \\ y = 3 - x \end{cases}$.
3. How many solutions has $\begin{cases} y = 3x + 2 \\ y = 3x - 4
   \end{cases}$?
4. How many solutions has $\begin{cases} x - y = 1 \\ 2x - 2y = 2
   \end{cases}$?
5. Two lines cross at $(-1; 4)$. What is the solution of the
   corresponding system?
6. Someone reads the crossing of $x + y = 5$ and $2x - y = 1$ as
   $(2.5; 2.5)$. How do you tell it's wrong?

> [!spoiler] Answers
>
> 1. No - the second equation gives $1 - 2 = -1 \neq 1$.
> 2. $(1; 2)$.
> 3. None - parallel.
> 4. Infinitely many - the same line.
> 5. $(-1; 4)$.
> 6. Substitute: $5 - 2.5 = 2.5 \neq 1$; the true crossing is $(2; 3)$.
