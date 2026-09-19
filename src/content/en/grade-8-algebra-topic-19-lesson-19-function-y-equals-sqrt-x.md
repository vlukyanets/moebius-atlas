---
title: "[S] The Function y = √x, Its Graph and Properties"
tag: DEF
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-14-lesson-14-arithmetic-square-root]
---

## Why It Matters

The time a pendulum takes to swing grows with the square root of its
length; the speed of a wave with the square root of the depth; the
side of a square with the square root of its area. Growth that slows
down as it goes - fast at first, then flatter and flatter - is what
$y = \sqrt{x}$ describes, and its graph is the parabola's right half
turned on its side.

## The Big Idea

$y = \sqrt{x}$ undoes $y = x^2$ on the non-negative numbers. Take the
right-hand half of the parabola - the points $(x; x^2)$ with $x \geq 0$ -
and swap the coordinates: $(x^2; x)$. Those are the points $(t;
\sqrt{t})$. So the graph of $\sqrt{x}$ is that half-parabola reflected
across the line $y = x$: it starts at the origin, rises, and keeps
rising forever, but ever more slowly. It lives entirely in the first
quadrant, since neither $x$ nor $\sqrt{x}$ can be negative.

Because the function is increasing, comparing roots is comparing what's
under them - the fact used in the last two topics.

## The Rule

The function $y = \sqrt{x}$ has:

- **domain:** $x \geq 0$; **range:** $y \geq 0$;
- **graph:** a branch of a parabola lying on its side, starting at
  the origin and passing through $(1; 1)$, $(4; 2)$, $(9; 3)$;
- $y = 0$ only at $x = 0$;
- **increasing** on its whole domain: a larger $x$ gives a larger
  $\sqrt{x}$ - so for $a \geq 0$, $b \geq 0$: $a < b \iff \sqrt{a} <
  \sqrt{b}$;
- the graph is symmetric to the right half of $y = x^2$ across the line
  $y = x$.

## Worked Example

Plot $y = \sqrt{x}$ for $0 \leq x \leq 9$; read $\sqrt{6}$ from the graph
to one decimal; find where the graph meets $y = 2$; and compare
$\sqrt{7}$ with $2.5$.

- **Table:** $x = 0, 1, 4, 9$ gives $y = 0, 1, 2, 3$; add $x = 2.25$, $y =
  1.5$ and $x = 6.25$, $y = 2.5$ for shape. Plot and join with a smooth
  curve.
- **$\sqrt{6}$:** up from $6$ to the curve, across - about $2.4$. (Check:
  $2.4^2 = 5.76$, $2.5^2 = 6.25$.)
- **Meets $y = 2$:** at $x = 4$, since $\sqrt{4} = 2$.
- **$\sqrt{7}$ vs $2.5$:** $2.5 = \sqrt{6.25}$, and $7 > 6.25$; the function
  is increasing, so $\sqrt{7} > 2.5$.

The pendulum: doubling the length multiplies the swing time by
$\sqrt{2} \approx 1.41$, not by $2$ - the curve flattens.

## Common Mistake

Extending the graph to the left of the origin, or drawing it as a
straight line. There's no $\sqrt{x}$ for negative $x$, so the graph
begins at $(0; 0)$ and goes right only. And it curves: from $0$ to $1$ it
rises $1$, from $1$ to $4$ another $1$, from $4$ to $9$ another $1$ - equal
rises over ever-longer runs. That's a bend, not a slope.

## The Takeaway

$y = \sqrt{x}$ is the right half of the parabola flipped across $y = x$:
defined and non-negative for $x \geq 0$, starting at the origin, always
increasing, always flattening. Since it increases, bigger radicand
means bigger root.

## Check Yourself

1. What are the domain and range of $y = \sqrt{x}$?
2. Does the graph pass through $(16; 4)$? Through $(4; -2)$?
3. Where does $y = \sqrt{x}$ meet $y = 3$?
4. Compare $\sqrt{11}$ and $3.3$.
5. Which is larger, $\sqrt{0.5}$ or $0.5$?
6. Someone draws $y = \sqrt{x}$ as a straight line through $(0; 0)$ and
   $(1; 1)$. Name a point that shows it's curved.

> [!spoiler] Answers
>
> 1. $x \geq 0$; $y \geq 0$.
> 2. Yes; no - $\sqrt{4} = 2$, not $-2$.
> 3. At $x = 9$.
> 4. $3.3^2 = 10.89 < 11$, so $\sqrt{11} > 3.3$.
> 5. $\sqrt{0.5} \approx 0.71 > 0.5$.
> 6. $(4; 2)$ - on the line it would be $(4; 4)$.
