---
title: "[S] Mutual Position of Planes"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-27-lesson-27-line-and-plane]
---

## Why It Matters

Floor and ceiling; two walls meeting in a corner; an open book's
pages; a roof against a wall. Two planes can be parallel or can
cross along a line, and when they cross the angle between them - the
*dihedral* angle - is what makes a corner square or a roof steep.
This completes the vocabulary of space: point, line, plane, and
every pairing among them. The solids of the remaining topics are
built from planes in exactly these positions.

## The Big Idea

Two distinct planes either never meet - parallel, like floor and
ceiling - or meet along a whole line (axiom A3), like two walls at a
corner. There's no "one common point" case for planes. Parallel
planes are cut by any third plane along parallel lines, and they
are everywhere the same distance apart. Crossing planes form a
dihedral angle, measured by the ordinary angle between two rays,
one in each plane, both perpendicular to the common edge at the same
point. When that angle is $90^\circ$ the planes are perpendicular - the
walls of a well-built room.

## The Rule

Two distinct planes are:

- **intersecting** if they have a common line (and no other common
  points);
- **parallel** if they have no common point.

**Criterion of parallelism.** If two intersecting lines of one plane
are respectively parallel to two lines of another plane, the planes
are parallel.

**Properties of parallel planes.** A third plane cuts them along
parallel lines; segments of parallel lines between them are equal.

A **dihedral angle** is formed by two half-planes with a common
boundary line (the **edge**). Its **linear angle** is the angle
between two rays drawn from one point of the edge, one in each
half-plane, perpendicular to the edge; the dihedral angle is measured
by its linear angle (all linear angles of a dihedral angle are equal).

Two planes are **perpendicular** if they form a right dihedral angle.

**Criterion of perpendicularity.** If a plane contains a line
perpendicular to another plane, the two planes are perpendicular.

## Worked Example

In the cube $ABCDA_1B_1C_1D_1$: classify the planes $ABC$ and $A_1B_1C_1$;
$ABC$ and $ABB_1$; find the dihedral angle between the faces $ABC$ and
$ABB_1$; find the dihedral angle between the plane $ABC$ and the plane
$ABC_1$ (through edge $AB$ and vertex $C_1$).

- **$ABC$, $A_1B_1C_1$.** $AB \parallel A_1B_1$ and $AD \parallel A_1D_1$ - two
  intersecting lines parallel to two lines of the other: parallel
  planes (top and bottom).
- **$ABC$, $ABB_1$.** Share the line $AB$ - intersecting.
- **Angle between $ABC$ and $ABB_1$.** Edge $AB$; at $B$, ray $BC$ (in
  $ABC$) and ray $BB_1$ (in $ABB_1$) are both $\perp AB$. $\angle CBB_1 =
  90^\circ$: perpendicular faces.
- **Angle between $ABC$ and $ABC_1$.** Edge $AB$; at $B$, $BC \perp AB$ in the
  base, and $BC_1 \perp AB$ in the slanted plane (since $AB \perp$ plane
  $BCC_1$). Linear angle $\angle CBC_1 = 45^\circ$ - the diagonal of a
  square face.

To find a dihedral angle: find the edge, then two perpendiculars to
it from one point, one in each plane - and measure between them.

## Common Mistake

Measuring a dihedral angle with rays that aren't perpendicular to
the edge - taking $\angle CBA_1$ or some diagonal at random. The linear
angle must have *both* rays perpendicular to the edge at the *same*
point, or you get a different, wrong number. The other slip is
claiming two planes are parallel because one line of each is
parallel: a floor and a tilted ramp both contain lines parallel to a
wall's base. Two *intersecting* lines are required.

## The Takeaway

Planes are parallel (no common point) or meet along a line. Parallel
when two intersecting lines of one are parallel to lines of the
other. The angle between crossing planes is the linear angle of the
dihedral angle - perpendiculars to the edge, one in each plane.
Perpendicular planes: one contains a perpendicular to the other.

## Check Yourself

1. In the cube, classify the planes $ADD_1$ and $BCC_1$; $ADD_1$ and
   $ABC$.
2. Find the dihedral angle between faces $ABC$ and $ADD_1$ of the cube.
3. Find the dihedral angle between the plane $ABC$ and the plane $A_1BC$
   (through edge $BC$ and vertex $A_1$).
4. Two parallel planes are cut by a third. What can be said about the
   two lines of intersection?
5. Is the plane $ACC_1$ perpendicular to the base $ABC$? Why?
6. Someone measures the dihedral angle at edge $AB$ between $ABC$ and
   $ABC_1$ as $\angle DBC_1$. What's wrong?

> [!spoiler] Answers
>
> 1. Parallel; intersecting (along $AD$), and perpendicular.
> 2. $90^\circ$.
> 3. $45^\circ$ ($\angle ABA_1$, both rays $\perp BC$).
> 4. They are parallel.
> 5. Yes - it contains $CC_1 \perp ABC$.
> 6. $BD$ is not perpendicular to the edge $AB$; the linear angle is
>    $\angle CBC_1 = 45^\circ$.
