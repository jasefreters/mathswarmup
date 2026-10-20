/*
  Stage 2 Year B, Unit 23 — Review of learning (Term 1, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 1, ls: 3, unit: 23,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 23 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which number is **10 times larger** than 49?",
        options: ["4.9", "49", "490", "4900"],
        answer: 2,
        explain: "Multiplying by 10 moves each digit one place to the left: 4 tens become 4 hundreds and 9 ones become 9 tens.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 49, shift: true, hint: "Press × 10. Watch each digit move one place to the left." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "What is an appropriate tool to measure the length of a pencil? Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [{ t: "Best tool", options: ["a ruler", "a trundle wheel", "a kitchen scale", "a measuring jug"], a: 0 }] }],
        answer: "**A ruler**. A pencil is short, so a ruler marked in centimetres and millimetres measures it accurately. A trundle wheel is for long distances, and scales and jugs measure mass and capacity."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Hunter has 158 bonsai trees for his market stall. He would like to have 320 bonsai trees. Use a number line to show how many more bonsai trees Hunter needs for his stall.",
        interact: [
          { kind: "jumps", start: 158, end: 320, steps: [2, 10, 20, 100], hint: "Start at 158. Jump to a friendly number first, then on to 320." },
          { kind: "input", fields: [{ label: "Trees needed", value: 162 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "158 + 2 = 160, + 40 = 200, + 120 = 320. 2 + 40 + 120 = 162." }, { t: "Subtract", s: "320 − 158: 320 − 100 = 220, − 50 = 170, − 8 = 162." }] },
        answer: "**162 more trees**. 158 + 162 = 320."
      },
      {
        type: "sr", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Regroup 674 in two different ways.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 674, hint: "Break a hundred into 10 tens, or a ten into 10 ones, to regroup." },
          { kind: "expr", count: 2, target: 674, placeholder: "e.g. 600 + 74", mustUse: { re: "[1-9][\\d ]*[1-9]", msg: "That's the standard partition. Group some places together, like 600 + 74 or 5 hundreds + 17 tens + 4 ones." }, sample: ["600 + 74", "500 + 174"] }
        ],
        answer: "Answers vary, for example 600 + 74, 500 + 174, or 6 hundreds + 6 tens + 14 ones (600 + 60 + 14)."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Record the directions from the school to the hospital.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u23-town.png" }],
        answer: "Answers vary. For example: leave the school on the road to its right and follow it as it curves down. Turn left onto the road that runs below the hospital. The hospital is on your left. Use words like left, right, straight ahead, past and next to."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "In the number 9 567 there are 95 hundreds. Communicate your reasoning.",
        answer: true,
        explain: "9 thousands is 90 hundreds, plus 5 more hundreds makes 95 hundreds (9500). The other 67 is less than a hundred.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { H: 95, T: 6, O: 7 }, hint: "This chart shows 95 hundreds, 6 tens and 7 ones. Show the number." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "What unit of measure for length would you use for the following? a laptop, a skateboard, a long jump pit, a grain of rice",
        interact: [{ kind: "choose", rows: [
          { t: "a laptop", options: ["mm", "cm", "m", "km"], a: 1 },
          { t: "a skateboard", options: ["mm", "cm", "m", "km"], a: [1, 2] },
          { t: "a long jump pit", options: ["mm", "cm", "m", "km"], a: 2 },
          { t: "a grain of rice", options: ["mm", "cm", "m", "km"], a: 0 }] }],
        answer: "Laptop: **centimetres** · skateboard: **centimetres** (or metres) · long jump pit: **metres** · grain of rice: **millimetres**"
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use regrouping to solve 381 + 409 = Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { H: 7, T: 8, O: 10 }, target: 790, need: "standard", hint: "This is 381 + 409 combined: 7 hundreds, 8 tens and 10 ones. Group the 10 ones into a ten." },
          { kind: "input", fields: [{ label: "381 + 409 =", value: 790 }] }
        ],
        answer: "**790**. 1 + 9 = 10 ones, regrouped as 1 ten. 8 + 0 + 1 = 9 tens. 3 + 4 = 7 hundreds."
      },
      {
        type: "sr", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Write the number 6 704 in words.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 6704 },
          { kind: "choose", rows: [{ t: "6 704 in words", options: ["six thousand, seven hundred and four", "six thousand and seventy-four", "six hundred and seventy-four", "sixty-seven thousand and four"], a: 0 }] }
        ],
        answer: "Six thousand, seven hundred and four. The 0 shows there are no tens."
      },
      {
        type: "sr", focus: "Geometric Measure A: Length",
        prompt: "Order the lengths in ascending order: 1.2 metres, 123 centimetres, 1210 millimetres",
        interact: [
          { kind: "numberline", min: 1190, max: 1240, ticks: 0.1, labelStep: 10, tol: 4, items: [["1.2 m", 1200], ["123 cm", 1230], ["1210 mm", 1210]] },
          { kind: "order", items: ["1.2 metres", "123 centimetres", "1210 millimetres"], answer: [0, 2, 1] }
        ],
        answer: "1.2 metres, 1210 millimetres, 123 centimetres. In millimetres they are 1200 mm, 1210 mm and 1230 mm.",
        explain: "The number line is marked in millimetres. 1.2 m = 1200 mm and 123 cm = 1230 mm."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "When 548 is made 10 times as large, the 5 in the hundreds place becomes a 5 in the:",
        options: ["tens place", "ones place", "hundreds place", "thousands place"],
        answer: 3,
        explain: "548 × 10 = 5480. Every digit moves one place to the left, so the 5 moves from the hundreds to the thousands.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 548, shift: true }]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Convert: 158 mm into cm, 74 cm into mm",
        interact: [
          { kind: "marker", min: 0, max: 20, ticks: 1, minor: 10, target: 15.8, tol: 0.15, label: "158 mm", msg: "Each centimetre has 10 small millimetre marks. 158 mm is 15 cm and 8 mm." },
          { kind: "input", fields: [{ label: "158 mm =", value: 15.8, suffix: "cm" }, { label: "74 cm =", value: 740, suffix: "mm" }] }
        ],
        answer: "**158 mm = 15.8 cm** (divide by 10) and **74 cm = 740 mm** (multiply by 10). 1 cm = 10 mm."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use non-standard partitioning and regrouping to solve 543 – 337 = Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { H: 5, T: 3, O: 13 }, target: 206, hint: "543 is renamed as 5 hundreds, 3 tens and 13 ones. Now take away 3 hundreds, 3 tens and 7 ones." },
          { kind: "input", fields: [{ label: "543 − 337 =", value: 206 }] }
        ],
        answer: "**206**. Rename 543 as 500 + 30 + 13. Then 13 − 7 = 6, 30 − 30 = 0 and 500 − 300 = 200."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "What are the missing numbers in the sequence? 2423, 2323, ____, 2123, ____, ____",
        interact: [
          { kind: "jumps", start: 2423, back: true, steps: [100], hint: "What is the pattern? Jump back from 2423." },
          { kind: "input", fields: [{ label: "3rd", value: 2223 }, { label: "5th", value: 2023 }, { label: "6th", value: 1923 }] }
        ],
        answer: "2423, 2323, **2223**, 2123, **2023**, **1923**. The numbers go down by 100 each time."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A bag contains 4 different coloured counters: red, blue, green and purple. Violet randomly picks 2 counters. Record all possible outcomes.",
        interact: [
          { kind: "combos", pick: 2, total: 6, items: [["red", "#E5484D", 1], ["blue", "#2F6FE4", 1], ["green", "#22A06B", 1], ["purple", "#8A3CC4", 1]] },
          { kind: "input", fields: [{ label: "Number of outcomes", value: 6 }] }
        ],
        answer: "**6 outcomes**: red and blue, red and green, red and purple, blue and green, blue and purple, green and purple."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "When 648 is made 100 times larger, the 6 in the hundreds place becomes a 6 in the thousands place, the 4 in the tens place becomes a 4 in the hundreds place and the 8 in the ones place becomes an 8 in the tens place.",
        answer: false,
        explain: "That describes 10 times larger (6480). 100 times larger moves every digit two places: 648 × 100 = 64 800, so the 6 becomes 6 ten thousands.",
        interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 648, shift: true, hint: "Press × 10 twice to make it 100 times larger." }]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "If 1 cm is 10 times larger than 1 mm, convert the following: 165 mm, 15 mm, 25 mm",
        interact: [
          { kind: "marker", min: 0, max: 20, ticks: 1, minor: 10, label: "mm", hint: "Slide the pin along the ruler. Every 10 mm is 1 cm." },
          { kind: "cells", cols: 2, w: 150, free: true, msg: "Divide the millimetres by 10 to get centimetres.", grid: [
            ["#mm", "#cm"],
            ["165 mm", { v: 16.5 }],
            ["15 mm", { v: 1.5 }],
            ["25 mm", { v: 2.5 }]] }
        ],
        answer: "165 mm = **16.5 cm** · 15 mm = **1.5 cm** · 25 mm = **2.5 cm**"
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Charni worked at the netball canteen selling drinks and sandwiches. She sold 483 items in total. 291 of the items were drinks. How many sandwiches did Charni sell? Communicate the strategy you used to solve the problem.",
        interact: [
          { kind: "bar", whole: { v: 483, l: "483", n: "items sold" }, parts: [{ v: 291, l: "291", n: "drinks" }, { v: 192, l: "192", n: "sandwiches", hide: true }] },
          { kind: "jumps", start: 291, end: 483, steps: [9, 100, 83], hint: "Count on from 291 to 483." },
          { kind: "input", fields: [{ label: "Sandwiches", value: 192 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "291 + 9 = 300, + 100 = 400, + 83 = 483. 9 + 100 + 83 = 192." }, { t: "Compensation", s: "483 − 300 = 183. I took away 9 too many, so add 9 back: 192." }] },
        answer: "**192 sandwiches**. 483 − 291 = 192."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Create a number line from 0 to 3 and record the following decimals: 0.8, 2.45, 3.0",
        interact: [{ kind: "numberline", min: 0, max: 3, ticks: 10, tol: 0.04, items: [["0.8", 0.8], ["2.45", 2.45], ["3.0", 3]] }],
        answer: "0.8 is 8 tenths, just before 1. 2.45 is halfway between 2.4 and 2.5. 3.0 is the same as 3."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Record items that have an estimated mass of: more than one kilogram, less than one kilogram, about the same as one kilogram.",
        interact: [{ kind: "choose", rows: [
          { t: "a bag of potatoes", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 2 },
          { t: "an apple", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 0 },
          { t: "a 1 litre bottle of water", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 1 },
          { t: "a pencil", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 0 },
          { t: "a school bag full of books", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 2 },
          { t: "a bag of sugar", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 1 }] }],
        answer: "Answers vary. More than 1 kg: a bag of potatoes, a full school bag. Less than 1 kg: an apple, a pencil. About 1 kg: a 1 L bottle of water, a 1 kg bag of sugar.",
        explain: "Sugar is commonly sold in 1 kg bags."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "In **ascending** order, the correct position of 4365 is:",
        options: ["6534, 5634, X, 3465", "5634, 3465, 6534, X", "3465, 6534, X, 5634", "3465, X, 5634, 6534"],
        answer: 3,
        explain: "Ascending means smallest to largest: 3465, 4365, 5634, 6534. X stands for 4365.",
        interact: [{ kind: "numberline", min: 3000, max: 7000, ticks: 0.01, labelStep: 1000, tol: 100, items: [["4365", 4365], ["6534", 6534], ["5634", 5634], ["3465", 3465]] }]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Ethan measured a desk for his gaming set. The length of the desk was 163 cm. Record this length using decimal notation to 2 decimal places.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 1.63, hint: "In metres: 1 metre is 100 cm, so 163 cm is 1 metre and 63 hundredths of a metre." },
          { kind: "input", fields: [{ label: "163 cm =", value: 1.63, suffix: "m" }] }
        ],
        cubes: { ops: ["÷"], solve: [{ t: "Think in metres", s: "100 cm = 1 m, so 163 cm = 1 m and 63 cm = 1.63 m." }, { t: "Divide by 100", s: "163 ÷ 100 = 1.63. Each digit moves two places to the right." }] },
        answer: "**1.63 m**"
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use an addition algorithm to solve: 396 + 527 =",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { H: 8, T: 11, O: 13 }, target: 923, need: "standard", hint: "396 + 527 together make 8 hundreds, 11 tens and 13 ones. Regroup the ones, then the tens." },
          { kind: "cells", cols: 4, msg: "Add the ones first: 6 + 7 = 13. Write 3 and carry 1 ten.", grid: [
            [null, 3, 9, 6],
            ["+", 5, 2, 7],
            [null, { v: 9 }, { v: 2 }, { v: 3 }]] }
        ],
        answer: "**923**. Ones: 6 + 7 = 13, write 3, carry 1 ten. Tens: 9 + 2 + 1 = 12, write 2, carry 1 hundred. Hundreds: 3 + 5 + 1 = 9."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Record the role of zero in each of the following decimals: 0.5, 5.0, 0.05",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 0.5, hint: "Use + and − to make 0.5, then 5.0, then 0.05." },
          { kind: "choose", rows: [
            { t: "In 0.5, the zero shows there are no", options: ["ones", "tenths", "hundredths"], a: 0 },
            { t: "In 5.0, the zero shows there are no", options: ["ones", "tenths", "hundredths"], a: 1 },
            { t: "In 0.05, the zeros show there are no", options: ["ones and tenths", "tenths and hundredths", "ones only"], a: 0 }] }
        ],
        answer: "The zero is a placeholder. 0.5: no ones. 5.0: no tenths. 0.05: no ones and no tenths."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Record everyday containers that have a capacity of: 250 mL, 1000 mL, 2000 mL",
        interact: [{ kind: "choose", rows: [
          { t: "a small juice box or cup", options: ["250 mL", "1000 mL", "2000 mL"], a: 0 },
          { t: "a carton of milk", options: ["250 mL", "1000 mL", "2000 mL"], a: 1 },
          { t: "a large bottle of soft drink", options: ["250 mL", "1000 mL", "2000 mL"], a: 2 }] }],
        answer: "Answers vary. 250 mL: a cup or small juice box. 1000 mL (1 L): a carton of milk. 2000 mL (2 L): a large soft-drink bottle or a big milk bottle."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "The following numbers are in **descending** order: 8574, 8374, 8754, 8453",
        answer: false,
        explain: "Descending means largest to smallest: 8754, 8574, 8453, 8374. Compare the hundreds digit, because the thousands are all 8.",
        interact: [{ kind: "order", items: ["8574", "8374", "8754", "8453"], answer: [2, 0, 3, 1] }]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Jordan was trying to explain to Jesse the mathematical term for the boundary around the football field. Explain the term Jordan is thinking of and draw an example.",
        interact: [
          { kind: "sides", view: [340, 220], label: "Football field", fill: "#7BC67B", poly: [[20, 20], [320, 20], [320, 200], [20, 200]] },
          { kind: "choose", rows: [{ t: "The term is", options: ["area", "perimeter", "volume", "angle"], a: 1 }] }
        ],
        answer: "**Perimeter**: the total distance around the outside of a shape. Tap each side of the field to trace its boundary."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use a subtraction algorithm to solve: 428 – 33 =",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 428, target: 395, need: "standard", hint: "Take away 3 ones, then 3 tens. There are only 2 tens, so break a hundred into 10 tens." },
          { kind: "cells", cols: 4, msg: "8 − 3 = 5 ones. 2 tens − 3 tens: trade a hundred for 10 tens, 12 − 3 = 9.", grid: [
            [null, 4, 2, 8],
            ["−", null, 3, 3],
            [null, { v: 3 }, { v: 9 }, { v: 5 }]] }
        ],
        answer: "**395**. Ones: 8 − 3 = 5. Tens: 2 − 3 can't be done, so trade 1 hundred for 10 tens: 12 − 3 = 9. Hundreds: 3."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "James records 0.6 cm and his friend Clara tells him that is the same as 6 cm. Is Clara right? Explain your thinking.",
        interact: [
          { kind: "marker", min: 0, max: 10, ticks: 1, minor: 10, label: "0.6 cm", hint: "Slide the pin to 0.6 cm, then to 6 cm. Are they the same?" },
          { kind: "choose", rows: [{ t: "Is Clara right?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "0.6 cm =", value: 6, suffix: "mm" }] }
        ],
        answer: "**No.** 0.6 cm is 6 tenths of a centimetre, which is 6 mm. 6 cm is 10 times longer (60 mm)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Record the area of the rectangle using square centimetres.",
        interact: [
          { kind: "areagrid", size: 44, cells: ["00000000", "01111110", "01111110", "01111110", "01111110", "01111110", "00000000"] },
          { kind: "input", fields: [{ label: "Area", value: 30, suffix: "cm²" }] }
        ],
        answer: "**30 cm²**. The rectangle covers 5 rows of 6 squares: 5 × 6 = 30.",
        explain: "Each grid square is taken as 1 square centimetre."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "The next number in **ascending order** is: 1457, 1563, 1637, ?",
        options: ["1756", "172", "1594", "777"],
        answer: 0,
        explain: "Ascending order goes from smallest to largest, so the next number must be larger than 1637. Only 1756 is. Note: on the slide, option C was 1794, which is also larger than 1637, so it has been changed to 1594 to give one correct answer.",
        interact: [{ kind: "numberline", min: 1400, max: 1800, ticks: 0.02, labelStep: 100, tol: 15, items: [["1457", 1457], ["1563", 1563], ["1637", 1637], ["1756", 1756], ["1594", 1594]] }]
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Record these analog times (clock A, then clock B) as a digital display and in words.",
        interact: [
          { kind: "clock", time: "6:10", drag: true, label: "A" },
          { kind: "clock", time: "1:50", drag: true, label: "B" },
          { kind: "input", fields: [{ label: "A digital", accept: ["6:10"], placeholder: "h:mm" }, { label: "B digital", accept: ["1:50"], placeholder: "h:mm" }] },
          { kind: "choose", rows: [
            { t: "A in words", options: ["ten past six", "ten to six", "six past ten"], a: 0 },
            { t: "B in words", options: ["ten past two", "ten to two", "two to ten"], a: 1 }] }
        ],
        answer: "A: **6:10**, ten past six · B: **1:50**, ten to two",
        explain: "On the slide, clock B's minute hand is drawn a little past the 10 and the hour hand is nearly at 2, so it is read as 1:50."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Lily has 460 chocolates to sell. She has sold 243. How many more chocolates does Lily need to sell? Communicate the strategy used to solve the problem.",
        interact: [
          { kind: "bar", whole: { v: 460, l: "460", n: "chocolates" }, parts: [{ v: 243, l: "243", n: "sold" }, { v: 217, l: "217", n: "still to sell", hide: true }] },
          { kind: "jumps", start: 243, end: 460, steps: [7, 10, 100, 200], hint: "Count on from 243 to 460." },
          { kind: "input", fields: [{ label: "Chocolates left to sell", value: 217 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "243 + 7 = 250, + 10 = 260, + 200 = 460. 7 + 10 + 200 = 217." }, { t: "Split the number", s: "460 − 200 = 260, − 40 = 220, − 3 = 217." }] },
        answer: "**217 chocolates**. 460 − 243 = 217."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the missing numbers in the pattern and explain your thinking. 6, 12, 18, __, __, 36, __, 48",
        interact: [
          { kind: "jumps", start: 0, steps: [6], hint: "Jump + 6 from 0 and watch where you land." },
          { kind: "input", fields: [{ label: "4th", value: 24 }, { label: "5th", value: 30 }, { label: "7th", value: 42 }] }
        ],
        answer: "6, 12, 18, **24**, **30**, 36, **42**, 48. The pattern counts in sixes (multiples of 6).",
        explain: "On the slide the last number is 42, which doesn't fit counting in sixes (the blank before it would have to be 42 too). It has been changed to 48."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record the time half an hour after the following times: 10:30 am, seven o'clock, a quarter past eight",
        interact: [
          { kind: "clock", time: "10:30", drag: true },
          { kind: "input", fields: [
            { label: "10:30 am + half an hour", accept: ["11:00", "11:00 am", "11 am", "11am", "eleven o'clock"], placeholder: "h:mm" },
            { label: "seven o'clock + half an hour", accept: ["7:30", "half past seven"], placeholder: "h:mm" },
            { label: "a quarter past eight + half an hour", accept: ["8:45", "quarter to nine", "a quarter to nine"], placeholder: "h:mm" }] }
        ],
        answer: "**11:00 am** · **7:30** (half past seven) · **8:45** (a quarter to nine). Half an hour is 30 minutes: the minute hand moves halfway around the clock."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "These numbers are in ascending order: 2640, 2604, 4040, 4004. Communicate your reasoning.",
        answer: false,
        explain: "2604 is smaller than 2640 (0 tens is less than 4 tens), and 4004 is smaller than 4040. Ascending order is 2604, 2640, 4004, 4040.",
        interact: [{ kind: "order", items: ["2640", "2604", "4040", "4004"], answer: [1, 0, 3, 2] }]
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "The time on a digital clock reads 7:34 pm. How many minutes are there until the next hour?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 1174, end: 1200, steps: [1, 6, 10, 20], hint: "Jump from 7:34 pm to 8:00 pm." },
          { kind: "input", fields: [{ label: "Minutes until 8:00 pm", value: 26 }] }
        ],
        answer: "**26 minutes**. 7:34 + 6 minutes = 7:40, + 20 minutes = 8:00. 60 − 34 = 26."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Ruby plans to walk 287 kilometres across the month to raise money for charity. She has already walked 48 kilometres. How many kilometres does Ruby have left to walk? Communicate your strategy.",
        interact: [
          { kind: "bar", whole: { v: 287, l: "287 km", n: "the whole walk" }, parts: [{ v: 48, l: "48 km", n: "walked" }, { v: 239, l: "239 km", n: "left", hide: true }] },
          { kind: "jumps", start: 287, min: 230, back: true, steps: [7, 8, 40, 50], hint: "Start at 287 and jump back 48." },
          { kind: "input", fields: [{ label: "Kilometres left", value: 239, suffix: "km" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Compensation", s: "287 − 50 = 237. I took away 2 too many, so add 2: 239 km." }, { t: "Count on", s: "48 + 2 = 50, + 200 = 250, + 37 = 287. 2 + 200 + 37 = 239 km." }] },
        answer: "**239 km**. 287 − 48 = 239."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record all multiplication and division facts from this array.",
        interact: [
          { kind: "array", rows: 2, cols: 6, showTotal: true, hint: "This is 2 rows of 6. Rotate it to see 6 rows of 2." },
          { kind: "input", fields: [{ label: "2 × 6 =", value: 12 }, { label: "6 × 2 =", value: 12 }, { label: "12 ÷ 2 =", value: 6 }, { label: "12 ÷ 6 =", value: 2 }] }
        ],
        answer: "2 × 6 = 12 · 6 × 2 = 12 · 12 ÷ 2 = 6 · 12 ÷ 6 = 2"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shape",
        prompt: "Which capital letters of the alphabet have one line of symmetry?",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u23-letters.png" },
          { kind: "select", hint: "Tap every letter with exactly one line of symmetry.", items: [["A", true], ["B", true], ["C", true], ["D", true], ["E", true], ["F", false], ["G", false], ["H", false], ["I", false], ["J", false], ["K", true], ["L", false], ["M", true], ["N", false], ["O", false], ["P", false], ["Q", false], ["R", false], ["S", false], ["T", true], ["U", true], ["V", true], ["W", true], ["X", false], ["Y", true], ["Z", false]] }
        ],
        answer: "**A, B, C, D, E, K, M, T, U, V, W, Y**. A, M, T, U, V, W and Y have a vertical line. B, C, D, E and K have a horizontal line. H, I, O and X have two lines, so they don't count. F, G, J, L, N, P, Q, R, S and Z have none.",
        explain: "This uses the letter shapes on the slide (a plain sans-serif font). In some fonts K or B are not quite symmetrical."
      }
    ]
  ]
});
