---
title: "[S] Adding and Subtracting Vectors"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-7-lesson-7-vector-coordinates]
---

## Why It Matters

A boat heads north at $4$ km/h while the current pushes it east at $3$
km/h - where does it actually go? Northeast-ish, at $5$ km/h: the two
velocities *add* as arrows, tip to tail. Adding vectors is how forces
combine, how displacements chain, and how a hiker's two legs of a
journey become one. And in coordinates it's nothing at all: add the
numbers.

## The Big Idea

To add two arrows, put the second one's tail at the first one's
head; the sum runs from the first tail to the second head. That's
the **triangle rule**, and it says exactly what adding displacements
means: go $\vec{a}$, then go $\vec{b}$, and the net effect is $\vec{a} +
\vec{b}$. Draw both from the same point instead and the sum is the
diagonal of the parallelogram they span - the same arrow, arranged
differently. In coordinates each rule collapses to "add
componentwise". Subtraction is adding the opposite: $\vec{a} - \vec{b} =
\vec{a} + (-\vec{b})$, and drawn from a common tail, $\vec{a} - \vec{b}$ runs
from the head of $\vec{b}$ to the head of $\vec{a}$.

## The Rule

**Sum.** For vectors $\vec{a} = (a_1; a_2)$, $\vec{b} = (b_1; b_2)$:

$$
\vec{a} + \vec{b} = (a_1 + b_1;\ a_2 + b_2)
$$

- **Triangle rule:** $\overrightarrow{AB} + \overrightarrow{BC} =
  \overrightarrow{AC}$ for any points $A, B, C$.
- **Parallelogram rule:** if $\vec{a}$ and $\vec{b}$ are drawn from one
  point, $\vec{a} + \vec{b}$ is the diagonal from that point.
- **Properties:** $\vec{a} + \vec{b} = \vec{b} + \vec{a}$; $(\vec{a} + \vec{b}) + \vec{c}
  = \vec{a} + (\vec{b} + \vec{c})$; $\vec{a} + \vec{0} = \vec{a}$; $\vec{a} + (-\vec{a}) =
  \vec{0}$.

**Difference.** $\vec{a} - \vec{b}$ is the vector $\vec{c}$ with $\vec{b} + \vec{c}
= \vec{a}$:

$$
\vec{a} - \vec{b} = (a_1 - b_1;\ a_2 - b_2)
$$

Drawn from a common origin, $\vec{a} - \vec{b}$ goes from the tip of
$\vec{b}$ to the tip of $\vec{a}$. Also $\overrightarrow{AB} - \overrightarrow{AC}
= \overrightarrow{CB}$.

## Worked Example

$\vec{a} = (3; -1)$, $\vec{b} = (-2; 4)$. Find $\vec{a} + \vec{b}$, $\vec{a} - \vec{b}$
and their magnitudes. Then simplify $\overrightarrow{AB} + \overrightarrow{BC} +
\overrightarrow{CD}$ and $\overrightarrow{AB} - \overrightarrow{AD}$. Then the
boat: north $4$, east $3$.

- **Sum:** $(3 - 2; -1 + 4) = (1; 3)$, magnitude $\sqrt{10}$.
- **Difference:** $(3 + 2; -1 - 4) = (5; -5)$, magnitude $5\sqrt{2}$.
- **Chain:** $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$,
  then $+ \overrightarrow{CD} = \overrightarrow{AD}$. Head-to-tail chains
  collapse to first tail, last head.
- **$\overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}$** - from the
  tip of the subtracted one to the tip of the other.
- **Boat.** North $(0; 4)$, east $(3; 0)$, sum $(3; 4)$: speed $5$ km/h,
  heading east of north with $\tan$ of the angle $= \frac{3}{4}$.

In a parallelogram $ABCD$: $\overrightarrow{AB} + \overrightarrow{AD} =
\overrightarrow{AC}$ (diagonal from $A$), $\overrightarrow{AB} - \overrightarrow{AD}
= \overrightarrow{DB}$ (the other diagonal).

## Common Mistake

Adding magnitudes: "$4$ km/h plus $3$ km/h is $7$ km/h". Vectors
in different directions add to something shorter than the sum of
lengths - here $5$. Only co-directed vectors add their lengths. The
other slip is the direction of a difference: $\vec{a} - \vec{b}$ points *to*
$\vec{a}$'s tip, *from* $\vec{b}$'s. Check: $\vec{b} + (\vec{a} - \vec{b})$ must
return $\vec{a}$, so the difference has to start where $\vec{b}$ ends.

## The Takeaway

Tip to tail: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$. In
coordinates, add or subtract componentwise. The difference from a
common origin runs from the second tip to the first. Lengths don't
add unless the directions agree.

## Check Yourself

1. $\vec{a} = (1; 5)$, $\vec{b} = (4; -2)$. Find $\vec{a} + \vec{b}$ and $\vec{a} - \vec{b}$.
2. Simplify $\overrightarrow{MN} + \overrightarrow{NK} + \overrightarrow{KM}$.
3. Simplify $\overrightarrow{PQ} - \overrightarrow{PR}$.
4. In parallelogram $ABCD$, express $\overrightarrow{BD}$ through
   $\overrightarrow{BA}$ and $\overrightarrow{BC}$.
5. $|\vec{a}| = 3$, $|\vec{b}| = 4$, and they're perpendicular. Find $|\vec{a} +
   \vec{b}|$.
6. Someone says $|\vec{a} + \vec{b}| = |\vec{a}| + |\vec{b}|$ always. When is it
   true?

> [!spoiler] Answers
>
> 1. $(5; 3)$; $(-3; 7)$.
> 2. $\overrightarrow{MM} = \vec{0}$.
> 3. $\overrightarrow{RQ}$.
> 4. $\overrightarrow{BD} = \overrightarrow{BA} + \overrightarrow{BC}$.
> 5. $5$.
> 6. Only when $\vec{a}$ and $\vec{b}$ are co-directed (or one is zero).
