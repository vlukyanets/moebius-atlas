---
title: "[S] Pythagorean Theorem"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-14-lesson-14-mean-proportionals-in-a-right-triangle, grade-8-algebra-topic-17-lesson-17-properties-of-the-arithmetic-square-root]
---

## Why It Matters

A ladder $5$ m long leans against a wall, its foot $3$ m out - how high
does it reach? A screen is $16$ by $9$ - what's its diagonal? How far
is it across a rectangular field? All are the same question: given
two sides of a right triangle, find the third. The Pythagorean
theorem answers it with one equation, and it's the most famous
theorem in mathematics for a reason: it's the formula for distance
itself.

## The Big Idea

Take the two mean-proportional relations for the legs: $a^2 = c \cdot
a_c$ and $b^2 = c \cdot b_c$. Add them: $a^2 + b^2 = c(a_c + b_c) = c \cdot c
= c^2$, since the two projections together make up the whole
hypotenuse. That's the proof - two lines, straight from the last
similarity topic.

The picture behind it: squares built on the two legs together have
the same area as the square built on the hypotenuse. Given any two
sides, the third is a square root away: $c = \sqrt{a^2 + b^2}$, or $a =
\sqrt{c^2 - b^2}$. And the converse turns it into a test: if $a^2 + b^2
= c^2$, the angle opposite $c$ is right - which is how a $3, 4, 5$ rope
lays out a square corner.

## The Rule

**Pythagorean theorem.** In a right triangle, the square of the
hypotenuse equals the sum of the squares of the legs:

$$
c^2 = a^2 + b^2
$$

*Proof.* With the altitude to the hypotenuse, $a^2 = c \cdot a_c$ and $b^2
= c \cdot b_c$; adding, $a^2 + b^2 = c(a_c + b_c) = c^2$. $\square$

To find a side: $c = \sqrt{a^2 + b^2}$, $a = \sqrt{c^2 - b^2}$.

**Converse.** If the sides of a triangle satisfy $c^2 = a^2 + b^2$, the
triangle is right, with the right angle opposite $c$.

**Pythagorean triples** - whole-number solutions - worth knowing: $3, 4,
5$; $5, 12, 13$; $8, 15, 17$; $7, 24, 25$; and any multiple of them.

Consequences: the diagonal of a square with side $a$ is $a\sqrt{2}$; the
altitude of an equilateral triangle with side $a$ is $\frac{a\sqrt{3}}{2}$.

## Worked Example

A $5$-m ladder stands $3$ m from a wall - how high does it reach? A
screen is $16$ by $9$ - its diagonal? Is a triangle with sides $6, 8,
10$ right? With $5, 6, 8$?

- **Ladder.** Hypotenuse $5$, leg $3$: $h = \sqrt{25 - 9} = 4$ m.
- **Screen.** Legs $16$, $9$: $d = \sqrt{256 + 81} = \sqrt{337} \approx 18.4$.
- **$6, 8, 10$:** $36 + 64 = 100 = 10^2$. Right (it's $2 \times (3, 4, 5)$).
- **$5, 6, 8$:** $25 + 36 = 61 \neq 64$. Not right - since $61 < 64$, the
  angle opposite $8$ is obtuse.

A square of side $10$ has diagonal $10\sqrt{2} \approx 14.1$; an
equilateral triangle of side $10$ has altitude $5\sqrt{3} \approx 8.7$.

## Common Mistake

Adding the squares when one of the known sides is the hypotenuse.
For the ladder, $\sqrt{25 + 9}$ would give a height greater than the
ladder itself. The hypotenuse is the *longest* side, opposite the
right angle; its square is the *sum*, so a leg's square is a
*difference*. Identify the hypotenuse first. Second slip: $c = a + b$
- the theorem is about squares, and $\sqrt{a^2 + b^2} \neq a + b$.

## The Takeaway

Hypotenuse squared equals leg squared plus leg squared - proved by
adding the two mean-proportional relations. Find any side from the
other two with a square root, subtracting when a leg is wanted; and
the converse tests whether a triangle is right.

## Check Yourself

1. Legs $9$ and $12$. Find the hypotenuse.
2. Hypotenuse $13$, one leg $5$. Find the other leg.
3. Is a triangle with sides $7, 24, 25$ right? With $4, 5, 6$?
4. Find the diagonal of a rectangle $8 \times 15$.
5. An isosceles triangle has base $12$ and legs $10$. Find its altitude.
6. Someone finds the third side of a right triangle with hypotenuse $10$
   and leg $6$ as $\sqrt{136}$. What's wrong?

> [!spoiler] Answers
>
> 1. $15$.
> 2. $12$.
> 3. Yes ($49 + 576 = 625$); no ($16 + 25 = 41 \neq 36$).
> 4. $17$.
> 5. $\sqrt{100 - 36} = 8$.
> 6. They added; the other leg is $\sqrt{100 - 36} = 8$.
