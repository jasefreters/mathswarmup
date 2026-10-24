/*
  Stage 2 Year B, Unit 37 — Review of learning (Term 4, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 4, ls: 2, unit: 37,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 37 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "Part of this grid has been covered. What is the total of the grid?",
        img: "u37-covered.png",
        options: ["28", "32", "24", "40"],
        answer: 1,
        explain: "The top row has 8 squares and the first column has 4 squares, so the grid is 4 rows of 8. 4 × 8 = 32.",
        interact: [{ kind: "array", rows: 1, cols: 8, showTotal: true, hint: "The top row shows 8 squares. Add rows until your array matches the grid." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "If 3 threes are 9, what is 3 sixes? Communicate your reasoning.",
        interact: [
          { kind: "array", rows: 3, cols: 3, showTotal: true, hint: "This is 3 threes. Double the columns to make 3 sixes." },
          { kind: "input", fields: [{ label: "3 sixes =", value: 18 }] }
        ],
        answer: "3 sixes = **18**. 6 is double 3, so 3 sixes is double 3 threes: double 9 is 18."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "How many tenths are shaded blue? Record this as a decimal.",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5], hint: "The strip from 0 to 1 is cut into tenths." },
          { kind: "input", fields: [{ label: "Tenths shaded blue", value: 6 }, { label: "As a decimal", value: 0.6 }] }
        ],
        answer: "**6 tenths** are blue. As a decimal that is **0.6**."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use bridging the decades to mentally solve 137 + 28. Explain your thinking.",
        interact: [
          { kind: "jumps", start: 137, end: 170, steps: [1, 3, 5, 10, 20, 25], hint: "Jump to the next ten first (137 + 3 = 140), then add what is left of 28." },
          { kind: "input", fields: [{ label: "137 + 28 =", value: 165 }] }
        ],
        answer: "137 + 3 = 140 (bridge to the decade), then 140 + 25 = **165**. 28 was split into 3 + 25."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Class 4W wanted to know what is their class’s favourite lunch. They created this question: ‘What lunch are you having today?’ The first student they asked said ‘I have a vegemite sandwich. Yuck!’ How could they refine their question to better find out the class’s favourite lunch?",
        interact: [{ kind: "select", hint: "Tap every question that would find out the class’s favourite lunch.", items: [
          ["What is your favourite lunch?", true],
          ["Which is your favourite lunch: sandwich, wrap, sushi or pasta?", true],
          ["What lunch are you having today?", false],
          ["Do you like vegemite?", false]] }],
        answer: "Ask about their favourite, not what they have today. For example: What is your favourite lunch? Even better, give choices: Which is your favourite lunch: sandwich, wrap, sushi or pasta?"
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "In this partially covered grid, 18 squares are covered.",
        img: "u37-lgrid.png",
        answer: true,
        explain: "The first column shows 7 squares and the bottom row shows 4, so the grid is 7 rows of 4 = 28 squares. We can see 7 + 3 = 10 squares, so 28 − 10 = 18 are covered.",
        interact: [{ kind: "array", rows: 7, cols: 1, showTotal: true, hint: "The column shows 7 squares. Add columns until the bottom row has 4." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Each lunch order costs $9. How can we work out the total cost for 4 students?",
        interact: [
          { kind: "jumps", start: 0, end: 40, steps: [9], hint: "Make one jump of 9 for each student." },
          { kind: "input", fields: [{ label: "Total cost", prefix: "$", value: 36 }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Repeated addition", s: "9 + 9 + 9 + 9 = 36, so 4 lunch orders cost $36." }, { t: "Use a friendly ten", s: "4 × 10 = 40, then take away 4 (one dollar for each student): 40 − 4 = 36." }] },
        answer: "4 × $9 = **$36**. For example, 4 × 10 = 40, then 40 − 4 = 36."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the decimals marked A, B, C and D.",
        img: "u37-decline.png",
        interact: [{ kind: "input", fields: [{ label: "A", value: 0.2 }, { label: "B", value: 0.4 }, { label: "C", value: 0.7 }, { label: "D", value: 0.8 }] }],
        answer: "A = **0.2**, B = **0.4**, C = **0.7**, D = **0.8**. The line from 0 to 1 is split into tenths."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Show how 135 − 76 is the same as 139 − 80.",
        interact: [
          { kind: "input", fields: [{ label: "135 − 76 =", value: 59 }, { label: "139 − 80 =", value: 59 }, { label: "Both numbers went up by", value: 4 }] },
          { kind: "choose", rows: [{ t: "Why is the difference the same?", options: ["Both numbers changed by the same amount", "Only one number changed", "Subtraction answers never change"], a: 0 }] }
        ],
        answer: "Add 4 to both numbers: 135 + 4 = 139 and 76 + 4 = 80. The gap between them stays the same, so both equal **59**. 139 − 80 is easier because 80 is a tens number."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Ranya was facing west. She made a quarter turn clockwise. Which direction is she facing now?",
        interact: [{ kind: "choose", rows: [{ t: "She is now facing", options: ["North", "East", "South", "West"], a: 0 }] }],
        answer: "**North**. Clockwise from west goes to north (W → N → E → S)."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "This grid has been torn. How many squares make up the complete grid?",
        img: "u37-torn.png",
        options: ["28", "32", "24", "40"],
        answer: 1,
        explain: "The top row has 8 squares and the end columns show 4 rows, so the full grid is 4 rows of 8. 4 × 8 = 32.",
        interact: [{ kind: "array", rows: 1, cols: 8, showTotal: true, hint: "The top row shows 8 squares. Add rows until your array matches the grid." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "If there are 36 cupcakes on the tray, how many rows are being covered?",
        img: "u37-cupcakes.png",
        interact: [
          { kind: "array", rows: 4, cols: 6, showTotal: true, hint: "These are the rows we can see. Add rows until there are 36 cupcakes." },
          { kind: "input", fields: [{ label: "Rows covered", value: 2 }] }
        ],
        cubes: { ops: ["÷", "−"], solve: [{ t: "Find all the rows", s: "Each row has 6 cupcakes. 36 ÷ 6 = 6 rows. We can see 4 rows, so 6 − 4 = 2 rows are covered." }, { t: "Find the hidden cupcakes", s: "We can see 4 × 6 = 24 cupcakes. 36 − 24 = 12 are hidden. 12 ÷ 6 = 2 rows." }] },
        answer: "**2 rows**. 36 ÷ 6 = 6 rows altogether, and 4 rows are showing.",
        explain: "The cover on the slide is not drawn to scale (it looks about 4 rows tall), so use the 36 cupcakes, not the size of the cover."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "How many tenths are shaded? How can we rename this as a decimal?",
        visual: { kind: "barline", max: 2, value: 1.4, den: 10 },
        interact: [{ kind: "input", fields: [{ label: "Tenths shaded", value: 14 }, { label: "As a decimal", value: 1.4 }] }],
        answer: "**14 tenths** are shaded. 10 tenths make 1 whole, with 4 tenths more, so it is **1.4**."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Show the answer to this using a bar model: A bus can hold 92 passengers. 67 people are already on the bus. How many more people can get on?",
        interact: [
          { kind: "bar", whole: { v: 92, n: "seats on the bus" }, parts: [{ v: 67, n: "already on" }, { v: 25, hide: true, n: "can still get on" }] },
          { kind: "input", fields: [{ label: "More people", value: 25 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count up from 67", s: "67 + 3 = 70, 70 + 20 = 90, 90 + 2 = 92. 3 + 20 + 2 = 25." }, { t: "Take away", s: "92 − 67: 92 − 60 = 32, 32 − 7 = 25." }] },
        answer: "**25 more people**. The whole bar is 92, one part is 67, so the missing part is 92 − 67 = 25."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Draw a trapezium. Draw lines to split your trapezium into smaller shapes you know. What shapes did you make?",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "Answers vary. For example, 2 lines from the short side split it into a rectangle and 2 triangles. One line can make a parallelogram and a triangle."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "This array shows the related facts 3 × 6 = 18, 6 × 3 = 18, 18 ÷ 3 = 6 and 18 ÷ 6 = 3.",
        answer: true,
        explain: "The array has 3 rows of 6 (3 × 6 = 18). Turned around it is 6 rows of 3 (6 × 3 = 18). Sharing 18 into 3 rows gives 6 in each row, and into 6 columns gives 3 in each.",
        interact: [{ kind: "array", rows: 3, cols: 6, showTotal: true, hint: "Tap Rotate to see the turnaround fact." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Riley says, ‘A rectangle that is 10 cm long and 2 cm wide has the same area as one that is 5 cm long and 4 cm wide.’ Is Riley correct? Explain how you know.",
        interact: [
          { kind: "array", rows: 2, cols: 10, showTotal: true, hint: "Build each rectangle with 1 cm squares: 2 rows of 10, then 4 rows of 5." },
          { kind: "input", fields: [{ label: "10 cm × 2 cm =", value: 20, suffix: "cm²" }, { label: "5 cm × 4 cm =", value: 20, suffix: "cm²" }] },
          { kind: "choose", rows: [{ t: "Is Riley correct?", options: ["Yes", "No"], a: 0 }] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Multiply each one", s: "10 × 2 = 20 cm² and 5 × 4 = 20 cm². They are the same." }, { t: "Halve and double", s: "Halve the length (10 → 5) and double the width (2 → 4). The area stays the same." }] },
        answer: "**Yes**. 10 × 2 = 20 cm² and 5 × 4 = 20 cm². Both rectangles cover 20 square centimetres."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Write the 3 missing numbers from this number line.",
        interact: [{ kind: "cells", cols: 10, w: 58, grid: [[{ v: 0.2 }, "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", { v: 1 }, { v: 1.1 }]], msg: "Each peg is 1 tenth more than the one before." }],
        answer: "**0.2**, then 0.3 to 0.9, then **1.0** (1) and **1.1**. Each peg goes up by one tenth.",
        explain: "The slide shows one empty peg before 0.3 and two after 0.9, equally spaced, so they are 0.2, 1.0 and 1.1."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Solve 148 + 273. Show the method you used. Did you need to regroup? Why or why not?",
        interact: [
          { kind: "input", fields: [{ label: "148 + 273 =", value: 421 }] },
          { kind: "choose", rows: [{ t: "Did you need to regroup?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**421**. Yes: 8 + 3 = 11 ones, so regroup 10 ones as 1 ten. Then 4 + 7 + 1 = 12 tens, so regroup 10 tens as 1 hundred. 1 + 2 + 1 = 4 hundreds."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Describe this pyramid’s features.",
        img: "u37-pyramid.png",
        interact: [
          { kind: "choose", rows: [{ t: "Shape of the base", options: ["Triangle", "Square", "Rectangle with no equal sides", "Circle"], a: 1 }] },
          { kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Edges", value: 8 }, { label: "Vertices", value: 5 }] }
        ],
        answer: "A **square-based pyramid**: 5 faces (1 square base and 4 triangles), 8 edges and 5 vertices. The triangles meet at one point at the top (the apex)."
      }
    ],
    // Review 5
    [
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Which 2 answers are correct here? This model is showing …",
        visual: { kind: "barline", max: 1, value: 0.25, den: 4 },
        interact: [{ kind: "select", hint: "Tap the 2 correct answers.", items: [["A: 0.25", true], ["B: 0.5", false], ["C: [1/2]", false], ["D: [1/4]", true]] }],
        answer: "**A (0.25)** and **D ([1/4])**. The line from 0 to 1 is split into 4 equal parts and 1 part is shaded. [1/4] = 25 hundredths = 0.25.",
        explain: "On the slide, option C was a tiny pasted picture; it is shown here as [1/2], which is what that picture says."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "This shape is made up of square metres. What is the area of this shape? Explain how you know.",
        interact: [
          { kind: "areagrid", cells: ["1111", "1111", "1111", "1111"] },
          { kind: "input", fields: [{ label: "Area", value: 16, suffix: "m²" }] }
        ],
        answer: "**16 m²**. There are 4 rows of 4 square metres. 4 × 4 = 16."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "17 tenths. How many tenths are represented in this number? Record this as a decimal. Record this as a fraction.",
        visual: { kind: "barline", max: 2, value: 1.7, den: 10 },
        interact: [{ kind: "input", fields: [{ label: "Tenths", value: 17 }, { label: "As a decimal", value: 1.7 }, { label: "As a fraction", accept: ["17/10", "1 7/10", "1 and 7/10"], placeholder: "e.g. 3/10" }] }],
        answer: "**17 tenths** = **1.7** = **[17/10]** (or 1 and [7/10]). 10 tenths make 1 whole, with 7 tenths left over."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Solve 432 − 215. Show the method you used. Did you need to regroup? Why or why not?",
        interact: [
          { kind: "input", fields: [{ label: "432 − 215 =", value: 217 }] },
          { kind: "choose", rows: [{ t: "Did you need to regroup?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**217**. Yes: there are only 2 ones and we take away 5, so regroup 1 ten as 10 ones (12 − 5 = 7). Then 2 tens − 1 ten = 1 ten, and 4 hundreds − 2 hundreds = 2 hundreds."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "After his breakfast, Phil checked the clock. Write down the time in digital form. Remember to include am or pm notation.",
        interact: [
          { kind: "clock", time: "7:45" },
          { kind: "input", fields: [{ label: "Time", accept: ["7:45 am", "7:45am", "7.45 am", "7.45am", "7:45 a.m.", "7:45 a.m"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "**7:45 am** (quarter to 8 in the morning). The minute hand is on 9 and the hour hand is nearly at 8. Breakfast is in the morning, so it is am."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B: Decimals",
        prompt: "These numbers have been ordered correctly: 0.2, 0.8, 0.65, 0.85. Communicate your reasoning.",
        answer: false,
        explain: "0.8 is 80 hundredths, which is more than 0.65 (65 hundredths). The correct order is 0.2, 0.65, 0.8, 0.85.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 10, labelStep: 1, tol: 0.04, items: [["0.2", 0.2], ["0.8", 0.8], ["0.65", 0.65], ["0.85", 0.85]] }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Which of these shapes have right angles?",
        interact: [
          { kind: "corners", view: [1200, 445], label: "Seven shapes: triangle, right-angled triangle, rectangle, hexagon, trapezium, rhombus and square", shapes: [
            { p: [[110, 20], [40, 170], [180, 170]], fill: "#9CC3F0", l: "triangle", lx: 110, ly: 210 },
            { p: [[300, 170], [520, 170], [520, 30]], fill: "#9CC3F0", l: "right-angled triangle", lx: 410, ly: 210 },
            { p: [[640, 50], [880, 50], [880, 160], [640, 160]], fill: "#9CC3F0", l: "rectangle", lx: 760, ly: 210 },
            { p: [[1060, 15], [1129, 55], [1129, 135], [1060, 175], [991, 135], [991, 55]], fill: "#9CC3F0", l: "hexagon", lx: 1060, ly: 210 },
            { p: [[90, 250], [170, 250], [205, 390], [55, 390]], fill: "#9CC3F0", l: "trapezium", lx: 130, ly: 432 },
            { p: [[300, 260], [440, 260], [524, 372], [384, 372]], fill: "#9CC3F0", l: "rhombus", lx: 412, ly: 432 },
            { p: [[720, 245], [795, 320], [720, 395], [645, 320]], fill: "#9CC3F0", l: "square", lx: 720, ly: 432 }] },
          { kind: "select", hint: "Tap every shape that has a right angle.", items: [["triangle", false], ["right-angled triangle", true], ["rectangle", true], ["trapezium", false], ["rhombus", false], ["square", true], ["hexagon", false]] }
        ],
        answer: "The **right-angled triangle** (1 right angle), the **rectangle** (4) and the **square** (4). The square is turned on its corner, but its angles are still right angles."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "0.70. Does this number represent 7 tenths or 7 hundredths? Explain your thinking.",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6], hint: "Each part is one tenth." },
          { kind: "choose", rows: [{ t: "0.70 represents", options: ["7 tenths", "7 hundredths"], a: 0 }] },
          { kind: "input", fields: [{ label: "0.70 = ___ hundredths", value: 70 }] }
        ],
        answer: "**7 tenths**. The 7 is in the tenths place. The 0 in the hundredths place means no extra hundredths: 0.70 = 7 tenths = 70 hundredths. 7 hundredths would be 0.07."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "How many ways could you solve 268 + 435?",
        interact: [{ kind: "expr", count: 3, target: 703, placeholder: "e.g. 200 + 400 + 60 + 30 + 8 + 5", sample: ["200 + 400 + 60 + 30 + 8 + 5", "270 + 433", "268 + 400 + 35"] }],
        answer: "**703**. Answers vary, for example: split the places (600 + 90 + 13 = 703), compensate (270 + 433 = 703), or jump (268 + 400 = 668, + 35 = 703)."
      },
      {
        type: "sr", focus: "Geometric Measure B: Length",
        prompt: "What is the length of this pencil in cm? What is the length of this pencil in mm?",
        img: "u37-pencil.png",
        interact: [
          { kind: "marker", min: 0, max: 10, ticks: 1, minor: 10, target: 7.5, tol: 0.15, label: "tip", msg: "The pencil starts at 0. Count the whole centimetres, then the small millimetre marks." },
          { kind: "input", fields: [{ label: "In cm", value: 7.5, suffix: "cm" }, { label: "In mm", value: 75, suffix: "mm" }] }
        ],
        answer: "**7.5 cm** = **75 mm**. The pencil starts at the end of the ruler (0) and the tip is halfway between 7 and 8.",
        explain: "Read from the slide picture: the tip sits about halfway between 7 cm and 8 cm."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which of the following represents 0.75 using interlocking cubes?",
        options: ["3 blue cubes connected to 3 red cubes", "3 blue cubes connected to 12 red cubes", "3 blue cubes connected to 1 red cube", "3 blue cubes connected to 6 red cubes"],
        answer: 2,
        explain: "0.75 = [3/4]. 3 blue cubes and 1 red cube make a stick of 4, and 3 out of 4 are blue.",
        interact: [{ kind: "shade", parts: 4, hint: "This stick has 4 cubes. Shade 0.75 of it." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Draw a rectangular prism. Label its features using face, edge and vertex.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 12 }, { label: "Vertices", value: 8 }] }
        ],
        answer: "A rectangular prism has **6 faces** (flat surfaces), **12 edges** (where 2 faces meet) and **8 vertices** (corners where edges meet)."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Fill in the blanks to complete this sentence: 0.25 is ___ tenths and ___ hundredths or ___ hundredths.",
        interact: [{ kind: "input", fields: [{ label: "0.25 is", value: 2, suffix: "tenths" }, { label: "and", value: 5, suffix: "hundredths" }, { label: "or", value: 25, suffix: "hundredths" }] }],
        answer: "0.25 is **2** tenths and **5** hundredths, or **25** hundredths. Each tenth is 10 hundredths, so 2 tenths + 5 hundredths = 25 hundredths."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Miss Donlan is organising a class party for 30 students and has a budget of $300. Estimate what items would fit the budget. Explain your thinking.",
        table: [["Item", "Cost"], ["Face painting", "$149"], ["Outdoor cinema", "$153.50"], ["Sushi platter (serves 15)", "$65.80"], ["Party meat pies (15 pieces)", "$6.80"], ["Party sausage rolls (15 pieces)", "$6.80"], ["Chicken nuggets (15 pieces)", "$4.40"]],
        interact: [
          { kind: "choose", rows: [
            { t: "Food serves 15. How many of each food for 30 students?", options: ["1", "2", "3"], a: 1 },
            { t: "Can she have face painting and the outdoor cinema?", options: ["Yes", "No"], a: 1 }] },
          { kind: "shop", budget: 300, hint: "Tap items to plan the party. Food is already doubled for 30 students.", items: [["Face painting", 149], ["Outdoor cinema", 153.5], ["2 sushi platters", 131.6], ["2 packs of meat pies", 13.6], ["2 packs of sausage rolls", 13.6], ["2 packs of nuggets", 8.8]] }
        ],
        cubes: { ops: ["+", "×"], also: ["−"], solve: [{ t: "Round and estimate", s: "Face painting ≈ $150 and the cinema ≈ $150, so both is about $300, too close. Exactly $302.50, over budget. Pick one activity." }, { t: "Build a plan", s: "Face painting $149 + 2 sushi platters $131.60 + 2 packs of meat pies $13.60 = $294.20. That is under $300." }] },
        answer: "Answers vary. She can only afford one activity ($149 + $153.50 = $302.50 is over). Food must be doubled for 30. For example: face painting + 2 sushi platters + 2 packs of meat pies = **$294.20**.",
        explain: "The shop shows each food already doubled (2 packs serve 30 students) so the class can test plans against $300."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Make a list of events that are unlikely to happen in class today. Communicate your reasoning.",
        interact: [{ kind: "select", hint: "Tap the events that are unlikely to happen in class today.", items: [
          ["A fire drill", true],
          ["Everyone gets every spelling word right", true],
          ["A visitor reads us a story", true],
          ["We do some maths", false],
          ["The teacher marks the roll", false]] }],
        answer: "Answers vary, for example: a fire drill, everyone getting every spelling word right, or a surprise visitor. They could happen, but they don’t happen often. Maths and the roll happen every day, so they are likely or certain."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B: Decimals",
        prompt: "0.5 is twice as large as 0.25. Communicate your reasoning.",
        answer: true,
        explain: "0.25 is 25 hundredths and 0.5 is 50 hundredths. 25 + 25 = 50, so 0.5 is double 0.25. As fractions, [2/4] is double [1/4].",
        interact: [
          { kind: "shade", parts: 4, pre: [0], hint: "This strip shows 0.25." },
          { kind: "shade", parts: 4, pre: [0, 1], hint: "This strip shows 0.5." }
        ]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "This prism has been made using cubic-centimetre blocks. Describe this prism using the term layers. What is the volume of this prism in cubic centimetres?",
        img: "u37-prism.png",
        interact: [{ kind: "input", fields: [{ label: "Layers", value: 2 }, { label: "Cubes in each layer", value: 10 }, { label: "Volume", value: 20, suffix: "cm³" }] }],
        answer: "There are **2 layers**. Each layer is 2 rows of 5 = 10 cubes. 2 × 10 = **20 cm³**."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Write these in order from smallest to largest: 0.5, [1/4], 0.75",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 4, labelStep: 1, tol: 0.05, items: [["0.5", 0.5], ["[1/4]", 0.25], ["0.75", 0.75]] },
          { kind: "order", items: ["0.5", "1/4", "0.75"], answer: [1, 0, 2] }
        ],
        answer: "**[1/4], 0.5, 0.75**. [1/4] = 0.25, which is smaller than 0.5 (a half), and 0.75 (three quarters) is the largest."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Jay has $5.00 for the canteen. Sushi costs $2.50, a smoothie costs $2.20 and baklava costs 50 cents. Does he have enough money to buy them all? Explain your thinking.",
        interact: [
          { kind: "shop", budget: 5, hint: "Put all three items in the basket, then show the total.", items: [["Sushi", 2.5], ["Smoothie", 2.2], ["Baklava", 0.5]] },
          { kind: "choose", rows: [{ t: "Does Jay have enough?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "Total cost", prefix: "$", value: 5.2 }] }
        ],
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Add the costs", s: "$2.50 + $0.50 = $3.00, then $3.00 + $2.20 = $5.20. That is more than $5.00." }, { t: "Take away from $5", s: "$5.00 − $2.50 = $2.50, − $2.20 = $0.30. Baklava costs $0.50, so he is 20 cents short." }] },
        answer: "**No**. $2.50 + $2.20 + $0.50 = **$5.20**, which is 20 cents more than $5.00."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Describe how the triangles have been rotated to create this design.",
        img: "u37-design.png",
        interact: [
          { kind: "input", fields: [{ label: "Number of triangles", value: 5 }] },
          { kind: "choose", rows: [{ t: "Each triangle is turned from the one before by", options: ["a half turn", "a quarter turn", "a full turn"], a: 0 }] }
        ],
        answer: "The design uses **5 triangles**. Every second triangle is turned a **half turn** (upside down), so they point up, down, up, down, up and fit together in a row."
      }
    ]
  ]
});
