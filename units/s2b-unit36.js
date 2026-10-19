/*
  Stage 2 Year B, Unit 36 — Review of learning (Term 4, learning sequence 1: Weeks 1–2).
  Format guide: see README.md ("Adding a unit").
*/
UNITS.push({
  stage: 2, ab: "B", term: 4, ls: 1, unit: 36,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 36 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Partitioned fractions B",
        prompt: "Which of the following is **one whole**?",
        options: [{ bars: [4, 3] }, { bars: [3, 2] }, { bars: [5, 5] }, { bars: [6, 4] }],
        answer: 2,
        explain: "All 5 fifths are shaded: [5/5] = 1. The others are [3/4], [2/3] and [4/6]."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "[4/4] is **equal** to 1. Record 3 other fractions equal to 1.",
        interact: [{ kind: "fractions", count: 3, value: 1, exclude: ["4/4"] }],
        answer: "Any fraction with the same numerator and denominator, e.g. [2/2], [3/3], [5/5], [10/10]."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Alex has 127 cows and 465 sheep on his farm. How many animals does he have altogether?",
        cubes: {"ops": ["+"], "solve": [{"t": "Split into place values", "s": "100 + 400 = 500, 20 + 60 = 80, 7 + 5 = 12. 500 + 80 + 12 = 592."}, {"t": "Jump on a number line", "s": "Start at 465. Jump 100 → 565, jump 20 → 585, jump 7 → 592."}]},
        interact: [{ kind: "input", fields: [{ value: 592, suffix: "animals" }] }],
        answer: "127 + 465 = **592** animals"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Julie wants to build a new, stronger fence around her property for her new puppy. What unit of measurement would she use to measure the fence?",
        cubes: {"ops": [], "note": "No calculation is needed. Think about how long a fence around a property is.", "solve": [{"t": "Picture the length", "s": "A fence around a yard is many big steps long. One big step is about 1 metre, so metres make sense."}, {"t": "Rule out the others", "s": "Millimetres and centimetres are for small things like pencils. Kilometres are for long trips. So: metres."}]},
        interact: [{ kind: "choose", rows: [{ t: "Best unit", options: ["millimetres", "centimetres", "metres", "kilometres"], a: 2 }] }],
        answer: "**Metres** — a fence around a property is many metres long."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "How much time is left until the next hour?",
        cubes: {"ops": ["−"], "also": ["+"], "solve": [{"t": "Count on", "s": "From 7:45 count on by fives: 7:50, 7:55, 8:00. That's 15 minutes."}, {"t": "Subtract from 60", "s": "An hour has 60 minutes. 60 − 45 = 15 minutes."}]},
        visual: { kind: "digital", time: "07:45" },
        interact: [{ kind: "input", fields: [{ value: 15, suffix: "minutes" }] }],
        answer: "**15 minutes** (7:45 → 8:00)"
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Partitioned fractions B",
        prompt: "The red bar **represents** 1[1/2].",
        visual: { kind: "barline", max: 2, den: 1, value: 1.5 },
        answer: true,
        explain: "The bar goes past 1 and stops halfway between 1 and 2."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Use **fifths** to show a fraction equivalent to **one-half**.",
        interact: [{ kind: "shade", parts: 5 }],
        answer: "Half of 5 fifths is 2[1/2] fifths. With whole fifths you can't make exactly one-half: [2/5] is a little less and [3/5] is a little more.",
        explain: "Talk about it: what could you do to the strip to make one-half exactly? (Split each fifth in half to make tenths: [5/10].)"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "George had 465 sheep, but during a storm 167 escaped. How many remain on the farm?",
        cubes: {"ops": ["−"], "solve": [{"t": "Constant difference", "s": "Add 3 to both numbers: 468 − 170 = 298."}, {"t": "Count up", "s": "From 167: +3 → 170, +30 → 200, +265 → 465. 3 + 30 + 265 = 298."}]},
        interact: [{ kind: "input", fields: [{ value: 298, suffix: "sheep" }] }],
        answer: "465 − 167 = **298** sheep"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Courtenay's desk is 150 centimetres long. Convert the length to metres.",
        cubes: {"ops": ["÷"], "solve": [{"t": "Use 100 cm = 1 m", "s": "150 cm = 100 cm + 50 cm = 1 m 50 cm = 1.5 m."}, {"t": "Divide by 100", "s": "150 ÷ 100 = 1.5 m."}]},
        interact: [{ kind: "input", fields: [{ label: "150 cm =", value: 1.5, suffix: "m" }] }],
        answer: "**1.5 m** (100 cm = 1 m, so 150 cm = 1 m 50 cm)"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "This rectangle is 8 m by 3 m. Find another rectangle with **different side lengths** and the **same area**.",
        visual: { kind: "rect", w: 8, h: 3, unit: "m" },
        interact: [{ kind: "pair", labels: ["Length", "Width"], unit: "m", rule: "area", target: 24, exclude: [[8, 3]] }],
        answer: "Area = 8 × 3 = 24 m². Other rectangles: 6 m × 4 m, 12 m × 2 m or 24 m × 1 m."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Partitioned fractions B",
        prompt: "What is another way to **record** the fraction **9 fifths**?",
        visual: { kind: "barline", max: 2, den: 5, value: 9/5 },
        options: ["1[3/5]", "1[2/5]", "1[4/5]", "1[5/5]"],
        answer: 2,
        explain: "5 fifths make 1 whole, and 4 fifths are left over: [9/5] = 1[4/5]."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "What **pattern** do you notice in these **equivalent fractions**? Use it to find the next one.",
        display: "[1/3] = [2/6] = [3/9]",
        interact: [{ kind: "input", fields: [{ label: "[3/9] = ? / 12", accept: ["4", "4/12"] }] }],
        answer: "The numerator goes up by 1 and the denominator goes up by 3 (the denominator is always 3 times the numerator). Next: **[4/12]**."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Emma brought 39 stickers. She gave 21 to Bonnie and 11 to Chloe. How many does she have left?",
        cubes: {"ops": ["−"], "also": ["+"], "solve": [{"t": "Add what she gave away first", "s": "21 + 11 = 32. 39 − 32 = 7."}, {"t": "Take away one at a time", "s": "39 − 21 = 18, then 18 − 11 = 7."}]},
        follow: "Discuss the most efficient strategy.",
        interact: [{ kind: "input", fields: [{ value: 7, suffix: "stickers" }] }],
        answer: "**7** stickers. Efficient: 21 + 11 = 32, then 39 − 32 = 7."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Shannon is building a walking track 250 metres long. How long is the track in centimetres?",
        cubes: {"ops": ["×"], "solve": [{"t": "Use 1 m = 100 cm", "s": "250 × 100 = 25 000 cm."}, {"t": "Build it up", "s": "100 m = 10 000 cm, so 200 m = 20 000 cm and 50 m = 5000 cm. 20 000 + 5000 = 25 000 cm."}]},
        interact: [{ kind: "input", fields: [{ value: 25000, suffix: "cm" }] }],
        answer: "1 m = 100 cm, so 250 m = **25 000 cm**"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "**Order** the containers from the smallest to the largest capacity.",
        img: "containers.png",
        interact: [{ kind: "order", items: ["A  750 mL", "B  1200 mL", "C  950 mL"], answer: [0, 2, 1] }],
        answer: "**A** (750 mL), **C** (950 mL), **B** (1200 mL)"
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Partitioned fractions B",
        prompt: "2 is **the same as** 1[5/5].",
        follow: "Communicate your reasoning.",
        answer: true,
        explain: "[5/5] = 1, so 1[5/5] = 1 + 1 = 2."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "If this is [1/6] of the jug, **build the whole jug**.",
        img: "jug-sixth.png",
        interact: [{ kind: "stack", label: "[1/6]", target: 6 }],
        answer: "The whole jug is **6 sixths** — 6 times as tall as the part shown."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Sarah has 245 marbles and Ben has 378. They tip them into one jar. How many altogether?",
        cubes: {"ops": ["+"], "solve": [{"t": "Split into place values", "s": "200 + 300 = 500, 40 + 70 = 110, 5 + 8 = 13. 500 + 110 + 13 = 623."}, {"t": "Make a friendly number", "s": "Move 2 from 245 to 378: 243 + 380 = 623."}]},
        interact: [{ kind: "input", fields: [{ value: 623, suffix: "marbles" }] }],
        answer: "245 + 378 = **623** marbles"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Kate's flower bed will be 4 metres long and 3 metres wide. What is the perimeter in centimetres?",
        cubes: {"ops": ["+", "×"], "solve": [{"t": "Add all four sides", "s": "4 + 3 + 4 + 3 = 14 m. 14 × 100 = 1400 cm."}, {"t": "Convert first", "s": "4 m = 400 cm and 3 m = 300 cm. 400 + 300 + 400 + 300 = 1400 cm."}]},
        interact: [
          { kind: "sides", label: "Rectangular flower bed, 4 m by 3 m", view: [370, 260],
            poly: [[40,60], [280,60], [280,240], [40,240]],
            dims: [{ from: [42,38], to: [278,38] }, { from: [302,62], to: [302,238] }],
            labels: [{ x: 160, y: 26, t: "4 m" }, { x: 312, y: 156, t: "3 m", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 1400, suffix: "cm" }] }
        ],
        answer: "4 + 3 + 4 + 3 = 14 m = **1400 cm**"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "What is a **tessellating** design? Draw one using triangles.",
        interact: [{ kind: "sketch", grid: "triangle" }],
        answer: "A tessellating design covers a surface with shapes that fit together with **no gaps and no overlaps**. Triangles tessellate when every second one is turned upside down."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which collection of coins is **not equivalent** to $1?",
        options: [{ img: "coins-dollar-A.png", alt: "two 50 cent coins" }, { img: "coins-dollar-B.png", alt: "a 50 cent and a 20 cent coin" },
          { img: "coins-dollar-C.png", alt: "a 1 dollar coin" }, { img: "coins-dollar-D.png", alt: "a 50 cent, two 20 cent and a 10 cent coin" }],
        answer: 1,
        explain: "50c + 20c = 70c. A: 50c + 50c = $1. C: $1. D: 50c + 20c + 20c + 10c = $1."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "**Describe the pattern.** What comes next?",
        display: "1   1[1/4]   1[2/4]   1[3/4]   2",
        interact: [{ kind: "input", fields: [{ label: "Next number", value: 2.25, placeholder: "e.g. 1 1/2" }] }],
        answer: "It goes up by [1/4] each time. Next: **2[1/4]**."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "There were 1500 balloons at the school fair. After the first hour, 625 popped. How many were left?",
        cubes: {"ops": ["−"], "solve": [{"t": "Count up", "s": "625 + 75 = 700, then 700 + 800 = 1500. 75 + 800 = 875."}, {"t": "Split the number taken away", "s": "1500 − 600 = 900, then 900 − 25 = 875."}]},
        interact: [{ kind: "input", fields: [{ value: 875, suffix: "balloons" }] }],
        answer: "1500 − 625 = **875** balloons"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "Name 4 objects that are **about 1 kg**.",
        answer: "Answers vary, e.g. a 1 L bottle of water, a bag of sugar or flour, a pineapple, a dictionary, a pair of shoes."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Describe each event as **equally likely**, **likely** or **unlikely**.",
        interact: [{ kind: "choose", rows: [
          { t: "Rolling a six on a standard dice", options: ["unlikely", "equally likely", "likely"], a: 0 },
          { t: "Rain tomorrow, when the forecast says sunny", options: ["unlikely", "equally likely", "likely"], a: 0 },
          { t: "Drawing a red card from a standard deck", options: ["unlikely", "equally likely", "likely"], a: 1 }] }],
        answer: "Six on a dice: **unlikely** (1 in 6) · Rain on a sunny forecast: **unlikely** · Red card: **equally likely** (half the cards are red)"
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "This money wall accurately shows **equivalent** coin denominations.",
        img: "money-wall.png",
        answer: false,
        explain: "Two 10c coins make 20c, not 50c. Four 5c coins make 20c too, so only the bottom two rows match."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Is **6 tenths** closer to 1 or 2?",
        follow: "Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [{ t: "0.6 is closer to", options: ["1", "2"], a: 0 }] }],
        answer: "**1**. 0.6 is 4 tenths away from 1, but 1 and 4 tenths away from 2."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "A book drive collected 840 books in week 1 and 675 in week 2. The school donated 950 books to a library. How many books are left?",
        cubes: {"ops": ["+", "−"], "solve": [{"t": "Add, then subtract", "s": "840 + 675 = 1515. 1515 − 950 = 565."}, {"t": "Round and adjust", "s": "1515 − 1000 = 515. We took away 50 too many, so add 50 back: 565."}]},
        interact: [{ kind: "input", fields: [{ value: 565, suffix: "books" }] }],
        answer: "840 + 675 = 1515, then 1515 − 950 = **565** books"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "A chocolate bar weighs 250 grams. What fraction of a kilogram is this?",
        cubes: {"ops": ["÷"], "solve": [{"t": "How many fit in 1 kg?", "s": "1 kg = 1000 g. 250 + 250 + 250 + 250 = 1000, so 4 bars make 1 kg. One bar is [1/4] kg."}, {"t": "Halve and halve again", "s": "Half of 1000 g is 500 g. Half again is 250 g. Half of a half is [1/4]."}]},
        interact: [{ kind: "input", fields: [{ value: 0.25, suffix: "kg", placeholder: "a fraction" }] }],
        answer: "**[1/4]** of a kilogram, because 4 × 250 g = 1000 g = 1 kg."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Think about a **rectangular prism**. How many faces, vertices and edges does it have?",
        interact: [{ kind: "input", fields: [{ label: "faces", value: 6 }, { label: "vertices", value: 8 }, { label: "edges", value: 12 }] }],
        answer: "**6** faces, **8** vertices, **12** edges"
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "I pay for a $3.75 sandwich with a $5 note. What is the correct change?",
        cubes: {"ops": ["−"], "solve": [{"t": "Count up", "s": "$3.75 + 25c = $4, then $4 + $1 = $5. The change is $1.25."}, {"t": "Subtract", "s": "$5.00 − $3.75 = $1.25. Find the coins that make $1.25."}]},
        options: [{ img: "coins-change-A.png", alt: "a 1 dollar, a 20 cent and a 5 cent coin" }, { img: "coins-change-B.png", alt: "a 50 cent and two 20 cent coins" },
          { img: "coins-change-C.png", alt: "a 1 dollar, a 20 cent and a 10 cent coin" }, { img: "coins-change-D.png", alt: "three 50 cent coins" }],
        answer: 0,
        explain: "$5 − $3.75 = $1.25 = $1 + 20c + 5c."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "How many ways can you represent **0.5** as a fraction?",
        interact: [{ kind: "fractions", count: 4, min: 2, value: 0.5 }],
        answer: "Many ways: [1/2], [2/4], [5/10], [50/100], [3/6] …"
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Lucy has $45. She buys a book for $18 and a toy for $22. How much money is left?",
        cubes: {"ops": ["+", "−"], "solve": [{"t": "Add the costs first", "s": "$18 + $22 = $40. $45 − $40 = $5."}, {"t": "Take away one at a time", "s": "$45 − $18 = $27, then $27 − $22 = $5."}]},
        interact: [{ kind: "input", fields: [{ prefix: "$", value: 5 }] }],
        answer: "$18 + $22 = $40, so $45 − $40 = **$5**"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "A watermelon weighs **over 1 kilogram**. How might you record its mass using kilograms and grams?",
        answer: "Answers vary, e.g. **2 kg 300 g**. Remember 1000 g = 1 kg."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Compare each angle to a **right angle**.",
        img: "angles.png",
        interact: [{ kind: "choose", rows: [
          { t: "Angle 1 (left)", options: ["less than", "about the same as", "greater than"], a: 0 },
          { t: "Angle 2 (middle)", options: ["less than", "about the same as", "greater than"], a: 2 },
          { t: "Angle 3 (right)", options: ["less than", "about the same as", "greater than"], a: [1, 2] }] }],
        answer: "Angle 1: **less than** · Angle 2: **greater than** · Angle 3: just **greater than** (about the same as) a right angle"
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Tobi said, “I had $5 and bought an ice-block for $3.75. I have $1.75 left.” Leon said, “That can't be right!” Is Tobi's statement true or false?",
        cubes: {"ops": ["−"], "solve": [{"t": "Count up", "s": "$3.75 + 25c = $4, and $4 + $1 = $5. The change should be $1.25."}, {"t": "Check by adding", "s": "$3.75 + $1.75 = $5.50. That's more than $5, so Tobi is wrong."}]},
        answer: false,
        explain: "$5 − $3.75 = $1.25, so Tobi should have $1.25 left."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Where would **0.75** be placed on the number line? Drag the marker.",
        follow: "Explain your reasoning.",
        interact: [{ kind: "marker", min: 0, max: 1, ticks: 10, minor: 100, target: 0.75, tol: 0.015, label: "0.75" }],
        answer: "Halfway between 0.7 and 0.8 — three-quarters of the way from 0 to 1."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Tom has $67 for a school project. He buys markers for $15.75 and paper for $10.23. How much does he have left?",
        cubes: {"ops": ["+", "−"], "solve": [{"t": "Add the costs first", "s": "$15.75 + $10.23 = $25.98. $67 − $25.98 = $41.02."}, {"t": "Round and adjust", "s": "The costs are about $26, and $67 − $26 = $41. We added 2c too much, so it's $41.02."}]},
        interact: [{ kind: "input", fields: [{ prefix: "$", value: 41.02 }] }],
        answer: "$15.75 + $10.23 = $25.98, so $67 − $25.98 = **$41.02**"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "What is [1/2], [1/4] and [3/4] of a kilogram? Record your answers in **grams**.",
        interact: [{ kind: "input", fields: [
          { label: "[1/2] kg =", value: 500, suffix: "g" }, { label: "[1/4] kg =", value: 250, suffix: "g" },
          { label: "[3/4] kg =", value: 750, suffix: "g" }] }],
        answer: "500 g · 250 g · 750 g"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Record these times using **digital notation**.",
        img: "clocks.png",
        interact: [{ kind: "input", fields: [
          { label: "Clock 1", accept: ["445"], placeholder: "0:00" }, { label: "Clock 2", accept: ["245"], placeholder: "0:00" },
          { label: "Clock 3", accept: ["215"], placeholder: "0:00" }] }],
        answer: "**4:45** · **2:45** · **2:15**"
      }
    ]
  ]
});
