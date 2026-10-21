/*
  Stage 2 Year B, Unit 28 — Review of learning (Term 2, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 2, ls: 3, unit: 28,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 28 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Partitioned fractions B",
        prompt: "What is the missing fraction?",
        img: "u28-wall.png",
        options: ["[1/4]", "[1/2]", "[1/8]", "[2/4]"],
        answer: 0,
        explain: "The second half is split into 1 eighth, the missing part and 1 eighth. Two eighths make 1 quarter, so the missing part is the other quarter: [1/8] + [1/4] + [1/8] = [1/2].",
        interact: [{ kind: "shade", parts: 8, pre: [4, 7], hint: "This strip is one whole in eighths. The shaded parts are the two eighths. How many eighths fill the gap between them?" }]
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "When orienting a map, we may t_____ the map so that it faces the same way as the ground it represents. I am standing at the cone. To orientate this map, I could turn it to the ________.",
        img: "u28-orient.png",
        interact: [
          { kind: "turns", hint: "Turn the arrow a quarter turn to the right, the way the map was turned." },
          { kind: "choose", rows: [
            { t: "We may ___ the map", options: ["turn", "fold", "draw"], a: 0 },
            { t: "I could turn it to the", options: ["left", "right"], a: 1 }] }
        ],
        answer: "We may **turn** the map. In the picture the map has been turned to the **right** (a quarter turn clockwise), so it faces the same way as the ground.",
        explain: "The map's top row of symbols has moved to the right-hand side in the second picture, so it was turned to the right. Turning to the left is also a fair answer if the class is facing a different way."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "The arrays grow: step 1 is 1 row of 3, step 2 is 2 rows of 3, step 3 is 4 rows of 3. Draw the array for step 4. Write a number sentence for each array.",
        interact: [
          { kind: "array", rows: 4, cols: 3, fixCols: true, target: [8, 3], showTotal: true, hint: "This is step 3: 4 rows of 3. The rows double each step. Build step 4." },
          { kind: "input", fields: [{ label: "Step 1: 1 × 3 =", value: 3 }, { label: "Step 2: 2 × 3 =", value: 6 }, { label: "Step 3: 4 × 3 =", value: 12 }, { label: "Step 4: 8 × 3 =", value: 24 }] }
        ],
        answer: "Step 4 is **8 rows of 3**. 1 × 3 = 3, 2 × 3 = 6, 4 × 3 = 12, 8 × 3 = 24. The number of rows doubles each step."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Write the numbers in expanded notation: 395 682 and 604 003",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 395682 },
          { kind: "input", fields: [{ label: "395 682 =", value: 300000 }, { label: "+", value: 90000 }, { label: "+", value: 5000 }, { label: "+", value: 600 }, { label: "+", value: 80 }, { label: "+", value: 2 }] },
          { kind: "input", fields: [{ label: "604 003 =", value: 600000 }, { label: "+", value: 4000 }, { label: "+", value: 3 }] }
        ],
        answer: "395 682 = **300 000 + 90 000 + 5000 + 600 + 80 + 2** · 604 003 = **600 000 + 4000 + 3** (the zeros need no part)"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "How many house points were awarded to each house in the athletics carnival?",
        interact: [
          { kind: "bargraph", max: 1000, step: 200, minor: 100, ylabel: "House Points", xlabel: "Houses", label: "Athletics Carnival House Points column graph", series: [{ l: "House points", c: "#3BB54A" }],
            groups: [{ l: "Bradman", v: [300], c: "#3BB54A" }, { l: "Goolagong", v: [700], c: "#C1272D" }, { l: "Alcott", v: [1000], c: "#F7931E" }, { l: "Thorpe", v: [500], c: "#29ABE2" }] },
          { kind: "input", fields: [{ label: "Bradman", value: 300 }, { label: "Goolagong", value: 700 }, { label: "Alcott", value: 1000 }, { label: "Thorpe", value: 500 }] }
        ],
        answer: "Bradman **300**, Goolagong **700**, Alcott **1000**, Thorpe **500**.",
        explain: "Each grid line is 100 points. The bar heights were read from the slide's graph."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Partitioned fractions B",
        prompt: "Two sixths are equivalent to one third.",
        answer: true,
        explain: "Cut each third in half and you get sixths. One third covers the same amount as two sixths.",
        interact: [
          { kind: "shade", parts: 6, pre: [0, 1], hint: "Two sixths" },
          { kind: "shade", parts: 3, pre: [0], hint: "One third" }
        ]
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Record a journey from the supermarket to the bank. Use directional language to describe your route.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u28-town.png" }],
        answer: "Answers vary. Use words like forward, left, right, turn, past and next to. For example: leave the supermarket, walk along the road, turn left at the corner, go past the park and the bank is on your right."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Mel has used the associative property to regroup 4 × 15. She split the 15 columns into 3 groups of 5. Write the new number sentence and the solution.",
        interact: [
          { kind: "array", rows: 4, cols: 15, max: 15, showTotal: true, hint: "This is Mel's array: 4 rows of 15. Picture it in 3 groups of 5 columns." },
          { kind: "expr", count: 1, target: 60, placeholder: "e.g. (4 x 5) x 3", mustUse: { re: "\\(", msg: "Use brackets to show how Mel regrouped the numbers." }, sample: ["(4 x 5) x 3"] },
          { kind: "input", fields: [{ label: "4 × 15 =", value: 60 }] }
        ],
        answer: "**4 × 15 = (4 × 5) × 3 = 20 × 3 = 60**. Each group of 5 columns is 4 × 5 = 20, and there are 3 groups."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition 738 546 in non-standard form.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 738546, target: 738546, need: "nonstandard" },
          { kind: "expr", count: 1, target: 738546, placeholder: "e.g. 700 000 + 38 000 + 546", mustUse: { re: "\\+", msg: "Join the parts with +." }, sample: ["700000 + 38000 + 546"] }
        ],
        answer: "Answers vary, for example 700 000 + 38 000 + 546, or 73 ten thousands + 8 thousands + 54 tens + 6 ones."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Give directions from the house to the pond. Fill in the blanks with directional language. Walk ___ past the tree. Turn ___ and walk 10 steps. Turn ___ and walk 10 steps. Turn ___ and walk 10 steps. Turn ___ and walk 10 steps. The pond is on your ___.",
        img: "u28-path.png",
        interact: [{ kind: "choose", rows: [
          { t: "Walk ___ past the tree.", options: ["forward", "backward"], a: 0 },
          { t: "Turn ___ (1st turn)", options: ["left", "right"], a: 0 },
          { t: "Turn ___ (2nd turn)", options: ["left", "right"], a: 1 },
          { t: "Turn ___ (3rd turn)", options: ["left", "right"], a: 1 },
          { t: "Turn ___ (4th turn)", options: ["left", "right"], a: 0 },
          { t: "The pond is on your", options: ["left", "right"], a: 0 }] }],
        answer: "Walk **forward** past the tree. Turn **left**, turn **right**, turn **right**, turn **left**. The pond is on your **left**.",
        explain: "Read from the walker's point of view, starting at the house and facing up the path."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Partitioned fractions B",
        prompt: "Which is equivalent to **one half**?",
        options: ["2 thirds", "3 quarters", "2 sixths", "4 eighths"],
        answer: 3,
        explain: "4 eighths is half of 8 eighths. The others are more than a half (2 thirds, 3 quarters) or less than a half (2 sixths).",
        interact: [{ kind: "shade", parts: 8, hint: "Shade 4 eighths. Is it exactly half?" }]
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Use landmarks and directional language to describe a route from the farm to the hospital.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u28-farm.png" }],
        answer: "Answers vary. For example: from the farm, follow the road past the school, turn right, go past the houses and the hospital is on the corner."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Tanvi the tiler has started paving the courtyard. She has finished the edges: 7 tiles along the top and 4 tiles down the side. How many tiles will cover the whole rectangle when she is finished?",
        interact: [
          { kind: "array", rows: 1, cols: 7, target: [4, 7], showTotal: true, hint: "Start with the top row of 7. Add rows until there are 4 rows." },
          { kind: "input", fields: [{ label: "Tiles", value: 28 }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Use the array", s: "The edges show 4 rows of 7. 4 × 7 = 28 tiles." }, { t: "Skip count", s: "Count by sevens for 4 rows: 7, 14, 21, 28." }] },
        answer: "**28 tiles**. The edges show 4 rows of 7, and 4 × 7 = 28.",
        explain: "The side edge was counted as 4 tiles including the corner tile."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "A school needs to order 14 780 glue sticks. There are no boxes of 100 available from the supplier. Record 2 ways they can order this amount using non-standard partitioning.",
        img: "u28-glue.png",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 14780, target: 14780, need: "nonstandard", hint: "There are no boxes of 100, so break the hundreds into tens." },
          { kind: "expr", count: 2, target: 14780, placeholder: "e.g. 10000 + 4000 + 780", mustUse: { re: "\\+", msg: "Join the parts with +." }, sample: ["10000 + 4000 + 780", "14000 + 780"] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Use the big packs", s: "1 pallet (10 000) + 4 towers (4000) + 78 ten packs (780) = 14 780." }, { t: "Use towers and ten packs", s: "14 towers (14 000) + 78 ten packs (780) = 14 780." }] },
        answer: "Answers vary, for example 1 pallet + 4 towers + 78 ten packs (10 000 + 4000 + 780), or 14 towers + 78 ten packs (14 000 + 780)."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "How many millimetres (mm) are in 1 cm?",
        interact: [
          { kind: "marker", min: 0, max: 2, ticks: 1, minor: 10, target: 1, tol: 0.03, label: "1 cm" },
          { kind: "input", fields: [{ label: "1 cm =", value: 10, suffix: "mm" }] }
        ],
        answer: "**10 mm**. Each centimetre on a ruler has 10 small millimetre marks."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Partitioned fractions B",
        prompt: "[6/8] is equivalent to [3/4].",
        answer: true,
        explain: "On the number lines, [6/8] and [3/4] land in the same place. Every 2 eighths make 1 quarter, so 6 eighths make 3 quarters.",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5], hint: "[6/8]" },
          { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "[3/4]" }
        ]
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Record the landmarks at the following positions on the map: C4, D3, B2",
        interact: [
          { kind: "gridref", src: "img/s2/u28-treasure.png", alt: "Treasure map with a grid, columns A to F and rows 1 to 4", box: [7.7, 12.0, 92.4, 88.3], cols: ["A", "B", "C", "D", "E", "F"], rows: ["4", "3", "2", "1"] },
          { kind: "choose", rows: [
            { t: "C4", options: ["mountains", "palm trees", "volcano", "shark"], a: 0 },
            { t: "D3", options: ["mountains", "palm trees", "volcano", "shark"], a: 1 },
            { t: "B2", options: ["mountains", "palm trees", "volcano", "shark"], a: 2 }] }
        ],
        answer: "C4: **mountains** · D3: **palm trees** · B2: **volcano**. Go across to the letter, then up to the number."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Write the missing number from each fact family triangle. Triangle 1: 15 at the top, ? and 5. Triangle 2: ? at the top, 4 and 6. Triangle 3: 16 at the top, 2 and ?",
        interact: [
          { kind: "array", rows: 3, cols: 5, showTotal: true, hint: "Use the array to check a fact family, for example 3 rows of 5 is 15." },
          { kind: "input", fields: [{ label: "15, ?, 5", value: 3 }, { label: "?, 4, 6", value: 24 }, { label: "16, 2, ?", value: 8 }] }
        ],
        answer: "**3** (3 × 5 = 15) · **24** (4 × 6 = 24) · **8** (2 × 8 = 16)"
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "What decimal would be placed at the arrow on the number line? The line from 0 to 1 is split into 10 equal parts and the arrow is at the 7th mark. Communicate your thinking.",
        interact: [
          { kind: "marker", min: 0, max: 1, divs: 10, majorEvery: 10, labels: [0, 1], target: 0.7, tol: 0.03, label: "arrow", hint: "Each step is one tenth. Slide the pin to the 7th mark." },
          { kind: "input", fields: [{ label: "Decimal", value: 0.7 }] }
        ],
        answer: "**0.7**. The whole is split into 10 tenths and the arrow is at 7 tenths."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Name these parts of an angle: a__ and v_____.",
        interact: [
          { kind: "angle", start: 45 },
          { kind: "choose", rows: [
            { t: "a__ (the lines)", options: ["arm", "arc", "angle"], a: 0 },
            { t: "v_____ (the point)", options: ["vertex", "volume", "vertical"], a: 0 }] }
        ],
        answer: "The lines are the **arms**. The point where the arms meet is the **vertex**."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "$10 + $20 + 50c + 20c + 10c + 5c =",
        options: ["$30.95", "$20.85", "$30.85", "$30.65"],
        answer: 2,
        explain: "The notes make $30. The coins make 50 + 20 + 10 + 5 = 85 cents. $30 + 85c = $30.85.",
        interact: [{ kind: "coins", hint: "Tap the coins in: 50c, 20c, 10c and 5c. How many cents is that?" }]
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Record a route from the parrots to the snakes. Use compass directions and grid references to describe your route.",
        interact: [
          { kind: "gridref", src: "img/s2/u28-zoo.png", alt: "Zoo map with a grid, columns A to E and rows 1 to 5", box: [8.3, 3.2, 97.0, 93.4], cols: ["A", "B", "C", "D", "E"], rows: ["5", "4", "3", "2", "1"] },
          { kind: "choose", rows: [
            { t: "The parrots are in", options: ["B4", "D2", "C3", "E2"], a: 1 },
            { t: "The snakes are in", options: ["B4", "D2", "C3", "B2"], a: 0 }] }
        ],
        answer: "Parrots **D2** → snakes **B4**. For example: go north 2 squares to D4, then west 2 squares to B4. (Or west to B2, then north to B4.)"
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "There are 54 beads in a bowl, and I need to make 6 bracelets with an equal number of beads. How many beads go on each bracelet?",
        interact: [
          { kind: "pack", mode: "share", n: 6, total: 54, thing: "beads", label: "bracelet", hint: "Deal the beads out one at a time onto the 6 bracelets." },
          { kind: "input", fields: [{ label: "Beads on each bracelet", value: 9 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Share equally", s: "Deal 54 beads into 6 groups: each bracelet gets 9." }, { t: "Use a multiplication fact", s: "6 × ? = 54. 6 × 9 = 54, so 54 ÷ 6 = 9." }] },
        answer: "**9 beads**. 54 ÷ 6 = 9, because 6 × 9 = 54."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Record this representation using decimal notation. Two strips of 10 tenths are fully shaded, 2 tenths of the third strip are shaded, and in the fourth strip, 9 of the 10 hundredths in the first tenth are shaded.",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], hint: "Strip 1" },
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], hint: "Strip 2" },
          { kind: "shade", parts: 10, pre: [0, 1], hint: "Strip 3" },
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6, 7, 8], hint: "Strip 4: its first tenth, split into 10 hundredths" },
          { kind: "pv", cols: ["O", "t", "h"], start: 0, hint: "Build the number: ones for the full strips, tenths, then hundredths." },
          { kind: "input", fields: [{ label: "Decimal", value: 2.29 }] }
        ],
        answer: "**2.29**: 2 wholes, 2 tenths and 9 hundredths.",
        explain: "The last strip's first tenth is split into hundredths, and 9 of the 10 are shaded. This was read from a close-up of the slide."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Which of these 3D objects are prisms? Communicate your reasoning.",
        img: "u28-3d.png",
        interact: [{ kind: "select", hint: "Tap every prism.", items: [["A (triangular prism)", true], ["B (pyramid)", false], ["C (cone)", false], ["D (cube)", true]] }],
        answer: "**A and D**. A prism has two matching ends joined by rectangles: A has triangle ends and D (a cube) has square ends. B is a pyramid (it comes to a point) and C is a cone (it has a curved surface)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "Harry has $15. He has enough money to buy a sandwich for $8.50, a cookie for $3.50 and a drink for $3.50 for lunch.",
        answer: false,
        explain: "$8.50 + $3.50 = $12.00, and $12.00 + $3.50 = $15.50. That is 50 cents more than $15.",
        interact: [{ kind: "jumps", start: 0, money: true, steps: [8.5, 3.5], max: 16, hint: "Jump the sandwich, then the cookie, then the drink." }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Record the possible outcomes in a chance experiment using this spinner.",
        img: "u28-spinner4.png",
        interact: [{ kind: "combos", pick: 1, total: 4, items: [["green", "#7DC35A", 1], ["blue", "#1E9AD6", 1], ["red", "#F24747", 1], ["yellow", "#FFE15C", 1]] }],
        answer: "**Green, blue, red or yellow**. There are 4 possible outcomes, and they are equally likely because the 4 parts are the same size."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Which two number sentences represent the commutative property of multiplication? a. 3 × 2 × 5, b. 4 × 5 × 3, c. 5 × 2 × 3. Communicate your reasoning.",
        interact: [{ kind: "select", hint: "Tap the two number sentences.", items: [["a. 3 × 2 × 5", true], ["b. 4 × 5 × 3", false], ["c. 5 × 2 × 3", true]] }],
        answer: "**a and c**. They use the same numbers (3, 2 and 5) in a different order, and both equal 30. b uses a 4, so it is a different product (60).",
        explain: "The slide's layout breaks each number sentence over two lines. They were read as 3 × 2 × 5, 4 × 5 × 3 and 5 × 2 × 3."
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Explain the role of the zero in this decimal: 0.06",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 0.06 },
          { kind: "choose", rows: [{ t: "The 0 after the point shows", options: ["there are no tenths", "there are 6 tenths", "the number is zero"], a: 0 }] }
        ],
        answer: "The zero is a **placeholder**: there are **no tenths**. It keeps the 6 in the hundredths place, so 0.06 is 6 hundredths."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Volume and capacity",
        prompt: "What is the volume of each of these containers?",
        img: "u28-containers.png",
        interact: [{ kind: "input", fields: [{ label: "Milk", value: 1, suffix: "L" }, { label: "Ice cream", value: 1, suffix: "L" }, { label: "Soap", value: 1, suffix: "L" }] }],
        answer: "Each container holds **1 litre** (1 L). Look for the label on each one.",
        explain: "Each container is labelled 1 L on the slide."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "$10.80 + $5.60 + $2.20 + $11.40 =",
        options: ["$29.00", "$28.40", "$30.20", "$30.00"],
        answer: 3,
        explain: "Make friendly pairs: $10.80 + $2.20 = $13.00 and $5.60 + $11.40 = $17.00. $13 + $17 = $30.00.",
        interact: [{ kind: "group", items: ["$10.80", "$5.60", "$2.20", "$11.40"] }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Cameron rolled a 6. Does the outcome of this one roll change the likelihood of him getting a 6 on the next roll? Why or why not?",
        img: "u28-dice.png",
        interact: [
          { kind: "combos", pick: 1, total: 6, items: [["1", "#E5484D", 1], ["2", "#E5484D", 1], ["3", "#E5484D", 1], ["4", "#E5484D", 1], ["5", "#E5484D", 1], ["6", "#E5484D", 1]] },
          { kind: "choose", rows: [{ t: "Does it change the likelihood?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No.** A dice doesn't remember. Each roll has the same 6 equally likely outcomes, so the chance of a 6 is always 1 in 6."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the associative property to multiply, thinking about multiples of 10 to regroup: 30 × 7. Write the new number sentence and the solution.",
        interact: [
          { kind: "expr", count: 1, target: 210, placeholder: "e.g. 10 x (3 x 7)", mustUse: { re: "\\(", msg: "Use brackets to show the regrouping, like 10 × (3 × 7)." }, sample: ["10 x (3 x 7)"] },
          { kind: "input", fields: [{ label: "30 × 7 =", value: 210 }] }
        ],
        answer: "**30 × 7 = 10 × (3 × 7) = 10 × 21 = 210**. 30 is 3 × 10, so multiply 3 × 7 first, then × 10."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "468 + 253 = ? What strategy did you use to solve the problem?",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { H: 6, T: 11, O: 11 }, target: 721, need: "standard", hint: "Here are 468 and 253 combined: 6 hundreds, 11 tens, 11 ones. Group the tens and ones." },
          { kind: "input", fields: [{ label: "468 + 253 =", value: 721 }] }
        ],
        answer: "**721**. For example, partition: 400 + 200 = 600, 60 + 50 = 110, 8 + 3 = 11, and 600 + 110 + 11 = 721. Or jump: 468 + 200 = 668, + 50 = 718, + 3 = 721."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Which house won the carnival? Which house received the least number of house points? How many more points did Alcott receive than Bradman?",
        interact: [
          { kind: "bargraph", max: 1000, step: 200, minor: 100, ylabel: "House Points", xlabel: "Houses", label: "Athletics Carnival House Points column graph", series: [{ l: "House points", c: "#3BB54A" }],
            groups: [{ l: "Bradman", v: [300], c: "#3BB54A" }, { l: "Goolagong", v: [700], c: "#C1272D" }, { l: "Alcott", v: [1000], c: "#F7931E" }, { l: "Thorpe", v: [500], c: "#29ABE2" }] },
          { kind: "choose", rows: [
            { t: "Won the carnival", options: ["Bradman", "Goolagong", "Alcott", "Thorpe"], a: 2 },
            { t: "Least points", options: ["Bradman", "Goolagong", "Alcott", "Thorpe"], a: 0 }] },
          { kind: "input", fields: [{ label: "Alcott has ___ more than Bradman", value: 700 }] }
        ],
        answer: "**Alcott** won (1000 points). **Bradman** received the least (300). Alcott received **700** more points than Bradman (1000 − 300)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "I have $10 and want to buy a toy for $7.70. My change will be $3.30.",
        answer: false,
        explain: "Count on from $7.70: + 30c = $8.00, + $2.00 = $10.00. The change is $2.30, not $3.30.",
        interact: [{ kind: "jumps", start: 7.7, money: true, steps: [0.1, 0.3, 1, 2], max: 10, hint: "Count on from $7.70 to $10." }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Finish these statements to describe the likelihood of an outcome when using this spinner. It is likely I will spin… It is unlikely I will spin… It is equally likely I will spin…",
        img: "u28-spinner8.png",
        interact: [
          { kind: "tally", rows: [{ l: "blue", a: 3 }, { l: "red", a: 2 }, { l: "green", a: 2 }, { l: "yellow", a: 1 }], counts: true, hint: "Count the sections of each colour." },
          { kind: "choose", rows: [
            { t: "Likely", options: ["blue", "red", "green", "yellow"], a: 0 },
            { t: "Unlikely", options: ["blue", "red", "green", "yellow"], a: 3 },
            { t: "Equally likely", options: ["red or green", "blue or yellow", "blue or red"], a: 0 }] }
        ],
        answer: "Likely: **blue** (3 of 8 sections, the most). Unlikely: **yellow** (only 1 section). Equally likely: **red or green** (2 sections each).",
        explain: "The spinner has 8 sections: 3 blue (one is a lighter blue), 2 red, 2 green and 1 yellow. Blue is the most likely colour, though 3 out of 8 is still less than half."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "7 × 6 is … Record the number sentences to match each partitioning of the array. Array 1: 7 rows of 6, split into 5 columns and 1 column. Array 2: split into 5 rows and 2 rows.",
        interact: [
          { kind: "array", rows: 7, cols: 6, showTotal: true, hint: "This is 7 rows of 6. Picture the split lines." },
          { kind: "input", fields: [{ label: "Array 1: 7 × 5 =", value: 35 }, { label: "+ 7 × 1 =", value: 7 }, { label: "Array 2: 5 × 6 =", value: 30 }, { label: "+ 2 × 6 =", value: 12 }, { label: "7 × 6 =", value: 42 }] }
        ],
        answer: "Array 1: **7 × 5 + 7 × 1 = 35 + 7 = 42**. Array 2: **5 × 6 + 2 × 6 = 30 + 12 = 42**. Both show 7 × 6 = 42."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "463 − 48 = ? What strategy did you use to solve the problem?",
        interact: [
          { kind: "jumps", start: 463, back: true, steps: [1, 3, 5, 10, 40, 50], hint: "Try jumping back 50, then forward 2. Or back 40, then back 8." },
          { kind: "input", fields: [{ label: "463 − 48 =", value: 415 }] }
        ],
        answer: "**415**. For example, compensation: 463 − 50 = 413, then add 2 back: 415. Or jump back 40 to 423, then back 8 to 415."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the triangles that have a right angle.",
        interact: [
          { kind: "corners", view: [1900, 640], r: 44, q: 70, hit: 34, shapes: [
            { p: [[102, 577], [308, 220], [514, 577]], l: "A", fill: "#F2884A", ly: 470 },
            { p: [[610, 208], [977, 208], [610, 575]], l: "B", fill: "#2F8FC0", lx: 700, ly: 300 },
            { p: [[970, 442], [1227, 185], [1483, 442]], l: "C", fill: "#7B4FE0", ly: 360 },
            { p: [[1525, 178], [1820, 178], [1673, 590]], l: "D", fill: "#2E8F78", ly: 290 }] },
          { kind: "select", hint: "Tap every triangle with a right angle.", items: [["A", false], ["B", true], ["C", true], ["D", false]] }
        ],
        answer: "**B and C**. B has a right angle in the top-left corner. C has a right angle at the top. A and D have no right angles.",
        explain: "The triangles were measured from the slide: B's top-left corner and C's top corner are both 90°."
      }
    ]
  ]
});
