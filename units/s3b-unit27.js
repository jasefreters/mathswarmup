/*
  Stage 3 Year B, Unit 27 — Review of learning (Term 2, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 2, ls: 2, unit: 27,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 27 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The number 73 is …",
        options: ["prime", "composite", "both prime and composite", "neither prime nor composite"],
        answer: 0,
        explain: "73 has only 2 factors: 1 and 73. It isn't in the 2, 3, 5 or 7 times tables, so it is prime.",
        interact: [{ kind: "numchart", from: 1, to: 73, answer: [1, 73], hint: "Tap every factor of 73 you can find." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Write the related multiplication and division number sentences for 56, 8 and 7.",
        interact: [
          { kind: "array", rows: 7, cols: 8, showTotal: true, hint: "7 rows of 8. Rotate it to see 8 rows of 7." },
          { kind: "sentence", fields: [
            { label: "Multiplication", placeholder: "e.g. 7 × 8 = 56", re: "^\\s*(7\\s*x\\s*8|8\\s*x\\s*7)\\s*=\\s*56\\s*$", msg: "Use 7, 8 and 56 in a multiplication sentence.", sample: "7 x 8 = 56" },
            { label: "Multiplication", placeholder: "e.g. 8 × 7 = 56", re: "^\\s*(7\\s*x\\s*8|8\\s*x\\s*7)\\s*=\\s*56\\s*$", msg: "Use 7, 8 and 56 in a multiplication sentence.", sample: "8 x 7 = 56" },
            { label: "Division", placeholder: "e.g. 56 ÷ 8 = 7", re: "^\\s*56\\s*[÷/]\\s*(8\\s*=\\s*7|7\\s*=\\s*8)\\s*$", msg: "Start with 56 and divide by 7 or 8.", sample: "56 ÷ 8 = 7" },
            { label: "Division", placeholder: "e.g. 56 ÷ 7 = 8", re: "^\\s*56\\s*[÷/]\\s*(8\\s*=\\s*7|7\\s*=\\s*8)\\s*$", msg: "Start with 56 and divide by 7 or 8.", sample: "56 ÷ 7 = 8" }] }
        ],
        answer: "7 × 8 = 56 · 8 × 7 = 56 · 56 ÷ 8 = 7 · 56 ÷ 7 = 8"
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Write the number 3 458 217 in words.",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 3458217, hint: "Read one house at a time: millions, then thousands, then ones." },
          { kind: "choose", rows: [{ t: "In words", options: ["three million, four hundred and fifty-eight thousand, two hundred and seventeen", "three million, four hundred and eighty-five thousand, two hundred and seventeen", "three hundred and forty-five thousand, eight hundred and twenty-one"], a: 0 }] }
        ],
        answer: "Three million, four hundred and fifty-eight thousand, two hundred and seventeen."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Who recorded the lowest resting pulse rate? Who recorded the highest pulse rate after exercise?",
        interact: [
          { kind: "bargraph", max: 140, step: 20, ylabel: "Pulse rate (BPM)", xlabel: "Students", label: "Pulse rate of 10 students, resting and after exercise",
            series: [{ l: "Resting", c: "#4472C4" }, { l: "After exercise", c: "#ED7D31" }],
            groups: [{ l: "Keira", v: [80, 110] }, { l: "Marli", v: [86, 98] }, { l: "Bella", v: [78, 100] }, { l: "Bayah", v: [82, 120] }, { l: "Kenji", v: [70, 96] }, { l: "Koen", v: [84, 112] }, { l: "Monaro", v: [76, 116] }, { l: "Tahnee", v: [82, 123] }, { l: "Kody", v: [88, 118] }, { l: "Naomi", v: [76, 116] }] },
          { kind: "choose", rows: [
            { t: "Lowest resting", options: ["Bella", "Kenji", "Monaro", "Naomi"], a: 1 },
            { t: "Highest after exercise", options: ["Bayah", "Kody", "Tahnee", "Monaro"], a: 2 }] }
        ],
        answer: "**Kenji** had the lowest resting pulse rate (about 70 BPM). **Tahnee** had the highest after exercise (about 123 BPM).",
        explain: "Bar heights are read from the slide's graph to the nearest few beats per minute."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Describe how the range is different for each facility at the swimming pool.",
        interact: [
          { kind: "bargraph", line: true, max: 70, step: 10, ylabel: "Average number of people", xlabel: "Days of the week", label: "Line graph of swimming pool use by day", legendW: 170,
            series: [{ l: "Recreational pool", c: "#4472C4" }, { l: "Lane swimming", c: "#C00000" }, { l: "Waterslide", c: "#70AD47" }],
            groups: [{ l: "Monday", v: [10, 22, 10] }, { l: "Tuesday", v: [12, 26, 6] }, { l: "Wednesday", v: [15, 28, 8] }, { l: "Thursday", v: [9, 25, 5] }, { l: "Friday", v: [28, 28, 15] }, { l: "Saturday", v: [63, 12, 60] }, { l: "Sunday", v: [52, 15, 50] }] },
          { kind: "input", fields: [{ label: "Range: recreational pool", min: 52, max: 56 }, { label: "Range: lane swimming", min: 14, max: 18 }, { label: "Range: waterslide", min: 53, max: 57 }] }
        ],
        answer: "Range = highest − lowest. Recreational pool: 63 − 9 = **54**. Lane swimming: 28 − 12 = **16**. Waterslide: 60 − 5 = **55**. The pool and waterslide vary a lot (busy on weekends); lane swimming stays steady.",
        explain: "Values are read from the slide's line graph, so ranges within 2 of these are accepted."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "'Product' means the result of multiplying 2 or more numbers.",
        answer: true,
        explain: "For example, the product of 4 and 6 is 24, because 4 × 6 = 24.",
        interact: [{ kind: "array", rows: 4, cols: 6, showTotal: true }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use a multiplication algorithm to solve: The cricket club buys boxes of cricket balls. Each box holds 22 balls. The cricket club bought 35 boxes. How many cricket balls did they get in total?",
        interact: [
          { kind: "cells", cols: 3, w: 90, msg: "Multiply each part: tens × tens, tens × ones, and so on.", grid: [
            ["#×", "#30", "#5"],
            ["#20", { v: 600 }, { v: 100 }],
            ["#2", { v: 60 }, { v: 10 }]] },
          { kind: "input", fields: [{ label: "Cricket balls", value: 770 }] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Area model", s: "35 × 22 = 30 × 20 + 30 × 2 + 5 × 20 + 5 × 2 = 600 + 60 + 100 + 10 = 770." }, { t: "Split one number", s: "35 × 22 = 35 × 20 + 35 × 2 = 700 + 70 = 770." }] },
        answer: "**770 cricket balls**. 35 × 22 = 770."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Partition 541 267 895 in 2 different ways using non-standard partitioning.",
        interact: [
          { kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 541267895, target: 541267895, need: "nonstandard" },
          { kind: "expr", count: 2, target: 541267895, placeholder: "e.g. 541 000 000 + 267 895", mustUse: { re: "\\+", msg: "Join the parts with +." }, sample: ["541 000 000 + 267 895", "500 000 000 + 41 267 895"] }
        ],
        answer: "Answers vary, for example 541 000 000 + 267 895, or 500 000 000 + 41 267 000 + 895, or 5412 hundred thousands + 67 895."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Which of these data representations is the most misleading? Communicate your reasoning.",
        img: "u27-sales.png",
        interact: [{ kind: "choose", rows: [
          { t: "Most misleading", options: ["A", "B"], a: 1 },
          { t: "Why?", options: ["It only shows the 4 best months", "It shows every month of the year", "Its scale starts at 0"], a: 0 }] }],
        answer: "**B**. It shows only February, April, July and September, the best months, so sales look huge all year. Graph A shows every month, including the many months with low sales."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Classify the triangles.",
        interact: [
          { kind: "corners", view: [880, 220], r: 26, q: 34, shapes: [
            { p: [[150, 20], [50, 193], [250, 193]], l: "A", fill: "#7A3FE0", ly: 140 },
            { p: [[330, 40], [330, 193], [483, 193]], l: "B", fill: "#1260E6", lx: 370, ly: 150 },
            { p: [[560, 60], [590, 190], [840, 190]], l: "C", fill: "#C8102E", lx: 640, ly: 165 }] },
          { kind: "choose", rows: [
            { t: "A by angles", options: ["acute", "right", "obtuse"], a: 0 },
            { t: "A by sides", options: ["equilateral", "isosceles", "scalene"], a: 0 },
            { t: "B by angles", options: ["acute", "right", "obtuse"], a: 1 },
            { t: "B by sides", options: ["equilateral", "isosceles", "scalene"], a: 1 },
            { t: "C by angles", options: ["acute", "right", "obtuse"], a: 2 },
            { t: "C by sides", options: ["equilateral", "isosceles", "scalene"], a: 2 }] }
        ],
        answer: "A: **equilateral** (acute) · B: **right-angled isosceles** · C: **obtuse-angled scalene**",
        explain: "The slide's triangles were measured and redrawn: A has 3 equal sides, B has a right angle and 2 equal sides, and C has one angle greater than 90° and no equal sides."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which of these numbers has the factors 6 and 7?",
        options: ["24", "42", "36", "40"],
        answer: 1,
        explain: "6 × 7 = 42, so 6 and 7 are both factors of 42.",
        interact: [{ kind: "array", rows: 6, cols: 7, showTotal: true }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "A farmer has collected 97 eggs. Each carton holds 12 eggs. 8 cartons are filled. How many eggs are left?",
        interact: [
          { kind: "pack", mode: "pack", size: 12, total: 97, label: "carton", thing: "eggs", hint: "Fill cartons of 12 until you can't fill another." },
          { kind: "input", fields: [{ label: "Eggs left", value: 1 }] }
        ],
        cubes: { ops: ["×", "−"], also: ["÷"], solve: [{ t: "Multiply, then subtract", s: "8 cartons × 12 eggs = 96 eggs. 97 − 96 = 1 egg left." }, { t: "Divide", s: "97 ÷ 12 = 8 remainder 1. 1 egg is left over." }] },
        answer: "**1 egg** is left. 8 × 12 = 96, and 97 − 96 = 1."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "What is the value of the digit in the tenths, hundredths and thousandths place of 4.581? How many thousandths are represented in the number?",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 4.581, hint: "Break the ones and tenths into thousandths to count them all." },
          { kind: "input", fields: [{ label: "Tenths", value: 0.5 }, { label: "Hundredths", value: 0.08 }, { label: "Thousandths", value: 0.001 }, { label: "Thousandths in 4.581", value: 4581 }] }
        ],
        answer: "Tenths **0.5** · hundredths **0.08** · thousandths **0.001** · 4.581 is **4581 thousandths**."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Which days had maximum temperatures below 0°C? What is the difference in temperature between the warmest day and the coldest day?",
        img: "u27-beijing.png",
        interact: [
          { kind: "select", hint: "Tap every day with a maximum below 0°C.", items: [["12 Jan", false], ["13 Jan", true], ["14 Jan", false], ["15 Jan", true], ["16 Jan", false], ["17 Jan", true]] },
          { kind: "jumps", start: -10, min: -12, max: 10, steps: [1, 5, 10], hint: "Start at the coldest minimum (−10°C) and jump up to the warmest maximum (9°C)." },
          { kind: "input", fields: [{ label: "Difference", value: 19, suffix: "°C" }] }
        ],
        answer: "**13, 15 and 17 January** had maximums below 0°C (14 January was exactly 0°C). The warmest maximum was 9°C (10 January) and the coldest minimum was −10°C (16 January), a difference of **19°C**.",
        explain: "'Warmest day' and 'coldest day' are read as the highest maximum and the lowest minimum on the graph."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Which of these data representations is the most misleading? Communicate your reasoning.",
        img: "u27-temps.png",
        interact: [{ kind: "choose", rows: [
          { t: "Most misleading", options: ["A", "B"], a: 0 },
          { t: "Why?", options: ["Its temperature axis starts at 13.6°C, so a small rise looks huge", "Its axis starts at 0", "It shows fewer decades"], a: 0 }] }],
        answer: "**A**. Its scale starts at 13.6°C and goes up in 0.1°C steps, so a rise of under 1°C looks like a huge jump. Graph B starts at 0°C and shows the same data.",
        explain: "Some classes may argue B hides a real rise. Both can be discussed; the checked answer is A, because its cut-off axis exaggerates the change."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "24 counters could be arranged into an 8 by 3 array. Communicate your reasoning.",
        answer: true,
        explain: "8 rows of 3 = 24, because 8 × 3 = 24.",
        interact: [{ kind: "array", rows: 8, cols: 3, showTotal: true }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Solve this number sentence: 12 × __ = 96 ÷ 8. Communicate your reasoning.",
        interact: [{ kind: "scale", left: "12 × ?", right: "96 ÷ 8", answer: 1 }],
        answer: "**1**. 96 ÷ 8 = 12, and 12 × 1 = 12, so both sides are equal."
      },
      {
        type: "sr", focus: "Represent numbers A",
        prompt: "Place the decimal numbers in ascending order: 0.490, 0.55, 0.901. Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.04, items: [["0.55", 0.55], ["0.901", 0.901], ["0.490", 0.49]] },
          { kind: "order", items: ["0.55", "0.901", "0.490"], answer: [2, 0, 1] }
        ],
        answer: "0.490, 0.55, 0.901. Compare the tenths: 4 tenths, 5 tenths, 9 tenths."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "How many years between the child's first steps and going to zone in cross country? Communicate your reasoning.",
        img: "u27-timeline.png",
        interact: [
          { kind: "jumps", start: 2013, end: 2022, steps: [1], hint: "Each dot is 1 year. Jump from 2013 (first steps) to 2022 (zone)." },
          { kind: "input", fields: [{ label: "Years", value: 9 }] }
        ],
        answer: "**9 years**. First steps were in 2013 and zone cross country was in 2022: 2022 − 2013 = 9.",
        explain: "Each label is matched to the dot above or below it: 'Took first steps' is on the 2013 dot and 'Got to Zone in Cross Country' is on the 2022 dot."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Record the position of the canoeing and the campfire on the map.",
        img: "u27-camp.png",
        interact: [
          { kind: "plane", range: [-5, 5, -5, 5], points: [{ l: "Canoeing", x: -4, y: -2 }, { l: "Campfire", x: 2, y: 4 }, { l: "Archery", x: -1, y: -1 }, { l: "Kitchen", x: 1, y: 1 }, { l: "Hiking", x: -2, y: 2 }, { l: "Campground", x: 3, y: -1 }, { l: "Toilets", x: -1, y: -4 }] },
          { kind: "input", fields: [{ label: "Canoeing x", value: -4 }, { label: "Canoeing y", value: -2 }, { label: "Campfire x", value: 2 }, { label: "Campfire y", value: 4 }] }
        ],
        answer: "Canoeing **(−4, −2)** · Campfire **(2, 4)**. Go across the x-axis first, then up or down."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "4.6 plus 6 tenths equals",
        options: ["5.2", "10.6", "4.12", "5.4"],
        answer: 0,
        explain: "6 tenths + 6 tenths = 12 tenths = 1 and 2 tenths. 4 + 1.2 = 5.2.",
        interact: [{ kind: "pv", cols: ["O", "t"], start: 4.6, hint: "Add 6 tenths, then group 10 tenths into a one." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "How can we express 4 cakes shared between 3 people? Record your answer using fractions, words and division symbols.",
        interact: [
          { kind: "pack", mode: "share", n: 3, total: 4, thing: "cakes", label: "person", hint: "Share the cakes one at a time. What do you do with the last cake?" },
          { kind: "input", fields: [{ label: "Each person gets", value: 4 / 3, placeholder: "a/b" }, { label: "Division", accept: ["4 ÷ 3", "4 / 3"], placeholder: "4 ÷ 3" }] },
          { kind: "choose", rows: [{ t: "In words", options: ["four thirds each", "three quarters each", "four and a third each"], a: 0 }] }
        ],
        answer: "[4/3] (1[1/3]) cakes each · four thirds, or one and one third · 4 ÷ 3"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "3.14 m is equivalent to ___ centimetres or ___ millimetres. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h"], start: 3.14, shift: true, hint: "× 100 changes metres to centimetres. × 1000 changes metres to millimetres." },
          { kind: "input", fields: [{ label: "Centimetres", value: 314, suffix: "cm" }, { label: "Millimetres", value: 3140, suffix: "mm" }] }
        ],
        answer: "**314 cm** or **3140 mm**. 1 m = 100 cm = 1000 mm."
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Arrange the following numbers in ascending order: 3 452 478, 8 601 329, 3 452 577. Communicate your reasoning.",
        interact: [{ kind: "order", items: ["3 452 478", "8 601 329", "3 452 577"], answer: [0, 2, 1] }],
        answer: "3 452 478, 3 452 577, 8 601 329. The first two match until the hundreds: 4 hundreds is less than 5 hundreds."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Use kilometres (km) to record these distances: 1200 metres, 3650 metres, 12 550 metres.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O", "t", "h", "th"], start: 12550, shift: true, hint: "÷ 1000 changes metres to kilometres. Press ÷ 10 three times." },
          { kind: "input", fields: [{ label: "1200 m", value: 1.2, suffix: "km" }, { label: "3650 m", value: 3.65, suffix: "km" }, { label: "12 550 m", value: 12.55, suffix: "km" }] }
        ],
        answer: "1200 m = **1.2 km** · 3650 m = **3.65 km** · 12 550 m = **12.55 km**. (Also 1 km 200 m, 3 km 650 m, 12 km 550 m.)",
        explain: "The slide asks for km and m abbreviations; the answer boxes take kilometres as decimals, and the mixed form is shown in the answer."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "11.5 take away 9 tenths equals 10.4. Communicate your reasoning.",
        answer: false,
        explain: "11.5 − 0.5 = 11, then 11 − 0.4 = 10.6. The answer is 10.6, not 10.4.",
        interact: [{ kind: "jumps", start: 11.5, back: true, steps: [0.1, 0.4, 0.5], hint: "Jump back 0.5 to 11, then back 0.4 more." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Complete the table using the pattern. One shape has 7 sides.",
        interact: [
          { kind: "jumps", start: 0, max: 105, steps: [7, 35], hint: "Each shape adds 7 sides. Jump + 7." },
          { kind: "cells", cols: 9, w: 70, msg: "Each shape has 7 sides, so multiply the number of shapes by 7.", grid: [
            ["#Shapes", "#1", "#2", "#3", "#4", "#5", "#…", "#10", "#15"],
            ["#Sides", 7, { v: 14 }, { v: 21 }, { v: 28 }, { v: 35 }, "#…", { v: 70 }, { v: 105 }]] }
        ],
        answer: "7, 14, 21, 28, 35 … 70, 105. Number of sides = number of shapes × 7.",
        explain: "The slide gives only the first entry (1 shape, 7 sides), so each shape is assumed to have 7 sides (a heptagon)."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Write the measurements of mass in decimals: 5 kilograms and 258 grams, 2650 grams.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 5.258, hint: "This chart is in kilograms. 1 thousandth of a kilogram is 1 gram." },
          { kind: "input", fields: [{ label: "5 kg 258 g =", value: 5.258, suffix: "kg" }, { label: "2650 g =", value: 2.65, suffix: "kg" }] }
        ],
        answer: "**5.258 kg** and **2.65 kg**. 1000 g = 1 kg."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Record in ascending order: 7.294, 7.924, 7.429. Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 7, max: 8, ticks: 10, tol: 0.03, items: [["7.294", 7.294], ["7.924", 7.924], ["7.429", 7.429]] },
          { kind: "order", items: ["7.294", "7.924", "7.429"], answer: [0, 2, 1] }
        ],
        answer: "7.294, 7.429, 7.924. All have 7 ones, so compare the tenths: 2, 4, 9."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Find the total length of 3 items measuring 5 millimetres, 45 centimetres and 6.2 metres.",
        interact: [
          { kind: "jumps", start: 0, steps: [5, 450, 6200], hint: "Change everything to millimetres first: 5 mm, 450 mm, 6200 mm." },
          { kind: "input", fields: [{ label: "Total", value: 6655, suffix: "mm" }, { label: "or", value: 6.655, suffix: "m" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Change to millimetres", s: "5 mm + 450 mm + 6200 mm = 6655 mm." }, { t: "Change to metres", s: "0.005 m + 0.45 m + 6.2 m = 6.655 m." }] },
        answer: "**6655 mm** (6.655 m or 665.5 cm)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "This metal bar is 2.7 m long. If one section is 1.2 m, how long is the other part of the bar?",
        options: ["3.9 m", "1.9 m", "1.5 m", "2.5 m"],
        answer: 2,
        explain: "2.7 − 1.2 = 1.5 m. Check: 1.5 + 1.2 = 2.7.",
        interact: [{ kind: "bar", whole: { v: 2.7, l: "2.7 m", n: "whole bar" }, parts: [{ v: 1.5, l: "1.5 m", n: "other part", hide: true }, { v: 1.2, l: "1.2 m", n: "one section" }] }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Solve the following problem: If 8 concert tickets cost $1936, what is the cost of one ticket? Communicate your reasoning.",
        interact: [
          { kind: "bar", whole: { v: 1936, l: "$1936", n: "8 tickets" }, parts: [1, 2, 3, 4, 5, 6, 7, 8].map(() => ({ v: 242, l: "$242", hide: true })), hint: "The bar is shared into 8 equal tickets. Tap a ? to reveal one ticket." },
          { kind: "input", fields: [{ label: "One ticket", prefix: "$", value: 242 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Halve three times", s: "÷ 8 is halving 3 times: 1936 → 968 → 484 → 242." }, { t: "Split the number", s: "1936 = 1600 + 336. 1600 ÷ 8 = 200, 336 ÷ 8 = 42. 200 + 42 = $242." }] },
        answer: "**$242** per ticket. 1936 ÷ 8 = 242 (check: 8 × 242 = 1936)."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Solve the problem using 2 different strategies. A cyclist completes part 1 of a race in 732.589 seconds and part 2 in 730.124 seconds. What is the total time taken to complete both parts?",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 732.589, hint: "Add 730.124 column by column, then group any column with 10 or more." },
          { kind: "input", fields: [{ label: "Total time", value: 1462.713, suffix: "seconds" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Split into wholes and decimals", s: "732 + 730 = 1462. 0.589 + 0.124 = 0.713. 1462 + 0.713 = 1462.713 s." }, { t: "Double and adjust", s: "730 + 730 = 1460. 2.589 + 0.124 = 2.713. 1460 + 2.713 = 1462.713 s." }] },
        answer: "**1462.713 seconds**."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Record in descending order: 6.971, 0.697, 6.719, 6.9. Communicate your reasoning.",
        interact: [{ kind: "order", items: ["6.971", "0.697", "6.719", "6.9"], answer: [0, 3, 2, 1] }],
        answer: "6.971, 6.9, 6.719, 0.697. 6.9 = 6.900, which is less than 6.971 but more than 6.719."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "If each side of this rhombus is 12 cm, what is its perimeter? Communicate your reasoning.",
        interact: [
          { kind: "sides", label: "Rhombus with each side 12 cm", view: [420, 300], fill: "#5B8CFF",
            poly: [[210, 30], [370, 150], [210, 270], [50, 150]],
            dims: [{ from: [228, 22], to: [382, 138] }],
            labels: [{ x: 326, y: 70, t: "12 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 48, suffix: "cm" }] }
        ],
        answer: "**48 cm**. A rhombus has 4 equal sides: 4 × 12 = 48 cm."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "7.8 plus 8 tenths equals 8.6. Communicate your reasoning.",
        answer: true,
        explain: "8 tenths + 8 tenths = 16 tenths = 1 and 6 tenths. 7 + 1.6 = 8.6.",
        interact: [{ kind: "pv", cols: ["O", "t"], start: 7.8, hint: "Add 8 tenths, then group 10 tenths into a one." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Solve the following problem: A recipe uses 5 eggs for 12 muffins. How many eggs are needed to make 36 muffins?",
        interact: [
          { kind: "cells", cols: 4, w: 100, msg: "Each extra 12 muffins needs another 5 eggs.", grid: [
            ["#Muffins", "#12", "#24", "#36"],
            ["#Eggs", 5, { v: 10 }, { v: 15 }]] },
          { kind: "input", fields: [{ label: "Eggs", value: 15 }] }
        ],
        cubes: { ops: ["×"], also: ["÷"], solve: [{ t: "Scale up", s: "36 muffins is 3 lots of 12. 3 × 5 eggs = 15 eggs." }, { t: "Ratio table", s: "12 → 5, 24 → 10, 36 → 15." }] },
        answer: "**15 eggs**. 36 ÷ 12 = 3, and 3 × 5 = 15."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "The jacket costs $128.69. Estimate a discount of 10%, 25% and 50%. Communicate your reasoning.",
        img: "u27-jacket.png",
        interact: [
          { kind: "shade", parts: 10, pct: true, each: 13, money: true, hint: "Round $128.69 to about $130. Each part of this strip is 10%." },
          { kind: "shade", parts: 4, pct: true, each: 32.5, money: true, hint: "Each part of this strip is 25% of about $130." },
          { kind: "input", fields: [{ label: "10% off", prefix: "$", min: 12, max: 13.5 }, { label: "25% off", prefix: "$", min: 31, max: 33 }, { label: "50% off", prefix: "$", min: 63, max: 65.5 }] }
        ],
        cubes: { ops: ["×", "÷"], solve: [{ t: "Round first", s: "$128.69 ≈ $130. 10% = $13, 50% = half = $65, 25% = half of 50% ≈ $32.50." }, { t: "Use 10%", s: "10% ≈ $13. 50% = 5 × $13 = $65. 25% = 50% ÷ 2 ≈ $32.50." }] },
        answer: "About **$13** (10%), **$32** (25%) and **$64–$65** (50%). Exact: $12.87, $32.17, $64.35.",
        explain: "This is an estimate, so a range of sensible answers is accepted for each discount."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "In what way does this data representation mislead the audience? Communicate your reasoning.",
        img: "u27-decades.png",
        interact: [{ kind: "choose", rows: [{ t: "It misleads because", options: ["The temperature axis starts at 13.6°C, so a small rise looks huge", "It has no title", "It shows too many decades"], a: 0 }] }],
        answer: "The vertical axis starts at **13.6°C** and goes up in steps of 0.1°C. A rise of under 1°C over 120 years looks like a huge jump."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record these times using 12-hour and 24-hour time. Clock A is in the morning, clock B is in the evening and clock C is at night.",
        interact: [
          { kind: "clock", time: "11:15", h24: true },
          { kind: "clock", time: "7:15", h24: true },
          { kind: "clock", time: "9:45", h24: true },
          { kind: "input", fields: [
            { label: "A 12-hour", accept: ["11:15 am"], placeholder: "hh:mm am" }, { label: "A 24-hour", accept: ["11:15"], placeholder: "hh:mm" },
            { label: "B 12-hour", accept: ["7:15 pm"], placeholder: "hh:mm pm" }, { label: "B 24-hour", accept: ["19:15"], placeholder: "hh:mm" },
            { label: "C 12-hour", accept: ["9:45 pm"], placeholder: "hh:mm pm" }, { label: "C 24-hour", accept: ["21:45"], placeholder: "hh:mm" }] }
        ],
        answer: "A: **11:15 am**, 11:15 · B: **7:15 pm**, 19:15 · C: **9:45 pm**, 21:45",
        explain: "The slide's clocks don't say morning or evening, so A is set as morning and B and C as evening and night, giving a mix of conversions."
      }
    ]
  ]
});
