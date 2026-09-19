---
title: "[S] Function. Domain and Range of a Function"
tag: DEF
track: school
grade: 7
subject: algebra
requires: [grade-6-topic-47-lesson-47-graphs-of-dependencies, grade-7-algebra-topic-4-lesson-4-expressions-with-variables]
---

## Why It Matters

The temperature depends on the time of day. The cost of a taxi ride
depends on the distance. The area of a square depends on its side. In
each case one quantity is fixed by another - give me the input, I'll
tell you the output, and there's only ever one output. That "one
output per input" rule is what mathematicians call a function, and it
is the central idea of all the mathematics after this.

## The Big Idea

Think of a function as a machine with an input slot and an output
slot. Put a number in, exactly one number comes out - never two, never
a choice. A square's area machine takes a side length and returns the
area; put in $3$, get $9$. The rule $y = x^2$ describes the machine, $x$
is the input variable, $y$ the output.

Two questions come with every machine. Which inputs will it accept?
That set is the domain - for a real square, sides must be positive;
for the bare rule $y = x^2$, any number works. And which outputs can it
produce? That set is the range - $y = x^2$ never returns a negative
number, so its range is the non-negative numbers.

## The Rule

A **function** is a rule that assigns to each value of one variable
(the **independent variable**, or **argument**, usually $x$) exactly
one value of another variable (the **dependent variable**, usually $y$).
Written $y = f(x)$; $f(3)$ is the value of the function at $x = 3$.

The **domain** of a function is the set of all values the argument
can take. The **range** is the set of all values the function takes.

A function can be given by a **formula** ($y = 2x - 1$), a **table**
(inputs and outputs listed), a **graph**, or a **verbal description**.
For a formula with no stated restriction, the domain is every $x$ for
which the formula makes sense.

## Worked Example

For $f(x) = x^2 - 2x$, find $f(3)$, $f(-1)$ and $f(0)$; then find the
domain of $y = \frac{5}{x - 4}$ and the range of $y = x^2 + 1$.

- **$f(3) = 9 - 6 = 3$.** **$f(-1) = 1 + 2 = 3$.** **$f(0) = 0$.** Two
  different inputs gave the same output $3$ - that's allowed; what's
  forbidden is one input giving two outputs.
- **Domain of $\frac{5}{x - 4}$.** The formula fails only at $x = 4$
  (division by zero). Domain: all numbers except $4$.
- **Range of $x^2 + 1$.** $x^2$ is $0$ or more, so $x^2 + 1$ is $1$ or
  more; every value from $1$ up is reached. Range: all $y \geq 1$.

A table function: a shop lists prices for $1$, $2$, $3$ kg - the domain
is $\{1, 2, 3\}$, the range is the three prices.

## Common Mistake

Confusing "one output per input" with "one input per output." A
function may send many inputs to the same output - $f(3) = f(-1) = 3$
above is fine. What it can't do is send one input to two outputs: a
table with $x = 2$ listed twice against different $y$'s is not a
function. And the domain isn't "the numbers you feel like using" -
it's every input the rule accepts, unless the problem restricts it.

## The Takeaway

A function is a rule with exactly one output for every input. Its
domain is the set of allowed inputs, its range the set of outputs it
actually produces. Formulas, tables, graphs and words can all define
one.

## Check Yourself

1. For $f(x) = 3x + 2$, find $f(0)$, $f(-2)$ and $f(1.5)$.
2. Find the domain of $y = \frac{x}{x + 3}$.
3. Find the domain and range of $y = 2x$ (no restriction).
4. Find the range of $y = -x^2$.
5. Is the rule "to each number, its square root or its negative square
   root" a function? Why not?
6. Someone says $y = x^2$ isn't a function "because $2$ and $-2$ both
   give $4$." What's the mistake?

> [!spoiler] Answers
>
> 1. $2$; $-4$; $6.5$.
> 2. All numbers except $-3$.
> 3. Domain all numbers; range all numbers.
> 4. All $y \leq 0$.
> 5. No - one input would get two outputs.
> 6. Several inputs may share an output; each input still has exactly
>    one, so it *is* a function.
