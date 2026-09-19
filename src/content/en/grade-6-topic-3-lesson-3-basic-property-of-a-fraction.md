---
title: "[S] Basic Property of a Fraction. Cancelling. Changing the Denominator"
tag: THM
track: school
grade: 6
subject: algebra
requires: [grade-5-topic-33-lesson-33-common-fractions, grade-5-topic-31-lesson-31-greatest-common-divisor]
---

## Why It Matters

Half a pizza is $\frac{1}{2}$. Cut every slice in two and it's $\frac{2}{4}$.
Cut them again: $\frac{4}{8}$. Same amount of pizza, three different
fractions. One number can wear many fraction outfits, and being able to
change the outfit at will - to a simpler one, or to one that matches
another fraction's denominator - is the skill that everything with
fractions in grade 6 depends on.

## The Big Idea

Cutting every slice of a pizza into $3$ smaller slices triples the number
of slices you have *and* triples the number of slices in the whole. Both
numbers of the fraction get multiplied by $3$, and the amount of pizza
doesn't move. Run it backwards - glue every $3$ small slices into one
big one - and both numbers get divided by $3$. That's the basic property:
multiply or divide top and bottom by the same number, and the fraction
keeps its value.

Dividing top and bottom is called cancelling, and it's how a fraction is
made as simple as it can be. Multiplying is how it's given a new,
bigger denominator when you need one to match.

## The Rule

**Basic property of a fraction:** multiplying or dividing both the
numerator and the denominator by the same natural number gives an
equal fraction:

$$
\frac{a}{b} = \frac{a \cdot k}{b \cdot k}, \qquad \frac{a}{b} = \frac{a : k}{b : k}
$$

**Cancelling** a fraction is dividing its numerator and denominator by a
common divisor. Dividing by their greatest common divisor gives an
**irreducible** fraction - one whose top and bottom are coprime and
can't be cancelled further.

**Changing to a new denominator:** to write $\frac{a}{b}$ with a
denominator $b \cdot k$, multiply the numerator by the same $k$ - the
**additional factor**.

## Worked Example

Cancel $\frac{36}{48}$ to an irreducible fraction.

- **Find the GCD** of $36$ and $48$: $36 = 2^2 \cdot 3^2$, $48 = 2^4 \cdot
  3$, so $\gcd = 2^2 \cdot 3 = 12$.
- **Divide top and bottom by it:** $\frac{36 : 12}{48 : 12} = \frac{3}{4}$.
- **Check:** $3$ and $4$ are coprime - nothing left to cancel.

You could also cancel in stages - by $2$, then $2$, then $3$ - and arrive
at the same $\frac{3}{4}$.

Now the other way. Write $\frac{5}{6}$ with denominator $24$. The
additional factor is $24 : 6 = 4$, so $\frac{5}{6} = \frac{5 \cdot 4}{6
\cdot 4} = \frac{20}{24}$.

## Common Mistake

Cancelling by subtraction, or cancelling only one of the two numbers.
$\frac{36}{48}$ is not $\frac{36 - 12}{48 - 12} = \frac{24}{36}$ - that's a
different value. And $\frac{20}{24}$ can't become $\frac{5}{24}$ by
dividing only the top. Whatever is done to the numerator is done to the
denominator, and it's always multiplication or division, never adding
or subtracting.

## The Takeaway

Multiply or divide top and bottom by the same number, and the fraction
doesn't change its value. Divide to cancel - by the GCD to cancel
completely; multiply to bring a fraction to the denominator you need.

## Check Yourself

1. Cancel $\frac{18}{24}$.
2. Cancel $\frac{75}{100}$ to an irreducible fraction.
3. Write $\frac{3}{7}$ with denominator $35$.
4. Write $\frac{4}{9}$ with denominator $54$.
5. Are $\frac{14}{21}$ and $\frac{2}{3}$ equal? Show why.
6. Someone cancels $\frac{15}{25}$ to $\frac{1}{5}$ "by taking $5$ off
   the top and dividing the bottom by $5$." What's the correct result?

> [!spoiler] Answers
>
> 1. $\frac{3}{4}$.
> 2. $\frac{3}{4}$ - GCD $25$.
> 3. $\frac{15}{35}$.
> 4. $\frac{24}{54}$.
> 5. Yes - $\frac{14}{21}$ cancels by $7$ to $\frac{2}{3}$.
> 6. $\frac{3}{5}$ - both must be divided by $5$.
