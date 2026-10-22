/*
  Stage 3 Year A, Unit 12 — Review of learning (Term 3, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 3, ls: 2, unit: 12,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 12 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "Which number has been regrouped using place value? 5 000 000 + 600 000 + 30 000 + 2 000 + 800 + 70 + 9",
        options: ["5 362 879", "5 623 789", "5 632 879", "5 632 798"],
        answer: 2,
        explain: "5 millions, 6 hundred thousands, 3 ten thousands, 2 thousands, 8 hundreds, 7 tens and 9 ones make 5 632 879. B swaps the 3 and 2, A swaps the 6 and 3, and D swaps the tens and ones.",
        interact: [{ kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 0, hint: "Add one counter for each part: 5 millions, 6 hundred thousands, 3 ten thousands and so on. Then show the number." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Match the letter to the correct number of lines of symmetry: one line of symmetry, 2 or more lines of symmetry, zero lines of symmetry.",
        interact: [
          { kind: "mirror", view: [640, 290], label: "The letters P, D and X with dashed lines to test", shapes: [
            { l: "P", fill: "#1F6FE5", lx: 100, ly: 272, p: [[40, 40], [100, 40], [100, 68], [75, 68], [75, 112], [115, 112], [128, 105], [132, 90], [128, 75], [115, 68], [100, 68], [100, 40], [120, 40], [145, 48], [158, 65], [162, 90], [158, 115], [145, 132], [120, 140], [75, 140], [75, 220], [40, 220]],
              lines: [[100, 22, 100, 238], [22, 130, 180, 130]] },
            { l: "D", fill: "#1F6FE5", lx: 310, ly: 272, p: [[240, 130], [240, 40], [300, 40], [335, 48], [360, 68], [375, 98], [380, 130], [375, 162], [360, 192], [335, 212], [300, 220], [240, 220], [240, 130], [275, 130], [275, 182], [300, 182], [320, 176], [335, 160], [342, 130], [335, 100], [320, 84], [300, 78], [275, 78], [275, 130]],
              lines: [[310, 22, 310, 238], [222, 130, 398, 130]] },
            { l: "X", fill: "#1F6FE5", lx: 520, ly: 272, p: [[450, 60], [475, 60], [520, 105], [565, 60], [590, 60], [590, 85], [545, 130], [590, 175], [590, 200], [565, 200], [520, 155], [475, 200], [450, 200], [450, 175], [495, 130], [450, 85]],
              lines: [[520, 40, 520, 220], [430, 130, 610, 130]] }] },
          { kind: "choose", rows: [
            { t: "P", options: ["zero lines", "one line", "2 or more lines"], a: 0 },
            { t: "D", options: ["zero lines", "one line", "2 or more lines"], a: 1 },
            { t: "X", options: ["zero lines", "one line", "2 or more lines"], a: 2 }] }
        ],
        answer: "P has **zero** lines of symmetry. D has **one** (across the middle). X has **2 or more** (down the middle and across the middle)."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Round the following numbers to the nearest hundred thousand: 312 000, 650 000, 281 000, 829 000",
        interact: [
          { kind: "marker", min: 0, max: 1000000, divs: 10, labels: [0, 500000, 1000000], label: "?", hint: "Slide the pin to each number. Which hundred thousand is it closest to?" },
          { kind: "input", fields: [{ label: "312 000", value: 300000 }, { label: "650 000", value: 700000 }, { label: "281 000", value: 300000 }, { label: "829 000", value: 800000 }] }
        ],
        answer: "312 000 → **300 000** · 650 000 → **700 000** · 281 000 → **300 000** · 829 000 → **800 000**. Look at the ten thousands digit: 5 or more rounds up."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Peter faces north. He makes a quarter-turn to the right. Complete the following statements: Peter has formed a ___ angle with this rotation. One arm of the angle is directed ___ and the other arm is directed ___.",
        img: "u12-compass.png",
        interact: [
          { kind: "angle", names: true, degrees: true, target: "right", start: 30, label: "The fixed arm is where Peter starts. Turn the other arm a quarter of the way round." },
          { kind: "choose", rows: [
            { t: "Peter has formed", options: ["an acute angle", "a right angle", "a straight angle", "a reflex angle"], a: 1 },
            { t: "One arm points (where he started)", options: ["north", "east", "south", "west"], a: 0 },
            { t: "The other arm points (where he ends)", options: ["north", "east", "south", "west"], a: 1 }] }
        ],
        answer: "Peter has formed a **right angle** (90°). One arm is directed **north** and the other arm is directed **east**."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Calculate the perimeter of the triangle.",
        interact: [
          { kind: "sides", view: [330, 300], label: "Triangle with sides 24 cm, 38 cm and 50 cm", fill: "#9FB4E8", poly: [[40, 250], [184, 250], [244, 30]],
            dims: [{ from: [40, 272], to: [184, 272] }, { from: [25, 236], to: [229, 16] }, { from: [203, 255], to: [263, 35] }],
            labels: [{ x: 112, y: 294, t: "24 cm" }, { x: 112, y: 110, t: "50 cm", anchor: "end" }, { x: 256, y: 156, t: "38 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 112, suffix: "cm" }] }
        ],
        answer: "50 + 38 + 24 = **112 cm**."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "386 570 924 can be regrouped as 386 millions, 57 thousands and 924 ones. Communicate your reasoning.",
        answer: false,
        explain: "The thousands house is 570, not 57. 386 570 924 is 386 millions, 570 thousands and 924 ones. 57 thousands would make 386 057 924.",
        interact: [{ kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 386570924, hint: "Tap Read each house to see how many millions, thousands and ones." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Match the triangle name to its representation: equilateral triangle, isosceles triangle, scalene triangle.",
        interact: [{ kind: "classify", view: [670, 240], label: "Three triangles numbered 1, 2 and 3", hint: "Choose a name, then tap the triangle it matches.",
          cats: [{ k: "e", t: "equilateral", c: "#2F6FE4" }, { k: "i", t: "isosceles", c: "#F2994A" }, { k: "s", t: "scalene", c: "#22A06B" }],
          shapes: [
            { p: "40,30 40,200 210,200", a: "i", fill: "#DCE6F7", deco: "<text x='20' y='28' class='co-lab'>1</text>" },
            { p: "250,60 470,40 270,200", a: "s", fill: "#DCE6F7", deco: "<text x='238' y='56' class='co-lab'>2</text>" },
            { p: "500,200 650,200 575,70.1", a: "e", fill: "#DCE6F7", deco: "<text x='548' y='70' class='co-lab'>3</text>" }] }],
        answer: "1 is **isosceles** (two equal sides, with a right angle). 2 is **scalene** (no equal sides). 3 is **equilateral** (all three sides equal).",
        explain: "The triangles are redrawn so that triangle 1's two shorter sides are exactly equal."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Order the following decimal numbers in ascending order: 1.375, 1.107, 1.256, 1.190",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 1.375, hint: "The ones are all 1, so compare the tenths, then the hundredths." },
          { kind: "order", items: ["1.375", "1.107", "1.256", "1.190"], answer: [1, 3, 2, 0] }
        ],
        answer: "**1.107, 1.190, 1.256, 1.375**. Ascending means smallest to largest. 1.107 and 1.190 both have 1 tenth, so compare the hundredths: 0 is less than 9."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Match each angle name to its correct measurement: right angle, straight angle, angle of revolution. 360°, 90°, 180°",
        interact: [
          { kind: "angle", names: true, degrees: true, reflex: true, start: 60, label: "Drag the arm to make each angle." },
          { kind: "choose", rows: [
            { t: "right angle", options: ["90°", "180°", "360°"], a: 0 },
            { t: "straight angle", options: ["90°", "180°", "360°"], a: 1 },
            { t: "angle of revolution", options: ["90°", "180°", "360°"], a: 2 }] }
        ],
        answer: "Right angle **90°** · straight angle **180°** · angle of revolution **360°** (a full turn)."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Frankie states that these rectangles have different side lengths so they cannot have the same perimeter. Is Frankie correct? Communicate your reasoning.",
        interact: [
          { kind: "sides", view: [330, 130], label: "Rectangle 8 cm by 2 cm", fill: "#9FB4E8", poly: [[30, 50], [230, 50], [230, 100], [30, 100]],
            dims: [{ from: [30, 32], to: [230, 32] }, { from: [250, 50], to: [250, 100] }],
            labels: [{ x: 130, y: 22, t: "8 cm" }, { x: 262, y: 82, t: "2 cm", anchor: "start" }] },
          { kind: "sides", view: [290, 170], label: "Rectangle 6 cm by 4 cm", fill: "#9FB4E8", poly: [[30, 50], [180, 50], [180, 150], [30, 150]],
            dims: [{ from: [30, 32], to: [180, 32] }, { from: [200, 50], to: [200, 150] }],
            labels: [{ x: 105, y: 22, t: "6 cm" }, { x: 212, y: 106, t: "4 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter of the 8 cm by 2 cm rectangle", value: 20, suffix: "cm" }, { label: "Perimeter of the 6 cm by 4 cm rectangle", value: 20, suffix: "cm" }] },
          { kind: "choose", rows: [{ t: "Is Frankie correct?", options: ["Yes", "No"], a: 1 }] }
        ],
        cubes: { ops: ["+", "×"], solve: [{ t: "Add every side", s: "8 + 2 + 8 + 2 = 20 cm. 6 + 4 + 6 + 4 = 20 cm." }, { t: "Double length plus width", s: "2 × (8 + 2) = 2 × 10 = 20 cm. 2 × (6 + 4) = 2 × 10 = 20 cm." }] },
        answer: "**No**. Both perimeters are **20 cm**. Different side lengths can still add to the same total: 8 + 2 = 10 and 6 + 4 = 10, then each is doubled."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "Which number has been partitioned in a non-standard form: 482 000 000 + 7 654 321",
        options: ["482 765 432", "482 654 321", "489 654 321", "487 654 321"],
        answer: 2,
        explain: "482 millions + 7 millions = 489 millions. The rest is 654 thousands and 321 ones. So the number is 489 654 321.",
        interact: [{ kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 482000000, hint: "The chart shows 482 000 000. Add 7 millions, 6 hundred thousands, 5 ten thousands, 4 thousands, 3 hundreds, 2 tens and 1 one." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Match the triangle description to its classification.",
        interact: [{ kind: "choose", rows: [
          { t: "A closed shape with 3 sides of different lengths and 3 angles of different sizes.", options: ["equilateral", "isosceles", "scalene"], a: 2 },
          { t: "A closed shape with 3 straight sides all equal in length and 3 angles equal in size.", options: ["equilateral", "isosceles", "scalene"], a: 0 },
          { t: "A closed shape with 3 straight sides, 2 of them equal in length and 2 of the angles are equal in size.", options: ["equilateral", "isosceles", "scalene"], a: 1 }] }],
        answer: "Different sides and angles: **scalene**. All sides and angles equal: **equilateral**. Two equal sides and two equal angles: **isosceles**."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Record the missing negative whole numbers.",
        img: "u12-negline.png",
        interact: [
          { kind: "jumps", start: 0, steps: [1], back: true, min: -10, max: 0, hint: "Count back from 0 one jump at a time to reach each arrow." },
          { kind: "input", fields: [{ label: "a", value: -1 }, { label: "b", value: -4 }, { label: "c", value: -5 }, { label: "d", value: -7 }] }
        ],
        answer: "a = **−1** · b = **−4** · c = **−5** · d = **−7**. Negative numbers get smaller the further left they are from 0."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Your friend wants to measure an angle using a protractor. Explain one important step they must follow to measure the angle correctly.",
        interact: [
          { kind: "angle", degrees: true, start: 65, label: "Make an angle to measure together." },
          { kind: "select", hint: "Tap every step that helps measure correctly.", items: [
            ["Put the centre point of the protractor on the vertex", true],
            ["Line up the 0° line with one arm of the angle", true],
            ["Read the scale that starts at 0° on that arm", true],
            ["Put the protractor anywhere near the angle", false],
            ["Always read the bigger of the two numbers", false]] }
        ],
        answer: "Any one of: put the **centre point on the vertex**, line up the **0° line with one arm**, and read the **scale that starts at 0°** on that arm.",
        explain: "The slide asks for one step in words. Here the class taps every correct step, with two wrong ones to rule out."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "The distance between Sydney and Canberra is 287 kilometres. Record this distance using the abbreviation for kilometres. Explain why kilometres are a more suitable unit than metres for this distance.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 287, shift: true, houses: false, hint: "1 km = 1000 m. Tap × 10 three times to see 287 km in metres." },
          { kind: "input", fields: [{ label: "287 kilometres =", accept: ["287 km"], placeholder: "e.g. 5 km" }] },
          { kind: "choose", rows: [{ t: "Kilometres are more suitable because", options: ["287 km is easier to read and use than 287 000 m", "metres are bigger than kilometres", "kilometres are for short distances"], a: 0 }] }
        ],
        cubes: { ops: ["×"], note: "1 km = 1000 m.", solve: [{ t: "Use the abbreviation", s: "Kilometres is written km, so the distance is 287 km." }, { t: "Compare in metres", s: "287 × 1000 = 287 000 m. That number is much larger and harder to use, so kilometres suit long distances." }] },
        answer: "**287 km**. In metres it would be 287 000 m, a very large number. Kilometres are better for long distances between towns."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "1000 thousands is 1 million and 1000 millions is 1 billion.",
        answer: true,
        explain: "1000 × 1000 = 1 000 000 (1 million), and 1000 × 1 000 000 = 1 000 000 000 (1 billion). Each new house is 1000 times the one before.",
        interact: [{ kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: { Th: 1000 }, hint: "The chart holds 1000 thousands. Group 10 thousands into a ten thousand, and keep grouping. What do you end up with?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Angles",
        prompt: "I am a two-dimensional shape. I have 4 sides, 2 pairs of parallel sides and 4 right angles. What 2 quadrilaterals could I be? Communicate your reasoning.",
        interact: [
          { kind: "corners", view: [640, 200], r: 24, q: 30, shapes: [
            { p: [[30, 40], [170, 40], [170, 180], [30, 180]], fill: "#9FB4E8", l: "A" },
            { p: [[220, 70], [430, 70], [430, 170], [220, 170]], fill: "#9FB4E8", l: "B" },
            { p: [[480, 170], [520, 40], [620, 40], [580, 170]], fill: "#9FB4E8", l: "C" }], hint: "Tap a corner to test it with a right angle." },
          { kind: "select", hint: "Tap the 2 quadrilaterals I could be.", items: [["square", true], ["rectangle", true], ["rhombus", false], ["parallelogram", false], ["trapezium", false], ["kite", false]] }
        ],
        answer: "A **square** or a **rectangle**. Both have 4 sides, 2 pairs of parallel sides and 4 right angles. A parallelogram or rhombus has parallel sides but no right angles."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record all the factors of 12.",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "Make different arrays of 12. The rows and columns are factor pairs." },
          { kind: "numchart", from: 1, to: 12, answer: [1, 2, 3, 4, 6, 12], hint: "Tap every factor of 12." }
        ],
        answer: "**1, 2, 3, 4, 6 and 12**. Factor pairs: 1 × 12, 2 × 6, 3 × 4."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Peter faces east. He makes a half-turn to the left. Complete the following statements: Peter has formed a ___ angle with this rotation. One arm of the angle is directed ___ and the other arm is directed ___.",
        img: "u12-compass2.png",
        interact: [
          { kind: "angle", names: true, degrees: true, target: "straight", start: 40, label: "The fixed arm is where Peter starts. Turn the other arm half of the way round." },
          { kind: "choose", rows: [
            { t: "Peter has formed", options: ["an acute angle", "a right angle", "a straight angle", "a reflex angle"], a: 2 },
            { t: "One arm points (where he started)", options: ["north", "east", "south", "west"], a: 1 },
            { t: "The other arm points (where he ends)", options: ["north", "east", "south", "west"], a: 3 }] }
        ],
        answer: "Peter has formed a **straight angle** (180°). One arm is directed **east** and the other arm is directed **west**. A half-turn left or right ends in the same place."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Convert the following distances: 7250 m = ___ km, 3.8 km = ___ m, 9750 m = ___ km",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 7250, shift: true, hint: "m to km: ÷ 1000 (three ÷ 10s). km to m: × 1000." },
          { kind: "input", fields: [{ label: "7250 m =", value: 7.25, suffix: "km" }, { label: "3.8 km =", value: 3800, suffix: "m" }, { label: "9750 m =", value: 9.75, suffix: "km" }] }
        ],
        answer: "7250 m = **7.25 km** · 3.8 km = **3800 m** · 9750 m = **9.75 km**"
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Use estimation to determine the nearest total: 248 762 + 251 498. Communicate your reasoning.",
        options: ["550 000", "500 000", "450 000", "400 000"],
        answer: 1,
        explain: "248 762 is about 250 000 and 251 498 is about 250 000. 250 000 + 250 000 = 500 000. The exact total is 500 260.",
        interact: [{ kind: "marker", min: 400000, max: 550000, divs: 6, labels: [400000, 450000, 500000, 550000], label: "Estimate", hint: "Round each number, add them and slide the pin to your estimate." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the area model to determine the area of the rectangle: 14 cm by 6 cm.",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#×", "#10", "#4"], ["#6", { v: 60 }, { v: 24 }]], msg: "Multiply each part of 14 by 6." },
          { kind: "input", fields: [{ label: "Area", value: 84, suffix: "cm²" }] }
        ],
        answer: "Split 14 into 10 + 4. 6 × 10 = 60 and 6 × 4 = 24. 60 + 24 = **84 cm²**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the distributive property and the area model to solve: 378 × 5",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#×", "#300", "#70", "#8"], ["#5", { v: 1500 }, { v: 350 }, { v: 40 }]], msg: "Multiply each part of 378 by 5." },
          { kind: "input", fields: [{ label: "378 × 5 =", value: 1890 }] }
        ],
        answer: "378 = 300 + 70 + 8. 5 × 300 = 1500, 5 × 70 = 350, 5 × 8 = 40. 1500 + 350 + 40 = **1890**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Write these times as 12-hour time with am or pm: 19:12, 02:47, 01:45",
        img: "u12-24hour.png",
        interact: [
          { kind: "clock", time: "7:12", h24: true },
          { kind: "choose", rows: [
            { t: "19:12", options: ["9:12 pm", "7:12 am", "7:12 pm"], a: 2 },
            { t: "02:47", options: ["2:47 am", "2:47 pm", "12:47 am"], a: 0 },
            { t: "01:45", options: ["1:45 pm", "1:45 am", "11:45 am"], a: 1 }] }
        ],
        answer: "19:12 = **7:12 pm** · 02:47 = **2:47 am** · 01:45 = **1:45 am**. Hours 13 to 23 are pm: take away 12."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Convert the side lengths to the same unit of measurement. Calculate and record the perimeter of the rectangle.",
        interact: [
          { kind: "sides", view: [340, 170], label: "Rectangle 1.5 km by 750 m", fill: "#9FB4E8", poly: [[40, 50], [240, 50], [240, 150], [40, 150]],
            dims: [{ from: [40, 32], to: [240, 32] }, { from: [260, 50], to: [260, 150] }],
            labels: [{ x: 140, y: 22, t: "1.5 km" }, { x: 272, y: 106, t: "750 m", anchor: "start" }] },
          { kind: "input", fields: [{ label: "1.5 km =", value: 1500, suffix: "m" }, { label: "Perimeter", value: 4500, suffix: "m" }] }
        ],
        answer: "1.5 km = 1500 m. 1500 + 750 + 1500 + 750 = **4500 m** (4.5 km)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "738 + 162 is about 740 + 160 = 900. Communicate your reasoning.",
        answer: true,
        explain: "Rounded to the nearest ten, 738 is 740 and 162 is 160. 740 + 160 = 900. The exact total is also 900, so it is a good estimate.",
        interact: [{ kind: "jumps", start: 740, steps: [100, 10], hint: "Start at 740 and jump on 160." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Both these rectangles have a perimeter of 36 m: Rectangle 1 is 14 m by 4 m and Rectangle 2 is 6 m by 12 m. Calculate the area of each rectangle. Explain why both rectangles can have the same perimeter but different areas.",
        interact: [
          { kind: "array", rows: 4, cols: 14, max: 14, showTotal: true, hint: "Rectangle 1: 4 rows of 14 square metres. Then change it to 12 rows of 6 for Rectangle 2." },
          { kind: "input", fields: [{ label: "Rectangle 1 area", value: 56, suffix: "m²" }, { label: "Rectangle 2 area", value: 72, suffix: "m²" }] },
          { kind: "choose", rows: [{ t: "Why can the areas differ?", options: ["Perimeter is the distance around; area is the space inside. A long thin rectangle holds fewer squares.", "The perimeters are not really the same", "Area and perimeter are always equal"], a: 0 }] }
        ],
        answer: "Rectangle 1: 14 × 4 = **56 m²**. Rectangle 2: 6 × 12 = **72 m²**. Both perimeters are 36 m, but area measures the space inside. The longer, thinner rectangle covers less space."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Identify the errors in this formal algorithm and correct them to solve 712 × 6.",
        img: "u12-algorithm.png",
        interact: [
          { kind: "select", hint: "Tap every line that is wrong.", items: [["Line 1: 12", false], ["Line 2: 7", true], ["Line 3: 4300", true], ["Total: 4319", true]] },
          { kind: "input", fields: [{ label: "2 × 6 =", value: 12 }, { label: "10 × 6 =", value: 60 }, { label: "700 × 6 =", value: 4200 }, { label: "712 × 6 =", value: 4272 }] }
        ],
        answer: "Line 2 should be 1 ten × 6 = **60**, not 7. Line 3 should be 700 × 6 = **4200**, not 4300. Correct total: 12 + 60 + 4200 = **4272**.",
        explain: "Line 2 looks like 1 + 6 was added instead of multiplying the tens by 6."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Write these times using 24-hour notation: 11:09 pm, 1:52 pm, 1:26 am",
        img: "u12-24hour.png",
        interact: [
          { kind: "clock", time: "11:09", h24: true },
          { kind: "input", fields: [{ label: "11:09 pm", accept: ["23:09"], placeholder: "hh:mm" }, { label: "1:52 pm", accept: ["13:52"], placeholder: "hh:mm" }, { label: "1:26 am", accept: ["01:26"], placeholder: "hh:mm" }] }
        ],
        answer: "11:09 pm = **23:09** · 1:52 pm = **13:52** · 1:26 am = **01:26**. For pm times, add 12 to the hour."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Determine the perimeter of the rectangle. Remember to convert the side lengths to the same unit of measurement before calculating.",
        interact: [
          { kind: "sides", view: [400, 190], label: "Rectangle 5600 m by 3 km 300 m", fill: "#9FB4E8", poly: [[30, 50], [250, 50], [250, 170], [30, 170]],
            dims: [{ from: [30, 32], to: [250, 32] }, { from: [270, 50], to: [270, 170] }],
            labels: [{ x: 140, y: 22, t: "5600 m" }, { x: 282, y: 116, t: "3 km 300 m", anchor: "start" }] },
          { kind: "input", fields: [{ label: "3 km 300 m =", value: 3300, suffix: "m" }, { label: "Perimeter", value: 17800, suffix: "m" }] }
        ],
        answer: "3 km 300 m = 3300 m. 5600 + 3300 + 5600 + 3300 = **17 800 m** (17.8 km)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "What is the most reasonable estimate for the sum of: 1204 + 1204 + 1204",
        options: ["2800", "3600", "4000", "3000"],
        answer: 1,
        explain: "1204 is about 1200, and 1200 + 1200 + 1200 = 3600. The exact sum is 3612.",
        interact: [{ kind: "jumps", start: 0, steps: [1200], hint: "Jump on 1200 three times." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Length",
        prompt: "A rectangular playground is 23 m in length and 7 m in width. Calculate the area of the playground in square metres (m²).",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#×", "#20", "#3"], ["#7", { v: 140 }, { v: 21 }]], msg: "Multiply each part of 23 by 7." },
          { kind: "input", fields: [{ label: "Area", value: 161, suffix: "m²" }] }
        ],
        cubes: { ops: ["×"], solve: [{ t: "Area model", s: "Split 23 into 20 + 3. 7 × 20 = 140 and 7 × 3 = 21. 140 + 21 = 161 m²." }, { t: "Use a near fact", s: "7 × 25 = 175. Take away 7 × 2 = 14. 175 − 14 = 161 m²." }] },
        answer: "Area = length × width = 23 × 7 = **161 m²**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "19 ÷ 4 = ___ remainder (r) ___",
        interact: [
          { kind: "pack", mode: "share", n: 4, total: 19, thing: "counters", label: "group", hint: "Share the 19 counters into 4 groups. How many in each group, and how many are left?" },
          { kind: "input", fields: [{ label: "19 ÷ 4 =", value: 4 }, { label: "remainder", value: 3 }] }
        ],
        answer: "19 ÷ 4 = **4 r 3**. 4 × 4 = 16, and 19 − 16 = 3 left over."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "A train arrives at Bankstown at 07:57. What time does it leave Warwick Farm? What time does the 07:34 from Liverpool arrive at Marrickville?",
        img: "u12-timetable.png",
        interact: [{ kind: "input", fields: [{ label: "Leaves Warwick Farm", accept: ["07:37", "7:37 am"], placeholder: "hh:mm" }, { label: "Arrives at Marrickville", accept: ["08:14", "8:14 am"], placeholder: "hh:mm" }] }],
        cubes: { ops: [], note: "No calculation is needed. Find the column, then read across each row.", solve: [{ t: "Find the column first", s: "Find 07:57 in the Bankstown row. Go up that column to Warwick Farm: 07:37." }, { t: "Follow the 07:34", s: "Find 07:34 in the Liverpool row. Go down that column to Marrickville: 08:14." }] },
        answer: "It leaves Warwick Farm at **07:37**. The 07:34 from Liverpool arrives at Marrickville at **08:14**. Both are in the same column of the timetable."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Is the data in these graphs categorical or continuous? Which data display is more appropriate to display this data? Why?",
        interact: [
          { kind: "bargraph", max: 10, step: 2, ylabel: "How many people", xlabel: "Number of siblings", label: "Number of siblings in our class: column graph",
            series: [{ l: "People", c: "#C86BE4" }],
            groups: [{ l: "four", v: [3] }, { l: "three", v: [4] }, { l: "two", v: [8] }, { l: "one", v: [10] }, { l: "none", v: [3] }] },
          { kind: "bargraph", line: true, max: 10, step: 2, ylabel: "How many people", xlabel: "Number of siblings", label: "Number of siblings in our class: line graph",
            series: [{ l: "People", c: "#5A21E0" }],
            groups: [{ l: "four", v: [3] }, { l: "three", v: [4] }, { l: "two", v: [8] }, { l: "one", v: [10] }, { l: "none", v: [3] }] },
          { kind: "choose", rows: [
            { t: "The data is", options: ["categorical", "continuous"], a: 0 },
            { t: "The better display is", options: ["the column (bar) graph", "the line graph"], a: 0 },
            { t: "Why?", options: ["Each group is separate. Nothing is measured in between the groups.", "Line graphs show more people", "The data changes over time"], a: 0 }] }
        ],
        answer: "The data is **categorical**: each number of siblings is a separate group. A **bar (column) graph** is better. A line graph joins the points as if there were values in between, which suits continuous data such as temperature over time.",
        explain: "The slide's bar graph is horizontal; it is redrawn as a tappable column graph with the same data. Strictly, number of siblings is discrete numerical data. It is grouped into separate categories here, and it is not continuous."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "This is a reasonable estimate: 276 + 489 = 800. Communicate your reasoning.",
        answer: true,
        explain: "Rounded to the nearest hundred, 276 is 300 and 489 is 500. 300 + 500 = 800. The exact total is 765, which is close to 800.",
        interact: [{ kind: "marker", min: 700, max: 900, divs: 4, labels: [700, 800, 900], label: "765", hint: "The exact total is 765. Slide the pin there. Is it close to 800?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Choose either hectares (ha) or square kilometres (km²) as the most appropriate unit to measure the area of: a large farm, a country, a sports field. Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "a large farm", options: ["hectares (ha)", "square kilometres (km²)"], a: 0 },
          { t: "a country", options: ["hectares (ha)", "square kilometres (km²)"], a: 1 },
          { t: "a sports field", options: ["hectares (ha)", "square kilometres (km²)"], a: 0 }] }],
        answer: "Large farm: **hectares**. Country: **square kilometres**. Sports field: **hectares**. 1 ha is a 100 m by 100 m square, about the size of a sports field. 1 km² is 100 ha, so it suits huge areas like countries.",
        explain: "A very large farm could also be measured in km². Hectares is the usual unit for farms, so it is the answer here."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use knowledge of multiples to partition and solve 624 ÷ 4",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#624 =", "#400", "#200", "#24"], ["#÷ 4", { v: 100 }, { v: 50 }, { v: 6 }]], msg: "Divide each part by 4." },
          { kind: "input", fields: [{ label: "624 ÷ 4 =", value: 156 }] }
        ],
        answer: "624 = 400 + 200 + 24, all multiples of 4. 400 ÷ 4 = 100, 200 ÷ 4 = 50, 24 ÷ 4 = 6. 100 + 50 + 6 = **156**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Between which times was Ashton playing in the family board game tournament? What was Ashton doing at 4:00 pm?",
        img: "u12-ashton.png",
        interact: [
          { kind: "jumps", start: 1140, steps: [60, 30], time: true, ampm: true, hint: "Start when the tournament starts and jump to when it ends." },
          { kind: "choose", rows: [
            { t: "The tournament started at", options: ["6:30 pm", "7:00 pm", "9:00 pm"], a: 1 },
            { t: "It finished at", options: ["8:00 pm", "9:00 pm", "11:00 pm"], a: 1 },
            { t: "At 4:00 pm Ashton was", options: ["at George's birthday party", "swimming in the pool", "doing chores", "playing computer games"], a: 1 }] }
        ],
        answer: "The tournament was between **7:00 pm and 9:00 pm** (19:00 to 21:00). At 4:00 pm (16:00) Ashton was **swimming in the pool**."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Use the timeline, scale and ruler to answer: Which year was there an influx of Chinese miners to Australia?",
        img: "u12-timeline.png",
        interact: [
          { kind: "jumps", start: 1820, steps: [5, 10], hint: "2 cm = 10 years, so each 1 cm is 5 years. Jump from 1820 along the ruler." },
          { kind: "input", fields: [{ label: "The line is at", value: 8, suffix: "cm" }, { label: "Year", value: 1860 }] }
        ],
        answer: "The line is at **8 cm**. 8 cm is 4 lots of 2 cm, so 4 × 10 = 40 years after 1820: **1860**.",
        explain: "The answer is read from the timeline's scale. Check: Eureka Stockade sits near 6.8 cm (1854) and Kalgoorlie near 14.6 cm (1893)."
      }
    ]
  ]
});
