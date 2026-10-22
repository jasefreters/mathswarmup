/*
  Stage 3 Year B, Unit 32 — Review of learning (Term 3, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 3, ls: 2, unit: 32,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 32 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "Following the pattern, what number would go in the empty box?",
        table: [["No. of squares", "1", "2", "3", "4"], ["No. of sides", "4", "8", "12", "?"]],
        options: ["18", "16", "20", "24"],
        answer: 1,
        explain: "Each square has 4 sides, so the number of sides is 4 times the number of squares. 4 × 4 = 16.",
        interact: [{ kind: "jumps", start: 0, steps: [4], hint: "Jump + 4 for each square. Where do you land after 4 jumps?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Identify which is a regular polygon and which is an irregular polygon. Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [500, 240], hint: "Choose a group, then tap each shape that belongs in it.",
            cats: [{ k: "r", t: "Regular polygon", c: "#2F6FE4" }, { k: "i", t: "Irregular polygon", c: "#D6408B" }],
            shapes: [
              { p: "40,120 80,50.7 160,50.7 200,120 160,189.3 80,189.3", a: "r", fill: "#C9CED6", deco: "<text x='30' y='30' class='co-lab'>A</text>" },
              { p: "270,50 420,50 460,90 430,130 340,130 340,160 460,160 460,200 270,200", a: "i", fill: "#C9CED6", deco: "<text x='262' y='30' class='co-lab'>B</text>" }] },
          { kind: "choose", rows: [
            { t: "A is", options: ["Regular", "Irregular"], a: 0 },
            { t: "B is", options: ["Regular", "Irregular"], a: 1 },
            { t: "Why is A regular?", options: ["All its sides and all its angles are equal", "It has 6 sides", "It is not a square"], a: 0 }] }
        ],
        answer: "**A is regular**: a hexagon with all 6 sides equal and all 6 angles equal. **B is irregular**: its sides are different lengths and its angles are different sizes.",
        explain: "Shape B on the slide has two curved sides, so strictly it isn't a polygon at all. It has been redrawn with straight sides only so it is an irregular polygon."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "What number am I? I can be grouped as: 7 millions, 2 thousands, 14 hundreds, 2 tens and 26 ones.",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: { M: 7, Th: 2, H: 14, T: 2, O: 26 }, hint: "Group 10 ones into a ten and 10 hundreds into a thousand until every column has 9 or less." },
          { kind: "input", fields: [{ label: "I am", value: 7003446 }] }
        ],
        answer: "**7 003 446**. 26 ones = 2 tens and 6 ones, so there are 4 tens. 14 hundreds = 1 thousand and 4 hundreds, so there are 3 thousands. 7 000 000 + 3000 + 400 + 40 + 6."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Explain how to use a protractor to measure an angle.",
        img: "u32-protractor.png",
        interact: [
          { kind: "angle", start: 65, degrees: true, hint: "Make an angle to measure together. Drag the blue arm." },
          { kind: "order", items: ["Put the centre point of the protractor on the vertex of the angle", "Line up the baseline (0°) with one arm of the angle", "Find the scale that starts at 0° on that arm", "Follow that scale round to where the other arm crosses it and read the number"], answer: [0, 1, 2, 3] }
        ],
        answer: "Put the **centre point on the vertex**, line the **0° line up with one arm**, then **read the scale that starts at 0°** where the other arm crosses it.",
        explain: "Choosing the right scale matters: the inner and outer numbers run in opposite directions. Check the reading makes sense (acute angles are under 90°)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates of each dot on the Cartesian plane.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ x: 2, y: -2, l: "a" }, { x: -5, y: -5, l: "b" }, { x: 1, y: 5, l: "c" }, { x: -4, y: 3, l: "d" }], hint: "Tap a dot to trace it back to each axis. Read x first, then y." },
          { kind: "input", fields: [{ label: "a) x", value: 2 }, { label: "a) y", value: -2 }, { label: "b) x", value: -5 }, { label: "b) y", value: -5 }, { label: "c) x", value: 1 }, { label: "c) y", value: 5 }, { label: "d) x", value: -4 }, { label: "d) y", value: 3 }] }
        ],
        answer: "a) **(2, −2)** · b) **(−5, −5)** · c) **(1, 5)** · d) **(−4, 3)**. Go along the x-axis first, then up or down.",
        explain: "The slide colours the dots (a purple, b orange, c green, d blue). Here they are labelled a to d instead."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "This rule describes what is happening in the pattern: There are 3 times as many sides as there are triangles.",
        img: "u32-triangles3.png",
        answer: true,
        explain: "1 triangle has 3 sides, 2 triangles have 6 and 3 triangles have 9. Sides = 3 × triangles.",
        interact: [{ kind: "jumps", start: 0, steps: [3], hint: "Jump + 3 for each triangle." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Identify whether this quadrilateral has line symmetry, rotational symmetry, or both.",
        interact: [
          { kind: "mirror", view: [300, 230], label: "A trapezium with two dashed lines to test", shapes: [{ p: [[95, 30], [205, 30], [250, 190], [50, 190]], fill: "#1296FF", lines: [[150, 10, 150, 210], [30, 110, 270, 110]] }] },
          { kind: "choose", rows: [{ t: "It has", options: ["Line symmetry only", "Rotational symmetry only", "Both", "Neither"], a: 0 }] }
        ],
        answer: "**Line symmetry only**. It has 1 vertical line of symmetry. It only looks the same after a full turn, so it has no rotational symmetry."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record the following using decimal notation: a) 678 thousandths, b) 213 thousandths, c) 42 thousandths",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: { th: 678 }, hint: "Group 10 thousandths into a hundredth, and 10 hundredths into a tenth." },
          { kind: "input", fields: [{ label: "a)", value: 0.678 }, { label: "b)", value: 0.213 }, { label: "c)", value: 0.042 }] }
        ],
        answer: "a) **0.678** · b) **0.213** · c) **0.042**. The last digit sits in the thousandths place. 42 thousandths needs a 0 in the tenths place."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Which of these lines are perpendicular?",
        img: "u32-perp.png",
        interact: [{ kind: "select", hint: "Tap the two lines that meet at a right angle.", items: [["A", false], ["B", true], ["C", false], ["D", false], ["E", true]] }],
        answer: "**B and E**. B is vertical and E is horizontal, so they meet at a right angle (90°)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "13.5 cm is 13 centimetres and 5 millimetres, or 13 [1/2] centimetres. Use this to interpret and record these measurements: a) 25.5 cm, b) 75.5 cm, c) 97.25 m",
        interact: [{ kind: "input", fields: [
          { label: "a) 25.5 cm =", value: 25, suffix: "cm" }, { label: "and", value: 5, suffix: "mm" },
          { label: "b) 75.5 cm =", value: 75, suffix: "cm" }, { label: "and", value: 5, suffix: "mm" },
          { label: "c) 97.25 m =", value: 97, suffix: "m" }, { label: "and", value: 25, suffix: "cm" }] }],
        answer: "a) **25 cm 5 mm** or 25 [1/2] cm · b) **75 cm 5 mm** or 75 [1/2] cm · c) **97 m 25 cm** or 97 [1/4] m.",
        explain: "In c) the unit is metres: 0.25 m is 25 hundredths of a metre, which is 25 cm or a quarter of a metre."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "Which rule describes what is happening in the pattern and the table of values?",
        img: "u32-sticks.png",
        options: ["There are 3 times as many sticks as triangles.", "There are 2 more sticks than triangles.", "There are twice as many sticks as triangles plus 1 more.", "There are 2 times as many sticks as triangles."],
        answer: 2,
        explain: "Triangles 1, 2, 3 use 3, 5, 7 sticks. 2 × 1 + 1 = 3, 2 × 2 + 1 = 5, 2 × 3 + 1 = 7. The first triangle needs 3 sticks, then each new one shares a stick and adds 2.",
        interact: [{ kind: "jumps", start: 1, steps: [2], hint: "Start at 1, then jump + 2 for each triangle." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Has this shape only been translated? Communicate your reasoning.",
        img: "u32-hexagons.png",
        interact: [{ kind: "choose", rows: [
          { t: "Only translated?", options: ["Yes", "No"], a: 1 },
          { t: "Why?", options: ["It has also been enlarged (made bigger)", "It has also been reflected", "It has been turned upside down"], a: 0 }] }],
        answer: "**No**. It has slid to the right, but it has also been **enlarged**. A translation keeps the shape the same size."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Calculate 10% of 520. Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t"], start: 520, shift: true, hint: "10% is [1/10]. Tap ÷ 10." },
          { kind: "input", fields: [{ label: "10% of 520", value: 52 }] }
        ],
        answer: "**52**. 10% = [1/10], and 520 ÷ 10 = 52."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the size of the orange angle. Communicate your reasoning.",
        img: "u32-angle70.png",
        interact: [{ kind: "scale", left: "70 + ?", right: "90", answer: 20 }],
        answer: "**20°**. The two arms make a right angle (90°). 90° − 70° = 20°."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert between metres and kilometres: a) 8560 m, b) 2.75 km, c) 525 m",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 8560, shift: true, hint: "1 km = 1000 m. Tap ÷ 10 three times to go from metres to kilometres." },
          { kind: "input", fields: [{ label: "a) 8560 m =", value: 8.56, suffix: "km" }, { label: "b) 2.75 km =", value: 2750, suffix: "m" }, { label: "c) 525 m =", value: 0.525, suffix: "km" }] }
        ],
        answer: "a) **8.56 km** · b) **2750 m** · c) **0.525 km**. Divide by 1000 to change metres to kilometres; multiply by 1000 to change kilometres to metres."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "This rule describes what is happening in the pattern: There are 5 times as many sides as there are shapes.",
        img: "u32-pentagons.png",
        answer: true,
        explain: "Each shape is a pentagon with 5 sides: 1 shape has 5 sides, 2 have 10, 3 have 15.",
        interact: [{ kind: "jumps", start: 0, steps: [5], hint: "Jump + 5 for each pentagon." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Label what is happening at each step: reflect, translate or rotate.",
        img: "u32-steps.png",
        interact: [{ kind: "choose", rows: [
          { t: "Step 1", options: ["Reflect", "Translate", "Rotate"], a: 1 },
          { t: "Step 2", options: ["Reflect", "Translate", "Rotate"], a: 2 },
          { t: "Step 3", options: ["Reflect", "Translate", "Rotate"], a: 0 }] }],
        answer: "Step 1: **translate** (same shape, dot in the same place). Step 2: **rotate** (a half turn moves the dot to the opposite corner). Step 3: **reflect** (the shape now leans the other way).",
        explain: "Follow the dot. A half turn of a parallelogram looks the same, so only the dot shows the rotation."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use this geometric pattern to complete the table of values.",
        img: "u32-tripattern.png",
        table: [["No. of triangles", "1", "2", "3", "4", "5"], ["No. of sides", "", "", "", "", ""]],
        interact: [
          { kind: "jumps", start: 0, steps: [3], hint: "Jump + 3 for each triangle." },
          { kind: "input", fields: [{ label: "1", value: 3 }, { label: "2", value: 6 }, { label: "3", value: 9 }, { label: "4", value: 12 }, { label: "5", value: 15 }] }
        ],
        answer: "**3, 6, 9, 12, 15**. Each triangle has 3 sides, so sides = 3 × triangles."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the size of the orange angle. Communicate your reasoning.",
        img: "u32-angles5.png",
        interact: [{ kind: "scale", left: "70 + 50 + 90 + 100 + ?", right: "360", answer: 50 }],
        answer: "**50°**. Angles at a point add to 360°. 70 + 50 + 90 + 100 = 310, and 360 − 310 = 50."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "What is the total of the angles at this point in the diagram? Communicate your reasoning.",
        img: "u32-glass.png",
        interact: [
          { kind: "angle", start: 300, reflex: true, degrees: true, hint: "Drag the arm all the way round the point. How many degrees is a full turn?" },
          { kind: "input", fields: [{ label: "Total", value: 360, suffix: "°" }] }
        ],
        answer: "**360°**. The angles go all the way around the point, which is one full turn."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "Which dot is closest to zero?",
        img: "u32-dots.png",
        options: ["Blue", "Green", "Purple", "Orange"],
        answer: 1,
        explain: "Blue is at −2, green at −1, purple at 2 and orange at 6. Green is only 1 away from 0.",
        interact: [{ kind: "jumps", start: 0, back: true, min: -6, max: 6, steps: [1], hint: "Count the jumps from 0 to each dot." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Draw 3 different ways this composite L-shape could be dissected to calculate its area.",
        interact: [{ kind: "sketch", shape: { view: [380, 240], pts: [[15, 15], [190, 15], [190, 120], [365, 120], [365, 225], [15, 225]] }, shapeFill: "rgba(255,255,255,0)", shapeStroke: "#222" }],
        answer: "1) A **horizontal** cut across from the inside corner: a top rectangle and a long bottom rectangle. 2) A **vertical** cut down from the inside corner: a tall left rectangle and a short right rectangle. 3) **Complete the big rectangle** and subtract the missing top-right rectangle."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use this area model to help solve this algorithm: 56 × 23",
        img: "u32-areamodel.png",
        interact: [{ kind: "input", fields: [{ label: "3 × 50", value: 150 }, { label: "3 × 6", value: 18 }, { label: "20 × 50", value: 1000 }, { label: "20 × 6", value: 120 }, { label: "56 × 23", value: 1288 }] }],
        answer: "150 + 18 + 1000 + 120 = **1288**. In the algorithm: 56 × 3 = 168, 56 × 20 = 1120, and 168 + 1120 = 1288."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "The red arc marks all the angles at this point that sit above the straight line. What is their total? Communicate your reasoning.",
        img: "u32-tiles.png",
        interact: [
          { kind: "angle", start: 150, degrees: true, hint: "Open the arm until it lies flat on the line." },
          { kind: "input", fields: [{ label: "Total", value: 180, suffix: "°" }] }
        ],
        answer: "**180°**. The angles fill one side of a straight line, which is a half turn. All the way round a point would be 360°.",
        explain: "The slide asks for “the angles at a point”, but its picture shows the point on the edge of the tile with the red arc on one side of a straight line, so the angles marked total 180°, not 360°. The question now says which angles to total."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Identify which triangle is equilateral, isosceles and scalene.",
        interact: [
          { kind: "classify", view: [500, 520], hint: "Choose a type, then tap the triangle that matches.",
            cats: [{ k: "e", t: "Equilateral", c: "#E5484D" }, { k: "i", t: "Isosceles", c: "#3E86B8" }, { k: "s", t: "Scalene", c: "#7030A0" }],
            shapes: [
              { p: "100,26 50,183 262,243", a: "s", fill: "#CDB8FB", deco: "<text x='62' y='26' class='co-lab'>A</text>" },
              { p: "355,157 225,380 485,380", a: "e", fill: "#F27C76", deco: "<text x='300' y='160' class='co-lab'>B</text>" },
              { p: "219,391 6,516 432,516", a: "i", fill: "#8AB4F0", deco: "<text x='170' y='395' class='co-lab'>C</text>" }] },
          { kind: "choose", rows: [
            { t: "Equilateral", options: ["A", "B", "C"], a: 1 },
            { t: "Isosceles", options: ["A", "B", "C"], a: 2 },
            { t: "Scalene", options: ["A", "B", "C"], a: 0 }] }
        ],
        answer: "**B is equilateral** (3 equal sides). **C is isosceles** (2 equal sides). **A is scalene** (no equal sides)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "This thermometer is read as −4 degrees Celsius.",
        img: "u32-thermo.png",
        answer: false,
        explain: "Each small mark is 2 degrees. The top of the liquid is one mark above −10, so it reads −8 °C, not −4 °C.",
        interact: [{ kind: "jumps", start: -10, min: -20, max: 0, steps: [2], hint: "Start at −10 and jump + 2 for each mark up to the top of the liquid." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "A student dissected this composite L-shape with a horizontal line to calculate its area. Show another way this composite L-shape could be dissected. Communicate your reasoning.",
        interact: [
          { kind: "sketch", shape: { view: [380, 240], pts: [[15, 15], [170, 15], [170, 95], [365, 95], [365, 225], [15, 225]] }, shapeFill: "rgba(255,255,255,0)", shapeStroke: "#222" },
          { kind: "choose", rows: [{ t: "Another way", options: ["A vertical cut down from the inside corner", "A cut from corner to corner", "Cut it into many small triangles"], a: 0 }] }
        ],
        answer: "Draw a **vertical line down from the inside corner**. This makes a tall rectangle on the left and a shorter rectangle on the right. Find each area and add them. You could also complete the big rectangle and subtract the missing corner."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use repeated halving to solve: If 4 televisions cost $6842, what is the cost of one television? Why is this an appropriate strategy? Communicate your reasoning.",
        interact: [
          { kind: "bar", whole: { v: 6842, l: "$6842", n: "4 televisions" }, parts: [{ v: 1710.5, l: "$1710.50", n: "1 TV", hide: true }, { v: 1710.5, l: "$1710.50", n: "1 TV", hide: true }, { v: 1710.5, l: "$1710.50", n: "1 TV", hide: true }, { v: 1710.5, l: "$1710.50", n: "1 TV", hide: true }] },
          { kind: "input", fields: [{ label: "Half: cost of 2", value: 3421, prefix: "$" }, { label: "Half again: cost of 1", value: 1710.5, prefix: "$" }] },
          { kind: "choose", rows: [{ t: "Why repeated halving?", options: ["Dividing by 4 is the same as halving twice", "Halving makes the answer bigger", "It only works for odd numbers"], a: 0 }] }
        ],
        cubes: { ops: ["÷"], solve: [{ t: "Halve, then halve again", s: "Half of $6842 is $3421 (2 televisions). Half of $3421 is $1710.50 (1 television)." }, { t: "Divide by 4", s: "6842 ÷ 4 = 1710.5, so one television costs $1710.50." }] },
        answer: "**$1710.50**. $6842 ÷ 2 = $3421, then $3421 ÷ 2 = $1710.50. Halving twice is the same as dividing by 4, and halving is easy to do mentally."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Match the type of angle to the definition. 1. obtuse, 2. reflex, 3. acute",
        interact: [
          { kind: "angle", start: 120, reflex: true, names: true, degrees: true, hint: "Drag the arm to make each type of angle." },
          { kind: "choose", rows: [
            { t: "1. Obtuse", options: ["A: between 180° and 360°", "B: between 0° and 90°", "C: between 90° and 180°"], a: 2 },
            { t: "2. Reflex", options: ["A: between 180° and 360°", "B: between 0° and 90°", "C: between 90° and 180°"], a: 0 },
            { t: "3. Acute", options: ["A: between 180° and 360°", "B: between 0° and 90°", "C: between 90° and 180°"], a: 1 }] }
        ],
        answer: "1. obtuse → **C** (bigger than a right angle, smaller than a straight angle). 2. reflex → **A** (between 180° and 360°). 3. acute → **B** (smaller than a right angle)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name this object.",
        img: "u32-pyramid.png",
        interact: [{ kind: "choose", rows: [
          { t: "Its base is a", options: ["Triangle", "Square", "Pentagon", "Circle"], a: 1 },
          { t: "It is a", options: ["Square-based pyramid", "Triangular prism", "Cube", "Cone"], a: 0 }] }],
        answer: "A **square-based pyramid**: a square base and 4 triangular faces that meet at the apex."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "Which of these results in a negative whole number?",
        options: ["15 − 9", "8 − 8", "7 − 12", "18 − 4"],
        answer: 2,
        explain: "7 − 12 = −5. The others give 6, 0 and 14. Zero is neither positive nor negative.",
        interact: [{ kind: "jumps", start: 7, back: true, min: -6, max: 8, steps: [1, 5], hint: "Start at 7 and jump back 12." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Order these steps to transform a parallelogram into a rectangle to find its area.",
        img: "u32-parasteps.png",
        interact: [{ kind: "order", items: ["A: Cut along the line", "B: Move the triangle to the other side to make a rectangle", "C: Use a ruler to draw a line perpendicular to the base"], answer: [2, 0, 1] }],
        answer: "**C, A, B**. Draw a perpendicular height with a ruler, cut along it, then slide the triangle to the other end. The rectangle has the same base, height and area as the parallelogram."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "What is [1/10], [1/100] and [1/1000] of 3650?",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 3650, shift: true, hint: "Tap ÷ 10 once for a tenth, twice for a hundredth, three times for a thousandth." },
          { kind: "input", fields: [{ label: "[1/10] of 3650", value: 365 }, { label: "[1/100] of 3650", value: 36.5 }, { label: "[1/1000] of 3650", value: 3.65 }] }
        ],
        answer: "[1/10] of 3650 = **365** · [1/100] = **36.5** · [1/1000] = **3.65**. Each time, the digits move one more place to the right."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Using a bridging strategy, show how much time has elapsed from 2:45 pm to 5:00 pm.",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 885, end: 1020, steps: [15, 60], hint: "Jump to the next hour first, then jump on in hours." },
          { kind: "input", fields: [{ label: "Hours", value: 2, suffix: "h" }, { label: "Minutes", value: 15, suffix: "min" }] }
        ],
        answer: "**2 hours 15 minutes**. 2:45 pm → 3:00 pm is 15 minutes, then 3:00 pm → 5:00 pm is 2 hours."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Convert these measurements from kilograms to grams: a) 2.08 kg, b) 23.75 kg, c) 4.205 kg",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O", "t", "h", "th"], start: 2.08, shift: true, houses: false, hint: "1 kg = 1000 g. Tap × 10 three times." },
          { kind: "input", fields: [{ label: "a) 2.08 kg =", value: 2080, suffix: "g" }, { label: "b) 23.75 kg =", value: 23750, suffix: "g" }, { label: "c) 4.205 kg =", value: 4205, suffix: "g" }] }
        ],
        answer: "a) **2080 g** · b) **23 750 g** · c) **4205 g**. Multiply by 1000: each digit moves three places to the left."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "We can locate negative numbers on a 1–5 number line.",
        answer: false,
        explain: "A number line from 1 to 5 only shows the numbers from 1 to 5. Negative numbers are less than 0, so they sit to the left of 0, off this number line.",
        interact: [{ kind: "marker", min: 1, max: 5, divs: 4, labels: [1, 2, 3, 4, 5], label: "?", hint: "Try to find a place for −2 on this number line." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "If the area of this parallelogram is 16 cm², what is the area of the triangle? Communicate your reasoning.",
        img: "u32-paratri.png",
        interact: [
          { kind: "choose", rows: [{ t: "The triangle has", options: ["The same base and height as the parallelogram", "Double the base", "Half the height"], a: 0 }] },
          { kind: "input", fields: [{ label: "Area of the triangle", value: 8, suffix: "cm²" }] }
        ],
        answer: "**8 cm²**. The triangle has the same base and the same perpendicular height, so it is half of the parallelogram. 16 ÷ 2 = 8."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Complete the number sentence by calculating the missing numbers: 3 × ? = 180 ÷ ?",
        interact: [{ kind: "sentence", fields: [{ label: "Write the full number sentence", placeholder: "3 × ? = 180 ÷ ?", re: "^\\s*3\\s*x\\s*\\d+(\\.\\d+)?\\s*=\\s*180\\s*(÷|/)\\s*\\d+(\\.\\d+)?\\s*$", msg: "Keep 3 × at the start and 180 ÷ after the equals sign.", sample: "3 x 6 = 180 ÷ 10" }] }],
        answer: "Many answers work, for example **3 × 6 = 180 ÷ 10** (18 = 18), 3 × 2 = 180 ÷ 30, 3 × 10 = 180 ÷ 6 or 3 × 1 = 180 ÷ 60. The two missing numbers always multiply to 60.",
        explain: "The slide has two empty boxes, so there is no single answer. Any pair that makes both sides equal is marked correct."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Carrie arrived at the waterpark at 8:35 am. She remained at the water park for 7 hours and 45 minutes. Use the bridging strategy to calculate what time Carrie left the waterpark.",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 515, steps: [25, 60, 20], hint: "Jump 25 minutes to 9:00 am, then on in hours, then the minutes left." },
          { kind: "input", fields: [{ label: "Carrie left at", accept: ["4:20 pm", "4:20pm", "420pm", "16:20", "1620"], placeholder: "h:mm am/pm" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Bridge to the hour", s: "8:35 am + 25 min = 9:00 am. 45 − 25 = 20 min left. 9:00 am + 7 h = 4:00 pm, + 20 min = 4:20 pm." }, { t: "Hours, then minutes", s: "8:35 am + 7 h = 3:35 pm. 3:35 pm + 25 min = 4:00 pm, + 20 min = 4:20 pm." }] },
        answer: "**4:20 pm**. 8:35 am → 9:00 am (25 min), → 4:00 pm (7 h), → 4:20 pm (20 min). 25 + 20 = 45 minutes and 7 hours."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "A movie started at 3:15 pm and finished at 6:35 pm. How much time has elapsed?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 915, end: 1115, steps: [45, 60, 20, 35], hint: "Bridge to 4:00 pm, jump on in hours, then the minutes left." },
          { kind: "input", fields: [{ label: "Hours", value: 3, suffix: "h" }, { label: "Minutes", value: 20, suffix: "min" }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Bridge to the hour", s: "3:15 pm → 4:00 pm is 45 min. 4:00 pm → 6:00 pm is 2 h. 6:00 pm → 6:35 pm is 35 min. 45 + 35 = 80 min = 1 h 20 min, so 3 h 20 min." }, { t: "Hours, then minutes", s: "3:15 pm + 3 h = 6:15 pm. 6:15 pm → 6:35 pm is 20 min. Total 3 h 20 min." }] },
        answer: "**3 hours 20 minutes**. 3:15 pm + 3 hours = 6:15 pm, then 20 more minutes to 6:35 pm."
      }
    ]
  ]
});
