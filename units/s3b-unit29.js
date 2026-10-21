/*
  Stage 3 Year B, Unit 29 — Review of learning (Term 2, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 2, ls: 4, unit: 29,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 29 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Which of the following are equivalent to 25%? You may select more than one answer. Communicate your reasoning.",
        interact: [
          { kind: "shade", parts: 4, pct: true, hint: "Shade 25% of the strip. What fraction is that?" },
          { kind: "select", hint: "Tap every option that is equal to 25%.", items: [
            ["A: [25/100]", true], ["B: 0.25", true], ["C: 2.5", false], ["D: [1/4]", true]] }
        ],
        answer: "**A**, **B** and **D**. 25% means 25 out of 100: [25/100] = 0.25 = [1/4]. 2.5 is two and a half wholes, which is 250%."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Record the 5 missing features labelled on the following three-dimensional shapes.",
        img: "u29-features.png",
        interact: [{ kind: "choose", rows: [
          { t: "1. ____ surface", options: ["flat", "curved"], a: 0 },
          { t: "2. ____ surface", options: ["flat", "curved"], a: 1 },
          { t: "3.", options: ["edge", "face", "vertex"], a: 0 },
          { t: "4.", options: ["edge", "face", "vertex"], a: 1 },
          { t: "5.", options: ["edge", "face", "vertex"], a: 2 }] }],
        answer: "1. **flat** surface (the circle on top) · 2. **curved** surface · 3. **edge** · 4. **face** · 5. **vertex** (a corner where edges meet)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the coordinates for the treasure chest's latch, the green fish and the pirate's face.",
        img: "u29-ocean.png",
        interact: [{ kind: "input", fields: [
          { label: "Treasure chest's latch", accept: ["(4, 1)"], placeholder: "(x, y)" },
          { label: "Green fish", accept: ["(2, 2)"], placeholder: "(x, y)" },
          { label: "Pirate's face", accept: ["(5, 4)"], placeholder: "(x, y)" }] }],
        answer: "Latch **(4, 1)**, green fish **(2, 2)**, pirate's face **(5, 4)**. Go across the x-axis first, then up the y-axis.",
        explain: "Each item sits where two grid lines cross. The latch is on the chest at the bottom, the green fish is the small fish on the left."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use an algorithm to solve: 48 × 36",
        interact: [
          { kind: "cells", cols: 3, w: 100, msg: "Multiply each part: tens × tens, tens × ones, and so on.", grid: [
            ["#×", "#40", "#8"],
            ["#30", { v: 1200 }, { v: 240 }],
            ["#6", { v: 240 }, { v: 48 }]] },
          { kind: "input", fields: [{ label: "48 × 36 =", value: 1728 }] }
        ],
        answer: "**1728**. 1200 + 240 + 240 + 48 = 1728. In the standard algorithm: 48 × 6 = 288, 48 × 30 = 1440, 288 + 1440 = 1728."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Name the dimensions of the prism by completing the labelled terms.",
        img: "u29-prism.png",
        interact: [{ kind: "choose", rows: [
          { t: "h", options: ["height", "width", "length"], a: 0 },
          { t: "w", options: ["height", "width", "length"], a: 1 },
          { t: "l", options: ["height", "width", "length"], a: 2 }] }],
        answer: "h = **height**, w = **width**, l = **length**. Volume = length × width × height."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "[1/4] is equivalent to 25%. Communicate your reasoning.",
        answer: true,
        explain: "25% means 25 out of 100. 100 ÷ 4 = 25, so [1/4] = [25/100] = 25%.",
        interact: [{ kind: "shade", parts: 4, pct: true, hint: "Shade [1/4] of the strip. What percentage is that?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name these three-dimensional objects according to their base.",
        img: "u29-solids-a.png",
        interact: [{ kind: "choose", rows: [
          { t: "1.", options: ["square pyramid", "triangular pyramid", "triangular prism", "rectangular prism"], a: 0 },
          { t: "2.", options: ["square pyramid", "triangular pyramid", "triangular prism", "rectangular prism"], a: 2 },
          { t: "3.", options: ["square pyramid", "triangular pyramid", "triangular prism", "rectangular prism"], a: 1 }] }],
        answer: "1. **Square pyramid** (square base, one apex) · 2. **Triangular prism** (two triangle ends joined by rectangles) · 3. **Triangular pyramid** (triangle base, one apex).",
        explain: "A pyramid's faces meet at one point. A prism has two matching ends. The shape of the base gives the first part of the name."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates of the missing points on the number planes A, B and C.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "(−3, 1)", x: -3, y: 1 }, { l: "(−3, −3)", x: -3, y: -3 }, { l: "(1, −3)", x: 1, y: -3 }], hint: "A: a rectangle. Tap the corner points to trace them to the axes. Tap the missing fourth corner to plot it." },
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "(2, 5)", x: 2, y: 5 }, { l: "(2, −2)", x: 2, y: -2 }], hint: "B: a right-angled triangle. Its bottom edge runs along y = −2 and its long side slopes up 1 for every 1 across." },
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "(4, 5)", x: 4, y: 5 }, { l: "(−1, −5)", x: -1, y: -5 }], hint: "C: a rectangle. Tap the two missing corners to plot them." },
          { kind: "input", fields: [
            { label: "A: missing corner", accept: ["(1, 1)"], placeholder: "(x, y)" },
            { label: "B: missing corner", accept: ["(-5, -2)"], placeholder: "(x, y)" },
            { label: "C: top-left corner", accept: ["(-1, 5)"], placeholder: "(x, y)" },
            { label: "C: bottom-right corner", accept: ["(4, -5)"], placeholder: "(x, y)" }] }
        ],
        answer: "A: **(1, 1)** · B: **(−5, −2)** · C: **(−1, 5)** and **(4, −5)**. Corners in line share an x-coordinate (same column) or a y-coordinate (same row).",
        explain: "B: the slope starts at (2, 5) and goes down 1 for every 1 to the left. It crosses (−3, 0) and meets y = −2 at x = −5, as in the picture."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "A toy factory produces 624 toy cars. The cars are packed into boxes that each hold 7 cars. How many full boxes can the factory fill? How many cars will be left over?",
        interact: [
          { kind: "jumps", start: 0, max: 630, steps: [7, 70, 560], hint: "Jump 560 (80 boxes), then jumps of 7 (one box each). How close to 624 can you get?" },
          { kind: "input", fields: [{ label: "Full boxes", value: 89 }, { label: "Cars left over", value: 1 }] }
        ],
        cubes: { ops: ["÷"], also: ["×", "−"], solve: [{ t: "Short division", s: "62 tens ÷ 7 = 8 tens remainder 6 tens. 64 ÷ 7 = 9 remainder 1. So 624 ÷ 7 = 89 remainder 1." }, { t: "Use known facts", s: "7 × 80 = 560. 624 − 560 = 64. 7 × 9 = 63. 64 − 63 = 1. 80 + 9 = 89 boxes, 1 car left." }] },
        answer: "**89 full boxes** with **1 car left over**. 7 × 89 = 623, and 624 − 623 = 1."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Record the words that complete this statement: This prism has ____ layers of ____ cubic-centimetre blocks. Each layer is ____ rows of ____ blocks.",
        img: "u29-layers.png",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "One layer seen from above: 3 rows of 4 blocks." },
          { kind: "input", fields: [{ label: "Layers", value: 5 }, { label: "Blocks in each layer", value: 12 }] },
          { kind: "choose", rows: [{ t: "Each layer is", options: ["3 rows of 4 blocks", "4 rows of 3 blocks", "5 rows of 4 blocks", "3 rows of 5 blocks"], a: [0, 1] }] }
        ],
        answer: "This prism has **5 layers** of **12** cubic-centimetre blocks. Each layer is **3 rows of 4** blocks. Volume = 5 × 12 = 60 cm³.",
        explain: "Layers are counted from the bottom up (5 high). Each layer is 4 blocks across and 3 deep. 4 rows of 3 is also marked correct."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "Which bar has 0.75 of the whole accurately shaded blue? Communicate your reasoning.",
        img: "u29-bars.png",
        options: ["A", "B", "C", "D"],
        answer: 2,
        explain: "0.75 = [75/100] = [3/4]. Bar C has three of four equal quarters shaded. A shows [1/4] (0.25), B shows [7/8] (0.875) and D shows [1/2] (0.5).",
        interact: [{ kind: "shade", parts: 4, pct: true, hint: "Shade 0.75 of this strip, then compare it with each bar." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name these three-dimensional objects from their nets.",
        img: "u29-nets.png",
        interact: [{ kind: "choose", rows: [
          { t: "1.", options: ["square pyramid", "cube", "triangular prism", "triangular pyramid"], a: 0 },
          { t: "2.", options: ["square pyramid", "cube", "triangular prism", "triangular pyramid"], a: 1 },
          { t: "3.", options: ["square pyramid", "cube", "triangular prism", "triangular pyramid"], a: 2 }] }],
        answer: "1. **Square pyramid** (1 square, 4 triangles) · 2. **Cube** (6 squares) · 3. **Triangular prism** (3 rectangles, 2 triangles)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the missing coordinate of the translated triangle. Describe the change to the coordinate when the triangle was translated over the x-axis.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "(−5, 5)", x: -5, y: 5 }, { l: "(−1, 5)", x: -1, y: 5 }, { l: "(−3, 1)", x: -3, y: 1 }, { l: "(−5, −1)", x: -5, y: -1 }, { l: "(−1, −1)", x: -1, y: -1 }], hint: "Tap a top corner and its matching bottom corner. How far down did it move? Tap the missing point to plot it." },
          { kind: "input", fields: [{ label: "Missing coordinate", accept: ["(-3, -5)"], placeholder: "(x, y)" }] },
          { kind: "choose", rows: [{ t: "The change", options: ["x stays the same, y goes down by 6", "x goes down by 6, y stays the same", "both numbers go down by 6", "y changes to its opposite"], a: 0 }] }
        ],
        answer: "**(−3, −5)**. Every point moved 6 units down: the x-coordinate stays the same and the y-coordinate decreases by 6 (1 − 6 = −5).",
        explain: "The triangle slides down across the x-axis, so it is a translation, not a reflection. A reflection in the x-axis would put the bottom point at (−3, −1)."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "There are 30 cubes. Some cubes can be seen. Some cubes are under the splats. There are 5 splats. Each splat has the same number of cubes hidden underneath. How many cubes are under each splat? Write a number sentence to show your reasoning.",
        img: "u29-splats.png",
        interact: [
          { kind: "input", fields: [{ label: "Cubes under each splat", value: 5 }] },
          { kind: "expr", count: 1, target: 5, placeholder: "e.g. (30 − 5) ÷ 5", mustUse: { re: "÷|/", msg: "Share the hidden cubes between the 5 splats: use ÷." }, sample: ["(30 - 5) ÷ 5"] }
        ],
        cubes: { ops: ["−", "÷"], also: ["×"], solve: [{ t: "Take away, then share", s: "5 cubes can be seen. 30 − 5 = 25 hidden. 25 ÷ 5 splats = 5 under each." }, { t: "Check with multiplication", s: "5 splats × 5 cubes = 25. 25 + 5 seen = 30 ✓." }] },
        answer: "**5 cubes** under each splat. (30 − 5) ÷ 5 = 5.",
        explain: "Adapted from Wyborney (2017). Count the green cubes you can see first: there are 5."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Calculate the volume of the shipping container in cubic metres.",
        img: "u29-container.png",
        interact: [
          { kind: "array", rows: 2, cols: 6, showTotal: true, hint: "The bottom layer: 6 m long and 2 m wide. Stack 3 layers like this." },
          { kind: "input", fields: [{ label: "Volume", value: 36, suffix: "m³" }] }
        ],
        answer: "**36 m³**. 6 × 2 = 12 cubic metres in each layer, and 3 layers: 12 × 3 = 36 m³."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "50 cm is equivalent to [1/2] of 1 metre. Communicate your reasoning.",
        img: "u29-ruler.png",
        answer: true,
        explain: "1 metre = 100 cm. Half of 100 is 50, so 50 cm = [1/2] m = 0.5 m. The paper covers half of the metre ruler.",
        interact: [{ kind: "marker", min: 0, max: 100, divs: 10, majorEvery: 5, labels: [0, 50, 100], label: "cm on a metre ruler", hint: "Slide the pin to 50 cm. How much of the metre is that?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Sketch the top, front and side views of a rectangular prism.",
        img: "u29-box.png",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "All three views are **rectangles**. Top: length × width. Front: length × height. Side: width × height (narrower than the front).",
        explain: "Views are flat drawings of what you see looking straight at one side, so hidden (dashed) edges are not drawn."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates for the shape if it were reflected across the x-axis and across the y-axis.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "A", x: -4, y: 5 }, { l: "B", x: -2, y: 5 }, { l: "C", x: -3, y: 2 }], hint: "Tap A, B and C to read them. Then tap the point the same distance on the other side of the axis." },
          { kind: "input", fields: [
            { label: "x-axis: A", accept: ["(-4, -5)"], placeholder: "(x, y)" },
            { label: "x-axis: B", accept: ["(-2, -5)"], placeholder: "(x, y)" },
            { label: "x-axis: C", accept: ["(-3, -2)"], placeholder: "(x, y)" },
            { label: "y-axis: A", accept: ["(4, 5)"], placeholder: "(x, y)" },
            { label: "y-axis: B", accept: ["(2, 5)"], placeholder: "(x, y)" },
            { label: "y-axis: C", accept: ["(3, 2)"], placeholder: "(x, y)" }] }
        ],
        answer: "Across the x-axis: **(−4, −5), (−2, −5), (−3, −2)**. Across the y-axis: **(4, 5), (2, 5), (3, 2)**. Reflecting across the x-axis flips the sign of y; across the y-axis flips the sign of x.",
        explain: "The triangle's corners are A (−4, 5), B (−2, 5) and C (−3, 2)."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "How can we express 5 pizzas shared amongst 4 people? Record the solution using a fraction, decimal and words.",
        img: "u29-pizzas.png",
        interact: [
          { kind: "pack", mode: "share", n: 4, total: 4, thing: "whole pizzas", label: "person", hint: "Share the 4 whole pizzas first. Then cut the last pizza into quarters." },
          { kind: "shade", parts: 4, hint: "The fifth pizza cut into 4 equal pieces. Shade one person's share." },
          { kind: "input", fields: [{ label: "Fraction", value: 1.25, placeholder: "a/b" }, { label: "Decimal", value: 1.25 }] },
          { kind: "choose", rows: [{ t: "In words, each person gets", options: ["one and a quarter pizzas", "four fifths of a pizza", "one and five quarters pizzas", "one and a half pizzas"], a: 0 }] }
        ],
        cubes: { ops: ["÷"], solve: [{ t: "Wholes first", s: "Give each person 1 whole pizza (4 used). Cut the last pizza into 4 quarters: each gets [1/4] more. 1 + [1/4] = 1[1/4]." }, { t: "Division as a fraction", s: "5 ÷ 4 = [5/4] = 1[1/4] = 1.25." }] },
        answer: "[5/4] or 1[1/4] pizzas · **1.25** pizzas · **one and a quarter pizzas** each."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Write each mass using kilograms (kg) and grams (g): 3.45 kg, 2.08 kg, 12.40 kg.",
        interact: [{ kind: "cells", cols: 3, w: 130, msg: "1 kg = 1000 g. The digits after the point are tenths, hundredths and thousandths of a kilogram.", grid: [
          ["#Mass", "#kg", "#g"],
          ["3.45 kg", { v: 3 }, { v: 450 }],
          ["2.08 kg", { v: 2 }, { v: 80 }],
          ["12.40 kg", { v: 12 }, { v: 400 }]] }],
        answer: "3.45 kg = **3 kg 450 g** · 2.08 kg = **2 kg 80 g** · 12.40 kg = **12 kg 400 g**.",
        explain: "0.45 kg = 450 g, 0.08 kg = 80 g and 0.4 kg = 400 g. Watch 2.08: the 8 is in the hundredths place, so it is 80 g, not 800 g."
      }
    ],
    // Review 5
    [
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "How else could [5/9] be represented? You may select more than one answer.",
        interact: [{ kind: "select", hint: "Tap every option that means the same as [5/9].", items: [
          ["A: 5 groups of 9", false], ["B: 5 shared between 9", true], ["C: 5 rows of 9", false], ["D: 5 divided by 9", true]] }],
        answer: "**B** and **D**. A fraction is a division: [5/9] = 5 ÷ 9, which is 5 shared between 9. 5 groups of 9 and 5 rows of 9 both make 45.",
        explain: "B and D both mean 5 ÷ 9, so both are correct."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name these three-dimensional objects according to their base.",
        img: "u29-solids-b.png",
        interact: [{ kind: "choose", rows: [
          { t: "1.", options: ["hexagonal prism", "pentagonal pyramid", "rectangular prism", "hexagonal pyramid"], a: 0 },
          { t: "2.", options: ["hexagonal prism", "pentagonal pyramid", "rectangular prism", "hexagonal pyramid"], a: 1 },
          { t: "3.", options: ["hexagonal prism", "pentagonal pyramid", "rectangular prism", "hexagonal pyramid"], a: 2 }] }],
        answer: "1. **Hexagonal prism** (two hexagon ends) · 2. **Pentagonal pyramid** (5-sided base, one apex) · 3. **Rectangular prism**."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A spinner is divided into 10 equal sections: 4 green, 4 blue and 2 orange. The spinner is spun once. Which outcomes are equally likely? Would it be correct to say landing on orange is equally likely as landing on blue? Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [300, 300], total: 10, mark: "outline", hint: "Choose a colour, then tap each section of that colour to count it.",
            cats: [{ k: "g", t: "Green", c: "#00A651" }, { k: "b", t: "Blue", c: "#2F6FE4" }, { k: "o", t: "Orange", c: "#F2994A" }],
            shapes: [
              { p: "150.0,150.0 150.0,25.0 163.1,25.7 176.0,27.7 188.6,31.1 200.8,35.8 212.5,41.7 223.5,48.9", a: "g", fill: "#00A651" },
              { p: "150.0,150.0 223.5,48.9 233.6,57.1 242.9,66.4 251.1,76.5 258.3,87.5 264.2,99.2 268.9,111.4", a: "b", fill: "#2F6FE4" },
              { p: "150.0,150.0 268.9,111.4 272.3,124.0 274.3,136.9 275.0,150.0 274.3,163.1 272.3,176.0 268.9,188.6", a: "o", fill: "#F2994A" },
              { p: "150.0,150.0 268.9,188.6 264.2,200.8 258.3,212.5 251.1,223.5 242.9,233.6 233.6,242.9 223.5,251.1", a: "g", fill: "#00A651" },
              { p: "150.0,150.0 223.5,251.1 212.5,258.3 200.8,264.2 188.6,268.9 176.0,272.3 163.1,274.3 150.0,275.0", a: "b", fill: "#2F6FE4" },
              { p: "150.0,150.0 150.0,275.0 136.9,274.3 124.0,272.3 111.4,268.9 99.2,264.2 87.5,258.3 76.5,251.1", a: "g", fill: "#00A651" },
              { p: "150.0,150.0 76.5,251.1 66.4,242.9 57.1,233.6 48.9,223.5 41.7,212.5 35.8,200.8 31.1,188.6", a: "b", fill: "#2F6FE4" },
              { p: "150.0,150.0 31.1,188.6 27.7,176.0 25.7,163.1 25.0,150.0 25.7,136.9 27.7,124.0 31.1,111.4", a: "o", fill: "#F2994A" },
              { p: "150.0,150.0 31.1,111.4 35.8,99.2 41.7,87.5 48.9,76.5 57.1,66.4 66.4,57.1 76.5,48.9", a: "g", fill: "#00A651" },
              { p: "150.0,150.0 76.5,48.9 87.5,41.7 99.2,35.8 111.4,31.1 124.0,27.7 136.9,25.7 150.0,25.0", a: "b", fill: "#2F6FE4" }] },
          { kind: "choose", rows: [
            { t: "Equally likely outcomes", options: ["green and blue", "green and orange", "blue and orange", "all three colours"], a: 0 },
            { t: "Orange is equally likely as blue", options: ["correct", "not correct"], a: 1 }] }
        ],
        answer: "**Green and blue** are equally likely ([4/10] each). Orange is **not** equally likely as blue: orange has 2 sections ([2/10]) and blue has 4 ([4/10]), so blue is twice as likely."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "A pattern is made using a triangle. Each term in the pattern adds one new triangle. The triangles are not joined together. Record the numbers that complete the table of values by following the pattern rule.",
        interact: [{ kind: "cells", cols: 6, w: 80, msg: "Each triangle has 3 sides. Multiply the number of shapes by 3.", grid: [
          ["#Number of shapes", "#1", "#2", "#3", "#4", "#5"],
          ["#Number of sides", "3", "6", "9", { v: 12 }, { v: 15 }]] }],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Use the rule", s: "Number of sides = number of shapes × 3. 4 × 3 = 12. 5 × 3 = 15." }, { t: "Keep adding 3", s: "Each new triangle adds 3 sides: 9 + 3 = 12, 12 + 3 = 15." }] },
        answer: "**12** and **15**. The rule is number of sides = number of shapes × 3."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "A concert starts at 7:40 pm and finishes at 9:15 pm. Calculate the duration of the concert.",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 1180, end: 1275, steps: [15, 20, 60], hint: "Jump to 8:00 pm first, then by hours, then the minutes left over." },
          { kind: "input", fields: [{ label: "Hours", value: 1 }, { label: "Minutes", value: 35 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "7:40 pm → 8:00 pm is 20 min. 8:00 pm → 9:00 pm is 1 h. 9:00 pm → 9:15 pm is 15 min. 1 h + 20 min + 15 min = 1 h 35 min." }, { t: "Hours then minutes", s: "7:40 pm → 8:40 pm is 1 h. 8:40 pm → 9:15 pm is 35 min. Total 1 h 35 min." }] },
        answer: "**1 hour 35 minutes** (95 minutes)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "8 ÷ 4 can be written as [8/4]. Communicate your reasoning.",
        answer: true,
        explain: "A fraction is a division: the numerator is divided by the denominator. [8/4] = 8 ÷ 4 = 2.",
        interact: [{ kind: "pack", mode: "share", n: 4, total: 8, thing: "apples", label: "plate", hint: "Share 8 apples onto 4 plates. 8 ÷ 4 = [8/4]." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Match the equivalent capacities: a. 2.45 L, b. [1/4] L, c. 0.005 L with 1. 5 mL, 2. 2450 mL, 3. 250 mL.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 2.45, shift: true, hint: "1 L = 1000 mL. Press × 10 three times to change litres to millilitres." },
          { kind: "choose", rows: [
            { t: "a. 2.45 L", options: ["1. 5 mL", "2. 2450 mL", "3. 250 mL"], a: 1 },
            { t: "b. [1/4] L", options: ["1. 5 mL", "2. 2450 mL", "3. 250 mL"], a: 2 },
            { t: "c. 0.005 L", options: ["1. 5 mL", "2. 2450 mL", "3. 250 mL"], a: 0 }] }
        ],
        answer: "a → **2. 2450 mL** · b → **3. 250 mL** ([1/4] of 1000) · c → **1. 5 mL**. Multiply litres by 1000 to get millilitres."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "A special six-sided dice has faces coloured as follows: 2 faces are red, 3 faces are blue and 1 face is green. A player rolls the die once. Show the probability of landing on each colour as a fraction. How could the dice be changed so that all outcomes are equally likely?",
        interact: [
          { kind: "classify", view: [300, 360], total: 6, mark: "outline", hint: "The net of the die. Choose a colour, then tap each face of that colour.",
            cats: [{ k: "r", t: "Red", c: "#E03131" }, { k: "b", t: "Blue", c: "#2F6FE4" }, { k: "g", t: "Green", c: "#00A651" }],
            shapes: [
              { p: "110,20 190,20 190,100 110,100", a: "r", fill: "#E03131" },
              { p: "30,100 110,100 110,180 30,180", a: "b", fill: "#2F6FE4" },
              { p: "110,100 190,100 190,180 110,180", a: "r", fill: "#E03131" },
              { p: "190,100 270,100 270,180 190,180", a: "b", fill: "#2F6FE4" },
              { p: "110,180 190,180 190,260 110,260", a: "b", fill: "#2F6FE4" },
              { p: "110,260 190,260 190,340 110,340", a: "g", fill: "#00A651" }] },
          { kind: "input", fields: [{ label: "P(red)", value: 2 / 6, placeholder: "a/b" }, { label: "P(blue)", value: 3 / 6, placeholder: "a/b" }, { label: "P(green)", value: 1 / 6, placeholder: "a/b" }] },
          { kind: "select", hint: "Tap every change that would make all outcomes equally likely.", items: [
            ["Change one blue face to green, so there are 2 faces of each colour", true],
            ["Give all 6 faces different colours", true],
            ["Change one red face to green", false],
            ["Roll the die twice instead of once", false]] }
        ],
        cubes: { ops: ["÷"], solve: [{ t: "Faces out of 6", s: "Red: 2 of 6 faces = [2/6] ([1/3]). Blue: [3/6] ([1/2]). Green: [1/6]." }, { t: "Make them equal", s: "6 faces ÷ 3 colours = 2 faces each. Change one blue face to green: [2/6] each." }] },
        answer: "Red **[2/6]** ([1/3]), blue **[3/6]** ([1/2]), green **[1/6]**. Change one blue face to green so each colour has 2 faces ([2/6] each). Six different colours would also work ([1/6] each)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Andy has 42 marbles. He has 7 times as many marbles as Ryan. How many marbles does Ryan have? Communicate your strategy.",
        interact: [
          { kind: "bar", whole: { v: 42, l: "42", n: "Andy" }, parts: [{ v: 6, l: "?", n: "Ryan", hide: true }, { v: 6, l: "6" }, { v: 6, l: "6" }, { v: 6, l: "6" }, { v: 6, l: "6" }, { v: 6, l: "6" }, { v: 6, l: "6" }], hint: "Andy's 42 is 7 equal parts. Each part is Ryan's amount. Tap the ? to reveal it." },
          { kind: "input", fields: [{ label: "Ryan's marbles", value: 6 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "7 times as many means Andy's amount is 7 groups of Ryan's. 42 ÷ 7 = 6." }, { t: "Think multiplication", s: "7 × ? = 42. 7 × 6 = 42, so Ryan has 6." }] },
        answer: "**6 marbles**. 42 ÷ 7 = 6. Check: 7 × 6 = 42."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "A road trip begins at 8:35 am and ends at 1:20 pm. How long is the trip? Round the duration to the nearest hour.",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 515, end: 800, steps: [20, 25, 60], hint: "Jump to 9:00 am first, then by hours to 1:00 pm, then the minutes left over." },
          { kind: "input", fields: [{ label: "Hours", value: 4 }, { label: "Minutes", value: 45 }, { label: "To the nearest hour", value: 5, suffix: "hours" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "8:35 am → 9:00 am is 25 min. 9:00 am → 1:00 pm is 4 h. 1:00 pm → 1:20 pm is 20 min. 4 h + 45 min = 4 h 45 min." }, { t: "Round", s: "45 minutes is more than half an hour, so 4 h 45 min rounds up to 5 hours." }] },
        answer: "**4 hours 45 minutes**, which is about **5 hours** to the nearest hour."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "Cassie shares 15 apples equally among 5 friends. She writes the fraction [15/5]. What does the 15 represent in this fraction?",
        options: ["The number of groups.", "The total amount being shared.", "The amount each person gets.", "The number of people sharing."],
        answer: 1,
        explain: "[15/5] = 15 ÷ 5. The numerator (15) is the total being shared, the denominator (5) is the number of people sharing, and the answer (3) is how many each friend gets.",
        interact: [{ kind: "pack", mode: "share", n: 5, total: 15, thing: "apples", label: "friend", hint: "Share the 15 apples between 5 friends." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "A water bottle holds 3.745 L of water. Record this measurement in millilitres.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 3.745, shift: true, hint: "1 L = 1000 mL. Press × 10 three times." },
          { kind: "input", fields: [{ label: "3.745 L =", value: 3745, suffix: "mL" }] }
        ],
        answer: "**3745 mL**. 3.745 × 1000 = 3745."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "A mystery bag is being filled with 12 counters: some are blue and some are orange. Lisa wants it to be 3 times as likely to pick a blue counter than an orange counter. How many blue and orange counters should be put in the bag to make this happen? Represent the probability of picking each colour as a fraction. If 2 red counters were added to the bag, record the new probabilities.",
        interact: [
          { kind: "bar", whole: { v: 12, l: "12 counters", n: "in the bag" }, parts: [{ v: 3, l: "?", n: "blue", hide: true }, { v: 3, l: "?", n: "blue", hide: true }, { v: 3, l: "?", n: "blue", hide: true }, { v: 3, l: "?", n: "orange", hide: true }], hint: "3 times as likely: for every 1 part orange there are 3 parts blue. 4 equal parts make 12." },
          { kind: "input", fields: [
            { label: "Blue counters", value: 9 }, { label: "Orange counters", value: 3 },
            { label: "P(blue)", value: 9 / 12, placeholder: "a/b" }, { label: "P(orange)", value: 3 / 12, placeholder: "a/b" },
            { label: "With 2 red: P(blue)", value: 9 / 14, placeholder: "a/b" }, { label: "With 2 red: P(orange)", value: 3 / 14, placeholder: "a/b" }, { label: "With 2 red: P(red)", value: 2 / 14, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["÷", "×"], also: ["+"], solve: [{ t: "Equal parts", s: "Blue : orange = 3 : 1, so 4 parts = 12. 12 ÷ 4 = 3 in a part. Blue 3 × 3 = 9, orange 3." }, { t: "New total", s: "Adding 2 red makes 9 + 3 + 2 = 14 counters: blue [9/14], orange [3/14], red [2/14]." }] },
        answer: "**9 blue** and **3 orange**: P(blue) = [9/12] ([3/4]), P(orange) = [3/12] ([1/4]). With 2 red there are 14 counters: P(blue) = [9/14], P(orange) = [3/14], P(red) = [2/14] ([1/7])."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "A bus travels at an average speed of 90 km an hour. How long will it take the bus to travel 360 km?",
        interact: [
          { kind: "jumps", start: 0, max: 400, steps: [90], hint: "Each jump is 1 hour of driving (90 km). How many jumps reach 360 km?" },
          { kind: "input", fields: [{ label: "Time", value: 4, suffix: "hours" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "360 ÷ 90 = 4 hours. Think 36 ÷ 9 = 4." }, { t: "Build up", s: "1 h = 90 km, 2 h = 180 km, 3 h = 270 km, 4 h = 360 km." }] },
        answer: "**4 hours**. 90 × 4 = 360 km."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "You have three pieces of ribbon with the following lengths: 8 mm, 25 cm, 1.3 m. Convert all the lengths to metres. Find the total length of the ribbons in metres. Explain why it is important to have the same units before adding lengths.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.008, hint: "1 m = 1000 mm = 100 cm. 8 mm is 8 thousandths of a metre." },
          { kind: "input", fields: [{ label: "8 mm", value: 0.008, suffix: "m" }, { label: "25 cm", value: 0.25, suffix: "m" }, { label: "1.3 m", value: 1.3, suffix: "m" }, { label: "Total", value: 1.558, suffix: "m" }] },
          { kind: "select", hint: "Tap every true reason.", items: [
            ["8 + 25 + 1.3 adds different-sized units, so the answer means nothing", true],
            ["We can only add like units, just like adding tens to tens", true],
            ["It doesn't matter as long as you add carefully", false]] }
        ],
        cubes: { ops: ["÷", "+"], solve: [{ t: "Convert, then add", s: "8 mm = 0.008 m. 25 cm = 0.25 m. 0.008 + 0.25 + 1.3 = 1.558 m." }, { t: "Use millimetres", s: "8 mm + 250 mm + 1300 mm = 1558 mm = 1.558 m." }] },
        answer: "8 mm = **0.008 m**, 25 cm = **0.25 m**, 1.3 m. Total **1.558 m**. Units must match because a millimetre, a centimetre and a metre are different sizes: 8 + 25 + 1.3 = 34.3 would not be the length in any unit."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "[3/4] is greater than [6/8] because 8 is a larger denominator than 4. Use a diagram or number line to communicate your reasoning.",
        answer: false,
        explain: "[3/4] and [6/8] are equivalent: double the numerator and denominator of [3/4] to get [6/8]. They sit at the same point on a number line. A larger denominator means smaller parts, but [6/8] has twice as many of them.",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.035, items: [["[3/4]", 0.75], ["[6/8]", 0.75]] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record the measurements displayed in litres (L), to 3 decimal places.",
        img: "u29-jugs.png",
        interact: [{ kind: "input", fields: [{ label: "A", value: 0.65, suffix: "L", placeholder: "0.000" }, { label: "B", value: 0.4, suffix: "L", placeholder: "0.000" }] }],
        answer: "A: 650 mL = **0.650 L** · B: 400 mL = **0.400 L**. The small marks are every 50 mL.",
        explain: "Each jug is marked in 100 mL with a halfway mark (50 mL) in between. A's water is at the mark between 600 and 700."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Sarah has a mystery bag containing a large number of coloured counters. 1 counter was drawn out then returned to the collection before the next counter was drawn. Here are the results. From these results, what do you think are the contents of the mystery bag? Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [560, 80], total: 10, mark: "outline", hint: "The 10 draws. Choose a colour, then tap each counter of that colour.",
            cats: [{ k: "y", t: "Yellow", c: "#E5B800" }, { k: "r", t: "Red", c: "#E03131" }, { k: "b", t: "Blue", c: "#2F6FE4" }],
            shapes: [
              { circle: [35, 40, 20], a: "y", fill: "#FFE600" }, { circle: [89, 40, 20], a: "r", fill: "#E03131" },
              { circle: [143, 40, 20], a: "r", fill: "#E03131" }, { circle: [197, 40, 20], a: "y", fill: "#FFE600" },
              { circle: [251, 40, 20], a: "b", fill: "#2F6FE4" }, { circle: [305, 40, 20], a: "r", fill: "#E03131" },
              { circle: [359, 40, 20], a: "y", fill: "#FFE600" }, { circle: [413, 40, 20], a: "y", fill: "#FFE600" },
              { circle: [467, 40, 20], a: "b", fill: "#2F6FE4" }, { circle: [521, 40, 20], a: "r", fill: "#E03131" }] },
          { kind: "select", hint: "Tap every sensible conclusion.", items: [
            ["The bag probably has about the same number of yellow and red counters", true],
            ["There are probably fewer blue counters than yellow or red", true],
            ["The bag holds exactly 4 yellow, 4 red and 2 blue counters", false],
            ["There cannot be any green counters in the bag", false]] }
        ],
        answer: "Yellow 4, red 4, blue 2 out of 10. The bag probably has **about equal yellow and red**, and **fewer blue** (roughly [2/5] yellow, [2/5] red, [1/5] blue). We can't be sure: 10 draws is a small sample, and other colours might be in the bag.",
        explain: "Because each counter goes back, the results estimate the mix in the bag, not the exact numbers."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the digits 0, 6, 3, 2, the operations +, −, × and ÷ and brackets ( ), to create equations with answers from 1 to 10. For example, (6 − 2) × 2 = 8.",
        interact: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t, i) => ({ kind: "expr", count: 1, target: t,
          placeholder: "use 0, 6, 3 and 2",
          mustUse: { re: "^(?=[^0]*0[^0]*$)(?=[^6]*6[^6]*$)(?=[^3]*3[^3]*$)(?=[^2]*2[^2]*$)[0236+\\-−x×÷/() ]*$", msg: "Use each of the digits 0, 6, 3 and 2 exactly once, and no other digits." },
          sample: [["6 - 3 - 2 + 0", "6 ÷ 3 + 2 x 0", "6 ÷ 2 + 3 x 0", "6 - 2 + 3 x 0", "6 - 3 + 2 + 0", "6 + 0 x 3 x 2", "6 + 3 - 2 + 0", "6 + 2 + 3 x 0", "6 + 3 + 2 x 0", "60 ÷ (3 x 2)"][i]] })),
        answer: "Answers vary, for example: 1 = 6 − 3 − 2 + 0 · 2 = 6 ÷ 3 + 2 × 0 · 3 = 6 ÷ 2 + 3 × 0 · 4 = 6 − 2 + 3 × 0 · 5 = 6 − 3 + 2 + 0 · 6 = 6 + 0 × 3 × 2 · 7 = 6 + 3 − 2 + 0 · 8 = 6 + 2 + 3 × 0 · 9 = 6 + 3 + 2 × 0 · 10 = 60 ÷ (3 × 2).",
        explain: "Each digit is used once. The slide's example uses 2 twice and leaves out 3 and 0, so it is a model of the format only. 10 can't be made from single digits, so it joins 6 and 0 into 60."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Calculate the perimeter for each of these two-dimensional shapes: a rectangle with a length of 8 cm and a width of 5 cm, a square with 7 cm side lengths, a triangle with sides measuring 6 cm, 8 cm and 10 cm.",
        interact: [
          { kind: "sides", label: "Rectangle, 8 cm by 5 cm", view: [420, 230], fill: "#9FB4E8",
            poly: [[60, 40], [340, 40], [340, 175], [60, 175]],
            dims: [{ from: [62, 20], to: [338, 20] }, { from: [362, 42], to: [362, 173] }],
            labels: [{ x: 200, y: 14, t: "8 cm" }, { x: 372, y: 112, t: "5 cm", anchor: "start" }] },
          { kind: "sides", label: "Square, 7 cm sides", view: [300, 230], fill: "#FFDF5D",
            poly: [[60, 40], [220, 40], [220, 200], [60, 200]],
            dims: [{ from: [62, 20], to: [218, 20] }],
            labels: [{ x: 140, y: 14, t: "7 cm" }] },
          { kind: "sides", label: "Right-angled triangle, sides 6 cm, 8 cm and 10 cm", view: [380, 280], fill: "#92D050",
            poly: [[60, 40], [60, 220], [300, 220]],
            dims: [{ from: [40, 42], to: [40, 218] }, { from: [62, 242], to: [298, 242] }, { from: [78, 26], to: [314, 203] }],
            labels: [{ x: 32, y: 135, t: "6 cm", anchor: "end" }, { x: 180, y: 268, t: "8 cm" }, { x: 210, y: 100, t: "10 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Rectangle", value: 26, suffix: "cm" }, { label: "Square", value: 28, suffix: "cm" }, { label: "Triangle", value: 24, suffix: "cm" }] }
        ],
        answer: "Rectangle **26 cm** (8 + 5 + 8 + 5) · Square **28 cm** (4 × 7) · Triangle **24 cm** (6 + 8 + 10).",
        explain: "The rectangle's unlabelled sides match the opposite sides. All four sides of the square are 7 cm."
      }
    ]
  ]
});
