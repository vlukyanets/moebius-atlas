---
title: "[S] Translation"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-18-lesson-18-motions, grade-9-geometry-topic-6-lesson-6-vectors]
---

## Why It Matters

A conveyor belt, a lift, a chess piece sliding across the board, a
wallpaper pattern repeating every $30$ cm - the same shape shifted by
the same amount in the same direction. That's translation, the
motion a vector describes: every point moves by $\vec{a}$. It's the
simplest motion to compute with and the one that shows why equal
vectors are drawn in different places - a translation is what
carries one to the other.

## The Big Idea

Pick a vector $\vec{a}$. Move every point of the plane by $\vec{a}$ - same
distance, same direction. Any two points move in parallel by the
same amount, so the segment between them just slides: its length
and direction are unchanged. Translation is a motion, and more - it
keeps every line parallel to itself, which no rotation or reflection
does. In coordinates, add the vector's coordinates to the point's.
Two translations in a row make one translation, by the sum of the
vectors.

## The Rule

A **translation** by a vector $\vec{a}$ is the transformation mapping
each point $X$ to the point $X'$ with $\overrightarrow{XX'} = \vec{a}$.

**Theorem.** A translation is a motion, and it maps every line to a
line parallel to it (or to itself).

*Proof.* For points $X, Y$ with images $X', Y'$: $\overrightarrow{XX'} =
\overrightarrow{YY'} = \vec{a}$, so $XX'Y'Y$ is a parallelogram (or the four
points are collinear), whence $X'Y' = XY$ and $X'Y' \parallel XY$. $\square$

In coordinates, translation by $\vec{a} = (a_1; a_2)$:

$$
(x; y) \mapsto (x + a_1;\ y + a_2)
$$

A translation has no fixed points (unless $\vec{a} = \vec{0}$). Two
figures are related by a translation exactly when corresponding
points differ by the same vector.

## Worked Example

Translate the triangle $A(0; 0)$, $B(3; 1)$, $C(1; 4)$ by $\vec{a} = (2; -3)$.
Then: find the translation taking $P(-1; 5)$ to $P'(4; 2)$, and apply it
to $Q(0; 0)$. Then: which translation maps the line $y = 2x$ to $y = 2x +
4$? Then: two villages lie on opposite sides of a river with
parallel banks; where should a bridge (perpendicular to the banks)
be built to make the road between them shortest?

- **Triangle:** $A'(2; -3)$, $B'(5; -2)$, $C'(3; 1)$. Sides unchanged: $AB =
  \sqrt{10} = A'B'$.
- **$P \to P'$:** $\vec{a} = (4 + 1; 2 - 5) = (5; -3)$. Then $Q' = (5; -3)$.
- **Line to line.** Any translation by a vector taking a point of one
  line to a point of the other - e.g. $(0; 4)$, or $(-2; 0)$: infinitely
  many, all with the same "shift across".
- **Bridge.** Let the river have width $d$ and $\vec{d}$ be the vector
  across it. Translate village $A$ by $\vec{d}$ to $A'$: the road $A \to
  \text{bridge} \to B$ has length $\text{bridge} + A'B_{\text{path}}$, and the
  bridge length is fixed, so minimise $A'B$ - a straight line. Build
  the bridge where $A'B$ meets the far bank.

The bridge trick is to translation what the mirror trick is to
reflection: move one endpoint by the forced vector, then go straight.

## Common Mistake

Subtracting instead of adding: translating $(3; 1)$ by $(2; -3)$ gives
$(5; -2)$, not $(1; 4)$. The image is start *plus* vector. And when
finding the vector from a point and its image, it's image minus
original: $P' - P$, not $P - P'$. Check by adding back: $(-1; 5) + (5; -3)
= (4; 2)$, the image.

## The Takeaway

Translation by $\vec{a}$: add $\vec{a}$ to every point. A motion that keeps
directions - every line goes to a parallel line. Equal vectors are
translates of each other. For a shortest path with a forced
crossing, translate one end by the crossing vector and draw a
straight line.

## Check Yourself

1. Translate $(4; -2)$ by $(-3; 5)$.
2. Find the vector of the translation taking $(1; 1)$ to $(-2; 6)$.
3. A translation maps $A(2; 3)$ to $A'(5; 1)$. Where does it map $B(0;
   0)$?
4. Does a translation have fixed points? Does a rotation?
5. Translate the circle $(x - 1)^2 + (y + 2)^2 = 9$ by $(3; 2)$. Write the
   new equation.
6. Someone translates $(1; 2)$ by $(3; 4)$ and gets $(-2; -2)$. What did
   they do?

> [!spoiler] Answers
>
> 1. $(1; 3)$.
> 2. $(-3; 5)$.
> 3. $(3; -2)$.
> 4. No (for a nonzero vector); yes, the centre.
> 5. Centre moves to $(4; 0)$: $(x - 4)^2 + y^2 = 9$.
> 6. Subtracted; it's $(4; 6)$.
