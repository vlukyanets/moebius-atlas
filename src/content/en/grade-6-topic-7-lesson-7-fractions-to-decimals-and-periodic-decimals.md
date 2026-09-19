---
title: "[S] Converting Fractions to Decimals. Repeating Decimals"
tag: MTD
track: school
grade: 6
subject: algebra
requires: [grade-6-topic-3-lesson-3-basic-property-of-a-fraction, grade-5-topic-34-lesson-34-fraction-as-a-quotient, grade-5-topic-46-lesson-46-dividing-a-decimal-by-a-natural-number]
---

## Why It Matters

A calculator never shows $\frac{3}{4}$; it shows $0.75$. Type $\frac{1}{3}$
and it shows $0.3333333$ - and the threes would go on forever if the
screen were wider. Fractions and decimals are two languages for the
same numbers, and translating between them is something you'll do
constantly: a decimal is what a calculator and a price tag speak, a
fraction is what exact arithmetic speaks.

## The Big Idea

A fraction bar is a division sign - $\frac{3}{4}$ is $3 : 4$. Do the
division the grade-5 way, adding zeros after the point, and it comes out
as $0.75$: the division ends. Try $\frac{1}{3}$: $1 : 3$ gives $0.3$,
remainder $1$; bring down a zero, $0.33$, remainder $1$ again; and again,
and again. The remainder keeps repeating, so the digits keep repeating,
and the division never ends.

Which fractions end and which don't? Look at the denominator. If it can
be turned into $10$, $100$, $1000$, ... - that is, if its only prime
factors are $2$ and $5$ - the decimal ends. Any other prime in the
denominator, and the digits go round forever.

## The Rule

To convert a fraction to a decimal, **divide the numerator by the
denominator**. Or, when the denominator has only the prime factors $2$
and $5$, bring the fraction to a denominator of $10$, $100$, $1000$ and
read the decimal off:

$$
\frac{3}{4} = \frac{75}{100} = 0.75, \qquad \frac{7}{20} = \frac{35}{100} = 0.35
$$

An irreducible fraction converts to a **terminating decimal** exactly
when its denominator has no prime factors other than $2$ and $5$.
Otherwise it converts to an **infinite repeating decimal**: from some
point on, a group of digits - the **period** - repeats without end. The
period is written once in brackets:

$$
\frac{1}{3} = 0.333\ldots = 0.(3), \qquad \frac{5}{12} = 0.41666\ldots = 0.41(6)
$$

## Worked Example

Convert $\frac{5}{12}$ to a decimal.

- **Check the denominator:** $12 = 2^2 \cdot 3$. The $3$ means the decimal
  won't terminate.
- **Divide:** $5 : 12$. $5$ goes $0$, point; $50 : 12 = 4$ rem. $2$;
  $20 : 12 = 1$ rem. $8$; $80 : 12 = 6$ rem. $8$; $80 : 12 = 6$ rem. $8$
  ... the remainder $8$ has come back, so the digit $6$ repeats forever.
- **Write it:** $0.41666\ldots = 0.41(6)$.

Now a terminating one: $\frac{9}{40}$. $40 = 2^3 \cdot 5$ - only twos and
fives. Multiply top and bottom by $25$: $\frac{225}{1000} = 0.225$.

## Common Mistake

Deciding a fraction terminates because its denominator "looks round."
$\frac{1}{6}$, $\frac{1}{12}$, $\frac{1}{30}$ - the denominators are
even, but each hides a factor of $3$, and each gives a repeating
decimal. Factor the denominator of the *irreducible* fraction: anything
other than $2$s and $5$s means repeating. (And cancel first - $\frac{3}{6}$
is $\frac{1}{2}$, which does terminate.)

## The Takeaway

A fraction becomes a decimal by dividing top by bottom. Denominators
built only from $2$ and $5$ give decimals that end; any other prime in
the denominator makes the digits repeat forever, and the repeating
block goes in brackets.

## Check Yourself

1. Convert $\frac{7}{8}$ to a decimal.
2. Convert $\frac{2}{9}$ to a decimal.
3. Which of $\frac{3}{16}$, $\frac{4}{15}$, $\frac{9}{25}$, $\frac{5}{14}$
   terminate? Decide without dividing.
4. Write $0.272727\ldots$ with a period in brackets.
5. Convert $\frac{7}{11}$ to a decimal.
6. Someone says $\frac{7}{30}$ terminates "because $30$ ends in zero."
   Check.

> [!spoiler] Answers
>
> 1. $0.875$.
> 2. $0.(2)$.
> 3. $\frac{3}{16}$ ($16 = 2^4$) and $\frac{9}{25}$ ($25 = 5^2$); the
>    others have a $3$ or a $7$ in the denominator.
> 4. $0.(27)$.
> 5. $0.(63)$.
> 6. $30 = 2 \cdot 3 \cdot 5$ - the $3$ makes it repeat: $0.2(3)$.
