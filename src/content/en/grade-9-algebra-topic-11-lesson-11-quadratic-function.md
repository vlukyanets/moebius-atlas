---
title: "[S] The Function y = ax² + bx + c, Its Graph and Properties"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-9-lesson-9-properties-of-functions, grade-9-algebra-topic-10-lesson-10-simplest-graph-transformations, grade-8-algebra-topic-24-lesson-24-quadratic-trinomial]
---

## Why It Matters

A thrown ball, the profit of a business as the price changes, the
cable of a suspension bridge - all parabolas, all described by $y =
ax^2 + bx + c$. This is the most important function in school algebra
after the line: the quadratic equation of grade 8 was its zeros, the
quadratic inequality next topic is its sign, and optimisation - the
highest throw, the best price - is its vertex. Learning to sketch it
from the three coefficients is the skill.

## The Big Idea

Every quadratic $ax^2 + bx + c$ is a shifted, stretched copy of $x^2$:
complete the square and it becomes $a(x - m)^2 + n$. So the graph is a
parabola with vertex at $(m; n)$, opening up if $a > 0$ and down if $a <
0$, wider or narrower according to $|a|$. The vertex's $x$-coordinate
has a formula, $m = -\frac{b}{2a}$, and its $y$-coordinate is just the
function's value there. With the vertex, the direction and the zeros
(from the quadratic formula) the sketch draws itself.

## The Rule

A **quadratic function** is $y = ax^2 + bx + c$ with $a \neq 0$. Its graph
is a **parabola**.

- **Direction:** branches up if $a > 0$, down if $a < 0$.
- **Vertex:** $x_0 = -\frac{b}{2a}$, $y_0 = f(x_0)$. The axis of symmetry
  is the vertical line $x = x_0$.
- **Zeros:** the roots of $ax^2 + bx + c = 0$; two, one or none by the
  discriminant $D = b^2 - 4ac$.
- **$y$-intercept:** $(0; c)$.
- **Range:** $[y_0; +\infty)$ if $a > 0$; $(-\infty; y_0]$ if $a < 0$. The
  vertex gives the smallest (or largest) value.
- **Monotonicity** ($a > 0$): decreasing on $(-\infty; x_0]$, increasing on
  $[x_0; +\infty)$; reversed for $a < 0$.

**Sketching:** find the direction, the vertex, the zeros (if any) and
the $y$-intercept; use the symmetry to mirror points across the axis.

## Worked Example

Sketch $y = x^2 - 4x + 3$ and describe it. Then find the largest value
of $y = -2x^2 + 8x - 5$.

- **Direction:** $a = 1 > 0$, up.
- **Vertex:** $x_0 = -\frac{-4}{2} = 2$, $y_0 = 4 - 8 + 3 = -1$. Vertex
  $(2; -1)$, axis $x = 2$.
- **Zeros:** $x^2 - 4x + 3 = 0$, $x = 1$ and $x = 3$ (symmetric about $2$,
  as they must be).
- **$y$-intercept:** $(0; 3)$; its mirror across $x = 2$ is $(4; 3)$.
- **Properties:** range $[-1; +\infty)$; negative on $(1; 3)$, positive
  outside; decreasing on $(-\infty; 2]$, increasing on $[2; +\infty)$;
  smallest value $-1$.
- **Largest value.** $a = -2 < 0$, so the vertex is the top: $x_0 =
  -\frac{8}{-4} = 2$, $y_0 = -8 + 16 - 5 = 3$. The largest value is $3$.

Five points - vertex, two zeros, intercept and its mirror - are
enough for a good sketch.

## Common Mistake

Getting the sign of $x_0$ wrong: $x_0 = -\frac{b}{2a}$ has a minus, so for
$x^2 - 4x + 3$ it's $-\frac{-4}{2} = +2$, not $-2$. Check by symmetry - the
vertex sits midway between the zeros $1$ and $3$. The other slip is
assuming every parabola crosses the axis: $y = x^2 + 1$ has $D < 0$ and
no zeros, sitting entirely above the axis. Then the sketch uses the
vertex, the intercept and its mirror instead.

## The Takeaway

$y = ax^2 + bx + c$ is a parabola: up if $a > 0$, down if $a < 0$, vertex at
$x_0 = -\frac{b}{2a}$, symmetric about that line, zeros from the quadratic
formula. The vertex is where the smallest or largest value lives.
Sketch from vertex, zeros and intercept.

## Check Yourself

1. Find the vertex of $y = x^2 + 6x + 5$ and the direction of its
   branches.
2. Find the zeros and $y$-intercept of $y = x^2 + 6x + 5$.
3. Give the range of $y = -x^2 + 2x + 3$.
4. On which interval is $y = 2x^2 - 8x + 1$ decreasing?
5. Find the smallest value of $y = x^2 - 10x + 30$.
6. Someone finds the vertex of $y = x^2 - 8x + 7$ at $x = -4$. Correct it
   and check with the zeros.

> [!spoiler] Answers
>
> 1. $(-3; -4)$; up.
> 2. $-5, -1$; $(0; 5)$.
> 3. Vertex $(1; 4)$, $a < 0$: $(-\infty; 4]$.
> 4. $(-\infty; 2]$.
> 5. $x_0 = 5$, $y_0 = 25 - 50 + 30 = 5$.
> 6. $x_0 = -\frac{-8}{2} = 4$; zeros $1$ and $7$, midpoint $4$.
