---
title: "[S] Number Sequences"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-7-algebra-topic-22-lesson-22-function-domain-and-range]
---

## Why It Matters

Monthly payments, the heights of a bouncing ball, the number of
cells after each division, the digits of $\pi$ - a sequence is a list
of numbers in order, and half of applied mathematics is about
predicting the next one. This chapter studies the two simplest
kinds, arithmetic and geometric, and here comes the language: what a
sequence is, how to name its members, and the two ways to define one
- by a formula for the $n$-th member, or by a rule for getting each
from the one before.

## The Big Idea

A sequence is a function whose inputs are $1, 2, 3, \dots$ - the
*position* - and whose outputs are the members. Instead of $f(1),
f(2)$ you write $a_1, a_2$, and $a_n$ is the member in position $n$. Two
ways to say what it is. A formula for $a_n$ in terms of $n$ lets you
jump straight to any member: $a_n = n^2$ gives $a_{10} = 100$ at once. A
*recursive* rule says how each member is made from the previous
ones: "start at $3$, add $5$ each time" - to reach $a_{10}$ you walk
through $a_2, \dots, a_9$, but the rule is often what the situation
actually says.

## The Rule

A **number sequence** is a function defined on the set of natural
numbers (or its first $n$ members). Its values $a_1, a_2, a_3, \dots$ are
the **members** (terms); $a_n$ is the **$n$-th member** or **general
term**; $n$ is its index. The sequence is written $(a_n)$.

A sequence is **finite** if it has finitely many members, otherwise
**infinite**.

Ways to define a sequence:

- by the **formula of the $n$-th member**, $a_n = f(n)$, e.g. $a_n = 2n -
  1$;
- **recursively**: the first member(s) and a rule expressing $a_{n +
  1}$ through earlier members, e.g. $a_1 = 3$, $a_{n + 1} = a_n + 5$;
- by listing, or by description ("the primes in increasing order").

## Worked Example

Write the first five members of $a_n = \frac{n}{n + 1}$; of $b_1 = 2$,
$b_{n + 1} = 3b_n - 1$. Then find a formula for the sequence $5, 8, 11, 14,
\dots$ and check whether $302$ is one of its members.

- **$a_n = \frac{n}{n + 1}$:** $\frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5},
  \frac{5}{6}$. Any member at once: $a_{99} = \frac{99}{100}$.
- **Recursive:** $b_1 = 2$, $b_2 = 5$, $b_3 = 14$, $b_4 = 41$, $b_5 = 122$. To
  get $b_5$ you had to compute the four before it.
- **Formula for $5, 8, 11, 14$.** Each is $3$ more than the last, and the
  first is $5 = 3 \cdot 1 + 2$: $a_n = 3n + 2$. Check $a_4 = 14$.
- **Is $302$ a member?** $3n + 2 = 302$, $n = 100$ - a natural number, so
  yes, $302 = a_{100}$. (For $301$: $n = \frac{299}{3}$, not whole - not a
  member.)

The index is always a natural number; $a_0$ or $a_{2.5}$ mean nothing.

## Common Mistake

Confusing the member with its index: "the number $14$ is the $4$th
member" is $a_4 = 14$, and $a_{14}$ is something else ($44$). And
assuming a sequence given by its first few members has only one
continuation: $1, 2, 4, \dots$ could be $2^{n - 1}$ or could be $1, 2, 4,
7, 11$ (differences growing by $1$). A few members *suggest* a rule; a
formula *defines* one.

## The Takeaway

A sequence is a function of the position $n = 1, 2, 3, \dots$; $a_n$ is
the member at $n$. Define it by a formula for $a_n$ - which jumps to any
member - or recursively - which builds each from the last. To test
membership, solve $a_n = $ value for a natural $n$.

## Check Yourself

1. Write the first four members of $a_n = n^2 - 1$.
2. Write the first four members of $c_1 = 1$, $c_{n + 1} = 2c_n + 1$.
3. Find a formula for $a_n$ for the sequence $2, 4, 6, 8, \dots$; for $1,
   4, 9, 16, \dots$.
4. Is $50$ a member of $a_n = 4n + 2$? Is $51$?
5. Find $a_{20}$ for $a_n = \frac{(-1)^n}{n}$.
6. Someone says the sequence $2, 4, 8, \dots$ must continue with $16$.
   Give a different rule that fits the first three members.

> [!spoiler] Answers
>
> 1. $0, 3, 8, 15$.
> 2. $1, 3, 7, 15$.
> 3. $a_n = 2n$; $a_n = n^2$.
> 4. $4n + 2 = 50$, $n = 12$: yes. $4n + 2 = 51$: $n$ not whole, no.
> 5. $\frac{1}{20}$.
> 6. For instance $a_n = n^2 - n + 2$: $2, 4, 8, 14, \dots$
