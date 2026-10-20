/*
  Stage 2 Year A, Unit 3 — Review of learning (Term 1, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 1, ls: 3, unit: 3,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 3 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "How is the number 2046 read correctly?",
        options: ["Two thousand four hundred and sixty", "Two hundred and forty-six", "Two thousand and forty-six", "Two thousand and sixty-four"],
        answer: 2,
        explain: "2 thousands, 0 hundreds, 4 tens and 6 ones: two thousand and forty-six.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 2046 }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record something you would measure in centimetres and something you would measure in metres.",
        interact: [{ kind: "choose", rows: [
          { t: "a pencil", options: ["cm", "m"], a: 0 },
          { t: "the length of the classroom", options: ["cm", "m"], a: 1 },
          { t: "a reading book", options: ["cm", "m"], a: 0 },
          { t: "a football field", options: ["cm", "m"], a: 1 }] }],
        answer: "Answers vary. Centimetres for small things, like a pencil or a book. Metres for long things, like the classroom or a football field."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Find the missing numbers: 13 + 8 = 12 + __ · 25 − 14 = 15 − __ · 5 + 6 = 10 + __",
        interact: [
          { kind: "scale", left: "13 + 8", right: "12 + ?", answer: 9 },
          { kind: "scale", left: "25 − 14", right: "15 − ?", answer: 4 },
          { kind: "scale", left: "5 + 6", right: "10 + ?", answer: 1 }
        ],
        answer: "13 + 8 = 12 + **9** (21) · 25 − 14 = 15 − **4** (11) · 5 + 6 = 10 + **1** (11)"
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Rename 4 groups of 100, 3 groups of 10 and 6 ones.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { H: 4, T: 3, O: 6 } },
          { kind: "input", fields: [{ label: "The number is", value: 436 }] }
        ],
        answer: "**436**. 400 + 30 + 6 = 436."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Sketch a simple map to go from your classroom to the office.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "Answers vary. Show the classroom and the office, draw the path between them, and add landmarks (for example the library or the canteen) and directions such as turn left or go straight ahead."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value A",
        prompt: "These numbers are in ascending order: 1013, 1021, 1012",
        answer: false,
        explain: "Ascending means smallest to largest. 1012 is the smallest, so the order is 1012, 1013, 1021.",
        interact: [{ kind: "numberline", min: 1010, max: 1022, ticks: 1, labelStep: 2, tol: 0.4, items: [["1013", 1013], ["1021", 1021], ["1012", 1012]] }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record the lengths of the box and the table using the abbreviations m and cm.",
        img: "u3-boxtable.png",
        interact: [{ kind: "input", fields: [{ label: "Box", min: 54, max: 56, suffix: "cm" }, { label: "Table", value: 1, suffix: "m" }, { label: "and", min: 6, max: 8, suffix: "cm" }] }],
        answer: "The box is about **55 cm**. The table is about **1 m 7 cm** (107 cm): the metre ruler reaches 100 cm, and the second ruler shows 7 cm more.",
        explain: "Read from the picture: the box ends at about 55 cm, and the table ends at about 7 cm on the second ruler, so these lengths are approximate."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Complete the number sentences: 18 = 10 + __ · 25 + 5 = __ + 15",
        interact: [
          { kind: "scale", left: "18", right: "10 + ?", answer: 8 },
          { kind: "scale", left: "25 + 5", right: "? + 15", answer: 15 }
        ],
        answer: "18 = 10 + **8** · 25 + 5 = **15** + 15 (both sides are 30)"
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record the numbers that are before and after: __, 109, __ · __, 119, __",
        interact: [
          { kind: "jumps", start: 109, back: true, steps: [1], hint: "Jump back 1 and forward 1 from 109." },
          { kind: "input", fields: [{ label: "Before 109", value: 108 }, { label: "After 109", value: 110 }, { label: "Before 119", value: 118 }, { label: "After 119", value: 120 }] }
        ],
        answer: "**108**, 109, **110** · **118**, 119, **120**"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Which is longer, 168 cm or 1 metre and 40 cm? Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 200, ticks: 0.1, labelStep: 50, tol: 6, items: [["168 cm", 168], ["1 m 40 cm", 140]] },
          { kind: "choose", rows: [{ t: "Longer", options: ["168 cm", "1 m 40 cm"], a: 0 }] }
        ],
        answer: "**168 cm** is longer. 1 metre and 40 cm is 100 cm + 40 cm = 140 cm, and 168 cm > 140 cm."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "Which number is missing in this counting sequence? 1009, 1010, ___, 1012, 1013",
        options: ["111", "1011", "10011", "1101"],
        answer: 1,
        explain: "Counting on by 1: 1010, 1011, 1012.",
        interact: [{ kind: "jumps", start: 1009, end: 1013, steps: [1], hint: "Jump on by 1 from 1009." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record 3 items that would be about 30 cm long.",
        interact: [{ kind: "select", hint: "Tap the items that are about 30 cm long.", items: [["a school ruler", true], ["a sheet of A4 paper (long side)", true], ["a car", false], ["an eraser", false], ["a laptop", true], ["a door", false]] }],
        answer: "Answers vary, for example a school ruler (30 cm), the long side of a sheet of A4 paper (about 30 cm) or a laptop."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Find the missing number in the bar model. Record 3 different number sentences.",
        interact: [
          { kind: "bar", whole: { v: 80, l: "80" }, parts: [{ v: 55, l: "55" }, { v: 25, l: "25", hide: true }] },
          { kind: "input", fields: [{ label: "Missing number", value: 25 }] },
          { kind: "sentence", fields: [
            { label: "Sentence 1", placeholder: "e.g. 55 + 25 = 80", re: "^(?=.*\\b80\\b)(?=.*\\b55\\b)(?=.*\\b25\\b)", msg: "Use the numbers 80, 55 and 25.", sample: "55 + 25 = 80" },
            { label: "Sentence 2", placeholder: "e.g. 80 − 55 = 25", re: "^(?=.*\\b80\\b)(?=.*\\b55\\b)(?=.*\\b25\\b)", msg: "Use the numbers 80, 55 and 25.", sample: "80 - 55 = 25" },
            { label: "Sentence 3", placeholder: "e.g. 80 − 25 = 55", re: "^(?=.*\\b80\\b)(?=.*\\b55\\b)(?=.*\\b25\\b)", msg: "Use the numbers 80, 55 and 25.", sample: "80 - 25 = 55" }] }
        ],
        answer: "The missing number is **25**. 55 + 25 = 80 · 25 + 55 = 80 · 80 − 55 = 25 · 80 − 25 = 55"
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "547: How many hundreds are in this number? What does the digit in the tens place represent? What is the value of the digit in the ones place?",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 547 },
          { kind: "input", fields: [{ label: "Hundreds", value: 5 }, { label: "The tens digit represents", value: 40 }, { label: "Value of the ones digit", value: 7 }] }
        ],
        answer: "**5 hundreds** · the 4 represents **40** (4 tens) · the 7 is worth **7** ones."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Tayla combined 3 shapes to make a rectangle. Which shapes did Tayla use?",
        interact: [
          { kind: "classify", view: [460, 210], hint: "Choose a shape name, then tap each part of the rectangle that is that shape.",
            cats: [{ k: "tri", t: "Triangle", c: "#F2994A" }, { k: "par", t: "Parallelogram", c: "#2F6FE4" }, { k: "sq", t: "Square", c: "#22A06B" }],
            shapes: [
              { p: "15,15 207,15 15,200", a: "tri", fill: "#F07F2F" },
              { p: "207,15 445,15 255,200 15,200", a: "par", fill: "#55B0FA" },
              { p: "445,15 445,200 255,200", a: "tri", fill: "#EF4136", deco: "<rect x='15' y='15' width='430' height='185' fill='none' stroke='#17233F' stroke-width='4' pointer-events='none'/>" }] },
          { kind: "choose", rows: [{ t: "Tayla used", options: ["3 triangles", "2 triangles and a parallelogram", "2 triangles and a square", "a rectangle and 2 triangles"], a: 1 }] }
        ],
        answer: "**2 triangles and a parallelogram**: an orange triangle, a blue parallelogram and a red triangle."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value A",
        prompt: "24 hundreds is the same as 2000 and 4 hundreds.",
        answer: true,
        explain: "10 hundreds make 1 thousand, so 20 hundreds = 2000. 24 hundreds = 2000 + 400 = 2400.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { H: 24 } }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "How many millimetres are there in 1 cm, 2 cm, 5 cm and 10 cm?",
        interact: [
          { kind: "jumps", start: 0, end: 100, steps: [10], hint: "Each jump of 10 mm is 1 cm." },
          { kind: "input", fields: [{ label: "1 cm =", value: 10, suffix: "mm" }, { label: "2 cm =", value: 20, suffix: "mm" }, { label: "5 cm =", value: 50, suffix: "mm" }, { label: "10 cm =", value: 100, suffix: "mm" }] }
        ],
        answer: "**10 mm**, **20 mm**, **50 mm** and **100 mm**. There are 10 mm in every centimetre."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Draw a number line to find the difference between 25 and 108. Record your answer.",
        interact: [
          { kind: "jumps", start: 25, end: 108, steps: [5, 8, 10, 70], hint: "Jump to the next ten, then to 100, then to 108." },
          { kind: "input", fields: [{ label: "Difference", value: 83 }] }
        ],
        answer: "**83**. 25 + 5 = 30, + 70 = 100, + 8 = 108. 5 + 70 + 8 = 83."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record the numbers in order from smallest to largest: 97, 103, 1009, 745",
        interact: [{ kind: "order", items: ["97", "103", "1009", "745"], answer: [0, 1, 3, 2] }],
        answer: "97, 103, 745, 1009"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Complete this sentence: I can use a grid of rows and columns to find the area because…",
        interact: [
          { kind: "areagrid", cells: ["111", "111"] },
          { kind: "choose", rows: [{ t: "because…", options: ["it splits the shape into equal squares I can count", "it shows how long each side is", "it makes the shape bigger"], a: 0 }] }
        ],
        answer: "Answers vary: …it splits the shape into equal squares that I can count. This grid has 2 rows of 3, so the area is **6 squares**."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which calculation does this number line represent? It starts at 153, makes a jump of 100 back to 53, then a jump of 1 to 54.",
        options: ["153 + 99", "153 − 99", "99 + 54", "53 + 100"],
        answer: 1,
        explain: "To take away 99, take away 100 (to 53) and add 1 back (to 54). 153 − 99 = 54.",
        interact: [{ kind: "jumps", start: 153, min: 40, back: true, steps: [1, 100], hint: "Start at 153. Jump back 100, then forward 1." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "How long is this paperclip? Record using mm.",
        img: "u3-paperclip.png",
        interact: [
          { kind: "jumps", start: 0, end: 70, steps: [10], hint: "Count along the ruler in jumps of 10 mm (1 cm)." },
          { kind: "input", fields: [{ label: "Length", min: 68, max: 71, suffix: "mm" }] }
        ],
        answer: "**70 mm** (7 cm). The paperclip starts at 0 and ends at 7 cm, and 7 cm = 70 mm."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the compensation strategy to complete 90 − 28 = __. Explain your reasoning.",
        interact: [
          { kind: "jumps", start: 90, min: 55, back: true, steps: [2, 30], hint: "Take away 30 instead of 28, then add 2 back." },
          { kind: "input", fields: [{ label: "90 − 28 =", value: 62 }] }
        ],
        answer: "**62**. 90 − 30 = 60. I took away 2 too many, so add 2 back: 60 + 2 = 62."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record the following numbers in numerals: one hundred and three · one thousand and forty-seven · two hundred and sixty",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 0, hint: "Build each number on the chart. Use 0 for an empty place." },
          { kind: "input", fields: [{ label: "one hundred and three", value: 103 }, { label: "one thousand and forty-seven", value: 1047 }, { label: "two hundred and sixty", value: 260 }] }
        ],
        answer: "**103** · **1047** · **260**"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "It is Saturday 4 September. How many weeks until Saturday 25 September?",
        interact: [
          { kind: "calendar", hint: "Start on Saturday 4. Tap each Saturday until the 25th.", months: [{ name: "September", start: 3, days: 30, mark: [4, 25] }] },
          { kind: "input", fields: [{ label: "Weeks", value: 3 }] }
        ],
        answer: "**3 weeks**. Saturday 4 → 11 → 18 → 25: each jump is 7 days, and there are 3 jumps."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Maddie says: \"37 + 19 is the same as 37 + 20 (67) minus 2.\" Maddie has used the compensation strategy correctly.",
        answer: false,
        explain: "19 is 1 less than 20, so she should subtract 1, not 2. Also 37 + 20 = 57, not 67. 37 + 19 = 57 − 1 = 56.",
        interact: [{ kind: "jumps", start: 37, back: true, steps: [1, 20], hint: "Jump + 20 from 37, then back 1." }]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "What is the perimeter in cm and mm?",
        interact: [
          { kind: "sides", label: "Rectangle, 15 cm by 5 cm", view: [470, 190], fill: "#D2ECFC",
            poly: [[30, 50], [390, 50], [390, 170], [30, 170]],
            dims: [{ from: [32, 32], to: [388, 32] }, { from: [410, 52], to: [410, 168] }],
            labels: [{ x: 210, y: 22, t: "15 cm" }, { x: 420, y: 116, t: "5 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 40, suffix: "cm" }, { label: "Perimeter", value: 400, suffix: "mm" }] }
        ],
        answer: "15 + 5 + 15 + 5 = **40 cm**, which is **400 mm** (40 × 10).",
        explain: "Only two sides are labelled. In a rectangle the opposite sides are the same length."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the levelling strategy to complete 27 + 28 = __ and 36 + 44 = __. Explain your reasoning.",
        interact: [
          { kind: "scale", left: "36 + 44", right: "40 + ?", answer: 40 },
          { kind: "input", fields: [{ label: "27 + 28 =", value: 55 }, { label: "36 + 44 =", value: 80 }] }
        ],
        answer: "27 + 28: level to 27 + 27 + 1 = 54 + 1 = **55**. 36 + 44: move 4 across to make 40 + 40 = **80**."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "What does the 2 represent in this number? 4123",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 4123 },
          { kind: "input", fields: [{ label: "The 2 represents", value: 20 }] }
        ],
        answer: "**20** (2 tens). The 2 is in the tens place."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Record different ways to show a quarter past 3.",
        interact: [
          { kind: "clock", time: "3:00", drag: true },
          { kind: "select", hint: "Tap every way that shows a quarter past 3.", items: [["3:15", true], ["15 minutes past 3", true], ["3:45", false], ["a quarter to 3", false], ["half past 3", false]] }
        ],
        answer: "3:15, 15 minutes past 3, and a clock with the long hand on the 3 and the short hand just past the 3."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "127 − 29 =",
        options: ["99", "98", "97", "96"],
        answer: 1,
        explain: "127 − 30 = 97. 29 is 1 less than 30, so add 1 back: 98.",
        interact: [{ kind: "bar", whole: { v: 127, l: "127" }, parts: [{ v: 98, l: "98", hide: true }, { v: 29, l: "29" }] }]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Calculate and record the perimeter of this shape.",
        interact: [
          { kind: "sides", label: "Parallelogram with sides of 14 metres and 9 metres", view: [350, 430], fill: "#F473C6",
            poly: [[30, 67], [250, 20], [250, 337], [30, 385]],
            dims: [{ from: [272, 22], to: [272, 335] }, { from: [34, 405], to: [254, 357] }],
            labels: [{ x: 280, y: 182, t: "14 m", anchor: "start" }, { x: 152, y: 418, t: "9 m" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 46, suffix: "m" }] }
        ],
        answer: "14 + 9 + 14 + 9 = **46 metres**.",
        explain: "Only two sides are labelled. The shape is a parallelogram, so the opposite sides are the same length."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Blair has 74 marbles, and she gives 36 to Phil. How many does Blair have left? Draw a tape diagram to record your answer.",
        interact: [
          { kind: "bar", whole: { v: 74, l: "74", n: "marbles" }, parts: [{ v: 36, l: "36", n: "to Phil" }, { v: 38, l: "38", n: "left", hide: true }] },
          { kind: "jumps", start: 74, min: 30, back: true, steps: [1, 4, 6, 30], hint: "Start at 74. Jump back 30, then back 6." },
          { kind: "input", fields: [{ label: "Blair has", value: 38, suffix: "marbles" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Jump back", s: "74 − 30 = 44, 44 − 6 = 38." }, { t: "Count on", s: "36 + 4 = 40, + 34 = 74. 4 + 34 = 38." }] },
        answer: "**38 marbles**. The whole tape is 74; one part is 36, so the other part is 74 − 36 = 38."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "What number patterns do you see in this calendar?",
        interact: [
          { kind: "calendar", hint: "Tap the numbers in one column. What do you notice?", months: [{ name: "September", start: 3, days: 30 }] },
          { kind: "choose", rows: [
            { t: "Going down a column, each number is", options: ["1 more", "7 more", "10 more"], a: 1 },
            { t: "Going along a row, each number is", options: ["1 more", "7 more", "10 more"], a: 0 }] }
        ],
        answer: "Answers vary. Down each column the numbers go up by **7** (one week). Along each row they go up by **1**. The numbers alternate odd and even."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Describe this triangular prism using the terms face, edge and vertex.",
        img: "u3-prism.png",
        interact: [
          { kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Edges", value: 9 }, { label: "Vertices", value: 6 }] },
          { kind: "choose", rows: [{ t: "Its faces are", options: ["2 triangles and 3 rectangles", "3 triangles and 2 rectangles", "5 triangles"], a: 0 }] }
        ],
        answer: "A triangular prism has **5 faces** (2 triangles and 3 rectangles), **9 edges** and **6 vertices**."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "This bar model and number line show the same calculation. Bar model: ? split into 86 and 68. Number line: 86 + 4 = 90, + 60 = 150, + 4 = 154.",
        answer: true,
        explain: "Both show 86 + 68. The jumps add 4 + 60 + 4 = 68, landing on 154.",
        interact: [
          { kind: "bar", whole: { v: 154, l: "154", hide: true }, parts: [{ v: 86, l: "86" }, { v: 68, l: "68" }] },
          { kind: "jumps", start: 86, end: 154, steps: [4, 60], hint: "Jump 4, then 60, then 4." }
        ]
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record how many minutes in: quarter of an hour · half an hour · one hour",
        interact: [
          { kind: "clock", time: "12:00", drag: true },
          { kind: "input", fields: [{ label: "Quarter of an hour", value: 15, suffix: "min" }, { label: "Half an hour", value: 30, suffix: "min" }, { label: "One hour", value: 60, suffix: "min" }] }
        ],
        answer: "**15 minutes** · **30 minutes** · **60 minutes**"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the most efficient strategy to solve 127 − 58 = __. Explain your reasoning.",
        interact: [
          { kind: "jumps", start: 127, min: 60, back: true, steps: [2, 60], hint: "Try compensation: take away 60, then add 2 back." },
          { kind: "input", fields: [{ label: "127 − 58 =", value: 69 }] }
        ],
        answer: "**69**. Compensation: 127 − 60 = 67, then add 2 back: 69. Or count on: 58 + 2 = 60, + 67 = 127, so 69."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw arrays to show 5 fours.",
        interact: [
          { kind: "array", rows: 1, cols: 4, target: [5, 4], hint: "Build 5 rows of 4." },
          { kind: "input", fields: [{ label: "5 fours =", value: 20 }] }
        ],
        answer: "5 rows of 4 = **20**. Turned around, it is also 4 rows of 5."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Draw this shape if it was turned anti-clockwise a quarter of a turn.",
        interact: [
          { kind: "classify", view: [900, 200], hint: "Tap the shape that shows a quarter turn anti-clockwise. Watch the dot.",
            cats: [{ k: "yes", t: "Quarter turn anti-clockwise", c: "#22A06B" }],
            shapes: [
              { p: "363.5,145 313.5,145 313.5,95 236.5,95 236.5,45 363.5,45", fill: "#B9A5F7", deco: "<circle cx='354.5' cy='54' r='7' fill='#17233F' pointer-events='none'/><text x='300' y='190' class='co-lab'>A</text>" },
              { p: "410,158.5 410,108.5 460,108.5 460,31.5 510,31.5 510,158.5", a: "yes", fill: "#B9A5F7", deco: "<circle cx='501' cy='149.5' r='7' fill='#17233F' pointer-events='none'/><text x='460' y='190' class='co-lab'>B</text>" },
              { p: "670,31.5 670,81.5 620,81.5 620,158.5 570,158.5 570,31.5", fill: "#B9A5F7", deco: "<circle cx='579' cy='40.5' r='7' fill='#17233F' pointer-events='none'/><text x='620' y='190' class='co-lab'>C</text>" },
              { p: "843.5,45 793.5,45 793.5,95 716.5,95 716.5,145 843.5,145", fill: "#B9A5F7", deco: "<circle cx='834.5' cy='136' r='7' fill='#17233F' pointer-events='none'/><text x='780' y='190' class='co-lab'>D</text><polygon points='26.5,45 76.5,45 76.5,95 153.5,95 153.5,145 26.5,145' fill='#9966FF' pointer-events='none'/><circle cx='35.5' cy='136' r='7' fill='#17233F' pointer-events='none'/><text x='90' y='190' class='co-lab'>Start</text><line x1='190' y1='10' x2='190' y2='190' stroke='#D6DEEA' stroke-width='3'/>" }] },
          { kind: "choose", rows: [{ t: "The quarter turn anti-clockwise is", options: ["A", "B", "C", "D"], a: 1 }] },
          { kind: "sketch", grid: "square" }
        ],
        answer: "**B**. Turning anti-clockwise a quarter turn, the long bottom edge moves to the right side and the dot moves from the bottom-left to the bottom-right corner.",
        explain: "Options A (half turn), C (quarter turn clockwise) and D (flip) were added so the class can compare turns. Use the drawing pad to draw the turned shape."
      }
    ]
  ]
});
