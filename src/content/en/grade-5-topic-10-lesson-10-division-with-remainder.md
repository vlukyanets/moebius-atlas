---
title: "[S] Division with a Remainder"
tag: MTD
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-9-lesson-9-dividing-natural-numbers]
---

## Why It Matters

$23$ pupils, tables for $4$ - how many tables, and is anyone left over?
$100$ days from now - what day of the week will it be? $58$ eggs into
boxes of $10$ - how many full boxes? Real things rarely divide evenly.
Division with a remainder is division that tells the truth: how many
whole times, and how much is left.

## The Big Idea

Sharing $23$ sweets among $4$ friends: give everyone one, then another,
then another - after five rounds you've handed out $20$ and have $3$ left,
not enough for another round. Five each, three left over. The remainder
isn't a mistake; it's part of the answer. And it's always smaller than
the divisor - if it weren't, you could hand out one more round.

The whole story fits in one line: $23 = 4 \cdot 5 + 3$. Four friends, five
sweets each, plus the three still in the bag. That equation is what
division with a remainder really says.

## The Rule

To divide $a$ by $b$ with a remainder is to find the **partial quotient**
$q$ and the **remainder** $r$ such that

$$
a = b \cdot q + r, \qquad r < b
$$

The remainder is always smaller than the divisor. Written out:

$$
23 : 4 = 5 \text{ (remainder } 3)
$$

If the remainder is $0$, the division is exact - $a$ is divisible by $b$.

In long division nothing changes: you stop when there are no more digits
to bring down, and whatever is left after the last subtraction is the
remainder.

## Worked Example

Find $1000 : 7$ with a remainder.

- **First digits:** $10$. $7$ fits once. Write $1$. $10 - 7 = 3$.
- **Bring down $0$:** $30$. $7 \cdot 4 = 28$, $7 \cdot 5 = 35$ - too much.
  Write $4$. $30 - 28 = 2$.
- **Bring down the last $0$:** $20$. $7 \cdot 2 = 14$, $7 \cdot 3 = 21$ -
  too much. Write $2$. $20 - 14 = 6$.
- **No digits left.** The remainder is $6$.

So $1000 : 7 = 142$ (remainder $6$). Check: $7 \cdot 142 + 6 = 994 + 6 =
1000$. And $6 < 7$, as it must be.

Now the calendar. Today is Monday; what day is it $100$ days from now?
Weeks repeat every $7$ days, so only the remainder matters:
$100 : 7 = 14$ (remainder $2$). Fourteen full weeks bring you back to
Monday, and two more days make it Wednesday.

## Common Mistake

Stopping with a remainder that's too big. Someone computes
$23 : 4 = 4$ (remainder $7$) - and $4 \cdot 4 + 7 = 23$ does check out.
But $7$ is bigger than $4$, so another whole $4$ is hiding in it: one more
round can be handed out. The remainder must always be smaller than the
divisor. If it isn't, the quotient goes up by one and the remainder goes
down by the divisor: $5$ (remainder $3$).

## The Takeaway

Dividing with a remainder splits a number into "divisor times quotient,
plus what's left" - and what's left is always less than the divisor.
Check it with $a = b \cdot q + r$.

## Check Yourself

1. Find $59 : 8$ with a remainder, and check.
2. Find $2023 : 9$ with a remainder.
3. $23$ pupils sit at tables for $4$. How many tables are full, and how
   many pupils sit at the last one?
4. Write $47 = 6 \cdot q + r$ with the right $q$ and $r$.
5. Which remainders are possible when dividing by $5$?
6. Someone writes $35 : 6 = 4$ (remainder $11$). What's wrong?

> [!spoiler] Answers
>
> 1. $7$ (remainder $3$); check: $8 \cdot 7 + 3 = 59$.
> 2. $224$ (remainder $7$).
> 3. $5$ full tables, and $3$ pupils at the sixth.
> 4. $47 = 6 \cdot 7 + 5$.
> 5. Only $0, 1, 2, 3, 4$ - the remainder is always less than the divisor.
> 6. The remainder $11$ is bigger than $6$; the answer is $5$ (remainder
>    $5$).
