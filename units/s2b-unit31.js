/*
  Stage 2 Year B, Unit 31 — Review of learning (Term 3, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
(() => {
  // See-through 3D object for counting edges and vertices with classify.
  // pts: [x, y] vertices; edges: [i, j, hidden?]; faces: [[indices], fill] drawn behind (not tappable).
  const solid = (view, pts, edges, faces, hint) => {
    const P = (a) => a.map((k) => pts[k].join(",")).join(" ");
    const deco = faces.map(([ix, f]) => "<polygon points='" + P(ix) + "' fill='" + f + "' stroke='none' pointer-events='none'/>").join("");
    const quad = ([x1, y1], [x2, y2], w) => {
      const L = Math.hypot(x2 - x1, y2 - y1), nx = (-(y2 - y1) / L) * w / 2, ny = ((x2 - x1) / L) * w / 2;
      return [[x1 + nx, y1 + ny], [x2 + nx, y2 + ny], [x2 - nx, y2 - ny], [x1 - nx, y1 - ny]].map((q) => q.map((v) => v.toFixed(1)).join(",")).join(" ");
    };
    const shapes = [{ circle: [0, 0, 0], fill: "none", deco }];
    edges.forEach(([i, j, hid]) => shapes.push({ p: quad(pts[i], pts[j], 9), a: "e", fill: hid ? "#B9C3D6" : "#17233F",
      deco: hid ? "<line x1='" + pts[i][0] + "' y1='" + pts[i][1] + "' x2='" + pts[j][0] + "' y2='" + pts[j][1] + "' stroke='#fff' stroke-width='3' stroke-dasharray='6 6' pointer-events='none'/>" : "" }));
    pts.forEach(([x, y]) => shapes.push({ circle: [x, y, 11], a: "v", fill: "#5B6B8C" }));
    return { kind: "classify", view, label: "See-through 3D object with tappable edges and vertices", hint,
      cats: [{ k: "e", t: "Edges", c: "#2F6FE4" }, { k: "v", t: "Vertices", c: "#F2994A" }], shapes };
  };

  // Triangular pyramid: apex 0, base 1 (left), 2 (front), 3 (right, back).
  const triPyr = solid([560, 260], [[150, 22], [40, 198], [170, 238], [262, 188]].map(([x, y]) => [x + 130, y]),
    [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [1, 3, true]],
    [[[0, 1, 2], "#CDEFE6"], [[0, 2, 3], "#9FD9CA"]],
    "Choose Edges and tap every edge (the dashed one is at the back). Then choose Vertices and tap every corner.");

  // Pentagonal prism: top pentagon 0–4, bottom pentagon 5–9.
  const pent = [];
  [70, 270].forEach((cy) => [18, 90, 162, 234, 306].forEach((d) => { const r = (d * Math.PI) / 180; pent.push([Math.round(290 + 112 * Math.cos(r)), Math.round(cy + 38 * Math.sin(r))]); }));
  const pentPrism = solid([580, 330], pent,
    [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 6], [6, 7], [7, 8, true], [8, 9, true], [9, 5, true], [0, 5], [1, 6], [2, 7], [3, 8, true], [4, 9, true]],
    [[[0, 1, 2, 3, 4], "#FFF6C7"], [[0, 1, 6, 5], "#FCE9A6"], [[1, 2, 7, 6], "#FFF1BD"]],
    "Choose Edges and tap every edge, including the dashed ones at the back. Then choose Vertices and tap every corner.");

  UNITS.push({
    stage: 2, ab: "B", term: 3, ls: 1, unit: 31,
    img: "img/s2/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 31 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1
      [
        {
          type: "mc", focus: "Multiplicative relations B",
          prompt: "Which number is not a multiple of 6? Communicate your reasoning.",
          options: ["12", "16", "18", "30"],
          answer: 1,
          explain: "Count by sixes: 6, 12, 18, 24, 30. 16 is skipped (it sits between 12 and 18), so it is not a multiple of 6.",
          interact: [{ kind: "jumps", start: 0, end: 30, steps: [6], hint: "Jump in sixes from 0. Which number do you never land on?" }]
        },
        {
          type: "sr", focus: "Representing numbers using place value A",
          prompt: "Record 7354 using standard place value form.",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O"], start: 0, target: 7354, need: "standard", hint: "Use + to build 7354 in the chart." },
            { kind: "input", fields: [{ label: "7354 =", value: 7000 }, { label: "+", value: 300 }, { label: "+", value: 50 }, { label: "+", value: 4 }] }
          ],
          answer: "7354 = **7000 + 300 + 50 + 4** (7 thousands, 3 hundreds, 5 tens and 4 ones)."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "What everyday objects in our classroom can be used as an informal way to compare various angles to a right angle?",
          interact: [
            { kind: "angle", start: 60, hint: "Drag the blue arm. When is it a right angle, like the corner of a book?" },
            { kind: "select", hint: "Tap every object that has a right-angle corner you could use as a tester.", items: [
              ["The corner of a book", true], ["The corner of a sheet of paper", true], ["A ball", false], ["The corner of a whiteboard", true], ["A paper plate", false], ["The corner of a door or window", true]] }
          ],
          answer: "Anything with a square corner: the corner of a **book**, a **sheet of paper**, a whiteboard, a door, a window or a tile. Hold the corner against an angle to see if it is smaller than, larger than or the same as a right angle.",
          explain: "Answers vary. Round objects like a ball or a plate have no corner to test with."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
          prompt: "How many faces, edges and vertices does a triangular pyramid have?",
          interact: [
            triPyr,
            { kind: "input", fields: [{ label: "Faces", value: 4 }, { label: "Edges", value: 6 }, { label: "Vertices", value: 4 }] }
          ],
          answer: "**4 faces** (all triangles: a triangular base and 3 triangles meeting at the apex), **6 edges** and **4 vertices**."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
          prompt: "What are the differences between these 3D objects?",
          img: "u31-pyr-prism.png",
          interact: [{ kind: "select", hint: "Tap every true statement about how the objects are different.", items: [
            ["The pyramid has 1 triangular base. The prism has 2 matching triangular ends.", true],
            ["The pyramid's other faces are triangles that meet at a point. The prism's other faces are rectangles.", true],
            ["The pyramid has 4 faces. The prism has 5 faces.", true],
            ["The pyramid has 4 vertices. The prism has 6 vertices.", true],
            ["They have the same number of edges.", false]] }],
          answer: "The left object is a **triangular pyramid**: 1 triangular base, 3 triangular faces meeting at an apex, 4 faces, 6 edges, 4 vertices. The right object is a **triangular prism**: 2 matching triangular ends joined by 3 rectangles, 5 faces, 9 edges, 6 vertices."
        }
      ],
      // Review 2
      [
        {
          type: "tf", focus: "Multiplicative relations B",
          prompt: "If I start at 6 and count forward in threes, my sequence would be: 6, 9, 12, 15, 18",
          answer: true,
          explain: "6 + 3 = 9, 9 + 3 = 12, 12 + 3 = 15, 15 + 3 = 18. Each term is 3 more than the one before.",
          interact: [{ kind: "jumps", start: 6, end: 18, steps: [3], hint: "Start at 6 and jump in threes. Do you land on 9, 12, 15 and 18?" }]
        },
        {
          type: "sr", focus: "Representing numbers using place value B",
          prompt: "What is the largest and smallest number you can make by rearranging all these digits: 3, 5, 2, 8, 1? Communicate your reasoning.",
          interact: [
            { kind: "order", items: ["3", "5", "2", "8", "1"], answer: [3, 1, 0, 2, 4], hint: "Make the largest number: tap the digits from the biggest to the smallest." },
            { kind: "input", fields: [{ label: "Largest", value: 85321 }, { label: "Smallest", value: 12358 }] }
          ],
          answer: "Largest: **85 321** (biggest digit in the ten thousands place, then the next biggest, and so on). Smallest: **12 358** (smallest digit first)."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Using the angle testers, are angle a and angle b smaller, larger or the same as a right angle? What are the names of these 2 angles?",
          interact: [
            { kind: "corners", view: [440, 200], r: 24, q: 44, label: "A pentagon with angle a and a trapezium with angle b", hint: "Tap corner a, then corner b, to lay a right-angle tester on it. Tap again to name the angle.",
              shapes: [
                { p: [[40, 172], [140, 172], [171, 77], [90, 18], [9, 77]], fill: "#4BA3BE", marks: [{ v: 0, l: "a" }] },
                { p: [[262, 172], [420, 172], [392, 72], [292, 72]], fill: "#8A4FF0", marks: [{ v: 0, l: "b" }] }] },
            { kind: "choose", rows: [
              { t: "Angle a is", options: ["smaller than a right angle", "the same as a right angle", "larger than a right angle"], a: 2 },
              { t: "Angle b is", options: ["smaller than a right angle", "the same as a right angle", "larger than a right angle"], a: 0 },
              { t: "Name of angle a", options: ["acute", "right", "obtuse"], a: 2 },
              { t: "Name of angle b", options: ["acute", "right", "obtuse"], a: 0 }] }
          ],
          answer: "Angle a is **larger** than a right angle, so it is an **obtuse** angle. Angle b is **smaller** than a right angle, so it is an **acute** angle.",
          explain: "On the slide the pentagon pokes out past the tester's upright arm (larger), and the trapezium's slanted side sits inside it (smaller)."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
          prompt: "How many faces, edges and vertices does a pentagonal prism have?",
          interact: [
            pentPrism,
            { kind: "input", fields: [{ label: "Faces", value: 7 }, { label: "Edges", value: 15 }, { label: "Vertices", value: 10 }] }
          ],
          answer: "**7 faces** (2 pentagons and 5 rectangles), **15 edges** (5 on top, 5 on the bottom, 5 joining them) and **10 vertices** (5 on top, 5 on the bottom)."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: Area",
          prompt: "What is the same and what is different between these 2 shapes?",
          interact: [
            { kind: "areagrid", cells: ["111111", "111111", "111111"], size: 40 },
            { kind: "areagrid", cells: ["11", "11", "11", "11", "11", "11", "11", "11", "11"], size: 34 },
            { kind: "input", fields: [{ label: "Wide rectangle area", value: 18, suffix: "squares" }, { label: "Tall rectangle area", value: 18, suffix: "squares" }] },
            { kind: "select", hint: "Tap every true statement.", items: [
              ["Both shapes are rectangles.", true], ["Both shapes have an area of 18 squares.", true], ["The shapes have different lengths and widths.", true], ["The shapes have the same perimeter.", false]] }
          ],
          answer: "Same: both are **rectangles** with an **area of 18 squares**. Different: the wide (orange) one is 6 squares by 3 squares, the tall (blue) one is 2 squares by 9 squares, so they look different and have different perimeters (18 and 22 units).",
          explain: "The grids are the slide's rectangles: orange 6 × 3 and blue 2 × 9."
        }
      ],
      // Review 3
      [
        {
          type: "mc", focus: "Multiplicative relations B",
          prompt: "Which number is a multiple of both 5 and 7?",
          options: ["10", "14", "35", "21"],
          answer: 2,
          explain: "5 × 7 = 35, so 35 is in the fives (5, 10, … 35) and the sevens (7, 14, 21, 28, 35). 10 is only a multiple of 5. 14 and 21 are only multiples of 7.",
          interact: [{ kind: "numchart", from: 1, to: 40, answer: [35], hint: "Tap the multiples of 7. Which one is also a multiple of 5?" }]
        },
        {
          type: "sr", focus: "Representing numbers using place value B",
          prompt: "Record the number that has been partitioned in non-standard form: 60 hundreds + 93 tens + 5 ones",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O"], start: { H: 60, T: 93, O: 5 }, target: 6935, need: "standard", hint: "The chart shows 60 hundreds, 93 tens and 5 ones. Group 10 into 1 until every column has 9 or fewer." },
            { kind: "input", fields: [{ label: "Number", value: 6935 }] }
          ],
          answer: "**6935**. 60 hundreds = 6000, 93 tens = 930 and 5 ones = 5. 6000 + 930 + 5 = 6935."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "A quarter turn forms a right angle. Describe these 3 angles in comparison to a quarter turn: acute, reflex and full rotation.",
          img: "u31-angles3.png",
          interact: [
            { kind: "angle", start: 45, reflex: true, names: true, hint: "Drag the blue arm all the way round. Watch the name change." },
            { kind: "choose", rows: [
              { t: "Acute", options: ["less than a quarter turn", "between a half turn and a full turn", "exactly 4 quarter turns"], a: 0 },
              { t: "Reflex", options: ["less than a quarter turn", "between a half turn and a full turn", "exactly 4 quarter turns"], a: 1 },
              { t: "Full rotation", options: ["less than a quarter turn", "between a half turn and a full turn", "exactly 4 quarter turns"], a: 2 }] }
          ],
          answer: "Acute: **less than a quarter turn**. Reflex: **more than a half turn (2 quarter turns) but less than a full turn**. Full rotation: **4 quarter turns**, back to where it started."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
          prompt: "Sketch a square-based pyramid.",
          interact: [
            { kind: "sketch", grid: "square" },
            { kind: "select", hint: "Tap every feature your sketch should show.", items: [
              ["A square base", true], ["4 triangular faces that meet at one point (the apex)", true], ["2 matching square ends", false], ["5 vertices", true], ["Dashed lines for the edges at the back", true]] }
          ],
          answer: "Draw a **square base** (it looks like a slanted square, a parallelogram, in a 3D sketch) and a point above the middle. Join each corner of the base to the point: **4 triangular faces**, 5 faces, 8 edges and 5 vertices. Use dashed lines for hidden edges."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "Record the length of the leaf in centimetres. Record the height of the tree in metres.",
          img: "u31-leaf-tree.png",
          interact: [
            { kind: "marker", min: 0, max: 5, ticks: 1, minor: 10, target: 2.5, tol: 0.1, label: "25 mm", hint: "Each centimetre has 10 millimetres. Slide the pin to 25 mm." },
            { kind: "jumps", start: 0, end: 500, steps: [100], hint: "100 cm = 1 metre. How many jumps of 100 cm make 500 cm?" },
            { kind: "input", fields: [{ label: "Leaf", value: 2.5, suffix: "cm" }, { label: "Tree", value: 5, suffix: "m" }] }
          ],
          answer: "Leaf: 25 mm = **2.5 cm** (2 cm and 5 mm). Tree: 500 cm = **5 m** (100 cm in each metre)."
        }
      ],
      // Review 4
      [
        {
          type: "tf", focus: "Multiplicative relations B",
          prompt: "If I double each term in my sequence: 3, 6, 9, I get multiples of 6.",
          answer: true,
          explain: "Double 3 = 6, double 6 = 12, double 9 = 18. 6, 12 and 18 are all multiples of 6, because double 3 is 6.",
          interact: [{ kind: "cells", cols: 4, msg: "Double each number in the top row.", grid: [["#Term", "3", "6", "9"], ["#Double", { v: 6 }, { v: 12 }, { v: 18 }]] }]
        },
        {
          type: "sr", focus: "Representing numbers using place value B",
          prompt: "Is 0.7 smaller, larger or equal to 0.70? Communicate your reasoning.",
          interact: [
            { kind: "pv", cols: ["O", "t", "h"], start: 0.7, hint: "This is 0.7. How many hundredths are there? What does 0.70 look like?" },
            { kind: "choose", rows: [{ t: "0.7 is ___ 0.70", options: ["smaller than", "larger than", "equal to"], a: 2 }] }
          ],
          answer: "**Equal.** 0.7 is 7 tenths. 0.70 is 7 tenths and 0 hundredths, which is also 70 hundredths. The zero at the end doesn't change the value."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Name the angle that is the same as: 1 quarter turn, 2 quarter turns, 3 quarter turns, 4 quarter turns.",
          interact: [
            { kind: "angle", start: 90, reflex: true, names: true, hint: "Turn the blue arm one quarter turn at a time." },
            { kind: "choose", rows: [
              { t: "1 quarter turn", options: ["acute", "right", "straight", "reflex", "revolution"], a: 1 },
              { t: "2 quarter turns", options: ["acute", "right", "straight", "reflex", "revolution"], a: 2 },
              { t: "3 quarter turns", options: ["acute", "right", "straight", "reflex", "revolution"], a: 3 },
              { t: "4 quarter turns", options: ["acute", "right", "straight", "reflex", "revolution"], a: 4 }] }
          ],
          answer: "1 quarter turn: **right angle** · 2 quarter turns: **straight angle** (a half turn) · 3 quarter turns: **reflex angle** · 4 quarter turns: **revolution** (a full turn)."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
          prompt: "Sketch a square-based prism.",
          interact: [
            { kind: "sketch", grid: "square" },
            { kind: "select", hint: "Tap every feature your sketch should show.", items: [
              ["2 matching square ends", true], ["Rectangles (or squares) joining the ends", true], ["All the faces meeting at one point", false], ["8 vertices", true], ["12 edges", true]] }
          ],
          answer: "Draw a **square**, then a matching square behind it, and join the matching corners. It has **2 square ends** joined by 4 rectangles: 6 faces, 12 edges and 8 vertices.",
          explain: "If the rectangles are also squares, the prism is a cube. A cube is a square-based prism too."
        },
        {
          type: "sr", focus: "Geometric measure B: Position",
          prompt: "I am facing north. To face east I would make a quarter turn. Facing the compass point south, where would I be facing after a half turn? Explain what happens when you do a full turn from any compass point.",
          img: "u31-compass.png",
          interact: [
            { kind: "turns", step: 90, hint: "The arrow starts facing north. Two quarter turns make a half turn. Four make a full turn." },
            { kind: "choose", rows: [
              { t: "Facing south, after a half turn I face", options: ["north", "east", "south", "west"], a: 0 },
              { t: "After a full turn from any point I face", options: ["the opposite way", "a quarter turn away", "the same way I started"], a: 2 }] }
          ],
          answer: "Facing south, a half turn leaves me facing **north**. A full turn is 4 quarter turns, so I end up facing **the same compass point I started at**."
        }
      ],
      // Review 5
      [
        {
          type: "mc", focus: "Multiplicative relations B",
          prompt: "The sixth multiple of 4 is 24. What is the twelfth multiple of 4?",
          options: ["30", "48", "28", "16"],
          answer: 1,
          explain: "12 is double 6, so the twelfth multiple is double the sixth: 24 + 24 = 48. Or 12 × 4 = 48.",
          interact: [{ kind: "jumps", start: 0, end: 48, steps: [4, 24], hint: "Jump in fours from 0 and count 12 jumps. Or jump 24, then another 24." }]
        },
        {
          type: "sr", focus: "Representing numbers using place value B",
          prompt: "List in order the decimals between 0.1 and 0.2. Communicate your reasoning.",
          interact: [
            { kind: "numberline", min: 0.1, max: 0.2, ticks: 100, labelStep: 0.1, tol: 0.004, items: [["0.15", 0.15], ["0.11", 0.11], ["0.18", 0.18], ["0.13", 0.13], ["0.19", 0.19], ["0.12", 0.12], ["0.16", 0.16], ["0.14", 0.14], ["0.17", 0.17]] },
            { kind: "cells", cols: 11, w: 58, msg: "Count on by one hundredth each time.", grid: [["0.1", { v: 0.11 }, { v: 0.12 }, { v: 0.13 }, { v: 0.14 }, { v: 0.15 }, { v: 0.16 }, { v: 0.17 }, { v: 0.18 }, { v: 0.19 }, "0.2"]] }
          ],
          answer: "**0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19**. The tenth from 0.1 to 0.2 is split into 10 hundredths.",
          explain: "The slide's bar splits the gap into 10 equal parts, so the answer lists the hundredths."
        },
        {
          type: "sr", focus: "Non-spatial measure B",
          prompt: "Record this in digital time. How many seconds are there in a minute?",
          interact: [
            { kind: "clock", time: "2:30" },
            { kind: "input", fields: [{ label: "Digital time", accept: ["2:30", "02:30", "2.30", "2:30 am", "2:30 pm", "2:30am", "2:30pm"], placeholder: "h:mm" }, { label: "Seconds in a minute", value: 60 }] }
          ],
          answer: "**2:30** (half past 2). There are **60 seconds** in a minute.",
          explain: "The time is read from the slide's clock: the minute hand points to 6 and the hour hand is halfway between 2 and 3."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: Volume",
          prompt: "Record the capacity of a 2-litre milk container using the abbreviation for litres.",
          img: "u31-milk.png",
          interact: [{ kind: "choose", rows: [{ t: "2 litres =", options: ["2 mL", "2 L", "2 kg", "2 m"], a: 1 }] }],
          answer: "**2 L**. The abbreviation for litres is a capital L."
        },
        {
          type: "sr", focus: "Geometric measure A: Position",
          prompt: "To face east, I would make a quarter turn from north. This turn forms a right angle. Record other examples of right angles between compass points. Communicate your reasoning.",
          img: "u31-compass.png",
          interact: [
            { kind: "turns", step: 90, hint: "Each tap is a quarter turn clockwise: a right angle." },
            { kind: "select", hint: "Tap every turn that makes a right angle.", items: [
              ["East to south", true], ["South to west", true], ["West to north", true], ["North to south", false], ["North to west", true], ["East to west", false]] }
          ],
          answer: "**East to south, south to west, west to north**, and turning the other way, **north to west** (also west to south, south to east, east to north). Each is a quarter turn. North to south and east to west are half turns (straight angles)."
        }
      ],
      // Review 6
      [
        {
          type: "tf", focus: "Multiplicative relations B",
          prompt: "There are 20 students playing sport in groups of 4. Two more groups join in. The total number of students is now 28.",
          answer: true,
          explain: "20 students is 5 groups of 4. Two more groups is 2 × 4 = 8 more students. 20 + 8 = 28, or 7 groups of 4 = 28.",
          cubes: { ops: ["×", "+"], solve: [{ t: "Add the new groups", s: "2 groups of 4 is 8 students. 20 + 8 = 28." }, { t: "Count the groups", s: "20 ÷ 4 = 5 groups. 5 + 2 = 7 groups. 7 × 4 = 28." }] },
          interact: [{ kind: "array", rows: 7, cols: 4, showTotal: true, hint: "Each row is a group of 4. The first 5 rows are the 20 students. Add 2 more rows." }]
        },
        {
          type: "sr", focus: "Representing numbers using place value B",
          prompt: "Arrange the following decimals in ascending order: 0.3, 0.7, 0.31, 0.79, 0.8",
          interact: [{ kind: "order", items: ["0.3", "0.7", "0.31", "0.79", "0.8"], answer: [0, 2, 1, 3, 4], hint: "Ascending means smallest to largest. Compare the tenths first, then the hundredths." }],
          answer: "**0.3, 0.31, 0.7, 0.79, 0.8**. 0.3 = 0.30, which is less than 0.31. 0.79 is less than 0.8 = 0.80."
        },
        {
          type: "sr", focus: "Non-spatial measure A: Time",
          prompt: "My journey to work usually takes one and a half hours. How many half-hours is that in total? If I took an extra half an hour to get there, how long is my total journey now?",
          cubes: { ops: ["+"], also: ["×"], solve: [{ t: "Count half-hours", s: "1 hour = 2 half-hours, plus 1 more half-hour = 3 half-hours. Add 1 more half-hour: 4 half-hours = 2 hours." }, { t: "Add the times", s: "1 and a half hours + half an hour = 2 hours, because two halves make a whole hour." }] },
          interact: [
            { kind: "jumps", start: 0, steps: [0.5], hint: "Each jump is half an hour (0.5 hours). How many jumps make 1.5 hours? Add one more." },
            { kind: "input", fields: [{ label: "Half-hours", value: 3 }, { label: "Total journey", value: 2, suffix: "hours" }] }
          ],
          answer: "**3 half-hours**. With an extra half hour, the journey takes **2 hours**."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "The juice popper has a capacity of 250 mL. How many poppers will be needed to fill a 1 L jug? Communicate your reasoning.",
          img: "u31-popper-jug.png",
          cubes: { ops: ["÷"], also: ["+", "×"], note: "Change 1 L into 1000 mL first.", solve: [{ t: "Count on", s: "250, 500, 750, 1000 mL. That is 4 poppers." }, { t: "Halve and halve again", s: "Half of 1000 mL is 500 mL. Half of 500 mL is 250 mL. So 250 mL is a quarter of a litre, and 4 quarters make 1 L." }] },
          interact: [
            { kind: "bar", whole: { v: 1000, l: "1 L = 1000 mL" }, parts: [{ v: 250, l: "250 mL" }, { v: 250, l: "250 mL", hide: true }, { v: 250, l: "250 mL", hide: true }, { v: 250, l: "250 mL", hide: true }], hint: "The top bar is the jug. Each part is one popper. Tap a ? to fill it." },
            { kind: "input", fields: [{ label: "Poppers", value: 4 }] }
          ],
          answer: "**4 poppers**. 1 L = 1000 mL and 250 + 250 + 250 + 250 = 1000 mL."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: Volume",
          prompt: "1 cube has a volume of 1 cubic centimetre. What is the volume of each multi-cube object below?",
          img: "u31-cubes.png",
          interact: [{ kind: "input", fields: [{ label: "A", value: 4, suffix: "cubic cm" }, { label: "B", value: 5, suffix: "cubic cm" }] }],
          answer: "A: **4 cubic centimetres** (3 cubes you can see, plus 1 hidden cube holding up the top one). B: **5 cubic centimetres** (3 cubes in the front row, 1 on top and 1 behind).",
          explain: "In A the top cube sits in the back row, one layer up, so a hidden cube must be under it. Some students may say 3. Build it with cubes to check."
        }
      ],
      // Review 7
      [
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "The eighth multiple of 6 is 48. Which of these represent it? Select every correct answer: 8 sixes, 8 + 6, 48 − 6, 8 × 6.",
          interact: [
            { kind: "array", rows: 8, cols: 6, showTotal: true, hint: "8 rows of 6. Count the total." },
            { kind: "select", hint: "Tap every one that equals 48.", items: [["8 sixes", true], ["8 + 6", false], ["48 − 6", false], ["8 × 6", true]] }
          ],
          answer: "**8 sixes** and **8 × 6** both make 48. 8 + 6 = 14 and 48 − 6 = 42.",
          explain: "The slide is multiple choice but has two correct options (A and D), so it is a select-all question here."
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Use the commutative property to solve: 16 × 5 = (2 × 8) × 5",
          interact: [
            { kind: "array", rows: 16, cols: 5, showTotal: true, hint: "16 rows of 5. Split the rows into 2 groups of 8." },
            { kind: "input", fields: [{ label: "(2 × 8) × 5 = 8 × (2 × 5) = 8 ×", value: 10 }, { label: "16 × 5 =", value: 80 }] }
          ],
          answer: "(2 × 8) × 5 = 8 × (2 × 5) = 8 × 10 = **80**. Changing the order lets us do 2 × 5 = 10 first, which is easy to multiply by.",
          explain: "Swapping the order of the factors is the commutative property. Regrouping them is the associative property; students use both together here."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "My kitchen timer is set for 1 minute. Record this in seconds.",
          interact: [
            { kind: "jumps", start: 0, end: 60, steps: [10, 15, 30], hint: "A minute is the second hand going all the way round. Jump on to 60." },
            { kind: "input", fields: [{ label: "1 minute =", value: 60, suffix: "seconds" }] }
          ],
          answer: "1 minute = **60 seconds**."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "The apple juice popper has a capacity of 250 mL. Use this information to estimate the capacities of the other objects.",
          img: "u31-capacities.png",
          interact: [{ kind: "choose", rows: [
            { t: "A (juice bottle)", options: ["about 50 mL", "about 500 mL", "about 10 L"], a: 1 },
            { t: "B (milk carton)", options: ["about 250 mL", "about 1 L", "about 20 L"], a: 1 },
            { t: "C (milk bottle)", options: ["about 250 mL", "about 500 mL", "about 3 L"], a: 2 }] }],
          answer: "Estimates vary. A: about **500 mL** (2 poppers). B: about **1 L** (4 poppers). C: about **3 L** (12 poppers). Each object holds more than the popper.",
          explain: "These are estimates. The options are far apart so only one is reasonable for each object; accept nearby estimates (for example 600 mL, 2 L) in discussion."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: Volume",
          prompt: "Each of these smaller jars holds 1 litre (1 L) of water. 2 smaller jars of water will fill exactly half of the larger jar. What is the capacity of the larger jar (L)?",
          img: "u31-jars.png",
          cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Double the half", s: "2 jars = 2 L fill half. The other half needs 2 L more. 2 + 2 = 4 L." }, { t: "Count the jars", s: "Half the jar takes 2 small jars, so the whole jar takes 2 × 2 = 4 small jars, which is 4 L." }] },
          interact: [
            { kind: "bar", whole: { v: 4, l: "larger jar", hide: true }, parts: [{ v: 1, l: "1 L" }, { v: 1, l: "1 L" }, { v: 1, l: "1 L", hide: true }, { v: 1, l: "1 L", hide: true }], hint: "Two 1 L jars fill half the bar. Tap a ? to fill the other half." },
            { kind: "input", fields: [{ label: "Larger jar", value: 4, suffix: "L" }] }
          ],
          answer: "**4 L**. 2 L fills half of the jar, and double 2 L is 4 L."
        }
      ],
      // Review 8
      [
        {
          type: "tf", focus: "Multiplicative relations B",
          prompt: "If 7 × 5 = 35, then 35 ÷ 7 = 5",
          answer: true,
          explain: "Multiplication and division are inverse operations. 7 groups of 5 make 35, so sharing 35 into 7 groups gives 5 in each.",
          interact: [{ kind: "array", rows: 7, cols: 5, showTotal: true, hint: "7 rows of 5 is 35. Share 35 into 7 rows: how many in each?" }]
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Use flexible partitioning to solve this problem in 2 different ways: 7 × 9",
          interact: [
            { kind: "array", rows: 7, cols: 9, showTotal: true, hint: "Split the array into two parts, like 7 × 5 and 7 × 4." },
            { kind: "expr", count: 2, target: 63, placeholder: "e.g. 7 x 5 + 7 x 4", mustUse: { re: "[+\\-−]", msg: "Partition one of the numbers into parts, then add (or subtract) the parts." }, sample: ["7 x 5 + 7 x 4", "7 x 10 - 7"] }
          ],
          answer: "For example **7 × 5 + 7 × 4 = 35 + 28 = 63**, or **7 × 10 − 7 × 1 = 70 − 7 = 63**, or 5 × 9 + 2 × 9 = 45 + 18 = 63."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Kirsty must be at school by nine o'clock in the morning. Record this using digital time.",
          interact: [
            { kind: "clock", time: "9:00" },
            { kind: "input", fields: [{ label: "Digital time", accept: ["9:00", "09:00", "9:00 am", "9:00am", "9.00", "9.00 am", "9.00am"], placeholder: "h:mm" }] }
          ],
          answer: "**9:00 am**. The hours come before the colon and the minutes (00) after it."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Order the containers shown from smallest to largest capacity.",
          img: "u31-order.png",
          interact: [{ kind: "order", items: ["Bucket 5000 mL", "Can 330 mL", "Bottle 1000 mL"], answer: [1, 2, 0], hint: "Tap the containers from smallest to largest capacity." }],
          answer: "**Can (330 mL), bottle (1000 mL), bucket (5000 mL)**."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "I go to bed at this time each night. Record this in digital time. It took me 60 seconds to fall asleep. How many minutes is this?",
          interact: [
            { kind: "clock", time: "8:30" },
            { kind: "input", fields: [{ label: "Digital time", accept: ["8:30", "08:30", "8:30 pm", "8:30pm", "8.30", "8.30 pm", "8.30pm", "20:30"], placeholder: "h:mm" }, { label: "60 seconds =", value: 1, suffix: "minute" }] }
          ],
          answer: "**8:30 pm** (half past 8 at night). 60 seconds = **1 minute**.",
          explain: "The time is read from the slide's clock: the minute hand points to 6 and the hour hand is halfway between 8 and 9."
        }
      ]
    ]
  });
})();
