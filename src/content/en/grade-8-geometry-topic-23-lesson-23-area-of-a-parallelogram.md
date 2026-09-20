---
title: "[S] Area of a Parallelogram"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-22-lesson-22-concept-of-area, grade-8-geometry-topic-17-lesson-17-pythagorean-theorem]
---

## Why It Matters

Lean a rectangle over into a parallelogram and its area doesn't
change - the same base, the same height, just a slant. That's the
whole content of the parallelogram area formula, and it's the first
real use of the cut-and-rearrange property: slice a triangle off one
end, slide it to the other, and the parallelogram becomes a rectangle.
Every later area formula - triangle, trapezoid - leans on this one.

## The Big Idea

Take a parallelogram sitting on its base. Drop the perpendicular from
the top-left corner to the base line: it cuts off a right triangle on
the left. Slide that triangle to the right end - it fits exactly,
because the left and right sides of the parallelogram are equal and
parallel - and what remains is a rectangle with the same base and the
same height. Rectangle area is base times height, and by the
additivity of area the parallelogram's area is the same. The slant
never mattered.

Which base? Either side, with the height measured to it - the two
products $a \cdot h_a$ and $b \cdot h_b$ are equal, both being the area.

## The Rule

**Theorem.** The area of a parallelogram equals the product of a side
and the altitude drawn to that side:

$$
S = a \cdot h_a = b \cdot h_b
$$

*Proof.* Let $ABCD$ have base $AD = a$ and let $BH \perp AD$, $CK \perp
AD$ (extended). Triangles $ABH$ and $DCK$ are congruent (hypotenuse
$AB = DC$, leg $BH = CK = h$). So the parallelogram and the rectangle
$HBCK$ are composed of the same pieces - the quadrilateral $HBCD$ plus a
copy of one triangle - and have equal areas: $S = HK \cdot h = a \cdot h$.
$\square$

Consequences: the area of a rhombus is side times altitude - or,
since its diagonals are perpendicular, half the product of the
diagonals, $S = \frac{d_1 d_2}{2}$.

## Worked Example

A parallelogram has sides $10$ and $6$, and the altitude to the side of
$10$ is $4.5$. Find its area and the altitude to the side of $6$. Then:
a rhombus has diagonals $6$ and $8$ - find its area and its altitude.

- **Area:** $S = 10 \cdot 4.5 = 45$.
- **Other altitude:** $6 \cdot h_b = 45$, so $h_b = 7.5$.
- **Rhombus area:** $\frac{6 \cdot 8}{2} = 24$. (Four right triangles with
  legs $3$ and $4$, each of area $6$.)
- **Rhombus altitude:** the side is $5$ (the $3, 4, 5$ triangle), so $5h =
  24$, $h = 4.8$.

An angle instead of an altitude: sides $8$ and $5$ with a $30^\circ$ angle
between them. The altitude to the $8$-side is $5 \sin 30^\circ = 2.5$, so
$S = 8 \cdot 2.5 = 20$.

## Common Mistake

Multiplying the two sides. $10 \cdot 6 = 60$ is the area of a
*rectangle* with those sides; the parallelogram is leaning, and its
height is less than the side - $4.5$, not $6$. Area is base times
*height*, and the height is the perpendicular distance between the
base and its opposite side. Only when the parallelogram is a rectangle
does a side double as a height.

## The Takeaway

Base times height - the height perpendicular to that base - by
sliding a triangle from one end to the other. Either side can serve
as base with its own altitude. A rhombus's area is also half the
product of its diagonals.

## Check Yourself

1. Base $12$, height $5$. Find the area.
2. Area $48$, one side $8$. Find the altitude to that side.
3. Sides $9$ and $4$; the altitude to the $9$-side is $3$. Find the
   altitude to the $4$-side.
4. A rhombus has diagonals $10$ and $24$. Find its area, side and
   altitude.
5. Sides $6$ and $10$ with an angle of $45^\circ$. Find the area
   ($\sin 45^\circ = \frac{\sqrt{2}}{2}$).
6. Someone finds the area of a parallelogram with sides $7$ and $4$ as
   $28$. What's missing?

> [!spoiler] Answers
>
> 1. $60$.
> 2. $6$.
> 3. $27 : 4 = 6.75$.
> 4. $120$; side $13$; altitude $\frac{120}{13}$.
> 5. $10 \cdot 6 \sin 45^\circ = 30\sqrt{2} \approx 42.4$.
> 6. The altitude - $28$ would be right only for a rectangle.
