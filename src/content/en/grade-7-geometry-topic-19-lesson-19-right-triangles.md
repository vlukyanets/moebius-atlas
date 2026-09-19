---
title: "[S] Right Triangles. Properties and Congruence Criteria"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-17-lesson-17-triangle-angle-sum, grade-7-geometry-topic-16-lesson-16-third-congruence-criterion]
---

## Why It Matters

A ladder against a wall, a ramp, a shadow on the ground, half of every
rectangle - right triangles are the ones the real world is full of,
and next year they get an entire theory of their own. This year they
get two things: a handful of properties that follow from their right
angle, and congruence criteria that need only *two* parts instead of
three, because the right angle is already one.

## The Big Idea

A right angle uses $90^\circ$ of the triangle's $180^\circ$, so the other
two angles share the remaining $90^\circ$: they're complementary. And
the side facing the right angle - the hypotenuse - faces the largest
angle, so it's the longest side; the two legs are shorter.

Congruence gets cheaper. In two right triangles the right angles
already match, so one matching angle and one matching side is a full
ASA or SAS; two legs matching is SAS with the right angle between. The
surprising one is hypotenuse-and-leg: two sides and a *non*-included
angle, which normally fails - but the right angle makes it work.

Two special facts: the leg opposite a $30^\circ$ angle is half the
hypotenuse, and the converse.

## The Rule

In a right triangle the sides forming the right angle are the
**legs**; the side opposite it is the **hypotenuse**.

**Properties:**

- the two acute angles sum to $90^\circ$;
- the hypotenuse is longer than either leg;
- the leg opposite a $30^\circ$ angle equals half the hypotenuse; if a
  leg equals half the hypotenuse, the angle opposite it is $30^\circ$.

**Congruence criteria for right triangles.** Two right triangles are
congruent if:

1. two legs of one equal two legs of the other (SAS);
2. a leg and its adjacent acute angle match (ASA);
3. the hypotenuse and an acute angle match (ASA, via the complement);
4. the hypotenuse and a leg match.

The last is proved by placing the triangles leg to leg on one side of
a line so the hypotenuses form an isosceles triangle.

## Worked Example

A right triangle has an acute angle of $58^\circ$. Find the other. Then:
$\triangle ABC$ has $\angle C = 90^\circ$, $\angle A = 30^\circ$ and $AB = 14$ -
find $BC$. Then: two right triangles have hypotenuses of $10$ and one
leg of $6$ each - congruent?

- **Other acute angle:** $90^\circ - 58^\circ = 32^\circ$.
- **$30^\circ$ property:** $BC$ is the leg opposite $\angle A = 30^\circ$, so
  $BC = \frac{1}{2}AB = 7$.
- **Hypotenuse and leg:** criterion 4 - congruent.

A proof: in an isosceles triangle, the altitudes to the legs are
equal. With $AB = AC$ and altitudes $BH$ (to $AC$) and $CK$ (to $AB$),
the right triangles $BHC$ and $CKB$ have the hypotenuse $BC$ in common
and $\angle HCB = \angle KBC$ (base angles), so they're congruent by
criterion 3, and $BH = CK$.

## Common Mistake

Using the $30^\circ$ rule with the wrong leg. The leg that's half the
hypotenuse is the one *opposite* the $30^\circ$ angle, not the one next
to it. With $\angle A = 30^\circ$, that's $BC$, the side that doesn't
touch $A$. The adjacent leg is longer - about $0.87$ of the hypotenuse,
as you'll compute next year.

## The Takeaway

A right triangle's acute angles are complementary and its hypotenuse
is its longest side; the leg opposite $30^\circ$ is half the hypotenuse.
Because the right angles already agree, two matching parts - two legs,
leg and angle, hypotenuse and angle, or hypotenuse and leg - prove two
right triangles congruent.

## Check Yourself

1. One acute angle of a right triangle is $27^\circ$. Find the other.
2. The hypotenuse is $20$ and one angle is $30^\circ$. Find the leg
   opposite it.
3. A leg is $4$ and the hypotenuse is $8$. Find the angles.
4. Two right triangles: legs $3$ and $5$ in each. Congruent? By which
   criterion?
5. Two right triangles: hypotenuse $13$ and an acute angle of $40^\circ$
   in each. Congruent?
6. Someone takes the leg *adjacent* to the $30^\circ$ angle as half the
   hypotenuse. Which leg is it really?

> [!spoiler] Answers
>
> 1. $63^\circ$.
> 2. $10$.
> 3. $30^\circ$ (opposite the leg $4$), $60^\circ$, $90^\circ$.
> 4. Yes - two legs.
> 5. Yes - hypotenuse and acute angle.
> 6. The leg opposite the $30^\circ$ angle.
