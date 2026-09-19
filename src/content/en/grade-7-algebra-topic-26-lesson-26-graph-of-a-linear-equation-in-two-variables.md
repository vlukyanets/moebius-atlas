---
title: "[S] Graph of a Linear Equation in Two Variables"
tag: DEF
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-25-lesson-25-linear-equation-in-two-variables, grade-7-algebra-topic-24-lesson-24-linear-function]
---

## Why It Matters

The solutions of $5x + 3y = 30$ are pairs, and pairs are points. Plot
them all and they line up - literally: the solution set of a linear
equation in two variables is a straight line. That picture is what
makes systems of equations visible: two equations, two lines, and
their common solution is where the lines cross. It's the bridge
between the algebra of equations and the geometry of the plane.

## The Big Idea

Solve $5x + 3y = 30$ for $y$: $y = -\frac{5}{3}x + 10$. That's a linear
function, and its graph is a line with slope $-\frac{5}{3}$ through
$(0; 10)$. Every point on that line is a solution of the original
equation, and every solution is a point on it. So the equation and
the line are the same set of pairs, written two ways.

Two special cases don't rearrange into $y = kx + b$. If $b = 0$ - no $y$ -
the equation is $ax = c$, which fixes $x$ and lets $y$ be anything: a
vertical line. If $a = 0$, it's $by = c$: a horizontal line. Those are
still lines, just not graphs of functions of $x$.

## The Rule

The **graph** of an equation in two variables is the set of all points
$(x; y)$ whose coordinates are solutions of the equation.

The graph of a linear equation $ax + by = c$ with $a$, $b$ not both zero
is a **straight line**:

- if $b \neq 0$, solve for $y$: $y = -\frac{a}{b}x + \frac{c}{b}$, a linear
  function; plot two points;
- if $b = 0$ (and $a \neq 0$): $x = \frac{c}{a}$, a **vertical** line;
- if $a = 0$ (and $b \neq 0$): $y = \frac{c}{b}$, a **horizontal** line.

Convenient points are the intercepts: set $x = 0$ to find where the
line meets the $y$-axis, and $y = 0$ for the $x$-axis.

If $a = b = 0$: the graph is the whole plane when $c = 0$ and empty
otherwise.

## Worked Example

Draw the graphs of $5x + 3y = 30$, $2x - y = 1$, $x = -2$ and $y = 3$, and
find where the first two cross.

- **$5x + 3y = 30$.** Intercepts: $x = 0 \Rightarrow y = 10$; $y = 0
  \Rightarrow x = 6$. Line through $(0; 10)$ and $(6; 0)$.
- **$2x - y = 1$.** $y = 2x - 1$: through $(0; -1)$ and $(1; 1)$.
- **$x = -2$.** Every point with abscissa $-2$: a vertical line through
  $(-2; 0)$.
- **$y = 3$.** A horizontal line through $(0; 3)$.
- **Crossing of the first two.** From the drawing, near $(3; 5)$. Check:
  $15 + 15 = 30$ and $6 - 5 = 1$. Exactly $(3; 5)$ - the one pair that
  solves both.

Does $(4; 4)$ lie on the first line? $20 + 12 = 32 \neq 30$: no.

## Common Mistake

Plotting $x = -2$ as a point on the $x$-axis, or as a horizontal line.
$x = -2$ says nothing about $y$, so $y$ is free: all the points $(-2;
y)$, a vertical line. Likewise $y = 3$ is horizontal, not a point. A
single number fixes one coordinate and frees the other - that's a
line, standing or lying.

## The Takeaway

The graph of $ax + by = c$ is a line: rearrange to $y = kx + b$ and plot
two points, or recognise a vertical line ($x = $ number) or a horizontal
one ($y = $ number). Where two such lines cross is the pair that
solves both equations.

## Check Yourself

1. Draw the graph of $x + y = 4$ using its intercepts.
2. Draw the graph of $3x - 2y = 6$.
3. What does the graph of $y = -1$ look like? And $x = 5$?
4. Does $(2; 2)$ lie on the graph of $x + y = 4$? Does $(5; -1)$?
5. Find the intersection of $x + y = 4$ and $x - y = 2$ by drawing, then
   check by substitution.
6. Someone draws $x = 5$ as a horizontal line through $(0; 5)$. What
   should it be?

> [!spoiler] Answers
>
> 1. Through $(0; 4)$ and $(4; 0)$.
> 2. Through $(0; -3)$ and $(2; 0)$.
> 3. A horizontal line through $(0; -1)$; a vertical line through $(5; 0)$.
> 4. Yes; yes.
> 5. $(3; 1)$: $3 + 1 = 4$, $3 - 1 = 2$.
> 6. A vertical line through $(5; 0)$ - $x$ is fixed, $y$ is free.
