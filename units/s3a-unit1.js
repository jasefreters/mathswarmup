/*
  Stage 3 Year A, Unit 1 — Review of learning (Term 1, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 1, ls: 1, unit: 1,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 1 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Which **number pattern** is **descending** by 10s?",
        options: ["1078, 1088, 1098, 2008…", "6, 16, 26, 36, 46, 56…", "548, 448, 348, 248…", "1056, 1046, 1036, 1026…"],
        answer: 3,
        explain: "1056, 1046, 1036, 1026 goes down by 10 each time. C goes down by 100, and A and B go up.",
        interact: [{ kind: "jumps", start: 1056, back: true, steps: [10, 100], hint: "Start at 1056 and jump back by 10. Does it match the pattern?" }]
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Record the numbers in **ascending** order.",
        interact: [{ kind: "order", items: ["100 009", "121 001", "101 987"], answer: [0, 2, 1] }],
        answer: "100 009, 101 987, 121 001",
        explain: "Compare the hundred thousands first (all 1), then the ten thousands: 0, 0 and 2. Then compare the thousands: 0 and 1."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition each number in **non-standard** form. Use break 1 → to trade a counter into 10 of the next column.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 25698, target: 25698, need: "nonstandard" },
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 104789, target: 104789, need: "nonstandard" },
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 604601, target: 604601, need: "nonstandard" }
        ],
        answer: "Many answers. For example 25 698 = 25 thousands + 6 hundreds + 98 ones; 104 789 = 10 ten thousands + 47 hundreds + 89 ones; 604 601 = 60 ten thousands + 46 hundreds + 1 one."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "The time is 2:37. How many minutes until 3:00?",
        interact: [
          { kind: "jumps", start: 157, end: 180, time: true, steps: [1, 3, 5, 10, 20], hint: "Count on from 2:37 to 3:00. Try jumping to a friendly time first." },
          { kind: "input", fields: [{ value: 23, suffix: "minutes" }] }
        ],
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Jump to a friendly time", s: "2:37 + 3 minutes = 2:40, then + 20 minutes = 3:00. 3 + 20 = 23 minutes." }, { t: "Subtract from 60", s: "3:00 is 60 minutes after 2:00. 60 − 37 = 23 minutes." }] },
        answer: "**23 minutes**"
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "What is the **perimeter** of the field?",
        interact: [
          { kind: "sides", label: "Rectangular field, 50 m by 20 m", view: [420, 230], fill: "#92D050",
            poly: [[40, 30], [320, 30], [320, 170], [40, 170]],
            dims: [{ from: [42, 192], to: [318, 192] }, { from: [342, 32], to: [342, 168] }],
            labels: [{ x: 180, y: 220, t: "50 m" }, { x: 352, y: 106, t: "20 m", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 140, suffix: "m" }] }
        ],
        answer: "50 + 20 + 50 + 20 = **140 m**"
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "These numbers are in **ascending** order.",
        display: "909, 999, 99 788, 1089, 9009",
        answer: false,
        explain: "99 788 has 5 digits, so it is bigger than 1089 and 9009. Ascending order is 909, 999, 1089, 9009, 99 788."
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Read the numbers aloud.",
        interact: [{ kind: "reveal", button: "Reveal", items: [["5 709 852", "words"], ["6 475 200", "words"], ["1 111 870", "words"], ["4 098 654", "words"]] }],
        answer: "Read each period (millions, thousands, ones) then say its name. For example 5 709 852 is five million, seven hundred and nine thousand, eight hundred and fifty-two."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "Record as a number: one hundred and twenty hundreds, forty tens and one. Group the counters into the standard partition.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: { H: 120, T: 40, O: 1 }, target: 12401, need: "standard" },
          { kind: "input", fields: [{ label: "The number is", value: 12401 }] }
        ],
        answer: "**12 401** (120 hundreds = 12 000, 40 tens = 400, plus 1)"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Lunch begins at 12:00 pm. It is 33 minutes until lunch. What is the time now?",
        interact: [
          { kind: "jumps", start: 720, time: true, ampm: true, back: true, steps: [1, 3, 10, 30], hint: "Start at lunch time and jump back 33 minutes." },
          { kind: "input", fields: [{ label: "The time now is", accept: ["1127", "1127am"], placeholder: "0:00" }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Jump back in parts", s: "12:00 − 30 minutes = 11:30, then − 3 minutes = 11:27 am." }, { t: "Count on to check", s: "From 11:27, + 3 minutes = 11:30, + 30 minutes = 12:00. That's 33 minutes." }] },
        answer: "**11:27 am**"
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Make an angle you can see in the classroom that is **less than** a right angle. Drag the blue arm.",
        interact: [{ kind: "angle", target: "less", start: 130 }],
        answer: "Any angle smaller than a right angle, like the point of a pencil or the corner of a slightly open door."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "I am a number with **43 hundreds** and **3 ones**. Which number am I?",
        options: ["4300", "433", "4331", "4303"],
        answer: 3,
        explain: "43 hundreds = 4300. Add 3 ones: 4303.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { H: 43, O: 3 } }]
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Rewrite 4 563 927 using standard partitioning, then non-standard partitioning.",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 4563927, target: 4563927, need: "nonstandard" }
        ],
        answer: "Standard: 4 000 000 + 500 000 + 60 000 + 3000 + 900 + 20 + 7. Non-standard, for example: 45 hundred thousands + 63 thousands + 92 tens + 7 ones."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Place the decimals in order on a 0–10 number line.",
        interact: [{ kind: "numberline", min: 0, max: 10, ticks: 1, tol: 0.3, items: [["3.5", 3.5], ["5.75", 5.75], ["8.09", 8.09]] }],
        answer: "3.5 is halfway between 3 and 4. 5.75 is three-quarters of the way from 5 to 6. 8.09 is just past 8."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "School finishes at 3:20 pm. It is now midday. How much longer until school finishes?",
        interact: [
          { kind: "jumps", start: 720, end: 920, time: true, ampm: true, steps: [10, 20, 30, 60], hint: "Count on from midday to 3:20 pm. Jump in hours first." },
          { kind: "input", fields: [{ label: "hours", value: 3 }, { label: "minutes", value: 20 }] }
        ],
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Jump in hours, then minutes", s: "12:00 + 1 h = 1:00, + 1 h = 2:00, + 1 h = 3:00, + 20 min = 3:20. That's 3 hours 20 minutes." }, { t: "Use minutes", s: "3 hours = 180 minutes, plus 20 minutes = 200 minutes." }] },
        answer: "**3 hours 20 minutes** (200 minutes)"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Each square is 1 cm × 1 cm. What is the **area** of the shape?",
        interact: [
          { kind: "areagrid", cells: ["111111", "111111", "111111", "111111"] },
          { kind: "input", fields: [{ label: "Area", value: 24, suffix: "cm²" }] }
        ],
        answer: "4 rows of 6 squares: 4 × 6 = **24 cm²**"
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "3000 can be **partitioned** as 3 thousands, 30 hundreds or 3000 ones.",
        answer: true,
        explain: "3 thousands = 30 hundreds = 300 tens = 3000 ones. Break the thousands apart in the chart to see it.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 3 } }]
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Record as decimals.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0 },
          { kind: "input", fields: [{ label: "6 tenths", value: 0.6 }, { label: "30 hundredths", value: 0.3 }, { label: "425 thousandths", value: 0.425 }] }
        ],
        answer: "0.6 · 0.30 (or 0.3) · 0.425"
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Choose 3 items to purchase. Show the total cost of your items using an appropriate strategy.",
        interact: [{ kind: "shop", pick: 3, items: [["ten-pin bowling", 49.5], ["jumbo pick-up sticks", 50.75], ["giant chess set", 279], ["ring toss", 25.25], ["set of 12 hula hoops", 102], ["set of 8 mixed balls", 80.25], ["giant checkers", 225], ["roundnet", 89.5], ["outdoor tic-tac-toe", 95]] }],
        cubes: { ops: ["+"], solve: [{ t: "Add the dollars, then the cents", s: "Ring toss + roundnet + ten-pin bowling: $25 + $89 + $49 = $163, and 25c + 50c + 50c = $1.25. Total $164.25." }, { t: "Round and adjust", s: "$25.25 + $89.50 + $49.50 ≈ $25 + $90 + $50 = $165, then take off 75c: $164.25." }] },
        answer: "Answers vary. For example ring toss, roundnet and ten-pin bowling: $25.25 + $89.50 + $49.50 = **$164.25**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Split this shape into 3 triangles. Draw the lines.",
        interact: [{ kind: "sketch", shape: { view: [400, 240], pts: [[110, 20], [380, 20], [290, 220], [20, 220]] }, shapeFill: "rgba(112,48,160,.35)" }],
        answer: "Draw one line from a top corner to a bottom corner to make 2 triangles, then split one of those triangles with a line from a corner to the opposite side."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure: 3D objects",
        prompt: "Draw the **net** of a rectangular prism.",
        img: "u1-prism.png",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "6 rectangles: a strip of 4 faces (top, front, bottom, back) with the 2 end faces attached on either side. Opposite faces match in size."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Subtract 1010 from 1109.",
        options: ["999", "109", "99", "1099"],
        answer: 2,
        explain: "1109 − 1000 = 109, then 109 − 10 = 99.",
        interact: [{ kind: "jumps", start: 1109, back: true, steps: [10, 1000], hint: "Jump back 1000, then back 10." }]
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Partition 7.459 in 2 different ways. Communicate your reasoning.",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 7.459, target: 7.459, need: "nonstandard" }],
        answer: "For example 7 + 0.4 + 0.05 + 0.009 (standard), and 7 ones + 45 hundredths + 9 thousandths, or 74 tenths + 59 thousandths (non-standard)."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "You have a budget of $375. What items could you buy that total as close to $375 as possible?",
        interact: [{ kind: "shop", budget: 375, items: [["ten-pin bowling", 49.5], ["jumbo pick-up sticks", 50.75], ["giant chess set", 279], ["ring toss", 25.25], ["set of 12 hula hoops", 102], ["set of 8 mixed balls", 80.25], ["giant checkers", 225], ["roundnet", 89.5], ["outdoor tic-tac-toe", 95]] }],
        cubes: { ops: ["+", "−"], solve: [{ t: "Start with the biggest item", s: "Giant chess set $279 leaves $375 − $279 = $96. The tic-tac-toe is $95, so the total is $374 — only $1 left." }, { t: "Estimate, then adjust", s: "Giant checkers $225 leaves $150. $95 + $50.75 = $145.75, so the total is $370.75." }] },
        answer: "Closest: giant chess set + outdoor tic-tac-toe = **$374** ($1 left). Other good answers include $372 and $370.75."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Combine at least 2 different 2D shapes to sketch a trapezium.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "For example a rectangle with a right-angled triangle on each end, or a parallelogram and a triangle."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure: Volume",
        prompt: "Draw and label several objects that would be **about 1 litre** in capacity.",
        interact: [{ kind: "sketch" }],
        answer: "Answers vary: a large water bottle, a carton of milk, a juice jug, a small saucepan."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "107 + 574 = 103 + 571",
        follow: "Communicate your reasoning.",
        answer: false,
        explain: "Both numbers on the right are smaller (103 < 107 and 571 < 574), so the right side must be smaller. 681 ≠ 674."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record all the **factors** of 54. A factor divides another number without a remainder.",
        interact: [{ kind: "numchart", from: 1, to: 54, answer: [1, 2, 3, 6, 9, 18, 27, 54], hint: "Tap every factor of 54. Find them in pairs: 1 × 54, 2 × 27…" }],
        answer: "1, 2, 3, 6, 9, 18, 27, 54"
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use the **associative property** of addition to regroup and solve.",
        display: "123 + 78 + 57 + 12",
        interact: [
          { kind: "group", items: [123, 78, 57, 12] },
          { kind: "input", fields: [{ label: "Total", value: 270 }] }
        ],
        answer: "(123 + 57) + (78 + 12) = 180 + 90 = **270**"
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Make an angle that is greater than a right angle, one that is less than a right angle, and one that is about the same as a right angle.",
        interact: [
          { kind: "angle", label: "Greater than a right angle", target: "greater", start: 60 },
          { kind: "angle", label: "Less than a right angle", target: "less", start: 130 },
          { kind: "angle", label: "About the same as a right angle", target: "right", start: 140 }
        ],
        answer: "Greater: wider than the corner of a book. Less: narrower than it. Right angle: exactly the corner of a book (90°)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure: Volume",
        prompt: "This prism has 2 layers of 16 cubic centimetre blocks. What is the total volume?",
        interact: [{ kind: "input", fields: [{ label: "Volume", value: 32, suffix: "cm³" }] }],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Multiply the layers", s: "2 layers × 16 cm³ = 32 cm³." }, { t: "Add the layers", s: "16 cm³ + 16 cm³ = 32 cm³." }] },
        answer: "2 × 16 = **32 cm³**"
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "678 − 231 = 447. Which other number sentence is related?",
        options: ["447 + 231 = 678", "447 + 678 = ?", "231 + 678 = ?", "678 − 231 = 231"],
        answer: 0,
        explain: "Addition undoes subtraction: if 678 − 231 = 447, then 447 + 231 = 678. (The slide shows the fact as 678 − 231 = 231 + 447, which doesn't balance.)"
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the answers.",
        interact: [{ kind: "input", fields: [{ label: "4 × 70 =", value: 280 }, { label: "6 × 300 =", value: 1800 }, { label: "9 × 8000 =", value: 72000 }] }],
        answer: "280 (4 × 7 tens = 28 tens) · 1800 (6 × 3 hundreds = 18 hundreds) · 72 000 (9 × 8 thousands = 72 thousands)"
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Solve. Explain what strategy you used.",
        display: "32 = ___ × 4",
        interact: [
          { kind: "areagrid", cells: ["11111111", "11111111", "11111111", "11111111"] },
          { kind: "input", fields: [{ label: "32 = ? × 4", value: 8 }] }
        ],
        answer: "**8**, because 8 × 4 = 32. Strategies: double 4 three times (4, 8, 16, 32), or count 4 rows of 8 in the array."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Make an angle that is less than a quarter turn, one that is greater than a quarter turn, and one that is the same as a quarter turn.",
        interact: [
          { kind: "angle", label: "Less than a quarter turn", target: "less", start: 130 },
          { kind: "angle", label: "Greater than a quarter turn", target: "greater", start: 60 },
          { kind: "angle", label: "The same as a quarter turn", target: "right", start: 140 }
        ],
        answer: "A quarter turn is a right angle (90°)."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record how many minutes are in each.",
        interact: [{ kind: "input", fields: [{ label: "half an hour", value: 30, suffix: "min" }, { label: "a quarter of an hour", value: 15, suffix: "min" }, { label: "1 hour", value: 60, suffix: "min" }] }],
        answer: "30 minutes · 15 minutes · 60 minutes"
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "543 + 245 = 500 + 200 + 88",
        answer: true,
        explain: "543 + 245 = 788. 500 + 200 + 88 = 788 too: the tens and ones (43 + 45 = 88) are added together.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: 788 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record 3 number sentences using multiples of 10 to get an answer of 180. For example: 10 × 18 = 180.",
        interact: [{ kind: "expr", count: 3, target: 180, placeholder: "e.g. 20 x 9", sample: ["10 x 18", "20 x 9", "30 x 6"], mustUse: { re: "\\d*0(?!\\d)", msg: "Each number sentence needs a multiple of 10." } }],
        answer: "For example 20 × 9, 30 × 6, 60 × 3, 90 × 2, 10 × 18."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "I buy 7 tennis balls, and the total cost is $35. What is the cost of each tennis ball? Create a number sentence to show your thinking.",
        interact: [
          { kind: "expr", count: 1, target: 5, placeholder: "e.g. 35 ÷ 7", sample: ["35 ÷ 7"] },
          { kind: "input", fields: [{ label: "Each ball costs", prefix: "$", value: 5 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Share the cost", s: "$35 ÷ 7 = $5." }, { t: "Use a multiplication fact", s: "7 × ? = 35. 7 × 5 = 35, so each ball is $5." }] },
        answer: "$35 ÷ 7 = **$5**"
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Identify and record 3 objects in the classroom that have a right angle.",
        answer: "Answers vary: the corner of a book, a door frame, a whiteboard corner, a tile, a desk corner."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "The time is 1:26 pm. How many minutes until it is 2:00 pm?",
        interact: [
          { kind: "jumps", start: 806, end: 840, time: true, ampm: true, steps: [1, 4, 10, 30], hint: "Count on from 1:26 pm. Jump to 1:30 first." },
          { kind: "input", fields: [{ value: 34, suffix: "minutes" }] }
        ],
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Jump to a friendly time", s: "1:26 + 4 minutes = 1:30, then + 30 minutes = 2:00. 4 + 30 = 34 minutes." }, { t: "Subtract from 60", s: "60 − 26 = 34 minutes." }] },
        answer: "**34 minutes**"
      }
    ]
  ]
});
