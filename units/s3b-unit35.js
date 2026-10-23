/*
  Stage 3 Year B, Unit 35 — Review of learning (Term 3, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 3, ls: 5, unit: 35,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 35 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "2.09 + 2.45",
        options: ["4.45", "4.54", "4.44", "5.06"],
        answer: 1,
        explain: "2 + 2 = 4, and 0.09 + 0.45 = 0.54. So 2.09 + 2.45 = 4.54.",
        interact: [{ kind: "jumps", start: 2.09, steps: [2, 0.4, 0.05], hint: "Start at 2.09. Jump on 2, then 0.4, then 0.05." }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "4.578 What is the value of the digit in the a) hundredths place? b) tenths place? c) thousandths place?",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 4.578, hint: "Find each column. The value is the digit times the column's size." },
          { kind: "input", fields: [{ label: "a) Hundredths", value: 0.07 }, { label: "b) Tenths", value: 0.5 }, { label: "c) Thousandths", value: 0.008 }] }
        ],
        answer: "a) The 7 is worth **0.07** (7 hundredths). b) The 5 is worth **0.5** (5 tenths). c) The 8 is worth **0.008** (8 thousandths)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "10 times 100 metres = ___ kilometres.",
        interact: [
          { kind: "jumps", start: 0, end: 1000, steps: [100], hint: "Jump 100 metres at a time. How many jumps reach 1000 metres?" },
          { kind: "input", fields: [{ label: "10 × 100 m", value: 1, suffix: "km" }] }
        ],
        answer: "**1 kilometre**. 10 × 100 m = 1000 m, and 1000 m = 1 km."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Solve 9 × 500 using an efficient strategy. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 45, shift: true, hint: "9 × 5 = 45. Now multiply by 100: shift the digits 2 places to the left." },
          { kind: "input", fields: [{ label: "9 × 500 =", value: 4500 }] }
        ],
        answer: "**4500**. 9 × 5 = 45, and 9 × 500 is 100 times bigger: 45 × 100 = 4500. Or 10 × 500 = 5000, take away one 500: 4500."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "What would be the expected frequency of landing on 1? What would be the expected frequency of landing on 5? Steph spun the spinner 10 times. She landed on 1 four times and 5 two times. How does the observed frequency compare to the expected frequency?",
        img: "u35-spinner.png",
        interact: [
          { kind: "shade", parts: 6, hint: "Each part is one of the 6 equal triangles. Shade the triangles that make 1." },
          { kind: "choose", rows: [
            { t: "Chance of landing on 1", options: ["[1/6]", "[2/6] = [1/3]", "[1/5]", "[1/2]"], a: 1 },
            { t: "Chance of landing on 5", options: ["[1/6]", "[1/3]", "[1/5]", "[1/2]"], a: 0 },
            { t: "Expected 1s in 10 spins", options: ["about 2", "about 3 (3[1/3])", "about 5"], a: 1 },
            { t: "Expected 5s in 10 spins", options: ["about 1", "about 2 (1[2/3])", "about 4"], a: 1 },
            { t: "Steph's results are", options: ["a little more than expected for both", "exactly what was expected", "much less than expected"], a: 0 }] }
        ],
        answer: "The spinner has 6 equal triangles. **1 covers 2 of them**, so we expect 1 on [2/6] = **[1/3]** of spins: about **3** in 10 spins (3[1/3]). **5 covers 1 triangle**, so we expect [1/6] of spins: about **2** in 10 (1[2/3]). Steph's 4 ones and 2 fives are **a little more** than expected, which is normal for only 10 random spins.",
        explain: "The slide doesn't say how many spins to use for the expected frequency. It uses the 10 spins from the third part. The 1 section is the two left triangles with no line between them."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "2.25 − 4.50 = 6.75 Communicate your reasoning.",
        answer: false,
        explain: "6.75 is what you get when you add: 2.25 + 4.50 = 6.75. Taking away 4.50 from 2.25 can't give a bigger number. (4.50 − 2.25 = 2.25.)",
        interact: [{ kind: "jumps", start: 2.25, steps: [4, 0.5], back: true, hint: "Start at 2.25. Jump back 4.5. Do you land on 6.75?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Solve 6.105 − 2.02 Communicate your strategy.",
        interact: [
          { kind: "jumps", start: 6.105, steps: [2, 0.02], back: true, hint: "Start at 6.105. Jump back 2, then back 0.02." },
          { kind: "input", fields: [{ label: "6.105 − 2.02 =", value: 4.085 }] }
        ],
        answer: "**4.085**. 6.105 − 2 = 4.105, then 4.105 − 0.02 = 4.085. Line up the places: 6.105 − 2.020."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Which 2 rectangles have the same perimeter? Each grid square is 1 unit. Communicate your reasoning.",
        interact: [
          { kind: "sides", view: [520, 130], label: "Rectangle A, 4 units by 3 units", fill: "#FFFFFF", poly: [[200, 50], [300, 50], [300, 125], [200, 125]],
            dims: [{ from: [200, 32], to: [300, 32] }, { from: [318, 50], to: [318, 125] }],
            labels: [{ x: 250, y: 22, t: "A: 4 units" }, { x: 326, y: 96, t: "3", anchor: "start" }] },
          { kind: "sides", view: [520, 95], label: "Rectangle B, 12 units by 1 unit", fill: "#FFFFFF", poly: [[110, 50], [410, 50], [410, 75], [110, 75]],
            dims: [{ from: [110, 32], to: [410, 32] }, { from: [428, 50], to: [428, 75] }],
            labels: [{ x: 260, y: 22, t: "B: 12 units" }, { x: 436, y: 70, t: "1", anchor: "start" }] },
          { kind: "sides", view: [520, 110], label: "Rectangle C, 5 units by 2 units", fill: "#FFFFFF", poly: [[198, 50], [323, 50], [323, 100], [198, 100]],
            dims: [{ from: [198, 32], to: [323, 32] }, { from: [341, 50], to: [341, 100] }],
            labels: [{ x: 260, y: 22, t: "C: 5 units" }, { x: 349, y: 83, t: "2", anchor: "start" }] },
          { kind: "select", hint: "Tap the 2 rectangles with the same perimeter.", items: [["A", true], ["B", false], ["C", true]] }
        ],
        answer: "**A and C**. A: 4 + 3 + 4 + 3 = 14 units. C: 5 + 2 + 5 + 2 = 14 units. B is much longer: 1 + 12 + 1 + 12 = 26 units.",
        explain: "On the slide's grid, A is 4 × 3, B is 1 × 12 (drawn upright) and C is 6 × 2, so no two perimeters match (14, 26, 16). C has been made 5 units by 2 units so that exactly one pair matches, and B is drawn lying down to fit the screen."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "A school uses 12 chairs for 3 tables at an event. How many chairs are needed for 15 tables?",
        interact: [
          { kind: "array", rows: 3, cols: 4, hint: "Each row is one table. 3 rows of 4 is 12 chairs. Add rows until there are 15 tables." },
          { kind: "input", fields: [{ label: "Chairs for 15 tables", value: 60 }] }
        ],
        cubes: { ops: ["÷", "×"], solve: [{ t: "Chairs at one table", s: "12 ÷ 3 = 4 chairs a table. 15 × 4 = 60 chairs." }, { t: "Scale up", s: "15 tables is 5 times 3 tables, so 5 × 12 = 60 chairs." }] },
        answer: "**60 chairs**. 12 ÷ 3 = 4 chairs at each table, and 15 × 4 = 60."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Is the game 'Scissors, Paper, Rock' fair? Communicate your reasoning.",
        img: "u35-rps.png",
        interact: [{ kind: "choose", rows: [
          { t: "Is the game fair?", options: ["Yes", "No"], a: 0 },
          { t: "Why?", options: ["Each choice beats one and loses to one, so both players have the same chance of winning", "Rock always wins", "The first player is more likely to win"], a: 0 }] }],
        answer: "**Yes, it is fair.** Rock beats scissors, scissors beats paper and paper beats rock. Each choice beats one and loses to one, so each player has the same chance: [1/3] win, [1/3] lose, [1/3] draw.",
        explain: "This assumes both players choose at random. A player who spots a pattern in the other's choices can do better."
      }
    ],
    // Review 3
    [
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Which number sentence matches this bar model? You may choose more than one answer.",
        interact: [
          { kind: "bar", whole: { v: 6.25, l: "6.25" }, parts: [{ v: 2.5, l: "2.5" }, { v: 3.75, l: "3.75" }] },
          { kind: "select", hint: "Tap every number sentence that matches the bar model.", items: [
            ["A: 6.25 − 2.5 = 3.75", true], ["B: 3.75 − 2.5 = 6.25", false], ["C: 6.25 + 2.5 = 3.75", false], ["D: 2.5 + 3.75 = 6.25", true]] }
        ],
        answer: "**A** and **D**. The parts 2.5 and 3.75 add to the whole, 6.25 (D). Taking one part from the whole leaves the other part (A)."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "A garden bed measures 6.54 metres and is extended by 2.99 metres. What is the total length of the garden bed? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 6.54, steps: [3, 0.01], back: true, hint: "2.99 is close to 3. Jump on 3, then back 0.01." },
          { kind: "input", fields: [{ label: "Total length", value: 9.53, suffix: "m" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Round and adjust", s: "6.54 + 3 = 9.54, then take away the extra 0.01: 9.53 m." }, { t: "Split into places", s: "6 + 2 = 8, 0.54 + 0.99 = 1.53. 8 + 1.53 = 9.53 m." }] },
        answer: "**9.53 metres**. 6.54 + 3 = 9.54, and 2.99 is 0.01 less than 3, so 9.54 − 0.01 = 9.53."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "6250 metres is the same as ___ kilometres.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 6250, shift: true, hint: "1000 m = 1 km, so divide by 1000: shift the digits 3 places to the right." },
          { kind: "input", fields: [{ label: "6250 m =", value: 6.25, suffix: "km" }] }
        ],
        answer: "**6.25 kilometres**. 6250 ÷ 1000 = 6.25, because 1000 metres make 1 kilometre."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "An alarm beeps 6 times every 8 seconds. How many times does the beep sound in 2 minutes?",
        interact: [
          { kind: "jumps", start: 0, end: 120, steps: [8, 40], hint: "Count in seconds. Each jump of 8 is 6 beeps. How many jumps make 120 seconds?" },
          { kind: "input", fields: [{ label: "Groups of 8 seconds in 2 minutes", value: 15 }, { label: "Beeps in 2 minutes", value: 90 }] }
        ],
        cubes: { ops: ["÷", "×"], note: "2 minutes = 120 seconds.", solve: [{ t: "Count the 8-second groups", s: "120 ÷ 8 = 15 groups. 15 × 6 = 90 beeps." }, { t: "Build up", s: "40 seconds is 5 groups = 30 beeps. 120 seconds is 3 × 40 seconds, so 3 × 30 = 90 beeps." }] },
        answer: "**90 beeps**. 2 minutes = 120 seconds. 120 ÷ 8 = 15 groups of 8 seconds, and 15 × 6 = 90."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Identify a right angle, an angle on a straight line and an angle at a point in the picture.",
        img: "u35-angles.png",
        interact: [{ kind: "choose", rows: [
          { t: "Right angle", options: ["A", "B", "C"], a: 1 },
          { t: "Angles on a straight line", options: ["A", "B", "C"], a: 0 },
          { t: "Angles at a point", options: ["A", "B", "C"], a: 2 }] }],
        answer: "**B** is a right angle (a square corner, 90°). **A** shows angles on a straight line: the rays are all on one side of a straight line, so they add to 180°. **C** shows angles at a point: the rays go all the way around, so they add to 360°."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "7.25 − 1.5 = 5.75",
        answer: true,
        explain: "Jump back 1 from 7.25 to 6.25, then back 0.5 to 5.75. So 7.25 − 1.5 = 5.75.",
        interact: [{ kind: "jumps", start: 7.25, steps: [1, 0.5], back: true, hint: "Start at 7.25. Jump back 1, then back 0.5." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "A shopper visits a tech store to buy 3 portable speakers. At the checkout, the sales assistant gives them a $50 discount and then tells them that the total is $148.75. Calculate the price of each portable speaker.",
        interact: [
          { kind: "bar", whole: { v: 198.75, l: "?", n: "full price of 3 speakers", hide: true }, parts: [{ v: 148.75, l: "$148.75", n: "paid" }, { v: 50, l: "$50", n: "discount" }] },
          { kind: "input", fields: [{ label: "Price of 3 speakers before the discount", prefix: "$", value: 198.75 }, { label: "Price of each speaker", prefix: "$", value: 66.25 }] }
        ],
        cubes: { ops: ["+", "÷"], solve: [{ t: "Undo the discount, then share", s: "$148.75 + $50 = $198.75 for 3 speakers. $198.75 ÷ 3 = $66.25 each." }, { t: "Check by multiplying", s: "3 × $66.25 = $198.75, and $198.75 − $50 = $148.75 ✓." }] },
        answer: "**$66.25** each. Add back the discount: $148.75 + $50 = $198.75. Share between 3: $198.75 ÷ 3 = $66.25.",
        explain: "The slide's total of $147.75 gives $197.75 ÷ 3 = $65.91666…, which is not an exact price. The total is $148.75 here so each speaker costs an exact $66.25. \"Potable\" is corrected to \"portable\"."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the length of the table using decimal notation.",
        img: "u35-table.png",
        interact: [
          { kind: "marker", min: 0, max: 3, divs: 30, majorEvery: 10, labels: [0, 1, 2, 3], label: "2850 mm", hint: "Each small mark is 100 mm (0.1 m). Slide the pin to 2850 mm." },
          { kind: "input", fields: [{ label: "Length of the table", value: 2.85, suffix: "m" }] }
        ],
        answer: "**2.85 metres**. 1000 mm = 1 m, so 2850 mm = 2 m and 850 mm = 2.85 m.",
        explain: "The slide labels the table 2850 m (almost 3 km), which must be a typo. The picture now says 2850 mm, a real table length."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "If 4.2 × 10 is 42, what is 4.2 × 100? Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t"], start: 4.2, shift: true, hint: "Shift the digits 1 place left for × 10, then 1 more place for × 100." },
          { kind: "input", fields: [{ label: "4.2 × 100 =", value: 420 }] }
        ],
        answer: "**420**. × 100 is × 10 and then × 10 again: 42 × 10 = 420. Each digit moves 2 places to the left."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "One angle is 120 degrees. The other angle is 60 degrees. Record the total of both angles.",
        img: "u35-straight.png",
        interact: [
          { kind: "angle", names: true, degrees: true, target: "straight", start: 120, label: "Make 120°, then keep turning another 60°. What kind of angle do you get?" },
          { kind: "input", fields: [{ label: "120° + 60° =", value: 180, suffix: "°" }] }
        ],
        answer: "**180°**. 120 + 60 = 180. The two angles sit together on a straight line, and angles on a straight line add to 180°."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "If 7 × 8 = 56, then 56 ÷ 8 =",
        options: ["7", "8", "6", "9"],
        answer: 0,
        explain: "Multiplication and division undo each other. 7 groups of 8 make 56, so 56 shared into groups of 8 gives 7.",
        interact: [{ kind: "array", rows: 7, cols: 8, hint: "7 rows of 8 make 56. How many rows of 8 are in 56?" }]
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "The shirt costs $89.00. Calculate the following discounts: a) 10% b) 25% c) 50%",
        img: "u35-shirt.png",
        interact: [
          { kind: "shade", parts: 20, pct: true, hint: "The whole strip is $89. Each part is 5%. Shade 10%, 25% or 50%." },
          { kind: "input", fields: [{ label: "a) 10% of $89", prefix: "$", value: 8.9 }, { label: "b) 25% of $89", prefix: "$", value: 22.25 }, { label: "c) 50% of $89", prefix: "$", value: 44.5 }] }
        ],
        answer: "a) 10% = $89 ÷ 10 = **$8.90**. b) 25% = $89 ÷ 4 = **$22.25**. c) 50% = $89 ÷ 2 = **$44.50**. The sale prices would be $80.10, $66.75 and $44.50.",
        explain: "The answers are the discounts (the amounts taken off), as the slide asks."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "505 grams. Convert to record the mass in kilograms.",
        img: "u35-potatoes.png",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h", "th"], start: 505, shift: true, hint: "1000 g = 1 kg, so divide by 1000: shift the digits 3 places to the right." },
          { kind: "input", fields: [{ label: "505 g =", value: 0.505, suffix: "kg" }] }
        ],
        answer: "**0.505 kg**. 505 ÷ 1000 = 0.505. It's about half a kilogram."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use grouping symbols to make this sentence true: 18 − 6 × 2 + 4 = 72",
        interact: [{ kind: "sentence", fields: [{ label: "Add brackets", placeholder: "18 - 6 x 2 + 4 = 72", re: "^\\s*\\(\\s*18\\s*-\\s*6\\s*\\)\\s*x\\s*\\(\\s*2\\s*\\+\\s*4\\s*\\)\\s*=\\s*72\\s*$", msg: "Keep the numbers in the same order and add brackets.", sample: "(18 - 6) x (2 + 4) = 72" }] }],
        answer: "**(18 − 6) × (2 + 4) = 72**. 18 − 6 = 12 and 2 + 4 = 6, then 12 × 6 = 72.",
        explain: "This is the only way to group it that makes 72. Without brackets it is 18 − 12 + 4 = 10."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Identify a situation where we would measure area in: a) square kilometres b) hectares",
        interact: [{ kind: "choose", rows: [
          { t: "a) Square kilometres", options: ["The area of a city or a national park", "The area of a farm paddock or a school", "The area of a classroom floor"], a: 0 },
          { t: "b) Hectares", options: ["The area of a city or a national park", "The area of a farm paddock or a school", "The area of a classroom floor"], a: 1 }] }],
        answer: "a) **Square kilometres** for very large areas, like a city, a state or a national park. b) **Hectares** for large areas such as a farm, a park or a school grounds (1 hectare = 100 m × 100 m).",
        explain: "Answers vary. Accept any sensible example: km² for very large regions, hectares for land the size of a sports field up to a farm."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "224 ÷ 4 = 4 × 14",
        answer: true,
        explain: "224 ÷ 4 = 56 (200 ÷ 4 = 50 and 24 ÷ 4 = 6). 4 × 14 = 56. Both sides equal 56.",
        interact: [{ kind: "array", rows: 4, cols: 14, hint: "4 rows of 14. How many altogether? Is it the same as 224 ÷ 4?" }]
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Estimate a 25% discount from the original sale price of this computer. Communicate your reasoning.",
        img: "u35-laptop.png",
        interact: [
          { kind: "bar", whole: { v: 2000, l: "about $2000" }, parts: [{ v: 500, l: "25%" }, { v: 500, l: "25%" }, { v: 500, l: "25%" }, { v: 500, l: "25%" }] },
          { kind: "input", fields: [{ label: "Estimated discount", prefix: "$", min: 480, max: 520 }, { label: "Estimated new price", prefix: "$", min: 1460, max: 1520 }] }
        ],
        answer: "$1985 is close to **$2000**. 25% is a quarter: $2000 ÷ 4 = **about $500 off**, so the computer costs **about $1500**. (Exactly: $496.25 off, $1488.75.)",
        explain: "Any estimate from $480 to $520 off is accepted, with a new price of about $1460 to $1520."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record 6.079 kg in kilograms and grams.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 6.079, hint: "The ones are whole kilograms. The 3 decimal places are grams (thousandths of a kilogram)." },
          { kind: "input", fields: [{ label: "Kilograms", value: 6, suffix: "kg" }, { label: "Grams", value: 79, suffix: "g" }] }
        ],
        answer: "**6 kg 79 g**. 0.079 kg is 79 thousandths of a kilogram, which is 79 grams."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Solve: 48 + (35 × 6)",
        interact: [
          { kind: "input", fields: [{ label: "35 × 6 =", value: 210 }, { label: "48 + (35 × 6) =", value: 258 }] }
        ],
        answer: "**258**. Brackets first: 35 × 6 = 210 (30 × 6 = 180, 5 × 6 = 30). Then 48 + 210 = 258."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "List in the correct sequence the steps used to transform a parallelogram into a rectangle to find its area.",
        img: "u35-parallelogram.png",
        interact: [{ kind: "order", items: ["A: Move the cut-off triangle to the other side to make a rectangle", "B: Cut along the line", "C: Use a ruler to draw a line at right angles from one corner (the height)"], answer: [2, 1, 0] }],
        answer: "**C, B, A**. C: draw the perpendicular height with a ruler. B: cut along that line. A: slide the triangle to the other end to make a rectangle. The area is the same: base × height."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "If 783 ÷ 9 = 87 then 9 × ___ = 783",
        options: ["82", "87", "88", "89"],
        answer: 1,
        explain: "Division and multiplication undo each other. 783 ÷ 9 = 87, so 9 × 87 = 783."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Solve 8678 + 6654 using an efficient strategy. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 8678, steps: [6000, 600, 50, 4], hint: "Start at 8678. Jump on 6000, then 600, 50 and 4." },
          { kind: "input", fields: [{ label: "8678 + 6654 =", value: 15332 }] }
        ],
        answer: "**15 332**. One way: 8678 + 22 = 8700, and 6654 − 22 = 6632. 8700 + 6632 = 15 332. Or jump: 8678 + 6000 = 14 678, + 600 = 15 278, + 54 = 15 332."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Dan placed 4 shopping items in a bag. Calculate the total mass in kilograms: 2005 g, 8.20 kg, 2380 g and 4.05 kg.",
        interact: [
          { kind: "input", fields: [{ label: "2005 g =", value: 2.005, suffix: "kg" }, { label: "2380 g =", value: 2.38, suffix: "kg" }, { label: "Total mass", value: 16.635, suffix: "kg" }] }
        ],
        cubes: { ops: ["+"], note: "Change grams to kilograms first: 1000 g = 1 kg.", solve: [{ t: "Kilograms first", s: "2005 g = 2.005 kg, 2380 g = 2.38 kg. 2.005 + 8.2 + 2.38 + 4.05 = 16.635 kg." }, { t: "Grams first", s: "8.20 kg = 8200 g, 4.05 kg = 4050 g. 2005 + 8200 + 2380 + 4050 = 16 635 g = 16.635 kg." }] },
        answer: "**16.635 kg**. 2.005 + 8.200 + 2.380 + 4.050 = 16.635 kg (or 16 635 g)."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Solve: ___ × 7 = (1000 − 160) ÷ 8",
        interact: [{ kind: "scale", left: "? × 7", right: "(1000 − 160) ÷ 8", answer: 15 }],
        answer: "**15**. Brackets first: 1000 − 160 = 840. 840 ÷ 8 = 105. 105 ÷ 7 = 15, so 15 × 7 = 105."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Describe the arrangement of cubic-centimetre blocks in terms of layers.",
        img: "u35-layers.png",
        interact: [
          { kind: "array", rows: 2, cols: 4, hint: "This is one layer seen from the top: 4 cubes long and 2 cubes wide." },
          { kind: "input", fields: [{ label: "Cubes in one layer", value: 8 }, { label: "Number of layers", value: 4 }, { label: "Volume", value: 32, suffix: "cm³" }] }
        ],
        answer: "Each layer is **4 cubes long and 2 cubes wide: 8 cubes**. There are **4 layers**, so 4 × 8 = **32 cubic centimetres**.",
        explain: "Counted from the slide's picture: 4 cubes along the front, 2 along the side, 4 high."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "28 ÷ 2 = ___ × 2 The missing number is 14. Communicate your reasoning.",
        answer: false,
        explain: "28 ÷ 2 = 14, so the right side must also equal 14. 14 × 2 = 28, not 14. The missing number is 7, because 7 × 2 = 14.",
        interact: [{ kind: "jumps", start: 0, end: 14, steps: [2], hint: "28 ÷ 2 = 14. Jump in 2s to 14. How many jumps?" }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Mansfield National Park: daily guided tours 10:45 am to 3:20 pm. Calculate the duration of the guided tour.",
        img: "u35-sign.png",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 645, end: 920, steps: [15, 60, 5], hint: "Start at 10:45 am. Jump 15 minutes to 11:00, then hours, then minutes to 3:20 pm." },
          { kind: "input", fields: [{ label: "Hours", value: 4, suffix: "h" }, { label: "and minutes", value: 35, suffix: "min" }] }
        ],
        answer: "**4 hours 35 minutes**. 10:45 am → 11:00 am is 15 min. 11:00 am → 3:00 pm is 4 h. 3:00 pm → 3:20 pm is 20 min. 15 + 20 = 35 min."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the length of the crocodile using decimal notation. 4 metres 356 mm",
        img: "u35-croc.png",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 4.356, hint: "Whole metres go in the ones. 356 mm is 356 thousandths of a metre." },
          { kind: "input", fields: [{ label: "Length", value: 4.356, suffix: "m" }] }
        ],
        answer: "**4.356 m**. 1000 mm = 1 m, so 356 mm = 0.356 m. 4 m + 0.356 m = 4.356 m.",
        explain: "The slide says \"4 metres 356 cm\", but 356 cm is more than 3 more metres (that would be 7.56 m). It reads 4 metres 356 mm here so the answer uses all 3 decimal places."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Describe this pattern formed by multiples. 3, ___, ___, ___, ___.",
        img: "u35-triangles.png",
        interact: [
          { kind: "jumps", start: 3, steps: [3], hint: "Each new triangle adds 3 more sides. Jump on 3 each time." },
          { kind: "input", fields: [{ label: "2nd", value: 6 }, { label: "3rd", value: 9 }, { label: "4th", value: 12 }, { label: "5th", value: 15 }] },
          { kind: "choose", rows: [{ t: "The pattern is", options: ["multiples of 3: add 3 each time", "multiples of 2: add 2 each time", "double each time"], a: 0 }] }
        ],
        answer: "**3, 6, 9, 12, 15**. Each picture has one more triangle, and each triangle has 3 sides, so the number of sides is a multiple of 3: 1 × 3, 2 × 3, 3 × 3, 4 × 3, 5 × 3.",
        explain: "The numbers count the sides (sticks) in each picture: 1, 2, 3, 4 and 5 separate triangles."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Explain how to find the volume of a rectangular prism.",
        img: "u35-prism.png",
        interact: [{ kind: "choose", rows: [{ t: "To find the volume", options: ["Multiply length × width × height (cubes in one layer × number of layers)", "Add the length, width and height", "Multiply only the length and the width"], a: 0 }] }],
        answer: "**Volume = length × width × height.** Length × width tells how many cubes fit in one layer. Multiply by the height (the number of layers) to find the total cubic units."
      }
    ]
  ]
});
