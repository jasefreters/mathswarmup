/*
  Stage 2 Year A, Unit 1 — Review of learning (Term 1, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 1, ls: 1, unit: 1,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 1 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing whole numbers B",
        prompt: "A collection of craft sticks is used to make the number 26. How can 26 be **partitioned** and renamed?",
        options: ["13 ones + 13 ones", "2 tens and 6 ones", "1 ten + 1 ten + 6 ones", "All of the above"],
        answer: 3,
        explain: "Each one makes 26: 13 + 13 = 26, 20 + 6 = 26, and 10 + 10 + 6 = 26.",
        interact: [{ kind: "pv", cols: ["T", "O"], start: 26 }]
      },
      {
        type: "sr", focus: "Representing whole numbers B",
        prompt: "Place 745, 860 and 805 on the number line. Which number is closest to 900, to 700 and to 800?",
        interact: [
          { kind: "numberline", min: 700, max: 900, ticks: 0.1, labelStep: 100, tol: 8, items: [["745", 745], ["860", 860], ["805", 805]] },
          { kind: "choose", rows: [
            { t: "Closest to 900", options: ["745", "860", "805"], a: 1 },
            { t: "Closest to 700", options: ["745", "860", "805"], a: 0 },
            { t: "Closest to 800", options: ["745", "860", "805"], a: 2 }] }
        ],
        answer: "Closest to 900: **860** · closest to 700: **745** · closest to 800: **805**"
      },
      {
        type: "sr", focus: "Combining and separating quantities B",
        prompt: "Record 10 combinations of 2 numbers that add to 16.",
        interact: [{ kind: "expr", count: 10, target: 16, placeholder: "e.g. 9 + 7", sample: ["0 + 16", "1 + 15", "2 + 14", "3 + 13", "4 + 12", "5 + 11", "6 + 10", "7 + 9", "8 + 8", "9 + 7"], mustUse: { re: "^\\s*\\d+\\s*\\+\\s*\\d+\\s*$", msg: "Each one needs 2 numbers added together." } }],
        answer: "For example 0 + 16, 1 + 15, 2 + 14, 3 + 13, 4 + 12, 5 + 11, 6 + 10, 7 + 9, 8 + 8, and the turnarounds like 9 + 7."
      },
      {
        type: "sr", focus: "Forming groups B",
        prompt: "Each bucket has 4 balls. Record the repeated addition number sentence and answer.",
        img: "u1-buckets.png",
        interact: [
          { kind: "pack", mode: "share", n: 3, total: 12, label: "bucket", thing: "balls", hint: "Deal the 12 balls into the 3 buckets." },
          { kind: "expr", count: 1, target: 12, placeholder: "e.g. 4 + 4 + …", sample: ["4 + 4 + 4"], mustUse: { re: "^\\s*4\\s*\\+\\s*4\\s*\\+\\s*4\\s*$", msg: "Write it as repeated addition of 4s." } }
        ],
        answer: "4 + 4 + 4 = **12** balls"
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Look at the shelves. Which object is on the:",
        img: "u1-shelf.png",
        interact: [{ kind: "choose", rows: [
          { t: "left of the basketball?", options: ["pencils", "slinky", "blocks"], a: 0 },
          { t: "right of the Rubik's cube?", options: ["doll", "connect four", "pencils"], a: 1 },
          { t: "below the teddy bear?", options: ["Rubik's cube", "pencils", "blocks"], a: 1 },
          { t: "above the slinky?", options: ["truck", "doll", "basketball"], a: 0 }] }],
        answer: "Left of the basketball: **pencils** · right of the Rubik's cube: **connect four** · below the teddy bear: **pencils** · above the slinky: **truck**"
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing whole numbers B",
        prompt: "253 can be partitioned as 2 hundreds, 5 tens and 3 ones, or as 25 tens and 3 ones.",
        answer: true,
        explain: "Break the 2 hundreds into 20 tens: 20 + 5 = 25 tens, and 3 ones. Both make 253. (The slide prints \"25 tens and 3 ones\" twice; both versions are true.)",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: 253 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Place 648, 725, 589 and 703 on the number line, from smallest to largest.",
        interact: [{ kind: "numberline", min: 500, max: 800, ticks: 0.1, labelStep: 100, tol: 10, items: [["648", 648], ["725", 725], ["589", 589], ["703", 703]] }],
        answer: "589, 648, 703, 725"
      },
      {
        type: "sr", focus: "Combining and separating quantities B",
        prompt: "The difference between 14 and 19 is the same as the difference between 25 and 30. Show the constant difference on 2 number lines.",
        interact: [
          { kind: "jumps", start: 14, end: 19, steps: [1, 5], hint: "Jump from 14 to 19." },
          { kind: "jumps", start: 25, end: 30, steps: [1, 5], hint: "Now jump from 25 to 30." },
          { kind: "input", fields: [{ label: "The difference is", value: 5 }] }
        ],
        answer: "Both jumps are **5**. Moving both numbers up by 11 keeps the difference the same."
      },
      {
        type: "sr", focus: "Forming groups B",
        prompt: "Sam has 6 plates. There are 3 cookies on each plate. Write a repeated addition number sentence to find the total number of cookies.",
        interact: [
          { kind: "pack", mode: "share", n: 6, total: 18, label: "plate", thing: "cookies", hint: "Deal the cookies onto the 6 plates until each has 3." },
          { kind: "expr", count: 1, target: 18, placeholder: "e.g. 3 + 3 + …", sample: ["3 + 3 + 3 + 3 + 3 + 3"], mustUse: { re: "^\\s*3(\\s*\\+\\s*3){5}\\s*$", msg: "Add 3 six times." } }
        ],
        cubes: { ops: ["+"], also: ["×"], solve: [{ t: "Repeated addition", s: "3 + 3 + 3 + 3 + 3 + 3 = 18 cookies." }, { t: "Double", s: "3 plates have 9 cookies. Double 9 = 18 cookies." }] },
        answer: "3 + 3 + 3 + 3 + 3 + 3 = **18** cookies"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "What is the length of the pencil? Record your answer using the abbreviation for centimetres.",
        img: "u1-pencil.png",
        interact: [
          { kind: "marker", min: 0, max: 15, ticks: 1, minor: 2, target: 11, tol: 0.3, label: "end" },
          { kind: "input", fields: [{ label: "Length", value: 11, suffix: "cm" }] }
        ],
        answer: "**11 cm** — the pencil starts at 0 and ends at 11."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing whole numbers B",
        prompt: "In the number 472, what is the value of the digit 7?",
        options: ["7", "70", "700", "7000"],
        answer: 1,
        explain: "The 7 is in the tens place: 7 tens = 70.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: 472 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Write the numbers in **ascending** order. Communicate your reasoning.",
        interact: [{ kind: "order", items: ["3428", "2915", "4072", "3056"], answer: [1, 3, 0, 2] }],
        answer: "2915, 3056, 3428, 4072 — compare the thousands first, then the hundreds."
      },
      {
        type: "sr", focus: "Combining and separating quantities B",
        prompt: "Write an addition number sentence and a subtraction number sentence to show that addition and subtraction are **inverse** operations.",
        img: "u1-bar.png",
        interact: [{ kind: "input", fields: [{ label: "8 + ? = 17", value: 9 }, { label: "17 − 8 =", value: 9 }] }],
        answer: "8 + **9** = 17 and 17 − 8 = **9**. Subtraction undoes addition."
      },
      {
        type: "sr", focus: "Forming groups B",
        prompt: "A gardener plants 5 rows of flowers with 8 flowers in each row. Build the array. If the same number of flowers go in 8 rows, how many will be in each row?",
        interact: [
          { kind: "array", rows: 1, cols: 8, target: [5, 8], hint: "Build 5 rows of 8." },
          { kind: "array", rows: 8, cols: 1, target: [8, 5], hint: "Now build 8 rows with the same number of flowers." },
          { kind: "input", fields: [{ label: "Flowers in each row", value: 5 }] }
        ],
        cubes: { ops: ["×"], also: ["÷"], solve: [{ t: "Turn the array", s: "5 rows of 8 = 40. Rotate it: 8 rows of 5 is still 40, so 5 in each row." }, { t: "Divide", s: "5 × 8 = 40 flowers, and 40 ÷ 8 = 5 in each row." }] },
        answer: "5 × 8 = 40 flowers. In 8 rows there are **5** in each row (8 × 5 = 40)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Draw 2 different shapes you could make using the triangles. Explain how the triangles were combined.",
        img: "u1-triangles.png",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "For example a square (2 triangles joined along the long side), a bigger triangle, or a parallelogram."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing whole numbers B",
        prompt: "386 can be renamed as 300 + 80 + 6 or as 38 tens and 6 ones.",
        answer: true,
        explain: "300 + 80 + 6 = 386, and 3 hundreds + 8 tens = 38 tens, so 38 tens and 6 ones is 386 too.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: 386 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Write the number that comes before and after 4072. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 4072, back: true, steps: [1], hint: "Jump back 1 and forward 1." },
          { kind: "input", fields: [{ label: "Before", value: 4071 }, { label: "After", value: 4073 }] }
        ],
        answer: "**4071** comes before and **4073** comes after: one less and one more."
      },
      {
        type: "sr", focus: "Combining and separating quantities B",
        prompt: "14 − 8 = 6. What is the related addition fact? What is the other related subtraction fact?",
        interact: [{ kind: "input", fields: [{ label: "Addition fact", accept: ["8614", "6814"], placeholder: "e.g. 8 + 6 = 14" }, { label: "Subtraction fact", accept: ["1468"], placeholder: "e.g. 14 − 6 = 8" }] }],
        answer: "8 + 6 = 14 (or 6 + 8 = 14) and 14 − 6 = 8"
      },
      {
        type: "sr", focus: "Forming groups B",
        prompt: "Explain how the arrays show the **commutative** property of multiplication. Press Rotate to turn the array.",
        interact: [{ kind: "array", rows: 5, cols: 4, showTotal: true, hint: "This is 5 rows of 4. Rotate it." }],
        answer: "5 rows of 4 and 4 rows of 5 both make 20. Turning the array doesn't change the total: 5 × 4 = 4 × 5."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Use the rows and columns to find each area. Which rectangle has the larger area?",
        interact: [
          { kind: "areagrid", cells: ["11111", "11111", "11111"] },
          { kind: "areagrid", cells: ["111111", "111111"] },
          { kind: "choose", rows: [{ t: "Larger area", options: ["the 5 by 3 rectangle", "the 6 by 2 rectangle"], a: 0 }] }
        ],
        answer: "3 rows of 5 = **15 squares**, and 2 rows of 6 = **12 squares**. The 5 by 3 rectangle is larger."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Forming groups A",
        prompt: "Which pattern counts forwards by 5s starting at 12?",
        options: ["12, 16, 20, 24, 28", "12, 17, 22, 27, 32", "12, 18, 24, 30, 36", "12, 20, 25, 30, 35"],
        answer: 1,
        explain: "12 + 5 = 17, + 5 = 22, + 5 = 27, + 5 = 32.",
        interact: [{ kind: "jumps", start: 12, steps: [5], hint: "Jump on by 5s from 12." }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "What number is shown by the MAB materials? What is the place value of each digit? Build it in the chart.",
        img: "u1-mab.png",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 0, target: 3472, need: "standard" },
          { kind: "input", fields: [{ label: "The number is", value: 3472 }] }
        ],
        answer: "**3472**: 3 thousands, 4 hundreds, 7 tens and 2 ones"
      },
      {
        type: "sr", focus: "Combining and separating B",
        prompt: "Show on the number line how Liam can build to a multiple of ten to solve 56 + 28.",
        interact: [
          { kind: "jumps", start: 56, steps: [1, 2, 4, 10, 20, 24], hint: "Jump to the next ten first, then jump the rest." },
          { kind: "input", fields: [{ label: "56 + 28 =", value: 84 }] }
        ],
        answer: "56 + 4 = 60, then 60 + 24 = **84**"
      },
      {
        type: "sr", focus: "Forming groups B",
        prompt: "There are 24 apples. If you put 6 apples in each basket, how many baskets will you need? Communicate your reasoning.",
        interact: [
          { kind: "pack", size: 6, total: 24, label: "basket", thing: "apples" },
          { kind: "input", fields: [{ value: 4, suffix: "baskets" }] }
        ],
        cubes: { ops: ["÷"], also: ["×", "−"], solve: [{ t: "Make groups of 6", s: "6, 12, 18, 24 — that's 4 groups, so 4 baskets." }, { t: "Use a multiplication fact", s: "? × 6 = 24. 4 × 6 = 24, so 4 baskets." }] },
        answer: "24 ÷ 6 = **4 baskets**"
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Today is March 10. Your school holiday begins on April 20. How many days until the holidays?",
        interact: [
          { kind: "calendar", hint: "Tap each day from March 11 up to April 20.", months: [{ name: "March 2025", start: 6, days: 31, mark: [10] }, { name: "April 2025", start: 2, days: 30, mark: [20] }] },
          { kind: "input", fields: [{ value: 41, suffix: "days" }] }
        ],
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Finish the month, then add", s: "March has 31 days: 31 − 10 = 21 days left in March. Then 20 days in April. 21 + 20 = 41 days." }, { t: "Count by weeks", s: "March 10 to April 14 is 5 weeks = 35 days. Then 6 more days to April 20: 41 days." }] },
        answer: "**41 days**"
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Forming groups A",
        prompt: "When skip counting backwards by 5s starting at 30, the next four numbers are 25, 15, 10 and 5.",
        answer: false,
        explain: "20 is missing: 30, 25, 20, 15, 10.",
        interact: [{ kind: "jumps", start: 30, back: true, steps: [5], hint: "Jump back by 5s from 30." }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record 5186 using standard place value form.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 5186 },
          { kind: "input", fields: [{ label: "5186 =", accept: ["5000100806"], placeholder: "5000 + …" }] }
        ],
        answer: "5000 + 100 + 80 + 6"
      },
      {
        type: "sr", focus: "Combining and separating B",
        prompt: "Solve 86 − 47 using a number line. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 86, back: true, steps: [1, 6, 7, 10, 40], hint: "Jump back 40, then back 7. Or jump back 6 to 80 first." },
          { kind: "input", fields: [{ label: "86 − 47 =", value: 39 }] }
        ],
        answer: "86 − 40 = 46, then 46 − 7 = **39**"
      },
      {
        type: "sr", focus: "Forming groups B",
        prompt: "There are 18 cupcakes shared equally onto 3 plates. How many cupcakes are on each plate?",
        interact: [
          { kind: "pack", mode: "share", n: 3, total: 18, label: "plate", thing: "cupcakes" },
          { kind: "input", fields: [{ value: 6, suffix: "cupcakes on each plate" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Share one at a time", s: "Deal 1 cupcake to each plate until they're all gone: 6 on each plate." }, { t: "Use a multiplication fact", s: "3 × ? = 18. 3 × 6 = 18, so 6 each." }] },
        answer: "18 ÷ 3 = **6** cupcakes on each plate"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "What time is shown on the clock? Communicate your reasoning.",
        interact: [
          { kind: "clock", time: "8:15" },
          { kind: "input", fields: [{ label: "The time is", accept: ["815", "quarterpast8", "quarterpasteight"], placeholder: "0:00" }] }
        ],
        answer: "**8:15** (quarter past 8). The short hand is just past 8 and the long hand points to 3, which is 15 minutes."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Forming groups A",
        prompt: "What number comes next in this pattern?",
        display: "12, 17, 22, 27, ___",
        options: ["31", "32", "33", "34"],
        answer: 1,
        explain: "The pattern goes up by 5: 27 + 5 = 32.",
        interact: [{ kind: "jumps", start: 12, steps: [5] }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the missing numbers in this piece of a number chart.",
        interact: [{ kind: "cells", cols: 4, grid: [[{ v: 736 }, null, null, null], [{ v: 746 }, null, null, null], [756, null, null, null], [{ v: 766 }, null, null, null], [{ v: 776 }, { v: 777 }, { v: 778 }, { v: 779 }]] }],
        answer: "Going down: 736, 746, 756, 766, 776 (+10 each row). Then across: 777, 778, 779 (+1 each)."
      },
      {
        type: "sr", focus: "Combining and separating B",
        prompt: "Use place value to separate the tens and ones to solve 79 + 33. The chart shows the tens and ones added together — regroup it.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { T: 10, O: 12 }, target: 112, need: "standard" },
          { kind: "input", fields: [{ label: "79 + 33 =", value: 112 }] }
        ],
        answer: "70 + 30 = 100, 9 + 3 = 12, 100 + 12 = **112**"
      },
      {
        type: "sr", focus: "Forming groups B",
        prompt: "There are 23 oranges. If 5 oranges are put in each basket, how many baskets are needed?",
        interact: [
          { kind: "pack", size: 5, total: 23, label: "basket", thing: "oranges" },
          { kind: "input", fields: [{ value: 5, suffix: "baskets" }] }
        ],
        cubes: { ops: ["÷"], also: ["×", "−"], solve: [{ t: "Make groups of 5", s: "4 baskets hold 20 oranges, with 3 left over. The 3 need another basket: 5 baskets." }, { t: "Count by 5s", s: "5, 10, 15, 20 is 4 baskets. 23 is more than 20, so one more basket: 5." }] },
        answer: "**5 baskets** (4 full baskets and 1 with 3 oranges)"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Describe the prism. How many faces, edges and vertices does it have?",
        img: "u1-prism.png",
        interact: [{ kind: "input", fields: [{ label: "faces", value: 6 }, { label: "edges", value: 12 }, { label: "vertices", value: 8 }] }],
        answer: "**6** faces, **12** edges, **8** vertices"
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Forming groups A",
        prompt: "In the number pattern 9, 14, 19, 24, ___, 34 the missing number is 29.",
        answer: true,
        explain: "The pattern goes up by 5: 24 + 5 = 29, and 29 + 5 = 34.",
        interact: [{ kind: "jumps", start: 9, steps: [5] }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Rearrange the 12 balls into an array. Describe it: my array is __ rows of __, which is a total of __. So __ is a multiple of __ and __.",
        img: "u1-balls.png",
        interact: [{ kind: "array", rows: 1, cols: 1, total: 12, hint: "Build an array with all 12 balls." }],
        answer: "For example 3 rows of 4, a total of 12. So 12 is a multiple of 3 and 4. (Also 2 rows of 6, or 1 row of 12.)"
      },
      {
        type: "sr", focus: "Combining and separating B",
        prompt: "Use the inverse strategy to solve $150 − $62. Record your solution on a number line.",
        interact: [
          { kind: "jumps", start: 62, end: 150, money: false, steps: [8, 10, 30, 50, 80], hint: "Count on from 62 to 150." },
          { kind: "input", fields: [{ label: "$150 − $62 =", prefix: "$", value: 88 }] }
        ],
        answer: "62 + 8 = 70, + 80 = 150. 8 + 80 = **$88**"
      },
      {
        type: "sr", focus: "Forming groups B",
        prompt: "A farmer has 18 eggs. He packs them into boxes with 4 eggs in each box. How many full boxes can he make, and how many eggs will be left over?",
        interact: [
          { kind: "pack", size: 4, total: 18, label: "box", thing: "eggs" },
          { kind: "input", fields: [{ label: "Full boxes", value: 4 }, { label: "Eggs left over", value: 2 }] }
        ],
        cubes: { ops: ["÷"], also: ["×", "−"], solve: [{ t: "Make groups of 4", s: "4, 8, 12, 16 — 4 full boxes use 16 eggs. 18 − 16 = 2 left over." }, { t: "Use a multiplication fact", s: "4 × 4 = 16 and 4 × 5 = 20 is too many. So 4 boxes, 2 left." }] },
        answer: "**4 full boxes** and **2 eggs** left over"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "An arrow is turned a quarter turn clockwise each time. After 4 turns it is back where it started. Build the repeating pattern.",
        interact: [{ kind: "turns", step: 90 }],
        answer: "Up, right, down, left, up… The pattern repeats every 4 quarter turns."
      }
    ]
  ]
});
