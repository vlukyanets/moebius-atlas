---
title: "[S] Quadratic Inequalities"
tag: MTD
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-11-lesson-11-quadratic-function, grade-9-algebra-topic-6-lesson-6-linear-inequalities-in-one-variable]
---

## Why It Matters

"For which prices is the profit positive?" - if profit is a
quadratic in the price, that's a quadratic inequality. So is "when
is the ball above 10 metres", and so is the domain of $\sqrt{x^2 - 4}$.
Solving one takes no new algebra: it's the parabola of the last
topic and the question "where is it above the axis?" A picture
answers it.

## The Big Idea

$ax^2 + bx + c > 0$ asks: for which $x$ is the parabola above the
$x$-axis? Find where it crosses (the zeros) and which way it opens
(the sign of $a$), sketch, and read off. A parabola opening up is
below the axis *between* its zeros and above *outside* them; opening
down, the other way round. If there are no zeros, the parabola is
entirely on one side of the axis - the inequality holds for every $x$
or for none. You don't need the vertex or a careful drawing, only the
zeros and the direction.

## The Rule

A **quadratic inequality** is $ax^2 + bx + c > 0$ (or $<$, $\geq$, $\leq$),
$a \neq 0$.

**Method:**

1. Find the zeros of $ax^2 + bx + c$ (solve the equation; note $D$).
2. Sketch the parabola: mark the zeros on an axis, branches up if $a >
   0$, down if $a < 0$.
3. Read off the intervals where the parabola is above ($> 0$) or
   below ($< 0$) the axis. For $\geq$ / $\leq$ include the zeros.

Cases for $a > 0$ with zeros $x_1 < x_2$: $> 0$ on $(-\infty; x_1) \cup (x_2;
+\infty)$, $< 0$ on $(x_1; x_2)$. With one zero $x_1$ ($D = 0$): $> 0$
everywhere except $x_1$, $< 0$ nowhere. With no zeros ($D < 0$): $> 0$
for all $x$, $< 0$ never. For $a < 0$ everything reverses.

## Worked Example

Solve $x^2 - 5x + 6 > 0$; $-x^2 + 4x - 3 \geq 0$; $x^2 + 2x + 5 < 0$; $x^2 - 6x +
9 \leq 0$.

- **$x^2 - 5x + 6 > 0$.** Zeros $2, 3$; $a > 0$, up. Above the axis outside
  the zeros: $(-\infty; 2) \cup (3; +\infty)$.
- **$-x^2 + 4x - 3 \geq 0$.** Zeros: $x^2 - 4x + 3 = 0$, $x = 1, 3$; $a < 0$,
  down. Above the axis between the zeros, endpoints included: $[1; 3]$.
- **$x^2 + 2x + 5 < 0$.** $D = 4 - 20 < 0$: no zeros, $a > 0$, the parabola
  is entirely above. Never below: no solutions.
- **$x^2 - 6x + 9 \leq 0$.** $(x - 3)^2 \leq 0$: a square is never negative
  and is zero at $x = 3$. Solution: $x = 3$ alone.

Domain of $\sqrt{x^2 - 4}$: $x^2 - 4 \geq 0$, zeros $\pm 2$, up: $(-\infty; -2]
\cup [2; +\infty)$.

## Common Mistake

Solving $x^2 > 4$ as $x > 2$ - "take the root of both sides". That
loses half the answer: $x = -3$ has $9 > 4$. The parabola $x^2 - 4$ is
above the axis on *both* sides, $(-\infty; -2) \cup (2; +\infty)$. Always
go through the zeros and the sketch. The other slip is forgetting the
direction: $-x^2 + 4x - 3 \geq 0$ with zeros $1, 3$ is *between* them,
because the parabola opens down.

## The Takeaway

Zeros, direction, sketch, read. Up: negative between the zeros,
positive outside. Down: the reverse. No zeros: everything or
nothing. Include the zeros for $\geq$ and $\leq$.

## Check Yourself

1. Solve $x^2 - x - 6 < 0$.
2. Solve $x^2 - x - 6 \geq 0$.
3. Solve $-x^2 + 9 > 0$.
4. Solve $x^2 + 1 > 0$ and $x^2 + 1 < 0$.
5. Find the domain of $y = \sqrt{6 - x - x^2}$.
6. Someone solves $x^2 < 9$ and writes $x < 3$. Complete the answer.

> [!spoiler] Answers
>
> 1. Zeros $-2, 3$: $(-2; 3)$.
> 2. $(-\infty; -2] \cup [3; +\infty)$.
> 3. Zeros $\pm 3$, opens down: $(-3; 3)$.
> 4. All $x$; no solutions.
> 5. $-x^2 - x + 6 \geq 0$, i.e. $x^2 + x - 6 \leq 0$, zeros $-3, 2$: $[-3; 2]$.
> 6. $(-3; 3)$ - the parabola $x^2 - 9$ is below the axis between its
>    zeros.
