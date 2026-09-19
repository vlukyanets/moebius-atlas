---
title: "[S] Simplest Transformations of Graphs of Functions"
tag: MTD
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-8-lesson-8-function-domain-and-range]
---

## Why It Matters

You can draw $y = x^2$ from memory. Can you draw $y = (x - 3)^2 + 1$? You
can - it's the same parabola picked up and moved three to the right
and one up, and no table of values is needed. A handful of rules say
how a change in the formula moves, flips or stretches the graph, and
with them every quadratic, every $\frac{k}{x - a} + b$ and every shifted
root is drawn in seconds. Next topic uses this to draw *any*
parabola.

## The Big Idea

Adding a constant to the *output* raises the whole graph: $y = f(x) + b$
is $f$ moved $b$ up (down if $b < 0$). Adding a constant to the *input*
shifts it sideways - and against intuition: $y = f(x - a)$ is $f$ moved
$a$ to the **right**, because the graph reaches the value $f(0)$ only
when $x - a = 0$, at $x = a$. A minus sign in front flips the graph
over the $x$-axis; a factor in front stretches it vertically. Each
change in the formula is one motion of the picture.

## The Rule

From the graph of $y = f(x)$:

- $y = f(x) + b$ - shift **up** by $b$ ($b > 0$) or down by $|b|$ ($b < 0$).
- $y = f(x - a)$ - shift **right** by $a$ ($a > 0$) or left by $|a|$ ($a <
  0$). Note $f(x + 2)$ is a shift *left* by $2$.
- $y = -f(x)$ - reflect in the $x$-axis.
- $y = k f(x)$, $k > 0$ - stretch vertically by $k$ ($k > 1$) or squeeze
  toward the axis ($0 < k < 1$).
- $y = f(-x)$ - reflect in the $y$-axis.

Combined transformations are applied from the inside out: first the
horizontal shift, then the stretch and reflection, then the vertical
shift.

## Worked Example

Draw $y = (x - 3)^2 + 1$; $y = -\sqrt{x + 2}$; $y = \frac{2}{x} - 1$.

- **$(x - 3)^2 + 1$.** Start with $y = x^2$, vertex at $(0; 0)$. The $x - 3$
  moves it right $3$: vertex $(3; 0)$. The $+1$ moves it up: vertex $(3;
  1)$. Same shape, opening up.
- **$-\sqrt{x + 2}$.** Start with $y = \sqrt{x}$, starting at $(0; 0)$ and
  rising right. The $x + 2$ moves it left $2$: starts at $(-2; 0)$. The
  minus flips it under the axis: it now falls to the right from $(-2;
  0)$. Domain $x \geq -2$, range $y \leq 0$.
- **$\frac{2}{x} - 1$.** Start with the hyperbola $y = \frac{2}{x}$, then
  move it down $1$. The horizontal asymptote drops from $y = 0$ to $y =
  -1$; the vertical one stays at $x = 0$.

Reading the other way: a parabola with vertex $(-1; 4)$ opening down
with the shape of $y = x^2$ is $y = -(x + 1)^2 + 4$.

## Common Mistake

Shifting the wrong way horizontally. $y = (x + 2)^2$ *looks* like it
should move right - the sign is plus - but it moves left: the vertex
is where $x + 2 = 0$, at $x = -2$. Think "where does the inside become
zero" and the direction takes care of itself. The vertical shift is
the honest one - $+1$ really is up.

## The Takeaway

$+b$ outside: up. $x - a$ inside: right by $a$ (so $x + a$ is left).
Minus in front: flip over the $x$-axis. Factor in front: stretch.
Apply inside first, outside last, and locate the key point - vertex,
start, centre - to place the picture.

## Check Yourself

1. How is the graph of $y = x^2 - 5$ obtained from $y = x^2$?
2. How is $y = (x + 4)^2$ obtained from $y = x^2$? Where is its vertex?
3. Give the vertex of $y = (x - 1)^2 - 3$.
4. Describe how to draw $y = \sqrt{x - 1} + 2$; give its domain and range.
5. What are the asymptotes of $y = \frac{1}{x + 3}$?
6. Someone draws $y = (x - 2)^2$ with vertex at $(-2; 0)$. Fix it.

> [!spoiler] Answers
>
> 1. Shift down $5$.
> 2. Shift left $4$; vertex $(-4; 0)$.
> 3. $(1; -3)$.
> 4. $\sqrt{x}$ moved right $1$ and up $2$; domain $[1; +\infty)$, range
>    $[2; +\infty)$.
> 5. $x = -3$ and $y = 0$.
> 6. Vertex is where $x - 2 = 0$: $(2; 0)$ - shift right, not left.
