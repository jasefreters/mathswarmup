/*
  Stage 3 Year A, Unit 6 — Review of learning (Term 2, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 2, ls: 1, unit: 6,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 6 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "125 + 89 = ? Communicate your strategy.",
        options: ["224", "214", "216", "226"],
        answer: 1,
        explain: "Compensation: 125 + 90 = 215, then take away the extra 1: 214.",
        interact: [{ kind: "jumps", start: 125, steps: [1, 10, 90], back: true, hint: "Try + 90, then back 1." }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record the following number as a numeral: six hundred and seventy-four thousand, eight hundred and ninety-nine.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 0, hint: "Build it one house at a time: 674 thousands, then 899 ones." },
          { kind: "input", fields: [{ label: "Numeral", value: 674899 }] }
        ],
        answer: "**674 899**"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is a survey? Use the data cycle: pose a question, collect data, represent data, interpret data.",
        interact: [
          { kind: "order", items: ["Collect data", "Interpret data", "Pose a question", "Represent data"], answer: [2, 0, 3, 1], hint: "Put the data cycle in order." },
          { kind: "choose", rows: [{ t: "A survey is", options: ["a way to collect data by asking people questions", "a type of graph", "the answer to a question"], a: 0 }] }
        ],
        answer: "A **survey** collects data by asking a group of people the same question. It is how we collect data in the data cycle: pose a question → collect data → represent data → interpret data."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Place these unit fractions on the number line: [1/4], [1/3], [1/5], [1/10], [1/6].",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 60, labelStep: 1, tol: 0.012, items: [["[1/4]", 1 / 4], ["[1/3]", 1 / 3], ["[1/5]", 1 / 5], ["[1/10]", 1 / 10], ["[1/6]", 1 / 6]] }],
        answer: "From 0: [1/10], [1/6], [1/5], [1/4], [1/3]. The larger the denominator, the smaller each part, so the closer it is to 0."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Record the grid reference for the king's crown, throne and jewel.",
        interact: [
          { kind: "gridref", src: "img/s3/u6-grid.png", alt: "A 5 by 5 grid, columns A to E and rows 1 to 5, with a crown, a throne and a jewel", box: [10.94, 3.23, 89.06, 83.87], cols: ["A", "B", "C", "D", "E"], rows: ["5", "4", "3", "2", "1"] },
          { kind: "input", fields: [{ label: "Crown", accept: ["D5"] }, { label: "Throne", accept: ["A1"] }, { label: "Jewel", accept: ["E2"] }] }
        ],
        answer: "Crown **D5** · Throne **A1** · Jewel **E2**. Read the letter across first, then the number up."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "593 + 207 = 700. Communicate your strategy.",
        answer: false,
        explain: "593 + 7 = 600, and 600 + 200 = 800. So 593 + 207 = 800, not 700.",
        interact: [{ kind: "jumps", start: 593, steps: [7, 100, 200], hint: "Jump to the next hundred first." }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record how many millions there are in the following number: 45 812 894",
        interact: [
          { kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 45812894 },
          { kind: "input", fields: [{ label: "Millions", value: 45 }] }
        ],
        answer: "**45 millions** (and 812 894 more). Read the Millions house: 45."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "This is the data collected from an observation of insects in the garden at four different times of the day. How could you represent this data?",
        img: "u6-insects.png",
        interact: [
          { kind: "tally", rows: [{ l: "ants" }, { l: "ladybugs" }, { l: "grasshoppers" }, { l: "caterpillars" }], counts: true, hint: "Choose one picture. Tap + as you count each insect." },
          { kind: "select", hint: "Tap every display that would suit this data.", items: [["A table", true], ["A tally chart", true], ["A column graph", true], ["A picture graph", true], ["A single number", false]] }
        ],
        answer: "Answers vary. Count each insect in each picture, then use a table or tally chart, or a column or picture graph with a bar for each insect (one colour for each time of day)."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "If 0 is the start and 1 is the finish line, how far has each child run in the cross-country?",
        img: "u6-crosscountry.png",
        interact: [
          { kind: "shade", parts: 8, hint: "Jake's line is marked in quarters. Split each quarter in half: how many eighths?" },
          { kind: "shade", parts: 6, hint: "Niamh's line is marked in thirds. Split each third in half: how many sixths?" },
          { kind: "input", fields: [{ label: "Amira", value: 1 / 2, placeholder: "a/b" }, { label: "Jake", value: 1 / 8, placeholder: "a/b" }, { label: "Niamh", value: 1 / 6, placeholder: "a/b" }] }
        ],
        answer: "Amira **[1/2]** · Jake **[1/8]** (halfway to the first quarter) · Niamh **[1/6]** (halfway to the first third).",
        explain: "The distances are read from the marks on the slide's number lines."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Convert each measurement: 3 m = ___ cm, 250 cm = ___ m, 6 cm = ___ mm, 90 mm = ___ cm",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h"], start: 3, shift: true, hint: "1 m = 100 cm, so × 100 moves each digit two places left." },
          { kind: "input", fields: [{ label: "3 m =", value: 300, suffix: "cm" }, { label: "250 cm =", value: 2.5, suffix: "m" }, { label: "6 cm =", value: 60, suffix: "mm" }, { label: "90 mm =", value: 9, suffix: "cm" }] }
        ],
        answer: "3 m = **300 cm** · 250 cm = **2.5 m** · 6 cm = **60 mm** · 90 mm = **9 cm**"
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "7851 − 1739 = ? Communicate your strategy.",
        options: ["6128", "6102", "6122", "6112"],
        answer: 3,
        explain: "Take away in parts: 7851 − 1700 = 6151, then − 39 = 6112.",
        interact: [{ kind: "jumps", start: 7851, back: true, steps: [9, 30, 700, 1000], hint: "Jump back 1000, 700, 30 and 9." }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "How many millions is the same as one billion?",
        interact: [
          { kind: "jumps", start: 0, steps: [100], hint: "Each jump is 100 million. How many jumps reach 1000 million?" },
          { kind: "input", fields: [{ label: "One billion =", value: 1000, suffix: "millions" }] }
        ],
        answer: "**1000 millions**. 1 000 000 000 = 1000 × 1 000 000."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Which graph is appropriate to represent this data set: the number of siblings people in our class have? Communicate your thinking.",
        interact: [
          { kind: "bargraph", max: 10, step: 2, ylabel: "How many people", xlabel: "Number of siblings", label: "Graph A: column graph of the number of siblings", series: [{ l: "People", c: "#C86DE4" }], groups: [{ l: "none", v: [3] }, { l: "one", v: [10] }, { l: "two", v: [8] }, { l: "three", v: [4] }, { l: "four", v: [3] }] },
          { kind: "bargraph", line: true, max: 10, step: 2, ylabel: "How many people", xlabel: "Number of siblings", label: "Graph B: line graph of the number of siblings", series: [{ l: "People", c: "#6A2BE0" }], groups: [{ l: "none", v: [3] }, { l: "one", v: [10] }, { l: "two", v: [8] }, { l: "three", v: [4] }, { l: "four", v: [3] }] },
          { kind: "choose", rows: [{ t: "The appropriate graph is", options: ["A: the column (bar) graph", "B: the line graph"], a: 0 }] }
        ],
        answer: "**The column (bar) graph.** The data is counts in separate categories. A line graph suits data that changes over time, so joining the points here doesn't make sense.",
        explain: "The slide shows the bars sideways; they are redrawn as columns here with the same values (none 3, one 10, two 8, three 4, four 3)."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Record a fraction that is smaller than one half.",
        interact: [
          { kind: "shade", parts: 8, hint: "Shade fewer than half of the parts." },
          { kind: "input", fields: [{ label: "A fraction smaller than [1/2]", min: 0.000001, max: 0.499999, placeholder: "a/b" }] }
        ],
        answer: "Answers vary, for example [1/3], [1/4], [3/8] or [2/5]. The numerator is less than half of the denominator."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure: 2D shapes",
        prompt: "Which of these shapes have a right angle?",
        interact: [
          { kind: "corners", view: [940, 240], r: 24, q: 34, shapes: [
            { p: [[20, 70], [230, 70], [230, 180], [20, 180]], l: "A", fill: "#5BB8E8" },
            { p: [[292, 40], [470, 40], [502, 180], [260, 180]], l: "B", fill: "#C0163A" },
            { p: [[618, 20], [716, 82], [680, 180], [556, 180], [520, 82]], l: "C", fill: "#E06A8A" },
            { p: [[760, 30], [912, 180], [760, 180]], l: "D", fill: "#0B2A6B", lx: 800, ly: 150 }] },
          { kind: "select", hint: "Tap every shape with a right angle.", items: [["A", true], ["B", false], ["C", false], ["D", true]] }
        ],
        answer: "**A and D.** The rectangle has 4 right angles and the triangle has 1. The trapezium and the pentagon have none."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "632 − 236 = 396. Communicate your strategy.",
        answer: true,
        explain: "Count up from 236: + 4 = 240, + 60 = 300, + 332 = 632. 4 + 60 + 332 = 396.",
        interact: [{ kind: "jumps", start: 236, steps: [4, 60, 300, 32], hint: "Count up from 236 to 632." }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Write five and one hundred and twenty-six thousandths in decimal notation.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0, hint: "5 ones, then 126 thousandths." },
          { kind: "input", fields: [{ label: "Decimal", value: 5.126 }] }
        ],
        answer: "**5.126**"
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Which bird travelled the least number of days? Which bird rested the most?",
        interact: [
          { kind: "bargraph", max: 70, step: 10, minor: 2, ylabel: "Days", label: "Travel days and stop-rest days for 10 birds", series: [{ l: "Travel days", c: "#0B2A6B" }, { l: "Stop-rest days", c: "#D7143A" }],
            groups: [{ l: "Bird 1", v: [22, 17] }, { l: "Bird 2", v: [26, 64] }, { l: "Bird 3", v: [22, 0] }, { l: "Bird 4", v: [22, 0] }, { l: "Bird 5", v: [16, 35] }, { l: "Bird 6", v: [13, 34] }, { l: "Bird 7", v: [24, 55] }, { l: "Bird 8", v: [8, 0] }, { l: "Bird 9", v: [8, 0] }, { l: "Bird 10", v: [10, 3] }] },
          { kind: "select", hint: "Travelled the least: tap every bird with the shortest travel bar.", items: [["Bird 1", false], ["Bird 6", false], ["Bird 8", true], ["Bird 9", true], ["Bird 10", false]] },
          { kind: "choose", rows: [{ t: "Rested the most", options: ["Bird 2", "Bird 5", "Bird 7"], a: 0 }] }
        ],
        answer: "Travelled the least: **Bird 8 and Bird 9** (8 days each). Rested the most: **Bird 2** (about 64 days).",
        explain: "On the slide, Birds 8 and 9 have travel bars of the same height, so both are accepted as travelling the least."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Michelle ate [1/8] of a chocolate bar and Greta ate [1/4] of another chocolate bar. Michelle ate more chocolate than Greta. Draw a diagram to show how this can be true.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "This can be true because", options: ["Michelle's chocolate bar was much bigger than Greta's", "[1/8] is always bigger than [1/4]", "they ate the same amount"], a: 0 }] }
        ],
        cubes: { ops: ["÷"], note: "Compare the size of the wholes, not just the fractions.", solve: [{ t: "Draw different wholes", s: "Draw a long bar cut into 8 and a short bar cut into 4. One eighth of the long bar can be bigger than one quarter of the short bar." }, { t: "Use numbers", s: "If Michelle's bar had 80 squares, [1/8] is 10 squares. If Greta's had 20 squares, [1/4] is 5 squares. 10 > 5." }] },
        answer: "It's true if **Michelle's chocolate bar was bigger**. A fraction is part of a whole, so [1/8] of a big bar can be more than [1/4] of a small bar."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "This rectangle is made up of square centimetres. What is the area of the rectangle? Communicate your reasoning.",
        interact: [
          { kind: "areagrid", cells: ["111111", "111111", "111111"] },
          { kind: "input", fields: [{ label: "Area", value: 18, suffix: "cm²" }] }
        ],
        answer: "**18 cm²**. 3 rows of 6 squares: 3 × 6 = 18 square centimetres."
      }
    ],
    // Review 5
    [
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Which of these numbers are larger than 74 312 981? You may select more than one answer. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 74312981 },
          { kind: "select", hint: "Tap every number larger than 74 312 981.", items: [["A  47 312 982", false], ["B  93 321 999", true], ["C  74 312 991", true], ["D  7 431 299", false]] }
        ],
        answer: "**B and C.** B has 9 ten millions (more than 7). C matches 74 312 9__ but has 9 tens, more than 8 tens. A has only 4 ten millions and D has only 7 millions.",
        explain: "The slide's number, 74 312 98, is missing a digit. It has been completed as 74 312 981 so B and C are both larger."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Which decimal is larger: 0.578 or 0.6? Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.03, items: [["0.578", 0.578], ["0.6", 0.6]] },
          { kind: "choose", rows: [{ t: "Larger", options: ["0.578", "0.6"], a: 1 }] }
        ],
        answer: "**0.6.** Compare the tenths first: 0.6 has 6 tenths and 0.578 has only 5 tenths. 0.6 = 0.600 > 0.578."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Phil thinks that the opening of the Opera House occurred before the Apollo moon landing and after colour television was launched. Do you agree? Use the Australian TV broadcasting timeline: Apollo 11 moon landing 1969, opening of the Sydney Opera House 1973, colour television launched in Australia 1975.",
        interact: [
          { kind: "numberline", min: 1960, max: 1990, ticks: 1, labelStep: 5, tol: 1, items: [["Apollo 11", 1969], ["Opera House", 1973], ["Colour TV", 1975]] },
          { kind: "choose", rows: [{ t: "Do you agree with Phil?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No.** The Opera House opened in 1973: **after** the moon landing (1969) and **before** colour television (1975). Phil has both the wrong way around."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "[5/8] + [6/8] = ? Record the answer in two forms.",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4], hint: "5 eighths" },
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5], hint: "6 eighths" },
          { kind: "input", fields: [{ label: "Improper fraction", accept: ["11/8"], placeholder: "a/b" }, { label: "Mixed number", accept: ["1 3/8", "1+3/8"], placeholder: "1 a/b" }] }
        ],
        answer: "**[11/8]** = **1[3/8]**. 5 eighths + 6 eighths = 11 eighths: one whole (8 eighths) and 3 eighths more."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "The clock shows 3:53 am. How many minutes until 4 o'clock?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 233, end: 240, steps: [1, 5], hint: "Jump to 4:00." },
          { kind: "input", fields: [{ label: "Minutes", value: 7 }] }
        ],
        answer: "**7 minutes.** 3:53 + 7 minutes = 4:00."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "The number 3 217 689 has 3 217 thousands.",
        answer: true,
        explain: "3 217 689 = 3 217 thousands + 689. Read everything to the left of the Ones house as thousands.",
        interact: [{ kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 3217689 }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record the dose marked with a red arrow on the syringe.",
        img: "u6-syringe.png",
        interact: [
          { kind: "marker", min: 0.7, max: 0.8, divs: 10, majorEvery: 5, labels: [0.7, 0.75, 0.8], label: "dose", hint: "Each small mark is 0.01 mL. Count up from 0.7 mL." },
          { kind: "input", fields: [{ label: "Dose", min: 0.72, max: 0.73, suffix: "mL" }] }
        ],
        answer: "**0.73 mL.** The arrow is 3 small marks above 0.7 mL, and each small mark is 0.01 mL.",
        explain: "The arrow is read from the slide picture as 0.73 mL. Readings of 0.72 mL are also accepted."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "What is the place value of the digit 3 in 0.243?",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.243 },
          { kind: "choose", rows: [{ t: "The 3 is in the", options: ["tenths", "hundredths", "thousandths"], a: 2 }] },
          { kind: "input", fields: [{ label: "Its value", value: 0.003 }] }
        ],
        answer: "**Thousandths**: the 3 is worth 0.003 (3 thousandths)."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Record an equation for the diagram: 8 parts, each labelled [1/5] (one full row of 5 fifths and 3 more fifths).",
        interact: [
          { kind: "shade", parts: 5, pre: [0, 1, 2, 3, 4], hint: "One whole: 5 fifths" },
          { kind: "shade", parts: 5, pre: [0, 1, 2], hint: "3 more fifths" },
          { kind: "sentence", fields: [{ label: "Equation", placeholder: "e.g. 8 × 1/5 = 8/5", re: "8\\s*/\\s*5|=\\s*1\\.6\\s*$", msg: "The total is 8 fifths: write it as 8/5.", sample: "8 x 1/5 = 8/5" }] }
        ],
        answer: "For example 8 × [1/5] = [8/5] = 1[3/5], or [5/5] + [3/5] = [8/5].",
        explain: "Mixed numbers can't be typed into the equation box, so the answer is checked as 8/5 (or 1.6)."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Record the time in digital notation.",
        interact: [
          { kind: "clock", time: "7:45", drag: true },
          { kind: "input", fields: [{ label: "Digital time", accept: ["7:45"], placeholder: "h:mm" }] }
        ],
        answer: "**7:45.** The minute hand points to the 9 (45 minutes) and the hour hand is just before the 8.",
        explain: "Read from the slide clock: the long hand points to 9 and the short hand is between 7 and 8."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Represents whole numbers A",
        prompt: "The number forty-three million, six hundred and thirty-four thousand, nine hundred and fourteen is written as:",
        options: ["43 634", "43 634 940", "43 634 914", "634 914 43"],
        answer: 2,
        explain: "43 millions, 634 thousands and 914 ones: 43 634 914.",
        interact: [{ kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 43634914 }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the addition for subtraction strategy to solve the following equation: 405 − 389 = ? Explain why this strategy is efficient.",
        interact: [
          { kind: "jumps", start: 389, end: 405, steps: [1, 5, 10], hint: "Count up from 389 to 405." },
          { kind: "input", fields: [{ label: "405 − 389 =", value: 16 }] }
        ],
        answer: "**16.** 389 + 1 = 390, + 10 = 400, + 5 = 405. 1 + 10 + 5 = 16. The numbers are close together, so counting up is quicker than taking away."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Record the missing integers that complete the number line.",
        interact: [{ kind: "cells", cols: 15, w: 52, msg: "Count up by 1 from −7 to 7.", grid: [[-7, -6, { v: -5 }, { v: -4 }, -3, { v: -2 }, -1, 0, 1, 2, { v: 3 }, 4, { v: 5 }, 6, { v: 7 }]], free: true }],
        answer: "−7, −6, **−5**, **−4**, −3, **−2**, −1, 0, 1, 2, **3**, 4, **5**, 6, **7**"
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "2 − [3/8] = ? Communicate your strategy.",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5, 6, 7], hint: "Whole 1" },
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5, 6, 7], hint: "Whole 2: tap 3 eighths to take them away." },
          { kind: "input", fields: [{ label: "2 − [3/8] =", value: 13 / 8, placeholder: "1 a/b" }] }
        ],
        answer: "**1[5/8]** ([13/8]). 2 wholes = 16 eighths. 16 eighths − 3 eighths = 13 eighths."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Sketch a cube.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 12 }, { label: "Vertices", value: 8 }] }
        ],
        answer: "Draw two overlapping squares and join their matching corners. A cube has **6** square faces, **12** edges and **8** vertices."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents number A",
        prompt: "The following numbers are in ascending order: 5 481 497, 5 058 723, 4 946 811, 4 212 905",
        answer: false,
        explain: "They go from largest to smallest, so they are in descending order.",
        interact: [{ kind: "order", items: ["5 481 497", "5 058 723", "4 946 811", "4 212 905"], answer: [3, 2, 1, 0], hint: "Put them in ascending order: smallest first." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Flynn ate 2 purple plates, 3 orange plates and 2 red plates. How much change will he get from $200?",
        img: "u6-menu.png",
        interact: [
          { kind: "shop", hint: "Tap each plate Flynn ate.", items: [["Purple plate", 25], ["Purple plate", 25], ["Orange plate", 22], ["Orange plate", 22], ["Orange plate", 22], ["Red plate", 33], ["Red plate", 33], ["Green plate", 30], ["Pink plate", 27], ["Blue plate", 35]] },
          { kind: "input", fields: [{ label: "Total", prefix: "$", value: 182 }, { label: "Change", prefix: "$", value: 18 }] }
        ],
        cubes: { ops: ["×", "+", "−"], solve: [{ t: "Group the plates", s: "2 × $25 = $50, 3 × $22 = $66, 2 × $33 = $66. $50 + $66 + $66 = $182. $200 − $182 = $18." }, { t: "Count up", s: "From $182: + $8 = $190, + $10 = $200. $8 + $10 = $18 change." }] },
        answer: "**$18 change.** The plates cost $50 + $66 + $66 = $182."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Which month had the most rainfall? Which month had the least amount of rainfall?",
        interact: [
          { kind: "bargraph", line: true, max: 100, step: 20, minor: 5, ylabel: "Rainfall (mm)", xlabel: "Months", label: "Line graph of rainfall per month", series: [{ l: "Rainfall", c: "#2F6FE4" }],
            groups: [{ l: "Jan", v: [13] }, { l: "Feb", v: [38] }, { l: "Mar", v: [44] }, { l: "Apr", v: [50] }, { l: "May", v: [63] }, { l: "Jun", v: [57] }, { l: "Jul", v: [89] }, { l: "Aug", v: [90] }, { l: "Sep", v: [68] }, { l: "Oct", v: [43] }, { l: "Nov", v: [39] }, { l: "Dec", v: [25] }] },
          { kind: "choose", rows: [
            { t: "Most rainfall", options: ["May", "July", "August", "September"], a: 2 },
            { t: "Least rainfall", options: ["January", "February", "November", "December"], a: 0 }] }
        ],
        answer: "Most: **August** (about 90 mm, just above July). Least: **January** (about 13 mm).",
        explain: "July and August are very close on the slide's graph; August's point is slightly higher."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "[5/6] + 1[2/6] = ? Communicate your strategy.",
        interact: [
          { kind: "shade", parts: 6, pre: [0, 1, 2, 3, 4], hint: "[5/6]" },
          { kind: "shade", parts: 6, pre: [0, 1, 2, 3, 4, 5], hint: "1 whole" },
          { kind: "shade", parts: 6, pre: [0, 1], hint: "[2/6]" },
          { kind: "input", fields: [{ label: "Answer", value: 13 / 6, placeholder: "2 a/b" }] }
        ],
        answer: "**2[1/6]** ([13/6]). [5/6] + [2/6] = [7/6] = 1[1/6], plus the 1 whole: 2[1/6]."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "How many triangles and/or rhombuses form a hexagon?",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "input", fields: [{ label: "Triangles only", value: 6 }, { label: "Rhombuses only", value: 3 }] }
        ],
        answer: "**6 triangles**, or **3 rhombuses**. You can also mix them: 1 rhombus + 4 triangles, or 2 rhombuses + 2 triangles."
      }
    ]
  ]
});
