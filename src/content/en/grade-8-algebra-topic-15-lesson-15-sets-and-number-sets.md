---
title: "[S] Set. Number Sets"
tag: DEF
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-14-lesson-14-arithmetic-square-root]
---

## Why It Matters

$\sqrt{2}$ is a number, but it isn't a fraction - and it can be proved
that no fraction squares to $2$. So the rational numbers, which seemed
to fill the number line, have gaps, and $\sqrt{2}$ sits in one. Filling
every gap gives the real numbers, the last extension of the number
system you'll need for a long time. To talk about all this cleanly,
mathematics uses the language of sets - collections of things - and
this topic introduces it.

## The Big Idea

A set is a collection: the set of vowels, the set of even numbers, the
set of solutions of an equation. What matters is only which things
are in it. Sets can be listed - $\{2, 4, 6\}$ - or described by a rule,
and one set can sit inside another as a subset.

The number sets nest like Russian dolls. Natural numbers sit inside
integers, which sit inside rationals - every number you knew before
this year. Then come the irrationals: numbers like $\sqrt{2}$ and $\pi$
whose decimal expansions go on forever *without* repeating. Rationals
and irrationals together are the real numbers, and they fill the
number line completely: every point has a real coordinate, and every
real number has a point.

## The Rule

A **set** is a collection of objects, its **elements**; $a \in A$ means
$a$ is an element of $A$. A set is given by listing, $\{1, 2, 3\}$, or by
a property. The **empty set** $\varnothing$ has no elements. $B$ is a
**subset** of $A$, $B \subset A$, if every element of $B$ is in $A$.

The **number sets:**

- $\mathbb{N}$ - **natural** numbers $1, 2, 3, \ldots$;
- $\mathbb{Z}$ - **integers** $\ldots, -2, -1, 0, 1, 2, \ldots$;
- $\mathbb{Q}$ - **rational** numbers, all $\frac{m}{n}$ with $m \in
  \mathbb{Z}$, $n \in \mathbb{N}$; equivalently, all terminating or
  repeating decimals;
- **irrational** numbers - infinite non-repeating decimals, like
  $\sqrt{2}$, $\sqrt{3}$, $\pi$;
- $\mathbb{R}$ - **real** numbers, rationals and irrationals together.

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}
$$

Every real number corresponds to exactly one point of the number
line, and every point to one real number. Arithmetic and comparison
work on $\mathbb{R}$ as on $\mathbb{Q}$.

## Worked Example

Classify $-7$, $\frac{3}{4}$, $0.\overline{3}$, $\sqrt{16}$, $\sqrt{15}$,
$0.101001000\ldots$ (one more $0$ each time). Then: is $\{2, 4\}$ a subset
of $\{1, 2, 3, 4\}$?

- **$-7$:** integer, hence rational and real; not natural.
- **$\frac{3}{4}$:** rational, real.
- **$0.\overline{3} = \frac{1}{3}$:** repeating, so rational.
- **$\sqrt{16} = 4$:** natural - a perfect square's root.
- **$\sqrt{15}$:** not a perfect square, so irrational; real.
- **$0.101001000\ldots$:** infinite and non-repeating by construction -
  irrational.
- **Subset:** yes, both $2$ and $4$ belong to the larger set.

Why $\sqrt{2}$ is irrational (sketch): if $\sqrt{2} = \frac{m}{n}$ in lowest
terms, then $m^2 = 2n^2$, so $m$ is even, $m = 2k$, so $2k^2 = n^2$, so $n$
is even too - contradicting lowest terms.

## Common Mistake

Calling every root irrational, or every decimal rational. $\sqrt{16}$
is $4$, as rational as they come; $\sqrt{15}$ is irrational. And a
decimal is rational exactly when it terminates or repeats -
$0.\overline{3}$ is rational, $0.101001000\ldots$ is not, even though both
go on forever. Check the radicand for a perfect square, and the
decimal for a repeating block.

## The Takeaway

Naturals inside integers inside rationals inside reals; irrationals
are the non-repeating infinite decimals that fill the gaps; the reals
are the whole number line. A set is a collection of elements, and the
number sets are the ones you'll name most.

## Check Yourself

1. To which of $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ does
   $-\frac{5}{2}$ belong?
2. Is $\sqrt{49}$ rational or irrational? $\sqrt{48}$?
3. Is $0.\overline{27}$ rational? Is $0.2020020002\ldots$?
4. Is $\{0\}$ a subset of $\mathbb{N}$? Of $\mathbb{Z}$?
5. Name a number that is real but not rational.
6. Someone says "$\sqrt{25}$ is irrational because it has a root sign."
   Correct them.

> [!spoiler] Answers
>
> 1. $\mathbb{Q}$ and $\mathbb{R}$.
> 2. Rational ($7$); irrational.
> 3. Yes (repeating); no (never repeats).
> 4. No ($0 \notin \mathbb{N}$); yes.
> 5. $\sqrt{2}$, $\pi$, $\sqrt{15}$, ...
> 6. $\sqrt{25} = 5$, a natural number; a root is irrational only when the
>    radicand isn't a perfect square.
