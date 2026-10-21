/*
  Stage 3 Year A, Unit 9 — Review of learning (Term 2, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 2, ls: 4, unit: 9,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 9 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "The decimal 1.429 would be placed on the number line at:",
        img: "u9-numline.png",
        options: ["A", "B", "C", "D"],
        answer: 2,
        explain: "1.429 is between 1 and 2, a little less than halfway (1.5). Only C sits just before the middle of 1 and 2. A and B are less than 1, and D is close to 2.",
        interact: [{ kind: "marker", min: 0, max: 2, divs: 20, majorEvery: 10, labels: [0, 0.5, 1, 1.5, 2], label: "1.429", hint: "Each small step is 0.1. Slide the pin to 1.429, then compare it with the arrows." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Sketch a rectangular prism and a rectangular pyramid.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "Rectangular prism: 6 rectangular faces (2 matching rectangles joined at the corners, hidden edges dashed). Rectangular pyramid: a rectangle base with 4 triangles meeting at one apex."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Which of these identifies a specific point: grid-map reference system or Cartesian plane coordinate system? Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "Identifies a specific point", options: ["Grid-map reference system", "Cartesian plane coordinate system"], a: 1 },
          { t: "A grid-map reference such as C4 names", options: ["a whole square", "one exact point"], a: 0 }] }],
        answer: "The **Cartesian plane**. A coordinate such as (3, 2) names the exact point where two lines cross. A grid-map reference such as C4 only names a square, which is an area containing many points."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Write the missing number from each fact family triangle. Orange: 15 at the top, ? and 5 at the bottom. Green: ? at the top, 4 and 6 at the bottom. Blue: 16 at the top, 2 and ? at the bottom.",
        interact: [
          { kind: "array", rows: 3, cols: 5, max: 12, showTotal: true, hint: "The top number is the product. Build each fact as an array to check it." },
          { kind: "input", fields: [{ label: "Orange ? =", value: 3 }, { label: "Green ? =", value: 24 }, { label: "Blue ? =", value: 8 }] }
        ],
        answer: "Orange: **3** (3 × 5 = 15) · Green: **24** (4 × 6 = 24) · Blue: **8** (2 × 8 = 16). The top number is the product of the two bottom numbers."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Calculate the perimeter of the isosceles triangle. Communicate your reasoning.",
        interact: [
          { kind: "sides", view: [400, 360], label: "Isosceles triangle", fill: "#D9FBF6", poly: [[200, 20], [270, 300], [130, 300]],
            dims: [{ from: [222, 15], to: [292, 295] }, { from: [130, 324], to: [270, 324] }],
            labels: [{ x: 290, y: 160, t: "45 cm", anchor: "start" }, { x: 200, y: 350, t: "35 cm" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 125, suffix: "cm" }] }
        ],
        answer: "An isosceles triangle has 2 equal sides, so the unlabelled side is also 45 cm. 45 + 45 + 35 = **125 cm**.",
        explain: "The left side is unlabelled on the slide. Because the triangle is isosceles and the two slanted sides match, it is taken as 45 cm."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "A zero can be a placeholder in a decimal number. Communicate your reasoning.",
        answer: true,
        explain: "In 3.05 the zero holds the tenths place, so the 5 stays in the hundredths. Without it, 3.5 is a different number.",
        interact: [{ kind: "pv", cols: ["O", "t", "h"], start: 3.05, hint: "This chart shows 3.05. The empty tenths column is the zero placeholder." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name the prisms and pyramids.",
        img: "u9-solids.png",
        interact: [{ kind: "choose", rows: [
          { t: "1.", options: ["Triangular pyramid", "Square pyramid", "Pentagonal pyramid", "Hexagonal prism"], a: 0 },
          { t: "2.", options: ["Triangular pyramid", "Square pyramid", "Pentagonal pyramid", "Hexagonal prism"], a: 3 },
          { t: "3.", options: ["Triangular pyramid", "Square pyramid", "Pentagonal pyramid", "Hexagonal prism"], a: 2 }] }],
        answer: "1. **Triangular pyramid** (triangle base, 3 triangles to the apex) · 2. **Hexagonal prism** (2 hexagon ends joined by rectangles) · 3. **Pentagonal pyramid** (pentagon base, 5 triangles to the apex)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the coordinates of the books plotted on the Cartesian plane: green, purple, blue.",
        interact: [
          { kind: "plane", range: [0, 8, 0, 8], points: [{ l: "Green", x: 4, y: 2 }, { l: "Purple", x: 7, y: 6 }, { l: "Blue", x: 1, y: 3 }, { l: "Pink", x: 0, y: 7 }, { l: "Red", x: 3, y: 5 }, { l: "Orange", x: 7, y: 0 }] },
          { kind: "input", fields: [
            { label: "Green x", value: 4 }, { label: "y", value: 2 },
            { label: "Purple x", value: 7 }, { label: "y", value: 6 },
            { label: "Blue x", value: 1 }, { label: "y", value: 3 }] }
        ],
        answer: "Green **(4, 2)** · Purple **(7, 6)** · Blue **(1, 3)**. Across the x-axis first, then up the y-axis.",
        explain: "The books are redrawn as labelled points on the same grid."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Categorise the following numbers into prime, composite or neither: 0, 3, 1, 12, 11, 17, 23, 16, 25. Communicate your reasoning.",
        interact: [
          { kind: "array", rows: 3, cols: 4, max: 12, showTotal: true, hint: "If a number can be built as a rectangle with more than one row, it is composite." },
          { kind: "choose", rows: [
            { t: "0", options: ["Prime", "Composite", "Neither"], a: 2 },
            { t: "3", options: ["Prime", "Composite", "Neither"], a: 0 },
            { t: "1", options: ["Prime", "Composite", "Neither"], a: 2 },
            { t: "12", options: ["Prime", "Composite", "Neither"], a: 1 },
            { t: "11", options: ["Prime", "Composite", "Neither"], a: 0 },
            { t: "17", options: ["Prime", "Composite", "Neither"], a: 0 },
            { t: "23", options: ["Prime", "Composite", "Neither"], a: 0 },
            { t: "16", options: ["Prime", "Composite", "Neither"], a: 1 },
            { t: "25", options: ["Prime", "Composite", "Neither"], a: 1 }] }
        ],
        answer: "Prime: **3, 11, 17, 23** (exactly 2 factors). Composite: **12, 16, 25** (more than 2 factors, for example 25 = 5 × 5). Neither: **0 and 1**."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert these measurements from metres to kilometres: 2600 m, 367 m, 1008 m, 6050 m",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 2600, shift: true, hint: "1000 m = 1 km, so divide by 1000: every digit moves 3 places to the right." },
          { kind: "input", fields: [{ label: "2600 m =", value: 2.6, suffix: "km" }, { label: "367 m =", value: 0.367, suffix: "km" }, { label: "1008 m =", value: 1.008, suffix: "km" }, { label: "6050 m =", value: 6.05, suffix: "km" }] }
        ],
        answer: "**2.6 km** · **0.367 km** · **1.008 km** · **6.05 km**. Divide by 1000."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "What is the closest benchmark fraction to 0.254?",
        options: ["[1/2]", "[2/10]", "[3/4]", "[1/4]"],
        answer: 3,
        explain: "[1/4] = 0.25, only 0.004 away from 0.254. [2/10] = 0.2 is 0.054 away, and [1/2] and [3/4] are much further.",
        interact: [{ kind: "marker", min: 0, max: 1, divs: 20, majorEvery: 5, labels: [0, 0.25, 0.5, 0.75, 1], label: "0.254", hint: "Slide the pin to 0.254. Which benchmark is it nearest?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Sketch the 3D object from the top, front and side views.",
        img: "u9-pentpyramid.png",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "Top view: a **pentagon** with lines from the centre (the apex) to each corner. Front view: a **triangle** (with the front edge as a line from the apex down to the base). Side view: a **triangle**.",
        explain: "The object is a pentagonal pyramid. Front and side views are both triangles; small differences in width are fine."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates of the carrots plotted on the 4 quadrants of the Cartesian plane.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "Orange", x: -4, y: 2 }, { l: "White", x: 3, y: 4 }, { l: "Green", x: 1, y: -1 }, { l: "Purple", x: -2, y: -5 }] },
          { kind: "input", fields: [
            { label: "Orange x", value: -4 }, { label: "y", value: 2 },
            { label: "White x", value: 3 }, { label: "y", value: 4 },
            { label: "Green x", value: 1 }, { label: "y", value: -1 },
            { label: "Purple x", value: -2 }, { label: "y", value: -5 }] }
        ],
        answer: "Orange **(−4, 2)** · White **(3, 4)** · Green **(1, −1)** · Purple **(−2, −5)**. One carrot in each quadrant.",
        explain: "The carrots are redrawn as labelled points. The pale carrot is called white. Each carrot is read at the centre of the picture."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use place value understanding and mental strategies to multiply by 10 to solve: 7 × 74",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 74, shift: true, hint: "Multiply 74 by 10 first. Then take away 3 lots of 74." },
          { kind: "input", fields: [{ label: "10 × 74 =", value: 740 }, { label: "3 × 74 =", value: 222 }, { label: "7 × 74 =", value: 518 }] }
        ],
        answer: "10 × 74 = 740. 7 × 74 is 3 lots of 74 fewer: 740 − 222 = **518**.",
        explain: "Another way: 7 × 70 = 490 and 7 × 4 = 28, so 490 + 28 = 518."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert these measurements from kilometres to metres: 2.3 km, 0.045 km, 10.07 km",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O", "t", "h", "th"], start: 2.3, shift: true, hint: "1 km = 1000 m, so multiply by 1000: every digit moves 3 places to the left." },
          { kind: "input", fields: [{ label: "2.3 km =", value: 2300, suffix: "m" }, { label: "0.045 km =", value: 45, suffix: "m" }, { label: "10.07 km =", value: 10070, suffix: "m" }] }
        ],
        answer: "**2300 m** · **45 m** · **10 070 m**. Multiply by 1000."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "These decimal cards have been ordered from smallest to largest: 0.189, 0.198, 1.222, 0.033",
        answer: false,
        explain: "0.033 is the smallest (0 tenths) and 1.222 is the largest (1 one). The correct order is 0.033, 0.189, 0.198, 1.222.",
        interact: [{ kind: "order", items: ["0.189", "0.198", "1.222", "0.033"], answer: [3, 0, 1, 2] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Sketch the net of the square pyramid.",
        img: "u9-sqpyramid.png",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "A **square** in the middle with a **triangle** on each of its 4 sides. Each triangle's base matches a side of the square, and the triangles fold up to meet at the apex."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the following coordinates of the point: marked in the first quadrant; if it was reflected across the y-axis to create a mirror image in the second quadrant; if it was reflected across the x-axis into the fourth quadrant.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "Point", x: 2, y: 5 }], hint: "Tap the point to trace it to each axis. Tap grid points to plot the reflections." },
          { kind: "input", fields: [
            { label: "First quadrant x", value: 2 }, { label: "y", value: 5 },
            { label: "Reflected in y-axis x", value: -2 }, { label: "y", value: 5 },
            { label: "Reflected in x-axis x", value: 2 }, { label: "y", value: -5 }] }
        ],
        answer: "The point is **(2, 5)**. Reflected across the y-axis: **(−2, 5)**. Reflected across the x-axis: **(2, −5)**.",
        explain: "Both reflections are of the original point (2, 5). Reflecting in the y-axis changes the sign of x; reflecting in the x-axis changes the sign of y."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use an area model to solve: 56 × 8",
        interact: [
          { kind: "classify", view: [560, 200], hint: "The area model splits 56 into 50 and 6. Tap a part to mark it as worked out.",
            cats: [{ k: "d", t: "Worked out", c: "#9FD8A8" }],
            shapes: [
              { p: "40,40 440,40 440,170 40,170", fill: "#CFE3FA" },
              { p: "440,40 520,40 520,170 440,170", fill: "#FCE3C4", deco: "<text x='240' y='28' class='co-lab'>50</text><text x='480' y='28' class='co-lab'>6</text><text x='22' y='112' class='co-lab'>8</text><text x='240' y='112' class='co-lab'>50 × 8</text><text x='480' y='112' class='co-lab'>6 × 8</text>" }] },
          { kind: "input", fields: [{ label: "50 × 8 =", value: 400 }, { label: "6 × 8 =", value: 48 }, { label: "56 × 8 =", value: 448 }] }
        ],
        answer: "50 × 8 = 400 and 6 × 8 = 48. 400 + 48 = **448**."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Use decimal notation to record the lengths in: a) metres: tree 375 cm, b) metres: rope 245 cm, c) centimetres: pencil 168 mm, d) kilometres: road 12 600 m",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O", "t", "h", "th"], start: 375, shift: true, hint: "cm to m: ÷ 100. mm to cm: ÷ 10. m to km: ÷ 1000." },
          { kind: "input", fields: [{ label: "a) 375 cm =", value: 3.75, suffix: "m" }, { label: "b) 245 cm =", value: 2.45, suffix: "m" }, { label: "c) 168 mm =", value: 16.8, suffix: "cm" }, { label: "d) 12 600 m =", value: 12.6, suffix: "km" }] }
        ],
        answer: "a) **3.75 m** · b) **2.45 m** · c) **16.8 cm** · d) **12.6 km**"
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "5 + 0.4 + 0.02 + 0.009 =",
        options: ["5.429", "5.492", "5.942", "5.924"],
        answer: 0,
        explain: "5 ones, 4 tenths, 2 hundredths and 9 thousandths make 5.429.",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 5.429 }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Visualise folding these nets. Name the 3D objects they would make.",
        img: "u9-nets.png",
        interact: [{ kind: "choose", rows: [
          { t: "1.", options: ["Triangular prism", "Square pyramid", "Pentagonal prism", "Pentagonal pyramid"], a: 0 },
          { t: "2.", options: ["Triangular prism", "Square pyramid", "Pentagonal prism", "Pentagonal pyramid"], a: 1 },
          { t: "3.", options: ["Triangular prism", "Square pyramid", "Pentagonal prism", "Pentagonal pyramid"], a: 2 }] }],
        answer: "1. **Triangular prism** (3 rectangles, 2 triangles) · 2. **Square pyramid** (1 square, 4 triangles) · 3. **Pentagonal prism** (5 rectangles, 2 pentagons).",
        explain: "In net 2, two triangles are joined to each other rather than all to the square. They still fold up into the 4 faces of a square pyramid."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Using numerical values, record the probability of: tossing heads, rolling a 3, spinning orange.",
        interact: [
          { kind: "classify", view: [300, 300], label: "Spinner with 5 equal parts", hint: "Tap Orange, then tap the orange part. How many equal parts are there?",
            cats: [{ k: "o", t: "Orange", c: "#A34100" }],
            shapes: [
              { p: "150.0,150.0 156.3,30.2 168.8,31.5 181.1,34.1 193.0,38.0 204.5,43.1 215.4,49.4 225.5,56.7 234.9,65.1 243.3,74.5 250.6,84.6 256.9,95.5 262.0,107.0 265.9,118.9", a: "o", fill: "#F07A2E" },
              { p: "150.0,150.0 265.9,118.9 268.5,131.2 269.8,143.7 269.8,156.3 268.5,168.8 265.9,181.1 262.0,193.0 256.9,204.5 250.6,215.4 243.3,225.5 234.9,234.9 225.5,243.3 215.4,250.6", fill: "#F7DF0A" },
              { p: "150.0,150.0 215.4,250.6 204.5,256.9 193.0,262.0 181.1,265.9 168.8,268.5 156.3,269.8 143.7,269.8 131.2,268.5 118.9,265.9 107.0,262.0 95.5,256.9 84.6,250.6 74.5,243.3", fill: "#00BC5C" },
              { p: "150.0,150.0 74.5,243.3 65.1,234.9 56.7,225.5 49.4,215.4 43.1,204.5 38.0,193.0 34.1,181.1 31.5,168.8 30.2,156.3 30.2,143.7 31.5,131.2 34.1,118.9 38.0,107.0", fill: "#FFFFFF" },
              { p: "150.0,150.0 38.0,107.0 43.1,95.5 49.4,84.6 56.7,74.5 65.1,65.1 74.5,56.7 84.6,49.4 95.5,43.1 107.0,38.0 118.9,34.1 131.2,31.5 143.7,30.2 156.3,30.2", fill: "#0DB2EA", deco: "<circle cx='150' cy='150' r='120' fill='none' stroke='#1B1B1B' stroke-width='3' pointer-events='none'/><line x1='150' y1='150' x2='156.3' y2='30.2' stroke='#1B1B1B' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='265.9' y2='118.9' stroke='#1B1B1B' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='215.4' y2='250.6' stroke='#1B1B1B' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='74.5' y2='243.3' stroke='#1B1B1B' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='38.0' y2='107.0' stroke='#1B1B1B' stroke-width='2.5' pointer-events='none'/><circle cx='150' cy='150' r='7' fill='#fff' stroke='#1B1B1B' stroke-width='2.5' pointer-events='none'/>" }] },
          { kind: "input", fields: [{ label: "Tossing heads", accept: ["1/2", "50%"], placeholder: "a/b" }, { label: "Rolling a 3", accept: ["1/6"], placeholder: "a/b" }, { label: "Spinning orange", accept: ["1/5", "20%"], placeholder: "a/b" }] }
        ],
        answer: "Heads: **[1/2]** (1 of 2 sides) · Rolling a 3: **[1/6]** (1 of 6 faces) · Orange: **[1/5]** (1 of 5 equal parts).",
        explain: "The spinner has 5 equal parts, so orange is [1/5]. Equivalent answers such as 0.5 or 50% are also correct; type fractions or percentages in the boxes."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Partition the dividend (72) into smaller multiples of the divisor (4) and then use an area model to solve: 72 ÷ 4",
        interact: [
          { kind: "classify", view: [560, 200], hint: "The area is 72 and one side is 4. Split 72 into 40 and 32. Tap a part when you know its missing side.",
            cats: [{ k: "d", t: "Worked out", c: "#9FD8A8" }],
            shapes: [
              { p: "40,40 290,40 290,170 40,170", fill: "#CFE3FA" },
              { p: "290,40 490,40 490,170 290,170", fill: "#FCE3C4", deco: "<text x='165' y='28' class='co-lab'>?</text><text x='390' y='28' class='co-lab'>?</text><text x='22' y='112' class='co-lab'>4</text><text x='165' y='112' class='co-lab'>40</text><text x='390' y='112' class='co-lab'>32</text>" }] },
          { kind: "input", fields: [{ label: "40 ÷ 4 =", value: 10 }, { label: "32 ÷ 4 =", value: 8 }, { label: "72 ÷ 4 =", value: 18 }] }
        ],
        answer: "72 = 40 + 32. 40 ÷ 4 = 10 and 32 ÷ 4 = 8. 10 + 8 = **18**."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Read the following 24-hour times aloud: 1800 hours, 1630 hours, 0630 hours",
        interact: [
          { kind: "clock", h24: true, time: "6:00" },
          { kind: "choose", rows: [
            { t: "1800 hours", options: ["6:00 am", "6:00 pm", "8:00 pm"], a: 1 },
            { t: "1630 hours", options: ["4:30 pm", "6:30 pm", "4:30 am"], a: 0 },
            { t: "0630 hours", options: ["6:30 pm", "6:30 am", "4:30 am"], a: 1 }] }
        ],
        answer: "1800: **eighteen hundred hours** (6:00 pm) · 1630: **sixteen thirty hours** (4:30 pm) · 0630: **oh six thirty hours** (6:30 am)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "One and five hundred and sixty-one thousandths written as a decimal is 1.561.",
        answer: true,
        explain: "1 one and 561 thousandths: 5 tenths, 6 hundredths and 1 thousandth. 1.561.",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 1.561 }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Convert the millilitres to litres and the litres to millilitres: 125 mL, 2.03 L, 6 mL",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 125, shift: true, hint: "1000 mL = 1 L. mL to L: ÷ 1000. L to mL: × 1000." },
          { kind: "input", fields: [{ label: "125 mL =", value: 0.125, suffix: "L" }, { label: "2.03 L =", value: 2030, suffix: "mL" }, { label: "6 mL =", value: 0.006, suffix: "L" }] }
        ],
        answer: "125 mL = **0.125 L** · 2.03 L = **2030 mL** · 6 mL = **0.006 L**"
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Which random generator matches the following statements? 1. There is a 1 in 3 chance of an outcome. 2. There is a 50-50 chance of an outcome. 3. There is a [1/6] chance of an outcome. 4. There is a 25% chance of an outcome.",
        img: "u9-generators.png",
        interact: [{ kind: "choose", rows: [
          { t: "1 in 3", options: ["Coin", "Spinner", "Marbles", "Dice"], a: 1 },
          { t: "50-50", options: ["Coin", "Spinner", "Marbles", "Dice"], a: 0 },
          { t: "[1/6]", options: ["Coin", "Spinner", "Marbles", "Dice"], a: 3 },
          { t: "25%", options: ["Coin", "Spinner", "Marbles", "Dice"], a: 2 }] }],
        answer: "1 in 3: **spinner** (3 equal parts) · 50-50: **coin** (heads or tails) · [1/6]: **dice** (6 faces) · 25%: **marbles** (4 colours, one of each).",
        explain: "The slide's picture also had a hand of playing cards that the statements don't use; it has been left out."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the distributive property to solve: 382 × 3",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 382, hint: "Split 382 into 300, 80 and 2. Multiply each part by 3." },
          { kind: "input", fields: [{ label: "300 × 3 =", value: 900 }, { label: "80 × 3 =", value: 240 }, { label: "2 × 3 =", value: 6 }, { label: "382 × 3 =", value: 1146 }] }
        ],
        answer: "382 × 3 = (300 × 3) + (80 × 3) + (2 × 3) = 900 + 240 + 6 = **1146**."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Which class is scheduled on Monday, Thursday and Sunday at 7:00 am? What time is boxing on Wednesdays? What time do you think the gym closes on Wednesdays and Saturdays? Explain why.",
        table: [["Class", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          ["Cardio", "7:00 am", "6:00 am", "9:00 am", "7:00 am", "6:00 am", "9:00 am", "7:00 am"],
          ["Pilates", "9:00 am", "8:15 am", "10:00 am", "9:00 am", "8:15 am", "10:00 am", "9:00 am"],
          ["Core workout", "2:00 pm", "3:00 pm", "4:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "2:00 pm"],
          ["Boxing", "4:30 pm", "3:30 pm", "6:00 pm", "4:30 pm", "3:30 pm", "6:00 pm", "4:30 pm"]],
        interact: [{ kind: "choose", rows: [
          { t: "7:00 am on Mon, Thu and Sun", options: ["Cardio", "Pilates", "Core workout", "Boxing"], a: 0 },
          { t: "Boxing on Wednesday", options: ["4:30 pm", "3:30 pm", "6:00 pm"], a: 2 },
          { t: "Gym closes on Wed and Sat", options: ["Before 4:00 pm", "Some time after 6:00 pm", "At 10:00 am"], a: 1 }] }],
        answer: "**Cardio** · Boxing on Wednesday is at **6:00 pm** · The gym probably closes **some time after 6:00 pm** (for example 7:00 pm), because boxing at 6:00 pm is the last class on those days and it needs time to finish.",
        explain: "The closing time isn't on the timetable, so any time after the 6:00 pm boxing class finishes is reasonable."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "1600 mm converted to metres is:",
        options: ["16 m", "1.6 m", "160 m", "0.16 m"],
        answer: 1,
        explain: "1000 mm = 1 m, so divide by 1000: 1600 ÷ 1000 = 1.6 m.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 1600, shift: true, hint: "Divide by 1000: move every digit 3 places to the right." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Which formal unit of measurement would be appropriate to measure the capacity of these containers?",
        img: "u9-containers.png",
        interact: [{ kind: "choose", rows: [
          { t: "1. Glass", options: ["Millilitres (mL)", "Litres (L)"], a: 0 },
          { t: "2. Fish tank", options: ["Millilitres (mL)", "Litres (L)"], a: 1 },
          { t: "3. Bucket", options: ["Millilitres (mL)", "Litres (L)"], a: 1 },
          { t: "4. Perfume bottle", options: ["Millilitres (mL)", "Litres (L)"], a: 0 }] }],
        answer: "Glass: **mL** · Fish tank: **L** · Bucket: **L** · Perfume bottle: **mL**. Small containers hold less than a litre, so millilitres are more useful."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "This dot plot shows the expected frequency of this spinner if there were 12 trials. The second dot plot shows the observed frequency. Explain why the observed frequency is different to the expected frequency.",
        interact: [
          { kind: "bargraph", max: 8, step: 1, ylabel: "Frequency", xlabel: "Colour", label: "Expected frequency, 12 spins",
            series: [{ l: "Expected", c: "#8A3CC4" }],
            groups: [{ l: "Orange", v: [4], c: "#FF8F45" }, { l: "Green", v: [4], c: "#7ED957" }, { l: "Blue", v: [4], c: "#45BFFF" }] },
          { kind: "bargraph", max: 8, step: 1, ylabel: "Frequency", xlabel: "Colour", label: "Observed frequency, 12 spins",
            series: [{ l: "Observed", c: "#8A3CC4" }],
            groups: [{ l: "Orange", v: [2], c: "#FF8F45" }, { l: "Green", v: [7], c: "#7ED957" }, { l: "Blue", v: [3], c: "#45BFFF" }] },
          { kind: "choose", rows: [{ t: "Why are they different?", options: ["Each spin is random, so in a small number of trials the results can vary from what we expect", "The spinner must be unfair because green came up most", "Expected frequency is always wrong"], a: 0 }] }
        ],
        answer: "The spinner has 3 equal parts, so we **expect** 4 of each in 12 spins. The **observed** results (orange 2, green 7, blue 3) differ because each spin is random. With more trials, the results usually get closer to the expected frequency.",
        explain: "The dot plots are redrawn as column graphs with the same counts."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Solve: 746 × 5. Communicate your strategy.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 746, shift: true, hint: "One strategy: multiply by 10, then halve." },
          { kind: "input", fields: [{ label: "746 × 10 =", value: 7460 }, { label: "746 × 5 =", value: 3730 }] }
        ],
        answer: "746 × 10 = 7460, and 5 is half of 10, so 7460 ÷ 2 = **3730**.",
        explain: "Another strategy: (700 × 5) + (40 × 5) + (6 × 5) = 3500 + 200 + 30 = 3730."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Which graph is more appropriate to display this type of data? Communicate your reasoning.",
        interact: [
          { kind: "bargraph", max: 12000, step: 2000, xlabel: "Days of the week", label: "Daily number of steps (column graph)",
            series: [{ l: "Steps", c: "#1565C0" }],
            groups: [{ l: "Mon", v: [4500] }, { l: "Tue", v: [6200] }, { l: "Wed", v: [5800] }, { l: "Thu", v: [7000] }, { l: "Fri", v: [8500] }, { l: "Sat", v: [10500] }, { l: "Sun", v: [9000] }] },
          { kind: "bargraph", line: true, max: 12000, step: 2000, xlabel: "Days of the week", label: "Daily number of steps (line graph)",
            series: [{ l: "Steps", c: "#1565C0" }],
            groups: [{ l: "Mon", v: [4500] }, { l: "Tue", v: [6200] }, { l: "Wed", v: [5800] }, { l: "Thu", v: [7000] }, { l: "Fri", v: [8500] }, { l: "Sat", v: [10500] }, { l: "Sun", v: [9000] }] },
          { kind: "choose", rows: [
            { t: "More appropriate", options: ["Column graph", "Line graph"], a: 0 },
            { t: "Why?", options: ["Each day's steps is a separate count, so nothing happens between the points", "Line graphs are always better", "The columns are taller"], a: 0 }] }
        ],
        answer: "The **column graph**. Each day's step count is a separate total (discrete data), so there are no values in between Monday and Tuesday for a line to show. Line graphs suit data that changes continuously, such as temperature through a day.",
        explain: "The step counts are read from the slide's graphs to the nearest 100. Some classes may argue for the line graph because it shows the trend across the week; accept that reasoning in discussion."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "0.506 is greater than 0.56. Communicate your reasoning.",
        answer: false,
        explain: "Compare the hundredths: 0.506 has 0 hundredths and 0.56 has 6. 0.56 = 0.560, which is more than 0.506.",
        interact: [{ kind: "numberline", min: 0.5, max: 0.6, ticks: 100, labelStep: 0.05, tol: 0.005, items: [["0.506", 0.506], ["0.56", 0.56]] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Order these capacities from smallest to largest: 3.05 L, 3075 mL, 3.2 L, 2990 mL, 3.125 L",
        interact: [{ kind: "order", items: ["3.05 L", "3075 mL", "3.2 L", "2990 mL", "3.125 L"], answer: [3, 0, 1, 4, 2] }],
        answer: "2990 mL, 3.05 L, 3075 mL, 3.125 L, 3.2 L. In millilitres: 2990, 3050, 3075, 3125, 3200."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "How would you change this spinner so that there is a 1 in 4 chance of landing on red?",
        interact: [
          { kind: "classify", view: [300, 300], label: "Spinner with 8 equal parts", hint: "Tap Red or Blue, then tap parts to recolour the spinner.",
            cats: [{ k: "r", t: "Red", c: "#D6163B" }, { k: "b", t: "Blue", c: "#003F63" }],
            shapes: [
              { p: "150.0,150.0 150.0,30.0 157.8,30.3 165.7,31.0 173.4,32.3 181.1,34.1 188.6,36.4 195.9,39.1 203.1,42.4 210.0,46.1 216.7,50.2 223.1,54.8 229.1,59.8 234.9,65.1", fill: "#D6163B" },
              { p: "150.0,150.0 234.9,65.1 240.2,70.9 245.2,76.9 249.8,83.3 253.9,90.0 257.6,96.9 260.9,104.1 263.6,111.4 265.9,118.9 267.7,126.6 269.0,134.3 269.7,142.2 270.0,150.0", fill: "#D6163B" },
              { p: "150.0,150.0 270.0,150.0 269.7,157.8 269.0,165.7 267.7,173.4 265.9,181.1 263.6,188.6 260.9,195.9 257.6,203.1 253.9,210.0 249.8,216.7 245.2,223.1 240.2,229.1 234.9,234.9", fill: "#D6163B" },
              { p: "150.0,150.0 234.9,234.9 229.1,240.2 223.1,245.2 216.7,249.8 210.0,253.9 203.1,257.6 195.9,260.9 188.6,263.6 181.1,265.9 173.4,267.7 165.7,269.0 157.8,269.7 150.0,270.0", fill: "#D6163B" },
              { p: "150.0,150.0 150.0,270.0 142.2,269.7 134.3,269.0 126.6,267.7 118.9,265.9 111.4,263.6 104.1,260.9 96.9,257.6 90.0,253.9 83.3,249.8 76.9,245.2 70.9,240.2 65.1,234.9", fill: "#003F63" },
              { p: "150.0,150.0 65.1,234.9 59.8,229.1 54.8,223.1 50.2,216.7 46.1,210.0 42.4,203.1 39.1,195.9 36.4,188.6 34.1,181.1 32.3,173.4 31.0,165.7 30.3,157.8 30.0,150.0", fill: "#003F63" },
              { p: "150.0,150.0 30.0,150.0 30.3,142.2 31.0,134.3 32.3,126.6 34.1,118.9 36.4,111.4 39.1,104.1 42.4,96.9 46.1,90.0 50.2,83.3 54.8,76.9 59.8,70.9 65.1,65.1", fill: "#003F63" },
              { p: "150.0,150.0 65.1,65.1 70.9,59.8 76.9,54.8 83.3,50.2 90.0,46.1 96.9,42.4 104.1,39.1 111.4,36.4 118.9,34.1 126.6,32.3 134.3,31.0 142.2,30.3 150.0,30.0", fill: "#003F63", deco: "<circle cx='150' cy='150' r='120' fill='none' stroke='#FFFFFF' stroke-width='3' pointer-events='none'/><line x1='150' y1='150' x2='150.0' y2='30.0' stroke='#FFFFFF' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='234.9' y2='65.1' stroke='#FFFFFF' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='270.0' y2='150.0' stroke='#FFFFFF' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='234.9' y2='234.9' stroke='#FFFFFF' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='150.0' y2='270.0' stroke='#FFFFFF' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='65.1' y2='234.9' stroke='#FFFFFF' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='30.0' y2='150.0' stroke='#FFFFFF' stroke-width='2.5' pointer-events='none'/><line x1='150' y1='150' x2='65.1' y2='65.1' stroke='#FFFFFF' stroke-width='2.5' pointer-events='none'/><circle cx='150' cy='150' r='7' fill='#fff' stroke='#1B1B1B' stroke-width='2.5' pointer-events='none'/><circle cx='150' cy='150' r='124' fill='none' stroke='#1B1B1B' stroke-width='4' pointer-events='none'/>" }] },
          { kind: "input", fields: [{ label: "Red parts needed out of 8", value: 2 }, { label: "Red parts to change to blue", value: 2 }] }
        ],
        answer: "Now 4 of the 8 parts are red (a 1 in 2 chance). For a 1 in 4 chance, **2 of the 8 parts** should be red, so change **2 red parts to blue**.",
        explain: "Other changes also work, for example redrawing the spinner with 4 equal parts and colouring 1 red. The boxes check the 8-part version."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw an array to model: 26 ÷ 7. Record the related multiplication fact.",
        interact: [
          { kind: "array", rows: 1, cols: 7, fixCols: true, max: 12, showTotal: true, target: [3, 7], hint: "Make rows of 7. How many full rows fit in 26? How many are left over?" },
          { kind: "input", fields: [{ label: "26 ÷ 7 =", value: 3 }, { label: "remainder", value: 5 }, { label: "7 × 3 + ___ = 26", value: 5 }] }
        ],
        answer: "3 rows of 7 is 21, with **5 left over**: 26 ÷ 7 = **3 remainder 5**. Related fact: **7 × 3 + 5 = 26**.",
        explain: "26 is not a multiple of 7, so the array has 3 full rows of 7 and 5 extra dots. The related fact includes the remainder."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "How many years are between the intervals on the timeline? What year did I start playing soccer? How old was I? What year would be next on the timeline?",
        img: "u9-timeline.png",
        interact: [
          { kind: "jumps", start: 1980, steps: [10], hint: "Jump from 1980 along the timeline, one interval at a time." },
          { kind: "input", fields: [{ label: "Years between intervals", value: 10 }, { label: "Started soccer", value: 2000 }, { label: "Age", value: 20 }, { label: "Next year on the timeline", value: 2030 }] }
        ],
        answer: "Each interval is **10 years**. I started soccer in **2000**, aged **20** (2000 − 1980). The next year on the timeline is **2030**."
      }
    ]
  ]
});
