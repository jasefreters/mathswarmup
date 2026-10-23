/*
  Stage 2 Year A, Unit 13 — Review of learning (Term 3, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 3, ls: 3, unit: 13,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 13 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The pattern of multiples is…",
        img: "u13-crabs.png",
        options: ["10, 15, 20, 25", "10, 100, 1000, 10 000", "10, 20, 30, 40", "5, 15, 25, 35"],
        answer: 2,
        explain: "Each crab is worth 10 (the first strip is labelled 10). The strips show 1, 2, 3 and 4 crabs, so the pattern is 10, 20, 30, 40: counting by tens.",
        interact: [{ kind: "jumps", start: 0, end: 40, steps: [10], hint: "Each crab is worth 10. Jump once for every crab in each strip." }]
      },
      {
        type: "sr", focus: "Representing whole numbers A (Stage 1 content)",
        prompt: "Describe each group as odd or even. Communicate your reasoning.",
        interact: [
          { kind: "pack", total: 7, size: 2, label: "pair", thing: "blue counters", hint: "Group A has 7 counters. Make pairs. Is one left over?" },
          { kind: "pack", total: 6, size: 2, label: "pair", thing: "pink counters", hint: "Group B has 6 counters. Make pairs. Is one left over?" },
          { kind: "choose", rows: [
            { t: "Group A (7 blue counters)", options: ["odd", "even"], a: 0 },
            { t: "Group B (6 pink counters)", options: ["odd", "even"], a: 1 }] }
        ],
        answer: "A is **odd**: 7 counters make 3 pairs with 1 left over. B is **even**: 6 counters make 3 pairs with none left over."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Would you classify this polygon as a quadrilateral? Communicate your reasoning.",
        interact: [
          { kind: "sides", view: [320, 220], label: "A purple parallelogram", fill: "#9B5C94", poly: [[60, 30], [200, 30], [260, 190], [120, 190]] },
          { kind: "choose", rows: [{ t: "Is it a quadrilateral?", options: ["Yes, it has 4 straight sides and 4 corners", "No, its sides are slanted", "No, it has no right angles"], a: 0 }] }
        ],
        answer: "**Yes.** It is a closed shape with **4 straight sides** and 4 corners, so it is a quadrilateral (it is a parallelogram). Slanted sides and no right angles don't matter."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record the number represented by these base 10 materials.",
        img: "u13-base10.png",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 0, target: 35318, need: "standard", hint: "Count each kind of block and add that many counters to its column." },
          { kind: "input", fields: [{ label: "The number is", value: 35318 }] }
        ],
        answer: "**35 318**: 3 ten thousands, 5 thousands, 3 hundreds, 1 ten and 8 ones.",
        explain: "Each tall column is 10 thousand cubes stacked, so it shows 10 000. There are 3 columns, 5 thousand cubes, 3 hundred flats, 1 ten rod and 8 ones."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the missing words: The blue book is on the ____ shelf, ____ from the right.",
        img: "u13-shelf.png",
        interact: [{ kind: "choose", rows: [
          { t: "The blue book is on the … shelf", options: ["top", "middle", "bottom"], a: 1 },
          { t: "… from the right", options: ["first", "second", "third", "fourth"], a: 1 }] }],
        answer: "The blue book is on the **middle** shelf, **second** from the right.",
        explain: "On the middle shelf, the leaning orange book is first from the right and the blue book is next to it."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The next number in this pattern is 24. 4, 8, 12, 16, 20…",
        answer: true,
        explain: "The pattern counts by fours (multiples of 4). 20 + 4 = 24.",
        interact: [{ kind: "jumps", start: 0, end: 28, steps: [4], hint: "Jump in fours from 0. Where does the jump after 20 land?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record whether the following numbers are even (E) or odd (O): 59, 276, 197. Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "59", options: ["E", "O"], a: 1 },
          { t: "276", options: ["E", "O"], a: 0 },
          { t: "197", options: ["E", "O"], a: 1 }] }],
        answer: "59 **O** · 276 **E** · 197 **O**. Look at the ones digit: 9 and 7 are odd, 6 is even."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Name a 2D shape with the following features: a) one set of parallel sides, b) all sides equal, c) opposite sides are parallel and equal.",
        interact: [{ kind: "choose", rows: [
          { t: "a) one set of parallel sides", options: ["trapezium", "rectangle", "kite"], a: 0 },
          { t: "b) all sides equal", options: ["rectangle", "rhombus", "trapezium"], a: 1 },
          { t: "c) opposite sides are parallel and equal", options: ["trapezium", "kite", "parallelogram"], a: 2 }] }],
        answer: "a) **trapezium** · b) **rhombus** (a square or an equilateral triangle also works) · c) **parallelogram** (rectangles, squares and rhombuses are special parallelograms)",
        explain: "The slide is open-ended, so each row offers only one shape that always fits. Accept other correct shapes in class discussion."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the nearest: a) thousand (8213), b) ten thousand (47 563), c) hundred thousand (125 500) for the number marked on each of the number lines.",
        interact: [
          { kind: "numberline", min: 8000, max: 9000, ticks: 0.01, labelStep: 500, tol: 40, items: [["8213", 8213]] },
          { kind: "numberline", min: 40000, max: 50000, ticks: 0.001, labelStep: 5000, tol: 400, items: [["47 563", 47563]] },
          { kind: "numberline", min: 100000, max: 200000, ticks: 0.0001, labelStep: 50000, tol: 4000, items: [["125 500", 125500]] },
          { kind: "input", fields: [{ label: "a) 8213 to the nearest thousand", value: 8000 }, { label: "b) 47 563 to the nearest ten thousand", value: 50000 }, { label: "c) 125 500 to the nearest hundred thousand", value: 100000 }] }
        ],
        answer: "a) **8000** (8213 is before the halfway mark, 8500) · b) **50 000** (47 563 is past 45 000) · c) **100 000** (125 500 is before 150 000)",
        explain: "The slide's number lines have no end labels. They are drawn here as 8000 to 9000, 40 000 to 50 000 and 100 000 to 200 000, with the halfway mark in the middle."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the object at the position: A4, C3, C1, D4.",
        interact: [
          { kind: "gridref", src: "img/s2/u13-beach.png", alt: "Beach grid map, columns A to D and rows 1 to 4", box: [8.0, 2.0, 97.9, 76.8], cols: ["A", "B", "C", "D"], rows: ["4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "A4", accept: ["crab", "a crab", "the crab"] },
            { label: "C3", accept: ["starfish", "a starfish", "the starfish", "star fish"] },
            { label: "C1", accept: ["shell", "a shell", "the shell", "seashell", "sea shell"] },
            { label: "D4", accept: ["turtle", "a turtle", "the turtle"] }] }
        ],
        answer: "A4 **crab** · C3 **starfish** · C1 **shell** · D4 **turtle**. Go across to the letter, then up to the number."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The pattern of multiples is…",
        img: "u13-dogs.png",
        options: ["5, 10, 15, 20, 25", "5, 15, 25, 35, 45", "5, 6, 7, 8, 9", "1, 2, 3, 4, 5"],
        answer: 0,
        explain: "The first strip is labelled 5, so each dog is worth 5. The strips show 1, 2, 3, 4 and 5 dogs: 5, 10, 15, 20, 25.",
        interact: [{ kind: "jumps", start: 0, end: 25, steps: [5], hint: "Each dog is worth 5. Jump once for every dog." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw a 3 threes array. a) Record the multiplication fact it represents. b) Record the square number.",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [3, 3], showTotal: true, hint: "Build 3 rows of 3." },
          { kind: "input", fields: [{ label: "a) 3 × 3 =", value: 9 }, { label: "b) The square number is", value: 9 }] }
        ],
        answer: "a) **3 × 3 = 9** · b) **9** is a square number, because the array is a square with 3 in each row and 3 in each column."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Which of these 2D shapes do not have a line of symmetry? Communicate your reasoning.",
        interact: [
          { kind: "mirror", view: [800, 300], label: "Shapes A to D with dashed test lines",
            shapes: [
              { l: "A", ly: 280, fill: "#8C55FF", p: [[20, 200], [80, 110], [220, 110], [160, 200]], lines: [[120, 90, 120, 220], [10, 155, 230, 155]] },
              { l: "B", ly: 280, fill: "#5BC8F0", p: [[270, 95], [360, 60], [360, 240], [270, 205]], lines: [[250, 150, 380, 150], [315, 45, 315, 255]] },
              { l: "C", ly: 280, fill: "#1A6CF5", p: [[420, 150], [475.3, 73.9], [564.7, 103], [564.7, 197], [475.3, 226.1]], lines: [[400, 150, 585, 150], [500, 60, 500, 240]] },
              { l: "D", ly: 280, fill: "#5470FF", p: [[630, 80], [730, 82], [780, 220]], lines: [[705, 60, 705, 230], [620, 150, 790, 150]] }] },
          { kind: "select", hint: "Tap every shape with no line of symmetry.", items: [["A", true], ["B", false], ["C", false], ["D", true]] }
        ],
        answer: "**A** (the parallelogram) and **D** (the triangle with 3 different sides). No fold makes their halves match. B folds across the middle and C (a regular pentagon) folds through a corner."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the number 248 921 in a non-standard form.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 248921, target: 248921, need: "nonstandard", hint: "Break 1 counter into 10 of the next column. The number stays the same." }],
        answer: "Many answers, for example **24 ten thousands + 89 hundreds + 21 ones**, or **248 thousands + 92 tens + 1 one**."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Order the lengths from shortest to longest: 4 m 24 cm, 1 m 92 cm, 3 m 5 cm.",
        interact: [
          { kind: "numberline", min: 0, max: 5, ticks: 10, labelStep: 1, tol: 0.2, items: [["4 m 24 cm", 4.24], ["1 m 92 cm", 1.92], ["3 m 5 cm", 3.05]] },
          { kind: "order", items: ["4 m 24 cm", "1 m 92 cm", "3 m 5 cm"], answer: [1, 2, 0] }
        ],
        answer: "**1 m 92 cm, 3 m 5 cm, 4 m 24 cm**. Compare the metres first: 1, 3, 4. (3 m 5 cm is 305 cm, not 350 cm.)"
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The missing number in the doubles pattern is 30. Top row: 10, 12, 14, 16, 18. Bottom row: 20, 24, 28, ?, 36. Communicate your reasoning.",
        answer: false,
        explain: "Each bottom number is double the top number. Double 16 is 32, not 30.",
        interact: [{ kind: "array", rows: 2, cols: 16, max: 16, showTotal: true, hint: "Two rows of 16. How many altogether?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the rows and columns in this partially covered array. Record the array using a number sentence.",
        img: "u13-covered.png",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [3, 5], showTotal: true, hint: "Count the dots along the top and down the side. Build the whole array." },
          { kind: "input", fields: [{ label: "Rows", value: 3 }, { label: "Columns", value: 5 }] },
          { kind: "sentence", fields: [{ label: "Number sentence", placeholder: "e.g. 2 x 4 = 8", re: "^\\s*(3\\s*x\\s*5|5\\s*x\\s*3)\\s*=\\s*15\\s*$", msg: "Use the rows and columns: 3 rows of 5.", sample: "3 x 5 = 15" }] }
        ],
        answer: "**3 rows** and **5 columns**: **3 × 5 = 15**.",
        explain: "The visible dots show 5 columns along the top and 3 rows down the side."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Which of these pictures have line/s of symmetry? Communicate your reasoning.",
        img: "u13-pictures.png",
        interact: [{ kind: "select", hint: "Tap every picture that has at least one line of symmetry.", items: [["A snowflake", true], ["B tree shape", true], ["C butterfly", true], ["None of them", false]] }],
        answer: "**All three.** A, the snowflake, has 6 lines of symmetry. B and C each have 1 vertical line down the middle, and the two halves match."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the number 318, 10, 100 and 1000 times larger.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 318, shift: true, hint: "Press × 10 and watch every digit move one place left." },
          { kind: "input", fields: [{ label: "10 times larger", value: 3180 }, { label: "100 times larger", value: 31800 }, { label: "1000 times larger", value: 318000 }] }
        ],
        answer: "**3180** · **31 800** · **318 000**. Each time it is 10 times larger, every digit moves one place to the left."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record how many millimetres are in 6 cm using the abbreviation for millimetres (mm). Communicate your reasoning.",
        interact: [
          { kind: "marker", min: 0, max: 10, ticks: 1, minor: 10, target: 6, tol: 0.1, label: "6 cm", msg: "Find the 6 cm mark. Count the small marks from 0." },
          { kind: "input", fields: [{ label: "6 cm =", accept: ["60 mm", "60mm"], placeholder: "e.g. 10 mm" }] }
        ],
        answer: "**60 mm**. There are 10 mm in every centimetre, and 6 × 10 = 60."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "What is the largest number that can be made by arranging the digits 7, 3, 9 and 2? Communicate your reasoning.",
        options: ["9723", "9237", "9327", "9732"],
        answer: 3,
        explain: "Put the largest digit in the thousands place, then the next largest, and so on: 9, 7, 3, 2 makes 9732."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Multiples of 6 are double the multiples of 3. Record the missing multiples of 6.",
        interact: [
          { kind: "cells", cols: 2, w: 150, grid: [["#Multiples of 3", "#Doubled multiples"], [3, 6], [6, { v: 12 }], [9, { v: 18 }], [12, { v: 24 }], [15, { v: 30 }]], msg: "Double each multiple of 3." }
        ],
        answer: "**12, 18, 24, 30**. Double 6 = 12, double 9 = 18, double 12 = 24, double 15 = 30."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "a) Record the length and width of the rectangle in centimetres. b) Record the area of the rectangle in square centimetres. Each square is 1 cm by 1 cm.",
        interact: [
          { kind: "areagrid", size: 52, cells: ["111111", "111111", "111111", "111111"] },
          { kind: "input", fields: [{ label: "a) Length", value: 6, suffix: "cm" }, { label: "Width", value: 4, suffix: "cm" }, { label: "b) Area", value: 24, suffix: "cm²" }] }
        ],
        answer: "a) Length **6 cm**, width **4 cm** · b) Area **24 cm²** (4 rows of 6 squares)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the multiples for this pattern of feet. Continue the pattern and record the next 3 multiples.",
        img: "u13-feet.png",
        interact: [
          { kind: "jumps", start: 0, end: 32, steps: [4], hint: "Each dog has 4 feet. Jump in fours." },
          { kind: "cells", cols: 8, w: 56, grid: [["#1 dog", "#2", "#3", "#4", "#5", "#6", "#7", "#8"], [4, { v: 8 }, { v: 12 }, { v: 16 }, { v: 20 }, { v: 24 }, { v: 28 }, { v: 32 }]], msg: "Add 4 for each dog." }
        ],
        answer: "**4, 8, 12, 16, 20**, then the next 3 multiples: **24, 28, 32**."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the missing word. The ____ of a shape is the length around the outside, or boundary, of a shape.",
        interact: [
          { kind: "sides", view: [360, 200], label: "A rectangle to trace around", fill: "#FFDF5D", poly: [[30, 30], [330, 30], [330, 170], [30, 170]] },
          { kind: "input", fields: [{ label: "The missing word", accept: ["perimeter", "the perimeter"] }] }
        ],
        answer: "The **perimeter** of a shape is the length around the outside, or boundary, of a shape."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "These numbers are in descending order: 6890, 7213, 8654.",
        answer: false,
        explain: "Descending means largest to smallest. These go from smallest to largest (6890 < 7213 < 8654), so they are in ascending order.",
        interact: [{ kind: "numberline", min: 6000, max: 9000, ticks: 0.01, labelStep: 1000, tol: 150, items: [["6890", 6890], ["7213", 7213], ["8654", 8654]] }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "a) 3 × 4 = 12, so 6 × 4 = ? b) 6 × 8 = 48, so 48 ÷ 6 = ? c) 4 × 5 = 20, so 8 × 5 = ? d) 10 × 8 = 80, so 9 × 8 = ?",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "Start with 3 rows of 4. Double the rows. What happens to the total?" },
          { kind: "input", fields: [{ label: "a) 6 × 4 =", value: 24 }, { label: "b) 48 ÷ 6 =", value: 8 }, { label: "c) 8 × 5 =", value: 40 }, { label: "d) 9 × 8 =", value: 72 }] }
        ],
        answer: "a) **24** (double 12) · b) **8** (the related division fact) · c) **40** (double 20) · d) **72** (80 take away one 8)"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Explain why a formal unit larger than a square centimetre is needed.",
        interact: [{ kind: "choose", rows: [{ t: "Why do we need a bigger unit?", options: ["Large areas, like a classroom floor, would need thousands of square centimetres", "Square centimetres are not accurate", "Square centimetres can only measure squares"], a: 0 }] }],
        answer: "Square centimetres are good for small areas, but measuring a **large area** such as a floor or a playground would take a huge number of them. A larger unit, the **square metre (m²)**, is quicker and gives smaller, easier numbers."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the related facts for these arrays: the top array is 3 rows of 5, the bottom array is 5 rows of 3.",
        interact: [
          { kind: "array", rows: 3, cols: 5, showTotal: true, hint: "Press Rotate to turn 3 rows of 5 into 5 rows of 3." },
          { kind: "sentence", fields: [
            { label: "Top array: ___ × ___ =", placeholder: "e.g. 2 x 4 = 8", re: "^\\s*3\\s*x\\s*5\\s*=\\s*15\\s*$", msg: "The top array has 3 rows of 5.", sample: "3 x 5 = 15" },
            { label: "Bottom array: ___ × ___ =", placeholder: "e.g. 2 x 4 = 8", re: "^\\s*5\\s*x\\s*3\\s*=\\s*15\\s*$", msg: "The bottom array has 5 rows of 3.", sample: "5 x 3 = 15" },
            { label: "___ ÷ ___ =", placeholder: "e.g. 8 ÷ 2 = 4", re: "^\\s*15\\s*[÷/]\\s*3\\s*=\\s*5\\s*$", msg: "Share 15 into 3 rows.", sample: "15 ÷ 3 = 5" },
            { label: "___ ÷ ___ =", placeholder: "e.g. 8 ÷ 2 = 4", re: "^\\s*15\\s*[÷/]\\s*5\\s*=\\s*3\\s*$", msg: "Share 15 into 5 rows.", sample: "15 ÷ 5 = 3" }] }
        ],
        answer: "**3 × 5 = 15** · **5 × 3 = 15** · **15 ÷ 3 = 5** · **15 ÷ 5 = 3**",
        explain: "Both arrays have 15 dots, so they share one fact family."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Sort these 2D shapes into 2 groups: a) shapes with a right angle, b) shapes without a right angle.",
        interact: [
          { kind: "corners", view: [960, 330], label: "A trapezium, a parallelogram and a triangle",
            shapes: [
              { l: "trapezium", fill: "#4A5D8A", p: [[20, 300], [110, 110], [250, 110], [340, 300]], ly: 225 },
              { l: "parallelogram", fill: "#111111", p: [[355, 190], [550, 110], [665, 205], [470, 285]] },
              { l: "triangle", fill: "#7030A0", p: [[690, 300], [930, 40], [930, 300]], lx: 830, ly: 240 }] },
          { kind: "choose", rows: [
            { t: "Trapezium", options: ["with a right angle", "without a right angle"], a: 1 },
            { t: "Parallelogram", options: ["with a right angle", "without a right angle"], a: 1 },
            { t: "Triangle", options: ["with a right angle", "without a right angle"], a: 0 }] }
        ],
        answer: "a) With a right angle: the **triangle**. b) Without a right angle: the **trapezium** and the **parallelogram**.",
        explain: "The trapezium in the picture has slanted sides, so none of its angles is a right angle."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which set of numbers are in ascending order?",
        options: ["5677, 6755, 5766", "6111, 7111, 1671", "8888, 9888, 9999", "2456, 5642, 4562"],
        answer: 2,
        explain: "Ascending means smallest to largest. 8888 < 9888 < 9999. In each of the others, the last number is smaller than the one before it."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "How can you split this array to help you answer 6 × 7? Record the number sentence to match the split array.",
        interact: [
          { kind: "array", rows: 6, cols: 7, showTotal: true, hint: "6 rows of 7. Take away rows to see how the array could be split into two smaller arrays." },
          { kind: "sentence", fields: [{ label: "Split number sentence", placeholder: "e.g. 3 x 7 + 3 x 7 = 42", re: "^\\s*\\d+\\s*x\\s*\\d+\\s*\\+\\s*\\d+\\s*x\\s*\\d+\\s*=\\s*42\\s*$", msg: "Write two smaller facts joined with +, then = 42.", sample: "3 x 7 + 3 x 7 = 42" }] }
        ],
        answer: "For example, split it into two arrays of 3 rows of 7: **3 × 7 + 3 × 7 = 21 + 21 = 42**. Or 5 rows and 1 row: **5 × 7 + 1 × 7 = 35 + 7 = 42**. So **6 × 7 = 42**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the area of the pickleball court using numerals and words. The court is 13 m long and 6 m wide.",
        img: "u13-court.png",
        interact: [
          { kind: "array", rows: 6, cols: 13, max: 13, showTotal: true, hint: "Each dot is 1 square metre: 6 rows of 13." },
          { kind: "input", fields: [
            { label: "Numerals", accept: ["78 m²", "78m²", "78 m2", "78m2", "78 square metres"], placeholder: "e.g. 10 m²" },
            { label: "Words", accept: ["seventy-eight square metres", "seventy eight square metres"], placeholder: "e.g. ten square metres" }] }
        ],
        answer: "**78 m²**, **seventy-eight square metres**. 6 rows of 13 square metres: 6 × 10 = 60 and 6 × 3 = 18, so 60 + 18 = 78."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Identify the missing numbers in the fact family triangles. Complete the number sentences.",
        img: "u13-triangles.png",
        interact: [
          { kind: "scale", left: "35 ÷ ?", right: "5", answer: 7 },
          { kind: "scale", left: "4 × ?", right: "32", answer: 8 },
          { kind: "scale", left: "? × 2", right: "14", answer: 7 },
          { kind: "scale", left: "25 ÷ ?", right: "5", answer: 5 }
        ],
        answer: "A **7** (35 ÷ 7 = 5) · B **8** (4 × 8 = 32) · C **7** (7 × 2 = 14) · D **5** (25 ÷ 5 = 5)"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record the capacities of these containers using the abbreviation for litres.",
        img: "u13-bottles.png",
        interact: [{ kind: "input", fields: [
          { label: "a) ten litres", accept: ["10 L", "10L", "10 l", "10l"], placeholder: "e.g. 2 L" },
          { label: "b) four litres", accept: ["4 L", "4L", "4 l", "4l"], placeholder: "e.g. 2 L" },
          { label: "c) one litre", accept: ["1 L", "1L", "1 l", "1l"], placeholder: "e.g. 2 L" }] }],
        answer: "a) **10 L** · b) **4 L** · c) **1 L**. The abbreviation for litres is L."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "I can rearrange the digits in 7821 to make a larger number. Communicate your reasoning.",
        answer: true,
        explain: "Put the largest digit first: 8721 is larger than 7821. The largest number you can make is 8721."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Complete the number sentences by recording the missing numbers: a) 8 × ___ = 32, b) ___ × 7 = 42, c) 63 ÷ ___ = 9.",
        interact: [
          { kind: "scale", left: "8 × ?", right: "32", answer: 4 },
          { kind: "scale", left: "? × 7", right: "42", answer: 6 },
          { kind: "scale", left: "63 ÷ ?", right: "9", answer: 7 }
        ],
        answer: "a) **4** (8 × 4 = 32) · b) **6** (6 × 7 = 42) · c) **7** (63 ÷ 7 = 9)"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Is a square metre always a square? Does it always have side lengths of 1 metre? Communicate your reasoning.",
        img: "u13-sqm.png",
        interact: [{ kind: "choose", rows: [
          { t: "Is a square metre always a square?", options: ["Yes", "No"], a: 1 },
          { t: "Does it always have sides of 1 metre?", options: ["Yes", "No"], a: 1 }] }],
        answer: "**No** and **no**. A square metre is an amount of area. The picture cuts a 1 m by 1 m square and moves the pieces: the new shape is not a square and its sides are not all 1 m, but it still covers **1 m²**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the solutions to the multiplication and division facts: a) 4 × 2 =, b) 6 × 4 =, c) 16 ÷ 2 =, d) 28 ÷ 4 =",
        interact: [
          { kind: "array", rows: 4, cols: 2, showTotal: true, hint: "Build each fact as an array. For division, build the total and count the rows." },
          { kind: "input", fields: [{ label: "a) 4 × 2 =", value: 8 }, { label: "b) 6 × 4 =", value: 24 }, { label: "c) 16 ÷ 2 =", value: 8 }, { label: "d) 28 ÷ 4 =", value: 7 }] }
        ],
        answer: "a) **8** · b) **24** · c) **8** · d) **7**"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Name these features of the prism, pyramid and cylinder.",
        img: "u13-features.png",
        interact: [{ kind: "choose", rows: [
          { t: "A (top of the pyramid)", options: ["apex (vertex)", "edge", "face", "curved surface"], a: 0 },
          { t: "B (tissue box)", options: ["apex (vertex)", "edge", "face", "curved surface"], a: 1 },
          { t: "C (tissue box)", options: ["apex (vertex)", "edge", "face", "curved surface"], a: 2 },
          { t: "D (can)", options: ["apex (vertex)", "edge", "face", "curved surface"], a: 3 }] }],
        answer: "A **apex** (the vertex at the top of the pyramid) · B **edge** (where two faces of the prism meet) · C **face** (a flat surface of the prism) · D **curved surface** of the cylinder"
      }
    ]
  ]
});
