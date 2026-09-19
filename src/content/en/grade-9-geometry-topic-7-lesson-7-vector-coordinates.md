---
title: "[S] Coordinates of a Vector"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-6-lesson-6-vectors, grade-9-geometry-topic-3-lesson-3-midpoint-and-distance]
---

## Why It Matters

An arrow on a page is hard to compute with. Two numbers aren't. Give
a vector coordinates - how far it goes in $x$, how far in $y$ - and
every question about vectors becomes arithmetic: are they equal
(same numbers), how long is it (Pythagoras), are they collinear
(proportional numbers). This is what makes vectors a *method* rather
than a picture, and it's the form every physics course uses.

## The Big Idea

A vector is a displacement, so describe it by the displacement:
$\overrightarrow{AB}$ from $A(x_1; y_1)$ to $B(x_2; y_2)$ moves $x_2 - x_1$
horizontally and $y_2 - y_1$ vertically. Those two numbers are its
coordinates - end minus start. Slide the arrow anywhere and the
differences don't change, which is exactly the equality of vectors
from last topic: equal vectors have equal coordinates. And the length
is the distance formula: $\sqrt{a_1^2 + a_2^2}$.

## The Rule

The **coordinates** of $\overrightarrow{AB}$ with $A(x_1; y_1)$, $B(x_2;
y_2)$ are

$$
\overrightarrow{AB} = (x_2 - x_1;\ y_2 - y_1)
$$

- end minus start. Written $\vec{a} = (a_1; a_2)$.

- **Equal vectors have equal coordinates**, and conversely.
- **Magnitude:** $|\vec{a}| = \sqrt{a_1^2 + a_2^2}$.
- The vector from the origin to a point $M(x; y)$ has coordinates $(x;
  y)$ - the point's own coordinates (the **radius vector** of $M$).
- $\vec{a} = (a_1; a_2)$ and $\vec{b} = (b_1; b_2)$ are **collinear** exactly
  when their coordinates are proportional: $a_1 b_2 - a_2 b_1 = 0$.

## Worked Example

Find the coordinates and magnitude of $\overrightarrow{AB}$ for $A(2;
-1)$, $B(-1; 3)$. Then: $\vec{a} = (3; -4)$ starts at $P(1; 5)$; find its
end. Then: are $\overrightarrow{AB}$ and $\overrightarrow{CD}$ equal for
$C(0; 0)$, $D(-3; 4)$? Then: are $(2; -6)$ and $(-1; 3)$ collinear?

- **Coordinates:** $(-1 - 2; 3 - (-1)) = (-3; 4)$. **Magnitude:** $\sqrt{9 +
  16} = 5$.
- **End of $\vec{a}$ from $P$:** add the coordinates: $(1 + 3; 5 - 4) = (4;
  1)$.
- **$\overrightarrow{CD} = (-3; 4)$** - the same coordinates as
  $\overrightarrow{AB}$, so the vectors are equal, though drawn in
  different places.
- **Collinear?** $2 \cdot 3 - (-6)(-1) = 6 - 6 = 0$ - yes. Indeed $(2; -6) =
  -2 \cdot (-1; 3)$: oppositely directed.

Note that $\overrightarrow{BA} = (3; -4) = -\overrightarrow{AB}$: reversing
the arrow negates both coordinates.

## Common Mistake

Start minus end: $\overrightarrow{AB} = (2 - (-1); -1 - 3) = (3; -4)$ - that's
$\overrightarrow{BA}$. The vector *goes to* $B$, so $B$'s coordinates come
first. Picture it: from $A(2; -1)$ to $B(-1; 3)$ you move left and up,
so $x$ decreases (negative) and $y$ increases (positive): $(-3; 4)$. The
other slip is confusing a vector's coordinates with its endpoint's:
$\overrightarrow{AB} = (-3; 4)$ does not mean $B = (-3; 4)$.

## The Takeaway

Coordinates of a vector: end minus start. Same coordinates, same
vector, wherever it's drawn. Length by Pythagoras; collinear when
proportional. A vector from the origin has the coordinates of its
endpoint.

## Check Yourself

1. Find the coordinates of $\overrightarrow{MN}$ for $M(-4; 1)$, $N(2; -7)$.
2. Find $|\vec{a}|$ for $\vec{a} = (-5; 12)$.
3. $\vec{b} = (-2; 3)$ starts at $(4; 4)$. Where does it end?
4. $\overrightarrow{AB} = (1; -2)$ and $B(3; 0)$. Find $A$.
5. Are $(4; 6)$ and $(6; 9)$ collinear? $(4; 6)$ and $(6; 8)$?
6. Someone computes $\overrightarrow{AB}$ for $A(5; 2)$, $B(1; 7)$ as $(4; -5)$.
   Correct it.

> [!spoiler] Answers
>
> 1. $(6; -8)$.
> 2. $13$.
> 3. $(2; 7)$.
> 4. $A = (3 - 1; 0 + 2) = (2; 2)$.
> 5. Yes ($4 \cdot 9 - 6 \cdot 6 = 0$); no ($32 - 36 \neq 0$).
> 6. $(1 - 5; 7 - 2) = (-4; 5)$.
