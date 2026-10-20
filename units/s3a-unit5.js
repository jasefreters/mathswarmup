/*
  Stage 3 Year A, Unit 5 — Review of learning (Term 1, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 1, ls: 5, unit: 5,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 5 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "What is three million, four hundred and eighty-seven thousand, two hundred and nine written as a number?",
        options: ["3 784 902", "3 748 029", "3 847 290", "3 487 209"],
        answer: 3,
        explain: "Three million → 3, four hundred and eighty-seven thousand → 487, two hundred and nine → 209 (0 tens). 3 487 209.",
        interact: [{ kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 3487209 }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Write a question that can be answered using this data.",
        img: "u5-sports.png",
        interact: [
          { kind: "select", hint: "Tap every question this graph can answer.", items: [["Which sport is the most popular?", true], ["How many more chose football than tennis?", true], ["Which sport did the fewest choose?", true], ["How old are the students?", false], ["What is their favourite colour?", false]] }
        ],
        answer: "Answers vary, for example: Which sport is the most popular? (football, 200) · How many more chose football than tennis? (100) · Which sport is the least popular? (basketball, 75)",
        explain: "The graph has no axis labels on the slide; the values are read as about 100, 200, 150, 75, 90, 125 and 110."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Record these fractions on a number line: 2 quarters, 6 quarters, 2 thirds, 4 thirds.",
        interact: [{ kind: "numberline", min: 0, max: 2, ticks: 12, tol: 0.04, items: [["[2/4]", 0.5], ["[6/4]", 1.5], ["[2/3]", 2 / 3], ["[4/3]", 4 / 3]] }],
        answer: "[2/4] = [1/2] is halfway to 1 · [2/3] is just past it · [4/3] = 1[1/3] · [6/4] = 1[1/2]. Order: [2/4], [2/3], [4/3], [6/4]."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Which instrument is most effective for measuring the perimeter of the school playground?",
        img: "u5-tools.png",
        interact: [{ kind: "choose", rows: [{ t: "Most effective", options: ["trundle wheel", "tape measure", "metre ruler"], a: 0 }] }],
        answer: "The **trundle wheel**. It measures long distances quickly by rolling around the edge. A tape measure or metre ruler would need to be moved many times."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Use directional language to plan a route from the birds to the pandas.",
        interact: [
          { kind: "gridref", src: "img/s3/u5-zoo.png", alt: "Zoo map with a grid, columns A to G and rows 1 to 7", box: [11.94, 0.7, 99.47, 91.5], cols: ["A", "B", "C", "D", "E", "F", "G"], rows: ["7", "6", "5", "4", "3", "2", "1"] },
          { kind: "choose", rows: [
            { t: "The birds are in", options: ["A1", "B2", "G1"], a: 0 },
            { t: "The pandas are in", options: ["E7", "G6", "E4"], a: 0 }] }
        ],
        answer: "Answers vary. For example: from the birds in A1, go north along the path to row 3, east to the path in C, north to the main path in row 5, then east and north to the pandas in E7."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "10 502 896 comes after 10 205 689.",
        answer: true,
        explain: "Both have 10 millions. Compare the hundred thousands: 5 > 2, so 10 502 896 is larger and comes after.",
        interact: [{ kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 10502896 }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Write a survey question using the Likert scale to find out how much Stage 3 students enjoy playing soccer during sport time.",
        interact: [{ kind: "order", hint: "Put the Likert scale responses in order, from least to most.", items: ["Agree", "Strongly disagree", "Neutral", "Strongly agree", "Disagree"], answer: [1, 4, 2, 0, 3] }],
        answer: "Answers vary, for example: \"I enjoy playing soccer during sport time.\" Strongly disagree · Disagree · Neutral · Agree · Strongly agree."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Draw a number line showing [1/2]. Then place and label [1/3] and [2/5].",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 30, tol: 0.02, items: [["[1/2]", 0.5], ["[1/3]", 1 / 3], ["[2/5]", 0.4]] }],
        answer: "[1/3] (about 0.33), then [2/5] (0.4), then [1/2] (0.5). Both are less than a half."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record something that is approximately 100 metres away from where you are.",
        interact: [{ kind: "choose", rows: [{ t: "About 100 m long", options: ["a football field", "a classroom", "a netball court", "a pencil"], a: 0 }] }],
        answer: "Answers vary. A football field is about 100 m long. Talk about places around the school that are about 100 m from the classroom."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Record the names of the angles shown: angle A, angle B and angle C.",
        img: "u5-angles.png",
        interact: [
          { kind: "angle", names: true, start: 135, label: "Make each angle to compare." },
          { kind: "choose", rows: [
            { t: "Angle A", options: ["acute", "right", "obtuse"], a: 2 },
            { t: "Angle B", options: ["acute", "right", "obtuse"], a: 1 },
            { t: "Angle C", options: ["acute", "right", "obtuse"], a: 0 }] }
        ],
        answer: "A: **obtuse** (greater than a right angle) · B: **right angle** · C: **acute** (less than a right angle)"
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "Which number is **between** 3 691 104 and 3 691 604?",
        options: ["3 691 512", "3 691 645", "3 691 102", "3 691 640"],
        answer: 0,
        explain: "Only 3 691 512 is more than 3 691 104 and less than 3 691 604. 645 and 640 are too big; 102 is too small.",
        interact: [{ kind: "marker", min: 3691000, max: 3692000, divs: 10, majorEvery: 5, labels: [3691000, 3691500, 3692000], label: "?", hint: "Each step is 100. Slide the pin to check each option." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What information is missing to interpret this column graph?",
        img: "u5-graph.png",
        interact: [{ kind: "select", hint: "Tap everything the graph is missing.", items: [["a title", true], ["a label on each axis", true], ["numbers on the scale", true], ["names for each column", true], ["more colours", false]] }],
        answer: "A **title**, **axis labels**, **numbers on the vertical scale** and **names for each column**. Without them we can't tell what the graph shows."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Record an equivalent fraction: [1/4] = ?",
        interact: [
          { kind: "shade", parts: 4, pre: [0], hint: "[1/4] of the strip" },
          { kind: "shade", parts: 8, hint: "Shade the same amount of this strip." },
          { kind: "input", fields: [{ label: "[1/4] =", value: 0.25, placeholder: "a/b" }] }
        ],
        answer: "Answers vary: [2/8], [3/12], [4/16], [25/100] …"
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "If all sides of this triangle are equal, what is its perimeter?",
        interact: [
          { kind: "sides", view: [300, 262], label: "Equilateral triangle", fill: "#9C73B5", poly: [[30, 210], [270, 210], [150, 2.2]], dims: [{ from: [30, 232], to: [270, 232] }], labels: [{ x: 150, y: 250, t: "6 cm" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 18, suffix: "cm" }] }
        ],
        answer: "**18 cm**. All 3 sides are 6 cm: 6 + 6 + 6 = 18 cm."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "List 3 items in the classroom that have one or more right angles.",
        interact: [{ kind: "select", hint: "Tap the items that have right angles.", items: [["a book", true], ["a door", true], ["the whiteboard", true], ["a window", true], ["a round clock", false], ["a ball", false]] }],
        answer: "Answers vary: a book, a door, the whiteboard, a window, a desk top, a sheet of paper."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "5 420 231 comes before 5 402 319.",
        answer: false,
        explain: "Compare the ten thousands: 5 420 231 has 2, 5 402 319 has 0. So 5 420 231 is larger and comes after.",
        interact: [{ kind: "marker", min: 5400000, max: 5430000, divs: 30, majorEvery: 10, labels: [5400000, 5410000, 5420000, 5430000], label: "?", hint: "Each step is 1000. Slide the pin to each number." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Write the range and the mode for the following data display.",
        img: "u5-programs.png",
        interact: [
          { kind: "input", fields: [{ label: "Highest", value: 23 }, { label: "Lowest", value: 2 }, { label: "Range", value: 21 }] },
          { kind: "choose", rows: [{ t: "Mode (most popular)", options: ["Sport", "Art", "STEM and coding", "Gardening"], a: 0 }] }
        ],
        answer: "Range = 23 − 2 = **21** students. The mode is **Sport**, the most common choice (23 students).",
        explain: "No number of students repeats, so the mode is read as the most popular category: Sport."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Draw and record how 4 children shared a chocolate bar. Chris [1/8], Zara [3/8], Mikah [1/4], Jona [2/8].",
        interact: [
          { kind: "shade", parts: 8, hint: "The chocolate bar has 8 pieces. Shade each child's share." },
          { kind: "input", fields: [{ label: "Mikah's [1/4] in eighths", value: 0.25, placeholder: "a/8" }, { label: "Total shared", value: 1, placeholder: "a/8" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Change to eighths", s: "[1/4] = [2/8]. [1/8] + [3/8] + [2/8] + [2/8] = [8/8]." }, { t: "Draw it", s: "Split a bar into 8 pieces: Chris 1, Zara 3, Mikah 2, Jona 2. All 8 pieces are used: the whole bar." }] },
        answer: "Mikah's [1/4] = [2/8]. Together: 1 + 3 + 2 + 2 = [8/8], the **whole bar**."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "What is the perimeter of this square?",
        interact: [
          { kind: "sides", view: [260, 220], label: "Square", fill: "#23BCC9", poly: [[70, 20], [250, 20], [250, 200], [70, 200]], dims: [{ from: [50, 22], to: [50, 198] }], labels: [{ x: 42, y: 115, t: "6 cm", anchor: "end" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 24, suffix: "cm" }] }
        ],
        answer: "**24 cm**. A square has 4 equal sides: 4 × 6 = 24 cm."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Draw a trapezium and record the number of sides, number of angles, types of angles and number of pairs of parallel sides.",
        interact: [
          { kind: "corners", view: [340, 200], r: 22, q: 30, shapes: [{ p: [[30, 175], [310, 175], [240, 30], [100, 30]], fill: "#FFD27A" }] },
          { kind: "input", fields: [{ label: "Sides", value: 4 }, { label: "Angles", value: 4 }, { label: "Pairs of parallel sides", value: 1 }] },
          { kind: "choose", rows: [{ t: "Types of angles", options: ["2 acute and 2 obtuse", "4 right angles", "4 acute"], a: 0 }] },
          { kind: "sketch" }
        ],
        answer: "4 sides, 4 angles, **1 pair** of parallel sides. This trapezium has 2 acute and 2 obtuse angles.",
        explain: "A right trapezium has 2 right angles, 1 acute and 1 obtuse instead. The check uses the trapezium drawn here."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "What is 13 × 2?",
        options: ["23", "25", "26", "29"],
        answer: 2,
        explain: "Double 13: 10 × 2 = 20 and 3 × 2 = 6. 20 + 6 = 26.",
        interact: [{ kind: "array", rows: 2, cols: 13, max: 13, showTotal: true }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Draw a timeline with the following years as points on a number line: 2015, 1985, 2005, 1995, 2025.",
        interact: [{ kind: "numberline", min: 1980, max: 2030, ticks: 0.2, labelStep: 10, tol: 2, items: [["2015", 2015], ["1985", 1985], ["2005", 2005], ["1995", 1995], ["2025", 2025]] }],
        answer: "1985, 1995, 2005, 2015, 2025: each point is 10 years apart."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Solve: [1/5] + [1/5] + [2/5]",
        interact: [
          { kind: "shade", parts: 5, hint: "Shade [1/5], then [1/5], then [2/5]." },
          { kind: "input", fields: [{ label: "Total", value: 0.8, placeholder: "a/b" }] }
        ],
        answer: "**[4/5]**. The denominators stay the same: 1 + 1 + 2 = 4 fifths."
      },
      {
        type: "sr", focus: "Non spatial measure A: Time",
        prompt: "What is 10:30 pm in 24-hour time?",
        interact: [
          { kind: "clock", time: "10:30", h24: true },
          { kind: "input", fields: [{ label: "24-hour time", accept: ["22:30"], placeholder: "hh:mm" }] }
        ],
        answer: "**22:30**. For pm times, add 12 to the hour: 10 + 12 = 22."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Record in words the time displayed on each digital clock.",
        display: "Clock A 02:45 am · Clock B 08:30 · Clock C 10:25",
        interact: [
          { kind: "clock", time: "2:45" },
          { kind: "choose", rows: [
            { t: "Clock A 02:45", options: ["quarter past two", "quarter to three", "half past two"], a: 1 },
            { t: "Clock B 08:30", options: ["half past eight", "half past nine", "quarter past eight"], a: 0 },
            { t: "Clock C 10:25", options: ["twenty-five to ten", "twenty-five past ten", "ten past five"], a: 1 }] }
        ],
        answer: "A: **quarter to three** (two forty-five) · B: **half past eight** (eight thirty) · C: **twenty-five past ten** (ten twenty-five)"
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "15 × 4 can be represented as 15 × 2 + 15 × 2",
        answer: true,
        explain: "4 = 2 + 2, so 15 × 4 = 15 × 2 + 15 × 2 = 30 + 30 = 60. Split the array into two halves to see it.",
        interact: [{ kind: "array", rows: 4, cols: 15, max: 15, showTotal: true }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Order the following decimals from smallest to largest: 0.34, 0.4, 0.0043",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.34, hint: "Build each number and compare the tenths first." },
          { kind: "order", items: ["0.34", "0.4", "0.0043"], answer: [2, 0, 1] }
        ],
        answer: "0.0043, 0.34, 0.4. 0.0043 has 0 tenths; 0.34 has 3 tenths; 0.4 has 4 tenths."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Which fraction addition problem is correct?",
        interact: [
          { kind: "shade", parts: 3, pre: [0, 1], hint: "[2/3]" },
          { kind: "shade", parts: 3, pre: [0, 1], hint: "+ [2/3]" },
          { kind: "choose", rows: [{ t: "Correct", options: ["[2/3] + [2/3] = [4/6]", "[2/3] + [2/3] = [4/3] = 1[1/3]"], a: 1 }] }
        ],
        answer: "**[2/3] + [2/3] = [4/3] = 1[1/3]**. Add the numerators only: the parts are still thirds. [4/6] is less than 1, which can't be right."
      },
      {
        type: "sr", focus: "Non spatial measure A: Time",
        prompt: "Record the following 12-hour times in 24-hour time: 3:15 pm, 6:30 pm, 9:25 pm",
        interact: [
          { kind: "clock", time: "3:15", h24: true },
          { kind: "input", fields: [{ label: "3:15 pm", accept: ["15:15"], placeholder: "hh:mm" }, { label: "6:30 pm", accept: ["18:30"], placeholder: "hh:mm" }, { label: "9:25 pm", accept: ["21:25"], placeholder: "hh:mm" }] }
        ],
        answer: "**15:15**, **18:30** and **21:25**. Add 12 to each pm hour."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "Record the mass of the apples in grams and kilograms.",
        img: "u5-apples.png",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 1.858, hint: "This is the mass in kilograms. Each thousandth of a kilogram is 1 gram." },
          { kind: "input", fields: [{ label: "Grams", value: 1858, suffix: "g" }, { label: "Kilograms", value: 1.858, suffix: "kg" }] }
        ],
        answer: "**1858 g** = **1.858 kg**. 1000 g = 1 kg, so 1858 g is 1 kg and 858 g."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which problem matches this area model?",
        img: "u5-areamodel.png",
        options: ["30 × 2", "32 × 3", "302 × 3", "3 × 302"],
        answer: 1,
        explain: "The top is split into 30 and 2, so it's 32. The side is 3. 3 × 30 = 90 and 3 × 2 = 6, so 32 × 3 = 96."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Record the missing numbers on the number line: −3, __, −1, __, 1, 2, __",
        interact: [
          { kind: "jumps", start: -3, min: -3, max: 3, steps: [1], hint: "Jump + 1 from −3." },
          { kind: "input", fields: [{ label: "2nd", value: -2 }, { label: "4th", value: 0 }, { label: "7th", value: 3 }] }
        ],
        answer: "−3, **−2**, −1, **0**, 1, 2, **3**. Each step is 1."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "What are the missing fractions? [1/3] + [4/3] + __ = 2 · [6/10] + __ + [4/10] = 2 · [8/10] + [2/5] + __ = 2",
        interact: [
          { kind: "shade", parts: 10, hint: "A strip of tenths, to help with the second and third." },
          { kind: "input", fields: [{ label: "1st", value: 1 / 3, placeholder: "a/b" }, { label: "2nd", value: 1, placeholder: "a/b" }, { label: "3rd", value: 0.8, placeholder: "a/b" }] }
        ],
        answer: "**[1/3]** ([1/3] + [4/3] = [5/3], and 2 = [6/3]) · **[10/10]** ([6/10] + [4/10] = 1) · **[8/10]** ([2/5] = [4/10], so [8/10] + [4/10] = [12/10], and 2 = [20/10])"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Complete this conversion table.",
        interact: [{ kind: "cells", cols: 3, w: 120, free: true, msg: "10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km.", grid: [["10 mm", { v: 1 }, "cm"], ["100 cm", { v: 1 }, "m"], ["1000 m", { v: 1 }, "km"]] }],
        answer: "10 mm = **1** cm · 100 cm = **1** m · 1000 m = **1** km"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Record the number of faces, vertices and edges of a square-based pyramid.",
        img: "u5-pyramid.png",
        interact: [{ kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Vertices", value: 5 }, { label: "Edges", value: 8 }] }],
        answer: "**5 faces** (1 square, 4 triangles), **5 vertices** and **8 edges**."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "40 × 5 = 20 × 10. Communicate your reasoning.",
        answer: true,
        explain: "Both equal 200. Halve 40 to get 20, and double 5 to get 10: the product stays the same.",
        interact: [{ kind: "scale", left: "40 × 5", right: "20 × ?", answer: 10 }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What is the most effective data display (column or line graph) for: monitoring the daily sales in a bakery, recording the number of students attending choir each week, tracking the height growth of a sunflower?",
        interact: [{ kind: "choose", rows: [
          { t: "Daily sales in a bakery", options: ["column graph", "line graph"], a: [1, 0] },
          { t: "Students at choir each week", options: ["column graph", "line graph"], a: 0 },
          { t: "Height of a sunflower", options: ["column graph", "line graph"], a: 1 }] }],
        answer: "Sunflower height: **line graph** (it changes continuously over time). Choir each week: **column graph** (separate counts). Bakery daily sales: a **line graph** shows the trend over time; a column graph also works.",
        explain: "Bakery sales could be shown either way, so both are accepted."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Write a real-life mathematical problem for this equation and then solve it: [5/3] − [2/3] = ?",
        interact: [
          { kind: "shade", parts: 3, pre: [0, 1, 2], hint: "[3/3]" },
          { kind: "shade", parts: 3, pre: [0, 1], hint: "[2/3] — together [5/3]. Tap to take away [2/3]." },
          { kind: "input", fields: [{ label: "[5/3] − [2/3] =", value: 1, placeholder: "a/b" }] }
        ],
        answer: "**[3/3] = 1**. For example: I had [5/3] pizzas and ate [2/3] of a pizza. How much is left? 1 whole pizza."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Use the conversion graphic to solve: 40 m is the same as __ cm and __ km.",
        img: "u5-convert.png",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h"], start: 40, shift: true, hint: "40 m: × 100 for centimetres, ÷ 1000 for kilometres." },
          { kind: "input", fields: [{ label: "40 m =", value: 4000, suffix: "cm" }, { label: "40 m =", value: 0.04, suffix: "km" }] }
        ],
        answer: "**4000 cm** (40 × 100) and **0.04 km** (40 ÷ 1000)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Record the area of the blue shape.",
        img: "u5-area.png",
        interact: [{ kind: "input", fields: [{ label: "Whole squares", value: 11 }, { label: "Half squares", value: 4 }, { label: "Area", value: 13, suffix: "square units" }] }],
        answer: "**13 square units**: 11 whole squares, plus 4 half squares that make 2 more.",
        explain: "Each grid square is taken as 1 square unit, as the slide gives no measurements."
      }
    ]
  ]
});
