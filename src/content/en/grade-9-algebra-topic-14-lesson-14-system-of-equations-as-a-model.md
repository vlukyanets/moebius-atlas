---
title: "[S] System of Two Equations as a Mathematical Model of an Applied Problem"
tag: MTD
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-13-lesson-13-systems-of-second-degree-equations, grade-7-algebra-topic-30-lesson-30-solving-problems-with-systems]
---

## Why It Matters

A rectangular garden has perimeter $28$ m and area $48$ m² - what are
its sides? Two boats, two speeds, a river - how fast is each? These
problems have two unknowns tied by two conditions, and now one of the
conditions can be a product, a square or a distance-over-speed
fraction. The model is a system of second-degree equations, and the
work is the same as in grade 7: name, translate, solve, and - this is
where the square matters - *interpret*, because a quadratic can hand
you a root the problem can't use.

## The Big Idea

Give the two unknowns letters. Read the problem twice: each sentence
that says "is", "equals", "together", "more than" is an equation.
Write both, solve by substitution, and then go back to the words: a
side can't be negative, a speed can't be zero, a number of people is
whole. A root that breaks a condition is discarded with a reason, not
silently. The answer is a statement about the garden or the boats,
not a pair of numbers.

## The Rule

**Modelling with a system:**

1. **Choose** the unknowns - usually the two quantities asked for.
2. **Translate** each condition into an equation; get two.
3. **Solve** the system (substitution, or a trick if neither is
   linear).
4. **Check** each solution against the problem: sign, size, meaning.
   Reject what doesn't fit, and say why.
5. **Answer** in the terms of the question.

Common models: perimeter and area of a rectangle ($2(x + y) = P$, $xy =
S$); a two-digit number ($10x + y$) and its reversed digits; sum and
product of two numbers; two movers with $\text{time} = \frac{\text{distance}}
{\text{speed}}$.

## Worked Example

A rectangle has perimeter $28$ m and area $48$ m². Find its sides.
Then: a two-digit number is $4$ times the sum of its digits; if its
digits are swapped the number increases by $27$. Find it.

- **Rectangle.** Let the sides be $x$ and $y$. Perimeter: $2(x + y) = 28$,
  so $x + y = 14$. Area: $xy = 48$. Substitute $y = 14 - x$: $x(14 - x) =
  48$, $x^2 - 14x + 48 = 0$, $x = 6$ or $x = 8$. Then $y = 8$ or $y = 6$. Both
  positive, both fit: the sides are $6$ m and $8$ m (the two solutions
  are the same rectangle).
- **Number.** Tens digit $x$, ones digit $y$: the number is $10x + y$.
  Conditions: $10x + y = 4(x + y)$ and $(10y + x) - (10x + y) = 27$. The
  first: $6x = 3y$, $y = 2x$. The second: $9y - 9x = 27$, $y - x = 3$.
  Substitute: $2x - x = 3$, $x = 3$, $y = 6$. Both are digits, $x \neq 0$:
  the number is $36$. Check: $36 = 4 \cdot 9$, and $63 - 36 = 27$.

Both roots of the first system were meaningful; in the second, the
check that $x$ and $y$ are digits is part of the solution, not an
afterthought - a system that gave $x = -3$ would mean no such number.

## Common Mistake

Answering with a root the problem can't use - a side of $-6$ m, a
speed of $0$, a digit of $12$ - or discarding a valid one because two
answers "can't both be right". Check every root against the *words*:
"sides $6$ and $8$" appearing twice is one rectangle, and a problem
about two numbers may well have two genuine answers. The other slip
is translating "decreases by $27$" as $+27$: write the bigger thing
minus the smaller.

## The Takeaway

Two unknowns, two conditions, one system; solve, then check every
root against the story and answer in its words. Squares bring extra
roots, and the problem - not the algebra - decides which survive.

## Check Yourself

1. Two numbers have sum $11$ and product $30$. Find them.
2. A rectangle has perimeter $30$ cm and area $56$ cm². Find its sides.
3. The difference of two numbers is $3$ and the sum of their squares is
   $65$. Find them.
4. A rectangle's diagonal is $13$ cm and its perimeter $34$ cm. Find its
   sides.
5. The sum of the digits of a two-digit number is $9$; the number is
   $9$ less than the number with digits swapped. Find it.
6. Someone solves problem 2 and reports "sides $7$ and $8$, or $8$ and
   $7$ - two answers". Is that two rectangles?

> [!spoiler] Answers
>
> 1. $5$ and $6$.
> 2. $x + y = 15$, $xy = 56$: $7$ cm and $8$ cm.
> 3. $x = y + 3$, $(y + 3)^2 + y^2 = 65$, $y^2 + 3y - 28 = 0$, $y = 4$ or $-7$:
>    $(7; 4)$ or $(-4; -7)$ - both valid if any numbers are allowed.
> 4. $x + y = 17$, $x^2 + y^2 = 169$; $xy = \frac{289 - 169}{2} = 60$: $5$ cm
>    and $12$ cm.
> 5. $x + y = 9$, $(10y + x) - (10x + y) = 9$, $y - x = 1$: $x = 4$, $y = 5$:
>    $45$.
> 6. No - the same rectangle, sides named in the other order.
