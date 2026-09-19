---
title: "[S] Linear Inequalities in One Variable"
tag: MTD
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-3-lesson-3-adding-and-multiplying-numerical-inequalities, grade-9-algebra-topic-4-lesson-4-inequalities-with-variables, grade-9-algebra-topic-5-lesson-5-number-intervals]
---

## Why It Matters

"A taxi charges \$3 plus \$2 per kilometre - how far can I go on
\$20?" That's $3 + 2x \leq 20$: a linear inequality, and the answer is
an interval, $x \leq 8.5$. Linear inequalities are the workhorse of
"how much at most", "at least how many" and "for which values" - and
solving them is the grade 7 linear equation with one extra rule to
watch.

## The Big Idea

Solve it like a linear equation: collect the $x$-terms on one side,
the numbers on the other, divide by the coefficient. The only new
thing happens at the last step - if that coefficient is negative, the
inequality sign flips. Then write the answer as an interval and, if
you like, draw it.

Two special cases the equation never had. If the $x$ cancels and
leaves a true statement ($0 < 5$), every number is a solution; if it
leaves a false one ($0 > 5$), none is.

## The Rule

A **linear inequality in one variable** has the form $ax > b$ (or
with $<$, $\geq$, $\leq$).

- $a > 0$: divide, $x > \frac{b}{a}$.
- $a < 0$: divide and **flip**, $x < \frac{b}{a}$.
- $a = 0$: $0 > b$ is either always true (every $x$ is a solution,
  $(-\infty; +\infty)$) or never (no solutions).

To solve an inequality that reduces to a linear one: expand brackets,
clear fractions by multiplying by a positive common denominator, move
$x$-terms to one side and numbers to the other, divide by the
coefficient of $x$ - flipping if it's negative. Write the answer as an
interval.

## Worked Example

Solve $3(x - 2) - 5 > 7x + 1$; then $\frac{x}{2} - \frac{x - 1}{3} \leq 1$; then
$2(x + 1) - 2x < 3$.

- **First.** Expand: $3x - 6 - 5 > 7x + 1$, so $3x - 11 > 7x + 1$. Move:
  $3x - 7x > 1 + 11$, $-4x > 12$. Divide by $-4$ and flip: $x < -3$.
  Answer: $(-\infty; -3)$. Check $x = -4$: $3(-6) - 5 = -23$, $7(-4) + 1 =
  -27$, $-23 > -27$ - true.
- **Second.** Multiply by $6 > 0$: $3x - 2(x - 1) \leq 6$, $3x - 2x + 2 \leq
  6$, $x \leq 4$. Answer: $(-\infty; 4]$.
- **Third.** $2x + 2 - 2x < 3$, i.e. $2 < 3$ - true for every $x$. Answer:
  $(-\infty; +\infty)$.

The taxi: $3 + 2x \leq 20$, $2x \leq 17$, $x \leq 8.5$ km.

## Common Mistake

The flip - forgotten, or applied at the wrong moment. $-4x > 12$ gives
$x < -3$, not $x > -3$. But *moving* a term never flips anything: from
$3x - 11 > 7x + 1$ to $-4x > 12$ the sign stays, because moving is
adding to both sides. The flip belongs only to the multiply-or-divide
step, and only when the number is negative. If in doubt, move the
$x$-terms to the side where the coefficient comes out positive: $-12 >
4x$ then $-3 > x$ - no flip needed, same answer.

## The Takeaway

Solve like an equation - expand, clear fractions, collect, divide -
and flip the sign at the division if the coefficient is negative.
Write the answer as an interval. $0 > b$ means everything or nothing.

## Check Yourself

1. Solve $5x - 3 > 2x + 9$.
2. Solve $4 - 3x \geq 10$.
3. Solve $\frac{2x - 1}{3} < \frac{x}{2} + 1$.
4. Solve $3(x + 1) - 3x \geq 4$.
5. A phone plan costs \$10 plus \$0.05 per minute. How many minutes keep
   the bill at most \$25? 6.
Someone solves $-2x \leq 8$ and gets $x \leq -4$. Correct it and check.

> [!spoiler] Answers
>
> 1. $x > 4$, $(4; +\infty)$.
> 2. $-3x \geq 6$, $x \leq -2$, $(-\infty; -2]$.
> 3. Multiply by $6$: $4x - 2 < 3x + 6$, $x < 8$, $(-\infty; 8)$.
> 4. $3 \geq 4$ - false: no solutions.
> 5. $10 + 0.05m \leq 25$, $m \leq 300$ minutes.
> 6. $x \geq -4$; $x = 0$: $0 \leq 8$, true.
