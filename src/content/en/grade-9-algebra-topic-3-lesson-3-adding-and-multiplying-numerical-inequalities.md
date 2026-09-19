---
title: "[S] Adding and Multiplying Numerical Inequalities"
tag: THM
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-2-lesson-2-basic-properties-of-numerical-inequalities]
---

## Why It Matters

A room is between $3$ and $4$ metres long and between $2$ and $3$ wide -
what can you say about its area, or its perimeter? Two inequalities
have to be combined into one. Adding inequalities and multiplying them
is how measurement errors, estimates and bounds are propagated through
a calculation, and the rules for it are short - as long as you notice
what you *cannot* do.

## The Big Idea

Two inequalities pointing the same way can be added: if $a > b$ and
$c > d$, then $a + c > b + d$. Why - $a + c - (b + d) = (a - b) + (c - d)$, a
sum of two positives. For multiplication the same works, but only for
*positive* numbers: $ac - bd = ac - bc + bc - bd = c(a - b) + b(c - d)$,
positive when everything is. Negatives spoil it: $-1 > -2$ and $-1 >
-3$, but $(-1)(-1) = 1$ is not greater than $(-2)(-3) = 6$.

What you can't do is subtract or divide inequalities termwise - the
directions don't combine.

## The Rule

**Theorem 1.** If $a > b$ and $c > d$, then $a + c > b + d$. Inequalities of
the same direction may be added termwise.

**Theorem 2.** If $a > b > 0$ and $c > d > 0$, then $ac > bd$. Inequalities
of the same direction between **positive** numbers may be multiplied
termwise.

**Corollary.** If $a > b > 0$, then $a^n > b^n$ for every natural $n$.

Not allowed: subtracting or dividing inequalities termwise; adding
inequalities of opposite directions (reverse one first, if it can be
done - it can't with a sum, only by multiplying by $-1$).

## Worked Example

The length of a room satisfies $3 < a < 4$, the width $2 < b < 3$
(metres). Estimate the perimeter and the area. Then: given $1 < x < 2$
and $3 < y < 5$, estimate $x - y$ and $\frac{x}{y}$.

- **Perimeter $2(a + b)$.** Add: $5 < a + b < 7$; double: $10 < 2(a + b) <
  14$.
- **Area $ab$.** All positive, multiply: $6 < ab < 12$.
- **$x - y$.** Can't subtract termwise. Instead write $x - y = x + (-y)$:
  from $3 < y < 5$, $-5 < -y < -3$; add to $1 < x < 2$: $-4 < x - y < -1$.
- **$\frac{x}{y}$.** Write it as $x \cdot \frac{1}{y}$: $\frac{1}{5} < \frac{1}{y} <
  \frac{1}{3}$, positives, multiply: $\frac{1}{5} < \frac{x}{y} < \frac{2}{3}$.

The trick in both: turn subtraction into adding a negative, division
into multiplying by a reciprocal - and reverse the *inner* inequality
correctly first.

## Common Mistake

Subtracting termwise: from $1 < x < 2$ and $3 < y < 5$ getting $1 - 3 < x -
y < 2 - 5$, i.e. $-2 < x - y < -3$ - which isn't even a valid
interval. The bounds for $x - y$ come from the *smallest* $x$ minus the
*largest* $y$ up to the largest $x$ minus the smallest $y$: $-4$ to $-1$.
Adding $-y$ does that automatically. Likewise multiplying when some
numbers may be negative: $-2 < a < 1$ and $-3 < b < 2$ do not give $6 <
ab < 2$.

## The Takeaway

Same-direction inequalities add; same-direction inequalities between
positive numbers multiply. To subtract, add the negative; to divide,
multiply by the reciprocal - flipping the inner inequality as you do.
Never subtract or divide termwise.

## Check Yourself

1. Given $2 < a < 5$ and $1 < b < 3$, estimate $a + b$.
2. Same data: estimate $ab$.
3. Same data: estimate $a - b$.
4. Same data: estimate $\frac{a}{b}$.
5. Given $0.5 < x < 0.6$, estimate $x^2$.
6. Someone estimates $a - b$ from $2 < a < 5$, $1 < b < 3$ as $1 < a - b <
   2$. What went wrong?

> [!spoiler] Answers
>
> 1. $3 < a + b < 8$.
> 2. $2 < ab < 15$.
> 3. $-1 < a - b < 4$.
> 4. $\frac{2}{3} < \frac{a}{b} < 5$.
> 5. $0.25 < x^2 < 0.36$.
> 6. Subtracted termwise; correct is $-1 < a - b < 4$.
