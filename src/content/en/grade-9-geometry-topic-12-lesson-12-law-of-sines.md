---
title: "[S] Law of Sines"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-11-lesson-11-law-of-cosines, grade-7-geometry-topic-24-lesson-24-circumcircle-of-a-triangle]
---

## Why It Matters

From a beach you see a ship; a friend $200$ m along the shore sees it
too; you each measure the angle to it. How far is the ship? That's a
triangle with one side and two angles known - and the law of cosines
can't help, since it needs two sides. The law of sines is the other
half of triangle-solving: sides are proportional to the sines of the
opposite angles, so one side and the angles give all the rest. It's
how surveyors, navigators and astronomers measured distances they
couldn't walk.

## The Big Idea

In any triangle, the bigger the angle, the bigger the side opposite -
grade 7 said so. The law of sines makes it exact: the ratio of a side
to the sine of its opposite angle is the *same* for all three pairs.
Why - drop an altitude from $C$: it equals $b \sin A$ from one side and
$a \sin B$ from the other, so $a \sin B = b \sin A$, i.e. $\frac{a}{\sin A}
= \frac{b}{\sin B}$. And the common ratio has a meaning: it's the
diameter of the circumscribed circle.

## The Rule

**Theorem (law of sines).** The sides of a triangle are proportional
to the sines of the opposite angles:

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R
$$

where $R$ is the radius of the circumscribed circle.

*Proof of the proportion.* Let $h$ be the altitude from $C$. Then $h =
b \sin A = a \sin B$ (for an obtuse angle, use $\sin(180^\circ - \alpha) =
\sin \alpha$). Hence $\frac{a}{\sin A} = \frac{b}{\sin B}$; likewise for $c$.
$\square$

**Use:** given a side and two angles (the third angle is $180^\circ$
minus the others), find the remaining sides. Given two sides and a
non-included angle, find the angle opposite the other side - with
care, since $\sin \alpha = \sin(180^\circ - \alpha)$ may give two candidates.

## Worked Example

The ship: base $200$ m, angles at the two observers $70^\circ$ and
$80^\circ$. Find the distance from the first observer ($\sin 80^\circ \approx
0.985$, $\sin 30^\circ = 0.5$). Then: in a triangle $a = 6$, $A = 30^\circ$;
find $R$. Then: $a = 4$, $b = 4\sqrt{3}$, $A = 30^\circ$; find $B$.

- **Ship.** Third angle $180^\circ - 70^\circ - 80^\circ = 30^\circ$, opposite
  the base. The distance from the first observer is opposite the
  second observer's angle $80^\circ$: $\frac{d}{\sin 80^\circ} = \frac{200}{\sin
  30^\circ}$, $d = 200 \cdot \frac{0.985}{0.5} = 394$ m.
- **$R$.** $2R = \frac{6}{\sin 30^\circ} = 12$, $R = 6$.
- **$B$.** $\frac{4}{\sin 30^\circ} = \frac{4\sqrt{3}}{\sin B}$, $\sin B = \frac{\sqrt{3}}
  {2}$: $B = 60^\circ$ or $B = 120^\circ$. Both work ($A + B < 180^\circ$
  either way): two triangles fit the data.

The last case is the ambiguous one - when the given angle is
opposite the *shorter* of the two given sides, there may be two
answers.

## Common Mistake

Pairing a side with the wrong angle. In the law of sines each side
goes with the angle *opposite* it - not adjacent. In the ship
problem the wanted distance runs from the first observer, so it's
opposite the *second* observer's angle. Label the triangle, then
match. The other slip is taking $\sin B = \frac{\sqrt{3}}{2}$ to mean $B =
60^\circ$ only; the obtuse $120^\circ$ has the same sine and must be
checked against the angle sum.

## The Takeaway

$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$: side over sine of
the opposite angle, the same for all, equal to the circumdiameter.
Solves a triangle from one side and two angles. From two sides and a
non-included angle, watch for the second, obtuse solution.

## Check Yourself

1. $a = 10$, $A = 30^\circ$, $B = 45^\circ$. Find $b$.
2. $b = 8$, $B = 60^\circ$. Find $R$.
3. $a = 5$, $b = 7$, $A = 40^\circ$ ($\sin 40^\circ \approx 0.643$). Find $\sin B$.
4. A triangle has $A = 30^\circ$, $B = 30^\circ$, $c = 12$. Find $a$.
5. Which is bigger, the side opposite $50^\circ$ or the side opposite
   $70^\circ$?
6. Someone solves $a = 3$, $b = 5$, $A = 20^\circ$ and reports one triangle.
   Could there be two?

> [!spoiler] Answers
>
> 1. $b = 10 \cdot \frac{\sin 45^\circ}{\sin 30^\circ} = 10\sqrt{2}$.
> 2. $2R = \frac{8}{\sqrt{3}/2}$, $R = \frac{8}{\sqrt{3}} \approx 4.62$.
> 3. $\sin B = \frac{7 \cdot 0.643}{5} \approx 0.9$.
> 4. $C = 120^\circ$; $a = 12 \cdot \frac{\sin 30^\circ}{\sin 120^\circ} =
>    \frac{6}{\sqrt{3}/2} = 4\sqrt{3}$.
> 5. Opposite $70^\circ$.
> 6. Yes - $\sin B = \frac{5 \sin 20^\circ}{3} \approx 0.57$ gives $B \approx
>    35^\circ$ or $145^\circ$, and both fit with $A = 20^\circ$.
