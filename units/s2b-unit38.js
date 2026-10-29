/*
  Stage 2 Year B, Unit 38 — Review of learning (Term 4, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 4, ls: 3, unit: 38,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 38 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "An apple costs $2.50, a banana costs $1.20 and an orange costs $1.45. Which is the closest estimate of the total cost?",
        options: ["$4.50", "$5.00", "$5.50", "$6.00"],
        answer: 1,
        cubes: { ops: ["+"], solve: [{ t: "Round each price", s: "$2.50 stays $2.50, $1.20 is about $1, $1.45 is about $1.50. $2.50 + $1 + $1.50 = $5." }, { t: "Add exactly, then compare", s: "$2.50 + $1.20 = $3.70. $3.70 + $1.45 = $5.15. $5.15 is closest to $5.00." }] },
        explain: "$2.50 + $1.20 + $1.45 = $5.15, which is closest to $5.00.",
        interact: [{ kind: "jumps", money: true, start: 2.5, end: 5.15, steps: [1, 0.5, 0.1, 0.05], hint: "Start at $2.50 (the apple). Jump on $1.20 for the banana, then $1.45 for the orange." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is the length of the adult male platypus?",
        interact: [
          { kind: "bargraph", max: 90, step: 10, ylabel: "Length (cm)", xlabel: "Animal", label: "Length of Australian animals (adult males)",
            series: [{ l: "Length", c: "#222222" }],
            groups: [{ l: "Koala", v: [80] }, { l: "Platypus", v: [50] }, { l: "Bell frog", v: [7] }, { l: "Bandicoot", v: [43] }, { l: "Kookaburra", v: [46] }] },
          { kind: "input", fields: [{ label: "Platypus", value: 50, suffix: "cm" }] }
        ],
        answer: "**50 cm**. The top of the platypus bar lines up with 50 on the scale.",
        explain: "Graph redrawn from the slide (data sourced from State of New South Wales, Department of Planning and Environment, 2020). Only the platypus bar sits exactly on a gridline; the other bars are approximate."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Which number sequence doesn't belong? Explain your reasoning.",
        interact: [{ kind: "choose", rows: [{ t: "Doesn't belong:", options: ["A: 3, 6, 12", "B: 4, 8, 16", "C: 4, 8, 15", "D: 6, 12, 24"], a: 2 }] }],
        answer: "**C: 4, 8, 15**. In A, B and D each number is double the one before. In C, double 8 is 16, not 15."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Write the letter that represents [1/4] on the number line.",
        display: "0   A   B   C   D   E   F   G   1",
        interact: [
          { kind: "marker", min: 0, max: 1, divs: 8, labels: [0, 1], target: 0.25, tol: 0.03, label: "[1/4]", hint: "The line from 0 to 1 is cut into 8 equal parts (A to G are the marks between). Drag the pin to [1/4].", msg: "[1/4] is half of a half. Find the middle, then halve again." },
          { kind: "choose", rows: [{ t: "[1/4] is at", options: ["A", "B", "C", "D", "E", "F", "G"], a: 1 }] }
        ],
        answer: "**B**. The line is cut into eighths, and [1/4] = [2/8], so it is the second mark: B."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Which of these is not a right angle? Communicate your reasoning.",
        interact: [
          { kind: "corners", view: [880, 280], r: 26, q: 40, hit: 26, label: "Four angles A to D", shapes: [
            { p: [[60, 230], [240, 230], [240, 218], [72, 218], [72, 50], [60, 50]], fill: "#2F6FE4", marks: [{ v: 0, l: "A" }] },
            { p: [[380, 235], [507, 108], [499, 99], [380, 218], [261, 99], [253, 108]], fill: "#8B5CF6", marks: [{ v: 0, l: "B" }] },
            { p: [[540, 230], [720, 230], [720, 218], [569, 218], [676, 111], [667, 103]], fill: "#2F6FE4", marks: [{ v: 0, l: "C" }] },
            { p: [[720, 140], [847, 267], [856, 259], [737, 140], [856, 21], [847, 13]], fill: "#2F6FE4", marks: [{ v: 0, l: "D" }] }] },
          { kind: "choose", rows: [{ t: "Not a right angle:", options: ["A", "B", "C", "D"], a: 2 }] }
        ],
        answer: "**C**. The right-angle tester fits A, B and D (B and D are just turned). C is smaller than a right angle, so it is acute."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "A movie ticket costs $15.50, a drink costs $5.50 and a snack costs $3.50. Sienna has $20.00 and says she can buy one of each.",
        answer: false,
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Add the prices", s: "$15.50 + $5.50 = $21.00. That is already more than $20, before the snack. All three: $21.00 + $3.50 = $24.50." }, { t: "Take away from $20", s: "$20.00 − $15.50 = $4.50 left after the ticket. The drink costs $5.50, which is more than $4.50." }] },
        explain: "One of each costs $15.50 + $5.50 + $3.50 = $24.50, which is $4.50 more than $20.00.",
        interact: [{ kind: "jumps", money: true, start: 15.5, end: 20, steps: [5, 1, 0.5], hint: "Start at $15.50 (the ticket). Add the drink and the snack. Do you go past $20?" }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Year 4 students are planning a survey about a cake stall for the school fair. Write an example of an open question they could ask about the cake stall.",
        interact: [{ kind: "select", hint: "Tap every open question: one where people can give any answer.", items: [
          ["What cakes would you like to buy at the cake stall?", true],
          ["Do you like chocolate cake? (yes or no)", false],
          ["How could we make the cake stall better?", true],
          ["Will you buy a cupcake? (yes or no)", false],
          ["Why do you like to buy cakes at the fair?", true]] }],
        answer: "Answers vary, for example: What cakes would you like to buy at the cake stall? An open question lets people give any answer, not just yes or no or a set list."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Which number are these multiples of? How do you know? 12, 18, 21, 36, 48",
        interact: [
          { kind: "numchart", from: 1, to: 50, answer: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48], hint: "Tap the multiples of 3. Are 12, 18, 21, 36 and 48 all tapped?" },
          { kind: "choose", rows: [{ t: "They are all multiples of", options: ["2", "3", "4", "6"], a: 1 }] }
        ],
        answer: "**3**. 12 = 4 × 3, 18 = 6 × 3, 21 = 7 × 3, 36 = 12 × 3, 48 = 16 × 3. 21 is odd, so they can't all be multiples of 2, 4 or 6.",
        explain: "Every whole number is also a multiple of 1, but 3 is the answer the question is after."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Copy the bar models on this fraction wall. Draw and label 2 more bars showing quarters and eighths.",
        interact: [
          { kind: "shade", parts: 1, pre: [0], hint: "1 whole" },
          { kind: "shade", parts: 2, pre: [0, 1], hint: "Halves: [1/2] and [1/2]" },
          { kind: "shade", parts: 4, hint: "Quarters. Tap to shade [1/4]." },
          { kind: "shade", parts: 8, hint: "Eighths. Tap to shade [1/8]." },
          { kind: "input", fields: [{ label: "Quarters in [1/2]:", value: 2 }, { label: "Eighths in [1/4]:", value: 2 }] }
        ],
        answer: "The quarters bar has 4 equal parts, each labelled [1/4]. The eighths bar has 8 equal parts, each labelled [1/8]. **2 quarters** make a half and **2 eighths** make a quarter."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Which unit of measure is most useful for measuring the perimeter of a playground? Explain your thinking.",
        interact: [{ kind: "choose", rows: [{ t: "Most useful unit:", options: ["A: centimetres", "B: kilograms", "C: millimetres", "D: metres"], a: 3 }] }],
        answer: "**D: metres**. A playground is big, so metres give a sensible number. Centimetres and millimetres are too small, and kilograms measure mass, not length."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "A customer used a $10 note for 2 drinks costing $4.70 each. Which of these shows the correct change?",
        options: ["50 cents", "60 cents", "70 cents", "80 cents"],
        answer: 1,
        cubes: { ops: ["×", "−"], also: ["+"], solve: [{ t: "Find the cost, then the change", s: "2 × $4.70 = $9.40. $10.00 − $9.40 = 60 cents." }, { t: "Count up from the cost", s: "$9.40 + 60c = $10.00, so the change is 60 cents." }] },
        explain: "The slide says '2 drinks costing $4.70', which could mean $4.70 altogether (change $5.30, not an option). The options only work if each drink is $4.70, so 'each' has been added. 2 × $4.70 = $9.40, and $10 − $9.40 = 60 cents.",
        interact: [{ kind: "jumps", money: true, start: 9.4, end: 10, steps: [0.1, 0.5], hint: "The drinks cost $9.40 altogether. Count on to $10." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Students were surveyed about sports they play. There were 30 responses, and 4 sports identified. Create a table showing how the data might look using tally marks.",
        interact: [{ kind: "tally", counts: true, rows: [{ l: "Soccer" }, { l: "Netball" }, { l: "Cricket" }, { l: "Swimming" }], hint: "Make up some data. Tap + to add tally marks until there are 30 altogether." }],
        answer: "Answers vary. The 4 sports must have 30 tally marks altogether, for example Soccer 11, Netball 8, Cricket 6, Swimming 5. Every fifth mark crosses the four before it."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Complete the number sentences. How did you find the solutions?",
        display: "36 ÷ 2 = ?     ? × 2 = 36     42 ÷ 2 = ?     ? × 2 = 42",
        interact: [
          { kind: "pack", mode: "share", n: 2, total: 36, label: "group", thing: "counters", hint: "Deal the 36 counters into 2 equal groups." },
          { kind: "input", fields: [{ label: "36 ÷ 2 =", value: 18 }, { label: "? × 2 = 36, ? =", value: 18 }, { label: "42 ÷ 2 =", value: 21 }, { label: "? × 2 = 42, ? =", value: 21 }] }
        ],
        answer: "**36 ÷ 2 = 18** and **18 × 2 = 36** · **42 ÷ 2 = 21** and **21 × 2 = 42**. Halve the tens and the ones: half of 30 is 15 and half of 6 is 3, so 18. Half of 40 is 20 and half of 2 is 1, so 21. Multiplying by 2 undoes dividing by 2."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Copy the bar models representing thirds, quarters and fifths. Which is larger out of [2/3], [2/4] or [2/5]? Shade and label the bars to show your reasoning.",
        interact: [
          { kind: "shade", parts: 3, hint: "Thirds. Shade [2/3]." },
          { kind: "shade", parts: 4, hint: "Quarters. Shade [2/4]." },
          { kind: "shade", parts: 5, hint: "Fifths. Shade [2/5]." },
          { kind: "choose", rows: [{ t: "Largest:", options: ["[2/3]", "[2/4]", "[2/5]"], a: 0 }] }
        ],
        answer: "**[2/3]**. Each fraction has 2 parts shaded, and thirds are the biggest parts, so [2/3] covers the most of the bar."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Draw a regular hexagon. Draw straight lines to split your hexagon into smaller shapes you know. What shapes did you make?",
        interact: [
          { kind: "sketch", grid: "triangle", shape: { view: [240, 220], pts: [[60, 10], [180, 10], [240, 110], [180, 210], [60, 210], [0, 110]] } }
        ],
        answer: "Answers vary, for example 6 equilateral triangles (lines from corner to opposite corner), 2 trapeziums (one line across the middle), or 1 rectangle and 2 triangles, or 3 rhombuses."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "Lina bought 8 lollies for 20 cents each. She said she only needed 3 coins to pay for the lollies.",
        answer: true,
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Find the cost first", s: "8 × 20c = 160c = $1.60. $1.60 = $1 + 50c + 10c, which is 3 coins." }, { t: "Count by 20s", s: "20, 40, 60, 80, 100, 120, 140, 160 cents. $1.60 can be paid with a $1 coin, a 50c coin and a 10c coin." }] },
        explain: "8 lollies × 20 cents = $1.60. A $1 coin, a 50c coin and a 10c coin make $1.60, so 3 coins are enough.",
        interact: [{ kind: "coins", count: 3, target: 160, hint: "The lollies cost $1.60. Can you pay with exactly 3 coins?" }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What title could be given to this column graph?",
        interact: [
          { kind: "bargraph", max: 80, step: 10, ylabel: "Student votes", xlabel: "Potential fundraiser games", label: "Column graph of student votes for fundraiser games, no title",
            series: [{ l: "Votes", c: "#4472C4" }],
            groups: [{ l: "Footy toss", v: [74] }, { l: "Obstacle circuit", v: [51] }, { l: "Ring toss", v: [36] }, { l: "Disco dance-off", v: [64] }, { l: "Jellybean jar", v: [42] }, { l: "Teacher baby photos", v: [63] }, { l: "Lucky number", v: [38] }, { l: "Prize wheel", v: [65] }, { l: "Lucky dip", v: [64] }, { l: "Coin toss", v: [43] }] },
          { kind: "select", hint: "Tap every title that fits this graph.", items: [
            ["Student votes for fundraiser games", true],
            ["Which game should we have at the fundraiser?", true],
            ["Our favourite fruits", false],
            ["Number of students in each class", false]] }
        ],
        answer: "Answers vary, for example: Student votes for potential fundraiser games. A good title says what the data is about, using the axis labels.",
        explain: "Graph redrawn from the slide; bar heights are approximate."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "This shape is made of square centimetres. What is the area of the shape? Explain how you know.",
        interact: [
          { kind: "areagrid", cells: ["11111111", "11111111", "11111111"] },
          { kind: "input", fields: [{ label: "Area =", value: 24, suffix: "cm²" }] }
        ],
        answer: "**24 cm²**. There are 3 rows of 8 square centimetres, and 3 × 8 = 24."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Copy the bar models representing fifths and tenths. Shade and label the bars to find which is greater: [4/5] or [7/10]?",
        interact: [
          { kind: "shade", parts: 5, hint: "Fifths. Shade [4/5]." },
          { kind: "shade", parts: 10, hint: "Tenths. Shade [7/10]." },
          { kind: "choose", rows: [{ t: "Greater:", options: ["[4/5]", "[7/10]"], a: 0 }] }
        ],
        answer: "**[4/5]**. Each fifth is the same as 2 tenths, so [4/5] = [8/10], which is more than [7/10]."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Record this time using digital notation. How many minutes until 7 o'clock?",
        interact: [
          { kind: "clock", time: "5:45" },
          { kind: "jumps", time: true, start: 1065, end: 1140, steps: [15, 60], hint: "Count on from 5:45 to 7:00." },
          { kind: "input", fields: [{ label: "Digital time", accept: ["5:45", "05:45"], placeholder: "h:mm" }, { label: "Minutes until 7 o'clock", value: 75, suffix: "min" }] }
        ],
        answer: "**5:45** (quarter to 6). It is 15 minutes to 6:00 and 60 more minutes to 7:00, so **75 minutes** (1 hour 15 minutes).",
        explain: "Read from the slide's clock: the long hand points to 9 and the short hand is just before 6."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value B: Decimals",
        prompt: "Which decimal number is the largest? Explain your reasoning.",
        options: ["0.65", "0.2", "0.03", "0.40"],
        answer: 0,
        explain: "Compare the tenths first: 0.65 has 6 tenths, 0.40 has 4, 0.2 has 2 and 0.03 has 0. 0.65 is the largest.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.04, items: [["0.65", 0.65], ["0.2", 0.2], ["0.03", 0.03], ["0.40", 0.4]] }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Jamilla randomly selected 3 pegs from a pile of blue and green pegs. What is the other possible combination of colours?",
        list: ["3 blue pegs", "2 blue and 1 green", "1 blue and 2 green", "?"],
        interact: [{ kind: "combos", pick: 3, total: 4, items: [["blue", "#1FB4F0", 3], ["green", "#2DC31B", 3]] }],
        answer: "**3 green pegs**. With only blue and green, the 4 combinations are 3 blue, 2 blue and 1 green, 1 blue and 2 green, and 3 green.",
        explain: "The slide's picture shows a pile of green and blue pegs, with more than 3 of each colour."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "This shape is made of square metres. What is the area of the shape? Explain how you know.",
        interact: [
          { kind: "areagrid", size: 54, cells: ["11111111", "11111111", "11111111", "11111111", "11111111"] },
          { kind: "input", fields: [{ label: "Area =", value: 40, suffix: "m²" }] }
        ],
        answer: "**40 m²**. There are 5 rows of 8 square metres, and 5 × 8 = 40."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Write the missing multiples for each sequence.",
        interact: [{ kind: "cells", cols: 6, msg: "Find the jump between neighbours first.", grid: [
          [9, { v: 12 }, 15, 18, { v: 21 }, 24],
          [12, { v: 18 }, 24, 30, { v: 36 }, 42],
          [{ v: 16 }, 24, { v: 32 }, 40, { v: 48 }, 56]] }],
        answer: "9, **12**, 15, 18, **21**, 24 (threes) · 12, **18**, 24, 30, **36**, 42 (sixes) · **16**, 24, **32**, 40, **48**, 56 (eights)."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "How many grams in the following?",
        interact: [
          { kind: "shade", parts: 4, hint: "This strip is 1 kg = 1000 g, cut into quarters. Shade to see each fraction." },
          { kind: "input", fields: [{ label: "[1/2] kg =", value: 500, suffix: "g" }, { label: "[1/4] kg =", value: 250, suffix: "g" }, { label: "[3/4] kg =", value: 750, suffix: "g" }] }
        ],
        answer: "**[1/2] kg = 500 g** · **[1/4] kg = 250 g** · **[3/4] kg = 750 g**. 1 kg = 1000 g. Half of 1000 is 500, half of 500 is 250, and 3 quarters is 3 × 250 = 750."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B: Decimals",
        prompt: "0.78 is a smaller decimal than 0.09. Communicate your reasoning.",
        answer: false,
        explain: "0.78 has 7 tenths and 0.09 has 0 tenths, so 0.78 is larger. 78 hundredths is more than 9 hundredths.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.04, items: [["0.78", 0.78], ["0.09", 0.09]] }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Write these words on a line in order of increasing likelihood: impossible, certain, likely, unlikely, equally likely",
        interact: [{ kind: "order", items: ["impossible", "certain", "likely", "unlikely", "equally likely"], answer: [0, 3, 4, 2, 1] }],
        answer: "**impossible, unlikely, equally likely, likely, certain**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Which 4 shapes only have parallel lines?",
        interact: [{ kind: "classify", label: "Seven blue shapes", view: [820, 300], hint: "Choose a group, then tap each shape. Does every side have a parallel partner?",
          cats: [{ t: "Every side has a parallel side", k: "p", c: "#22A06B" }, { t: "Not every side", k: "n", c: "#E0559A" }],
          shapes: [
            { p: "110,20 40,130 180,130", fill: "#5B9BE8", a: "n", deco: "<text x='110' y='118' text-anchor='middle' font-size='15'>triangle</text>" },
            { p: "240,130 400,130 400,20", fill: "#5B9BE8", a: "n", deco: "<text x='362' y='100' text-anchor='middle' font-size='14'>right-angled</text><text x='362' y='118' text-anchor='middle' font-size='14'>triangle</text>" },
            { p: "500,40 720,40 720,120 500,120", fill: "#5B9BE8", a: "p", deco: "<text x='610' y='86' text-anchor='middle' font-size='15'>rectangle</text>" },
            { p: "80,170 170,170 205,285 45,285", fill: "#5B9BE8", a: "n", deco: "<text x='125' y='240' text-anchor='middle' font-size='15'>trapezium</text>" },
            { p: "260,180 360,180 400,272 300,272", fill: "#5B9BE8", a: "p", deco: "<text x='330' y='232' text-anchor='middle' font-size='15'>rhombus</text>" },
            { p: "560,165 620,225 560,285 500,225", fill: "#5B9BE8", a: "p", deco: "<text x='560' y='230' text-anchor='middle' font-size='15'>square</text>" },
            { p: "740,165 792,195 792,255 740,285 688,255 688,195", fill: "#5B9BE8", a: "p", deco: "<text x='740' y='230' text-anchor='middle' font-size='15'>hexagon</text>" }] },
          { kind: "select", hint: "Tap the 4 shapes that only have parallel sides.", items: [["triangle", false], ["right-angled triangle", false], ["rectangle", true], ["trapezium", false], ["rhombus", true], ["square", true], ["hexagon", true]] }
        ],
        answer: "**Rectangle, rhombus, square and hexagon**. Every side of these shapes has a parallel partner (the regular hexagon has 3 pairs). Triangles have no parallel sides, and the trapezium has one pair of parallel sides and one pair that isn't.",
        explain: "'Only have parallel lines' is read as 'every side is parallel to another side'. This is the reading that gives exactly 4 shapes. The slide labels a slanted 4-sided shape 'rhombus', so it is redrawn with 4 equal sides."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "How many whole numbers are represented in this model? How many tenths are represented?",
        interact: [
          { kind: "marker", min: 0, max: 3, divs: 30, majorEvery: 10, labels: [0, 1, 2, 3], label: "count", hint: "The line goes from 0 to 3. Each whole is cut into small parts. Slide the pin and count." },
          { kind: "input", fields: [{ label: "Wholes", value: 3 }, { label: "Tenths", value: 30 }] }
        ],
        answer: "**3 wholes** (from 0 to 3), and each whole is cut into 10 parts, so **30 tenths**.",
        explain: "Number line redrawn from the slide: 0 to 3 with each whole split into 10 equal parts. 'Whole numbers represented' is read as the number of wholes from 0 to 3 (the labels 0, 1, 2 and 3 are four whole numbers, which some students may say)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "How many faces does this 3D object have? How many edges does it have?",
        img: "u38-pyramid.png",
        interact: [{ kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 10 }] }],
        answer: "It is a pentagonal pyramid: **6 faces** (1 pentagon base and 5 triangles) and **10 edges** (5 around the base and 5 up to the apex).",
        explain: "The base has 5 corners (two of its edges are dashed because they are hidden at the back)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B: Decimals",
        prompt: "Which has the decimal numbers in the correct ascending order?",
        options: ["3.57, 3.75, 5.75, 5.53", "3.57, 3.75, 7.73, 7.35", "3.57, 3.75, 5.73, 7.53", "3.57, 3.75, 7.35, 5.37"],
        answer: 2,
        explain: "On the slide, B (3.57, 3.75, 7.35, 7.73) and D (3.57, 3.75, 5.37, 7.35) were also in ascending order, so three options were correct. B and D have been changed so that only C is correct. In A, 5.53 is smaller than 5.75; in B, 7.35 is smaller than 7.73; in D, 5.37 is smaller than 7.35.",
        interact: [{ kind: "numberline", min: 3, max: 8, ticks: 10, tol: 0.15, items: [["3.57", 3.57], ["3.75", 3.75], ["5.73", 5.73], ["7.53", 7.53]] }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Which colour of tennis ball has the second highest chance of being randomly selected? Explain your thinking.",
        interact: [
          { kind: "classify", label: "15 tennis balls", view: [560, 340], mark: "outline", hint: "Choose a colour, then tap each ball of that colour to count it.",
            cats: [{ t: "Yellow", k: "y", c: "#C9A400" }, { t: "Green", k: "g", c: "#1E8E3E" }, { t: "Red", k: "r", c: "#D9443A" }, { t: "Blue", k: "b", c: "#2F6FE4" }],
            shapes: [
              { circle: [80, 60, 40], fill: "#F2DC3A", a: "y" }, { circle: [180, 60, 40], fill: "#5CCB5F", a: "g" }, { circle: [280, 60, 40], fill: "#F2DC3A", a: "y" }, { circle: [380, 60, 40], fill: "#F37A72", a: "r" }, { circle: [480, 60, 40], fill: "#6FA0F2", a: "b" },
              { circle: [80, 170, 40], fill: "#5CCB5F", a: "g" }, { circle: [180, 170, 40], fill: "#F37A72", a: "r" }, { circle: [280, 170, 40], fill: "#6FA0F2", a: "b" }, { circle: [380, 170, 40], fill: "#F2DC3A", a: "y" }, { circle: [480, 170, 40], fill: "#5CCB5F", a: "g" },
              { circle: [80, 280, 40], fill: "#6FA0F2", a: "b" }, { circle: [180, 280, 40], fill: "#5CCB5F", a: "g" }, { circle: [280, 280, 40], fill: "#6FA0F2", a: "b" }, { circle: [380, 280, 40], fill: "#5CCB5F", a: "g" }, { circle: [480, 280, 40], fill: "#5CCB5F", a: "g" }] },
          { kind: "choose", rows: [{ t: "Second highest chance:", options: ["Yellow", "Green", "Red", "Blue"], a: 3 }] }
        ],
        answer: "**Blue**. There are 6 green, 4 blue, 3 yellow and 2 red balls (15 altogether). Green has the highest chance, then blue."
      },
      {
        type: "mc", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Which of these is not a top, front or side view of the 3D object?",
        img: "u38-lshape.png",
        options: [{ img: "u38-viewA.png", alt: "Three squares in an L: two on top, one below on the left" }, { img: "u38-viewB.png", alt: "Three squares in a row" }, { img: "u38-viewC.png", alt: "Two squares in a row" }, { img: "u38-viewD.png", alt: "Three squares in a row with one below on the left" }],
        answer: 0,
        explain: "The object is 3 cubes in a row with 1 cube in front of the left one. Top view: 3 in a row with 1 below on the left (D). Front view: 3 in a row (B). Side view: 2 squares (C). A doesn't match any view."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Write these in order from smallest to largest: 0.5, [3/4], 0.25, [1/1]",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 4, tol: 0.05, items: [["0.5", 0.5], ["[3/4]", 0.75], ["0.25", 0.25], ["[1/1]", 1]] },
          { kind: "order", items: ["0.5", "3/4", "0.25", "1/1"], answer: [2, 0, 1, 3] }
        ],
        answer: "**0.25, 0.5, [3/4], [1/1]**. 0.25 = [1/4], 0.5 = [1/2], [3/4] = 0.75 and [1/1] = 1 whole."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Jeremy needs to measure a paperclip with a broken ruler. What is the paperclip's length? Explain how you measured it.",
        img: "u38-clip.png",
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Subtract the ends", s: "The paperclip starts at 11 cm and ends at 18 cm. 18 − 11 = 7 cm." }, { t: "Count the centimetre spaces", s: "Count the jumps from 11 to 18: 12, 13, 14, 15, 16, 17, 18. That is 7 centimetres." }] },
        interact: [
          { kind: "jumps", start: 11, end: 18, steps: [1], hint: "Count the centimetres from 11 to 18." },
          { kind: "input", fields: [{ label: "Length", value: 7, suffix: "cm" }] }
        ],
        answer: "**7 cm**. The ruler is broken, so it doesn't start at 0. The paperclip goes from 11 cm to 18 cm, and 18 − 11 = 7.",
        explain: "Read from the slide: the left end of the clip is at about 11 cm and the right end at about 18 cm."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B: Decimals",
        prompt: "Adding a zero to the end of a decimal number makes it 10 times larger. Communicate your reasoning.",
        answer: false,
        explain: "0.5 and 0.50 are the same amount: 5 tenths is the same as 50 hundredths. A zero on the end of a decimal doesn't change its value. (It's 10 times larger only for a whole number, like 5 to 50.)",
        interact: [{ kind: "pv", cols: ["O", "t", "h"], start: 0.5, hint: "This is 0.5. What changes in the chart for 0.50?" }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Is the table or dot plot easier to interpret? Explain your thinking.",
        img: "u38-tabledot.png",
        interact: [{ kind: "choose", rows: [{ t: "Easier to interpret:", options: ["The table", "The dot plot"], a: [0, 1] }] }],
        answer: "Answers vary. The table shows the exact numbers (mystery 5, fairytale 2, factual 8, science fiction 5). The dot plot shows at a glance that factual is the most popular and fairytale the least.",
        explain: "Opinion question: either choice is accepted if the reason is sound."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "This prism has been made using cubic-centimetre blocks. Describe this prism using the term layers. What is the volume of this prism in cubic centimetres?",
        img: "u38-prism.png",
        interact: [
          { kind: "array", rows: 3, cols: 6, showTotal: true, hint: "This is the top layer: 3 rows of 6 cubes." },
          { kind: "input", fields: [{ label: "Cubes in each layer", value: 18 }, { label: "Number of layers", value: 3 }, { label: "Volume =", value: 54, suffix: "cm³" }] }
        ],
        answer: "The prism has **3 layers**, and each layer is 3 rows of 6 cubes = 18 cubes. 3 × 18 = **54 cm³**."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Is 3.7 larger or smaller than 3.58? Explain your reasoning.",
        interact: [
          { kind: "numberline", min: 3, max: 4, ticks: 10, tol: 0.04, items: [["3.7", 3.7], ["3.58", 3.58]] },
          { kind: "choose", rows: [{ t: "3.7 is", options: ["larger than 3.58", "smaller than 3.58"], a: 0 }] }
        ],
        answer: "**Larger**. Both have 3 ones. 3.7 has 7 tenths and 3.58 has only 5 tenths. 3.7 = 3.70, and 70 hundredths is more than 58 hundredths."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Which of these times is closest to midday? How do you know?",
        interact: [
          { kind: "jumps", time: true, start: 720, min: 540, max: 790, steps: [5, 15, 60], back: true, hint: "Start at midday (12:00). Jump forwards or back to each time." },
          { kind: "choose", rows: [{ t: "Closest to midday:", options: ["A: 9:15 am", "B: 12:35 pm", "C: 1:07 pm", "D: 11:45 pm"], a: 1 }] }
        ],
        answer: "**B: 12:35 pm**, only 35 minutes after midday. 9:15 am is 2 h 45 min before, 1:07 pm is 67 minutes after, and 11:45 pm is late at night, close to midnight, not midday."
      }
    ]
  ]
});
