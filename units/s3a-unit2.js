/*
  Stage 3 Year A, Unit 2 — Review of learning (Term 1, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 1, ls: 2, unit: 2,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 2 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which of the following are in **ascending** order?",
        options: ["48 379, 46 208, 43 752", "41 625, 43 752, 46 208", "43 752, 41 625, 46 208", "41 625, 46 208, 43 752"],
        answer: 1,
        explain: "Ascending means smallest to largest. All have 4 ten thousands, so compare the thousands: 1, 3, 6.",
        interact: [{ kind: "numberline", min: 40000, max: 52000, ticks: 0.001, labelStep: 5000, tol: 400, items: [["41 625", 41625], ["43 752", 43752], ["46 208", 46208]] }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Arrange these numbers in **descending** order: 48 275, 52 194, 49 836, 51 420",
        interact: [{ kind: "order", items: ["48 275", "52 194", "49 836", "51 420"], answer: [1, 3, 2, 0] }],
        answer: "52 194, 51 420, 49 836, 48 275. Compare the ten thousands first (5 before 4), then the thousands."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Use place value to record 318 905 in expanded notation.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 318905 },
          { kind: "input", fields: [{ label: "318 905 =", value: 300000 }, { label: "+", value: 10000 }, { label: "+", value: 8000 }, { label: "+", value: 900 }, { label: "+", value: 5 }] }
        ],
        answer: "**300 000 + 10 000 + 8000 + 900 + 5**. There are 0 tens, so no tens part is needed."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition 254 307 in a non-standard form. Communicate your reasoning.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 254307, target: 254307, need: "nonstandard" }],
        answer: "Answers vary, for example 2 hundred thousands + 54 thousands + 30 tens + 7 ones, or 250 000 + 4307. Breaking one unit into 10 of the next place keeps the value the same."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "A pencil is 11 and a half centimetres long. Record the length of the pencil using millimetres (mm).",
        interact: [
          { kind: "marker", min: 0, max: 15, ticks: 1, minor: 10, target: 11.5, tol: 0.1, label: "tip", msg: "Find 11 cm, then count 5 more millimetres." },
          { kind: "input", fields: [{ label: "Length", value: 115, suffix: "mm" }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Convert each part", s: "11 cm = 110 mm and half a centimetre = 5 mm. 110 + 5 = 115 mm." }, { t: "Multiply by 10", s: "1 cm = 10 mm, so 11.5 × 10 = 115 mm." }] },
        answer: "**115 mm**. 1 cm = 10 mm, so 11 cm = 110 mm and half a centimetre = 5 mm."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "The number 46 827 rounded to the nearest thousand is 47 000.",
        answer: true,
        explain: "46 827 is between 46 000 and 47 000. It is past halfway (46 500), so it rounds up to 47 000.",
        interact: [{ kind: "marker", min: 46000, max: 47200, divs: 12, majorEvery: 5, labels: [46000, 46500, 47000], label: "46 827", hint: "Slide the pin to 46 827. Is it before or after halfway?" }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "865 472 can be partitioned in multiple ways. Record how to partition it in standard form and non-standard form. Explain why both partitions represent the same number.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 865472, target: 865472, need: "nonstandard", hint: "This is the standard form. Break a counter apart to make a non-standard form, then press Show the number." }],
        answer: "Standard: 800 000 + 60 000 + 5000 + 400 + 70 + 2. Non-standard (answers vary): 86 ten thousands + 54 hundreds + 72 ones. Both show the same total value; only the way it is grouped changes."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Write the following number in digits: six million, two hundred and eight thousand, four hundred and fifteen.",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 0, target: 6208415, need: "standard", hint: "Build it one house at a time: millions, then thousands, then ones." },
          { kind: "input", fields: [{ label: "In digits", value: 6208415 }] }
        ],
        answer: "**6 208 415**. The thousands house is 208 and the ones house is 415."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition 731 408 using non-standard form. Communicate your reasoning.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 731408, target: 731408, need: "nonstandard" }],
        answer: "Answers vary, for example 73 ten thousands + 14 hundreds + 8 ones, or 700 000 + 31 408."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Describe this acute angle compared to a quarter turn.",
        interact: [
          { kind: "angle", target: "less", start: 33, label: "This is the angle. Drag the arm to a quarter turn to compare, then back." },
          { kind: "choose", rows: [{ t: "Compared to a quarter turn, the angle is", options: ["smaller", "the same", "larger"], a: 0 }] }
        ],
        answer: "It is **smaller than a quarter turn** (a right angle). It is about a third of a quarter turn."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Round 48 726 to the nearest ten thousand.",
        options: ["40 000", "48 000", "50 000", "48 700"],
        answer: 2,
        explain: "48 726 is between 40 000 and 50 000. It is past halfway (45 000), so it rounds up to 50 000.",
        interact: [{ kind: "marker", min: 40000, max: 52000, divs: 12, majorEvery: 5, labels: [40000, 45000, 50000], label: "48 726", hint: "Slide the pin to 48 726. Which ten thousand is it closer to?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Find the total of 4326 + 258. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 4326, steps: [100, 50, 8, 10, 1], hint: "Split 258 into 200 + 50 + 8 and jump." },
          { kind: "input", fields: [{ label: "4326 + 258 =", value: 4584 }] }
        ],
        answer: "**4584**. 4326 + 200 = 4526, + 50 = 4576, + 8 = 4584."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record different ways to partition the number 34 327 416 in non-standard form.",
        interact: [{ kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 34327416, target: 34327416, need: "nonstandard" },
          { kind: "expr", count: 2, target: 34327416, placeholder: "e.g. 34 000 000 + 327 416", sample: ["34 000 000 + 327 416", "34 327 000 + 416"], mustUse: { re: "\\+", msg: "Join the parts with +." } }],
        answer: "Answers vary, for example 34 000 000 + 327 416, 34 327 000 + 416, or 343 hundred thousands + 27 thousands + 416 ones."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Place the following on a number line: 2.46, 1.32, 2.08. Communicate your reasoning.",
        interact: [{ kind: "numberline", min: 1, max: 3, ticks: 10, tol: 0.04, items: [["2.46", 2.46], ["1.32", 1.32], ["2.08", 2.08]] }],
        answer: "1.32 is just past 1.3. 2.08 is just before 2.1. 2.46 is just before 2.5. Look at the ones first, then the tenths, then the hundredths."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "A rectangle is drawn onto square-centimetre paper. The rectangle covers 5 rows and 7 columns of squares. Calculate the area of the rectangle in square centimetres. Communicate your reasoning.",
        interact: [
          { kind: "areagrid", cells: ["1111111", "1111111", "1111111", "1111111", "1111111"] },
          { kind: "input", fields: [{ label: "Area", value: 35, suffix: "cm²" }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Rows of squares", s: "5 rows of 7 squares: 5 × 7 = 35 square centimetres." }, { t: "Skip count", s: "7, 14, 21, 28, 35. That's 35 cm²." }] },
        answer: "**35 cm²**. 5 rows × 7 columns = 35 squares, and each square is 1 cm²."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "34 256, 42 183, 50 324, 58 762 are arranged in ascending order.",
        answer: true,
        explain: "Compare the ten thousands: 3, 4, 5, 5. For the last two, compare the thousands: 0 < 8. Smallest to largest is ascending.",
        interact: [{ kind: "numberline", min: 30000, max: 65000, ticks: 0.0002, labelStep: 10000, tol: 1500, items: [["34 256", 34256], ["42 183", 42183], ["50 324", 50324], ["58 762", 58762]] }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use an efficient mental strategy to solve 7025 − 4897. Which strategy did you use? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 4897, end: 7025, steps: [3, 100, 1000, 25], hint: "Count up from 4897: jump to 4900, then 5000, then 7000, then 7025." },
          { kind: "input", fields: [{ label: "7025 − 4897 =", value: 2128 }] }
        ],
        answer: "**2128**. Count up: 4897 + 3 = 4900, + 100 = 5000, + 2000 = 7000, + 25 = 7025. 3 + 100 + 2000 + 25 = 2128. Or compensate: 7025 − 4900 = 2125, then add 3 back."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Partition the decimal 4.326 using place value. Explain what the digits represent in ones, tenths, hundredths and thousandths.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 4.326 },
          { kind: "input", fields: [{ label: "Ones", value: 4 }, { label: "Tenths", value: 0.3 }, { label: "Hundredths", value: 0.02 }, { label: "Thousandths", value: 0.006 }] }
        ],
        answer: "**4 + 0.3 + 0.02 + 0.006**: 4 ones, 3 tenths, 2 hundredths and 6 thousandths."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Sophie ran 1.46 km and Ella ran 1.39 km. Who ran the greater distance and by how much?",
        interact: [
          { kind: "jumps", start: 1.39, end: 1.46, steps: [0.01, 0.05, 0.1], hint: "Count up from 1.39 to 1.46. Jump to 1.40 first." },
          { kind: "choose", rows: [{ t: "Greater distance", options: ["Sophie", "Ella"], a: 0 }] },
          { kind: "input", fields: [{ label: "By", value: 0.07, suffix: "km" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count up", s: "1.39 + 0.01 = 1.40, + 0.06 = 1.46. 0.01 + 0.06 = 0.07 km." }, { t: "Subtract", s: "1.46 − 1.39: 146 hundredths − 139 hundredths = 7 hundredths = 0.07 km." }] },
        answer: "**Sophie**, by **0.07 km** (70 m)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Which nets can be folded to make a rectangular prism? Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [760, 420], hint: "Choose a net, then tap each of its faces to count them. A rectangular prism has 6 faces.",
            cats: [{ k: "A", t: "Net A", c: "#2F6FE4" }, { k: "B", t: "Net B", c: "#F2994A" }, { k: "C", t: "Net C", c: "#22A06B" }],
            shapes: [
            { p: "77,77 136,77 136,137 77,137", a: "A", fill: "#EEF2F8", deco: "<polygon points='77,77 136,77 136,137 77,137' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "77,137 136,137 136,198 77,198", a: "A", fill: "#EEF2F8", deco: "<polygon points='77,137 136,137 136,198 77,198' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "77,198 136,198 136,258 77,258", a: "A", fill: "#EEF2F8", deco: "<polygon points='77,198 136,198 136,258 77,258' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "77,258 136,258 136,319 77,319", a: "A", fill: "#EEF2F8", deco: "<polygon points='77,258 136,258 136,319 77,319' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "77,319 136,319 136,378 77,378", a: "A", fill: "#EEF2F8", deco: "<polygon points='77,319 136,319 136,378 77,378' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "15,198 77,198 77,258 15,258", a: "A", fill: "#EEF2F8", deco: "<polygon points='15,198 77,198 77,258 15,258' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "286,15 345,15 345,75 286,75", a: "B", fill: "#EEF2F8", deco: "<polygon points='286,15 345,15 345,75 286,75' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "286,75 345,75 345,136 286,136", a: "B", fill: "#EEF2F8", deco: "<polygon points='286,75 345,75 345,136 286,136' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "286,136 345,136 345,197 286,197", a: "B", fill: "#EEF2F8", deco: "<polygon points='286,136 345,136 345,197 286,197' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "286,197 345,197 345,258 286,258", a: "B", fill: "#EEF2F8", deco: "<polygon points='286,197 345,197 345,258 286,258' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "286,258 345,258 345,319 286,319", a: "B", fill: "#EEF2F8", deco: "<polygon points='286,258 345,258 345,319 286,319' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "286,319 345,319 345,378 286,378", a: "B", fill: "#EEF2F8", deco: "<polygon points='286,319 345,319 345,378 286,378' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "174,136 286,136 286,197 174,197", a: "B", fill: "#EEF2F8", deco: "<polygon points='174,136 286,136 286,197 174,197' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "345,197 457,197 457,258 345,258", a: "B", fill: "#EEF2F8", deco: "<polygon points='345,197 457,197 457,258 345,258' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "520,59 630,59 630,120 520,120", a: "C", fill: "#EEF2F8", deco: "<polygon points='520,59 630,59 630,120 520,120' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "520,120 630,120 630,180 520,180", a: "C", fill: "#EEF2F8", deco: "<polygon points='520,120 630,120 630,180 520,180' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "520,180 630,180 630,241 520,241", a: "C", fill: "#EEF2F8", deco: "<polygon points='520,180 630,180 630,241 520,241' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "520,241 630,241 630,302 520,302", a: "C", fill: "#EEF2F8", deco: "<polygon points='520,241 630,241 630,302 520,302' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "520,302 630,302 630,362 520,362", a: "C", fill: "#EEF2F8", deco: "<polygon points='520,302 630,302 630,362 520,362' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "409,120 520,120 520,180 409,180", a: "C", fill: "#EEF2F8", deco: "<polygon points='409,120 520,120 520,180 409,180' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/>" },
            { p: "630,120 741,120 741,180 630,180", a: "C", fill: "#EEF2F8", deco: "<polygon points='630,120 741,120 741,180 630,180' fill='none' stroke='#17233F' stroke-width='2' stroke-dasharray='6 4' pointer-events='none'/><text x='106' y='408' class='co-lab'>A</text><text x='316' y='408' class='co-lab'>B</text><text x='575' y='392' class='co-lab'>C</text>" }] },
          { kind: "choose", rows: [
            { t: "Can net A fold into a rectangular prism?", options: ["Yes", "No"], a: 1 },
            { t: "Can net B?", options: ["Yes", "No"], a: 1 },
            { t: "Can net C?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "As drawn, **none** of them. A rectangular prism has 6 faces in 3 matching pairs. Net A has 6 squares, but 5 are in one strip, so the end squares overlap when folded. Net B has 8 faces and net C has 7 faces: too many.",
        explain: "We counted the faces on the slide picture: A has 6, B has 8 and C has 7. If your slide answer differs, check the picture with the class. Removing the extra end faces from B or C would make them work."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "A fraction strip is divided into 8 equal parts. [5/8] of the strip is shaded. Which fraction of the strip needs to be shaded to make one whole?",
        options: ["[2/8]", "[3/8]", "[1/4]", "[1/2]"],
        answer: 1,
        explain: "[5/8] + [3/8] = [8/8] = 1 whole. 3 more eighths are needed.",
        interact: [{ kind: "shade", parts: 8, hint: "Shade 5 parts. How many parts are left to make one whole?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use an efficient mental strategy to solve 678 − 121 − 22. Which strategy did you use? Explain your reasoning.",
        interact: [
          { kind: "group", items: [678, 121, 22], op: "−" },
          { kind: "jumps", start: 678, back: true, steps: [100, 20, 1, 143], hint: "Jump back 121, then 22. Or add 121 + 22 = 143 first and jump back once." },
          { kind: "input", fields: [{ label: "678 − 121 − 22 =", value: 535 }] }
        ],
        answer: "**535**. Subtract both at once: 121 + 22 = 143, and 678 − 143 = 535. Or in steps: 678 − 121 = 557, then 557 − 22 = 535."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Partition the decimal 2.306 using place value. Explain what the digits represent in ones, tenths, hundredths and thousandths.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 2.306 },
          { kind: "input", fields: [{ label: "Ones", value: 2 }, { label: "Tenths", value: 0.3 }, { label: "Hundredths", value: 0 }, { label: "Thousandths", value: 0.006 }] }
        ],
        answer: "**2 + 0.3 + 0.006**: 2 ones, 3 tenths, 0 hundredths and 6 thousandths. The 0 holds the hundredths place."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use and compare the efficiency of 2 different strategies to solve 27 + 13 + 20. Communicate your reasoning.",
        interact: [
          { kind: "group", items: [27, 13, 20], op: "+" },
          { kind: "input", fields: [{ label: "27 + 13 + 20 =", value: 60 }] }
        ],
        answer: "**60**. Bridge to ten: 27 + 13 = 40 (7 + 3 makes a ten), then 40 + 20 = 60. Or left to right: 27 + 20 = 47, then 47 + 13 = 60. Grouping 27 + 13 first is more efficient."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Write the capacity of each container using the abbreviation for litres. A tank holds twenty-three litres of water. A bottle holds five litres of water. How many litres of water do they hold altogether?",
        interact: [
          { kind: "input", fields: [{ label: "Tank", accept: ["23 L"], placeholder: "e.g. 2 L" }, { label: "Bottle", accept: ["5 L"], placeholder: "e.g. 2 L" }] },
          { kind: "jumps", start: 23, steps: [5, 1], hint: "Start at 23 L and add the bottle." },
          { kind: "input", fields: [{ label: "Altogether", value: 28, suffix: "L" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Add on", s: "23 L + 5 L = 28 L." }, { t: "Make a ten", s: "23 + 7 would be 30. 5 is 2 less, so 28 L." }] },
        answer: "Tank: **23 L**. Bottle: **5 L**. Altogether: **28 L**."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "If [3/4] of a fraction strip is shaded, the complementary fraction needed to make one whole is [1/4].",
        answer: true,
        explain: "[3/4] + [1/4] = [4/4] = 1 whole.",
        interact: [{ kind: "shade", parts: 4, hint: "Shade 3 parts. What fraction is left?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Amira says, “To solve 4267 + 358, I added 4267 + 360 and then subtracted 2.” Which strategy is Amira using? Is this an efficient way to solve the problem? Explain your reasoning.",
        interact: [
          { kind: "jumps", start: 4267, back: true, steps: [360, 2], hint: "Try Amira's way: + 360, then − 2." },
          { kind: "choose", rows: [
            { t: "Strategy", options: ["Compensation (round, then adjust)", "Split by place value", "Counting on by ones"], a: 0 },
            { t: "Is it efficient?", options: ["Yes", "No"], a: 0 }] },
          { kind: "input", fields: [{ label: "4267 + 358 =", value: 4625 }] }
        ],
        answer: "**Compensation.** 358 is 2 less than 360, so she adds 360 (an easier number) and takes 2 away. 4267 + 360 = 4627, − 2 = **4625**. It is efficient because adding 360 is easier than adding 358."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "What is the product of 8 and 7? Explain what the word product means in your answer.",
        interact: [
          { kind: "array", rows: 8, cols: 7, showTotal: true, hint: "8 rows of 7. Rotate to see 7 rows of 8." },
          { kind: "input", fields: [{ label: "The product of 8 and 7 is", value: 56 }] }
        ],
        answer: "**56**. The product is the answer when you multiply numbers: 8 × 7 = 56."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Liam buys a bike and a helmet for $425. The bike costs $392. How much is the helmet? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 392, end: 425, money: true, steps: [8, 25, 1, 10], hint: "Count up from the bike price to the total." },
          { kind: "input", fields: [{ label: "The helmet costs", prefix: "$", value: 33 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count up", s: "$392 + $8 = $400, + $25 = $425. $8 + $25 = $33." }, { t: "Compensate", s: "$425 − $400 = $25. I took away $8 too many, so $25 + $8 = $33." }] },
        answer: "**$33**. $425 − $392 = $33."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Object A is built with 12 cubic-centimetre blocks. Object B is built with 15 cubic-centimetre blocks. Which object has the greater volume, and by how many cubic centimetres?",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "Object A: 12 blocks." },
          { kind: "array", rows: 3, cols: 5, showTotal: true, hint: "Object B: 15 blocks." },
          { kind: "choose", rows: [{ t: "Greater volume", options: ["Object A", "Object B"], a: 1 }] },
          { kind: "input", fields: [{ label: "By", value: 3, suffix: "cm³" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Subtract", s: "15 − 12 = 3 cm³." }, { t: "Count up", s: "12 + 3 = 15, so B has 3 more blocks: 3 cm³." }] },
        answer: "**Object B**, by **3 cm³**. Each block is 1 cm³, so B is 15 cm³ and A is 12 cm³."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "If [2/3] of a fraction strip is shaded, what complementary fraction is needed to make one whole?",
        options: ["[1/2]", "[1/3]", "[2/3]", "[3/3]"],
        answer: 1,
        explain: "[2/3] + [1/3] = [3/3] = 1 whole.",
        interact: [{ kind: "shade", parts: 3, hint: "Shade 2 parts. What fraction is left?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record your calculations using a vertical algorithm: 4215 − 387",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 4215, hint: "Trade first: you can't take 7 ones from 5 ones, so break a ten." },
          { kind: "cells", cols: 5, msg: "Trade when the top digit is smaller. Check each column from the ones.", grid: [
            [null, 4, 2, 1, 5],
            ["−", null, 3, 8, 7],
            ["=", { v: 3 }, { v: 8 }, { v: 2 }, { v: 8 }]] }
        ],
        answer: "**3828**. Ones: trade a ten, 15 − 7 = 8. Tens: trade a hundred, 10 − 8 = 2. Hundreds: trade a thousand, 11 − 3 = 8. Thousands: 3."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use an efficient strategy to solve 7 × 42. Explain which strategy you chose and why it was efficient.",
        interact: [
          { kind: "expr", count: 1, target: 294, placeholder: "e.g. 7 × 40 + 7 × 2", sample: ["7 x 40 + 7 x 2"], mustUse: { re: "[+\\-−]", msg: "Split 42 into friendly parts, like 40 + 2." } },
          { kind: "input", fields: [{ label: "7 × 42 =", value: 294 }] }
        ],
        answer: "**294**. Split 42 into 40 + 2: 7 × 40 = 280 and 7 × 2 = 14. 280 + 14 = 294. Multiplying by tens is easy."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record how you solve 30 × 4 using place value or the associative property. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { T: 3 }, target: 120, need: "standard", hint: "This is 3 tens. Add 3 tens three more times (4 groups of 3 tens), then group 10 tens." },
          { kind: "input", fields: [{ label: "30 × 4 =", value: 120 }] }
        ],
        answer: "**120**. Place value: 3 tens × 4 = 12 tens = 120. Associative: 30 × 4 = (3 × 10) × 4 = (3 × 4) × 10 = 12 × 10 = 120."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "How many minutes are in 2 and a half hours? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 0, steps: [60, 30], hint: "Each hour is a jump of 60 minutes. Half an hour is 30 minutes." },
          { kind: "input", fields: [{ label: "2 and a half hours =", value: 150, suffix: "minutes" }] }
        ],
        answer: "**150 minutes**. 60 + 60 + 30 = 150."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "On a number line from 0 to 1, if [5/8] is shaded, the complementary fraction needed to make one whole is [2/8].",
        answer: false,
        explain: "[5/8] + [3/8] = [8/8] = 1. The complementary fraction is [3/8], not [2/8].",
        interact: [{ kind: "shade", parts: 8, hint: "Shade 5 eighths. How many eighths are left?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Luca has raised $4216 for charity. He spends $387 on advertising. How much money does Luca have left? Communicate your strategy.",
        interact: [
          { kind: "jumps", start: 4216, back: true, steps: [400, 13, 100, 1], hint: "Compensate: jump back 400, then forward 13." },
          { kind: "input", fields: [{ label: "Luca has left", prefix: "$", value: 3829 }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Compensate", s: "$4216 − $400 = $3816. I took away $13 too many, so $3816 + $13 = $3829." }, { t: "Vertical algorithm", s: "4216 − 387: trade in the ones, tens and hundreds. That gives 3829." }] },
        answer: "**$3829**"
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use an efficient strategy to solve 5 × 246. Explain which strategy you chose and why it was efficient.",
        interact: [
          { kind: "expr", count: 1, target: 1230, placeholder: "e.g. 10 × 246 ÷ 2", sample: ["10 x 246 / 2"], mustUse: { re: "[+\\-−÷/]", msg: "Show your strategy, for example 10 × 246 ÷ 2 or 5 × 200 + 5 × 40 + 5 × 6." } },
          { kind: "input", fields: [{ label: "5 × 246 =", value: 1230 }] }
        ],
        answer: "**1230**. Multiply by 10, then halve: 246 × 10 = 2460, and half of 2460 = 1230. Or split: 1000 + 200 + 30 = 1230."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Complete the number sentence ? × 6 = 48. What strategies did you use to find the missing factor?",
        interact: [
          { kind: "array", rows: 1, cols: 6, fixCols: true, target: [8, 6], showTotal: true, hint: "Add rows of 6 until there are 48." },
          { kind: "input", fields: [{ label: "? =", value: 8 }] }
        ],
        answer: "**8** × 6 = 48. Think of division: 48 ÷ 6 = 8. Or skip count by 6: 6, 12, 18, 24, 30, 36, 42, 48 (8 sixes)."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "A swimming carnival begins at 9:05 am and finishes at 11:15 am. Use minutes to describe the total duration of the carnival.",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 545, end: 675, steps: [60, 10, 5], hint: "Jump in hours from 9:05, then add the extra minutes." },
          { kind: "input", fields: [{ label: "Duration", value: 130, suffix: "minutes" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Hours, then minutes", s: "9:05 + 2 h = 11:05, + 10 min = 11:15. 2 h = 120 min, + 10 = 130 minutes." }, { t: "Bridge to the hour", s: "9:05 to 10:00 is 55 min, 10:00 to 11:00 is 60 min, 11:00 to 11:15 is 15 min. 55 + 60 + 15 = 130 minutes." }] },
        answer: "**130 minutes** (2 hours 10 minutes)."
      }
    ]
  ]
});
