---
title: "[S] Solving Problems with Systems of Linear Equations"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-28-lesson-28-substitution-method, grade-7-algebra-topic-29-lesson-29-addition-method, grade-7-algebra-topic-3-lesson-3-solving-problems-with-linear-equations]
---

## Why It Matters

A boat goes $36$ km downstream in $2$ hours and $24$ km upstream in
$3$ hours - what are the boat's speed and the current's? Two unknowns,
two facts. With one unknown you had to squeeze the second quantity
into the first, often awkwardly; with a system, each unknown gets its
own letter and each fact its own equation. Problems that were
contortions become translations.

## The Big Idea

The plan is the grade-6 one with a second letter. Name *two* unknowns.
Read the story twice: each independent condition becomes an equation
in the two letters. Solve the system by substitution or addition,
check the pair against the story, answer the question. The freedom to
name two things means the equations are usually straightforward -
the difficulty moves from setting up to solving, and solving is now
routine.

## The Rule

To solve a problem with a system:

1. **Name two unknowns**, $x$ and $y$, with units.
2. **Translate each condition** of the problem into an equation in $x$
   and $y$ - two conditions, two equations.
3. **Solve the system** by whichever method fits.
4. **Check** the pair in the story, and **answer the question**.

The classic templates:

- **motion on a river:** downstream speed $v + c$, upstream $v - c$;
- **mixtures:** total amount, and total pure substance;
- **digits:** a two-digit number with tens $x$ and units $y$ is $10x + y$;
- **prices:** quantity times price, summed.

## Worked Example

A boat goes $36$ km downstream in $2$ hours and $24$ km upstream in
$3$ hours. Find the boat's own speed and the speed of the current.

- **Unknowns:** boat's speed $v$ km/h, current $c$ km/h.
- **Downstream:** $(v + c) \cdot 2 = 36$, so $v + c = 18$.
- **Upstream:** $(v - c) \cdot 3 = 24$, so $v - c = 8$.
- **Solve by addition:** $2v = 26$, $v = 13$; then $c = 5$.
- **Check:** downstream $18 \cdot 2 = 36$, upstream $8 \cdot 3 = 24$.

The boat does $13$ km/h, the current $5$ km/h.

Digits: a two-digit number's digits add to $11$; swapping them gives a
number $27$ larger. $\begin{cases} x + y = 11 \\ 10y + x = 10x + y + 27
\end{cases}$; the second is $9y - 9x = 27$, $y - x = 3$; add: $2y = 14$,
$y = 7$, $x = 4$. The number is $47$; check: $74 - 47 = 27$.

## Common Mistake

Writing two equations that say the same thing. "Two notebooks and a
pen cost $13$" and "four notebooks and two pens cost $26$" are one fact
twice - the system has infinitely many solutions and the problem can't
be answered from it. Each equation must carry a *different* condition.
If solving gives $0 = 0$, go back to the story: a condition was missed
or repeated.

## The Takeaway

Two unknowns, two independent conditions, two equations; solve the
system, check the pair in the story, answer what was asked. Name the
letters freely - that's the whole advantage of a system.

## Check Yourself

1. Two numbers add to $30$ and differ by $8$. Find them.
2. Three pens and two pencils cost $19$; a pen and four pencils cost
   $13$. Find each price.
3. A rectangle has perimeter $28$ cm; its length is $2$ cm more than
   twice its width. Find its sides.
4. A boat goes $48$ km downstream in $3$ h and $40$ km upstream in $5$ h.
   Find the boat's speed and the current.
5. A two-digit number's digits sum to $9$; the number is $9$ less than
   the number with its digits reversed. Find it.
6. Someone sets up "$2n + p = 13$, $4n + 2p = 26$" for the notebooks and
   pens. Why can't that be solved?

> [!spoiler] Answers
>
> 1. $19$ and $11$.
> 2. Pen $5$, pencil $2$.
> 3. Width $4$ cm, length $10$ cm.
> 4. $v + c = 16$, $v - c = 8$: $v = 12$, $c = 4$.
> 5. $x + y = 9$, $10y + x - (10x + y) = 9$, so $y - x = 1$: $x = 4$, $y = 5$;
>    the number is $45$.
> 6. The second equation is the first doubled - one condition, not two;
>    infinitely many solutions.
