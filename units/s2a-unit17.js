/*
  Stage 2 Year A, Unit 17 — Review of learning (Term 4, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 4, ls: 2, unit: 17,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 17 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which multiplication matches the array? The array has 4 rows of 3 dots.",
        options: ["3 × 5", "3 × 3", "4 × 4", "4 × 3"],
        answer: 3,
        explain: "4 rows of 3 is 4 × 3 = 12. The slide also offered 3 × 4, which gives the same total (the turnaround fact), so that option was changed to 3 × 5 to leave one correct answer.",
        interact: [{ kind: "array", rows: 4, cols: 3, showTotal: true, hint: "This is the array from the slide. Count the rows, then the dots in each row." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "23, 57, 109, 345. Are these numbers odd? How do you know?",
        interact: [
          { kind: "choose", rows: [
            { t: "23", options: ["odd", "even"], a: 0 },
            { t: "57", options: ["odd", "even"], a: 0 },
            { t: "109", options: ["odd", "even"], a: 0 },
            { t: "345", options: ["odd", "even"], a: 0 }] },
          { kind: "choose", rows: [{ t: "How do you know?", options: ["The ones digit is 1, 3, 5, 7 or 9", "The number is bigger than 20", "The tens digit is odd"], a: 0 }] }
        ],
        answer: "**Yes, they are all odd.** Each ones digit (3, 7, 9, 5) is odd, so each number can't be shared into 2 equal groups without 1 left over."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "What fraction is shaded? How do you know?",
        interact: [
          { kind: "shade", parts: 4, pre: [0], hint: "This is the strip from the slide. Count the equal parts and the shaded parts." },
          { kind: "input", fields: [{ label: "Fraction shaded", accept: ["1/4", "one quarter", "a quarter", "one fourth"], placeholder: "e.g. 1/2" }] }
        ],
        answer: "**1/4** (one quarter). The strip has 4 equal parts and 1 part is shaded.",
        explain: "The slide's strip has one shaded part and three unshaded parts of equal length, so it is read as quarters."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "What 2 numbers could go in the missing spaces to make the number sentence equal? 45 + 23 = ___ − ___",
        interact: [
          { kind: "jumps", start: 45, end: 68, steps: [1, 10, 20], hint: "Work out 45 + 23 first." },
          { kind: "expr", count: 2, target: 68, placeholder: "e.g. 70 - 2", mustUse: { re: "-|−", msg: "Use a subtraction, like 70 − 2." }, sample: ["70 - 2", "100 - 32"] }
        ],
        answer: "45 + 23 = **68**, so any subtraction that equals 68 works. Answers vary, for example 70 − 2, 78 − 10 or 100 − 32."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Look at the tally chart. How many students like grapes? How many students like apples and bananas? Which fruit do the least number of students like?",
        interact: [
          { kind: "tally", counts: true, hint: "These are the tallies from the chart. Use + and − if you want to model.", rows: [{ l: "Apples", start: 4 }, { l: "Bananas", start: 5 }, { l: "Oranges", start: 3 }, { l: "Grapes", start: 4 }] },
          { kind: "input", fields: [{ label: "Grapes", value: 4, suffix: "students" }, { label: "Apples and bananas", value: 9, suffix: "students" }] },
          { kind: "choose", rows: [{ t: "Least liked fruit", options: ["Apples", "Bananas", "Oranges", "Grapes"], a: 2 }] }
        ],
        answer: "Grapes: **4** · Apples and bananas: 4 + 5 = **9** · Least liked: **oranges** (3)",
        explain: "The tallies are read from the slide: apples 4, bananas 5 (a bundle of five), oranges 3, grapes 4."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "This array shows 4 rows of 5.",
        answer: true,
        explain: "There are 4 rows and each row has 5 dots: 4 × 5 = 20.",
        interact: [{ kind: "array", rows: 4, cols: 5, showTotal: true, hint: "This is the array from the slide. Count the rows and the dots in a row." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Farmer Cluck has 24 eggs. Draw an array to represent the eggs. Are there any other solutions?",
        interact: [
          { kind: "array", rows: 4, cols: 6, total: 24, showTotal: true, hint: "Change the rows and columns to make an array of 24 eggs." },
          { kind: "expr", count: 3, target: 24, placeholder: "e.g. 4 x 6", mustUse: { re: "[x×*]", msg: "Write it as rows × columns, like 4 × 6." }, sample: ["4 x 6", "3 x 8", "2 x 12"] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Use known facts", s: "4 × 6 = 24 and 3 × 8 = 24, so 4 rows of 6 or 3 rows of 8 both work." }, { t: "Halve and double", s: "Start with 2 rows of 12. Halve the 12 and double the rows: 4 rows of 6. Again: 8 rows of 3." }] },
        answer: "Answers vary. **Yes, there are other solutions:** 1 × 24, 2 × 12, 3 × 8, 4 × 6 (and their turnarounds 24 × 1, 12 × 2, 8 × 3, 6 × 4)."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Name the fraction shown on the number line. How many parts make 1 whole?",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1, 2], hint: "The length from 0 to 1 is cut into 8 equal parts. 3 are shaded." },
          { kind: "input", fields: [{ label: "Fraction", accept: ["3/8", "three eighths"], placeholder: "e.g. 1/2" }] },
          { kind: "input", fields: [{ label: "Parts in 1 whole", value: 8 }] }
        ],
        answer: "**3/8** (three eighths). **8** equal parts make 1 whole.",
        explain: "The slide's number line from 0 to 1 has 8 equal parts with the first 3 shaded."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use a partitioning strategy to solve 45 + 38.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 45, target: 83, hint: "Add 3 tens and 8 ones to 45. Trade 10 ones for a ten." },
          { kind: "input", fields: [{ label: "45 + 38 =", value: 83 }] }
        ],
        answer: "**83**. 40 + 30 = 70, 5 + 8 = 13, 70 + 13 = 83."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Start at the pond. Travel east until you reach the river, then turn north and travel until you pass the hospital. If you make a quarter turn to the left and move west, where will you arrive?",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u17-map.png" },
          { kind: "choose", rows: [
            { t: "Facing north, a quarter turn to the left faces", options: ["east", "west", "south"], a: 1 },
            { t: "You arrive at", options: ["the park", "the tree", "the pond", "the bridge"], a: 0 }] }
        ],
        answer: "**The park.** East from the pond to the river, north until you are above the hospital, then a quarter turn left faces west. Travelling west along the top of the map reaches the park.",
        explain: "The hospital is not on the northward path, so 'until you pass the hospital' is read as going north until you are further north than the hospital."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The first 5 multiples counting by fours are…",
        options: ["4, 8, 9, 12, 16", "4, 8, 12, 16, 20", "12, 16, 20, 24, 28", "5, 10, 15, 20, 25"],
        answer: 1,
        explain: "Count by fours from 4: 4, 8, 12, 16, 20. A includes 9, C starts at the third multiple, and D counts by fives.",
        interact: [{ kind: "jumps", start: 0, end: 20, steps: [4], hint: "Jump in fours from 0. Where do you land?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the 4 number sentences for this fact family: 28, 7 and 4.",
        interact: [
          { kind: "array", rows: 4, cols: 7, showTotal: true, hint: "4 rows of 7. Rotate it to see 7 rows of 4." },
          { kind: "input", fields: [{ label: "4 × 7 =", value: 28 }, { label: "7 × 4 =", value: 28 }, { label: "28 ÷ 4 =", value: 7 }, { label: "28 ÷ 7 =", value: 4 }] }
        ],
        answer: "4 × 7 = 28 · 7 × 4 = 28 · 28 ÷ 4 = 7 · 28 ÷ 7 = 4",
        explain: "The slide shows a fact family triangle with 28 at the top and 7 and 4 at the bottom."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Draw a fraction strip or diagram showing 2/3.",
        interact: [
          { kind: "shade", parts: 3, hint: "The strip is cut into 3 equal parts. Tap to shade two thirds." },
          { kind: "choose", rows: [
            { t: "Equal parts in the whole", options: ["2", "3", "5"], a: 1 },
            { t: "Parts to shade", options: ["1", "2", "3"], a: 1 }] }
        ],
        answer: "Cut the strip into **3 equal parts** and shade **2** of them."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the compensation strategy to solve 75 − 28.",
        interact: [
          { kind: "jumps", start: 75, steps: [2, 10, 30], back: true, hint: "Take away 30 (2 more than 28), then add 2 back." },
          { kind: "input", fields: [{ label: "75 − 28 =", value: 47 }] }
        ],
        answer: "**47**. 28 is 2 less than 30: 75 − 30 = 45, then add back 2: 45 + 2 = 47."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Name these two-dimensional shapes. What features are the same? How are they different?",
        interact: [
          { kind: "corners", view: [620, 210], label: "A rectangle and a trapezium",
            shapes: [
              { l: "A", fill: "#7ED957", p: [[20, 30], [290, 30], [290, 180], [20, 180]] },
              { l: "B", fill: "#5E17EB", p: [[400, 30], [500, 30], [600, 180], [330, 180]], ly: 120 }],
            hint: "Tap a corner to test it with a right angle." },
          { kind: "choose", rows: [
            { t: "Shape A", options: ["rectangle", "trapezium", "triangle"], a: 0 },
            { t: "Shape B", options: ["rectangle", "trapezium", "triangle"], a: 1 }] },
          { kind: "select", hint: "Tap every feature both shapes have.", items: [["4 sides", true], ["4 corners", true], ["At least one pair of parallel sides", true], ["4 right angles", false], ["All sides the same length", false]] }
        ],
        answer: "A is a **rectangle**, B is a **trapezium**. Same: both have 4 sides, 4 corners and at least one pair of parallel sides. Different: the rectangle has 4 right angles and 2 pairs of parallel sides; the trapezium has no right angles and only 1 pair of parallel sides."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "This array shows 5 fives.",
        answer: false,
        explain: "The array has 6 rows of 5, so it shows 6 fives = 30. 5 fives would be 25.",
        interact: [{ kind: "array", rows: 6, cols: 5, showTotal: true, hint: "This is the array from the slide. Count the rows of 5." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Liam used 1 cm × 1 cm squares to cover a rectangle. He made 4 rows with 6 squares in each row. Draw and label your array. Record the area in square centimetres.",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [4, 6], showTotal: true, hint: "Build Liam's rectangle: 4 rows of 6 squares." },
          { kind: "input", fields: [{ label: "Area", value: 24, suffix: "cm²" }] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Multiply rows by squares", s: "4 rows of 6 squares: 4 × 6 = 24 squares, so 24 cm²." }, { t: "Skip count the rows", s: "6, 12, 18, 24. Each square is 1 cm², so the area is 24 cm²." }] },
        answer: "**24 cm²**. 4 rows × 6 squares = 24 squares, and each square is 1 square centimetre."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "A paper strip is divided into 5 equal parts. If you shade 3 of these parts, what fraction of the strip is shaded? How do you know?",
        interact: [
          { kind: "shade", parts: 5, hint: "Tap to shade 3 of the 5 equal parts." },
          { kind: "input", fields: [{ label: "Fraction shaded", accept: ["3/5", "three fifths"], placeholder: "e.g. 1/2" }] }
        ],
        answer: "**3/5** (three fifths). There are 5 equal parts and 3 of them are shaded."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record as many ways as you can to make $1.60. How many ways did you find?",
        interact: [{ kind: "coins", target: 160, hint: "Tap coins to make $1.60, then save it. Find as many different ways as you can." }],
        answer: "Answers vary, for example: $1 + 50c + 10c · $1 + 20c + 20c + 20c · 50c + 50c + 50c + 10c · $1 + 50c + 5c + 5c · 8 × 20c.",
        explain: "The slide asks for all possible ways, but there are far too many with 5c to $2 coins for a warm-up, so students find as many as they can. Check passes for any correct combination."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Name the three-dimensional objects.",
        img: "u17-solids.png",
        interact: [{ kind: "choose", rows: [
          { t: "Object 1 (left)", options: ["square pyramid", "triangular prism", "cone"], a: 0 },
          { t: "Object 2 (right)", options: ["cylinder", "cone", "sphere"], a: 0 }] }],
        answer: "Left: **square pyramid** (a square base and 4 triangular faces meeting at a point). Right: **cylinder** (2 circular faces and a curved surface)."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "6715, 2908, 4144, 8156. Read the numbers. Which one correctly shows the numbers in ascending order?",
        options: ["6715, 4144, 2908, 8156", "2908, 4144, 6715, 8156", "2908, 6715, 4144, 8156", "8156, 6715, 4144, 2908"],
        answer: 1,
        explain: "Ascending means smallest to largest. Compare the thousands: 2, 4, 6, 8. D is in descending order.",
        interact: [{ kind: "order", items: ["6715", "2908", "4144", "8156"], answer: [1, 2, 0, 3] }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Estimate the area of this leaf. Each grid square is 1 square unit.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u17-leaf.png" },
          { kind: "input", fields: [{ label: "About", min: 26, max: 36, suffix: "squares" }] }
        ],
        answer: "About **31 squares** (answers from 26 to 36 are reasonable). Count the whole squares inside the leaf, then join the part squares to make about one whole each.",
        explain: "Measured from the slide's picture, the leaf covers about 31 grid squares. Any estimate from 26 to 36 is accepted."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Are the fractions 1/3 and 2/6 equivalent? Draw a partitioned length to explain your thinking.",
        interact: [
          { kind: "shade", parts: 3, pre: [0], hint: "Thirds: 1/3 is shaded." },
          { kind: "shade", parts: 6, hint: "Sixths: shade 2/6. Does it match the length of 1/3?" },
          { kind: "choose", rows: [{ t: "Are 1/3 and 2/6 equivalent?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes.** When each third is split into 2 equal parts, the whole has 6 parts and 1 third covers 2 sixths. Both shaded lengths are the same."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Lily buys an ice cream that costs $2.40 and pays with a $5 note. How much change will she receive? What combinations of coins could she be given?",
        interact: [
          { kind: "jumps", start: 2.4, end: 5, steps: [0.1, 0.5, 1], money: true, hint: "Count on from $2.40 to $5." },
          { kind: "input", fields: [{ label: "Change", prefix: "$", value: 2.6 }] },
          { kind: "coins", target: 260, hint: "Make $2.60 with coins, then save it. Find another way too." }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Count on", s: "$2.40 + 10c = $2.50, + 50c = $3.00, + $2 = $5.00. 10c + 50c + $2 = $2.60." }, { t: "Take away", s: "$5.00 − $2.00 = $3.00, $3.00 − 40c = $2.60." }] },
        answer: "**$2.60** change. Answers vary for the coins, for example $2 + 50c + 10c, or $1 + $1 + 20c + 20c + 20c."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "The time is quarter past 2. How many minutes is this past 2 o'clock?",
        interact: [
          { kind: "clock", time: "2:15", drag: true },
          { kind: "input", fields: [{ label: "Minutes past 2", value: 15, suffix: "minutes" }] }
        ],
        answer: "**15 minutes.** An hour is 60 minutes, and a quarter of 60 is 15. The minute hand points to the 3."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "The nearest thousand to 6789 is 7000.",
        answer: true,
        explain: "6789 is between 6000 and 7000. The hundreds digit is 7 (5 or more), so it rounds up to 7000.",
        interact: [{ kind: "marker", min: 6000, max: 7000, divs: 10, labels: [6000, 6500, 7000], target: 6789, tol: 30, hint: "Slide the pin to 6789. Is it closer to 6000 or 7000?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Identify the differences between a cube and a pyramid.",
        interact: [{ kind: "choose", rows: [
          { t: "Faces", options: ["Cube: 6 squares · Square pyramid: 1 square and 4 triangles", "Both have 6 faces"], a: 0 },
          { t: "Vertices", options: ["Cube: 8 · Square pyramid: 5", "Both have 8"], a: 0 },
          { t: "Edges", options: ["Cube: 12 · Square pyramid: 8", "Both have 12"], a: 0 },
          { t: "Shape", options: ["A pyramid meets at a point (apex); a cube does not", "Both meet at a point"], a: 0 }] }],
        answer: "A **cube** has 6 square faces, 8 vertices and 12 edges. A **square pyramid** has 1 square face and 4 triangular faces, 5 vertices and 8 edges, and its triangles meet at a point (the apex).",
        explain: "A square pyramid is used for the comparison, as in Review 4."
      },
      {
        type: "sr", focus: "Partitioned fractions B: Model equivalent fractions as lengths",
        prompt: "Name a fraction that is equivalent to 1/3.",
        interact: [
          { kind: "shade", parts: 3, pre: [0], hint: "1/3 of the strip." },
          { kind: "shade", parts: 6, hint: "Sixths. How many sixths match 1/3?" },
          { kind: "input", fields: [{ label: "Equivalent to 1/3", accept: ["2/6", "3/9", "4/12", "5/15", "6/18", "7/21", "8/24", "10/30", "20/60", "100/300"], placeholder: "e.g. 1/2" }] }
        ],
        answer: "Answers vary, for example **2/6**, 3/9 or 4/12. Splitting each third into equal parts gives more, smaller parts that cover the same length."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "If a drink and a packet of chips cost $6.75 and you pay with a $20 note, how much change will you get back?",
        interact: [
          { kind: "jumps", start: 6.75, end: 20, steps: [0.25, 1, 10], money: true, hint: "Count on from $6.75 to $20." },
          { kind: "input", fields: [{ label: "Change", prefix: "$", value: 13.25 }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Count on", s: "$6.75 + 25c = $7.00, + $3 = $10.00, + $10 = $20.00. 25c + $3 + $10 = $13.25." }, { t: "Take away", s: "$20.00 − $7.00 = $13.00, then add back 25c because $7 is 25c more than $6.75: $13.25." }] },
        answer: "**$13.25**"
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record the order of these measurements from longest to shortest: 1 m 75 cm, 250 cm, 2 m 10 cm, 190 cm.",
        interact: [
          { kind: "numberline", min: 150, max: 260, ticks: 10, labelStep: 50, tol: 5, items: [["1 m 75 cm", 175], ["250 cm", 250], ["2 m 10 cm", 210], ["190 cm", 190]] },
          { kind: "order", items: ["1 m 75 cm", "250 cm", "2 m 10 cm", "190 cm"], answer: [1, 2, 3, 0] }
        ],
        answer: "**250 cm, 2 m 10 cm, 190 cm, 1 m 75 cm**. In centimetres: 250, 210, 190, 175."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "What is the smallest number you can make with the digits 4, 5, 8, 0, 9?",
        options: ["98 054", "40 589", "98 540", "90 584"],
        answer: 1,
        explain: "Put the smallest digit first, but a 5-digit number can't start with 0, so start with 4. Then use the rest from smallest to largest: 0, 5, 8, 9 makes 40 589. The slide offered 45 908 instead, which is not the smallest possible, so that option was changed to 40 589.",
        interact: [{ kind: "order", items: ["98 054", "40 589", "98 540", "90 584"], answer: [1, 3, 0, 2] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "What is the volume of this rectangular prism using cubic centimetres? Each cube is 1 cm × 1 cm × 1 cm.",
        img: "u17-prism.png",
        interact: [
          { kind: "array", rows: 2, cols: 2, showTotal: true, hint: "This is one layer: 2 rows of 2 cubes." },
          { kind: "input", fields: [{ label: "Cubes in one layer", value: 4 }, { label: "Layers", value: 3 }, { label: "Volume", value: 12, suffix: "cm³" }] }
        ],
        answer: "**12 cm³**. Each layer has 2 × 2 = 4 cubes and there are 3 layers: 3 × 4 = 12 cubes.",
        explain: "Each cube is taken to be 1 cm × 1 cm × 1 cm, and no cubes are hidden at the back."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Look at these pairs of fractions: 1/2 and 2/4, 1/3 and 2/6, 1/5 and 2/10. How are the pairs related? Explain the pattern.",
        interact: [
          { kind: "shade", parts: 2, pre: [0], hint: "1/2" },
          { kind: "shade", parts: 4, pre: [0, 1], hint: "2/4" },
          { kind: "choose", rows: [
            { t: "Each pair is", options: ["equivalent (the same amount)", "not equal"], a: 0 },
            { t: "The pattern", options: ["Both the numerator and the denominator are doubled", "Only the numerator is doubled", "Add 1 to the top and bottom"], a: 0 }] },
          { kind: "input", fields: [{ label: "Next pair: 1/4 and", accept: ["2/8"], placeholder: "e.g. 1/2" }] }
        ],
        answer: "Each pair is **equivalent**. The second fraction **doubles the numerator and the denominator**: each part is split in 2, so there are twice as many parts and twice as many shaded. Next in the pattern: 1/4 and **2/8**.",
        explain: "The slide's focus is listed as Multiplicative relations A; it is filed as Partitioned fractions B to match the content. The answer box extends the pattern to 1/4 and 2/8."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "At the canteen you buy a juice for $2.50, a chicken burger for $6.00 and popcorn for $0.45. How much do you spend in total?",
        interact: [
          { kind: "jumps", start: 6, steps: [0.05, 0.5, 1, 2], money: true, hint: "Start with the burger, then add the juice and the popcorn." },
          { kind: "input", fields: [{ label: "Total", prefix: "$", value: 8.95 }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Add the dollars, then the cents", s: "$6.00 + $2.00 = $8.00. 50c + 45c = 95c. $8.00 + 95c = $8.95." }, { t: "Round and adjust", s: "Popcorn is 5c less than 50c: $6.00 + $2.50 + 50c = $9.00, then take away 5c: $8.95." }] },
        answer: "**$8.95**"
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Sophie is planning a picnic and has 3 different types of sandwiches: ham, cheese and vegemite. She also has apple juice and water. Record all possible combinations of one sandwich and one drink that Sophie can choose for her picnic.",
        interact: [
          { kind: "combos", pick: 2, total: 6, items: [["ham", "#E0559A", 1], ["cheese", "#E9B500", 1], ["vegemite", "#6B3E1F", 1], ["apple juice", "#22A06B", 1], ["water", "#2F6FE4", 1]] },
          { kind: "input", fields: [{ label: "Number of combinations", value: 6 }] }
        ],
        cubes: { ops: ["×"], also: "Each combination is one sandwich and one drink.", solve: [{ t: "List systematically", s: "Ham + juice, ham + water, cheese + juice, cheese + water, vegemite + juice, vegemite + water: 6." }, { t: "Multiply", s: "3 sandwiches, each with 2 drinks: 3 × 2 = 6." }] },
        answer: "**6 combinations:** ham + apple juice, ham + water, cheese + apple juice, cheese + water, vegemite + apple juice, vegemite + water.",
        explain: "The combination tool lets any 2 items be picked, so the teacher checks each saved pair is one sandwich and one drink."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "The nearest thousand to the number 7897 is 8000.",
        answer: true,
        explain: "7897 is between 7000 and 8000. The hundreds digit is 8 (5 or more), so it rounds up to 8000.",
        interact: [{ kind: "marker", min: 7000, max: 8000, divs: 10, labels: [7000, 7500, 8000], target: 7897, tol: 30, hint: "Slide the pin to 7897. Is it closer to 7000 or 8000?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Describe the volume of this prism in terms of layers. The table shows its top view, side view and front view.",
        img: "u17-views.png",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "The top view is one layer: 3 rows of 4 cubes." },
          { kind: "input", fields: [{ label: "Cubes in one layer", value: 12 }, { label: "Layers", value: 2 }, { label: "Volume", value: 24, suffix: "cubes" }] }
        ],
        answer: "The prism has **2 layers of 12 cubes**: 2 × 12 = **24 cubes**. The top view shows 12 cubes in a layer, and the side and front views are 2 cubes high.",
        explain: "The views are read as a prism 4 cubes long, 3 cubes wide and 2 cubes high, with no gaps inside."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "What complementary fraction part is needed to make one whole from 2/8? Draw a model to justify your thinking.",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1], hint: "2/8 is shaded. Shade the rest to make one whole. How many eighths did you add?" },
          { kind: "input", fields: [{ label: "Fraction needed", accept: ["6/8", "3/4", "six eighths", "three quarters"], placeholder: "e.g. 1/2" }] }
        ],
        answer: "**6/8**. 2/8 + 6/8 = 8/8 = 1 whole. (6/8 is also 3/4.)"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Liam has $15. He wants to buy a toy that costs $8.50 and a book that costs $4.25. How much money will Liam spend in total? How much money will he have left after buying the toy and the book?",
        interact: [
          { kind: "bar", whole: { v: 15, l: "$15.00" }, parts: [{ v: 8.5, l: "toy $8.50" }, { v: 4.25, l: "book $4.25" }, { v: 2.25, l: "$2.25", hide: true, n: "left" }] },
          { kind: "input", fields: [{ label: "Spent", prefix: "$", value: 12.75 }, { label: "Left", prefix: "$", value: 2.25 }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "$8.50 + $4.25 = $12.75. $15.00 − $12.75 = $2.25." }, { t: "Take away one at a time", s: "$15.00 − $8.50 = $6.50. $6.50 − $4.25 = $2.25 left. Spent: $15.00 − $2.25 = $12.75." }] },
        answer: "Spent: **$12.75** · Left: **$2.25**"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Record 3 polygons that have at least one pair of parallel sides.",
        interact: [
          { kind: "classify", view: [880, 250], label: "Eight polygons", hint: "Choose a group, then tap each polygon.",
            cats: [{ k: "y", t: "Has parallel sides", c: "#22A06B" }, { k: "n", t: "No parallel sides", c: "#D9480F" }],
            shapes: [
              { p: "20,40 120,40 120,140 20,140", a: "y", fill: "#6FA0FF" },
              { p: "150,60 300,60 300,130 150,130", a: "y", fill: "#FF6B7F" },
              { p: "350,140 380,50 450,50 480,140", a: "y", fill: "#FFC94D" },
              { p: "510,140 550,50 650,50 610,140", a: "y", fill: "#7FD8F7" },
              { p: "700,40 760,40 790,92 760,144 700,144 670,92", a: "y", fill: "#B58CFF" },
              { p: "40,240 100,165 160,240", a: "n", fill: "#A3E27F" },
              { p: "260,160 310,196 291,240 229,240 210,196", a: "n", fill: "#F7A35C" },
              { p: "430,160 465,182 430,242 395,182", a: "n", fill: "#E88BD3" }] }
        ],
        answer: "Answers vary, for example a **square**, a **rectangle** and a **trapezium**. A parallelogram and a regular hexagon also have parallel sides. The triangle, the regular pentagon and the kite have none."
      }
    ]
  ]
});
