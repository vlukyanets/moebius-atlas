---
title: "[S] The Identity (√a)² = a. The Equation x² = a"
tag: THM
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-14-lesson-14-arithmetic-square-root]
---

## Why It Matters

If you square a square root you get back what you started with - that
is what a square root is *for*. But square a number and then take the
root, and you don't always get back the number: $\sqrt{(-3)^2} = 3$, not
$-3$. The two orders behave differently, and knowing exactly how is
what solving $x^2 = a$ - the simplest quadratic equation - depends on.

## The Big Idea

$\sqrt{a}$ is defined as the non-negative number whose square is $a$.
So $(\sqrt{a})^2 = a$ is just the definition restated, valid whenever
$\sqrt{a}$ exists, that is for $a \geq 0$.

The other way round, $\sqrt{a^2}$, asks for the non-negative number
whose square is $a^2$. If $a \geq 0$ that's $a$ itself; if $a < 0$ it's
$-a$, the positive one. In one formula: $\sqrt{a^2} = |a|$. The root
strips the sign.

And $x^2 = a$: for $a > 0$ there are two numbers squaring to $a$, the
root and its opposite; for $a = 0$ only $0$; for $a < 0$ none at all,
since squares aren't negative.

## The Rule

**Identity.** For every $a \geq 0$:

$$
(\sqrt{a})^2 = a
$$

**Identity.** For every real $a$:

$$
\sqrt{a^2} = |a|
$$

In particular $\sqrt{a^2} = a$ for $a \geq 0$ and $\sqrt{a^2} = -a$ for
$a < 0$.

**The equation $x^2 = a$:**

- $a > 0$: two roots, $x = \sqrt{a}$ and $x = -\sqrt{a}$ (written $x = \pm
  \sqrt{a}$);
- $a = 0$: one root, $x = 0$;
- $a < 0$: no roots.

## Worked Example

Compute $(\sqrt{7})^2$, $\sqrt{5^2}$, $\sqrt{(-5)^2}$ and $\sqrt{(2 -
\sqrt{5})^2}$; then solve $x^2 = 49$, $x^2 = 5$, $x^2 = 0$ and $x^2 = -4$.

- **$(\sqrt{7})^2 = 7$** - by definition.
- **$\sqrt{5^2} = |5| = 5$**; **$\sqrt{(-5)^2} = |-5| = 5$** - same value,
  the sign stripped.
- **$\sqrt{(2 - \sqrt{5})^2} = |2 - \sqrt{5}|$.** Since
  $\sqrt{5} \approx 2.24 > 2$, the inside is negative, so the absolute value is $\sqrt{5} - 2$.
- **$x^2 = 49$:** $x = \pm 7$. **$x^2 = 5$:** $x = \pm \sqrt{5}$. **$x^2 = 0$:**
  $x = 0$. **$x^2 = -4$:** no roots.

Simplify $\sqrt{x^2}$ for $x \leq 0$: it's $|x| = -x$ - a positive quantity,
though it wears a minus sign.

## Common Mistake

Writing $\sqrt{a^2} = a$ for all $a$. It fails for negative $a$:
$\sqrt{(-3)^2} = \sqrt{9} = 3 \neq -3$. The root of a square is the
absolute value, and dropping the bars costs the sign in half the
cases. Also, when solving $x^2 = 5$, giving only $x = \sqrt{5}$ - the
negative root is a root too; and for $x^2 = -4$, giving $x = \pm 2$ -
those square to $+4$.

## The Takeaway

Root then square gives back $a$ (for $a \geq 0$); square then root
gives $|a|$. The equation $x^2 = a$ has two roots $\pm\sqrt{a}$ when $a$ is
positive, one when $a = 0$, none when $a$ is negative.

## Check Yourself

1. Compute $(\sqrt{13})^2$ and $\sqrt{13^2}$.
2. Compute $\sqrt{(-8)^2}$ and $\sqrt{(-0.5)^2}$.
3. Simplify $\sqrt{(3 - \pi)^2}$.
4. Solve $x^2 = 81$ and $x^2 = 10$.
5. Solve $x^2 = -1$ and $x^2 = 0$.
6. Someone simplifies $\sqrt{a^2}$ to $a$ and then substitutes $a = -2$
   to get $-2$. What's the right value?

> [!spoiler] Answers
>
> 1. $13$ and $13$.
> 2. $8$ and $0.5$.
> 3. $|3 - \pi| = \pi - 3$, since $\pi > 3$.
> 4. $x = \pm 9$; $x = \pm \sqrt{10}$.
> 5. No roots; $x = 0$.
> 6. $|{-2}| = 2$.
