---
title: "[S] Third Criterion for Congruent Triangles"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-14-lesson-14-isosceles-triangle]
---

## Why It Matters

Why are triangles used in bridges and bicycle frames instead of
squares? Because three rods of fixed length can only be assembled one
way - the triangle can't be pushed out of shape. Four rods can. That
physical fact is a theorem: three sides determine a triangle
completely. It's the third congruence criterion, and it's the one that
needs no angle at all.

## The Big Idea

Suppose two triangles have all three sides equal. Lay them along the
common side $AB$ with the third vertices $C$ and $C_1$ on opposite
sides, and join $C$ to $C_1$. Now $ACC_1$ is isosceles ($AC = AC_1$) and
so is $BCC_1$ ($BC = BC_1$), so the base angles at $C$ and $C_1$ are equal
in each - and adding the two pieces, $\angle ACB = \angle AC_1B$. That's an
angle between two equal sides: SAS finishes the job. Three sides force
the angles, and the triangles are congruent.

## The Rule

**Third criterion (SSS).** If three sides of one triangle are
respectively equal to three sides of another, the triangles are
congruent.

$$
AB = A_1B_1,\ BC = B_1C_1,\ CA = C_1A_1 \ \Rightarrow\ \triangle ABC = \triangle A_1B_1C_1
$$

(Proof sketch: place the triangles on the common side with the third
vertices on opposite sides; the two isosceles triangles formed give
$\angle C = \angle C_1$; then SAS.)

**Rigidity of the triangle.** A triangle is determined by its three
sides: two triangles with the same three side lengths are congruent.
This is why triangular frames don't deform.

The three criteria together - SAS, ASA, SSS - are the standard tools
for proving triangles congruent.

## Worked Example

$ABCD$ is a figure with $AB = CD$ and $BC = DA$. Prove $\angle B = \angle D$.
Then: in $\triangle ABC$ with $AB = AC$, $M$ is the midpoint of $BC$ -
prove $AM \perp BC$ using SSS.

- **Draw the diagonal $AC$.** Triangles $ABC$ and $CDA$.
- **Three sides:** $AB = CD$ (given), $BC = DA$ (given), $AC$ common.
- **SSS:** $\triangle ABC = \triangle CDA$, with $B \leftrightarrow D$. So
  $\angle B = \angle D$. $\square$
- **Second:** $\triangle ABM$ and $\triangle ACM$: $AB = AC$, $BM = MC$, $AM$
  common - SSS. So $\angle AMB = \angle AMC$; adjacent and equal, each is
  $90^\circ$. $\square$

Rigidity in practice: to make a gate square, fix a diagonal brace -
the two triangles it creates can't change shape.

## Common Mistake

Extending the criterion to angles: "three angles equal, so
congruent." Three equal angles give the same *shape* but not the same
*size* - a small and a large equilateral triangle have all angles
$60^\circ$ and aren't congruent. SSS works because sides carry size;
"AAA" is not a criterion. (It's *similarity*, a grade 8 idea.)

## The Takeaway

Three equal sides make congruent triangles - the SSS criterion, proved
through isosceles triangles and SAS. It's also why triangles are
rigid. With SAS, ASA and SSS you can prove any congruence this course
asks for.

## Check Yourself

1. $\triangle ABC$, $\triangle DEF$: $AB = DE$, $BC = EF$, $CA = FD$.
   Congruent? By which criterion?
2. $\triangle ABC$, $\triangle DEF$: all three angles respectively equal.
   Congruent?
3. $AB = AD$ and $CB = CD$. Prove $\angle ABC = \angle ADC$.
4. A quadrilateral has all four sides equal. Are the two triangles a
   diagonal cuts it into congruent? Why?
5. Which criteria could prove $\triangle ABM = \triangle ACM$ when $AB =
   AC$ and $M$ is the midpoint of $BC$?
6. Someone builds a square frame from four rods and it collapses into a
   rhombus; a triangular one holds. Which theorem explains it?

> [!spoiler] Answers
>
> 1. Yes, SSS.
> 2. Not necessarily.
> 3. $\triangle ABC = \triangle ADC$ by SSS ($AC$ common), so the angles
>    at $B$ and $D$ are equal.
> 4. Yes - SSS, with the diagonal common.
> 5. SSS ($AB = AC$, $BM = MC$, $AM$ common), or SAS after the isosceles
>    theorem gives $\angle B = \angle C$.
> 6. Rigidity of the triangle - SSS; a quadrilateral isn't determined by
>    its sides.
