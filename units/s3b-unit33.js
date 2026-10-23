/*
  Stage 3 Year B, Unit 33 — Review of learning (Term 3, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 3, ls: 3, unit: 33,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 33 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The most efficient way to factorise 14 × 25 is:",
        options: ["10 + 4 × 25", "7 × 2 × 25", "7 × 5 × 5", "7 × 5 + 10"],
        answer: 1,
        explain: "14 = 7 × 2, so 14 × 25 = 7 × 2 × 25. Group 2 × 25 = 50 first, then 7 × 50 = 350. C equals 175 and A and D aren't factorisations of 14.",
        interact: [{ kind: "group", op: "×", items: [7, 2, 25] }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the area model to solve: 256 × 4",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#×", "#200", "#50", "#6"], ["#4", { v: 800 }, { v: 200 }, { v: 24 }]], msg: "Multiply 4 by each part: 200, 50 and 6." },
          { kind: "input", fields: [{ label: "256 × 4 =", value: 1024 }] }
        ],
        answer: "Split 256 into 200 + 50 + 6. 4 × 200 = 800, 4 × 50 = 200, 4 × 6 = 24. 800 + 200 + 24 = **1024**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Is this statement always true, sometimes true or never true? A regular octagon has 8 lines of symmetry and rotational symmetry.",
        interact: [
          { kind: "mirror", view: [320, 300], label: "Regular octagon with 8 dashed lines to test", hint: "Tap each dashed line to fold the octagon over it. Count the lines that match.",
            shapes: [{ p: [[270.9, 104.1], [205.9, 39.1], [114.1, 39.1], [49.1, 104.1], [49.1, 195.9], [114.1, 260.9], [205.9, 260.9], [270.9, 195.9]], fill: "#7030A0",
              lines: [[300, 150, 20, 150], [289.3, 96.4, 30.7, 203.6], [259, 51, 61, 249], [213.6, 20.7, 106.4, 279.3], [160, 10, 160, 290], [106.4, 20.7, 213.6, 279.3], [61, 51, 259, 249], [30.7, 96.4, 289.3, 203.6]] }] },
          { kind: "choose", rows: [{ t: "The statement is", options: ["Always true", "Sometimes true", "Never true"], a: 0 }] }
        ],
        answer: "**Always true.** Every regular octagon has 8 lines of symmetry (4 through opposite corners, 4 through the middles of opposite sides). It also has rotational symmetry: it looks the same 8 times in a full turn (every 45°)."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "What number am I? I can be grouped as: 2 millions, 56 thousands, 4 hundreds, 21 tens and 19 ones.",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: { M: 2, Th: 56, H: 4, T: 21, O: 19 }, hint: "Group 10 of a kind into the next place to the left until every column has 9 or fewer." },
          { kind: "input", fields: [{ label: "I am", value: 2056629 }] }
        ],
        answer: "**2 056 629**. 2 000 000 + 56 000 + 400 + 210 + 19 = 2 056 629."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the adjacent angle’s measurement. The two angles together make a right angle. One angle is 40°.",
        interact: [
          { kind: "angle", names: true, degrees: true, start: 40, label: "The blue arm starts at 40°. Turn it to 90°. How far did it turn?" },
          { kind: "input", fields: [{ label: "Adjacent angle", value: 50, suffix: "°" }] }
        ],
        answer: "**50°**. The two adjacent angles make a right angle: 90° − 40° = 50°.",
        explain: "The slide shows the right angle with its square-corner arms. The prompt says so in words."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The partial products for this area model to solve 48 × 37 have been calculated correctly. 40 × 30 = 120, 40 × 7 = 280, 7 × 30 = 210, 7 × 8 = 54",
        answer: false,
        explain: "Three are wrong. 40 × 30 = 1200 (not 120). The bottom row is the 8 from 48, so it should be 8 × 30 = 240 and 8 × 7 = 56 (and 7 × 8 is 56, not 54). Only 40 × 7 = 280 is right. 48 × 37 = 1200 + 280 + 240 + 56 = 1776.",
        interact: [{ kind: "reveal", items: [["40 × 30", "1200, not 120"], ["40 × 7", "280 ✓"], ["8 × 30", "240 (the row is 8, not 7)"], ["8 × 7", "56, not 54"], ["48 × 37", "1200 + 280 + 240 + 56 = 1776"]] }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Select an efficient multiplicative strategy to solve: 18 × 500. Communicate your reasoning.",
        interact: [
          { kind: "expr", count: 2, target: 9000, placeholder: "e.g. 9 x 1000", sample: ["9 x 1000", "18 x 5 x 100"] },
          { kind: "input", fields: [{ label: "18 × 500 =", value: 9000 }] }
        ],
        answer: "**9000**. Halve and double: 18 × 500 = 9 × 1000 = 9000. Or 18 × 5 = 90, then × 100 = 9000.",
        explain: "Any efficient strategy is fine. The boxes accept any number sentence that makes 9000."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Visualise this trapezium rotated a half-turn. Record: a) What changed? b) What stayed the same?",
        interact: [
          { kind: "sketch", shape: { view: [320, 180], pts: [[110, 30], [210, 30], [250, 150], [70, 150]] }, shapeFill: "rgba(184,22,86,.35)", shapeStroke: "#B81656" },
          { kind: "choose", rows: [
            { t: "Size", options: ["Changed", "Stayed the same"], a: 1 },
            { t: "Side lengths and angles", options: ["Changed", "Stayed the same"], a: 1 },
            { t: "Which way up it is (orientation)", options: ["Changed", "Stayed the same"], a: 0 }] }
        ],
        answer: "a) Its **orientation** changed: after a half-turn (180°) the long side is on top and the short side is at the bottom. b) Its **size, shape, side lengths and angles** stayed the same."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record the following using decimal notation: a) 89 thousandths b) 109 thousandths c) 2 thousandths",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.089, hint: "1 thousandth is 0.001. The last digit sits in the thousandths place." },
          { kind: "input", fields: [{ label: "a)", value: 0.089 }, { label: "b)", value: 0.109 }, { label: "c)", value: 0.002 }] }
        ],
        answer: "a) **0.089** · b) **0.109** · c) **0.002**"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the adjacent angle’s measurement. The two angles sit on a straight line. One angle is 100°.",
        interact: [
          { kind: "angle", names: true, degrees: true, start: 100, label: "The blue arm starts at 100°. Turn it to a straight angle (180°). How far did it turn?" },
          { kind: "input", fields: [{ label: "Adjacent angle", value: 80, suffix: "°" }] }
        ],
        answer: "**80°**. Angles on a straight line add to 180°: 180° − 100° = 80°."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The missing partial product is: 324 × 38. First partial product 2592, missing partial product ?, total 12 312.",
        options: ["9620", "962", "9720", "972"],
        answer: 2,
        explain: "2592 is 324 × 8. The missing one is 324 × 30 = 9720. Check: 2592 + 9720 = 12 312.",
        interact: [{ kind: "reveal", items: [["324 × 8", "2592"], ["324 × 30", "324 × 3 = 972, × 10 = 9720"], ["2592 + 9720", "12 312 ✓"]] }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "To make smoothies, 4 bananas are needed for 3 smoothies. How many bananas are needed for 18 smoothies?",
        interact: [
          { kind: "cells", cols: 7, w: 70, grid: [["#Smoothies", 3, 6, 9, 12, 15, 18], ["#Bananas", 4, { v: 8 }, { v: 12 }, { v: 16 }, { v: 20 }, { v: 24 }]], msg: "Each extra 3 smoothies needs 4 more bananas." },
          { kind: "input", fields: [{ label: "Bananas for 18 smoothies", value: 24 }] }
        ],
        cubes: { ops: ["×"], also: ["÷"], solve: [{ t: "Scale up", s: "18 ÷ 3 = 6, so make the recipe 6 times. 6 × 4 = 24 bananas." }, { t: "Ratio table", s: "3 → 4, 6 → 8, 9 → 12, 12 → 16, 15 → 20, 18 → 24." }] },
        answer: "**24 bananas**. 18 smoothies is 6 lots of 3, so 6 × 4 = 24."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Record the transformations that have occurred at A, B and C.",
        img: "u33-transform.png",
        interact: [{ kind: "choose", rows: [
          { t: "A", options: ["Translation (slide)", "Reflection (flip)", "Rotation (turn)"], a: 0 },
          { t: "B", options: ["Translation (slide)", "Reflection (flip)", "Rotation (turn)"], a: 2 },
          { t: "C", options: ["Translation (slide)", "Reflection (flip)", "Rotation (turn)"], a: 1 }] }],
        answer: "A: the bottom triangle **slides** (translation) to the right. B: the top triangle is **turned** a half-turn (rotation). C: the top triangle is **flipped** (reflection) so the two triangles make a larger triangle.",
        explain: "The rectangle is cut along its diagonal into a top triangle (right angle top-right) and a bottom triangle (right angle bottom-left). Each answer compares the moved piece with where it started."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Calculate 10% of: a) 20 b) 660 c) 20 000. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O", "t"], start: 660, shift: true, hint: "10% is one tenth. Divide by 10: every digit moves one place to the right." },
          { kind: "input", fields: [{ label: "a) 10% of 20 =", value: 2 }, { label: "b) 10% of 660 =", value: 66 }, { label: "c) 10% of 20 000 =", value: 2000 }] }
        ],
        answer: "a) **2** · b) **66** · c) **2000**. 10% = [1/10], so divide by 10."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "An assembly begins at 9:15 am and ends at 11:30 am. a) How long is the assembly? b) Round the duration to the nearest hour.",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 555, end: 690, steps: [15, 60], hint: "Start at 9:15 am. Jump an hour at a time, then 15 minutes, to reach 11:30 am." },
          { kind: "input", fields: [{ label: "a) Hours", value: 2, suffix: "h" }, { label: "and minutes", value: 15, suffix: "min" }, { label: "b) To the nearest hour", value: 2, suffix: "h" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "9:15 → 10:15 → 11:15 is 2 hours, then 15 minutes to 11:30. 2 h 15 min." }, { t: "Hours then minutes", s: "11:30 − 9:15: 11 − 9 = 2 hours, 30 − 15 = 15 minutes." }] },
        answer: "a) **2 hours 15 minutes**. b) **2 hours**, because 15 minutes is less than half an hour."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The equation to solve this word problem is 32 × 15. There are 32 rows of chairs in a hall, and each row has 15 chairs. How many chairs are there in total?",
        answer: true,
        explain: "32 equal rows of 15 is 32 × 15 = 480 chairs. 15 × 32 gives the same total.",
        interact: [{ kind: "reveal", items: [["32 rows of 15", "32 × 15"], ["32 × 10", "320"], ["32 × 5", "160"], ["320 + 160", "480 chairs"]] }],
        cubes: { ops: ["×"], solve: [{ t: "Split 15", s: "32 × 10 = 320 and 32 × 5 = 160. 320 + 160 = 480." }, { t: "Double and halve", s: "32 × 15 = 16 × 30 = 480." }] }
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "An alarm beeps 8 times every 4 seconds. How many times does it beep in 2 minutes?",
        interact: [
          { kind: "cells", cols: 5, w: 80, grid: [["#Seconds", 4, 1, 60, 120], ["#Beeps", 8, { v: 2 }, { v: 120 }, { v: 240 }]], msg: "Find the beeps in 1 second first. 2 minutes is 120 seconds." },
          { kind: "input", fields: [{ label: "Beeps in 2 minutes", value: 240 }] }
        ],
        cubes: { ops: ["÷", "×"], note: "Change 2 minutes into seconds first.", solve: [{ t: "Unit rate", s: "8 ÷ 4 = 2 beeps a second. 2 minutes = 120 seconds. 120 × 2 = 240." }, { t: "Groups of 4 seconds", s: "120 ÷ 4 = 30 groups of 4 seconds. 30 × 8 = 240." }] },
        answer: "**240 beeps**. 2 beeps each second × 120 seconds = 240."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Calculate the area of the composite L-shape figure in square centimetres. Each square is 1 cm². The labels are: top 5, the gap on the left 5, the right side 7, the bottom 8.",
        interact: [
          { kind: "areagrid", size: 54, cells: ["00011111", "00011111", "00011111", "00011111", "00011111", "11111111", "11111111"] },
          { kind: "input", fields: [{ label: "Area", value: 41, suffix: "cm²" }] }
        ],
        answer: "**41 cm²**. Split it: the tall part is 5 × 7 = 35 cm², and the foot is 3 × 2 = 6 cm². 35 + 6 = 41 cm².",
        explain: "The unlabelled lengths come from the labels: the foot sticks out 8 − 5 = 3 cm and is 7 − 5 = 2 cm high."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Using this geometric pattern and table, what would the number of sides be for: a) 6 hexagons b) 10 hexagons c) 12 hexagons",
        img: "u33-hexagons.png",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#Hexagons", "#6", "#10", "#12"], ["#Sides", { v: 36 }, { v: 60 }, { v: 72 }]], msg: "Each hexagon adds 6 sides. Multiply by 6." },
          { kind: "input", fields: [{ label: "Rule: sides = hexagons ×", value: 6 }] }
        ],
        answer: "a) **36** · b) **60** · c) **72**. The rule is number of hexagons × 6.",
        explain: "The table counts all 6 sides of every hexagon, even where two hexagons touch, so the answers follow the table's rule."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Write the following times as decimals: a) 1 hour and 30 minutes b) 2 hours and 15 minutes c) 3 hours and 45 minutes",
        interact: [
          { kind: "shade", parts: 4, hint: "This strip is 1 hour. Each part is 15 minutes. Shade the minutes to see the fraction of an hour." },
          { kind: "input", fields: [{ label: "a)", value: 1.5, suffix: "hours" }, { label: "b)", value: 2.25, suffix: "hours" }, { label: "c)", value: 3.75, suffix: "hours" }] }
        ],
        answer: "a) **1.5 hours** · b) **2.25 hours** · c) **3.75 hours**. 30 min = [1/2] h = 0.5, 15 min = [1/4] h = 0.25, 45 min = [3/4] h = 0.75."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "Lisa used [1/8] cup of sugar for a cake and [1/2] cup of sugar for cookies. How much sugar did Lisa use altogether?",
        options: ["[3/8] cup", "[3/2] cups", "[2/10] cup", "[5/8] cup"],
        answer: 3,
        explain: "[1/2] = [4/8]. [1/8] + [4/8] = [5/8] cup. Adding the numerators and denominators ([2/10]) doesn't work.",
        interact: [{ kind: "shade", parts: 8, hint: "The strip is 1 cup in eighths. Shade [1/8], then [1/2] (how many eighths?)." }],
        cubes: { ops: ["+"], solve: [{ t: "Same denominator", s: "[1/2] = [4/8]. [1/8] + [4/8] = [5/8]." }, { t: "Strip", s: "Shade 1 eighth, then 4 more eighths for the half: 5 of 8 parts." }] }
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "a) 63.85 × 10 = b) 1.208 × 100 = c) 2.9 ÷ 10 = d) 7.2 ÷ 100 =",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h", "th"], start: 63.85, shift: true, hint: "× 10 moves every digit one place left. ÷ 100 moves every digit two places right." },
          { kind: "input", fields: [{ label: "a)", value: 638.5 }, { label: "b)", value: 120.8 }, { label: "c)", value: 0.29 }, { label: "d)", value: 0.072 }] }
        ],
        answer: "a) **638.5** · b) **120.8** · c) **0.29** · d) **0.072**"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "A composite L-shaped figure has an area of 48 cm². What are some possible dimensions of the composite L-shaped figure?",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "expr", count: 2, target: 48, placeholder: "e.g. 6 x 6 + 4 x 3", mustUse: { re: "\\d\\s*[x×*]\\s*\\d+\\s*[+]\\s*\\d+\\s*[x×*]\\s*\\d", msg: "Write the L-shape as two rectangles added together, like 6 x 6 + 4 x 3." }, sample: ["6 x 6 + 4 x 3", "8 x 4 + 4 x 4"] }
        ],
        answer: "Answers vary. For example, a 6 cm × 6 cm square with a 4 cm × 3 cm rectangle beside it (36 + 12 = 48 cm²), or an 8 × 4 rectangle with a 4 × 4 square on top (32 + 16 = 48 cm²).",
        explain: "The boxes accept any two rectangles that add to 48 cm². Check in discussion that the two parts have different heights (or widths) so they make an L, not one rectangle."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the area model to solve: 23 × 56",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#×", "#50", "#6"], ["#20", { v: 1000 }, { v: 120 }], ["#3", { v: 150 }, { v: 18 }]], msg: "Multiply each row by each column: 20 × 50, 20 × 6, 3 × 50, 3 × 6." },
          { kind: "input", fields: [{ label: "23 × 56 =", value: 1288 }] }
        ],
        answer: "1000 + 120 + 150 + 18 = **1288**."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "You need to make a spinner for a board game that is more likely to land on green than orange or purple. Draw and label a spinner that would make this happen.",
        interact: [
          { kind: "classify", view: [300, 300], label: "Spinner with 8 equal parts", hint: "Choose a colour, then tap the parts of the spinner to colour them.",
            cats: [{ k: "g", t: "Green", c: "#00A651" }, { k: "o", t: "Orange", c: "#F7941D" }, { k: "p", t: "Purple", c: "#8E2BD6" }],
            shapes: [
              { p: "150,150 150.0,20.0 162.7,20.6 175.4,22.5 187.7,25.6 199.7,29.9 211.3,35.4 222.2,41.9 232.5,49.5 241.9,58.1", fill: "#F2F2F2" },
              { p: "150,150 241.9,58.1 250.5,67.5 258.1,77.8 264.6,88.7 270.1,100.3 274.4,112.3 277.5,124.6 279.4,137.3 280.0,150.0", fill: "#F2F2F2" },
              { p: "150,150 280.0,150.0 279.4,162.7 277.5,175.4 274.4,187.7 270.1,199.7 264.6,211.3 258.1,222.2 250.5,232.5 241.9,241.9", fill: "#F2F2F2" },
              { p: "150,150 241.9,241.9 232.5,250.5 222.2,258.1 211.3,264.6 199.7,270.1 187.7,274.4 175.4,277.5 162.7,279.4 150.0,280.0", fill: "#F2F2F2" },
              { p: "150,150 150.0,280.0 137.3,279.4 124.6,277.5 112.3,274.4 100.3,270.1 88.7,264.6 77.8,258.1 67.5,250.5 58.1,241.9", fill: "#F2F2F2" },
              { p: "150,150 58.1,241.9 49.5,232.5 41.9,222.2 35.4,211.3 29.9,199.7 25.6,187.7 22.5,175.4 20.6,162.7 20.0,150.0", fill: "#F2F2F2" },
              { p: "150,150 20.0,150.0 20.6,137.3 22.5,124.6 25.6,112.3 29.9,100.3 35.4,88.7 41.9,77.8 49.5,67.5 58.1,58.1", fill: "#F2F2F2" },
              { p: "150,150 58.1,58.1 67.5,49.5 77.8,41.9 88.7,35.4 100.3,29.9 112.3,25.6 124.6,22.5 137.3,20.6 150.0,20.0", fill: "#F2F2F2", deco: "<circle cx='150' cy='150' r='130' fill='none' stroke='#555' stroke-width='2' pointer-events='none'/><line x1='150' y1='150' x2='150' y2='20' stroke='#555' stroke-width='2' pointer-events='none'/><line x1='150' y1='150' x2='241.9' y2='58.1' stroke='#555' stroke-width='2' pointer-events='none'/><line x1='150' y1='150' x2='280' y2='150' stroke='#555' stroke-width='2' pointer-events='none'/><line x1='150' y1='150' x2='241.9' y2='241.9' stroke='#555' stroke-width='2' pointer-events='none'/><line x1='150' y1='150' x2='150' y2='280' stroke='#555' stroke-width='2' pointer-events='none'/><line x1='150' y1='150' x2='58.1' y2='241.9' stroke='#555' stroke-width='2' pointer-events='none'/><line x1='150' y1='150' x2='20' y2='150' stroke='#555' stroke-width='2' pointer-events='none'/><line x1='150' y1='150' x2='58.1' y2='58.1' stroke='#555' stroke-width='2' pointer-events='none'/>" }] },
          { kind: "select", hint: "Tap every spinner (8 equal parts) that would work.", items: [
            ["5 green, 2 orange, 1 purple", true],
            ["3 green, 3 orange, 2 purple", false],
            ["2 green, 3 orange, 3 purple", false],
            ["6 green, 1 orange, 1 purple", true],
            ["1 green, 4 orange, 3 purple", false]] }
        ],
        answer: "Answers vary. Green needs the biggest share of the spinner, for example 5 green, 2 orange and 1 purple out of 8 equal parts. Then green is more likely than orange and more likely than purple (and even more likely than orange and purple together).",
        explain: "The options that work give green more than half the spinner, so they work however \"than orange or purple\" is read. 3 green and 3 orange doesn't work: green and orange are equally likely."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "If I have [4/6], I need [2/6] to make one whole.",
        answer: true,
        explain: "[4/6] + [2/6] = [6/6] = 1 whole. The strip has 6 parts: 4 are shaded and 2 are not.",
        interact: [{ kind: "shade", parts: 6, pre: [0, 1, 2, 3], hint: "4 of 6 parts are shaded. Shade the rest to make one whole." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Identify if grouping symbols are needed to make the number sentences true. Record the number sentence, adding grouping symbols if needed. a) 4 × 9 − 3 = 24 b) 40 ÷ 5 × 2 = 4 c) 2 + 4 × 9 = 38 d) 11 − 7 × 6 + 2 = 32",
        interact: [
          { kind: "choose", rows: [
            { t: "a) Grouping symbols needed?", options: ["Yes", "No"], a: 0 },
            { t: "b) Grouping symbols needed?", options: ["Yes", "No"], a: 0 },
            { t: "c) Grouping symbols needed?", options: ["Yes", "No"], a: 1 },
            { t: "d) Grouping symbols needed?", options: ["Yes", "No"], a: 0 }] },
          { kind: "sentence", fields: [
            { label: "a)", placeholder: "4 x 9 - 3 = 24", re: "^4\\s*x\\s*\\(\\s*9\\s*-\\s*3\\s*\\)\\s*=\\s*24$", msg: "Keep the numbers in the same order and add brackets.", sample: "4 x (9 - 3) = 24" },
            { label: "b)", placeholder: "40 ÷ 5 x 2 = 4", re: "^40\\s*(÷|/)\\s*\\(\\s*5\\s*x\\s*2\\s*\\)\\s*=\\s*4$", msg: "Keep the numbers in the same order and add brackets.", sample: "40 ÷ (5 x 2) = 4" },
            { label: "c)", placeholder: "2 + 4 x 9 = 38", re: "^2\\s*\\+\\s*\\(?\\s*4\\s*x\\s*9\\s*\\)?\\s*=\\s*38$", msg: "Keep the numbers in the same order.", sample: "2 + 4 x 9 = 38" },
            { label: "d)", placeholder: "11 - 7 x 6 + 2 = 32", re: "^\\(\\s*11\\s*-\\s*7\\s*\\)\\s*x\\s*\\(\\s*6\\s*\\+\\s*2\\s*\\)\\s*=\\s*32$", msg: "Keep the numbers in the same order and add brackets.", sample: "(11 - 7) x (6 + 2) = 32" }] }
        ],
        answer: "a) **4 × (9 − 3) = 24** · b) **40 ÷ (5 × 2) = 4** · c) **2 + 4 × 9 = 38** (no brackets needed: multiply first) · d) **(11 − 7) × (6 + 2) = 32**"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Calculate the area of the parallelogram. Each square is 1 cm × 1 cm.",
        img: "u33-para.png",
        interact: [{ kind: "input", fields: [{ label: "Base", value: 7, suffix: "cm" }, { label: "Height", value: 7, suffix: "cm" }, { label: "Area", value: 49, suffix: "cm²" }] }],
        answer: "**49 cm²**. Cut the triangle off one end and move it to the other end to make a rectangle 7 cm × 7 cm. Area = base × height = 7 × 7 = 49 cm².",
        explain: "The base and height are counted from the 1 cm grid on the slide: the base runs 7 squares and the dashed height is 7 squares."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "A sports store has 8674 tennis balls and packs them equally into 12 containers. a) How many tennis balls go into each container? b) How many are left over?",
        interact: [
          { kind: "cells", cols: 3, w: 130, grid: [["#Each gets", "#Balls used", "#Balls left"], ["600", { v: 7200 }, { v: 1474 }], ["120", { v: 1440 }, { v: 34 }], ["2", { v: 24 }, { v: 10 }]], msg: "12 × 600 = 7200, and 8674 − 7200 = 1474. Keep sharing what is left." },
          { kind: "input", fields: [{ label: "a) Each container", value: 722 }, { label: "b) Left over", value: 10 }] }
        ],
        cubes: { ops: ["÷"], also: ["×", "−"], solve: [{ t: "Short division", s: "86 ÷ 12 = 7 r 2, 27 ÷ 12 = 2 r 3, 34 ÷ 12 = 2 r 10. 722 r 10." }, { t: "Check by multiplying", s: "12 × 722 = 8664. 8664 + 10 = 8674 ✓." }] },
        answer: "a) **722 tennis balls** in each container. b) **10** left over. 12 × 722 = 8664 and 8674 − 8664 = 10."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Two coins are tossed. Discuss the differences between the expected and observed counts of both coin toss trials. 12 trials observed: heads & heads 7, tails & tails 3, heads & tails 2. 240 trials observed: heads & heads 74, tails & tails 79, heads & tails 87.",
        interact: [
          { kind: "choose", rows: [{ t: "Are the 3 outcomes equally likely?", options: ["Yes", "No: heads & tails can happen 2 ways"], a: 1 }] },
          { kind: "cells", cols: 3, w: 170, grid: [["#Expected", "#12 tosses", "#240 tosses"], ["heads & heads", { v: 3 }, { v: 60 }], ["tails & tails", { v: 3 }, { v: 60 }], ["heads & tails", { v: 6 }, { v: 120 }]], msg: "Heads & heads is [1/4] of tosses, tails & tails [1/4], heads & tails [1/2]." }
        ],
        answer: "Two coins can land HH, TT, HT or TH, so heads & tails is expected **half** the time: **3, 3, 6** in 12 trials and **60, 60, 120** in 240 trials. The observed counts differ from these. With only 12 trials the results jump around a lot (7 heads & heads instead of 3). More trials usually bring the results closer to the expected fractions.",
        explain: "The slide's expected counts (4, 4, 4 and 80, 80, 80) treat the three outcomes as equally likely, which isn't right for two coins. The expected counts here are corrected. The observed counts are the slide's; the 240-trial heads & tails count (87) is well below 120, which is worth discussing."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "[1/4] − [1/8] =",
        options: ["[1/4]", "[1/8]", "[3/8]", "[2/8]"],
        answer: 1,
        explain: "[1/4] = [2/8]. [2/8] − [1/8] = [1/8].",
        interact: [{ kind: "shade", parts: 8, pre: [0, 1], hint: "[1/4] is shaded as 2 eighths. Tap 1 eighth to take it away. What is left?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "The P & C ordered lunch boxes for the teachers on World Teachers Day. Each box contained a wrap costing $11, a piece of fruit costing $3, and a drink costing $4. There are 58 teachers on staff. How much did the lunch cost? Do you need grouping symbols when writing the number sentence? Record the number sentence and solve it.",
        interact: [
          { kind: "choose", rows: [{ t: "Grouping symbols needed?", options: ["Yes", "No"], a: 0 }] },
          { kind: "expr", count: 1, target: 1044, placeholder: "e.g. 58 x (… + … + …)", mustUse: { re: "\\(", msg: "Use brackets to find the cost of one box first." }, sample: ["58 x (11 + 3 + 4)"] },
          { kind: "input", fields: [{ label: "Total cost", prefix: "$", value: 1044 }] }
        ],
        cubes: { ops: ["+", "×"], solve: [{ t: "One box first", s: "$11 + $3 + $4 = $18 a box. 58 × (11 + 3 + 4) = 58 × 18 = $1044." }, { t: "Split 58", s: "50 × 18 = 900 and 8 × 18 = 144. 900 + 144 = $1044." }] },
        answer: "**Yes**. 58 × (11 + 3 + 4) = 58 × 18 = **$1044**. Without brackets, 58 × 11 + 3 + 4 would only multiply the wrap.",
        explain: "The slide says \"58 teacher\"; it reads \"58 teachers\" here."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "If the area of this parallelogram is 30 cm², what is the area of the triangle? Both shapes have the same base (blue) and height (red).",
        img: "u33-tri.png",
        interact: [{ kind: "input", fields: [{ label: "Area of triangle", value: 15, suffix: "cm²" }] }],
        answer: "**15 cm²**. The diagonal cuts the parallelogram into 2 equal triangles, so the triangle is half: 30 ÷ 2 = 15 cm². (Base 5 cm × height 6 cm = 30, ÷ 2 = 15.)"
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Divide 7 by: a) 10 b) 100 c) 1000",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 7, shift: true, hint: "Each ÷ 10 moves the 7 one place to the right." },
          { kind: "input", fields: [{ label: "a) 7 ÷ 10 =", value: 0.7 }, { label: "b) 7 ÷ 100 =", value: 0.07 }, { label: "c) 7 ÷ 1000 =", value: 0.007 }] }
        ],
        answer: "a) **0.7** · b) **0.07** · c) **0.007**"
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Write each mass using kilograms (kg) and grams (g): a) 6.55 kg b) 9.02 kg c) 12.75 kg",
        interact: [
          { kind: "pv", cols: ["T", "O", "t", "h", "th"], start: 6.55, hint: "Kilograms are the whole number. The three decimal places are grams: 0.550 kg = 550 g." },
          { kind: "input", fields: [
            { label: "a) 6.55 kg =", value: 6, suffix: "kg" }, { label: "", value: 550, suffix: "g" },
            { label: "b) 9.02 kg =", value: 9, suffix: "kg" }, { label: "", value: 20, suffix: "g" },
            { label: "c) 12.75 kg =", value: 12, suffix: "kg" }, { label: "", value: 750, suffix: "g" }] }
        ],
        answer: "a) **6 kg 550 g** · b) **9 kg 20 g** · c) **12 kg 750 g**. 1 kg = 1000 g, so 0.55 kg = 550 g and 0.02 kg = 20 g."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "This representation can be used to solve the following word problem: A piece of ribbon is [5/6] metres long. Carrie uses [1/3] metre. How much ribbon is left? The representation shows [1/3] = [2/6] and [5/6] − [1/3] = [3/6] or [1/2].",
        answer: true,
        explain: "[1/3] = [2/6], so [5/6] − [2/6] = [3/6] = [1/2] metre left. The number lines show this correctly.",
        interact: [{ kind: "bar", whole: { v: 5, l: "[5/6] m", n: "ribbon" }, parts: [{ v: 2, l: "[1/3] m = [2/6] m", n: "used" }, { v: 3, l: "[3/6] m = [1/2] m", n: "left", hide: true }] }],
        cubes: { ops: ["−"], solve: [{ t: "Make the same denominator", s: "[1/3] = [2/6]. [5/6] − [2/6] = [3/6] = [1/2] m." }, { t: "Count back on a number line", s: "Start at [5/6] and jump back 2 sixths to [3/6]." }] }
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Balance the scales by filling in the missing number. □ ÷ 9 = 4 × 8 − 26",
        interact: [{ kind: "scale", left: "? ÷ 9", right: "4 × 8 − 26", answer: 54 }],
        answer: "**54**. The right side is 4 × 8 − 26 = 32 − 26 = 6. 54 ÷ 9 = 6."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Explain how the area of a triangle is related to the area of a parallelogram with the same base length and height.",
        img: "u33-tri.png",
        interact: [{ kind: "choose", rows: [
          { t: "The triangle's area is", options: ["the same as the parallelogram", "half of the parallelogram", "double the parallelogram"], a: 1 },
          { t: "Area of a triangle =", options: ["base × height", "base × height ÷ 2", "base + height"], a: 1 }] }],
        answer: "The triangle's area is **half** the parallelogram's. A diagonal cuts the parallelogram into 2 identical triangles. So area of a triangle = **base × height ÷ 2**."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "8 × _ = 64 ÷ _",
        interact: [{ kind: "sentence", fields: [
          { label: "One way", placeholder: "8 x _ = 64 ÷ _", re: "^8\\s*x\\s*[\\d.]+\\s*=\\s*64\\s*(÷|/)\\s*[\\d.]+$", msg: "Keep the 8 × and the 64 ÷. Fill in the two blanks.", sample: "8 x 2 = 64 ÷ 4" },
          { label: "Another way", placeholder: "8 x _ = 64 ÷ _", re: "^8\\s*x\\s*[\\d.]+\\s*=\\s*64\\s*(÷|/)\\s*[\\d.]+$", msg: "Keep the 8 × and the 64 ÷. Fill in the two blanks.", sample: "8 x 1 = 64 ÷ 8" }] }],
        answer: "Many answers work: 8 × **1** = 64 ÷ **8**, 8 × **2** = 64 ÷ **4**, 8 × **4** = 64 ÷ **2**, 8 × **8** = 64 ÷ **1**. Both sides must make the same number.",
        explain: "The question is open. The boxes accept any pair that makes both sides equal."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the following measurements in kilograms: a) 3 kg 250 g b) 300 g c) 9 kg 35 g",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 3.25, hint: "Kilograms are the ones. Grams are thousandths of a kilogram: 35 g = 0.035 kg." },
          { kind: "input", fields: [{ label: "a)", value: 3.25, suffix: "kg" }, { label: "b)", value: 0.3, suffix: "kg" }, { label: "c)", value: 9.035, suffix: "kg" }] }
        ],
        answer: "a) **3.25 kg** (3.250) · b) **0.3 kg** (0.300) · c) **9.035 kg**. Watch c): 35 g is 0.035 kg, not 0.35 kg."
      }
    ]
  ]
});
