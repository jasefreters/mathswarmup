/*
  Stage 2 Year B, Unit 21 — Review of learning (Term 1, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 1, ls: 1, unit: 21,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 21 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "Which number is the **smallest**?",
        options: ["7054", "7405", "7450", "7504"],
        answer: 0,
        explain: "All have 7 thousands. 7054 has 0 hundreds, so it is the smallest.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 7054 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Count forwards by tens from 100 up to 250. Then count backwards by tens from 320 to 110.",
        interact: [
          { kind: "jumps", start: 100, end: 250, steps: [10], hint: "Jump forwards by tens from 100." },
          { kind: "jumps", start: 320, end: 110, back: true, steps: [10], hint: "Jump back by tens from 320." }
        ],
        answer: "100, 110, 120 … 240, 250. Then 320, 310, 300 … 120, 110."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Identify the grid reference for each landmark: Rocky, the treasure and the boat.",
        interact: [
          { kind: "gridref", src: "img/s2/u21-island.png", alt: "Island map with a grid, columns A to L and rows 1 to 7", box: [4.75, 19.4, 94.5, 91.8], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"], rows: ["1", "2", "3", "4", "5", "6", "7"] },
          { kind: "input", fields: [{ label: "Rocky", accept: ["f3"] }, { label: "Treasure", accept: ["g5"] }, { label: "Boat", accept: ["h3"] }] }
        ],
        answer: "Rocky **F3** · Treasure **G5** · Boat **H3** (letter across, then number down)"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Name the quadrilaterals with parallel sides. Sort the shapes.",
        interact: [{ kind: "classify", label: "Five quadrilaterals", view: [920, 180],
          cats: [{ k: "par", t: "has parallel sides", c: "#22A06B" }, { k: "none", t: "no parallel sides", c: "#D6408B" }],
          shapes: [
            { p: "28,141 165,141 135,50 57,50", a: "par" },
            { p: "226,0 266,0 266,143 226,143", a: "par" },
            { p: "301,45 401,45 401,145 301,145", a: "par" },
            { p: "437,57 483,31 530,32 513,151", a: "none" },
            { p: "578,49 685,49 720,133 612,133", a: "par" }] }],
        answer: "Trapezium (1 pair), rectangle, square and parallelogram (2 pairs each) have parallel sides. The black quadrilateral has none."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Describe how to get from A to B. Draw the route.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u21-town.png" }],
        answer: "Answers vary. Use directions and landmarks, for example: go down the road past the blue roof, turn left at the corner, and B is on the right."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "If you rearrange the digits in 4562 to make 6542, the number becomes smaller.",
        answer: false,
        explain: "6542 has 6 thousands and 4562 has 4 thousands, so 6542 is larger.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 6542 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "Make each number 10 times larger.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 78, hint: "Each digit moves one place to the left." },
          { kind: "input", fields: [{ label: "78", value: 780 }, { label: "321", value: 3210 }, { label: "1208", value: 12080 }] }
        ],
        answer: "780 · 3210 · 12 080 — each digit moves one place to the left."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "On a grid map, what directions do the horizontal and vertical axes show?",
        interact: [{ kind: "choose", rows: [
          { t: "Horizontal axis (across)", options: ["east and west", "north and south"], a: 0 },
          { t: "Vertical axis (up and down)", options: ["east and west", "north and south"], a: 1 }] }],
        answer: "The horizontal axis shows **east–west** (left and right). The vertical axis shows **north–south** (up and down)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Which of these quadrilaterals have **all** sides equal in length? Explain your thinking.",
        interact: [{ kind: "classify", label: "Six quadrilaterals", view: [920, 180],
          cats: [{ k: "eq", t: "all sides equal", c: "#22A06B" }, { k: "no", t: "not all equal", c: "#D6408B" }],
          shapes: [
            { p: "28,141 165,141 135,50 57,50", a: "no" },
            { p: "226,0 266,0 266,143 226,143", a: "no" },
            { p: "301,45 401,45 401,145 301,145", a: "eq" },
            { p: "437,57 483,31 530,32 513,151", a: "no" },
            { p: "578,49 685,49 720,133 612,133", a: "no" },
            { p: "781,42 877,62 892,141 750,141", a: "no" }] }],
        answer: "Only the **square**. The rectangle, trapezium, parallelogram and the other quadrilaterals have sides of different lengths."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record the length of this pencil in millimetres. Slide the marker to the tip of the pencil.",
        img: "u21-pencil.png",
        interact: [
          { kind: "marker", min: 0, max: 10, ticks: 1, minor: 10, target: 8.45, tol: 0.25, label: "tip" },
          { kind: "input", fields: [{ label: "Length", min: 83, max: 86, suffix: "mm" }] }
        ],
        answer: "About **85 mm** (8 cm and about 5 mm). 1 cm = 10 mm."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "Which is the correct **expanded form** of 305 482?",
        options: ["300 000 + 500 + 400 + 80 + 2", "300 000 + 5 000 + 40 + 80 + 2", "300 000 + 5 000 + 400 + 80 + 2", "300 000 + 5 000 + 400 + 8 + 2"],
        answer: 2,
        explain: "3 hundred thousands, 0 ten thousands, 5 thousands, 4 hundreds, 8 tens and 2 ones.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 305482 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "Kate arranged these numbers in **descending** order: 20 101, 21 100, 20 010, 12 001. Is she correct? Put them in the right order.",
        interact: [
          { kind: "choose", rows: [{ t: "Is Kate correct?", options: ["Yes", "No"], a: 1 }] },
          { kind: "order", items: ["20 101", "21 100", "20 010", "12 001"], answer: [1, 0, 2, 3] }
        ],
        answer: "No. Descending order is **21 100, 20 101, 20 010, 12 001**. 21 100 has the most thousands, so it comes first."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "You have $1.30 made up of 4 coins. What different combinations of coins could you have? Save each one you find.",
        interact: [{ kind: "coins", count: 4, target: 130 }],
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Start with the biggest coin", s: "$1 leaves 30c for 3 coins: 10c + 10c + 10c, or 20c + 5c + 5c." }, { t: "Try without a $1 coin", s: "50c + 50c = $1, leaving 30c for 2 coins: 20c + 10c." }] },
        answer: "**$1 + 10c + 10c + 10c**, **$1 + 20c + 5c + 5c**, and **50c + 50c + 20c + 10c**"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "These quadrilaterals have been grouped using one attribute. Describe how they have been grouped.",
        img: "u21-groups.png",
        interact: [{ kind: "choose", rows: [{ t: "They are grouped by", options: ["number of sides", "right angles", "colour"], a: 1 }] }],
        answer: "By **right angles**: the square and rectangle have 4 right angles. The parallelogram, trapezium and other quadrilateral have none."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "This jar has 3 blue, 3 pink and 3 green marbles. What different colour combinations are possible if 3 marbles are randomly selected?",
        img: "u21-jar.png",
        interact: [{ kind: "combos", pick: 3, total: 10, items: [["blue", "#2F6FE4", 3], ["pink", "#E0559A", 3], ["green", "#22A06B", 3]] }],
        answer: "**10 combinations**: BBB, PPP, GGG, BBP, BBG, PPB, PPG, GGB, GGP, BPG"
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "This array can be described as 3 fours are 12.",
        answer: true,
        explain: "3 rows of 4 = 12, so 3 fours are 12.",
        interact: [{ kind: "array", rows: 3, cols: 4, showTotal: true }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Label the tenths on the number line using decimal notation.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.04, items: [["0.1", 0.1], ["0.2", 0.2], ["0.3", 0.3], ["0.4", 0.4], ["0.5", 0.5], ["0.6", 0.6], ["0.7", 0.7], ["0.8", 0.8], ["0.9", 0.9]] }],
        answer: "0.1, 0.2, 0.3 … 0.9 between 0 and 1. Ten tenths make 1."
      },
      {
        type: "sr", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Record 3256 using non-standard place value partitioning. Communicate your reasoning.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 3256, target: 3256, need: "nonstandard" }],
        answer: "For example 32 hundreds + 5 tens + 6 ones, or 3 thousands + 25 tens + 6 ones."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Matt drew angle A. To make it bigger, he made the arms longer to draw angle B. Did Matt make a bigger angle? Try it.",
        img: "u21-matt.png",
        interact: [
          { kind: "angle", start: 60, lengthen: true },
          { kind: "choose", rows: [{ t: "Did Matt make a bigger angle?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No.** The size of an angle is the amount of turn between the arms. Longer arms don't change the turn."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "What might be in this box weighing 1 kg? Communicate your reasoning.",
        img: "u21-box.png",
        answer: "Answers vary: a bag of flour, a pineapple, a 1 L bottle of water, a large book. 1 kg = 1000 g."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Which number is **closest to 700** on a number line?",
        options: ["500", "650", "790", "800"],
        answer: 1,
        explain: "650 is 50 away from 700. 790 is 90 away, 800 is 100 away and 500 is 200 away.",
        interact: [{ kind: "numberline", min: 500, max: 800, ticks: 0.1, labelStep: 100, tol: 15, items: [["500", 500], ["650", 650], ["790", 790], ["800", 800]] }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Record the missing decimal numbers on the washing line.",
        display: "?   0.3   0.4   0.5   0.6   0.7   0.8   0.9   ?",
        interact: [{ kind: "input", fields: [{ label: "First card", value: 0.2 }, { label: "Last card", value: 1 }] }],
        answer: "**0.2** at the start and **1.0** (one) at the end. The pattern counts by tenths."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the compensation strategy to calculate: 28 + 35, 260 − 29 and 125 − 78.",
        interact: [
          { kind: "jumps", start: 35, back: true, steps: [2, 30], hint: "28 + 35: add 30, then take back 2." },
          { kind: "jumps", start: 260, back: true, steps: [1, 30], hint: "260 − 29: take away 30, then add 1 back." },
          { kind: "jumps", start: 125, back: true, steps: [2, 80], hint: "125 − 78: take away 80, then add 2 back." },
          { kind: "input", fields: [{ label: "28 + 35 =", value: 63 }, { label: "260 − 29 =", value: 231 }, { label: "125 − 78 =", value: 47 }] }
        ],
        answer: "35 + 30 − 2 = **63** · 260 − 30 + 1 = **231** · 125 − 80 + 2 = **47**"
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Draw one of these angles and label the arms and the vertex.",
        img: "u21-angles.png",
        interact: [{ kind: "sketch" }],
        answer: "The vertex is the point where the two arms meet. The arms are the two lines that make the angle."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Craig's jug has a litre of water in it. Dina has half a litre in hers. Which jug is Craig's, and which is Dina's? Explain how you know.",
        img: "u21-jugs.png",
        interact: [{ kind: "choose", rows: [
          { t: "Craig's jug (1 litre)", options: ["A", "B", "C"], a: 2 },
          { t: "Dina's jug (half a litre)", options: ["A", "B", "C"], a: 1 }] }],
        answer: "Craig's is **C** (filled to 1000 mL). Dina's is **B** (filled to 500 mL, half of 1000 mL)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "These numbers are arranged in ascending order: 30 248, 30 428, 30 284, 32 804",
        answer: false,
        explain: "30 428 is bigger than 30 284 (4 hundreds vs 2 hundreds). The order should be 30 248, 30 284, 30 428, 32 804.",
        interact: [{ kind: "order", items: ["30 248", "30 428", "30 284", "32 804"], answer: [0, 2, 1, 3] }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Explain why 2.0 is not the same as 0.2.",
        interact: [
          { kind: "pv", cols: ["O", "t"], start: 2 },
          { kind: "pv", cols: ["O", "t"], start: 0.2 }
        ],
        answer: "2.0 is 2 ones. 0.2 is 2 tenths. 2.0 is ten times bigger than 0.2."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Group the numbers to make multiples of 10, then solve.",
        display: "26 + 19 + 4 + 1",
        interact: [
          { kind: "group", items: [26, 19, 4, 1] },
          { kind: "input", fields: [{ label: "Total", value: 50 }] }
        ],
        answer: "(26 + 4) + (19 + 1) = 30 + 20 = **50**"
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Make an angle that is less than a right angle, one that is equal to a right angle, and one that is greater than a right angle.",
        interact: [
          { kind: "angle", label: "Less than a right angle", target: "less", start: 130 },
          { kind: "angle", label: "Equal to a right angle", target: "right", start: 140 },
          { kind: "angle", label: "Greater than a right angle", target: "greater", start: 60 }
        ],
        answer: "A right angle is a quarter turn, like the corner of a book."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Use the structure of rows and columns to find the area of the rectangle.",
        interact: [
          { kind: "areagrid", cells: ["111111", "111111", "111111", "111111"] },
          { kind: "input", fields: [{ label: "Area", value: 24, suffix: "squares" }] }
        ],
        answer: "4 rows of 6 squares: 6 + 6 + 6 + 6 = **24 squares**"
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "What is the **largest** number that can be made by rearranging the digits 4, 7, 2, 5 and 9?",
        options: ["74 259", "97 542", "95 274", "97 245"],
        answer: 1,
        explain: "Put the largest digit in the biggest place: 9, then 7, 5, 4, 2."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Are multiples of even numbers always even numbers? Tap the multiples of 4 to test it. Explain how you know.",
        interact: [
          { kind: "numchart", from: 1, to: 50, answer: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48], hint: "Tap the multiples of 4. Are they all even?" },
          { kind: "choose", rows: [{ t: "Always even?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes.** An even number is a group of twos, so any number of those groups is still made of twos — even."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Sam solved 249 + 58 by changing it to 250 + 57 to make it easier. Does his thinking work? Explain why or why not.",
        interact: [
          { kind: "jumps", start: 250, steps: [7, 50], hint: "Try Sam's way: start at 250 and add 57." },
          { kind: "choose", rows: [{ t: "Does it work?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes.** He moved 1 from 58 to 249. The total stays the same: 250 + 57 = 307 = 249 + 58."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Describe angles A, B and C using: less than, about the same as, or greater than a right angle.",
        img: "u21-abc.png",
        interact: [{ kind: "choose", rows: [
          { t: "Angle A", options: ["less than", "about the same as", "greater than"], a: 1 },
          { t: "Angle B", options: ["less than", "about the same as", "greater than"], a: 2 },
          { t: "Angle C", options: ["less than", "about the same as", "greater than"], a: 0 }] }],
        answer: "A: **about the same as** a right angle · B: **greater than** · C: **less than**"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "On an analogue clock, the number 3 shows two different values. What are they? Drag the long hand to explore.",
        interact: [
          { kind: "clock", time: "3:15", drag: true },
          { kind: "input", fields: [{ label: "For the hour hand, 3 means", value: 3, suffix: "o'clock" }, { label: "For the minute hand, 3 means", value: 15, suffix: "minutes" }] }
        ],
        answer: "**3 o'clock** for the hour hand, and **15 minutes** for the minute hand (3 × 5 minutes)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "This array shows 2 sixes, which is the same as 6 twos.",
        answer: true,
        explain: "2 rows of 6 = 12, and turned around it is 6 rows of 2 = 12. Press Rotate to see it.",
        interact: [{ kind: "array", rows: 2, cols: 6, showTotal: true }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "What is the commutative law? How many facts can you record about this array using commutativity?",
        interact: [{ kind: "array", rows: 5, cols: 3, showTotal: true, hint: "This is 5 rows of 3. Rotate it." }],
        answer: "Changing the order of the numbers doesn't change the answer. Facts: 5 × 3 = 15, 3 × 5 = 15, and the division facts 15 ÷ 3 = 5 and 15 ÷ 5 = 3."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Complete the fact family triangle for 12, then record the number sentences to match.",
        display: "12",
        interact: [{ kind: "pair", labels: ["factor", "factor"], unit: "", rule: "product", target: 12 }],
        answer: "For example 3 and 4: 3 × 4 = 12, 4 × 3 = 12, 12 ÷ 3 = 4, 12 ÷ 4 = 3. (2 and 6 also work.)"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Amira says, \"No, 15 minutes have passed.\" Ben says, \"A quarter of an hour has passed.\" Explain why both are correct.",
        img: "u21-amira-ben.png",
        interact: [{ kind: "clock", time: "3:00", drag: true }],
        answer: "An hour is 60 minutes. A quarter of 60 is 15, so 15 minutes and a quarter of an hour are the same time."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shape",
        prompt: "Look carefully at this design. Draw the lines of symmetry you can see. Explain how you know.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u21-design.png" }],
        answer: "**2 lines of symmetry**: one vertical down the middle and one horizontal across the middle. Each half is a mirror image of the other."
      }
    ]
  ]
});
