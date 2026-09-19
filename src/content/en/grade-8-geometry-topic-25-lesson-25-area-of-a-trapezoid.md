---
title: "[S] Area of a Trapezoid"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-24-lesson-24-area-of-a-triangle, grade-8-geometry-topic-6-lesson-6-trapezoid]
---

## Why It Matters

A trapezoid is what you get when a rectangle's top is shorter than its
bottom - a dam wall in cross-section, a lampshade, a slice of a road
between two milestones. Its area formula finishes the grade 8 set: the
last shape whose area is derived from the triangle by cutting. And it
says something neat - the area is the height times the *average* of the
two bases, which is what the midline of a trapezoid is.

## The Big Idea

A diagonal cuts a trapezoid into two triangles. Both have the same
altitude - the distance between the parallel bases - and their bases
are the two bases of the trapezoid, $a$ and $b$. So the area is $\frac{1}{2}
ah + \frac{1}{2} bh = \frac{a + b}{2} \cdot h$. The factor $\frac{a + b}{2}$ is the
midline: a trapezoid has the area of a rectangle with the same height
and the midline as width.

## The Rule

**Theorem.** The area of a trapezoid equals the product of half the
sum of its bases and its altitude:

$$
S = \frac{a + b}{2} \cdot h = m \cdot h
$$

where $a, b$ are the bases, $h$ the altitude (the distance between the
bases) and $m$ the midline.

*Proof.* Let $ABCD$ have bases $AD = a$, $BC = b$. The diagonal $BD$
splits it into triangles $ABD$ and $BCD$, both with altitude $h$ (the
distance between the parallel lines $AD$ and $BC$). Their areas are
$\frac{1}{2} ah$ and $\frac{1}{2} bh$; by additivity the trapezoid's area is
their sum. $\square$

## Worked Example

A trapezoid has bases $12$ and $8$ and altitude $5$. Find its area. Then:
an isosceles trapezoid has bases $16$ and $6$ and legs $13$ - find its
area. Then: a trapezoid has area $60$, altitude $6$ and one base twice
the other - find the bases.

- **First:** $S = \frac{12 + 8}{2} \cdot 5 = 10 \cdot 5 = 50$.
- **Isosceles.** Drop the altitudes from the ends of the short base:
  they cut off two equal right triangles, each with horizontal leg
  $\frac{16 - 6}{2} = 5$. Altitude $\sqrt{13^2 - 5^2} = 12$. Area
  $\frac{16 + 6}{2} \cdot 12 = 132$.
- **Bases from the area:** $\frac{b + 2b}{2} \cdot 6 = 60$, so $9b = 60$, $b =
  \frac{20}{3}$; bases $\frac{20}{3}$ and $\frac{40}{3}$.

A right trapezoid (one leg perpendicular to the bases) has that leg as
its altitude; for any other trapezoid the altitude has to be found,
usually by the right triangle the altitude cuts off.

## Common Mistake

Using a leg as the altitude. In the isosceles trapezoid above, $13$ is
the leg and $12$ is the altitude - $\frac{16 + 6}{2} \cdot 13 = 143$ is
wrong. The altitude is perpendicular to the bases; a leg is only
perpendicular in a right trapezoid. The other slip is averaging
wrongly - taking $a + b$ without the half, or the half of one base
only. Half the *sum* of the bases, times the altitude.

## The Takeaway

Half the sum of the bases times the altitude - equivalently, midline
times altitude - because a diagonal cuts a trapezoid into two
triangles of the same height. Find the altitude from the right
triangle a leg makes with it, unless the trapezoid is a right one.

## Check Yourself

1. Bases $7$ and $13$, altitude $4$. Find the area.
2. Midline $9$, altitude $6$. Find the area.
3. Area $70$, bases $9$ and $11$. Find the altitude.
4. An isosceles trapezoid has bases $20$ and $8$ and legs $10$. Find its
   area.
5. A right trapezoid has bases $5$ and $9$ and its longer leg is $5$. Find
   the area.
6. Someone computes the area of a trapezoid with bases $6$, $10$ and
   altitude $3$ as $(6 + 10) \cdot 3 = 48$. Correct it.

> [!spoiler] Answers
>
> 1. $40$.
> 2. $54$.
> 3. $7$.
> 4. Altitude $\sqrt{100 - 36} = 8$; area $112$.
> 5. The horizontal gap is $4$, so the altitude is $\sqrt{25 - 16} = 3$;
>    area $\frac{5 + 9}{2} \cdot 3 = 21$.
> 6. The half is missing: $\frac{6 + 10}{2} \cdot 3 = 24$.
