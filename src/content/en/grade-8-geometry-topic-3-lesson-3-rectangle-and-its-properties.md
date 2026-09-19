---
title: "[S] Rectangle and Its Properties"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-2-lesson-2-parallelogram-and-its-properties]
---

## Why It Matters

A rectangle is a parallelogram that's been straightened up: all its
angles are right. That one extra condition buys one extra property -
its diagonals are equal - and that property is how builders check a
frame is square: measure both diagonals, and if they match, every
corner is $90^\circ$. This topic proves the property and its converse,
which is exactly that test.

## The Big Idea

Since a rectangle is a parallelogram - opposite sides are parallel,
as they're both perpendicular to a third side - it inherits
everything: equal opposite sides, diagonals bisecting each other. The
new fact is that the diagonals are *equal*. Why? The two right
triangles $ABD$ and $DCA$, on the base $AD$, have equal legs ($AB = DC$)
and a common leg $AD$; congruent by two legs, so their hypotenuses -
the diagonals - are equal.

The converse: a parallelogram whose diagonals are equal has congruent
triangles $ABD$ and $DCA$ by SSS, so its adjacent angles at $A$ and $D$
are equal; being co-interior on parallels they sum to $180^\circ$, so
each is $90^\circ$. That's the builder's test.

## The Rule

A **rectangle** is a parallelogram with a right angle. Then all four
angles are right (adjacent angles of a parallelogram are
supplementary).

A rectangle has all the properties of a parallelogram, and in
addition:

**Theorem.** The diagonals of a rectangle are equal.

**Converse.** If the diagonals of a parallelogram are equal, it is a
rectangle.

Consequences: the intersection of the diagonals is equidistant from
all four vertices - it's the centre of the circle through them; and
the diagonals split a rectangle into four isosceles triangles.

A rectangle is determined by two adjacent sides; its perimeter is
$2(a + b)$.

## Worked Example

In rectangle $ABCD$ the diagonals meet at $O$ and $\angle AOB = 60^\circ$.
$AB = 5$. Find the diagonals. Then: is a parallelogram with diagonals
$13$ and $13$ a rectangle? And one with a $90^\circ$ angle and diagonals
$10$ and $12$?

- **$\triangle AOB$:** $OA = OB$ (halves of equal diagonals), so it's
  isosceles with apex angle $60^\circ$ - hence equilateral. $OA = OB = AB
  = 5$.
- **Diagonals:** $AC = BD = 2 \cdot 5 = 10$.
- **Diagonals $13$, $13$:** equal, in a parallelogram - by the converse,
  a rectangle.
- **Right angle, diagonals $10$ and $12$:** impossible - a parallelogram
  with a right angle is a rectangle, and its diagonals would have to
  be equal. The data is contradictory.

The builder: a frame $3$ by $4$ is square when both diagonals measure
$5$ (as the Pythagorean theorem confirms later this year).

## Common Mistake

Concluding "rectangle" from equal diagonals alone. An isosceles
trapezoid also has equal diagonals and isn't a rectangle. The
converse theorem needs a *parallelogram* with equal diagonals. Check
parallelism (or equal opposite sides) first, then the diagonals. And
don't assume the diagonals bisect the angles - in a $3 \times 4$
rectangle they don't; that's a rhombus property.

## The Takeaway

A rectangle is a parallelogram with right angles; it keeps every
parallelogram property and adds equal diagonals - and a parallelogram
with equal diagonals is a rectangle. The diagonals' crossing is
equidistant from the four corners.

## Check Yourself

1. A rectangle has diagonal $17$. How far is the intersection of the
   diagonals from each vertex?
2. In rectangle $ABCD$, $\angle CAB = 35^\circ$. Find $\angle ACB$ and $\angle
   AOB$ ($O$ the diagonals' intersection).
3. A parallelogram has equal diagonals. What is it?
4. A quadrilateral has equal diagonals. Is it necessarily a rectangle?
5. A rectangle's diagonals meet at $70^\circ$. Find the angle between a
   diagonal and the longer side.
6. Someone checks a door frame by measuring one diagonal. Why isn't
   that enough?

> [!spoiler] Answers
>
> 1. $8.5$.
> 2. $\angle ACB = 55^\circ$; $\angle AOB = 180^\circ - 2 \cdot 35^\circ = 110^\circ$.
> 3. A rectangle.
> 4. No - an isosceles trapezoid, for instance.
> 5. The diagonals' angle of $70^\circ$ sits opposite the shorter side;
>    the diagonal makes $35^\circ$ with the longer side.
> 6. Equal diagonals are the test - both must be measured and compared.
