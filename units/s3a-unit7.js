/*
  Stage 3 Year A, Unit 7 — Review of learning (Term 2, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 2, ls: 2, unit: 7,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 7 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Which of these is equivalent to 804 903? You may select more than one answer.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 804903 },
          { kind: "select", hint: "Tap every partition that makes 804 903.", items: [["A  800 000 + 4900 + 3", true], ["B  500 000 + 304 000 + 903", true], ["C  80 000 + 4000 + 90 + 3", false], ["D  800 000 + 4000 + 900 + 3", true]] }
        ],
        answer: "**A, B and D**. A: 800 000 + 4900 + 3 = 804 903. B: 500 000 + 304 000 + 903 = 804 903. D is the standard partition. C makes only 84 093."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record multiplication fact families for these numbers: 4, 6 and 10.",
        interact: [
          { kind: "array", rows: 2, cols: 3, showTotal: true, hint: "Build an array for each number, then rotate it to see the turnaround fact." },
          { kind: "pair", labels: ["factor", "factor"], unit: "", rule: "product", target: 4 },
          { kind: "pair", labels: ["factor", "factor"], unit: "", rule: "product", target: 6 },
          { kind: "pair", labels: ["factor", "factor"], unit: "", rule: "product", target: 10 }
        ],
        answer: "Answers vary, for example: 2 × 2 = 4 and 4 ÷ 2 = 2 · 2 × 3 = 6, 3 × 2 = 6, 6 ÷ 2 = 3, 6 ÷ 3 = 2 · 2 × 5 = 10, 5 × 2 = 10, 10 ÷ 2 = 5, 10 ÷ 5 = 2.",
        explain: "The slide shows each number at the top of a fact-family triangle, so it is taken as the product. Find two factors, then record the whole family."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "How many millions are there in: 10 678 794, 496 065 713, 78 641 099?",
        interact: [
          { kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 496065713, hint: "Read the Millions house: that's how many millions there are." },
          { kind: "input", fields: [{ label: "10 678 794", value: 10, suffix: "millions" }, { label: "496 065 713", value: 496, suffix: "millions" }, { label: "78 641 099", value: 78, suffix: "millions" }] }
        ],
        answer: "**10**, **496** and **78** millions. Read the whole Millions house, not just the millions digit."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Write a question that can be answered using this data.",
        interact: [
          { kind: "bargraph", max: 25, step: 5, minor: 1, label: "Bar graph of survey responses", series: [{ l: "Students", c: "#17608A" }],
            groups: [{ l: "Don't like", v: [3] }, { l: "Like a little", v: [11] }, { l: "Want to try", v: [5] }, { l: "Like", v: [12] }, { l: "Like a lot", v: [20] }] },
          { kind: "input", fields: [{ label: "Try one: how many chose 'Like a lot'?", value: 20 }] }
        ],
        answer: "Answers vary, for example: How many people chose 'Like a lot'? (20) · Which response was the least popular? (Don't like, 3) · How many more chose 'Like' than 'Want to try'? (7)",
        explain: "The slide's question is open. A sample question is added so the class can check one answer."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Describe the route from the bank at C2 to the carwash at D6. The grey squares are roads.",
        interact: [
          { kind: "sketch", bgimg: "img/s3/u7-map.png" },
          { kind: "choose", rows: [
            { t: "From the bank, first go", options: ["North", "South", "East", "West"], a: 0 },
            { t: "To reach the carwash, last go", options: ["North", "South", "East", "West"], a: 0 }] }
        ],
        answer: "Answers vary. For example: go North 1 square to the road at C3, East along the road to E3, North to E5, West to D5, then North 1 square to the carwash at D6.",
        explain: "The grey squares are read as roads. Any route along them is correct; the check only asks for the first and last directions."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "483 160 can be partitioned as 483 000 + 6 160",
        answer: false,
        explain: "483 000 + 6160 = 489 160. A correct partition is 483 000 + 160.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 483160 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Categorise the following numbers as prime, composite or neither: 7, 10, 0, 9.",
        interact: [
          { kind: "array", rows: 1, cols: 7, showTotal: true, hint: "Can you make the number as an array with more than one row? If you can, it's composite." },
          { kind: "choose", rows: [
            { t: "7", options: ["prime", "composite", "neither"], a: 0 },
            { t: "10", options: ["prime", "composite", "neither"], a: 1 },
            { t: "0", options: ["prime", "composite", "neither"], a: 2 },
            { t: "9", options: ["prime", "composite", "neither"], a: 1 }] }
        ],
        answer: "7 is **prime** (factors 1 and 7). 10 is **composite** (1, 2, 5, 10). 0 is **neither**. 9 is **composite** (1, 3, 9)."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Write 458 796 253 in a non-standard form.",
        interact: [
          { kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 458796253, target: 458796253, need: "nonstandard" },
          { kind: "expr", count: 1, target: 458796253, placeholder: "e.g. 458 000 000 + 796 253", mustUse: { re: "\\+", msg: "Join the parts with +." }, sample: ["458 000 000 + 796 253"] }
        ],
        answer: "Answers vary, for example 458 000 000 + 796 253, or 458 796 thousands + 253 ones."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Write features missing from this graph.",
        img: "u7-nograph.png",
        interact: [{ kind: "select", hint: "Tap every feature this graph is missing.", items: [["A title", true], ["A label on the vertical axis", true], ["A scale (numbers) on the vertical axis", true], ["A label on the horizontal axis", true], ["Labels for each bar", true], ["Bars", false]] }],
        answer: "It needs a **title**, **axis labels**, a **scale** on the vertical axis and **labels for each bar**."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Show a right angle with your arms. Communicate how you know this is a right angle.",
        interact: [
          { kind: "angle", target: "right", start: 140, label: "Make a right angle." },
          { kind: "choose", rows: [{ t: "I know it's a right angle because", options: ["it makes a square corner", "the arms are long", "it points up"], a: 0 }] }
        ],
        answer: "A right angle is a **square corner** (90°), like the corner of a book. One arm points straight up and the other straight out."
      }
    ],
    // Review 3
    [
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Select partitions of 427 138. You may select more than one answer.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 427138 },
          { kind: "select", hint: "Tap every partition that makes 427 138.", items: [["A  400 000 + 27 000 + 1380", false], ["B  427 thousands and 138 ones", true], ["C  420 000 + 7000 + 100 + 30 + 8", true], ["D  400 000 + 20 000 + 7000 + 1000 + 300 + 80", false]] }
        ],
        answer: "**B and C**. A and D both make 428 380."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use mental strategies to find the product of: 2 × 42, 6 × 157, 5 × 432.",
        interact: [
          { kind: "cells", cols: 4, w: 110, msg: "Multiply 6 by each part: 100, 50 and 7.", grid: [["#×", "#100", "#50", "#7"], ["#6", { v: 600 }, { v: 300 }, { v: 42 }]] },
          { kind: "input", fields: [{ label: "2 × 42 =", value: 84 }, { label: "6 × 157 =", value: 942 }, { label: "5 × 432 =", value: 2160 }] }
        ],
        answer: "**84** (double 42) · **942** (600 + 300 + 42) · **2160** (10 × 432 = 4320, halved)"
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record as decimals: 5 and 37 hundredths, 3 and 24 hundredths, 2 and 45 hundredths.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 5.37 },
          { kind: "input", fields: [{ label: "5 and 37 hundredths", value: 5.37 }, { label: "3 and 24 hundredths", value: 3.24 }, { label: "2 and 45 hundredths", value: 2.45 }] }
        ],
        answer: "**5.37**, **3.24** and **2.45**"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Write a survey question about students' preferences for after-school activities that uses this Likert scale: 1 = don't like, 2 = like a little, 3 = don't know, 4 = like, 5 = like a lot.",
        interact: [{ kind: "select", hint: "Tap every question that could be answered with this scale.", items: [["How much do you like playing sport after school?", true], ["How much do you like reading after school?", true], ["What time do you get home from school?", false], ["How many after-school activities do you do?", false]] }],
        answer: "Answers vary, for example: 'How much do you like playing sport after school?' The question must ask how much someone likes something, so every answer fits the 1–5 scale.",
        explain: "The slide's question is open. Example questions are added to sort, and the class can write its own."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Mia says, 'A right angle is greater in size than all acute angles.' Is Mia correct? Communicate your thinking.",
        interact: [
          { kind: "angle", start: 60, label: "Drag the arm: every acute angle stays inside the right angle." },
          { kind: "choose", rows: [{ t: "Is Mia correct?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes.** An acute angle is less than 90°, so every acute angle is smaller than a right angle."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "Two hundred and sixty-three thousand four hundred and eighty can be partitioned as 200 000 + 60 000 + 3000 + 400 + 80.",
        answer: true,
        explain: "263 480 = 2 hundred thousands + 6 ten thousands + 3 thousands + 4 hundreds + 8 tens.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 263480 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use mental strategies to find the product of: 9 × 100, 9 × 200, 9 × 1000.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 9, shift: true, hint: "× 100 moves the 9 two places left. × 1000 moves it three places." },
          { kind: "input", fields: [{ label: "9 × 100 =", value: 900 }, { label: "9 × 200 =", value: 1800 }, { label: "9 × 1000 =", value: 9000 }] }
        ],
        answer: "**900**, **1800** (double 900) and **9000**"
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record the weight of the heaviest baby in each set. Set A: 6.421 kg or 6.34 kg. Set B: 7.102 kg or 7.316 kg. Set C: 8.20 kg or 8.125 kg.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 8.2, hint: "Compare the ones, then the tenths. 8.20 has 2 tenths; 8.125 has only 1." },
          { kind: "choose", rows: [
            { t: "Set A", options: ["6.421 kg", "6.34 kg"], a: 0 },
            { t: "Set B", options: ["7.102 kg", "7.316 kg"], a: 1 },
            { t: "Set C", options: ["8.20 kg", "8.125 kg"], a: 0 }] }
        ],
        answer: "**6.421 kg**, **7.316 kg** and **8.20 kg**. Compare the tenths first: more digits doesn't mean heavier."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Describe how the distribution of data is different in these graphs.",
        img: "u7-temps.png",
        interact: [{ kind: "choose", rows: [
          { t: "Which city's temperatures stay about the same all year?", options: ["Sydney", "Darwin"], a: 1 },
          { t: "Which city is coolest in the middle of the year?", options: ["Sydney", "Darwin"], a: 0 }] }],
        answer: "Darwin's temperatures are **even** all year (about 31–35 °C). Sydney's **dip in the middle of the year** (winter, about 17 °C) and are highest in summer (about 28 °C)."
      },
      {
        type: "sr", focus: "Two-dimensional structure A",
        prompt: "Draw a quadrilateral. Then record its attributes.",
        interact: [
          { kind: "sketch" },
          { kind: "select", hint: "Tap every attribute that is true for all quadrilaterals.", items: [["4 straight sides", true], ["4 angles", true], ["4 vertices", true], ["It is a closed shape", true], ["All sides are equal", false], ["It has a right angle", false]] }
        ],
        answer: "Every quadrilateral has **4 straight sides, 4 angles and 4 vertices**, and is closed. Some (like a square) also have equal sides or right angles."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "This area model shows…",
        img: "u7-area215.png",
        options: ["860 × 4", "204 × 15", "215 × 4", "4 × 860"],
        answer: 2,
        explain: "The top is split into 200 and 15, so the number is 215, and the side is 4. 4 × 200 = 800 and 4 × 15 = 60, so 215 × 4 = 860."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the area model to solve 36 divided by 3.",
        img: "u7-area36.png",
        interact: [
          { kind: "pack", mode: "share", n: 3, total: 36, thing: "counters", label: "group" },
          { kind: "input", fields: [{ label: "30 ÷ 3 =", value: 10 }, { label: "6 ÷ 3 =", value: 2 }, { label: "36 ÷ 3 =", value: 12 }] }
        ],
        answer: "**12**. 36 is split into 30 and 6. 30 ÷ 3 = 10 and 6 ÷ 3 = 2, so 36 ÷ 3 = 12."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Order these heights from shortest to tallest: 1.8 m, 1.27 m, 1.82 m, 1.7 m.",
        interact: [
          { kind: "numberline", min: 1.2, max: 1.9, ticks: 10, tol: 0.02, items: [["1.8", 1.8], ["1.27", 1.27], ["1.82", 1.82], ["1.7", 1.7]] },
          { kind: "order", items: ["1.8 m", "1.27 m", "1.82 m", "1.7 m"], answer: [1, 3, 0, 2] }
        ],
        answer: "**1.27 m, 1.7 m, 1.8 m, 1.82 m**"
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Record the year the show 'Home and Away' began.",
        img: "u7-timeline.png",
        interact: [
          { kind: "marker", min: 1960, max: 1990, divs: 6, labels: [1960, 1965, 1970, 1975, 1980, 1985, 1990], label: "?", hint: "Slide the pin to where 'Home and Away' sits on the timeline." },
          { kind: "input", fields: [{ label: "Year", value: 1988 }] }
        ],
        answer: "**1988**"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "How much time is remaining until nine o'clock?",
        img: "u7-clock.png",
        interact: [
          { kind: "jumps", time: true, start: 495, end: 540, steps: [5, 15, 30], hint: "Start at 8:15 and jump to 9:00." },
          { kind: "input", fields: [{ label: "Time remaining", value: 45, suffix: "minutes" }] }
        ],
        answer: "**45 minutes**. 8:15 + 45 minutes = 9:00.",
        explain: "The clock shows 08:15, taken as 8:15 am counting on to 9:00 am."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "This area model represents 123 × 6.",
        img: "u7-area123.png",
        answer: true,
        explain: "123 is split into 100, 20 and 3, and each part is multiplied by 6: 600 + 120 + 18 = 738 = 123 × 6."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Solve 652 × 4 using the area model.",
        interact: [
          { kind: "cells", cols: 4, w: 110, msg: "Multiply 4 by each part: 600, 50 and 2.", grid: [["#×", "#600", "#50", "#2"], ["#4", { v: 2400 }, { v: 200 }, { v: 8 }]] },
          { kind: "input", fields: [{ label: "652 × 4 =", value: 2608 }] }
        ],
        answer: "**2608**. 4 × 600 = 2400, 4 × 50 = 200, 4 × 2 = 8. 2400 + 200 + 8 = 2608."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "On the weekend 532 people went to see a movie. Halfway through the movie, 67 people left because they didn't like it. How many people watched the whole movie? Communicate your strategy.",
        interact: [
          { kind: "bar", whole: { v: 532, l: "532", n: "people" }, parts: [{ v: 67, l: "67", n: "left" }, { v: 465, l: "465", n: "stayed", hide: true }] },
          { kind: "jumps", start: 532, back: true, steps: [2, 5, 60, 70], hint: "Jump back 70, then forward 3. Or back 60, then back 7." },
          { kind: "input", fields: [{ label: "People who watched the whole movie", value: 465 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Compensation", s: "532 − 70 = 462. 70 is 3 too many, so add 3 back: 465." }, { t: "Count up", s: "67 + 3 = 70, + 400 = 470, + 62 = 532. 3 + 400 + 62 = 465." }] },
        answer: "**465 people**. 532 − 67 = 465."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Order the following decimals from smallest to largest: 0.68, 0.8, 0.0086",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.68, hint: "Compare the tenths first. 0.0086 has 0 tenths and 0 hundredths." },
          { kind: "order", items: ["0.68", "0.8", "0.0086"], answer: [2, 0, 1] }
        ],
        answer: "**0.0086, 0.68, 0.8**",
        explain: "0.0086 has ten-thousandths, one place past the chart. It is less than one hundredth."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "Record the mass of the oranges in kilograms and grams.",
        img: "u7-oranges.png",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1858, hint: "The scale shows grams. 1000 g is 1 kg." },
          { kind: "input", fields: [{ label: "Kilograms", value: 1, suffix: "kg" }, { label: "Grams", value: 858, suffix: "g" }] }
        ],
        answer: "**1 kg 858 g** (1858 g = 1.858 kg)"
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "(3 × 5) × 4 =",
        options: ["23", "60", "75", "15"],
        answer: 1,
        explain: "3 × 5 = 15, then 15 × 4 = 60.",
        interact: [{ kind: "array", rows: 3, cols: 5, showTotal: true, hint: "This is 3 × 5. Four of these arrays make (3 × 5) × 4." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw the area model to match 322 × 6.",
        interact: [
          { kind: "cells", cols: 4, w: 110, msg: "Multiply 6 by each part: 300, 20 and 2.", grid: [["#×", "#300", "#20", "#2"], ["#6", { v: 1800 }, { v: 120 }, { v: 12 }]] },
          { kind: "input", fields: [{ label: "322 × 6 =", value: 1932 }] }
        ],
        answer: "**1932**. 6 × 300 = 1800, 6 × 20 = 120, 6 × 2 = 12. 1800 + 120 + 12 = 1932.",
        explain: "The slide's working shows a total of 1832, but 1800 + 120 + 12 = 1932. The correct total is used."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Stage 3 students gathered at a local sushi restaurant. Katrina ate 3 purple plates, 4 pink plates and 2 blue plates. She paid with $300. How much change did she receive? Communicate your strategy.",
        img: "u7-menu.png",
        interact: [
          { kind: "input", fields: [{ label: "3 purple ($25)", prefix: "$", value: 75 }, { label: "4 pink ($27)", prefix: "$", value: 108 }, { label: "2 blue ($35)", prefix: "$", value: 70 }, { label: "Total", prefix: "$", value: 253 }, { label: "Change", prefix: "$", value: 47 }] }
        ],
        cubes: { ops: ["×", "+", "−"], solve: [{ t: "Plate by plate", s: "3 × $25 = $75, 4 × $27 = $108, 2 × $35 = $70. $75 + $108 + $70 = $253. $300 − $253 = $47." }, { t: "Count up for change", s: "$253 + $7 = $260, + $40 = $300. $7 + $40 = $47." }] },
        answer: "**$47 change**. She spent $253 ($75 + $108 + $70).",
        explain: "On the slide she pays with $250, but her plates cost $253, so there would be no change. The payment is changed to $300."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Record the missing numbers on the number line: __, −2, __, 0, 1, __",
        interact: [
          { kind: "jumps", start: 0, min: -4, max: 3, back: true, steps: [1], hint: "Each mark is 1 apart. Jump back from 0 to find the negative numbers." },
          { kind: "input", fields: [{ label: "First box", value: -3 }, { label: "Second box", value: -1 }, { label: "Last box", value: 2 }] }
        ],
        answer: "**−3**, **−1** and **2**. The marks count by 1: −3, −2, −1, 0, 1, 2."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Sketch a square pyramid from the top and side views.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [
            { t: "Top view", options: ["a square with its diagonals", "a triangle", "a circle"], a: 0 },
            { t: "Side view", options: ["a square", "a triangle", "a rectangle"], a: 1 }] }
        ],
        answer: "**Top view:** a square with lines from each corner to the centre (the apex). **Side view:** a triangle."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "(4 × 6) × 3 = 6 × (3 × 4)",
        answer: true,
        explain: "Both sides are 72. The same three numbers are multiplied, just in a different order and grouping (commutative and associative properties).",
        interact: [{ kind: "scale", left: "(4 x 6) x 3", right: "6 x (3 x ?)", answer: 4 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Jai bakes 43 cookies and places them into boxes ready to sell. Each box must have 6 cookies. How many boxes will Jai fill? How many cookies remain unboxed? Communicate your reasoning.",
        interact: [
          { kind: "pack", size: 6, total: 43, label: "box", thing: "cookies" },
          { kind: "input", fields: [{ label: "Boxes filled", value: 7 }, { label: "Cookies left over", value: 1 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Use a multiplication fact", s: "7 × 6 = 42, so 7 boxes hold 42 cookies. 43 − 42 = 1 left over." }, { t: "Skip count", s: "6, 12, 18, 24, 30, 36, 42 is 7 boxes. 1 cookie remains." }] },
        answer: "**7 boxes**, with **1 cookie** left over. 43 ÷ 6 = 7 remainder 1."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record an estimation for this worded problem. Then use a strategy to calculate. In a school of 938 students, 324 parents visited the school for a special assembly. At the end of the assembly, 126 children went home with their parents. How many children stayed at school?",
        interact: [
          { kind: "bar", whole: { v: 938, l: "938", n: "students" }, parts: [{ v: 126, l: "126", n: "went home" }, { v: 812, l: "812", n: "stayed", hide: true }] },
          { kind: "input", fields: [{ label: "Estimate", min: 780, max: 840 }, { label: "Children who stayed", value: 812 }] }
        ],
        cubes: { ops: ["−"], note: "The 324 parents don't change how many children are at school.", solve: [{ t: "Estimate by rounding", s: "About 940 − 130 = 810." }, { t: "Split the subtraction", s: "938 − 100 = 838, − 20 = 818, − 6 = 812." }] },
        answer: "**812 children** stayed. Estimate: about 940 − 130 = 810. The 324 parents are extra information."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What is the range in each of the categories of this dataset?",
        table: [["Bird number", "Travel days", "Stop-rest days"], ["Bird 1", "22", "17"], ["Bird 2", "26", "64"], ["Bird 3", "22", "0"], ["Bird 4", "22", "0"], ["Bird 5", "16", "35"], ["Bird 6", "13", "34"]],
        interact: [
          { kind: "input", fields: [{ label: "Travel days range", value: 13 }, { label: "Stop-rest days range", value: 64 }] }
        ],
        answer: "Travel days: 26 − 13 = **13**. Stop-rest days: 64 − 0 = **64**. The range is the largest value minus the smallest."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Record the area of the green shape, which has been drawn onto a square-centimetre grid.",
        img: "u7-green.png",
        interact: [
          { kind: "areagrid", size: 48, cells: ["000000", "001100", "011110", "001100", "001100", "011110"], hint: "These are the full squares. Then add the two half squares at the top." },
          { kind: "input", fields: [{ label: "Area", value: 15, suffix: "cm²" }] }
        ],
        answer: "**15 cm²**: 14 full squares plus 2 half squares (1 more)."
      }
    ]
  ]
});
