---
title: "[S] Percent Calculations"
tag: MTD
track: school
grade: 6
subject: algebra
requires: [grade-6-topic-21-lesson-21-percent-ratio-and-percent-change, grade-6-topic-2-lesson-2-number-from-its-percent]
---

## Why It Matters

A price goes up $10\%$ and then down $10\%$ - is it back where it
started? (No.) A bank pays $5\%$ a year - what's a $10\,000$ deposit worth
after two years? A shirt is $20\%$ off and then a further $25\%$ off at
the till - what's the total discount? Real percent problems chain
several changes together, and the three basic percent questions you
already know are all you need to untangle them - if you keep track of
what each percent is *of*.

## The Big Idea

There are only three percent questions: a percent of a number, a
number from its percent, and what percent one number is of another.
Every longer problem is these, one after another. The trick is that
each new percent applies to the *current* value, not the original:
after a $10\%$ rise, the price is $110\%$ of the old one, and a $10\%$
drop then takes $10\%$ of *that*, which is more than $10\%$ of the
original. That's why up-ten-down-ten doesn't come back.

The cleanest way to handle a change is as a multiplier. Up $p\%$ means
multiply by $1 + \frac{p}{100}$; down $p\%$ means multiply by
$1 - \frac{p}{100}$. Two changes in a row are two multipliers in a row.

## The Rule

A rise by $p\%$ turns a value $a$ into

$$
a \cdot \left(1 + \frac{p}{100}\right)
$$

and a fall by $p\%$ turns it into

$$
a \cdot \left(1 - \frac{p}{100}\right)
$$

Several changes in a row multiply: up $10\%$ then down $10\%$ is
$\cdot 1.1 \cdot 0.9 = \cdot 0.99$ - a $1\%$ fall overall.

**Interest.** A deposit of $a$ at $p\%$ a year becomes $a \cdot \left(1 +
\frac{p}{100}\right)$ after one year, and the next year's interest is
paid on the new amount.

**Percent of a percent.** $p\%$ of $q\%$ is $\frac{p}{100} \cdot q\%$: half
of $30\%$ is $15\%$.

## Worked Example

A price of $1000$ hryvnias rises by $10\%$ and then falls by $10\%$.
What's the final price?

- **After the rise:** $1000 \cdot 1.1 = 1100$.
- **After the fall:** $10\%$ of $1100$ is $110$, so $1100 \cdot 0.9 = 990$.

The price ends at $990$ - $1\%$ below where it started. The fall was $10\%$
of a bigger number.

The deposit: $10\,000$ at $5\%$ a year. After one year $10\,000 \cdot 1.05
= 10\,500$; after two, $10\,500 \cdot 1.05 = 11\,025$. Not $11\,000$ - the
second year's interest included interest on the first year's interest.

The shirt: $20\%$ off then $25\%$ off is $\cdot 0.8 \cdot 0.75 = \cdot 0.6$.
The customer pays $60\%$, so the total discount is $40\%$ - not
$20 + 25 = 45\%$.

## Common Mistake

Adding percents that apply to different bases. Up $10\%$ and down $10\%$
is not "$0\%$." Two discounts of $20\%$ and $25\%$ are not $45\%$. Two
years at $5\%$ are not $10\%$. Percents only add when they're percents
of the *same* number; a second change is a percent of the *changed*
value. Multiply the multipliers instead.

## The Takeaway

Treat each percent change as a multiplier - $1.1$ for up $10\%$, $0.9$
for down $10\%$ - and multiply them in order. Percents of different
bases don't add, which is why a rise and a fall of the same percent
don't cancel and compound interest grows faster than it looks.

## Check Yourself

1. A price of $800$ rises by $25\%$ and then falls by $20\%$. Final
   price?
2. A deposit of $2000$ at $10\%$ a year - how much after $2$ years?
3. A jacket is $30\%$ off and then a further $10\%$ off. What's the total
   discount?
4. Sales fell $20\%$ one year. By what percent must they rise the next
   year to get back to the start?
5. $40\%$ of a class play football, and $25\%$ of those also play chess.
   What percent of the class play both?
6. Someone says a price up $50\%$ then down $50\%$ is back to normal.
   What's it really, as a percent of the original?

> [!spoiler] Answers
>
> 1. $800 \cdot 1.25 \cdot 0.8 = 800$ - back to the start, since $1.25
>    \cdot 0.8 = 1$.
> 2. $2000 \cdot 1.1 \cdot 1.1 = 2420$.
> 3. $0.7 \cdot 0.9 = 0.63$, so $37\%$ off.
> 4. From $0.8$ back to $1$ is $1 : 0.8 = 1.25$ - a $25\%$ rise.
> 5. $25\%$ of $40\%$ is $10\%$.
> 6. $1.5 \cdot 0.5 = 0.75$ - only $75\%$ of the original.
