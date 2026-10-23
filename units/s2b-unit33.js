/*
  Stage 2 Year B, Unit 33 — Review of learning (Term 3, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 3, ls: 3, unit: 33,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 33 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "What is the missing number? 4 × ___ = 28",
        options: ["5", "6", "7", "8"],
        answer: 2,
        explain: "Count by fours: 4, 8, 12, 16, 20, 24, 28. That is 7 fours, so 4 × 7 = 28.",
        interact: [{ kind: "scale", left: "4 x ?", right: "28", answer: 7 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "a) Record the multiples for this pattern. b) Record the next 3 multiples in the pattern.",
        img: "u33-multiples.png",
        interact: [
          { kind: "numchart", from: 1, to: 30, answer: [4, 8, 12, 16, 20, 24, 28], hint: "Tap the number of dots in each stack, then keep the pattern going." },
          { kind: "input", fields: [{ label: "a)", value: 4 }, { label: "", value: 8 }, { label: "", value: 12 }, { label: "", value: 16 }, { label: "b)", value: 20 }, { label: "", value: 24 }, { label: "", value: 28 }] }
        ],
        answer: "a) **4, 8, 12, 16** (each stack has 4 more dots). b) **20, 24, 28**. These are the multiples of 4."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "a) Is a kite a quadrilateral? b) Does it have equal sides? c) Does it have parallel sides? Communicate your reasoning.",
        interact: [
          { kind: "sides", view: [300, 320], label: "A kite", fill: "#FFDF5D", poly: [[150, 20], [245, 120], [150, 300], [55, 120]] },
          { kind: "choose", rows: [
            { t: "a) Is a kite a quadrilateral?", options: ["Yes", "No"], a: 0 },
            { t: "b) Does it have equal sides?", options: ["Yes, 2 pairs of equal sides next to each other", "Yes, all 4 sides are equal", "No, all the sides are different"], a: 0 },
            { t: "c) Does it have parallel sides?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "a) **Yes.** It has 4 straight sides. b) **Yes.** The 2 short top sides are equal and the 2 long bottom sides are equal (2 pairs of equal sides next to each other). c) **No.** None of its sides are parallel."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Rearrange the digits in 45 712 to make the smallest and largest number possible.",
        interact: [
          { kind: "order", items: ["4", "5", "7", "1", "2"], answer: [3, 4, 0, 1, 2] },
          { kind: "order", items: ["4", "5", "7", "1", "2"], answer: [2, 1, 0, 4, 3] },
          { kind: "input", fields: [{ label: "Smallest", value: 12457 }, { label: "Largest", value: 75421 }] }
        ],
        answer: "Smallest: **12 457** (smallest digit in the biggest place). Largest: **75 421** (biggest digit in the biggest place).",
        explain: "The first row of digit cards builds the smallest number and the second row builds the largest."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Flynn measured his sister's height. The arrow shows her height on a tape measure. Record the height using a combination of metres and centimetres.",
        img: "u33-tape.png",
        interact: [
          { kind: "input", fields: [{ label: "Height", value: 1, suffix: "m" }, { label: "", value: 25, suffix: "cm" }] }
        ],
        answer: "The arrow points to 125 cm. 100 cm = 1 m, so her height is **1 m 25 cm**.",
        explain: "The slide's tape measure had 9 small marks between each labelled 10 cm, so the arrow could be read as 124 or 125 cm. The tape has been redrawn with 1 cm marks and the arrow on the 125 cm (half-way) mark."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "The missing number in the fact family triangle is 8. The triangle shows 42 at the top, and ? and 6 at the bottom.",
        img: "u33-factfamily.png",
        answer: false,
        explain: "42 is at the top, so ? × 6 = 42. 7 × 6 = 42, so the missing number is 7. 8 × 6 = 48.",
        interact: [{ kind: "array", rows: 6, cols: 7, showTotal: true, hint: "6 rows of 7. Is it 42? What would 6 rows of 8 make?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the first 10 multiples when counting by twos and fours. Circle the numbers that appear in both sequences.",
        interact: [
          { kind: "numchart", from: 1, to: 40, answer: [4, 8, 12, 16, 20], hint: "Say the twos to 20 and the fours to 40. Tap the numbers that are in both lists." }
        ],
        answer: "Twos: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. Fours: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40. In both: **4, 8, 12, 16, 20**. Every second multiple of 2 is a multiple of 4."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "This shape has been created by combining other shapes. a) What is the name of the new 2D shape? b) Which shapes have been combined?",
        img: "u33-trapezium.png",
        interact: [{ kind: "choose", rows: [
          { t: "a) The new shape is a", options: ["Trapezium", "Rectangle", "Hexagon", "Triangle"], a: 0 },
          { t: "b) It is made from", options: ["3 triangles", "2 triangles and a square", "A triangle and a rectangle"], a: 0 }] }],
        answer: "a) A **trapezium**: 4 sides with 1 pair of parallel sides (top and bottom). b) **3 triangles** (equilateral triangles), one of them turned upside down in the middle."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the number 89 507 in expanded notation.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 0, target: 89507, need: "standard", hint: "Use + to build 89 507 in the place value chart." },
          { kind: "input", fields: [{ label: "89 507 =", value: 80000 }, { label: "+", value: 9000 }, { label: "+", value: 500 }, { label: "+", value: 7 }] }
        ],
        answer: "**80 000 + 9000 + 500 + 7**. There are 0 tens, so no tens part is needed."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Order these lengths from shortest to longest: 5 m 65 cm, 65 m 5 cm, 6 m 56 cm, 56 m 65 cm.",
        interact: [{ kind: "order", items: ["5 m 65 cm", "65 m 5 cm", "6 m 56 cm", "56 m 65 cm"], answer: [0, 2, 3, 1] }],
        answer: "**5 m 65 cm, 6 m 56 cm, 56 m 65 cm, 65 m 5 cm.** Compare the metres first: 5, 6, 56, 65."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "What is the missing number? 36 ÷ ___ = 12",
        options: ["2", "3", "4", "6"],
        answer: 1,
        explain: "3 × 12 = 36, so 36 ÷ 3 = 12. (36 ÷ 2 = 18, 36 ÷ 4 = 9, 36 ÷ 6 = 6.)",
        interact: [{ kind: "scale", left: "36 ÷ ?", right: "12", answer: 3 }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the distributive property to solve 6 × 7.",
        interact: [
          { kind: "array", rows: 6, cols: 5, showTotal: true, hint: "This is 6 × 5. Build 6 × 2 for the rest of the 7 columns." },
          { kind: "expr", count: 1, target: 42, placeholder: "e.g. 6 x 5 + 6 x 2", mustUse: { re: "[×xX*].*\\+.*[×xX*]", msg: "Split one factor into two parts, like 6 × 5 + 6 × 2." }, sample: ["6 x 5 + 6 x 2"] }
        ],
        answer: "Answers vary, for example 6 × 7 = 6 × 5 + 6 × 2 = 30 + 12 = **42**, or 5 × 7 + 1 × 7 = 35 + 7 = 42."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Create a tessellating design by reflecting, translating or rotating the triangle 3 times. Describe your transformations.",
        interact: [{ kind: "sketch", grid: "square", shape: { view: [400, 300], pts: [[20, 20], [20, 128], [128, 128]] }, shapeFill: "rgba(91,196,230,.6)", shapeStroke: "#333" }],
        answer: "Answers vary. For example: **reflect** the triangle over its long side to make a square, then **translate** (slide) that square to the right. Or **rotate** it a half turn about the middle of its long side. The triangles fit together with no gaps or overlaps."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Does 0.70 have the same value as 0.7? What is the role of the zero in 0.70?",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6], hint: "7 tenths are shaded. Split each tenth into 10 hundredths: how many hundredths is that?" },
          { kind: "choose", rows: [
            { t: "Does 0.70 have the same value as 0.7?", options: ["Yes", "No"], a: 0 },
            { t: "The zero in 0.70", options: ["shows there are 0 hundredths", "makes the number 10 times bigger", "shows there are 0 tenths"], a: 0 }] }
        ],
        answer: "**Yes.** 0.7 is 7 tenths and 0.70 is 70 hundredths, which is the same amount. The zero is a **placeholder in the hundredths place**: it shows there are 0 hundredths. It doesn't change the value."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Match the item to the most appropriate tool to measure its length. Items: 1. school hall, 2. eraser, 3. balance beam. Tools: A. 30 cm ruler, B. metre ruler, C. trundle wheel.",
        interact: [{ kind: "choose", rows: [
          { t: "1. school hall", options: ["A. 30 cm ruler", "B. metre ruler", "C. trundle wheel"], a: 2 },
          { t: "2. eraser", options: ["A. 30 cm ruler", "B. metre ruler", "C. trundle wheel"], a: 0 },
          { t: "3. balance beam", options: ["A. 30 cm ruler", "B. metre ruler", "C. trundle wheel"], a: 1 }] }],
        answer: "1. School hall → **C. trundle wheel** (very long). 2. Eraser → **A. 30 cm ruler** (short). 3. Balance beam → **B. metre ruler** (a few metres long).",
        explain: "Each tool is used once. A trundle wheel would also work for a balance beam, but it is taken by the school hall."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "1, 2, 3, 4, 6, 9, 12, 13, 36 are factors of 36. Communicate your reasoning.",
        answer: false,
        explain: "13 is not a factor of 36: 2 × 13 = 26 and 3 × 13 = 39. The list also misses 18 (2 × 18 = 36). The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.",
        interact: [{ kind: "numchart", from: 1, to: 36, answer: [1, 2, 3, 4, 6, 9, 12, 18, 36], hint: "Tap the factors of 36. Find them in pairs: 1 × 36, 2 × 18 …" }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Only the top row of 4 squares is visible on this rectangular grid. The total number of squares on this grid is 28. Record how many rows there must be.",
        img: "u33-grid.png",
        interact: [
          { kind: "array", rows: 1, cols: 4, fixCols: true, showTotal: true, target: [7, 4], hint: "Each row has 4 squares. Add rows until there are 28." },
          { kind: "input", fields: [{ label: "Rows", value: 7 }] }
        ],
        answer: "**7 rows.** 28 ÷ 4 = 7, because 7 × 4 = 28."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "How many lines of symmetry can you identify on this tile?",
        img: "u33-tile.png",
        interact: [
          { kind: "mirror", view: [300, 300], label: "A tile: a square with a diamond on top", shapes: [{ fill: "#1468FF", p: [[150, 20], [187, 57], [243, 57], [243, 113], [280, 150], [243, 187], [243, 243], [187, 243], [150, 280], [113, 243], [57, 243], [57, 187], [20, 150], [57, 113], [57, 57], [113, 57]],
            lines: [[150, 5, 150, 295], [5, 150, 295, 150], [15, 15, 285, 285], [285, 15, 15, 285]] }] },
          { kind: "input", fields: [{ label: "Lines of symmetry", value: 4 }] }
        ],
        answer: "**4 lines of symmetry**: 1 vertical, 1 horizontal and 2 diagonal. Each line folds the tile onto itself.",
        explain: "The interactive tile is drawn as one outline (the square and diamond together) so each fold can be tested. The colours on the slide are also symmetrical on all 4 lines."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the decimals at A, B, C, D on the number line. Communicate your reasoning.",
        img: "u33-decimals.png",
        interact: [
          { kind: "marker", min: 0, max: 1, divs: 100, majorEvery: 10, labels: [0, 1], label: "?", hint: "Drag the pin to model counting tenths (long marks) and hundredths (short marks)." },
          { kind: "input", fields: [{ label: "A", value: 0.27 }, { label: "B", value: 0.34 }, { label: "C", value: 0.43 }, { label: "D", value: 0.72 }] }
        ],
        answer: "**A = 0.27, B = 0.34, C = 0.43, D = 0.72.** The long marks are tenths and the short marks are hundredths. A is 7 hundredths past 0.2, B is 4 past 0.3, C is 3 past 0.4 and D is 2 past 0.7.",
        explain: "Readings come from the slide's number line, which is split into 100 hundredths."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the lengths at A, B, C, D by converting them into either millimetres or centimetres. Highlighter 103 mm (A in cm), pen 14.5 cm (B in mm), binder clip 26 mm (C in cm), push pin 1.5 cm (D in mm).",
        img: "u33-lengths.png",
        interact: [
          { kind: "input", fields: [{ label: "A", value: 10.3, suffix: "cm" }, { label: "B", value: 145, suffix: "mm" }, { label: "C", value: 2.6, suffix: "cm" }, { label: "D", value: 15, suffix: "mm" }] }
        ],
        answer: "**A = 10.3 cm**, **B = 145 mm**, **C = 2.6 cm**, **D = 15 mm.** 10 mm = 1 cm, so divide millimetres by 10 to get centimetres, and multiply centimetres by 10 to get millimetres."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "What is the missing number? 68 − __ = 15",
        options: ["63", "43", "54", "53"],
        answer: 3,
        explain: "Count on from 15 to 68: 15 + 50 = 65, + 3 = 68. That is 53. Check: 68 − 53 = 15.",
        interact: [{ kind: "scale", left: "68 - ?", right: "15", answer: 53 }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "This area model has been torn. The number of rows and columns are still visible. Describe the rows × columns. Record the multiplication sentence.",
        img: "u33-torn.png",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [5, 3], showTotal: true, hint: "Count the rows down the left edge and the columns along the bottom. Build the whole array." },
          { kind: "input", fields: [{ label: "Rows", value: 5 }, { label: "Columns", value: 3 }, { label: "5 × 3 =", value: 15 }] }
        ],
        answer: "**5 rows × 3 columns.** 5 × 3 = **15** squares.",
        explain: "The left edge shows 5 rows and the bottom row shows 3 columns."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the area of this rectangle in square centimetres. Communicate your reasoning.",
        img: "u33-rectangle.png",
        interact: [
          { kind: "array", rows: 6, cols: 10, max: 14, showTotal: true, hint: "This is the 6 × 10 part. Add 4 more columns." },
          { kind: "input", fields: [{ label: "Area", value: 84, suffix: "cm²" }] }
        ],
        answer: "**84 cm²**. 6 rows of 14: 6 × 10 = 60 and 6 × 4 = 24, so 60 + 24 = 84 square centimetres."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Finish these sentences: a) 0.25 is the same as the fraction … b) [1/2] written as a decimal is … c) 0.75 is the same as the fraction … d) [3/10] written as a decimal is …",
        interact: [
          { kind: "shade", parts: 4, pct: true, hint: "Tap quarters to shade them. Each quarter is 25 hundredths." },
          { kind: "input", fields: [{ label: "a) 0.25 =", accept: ["1/4", "25/100"], placeholder: "fraction" }, { label: "b) [1/2] =", value: 0.5 }, { label: "c) 0.75 =", accept: ["3/4", "75/100"], placeholder: "fraction" }, { label: "d) [3/10] =", value: 0.3 }] }
        ],
        answer: "a) 0.25 = **[1/4]** (25 hundredths) · b) [1/2] = **0.5** · c) 0.75 = **[3/4]** (75 hundredths) · d) [3/10] = **0.3**",
        explain: "25/100 and 75/100 are also accepted for a) and c)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "For this prism: a) How many layers does it have? b) How many cubes in each layer? c) What is the volume?",
        img: "u33-prism.png",
        interact: [
          { kind: "array", rows: 3, cols: 3, showTotal: true, hint: "This is one layer seen from the top: 3 rows of 3." },
          { kind: "input", fields: [{ label: "a) Layers", value: 4 }, { label: "b) Cubes in each layer", value: 9 }, { label: "c) Volume", value: 36, suffix: "cubes" }] }
        ],
        answer: "a) **4 layers** b) **9 cubes** in each layer (3 × 3) c) Volume = 4 × 9 = **36 cubes**.",
        explain: "The prism is 3 cubes long, 3 cubes wide and 4 cubes high, with no hidden gaps."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "22 + 8 + 13 = 50 − 7. Communicate your reasoning.",
        answer: true,
        explain: "22 + 8 = 30, and 30 + 13 = 43. 50 − 7 = 43. Both sides are 43, so the equation is true.",
        interact: [{ kind: "jumps", start: 22, end: 50, steps: [1, 10], hint: "Start at 22. Jump 8 to land on a ten, then jump 13." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the associative property to regroup the factors into multiples of 10 and record the totals. a) 6 × 40 becomes 6 × (__ × __) b) 3 × 80 becomes 3 × (__ × __) c) 5 × 70 becomes 5 × (__ × __)",
        interact: [
          { kind: "input", fields: [
            { label: "a) 6 × 40 = 6 × (", value: 4 }, { label: "×", value: 10, suffix: ")" }, { label: "6 × 40 =", value: 240 },
            { label: "b) 3 × 80 = 3 × (", value: 8 }, { label: "×", value: 10, suffix: ")" }, { label: "3 × 80 =", value: 240 },
            { label: "c) 5 × 70 = 5 × (", value: 7 }, { label: "×", value: 10, suffix: ")" }, { label: "5 × 70 =", value: 350 }] }
        ],
        answer: "a) 6 × (**4 × 10**) = 24 × 10 = **240** · b) 3 × (**8 × 10**) = 24 × 10 = **240** · c) 5 × (**7 × 10**) = 35 × 10 = **350**",
        explain: "The slide's \"6 × 40 = becomes\" has been read as \"6 × 40 becomes\"."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Can rectangles with different side lengths have the same area? Communicate your reasoning.",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "3 rows of 4 = 12 squares. Can you build 12 squares with different side lengths?" },
          { kind: "choose", rows: [{ t: "Can rectangles with different side lengths have the same area?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes.** For example, a 3 cm × 4 cm rectangle and a 2 cm × 6 cm rectangle both have an area of 12 cm². So does 1 cm × 12 cm."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the associative and commutative properties to solve 12 × 25. Communicate how you used these properties to make the calculation easier.",
        interact: [
          { kind: "sentence", fields: [{ label: "Number sentence", re: "4\\s*x\\s*25|25\\s*x\\s*4|x\\s*100|100\\s*x", msg: "Split 12 into 3 × 4, then use 4 × 25 = 100.", placeholder: "e.g. 3 × 4 × 25 = 300", sample: "3 x 4 x 25 = 300" }] },
          { kind: "input", fields: [{ label: "12 × 25 =", value: 300 }] }
        ],
        answer: "12 × 25 = 3 × 4 × 25 = 3 × (4 × 25) = 3 × 100 = **300**. Splitting 12 into 3 × 4 and regrouping (associative) lets me make 4 × 25 = 100 first. I can swap the order of the factors (commutative) without changing the answer."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Finish this sentence: 1000 mL is the same as …",
        img: "u33-jug.png",
        interact: [{ kind: "choose", rows: [{ t: "1000 mL is the same as", options: ["10 L", "1 L", "100 L", "[1/2] L"], a: 1 }] }],
        answer: "**1000 mL is the same as 1 litre (1 L).** The jug is full at the 1000 mL mark."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "Which word problem matches this number sentence? __ + 27 = 34",
        options: ["Noah had 34 books. He gave 27 away. How many books does he have left?", "Noah had 34 books. He got 27 more books. How many books does he have now?", "Noah had some books. He got 27 more and now has 34. How many did he start with?", "Noah has 27 books and his friend has 34. Who has more?"],
        answer: 2,
        explain: "The unknown comes first, then 27 is added, and the result is 34. Only C starts with an unknown number of books, adds 27 and ends with 34. Noah started with 7 books.",
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Match the parts", s: "Unknown start, then + 27, then the total 34. Look for the story where the start is missing." }, { t: "Solve it", s: "? + 27 = 34. 27 + 3 = 30, + 4 = 34, so ? = 7." }] },
        interact: [{ kind: "bar", whole: { v: 34, l: "34", n: "books now" }, parts: [{ v: 7, l: "7", n: "to start", hide: true }, { v: 27, l: "27", n: "more" }] }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Complete the number sentences: a) 24 ÷ ___ = 4 b) ___ × 7 = 49 c) ___ ÷ 5 = 5 d) 5 × ___ = 35",
        interact: [
          { kind: "scale", left: "24 ÷ ?", right: "4", answer: 6 },
          { kind: "scale", left: "? x 7", right: "49", answer: 7 },
          { kind: "scale", left: "? ÷ 5", right: "5", answer: 25 },
          { kind: "scale", left: "5 x ?", right: "35", answer: 7 }
        ],
        answer: "a) 24 ÷ **6** = 4 · b) **7** × 7 = 49 · c) **25** ÷ 5 = 5 · d) 5 × **7** = 35"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the missing numerals and words. The area of the leaf is: a) more than ___ b) less than ___ c) I estimate the area of the leaf to be ___",
        img: "u33-leaf.png",
        interact: [
          { kind: "input", fields: [{ label: "a) more than", value: 24 }, { label: "b) less than", value: 90 }, { label: "c) estimate", min: 40, max: 65 }] },
          { kind: "choose", rows: [{ t: "The unit is", options: ["square centimetres (cm²)", "centimetres (cm)", "square metres (m²)"], a: 0 }] }
        ],
        answer: "a) more than **24 square centimetres** (the small rectangle, 6 × 4, is all inside the leaf) · b) less than **90 square centimetres** (the big rectangle, 9 × 10, holds the whole leaf) · c) about **50 square centimetres** (answers vary).",
        explain: "Each grid square is 1 cm². Measured from the picture, the leaf covers about 50 squares, so estimates from 40 to 65 cm² are accepted."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the distributive property to solve 7 × 8. Record a number sentence showing flexible partitioning.",
        img: "u33-dots7x8.png",
        interact: [
          { kind: "array", rows: 7, cols: 5, showTotal: true, hint: "This is the purple part: 7 rows of 5. Now build the green part." },
          { kind: "sentence", fields: [{ label: "Number sentence", re: "x.*\\+.*x", msg: "Split the array into two parts, like 7 × 5 + 7 × 3.", placeholder: "e.g. 7 × 5 + 7 × 3 = 56", sample: "7 x 5 + 7 x 3 = 56" }] }
        ],
        answer: "7 × 8 = 7 × 5 + 7 × 3 = 35 + 21 = **56**. The purple dots are 7 rows of 5 and the green dots are 7 rows of 3."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record each fruit's mass.",
        img: "u33-scales.png",
        interact: [
          { kind: "input", fields: [{ label: "A apples", value: 650, suffix: "g" }, { label: "B grapes", value: 125, suffix: "g" }, { label: "C bananas", value: 500, suffix: "g" }] }
        ],
        answer: "A: **650 g** · B: **125 g** · C: **500 g**"
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "The word problem matches the number sentence 68 − 34 = ?. Ben had 68 marbles. He got 34 more marbles. Now he has 102 marbles.",
        answer: false,
        explain: "Getting more marbles means adding: 68 + 34 = 102. The number sentence subtracts (68 − 34 = 34), so it does not match the story.",
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Read the action", s: "\"Got 34 more\" means the marbles are joined, so the story is 68 + 34 = 102, not a subtraction." }, { t: "Check the numbers", s: "68 − 34 = 34, not 102. 68 + 34 = 102, so the story matches addition." }] },
        interact: [{ kind: "bar", whole: { v: 102, l: "102", n: "marbles now" }, parts: [{ v: 68, l: "68", n: "at first" }, { v: 34, l: "34", n: "more" }] }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the number sentence for this problem and solve it: There are 42 apples packed into bags of 6. How many bags are needed?",
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "42 apples ÷ 6 in each bag = 7 bags." }, { t: "Count by sixes", s: "6, 12, 18, 24, 30, 36, 42. That is 7 sixes, so 7 × 6 = 42 and 7 bags are needed." }] },
        interact: [
          { kind: "pack", total: 42, size: 6, label: "bag", thing: "apples" },
          { kind: "sentence", fields: [{ label: "Number sentence", re: "42\\s*[÷/]\\s*6|6\\s*x\\s*7|7\\s*x\\s*6", msg: "Use 42 and 6, like 42 ÷ 6 = 7.", placeholder: "e.g. 42 ÷ ? = ?", sample: "42 ÷ 6 = 7" }] },
          { kind: "input", fields: [{ label: "Bags needed", value: 7 }] }
        ],
        answer: "42 ÷ 6 = **7 bags**. Check: 7 × 6 = 42."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the area of the beach volleyball court in square metres. The court is 16 m long and 8 m wide.",
        img: "u33-court.png",
        interact: [
          { kind: "array", rows: 8, cols: 10, max: 16, showTotal: true, hint: "Each dot is 1 square metre. This is 8 × 10. Add 6 more columns to make 8 × 16." },
          { kind: "input", fields: [{ label: "Area", value: 128, suffix: "m²" }] }
        ],
        answer: "**128 m²**. 16 × 8: 10 × 8 = 80 and 6 × 8 = 48, so 80 + 48 = 128 square metres."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "16 × 4 has been partitioned using knowledge of place value to multiply by a multiple of 10. Record a number sentence showing this flexible partitioning.",
        img: "u33-dots16x4.png",
        interact: [
          { kind: "array", rows: 4, cols: 10, max: 16, showTotal: true, hint: "This is the black part: 4 rows of 10. Now build the green part." },
          { kind: "sentence", fields: [{ label: "Number sentence", re: "x.*\\+.*x", msg: "Split 16 into 10 and 6, like 10 × 4 + 6 × 4.", placeholder: "e.g. 10 × 4 + 6 × 4 = 64", sample: "10 x 4 + 6 x 4 = 64" }] }
        ],
        answer: "16 × 4 = 10 × 4 + 6 × 4 = 40 + 24 = **64**. The black dots are 10 columns of 4 and the green dots are 6 columns of 4."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Fill in the blanks: a) [1/2] kilogram is the same as ___ grams. b) [1/4] kilogram is the same as ___ grams. c) [3/4] kilogram is the same as ___ grams.",
        interact: [
          { kind: "shade", parts: 4, pct: true, each: 250, hint: "The strip is 1 kg = 1000 g. Tap quarters to shade them." },
          { kind: "input", fields: [{ label: "a) [1/2] kg =", value: 500, suffix: "g" }, { label: "b) [1/4] kg =", value: 250, suffix: "g" }, { label: "c) [3/4] kg =", value: 750, suffix: "g" }] }
        ],
        answer: "a) **500 g** · b) **250 g** · c) **750 g**. 1 kg = 1000 g. Half of 1000 is 500, a quarter is 250 and three quarters is 3 × 250 = 750."
      }
    ]
  ]
});
