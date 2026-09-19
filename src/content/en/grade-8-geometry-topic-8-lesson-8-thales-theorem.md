---
title: "[S] Thales' Theorem"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-2-lesson-2-parallelogram-and-its-properties]
---

## Why It Matters

Ruled paper: the lines are evenly spaced. Lay a pencil across them at
any angle, and the lines cut the pencil into equal pieces. That's
Thales' theorem - parallel lines that cut equal pieces from one line
cut equal pieces from every line - and it's how a segment is divided
into any number of equal parts with nothing but a ruler and a set
square. It also opens the door to midsegments and to the whole theory
of similarity.

## The Big Idea

Take parallel lines crossing two transversals. Suppose they cut equal
pieces from the first transversal. Through the division points on the
second transversal draw lines parallel to the first: they carve the
strips into parallelograms and a chain of small triangles. The
parallelograms hand over the equal pieces from the first transversal
as the equal sides of the triangles, and the triangles are congruent
by ASA - the angles are corresponding angles on parallels. So the
pieces on the second transversal are equal too.

Nothing is assumed about the angle the transversals make: any two
lines across a set of parallels behave the same way.

## The Rule

**Thales' theorem.** If parallel lines cutting one side of an angle
cut off equal segments on it, then they cut off equal segments on the
other side of the angle too.

More generally: if parallel lines cut equal segments on one
transversal, they cut equal segments on every transversal.

**Construction.** To divide a segment $AB$ into $n$ equal parts: draw a
ray from $A$, mark $n$ equal steps along it with a compass, join the
last mark to $B$, and draw parallels to that line through the other
marks - they divide $AB$ into $n$ equal parts.

**Consequence.** A line through the midpoint of one side of a triangle
parallel to a second side bisects the third side.

## Worked Example

Divide a segment $AB$ of length $7$ cm into $3$ equal parts. Then: in
$\triangle ABC$, $M$ is the midpoint of $AB$ and a line through $M$
parallel to $BC$ meets $AC$ at $N$ - show $AN = NC$.

- **Construction.** From $A$ draw a ray not along $AB$. Step off three
  equal segments $AK_1 = K_1K_2 = K_2K_3$ with a compass. Join $K_3B$.
  Through $K_1$ and $K_2$ draw parallels to $K_3B$; they meet $AB$ at
  $P_1$, $P_2$.
- **Proof.** By Thales, the parallels $K_1P_1$, $K_2P_2$, $K_3B$ cut equal
  pieces on the ray, so they cut equal pieces on $AB$: $AP_1 = P_1P_2 =
  P_2B = \frac{7}{3}$ cm.
- **Midpoint.** The lines $MN$ and $BC$ are parallel, and with a third
  parallel through $A$ they cut equal segments $AM = MB$ on $AB$. By
  Thales they cut equal segments on $AC$: $AN = NC$. $\square$

The ruled paper: $5$ lines, $4$ equal gaps, cut any crossing pencil into
$4$ equal pieces.

## Common Mistake

Reading the theorem as "the pieces on the two transversals are equal
to each other." They aren't: the pieces on one line are equal *among
themselves*, and the pieces on the other are equal *among themselves*,
but a piece on the first can be longer than a piece on the second - a
slanted pencil is cut into longer pieces than a vertical one. Equal
within each line, not across lines.

## The Takeaway

Parallel lines that cut equal segments on one transversal cut equal
segments on every transversal - with a ruler and set square, that
divides any segment into equal parts, and it proves that a line
through a midpoint parallel to a side bisects the opposite side.

## Check Yourself

1. Four parallel lines cut segments of $2$, $2$, $2$ on one transversal.
   What do they cut on another?
2. Describe how to divide a segment into $5$ equal parts with ruler and
   compass.
3. In $\triangle PQR$, $S$ is the midpoint of $PQ$ and $ST \parallel QR$
   with $T$ on $PR$. If $PR = 12$, find $PT$.
4. Parallel lines cut segments of $3$ and $3$ on one line and $5$ and $x$
   on another. Find $x$.
5. Do the equal pieces on two different transversals have the same
   length?
6. Someone "divides" a segment into $3$ equal parts by eye. What does
   Thales' construction give instead?

> [!spoiler] Answers
>
> 1. Three equal segments (of some other common length).
> 2. Ray from one end, five equal compass steps, join the last to the
>    other end, parallels through the marks.
> 3. $6$.
> 4. $x = 5$.
> 5. Not in general - only equal among themselves on each transversal.
> 6. An exact division, with a proof that the parts are equal.
