---
title: "[S] Coordinates of the Midpoint of a Segment. Distance Between Two Points"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-1-lesson-1-coordinate-plane, grade-8-geometry-topic-17-lesson-17-pythagorean-theorem]
---

## Why It Matters

How far apart are two cities on a map grid? Where's the centre of a
line drawn between two points? These two formulas - midpoint and
distance - are the first real payoff of coordinates: questions that
needed a ruler and a construction become arithmetic on four numbers.
Everything in coordinate geometry - the equation of a circle, the
length of a vector, proving a triangle is isosceles - is built from
them.

## The Big Idea

The midpoint is the average: halfway in $x$ and halfway in $y$, so its
coordinates are the means of the endpoints' coordinates. The distance
is Pythagoras: the segment from $A$ to $B$ is the hypotenuse of a right
triangle whose legs are the horizontal change $|x_2 - x_1|$ and the
vertical change $|y_2 - y_1|$. Square them, add, take the root. That
one picture - a right triangle with legs along the grid - is behind
the whole formula.

## The Rule

For points $A(x_1; y_1)$ and $B(x_2; y_2)$:

**Midpoint** $M$ of $AB$:

$$
M\left(\frac{x_1 + x_2}{2};\ \frac{y_1 + y_2}{2}\right)
$$

**Distance** $AB$:

$$
AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

The order of subtraction doesn't matter - the differences are
squared. The distance from a point $(x; y)$ to the origin is $\sqrt{x^2 +
y^2}$.

## Worked Example

Find the midpoint and length of $AB$ for $A(-1; 3)$, $B(5; -5)$. Then:
$M(2; 1)$ is the midpoint of $CD$ with $C(-3; 4)$; find $D$. Then: show
that the triangle $P(1; 1)$, $Q(4; 5)$, $R(-3; 4)$ is isosceles.

- **Midpoint:** $\left(\frac{-1 + 5}{2}; \frac{3 - 5}{2}\right) = (2; -1)$.
- **Length:** $AB = \sqrt{(5 + 1)^2 + (-5 - 3)^2} = \sqrt{36 + 64} = 10$.
- **Finding $D$.** $\frac{-3 + x}{2} = 2$, so $x = 7$; $\frac{4 + y}{2} = 1$, so
  $y = -2$. $D(7; -2)$.
- **Isosceles?** $PQ = \sqrt{9 + 16} = 5$; $PR = \sqrt{16 + 9} = 5$; $QR = \sqrt{49 +
  1} = \sqrt{50}$. $PQ = PR$: isosceles with apex $P$. Also $PQ^2 + PR^2
  = 50 = QR^2$, so it's a right isosceles triangle.

The last one shows the method: a property of a figure is checked by
computing lengths.

## Common Mistake

Forgetting to square, or to take the root: $AB = (5 + 1) + (-5 - 3)$ or
$AB = 36 + 64 = 100$. The distance is $\sqrt{100} = 10$. And in the
midpoint, subtracting instead of adding - the midpoint *averages*.
Sanity check: the midpoint should lie between the two points, and the
distance should be at least as big as the larger of the two
coordinate changes.

## The Takeaway

Midpoint: average the $x$'s, average the $y$'s. Distance: square the
changes in $x$ and $y$, add, root - Pythagoras on the grid. With these
two, side lengths and centres are computed, and figures are
classified by arithmetic.

## Check Yourself

1. Find the midpoint of $A(2; -3)$, $B(-6; 7)$.
2. Find the distance between $(1; 2)$ and $(4; 6)$.
3. Find the distance from $(-8; 6)$ to the origin.
4. $M(0; 0)$ is the midpoint of $AB$ with $A(3; -5)$. Find $B$.
5. Is the triangle $(0; 0)$, $(6; 0)$, $(3; 4)$ isosceles? Equilateral?
6. Someone finds the distance between $(1; 1)$ and $(4; 5)$ as $\sqrt{3 + 4}
   = \sqrt{7}$. Correct it.

> [!spoiler] Answers
>
> 1. $(-2; 2)$.
> 2. $5$.
> 3. $10$.
> 4. $(-3; 5)$.
> 5. Sides $6, 5, 5$: isosceles, not equilateral.
> 6. $\sqrt{3^2 + 4^2} = 5$ - the changes are squared.
