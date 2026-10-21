/*
  Stage 2 Year A, Unit 7 — Review of learning (Term 2, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 2, ls: 2, unit: 7,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 7 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "5768 is the same as … Tap every option that is correct.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 5768, hint: "Break and group the counters to test each option." },
          { kind: "select", items: [["576 hundreds and 8 ones", false], ["5 thousands, 7 hundreds, 6 tens and 8 ones", true], ["57 tens and 68 ones", false], ["57 hundreds, 6 tens and 8 ones", true]] }
        ],
        answer: "**B** and **D**. 57 hundreds = 5700, so 5700 + 60 + 8 = 5768. 576 hundreds and 8 ones is 57 608, and 57 tens and 68 ones is 638.",
        explain: "The slide lets students select more than one option, so this is a tap-every-correct-one question."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Using words such as each, multiple, pattern, group, increase, decrease, record the rules for this pattern.",
        img: "u7-dice.png",
        interact: [
          { kind: "jumps", start: 0, steps: [4], hint: "Each die shows 4 dots. Jump + 4 for each die in a column." },
          { kind: "input", fields: [{ label: "Column 1", value: 4 }, { label: "Column 2", value: 8 }, { label: "Column 3", value: 12 }, { label: "Column 4", value: 16 }, { label: "Column 5 would be", value: 20 }] },
          { kind: "choose", rows: [{ t: "Each column", options: ["increases by 1 die (4 dots)", "decreases by 1 die", "stays the same"], a: 0 }] }
        ],
        answer: "Each column has one more die than the one before, and each die shows 4 dots. The pattern increases by 4 each time: 4, 8, 12, 16 — the multiples of 4."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Fill in the missing numbers: 1490, ___, 1510, 1520, ___ · ___, 2437, 2537, ___, 2737 · 3499, 3399, ___, ___",
        interact: [
          { kind: "jumps", start: 1490, back: true, steps: [10, 100], hint: "Work out the jump size first: is it 10 or 100? Forwards or back?" },
          { kind: "input", fields: [{ label: "1490,", value: 1500 }, { label: "1520,", value: 1530 }, { label: "___, 2437", value: 2337 }, { label: "2537,", value: 2637 }, { label: "3399,", value: 3299 }, { label: "then", value: 3199 }] }
        ],
        answer: "1490, **1500**, 1510, 1520, **1530** (+10) · **2337**, 2437, 2537, **2637**, 2737 (+100) · 3499, 3399, **3299**, **3199** (−100)"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Write a possible list of categories for the question: What is your hair colour?",
        interact: [{ kind: "select", items: [["Black", true], ["Brown", true], ["Blonde", true], ["Red", true], ["Grey", true], ["Tall", false], ["Blue eyes", false], ["Long", false]] }],
        answer: "Answers vary, for example black, brown, blonde, red and grey. Tall, blue eyes and long don't answer the question about colour.",
        explain: "The slide is open-ended. Example categories are given to tap, and the class can add its own."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "How many millimetres are in one centimetre? What is the abbreviation for millimetres?",
        interact: [
          { kind: "marker", min: 0, max: 3, ticks: 1, minor: 10, target: 1, tol: 0.05, label: "1 cm", hint: "Slide the pin to 1 cm. Count the small marks from 0." },
          { kind: "input", fields: [{ label: "1 cm =", value: 10, suffix: "mm" }, { label: "Abbreviation", accept: ["mm"] }] }
        ],
        answer: "**10 mm** in 1 cm. The abbreviation is **mm**."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value A",
        prompt: "Using non-standard partitioning, there are no hundreds in the number 4099.",
        answer: false,
        explain: "The hundreds digit is 0, but 4 thousands can be renamed as 40 hundreds: 4099 = 40 hundreds + 99 ones. Break a thousand on the chart to see it.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 4099 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the number pattern that starts at 36 and decreases by 4.",
        interact: [
          { kind: "jumps", start: 36, min: 0, back: true, steps: [4], hint: "Jump back 4 each time." },
          { kind: "input", fields: [{ label: "36,", value: 32 }, { label: ",", value: 28 }, { label: ",", value: 24 }, { label: ",", value: 20 }, { label: ",", value: 16 }, { label: ",", value: 12 }, { label: ",", value: 8 }, { label: ",", value: 4 }, { label: ",", value: 0 }] }
        ],
        answer: "36, 32, 28, 24, 20, 16, 12, 8, 4, 0"
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Regroup these numbers using standard place value: 1322 and 7809.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1322 },
          { kind: "input", fields: [{ label: "1322 =", value: 1000 }, { label: "+", value: 300 }, { label: "+", value: 20 }, { label: "+", value: 2 }] },
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 7809 },
          { kind: "input", fields: [{ label: "7809 =", value: 7000 }, { label: "+", value: 800 }, { label: "+", value: 9 }] }
        ],
        answer: "1322 = 1000 + 300 + 20 + 2 · 7809 = 7000 + 800 + 9 (there are 0 tens)"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Some categorical responses are: read in the library, go to the canteen, play on the oval. What question might have been asked?",
        interact: [{ kind: "choose", rows: [{ t: "The question was probably", options: ["What do you do at lunch time?", "How many pets do you have?", "What is your favourite colour?", "How tall are you?"], a: 0 }] }],
        answer: "Something like **What do you do at lunch time?** Answers vary: any question about where or how students spend their breaks fits."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Estimate and determine the perimeter of this quadrilateral.",
        interact: [
          { kind: "sides", view: [260, 240], label: "Square with one side labelled 8 metres", fill: "#00B85C", poly: [[50, 50], [210, 50], [210, 210], [50, 210]],
            dims: [{ from: [50, 30], to: [210, 30], t: "8 m" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 32, suffix: "m" }] }
        ],
        answer: "**32 m**. It is a square, so all 4 sides are 8 m: 8 + 8 + 8 + 8 = 32 m (or 4 × 8).",
        explain: "Only one side is labelled. The shape is drawn as a square, so all sides are taken as 8 m."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "The number that is 10 more than 4890 is … Communicate your reasoning.",
        options: ["4900", "4880", "4800", "4990"],
        answer: 0,
        explain: "9 tens + 1 ten = 10 tens, which regroups to 1 more hundred: 4890 + 10 = 4900.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 4890 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Create an array for these eggs and describe it.",
        img: "u7-eggs.png",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [5, 4], hint: "There are 5 nests with 4 eggs in each. Build 5 rows of 4." },
          { kind: "input", fields: [{ label: "Rows", value: 5 }, { label: "In each row", value: 4 }, { label: "Eggs altogether", value: 20 }] }
        ],
        answer: "**5 rows of 4 = 20 eggs** (5 × 4 = 20). Turned around, it is 4 rows of 5."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Reorder the digits in each number to create the largest number possible: 7831, 7281, 9001. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 7831, hint: "Put the largest digit in the thousands place, then the next largest in the hundreds…" },
          { kind: "input", fields: [{ label: "7831 →", value: 8731 }, { label: "7281 →", value: 8721 }, { label: "9001 →", value: 9100 }] }
        ],
        answer: "**8731**, **8721** and **9100**. The largest digit goes in the place with the greatest value."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Complete the total column. (Data toss results: multiply each score by its frequency.)",
        interact: [{ kind: "cells", cols: 4, w: 120, msg: "Total = score × frequency.", grid: [
          ["#Score", "#Tally", "#Frequency", "#Total"],
          [0, "|||", 3, { v: 0 }],
          [10, "||", 2, { v: 20 }],
          [20, "卌 ||", 7, { v: 140 }],
          [50, "||||", 4, { v: 200 }],
          [100, "||||", 4, { v: 400 }]] }],
        answer: "0 × 3 = **0** · 10 × 2 = **20** · 20 × 7 = **140** · 50 × 4 = **200** · 100 × 4 = **400**. Altogether 760 points.",
        explain: "The slide doesn't say how to find the total. It is read as score × frequency, the points scored for each row."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Gabby said a rhombus has two pairs of parallel sides, all sides are not equal, but the opposite angles are equal. Is she right? Communicate your thinking.",
        interact: [
          { kind: "corners", view: [320, 200], r: 24, q: 30, shapes: [{ p: [[116, 30], [286, 30], [190, 170], [20, 170]], fill: "#C2185B", l: "rhombus" }], hint: "Tap opposite corners to compare their angles." },
          { kind: "choose", rows: [
            { t: "Two pairs of parallel sides", options: ["true", "false"], a: 0 },
            { t: "All sides are not equal", options: ["true", "false"], a: 1 },
            { t: "Opposite angles are equal", options: ["true", "false"], a: 0 },
            { t: "Is Gabby right?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No.** A rhombus does have two pairs of parallel sides and equal opposite angles, but all four of its sides **are** equal."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value A",
        prompt: "6589 is 100 less than 6489. Communicate your reasoning.",
        answer: false,
        explain: "6589 has 5 hundreds and 6489 has 4 hundreds, so 6589 is 100 more than 6489.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 6489 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record multiples of 2 and 4. What do you notice about the multiples of 4 compared to the multiples of 2?",
        interact: [
          { kind: "numchart", from: 1, to: 40, answer: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40], hint: "Count by 2s first, then tap the multiples of 4." },
          { kind: "choose", rows: [{ t: "The multiples of 4 are", options: ["every second multiple of 2", "not multiples of 2", "odd numbers"], a: 0 }] }
        ],
        answer: "Multiples of 2: 2, 4, 6, 8, 10 … Multiples of 4: 4, 8, 12, 16 … Every multiple of 4 is also a multiple of 2: it is every second one, because 4 is double 2."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Partition these numbers using non-standard forms: 2009 and 6789.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 2009, target: 2009, need: "nonstandard" },
          { kind: "expr", count: 1, target: 2009, placeholder: "e.g. 1900 + 109", mustUse: { re: "[1-9][\\d ]*[1-9]", msg: "That's the standard partition. Rename some places, like 19 hundreds." }, sample: ["1900 + 109"] },
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 6789, target: 6789, need: "nonstandard" },
          { kind: "expr", count: 1, target: 6789, placeholder: "e.g. 6700 + 89", mustUse: { re: "[1-9][\\d ]*[1-9]", msg: "That's the standard partition. Rename some places, like 67 hundreds." }, sample: ["6700 + 89"] }
        ],
        answer: "Answers vary, for example 2009 = 19 hundreds + 109 ones (1900 + 109) and 6789 = 67 hundreds + 89 ones (6700 + 89)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "List the attributes of a dot plot.",
        interact: [{ kind: "select", items: [["A title", true], ["A number line or category axis along the bottom", true], ["One dot for each piece of data", true], ["Dots stacked evenly in columns", true], ["Bars joined by a line", false], ["A key showing a picture worth many items", false]] }],
        answer: "A dot plot has a title, a labelled axis (number line or categories), one dot for each piece of data, and dots stacked in evenly spaced columns."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Today is the first day of October. Jessica's birthday is on Monday 20 October. How many days until Jessica's birthday?",
        interact: [
          { kind: "calendar", hint: "Today is 1 October. Tap each day from 2 October to the birthday.", months: [{ name: "October", start: 3, days: 31, mark: [1, 20] }] },
          { kind: "input", fields: [{ label: "Days until her birthday", value: 19 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on the calendar", s: "From 1 October, count each day: 2, 3, 4 … 20. That's 19 days." }, { t: "Subtract the dates", s: "20 − 1 = 19 days." }] },
        answer: "**19 days** (20 − 1 = 19)."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Complete the pattern: 27, 23, 19, __ Communicate your reasoning.",
        options: ["12", "15", "13", "23"],
        answer: 1,
        explain: "The pattern decreases by 4 each time: 19 − 4 = 15.",
        interact: [{ kind: "jumps", start: 27, min: 10, back: true, steps: [4], hint: "How far is each jump?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Halve the number of blocks and create a matching division equation.",
        img: "u7-blocks.png",
        interact: [
          { kind: "pack", mode: "share", n: 2, total: 12, thing: "blocks", label: "half", hint: "The front shows 4 rows of 3 = 12 blocks. Share them into 2 halves." },
          { kind: "input", fields: [{ label: "Half of 12 =", value: 6 }, { label: "12 ÷ 2 =", value: 6 }] }
        ],
        answer: "Half of 12 is **6**: 12 ÷ 2 = 6.",
        explain: "The picture shows the front face of the stack: 4 rows of 3, which is 12 blocks."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Identify the number of thousands, hundreds, tens and ones in this representation.",
        img: "u7-mab.png",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 2, T: 13, O: 5 }, target: 2135, need: "standard", hint: "This is the picture: 2 thousands, 13 tens and 5 ones. Group 10 tens to make a hundred." },
          { kind: "input", fields: [{ label: "Thousands", value: 2 }, { label: "Hundreds", value: 0 }, { label: "Tens", value: 13 }, { label: "Ones", value: 5 }, { label: "The number is", value: 2135 }] }
        ],
        answer: "2 thousands, 0 hundreds, 13 tens and 5 ones. Grouping 10 tens into a hundred gives **2135**: 2 thousands, 1 hundred, 3 tens and 5 ones.",
        explain: "The picture shows 2 thousand cubes, 13 ten rods (11 + 2) and 5 ones, with no hundred flats."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "List the attributes of a column graph.",
        interact: [{ kind: "select", items: [["A title", true], ["Labels on both axes", true], ["A scale with even steps", true], ["Columns of equal width with gaps between", true], ["One dot for each piece of data", false], ["Columns touching with no gaps", false]] }],
        answer: "A column graph has a title, labelled axes, a scale with even steps, and columns of equal width with even gaps between them."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Jamie said it was quarter past 7. Is he correct? Explain your thinking.",
        interact: [
          { kind: "clock", time: "7:45", drag: true },
          { kind: "choose", rows: [{ t: "Is Jamie correct?", options: ["Yes", "No"], a: 1 }, { t: "The time is", options: ["quarter past 7", "quarter to 8", "half past 7", "quarter to 7"], a: 1 }] }
        ],
        answer: "**No.** The minute hand points to the 9, which is 45 minutes past, and the hour hand is nearly at 8. It is **quarter to 8** (7:45)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The number pattern decreases by 4: 78, 74, 70, 66",
        answer: true,
        explain: "78 − 4 = 74, 74 − 4 = 70, 70 − 4 = 66.",
        interact: [{ kind: "jumps", start: 78, min: 60, back: true, steps: [4] }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the multiplication fact family for the numbers 32 and 40.",
        interact: [
          { kind: "array", rows: 4, cols: 8, showTotal: true, hint: "Try 4 rows of 8 for 32, then change it to 5 rows of 8 for 40. Rotate to see the turnaround fact." },
          { kind: "sentence", fields: [
            { label: "32: multiply", placeholder: "e.g. 4 × 8 = 32", re: "^\\s*\\d+\\s*x\\s*\\d+\\s*=\\s*32\\s*$", msg: "Write a multiplication that makes 32.", sample: "4 x 8 = 32" },
            { label: "32: turnaround", placeholder: "e.g. 8 × 4 = 32", re: "^\\s*\\d+\\s*x\\s*\\d+\\s*=\\s*32\\s*$", msg: "Swap the two numbers you multiplied.", sample: "8 x 4 = 32" },
            { label: "32: divide", placeholder: "e.g. 32 ÷ 4 = 8", re: "^\\s*32\\s*÷\\s*\\d+\\s*=\\s*\\d+\\s*$", msg: "Start with 32 ÷ …", sample: "32 ÷ 4 = 8" },
            { label: "32: divide", placeholder: "e.g. 32 ÷ 8 = 4", re: "^\\s*32\\s*÷\\s*\\d+\\s*=\\s*\\d+\\s*$", msg: "Start with 32 ÷ …", sample: "32 ÷ 8 = 4" },
            { label: "40: multiply", placeholder: "e.g. 5 × 8 = 40", re: "^\\s*\\d+\\s*x\\s*\\d+\\s*=\\s*40\\s*$", msg: "Write a multiplication that makes 40.", sample: "5 x 8 = 40" },
            { label: "40: turnaround", placeholder: "e.g. 8 × 5 = 40", re: "^\\s*\\d+\\s*x\\s*\\d+\\s*=\\s*40\\s*$", msg: "Swap the two numbers you multiplied.", sample: "8 x 5 = 40" },
            { label: "40: divide", placeholder: "e.g. 40 ÷ 5 = 8", re: "^\\s*40\\s*÷\\s*\\d+\\s*=\\s*\\d+\\s*$", msg: "Start with 40 ÷ …", sample: "40 ÷ 5 = 8" },
            { label: "40: divide", placeholder: "e.g. 40 ÷ 8 = 5", re: "^\\s*40\\s*÷\\s*\\d+\\s*=\\s*\\d+\\s*$", msg: "Start with 40 ÷ …", sample: "40 ÷ 8 = 5" }] }
        ],
        answer: "Answers vary. 32: 4 × 8 = 32, 8 × 4 = 32, 32 ÷ 4 = 8, 32 ÷ 8 = 4. 40: 5 × 8 = 40, 8 × 5 = 40, 40 ÷ 5 = 8, 40 ÷ 8 = 5.",
        explain: "The slide's triangles don't show the other two numbers, so any factor pair is accepted (for example 4 and 10 for 40)."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the bridging strategy to solve 47 + 35. Record your thinking on an empty number line.",
        interact: [
          { kind: "jumps", start: 47, steps: [3, 10, 30, 2], hint: "Jump to the next ten first (+3), then add the rest." },
          { kind: "input", fields: [{ label: "47 + 35 =", value: 82 }] }
        ],
        answer: "**82**. 47 + 3 = 50, then 50 + 32 = 82."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Record the missing tally marks. How do students travel to school most days? Car 12, Bike 3, Walk 4, Public transport 8, Scooter 3.",
        interact: [
          { kind: "tally", counts: true, rows: [{ l: "Car (12)", a: 12 }, { l: "Bike (3)", a: 3 }, { l: "Walk (4)", a: 4 }, { l: "Public transport (8)", a: 8 }, { l: "Scooter (3)", a: 3 }] },
          { kind: "input", fields: [{ label: "Car: groups of 5", value: 2 }, { label: "and single marks", value: 2 }] }
        ],
        answer: "Car: 卌 卌 || (12) · Bike: ||| · Walk: |||| · Public transport: 卌 ||| (8) · Scooter: |||. Every fifth mark crosses a group of 4."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "How many faces, edges and vertices does this three-dimensional object have?",
        img: "u7-prism.png",
        interact: [
          { kind: "choose", rows: [{ t: "This object is a", options: ["cube", "rectangular prism", "triangular prism", "pyramid"], a: 1 }] },
          { kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 12 }, { label: "Vertices", value: 8 }] }
        ],
        answer: "A rectangular prism has **6 faces**, **12 edges** and **8 vertices**."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "76, 68, __, 52, __, 36. The number pattern:",
        options: ["increases by 8 each time", "decreases by 8 each time", "increases by 9 each time", "decreases by 7 each time"],
        answer: 1,
        explain: "76 − 8 = 68, so the missing numbers are 60 and 44.",
        interact: [{ kind: "jumps", start: 76, min: 30, back: true, steps: [7, 8, 9] }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw an array of 6 rows of 6. Next, record the related multiplication and division facts for the array.",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [6, 6], showTotal: true, hint: "Build 6 rows of 6." },
          { kind: "input", fields: [{ label: "6 × 6 =", value: 36 }, { label: "36 ÷ 6 =", value: 6 }] }
        ],
        answer: "6 × 6 = **36** and 36 ÷ 6 = **6**. Because both factors are 6, the turnaround facts are the same, so there are only 2 different facts.",
        explain: "The slide asks for 4 related facts, but a 6 by 6 array only gives 2 different facts. This is worth discussing with the class."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the constant difference strategy to solve 62 − 18.",
        interact: [
          { kind: "scale", left: "62 − 18", right: "64 − ?", answer: 20 },
          { kind: "input", fields: [{ label: "62 − 18 =", value: 44 }] }
        ],
        answer: "**44**. Add 2 to both numbers: 64 − 20 = 44. The difference stays the same."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is the difference between animal species on the IUCN Red List from 2007 to 2010? Which year saw the largest increase of animals on the list?",
        interact: [
          { kind: "bargraph", max: 20000, step: 5000, xlabel: "Year (number of animal species on the IUCN Red List)", label: "Number of animal species on the IUCN Red List",
            series: [{ l: "Species", c: "#F26C0D" }],
            groups: [{ l: "2007", v: [7851] }, { l: "2010", v: [9618] }, { l: "2013", v: [11212] }, { l: "2016", v: [12630] }, { l: "2019", v: [14234] }, { l: "2022", v: [16900] }] },
          { kind: "input", fields: [{ label: "2007 to 2010 difference", value: 1767 }] },
          { kind: "choose", rows: [{ t: "Largest increase", options: ["2010", "2013", "2016", "2019", "2022"], a: 4 }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Count up", s: "7851 + 149 = 8000, + 1618 = 9618. 149 + 1618 = 1767." }, { t: "Compare each jump", s: "+1767, +1594, +1418, +1604, +2666. The biggest jump is 2019 to 2022." }] },
        answer: "9618 − 7851 = **1767** more species. The largest increase was **2022** (from 14 234 to 16 900, +2666).",
        explain: "The graph values are read from the labels on the slide's bars. 2022 is preliminary data."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "What shape am I? Draw and label the shapes to match the clues. 1. I have eight straight sides and eight angles. You might see me on a STOP sign! 2. I have straight sides. I have fewer sides than a square. I have three corners. 3. I am a two-dimensional shape with six sides and six angles.",
        interact: [
          { kind: "sketch" },
          { kind: "choose", rows: [
            { t: "Clue 1", options: ["hexagon", "octagon", "triangle", "pentagon"], a: 1 },
            { t: "Clue 2", options: ["hexagon", "octagon", "triangle", "pentagon"], a: 2 },
            { t: "Clue 3", options: ["hexagon", "octagon", "triangle", "pentagon"], a: 0 }] }
        ],
        answer: "1. **Octagon** · 2. **Triangle** · 3. **Hexagon**"
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "36, 42, 48 and 52 are all multiples of 6. Communicate your reasoning.",
        answer: false,
        explain: "36, 42 and 48 are multiples of 6, but 52 is not: 48 + 6 = 54.",
        interact: [{ kind: "numchart", from: 30, to: 60, answer: [30, 36, 42, 48, 54, 60], hint: "Tap the multiples of 6." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "8 × __ = 64 · 64 ÷ 8 = __ Communicate your reasoning.",
        interact: [
          { kind: "array", rows: 8, cols: 1, fixCols: false, showTotal: true, hint: "8 rows. How many in each row to make 64?" },
          { kind: "input", fields: [{ label: "8 ×", value: 8, suffix: "= 64" }, { label: "64 ÷ 8 =", value: 8 }] }
        ],
        answer: "**8** both times. 8 × 8 = 64, so 64 ÷ 8 = 8. Multiplication and division are inverse operations."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record number sentences for this bar model showing how addition and subtraction are inverse operations.",
        interact: [
          { kind: "bar", whole: { v: 77, l: "77" }, parts: [{ v: 13, l: "13" }, { v: 64, l: "64", hide: true }] },
          { kind: "sentence", fields: [
            { label: "Addition", placeholder: "e.g. 13 + 64 = 77", re: "^\\s*(13\\s*\\+\\s*64|64\\s*\\+\\s*13)\\s*=\\s*77\\s*$", msg: "Add the two parts to make 77.", sample: "13 + 64 = 77" },
            { label: "Subtraction", placeholder: "e.g. 77 − 13 = 64", re: "^\\s*77\\s*-\\s*(13|64)\\s*=\\s*(64|13)\\s*$", msg: "Start with the whole, 77, and take away a part.", sample: "77 - 13 = 64" }] }
        ],
        answer: "The missing part is 64. 13 + 64 = 77, 64 + 13 = 77, 77 − 13 = 64, 77 − 64 = 13."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "A group of students were asked, 'How many pets do you have at home?'. The responses were: 0, 0, 0, 1, 1, 3, 3, 3, 5, 5, 4, 4, 5, 6, 6. What effective ways could this data be displayed? Communicate your reasoning.",
        interact: [
          { kind: "tally", counts: true, rows: [{ l: "0 pets" }, { l: "1 pet" }, { l: "2 pets" }, { l: "3 pets" }, { l: "4 pets" }, { l: "5 pets" }, { l: "6 pets" }], hint: "Tally the responses first." },
          { kind: "select", items: [["Tally chart or table", true], ["Dot plot", true], ["Column graph", true], ["Picture graph", true], ["A list of names", false]] }
        ],
        answer: "A tally chart or table, a dot plot, a column graph or a picture graph would all work. 0: 3, 1: 2, 2: 0, 3: 3, 4: 2, 5: 3, 6: 2 (15 students)."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Record if these events are likely or unlikely to occur: The school bell will ring at the end of the day. I will go to the library today. I will brush my teeth tonight.",
        interact: [{ kind: "choose", rows: [
          { t: "The school bell will ring at the end of the day", options: ["likely", "unlikely"], a: 0 },
          { t: "I will go to the library today", options: ["likely", "unlikely"], a: [0, 1] },
          { t: "I will brush my teeth tonight", options: ["likely", "unlikely"], a: 0 }] }],
        answer: "Bell: **likely**. Library: depends on the day — likely on your library day, otherwise unlikely. Brushing teeth: **likely**.",
        explain: "Whether going to the library is likely depends on the class timetable, so either answer is accepted."
      }
    ]
  ]
});
