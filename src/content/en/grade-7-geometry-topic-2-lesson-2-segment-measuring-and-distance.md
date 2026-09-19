---
title: "[S] Segment. Measuring Segments. Distance between Two Points"
tag: DEF
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-1-lesson-1-point-line-ray]
---

## Why It Matters

Every length in geometry - a side, a height, a radius, a distance - is
the length of a segment. You measured segments in grade 5 with a
ruler; now the question is what "length" is *allowed* to mean, so
that proofs about lengths stand on something firm. Two plain facts
about measuring turn out to be all that's needed, and one of them is
the reason the shortest path between two points is a straight one.

## The Big Idea

Pick a unit segment. Then every segment has a length: a positive
number saying how many units fit along it. Two things must be true
for this to make sense. First, a length is never zero or negative. Second,
if a point $C$ sits inside a segment $AB$, the two pieces add up to
the whole: $AC + CB = AB$. That's the property that lets you compute
one part from the others - and it's why a detour through a point off
the line is longer than the straight segment.

The length of the segment joining two points is the distance between
them. Two segments are equal if their lengths are equal - which is
also what "laying one on the other and seeing them coincide" comes
to.

## The Rule

A **segment** $AB$ is the part of the line $AB$ between $A$ and $B$,
including its **ends** $A$ and $B$.

**Basic properties of measuring segments:**

- Every segment has a definite **length**, a positive number, in the
  chosen unit.
- If a point $C$ lies on the segment $AB$ (between $A$ and $B$), then
  $AB = AC + CB$.

The **distance** between two points is the length of the segment
joining them. Two segments are **equal** if their lengths are equal.

The **midpoint** of a segment is the point that divides it into two
equal segments.

A point $C$ on the line $AB$ that is not between $A$ and $B$ lies on
the extension of the segment, beyond one end; then $AB$ is the
*difference* of $AC$ and $CB$.

## Worked Example

Points $A$, $B$, $C$ lie on one line. $AB = 12$ cm and $BC = 5$ cm. Find
$AC$. Then: $M$ is the midpoint of $PQ$ and $PQ = 18$ cm; find $PM$.

- **Two cases.** The story doesn't say which point is between the
  others, so both must be considered.
- **$B$ between $A$ and $C$:** $AC = AB + BC = 12 + 5 = 17$ cm.
- **$C$ between $A$ and $B$:** $AB = AC + CB$, so $AC = 12 - 5 = 7$ cm.
- **$A$ between?** Then $BC = BA + AC = 12 + AC > 12$, but $BC = 5$.
  Impossible.
- **Answer:** $17$ cm or $7$ cm.
- **Midpoint:** $PM = MQ$ and $PM + MQ = 18$, so $PM = 9$ cm.

A three-point count: $AC = 4$, $CB = 6$, and $C$ is on $AB$. Then $AB =
10$ - and if instead $AB$ were $10$ and $AC$ were $4$, $CB$ would be $6$.

## Common Mistake

Assuming from the letters that the point named in the middle is the
one in the middle. "$A$, $B$, $C$ on a line" with $AB = 12$ and $BC = 5$
does *not* say $B$ is between - both orders are possible, and only
the impossible one can be ruled out by the numbers. Draw both
pictures; the property $AB = AC + CB$ needs the between-ness to be
known, not guessed.

## The Takeaway

Lengths are positive numbers that add along a segment: a point
between the ends splits the length into two parts that sum to the
whole. Distance is segment length, equal segments have equal lengths,
and when the order of points isn't given, consider every order the
numbers allow.

## Check Yourself

1. $C$ lies on $AB$; $AC = 3.5$ cm, $CB = 6.5$ cm. Find $AB$.
2. $K$ lies on $MN$; $MN = 20$ cm, $MK = 12$ cm. Find $KN$.
3. $O$ is the midpoint of $AB$, $AO = 7$ cm. Find $AB$.
4. Points $A$, $B$, $C$ are on a line, $AB = 8$, $AC = 3$. Find $BC$ (all
   cases).
5. $A$, $B$, $C$ are on a line with $AB = 5$, $BC = 9$, $AC = 4$. Which
   point is between the other two?
6. Someone reads "$A$, $B$, $C$ on a line, $AB = 12$, $BC = 5$" and answers
   only $AC = 17$. What did they miss?

> [!spoiler] Answers
>
> 1. $10$ cm.
> 2. $8$ cm.
> 3. $14$ cm.
> 4. $BC = 5$ ($C$ between) or $BC = 11$ ($A$ between).
> 5. $A$: $BA + AC = 5 + 4 = 9 = BC$.
> 6. The case with $C$ between $A$ and $B$, giving $AC = 7$.
