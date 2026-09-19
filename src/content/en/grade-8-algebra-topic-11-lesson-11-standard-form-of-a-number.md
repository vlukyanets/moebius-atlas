---
title: "[S] Standard Form of a Number"
tag: DEF
track: school
grade: 8
subject: algebra
requires: [grade-8-algebra-topic-10-lesson-10-properties-of-powers-with-integer-exponents]
---

## Why It Matters

The Sun's mass is $1\,989\,000\,000\,000\,000\,000\,000\,000\,000$ kg. A
hydrogen atom's is $0.00000000000000000000000000167$ kg. Nobody can read
those, let alone multiply them. Science writes them as $1.989 \cdot
10^{30}$ and $1.67 \cdot 10^{-27}$ - a small number times a power of ten -
and then the power rules do the arithmetic. Standard form is how the
very large and very small become manageable.

## The Big Idea

Any positive number can be written as "something between $1$ and $10$,
times a power of ten." The something carries the digits; the exponent
carries the size. $1.989 \cdot 10^{30}$ says: the digits are $1989$, and
the decimal point really sits $30$ places to the right of where it's
written. Moving the point right is multiplying by $10$, so the exponent
counts how many places it moved - positive for big numbers, negative
for small ones.

Two numbers in standard form are compared by their exponents first,
and multiplied or divided by handling the digit parts and the powers
of ten separately.

## The Rule

The **standard form** of a positive number is

$$
a \cdot 10^n, \qquad 1 \leq a < 10, \quad n \text{ an integer}
$$

The number $n$ is the **order** (of magnitude) of the number. To write
a number in standard form, move the decimal point until exactly one
non-zero digit is before it; the exponent is the number of places
moved - positive if the point moved left (a large number), negative if
it moved right (a small one).

Operations: multiply or divide the $a$'s, add or subtract the $n$'s,
then adjust so the new $a$ is again in $[1, 10)$.

## Worked Example

Write $4\,560\,000$ and $0.000072$ in standard form; then compute
$(3 \cdot 10^{5}) \cdot (2.5 \cdot 10^{-2})$ and $\frac{8.4 \cdot 10^{3}}{2.1
\cdot 10^{7}}$.

- **$4\,560\,000$.** Point moves $6$ places left to give $4.56$: $4.56 \cdot
  10^{6}$. Order $6$.
- **$0.000072$.** Point moves $5$ places right to give $7.2$: $7.2 \cdot
  10^{-5}$. Order $-5$.
- **Product:** $3 \cdot 2.5 = 7.5$ and $10^{5 - 2} = 10^{3}$: $7.5 \cdot 10^{3}$.
- **Quotient:** $8.4 : 2.1 = 4$ and $10^{3 - 7} = 10^{-4}$: $4 \cdot 10^{-4}$.

Adjusting: $(6 \cdot 10^{4}) \cdot (5 \cdot 10^{2}) = 30 \cdot 10^{6}$ - but
$30$ isn't in $[1, 10)$; rewrite as $3 \cdot 10^{7}$.

## Common Mistake

Leaving $a$ outside $[1, 10)$: $30 \cdot 10^{6}$ and $0.3 \cdot 10^{8}$ are
correct values but not standard form - both are $3 \cdot 10^{7}$. And
counting the exponent from the wrong end: $0.000072$ has the point
moving *right* $5$ places, so the exponent is $-5$; the number of zeros
after the point is $4$, which is a different count. Move the point,
count the moves, sign by direction.

## The Takeaway

Standard form is $a \cdot 10^n$ with $1 \leq a < 10$: the digits in $a$,
the size in $n$. Multiply and divide by combining the $a$'s and adding
or subtracting the exponents, then renormalise $a$ if it leaves $[1,
10)$.

## Check Yourself

1. Write $93\,000\,000$ and $0.00051$ in standard form.
2. Write $2.03 \cdot 10^{4}$ and $6.1 \cdot 10^{-3}$ as ordinary decimals.
3. Compute $(4 \cdot 10^{3}) \cdot (2 \cdot 10^{-5})$.
4. Compute $\frac{9 \cdot 10^{8}}{3 \cdot 10^{-2}}$.
5. Which is bigger, $7.9 \cdot 10^{5}$ or $1.2 \cdot 10^{6}$?
6. Someone writes $45\,000$ as $45 \cdot 10^{3}$. Why isn't that standard
   form, and what is?

> [!spoiler] Answers
>
> 1. $9.3 \cdot 10^{7}$; $5.1 \cdot 10^{-4}$.
> 2. $20\,300$; $0.0061$.
> 3. $8 \cdot 10^{-2}$.
> 4. $3 \cdot 10^{10}$.
> 5. $1.2 \cdot 10^{6}$ - the bigger exponent.
> 6. $45 \geq 10$; standard form is $4.5 \cdot 10^{4}$.
