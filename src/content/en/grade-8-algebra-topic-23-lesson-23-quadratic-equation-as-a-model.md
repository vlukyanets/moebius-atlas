---
title: "[S] Quadratic Equation as a Mathematical Model of an Applied Problem"
tag: MTD
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-21-lesson-21-quadratic-formula, grade-7-algebra-topic-3-lesson-3-solving-problems-with-linear-equations]
---

## Why It Matters

A rectangular garden has area $48\ \text{m}^2$ and its length is $2$ m
more than its width - find the sides. A ball thrown at $20$ m/s reaches
$15$ m - when? Two cyclists, a product of two consecutive numbers, a
pool with a path round it: whenever the unknown gets multiplied by
itself, the model is a quadratic equation. The translation is the
grade-7 routine; what's new is that the equation may give *two*
roots, and the story decides which to keep.

## The Big Idea

Same plan as always: name the unknown, express the rest, find the
equality, solve. The equality now has an $x^2$ in it - because an area
is length times width, or a distance is $vt$ with $t$ unknown in both
factors, or a product of two related numbers. The quadratic formula
delivers up to two roots.

Then the new step: interpret. A width can't be $-8$ m; a time before
the throw doesn't count; a number of people can't be $3.5$. Discard
what the story forbids, keep what it allows - sometimes both roots are
meaningful, sometimes one, occasionally none. The equation doesn't
know the story; you do.

## The Rule

To solve an applied problem with a quadratic equation:

1. **choose the unknown** $x$ with its units;
2. **express** the other quantities through $x$;
3. **write the equation** from the condition of the problem - it will
   contain $x^2$;
4. **solve** it: bring to $ax^2 + bx + c = 0$, discriminant, roots;
5. **check each root against the story** - discard negative lengths,
   times, counts, and any value outside the problem's range;
6. **answer** the question asked.

Typical models: area (length $\times$ width), motion with unknown
speed in a rational equation that clears to a quadratic, products of
consecutive numbers, geometric figures with a border.

## Worked Example

A rectangular garden has area $48\ \text{m}^2$; its length is $2$ m more
than its width. Find the sides. Then: a ball is at height $h = 20t -
5t^2$ metres after $t$ seconds - when is it $15$ m up?

- **Garden.** Width $x$ m, length $x + 2$. Area: $x(x + 2) = 48$, so $x^2 +
  2x - 48 = 0$. $D = 4 + 192 = 196$, $\sqrt{D} = 14$: $x = \frac{-2 \pm
  14}{2}$, that is $6$ or $-8$. A width of $-8$ m is impossible: $x = 6$.
  Sides $6$ m and $8$ m. Check: $6 \cdot 8 = 48$.
- **Ball.** $20t - 5t^2 = 15$, so $5t^2 - 20t + 15 = 0$, $t^2 - 4t + 3 = 0$,
  $t = 1$ or $t = 3$. Both make sense: the ball passes $15$ m on the way
  up at $1$ s and on the way down at $3$ s.

Consecutive numbers: two consecutive naturals have product $132$.
$x(x + 1) = 132$, $x^2 + x - 132 = 0$, $x = 11$ or $-12$; naturals, so $11$
and $12$.

## Common Mistake

Reporting both roots without asking the story. "The width is $6$ or
$-8$" is an answer to the equation, not to the problem. Equally,
discarding a root out of habit - the ball problem genuinely has two
answers, one up and one down. Read each root against the meaning of
$x$: is it a length, a time, a count? Then decide.

## The Takeaway

Translate as before; when the condition multiplies the unknown by
itself, the equation is quadratic and may give two roots. Test every
root against the story - sign, range, whole numbers - and keep only
what the problem allows.

## Check Yourself

1. The product of two consecutive natural numbers is $90$. Find them.
2. A rectangle's length is $5$ cm more than its width and its area is
   $84\ \text{cm}^2$. Find the sides.
3. A square's side is increased by $3$ cm and its area becomes $64\
   \text{cm}^2$. Find the original side.
4. The sum of a number and its square is $56$. Find all such numbers.
5. A ball's height is $h = 30t - 5t^2$. When is it $40$ m up? When does
   it land?
6. Someone solves the garden problem and answers "$6$ m or $-8$ m."
   What's wrong?

> [!spoiler] Answers
>
> 1. $x^2 + x - 90 = 0$: $9$ and $10$.
> 2. $x(x + 5) = 84$, $x = 7$: $7$ cm and $12$ cm.
> 3. $(x + 3)^2 = 64$, $x + 3 = 8$: $5$ cm.
> 4. $x^2 + x - 56 = 0$: $x = 7$ or $x = -8$ - both valid, since nothing
>    forbids a negative number.
> 5. $t^2 - 6t + 8 = 0$: $t = 2$ s and $t = 4$ s; lands at $t = 6$ s.
> 6. A width can't be negative; the answer is $6$ m by $8$ m.
