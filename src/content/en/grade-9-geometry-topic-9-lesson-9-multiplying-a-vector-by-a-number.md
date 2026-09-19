---
title: "[S] Multiplying a Vector by a Number"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-8-lesson-8-adding-and-subtracting-vectors]
---

## Why It Matters

Twice as fast in the same direction; half the force; the same
displacement reversed. Scaling a vector - stretching it, shrinking
it, flipping it - is the other operation vectors need, and with
addition it's enough to express *any* vector in the plane through two
given ones. That's what turns vectors into a proof technique: a
midpoint, a centroid, a parallel - each becomes an equation in
$\vec{a}$ and $\vec{b}$.

## The Big Idea

Multiplying $\vec{a}$ by $3$ gives a vector three times as long,
pointing the same way; by $-\frac{1}{2}$, half as long and reversed. In
coordinates, multiply both. The result is always collinear with
$\vec{a}$, and the converse is the useful part: if $\vec{b}$ is collinear
with $\vec{a} \neq \vec{0}$, then $\vec{b} = k\vec{a}$ for some number $k$. So
"collinear" translates to "a multiple of", and parallel lines,
midpoints and ratios all become scalar equations.

## The Rule

The **product** of a vector $\vec{a} = (a_1; a_2)$ by a number $k$ is

$$
k\vec{a} = (k a_1;\ k a_2)
$$

- $|k\vec{a}| = |k| \cdot |\vec{a}|$;
- $k\vec{a} \upuparrows \vec{a}$ if $k > 0$, $k\vec{a} \uparrow\downarrow \vec{a}$ if $k
  < 0$; $0 \cdot \vec{a} = \vec{0}$.

**Properties:** $(kl)\vec{a} = k(l\vec{a})$; $(k + l)\vec{a} = k\vec{a} + l\vec{a}$;
$k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$.

**Collinearity criterion.** Nonzero $\vec{a}$ and $\vec{b}$ are collinear
exactly when $\vec{b} = k\vec{a}$ for some $k$.

**Midpoint.** If $M$ is the midpoint of $AB$ then for any point $O$,
$\overrightarrow{OM} = \frac{1}{2}\left(\overrightarrow{OA} + \overrightarrow{OB}
\right)$.

## Worked Example

$\vec{a} = (2; -3)$. Find $3\vec{a}$, $-\frac{1}{2}\vec{a}$ and their magnitudes.
Then: for which $k$ are $(4; -6)$ and $(k; 9)$ collinear? Then: in
triangle $ABC$, $M$ is the midpoint of $BC$; express $\overrightarrow{AM}$
through $\vec{b} = \overrightarrow{AB}$ and $\vec{c} = \overrightarrow{AC}$. Then:
prove the midsegment $MN$ of triangle $ABC$ ($M$ on $AB$, $N$ on $AC$) is
parallel to $BC$ and half of it.

- **$3\vec{a} = (6; -9)$,** magnitude $3\sqrt{13}$. **$-\frac{1}{2}\vec{a} = (-1;
  \frac{3}{2})$,** magnitude $\frac{\sqrt{13}}{2}$.
- **Collinear.** $(k; 9) = t(4; -6)$: from $9 = -6t$, $t = -\frac{3}{2}$, so $k =
  -6$.
- **Median.** $\overrightarrow{AM} = \overrightarrow{AB} + \overrightarrow{BM} =
  \vec{b} + \frac{1}{2}\overrightarrow{BC} = \vec{b} + \frac{1}{2}(\vec{c} - \vec{b}) =
  \frac{1}{2}(\vec{b} + \vec{c})$.
- **Midsegment.** $\overrightarrow{MN} = \overrightarrow{AN} - \overrightarrow{AM}
  = \frac{1}{2}\vec{c} - \frac{1}{2}\vec{b} = \frac{1}{2}(\vec{c} - \vec{b}) = \frac{1}{2}
  \overrightarrow{BC}$. A positive multiple: parallel, same direction,
  half the length. Proved in one line.

That last one is the midsegment theorem of grade 8, and the vector
proof is shorter than the one with congruent triangles.

## Common Mistake

Multiplying only one coordinate, or forgetting that a negative $k$
reverses direction while $|k|$ scales the length: $-2\vec{a}$ is *twice*
as long as $\vec{a}$, not "negative length". The other slip is in
proofs: writing $\overrightarrow{BM} = \frac{1}{2}\overrightarrow{CB}$ for the
midpoint $M$ of $BC$ - wrong sign. $\overrightarrow{BM}$ goes from $B$
toward $C$, so it's $\frac{1}{2}\overrightarrow{BC}$.

## The Takeaway

$k\vec{a}$ scales the length by $|k|$ and keeps or reverses the
direction by the sign of $k$; in coordinates, multiply both. Collinear
means a multiple. With addition, any vector along a triangle or
parallelogram is an expression in two base vectors - and a geometric
fact becomes an identity.

## Check Yourself

1. $\vec{a} = (-4; 6)$. Find $\frac{1}{2}\vec{a}$ and $-3\vec{a}$.
2. $|\vec{a}| = 5$. Find $|-4\vec{a}|$.
3. Are $(3; -5)$ and $(-9; 15)$ collinear? Give $k$.
4. In parallelogram $ABCD$ with $O$ the intersection of the diagonals,
   express $\overrightarrow{AO}$ through $\overrightarrow{AB}$ and
   $\overrightarrow{AD}$.
5. $M$ is the midpoint of $AB$, $O$ any point, $\overrightarrow{OA} = (2; 6)$,
   $\overrightarrow{OB} = (4; -2)$. Find $\overrightarrow{OM}$.
6. Someone finds $-2 \cdot (3; -1) = (-6; -1)$. Correct it.

> [!spoiler] Answers
>
> 1. $(-2; 3)$; $(12; -18)$.
> 2. $20$.
> 3. Yes, $k = -3$.
> 4. $\frac{1}{2}\left(\overrightarrow{AB} + \overrightarrow{AD}\right)$.
> 5. $(3; 2)$.
> 6. $(-6; 2)$ - both coordinates are multiplied.
