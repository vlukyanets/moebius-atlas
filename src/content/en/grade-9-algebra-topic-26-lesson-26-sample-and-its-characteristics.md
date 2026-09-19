---
title: "[S] Sample. Numerical Characteristics of a Sample"
tag: DEF
track: school
grade: 9
subject: algebra
requires: [grade-9-algebra-topic-25-lesson-25-basics-of-statistics]
---

## Why It Matters

"The average salary is \$5000" - and most people earn far less,
because one billionaire pulls the average up. "The median salary is
\$3200" - that's the one half the people are below. Three different
numbers each claim to be the "typical" value of a data set, and they
can disagree wildly; knowing which is which is the difference between
reading a statistic and being fooled by it. This topic defines the
three - mean, median, mode - and the range that says how spread out
the data is.

## The Big Idea

Given a list of numbers, there are several honest answers to "what's
typical". The **mean** adds everything and shares it out equally -
sensitive to every value, and dragged by extreme ones. The
**median** sorts the list and takes the middle - half the data is
below it, half above, and a billionaire moves it not at all. The
**mode** is simply the most common value - the only one that makes
sense for data that aren't numbers, like favourite colours. And the
**range**, largest minus smallest, says how wide the data spreads.
Each is right for something; the mean for adding up totals, the
median for "typical" when the data is lopsided, the mode for the most
popular choice.

## The Rule

For a sample $x_1, x_2, \dots, x_n$:

- **Sample size** $n$ - the number of observations.
- **Range** - the largest value minus the smallest.
- **Mode** - the value that occurs most often. There may be several
  modes, or none (if every value occurs equally often).
- **Median** - the middle value of the *sorted* sample: the
  middle element if $n$ is odd, the mean of the two middle elements if
  $n$ is even.
- **Mean** (arithmetic mean): $\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}$.
  From a frequency table: $\bar{x} = \frac{x_1 m_1 + x_2 m_2 + \dots}{n}$,
  each value times its frequency.

## Worked Example

The marks: $7, 9, 8, 10, 7, 6, 8, 9, 8, 7, 10, 8, 9, 8, 7, 6, 8, 9, 8, 10$ ($n = 20$).
Find the range, mode, median and mean. Then: the salaries at a small
firm are $2, 2, 3, 3, 4, 30$ (thousands); find the mean and median and
say which describes a typical salary.

- **Range:** $10 - 6 = 4$.
- **Mode:** $8$ (seven times, more than any other).
- **Median.** Sorted: $6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10,
  10$. $n = 20$ is even; the $10$th and $11$th values are both $8$, so the
  median is $8$.
- **Mean.** From the frequency table: $\frac{6 \cdot 2 + 7 \cdot 4 + 8 \cdot 7 + 9
  \cdot 4 + 10 \cdot 3}{20} = \frac{12 + 28 + 56 + 36 + 30}{20} = \frac{162}{20} =
  8.1$.
- **Salaries.** Mean: $\frac{44}{6} \approx 7.3$. Median: sorted already,
  middle two are $3$ and $3$, median $3$. Five of six people earn $4$ or
  less - the median $3$ is typical; the mean $7.3$ is a number nobody
  earns, pulled up by the $30$.

For the marks all three agree at about $8$: symmetric data has that
property. Lopsided data pulls the mean toward the tail.

## Common Mistake

Taking the median of the *unsorted* list - the middle of $7, 9, 8, 10,
\dots$ as written is meaningless. Sort first, always. And with even
$n$, picking one of the two middle values rather than averaging them:
for $1, 2, 3, 10$ the median is $\frac{2 + 3}{2} = 2.5$, not $2$ or $3$. The
other slip is the mean from a frequency table computed as the mean
of the *values* ($\frac{6 + 7 + 8 + 9 + 10}{5} = 8$) - that ignores how
often each occurred; here it happens to be close, but it's wrong in
general.

## The Takeaway

Range: spread. Mode: most frequent. Median: middle of the sorted
list, averaging two if $n$ is even. Mean: total over count, weighted
by frequency from a table. The mean feels every value; the median
ignores the extremes - choose by what "typical" should mean for your
data.

## Check Yourself

1. Data: $4, 8, 6, 5, 3, 8, 2$. Find the range and mode.
2. Same data: find the median.
3. Same data: find the mean.
4. Data: $1, 2, 2, 3, 9, 10$. Find the median and the mean.
5. A frequency table: value $2$ occurs $3$ times, $5$ occurs $5$ times,
   $8$ occurs $2$ times. Find the mean.
6. Someone says the median of $5, 1, 9, 3$ is $\frac{1 + 9}{2} = 5$, "the
   two middle ones". Correct it.

> [!spoiler] Answers
>
> 1. Range $6$; mode $8$.
> 2. Sorted $2, 3, 4, 5, 6, 8, 8$: median $5$.
> 3. $\frac{36}{7} \approx 5.14$.
> 4. Median $\frac{2 + 3}{2} = 2.5$; mean $4.5$.
> 5. $\frac{6 + 25 + 16}{10} = 4.7$.
> 6. Sort first: $1, 3, 5, 9$; median $\frac{3 + 5}{2} = 4$.
