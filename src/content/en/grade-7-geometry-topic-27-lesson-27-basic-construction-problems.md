---
title: "[S] Basic Construction Problems"
tag: MTD
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-23-lesson-23-incircle-of-a-triangle, grade-7-geometry-topic-24-lesson-24-circumcircle-of-a-triangle]
---

## Why It Matters

A ruler with no markings and a compass: with only those two tools,
can you cut an angle exactly in half? Copy an angle? Raise a
perpendicular? Find the midpoint of a segment? Yes to all - and the
constructions are exact, not measured, because every step is
justified by a theorem. This is geometry as the Greeks did it, and
every construction here is an argument in disguise.

## The Big Idea

The compass draws circles; the ruler draws lines through two points.
Everything else is built from those, and each construction works
because of a theorem you've proved. To bisect an angle, draw equal
arcs from the vertex and then equal arcs from where they land: the
two triangles formed are congruent (SSS), so the angles at the vertex
are equal. To bisect a segment, draw equal arcs from both ends: the
crossing points are equidistant from the ends, so they lie on the
perpendicular bisector. Every construction ends with "and this works
because ...".

## The Rule

The **basic constructions** with ruler and compass:

1. **A triangle with three given sides.** Lay off one side; from its
   ends draw arcs with the other two as radii; the crossing is the
   third vertex. (Works when the triangle inequality holds; SSS makes
   it unique.)
2. **An angle equal to a given one.** Draw an arc across the given
   angle; draw the same arc from the new vertex; transfer the chord
   between the arc's endpoints with the compass. (SSS again.)
3. **The bisector of an angle.** Arc from the vertex; equal arcs from
   the two crossing points; join the vertex to their intersection.
4. **The perpendicular bisector of a segment** - hence its midpoint.
   Equal arcs (radius more than half the segment) from both ends; join
   the two crossings.
5. **A perpendicular to a line through a point** on it (arc to mark
   two equidistant points, then their perpendicular bisector) or off
   it (arc cutting the line twice, then the bisector of that chord).

A construction problem is solved in four parts: **analysis** (what
would the finished figure look like?), **construction** (the steps),
**proof** (why the figure satisfies the requirements), **investigation**
(when does a solution exist, and how many?).

## Worked Example

Construct the bisector of a given angle $\angle AOB$, and prove it.

- **Construction.** With centre $O$, draw an arc cutting $OA$ at $M$ and
  $OB$ at $N$. With the same radius, draw arcs centred at $M$ and at $N$;
  let them cross at $K$ inside the angle. Draw the ray $OK$.
- **Proof.** $OM = ON$ (same arc), $MK = NK$ (same radius), $OK$ common.
  So $\triangle OMK = \triangle ONK$ by SSS, and $\angle MOK = \angle NOK$:
  $OK$ is the bisector. $\square$
- **Investigation.** Always possible, one solution.

Construct a triangle with sides $5$, $3$, $4$: lay off $4$; arcs of $5$
and $3$ from its ends cross ($2 < 4 < 8$); join. Investigation: no
triangle if the longest side is not less than the sum of the others.

## Common Mistake

Constructing by measuring - reading a protractor to halve an angle,
or a ruler to find a midpoint. That's drawing, not constructing: the
result is only as exact as the eye. A construction uses the compass
and the unmarked ruler only, and it comes with a proof. And don't
skip the investigation: a triangle with sides $2$, $3$, $7$ "constructs"
into two arcs that never meet.

## The Takeaway

Ruler and compass build angles, bisectors, perpendiculars and
midpoints exactly, and each construction is proved - usually by a
congruence criterion. Analysis, construction, proof, investigation:
the four steps of every construction problem.

## Check Yourself

1. Which criterion proves the angle-bisector construction?
2. How do you find the midpoint of a segment with compass and ruler?
3. Can a triangle with sides $2$, $3$, $7$ be constructed? What happens
   with the arcs?
4. Describe how to construct an angle equal to a given one.
5. How would you construct a $90^\circ$ angle at a point on a line?
6. Someone "constructs" a bisector by measuring the angle and halving
   it with a protractor. Why isn't that a construction?

> [!spoiler] Answers
>
> 1. SSS.
> 2. Equal arcs from both ends, join the crossings; the line meets the
>    segment at its midpoint.
> 3. No - the arcs of radii $2$ and $3$ from the ends of a $7$ don't
>    reach each other.
> 4. Arc across the given angle; same arc from the new vertex; transfer
>    the chord; draw the second side through the mark.
> 5. Mark two points equidistant from it on the line; construct their
>    perpendicular bisector.
> 6. Constructions use only compass and unmarked ruler and are exact by
>    proof; measuring is approximate.
