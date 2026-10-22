/*
  Stage 2 Year A, Unit 12 — Review of learning (Term 3, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 3, ls: 2, unit: 12,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 12 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "I have a set of numbers. When I multiplied each number in the set by 4, the products were 12, 20, 28 and 36. Which set of numbers were multiplied by 4?",
        options: ["3, 5, 7, 9", "4, 6, 8, 10", "2, 4, 6, 8", "8, 12, 16, 20"],
        answer: 0,
        explain: "3 × 4 = 12, 5 × 4 = 20, 7 × 4 = 28 and 9 × 4 = 36. Working backwards: 12 ÷ 4 = 3, 20 ÷ 4 = 5, 28 ÷ 4 = 7, 36 ÷ 4 = 9.",
        interact: [{ kind: "jumps", start: 0, end: 36, steps: [4], hint: "Jump in fours from 0. Count the jumps to reach 12, 20, 28 and 36." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A (Stage 1 content reviewed)",
        prompt: "Match the description to the two-dimensional shape: a) a shape with 3 straight sides, b) a shape with 5 straight sides, c) a shape with 6 straight sides.",
        interact: [
          { kind: "classify", view: [560, 190], hint: "Count the sides. Choose a name, then tap each shape.", label: "A triangle, a pentagon and a hexagon",
            cats: [{ k: "t", t: "triangle", c: "#F2994A" }, { k: "p", t: "pentagon", c: "#22A06B" }, { k: "h", t: "hexagon", c: "#2F6FE4" }],
            shapes: [
              { p: "90,25 165,165 15,165", a: "t", fill: "#8C55FF" },
              { p: "280,20 355,75 327,165 233,165 205,75", a: "p", fill: "#D6408B" },
              { p: "545,95 507,160 433,160 395,95 433,30 507,30", a: "h", fill: "#0A5FC4" }] },
          { kind: "choose", rows: [
            { t: "a) 3 straight sides", options: ["hexagon", "triangle", "pentagon"], a: 1 },
            { t: "b) 5 straight sides", options: ["hexagon", "triangle", "pentagon"], a: 2 },
            { t: "c) 6 straight sides", options: ["hexagon", "triangle", "pentagon"], a: 0 }] }
        ],
        answer: "a) **triangle** (3 sides) · b) **pentagon** (5 sides) · c) **hexagon** (6 sides)"
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Sasha made 2 mistakes. Record the correct answers for these mistakes.",
        img: "u12-sasha.png",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 0, target: 12804, need: "standard", hint: "Build 12 804. How many hundreds are there?" },
          { kind: "input", fields: [{ label: "12 804 =", value: 10000 }, { label: "+", value: 2000 }, { label: "+", value: 800 }, { label: "+", value: 4 }] },
          { kind: "input", fields: [{ label: "In words", accept: ["twelve thousand, eight hundred and four", "twelve thousand eight hundred and four", "twelve thousand eight hundred four"], placeholder: "twelve thousand …" }] }
        ],
        answer: "Expanded notation: **10 000 + 2000 + 800 + 4 = 12 804** (the 8 is in the hundreds place, so it is 800, not 80). Words: **twelve thousand, eight hundred and four**.",
        explain: "The number, the place value houses and the base-10 blocks (1 ten thousand, 2 thousands, 8 hundreds, 4 ones) are all correct. Both mistakes leave out the 8 hundreds."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Identify these parts of the angle: arm, vertex, angle.",
        img: "u12-angle.png",
        interact: [{ kind: "choose", rows: [
          { t: "1.", options: ["arm", "vertex", "angle"], a: 0 },
          { t: "2.", options: ["arm", "vertex", "angle"], a: 2 },
          { t: "3.", options: ["arm", "vertex", "angle"], a: 1 },
          { t: "4.", options: ["arm", "vertex", "angle"], a: 0 }] }],
        answer: "1 and 4 are **arms** (the two straight lines). 2 is the **angle** (the amount of turn between the arms, shown by the dotted arc). 3 is the **vertex** (the point where the arms meet)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the landmark positions: the pond, the field, the hospital and the park. Remember that some might cover more than one grid square on the map.",
        interact: [
          { kind: "gridref", src: "img/s2/u12-town.png", alt: "Town map with a grid, columns A to I and rows 1 to 10", box: [9.1, 3.4, 80.9, 91.7], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], rows: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "Pond", accept: ["C5", "5C"] },
            { label: "Field (lower square)", accept: ["I6", "6I"] },
            { label: "Field (upper square)", accept: ["I7", "7I"] },
            { label: "Hospital (left square)", accept: ["E1", "1E"] },
            { label: "Hospital (right square)", accept: ["F1", "1F"] },
            { label: "Park (left square)", accept: ["C6", "6C"] },
            { label: "Park (middle square)", accept: ["D6", "6D"] },
            { label: "Park (right square)", accept: ["E6", "6E"] }] }
        ],
        answer: "Pond **C5** · Field **I6 and I7** · Hospital **E1 and F1** · Park **C6, D6 and E6**",
        explain: "The field covers 2 squares, the hospital 2 squares and the park 3 squares, so each square has its own box."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The number sentence 5 ÷ 6 = 30 represents this fact family: 30, 5 and 6. Communicate your reasoning.",
        answer: false,
        explain: "30 is the total, so it comes first when you divide: 30 ÷ 6 = 5 or 30 ÷ 5 = 6. The fact family is 5 × 6 = 30, 6 × 5 = 30, 30 ÷ 5 = 6, 30 ÷ 6 = 5.",
        interact: [{ kind: "array", rows: 5, cols: 6, showTotal: true, hint: "5 rows of 6 make 30. Share 30 into 5 rows. How many in each row?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Look at the rectangle and the trapezium. How many sides does each shape have? How many sets of parallel sides does each shape have? Are both shapes quadrilaterals? Explain your answer.",
        interact: [
          { kind: "classify", view: [520, 180], hint: "Choose a group, then tap each shape.", label: "A rectangle and a trapezium",
            cats: [{ k: "1", t: "1 set of parallel sides", c: "#F2994A" }, { k: "2", t: "2 sets of parallel sides", c: "#22A06B" }],
            shapes: [
              { p: "30,40 230,40 230,150 30,150", a: "2", fill: "#002664", deco: "<text x='130' y='172' class='co-lab'>rectangle</text>" },
              { p: "340,40 450,40 495,150 295,150", a: "1", fill: "#0A5FC4", deco: "<text x='395' y='172' class='co-lab'>trapezium</text>" }] },
          { kind: "input", fields: [{ label: "Rectangle: sides", value: 4 }, { label: "Trapezium: sides", value: 4 }, { label: "Rectangle: sets of parallel sides", value: 2 }, { label: "Trapezium: sets of parallel sides", value: 1 }] },
          { kind: "choose", rows: [{ t: "Are both shapes quadrilaterals?", options: ["Yes, both have 4 straight sides", "No, only the rectangle", "No, only the trapezium"], a: 0 }] }
        ],
        answer: "Both have **4 sides**. The rectangle has **2 sets** of parallel sides; the trapezium has **1 set** (top and bottom). **Yes**, both are quadrilaterals because a quadrilateral is any closed shape with 4 straight sides."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "For the number marked on each number line, record the nearest: a) thousand (2580), b) ten thousand (24 725), c) hundred thousand (232 989).",
        interact: [
          { kind: "numberline", min: 2000, max: 3000, ticks: 0.01, labelStep: 500, tol: 40, items: [["2580", 2580]] },
          { kind: "numberline", min: 20000, max: 30000, ticks: 0.001, labelStep: 5000, tol: 400, items: [["24 725", 24725]] },
          { kind: "numberline", min: 200000, max: 300000, ticks: 0.0001, labelStep: 50000, tol: 4000, items: [["232 989", 232989]] },
          { kind: "input", fields: [{ label: "a) 2580 to the nearest thousand", value: 3000 }, { label: "b) 24 725 to the nearest ten thousand", value: 20000 }, { label: "c) 232 989 to the nearest hundred thousand", value: 200000 }] }
        ],
        answer: "a) **3000** (2580 is past the halfway mark, 2500) · b) **20 000** (24 725 is before 25 000) · c) **200 000** (232 989 is before 250 000)"
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Explain whether the length of the arms affects the size of the angle. Use these angles to support your explanation.",
        img: "u12-arms.png",
        interact: [
          { kind: "angle", start: 90, lengthen: true, hint: "Make the arms longer and shorter. Does the turn between them change?" },
          { kind: "choose", rows: [{ t: "Does the length of the arms change the size of the angle?", options: ["No, all three are right angles", "Yes, the longest arms make the biggest angle", "Yes, the shortest arms make the biggest angle"], a: 0 }] }
        ],
        answer: "**No.** The size of an angle is the amount of turn between the arms. All three angles are **right angles** even though their arms are different lengths."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "These objects have been measured using a ruler. Record the lengths of the objects using the abbreviation for millimetres.",
        img: "u12-rulers.png",
        interact: [
          { kind: "marker", min: 0, max: 30, ticks: 1, minor: 10, target: 19, tol: 0.1, label: "A", msg: "The pencil starts at 0. Find the cm mark at its tip." },
          { kind: "marker", min: 0, max: 30, ticks: 1, minor: 10, target: 7.5, tol: 0.1, label: "B", msg: "The car starts at 0. Count the whole centimetres, then the small millimetre marks." },
          { kind: "input", fields: [
            { label: "A. Pencil", accept: ["190 mm", "190mm"], placeholder: "e.g. 10 mm" },
            { label: "B. Car", accept: ["75 mm", "75mm"], placeholder: "e.g. 10 mm" }] }
        ],
        answer: "A. **190 mm** (19 cm) · B. **75 mm** (7 cm and 5 mm). 1 cm = 10 mm; the abbreviation for millimetres is mm.",
        explain: "Read from the slide: the pencil's tip lines up with 19 cm and the car's front lines up with the long half-centimetre mark between 7 and 8."
      }
    ],
    // Review 3
    [
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Which number sentences represent this array of 4 rows of 6? You may choose more than one answer. Communicate your reasoning.",
        interact: [
          { kind: "array", rows: 4, cols: 6, showTotal: true, hint: "The array has 4 rows of 6." },
          { kind: "select", hint: "Tap every number sentence that matches the array.", items: [["4 × 6 = 24", true], ["24 ÷ 8 = 3", false], ["2 × 12 = 24", false], ["24 ÷ 4 = 6", true]] }
        ],
        answer: "**A (4 × 6 = 24)** and **D (24 ÷ 4 = 6)**. The array is 4 rows of 6, and 24 shared into 4 rows is 6 in each row. 24 ÷ 8 = 3 and 2 × 12 = 24 make 24, but they describe arrays with 8 or 2 rows.",
        explain: "The slide lets students choose more than one option, so this is a tap-every-correct-one question. 2 × 12 has the right total but not the right rows and columns, so it is not counted."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Look at the square, the trapezium and the rhombus. Which shapes have all sides equal? Which shapes have opposite sides parallel? Is a square also a parallelogram? Explain why or why not.",
        interact: [
          { kind: "classify", view: [600, 170], hint: "Choose a group, then tap each shape.", label: "A square, a trapezium and a rhombus",
            cats: [{ k: "2", t: "Both pairs of opposite sides parallel", c: "#22A06B" }, { k: "1", t: "Only 1 pair parallel", c: "#F2994A" }],
            shapes: [
              { p: "30,30 140,30 140,140 30,140", a: "2", fill: "#002664", deco: "<text x='85' y='162' class='co-lab'>square</text>" },
              { p: "235,30 335,30 375,140 195,140", a: "1", fill: "#0A5FC4", deco: "<text x='285' y='162' class='co-lab'>trapezium</text>" },
              { p: "480,30 580,30 535,124 435,124", a: "2", fill: "#2F6FE4", deco: "<text x='508' y='162' class='co-lab'>rhombus</text>" }] },
          { kind: "select", hint: "Tap every shape with all sides equal.", items: [["square", true], ["trapezium", false], ["rhombus", true]] },
          { kind: "choose", rows: [{ t: "Is a square also a parallelogram?", options: ["Yes, both pairs of opposite sides are parallel", "No, a parallelogram must lean", "No, a square has 4 equal sides"], a: 0 }] }
        ],
        answer: "All sides equal: the **square** and the **rhombus**. Opposite sides parallel: the **square** and the **rhombus** (the trapezium has only 1 pair). **Yes**, a square is a parallelogram: it has 2 pairs of parallel opposite sides. It is a special parallelogram with 4 right angles and 4 equal sides.",
        explain: "The rhombus is redrawn with 4 equal sides (100 units each), as a rhombus must have."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record 894 397 in non-standard form.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 894397, target: 894397, need: "nonstandard", hint: "Break a counter into 10 of the next place to rename the number." },
          { kind: "expr", count: 2, target: 894397, placeholder: "e.g. 800 000 + 94 397", mustUse: { re: "\\d\\s*\\d{3}[^\\d]|\\d{4}", msg: "That looks like the standard partition. Group some places together, like 94 397." }, sample: ["800 000 + 94 397", "894 000 + 397"] }
        ],
        answer: "Answers vary, for example **800 000 + 94 397**, **894 000 + 397**, or 89 ten thousands + 43 hundreds + 97 ones."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Which angle is used to describe a quarter-turn? Explain why this angle is used to describe a quarter-turn.",
        interact: [
          { kind: "angle", start: 20, target: "right", hint: "Turn the blue arm a quarter of the way around a full turn." },
          { kind: "choose", rows: [{ t: "A quarter-turn makes", options: ["a right angle", "a straight angle", "an acute angle", "a full turn"], a: 0 }] }
        ],
        answer: "A **right angle**. 4 quarter-turns make a full turn, and one quarter of a full turn makes a square corner, like the hands of a clock at 3 o'clock."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Draw the angle displayed: one arm goes straight up and one arm goes straight across. Label the drawn angle with the terms arm, vertex and angle.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [
            { t: "The point where the arms meet is the", options: ["arm", "vertex", "angle"], a: 1 },
            { t: "Each straight line is an", options: ["arm", "vertex", "angle"], a: 0 },
            { t: "The turn between the arms is the", options: ["arm", "vertex", "angle"], a: 2 }] }
        ],
        answer: "Draw a right angle (an L shape). Label the corner the **vertex**, each straight line an **arm**, and draw a small square or arc in the corner to show the **angle**."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "These are the related number sentences for this array of 5 rows of 7: 5 × 7 = 35, 7 × 5 = 35, 35 ÷ 5 = 7, 35 ÷ 7 = 5.",
        answer: true,
        explain: "5 rows of 7 is 35, and turned around it is 7 rows of 5. 35 shared into 5 rows is 7, and 35 shared into 7 columns is 5. All four sentences use 5, 7 and 35.",
        interact: [{ kind: "array", rows: 5, cols: 7, showTotal: true, hint: "5 rows of 7. Rotate it to see 7 rows of 5." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Match the number of lines of symmetry to the two-dimensional shapes shown: a) one line of symmetry, b) 2 or more lines of symmetry, c) no lines of symmetry.",
        interact: [
          { kind: "mirror", view: [600, 260], hint: "Predict first. Then tap a dashed line to fold the shape over it.", shapes: [
            { p: [[180, 130], [140, 199], [60, 199], [20, 130], [60, 61], [140, 61]], fill: "#FFB6C1", l: "1", lines: [[5, 130, 195, 130], [100, 45, 100, 215], [152, 220, 48, 40]] },
            { p: [[240, 190], [320, 70], [440, 70], [360, 190]], fill: "#8C52FF", l: "2", lines: [[340, 55, 340, 205], [225, 130, 455, 130]] },
            { p: [[460, 80], [460, 200], [580, 200]], fill: "#CB6CE6", l: "3", lines: [[445, 215, 535, 125], [520, 65, 520, 215]] }] },
          { kind: "choose", rows: [
            { t: "Shape 1 (hexagon)", options: ["one line", "2 or more lines", "no lines"], a: 1 },
            { t: "Shape 2 (parallelogram)", options: ["one line", "2 or more lines", "no lines"], a: 2 },
            { t: "Shape 3 (triangle)", options: ["one line", "2 or more lines", "no lines"], a: 0 }] }
        ],
        answer: "a) One line: **shape 3**, the triangle (from the square corner to the middle of the long side) · b) 2 or more: **shape 1**, the hexagon (it has 6) · c) None: **shape 2**, the parallelogram",
        explain: "The slide's triangle has a square corner and two equal sides, so it has exactly 1 line of symmetry. The hexagon is regular."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the number 684 10, 100 and 1000 times larger.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 684, shift: true, hint: "Use ×10 to move every digit one place to the left." },
          { kind: "input", fields: [{ label: "684 × 10 =", value: 6840 }, { label: "684 × 100 =", value: 68400 }, { label: "684 × 1000 =", value: 684000 }] }
        ],
        answer: "10 times larger: **6840** · 100 times larger: **68 400** · 1000 times larger: **684 000**. Each digit moves 1, 2 or 3 places to the left."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Which of these activities have a duration of less than 1 minute? a) tying your shoelaces, b) packing your lunchbox into your school bag, c) walking from the office to the classroom.",
        interact: [{ kind: "select", hint: "Tap every activity that takes less than 1 minute.", items: [["a) tying your shoelaces", true], ["b) packing your lunchbox into your school bag", true], ["c) walking from the office to the classroom", false]] }],
        answer: "**a)** and **b)**. Tying shoelaces and putting a lunchbox in a bag take a few seconds. Walking from the office to the classroom usually takes a few minutes.",
        explain: "Durations depend on the person and the school. For a typical school, walking from the office to a classroom takes more than 1 minute, so c) is not counted. Discuss it if your office is next door."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the grid references for the eggs, the lollies and the deli.",
        interact: [
          { kind: "gridref", src: "img/s2/u12-shop.png", alt: "Supermarket map with a grid, columns A to J and rows 1 to 10", box: [7.2, 2.2, 98, 94.1], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], rows: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "Eggs", accept: ["E6", "6E"] },
            { label: "Lollies", accept: ["H7", "7H"] },
            { label: "Deli (left square)", accept: ["D10", "10D"] },
            { label: "Deli (right square)", accept: ["E10", "10E"] }] }
        ],
        answer: "Eggs **E6** · Lollies **H7** · Deli **D10 and E10** (the deli covers 2 squares)"
      }
    ],
    // Review 5
    [
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Which of these shows how 472 + 38 can be partitioned? You may choose more than one answer.",
        interact: [
          { kind: "jumps", start: 472, end: 510, steps: [8, 10, 20, 28, 30], hint: "Jump + 8 to 480, then + 30. Try other ways to make 38." },
          { kind: "select", hint: "Tap every option that equals 472 + 38.", items: [["A  472 + 20 + 20", false], ["B  472 + 8 + 30", true], ["C  470 + 38", false], ["D  472 + 28 + 10", true]] }
        ],
        answer: "**B** and **D**. 38 = 8 + 30 = 28 + 10, so both make 510. A adds 40, not 38 (512). C changes 472 to 470 (508).",
        explain: "The slide lets students choose more than one option, so this is a tap-every-correct-one question."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Which letters shown have a) one line of symmetry, b) 2 or more lines of symmetry, c) no lines of symmetry? The letters are M, P, X and K.",
        interact: [
          { kind: "classify", view: [560, 160], hint: "Choose a group, then tap each letter.", label: "The letters M, P, X and K",
            cats: [{ k: "1", t: "one line", c: "#F2994A" }, { k: "2", t: "2 or more lines", c: "#22A06B" }, { k: "0", t: "no lines", c: "#D6408B" }],
            shapes: [
              { p: "20,20 130,20 130,140 20,140", a: "1", fill: "#FFFFFF", deco: "<text x='75' y='112' style='font:700 88px Arial,sans-serif;fill:#111;pointer-events:none' text-anchor='middle'>M</text>" },
              { p: "160,20 270,20 270,140 160,140", a: "0", fill: "#FFFFFF", deco: "<text x='215' y='112' style='font:700 88px Arial,sans-serif;fill:#111;pointer-events:none' text-anchor='middle'>P</text>" },
              { p: "300,20 410,20 410,140 300,140", a: "2", fill: "#FFFFFF", deco: "<text x='355' y='112' style='font:700 88px Arial,sans-serif;fill:#111;pointer-events:none' text-anchor='middle'>X</text>" },
              { p: "440,20 550,20 550,140 440,140", a: "1", fill: "#FFFFFF", deco: "<text x='495' y='112' style='font:700 88px Arial,sans-serif;fill:#111;pointer-events:none' text-anchor='middle'>K</text>" }] },
          { kind: "choose", rows: [
            { t: "M", options: ["one line", "2 or more lines", "no lines"], a: 0 },
            { t: "P", options: ["one line", "2 or more lines", "no lines"], a: 2 },
            { t: "X", options: ["one line", "2 or more lines", "no lines"], a: 1 },
            { t: "K", options: ["one line", "2 or more lines", "no lines"], a: 0 }] }
        ],
        answer: "a) One line: **M** (down the middle) and **K** (across the middle) · b) 2 or more: **X** (down and across) · c) None: **P**",
        explain: "K is counted as having 1 horizontal line of symmetry, as it does when its arms meet the upright in the middle. In some fonts the arms are not quite even."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "3, 6, 9, 12 … 1. What is the rule for the pattern? 2. Write a multiplication fact that matches what comes next in this pattern. 3. Draw an array to represent the multiplication fact in Question 2.",
        interact: [
          { kind: "choose", rows: [{ t: "1. The rule is", options: ["add 3 each time", "add 2 each time", "double each time"], a: 0 }] },
          { kind: "sentence", fields: [{ label: "2. Multiplication fact", re: "^\\s*(5\\s*x\\s*3|3\\s*x\\s*5)\\s*=\\s*15\\s*$|^\\s*15\\s*=\\s*(5\\s*x\\s*3|3\\s*x\\s*5)\\s*$", msg: "The next number is 15. Write it as a multiplication with 3, like ? × 3 = 15.", placeholder: "e.g. ? × 3 = 15", sample: "5 x 3 = 15" }] },
          { kind: "array", rows: 1, cols: 3, showTotal: true, hint: "3. Build your fact: add rows of 3 until you reach the next number." }
        ],
        answer: "1. **Add 3** each time (the multiples of 3). 2. The next number is 15, so **5 × 3 = 15** (or 3 × 5 = 15). 3. An array of **5 rows of 3** (or 3 rows of 5)."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "The 6 on the analog clock can represent: ___ hours or ___ minutes.",
        interact: [
          { kind: "clock", time: "6:30", drag: true },
          { kind: "input", fields: [{ label: "hours", value: 6 }, { label: "or minutes", value: 30 }] }
        ],
        answer: "**6** hours (when the short hand points to it) or **30** minutes (when the long hand points to it: 6 × 5 = 30)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe one similarity and one difference between a rectangle and a parallelogram.",
        interact: [
          { kind: "corners", view: [560, 200], r: 22, q: 30, shapes: [{ p: [[20, 30], [230, 30], [230, 170], [20, 170]], fill: "#C00000", l: "rectangle", ly: 100 }, { p: [[340, 30], [540, 30], [500, 170], [300, 170]], fill: "#002664", l: "parallelogram", ly: 100 }], hint: "Tap a corner to test it with a right angle." },
          { kind: "select", hint: "Tap every true statement.", items: [
            ["Both have 4 straight sides", true],
            ["Both have 2 pairs of parallel sides", true],
            ["Only the rectangle has 4 right angles", true],
            ["Both have 4 right angles", false],
            ["The parallelogram has 3 sides", false]] }
        ],
        answer: "**Same:** both have 4 straight sides and 2 pairs of parallel sides, and their opposite sides are equal. **Different:** the rectangle has 4 right angles; the parallelogram's angles are not right angles (it leans)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "471 – 87 = 470 – 86. Communicate your reasoning.",
        answer: true,
        explain: "Both numbers went down by 1, so the difference stays the same. 471 − 87 = 384 and 470 − 86 = 384.",
        interact: [{ kind: "jumps", start: 87, end: 471, steps: [3, 10, 100, 1], hint: "Count up from 87 to 471. Then count up from 86 to 470. Are the jumps the same?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe the area using the terms 'rows', 'columns' and 'for each'. Record the area in square centimetres using numerals and words. Each square is 1 cm by 1 cm.",
        interact: [
          { kind: "areagrid", cells: ["1111111", "1111111", "1111111", "1111111", "1111111"] },
          { kind: "input", fields: [{ label: "Rows", value: 5 }, { label: "Columns", value: 7 }, { label: "Area", value: 35, suffix: "cm²" }] },
          { kind: "input", fields: [{ label: "In words", accept: ["thirty-five square centimetres", "thirty five square centimetres", "thirtyfive square centimetres"], placeholder: "… square centimetres" }] }
        ],
        answer: "There are **5 rows** and **7 columns**. For each row there are 7 squares, so 5 rows of 7 = 35. The area is **35 cm²**, **thirty-five square centimetres**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the missing numbers to complete the facts for the array: ___ rows of ___ is ___ in total. ___ shared into ___ rows is ___.",
        interact: [
          { kind: "array", rows: 4, cols: 7, showTotal: true, hint: "Count the rows, then the dots in each row." },
          { kind: "input", fields: [{ label: "rows", value: 4 }, { label: "of", value: 7 }, { label: "is … in total", value: 28 }, { label: "shared into", value: 28 }, { label: "rows", value: 4 }, { label: "is", value: 7 }] }
        ],
        answer: "**4** rows of **7** is **28** in total. **28** shared into **4** rows is **7**."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Match the digital times to the nearest benchmark 5-minute interval: a) 4:19, b) 7:43, c) 6:51.",
        interact: [
          { kind: "clock", time: "4:19" },
          { kind: "clock", time: "7:43" },
          { kind: "clock", time: "6:51" },
          { kind: "choose", rows: [
            { t: "a) 4:19", options: ["ten-to seven", "twenty-past four", "quarter-to eight"], a: 1 },
            { t: "b) 7:43", options: ["ten-to seven", "twenty-past four", "quarter-to eight"], a: 2 },
            { t: "c) 6:51", options: ["ten-to seven", "twenty-past four", "quarter-to eight"], a: 0 }] }
        ],
        answer: "a) 4:19 is nearest 4:20, **twenty past four** · b) 7:43 is nearest 7:45, **quarter to eight** · c) 6:51 is nearest 6:50, **ten to seven**"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "A pyramid and a prism are both three-dimensional objects. Describe one way they are different.",
        img: "u12-solids.png",
        interact: [{ kind: "select", hint: "Tap every true difference.", items: [
          ["A pyramid's faces meet at a point at the top; a prism has no point", true],
          ["A prism has 2 matching ends; a pyramid has only 1 base", true],
          ["A pyramid's side faces are triangles; a prism's side faces are rectangles", true],
          ["A pyramid has curved surfaces", false],
          ["A prism has fewer faces than this pyramid", false]] }],
        answer: "Answers vary. A **pyramid** has 1 base and triangle faces that meet at a point (the apex). A **prism** has 2 matching ends joined by rectangle faces, so it has no point. This square pyramid has 5 faces; this rectangular prism has 6."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which strategy do you consider the most efficient for accurately solving 478 + 67?",
        options: ["Record and solve 478 + 67 using an algorithm", "478 + 22 = 500, 500 + 45 = 545", "478 + 2 = 480, 480 + 20 = 500, 500 + 40 = 540, 540 + 5 = 545", "Estimate the answer."],
        answer: 1,
        explain: "Students may justify other choices, but B is the most efficient accurate strategy: it bridges to 500 in 2 steps. C is also accurate but takes 4 steps, and D does not give an exact answer.",
        interact: [{ kind: "jumps", start: 478, end: 545, steps: [2, 5, 20, 22, 40, 45], hint: "Jump + 22 to 500, then + 45." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "For each object, record whether you would measure its area in square centimetres or square metres. Communicate your reasoning.",
        img: "u12-area.png",
        interact: [{ kind: "choose", rows: [
          { t: "basketball court", options: ["square centimetres", "square metres"], a: 1 },
          { t: "book cover", options: ["square centimetres", "square metres"], a: 0 },
          { t: "classroom", options: ["square centimetres", "square metres"], a: 1 }] }],
        answer: "Basketball court: **square metres** · Book cover: **square centimetres** · Classroom: **square metres**. Large spaces would need far too many tiny square centimetres; a book cover is much smaller than 1 square metre."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the missing numbers in the fact family triangles.",
        img: "u12-triangles.png",
        interact: [
          { kind: "array", rows: 5, cols: 7, showTotal: true, hint: "Build an array with the total on top and one of the bottom numbers as the rows." },
          { kind: "input", fields: [{ label: "35 and 5:", value: 7 }, { label: "32 and 4:", value: 8 }, { label: "18 and 2:", value: 9 }, { label: "40 and 10:", value: 4 }] }
        ],
        answer: "35 ÷ 5 = **7** · 32 ÷ 4 = **8** · 18 ÷ 2 = **9** · 40 ÷ 10 = **4**. The top number is the total; multiply the bottom numbers to check."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the times displayed on the analog clocks using the term 'past' or 'to'.",
        interact: [
          { kind: "clock", time: "11:25" },
          { kind: "clock", time: "2:40" },
          { kind: "input", fields: [
            { label: "A.", accept: ["25 past 11", "twenty-five past eleven", "twenty five past eleven", "25 minutes past 11"], placeholder: "… past …" },
            { label: "B.", accept: ["20 to 3", "twenty to three", "20 minutes to 3"], placeholder: "… to …" }] }
        ],
        answer: "A. **25 past 11** (11:25) · B. **20 to 3** (2:40)",
        explain: "Read from the slide's clocks: A's long hand is on the 5 and the short hand is just under halfway from 11 to 12. B's long hand is on the 8 and the short hand is close to the 3."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "How do students travel to school most days? Which is the most common mode of transport? Which are the 2 least common modes of transport?",
        interact: [
          { kind: "bargraph", max: 12, step: 1, ylabel: "Number of students", xlabel: "Mode of transport", label: "How do students travel to school most days?", series: [{ l: "Students", c: "#4472C4" }], groups: [{ l: "Car", v: [12] }, { l: "Bike", v: [3] }, { l: "Walk", v: [4] }, { l: "Public transport", v: [8] }, { l: "Scooter", v: [3] }] },
          { kind: "choose", rows: [{ t: "Most common", options: ["Car", "Bike", "Walk", "Public transport", "Scooter"], a: 0 }] },
          { kind: "select", hint: "Tap the 2 least common modes of transport.", items: [["Car", false], ["Bike", true], ["Walk", false], ["Public transport", false], ["Scooter", true]] }
        ],
        answer: "Most common: **car** (12 students). Least common: **bike** and **scooter** (3 students each).",
        explain: "Values read from the slide's graph: car 12, bike 3, walk 4, public transport 8, scooter 3."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "The following calculation is correct: 523 – 67 = 520 – 64. Communicate your reasoning.",
        answer: true,
        explain: "Both numbers went down by 3, so the difference stays the same. 523 − 67 = 456 and 520 − 64 = 456. 520 − 64 is easier to work out.",
        interact: [{ kind: "jumps", start: 64, end: 520, steps: [6, 50, 400, 3], hint: "Count up from 64 to 520. The jumps from 67 to 523 are the same size." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "You have been asked to measure a rectangular space in the school playground using a square metre. The space is 9 metres long and 6 metres wide. Record the area of the space in numerals and words.",
        interact: [
          { kind: "areagrid", size: 44, cells: ["111111111", "111111111", "111111111", "111111111", "111111111", "111111111"] },
          { kind: "input", fields: [{ label: "Area", value: 54, suffix: "m²" }] },
          { kind: "input", fields: [{ label: "In words", accept: ["fifty-four square metres", "fifty four square metres"], placeholder: "… square metres" }] }
        ],
        answer: "6 rows of 9 square metres = **54 m²**, **fifty-four square metres**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Aaron gets 5 stickers in each packet. He buys 4 packets. Write a number sentence to match the problem. How many stickers does Aaron have altogether?",
        interact: [
          { kind: "array", rows: 4, cols: 5, showTotal: true, hint: "Each row is a packet of 5 stickers." },
          { kind: "sentence", fields: [{ label: "Number sentence", re: "^\\s*(4\\s*x\\s*5|5\\s*x\\s*4|5\\s*\\+\\s*5\\s*\\+\\s*5\\s*\\+\\s*5)\\s*=\\s*20\\s*$", msg: "Use the 4 packets and the 5 stickers in each, like 4 × 5 = 20.", placeholder: "e.g. 4 × 5 = 20", sample: "4 x 5 = 20" }] },
          { kind: "input", fields: [{ label: "Stickers altogether", value: 20 }] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Skip count", s: "Count by fives 4 times: 5, 10, 15, 20." }, { t: "Use a known fact", s: "4 × 5 is double 2 × 5 = 10, so 4 × 5 = 20." }] },
        answer: "**4 × 5 = 20**. Aaron has **20 stickers** altogether."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "How many minutes are there in an hour? How many minutes are there in a half-hour? How many minutes are there in a quarter-hour? Explain the connection between the number of minutes in an hour, half-hour and quarter-hour.",
        interact: [
          { kind: "clock", time: "12:15", drag: true },
          { kind: "input", fields: [{ label: "1 hour", value: 60, suffix: "minutes" }, { label: "Half-hour", value: 30, suffix: "minutes" }, { label: "Quarter-hour", value: 15, suffix: "minutes" }] },
          { kind: "choose", rows: [{ t: "The connection", options: ["Halve 60 to get 30, then halve 30 to get 15", "Add 15 to 30 to get 60", "They are not connected"], a: 0 }] }
        ],
        answer: "**60** minutes in an hour, **30** in a half-hour and **15** in a quarter-hour. A half-hour is half of 60; a quarter-hour is half of a half-hour, or 60 ÷ 4. Four quarter-hours make 1 hour."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Read and record the analog times displayed, using the terms 'past' and 'to'.",
        interact: [
          { kind: "clock", time: "6:20" },
          { kind: "clock", time: "12:45" },
          { kind: "input", fields: [
            { label: "A.", accept: ["20 past 6", "twenty past six", "20 minutes past 6"], placeholder: "… past …" },
            { label: "B.", accept: ["quarter to 1", "quarter to one", "15 to 1", "fifteen to one", "15 minutes to 1"], placeholder: "… to …" }] }
        ],
        answer: "A. **20 past 6** (6:20) · B. **quarter to 1** (12:45)",
        explain: "Read from the slide's clocks: A's long hand is on the 4 and the short hand is just past the 6. B's long hand is on the 9 and the short hand is most of the way from 12 to 1."
      }
    ]
  ]
});
