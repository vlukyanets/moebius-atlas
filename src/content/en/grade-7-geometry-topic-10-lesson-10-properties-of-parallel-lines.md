---
title: "[S] Property of Parallel Lines. Angles Formed by a Transversal of Parallel Lines"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-9-lesson-9-transversal-angles-and-parallel-criteria]
---

## Why It Matters

The criteria said: equal alternate angles, therefore parallel. Now
the other way round: parallel, therefore equal alternate angles. That
reversal is what lets you *compute* - given that two lines are
parallel, every angle at a transversal follows from one. It's the
tool the triangle angle sum is proved with, and it's the reason a
ladder against a wall makes the same angle with every rung.

## The Big Idea

A theorem and its converse are different claims, and this converse
needs the parallel axiom. Suppose $a \parallel b$ with transversal $c$,
and the alternate angles were *not* equal. Then through the crossing
point on $a$ draw a line $a'$ making the alternate angle equal - by
the criterion, $a' \parallel b$. Now two lines through one point are
parallel to $b$; the axiom allows only one, so $a' = a$, and the
alternate angles were equal after all. The other two properties then
follow as before.

So for parallel lines, all the pairs behave: alternate equal,
corresponding equal, co-interior summing to $180^\circ$. And a line
that's perpendicular to one of two parallels is perpendicular to the
other.

## The Rule

**Theorem (property of parallel lines).** If two parallel lines are
cut by a transversal, then:

1. alternate angles are equal;
2. corresponding angles are equal;
3. co-interior angles sum to $180^\circ$.

(Each is the converse of the corresponding criterion; 1 is proved by
contradiction from the parallel axiom, and 2, 3 follow from 1.)

**Consequence.** If a line is perpendicular to one of two parallel
lines, it is perpendicular to the other.

Together with the criteria: two lines are parallel **if and only if**
alternate angles at a transversal are equal (or corresponding equal,
or co-interior supplementary).

## Worked Example

$a \parallel b$, cut by $c$. One angle at the crossing with $a$ is
$128^\circ$. Find all eight angles. Then: $a \parallel b$, and the
co-interior angles are $x$ and $2x + 30^\circ$ - find them.

- **At the first crossing:** $128^\circ$, its vertical $128^\circ$, and two
  adjacent angles of $52^\circ$.
- **At the second crossing:** by the property, the same set -
  corresponding angles equal. So $128^\circ, 128^\circ, 52^\circ, 52^\circ$
  again, in the corresponding positions.
- **Check a co-interior pair:** $128^\circ + 52^\circ = 180^\circ$. Good.
- **Second problem:** co-interior angles of parallels sum to $180^\circ$:
  $x + 2x + 30 = 180$, $3x = 150$, $x = 50$. Angles $50^\circ$ and $130^\circ$.

A perpendicular: $a \parallel b$ and $c \perp a$; then $c \perp b$ - the
corresponding angle to $90^\circ$ is $90^\circ$.

## Common Mistake

Using the property before parallelism is established, or using the
criterion when it's the property that's needed. "Alternate angles are
equal, so the lines are parallel" is the criterion; "the lines are
parallel, so alternate angles are equal" is the property. They point
in opposite directions, and each needs its own hypothesis. State
which one you're using - the reasoning depends on it.

## The Takeaway

For parallel lines cut by a transversal, alternate and corresponding
angles are equal and co-interior angles sum to $180^\circ$ - the
converses of the criteria, proved with the parallel axiom. Now
parallel lines are both recognisable and computable.

## Check Yourself

1. $a \parallel b$; an alternate angle to $73^\circ$ - what is it?
2. $a \parallel b$; a corresponding angle to $104^\circ$ - what is it?
3. $a \parallel b$; a co-interior angle to $37^\circ$ - what is it?
4. $a \parallel b$, and one angle at a transversal is $90^\circ$. What are
   all the others?
5. $a \parallel b$; co-interior angles are in the ratio $2 : 3$. Find
   them.
6. Someone, told that alternate angles are $60^\circ$ and $60^\circ$, says
   "by the property of parallel lines, the lines are parallel." Which
   statement did they actually use?

> [!spoiler] Answers
>
> 1. $73^\circ$.
> 2. $104^\circ$.
> 3. $143^\circ$.
> 4. All $90^\circ$.
> 5. $72^\circ$ and $108^\circ$.
> 6. The criterion (angles to parallelism), not the property (parallelism
>    to angles).
