/*
  Stage 3 Year B, Unit 31 — Review of learning (Term 3, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
(function () {
  // A thin tappable band along a line segment, for classify.
  const seg = (x1, y1, x2, y2, a, lab, lx, ly) => {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), nx = (-dy / L) * 6, ny = (dx / L) * 6, r = (v) => Math.round(v * 10) / 10;
    return { p: [[x1 + nx, y1 + ny], [x2 + nx, y2 + ny], [x2 - nx, y2 - ny], [x1 - nx, y1 - ny]].map((q) => r(q[0]) + "," + r(q[1])).join(" "), fill: "#17233F", a,
      deco: "<text x='" + lx + "' y='" + ly + "' class='co-lab'>" + lab + "</text>" };
  };
  const ball = (x, y, fill, a) => ({ circle: [x, y, 26], fill, a, deco: "<circle cx='" + (x + 9) + "' cy='" + (y - 10) + "' r='5' fill='#FFFFFF' opacity='.7' pointer-events='none'/>" });
  const RD = "#E53935", PU = "#8C4DFF", BU = "#2FA8F5", YE = "#F2C81F";

  UNITS.push({
    stage: 3, ab: "B", term: 3, ls: 1, unit: 31,
    img: "img/s3/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 31 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1
      [
        {
          type: "mc", focus: "Multiplicative relations B",
          prompt: "An inverse operation of 21 × 15 = 315 is:",
          options: ["15 × 21 = 315", "315 = 21 × 15", "315 ÷ 21 = 15", "315 ÷ 15 = 15"],
          answer: 2,
          explain: "Division undoes multiplication, so 315 ÷ 21 = 15 (or 315 ÷ 15 = 21). A and B are still multiplication. D divides, but 315 ÷ 15 is 21, not 15.",
          interact: [{ kind: "scale", left: "315 ÷ 21", right: "?", answer: 15 }]
        },
        {
          type: "sr", focus: "Represents numbers A",
          prompt: "What number can be grouped as: 5 millions, 467 thousands, 8 hundreds, 7 tens and 9 ones?",
          interact: [
            { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 0, hint: "Build each group. 467 thousands fills the Thousands house." },
            { kind: "input", fields: [{ label: "The number is", value: 5467879 }] }
          ],
          answer: "**5 467 879**. 5 millions = 5 000 000, 467 thousands = 467 000, then 800 + 70 + 9."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Which 2 lines are perpendicular?",
          interact: [
            { kind: "classify", view: [330, 300], label: "Four lines A, B, C and D crossing at one point", hint: "Tap the 2 lines that meet at a right angle.",
              cats: [{ k: "p", t: "Perpendicular", c: "#2F6FE4" }],
              shapes: [seg(18, 43, 142, 217, null, "A", 12, 34), seg(110, 15, 110, 285, "p", "B", 110, 12), seg(197, 42, 90, 205, null, "C", 205, 36), seg(76, 173, 300, 173, "p", "D", 314, 179)] },
            { kind: "choose", rows: [{ t: "Perpendicular lines", options: ["A and C", "B and D", "A and D", "C and D"], a: 1 }] }
          ],
          answer: "**B and D**. Line B is vertical and line D is horizontal, so they meet at a right angle (90°)."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A",
          prompt: "Name the three-dimensional objects according to their base.",
          img: "u31-bases.png",
          interact: [{ kind: "choose", rows: [
            { t: "A", options: ["square-based pyramid", "triangular-based pyramid", "rectangular prism", "triangular prism"], a: 0 },
            { t: "B", options: ["square-based pyramid", "triangular-based pyramid", "rectangular prism", "triangular prism"], a: 2 },
            { t: "C", options: ["square-based pyramid", "triangular-based pyramid", "rectangular prism", "triangular prism"], a: 1 }] }],
          answer: "A: **square-based pyramid** · B: **rectangular prism** · C: **triangular-based pyramid**. A pyramid is named by the shape of its base."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Record the size of the orange angle. Communicate your reasoning.",
          img: "u31-angles.png",
          interact: [
            { kind: "expr", count: 1, target: 120, placeholder: "e.g. 360 − 30 − …", sample: ["360 - 30 - 70 - 80 - 60"], mustUse: { re: "[−\\-]", msg: "Show how you worked it out, for example 360 − 30 − 70 − 80 − 60." } },
            { kind: "input", fields: [{ label: "Orange angle", value: 120, suffix: "°" }] }
          ],
          answer: "**120°**. Angles at a point add to 360°: 360 − (30 + 70 + 80 + 60) = 360 − 240 = 120°. Or: the long line is straight, so 30 + 70 + 80 = 180, and the orange angle sits on the same straight line as the 60°: 180 − 60 = 120°."
        }
      ],
      // Review 2
      [
        {
          type: "tf", focus: "Multiplicative relations B",
          prompt: "8 × ___ = 112. The missing number is 14. Communicate your reasoning.",
          answer: true,
          explain: "8 × 14 = 8 × 10 + 8 × 4 = 80 + 32 = 112. Check with the inverse: 112 ÷ 8 = 14.",
          interact: [{ kind: "scale", left: "8 × ?", right: "112", answer: 14 }]
        },
        {
          type: "sr", focus: "Represents numbers A",
          prompt: "Regroup these numbers in 2 different forms: 67 543 980 and 736 443 211",
          interact: [
            { kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 67543980, hint: "Cover the places to the right of a column. The digits left over tell you how many of that place." },
            { kind: "input", fields: [
              { label: "67 543 980 = ___ ten thousands + 3980", value: 6754 },
              { label: "67 543 980 = ___ hundreds + 80", value: 675439 },
              { label: "736 443 211 = ___ millions + 443 211", value: 736 },
              { label: "736 443 211 = ___ thousands + 211", value: 736443 }] }
          ],
          answer: "67 543 980 = **6754 ten thousands** + 3980 = **675 439 hundreds** + 80. 736 443 211 = **736 millions** + 443 211 = **736 443 thousands** + 211.",
          explain: "Many regroupings are correct. The boxes give two examples for each number; accept any other correct form in discussion."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Finish this sentence: When 2 adjacent angles form a right angle, the sum of their angles equals ___°. Communicate your reasoning.",
          interact: [
            { kind: "angle", names: true, degrees: true, target: "right", start: 40, label: "Turn the arm to make a right angle. Any line through the corner splits it into 2 adjacent angles." },
            { kind: "input", fields: [{ label: "Sum", value: 90, suffix: "°" }] }
          ],
          answer: "**90°**. Together the 2 adjacent angles make the whole right angle, and a right angle is 90°. For example, 30° + 60° = 90°."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A",
          prompt: "Name the object this net would create. Communicate your reasoning.",
          img: "u31-net.png",
          interact: [{ kind: "choose", rows: [
            { t: "The net has", options: ["3 rectangles and 2 triangles", "4 triangles", "1 square and 4 triangles", "6 rectangles"], a: 0 },
            { t: "It makes a", options: ["triangular-based pyramid", "triangular prism", "square-based pyramid", "rectangular prism"], a: 1 }] }],
          answer: "A **triangular prism**. It has 2 triangle faces (the 2 ends) and 3 rectangle faces joining them."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "15.5 cm is ___ centimetres and ___ millimetres.",
          interact: [
            { kind: "marker", min: 15, max: 16, divs: 10, majorEvery: 5, labels: [15, 16], label: "15.5 cm", hint: "Each small mark is 1 mm. Slide the pin to 15.5 cm." },
            { kind: "input", fields: [{ label: "centimetres", value: 15 }, { label: "millimetres", value: 5 }] }
          ],
          answer: "**15 centimetres and 5 millimetres**. 0.5 cm is half a centimetre, and 1 cm = 10 mm, so 0.5 cm = 5 mm."
        }
      ],
      // Review 3
      [
        {
          type: "mc", focus: "Multiplicative relations B",
          prompt: "3 × 6 = ___ ÷ 4",
          options: ["72", "84", "76", "24"],
          answer: 0,
          explain: "3 × 6 = 18, so the missing number divided by 4 must make 18. Use the inverse: 18 × 4 = 72, and 72 ÷ 4 = 18.",
          interact: [{ kind: "scale", left: "3 × 6", right: "? ÷ 4", answer: 72 }]
        },
        {
          type: "sr", focus: "Represents numbers A",
          prompt: "Record the following using decimal notation: 754 thousandths, 609 thousandths, 980 thousandths",
          interact: [
            { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.754, hint: "Thousandths are 3 places after the decimal point." },
            { kind: "input", fields: [{ label: "754 thousandths", value: 0.754 }, { label: "609 thousandths", value: 0.609 }, { label: "980 thousandths", value: 0.98 }] }
          ],
          answer: "**0.754** · **0.609** · **0.980** (or 0.98)."
        },
        {
          type: "sr", focus: "Geometric measure B: Position",
          prompt: "Record the coordinates of the circle, the triangle and the sun.",
          interact: [
            { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "circle", x: -4, y: -3 }, { l: "triangle", x: -3, y: 5 }, { l: "sun", x: 3, y: -2 }, { l: "smiley", x: -5, y: 2 }, { l: "heart", x: -2, y: -5 }], hint: "Tap a shape to trace it to each axis. Read across (x) first, then up or down (y)." },
            { kind: "input", fields: [
              { label: "Circle x", value: -4 }, { label: "Circle y", value: -3 },
              { label: "Triangle x", value: -3 }, { label: "Triangle y", value: 5 },
              { label: "Sun x", value: 3 }, { label: "Sun y", value: -2 }] }
          ],
          answer: "a. Circle **(−4, −3)** · b. Triangle **(−3, 5)** · c. Sun **(3, −2)**",
          explain: "The slide's pictures are redrawn as labelled points on the same −6 to 6 plane."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A",
          prompt: "Sketch this rectangular prism from its top view and side view.",
          img: "u31-prism.png",
          interact: [
            { kind: "sketch", grid: "square" },
            { kind: "choose", rows: [
              { t: "Top view", options: ["rectangle", "triangle", "circle", "hexagon"], a: 0 },
              { t: "Side view", options: ["rectangle", "triangle", "circle", "hexagon"], a: 0 }] }
          ],
          answer: "Both views are **rectangles**. The top view is a long, thin rectangle; the side (end) view is a shorter rectangle.",
          explain: "Side view is taken as the view of the end face. The view from the front is also a rectangle."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "Use decimal notation to complete the following: 3400 m is ___ km. 7900 m is ___ km.",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 3400, shift: true, hint: "m to km: ÷ 1000. Shift the digits 3 places." },
            { kind: "input", fields: [{ label: "3400 m =", value: 3.4, suffix: "km" }, { label: "7900 m =", value: 7.9, suffix: "km" }] }
          ],
          answer: "3400 m = **3.4 km** · 7900 m = **7.9 km**. 1000 m = 1 km, so divide by 1000."
        }
      ],
      // Review 4
      [
        {
          type: "tf", focus: "Multiplicative relations B",
          prompt: "8 × 4 = 32 ÷ 2. Communicate your reasoning.",
          answer: false,
          explain: "8 × 4 = 32, but 32 ÷ 2 = 16. 32 is not equal to 16, so the sides don't balance. Use the scale: 8 × 4 = 64 ÷ 2 would be true.",
          interact: [{ kind: "scale", left: "8 × 4", right: "? ÷ 2", answer: 64 }]
        },
        {
          type: "sr", focus: "Represents numbers B",
          prompt: "Calculate 10% of 350. Communicate your reasoning.",
          interact: [
            { kind: "bar", whole: { v: 350, l: "350", n: "100%" }, parts: [{ v: 35, l: "?", n: "10%", hide: true }, { v: 35, l: "" }, { v: 35, l: "" }, { v: 35, l: "" }, { v: 35, l: "" }, { v: 35, l: "" }, { v: 35, l: "" }, { v: 35, l: "" }, { v: 35, l: "" }, { v: 35, l: "" }] },
            { kind: "input", fields: [{ label: "10% of 350 =", value: 35 }] }
          ],
          answer: "**35**. 10% is [1/10], so split 350 into 10 equal parts: 350 ÷ 10 = 35."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Identify whether the marked angle is a right angle, an angle on a straight line or an angle at a point.",
          img: "u31-glass.png",
          interact: [{ kind: "choose", rows: [{ t: "The marked angle is", options: ["a right angle", "an angle on a straight line", "an angle at a point"], a: 1 }] }],
          answer: "**An angle on a straight line**. The red arc starts on the long black line and ends on the same line, so it measures 180°."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A",
          prompt: "I am a three-dimensional object. I have a triangle base. I have 4 faces. What am I?",
          interact: [{ kind: "choose", rows: [{ t: "I am a", options: ["triangular prism", "triangular-based pyramid", "square-based pyramid", "cone"], a: 1 }] }],
          answer: "A **triangular-based pyramid** (tetrahedron): 1 triangle base and 3 triangle faces meeting at the apex make 4 faces. A triangular prism has 5 faces."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "These eight balls are placed in a bag. One ball is selected from the bag. Record the probability of each outcome using a fraction.",
          interact: [
            { kind: "classify", view: [560, 190], total: 8, mark: "outline", label: "Eight balls: 2 red, 2 purple, 3 blue, 1 yellow", hint: "Tap a colour, then tap each ball of that colour.",
              cats: [{ k: "r", t: "Red", c: RD }, { k: "p", t: "Purple", c: PU }, { k: "b", t: "Blue", c: BU }, { k: "y", t: "Yellow", c: YE }],
              shapes: [ball(45, 70, RD, "r"), ball(110, 125, RD, "r"), ball(215, 120, PU, "p"), ball(285, 125, PU, "p"), ball(310, 50, BU, "b"), ball(385, 55, BU, "b"), ball(440, 125, BU, "b"), ball(510, 70, YE, "y")] },
            { kind: "input", fields: [{ label: "Red", value: 0.25, placeholder: "a/b" }, { label: "Purple", value: 0.25, placeholder: "a/b" }, { label: "Blue", value: 0.375, placeholder: "a/b" }, { label: "Yellow", value: 0.125, placeholder: "a/b" }] }
          ],
          answer: "Red **[2/8]** · Purple **[2/8]** · Blue **[3/8]** · Yellow **[1/8]**. Each is the number of that colour out of 8 balls. ([2/8] = [1/4].)"
        }
      ],
      // Review 5
      [
        {
          type: "mc", focus: "Multiplicative relations A",
          prompt: "Which algorithm is correct?",
          img: "u31-alg766.png",
          options: ["A", "B", "C", "D"],
          answer: 2,
          explain: "766 × 3: 6 × 3 = 18, 60 × 3 = 180, 700 × 3 = 2100. 18 + 180 + 2100 = 2298. A writes 1800 for 60 × 3 (and adds wrongly), B writes 810 and 2400, D writes 21 for 6 × 3.",
          interact: [{ kind: "cells", cols: 4, w: 110, msg: "Multiply 3 by each part of 766.", grid: [["#×", "#700", "#60", "#6"], ["#3", { v: 2100 }, { v: 180 }, { v: 18 }]] }]
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Record the numbers that complete the table of values. Each shape is a hexagon.",
          interact: [{ kind: "cells", cols: 6, w: 90, msg: "Each hexagon has 6 sides. Add 6 each time.", grid: [
            ["#Shapes", "#1", "#2", "#3", "#4", "#5"],
            ["#Sides", "#6", "#12", "#18", { v: 24 }, { v: 30 }]] }],
          answer: "**24** and **30**. Number of sides = number of shapes × 6, so 4 × 6 = 24 and 5 × 6 = 30."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "How many degrees is an acute angle, an obtuse angle and a reflex angle?",
          interact: [
            { kind: "angle", names: true, degrees: true, reflex: true, start: 40, label: "Turn the arm and watch the name change." },
            { kind: "choose", rows: [
              { t: "Acute", options: ["less than 90°", "between 90° and 180°", "between 180° and 360°"], a: 0 },
              { t: "Obtuse", options: ["less than 90°", "between 90° and 180°", "between 180° and 360°"], a: 1 },
              { t: "Reflex", options: ["less than 90°", "between 90° and 180°", "between 180° and 360°"], a: 2 }] }
          ],
          answer: "Acute: **more than 0° and less than 90°** · Obtuse: **more than 90° and less than 180°** · Reflex: **more than 180° and less than 360°**."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: Volume",
          prompt: "What are the equivalent measurements in millilitres? 0.1 L and 0.25 L",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 0.25, shift: true, hint: "L to mL: × 1000. Shift the digits 3 places." },
            { kind: "input", fields: [{ label: "0.1 L =", value: 100, suffix: "mL" }, { label: "0.25 L =", value: 250, suffix: "mL" }] }
          ],
          answer: "0.1 L = **100 mL** · 0.25 L = **250 mL**. 1 L = 1000 mL, so multiply by 1000."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A",
          prompt: "Identify the isosceles triangle, the scalene triangle and the equilateral triangle.",
          interact: [{ kind: "classify", view: [570, 200], label: "Three triangles A, B and C", hint: "Tap a type, then tap the triangle.",
            cats: [{ k: "i", t: "Isosceles", c: "#2F6FE4" }, { k: "s", t: "Scalene", c: "#D6408B" }, { k: "e", t: "Equilateral", c: "#00A65A" }],
            shapes: [
              { p: "30,20 30,170 180,170", fill: "#B8C4D6", a: "i", deco: "<text x='14' y='30' class='co-lab'>A</text>" },
              { p: "235,55 400,30 210,160", fill: "#B8C4D6", a: "s", deco: "<text x='205' y='55' class='co-lab'>B</text>" },
              { p: "400,170 550,170 475,40.1", fill: "#B8C4D6", a: "e", deco: "<text x='420' y='60' class='co-lab'>C</text>" }] }],
          answer: "A is **isosceles** (2 equal sides, with a right angle) · B is **scalene** (no equal sides) · C is **equilateral** (3 equal sides).",
          explain: "The triangles are redrawn from the slide: A is a right-angled triangle with 2 equal sides."
        }
      ],
      // Review 6
      [
        {
          type: "tf", focus: "Multiplicative relations A",
          prompt: "Meg correctly used the formal algorithm.",
          img: "u31-meg.png",
          answer: true,
          explain: "766 × 3: 6 × 3 = 18, 60 × 3 = 180, 700 × 3 = 2100. 18 + 180 + 2100 = 2298, which is what Meg wrote.",
          interact: [{ kind: "cells", cols: 4, w: 110, msg: "Check each partial product.", grid: [["#×", "#700", "#60", "#6"], ["#3", { v: 2100 }, { v: 180 }, { v: 18 }]] }]
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Solve 45 × 45 using an area model.",
          interact: [
            { kind: "cells", cols: 3, w: 110, msg: "Split both 45s into 40 and 5. Multiply each pair.", grid: [["#×", "#40", "#5"], ["#40", { v: 1600 }, { v: 200 }], ["#5", { v: 200 }, { v: 25 }]] },
            { kind: "input", fields: [{ label: "45 × 45 =", value: 2025 }] }
          ],
          answer: "**2025**. 40 × 40 = 1600, 40 × 5 = 200, 5 × 40 = 200, 5 × 5 = 25. 1600 + 200 + 200 + 25 = 2025."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Calculate the elapsed time from 9:15 am to 11:10 am. Communicate your reasoning.",
          interact: [
            { kind: "jumps", time: true, ampm: true, start: 555, end: 670, steps: [5, 10, 45, 60], hint: "Jump from 9:15 to 10:00, then in hours and minutes." },
            { kind: "input", fields: [{ label: "hours", value: 1 }, { label: "minutes", value: 55 }] }
          ],
          answer: "**1 hour 55 minutes** (115 minutes). 9:15 + 45 min = 10:00, + 1 h = 11:00, + 10 min = 11:10. 45 + 60 + 10 = 115 minutes."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: Volume",
          prompt: "750 mL can also be represented as ___ L. 0.980 L can also be represented as ___ mL.",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 750, shift: true, hint: "mL to L: ÷ 1000. L to mL: × 1000." },
            { kind: "input", fields: [{ label: "750 mL =", value: 0.75, suffix: "L" }, { label: "0.980 L =", value: 980, suffix: "mL" }] }
          ],
          answer: "750 mL = **0.75 L** (0.750 L) · 0.980 L = **980 mL**.",
          explain: "The slide says '0.750 mL', which is a typo: 0.750 mL is less than 1 mL. It has been changed to 750 mL."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A",
          prompt: "What three-dimensional object has a square base and 5 vertices? Sketch the shape.",
          interact: [
            { kind: "sketch", grid: "square" },
            { kind: "choose", rows: [{ t: "The object is a", options: ["cube", "square-based pyramid", "triangular prism", "triangular-based pyramid"], a: 1 }] }
          ],
          answer: "A **square-based pyramid**: 4 vertices around the square base plus 1 apex = 5 vertices.",
          explain: "The slide says '4 vertices', but no 3D object with a square base has only 4 vertices (the square alone has 4). Changed to 5 vertices, which matches a square-based pyramid."
        }
      ],
      // Review 7
      [
        {
          type: "mc", focus: "Multiplicative relations A",
          prompt: "Which algorithm is correct?",
          img: "u31-alg564.png",
          options: ["A", "B", "C", "D"],
          answer: 0,
          explain: "564 × 5: 4 × 5 = 20, 60 × 5 = 300, 500 × 5 = 2500. 20 + 300 + 2500 = 2820. B writes 350 for 60 × 5, C adds wrongly, D writes 25 000 for 500 × 5.",
          interact: [{ kind: "cells", cols: 4, w: 110, msg: "Multiply 5 by each part of 564.", grid: [["#×", "#500", "#60", "#4"], ["#5", { v: 2500 }, { v: 300 }, { v: 20 }]] }]
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "If 4 identical bikes cost $1648, what is the cost of one bike?",
          interact: [
            { kind: "bar", whole: { v: 1648, l: "$1648", n: "4 bikes" }, parts: [{ v: 412, l: "?", n: "1 bike", hide: true }, { v: 412, l: "" }, { v: 412, l: "" }, { v: 412, l: "" }] },
            { kind: "input", fields: [{ label: "One bike costs", value: 412, prefix: "$" }] }
          ],
          cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Split into place value parts", s: "1648 = 1600 + 40 + 8. 1600 ÷ 4 = 400, 40 ÷ 4 = 10, 8 ÷ 4 = 2. 400 + 10 + 2 = $412." }, { t: "Halve and halve again", s: "Dividing by 4 is halving twice: half of 1648 = 824, half of 824 = $412." }] },
          answer: "**$412**. 1648 ÷ 4 = 412. Check: 412 × 4 = 1648."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Nadia drove for 5 hours and 50 minutes. She arrived at 17:45. Use a bridging strategy to calculate the time she left.",
          interact: [
            { kind: "jumps", time: "24", start: 1065, back: true, steps: [5, 10, 45, 60], hint: "Start at 17:45. Jump back 5 hours, then 50 minutes. Bridge through 12:00." },
            { kind: "input", fields: [{ label: "She left at", accept: ["1155", "11:55", "11:55am", "1155am"], placeholder: "00:00" }] }
          ],
          cubes: { ops: ["−"], solve: [{ t: "Hours, then bridge the minutes", s: "17:45 − 5 h = 12:45. 12:45 − 45 min = 12:00, then − 5 min more = 11:55." }, { t: "Take an hour, give back", s: "5 h 50 min is 6 h less 10 min. 17:45 − 6 h = 11:45, + 10 min = 11:55." }] },
          answer: "**11:55** (11:55 am)."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure A: Volume",
          prompt: "Record 1256 mL using decimal notation.",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 1256, shift: true, hint: "mL to L: ÷ 1000. Shift the digits 3 places." },
            { kind: "input", fields: [{ label: "1256 mL =", value: 1.256, suffix: "L" }] }
          ],
          answer: "**1.256 L**. 1000 mL = 1 L, so 1256 mL = 1 L and 256 mL."
        },
        {
          type: "sr", focus: "Non-spatial measure A: Mass",
          prompt: "2.45 kg is the same as ___ kilograms and ___ grams.",
          interact: [
            { kind: "pv", cols: ["O", "t", "h", "th"], start: 2.45, hint: "The ones are whole kilograms. The decimal part is thousandths of a kilogram: grams." },
            { kind: "input", fields: [{ label: "kilograms", value: 2 }, { label: "grams", value: 450 }] }
          ],
          answer: "**2 kilograms and 450 grams**. 0.45 kg = 0.450 kg = 450 g, because 1 kg = 1000 g."
        }
      ],
      // Review 8
      [
        {
          type: "tf", focus: "Multiplicative relations A",
          prompt: "Tim correctly used a formal algorithm.",
          img: "u31-tim.png",
          answer: false,
          explain: "291 × 8: 1 × 8 = 8, 90 × 8 = 720, 200 × 8 = 1600. Tim wrote 72 instead of 720. The correct answer is 8 + 720 + 1600 = 2328, not 1680.",
          interact: [{ kind: "cells", cols: 4, w: 110, msg: "Check each partial product.", grid: [["#×", "#200", "#90", "#1"], ["#8", { v: 1600 }, { v: 720 }, { v: 8 }]] }]
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Multiply 0.75 by 10, 100 and 1000.",
          interact: [
            { kind: "pv", cols: ["H", "T", "O", "t", "h"], start: 0.75, shift: true, hint: "× 10 moves each digit 1 place to the left." },
            { kind: "input", fields: [{ label: "0.75 × 10 =", value: 7.5 }, { label: "0.75 × 100 =", value: 75 }, { label: "0.75 × 1000 =", value: 750 }] }
          ],
          answer: "0.75 × 10 = **7.5** · × 100 = **75** · × 1000 = **750**. Each × 10 moves the digits one place to the left."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Steph played video games from 7:45 pm to 9:05 pm. Calculate the time she spent playing video games.",
          interact: [
            { kind: "jumps", time: true, ampm: true, start: 1185, end: 1265, steps: [5, 15, 60], hint: "Jump from 7:45 pm to 8:00 pm, then on to 9:05 pm." },
            { kind: "input", fields: [{ label: "hours", value: 1 }, { label: "minutes", value: 20 }] }
          ],
          cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Bridge to the hour", s: "7:45 + 15 min = 8:00, + 1 h = 9:00, + 5 min = 9:05. 15 + 60 + 5 = 80 minutes." }, { t: "Hour first", s: "7:45 + 1 h = 8:45, + 15 min = 9:00, + 5 min = 9:05. 1 h + 20 min." }] },
          answer: "**1 hour 20 minutes** (80 minutes)."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Record the amount of water in each container in mL, then order them from smallest to largest.",
          img: "u31-jugs.png",
          interact: [
            { kind: "input", fields: [{ label: "A", value: 1000, suffix: "mL" }, { label: "B", value: 500, suffix: "mL" }, { label: "C", min: 725, max: 775, suffix: "mL" }] },
            { kind: "order", items: ["A", "B", "C"], answer: [1, 2, 0] }
          ],
          answer: "A = **1000 mL**, B = **500 mL**, C = **750 mL**. Smallest to largest: **B, C, A**.",
          explain: "The slide asks for 'capacities', but all 3 jugs hold the same amount when full; the question is about the water in each, so the wording has been changed. C's water sits halfway between 700 mL and 800 mL, so it reads as 750 mL (answers from 725 to 775 mL are accepted)."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Jane arrived at her friend's house at 14:30. She left at 17:15. How long did she stay there?",
          interact: [
            { kind: "jumps", time: "24", start: 870, end: 1035, steps: [15, 30, 45, 60], hint: "Jump from 14:30 to 17:15. Try whole hours first." },
            { kind: "input", fields: [{ label: "hours", value: 2 }, { label: "minutes", value: 45 }] }
          ],
          cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Hours, then minutes", s: "14:30 + 2 h = 16:30, + 30 min = 17:00, + 15 min = 17:15. 2 h + 45 min." }, { t: "Bridge to the hour", s: "14:30 + 30 min = 15:00, + 2 h = 17:00, + 15 min = 17:15. 30 + 120 + 15 = 165 minutes." }] },
          answer: "**2 hours 45 minutes** (165 minutes)."
        }
      ]
    ]
  });
})();
