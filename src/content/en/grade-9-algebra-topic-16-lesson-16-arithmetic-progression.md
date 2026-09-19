---
title: "[S] Arithmetic Progression"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-15-lesson-15-number-sequences]
---

## Why It Matters

A taxi meter, a stack of pipes where each row has one fewer, the
seats in the rows of a theatre, a savings plan of the same amount
every month - all grow by the same step each time. That's an
arithmetic progression, the simplest sequence there is, and it has
a formula that lets you name any member without counting up to it.
It's also the first sequence with a *property* worth a theorem: every
member is the average of its neighbours.

## The Big Idea

Start somewhere and keep adding the same number $d$. After one step
you've added $d$ once, after two steps twice - after reaching member
$n$ you've added it $n - 1$ times. So $a_n = a_1 + (n - 1)d$: any member is
the first plus the step times the number of steps. The step $d$ can
be negative (a decreasing progression) or zero (a constant one).
Since each member is halfway between the one before and the one
after, it's their arithmetic mean - hence the name.

## The Rule

An **arithmetic progression** is a sequence in which each member,
from the second on, equals the previous member plus the same number
$d$, the **common difference**:

$$
a_{n + 1} = a_n + d
$$

**Formula of the $n$-th member:**

$$
a_n = a_1 + (n - 1)d
$$

**Characteristic property:** a sequence is an arithmetic progression
exactly when every member from the second is the arithmetic mean of
its neighbours: $a_n = \frac{a_{n - 1} + a_{n + 1}}{2}$.

The difference is found from any two consecutive members, $d = a_{n +
1} - a_n$, or from any two members: $d = \frac{a_m - a_k}{m - k}$.

## Worked Example

For the progression $7, 11, 15, \dots$ find $d$, $a_{20}$, and whether $203$
is a member. Then: in a progression $a_3 = 10$ and $a_7 = 22$; find $a_1$
and $d$. Then: insert three numbers between $4$ and $16$ so that all
five form an arithmetic progression.

- **$d = 11 - 7 = 4$.** $a_{20} = 7 + 19 \cdot 4 = 83$.
- **Is $203$ a member?** $7 + (n - 1) \cdot 4 = 203$, $(n - 1) \cdot 4 = 196$,
  $n = 50$. Yes, $a_{50} = 203$.
- **From $a_3$ and $a_7$.** $a_7 - a_3 = 4d = 12$, so $d = 3$; $a_1 = a_3 - 2d
  = 4$.
- **Inserting.** Five members, $a_1 = 4$, $a_5 = 16$: $4 + 4d = 16$, $d = 3$.
  The progression is $4, 7, 10, 13, 16$.

A decreasing one: $a_1 = 100$, $d = -7$: $a_{10} = 100 - 63 = 37$.

## Common Mistake

Writing $a_n = a_1 + nd$ - one $d$ too many. Member $n$ is reached
after $n - 1$ steps, not $n$: check with $n = 1$, which must give $a_1$
and does only with $(n - 1)d$. Another slip: from $a_3 = 10$, $a_7 = 22$
taking $d = \frac{22 - 10}{7 - 3 + 1}$ or $\frac{22 - 10}{3}$; there are $7 -
3 = 4$ steps between them.

## The Takeaway

Same step every time: $a_{n + 1} = a_n + d$, so $a_n = a_1 + (n - 1)d$. Two
members fix $d$ by dividing the change by the number of steps. Each
member is the mean of its neighbours. Membership: solve for a natural
$n$.

## Check Yourself

1. Find $d$ and $a_{15}$ for $3, 8, 13, \dots$
2. Find $a_1$ if $a_{10} = 50$ and $d = 5$.
3. In a progression $a_2 = 9$ and $a_5 = 18$. Find $a_1$ and $a_{11}$.
4. Is $100$ a member of $1, 4, 7, \dots$?
5. The numbers $x$, $7$, $x + 6$ form an arithmetic progression. Find $x$.
6. Someone computes $a_{10}$ of $2, 5, 8, \dots$ as $2 + 10 \cdot 3 = 32$.
   Correct it.

> [!spoiler] Answers
>
> 1. $d = 5$, $a_{15} = 73$.
> 2. $a_1 = 50 - 45 = 5$.
> 3. $3d = 9$, $d = 3$, $a_1 = 6$, $a_{11} = 36$.
> 4. $1 + 3(n - 1) = 100$, $n = 34$: yes.
> 5. $7 = \frac{x + x + 6}{2}$, $x = 4$.
> 6. $a_{10} = 2 + 9 \cdot 3 = 29$.
