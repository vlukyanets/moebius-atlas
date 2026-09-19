---
title: "[S] Generalized Thales' Theorem"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-8-lesson-8-thales-theorem, grade-6-topic-16-lesson-16-proportion]
---

## Why It Matters

Thales said equal pieces go to equal pieces. What if the pieces on
the first line aren't equal - say $2$ and $3$? Then the pieces on the
second line are in the same *ratio*, $2 : 3$. That's the generalized
theorem, and it's the bridge from congruence to similarity: it's how
a shadow, a map and a photograph keep their proportions, and it's the
foundation of the next five topics.

## The Big Idea

Suppose parallel lines cut segments $2$ and $3$ from one transversal.
Divide both into unit pieces - five in all - and draw parallels through
every division point. By Thales, these cut the *other* transversal into
five equal pieces too; two of them make the first segment there, three
the second. So the second transversal's segments are also in the ratio
$2 : 3$. The argument works for any ratio of whole numbers, and a
limiting argument extends it to any ratio at all.

In an angle, the picture is a triangle with a line parallel to its
base: the line cuts the two sides *proportionally*.

## The Rule

**Generalized Thales' theorem.** Parallel lines intersecting the sides
of an angle cut off proportional segments on them:

$$
\frac{OA_1}{OA_2} = \frac{OB_1}{OB_2}, \qquad \frac{A_1A_2}{OA_1} = \frac{B_1B_2}{OB_1}
$$

where $A_1$, $A_2$ are on one side, $B_1$, $B_2$ on the other, and $A_1B_1
\parallel A_2B_2$.

**In a triangle:** a line parallel to one side of a triangle divides
the other two sides proportionally:

$$
\frac{AM}{MB} = \frac{AN}{NC} \quad \text{for } MN \parallel BC
$$

**Converse.** If a line divides two sides of a triangle proportionally,
it is parallel to the third side.

The theorem lets a segment be divided in any given ratio by
construction: mark the ratio along a ray, join, draw a parallel.

## Worked Example

In $\triangle ABC$, $MN \parallel BC$ with $M$ on $AB$, $N$ on $AC$; $AM = 4$,
$MB = 6$, $AN = 6$. Find $NC$. Then: divide a segment in the ratio $2 :
5$. Then: $AM = 3$, $MB = 5$, $AN = 4.5$, $NC = 7.5$ - is $MN \parallel BC$?

- **Proportion:** $\frac{AM}{MB} = \frac{AN}{NC}$, so $\frac{4}{6} =
  \frac{6}{NC}$, $NC = 9$.
- **Divide $2 : 5$:** from one end of the segment draw a ray; step off
  $7$ equal marks; join the $7$th to the other end; the parallel through
  the $2$nd mark divides the segment $2 : 5$.
- **Converse check:** $\frac{3}{5} = 0.6$ and $\frac{4.5}{7.5} = 0.6$. Equal,
  so $MN \parallel BC$.

Ratios from the vertex work too: $\frac{AM}{AB} = \frac{AN}{AC}$ - in the
first case $\frac{4}{10} = \frac{6}{15}$, both $0.4$.

## Common Mistake

Mixing a ratio measured from the vertex with one measured between the
division points. $\frac{AM}{MB}$ pairs with $\frac{AN}{NC}$; $\frac{AM}{AB}$
pairs with $\frac{AN}{AC}$. Writing $\frac{AM}{MB} = \frac{AN}{AC}$ mixes
the two and gives a wrong number. Keep corresponding pieces together:
top to top, whole to whole.

## The Takeaway

Parallel lines cut the sides of an angle into proportional pieces, and
a line parallel to a side of a triangle divides the other two sides in
the same ratio - conversely, equal ratios mean parallel. Match
corresponding segments when writing the proportion.

## Check Yourself

1. $MN \parallel BC$, $AM = 5$, $MB = 10$, $NC = 8$. Find $AN$.
2. $MN \parallel BC$, $AB = 12$, $AM = 4$, $AC = 18$. Find $AN$.
3. Parallel lines cut segments $3$ and $9$ on one side of an angle and
   $2$ and $x$ on the other. Find $x$.
4. $AM = 2$, $MB = 3$, $AN = 4$, $NC = 5$. Is $MN \parallel BC$?
5. Describe how to divide a segment in the ratio $3 : 4$.
6. Someone writes $\frac{AM}{MB} = \frac{AN}{AC}$ for $MN \parallel BC$.
   What's the correct pairing?

> [!spoiler] Answers
>
> 1. $4$.
> 2. $\frac{4}{12} = \frac{AN}{18}$, $AN = 6$.
> 3. $x = 6$.
> 4. No: $\frac{2}{3} \neq \frac{4}{5}$.
> 5. Ray, $7$ equal steps, join the $7$th to the far end, parallel through
>    the $3$rd.
> 6. $\frac{AM}{MB} = \frac{AN}{NC}$, or $\frac{AM}{AB} = \frac{AN}{AC}$.
