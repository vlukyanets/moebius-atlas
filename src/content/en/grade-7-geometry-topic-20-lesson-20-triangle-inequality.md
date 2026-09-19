---
title: "[S] Triangle Inequality"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-18-lesson-18-exterior-angle-and-sides-vs-angles]
---

## Why It Matters

Can you make a triangle with sides $2$, $3$ and $7$ cm? Try with sticks:
the two short ones can't reach each other across the long one. That
failure is a theorem - each side of a triangle is shorter than the
other two together - and it's the mathematical form of "the straight
path is the shortest." It decides which triangles can exist, and it
bounds every distance problem you'll meet.

## The Big Idea

Going from $A$ to $B$ directly is never longer than going via $C$: $AB
\leq AC + CB$, with equality only when $C$ lies on the segment. For a
real triangle, where $C$ is off the line, the detour is strictly
longer. The proof uses sides against angles: extend $AC$ past $C$ by
$CB$ to a point $D$; then $\triangle BCD$ is isosceles, $\angle ABD >
\angle CBD = \angle D$, and in $\triangle ABD$ the bigger angle at $B$ faces
the bigger side, so $AD > AB$ - and $AD = AC + CB$.

So three lengths make a triangle exactly when each is less than the
sum of the other two - which, if you check the longest, is one
comparison.

## The Rule

**Theorem (triangle inequality).** Each side of a triangle is less
than the sum of the other two:

$$
AB < AC + CB, \qquad BC < BA + AC, \qquad CA < CB + BA
$$

Equivalently, each side is greater than the difference of the other
two.

**Consequence.** Three segments can be the sides of a triangle if and
only if the longest is shorter than the sum of the other two.

**For any three points** $A$, $B$, $C$: $AB \leq AC + CB$, with equality
exactly when $C$ lies on the segment $AB$.

## Worked Example

Can a triangle have sides $2$, $3$, $7$? Sides $4$, $5$, $8$? Sides $3$, $4$,
$7$? Then: two sides of a triangle are $5$ and $9$ - what can the third
be?

- **$2, 3, 7$:** the longest is $7$; $2 + 3 = 5 < 7$. No triangle.
- **$4, 5, 8$:** $4 + 5 = 9 > 8$. Yes.
- **$3, 4, 7$:** $3 + 4 = 7$, not greater. No - the three points are on
  a line.
- **Third side $x$:** $x < 5 + 9 = 14$, and $9 < 5 + x$ gives $x > 4$. So
  $4 < x < 14$.

An isosceles triangle with sides $3$, $3$ and $7$? $3 + 3 = 6 < 7$ - no;
with $7$, $7$ and $3$ - yes.

## Common Mistake

Checking only one inequality - the wrong one. For $2, 3, 7$, "$7 + 3 >
2$" is true and proves nothing. The inequality that can fail is the
one with the longest side on the small side of the comparison: longest
$<$ sum of the other two. Check that one; if it holds, the other two
hold automatically.

## The Takeaway

Any side of a triangle is less than the sum of the other two - the
straight route is shortest. Three lengths form a triangle exactly when
the longest is less than the sum of the other two, and a third side is
squeezed between the difference and the sum of the other two.

## Check Yourself

1. Can $6$, $8$, $10$ be the sides of a triangle? $1$, $2$, $3$?
2. Two sides are $7$ and $12$. Between what values is the third?
3. The perimeter of an isosceles triangle is $20$ and one side is $4$.
   Find the other sides.
4. Is the sum of the diagonals of a quadrilateral greater than the sum
   of two opposite sides? Why?
5. Points $A$, $B$, $C$ have $AB = 5$, $BC = 3$, $AC = 8$. What can you
   say about their position?
6. Someone checks $7 + 3 > 2$ and declares that $2, 3, 7$ form a
   triangle. Which check was needed?

> [!spoiler] Answers
>
> 1. Yes; no ($1 + 2 = 3$).
> 2. $5 < x < 19$.
> 3. $8$ and $8$ - the legs can't be $4$, since $4 + 4 < 12$.
> 4. Yes - each diagonal with a side is a triangle; add the two
>    inequalities.
> 5. They're on a line, $B$ between $A$ and $C$.
> 6. Longest side against the other two: $2 + 3 > 7$, which fails.
