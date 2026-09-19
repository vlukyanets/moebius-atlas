---
title: "[S] Mutual Position of Two Circles"
tag: DEF
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-21-lesson-21-circle-and-disc, grade-7-geometry-topic-20-lesson-20-triangle-inequality]
---

## Why It Matters

Two gears touch at one point; two ripples on a pond cross at two;
the rings of a target never meet. Two circles in a plane can sit in
five ways, and which one is decided entirely by three numbers - the
two radii and the distance between the centres. It's the triangle
inequality doing geometry, and it's what compass constructions rely
on when two arcs are meant to cross.

## The Big Idea

Join the two centres. If the circles cross at a point $P$, then $P$ and
the two centres make a triangle with sides $r_1$, $r_2$ and $d$ - and
triangle inequalities must hold: $d < r_1 + r_2$, and $d > |r_1 - r_2|$.
When $d$ equals the sum, the point $P$ sits on the segment between the
centres - the circles touch from outside. When $d$ equals the
difference, $P$ sits on the extension - they touch from inside, one
within the other. Beyond the sum they're apart; under the difference
one is inside the other. Five cases, all read off one comparison.

## The Rule

Let two circles have radii $r_1 \geq r_2$ and let $d$ be the distance
between their centres. Then:

- $d > r_1 + r_2$: the circles lie **outside** each other, no common
  points;
- $d = r_1 + r_2$: they **touch externally** - one common point, on the
  segment joining the centres;
- $r_1 - r_2 < d < r_1 + r_2$: they **intersect** in two points;
- $d = r_1 - r_2$ (with $r_1 \neq r_2$): they **touch internally** - one
  common point, on the line of centres beyond the smaller circle's
  centre;
- $d < r_1 - r_2$: the smaller circle lies **inside** the larger, no
  common points. ($d = 0$: **concentric**.)

At a point of tangency the two circles have a common tangent line,
perpendicular to the line of centres.

## Worked Example

Circles have radii $5$ and $3$. Describe their position when the
centres are $10$ apart, $8$ apart, $4$ apart, $2$ apart, $1$ apart.

- **Sum $8$, difference $2$.**
- **$d = 10 > 8$:** outside each other.
- **$d = 8$:** external tangency.
- **$d = 4$:** between $2$ and $8$ - two intersection points.
- **$d = 2$:** internal tangency - the small circle touches the big one
  from inside.
- **$d = 1 < 2$:** the small circle is inside the big one.

Compass check: to construct a triangle with sides $5$, $3$ and $4$, draw
arcs of radius $5$ and $3$ from the ends of a segment of length $4$;
they cross ($2 < 4 < 8$), and the crossing is the third vertex.

## Common Mistake

Testing only the sum. "$d < r_1 + r_2$, so the circles cross" is wrong
when $d$ is also below the difference - then one circle is inside the
other and they don't meet at all. Both bounds matter: crossing needs
$d$ strictly *between* the difference and the sum. Compute both
before deciding.

## The Takeaway

The distance between centres against the sum and the difference of
the radii tells everything: greater than the sum means apart, equal
means touching outside, between means two crossings, equal to the
difference means touching inside, less means nested. It's the
triangle inequality on the centres and a common point.

## Check Yourself

1. Radii $6$ and $2$, centres $8$ apart. Position?
2. Radii $6$ and $2$, centres $3$ apart. Position?
3. Radii $4$ and $4$, centres $5$ apart. How many common points?
4. Two circles touch externally, radii $7$ and $3$. Distance between
   centres?
5. Two circles touch internally, radii $7$ and $3$. Distance between
   centres?
6. Someone says circles of radii $9$ and $2$ with centres $5$ apart
   intersect "because $5 < 11$." What did they forget?

> [!spoiler] Answers
>
> 1. External tangency.
> 2. $6 - 2 = 4 > 3$: the small circle is inside the large one, no common
>    points.
> 3. Two ($0 < 5 < 8$).
> 4. $10$.
> 5. $4$.
> 6. The difference: $9 - 2 = 7 > 5$, so the small circle is inside the
>    large one.
