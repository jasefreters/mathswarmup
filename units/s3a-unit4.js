/*
  Stage 3 Year A, Unit 4 — Review of learning (Term 1, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 1, ls: 4, unit: 4,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 4 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "Delilah was asked to order the unit fractions [1/6], [1/10], [1/2], [1/8] and [1/3] on a number line. Which unit fraction should she place **closest to 0**?",
        options: ["[1/8]", "[1/6]", "[1/3]", "[1/10]"],
        answer: 3,
        explain: "All unit fractions have 1 part. The more equal parts the whole is cut into, the smaller each part is, so [1/10] is the smallest and sits closest to 0.",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.03, items: [["[1/6]", 1 / 6], ["[1/10]", 0.1], ["[1/2]", 0.5], ["[1/8]", 0.125], ["[1/3]", 1 / 3]] }]
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "3 friends share a cake. Emma gets [1/8] of the cake, Liam gets [1/2] of the cake and Stevie gets [1/4] of the cake. Use a number line to order the size of each share.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 8, tol: 0.03, items: [["Emma [1/8]", 0.125], ["Liam [1/2]", 0.5], ["Stevie [1/4]", 0.25]] },
          { kind: "order", items: ["Emma [1/8]", "Liam [1/2]", "Stevie [1/4]"], answer: [0, 2, 1] }
        ],
        answer: "Smallest to largest: **Emma [1/8]**, **Stevie [1/4]**, **Liam [1/2]**. [1/4] is double [1/8], and [1/2] is double [1/4]."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record a measuring device suitable for measuring the length of a swimming pool, a football field and the school hall. Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "Swimming pool", options: ["30 cm ruler", "metre ruler", "trundle wheel or long tape measure"], a: 2 },
          { t: "Football field", options: ["30 cm ruler", "metre ruler", "trundle wheel or long tape measure"], a: 2 },
          { t: "School hall", options: ["30 cm ruler", "metre ruler", "trundle wheel or long tape measure"], a: [1, 2] }] }],
        answer: "A **trundle wheel** or **long tape measure** suits all three, because they are long distances measured in metres. A metre ruler could work for the hall, but it takes many moves. A 30 cm ruler is far too short."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use partitioning to solve 36 000 + 2 712 + 384",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: { TTh: 3, Th: 8, H: 10, T: 9, O: 6 }, hint: "The chart shows all three numbers joined by place: 8 thousands (6 + 2), 10 hundreds (7 + 3), 9 tens (1 + 8) and 6 ones (2 + 4). Group the 10 hundreds." },
          { kind: "input", fields: [{ label: "Thousands: 36 000 + 2 000 =", value: 38000 }, { label: "Hundreds: 700 + 300 =", value: 1000 }, { label: "Tens and ones: 12 + 84 =", value: 96 }, { label: "Total", value: 39096 }] }
        ],
        answer: "36 000 + 2 000 = 38 000 · 700 + 300 = 1000 · 12 + 84 = 96. So 38 000 + 1000 + 96 = **39 096**."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Sammy is facing East and makes a quarter turn to face North. She is now facing North. How much does she need to turn to face South?",
        interact: [
          { kind: "angle", names: true, degrees: true, target: "straight", start: 90, label: "The fixed arm points East. Start at North (90°) and turn to face the opposite way." },
          { kind: "choose", rows: [{ t: "From North to South is", options: ["a quarter turn", "a half turn", "a three-quarter turn", "a full turn"], a: 1 }] },
          { kind: "input", fields: [{ label: "She turns", value: 180, suffix: "°" }] }
        ],
        answer: "A **half turn** (**180°**), either clockwise or anticlockwise. North and South are opposite directions."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "[1/6] is greater than [1/10]",
        answer: true,
        explain: "Sixths are bigger pieces than tenths, because the whole is cut into fewer parts. So [1/6] > [1/10].",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.03, items: [["[1/6]", 1 / 6], ["[1/10]", 0.1]] }]
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Zali has placed the fractions [1/8], [1/5], [1/4], [1/3] and [1/2] on a number line but has made mistakes. Identify Zali's error and correctly order the fractions on a number line.",
        interact: [
          { kind: "numberline", min: 0, max: 1, tol: 0.03, items: [["[1/8]", 0.125], ["[1/5]", 0.2], ["[1/4]", 0.25], ["[1/3]", 1 / 3], ["[1/2]", 0.5]] },
          { kind: "choose", rows: [{ t: "Zali's error", options: ["The fractions are in the wrong order", "They are not spaced correctly: [1/4] and [1/3] are too close to 0, and [1/2] should be halfway", "The number line should end at [1/2]"], a: 1 }] },
          { kind: "order", items: ["[1/3]", "[1/8]", "[1/2]", "[1/5]", "[1/4]"], answer: [1, 3, 4, 0, 2] }
        ],
        answer: "Zali's order is right but the **spacing** is wrong. [1/2] belongs halfway between 0 and 1, [1/4] is halfway to [1/2], and [1/3] sits a third of the way. Smallest to largest: [1/8], [1/5], [1/4], [1/3], [1/2].",
        explain: "On the slide the last fraction is labelled [1/4] a second time. It has been taken as [1/2]."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Estimate the length of the classroom using an appropriate unit. Justify your estimation and choice of unit.",
        interact: [
          { kind: "marker", min: 0, max: 20, divs: 20, majorEvery: 5, labels: [0, 5, 10, 15, 20], label: "classroom", hint: "Slide the pin to your estimate in metres. Think: how many big steps (about 1 m) across the room?" },
          { kind: "choose", rows: [{ t: "Best unit", options: ["millimetres", "centimetres", "metres", "kilometres"], a: 2 }] },
          { kind: "input", fields: [{ label: "Estimate", min: 5, max: 15, suffix: "m" }] }
        ],
        answer: "Answers vary. Metres suit a room. Most classrooms are about **7 to 10 m** long.",
        explain: "Any estimate from 5 m to 15 m is accepted. Measure the room with a trundle wheel to check."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Would partitioning be an efficient strategy for solving 4 005 − 3 998? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 3998, end: 4005, steps: [1, 2, 5], hint: "The numbers are close together. Count up from 3998 to 4005." },
          { kind: "choose", rows: [{ t: "Is partitioning efficient here?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "4005 − 3998 =", value: 7 }] }
        ],
        answer: "**No.** Partitioning means trading across zeros. The numbers are only 7 apart, so counting up is quicker: 3998 + 2 = 4000, + 5 = 4005. The answer is **7**."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Which side lengths are needed to calculate the perimeter of this rectangle? Explain your reasoning.",
        interact: [
          { kind: "sides", view: [440, 230], label: "Rectangle with sides A, B, C and D", fill: "#0B2A6B", poly: [[80, 40], [360, 40], [360, 180], [80, 180]],
            labels: [{ x: 220, y: 28, t: "side B" }, { x: 370, y: 115, t: "side C", anchor: "start" }, { x: 220, y: 210, t: "side D" }, { x: 70, y: 115, t: "side A", anchor: "end" }] },
          { kind: "choose", rows: [{ t: "You need", options: ["all four sides", "one length and one width, for example side A and side B", "only side A"], a: 1 }] }
        ],
        answer: "Only **one length and one width** (for example side A and side B). In a rectangle, opposite sides are equal: A = C and B = D. Perimeter = 2 × (length + width)."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "Emma ate [1/6] of her cake and Jake ate [1/10] of his cake. Who ate the larger portion?",
        options: ["Emma ate the larger portion because [1/6] is greater than [1/10].", "Jake ate the larger portion because [1/10] is greater than [1/6].", "They ate the same amount because they both ate 1 slice.", "It depends on the size of the cakes."],
        answer: 3,
        explain: "[1/6] of a cake is bigger than [1/10] of the same-sized cake. But the cakes might be different sizes: [1/10] of a huge cake could be more than [1/6] of a small one. You can only compare fractions of the same whole.",
        interact: [{ kind: "shade", parts: 6, pre: [0], hint: "Emma's cake: [1/6] shaded." }, { kind: "shade", parts: 10, pre: [0], hint: "Jake's cake: [1/10] shaded. These two cakes are the same size. What if Jake's cake were much bigger?" }]
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Record whether each fraction is less than, equal to, or greater than the benchmark of [1/2]: [1/8], [1/2], [1/6], [2/3], [1/5], [3/5]",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 2, tol: 0.03, items: [["[1/8]", 0.125], ["[1/2]", 0.5], ["[1/6]", 1 / 6], ["[2/3]", 2 / 3], ["[1/5]", 0.2], ["[3/5]", 0.6]] },
          { kind: "choose", rows: [
            { t: "[1/8]", options: ["less than", "equal to", "greater than"], a: 0 },
            { t: "[1/2]", options: ["less than", "equal to", "greater than"], a: 1 },
            { t: "[1/6]", options: ["less than", "equal to", "greater than"], a: 0 },
            { t: "[2/3]", options: ["less than", "equal to", "greater than"], a: 2 },
            { t: "[1/5]", options: ["less than", "equal to", "greater than"], a: 0 },
            { t: "[3/5]", options: ["less than", "equal to", "greater than"], a: 2 }] }
        ],
        answer: "Less than [1/2]: [1/8], [1/6], [1/5] · Equal: [1/2] · Greater than [1/2]: [2/3], [3/5]. Tip: compare the numerator with half the denominator."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "The teacher asks you to mark out a 1 km running track. How many times will you need to measure 100 metres to complete the 1 km track? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 0, end: 1000, steps: [100], hint: "Each jump is 100 m. Count the jumps to reach 1000 m (1 km)." },
          { kind: "input", fields: [{ label: "Number of 100 m lengths", value: 10 }] }
        ],
        cubes: { ops: ["÷"], also: ["×", "+"], solve: [{ t: "Convert first", s: "1 km = 1000 m. 1000 ÷ 100 = 10." }, { t: "Count in hundreds", s: "100, 200, 300 … 1000. That's 10 lengths of 100 m." }] },
        answer: "**10 times**. 1 km = 1000 m, and 10 × 100 m = 1000 m."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Complete the sentence to explain the levelling strategy. Levelling is when …",
        interact: [
          { kind: "scale", left: "4998 + 955", right: "5000 + ?", answer: 953 },
          { kind: "choose", rows: [{ t: "Levelling is when", options: ["you round both numbers to the nearest ten", "you move an amount from one number to the other so one becomes a friendly number, and the total stays the same", "you split both numbers into place value parts"], a: 1 }] }
        ],
        answer: "Levelling is when **you move an amount from one number to the other**, so one number becomes friendly and the total stays the same. 4998 + 955: move 2 across → 5000 + 953 = 5953."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Describe the similarities and differences between an equilateral triangle and an isosceles triangle, focusing on their side lengths, angle measures and lines of symmetry.",
        interact: [
          { kind: "mirror", view: [400, 250], hint: "A is equilateral and B is isosceles. Predict, then tap a dashed line to fold the triangle over it.", shapes: [
            { p: [[20, 180], [180, 180], [100, 41.4]], l: "A", fill: "#8EDBFA", lines: [[100, 31, 100, 190.4], [11, 185.2, 149, 105.5], [189, 185.2, 51, 105.5]] },
            { p: [[240, 190], [360, 190], [300, 25.2]], l: "B", fill: "#F7B6C8", lines: [[300, 10, 300, 205], [233.2, 196.2, 336.8, 101.4], [366.8, 196.2, 263.2, 101.4]] }] },
          { kind: "corners", view: [400, 210], deg: true, r: 22, q: 26, hit: 14, shapes: [{ p: [[20, 180], [180, 180], [100, 41.4]], fill: "#8EDBFA" }, { p: [[240, 190], [360, 190], [300, 25.2]], fill: "#F7B6C8" }] },
          { kind: "choose", rows: [
            { t: "Equal sides: A (equilateral)", options: ["1", "2", "3"], a: 2 },
            { t: "Equal sides: B (isosceles)", options: ["1", "2", "3"], a: 1 },
            { t: "Lines of symmetry: A (equilateral)", options: ["1", "2", "3"], a: 2 },
            { t: "Lines of symmetry: B (isosceles)", options: ["1", "2", "3"], a: 0 }] }
        ],
        answer: "Both have 3 sides and angles that add to 180°. An **equilateral** triangle has 3 equal sides, 3 equal angles (60°) and **3 lines of symmetry**. An **isosceles** triangle has 2 equal sides, 2 equal angles and **1 line of symmetry**."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "If the yellow hexagon represents the whole, the red trapezium represents half.",
        img: "u4-blocks.png",
        answer: true,
        explain: "Two red trapeziums fit exactly on the yellow hexagon, so each trapezium is [1/2]. Fold the hexagon to check.",
        interact: [{ kind: "mirror", view: [300, 230], hint: "Tap the dashed line to fold the hexagon in half.", shapes: [{ p: [[90, 20], [210, 20], [270, 120], [210, 220], [90, 220], [30, 120]], fill: "#FFE834", lines: [[10, 120, 290, 120]] }] }]
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Complete the number sentence: [6/8] = [12/?]",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5], hint: "[6/8] of the strip is shaded." },
          { kind: "shade", parts: 16, hint: "The same strip cut into 16 parts. Shade the same amount: how many parts?" },
          { kind: "input", fields: [{ label: "[6/8] = 12 out of", value: 16 }] }
        ],
        answer: "[6/8] = [12/16]. The numerator doubled (6 × 2 = 12), so the denominator doubles too: 8 × 2 = **16**.",
        explain: "On the slide only the numerator 1 shows on the right. It has been read as [12/?], an equivalent fraction of [6/8]."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Complete the following: 1 km = ? m, 4 km = ? m, 2000 m = ? km, 5000 m = ? km",
        interact: [
          { kind: "jumps", start: 0, end: 5000, steps: [1000], hint: "Each jump of 1000 m is 1 km." },
          { kind: "input", fields: [{ label: "1 km =", value: 1000, suffix: "m" }, { label: "4 km =", value: 4000, suffix: "m" }, { label: "2000 m =", value: 2, suffix: "km" }, { label: "5000 m =", value: 5, suffix: "km" }] }
        ],
        answer: "1 km = **1000 m** · 4 km = **4000 m** · 2000 m = **2 km** · 5000 m = **5 km**. Multiply by 1000 to change km to m; divide by 1000 to change m to km."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Havannah was asked to explain how she solved 4998 + 955. \"I had an addition number sentence and one of the numbers was close to 5000. So, I took 2 from 955 and added that to 4998 to make 5000. That means 955 became 953. My number sentence became 5000 + 953 = 5953.\" Record the strategy she used.",
        interact: [
          { kind: "scale", left: "4998 + 955", right: "5000 + ?", answer: 953 },
          { kind: "choose", rows: [{ t: "Havannah used", options: ["levelling", "constant difference", "partitioning", "rounding to estimate"], a: 0 }] }
        ],
        answer: "**Levelling**: she moved 2 from 955 to 4998 to make the friendly number 5000. The total stays the same: 5000 + 953 = 5953."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Emilia said that rectangles with different side lengths can have the same area. Prove her statement by recording the side lengths of 2 different rectangles with the same area.",
        interact: [
          { kind: "array", rows: 4, cols: 6, showTotal: true, max: 24, hint: "This rectangle is 4 × 6. Rotate or change it to find another rectangle with the same number of squares." },
          { kind: "sentence", fields: [{ label: "Rectangle 1 area = Rectangle 2 area", placeholder: "e.g. 4 × 6 = 3 × 8", re: "^\\s*(\\d+)\\s*x\\s*(\\d+)\\s*=\\s*(?!\\1\\s*x\\s*\\2\\s*$)(?!\\2\\s*x\\s*\\1\\s*$)\\d+\\s*x\\s*\\d+\\s*$", msg: "Write two different rectangles, like 4 × 6 = 3 × 8.", sample: "4 x 6 = 3 x 8" }] }
        ],
        answer: "Answers vary. A 4 cm × 6 cm rectangle and a 3 cm × 8 cm rectangle both have an area of **24 cm²**. So do 2 × 12 and 1 × 24."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which number is **not** a factor of 24?",
        options: ["8", "6", "7", "4"],
        answer: 2,
        explain: "24 = 1 × 24, 2 × 12, 3 × 8 and 4 × 6. 7 doesn't divide 24 evenly (7 × 3 = 21, 7 × 4 = 28).",
        interact: [{ kind: "numchart", from: 1, to: 24, answer: [1, 2, 3, 4, 6, 8, 12, 24], hint: "Tap the factors of 24 in pairs: 1 × 24, 2 × 12 …" }]
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Luka cut a paper strip in half. Arlo cut a different paper strip in quarters. One of Arlo's quarters is longer than Luka's half. Draw a representation to show how this statement can be true. Communicate your reasoning.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [
            { t: "Can this be true?", options: ["Yes", "No"], a: 0 },
            { t: "It is true when", options: ["Arlo's strip is more than twice as long as Luka's", "the strips are the same length", "never: a quarter is always smaller than a half"], a: 0 }] }
        ],
        answer: "**Yes**, because the strips are different lengths. For example, Luka's strip is 10 cm (each half is 5 cm) and Arlo's strip is 24 cm (each quarter is 6 cm). A fraction's size depends on the whole."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Calculate the perimeter of these shapes.",
        interact: [
          { kind: "sides", view: [300, 230], label: "Right-angled triangle with sides 8 cm, 6 cm and 10 cm", fill: "#0B2A6B", poly: [[90, 20], [90, 180], [210, 180]],
            dims: [{ from: [70, 22], to: [70, 178] }, { from: [92, 200], to: [208, 200] }, { from: [166, 74], to: [230, 160] }],
            labels: [{ x: 62, y: 104, t: "8 cm", anchor: "end" }, { x: 150, y: 222, t: "6 cm" }, { x: 214, y: 106, t: "10 cm", anchor: "start" }] },
          { kind: "sides", view: [320, 200], label: "Five-sided shape with sides 9 cm, 1 cm, 4 cm, 10 cm and 5 cm", fill: "#0B2A6B", poly: [[40, 40], [220, 40], [240, 60], [240, 140], [40, 140]],
            dims: [{ from: [42, 22], to: [218, 22] }, { from: [260, 62], to: [260, 138] }, { from: [42, 162], to: [238, 162] }, { from: [20, 42], to: [20, 138] }],
            labels: [{ x: 130, y: 14, t: "9 cm" }, { x: 244, y: 44, t: "1 cm", anchor: "start" }, { x: 268, y: 104, t: "4 cm", anchor: "start" }, { x: 140, y: 186, t: "10 cm" }, { x: 12, y: 94, t: "5 cm", anchor: "end" }] },
          { kind: "input", fields: [{ label: "Triangle", value: 24, suffix: "cm" }, { label: "Five-sided shape", value: 29, suffix: "cm" }] }
        ],
        answer: "Triangle: 8 + 6 + 10 = **24 cm** · Five-sided shape: 9 + 1 + 4 + 10 + 5 = **29 cm**."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use partitioning to solve 2 245 + 328 + 48 = Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 2, H: 5, T: 10, O: 21 }, target: 2621, need: "standard", hint: "All three numbers joined by place: 2 thousands, 5 hundreds (2 + 3), 10 tens (4 + 2 + 4) and 21 ones (5 + 8 + 8). Group the tens and ones." },
          { kind: "input", fields: [{ label: "2245 + 328 + 48 =", value: 2621 }] }
        ],
        answer: "Thousands: 2000 · Hundreds: 200 + 300 = 500 · Tens: 40 + 20 + 40 = 100 · Ones: 5 + 8 + 8 = 21. 2000 + 500 + 100 + 21 = **2621**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "The timetable says that Sasha's train leaves the station at 14:45. She wants to tell her friend the time in 12-hour format. Record the time she should tell her friend.",
        interact: [
          { kind: "clock", time: "2:45", h24: true },
          { kind: "input", fields: [{ label: "12-hour time", accept: ["2:45 pm", "2:45pm", "2.45 pm", "quarter to 3 pm"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "**2:45 pm** (a quarter to 3 in the afternoon). 14 − 12 = 2, and times after midday are pm."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The numbers that are multiplied are called the product.",
        answer: false,
        explain: "The numbers that are multiplied are the **factors**. The answer is the **product**: in 3 × 4 = 12, 3 and 4 are factors and 12 is the product.",
        interact: [{ kind: "array", rows: 3, cols: 4, showTotal: true }]
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Draw a bar model to represent and solve [4/6] + [3/6]",
        interact: [
          { kind: "bar", whole: { v: 7, l: "[7/6]", n: "total", hide: true }, parts: [{ v: 4, l: "[4/6]" }, { v: 3, l: "[3/6]" }] },
          { kind: "shade", parts: 6, hint: "One whole cut into sixths. Shade [4/6], then keep counting: how many sixths are left over?" },
          { kind: "input", fields: [{ label: "[4/6] + [3/6] =", value: 7 / 6, placeholder: "a/b" }] }
        ],
        answer: "[4/6] + [3/6] = **[7/6]**, which is **1[1/6]**. Add the numerators; the denominator stays the same."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Lizzy and Jakobi have built garden beds. Both these garden beds have a perimeter of 20 m. How is that possible? Explain your answer.",
        interact: [
          { kind: "sides", view: [300, 200], label: "Lizzy's garden bed, 6 m by 4 m", fill: "#F9C9D4", poly: [[60, 40], [240, 40], [240, 160], [60, 160]],
            dims: [{ from: [62, 22], to: [238, 22] }, { from: [40, 42], to: [40, 158] }], labels: [{ x: 150, y: 14, t: "6 m" }, { x: 32, y: 104, t: "4 m", anchor: "end" }] },
          { kind: "sides", view: [320, 140], label: "Jakobi's garden bed, 8 m by 2 m", fill: "#0B2A6B", poly: [[40, 40], [280, 40], [280, 100], [40, 100]],
            dims: [{ from: [42, 22], to: [278, 22] }, { from: [300, 42], to: [300, 98] }], labels: [{ x: 160, y: 14, t: "8 m" }, { x: 308, y: 74, t: "2 m", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Lizzy's perimeter", value: 20, suffix: "m" }, { label: "Jakobi's perimeter", value: 20, suffix: "m" }] },
          { kind: "choose", rows: [{ t: "Why?", options: ["Different side lengths can add to the same total: 6 + 4 = 10 and 8 + 2 = 10", "They have the same area", "They are the same shape"], a: 0 }] }
        ],
        cubes: { ops: ["+"], also: ["×"], solve: [{ t: "Add all four sides", s: "Lizzy: 6 + 4 + 6 + 4 = 20 m. Jakobi: 8 + 2 + 8 + 2 = 20 m." }, { t: "Double the length plus width", s: "Lizzy: 2 × (6 + 4) = 20. Jakobi: 2 × (8 + 2) = 20." }] },
        answer: "Lizzy: 6 + 4 + 6 + 4 = **20 m** · Jakobi: 8 + 2 + 8 + 2 = **20 m**. Length + width is 10 m for both, so the perimeters match even though the shapes (and areas: 24 m² and 16 m²) are different."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use partitioning to solve 2 545 − 328 − 14 = Communicate your thinking.",
        interact: [
          { kind: "jumps", start: 2545, back: true, steps: [300, 20, 8, 14], hint: "Take away 300, then 20, then 8, then 14." },
          { kind: "input", fields: [{ label: "2545 − 328 − 14 =", value: 2203 }] }
        ],
        answer: "2545 − 300 = 2245 · − 20 = 2225 · − 8 = 2217 · − 14 = **2203**. (Or: 328 + 14 = 342, and 2545 − 342 = 2203.)"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Explain why 24-hour time is used. Provide 2 real-life examples of where or when it is used.",
        interact: [
          { kind: "choose", rows: [{ t: "24-hour time is used because", options: ["it avoids mixing up am and pm times", "it is only used at night", "it makes the day longer"], a: 0 }] },
          { kind: "select", hint: "Tap every place where 24-hour time is used.", items: [["train and bus timetables", true], ["flight times at airports", true], ["hospitals and the armed forces", true], ["phone and computer clocks", true], ["the oven temperature in a recipe", false], ["the date on a birthday card", false]] }
        ],
        answer: "Each time of day has only one 24-hour time, so there's no confusion between am and pm. Examples: **train, bus and flight timetables**, hospitals, the armed forces and digital clocks."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "What is the **product** of 7 and 6?",
        options: ["36", "58", "42", "45"],
        answer: 2,
        explain: "The product is the answer when you multiply: 7 × 6 = 42.",
        interact: [{ kind: "array", rows: 7, cols: 6, showTotal: true }]
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Sofia ran [4/5] of the oval in the morning and [2/5] of the oval in the afternoon. What fraction of the oval did she run in total?",
        interact: [
          { kind: "bar", whole: { v: 6, l: "[6/5]", n: "total", hide: true }, parts: [{ v: 4, l: "[4/5]", n: "morning" }, { v: 2, l: "[2/5]", n: "afternoon" }] },
          { kind: "shade", parts: 5, hint: "One lap of the oval in fifths. Shade the morning run. Does the afternoon run fit in what's left?" },
          { kind: "input", fields: [{ label: "Total", value: 6 / 5, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Add the fifths", s: "4 fifths + 2 fifths = 6 fifths = [6/5]." }, { t: "Make a whole", s: "[4/5] + [1/5] = 1 whole lap, and [1/5] more makes 1[1/5]." }] },
        answer: "[4/5] + [2/5] = **[6/5]**, which is **1[1/5]** laps of the oval."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Convert the following to 12-hour time: 18:00, 06:00, 12:00, 21:00",
        interact: [
          { kind: "clock", time: "6:00", h24: true, drag: true },
          { kind: "input", fields: [
            { label: "18:00", accept: ["6:00 pm", "6 pm", "6:00pm", "6pm"], placeholder: "h:mm am/pm" },
            { label: "06:00", accept: ["6:00 am", "6 am", "6:00am", "6am"], placeholder: "h:mm am/pm" },
            { label: "12:00", accept: ["12:00 pm", "12 pm", "12:00pm", "12pm", "12 noon", "midday", "noon"], placeholder: "h:mm am/pm" },
            { label: "21:00", accept: ["9:00 pm", "9 pm", "9:00pm", "9pm"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "18:00 = **6:00 pm** · 06:00 = **6:00 am** · 12:00 = **12:00 pm** (midday) · 21:00 = **9:00 pm**. For hours after 12, subtract 12 and use pm."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "There were 850 students at a school assembly. 234 students left early to go to a sports event. Later, 127 more students arrived from another grade. How many students were at the assembly in the end?",
        interact: [
          { kind: "jumps", start: 850, back: true, steps: [200, 30, 4, 100, 20, 7], hint: "Jump back 234 (200, 30, 4), then forward 127 (100, 20, 7)." },
          { kind: "input", fields: [{ label: "Students at the end", value: 743 }] }
        ],
        cubes: { ops: ["−", "+"], solve: [{ t: "One step at a time", s: "850 − 234 = 616. 616 + 127 = 743." }, { t: "Find the change", s: "234 left and 127 came: that's 107 fewer. 850 − 107 = 743." }] },
        answer: "850 − 234 = 616, then 616 + 127 = **743 students**."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Sketch a rectangular prism showing depth.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "Draw the front rectangle, draw a matching rectangle up and to the side, then join the 4 matching corners. Dashed lines show the hidden edges."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Both these arrays model 24 as a product: 2 rows of 12, and 6 rows of 4.",
        answer: true,
        explain: "2 × 12 = 24 and 6 × 4 = 24. Both arrays have 24 dots.",
        interact: [{ kind: "array", rows: 2, cols: 12, showTotal: true }, { kind: "array", rows: 6, cols: 4, showTotal: true }]
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Maya filled [6/10] of a water bottle. She drank [2/10] of the bottle during soccer practice. How much water is left in the bottle?",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5], hint: "The bottle is [6/10] full. Tap 2 tenths to take away what she drank." },
          { kind: "input", fields: [{ label: "Left in the bottle", value: 0.4, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Take away tenths", s: "6 tenths − 2 tenths = 4 tenths = [4/10]." }, { t: "Count on", s: "From [2/10] to [6/10] is 4 tenths." }] },
        answer: "[6/10] − [2/10] = **[4/10]** (or [2/5]) of the bottle.",
        explain: "The slide says she drank \"[2/10] of it\". This is read as [2/10] of the whole bottle."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Read the following times aloud using appropriate 24-hour time language: 08:00, 16:00, 23:30, 13:40",
        interact: [{ kind: "choose", rows: [
          { t: "08:00", options: ["eight o'clock hours", "zero eight hundred hours", "eight hundred"], a: 1 },
          { t: "16:00", options: ["sixteen hundred hours", "four hundred hours", "sixteen o'clock"], a: 0 },
          { t: "23:30", options: ["twenty-three thirty", "eleven thirty hours", "two thirty-three"], a: 0 },
          { t: "13:40", options: ["one forty hours", "thirteen forty", "thirteen hundred and four"], a: 1 }] }],
        answer: "08:00 \"**zero eight hundred hours**\" · 16:00 \"**sixteen hundred hours**\" · 23:30 \"**twenty-three thirty**\" · 13:40 \"**thirteen forty**\"."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "A wildlife reserve is tracking the number of deer in an area of the forest. On Monday, rangers count 462 deer. On Tuesday, they spot 125 more deer that were not seen the day before. On Wednesday, 89 deer are moved to a different part of the reserve. How many deer are in that area by the end of Wednesday?",
        interact: [
          { kind: "jumps", start: 462, back: true, steps: [100, 20, 5, 90, 1], hint: "Jump forward 125, then back 89 (back 90 and forward 1)." },
          { kind: "input", fields: [{ label: "Deer at the end of Wednesday", value: 498 }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "One day at a time", s: "462 + 125 = 587. 587 − 89 = 498." }, { t: "Compensate", s: "587 − 90 = 497, then add 1 back: 498." }] },
        answer: "462 + 125 = 587, then 587 − 89 = **498 deer**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "2 trapeziums can be combined to create a hexagon. Draw two or more 2D shapes showing how they can be combined to create a new shape. Label the shapes you used and the new shape you formed.",
        img: "u4-hexagon.png",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [{ t: "Try one: 2 equilateral triangles make a", options: ["square", "rhombus", "hexagon"], a: 1 }] }
        ],
        answer: "Answers vary, for example: 2 triangles make a rhombus, 6 triangles make a hexagon, 2 squares make a rectangle, a rectangle and 2 triangles make a trapezium."
      }
    ]
  ]
});
