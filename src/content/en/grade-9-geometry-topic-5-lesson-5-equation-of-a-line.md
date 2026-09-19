---
title: "[S] Equation of a Line"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-3-lesson-3-midpoint-and-distance, grade-7-algebra-topic-26-lesson-26-graph-of-a-linear-equation-in-two-variables]
---

## Why It Matters

In algebra you drew the graph of $y = 2x + 1$ and it was a line. Now
turn that round: every line in the plane has an equation, and
geometry can be done by manipulating it. Where do two roads cross?
Solve two equations. Are two lines parallel? Compare their slopes.
Does a point lie on a line? Substitute. The equation of a line is the
second curve to get an equation, and with the circle it's enough for
most of coordinate geometry.

## The Big Idea

A line is fixed by two points, so its equation should be computable
from two points. The key quantity is the slope: rise over run, $k =
\frac{y_2 - y_1}{x_2 - x_1}$ - the same for any two points on the line,
which is what makes it a line. With the slope and one point you have
the line; with the slope and the $y$-intercept you have $y = kx + b$.
Vertical lines have no slope (run is zero) and get their own form, $x
= a$. The general form $ax + by + c = 0$ covers every line, vertical
ones included.

## The Rule

**Theorem.** Every line in the coordinate plane has an equation of
the form

$$
ax + by + c = 0
$$

with $a, b$ not both zero; conversely every such equation is a line.

Special forms:

- **Slope-intercept:** $y = kx + b$ ($b \neq 0$ in $ax + by + c = 0$). $k$ is
  the **slope**, $b$ the $y$-intercept.
- **Vertical line** through $(a; 0)$: $x = a$. **Horizontal** through $(0;
  b)$: $y = b$.
- **Through two points** $(x_1; y_1)$, $(x_2; y_2)$ with $x_1 \neq x_2$: slope
  $k = \frac{y_2 - y_1}{x_2 - x_1}$, then $y - y_1 = k(x - x_1)$.

Two lines $y = k_1 x + b_1$ and $y = k_2 x + b_2$ are **parallel** when
$k_1 = k_2$ (and $b_1 \neq b_2$), and they **intersect** otherwise - at
the solution of the system.

## Worked Example

Find the equation of the line through $A(1; 2)$ and $B(3; 8)$. Is
$C(5; 14)$ on it? Then find the line through $(2; -1)$ parallel to $y =
-3x + 4$. Then find where $y = 2x - 1$ and $x + y = 5$ meet. Then: the
line through $(4; 1)$ and $(4; -3)$.

- **Through $A, B$.** $k = \frac{8 - 2}{3 - 1} = 3$. $y - 2 = 3(x - 1)$, so $y = 3x -
  1$. General form: $3x - y - 1 = 0$.
- **$C(5; 14)$:** $3 \cdot 5 - 1 = 14$ - yes.
- **Parallel to $y = -3x + 4$:** same slope $-3$: $y + 1 = -3(x - 2)$, $y =
  -3x + 5$.
- **Intersection.** Substitute $y = 2x - 1$ into $x + y = 5$: $3x - 1 = 5$,
  $x = 2$, $y = 3$. The point $(2; 3)$.
- **Vertical.** Both points have $x = 4$; the line is $x = 4$. No slope
  - the formula would divide by zero.

Slope reads as direction: positive climbs to the right, negative
falls, zero is horizontal.

## Common Mistake

Using the slope formula on a vertical line and dividing by zero - or
writing a vertical line as $y = $ something. Two points with the same
$x$ give $x = $ that value. The other slip is the sign in the
point-slope form: through $(1; 2)$ with slope $3$ is $y - 2 = 3(x - 1)$,
subtracting the coordinates, not adding. Check by substituting the
point: $2 - 2 = 3(1 - 1)$, both zero.

## The Takeaway

Every line is $ax + by + c = 0$; non-vertical ones are $y = kx + b$ with
slope $k$ = rise over run. Two points give the slope, the slope and a
point give the line. Parallel means equal slopes; intersection means
solving the system.

## Check Yourself

1. Find the slope of the line through $(0; 1)$ and $(4; 9)$, and its
   equation.
2. Write the equation of the line through $(-2; 3)$ with slope $-\frac{1}{2}$.
3. Is $(3; 7)$ on $y = 2x + 1$? On $x - y + 4 = 0$?
4. Find the intersection of $y = x + 2$ and $y = -x + 6$.
5. Write the line through $(5; -1)$ parallel to $y = 4x$; the vertical
   line through the same point.
6. Someone writes the line through $(2; 3)$ and $(2; 8)$ as $y = 5x + \dots$
   and gets stuck. What is it?

> [!spoiler] Answers
>
> 1. $k = 2$; $y = 2x + 1$.
> 2. $y - 3 = -\frac{1}{2}(x + 2)$, i.e. $y = -\frac{1}{2}x + 2$.
> 3. Yes; yes ($3 - 7 + 4 = 0$).
> 4. $(2; 4)$.
> 5. $y = 4x - 21$; $x = 5$.
> 6. $x = 2$ - a vertical line has no slope.
