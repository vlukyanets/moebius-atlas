---
title: "[S] Applying Similarity of Triangles"
tag: MTD
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-14-lesson-14-mean-proportionals-in-a-right-triangle, grade-8-geometry-topic-15-lesson-15-bisector-property]
---

## Why It Matters

How wide is a river you can't cross? How tall is a building from its
shadow? How far is the ship from the shore? Similar triangles answer
all of these with a tape measure and no trip across. This topic is
about putting similarity to work: on the ground, in proofs, and in
the two theorems it has just produced - the medians of a triangle
meeting at one point, and the bisector property.

## The Big Idea

The method is always the same: find two triangles that share their
angles - a right angle and a common angle, or two parallels and a
transversal, or vertical angles at a crossing - conclude they're
similar, and write the proportion that contains the unknown. Angles
come from the setup, lengths come from measuring what's reachable,
and the proportion hands over what isn't.

The medians theorem is the same tool aimed inward: the midsegment
joining two midpoints is parallel to a side and half of it, so the
triangle it makes with the crossing of two medians is similar to the
big one with ratio $\frac{1}{2}$ - which puts the crossing two thirds
of the way along each median.

## The Rule

**Measuring with similarity.** To find an inaccessible length:

1. build two triangles, one containing the unknown and one fully
   measurable, that share two angles (usually a right angle and a
   common or corresponding angle);
2. state the similarity and its correspondence;
3. write the proportion with the unknown and solve.

Classic setups: shadows (height : shadow is the same for all objects
at one moment); a mirror on the ground (equal angles of incidence and
reflection); sighting across a river with a set of stakes forming
two triangles with vertical angles.

**Theorem (medians).** The medians of a triangle intersect in one
point, which divides each median in the ratio $2 : 1$ counting from the
vertex.

## Worked Example

To find the width of a river, a surveyor marks a point $A$ on the far
bank and points $B$, $C$ on the near bank directly across so that $AB
\perp BC$, then walks to $D$ with $CD \perp BC$ and finds the point $E$ on
$BC$ in line with $A$ and $D$. She measures $BE = 40$ m, $EC = 10$ m, $CD =
15$ m. How wide is the river ($AB$)?

- **Triangles:** $\triangle ABE$ and $\triangle DCE$ - right angles at $B$ and
  $C$, vertical angles at $E$. AA: $\triangle ABE \sim \triangle DCE$.
- **Proportion:** $\frac{AB}{DC} = \frac{BE}{CE}$, so $\frac{AB}{15} =
  \frac{40}{10}$, $AB = 60$ m.

Medians: in $\triangle ABC$ the median $AM = 12$. The centroid $O$ is at
$AO = 8$, $OM = 4$.

A mirror: a mirror lies $3$ m from a tree; a person whose eyes are
$1.6$ m high sees the treetop in it from $1.2$ m away on the other side.
Tree height $= 1.6 \cdot \frac{3}{1.2} = 4$ m.

## Common Mistake

Writing the proportion with mismatched sides. In $\triangle ABE \sim
\triangle DCE$, $AB$ pairs with $DC$ (both opposite the angle at $E$) and
$BE$ with $CE$ (both adjacent to the right angle and the angle at $E$).
Pairing $AB$ with $CE$ gives nonsense. Fix the correspondence from the
equal angles first, then read off pairs. And in the medians theorem,
$2 : 1$ is measured *from the vertex* - the long piece touches the
vertex.

## The Takeaway

Find two triangles with two shared angles, declare them similar with
the right correspondence, and the proportion delivers the
inaccessible length. The medians of a triangle meet at a point two
thirds of the way from each vertex - similarity again.

## Check Yourself

1. A $1.8$-m person casts a $2.4$-m shadow; a pole casts $6$ m. Height?
2. In the river setup, $BE = 30$, $EC = 6$, $CD = 8$. Find $AB$.
3. A median is $15$ cm long. How far is the centroid from the vertex?
   From the midpoint?
4. Lines $AB \parallel CD$; $AD$ and $BC$ meet at $O$ with $AO = 6$, $OD = 9$,
   $BO = 4$. Find $OC$.
5. A mirror is $2$ m from a wall; a person with eyes at $1.5$ m sees the
   top of the wall from $0.5$ m away. Wall height?
6. Someone says the centroid divides each median $1 : 2$ from the
   vertex. Which way round is it?

> [!spoiler] Answers
>
> 1. $4.5$ m.
> 2. $40$.
> 3. $10$ cm; $5$ cm.
> 4. $\triangle AOB \sim \triangle DOC$: $\frac{6}{9} = \frac{4}{OC}$, $OC = 6$.
> 5. $1.5 \cdot \frac{2}{0.5} = 6$ m.
> 6. $2 : 1$ from the vertex - the vertex piece is the longer one.
