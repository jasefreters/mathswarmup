/*
  Stage 2 Year A, Unit 20 — Review of learning (Term 4, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 4, ls: 5, unit: 20,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 20 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "36 + 27 = ?",
        options: ["53", "63", "73", "83"],
        answer: 1,
        explain: "Bridge the decade: 36 + 4 = 40, then 40 + 23 = 63.",
        interact: [{ kind: "jumps", start: 36, steps: [1, 10], max: 70, hint: "Start at 36. Jump to the next ten, then add the rest of 27." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "On the grid map, what is located at G4, C5 and E7?",
        interact: [
          { kind: "gridref", src: "img/s2/u20-beach.png", alt: "Beach map with a grid, columns A to J and rows 1 to 7, and a compass", box: [6.7, 8.8, 93.1, 91.3], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], rows: ["1", "2", "3", "4", "5", "6", "7"] },
          { kind: "choose", rows: [
            { t: "G4", options: ["the children building a sandcastle", "the green spade", "the striped towel"], a: 0 },
            { t: "C5", options: ["the surfboard", "the life ring", "the fish"], a: 1 },
            { t: "E7", options: ["the crab", "the fish", "the turtle"], a: 2 }
          ] }
        ],
        answer: "G4: **the children building a sandcastle** · C5: **the life ring** · E7: **the turtle**",
        explain: "Go across to the letter first, then up or down to the number."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe the features of these two-dimensional shapes.",
        interact: [
          { kind: "corners", view: [620, 220], label: "A triangle and a trapezium", r: 22, q: 28,
            shapes: [{ p: [[150, 20], [250, 200], [50, 200]], fill: "#00BF63", l: "triangle", ly: 160 }, { p: [[400, 40], [530, 40], [590, 200], [340, 200]], fill: "#5E17EB", l: "trapezium", ly: 130 }],
            hint: "Tap each corner to count the vertices and test the angles." },
          { kind: "input", fields: [
            { label: "Triangle: sides", value: 3 }, { label: "Triangle: vertices", value: 3 },
            { label: "Trapezium: sides", value: 4 }, { label: "Trapezium: vertices", value: 4 },
            { label: "Trapezium: pairs of parallel sides", value: 1 }
          ] }
        ],
        answer: "Triangle: **3 straight sides and 3 vertices** (corners), all angles less than a right angle. Trapezium: **4 straight sides and 4 vertices**, with **1 pair of parallel sides** (top and bottom).",
        explain: "Answers vary. Students may also notice that this triangle has 2 (or 3) equal sides and this trapezium has 2 equal slanted sides."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "If you created a column graph to show the number of students who liked each fruit, what would you label the title and the y-axis?",
        interact: [
          { kind: "tally", counts: true, rows: [{ l: "watermelon", start: 6 }, { l: "strawberries", start: 7 }, { l: "bananas", start: 5 }, { l: "apples", start: 4 }, { l: "oranges", start: 3 }, { l: "blueberries", start: 4 }, { l: "pears", start: 3 }], hint: "This is the class tally. Read each row before planning the graph." },
          { kind: "choose", rows: [
            { t: "Title", options: ["Our favourite fruit", "Number of students", "Watermelon"], a: 0 },
            { t: "y-axis (vertical)", options: ["Type of fruit", "Number of students", "Our favourite fruit"], a: 1 }
          ] }
        ],
        answer: "Title: something like **Our favourite fruit**. y-axis: **Number of students**. (The x-axis would show the type of fruit.)",
        explain: "Answers vary for the title, but it must say what the whole graph is about. The y-axis shows the count, so it is the number of students."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Draw analog clocks with the following times: ten minutes past 3 · ten minutes to 8",
        interact: [
          { kind: "clock", time: "12:00", drag: true },
          { kind: "clock", time: "12:00", drag: true },
          { kind: "input", fields: [{ label: "Ten minutes past 3 in digital time", accept: ["3:10"], placeholder: "h:mm" }, { label: "Ten minutes to 8 in digital time", accept: ["7:50"], placeholder: "h:mm" }] }
        ],
        answer: "Ten minutes past 3: long hand on the **2**, short hand just past the **3** (3:10). Ten minutes to 8: long hand on the **10**, short hand just before the **8** (7:50).",
        explain: "For 'to' times the hour hand has nearly reached the next hour, so it sits just before the 8."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Liam has 36 marbles and finds another 27 more marbles in his toy box. To find the total, Liam added 4 to get to 40. Then, he added 23 more marbles to get 63. Liam correctly used the bridging the decades strategy to find a total of 63 marbles.",
        answer: true,
        explain: "27 = 4 + 23. 36 + 4 = 40 (the next decade), then 40 + 23 = 63. Liam's strategy and total are both correct.",
        interact: [{ kind: "jumps", start: 36, end: 63, steps: [4, 23, 1, 10], hint: "Make Liam's jumps: +4, then +23. Where do you land?" }],
        cubes: { ops: ["+"], solve: [{ t: "Bridge the decade", s: "Split 27 into 4 + 23. 36 + 4 = 40, 40 + 23 = 63." }, { t: "Tens then ones", s: "36 + 20 = 56, 56 + 7 = 63." }] }
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Identify the grid location for: the crab · the surfboard · the red bucket",
        interact: [
          { kind: "gridref", src: "img/s2/u20-beach.png", alt: "Beach map with a grid, columns A to J and rows 1 to 7, and a compass", box: [6.7, 8.8, 93.1, 91.3], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], rows: ["1", "2", "3", "4", "5", "6", "7"] },
          { kind: "input", fields: [{ label: "Crab", accept: ["G6"], placeholder: "e.g. A1" }, { label: "Surfboard", accept: ["B2"], placeholder: "e.g. A1" }, { label: "Red bucket", accept: ["E4"], placeholder: "e.g. A1" }] }
        ],
        answer: "Crab: **G6** · Surfboard: **B2** · Red bucket: **E4**",
        explain: "The surfboard pokes into A2 and C2, but most of it is in B2. The red bucket sits just left of the E–F line, so it is in E4."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Shape A has 4 sides, 2 pairs are parallel, and all angles are right angles. Shape B has 4 sides, 2 pairs are parallel, but it does not have any right angles. Name the 2 shapes and identify how they are different.",
        interact: [{ kind: "choose", rows: [
          { t: "Shape A", options: ["rectangle", "trapezium", "kite"], a: 0 },
          { t: "Shape B", options: ["rectangle", "parallelogram", "trapezium"], a: 1 },
          { t: "How are they different?", options: ["A has right angles and B does not", "A has more sides", "B has no parallel sides"], a: 0 }
        ] }],
        answer: "Shape A is a **rectangle**. Shape B is a **parallelogram**. Both have 2 pairs of parallel sides, but **only the rectangle has right angles**.",
        explain: "A square also fits Shape A (it is a special rectangle), and a rhombus also fits Shape B (it is a special parallelogram)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What features are missing from this graph?",
        img: "u20-bare-graph.png",
        interact: [{ kind: "select", hint: "Tap every feature that is missing.", items: [["a title", true], ["a label on the vertical (y) axis", true], ["a label on the horizontal (x) axis", true], ["numbers on the scale", true], ["names under the columns", true], ["columns", false]] }],
        answer: "Missing: **a title, axis labels, the numbers on the scale and the names of the categories** under each column. Without them we can't tell what the graph shows or how many each column stands for."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D Shape",
        prompt: "Which quadrilateral does not have a line of symmetry? Explain why it does not have a line of symmetry.",
        interact: [
          { kind: "mirror", view: [890, 300], label: "A kite, a trapezium, a square and a parallelogram, each with dashed lines to test", shapes: [
            { p: [[80, 20], [140, 90], [80, 240], [20, 90]], fill: "#00BF63", l: "kite", ly: 285, lines: [[80, 8, 80, 252], [8, 90, 152, 90]] },
            { p: [[230, 90], [320, 90], [370, 230], [180, 230]], fill: "#1A6CFF", l: "trapezium", ly: 285, lines: [[275, 75, 275, 245], [170, 160, 380, 160]] },
            { p: [[420, 90], [560, 90], [560, 230], [420, 230]], fill: "#5E17EB", l: "square", ly: 285, lines: [[490, 75, 490, 245], [405, 75, 575, 245]] },
            { p: [[690, 90], [870, 90], [800, 230], [620, 230]], fill: "#FF80A8", l: "parallelogram", ly: 285, lines: [[745, 75, 745, 245], [610, 160, 880, 160]] }
          ] },
          { kind: "choose", rows: [
            { t: "No line of symmetry:", options: ["kite", "trapezium", "square", "parallelogram"], a: 3 },
            { t: "Why?", options: ["Folding it any way, the two halves never match", "It has no parallel sides", "It has 4 sides"], a: 0 }
          ] }
        ],
        answer: "The **parallelogram**. Whichever way you fold it, the two halves do not sit exactly on top of each other, because its slanted sides lean the same way.",
        explain: "The kite and the trapezium each have 1 line of symmetry; the square has 4."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Use a number line to show 67 + 86 = ? Select the correct answer.",
        options: ["153", "160", "157", "178"],
        answer: 0,
        explain: "67 + 80 = 147, then 147 + 3 = 150, then 150 + 3 = 153.",
        interact: [{ kind: "jumps", start: 67, steps: [1, 10], max: 160, hint: "Start at 67. Add the tens of 86, then the ones." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record the different combinations of coins that can be used to make a total of $2.60.",
        interact: [{ kind: "coins", target: 260, hint: "Tap coins into the purse to make $2.60, then save it. Find as many ways as you can." }],
        answer: "Answers vary, for example: **$2 + 50c + 10c** · **$1 + $1 + 50c + 10c** · **$2 + 20c + 20c + 20c** · **$1 + $1 + 20c + 20c + 20c**"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Identify which two-dimensional shape doesn't belong: parallelogram, kite, rhombus, trapezium. Explain your reasoning, describing the features of each shape.",
        interact: [
          { kind: "corners", view: [960, 220], label: "A parallelogram, a kite, a rhombus and a trapezium", r: 20, q: 24, shapes: [
            { p: [[60, 50], [220, 50], [180, 170], [20, 170]], fill: "#FF80A8", l: "parallelogram", ly: 205 },
            { p: [[330, 20], [390, 80], [330, 200], [270, 80]], fill: "#00BF63", l: "kite", ly: 215 },
            { p: [[510, 50], [630, 50], [580, 170], [460, 170]], fill: "#1A6CFF", l: "rhombus", ly: 205 },
            { p: [[760, 50], [870, 50], [930, 170], [700, 170]], fill: "#5E17EB", l: "trapezium", ly: 205 }
          ], hint: "Look for parallel sides. Tap corners to compare the angles." },
          { kind: "choose", rows: [{ t: "Doesn't belong:", options: ["parallelogram", "kite", "rhombus", "trapezium"], a: 1 }] }
        ],
        answer: "The **kite**. It is the only one with **no parallel sides**. The parallelogram and rhombus have 2 pairs of parallel sides, and the trapezium has 1 pair.",
        explain: "Other reasoning can work in discussion (for example, the trapezium is the only one with exactly 1 pair of parallel sides), but parallel sides give the clearest single answer."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What information is missing from the graph?",
        interact: [
          { kind: "tally", counts: true, rows: [{ l: "watermelon", start: 6 }, { l: "strawberries", start: 7 }, { l: "bananas", start: 5 }, { l: "apples", start: 4 }, { l: "oranges", start: 3 }, { l: "blueberries", start: 4 }, { l: "pears", start: 3 }], hint: "This is the tally the graph was made from." },
          { kind: "bargraph", label: "Column graph of the fruit data with most labels missing", max: 8, step: 1, series: [{ l: "Students", c: "#1A5F82" }], groups: [{ l: "", v: [6] }, { l: "", v: [7] }, { l: "Bananas", v: [5] }, { l: "", v: [4] }, { l: "Oranges", v: [3] }, { l: "Blueberries", v: [4] }, { l: "", v: [3] }] },
          { kind: "select", hint: "Tap everything that is missing.", items: [["a title", true], ["a label on the y-axis", true], ["a label on the x-axis", true], ["names under 4 of the columns", true], ["numbers on the scale", false], ["the columns", false]] }
        ],
        answer: "Missing: **a title** (e.g. Our favourite fruit), **a y-axis label** (Number of students), **an x-axis label** (Type of fruit) and **the names of 4 columns**: watermelon, strawberries, apples and pears.",
        explain: "Matching the tally to the column heights shows which fruit each unlabelled column is."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3DS Objects",
        prompt: "Record how a rectangular prism is different from a pyramid.",
        interact: [{ kind: "choose", rows: [
          { t: "Has an apex (a point at the top)", options: ["rectangular prism", "pyramid", "both"], a: 1 },
          { t: "All faces are rectangles", options: ["rectangular prism", "pyramid", "both"], a: 0 },
          { t: "Has triangular faces", options: ["rectangular prism", "pyramid", "both"], a: 1 },
          { t: "Has 2 matching ends joined by rectangles", options: ["rectangular prism", "pyramid", "both"], a: 0 },
          { t: "Has flat faces, edges and vertices", options: ["rectangular prism", "pyramid", "both"], a: 2 }
        ] }],
        answer: "A rectangular prism has **6 rectangular faces**, 12 edges and 8 vertices, with matching ends. A pyramid has **one base and triangular faces that meet at an apex**.",
        explain: "Answers vary. A square-based pyramid has 5 faces, 8 edges and 5 vertices."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Sam used a number line to solve 98 – 75. He jumped back 70 from 98 to 28, then back 5 to 23. His solution is correct.",
        answer: true,
        explain: "98 − 70 = 28 and 28 − 5 = 23. Check: 23 + 75 = 98, so 98 − 75 = 23 is correct.",
        interact: [{ kind: "jumps", start: 98, end: 23, steps: [5, 10, 70], back: true, min: 20, hint: "Make Sam's jumps: back 70, then back 5." }],
        cubes: { ops: ["−"], solve: [{ t: "Jump back", s: "98 − 70 = 28, 28 − 5 = 23." }, { t: "Count up", s: "75 + 3 = 78, 78 + 20 = 98, so the difference is 23." }] }
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record the number 79: 10 times larger · 100 times larger · 1000 times larger",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 79, shift: true, hint: "Press × 10 to move every digit one place to the left." },
          { kind: "input", fields: [{ label: "10 times larger", value: 790 }, { label: "100 times larger", value: 7900 }, { label: "1000 times larger", value: 79000 }] }
        ],
        answer: "**790** · **7900** · **79 000**. Each time the number is 10 times larger, every digit moves one place to the left."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "What happens to the angle when you move the arms further apart?",
        interact: [
          { kind: "angle", start: 35, hint: "Drag the arm further away from the other arm." },
          { kind: "choose", rows: [{ t: "When the arms move further apart, the angle…", options: ["gets bigger", "gets smaller", "stays the same"], a: 0 }] }
        ],
        answer: "The angle **gets bigger**. An angle measures the amount of turn between the arms, so a bigger opening means a bigger angle."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "At the canteen, there is a spinner for ice cream flavours and another for toppings. How many different outcomes are possible when one flavour and one topping are selected?",
        img: "u20-spinners.png",
        interact: [
          { kind: "combos", pick: 2, total: 8, items: [["strawberry", "#F49AC1", 1], ["chocolate", "#7B3F1D", 1], ["mint choc chip", "#3CCFB4", 1], ["vanilla", "#E9C46A", 1], ["sprinkles", "#D6408B", 1], ["chocolate syrup", "#3B1E0E", 1]] },
          { kind: "input", fields: [{ label: "Number of outcomes", value: 8 }] }
        ],
        answer: "**8 outcomes**. Each of the 4 flavours can go with each of the 2 toppings: 4 × 2 = 8.",
        explain: "Each combination needs one flavour and one topping, so a pair of two flavours does not count.",
        cubes: { ops: ["×"], solve: [{ t: "List them", s: "Strawberry + sprinkles, strawberry + syrup, chocolate + sprinkles, chocolate + syrup, mint + sprinkles, mint + syrup, vanilla + sprinkles, vanilla + syrup = 8." }, { t: "Multiply", s: "4 flavours × 2 toppings = 8 outcomes." }] }
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "How many square metres would you need to cover a rectangle that is 2 metres wide and 5 metres long?",
        interact: [
          { kind: "areagrid", cells: ["11111", "11111"], size: 64 },
          { kind: "input", fields: [{ label: "Area", value: 10, suffix: "m²" }] }
        ],
        answer: "**10 square metres**. 2 rows of 5 square metres: 2 × 5 = 10 m².",
        explain: "Each square on the grid stands for 1 square metre.",
        cubes: { ops: ["×"], solve: [{ t: "Count the squares", s: "Draw 2 rows of 5 one-metre squares and count: 10." }, { t: "Multiply", s: "2 rows × 5 squares = 10 m²." }] }
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "Which number is made up of 5 thousands, 3 hundreds, 2 tens and 4 ones?",
        options: ["5304", "5032", "5234", "5324"],
        answer: 3,
        explain: "5 thousands, 3 hundreds, 2 tens, 4 ones = 5000 + 300 + 20 + 4 = 5324.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 0, target: 5324, need: "standard", hint: "Use + to build 5 thousands, 3 hundreds, 2 tens and 4 ones." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Solve the following: 248 + 36 = ? · 172 − 59 = ? Explain your strategy to a partner.",
        interact: [
          { kind: "jumps", start: 248, steps: [1, 2, 10, 30], max: 290, hint: "248 + 36: try jumping to 250 first." },
          { kind: "jumps", start: 172, steps: [1, 2, 10, 50], back: true, min: 105, hint: "172 − 59: try jumping back 60, then forward 1." },
          { kind: "input", fields: [{ label: "248 + 36 =", value: 284 }, { label: "172 − 59 =", value: 113 }] }
        ],
        answer: "248 + 36 = **284** (248 + 2 = 250, 250 + 34 = 284) · 172 − 59 = **113** (172 − 60 = 112, then add 1 back = 113)",
        explain: "Strategies vary: bridging to 250, splitting into tens and ones, or subtracting 60 and adjusting."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Compare the two angles. Does the length of the arms change the size of the angle?",
        interact: [
          { kind: "angle", start: 28, lengthen: true, hint: "Press the button to change the arm length. Watch the opening." },
          { kind: "choose", rows: [
            { t: "The two angles are…", options: ["the same size", "different sizes"], a: 0 },
            { t: "Does arm length change the size of the angle?", options: ["Yes", "No"], a: 1 }
          ] }
        ],
        answer: "The two angles are **the same size**. **No**, the length of the arms does not change the size of the angle. Only the amount of turn between the arms does."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Archer spins two spinners to create an ice cream. Is it likely, unlikely, or certain that Archer will get chocolate as his ice cream flavour? Is it possible that Archer will get vanilla and sprinkles? Explain your thinking.",
        img: "u20-spinners.png",
        interact: [{ kind: "choose", rows: [
          { t: "Chocolate flavour is…", options: ["likely", "unlikely", "certain"], a: 1 },
          { t: "Vanilla and sprinkles is…", options: ["possible", "impossible"], a: 0 }
        ] }],
        answer: "Chocolate is **unlikely**: it is only 1 of the 4 equal parts of the flavour spinner. Vanilla and sprinkles is **possible**: vanilla is on the flavour spinner and sprinkles is on the topping spinner."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "You are going to roll a standard 6-sided dice 60 times. How many times do you predict it will land on the number 3? Communicate your reasoning.",
        interact: [
          { kind: "pack", mode: "share", n: 6, total: 60, thing: "rolls", label: "number", hint: "Share the 60 rolls fairly between the 6 numbers." },
          { kind: "input", fields: [{ label: "Prediction: number of 3s", value: 10 }] }
        ],
        answer: "About **10 times**. Each of the 6 numbers is equally likely, so 60 ÷ 6 = 10.",
        explain: "This is a prediction: real results will be close to 10 but rarely exactly 10.",
        cubes: { ops: ["÷"], solve: [{ t: "Share fairly", s: "Share 60 rolls between 6 numbers: 10 each." }, { t: "Use a fact", s: "6 × 10 = 60, so 60 ÷ 6 = 10." }] }
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value A",
        prompt: "Five thousand and sixty-two is the same as 5062. Communicate your reasoning.",
        answer: true,
        explain: "5 thousands, 0 hundreds, 6 tens and 2 ones = 5062. The 0 holds the hundreds place.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 0, target: 5062, need: "standard", hint: "Build five thousand and sixty-two. What goes in the hundreds?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Solve 67 + 29 + 13 = ? How could you rearrange the numbers to make it easier to solve?",
        interact: [
          { kind: "group", items: [67, 29, 13] },
          { kind: "choose", rows: [{ t: "Add these two first:", options: ["67 + 29", "67 + 13", "29 + 13"], a: 1 }] },
          { kind: "input", fields: [{ label: "67 + 29 + 13 =", value: 109 }] }
        ],
        answer: "**109**. Add 67 + 13 first to make a tidy **80**, then 80 + 29 = 109.",
        explain: "7 + 3 = 10, so 67 and 13 join to make a multiple of ten."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Match the angle to the description: greater than a right angle · a right angle · less than a right angle",
        interact: [{ kind: "classify", view: [740, 220], label: "Three angles: A, B and C", hint: "Choose a description, then tap the angle that matches it.",
          cats: [{ t: "less than a right angle", k: "less", c: "#1A6CFF" }, { t: "a right angle", k: "right", c: "#00BF63" }, { t: "greater than a right angle", k: "greater", c: "#8B5CF6" }],
          shapes: [
            { p: "40,180 200,180 186,93", a: "less", deco: "<line x1='40' y1='180' x2='200' y2='180' stroke='#222' stroke-width='5' stroke-linecap='round' pointer-events='none'/><line x1='40' y1='180' x2='186' y2='93' stroke='#222' stroke-width='5' stroke-linecap='round' pointer-events='none'/><text x='30' y='60' font-size='30'>A</text>" },
            { p: "350,180 480,180 270,100", a: "greater", deco: "<line x1='350' y1='180' x2='480' y2='180' stroke='#222' stroke-width='5' stroke-linecap='round' pointer-events='none'/><line x1='350' y1='180' x2='270' y2='100' stroke='#222' stroke-width='5' stroke-linecap='round' pointer-events='none'/><text x='255' y='60' font-size='30'>B</text>" },
            { p: "560,180 700,180 560,40", a: "right", deco: "<line x1='560' y1='180' x2='700' y2='180' stroke='#222' stroke-width='5' stroke-linecap='round' pointer-events='none'/><line x1='560' y1='180' x2='560' y2='40' stroke='#222' stroke-width='5' stroke-linecap='round' pointer-events='none'/><text x='520' y='60' font-size='30'>C</text>" }
          ] }],
        answer: "A: **less than a right angle** · B: **greater than a right angle** · C: **a right angle**",
        explain: "The shaded wedge is the opening between the two arms. Compare each one with the square corner of C."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Using the data in the column graph (Favourite sport): Which sport was the most popular? How many students chose basketball and netball altogether? How many more students chose soccer than swimming?",
        interact: [
          { kind: "bargraph", label: "Favourite sport", max: 12, step: 2, series: [{ l: "Students", c: "#002664" }], groups: [{ l: "Soccer", v: [12] }, { l: "Netball", v: [6] }, { l: "Swimming", v: [7] }, { l: "Basketball", v: [8] }, { l: "Dance", v: [10] }] },
          { kind: "choose", rows: [{ t: "Most popular:", options: ["Soccer", "Netball", "Swimming", "Basketball", "Dance"], a: 0 }] },
          { kind: "input", fields: [{ label: "Basketball and netball altogether", value: 14 }, { label: "How many more chose soccer than swimming?", value: 5 }] }
        ],
        answer: "**Soccer** (12 students) · Basketball + netball: 8 + 6 = **14** · Soccer − swimming: 12 − 7 = **5** more",
        explain: "Swimming sits halfway between 6 and 8 on the scale, so it is 7.",
        cubes: { ops: ["+", "−"], solve: [{ t: "Read, then calculate", s: "Basketball 8 + netball 6 = 14. Soccer 12 − swimming 7 = 5." }, { t: "Compare the bars", s: "Run a line across from the soccer and swimming bars: the gap on the scale is 5." }] }
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Identify everyday items that would hold less than 1 litre, about 1 litre, or more than 1 litre.",
        interact: [{ kind: "choose", rows: [
          { t: "a teacup", options: ["less than 1 L", "about 1 L", "more than 1 L"], a: 0 },
          { t: "a carton of milk", options: ["less than 1 L", "about 1 L", "more than 1 L"], a: 1 },
          { t: "a bathtub", options: ["less than 1 L", "about 1 L", "more than 1 L"], a: 2 },
          { t: "a juice box", options: ["less than 1 L", "about 1 L", "more than 1 L"], a: 0 },
          { t: "a bucket", options: ["less than 1 L", "about 1 L", "more than 1 L"], a: 2 }
        ] }],
        answer: "Less than 1 litre: **a teacup, a juice box**. About 1 litre: **a carton of milk**. More than 1 litre: **a bathtub, a bucket**.",
        explain: "Answers vary. Ask the class for their own items in each group. The milk carton is the common 1 litre size."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "Which group of numbers is ordered in ascending order?",
        options: ["4321, 3214, 1432, 2143", "1432, 2143, 3214, 4321", "3214, 2143, 1432, 4321", "2143, 1432, 4321, 3214"],
        answer: 1,
        explain: "Ascending means smallest to largest. Compare the thousands: 1, 2, 3, 4.",
        interact: [{ kind: "order", items: ["4321", "3214", "1432", "2143"], answer: [2, 3, 1, 0] }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Solve the problems: 245 + 35 = ? · 150 − 142 = ? What strategies did you use?",
        interact: [
          { kind: "jumps", start: 245, steps: [5, 10, 30], max: 290, hint: "245 + 35: jump 5 to make a tidy ten first." },
          { kind: "jumps", start: 142, steps: [1, 8, 10], max: 155, hint: "150 − 142: count up from 142 to 150." },
          { kind: "input", fields: [{ label: "245 + 35 =", value: 280 }, { label: "150 − 142 =", value: 8 }] }
        ],
        answer: "245 + 35 = **280** (245 + 5 = 250, 250 + 30 = 280) · 150 − 142 = **8** (count up: 142 + 8 = 150)",
        explain: "The numbers in 150 − 142 are close together, so counting up is quicker than taking away."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Is this angle less than, equal to, about the same as or greater than a right angle? Communicate your reasoning.",
        interact: [
          { kind: "angle", start: 135, hint: "This is the angle on the slide. Drag the arm to a right angle to compare." },
          { kind: "choose", rows: [{ t: "This angle is…", options: ["less than a right angle", "equal to a right angle", "about the same as a right angle", "greater than a right angle"], a: 3 }] }
        ],
        answer: "**Greater than a right angle.** The arms open wider than the square corner of a right angle."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What does the tally table tell you about the most popular pet? Communicate your reasoning.",
        interact: [
          { kind: "tally", counts: true, rows: [{ l: "dogs", start: 11 }, { l: "cats", start: 9 }, { l: "fish", start: 6 }, { l: "bird", start: 2 }, { l: "lizard", start: 3 }, { l: "rabbit", start: 4 }], hint: "Count each row in fives, then ones." },
          { kind: "choose", rows: [{ t: "Most popular pet:", options: ["dogs", "cats", "fish", "rabbit"], a: 0 }] },
          { kind: "input", fields: [{ label: "How many chose dogs?", value: 11 }] }
        ],
        answer: "**Dogs** are the most popular pet with **11** tally marks (two groups of 5 and 1 more). Cats are next with 9."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Label the parts of the angle.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u20-angle.png" },
          { kind: "choose", rows: [
            { t: "The point where the two lines meet", options: ["vertex", "arm", "angle"], a: 0 },
            { t: "Each of the two straight lines", options: ["vertex", "arm", "angle"], a: 1 },
            { t: "The amount of turn between the lines", options: ["vertex", "arm", "angle"], a: 2 }
          ] }
        ],
        answer: "The two straight lines are the **arms**. The point where they meet is the **vertex**. The turn between the arms is the **angle**."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value A",
        prompt: "These 4-digit numbers are written in descending order: 5432, 4987, 4675, 3210.",
        answer: true,
        explain: "Descending means largest to smallest. 5432 has the most thousands. 4987 and 4675 both have 4 thousands, and 9 hundreds > 6 hundreds. 3210 is smallest.",
        interact: [{ kind: "order", items: ["4675", "3210", "5432", "4987"], answer: [2, 3, 0, 1] }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record all the related multiplication and division facts for this array.",
        interact: [
          { kind: "array", rows: 4, cols: 3, showTotal: true, hint: "This is the array on the slide. Press Rotate to see the turnaround fact." },
          { kind: "input", fields: [{ label: "4 × 3 =", value: 12 }, { label: "3 × 4 =", value: 12 }, { label: "12 ÷ 4 =", value: 3 }, { label: "12 ÷ 3 =", value: 4 }] }
        ],
        answer: "**4 × 3 = 12 · 3 × 4 = 12 · 12 ÷ 4 = 3 · 12 ÷ 3 = 4**"
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "What time is the analog clock showing? What time will it be in 2 hours?",
        interact: [
          { kind: "clock", time: "2:45", drag: true },
          { kind: "input", fields: [{ label: "Time now", accept: ["2:45", "quarter to 3", "quarter to three"], placeholder: "h:mm" }, { label: "In 2 hours", accept: ["4:45", "quarter to 5", "quarter to five"], placeholder: "h:mm" }] }
        ],
        answer: "Now: **2:45** (quarter to 3) · In 2 hours: **4:45** (quarter to 5)",
        explain: "The slide's clock has the long hand on the 9 and the short hand drawn on the 3. At quarter to 3 the short hand is almost at the 3, so this reads as 2:45. Drag the long hand around twice to move on 2 hours."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "A column graph shows the number of books read by students in each class. The vertical axis goes up in multiples of 5, and each block on the graph represents 5 books. Why might the graph use a scale of 1 block = 5 books instead of 1 block = 1 book?",
        interact: [{ kind: "choose", rows: [{ t: "Best reason:", options: ["The numbers are large, so the graph stays a sensible size and is easier to read", "It makes every class look the same", "Books can only be counted in fives"], a: 0 }] }],
        answer: "Because the numbers of books are **large**. With 1 block = 5 books the columns fit on the page and are **easier to read and compare**. With 1 block = 1 book they would be very tall."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "The time is 4:19 pm. Describe this time to the nearest 5-minute interval.",
        interact: [
          { kind: "clock", time: "4:19" },
          { kind: "input", fields: [{ label: "Nearest 5 minutes", accept: ["4:20", "4:20 pm", "4:20pm", "20 past 4", "twenty past four", "20 past 4 pm"], placeholder: "h:mm" }] }
        ],
        answer: "About **4:20 pm** (twenty past four). 19 minutes is 1 minute from 20, so it rounds to 20 past.",
        explain: "The long hand is just before the 4, which marks 20 minutes."
      }
    ]
  ]
});
