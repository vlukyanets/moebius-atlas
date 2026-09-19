---
title: "[S] Solving Systems by Addition"
tag: MTD
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-27-lesson-27-system-of-two-linear-equations]
---

## Why It Matters

$\begin{cases} 3x + 2y = 12 \\ 5x - 2y = 4 \end{cases}$: substitution
works, but expressing $y$ from either equation brings fractions.
Look instead at the $y$ terms - $+2y$ and $-2y$. Add the two equations
and the $y$'s vanish on the spot: $8x = 16$. That's the addition
method, and for systems with matching or easily matched coefficients
it is faster and cleaner than substitution. Most systems in practice
are solved this way.

## The Big Idea

If two equalities are true, their sum is true: add the left sides,
add the right sides. Choose what to add so that one variable cancels.
When the coefficients of $y$ are already opposites, just add. When
they aren't, first multiply one or both equations by numbers that
make them opposites - multiply the whole equation, both sides, so it
stays true - and then add. One variable disappears, the other is found,
and the first is recovered by substituting into any original
equation.

## The Rule

**Addition method:**

1. If necessary, **multiply one or both equations** by suitable
   numbers so that the coefficients of one variable become opposite
   numbers.
2. **Add the equations** term by term - that variable cancels, leaving
   a linear equation in the other.
3. **Solve** it.
4. **Substitute** the value into either original equation to find the
   remaining variable.
5. **Write the pair** and check.

If the coefficients are equal rather than opposite, subtract the
equations instead - or multiply one by $-1$ and add.

As before, $0 = $ non-zero at step 2 means no solutions; $0 = 0$ means
infinitely many.

## Worked Example

Solve $\begin{cases} 3x + 2y = 12 \\ 5x - 2y = 4 \end{cases}$ and
$\begin{cases} 2x + 3y = 8 \\ 3x - 4y = -5 \end{cases}$.

- **First.** The $y$ coefficients are $2$ and $-2$: add. $8x = 16$, $x =
  2$. Substitute into the first: $6 + 2y = 12$, $y = 3$. Solution
  $(2; 3)$. Check the second: $10 - 6 = 4$.
- **Second.** No opposites yet. Aim to cancel $y$: the LCM of $3$ and $4$
  is $12$. Multiply the first equation by $4$ and the second by $3$:
  $8x + 12y = 32$ and $9x - 12y = -15$. Add: $17x = 17$, $x = 1$. Substitute
  into $2x + 3y = 8$: $2 + 3y = 8$, $y = 2$. Solution $(1; 2)$. Check the
  second: $3 - 8 = -5$.

Cancelling $x$ instead would also work: multiply by $3$ and $-2$, giving
$6x + 9y = 24$ and $-6x + 8y = 10$; add: $17y = 34$, $y = 2$. Same
answer.

## Common Mistake

Multiplying only the left side of an equation. Turning $2x + 3y = 8$
into $8x + 12y = 8$ breaks the equality - the right side must be
multiplied by $4$ too, giving $32$. An equation is a balance; whatever
scales one pan scales the other. The other trap: adding when the
coefficients are equal rather than opposite - $3y$ and $3y$ add to $6y$,
they don't cancel. Subtract, or flip a sign first.

## The Takeaway

Make the coefficients of one variable opposites - multiplying whole
equations as needed - then add the equations to eliminate it. Solve
for the survivor, substitute back for the other, check the pair.
Choose whichever variable is cheaper to eliminate.

## Check Yourself

1. Solve $\begin{cases} x + y = 9 \\ x - y = 3 \end{cases}$.
2. Solve $\begin{cases} 4x + 3y = 1 \\ 2x - 3y = 5 \end{cases}$.
3. Solve $\begin{cases} 2x + 5y = 1 \\ 2x - y = 7 \end{cases}$.
4. Solve $\begin{cases} 3x - 2y = 7 \\ 2x + 5y = -8 \end{cases}$.
5. Solve $\begin{cases} 4x - 6y = 2 \\ 6x - 9y = 1 \end{cases}$.
6. Someone multiplies $2x + 3y = 8$ by $4$ and writes $8x + 12y = 8$.
   What's wrong?

> [!spoiler] Answers
>
> 1. Add: $2x = 12$, $x = 6$, $y = 3$: $(6; 3)$.
> 2. Add: $6x = 6$, $x = 1$, $y = -1$: $(1; -1)$.
> 3. Subtract: $6y = -6$, $y = -1$, $x = 3$: $(3; -1)$.
> 4. Multiply by $5$ and $2$: $15x - 10y = 35$, $4x + 10y = -16$; $19x = 19$,
>    $x = 1$, $y = -2$: $(1; -2)$.
> 5. Multiply by $3$ and $-2$: $12x - 18y = 6$, $-12x + 18y = -2$; $0 = 4$:
>    no solutions.
> 6. The right side wasn't multiplied; it should be $8x + 12y = 32$.
