---
title: "[S] Law of Cosines"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-10-lesson-10-scalar-product]
---

## Why It Matters

Pythagoras works for right triangles only. Two ships leave port at an
angle of $50^\circ$ and sail $30$ and $40$ km - how far apart are they?
No right angle, no Pythagoras. The law of cosines is Pythagoras for
*every* triangle: the same $a^2 + b^2$, with a correction term that
depends on the angle and vanishes at $90^\circ$. It finds a side from
two sides and the angle between them, or any angle from the three
sides - half of all triangle-solving.

## The Big Idea

Write the third side as a vector: $\overrightarrow{BC} = \overrightarrow{AC} -
\overrightarrow{AB}$. Square it with the scalar product: $a^2 = b^2 + c^2 -
2\,\overrightarrow{AB} \cdot \overrightarrow{AC}$, and that product is $bc \cos
A$. Done - the whole theorem is one line of vector algebra. The
correction $-2bc\cos A$ is negative for an acute $A$ (the side opposite
is shorter than Pythagoras would say), zero for a right angle, and
positive for an obtuse $A$ (the side is longer). So the theorem also
*classifies* the angle by comparing $a^2$ with $b^2 + c^2$.

## The Rule

**Theorem (law of cosines).** In any triangle the square of a side
equals the sum of the squares of the other two sides minus twice
their product times the cosine of the angle between them:

$$
a^2 = b^2 + c^2 - 2bc \cos A
$$

and similarly $b^2 = a^2 + c^2 - 2ac\cos B$, $c^2 = a^2 + b^2 - 2ab\cos C$.

**Consequences.**

- For $A = 90^\circ$ it is the Pythagorean theorem.
- $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$ - an angle from three sides.
- The angle $A$ is acute, right or obtuse according as $a^2 <$, $=$ or
  $> b^2 + c^2$.

*Proof.* $\overrightarrow{BC} = \overrightarrow{AC} - \overrightarrow{AB}$; square:
$a^2 = b^2 - 2\overrightarrow{AB} \cdot \overrightarrow{AC} + c^2 = b^2 + c^2 - 2bc
\cos A$. $\square$

## Worked Example

The ships: $30$ km, $40$ km, angle $50^\circ$ ($\cos 50^\circ \approx 0.643$).
Then: sides $5, 7, 8$ - find the angle opposite $7$. Then: is the
triangle $4, 5, 7$ acute, right or obtuse? Then: sides $3$ and $5$ with an
angle of $120^\circ$ between them - find the third.

- **Ships.** $d^2 = 900 + 1600 - 2 \cdot 30 \cdot 40 \cdot 0.643 = 2500 - 1543 =
  957$, $d \approx 30.9$ km.
- **Angle opposite $7$.** $\cos = \frac{25 + 64 - 49}{2 \cdot 5 \cdot 8} =
  \frac{40}{80} = \frac{1}{2}$: $60^\circ$.
- **$4, 5, 7$.** Largest side $7$: $49$ vs $16 + 25 = 41$. $49 > 41$: the
  angle opposite $7$ is obtuse - an obtuse triangle.
- **$120^\circ$.** $c^2 = 9 + 25 - 2 \cdot 3 \cdot 5 \cdot \cos 120^\circ = 34 - 30
  \cdot \left(-\frac{1}{2}\right) = 49$, $c = 7$. Note the obtuse angle *adds*.

Only the largest angle can be obtuse, so to classify a triangle
test the largest side.

## Common Mistake

Getting the sign wrong with an obtuse angle: $\cos 120^\circ = -\frac{1}{2}$,
so $-2bc\cos A$ is $+15$, not $-15$. Keep the formula as written, plug
in the negative cosine, and the double minus takes care of itself.
The other slip is pairing a side with the wrong angle: $a$ is opposite
$A$, and the cosine in the formula for $a^2$ is of the angle *between*
$b$ and $c$ - which is $A$. Draw and label before you substitute.

## The Takeaway

$a^2 = b^2 + c^2 - 2bc\cos A$: Pythagoras with an angle correction.
Side from two sides and the included angle; angle from three sides.
Compare $a^2$ with $b^2 + c^2$ to tell acute from obtuse. Obtuse angles
have negative cosines and make the side longer.

## Check Yourself

1. Sides $6$ and $8$ with a $60^\circ$ angle between them. Find the third
   side.
2. Sides $6$ and $8$ with a $90^\circ$ angle. Find the third side and
   check against Pythagoras.
3. Sides $7, 8, 9$. Find the cosine of the angle opposite $9$.
4. Is the triangle $5, 6, 8$ acute or obtuse?
5. Sides $2$ and $2\sqrt{3}$ with a $150^\circ$ angle. Find the third side
   ($\cos 150^\circ = -\frac{\sqrt{3}}{2}$).
6. Someone finds the side opposite a $120^\circ$ angle with $b = c = 1$ as
   $\sqrt{1 + 1 - 1} = 1$. Find the slip.

> [!spoiler] Answers
>
> 1. $36 + 64 - 48 = 52$, $\sqrt{52} = 2\sqrt{13}$.
> 2. $\sqrt{100} = 10$; $\cos 90^\circ = 0$ leaves $a^2 = b^2 + c^2$.
> 3. $\frac{49 + 64 - 81}{112} = \frac{32}{112} = \frac{2}{7}$.
> 4. $64 > 25 + 36 = 61$: obtuse.
> 5. $4 + 12 + 2 \cdot 2 \cdot 2\sqrt{3} \cdot \frac{\sqrt{3}}{2} = 28$, $2\sqrt{7}$.
> 6. $\cos 120^\circ = -\frac{1}{2}$, so it's $\sqrt{1 + 1 + 1} = \sqrt{3}$.
