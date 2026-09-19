---
title: "[S] Solving Right Triangles"
tag: MTD
track: school
grade: 8
subject: geometry
requires: [grade-8-geometry-topic-19-lesson-19-sine-cosine-tangent]
---

## Why It Matters

A surveyor sees the top of a tower at $32^\circ$ above the horizontal
from $80$ m away - how tall is it? A plane climbs at $6^\circ$ and covers
$5$ km of ground - how high is it? A roof rises $3$ m over a run of $8$ m
- what's its pitch? Each gives a right triangle with some parts known
and asks for the rest. "Solving" the triangle means finding every side
and angle, and with sine, cosine, tangent and Pythagoras it's always
possible from two pieces of data.

## The Big Idea

A right triangle has five unknowns besides the right angle: three
sides and two acute angles. Knowing any two of them - as long as one
is a side - pins down the rest. The angles are tied by $\alpha + \beta =
90^\circ$; the sides by Pythagoras; a side and an angle by the three
ratios. So the plan is: pick the relation that contains exactly one
unknown, solve it, repeat. Choosing well - a ratio that uses the
*given* side rather than a computed one - keeps rounding errors from
piling up.

## The Rule

In a right triangle with legs $a$, $b$, hypotenuse $c$, and acute angles
$\alpha$ (opposite $a$) and $\beta$ (opposite $b$):

$$
a = c \sin \alpha = c \cos \beta, \qquad b = c \cos \alpha = c \sin \beta, \qquad a = b \tan \alpha
$$

$$
\alpha + \beta = 90^\circ, \qquad c^2 = a^2 + b^2
$$

**Cases:**

- **hypotenuse and an acute angle:** other angle by subtraction; legs
  $c \sin$, $c \cos$;
- **a leg and an acute angle:** other angle by subtraction; other leg
  by $\tan$; hypotenuse by $\sin$ or $\cos$;
- **two legs:** hypotenuse by Pythagoras; an angle by $\tan$; the other
  by subtraction;
- **hypotenuse and a leg:** other leg by Pythagoras; an angle by
  $\sin$ or $\cos$.

Angles are found from a ratio by tables or a calculator ("the angle
whose tangent is $0.375$").

## Worked Example

The top of a tower is seen at $32^\circ$ above horizontal from $80$ m
away (eye level ignored). Find the height, using $\tan 32^\circ \approx
0.625$. Then solve the right triangle with legs $3$ and $8$ (the roof),
using $\tan 20.6^\circ \approx 0.375$.

- **Tower.** The height $h$ is the leg opposite $32^\circ$, the $80$ m is
  the adjacent leg: $h = 80 \tan 32^\circ \approx 80 \cdot 0.625 = 50$ m.
- **Roof.** Hypotenuse $c = \sqrt{9 + 64} = \sqrt{73} \approx 8.54$. The
  angle opposite $3$: $\tan \alpha = \frac{3}{8} = 0.375$, so $\alpha \approx
  20.6^\circ$. Then $\beta = 90^\circ - 20.6^\circ = 69.4^\circ$.

The plane: hypotenuse unknown; ground $5$ km is adjacent to $6^\circ$;
height $= 5 \tan 6^\circ \approx 5 \cdot 0.105 = 0.53$ km $\approx 530$ m.

## Common Mistake

Using the wrong ratio for the given pair - putting the adjacent leg
over the hypotenuse and calling it sine, or computing $80 \sin 32^\circ$
for the tower height. Before writing anything, label the sides
*relative to the known angle*: opposite, adjacent, hypotenuse. Then
sine needs opposite and hypotenuse, cosine adjacent and hypotenuse,
tangent opposite and adjacent - pick the one whose two sides are the
known and the wanted.

## The Takeaway

Two given parts (one a side) determine a right triangle: angles sum
to $90^\circ$, sides obey Pythagoras, and sine, cosine, tangent link a
side to an angle. Label the sides relative to the angle, choose the
ratio containing the known and the wanted, and work from the given
data.

## Check Yourself

1. Hypotenuse $10$, angle $30^\circ$. Find both legs.
2. Leg $7$ adjacent to $45^\circ$. Find the other leg and the hypotenuse.
3. Legs $6$ and $8$. Find the hypotenuse and $\tan$ of the smaller
   angle.
4. Hypotenuse $13$, leg $12$. Find the other leg and $\sin$ of the angle
   opposite it.
5. A $12$-m ladder makes $70^\circ$ with the ground; $\cos 70^\circ \approx
   0.342$. How far is its foot from the wall?
6. Someone finds the tower height as $80 \sin 32^\circ$. Which side is
   $80$, and which ratio was needed?

> [!spoiler] Answers
>
> 1. $5$ (opposite $30^\circ$) and $5\sqrt{3} \approx 8.66$.
> 2. $7$; $7\sqrt{2} \approx 9.9$.
> 3. $10$; $\frac{6}{8} = 0.75$.
> 4. $5$; $\frac{5}{13}$.
> 5. $12 \cos 70^\circ \approx 4.1$ m.
> 6. $80$ is the adjacent leg; height over adjacent is the tangent.
