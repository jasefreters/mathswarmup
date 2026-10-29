/*
  Stage 3 Year A, Unit 19 — Review of learning (Term 4, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 4, ls: 4, unit: 19,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 19 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "Which of the following is **not** an accurate representation of 45 982 432?",
        options: ["40 000 000 + 5 000 000 + 982 000 + 432", "45 000 000 + 900 000 + 82 000 + 400 + 32", "45 000 000 + 900 000 + 80 000 + 200 + 432", "45 000 000 + 900 000 + 82 000 + 430 + 2"],
        answer: 2,
        explain: "C adds to 45 980 632, not 45 982 432: 80 000 + 200 + 432 = 80 632, but we need 82 432. A, B and D all add to 45 982 432.",
        interact: [{ kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 45982432, hint: "Read each place. Which option is missing 2 thousands?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Record a short **definition** for each of the following: equilateral triangle, isosceles triangle, scalene triangle.",
        interact: [
          { kind: "corners", view: [560, 200], deg: true, r: 24, q: 30, shapes: [
            { p: [[90, 30], [160, 151], [20, 151]], fill: "#1A6BFF", l: "A", ly: 185 },
            { p: [[280, 20], [325, 170], [235, 170]], fill: "#00A35C", l: "B", ly: 190 },
            { p: [[400, 60], [540, 170], [380, 170]], fill: "#D7143C", l: "C", ly: 190 }], hint: "Tap a corner to test it, tap again to measure it." },
          { kind: "choose", rows: [
            { t: "Equilateral triangle", options: ["3 equal sides and 3 equal angles (60°)", "Exactly 2 equal sides and 2 equal angles", "No equal sides and no equal angles"], a: 0 },
            { t: "Isosceles triangle", options: ["3 equal sides and 3 equal angles (60°)", "Exactly 2 equal sides and 2 equal angles", "No equal sides and no equal angles"], a: 1 },
            { t: "Scalene triangle", options: ["3 equal sides and 3 equal angles (60°)", "Exactly 2 equal sides and 2 equal angles", "No equal sides and no equal angles"], a: 2 }] }
        ],
        answer: "**Equilateral**: 3 equal sides and 3 equal angles (each 60°). **Isosceles**: 2 equal sides and 2 equal angles. **Scalene**: no equal sides and no equal angles. (Triangle A is equilateral, B is isosceles, C is scalene.)",
        explain: "The slide has no pictures; the three example triangles are added so the class can test the angles."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Amelia flipped a coin and rolled a 6-sided dice. She listed some of the possible outcomes: Heads, 1 · Tails, 1 · Heads, 2. Complete Amelia's list to show all possible outcomes. How many outcomes are there?",
        interact: [
          { kind: "combos", pick: 2, total: 12, items: [["Heads", "#E9B500", 1], ["Tails", "#8A8A8A", 1], ["1", "#2F6FE4", 1], ["2", "#2F6FE4", 1], ["3", "#2F6FE4", 1], ["4", "#2F6FE4", 1], ["5", "#2F6FE4", 1], ["6", "#2F6FE4", 1]] },
          { kind: "input", fields: [{ label: "Possible outcomes", value: 12 }] }
        ],
        answer: "**12 outcomes**: Heads 1, Heads 2, Heads 3, Heads 4, Heads 5, Heads 6, Tails 1, Tails 2, Tails 3, Tails 4, Tails 5, Tails 6. Each of the 2 coin sides goes with each of the 6 numbers: 2 × 6 = 12.",
        explain: "Each combination is one coin side and one number. Save it in order (Heads with 1 to 6, then Tails with 1 to 6) so none are missed."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Estimate** the product of 589 × 6. Justify your estimate by communicating your reasoning.",
        interact: [
          { kind: "marker", min: 500, max: 600, divs: 10, majorEvery: 5, labels: [500, 550, 600], label: "589", hint: "Slide the pin to 589. Which friendly number is it close to?" },
          { kind: "input", fields: [{ label: "Estimate", min: 3500, max: 3600 }] },
          { kind: "select", hint: "Tap every statement that supports a good estimate.", items: [
            ["589 is close to 600", true],
            ["600 × 6 = 3600", true],
            ["The real answer is a little less than 3600, because 589 is less than 600", true],
            ["589 is close to 500, so about 3000", false],
            ["589 × 6 is about 600 + 6 = 606", false]] }
        ],
        answer: "About **3600**. 589 rounds to 600, and 600 × 6 = 3600. The exact product (3534) is a little less, because 589 is 11 less than 600.",
        explain: "Any estimate from 3500 to 3600 is accepted (for example 590 × 6 = 3540)."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Identify and record the **coordinates** for point A, point B and point C.",
        interact: [
          { kind: "plane", range: [0, 5, 0, 5], points: [{ x: 1, y: 3, l: "A" }, { x: 2, y: 1, l: "B" }, { x: 4, y: 4, l: "C" }] },
          { kind: "input", fields: [{ label: "A", accept: ["(1, 3)"], placeholder: "(x, y)" }, { label: "B", accept: ["(2, 1)"], placeholder: "(x, y)" }, { label: "C", accept: ["(4, 4)"], placeholder: "(x, y)" }] }
        ],
        answer: "A **(1, 3)** · B **(2, 1)** · C **(4, 4)**. Go across the x-axis first, then up the y-axis."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "935 216 can be regrouped as 900 000 + 30 000 + 200 + 10 + 6.",
        answer: false,
        explain: "900 000 + 30 000 + 200 + 10 + 6 = 930 216. The 5 thousands are missing, so it needs + 5000 to make 935 216.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 935216, hint: "Read each place. Is every digit in the sum?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the **side** and **angle** properties of this triangle.",
        interact: [
          { kind: "corners", view: [320, 240], deg: true, r: 26, q: 32, shapes: [{ p: [[160, 20], [225, 216], [95, 216]], fill: "#002664" }], hint: "Tap a corner to test it, tap again to measure it." },
          { kind: "select", hint: "Tap every property of this triangle.", items: [
            ["2 equal sides", true],
            ["2 equal angles", true],
            ["All 3 angles are acute", true],
            ["It is an isosceles triangle", true],
            ["3 equal sides", false],
            ["It has a right angle", false],
            ["It has an obtuse angle", false]] }
        ],
        answer: "An **isosceles triangle**: the 2 long sides are equal and the 2 base angles are equal (about 72° each). All 3 angles are **acute**; the top angle is about 36°.",
        explain: "Redrawn with the slide's proportions. The angles are approximate, measured from the slide picture."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A 10-sided dice has the numbers 1 to 10. What is the **probability** of rolling two 7's in a row? What is the probability of rolling any number except a 10?",
        interact: [
          { kind: "shade", parts: 10, hint: "Each part is one face. Shade every face that is not 10." },
          { kind: "input", fields: [{ label: "Two 7's in a row", value: 0.01, placeholder: "a/b" }, { label: "Any number except 10", value: 0.9, placeholder: "a/b" }] }
        ],
        answer: "Two 7's in a row: **[1/100]**. A 7 is [1/10] of rolls, and then another 7 is [1/10] of those: [1/10] × [1/10] = [1/100]. Any number except 10: **[9/10]** (9 of the 10 faces).",
        explain: "Two rolls in a row goes beyond Year 5. Model it as 100 equally likely pairs (1 1, 1 2 … 10 10): only one of them is 7 7."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Liam is making a poster that has an area of 80 square centimetres. What could be the length and width of his poster?",
        interact: [{ kind: "pair", labels: ["Length", "Width"], unit: "cm", rule: "area", target: 80 }],
        cubes: { ops: ["×"], also: ["÷"], solve: [{ t: "Factor pairs", s: "Find two numbers that multiply to 80: 10 × 8, 20 × 4, 16 × 5, 40 × 2, 80 × 1." }, { t: "Divide", s: "Choose a width, then 80 ÷ width = length. Width 8 cm: 80 ÷ 8 = 10 cm." }] },
        answer: "Any pair that multiplies to 80, for example **10 cm × 8 cm**, 16 cm × 5 cm, 20 cm × 4 cm or 40 cm × 2 cm. 10 × 8 is the most poster-like shape."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Calculate the **perimeter** of these shapes.",
        interact: [
          { kind: "sides", view: [320, 200], fill: "#FFDF5D", label: "Trapezium",
            poly: [[110, 40], [210, 40], [230, 158], [90, 158]],
            dims: [{ from: [110, 24], to: [210, 24] }, { from: [90, 174], to: [230, 174] }, { from: [74, 155], to: [94, 37] }, { from: [246, 155], to: [226, 37] }],
            labels: [{ x: 160, y: 16, t: "5 cm" }, { x: 160, y: 196, t: "7 cm" }, { x: 76, y: 102, t: "6 cm", anchor: "end" }, { x: 244, y: 102, t: "6 cm", anchor: "start" }] },
          { kind: "sides", view: [330, 260], fill: "#9FB4E8", label: "L-shape",
            poly: [[80, 40], [155, 40], [155, 140], [255, 140], [255, 215], [80, 215]],
            dims: [{ from: [80, 26], to: [155, 26] }, { from: [169, 40], to: [169, 140] }, { from: [155, 126], to: [255, 126] }, { from: [269, 140], to: [269, 215] }, { from: [80, 229], to: [255, 229] }, { from: [66, 40], to: [66, 215] }],
            labels: [{ x: 117, y: 18, t: "3 cm" }, { x: 177, y: 95, t: "4 cm", anchor: "start" }, { x: 205, y: 118, t: "4 cm" }, { x: 277, y: 182, t: "3 cm", anchor: "start" }, { x: 167, y: 250, t: "7 cm" }, { x: 58, y: 132, t: "7 cm", anchor: "end" }] },
          { kind: "input", fields: [{ label: "Trapezium", value: 24, suffix: "cm" }, { label: "L-shape", value: 28, suffix: "cm" }] }
        ],
        answer: "Trapezium: 5 + 6 + 7 + 6 = **24 cm**. L-shape: 3 + 4 + 4 + 3 + 7 + 7 = **28 cm**.",
        explain: "The slide labels the L-shape's bottom and left sides 5 cm, but they must be 7 cm (3 + 4 across, 4 + 3 down), so they are relabelled 7 cm."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "Which of the following shows an **accurate** regrouping of 67 304 256?",
        options: ["60 000 000 + 7 000 000 + 300 000 + 40 000 + 2000 + 56", "67 000 000 + 30 000 + 4000 + 200 + 50 + 6", "60 000 000 + 7 000 000 + 300 000 + 400 + 200 + 50 + 6", "60 000 000 + 7 000 000 + 300 000 + 4000 + 200 + 50 + 6"],
        answer: 3,
        explain: "67 304 256 has 0 ten thousands and 4 thousands. D: 67 000 000 + 300 000 + 4000 + 256 ✓. A makes 67 342 056, B makes 67 034 256 and C makes 67 300 656.",
        interact: [{ kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 67304256, hint: "Read each place. Which option matches every digit?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Complete the table: record the properties of sides, angles and line symmetry for a rectangle, a trapezium and an equilateral triangle. Is each shape regular or irregular?",
        interact: [
          { kind: "choose", rows: [
            { t: "Rectangle: sides", options: ["2 pairs of equal, parallel sides", "Exactly 1 pair of parallel sides", "3 equal sides"], a: 0 },
            { t: "Rectangle: angles", options: ["4 right angles", "Angles not all equal", "3 angles of 60°"], a: 0 },
            { t: "Rectangle: lines of symmetry", options: ["0", "1", "2", "3"], a: 2 },
            { t: "Rectangle", options: ["Regular", "Irregular"], a: 1 },
            { t: "Trapezium: sides", options: ["2 pairs of equal, parallel sides", "Exactly 1 pair of parallel sides", "3 equal sides"], a: 1 },
            { t: "Trapezium: angles", options: ["4 right angles", "Angles not all equal", "3 angles of 60°"], a: 1 },
            { t: "Trapezium: lines of symmetry", options: ["0", "1", "2", "3"], a: [0, 1] },
            { t: "Trapezium", options: ["Regular", "Irregular"], a: 1 },
            { t: "Equilateral triangle: sides", options: ["2 pairs of equal, parallel sides", "Exactly 1 pair of parallel sides", "3 equal sides"], a: 2 },
            { t: "Equilateral triangle: angles", options: ["4 right angles", "Angles not all equal", "3 angles of 60°"], a: 2 },
            { t: "Equilateral triangle: lines of symmetry", options: ["0", "1", "2", "3"], a: 3 },
            { t: "Equilateral triangle", options: ["Regular", "Irregular"], a: 0 }] }
        ],
        answer: "**Rectangle**: 2 pairs of equal, parallel sides · 4 right angles · 2 lines of symmetry · irregular (the sides are not all equal). **Trapezium**: exactly 1 pair of parallel sides · angles not all equal · 0 lines of symmetry (1 if it is isosceles) · irregular. **Equilateral triangle**: 3 equal sides · 3 angles of 60° · 3 lines of symmetry · regular.",
        explain: "A trapezium's symmetry depends on the trapezium: an isosceles trapezium has 1 line, most others have none, so 0 and 1 are both accepted."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Sam has 4 different coloured t-shirts in a bag: a green, a red, a blue and a yellow. Which fraction describes the probability of him randomly selecting the blue shirt? Explain your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 4, tol: 0.06, items: [["Blue", 0.25]] },
          { kind: "input", fields: [{ label: "Probability of blue", value: 0.25, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["÷"], solve: [{ t: "Count the outcomes", s: "There are 4 shirts and only 1 is blue, so 1 chance out of 4: [1/4]." }, { t: "Use the number line", s: "Split 0 to 1 into 4 equal parts, one for each shirt. Blue is 1 part: [1/4]." }] },
        answer: "**[1/4]**. There are 4 shirts, each equally likely, and 1 of them is blue."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Record as many ways as possible to calculate the **area** of this shape. Each square is 1 square unit.",
        interact: [
          { kind: "areagrid", size: 52, cells: ["111000", "111000", "111111", "111111", "111111"] },
          { kind: "select", hint: "Tap every calculation that gives the area.", items: [
            ["3 × 2 + 6 × 3 (top part + bottom part)", true],
            ["3 × 5 + 3 × 3 (left part + right part)", true],
            ["6 × 5 − 3 × 2 (big rectangle take away the gap)", true],
            ["6 × 5", false],
            ["3 × 2 + 6 × 5", false]] },
          { kind: "input", fields: [{ label: "Area", value: 24, suffix: "square units" }] }
        ],
        answer: "**24 square units**. Top and bottom: 3 × 2 + 6 × 3 = 6 + 18 = 24. Left and right: 3 × 5 + 3 × 3 = 15 + 9 = 24. Take away: 6 × 5 − 3 × 2 = 30 − 6 = 24. Or count every square.",
        explain: "The slide gives no units, so each grid square is taken as 1 square unit."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Record a short **definition** for each of the following: probability, unlikely, equally likely.",
        interact: [
          { kind: "marker", min: 0, max: 1, divs: 4, majorEvery: 2, labels: [0, 0.5, 1], label: "Unlikely", hint: "0 is impossible, 1 is certain. Where would unlikely sit?" },
          { kind: "choose", rows: [
            { t: "Probability", options: ["How likely it is that an event will happen", "Less than an even chance, but it could happen", "Each outcome has the same chance"], a: 0 },
            { t: "Unlikely", options: ["How likely it is that an event will happen", "Less than an even chance, but it could happen", "Each outcome has the same chance"], a: 1 },
            { t: "Equally likely", options: ["How likely it is that an event will happen", "Less than an even chance, but it could happen", "Each outcome has the same chance"], a: 2 }] }
        ],
        answer: "**Probability**: how likely an event is, from 0 (impossible) to 1 (certain). **Unlikely**: less than an even chance, but possible (between 0 and [1/2]). **Equally likely**: outcomes that have the same chance, like heads and tails."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "69 357 821 can be partitioned in **non-standard form** as 49 000 000 + 20 000 000 + 300 000 + 570 + 821.",
        answer: false,
        explain: "49 000 000 + 20 000 000 = 69 000 000 ✓, but 300 000 + 570 + 821 = 301 391, so the sum is 69 301 391. It needs 357 000 + 821 (for example 300 000 + 57 000 + 821).",
        interact: [{ kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 69357821, hint: "Is 570 the same as 57 thousands?" }]
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the **name** and **symbol** of the unit of measure used to measure the size of an angle.",
        interact: [
          { kind: "angle", degrees: true, names: true, start: 60 },
          { kind: "choose", rows: [
            { t: "Unit", options: ["Centimetres", "Degrees", "Square units"], a: 1 },
            { t: "Symbol", options: ["°", "cm", "%"], a: 0 }] }
        ],
        answer: "**Degrees**, with the symbol **°** (for example 90°). A full turn is 360°."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A bag contains 3 red marbles, 2 blue marbles and 1 green marble. One marble is picked at random. What is the probability of picking a blue marble? Represent your answer as a fraction.",
        interact: [
          { kind: "shade", parts: 6, pre: [3, 4], hint: "6 marbles: the shaded parts are the 2 blue ones." },
          { kind: "input", fields: [{ label: "Probability of blue", value: 2 / 6, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["+"], also: ["÷"], solve: [{ t: "Count all the marbles", s: "3 + 2 + 1 = 6 marbles. 2 are blue, so [2/6]." }, { t: "Simplify", s: "[2/6] = [1/3], because 2 ÷ 2 = 1 and 6 ÷ 2 = 3." }] },
        answer: "**[2/6]** (= [1/3]). There are 6 marbles altogether and 2 of them are blue."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "The area of the floor of a rectangular tent is 72 m² and the length is 9 metres. What is the width of the tent?",
        interact: [
          { kind: "bar", hint: "The floor is 9 strips, one for each metre of length. Tap a ? to see how many square metres are in one strip.", whole: { v: 72, l: "72 m²", n: "whole floor" }, parts: [{ v: 8, l: "8", hide: true }, { v: 8, l: "8", hide: true }, { v: 8, l: "8", hide: true }, { v: 8, l: "8", hide: true }, { v: 8, l: "8", hide: true }, { v: 8, l: "8", hide: true }, { v: 8, l: "8", hide: true }, { v: 8, l: "8", hide: true }, { v: 8, l: "8", hide: true }] },
          { kind: "input", fields: [{ label: "Width", value: 8, suffix: "m" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "Area = length × width, so width = 72 ÷ 9 = 8 m." }, { t: "Think multiplication", s: "9 × ? = 72. 9 × 8 = 72, so the width is 8 m." }] },
        answer: "**8 metres**. 72 ÷ 9 = 8. Check: 9 m × 8 m = 72 m²."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Record the following **masses** in **decimal notation**: 2 kg 250 g, 32 kg 705 g, 16 kg 400 g.",
        interact: [
          { kind: "pv", cols: ["T", "O", "t", "h", "th"], start: 0, hint: "Kilograms: 1 g is one thousandth of a kilogram, so 250 g is 0.250 kg." },
          { kind: "input", fields: [{ label: "2 kg 250 g", value: 2.25, suffix: "kg" }, { label: "32 kg 705 g", value: 32.705, suffix: "kg" }, { label: "16 kg 400 g", value: 16.4, suffix: "kg" }] }
        ],
        answer: "**2.25 kg** (2.250) · **32.705 kg** · **16.4 kg** (16.400). 1000 g = 1 kg, so the grams fill the tenths, hundredths and thousandths places."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Represents quantity fractions A",
        prompt: "[4/8] + [2/8] is the **same as**…",
        options: ["[6/16]", "[1/4]", "[6/8]", "[2/8]"],
        answer: 2,
        explain: "4 eighths + 2 eighths = 6 eighths = [6/8]. The denominator stays the same: the parts are still eighths. On the slide, A was [3/4], which equals [6/8], so two answers were correct; A now shows [6/16], the common mistake of adding the denominators.",
        interact: [{ kind: "shade", parts: 8, pre: [0, 1, 2, 3], hint: "4 eighths are shaded. Shade 2 more eighths." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the **angle** shown on the protractor. Then calculate the angle on the other side of the arm, along the straight line.",
        img: "u19-protractor1.png",
        interact: [
          { kind: "angle", degrees: true, names: true, start: 90 },
          { kind: "input", fields: [{ label: "Angle shown", value: 35, suffix: "°" }, { label: "Other side of the arm", value: 145, suffix: "°" }] }
        ],
        answer: "The angle is **35°**: one arm sits on 0 on the right, so read the inner scale (it is acute, so not 145°). The other side makes a straight angle with it: 180° − 35° = **145°**.",
        explain: "The slide asks for the internal and external angle. Read here as the angle shown (35°) and the angle that completes the straight line (145°); the arm sits halfway between 30 and 40."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Use the **scale** to answer the following questions. What year did Lenny start Kindergarten? How many years after starting Kindergarten did Lenny join the soccer team?",
        img: "u19-lenny.png",
        interact: [
          { kind: "jumps", start: 2022, steps: [1, 2], min: 2016, max: 2026, hint: "Start at Kindergarten (2022). Jump on to the soccer team." },
          { kind: "input", fields: [{ label: "Started Kindergarten", value: 2022 }, { label: "Years until the soccer team", value: 3 }] }
        ],
        answer: "Lenny started Kindergarten in **2022**. He joined the soccer team in 2025, **3 years** later. Each tick is 2 years (2016, 2018, 2020, 2022, 2024, 2026).",
        explain: "Kindergarten sits on the 2022 tick. The soccer team sits halfway between 2024 and 2026, so 2025."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Nellie built two different prisms with the same volume of 36 cm³. The first prism consisted of 4 cubes in the base layer × 9 layers. Complete the sentence to determine what the second prism could have looked like: ___ cubes in the base layer × ___ layers.",
        img: "u19-tallprism.png",
        interact: [{ kind: "pair", labels: ["Cubes in the base layer", "Layers"], unit: "", rule: "product", target: 36, exclude: [[4, 9]] }],
        cubes: { ops: ["×"], also: ["÷"], solve: [{ t: "Factor pairs of 36", s: "36 = 1 × 36 = 2 × 18 = 3 × 12 = 6 × 6. Any pair except 4 and 9 works, for example 12 cubes × 3 layers." }, { t: "Rearrange the layers", s: "Stack the 9 layers of 4 three at a time: 3 layers of 12 cubes. 12 × 3 = 36 cm³." }] },
        answer: "For example **12 cubes in the base layer × 3 layers** (12 × 3 = 36). Also 6 × 6, 18 × 2, 2 × 18, 3 × 12, 36 × 1 or 9 × 4.",
        explain: "Any base and number of layers that multiply to 36 is accepted, except 4 × 9 (the first prism)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "What is the **volume** of this prism? Each cube is 1 cm³.",
        img: "u19-prism.png",
        interact: [
          { kind: "areagrid", size: 56, cells: ["1111", "1111", "1111"] },
          { kind: "input", fields: [{ label: "Cubes in one layer", value: 12 }, { label: "Layers", value: 3 }, { label: "Volume", value: 36, suffix: "cm³" }] }
        ],
        answer: "The top layer is 4 × 3 = 12 cubes, and there are 3 layers: 12 × 3 = **36 cm³**.",
        explain: "Counted from the picture: 4 cubes along the front, 3 cubes deep and 3 cubes high. The slide gives no unit, so each cube is taken as 1 cm³ (the same prism appears in the previous question with 36 cm³)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents quantity fractions A",
        prompt: "Two bakers each have a bag of flour. One bag is [1/6] full and the other is [5/6] full. Together they have 1 whole bag of flour. Communicate your reasoning.",
        answer: true,
        explain: "[1/6] + [5/6] = [6/6] = 1 whole bag. Pour the [1/6] into the other bag and it fills it exactly.",
        interact: [
          { kind: "shade", parts: 6, pre: [0], hint: "Bag 1: [1/6] full." },
          { kind: "shade", parts: 6, pre: [0, 1, 2, 3, 4], hint: "Bag 2: [5/6] full." }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Add the sixths", s: "1 sixth + 5 sixths = 6 sixths = [6/6] = 1 whole." }, { t: "Fill a bag", s: "Bag 2 needs [1/6] more to be full. Bag 1 has exactly [1/6], so together they make 1 full bag." }] }
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Use a known angle to **estimate** and record the size of this angle.",
        interact: [
          { kind: "angle", label: "This is the angle from the slide. Drag the arm up to 90° (a right angle), then halfway back to 45°, and compare.", start: 32 },
          { kind: "choose", rows: [{ t: "Estimate", options: ["About 30°", "About 60°", "About 90°", "About 120°"], a: 0 }] }
        ],
        answer: "About **30°**. It is much smaller than a right angle (90°) and less than half of one (45°): about one-third of a right angle.",
        explain: "Measured from the slide, the angle is about 32°. The angle maker starts at the slide's angle so the class can compare it with a right angle and half a right angle."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Fletcher wants to collect data about how students in his class travel to school. Pose 2 **survey questions** he could use to obtain **categorical data**.",
        interact: [{ kind: "select", hint: "Tap every question that would collect categorical data about how students travel to school.", items: [
          ["How do you usually travel to school: walk, bike, car, bus or other?", true],
          ["What type of transport did you take to school today?", true],
          ["How many minutes does it take you to get to school?", false],
          ["How many kilometres do you live from school?", false],
          ["What is your favourite colour?", false]] }],
        answer: "For example: **How do you usually travel to school?** (walk, bike, scooter, car, bus) and **What transport did you use today?** The answers are categories, not numbers.",
        explain: "Questions about minutes or kilometres give numerical data, so they don't fit."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "The base layer of a prism has 10 cubes (5 × 2). Prism 1 has 2 layers and a volume of 20 cm³. Determine the **volume** of prism 2 (4 layers) and prism 3 (9 layers).",
        interact: [
          { kind: "areagrid", size: 56, cells: ["11111", "11111"] },
          { kind: "cells", cols: 4, w: 110, grid: [
            ["#", "#Prism 1", "#Prism 2", "#Prism 3"],
            ["#Layers", "2", "4", "9"],
            ["#Volume (cm³)", "20", { v: 40 }, { v: 90 }]], msg: "One layer is 10 cubes. Multiply by the number of layers." }
        ],
        answer: "One layer is 5 × 2 = 10 cm³. Prism 2: 10 × 4 = **40 cm³**. Prism 3: 10 × 9 = **90 cm³**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Record the dimensions of two different **rectangles** each with an **area** of 32 cm².",
        interact: [
          { kind: "pair", labels: ["Rectangle 1: length", "width"], unit: "cm", rule: "area", target: 32 },
          { kind: "pair", labels: ["Rectangle 2: length", "width"], unit: "cm", rule: "area", target: 32 }
        ],
        answer: "Any two of **8 cm × 4 cm**, **16 cm × 2 cm** and **32 cm × 1 cm** (or with decimals, like 6.4 cm × 5 cm).",
        explain: "Each box checks that its rectangle has an area of 32 cm²; the class checks that the two rectangles are different."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Represents quantity fractions A",
        prompt: "6 − [1/6] =",
        options: ["6[5/6]", "5[3/6]", "5[5/6]", "5[1/6]"],
        answer: 2,
        explain: "Take one whole of the 6 and split it into sixths: 5 + [6/6]. Take away [1/6]: 5 + [5/6] = 5[5/6]. The slide had no correct option (A and C were both 6[5/6]), so C now shows 5[5/6].",
        interact: [{ kind: "shade", parts: 6, pre: [0, 1, 2, 3, 4, 5], hint: "This is the sixth whole, cut into sixths. Tap one part to take away [1/6]. 5 wholes are still left." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the **angle** in **degrees**.",
        img: "u19-protractor2.png",
        interact: [
          { kind: "angle", degrees: true, names: true, start: 90 },
          { kind: "input", fields: [{ label: "Angle", value: 130, suffix: "°" }] }
        ],
        answer: "**130°**. One arm sits on 0 on the right, so read the inner scale. The angle is wider than a right angle (obtuse), so it is 130°, not 50°."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Jett asked his classmates to choose one piece of playground equipment for the new park. Use the graph to determine how many students are in Jett's grade.",
        interact: [
          { kind: "bargraph", max: 45, step: 5, ylabel: "Number of students", xlabel: "Equipment", label: "Playground equipment preference",
            series: [{ l: "Students", c: "#4472C4" }],
            groups: [{ l: "giant slide", v: [42] }, { l: "swings", v: [9] }, { l: "sandpit", v: [6] }, { l: "see-saw", v: [12] }, { l: "spider web", v: [21] }, { l: "trampoline", v: [10] }] },
          { kind: "input", fields: [{ label: "Students in Jett's grade", value: 100 }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Read and add", s: "42 + 9 + 6 + 12 + 21 + 10 = 100 students." }, { t: "Make friendly numbers", s: "(9 + 21) + (42 + 6 + 12) + 10 = 30 + 60 + 10 = 100." }] },
        answer: "**100 students**: 42 + 9 + 6 + 12 + 21 + 10. Each student chose one piece of equipment, so the total of the columns is the number of students.",
        explain: "Values read from the slide graph (giant slide 42, swings 9, sandpit 6, see-saw 12, spider web 21, trampoline 10). This assumes everyone in the grade voted once."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "A large storage box is 3 m long, 1 m wide and 2 m high. Estimate its volume in cubic metres.",
        interact: [
          { kind: "areagrid", size: 64, cells: ["111"] },
          { kind: "input", fields: [{ label: "Volume", value: 6, suffix: "m³" }] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Layers", s: "The base layer is 3 × 1 = 3 cubic metres. 2 layers high: 3 × 2 = 6 m³." }, { t: "Multiply all three", s: "Length × width × height = 3 × 1 × 2 = 6 m³." }] },
        answer: "**6 m³**. The base holds 3 × 1 = 3 one-metre cubes, and it is 2 layers high: 3 × 2 = 6."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Convert the following times to **24-hour time**: 6:00 am, 10:15 am, 1:55 pm, 8:47 pm.",
        interact: [
          { kind: "clock", time: "1:55", h24: true, drag: true },
          { kind: "input", fields: [{ label: "6:00 am", accept: ["0600"], placeholder: "hhmm" }, { label: "10:15 am", accept: ["1015"], placeholder: "hhmm" }, { label: "1:55 pm", accept: ["1355"], placeholder: "hhmm" }, { label: "8:47 pm", accept: ["2047"], placeholder: "hhmm" }] }
        ],
        answer: "**0600** · **1015** · **1355** · **2047**. Morning times keep their hours (with a 0 in front if needed). For pm times, add 12 to the hours: 1 + 12 = 13, 8 + 12 = 20."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents quantity fractions A",
        prompt: "Kimesha has a chocolate bar. She gives away [1/6] of a bar to a friend. She now has [4/6] of the bar left.",
        answer: false,
        explain: "A whole bar is [6/6]. [6/6] − [1/6] = [5/6], so she has [5/6] left, not [4/6].",
        interact: [{ kind: "shade", parts: 6, pre: [0, 1, 2, 3, 4, 5], hint: "This is the whole bar. Tap one part to give it away." }],
        cubes: { ops: ["−"], solve: [{ t: "Subtract from a whole", s: "1 whole = [6/6]. [6/6] − [1/6] = [5/6]." }, { t: "Count the pieces", s: "Cut the bar into 6 pieces and give 1 away: 5 pieces are left, which is [5/6]." }] }
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Arlo started his coding class at 3:45 pm and finished at 5:20 pm. How much time elapsed while he was in class?",
        interact: [
          { kind: "jumps", start: 945, end: 1040, time: true, ampm: true, steps: [5, 15, 60], hint: "Count on from 3:45 pm to 5:20 pm. Jump to a friendly time first." },
          { kind: "input", fields: [{ label: "Hours", value: 1, suffix: "h" }, { label: "Minutes", value: 35, suffix: "min" }] }
        ],
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Jump to friendly times", s: "3:45 → 4:00 is 15 min, 4:00 → 5:00 is 1 h, 5:00 → 5:20 is 20 min. 1 h + 15 min + 20 min = 1 h 35 min." }, { t: "Hour first", s: "3:45 → 4:45 is 1 h. 4:45 → 5:20 is 35 min. Total 1 h 35 min." }] },
        answer: "**1 hour 35 minutes** (95 minutes)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "If there is 10 cm between 1980 and 2000, what would be an appropriate **scale** for this timeline? ___ cm = ___ years",
        img: "u19-phones.png",
        interact: [
          { kind: "choose", rows: [{ t: "Scale", options: ["1 cm = 2 years", "1 cm = 10 years", "2 cm = 1 year", "10 cm = 2 years"], a: 0 }] }
        ],
        answer: "**1 cm = 2 years** (or 5 cm = 10 years). 1980 to 2000 is 20 years, shown by 10 cm: 20 ÷ 10 = 2 years for every centimetre.",
        explain: "The slide's picture shows the answer (1cm = 2 years) under the scale bar; it is hidden here."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "**Estimate** the volume of the classroom using **cubic metres**. Explain your reasoning.",
        interact: [
          { kind: "choose", rows: [{ t: "A sensible estimate", options: ["About 2 m³", "About 20 m³", "About 200 m³", "About 2000 m³"], a: 2 }] }
        ],
        answer: "About **200 m³**. A classroom is roughly 8 m long, 8 m wide and 3 m high. The floor holds about 8 × 8 = 64 one-metre cubes, and it is about 3 layers high: 64 × 3 ≈ 192 m³.",
        explain: "Estimates vary with the room. Pace out the length and width (a big step is about 1 m) and use the door (about 2 m) to estimate the height."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D Shapes",
        prompt: "How many **lines of symmetry** does each shape have?",
        interact: [
          { kind: "mirror", view: [660, 280], shapes: [
            { p: [[110, 20], [185, 215], [35, 215]], l: "Shape A", lines: [[110, 10, 110, 225], [25, 117, 195, 117]] },
            { p: [[256, 94], [424, 94], [454, 215], [226, 215]], l: "Shape B", ly: 261, lines: [[340, 84, 340, 225], [216, 154, 464, 154]] },
            { p: [[467.0, 80.5], [477.3, 78.4], [486.1, 72.6], [491.9, 63.8], [494.0, 53.5], [626.0, 53.5], [628.1, 63.8], [633.9, 72.6], [642.7, 78.4], [653.0, 80.5], [653.0, 189.5], [642.7, 191.6], [633.9, 197.4], [628.1, 206.2], [626.0, 216.5], [494.0, 216.5], [491.9, 206.2], [486.1, 197.4], [477.3, 191.6], [467.0, 189.5]], l: "Shape C", ly: 261,
              lines: [[560, 43, 560, 227], [457, 135, 663, 135], [467, 53.5, 653, 216.5], [653, 53.5, 467, 216.5]] }] },
          { kind: "choose", rows: [
            { t: "Shape A", options: ["0", "1", "2", "4"], a: 1 },
            { t: "Shape B", options: ["0", "1", "2", "4"], a: 1 },
            { t: "Shape C", options: ["0", "1", "2", "4"], a: 2 }] }
        ],
        answer: "Shape A: **1** (down the middle). Shape B: **1** (down the middle). Shape C: **2** (down the middle and across the middle). Shape C is wider than it is tall, so its diagonals are not lines of symmetry.",
        explain: "Shape C on the slide is a rectangle (about 372 × 326 px) with rounded notches, not a square, so it has 2 lines of symmetry, not 4. It is redrawn with the same proportions."
      }
    ]
  ]
});
