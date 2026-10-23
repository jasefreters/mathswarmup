/*
  Stage 2 Year B, Unit 34 — Review of learning (Term 3, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 3, ls: 4, unit: 34,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 34 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "0.64 can be expressed as:",
        options: ["6 tenths and 4 hundredths", "64 tenths", "4 tenths and 6 hundredths", "6 hundredths and 4 tenths"],
        answer: 0,
        explain: "0.64 has 6 in the tenths place and 4 in the hundredths place. 64 tenths is 6.4. C and D both describe 0.46.",
        interact: [{ kind: "pv", cols: ["O", "t", "h"], start: 0.64, hint: "This is 0.64. Read the tenths and the hundredths." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Why is it important to use formal units like grams or kilograms to measure the mass of objects?",
        interact: [{ kind: "select", hint: "Tap every good reason.", items: [["Everyone gets the same result", true], ["We can compare and share measurements", true], ["Informal units, like blocks, can be different sizes", true], ["Formal units make objects heavier", false]] }],
        answer: "Formal units like **grams and kilograms** are the same everywhere, so everyone gets the same measurement. We can compare, record and share masses accurately. Informal units (like blocks or marbles) are not all the same size."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the first 10 multiples formed by counting by 4.",
        interact: [
          { kind: "jumps", start: 0, end: 40, steps: [4], hint: "Jump in fours from 0. Record each number you land on." },
          { kind: "input", fields: [{ label: "", value: 4 }, { label: "", value: 8 }, { label: "", value: 12 }, { label: "", value: 16 }, { label: "", value: 20 }, { label: "", value: 24 }, { label: "", value: 28 }, { label: "", value: 32 }, { label: "", value: 36 }, { label: "", value: 40 }] }
        ],
        answer: "**4, 8, 12, 16, 20, 24, 28, 32, 36, 40**"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe a rectangle by recording: a) How many parallel sides does a rectangle have? b) How many right angles does a rectangle have? c) Does a rectangle have equal sides?",
        interact: [
          { kind: "corners", view: [300, 220], r: 22, q: 30, shapes: [{ p: [[90, 20], [210, 20], [210, 200], [90, 200]], fill: "#EB9C12", l: "rectangle", ly: 112 }], hint: "Tap each corner to test it with a right angle." },
          { kind: "choose", rows: [
            { t: "a) Parallel sides", options: ["2 pairs (4 sides)", "1 pair (2 sides)", "None"], a: 0 },
            { t: "b) Right angles", options: ["4", "2", "0"], a: 0 },
            { t: "c) Equal sides?", options: ["Opposite sides are equal", "All 4 sides are equal", "No sides are equal"], a: 0 }
          ] }
        ],
        answer: "a) **2 pairs** of parallel sides (opposite sides are parallel). b) **4 right angles**. c) **Opposite sides are equal**. A rectangle's sides are not all equal unless it is a square."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "The lion is located in the first column and the second row from the bottom. Record the position of the monkey.",
        interact: [
          { kind: "gridref", src: "img/s2/u34-zoo.png", alt: "Zoo map on a grid with 3 columns and 5 rows: zebra, giraffe, monkey, lion and elephant", box: [0, 0, 100, 100], cols: ["Column 1, ", "Column 2, ", "Column 3, "], rows: ["row 5 from the bottom", "row 4 from the bottom", "row 3 from the bottom", "row 2 from the bottom", "row 1 from the bottom"] },
          { kind: "choose", rows: [
            { t: "Monkey: column", options: ["first", "second", "third"], a: 1 },
            { t: "Monkey: row from the bottom", options: ["second", "third", "fourth"], a: 1 }
          ] }
        ],
        answer: "The monkey is in the **second column** and the **third row from the bottom** (the middle row).",
        explain: "Columns are counted from the left, as for the lion. The grid has 5 rows, so the third row from the bottom is also the middle row."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "8.63 is the largest number with 2 decimal places that can be made from the cards 3, 6 and 8. Communicate your reasoning.",
        answer: true,
        explain: "With 2 decimal places there is 1 whole-number digit, so put the largest card, 8, in the ones place, then 6 tenths, then 3 hundredths: 8.63. The slide said 'largest decimal number', but 86.3 is larger, so the question now says 2 decimal places.",
        interact: [{ kind: "order", items: ["8.36", "3.86", "8.63", "6.83"], answer: [1, 3, 0, 2], hint: "Order these from smallest to largest." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the objects that have a mass of about one kilogram.",
        img: "u34-mass1.png",
        interact: [{ kind: "select", hint: "Tap each object with a mass of about 1 kilogram.", items: [["A: 1 litre of milk", true], ["B: a thick hardcover book", true], ["C: a big sack of potatoes", false], ["D: a sponge", false], ["E: a football", false]] }],
        answer: "**A** (1 litre of milk is about 1 kg) and **B** (a thick hardcover book). A big sack of potatoes is many kilograms. A sponge and a football are much lighter than 1 kg.",
        explain: "The slide's pictures don't say what size each object is, so each one is named. The blue object D is read as a sponge."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Identify and record the missing numbers to complete the multiplication fact family. Triangle: 6, 4 and ?. 6 × 4 = 24, 4 × 6 = ?, 24 ÷ 4 = ?, 24 ÷ ? = 4",
        interact: [
          { kind: "array", rows: 4, cols: 6, showTotal: true, hint: "4 rows of 6. Rotate it for 6 rows of 4." },
          { kind: "input", fields: [{ label: "Top of the triangle:", value: 24 }, { label: "4 × 6 =", value: 24 }, { label: "24 ÷ 4 =", value: 6 }, { label: "24 ÷ ? = 4 · ? =", value: 6 }] }
        ],
        answer: "Triangle top: **24** · 4 × 6 = **24** · 24 ÷ 4 = **6** · 24 ÷ **6** = 4"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Which two-dimensional shapes can be used to form a trapezium?",
        interact: [
          { kind: "sketch", shape: { view: [300, 140], pts: [[60, 10], [240, 10], [290, 130], [10, 130]] }, shapeFill: "rgba(204,153,255,.45)", shapeStroke: "#8E5BD6" },
          { kind: "select", hint: "Tap every set of shapes that can form this trapezium.", items: [["A rectangle and 2 triangles", true], ["A parallelogram and a triangle", true], ["3 triangles", true], ["2 circles", false], ["2 squares only", false]] }
        ],
        answer: "A **rectangle and 2 triangles** (one on each end), a **parallelogram and a triangle**, or **3 triangles**. Draw lines on the trapezium to show each way."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the letter-number grid reference of the: elephant, zebra, monkey.",
        interact: [
          { kind: "gridref", src: "img/s2/u34-zoo.png", alt: "Zoo map on a grid, columns A to C and rows 1 to 5", box: [0, 0, 100, 100], cols: ["A", "B", "C"], rows: ["1", "2", "3", "4", "5"] },
          { kind: "input", fields: [{ label: "Elephant", accept: ["C4"], placeholder: "e.g. A1" }, { label: "Zebra", accept: ["C1"], placeholder: "e.g. A1" }, { label: "Monkey", accept: ["B3"], placeholder: "e.g. A1" }] }
        ],
        answer: "Elephant **C4** · Zebra **C1** · Monkey **B3**",
        explain: "Columns A, B, C run left to right and rows 1 to 5 run top to bottom, as labelled on the slide."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which decimal numbers have been placed in ascending order?",
        options: ["3.92, 3.95, 3.99, 3.09", "2.39, 9.23, 3.92, 9.32", "4.03, 4.35, 4.4, 4.41", "1.11, 1.01, 1.12, 1.02"],
        answer: 2,
        explain: "Ascending means smallest to largest. 4.03 < 4.35 < 4.40 < 4.41. In A, 3.09 is smallest but comes last. B and D go up and down.",
        interact: [{ kind: "numberline", min: 4, max: 4.5, ticks: 0.1, labelStep: 0.1, tol: 0.012, items: [["4.03", 4.03], ["4.35", 4.35], ["4.4", 4.4], ["4.41", 4.41]] }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Complete these number sentences: a) 1/2 kg = ? g b) 1/4 kg = ? g c) 3/4 kg = ? g",
        img: "u34-kgbar.png",
        interact: [
          { kind: "shade", parts: 4, hint: "This strip is 1 kg cut into quarters. Each quarter is 250 g." },
          { kind: "input", fields: [{ label: "a) 1/2 kg =", value: 500, suffix: "g" }, { label: "b) 1/4 kg =", value: 250, suffix: "g" }, { label: "c) 3/4 kg =", value: 750, suffix: "g" }] }
        ],
        answer: "a) 1/2 kg = **500 g** · b) 1/4 kg = **250 g** · c) 3/4 kg = **750 g** (250 + 250 + 250)"
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the total number of squares in the array without counting. ? rows of ? · ? is repeated ? times · ? × ? = ?",
        img: "u34-cover.png",
        interact: [
          { kind: "array", rows: 1, cols: 1, showTotal: true, target: [4, 8], hint: "Use the edges of the grid: count the rows down the side and the columns along the top. Build the array." },
          { kind: "input", fields: [{ label: "Rows", value: 4 }, { label: "rows of", value: 8 }, { label: "Repeated number", value: 8 }, { label: "is repeated … times", value: 4 }, { label: "Total: 4 × 8 =", value: 32 }] }
        ],
        answer: "**4 rows of 8** · 8 is repeated 4 times · 4 × 8 = **32** squares",
        explain: "The purple cover hides the middle. The squares along the edges show 8 columns and 4 rows."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe this tessellating design. Have the shapes been reflected, translated or rotated?",
        img: "u34-tess.png",
        interact: [{ kind: "choose", rows: [
          { t: "Shape used", options: ["Triangles", "Squares", "Hexagons"], a: 0 },
          { t: "Gaps or overlaps?", options: ["No gaps or overlaps", "Some gaps"], a: 0 },
          { t: "Sliding a triangle along the row, same way up, is a", options: ["translation", "rotation"], a: 0 },
          { t: "Turning a triangle upside down (half turn) is a", options: ["rotation", "translation"], a: 0 }
        ] }],
        answer: "Equilateral **triangles** fit together with no gaps or overlaps. Triangles pointing the same way are **translated** (slid). Triangles pointing the other way are **rotated** (a half turn). Because each triangle is symmetrical, a flip (**reflection**) would also make the same pattern.",
        explain: "For equilateral triangles a half turn and a flip give the same result, so any of the three movements can be justified."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Sketch a rectangular prism showing depth. Think about the 2D shapes that can be seen.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "select", hint: "Tap the 2D shapes you can see on a rectangular prism.", items: [["Rectangles", true], ["Triangles", false], ["Circles", false]] }
        ],
        answer: "Draw a **rectangle** at the front, a matching rectangle behind and up to the side, then join the corners. The faces are **rectangles** (some may be squares). In a sketch the side and top faces look like parallelograms because of the depth."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "0.608 is equal to 0.6080. Communicate your reasoning.",
        answer: true,
        explain: "Both have 6 tenths, 0 hundredths and 8 thousandths. The extra 0 at the end means 0 ten-thousandths, so the value does not change.",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 0.608, hint: "This is 0.608. Adding a zero on the end adds no ten-thousandths." }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the mass of the objects in grams.",
        img: "u34-scales.png",
        interact: [{ kind: "input", fields: [{ label: "Chair: 2 kg 200 g =", value: 2200, suffix: "g" }, { label: "Backpack: 1 kg 750 g =", value: 1750, suffix: "g" }, { label: "Computer: 2 kg 35 g =", value: 2035, suffix: "g" }] }],
        answer: "Chair **2200 g** · Backpack **1750 g** · Computer **2035 g** (1 kg = 1000 g, so 2 kg 35 g = 2000 + 35)."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "An area model has a total of 16 squares. The left column has 4 squares. a) Determine the hidden rows and columns. b) Record the multiplication sentence.",
        interact: [
          { kind: "array", rows: 4, cols: 1, total: 16, hint: "This is the left column: 4 squares. Add columns until there are 16 squares." },
          { kind: "input", fields: [{ label: "a) Rows", value: 4 }, { label: "Columns", value: 4 }] },
          { kind: "sentence", fields: [{ label: "b) Multiplication sentence", re: "^\\s*4\\s*x\\s*4\\s*=\\s*16\\s*$|^\\s*16\\s*=\\s*4\\s*x\\s*4\\s*$", msg: "Use the rows and columns, like ? × ? = 16.", placeholder: "e.g. ? × ? = 16", sample: "4 x 4 = 16" }] }
        ],
        answer: "a) **4 rows and 4 columns**. 16 ÷ 4 = 4. b) **4 × 4 = 16**",
        explain: "The slide only had a placeholder note (Total = 16, left column = 4). It is read as an area model of 16 squares whose left column shows 4 squares."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Does this square have only these 2 lines of symmetry? Communicate your reasoning.",
        img: "u34-square.png",
        interact: [
          { kind: "mirror", view: [300, 300], label: "A square with 4 dashed lines to test", hint: "Tap each dashed line to fold the square over it.", shapes: [{ p: [[50, 50], [250, 50], [250, 250], [50, 250]], fill: "#F07B3F", lines: [[150, 20, 150, 280], [20, 150, 280, 150], [30, 30, 270, 270], [270, 30, 30, 270]] }] },
          { kind: "choose", rows: [{ t: "Only 2 lines of symmetry?", options: ["No, it has 4", "Yes, only 2"], a: 0 }] }
        ],
        answer: "**No.** A square has **4 lines of symmetry**: the vertical line, the horizontal line and both diagonals. The diamond inside also matches along the diagonals."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Which jug is filled to show one litre? Communicate your reasoning.",
        img: "u34-jugs.png",
        interact: [{ kind: "choose", rows: [{ t: "One litre", options: ["A", "B", "C", "D"], a: 2 }] }],
        answer: "**Jug C.** It is filled to the 1000 mL mark, and 1000 mL = 1 litre. A shows about 200 mL, B about 750 mL and D about 500 mL.",
        explain: "The other levels are read approximately from the slide's jug scales."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which array represents the fact family of: 2 × 4 = 8, 4 × 2 = 8, 8 ÷ 4 = 2, 8 ÷ 2 = 4?",
        img: "u34-arrays.png",
        options: ["A", "B", "C", "D"],
        answer: 0,
        explain: "Array A is 2 rows of 4 = 8. B is 4 rows of 4 = 16, C is 2 rows of 5 = 10 and D is 3 rows of 2 = 6.",
        interact: [{ kind: "array", rows: 2, cols: 4, showTotal: true, hint: "2 rows of 4. Rotate it to see 4 rows of 2." }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the mass of these objects using kilograms and grams.",
        img: "u34-masses.png",
        interact: [{ kind: "input", fields: [
          { label: "Lunch box 1500 g =", value: 1, suffix: "kg" }, { label: "and", value: 500, suffix: "g" },
          { label: "Balls 3250 g =", value: 3, suffix: "kg" }, { label: "and", value: 250, suffix: "g" },
          { label: "Books 5005 g =", value: 5, suffix: "kg" }, { label: "and", value: 5, suffix: "g" }] }],
        answer: "Lunch box **1 kg 500 g** · Balls **3 kg 250 g** · Books **5 kg 5 g**"
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Amal multiplied a one-digit number by a multiple of 10: 4 × 20 = 8 tens = 80. Record a solution to 6 × 40 using multiples of 10.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 0, target: 240, hint: "Put in 6 groups of 4 tens." },
          { kind: "input", fields: [{ label: "6 × 40 = 6 × 4 tens =", value: 24, suffix: "tens" }, { label: "=", value: 240 }] }
        ],
        answer: "6 × 40 = 6 × 4 tens = **24 tens = 240**"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the area of the rectangle in square centimetres. Each square is 1 square centimetre.",
        interact: [
          { kind: "areagrid", cells: ["1111111", "1111111", "1111111", "1111111"] },
          { kind: "input", fields: [{ label: "Area", value: 28, suffix: "cm²" }] }
        ],
        answer: "**28 square centimetres** (28 cm²). 4 rows of 7 squares: 4 × 7 = 28."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the mass of each weight using the abbreviation for kilogram.",
        img: "u34-kettle.png",
        interact: [{ kind: "input", fields: [{ label: "A", accept: ["8 kg"], placeholder: "e.g. 3 kg" }, { label: "B", accept: ["2 kg"], placeholder: "e.g. 3 kg" }, { label: "C", accept: ["4 kg"], placeholder: "e.g. 3 kg" }, { label: "D", accept: ["6 kg"], placeholder: "e.g. 3 kg" }] }],
        answer: "A **8 kg** · B **2 kg** · C **4 kg** · D **6 kg**. The abbreviation for kilogram is **kg**."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The fact family for 20, 5 and 4 is: 5 × 4 = 20, 4 × 5 = 20, 20 ÷ 5 = 4, 20 ÷ 4 = 5",
        answer: true,
        explain: "All four facts use 20, 5 and 4 and are correct. The two multiplication facts are turnarounds, and each division undoes them.",
        interact: [{ kind: "array", rows: 4, cols: 5, showTotal: true, hint: "4 rows of 5 = 20. Rotate for 5 rows of 4." }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Estimate then calculate the perimeter of the basketball court.",
        interact: [
          { kind: "sides", view: [440, 250], label: "Basketball court, 28 m long and 15 m wide", fill: "#D58B55",
            poly: [[40, 40], [360, 40], [360, 210], [40, 210]],
            dims: [{ from: [40, 232], to: [360, 232] }, { from: [384, 40], to: [384, 210] }],
            labels: [{ x: 200, y: 248, t: "28 m" }, { x: 394, y: 130, t: "15 m", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Estimate", min: 60, max: 110, suffix: "m" }, { label: "Perimeter", value: 86, suffix: "m" }] }
        ],
        answer: "Estimate: about **90 m** (30 + 30 + 15 + 15). Perimeter: 28 + 15 + 28 + 15 = **86 m**.",
        explain: "The slide labels the length 28 without a unit; it is read as 28 m to match the 15 m width. Opposite sides of the rectangle are equal."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Complete these multiplication (×) and division (÷) sentences by recording the missing numbers. A: ? × 6 = 42 B: 42 ÷ ? = 6",
        interact: [
          { kind: "scale", left: "? × 6", right: "42", answer: 7 },
          { kind: "scale", left: "42 ÷ ?", right: "6", answer: 7 }
        ],
        answer: "A: **7** × 6 = 42 · B: 42 ÷ **7** = 6"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Record the side lengths and area of each rectangle. Each square is 1 square centimetre. Can rectangles with different side lengths have the same area?",
        interact: [
          { kind: "areagrid", cells: ["111", "111", "111", "111"], size: 48 },
          { kind: "areagrid", cells: ["111111", "111111"], size: 48 },
          { kind: "input", fields: [{ label: "A: width", value: 3, suffix: "cm" }, { label: "A: length", value: 4, suffix: "cm" }, { label: "A: area", value: 12, suffix: "cm²" }, { label: "B: length", value: 6, suffix: "cm" }, { label: "B: width", value: 2, suffix: "cm" }, { label: "B: area", value: 12, suffix: "cm²" }] },
          { kind: "choose", rows: [{ t: "Different side lengths, same area?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "A: 3 cm by 4 cm, area **12 cm²** · B: 6 cm by 2 cm, area **12 cm²**. **Yes**: both rectangles have an area of 12 square centimetres with different side lengths.",
        explain: "The first grid is rectangle A (3 columns, 4 rows); the second is rectangle B (6 columns, 2 rows)."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Which of these familiar objects has a mass of about one kilogram? You may select more than one answer. Communicate your reasoning.",
        img: "u34-mass2.png",
        interact: [{ kind: "select", hint: "Tap each object with a mass of about 1 kilogram.", items: [["A: a laptop", true], ["B: a pencil", false], ["C: a loaf of bread", true], ["D: a bag of apples", true], ["E: a packet of gum", false], ["F: a 1 litre bottle of drink", true]] }],
        answer: "**A, C, D and F.** A laptop, a loaf of bread, a bag of apples and a 1 litre bottle of drink are each about 1 kg. A pencil and a packet of gum are only a few grams.",
        explain: "These are everyday estimates: a laptop is about 1–1.5 kg and a loaf of bread about 700 g, both close to 1 kg. The bottle is named as 1 litre so its mass is clear."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "You have 8 packs of stickers. Each pack has 4 stickers. If you share all the stickers equally with 4 friends, how many stickers does each friend get?",
        options: ["8 + 4 = 12, 12 ÷ 4 = 3. Answer: 3 stickers", "8 × 4 = 32, 32 ÷ 4 = 8. Answer: 8 stickers", "4 × 4 = 16, 16 ÷ 4 = 4. Answer: 4 stickers", "8 × 4 = 32, 32 ÷ 2 = 16. Answer: 16 stickers"],
        answer: 1,
        explain: "8 packs of 4 is 8 × 4 = 32 stickers. Shared between 4 friends: 32 ÷ 4 = 8 each.",
        cubes: { ops: ["×", "÷"], solve: [{ t: "Find the total, then share", s: "8 × 4 = 32 stickers. 32 ÷ 4 = 8 stickers each." }, { t: "Share the packs", s: "8 packs ÷ 4 friends = 2 packs each. 2 × 4 = 8 stickers each." }] },
        interact: [{ kind: "pack", mode: "share", n: 4, total: 32, label: "friend", thing: "stickers", hint: "Deal the 32 stickers to the 4 friends." }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the length of the pen using decimal notation to 2 decimal places.",
        img: "u34-pen.png",
        interact: [
          { kind: "marker", min: 0, max: 10, ticks: 1, minor: 10, target: 7.4, tol: 0.05, label: "pen tip", msg: "The pen starts at 0. Count the whole centimetres, then the small millimetre marks." },
          { kind: "input", fields: [{ label: "Length", value: 7.4, suffix: "cm", placeholder: "e.g. 1.00" }] }
        ],
        answer: "**7.40 cm** (7 cm and 4 mm). In metres this is about 0.07 m.",
        explain: "The pen tip and arrow line up with the 4th millimetre mark after 7 cm. 7.4 and 7.40 are both accepted; 7.40 shows 2 decimal places."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the solution using a number sentence. There are 40 basketballs packed into bags of 8. How many bags are needed?",
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "40 ÷ 8 = 5 bags." }, { t: "Count by eights", s: "8, 16, 24, 32, 40 is 5 eights, so 5 × 8 = 40 and 5 bags are needed." }] },
        interact: [
          { kind: "pack", total: 40, size: 8, label: "bag", thing: "basketballs" },
          { kind: "sentence", fields: [{ label: "Number sentence", re: "^\\s*40\\s*÷\\s*8\\s*=\\s*5\\s*$|^\\s*5\\s*x\\s*8\\s*=\\s*40\\s*$|^\\s*8\\s*x\\s*5\\s*=\\s*40\\s*$", msg: "Use 40 and 8, like 40 ÷ 8 = ?", placeholder: "e.g. 40 ÷ 8 = ?", sample: "40 ÷ 8 = 5" }] },
          { kind: "input", fields: [{ label: "Bags needed", value: 5 }] }
        ],
        answer: "**40 ÷ 8 = 5**. **5 bags** are needed."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the approximate area of this leaf in square centimetres using numerals and words.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u34-leaf.png" },
          { kind: "input", fields: [{ label: "About", min: 10, max: 17, suffix: "cm²" }] },
          { kind: "choose", rows: [{ t: "In words", options: ["square centimetres", "centimetres", "square metres"], a: 0 }] }
        ],
        answer: "About **12 square centimetres** (12 cm²). The leaf sits inside a 3 cm by 5 cm rectangle (15 cm²) but doesn't fill it, and the thin stem adds very little. Answers from about 10 to 17 cm² are reasonable.",
        explain: "The slide's rectangles (3 × 5 = 15 and 1 × 2 = 2) give an upper estimate of 17 cm². Counting whole and part squares gives about 11 to 12 cm², so any reasoned answer from 10 to 17 is accepted."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Thomas rolls a dice and it lands on 6. He believes that rolling a 6 once will double his chances of rolling a 6 again. Is Thomas correct? Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "Is Thomas correct?", options: ["No", "Yes"], a: 0 },
          { t: "Chance of a 6 on the next roll", options: ["1 out of 6", "2 out of 6", "0 out of 6"], a: 0 }
        ] }],
        answer: "**No.** Each roll is independent: the dice doesn't remember the last roll. The chance of rolling a 6 is always **1 out of 6**."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The divided by symbol is ÷",
        answer: true,
        explain: "÷ means divided by, for example 12 ÷ 3 = 4. × is the multiplication symbol."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert: a) 3 metres 67 cm to metres b) 52.6 m to cm",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h"], start: 3.67, hint: "3 m 67 cm is 3 whole metres and 67 hundredths of a metre." },
          { kind: "input", fields: [{ label: "a) 3 m 67 cm =", value: 3.67, suffix: "m" }, { label: "b) 52.6 m =", value: 5260, suffix: "cm" }] }
        ],
        answer: "a) **3.67 m** · b) 52.6 × 100 = **5260 cm**"
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record one multiplication (×) and one division (÷) number sentence to match: There are 32 desks arranged into 4 equal rows.",
        cubes: { ops: ["×", "÷"], solve: [{ t: "Divide into rows", s: "32 ÷ 4 = 8 desks in each row." }, { t: "Build the array", s: "4 rows of 8: 4 × 8 = 32 desks." }] },
        interact: [
          { kind: "array", rows: 4, cols: 1, total: 32, hint: "Keep 4 rows. Add columns until there are 32 desks." },
          { kind: "sentence", fields: [
            { label: "Multiplication", re: "^\\s*(4\\s*x\\s*8|8\\s*x\\s*4)\\s*=\\s*32\\s*$|^\\s*32\\s*=\\s*(4\\s*x\\s*8|8\\s*x\\s*4)\\s*$", msg: "Use ×, like 4 × ? = 32.", placeholder: "e.g. 4 × ? = 32", sample: "4 x 8 = 32" },
            { label: "Division", re: "^\\s*32\\s*÷\\s*(4|8)\\s*=\\s*(8|4)\\s*$", msg: "Use ÷, like 32 ÷ 4 = ?", placeholder: "e.g. 32 ÷ 4 = ?", sample: "32 ÷ 4 = 8" }
          ] }
        ],
        answer: "**4 × 8 = 32** and **32 ÷ 4 = 8**. There are 8 desks in each row."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the area of the house in square metres using numerals and words. Each square is 1 square metre.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u34-house.png" },
          { kind: "input", fields: [{ label: "Area", value: 72, suffix: "m²" }] },
          { kind: "choose", rows: [{ t: "In words", options: ["seventy-two square metres", "seventy-two metres", "twelve square metres"], a: 0 }] }
        ],
        answer: "**72 square metres** (72 m²). The grid covering the house is 12 squares long and 6 squares high: 6 × 12 = 72.",
        explain: "The small balcony outside the left wall is not covered by the grid, so it is not counted."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Harry has a jar with 12 gummy bears. He pulls out random gummy bears one at a time to eat them. Harry pulls out and eats one orange gummy bear. How does taking out the first orange gummy bear affect the chance of picking another orange gummy bear?",
        img: "u34-jar.png",
        interact: [
          { kind: "input", fields: [{ label: "Orange bears at the start", value: 3 }, { label: "out of", value: 12 }, { label: "Orange bears after eating one", value: 2 }, { label: "out of", value: 11 }] },
          { kind: "choose", rows: [{ t: "Another orange is now", options: ["less likely", "more likely", "just as likely"], a: 0 }] }
        ],
        answer: "At the start 3 of the 12 bears are orange. After Harry eats one, only **2 of the 11** bears left are orange, so picking another orange is **less likely**.",
        explain: "The jar shows 3 orange, 3 yellow, 3 pink and 3 purple bears."
      }
    ]
  ]
});
