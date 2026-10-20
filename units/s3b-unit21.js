/*
  Stage 3 Year B, Unit 21 — Review of learning (Term 1, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 1, ls: 1, unit: 21,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 21 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Which decimal number has the **smallest value**? Explain your reasoning.",
        options: ["0.5", "0.125", "0.25", "0.49"],
        answer: 1,
        explain: "Compare the tenths first: 0.125 has 1 tenth, 0.25 has 2, 0.49 has 4 and 0.5 has 5. More digits doesn't mean a bigger number.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 20, tol: 0.03, items: [["0.5", 0.5], ["0.125", 0.125], ["0.25", 0.25], ["0.49", 0.49]] }]
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Write the number 3 198 342 in words.",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 3198342, hint: "Read each group of three: millions, then thousands, then ones." },
          { kind: "reveal", items: [["3 198 342", "words"]], button: "Reveal" }
        ],
        answer: "Three million, one hundred and ninety-eight thousand, three hundred and forty-two."
      },
      {
        type: "sr", focus: "Represents numbers B: Whole numbers",
        prompt: "Use the number line to solve 4 − 5 =",
        interact: [
          { kind: "jumps", start: 4, min: -9, max: 9, back: true, steps: [1, 4, 5], hint: "Start at 4 and jump back 5. Try 4 back to 0 first, then 1 more." },
          { kind: "input", fields: [{ label: "4 − 5 =", value: -1 }] }
        ],
        answer: "**−1**. Jumping back 4 reaches 0, and 1 more jump goes below zero to −1."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Identify the type of triangle. Explain your reasoning.",
        interact: [
          { kind: "corners", view: [370, 220], r: 26, q: 34, shapes: [{ p: [[40, 190], [330, 190], [330, 40]], fill: "#BFE6F7" }], hint: "Tap a corner to test it with a right angle. Tap again to name the angle." },
          { kind: "choose", rows: [
            { t: "By its angles", options: ["acute-angled", "right-angled", "obtuse-angled"], a: 1 },
            { t: "By its sides", options: ["equilateral", "isosceles", "scalene"], a: 2 }] }
        ],
        answer: "A **right-angled scalene** triangle. One angle is a right angle, and all three sides are different lengths."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Record the points for the letters on the Cartesian plane.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "A", x: 4, y: 4 }, { l: "B", x: 5, y: 0 }] },
          { kind: "input", fields: [{ label: "A =", accept: ["(4, 4)"], placeholder: "(x, y)" }, { label: "B =", accept: ["(5, 0)"], placeholder: "(x, y)" }] }
        ],
        answer: "**A = (4, 4)** and **B = (5, 0)**. Go across the x-axis first, then up the y-axis. B is on the x-axis, so its y-coordinate is 0."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers A: Decimals and percentages",
        prompt: "0.270 has the same value as 0.27",
        answer: true,
        explain: "Both are 2 tenths and 7 hundredths. The 0 in the thousandths place adds nothing.",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 0.27 }]
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Record the following numbers in ascending order: 1 045 054, 1 010 698, 1 909 987, 1 949 888",
        interact: [{ kind: "order", items: ["1 045 054", "1 010 698", "1 909 987", "1 949 888"], answer: [1, 0, 2, 3] }],
        answer: "1 010 698, 1 045 054, 1 909 987, 1 949 888. All have 1 million, so compare the hundred thousands, then the ten thousands."
      },
      {
        type: "sr", focus: "Represents numbers B: Whole numbers",
        prompt: "Liam needs to buy a present for $16. He only has $7. Use the number line to find how much he needs to borrow.",
        interact: [
          { kind: "jumps", start: 7, min: -9, max: 16, back: true, steps: [1, 5, 7, 10], hint: "Spend $16 starting from $7: jump back 7 to reach 0, then keep going." },
          { kind: "input", fields: [{ label: "He needs to borrow", prefix: "$", value: 9 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Jump back past zero", s: "7 − 16: back 7 reaches 0, back 9 more reaches −9. He is $9 short." }, { t: "Count on", s: "From $7 to $16: + 3 makes $10, + 6 makes $16. 3 + 6 = $9." }] },
        answer: "**$9**. 7 − 16 = −9, so he is $9 short and needs to borrow $9."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Which polygon doesn't belong? Record your reasoning.",
        interact: [{ kind: "classify", view: [1510, 345],
          cats: [{ k: "reg", t: "Regular", c: "#22A06B" }, { k: "cvx", t: "Irregular, convex", c: "#2F6FE4" }, { k: "ccv", t: "Irregular, concave", c: "#F2994A" }],
          hint: "Count the sides first. Then choose a group and tap each polygon that belongs in it.",
          shapes: [
            { p: "89,88 265,88 320,180 191,326 22,180", a: "cvx", fill: "#0B2A6B", deco: "<text x='175' y='170' class='co-name'>A</text>" },
            { p: "429,88 654,88 734,189 530,326 412,120", a: "cvx", fill: "#0B2A6B", deco: "<text x='565' y='180' class='co-name'>B</text>" },
            { p: "923,88 1048,179 1001,326 846,326 799,179", a: "reg", fill: "#0B2A6B", deco: "<text x='923' y='225' class='co-name'>C</text>" },
            { p: "1191,41 1287,204 1403,21 1483,245 1157,319", a: "ccv", fill: "#0B2A6B", deco: "<text x='1240' y='255' class='co-name'>D</text>" }] }],
        answer: "Answers vary. All four are pentagons (5 sides). **D** doesn't belong because it is concave: it has a reflex angle that points inwards. Or **C**, because it is the only regular pentagon."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Both regular polygons have a perimeter of 24 cm. Find the length of one side for each polygon.",
        interact: [
          { kind: "sides", view: [220, 200], label: "Regular hexagon A", fill: "#9FB4E8", poly: [[190, 100], [150, 169.3], [70, 169.3], [30, 100], [70, 30.7], [150, 30.7]] },
          { kind: "sides", view: [220, 200], label: "Regular octagon B", fill: "#9FB4E8", poly: [[183.9, 130.6], [140.6, 173.9], [79.4, 173.9], [36.1, 130.6], [36.1, 69.4], [79.4, 26.1], [140.6, 26.1], [183.9, 69.4]] },
          { kind: "input", fields: [{ label: "A (hexagon): one side", value: 4, suffix: "cm" }, { label: "B (octagon): one side", value: 3, suffix: "cm" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Share the perimeter", s: "Regular means all sides are equal. Hexagon: 24 ÷ 6 = 4 cm. Octagon: 24 ÷ 8 = 3 cm." }, { t: "Check with multiplication", s: "6 × 4 = 24 and 8 × 3 = 24." }] },
        answer: "**A: 4 cm** (24 ÷ 6) and **B: 3 cm** (24 ÷ 8)."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Which decimal number has the value **closest to 1.0**?",
        options: ["0.99", "1.1", "0.9", "2.0"],
        answer: 0,
        explain: "0.99 is only 1 hundredth (0.01) away from 1. 1.1 and 0.9 are each 1 tenth (0.1) away, and 2.0 is 1 whole away.",
        interact: [{ kind: "numberline", min: 0, max: 2, ticks: 10, tol: 0.04, items: [["0.99", 0.99], ["1.1", 1.1], ["0.9", 0.9], ["2.0", 2]] }]
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "Show one way of regrouping 3 463 485 using non-standard partitioning.",
        interact: [{ kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 3463485, target: 3463485, need: "nonstandard" }],
        answer: "Answers vary, for example 3 millions + 46 ten thousands + 3 thousands + 48 tens + 5 ones, or 3 000 000 + 463 000 + 485."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use rounding to find a reasonable estimate for 1238 + 329. Be prepared to justify your solution.",
        interact: [
          { kind: "marker", min: 1200, max: 1300, divs: 10, majorEvery: 5, labels: [1200, 1250, 1300], target: 1238, tol: 3, label: "1238", hint: "Slide the pin to 1238. Is it closer to 1200 or 1300?", msg: "Count on from 1200 in tens: 1210, 1220, 1230, then a bit more." },
          { kind: "input", fields: [{ label: "Estimate", min: 1500, max: 1570 }] }
        ],
        answer: "About **1500** (1200 + 300), or 1570 rounding to the nearest ten (1240 + 330). The exact answer is 1567."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Identify the lines of symmetry in the polygons. Which polygon doesn't belong? Explain your reasoning.",
        interact: [
          { kind: "mirror", view: [1180, 300], shapes: [
            { p: [[20, 40], [260, 40], [260, 220], [20, 220]], l: "A", lines: [[140, 20, 140, 240], [0, 130, 280, 130], [20, 40, 260, 220]] },
            { p: [[420, 20], [480, 130], [420, 240], [360, 130]], l: "B", lines: [[420, 5, 420, 255], [345, 130, 495, 130], [455, 66, 385, 194]] },
            { p: [[600, 50], [800, 50], [860, 210], [540, 210]], l: "C", lines: [[700, 30, 700, 230], [520, 130, 880, 130]] },
            { p: [[1139.6, 176], [1076, 239.6], [920.4, 84], [984, 20.4]], l: "D", lines: [[931, 31, 1129, 229], [1079.5, 80.5, 980.5, 179.5], [1030, 5, 1030, 255]] }] },
          { kind: "choose", rows: [{ t: "Which polygon doesn't belong?", options: ["A", "B", "C", "D"], a: 2 }] }
        ],
        answer: "**C** doesn't belong. The trapezium has only **1** line of symmetry. The rectangles (A and D) and the rhombus (B) each have **2**. A rectangle's diagonal is not a line of symmetry."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "The angles in this regular pentagon are all the same size. Estimate and describe the size of the angles. Explain your reasoning.",
        interact: [
          { kind: "corners", view: [300, 240], deg: true, r: 24, q: 34, shapes: [{ p: [[150, 20], [254.6, 96], [214.7, 219], [85.3, 219], [45.4, 96]], fill: "#8EDBFA" }] },
          { kind: "choose", rows: [{ t: "Each angle is", options: ["acute", "a right angle", "obtuse", "reflex"], a: 2 }] },
          { kind: "input", fields: [{ label: "Estimate", min: 100, max: 120, suffix: "°" }] }
        ],
        answer: "Each angle is **obtuse**: greater than a right angle (90°) but less than a straight angle (180°). Each one measures **108°**."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers A: Decimals and percentages",
        prompt: "The X on the number line represents 1.40",
        img: "u21-xline.png",
        answer: true,
        explain: "There are 10 small steps between each whole number, so each step is 0.1. X is 4 steps after 1, which is 1.4 = 1.40.",
        interact: [{ kind: "jumps", start: 1, min: 0, max: 3, steps: [0.1], hint: "Count the small steps from 1 to the X." }]
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Which number is 10 times larger than 0.7? Which number is 10 times smaller than 0.7? Explain your reasoning.",
        interact: [
          { kind: "pv", cols: ["T", "O", "t", "h"], start: 0.7, shift: true, hint: "Press × 10 or ÷ 10. The digits move; the decimal point stays put." },
          { kind: "input", fields: [{ label: "10 times larger", value: 7 }, { label: "10 times smaller", value: 0.07 }] }
        ],
        answer: "**7** and **0.07**. Multiplying by 10 moves each digit one place to the left. Dividing by 10 moves each digit one place to the right."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use rounding to find a reasonable estimate for 12 238 + 2 104. Be prepared to justify your thinking.",
        interact: [
          { kind: "marker", min: 12000, max: 13000, divs: 10, majorEvery: 5, labels: [12000, 12500, 13000], target: 12238, tol: 30, label: "12 238", hint: "Slide the pin to 12 238. Which thousand is it closer to?", msg: "Each step is 100. 12 238 is between 12 200 and 12 300." },
          { kind: "input", fields: [{ label: "Estimate", min: 14000, max: 14350 }] }
        ],
        answer: "About **14 000** (12 000 + 2 000), or 14 300 to the nearest hundred (12 200 + 2 100). The exact answer is 14 342."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "A class was lined up but had to change rooms. They turned and faced the opposite direction. Approximately how many degrees did the students turn?",
        interact: [
          { kind: "angle", names: true, degrees: true, target: "straight", start: 60, label: "Show the turn: drag the arm to face the opposite way." },
          { kind: "input", fields: [{ label: "They turned about", value: 180, suffix: "°" }] }
        ],
        answer: "**180°**, a half turn. Facing the opposite direction makes a straight angle."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Triangles can be classified and compared by their angles. Which of the triangles below doesn't belong? Record your reasoning.",
        interact: [
          { kind: "corners", view: [1780, 380], r: 44, q: 70, hit: 34, shapes: [
            { p: [[50, 270], [287, 23], [324, 362]], l: "A" }, { p: [[449, 43], [927, 305], [637, 307]], l: "B", lx: 680, ly: 250 },
            { p: [[1207, 27], [1087, 322], [1328, 322]], l: "C", ly: 230 }, { p: [[1720, 53], [1446, 222], [1574, 340]], l: "D" }] },
          { kind: "choose", rows: [
            { t: "A", options: ["acute-angled", "right-angled", "obtuse-angled"], a: 0 },
            { t: "B", options: ["acute-angled", "right-angled", "obtuse-angled"], a: 2 },
            { t: "C", options: ["acute-angled", "right-angled", "obtuse-angled"], a: 0 },
            { t: "D", options: ["acute-angled", "right-angled", "obtuse-angled"], a: 0 },
            { t: "Which doesn't belong?", options: ["A", "B", "C", "D"], a: 1 }] }
        ],
        answer: "**B** doesn't belong. It is the only obtuse-angled triangle (one angle is greater than 90°). A, C and D are acute-angled: all their angles are less than 90°."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Represents numbers A: Whole numbers",
        prompt: "Which shows 184 353 **rounded to the nearest hundred**?",
        options: ["184 400", "184 440", "184 300", "185 000"],
        answer: 0,
        explain: "184 353 is between 184 300 and 184 400. It is more than halfway (184 350), so it rounds up to 184 400.",
        interact: [{ kind: "marker", min: 184300, max: 184400, divs: 10, majorEvery: 5, labels: [184300, 184350, 184400], label: "184 353", hint: "Slide the pin to 184 353. Which hundred is it closer to?" }]
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "When 123 is recorded using standard partitioning it is 100 + 20 + 3. Record the decimal number 5.429 using standard partitioning.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 5.429 },
          { kind: "input", fields: [{ label: "5.429 =", value: 5 }, { label: "+", value: 0.4 }, { label: "+", value: 0.02 }, { label: "+", value: 0.009 }] }
        ],
        answer: "**5 + 0.4 + 0.02 + 0.009**: 5 ones, 4 tenths, 2 hundredths and 9 thousandths."
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals and percentages",
        prompt: "Record the missing equivalent benchmark fractions, decimals and percentages.",
        interact: [
          { kind: "shade", parts: 4, pct: true, hint: "Shade parts of the strip to see each fraction as a percentage." },
          { kind: "cells", cols: 3, w: 150, free: true, msg: "Per cent means out of 100. Half of 100 is 50.", grid: [
            ["#Fraction", "#Decimal", "#Percentage"],
            [{ v: 0.5 }, { v: 0.5 }, "50%"],
            [{ v: 0.75 }, "0.75", { v: 75 }],
            [{ v: 1 }, { v: 1 }, "100%"]] }
        ],
        answer: "[1/2] = 0.5 = 50% · [3/4] = 0.75 = 75% · 1 = 1.0 = 100%"
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the letter for each type of angle: acute, obtuse, reflex.",
        interact: [
          { kind: "corners", view: [300, 245], deg: true, r: 20, q: 26, hit: 14, shapes: [{ p: [[150, 15], [174.7, 91], [254.6, 91], [190, 138], [214.7, 214], [150, 167], [85.3, 214], [110, 138], [45.4, 91], [125.3, 91]], fill: "#FDE3EA",
            marks: [{ v: 1, l: "A", ext: true }, { v: 4, l: "B" }, { v: 7, l: "C" }] }], hint: "Tap a marked corner to test it with a right angle. Tap again to name it." },
          { kind: "choose", rows: [
            { t: "acute", options: ["A", "B", "C"], a: 1 },
            { t: "obtuse", options: ["A", "B", "C"], a: 0 },
            { t: "reflex", options: ["A", "B", "C"], a: 2 }] }
        ],
        answer: "Acute: **B** (the point of the star, 36°) · Obtuse: **A** (outside the star between two points, 108°) · Reflex: **C** (inside the star at an inner corner, 252°)",
        explain: "Angle A is measured outside the star, as marked on the slide."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Both parks have the same area. The first park is 6 m wide and 9 m long. What could the dimensions of the second park be?",
        interact: [
          { kind: "array", rows: 6, cols: 9, total: 54, max: 27, showTotal: true, hint: "This is the first park: 6 rows of 9 one-metre squares. Rearrange the same 54 squares into a longer, thinner park." },
          { kind: "pair", labels: ["width", "length"], unit: "m", rule: "area", target: 54, exclude: [[6, 9]] }
        ],
        answer: "Answers vary. Area = 6 × 9 = 54 m². The second park could be **3 m × 18 m**, 2 m × 27 m or 1 m × 54 m."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents numbers A: Whole numbers",
        prompt: "5 461 793 rounded to the nearest million is 5 million.",
        answer: true,
        explain: "5 461 793 is less than halfway between 5 million and 6 million (5 500 000), so it rounds down to 5 000 000.",
        interact: [{ kind: "marker", min: 5000000, max: 6000000, divs: 10, majorEvery: 5, labels: [5000000, 5500000, 6000000], label: "5 461 793", hint: "Slide the pin to 5 461 793. Is it before or after halfway?" }]
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Write the number that is 100 times larger than 5.429",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h", "th"], start: 5.429, shift: true, hint: "× 100 is × 10 and then × 10 again." },
          { kind: "input", fields: [{ label: "100 × 5.429 =", value: 542.9 }] }
        ],
        answer: "**542.9**. Multiplying by 100 moves each digit two places to the left."
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals and percentages",
        prompt: "Lucas is a silver member of the football club. How much will 2 tickets cost?",
        table: [["Ticket price", "Bronze member discount", "Silver member discount", "Gold member discount"], ["$60.00", "20%", "30%", "40%"]],
        interact: [
          { kind: "shade", parts: 10, pct: true, each: 6, money: true, hint: "The strip is one $60 ticket. Each part is 10%. Shade the silver discount." },
          { kind: "input", fields: [{ label: "2 tickets cost", prefix: "$", value: 84 }] }
        ],
        cubes: { ops: ["×", "−"], also: ["÷"], solve: [{ t: "Find 10% first", s: "10% of $60 = $6, so 30% = $18. One ticket: $60 − $18 = $42. Two tickets: 2 × $42 = $84." }, { t: "Pay 70%", s: "A 30% discount means paying 70%. 70% of $60 = 7 × $6 = $42. 2 × $42 = $84." }] },
        answer: "**$84**. Each ticket is $60 − 30% ($18) = $42, and 2 × $42 = $84."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Draw the following on your whiteboard: an acute angle, a reflex angle, a right angle, perpendicular lines.",
        interact: [
          { kind: "angle", names: true, reflex: true, degrees: true, target: "acute", start: 120, label: "An acute angle" },
          { kind: "angle", names: true, reflex: true, degrees: true, target: "reflex", start: 120, label: "A reflex angle" },
          { kind: "angle", names: true, reflex: true, degrees: true, target: "right", start: 120, label: "A right angle" },
          { kind: "sketch" }
        ],
        answer: "Acute: less than 90°. Reflex: more than 180° and less than 360°. Right: exactly 90°. Perpendicular lines meet at a right angle."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Which is heavier: 0.08 kg or 75 grams? Be prepared to share your reasoning.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.08, hint: "This is 0.08 kg. 1 thousandth of a kilogram is 1 gram. Break the counters into thousandths to count the grams." },
          { kind: "input", fields: [{ label: "0.08 kg =", value: 80, suffix: "g" }] },
          { kind: "choose", rows: [{ t: "Heavier", options: ["0.08 kg", "75 g"], a: 0 }] }
        ],
        answer: "**0.08 kg** is heavier. 0.08 kg = 80 g, and 80 g > 75 g."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Represents numbers A: Whole numbers",
        prompt: "Which shows the numbers arranged in **descending** order?",
        display: "6 861 583,   6 471 883,   5 461 837",
        options: ["5 861 583, 6 471 883, 7 461 837", "7 461 583, 7 471 883, 5 461 837", "5 461 837, 6 471 883, 6 861 583", "6 861 583, 6 471 883, 5 461 837"],
        answer: 3,
        explain: "Descending means largest to smallest. Compare millions (6, 6, 5), then hundred thousands (8 > 4). Note: on the slide, options A and C were identical, so C has been changed to the ascending order.",
        interact: [{ kind: "order", items: ["6 471 883", "5 461 837", "6 861 583"], answer: [2, 0, 1] }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Kieran is measuring the growth of a plant in Science. Last week it was 12.72 cm tall. It has grown another 1.35 cm. How tall is the plant now?",
        interact: [
          { kind: "jumps", start: 12.72, steps: [1, 0.1, 0.01], hint: "Jump + 1, then + 0.3, then + 0.05. Use Jump by for bigger jumps." },
          { kind: "input", fields: [{ label: "Height now", value: 14.07, suffix: "cm" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Jump by place value", s: "12.72 + 1 = 13.72, + 0.3 = 14.02, + 0.05 = 14.07 cm." }, { t: "Line up the decimal points", s: "12.72 + 1.35: 2 + 5 = 7 hundredths, 7 + 3 = 10 tenths (1 whole), 12 + 1 + 1 = 14. That's 14.07 cm." }] },
        answer: "**14.07 cm**"
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Write a number sentence to show your understanding of each multiplicative property: commutative, associative, distributive.",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "Commutative: rotate the array. 3 rows of 4 is the same as 4 rows of 3." },
          { kind: "sentence", fields: [
            { label: "Commutative", placeholder: "e.g. 3 × 4 = 4 × 3", re: "^\\s*(\\d+(?:\\.\\d+)?)\\s*x\\s*(\\d+(?:\\.\\d+)?)\\s*=\\s*\\2\\s*x\\s*\\1\\s*$", msg: "Commutative: swap the order of the two numbers, like a × b = b × a.", sample: "3 x 4 = 4 x 3" },
            { label: "Associative", placeholder: "e.g. (2 × 3) × 5 = 2 × (3 × 5)", re: "^\\s*\\(\\s*(\\d+)\\s*x\\s*(\\d+)\\s*\\)\\s*x\\s*(\\d+)\\s*=\\s*\\1\\s*x\\s*\\(\\s*\\2\\s*x\\s*\\3\\s*\\)\\s*$|^\\s*(\\d+)\\s*x\\s*\\(\\s*(\\d+)\\s*x\\s*(\\d+)\\s*\\)\\s*=\\s*\\(\\s*\\4\\s*x\\s*\\5\\s*\\)\\s*x\\s*\\6\\s*$", msg: "Associative: keep the same numbers in order, and change which pair you multiply first, like (a × b) × c = a × (b × c).", sample: "(2 x 3) x 5 = 2 x (3 x 5)" },
            { label: "Distributive", placeholder: "e.g. 6 × 14 = 6 × 10 + 6 × 4", re: "x\\s*\\(?\\s*\\d+\\s*[+-]|[+-]\\s*\\d+\\s*\\)\\s*x|\\d+\\s*x\\s*\\d+\\s*[+-]\\s*\\d+\\s*x\\s*\\d+", msg: "Distributive: split one number into parts, multiply each part, then add, like 6 × 14 = 6 × 10 + 6 × 4.", sample: "6 x 14 = 6 x 10 + 6 x 4" }] }
        ],
        answer: "Answers vary. Commutative: 3 × 4 = 4 × 3. Associative: (2 × 3) × 5 = 2 × (3 × 5). Distributive: 6 × 14 = 6 × 10 + 6 × 4."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Jules measured the angle to be 180°. What is the name of the angle?",
        interact: [
          { kind: "angle", names: true, degrees: true, target: "straight", start: 120, label: "Make a 180° angle." },
          { kind: "choose", rows: [{ t: "Name", options: ["acute", "obtuse", "straight", "reflex"], a: 2 }] }
        ],
        answer: "A **straight angle**: the two arms make a straight line."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Sandra went to bed at 11:15 pm. Convert this to 24-hour time.",
        interact: [
          { kind: "clock", time: "11:15", h24: true },
          { kind: "input", fields: [{ label: "24-hour time", accept: ["23:15"], placeholder: "hh:mm" }] }
        ],
        answer: "**23:15**. For pm times, add 12 to the hour: 11 + 12 = 23."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents numbers A: Whole numbers",
        prompt: "1000 thousands is 1 million.",
        answer: true,
        explain: "1000 × 1000 = 1 000 000. Group 10 thousands into a ten thousand, 10 ten thousands into a hundred thousand, and 10 hundred thousands into a million.",
        interact: [{ kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: { Th: 1000 } }]
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "What are 2 decimal numbers that can be found between 1.406 and 1.411? Show your answer on a number line.",
        interact: [
          { kind: "marker", min: 1.406, max: 1.411, divs: 5, labels: [1.406, 1.407, 1.408, 1.409, 1.41, 1.411], label: "?", hint: "Each step is 1 thousandth. Slide the pin to a number in between." },
          { kind: "input", fields: [{ label: "First number", min: 1.40601, max: 1.41099 }, { label: "Second number", min: 1.40601, max: 1.41099 }] }
        ],
        answer: "Answers vary: 1.407, 1.408, 1.409 or 1.41. Numbers like 1.4065 also work."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record these divisions as fractions: 3 divided by 2, 4 divided by 8, 8 divided by 8.",
        interact: [
          { kind: "pack", mode: "share", n: 2, total: 3, thing: "pizzas", label: "person", hint: "Share 3 pizzas between 2 people. What happens to the last pizza?" },
          { kind: "input", fields: [{ label: "3 ÷ 2 =", value: 1.5, placeholder: "a/b" }, { label: "4 ÷ 8 =", value: 0.5, placeholder: "a/b" }, { label: "8 ÷ 8 =", value: 1, placeholder: "a/b" }] }
        ],
        answer: "3 ÷ 2 = [3/2] (1[1/2]) · 4 ÷ 8 = [4/8] = [1/2] · 8 ÷ 8 = [8/8] = 1"
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "The students arrived at school at 08:45 am and left at 15:15 hours. How long were students at school?",
        interact: [
          { kind: "jumps", time: "24", start: 525, end: 915, steps: [15, 30, 60], hint: "Jump to the next o'clock first, then jump in hours." },
          { kind: "input", fields: [{ label: "Hours", value: 6 }, { label: "Minutes", value: 30 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Jump along a timeline", s: "08:45 + 15 min = 09:00, + 6 h = 15:00, + 15 min = 15:15. That's 6 h 30 min." }, { t: "Subtract the times", s: "15:15 − 08:45: 15:15 − 8 h = 07:15, − 45 min = 06:30. That's 6 h 30 min." }] },
        answer: "**6 hours 30 minutes**"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Lochie's dog woke him up during the night. What was the time? Convert this to 24-hour time.",
        interact: [
          { kind: "clock", time: "12:05", h24: true },
          { kind: "input", fields: [{ label: "24-hour time", accept: ["00:05"], placeholder: "hh:mm" }] }
        ],
        answer: "**00:05** (12:05 am). Times between midnight and 1 am start with 00 in 24-hour time.",
        explain: "The clock shows 12:05. It is during the night, so it is 12:05 am."
      }
    ]
  ]
});
