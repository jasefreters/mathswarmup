/*
  Stage 3 Year B, Unit 38 — Review of learning (Term 4, learning sequence 3: Weeks 5–6).
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
  const r1 = (n) => Math.round(n * 10) / 10;

  // Pie wedge from angle a0 to a1 (degrees clockwise from the top).
  const wedge = (a0, a1) => {
    const cx = 160, cy = 160, R = 140, pts = [[cx, cy]];
    for (let a = a0; a <= a1 + 1e-9; a += 5) { const t = (a * Math.PI) / 180; pts.push([r1(cx + R * Math.sin(t)), r1(cy - R * Math.cos(t))]); }
    return pts.map((q) => q.join(",")).join(" ");
  };
  const pieLines = (() => {
    let s = "<g style='pointer-events:none' stroke='#FFFFFF' stroke-width='2'>";
    [0, 60, 120, 180].forEach((a) => { const t = (a * Math.PI) / 180; s += "<line x1='160' y1='160' x2='" + r1(160 + 140 * Math.sin(t)) + "' y2='" + r1(160 - 140 * Math.cos(t)) + "'/>"; });
    s += "</g><g style='pointer-events:none' stroke='#2E6B1F' stroke-width='2' stroke-dasharray='6 5'>";
    [240, 300].forEach((a) => { const t = (a * Math.PI) / 180; s += "<line x1='160' y1='160' x2='" + r1(160 + 140 * Math.sin(t)) + "' y2='" + r1(160 - 140 * Math.cos(t)) + "'/>"; });
    return s + "</g>";
  })();

  // Triangle of side 4 cut into 16 small triangles. The 6 around the centre point P(2,1) make the hexagon.
  const P = (j, i) => [r1(200 - j * 40 + i * 80), r1(20 + j * 69.28)];
  const tri16 = (() => {
    const out = [];
    const hex = ["u1-0", "d1-0", "u1-1", "d2-0", "u2-1", "d2-1"];
    for (let r = 0; r < 4; r++) {
      for (let k = 0; k <= r; k++) out.push({ key: "u" + r + "-" + k, pts: [P(r, k), P(r + 1, k), P(r + 1, k + 1)] });
      for (let k = 0; k < r; k++) out.push({ key: "d" + r + "-" + k, pts: [P(r, k), P(r, k + 1), P(r + 1, k + 1)] });
    }
    return out.map((t) => { const inHex = hex.includes(t.key); return { p: t.pts.map((q) => q.join(",")).join(" "), a: inHex ? "p" : "g", fill: inHex ? "#C66BE0" : "#7ED957" }; });
  })();
  const triLines = (() => {
    let s = "<g style='pointer-events:none' stroke='#FFFFFF' stroke-width='1.5' stroke-opacity='0.9'>";
    tri16.forEach((t) => { s += "<polygon points='" + t.p + "' fill='none'/>"; });
    s += "</g><polygon points='" + [P(0, 0), P(4, 0), P(4, 4)].map((q) => q.join(",")).join(" ") + "' fill='none' stroke='#111' stroke-width='4' style='pointer-events:none'/>";
    return s;
  })();
  tri16[tri16.length - 1].deco = triLines;

  UNITS.push({
    stage: 3, ab: "B", term: 4, ls: 3, unit: 38,
    img: "img/s3/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 38 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1
      [
        {
          type: "mc", focus: "Representing quantity fractions B",
          prompt: "[1/5] of 40 is:",
          options: ["6", "7", "8", "9"],
          answer: 2,
          explain: "Finding [1/5] means sharing into 5 equal groups: 40 ÷ 5 = 8.",
          interact: [{ kind: "pack", mode: "share", n: 5, total: 40, thing: "counters", label: "group", hint: "Share 40 counters into 5 equal groups. How many in one group?" }]
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Record the chance of landing on a purple segment as a fraction.",
          interact: [
            { kind: "classify", view: [320, 320], label: "A spinner: half green, and one sixth each of orange, purple and blue", mark: "outline", total: 6,
              hint: "The dashed lines cut the green half into sixths too. Tap Purple, then tap the purple part. How many sixths is it?",
              cats: [{ k: "p", t: "Purple", c: "#3B1A5A" }],
              shapes: [
                { p: wedge(0, 60), fill: "#FF914D" },
                { p: wedge(60, 120), fill: "#A061A8", a: "p" },
                { p: wedge(120, 180), fill: "#3A4FA0" },
                { p: wedge(180, 240), fill: "#7ED957" },
                { p: wedge(240, 300), fill: "#7ED957" },
                { p: wedge(300, 360), fill: "#7ED957", deco: pieLines }] },
            { kind: "input", fields: [{ label: "Chance of purple", accept: ["1/6"], placeholder: "a/b" }] }
          ],
          answer: "**[1/6]**. Green is half of the spinner ([3/6]), and orange, purple and blue are one sixth each. Purple is 1 of the 6 equal parts.",
          explain: "The segments are not all the same size, so first cut the green half into 3 sixths. Then all 6 parts are equal."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Explain why a number is prime, composite or neither.",
          interact: [
            { kind: "array", rows: 3, cols: 4, max: 12, showTotal: true, hint: "12 makes more than one rectangle (1 × 12, 2 × 6, 3 × 4), so it is composite. Try 7: it only makes 1 × 7, so it is prime." },
            { kind: "choose", rows: [
              { t: "A prime number has", options: ["exactly 2 factors: 1 and itself", "more than 2 factors", "only 1 factor"], a: 0 },
              { t: "A composite number has", options: ["exactly 2 factors: 1 and itself", "more than 2 factors", "only 1 factor"], a: 1 },
              { t: "Neither prime nor composite", options: ["1", "2", "9"], a: 0 },
              { t: "7 is", options: ["prime", "composite", "neither"], a: 0 },
              { t: "12 is", options: ["prime", "composite", "neither"], a: 1 }] }
          ],
          answer: "A **prime** number has exactly 2 factors, 1 and itself (for example 7). A **composite** number has more than 2 factors (for example 12 = 1 × 12 = 2 × 6 = 3 × 4). **1 is neither**: it has only 1 factor.",
          explain: "0 is also neither prime nor composite."
        },
        {
          type: "sr", focus: "Representing quantity fractions A",
          prompt: "Record where one would be on the number line to represent the whole. [4/10] (0.4) is marked.",
          interact: [
            { kind: "marker", min: 0, max: 1.2, divs: 12, majorEvery: 12, labels: [0, 0.4], label: "1", target: 1, tol: 0.04, hint: "0 to 0.4 is 4 tenths. One whole is 10 tenths. Slide the pin to where 1 belongs." },
            { kind: "input", fields: [{ label: "Tenths in one whole", value: 10, suffix: "tenths" }] }
          ],
          answer: "**1 is 10 tenths from 0**. The gap from 0 to [4/10] is 4 tenths, so go on another 6 tenths (one and a half more of that gap) to reach 1.",
          explain: "The slide shows only 0 and [4/10]. Here the tenths are ticked so the pin can be checked; the 0.4 label is [4/10]."
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "Identify 2 angle types displayed below:",
          img: "u38-angles.png",
          interact: [
            { kind: "angle", names: true, start: 60, hint: "Drag the arm to match an angle in the picture. Which type is it?" },
            { kind: "choose", rows: [
              { t: "Angle type 1", options: ["acute", "right", "obtuse", "straight", "reflex"], a: [0, 2, 4] },
              { t: "Angle type 2", options: ["acute", "right", "obtuse", "straight", "reflex"], a: [0, 2, 4] }] }
          ],
          answer: "Two of: **acute** (each gap between two arms next to each other is less than 90°), **obtuse** (skip an arm, for example from the top-right arm round to the top-left arm) and **reflex** (the angle on the outside, more than 180°).",
          explain: "The picture has no right or straight angles: no two arms are at 90° or in a straight line. Choose two different types."
        }
      ],
      // Review 2
      [
        {
          type: "tf", focus: "Representing quantity fractions B",
          prompt: "[1/10] of 72 is 7.2",
          answer: true,
          explain: "Finding [1/10] is the same as dividing by 10: 72 ÷ 10 = 7.2. Each digit moves one place to the right.",
          interact: [{ kind: "pv", cols: ["T", "O", "t"], start: 72, shift: true, hint: "Divide by 10: shift the digits one place to the right." }]
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Design a random generator that displays the chance of an outcome using a fraction with a denominator of 5.",
          interact: [
            { kind: "sketch" },
            { kind: "select", hint: "Tap every random generator that shows a chance in fifths.", items: [
              ["A spinner with 5 equal parts, 1 red: chance of red = [1/5]", true],
              ["A bag of 5 marbles, 2 blue: chance of blue = [2/5]", true],
              ["A bag of 10 counters, 2 yellow: chance of yellow = [2/10] = [1/5]", true],
              ["A standard dice: chance of rolling a 3 = [1/6]", false],
              ["A coin: chance of heads = [1/2]", false]] }
          ],
          answer: "For example, a **spinner with 5 equal parts** (1 red gives a [1/5] chance of red) or a **bag of 5 marbles** (2 blue gives a [2/5] chance of blue). The total number of equal outcomes must be 5 (or simplify to fifths).",
          explain: "Answers vary. Draw the generator in the sketch box."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Record the factors for the following numbers: 32, 65, 48",
          interact: [
            { kind: "numchart", from: 1, to: 32, answer: [1, 2, 4, 8, 16, 32], hint: "Factors of 32. Think in pairs: 1 × 32, 2 × 16, …" },
            { kind: "numchart", from: 1, to: 65, answer: [1, 5, 13, 65], hint: "Factors of 65." },
            { kind: "numchart", from: 1, to: 48, answer: [1, 2, 3, 4, 6, 8, 12, 16, 24, 48], hint: "Factors of 48." }
          ],
          answer: "**32:** 1, 2, 4, 8, 16, 32 · **65:** 1, 5, 13, 65 · **48:** 1, 2, 3, 4, 6, 8, 12, 16, 24, 48."
        },
        {
          type: "sr", focus: "Representing quantity fractions A",
          prompt: "Explain why [1/4] on number line B is larger than [1/4] on number line A.",
          interact: [
            { kind: "classify", view: [560, 240], label: "Number line A from 0 to 1 is short; number line B from 0 to 1 is much longer. Each is cut into quarters.",
              hint: "Tap One quarter, then tap the first quarter on each number line. Compare their lengths.",
              cats: [{ k: "q", t: "One quarter", c: "#F2994A" }],
              shapes: [
                { p: "60,52 110,52 110,68 60,68", fill: "#DCE6F5", a: "q" },
                { p: "110,52 160,52 160,68 110,68", fill: "#DCE6F5" },
                { p: "160,52 210,52 210,68 160,68", fill: "#DCE6F5" },
                { p: "210,52 260,52 260,68 210,68", fill: "#DCE6F5" },
                { p: "60,152 180,152 180,168 60,168", fill: "#DCE6F5", a: "q" },
                { p: "180,152 300,152 300,168 180,168", fill: "#DCE6F5" },
                { p: "300,152 420,152 420,168 300,168", fill: "#DCE6F5" },
                { p: "420,152 540,152 540,168 420,168", fill: "#DCE6F5",
                  deco: "<g style='pointer-events:none' fill='#111' font-size='20' text-anchor='middle'>" +
                    "<text x='25' y='68' font-size='28'>A</text><text x='25' y='168' font-size='28'>B</text>" +
                    "<g stroke='#111' stroke-width='2'><line x1='60' y1='44' x2='60' y2='76'/><line x1='110' y1='44' x2='110' y2='76'/><line x1='160' y1='44' x2='160' y2='76'/><line x1='210' y1='44' x2='210' y2='76'/><line x1='260' y1='44' x2='260' y2='76'/>" +
                    "<line x1='60' y1='144' x2='60' y2='176'/><line x1='180' y1='144' x2='180' y2='176'/><line x1='300' y1='144' x2='300' y2='176'/><line x1='420' y1='144' x2='420' y2='176'/><line x1='540' y1='144' x2='540' y2='176'/></g>" +
                    "<text x='60' y='98'>0</text><text x='110' y='98'>¼</text><text x='160' y='98'>½</text><text x='260' y='98'>1</text>" +
                    "<text x='60' y='200'>0</text><text x='180' y='200'>¼</text><text x='300' y='200'>½</text><text x='540' y='200'>1</text></g>" }] },
            { kind: "choose", rows: [{ t: "Why is it larger?", options: ["The whole (0 to 1) on line B is longer, so each quarter of it is longer", "Line B has more quarters than line A", "[1/4] is always bigger on the bottom line"], a: 0 }] }
          ],
          answer: "The **wholes are different sizes**. From 0 to 1 on line B is much longer than on line A, so a quarter of B's whole is longer than a quarter of A's whole. Both are still [1/4] of their own whole.",
          explain: "A fraction is always a fraction of a whole. You can only compare fractions directly when the wholes are the same size."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "These polygons have the same area. Are the perimeters the same? What strategies did you use to find out?",
          interact: [
            { kind: "sides", view: [380, 255], label: "An L-shaped polygon: 3 and 1 and 2 and 3 and 5 and 2 units", fill: "#FFFFFF",
              poly: [[60, 100], [210, 100], [210, 50], [310, 50], [310, 200], [60, 200]],
              dims: [{ from: [60, 82], to: [210, 82] }, { from: [230, 50], to: [230, 100] }, { from: [210, 32], to: [310, 32] }, { from: [328, 50], to: [328, 200] }, { from: [60, 218], to: [310, 218] }, { from: [42, 100], to: [42, 200] }],
              labels: [{ x: 135, y: 74, t: "3 units" }, { x: 240, y: 84, t: "1", anchor: "start" }, { x: 260, y: 24, t: "2 units" }, { x: 338, y: 132, t: "3", anchor: "start" }, { x: 185, y: 242, t: "5 units" }, { x: 32, y: 156, t: "2", anchor: "end" }] },
            { kind: "sides", view: [340, 250], label: "A rectangle 4 units by 3 units", fill: "#FFFFFF",
              poly: [[60, 40], [260, 40], [260, 190], [60, 190]],
              dims: [{ from: [60, 22], to: [260, 22] }, { from: [278, 40], to: [278, 190] }, { from: [60, 208], to: [260, 208] }, { from: [42, 40], to: [42, 190] }],
              labels: [{ x: 160, y: 14, t: "4 units" }, { x: 288, y: 122, t: "3", anchor: "start" }, { x: 160, y: 232, t: "4 units" }, { x: 32, y: 122, t: "3", anchor: "end" }] },
            { kind: "choose", rows: [
              { t: "Are the perimeters the same?", options: ["Yes", "No"], a: 1 },
              { t: "Which has the longer perimeter?", options: ["The L-shape", "The rectangle"], a: 0 },
              { t: "Strategy", options: ["Count the grid units along every side", "Count the squares inside", "Measure only the longest side"], a: 0 }] }
          ],
          answer: "**No.** Both cover 12 squares, but the L-shape's perimeter is 3 + 1 + 2 + 3 + 5 + 2 = **16 units** and the rectangle's is 4 + 3 + 4 + 3 = **14 units**. Count the unit lengths around the outside of each shape.",
          explain: "The slide shows the shapes on a square grid with no labels. The side lengths here are counted from that grid, in grid units. Areas: L-shape 5 × 2 + 2 × 1 = 12, rectangle 4 × 3 = 12."
        }
      ],
      // Review 3
      [
        {
          type: "mc", focus: "Representing quantity fractions B",
          prompt: "[1/4] of a dozen eggs is:",
          options: ["3", "4", "6", "8"],
          answer: 0,
          explain: "A dozen is 12. Share 12 into 4 equal groups: 12 ÷ 4 = 3.",
          interact: [{ kind: "pack", mode: "share", n: 4, total: 12, thing: "eggs", label: "group", hint: "A dozen is 12 eggs. Share them into 4 equal groups." }]
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Out of 10 spins, 40% landed on green, 10% landed on black, 30% landed on blue and 20% landed on purple. If there were 10 more spins, would the results be the same? Communicate your thinking.",
          interact: [
            { kind: "bargraph", max: 5, step: 1, ylabel: "Number of spins", xlabel: "Colour", label: "The first 10 spins: green 4, black 1, blue 3, purple 2",
              series: [{ l: "First 10 spins", c: "#3E86B8" }],
              groups: [{ l: "Green", v: [4], c: "#4CAF50" }, { l: "Black", v: [1], c: "#333333" }, { l: "Blue", v: [3], c: "#2F6FD6" }, { l: "Purple", v: [2], c: "#8E44AD" }] },
            { kind: "choose", rows: [
              { t: "Would the next 10 spins be the same?", options: ["Yes, exactly the same", "Probably not"], a: 1 },
              { t: "Why?", options: ["Each spin is random, so the results change each time", "The spinner remembers the last spins", "Green always lands the most"], a: 0 }] }
          ],
          cubes: { ops: ["×"], note: "Change each percentage into a number of spins out of 10.", solve: [{ t: "Percent to spins", s: "40% of 10 = 4 green, 10% = 1 black, 30% = 3 blue, 20% = 2 purple." }, { t: "Think about chance", s: "Each spin is random. 10 more spins will probably give different numbers, even with the same spinner." }] },
          answer: "**Probably not.** Each spin is random, so the next 10 spins could land differently (for example 3 green, 2 black, 3 blue, 2 purple). Over many more spins the results get closer to the real chances.",
          explain: "They could be the same by chance, but it is unlikely."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: Area",
          prompt: "Yaya needs to fence her vegetable garden. The area to be fenced is 48 m². What could the length and width measure? What would be the perimeter?",
          interact: [
            { kind: "array", rows: 6, cols: 8, max: 12, showTotal: true, hint: "Each dot is 1 m². Change the rows and columns to find other rectangles of 48." },
            { kind: "pair", labels: ["Length", "Width"], unit: "m", rule: "area", target: 48 },
            { kind: "sides", view: [440, 250], label: "An 8 m by 6 m garden", fill: "#8CC56B", poly: [[40, 50], [360, 50], [360, 210], [40, 210]],
              dims: [{ from: [40, 28], to: [360, 28] }, { from: [384, 50], to: [384, 210] }],
              labels: [{ t: "8 m", x: 200, y: 20 }, { t: "6 m", x: 396, y: 136, anchor: "start" }] },
            { kind: "input", fields: [{ label: "Perimeter of an 8 m by 6 m garden", value: 28, suffix: "m" }] }
          ],
          cubes: { ops: ["×", "+"], note: "Area = length × width, so look for factor pairs of 48. The perimeter is the distance around the outside.", solve: [{ t: "Factor pairs", s: "48 = 1 × 48 = 2 × 24 = 3 × 16 = 4 × 12 = 6 × 8." }, { t: "Perimeter of 8 m × 6 m", s: "8 + 6 + 8 + 6 = 28 m, or 2 × (8 + 6) = 28 m." }] },
          answer: "Any pair that multiplies to 48, for example **8 m × 6 m** (perimeter **28 m**). Others: 12 m × 4 m (32 m), 16 m × 3 m (38 m), 24 m × 2 m (52 m), 48 m × 1 m (98 m).",
          explain: "The perimeter depends on the length and width chosen, so the check uses the 8 m by 6 m garden. Any length × width that makes 48 m² is marked correct."
        },
        {
          type: "sr", focus: "Represents numbers B: Decimals and percentages",
          prompt: "Draw different bar models to show 25%, 50%, 75% and 100%. Above the percentages, record the equivalent fraction.",
          interact: [
            { kind: "shade", parts: 4, pct: true, hint: "Shade 25%." },
            { kind: "shade", parts: 4, pct: true, hint: "Shade 50%." },
            { kind: "shade", parts: 4, pct: true, hint: "Shade 75%." },
            { kind: "shade", parts: 4, pct: true, hint: "Shade 100%." },
            { kind: "input", fields: [
              { label: "25% =", accept: ["1/4", "25/100"], placeholder: "a/b" },
              { label: "50% =", accept: ["1/2", "2/4", "50/100"], placeholder: "a/b" },
              { label: "75% =", accept: ["3/4", "75/100"], placeholder: "a/b" },
              { label: "100% =", accept: ["4/4", "1", "1/1", "100/100"], placeholder: "a/b" }] }
          ],
          answer: "25% = **[1/4]** · 50% = **[1/2]** ([2/4]) · 75% = **[3/4]** · 100% = **[4/4]**, one whole.",
          explain: "Equivalent fractions (such as 25/100) are also accepted."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: 2D Shapes",
          prompt: "Translate, rotate a quarter turn and reflect a parallelogram.",
          interact: [
            { kind: "sketch", grid: "square", shape: { view: [600, 300], pts: [[40, 140], [80, 60], [200, 60], [160, 140]] } },
            { kind: "choose", rows: [
              { t: "Translate", options: ["Slide it: it faces the same way", "Turn it", "Flip it"], a: 0 },
              { t: "Rotate a quarter turn", options: ["Slide it", "Turn it 90°: the long sides stand up", "Flip it"], a: 1 },
              { t: "Reflect", options: ["Slide it", "Turn it", "Flip it: it leans the other way"], a: 2 }] }
          ],
          answer: "**Translate:** slide it to a new place, facing the same way. **Rotate a quarter turn:** turn it 90° about a point, so the long sides go up and down. **Reflect:** flip it over a mirror line, so it leans the other way.",
          explain: "Draw each transformation on the grid. The slide's parallelogram has a heart in one corner to help see how it moves."
        }
      ],
      // Review 4
      [
        {
          type: "tf", focus: "Representing quantity fractions B",
          prompt: "Daniel believes that [1/4] of 48 is equal to [1/2] of 24. Communicate your thinking.",
          answer: true,
          explain: "[1/4] of 48 = 48 ÷ 4 = 12, and [1/2] of 24 = 24 ÷ 2 = 12. They are equal. 24 is half of 48, and [1/2] is double [1/4].",
          interact: [
            { kind: "shade", parts: 4, pct: true, each: 12, hint: "48 in quarters: each part is 12. Shade [1/4]." },
            { kind: "shade", parts: 2, pct: true, each: 12, hint: "24 in halves: each part is 12. Shade [1/2]." }
          ]
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "The expected results of rolling a six-sided dice 60 times should be that each number appears approximately 10 times. 6W conducted the experiment. Compare the observed frequencies with the expected frequencies. Explain why only one number rolled the expected frequency.",
          interact: [
            { kind: "bargraph", max: 16, step: 2, ylabel: "Times rolled", xlabel: "Die number", label: "6W's 60 dice rolls: 1 rolled 10 times, 2 rolled 8, 3 rolled 12, 4 rolled 15, 5 rolled 7, 6 rolled 8",
              series: [{ l: "Times rolled", c: "#1F6FEB" }],
              groups: [{ l: "1", v: [10] }, { l: "2", v: [8] }, { l: "3", v: [12] }, { l: "4", v: [15] }, { l: "5", v: [7] }, { l: "6", v: [8] }] },
            { kind: "choose", rows: [
              { t: "Which number matched the expected 10?", options: ["1", "2", "3", "4", "5", "6"], a: 0 },
              { t: "Furthest from 10", options: ["2", "3", "4", "5"], a: 2 },
              { t: "Why don't the others match?", options: ["Each roll is random, so results vary around the expected number", "The dice must be broken", "Bigger numbers are rolled more often"], a: 0 }] }
          ],
          cubes: { ops: ["−"], note: "Compare each observed frequency with the expected 10.", solve: [{ t: "Find the differences", s: "1: 10 (0 off), 2: 8 (2 under), 3: 12 (2 over), 4: 15 (5 over), 5: 7 (3 under), 6: 8 (2 under)." }, { t: "Check the total", s: "10 + 8 + 12 + 15 + 7 + 8 = 60 rolls, the same total as expected." }] },
          answer: "Only **1** was rolled exactly 10 times. The others were close (7 to 15). Each roll is **random**, so observed results vary around the expected frequency. With many more rolls, they would get closer to [1/6] each.",
          explain: "Number 4 (15 times) was furthest from the expected 10."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: Area",
          prompt: "Model how you would find the area of a parallelogram.",
          interact: [
            { kind: "classify", view: [436, 364], label: "A parallelogram on a square grid", hint: "Tap the triangle on the left to cut it off. Slide it to the dashed space on the right. What shape do you make?",
              cats: [{ k: "m", t: "Cut and move", c: "#F2994A" }],
              shapes: [
                { p: "56,56 128,56 128,308", a: "m", fill: "#9FB4E8" },
                { p: "128,56 308,56 380,308 128,308", fill: "#9FB4E8",
                  deco: "<polygon points='308,56 380,56 380,308' fill='none' stroke='#F2994A' stroke-width='3' stroke-dasharray='8 6' style='pointer-events:none'/>" + grid(11, 9, 36, 20) + "<polygon points='56,56 308,56 380,308 128,308' fill='none' stroke='#111' stroke-width='4' style='pointer-events:none'/>" }] },
            { kind: "input", fields: [{ label: "Length of the rectangle", value: 7, suffix: "units" }, { label: "Width of the rectangle", value: 7, suffix: "units" }, { label: "Area", value: 49, suffix: "square units" }] }
          ],
          answer: "Cut the triangle off one end and move it to the other end. The parallelogram becomes a **7 × 7 rectangle**, so the area is base × perpendicular height = 7 × 7 = **49 square units**.",
          explain: "Counted from the slide's grid: base 7 squares, height 7 squares. The grid has no unit, so the area is in square units."
        },
        {
          type: "sr", focus: "Represents numbers B: Decimals and percentages",
          prompt: "Record the percentage, fraction and decimal for each grid.",
          interact: [
            { kind: "shade", parts: 10, pre: [5, 6, 7, 8, 9], pct: true, hint: "Grid 1: each part is one row of 10 squares. 5 rows are shaded." },
            { kind: "shade", parts: 10, pre: [0], pct: true, hint: "Grid 2: 1 row of 10 squares is shaded." },
            { kind: "input", fields: [
              { label: "Grid 1 %", value: 50, suffix: "%" }, { label: "Grid 1 fraction", accept: ["50/100", "1/2", "5/10"], placeholder: "a/b" }, { label: "Grid 1 decimal", value: 0.5 },
              { label: "Grid 2 %", value: 10, suffix: "%" }, { label: "Grid 2 fraction", accept: ["10/100", "1/10"], placeholder: "a/b" }, { label: "Grid 2 decimal", value: 0.1 }] }
          ],
          answer: "Grid 1: **50%** = **[50/100]** ([1/2]) = **0.5** · Grid 2: **10%** = **[10/100]** ([1/10]) = **0.1**.",
          explain: "Each grid has 100 squares: 50 are shaded in grid 1 and 10 in grid 2. Simplified fractions are also accepted."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Daisy slept from 20:30 last night until 6:45 am. How long did Daisy sleep for?",
          interact: [
            { kind: "jumps", time: "24", start: 1230, end: 1845, steps: [15, 30, 60], hint: "Jump to 2100 first, then to midnight, then on to 0645." },
            { kind: "input", fields: [{ label: "Hours", value: 10, suffix: "h" }, { label: "Minutes", value: 15, suffix: "min" }] }
          ],
          cubes: { ops: ["+"], note: "20:30 is 8:30 pm. Count on past midnight.", solve: [{ t: "Via midnight", s: "20:30 to 24:00 (midnight) = 3 h 30 min. Midnight to 06:45 = 6 h 45 min. 3 h 30 min + 6 h 45 min = 10 h 15 min." }, { t: "Via 6:30", s: "20:30 to 06:30 = 10 h. Then 15 more minutes to 06:45: 10 h 15 min." }] },
          answer: "**10 hours 15 minutes**. 20:30 to midnight is 3 h 30 min, and midnight to 06:45 is 6 h 45 min."
        }
      ],
      // Review 5
      [
        {
          type: "mc", focus: "Represents numbers B: Decimals and percentages",
          prompt: "25% of 60 is:",
          options: ["12", "18", "15", "16"],
          answer: 2,
          explain: "25% is [1/4]. 60 ÷ 4 = 15.",
          interact: [{ kind: "shade", parts: 4, pct: true, each: 15, hint: "60 in quarters: each part is 15. Shade 25%." }]
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "A bag contains 30 marbles: 10 red, 10 blue and 10 green. Pria randomly selects a marble from the bag 30 times and records the results: red 12, blue 8, green 10. What is the expected frequency for each colour of marble if the selection is fair?",
          interact: [
            { kind: "bargraph", max: 14, step: 2, ylabel: "Times selected", xlabel: "Colour", label: "Pria's results: red 12, blue 8, green 10",
              series: [{ l: "Times selected", c: "#3E86B8" }],
              groups: [{ l: "Red", v: [12], c: "#E53935" }, { l: "Blue", v: [8], c: "#1F6FEB" }, { l: "Green", v: [10], c: "#43A047" }] },
            { kind: "pack", mode: "share", n: 3, total: 30, thing: "selections", label: "colour", hint: "Each colour has the same chance. Share the 30 selections equally between the 3 colours." },
            { kind: "input", fields: [{ label: "Red", value: 10, suffix: "times" }, { label: "Blue", value: 10, suffix: "times" }, { label: "Green", value: 10, suffix: "times" }] }
          ],
          cubes: { ops: ["÷"], note: "Each colour is [1/3] of the bag.", solve: [{ t: "Share equally", s: "30 selections ÷ 3 colours = 10 each." }, { t: "Use the fraction", s: "Each colour is 10 out of 30 marbles = [1/3]. [1/3] of 30 = 10." }] },
          answer: "**10 times each.** Each colour is [1/3] of the bag, and [1/3] of 30 is 10. Pria's results (12, 8, 10) are close to this; only green matched exactly."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: Area",
          prompt: "Find the areas of these triangles. Triangle 1: base 6 cm, height 4 cm. Triangle 2: height 6 cm, base 8 cm.",
          interact: [
            { kind: "classify", view: [328, 256], label: "Triangle 1 on a centimetre grid, inside a rectangle", hint: "Triangle 1: tap Triangle and tap it. Then tap Outside and tap the two pieces beside it. Together they make a rectangle.",
              cats: [{ k: "t", t: "Triangle", c: "#3E86B8" }, { k: "o", t: "Outside the triangle", c: "#F2C94C" }],
              shapes: [
                { p: "56,56 164,56 56,200", a: "o", fill: "#FFFFFF" },
                { p: "164,56 272,56 272,200", a: "o", fill: "#FFFFFF" },
                { p: "164,56 272,200 56,200", a: "t", fill: "#1F6FEB",
                  deco: grid(8, 6, 36, 20) + "<polygon points='164,56 272,200 56,200' fill='none' stroke='#111' stroke-width='3' style='pointer-events:none'/>" }] },
            { kind: "classify", view: [340, 280], label: "Triangle 2, a right-angled triangle on a centimetre grid, inside a rectangle", hint: "Triangle 2: tap Triangle and tap it. Then tap Outside and tap the piece above it.",
              cats: [{ k: "t", t: "Triangle", c: "#3E86B8" }, { k: "o", t: "Outside the triangle", c: "#F2C94C" }],
              shapes: [
                { p: "50,50 290,50 290,230", a: "o", fill: "#FFFFFF" },
                { p: "50,50 290,230 50,230", a: "t", fill: "#8EDDFC",
                  deco: grid(10, 8, 30, 20) + "<polygon points='50,50 290,230 50,230' fill='none' stroke='#111' stroke-width='3' style='pointer-events:none'/>" }] },
            { kind: "input", fields: [{ label: "Triangle 1", value: 12, suffix: "cm²" }, { label: "Triangle 2", value: 24, suffix: "cm²" }] }
          ],
          answer: "Triangle 1: **12 cm²** (half of 6 × 4 = 24). Triangle 2: **24 cm²** (half of 8 × 6 = 48). A triangle is half of the rectangle with the same base and height."
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "[5/8] of the triangle is green and [3/8] is purple. Do you agree? Explain your thinking.",
          interact: [
            { kind: "classify", view: [400, 320], label: "A triangle cut into 16 small equal triangles. The 6 in the middle make a purple hexagon; the other 10 are green.", mark: "outline", total: 16,
              hint: "The white lines cut the big triangle into equal small triangles. Tap Green or Purple, then tap each small triangle to count it.",
              cats: [{ k: "g", t: "Green", c: "#1E6B2A" }, { k: "p", t: "Purple", c: "#4A1F66" }],
              shapes: tri16 },
            { kind: "choose", rows: [{ t: "Do you agree?", options: ["Yes", "No"], a: 0 }] }
          ],
          answer: "**Yes.** Cut the big triangle into 16 equal small triangles. The purple hexagon is 6 of them: [6/16] = **[3/8]**. Green is the other 10: [10/16] = **[5/8]**. [5/8] + [3/8] = 1 whole.",
          explain: "The slide's picture has no lines inside. Here the small triangles are drawn so they can be counted. The hexagon's sides are each one small triangle long."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Mass",
          prompt: "Riccardo made a pizza base using 512 g of flour, 15 g of salt, 4 g of instant yeast and 480 g of lukewarm water. What is the total mass of Riccardo's ingredients? Answer in grams and kilograms.",
          interact: [
            { kind: "bar", whole: { v: 1011, l: "1011 g", n: "total mass", hide: true }, parts: [{ v: 512, l: "512 g", n: "flour" }, { v: 15, l: "15", n: "" }, { v: 4, l: "4", n: "" }, { v: 480, l: "480 g", n: "water" }], hint: "The parts are flour, salt (15 g), yeast (4 g) and water. Tap the ? to reveal the total." },
            { kind: "input", fields: [{ label: "Total mass", value: 1011, suffix: "g" }, { label: "Total mass", value: 1.011, suffix: "kg" }] }
          ],
          cubes: { ops: ["+"], note: "1000 g = 1 kg.", solve: [{ t: "Make friendly numbers", s: "512 + 480 = 992. 15 + 4 = 19. 992 + 19 = 1011 g." }, { t: "Convert", s: "1011 g = 1000 g + 11 g = 1 kg and 11 g = 1.011 kg." }] },
          answer: "**1011 g = 1.011 kg**. 512 + 15 + 4 + 480 = 1011 g, and 1000 g = 1 kg."
        }
      ],
      // Review 6
      [
        {
          type: "tf", focus: "Represents numbers B: Decimals and percentages",
          prompt: "In the half-yearly sales, Tim will get a 25% discount on the drum kit he wants. The original price is $400. The discount is $25.",
          answer: false,
          explain: "25% is [1/4]. [1/4] of $400 = $100, so the discount is $100, not $25. Tim pays $300.",
          interact: [{ kind: "shade", parts: 4, pct: true, each: 100, money: true, hint: "$400 in quarters: each part is $100. Shade 25%." }],
          cubes: { ops: ["÷"], solve: [{ t: "Quarter it", s: "25% = [1/4]. $400 ÷ 4 = $100." }, { t: "Use 10%", s: "10% of $400 = $40. 20% = $80, 5% = $20. 25% = $80 + $20 = $100." }] }
        },
        {
          type: "sr", focus: "Data A",
          prompt: "6W saw an abundance of fish on their aquarium excursion. Choose and create an appropriate table to display the data about the fish they saw.",
          img: "u38-fish.png",
          interact: [
            { kind: "cells", cols: 2, w: 180, free: true, msg: "Read each number from the picture. The total is all the fish added together.", grid: [
              ["#Type of fish", "#Number seen"],
              ["Clownfish", { v: 9 }],
              ["Parrotfish", { v: 7 }],
              ["Surgeonfish", { v: 5 }],
              ["Pufferfish", { v: 4 }],
              ["Lionfish", { v: 5 }],
              ["#Total", { v: 30 }]] }
          ],
          answer: "A **frequency table** with one column for the type of fish and one for the number seen: clownfish 9, parrotfish 7, surgeonfish 5, pufferfish 4, lionfish 5. **Total: 30 fish.**",
          explain: "Other tables also work, such as a tally table. The total row helps when comparing the data."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "A rectangular prism has 6 layers of 5 cubes. Record the volume using the abbreviation for cubic centimetres.",
          interact: [
            { kind: "array", rows: 6, cols: 5, max: 10, showTotal: true, hint: "Each row is one layer of 5 cubes. There are 6 layers." },
            { kind: "input", fields: [{ label: "Volume", value: 30 }] },
            { kind: "choose", rows: [{ t: "Abbreviation for cubic centimetres", options: ["cm", "cm²", "cm³"], a: 2 }] }
          ],
          answer: "**30 cm³**. 6 layers × 5 cubes = 30 cubes, and each cube is 1 cm³.",
          explain: "The slide doesn't say the cubes are 1 cm cubes; this assumes each cube is 1 cubic centimetre."
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Use a tape diagram to show how much [2/5] of 30 is.",
          interact: [
            { kind: "bar", whole: { v: 30, l: "30" }, parts: [{ v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }, { v: 6, l: "6", hide: true }], hint: "The tape is 30, cut into 5 equal parts. Tap a ? to reveal one fifth." },
            { kind: "input", fields: [{ label: "[2/5] of 30 =", value: 12 }] }
          ],
          answer: "**12**. 30 ÷ 5 = 6 in each fifth, so 2 fifths = 2 × 6 = 12."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: 3D Objects",
          prompt: "Draw a model of a building using a rectangular prism and a triangular prism.",
          interact: [
            { kind: "sketch", grid: "triangle" },
            { kind: "choose", rows: [
              { t: "The walls of a house could be a", options: ["rectangular prism", "triangular prism", "pyramid"], a: 0 },
              { t: "The roof on top could be a", options: ["rectangular prism", "triangular prism", "cylinder"], a: 1 },
              { t: "Faces on a triangular prism", options: ["4", "5", "6"], a: 1 }] }
          ],
          answer: "For example, a **house**: a rectangular prism for the walls with a **triangular prism** lying on its side on top for the roof. A rectangular prism has 6 faces; a triangular prism has 5 (2 triangles and 3 rectangles).",
          explain: "Drawings vary. The dot grid helps draw 3D objects."
        }
      ],
      // Review 7
      [
        {
          type: "mc", focus: "Represents numbers B",
          prompt: "A smart watch is $360 with a discount of 25%. The sale price is:",
          options: ["$460", "$320", "$260", "$270"],
          answer: 3,
          explain: "25% of $360 = $360 ÷ 4 = $90. The sale price is $360 − $90 = $270.",
          interact: [{ kind: "shade", parts: 4, pct: true, each: 90, money: true, hint: "$360 in quarters: each part is $90. The discount is 25%; what's left is 75%." }],
          cubes: { ops: ["÷", "−"], solve: [{ t: "Find the discount", s: "25% = [1/4]. $360 ÷ 4 = $90. $360 − $90 = $270." }, { t: "Find 75%", s: "Paying 100% − 25% = 75%. 3 × $90 = $270." }] }
        },
        {
          type: "sr", focus: "Data B",
          prompt: "The River Gazette published a story on student maths scores improving since the start of the year. Identify the misleading data in this graph.",
          img: "u38-scores-graph.png",
          interact: [{ kind: "select", hint: "Tap everything that is misleading or missing.", items: [
            ["84% appears twice on the vertical axis", true],
            ["The axis starts at 80%, so small changes look huge", true],
            ["There is no key to say what the blue and green bars show", true],
            ["The months are in the wrong order", false],
            ["The graph has no title", false]] }],
          answer: "**84% is labelled twice** (the top line should be 85%), the scale **starts at 80%**, which makes a few per cent look like a big jump, and there is **no key** for the blue and green bars.",
          explain: "The months are in order and there is a title (Maths test scores Wyrrabolong PS)."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Yaya needs to put fresh soil on her vegetable garden. The layer of soil will be 10 cm thick. The width of her garden is 6 metres and the length is 8 metres. In cubic metres, what is the volume of soil needed for Yaya's vegetable garden?",
          interact: [
            { kind: "array", rows: 6, cols: 8, max: 12, showTotal: true, hint: "Each dot is 1 m² of garden: 6 rows of 8." },
            { kind: "input", fields: [{ label: "10 cm in metres", value: 0.1, suffix: "m" }, { label: "Volume of soil", value: 4.8, suffix: "m³" }] }
          ],
          cubes: { ops: ["×"], note: "Change 10 cm to metres first: 10 cm = 0.1 m.", solve: [{ t: "Area × depth", s: "Area = 8 × 6 = 48 m². Volume = 48 × 0.1 = 4.8 m³." }, { t: "Think in tenths", s: "A 1 m deep layer would be 48 m³. 10 cm is [1/10] of a metre, so [1/10] of 48 = 4.8 m³." }] },
          answer: "**4.8 m³**. 8 m × 6 m × 0.1 m = 4.8 m³."
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Jake and Tom need timber for their mini-skate ramp. Jake needs 30[3/4] centimetres of craft wood and Tom needs 27[1/2] centimetres. How much do they need altogether? If the craft wood comes in one metre lengths, how much timber will be left over?",
          interact: [
            { kind: "bar", whole: { v: 100, l: "1 m = 100 cm" }, parts: [{ v: 30.75, l: "30[3/4] cm", n: "Jake" }, { v: 27.5, l: "27[1/2] cm", n: "Tom" }, { v: 41.75, l: "41[3/4] cm", n: "left over", hide: true }], hint: "One metre is 100 cm. Tap the ? to reveal what is left." },
            { kind: "input", fields: [{ label: "Altogether", value: 58.25, suffix: "cm" }, { label: "Left over", value: 41.75, suffix: "cm" }] }
          ],
          cubes: { ops: ["+", "−"], note: "1 m = 100 cm. [1/2] = [2/4].", solve: [{ t: "Wholes, then fractions", s: "30 + 27 = 57. [3/4] + [2/4] = [5/4] = 1[1/4]. 57 + 1[1/4] = 58[1/4] cm. 100 − 58[1/4] = 41[3/4] cm." }, { t: "Decimals", s: "30.75 + 27.5 = 58.25 cm. 100 − 58.25 = 41.75 cm." }] },
          answer: "**58[1/4] cm** altogether (30[3/4] + 27[1/2]). From one metre (100 cm), **41[3/4] cm** is left over.",
          explain: "Answers can be typed as mixed numbers (58 1/4) or decimals (58.25)."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "What is the equivalent length for the following: 245 cm, 3.25 m, 8.7 km",
          interact: [
            { kind: "pv", cols: ["H", "T", "O", "t", "h"], start: 245, shift: true, hint: "100 cm = 1 m, so divide by 100: shift the digits two places right." },
            { kind: "input", fields: [{ label: "245 cm =", value: 2.45, suffix: "m" }, { label: "3.25 m =", value: 325, suffix: "cm" }, { label: "8.7 km =", value: 8700, suffix: "m" }] }
          ],
          answer: "**245 cm = 2.45 m** · **3.25 m = 325 cm** · **8.7 km = 8700 m**. 100 cm = 1 m and 1000 m = 1 km.",
          explain: "The slide doesn't say which unit to change to. Each is changed to the next unit up or down (other answers, such as 2450 mm, are also equivalent)."
        }
      ],
      // Review 8
      [
        {
          type: "tf", focus: "Represents numbers B",
          prompt: "Joley is looking for the best deal on a smart watch. She finds one for 10% off $180 and another for 50% off $360. The 10% off is the better deal (it costs less).",
          answer: true,
          explain: "10% off $180: $180 − $18 = $162. 50% off $360: $360 − $180 = $180. $162 is cheaper, so the 10% off watch is the better deal, even though 50% sounds like more.",
          interact: [
            { kind: "shade", parts: 10, pct: true, each: 18, money: true, hint: "$180 in tenths: each part is $18. Shade what Joley pays (90%)." },
            { kind: "shade", parts: 2, pct: true, each: 180, money: true, hint: "$360 in halves: each part is $180. Shade what Joley pays (50%)." }
          ],
          cubes: { ops: ["÷", "−"], note: "Compare the prices she would pay.", solve: [{ t: "Find each sale price", s: "10% of $180 = $18, so $162. 50% of $360 = $180, so $180. $162 < $180." }, { t: "Compare halves", s: "Half of $360 is $180, the full price of the other watch. Any discount on the $180 watch makes it cheaper." }] }
        },
        {
          type: "sr", focus: "Data B",
          prompt: "What is the difference between the number of girls and boys who like swimming? Are there any similarities and differences between the answers? Record one other thing you notice in the data.",
          interact: [
            { kind: "bargraph", max: 16, step: 2, ylabel: "Number of students", xlabel: "Sport", label: "6W's favourite sport: boys and girls",
              series: [{ l: "Boys", c: "#0B2A6B" }, { l: "Girls", c: "#1F6FEB" }],
              groups: [{ l: "Gymnastics", v: [15, 5] }, { l: "Soccer", v: [8, 12] }, { l: "Swimming", v: [9, 11] }, { l: "Dancing", v: [11, 9] }, { l: "Rugby League", v: [12, 8] }] },
            { kind: "input", fields: [{ label: "Difference for swimming", value: 2, suffix: "students" }] },
            { kind: "choose", rows: [
              { t: "Another sport with a difference of 2", options: ["Soccer", "Dancing", "Rugby League"], a: 1 },
              { t: "How is it different from swimming?", options: ["Swimming has more girls; dancing has more boys", "They have the same numbers", "Dancing has more girls"], a: 0 },
              { t: "Most popular sport for boys", options: ["Gymnastics", "Soccer", "Rugby League"], a: 0 }] }
          ],
          answer: "Swimming: 11 girls − 9 boys = **2 more girls**. **Dancing** also differs by 2, but there it is 11 boys and 9 girls. Other things: gymnastics is the boys' favourite (15) but the girls' least favourite (5); soccer is the girls' favourite (12).",
          explain: "The second question is read as comparing the swimming difference with the other sports. Any true observation from the graph is a good answer for the last question."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "The post office has a parcel bag with a volume of 40 cm³. The dimensions of Liza's parcel are 10 cm × 2 cm × 6 cm. Is the volume of the parcel bag enough? Explain your thinking.",
          interact: [
            { kind: "array", rows: 2, cols: 10, max: 12, showTotal: true, hint: "The bottom layer of the parcel: 2 rows of 10 cubes. There are 6 layers." },
            { kind: "input", fields: [{ label: "Volume of the parcel", value: 120, suffix: "cm³" }] },
            { kind: "choose", rows: [{ t: "Is the bag big enough?", options: ["Yes", "No"], a: 1 }] }
          ],
          cubes: { ops: ["×"], solve: [{ t: "Layers", s: "One layer: 10 × 2 = 20 cm³. 6 layers: 6 × 20 = 120 cm³." }, { t: "Compare", s: "120 cm³ is 3 times 40 cm³, so the parcel needs a bag 3 times as big." }] },
          answer: "**No.** The parcel's volume is 10 × 2 × 6 = **120 cm³**, which is much more than the bag's 40 cm³."
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Ella and Lachlan hiked [3/8] of the way to the top of Mt Warning. They had a little break and walked another [2/4] of the way. It was 32 km to the top. How far did they walk?",
          interact: [
            { kind: "shade", parts: 8, pct: true, each: 4, hint: "32 km in eighths: each part is 4 km. Shade [3/8], then [2/4] = [4/8] more." },
            { kind: "input", fields: [{ label: "Distance walked", value: 28, suffix: "km" }] }
          ],
          cubes: { ops: ["+", "÷", "×"], note: "Change [2/4] into eighths: [2/4] = [4/8].", solve: [{ t: "Add the fractions first", s: "[3/8] + [4/8] = [7/8]. 32 ÷ 8 = 4 km. 7 × 4 = 28 km." }, { t: "Each part separately", s: "[3/8] of 32 = 12 km. [2/4] of 32 = 16 km. 12 + 16 = 28 km." }] },
          answer: "**28 km**. [3/8] + [2/4] = [3/8] + [4/8] = [7/8] of 32 km. 32 ÷ 8 = 4, and 7 × 4 = 28 km (4 km short of the top)."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Logan and her friends want to go to the movies. The movie starts at 3:30 pm and goes for 1 hour and 45 minutes. If they are getting picked up at 18:30, do they have enough time for some shopping?",
          interact: [
            { kind: "jumps", time: "24", start: 930, end: 1110, steps: [15, 30, 60], hint: "Start at 1530 (3:30 pm). Jump 1 hour and 45 minutes for the movie. How far is it then to 1830?" },
            { kind: "input", fields: [{ label: "The movie ends at", accept: ["17:15", "5:15 pm", "5:15"], placeholder: "hh:mm" }, { label: "Time left for shopping", value: 75, suffix: "minutes" }] },
            { kind: "choose", rows: [{ t: "Enough time for shopping?", options: ["Yes", "No"], a: 0 }] }
          ],
          cubes: { ops: ["+", "−"], note: "18:30 is 6:30 pm.", solve: [{ t: "Count on", s: "3:30 pm + 1 h = 4:30 pm, + 45 min = 5:15 pm. 5:15 pm to 6:30 pm = 1 h 15 min." }, { t: "Use 24-hour time", s: "15:30 + 1:45 = 17:15. 18:30 − 17:15 = 1 h 15 min = 75 minutes." }] },
          answer: "**Yes.** The movie ends at 5:15 pm (17:15). Pick-up is 18:30 (6:30 pm), so they have **1 hour 15 minutes** (75 minutes) for shopping."
        }
      ]
    ]
  });
})();
