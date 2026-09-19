---
title: "[S] First and Second Criteria for Congruent Triangles"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-12-lesson-12-congruent-figures]
---

## Why It Matters

To prove two triangles equal, you'd need six matching parts. Nobody
ever checks six. Three well-chosen ones are enough - and which three
is the content of the congruence criteria. They're the workhorses of
plane geometry: almost every later proof about equal segments or
angles goes "these two triangles are congruent by such-and-such
criterion, so this side equals that side."

## The Big Idea

Fix two sides and the angle between them, and the triangle is
determined: the third side has nowhere to go but from one end to the
other. That's the first criterion - side, angle, side. Fix one side
and both angles at its ends, and again there's no freedom: the other
two sides are rays from the ends at set angles, and they meet in
exactly one point. That's the second - angle, side, angle.

The proofs lay one triangle on the other: match the equal angle (or
side), and the axioms about laying off segments and angles force the
rest to coincide.

## The Rule

**First criterion (SAS).** If two sides and the angle between them of
one triangle are respectively equal to two sides and the angle
between them of another, the triangles are congruent.

$$
AB = A_1B_1,\ AC = A_1C_1,\ \angle A = \angle A_1 \ \Rightarrow\ \triangle ABC = \triangle A_1B_1C_1
$$

**Second criterion (ASA).** If a side and the two angles adjacent to
it of one triangle are respectively equal to a side and the two
adjacent angles of another, the triangles are congruent.

$$
AB = A_1B_1,\ \angle A = \angle A_1,\ \angle B = \angle B_1 \ \Rightarrow\ \triangle ABC = \triangle A_1B_1C_1
$$

The angle in SAS must be *between* the two sides; the side in ASA
must be *between* the two angles. Once congruence is established, all
the remaining parts are equal too.

## Worked Example

Segments $AC$ and $BD$ bisect each other at $O$. Prove $AB = CD$. Then:
in $\triangle ABC$ and $\triangle A_1B_1C_1$, $AB = A_1B_1$, $\angle A =
\angle A_1$, $\angle B = \angle B_1$ - which criterion applies?

- **Look for triangles:** $\triangle AOB$ and $\triangle COD$.
- **Two sides:** $AO = OC$ and $BO = OD$ - given ("bisect each other").
- **The angle between them:** $\angle AOB = \angle COD$ - vertical angles.
- **SAS:** $\triangle AOB = \triangle COD$. Then the third sides are equal:
  $AB = CD$. $\square$
- **Second question:** a side and both angles at its ends - ASA. The
  triangles are congruent, and so $BC = B_1C_1$, $AC = A_1C_1$, $\angle C =
  \angle C_1$.

Note the correspondence in the first: $A \leftrightarrow C$, $O
\leftrightarrow O$, $B \leftrightarrow D$, so it's $\triangle AOB =
\triangle COD$, and $AB$ matches $CD$.

## Common Mistake

Using SAS with an angle that isn't between the two sides. Two sides
and a *different* angle - "SSA" - don't determine a triangle: two
different triangles can share them. Likewise ASA needs the side to
be the one joining the two angles. Before citing a criterion, say
which two parts the third one lies between.

## The Takeaway

Two sides and the included angle, or one side and its two adjacent
angles, force a triangle: SAS and ASA. Find the triangles, list the
three matching parts with reasons, name the criterion, then read off
whatever else you need from the congruence.

## Check Yourself

1. $\triangle ABC$, $\triangle DEF$: $AB = DE$, $AC = DF$, $\angle A = \angle
   D$. Congruent? By which criterion?
2. $\triangle ABC$, $\triangle DEF$: $BC = EF$, $\angle B = \angle E$, $\angle C =
   \angle F$. Congruent? By which?
3. $\triangle ABC$, $\triangle DEF$: $AB = DE$, $BC = EF$, $\angle A = \angle
   D$. Does a criterion apply?
4. Point $O$ is the midpoint of $AB$ and of $CD$. Prove that
   $\angle CAO = \angle DBO$.
5. In an isosceles triangle $ABC$ with $AB = AC$, $AD$ bisects $\angle A$.
   Prove $\triangle ABD = \triangle ACD$.
6. Someone applies SAS to two triangles with two equal sides and an
   equal angle *not* between them. Why isn't the conclusion valid?

> [!spoiler] Answers
>
> 1. Yes, SAS.
> 2. Yes, ASA.
> 3. No - the angle isn't between the given sides.
> 4. $\triangle AOC = \triangle BOD$ by SAS (vertical angles at $O$), so
>    $\angle CAO = \angle DBO$.
> 5. $AB = AC$, $AD$ common, $\angle BAD = \angle CAD$: SAS.
> 6. SSA doesn't determine a triangle; two different triangles can have
>    those three parts.
