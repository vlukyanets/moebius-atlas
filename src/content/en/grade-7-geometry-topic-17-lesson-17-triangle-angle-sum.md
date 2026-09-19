---
title: "[S] Sum of the Angles of a Triangle"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-10-lesson-10-properties-of-parallel-lines, grade-7-geometry-topic-11-lesson-11-triangle-and-its-elements]
---

## Why It Matters

Tear the three corners off a paper triangle and lay them side by side:
they make a straight line. Every triangle, every time. That's the most
famous theorem of school geometry - the angles of a triangle sum to
$180^\circ$ - and it's the reason two angles of a triangle always tell
you the third. It runs through navigation, surveying and every angle
problem you'll ever meet.

## The Big Idea

Why should the corners make a straight line? Draw a line through one
vertex parallel to the opposite side. The two other angles of the
triangle reappear at that vertex as alternate angles - the property of
parallel lines - and together with the vertex's own angle they fill
the straight angle along the parallel. So the three angles add to
$180^\circ$. The proof is three lines long and rests entirely on the
parallel axiom: in a geometry without unique parallels, the theorem
fails.

Consequences fall out at once: a triangle has at most one obtuse or
right angle, and each acute angle of a right triangle is the other's
complement.

## The Rule

**Theorem.** The sum of the angles of a triangle is $180^\circ$:

$$
\angle A + \angle B + \angle C = 180^\circ
$$

*Proof.* Through $B$ draw the line $a \parallel AC$. The angles $a$
makes with $BA$ and $BC$ are alternate to $\angle A$ and $\angle C$
respectively, so equal to them. The three angles at $B$ along the line
$a$ make a straight angle: $\angle A + \angle B + \angle C = 180^\circ$.
$\square$

Consequences:

- a triangle has at most one right or obtuse angle; the other two are
  acute;
- in a right triangle the two acute angles sum to $90^\circ$;
- each angle of an equilateral triangle is $60^\circ$;
- in an isosceles triangle, the base angles are $\frac{180^\circ - \angle
  A}{2}$ where $\angle A$ is the apex angle.

## Worked Example

Find the third angle of a triangle with angles $48^\circ$ and $67^\circ$.
Then: the angles of a triangle are in the ratio $2 : 3 : 4$ - find them.
Then: an isosceles triangle has apex angle $40^\circ$ - find its base
angles.

- **Third angle:** $180^\circ - 48^\circ - 67^\circ = 65^\circ$.
- **Ratio:** $2x + 3x + 4x = 180$, $9x = 180$, $x = 20$. Angles $40^\circ$,
  $60^\circ$, $80^\circ$ - all acute.
- **Isosceles:** base angles equal, $2y + 40 = 180$, $y = 70^\circ$ each.

Right triangle: one acute angle is $35^\circ$; the other is $90^\circ -
35^\circ = 55^\circ$.

## Common Mistake

Assuming a triangle can have two right angles or two obtuse angles -
"a triangle with angles $90^\circ$, $90^\circ$, and something." Two right
angles already use all $180^\circ$, leaving nothing for the third. When
a computed angle comes out zero or negative, the setup was wrong, not
the theorem.

## The Takeaway

The three angles of any triangle sum to $180^\circ$, proved by a
parallel through a vertex. So two angles give the third, a right
triangle's acute angles are complementary, and an equilateral
triangle's angles are $60^\circ$ each.

## Check Yourself

1. Two angles of a triangle are $53^\circ$ and $71^\circ$. Find the third.
2. Angles are in the ratio $1 : 2 : 3$. Find them, and name the
   triangle by angles.
3. An isosceles triangle has a base angle of $50^\circ$. Find the apex
   angle.
4. One acute angle of a right triangle is twice the other. Find both.
5. Can a triangle have angles $100^\circ$, $50^\circ$, $40^\circ$? Why not?
6. Someone finds the angles of a triangle to be $95^\circ$, $95^\circ$ and
   $-10^\circ$. What must have gone wrong?

> [!spoiler] Answers
>
> 1. $56^\circ$.
> 2. $30^\circ$, $60^\circ$, $90^\circ$ - right.
> 3. $80^\circ$.
> 4. $30^\circ$ and $60^\circ$.
> 5. No - they sum to $190^\circ$.
> 6. Two obtuse angles are impossible; the data or the setup was
>    inconsistent.
