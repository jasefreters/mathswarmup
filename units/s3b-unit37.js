/*
  Stage 3 Year B, Unit 37 — Review of learning (Term 4, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
(() => {
  // Square grid drawn over the shapes (clicks pass through to the shapes underneath).
  const grid = (cols, rows, u, o) => {
    let s = "<g style='pointer-events:none' stroke='#8C8F96' stroke-width='1'>";
    for (let x = 0; x <= cols; x++) s += "<line x1='" + (o + x * u) + "' y1='" + o + "' x2='" + (o + x * u) + "' y2='" + (o + rows * u) + "'/>";
    for (let y = 0; y <= rows; y++) s += "<line x1='" + o + "' y1='" + (o + y * u) + "' x2='" + (o + cols * u) + "' y2='" + (o + y * u) + "'/>";
    return s + "</g>";
  };

  UNITS.push({
    stage: 3, ab: "B", term: 4, ls: 2, unit: 37,
    img: "img/s3/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 37 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1
      [
        {
          type: "mc", focus: "Multiplicative relations B",
          prompt: "Nathan needs to multiply 497 × 87. He estimates by multiplying 500 × 90. Which answer is an accurate estimate?",
          options: ["14 000", "4500", "1400", "45 000"],
          answer: 3,
          explain: "500 × 90 = 5 × 9 × 100 × 10 = 45 × 1000 = 45 000. The exact answer, 497 × 87 = 43 239, is close to 45 000.",
          interact: [{ kind: "reveal", items: [["5 × 9", "45"], ["500 × 90 = 45 × 100 × 10", "45 000"], ["Exact: 497 × 87", "43 239"]] }],
          cubes: { ops: ["×"], note: "Round each number first, then multiply.", solve: [{ t: "Use basic facts", s: "5 × 9 = 45. Then × 100 × 10 adds three zeros: 45 000." }, { t: "Multiply by 10s", s: "500 × 90 = 500 × 9 × 10 = 4500 × 10 = 45 000." }] }
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "List the factors of 36.",
          interact: [
            { kind: "array", rows: 6, cols: 6, max: 12, showTotal: true, hint: "Change the rows and columns to make other arrays of 36. Each array gives a factor pair." },
            { kind: "numchart", from: 1, to: 36, answer: [1, 2, 3, 4, 6, 9, 12, 18, 36], hint: "Tap every factor of 36. Think in pairs: 1 × 36, 2 × 18, …" }
          ],
          answer: "**1, 2, 3, 4, 6, 9, 12, 18 and 36**. The factor pairs are 1 × 36, 2 × 18, 3 × 12, 4 × 9 and 6 × 6."
        },
        {
          type: "sr", focus: "Representing quantity fractions A",
          prompt: "Jake ate [3/4] of a cake and Kate ate [2/3] of a different cake. Jake said he ate more than Kate. How could he be correct? Draw a diagram to show your thinking.",
          interact: [
            { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "Jake's cake: [3/4] eaten." },
            { kind: "shade", parts: 3, pre: [0, 1], hint: "Kate's cake, the same size: [2/3] eaten." },
            { kind: "select", hint: "Tap every reason that shows Jake could be correct.", items: [
              ["The cakes are the same size, and [3/4] is more than [2/3] ([9/12] > [8/12])", true],
              ["Jake's cake was bigger than Kate's", true],
              ["[2/3] is more than [3/4]", false],
              ["Kate's cake was twice as big as Jake's", false]] }
          ],
          cubes: { ops: ["÷"], note: "Compare the wholes before comparing the fractions.", solve: [{ t: "Same-size cakes", s: "Cut both into twelfths: [3/4] = [9/12] and [2/3] = [8/12]. 9 twelfths is more than 8 twelfths." }, { t: "Different-size cakes", s: "If Jake's cake was bigger, his [3/4] is even more than Kate's [2/3]. Draw Jake's cake larger to show it." }] },
          answer: "If the cakes are the **same size**, Jake is correct: [3/4] = [9/12] and [2/3] = [8/12], so he ate [1/12] of a cake more. He is also correct if **his cake was bigger**.",
          explain: "[3/4] is already more than [2/3] for equal wholes, so Jake is right unless Kate's cake was much bigger (more than [9/8] the size of his). Both reasons that keep Jake correct are marked right."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "18 cards are shared between 2 people. One person gets 4 more than the other. How many cards does each person get? Communicate your reasoning on a number line, tape diagram or bar model.",
          interact: [
            { kind: "bar", whole: { v: 18, l: "18", n: "cards" }, parts: [{ v: 7, l: "7", n: "person 1", hide: true }, { v: 7, l: "7", n: "person 2", hide: true }, { v: 4, l: "4 more", n: "person 2" }], hint: "Take away the 4 extra cards first. Share what is left equally. Tap a ? to reveal it." },
            { kind: "input", fields: [{ label: "Person with fewer cards", value: 7, suffix: "cards" }, { label: "Person with more cards", value: 11, suffix: "cards" }] }
          ],
          cubes: { ops: ["−", "÷", "+"], solve: [{ t: "Take away the extra", s: "18 − 4 = 14. 14 ÷ 2 = 7. One person gets 7, the other gets 7 + 4 = 11." }, { t: "Guess and check", s: "Try 8 and 12: that's 20, too many. Try 7 and 11: 7 + 11 = 18 and 11 − 7 = 4 ✓." }] },
          answer: "**7 cards** and **11 cards**. 18 − 4 = 14, 14 ÷ 2 = 7, and 7 + 4 = 11. Check: 7 + 11 = 18."
        },
        {
          type: "sr", focus: "Data B",
          prompt: "Which activity had the least difference between the number of girls and boys in it? How many more girls chose drama rehearsal than boys?",
          interact: [
            { kind: "bargraph", max: 40, step: 5, ylabel: "Number of students", xlabel: "Activities", label: "Lunchtime activities: girls and boys",
              series: [{ l: "Girls", c: "#7030A0" }, { l: "Boys", c: "#009999" }],
              groups: [{ l: "Playground", v: [15, 22] }, { l: "Sports practice", v: [7, 16] }, { l: "Drama rehearsal", v: [35, 17] }, { l: "Library", v: [8, 6] }, { l: "Sports equipment", v: [6, 12] }, { l: "Play with friends", v: [12, 13] }, { l: "Chat", v: [9, 6] }] },
            { kind: "choose", rows: [{ t: "Least difference", options: ["Library", "Play with friends", "Chat", "Playground"], a: 1 }] },
            { kind: "input", fields: [{ label: "More girls than boys in drama", value: 18, suffix: "girls" }] }
          ],
          answer: "**Play with friends** (12 girls, 13 boys: a difference of 1). Drama rehearsal: 35 girls − 17 boys = **18 more girls**.",
          explain: "Read from the graph: some boys' bars sit between gridlines (22, 16, 17 and 13). Library differs by 2 and chat by 3, so play with friends has the least difference."
        }
      ],
      // Review 2
      [
        {
          type: "tf", focus: "Multiplicative relations B",
          prompt: "The numbers 6, 5, 4 and 0 in a number sentence _ _ _ × _ can make an answer of zero.",
          answer: true,
          explain: "Put 0 as the number you multiply by: 654 × 0 = 0. Any number multiplied by zero is zero.",
          interact: [{ kind: "reveal", items: [["654 × 0", "0"], ["456 × 0", "0"], ["Any number × 0", "0"]] }]
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "What is the product of 12 × 18?",
          interact: [
            { kind: "array", rows: 12, cols: 18, max: 18, showTotal: true, hint: "12 rows of 18. Split it: 10 rows of 18 and 2 rows of 18." },
            { kind: "input", fields: [{ label: "12 × 18 =", value: 216 }] }
          ],
          answer: "**216**. 10 × 18 = 180 and 2 × 18 = 36. 180 + 36 = 216."
        },
        {
          type: "sr", focus: "Representing quantity fractions A",
          prompt: "What fraction is needed to complete the whole?",
          interact: [
            { kind: "shade", parts: 12, pre: [0, 1, 2, 3, 4], hint: "5 of the 12 parts are shaded. Shade the rest to make the whole." },
            { kind: "input", fields: [{ label: "Fraction needed", accept: ["7/12"], placeholder: "a/b" }] }
          ],
          answer: "**[7/12]**. [5/12] is shaded, and [12/12] − [5/12] = [7/12]."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "The camp bus costs $200 to hire plus $750 for each trip it takes. The school hires the bus for 2 trips. The school also gets a $50 discount off the total price. What is the total cost? Communicate your reasoning on a number line.",
          interact: [
            { kind: "jumps", start: 0, steps: [200, 750, 50], back: true, money: true, hint: "Jump + $200 to hire, + $750 for each trip, then − $50 for the discount." },
            { kind: "input", fields: [{ label: "Total cost", prefix: "$", value: 1650 }] }
          ],
          cubes: { ops: ["×", "+", "−"], solve: [{ t: "Step by step", s: "2 trips: 2 × $750 = $1500. Add the hire: $1500 + $200 = $1700. Take off the discount: $1700 − $50 = $1650." }, { t: "Number line", s: "Start at 0, jump +$200, +$750, +$750 to $1700, then jump back $50 to $1650." }] },
          answer: "**$1650**. $200 + $750 + $750 = $1700, then $1700 − $50 = $1650."
        },
        {
          type: "sr", focus: "Geometric measure B",
          prompt: "Record the coordinates for these points on the Cartesian plane. A = ?, B = ?, C = ?",
          interact: [
            { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "A", x: 4, y: 3 }, { l: "B", x: -2, y: 5 }, { l: "C", x: -4, y: -1 }], hint: "Tap a point to trace it to each axis. Read across (x) first, then up or down (y)." },
            { kind: "input", fields: [{ label: "A: x", value: 4 }, { label: "A: y", value: 3 }, { label: "B: x", value: -2 }, { label: "B: y", value: 5 }, { label: "C: x", value: -4 }, { label: "C: y", value: -1 }] }
          ],
          answer: "**A = (4, 3)** · **B = (−2, 5)** · **C = (−4, −1)**. Go across the x-axis first, then up or down the y-axis."
        }
      ],
      // Review 3
      [
        {
          type: "mc", focus: "Multiplicative relations B",
          prompt: "32 × 12 = ?",
          options: ["362", "384", "303", "329"],
          answer: 1,
          explain: "Split 12 into 10 + 2: 32 × 10 = 320 and 32 × 2 = 64. 320 + 64 = 384.",
          interact: [{ kind: "reveal", items: [["32 × 10", "320"], ["32 × 2", "64"], ["320 + 64", "384"]] }]
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "If a garden bed has an area of 84 m², what could the dimensions be?",
          interact: [
            { kind: "array", rows: 7, cols: 12, max: 12, showTotal: true, hint: "Each dot is 1 m². Change the rows and columns to find rectangles of 84." },
            { kind: "pair", labels: ["Length", "Width"], unit: "m", rule: "area", target: 84 }
          ],
          cubes: { ops: ["×", "÷"], note: "Area = length × width, so look for factor pairs of 84.", solve: [{ t: "Factor pairs", s: "84 = 1 × 84 = 2 × 42 = 3 × 28 = 4 × 21 = 6 × 14 = 7 × 12." }, { t: "Divide", s: "Choose a width, such as 6 m. 84 ÷ 6 = 14, so the length is 14 m." }] },
          answer: "Any pair that multiplies to 84, for example **7 m × 12 m**, 6 m × 14 m, 4 m × 21 m, 3 m × 28 m, 2 m × 42 m or 1 m × 84 m.",
          explain: "Any length × width that makes 84 is marked correct, including decimals such as 8 m × 10.5 m."
        },
        {
          type: "sr", focus: "Represents numbers B",
          prompt: "Record the missing equivalent benchmark fractions, decimals and percentages.",
          interact: [
            { kind: "shade", parts: 4, pct: true, hint: "Shade quarters to read each fraction as a percentage." },
            { kind: "cells", cols: 3, w: 130, free: true, msg: "Check each row: the fraction, decimal and percentage must all be the same amount.", grid: [
              ["#Fraction", "#Decimal", "#Percentage"],
              ["[1/4]", "0.25", { v: 25 }],
              [{ v: 0.5 }, { v: 0.5 }, "50%"],
              ["[3/4]", "0.75", { v: 75 }],
              [{ v: 1 }, { v: 1 }, "100%"]] }
          ],
          answer: "[1/4] = 0.25 = **25%** · **[1/2]** = **0.5** = 50% · [3/4] = 0.75 = **75%** · **[1/1]** (one whole) = **1** = 100%.",
          explain: "Any equivalent fraction is accepted, for example 2/4 for one half and 4/4 for one whole."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "Kobi bought secondhand games for $20, $37 and $19. He also bought 2 controllers at $39 each. How much did he spend? Use a number line to communicate your reasoning.",
          interact: [
            { kind: "jumps", start: 0, steps: [20, 37, 19, 39], money: true, hint: "Jump for each game, then jump $39 for each controller." },
            { kind: "input", fields: [{ label: "Total spent", prefix: "$", value: 154 }] }
          ],
          cubes: { ops: ["+", "×"], note: "There are 2 controllers, so $39 is counted twice.", solve: [{ t: "Group friendly numbers", s: "Games: $20 + $37 + $19 = $76. Controllers: 2 × $39 = $78. $76 + $78 = $154." }, { t: "Round and adjust", s: "$19 ≈ $20 and $39 ≈ $40: $20 + $37 + $20 + $40 + $40 = $157. Take back the extra $3: $154." }] },
          answer: "**$154**. Games: $20 + $37 + $19 = $76. Controllers: 2 × $39 = $78. $76 + $78 = $154."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B",
          prompt: "Has this irregular pentagon been translated, reflected or rotated? Communicate your reasoning.",
          interact: [
            { kind: "mirror", view: [920, 260], label: "Two irregular pentagons with a dashed line between them", hint: "Predict first. Then tap the dashed mirror line to flip the shapes over it. Does each shape land exactly on the other?",
              shapes: [
                { p: [[421, 137], [298, 227], [87, 182], [22, 27], [295, 27], [421, 137], [499, 137], [625, 27], [898, 27], [833, 182], [622, 227], [499, 137]], fill: "#9FB4E8", lines: [[460, 5, 460, 255]] }] },
            { kind: "choose", rows: [
              { t: "The shape has been", options: ["Translated", "Reflected", "Rotated"], a: 1 },
              { t: "Why?", options: ["It is a mirror image: it has been flipped over a vertical line", "It has slid across without changing", "It has turned around a point"], a: 0 }] }
          ],
          answer: "**Reflected**. The second shape is a mirror image of the first, flipped over a vertical line. The long flat side is still at the top, but the point now faces the other way.",
          explain: "The slide calls this shape a hexagon, but it has 5 sides, so it is called an irregular pentagon here. A translation would face the same way, and a half turn would put the flat side at the bottom."
        }
      ],
      // Review 4
      [
        {
          type: "tf", focus: "Multiplicative relations B",
          prompt: "Mark multiplied 245 × 20 and got an answer of 4900. Mark's answer is incorrect.",
          answer: false,
          explain: "Mark is right, so the statement is false. 245 × 2 = 490, and × 10 = 4900.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 245, shift: true, hint: "Multiply by 10 to get 2450. Then double it: 4900." }],
          cubes: { ops: ["×"], solve: [{ t: "Double, then × 10", s: "245 × 2 = 490. 490 × 10 = 4900. Mark is correct." }, { t: "× 10, then double", s: "245 × 10 = 2450. 2450 × 2 = 4900." }] }
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B",
          prompt: "Transform the shape to calculate the area.",
          interact: [
            { kind: "classify", view: [440, 360], label: "A parallelogram on a square grid", hint: "Tap the triangle to cut it off. Slide it to the dashed space on the right. What shape do you make?",
              cats: [{ k: "m", t: "Cut and move", c: "#F2994A" }],
              shapes: [
                { p: "60,60 140,60 140,300", a: "m", fill: "#9FB4E8" },
                { p: "140,60 300,60 380,300 140,300", fill: "#9FB4E8",
                  deco: "<polygon points='300,60 380,60 380,300' fill='none' stroke='#F2994A' stroke-width='3' stroke-dasharray='8 6' style='pointer-events:none'/>" + grid(10, 8, 40, 20) + "<polygon points='60,60 300,60 380,300 140,300' fill='none' stroke='#111' stroke-width='4' style='pointer-events:none'/>" }] },
            { kind: "input", fields: [{ label: "Length of the rectangle", value: 6, suffix: "units" }, { label: "Width of the rectangle", value: 6, suffix: "units" }, { label: "Area", value: 36, suffix: "square units" }] }
          ],
          answer: "**36 square units**. Cut the triangle off one end and move it to the other end. The parallelogram becomes a 6 × 6 rectangle: 6 × 6 = 36.",
          explain: "The slide's grid has no unit, so the area is in square units (one grid square each)."
        },
        {
          type: "sr", focus: "Represents numbers B",
          prompt: "The school gets a discount for hiring the local swimming pool. They only pay 40% of $550. How much will it cost now?",
          interact: [
            { kind: "shade", parts: 10, pct: true, each: 55, money: true, hint: "Each part is 10% of $550 = $55. Shade 40%." },
            { kind: "input", fields: [{ label: "Cost", prefix: "$", value: 220 }] }
          ],
          cubes: { ops: ["÷", "×"], solve: [{ t: "Find 10% first", s: "10% of $550 = $55. 40% = 4 × $55 = $220." }, { t: "Halve and halve again", s: "50% of $550 = $275. 40% is 10% less: $275 − $55 = $220." }] },
          answer: "**$220**. 10% of $550 is $55, so 40% is 4 × $55 = $220."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "Frankie is solving 1504 − 896. What mental strategy could she use to solve it efficiently?",
          interact: [
            { kind: "jumps", start: 896, end: 1504, steps: [4, 100, 600], hint: "Count up from 896: jump to 900, then on to 1504." },
            { kind: "select", hint: "Tap every efficient mental strategy.", items: [
              ["Add 4 to both numbers: 1508 − 900", true],
              ["Count up from 896: + 4 to 900, then + 604 to 1504", true],
              ["Subtract 900, then add 4 back: 1504 − 900 + 4", true],
              ["Count back 896 in ones", false]] },
            { kind: "input", fields: [{ label: "1504 − 896 =", value: 608 }] }
          ],
          cubes: { ops: ["−"], solve: [{ t: "Constant difference", s: "Add 4 to both numbers: 1508 − 900 = 608. The difference stays the same." }, { t: "Count up", s: "896 + 4 = 900, 900 + 600 = 1500, 1500 + 4 = 1504. 4 + 600 + 4 = 608." }] },
          answer: "**608**. For example, add 4 to both numbers: 1508 − 900 = 608. Or count up from 896: 4 + 600 + 4 = 608."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B",
          prompt: "The rectangular prism has a volume of 32 cubic-centimetre blocks. The base layer has 4 rows of 2 blocks. How many layers of blocks are there?",
          img: "u37-prism.png",
          interact: [
            { kind: "array", rows: 4, cols: 2, showTotal: true, hint: "This is the base layer: 4 rows of 2 blocks." },
            { kind: "input", fields: [{ label: "Blocks in one layer", value: 8, suffix: "blocks" }, { label: "Number of layers", value: 4, suffix: "layers" }] }
          ],
          cubes: { ops: ["×", "÷"], solve: [{ t: "Divide", s: "One layer: 4 × 2 = 8 blocks. 32 ÷ 8 = 4 layers." }, { t: "Build up", s: "Add layers of 8: 8, 16, 24, 32. That's 4 layers." }] },
          answer: "**4 layers**. The base layer has 4 × 2 = 8 blocks, and 32 ÷ 8 = 4."
        }
      ],
      // Review 5
      [
        {
          type: "mc", focus: "Represents numbers B",
          prompt: "Which gives you the most money?",
          options: ["50% of $30", "25% of $100", "50% of $10", "10% of $50"],
          answer: 1,
          explain: "A: half of $30 = $15. B: a quarter of $100 = $25. C: half of $10 = $5. D: a tenth of $50 = $5. B gives the most.",
          interact: [{ kind: "reveal", items: [["50% of $30", "$15"], ["25% of $100", "$25"], ["50% of $10", "$5"], ["10% of $50", "$5"]] }]
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B",
          prompt: "Calculate the area of the triangle.",
          interact: [
            { kind: "classify", view: [320, 360], label: "A triangle on a square grid, inside a rectangle", hint: "Tap Triangle and tap the triangle. Then tap Outside and tap the two pieces beside it. Together they make a rectangle.",
              cats: [{ k: "t", t: "Triangle", c: "#3E86B8" }, { k: "o", t: "Outside the triangle", c: "#F2C94C" }],
              shapes: [
                { p: "60,60 140,60 60,300", a: "o", fill: "#FFFFFF" },
                { p: "140,60 220,60 220,300", a: "o", fill: "#FFFFFF" },
                { p: "140,60 220,300 60,300", a: "t", fill: "#9FB4E8",
                  deco: grid(7, 8, 40, 20) + "<polygon points='140,60 220,300 60,300' fill='none' stroke='#111' stroke-width='4' style='pointer-events:none'/>" }] },
            { kind: "input", fields: [{ label: "Base", value: 4, suffix: "units" }, { label: "Height", value: 6, suffix: "units" }, { label: "Area", value: 12, suffix: "square units" }] }
          ],
          answer: "**12 square units**. The triangle has a base of 4 and a height of 6. It is half of a 4 × 6 rectangle: 24 ÷ 2 = 12.",
          explain: "The slide's grid has no unit, so the area is in square units (one grid square each)."
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Write equivalent fractions from the number line for: [1/5], [2/5], [3/5], [4/5] and [5/5].",
          interact: [
            { kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.03, items: [["[1/5]", 0.2], ["[2/5]", 0.4], ["[3/5]", 0.6], ["[4/5]", 0.8], ["[5/5]", 1]] },
            { kind: "input", fields: [{ label: "[1/5] =", accept: ["2/10"], placeholder: "?/10" }, { label: "[2/5] =", accept: ["4/10"], placeholder: "?/10" }, { label: "[3/5] =", accept: ["6/10"], placeholder: "?/10" }, { label: "[4/5] =", accept: ["8/10"], placeholder: "?/10" }, { label: "[5/5] =", accept: ["10/10", "1"], placeholder: "?/10" }] }
          ],
          answer: "[1/5] = **[2/10]** · [2/5] = **[4/10]** · [3/5] = **[6/10]** · [4/5] = **[8/10]** · [5/5] = **[10/10]** = 1. Each fifth is 2 tenths.",
          explain: "The number line is marked in tenths, so each answer is written in tenths. [5/5] also accepts 1."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "Taylor is a carpenter and needs to calculate 5009 − 3997 while working on a house. How can she use addition to solve this? What is the solution?",
          interact: [
            { kind: "jumps", start: 3997, end: 5009, steps: [3, 9, 1000], hint: "Count up from 3997 to a friendly number, then on to 5009." },
            { kind: "choose", rows: [{ t: "Using addition", options: ["Count up from 3997 to 5009 and add the jumps", "Add 5009 and 3997", "Add 3997 to 0"], a: 0 }] },
            { kind: "input", fields: [{ label: "5009 − 3997 =", value: 1012 }] }
          ],
          cubes: { ops: ["−", "+"], note: "Subtraction can be solved by counting up: 3997 + ? = 5009.", solve: [{ t: "Count up", s: "3997 + 3 = 4000, 4000 + 1000 = 5000, 5000 + 9 = 5009. 3 + 1000 + 9 = 1012." }, { t: "Check by adding", s: "3997 + 1012 = 5009 ✓." }] },
          answer: "**1012**. Count up: 3997 + 3 = 4000, + 1000 = 5000, + 9 = 5009. The jumps add to 3 + 1000 + 9 = 1012."
        },
        {
          type: "sr", focus: "Non-spatial measure B",
          prompt: "How many minutes have elapsed on the number line? It starts at 5:45 pm and ends at 7:00 pm.",
          interact: [
            { kind: "jumps", time: "12", ampm: true, start: 1065, end: 1140, steps: [15, 60], hint: "Jump + 15 minutes to 6:00 pm, then + 1 hour to 7:00 pm." },
            { kind: "input", fields: [{ label: "Time elapsed", value: 75, suffix: "minutes" }] }
          ],
          answer: "**75 minutes** (1 hour 15 minutes). 15 minutes to 6:00 pm, then 60 minutes to 7:00 pm: 15 + 60 = 75."
        }
      ],
      // Review 6
      [
        {
          type: "tf", focus: "Represents numbers B",
          prompt: "75% of $120 is greater than 50% of $200, because 75% is a larger percentage. Communicate your reasoning.",
          answer: false,
          explain: "75% of $120 = $90, but 50% of $200 = $100. The percentage is bigger, but the whole is smaller, so $90 < $100.",
          interact: [
            { kind: "shade", parts: 4, pct: true, each: 30, money: true, hint: "$120 in quarters: each part is $30. Shade 75%." },
            { kind: "shade", parts: 2, pct: true, each: 100, money: true, hint: "$200 in halves: each part is $100. Shade 50%." }
          ]
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B",
          prompt: "Give 3 examples of when you would measure volume in cubic metres.",
          interact: [{ kind: "select", hint: "Tap every thing you would measure in cubic metres.", items: [
            ["The water in a swimming pool", true], ["A classroom", true], ["A shipping container", true], ["A load of soil on a truck", true],
            ["A lunchbox", false], ["A dice", false], ["A juice box", false]] }],
          answer: "Big spaces and objects, for example **a swimming pool**, **a room** and **a shipping container** (or a truck load of soil). Small things like a lunchbox are measured in cubic centimetres.",
          explain: "Answers vary. Any large space or object, about 1 m³ or bigger, is a good example."
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Lucas has 8 books, which is 2-fifths ([2/5]) the number of books Ayesha has. How many books does Ayesha have?",
          interact: [
            { kind: "bar", whole: { v: 20, l: "20", n: "Ayesha", hide: true }, parts: [{ v: 4, l: "4", n: "Lucas", hide: true }, { v: 4, l: "4", n: "Lucas", hide: true }, { v: 4, l: "4", hide: true }, { v: 4, l: "4", hide: true }, { v: 4, l: "4", hide: true }], hint: "Ayesha's bar has 5 equal parts. Lucas has 2 of them: 8 books. Tap a ? to reveal it." },
            { kind: "input", fields: [{ label: "One fifth", value: 4, suffix: "books" }, { label: "Ayesha has", value: 20, suffix: "books" }] }
          ],
          cubes: { ops: ["÷", "×"], solve: [{ t: "Find one part", s: "2 parts = 8 books, so 1 part = 8 ÷ 2 = 4. Ayesha has 5 parts: 5 × 4 = 20." }, { t: "Check", s: "[2/5] of 20: 20 ÷ 5 = 4, 2 × 4 = 8 ✓." }] },
          answer: "**20 books**. 2 fifths = 8, so 1 fifth = 4, and 5 fifths = 5 × 4 = 20."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "The scales were faulty. Take 2 kg off each parcel and calculate the total weight. The parcels weigh 47.41 kg, 4.003 kg and 32.213 kg.",
          interact: [
            { kind: "pv", cols: ["T", "O", "t", "h", "th"], start: 47.41, hint: "Line up the places. Take 2 from the ones column of each parcel." },
            { kind: "input", fields: [{ label: "Parcel 1", value: 45.41, suffix: "kg" }, { label: "Parcel 2", value: 2.003, suffix: "kg" }, { label: "Parcel 3", value: 30.213, suffix: "kg" }, { label: "Total weight", value: 77.626, suffix: "kg" }] }
          ],
          cubes: { ops: ["−", "+"], solve: [{ t: "Fix each parcel first", s: "45.41 + 2.003 + 30.213 = 77.626 kg." }, { t: "Add, then take off 6 kg", s: "47.41 + 4.003 + 32.213 = 83.626 kg. 3 parcels × 2 kg = 6 kg. 83.626 − 6 = 77.626 kg." }] },
          answer: "**77.626 kg**. The parcels are really 45.41 kg, 2.003 kg and 30.213 kg. 45.41 + 2.003 + 30.213 = 77.626."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B",
          prompt: "In 15 minutes Sofia ran 1758 m and Chanel ran 1.8 km. Record Sofia's distance using decimal notation. Who was the fastest runner? Communicate your reasoning.",
          interact: [
            { kind: "pv", cols: ["O", "t", "h", "th"], start: 1.758, hint: "1 km = 1000 m, so 1 m is a thousandth of a kilometre." },
            { kind: "input", fields: [{ label: "Sofia's distance", value: 1.758, suffix: "km" }] },
            { kind: "choose", rows: [{ t: "Fastest runner", options: ["Sofia", "Chanel"], a: 1 }] }
          ],
          cubes: { ops: ["−"], note: "Change both distances to the same unit before comparing.", solve: [{ t: "Compare in kilometres", s: "Sofia: 1758 m = 1.758 km. Chanel: 1.8 km = 1.800 km. 1.800 > 1.758." }, { t: "Compare in metres", s: "Chanel: 1.8 km = 1800 m. 1800 m − 1758 m = 42 m further." }] },
          answer: "Sofia ran **1.758 km**. **Chanel** was faster: 1.8 km = 1.800 km, which is 42 m further than Sofia in the same 15 minutes."
        }
      ],
      // Review 7
      [
        {
          type: "mc", focus: "Represents numbers B",
          prompt: "Which percentage gives you the least amount?",
          options: ["10% of 400", "20% of 300", "30% of 200", "50% of 100"],
          answer: 0,
          explain: "A: 10% of 400 = 40. B: 20% of 300 = 60. C: 30% of 200 = 60. D: 50% of 100 = 50. A gives the least.",
          interact: [{ kind: "reveal", items: [["10% of 400", "40"], ["20% of 300", "60"], ["30% of 200", "60"], ["50% of 100", "50"]] }]
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B",
          prompt: "A rectangular prism has a volume of 100 cubic centimetres. What dimensions could it have?",
          img: "u37-prism-dims.png",
          interact: [{ kind: "expr", count: 3, target: 100, placeholder: "length x width x height", sample: ["10 x 10 x 1", "5 x 5 x 4", "2 x 5 x 10"],
            mustUse: { re: "^\\s*\\d+(\\.\\d+)?\\s*[xX×*]\\s*\\d+(\\.\\d+)?\\s*[xX×*]\\s*\\d+(\\.\\d+)?\\s*$", msg: "Write three dimensions: length × width × height." } }],
          answer: "Any three dimensions that multiply to 100, for example **10 cm × 10 cm × 1 cm**, 5 cm × 5 cm × 4 cm or 2 cm × 5 cm × 10 cm.",
          explain: "Volume = length × width × height. Any three numbers with a product of 100 are marked correct."
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Akira is running along a trail that is 8 kilometres long. He has already run 3[1/4] kilometres and will stop for a break in another 2[1/8] kilometres. How far will Akira still have to run?",
          interact: [
            { kind: "bar", whole: { v: 8, l: "8 km", n: "trail" }, parts: [{ v: 3.25, l: "3[1/4] km", n: "run already" }, { v: 2.125, l: "2[1/8] km", n: "to the break" }, { v: 2.625, l: "2[5/8] km", n: "still to run", hide: true }] },
            { kind: "input", fields: [{ label: "Still to run", value: 2.625, suffix: "km", placeholder: "e.g. 1 1/2" }] }
          ],
          cubes: { ops: ["+", "−"], note: "Change quarters to eighths so the fractions match.", solve: [{ t: "Add, then subtract", s: "3[1/4] + 2[1/8] = 3[2/8] + 2[1/8] = 5[3/8] km. 8 − 5[3/8] = 2[5/8] km." }, { t: "Subtract twice", s: "8 − 3[1/4] = 4[3/4] = 4[6/8]. 4[6/8] − 2[1/8] = 2[5/8] km." }] },
          answer: "**2[5/8] km**. 3[1/4] + 2[1/8] = 5[3/8] km, and 8 − 5[3/8] = 2[5/8] km.",
          explain: "This is the distance left after his break. 2 5/8, 21/8 and 2.625 are all accepted."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "1087 − 645 − 422. Communicate how you use place value understanding to solve this problem.",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1087, hint: "Take away the hundreds, tens and ones of each number. Trade when you need to." },
            { kind: "input", fields: [{ label: "1087 − 645 =", value: 442 }, { label: "442 − 422 =", value: 20 }] }
          ],
          answer: "**20**. 1087 − 645 = 442 (take away 6 hundreds, 4 tens, 5 ones, trading 1 thousand for 10 hundreds). 442 − 422 = 20.",
          explain: "Another way: 645 + 422 = 1067, and 1087 − 1067 = 20."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Tanvir closed his eyes and chose a handball from the box. What is the probability of selecting a blue handball?",
          interact: [
            { kind: "classify", view: [560, 210], total: 12, label: "Twelve handballs in a box: blue, yellow and red", mark: "outline", hint: "Choose a colour, then tap each ball of that colour to count it.",
              cats: [{ k: "b", t: "Blue", c: "#0B2A6B" }, { k: "y", t: "Yellow", c: "#B58B00" }, { k: "r", t: "Red", c: "#7A0000" }],
              shapes: [
                { circle: [60, 95, 26], a: "b", fill: "#1565FF" }, { circle: [150, 35, 26], a: "y", fill: "#F5E000" }, { circle: [225, 45, 26], a: "r", fill: "#E00000" }, { circle: [205, 110, 26], a: "b", fill: "#1565FF" },
                { circle: [110, 150, 26], a: "y", fill: "#F5E000" }, { circle: [240, 160, 26], a: "r", fill: "#E00000" }, { circle: [305, 115, 26], a: "y", fill: "#F5E000" }, { circle: [320, 170, 26], a: "b", fill: "#1565FF" },
                { circle: [380, 52, 26], a: "b", fill: "#1565FF" }, { circle: [450, 78, 26], a: "r", fill: "#E00000" }, { circle: [395, 155, 26], a: "r", fill: "#E00000" }, { circle: [490, 170, 26], a: "y", fill: "#F5E000" }] },
            { kind: "input", fields: [{ label: "P(blue)", accept: ["4/12", "1/3"], placeholder: "a/b" }] }
          ],
          cubes: { ops: ["÷"], solve: [{ t: "Count", s: "4 blue out of 12 handballs: [4/12]." }, { t: "Simplify", s: "[4/12] = [1/3]. One in every three handballs is blue." }] },
          answer: "**[4/12]** = **[1/3]**. There are 12 handballs and 4 of them are blue.",
          explain: "The box has 4 blue, 4 yellow and 4 red handballs. 4/12 and 1/3 are both accepted."
        }
      ],
      // Review 8
      [
        {
          type: "tf", focus: "Represents numbers B",
          prompt: "Hamza said that 20% off the regular price of a $550 mountain bike is better value than an extra 5% off the sale price of $500.",
          answer: true,
          explain: "20% off $550: 10% = $55, so 20% = $110 and the bike costs $440. 5% off $500 = $25, so it costs $475. $440 is cheaper, so Hamza is right.",
          interact: [
            { kind: "shade", parts: 10, pct: true, each: 55, money: true, hint: "$550 in tenths: each part is $55. Shade the 20% taken off." },
            { kind: "shade", parts: 20, pct: true, each: 25, money: true, hint: "$500 in twentieths: each part is $25. Shade the 5% taken off." }
          ],
          cubes: { ops: ["×", "−"], solve: [{ t: "Find each price", s: "$550 − 20% = $550 − $110 = $440. $500 − 5% = $500 − $25 = $475." }, { t: "Compare", s: "$440 < $475, so 20% off $550 is $35 cheaper." }] }
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B",
          prompt: "A teacher needs to stack chairs in a storage room. The volume of the room is 1200 cubic metres. What dimensions could it have?",
          img: "u37-prism-dims.png",
          interact: [{ kind: "expr", count: 3, target: 1200, placeholder: "length x width x height", sample: ["10 x 10 x 12", "20 x 20 x 3", "40 x 10 x 3"],
            mustUse: { re: "^\\s*\\d+(\\.\\d+)?\\s*[xX×*]\\s*\\d+(\\.\\d+)?\\s*[xX×*]\\s*\\d+(\\.\\d+)?\\s*$", msg: "Write three dimensions: length × width × height." } }],
          cubes: { ops: ["×", "÷"], note: "Volume = length × width × height.", solve: [{ t: "Choose a height", s: "A room might be 3 m high. 1200 ÷ 3 = 400, and 20 × 20 = 400: 20 m × 20 m × 3 m." }, { t: "Use factors", s: "1200 = 10 × 10 × 12 = 40 × 10 × 3 = 20 × 15 × 4." }] },
          answer: "Any three dimensions that multiply to 1200, for example **20 m × 20 m × 3 m**, 40 m × 10 m × 3 m or 10 m × 10 m × 12 m.",
          explain: "Any three numbers with a product of 1200 are marked correct. Discuss which are sensible for a room (a height of about 3 m to 4 m)."
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "How much greater is 5 sixths ([5/6]) than one third ([1/3])?",
          interact: [
            { kind: "shade", parts: 3, pre: [0], hint: "[1/3] is shaded." },
            { kind: "shade", parts: 6, pre: [0, 1, 2, 3, 4], hint: "[5/6] is shaded. How many sixths make [1/3]?" },
            { kind: "input", fields: [{ label: "[5/6] − [1/3] =", accept: ["3/6", "1/2"], placeholder: "a/b" }] }
          ],
          answer: "**[3/6]** = **[1/2]**. [1/3] = [2/6], and [5/6] − [2/6] = [3/6].",
          explain: "3/6 and 1/2 are both accepted."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "Solve: 12 300 − 4293 + 210",
          interact: [
            { kind: "jumps", start: 4293, end: 12300, steps: [7, 700, 7000, 300], hint: "Count up from 4293 to 12 300 to find the difference first." },
            { kind: "input", fields: [{ label: "12 300 − 4293 =", value: 8007 }, { label: "8007 + 210 =", value: 8217 }] }
          ],
          answer: "**8217**. 12 300 − 4293 = 8007 (count up: 7 + 700 + 7000 + 300 = 8007). 8007 + 210 = 8217."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B",
          prompt: "Draw how the irregular hexagon would appear if it was rotated 90°.",
          interact: [
            { kind: "classify", view: [790, 300], label: "The original hexagon and three possible images A, B and C", hint: "Turn the original a quarter turn in your head (or turn a paper copy). Tap the shape that shows it.",
              cats: [{ k: "r", t: "Rotated 90°", c: "#22A06B" }],
              shapes: [
                { p: "270,50 370,50 345,150 370,250 270,250 295,150", fill: "#CBEBFB" },
                { p: "420,50 470,75 520,50 520,250 470,225 420,250", a: "r", fill: "#CBEBFB" },
                { p: "570,100 770,100 745,150 770,200 570,200 595,150", fill: "#CBEBFB",
                  deco: "<polygon points='20,100 220,100 195,150 220,200 20,200 45,150' fill='#9FB4E8' stroke='#111' stroke-width='3' style='pointer-events:none'/><text x='120' y='235' class='co-lab'>Original</text><text x='320' y='285' class='co-lab'>A</text><text x='470' y='285' class='co-lab'>B</text><text x='670' y='235' class='co-lab'>C</text>" }] },
            { kind: "sketch", grid: "square" }
          ],
          answer: "**Shape B**. A quarter turn makes the long flat sides go up and down, so the shape stands tall and the two notches end up at the top and bottom.",
          explain: "The hexagon is symmetrical, so a quarter turn clockwise or anticlockwise gives the same picture. Shape A only stretches the shape, and C is the same as the original."
        }
      ]
    ]
  });
})();
