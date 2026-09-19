---
title: "[S] Midsegment of a Triangle and Its Property"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-8-lesson-8-thales-theorem]
---

## Why It Matters

Join the midpoints of two sides of any triangle. The segment you get
is parallel to the third side and exactly half as long - every time,
whatever the triangle. That's the midsegment theorem, and it's the
reason the midpoints of *any* quadrilateral's sides form a
parallelogram, the reason a triangle splits into four congruent
copies of itself, and a workhorse for lengths in every later figure.

## The Big Idea

Let $M$ and $N$ be the midpoints of $AB$ and $AC$. Thales' consequence
says: the line through $M$ parallel to $BC$ bisects $AC$ - so it passes
through $N$. Hence $MN \parallel BC$. For the length, draw the line
through $N$ parallel to $AB$; it bisects $BC$ at $K$, and $MNKB$ is a
parallelogram, so $MN = BK = \frac{1}{2}BC$.

The three midsegments cut the triangle into four congruent triangles,
each similar to the original at half scale - the picture that
explains why area scales with the square of length.

## The Rule

The **midsegment** of a triangle is the segment joining the midpoints
of two of its sides. A triangle has three midsegments.

**Theorem.** The midsegment of a triangle is parallel to the third
side and equal to half of it:

$$
MN \parallel BC, \qquad MN = \frac{1}{2} BC
$$

Consequences:

- the three midsegments divide a triangle into four congruent
  triangles;
- the perimeter of the midsegment triangle is half the perimeter of
  the original;
- the midpoints of the sides of any quadrilateral are the vertices of
  a parallelogram (each pair of adjacent midpoints is a midsegment of
  a triangle formed with a diagonal, so opposite sides of the new
  figure are both parallel to that diagonal and half its length).

## Worked Example

In $\triangle ABC$, $M$, $N$, $K$ are the midpoints of $AB$, $BC$, $CA$, and
$AB = 10$, $BC = 8$, $CA = 6$. Find the sides and perimeter of $\triangle
MNK$. Then: the diagonals of a quadrilateral are $12$ and $16$ - find
the perimeter of the quadrilateral formed by the midpoints of its
sides.

- **Midsegments:** $MN$ joins midpoints of $AB$ and $BC$, so it's
  parallel to $CA$ and half of it: $3$. Likewise $NK = \frac{1}{2}AB = 5$
  and $KM = \frac{1}{2}BC = 4$.
- **Perimeter of $MNK$:** $3 + 5 + 4 = 12$ - half of $24$.
- **Midpoint quadrilateral.** Its sides are midsegments of the four
  triangles the diagonals make: two of them are half of the $12$
  diagonal, two are half of the $16$. Perimeter $6 + 8 + 6 + 8 = 28$ - the
  sum of the diagonals.

Angles: since $MN \parallel CA$, $\angle BMN = \angle BAC$ - corresponding
angles - so the small triangles have the same angles as the big one.

## Common Mistake

Pairing the midsegment with the wrong side. $MN$, joining the
midpoints of $AB$ and $BC$, is half of $CA$ - the side it *doesn't
touch* - not of $AB$ or $BC$. Each midsegment is parallel to and half
of the side opposite the vertex the two halved sides share. And the
theorem needs *both* endpoints to be midpoints; a segment from one
midpoint to a random point isn't a midsegment.

## The Takeaway

The segment joining the midpoints of two sides is parallel to the
third and half its length. It cuts any triangle into four congruent
quarters, and it makes the midpoints of any quadrilateral's sides a
parallelogram.

## Check Yourself

1. A triangle has sides $14$, $10$, $8$. Find the three midsegments.
2. A midsegment is $7$. Find the side it's parallel to.
3. A triangle's perimeter is $30$. Find the perimeter of its midsegment
   triangle.
4. In $\triangle ABC$, midsegment $MN \parallel AC$ and $\angle A = 50^\circ$.
   Find $\angle BMN$.
5. A quadrilateral's diagonals are $10$ and $10$. What figure do the
   midpoints of its sides form? (Hint: all sides equal.)
6. Someone says the midsegment joining the midpoints of $AB$ and $AC$ is
   half of $AB$. Which side is it really half of?

> [!spoiler] Answers
>
> 1. $7$, $5$, $4$.
> 2. $14$.
> 3. $15$.
> 4. $50^\circ$.
> 5. A rhombus - a parallelogram with all sides $5$.
> 6. $BC$ - the side it doesn't touch.
