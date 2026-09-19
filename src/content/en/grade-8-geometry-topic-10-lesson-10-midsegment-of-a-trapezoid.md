---
title: "[S] Midsegment of a Trapezoid and Its Property"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-9-lesson-9-midsegment-of-a-triangle, grade-8-geometry-topic-6-lesson-6-trapezoid]
---

## Why It Matters

A trapezoid's two bases have different lengths; halfway up, how wide
is it? Exactly the average of the bases. That's the midsegment of a
trapezoid - the segment joining the midpoints of the legs - and it's
parallel to the bases and equal to half their sum. It's the length
that next year's area formula is built on, and it settles every "how
wide at the middle" question about ramps, roofs and dams.

## The Big Idea

Join the midpoints $M$ and $N$ of the legs. Draw a diagonal: it cuts the
trapezoid into two triangles, and $M$ and $N$ are midpoints of one side
of each. The midsegment of the trapezoid is made of two triangle
midsegments laid end to end - one parallel to and half of the top
base, the other parallel to and half of the bottom base. Both pieces
are parallel to the bases, so $MN$ is a single straight segment
parallel to them, and its length is half of one base plus half of the
other.

## The Rule

The **midsegment** of a trapezoid is the segment joining the midpoints
of its legs.

**Theorem.** The midsegment of a trapezoid is parallel to the bases
and equal to half their sum:

$$
MN \parallel AD, \qquad MN = \frac{AD + BC}{2}
$$

*Proof.* Let $ABCD$ have bases $AD$, $BC$ and midpoints $M$ of $AB$, $N$
of $CD$. Draw the diagonal $BD$ and let $K$ be its midpoint. In $\triangle
ABD$, $MK$ is a midsegment: $MK \parallel AD$, $MK = \frac{1}{2}AD$. In
$\triangle BCD$, $KN$ is a midsegment: $KN \parallel BC$, $KN =
\frac{1}{2}BC$. Both are parallel to the bases, so $M$, $K$, $N$ are on
one line parallel to the bases, and $MN = MK + KN = \frac{AD + BC}{2}$.
$\square$

Read backwards: a base is twice the midsegment minus the other base.

## Worked Example

A trapezoid has bases $14$ and $8$. Find its midsegment. Then: the
midsegment is $11$ and one base is $15$ - find the other. Then: a
trapezoid's midsegment is $10$ and the bases differ by $6$ - find the
bases.

- **Midsegment:** $\frac{14 + 8}{2} = 11$.
- **Other base:** $2 \cdot 11 - 15 = 7$.
- **Differ by $6$:** bases $x$ and $x + 6$, $\frac{x + x + 6}{2} = 10$, so $2x +
  6 = 20$, $x = 7$: bases $7$ and $13$.

A ramp $2$ m wide at the bottom and $1.2$ m at the top is $1.6$ m wide
halfway up.

## Common Mistake

Joining the midpoints of the *bases* instead of the legs, or averaging
the legs instead of the bases. The midsegment runs from leg to leg,
across the trapezoid, and its length is the mean of the two *bases* -
the parallel sides. Half the sum of the legs is nothing in
particular. And it's half the *sum*, not half the difference.

## The Takeaway

The segment joining the midpoints of the legs is parallel to the bases
and equals half their sum - two triangle midsegments end to end.
Bases and midsegment determine each other: $MN = \frac{a + b}{2}$.

## Check Yourself

1. Bases $9$ and $17$. Find the midsegment.
2. Midsegment $12$, one base $20$. Find the other base.
3. Bases $x$ and $3x$, midsegment $16$. Find the bases.
4. An isosceles trapezoid has midsegment $10$ and each leg $6$. Find its
   perimeter.
5. Is the midsegment always longer than the shorter base and shorter
   than the longer one? Why?
6. Someone computes a trapezoid's midsegment as half the sum of the
   legs. What should be averaged?

> [!spoiler] Answers
>
> 1. $13$.
> 2. $4$.
> 3. $2x = 16$, $x = 8$: $8$ and $24$.
> 4. Bases sum to $20$; perimeter $20 + 12 = 32$.
> 5. Yes - an average lies between the two numbers averaged.
> 6. The bases.
