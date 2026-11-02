---
title: "[S] Sum of the Angles of a Triangle"
tag: THM
track: school
grade: 7
subject: geometry
requires: [grade-7-geometry-topic-10-lesson-10-properties-of-parallel-lines, grade-7-geometry-topic-14-lesson-14-isosceles-triangle]
---

## Why It Matters

Tear the three corners off a paper triangle and lay them side by side:
they make a straight line. Every triangle, every time. That's the most
famous theorem of school geometry - the angles of a triangle sum to
$180^\circ$ - and it's the reason two angles of a triangle always tell
you the third. It runs through navigation, surveying and every angle
problem you'll ever meet.

## The Big Idea

Why should the corners make a straight line? Draw a line through one
vertex parallel to the opposite side. The two other angles of the
triangle reappear at that vertex as alternate angles - the property of
parallel lines - and together with the vertex's own angle they fill
the straight angle along the parallel. So the three angles add to
$180^\circ$. The proof is three lines long and rests entirely on the
parallel axiom: in a geometry without unique parallels, the theorem
fails.

[!anim] triangle-angle-sum

Drag any vertex. Right now $\angle A = \live{triangle-angle-sum:alpha}{56^\circ}$,
$\angle B = \live{triangle-angle-sum:beta}{82^\circ}$ and
$\angle C = \live{triangle-angle-sum:gamma}{42^\circ}$, which makes
$\live{triangle-angle-sum:sum}{180^\circ}$ - and no triangle you can drag out will
change that. Here is why, one step at a time.

> [!step] triangle-angle-sum:parallel
> Through $B$ draw the line [$a$](#triangle-angle-sum:line-a) parallel to
> [$AC$](#triangle-angle-sum:side-ac).

> [!step] triangle-angle-sum:alternate-a
> $BA$ crosses the parallels $a$ and $AC$, so the angle between $a$ and $BA$
> is alternate to [$\angle A$](#triangle-angle-sum:angle-a) - and equal to it.

> [!step] triangle-angle-sum:alternate-c
> In the same way $BC$ brings [$\angle C$](#triangle-angle-sum:angle-c) over to $B$, on the
> other side.

> [!step] triangle-angle-sum:straight
> Together with [$\angle B$](#triangle-angle-sum:angle-b) itself, the three angles at $B$
> fill the straight angle along $a$: $\angle A + \angle B + \angle C = 180^\circ$.

> [!task] triangle-angle-sum:right-angle
> Drag a vertex until the triangle has a right angle. What do the other two
> angles add up to then?

> [!task] triangle-angle-sum:isosceles
> Now drag a vertex until two of the angles are equal - the triangle is then
> isosceles. Which two sides have become equal?

Consequences fall out at once: a triangle has at most one obtuse or
right angle, and each acute angle of a right triangle is the other's
complement.

## The Rule

**Theorem.** The sum of the angles of a triangle is $180^\circ$:

$$
\angle A + \angle B + \angle C = 180^\circ
$$

*Proof.* Through $B$ draw the line $a \parallel AC$. The angles $a$
makes with $BA$ and $BC$ are alternate to $\angle A$ and $\angle C$
respectively, so equal to them. The three angles at $B$ along the line
$a$ make a straight angle: $\angle A + \angle B + \angle C = 180^\circ$.
$\square$

Consequences:

- a triangle has at most one right or obtuse angle; the other two are
  acute;
- in a right triangle the two acute angles sum to $90^\circ$;
- each angle of an equilateral triangle is $60^\circ$;
- in an isosceles triangle, the base angles are $\frac{180^\circ - \angle
  A}{2}$ where $\angle A$ is the apex angle.

## Worked Example

Four problems, each a different way into the same rule: whatever two angles
of a triangle are, the third is what they leave of $180^\circ$.

**Problem 1. Two angles are known.** A triangle has angles of $48^\circ$ and
$67^\circ$. Find the third. [Show it on the triangle ↑](#triangle-angle-sum:problem-1)

1. Call the angle we are looking for $x$.
2. Write the theorem for this triangle: $48^\circ + 67^\circ + x = 180^\circ$.
3. Add the two known angles: $48^\circ + 67^\circ = 115^\circ$, so
   $115^\circ + x = 180^\circ$.
4. Take $115^\circ$ away from both sides: $x = 180^\circ - 115^\circ = 65^\circ$.

**Answer:** $65^\circ$. **Check:** $48^\circ + 67^\circ + 65^\circ = 180^\circ$.

**Problem 2. Only the ratio is known.** The angles of a triangle are in the
ratio $2 : 3 : 4$. Find them. [Show it on the triangle ↑](#triangle-angle-sum:problem-2)

1. A ratio $2 : 3 : 4$ says the angles are built from equal parts: the first
   has $2$ of them, the second $3$, the third $4$. Call one part $x$; then
   the angles are $2x$, $3x$ and $4x$.
2. Together they make $180^\circ$: $2x + 3x + 4x = 180^\circ$.
3. Count the parts: $9x = 180^\circ$, so one part is
   $x = 180^\circ : 9 = 20^\circ$.
4. Go back to the angles: $2x = 40^\circ$, $3x = 60^\circ$, $4x = 80^\circ$.

**Answer:** $40^\circ$, $60^\circ$, $80^\circ$. **Check:**
$40^\circ + 60^\circ + 80^\circ = 180^\circ$, and $40 : 60 : 80 = 2 : 3 : 4$.
All three angles are less than $90^\circ$, so the triangle is acute.

**Problem 3. An isosceles triangle.** The angle at the apex of an isosceles
triangle is $40^\circ$. Find the angles at its base.
[Show it on the triangle ↑](#triangle-angle-sum:problem-3)

1. In an isosceles triangle the two angles at the base are equal. Call each
   of them $y$.
2. The three angles are $40^\circ$, $y$ and $y$:
   $40^\circ + y + y = 180^\circ$, that is $40^\circ + 2y = 180^\circ$.
3. Take $40^\circ$ away from both sides: $2y = 140^\circ$.
4. Halve it: $y = 70^\circ$.

**Answer:** $70^\circ$ each. **Check:** $40^\circ + 70^\circ + 70^\circ = 180^\circ$.

**Problem 4. A right triangle.** One acute angle of a right triangle is
$35^\circ$. Find the other one. [Show it on the triangle ↑](#triangle-angle-sum:problem-4)

1. A right triangle has a right angle, so $90^\circ$ of the $180^\circ$ are
   already taken.
2. The two acute angles share what is left: $180^\circ - 90^\circ = 90^\circ$.
3. So the other acute angle is $90^\circ - 35^\circ = 55^\circ$.

**Answer:** $55^\circ$. **Check:** $90^\circ + 35^\circ + 55^\circ = 180^\circ$.
The same reasoning works for every right triangle: its two acute angles
always add up to $90^\circ$.

## Common Mistake

Assuming a triangle can have two right angles or two obtuse angles -
"a triangle with angles $90^\circ$, $90^\circ$, and something." Two right
angles already use all $180^\circ$, leaving nothing for the third. When
a computed angle comes out zero or negative, the setup was wrong, not
the theorem.

## The Takeaway

The three angles of any triangle sum to $180^\circ$, proved by a
parallel through a vertex. So two angles give the third, a right
triangle's acute angles are complementary, and an equilateral
triangle's angles are $60^\circ$ each.

## Check Yourself

1. Two angles of a triangle are $53^\circ$ and $71^\circ$. Find the third.
2. Angles are in the ratio $1 : 2 : 3$. Find them, and name the
   triangle by angles.
3. An isosceles triangle has a base angle of $50^\circ$. Find the apex
   angle.
4. One acute angle of a right triangle is twice the other. Find both.
5. Can a triangle have angles $100^\circ$, $50^\circ$ and $40^\circ$? And
   $100^\circ$, $50^\circ$ and $30^\circ$? Explain.
6. The apex angle of an isosceles triangle is $95^\circ$. A student solved
   it like this: "The base angles are equal, so
   $95^\circ + 95^\circ + x = 180^\circ$, and $x = -10^\circ$." Find the
   mistake and solve the problem correctly.

> [!spoiler] Answers
>
> 1. $56^\circ$.
> 2. $30^\circ$, $60^\circ$, $90^\circ$ - right.
> 3. $80^\circ$.
> 4. $30^\circ$ and $60^\circ$.
> 5. The first - no: $100^\circ + 50^\circ + 40^\circ = 190^\circ$, not
>    $180^\circ$. The second - yes: the angles add up to exactly $180^\circ$,
>    and the triangle is obtuse.
> 6. The student put $95^\circ$ at the base, but it is the apex angle. The
>    equal angles are the base ones: $95^\circ + 2y = 180^\circ$,
>    $y = 42.5^\circ$ each. A negative angle is a sign that the equation was
>    set up wrongly.
