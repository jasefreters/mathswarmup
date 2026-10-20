/*
  Stage 2 Year B, Unit 22 — Review of learning (Term 1, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 1, ls: 2, unit: 22,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 22 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Complete the number sentence: ☐ + 26 = 16 + 23",
        options: ["12", "16", "13", "10"],
        answer: 2,
        explain: "16 + 23 = 39. 26 + 13 = 39, so the missing number is 13. Both sides must be equal.",
        interact: [{ kind: "jumps", start: 26, end: 39, steps: [1, 10], hint: "16 + 23 = 39. Count on from 26 to 39." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Record the quantity value of each digit in 543.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 543 },
          { kind: "input", fields: [{ label: "5 is worth", value: 500 }, { label: "4 is worth", value: 40 }, { label: "3 is worth", value: 3 }] }
        ],
        answer: "The 5 is worth **500**, the 4 is worth **40** and the 3 is worth **3**. 543 = 500 + 40 + 3."
      },
      {
        type: "sr", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Order these numbers from smallest to largest: 3847, 2091, 3487, 2901, 1078",
        interact: [{ kind: "order", items: ["3847", "2091", "3487", "2901", "1078"], answer: [4, 1, 3, 2, 0] }],
        answer: "1078, 2091, 2901, 3487, 3847. Compare the thousands first, then the hundreds."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Record the coordinates for the location of the treasure icon.",
        interact: [
          { kind: "gridref", src: "img/s2/u22-island.png", alt: "Island map with a grid, columns A to L and rows 1 to 7", box: [5.91, 10.18, 92.63, 90.66], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"], rows: ["7", "6", "5", "4", "3", "2", "1"] },
          { kind: "input", fields: [{ label: "Treasure", accept: ["G3"], placeholder: "e.g. B4" }] }
        ],
        answer: "**G3**. Go across to column G, then up to row 3. Letter first, then number."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Record the directions to get from the ferris wheel to the hospital. Draw the route.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u22-town.png" }],
        answer: "Answers vary. For example: from the ferris wheel, go up the road beside the tall buildings, turn right, and the hospital is on the left. Use words like left, right, up, down, past and turn."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "32 + 18 = 35 + 14",
        answer: false,
        explain: "32 + 18 = 50, but 35 + 14 = 49. 35 is 3 more than 32, but 14 is 4 less than 18, so the right side is 1 less.",
        interact: [
          { kind: "jumps", start: 32, steps: [1, 8, 10], hint: "Work out 32 + 18." },
          { kind: "jumps", start: 35, steps: [1, 4, 10], hint: "Work out 35 + 14." }
        ]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use regrouping to solve 473 + 37. Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 473, target: 510, need: "standard", hint: "Add 3 tens and 7 ones. Group 10 ones into a ten, and 10 tens into a hundred." },
          { kind: "input", fields: [{ label: "473 + 37 =", value: 510 }] }
        ],
        answer: "**510**. 3 + 7 = 10 ones, which regroup to 1 ten. 7 + 3 + 1 = 11 tens, which regroup to 1 hundred and 1 ten. 4 + 1 = 5 hundreds."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "Complete these sentences. Ascending order means … Descending order means …",
        interact: [{ kind: "choose", rows: [
          { t: "Ascending order means", options: ["smallest to largest", "largest to smallest"], a: 0 },
          { t: "Descending order means", options: ["smallest to largest", "largest to smallest"], a: 1 }] }],
        answer: "Ascending order means **smallest to largest** (going up). Descending order means **largest to smallest** (going down)."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "What is located at G6 and F5?",
        interact: [
          { kind: "gridref", src: "img/s2/u22-island.png", alt: "Island map with a grid, columns A to L and rows 1 to 7", box: [5.91, 10.18, 92.63, 90.66], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"], rows: ["7", "6", "5", "4", "3", "2", "1"] },
          { kind: "choose", rows: [
            { t: "G6", options: ["palm trees", "Rocky", "boat", "treasure"], a: 0 },
            { t: "F5", options: ["palm trees", "Rocky", "boat", "treasure"], a: 1 }] }
        ],
        answer: "G6: the **palm trees**. F5: **Rocky**."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record the numbers that complete the sentences. There are ___ millimetres in 1 centimetre. There are ___ millimetres in 2 centimetres. There are ___ millimetres in 6 centimetres.",
        interact: [
          { kind: "jumps", start: 0, steps: [10, 1], hint: "Each jump of 10 mm is 1 cm. Count the jumps." },
          { kind: "input", fields: [{ label: "1 cm =", value: 10, suffix: "mm" }, { label: "2 cm =", value: 20, suffix: "mm" }, { label: "6 cm =", value: 60, suffix: "mm" }] }
        ],
        answer: "**10 mm**, **20 mm** and **60 mm**. Every centimetre is 10 millimetres."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "32 + 7 and 22 + 17 are both equivalent to …",
        options: ["39", "46", "37", "49"],
        answer: 0,
        explain: "32 + 7 = 39 and 22 + 17 = 39. Moving 10 from 32 to 7 keeps the total the same.",
        interact: [
          { kind: "jumps", start: 32, steps: [1, 7, 10], hint: "Work out 32 + 7." },
          { kind: "jumps", start: 22, steps: [1, 7, 10], hint: "Work out 22 + 17." }
        ]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use regrouping to solve 284 − 76. Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 284, target: 208, need: "standard", hint: "Take away 7 tens and 6 ones. There aren't enough ones, so break a ten into 10 ones first." },
          { kind: "input", fields: [{ label: "284 − 76 =", value: 208 }] }
        ],
        answer: "**208**. Break 1 ten into 10 ones: 14 − 6 = 8 ones. 7 − 7 = 0 tens. 2 hundreds."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "How many tenths have been shaded pink? Record using decimal notation.",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1], hint: "This strip is 1 whole, cut into tenths. Count the shaded tenths." },
          { kind: "input", fields: [{ label: "Tenths shaded", value: 2 }, { label: "Decimal", value: 0.2 }] }
        ],
        answer: "**2 tenths**, which is **0.2**."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record 3 different ways $4 can be made using a combination of gold and silver coins.",
        interact: [{ kind: "coins", target: 400, mix: true, hint: "Tap coins into the purse to make $4. Use gold and silver coins. Save each way you find." }],
        answer: "Answers vary, for example: $2 + $1 + 50c + 50c · $2 + $1 + 50c + 20c + 20c + 10c · $1 + $1 + $1 + 50c + 50c"
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A jar contains different coloured jellybeans: red, blue, orange, green and yellow. Clara randomly picks 1 jellybean. Record all possible outcomes.",
        interact: [{ kind: "combos", pick: 1, total: 5, items: [["red", "#E03131", 1], ["blue", "#2F6FE4", 1], ["orange", "#F2994A", 1], ["green", "#22A06B", 1], ["yellow", "#E9B500", 1]] }],
        answer: "There are **5** possible outcomes: red, blue, orange, green or yellow."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "20 − 13 = 17 − 10",
        answer: true,
        explain: "20 − 13 = 7 and 17 − 10 = 7. Taking 3 off both numbers keeps the difference the same.",
        interact: [
          { kind: "jumps", start: 20, back: true, steps: [1, 3, 10], hint: "Work out 20 − 13." },
          { kind: "jumps", start: 17, back: true, steps: [1, 3, 10], hint: "Work out 17 − 10." }
        ]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use partitioning and regrouping strategies to determine 2 numbers that combine to make 784. Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 784, hint: "Break apart counters to see different ways to split 784." },
          { kind: "expr", target: 784, count: 2, placeholder: "e.g. 700 + 84", sample: ["700 + 84", "400 + 384"] }
        ],
        answer: "Answers vary, for example 700 + 84, 400 + 384 or 392 + 392."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Use decimal notation to record the decimal represented in the tenths mats.",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], hint: "Mat 1" },
          { kind: "shade", parts: 10, pre: [0, 1, 2], hint: "Mat 2" },
          { kind: "input", fields: [{ label: "Decimal", value: 1.3 }] }
        ],
        answer: "**1.3**. One mat is fully shaded (1 whole) and 3 tenths of the second mat are shaded."
      },
      {
        type: "sr", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Complete the sentence: 6792 can be partitioned in non-standard form as …",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 6792, target: 6792, need: "nonstandard" }],
        answer: "Answers vary, for example 67 hundreds + 9 tens + 2 ones, or 6000 + 700 + 80 + 12."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Record 3 different items that each have a mass of about 1 kilogram.",
        interact: [{ kind: "select", hint: "Tap the items that have a mass of about 1 kilogram.", items: [["bag of flour", true], ["1 L bottle of water", true], ["pineapple", true], ["paper clip", false], ["school desk", false], ["pencil", false]] }],
        answer: "Answers vary: a bag of flour, a 1 L bottle of water, a pineapple, a bag of sugar or a dictionary."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "1652 can be **renamed** as …",
        options: ["1000 + 600 + 500 + 20", "160 + 50 + 2", "1000 + 6000 + 50 + 2", "1000 + 600 + 50 + 2"],
        answer: 3,
        explain: "1 thousand, 6 hundreds, 5 tens and 2 ones: 1000 + 600 + 50 + 2.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 1652 }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "The school library has 562 books. If 337 were borrowed, how many books were left in the library? Record your thinking using a bar model.",
        interact: [
          { kind: "bar", whole: { v: 562, l: "562", n: "books" }, parts: [{ v: 337, l: "337", n: "borrowed" }, { v: 225, l: "225", n: "left", hide: true }] },
          { kind: "pv", cols: ["H", "T", "O"], start: 562, target: 225, need: "standard", hint: "Take away 3 hundreds, 3 tens and 7 ones. Break a ten if there aren't enough ones." },
          { kind: "input", fields: [{ label: "Books left", value: 225 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Bar model", s: "Draw a bar for 562. Split it into 337 (borrowed) and ? (left). 562 − 337 = 225." }, { t: "Count on", s: "337 + 3 = 340, + 60 = 400, + 162 = 562. 3 + 60 + 162 = 225." }] },
        answer: "**225 books**. The whole bar is 562; one part is 337, so the other part is 562 − 337 = 225.",
        explain: "The slide says 'The school library has 562.' — 'books' has been added."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Conrad said that 0.6 and 0.60 represent different values. Is Conrad correct? Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 0.6, hint: "This is 0.6. What changes in the chart for 0.60?" },
          { kind: "choose", rows: [{ t: "Is Conrad correct?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No.** 0.6 and 0.60 are both 6 tenths. The 0 in the hundredths place adds no value. (6 tenths = 60 hundredths.)"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Which strategy would be most efficient to use when solving 146 − 88? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 88, end: 146, steps: [2, 10, 50], hint: "Try counting on: jump from 88 to a friendly number, then on to 146." },
          { kind: "input", fields: [{ label: "146 − 88 =", value: 58 }] }
        ],
        answer: "Answers vary. Counting on is efficient: 88 + 2 = 90, + 56 = 146, so 2 + 56 = **58**. Or compensate: 146 − 90 = 56, + 2 = 58."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Record the following in litres and millilitres: 1500 mL, 2700 mL, 1450 mL",
        interact: [
          { kind: "jumps", start: 0, steps: [1000, 100, 50], hint: "Each jump of 1000 mL is 1 litre." },
          { kind: "input", fields: [
            { label: "1500 mL =", value: 1, suffix: "L" }, { label: "and", value: 500, suffix: "mL" },
            { label: "2700 mL =", value: 2, suffix: "L" }, { label: "and", value: 700, suffix: "mL" },
            { label: "1450 mL =", value: 1, suffix: "L" }, { label: "and", value: 450, suffix: "mL" }] }
        ],
        answer: "1500 mL = **1 L 500 mL** · 2700 mL = **2 L 700 mL** · 1450 mL = **1 L 450 mL**. 1000 mL = 1 L."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "145 can be renamed as 13 tens and 15 ones.",
        answer: true,
        explain: "13 tens = 130 and 15 ones = 15. 130 + 15 = 145.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: { T: 13, O: 15 }, hint: "This shows 13 tens and 15 ones. Group 10 ones, then 10 tens." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Selina used a vertical algorithm to solve 247 + 328. Her teacher asked her to explain what the 1 meant in her recording. What could Selina say? Communicate your reasoning.",
        display: "247 + 328",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 247, target: 575, need: "standard", hint: "Add 3 hundreds, 2 tens and 8 ones. Watch what happens to the ones." },
          { kind: "choose", rows: [{ t: "The 1 means", options: ["1 one", "1 ten", "1 hundred"], a: 1 }] }
        ],
        answer: "7 + 8 = 15 ones. That's **1 ten** and 5 ones, so the 1 is a ten carried into the tens column. 247 + 328 = **575**.",
        explain: "The slide shows the answer as 578, but 247 + 328 = 575."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Which decimal does not belong? 0.70, 7.0, 0.7. Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 8, ticks: 1, tol: 0.3, items: [["0.70", 0.7], ["7.0", 7], ["0.7", 0.7]] },
          { kind: "choose", rows: [{ t: "Does not belong", options: ["0.70", "7.0", "0.7"], a: 1 }] }
        ],
        answer: "**7.0** does not belong. It is 7 ones. 0.70 and 0.7 are both 7 tenths."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the associative property to form multiples of 10 to solve this addition equation: 23 + 12 + 7 =",
        interact: [
          { kind: "group", items: [23, 12, 7] },
          { kind: "input", fields: [{ label: "23 + 12 + 7 =", value: 42 }] }
        ],
        answer: "**42**. Group 23 + 7 = 30 first, then 30 + 12 = 42."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Estimate the area of a regular-sized sticky note using square centimetres. Communicate your reasoning. (The yellow grid shows a sticky note covered in 1 cm squares.)",
        interact: [
          { kind: "areagrid", size: 44, cells: ["11111111", "11111111", "11111111", "11111111", "11111111", "11111111", "11111111", "11111111"] },
          { kind: "input", fields: [{ label: "About", min: 45, max: 70, suffix: "cm²" }] }
        ],
        answer: "About **56–64 cm²**. A regular sticky note is about 7.5 cm long and 7.5 cm wide, so about 8 rows of 8 squares (or 7 rows of 8).",
        explain: "Assumes a standard 76 mm × 76 mm sticky note (about 58 cm²). Estimates from 45 to 70 cm² are accepted."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "2000 + 400 + 20 + 6 and 24 hundreds + 26 ones are both representations of …",
        options: ["2426", "2406", "2026", "246"],
        answer: 0,
        explain: "2000 + 400 + 20 + 6 = 2426. 24 hundreds = 2400, and 2400 + 26 = 2426.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { H: 24, O: 26 }, hint: "This is 24 hundreds and 26 ones. Group to see the number." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Evie used a vertical algorithm to solve 699 − 96. Is this the most efficient strategy she could have used? Communicate your reasoning.",
        display: "699 − 96 = 603",
        interact: [
          { kind: "jumps", start: 699, back: true, steps: [1, 4, 100], hint: "Try a quicker way: jump back 100, then forward 4." },
          { kind: "input", fields: [{ label: "699 − 96 =", value: 603 }] }
        ],
        answer: "Answers vary. Her answer, 603, is correct, but a mental strategy is quicker: 96 is close to 100, so 699 − 100 = 599, then + 4 = 603."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Multiples of 2, 4 and 8 are highlighted in pink on the multiplication chart. Describe the relationship between these multiples.",
        interact: [
          { kind: "cells", cols: 6, msg: "Double each answer in the row above.", grid: [
            ["#×", "#1", "#2", "#3", "#4", "#5"],
            ["#2", 2, 4, 6, 8, 10],
            ["#4", { v: 4 }, { v: 8 }, { v: 12 }, { v: 16 }, { v: 20 }],
            ["#8", { v: 8 }, { v: 16 }, { v: 24 }, { v: 32 }, { v: 40 }]] },
          { kind: "choose", rows: [{ t: "Each multiple of 4 is", options: ["double", "half", "the same as"], a: 0 }, { t: "Each multiple of 8 is", options: ["double", "half", "the same as"], a: 0 }] }
        ],
        answer: "Each multiple of 4 is **double** the multiple of 2, and each multiple of 8 is **double** the multiple of 4. For example, 2 × 3 = 6, 4 × 3 = 12, 8 × 3 = 24."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Solve 72 − 59 using the most efficient strategy. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 59, end: 72, steps: [1, 2, 10], hint: "59 is close to 72. Count on from 59." },
          { kind: "input", fields: [{ label: "72 − 59 =", value: 13 }] }
        ],
        answer: "**13**. Count on: 59 + 1 = 60, + 12 = 72. 1 + 12 = 13. Or 72 − 60 = 12, + 1 = 13."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Complete the sentences. A quarter-hour is equal to ___ minutes. A half-hour is equal to ___ minutes. An hour is equal to ___ minutes.",
        interact: [
          { kind: "clock", time: "3:00", drag: true },
          { kind: "input", fields: [{ label: "Quarter-hour", value: 15, suffix: "minutes" }, { label: "Half-hour", value: 30, suffix: "minutes" }, { label: "Hour", value: 60, suffix: "minutes" }] }
        ],
        answer: "A quarter-hour is **15** minutes, a half-hour is **30** minutes and an hour is **60** minutes."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "39 tens is ten less than 400.",
        answer: true,
        explain: "39 tens = 390, and 400 − 10 = 390.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: { T: 39 }, hint: "This is 39 tens. Group 10 tens into hundreds." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Evie solved 436 − 53 using a vertical algorithm. Represent her thinking with MAB materials.",
        display: "436 − 53 = 383",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 436, target: 383, need: "standard", hint: "Take away 3 ones, then 5 tens. There aren't enough tens, so break a hundred into 10 tens." },
          { kind: "sketch" }
        ],
        answer: "6 − 3 = 3 ones. 3 tens − 5 tens can't be done, so break 1 hundred into 10 tens: 13 − 5 = 8 tens. 3 hundreds are left: **383**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw an array that shows 4 × 5. Record ways to describe your array.",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [4, 5], hint: "Build 4 rows of 5." },
          { kind: "input", fields: [{ label: "4 × 5 =", value: 20 }] }
        ],
        answer: "4 rows of 5 = **20**. It can be described as 4 × 5 = 20, 5 + 5 + 5 + 5 = 20, or turned around as 5 × 4 = 20."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record all multiplication and division facts from this array.",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "This is 3 rows of 4. Rotate it to see another fact." },
          { kind: "sentence", fields: [
            { label: "Multiplication", placeholder: "rows × columns", re: "^\\s*(3\\s*x\\s*4|4\\s*x\\s*3)\\s*=\\s*12\\s*$", msg: "Use the numbers in the array: 3, 4 and 12.", sample: "3 x 4 = 12" },
            { label: "Multiplication", placeholder: "turn it around", re: "^\\s*(3\\s*x\\s*4|4\\s*x\\s*3)\\s*=\\s*12\\s*$", msg: "Use the numbers in the array: 3, 4 and 12.", sample: "4 x 3 = 12" },
            { label: "Division", placeholder: "12 ÷ …", re: "^\\s*12\\s*[÷/]\\s*[34]\\s*=\\s*[34]\\s*$", msg: "Start with the total, 12, and share it.", sample: "12 ÷ 3 = 4" },
            { label: "Division", placeholder: "12 ÷ …", re: "^\\s*12\\s*[÷/]\\s*[34]\\s*=\\s*[34]\\s*$", msg: "Start with the total, 12, and share it.", sample: "12 ÷ 4 = 3" }] }
        ],
        answer: "3 × 4 = 12 · 4 × 3 = 12 · 12 ÷ 3 = 4 · 12 ÷ 4 = 3"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shape",
        prompt: "List quadrilaterals that have all sides equal in length.",
        interact: [{ kind: "classify", view: [900, 170],
          cats: [{ k: "eq", t: "All sides equal", c: "#22A06B" }, { k: "no", t: "Not all equal", c: "#F2994A" }],
          shapes: [
            { p: "20,40 120,40 120,140 20,140", a: "eq" },
            { p: "160,90 210,20 260,90 210,160", a: "eq" },
            { p: "300,50 450,50 450,130 300,130", a: "no" },
            { p: "530,20 580,70 530,160 480,70", a: "no" },
            { p: "620,130 660,40 780,40 740,130", a: "no" },
            { p: "800,130 830,40 860,40 890,130", a: "no" }] }],
        answer: "The **square** and the **rhombus**. A rectangle, kite, parallelogram and trapezium have sides of different lengths."
      }
    ]
  ]
});
