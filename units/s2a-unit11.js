/*
  Stage 2 Year A, Unit 11 — Review of learning (Term 3, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 3, ls: 1, unit: 11,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 11 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "A runner completes 5 laps of the oval in the morning. In the afternoon, he runs 6 times as many laps. How many laps does he run in the afternoon?",
        options: ["11", "30", "24", "35"],
        answer: 1,
        explain: "6 times as many as 5 is 6 × 5 = 30. 11 is 5 + 6, which adds instead of multiplying.",
        interact: [{ kind: "jumps", start: 0, end: 30, steps: [5], hint: "Each jump is the 5 morning laps. Make 6 jumps." }],
        cubes: { ops: ["×"], solve: [{ t: "Skip count", s: "Count by fives 6 times: 5, 10, 15, 20, 25, 30." }, { t: "Use a known fact", s: "6 × 5 is half of 6 × 10 = 60, so 6 × 5 = 30." }] }
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Order these numbers from smallest to largest: 4567, 4467, 4577, 5467.",
        interact: [{ kind: "order", items: ["4567", "4467", "4577", "5467"], answer: [1, 0, 2, 3] }],
        answer: "**4467, 4567, 4577, 5467**. Compare the thousands first (5467 is largest), then the hundreds (4467 has 4 hundreds), then the tens (4567 has 6 tens, 4577 has 7 tens)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the name of the parts of the angle labelled A and B.",
        img: "u11-angle.png",
        interact: [{ kind: "choose", rows: [
          { t: "A", options: ["vertex", "arm", "angle"], a: 0 },
          { t: "B", options: ["vertex", "arm", "angle"], a: 1 }] }],
        answer: "A is the **vertex** (the point where the arms meet). B is an **arm** (one of the two lines that make the angle)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Record the number of faces, edges and vertices. Record whether it is a prism or a pyramid.",
        img: "u11-prism.png",
        interact: [
          { kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Edges", value: 9 }, { label: "Vertices", value: 6 }] },
          { kind: "choose", rows: [{ t: "It is a", options: ["prism", "pyramid"], a: 0 }] }
        ],
        answer: "**5 faces** (2 triangles and 3 rectangles), **9 edges** and **6 vertices**. It is a triangular **prism**: 2 matching triangle ends joined by rectangles.",
        explain: "The dashed line is the hidden edge at the back, so count it too."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the grid reference for the cookies, donuts and sugar.",
        interact: [
          { kind: "gridref", src: "img/s2/u11-grid.png", alt: "Grid with columns A to D and rows 1 to 4 showing cookies, bread, sugar, a drink and donuts", box: [18.9, 6.6, 92.3, 85], cols: ["A", "B", "C", "D"], rows: ["4", "3", "2", "1"] },
          { kind: "input", fields: [{ label: "Cookies", accept: ["A4"], placeholder: "e.g. C2" }, { label: "Donuts", accept: ["D1"], placeholder: "e.g. C2" }, { label: "Sugar", accept: ["B3"], placeholder: "e.g. C2" }] }
        ],
        answer: "Cookies **A4** · Donuts **D1** · Sugar **B3**. Read the letter along the bottom first, then the number up the side."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The total number of counters in this partially covered array is 24.",
        img: "u11-covered.png",
        answer: false,
        explain: "The top row shows 5 counters, so there are 5 columns. The left side shows 5 counters, so there are 5 rows (the corner counter is in both). 5 rows of 5 is 25, not 24.",
        interact: [{ kind: "array", rows: 5, cols: 5, showTotal: true, hint: "Build the array the counters show: count the top row and the left column." }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record the number represented by base-10 materials.",
        img: "u11-base10.png",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 0, target: 23534, need: "standard", hint: "Each tall tower is 10 thousand cubes. Build the number in the chart." },
          { kind: "input", fields: [{ label: "The number is", value: 23534 }] }
        ],
        answer: "**23 534**: 2 ten thousands (the tall towers of 10 thousand cubes), 3 thousands, 5 hundreds, 3 tens and 4 ones.",
        explain: "Each tall tower is made of 10 thousand cubes stacked, so it is worth 10 000."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Which statement is correct? a) The orange angle is larger. b) The pink angle is larger. c) Both angles measure the same. Communicate your reasoning.",
        img: "u11-angles.png",
        interact: [
          { kind: "angle", start: 35, lengthen: true, hint: "Make a small angle, then make the arms longer. Does the angle change?" },
          { kind: "choose", rows: [{ t: "Correct statement", options: ["a) orange is larger", "b) pink is larger", "c) both are the same"], a: 2 }] }
        ],
        answer: "**c) Both angles measure the same.** Each angle covers 3 of the same blue wedges. The orange arms are longer, but the length of the arms does not change the size of the turn."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "What are some differences between a pyramid, prism and cylinder?",
        interact: [{ kind: "select", hint: "Tap every statement that is true.", items: [
          ["A pyramid's faces meet at one point (the apex)", true],
          ["A prism has 2 matching ends joined by rectangles", true],
          ["A cylinder has a curved surface and 2 circle faces", true],
          ["A cylinder has vertices", false],
          ["A pyramid has 2 matching ends", false],
          ["Prisms and pyramids have only flat faces", true]] }],
        answer: "Answers vary. A **pyramid** has one base and triangle faces meeting at an apex. A **prism** has 2 matching ends joined by rectangles. A **cylinder** has 2 circle faces and a curved surface, and no vertices."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the following lengths in millimetres.",
        img: "u11-rulers.png",
        interact: [{ kind: "input", fields: [{ label: "A", value: 8, suffix: "mm" }, { label: "B", value: 72, suffix: "mm" }, { label: "C", value: 145, suffix: "mm" }] }],
        answer: "A **8 mm** · B **72 mm** (7 cm and 2 mm) · C **145 mm** (14 cm and 5 mm). Each small mark is 1 mm and each centimetre is 10 mm.",
        explain: "Lengths read from where each black line ends on the slide's ruler."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "4 × 3 = 12, so 12 ÷ 3 = ?",
        options: ["12", "3", "4", "6"],
        answer: 2,
        explain: "Division is the inverse of multiplication. 4 groups of 3 make 12, so 12 shared into 3 groups is 4.",
        interact: [{ kind: "array", rows: 3, cols: 4, showTotal: true, hint: "12 shared into 3 rows. How many are in each row?" }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "For the number marked on the number line, record the nearest: a) thousand (2463), b) ten thousand (25 553), c) hundred thousand (465 699).",
        interact: [
          { kind: "marker", min: 2000, max: 3000, divs: 10, majorEvery: 5, labels: [2000, 2500, 3000], label: "2463", target: 2463, tol: 40, msg: "2463 is just before 2500.", hint: "a) Drag the pin to 2463." },
          { kind: "marker", min: 20000, max: 30000, divs: 10, majorEvery: 5, labels: [20000, 25000, 30000], label: "25 553", target: 25553, tol: 400, msg: "25 553 is just after 25 000.", hint: "b) Drag the pin to 25 553." },
          { kind: "marker", min: 400000, max: 500000, divs: 10, majorEvery: 5, labels: [400000, 450000, 500000], label: "465 699", target: 465699, tol: 4000, msg: "465 699 is between 460 000 and 470 000.", hint: "c) Drag the pin to 465 699." },
          { kind: "input", fields: [{ label: "a) Nearest thousand", value: 2000 }, { label: "b) Nearest ten thousand", value: 30000 }, { label: "c) Nearest hundred thousand", value: 500000 }] }
        ],
        answer: "a) **2000** (2463 is before the halfway mark 2500) · b) **30 000** (25 553 is past 25 000) · c) **500 000** (465 699 is past 450 000)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "The letter L is a ___ angle.",
        img: "u11-L.png",
        interact: [
          { kind: "angle", start: 40, target: "right", hint: "Make the same angle as the corner of the L." },
          { kind: "choose", rows: [{ t: "The letter L is a", options: ["right angle", "acute angle", "obtuse angle", "straight angle"], a: 0 }] }
        ],
        answer: "The letter L is a **right** angle, like the corner of a book. Its arms make a square corner."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "The net for this deconstructed box would look like A, B or C? Communicate your reasoning.",
        img: "u11-boxnets.png",
        interact: [{ kind: "choose", rows: [{ t: "The net of the box is", options: ["A", "B", "C"], a: 0 }] }],
        answer: "**A**. The box is a rectangular prism: its 4 side faces are rectangles in a row, with a smaller face at each end. B is a net of a cube (all squares) and C is a net of a pentagonal prism (2 pentagon ends)."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Fill in the blanks with these words: likely, equally likely, unlikely. It is ___ I will toss tails. It is ___ I will draw a blue marble. It is ___ I will draw an orange marble.",
        img: "u11-chance.png",
        interact: [{ kind: "choose", rows: [
          { t: "It is ___ I will toss tails.", options: ["likely", "equally likely", "unlikely"], a: 1 },
          { t: "It is ___ I will draw a blue marble.", options: ["likely", "equally likely", "unlikely"], a: 2 },
          { t: "It is ___ I will draw an orange marble.", options: ["likely", "equally likely", "unlikely"], a: 0 }] }],
        answer: "Tails: **equally likely** (a coin has 2 sides, heads or tails). Blue: **unlikely** (only 3 blue marbles). Orange: **likely** (most of the marbles are orange)."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The inverse operation of 4 × 5 = 20 is 5 × 4 = 20.",
        answer: false,
        explain: "5 × 4 = 20 is the turnaround (commutative) fact. The inverse operation undoes multiplication, so it is division: 20 ÷ 5 = 4 or 20 ÷ 4 = 5.",
        interact: [{ kind: "array", rows: 4, cols: 5, showTotal: true, hint: "Rotate the array to see the turnaround fact. Then share the 20 back into rows." }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition 974 541 in non-standard form.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 974541, target: 974541, need: "nonstandard", hint: "Break 1 counter into 10 of the next column to make a non-standard partition." },
          { kind: "expr", count: 2, target: 974541, placeholder: "e.g. 970 000 + 4541", mustUse: { re: "\\d\\s*\\d{3}[^\\d]|\\d{4}", msg: "That looks like the standard partition. Group some places together, like 4541." }, sample: ["970 000 + 4541", "974 000 + 541"] }
        ],
        answer: "Answers vary, for example **970 000 + 4541**, 974 000 + 500 + 41, or 97 ten thousands + 45 hundreds + 41 ones."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Match the event to its duration: one half of a soccer game, recess, 60 star jumps. Durations: one minute, 45 minutes, 20 minutes.",
        interact: [{ kind: "choose", rows: [
          { t: "1. One half of a soccer game", options: ["One minute", "45 minutes", "20 minutes"], a: 1 },
          { t: "2. Recess", options: ["One minute", "45 minutes", "20 minutes"], a: 2 },
          { t: "3. 60 star jumps", options: ["One minute", "45 minutes", "20 minutes"], a: 0 }] }],
        answer: "Half of a soccer game: **45 minutes** · Recess: **20 minutes** · 60 star jumps: **one minute** (about 1 jump each second)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe the 2D shapes that form this net. What 2D shape always appears on the net of a prism?",
        interact: [
          { kind: "classify", view: [260, 260], label: "Net of a hexagonal prism", hint: "Choose a shape name, then tap each shape in the net.",
            cats: [{ t: "Rectangle", c: "#2F6FE4", k: "rect" }, { t: "Hexagon", c: "#F2994A", k: "hex" }],
            shapes: [
              { p: "100,10 160,10 160,50 100,50", a: "rect", fill: "#E4E6EA" },
              { p: "100,50 160,50 160,90 100,90", a: "rect", fill: "#E4E6EA" },
              { p: "100,90 160,90 160,130 100,130", a: "rect", fill: "#E4E6EA" },
              { p: "100,130 160,130 160,170 100,170", a: "rect", fill: "#E4E6EA" },
              { p: "100,170 160,170 160,210 100,210", a: "rect", fill: "#E4E6EA" },
              { p: "100,210 160,210 160,250 100,250", a: "rect", fill: "#E4E6EA" },
              { p: "100,170 100,210 65,230 30,210 30,170 65,150", a: "hex", fill: "#E4E6EA" },
              { p: "160,170 195,150 230,170 230,210 195,230 160,210", a: "hex", fill: "#E4E6EA" }] },
          { kind: "input", fields: [{ label: "Rectangles", value: 6 }, { label: "Hexagons", value: 2 }] },
          { kind: "choose", rows: [{ t: "Every prism net has", options: ["rectangles", "circles", "hexagons"], a: 0 }] }
        ],
        answer: "The net has **6 rectangles** and **2 hexagons** (a hexagonal prism). Every prism net has **rectangles** joining its 2 matching ends.",
        explain: "Redrawn from the slide's net so the class can tap and count each shape."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Copy this 2 × 2 grid and label the grid references. Mark: a star in B2, a heart in A1, a triangle in A2, a circle in B1.",
        interact: [{ kind: "classify", view: [240, 240], label: "2 by 2 grid with columns A and B and rows 1 and 2", hint: "Choose a symbol, then tap the square it goes in.",
          cats: [{ t: "Star", c: "#F2C94C", k: "star" }, { t: "Heart", c: "#E0475B", k: "heart" }, { t: "Triangle", c: "#22A06B", k: "tri" }, { t: "Circle", c: "#2F6FE4", k: "circle" }],
          shapes: [
            { p: "40,10 130,10 130,100 40,100", a: "tri", fill: "#E4E6EA" },
            { p: "130,10 220,10 220,100 130,100", a: "star", fill: "#E4E6EA" },
            { p: "40,100 130,100 130,190 40,190", a: "heart", fill: "#E4E6EA" },
            { p: "130,100 220,100 220,190 130,190", a: "circle", fill: "#E4E6EA", deco: "<g fill='currentColor' font-size='22' text-anchor='middle' style='pointer-events:none'><text x='85' y='218'>A</text><text x='175' y='218'>B</text><text x='20' y='63'>2</text><text x='20' y='153'>1</text></g>" }] }],
        answer: "Columns are A and B (along the bottom), rows are 1 and 2 (up the side). A1 heart (bottom left) · B1 circle (bottom right) · A2 triangle (top left) · B2 star (top right).",
        explain: "The slide's symbols did not display properly, so they are replaced with a star, heart, triangle and circle."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "3, 6, 9, 12, 15… The next number in this number pattern is:",
        options: ["17", "18", "19", "16"],
        answer: 1,
        explain: "The pattern counts by threes (multiples of 3). 15 + 3 = 18.",
        interact: [{ kind: "jumps", start: 0, end: 18, steps: [3], hint: "Jump in threes from 0. Where is the next jump after 15?" }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the number 457 10, 100 and 1000 times larger.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 457, shift: true, hint: "Press × 10 to move every digit one place to the left." },
          { kind: "input", fields: [{ label: "10 times larger", value: 4570 }, { label: "100 times larger", value: 45700 }, { label: "1000 times larger", value: 457000 }] }
        ],
        answer: "457 × 10 = **4570** · 457 × 100 = **45 700** · 457 × 1000 = **457 000**. Each time 10 times larger, the digits move one place to the left and a zero holds the ones place."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Harry was wondering how long it was until the end of the school day. He asked Koa to check the time. Koa said the hands are on the 10 and the 2. Harry knows that the numerals on an analog clock can represent 2 different values, depending on which hand is pointing to them. Record the 2 possible times it could be.",
        interact: [
          { kind: "clock", time: "10:10", drag: true },
          { kind: "input", fields: [{ label: "Minute hand on the 2:", accept: ["10:10", "10 past 10", "ten past ten"], placeholder: "h:mm" }, { label: "Minute hand on the 10:", accept: ["1:50", "10 to 2", "ten to two"], placeholder: "h:mm" }] }
        ],
        cubes: { ops: [], note: "There is nothing to calculate; read the clock both ways.", solve: [{ t: "Long hand on the 2", s: "The minute hand on the 2 is 10 minutes past. The short hand is on the 10, so it is 10:10." }, { t: "Long hand on the 10", s: "The minute hand on the 10 is 50 minutes past, or 10 to the hour. The short hand points to the 2, so it is 10 to 2, which is 1:50." }] },
        answer: "**10:10** (10 past 10: long hand on the 2, short hand on the 10) or **1:50** (10 to 2: long hand on the 10, short hand on the 2). Near the end of the school day, 1:50 makes more sense.",
        explain: "With the minute hand on the 10 (50 minutes past), the hour hand sits just before the 2, so the time is 1:50. At 2:50 the hour hand would be nearly on the 3."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Which container has a capacity of 1 L? Communicate your reasoning.",
        img: "u11-milk.png",
        interact: [{ kind: "choose", rows: [{ t: "Capacity of 1 L", options: ["the milk carton", "the teacup"], a: 0 }] }],
        answer: "The **milk carton**. Milk is often sold in 1 L cartons. A teacup holds much less, about 250 mL."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Match the description to the 2D shape. 1. adjacent sides equal. 2. one pair of parallel sides. 3. 2 pairs of parallel sides, opposite sides equal, opposite angles equal.",
        img: "u11-shapes.png",
        interact: [{ kind: "choose", rows: [
          { t: "1. adjacent sides equal", options: ["parallelogram", "kite", "trapezium"], a: 1 },
          { t: "2. one pair of parallel sides", options: ["parallelogram", "kite", "trapezium"], a: 2 },
          { t: "3. 2 pairs of parallel sides, opposite sides and angles equal", options: ["parallelogram", "kite", "trapezium"], a: 0 }] }],
        answer: "1 → **kite** (B) · 2 → **trapezium** (C) · 3 → **parallelogram** (A)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The number chart shows the multiples of 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44 and 48 are circled.",
        answer: true,
        explain: "Counting by fours from 4 lands on 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48: exactly the circled numbers, with none missing up to 50.",
        interact: [{ kind: "numchart", from: 1, to: 50, answer: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48], hint: "Tap the multiples of 4 and compare with the slide's chart." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the multiples for this pattern of feet. Record the next 3 multiples that follow in the pattern.",
        img: "u11-feet.png",
        interact: [
          { kind: "jumps", start: 0, end: 21, steps: [3], hint: "Each box has 3 feet. Jump in threes." },
          { kind: "input", fields: [{ label: "1 box", value: 3 }, { label: "2 boxes", value: 6 }, { label: "3 boxes", value: 9 }, { label: "4 boxes", value: 12 }, { label: "Next", value: 15 }, { label: "Next", value: 18 }, { label: "Next", value: 21 }] }
        ],
        answer: "**3, 6, 9, 12**, then **15, 18, 21**. Each box has 3 feet (2 for the person and 1 for the snail), so the pattern counts by threes.",
        explain: "A snail moves on one foot, which is why each box shows 3 feet."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "What is the 5-minute benchmark time on these 4 analog clocks?",
        interact: [
          { kind: "clock", time: "9:24" },
          { kind: "input", fields: [{ label: "Clock A", accept: ["9:25", "25 past 9", "twenty-five past nine"], placeholder: "h:mm" }] },
          { kind: "clock", time: "2:56" },
          { kind: "input", fields: [{ label: "Clock B", accept: ["2:55", "5 to 3", "five to three"], placeholder: "h:mm" }] },
          { kind: "clock", time: "3:59" },
          { kind: "input", fields: [{ label: "Clock C", accept: ["4:00", "4 o'clock", "four o'clock", "4"], placeholder: "h:mm" }] },
          { kind: "clock", time: "9:36" },
          { kind: "input", fields: [{ label: "Clock D", accept: ["9:35", "25 to 10", "twenty-five to ten"], placeholder: "h:mm" }] }
        ],
        answer: "A about **9:25** · B about **2:55** · C about **4:00** · D about **9:35**. Find the nearest 5-minute mark (a numeral) to the long hand.",
        explain: "The clocks are redrawn a minute off each benchmark, as on the slide. On the slide clock A's hour hand was drawn right on the 9; at 25 past 9 it sits a little past the 9, as shown here."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "If the milk carton has a capacity of 1 L, do the A and B containers measure more than or less than a litre?",
        img: "u11-containers.png",
        interact: [{ kind: "choose", rows: [
          { t: "A (bucket)", options: ["more than 1 L", "less than 1 L"], a: 0 },
          { t: "B (yoghurt cup)", options: ["more than 1 L", "less than 1 L"], a: 1 }] }],
        answer: "A, the bucket, holds **more than** 1 L: several cartons would fit in it. B, the yoghurt cup, holds **less than** 1 L."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Explain how a triangular prism and triangular pyramid are different.",
        img: "u11-solids.png",
        interact: [
          { kind: "input", fields: [{ label: "Prism faces", value: 5 }, { label: "Prism edges", value: 9 }, { label: "Prism vertices", value: 6 }, { label: "Pyramid faces", value: 4 }, { label: "Pyramid edges", value: 6 }, { label: "Pyramid vertices", value: 4 }] },
          { kind: "choose", rows: [
            { t: "2 matching triangle ends joined by rectangles", options: ["prism", "pyramid"], a: 0 },
            { t: "All faces are triangles that meet at an apex", options: ["prism", "pyramid"], a: 1 }] }
        ],
        answer: "The **triangular prism** has 2 matching triangle ends joined by 3 rectangles (5 faces, 9 edges, 6 vertices). The **triangular pyramid** has a triangle base and 3 triangle faces meeting at a point (4 faces, 6 edges, 4 vertices)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "4, 8, 12, 16, 20… The next number in this number pattern is:",
        options: ["21", "22", "23", "24"],
        answer: 3,
        explain: "The pattern counts by fours (multiples of 4). 20 + 4 = 24.",
        interact: [{ kind: "jumps", start: 0, end: 24, steps: [4], hint: "Jump in fours from 0. Where is the next jump after 20?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Fill in the facts for the array: ___ rows of ___ is ___ in total. ___ × ___ = ___. ___ shared into ___ rows is ___. ___ ÷ ___ = ___.",
        interact: [
          { kind: "array", rows: 3, cols: 6, showTotal: true, hint: "This is the array from the slide." },
          { kind: "input", fields: [
            { label: "Rows", value: 3 }, { label: "of", value: 6 }, { label: "in total", value: 18 },
            { label: "×", value: 3 }, { label: "by", value: 6 }, { label: "=", value: 18 },
            { label: "Shared", value: 18 }, { label: "into rows", value: 3 }, { label: "is", value: 6 },
            { label: "÷", value: 18 }, { label: "by", value: 3 }, { label: "=", value: 6 }] }
        ],
        answer: "**3** rows of **6** is **18** in total · **3 × 6 = 18** · **18** shared into **3** rows is **6** · **18 ÷ 3 = 6**."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the time shown on these analog clocks using 'to' or 'past'.",
        interact: [
          { kind: "clock", time: "12:55" },
          { kind: "input", fields: [{ label: "Clock A", accept: ["5 to 1", "five to one", "5 minutes to 1", "five minutes to one"], placeholder: "e.g. 10 past 3" }] },
          { kind: "clock", time: "7:10" },
          { kind: "input", fields: [{ label: "Clock B", accept: ["10 past 7", "ten past seven", "10 minutes past 7", "ten minutes past seven"], placeholder: "e.g. 10 past 3" }] }
        ],
        answer: "A: **5 to 1** (12:55) · B: **10 past 7** (7:10).",
        explain: "Clock A: the long hand is on the 11, 5 minutes before the hour, and the short hand is almost on the 1."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "A milk carton has the capacity of 1 L. Record the capacity of the bucket, if it took 4 milk cartons to fill it. Communicate your reasoning.",
        img: "u11-bucket.png",
        interact: [
          { kind: "bar", whole: { v: 4, l: "4 L", hide: true, n: "bucket" }, parts: [{ v: 1, l: "1 L" }, { v: 1, l: "1 L" }, { v: 1, l: "1 L" }, { v: 1, l: "1 L" }], hint: "Each part is one milk carton. Tap the ? to reveal the bucket's capacity." },
          { kind: "input", fields: [{ label: "The bucket holds", value: 4, suffix: "L" }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Add the cartons", s: "1 L + 1 L + 1 L + 1 L = 4 L." }, { t: "Multiply", s: "4 cartons × 1 L = 4 L." }] },
        answer: "The bucket holds **4 L**. Each carton is 1 L and 4 cartons filled it: 4 × 1 L = 4 L."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the following lengths using the abbreviations: a) fifty-three millimetres, b) twenty-two millimetres, c) six centimetres and two millimetres.",
        interact: [{ kind: "input", fields: [
          { label: "a)", accept: ["53 mm", "53mm"], placeholder: "e.g. 4 cm" },
          { label: "b)", accept: ["22 mm", "22mm"], placeholder: "e.g. 4 cm" },
          { label: "c)", accept: ["6 cm 2 mm", "6cm 2mm", "6 cm and 2 mm", "6cm and 2mm", "62 mm", "62mm"], placeholder: "e.g. 4 cm" }] }],
        answer: "a) **53 mm** · b) **22 mm** · c) **6 cm 2 mm** (which is also 62 mm)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "45, 40, 35, 30, 25… The numbers in this pattern are decreasing by 5.",
        answer: true,
        explain: "Each number is 5 less than the one before: 45 − 5 = 40, 40 − 5 = 35, and so on.",
        interact: [{ kind: "jumps", start: 45, back: true, steps: [5], hint: "Jump back by 5s from 45." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the missing number at A, B, C and D to complete the fact family triangles.",
        img: "u11-facts.png",
        interact: [{ kind: "input", fields: [{ label: "A", value: 5 }, { label: "B", value: 7 }, { label: "C", value: 8 }, { label: "D", value: 8 }] }],
        answer: "A **5** (5 × 5 = 25) · B **7** (4 × 7 = 28) · C **8** (8 × 2 = 16) · D **8** (5 × 8 = 40). The top number is the product; divide it by the number you know."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the time shown on these analog clocks to the minute.",
        interact: [
          { kind: "clock", time: "9:26" },
          { kind: "input", fields: [{ label: "Clock A", accept: ["9:26", "26 past 9", "twenty-six past nine"], placeholder: "h:mm" }] },
          { kind: "clock", time: "2:53" },
          { kind: "input", fields: [{ label: "Clock B", accept: ["2:53", "7 to 3", "seven to three"], placeholder: "h:mm" }] },
          { kind: "clock", time: "11:34" },
          { kind: "input", fields: [{ label: "Clock C", accept: ["11:34", "26 to 12", "twenty-six to twelve"], placeholder: "h:mm" }] }
        ],
        answer: "A **9:26** · B **2:53** (7 to 3) · C **11:34** (26 to 12). Count by fives to the numeral before the long hand, then count on the single minutes.",
        explain: "Clock C on the slide sits between 33 and 34 minutes; it is redrawn at exactly 11:34."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "How many 250 millilitre cups would it take to fill a one-litre jug? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 0, end: 1000, steps: [250], hint: "Each jump is one cup of 250 mL. How many jumps reach 1000 mL?" },
          { kind: "input", fields: [{ label: "Cups", value: 4 }] }
        ],
        cubes: { ops: ["÷"], also: ["+"], note: "1 litre is 1000 millilitres.", solve: [{ t: "Count by 250s", s: "250, 500, 750, 1000 mL: that is 4 cups." }, { t: "Halve and halve again", s: "Half of 1000 mL is 500 mL, and half of 500 mL is 250 mL. So 2 cups make 500 mL and 4 cups make 1000 mL." }] },
        answer: "**4 cups**. 1 L = 1000 mL, and 250 + 250 + 250 + 250 = 1000 mL."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Record a sentence to answer the question: How do most students travel to school most days?",
        interact: [
          { kind: "tally", counts: true, hint: "These are the tallies from the slide. Count each row.", rows: [{ l: "A car", start: 12 }, { l: "B bike", start: 3 }, { l: "C walk", start: 4 }, { l: "D public transport", start: 8 }] },
          { kind: "choose", rows: [{ t: "Most students travel to school by", options: ["car", "bike", "walking", "public transport"], a: 0 }] }
        ],
        answer: "Most students travel to school by **car** (12 students). Next is public transport (8), then walking (4) and bike (3)."
      }
    ]
  ]
});
