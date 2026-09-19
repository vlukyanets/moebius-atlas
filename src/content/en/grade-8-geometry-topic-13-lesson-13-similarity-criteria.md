---
title: "[S] Criteria for Similar Triangles"
tag: THM
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-12-lesson-12-similar-triangles]
---

## Why It Matters

To prove triangles congruent you needed three matching parts, not
six. Similarity is cheaper still: *two equal angles* are enough. A
sunlit stick and a sunlit tower make similar triangles with their
shadows - both have a right angle and the same sun angle - and from
the stick's height and the two shadows, the tower's height follows.
That's the oldest measurement trick in the book, and the first
criterion is why it works.

## The Big Idea

Two triangles with two pairs of equal angles have the third pair equal
too (angle sum). Lay the small one into the big one's corner with the
equal angles matched: the opposite sides come out parallel
(corresponding angles), so by the lemma the small triangle is similar
to the big one. Angles alone fix the shape.

The other two criteria trade angles for side ratios, exactly as SAS
and SSS traded an angle for sides: two proportional sides with the
included angle equal, or three proportional sides. Each is proved by
cutting a scaled copy from the big triangle and showing it's
congruent to the small one.

## The Rule

Two triangles are similar if:

1. **(AA)** two angles of one are equal to two angles of the other;
2. **(SAS)** two sides of one are proportional to two sides of the
   other and the angles between them are equal;
3. **(SSS)** three sides of one are proportional to three sides of the
   other.

$$
\text{AA:}\ \angle A = \angle A_1,\ \angle B = \angle B_1 \qquad
\text{SAS:}\ \frac{AB}{A_1B_1} = \frac{AC}{A_1C_1},\ \angle A = \angle A_1 \qquad
\text{SSS:}\ \frac{AB}{A_1B_1} = \frac{BC}{B_1C_1} = \frac{CA}{C_1A_1}
$$

Consequences: two right triangles with an equal acute angle are
similar; all equilateral triangles are similar; two isosceles
triangles with equal apex angles are similar.

## Worked Example

A $1.5$-m stick casts a $2$-m shadow; at the same moment a tower casts
a $24$-m shadow. Find the tower's height. Then: triangles with sides
$3, 4, 5$ and $9, 12, 15$ - similar? And with sides $4, 6$ enclosing
$50^\circ$ and $6, 9$ enclosing $50^\circ$?

- **Shadows.** Both triangles have a right angle (vertical against
  horizontal) and the same sun angle: AA, similar. Ratio of shadows
  $\frac{24}{2} = 12$, so the tower is $1.5 \cdot 12 = 18$ m.
- **$3, 4, 5$ and $9, 12, 15$:** ratios $\frac{9}{3} = \frac{12}{4} =
  \frac{15}{5} = 3$. SSS, similar with $k = 3$.
- **$4, 6$ and $6, 9$ at $50^\circ$:** $\frac{6}{4} = \frac{9}{6} = 1.5$ and the
  included angles are equal. SAS, similar.

Intersecting lines: if $AB \parallel CD$ and $AD$, $BC$ meet at $O$, then
$\triangle AOB \sim \triangle DOC$ by AA (vertical angles at $O$, alternate
angles from the parallels).

## Common Mistake

Using SAS with a non-included angle, or checking only two side
ratios for SSS. As with congruence, the angle in SAS must be *between*
the two proportional sides; and SSS needs *all three* ratios equal -
$\frac{9}{3} = \frac{12}{4}$ alone doesn't settle it. Also: AA needs the
angles to *correspond* - an angle of $50^\circ$ in each triangle and an
angle of $60^\circ$ in each, matched.

## The Takeaway

Two equal angles, or two proportional sides with the included angle,
or three proportional sides - any one proves similarity. AA is the
one used most: right angle plus one more, or parallels plus vertical
angles, and the triangles are scaled copies.

## Check Yourself

1. Triangles have angles $40^\circ, 60^\circ, 80^\circ$ and $60^\circ, 80^\circ,
   40^\circ$. Similar? By what?
2. Sides $2, 3, 4$ and $6, 9, 12$. Similar? Ratio?
3. Sides $5, 8$ with $30^\circ$ between, and $10, 16$ with $30^\circ$
   between. Similar?
4. A $2$-m post casts a $3$-m shadow; a tree casts $18$ m. Height?
5. Two right triangles each have an acute angle of $35^\circ$. Similar?
6. Someone says triangles with sides $3, 4, 5$ and $6, 8, 12$ are similar
   "because $\frac{6}{3} = \frac{8}{4}$." What's missing?

> [!spoiler] Answers
>
> 1. Yes, AA.
> 2. Yes, $k = 3$.
> 3. Yes, SAS ($\frac{10}{5} = \frac{16}{8}$).
> 4. $12$ m.
> 5. Yes, AA (right angle and $35^\circ$).
> 6. The third ratio: $\frac{12}{5} \neq 2$, so not similar.
