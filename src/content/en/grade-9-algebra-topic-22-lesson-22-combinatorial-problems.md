---
title: "[S] Combinatorial Problems"
tag: MTD
track: school
grade: 9
subject: algebra
requires: [grade-5-topic-7-lesson-7-properties-of-multiplication]
---

## Why It Matters

How many four-digit PINs are there? How many ways can eight runners
finish? How many different pizzas from five toppings? These are
counting questions, and the answers are too big to list - $10000$
PINs, $40320$ finishes. Combinatorics counts without listing, and it
rests on one rule that says when to multiply. It's also the
foundation of probability: to say how likely something is, you first
count how many ways it can happen.

## The Big Idea

If a choice is made in stages and each stage has a fixed number of
options, the total number of outcomes is the product of the options
at each stage. Three shirts and two pairs of trousers: for each
shirt, two trousers, so $3 \cdot 2 = 6$ outfits. That's the
**multiplication rule**, and everything else is it in disguise. If
the options at a stage shrink because earlier choices used them up -
arranging people in a line, say - the factors go $n, n - 1, n - 2, \dots$,
and the product is a *factorial*. If instead the choices are
alternatives, "this *or* that", the counts add.

## The Rule

**Addition rule.** If object $A$ can be chosen in $m$ ways and object
$B$ in $n$ ways, and the choices don't overlap, then "$A$ or $B$" can be
chosen in $m + n$ ways.

**Multiplication rule.** If $A$ can be chosen in $m$ ways and, after
that, $B$ in $n$ ways, then the pair $(A, B)$ can be chosen in $m \cdot n$
ways. It extends to any number of stages.

**Permutations.** The number of ways to arrange $n$ different objects
in a row is

$$
P_n = n! = 1 \cdot 2 \cdot 3 \cdot \dots \cdot n
$$

(read "$n$ factorial"). $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$.

Tools for harder cases: a **tree diagram** (branch at each stage), or
counting the complement ("all minus the bad ones").

## Worked Example

How many three-digit numbers have all digits different? How many ways
can $5$ books be placed on a shelf? How many ways can a president and
a secretary be chosen from $8$ people? A café offers $4$ soups and $6$
mains: how many two-course lunches, and how many one-course ones?

- **Three-digit, distinct digits.** Hundreds: $9$ options (not $0$).
  Tens: $9$ (any digit except the one used). Ones: $8$. Total $9 \cdot 9
  \cdot 8 = 648$.
- **Books:** $5! = 120$.
- **President and secretary.** $8$ choices for president, then $7$ for
  secretary: $56$. (Order matters - president $A$, secretary $B$ differs
  from the reverse.)
- **Lunches.** Two-course: $4 \cdot 6 = 24$ (and). One-course: $4 + 6 =
  10$ (or).

The hundreds-digit restriction shows the method: handle the most
constrained stage first.

## Common Mistake

Adding when you should multiply - "$4$ soups and $6$ mains, so $10$
lunches". Ten is the number of *single* dishes; a lunch of two
courses pairs each soup with each main, $24$. "And" multiplies, "or"
adds. The other slip is forgetting that options shrink: seating $5$
people as $5 \cdot 5 \cdot 5 \cdot 5 \cdot 5$ lets the same person sit in
every chair; it's $5 \cdot 4 \cdot 3 \cdot 2 \cdot 1$.

## The Takeaway

Stages that combine multiply; alternatives add. Arranging $n$ things
in order is $n!$. Count the most restricted stage first, and remember
that used-up options aren't available again.

## Check Yourself

1. How many outfits from $5$ shirts, $3$ trousers and $2$ jackets?
2. How many two-digit numbers have both digits odd?
3. How many ways can $6$ people stand in a queue?
4. How many ways can a gold, silver and bronze medal be awarded among
   $10$ athletes?
5. How many three-letter "words" from the letters A, B, C, D with no
   letter repeated? With repeats allowed?
6. Someone counts the ways to seat $4$ people in $4$ chairs as $4 + 3 + 2 +
   1 = 10$. Correct it.

> [!spoiler] Answers
>
> 1. $30$.
> 2. $5 \cdot 5 = 25$.
> 3. $720$.
> 4. $10 \cdot 9 \cdot 8 = 720$.
> 5. $24$; $64$.
> 6. $4 \cdot 3 \cdot 2 \cdot 1 = 24$ - stages multiply.
