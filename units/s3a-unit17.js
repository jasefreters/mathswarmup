/*
  Stage 3 Year A, Unit 17 — Review of learning (Term 4, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 4, ls: 2, unit: 17,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 17 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which of the following has all the factors of 24?",
        options: ["1, 2, 3, 4, 6, 8, 12, 24", "2, 4, 6, 10, 12, 24", "1, 2, 3, 5, 6, 12, 24", "3, 6, 8, 9, 12, 24"],
        answer: 0,
        explain: "The factor pairs of 24 are 1 × 24, 2 × 12, 3 × 8 and 4 × 6. B, C and D include numbers that don't divide 24 (10, 5, 9) or leave factors out.",
        interact: [{ kind: "array", rows: 4, cols: 6, showTotal: true, hint: "Build arrays of 24. Each array's rows and columns are a factor pair." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Multiply the following: 4 × 10, 4 × 100, 4 × 1000",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 4, shift: true },
          { kind: "input", fields: [{ label: "4 × 10", value: 40 }, { label: "4 × 100", value: 400 }, { label: "4 × 1000", value: 4000 }] }
        ],
        answer: "4 × 10 = **40** · 4 × 100 = **400** · 4 × 1000 = **4000**. Each × 10 moves the digit one place to the left."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Record each fraction in the table as less than, equal to or more than [1/2]: [1/5], [1/8], [1/4], [1/10], [2/4], [5/6], [4/8]",
        interact: [
          { kind: "numberline", min: 0, max: 1, tol: 0.04, items: [["[1/5]", 0.2], ["[1/8]", 0.125], ["[1/4]", 0.25], ["[1/10]", 0.1], ["[2/4]", 0.5], ["[5/6]", 5 / 6], ["[4/8]", 0.5]], hint: "Drag each fraction onto the line. Which side of the middle does it land?" },
          { kind: "choose", rows: [
            { t: "[1/5]", options: ["Less than [1/2]", "Equal to [1/2]", "More than [1/2]"], a: 0 },
            { t: "[1/8]", options: ["Less than [1/2]", "Equal to [1/2]", "More than [1/2]"], a: 0 },
            { t: "[1/4]", options: ["Less than [1/2]", "Equal to [1/2]", "More than [1/2]"], a: 0 },
            { t: "[1/10]", options: ["Less than [1/2]", "Equal to [1/2]", "More than [1/2]"], a: 0 },
            { t: "[2/4]", options: ["Less than [1/2]", "Equal to [1/2]", "More than [1/2]"], a: 1 },
            { t: "[5/6]", options: ["Less than [1/2]", "Equal to [1/2]", "More than [1/2]"], a: 2 },
            { t: "[4/8]", options: ["Less than [1/2]", "Equal to [1/2]", "More than [1/2]"], a: 1 }] }
        ],
        answer: "Less than [1/2]: **[1/5], [1/8], [1/4], [1/10]** · Equal to [1/2]: **[2/4], [4/8]** · More than [1/2]: **[5/6]**. Compare the numerator with half of the denominator."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Ezra has 45 waratahs and 108 violets in his garden. He picks 68 of the flowers. How many flowers are left in his garden?",
        interact: [
          { kind: "bar", whole: { v: 153, l: "45 + 108", n: "flowers" }, parts: [{ v: 68, l: "68", n: "picked" }, { v: 85, l: "85", n: "left", hide: true }] },
          { kind: "input", fields: [{ label: "Flowers left", value: 85 }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "45 + 108 = 153 flowers. 153 − 68 = 85 flowers left." }, { t: "Subtract from the violets first", s: "108 − 68 = 40 violets left. 40 + 45 = 85 flowers left." }] },
        answer: "**85 flowers**. 45 + 108 = 153, and 153 − 68 = 85."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What was the student's approximate pulse rate 2 minutes after exercise? What was the approximate difference between the student's pulse rate at 1 minute and 5 minutes? What happened as the time after exercise increased?",
        interact: [
          { kind: "bargraph", line: true, max: 180, step: 20, ylabel: "Pulse (beats per minute)", xlabel: "Time (minutes) after exercise", label: "Pulse rate after exercise",
            series: [{ l: "Pulse", c: "#002664" }],
            groups: [{ l: "0", v: [163] }, { l: "1", v: [130] }, { l: "2", v: [110] }, { l: "3", v: [100] }, { l: "4", v: [84] }, { l: "5", v: [80] }, { l: "6", v: [77] }, { l: "7", v: [80] }, { l: "8", v: [77] }, { l: "9", v: [80] }, { l: "10", v: [80] }] },
          { kind: "input", fields: [{ label: "Pulse at 2 minutes", min: 105, max: 115, suffix: "beats per minute" }, { label: "Difference between 1 and 5 minutes", min: 45, max: 55, suffix: "beats per minute" }] },
          { kind: "choose", rows: [{ t: "As time went on, the pulse…", options: ["kept going up", "went down, then levelled out at about 80", "stayed the same"], a: 1 }] }
        ],
        answer: "About **110 beats per minute** at 2 minutes. At 1 minute it was about 130 and at 5 minutes about 80, a difference of about **50 beats per minute**. The pulse **dropped quickly, then levelled out at about 80**.",
        explain: "Values are read from the graph, so answers close to these are fine (105–115 and 45–55)."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Sam drew one array to show 48. Jonah drew another, using different rows and columns. Could they both still show the number 48?",
        answer: true,
        explain: "48 has several factor pairs: 1 × 48, 2 × 24, 3 × 16, 4 × 12 and 6 × 8. Sam could draw 6 rows of 8 and Jonah 4 rows of 12. Both show 48.",
        interact: [{ kind: "array", rows: 6, cols: 8, showTotal: true, hint: "Build 6 rows of 8. Now find another array that also makes 48." }],
        cubes: { ops: ["×"], solve: [{ t: "Find two factor pairs", s: "6 × 8 = 48 and 4 × 12 = 48. Two different arrays, same total." }, { t: "Turn and halve", s: "Halve the rows and double the columns: 6 × 8 → 3 × 16. Still 48." }] }
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use factorising and then the associative property to solve 56 × 5.",
        interact: [
          { kind: "array", rows: 8, cols: 5, showTotal: true, hint: "8 × 5 = 40. How many groups of 40 make 56 × 5?" },
          { kind: "input", fields: [{ label: "56 = 7 × ?", value: 8 }, { label: "8 × 5 = ?", value: 40 }, { label: "56 × 5 = 7 × 40 = ?", value: 280 }] }
        ],
        answer: "56 × 5 = 7 × 8 × 5 = 7 × (8 × 5) = 7 × 40 = **280**."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Draw a number line from 0 to 1. Order the following fractions: [1/2], [3/8], [1/4], [3/4], [7/8], [4/4], [5/8]",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 8, tol: 0.035, items: [["[1/2]", 0.5], ["[3/8]", 0.375], ["[1/4]", 0.25], ["[3/4]", 0.75], ["[7/8]", 0.875], ["[4/4]", 1], ["[5/8]", 0.625]] }],
        answer: "[1/4], [3/8], [1/2], [5/8], [3/4], [7/8], [4/4]. In eighths: [2/8], [3/8], [4/8], [5/8], [6/8], [7/8], [8/8]."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use a mental strategy to solve 455 + 396. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 455, steps: [100, 10, 1], back: true, hint: "Jump on a friendly 400, then jump back the extra 4." },
          { kind: "input", fields: [{ label: "455 + 396", value: 851 }] }
        ],
        answer: "**851**. 396 is 4 less than 400: 455 + 400 = 855, then 855 − 4 = 851."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Identify and record the coordinates of point A, point B and point C.",
        interact: [
          { kind: "plane", range: [0, 4, 0, 4], points: [{ l: "A", x: 0, y: 0 }, { l: "B", x: 2, y: 3 }, { l: "C", x: 3, y: 2 }], hint: "Tap a point to trace it to each axis. Read across (x) first, then up (y)." },
          { kind: "input", fields: [{ label: "A (x, y)", accept: ["(0,0)", "0,0"], placeholder: "(x, y)" }, { label: "B (x, y)", accept: ["(2,3)", "2,3"], placeholder: "(x, y)" }, { label: "C (x, y)", accept: ["(3,2)", "3,2"], placeholder: "(x, y)" }] }
        ],
        answer: "A **(0, 0)** · B **(2, 3)** · C **(3, 2)**. B and C use the same numbers in a different order, so they are different points."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "I am a number greater than 50. I have many factors, including 1, 2, 3, 4, 6, 8, 9 and 12. What number am I?",
        options: ["64", "70", "72", "81"],
        answer: 2,
        explain: "72 = 8 × 9 = 6 × 12, so 8, 9 and 12 are all factors. 64 has no factor 3, 70 has no factor 4, and 81 is odd.",
        interact: [{ kind: "array", rows: 8, cols: 9, showTotal: true, hint: "Try 8 rows of 9. Which option does it make?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "If a model soccer field has an area of 36 cm², what could the dimensions be?",
        interact: [
          { kind: "array", rows: 4, cols: 9, showTotal: true, hint: "Each square is 1 cm². Build rectangles of 36 squares." },
          { kind: "pair", labels: ["Length", "Width"], unit: "cm", rule: "area", target: 36 }
        ],
        answer: "Any pair that multiplies to 36: 1 cm × 36 cm, 2 cm × 18 cm, 3 cm × 12 cm, **4 cm × 9 cm**, 6 cm × 6 cm. A long, thin field like 4 cm × 9 cm looks most like a soccer field.",
        explain: "The slide says a soccer field of 36 cm², which is far too small for a real field, so it is now a model soccer field."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Mr Wang purchased 360 pencils to share equally between his 10 students. How many pencils did each student get?",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 360, shift: true },
          { kind: "input", fields: [{ label: "Pencils each", value: 36 }] }
        ],
        cubes: { ops: ["÷"], solve: [{ t: "Divide by 10", s: "360 ÷ 10: each digit moves one place to the right. 360 → 36 pencils each." }, { t: "Think multiplication", s: "10 × ? = 360. 10 × 36 = 360, so 36 pencils each." }] },
        answer: "**36 pencils** each. 360 ÷ 10 = 36."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Emily had 135 stickers in her collection. She gave 28 stickers to her friend Mia and later bought 47 more at the store. Then she used 25 stickers to decorate a poster. How many stickers does Emily have now?",
        interact: [
          { kind: "jumps", start: 135, steps: [10, 1, 20, 5], back: true, min: 100, max: 160, hint: "Start at 135. Jump back 28, on 47, then back 25." },
          { kind: "input", fields: [{ label: "Stickers now", value: 129 }] }
        ],
        cubes: { ops: ["−", "+"], solve: [{ t: "Step by step", s: "135 − 28 = 107. 107 + 47 = 154. 154 − 25 = 129 stickers." }, { t: "Total in and out", s: "Out: 28 + 25 = 53. In: 47. 135 + 47 = 182, 182 − 53 = 129 stickers." }] },
        answer: "**129 stickers**. 135 − 28 = 107, + 47 = 154, − 25 = 129."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Liam says a triangle with 2 equal sides is an equilateral triangle. Do you agree or disagree? Why?",
        interact: [
          { kind: "sides", view: [300, 260], label: "Triangle with two equal sides", fill: "#9FB4E8", poly: [[150, 20], [230, 230], [70, 230]] },
          { kind: "choose", rows: [
            { t: "Liam is…", options: ["correct", "incorrect"], a: 1 },
            { t: "A triangle with exactly 2 equal sides is", options: ["equilateral", "isosceles", "scalene"], a: 1 },
            { t: "An equilateral triangle has", options: ["2 equal sides", "3 equal sides", "no equal sides"], a: 1 }] }
        ],
        answer: "**Disagree.** An equilateral triangle has **3 equal sides** (and 3 equal angles). A triangle with exactly 2 equal sides is **isosceles**."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Every factor of 24 is also a multiple of 3.",
        answer: false,
        explain: "The factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24. 1, 2, 4 and 8 are not multiples of 3.",
        interact: [{ kind: "array", rows: 3, cols: 8, showTotal: true, hint: "Build arrays of 24 to find every factor. Is each one in the 3 times table?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Calculate the area of the following composite shape. Each square is 1 square unit.",
        interact: [
          { kind: "areagrid", cells: ["111000", "111000", "111111", "111111"] },
          { kind: "input", fields: [{ label: "Area", value: 18, suffix: "square units" }] }
        ],
        answer: "**18 square units**. Split it: the top part is 3 × 2 = 6 and the bottom part is 6 × 2 = 12. 6 + 12 = 18.",
        explain: "No units are given on the slide, so the area is in square units."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "What is 10% of 450?",
        interact: [
          { kind: "bar", whole: { v: 450, l: "450", n: "100%" }, parts: [{ v: 45, l: "45", n: "10%", hide: true }, { v: 45, l: " " }, { v: 45, l: " " }, { v: 45, l: " " }, { v: 45, l: " " }, { v: 45, l: " " }, { v: 45, l: " " }, { v: 45, l: " " }, { v: 45, l: " " }, { v: 45, l: " " }], hint: "The whole is split into 10 equal parts. Each part is 10%. Tap the ? to check." },
          { kind: "input", fields: [{ label: "10% of 450", value: 45 }] }
        ],
        answer: "**45**. 10% is [1/10], and 450 ÷ 10 = 45."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Lina is solving 504 − 298. What mental strategy could she use to solve it efficiently?",
        interact: [
          { kind: "jumps", start: 504, steps: [100, 10, 1], back: true, min: 190, max: 520, hint: "Jump back a friendly 300, then jump on the extra 2." },
          { kind: "select", hint: "Tap every efficient mental strategy.", items: [
            ["Subtract 300, then add 2 back", true],
            ["Add 2 to both numbers: 506 − 300", true],
            ["Count back by ones from 504", false],
            ["Count on from 298 to 300 (2), then to 504 (204)", true]] },
          { kind: "input", fields: [{ label: "504 − 298", value: 206 }] }
        ],
        answer: "**206**. 298 is close to 300: 504 − 300 = 204, then add back 2 = 206. Or keep the difference the same: 506 − 300 = 206."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Name the type of pyramid.",
        img: "u17-pyramid.png",
        interact: [{ kind: "choose", rows: [
          { t: "Shape of the base", options: ["triangle", "square", "pentagon", "hexagon"], a: 1 },
          { t: "This is a", options: ["triangular pyramid", "square pyramid", "pentagonal pyramid", "hexagonal pyramid"], a: 1 }] }],
        answer: "A **square pyramid** (square-based pyramid). It has a square base, 4 triangular faces that meet at the apex, 5 vertices and 8 edges.",
        explain: "Pyramids are named after their base. The base has 4 sides; it is drawn in perspective, so it is read as a square."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Represents numbers A: Decimals and percentages",
        prompt: "0.560 is the same as",
        options: ["56 hundredths", "560 ten thousandths", "560 tenths", "56"],
        answer: 0,
        explain: "0.560 = 0.56 = 56 hundredths (or 560 thousandths). 560 ten thousandths is 0.056, 560 tenths is 56.",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 0.56 }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "A rectangular classroom has an area of 288 square metres. The width of the room is 12 metres. What is the length of the classroom?",
        interact: [
          { kind: "bar", whole: { v: 288, l: "288 m²", n: "area" }, parts: [{ v: 24, l: "24 m²", hide: true }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }, { v: 24, l: " " }], hint: "Split the area into 12 equal strips, one for each metre of width. Tap the ? to check one strip." },
          { kind: "input", fields: [{ label: "Length", value: 24, suffix: "m" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide the area by the width", s: "288 ÷ 12 = 24 m." }, { t: "Missing factor", s: "12 × ? = 288. 12 × 20 = 240, 12 × 4 = 48, 240 + 48 = 288. So 24 m." }] },
        answer: "**24 metres**. Length × width = area, so 288 ÷ 12 = 24."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Using a bar model, solve 1 − [3/4]",
        interact: [
          { kind: "bar", whole: { v: 4, l: "1", n: "one whole" }, parts: [{ v: 3, l: "[3/4]" }, { v: 1, l: "[1/4]", hide: true }] },
          { kind: "input", fields: [{ label: "1 − [3/4]", accept: ["1/4"], placeholder: "a/b" }] }
        ],
        answer: "**[1/4]**. One whole is [4/4], and [4/4] − [3/4] = [1/4]."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the addition for subtraction strategy to solve 5875 − 2655.",
        interact: [
          { kind: "jumps", start: 2655, steps: [1000, 100, 10, 1], max: 6000, hint: "Start at 2655. How far do you jump to reach 5875?" },
          { kind: "input", fields: [{ label: "2655 + ? = 5875", value: 3220 }] }
        ],
        answer: "**3220**. Think 2655 + ? = 5875: + 3000 = 5655, + 200 = 5855, + 20 = 5875. 3000 + 200 + 20 = 3220."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "What is 4:00 pm in 24-hour time?",
        interact: [
          { kind: "clock", time: "4:00", h24: true, drag: true },
          { kind: "input", fields: [{ label: "24-hour time", accept: ["1600", "16:00"], placeholder: "hhmm" }] }
        ],
        answer: "**1600** (16:00). For pm times, add 12 to the hour: 4 + 12 = 16."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents numbers A: Decimals and percentages",
        prompt: "0.678 is greater than 0.8 because it has more digits. Communicate your reasoning.",
        answer: false,
        explain: "Compare the tenths first: 0.678 has 6 tenths and 0.8 has 8 tenths, so 0.8 is greater. More digits doesn't mean a bigger decimal.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.03, items: [["0.678", 0.678], ["0.8", 0.8]] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "A rectangular prism has a volume of 64 cubic centimetres. What dimensions could it have? Write two.",
        img: "u17-prism.png",
        interact: [{ kind: "expr", count: 2, target: 64, placeholder: "length x width x height", sample: ["4 x 4 x 4", "2 x 4 x 8"], mustUse: { re: "\\d\\s*[x×*X]\\s*\\d+\\s*[x×*X]\\s*\\d", msg: "Write three dimensions: length × width × height." } }],
        answer: "Any three numbers that multiply to 64, for example **4 cm × 4 cm × 4 cm**, 2 cm × 4 cm × 8 cm, 2 cm × 2 cm × 16 cm or 1 cm × 8 cm × 8 cm."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Tahlia ate [3/8] of a chocolate bar in the morning and [2/8] in the afternoon. Later, her brother ate [1/8]. How much of the chocolate bar did Tahlia eat altogether? How much was left after Tahlia ate? How much is left now, after her brother also ate some?",
        interact: [
          { kind: "shade", parts: 8, hint: "Shade what Tahlia ate, then what her brother ate." },
          { kind: "input", fields: [{ label: "Tahlia ate altogether", accept: ["5/8"], placeholder: "a/b" }, { label: "Left after Tahlia ate", accept: ["3/8"], placeholder: "a/b" }, { label: "Left now", accept: ["2/8", "1/4"], placeholder: "a/b" }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then take away", s: "[3/8] + [2/8] = [5/8]. [8/8] − [5/8] = [3/8]. [3/8] − [1/8] = [2/8]." }, { t: "Count the eighths", s: "Shade 3 then 2 eighths: 5 shaded, 3 left. Her brother takes 1 more: 2 eighths left." }] },
        answer: "Tahlia ate **[5/8]**. **[3/8]** was left after Tahlia ate. **[2/8]** (= [1/4]) is left now."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "What mistake did Raina make? How would you fix it?",
        img: "u17-raina.png",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 327 },
          { kind: "select", hint: "Tap every mistake Raina made.", items: [
            ["She lined 46 up under the hundreds and tens instead of the tens and ones", true],
            ["She carried a 1 into the hundreds when nothing needed trading", true],
            ["She subtracted instead of adding", false],
            ["She forgot to add the ones", false]] },
          { kind: "input", fields: [{ label: "327 + 46", value: 373 }] }
        ],
        answer: "Raina wrote 46 under the 3 and 2, so she really added 460, and she also carried a 1 that wasn't needed. Line up the ones: 7 + 6 = 13 (trade 10 ones for a ten), 2 + 4 + 1 = 7 tens, 3 hundreds. **327 + 46 = 373**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Length",
        prompt: "This shape is a rhombus. Calculate the perimeter.",
        interact: [
          { kind: "sides", view: [440, 290], label: "Rhombus with one side labelled 15 cm", fill: "#9FB4E8", poly: [[89, 26], [341, 26], [282, 265], [30, 265]],
            dims: [{ from: [361, 31], to: [302, 270] }],
            labels: [{ x: 345, y: 165, t: "15 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 60, suffix: "cm" }] }
        ],
        answer: "**60 cm**. A rhombus has 4 equal sides: 4 × 15 = 60.",
        explain: "Only one side is labelled on the slide. The sides are equal (it is a rhombus), so the prompt now says so."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Which shows 6.478 rounded to two decimal places?",
        options: ["6.47", "6.50", "6.48", "6.85"],
        answer: 2,
        explain: "Look at the thousandths digit: 8 is 5 or more, so round the hundredths up. 6.478 → 6.48.",
        interact: [{ kind: "marker", min: 6.47, max: 6.48, divs: 10, majorEvery: 5, labels: [6.47, 6.475, 6.48], label: "6.478", hint: "Slide the pin to 6.478. Is it closer to 6.47 or 6.48?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "A rectangular prism has a volume of 54 cubic centimetres. What dimensions could it have? Write two.",
        img: "u17-prism.png",
        interact: [{ kind: "expr", count: 2, target: 54, placeholder: "length x width x height", sample: ["3 x 3 x 6", "2 x 3 x 9"], mustUse: { re: "\\d\\s*[x×*X]\\s*\\d+\\s*[x×*X]\\s*\\d", msg: "Write three dimensions: length × width × height." } }],
        answer: "Any three numbers that multiply to 54, for example **3 cm × 3 cm × 6 cm**, 2 cm × 3 cm × 9 cm, 1 cm × 6 cm × 9 cm or 1 cm × 2 cm × 27 cm."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "What fraction of the squares has a star? What fraction of the squares has a circle? What fraction of the squares has no image?",
        interact: [
          { kind: "classify", view: [290, 200], total: 6, label: "Six squares: three with stars, one with a circle, two empty", hint: "Choose a group, then tap each square that belongs in it.",
            cats: [{ k: "star", t: "Star", c: "#8CC8F0" }, { k: "circle", t: "Circle", c: "#F7B6C8" }, { k: "none", t: "No image", c: "#B9E3A6" }],
            shapes: [
              { p: "10,10 100,10 100,100 10,100", fill: "#FFFFFF", a: "star", deco: "<polygon pointer-events='none' fill='#B5B5B5' points='55,16 64,43 92,43 69,59 78,87 55,70 32,87 41,59 18,43 46,43'/>" },
              { p: "100,10 190,10 190,100 100,100", fill: "#111111", a: "circle", deco: "<circle pointer-events='none' cx='145' cy='55' r='38' fill='#FCDF63'/>" },
              { p: "190,10 280,10 280,100 190,100", fill: "#FFFFFF", a: "star", deco: "<polygon pointer-events='none' fill='#B5B5B5' points='235,16 244,43 272,43 249,59 258,87 235,70 212,87 221,59 198,43 226,43'/>" },
              { p: "10,100 100,100 100,190 10,190", fill: "#111111", a: "none" },
              { p: "100,100 190,100 190,190 100,190", fill: "#FFFFFF", a: "star", deco: "<polygon pointer-events='none' fill='#B5B5B5' points='145,106 154,133 182,133 159,149 168,177 145,160 122,177 131,149 108,133 136,133'/>" },
              { p: "190,100 280,100 280,190 190,190", fill: "#111111", a: "none", deco: "<g pointer-events='none' fill='none' stroke='#333333' stroke-width='2'><rect x='10' y='10' width='270' height='180'/><path d='M100 10V190M190 10V190M10 100H280'/></g>" }] },
          { kind: "input", fields: [{ label: "Star", accept: ["3/6", "1/2"], placeholder: "a/b" }, { label: "Circle", accept: ["1/6"], placeholder: "a/b" }, { label: "No image", accept: ["2/6", "1/3"], placeholder: "a/b" }] }
        ],
        answer: "Star: **[3/6]** (= [1/2]) · Circle: **[1/6]** · No image: **[2/6]** (= [1/3]). There are 6 squares altogether."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "1087 − 675 − 22 = ? Communicate how you used place value understanding.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1087 },
          { kind: "input", fields: [{ label: "1087 − 675 − 22", value: 390 }] }
        ],
        answer: "**390**. 1087 − 675: 7 − 5 = 2 ones, 8 − 7 = 1 ten, 10 − 6 = 4 hundreds (trade the thousand), so 412. Then 412 − 22 = 390. Or subtract 675 + 22 = 697 in one go: 1087 − 697 = 390."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "The term probability means…",
        interact: [{ kind: "select", hint: "Tap every statement that fits the meaning of probability.", items: [
          ["How likely it is that something will happen", true],
          ["It can be described with words like impossible, unlikely, even chance, likely and certain", true],
          ["It can be written as a number from 0 to 1", true],
          ["The total of a set of numbers", false],
          ["Something that is always going to happen", false]] }],
        answer: "Probability is **how likely it is that an event will happen**. It ranges from impossible (0) to certain (1), with words like unlikely, even chance and likely in between."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Luca and Mia were comparing decimals. Luca said, \"0.50 is smaller than 0.5 because it has an extra zero.\" Mia shook her head and said, \"That can't be right!\" Is Luca's statement true or false?",
        answer: false,
        explain: "0.5 = 5 tenths = 50 hundredths = 0.50. A zero at the end of a decimal doesn't change its value, so they are equal.",
        interact: [{ kind: "pv", cols: ["O", "t", "h"], start: 0.5 }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Give 3 examples of when you would measure volume in cubic metres.",
        interact: [{ kind: "select", hint: "Tap every one you would measure in cubic metres.", items: [
          ["The space inside a classroom", true],
          ["A swimming pool", true],
          ["A shipping container", true],
          ["A truckload of soil", true],
          ["A lunch box", false],
          ["A dice", false],
          ["A juice box", false]] }],
        answer: "Big things: for example **a room, a swimming pool, a shipping container or a truckload of soil**. Small objects like a lunch box or dice are measured in cubic centimetres."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Draw a number line from 0 to 1. Order the following fractions: [2/3], [1/6], [4/6], [3/6], [3/3], [5/6]",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 6, tol: 0.04, items: [["[2/3]", 2 / 3], ["[1/6]", 1 / 6], ["[4/6]", 4 / 6], ["[3/6]", 0.5], ["[3/3]", 1], ["[5/6]", 5 / 6]] }],
        answer: "[1/6], [3/6], [2/3] = [4/6], [5/6], [3/3]. Thirds are pairs of sixths: [2/3] = [4/6] and [3/3] = [6/6].",
        explain: "The slide lists [1/6] twice, so the repeat has been left out."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Solve 9000 − 587.",
        interact: [
          { kind: "jumps", start: 587, steps: [1000, 100, 10, 1], max: 9100, hint: "Count on from 587 to 9000: jump to 600, then 1000, then 9000." },
          { kind: "input", fields: [{ label: "9000 − 587", value: 8413 }] }
        ],
        answer: "**8413**. Take 1 from both: 8999 − 586 = 8413 (no trading). Or count on: 587 + 13 = 600, + 400 = 1000, + 8000 = 9000, so 13 + 400 + 8000 = 8413."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Look at these 2 shapes: Shape A and Shape B. Which shape is the regular polygon? How do you know?",
        interact: [
          { kind: "corners", view: [480, 210], deg: true, r: 22, q: 26, hit: 14, shapes: [
            { p: [[20, 110], [65, 32.1], [155, 32.1], [200, 110], [155, 187.9], [65, 187.9]], fill: "#002664", l: "A" },
            { p: [[296, 18], [348, 61], [382, 40], [455, 95], [384, 186], [262, 187]], fill: "#002664", l: "B", lx: 350, ly: 130 }], hint: "Tap a corner to measure it. Are all the angles in each shape equal?" },
          { kind: "choose", rows: [{ t: "The regular polygon is", options: ["Shape A", "Shape B"], a: 0 }] },
          { kind: "select", hint: "Tap every reason that proves it.", items: [
            ["All its sides are the same length", true],
            ["All its angles are the same size (120°)", true],
            ["It has 6 sides", false],
            ["It is coloured dark blue", false]] }
        ],
        answer: "**Shape A**, a regular hexagon. All 6 sides are equal and all 6 angles are equal (120°). Shape B also has 6 sides, but its sides and angles are different sizes."
      }
    ]
  ]
});
