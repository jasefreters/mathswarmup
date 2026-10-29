/*
  Stage 3 Year B, Unit 39 — Review of learning (Term 4, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
(() => {
  const r1 = (n) => Math.round(n * 10) / 10;
  const pts = (a) => a.map((q) => r1(q[0]) + "," + r1(q[1])).join(" ");
  const NP = "style='pointer-events:none'";

  // Pie wedge from angle a0 to a1 (degrees clockwise from the top).
  const wedge = (cx, cy, R, a0, a1) => {
    const out = [[cx, cy]];
    for (let a = a0; a <= a1 + 1e-9; a += 2.5) { const t = (a * Math.PI) / 180; out.push([cx + R * Math.sin(t), cy - R * Math.cos(t)]); }
    return pts(out);
  };
  const spokes = (cx, cy, R, angles, col, dash) => {
    let s = "<g " + NP + " stroke='" + (col || "#FFFFFF") + "' stroke-width='2'" + (dash ? " stroke-dasharray='6 5'" : "") + ">";
    angles.forEach((a) => { const t = (a * Math.PI) / 180; s += "<line x1='" + cx + "' y1='" + cy + "' x2='" + r1(cx + R * Math.sin(t)) + "' y2='" + r1(cy - R * Math.cos(t)) + "'/>"; });
    return s + "</g>";
  };
  const txt = (x, y, t, size) => "<text x='" + x + "' y='" + y + "' text-anchor='middle' font-size='" + (size || 20) + "' fill='#222' " + NP + ">" + t + "</text>";
  const dot = (x, y) => "<circle cx='" + r1(x) + "' cy='" + r1(y) + "' r='6' fill='#111' " + NP + "/>";

  const OR = "#FF914D", PU = "#8C4A98", GR = "#7ED957", BL = "#3A4FA0";

  // Week 7 Monday Q3: three spinners.
  const spin3 = [
    { p: wedge(110, 120, 90, 0, 90), fill: OR }, { p: wedge(110, 120, 90, 90, 180), fill: PU }, { p: wedge(110, 120, 90, 180, 270), fill: GR }, { p: wedge(110, 120, 90, 270, 360), fill: BL },
    { p: wedge(330, 120, 90, 0, 60), fill: OR }, { p: wedge(330, 120, 90, 60, 120), fill: PU }, { p: wedge(330, 120, 90, 120, 180), fill: BL }, { p: wedge(330, 120, 90, 180, 360), fill: GR },
    ...[0, 1, 2, 3, 4, 5].map((k) => ({ p: wedge(550, 120, 90, k * 45, k * 45 + 45), fill: GR })),
    { p: wedge(550, 120, 90, 270, 315), fill: PU }, { p: wedge(550, 120, 90, 315, 360), fill: OR }
  ];
  spin3[spin3.length - 1].deco = spokes(550, 120, 90, [0, 45, 90, 135, 180, 225], "#2E6B1F", true) + spokes(550, 120, 90, [270, 315]) +
    txt(110, 228, "Spinner 1") + txt(330, 228, "Spinner 2") + txt(550, 228, "Spinner 3");

  // Week 7 Wednesday Q3: four equal parts.
  const quarters = [
    { p: wedge(160, 160, 140, -45, 45), fill: OR, a: "o" }, { p: wedge(160, 160, 140, 45, 135), fill: PU, a: "p" },
    { p: wedge(160, 160, 140, 135, 225), fill: GR, a: "g" }, { p: wedge(160, 160, 140, 225, 315), fill: BL, a: "b" }
  ];

  // Week 7 Wednesday Q5: nine equal parts (orange, green, purple repeating).
  const nine = [OR, GR, PU, OR, GR, PU, OR, GR, PU].map((c, k) => ({ p: wedge(160, 160, 140, k * 40 - 20, k * 40 + 20), fill: c, a: c === OR ? "o" : c === GR ? "g" : "p" }));
  nine[8].deco = spokes(160, 160, 140, [20, 60, 100, 140, 180, 220, 260, 300, 340]) + "<circle cx='160' cy='160' r='10' fill='#FFF' " + NP + "/>";

  // Week 8 Monday Q3: green half, sixths of orange, purple, blue.
  const half = [
    { p: wedge(160, 160, 140, 0, 60), fill: OR }, { p: wedge(160, 160, 140, 60, 120), fill: PU }, { p: wedge(160, 160, 140, 120, 180), fill: BL },
    { p: wedge(160, 160, 140, 180, 240), fill: GR, a: "g" }, { p: wedge(160, 160, 140, 240, 300), fill: GR, a: "g" }, { p: wedge(160, 160, 140, 300, 360), fill: GR, a: "g" }
  ];
  half[5].deco = spokes(160, 160, 140, [0, 60, 120, 180]) + spokes(160, 160, 140, [240, 300], "#2E6B1F", true);

  // Week 7 Tuesday Q3: 10 marbles.
  const marbles = ["b", "b", "b", "b", "p", "p", "g", "g", "g", "y"].map((k, i) => ({ circle: [40 + (i % 5) * 70, 40 + Math.floor(i / 5) * 70, 28], fill: { b: "#2F6FE4", p: "#F49AC1", g: "#3BA55C", y: "#F5C518" }[k], a: k }));

  // Week 7 Thursday Q4: parallelogram on a grid (base 7, height 3). Unit = 40.
  const U = 40, O = 20, gx = (x) => O + x * U, gy = (y) => O + y * U;
  let gridDeco = "<g " + NP + " stroke='#8C8F96' stroke-width='1'>";
  for (let x = 0; x <= 11; x++) gridDeco += "<line x1='" + gx(x) + "' y1='" + gy(0) + "' x2='" + gx(x) + "' y2='" + gy(3) + "'/>";
  for (let y = 0; y <= 3; y++) gridDeco += "<line x1='" + gx(0) + "' y1='" + gy(y) + "' x2='" + gx(11) + "' y2='" + gy(y) + "'/>";
  gridDeco += "</g><polygon points='" + pts([[gx(0), gy(3)], [gx(7), gy(3)], [gx(11), gy(0)], [gx(4), gy(0)]]) + "' fill='none' stroke='#111' stroke-width='3' " + NP + "/>";
  const para = [
    { p: pts([[gx(0), gy(3)], [gx(4), gy(0)], [gx(4), gy(3)]]), fill: "#F2C14E", a: "t" },
    { p: pts([[gx(4), gy(0)], [gx(7), gy(0)], [gx(7), gy(3)], [gx(4), gy(3)]]), fill: "#9FC5F8" },
    { p: pts([[gx(7), gy(0)], [gx(11), gy(0)], [gx(7), gy(3)]]), fill: "#9FC5F8", deco: gridDeco }
  ];

  // Week 8 Monday Q2: trapezium and triangle in frames (traced from the slide, scaled by 0.46).
  const mA = (x, y) => [(x - 113) * 0.46 + 10, (y - 595) * 0.46 + 10], mB = (x, y) => [(x - 1142) * 0.46 + 410, (y - 595) * 0.46 + 10];
  const frame = (m, x0, x1) => { const a = m(x0, 595), b = m(x1, 845); return "<rect x='" + r1(a[0]) + "' y='" + r1(a[1]) + "' width='" + r1(b[0] - a[0]) + "' height='" + r1(b[1] - a[1]) + "' fill='none' stroke='#111' stroke-width='3' " + NP + "/>"; };
  const trans1 = [
    { p: pts([[195, 793], [440, 793], [381, 652], [253, 652]].map((q) => mA(...q))), fill: "#E8191F", deco: dot(...mA(420, 780)) },
    { p: pts([[620, 663], [760, 603], [766, 846], [623, 793]].map((q) => mA(...q))), fill: "#E8191F", a: "rot", deco: dot(...mA(742, 637)) },
    { p: pts([[1227, 600], [1227, 811], [1430, 811]].map((q) => mB(...q))), fill: "#BF4FC7", deco: dot(...mB(1382, 790)) },
    { p: pts([[1598, 597], [1598, 820], [1813, 820]].map((q) => mB(...q))), fill: "#BF4FC7", a: "tr", deco: dot(...mB(1763, 795)) }
  ];
  trans1[3].deco += frame(mA, 113, 503) + frame(mA, 503, 907) + frame(mB, 1142, 1515) + frame(mB, 1515, 1892) +
    txt(r1(mA(503, 0)[0]), 158, "Trapezium", 18) + txt(r1(mB(1515, 0)[0]), 158, "Triangle", 18);

  // Week 8 Thursday Q5: the parallelogram and its four images (traced from the slide, scaled by 0.5).
  const mP = (x, y) => [(x - 300) * 0.5, (y - 650) * 0.5];
  const P5 = [
    { v: [[330, 862], [480, 862], [560, 743], [410, 743]], d: [470, 852], l: "Start" },
    { v: [[642, 864], [792, 864], [871, 746], [721, 746]], d: [782, 854], l: "1", a: "tr" },
    { v: [[955, 743], [1105, 743], [1185, 862], [1035, 862]], d: [1041, 850], l: "2", a: "ref" },
    { v: [[1265, 862], [1415, 862], [1494, 743], [1344, 743]], d: [1357, 755], l: "3", a: "rot" },
    { v: [[1675, 678], [1748, 800], [1683, 935], [1610, 812]], d: [1733, 804], l: "4", a: "rot" }
  ].map((s) => {
    const cx = s.v.reduce((t, q) => t + q[0], 0) / 4;
    return { p: pts(s.v.map((q) => mP(...q))), fill: "#5AB3FA", a: s.a, deco: dot(...mP(...s.d)) + txt(r1(mP(cx, 0)[0]), 160, s.l, 18) };
  });
  const TCATS = [{ k: "tr", t: "Translated (slid)", c: "#22A06B" }, { k: "ref", t: "Reflected (flipped)", c: "#F2994A" }, { k: "rot", t: "Rotated (turned)", c: "#8A3CC4" }];

  UNITS.push({
    stage: 3, ab: "B", term: 4, ls: 4, unit: 39,
    img: "img/s3/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 39 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1 (Week 7 Monday)
      [
        {
          type: "mc", focus: "Represents numbers B: Whole numbers",
          prompt: "Which of the following completes the number line? 9, 6, 3, 0, −3, ?, −9",
          options: ["6", "12", "−6", "−12"],
          answer: 2,
          explain: "The numbers go down by 3 each time: 0, −3, −6, −9. The missing number sits between −3 and −9.",
          interact: [{ kind: "jumps", start: 9, steps: [3], back: true, min: -12, max: 9, hint: "Start at 9. Jump back 3 each time. Where do you land after −3?" }]
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Isla started her swimming lesson at 4:05 pm. When she finished, the clock read 17:50. How long was Isla's swimming lesson? Communicate your reasoning.",
          interact: [
            { kind: "jumps", time: "24", start: 965, end: 1070, steps: [5, 15, 60], hint: "4:05 pm is 1605. Jump to 1700, then on to 1750." },
            { kind: "input", fields: [{ label: "Hours", value: 1 }, { label: "Minutes", value: 45 }] }
          ],
          cubes: { ops: ["−"], note: "4:05 pm is 16:05 in 24-hour time.", solve: [{ t: "Count on", s: "16:05 → 17:05 is 1 hour. 17:05 → 17:50 is 45 minutes. Total 1 h 45 min." }, { t: "Friendly times", s: "16:05 → 17:00 is 55 min. 17:00 → 17:50 is 50 min. 55 + 50 = 105 min = 1 h 45 min." }] },
          answer: "**1 hour 45 minutes**. 17:50 is 5:50 pm. From 4:05 pm, 1 hour gets to 5:05 pm, then 45 more minutes gets to 5:50 pm."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Abir is creating a spinner so that one of the colours has a 75% chance of being landed on. Which spinner should she create? Communicate your reasoning.",
          interact: [
            { kind: "classify", view: [660, 240], label: "Spinner 1: four quarters. Spinner 2: half green and three sixths. Spinner 3: three quarters green, one eighth purple, one eighth orange.", mark: "outline",
              hint: "Tap the green parts of each spinner. Which spinner is 75% green? Spinner 3 is cut into eighths to help you count.",
              cats: [{ k: "g", t: "Green", c: "#1B4D12" }], shapes: spin3 },
            { kind: "choose", rows: [{ t: "Abir should make", options: ["Spinner 1", "Spinner 2", "Spinner 3"], a: 2 }] }
          ],
          answer: "**Spinner 3**. Green covers [3/4] of it ([6/8]), and [3/4] = 75%. Spinner 1 has four 25% parts and spinner 2's biggest part is 50%."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "List the factors for the following numbers: 24, 100, 56, 49",
          interact: [
            { kind: "numchart", from: 1, to: 24, answer: [1, 2, 3, 4, 6, 8, 12, 24], hint: "Factors of 24. Think in pairs: 1 × 24, 2 × 12, …" },
            { kind: "numchart", from: 1, to: 100, answer: [1, 2, 4, 5, 10, 20, 25, 50, 100], hint: "Factors of 100." },
            { kind: "numchart", from: 1, to: 56, answer: [1, 2, 4, 7, 8, 14, 28, 56], hint: "Factors of 56." },
            { kind: "numchart", from: 1, to: 49, answer: [1, 7, 49], hint: "Factors of 49." }
          ],
          answer: "**24:** 1, 2, 3, 4, 6, 8, 12, 24 · **100:** 1, 2, 4, 5, 10, 20, 25, 50, 100 · **56:** 1, 2, 4, 7, 8, 14, 28, 56 · **49:** 1, 7, 49."
        },
        {
          type: "sr", focus: "Geometric measure B: Position",
          prompt: "Point A is located at (−3, 2) on the Cartesian plane. It is then reflected across the x-axis. What are the coordinates of the new point? Now reflect the new point across the y-axis. What are its coordinates now? Describe the changes to the coordinates.",
          interact: [
            { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "A", x: -3, y: 2 }], hint: "Tap A to read it. Then tap the grid to plot each new point." },
            { kind: "input", fields: [
              { label: "After the x-axis: x", value: -3 }, { label: "y", value: -2 },
              { label: "Then after the y-axis: x", value: 3 }, { label: "y", value: -2 }] },
            { kind: "choose", rows: [
              { t: "Across the x-axis…", options: ["the y-coordinate changes sign", "the x-coordinate changes sign", "nothing changes"], a: 0 },
              { t: "Across the y-axis…", options: ["the y-coordinate changes sign", "the x-coordinate changes sign", "nothing changes"], a: 1 }] }
          ],
          answer: "Across the **x-axis**: (−3, 2) → **(−3, −2)**. Then across the **y-axis**: (−3, −2) → **(3, −2)**. Reflecting in the x-axis changes the sign of y; reflecting in the y-axis changes the sign of x."
        }
      ],
      // Review 2 (Week 7 Tuesday)
      [
        {
          type: "tf", focus: "Represents numbers B: Whole numbers",
          prompt: "−8 is closer to 0 than −10 is on a number line.",
          answer: true,
          explain: "−8 is 8 steps from 0 and −10 is 10 steps from 0, so −8 is closer.",
          interact: [{ kind: "numberline", min: -10, max: 0, labelStep: 1, tol: 0.4, items: [["−8", -8], ["−10", -10]] }]
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Calculate the elapsed time between 6:25 pm and 8:10 pm. Explain the strategy you used.",
          interact: [
            { kind: "jumps", time: true, ampm: true, start: 1105, end: 1210, steps: [5, 10, 60], hint: "Jump from 6:25 pm to 7:00 pm, then to 8:00 pm, then to 8:10 pm." },
            { kind: "input", fields: [{ label: "Hours", value: 1 }, { label: "Minutes", value: 45 }] }
          ],
          answer: "**1 hour 45 minutes**. 6:25 pm → 7:00 pm is 35 min, 7:00 pm → 8:00 pm is 1 h, 8:00 pm → 8:10 pm is 10 min. 35 + 10 = 45 min, plus 1 h."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "There are 10 marbles in the jar: 4 blue, 2 pink, 3 green and 1 yellow. Use fractions to assign probabilities to the outcomes for a chance experiment.",
          interact: [
            { kind: "classify", view: [360, 150], label: "10 marbles: 4 blue, 2 pink, 3 green, 1 yellow", mark: "outline", total: 10,
              cats: [{ k: "b", t: "Blue", c: "#0B2A6B" }, { k: "p", t: "Pink", c: "#B81656" }, { k: "g", t: "Green", c: "#1B4D12" }, { k: "y", t: "Yellow", c: "#7A5A00" }], shapes: marbles },
            { kind: "input", fields: [
              { label: "Blue", accept: ["4/10", "2/5"], placeholder: "a/b" }, { label: "Pink", accept: ["2/10", "1/5"], placeholder: "a/b" },
              { label: "Green", accept: ["3/10"], placeholder: "a/b" }, { label: "Yellow", accept: ["1/10"], placeholder: "a/b" }] }
          ],
          cubes: { ops: ["÷"], note: "Each marble is 1 out of 10.", solve: [{ t: "Count out of 10", s: "Blue [4/10], pink [2/10], green [3/10], yellow [1/10]." }, { t: "Check the total", s: "[4/10] + [2/10] + [3/10] + [1/10] = [10/10] = 1, so every marble is counted." }] },
          answer: "Blue **[4/10]** ([2/5]) · Pink **[2/10]** ([1/5]) · Green **[3/10]** · Yellow **[1/10]**. The probabilities add to 1."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Prove that 13 is a prime number. Communicate your reasoning.",
          interact: [
            { kind: "array", rows: 1, cols: 13, max: 13, showTotal: true, hint: "Try to rearrange 13 dots into more than one row with no gaps. Only 1 row of 13 works." },
            { kind: "numchart", from: 1, to: 13, answer: [1, 13], hint: "Tap every number that divides 13 exactly." },
            { kind: "choose", rows: [{ t: "13 is prime because", options: ["its only factors are 1 and 13", "it is an odd number", "it is bigger than 10"], a: 0 }] }
          ],
          answer: "13 has **exactly two factors, 1 and 13**. It can't be shared into equal groups of 2, 3, 4, 5 or 6 (13 ÷ 2 = 6 r 1, 13 ÷ 3 = 4 r 1, …), so it is prime."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "Represent 13 centimetres and 5 millimetres as a fraction and as a decimal.",
          interact: [
            { kind: "marker", min: 13, max: 14, divs: 10, majorEvery: 5, labels: [13, 13.5, 14], label: "13 cm 5 mm", target: 13.5, tol: 0.05, hint: "Each small mark is 1 mm. Slide the pin 5 mm past 13 cm." },
            { kind: "input", fields: [{ label: "As a fraction (cm)", accept: ["13 5/10", "13 1/2", "135/10", "27/2"], placeholder: "13 a/b" }, { label: "As a decimal", value: 13.5, suffix: "cm" }] }
          ],
          answer: "**13 [5/10] cm** (= 13 [1/2] cm) and **13.5 cm**. There are 10 mm in a centimetre, so 5 mm is [5/10] of a centimetre."
        }
      ],
      // Review 3 (Week 7 Wednesday)
      [
        {
          type: "mc", focus: "Represents numbers B: Whole numbers",
          prompt: "Which of these numbers is the furthest from 0 on a number line?",
          options: ["−8", "7", "−6", "0.5"],
          answer: 0,
          explain: "Distance from 0 ignores the sign: −8 is 8 away, 7 is 7 away, −6 is 6 away and 0.5 is half a step away.",
          interact: [{ kind: "numberline", min: -10, max: 10, labelStep: 2, ticks: 1, tol: 0.5, items: [["−8", -8], ["7", 7], ["−6", -6], ["0.5", 0.5]] }]
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Represent 2 hours and 15 minutes as a decimal.",
          interact: [
            { kind: "shade", parts: 4, pct: true, hint: "This strip is 1 hour cut into quarters. Each part is 15 minutes. Shade 15 minutes." },
            { kind: "input", fields: [{ label: "2 h 15 min", value: 2.25, suffix: "hours" }] }
          ],
          answer: "**2.25 hours**. 15 minutes is [1/4] of an hour, and [1/4] = 0.25."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Assign probabilities for this spinner using fractions, decimals and percentages.",
          interact: [
            { kind: "classify", view: [320, 320], label: "A spinner with 4 equal parts: orange, purple, green and blue", mark: "outline", total: 4,
              cats: [{ k: "o", t: "Orange", c: "#7A3A00" }, { k: "p", t: "Purple", c: "#3B1A5A" }, { k: "g", t: "Green", c: "#1B4D12" }, { k: "b", t: "Blue", c: "#0B1A4A" }], shapes: quarters },
            { kind: "input", fields: [{ label: "Each colour as a fraction", accept: ["1/4"], placeholder: "a/b" }, { label: "as a decimal", value: 0.25 }, { label: "as a percentage", value: 25, suffix: "%" }] }
          ],
          answer: "Each colour: **[1/4] = 0.25 = 25%**. The 4 parts are equal, and 4 × 25% = 100%."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: Area",
          prompt: "A rectangular vegetable garden has an area of 60 square metres. What are the possible dimensions and the perimeter? How many answers can you create?",
          interact: [
            { kind: "array", rows: 6, cols: 10, max: 12, showTotal: true, hint: "Each dot is 1 m². Change the rows and columns to find other rectangles of 60." },
            { kind: "pair", labels: ["Length", "Width"], unit: "m", rule: "area", target: 60 },
            { kind: "sides", view: [440, 250], label: "A 10 m by 6 m garden", fill: "#8CC56B", poly: [[40, 50], [380, 50], [380, 210], [40, 210]],
              dims: [{ from: [40, 28], to: [380, 28] }, { from: [404, 50], to: [404, 210] }],
              labels: [{ x: 210, y: 20, t: "10 m" }, { x: 412, y: 136, t: "6 m", anchor: "start" }] },
            { kind: "input", fields: [{ label: "Perimeter of the 10 m × 6 m garden", value: 32, suffix: "m" }, { label: "Whole-number rectangles you can make", value: 6 }] }
          ],
          cubes: { ops: ["×", "+"], note: "Area = length × width. Perimeter = all four sides.", solve: [{ t: "Factor pairs", s: "60 = 1 × 60 = 2 × 30 = 3 × 20 = 4 × 15 = 5 × 12 = 6 × 10." }, { t: "Perimeter of each", s: "122 m, 64 m, 46 m, 38 m, 34 m and 32 m." }] },
          answer: "**6 whole-number rectangles:** 1 × 60 (P = 122 m), 2 × 30 (64 m), 3 × 20 (46 m), 4 × 15 (38 m), 5 × 12 (34 m), **6 × 10 (32 m)**. The same area can have very different perimeters.",
          explain: "Any length × width that makes 60 m² is accepted. The perimeter box checks the 10 m × 6 m example. Decimal sides (such as 7.5 m × 8 m) give even more answers."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Mia, Leo and Zara play a game using this spinner. Mia chooses orange, Leo chooses purple and Zara chooses green. They spin it 30 times. Whoever's colour it lands on gets a point. The person with the most points wins. Is this game fair? Why or why not? Can the results still be different for each player? Explain.",
          interact: [
            { kind: "classify", view: [320, 320], label: "A spinner with 9 equal parts: 3 orange, 3 green, 3 purple", mark: "outline", total: 9,
              cats: [{ k: "o", t: "Orange (Mia)", c: "#7A3A00" }, { k: "p", t: "Purple (Leo)", c: "#3B1A5A" }, { k: "g", t: "Green (Zara)", c: "#1B4D12" }], shapes: nine },
            { kind: "input", fields: [{ label: "Expected points each in 30 spins", value: 10 }] },
            { kind: "choose", rows: [
              { t: "Is the game fair?", options: ["Yes", "No"], a: 0 },
              { t: "Can the points still be different?", options: ["Yes, each spin is random", "No, they will all get 10"], a: 0 }] }
          ],
          cubes: { ops: ["÷"], solve: [{ t: "Count the parts", s: "Each colour has 3 of the 9 equal parts, so each has a [3/9] = [1/3] chance." }, { t: "Expected points", s: "[1/3] of 30 = 30 ÷ 3 = 10 points each." }] },
          answer: "**Yes, it is fair.** Each colour has 3 of the 9 equal parts ([1/3] chance), so each player expects about **10 points**. But each spin is random, so the actual scores can still be different (for example 12, 9 and 9)."
        }
      ],
      // Review 4 (Week 7 Thursday)
      [
        {
          type: "tf", focus: "Represents numbers B: Whole numbers",
          prompt: "Nadia entered 36 on her calculator. If she repeatedly subtracts 6, her calculator will eventually show −12.",
          answer: true,
          explain: "36, 30, 24, 18, 12, 6, 0, −6, −12. 36 and −12 are both multiples of 6, so counting back by 6 lands on −12 after 8 subtractions.",
          interact: [{ kind: "jumps", start: 36, steps: [6], back: true, min: -12, max: 36, hint: "Start at 36. Jump back 6 at a time. Keep going past 0." }]
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
          prompt: "Emilia has dissected this rectangle into 4 triangles. Record another way she could dissect this rectangle into smaller shapes.",
          img: "u39-dissect.png",
          interact: [{ kind: "sketch", shape: { view: [360, 190], pts: [[20, 15], [340, 15], [340, 175], [20, 175]] }, shapeFill: "rgba(216,20,60,.35)", shapeStroke: "#B0102E" }],
          answer: "Answers vary. For example: one diagonal makes **2 triangles**; a line across the middle makes **2 smaller rectangles**; both diagonals make 4 triangles meeting in the centre; or cut off a **square** and a rectangle.",
          explain: "Draw a different dissection on the rectangle and name the new shapes."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "What is the expected frequency of landing on an even number if I roll a standard dice 18 times?",
          interact: [
            { kind: "pack", mode: "share", n: 6, total: 18, thing: "rolls", label: "face", hint: "Share the 18 rolls evenly between the 6 faces. Faces 2, 4 and 6 are even." },
            { kind: "input", fields: [{ label: "Expected even rolls", value: 9 }] }
          ],
          cubes: { ops: ["÷", "×"], note: "Even numbers on a dice: 2, 4 and 6.", solve: [{ t: "Per face", s: "18 ÷ 6 = 3 rolls for each face. 3 even faces × 3 = 9." }, { t: "Use the chance", s: "3 of the 6 faces are even: [3/6] = [1/2]. Half of 18 = 9." }] },
          answer: "**9 times.** 3 of the 6 faces are even, so the chance is [1/2], and [1/2] of 18 = 9."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: Area",
          prompt: "What is the area of this parallelogram? Explain your method.",
          interact: [
            { kind: "classify", view: [480, 160], label: "A parallelogram on a square grid: base 7 squares, height 3 squares", mark: "outline",
              hint: "Tap the yellow triangle. Imagine sliding it across to the right-hand end. What shape do you make?",
              cats: [{ k: "t", t: "Move this part", c: "#B05A00" }], shapes: para },
            { kind: "input", fields: [{ label: "Area", value: 21, suffix: "square units" }] }
          ],
          answer: "**21 square units.** Cut the triangle off one end and slide it to the other end: it makes a 7 × 3 rectangle. Area = base × height = 7 × 3 = 21.",
          explain: "Read from the slide's grid: the base is 7 squares and the height is 3 squares."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Mass",
          prompt: "James is packing for a school camping trip. He packs a sleeping bag that weighs 800 g, a torch that weighs 150 g, and a tent that weighs 1.5 kg. What is the combined mass of all the items in kilograms?",
          interact: [
            { kind: "bar", whole: { v: 2450, l: "?", n: "total", hide: true }, parts: [{ v: 800, l: "800 g", n: "sleeping bag" }, { v: 150, l: "150 g", n: "" }, { v: 1500, l: "1.5 kg", n: "tent" }] },
            { kind: "input", fields: [{ label: "Combined mass", value: 2.45, suffix: "kg" }] }
          ],
          cubes: { ops: ["+"], note: "1 kg = 1000 g.", solve: [{ t: "Work in grams", s: "800 + 150 + 1500 = 2450 g = 2.45 kg." }, { t: "Work in kilograms", s: "0.8 + 0.15 + 1.5 = 2.45 kg." }] },
          answer: "**2.45 kg**. 800 g + 150 g + 1500 g = 2450 g, and 2450 g = 2.45 kg."
        }
      ],
      // Review 5 (Week 8 Monday)
      [
        {
          type: "mc", focus: "Representing quantity fractions B",
          prompt: "Ava baked cupcakes for a party. She had completed 2-fifths of her baking when she stopped for lunch. After lunch, she baked 36 more cupcakes to finish the job. How many did she bake in total?",
          options: ["60", "40", "72", "48"],
          answer: 0,
          explain: "After lunch she baked the other [3/5], which is 36 cupcakes. [1/5] = 36 ÷ 3 = 12, so the total is 5 × 12 = 60.",
          interact: [{ kind: "bar", whole: { v: 60, l: "60", n: "total", hide: true }, parts: [{ v: 24, l: "[2/5]", n: "before lunch" }, { v: 36, l: "36", n: "after lunch ([3/5])" }] }],
          cubes: { ops: ["÷", "×"], note: "2-fifths done means 3-fifths were left.", solve: [{ t: "Find one fifth", s: "[3/5] = 36, so [1/5] = 12. 5 × 12 = 60." }, { t: "Check", s: "[2/5] of 60 = 24 before lunch. 24 + 36 = 60." }] }
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
          prompt: "Which terms can be used to describe the transformation of these shapes? The trapezium has been… The triangle has been…",
          interact: [
            { kind: "classify", view: [760, 170], label: "A trapezium and its image, and a triangle and its image, each in two frames", mark: "outline",
              hint: "Watch the dot. Choose a term, then tap the shape in each right-hand frame that it describes.", cats: TCATS, shapes: trans1 },
            { kind: "choose", rows: [
              { t: "The trapezium has been", options: ["translated", "reflected", "rotated"], a: 2 },
              { t: "The triangle has been", options: ["translated", "reflected", "rotated"], a: 0 }] }
          ],
          answer: "The trapezium has been **rotated** (a quarter turn anticlockwise: its long side is now on the right and the dot has moved to the top). The triangle has been **translated** (slid across without turning or flipping)."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "When Sam spun this spinner 12 times, it landed on green 4 times. Explain why the number of times it landed on green might be different to what he expected.",
          interact: [
            { kind: "classify", view: [320, 320], label: "A spinner: half green, and one sixth each of orange, purple and blue", mark: "outline", total: 6,
              hint: "The dashed lines cut the green half into sixths. Tap Green, then tap each green part.", cats: [{ k: "g", t: "Green", c: "#1B4D12" }], shapes: half },
            { kind: "input", fields: [{ label: "Expected greens in 12 spins", value: 6 }] },
            { kind: "choose", rows: [{ t: "He got 4, not 6, because", options: ["each spin is random, and 12 spins is a small number of trials", "the spinner is broken", "green is less likely than orange"], a: 0 }] }
          ],
          answer: "Green is half the spinner, so Sam **expected about 6** greens (half of 12). Each spin is random, so in only 12 spins the results can easily differ. The more he spins, the closer the results usually get to half."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: Area",
          prompt: "Explain the relationship between the areas of a parallelogram, rectangle and triangle.",
          interact: [
            { kind: "sketch", grid: "square" },
            { kind: "choose", rows: [
              { t: "A parallelogram has the same area as", options: ["a rectangle with the same base and height", "half a rectangle", "a triangle with the same base and height"], a: 0 },
              { t: "A triangle has", options: ["half the area of a rectangle with the same base and height", "the same area as that rectangle", "double that area"], a: 0 }] }
          ],
          answer: "Cut the triangle off one end of a **parallelogram** and slide it across: it makes a **rectangle** with the same base and height, so both have area = base × height. A diagonal cuts a rectangle (or parallelogram) into 2 equal **triangles**, so a triangle's area is **half** of base × height."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "A rectangular prism with a volume of 36 cm³ has been constructed from centimetre cubes. The base layer contains 9 cubes. How many layers does it have? Communicate your reasoning.",
          interact: [
            { kind: "pack", mode: "pack", size: 9, total: 36, thing: "cubes", label: "layer", hint: "Fill a layer with 9 cubes at a time until all 36 are used." },
            { kind: "input", fields: [{ label: "Layers", value: 4 }] }
          ],
          cubes: { ops: ["÷"], solve: [{ t: "Divide", s: "36 ÷ 9 = 4 layers." }, { t: "Build up", s: "9, 18, 27, 36: that is 4 layers of 9." }] },
          answer: "**4 layers**. Each layer has 9 cubes (9 cm³), and 36 ÷ 9 = 4. For example, a 3 cm × 3 cm × 4 cm prism."
        }
      ],
      // Review 6 (Week 8 Tuesday)
      [
        {
          type: "tf", focus: "Representing quantity fractions B",
          prompt: "[3/4] of 32 = [2/4] of 48. Communicate your reasoning.",
          answer: true,
          explain: "[1/4] of 32 = 8, so [3/4] = 24. [1/4] of 48 = 12, so [2/4] = 24. Both sides are 24.",
          interact: [
            { kind: "shade", parts: 4, pct: true, each: 8, hint: "32 in quarters: each part is 8. Shade [3/4]." },
            { kind: "shade", parts: 4, pct: true, each: 12, hint: "48 in quarters: each part is 12. Shade [2/4]." }
          ]
        },
        {
          type: "sr", focus: "Geometric measure B: Angles",
          prompt: "One angle on this straight line is 125°. What is the other angle?",
          interact: [
            { kind: "angle", names: true, degrees: true, start: 125, label: "Drag the arm to 125°. The rest of the straight line is the other angle." },
            { kind: "input", fields: [{ label: "The other angle", value: 55, suffix: "°" }] }
          ],
          answer: "**55°**. Angles on a straight line add to 180°, and 180° − 125° = 55°."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "What does the term 'bias' mean? Identify 3 sources of possible bias in data found in the media.",
          interact: [
            { kind: "choose", rows: [{ t: "Bias means", options: ["the data is unfairly tilted towards one view or result", "the data has been collected by a computer", "the graph has a title"], a: 0 }] },
            { kind: "select", hint: "Tap every possible source of bias.", items: [
              ["Only asking a small group of people", true],
              ["Only asking people who already agree (e.g. fans of one team)", true],
              ["A survey paid for by a company selling the product", true],
              ["A leading question, like 'Don't you agree our ice-cream is the best?'", true],
              ["A large random sample of people", false],
              ["A graph that starts its scale at 0", false]] }
          ],
          answer: "**Bias** is when data is unfairly tilted towards one result. Sources include: a **small or one-sided sample**, **leading questions**, data from **someone who gains** from the result (such as an advertiser), and graphs with a **stretched or cut-off scale**."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Find the volume of this prism. Communicate your method.",
          img: "u39-prism.png",
          interact: [
            { kind: "array", rows: 6, cols: 6, max: 12, showTotal: true, hint: "This is the base layer: 6 rows of 6 cubic metres. How many layers are there?" },
            { kind: "input", fields: [{ label: "Volume", value: 144, suffix: "m³" }] }
          ],
          answer: "**144 m³**. The base layer is 6 × 6 = 36 m³, and there are 4 layers: 36 × 4 = 144 m³."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: Area",
          prompt: "Show 2 different ways to find the area of this composite shape.",
          img: "u39-lshape.png",
          interact: [
            { kind: "areagrid", size: 44, cells: ["111100000", "111100000", "111100000", "111100000", "111111111", "111111111", "111111111"] },
            { kind: "expr", count: 2, target: 43, placeholder: "e.g. 4 x 7 + 5 x 3" }
          ],
          answer: "**43 cm².** Way 1: cut it upright: 4 × 7 = 28 and 5 × 3 = 15, 28 + 15 = 43. Way 2: cut it across: 4 × 4 = 16 and 9 × 3 = 27, 16 + 27 = 43. (Or 9 × 7 − 5 × 4 = 63 − 20 = 43.)",
          explain: "The unlabelled lengths come from the labels: the bottom is 4 + 5 = 9 cm long and the top part is 7 − 3 = 4 cm high. Each grid square is 1 cm²."
        }
      ],
      // Review 7 (Week 8 Wednesday)
      [
        {
          type: "mc", focus: "Representing quantity fractions B",
          prompt: "A quarter of 36 is…",
          options: ["9", "8.5", "17", "10.25"],
          answer: 0,
          explain: "A quarter means 4 equal groups: 36 ÷ 4 = 9.",
          interact: [{ kind: "pack", mode: "share", n: 4, total: 36, thing: "counters", label: "group", hint: "Share 36 counters into 4 equal groups." }]
        },
        {
          type: "sr", focus: "Geometric measure A: Angles",
          prompt: "Do these angles form a right angle? Two angles of 45° sit side by side. How do you know?",
          interact: [
            { kind: "angle", names: true, degrees: true, start: 45, label: "Drag the arm to 45°, then turn it another 45°." },
            { kind: "input", fields: [{ label: "45° + 45°", value: 90, suffix: "°" }] },
            { kind: "choose", rows: [{ t: "Do they form a right angle?", options: ["Yes", "No"], a: 0 }] }
          ],
          answer: "**Yes.** 45° + 45° = 90°, and a right angle is exactly 90°."
        },
        {
          type: "sr", focus: "Data B",
          prompt: "Use the data to answer: Which year had the highest total number of visitors? What was that total? In which year did international visitors make up the largest proportion of total visitors? What might you predict about visitor numbers in 2024?",
          interact: [
            { kind: "bargraph", max: 8, step: 1, ylabel: "Visitors (millions)", xlabel: "Year", label: "Domestic and international visitors, 2014 to 2023", legendW: 130,
              series: [{ l: "Domestic", c: "#A061A8" }, { l: "International", c: "#3DB8D6" }],
              groups: [{ l: "2014", v: [6, 1] }, { l: "2015", v: [6.2, 1.2] }, { l: "2016", v: [6.3, 1.3] }, { l: "2017", v: [7, 1.5] }, { l: "2018", v: [7.1, 1.7] },
                { l: "2019", v: [7.5, 1.8] }, { l: "2020", v: [1, 0.3] }, { l: "2021", v: [2.5, 0.5] }, { l: "2022", v: [4, 2.5] }, { l: "2023", v: [6, 5] }] },
            { kind: "input", fields: [{ label: "Year with the highest total", value: 2023 }, { label: "That total", value: 11, suffix: "million" }, { label: "Year with the largest international share", value: 2023 }] },
            { kind: "choose", rows: [{ t: "In 2024, visitor numbers will probably", options: ["keep going up", "drop back to 2020 levels", "be exactly the same as 2023"], a: 0 }] }
          ],
          answer: "**2023**, with 6 + 5 = **11 million** visitors (2019 had 7.5 + 1.8 = 9.3 million). International visitors were the largest share in **2023**: 5 out of 11 million, almost half. Numbers have risen every year since 2020, so 2024 will **probably be higher again**.",
          explain: "Bar heights are read from the slide's graph to the nearest tenth of a million."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Two prisms have the same volume. Prism A is 2 cm long, 3 cm wide and 10 cm high. Prism B is 5 cm long and 2 cm wide. Calculate the missing dimension of prism B.",
          interact: [
            { kind: "array", rows: 2, cols: 5, max: 12, showTotal: true, hint: "This is prism B's base layer: 5 × 2 = 10 cubes. How many layers make 60?" },
            { kind: "scale", left: "5 × 2 × ?", right: "60", answer: 6 }
          ],
          cubes: { ops: ["×", "÷"], solve: [{ t: "Volume of A", s: "2 × 3 × 10 = 60 cm³." }, { t: "Height of B", s: "B's base is 5 × 2 = 10 cm². 60 ÷ 10 = 6 cm." }] },
          answer: "**6 cm high.** Prism A: 2 × 3 × 10 = 60 cm³. Prism B: 5 × 2 × 6 = 60 cm³."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "A bus leaves Sydney Central Station at 10:35 am and arrives in Newcastle at 14:20. How long did the journey take?",
          interact: [
            { kind: "jumps", time: "24", start: 635, end: 860, steps: [5, 20, 25, 60], hint: "10:35 am is 1035. Jump to 1100, then to 1400, then to 1420." },
            { kind: "input", fields: [{ label: "Hours", value: 3 }, { label: "Minutes", value: 45 }] }
          ],
          cubes: { ops: ["−"], note: "14:20 is 2:20 pm.", solve: [{ t: "Count on", s: "10:35 → 11:00 is 25 min, 11:00 → 14:00 is 3 h, 14:00 → 14:20 is 20 min. 3 h 45 min." }, { t: "Whole hours first", s: "10:35 → 13:35 is 3 h. 13:35 → 14:20 is 45 min. 3 h 45 min." }] },
          answer: "**3 hours 45 minutes.** 10:35 am → 1:35 pm is 3 hours, then 1:35 pm → 2:20 pm (14:20) is 45 minutes."
        }
      ],
      // Review 8 (Week 8 Thursday)
      [
        {
          type: "tf", focus: "Representing quantity fractions B",
          prompt: "To find [3/4] of 12, divide 12 by 3 to get 4.",
          answer: false,
          explain: "The denominator 4 tells us to divide by 4: 12 ÷ 4 = 3, so [1/4] of 12 is 3. Then 3 quarters is 3 × 3 = 9. Dividing by 3 finds a third, not three-quarters.",
          interact: [{ kind: "shade", parts: 4, pct: true, each: 3, hint: "12 in quarters: each part is 3. Shade [3/4]." }]
        },
        {
          type: "sr", focus: "Geometric measure A: Angles",
          prompt: "Measure and describe these angles using the terms acute, obtuse or reflex.",
          img: "u39-protractors.png",
          interact: [
            { kind: "angle", names: true, degrees: true, start: 135, label: "Make each angle with the angle maker to check its name." },
            { kind: "input", fields: [{ label: "Red angle", min: 133, max: 137, suffix: "°" }, { label: "Green angle", min: 43, max: 47, suffix: "°" }] },
            { kind: "choose", rows: [
              { t: "The red angle is", options: ["acute", "obtuse", "reflex"], a: 1 },
              { t: "The green angle is", options: ["acute", "obtuse", "reflex"], a: 0 }] }
          ],
          answer: "Red: **135°, obtuse** (between 90° and 180°). Green: **45°, acute** (less than 90°). Read the scale that starts at 0 on the arm lying along the base line.",
          explain: "Measured from the slide's protractors: the red arm sits on 135° and the green arm on 45° of the inner scale. Answers within 2° are accepted."
        },
        {
          type: "sr", focus: "Data B",
          prompt: "Describe one similarity and one difference between Grade 2 and Grade 3 in this side-by-side column graph.",
          interact: [
            { kind: "bargraph", max: 20, step: 2, ylabel: "Number of students", xlabel: "Sport", label: "Favourite sports, Grade 2 and Grade 3",
              series: [{ l: "Grade 2", c: "#0B2A6B" }, { l: "Grade 3", c: "#1570FF" }],
              groups: [{ l: "Basketball", v: [15, 18] }, { l: "Netball", v: [7, 13] }, { l: "Soccer", v: [18, 4] }, { l: "Swimming", v: [16, 16] }] },
            { kind: "select", hint: "Tap every statement that is true.", items: [
              ["Similarity: both grades have 16 votes for swimming", true],
              ["Difference: Grade 2 likes soccer much more than Grade 3 (18 vs 4)", true],
              ["Difference: Grade 3 likes netball more than Grade 2 (13 vs 7)", true],
              ["Both grades' favourite sport is soccer", false],
              ["Grade 2 chose netball the most", false]] }
          ],
          answer: "**Similarity:** both grades gave swimming 16 votes. **Difference:** soccer is Grade 2's favourite (18) but Grade 3's least favourite (4). Other answers: Grade 3 chose netball and basketball more than Grade 2."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "A prism is 20 cm long, 15 cm wide and 10 cm high. Find its volume in cubic centimetres.",
          interact: [
            { kind: "group", items: [20, 15, 10], op: "×" },
            { kind: "input", fields: [{ label: "Volume", value: 3000, suffix: "cm³" }] }
          ],
          answer: "**3000 cm³.** 20 × 15 = 300 cm³ in the base layer, and 10 layers: 300 × 10 = 3000 cm³. (Or group 20 × 10 = 200 first, then 200 × 15 = 3000.)"
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
          prompt: "Describe each of the transformations of the parallelogram.",
          interact: [
            { kind: "classify", view: [730, 175], label: "A parallelogram (Start) and four images numbered 1 to 4, each with a dot on one corner", mark: "outline",
              hint: "Follow the dot. Choose a term, then tap each numbered shape it describes.", cats: TCATS, shapes: P5 }
          ],
          answer: "**1:** translated (slid right). **2:** reflected (flipped across a vertical line; it now leans the other way and the dot is bottom-left). **3:** rotated a half turn (the dot is now top-left). **4:** rotated (turned about 60° anticlockwise, so it stands up on a corner).",
          explain: "Shape 4 on the slide is turned by roughly 65°, not a quarter turn. The dot shows it is a turn, not a flip."
        }
      ]
    ]
  });
})();
