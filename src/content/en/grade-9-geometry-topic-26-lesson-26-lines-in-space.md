---
title: "[S] Mutual Position of Lines in Space"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-25-lesson-25-first-facts-of-solid-geometry]
---

## Why It Matters

Two roads in a flat town either cross or run parallel. Add a bridge
and a road passes *over* another - neither crossing nor parallel.
That third possibility doesn't exist in the plane and is the first
genuinely new thing in space: skew lines. Knowing the three ways two
lines can sit is what lets you read a drawing of a building, a
crystal or a cube correctly, and it's the first thing asked about
any edge of any solid.

## The Big Idea

In a plane, two lines with no common point are parallel - they had
nowhere else to go. In space they do: two lines can miss each other
without being parallel, by living in different planes, like a bridge
and the road beneath it. So there are three cases: intersecting (one
common point, one common plane), parallel (no common point, one
common plane), skew (no common point, no common plane). The test is
whether a plane contains both. And parallelism still behaves: two
lines parallel to a third are parallel to each other, in space as in
the plane.

## The Rule

Two lines in space are:

- **intersecting** if they have exactly one common point;
- **parallel** if they lie in one plane and have no common point;
- **skew** if they do not lie in one plane (and so have no common
  point).

**Theorem.** Through a point not on a given line there passes exactly
one line parallel to the given line.

**Theorem.** Two lines parallel to a third line are parallel to each
other.

**Skew-lines criterion.** If one line lies in a plane and another
meets that plane at a point not on the first line, the lines are
skew.

The **angle between skew lines** is the angle between two
intersecting lines parallel to them; skew lines can be perpendicular.

## Worked Example

In the cube $ABCDA_1B_1C_1D_1$ (base $ABCD$, top $A_1B_1C_1D_1$, vertical
edges $AA_1$ etc.), classify the pairs: $AB$ and $A_1B_1$; $AB$ and $BC$;
$AB$ and $CC_1$; $AB$ and $B_1C_1$; $AC$ and $B_1D_1$. Then find the angle
between $AB$ and $B_1C_1$.

- **$AB$, $A_1B_1$:** opposite edges of the face $ABB_1A_1$ - parallel.
- **$AB$, $BC$:** share $B$ - intersecting (at $90^\circ$).
- **$AB$, $CC_1$:** $AB$ lies in the base plane; $CC_1$ meets it at $C$,
  which is not on $AB$ - skew (by the criterion). They're also
  perpendicular.
- **$AB$, $B_1C_1$:** $B_1C_1$ is in the top face, which $AB$ doesn't meet;
  are they parallel? $B_1C_1 \parallel BC$, and $BC$ is not parallel to $AB$
  - so no. Skew.
- **$AC$, $B_1D_1$:** face diagonals in parallel planes; $B_1D_1 \parallel BD$,
  and $BD$ crosses $AC$ - so $AC$ and $B_1D_1$ are skew.
- **Angle between $AB$ and $B_1C_1$:** replace $B_1C_1$ by the parallel $BC$
  through $B$; $\angle ABC = 90^\circ$.

A cube has $12$ edges; each is parallel to $3$, intersects $4$ and is
skew to $4$.

## Common Mistake

Calling any two non-intersecting lines parallel. In the plane that's
right; in space it isn't - $AB$ and $CC_1$ never meet and are not
parallel. Parallel needs a common plane. The other slip is the
reverse: calling lines skew because they *look* like they don't
meet in the drawing, when they actually lie in one plane and
intersect off the page. Ask: is there a plane containing both? If
yes, they're parallel or intersecting.

## The Takeaway

Three cases: intersecting, parallel (coplanar, no common point),
skew (not coplanar). A line in a plane and a line piercing that plane
elsewhere are skew. Parallelism is transitive. The angle between
skew lines is measured after sliding one to meet the other.

## Check Yourself

1. In the cube, classify $AD$ and $B_1C_1$; $AD$ and $A_1B_1$.
2. In the cube, classify $AA_1$ and $DD_1$; $AA_1$ and $BC$.
3. Can two skew lines be perpendicular? Give an example in the cube.
4. Line $a$ is parallel to $b$, and $b$ is parallel to $c$. What about
   $a$ and $c$?
5. Find the angle between $AD_1$ and $BC$ in the cube (the diagonal of a
   face and an edge).
6. Someone says $AB$ and $C_1D_1$ in the cube are skew "because they're
   on different faces". Check.

> [!spoiler] Answers
>
> 1. Parallel; skew.
> 2. Parallel; skew (and perpendicular).
> 3. Yes - $AB$ and $CC_1$.
> 4. Parallel.
> 5. $BC \parallel AD$, and $\angle D_1AD = 45^\circ$.
> 6. $C_1D_1 \parallel CD \parallel AB$ - parallel, not skew.
