/*
  Stage 2 Year A, Unit 19 — Review of learning (Term 4, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
(function () {
  // Spinner sectors (Review 3) drawn as polygons so each one can be tapped.
  const SPIN = [13, 2, 18, 11, 8, 14, 7, 16];
  const sector = (i, cx, cy, r) => {
    const pts = [[cx, cy]];
    for (let a = -90 + 45 * i; a <= -90 + 45 * (i + 1) + 0.01; a += 9) pts.push([+(cx + r * Math.cos(a * Math.PI / 180)).toFixed(1), +(cy + r * Math.sin(a * Math.PI / 180)).toFixed(1)]);
    return pts.map((q) => q.join(",")).join(" ");
  };
  const spinLabel = (i, cx, cy) => { const a = (-90 + 45 * i + 22.5) * Math.PI / 180; return "<text x='" + (cx + 88 * Math.cos(a)).toFixed(1) + "' y='" + (cy + 88 * Math.sin(a) + 9).toFixed(1) + "' text-anchor='middle' font-size='28' fill='#1B1B1B' style='pointer-events:none'>" + SPIN[i] + "</text>"; };
  const spinner = SPIN.map((n, i) => ({ p: sector(i, 150, 150, 135), fill: "#FFFFFF", a: String(n).includes("1") ? "one" : "no", deco: spinLabel(i, 150, 150) }));
  spinner[7].deco += "<g style='pointer-events:none' stroke='#333' stroke-width='4' fill='none'><circle cx='150' cy='150' r='135'/>" + [0, 45, 90, 135].map((a) => { const r = a * Math.PI / 180, dx = 135 * Math.cos(r), dy = 135 * Math.sin(r); return "<line x1='" + (150 - dx).toFixed(1) + "' y1='" + (150 - dy).toFixed(1) + "' x2='" + (150 + dx).toFixed(1) + "' y2='" + (150 + dy).toFixed(1) + "'/>"; }).join("") + "</g>";

  // Strip of eighths (Review 6), coloured as on the slide.
  const G = "#BDEDBE", O = "#FFA07A", B = "#72BCD8", stripCols = [G, O, O, G, O, G, O, B], stripKey = { [G]: "g", [O]: "o", [B]: "b" };
  const strip = stripCols.map((c, i) => ({ p: (20 + i * 70) + ",20 " + (90 + i * 70) + ",20 " + (90 + i * 70) + ",110 " + (20 + i * 70) + ",110", fill: c, a: stripKey[c] }));
  strip[7].deco = "<g style='pointer-events:none' stroke='#333' stroke-width='2'>" + [...Array(9)].map((_, i) => "<line x1='" + (20 + i * 70) + "' y1='20' x2='" + (20 + i * 70) + "' y2='132' stroke-dasharray='" + (i % 8 ? "4 3" : "none") + "'/>").join("") + "<line x1='10' y1='126' x2='600' y2='126' stroke-width='3'/></g><text x='20' y='160' text-anchor='middle' font-size='24' fill='#333'>0</text><text x='580' y='160' text-anchor='middle' font-size='24' fill='#333'>1</text>";

  UNITS.push({
    stage: 2, ab: "A", term: 4, ls: 4, unit: 19,
    img: "img/s2/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 19 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1
      [
        {
          type: "mc", focus: "Representing numbers using place value A",
          prompt: "Which of the following shows the non-standard form for 6324?",
          options: ["6 thousands, 3 hundreds, 2 tens and 4 ones", "6 thousands, 724 ones", "63 hundreds and 24 ones", "630 thousands and 24 ones"],
          answer: 2,
          explain: "63 hundreds = 6300, and 6300 + 24 = 6324. A is the standard form. B makes 6724 and D makes 630 024.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 6324, target: 6324, need: "nonstandard", hint: "Break the 6 thousands into hundreds. How many hundreds are there now?" }]
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "What is the same and what is different about these shapes?",
          interact: [
            { kind: "corners", view: [560, 200], r: 22, q: 30, label: "A parallelogram and a rectangle", shapes: [{ p: [[20, 180], [72, 20], [232, 20], [180, 180]], fill: "#1A6CFF" }, { p: [[310, 20], [530, 20], [530, 180], [310, 180]], fill: "#1A6CFF" }] },
            { kind: "choose", rows: [
              { t: "Number of sides", options: ["Both have 4 sides", "Different"], a: 0 },
              { t: "Opposite sides", options: ["Both have 2 pairs of parallel sides", "Only one has parallel sides"], a: 0 },
              { t: "Right angles", options: ["Both have 4 right angles", "Only the rectangle has right angles"], a: 1 }] }
          ],
          answer: "Same: both are **quadrilaterals** with 4 sides, 4 corners, and opposite sides that are parallel and equal. Different: the rectangle has **4 right angles**; the parallelogram is slanted, so it has no right angles."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Create a table to show 4D's sporting house group data. Bundjalung – 9 students, Gumbaynggirr – 8 students, Wiradjuri – 6 students, Muruwari – 7 students.",
          interact: [{ kind: "cells", cols: 2, w: 190, grid: [["#House group", "#Number of students"], ["Bundjalung", { v: 9 }], ["Gumbaynggirr", { v: 8 }], ["Wiradjuri", { v: 6 }], ["Muruwari", { v: 7 }]], msg: "Check each house's number in the question." }],
          answer: "A two-column table: **House group** | **Number of students**. Bundjalung 9 · Gumbaynggirr 8 · Wiradjuri 6 · Muruwari 7. Give it a title, such as 4D's sporting house groups. (Total 30 students.)"
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Which statement about patterns of multiples is in the wrong column and why? Always: When you add an even number and an odd number you get an even number. Sometimes: Multiples of 5 end in a 5. Never: The sum of two odd numbers is always odd.",
          interact: [
            { kind: "choose", rows: [
              { t: "Even + odd gives an even number", options: ["Always", "Sometimes", "Never"], a: 2 },
              { t: "Multiples of 5 end in a 5", options: ["Always", "Sometimes", "Never"], a: 1 },
              { t: "The sum of two odd numbers is odd", options: ["Always", "Sometimes", "Never"], a: 2 },
              { t: "Which one is in the wrong column?", options: ["Even + odd", "Multiples of 5", "Two odd numbers"], a: 0 }] }
          ],
          answer: "**Even + odd** is in the wrong column. An even number plus an odd number is always **odd** (4 + 3 = 7, 10 + 5 = 15), so 'gives an even number' belongs in **Never**. Multiples of 5 sometimes end in 5 (15) and sometimes in 0 (20). Two odd numbers always make an even number (3 + 5 = 8), so 'is odd' is never true."
        },
        {
          type: "sr", focus: "Geometric measure A: Position",
          prompt: "Using the site map for Bulgandry Art Site Aboriginal Place, in Darkinjung Country, locate and record the engraving that is found on the grid position: C2, F1, D2, A3.",
          interact: [
            { kind: "gridref", src: "img/s2/u19-map.png", alt: "Site map of the Bulgandry engravings with a grid, columns A to F and rows 1 to 3", box: [1.1, 3.9, 98.3, 97.2], cols: ["A", "B", "C", "D", "E", "F"], rows: ["3", "2", "1"] },
            { kind: "choose", rows: [
              { t: "C2", options: ["Whale", "Human figure", "Kangaroo", "Spear"], a: 0 },
              { t: "F1", options: ["Whale", "Human figure", "Kangaroo", "Spear"], a: 2 },
              { t: "D2", options: ["Whale", "Human figure", "Kangaroo", "Spear"], a: 1 },
              { t: "A3", options: ["Whale", "Human figure", "Kangaroo", "Spear"], a: 3 }] }
          ],
          answer: "**C2:** the whale (inside the rectangle) · **F1:** the kangaroo (wallaby) at the bottom right · **D2:** the human figure with arms out · **A3:** the long thin spear (or club) at the top left. Go across to the letter first, then up to the number.",
          explain: "The slide gives no answers, so the engravings are named from the map. The whale's head reaches into C3 and the kangaroo sits across E1 and F1; each is the main engraving in its square."
        }
      ],
      // Review 2
      [
        {
          type: "tf", focus: "Representing numbers using place value A",
          prompt: "2 thousands, 14 hundreds and 28 tens is equal to 3428. How do you know?",
          answer: false,
          explain: "2 thousands = 2000, 14 hundreds = 1400 and 28 tens = 280. 2000 + 1400 + 280 = 3680, not 3428.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 2, H: 14, T: 28, O: 0 }, hint: "This chart shows 2 thousands, 14 hundreds and 28 tens. Group 10 hundreds into a thousand and 10 tens into a hundred." }]
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
          prompt: "How many of these 2D shapes are quadrilaterals? Communicate your thinking.",
          interact: [
            { kind: "classify", view: [480, 330], bg: "#FFFFFF", label: "Twelve 2D shapes", hint: "Choose a group, then tap each shape. Count the straight sides.", cats: [{ k: "q", t: "Quadrilateral", c: "#2F9E44" }, { k: "n", t: "Not a quadrilateral", c: "#E8590C" }], shapes: [
              { p: "20,95 60,20 100,95", a: "n" },
              { p: "163,40 195,40 195,72 163,72", a: "q" },
              { p: "300,15 342,55 300,97 258,55", a: "q" },
              { p: "388,18 456,44 450,102 380,76", a: "q" },
              { p: "55,120 82,130 46,212 18,202", a: "q" },
              { p: "182,120 192,132 176,162 170,182 186,190 180,200 196,214 150,206 162,176", a: "n" },
              { p: "266,138 358,138 342,196 246,196", a: "q" },
              { p: "422,118 466,180 422,196 395,160", a: "q" },
              { p: "60,232 98,254 98,298 60,320 22,298 22,254", a: "n" },
              { p: "140,278 206,236 232,278 200,278 198,314", a: "n" },
              { p: "254,246 346,246 346,306 254,306", a: "q" },
              { p: "370,236 462,236 458,256 444,268 418,273 402,286 394,306 376,318 370,318", a: "n" }] },
            { kind: "input", fields: [{ label: "Quadrilaterals:", value: 7 }] }
          ],
          answer: "**7 quadrilaterals**: the small square, the diamond (square on its point), the tilted 4-sided shape, the long thin rectangle, the parallelogram, the kite-like shape and the rectangle. A quadrilateral has exactly 4 straight sides. The triangle (3), hexagon (6) and arrow (5 sides) are not, and the two wavy shapes (curved edges on the slide) are not quadrilaterals either.",
          explain: "The arrow shape has 5 straight sides (its notch adds a corner), so it is not counted."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Using the data for the number of Stage 2 students in house groups, name and label the axes of the column graph and give it an appropriate title.",
          interact: [
            { kind: "bargraph", max: 16, step: 2, label: "Column graph of Stage 2 students in each house group, with no title or axis labels", series: [{ l: "Students", c: "#002664" }], groups: [{ l: "Bundjalung", v: [13] }, { l: "Gumbaynggirr", v: [10] }, { l: "Wiradjuri", v: [15] }, { l: "Muruwari", v: [8] }] },
            { kind: "choose", rows: [
              { t: "Title", options: ["Stage 2 students in each house group", "Wiradjuri", "Numbers"], a: 0 },
              { t: "Horizontal axis (x-axis)", options: ["House group", "Number of students"], a: 0 },
              { t: "Vertical axis (y-axis)", options: ["House group", "Number of students"], a: 1 }] }
          ],
          answer: "Title, for example: **Number of Stage 2 students in each house group**. **x-axis** (across): House group. **y-axis** (up): Number of students. The graph shows Bundjalung 13, Gumbaynggirr 10, Wiradjuri 15, Muruwari 8.",
          explain: "The column heights are read from the slide's graph."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Record the first 10 multiples when counting by fours.",
          interact: [{ kind: "numchart", from: 1, to: 40, answer: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40], hint: "Count by fours from 4 and tap each multiple." }],
          answer: "**4, 8, 12, 16, 20, 24, 28, 32, 36, 40**. Each multiple is 4 more than the one before. They are all even, and every second one is a multiple of 8."
        },
        {
          type: "sr", focus: "Geometric measure A: Length",
          prompt: "Order the following lengths from shortest to longest: 100 cm, 5 metres, 2 metres and 18 centimetres, 1 metre and 4 centimetres.",
          interact: [{ kind: "order", items: ["100 cm", "5 metres", "2 metres and 18 centimetres", "1 metre and 4 centimetres"], answer: [0, 3, 2, 1] }],
          answer: "**100 cm, 1 m 4 cm, 2 m 18 cm, 5 m**. In centimetres: 100 cm, 104 cm, 218 cm, 500 cm. 100 cm is exactly 1 metre, so it is just shorter than 1 metre and 4 centimetres."
        }
      ],
      // Review 3
      [
        {
          type: "mc", focus: "Representing numbers using place value A",
          prompt: "9156 is closest to which number?",
          options: ["92 hundreds", "93 hundreds", "90 hundreds + 56 tens", "951 tens"],
          answer: 0,
          explain: "92 hundreds = 9200 (44 away). 93 hundreds = 9300 (144 away). 90 hundreds + 56 tens = 9000 + 560 = 9560 (404 away). 951 tens = 9510 (354 away). 9200 is closest.",
          interact: [{ kind: "numberline", min: 9000, max: 9600, ticks: 0.1, labelStep: 100, tol: 15, items: [["9156", 9156], ["92 hundreds", 9200], ["93 hundreds", 9300], ["951 tens", 9510], ["90 hundreds + 56 tens", 9560]] }]
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
          prompt: "Identify and describe the 2D shapes in the Australian, Aboriginal, Torres Strait Islander and NSW flags.",
          img: "u19-flags.png",
          interact: [{ kind: "select", hint: "Tap every 2D shape you can find in the flags.", items: [["Rectangle", true], ["Circle", true], ["Star", true], ["Triangle", true], ["Hexagon", false], ["Oval", false]] }],
          answer: "**Rectangles:** every flag, and the stripes of the Torres Strait Islander flag and the crosses on the Union Jack. **Circles:** the yellow circle on the Aboriginal flag and the white circle on the NSW flag. **Stars:** the 7-pointed and 5-pointed stars on the Australian flag, the 5-pointed star on the Torres Strait Islander flag and the 8-pointed stars on the NSW flag. **Triangles:** the blue pieces of the Union Jack."
        },
        {
          type: "sr", focus: "Chance A",
          prompt: "At the school picnic, Jake can choose one food and one drink. The drinks are water or orange juice. The lunch foods are sushi, a hot dog, a salad sandwich or chicken wrap. What are the possible combinations of food and drink Jake can choose?",
          interact: [
            { kind: "combos", pick: 2, total: 8, items: [["sushi", "#E0559A", 1], ["hot dog", "#E8590C", 1], ["salad sandwich", "#2F9E44", 1], ["chicken wrap", "#B08900", 1], ["water", "#2F6FE4", 1], ["orange juice", "#F2994A", 1]] },
            { kind: "input", fields: [{ label: "Number of combinations:", value: 8 }] }
          ],
          cubes: { ops: ["×"], also: ["+"], solve: [{ t: "List in order", s: "Sushi + water, sushi + juice, hot dog + water, hot dog + juice, sandwich + water, sandwich + juice, wrap + water, wrap + juice: 8 combinations." }, { t: "Multiply", s: "Each of the 4 foods goes with 2 drinks: 4 × 2 = 8." }] },
          answer: "**8 combinations**: sushi and water, sushi and orange juice, hot dog and water, hot dog and orange juice, salad sandwich and water, salad sandwich and orange juice, chicken wrap and water, chicken wrap and orange juice. 4 foods × 2 drinks = 8. Each combination is one food and one drink."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Use your understanding of the commutative property to record 2 number sentences to represent this array.",
          interact: [
            { kind: "array", rows: 4, cols: 8, showTotal: true, hint: "This is the array from the slide: 4 rows of 8. Turn it to see 8 rows of 4." },
            { kind: "sentence", fields: [
              { label: "Sentence 1:", placeholder: "e.g. 4 × 8 = 32", re: "^\\s*(4\\s*x\\s*8|8\\s*x\\s*4)\\s*=\\s*32\\s*$|^\\s*32\\s*=\\s*(4\\s*x\\s*8|8\\s*x\\s*4)\\s*$", msg: "Use the rows and columns of the array: 4 and 8.", sample: "4 × 8 = 32" },
              { label: "Sentence 2:", placeholder: "e.g. 8 × 4 = 32", re: "^\\s*(4\\s*x\\s*8|8\\s*x\\s*4)\\s*=\\s*32\\s*$|^\\s*32\\s*=\\s*(4\\s*x\\s*8|8\\s*x\\s*4)\\s*$", msg: "Use the rows and columns of the array: 4 and 8.", sample: "8 × 4 = 32" }] }
          ],
          answer: "**4 × 8 = 32** and **8 × 4 = 32**. 4 rows of 8 has the same number of dots as 8 rows of 4: the order of the factors doesn't change the product."
        },
        {
          type: "sr", focus: "Chance A",
          prompt: "What are the chances of the spinner landing on a number that includes a 1?",
          interact: [
            { kind: "classify", view: [300, 300], label: "Spinner with 8 equal parts: 13, 2, 18, 11, 8, 14, 7, 16", cats: [{ k: "one", t: "Has a 1", c: "#2F9E44" }, { k: "no", t: "No 1", c: "#E8590C" }], total: 8, shapes: spinner },
            { kind: "input", fields: [{ label: "Parts with a 1:", value: 5, suffix: "out of 8" }] },
            { kind: "choose", rows: [{ t: "The chance is", options: ["impossible", "unlikely", "equally likely", "likely", "certain"], a: 3 }] }
          ],
          answer: "**5 out of 8** parts have a 1 in them: 13, 18, 11, 14 and 16. 5 out of 8 is more than half, so landing on a number with a 1 is **likely**.",
          explain: "The spinner's 8 parts are equal, as drawn on the slide."
        }
      ],
      // Review 4
      [
        {
          type: "tf", focus: "Representing numbers using place value A",
          prompt: "8734 is not equal to 7 thousands, 6 hundreds, 23 tens and 4 ones. How do you know?",
          answer: true,
          explain: "7000 + 600 + 230 + 4 = 7834, not 8734. The statement says they are not equal, so it is true.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 7, H: 6, T: 23, O: 4 }, hint: "This chart shows 7 thousands, 6 hundreds, 23 tens and 4 ones. Group 10 tens into a hundred. What number is it?" }]
        },
        {
          type: "sr", focus: "Geometric measure A: Angles",
          prompt: "Explain why the pencils do not represent an angle. Draw the correct representation of an angle.",
          img: "u19-pencils.png",
          interact: [
            { kind: "choose", rows: [{ t: "Why is this not an angle?", options: ["The pencils do not meet at a point", "The pencils are too short", "The pencils are not straight"], a: 0 }] },
            { kind: "sketch", grid: "square" }
          ],
          answer: "An angle is made by **two arms that meet at a point** (the vertex). The pencils lean towards each other but never touch, so there is no vertex. Draw two straight lines that join at one end, like the letter V or L."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "A spinner has 4 equal parts: purple, yellow, orange and blue. The chance of landing on purple is: impossible, unlikely, equally likely, likely or certain?",
          interact: [
            { kind: "shade", parts: 4, pre: [0], hint: "This strip has 4 equal parts, like the spinner. 1 part is purple." },
            { kind: "choose", rows: [{ t: "Landing on purple is", options: ["impossible", "unlikely", "equally likely", "likely", "certain"], a: 1 }] }
          ],
          answer: "**Unlikely**. Only 1 of the 4 equal parts is purple, which is less than half. It can happen, so it isn't impossible, but the spinner is more likely to land on another colour (3 out of 4).",
          explain: "The spinner on the slide is a circle in 4 equal quarters: purple, yellow, orange and blue."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: Area",
          prompt: "6 sixes is 30 square centimetres. Explain the error made when finding the area of this rectangle. What strategies did you use to find the correct area?",
          interact: [
            { kind: "areagrid", cells: ["111111", "111111", "111111", "111111", "111111"], size: 56 },
            { kind: "input", fields: [{ label: "Area =", value: 30, suffix: "square centimetres" }] },
            { kind: "choose", rows: [{ t: "The error", options: ["The rectangle is 6 squares long and 5 rows high, so it is 6 fives, not 6 sixes", "30 is the wrong area", "Area should be measured in centimetres"], a: 0 }] }
          ],
          answer: "The rectangle is 6 squares across and **5 rows** down, so it is **6 fives** (5 × 6), which is **30 square centimetres**. The area of 30 is right, but '6 sixes' is the wrong fact: 6 sixes is 36. Strategies: count the squares, count rows of 6 (6, 12, 18, 24, 30), or multiply 5 × 6.",
          explain: "On the slide the rectangle covers 6 columns and 5 rows of the 1 cm grid. Each square is taken as 1 square centimetre."
        },
        {
          type: "sr", focus: "Non-spatial measure A: Mass",
          prompt: "The mass of a pencil should be measured using kilograms. Do you agree or disagree? Explain your thinking.",
          interact: [{ kind: "choose", rows: [
            { t: "Do you agree?", options: ["Agree", "Disagree"], a: 1 },
            { t: "A better unit is", options: ["grams", "kilograms", "metres"], a: 0 }] }],
          answer: "**Disagree.** A pencil is very light, much less than 1 kilogram (about the mass of a 1 L bottle of water). Its mass is better measured in **grams**: a pencil is only a few grams."
        }
      ],
      // Review 5
      [
        {
          type: "mc", focus: "Partitioned fractions A",
          prompt: "A number line from 0 to 1 is split into eighths. The first 3 eighths are shaded. The fractional part needed to make the whole is:",
          options: ["[1/8]", "[3/8]", "[8/8]", "[5/8]"],
          answer: 3,
          explain: "There are 8 eighths in the whole and 3 are shaded. 8 − 3 = 5, so [5/8] is needed: [3/8] + [5/8] = [8/8] = 1.",
          interact: [{ kind: "shade", parts: 8, pre: [0, 1, 2], hint: "3 eighths are shaded. Tap the parts you need to make the whole." }]
        },
        {
          type: "sr", focus: "Geometric measure A: Angles",
          prompt: "Name the 2 angles. Are they the same size? Explain your thinking to a partner.",
          img: "u19-angles.png",
          interact: [
            { kind: "angle", start: 90, lengthen: true, hint: "Make a right angle, then make the arms longer. Does the angle change?" },
            { kind: "choose", rows: [
              { t: "Both angles are", options: ["acute angles", "right angles", "obtuse angles"], a: 1 },
              { t: "Are they the same size?", options: ["Yes", "No, the big one is bigger"], a: 0 }] }
          ],
          answer: "Both are **right angles**: each has the small square marking a quarter turn. They are **the same size**. The size of an angle is the amount of turn between the arms, not the length of the arms or which way the angle faces."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Explain why the intervals in this graph are in multiples of ten.",
          interact: [
            { kind: "bargraph", max: 70, step: 10, ylabel: "Votes", label: "Favourite Playground Equipment", series: [{ l: "Votes", c: "#1A6CFF" }], groups: [{ l: "Slides", v: [40] }, { l: "Climbing", v: [60] }, { l: "Skate ramp", v: [25] }, { l: "Swings", v: [15] }, { l: "Ball games", v: [60] }], hint: "Favourite Playground Equipment. Tap a bar to read it on the scale." },
            { kind: "choose", rows: [{ t: "Why count by tens?", options: ["The data goes up to 60, so tens keep the scale short and easy to read", "Every value is a multiple of ten", "Graphs must always count by ones"], a: 0 }] }
          ],
          answer: "The data is large (up to **60**), so counting by ones would need a very tall scale. Intervals of **10** fit all the data (0 to 70) and are easy to count. Values that are not multiples of ten, like 25 and 15, sit halfway between two lines.",
          explain: "The slide shows a horizontal bar graph; it is redrawn here as a column graph with the same values: slides 40, climbing equipment 60, skate and bike ramp 25, swings 15, ball game facilities 60."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: Area",
          prompt: "What strategies could you use to estimate the area of this leaf in square centimetres?",
          interact: [
            { kind: "sketch", bgimg: "img/s2/u19-leaf.png" },
            { kind: "select", hint: "Tap every strategy that would help estimate the area.", items: [["Count the whole squares inside the leaf", true], ["Join part squares to make whole squares", true], ["Count squares that are half or more as 1 and leave out smaller bits", true], ["Measure around the edge with a ruler", false], ["Count only the squares the outline touches", false]] }
          ],
          answer: "Count the **whole squares** inside the leaf, then **combine part squares** (two halves make about 1), or count squares that are half or more as 1 and leave out the small bits. Add them up. Each square is 1 square centimetre, so the leaf is **about 65 to 70 square centimetres**.",
          explain: "The estimate assumes each grid square is 1 cm by 1 cm; it comes from the leaf's outline on the slide's grid. Answers close to this are reasonable."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Ben is baking a cake. He needs to measure 250 ml of milk for the recipe but only has a teacup. Will this be an accurate measurement? Explain your thinking.",
          img: "u19-teacup.png",
          interact: [{ kind: "choose", rows: [
            { t: "Is it accurate?", options: ["Yes", "No"], a: 1 },
            { t: "Why?", options: ["A teacup has no markings, so Ben can't tell when he has exactly 250 mL", "Teacups always hold exactly 250 mL", "Milk can't go in a teacup"], a: 0 }] }],
          cubes: { ops: [], note: "There is nothing to calculate; decide whether the measuring tool is accurate.", solve: [{ t: "Look for a scale", s: "A measuring jug has mL markings. A teacup has none, so Ben can only guess." }, { t: "Compare capacities", s: "Teacups come in different sizes. One might hold 200 mL, another 300 mL, so a cupful isn't always 250 mL." }] },
          answer: "**No, not accurate.** A teacup is not marked in millilitres and teacups come in different sizes, so Ben can't be sure he has exactly 250 mL. He would get an accurate amount with a measuring jug or a measuring cup marked in mL."
        }
      ],
      // Review 6
      [
        {
          type: "tf", focus: "Partitioned fractions A",
          prompt: "The following image displays [3/8], [1/8] and [1/2] of a whole on a number line.",
          answer: true,
          explain: "The whole from 0 to 1 is split into 8 equal parts. 3 parts are green ([3/8]), 4 parts are orange ([4/8] = [1/2]) and 1 part is blue ([1/8]). [3/8] + [4/8] + [1/8] = [8/8], one whole.",
          interact: [{ kind: "classify", view: [610, 170], mark: "outline", total: 8, label: "A strip from 0 to 1 in 8 equal parts: green, orange, orange, green, orange, green, orange, blue", hint: "Choose a colour, then tap each part of that colour. The tally shows the fraction.", cats: [{ k: "g", t: "Green", c: "#2F9E44" }, { k: "o", t: "Orange", c: "#E8590C" }, { k: "b", t: "Blue", c: "#1971C2" }], shapes: strip }]
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Identify an object in the room with an angle that is about the same as a right angle.",
          img: "u19-hand.png",
          interact: [
            { kind: "angle", start: 90, target: "right", hint: "This is a right angle, like the hands in the picture. Look for it around the room." },
            { kind: "select", hint: "Tap every object that has a corner about the same as a right angle.", items: [["Corner of a book", true], ["Corner of a door", true], ["Corner of a whiteboard", true], ["A ball", false], ["The edge of a round clock", false]] }
          ],
          answer: "Answers vary, for example the **corner of a book, door, desk, window, whiteboard or sheet of paper**. Check with a right-angle tester (like the hands, or a folded paper corner): the two edges should line up with its arms."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "The council is building a sensory garden, which means they need to take out part of the playground. They surveyed visitors about their favourite playground equipment to help them decide. According to the data, which equipment should be removed? Explain your thinking.",
          interact: [
            { kind: "bargraph", max: 70, step: 10, ylabel: "Votes", label: "Favourite Playground Equipment", series: [{ l: "Votes", c: "#1A6CFF" }], groups: [{ l: "Slides", v: [40] }, { l: "Climbing", v: [60] }, { l: "Skate ramp", v: [25] }, { l: "Swings", v: [15] }, { l: "Ball games", v: [60] }], hint: "Favourite Playground Equipment. Tap a bar to read it on the scale." },
            { kind: "choose", rows: [{ t: "Remove the", options: ["slides", "climbing equipment", "skate and bike ramp", "swings", "ball game facilities"], a: 3 }] }
          ],
          cubes: { ops: [], note: "Compare the bars; the smallest value answers the question.", solve: [{ t: "Find the shortest bar", s: "Swings has the shortest bar, about 15 votes." }, { t: "Compare with the rest", s: "Every other piece of equipment has more votes (25, 40, 60, 60), so removing the swings upsets the fewest visitors." }] },
          answer: "The **swings**. They are the least favourite, with only about **15 votes**; every other piece of equipment got more (skate and bike ramp 25, slides 40, climbing equipment and ball game facilities 60 each). Removing them affects the fewest people.",
          explain: "The slide's horizontal bar graph is redrawn as a column graph with the same values."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
          prompt: "Lachlan constructed a 3D object with 5 faces (including 2 triangles), 6 vertices and 9 edges. Draw the 3D object Lachlan made.",
          interact: [
            { kind: "sketch", grid: "triangle" },
            { kind: "choose", rows: [{ t: "Lachlan made a", options: ["triangular prism", "square pyramid", "triangular pyramid", "cube"], a: 0 }] }
          ],
          cubes: { ops: [], note: "Match the clues to an object; there is nothing to calculate.", solve: [{ t: "Start with the triangles", s: "2 triangle faces at the ends, joined by 3 rectangles: 5 faces in all." }, { t: "Check the clues", s: "Each triangle has 3 corners: 3 + 3 = 6 vertices. 3 edges on each triangle + 3 joining edges = 9 edges." }] },
          answer: "A **triangular prism**: 2 triangle faces at the ends and 3 rectangle faces (5 faces), 6 vertices and 9 edges. A square pyramid also has 5 faces, but it has 4 triangles, 5 vertices and 8 edges."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: Area",
          prompt: "Do these rectangles have the same area? Communicate your thinking. Rectangle A is 6 cm long and 2 cm wide. Rectangle B is 3 cm wide and 4 cm long.",
          interact: [
            { kind: "areagrid", cells: ["111111", "111111"], size: 48 },
            { kind: "areagrid", cells: ["111", "111", "111", "111"], size: 48 },
            { kind: "input", fields: [{ label: "Area of A =", value: 12, suffix: "cm²" }, { label: "Area of B =", value: 12, suffix: "cm²" }] },
            { kind: "choose", rows: [{ t: "Same area?", options: ["Yes", "No"], a: 0 }] }
          ],
          answer: "**Yes.** Rectangle A: 2 rows of 6 = **12 cm²**. Rectangle B: 4 rows of 3 = **12 cm²**. They are different shapes but cover the same number of square centimetres."
        }
      ],
      // Review 7
      [
        {
          type: "mc", focus: "Partitioned fractions A",
          prompt: "A number line from 0 to 1 is split into eighths. The first 5 eighths are shaded. The complementary fraction to make a whole is:",
          options: ["[1/8]", "[5/8]", "[2/8]", "[3/8]"],
          answer: 3,
          explain: "5 of the 8 eighths are shaded. 8 − 5 = 3, so the complementary fraction is [3/8]: [5/8] + [3/8] = [8/8] = 1.",
          interact: [{ kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4], hint: "5 eighths are shaded. Tap the parts that complete the whole." }]
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Draw angles that are: less than a right angle, equal to a right angle, about the same as a right angle, greater than a right angle.",
          interact: [
            { kind: "angle", start: 120, target: "less", label: "Less than a right angle" },
            { kind: "angle", start: 45, target: "right", label: "Equal to a right angle" },
            { kind: "angle", start: 45, target: "greater", label: "Greater than a right angle" },
            { kind: "sketch", grid: "square" }
          ],
          answer: "**Less than** a right angle: a sharp, narrow angle (like an open beak). **Equal to**: a square corner (like a book). **About the same as**: very close to a square corner, just a little more or less. **Greater than**: a wide angle (like an open laptop). Check each with a right-angle tester.",
          explain: "The angle maker covers less than, equal to and greater than a right angle; draw 'about the same as' in the sketch box."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "The council has space to add a new piece of equipment in the playground. After surveying 3S, the results were close. According to the data, what piece of equipment should the council add? Explain your thinking.",
          img: "u19-votes.png",
          interact: [
            { kind: "tally", counts: true, hint: "These are the votes from the slide, one tally mark for each dot.", rows: [{ l: "round net swing", start: 4 }, { l: "table tennis", start: 4 }, { l: "flying fox", start: 4 }, { l: "swinging bridge", start: 3 }, { l: "spiderweb tower", start: 5 }, { l: "ninja course", start: 6 }] },
            { kind: "choose", rows: [{ t: "The council should add the", options: ["round net swing", "table tennis", "flying fox", "swinging bridge", "spiderweb tower", "ninja course"], a: 5 }] }
          ],
          cubes: { ops: [], note: "Compare the counts; the largest value answers the question.", solve: [{ t: "Count the dots", s: "Round net swing 4, table tennis 4, flying fox 4, swinging bridge 3, spiderweb tower 5, ninja course 6." }, { t: "Find the most", s: "6 is the most votes, so the ninja course is the favourite." }] },
          answer: "The **ninja course**. It has the most votes (**6**). The spiderweb tower is close behind with 5, then round net swing, table tennis and flying fox with 4 each, and swinging bridge with 3.",
          explain: "Each dot on the slide is counted as one vote."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: Volume",
          prompt: "Tom believes these 3D objects have the same volume in cubic centimetres. Do you agree or disagree with Tom? Explain your thinking.",
          img: "u19-cubes.png",
          interact: [
            { kind: "input", fields: [{ label: "Left object:", value: 12, suffix: "cubes" }, { label: "Right object:", value: 12, suffix: "cubes" }] },
            { kind: "choose", rows: [{ t: "Do you agree with Tom?", options: ["Agree", "Disagree"], a: 0 }] }
          ],
          cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Count the layers", s: "Left: 6 cubes on the top layer × 2 layers = 12. Right: 4 cubes in a row × 3 rows = 12." }, { t: "Count every cube", s: "Count the cubes in each object, including the hidden ones: 12 and 12." }] },
          answer: "**Agree.** The left object has 2 layers of 6 cubes (2 rows of 3): **12 cubic centimetres**. The right object is 1 cube deep with 3 rows of 4: **12 cubic centimetres**. Different shapes can have the same volume.",
          explain: "Each small cube is taken as 1 cubic centimetre, and the left object is solid (no hidden gaps)."
        },
        {
          type: "sr", focus: "Non-spatial measure A: Time",
          prompt: "Record the time that is a quarter-hour after the time on the analog clock.",
          interact: [
            { kind: "clock", time: "6:30", drag: true },
            { kind: "input", fields: [{ label: "Clock shows:", accept: ["6:30", "half past 6", "half past six"], placeholder: "h:mm" }, { label: "Quarter-hour later:", accept: ["6:45", "quarter to 7", "quarter to seven"], placeholder: "h:mm" }] }
          ],
          answer: "The clock shows **6:30** (half past 6): the long hand is on the 6 and the short hand is halfway between 6 and 7. A quarter-hour is 15 minutes, so the time is **6:45** (quarter to 7).",
          explain: "The time is read from the hands on the slide's clock."
        }
      ],
      // Review 8
      [
        {
          type: "tf", focus: "Partitioned fractions A",
          prompt: "A complementary fractional part is always more than one whole.",
          answer: false,
          explain: "A fraction and its complementary part join to make exactly one whole, so each part is less than one whole. For example, [1/4] and [3/4] make 1.",
          interact: [{ kind: "shade", parts: 4, pre: [0], hint: "[1/4] is shaded. Shade its complementary part. Is it more than the whole strip?" }]
        },
        {
          type: "sr", focus: "Non-spatial measure A: Time",
          prompt: "The numbers on an analog clock can represent 2 different values. What value can the following numbers represent? 2, 7, 4, 11",
          interact: [
            { kind: "clock", time: "2:10", drag: true },
            { kind: "input", fields: [{ label: "2 →", value: 10, suffix: "minutes" }, { label: "7 →", value: 35, suffix: "minutes" }, { label: "4 →", value: 20, suffix: "minutes" }, { label: "11 →", value: 55, suffix: "minutes" }] }
          ],
          answer: "For the **hour hand**, each number is the hour: 2 o'clock, 7 o'clock, 4 o'clock, 11 o'clock. For the **minute hand**, each number is 5 minutes more: 2 → **10 minutes**, 7 → **35 minutes**, 4 → **20 minutes**, 11 → **55 minutes** (count by fives)."
        },
        {
          type: "sr", focus: "Data B",
          prompt: "The two graphs display the same data. Evaluate the effectiveness of how the data is displayed. Communicate your thinking.",
          interact: [
            { kind: "bargraph", max: 60, step: 10, ylabel: "Number of votes", xlabel: "Equipment", label: "Wattle Street PS Stage 2 Results, graph 1, scale by tens", series: [{ l: "Votes", c: "#F59AAA" }], groups: [{ l: "Basketball court", v: [50] }, { l: "Bike track", v: [25] }, { l: "Flying fox", v: [39] }, { l: "Swings", v: [10] }], hint: "Graph 1: Wattle Street PS Stage 2 Results. Tap a bar to read it." },
            { kind: "bargraph", max: 56, step: 8, ylabel: "Number of votes", xlabel: "Equipment", label: "Wattle Street PS Stage 2 Results, graph 2, scale by eights", series: [{ l: "Votes", c: "#1A6CFF" }], groups: [{ l: "Basketball court", v: [50] }, { l: "Bike track", v: [25] }, { l: "Flying fox", v: [39] }, { l: "Swings", v: [10] }], hint: "Graph 2: the same data. Tap a bar to read it." },
            { kind: "choose", rows: [{ t: "Which graph is easier to read?", options: ["Graph 1, counting by tens", "Graph 2, counting by eights"], a: 0 }] }
          ],
          answer: "**Graph 1 is more effective.** Its scale counts by **tens** (0, 10, 20 … 60), which is easy to count and read between. Graph 2 counts by **eights** (0, 8, 16 … 56), so values like 25 or 50 fall between awkward lines and are hard to read. Both have a title, axis labels and the same categories, and the colour doesn't change the data.",
          explain: "The bar values are read from the slide's graphs: basketball court about 50, bike track about 25, flying fox about 39 and swings 10."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: Volume",
          prompt: "Record the volume of this 3D object in numerals and words.",
          img: "u19-views.png",
          interact: [
            { kind: "array", rows: 2, cols: 5, showTotal: true, hint: "The top view shows one layer: 2 rows of 5. The front view shows how many layers." },
            { kind: "input", fields: [{ label: "Numerals:", value: 30, suffix: "cubes" }, { label: "Words:", accept: ["thirty", "thirty cubes", "thirty cubic units", "thirty cubic centimetres", "thirty cubic centimeters"], placeholder: "in words" }] }
          ],
          answer: "**30 cubes** (thirty cubic units). The top view shows 2 rows of 5 = 10 cubes in each layer, and the front and side views show **3 layers**. 10 + 10 + 10 = 30.",
          explain: "The object is a solid rectangular prism, 5 cubes long, 2 deep and 3 high, as the three views show."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: 2D shape",
          prompt: "Explain why the image below is symmetrical.",
          img: "u19-pattern.png",
          interact: [{ kind: "select", hint: "Tap every line that is a line of symmetry for the whole image.", items: [["A vertical line down the middle", true], ["A horizontal line across the middle", true], ["A diagonal line from corner to corner", true], ["A vertical line through the left flowers only", false]] }],
          answer: "When you fold the image along a **line of symmetry**, both halves match exactly. The 4 flower tiles are identical and each is symmetrical, so the whole image has a **vertical** line, a **horizontal** line and **2 diagonal** lines of symmetry through its centre.",
          explain: "The pattern is made of identical overlapping circles, so the diagonal folds also match."
        }
      ]
    ]
  });
})();
