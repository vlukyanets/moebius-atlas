---
title: "[S] Rotation"
tag: THM
track: school
grade: 9
subject: geometry
requires: [grade-9-geometry-topic-19-lesson-19-point-symmetry]
---

## Why It Matters

A clock hand, a wheel, a door on its hinge, a windmill, the
recycling symbol - things that turn about a fixed point. Rotation is
the motion that describes them, and it generalises the half-turn of
symmetry about a point to any angle. A regular polygon is the shape
that survives rotation by $\frac{360^\circ}{n}$; a snowflake, by
$60^\circ$; and a proof that two segments are equal is often a rotation
that carries one onto the other.

## The Big Idea

Fix a centre $O$ and an angle $\alpha$. Every point $X$ swings around $O$
through $\alpha$ - along a circle centred at $O$ - to $X'$, so that $OX' =
OX$ and $\angle XOX' = \alpha$, always turning the same way
(counterclockwise by convention). $O$ itself stays. Two points swing
together like the ends of a rigid stick, so distances don't change:
a rotation is a motion. And it keeps the plane the right way up,
unlike a reflection. Symmetry about a point is the special case
$\alpha = 180^\circ$.

## The Rule

A **rotation** about a point $O$ (the centre) by an angle $\alpha$ is
the transformation that maps each point $X \neq O$ to the point $X'$
with $OX' = OX$ and $\angle XOX' = \alpha$, measured in a fixed direction
(counterclockwise, or clockwise if stated), and maps $O$ to itself.

**Theorem.** A rotation is a motion.

*Proof.* For points $X, Y$ and images $X', Y'$, triangles $OXY$ and
$OX'Y'$ are congruent by SAS: $OX = OX'$, $OY = OY'$, and $\angle XOY =
\angle X'OY'$ (both differ from $\angle XOY'$ by $\alpha$). Hence $X'Y' = XY$.
$\square$

- Rotation by $180^\circ$ is central symmetry about $O$.
- A figure has **rotational symmetry** of order $n$ if a rotation by
  $\frac{360^\circ}{n}$ maps it onto itself: a regular $n$-gon, a circle
  (any angle).
- In coordinates, rotation about the origin by $90^\circ$
  counterclockwise: $(x; y) \mapsto (-y; x)$.

## Worked Example

Rotate $A(3; 1)$ about the origin by $90^\circ$ counterclockwise; by
$180^\circ$; by $90^\circ$ clockwise. Then: construct the image of a
triangle $ABC$ under rotation about $A$ by $60^\circ$. Then: two
equilateral triangles $ABD$ and $BCE$ are built outward on sides $AB$
and $BC$ of a triangle $ABC$; prove $AE = DC$.

- **$90^\circ$ ccw:** $(-1; 3)$. Check: $|OA| = \sqrt{10} = |OA'|$, and the
  scalar product $3 \cdot (-1) + 1 \cdot 3 = 0$ - perpendicular. **$180^\circ$:**
  $(-3; -1)$. **$90^\circ$ cw:** $(1; -3)$.
- **Triangle about $A$ by $60^\circ$.** $A$ stays. Swing $B$ to $B'$ with $AB'
  = AB$, $\angle BAB' = 60^\circ$; likewise $C$ to $C'$. Triangle $AB'C'$ is
  congruent to $ABC$, and $ABB'$ is equilateral.
- **$AE = DC$.** Rotate about $B$ by $60^\circ$ (in the direction taking $D$
  to $A$): $D \to A$ since $BD = BA$ and $\angle DBA = 60^\circ$; and $C \to E$
  since $BC = BE$ and $\angle CBE = 60^\circ$. So segment $DC$ maps to
  segment $AE$, and a motion preserves length: $AE = DC$. $\square$

The last proof is three lines with a rotation, and a page with
congruent triangles.

## Common Mistake

Rotating in the wrong direction. "Rotate by $90^\circ$" means
counterclockwise unless told otherwise; $(3; 1)$ goes to $(-1; 3)$, not
$(1; -3)$. Check with the picture: counterclockwise from the positive
$x$-axis goes up through the first quadrant. The other slip is
rotating about the wrong point - a rotation about $A$ leaves $A$
fixed, and if $A$ moved you've rotated about something else.

## The Takeaway

Rotation: swing every point about $O$ through the same angle,
keeping its distance from $O$. A motion; $180^\circ$ is central
symmetry; $90^\circ$ about the origin is $(x; y) \to (-y; x)$. Figures
with rotational symmetry include every regular polygon. To prove two
segments equal, look for a rotation that carries one to the other.

## Check Yourself

1. Rotate $(0; 4)$ about the origin by $90^\circ$ counterclockwise; by
   $180^\circ$.
2. Rotate $(2; -3)$ about the origin by $90^\circ$ clockwise.
3. What is the smallest positive rotation that maps a square onto
   itself? A regular hexagon?
4. Which figures are mapped onto themselves by *every* rotation about
   some point?
5. A rotation about $O$ by $60^\circ$ maps $A$ to $A'$. What kind of
   triangle is $OAA'$?
6. Someone rotates $(1; 0)$ by $90^\circ$ counterclockwise and gets $(0;
   -1)$. Correct it.

> [!spoiler] Answers
>
> 1. $(-4; 0)$; $(0; -4)$.
> 2. $(-3; -2)$.
> 3. $90^\circ$; $60^\circ$.
> 4. A circle (and a disc) about its centre; a point.
> 5. Equilateral - $OA = OA'$ with a $60^\circ$ angle between.
> 6. $(0; 1)$ - counterclockwise goes up.
