---
title: "[S] Exterior Angle of a Triangle. Relations between Sides and Angles"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-17-lesson-17-triangle-angle-sum, grade-7-geometry-topic-14-lesson-14-isosceles-triangle]
---

## Why It Matters

Extend one side of a triangle past a vertex: the angle that opens up
outside is the exterior angle, and it equals the two interior angles
that aren't next to it. That one fact shortens dozens of angle
problems. And a second fact, just as useful: in any triangle the
biggest angle faces the biggest side. It's why the hypotenuse is the
longest side of a right triangle, and it's the first step to the
triangle inequality.

## The Big Idea

The exterior angle at $C$ is adjacent to $\angle C$, so it's $180^\circ -
\angle C$. But $\angle A + \angle B$ is also $180^\circ - \angle C$, by the
angle sum. So the exterior angle equals $\angle A + \angle B$ - and in
particular it's bigger than either of them.

Sides against angles: in an isosceles triangle, equal sides face equal
angles. Lengthen one side and watch the angle opposite it grow. The
precise statement: if $AB > AC$ then $\angle C > \angle B$ - the bigger
side faces the bigger angle - and conversely. The proof marks off $AC$
along $AB$ to make an isosceles triangle, then compares angles using
the exterior angle fact.

## The Rule

An **exterior angle** of a triangle is the angle adjacent to one of
its interior angles - formed by one side and the extension of another.

**Theorem.** An exterior angle of a triangle equals the sum of the two
interior angles not adjacent to it.

*Proof.* The exterior angle at $C$ is $180^\circ - \angle C = \angle A +
\angle B$. $\square$

Consequence: an exterior angle is greater than either non-adjacent
interior angle.

**Theorem (sides and angles).** In a triangle, the greater side lies
opposite the greater angle; and conversely, the greater angle lies
opposite the greater side.

$$
AB > AC \iff \angle C > \angle B
$$

Consequences: in a right triangle, the **hypotenuse** (opposite the
right angle) is the longest side; in an obtuse triangle, the side
opposite the obtuse angle is the longest.

## Worked Example

In $\triangle ABC$, $\angle A = 40^\circ$ and $\angle B = 75^\circ$. Find the
exterior angle at $C$. Then order the sides of the triangle by length.
Then: a triangle has sides $5$, $7$, $9$ - which angle is largest?

- **Exterior angle at $C$:** $\angle A + \angle B = 115^\circ$. (Check: $\angle
  C = 65^\circ$, and $180^\circ - 65^\circ = 115^\circ$.)
- **Angles:** $40^\circ$ at $A$, $75^\circ$ at $B$, $65^\circ$ at $C$. Sides
  opposite: $BC$ opposite $A$, $AC$ opposite $B$, $AB$ opposite $C$.
- **Order:** biggest angle $B$, so $AC$ is longest; then $AB$; then $BC$:
  $AC > AB > BC$.
- **Sides $5, 7, 9$:** the largest angle faces the longest side, $9$.

An isosceles check: base angles equal, so legs equal - consistent with
"equal angles face equal sides."

## Common Mistake

Comparing a side with the angle *at* it instead of *opposite* it. The
longest side is opposite the largest angle, not adjacent to it: in a
right triangle the hypotenuse is the side that doesn't touch the right
angle. Also, an exterior angle equals the two *non-adjacent* interior
angles - adding the adjacent one instead gives $180^\circ$ every time,
which is true but useless.

## The Takeaway

An exterior angle equals the sum of the two far interior angles. The
bigger side faces the bigger angle and vice versa, so the hypotenuse
is the longest side of a right triangle. Both tools come straight from
the angle sum.

## Check Yourself

1. Interior angles at $A$ and $B$ are $50^\circ$ and $60^\circ$. Find the
   exterior angle at $C$.
2. The exterior angle at $A$ is $120^\circ$ and $\angle B = 45^\circ$. Find
   $\angle C$.
3. A triangle has angles $30^\circ$, $70^\circ$, $80^\circ$. Which side is
   shortest?
4. In $\triangle ABC$, $AB = 8$, $BC = 5$, $AC = 6$. Order the angles.
5. Why is the hypotenuse the longest side of a right triangle?
6. Someone says the exterior angle at $C$ equals $\angle A + \angle C$.
   What's wrong?

> [!spoiler] Answers
>
> 1. $110^\circ$.
> 2. $75^\circ$.
> 3. The side opposite $30^\circ$.
> 4. $\angle C$ (opposite $AB$) $> \angle B$ (opposite $AC$) $> \angle A$
>    (opposite $BC$).
> 5. It's opposite the right angle, the largest angle in the triangle.
> 6. It equals the two angles *not* adjacent to it: $\angle A + \angle B$.
