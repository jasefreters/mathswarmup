/*
  Stage 3 Year B, Unit 25 — Review of learning (Term 1, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 1, ls: 5, unit: 25,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 25 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "How would you record 3 divided by 4 as a fraction?",
        options: ["[3/4]", "[1/4]", "[4/3]", "[1/3]"],
        answer: 0,
        explain: "Share 3 squares between 4 people: each person gets [1/4] of every square, which is [3/4] of a square. The dividend is the numerator.",
        interact: [{ kind: "shade", parts: 4, hint: "This is one square cut into quarters. Each person gets one quarter of each of the 3 squares." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Describe how the distribution of data is different in these graphs.",
        interact: [
          { kind: "bargraph", max: 30, step: 5, minor: 1, legendW: 100, ylabel: "Temperature (°C)", xlabel: "Sydney average temperature", label: "Bar graph of Sydney's average temperature each month",
            series: [{ l: "Sydney", c: "#00BE64" }],
            groups: [["J", 28], ["F", 28], ["M", 27], ["A", 24], ["M", 21], ["J", 18], ["J", 17], ["A", 21], ["S", 23], ["O", 23], ["N", 26], ["D", 28]].map(([l, v]) => ({ l, v: [v] })) },
          { kind: "bargraph", max: 35, step: 5, minor: 1, legendW: 100, ylabel: "Temperature (°C)", xlabel: "Darwin average temperature", label: "Bar graph of Darwin's average temperature each month",
            series: [{ l: "Darwin", c: "#00BE64" }],
            groups: [["J", 32], ["F", 32], ["M", 32], ["A", 34], ["M", 34], ["J", 32], ["J", 31], ["A", 33], ["S", 34], ["O", 35], ["N", 34], ["D", 34]].map(([l, v]) => ({ l, v: [v] })) },
          { kind: "choose", rows: [
            { t: "Whose temperatures change more across the year?", options: ["Sydney", "Darwin"], a: 0 },
            { t: "Whose temperatures stay high all year?", options: ["Sydney", "Darwin"], a: 1 },
            { t: "Sydney's coolest months are", options: ["December–February", "June–July", "October–November"], a: 1 }] }
        ],
        answer: "Sydney's temperatures dip in the middle of the year (about 17–18 °C in June and July) and rise to about 28 °C in summer, so the bars make a U shape. Darwin's bars are almost level: about 31–35 °C all year."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Which is larger [2/3] or [3/4]? Communicate your reasoning by placing both fractions on a number line.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 12, tol: 0.03, items: [["[2/3]", 2 / 3], ["[3/4]", 0.75]] },
          { kind: "choose", rows: [{ t: "Larger", options: ["[2/3]", "[3/4]"], a: 1 }] }
        ],
        answer: "**[3/4]** is larger. In twelfths, [2/3] = [8/12] and [3/4] = [9/12], so [3/4] sits further along the number line."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Alan ran 2.396 km on Monday. How many metres did he run? Alan ran 3187 m on Friday. How many kilometres did he run?",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 2.396, shift: true, hint: "This shows 2.396 km. 1 km = 1000 m, so press × 10 three times." },
          { kind: "input", fields: [{ label: "Monday", value: 2396, suffix: "m" }, { label: "Friday", value: 3.187, suffix: "km" }] }
        ],
        cubes: { ops: ["×", "÷"], solve: [{ t: "Kilometres to metres", s: "1 km = 1000 m. 2.396 × 1000 = 2396 m: every digit moves 3 places left." }, { t: "Metres to kilometres", s: "3187 ÷ 1000 = 3.187 km: every digit moves 3 places right." }] },
        answer: "Monday: **2396 m**. Friday: **3.187 km**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Draw 3 types of triangles: an equilateral, an isosceles and a scalene. Describe the properties that identify and classify each triangle.",
        interact: [
          { kind: "sketch" },
          { kind: "choose", rows: [
            { t: "Equilateral", options: ["3 equal sides and 3 equal angles", "2 equal sides and 2 equal angles", "no equal sides or angles"], a: 0 },
            { t: "Isosceles", options: ["3 equal sides and 3 equal angles", "2 equal sides and 2 equal angles", "no equal sides or angles"], a: 1 },
            { t: "Scalene", options: ["3 equal sides and 3 equal angles", "2 equal sides and 2 equal angles", "no equal sides or angles"], a: 2 }] }
        ],
        answer: "Equilateral: **3 equal sides and 3 equal angles** (each 60°). Isosceles: **2 equal sides** and 2 equal angles. Scalene: **no equal sides** and no equal angles."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "If I divided 2 brownies between 3 children, each child would get [2/3].",
        answer: true,
        explain: "Cut each brownie into thirds. Each child gets [1/3] of each brownie: [1/3] + [1/3] = [2/3] of a brownie. 2 ÷ 3 = [2/3].",
        interact: [
          { kind: "shade", parts: 3, hint: "Brownie 1, cut into thirds. Shade one child's share." },
          { kind: "shade", parts: 3, hint: "Brownie 2. Shade the same child's share." }
        ]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What is the range of pulse rates after exercise?",
        img: "u25-pulse.png",
        interact: [
          { kind: "jumps", start: 96, end: 124, steps: [1, 4, 10], hint: "The lowest orange bar is Kenji (about 96). The highest is Tahnee (about 124). Count on from the lowest to the highest." },
          { kind: "input", fields: [{ label: "Highest", min: 122, max: 125, suffix: "BPM" }, { label: "Lowest", min: 95, max: 97, suffix: "BPM" }, { label: "Range", min: 26, max: 30, suffix: "BPM" }] }
        ],
        answer: "About **28 BPM**. The highest after-exercise rate is about 124 (Tahnee) and the lowest is about 96 (Kenji): 124 − 96 = 28.",
        explain: "The bars are read from the graph, so answers from 26 to 30 are accepted."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Record the equivalent fractions for half in quarters, eighths, sixths and tenths.",
        interact: [
          { kind: "shade", parts: 4, hint: "Quarters: shade one half." },
          { kind: "shade", parts: 8, hint: "Eighths: shade one half." },
          { kind: "shade", parts: 6, hint: "Sixths: shade one half." },
          { kind: "shade", parts: 10, hint: "Tenths: shade one half." },
          { kind: "input", fields: [{ label: "Quarters", accept: ["2/4"], placeholder: "a/b" }, { label: "Eighths", accept: ["4/8"], placeholder: "a/b" }, { label: "Sixths", accept: ["3/6"], placeholder: "a/b" }, { label: "Tenths", accept: ["5/10"], placeholder: "a/b" }] }
        ],
        answer: "[1/2] = **[2/4]** = **[4/8]** = **[3/6]** = **[5/10]**. The numerator is always half the denominator."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "1 km = 1000 m = 100 000 cm = 1 000 000 mm. Emma jogged 3.9 kilometres around the park, then walked 1890 metres to the nearby café and later cycled 410 000 centimetres to her friend's house. Which distance was the longest? Explain your thinking.",
        interact: [
          { kind: "numberline", min: 0, max: 5, ticks: 10, tol: 0.15, items: [["jog", 3.9], ["walk", 1.89], ["cycle", 4.1]] },
          { kind: "input", fields: [{ label: "Walk: 1890 m =", value: 1.89, suffix: "km" }, { label: "Cycle: 410 000 cm =", value: 4.1, suffix: "km" }] },
          { kind: "choose", rows: [{ t: "Longest", options: ["jogging", "walking", "cycling"], a: 2 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Change everything to km", s: "3.9 km. 1890 m ÷ 1000 = 1.89 km. 410 000 cm ÷ 100 000 = 4.1 km. 4.1 km is the longest." }, { t: "Change everything to m", s: "3.9 km = 3900 m. 1890 m. 410 000 cm ÷ 100 = 4100 m. 4100 m is the longest." }] },
        answer: "The **cycle**: 410 000 cm = 4.1 km. The jog was 3.9 km and the walk was 1.89 km."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "The area of this garden bed is 72 m². One side is 12 m long. What is the missing length of the garden bed? Communicate your reasoning.",
        interact: [
          { kind: "array", rows: 12, cols: 1, max: 12, total: 72, showTotal: true, hint: "Each square is 1 m². Keep 12 rows and add columns until there are 72 squares." },
          { kind: "input", fields: [{ label: "Missing length", value: 6, suffix: "m" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "Area = length × width. 72 ÷ 12 = 6 m." }, { t: "Think multiplication", s: "12 × ? = 72. 12 × 6 = 72, so the missing length is 6 m." }] },
        answer: "**6 m**. 12 × 6 = 72 m²."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "3 chocolate blocks are shared equally between 5 children. What fraction of chocolate would each child receive?",
        options: ["[3/4]", "[3/5]", "[5/3]", "[2/5]"],
        answer: 1,
        explain: "Cut each block into fifths. Each child gets [1/5] of each of the 3 blocks: [3/5] of a block. 3 ÷ 5 = [3/5].",
        interact: [{ kind: "shade", parts: 5, hint: "One block cut into fifths. Each child gets one fifth of every block." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Which state has the highest number of short-term visitors? Which has the lowest number of short-term visitors? Where might you see this type of data representation?",
        img: "u25-visitors.png",
        interact: [
          { kind: "choose", rows: [
            { t: "Highest", options: ["Queensland", "New South Wales", "Victoria", "Western Australia"], a: 1 },
            { t: "Where might you see it?", options: ["a news or tourism report", "a recipe book", "a bus timetable"], a: 0 }] },
          { kind: "select", hint: "Tap every state or territory in the lowest group (0 to less than 50 000).", items: [["Northern Territory", true], ["South Australia", true], ["Tasmania", true], ["Western Australia", false], ["Victoria", false], ["Queensland", false]] }
        ],
        answer: "Highest: **New South Wales** (200 000 to less than 250 000). Lowest: **the Northern Territory, South Australia and Tasmania** are all in the lowest group. You might see a map like this in a news report or a tourism report.",
        explain: "Three states and territories share the lowest colour, so the map can't show which single one is lowest."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Why do you need a common whole when comparing fractions? Communicate your reasoning.",
        img: "u25-wholes.png",
        interact: [
          { kind: "shade", parts: 2, pre: [0], hint: "Same whole: one half." },
          { kind: "shade", parts: 4, pre: [0], hint: "Same whole: one quarter." },
          { kind: "choose", rows: [
            { t: "In the picture, which shaded part is bigger?", options: ["A ([1/4] of a big whole)", "B ([1/2] of a small whole)"], a: 0 },
            { t: "With the same whole, which is bigger?", options: ["[1/2]", "[1/4]"], a: 0 },
            { t: "So we need a common whole because", options: ["fractions can only be compared fairly when the wholes are the same size", "fractions with bigger denominators are always bigger", "the shaded parts must be the same colour"], a: 0 }] }
        ],
        answer: "In the picture, [1/4] of the big rectangle (A) looks bigger than [1/2] of the small one (B), because the wholes are different sizes. When the whole is the same, [1/2] is always bigger than [1/4]. **Fractions can only be compared fairly when they are parts of the same whole.**"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Cristian is looking for a walk that is about 4 kilometres. Which walk is closest to that distance? Communicate your thinking.",
        interact: [
          { kind: "cells", cols: 4, w: 150, free: true, msg: "1 km = 1000 m = 100 000 cm. To change cm to m, divide by 100.", grid: [
            ["#Walk", "#centimetres (cm)", "#metres (m)", "#kilometres (km)"],
            ["Goanna Gap", "870 000", { v: 8700 }, "8.7"],
            ["Eagle Lookout", { v: 427800 }, "4278", { v: 4.278 }],
            ["Ironbark Ridge", "395 000", { v: 3950 }, { v: 3.95 }]] },
          { kind: "choose", rows: [{ t: "Closest to 4 km", options: ["Goanna Gap Walk", "Eagle Lookout Trail", "Ironbark Ridge Walk"], a: 2 }] }
        ],
        cubes: { ops: ["÷"], also: ["×", "−"], solve: [{ t: "Change everything to km", s: "8.7 km, 4278 m = 4.278 km, 395 000 cm = 3.95 km. 3.95 is only 0.05 km from 4." }, { t: "Change everything to m", s: "8700 m, 4278 m, 3950 m. 4000 − 3950 = 50 m, but 4278 − 4000 = 278 m." }] },
        answer: "**Ironbark Ridge Walk**: 395 000 cm = 3950 m = 3.95 km, only 50 m short of 4 km. Eagle Lookout (4.278 km) is 278 m over."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name this 3D object. Describe 3 properties of the object.",
        img: "u25-pyramid.png",
        interact: [
          { kind: "choose", rows: [{ t: "Name", options: ["square pyramid", "pentagonal pyramid", "hexagonal pyramid", "pentagonal prism"], a: 1 }] },
          { kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 10 }, { label: "Vertices", value: 6 }] }
        ],
        answer: "A **pentagonal pyramid**. It has **6 faces** (a pentagon base and 5 triangles), **10 edges** and **6 vertices**. The triangles meet at one apex."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "2 chocolate bars are shared equally between 3 children. Each child will receive [1/3] of a chocolate bar.",
        answer: false,
        explain: "2 ÷ 3 = [2/3]. Each child gets [1/3] of each bar, which is [2/3] of a bar. Note: the slide says \"[1/3] of the chocolate bars\", which is true for all the chocolate together, so it has been reworded to \"of a chocolate bar\".",
        interact: [
          { kind: "shade", parts: 3, hint: "Bar 1, cut into thirds. Shade one child's share." },
          { kind: "shade", parts: 3, hint: "Bar 2. Shade the same child's share." }
        ]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What was the highest maximum temperature recorded? What was the lowest minimum temperature recorded?",
        img: "u25-beijing.png",
        interact: [
          { kind: "marker", min: -12, max: 10, ticks: 1, label: "?", hint: "Use this scale like the graph's. Slide the pin to each temperature you read." },
          { kind: "input", fields: [{ label: "Highest maximum", value: 9, suffix: "°C" }, { label: "Lowest minimum", value: -10, suffix: "°C" }] }
        ],
        answer: "Highest maximum: **9 °C** (10 January). Lowest minimum: **−10 °C** (16 January)."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "What fraction of the whole shape is green? Blue? Pink? Orange and pink combined?",
        interact: [
          { kind: "classify", view: [300, 280], total: 8, mark: "outline", hint: "The dashed lines cut the shape into 8 equal parts. Choose a colour, then tap its parts.",
            cats: [{ k: "g", t: "green", c: "#2E8B2E" }, { k: "b", t: "blue", c: "#1F6FD1" }, { k: "p", t: "pink", c: "#D6408B" }, { k: "o", t: "orange", c: "#D9480F" }],
            shapes: [
              { p: "10,10 80,10 80,140 10,140", a: "g", fill: "#7ED957" }, { p: "80,10 150,10 150,140 80,140", a: "g", fill: "#7ED957" },
              { p: "150,10 220,10 220,140 150,140", a: "g", fill: "#7ED957" }, { p: "220,10 290,10 290,140 220,140", a: "g", fill: "#7ED957" },
              { p: "10,140 80,140 80,270 10,270", a: "b", fill: "#38B6FF" }, { p: "80,140 150,140 150,270 80,270", a: "b", fill: "#38B6FF" },
              { p: "150,140 290,140 290,205 150,205", a: "p", fill: "#FF66C4" }, { p: "150,205 290,205 290,270 150,270", a: "o", fill: "#FF7A1F",
                deco: "<path d='M80 10 V140 M150 10 V140 M220 10 V140 M80 140 V270' stroke='#fff' stroke-width='2' stroke-dasharray='6 5' pointer-events='none'/>" }] },
          { kind: "input", fields: [{ label: "Green", value: 0.5, placeholder: "a/b" }, { label: "Blue", value: 0.25, placeholder: "a/b" }, { label: "Pink", value: 0.125, placeholder: "a/b" }, { label: "Orange and pink", value: 0.25, placeholder: "a/b" }] }
        ],
        answer: "Green **[1/2]** ([4/8]) · Blue **[1/4]** ([2/8]) · Pink **[1/8]** · Orange and pink **[1/4]** ([2/8])"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Bec measured the perimeter of a basketball court as 87.78 m. Sally measured the perimeter of a futsal field as 1760 cm. Which has the largest perimeter? Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 100, ticks: 0.1, labelStep: 20, tol: 3, items: [["basketball court", 87.78], ["futsal field", 17.6]] },
          { kind: "input", fields: [{ label: "1760 cm =", value: 17.6, suffix: "m" }] },
          { kind: "choose", rows: [{ t: "Largest perimeter", options: ["basketball court", "futsal field"], a: 0 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Change cm to m", s: "1760 cm ÷ 100 = 17.6 m. 87.78 m > 17.6 m." }, { t: "Change m to cm", s: "87.78 m × 100 = 8778 cm. 8778 cm > 1760 cm." }] },
        answer: "The **basketball court**. 1760 cm = 17.6 m, and 87.78 m is much more than 17.6 m.",
        explain: "A real futsal field is much bigger than 17.6 m around, but the comparison uses the measurements given."
      },
      {
        type: "sr", focus: "Non spatial measure A",
        prompt: "Convert the following times into 12-hour time: 09:45, 13:15, 19:20",
        interact: [
          { kind: "clock", time: "1:15", h24: true },
          { kind: "input", fields: [{ label: "09:45", accept: ["9:45 am"], placeholder: "h:mm am/pm" }, { label: "13:15", accept: ["1:15 pm"], placeholder: "h:mm am/pm" }, { label: "19:20", accept: ["7:20 pm"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "09:45 = **9:45 am** · 13:15 = **1:15 pm** · 19:20 = **7:20 pm**. For hours after 12, subtract 12 and use pm."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "How do you write [1/2] as a percentage?",
        options: ["12%", "20%", "75%", "50%"],
        answer: 3,
        explain: "Per cent means out of 100. [1/2] = [50/100] = 50%.",
        interact: [{ kind: "shade", parts: 10, pct: true, hint: "Shade half of the strip." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What was the range of student responses for K-2? What was the mode of student responses for 3-6?",
        interact: [
          { kind: "bargraph", max: 22, step: 2, legendW: 100, ylabel: "Number of students", xlabel: "Places", label: "Bar graph of favourite lunchtime places for K to 2 and 3 to 6",
            series: [{ l: "K to 2", c: "#4472C4" }, { l: "3 to 6", c: "#ED7D31" }],
            groups: [{ l: "Sandpit", v: [8, 2] }, { l: "Adventure", v: [9, 9] }, { l: "Sports", v: [0, 20] }, { l: "Tree house", v: [7, 2] }, { l: "Library", v: [5, 5] }, { l: "Concrete", v: [15, 12] }] },
          { kind: "input", fields: [{ label: "K-2 range", value: 15, suffix: "students" }] },
          { kind: "choose", rows: [{ t: "Mode for 3-6", options: ["Sandpit", "Adventure playground", "Sports field", "Concrete areas"], a: 2 }] }
        ],
        answer: "K-2 range: **15** (highest 15 for concrete areas, lowest 0 for the sports field: 15 − 0 = 15). The mode for 3-6 is the most common response: the **sports field** (20 students).",
        explain: "No K-2 students chose the sports field, so its value is 0. For this data, the mode is read as the most popular place."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "How many equal parts is the whole shape divided into? How do you record one of these parts as a fraction?",
        interact: [
          { kind: "classify", view: [320, 320], total: 8, mark: "outline", hint: "Tap each part as you count it.",
            cats: [{ k: "n", t: "counted", c: "#17233F" }],
            shapes: [
              { p: "10,10 160,10 160,160", a: "n", fill: "#C86DD7" }, { p: "10,10 10,160 160,160", a: "n", fill: "#C86DD7" },
              { p: "160,10 310,10 160,160", a: "n", fill: "#F47A3B" }, { p: "310,10 310,160 160,160", a: "n", fill: "#F47A3B" },
              { p: "10,160 160,160 10,310", a: "n", fill: "#F47A3B" }, { p: "160,160 160,310 10,310", a: "n", fill: "#F47A3B" },
              { p: "160,160 310,160 310,310", a: "n", fill: "#C86DD7" }, { p: "160,160 160,310 310,310", a: "n", fill: "#C86DD7" }] },
          { kind: "input", fields: [{ label: "Equal parts", value: 8 }, { label: "One part", value: 0.125, placeholder: "a/b" }] }
        ],
        answer: "**8 equal parts**. One part is **[1/8]**."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Shapes A, B and C each have an area of 24 cm². Find the perimeter of each. Do rectangles with the same area always have the same perimeter? Communicate your thinking.",
        interact: [
          { kind: "sides", view: [300, 210], label: "Shape A, 6 cm by 4 cm", fill: "#3D7BFF", poly: [[30, 50], [234, 50], [234, 186], [30, 186]],
            dims: [{ from: [32, 32], to: [232, 32] }, { from: [254, 52], to: [254, 184] }], labels: [{ x: 132, y: 22, t: "6 cm" }, { x: 262, y: 122, t: "4 cm", anchor: "start" }] },
          { kind: "sides", view: [360, 170], label: "Shape B, 8 cm by 3 cm", fill: "#5D8A5E", poly: [[30, 50], [302, 50], [302, 152], [30, 152]],
            dims: [{ from: [32, 32], to: [300, 32] }, { from: [322, 52], to: [322, 150] }], labels: [{ x: 166, y: 22, t: "8 cm" }, { x: 330, y: 105, t: "3 cm", anchor: "start" }] },
          { kind: "sides", view: [520, 140], label: "Shape C, 12 cm by 2 cm", fill: "#FF914D", poly: [[20, 50], [428, 50], [428, 118], [20, 118]],
            dims: [{ from: [22, 32], to: [426, 32] }, { from: [448, 52], to: [448, 116] }], labels: [{ x: 224, y: 22, t: "12 cm" }, { x: 456, y: 90, t: "2 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "A", value: 20, suffix: "cm" }, { label: "B", value: 22, suffix: "cm" }, { label: "C", value: 28, suffix: "cm" }] },
          { kind: "choose", rows: [{ t: "Same area, same perimeter?", options: ["Yes, always", "No"], a: 1 }] }
        ],
        answer: "A (6 × 4): **20 cm** · B (8 × 3): **22 cm** · C (12 × 2): **28 cm**. **No**: rectangles with the same area can have different perimeters. The longer and thinner the rectangle, the bigger the perimeter.",
        explain: "The side lengths are counted from the slide's grid, taking each square as 1 cm."
      },
      {
        type: "sr", focus: "Non spatial measure A",
        prompt: "Which is heavier: 2000 g or 1.2 kg? 0.234 t or 35.9 kg?",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h", "th"], start: 0.234, shift: true, hint: "This is 0.234 t. 1 t = 1000 kg, so press × 10 three times." },
          { kind: "input", fields: [{ label: "2000 g =", value: 2, suffix: "kg" }, { label: "0.234 t =", value: 234, suffix: "kg" }] },
          { kind: "choose", rows: [{ t: "Heavier", options: ["2000 g", "1.2 kg"], a: 0 }, { t: "Heavier", options: ["0.234 t", "35.9 kg"], a: 0 }] }
        ],
        answer: "**2000 g** (= 2 kg, more than 1.2 kg) · **0.234 t** (= 234 kg, more than 35.9 kg)"
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "75% of $160 is $40.",
        answer: false,
        explain: "25% of $160 is $40 (one quarter). 75% is 3 quarters: 3 × $40 = $120.",
        interact: [{ kind: "shade", parts: 4, pct: true, each: 40, money: true, hint: "The strip is $160, cut into quarters. Shade 75%." }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Round these numbers to the nearest hundred thousand: 3 276 489, 5 842 173, 7 159 622, 9 903 457",
        interact: [
          { kind: "marker", min: 3200000, max: 3300000, divs: 10, majorEvery: 5, labels: [3200000, 3250000, 3300000], label: "3 276 489", hint: "Slide the pin to 3 276 489. Is it past halfway?" },
          { kind: "input", fields: [{ label: "3 276 489", value: 3300000 }, { label: "5 842 173", value: 5800000 }, { label: "7 159 622", value: 7200000 }, { label: "9 903 457", value: 9900000 }] }
        ],
        answer: "3 276 489 → **3 300 000** · 5 842 173 → **5 800 000** · 7 159 622 → **7 200 000** · 9 903 457 → **9 900 000**. Look at the ten thousands digit: 5 or more rounds up."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "My vegetable garden has produced 25 carrots. If I sold one-fifth of them, how many did I sell? Use a bar model to record the solution.",
        interact: [
          { kind: "bar", whole: { v: 25, l: "25", n: "carrots" }, parts: [{ v: 5, l: "5", n: "sold", hide: true }, { v: 5, l: "5", hide: true }, { v: 5, l: "5", hide: true }, { v: 5, l: "5", hide: true }, { v: 5, l: "5", hide: true }], hint: "The whole bar is 25 carrots, split into 5 equal parts. Tap a part to reveal it." },
          { kind: "input", fields: [{ label: "Carrots sold", value: 5 }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide by 5", s: "One-fifth means 1 of 5 equal parts. 25 ÷ 5 = 5 carrots." }, { t: "Check", s: "5 parts of 5: 5 × 5 = 25." }] },
        answer: "**5 carrots**. 25 ÷ 5 = 5."
      },
      {
        type: "sr", focus: "Non-Spatial Measure B",
        prompt: "Mel left home at 6:20 am and returned at 4:35 pm. How much time has elapsed since she left home?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 380, end: 995, steps: [15, 40, 60], hint: "Jump to the next hour first, then by hours, then the minutes left over." },
          { kind: "input", fields: [{ label: "Hours", value: 10 }, { label: "Minutes", value: 15 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "The ZOOM strategy", s: "6:20 am + 40 min = 7:00 am. 7:00 am + 9 h = 4:00 pm. 4:00 pm + 35 min = 4:35 pm. 40 + 35 = 75 min = 1 h 15 min, plus 9 h = 10 h 15 min." }, { t: "Use 24-hour time", s: "16:35 − 06:20 = 10 h 15 min." }] },
        answer: "**10 hours 15 minutes**",
        explain: "The slide writes 6.20 am; it is read as 6:20 am."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Name and classify this 2D shape. How many lines of symmetry does this shape have? Communicate your thinking.",
        interact: [
          { kind: "mirror", view: [380, 230], shapes: [{ p: [[55, 20], [315, 20], [350, 170], [20, 170]], fill: "#FF9CFA", lines: [[185, 5, 185, 185], [0, 95, 370, 95]] }] },
          { kind: "choose", rows: [{ t: "Name", options: ["parallelogram", "trapezium", "rhombus", "kite"], a: 1 }, { t: "Classify", options: ["triangle", "quadrilateral", "pentagon"], a: 1 }] },
          { kind: "input", fields: [{ label: "Lines of symmetry", value: 1 }] }
        ],
        answer: "A **trapezium** (an isosceles trapezium), which is a **quadrilateral**: 4 sides, with one pair of parallel sides. It has **1 line of symmetry**, straight down the middle."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "How do you write [4/5] as a percentage?",
        options: ["40%", "80%", "50%", "45%"],
        answer: 1,
        explain: "[1/5] = 20%, so [4/5] = 4 × 20% = 80%. Or [4/5] = [80/100].",
        interact: [{ kind: "shade", parts: 5, pct: true, hint: "Shade [4/5] of the strip." }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Write the number that is 10 times: 0.8, 1.3, 3.62. Write the number that is [1/10] of: 0.44, 6.5, 21.7",
        interact: [
          { kind: "pv", cols: ["T", "O", "t", "h", "th"], start: 0.8, shift: true, hint: "Use × 10 and ÷ 10. Press Reset chart, then use + and − to build each number." },
          { kind: "input", fields: [{ label: "10 × 0.8", value: 8 }, { label: "10 × 1.3", value: 13 }, { label: "10 × 3.62", value: 36.2 }, { label: "[1/10] of 0.44", value: 0.044 }, { label: "[1/10] of 6.5", value: 0.65 }, { label: "[1/10] of 21.7", value: 2.17 }] }
        ],
        answer: "10 times: **8**, **13**, **36.2** · [1/10] of: **0.044**, **0.65**, **2.17**"
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Use a fraction strip to record the solution to: [1/4] + [3/8] =",
        interact: [
          { kind: "shade", parts: 8, hint: "[1/4] is the same as [2/8]. Shade 2 eighths, then 3 more." },
          { kind: "input", fields: [{ label: "[1/4] + [3/8] =", value: 0.625, placeholder: "a/b" }] }
        ],
        answer: "**[5/8]**. [1/4] = [2/8], and [2/8] + [3/8] = [5/8]."
      },
      {
        type: "sr", focus: "Non-Spatial Measure A",
        prompt: "What time does PD/H/PE start on a Wednesday? Which subject finishes at 14:00 on a Tuesday?",
        table: [
          ["12-hour", "24-hour", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          ["8:30 am", "08:30", "", "", "", "", ""],
          ["9:00 am", "09:00", "English", "English", "English", "PD/H/PE", "Sport"],
          ["9:30 am", "09:30", "English", "English", "English", "PD/H/PE", "Sport"],
          ["10:00 am", "10:00", "English", "English", "English", "English", "English"],
          ["10:30 am", "10:30", "English", "English", "English", "English", "English"],
          ["11:00 am", "11:00", "Recess", "Recess", "Recess", "Recess", "Recess"],
          ["11:30 am", "11:30", "Maths", "Maths", "Maths", "Maths", "Maths"],
          ["12:00 pm", "12:00", "Maths", "Maths", "Maths", "Maths", "Maths"],
          ["12:30 pm", "12:30", "Maths", "Maths", "Maths", "Maths", "Maths"],
          ["1:00 pm", "13:00", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch"],
          ["1:30 pm", "13:30", "HSIE", "HSIE", "Creative arts", "Creative arts", "Science"],
          ["2:00 pm", "14:00", "HSIE", "Library", "PD/H/PE", "Creative arts", "Science"],
          ["2:30 pm", "14:30", "HSIE", "Assembly", "PD/H/PE", "Creative arts", "Science"],
          ["3:00 pm", "15:00", "", "", "", "", ""]],
        interact: [{ kind: "choose", rows: [
          { t: "PD/H/PE starts on Wednesday at", options: ["9:00 am", "1:30 pm", "2:00 pm", "2:30 pm"], a: 2 },
          { t: "Finishes at 14:00 on Tuesday", options: ["Maths", "HSIE", "Library", "Assembly"], a: 1 }] }],
        answer: "PD/H/PE starts at **2:00 pm (14:00)** on Wednesday. On Tuesday, **HSIE** (1:30–2:00 pm) finishes at 14:00, when Library starts.",
        explain: "Each row is a 30-minute lesson that starts at the time shown, so the 1:30 pm lesson finishes at 14:00."
      },
      {
        type: "sr", focus: "Volume and capacity",
        prompt: "Elyssa's tap leaks 200 mL per hour. How many millilitres have leaked after 8 hours? How many litres have leaked after 8 hours?",
        interact: [
          { kind: "jumps", start: 0, steps: [200], hint: "Each jump is one hour of leaking. Make 8 jumps." },
          { kind: "input", fields: [{ label: "After 8 hours", value: 1600, suffix: "mL" }, { label: "After 8 hours", value: 1.6, suffix: "L" }] }
        ],
        cubes: { ops: ["×", "÷"], solve: [{ t: "Multiply", s: "8 × 200 mL = 1600 mL. 1000 mL = 1 L, so 1600 mL = 1.6 L." }, { t: "Double", s: "2 hours = 400 mL, 4 hours = 800 mL, 8 hours = 1600 mL = 1 L 600 mL = 1.6 L." }] },
        answer: "**1600 mL**, which is **1.6 L**."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "25% is equivalent to 0.25 and [1/4].",
        answer: true,
        explain: "25% = [25/100] = 0.25, and [25/100] simplifies to [1/4].",
        interact: [{ kind: "shade", parts: 4, pct: true, hint: "Shade [1/4] of the strip and read the percentage." }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Draw a number line and mark the following decimals: 1.609, 1.80, 1.021",
        interact: [{ kind: "numberline", min: 1, max: 2, ticks: 10, labelStep: 1, tol: 0.03, items: [["1.609", 1.609], ["1.80", 1.8], ["1.021", 1.021]] }],
        answer: "1.021 is just past 1. 1.609 is just past 1.6. 1.80 is at 1.8 (the same as 1.8)."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "I planted [1/5] of my garden with potatoes and [6/10] with carrots. What fraction of my garden is now planted with vegetables? What fraction of my garden still needs to be planted so that it is full?",
        interact: [
          { kind: "shade", parts: 10, hint: "The strip is the garden in tenths. [1/5] = [2/10]. Shade the potatoes, then the carrots." },
          { kind: "input", fields: [{ label: "Planted", value: 0.8, placeholder: "a/b" }, { label: "Still to plant", value: 0.2, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Use tenths", s: "[1/5] = [2/10]. [2/10] + [6/10] = [8/10] planted. [10/10] − [8/10] = [2/10] left." }, { t: "Use fifths", s: "[6/10] = [3/5]. [1/5] + [3/5] = [4/5] planted, so [1/5] is left." }] },
        answer: "Planted: **[8/10]** ([4/5]). Still to plant: **[2/10]** ([1/5])."
      },
      {
        type: "sr", focus: "Non-Spatial Measure A",
        prompt: "Convert the following times into 24-hour time: 5:45 am, 8:15 pm, 1:40 pm, 11:30 am",
        interact: [
          { kind: "clock", time: "8:15", h24: true },
          { kind: "input", fields: [{ label: "5:45 am", accept: ["05:45"], placeholder: "hh:mm" }, { label: "8:15 pm", accept: ["20:15"], placeholder: "hh:mm" }, { label: "1:40 pm", accept: ["13:40"], placeholder: "hh:mm" }, { label: "11:30 am", accept: ["11:30"], placeholder: "hh:mm" }] }
        ],
        answer: "5:45 am = **05:45** · 8:15 pm = **20:15** · 1:40 pm = **13:40** · 11:30 am = **11:30**. For pm times, add 12 to the hour."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name the 3D object. Describe 3 properties of this object.",
        img: "u25-prism.png",
        interact: [
          { kind: "choose", rows: [{ t: "Name", options: ["cube", "rectangular prism", "triangular prism", "square pyramid"], a: 1 }] },
          { kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 12 }, { label: "Vertices", value: 8 }] }
        ],
        answer: "A **rectangular prism**. It has **6 rectangular faces** (in 3 matching pairs), **12 edges** and **8 vertices**."
      }
    ]
  ]
});
