---
title: "[S] Similar Triangles"
tag: DEF
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-11-lesson-11-generalized-thales-theorem]
---

## Why It Matters

A photo and its enlargement. A model car and the real one. A triangle
and its shadow on a sunny wall. Same shape, different size - all
angles equal, all lengths scaled by one factor. That relationship is
similarity, and it's how surveyors measure a mountain they can't
climb, how maps work, and how the Pythagorean theorem will be proved
in a few topics' time. Congruence was "same shape, same size";
similarity drops the second half.

## The Big Idea

Two triangles are similar when one is a scaled copy of the other: the
angles match, and every side of the second is the same multiple $k$
of the corresponding side of the first. That multiple is the
similarity ratio. Scale by $k = 2$ and every side doubles; the angles
don't change at all.

The generalized Thales theorem produces similar triangles on demand:
a line parallel to a side of a triangle cuts off a small triangle with
the same angles (corresponding angles on parallels) and proportional
sides - a scaled copy nested in the corner. That's the basic picture,
and the criteria of the next topic all reduce to it.

## The Rule

Two triangles are **similar** if their corresponding angles are equal
and their corresponding sides are proportional:

$$
\triangle ABC \sim \triangle A_1B_1C_1 \iff \angle A = \angle A_1,\ \angle B = \angle B_1,\ \angle C = \angle C_1 \ \text{ and } \ \frac{A_1B_1}{AB} = \frac{B_1C_1}{BC} = \frac{C_1A_1}{CA} = k
$$

The number $k$ is the **similarity ratio** (scale factor) of the second
triangle to the first. Corresponding vertices are listed in the same
order in $\sim$.

**Lemma.** A line parallel to a side of a triangle cuts off a triangle
similar to it.

Properties: similar triangles have proportional perimeters (ratio $k$);
congruent triangles are similar with $k = 1$; similarity is symmetric
(swapping the triangles gives ratio $\frac{1}{k}$) and transitive.

## Worked Example

$\triangle ABC \sim \triangle KLM$ with $AB = 6$, $BC = 9$, $CA = 12$ and $KL =
4$. Find $LM$, $MK$, the ratio, and the perimeters. Then: in $\triangle
ABC$, $MN \parallel BC$ with $AM = 3$, $AB = 9$, $BC = 12$ - find $MN$.

- **Ratio.** $k = \frac{KL}{AB} = \frac{4}{6} = \frac{2}{3}$.
- **Sides:** $LM = \frac{2}{3} \cdot 9 = 6$, $MK = \frac{2}{3} \cdot 12 = 8$.
- **Perimeters:** $27$ and $18$; ratio $\frac{18}{27} = \frac{2}{3}$. Same
  $k$.
- **Parallel cut.** $\triangle AMN \sim \triangle ABC$ by the lemma, with $k =
  \frac{AM}{AB} = \frac{1}{3}$. So $MN = \frac{1}{3} BC = 4$.

Angles carry over unchanged: if $\angle B = 70^\circ$ then $\angle L = 70^\circ$.

## Common Mistake

Matching sides by position on the page instead of by correspondence.
In $\triangle ABC \sim \triangle KLM$, $KL$ corresponds to $AB$ because
$K, L$ and $A, B$ are the first two letters. When the correspondence
isn't given, find it from the angles: equal angles are opposite
corresponding sides. And $k$ is a
*ratio of lengths*; perimeters scale by $k$, but areas won't - that
comes later.

## The Takeaway

Similar triangles have equal angles and proportional sides, with one
scale factor $k$ for every pair of corresponding sides and for the
perimeters. A line parallel to a side cuts off a similar triangle.
Read the correspondence from the letters or the angles, never from
size.

## Check Yourself

1. $\triangle ABC \sim \triangle DEF$, $AB = 5$, $DE = 15$. Find the ratio
   and $EF$ if $BC = 7$.
2. Similar triangles have perimeters $24$ and $36$; a side of the first
   is $8$. Find the corresponding side of the second.
3. $MN \parallel BC$, $AN = 2$, $AC = 8$, $BC = 20$. Find $MN$.
4. Are all equilateral triangles similar? All isosceles ones?
5. $\triangle ABC \sim \triangle KLM$ and $\angle C = 40^\circ$. Which angle of
   $KLM$ is $40^\circ$?
6. Someone reads $\triangle ABC \sim \triangle KLM$ and pairs $AB$ with
   $LM$. What's the correct partner of $AB$?

> [!spoiler] Answers
>
> 1. $k = 3$; $EF = 21$.
> 2. $12$.
> 3. $5$.
> 4. Yes (all angles $60^\circ$); no (apex angles can differ).
> 5. $\angle M$.
> 6. $KL$ - the first two letters of each name.
