---
title: "[S] Disc. Area of a Disc. Sector"
tag: MTD
track: school
grade: 6
subject: geometry
requires: [grade-6-topic-23-lesson-23-circle-and-circumference, grade-5-topic-25-lesson-25-area-of-rectangle-and-square, grade-6-topic-10-lesson-10-fraction-of-a-number]
---

## Why It Matters

How much pizza is a $30$-cm pizza? How much bigger is it than a $25$-cm
one - and is the big one really worth the price? How much grass does a
sprinkler water, turning through a quarter of a circle? The circle was
the rim; the disc is everything inside it, and its area is what pizza,
paint and sprinklers are about.

## The Big Idea

Cut a disc into many thin wedges, like a pizza into $32$ slices, and lay
them out alternately point-up and point-down. They fit together into
something very close to a rectangle: its height is the radius, and its
width is half the circumference - half the crust points up, half
points down. The more slices, the straighter the edges. So the area is
$r \cdot \frac{C}{2} = r \cdot \pi r = \pi r^2$.

A sector is one of those wedges, or several together - a slice of the
disc between two radii. Its area is the same fraction of the whole disc
as its angle is of the full $360^\circ$.

## The Rule

A **disc** (or circle region) is the part of the plane bounded by a
circle, together with the circle - all points at distance *at most* $r$
from the centre. Its area:

$$
S = \pi r^2
$$

A **sector** is the part of a disc between two radii. A sector with
central angle $n^\circ$ has area

$$
S_{\text{sector}} = \frac{\pi r^2}{360} \cdot n
$$

- the fraction $\frac{n}{360}$ of the whole disc. A half-disc is a sector
  of $180^\circ$, a quarter-disc of $90^\circ$.

As with the circumference, the answer keeps $\pi$: a disc of radius $6$
has area $36\pi$, and that's exact. Replace $\pi$ by $3.14$ only when
the problem says so.

## Worked Example

A pizza has diameter $30$ cm. Find its area. Then find the area of one
slice, if it's cut into $8$ equal slices.

- **Radius:** $30 : 2 = 15$ cm.
- **Area of the disc:** $S = \pi r^2 = \pi \cdot 15^2 = 225\pi\
  \text{cm}^2$.
- **One slice** is a sector of $360^\circ : 8 = 45^\circ$: $\frac{1}{8}$ of
  the disc, $\frac{225\pi}{8}\ \text{cm}^2$.

Compare with a $25$-cm pizza: $r = 12.5$, $S = \pi \cdot 12.5^2 =
156.25\pi\ \text{cm}^2$. The ratio is $\frac{225\pi}{156.25\pi} = 1.44$ -
the $\pi$ cancels - so the $30$-cm pizza has $44\%$ more pizza, though
its diameter is only $20\%$ bigger. No decimal for $\pi$ was needed
anywhere.

The sprinkler: it reaches $6$ m and turns through $90^\circ$.
$\frac{90}{360} \cdot \pi \cdot 36 = 9\pi\ \text{m}^2$. If you want to
know how many square metres of lawn that is, take $\pi \approx 3.14$:
$9\pi \approx 28.3\ \text{m}^2$.

## Common Mistake

Squaring the wrong thing. $\pi r^2$ means $\pi \cdot (r \cdot r)$, not
$(\pi r)^2$: for $r = 15$ it's $225\pi$, not $225\pi^2$. And using the
diameter in place of the radius gives four times the true area -
$\pi \cdot 30^2 = 900\pi$ for the pizza, a pizza the size of a table.
Halve the diameter first, square the radius, then multiply by $\pi$.

## The Takeaway

The area of a disc is $\pi r^2$ - radius squared, times $\pi$, and the
$\pi$ stays in the answer. A sector's area is the disc's area times the
fraction its angle makes of $360^\circ$. Doubling the radius quadruples
the area, which is why a bigger pizza is more pizza than it looks.

## Check Yourself

1. Find the area of a disc with radius $10$ cm.
2. Find the area of a disc with diameter $8$ m.
3. Find the area of a sector of $60^\circ$ in a disc of radius $6$ cm.
4. A disc has area $16\pi\ \text{cm}^2$. Find its radius.
5. A circular pond of radius $5$ m has a $1$-m-wide path round it. Find
   the area of the path.
6. Someone finds the area of a disc with $d = 30$ as $\pi \cdot 30^2 =
   900\pi$. What's the right answer?

> [!spoiler] Answers
>
> 1. $100\pi\ \text{cm}^2$.
> 2. $r = 4$: $16\pi\ \text{m}^2$.
> 3. $\frac{60}{360} \cdot \pi \cdot 36 = 6\pi\ \text{cm}^2$.
> 4. $r^2 = 16$, so $r = 4$ cm.
> 5. $36\pi - 25\pi = 11\pi\ \text{m}^2$.
> 6. $r = 15$: $\pi \cdot 225 = 225\pi$.
