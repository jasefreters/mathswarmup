/*
  Stage 3 Year B, Unit 22 — Review of learning (Term 1, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 1, ls: 2, unit: 22,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 22 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Using estimating and rounding, a reasonable solution to 451 − 49 is:",
        options: ["450", "500", "400", "550"],
        answer: 2,
        explain: "451 is about 450 and 49 is about 50. 450 − 50 = 400. (The exact answer is 402.)",
        interact: [{ kind: "marker", min: 0, max: 100, divs: 10, majorEvery: 5, labels: [0, 50, 100], label: "49", hint: "Slide the pin to 49. Is it closer to 0, 50 or 100?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Alice has 25 banksias and 15 bottlebrushes in her garden. She picks 5 of the flowers. How many flowers are left in her garden? Communicate your strategy.",
        interact: [
          { kind: "jumps", start: 25, min: 0, max: 45, back: true, steps: [5, 10, 15], hint: "Start at 25. Add the bottlebrushes, then take away the 5 she picked." },
          { kind: "input", fields: [{ label: "Flowers left", value: 35 }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "25 + 15 = 40 flowers. 40 − 5 = 35 flowers left." }, { t: "Subtract first", s: "25 − 5 = 20 banksias, then 20 + 15 = 35. The order of the jumps doesn't change the answer." }] },
        answer: "**35 flowers**. 25 + 15 = 40, and 40 − 5 = 35."
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "How many multiples of 1000 are in 1 000 000? How many multiples of 100 are in 1 000 000?",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 1000000, hint: "Break the million apart. How many thousands make 1 million? How many hundreds?" },
          { kind: "input", fields: [{ label: "Thousands in 1 million", value: 1000 }, { label: "Hundreds in 1 million", value: 10000 }] }
        ],
        answer: "**1000** thousands (1000 × 1000 = 1 000 000) and **10 000** hundreds (10 000 × 100 = 1 000 000)."
      },
      {
        type: "sr", focus: "Represents numbers B: Whole numbers",
        prompt: "Use a number line to represent the integers from −6 to 6.",
        interact: [{ kind: "numberline", min: -6, max: 6, ticks: 1, labelStep: 6, tol: 0.4, items: [["−5", -5], ["−3", -3], ["−1", -1], ["1", 1], ["2", 2], ["4", 4]] }],
        answer: "−6, −5, −4, −3, −2, −1, 0, 1, 2, 3, 4, 5, 6. Negative integers are to the left of zero and positive integers to the right, equally spaced."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Lucy gets on the school bus at 07:50 and arrives at school at 8:45 am. What is the duration of her bus trip to school?",
        interact: [
          { kind: "jumps", time: "24", start: 470, end: 525, steps: [5, 10, 15, 60], hint: "Jump to 08:00 first, then on to 08:45." },
          { kind: "input", fields: [{ label: "Duration", value: 55, suffix: "minutes" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Jump to the hour", s: "07:50 + 10 min = 08:00, + 45 min = 08:45. 10 + 45 = 55 minutes." }, { t: "Back from the hour", s: "07:50 to 08:50 is 1 hour. 08:45 is 5 minutes earlier: 60 − 5 = 55 minutes." }] },
        answer: "**55 minutes**. 07:50 is the same as 7:50 am."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Tommy used estimation to solve 57 + 541 = about 600. His estimation is a reasonable solution.",
        answer: true,
        explain: "57 is about 60 and 541 is about 540. 60 + 540 = 600. (The exact answer is 598.)",
        interact: [{ kind: "marker", min: 500, max: 600, divs: 10, majorEvery: 5, labels: [500, 550, 600], label: "541", hint: "Slide the pin to 541. Which ten is it closest to?" }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Harry spent $1313 on concert tickets. He decided to sell his Level 1 ticket and two of his Level 4 tickets. How much did he end up spending on tickets?",
        table: [["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6"], ["$119", "$159", "$199", "$239", "$309", "$379"]],
        interact: [
          { kind: "jumps", start: 1313, min: 600, back: true, steps: [119, 239], hint: "Start at $1313. Jump back for each ticket he sold." },
          { kind: "input", fields: [{ label: "He spent", prefix: "$", value: 716 }] }
        ],
        cubes: { ops: ["−"], also: ["×", "+"], solve: [{ t: "Take away each ticket", s: "$1313 − $119 = $1194. $1194 − $239 = $955. $955 − $239 = $716." }, { t: "Total the sales first", s: "$119 + 2 × $239 = $119 + $478 = $597. $1313 − $597 = $716." }] },
        answer: "**$716**. He sold $119 + $239 + $239 = $597 of tickets, and $1313 − $597 = $716."
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Partition 407 302 015 in non-standard forms.",
        interact: [{ kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 407302015, target: 407302015, need: "nonstandard" },
          { kind: "expr", count: 1, target: 407302015, placeholder: "e.g. 407 000 000 + 302 015", mustUse: { re: "[1-9][\\d ]*[1-9]", msg: "That's the standard partition. Group some places together, like 302 015." }, sample: ["407 000 000 + 302 015"] }],
        answer: "Answers vary, for example 407 000 000 + 302 015, or 400 000 000 + 7 302 000 + 15, or 4073 hundred thousands + 2015.",
        explain: "Break a counter on the chart to make a non-standard partition, then record one as a number sentence. It must add up to 407 302 015."
      },
      {
        type: "sr", focus: "Represents numbers B: Whole numbers",
        prompt: "Ava had 17 points in a game. She lost 28 points. What is her new score? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 17, min: -15, max: 20, back: true, steps: [1, 10, 17], hint: "Start at 17. Jump back 17 to reach zero, then jump back the rest." },
          { kind: "input", fields: [{ label: "New score", value: -11 }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Jump through zero", s: "17 − 17 = 0. She still has 28 − 17 = 11 points to lose, so 0 − 11 = −11." }, { t: "Find the difference", s: "28 − 17 = 11. She lost more than she had, so her score is 11 below zero: −11." }] },
        answer: "**−11**. Losing 17 points takes her to 0, and the other 11 points take her below zero."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Using the Cartesian plane, move right 4 units and down 2 from the start point. Record your final position.",
        interact: [
          { kind: "plane", range: [0, 8, 0, 8], points: [{ l: "Start", x: 3, y: 4 }], hint: "Tap the start point to read it. Count right 4, then down 2, and tap that point to plot it." },
          { kind: "input", fields: [{ label: "Start", accept: ["(3, 4)"], placeholder: "(x, y)" }, { label: "Final position", accept: ["(7, 2)"], placeholder: "(x, y)" }] }
        ],
        answer: "Start at **(3, 4)**. Right 4 makes x = 7, and down 2 makes y = 2. The final position is **(7, 2)**."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which rounded numbers are best to solve 45 873 + 62 491?",
        display: "45 873 + 62 491",
        options: ["35 000 + 61 000", "43 000 + 60 000", "45 000 + 63 000", "46 000 + 62 000"],
        answer: 3,
        explain: "To the nearest thousand, 45 873 rounds up to 46 000 (873 is more than 500) and 62 491 rounds down to 62 000 (491 is less than 500).",
        interact: [{ kind: "marker", min: 45000, max: 46000, divs: 10, majorEvery: 5, labels: [45000, 45500, 46000], label: "45 873", hint: "Slide the pin to 45 873. Is it before or after halfway?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Katie has $40.00 for groceries. She buys a box of ice creams for $15.95, a bottle of milk for $6.95 and a loaf of bread for $7.50. Use rounding to estimate the total cost and how much Katie has left.",
        interact: [
          { kind: "shop", budget: 40, pick: 3, items: [["box of ice creams", 15.95], ["bottle of milk", 6.95], ["loaf of bread", 7.5]], hint: "Tap the three items into the basket. Estimate first, then show the total to check." },
          { kind: "input", fields: [{ label: "Estimated total", prefix: "$", min: 30, max: 31 }, { label: "Estimated money left", prefix: "$", min: 9, max: 10 }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Round to the nearest dollar", s: "$16 + $7 + $8 = $31 (or $7.50 → $7: $30). $40 − $31 = about $9 left." }, { t: "Check with the exact amounts", s: "$15.95 + $6.95 + $7.50 = $30.40. $40.00 − $30.40 = $9.60." }] },
        answer: "About **$31** (or $30), leaving about **$9** (or $10). Exactly: $30.40, with $9.60 left."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Order these decimals from smallest to largest: 0.4, 0.04, 0.404, 0.14",
        interact: [
          { kind: "numberline", min: 0, max: 0.5, ticks: 20, labelStep: 0.1, tol: 0.012, items: [["0.4", 0.4], ["0.04", 0.04], ["0.404", 0.404], ["0.14", 0.14]] },
          { kind: "order", items: ["0.4", "0.04", "0.404", "0.14"], answer: [1, 3, 0, 2] }
        ],
        answer: "0.04, 0.14, 0.4, 0.404. Compare tenths first: 0, 1, 4, 4. Then 0.404 has 4 thousandths more than 0.4.",
        explain: "The slide doesn't say ascending or descending, so this asks for smallest to largest."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Round each number to the nearest hundred to estimate the answer: 311 + 288 + 190 + 301 =",
        interact: [
          { kind: "input", fields: [{ label: "311 →", value: 300 }, { label: "288 →", value: 300 }, { label: "190 →", value: 200 }, { label: "301 →", value: 300 }] },
          { kind: "input", fields: [{ label: "Estimate", value: 1100 }] }
        ],
        answer: "300 + 300 + 200 + 300 = **1100**. (The exact answer is 1090.)"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Identify and classify the triangles.",
        interact: [
          { kind: "corners", view: [1060, 380], r: 36, q: 50, hit: 28, shapes: [
            { p: [[12, 96], [410, 298], [110, 298]], fill: "#C86DE6", l: "A", lx: 235, ly: 262 },
            { p: [[532.7, 61.5], [709.5, 238.3], [468, 303]], fill: "#3BB6FF", l: "B" },
            { p: [[860, 16], [1036, 364], [774, 278]], fill: "#1B5E37", l: "C" }] },
          { kind: "choose", rows: [
            { t: "A: angles", options: ["acute", "right", "obtuse"], a: 2 }, { t: "A: sides", options: ["equilateral", "isosceles", "scalene"], a: 2 },
            { t: "B: angles", options: ["acute", "right", "obtuse"], a: 0 }, { t: "B: sides", options: ["equilateral", "isosceles", "scalene"], a: 0 },
            { t: "C: angles", options: ["acute", "right", "obtuse"], a: 1 }, { t: "C: sides", options: ["equilateral", "isosceles", "scalene"], a: 1 }] }
        ],
        answer: "A: **obtuse-angled scalene** triangle. B: **equilateral** (acute-angled) triangle. C: **right-angled isosceles** triangle.",
        explain: "Measured from the slide picture: B's angles are all about 60° with equal sides, and C has a right angle with two equal sides."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "The question is 42 000 + 5 123 + 246. The answer is 47 369. Communicate your thinking.",
        answer: true,
        explain: "42 000 + 5 000 = 47 000, + 123 = 47 123, + 246 = 47 369.",
        interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 0, hint: "Build each number in the chart, then read the total." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Choose an efficient strategy to solve 3988 + 855. Communicate your strategy.",
        interact: [
          { kind: "jumps", start: 3988, steps: [12, 800, 43, 855], hint: "Make a friendly number: jump + 12 to reach 4000, then add the rest of 855." },
          { kind: "input", fields: [{ label: "3988 + 855 =", value: 4843 }] }
        ],
        answer: "**4843**. Bridge to 4000: 3988 + 12 = 4000, and 855 − 12 = 843, so 4000 + 843 = 4843. Or round and adjust: 4000 + 855 − 12 = 4843."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Record in ascending order: 25.56, 23.46, 22.99, 25.06",
        interact: [
          { kind: "numberline", min: 22, max: 26, ticks: 10, labelStep: 1, tol: 0.06, items: [["25.56", 25.56], ["23.46", 23.46], ["22.99", 22.99], ["25.06", 25.06]] },
          { kind: "order", items: ["25.56", "23.46", "22.99", "25.06"], answer: [2, 1, 3, 0] }
        ],
        answer: "22.99, 23.46, 25.06, 25.56. Compare the ones first, then the tenths."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Round each number to the nearest hundred to estimate the answer: 1227 + 1486",
        interact: [
          { kind: "marker", min: 1400, max: 1500, divs: 10, majorEvery: 5, labels: [1400, 1450, 1500], target: 1486, tol: 3, label: "1486", hint: "Slide the pin to 1486. Is it closer to 1400 or 1500?", msg: "Count on in tens from 1400: 1410, 1420 … 1480, then a bit more." },
          { kind: "input", fields: [{ label: "1227 →", value: 1200 }, { label: "1486 →", value: 1500 }, { label: "Estimate", value: 2700 }] }
        ],
        answer: "1200 + 1500 = **2700**. (The exact answer is 2713.)"
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Name these angles and record how many degrees each angle has.",
        interact: [
          { kind: "angle", names: true, reflex: true, degrees: true, start: 90, label: "Explore: drag the arm to make each angle." },
          { kind: "choose", rows: [
            { t: "A (a square corner)", options: ["acute", "right", "straight", "revolution"], a: 1 },
            { t: "B (a straight line)", options: ["acute", "right", "straight", "revolution"], a: 2 },
            { t: "C (a full turn)", options: ["acute", "right", "straight", "revolution"], a: 3 }] },
          { kind: "input", fields: [{ label: "A", value: 90, suffix: "°" }, { label: "B", value: 180, suffix: "°" }, { label: "C", value: 360, suffix: "°" }] }
        ],
        answer: "A: **right angle, 90°** · B: **straight angle, 180°** · C: **revolution (full turn), 360°**",
        explain: "The pictures on the slide show a square corner (A), a straight line (B) and a full circle (C)."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The **product** of 8 and 7 is:",
        options: ["15", "1", "56", "70"],
        answer: 2,
        explain: "Product means multiply: 8 × 7 = 56. 15 is the sum and 1 is the difference.",
        interact: [{ kind: "array", rows: 8, cols: 7, showTotal: true, hint: "8 rows of 7. Rotate it to see 7 rows of 8." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Tilly works at a Sunday market stall and sold $367 worth of goods. The stall owner pays a fee of $50 and pays Tilly $60. After costs, what is the stall owner's profit?",
        interact: [
          { kind: "jumps", start: 367, min: 200, back: true, steps: [10, 50, 60], hint: "Start at $367. Jump back for each cost." },
          { kind: "input", fields: [{ label: "Profit", prefix: "$", value: 257 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Subtract each cost", s: "$367 − $50 = $317. $317 − $60 = $257." }, { t: "Add the costs first", s: "$50 + $60 = $110. $367 − $110 = $257." }] },
        answer: "**$257**. The costs are $50 + $60 = $110, and $367 − $110 = $257."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Record the role of zero in each of these numbers: 2.0, 1.05, 1.077",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 2, hint: "2.0" },
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 1.05, hint: "1.05" },
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 1.077, hint: "1.077" },
          { kind: "choose", rows: [
            { t: "2.0: can we leave the zero out without changing the value?", options: ["Yes", "No"], a: 0 },
            { t: "1.05: can we leave the zero out?", options: ["Yes", "No"], a: 1 },
            { t: "1.077: can we leave the zero out?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "In **2.0** the zero shows there are no tenths; 2.0 = 2. In **1.05** and **1.077** the zero is a placeholder in the tenths place. Without it, 1.05 would become 1.5 and 1.077 would become 1.77."
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals and percentages",
        prompt: "Phoenix has $300 for the weekend. Half of his money is for accommodation. How much of his money will he have left? What percentage of the total amount of money is that?",
        interact: [
          { kind: "shade", parts: 2, pct: true, each: 150, money: true, hint: "The strip is his $300. Shade the part he spends on accommodation." },
          { kind: "input", fields: [{ label: "Money left", prefix: "$", value: 150 }, { label: "Percentage", value: 50, suffix: "%" }] }
        ],
        cubes: { ops: ["÷"], also: ["−"], solve: [{ t: "Halve it", s: "Half of $300 = $300 ÷ 2 = $150 for accommodation. $300 − $150 = $150 left." }, { t: "Think percentages", s: "Half is 50%. If 50% is spent, 100% − 50% = 50% is left, which is $150." }] },
        answer: "**$150** left, which is **50%** of his money."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Create a survey question to collect data about recess activities that would use a scale of 1 to 5, with 1 = I don't like to 5 = I like a lot.",
        interact: [
          { kind: "choose", rows: [{ t: "Try a sample: How much do you like playing handball at recess?", options: ["1", "2", "3", "4", "5"], a: [0, 1, 2, 3, 4] }] },
          { kind: "reveal", items: [["Example survey question", "On a scale of 1 to 5, how much do you like playing handball at recess? (1 = I don't like it, 5 = I like it a lot)"]] }
        ],
        answer: "Answers vary. For example: \"On a scale of 1 to 5, how much do you like playing handball at recess?\" Name one activity per question so the answers can be compared."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Different arrays that represent 12 can be modelled as: 2 by 6, 3 by 4, 12 by 1",
        answer: true,
        explain: "2 × 6 = 12, 3 × 4 = 12 and 12 × 1 = 12. Each array has 12 squares in all.",
        interact: [{ kind: "array", rows: 2, cols: 6, max: 12, showTotal: true, hint: "Change the rows and columns to build 3 by 4 and 12 by 1." }]
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Use place value to partition 6.82",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 6.82 },
          { kind: "input", fields: [{ label: "6.82 =", value: 6 }, { label: "+", value: 0.8 }, { label: "+", value: 0.02 }] }
        ],
        answer: "**6 + 0.8 + 0.02**: 6 ones, 8 tenths and 2 hundredths. Non-standard: 5 + 1.82, or 68 tenths + 2 hundredths."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use a place value chart, number line or other model to show how to solve 6.82 − 3.54",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 6.82, target: 3.28, hint: "Start with 6.82. Take away 3 ones, 5 tenths and 4 hundredths. Break a tenth if you need more hundredths." },
          { kind: "input", fields: [{ label: "6.82 − 3.54 =", value: 3.28 }] }
        ],
        answer: "**3.28**. There aren't enough hundredths to take away 4, so break 1 tenth into 10 hundredths: 12 − 4 = 8 hundredths, 7 − 5 = 2 tenths, 6 − 3 = 3 ones."
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals and percentages",
        prompt: "There's a sale! 25% off. The jacket is originally $70.00. How much is the jacket after the discount?",
        interact: [
          { kind: "shade", parts: 4, pct: true, each: 17.5, money: true, hint: "The strip is the $70 jacket, cut into quarters. Shade the 25% discount." },
          { kind: "input", fields: [{ label: "Sale price", prefix: "$", value: 52.5 }] }
        ],
        cubes: { ops: ["−"], also: ["÷", "×"], solve: [{ t: "Find 25% first", s: "25% is a quarter. $70 ÷ 4 = $17.50 off. $70 − $17.50 = $52.50." }, { t: "Pay 75%", s: "25% off means paying 75%, which is three quarters: 3 × $17.50 = $52.50." }] },
        answer: "**$52.50**. 25% of $70 is $17.50, and $70 − $17.50 = $52.50."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "The time is now 16:10. If it takes 15 minutes to get home, record the time you will arrive home in 12-hour notation.",
        interact: [
          { kind: "jumps", time: "24", start: 970, steps: [5, 10, 15], hint: "Start at 16:10 and jump 15 minutes." },
          { kind: "clock", time: "4:10", h24: true, drag: true },
          { kind: "input", fields: [{ label: "Arrive home", accept: ["4:25 pm"], placeholder: "h:mm am/pm" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Add, then convert", s: "16:10 + 15 minutes = 16:25. 16 − 12 = 4, so 16:25 is 4:25 pm." }, { t: "Convert, then add", s: "16:10 is 4:10 pm. 4:10 pm + 15 minutes = 4:25 pm." }] },
        answer: "**4:25 pm**. 16:10 + 15 minutes = 16:25, and 16:25 in 12-hour time is 4:25 pm."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which number is **not** a factor of 63?",
        options: ["9", "7", "63", "12"],
        answer: 3,
        explain: "The factors of 63 are 1, 3, 7, 9, 21 and 63. 12 does not divide 63 evenly (63 ÷ 12 = 5 remainder 3).",
        interact: [{ kind: "numchart", from: 1, to: 63, answer: [1, 3, 7, 9, 21, 63], hint: "Tap the factors of 63 in pairs: 1 × 63, 3 × 21, 7 × 9." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use a number line to solve: A baker poured 1.25 L of milk, 0.75 L of water, and 0.375 L of oil into a large bowl. What is the combined volume of liquid in the bowl?",
        interact: [
          { kind: "jumps", start: 1.25, min: 0, max: 3, steps: [0.75, 0.375, 0.25, 0.125], hint: "Start at 1.25 L. Jump + 0.75 to a whole number first, then + 0.375." },
          { kind: "input", fields: [{ label: "Combined volume", value: 2.375, suffix: "L" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Make a whole first", s: "1.25 + 0.75 = 2 L. 2 + 0.375 = 2.375 L." }, { t: "Line up the decimal points", s: "1.250 + 0.750 + 0.375 = 2.375 L." }] },
        answer: "**2.375 L**. 1.25 + 0.75 = 2, and 2 + 0.375 = 2.375."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Record in descending order: 0.54, 5.40, 5.04, 0.45",
        interact: [
          { kind: "numberline", min: 0, max: 6, ticks: 10, labelStep: 1, tol: 0.05, items: [["0.54", 0.54], ["5.40", 5.4], ["5.04", 5.04], ["0.45", 0.45]] },
          { kind: "order", items: ["0.54", "5.40", "5.04", "0.45"], answer: [1, 2, 0, 3] }
        ],
        answer: "5.40, 5.04, 0.54, 0.45. Descending means largest to smallest. Compare the ones, then the tenths."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the most efficient strategy to solve 325 × 67. Communicate your strategy.",
        interact: [
          { kind: "expr", count: 2, target: 21775, placeholder: "e.g. 325 x 60 + 325 x 7", mustUse: { re: "[+-]", msg: "Split one of the numbers into parts, then add or subtract the parts." }, sample: ["325 x 60 + 325 x 7", "300 x 67 + 25 x 67"] },
          { kind: "input", fields: [{ label: "325 × 67 =", value: 21775 }] }
        ],
        answer: "**21 775**. Split 67: 325 × 60 = 19 500 and 325 × 7 = 2275, so 19 500 + 2275 = 21 775. Or split 325: 300 × 67 = 20 100 and 25 × 67 = 1675, so 20 100 + 1675 = 21 775."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Fadi chose to use a column graph to record the weather over a month. Is this the best type of graph to use? Communicate your thinking.",
        interact: [{ kind: "choose", rows: [
          { t: "To show how many sunny, cloudy and rainy days there were", options: ["column graph", "line graph", "pie chart"], a: 0 },
          { t: "To show how the temperature changed each day", options: ["column graph", "line graph", "pie chart"], a: 1 }] }],
        answer: "It depends on the data. A column graph is a good choice for counting the number of sunny, cloudy and rainy days. To show how the temperature changed over the month, a line graph is better because it shows change over time."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "36 has 4 factors.",
        answer: false,
        explain: "36 has 9 factors: 1, 2, 3, 4, 6, 9, 12, 18 and 36. Find them in pairs: 1 × 36, 2 × 18, 3 × 12, 4 × 9 and 6 × 6.",
        interact: [{ kind: "numchart", from: 1, to: 36, answer: [1, 2, 3, 4, 6, 9, 12, 18, 36], hint: "Tap the factors of 36 in pairs: 1 × 36, 2 × 18 …" }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use a bar model to solve: The Tran family need to drive 854 km. On the first day they drove 154.6 km. On the second day they drove 97.8 km. How far did they have left to drive?",
        interact: [
          { kind: "jumps", start: 854, min: 550, back: true, steps: [154.6, 97.8, 100], hint: "Start at 854 km. Jump back for each day of driving." },
          { kind: "bar", whole: { v: 854, l: "854 km", n: "whole trip" }, parts: [{ v: 154.6, l: "154.6 km", n: "day 1" }, { v: 97.8, l: "97.8 km", n: "day 2" }, { v: 601.6, l: "601.6 km", n: "left", hide: true }] },
          { kind: "input", fields: [{ label: "Distance left", value: 601.6, suffix: "km" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Bar model", s: "Draw a bar for 854 km, split into day 1 (154.6), day 2 (97.8) and the unknown part. 154.6 + 97.8 = 252.4. 854 − 252.4 = 601.6 km." }, { t: "Subtract each day", s: "854 − 154.6 = 699.4. 699.4 − 97.8 = 601.6 km." }] },
        answer: "**601.6 km**. They drove 154.6 + 97.8 = 252.4 km, and 854 − 252.4 = 601.6 km."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Compare and place these decimal numbers in descending order: 0.65, 0.847, 0.3",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 20, labelStep: 0.5, tol: 0.03, items: [["0.65", 0.65], ["0.847", 0.847], ["0.3", 0.3]] },
          { kind: "order", items: ["0.65", "0.847", "0.3"], answer: [1, 0, 2] }
        ],
        answer: "0.847, 0.65, 0.3. Compare the tenths: 8, 6, 3."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record 15 ÷ 5 as a fraction.",
        interact: [
          { kind: "pack", mode: "share", n: 5, total: 15, thing: "counters", label: "group", hint: "Share 15 counters into 5 groups." },
          { kind: "input", fields: [{ label: "15 ÷ 5 =", accept: ["15/5"], placeholder: "a/b" }, { label: "which equals", value: 3 }] }
        ],
        answer: "[15/5], which equals **3**. The dividend is the numerator and the divisor is the denominator."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What is the total number of people who like comedy?",
        interact: [{ kind: "bargraph", max: 25, step: 5, minor: 1, ylabel: "Number of People", xlabel: "Movie Genre", label: "Bar graph of favourite movie genres for males and females",
          series: [{ l: "Males", c: "#BDBDBD" }, { l: "Female", c: "#111111" }],
          groups: [{ l: "Action", v: [11.7, 13] }, { l: "Comedy", v: [17.3, 23] }, { l: "Science Fiction", v: [12.5, 16.7] }] },
          { kind: "input", fields: [{ label: "Males", min: 17, max: 17.5 }, { label: "Females", value: 23 }, { label: "Total", min: 40, max: 40.5 }] }],
        answer: "About **40 people**: about 17 males and 23 females.",
        explain: "The males' comedy bar sits just above 17, so the total is read as 17 + 23 = 40."
      }
    ]
  ]
});
