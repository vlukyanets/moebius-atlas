---
title: "[S] Property of the Bisector of a Triangle"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-13-lesson-13-similarity-criteria]
---

## Why It Matters

The bisector of an angle of a triangle hits the opposite side
somewhere - but where? Not at the midpoint, unless the two sides are
equal. It lands at the point that divides the opposite side in the
same ratio as the two adjacent sides. That single fact turns
"bisector" from a direction into a computable length, and it shows
up whenever a triangle problem mentions one.

## The Big Idea

Let $AD$ bisect angle $A$ of $\triangle ABC$, with $D$ on $BC$. Through $C$
draw a line parallel to $AD$; it meets the extension of $BA$ at a point
$E$. Now $AD \parallel CE$ gives equal angles at $E$ and $C$ (corresponding
and alternate to the two halves of angle $A$), so $\triangle ACE$ is
isosceles: $AE = AC$. And the generalized Thales theorem on $\triangle
BCE$ with the parallel $AD$ gives $\frac{BD}{DC} = \frac{BA}{AE} =
\frac{BA}{AC}$. The bisector splits the opposite side in the ratio of
the sides it lies between.

## The Rule

**Theorem.** The bisector of a triangle divides the opposite side into
segments proportional to the two adjacent sides:

$$
\frac{BD}{DC} = \frac{AB}{AC} \qquad \text{for } AD \text{ the bisector of } \angle A
$$

Equivalently, $BD : DC = AB : AC$, and $BD = \frac{AB}{AB + AC} \cdot BC$.

Consequences: in an isosceles triangle, the bisector to the base
bisects it ($AB = AC$ gives $BD = DC$); the point where a bisector meets
the opposite side is closer to the shorter adjacent side.

## Worked Example

In $\triangle ABC$, $AB = 6$, $AC = 9$, $BC = 10$, and $AD$ is the bisector of
$\angle A$. Find $BD$ and $DC$. Then: the bisector from $A$ divides $BC$
into $4$ and $6$, and $AB = 8$ - find $AC$.

- **Ratio:** $\frac{BD}{DC} = \frac{AB}{AC} = \frac{6}{9} = \frac{2}{3}$.
- **Split $10$ in the ratio $2 : 3$:** $5$ parts, $2$ each; $BD = 4$, $DC = 6$.
- **Second:** $\frac{4}{6} = \frac{8}{AC}$, so $AC = 12$.

Check the first with the formula: $BD = \frac{6}{6 + 9} \cdot 10 = 4$.

## Common Mistake

Assuming the bisector bisects the opposite side. It does only in the
isosceles case; in the example $BD = 4$, $DC = 6$ - unequal. Bisecting
the *angle* and bisecting the *side* are different things, done by the
bisector and the median respectively. And when writing the
proportion, the piece next to $B$ pairs with the side through $B$:
$\frac{BD}{DC} = \frac{AB}{AC}$, not $\frac{AC}{AB}$.

## The Takeaway

A bisector divides the opposite side in the ratio of the adjacent
sides - proved with a parallel, an isosceles triangle and the
generalized Thales theorem. Only in an isosceles triangle does it also
bisect that side.

## Check Yourself

1. $AB = 4$, $AC = 6$, $BC = 15$; $AD$ bisects $\angle A$. Find $BD$, $DC$.
2. The bisector from $A$ splits $BC$ into $3$ and $5$; $AC = 10$. Find
   $AB$.
3. In a triangle with sides $5$, $5$, $8$, the bisector to the $8$-side
   divides it how?
4. $AB = 7$, $AC = 7$. Where does the bisector from $A$ meet $BC$?
5. $BD = 6$, $DC = 9$, and the perimeter of $\triangle ABC$ is $40$. Find $AB$
   and $AC$.
6. Someone writes $\frac{BD}{DC} = \frac{AC}{AB}$ for the bisector $AD$.
   What's the right proportion?

> [!spoiler] Answers
>
> 1. $6$ and $9$.
> 2. $6$.
> 3. Into $4$ and $4$ - isosceles.
> 4. At its midpoint.
> 5. $AB + AC = 25$ in the ratio $2 : 3$: $10$ and $15$.
> 6. $\frac{BD}{DC} = \frac{AB}{AC}$.
