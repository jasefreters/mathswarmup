/*
  Stage 3 Year B, Unit 28 — Review of learning (Term 2, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 2, ls: 3, unit: 28,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 28 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "What number is marked as missing on the number line? −45, ?, −15, 0, 15, 45",
        options: ["−25", "25", "−30", "30"],
        answer: 2,
        explain: "The marks go up in 15s: −45, −30, −15, 0, 15. The missing number is halfway between −45 and −15.",
        interact: [{ kind: "jumps", start: -45, min: -50, max: 50, steps: [15], hint: "Start at −45 and jump + 15 each time." }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Complete the sentences using grid-map or number plane.",
        interact: [{ kind: "choose", rows: [
          { t: "The ______ reference is used to give the area of a location.", options: ["grid-map", "number plane"], a: 0 },
          { t: "The ______ is used to identify a specific point.", options: ["grid-map", "number plane"], a: 1 }] }],
        answer: "The **grid-map** reference gives the area (a square) of a location. The **number plane** identifies a specific point with coordinates."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "At a music festival, 48 rows of seats are set up, and 37 seats are placed in each row. How many seats are there in total? Communicate your strategy.",
        interact: [
          { kind: "expr", count: 1, target: 1776, placeholder: "e.g. 48 x 30 + 48 x 7", mustUse: { re: "\\+|\\-", msg: "Split one of the numbers into parts, then add the parts." }, sample: ["48 x 30 + 48 x 7"] },
          { kind: "input", fields: [{ label: "Total seats", value: 1776 }] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Split 37", s: "48 × 30 = 1440 and 48 × 7 = 336. 1440 + 336 = 1776." }, { t: "Round and adjust", s: "50 × 37 = 1850. That is 2 rows too many: 1850 − 74 = 1776." }] },
        answer: "**1776 seats**. 48 × 37 = 48 × 30 + 48 × 7 = 1440 + 336."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Round the following numbers to the nearest million: 452 732 672, 279 108 344, 390 487 192",
        interact: [
          { kind: "marker", min: 452000000, max: 453000000, divs: 10, majorEvery: 5, labels: [452000000, 452500000, 453000000], label: "452 732 672", hint: "Slide the pin to 452 732 672. Is it before or after halfway?" },
          { kind: "input", fields: [{ label: "452 732 672 ≈", value: 453000000 }, { label: "279 108 344 ≈", value: 279000000 }, { label: "390 487 192 ≈", value: 390000000 }] }
        ],
        answer: "**453 000 000**, **279 000 000** and **390 000 000**. Look at the hundred thousands digit: 5 or more rounds up."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the properties missing from the table.",
        table: [["Shape", "Properties of sides", "Properties of angles", "Regular or irregular?"], ["Equilateral triangle", "?", "3 equal acute angles", "Regular"], ["Isosceles triangle", "?", "2 equal acute angles opposite the equal side lengths", "Irregular"], ["Scalene triangle", "All 3 sides are different in length", "?", "Irregular"], ["Square", "4 equal sides, 2 pairs of parallel lines", "?", "?"]],
        interact: [
          { kind: "corners", view: [650, 200], r: 22, q: 30, hit: 16, shapes: [
            { p: [[40, 170], [160, 170], [100, 66.1]], l: "E", fill: "#2F6FE4" }, { p: [[200, 170], [290, 170], [245, 30]], l: "I", fill: "#2F6FE4" },
            { p: [[330, 170], [470, 170], [370, 60]], l: "S", fill: "#2F6FE4" }, { p: [[510, 60], [620, 60], [620, 170], [510, 170]], l: "Sq", fill: "#2F6FE4" }], hint: "Tap a corner to test it with a right angle. Tap again to name it." },
          { kind: "choose", rows: [
            { t: "Equilateral triangle: sides", options: ["3 equal sides", "2 equal sides", "no equal sides"], a: 0 },
            { t: "Isosceles triangle: sides", options: ["3 equal sides", "2 equal sides", "no equal sides"], a: 1 },
            { t: "Scalene triangle: angles", options: ["3 equal angles", "2 equal angles", "3 different angles"], a: 2 },
            { t: "Square: angles", options: ["4 right angles", "2 acute, 2 obtuse", "4 obtuse angles"], a: 0 },
            { t: "Square: regular or irregular?", options: ["Regular", "Irregular"], a: 0 }] }
        ],
        answer: "Equilateral: **3 equal sides**. Isosceles: **2 equal sides**. Scalene: **3 different angles**. Square: **4 right angles**, and it is **regular** (all sides and all angles are equal)."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "The term integers describes negative whole numbers only. Communicate your reasoning.",
        answer: false,
        explain: "Integers are all the whole numbers: the positive whole numbers, the negative whole numbers and zero.",
        interact: [{ kind: "numberline", min: -5, max: 5, ticks: 1, tol: 0.3, items: [["−3", -3], ["0", 0], ["4", 4]] }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the coordinates for the dolphin, the octopus and the fish.",
        img: "u28-ocean.png",
        interact: [{ kind: "input", fields: [{ label: "Dolphin", accept: ["(3, 4)"], placeholder: "(x, y)" }, { label: "Octopus", accept: ["(1, 1)"], placeholder: "(x, y)" }, { label: "Fish", accept: ["(2, 2)"], placeholder: "(x, y)" }] }],
        answer: "Dolphin **(3, 4)**, octopus **(1, 1)**, fish **(2, 2)**. Go across the x-axis first, then up the y-axis.",
        explain: "The fish is the small green fish. The stingray sits near (4, 2)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "A cinema printed 742 tickets for a special event. The tickets are packed equally into 6 envelopes for different school groups. How many tickets will go into each envelope? Will there be any tickets left over? If so, how many? Communicate your strategy.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 742, hint: "Share 7 hundreds into 6 envelopes, then break the leftover hundred into tens, and so on." },
          { kind: "input", fields: [{ label: "Tickets in each envelope", value: 123 }, { label: "Left over", value: 4 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Share by place value", s: "600 ÷ 6 = 100, 120 ÷ 6 = 20, 18 ÷ 6 = 3. That uses 738 tickets: 742 − 738 = 4 left over." }, { t: "Check with multiplication", s: "6 × 123 = 738, and 738 + 4 = 742." }] },
        answer: "**123 tickets** in each envelope, with **4 left over**. 742 ÷ 6 = 123 remainder 4."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "1. Which decimal is represented on the decimat? 2. How many thousandths are represented in the number?",
        img: "u28-decimat.png",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0, target: 0.743, hint: "Count the shaded tenths, then hundredths, then thousandths, and build the number." },
          { kind: "input", fields: [{ label: "Decimal", value: 0.743 }, { label: "Thousandths in total", value: 743 }] }
        ],
        answer: "**0.743**: 7 tenths, 4 hundredths and 3 thousandths. That is **743 thousandths** altogether.",
        explain: "Read from the picture: 7 whole tenths are shaded, 4 hundredths in the first tenth, and 3 thousandths in the top hundredth."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Calculate the area of the rectangle displayed on square centimetre grid paper.",
        interact: [
          { kind: "areagrid", size: 40, cells: ["111111111", "111111111", "111111111", "111111111", "111111111", "111111111", "111111111"] },
          { kind: "input", fields: [{ label: "Area", value: 63, suffix: "cm²" }] }
        ],
        answer: "**63 cm²**. The rectangle is 9 squares long and 7 squares wide: 9 × 7 = 63.",
        explain: "The rectangle was measured on the slide as 9 × 7 squares."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "Sandy is keeping track of the hotel elevator from the lobby (floor 0). The elevator goes up 3 floors, then down 8 floors. What floor is the elevator on now?",
        options: ["−3", "−5", "−8", "0"],
        answer: 1,
        explain: "0 + 3 = 3, then 3 − 8 = −5. The elevator is at floor −5 (Deliveries).",
        interact: [{ kind: "jumps", start: 0, min: -6, max: 6, back: true, steps: [1, 3, 8], hint: "Start at the lobby (0). Jump up 3, then back 8." }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates of the missing points on the number planes. A: a rectangle with corners (−1, 3), (−1, −1), (3, −1). B: a right-angled triangle with corners (3, 2), (3, −5). C: a rectangle with corners (5, 3), (−5, −2).",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "A", x: -1, y: 3 }, { l: "A", x: -1, y: -1 }, { l: "A", x: 3, y: -1 }, { l: "A?", x: 3, y: 3 }], hint: "Tap the ? point to trace it back to each axis." },
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "B", x: 3, y: 2 }, { l: "B", x: 3, y: -5 }, { l: "B?", x: -4, y: -5 }], hint: "Tap the ? point to trace it back to each axis." },
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "C", x: 5, y: 3 }, { l: "C", x: -5, y: -2 }, { l: "C?", x: -5, y: 3 }, { l: "C?", x: 5, y: -2 }], hint: "Tap each ? point to trace it back to each axis." },
          { kind: "cells", cols: 3, w: 130, msg: "Go across the x-axis first, then up or down the y-axis.", grid: [
            ["#Point", "#x", "#y"], ["A ?", { v: 3 }, { v: 3 }], ["B ?", { v: -4 }, { v: -5 }], ["C top left", { v: -5 }, { v: 3 }], ["C bottom right", { v: 5 }, { v: -2 }]] }
        ],
        answer: "A: **(3, 3)**. B: **(−4, −5)**. C: **(−5, 3)** and **(5, −2)**.",
        explain: "Shape B's missing corner was read from the slide's triangle at x = −4."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "7 × 6 = 84 ÷ ☐. What is the missing number? Write another equivalent number sentence using multiplication and division.",
        interact: [
          { kind: "scale", left: "7 × 6", right: "84 ÷ ?", answer: 2 },
          { kind: "sentence", fields: [{ label: "Another sentence", placeholder: "e.g. 3 × 14 = 84 ÷ 2", re: "x.*=.*÷|÷.*=.*x|x.*=.*/|/.*=.*x", msg: "Use multiplication on one side and division on the other.", sample: "3 x 14 = 84 ÷ 2" }] }
        ],
        answer: "**2**. 7 × 6 = 42 and 84 ÷ 2 = 42. Another example: 3 × 14 = 126 ÷ 3."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Explain why this is ordered from smallest to largest: 0.305, 0.42, 0.5, 0.799. Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.03, items: [["0.305", 0.305], ["0.42", 0.42], ["0.5", 0.5], ["0.799", 0.799]] },
          { kind: "choose", rows: [{ t: "Which place do you compare first?", options: ["tenths", "hundredths", "thousandths", "the number of digits"], a: 0 }] }
        ],
        answer: "Compare the **tenths** first: 3, 4, 5, 7. The number of digits doesn't decide the size, so 0.5 is larger than 0.42 and 0.305."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "How do you know this is a net for a square pyramid? Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [400, 400], hint: "Choose a face type, then tap each face of the net.",
            cats: [{ k: "sq", t: "Square base", c: "#2F6FE4" }, { k: "tri", t: "Triangular face", c: "#F2994A" }],
            shapes: [
              { p: "150,150 250,150 250,250 150,250", a: "sq", fill: "#EEF2F8", deco: "<polygon points='150,150 250,150 250,250 150,250' fill='none' stroke='#17233F' stroke-width='3' pointer-events='none'/>" },
              { p: "150,150 250,150 200,60", a: "tri", fill: "#EEF2F8", deco: "<polygon points='150,150 250,150 200,60' fill='none' stroke='#17233F' stroke-width='3' pointer-events='none'/>" },
              { p: "250,150 250,250 340,200", a: "tri", fill: "#EEF2F8", deco: "<polygon points='250,150 250,250 340,200' fill='none' stroke='#17233F' stroke-width='3' pointer-events='none'/>" },
              { p: "150,250 250,250 200,340", a: "tri", fill: "#EEF2F8", deco: "<polygon points='150,250 250,250 200,340' fill='none' stroke='#17233F' stroke-width='3' pointer-events='none'/>" },
              { p: "150,150 150,250 60,200", a: "tri", fill: "#EEF2F8", deco: "<polygon points='150,150 150,250 60,200' fill='none' stroke='#17233F' stroke-width='3' pointer-events='none'/>" }] },
          { kind: "input", fields: [{ label: "Square faces", value: 1 }, { label: "Triangular faces", value: 4 }] },
          { kind: "choose", rows: [{ t: "When folded, the triangles…", options: ["meet at one point (the apex)", "lie flat beside the square", "make a second square"], a: 0 }] }
        ],
        answer: "It has **1 square base** and **4 triangles**, one on each side of the square. When folded up, the 4 triangles meet at one point, the apex."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "Reading a thermometer is an example of interpreting integers in an everyday context. Communicate your reasoning.",
        answer: true,
        explain: "A thermometer shows temperatures above and below 0 °C, such as 25 °C and −3 °C, so reading one means interpreting positive and negative integers.",
        interact: [{ kind: "marker", min: -10, max: 30, divs: 8, labels: [-10, 0, 10, 20, 30], label: "°C", hint: "Slide the pin to show a cold morning below zero." }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "One of these triangles has been translated. Record its coordinates.",
        img: "u28-translate.png",
        interact: [
          { kind: "choose", rows: [{ t: "Which diagram shows a translation?", options: ["Diagram 1", "Diagram 2"], a: 0 }] },
          { kind: "cells", cols: 3, w: 130, msg: "The triangle slid 6 places to the left, so subtract 6 from each x-coordinate.", grid: [
            ["#Corner", "#x", "#y"], ["Left", { v: -5 }, { v: 1 }], ["Right", { v: -1 }, { v: 1 }], ["Top", { v: -3 }, { v: 5 }]] }
        ],
        answer: "**Diagram 1**. The triangle at (1, 1), (5, 1), (3, 5) slid 6 places left to **(−5, 1), (−1, 1), (−3, 5)**. Diagram 2 shows a reflection (a flip), not a translation."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "How can we express 7 chocolate bars shared between 3 people? Record the solution using a fraction, decimal and words.",
        img: "u28-chocolate.png",
        interact: [
          { kind: "pack", mode: "share", n: 3, total: 7, thing: "chocolate bars", label: "person", hint: "Share the 7 bars one at a time. Then cut the last bar into thirds." },
          { kind: "input", fields: [{ label: "Fraction", value: 7 / 3, placeholder: "a/b" }, { label: "Decimal", min: 2.33, max: 2.34 }] },
          { kind: "choose", rows: [{ t: "In words", options: ["two and one-third", "two and three-thirds", "seven and one-third"], a: 0 }] }
        ],
        answer: "**[7/3]** = 2[1/3] each, about **2.33** as a decimal, or **two and one-third** in words."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "1. The basketball court is 1.25 km from the school. How could this distance be recorded in metres? 2. The playground is 0.8 km from the school. If you walked to the playground and back, how far would you walk in kilometres?",
        img: "u28-map.png",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 1.25, shift: true, hint: "1 km = 1000 m, so multiply by 10 three times." },
          { kind: "jumps", start: 0, steps: [0.8], hint: "Jump 0.8 km to the playground, then 0.8 km back." },
          { kind: "input", fields: [{ label: "Basketball court", value: 1250, suffix: "m" }, { label: "Playground and back", value: 1.6, suffix: "km" }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Convert", s: "1.25 km × 1000 = 1250 m." }, { t: "Double", s: "0.8 km there + 0.8 km back = 1.6 km (or 2 × 0.8)." }] },
        answer: "**1250 m** and **1.6 km**."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "This timetable shows bus departure times. Convert the 24-hour times to 12-hour time. Order the buses from earliest departure time to latest departure time.",
        table: [["Bus", "Departure time"], ["1", "18:45 hours"], ["2", "07:15 hours"], ["3", "23:30 hours"], ["4", "13:15 hours"]],
        interact: [
          { kind: "clock", time: "6:45", h24: true },
          { kind: "input", fields: [{ label: "Bus 1", accept: ["6:45 pm"], placeholder: "h:mm am/pm" }, { label: "Bus 2", accept: ["7:15 am"], placeholder: "h:mm am/pm" }, { label: "Bus 3", accept: ["11:30 pm"], placeholder: "h:mm am/pm" }, { label: "Bus 4", accept: ["1:15 pm"], placeholder: "h:mm am/pm" }] },
          { kind: "order", items: ["Bus 1", "Bus 2", "Bus 3", "Bus 4"], answer: [1, 3, 0, 2] }
        ],
        answer: "Bus 1 **6:45 pm**, Bus 2 **7:15 am**, Bus 3 **11:30 pm**, Bus 4 **1:15 pm**. Earliest to latest: **Bus 2, Bus 4, Bus 1, Bus 3**."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "Which of the following fractions is equivalent to [3/4]?",
        options: ["[6/8]", "[2/3]", "[4/6]", "[5/8]"],
        answer: 0,
        explain: "Double the numerator and the denominator: 3 × 2 = 6 and 4 × 2 = 8.",
        interact: [{ kind: "shade", parts: 4, pre: [0, 1, 2] }, { kind: "shade", parts: 8 }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates for the shape if it were reflected across the x-axis and across the y-axis. The triangle's corners are (−5, −2), (−5, −4) and (−2, −3).",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "P", x: -5, y: -2 }, { l: "Q", x: -5, y: -4 }, { l: "R", x: -2, y: -3 }], hint: "Tap a corner to trace it to the axes. Tap a grid point to plot its reflection." },
          { kind: "cells", cols: 5, w: 110, msg: "Across the x-axis the y-coordinate changes sign. Across the y-axis the x-coordinate changes sign.", grid: [
            ["#Corner", "#x-axis: x", "#x-axis: y", "#y-axis: x", "#y-axis: y"],
            ["P (−5, −2)", { v: -5 }, { v: 2 }, { v: 5 }, { v: -2 }],
            ["Q (−5, −4)", { v: -5 }, { v: 4 }, { v: 5 }, { v: -4 }],
            ["R (−2, −3)", { v: -2 }, { v: 3 }, { v: 2 }, { v: -3 }]] }
        ],
        answer: "Across the x-axis: **(−5, 2), (−5, 4), (−2, 3)**. Across the y-axis: **(5, −2), (5, −4), (2, −3)**.",
        explain: "The triangle's corners were read from the slide's number plane."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "A pattern is made using pentagons. Each term in the pattern adds one new pentagon. The pentagons are not joined together. Record the numbers that complete the table of values by following the pattern rule.",
        interact: [
          { kind: "jumps", start: 0, steps: [5, 25], hint: "Each pentagon adds 5 sides." },
          { kind: "cells", cols: 6, w: 92, msg: "Number of sides = number of shapes × 5.", grid: [
            ["#Shapes", "#10", "#15", "#20", "#50", "#100"],
            ["#Sides", { v: 50 }, { v: 75 }, { v: 100 }, { v: 250 }, { v: 500 }]] }
        ],
        answer: "10 → **50**, 15 → **75**, 20 → **100**, 50 → **250**, 100 → **500**. Rule: number of sides = number of pentagons × 5."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "A toy weighs 0.425 kg. Record this mass in grams. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.425, hint: "This is 0.425 kg. 1 thousandth of a kilogram is 1 gram." },
          { kind: "input", fields: [{ label: "Mass", value: 425, suffix: "g" }] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Multiply by 1000", s: "1 kg = 1000 g, so 0.425 × 1000 = 425 g." }, { t: "Read the thousandths", s: "0.425 kg is 425 thousandths of a kilogram, and each thousandth is 1 g." }] },
        answer: "**425 g**. 1 kg = 1000 g, so 0.425 kg × 1000 = 425 g."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "A shop sells different fruits. The masses of the fruits are recorded in kilograms using decimal notation. What is the total mass of apples and mangoes?",
        table: [["Fruit", "Mass (kg)"], ["Apples", "1.75"], ["Bananas", "2.08"], ["Cherries", "0.875"], ["Mangoes", "3.25"]],
        interact: [
          { kind: "jumps", start: 1.75, steps: [1, 0.25], hint: "Start at 1.75 kg and add 3.25: jump + 1 three times, then + 0.25." },
          { kind: "input", fields: [{ label: "Apples + mangoes", value: 5, suffix: "kg" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Make a whole", s: "1.75 + 0.25 = 2, then 2 + 3 = 5 kg." }, { t: "Add by place value", s: "1 + 3 = 4 wholes, 0.75 + 0.25 = 1 whole. 4 + 1 = 5 kg." }] },
        answer: "**5 kg**. 1.75 + 3.25 = 5."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "On a number line [1/3] and [2/6] will be represented at the same point. Communicate your reasoning.",
        answer: true,
        explain: "[2/6] is equivalent to [1/3]: halve the numerator and denominator of [2/6] to get [1/3]. Equivalent fractions sit at the same point.",
        interact: [{ kind: "shade", parts: 3, pre: [0] }, { kind: "shade", parts: 6, pre: [0, 1] }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A bag contains 8 counters: 3 red, 3 blue and 2 pink. One counter is chosen at random. Which outcomes are equally likely? Represent the probability of choosing a red counter as a fraction. Communicate your reasoning.",
        interact: [
          { kind: "bar", whole: { v: 8, l: "8 counters" }, parts: [{ v: 3, l: "3 red" }, { v: 3, l: "3 blue" }, { v: 2, l: "2 pink" }], hint: "The bar shows all 8 counters in the bag." },
          { kind: "choose", rows: [{ t: "Equally likely", options: ["red and blue", "red and pink", "blue and pink"], a: 0 }] },
          { kind: "input", fields: [{ label: "P(red)", value: 0.375, placeholder: "a/b" }] }
        ],
        answer: "**Red and blue** are equally likely (3 each). P(red) = **[3/8]**.",
        cubes: { ops: [], note: "No calculation is needed: compare the counts, then write red counters out of all counters.", solve: [{ t: "Compare counts", s: "Red 3, blue 3, pink 2. Red and blue have the same number, so they are equally likely." }, { t: "Write the fraction", s: "3 red counters out of 8 counters: [3/8]." }] }
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Jimmy had 8 times as many balloons as Mindy. Jimmy had 48 balloons. How many balloons does Mindy have? Use a model to show the multiplicative relationship.",
        interact: [
          { kind: "bar", whole: { v: 48, l: "Jimmy: 48" }, parts: [{ v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }], hint: "Jimmy's 48 balloons are 8 equal parts. Each part is Mindy's amount. Tap a ? to reveal it." },
          { kind: "input", fields: [{ label: "Mindy has", value: 6, suffix: "balloons" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "48 ÷ 8 = 6." }, { t: "Check", s: "8 × 6 = 48, so Jimmy has 8 times as many." }] },
        answer: "**6 balloons**. 48 ÷ 8 = 6."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "A go-kart completes a lap in 1.287 minutes. Another go-kart completes the same lap in 1.325 minutes. How many thousandths of a minute difference was there between the 2 go-karts?",
        interact: [
          { kind: "jumps", start: 1.287, steps: [0.001, 0.01, 0.003], hint: "Count up from 1.287: + 0.003 to 1.29, + 0.01 to 1.3, then + 0.025." },
          { kind: "input", fields: [{ label: "Difference", value: 38, suffix: "thousandths" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count up", s: "1.287 + 0.003 = 1.29, + 0.035 = 1.325. 0.003 + 0.035 = 0.038." }, { t: "Use thousandths", s: "1325 thousandths − 1287 thousandths = 38 thousandths." }] },
        answer: "**38 thousandths** of a minute (0.038 minutes)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the properties missing from the table.",
        table: [["Shape", "Properties of sides", "Properties of angles", "Regular or irregular?"], ["Rectangle", "2 pairs of equal sides, 2 pairs of parallel lines", "4 right angles", "Irregular"], ["Rhombus", "4 equal sides, 2 pairs of parallel lines", "?", "Irregular"], ["Parallelogram", "Opposite sides are equal, 2 pairs of parallel lines", "Opposite angles are equal", "?"], ["Kite", "?", "One pair of opposite angles are equal", "Irregular"], ["Trapezium", "One pair of parallel sides", "Angles along each slanted side add to 180°", "Irregular"]],
        interact: [{ kind: "choose", rows: [
          { t: "Rhombus: angles", options: ["opposite angles are equal", "4 right angles", "no equal angles"], a: 0 },
          { t: "Parallelogram: regular or irregular?", options: ["Regular", "Irregular"], a: 1 },
          { t: "Kite: sides", options: ["2 pairs of equal sides next to each other", "4 equal sides", "2 pairs of parallel sides"], a: 0 }] }],
        answer: "Rhombus: **opposite angles are equal**. Parallelogram: **irregular**. Kite: **2 pairs of equal sides that are next to each other**.",
        explain: "The slide's trapezium row said 'opposite sides are parallel' and 'opposite angles are equal', which describes a parallelogram. It has been corrected: a trapezium has one pair of parallel sides."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "Which is the smallest fraction: [1/2], [3/4], [2/4] or [1/4]?",
        options: ["[1/2]", "[3/4]", "[2/4]", "[1/4]"],
        answer: 3,
        explain: "All can be written in quarters: [2/4], [3/4], [2/4], [1/4]. One quarter is the smallest.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 4, tol: 0.05, items: [["1/2", 0.5], ["3/4", 0.75], ["1/4", 0.25]] }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Mia is designing a game using a bag with 5 counters: 2 red, 1 blue and 2 pink. A player draws one counter at random. Record all possible outcomes and assign a fraction to show the probability of drawing each colour. Which outcomes are not equally likely? How could Mia change the game so that all outcomes are equally likely?",
        interact: [
          { kind: "bar", whole: { v: 5, l: "5 counters" }, parts: [{ v: 2, l: "2 red" }, { v: 1, l: "1 blue" }, { v: 2, l: "2 pink" }] },
          { kind: "input", fields: [{ label: "P(red)", value: 0.4, placeholder: "a/b" }, { label: "P(blue)", value: 0.2, placeholder: "a/b" }, { label: "P(pink)", value: 0.4, placeholder: "a/b" }] },
          { kind: "choose", rows: [
            { t: "Which colour is less likely?", options: ["red", "blue", "pink"], a: 1 },
            { t: "A way to make it fair", options: ["add 1 blue counter", "add 1 red counter", "take out the blue counter"], a: 0 }] }
        ],
        answer: "Red [2/5], blue **[1/5]**, pink [2/5]. **Blue** is less likely than red or pink. Adding 1 blue counter (2 of each colour) makes every colour equally likely: [2/6] each.",
        cubes: { ops: [], note: "No calculation is needed: write each colour's counters out of all 5 counters, then compare.", solve: [{ t: "Count each colour", s: "Red 2, blue 1, pink 2 out of 5 counters." }, { t: "Make the counts equal", s: "Add 1 blue so there are 2 of each, or take out 1 red and 1 pink so there is 1 of each." }] },
        explain: "Taking out 1 red and 1 pink (1 of each) also works."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "A baker bakes 24 loaves of bread every 3 hours. How many loaves will the baker bake in 12 hours? How many hours will it take to bake 96 loaves at the same rate?",
        interact: [
          { kind: "cells", cols: 5, w: 90, msg: "Every 3 hours adds 24 loaves.", grid: [
            ["#Hours", "#3", "#6", "#9", "#12"],
            ["#Loaves", "24", { v: 48 }, { v: 72 }, { v: 96 }]] },
          { kind: "input", fields: [{ label: "Loaves in 12 hours", value: 96 }, { label: "Hours for 96 loaves", value: 12 }] }
        ],
        cubes: { ops: ["×"], also: ["÷"], solve: [{ t: "Scale up", s: "12 hours is 4 lots of 3 hours: 4 × 24 = 96 loaves." }, { t: "Unit rate", s: "24 ÷ 3 = 8 loaves an hour. 96 ÷ 8 = 12 hours." }] },
        answer: "**96 loaves** in 12 hours, and **12 hours** for 96 loaves."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "A pickleball set costs $75. Shop A offers 25% off. Shop B offers $20 off. Which shop offers the best price? Communicate your reasoning.",
        interact: [
          { kind: "shade", parts: 4, pct: true, each: 18.75, money: true, hint: "The strip is the $75 set, cut into quarters. Shade Shop A's 25% discount." },
          { kind: "input", fields: [{ label: "Shop A price", prefix: "$", value: 56.25 }, { label: "Shop B price", prefix: "$", value: 55 }] },
          { kind: "choose", rows: [{ t: "Best price", options: ["Shop A", "Shop B"], a: 1 }] }
        ],
        cubes: { ops: ["×", "−"], also: ["÷"], solve: [{ t: "Find 25%", s: "25% is a quarter: $75 ÷ 4 = $18.75. Shop A: $75 − $18.75 = $56.25." }, { t: "Compare", s: "Shop B: $75 − $20 = $55. $55 is less than $56.25." }] },
        answer: "**Shop B** ($55). Shop A takes off $18.75, so its price is $56.25. Shop B is $1.25 cheaper."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Water bottles for a school sports day are filled with these amounts of water, recorded in litres. Order the capacities from smallest to largest. Which bottle holds more than 1000 mL?",
        table: [["Bottle", "Volume (L)"], ["A", "0.325"], ["B", "0.75"], ["C", "1.275"]],
        interact: [
          { kind: "numberline", min: 0, max: 1.5, ticks: 10, labelStep: 0.5, tol: 0.04, items: [["A 0.325 L", 0.325], ["B 0.75 L", 0.75], ["C 1.275 L", 1.275]] },
          { kind: "order", items: ["A (0.325 L)", "B (0.75 L)", "C (1.275 L)"], answer: [0, 1, 2] },
          { kind: "choose", rows: [{ t: "More than 1000 mL", options: ["A", "B", "C"], a: 2 }] }
        ],
        answer: "**A (0.325 L), B (0.75 L), C (1.275 L)**. Only **bottle C** holds more than 1000 mL (1 L): 1.275 L = 1275 mL."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "The fraction [2/10] is equivalent to [1/5]. Communicate your reasoning.",
        answer: true,
        explain: "Halve the numerator and denominator of [2/10]: 2 ÷ 2 = 1 and 10 ÷ 2 = 5. Both shade the same amount of a whole.",
        interact: [{ kind: "shade", parts: 10, pre: [0, 1] }, { kind: "shade", parts: 5, pre: [0] }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Saxon is designing a mystery bag with 12 counters: some are green and some are blue. He wants it to be twice as likely to pick a green counter as a blue counter. How many green and blue counters should Saxon put in the bag? Represent the probability of picking each colour as a fraction.",
        interact: [
          { kind: "bar", whole: { v: 12, l: "12 counters" }, parts: [{ v: 4, l: "?", n: "green" }, { v: 4, l: "?", n: "green" }, { v: 4, l: "?", n: "blue" }], hint: "Twice as likely: for every 1 blue, 2 green. That is 3 equal parts." },
          { kind: "input", fields: [{ label: "Green", value: 8 }, { label: "Blue", value: 4 }, { label: "P(green)", value: 2 / 3, placeholder: "a/b" }, { label: "P(blue)", value: 1 / 3, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["÷", "×"], solve: [{ t: "Equal parts", s: "2 green for every 1 blue makes 3 parts. 12 ÷ 3 = 4, so 4 blue and 8 green." }, { t: "Check", s: "8 is twice 4, and 8 + 4 = 12. P(green) = [8/12] = [2/3], P(blue) = [4/12] = [1/3]." }] },
        answer: "**8 green** and **4 blue**. P(green) = [8/12] = **[2/3]**, P(blue) = [4/12] = **[1/3]**.",
        explain: "The slide says 10 counters, but twice as likely needs a total that splits into 3 equal parts, and 10 doesn't. The question uses 12 counters instead."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the digits 3, 1, 4, 5, the operations +, −, × and ÷ and brackets ( ) to create equations with answers from 1 to 10. For example, (3 + 1) × 1 = 4.",
        interact: [{ kind: "sentence", fields: [
          { label: "Equation 1", placeholder: "e.g. (5 − 3) × 4 ÷ 1 = 8", re: "^[1345\\s()+\\-x÷/]+=\\s*(10|[1-9])\\s*$", msg: "Use only the digits 3, 1, 4 and 5 on the left, and make an answer from 1 to 10.", sample: "(5 - 3) x 4 ÷ 1 = 8" },
          { label: "Equation 2", placeholder: "e.g. 5 + 4 − 3 − 1 = 5", re: "^[1345\\s()+\\-x÷/]+=\\s*(10|[1-9])\\s*$", msg: "Use only the digits 3, 1, 4 and 5 on the left, and make an answer from 1 to 10.", sample: "5 + 4 - 3 - 1 = 5" },
          { label: "Equation 3", placeholder: "e.g. 5 + 4 + 1 − 3 = 7", re: "^[1345\\s()+\\-x÷/]+=\\s*(10|[1-9])\\s*$", msg: "Use only the digits 3, 1, 4 and 5 on the left, and make an answer from 1 to 10.", sample: "5 + 4 + 1 - 3 = 7" }] }],
        answer: "Answers vary, for example (5 − 3) × 4 ÷ 1 = 8, 5 + 4 − 3 − 1 = 5, 3 + 1 + 5 − 4 = 5, (5 + 4 + 1) ÷ 1 = 10 … (the slide's own example reuses the 1)."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "A bank account had $15. A withdrawal of $35 was made. What is the account balance? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 15, min: -25, max: 20, back: true, money: true, steps: [5, 15, 20], hint: "Start at $15. Jump back $15 to reach $0, then keep going." },
          { kind: "input", fields: [{ label: "Balance", prefix: "$", value: -20 }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Jump through zero", s: "$15 − $15 = $0, then $20 more is −$20." }, { t: "Find the difference", s: "$35 − $15 = $20 more than was in the account, so the balance is −$20." }] },
        answer: "**−$20** (the account is $20 overdrawn). 15 − 35 = −20."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Amie rolled a dice 12 times. Her rolls were 3, 5, 2, 6, 3, 1, 3, 4, 2, 6, 3, 5. Use the term probability to describe the likelihood of rolling a 3.",
        interact: [
          { kind: "tally", counts: true, hint: "Tap + for each roll as the class reads them out.", rows: [{ l: "1", a: 1 }, { l: "2", a: 2 }, { l: "3", a: 4 }, { l: "4", a: 1 }, { l: "5", a: 2 }, { l: "6", a: 2 }] },
          { kind: "input", fields: [{ label: "Threes rolled", value: 4 }, { label: "Amie's results: P(3)", value: 1 / 3, placeholder: "a/b" }, { label: "Theory: P(3)", value: 1 / 6, placeholder: "a/b" }] }
        ],
        answer: "In theory the probability of rolling a 3 is **[1/6]** (1 of 6 equally likely faces). Amie rolled 3 four times out of 12, so her result was [4/12] = **[1/3]**, more often than expected.",
        explain: "The rolls were read from the dice pictures on the slide."
      }
    ]
  ]
});
