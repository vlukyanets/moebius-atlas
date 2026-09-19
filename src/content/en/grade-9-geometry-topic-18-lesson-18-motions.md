---
title: "[S] Motion and Its Properties. Equal Figures"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-7-geometry-topic-12-lesson-12-congruent-figures]
---

## Why It Matters

"Equal figures" in grade 7 meant "one can be laid on the other" - a
physical picture, not a definition. What does laying-on actually do?
It moves every point of the plane to a new place without changing
any distance. That's a *motion*, and defining it precisely lets
equality of figures be stated for any shape at all, not just
triangles, and lets the four kinds of motion - reflections,
rotations, translations - be studied one at a time in the topics
that follow. Symmetry, tiling, and the way a pattern repeats are all
motions.

## The Big Idea

A motion is a rule that sends every point of the plane somewhere,
such that any two points end up exactly as far apart as they
started. Distances are preserved - and it turns out that's enough to
preserve everything else: lines stay lines, angles keep their size,
a triangle goes to a congruent triangle. So a figure and its image
under a motion are equal, and conversely any two equal figures are
related by some motion. Sliding, turning, and flipping a sheet of
tracing paper over the plane are the motions you can do with your
hands; the definition captures all of them.

## The Rule

A **transformation** of the plane assigns to each point $X$ a point
$X'$ (its image), different points getting different images, and
every point being some point's image.

A **motion** (isometry) is a transformation that preserves distances:
for any points $X, Y$ and their images $X', Y'$, $X'Y' = XY$.

**Properties of motions.** A motion maps

- a segment to a segment of the same length;
- a line to a line, a ray to a ray;
- an angle to an angle of the same measure;
- a triangle to a congruent triangle.

Two figures are **equal** (congruent) if there is a motion mapping
one onto the other. The composition of two motions is a motion; the
inverse of a motion is a motion.

## Worked Example

Which of these are motions? (a) $(x; y) \mapsto (x + 3; y - 1)$; (b) $(x;
y) \mapsto (2x; 2y)$; (c) $(x; y) \mapsto (-y; x)$. Then: a motion maps
$A(0; 0)$ to $A'(1; 1)$ and $B(3; 0)$ to $B'(4; 1)$; what is the distance
$A'B'$? Then: why are any two circles of the same radius equal?

- **(a)** Distances: $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ is unchanged
  when the same number is added to every $x$ and every $y$. A motion
  (a translation).
- **(b)** The points $(0; 0)$ and $(1; 0)$, distance $1$, go to $(0; 0)$ and
  $(2; 0)$, distance $2$. Not a motion (a similarity).
- **(c)** $(0; 0) \mapsto (0; 0)$, $(1; 0) \mapsto (0; 1)$, $(0; 1) \mapsto (-1;
  0)$; all distances check out, and in general $(-y_2 + y_1)^2 + (x_2 -
  x_1)^2$ is the same sum. A motion (a $90^\circ$ rotation).
- **$A'B'$.** Must equal $AB = 3$. Check: $\sqrt{9 + 0} = 3$.
- **Circles.** The translation taking one centre to the other maps
  every point at distance $r$ from the first centre to a point at
  distance $r$ from the second: the first circle onto the second.

Distances are all you need to check; everything else follows.

## Common Mistake

Calling any transformation that "keeps the shape" a motion. Scaling
by $2$ keeps the shape but doubles every distance - it's a similarity,
not a motion, and the figure and its image are similar, not equal.
The test is distances, not shapes. The other slip is thinking a
motion must be a physical slide: a reflection turns the plane over,
which no sliding can do, and it's a motion all the same.

## The Takeaway

A motion moves every point and keeps every distance; from that alone
lines, angles and triangles are preserved. Equal figures are exactly
those related by a motion. Check a candidate by checking distances;
scalings fail, reflections pass.

## Check Yourself

1. Is $(x; y) \mapsto (x; -y)$ a motion? Which one?
2. Is $(x; y) \mapsto (x + y; y)$ a motion? Test with $(0; 0)$, $(0; 1)$,
   $(1; 1)$.
3. A motion maps a triangle with sides $3, 4, 5$ to a triangle. What
   are the image's sides and angles?
4. A motion maps $A$ to $A'$ and $B$ to $B'$. Where does the midpoint of
   $AB$ go?
5. Can a motion map a square onto a rectangle that is not a square?
6. Someone claims that "the transformation $(x; y) \mapsto (3x; 3y)$ is a
   motion because it maps lines to lines". What's wrong?

> [!spoiler] Answers
>
> 1. Yes - reflection in the $x$-axis.
> 2. $(0; 1)$ and $(1; 1)$ are $1$ apart; their images $(1; 1)$ and $(2; 1)$
>    are $1$ apart, but $(0; 0), (0; 1)$ map to $(0; 0), (1; 1)$, distance
>    $\sqrt{2} \neq 1$. Not a motion.
> 3. Sides $3, 4, 5$; angles the same, including the right angle.
> 4. To the midpoint of $A'B'$.
> 5. No - distances between vertices would change.
> 6. Preserving lines isn't the criterion; distances triple, so it's
>    not a motion.
