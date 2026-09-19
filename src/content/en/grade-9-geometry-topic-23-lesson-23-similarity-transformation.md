---
title: "[S] Similarity Transformation and Its Properties. Similar Figures"
tag: DEF
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-18-lesson-18-motions, grade-8-geometry-topic-13-lesson-13-similarity-criteria]
---

## Why It Matters

A map is the country shrunk; a photo enlargement is the photo
grown; a model car is the car at $1:24$. Same shape, different size -
and grade 8 could only say this about triangles. A *similarity
transformation* says it for any figure at all: multiply every
distance by the same factor $k$. It's the motion's cousin - a motion
with $k = 1$ - and it makes "similar figures" a definition instead of
an impression, with the homothety as its simplest example.

## The Big Idea

A motion keeps distances; a similarity multiplies them all by one
number $k > 0$. Shapes survive - angles are unchanged, lines go to
lines, a triangle to a similar triangle with ratio $k$ - but sizes
scale. The basic similarity is the **homothety**: fix a centre $O$
and send each point $X$ to the point $X'$ on ray $OX$ with $OX' = k \cdot
OX$ - everything radiates from $O$, stretched $k$ times. Every
similarity is a homothety followed by a motion, so studying the
homothety is studying them all. Two figures are similar when a
similarity carries one to the other.

## The Rule

A **similarity transformation** with coefficient $k > 0$ is a
transformation that multiplies every distance by $k$: for any points
$X, Y$ and images $X', Y'$, $X'Y' = k \cdot XY$. For $k = 1$ it is a motion.

**Homothety** with centre $O$ and coefficient $k > 0$: each point $X$
maps to $X'$ on ray $OX$ with $OX' = k \cdot OX$; $O$ is fixed. (With $k < 0$,
$X'$ is on the opposite ray - a homothety composed with central
symmetry.) In coordinates with $O$ at the origin: $(x; y) \mapsto (kx; ky)$.

**Theorem.** A homothety is a similarity with coefficient $|k|$. Every
similarity is a homothety followed by a motion.

**Properties of a similarity:** maps a line to a line, a segment to a
segment $k$ times as long, an angle to an equal angle, a triangle to a
similar triangle.

Two figures are **similar** if some similarity maps one onto the
other. Similar polygons have equal corresponding angles and
proportional corresponding sides.

## Worked Example

Apply the homothety with centre $O(0; 0)$ and $k = 2$ to the triangle
$A(1; 1)$, $B(3; 1)$, $C(1; 4)$; compare sides. Then: the homothety with
centre $O(2; 3)$ and $k = \frac{1}{2}$ to the point $P(6; 7)$. Then: are all
squares similar? All rectangles? All circles?

- **$k = 2$ about the origin:** $A'(2; 2)$, $B'(6; 2)$, $C'(2; 8)$. $AB = 2$, $A'B'
  = 4$; $AC = 3$, $A'C' = 6$. Every side doubled, angles unchanged (the
  right angle at $A$ is still right).
- **Centre $(2; 3)$, $k = \frac{1}{2}$.** $\overrightarrow{OP} = (4; 4)$, halved
  $(2; 2)$, so $P' = (2 + 2; 3 + 2) = (4; 5)$ - the midpoint of $OP$.
- **Squares:** yes - a homothety with $k = \frac{\text{side}_2}{\text{side}_1}$
  plus a motion. **Rectangles:** no - $1 \times 2$ and $1 \times 3$ have
  different side ratios and no scaling fixes that. **Circles:** yes -
  scale by the ratio of radii.

A homothety with the centre at a vertex is the picture behind the
midsegment theorem: $k = \frac{1}{2}$ about $A$ takes $BC$ to the
midsegment.

## Common Mistake

Assuming "same kind of shape" means similar. All squares are
similar; all rectangles are not - similarity needs the *proportions*
to match, not just the type. Likewise all equilateral triangles are
similar but not all isosceles ones. The other slip: applying a
homothety with a centre other than the origin as plain
multiplication of coordinates. Multiply the *vector from the
centre*, then add the centre back.

## The Takeaway

Similarity: every distance times $k$; angles and shape survive, size
scales. Homothety is the basic one - stretch from a centre - and all
others are homothety plus motion. Similar figures are related by a
similarity: same angles, proportional sides. Check proportions, not
just names.

## Check Yourself

1. Apply the homothety with centre the origin and $k = 3$ to $(2; -1)$.
2. Apply the homothety with centre $(1; 1)$ and $k = 2$ to $(3; 4)$.
3. A similarity with $k = 1.5$ maps a segment of length $8$. Find the
   image's length.
4. Are all isosceles right triangles similar? All rhombi?
5. A homothety maps $A$ to $A'$ and $B$ to $B'$, with $A'B' = 5AB$. What is
   $|k|$?
6. Someone says two rectangles $2 \times 3$ and $4 \times 5$ are similar
   "because both are rectangles". Check the proportions.

> [!spoiler] Answers
>
> 1. $(6; -3)$.
> 2. Vector $(2; 3)$, doubled $(4; 6)$: $(5; 7)$.
> 3. $12$.
> 4. Yes (angles $45, 45, 90$); no (angles vary).
> 5. $5$.
> 6. $\frac{2}{3} \neq \frac{4}{5}$ - not similar.
