/*
  Stage 2 Year A, Unit 14 — Review of learning (Term 3, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
(function () {
  // Letter O as a ring (outer ellipse, then the hole), sampled symmetrically so the fold test works.
  const ring = (cx, cy, rx, ry, ix, iy, n) => {
    const pt = (a, x, y) => [Math.round((cx + x * Math.sin(a)) * 10) / 10, Math.round((cy - y * Math.cos(a)) * 10) / 10];
    const out = [], inn = [];
    for (let k = 0; k <= n; k++) { const a = (k * 2 * Math.PI) / n; out.push(pt(a, rx, ry)); inn.push(pt(-a, ix, iy)); }
    return out.concat(inn);
  };

  UNITS.push({
    stage: 2, ab: "A", term: 3, ls: 4, unit: 14,
    img: "img/s2/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 14 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1
      [
        {
          type: "mc", focus: "Representing numbers using place value B",
          prompt: "Which number is 10 times as large as 9? Communicate your reasoning.",
          options: ["900", "90", "909", "99"],
          answer: 1,
          explain: "10 × 9 = 90. Multiplying by 10 moves the 9 one place to the left, from the ones to the tens, and a 0 holds the ones place. 900 is 100 times as large.",
          interact: [{ kind: "pv", cols: ["H", "T", "O"], start: 9, shift: true, hint: "This is 9. Press × 10 once and watch the 9 move one place left." }]
        },
        {
          type: "sr", focus: "Non-spatial measure B (Stage 1)",
          prompt: "A toy car balances with 3 blocks on an equal-arm balance. How many blocks would balance 2 toy cars? Communicate your reasoning.",
          img: "u14-balance.png",
          cubes: { ops: ["×", "+"], solve: [{ t: "Double it", s: "1 car balances 3 blocks. 2 cars need double: 2 × 3 = 6 blocks." }, { t: "Add a group for each car", s: "3 blocks for the first car + 3 blocks for the second car = 6 blocks." }] },
          interact: [{ kind: "input", fields: [{ label: "2 toy cars balance", value: 6, suffix: "blocks" }] }],
          answer: "**6 blocks**. Each toy car has the same mass as 3 blocks, so 2 cars balance 3 + 3 = 6 blocks."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Is 176 an odd or even number? Communicate your reasoning.",
          interact: [{ kind: "choose", rows: [
            { t: "176 is", options: ["odd", "even"], a: 1 },
            { t: "Why?", options: ["It has 7 tens", "Its ones digit, 6, is even", "It is bigger than 100"], a: 1 }] }],
          answer: "**Even**. The ones digit is 6, and 6 is even. 176 can be shared into 2 equal groups of 88 with none left over."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "Which of the following two-dimensional shapes are quadrilaterals?",
          interact: [{ kind: "classify", view: [840, 220], label: "Triangle A, parallelogram B, pentagon C, rhombus D and trapezium E", hint: "Count the straight sides. Choose a group, then tap each shape.",
            cats: [{ t: "Quadrilateral (4 sides)", c: "#1F6FE5", k: "q" }, { t: "Not a quadrilateral", c: "#FF6B3B", k: "n" }],
            shapes: [
              { p: "40,170 160,170 100,60", a: "n", deco: "<text x='100' y='206' text-anchor='middle' font-size='20'>A triangle</text>" },
              { p: "235,40 265,40 250,180 220,180", a: "q", deco: "<text x='243' y='206' text-anchor='middle' font-size='20'>B parallelogram</text>" },
              { p: "410,50 471.8,94.9 448.2,167.6 371.8,167.6 348.2,94.9", a: "n", deco: "<text x='410' y='206' text-anchor='middle' font-size='20'>C pentagon</text>" },
              { p: "540,70 620,70 660,139 580,139", a: "q", deco: "<text x='600' y='206' text-anchor='middle' font-size='20'>D rhombus</text>" },
              { p: "730,80 800,45 800,185 730,150", a: "q", deco: "<text x='765' y='206' text-anchor='middle' font-size='20'>E trapezium</text>" }] }],
          answer: "**B** (parallelogram), **D** (rhombus) and **E** (trapezium). A quadrilateral has 4 straight sides. The triangle has 3 sides and the pentagon has 5."
        },
        {
          type: "sr", focus: "Chance A",
          prompt: "The spinner has 4 equal parts: green, blue, red and yellow. The spinner is spun 3 times. List all possible outcomes of this chance experiment.",
          interact: [
            { kind: "select", hint: "Tap every colour a single spin could land on.", items: [["green", true], ["blue", true], ["red", true], ["yellow", true], ["purple", false], ["orange", false]] },
            { kind: "choose", rows: [
              { t: "Could all 3 spins land on red?", options: ["Yes", "No"], a: 0 },
              { t: "Is green, blue, yellow a possible outcome?", options: ["Yes", "No"], a: 0 }] }
          ],
          answer: "Each spin can land on **green, blue, red or yellow**. Over 3 spins, any colour can come up each time, for example red, red, red or green, blue, yellow.",
          explain: "The spinner's colours are read from the slide picture. Listed in order, there are 4 × 4 × 4 = 64 different results for 3 spins, so the class lists the 4 outcomes for each spin and a few examples of 3 spins."
        }
      ],
      // Review 2
      [
        {
          type: "tf", focus: "Representing numbers using place value B",
          prompt: "850 is 100 times as large as 85. Communicate your reasoning.",
          answer: false,
          explain: "85 × 10 = 850, so 850 is only 10 times as large as 85. 100 times as large as 85 is 8500.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 85, shift: true, hint: "This is 85. Press × 10 once. Is that 850? Press × 10 again to see × 100." }]
        },
        {
          type: "sr", focus: "Non-spatial measure A",
          prompt: "Record the objects that have a mass of about 1 kg. Communicate your reasoning.",
          img: "u14-masses.png",
          interact: [{ kind: "select", hint: "Tap every object with a mass of about 1 kilogram.", items: [["A bag of sugar", true], ["B pencil", false], ["C bag of flour", true], ["D school chair", false]] }],
          answer: "**A** (bag of sugar) and **C** (bag of flour). Supermarket bags of sugar and flour are often 1 kg. A pencil is much lighter, and a school chair is much heavier."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "a) Draw an array to show that 9 is a square number. b) Record a number sentence to match the array.",
          interact: [
            { kind: "array", rows: 1, cols: 1, target: [3, 3], showTotal: true, hint: "Build an array with 9 dots and the same number of rows as columns." },
            { kind: "sentence", fields: [{ label: "Number sentence", placeholder: "e.g. 2 × 2 = 4", re: "^\\s*(3\\s*x\\s*3\\s*=\\s*9|9\\s*=\\s*3\\s*x\\s*3)\\s*$", msg: "Write a number sentence for your square array: rows × columns = 9.", sample: "3 x 3 = 9" }] }
          ],
          answer: "**3 rows of 3**: 3 × 3 = 9. The array is a square because it has the same number of rows and columns, so 9 is a square number."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "Hannah was asked to identify the parallel sides of each two-dimensional shape by marking them with different colours for each set. Which of these shapes did Hannah accurately identify all sets of parallel lines? Communicate your reasoning.",
          img: "u14-parallel.png",
          interact: [{ kind: "choose", rows: [
            { t: "A octagon", options: ["All sets found", "Missed a set", "No parallel sides"], a: 0 },
            { t: "B trapezium", options: ["All sets found", "Missed a set", "No parallel sides"], a: 0 },
            { t: "C pentagon", options: ["All sets found", "Missed a set", "No parallel sides"], a: 2 },
            { t: "D square", options: ["All sets found", "Missed a set", "No parallel sides"], a: 0 },
            { t: "E circle", options: ["All sets found", "Missed a set", "No parallel sides"], a: 2 },
            { t: "F parallelogram", options: ["All sets found", "Missed a set", "No parallel sides"], a: 1 }] }],
          answer: "Hannah marked every set on **A**, **B** and **D**. A (octagon) has 4 sets, B (trapezium) has 1 set and D (square) has 2 sets. C and E have no parallel sides, so there was nothing to mark. On **F** she missed a set: the two slanted sides are also parallel.",
          explain: "Read from the slide picture: the octagon has 4 colours, the trapezium has its 2 upright sides marked, the square has 2 colours and the parallelogram has only its top and bottom marked."
        },
        {
          type: "sr", focus: "Chance A",
          prompt: "A six-sided dice is rolled twice. List all possible outcomes of this chance experiment.",
          interact: [{ kind: "input", fields: [{ label: "Outcomes that start with a 1 (1 then 1, 1 then 2 …):", value: 6 }, { label: "Total number of outcomes:", value: 36 }] }],
          answer: "**36 outcomes**. Each roll can be 1, 2, 3, 4, 5 or 6. 1 then 1, 1 then 2 … 1 then 6 is 6 outcomes, and there are 6 for each first number: 6 × 6 = 36.",
          explain: "Order counts here: 1 then 6 is a different outcome from 6 then 1. A 6 × 6 table (first roll down the side, second roll across the top) lists them all."
        }
      ],
      // Review 3
      [
        {
          type: "mc", focus: "Representing numbers using place value B",
          prompt: "Which number is 1000 times as large as 127? Communicate your reasoning.",
          options: ["1027", "1207", "1270", "127 000"],
          answer: 3,
          explain: "127 × 1000 = 127 000. Multiplying by 1000 moves every digit 3 places to the left. The slide's options were 1027, 1207, 1270 and 1007, and none of them is correct (1270 is only 10 times as large), so option D has been changed to 127 000.",
          interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 127, shift: true, houses: false, hint: "This is 127. Press × 10 three times to make it 1000 times as large." }]
        },
        {
          type: "sr", focus: "Non-spatial measure A",
          prompt: "Record the masses of the objects using the abbreviation for kilograms (kg).",
          img: "u14-kg-balance.png",
          interact: [{ kind: "input", fields: [{ label: "A books", accept: ["3 kg", "3kg"], placeholder: "? kg" }, { label: "B water bottle", accept: ["2 kg", "2kg"], placeholder: "? kg" }] }],
          answer: "A: the books balance three 1-kilogram masses, so they are **3 kg**. B: the water bottle balances two 1-kilogram masses, so it is **2 kg**."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Find the total of the partially covered array.",
          img: "u14-covered-array.png",
          interact: [
            { kind: "array", rows: 1, cols: 8, hint: "The top shows 8 columns and the side shows 4 rows. Build the whole array." },
            { kind: "input", fields: [{ label: "rows", value: 4 }, { label: "columns", value: 8 }, { label: "Total", value: 32 }] }
          ],
          answer: "**32**. There are 4 rows of 8: 4 × 8 = 32.",
          explain: "Counted from the slide: 8 dots along the top and 4 down the left side (the corner dot is in both)."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "Identify the quadrilaterals that do and do not have lines of symmetry.",
          interact: [
            { kind: "mirror", view: [1040, 280], label: "Trapezium A, parallelogram B, rhombus C, square D and rectangle E with dashed lines to test", hint: "Predict first. Then tap a dashed line to fold the shape over it.", shapes: [
              { l: "A trapezium", fill: "#7FD8F7", lx: 90, p: [[30, 90], [150, 40], [150, 220], [30, 170]], lines: [[10, 130, 170, 130], [90, 20, 90, 240]] },
              { l: "B parallelogram", fill: "#8A4BFF", lx: 325, p: [[230, 170], [290, 90], [420, 90], [360, 170]], lines: [[210, 130, 440, 130], [325, 70, 325, 190]] },
              { l: "C rhombus", fill: "#FF8000", lx: 560, p: [[560, 40], [610, 130], [560, 220], [510, 130]], lines: [[560, 25, 560, 235], [495, 130, 625, 130]] },
              { l: "D square", fill: "#D7143C", lx: 760, p: [[760, 40], [850, 130], [760, 220], [670, 130]], lines: [[760, 25, 760, 235], [655, 130, 865, 130], [820, 70, 700, 190], [700, 70, 820, 190]] },
              { l: "E rectangle", fill: "#00C060", lx: 935, p: [[900, 50], [970, 50], [970, 210], [900, 210]], lines: [[935, 30, 935, 230], [885, 130, 985, 130], [900, 50, 970, 210]] }] },
            { kind: "choose", rows: [
              { t: "A trapezium", options: ["Has lines of symmetry", "No lines of symmetry"], a: 0 },
              { t: "B parallelogram", options: ["Has lines of symmetry", "No lines of symmetry"], a: 1 },
              { t: "C rhombus", options: ["Has lines of symmetry", "No lines of symmetry"], a: 0 },
              { t: "D square", options: ["Has lines of symmetry", "No lines of symmetry"], a: 0 },
              { t: "E rectangle", options: ["Has lines of symmetry", "No lines of symmetry"], a: 0 }] }
          ],
          answer: "**Have lines of symmetry:** A trapezium (1), C rhombus (2), D square (4), E rectangle (2). **No lines of symmetry:** B parallelogram.",
          explain: "The trapezium on the slide has two equal slanted sides, so it folds onto itself across the middle. A trapezium without equal sides would have no line of symmetry."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "A Year 2 class collected data on throws students made on a target. Use the tally table to answer the following: a) Which score was most common? b) Which score was least common? c) How many total tosses were recorded?",
          interact: [
            { kind: "tally", counts: true, hint: "These are the class's tallies for each score. Use + and − if you want to model.", rows: [{ l: "Score 0", start: 3 }, { l: "Score 10", start: 2 }, { l: "Score 20", start: 7 }, { l: "Score 50", start: 4 }, { l: "Score 100", start: 4 }] },
            { kind: "input", fields: [{ label: "a) Most common score", value: 20 }, { label: "b) Least common score", value: 10 }, { label: "c) Total tosses", value: 20 }] }
          ],
          answer: "a) **20** (7 tosses). b) **10** (2 tosses). c) **20 tosses**: 3 + 2 + 7 + 4 + 4 = 20.",
          explain: "The slide's table also has a Total column (score × frequency, adding to 760 points). The question asks for tosses, so add the frequencies, not the points."
        }
      ],
      // Review 4
      [
        {
          type: "tf", focus: "Representing numbers using place value B",
          prompt: "This table has been accurately filled in. Communicate your reasoning.",
          table: [["Number rolled", "× 10", "× 100", "× 1000"], ["842", "8420", "84 200", "842 000"]],
          answer: true,
          explain: "842 × 10 = 8420 (one place left), 842 × 100 = 84 200 (two places left) and 842 × 1000 = 842 000 (three places left). Every entry is correct.",
          interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 842, shift: true, houses: false, hint: "This is 842. Press × 10 and check each column of the table." }]
        },
        {
          type: "sr", focus: "Non-spatial measure B",
          prompt: "Record the fruit that has the mass: 1. equal to half of one kilogram, 2. equal to one kilogram.",
          img: "u14-fruit.png",
          interact: [{ kind: "choose", rows: [
            { t: "1. Half of one kilogram", options: ["A pineapple", "B mango"], a: 1 },
            { t: "2. One kilogram", options: ["A pineapple", "B mango"], a: 0 }] }],
          answer: "1. **B, the mango** (500 g is half of 1000 g). 2. **A, the pineapple** (1000 g = 1 kg)."
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Pattern A: 4, 8, 12, 16. Pattern B: 8, 16, 24, 32. What is the relationship between these patterns? Communicate your reasoning.",
          interact: [
            { kind: "numchart", from: 1, to: 40, answer: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40], hint: "Tap the multiples of 4. Which of them are in Pattern B?" },
            { kind: "choose", rows: [{ t: "Each number in Pattern B is", options: ["4 more than in Pattern A", "double the number in Pattern A", "half the number in Pattern A"], a: 1 }] }
          ],
          answer: "Each number in Pattern B is **double** the matching number in Pattern A: 4 → 8, 8 → 16, 12 → 24, 16 → 32. Pattern A counts by fours and Pattern B counts by eights, and 8 is double 4."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "Which of these letters have: a) one line of symmetry, b) 2 or more lines of symmetry, c) no lines of symmetry? O E N",
          interact: [
            { kind: "mirror", view: [640, 290], label: "The letters O, E and N with dashed lines to test", shapes: [
              { l: "O", fill: "#1468FF", lx: 100, ly: 272, p: ring(100, 130, 62, 90, 36, 62, 24), lines: [[100, 22, 100, 238], [22, 130, 178, 130]] },
              { l: "E", fill: "#1468FF", lx: 300, ly: 272, p: [[250, 40], [350, 40], [350, 70], [282, 70], [282, 115], [335, 115], [335, 145], [282, 145], [282, 190], [350, 190], [350, 220], [250, 220]], lines: [[232, 130, 368, 130], [300, 22, 300, 238]] },
              { l: "N", fill: "#1468FF", lx: 520, ly: 272, p: [[450, 40], [480, 40], [560, 170], [560, 40], [590, 40], [590, 220], [560, 220], [480, 90], [480, 220], [450, 220]], lines: [[520, 22, 520, 238], [432, 130, 608, 130]] }] },
            { kind: "choose", rows: [
              { t: "a) One line of symmetry", options: ["O", "E", "N"], a: 1 },
              { t: "b) 2 or more lines", options: ["O", "E", "N"], a: 0 },
              { t: "c) No lines of symmetry", options: ["O", "E", "N"], a: 2 }] }
          ],
          answer: "a) **E** (across the middle). b) **O** (down the middle and across the middle). c) **N** (it looks the same after a half turn, but no fold matches).",
          explain: "In the slide's font the O is a tall oval, so it has exactly 2 lines of symmetry. A perfectly round O would have many more."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Eric collected data in a column graph on how students in his class travel to school. a) Name the x-axis. b) Name the y-axis. c) Choose an appropriate title.",
          interact: [
            { kind: "bargraph", max: 12, step: 2, minor: 1, label: "Column graph with no title or axis names", series: [{ l: "Students", c: "#4472C4" }],
              groups: [{ l: "Car", v: [12], c: "#4472C4" }, { l: "Bike", v: [3], c: "#FF0000" }, { l: "Walk", v: [4], c: "#00B050" }, { l: "Public transport", v: [8], c: "#FFD000" }, { l: "Scooter", v: [3], c: "#7030A0" }] },
            { kind: "choose", rows: [
              { t: "a) x-axis (across the bottom)", options: ["Number of students", "Way of travelling to school", "Car"], a: 1 },
              { t: "b) y-axis (up the side)", options: ["Type of transport", "Scooter", "Number of students"], a: 2 },
              { t: "c) Title", options: ["How students in Eric's class travel to school", "Our favourite colours", "Cars in the car park"], a: 0 }] }
          ],
          answer: "a) x-axis: **Way of travelling to school** (or Type of transport). b) y-axis: **Number of students**. c) A title such as **How students in Eric's class travel to school**.",
          explain: "Other sensible names are fine. The bar heights are read from the slide's graph: car 12, bike 3, walk 4, public transport 8, scooter 3."
        }
      ],
      // Review 5
      [
        {
          type: "mc", focus: "Partitioned fractions A",
          prompt: "Which representation shows a third of a length? Communicate your reasoning.",
          options: [{ img: "u14-third-a.png", alt: "Strip of 3 equal parts, all 3 shaded" }, { img: "u14-third-b.png", alt: "Strip of 3 equal parts, 1 shaded" }, { img: "u14-third-c.png", alt: "Strip of 3 equal parts, 2 shaded" }, { img: "u14-third-d.png", alt: "Strip of 3 equal parts, one and a half shaded" }],
          answer: 1,
          explain: "B is split into 3 equal parts with 1 part shaded, so it shows one third. A shows 3 thirds (the whole), C shows 2 thirds and D shows one and a half parts, which is half the strip.",
          interact: [{ kind: "shade", parts: 3, hint: "Tap to shade one third of the strip." }]
        },
        {
          type: "sr", focus: "Non-spatial measure B",
          prompt: "Record the mass of the clay balls on each digital scale in grams (g) and/or kilograms (kg).",
          img: "u14-clay-scales.png",
          interact: [{ kind: "input", fields: [
            { label: "A.", accept: ["500 g", "500g", "half a kilogram", "1/2 kg"], placeholder: "? g" },
            { label: "B.", accept: ["10 g", "10g"], placeholder: "? g" },
            { label: "C.", accept: ["1000 g", "1000g", "1 kg", "1kg"], placeholder: "? g or kg" }] }],
          answer: "A: **500 g** (half a kilogram). B: **10 g**. C: **1000 g = 1 kg**."
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "If 4 × 5 = 20, what is 8 × 5? Communicate your reasoning.",
          interact: [
            { kind: "array", rows: 4, cols: 5, showTotal: true, hint: "This is 4 rows of 5. Double the rows to make 8 rows of 5." },
            { kind: "input", fields: [{ label: "8 × 5 =", value: 40 }] }
          ],
          answer: "**8 × 5 = 40**. 8 is double 4, so 8 × 5 is double 4 × 5: 20 + 20 = 40."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "Record the area of the rectangle in square centimetres using both numerals and words. Each square is 1 cm by 1 cm.",
          interact: [
            { kind: "areagrid", size: 56, cells: ["11111111", "11111111", "11111111"] },
            { kind: "input", fields: [
              { label: "Numerals", accept: ["24 cm²", "24 cm2", "24 cm 2", "24 square cm", "24 square centimetres"], placeholder: "e.g. 10 cm²" },
              { label: "Words", accept: ["twenty-four square centimetres", "twenty four square centimetres", "twenty-four square centimeters", "twenty four square centimeters"], placeholder: "e.g. ten square centimetres" }] }
          ],
          answer: "**24 cm²**, **twenty-four square centimetres**. There are 3 rows of 8 squares: 3 × 8 = 24.",
          explain: "Counted from the slide's grid: the rectangle is 8 squares long and 3 squares high."
        },
        {
          type: "sr", focus: "Non-spatial measure A",
          prompt: "Match the time to the nearest 5-minute mark on an analog clock: a) 4:19 is about… b) 2:43 is about… c) 7:48 is about… d) 10:28 is about…",
          interact: [
            { kind: "clock", time: "4:19", drag: true },
            { kind: "choose", rows: [
              { t: "a) 4:19 is about", options: ["20 past 4", "10 to 8", "half-past 10", "quarter-to 3"], a: 0 },
              { t: "b) 2:43 is about", options: ["20 past 4", "10 to 8", "half-past 10", "quarter-to 3"], a: 3 },
              { t: "c) 7:48 is about", options: ["20 past 4", "10 to 8", "half-past 10", "quarter-to 3"], a: 1 },
              { t: "d) 10:28 is about", options: ["20 past 4", "10 to 8", "half-past 10", "quarter-to 3"], a: 2 }] }
          ],
          answer: "a) 4:19 → **20 past 4** (4:20). b) 2:43 → **quarter to 3** (2:45). c) 7:48 → **10 to 8** (7:50). d) 10:28 → **half past 10** (10:30)."
        }
      ],
      // Review 6
      [
        {
          type: "tf", focus: "Partitioned fractions A",
          prompt: "The red shading in this representation shows one fifth of the length of the fraction strip. Communicate your reasoning.",
          answer: true,
          explain: "The strip has 5 equal parts and 1 part is shaded, so the shading shows one fifth. On the slide the red box spills a little past the strip's edges; it is redrawn here so it covers exactly the first part.",
          interact: [{ kind: "shade", parts: 5, pre: [0], hint: "This is the strip. Count the equal parts and the shaded parts." }]
        },
        {
          type: "sr", focus: "Geometric measure A",
          prompt: "Order the following lengths from shortest to longest: 1 m 45 cm, 2 m 11 cm, 1 m 54 cm.",
          interact: [{ kind: "order", items: ["1 m 45 cm", "2 m 11 cm", "1 m 54 cm"], answer: [0, 2, 1] }],
          answer: "**1 m 45 cm, 1 m 54 cm, 2 m 11 cm**. Compare the metres first (1 m is less than 2 m), then the centimetres (45 cm is less than 54 cm)."
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Write number sentences to match the partitioned array.",
          img: "u14-part-array.png",
          interact: [
            { kind: "input", fields: [{ label: "Top part: 5 rows of 5 =", value: 25 }, { label: "Bottom part: 2 rows of 5 =", value: 10 }, { label: "Whole array: 7 rows of 5 =", value: 35 }] },
            { kind: "sentence", fields: [{ label: "Number sentence", placeholder: "e.g. 3 × 5 + 1 × 5 = 20", re: "5\\s*x\\s*5.*2\\s*x\\s*5|2\\s*x\\s*5.*5\\s*x\\s*5|5\\s*x\\s*7|7\\s*x\\s*5", msg: "Use the rows and columns of the array, like 5 × 5 + 2 × 5.", sample: "5 x 5 + 2 x 5 = 35" }] }
          ],
          answer: "**5 × 5 = 25** and **2 × 5 = 10**, so **5 × 5 + 2 × 5 = 35**. The whole array is 7 × 5 = 35.",
          explain: "Counted from the slide: 5 columns, with 5 rows above the line and 2 rows below it."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "Josh wants to measure the area of the classroom floor using square centimetres. a) Explain why square centimetres are not a suitable unit. b) Which unit would be more appropriate?",
          interact: [{ kind: "choose", rows: [
            { t: "a) Square centimetres are not suitable because", options: ["they are too big", "they are so small that the count would be huge", "they only measure length"], a: 1 },
            { t: "b) A better unit is", options: ["square millimetres", "square metres", "centimetres"], a: 1 }] }],
          answer: "a) A square centimetre is about the size of a fingernail, so covering a whole classroom floor would take **hundreds of thousands** of them. b) **Square metres (m²)** suit a large area like a floor."
        },
        {
          type: "sr", focus: "Non-spatial measure A",
          prompt: "Record the analog clock times to the minute.",
          interact: [
            { kind: "clock", time: "1:17" },
            { kind: "clock", time: "11:48" },
            { kind: "clock", time: "5:34" },
            { kind: "input", fields: [{ label: "A.", accept: ["1:17", "17 past 1", "seventeen past one"], placeholder: "h:mm" }, { label: "B.", accept: ["11:48", "12 to 12", "twelve to twelve"], placeholder: "h:mm" }, { label: "C.", accept: ["5:34", "26 to 6", "twenty-six to six"], placeholder: "h:mm" }] }
          ],
          answer: "A: **1:17** (17 past 1). B: **11:48** (12 to 12). C: **5:34** (26 to 6).",
          explain: "Read from the slide's clocks at high resolution: A's minute hand is 2 marks past the 3, B's is 3 marks before the 10, and C's is 1 mark before the 7."
        }
      ],
      // Review 7
      [
        {
          type: "mc", focus: "Partitioned fractions A",
          prompt: "Which representation shows a fifth of a length? Communicate your reasoning.",
          options: [{ img: "u14-fifth-a.png", alt: "Strip of 5 equal parts, half of one part shaded" }, { img: "u14-fifth-b.png", alt: "Strip of 5 equal parts, 2 shaded" }, { img: "u14-fifth-c.png", alt: "Strip of 5 equal parts, all 5 shaded" }, { img: "u14-fifth-d.png", alt: "Strip of 5 equal parts, 1 shaded" }],
          answer: 3,
          explain: "D is split into 5 equal parts with 1 part shaded: one fifth. A shades only half of one part (one tenth), B shows 2 fifths and C shows 5 fifths (the whole).",
          interact: [{ kind: "shade", parts: 5, hint: "Tap to shade one fifth of the strip." }]
        },
        {
          type: "sr", focus: "Geometric measure B",
          prompt: "Shane used a tape measure to measure the length of his vegetable garden and the length of his bedroom. Record the measurements taken, indicated by the red arrow.",
          img: "u14-tapes.png",
          interact: [{ kind: "input", fields: [
            { label: "A. vegetable garden", accept: ["2 m 83 cm", "2m83cm", "283 cm", "2.83 m"], placeholder: "_ m __ cm" },
            { label: "B. bedroom floor", accept: ["3 m 59 cm", "3m59cm", "359 cm", "3.59 m"], placeholder: "_ m __ cm" }] }],
          answer: "A: **2 m 83 cm** (the arrow is 3 cm past the 280 cm mark). B: **3 m 59 cm** (the arrow is 1 cm before the 360 cm mark).",
          explain: "Read from the slide at high resolution. On this tape each small number sits just before its centimetre line, so the arrow in A is on the 283 cm line and the arrow in B is on the 359 cm line."
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Determine the missing number: 7 × 4 = 2 × __",
          interact: [{ kind: "scale", left: "7 × 4", right: "2 × ?", answer: 14 }],
          answer: "**14**. 7 × 4 = 28, and 2 × 14 = 28. Another way: 4 is 2 × 2, so 7 × 4 = 7 × 2 × 2 = 2 × 14."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "Calculate the area of the rectangle. Record your answer using numerals and words.",
          visual: { kind: "rect", w: 6, h: 4, unit: "metres" },
          interact: [
            { kind: "areagrid", size: 56, cells: ["111111", "111111", "111111", "111111"] },
            { kind: "input", fields: [
              { label: "Numerals", accept: ["24 m²", "24 m2", "24 m 2", "24 square m", "24 square metres"], placeholder: "e.g. 10 m²" },
              { label: "Words", accept: ["twenty-four square metres", "twenty four square metres", "twenty-four square meters", "twenty four square meters"], placeholder: "e.g. ten square metres" }] }
          ],
          answer: "**24 m²**, **twenty-four square metres**. 4 rows of 6 square metres: 4 × 6 = 24.",
          explain: "The grid shows the rectangle as 4 rows of 6 squares, each 1 m by 1 m."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A",
          prompt: "Record the capacities using the abbreviation for litres (L).",
          img: "u14-jugs.png",
          interact: [{ kind: "input", fields: [{ label: "A.", accept: ["3 L", "3L", "3 litres"], placeholder: "? L" }, { label: "B.", accept: ["4 L", "4L", "4 litres"], placeholder: "? L" }, { label: "C.", accept: ["2 L", "2L", "2 litres"], placeholder: "? L" }] }],
          answer: "A: **3 L**. B: **4 L**. C: **2 L**. Each mark on the jug is 1 litre, from 1 litre at the bottom mark to 5 litres at the top.",
          explain: "Strictly, the jugs show the amount of water in each jug, not how much the jug can hold. The water levels are read from the slide's picture."
        }
      ],
      // Review 8
      [
        {
          type: "tf", focus: "Partitioned fractions A",
          prompt: "The blue shading in this representation shows a fifth of the length of the fraction strip. Communicate your reasoning.",
          answer: false,
          explain: "The strip has only 3 equal parts and 1 is shaded, so the shading shows one third, not one fifth. On the slide the blue spills a little into the second part; it is redrawn here to cover exactly one part.",
          interact: [{ kind: "shade", parts: 3, pre: [0], hint: "This is the strip. Count the equal parts." }]
        },
        {
          type: "sr", focus: "Geometric measure A",
          prompt: "Record the lengths of the clay snakes using the abbreviation for millimetres (mm).",
          img: "u14-snakes.png",
          interact: [{ kind: "input", fields: [{ label: "Snake 1", min: 175, max: 177, suffix: "mm" }, { label: "Snake 2", min: 279, max: 281, suffix: "mm" }] }],
          answer: "Snake 1: about **176 mm** (17 cm and 6 mm). Snake 2: about **280 mm** (28 cm).",
          explain: "Measured from the slide picture at high resolution, so answers within 1 mm are accepted. Both snakes start at 0. 1 cm = 10 mm, so 17 cm 6 mm = 176 mm."
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Record a number sentence to solve: Mandy bakes some cookies. There are 5 cookies on each tray. She fills 7 trays. How many cookies did Mandy bake?",
          cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Multiply", s: "7 trays of 5 cookies: 7 × 5 = 35." }, { t: "Skip count", s: "Count by fives 7 times: 5, 10, 15, 20, 25, 30, 35." }] },
          interact: [
            { kind: "array", rows: 1, cols: 5, showTotal: true, hint: "Each row is a tray of 5 cookies. Add a row for each tray." },
            { kind: "sentence", fields: [{ label: "Number sentence", placeholder: "e.g. 3 × 5 = 15", re: "^\\s*(7\\s*x\\s*5|5\\s*x\\s*7)\\s*=\\s*35\\s*$|^\\s*35\\s*=\\s*(7\\s*x\\s*5|5\\s*x\\s*7)\\s*$", msg: "Use the number of trays and the cookies on each tray.", sample: "7 x 5 = 35" }] }
          ],
          answer: "**7 × 5 = 35**. Mandy baked 35 cookies."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "A square metre is cut into 2 pieces and rearranged to make a new shape that is not a square. The pieces are placed together with no gaps or overlaps. Does the new shape still have an area of one square metre? Communicate your reasoning.",
          interact: [{ kind: "choose", rows: [
            { t: "Is the area still 1 square metre?", options: ["Yes", "No"], a: 0 },
            { t: "Why?", options: ["The shape changed, so the area changed", "No surface was added or taken away", "It is no longer a square, so it has no area"], a: 1 }] }],
          answer: "**Yes**. The same two pieces cover the same amount of surface. With no gaps or overlaps, nothing is added or lost, so the area is still **1 m²** even though the shape has changed."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A",
          prompt: "These containers have a capacity of one litre. Explain how each container can hold one litre, while being a variety of shapes.",
          img: "u14-containers.png",
          interact: [{ kind: "select", hint: "Tap every statement that is true.", items: [
            ["A tall, thin container can hold the same amount as a short, wide one", true],
            ["The tallest container must hold the most", false],
            ["Each container takes up 1 litre of space inside, whatever its shape", true],
            ["Pouring 1 L from one container into another fills it", true]] }],
          answer: "Capacity is how much a container holds, not how tall or wide it is. A **tall, thin** container and a **short, wide** container can hold the **same amount**. Pour 1 L from the milk carton into each one to check: each is filled."
        }
      ]
    ]
  });
})();
