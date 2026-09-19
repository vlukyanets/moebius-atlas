---
title: "[S] Motion Problems"
tag: MTD
track: school
grade: 5
subject: algebra
requires: [grade-5-topic-12-lesson-12-equations]
---

## Why It Matters

Two friends live $18$ km apart and cycle towards each other - when do they
meet? A boat goes downstream in two hours but needs three to come back -
how fast is the river? A bus left an hour before a car - when does the car
catch up? These are motion problems, and they all rest on one formula and
one habit: draw the picture before you calculate.

## The Big Idea

Everything comes from $s = v \cdot t$: distance is speed times time. Speed
is just "how much distance per one unit of time" - $60$ km/h means $60$
kilometres for every hour on the road.

The trick with two movers is to think about how fast the *gap* between
them changes. Two cyclists riding towards each other at $12$ and $15$ km/h
close the gap by $12 + 15 = 27$ km every hour - it's as if one of them sat
still and the other rode at $27$ km/h. Chasing is the opposite: the gap
shrinks by the *difference* of the speeds. And a river simply adds its
own speed to a boat going with it and subtracts it from a boat going
against it.

## The Rule

The three quantities are tied by one formula in three forms:

$$
s = v \cdot t, \qquad v = s : t, \qquad t = s : v
$$

Two movers:

- **Towards each other** (or apart): the gap changes by the **sum** of the
  speeds, $v_1 + v_2$, each unit of time.
- **Catching up** (same direction): the gap changes by the **difference**
  of the speeds, $v_1 - v_2$.

On a river, with the boat's own speed $v$ and the current's speed $v_c$:

- downstream: $v + v_c$;
- upstream: $v - v_c$.

A plan that always works: draw a line with the movers and the distances
on it, write down what's known, pick the form of the formula that gives
the unknown - or write an equation if the unknown is inside the
calculation.

## Worked Example

Two cyclists start at the same time from villages $54$ km apart and ride
towards each other, one at $12$ km/h, the other at $15$ km/h. When do they
meet?

- **Draw it:** a line $54$ km long, a cyclist at each end, arrows pointing
  inward.
- **Closing speed:** together they eat up $12 + 15 = 27$ km of the gap
  every hour.
- **Time to close $54$ km:** $t = s : v = 54 : 27 = 2$ hours.
- **Check:** in $2$ hours the first rides $24$ km, the second $30$ km, and
  $24 + 30 = 54$. They meet.

Now a river. A boat's own speed is $v$ km/h and the current is $3$ km/h.
Going downstream for $2$ h, the boat covers $30$ km. Find $v$. Downstream
speed is $v + 3$, so $(v + 3) \cdot 2 = 30$. Then $v + 3 = 15$ and
$v = 12$ km/h. Check: $(12 + 3) \cdot 2 = 30$.

## Common Mistake

Adding the speeds when the movers go the same way. A car at $90$ km/h
chases a bus at $60$ km/h that's $60$ km ahead. Adding, $90 + 60 = 150$,
gives a catch-up time of $60 : 150$ - less than an hour, and not even a
whole number. But they're moving the same direction: the car gains only
$90 - 60 = 30$ km each hour, so it needs $60 : 30 = 2$ hours. Sum for
opposite directions, difference for the same direction - the picture
tells you which.

## The Takeaway

Every motion problem is $s = v \cdot t$ plus a picture. Movers heading
towards each other close the gap at the sum of their speeds; a chaser
closes it at the difference; a river adds or subtracts its own speed.

## Check Yourself

1. A train travels $420$ km in $6$ h. What's its speed?
2. A walker at $5$ km/h and a cyclist at $13$ km/h start towards each
   other from $36$ km apart. When do they meet?
3. A car at $80$ km/h chases a truck at $60$ km/h that's $100$ km ahead.
   How long until it catches up?
4. A boat's own speed is $14$ km/h, the current is $2$ km/h. How far does
   it go upstream in $3$ h?
5. Two cars leave one town in opposite directions at $70$ and $80$ km/h.
   How far apart are they after $3$ h?
6. A boat covers $40$ km downstream in $2$ h. The current is $4$ km/h.
   Write an equation and find the boat's own speed.

> [!spoiler] Answers
>
> 1. $420 : 6 = 70$ km/h.
> 2. $36 : (5 + 13) = 36 : 18 = 2$ h.
> 3. $100 : (80 - 60) = 100 : 20 = 5$ h.
> 4. $(14 - 2) \cdot 3 = 36$ km.
> 5. $(70 + 80) \cdot 3 = 450$ km.
> 6. $(v + 4) \cdot 2 = 40$, so $v + 4 = 20$ and $v = 16$ km/h.
