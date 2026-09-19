---
title: "[S] Equation of a Circle"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-3-lesson-3-midpoint-and-distance, grade-7-geometry-topic-21-lesson-21-circle-and-disc]
---

## Why It Matters

A circle is "all points at distance $r$ from the centre" - and now
that distance is a formula. Write it down and you have the equation
of a circle: a single line of algebra that says which points are on
it and which aren't. A phone's location within $50$ m of a tower, a
sprinkler's reach, a wheel - all become equations you can intersect
with lines and solve. It's the first curve to get an equation, and
the template for all the others.

## The Big Idea

A point $(x; y)$ is on the circle with centre $(a; b)$ and radius $r$
exactly when its distance to the centre is $r$: $\sqrt{(x - a)^2 + (y -
b)^2} = r$. Square both sides and the root is gone. That's the
equation - the distance formula with the root removed. Reading it
backwards: any equation of the form $(x - a)^2 + (y - b)^2 = r^2$ is a
circle, and you can read the centre and radius straight off it. If
the equation arrives expanded, completing the square puts it back in
that form.

## The Rule

**Theorem.** The circle with centre $(a; b)$ and radius $r$ has the
equation

$$
(x - a)^2 + (y - b)^2 = r^2
$$

A point lies on the circle exactly when its coordinates satisfy the
equation. For the centre at the origin: $x^2 + y^2 = r^2$.

To identify a circle from an expanded equation $x^2 + y^2 + Dx + Ey + F
= 0$, complete the square in $x$ and in $y$.

Inside the circle: $(x - a)^2 + (y - b)^2 < r^2$; outside: $> r^2$.

## Worked Example

Write the equation of the circle with centre $(2; -3)$ and radius $4$.
Does $(5; -3)$ lie on it? $(2; 1)$? $(0; 0)$? Then find the centre and
radius of $x^2 + y^2 - 6x + 4y - 3 = 0$. Then write the equation of the
circle with diameter $AB$, $A(-1; 2)$, $B(5; 10)$.

- **Equation:** $(x - 2)^2 + (y + 3)^2 = 16$. Watch the signs: centre
  $(2; -3)$ gives $x - 2$ and $y + 3$.
- **$(5; -3)$:** $9 + 0 = 9 \neq 16$ - not on it (inside, since $9 < 16$).
  **$(2; 1)$:** $0 + 16 = 16$ - on it. **$(0; 0)$:** $4 + 9 = 13 < 16$ -
  inside.
- **Complete the square.** $(x^2 - 6x) + (y^2 + 4y) = 3$; $(x - 3)^2 - 9 + (y +
  2)^2 - 4 = 3$; $(x - 3)^2 + (y + 2)^2 = 16$. Centre $(3; -2)$, radius $4$.
- **Diameter $AB$.** Centre = midpoint $(2; 6)$; radius = half of $AB =
  \frac{1}{2}\sqrt{36 + 64} = 5$. Equation: $(x - 2)^2 + (y - 6)^2 = 25$.

Intersecting with a line: substitute $y = $ (line) into the circle and
solve the quadratic - two, one or no points.

## Common Mistake

Reading the centre with the wrong signs: $(x - 2)^2 + (y + 3)^2 = 16$
has centre $(2; -3)$, not $(-2; 3)$ - the equation has $x - a$, so $a$ is
the number being subtracted. And forgetting that the right side is
$r^2$: radius $4$ means $16$ on the right, and $= 16$ means radius $4$,
not $16$. Check with a point: $(2 + 4; -3) = (6; -3)$ should satisfy the
equation - and $16 + 0 = 16$ does.

## The Takeaway

$(x - a)^2 + (y - b)^2 = r^2$: centre $(a; b)$, radius $r$, straight from
the distance formula. Signs inside are opposite to the centre's;
the right side is the radius *squared*. Complete the square to read
an expanded one.

## Check Yourself

1. Write the equation of the circle with centre $(-1; 5)$, radius $3$.
2. Give the centre and radius of $(x + 4)^2 + (y - 1)^2 = 49$.
3. Does $(3; 4)$ lie on $x^2 + y^2 = 25$? Does $(4; 4)$?
4. Find the centre and radius of $x^2 + y^2 + 2x - 8y + 8 = 0$.
5. Write the equation of the circle centred at the origin through
   $(-6; 8)$.
6. Someone reads $(x - 5)^2 + (y + 2)^2 = 9$ as centre $(-5; 2)$, radius
   $9$. Correct both.

> [!spoiler] Answers
>
> 1. $(x + 1)^2 + (y - 5)^2 = 9$.
> 2. $(-4; 1)$; $7$.
> 3. Yes ($9 + 16 = 25$); no ($32 \neq 25$).
> 4. $(x + 1)^2 + (y - 4)^2 = 9$: centre $(-1; 4)$, radius $3$.
> 5. $r = 10$: $x^2 + y^2 = 100$.
> 6. Centre $(5; -2)$, radius $3$.
