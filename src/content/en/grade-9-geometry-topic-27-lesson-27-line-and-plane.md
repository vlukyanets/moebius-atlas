---
title: "[S] Mutual Position of a Line and a Plane"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-26-lesson-26-lines-in-space]
---

## Why It Matters

A flagpole stands on the ground; a ramp leans against it; a rail runs
along it at a constant height. A line and a plane can meet at a
point, run parallel, or the line can lie inside the plane - and when
they meet, the angle matters: a pole is *perpendicular*, a ramp is
*inclined*. Perpendicularity to a plane is the key idea of this topic
- it's what "vertical" means, and it's how every height in solid
geometry is defined.

## The Big Idea

A line and a plane have zero, one or infinitely many common points:
parallel, intersecting, or the line lies in the plane. Among
intersecting lines the special one is the perpendicular - a line at
right angles to *every* line of the plane through the meeting point.
Checking every line is impossible, so the criterion: perpendicular to
*two* intersecting lines of the plane is enough. And the perpendicular
is the shortest way from a point to a plane, just as in the plane
geometry of grade 7 - any slant is longer.

## The Rule

A line and a plane are:

- **intersecting** if they have exactly one common point;
- **parallel** if they have no common point;
- or the line **lies in** the plane (two common points, hence all).

**Criterion of parallelism.** If a line not in a plane is parallel to
some line in that plane, it is parallel to the plane.

A line is **perpendicular** to a plane if it is perpendicular to every
line in the plane that passes through their common point.

**Criterion of perpendicularity.** If a line is perpendicular to two
intersecting lines of a plane, it is perpendicular to the plane.

Through a point there is exactly one plane perpendicular to a given
line, and exactly one line perpendicular to a given plane.

From a point $A$ not in a plane $\alpha$: the **perpendicular** $AH$
($AH \perp \alpha$, $H$ the foot) is shorter than any **slant** $AM$; $HM$
is the **projection** of the slant, and $AM^2 = AH^2 + HM^2$. The
**distance** from $A$ to $\alpha$ is $AH$.

## Worked Example

In the cube $ABCDA_1B_1C_1D_1$, classify: $A_1B_1$ and the plane $ABC$;
$AA_1$ and the plane $ABC$; $AC$ and the plane $ABC$. Then: is $BB_1$
perpendicular to the plane $ABC$? Then: from a point $A$ at distance
$8$ from a plane, a slant of length $17$ is drawn; find its projection.

- **$A_1B_1$, plane $ABC$:** $A_1B_1 \parallel AB \subset ABC$, and $A_1B_1$
  isn't in the plane - parallel (criterion).
- **$AA_1$, plane $ABC$:** meets it at $A$ only - intersecting.
- **$AC$, plane $ABC$:** two points in it - lies in the plane.
- **$BB_1 \perp ABC$?** $BB_1 \perp BA$ and $BB_1 \perp BC$ (edges of square
  faces), and $BA$, $BC$ intersect in the plane - yes, by the
  criterion. So $BB_1$ is perpendicular to every line through $B$ in
  the base, including the diagonal $BD$.
- **Projection.** $HM = \sqrt{17^2 - 8^2} = \sqrt{225} = 15$.

The perpendicularity criterion is the workhorse: two right angles in
a picture give a third with anything else in the plane.

## Common Mistake

Concluding a line is perpendicular to a plane from *one* right angle
- $BB_1 \perp BA$ alone doesn't do it (a line could be perpendicular
to $BA$ and tilted within the plane $BB_1C_1C$). Two intersecting lines
are needed; parallel ones won't do either. And confusing "parallel
to a line in the plane" with "in the plane": $A_1B_1$ is parallel to
$AB$ but not in the base.

## The Takeaway

A line and a plane: one point, no points, or inside. Parallel if
parallel to some line of the plane; perpendicular if perpendicular
to two intersecting lines of it - then to all. The perpendicular is
the distance; a slant is its hypotenuse over the projection.

## Check Yourself

1. In the cube, classify $D_1C_1$ and the plane $ADD_1$; $BC_1$ and the
   plane $ABC$.
2. Is $CC_1$ perpendicular to the plane $ABC$? To the diagonal $AC$?
3. A slant of length $13$ has projection $5$. Find the distance from the
   point to the plane.
4. From one point, two slants of lengths $10$ and $17$ are drawn to a
   plane; the shorter has projection $6$. Find the other's projection.
5. Can a line be perpendicular to two different lines of a plane and
   not to the plane?
6. Someone says $AC \perp$ plane $BB_1D_1$ in the cube because $AC \perp BD$.
   What's missing, and is the conclusion nevertheless right?

> [!spoiler] Answers
>
> 1. Intersecting at $D_1$ - in fact perpendicular ($D_1C_1 \perp D_1A_1$
>    and $D_1C_1 \perp D_1D$); intersecting at $B$.
> 2. Yes; yes.
> 3. $12$.
> 4. Distance $8$; projection $\sqrt{289 - 64} = 15$.
> 5. Yes, if the two lines are parallel.
> 6. Missing: a second intersecting line. $AC \perp BB_1$ too (since $BB_1
>    \perp$ base), and $BD$, $BB_1$ intersect - so the conclusion is
>    right.
