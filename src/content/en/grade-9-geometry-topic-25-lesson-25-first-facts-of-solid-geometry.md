---
title: "[S] First Facts of Solid Geometry"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-7-geometry-topic-4-lesson-4-axioms-theorems-definitions, grade-6-topic-48-lesson-48-cuboid-cube-and-net]
---

## Why It Matters

Everything so far lived on a flat sheet. The world doesn't: rooms,
boxes, balls, the Earth itself have depth. Solid geometry -
*stereometry* - is geometry in space, and the last chapter of grade
9 opens the door: the new basic object is the plane, and the first
job is to say how points, lines and planes sit together. It's the
foundation of everything three-dimensional in grades 10 and 11, and
this topic is its alphabet and its axioms.

## The Big Idea

In the plane, the basic objects were points and lines. In space a
third joins them: the plane - flat, endless in every direction, like
a tabletop that never stops. Points and lines can lie in a plane or
poke out of it, and planes can cut each other. Three axioms say what
you can count on: through any three points not on a line there's
exactly one plane (a tripod never wobbles); a line with two points
in a plane lies in it entirely; and two planes that share a point
share a whole line. From these, plus everything already known within
each plane, all of stereometry unfolds.

## The Rule

**Stereometry** studies figures in space. Its basic objects are
points, lines and **planes**; a plane is denoted by a Greek letter
($\alpha, \beta, \dots$) and drawn as a parallelogram.

**Axioms of stereometry.**

- **A1.** Through any three points not lying on one line passes
  exactly one plane.
- **A2.** If two points of a line lie in a plane, every point of the
  line lies in that plane.
- **A3.** If two distinct planes have a common point, they have a
  common line containing all their common points.

**Consequences.** A plane is determined by: a line and a point not
on it; two intersecting lines; two parallel lines.

**Drawing:** in a figure, lines hidden behind a plane are dashed;
parallel lines in space are drawn parallel; a plane is drawn as a
parallelogram.

## Worked Example

Can a plane be passed through: (a) three points on a line? (b) four
arbitrary points? (c) a line and a point on it? Then: two planes
$\alpha$ and $\beta$ share the points $A$ and $B$; what else do they share?
Then: three legs of a stool always stand firm, four sometimes wobble
- why?

- **(a)** Yes - infinitely many (rotate a plane about the line). A1
  needs the points *not* collinear to make the plane unique.
- **(b)** Not in general - the fourth point may lie off the plane of
  the first three. Four points in one plane are called *coplanar*.
- **(c)** Yes, infinitely many - the point adds nothing.
- **Two planes.** By A3, sharing a point means sharing a line; both $A$
  and $B$ are common, so the common line is $AB$ (by A2, all of $AB$
  lies in both). Every other common point is on $AB$.
- **Stool.** Three leg-ends are three non-collinear points, and A1
  gives exactly one plane through them - the floor can always meet
  all three. A fourth leg-end may not lie in that plane.

Every answer traces back to one of the three axioms.

## Common Mistake

Treating a drawing as the plane geometry it looks like. In a
picture of a cube, the "diagonal" of a face and the diagonal of the
cube may look like they cross, but they may be in different planes
and not meet at all - lines in space can fail to intersect *without*
being parallel. Always ask which plane a pair of lines lies in, if
any. The other slip is "three points determine a plane" without the
"not on a line".

## The Takeaway

Space adds the plane to the point and line, with three axioms:
three non-collinear points fix a plane; a line with two points in a
plane is inside it; two planes meeting at a point meet along a line.
Drawings are projections - check which plane things live in before
trusting what crosses what.

## Check Yourself

1. How many planes pass through two given points? Through three
   non-collinear points?
2. Points $A, B$ lie in plane $\alpha$. Does the midpoint of $AB$ lie in
   $\alpha$? Why?
3. Planes $\alpha$ and $\beta$ share point $M$. Must they share a line?
4. Can two different planes have exactly two common points?
5. Do a line and a point not on it always determine a plane?
6. Someone says that in a cube $ABCDA_1B_1C_1D_1$ the lines $AB$ and
   $CC_1$ must either intersect or be parallel. Is that so?

> [!spoiler] Answers
>
> 1. Infinitely many; exactly one.
> 2. Yes - by A2 the whole line $AB$ is in $\alpha$.
> 3. Yes, by A3 (if they're distinct).
> 4. No - two common points give a whole common line.
> 5. Yes - a consequence of A1.
> 6. No - lines in space can be *skew*: neither parallel nor
>    intersecting, lying in no common plane.
