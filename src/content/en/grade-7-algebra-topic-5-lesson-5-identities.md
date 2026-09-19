---
title: "[S] Identical Expressions. Identity. Identical Transformation"
tag: DEF
track: school
grade: 7
subject: algebra
requires: [grade-7-algebra-topic-4-lesson-4-expressions-with-variables]
---

## Why It Matters

$3(x + 2) - x$ and $2x + 6$ are two different strings of symbols - and
the same machine. Whatever you feed them, they give the same answer.
That's what lets you simplify: you swap an expression for a shorter
one that's *identically* equal, and nothing is lost. Every rule of
algebra you'll learn - expanding, factoring, the special products - is
a licence to make one such swap.

## The Big Idea

Two expressions are identically equal if they agree for every input.
Not for one lucky value, not for most values - for all of them. $3(x + 2) -
x = 2x + 6$ is true whatever $x$ is; $x + 1 = 2x$ is true only at
$x = 1$. The first is an identity, the second is an equation with one
root.

An identical transformation is a change from an expression to an
identically equal one. The tools are the properties of operations:
commutative, associative, distributive, the rules for brackets and
like terms. Each of those is itself an identity - $a(b + c) = ab + ac$
holds for all $a$, $b$, $c$ - and applying one keeps the expression's
value untouched at every input.

## The Rule

Two expressions are **identically equal** if their values coincide for
all values of the variables (from the common domain).

An **identity** is an equality that is true for all admissible values
of its variables: $a + b = b + a$, $a(b - c) = ab - ac$, $(a + b) + c = a +
(b + c)$, $x \cdot 1 = x$.

An **identical transformation** replaces an expression by an
identically equal one. The basic identical transformations are
expanding brackets, collecting like terms, and taking out a common
factor - all justified by the properties of operations.

**To prove an identity**, transform one side until it matches the
other, or transform both to the same expression, or show their
difference is $0$. **To disprove** one, a single value of the variables
where the two sides differ is enough.

## Worked Example

Simplify $3(x + 2) - x$ and prove that $5(a - b) - 2(a - 3b) = 3a + b$ is
an identity. Then decide whether $(x + 1)^2 = x^2 + 1$ is an identity.

- **Simplify.** Expand: $3x + 6 - x$. Collect: $2x + 6$. So $3(x + 2) - x
  = 2x + 6$ identically.
- **Prove.** Left side: $5a - 5b - 2a + 6b = 3a + b$. It has become the
  right side by identical transformations, so the equality holds for
  all $a$, $b$ - an identity.
- **$(x + 1)^2 = x^2 + 1$?** Try $x = 1$: left $4$, right $2$. They differ,
  so it is *not* an identity - one counterexample settles it.

Check the first by a value: $x = 5$ gives $3 \cdot 7 - 5 = 16$ and $10 + 6 =
16$. Agreement at one point doesn't prove an identity, but it catches
mistakes.

## Common Mistake

"Proving" an identity by checking a few values. $(x + 1)^2 = x^2 + 1$
is true at $x = 0$ - and false everywhere else. Agreement at some
values proves nothing; only a chain of identical transformations does.
The asymmetry matters: one counterexample disproves, but no number of
examples proves.

## The Takeaway

Identically equal expressions agree at every input; an identity is an
equality that always holds; an identical transformation swaps an
expression for an identically equal one using the properties of
operations. Prove by transforming, disprove by one counterexample.

## Check Yourself

1. Is $2(x - 3) = 2x - 6$ an identity? And $2(x - 3) = 2x - 3$?
2. Simplify $4(a + b) - 3(a - b)$ and name the result.
3. Prove that $(m + n) - (m - n) = 2n$.
4. Disprove $x^2 = x$ with a counterexample.
5. Are $\frac{x^2}{x}$ and $x$ identically equal for all $x$? What about
   $x = 0$?
6. Someone checks $(a + b)^2 = a^2 + b^2$ at $a = 0$, $b = 3$, finds it
   true, and declares it an identity. What's wrong?

> [!spoiler] Answers
>
> 1. Yes; no - at $x = 0$ the sides are $-6$ and $-3$.
> 2. $a + 7b$; an identical transformation of the original.
> 3. $m + n - m + n = 2n$.
> 4. $x = 2$: $4 \neq 2$.
> 5. Not for all: at $x = 0$ the first is undefined. On the common domain,
>    $x \neq 0$, they are.
> 6. One agreeing value proves nothing; at $a = b = 1$ the sides are $4$
>    and $2$.
