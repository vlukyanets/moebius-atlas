---
title: "[S] Compound Interest Formula"
tag: MTD
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-18-lesson-18-geometric-progression, grade-6-topic-22-lesson-22-percent-calculations]
---

## Why It Matters

Put \$1000 in a bank at $10\%$ a year. After one year you have
\$1100. After two - not \$1200, but \$1210, because the second year's
interest is paid on the first year's interest too. That's compound
interest, and it's how every savings account, loan, mortgage and
inflation figure actually works. The formula is a geometric
progression in disguise: each year multiplies the balance by the same
factor.

## The Big Idea

Increasing a sum by $p\%$ is multiplying it by $1 + \frac{p}{100}$ - by
$1.1$ for $10\%$. Compound interest does that every period to whatever
is there, interest included. So after $n$ periods the sum has been
multiplied by that factor $n$ times: $A_n = A_0 \left(1 + \frac{p}{100}
\right)^n$. It's the geometric progression with $b_1 = A_0$ and $q = 1 +
\frac{p}{100}$ - and like every geometric progression with $q > 1$, it
grows slowly at first and then very fast.

## The Rule

If a sum $A_0$ grows by $p\%$ per period, compounded (interest added to
the principal each period), then after $n$ periods it is

$$
A_n = A_0 \left(1 + \frac{p}{100}\right)^n
$$

For a *decrease* by $p\%$ per period (depreciation, decay) the factor
is $1 - \frac{p}{100}$.

Contrast **simple interest**, where each period's interest is
computed on the original sum only: $A_n = A_0 \left(1 + \frac{pn}{100}
\right)$ - an arithmetic progression.

Two different rates in succession multiply: $p_1\%$ then $p_2\%$ gives
$A_0 \left(1 + \frac{p_1}{100}\right)\left(1 + \frac{p_2}{100}\right)$.

## Worked Example

\$1000 at $10\%$ a year, compounded: how much after $3$ years? How much
with simple interest? Then: a car worth \$20000 loses $15\%$ of its
value each year; what is it worth after $2$ years? Then: at what
yearly rate does \$500 grow to \$605 in $2$ years?

- **Compound:** $1000 \cdot 1.1^3 = 1000 \cdot 1.331 = 1331$ dollars.
- **Simple:** $1000 (1 + 0.3) = 1300$ dollars. The \$31 difference is
  interest on interest. -
**Car:** $20000 \cdot 0.85^2 = 20000 \cdot 0.7225 = 14450$ dollars. -
**Rate.** $500 \left(1 + \frac{p}{100}\right)^2 = 605$, so $\left(1 +
  \frac{p}{100}\right)^2 = 1.21$, $1 + \frac{p}{100} = 1.1$ (the positive
  root), $p = 10\%$.

A price raised by $20\%$ and then cut by $20\%$: factor $1.2 \cdot 0.8 =
0.96$ - a $4\%$ loss, not back to where it was.

## Common Mistake

Adding the percentages: "$10\%$ a year for $3$ years is $30\%$". That's
simple interest and undercounts - compound gives $33.1\%$. And
treating a rise and an equal fall as cancelling: $+20\%$ then $-20\%$
leaves $96\%$, because the $20\%$ cut is taken from a larger number.
Percentages of *different* bases don't add or cancel; the factors
multiply.

## The Takeaway

Each period multiplies by $1 + \frac{p}{100}$; after $n$ periods, $A_0
\left(1 + \frac{p}{100}\right)^n$. Decrease: $1 - \frac{p}{100}$. Successive
changes multiply their factors. Simple interest adds, compound
multiplies - and multiplying wins over time.

## Check Yourself

1. \$2000 at $5\%$ a year compounded: how much after $2$ years? 2.
Same, with simple interest. 3.
A town of $50000$ people grows $2\%$ a year. Population after $3$
   years (to the nearest person)? 4.
A machine worth \$8000 loses $25\%$ of its value each year. Value
   after $2$ years?
5. A price rises $50\%$ then falls $50\%$. Net change?
6. Someone says \$1000 at $10\%$ for $2$ years becomes \$1200. What's
   the compound answer, and what did they compute?

> [!spoiler] Answers
>
> 1. $2000 \cdot 1.05^2 = 2205$ dollars.
> 2. $2000 \cdot 1.1 = 2200$ dollars.
> 3. $50000 \cdot 1.02^3 \approx 53060$.
> 4. $8000 \cdot 0.75^2 = 4500$ dollars.
> 5. Factor $1.5 \cdot 0.5 = 0.75$: down $25\%$.
> 6. $1000 \cdot 1.1^2 = 1210$; they used simple interest.
