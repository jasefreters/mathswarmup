/*
  Stage 2 Year A, Unit 2 — Review of learning (Term 1, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 1, ls: 2, unit: 2,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 2 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Ariah has $20 to spend at the shop. She spends $8. How much change will she get?",
        options: ["$28", "$5", "$12", "$2"],
        answer: 2,
        explain: "$20 − $8 = $12. Check by counting on: $8 + $2 = $10, + $10 = $20. That's $12.",
        interact: [{ kind: "jumps", start: 8, end: 20, money: true, steps: [1, 2, 10], hint: "Count on from what she spent ($8) up to $20." }],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "From $8: + $2 makes $10, + $10 makes $20. $2 + $10 = $12." }, { t: "Take away", s: "$20 − $8: $20 − $10 = $10, then add back $2 = $12." }] }
      },
      {
        type: "sr", focus: "Combining and separating quantities B",
        prompt: "Build to a multiple of 10 to solve this number sentence: 38 + 25. Communicate your thinking.",
        interact: [
          { kind: "jumps", start: 38, end: 63, steps: [1, 2, 3, 10, 20], hint: "Jump to the next ten first: 38 + 2 = 40. Then add what's left of 25." },
          { kind: "input", fields: [{ label: "38 + 25 =", value: 63 }] }
        ],
        answer: "**63**. 38 + 2 = 40, then 40 + 23 = 63 (25 split into 2 and 23)."
      },
      {
        type: "sr", focus: "Representing whole numbers",
        prompt: "Record the following number in standard form: 500 + 80 + 7",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 0, target: 587, need: "standard" },
          { kind: "input", fields: [{ label: "Standard form", value: 587 }] }
        ],
        answer: "**587**: 5 hundreds, 8 tens and 7 ones."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "How many centimetres are in 1 metre? Name something that is about a metre long.",
        interact: [
          { kind: "jumps", start: 0, end: 100, steps: [10, 50], hint: "Jump along a metre stick in centimetres. How many to reach 1 metre?" },
          { kind: "input", fields: [{ label: "1 metre =", value: 100, suffix: "cm" }] }
        ],
        answer: "**100 cm**. Answers vary for something about a metre long: a metre ruler, a guitar, the height of a desk, a big step."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "You are a bird high in the sky looking down. Draw a simple map of your playground from your perspective.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "Answers vary. A bird's-eye view shows the tops of things: the shapes of buildings, the play equipment, paths and trees seen from above."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "27 − 15 = 12, so 15 + 12 = 27",
        answer: true,
        explain: "Addition and subtraction are related. The parts 15 and 12 make the whole 27.",
        interact: [{ kind: "jumps", start: 15, end: 27, steps: [1, 2, 10], hint: "Start at 15. Jump + 12. Where do you land?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "27 + 13 = 30 + 10. Complete this number sentence: 14 + 22 = 16 + ___",
        interact: [
          { kind: "jumps", start: 14, end: 36, steps: [2, 10, 20], hint: "First jump: 14 + 22. Where do you land?" },
          { kind: "jumps", start: 16, end: 36, steps: [2, 10, 20], hint: "Now start at 16. How far to land in the same place?" },
          { kind: "scale", left: "14 + 22", right: "16 + ?", answer: 20 }
        ],
        answer: "**20**. 14 + 22 = 36 and 16 + 20 = 36. 14 went up by 2, so 22 goes down by 2."
      },
      {
        type: "sr", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Record the following numbers: one hundred and one, one hundred and eleven, one hundred and twenty-one.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 101 },
          { kind: "input", fields: [{ label: "one hundred and one", value: 101 }, { label: "one hundred and eleven", value: 111 }, { label: "one hundred and twenty-one", value: 121 }] }
        ],
        answer: "**101, 111, 121**. Each number is 10 more than the one before: add 1 ten."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "A rope measures three metres. Record this measurement using the correct abbreviation.",
        interact: [
          { kind: "choose", rows: [{ t: "The abbreviation for metres is", options: ["cm", "m", "mt", "km"], a: 1 }] },
          { kind: "input", fields: [{ label: "The rope is", accept: ["3 m"], placeholder: "e.g. 2 cm" }] }
        ],
        answer: "**3 m**. The abbreviation for metres is m, with a space between the number and the unit."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Write the time shown in words.",
        interact: [
          { kind: "clock", time: "4:15" },
          { kind: "clock", time: "9:45" },
          { kind: "choose", rows: [
            { t: "First clock", options: ["quarter past three", "quarter past four", "quarter to four"], a: 1 },
            { t: "Second clock", options: ["quarter to nine", "quarter past nine", "quarter to ten"], a: 2 }] }
        ],
        answer: "**Quarter past four** (4:15) and **quarter to ten** (9:45). The long hand on 3 means quarter past; on 9 it means quarter to the next hour.",
        explain: "Read from the slide clocks: the short hand is just past 4 on the first clock and nearly at 10 on the second."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "18 + 4 = 20 + __",
        options: ["4", "24", "42", "2"],
        answer: 3,
        explain: "18 + 4 = 22. Take 2 from the 4 to make 18 into 20, and 2 is left: 20 + 2 = 22.",
        interact: [{ kind: "jumps", start: 18, end: 22, steps: [1, 2], hint: "Jump + 2 to reach 20, then see what's left of the 4." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "16 + 24 = 40, 24 + 16 = 40, 40 − 24 = 16. Complete: 40 − 16 = __",
        interact: [
          { kind: "jumps", start: 40, back: true, steps: [1, 6, 10], hint: "Start at 40 and jump back 16: back 10, then back 6." },
          { kind: "input", fields: [{ label: "40 − 16 =", value: 24 }] }
        ],
        answer: "**24**. The fact family is 16, 24 and 40: if 16 + 24 = 40, then 40 − 16 = 24."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Order these numbers from smallest to largest: 1023, 1332, 1203",
        interact: [
          { kind: "numberline", min: 1000, max: 1400, ticks: 0.01, labelStep: 100, tol: 25, items: [["1023", 1023], ["1332", 1332], ["1203", 1203]] },
          { kind: "order", items: ["1023", "1332", "1203"], answer: [0, 2, 1] }
        ],
        answer: "**1023, 1203, 1332**. All have 1 thousand, so compare the hundreds: 0, 2, 3."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "A pencil measures eight centimetres. Record this measurement using the correct abbreviation.",
        interact: [
          { kind: "choose", rows: [{ t: "The abbreviation for centimetres is", options: ["c", "cm", "m", "cms"], a: 1 }] },
          { kind: "input", fields: [{ label: "The pencil is", accept: ["8 cm"], placeholder: "e.g. 2 m" }] }
        ],
        answer: "**8 cm**. The abbreviation for centimetres is cm. There is no s for more than one."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Draw a rectangle. Now, draw straight lines to split it into 3 triangles.",
        interact: [{ kind: "sketch", shape: { view: [400, 240], pts: [[30, 30], [370, 30], [370, 210], [30, 210]] }, shapeFill: "rgba(36,73,216,.12)" }],
        answer: "Answers vary. One way: draw lines from one top corner to the two bottom corners, or from a point on the top edge to both bottom corners. That makes 3 triangles."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "To correctly solve 38 + 7 = 45 I can add 2 to 38, then add 5 to get 45.",
        answer: true,
        explain: "7 splits into 2 and 5. 38 + 2 = 40 (the next ten), then 40 + 5 = 45.",
        interact: [{ kind: "jumps", start: 38, end: 45, steps: [1, 2, 5], hint: "Try it: jump + 2, then + 5." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the compensation strategy to add these numbers: 23 + 29 = Communicate your thinking.",
        interact: [
          { kind: "jumps", start: 23, end: 52, back: true, steps: [1, 10, 30], hint: "29 is close to 30. Jump + 30, then back 1." },
          { kind: "input", fields: [{ label: "23 + 29 =", value: 52 }] }
        ],
        answer: "**52**. 23 + 30 = 53, then take away the extra 1: 53 − 1 = 52."
      },
      {
        type: "sr", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Order these numbers from largest to smallest: 1089, 1200, 1099",
        interact: [
          { kind: "numberline", min: 1000, max: 1300, ticks: 0.01, labelStep: 100, tol: 20, items: [["1089", 1089], ["1200", 1200], ["1099", 1099]] },
          { kind: "order", items: ["1089", "1200", "1099"], answer: [1, 2, 0] }
        ],
        answer: "**1200, 1099, 1089**. 1200 has 2 hundreds. 1099 and 1089 both have 0 hundreds, so compare the tens: 9 > 8."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Write the most appropriate formal unit, metres or centimetres, to measure the length of each object.",
        interact: [{ kind: "choose", rows: [
          { t: "a train", options: ["metres", "centimetres"], a: 0 },
          { t: "a fork", options: ["metres", "centimetres"], a: 1 },
          { t: "a pen", options: ["metres", "centimetres"], a: 1 },
          { t: "an eraser", options: ["metres", "centimetres"], a: 1 }] }],
        answer: "A train: **metres**. A fork, a pen and an eraser: **centimetres** (they are much shorter than a metre)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "What is something you could use to measure the area of your desk?",
        interact: [{ kind: "areagrid", cells: ["111111", "111111", "111111", "111111"] }],
        answer: "Answers vary: sticky notes, square tiles, playing cards or exercise books. They must cover the desk with no gaps or overlaps.",
        explain: "The grid shows a desk covered with sticky notes. Tap each one to count how many cover it."
      }
    ],
    // Review 5
    [
      {
        type: "sr", focus: "Additive relations A",
        prompt: "If 52 + 23 = 75, which of these are true? You may choose more than one.",
        interact: [{ kind: "select", hint: "Tap every number sentence that is true.", items: [["75 − 52 = 23", true], ["75 − 23 = 52", true], ["52 − 75 = 23", false], ["23 + 75 = 52", false]] }],
        answer: "**75 − 52 = 23** and **75 − 23 = 52**. In the fact family the whole (75) comes first when you subtract. 52 − 75 and 23 + 75 don't make the right numbers."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Draw a number line to show a way to complete this number sentence: 147 + 152 =",
        interact: [
          { kind: "jumps", start: 147, end: 299, steps: [1, 2, 10, 50, 100], hint: "Try jumping + 100, then + 50, then + 2." },
          { kind: "input", fields: [{ label: "147 + 152 =", value: 299 }] }
        ],
        answer: "**299**. 147 + 100 = 247, + 50 = 297, + 2 = 299."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record the numbers before and after: ___, 1111, ___ · ___, 1009, ___ · ___, 1001, ___",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1009, hint: "This shows 1009. Add 1 one, then group 10 ones into a ten." },
          { kind: "input", fields: [
            { label: "before 1111", value: 1110 }, { label: "after 1111", value: 1112 },
            { label: "before 1009", value: 1008 }, { label: "after 1009", value: 1010 },
            { label: "before 1001", value: 1000 }, { label: "after 1001", value: 1002 }] }
        ],
        answer: "**1110**, 1111, **1112** · **1008**, 1009, **1010** · **1000**, 1001, **1002**"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Estimate the length of your teacher's desk. Record it in metres and centimetres. Communicate your thinking. Now check by having someone measure it. Reflect on your estimation.",
        interact: [{ kind: "marker", min: 0, max: 3, ticks: 10, label: "desk", hint: "Slide the pin to your estimate. Each small step is 10 cm." }],
        answer: "Answers vary. Many teacher desks are about 1 m 50 cm to 2 m long. Compare the estimate with the measurement."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "It is Friday 10 September. How many days until it will be October?",
        interact: [
          { kind: "calendar", hint: "Today is the 10th. Tap each day until it is 1 October.", months: [{ name: "September", start: 3, days: 30, mark: [10] }, { name: "October", start: 5, days: 31, mark: [1] }] },
          { kind: "input", fields: [{ label: "Days until October", min: 20, max: 21 }] }
        ],
        answer: "**21 days** until it is 1 October. September has 30 days: 30 − 10 = 20 days are left in September after today, and the next day is 1 October.",
        explain: "20 is also reasonable if students count only the days left in September. Discuss both."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "To solve 52 + 23, using partitioning to add the tens then the ones is an efficient strategy.",
        answer: true,
        explain: "50 + 20 = 70 and 2 + 3 = 5, so 70 + 5 = 75. No regrouping is needed, so it's quick.",
        interact: [{ kind: "group", items: [50, 2, 20, 3], hint: "Group the tens together, then the ones." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "There are 71 students and 55 chairs. How many students must sit on the floor? Communicate your strategy.",
        interact: [
          { kind: "jumps", start: 55, end: 71, steps: [1, 5, 10], hint: "Count on from 55 chairs to 71 students." },
          { kind: "input", fields: [{ label: "On the floor", value: 16, suffix: "students" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "55 + 5 = 60, + 10 = 70, + 1 = 71. 5 + 10 + 1 = 16." }, { t: "Take away", s: "71 − 55: 71 − 50 = 21, 21 − 5 = 16." }] },
        answer: "**16 students**. 71 − 55 = 16."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Partition 1221 into thousands, hundreds, tens and ones.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1221 },
          { kind: "input", fields: [{ label: "1221 =", value: 1000 }, { label: "+", value: 200 }, { label: "+", value: 20 }, { label: "+", value: 1 }] }
        ],
        answer: "**1000 + 200 + 20 + 1**: 1 thousand, 2 hundreds, 2 tens and 1 one."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "This paper strip has been divided into equal parts. What fraction is the arrow pointing to?",
        img: "u2-strip.png",
        interact: [
          { kind: "shade", parts: 8, hint: "Count the equal parts. Tap the part the arrow points to." },
          { kind: "input", fields: [{ label: "Fraction", value: 0.125, placeholder: "a/b" }] }
        ],
        answer: "**[1/8]** (one-eighth). The strip has 8 equal parts and the arrow points to 1 of them.",
        explain: "The arrow points into the first part of the strip, so the answer is taken as 1 part out of 8."
      },
      {
        type: "sr", focus: "Non-spatial measure: Time",
        prompt: "Record the times in writing, as quarter past or quarter to: 3:15 and 11:45.",
        interact: [
          { kind: "clock", time: "3:15" },
          { kind: "clock", time: "11:45" },
          { kind: "choose", rows: [
            { t: "3:15", options: ["quarter past three", "quarter to three", "quarter past four"], a: 0 },
            { t: "11:45", options: ["quarter past eleven", "quarter to eleven", "quarter to twelve"], a: 2 }] }
        ],
        answer: "3:15 is **quarter past three**. 11:45 is **quarter to twelve** (15 minutes before 12 o'clock)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "88 − 46 =",
        options: ["44", "26", "32", "42"],
        answer: 3,
        explain: "Jump back from 88: − 40 = 48, − 5 = 43, − 1 = 42.",
        interact: [{ kind: "jumps", start: 88, back: true, steps: [1, 5, 40], hint: "The slide jumps back 40, then 5, then 1. Try it." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Albie has 245 marbles. He gives 78 to Blair. How many marbles does Albie have left? Communicate your strategy.",
        interact: [
          { kind: "jumps", start: 245, back: true, steps: [1, 2, 5, 10, 40, 80], hint: "Try jumping back 80, then forward 2. Or back 45, then back 33." },
          { kind: "input", fields: [{ label: "Albie has", value: 167, suffix: "marbles" }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Compensation", s: "245 − 80 = 165. He took away 2 too many, so add 2: 167." }, { t: "Jump to a friendly number", s: "245 − 45 = 200, then 78 − 45 = 33 more: 200 − 33 = 167." }] },
        answer: "**167 marbles**. 245 − 78 = 167."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Complete the patterns: 16, 18, 20, __, 24, __ · 15, 20, 25, __, 35, __, __",
        interact: [
          { kind: "jumps", start: 16, steps: [2], hint: "Jump in 2s from 16." },
          { kind: "jumps", start: 15, steps: [5], hint: "Jump in 5s from 15." },
          { kind: "input", fields: [{ label: "16, 18, 20,", value: 22 }, { label: "24,", value: 26 }, { label: "15, 20, 25,", value: 30 }, { label: "35,", value: 40 }, { label: "", value: 45 }] }
        ],
        answer: "16, 18, 20, **22**, 24, **26** (counting by 2s) · 15, 20, 25, **30**, 35, **40**, **45** (counting by 5s)"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Tom folded a strip of paper in half, then in half again and in half again. When Tom opened his paper, how many equal parts did he have?",
        interact: [
          { kind: "fold", max: 4, target: 8 },
          { kind: "input", fields: [{ label: "Equal parts", value: 8 }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Double each time", s: "Each fold doubles the parts: 1 → 2 → 4 → 8." }, { t: "Try it", s: "Fold a real strip of paper three times and count the parts." }] },
        answer: "**8 equal parts** (eighths). Each fold doubles the number of parts: 2, 4, 8."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Record the name and the number of faces this 3D object has.",
        img: "u2-prism.png",
        interact: [
          { kind: "classify", label: "The object opened out flat", view: [500, 230], total: 6,
            cats: [{ k: "f", t: "Faces counted", c: "#22A06B" }],
            hint: "This is the object opened out flat. Tap each face to count it.",
            shapes: [
              { p: "190,0 310,0 310,60 190,60", a: "f", fill: "#A3D9C1" }, { p: "190,60 310,60 310,110 190,110", a: "f", fill: "#7FC4A6" },
              { p: "190,110 310,110 310,170 190,170", a: "f", fill: "#A3D9C1" }, { p: "190,170 310,170 310,220 190,220", a: "f", fill: "#7FC4A6" },
              { p: "130,60 190,60 190,110 130,110", a: "f", fill: "#C4E8D7" }, { p: "310,60 370,60 370,110 310,110", a: "f", fill: "#C4E8D7" }] },
          { kind: "choose", rows: [{ t: "Name", options: ["cube", "rectangular prism", "triangular prism", "pyramid"], a: 1 }] },
          { kind: "input", fields: [{ label: "Faces", value: 6 }] }
        ],
        answer: "A **rectangular prism** with **6 faces**. All of its faces are rectangles."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "To solve 62 − 5, you can think 62 − 2 = 60, then subtract 3 more to make 57. Communicate your thinking.",
        answer: true,
        explain: "5 splits into 2 and 3. 62 − 2 = 60 (back to the ten), then 60 − 3 = 57.",
        interact: [{ kind: "jumps", start: 62, back: true, steps: [1, 2, 3], hint: "Try it: jump back 2, then back 3." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Elsa had 186 stickers. Anna gave her 129 more. How many stickers does Elsa have altogether? Communicate your strategy.",
        interact: [
          { kind: "jumps", start: 186, steps: [1, 4, 10, 25, 100], hint: "Try + 100, then + 4 to make a friendly 290, then + 25." },
          { kind: "input", fields: [{ label: "Altogether", value: 315, suffix: "stickers" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Jump strategy", s: "186 + 100 = 286, + 20 = 306, + 9 = 315." }, { t: "Partition", s: "100 + 100 = 200, 80 + 20 = 100, 6 + 9 = 15. 200 + 100 + 15 = 315." }] },
        answer: "**315 stickers**. 186 + 129 = 315."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw an array structure to show 4 multiples of 5.",
        interact: [
          { kind: "array", rows: 1, cols: 5, target: [4, 5], showTotal: true, hint: "Each row is 5. Build 4 rows: 5, 10, 15, 20." },
          { kind: "input", fields: [{ label: "4 rows of 5 =", value: 20 }] }
        ],
        answer: "**4 rows of 5**. Counting by rows: 5, 10, 15, 20. So 4 × 5 = 20.",
        explain: "Read as 4 rows of 5 (the first 4 multiples of 5). 5 rows of 4 also makes 20."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "How many times do you need to fold a strip of paper in half to get 8 equal parts?",
        interact: [
          { kind: "fold", max: 4, target: 8 },
          { kind: "input", fields: [{ label: "Folds", value: 3 }] }
        ],
        answer: "**3 times**. 1 fold makes 2 parts, 2 folds make 4 parts, 3 folds make 8 parts."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Describe a pentagon.",
        interact: [
          { kind: "sides", view: [300, 240], label: "A pentagon", fill: "#FFDF5D", poly: [[150, 20], [254.6, 96], [214.7, 219], [85.3, 219], [45.4, 96]] },
          { kind: "input", fields: [{ label: "Sides", value: 5 }, { label: "Corners", value: 5 }] }
        ],
        answer: "A pentagon is a 2D shape with **5 straight sides** and **5 corners** (vertices). Its sides join to make a closed shape."
      }
    ]
  ]
});
