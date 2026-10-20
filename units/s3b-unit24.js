/*
  Stage 3 Year B, Unit 24 — Review of learning (Term 1, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
(function () {
  // A grid of rectangles for classify: rows of fill colours (null = white), each cell tagged with its category.
  const grid = (x0, y0, cw, ch, rows, cat) => {
    const out = [];
    rows.forEach((row, r) => row.forEach((f, c) => {
      const x = x0 + c * cw, y = y0 + r * ch;
      out.push({ p: x + "," + y + " " + (x + cw) + "," + y + " " + (x + cw) + "," + (y + ch) + " " + x + "," + (y + ch), fill: f || "#FFFFFF", a: cat ? cat[f] : null });
    }));
    return out;
  };
  // Regular hexagon (flat top) split into 6 triangles from the centre.
  const hx = [[250, 130], [200, 216.6], [100, 216.6], [50, 130], [100, 43.4], [200, 43.4]];
  const tri = (i, fill, a) => ({ p: "150,130 " + hx[i].join(",") + " " + hx[(i + 1) % 6].join(","), fill, a });
  const P = "#7030A0", G = "#00B050", Y = "#FFFF00", PK = "#FF66C4", BL = "#2509D3", NV = "#0B2A6B";

  UNITS.push({
    stage: 3, ab: "B", term: 1, ls: 4, unit: 24,
    img: "img/s3/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 24 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1
      [
        {
          type: "mc", focus: "Representing quantity fractions B",
          prompt: "Which of the following lists these fractions in **ascending order**?",
          options: ["[1/8], [2/4], [1/4], [3/8]", "[1/4], [2/4], [1/8], [3/8]", "[1/8], [1/4], [3/8], [2/4]", "[3/8], [2/4], [1/4], [1/8]"],
          answer: 2,
          explain: "Rename them as eighths: [1/8], [2/8], [3/8], [4/8]. So [1/8], [1/4], [3/8], [2/4].",
          interact: [{ kind: "numberline", min: 0, max: 1, ticks: 8, tol: 0.03, items: [["[1/8]", 0.125], ["[2/4]", 0.5], ["[1/4]", 0.25], ["[3/8]", 0.375]] }]
        },
        {
          type: "sr", focus: "Representing quantity fractions A",
          prompt: "Record the following fractions in order on a number line: [1/6], [1/10], [1/2], [1/5]",
          interact: [
            { kind: "numberline", min: 0, max: 1, ticks: 30, tol: 0.02, items: [["[1/6]", 1 / 6], ["[1/10]", 0.1], ["[1/2]", 0.5], ["[1/5]", 0.2]] },
            { kind: "order", items: ["[1/6]", "[1/10]", "[1/2]", "[1/5]"], answer: [1, 0, 3, 2] }
          ],
          answer: "[1/10], [1/6], [1/5], [1/2]. With the same numerator, the bigger the denominator, the smaller each part."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "Record the following lengths using decimal notation: 2 metres and 70 centimetres, 5 kilometres and 200 centimetres, 2 kilometres and 400 centimetres.",
          interact: [
            { kind: "pv", cols: ["O", "t", "h", "th"], start: 2.7, hint: "For metres: 1 cm is a hundredth of a metre. For kilometres: 1 m is a thousandth of a kilometre (and 100 cm = 1 m)." },
            { kind: "input", fields: [{ label: "2 m 70 cm =", value: 2.7, suffix: "m" }, { label: "5 km 200 cm =", value: 5.002, suffix: "km" }, { label: "2 km 400 cm =", value: 2.004, suffix: "km" }] }
          ],
          answer: "**2.70 m** · **5.002 km** (200 cm = 2 m) · **2.004 km** (400 cm = 4 m)",
          explain: "The slide doesn't name the unit for each answer. Metres are used for the first, and kilometres for the other two."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "A library had 8230 books. They removed 2485 damaged books and then added 1350 new books. What is the total number of books in the library now? Communicate your strategy.",
          interact: [
            { kind: "jumps", start: 8230, back: true, steps: [1000, 100, 10, 5], hint: "Jump back 2485, then forward 1350. Use Jump by for big jumps." },
            { kind: "input", fields: [{ label: "Books now", value: 7095 }] }
          ],
          cubes: { ops: ["−", "+"], solve: [{ t: "Two steps", s: "8230 − 2485 = 5745. 5745 + 1350 = 7095 books." }, { t: "Net change", s: "They removed 2485 and added 1350, so 1135 fewer books. 8230 − 1135 = 7095." }] },
          answer: "**7095 books**. 8230 − 2485 = 5745, and 5745 + 1350 = 7095."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Identify the month with the smallest difference in sales between Cool Cola and Super Soda. Record the number of sales for each drink for that month.",
          img: "u24-drinks.png",
          interact: [
            { kind: "choose", rows: [{ t: "Month", options: ["April", "June", "August", "October"], a: 1 }] },
            { kind: "input", fields: [{ label: "Cool Cola", min: 290000, max: 310000 }, { label: "Super Soda", min: 340000, max: 360000 }] }
          ],
          answer: "**June**: Cool Cola about **300 000** and Super Soda about **350 000**, a difference of about 50 000.",
          explain: "Super Soda's June point sits halfway between 300 000 and 400 000, so answers from 340 000 to 360 000 are accepted."
        }
      ],
      // Review 2
      [
        {
          type: "tf", focus: "Representing quantity fractions B",
          prompt: "Each of these represent one-third: a rectangle with 2 of 6 parts shaded, 12 counters with 4 circled, and [1/3].",
          answer: true,
          explain: "[2/6] = [1/3] and [4/12] = [1/3]. All three show one-third.",
          interact: [{ kind: "classify", view: [600, 200], total: 6, mark: "outline", hint: "Tap Shaded, then tap each shaded part to count it.",
            cats: [{ k: "s", t: "Shaded", c: "#D9480F" }],
            shapes: grid(20, 20, 80, 80, [[null, null, NV], [NV, null, null]], { [NV]: "s" }).concat(
              [0, 1, 2].flatMap((r) => [0, 1, 2, 3].map((c) => ({ circle: [340 + c * 60, 45 + r * 60, 24], fill: NV, a: null }))),
              [{ circle: [-100, -100, 1], fill: NV, a: null, deco: "<g fill='none' stroke='#17233F' stroke-width='2' pointer-events='none'><rect x='20' y='20' width='240' height='160'/><line x1='100' y1='20' x2='100' y2='180'/><line x1='180' y1='20' x2='180' y2='180'/><line x1='20' y1='100' x2='260' y2='100'/></g><ellipse cx='430' cy='105' rx='130' ry='34' fill='none' stroke='#C4372C' stroke-width='4' pointer-events='none'/>" }]) }]
        },
        {
          type: "sr", focus: "Representing quantity fractions A",
          prompt: "Francesca placed the fractions [1/8], [1/4], [1/6], [1/2] on a number line in this order, evenly spaced: [1/8], [1/6], [1/4], [1/2]. Do you agree with her placements? Why or why not?",
          interact: [
            { kind: "numberline", min: 0, max: 1, ticks: 24, tol: 0.02, items: [["[1/8]", 0.125], ["[1/6]", 1 / 6], ["[1/4]", 0.25], ["[1/2]", 0.5]] },
            { kind: "choose", rows: [
              { t: "Is the order correct?", options: ["Yes", "No"], a: 0 },
              { t: "Is the spacing correct?", options: ["Yes", "No"], a: 1 }] }
          ],
          answer: "The **order is right**, but the **spacing isn't**. On a 0 to 1 line, [1/2] is halfway, [1/4] is halfway to [1/2], and [1/8], [1/6] and [1/4] sit close together near 0.",
          explain: "Francesca's line has no 0 or 1 marked. The question is read as: the order is correct, but the gaps between the fractions are not to scale."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "Lilly walks 3200 metres to the park. Convert the length to show how many kilometres she walked.",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O", "t"], start: 3200, shift: true, hint: "1000 m = 1 km, so divide by 1000: press ÷ 10 three times." },
            { kind: "input", fields: [{ label: "3200 m =", value: 3.2, suffix: "km" }] }
          ],
          cubes: { ops: ["÷"], solve: [{ t: "Divide by 1000", s: "3200 ÷ 1000 = 3.2 km. Each digit moves 3 places to the right." }, { t: "Split it", s: "3000 m = 3 km and 200 m = 0.2 km. So 3.2 km." }] },
          answer: "**3.2 km**"
        },
        {
          type: "sr", focus: "Additive relations A",
          prompt: "Oscar added 3785 + 4629 and got 8314. Use place value to check if the answer is correct. Communicate your reasoning.",
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 7, H: 13, T: 10, O: 14 }, target: 8414, need: "standard", hint: "These are the counters for 3785 + 4629 added column by column. Group 10 into 1 of the next column." },
            { kind: "choose", rows: [{ t: "Is 8314 correct?", options: ["Yes", "No"], a: 1 }] },
            { kind: "input", fields: [{ label: "3785 + 4629 =", value: 8414 }] }
          ],
          answer: "**No.** The answer is **8414**. Ones: 5 + 9 = 14 (carry 1 ten). Tens: 8 + 2 + 1 = 11 (carry 1 hundred). Hundreds: 7 + 6 + 1 = 14 (carry 1 thousand). Thousands: 3 + 4 + 1 = 8. Oscar's hundreds digit is 1 too small, so a regrouped hundred was missed.",
          explain: "The slide calls Oscar 'her'. The prompt now says 'the answer' instead."
        },
        {
          type: "sr", focus: "Chance A",
          prompt: "Record events that can be described as: likely, unlikely, equally likely, certain, impossible.",
          interact: [{ kind: "choose", rows: [
            { t: "A coin lands on heads", options: ["certain", "likely", "equally likely", "unlikely", "impossible"], a: 2 },
            { t: "Rolling a 7 on a 1–6 die", options: ["certain", "likely", "equally likely", "unlikely", "impossible"], a: 4 },
            { t: "Picking red from a bag of 9 red and 1 blue", options: ["certain", "likely", "equally likely", "unlikely", "impossible"], a: 1 },
            { t: "Picking blue from that same bag", options: ["certain", "likely", "equally likely", "unlikely", "impossible"], a: 3 },
            { t: "Tomorrow comes after today", options: ["certain", "likely", "equally likely", "unlikely", "impossible"], a: 0 }] }],
          answer: "Answers vary. For example: heads on a coin is **equally likely**, a 7 on a die is **impossible**, red from 9 red and 1 blue is **likely**, blue is **unlikely**, tomorrow coming after today is **certain**.",
          explain: "The slide is open-ended. Five sample events are given so the class can sort them, then add their own."
        }
      ],
      // Review 3
      [
        {
          type: "mc", focus: "Representing quantity fractions B",
          prompt: "Which of the following pairs are **not** equivalent fractions?",
          options: ["[3/6], [1/2]", "[4/8], [1/2]", "[1/2], [5/10]", "[4/6], [1/2]"],
          answer: 3,
          explain: "[4/6] = [2/3], which is more than [1/2]. The others all equal one-half.",
          interact: [{ kind: "shade", parts: 6, pct: false, hint: "Shade [4/6] of the strip. Is it half?" }]
        },
        {
          type: "sr", focus: "Representing quantity fractions A",
          prompt: "Willow walked [1/2] of a walking track. Polly walked [3/4] of a different track. Willow said she walked further than Polly. Could Willow be right?",
          interact: [
            { kind: "bar", whole: { v: 12, l: "Willow's track: 12 km", n: "a long track" }, parts: [{ v: 6, l: "[1/2] = 6 km", n: "Willow" }, { v: 6, l: "6 km" }] },
            { kind: "bar", whole: { v: 4, l: "Polly's track: 4 km", n: "a short track" }, parts: [{ v: 3, l: "[3/4] = 3 km", n: "Polly" }, { v: 1, l: "1 km" }], hint: "Now Polly's track. The lengths are made-up examples." },
            { kind: "choose", rows: [{ t: "Could Willow be right?", options: ["No, [3/4] is always more", "Yes, if her track is longer"], a: 1 }] }
          ],
          cubes: { ops: ["×"], note: "Compare the actual distances, not just the fractions.", solve: [{ t: "Try lengths", s: "If Willow's track is 12 km, [1/2] is 6 km. If Polly's track is 4 km, [3/4] is 3 km. Willow walked further." }, { t: "Same whole", s: "Only when the tracks are the same length is [3/4] more than [1/2]." }] },
          answer: "**Yes, she could be.** The tracks are different lengths, so the fractions are of different wholes. Half of a long track can be further than three-quarters of a short track.",
          explain: "The slide has no question after Willow's claim. It is asked as 'Could Willow be right?', and the track lengths in the bar models are made-up examples."
        },
        {
          type: "sr", focus: "Geometric measure A: Length",
          prompt: "Calculate the perimeter of this shape.",
          interact: [
            { kind: "sides", label: "Rectangle, 20 cm by 10 cm", view: [480, 230], fill: "#0B2A6B",
              poly: [[60, 50], [420, 50], [420, 190], [60, 190]],
              dims: [{ from: [62, 32], to: [418, 32] }, { from: [440, 52], to: [440, 188] }, { from: [62, 208], to: [418, 208] }, { from: [40, 52], to: [40, 188] }],
              labels: [{ x: 240, y: 24, t: "20 cm" }, { x: 450, y: 125, t: "10 cm", anchor: "start" }, { x: 240, y: 228, t: "20 cm" }, { x: 30, y: 125, t: "10 cm", anchor: "end" }] },
            { kind: "input", fields: [{ label: "Perimeter", value: 60, suffix: "cm" }] }
          ],
          answer: "20 + 10 + 20 + 10 = **60 cm**, or 2 × (20 + 10) = 60 cm."
        },
        {
          type: "sr", focus: "Additive relations A",
          prompt: "Sophie is counting the number of pencils in 3 Year 6 classrooms. Record how many pencils there are in total.",
          table: [["Class", "Pencils"], ["6Y", "2562"], ["6B", "78"], ["6G", "349"]],
          interact: [
            { kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 2, H: 8, T: 17, O: 19 }, target: 2989, need: "standard", hint: "These are the three classes added column by column. Group 10 into 1 of the next column." },
            { kind: "input", fields: [{ label: "Total pencils", value: 2989 }] }
          ],
          cubes: { ops: ["+"], solve: [{ t: "Make a friendly number", s: "78 + 349 = 427 (78 + 22 = 100, + 327). 2562 + 427 = 2989." }, { t: "Partition", s: "2562 + 300 = 2862, + 40 = 2902 + 87 = 2989." }] },
          answer: "**2989 pencils**. 2562 + 78 + 349 = 2989."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Arlo wanted to track the growth of a new plant in his garden over time. Identify the type of data display that would be most suitable to represent this information.",
          interact: [{ kind: "choose", rows: [{ t: "Best display", options: ["pie chart", "line graph", "picture graph", "dot plot"], a: 1 }] }],
          answer: "A **line graph**. It shows how one measurement (the plant's height) changes over time."
        }
      ],
      // Review 4
      [
        {
          type: "tf", focus: "Representing quantity fractions B",
          prompt: "In this shape, blue = [2/6] and pink = [2/3].",
          answer: true,
          explain: "The rectangle splits into 6 equal parts: 2 are blue ([2/6]) and 4 are pink ([4/6] = [2/3]).",
          interact: [{ kind: "classify", view: [600, 280], total: 6, mark: "outline", hint: "Tap a colour, then tap each part of that colour. Watch the fraction count.",
            cats: [{ k: "b", t: "Blue", c: BL }, { k: "p", t: "Pink", c: "#C2185B" }],
            shapes: grid(20, 20, 186, 120, [[PK, PK, BL], [BL, PK, PK]], { [BL]: "b", [PK]: "p" }) }]
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Record the fraction of the hexagon for each of the 3 parts.",
          interact: [
            { kind: "classify", view: [300, 260], total: 6, mark: "outline", hint: "The dashed lines cut the hexagon into 6 equal triangles. Tap a colour, then tap its triangles.",
              cats: [{ k: "g", t: "Green", c: "#008A3E" }, { k: "y", t: "Yellow", c: "#C9A400" }, { k: "p", t: "Purple", c: P }],
              shapes: [tri(0, P, "p"), tri(1, P, "p"), tri(2, P, "p"), tri(3, G, "g"), tri(4, G, "g"), tri(5, Y, "y", ),
                { circle: [-50, -50, 1], fill: "none", a: null, deco: "<g stroke='#17233F' stroke-width='1.5' stroke-dasharray='5 4' pointer-events='none'>" + hx.map((v) => "<line x1='150' y1='130' x2='" + v[0] + "' y2='" + v[1] + "'/>").join("") + "</g><polygon points='" + hx.map((v) => v.join(",")).join(" ") + "' fill='none' stroke='#17233F' stroke-width='3' pointer-events='none'/>" }] },
            { kind: "input", fields: [{ label: "Green", value: 1 / 3, placeholder: "a/b" }, { label: "Yellow", value: 1 / 6, placeholder: "a/b" }, { label: "Purple", value: 0.5, placeholder: "a/b" }] }
          ],
          answer: "Green = [2/6] = **[1/3]** · Yellow = **[1/6]** · Purple = [3/6] = **[1/2]**"
        },
        {
          type: "sr", focus: "Geometric measure A: Length",
          prompt: "Which side lengths are needed to determine the perimeter of the basketball court? Communicate your reasoning.",
          img: "u24-court.png",
          interact: [
            { kind: "sides", label: "Basketball court with sides A, B, C and D", view: [460, 260], fill: "#7A7F87",
              poly: [[60, 40], [400, 40], [400, 220], [60, 220]],
              labels: [{ x: 40, y: 135, t: "A", anchor: "end" }, { x: 230, y: 28, t: "B" }, { x: 420, y: 135, t: "C", anchor: "start" }, { x: 230, y: 248, t: "D" }] },
            { kind: "choose", rows: [{ t: "Sides needed", options: ["All four: A, B, C and D", "One long side and one short side (e.g. B and A)", "Only one side"], a: 1 }] }
          ],
          answer: "Only **one length and one width**, such as **B and A**. A rectangle's opposite sides are equal, so A = C and B = D. Perimeter = 2 × (length + width)."
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "A gardener planted 1500 flowers. 420 were damaged in a storm and removed and 350 new flowers were planted. The flowers were then evenly arranged into 13 beds. How many flowers are there in total now? How many flowers are in each flower bed?",
          interact: [
            { kind: "jumps", start: 1500, back: true, steps: [100, 50, 20, 10], hint: "Jump back 420, then forward 350." },
            { kind: "pack", mode: "pack", size: 110, total: 1430, thing: "flowers", label: "bed", hint: "Fill each bed with 110 flowers. How many beds do you fill?" },
            { kind: "input", fields: [{ label: "Flowers now", value: 1430 }, { label: "Flowers in each bed", value: 110 }] }
          ],
          cubes: { ops: ["−", "+", "÷"], solve: [{ t: "Step by step", s: "1500 − 420 = 1080. 1080 + 350 = 1430. 1430 ÷ 13 = 110." }, { t: "Check with multiplication", s: "13 × 110 = 1300 + 130 = 1430." }] },
          answer: "**1430 flowers**, with **110 in each bed** (1430 ÷ 13).",
          explain: "On the slide the flowers go into 14 beds, but 1430 ÷ 14 doesn't share evenly (102 remainder 2). The question now uses 13 beds, which gives 110 each."
        },
        {
          type: "sr", focus: "Chance A",
          prompt: "A die is rolled once. Represent the probability of rolling a 4 as a fraction.",
          interact: [
            { kind: "combos", pick: 1, total: 6, items: [["1", "#2F6FE4", 1], ["2", "#2F6FE4", 1], ["3", "#2F6FE4", 1], ["4", "#D9480F", 1], ["5", "#2F6FE4", 1], ["6", "#2F6FE4", 1]] },
            { kind: "input", fields: [{ label: "P(4) =", value: 1 / 6, placeholder: "a/b" }] }
          ],
          answer: "**[1/6]**. There is 1 way to roll a 4 out of 6 equally likely outcomes."
        }
      ],
      // Review 5
      [
        {
          type: "mc", focus: "Additive relations A",
          prompt: "Sadie said '4009 − 2997 is the same as 4012 − 3000, which equals 1012'. Which strategy did Sadie use?",
          options: ["Constant difference", "Levelling", "Addition for subtraction", "Bridging"],
          answer: 0,
          explain: "She added 3 to both numbers. The difference stays the same, and 4012 − 3000 is easy.",
          interact: [{ kind: "jumps", start: 2997, end: 4009, steps: [3, 1000, 12], hint: "Show the gap from 2997 to 4009. Then imagine sliding both ends up by 3." }]
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Complete the number sentences: [2/6] = 2 ÷ ?, [3/8] = ? ÷ 8, 4 ÷ 6 = ?, 7 ÷ 10 = ?",
          interact: [
            { kind: "pack", mode: "share", n: 6, total: 2, thing: "pizzas", label: "person", hint: "Share 2 pizzas between 6 people. Each person gets part of a pizza." },
            { kind: "input", fields: [{ label: "[2/6] = 2 ÷", value: 6 }, { label: "[3/8] = ___ ÷ 8", value: 3 }, { label: "4 ÷ 6 =", accept: ["4/6", "2/3"], placeholder: "a/b" }, { label: "7 ÷ 10 =", accept: ["7/10", "0.7"], placeholder: "a/b" }] }
          ],
          answer: "[2/6] = 2 ÷ **6** · [3/8] = **3** ÷ 8 · 4 ÷ 6 = **[4/6]** · 7 ÷ 10 = **[7/10]**. The numerator is divided by the denominator."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "This rectangle has a perimeter of 24 cm and side dimensions of 2 cm and 10 cm. Record the dimensions of a different rectangle that has the same perimeter.",
          interact: [
            { kind: "sides", label: "Rectangle, 10 cm by 2 cm", view: [480, 150], fill: "#9FB4E8",
              poly: [[60, 40], [420, 40], [420, 112], [60, 112]],
              dims: [{ from: [62, 22], to: [418, 22] }, { from: [440, 42], to: [440, 110] }],
              labels: [{ x: 240, y: 16, t: "10 cm" }, { x: 450, y: 82, t: "2 cm", anchor: "start" }] },
            { kind: "pair", labels: ["length", "width"], unit: "cm", rule: "perimeter", target: 24, exclude: [[10, 2]] }
          ],
          answer: "Answers vary. Length + width must make 12 cm: **9 × 3**, 8 × 4, 7 × 5, 6 × 6 or 11 × 1."
        },
        {
          type: "sr", focus: "Represents numbers A: Decimals and percentages",
          prompt: "Record the place value of each digit in the decimal 5.67",
          interact: [
            { kind: "pv", cols: ["O", "t", "h"], start: 5.67 },
            { kind: "input", fields: [{ label: "5 is worth", value: 5 }, { label: "6 is worth", value: 0.6 }, { label: "7 is worth", value: 0.07 }] }
          ],
          answer: "5 ones (**5**), 6 tenths (**0.6**), 7 hundredths (**0.07**)."
        },
        {
          type: "sr", focus: "Non-spatial measure A: Mass",
          prompt: "Identify the appropriate unit and device to measure the weight of a full suitcase.",
          interact: [{ kind: "choose", rows: [
            { t: "Unit", options: ["grams", "kilograms", "tonnes"], a: 1 },
            { t: "Device", options: ["kitchen scale", "bathroom or luggage scale", "balance with marbles"], a: 1 }] }],
          answer: "**Kilograms**, using **bathroom or luggage scales**. A full suitcase is about 15 to 25 kg."
        }
      ],
      // Review 6
      [
        {
          type: "tf", focus: "Additive relations A",
          prompt: "Using an algorithm would be an efficient strategy to solve 7 896 − 7 816.",
          answer: false,
          explain: "The numbers are close together, so count on: 7816 + 80 = 7896. The difference is 80, which is quick to work out mentally.",
          interact: [{ kind: "jumps", start: 7816, end: 7896, steps: [10, 80], hint: "Count on from 7816 to 7896." }]
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Record the fraction of the rectangle for each of the 3 colours.",
          interact: [
            { kind: "classify", view: [520, 300], total: 10, mark: "outline", hint: "The rectangle is 10 equal parts. Tap a colour, then tap its parts.",
              cats: [{ k: "g", t: "Green", c: "#008A3E" }, { k: "p", t: "Purple", c: P }, { k: "y", t: "Yellow", c: "#C9A400" }],
              shapes: grid(20, 20, 240, 52, [[G, P], [P, P], [P, G], [Y, Y], [Y, Y]], { [G]: "g", [P]: "p", [Y]: "y" }) },
            { kind: "input", fields: [{ label: "Green", value: 0.2, placeholder: "a/b" }, { label: "Purple", value: 0.4, placeholder: "a/b" }, { label: "Yellow", value: 0.4, placeholder: "a/b" }] }
          ],
          answer: "Green = [2/10] = **[1/5]** · Purple = [4/10] = **[2/5]** · Yellow = [4/10] = **[2/5]**",
          explain: "The slide's picture is redrawn as 10 equal parts (2 columns by 5 rows); the yellow band is 2 rows deep."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "A plane took off at 13:20 and landed at 17:30. Calculate the duration of the flight. Communicate your reasoning.",
          interact: [
            { kind: "jumps", time: "24", start: 800, end: 1050, steps: [10, 30, 60], hint: "Jump to the next o'clock, then jump in hours." },
            { kind: "input", fields: [{ label: "Hours", value: 4 }, { label: "Minutes", value: 10 }] }
          ],
          cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "13:20 + 40 min = 14:00, + 3 h = 17:00, + 30 min = 17:30. 40 + 30 = 70 min = 1 h 10 min. Total 4 h 10 min." }, { t: "Hours then minutes", s: "13:20 to 17:20 is 4 hours. 17:20 to 17:30 is 10 minutes." }] },
          answer: "**4 hours 10 minutes**"
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "Maria ran 4.98 km today and 5.23 km yesterday. Calculate the total distance she ran. Communicate your strategy.",
          interact: [
            { kind: "jumps", start: 5.23, back: true, steps: [5, 0.02, 0.01], hint: "Compensation: 4.98 is 5 − 0.02. Jump + 5, then back 0.02." },
            { kind: "input", fields: [{ label: "Total", value: 10.21, suffix: "km" }] }
          ],
          cubes: { ops: ["+"], solve: [{ t: "Compensation", s: "4.98 is 0.02 less than 5. 5.23 + 5 = 10.23, − 0.02 = 10.21 km." }, { t: "Partition", s: "4 + 5 = 9. 0.98 + 0.23 = 1.21. 9 + 1.21 = 10.21 km." }] },
          answer: "**10.21 km**"
        },
        {
          type: "sr", focus: "Non-spatial measure A: Mass",
          prompt: "Complete each sentence: 2.08 kg is the same as ___ kilograms and ___ grams. 12.80 kg is the same as ___ kilograms and ___ grams. 6.45 kg is the same as ___ kilograms and ___ grams.",
          interact: [
            { kind: "pv", cols: ["T", "O", "t", "h", "th"], start: 2.08, hint: "1 thousandth of a kilogram is 1 gram. 0.08 kg = 80 thousandths = 80 g." },
            { kind: "input", fields: [
              { label: "2.08 kg =", value: 2, suffix: "kg" }, { label: "and", value: 80, suffix: "g" },
              { label: "12.80 kg =", value: 12, suffix: "kg" }, { label: "and", value: 800, suffix: "g" },
              { label: "6.45 kg =", value: 6, suffix: "kg" }, { label: "and", value: 450, suffix: "g" }] }
          ],
          answer: "2 kg **80 g** · 12 kg **800 g** · 6 kg **450 g**"
        }
      ],
      // Review 7
      [
        {
          type: "mc", focus: "Additive relations A",
          prompt: "Jeremiah needs to solve 4000 + 1273 + 65. Which strategy would be the most efficient?",
          options: ["Constant difference", "Levelling", "Addition for subtraction", "Using place value to partition"],
          answer: 3,
          explain: "The numbers don't overlap in their places much: 4000 + 1000 = 5000, + 273 + 65 = 5338.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 5, H: 2, T: 13, O: 8 }, target: 5338, need: "standard" }]
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Draw a diagram to show how much more [9/10] is than [4/5].",
          interact: [
            { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6, 7, 8], hint: "This strip shows [9/10]." },
            { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6, 7], hint: "This strip shows [4/5] = [8/10]." },
            { kind: "input", fields: [{ label: "How much more?", value: 0.1, placeholder: "a/b" }] }
          ],
          answer: "[4/5] = [8/10], so [9/10] is **[1/10]** more."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Penny woke up at 08:10 and fell asleep that night at 19:40. How long was she awake for? Communicate your reasoning.",
          interact: [
            { kind: "jumps", time: "24", start: 490, end: 1180, steps: [10, 30, 60], hint: "Jump to the next o'clock, then in hours, then the extra minutes." },
            { kind: "input", fields: [{ label: "Hours", value: 11 }, { label: "Minutes", value: 30 }] }
          ],
          cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "08:10 + 50 min = 09:00, + 10 h = 19:00, + 40 min = 19:40. 50 + 40 = 90 min = 1 h 30 min. Total 11 h 30 min." }, { t: "Hours then minutes", s: "08:10 to 19:10 is 11 hours. 19:10 to 19:40 is 30 minutes." }] },
          answer: "**11 hours 30 minutes**"
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "Levi went on a road trip from Penrith to Bathurst. Calculate the total distance he travelled.",
          table: [["Start", "Stop", "Kilometres"], ["Penrith", "Katoomba", "46.6"], ["Katoomba", "Lithgow", "38.6"], ["Lithgow", "Bathurst", "59.9"], ["Bathurst", "Orange", "57.8"], ["Orange", "Parkes", "99.1"]],
          interact: [
            { kind: "bar", whole: { v: 145.1, l: "Penrith to Bathurst", n: "? km" , hide: true }, parts: [{ v: 46.6, l: "46.6", n: "to Katoomba" }, { v: 38.6, l: "38.6", n: "to Lithgow" }, { v: 59.9, l: "59.9", n: "to Bathurst" }], hint: "Only the legs from Penrith to Bathurst count. Tap the ? to reveal the total." },
            { kind: "input", fields: [{ label: "Total distance", value: 145.1, suffix: "km" }] }
          ],
          cubes: { ops: ["+"], solve: [{ t: "Compensation", s: "59.9 is 60 − 0.1. 46.6 + 38.6 = 85.2. 85.2 + 60 = 145.2, − 0.1 = 145.1 km." }, { t: "Wholes then tenths", s: "46 + 38 + 59 = 143. 0.6 + 0.6 + 0.9 = 2.1. 143 + 2.1 = 145.1 km." }] },
          answer: "**145.1 km** (46.6 + 38.6 + 59.9). The Bathurst to Parkes legs are not part of his trip."
        },
        {
          type: "sr", focus: "Non-spatial measure A: Time",
          prompt: "Explain why 24-hour time is used and provide an example to justify your answer.",
          interact: [
            { kind: "clock", time: "3:00", h24: true },
            { kind: "choose", rows: [{ t: "Why use 24-hour time?", options: ["It is quicker to say", "There is no confusion between am and pm", "Clocks only show 24 hours"], a: 1 }] },
            { kind: "input", fields: [{ label: "3:00 pm in 24-hour time", accept: ["15:00"], placeholder: "hh:mm" }] }
          ],
          answer: "It avoids **mixing up am and pm**, so it is used for timetables, flights and hospitals. For example, **15:00** can only mean 3 pm, but '3:00' could be morning or afternoon."
        }
      ],
      // Review 8
      [
        {
          type: "tf", focus: "Additive relations A",
          prompt: "Using a calculator is the most efficient way to solve 2 000 + 400 + 400 + 6 + 1.",
          answer: false,
          explain: "The parts are friendly place value amounts: 2000 + 800 + 7 = 2807. It's quicker in your head.",
          interact: [{ kind: "group", items: [2000, 400, 400, 6, 1] }]
        },
        {
          type: "sr", focus: "Representing quantity fractions B",
          prompt: "Draw a diagram to show how much more [6/8] is than [2/4].",
          interact: [
            { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5], hint: "This strip shows [6/8]." },
            { kind: "shade", parts: 8, pre: [0, 1, 2, 3], hint: "This strip shows [2/4] = [4/8]." },
            { kind: "input", fields: [{ label: "How much more?", value: 0.25, placeholder: "a/b" }] }
          ],
          answer: "[2/4] = [4/8], so [6/8] is **[2/8]** = [1/4] more."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "Complete the following sentences: 13.5 cm = ___ cm and ___ mm. 12.6 km = ___ km and ___ m. 7.5 m = ___ m and ___ cm.",
          interact: [
            { kind: "marker", min: 13, max: 14, divs: 10, majorEvery: 5, labels: [13, 13.5, 14], label: "13.5 cm", hint: "A ruler from 13 cm to 14 cm. Each small step is 1 mm." },
            { kind: "input", fields: [
              { label: "13.5 cm =", value: 13, suffix: "cm" }, { label: "and", value: 5, suffix: "mm" },
              { label: "12.6 km =", value: 12, suffix: "km" }, { label: "and", value: 600, suffix: "m" },
              { label: "7.5 m =", value: 7, suffix: "m" }, { label: "and", value: 50, suffix: "cm" }] }
          ],
          answer: "13 cm **5 mm** · 12 km **600 m** · 7 m **50 cm**"
        },
        {
          type: "sr", focus: "Additive relations B",
          prompt: "Estella is travelling by plane and can only take 7 kg in carry-on luggage. Calculate the total weight of Estella's bag to determine if she is under the 7 kg weight limit.",
          list: ["Electronic devices = 1.15 kg", "Snacks and water bottle = 1.7 kg", "Clothes = 2.8 kg", "Shoes = 1.95 kg"],
          interact: [
            { kind: "group", items: ["1.15", "1.7", "2.8", "1.95"] },
            { kind: "input", fields: [{ label: "Total weight", value: 7.6, suffix: "kg" }] },
            { kind: "choose", rows: [{ t: "Is she under 7 kg?", options: ["Yes", "No"], a: 1 }] }
          ],
          cubes: { ops: ["+"], also: ["−"], note: "Then compare the total with 7 kg.", solve: [{ t: "Make friendly pairs", s: "1.15 + 1.95 = 3.1. 1.7 + 2.8 = 4.5. 3.1 + 4.5 = 7.6 kg." }, { t: "Compare", s: "7.6 kg is 0.6 kg more than 7 kg, so she is over the limit." }] },
          answer: "**7.6 kg**, so she is **0.6 kg over** the 7 kg limit."
        },
        {
          type: "sr", focus: "Non-spatial measure A: Time",
          prompt: "Sarah is struggling to read the 24-hour train schedule and asks her friend to help convert the departure time of 18:45 into 12-hour format. Record the time her friend should tell her.",
          interact: [
            { kind: "clock", time: "6:45", h24: true },
            { kind: "input", fields: [{ label: "12-hour time", accept: ["6:45 pm", "6:45pm"], placeholder: "h:mm am/pm" }] }
          ],
          cubes: { ops: ["−"], solve: [{ t: "Subtract 12", s: "18 − 12 = 6, so 18:45 is 6:45 pm." }, { t: "Use the clock", s: "The red number 18 sits next to the 6, so it is 6:45 in the evening." }] },
          answer: "**6:45 pm** (18 − 12 = 6)."
        }
      ]
    ]
  });
})();
