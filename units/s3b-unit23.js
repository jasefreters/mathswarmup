/*
  Stage 3 Year B, Unit 23 — Review of learning (Term 1, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 1, ls: 3, unit: 23,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 23 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "9256 − 5426 = ? Communicate your strategy.",
        options: ["4321", "4230", "3830", "3876"],
        answer: 2,
        explain: "Count up from 5426: + 74 = 5500, + 500 = 6000, + 3000 = 9000, + 256 = 9256. 74 + 500 + 3000 + 256 = 3830.",
        interact: [{ kind: "jumps", start: 5426, end: 9256, steps: [74, 500, 3000, 256], hint: "Count up from 5426 to 9256 in friendly jumps." }]
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals",
        prompt: "Record the number that is 10 times larger than 0.40, and the number that is 100 times larger than 0.40.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h"], start: 0.4, shift: true, hint: "Press × 10. The digits move one place to the left each time." },
          { kind: "input", fields: [{ label: "10 times larger", value: 4 }, { label: "100 times larger", value: 40 }] }
        ],
        answer: "**4** (4.0) and **40**. Each × 10 moves every digit one place to the left."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Gabriella was hosting an event. She sold 105 Gold tickets at $9 each and 65 silver tickets at $7 each. 15 Gold ticket guests cancelled and wanted a refund. How much money has she made from ticket sales? Communicate your reasoning.",
        interact: [
          { kind: "bar", whole: { v: 1400, l: "$1400", n: "tickets sold" }, parts: [{ v: 1265, l: "$1265", n: "kept", hide: true }, { v: 135, l: "$135", n: "refunded", hide: true }], hint: "The whole bar is all the tickets sold. Part of it was refunded. Tap a ? to reveal it." },
          { kind: "input", fields: [{ label: "Gold sales", prefix: "$", value: 945 }, { label: "Silver sales", prefix: "$", value: 455 }, { label: "Refund", prefix: "$", value: 135 }, { label: "Money made", prefix: "$", value: 1265 }] }
        ],
        cubes: { ops: ["×", "+", "−"], solve: [{ t: "Sales, then the refund", s: "Gold: 105 × $9 = $945. Silver: 65 × $7 = $455. $945 + $455 = $1400. Refund: 15 × $9 = $135. $1400 − $135 = $1265." }, { t: "Only count the gold tickets kept", s: "105 − 15 = 90 gold tickets kept. 90 × $9 = $810. $810 + $455 = $1265." }] },
        answer: "**$1265**. $945 + $455 = $1400, minus the $135 refund."
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Arrange these numbers in descending order: 7 645 980, 6 541 982, 7 641 908, 3 678 000",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 7645980, hint: "Compare from the largest place. 7 645 980 and 7 641 908 match until the thousands." },
          { kind: "order", items: ["7 645 980", "6 541 982", "7 641 908", "3 678 000"], answer: [0, 2, 1, 3] }
        ],
        answer: "7 645 980, 7 641 908, 6 541 982, 3 678 000. Descending means largest to smallest."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "How many students was this data collected from? Communicate your thinking.",
        interact: [
          { kind: "bargraph", max: 25, step: 5, minor: 1, ylabel: "Number of students", xlabel: "Colours", label: "Column graph: Students' favourite colour",
            series: [{ l: "Green", c: "#7ED957" }, { l: "Red", c: "#FF3131" }, { l: "Blue", c: "#004AAD" }, { l: "Pink", c: "#FF66C4" }, { l: "Purple", c: "#5E17EB" }],
            groups: [{ l: "", v: [15, 19, 15, 11, 10] }] },
          { kind: "input", fields: [{ label: "Students", value: 70 }] }
        ],
        answer: "**70 students**. Green 15 + Red 19 + Blue 15 + Pink 11 + Purple 10 = 70.",
        explain: "Each student chose one favourite colour, so the total of the columns is the number of students. The bars are read from the slide graph."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "Joe needs to travel 1876 km from Mermaid Cove to Fairy Rock. He travelled 214 km on Monday and 329 km on Tuesday. He still has 544 km to travel.",
        answer: false,
        explain: "He has travelled 214 + 329 = 543 km, so he still has 1876 − 543 = 1333 km to go. 544 is close to the distance travelled, not the distance left.",
        interact: [{ kind: "bar", whole: { v: 1876, l: "1876 km", n: "whole trip" }, parts: [{ v: 214, l: "214", n: "Mon" }, { v: 329, l: "329", n: "Tue" }, { v: 1333, l: "1333 km", n: "left", hide: true }] }]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Convert 2.378 km to metres, and 6.21 m to kilometres. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 2.378, shift: true, hint: "1 km = 1000 m. Press × 10 three times to multiply by 1000." },
          { kind: "input", fields: [{ label: "2.378 km =", value: 2378, suffix: "m" }, { label: "6.21 m =", value: 0.00621, suffix: "km" }] }
        ],
        answer: "**2378 m** (× 1000) and **0.00621 km** (÷ 1000)."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use rounding to estimate the answer to 7532 + 3219. Communicate your reasoning.",
        interact: [
          { kind: "marker", min: 7000, max: 8000, divs: 10, majorEvery: 5, labels: [7000, 7500, 8000], target: 7532, tol: 30, label: "7532", hint: "Slide the pin to 7532. Which hundred, or which thousand, is it closest to?", msg: "Each step is 100. 7532 is just past 7500." },
          { kind: "input", fields: [{ label: "Estimate", min: 10500, max: 11000 }] }
        ],
        answer: "About **10 700** (7500 + 3200), or 11 000 (8000 + 3000). The exact answer is 10 751.",
        explain: "Any estimate from 10 500 to 11 000 is accepted, depending on how far the class rounds."
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Partition these numbers in non-standard forms: 56 427 and 80 098.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 56427, target: 56427, need: "nonstandard" },
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 80098, target: 80098, need: "nonstandard" },
          { kind: "expr", count: 1, target: 56427, placeholder: "e.g. 50 000 + 6427", sample: ["50 000 + 6427"], mustUse: { re: "(?=.*\\+)(?=.*[1-9][\\d ]*[1-9])", msg: "Use + and group some places together, like 6427. That's the standard partition." } },
          { kind: "expr", count: 1, target: 80098, placeholder: "e.g. 80 000 + 98", sample: ["80 000 + 98"], mustUse: { re: "(?=.*\\+)(?=.*[1-9][\\d ]*[1-9])", msg: "Use + and group some places together, like 98. That's the standard partition." } }
        ],
        answer: "Answers vary, for example 56 427 = 50 000 + 6427 = 564 hundreds + 27, and 80 098 = 80 000 + 98 = 8009 tens + 8."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Describe a chance experiment where the outcome is equally likely to occur.",
        interact: [{ kind: "choose", rows: [
          { t: "Flipping a coin: heads or tails", options: ["equally likely", "not equally likely"], a: 0 },
          { t: "A spinner with 1 big and 3 small sections", options: ["equally likely", "not equally likely"], a: 1 },
          { t: "Rolling a 6-sided die: 2 or 5", options: ["equally likely", "not equally likely"], a: 0 },
          { t: "Picking from a bag of 3 red and 1 blue: red or blue", options: ["equally likely", "not equally likely"], a: 1 }] }],
        answer: "Answers vary, for example flipping a coin (heads or tails), rolling a die (each number is 1 in 6), or a spinner with equal sections.",
        explain: "The slide asks students to describe their own experiment. The four examples help the class test the idea of equally likely."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "Jamie drove 28 km every day for a week. Mikali drove 19 km more than Jamie's total. How far did Mikali drive?",
        options: ["256", "215", "196", "211"],
        answer: 1,
        explain: "Jamie: 7 × 28 = 196 km. Mikali: 196 + 19 = 215 km. 196 is Jamie's total, not Mikali's.",
        interact: [{ kind: "jumps", start: 0, steps: [28, 19], hint: "Jump + 28 for each of the 7 days, then + 19 for Mikali's extra." }]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Gum nut valley trail is 4.32 km. Convert this length to metres and to centimetres.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O", "t", "h"], start: 4.32, shift: true, hint: "km to m: × 1000. m to cm: × 100 more." },
          { kind: "input", fields: [{ label: "Metres", value: 4320, suffix: "m" }, { label: "Centimetres", value: 432000, suffix: "cm" }] }
        ],
        answer: "**4320 m** (4.32 × 1000) and **432 000 cm** (4320 × 100)."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Dani had $4000 to spend on a 1 week holiday. She stayed at a 3-star hotel and organised the 3-star restaurant package. She went to the aquarium and swam with dolphins. How much money did she have left?",
        table: [["Item", "Cost", "Item", "Cost", "Item", "Cost"],
          ["1-Star Hotel", "$563", "Local Island Visit", "$362", "Whale Watching", "$63"],
          ["3-Star Hotel", "$1637", "Boat Cruise", "$402", "Caving", "$228"],
          ["5-Star Hotel", "$3713", "Museum", "$37", "Whitewater Rapids", "$219"],
          ["Snorkelling Excursion", "$283", "Aquarium", "$43", "Sand Dunes", "$54"],
          ["Quad Bikes", "$179", "Volcano Day Trip", "$783", "5-Star Restaurant Package", "$2350"],
          ["Speed Boat racing", "$139", "Helicopter Flight", "$1353", "3-Star Restaurant Package", "$1413"],
          ["Taboganing", "$77", "Scuba Diving", "$555", "1-Star Restaurant Package", "$720"],
          ["Rock Climbing", "$205", "Swimming with the Dolphins", "$349", "Transport Package", "$236"]],
        interact: [
          { kind: "shop", budget: 4000, items: [["3-Star Hotel", 1637], ["3-Star Restaurant Package", 1413], ["Aquarium", 43], ["Swimming with the Dolphins", 349], ["5-Star Hotel", 3713], ["Museum", 37], ["Boat Cruise", 402]], hint: "Tap the four things Dani chose. Estimate first, then show the total." },
          { kind: "input", fields: [{ label: "Total spent", prefix: "$", value: 3442 }, { label: "Money left", prefix: "$", value: 558 }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "$1637 + $1413 = $3050. $43 + $349 = $392. $3050 + $392 = $3442. $4000 − $3442 = $558." }, { t: "Subtract as you go", s: "$4000 − $1637 = $2363. − $1413 = $950. − $43 = $907. − $349 = $558." }] },
        answer: "**$558**. She spent $1637 + $1413 + $43 + $349 = $3442.",
        explain: "Hotel and restaurant prices are totals for the 7 nights, as the slide's table note says."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals",
        prompt: "What number is 10 times 4.3? What number is 100 times 4.3? Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t"], start: 4.3, shift: true },
          { kind: "input", fields: [{ label: "10 × 4.3 =", value: 43 }, { label: "100 × 4.3 =", value: 430 }] }
        ],
        answer: "**43** and **430**. × 10 moves each digit one place left; × 100 moves it two places."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Jamie collected data on how many times he rolled the number 6 when playing a board game. What types of data display would be appropriate to represent this data?",
        interact: [{ kind: "select", hint: "Tap every display that would suit a count of 6s.", items: [["Tally chart", true], ["Table", true], ["Column graph", true], ["Dot plot", true], ["Line graph", false]] }],
        answer: "A **tally chart**, **table**, **column graph** or **dot plot** all show counts well. A line graph shows change over time, so it doesn't suit a simple count.",
        explain: "If Jamie recorded the 6s game by game, a line graph could show the change over the games. That's a good point to discuss."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "Olive sold a total of $2309 worth of produce at the farmers' market over 5 days. Sam sold a total of $1880 over 4 days. Sam sold more per day than Olive.",
        answer: true,
        explain: "Olive: $2309 ÷ 5 = $461.80 a day. Sam: $1880 ÷ 4 = $470 a day. Sam sold $8.20 more per day.",
        interact: [
          { kind: "bar", whole: { v: 2309, l: "$2309", n: "Olive, 5 days" }, parts: [1, 2, 3, 4, 5].map(() => ({ v: 461.8, l: "$461.80", hide: true })), hint: "Olive's total shared into 5 equal days. Tap a ? to reveal one day." },
          { kind: "bar", whole: { v: 1880, l: "$1880", n: "Sam, 4 days" }, parts: [1, 2, 3, 4].map(() => ({ v: 470, l: "$470", hide: true })), hint: "Sam's total shared into 4 equal days." }
        ]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "One side of a rectangular playground is 43.2 metres long, the other side is 21.3 metres long. What is the perimeter of the playground?",
        interact: [
          { kind: "sides", label: "Rectangular playground, 43.2 m by 21.3 m", view: [420, 230], fill: "#92D050",
            poly: [[40, 30], [320, 30], [320, 170], [40, 170]],
            dims: [{ from: [42, 192], to: [318, 192] }, { from: [342, 32], to: [342, 168] }],
            labels: [{ x: 180, y: 220, t: "43.2 m" }, { x: 352, y: 106, t: "21.3 m", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 129, suffix: "m" }] }
        ],
        cubes: { ops: ["+"], also: ["×"], solve: [{ t: "Add all four sides", s: "43.2 + 21.3 + 43.2 + 21.3 = 129 m." }, { t: "Double the half", s: "43.2 + 21.3 = 64.5. 2 × 64.5 = 129 m." }] },
        answer: "**129 m**. 2 × (43.2 + 21.3) = 2 × 64.5 = 129."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "A club has 1299 members. At the start of the year, 156 people leave the club and 189 new people join. Use an efficient strategy to calculate how many members the club has now.",
        interact: [
          { kind: "jumps", start: 1299, back: true, steps: [33, 156, 189], hint: "Try the efficient way: 189 − 156 = 33 more people overall. Jump + 33." },
          { kind: "input", fields: [{ label: "Members now", value: 1332 }] }
        ],
        cubes: { ops: ["−", "+"], solve: [{ t: "Find the change first", s: "189 joined and 156 left: 189 − 156 = 33 more. 1299 + 33 = 1332." }, { t: "Step by step", s: "1299 − 156 = 1143. 1143 + 189 = 1332." }] },
        answer: "**1332 members**. Overall the club gained 189 − 156 = 33 people, and 1299 + 33 = 1332."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals",
        prompt: "Approximate the size of these decimals to 1 decimal place: 1.26, 1.59, 2.61, 3.48",
        interact: [
          { kind: "numberline", min: 1, max: 4, ticks: 10, tol: 0.03, items: [["1.26", 1.26], ["1.59", 1.59], ["2.61", 2.61], ["3.48", 3.48]] },
          { kind: "input", fields: [{ label: "1.26 ≈", value: 1.3 }, { label: "1.59 ≈", value: 1.6 }, { label: "2.61 ≈", value: 2.6 }, { label: "3.48 ≈", value: 3.5 }] }
        ],
        answer: "1.26 ≈ **1.3** · 1.59 ≈ **1.6** · 2.61 ≈ **2.6** · 3.48 ≈ **3.5**. Look at the hundredths: 5 or more rounds up."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Are rolling a 5 and rolling a 1 equally likely on a standard six-sided die? Communicate your reasoning.",
        interact: [
          { kind: "combos", pick: 1, total: 6, items: [["1", "#2F6FE4", 1], ["2", "#2F6FE4", 1], ["3", "#2F6FE4", 1], ["4", "#2F6FE4", 1], ["5", "#2F6FE4", 1], ["6", "#2F6FE4", 1]] },
          { kind: "choose", rows: [{ t: "Equally likely?", options: ["Yes", "No"], a: 0 }] },
          { kind: "input", fields: [{ label: "Chance of rolling a 5", value: 1 / 6, placeholder: "a/b" }] }
        ],
        answer: "**Yes**. There are 6 equally likely outcomes, so a 5 and a 1 each have a chance of [1/6]."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "Lucy has [1/4] of a big watermelon, and Jack has [1/2] of a small watermelon. Who has more watermelon?",
        options: ["Lucy", "Jack", "They have exactly the same", "It depends on the size of the watermelons."],
        answer: 3,
        explain: "We can only compare fractions directly when they are fractions of the same whole. A quarter of a very big watermelon could be more than half of a small one, or less.",
        interact: [
          { kind: "shade", parts: 4, pre: [0], hint: "Lucy: [1/4] of a big watermelon" },
          { kind: "shade", parts: 2, pre: [0], hint: "Jack: [1/2] of a small watermelon" }
        ]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Determine the perimeter of the table top in centimetres and then in metres. Communicate your thinking.",
        interact: [
          { kind: "sides", label: "Rectangular table top, 106 cm by 68 cm", view: [420, 230], fill: "#F8CBAD",
            poly: [[40, 40], [320, 40], [320, 170], [40, 170]],
            dims: [{ from: [42, 20], to: [318, 20] }, { from: [342, 42], to: [342, 168] }],
            labels: [{ x: 180, y: 14, t: "106 cm" }, { x: 352, y: 110, t: "68 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 348, suffix: "cm" }, { label: "Perimeter", value: 3.48, suffix: "m" }] }
        ],
        answer: "**348 cm** = **3.48 m**. 106 + 68 + 106 + 68 = 348 cm, and 100 cm = 1 m.",
        explain: "The slide shows the table from the side; the top is drawn here as a rectangle 106 cm long and 68 cm wide."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals",
        prompt: "Record the place value of each digit in the following number: 8.216",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 8.216 },
          { kind: "choose", rows: [
            { t: "8", options: ["ones", "tenths", "hundredths", "thousandths"], a: 0 },
            { t: "2", options: ["ones", "tenths", "hundredths", "thousandths"], a: 1 },
            { t: "1", options: ["ones", "tenths", "hundredths", "thousandths"], a: 2 },
            { t: "6", options: ["ones", "tenths", "hundredths", "thousandths"], a: 3 }] }
        ],
        answer: "8 ones, 2 tenths, 1 hundredth and 6 thousandths: 8 + 0.2 + 0.01 + 0.006."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals",
        prompt: "Complete the following: ___ is 10 times 3.45. ___ is 100 times 3.45. ___ is 1000 times 3.45.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h"], start: 3.45, shift: true },
          { kind: "input", fields: [{ label: "10 × 3.45 =", value: 34.5 }, { label: "100 × 3.45 =", value: 345 }, { label: "1000 × 3.45 =", value: 3450 }] }
        ],
        answer: "**34.5**, **345** and **3450**. Each × 10 moves every digit one more place to the left."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Record 2 situations where mass would be measured in tonnes (t).",
        interact: [{ kind: "select", hint: "Tap the things you would weigh in tonnes.", items: [["a loaded truck", true], ["an elephant", true], ["a bag of apples", false], ["a cargo ship", true], ["a school bag", false], ["a car", true]] }],
        answer: "Answers vary, for example a loaded truck, an elephant, a car, a ship or a load of sand. 1 t = 1000 kg."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "Fractional quantities can be compared if one is the common whole.",
        answer: true,
        explain: "When both fractions are of the same whole, the parts can be compared directly: [1/2] of this strip is more than [1/4] of the same strip.",
        interact: [
          { kind: "shade", parts: 2, pre: [0], hint: "[1/2] of the whole" },
          { kind: "shade", parts: 4, pre: [0], hint: "[1/4] of the same whole" }
        ]
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Find the total of the length of 3 items measured: 7 mm, 21 cm and 2.3 m. Communicate your thinking.",
        interact: [
          { kind: "jumps", start: 0, steps: [7, 210, 2300], hint: "Change everything to millimetres first: 7 mm, 210 mm, 2300 mm." },
          { kind: "input", fields: [{ label: "Total", value: 2517, suffix: "mm" }, { label: "Total", value: 2.517, suffix: "m" }] }
        ],
        answer: "**2517 mm** = **2.517 m** (251.7 cm). Convert to the same unit first: 7 mm + 210 mm + 2300 mm."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "What is the combined distance that Ishaan and Maria jumped at all 3 carnivals?",
        table: [["Name", "Carnival A", "Carnival B", "Carnival C"], ["Stacey", "3.42 m", "3.64 m", "3.09 m"], ["Stuart", "4.15 m", "4.08 m", "4.52 m"], ["Roshan", "3.78 m", "3.74 m", "3.81 m"], ["Xavier", "4.23 m", "3.99 m", "4.17 m"], ["Beatrice", "5.32 m", "5.33 m", "5.42 m"], ["Ishaan", "3.98 m", "4.12 m", "4.19 m"], ["Maria", "4.88 m", "5.02 m", "5.14 m"]],
        interact: [
          { kind: "jumps", start: 0, steps: [3.98, 4.12, 4.19, 4.88, 5.02, 5.14], hint: "Jump each of Ishaan's and Maria's distances." },
          { kind: "input", fields: [{ label: "Ishaan", value: 12.29, suffix: "m" }, { label: "Maria", value: 15.04, suffix: "m" }, { label: "Combined", value: 27.33, suffix: "m" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Each person, then together", s: "Ishaan: 3.98 + 4.12 + 4.19 = 12.29 m. Maria: 4.88 + 5.02 + 5.14 = 15.04 m. 12.29 + 15.04 = 27.33 m." }, { t: "Each carnival, then together", s: "A: 3.98 + 4.88 = 8.86. B: 4.12 + 5.02 = 9.14. C: 4.19 + 5.14 = 9.33. 8.86 + 9.14 + 9.33 = 27.33 m." }] },
        answer: "**27.33 m**. Ishaan 12.29 m + Maria 15.04 m."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "3.043 + 5.099 = ? Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 3.043, target: 8.142, need: "standard", hint: "This is 3.043. Add 5 ones, 0 tenths, 9 hundredths and 9 thousandths, then group any column with 10 or more." },
          { kind: "input", fields: [{ label: "3.043 + 5.099 =", value: 8.142 }] }
        ],
        answer: "**8.142**. Or compensate: 3.043 + 5.1 = 8.143, then take away the extra 0.001."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Convert 5.43 kg to grams, and 4 kg 320 g to kilograms.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 5.43, hint: "This is 5.43 kg. 1 thousandth of a kilogram is 1 gram." },
          { kind: "input", fields: [{ label: "5.43 kg =", value: 5430, suffix: "g" }, { label: "4 kg 320 g =", value: 4.32, suffix: "kg" }] }
        ],
        answer: "**5430 g** (5.43 × 1000) and **4.32 kg** (320 g = 0.32 kg)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "Mia cuts a ribbon into 2 equal lengths. Tom cuts an identical ribbon into 4 equal lengths. Which statement is correct?",
        options: ["Mia's pieces are smaller", "Tom's pieces are bigger", "The pieces are the same", "Mia's pieces are bigger"],
        answer: 3,
        explain: "The ribbons are the same length (a common whole). Halves are bigger than quarters.",
        interact: [
          { kind: "shade", parts: 2, hint: "Mia's ribbon: 2 equal lengths" },
          { kind: "shade", parts: 4, hint: "Tom's ribbon: 4 equal lengths" }
        ]
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Jessica started work at 14:15 and finished at 17:05. How long has she worked? Communicate your thinking.",
        interact: [
          { kind: "jumps", time: "24", start: 855, end: 1025, steps: [5, 15, 45, 60], hint: "Jump to the next o'clock, then in hours, then the extra minutes." },
          { kind: "input", fields: [{ label: "Hours", value: 2 }, { label: "Minutes", value: 50 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Jump along a timeline", s: "14:15 + 45 min = 15:00, + 2 h = 17:00, + 5 min = 17:05. 45 + 120 + 5 = 170 min = 2 h 50 min." }, { t: "Count back", s: "17:05 − 3 h = 14:05. That's 10 minutes too far, so 3 h − 10 min = 2 h 50 min." }] },
        answer: "**2 hours 50 minutes**"
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Jemma lives 76.952 km from the museum. Jess lives 21.242 km away from the museum. How much further does Jemma need to travel to the museum than Jess? Communicate your thinking.",
        interact: [
          { kind: "bar", whole: { v: 76.952, l: "76.952 km", n: "Jemma" }, parts: [{ v: 21.242, l: "21.242 km", n: "Jess" }, { v: 55.71, l: "55.71 km", n: "further", hide: true }] },
          { kind: "input", fields: [{ label: "Further", value: 55.71, suffix: "km" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Subtract by place value", s: "76.952 − 21.242: 76 − 21 = 55, 0.952 − 0.242 = 0.71. 55 + 0.71 = 55.71 km." }, { t: "Count up", s: "21.242 + 55 = 76.242, + 0.71 = 76.952. 55 + 0.71 = 55.71 km." }] },
        answer: "**55.71 km** (55.710 km)."
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals",
        prompt: "The number is 7. Record the number that is 10 times larger, 100 times larger, one tenth the size, and one hundredth the size.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h"], start: 7, shift: true },
          { kind: "input", fields: [{ label: "10 times larger", value: 70 }, { label: "100 times larger", value: 700 }, { label: "One tenth the size", value: 0.7 }, { label: "One hundredth the size", value: 0.07 }] }
        ],
        answer: "**70**, **700**, **0.7** and **0.07**.",
        explain: "The slide lists 'one tenth the size' twice. The second has been changed to 'one hundredth the size'."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Convert the following to 24-hour time: 11:20 pm, 7:32 am, 4:19 am, 9:25 pm",
        interact: [
          { kind: "clock", time: "11:20", h24: true },
          { kind: "input", fields: [{ label: "11:20 pm", accept: ["23:20"], placeholder: "hh:mm" }, { label: "7:32 am", accept: ["07:32"], placeholder: "hh:mm" }, { label: "4:19 am", accept: ["04:19"], placeholder: "hh:mm" }, { label: "9:25 pm", accept: ["21:25"], placeholder: "hh:mm" }] }
        ],
        answer: "**23:20**, **07:32**, **04:19** and **21:25**. For pm times add 12 to the hour; am times keep the hour with a leading 0."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "[1/4] can be added to [1/2] if the size of the whole is different.",
        answer: false,
        explain: "To add fractions, they must be parts of the same whole: [1/4] + [1/2] of the same strip is [3/4]. Parts of different-sized wholes can't be combined into one fraction.",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "[1/4] + [1/2] of the same whole = [3/4]" }
        ]
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "How long is Creative arts on a Thursday? How long is spent on maths over the week?",
        table: [["12-hour", "24-hour", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          ["8:30 am", "08:30", "", "", "", "", ""],
          ["9:00 am", "09:00", "English", "English", "English", "PDHPE", "Sport"],
          ["9:30 am", "09:30", "English", "English", "English", "PDHPE", "Sport"],
          ["10:00 am", "10:00", "English", "English", "English", "English", "English"],
          ["10:30 am", "10:30", "English", "English", "English", "English", "English"],
          ["11:00 am", "11:00", "Recess", "Recess", "Recess", "Recess", "Recess"],
          ["11:30 am", "11:30", "Maths", "Maths", "Maths", "Maths", "Maths"],
          ["12:00 pm", "12:00", "Maths", "Maths", "Maths", "Maths", "Maths"],
          ["12:30 pm", "12:30", "Maths", "Maths", "Maths", "Maths", "Maths"],
          ["1:00 pm", "13:00", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch"],
          ["1:30 pm", "13:30", "HSIE", "HSIE", "Creative arts", "Creative arts", "Science"],
          ["2:00 pm", "14:00", "HSIE", "Library", "PDHPE", "Creative arts", "Science"],
          ["2:30 pm", "14:30", "HSIE", "Assembly", "PDHPE", "Creative arts", "Science"],
          ["3:00 pm", "15:00", "", "", "", "", ""]],
        interact: [
          { kind: "jumps", time: "24", start: 810, end: 900, steps: [30], hint: "Creative arts on Thursday: jump in half hours from 13:30." },
          { kind: "jumps", time: "24", start: 690, end: 780, steps: [30], hint: "Maths each day: jump in half hours from 11:30." },
          { kind: "input", fields: [{ label: "Creative arts (minutes)", value: 90, suffix: "min" }, { label: "Maths over the week (hours)", value: 7.5, suffix: "h" }] }
        ],
        answer: "Creative arts on Thursday: **1 hour 30 minutes** (13:30 to 15:00). Maths: 1 h 30 min a day × 5 days = **7 hours 30 minutes**.",
        explain: "Each row is a half-hour block, and the day ends at 3:00 pm (15:00). 1 h 30 min = 90 minutes; 7 h 30 min = 7.5 hours."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Danielle packed 28.8 kg in her suitcase. On her trip, she bought 4.3 kg of souvenirs. Her suitcase can only weigh 32 kg for the flight home. Has she gone over the limit? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 28.8, end: 32, steps: [0.1, 0.3, 1, 4], hint: "Start at 28.8 kg and jump on 4.3 kg. Is the end past 32?" },
          { kind: "choose", rows: [{ t: "Over the limit?", options: ["Yes", "No"], a: 0 }] },
          { kind: "input", fields: [{ label: "Suitcase now", value: 33.1, suffix: "kg" }, { label: "Over by", value: 1.1, suffix: "kg" }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then compare", s: "28.8 + 4.3 = 33.1 kg. 33.1 − 32 = 1.1 kg over." }, { t: "How much room was left?", s: "32 − 28.8 = 3.2 kg of room. She bought 4.3 kg, and 4.3 − 3.2 = 1.1 kg too much." }] },
        answer: "**Yes**, by **1.1 kg**. 28.8 + 4.3 = 33.1 kg, which is more than 32 kg."
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals",
        prompt: "Draw a number line from 0 to 2. Place these decimals in order on the number line: 0.98, 1.20, 1.02, 0.12",
        interact: [
          { kind: "numberline", min: 0, max: 2, ticks: 10, tol: 0.015, items: [["0.98", 0.98], ["1.20", 1.2], ["1.02", 1.02], ["0.12", 0.12]] },
          { kind: "order", items: ["0.98", "1.20", "1.02", "0.12"], answer: [3, 0, 2, 1] }
        ],
        answer: "0.12, 0.98, 1.02, 1.20. 0.98 is just before 1 and 1.02 is just after it."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Convert the following to 12-hour time: 2200 hours, 0846 hours, 1732 hours, 1355 hours",
        interact: [
          { kind: "clock", time: "10:00", h24: true },
          { kind: "input", fields: [{ label: "2200 hours", accept: ["10:00 pm", "10 pm"], placeholder: "h:mm am/pm" }, { label: "0846 hours", accept: ["8:46 am"], placeholder: "h:mm am/pm" }, { label: "1732 hours", accept: ["5:32 pm"], placeholder: "h:mm am/pm" }, { label: "1355 hours", accept: ["1:55 pm"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "**10:00 pm**, **8:46 am**, **5:32 pm** and **1:55 pm**. For hours after 12, take away 12 and use pm."
      }
    ]
  ]
});
