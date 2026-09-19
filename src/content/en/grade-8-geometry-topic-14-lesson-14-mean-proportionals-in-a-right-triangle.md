---
title: "[S] Mean Proportional Segments in a Right Triangle"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-13-lesson-13-similarity-criteria, grade-7-geometry-topic-19-lesson-19-right-triangles]
---

## Why It Matters

Drop the altitude from the right angle of a right triangle onto the
hypotenuse. It cuts the triangle into two smaller ones - and all three
are similar to each other. Out of that one picture fall three
formulas tying the altitude, the legs and the pieces of the
hypotenuse together, and out of those formulas, next topic, falls the
Pythagorean theorem. This is the picture that proves it.

## The Big Idea

Right triangle $ABC$, right angle at $C$, altitude $CH$ to the
hypotenuse $AB$. The small triangle $ACH$ shares angle $A$ with the big
one and has a right angle at $H$ - AA, so $\triangle ACH \sim \triangle ABC$.
Likewise $\triangle CBH \sim \triangle ABC$ through angle $B$. And the two
small ones are similar to each other.

Write out the proportions from these similarities and three
relations appear. The altitude squared equals the product of the two
pieces of the hypotenuse. Each leg squared equals the hypotenuse
times the piece next to that leg. A segment whose square is the
product of two others is their *mean proportional* - it sits between
them in a proportion, $\frac{a}{x} = \frac{x}{b}$.

## The Rule

In a right triangle with legs $a$, $b$, hypotenuse $c$, altitude $h$ to
the hypotenuse, and $a_c$, $b_c$ the projections of the legs on the
hypotenuse (the pieces into which $h$ divides $c$):

$$
h^2 = a_c \cdot b_c, \qquad a^2 = c \cdot a_c, \qquad b^2 = c \cdot b_c
$$

In words: the altitude to the hypotenuse is the mean proportional
between the projections of the legs; each leg is the mean
proportional between the hypotenuse and its own projection.

**Theorem.** The altitude to the hypotenuse divides a right triangle
into two triangles similar to it and to each other.

A segment $x$ is the **mean proportional** of $a$ and $b$ if $x^2 = ab$,
that is $\frac{a}{x} = \frac{x}{b}$.

## Worked Example

In right triangle $ABC$ ($\angle C = 90^\circ$), the altitude $CH$ divides
the hypotenuse into $AH = 4$ and $HB = 9$. Find $CH$, $AC$ and $BC$.

- **Altitude:** $CH^2 = AH \cdot HB = 36$, so $CH = 6$.
- **Hypotenuse:** $AB = 4 + 9 = 13$.
- **Leg $AC$:** $AC^2 = AB \cdot AH = 13 \cdot 4 = 52$, so $AC = \sqrt{52} =
  2\sqrt{13}$.
- **Leg $BC$:** $BC^2 = AB \cdot HB = 13 \cdot 9 = 117$, so $BC = \sqrt{117} =
  3\sqrt{13}$.

Check the similarity: $\triangle ACH$ has sides $4, 6, 2\sqrt{13}$ and
$\triangle CBH$ has $6, 9, 3\sqrt{13}$ - ratio $\frac{3}{2}$ throughout.

Another: leg $a = 6$, its projection $a_c = 4$. Then $c = \frac{a^2}{a_c}
= 9$, $b_c = 5$, $h^2 = 20$, $h = 2\sqrt{5}$.

## Common Mistake

Pairing a leg with the *wrong* projection. $AC^2 = AB \cdot AH$ uses
$AH$, the piece of the hypotenuse *adjacent* to $AC$ - the one that
starts at $A$. Using $HB$ instead gives the other leg. The rule is:
leg squared equals hypotenuse times the projection that touches that
leg. Draw the figure and follow the letters.

## The Takeaway

The altitude to the hypotenuse makes three similar triangles, and
from them: $h^2 = a_c b_c$, $a^2 = c \cdot a_c$, $b^2 = c \cdot b_c$. The
altitude is the mean proportional of the projections; each leg is the
mean proportional of the hypotenuse and its own projection.

## Check Yourself

1. The altitude to the hypotenuse divides it into $2$ and $8$. Find the
   altitude.
2. Hypotenuse $25$, one projection $9$. Find the leg over that
   projection and the other projection.
3. A leg is $10$ and its projection is $5$. Find the hypotenuse.
4. Projections $3$ and $12$. Find both legs.
5. Find the mean proportional of $4$ and $16$.
6. Someone computes $AC^2 = AB \cdot HB$ for the leg $AC$. Which
   projection should it be?

> [!spoiler] Answers
>
> 1. $4$.
> 2. $\sqrt{225} = 15$; $16$.
> 3. $20$.
> 4. $c = 15$; legs $\sqrt{45} = 3\sqrt{5}$ and $\sqrt{180} = 6\sqrt{5}$.
> 5. $8$.
> 6. $AH$ - the one adjacent to $AC$.
