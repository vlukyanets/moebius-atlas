---
title: "[S] Median, Bisector and Altitude of a Triangle. Bisector of an Isosceles Triangle"
tag: DEF
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-14-lesson-14-isosceles-triangle]
---

## Why It Matters

From each vertex of a triangle you can draw three special segments to
the opposite side: one to its midpoint, one that halves the angle,
one at a right angle. In a general triangle they're three different
segments. In an isosceles triangle, drawn from the apex, they're the
same one - and that single segment is the fold line of the triangle's
symmetry. Medians, bisectors and altitudes appear in nearly every
triangle problem from here to the end of school.

## The Big Idea

A median goes to the middle of the opposite side - it's what you'd
draw to cut the triangle into two pieces of equal base. A bisector
splits the angle at the vertex in half. An altitude drops straight
down, perpendicular to the opposite side (or its extension) - it's the
triangle's height when that side is the base. Every triangle has three
of each.

For an isosceles triangle, fold along the line from the apex to the
midpoint of the base. The two halves are congruent (SSS - or SAS from
the equal legs and the common segment), so the fold line makes equal
angles at the apex, hits the base at its midpoint, and stands at
right angles to it. Median, bisector and altitude from the apex
coincide.

## The Rule

In a triangle:

- a **median** is the segment from a vertex to the midpoint of the
  opposite side;
- a **bisector** is the segment of the angle bisector from a vertex to
  the opposite side;
- an **altitude** is the perpendicular from a vertex to the line
  containing the opposite side.

Each triangle has three medians, three bisectors and three altitudes.
An altitude of an obtuse triangle from an acute vertex falls outside
the triangle, on the extension of the opposite side.

**Theorem.** In an isosceles triangle, the bisector drawn to the base
is also the median and the altitude.

*Proof.* Let $AB = AC$ and $AD$ the bisector of $\angle A$, $D$ on $BC$. Then
$\triangle ABD = \triangle ACD$ by SAS ($AB = AC$, $AD$ common, $\angle BAD =
\angle CAD$). So $BD = DC$ - $AD$ is a median - and $\angle ADB = \angle ADC$;
being adjacent, each is $90^\circ$ - $AD$ is an altitude. $\square$

Equivalently: the median to the base of an isosceles triangle is its
bisector and altitude; the altitude to the base is its median and
bisector.

## Worked Example

In $\triangle ABC$, $AB = AC = 13$ cm, $BC = 10$ cm, and $AD$ is the median
to $BC$. Find $BD$ and $\angle ADB$. Then: $AD$ is the altitude of an
isosceles triangle to its base, and $\angle BAD = 35^\circ$ - find $\angle
BAC$.

- **Median:** $D$ is the midpoint of $BC$, so $BD = 5$ cm.
- **In an isosceles triangle the median to the base is the altitude:**
  $\angle ADB = 90^\circ$.
- **Altitude to the base is the bisector:** $\angle BAD = \angle CAD =
  35^\circ$, so $\angle BAC = 70^\circ$.

Which is which: in $\triangle ABC$ with $BM$ drawn to the midpoint $M$ of
$AC$, $BM$ is a median; if instead $\angle ABM = \angle MBC$, it's a
bisector; if $BM \perp AC$, an altitude. In a scalene triangle these
are three different segments.

## Common Mistake

Assuming a median is also an altitude, or a bisector, in *any*
triangle. The coincidence is a theorem about isosceles triangles, and
only for the segment to the *base* - a median to a leg of an isosceles
triangle is not perpendicular to it. In a scalene triangle, all nine
segments are different. Check the hypothesis before using the
theorem.

## The Takeaway

Median to the midpoint, bisector halving the angle, altitude at right
angles - three per triangle, generally all different. In an isosceles
triangle the three from the apex to the base are one segment, so
knowing it's any one of them gives the other two.

## Check Yourself

1. $AM$ is the median of $\triangle ABC$ to $BC$, $BC = 14$. Find $BM$.
2. In an isosceles triangle, the altitude to the base is $AH$ and $BH =
   6$. Find the base.
3. $AD$ is the bisector to the base of isosceles $\triangle ABC$, $\angle
   ADC = ?$
4. Where does the altitude from the obtuse vertex of an obtuse triangle
   fall - inside or outside?
5. In an equilateral triangle, how many distinct segments are the
   medians, bisectors and altitudes altogether?
6. Someone claims a median of a scalene triangle is perpendicular to
   the side. Why isn't that justified?

> [!spoiler] Answers
>
> 1. $7$.
> 2. $12$.
> 3. $90^\circ$.
> 4. Inside (the altitudes from the acute vertices fall outside).
> 5. Three - from each vertex all three coincide.
> 6. Median and altitude coincide only in an isosceles triangle, to its
>    base; in a scalene triangle they differ.
