---
title: "[S] Perpendicular and Slant"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-17-lesson-17-pythagorean-theorem]
---

## Why It Matters

In grade 7 you were told the perpendicular is the shortest segment
from a point to a line, and asked to believe it. Now it's a two-line
consequence of the Pythagorean theorem - and so is the rule that a
longer slant has a longer foot, and equal slants have equal feet.
These are the facts behind "the shortest route to the road" and
behind every distance-to-a-line computation to come.

## The Big Idea

From a point $A$ off a line, drop the perpendicular $AH$ and draw any
slant $AB$ to the line. $ABH$ is a right triangle with $AB$ as
hypotenuse and $AH$ as a leg. The hypotenuse is the longest side - by
Pythagoras, $AB^2 = AH^2 + HB^2 > AH^2$. So every slant is longer than
the perpendicular, and by exactly the amount the foot $HB$ contributes:
a longer foot means a longer slant. The segment $HB$ is the projection
of the slant on the line.

## The Rule

Let $A$ be a point not on a line $a$, $AH$ the **perpendicular** ($H \in
a$, $AH \perp a$), and $AB$ a **slant** (any other segment from $A$ to a
point $B$ of $a$). The segment $HB$ is the **projection** of the slant.

**Theorem.** The perpendicular is shorter than any slant from the same
point:

$$
AB^2 = AH^2 + HB^2, \qquad \text{so} \quad AB > AH
$$

**Consequences** (slants from one point to one line):

- equal slants have equal projections, and conversely;
- of two slants, the longer one has the longer projection, and
  conversely.

The **distance from a point to a line** is the length of the
perpendicular - the least of all distances from the point to points
of the line.

## Worked Example

From a point $A$, the perpendicular to a line is $AH = 8$ and a slant is
$AB = 17$. Find the projection $HB$. Then: slants $AB = 13$ and $AC = 15$
from the same point to the same line, on opposite sides of $H$, with
$AH = 12$ - find $BC$.

- **Projection:** $HB = \sqrt{17^2 - 8^2} = \sqrt{289 - 64} = \sqrt{225} = 15$.
- **Two slants:** $HB = \sqrt{169 - 144} = 5$, $HC = \sqrt{225 - 144} = 9$.
  On opposite sides of $H$: $BC = 5 + 9 = 14$. (Same side: $BC = 9 - 5 =
  4$.)

Ordering: with $AH = 12$, the slant of $15$ is longer than the slant of
$13$, and its projection $9$ is longer than $5$ - as the theorem
predicts.

## Common Mistake

Treating a slant as the distance, or assuming a slant's length can be
less than the perpendicular's. $AB = 17$ isn't "the distance from $A$
to the line" - $8$ is. And a problem giving a "slant" shorter than the
perpendicular contains an error. Also: two slants of equal length
from one point have equal projections *on the same line* - the
theorem compares slants to the same line only.

## The Takeaway

Slant, perpendicular and projection form a right triangle, so $AB^2 =
AH^2 + HB^2$: the perpendicular is shortest, longer slants have longer
projections, equal slants equal ones. Distance to a line means the
perpendicular.

## Check Yourself

1. Perpendicular $6$, slant $10$. Find the projection.
2. Slant $25$, projection $24$. Find the perpendicular.
3. From a point, two slants have projections $3$ and $7$. Which slant is
   longer?
4. Slants $AB$ and $AC$ are equal, $AH = 4$, $HB = 3$. Find $BC$ if $B$ and
   $C$ are on opposite sides of $H$.
5. Can a slant be equal to the perpendicular from the same point?
6. Someone says the distance from $A$ to the line is $17$, quoting the
   slant $AB$. What's the distance, given $AH = 8$?

> [!spoiler] Answers
>
> 1. $8$.
> 2. $7$.
> 3. The one with projection $7$.
> 4. $HC = HB = 3$, so $BC = 6$.
> 5. No - only if $B = H$, and then it's the perpendicular itself.
> 6. $8$.
