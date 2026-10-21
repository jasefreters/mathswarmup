/*
  Stage 3 Year A, Unit 8 — Review of learning (Term 2, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 2, ls: 3, unit: 8,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 8 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "Rebecca drank [1/3] of a glass of juice. Liam drank [1/2] of a different glass of juice. Which of the following could explain how Rebecca drank more juice than Liam?",
        options: ["Rebecca's glass was larger than Liam's glass.", "[1/3] is always larger than [1/2].", "Liam's glass was larger than Rebecca's.", "Rebecca drank orange juice and Liam drank apple juice."],
        answer: 0,
        explain: "A fraction depends on the size of its whole. [1/3] of a big glass can be more than [1/2] of a small glass.",
        interact: [
          { kind: "shade", parts: 3, pre: [0], hint: "Rebecca: [1/3] of a large glass" },
          { kind: "shade", parts: 2, pre: [0], hint: "Liam: [1/2] of a smaller glass (imagine this strip shorter)" }
        ]
      },
      {
        type: "sr", focus: "Geometric measure B (Stage 2 content reviewed)",
        prompt: "Record the grid references for the giraffe, snake, quokka and emu.",
        interact: [
          { kind: "gridref", src: "img/s3/u8-zoo.png", alt: "Zoo map with a grid, columns A to E and rows 1 to 5", box: [4.17, 2.07, 97.3, 93.0], cols: ["A", "B", "C", "D", "E"], rows: ["5", "4", "3", "2", "1"] },
          { kind: "input", fields: [{ label: "giraffe", accept: ["C5"] }, { label: "snake", accept: ["B4"] }, { label: "quokka", accept: ["C3"] }, { label: "emu", accept: ["B3"] }] }
        ],
        answer: "Giraffe **C5** · snake **B4** · quokka **C3** · emu **B3**. Read the letter across, then the number up."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Determine whether the following numbers are prime, composite or neither: 9, 11, 0. Communicate your reasoning.",
        interact: [
          { kind: "array", rows: 3, cols: 3, showTotal: true, hint: "Try to build each number as an array with more than one row. 9 can be 3 rows of 3." },
          { kind: "choose", rows: [
            { t: "9", options: ["prime", "composite", "neither"], a: 1 },
            { t: "11", options: ["prime", "composite", "neither"], a: 0 },
            { t: "0", options: ["prime", "composite", "neither"], a: 2 }] }
        ],
        answer: "**9 is composite** (factors 1, 3 and 9). **11 is prime** (only factors 1 and 11). **0 is neither**: prime and composite numbers are whole numbers greater than 1."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "For the number 827 309 146: What is the value of the digit in the hundreds place? How many ten thousands are in the number? What is the value of the digit in the hundred millions place?",
        interact: [
          { kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 827309146 },
          { kind: "input", fields: [{ label: "Hundreds digit is worth", value: 100 }, { label: "Ten thousands in the number", value: 82730 }, { label: "Hundred millions digit is worth", value: 800000000 }] }
        ],
        answer: "The hundreds digit is 1, worth **100**. There are **82 730** ten thousands in the number (the ten thousands digit itself is 0). The hundred millions digit is 8, worth **800 000 000**.",
        explain: "\"How many ten thousands are in the number\" is read as the total number of ten thousands (82 730), not the digit in that column (0)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Which type of data display is appropriate to represent the average temperature in Sydney? A. Column graph or B. Line graph. Communicate your reasoning.",
        img: "u8-line.png",
        interact: [{ kind: "choose", rows: [{ t: "Best display", options: ["A. Column graph", "B. Line graph"], a: 1 }] }],
        answer: "**B. Line graph.** Average temperature changes continuously through the year, and a line graph shows that change over time. A column graph can also compare one month with another.",
        explain: "Both displays can work; the line graph is accepted as the better choice because temperature changes over time."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "[1/5] is smaller than [1/2]. Communicate your reasoning.",
        answer: true,
        explain: "With the same whole, splitting it into 5 equal parts makes smaller parts than splitting it into 2.",
        interact: [
          { kind: "shade", parts: 5, pre: [0], hint: "[1/5] of the strip" },
          { kind: "shade", parts: 2, pre: [0], hint: "[1/2] of the same strip" }
        ]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Complete the sentences using: identifies a specific point, gives the area of a location.",
        interact: [
          { kind: "plane", range: [0, 7, 0, 7], points: [{ l: "P", x: 3, y: 5 }], hint: "On the number plane, a coordinate names one exact point. Tap P." },
          { kind: "choose", rows: [
            { t: "The grid-map reference is used to …", options: ["identify a specific point", "give the area of a location"], a: 1 },
            { t: "The number plane is used to …", options: ["identify a specific point", "give the area of a location"], a: 0 }] }
        ],
        answer: "The grid-map reference is used to **give the area of a location** (a whole square). The number plane is used to **identify a specific point** (where two lines cross)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use mental strategies to calculate: 7 × 70, 8 × 600, 9 × 2000.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 49, shift: true, hint: "7 × 7 = 49. Press × 10 to make 7 × 70." },
          { kind: "input", fields: [{ label: "7 × 70 =", value: 490 }, { label: "8 × 600 =", value: 4800 }, { label: "9 × 2000 =", value: 18000 }] }
        ],
        answer: "**490**, **4800** and **18 000**. Use the basic fact, then multiply by 10, 100 or 1000: 7 × 7 = 49 → 490; 8 × 6 = 48 → 4800; 9 × 2 = 18 → 18 000."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Partition 827 309 146 in non-standard form.",
        interact: [
          { kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 827309146, target: 827309146, need: "nonstandard" },
          { kind: "expr", count: 1, target: 827309146, placeholder: "e.g. 827 000 000 + 309 146", mustUse: { re: "[1-9][\\d ]*[1-9]", msg: "Group some places together, like 309 146." }, sample: ["827 000 000 + 309 146"] }
        ],
        answer: "Answers vary, for example 827 000 000 + 309 146, or 800 000 000 + 27 309 146, or 8273 hundred thousands + 9146."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Calculate the perimeters of the two-dimensional shapes. Communicate your strategies.",
        interact: [
          { kind: "sides", label: "Square with one side labelled 325 m and all sides marked equal", view: [300, 280],
            poly: [[50, 60], [250, 60], [250, 260], [50, 260]],
            dims: [{ from: [52, 36], to: [248, 36] }],
            labels: [{ x: 150, y: 24, t: "325 m" }] },
          { kind: "sides", label: "Isosceles triangle with two equal sides of 415 m and a base of 280 m", view: [340, 300],
            poly: [[170, 30], [270, 250], [70, 250]],
            dims: [{ from: [190, 26], to: [292, 250] }, { from: [72, 276], to: [268, 276] }],
            labels: [{ x: 262, y: 126, t: "415 m", anchor: "start" }, { x: 170, y: 296, t: "280 m" }] },
          { kind: "input", fields: [{ label: "Square", value: 1300, suffix: "m" }, { label: "Triangle", value: 1110, suffix: "m" }] }
        ],
        answer: "Square: 4 × 325 = **1300 m**. Triangle: the marks show two equal sides, so 415 + 415 + 280 = **1110 m**.",
        explain: "The tick marks show the square's sides are all equal and the triangle's two slanting sides are equal."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "James has [1/2] of a chocolate bar and Stella has [1/3] of a **different** sized chocolate bar. Why can't you add [1/2] and [1/3] to find out how much chocolate they have altogether?",
        options: ["The chocolate bars are different sizes, so they are fractions of different sized wholes.", "You can, they have [2/5] altogether.", "[1/2] is bigger than [1/3], so you can not add fractions that are different sizes.", "Chocolate can only be counted in whole bars."],
        answer: 0,
        explain: "Fractions can only be added when they are parts of the same whole. (Also, [1/2] + [1/3] is not [2/5].)",
        interact: [
          { kind: "shade", parts: 2, pre: [0], hint: "James: [1/2] of his bar" },
          { kind: "shade", parts: 3, pre: [0], hint: "Stella: [1/3] of a different bar" }
        ]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the coordinates of: a. the circle, b. the triangle, c. the heart, d. the smiley face, e. the sun.",
        interact: [
          { kind: "plane", range: [0, 7, 0, 7], points: [{ l: "a", x: 6, y: 4 }, { l: "b", x: 2, y: 7 }, { l: "c", x: 4, y: 3 }, { l: "d", x: 1, y: 2 }, { l: "e", x: 7, y: 1 }] },
          { kind: "input", fields: [{ label: "a.", accept: ["(6, 4)"], placeholder: "(x, y)" }, { label: "b.", accept: ["(2, 7)"], placeholder: "(x, y)" }, { label: "c.", accept: ["(4, 3)"], placeholder: "(x, y)" }, { label: "d.", accept: ["(1, 2)"], placeholder: "(x, y)" }, { label: "e.", accept: ["(7, 1)"], placeholder: "(x, y)" }] }
        ],
        answer: "a. **(6, 4)** · b. **(2, 7)** · c. **(4, 3)** · d. **(1, 2)** · e. **(7, 1)**. Across the x-axis first, then up the y-axis."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use mental strategies to calculate: 50 × 7, 900 × 4, 8000 × 6.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 35, shift: true, hint: "5 × 7 = 35. Press × 10 to make 50 × 7." },
          { kind: "input", fields: [{ label: "50 × 7 =", value: 350 }, { label: "900 × 4 =", value: 3600 }, { label: "8000 × 6 =", value: 48000 }] }
        ],
        answer: "**350**, **3600** and **48 000** (5 × 7 = 35, 9 × 4 = 36, 8 × 6 = 48, then × 10, × 100 or × 1000)."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "For the number 6.528: What is the value of the digit in the tenths place? The hundredths place? The thousandths place?",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 6.528 },
          { kind: "input", fields: [{ label: "Tenths digit is worth", value: 0.5 }, { label: "Hundredths digit is worth", value: 0.02 }, { label: "Thousandths digit is worth", value: 0.008 }] }
        ],
        answer: "Tenths: 5, worth **0.5** · hundredths: 2, worth **0.02** · thousandths: 8, worth **0.008**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B (Stage 2 content reviewed)",
        prompt: "Describe the amount of rotation for a, b and c using the terms quarter-turn, half-turn and three-quarter turn.",
        img: "u8-turns.png",
        interact: [
          { kind: "turns" },
          { kind: "choose", rows: [
            { t: "a", options: ["quarter-turn", "half-turn", "three-quarter turn"], a: 0 },
            { t: "b", options: ["quarter-turn", "half-turn", "three-quarter turn"], a: 1 },
            { t: "c", options: ["quarter-turn", "half-turn", "three-quarter turn"], a: 2 }] }
        ],
        answer: "a. **quarter-turn** · b. **half-turn** · c. **three-quarter turn** (all clockwise). Follow the dot: it moves one corner for each quarter-turn."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "All fractions have been ordered and placed correctly on the number line: 0, [1/2], [1/3], [1/4], [1/5], [1/8], 1 (from left to right). Communicate your reasoning.",
        answer: false,
        explain: "The more equal parts in the whole, the smaller each part. [1/8] is the smallest, so it should be closest to 0, and [1/2] should sit exactly halfway.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 40, tol: 0.03, items: [["[1/2]", 0.5], ["[1/3]", 1 / 3], ["[1/4]", 0.25], ["[1/5]", 0.2], ["[1/8]", 0.125]] }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates of: a. the circle, b. the triangle, c. the heart, d. the smiley face, e. the sun.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "a", x: -4, y: -3 }, { l: "b", x: -3, y: 5 }, { l: "c", x: -2, y: -5 }, { l: "d", x: -5, y: 2 }, { l: "e", x: 3, y: -2 }] },
          { kind: "input", fields: [{ label: "a. x", value: -4 }, { label: "y", value: -3 }, { label: "b. x", value: -3 }, { label: "y", value: 5 }, { label: "c. x", value: -2 }, { label: "y", value: -5 }, { label: "d. x", value: -5 }, { label: "y", value: 2 }, { label: "e. x", value: 3 }, { label: "y", value: -2 }] }
        ],
        answer: "a. **(−4, −3)** · b. **(−3, 5)** · c. **(−2, −5)** · d. **(−5, 2)** · e. **(3, −2)**. Left of the y-axis, x is negative; below the x-axis, y is negative.",
        explain: "Type each coordinate in its own box. Use a hyphen for the negative sign, for example -4."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw the area model to solve 94 × 7.",
        interact: [
          { kind: "cells", cols: 3, w: 130, msg: "Multiply the number at the top of each column by 7.", grid: [["#×", "#90", "#4"], ["#7", { v: 630 }, { v: 28 }]] },
          { kind: "input", fields: [{ label: "94 × 7 =", value: 658 }] }
        ],
        answer: "90 × 7 = 630 and 4 × 7 = 28. 630 + 28 = **658**."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Arrange the decimals in ascending order: 2.935, 2.041, 2.608, 2.47. Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 2, max: 3, ticks: 10, tol: 0.03, items: [["2.935", 2.935], ["2.041", 2.041], ["2.608", 2.608], ["2.47", 2.47]] },
          { kind: "order", items: ["2.935", "2.041", "2.608", "2.47"], answer: [1, 3, 2, 0] }
        ],
        answer: "**2.041, 2.47, 2.608, 2.935**. All have 2 ones, so compare the tenths: 0, 4, 6, 9."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "These shapes with a square-centimetre grid overlay have been torn. Calculate the area of each shape.",
        interact: [
          { kind: "areagrid", size: 40, cells: ["111111", "111111", "111111", "111111", "111111"] },
          { kind: "areagrid", size: 40, cells: ["111111", "111111", "111000", "111000", "111000"] },
          { kind: "areagrid", size: 40, cells: ["000111", "111111", "111111", "111000"] },
          { kind: "input", fields: [{ label: "Shape 1", value: 30, suffix: "cm²" }, { label: "Shape 2", value: 21, suffix: "cm²" }, { label: "Shape 3", value: 18, suffix: "cm²" }] }
        ],
        answer: "Shape 1: 6 × 5 = **30 cm²**. Shape 2: 6 × 2 + 3 × 3 = **21 cm²**. Shape 3: 3 + 6 + 6 + 3 = **18 cm²**. Use the edges that are still there to work out the hidden squares.",
        explain: "The torn parts are assumed to continue the pattern of the visible squares (shape 3's bottom row starts at the left edge, like the rows above it)."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "How many **millions** make one billion?",
        options: ["10", "100", "1000", "10 000"],
        answer: 2,
        explain: "1 billion = 1 000 000 000 = 1000 × 1 000 000. The billions house is three places to the left of the millions house.",
        interact: [{ kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: { M: 1000 }, houses: true }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "The point is at (3, 4). If I reflected the point across the y-axis, what would the coordinates be in the second quadrant? If I reflected the point across the x-axis, what would the coordinates be in the fourth quadrant?",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "P", x: 3, y: 4 }], hint: "Tap P to trace it to each axis. Then tap the grid point the same distance on the other side of the axis." },
          { kind: "input", fields: [{ label: "Across the y-axis: x", value: -3 }, { label: "y", value: 4 }, { label: "Across the x-axis: x", value: 3 }, { label: "y", value: -4 }] }
        ],
        answer: "Across the y-axis: **(−3, 4)** (the x-coordinate changes sign). Across the x-axis: **(3, −4)** (the y-coordinate changes sign)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the distributive property and the area model to solve 8.53 × 4.",
        interact: [
          { kind: "pv", cols: ["T", "O", "t", "h"], start: 8.53 },
          { kind: "input", fields: [{ label: "8 × 4 =", value: 32 }, { label: "0.5 × 4 =", value: 2 }, { label: "0.03 × 4 =", value: 0.12 }, { label: "8.53 × 4 =", value: 34.12 }] }
        ],
        answer: "8 × 4 = 32, 0.5 × 4 = 2, 0.03 × 4 = 0.12. 32 + 2 + 0.12 = **34.12**."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Draw an empty number line starting at 0 and ending at 1. Mark the decimals 0.375, 0.592, 0.105 and 0.820 on the number line.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.03, items: [["0.375", 0.375], ["0.592", 0.592], ["0.105", 0.105], ["0.820", 0.82]] }],
        answer: "In order: 0.105 (just past 0.1), 0.375 (between 0.3 and 0.4), 0.592 (just before 0.6), 0.820 (just past 0.8)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B (Stage 2 content reviewed)",
        prompt: "Draw the top, front and side view of this rectangular prism.",
        img: "u8-prism.png",
        interact: [
          { kind: "sketch" },
          { kind: "choose", rows: [
            { t: "Top view", options: ["long, thin rectangle", "large rectangle", "small rectangle"], a: 0 },
            { t: "Front view", options: ["long, thin rectangle", "large rectangle", "small rectangle"], a: 1 },
            { t: "Side view", options: ["long, thin rectangle", "large rectangle", "small rectangle"], a: 2 }] }
        ],
        answer: "Every view is a rectangle. **Top:** long and thin. **Front:** the large rectangle. **Side:** a small, narrow rectangle.",
        explain: "The three views are described from the picture: the prism is long, tall and fairly shallow."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "1 384 790 can be regrouped as 1 000 000 + 30 000 + 8000 + 400 + 70 + 9. Communicate your reasoning.",
        answer: false,
        explain: "That sum is 1 038 479. 1 384 790 = 1 000 000 + 300 000 + 80 000 + 4000 + 700 + 90.",
        interact: [{ kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 1384790 }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Sort the numerical values into the 3 categories: impossible, possible, certain. Values: 1 in 2, 0, 1, 25%, [1/3], 0.1",
        interact: [{ kind: "choose", rows: [
          { t: "1 in 2", options: ["impossible", "possible", "certain"], a: 1 },
          { t: "0", options: ["impossible", "possible", "certain"], a: 0 },
          { t: "1", options: ["impossible", "possible", "certain"], a: 2 },
          { t: "25%", options: ["impossible", "possible", "certain"], a: 1 },
          { t: "[1/3]", options: ["impossible", "possible", "certain"], a: 1 },
          { t: "0.1", options: ["impossible", "possible", "certain"], a: 1 }] }],
        answer: "**Impossible:** 0 · **Possible:** 1 in 2, 25%, [1/3], 0.1 · **Certain:** 1. Probabilities go from 0 (impossible) to 1 (certain).",
        explain: "The slide shows \"0-1\" as one card. It has been split into 0 and 1, so each value fits one category."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Which algorithm matches this area model: 5 × 400, 5 × 50, 5 × 8?",
        img: "u8-areamodel.png",
        interact: [{ kind: "choose", rows: [{ t: "Matching algorithm", options: ["A: 721 × 6 = 6 + 120 + 4200 = 4326", "B: 458 × 5 = 40 + 250 + 2000 = 2290", "C: 369 × 3 = 27 + 180 + 900 = 1107"], a: 1 }] }],
        answer: "**B.** The area model splits 458 into 400 + 50 + 8 and multiplies each part by 5: 2000 + 250 + 40 = 2290."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "The school canteen has 864 cartons of juice in storage. Before a delivery arrives, 529 cartons are taken out for a sports carnival. Later, the canteen manager realises that 36 cartons are past their use-by date and removes those as well. How many cartons of juice are left in storage?",
        interact: [
          { kind: "bar", whole: { v: 864, l: "864", n: "cartons" }, parts: [{ v: 529, l: "529", n: "carnival" }, { v: 36, l: "36", n: "expired" }, { v: 299, l: "299", n: "left", hide: true }] },
          { kind: "jumps", start: 864, back: true, min: 280, steps: [500, 29, 36, 10], hint: "Start at 864. Jump back 529, then back 36." },
          { kind: "input", fields: [{ label: "Cartons left", value: 299 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Subtract in steps", s: "864 − 529 = 335. 335 − 36 = 299 cartons." }, { t: "Add the parts taken out first", s: "529 + 36 = 565. 864 − 565 = 299 cartons." }] },
        answer: "**299 cartons**. 864 − 529 = 335, and 335 − 36 = 299."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Convert to 24-hour time: 7:30 pm, 10:00 pm, 12:30 am.",
        interact: [
          { kind: "clock", time: "7:30", h24: true },
          { kind: "input", fields: [{ label: "7:30 pm", accept: ["19:30"], placeholder: "hh:mm" }, { label: "10:00 pm", accept: ["22:00"], placeholder: "hh:mm" }, { label: "12:30 am", accept: ["00:30"], placeholder: "hh:mm" }] }
        ],
        answer: "**19:30**, **22:00** and **00:30**. Add 12 to pm hours; the hour after midnight is 00."
      }
    ],
    // Review 7
    [
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "49 687 329 can be regrouped as … (you may select more than one)",
        interact: [
          { kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 49687329 },
          { kind: "select", hint: "Tap every regrouping that makes 49 687 329.", items: [
            ["A: 400 000 000 + 90 000 000 + 6 000 000 + 800 000 + 70 000 + 329", false],
            ["B: 40 000 000 + 9 000 000 + 600 000 + 80 000 + 7000 + 300 + 20 + 9", true],
            ["C: 4 900 000 + 680 000 + 7320 + 9", false],
            ["D: 49 000 000 + 680 000 + 7300 + 29", true]] }
        ],
        answer: "**B and D**. A is far too big (about 496 million) and C is far too small (about 5.6 million).",
        explain: "The slide is a multiple-choice question with more than one correct answer, so it is set as tap every correct one."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Which animals represent equally likely outcomes, and which represent unequal chance? Explain your reasoning.",
        img: "u8-animals.png",
        interact: [{ kind: "choose", rows: [
          { t: "owl", options: ["equally likely", "unequal chance"], a: 0 },
          { t: "rabbit", options: ["equally likely", "unequal chance"], a: 1 },
          { t: "rooster", options: ["equally likely", "unequal chance"], a: 1 },
          { t: "goat", options: ["equally likely", "unequal chance"], a: 0 }] }],
        answer: "**Equally likely:** owl (2 of each colour) and goat (3 of each colour). **Unequal chance:** rabbit and rooster, because their bags have fewer green and an extra orange, so the bars are not all the same length."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Solve 24 ÷ 5 by showing the division modelled as an array, and record the remainder using words.",
        interact: [
          { kind: "pack", mode: "pack", size: 5, total: 24, thing: "counters", label: "row", hint: "Make rows of 5 from 24 counters. What is left over?" },
          { kind: "input", fields: [{ label: "Rows of 5", value: 4 }, { label: "Left over", value: 4 }] }
        ],
        answer: "24 ÷ 5 = **4 remainder 4**: 4 rows of 5 make 20, with 4 left over. In words: four, with four left over."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Teal Public School held a fun run to raise money for the school. $865 was raised from the cake stall. $1740 was raised from sponsorships. $96 was raised from the raffle. The school spent $2318 on new sports equipment. How much money is left to spend?",
        interact: [
          { kind: "bar", whole: { v: 2701, l: "$2701", n: "raised" }, parts: [{ v: 2318, l: "$2318", n: "spent" }, { v: 383, l: "$383", n: "left", hide: true }] },
          { kind: "input", fields: [{ label: "Total raised", prefix: "$", value: 2701 }, { label: "Left to spend", prefix: "$", value: 383 }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "865 + 1740 + 96 = 2701. 2701 − 2318 = $383." }, { t: "Count on", s: "From 2318: + 2 = 2320, + 80 = 2400, + 301 = 2701. 2 + 80 + 301 = $383." }] },
        answer: "**$383**. Raised: 865 + 1740 + 96 = $2701. Left: 2701 − 2318 = $383."
      },
      {
        type: "sr", focus: "Chance B (Stage 2 content reviewed)",
        prompt: "Match each event to unlikely, likely or equally likely: a. Rolling an even or odd number on a 6-sided die. b. Landing on green on a spinner that has 20 equal sections and only one section is green. c. Picking a blue counter from a bag containing 12 blue counters and one red counter.",
        interact: [{ kind: "choose", rows: [
          { t: "a. even or odd on a die", options: ["unlikely", "likely", "equally likely"], a: 2 },
          { t: "b. green on the spinner", options: ["unlikely", "likely", "equally likely"], a: 0 },
          { t: "c. blue counter from the bag", options: ["unlikely", "likely", "equally likely"], a: 1 }] }],
        answer: "a. **equally likely** (3 even, 3 odd) · b. **unlikely** (1 in 20) · c. **likely** (12 in 13)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "429 305 968 can be regrouped as 429 000 000 + 30 000 + 5900 + 68. Communicate your reasoning.",
        answer: false,
        explain: "That sum is 429 035 968. The 3 is in the hundred thousands place, so it should be 300 000: 429 000 000 + 300 000 + 5900 + 68.",
        interact: [{ kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 429305968 }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "A weather forecast says there is a 50% chance of rain and a 50% chance of sunshine each day. You record the weather over 14 days. What is the expected frequency for each outcome?",
        img: "u8-weather.png",
        interact: [
          { kind: "shade", parts: 14, pct: true, hint: "Each part is one day. Shade the days you'd expect rain." },
          { kind: "input", fields: [{ label: "Rainy days", value: 7 }, { label: "Sunny days", value: 7 }] }
        ],
        answer: "**7 days of rain and 7 days of sunshine.** 50% of 14 = 7. The real results may differ; this is what we expect."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use estimation to determine a reasonable answer for 648 ÷ 8. Next use the area model to calculate the quotient and check the reasonableness of your estimate.",
        interact: [
          { kind: "input", fields: [{ label: "Estimate", min: 75, max: 85 }] },
          { kind: "cells", cols: 3, w: 130, msg: "Each box is a part of 648 divided by 8.", grid: [["#÷ 8", "#640", "#8"], ["#=", { v: 80 }, { v: 1 }]] },
          { kind: "input", fields: [{ label: "648 ÷ 8 =", value: 81 }] }
        ],
        answer: "Estimate: 640 ÷ 8 = **80**. Area model: 648 = 640 + 8, so 80 + 1 = **81**. The estimate is close, so the answer is reasonable."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use estimation to roughly calculate the answer to this worded problem: At an outdoor movie night, 846 people attended. During the movie it started to rain, so 312 people left early. Of those who stayed, 387 were adults. How many were children?",
        interact: [
          { kind: "bar", whole: { v: 846, l: "846", n: "attended" }, parts: [{ v: 312, l: "312", n: "left" }, { v: 387, l: "387", n: "adults" }, { v: 147, l: "147", n: "children", hide: true }] },
          { kind: "input", fields: [{ label: "Estimate", min: 130, max: 170 }, { label: "Exact", value: 147 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Round, then subtract", s: "850 − 300 = 550 stayed. 550 − 400 = about 150 children." }, { t: "Exact check", s: "846 − 312 = 534 stayed. 534 − 387 = 147 children." }] },
        answer: "About **150 children** (850 − 300 − 400). Exactly: 846 − 312 = 534, and 534 − 387 = **147**."
      },
      {
        type: "sr", focus: "Geometric measure B (Stage 2 content reviewed)",
        prompt: "Use the grid map and compass directions (N, S, E, W) to describe a route from the park to the hospital.",
        interact: [
          { kind: "gridref", src: "img/s3/u8-map.png", alt: "Town grid map with columns A to I and rows 1 to 10, showing the park and the hospital", box: [8.88, 2.85, 80.84, 92.01], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], rows: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] },
          { kind: "choose", rows: [
            { t: "The park is at", options: ["D6", "E1", "B5"], a: 0 },
            { t: "The hospital is at", options: ["D6", "E1", "H4"], a: 1 }] }
        ],
        answer: "Answers vary. For example: from the park in **D6**, go **south 5 squares** to D1, then **east 1 square** to the hospital in **E1**. Following the roads works too.",
        explain: "The park covers C6 to E6 and the hospital covers E1 to F1; D6 and E1 are used as their main squares."
      }
    ]
  ]
});
