---
title: "[S] Functions. Domain and Range of a Function"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-8-algebra-topic-12-lesson-12-function-y-equals-k-over-x, grade-8-algebra-topic-19-lesson-19-function-y-equals-sqrt-x]
---

## Why It Matters

By now you know a handful of functions by name - linear, $y = x^2$, $y
= \frac{k}{x}$, $y = \sqrt{x}$ - and grade 9 is where they stop being
separate objects and become instances of one idea, studied with one
vocabulary. The first two words of that vocabulary are *domain* -
which $x$ are allowed - and *range* - which $y$ come out. A formula
with a fraction or a root has a domain you have to *find*, and that
finding is the first real use of the inequalities you just learned.

## The Big Idea

A function is a rule that assigns to each allowed input exactly one
output. The set of allowed inputs is its **domain**; the set of
outputs actually produced is its **range**. For a function given by a
formula, the domain - unless the problem restricts it further - is
every $x$ for which the formula makes sense: no division by zero, no
square root of a negative. So "find the domain" means: write down what
must not happen, and solve. The range is read off the graph, or
reasoned out from what the formula can produce.

## The Rule

A **function** is a correspondence assigning to each value of the
independent variable $x$ from some set exactly one value of the
dependent variable $y$. That set is the **domain** $D(f)$; the set of
all values $y$ takes is the **range** $E(f)$.

For a function given by a formula with no other conditions, the
domain is the set of all $x$ for which the formula is defined:

- a fraction $\frac{A}{B}$ requires $B \neq 0$;
- a square root $\sqrt{A}$ requires $A \geq 0$;
- both conditions together when both appear.

Ways to give a function: by a formula, a table, a graph or a verbal
description. A curve is the graph of a function only if every
vertical line meets it at most once.

## Worked Example

Find the domain of $y = \frac{x + 1}{x^2 - 4}$; of $y = \sqrt{3 - x}$; of $y =
\frac{\sqrt{x + 2}}{x - 1}$. Then find the range of $y = x^2 - 4$ and of $y = 3 +
\sqrt{x}$.

- **Fraction.** $x^2 - 4 \neq 0$, so $x \neq \pm 2$. Domain: all $x$ except
  $-2$ and $2$, written $(-\infty; -2) \cup (-2; 2) \cup (2; +\infty)$.
- **Root.** $3 - x \geq 0$, $x \leq 3$. Domain: $(-\infty; 3]$.
- **Both.** $x + 2 \geq 0$ and $x - 1 \neq 0$: $x \geq -2$, $x \neq 1$. Domain:
  $[-2; 1) \cup (1; +\infty)$.
- **Range of $x^2 - 4$.** $x^2 \geq 0$, so $y \geq -4$, and every value from
  $-4$ up is reached. $E = [-4; +\infty)$.
- **Range of $3 + \sqrt{x}$.** $\sqrt{x} \geq 0$, so $y \geq 3$: $E = [3;
  +\infty)$.

The domain of $y = 2x + 1$ or $y = x^2$ is all of $\mathbb{R}$ - nothing in
the formula can fail.

## Common Mistake

Finding the domain of $\frac{\sqrt{x + 2}}{x - 1}$ as $x \geq -2$ only,
forgetting the denominator, or writing $x > -2$ when the root allows
equality - $\sqrt{0}$ is fine. Each forbidden thing gives its own
condition, and the domain is where *all* of them hold. The other
confusion is domain versus range: the domain is about $x$, the range
about $y$. "The range of $y = \sqrt{x}$ is $x \geq 0$" mixes them up -
that's the domain; the range is $y \geq 0$.

## The Takeaway

Domain: the allowed $x$ - for a formula, everything that keeps
denominators nonzero and root arguments non-negative, all conditions
at once. Range: the $y$ actually produced, read from the graph or
from what the formula can output.

## Check Yourself

1. Find the domain of $y = \frac{5}{x + 3}$.
2. Find the domain of $y = \sqrt{2x - 6}$.
3. Find the domain of $y = \frac{1}{\sqrt{x}}$.
4. Find the range of $y = -x^2 + 1$.
5. Find the range of $y = \sqrt{x} - 2$.
6. Someone gives the domain of $y = \frac{\sqrt{x}}{x - 4}$ as $x \geq 0$.
   What's missing?

> [!spoiler] Answers
>
> 1. $x \neq -3$.
> 2. $x \geq 3$, $[3; +\infty)$.
> 3. $x > 0$ - the root needs $x \geq 0$, the fraction $x \neq 0$.
> 4. $(-\infty; 1]$.
> 5. $[-2; +\infty)$.
> 6. $x \neq 4$: domain $[0; 4) \cup (4; +\infty)$.
