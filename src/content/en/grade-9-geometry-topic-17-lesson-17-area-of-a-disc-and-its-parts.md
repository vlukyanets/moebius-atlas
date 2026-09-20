---
title: "[S] Area of a Disc and Its Parts"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-16-lesson-16-circumference-and-arc-length, grade-6-topic-24-lesson-24-disc-area-and-sector]
---

## Why It Matters

A pizza, a sprinkler's coverage, the cross-section of a pipe, the
slice of pie on a chart - discs and pieces of discs are everywhere
measured. $\pi R^2$ you've known since grade 6; now it gets a reason,
and two new shapes get formulas: the **sector** (a wedge from the
centre, like a pizza slice) and the **segment** (the piece cut off by
a chord, like the part of a round window above a sill).

## The Big Idea

A regular polygon's area is half its perimeter times its apothem.
Let the number of sides grow: the perimeter tends to $2\pi R$, the
apothem to $R$, and the area to $\frac{1}{2} \cdot 2\pi R \cdot R = \pi R^2$.
That's where the disc formula comes from - the same limit idea as the
circumference. A sector with angle $\alpha$ is $\frac{\alpha}{360}$ of the
disc, exactly as an arc is that fraction of the circle. And a segment
is a sector minus (or plus, if it's the bigger piece) the triangle
formed by the two radii and the chord.

## The Rule

**Theorem.** The area of a disc of radius $R$ is

$$
S = \pi R^2
$$

A **sector** is the part of a disc bounded by two radii and the arc
between them. With central angle $\alpha$ (degrees):

$$
S_{\text{sector}} = \frac{\pi R^2 \alpha}{360^\circ}
$$

A **segment** is the part of a disc cut off by a chord. For the
segment under an arc with central angle $\alpha$:

$$
S_{\text{segment}} = S_{\text{sector}} \mp S_{\triangle} = \frac{\pi R^2 \alpha}{360^\circ}
\mp \frac{1}{2} R^2 \sin \alpha
$$

with minus for $\alpha < 180^\circ$ (the smaller segment) and plus for
$\alpha > 180^\circ$ (the larger one, where the triangle is *added*).

## Worked Example

A pizza of diameter $32$ cm is cut into $8$ equal slices; find the area
of one slice. Then: the area of a $120^\circ$ sector of radius $6$. Then:
the area of the segment cut off by a chord that subtends $90^\circ$ in a
circle of radius $4$. Then: a ring between concentric circles of radii
$5$ and $3$.

- **Slice.** $R = 16$; one slice is $\frac{1}{8}$ of $\pi \cdot 256$: $32\pi$
  cm². (Or $\alpha = 45^\circ$: $\frac{\pi \cdot 256 \cdot 45}{360} = 32\pi$.)
- **$120^\circ$ sector.** $\frac{\pi \cdot 36 \cdot 120}{360} = 12\pi$.
- **$90^\circ$ segment.** Sector $\frac{\pi \cdot 16 \cdot 90}{360} = 4\pi$;
  triangle $\frac{1}{2} \cdot 16 \cdot \sin 90^\circ = 8$; segment $4\pi - 8$.
- **Ring.** $\pi \cdot 25 - \pi \cdot 9 = 16\pi$.

The segment is the sector with the triangle removed - draw it and
the subtraction is obvious.

## Common Mistake

Doubling the radius or halving the diameter in the wrong direction:
a $32$ cm pizza has $R = 16$, and $\pi \cdot 32^2$ is four times too big.
Area goes with $R^2$, so an error in $R$ is squared. The other slip is
the sign for a segment larger than half the disc: with $\alpha =
270^\circ$ the triangle formed by the radii lies *inside* the segment
and must be added; $\sin 270^\circ$ isn't in our range anyway, so
compute the small segment ($90^\circ$) and subtract it from the disc.

## The Takeaway

$\pi R^2$, from the regular polygon with ever more sides. A sector is
$\frac{\alpha}{360}$ of it; a segment is a sector minus the triangle on
the chord (plus it, for the bigger piece). Watch $R$ versus $d$ - the
error is squared.

## Check Yourself

1. Find the area of a disc with diameter $10$.
2. Find the area of a $60^\circ$ sector of radius $3$.
3. A sector of radius $10$ has area $25\pi$. Find its angle.
4. Find the area of the segment cut off by a chord subtending
   $60^\circ$ in a circle of radius $6$.
5. Find the area of the ring between circles of radii $8$ and $6$.
6. Someone finds the area of a disc of diameter $6$ as $36\pi$. Correct
   it.

> [!spoiler] Answers
>
> 1. $25\pi$.
> 2. $\frac{3\pi}{2}$.
> 3. $90^\circ$.
> 4. $6\pi - \frac{1}{2} \cdot 36 \cdot \frac{\sqrt{3}}{2} = 6\pi - 9\sqrt{3}$.
> 5. $28\pi$.
> 6. $R = 3$: $9\pi$.
