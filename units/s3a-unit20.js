/*
  Stage 3 Year A, Unit 20 — Review of learning (Term 4, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 4, ls: 5, unit: 20,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 20 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1 (Week 9 Monday)
    [
      {
        type: "mc", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Which decimal is the largest?",
        options: ["0.12", "0.03", "0.126", "0.036"],
        answer: 2,
        explain: "Compare the tenths first: 0.12 and 0.126 both have 1 tenth, 0.03 and 0.036 have none. Then compare the hundredths (2 and 2) and the thousandths: 0.126 has 6 thousandths and 0.12 = 0.120 has none. So 0.126 is the largest.",
        interact: [{ kind: "numberline", min: 0, max: 0.15, ticks: 0.01, labels: [0, 0.05, 0.1, 0.15], tol: 0.004, items: [["0.12", 0.12], ["0.03", 0.03], ["0.126", 0.126], ["0.036", 0.036]], hint: "Drag each decimal onto the line. The one furthest right is the largest." }]
      },
      {
        type: "sr", focus: "Represents numbers B: Whole numbers",
        prompt: "Make the largest and smallest number using all of the following digits: 7, 2, 3, 0, 4. Identify the nearest 10 thousand to the largest number.",
        interact: [
          { kind: "marker", min: 70000, max: 80000, divs: 10, majorEvery: 5, labels: [70000, 75000, 80000], label: "74 320", hint: "Slide the pin to the largest number. Which ten thousand is it closer to?" },
          { kind: "input", fields: [{ label: "Largest number", value: 74320 }, { label: "Smallest number", value: 20347 }, { label: "Largest number to the nearest 10 thousand", value: 70000 }] }
        ],
        answer: "Largest: **74 320** · Smallest: **20 347** · 74 320 rounds to **70 000**, because the thousands digit is 4 (less than 5).",
        explain: "The smallest number can't start with 0 (03 247 is really a 4-digit number), so 0 goes in the second place: 20 347."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Name and describe the triangles below.",
        interact: [
          { kind: "corners", view: [740, 260], deg: true, r: 24, q: 30, label: "Triangle A (dark blue), triangle B (purple), triangle C (light blue)", hint: "Tap a corner to test it with the right-angle tester, tap again to measure it.",
            shapes: [{ p: [[19, 64], [86, 203], [292, 203]], fill: "#0A2D8C" }, { p: [[374, 41], [495, 160], [331, 206]], fill: "#8C52FF" }, { p: [[598, 10], [539, 189], [716, 247]], fill: "#9DD5EF" }] },
          { kind: "choose", rows: [
            { t: "A: sides", options: ["equilateral", "isosceles", "scalene"], a: 2 },
            { t: "A: angles", options: ["acute", "right", "obtuse"], a: 2 },
            { t: "B: sides", options: ["equilateral", "isosceles", "scalene"], a: 0 },
            { t: "B: angles", options: ["acute", "right", "obtuse"], a: 0 },
            { t: "C: sides", options: ["equilateral", "isosceles", "scalene"], a: 1 },
            { t: "C: angles", options: ["acute", "right", "obtuse"], a: 1 }] }
        ],
        answer: "A (dark blue): **obtuse scalene** triangle (one angle about 116°, no equal sides). B (purple): **equilateral** triangle (3 equal sides, 3 angles of 60°, so it is acute). C (light blue): **right isosceles** triangle (one right angle, 2 equal sides).",
        explain: "Measured from the slide's picture: A's sides are all different with one angle about 116°; B's sides are equal within 1%; C has two equal sides meeting at a right angle."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A six-sided die is rolled once. What is the probability of rolling a 4? Use the term probability in your answer to describe the likelihood of this outcome.",
        interact: [
          { kind: "shade", parts: 6, hint: "Each part is one face of the die. Shade the faces that show 4." },
          { kind: "input", fields: [{ label: "Probability of rolling a 4", accept: ["1/6", "1 out of 6", "1 in 6"], placeholder: "a/b" }] },
          { kind: "choose", rows: [{ t: "Rolling a 4 is …", options: ["impossible", "unlikely", "even chance", "likely", "certain"], a: 1 }] }
        ],
        answer: "The probability of rolling a 4 is **[1/6]**. Only 1 of the 6 equally likely faces shows 4, so it is **unlikely**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Identify the following times as either 12-hour or 24-hour time: 3:30 pm, 9:47 am, 1338, 0642.",
        interact: [
          { kind: "clock", time: "13:38", h24: true },
          { kind: "choose", rows: [
            { t: "3:30 pm", options: ["12-hour time", "24-hour time"], a: 0 },
            { t: "9:47 am", options: ["12-hour time", "24-hour time"], a: 0 },
            { t: "1338", options: ["12-hour time", "24-hour time"], a: 1 },
            { t: "0642", options: ["12-hour time", "24-hour time"], a: 1 }] }
        ],
        answer: "3:30 pm and 9:47 am are **12-hour time** (they need am or pm). 1338 and 0642 are **24-hour time** (4 digits, no am or pm). 1338 is 1:38 pm and 0642 is 6:42 am."
      }
    ],
    // Review 2 (Week 9 Tuesday)
    [
      {
        type: "tf", focus: "Represents numbers A: Decimals and percentages",
        prompt: "The following decimals are in descending order: 0.12, 0.03, 0.126, 0.036",
        answer: false,
        explain: "Descending means largest to smallest. In order they are 0.126, 0.12, 0.036, 0.03. The list given jumps down and up, so it isn't in descending order.",
        interact: [{ kind: "numberline", min: 0, max: 0.15, ticks: 0.01, labels: [0, 0.05, 0.1, 0.15], tol: 0.004, items: [["0.12", 0.12], ["0.03", 0.03], ["0.126", 0.126], ["0.036", 0.036]], hint: "Drag each decimal onto the line. Read them from right to left for descending order." }]
      },
      {
        type: "sr", focus: "Represents numbers B: Whole numbers",
        prompt: "Record the following numbers on a number line: 1.5, −5, 0, 5.5, 12, 4, −2. Explain your reasoning.",
        interact: [{ kind: "numberline", min: -6, max: 12, ticks: 1, labelStep: 2, tol: 0.35, items: [["1.5", 1.5], ["−5", -5], ["0", 0], ["5.5", 5.5], ["12", 12], ["4", 4], ["−2", -2]], hint: "Negative numbers go to the left of 0. 1.5 and 5.5 sit halfway between two whole numbers." }],
        answer: "From left to right: **−5, −2, 0, 1.5, 4, 5.5, 12**. Negative numbers are less than 0, so they sit to the left; −5 is further from 0 than −2, so it is smaller.",
        explain: "The slide calls these integers, but 1.5 and 5.5 are not integers (integers are whole numbers and their negatives). The prompt says numbers instead."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Draw the lines of symmetry for the rhombus, equilateral triangle, trapezium and square.",
        interact: [
          { kind: "mirror", view: [820, 230], label: "Rhombus, equilateral triangle, trapezium and square with dashed lines to test", hint: "Tap each dashed line to fold the shape over it. Does it match exactly?",
            shapes: [
              { p: [[100, 15], [160, 110], [100, 205], [40, 110]], fill: "#7ED957", lines: [[100, 5, 100, 215], [25, 110, 175, 110]] },
              { p: [[210, 190], [370, 190], [290, 51.44]], fill: "#8C52FF", lines: [[290, 35, 290, 205], [195.6, 198.3, 354, 106.9], [384.4, 198.3, 226, 106.9]] },
              { p: [[450, 190], [610, 190], [570, 70], [490, 70]], fill: "#F5E50F", lines: [[530, 50, 530, 210], [430, 130, 630, 130]] },
              { p: [[660, 60], [790, 60], [790, 190], [660, 190]], fill: "#4381EB", lines: [[725, 45, 725, 205], [645, 125, 805, 125], [650, 45, 800, 205], [800, 45, 650, 205]] }] },
          { kind: "input", fields: [{ label: "Rhombus", value: 2, suffix: "lines" }, { label: "Equilateral triangle", value: 3, suffix: "lines" }, { label: "Trapezium", value: 1, suffix: "lines" }, { label: "Square", value: 4, suffix: "lines" }] }
        ],
        answer: "Rhombus: **2** (its two diagonals) · Equilateral triangle: **3** (each corner to the middle of the opposite side) · Trapezium: **1** (down the middle) · Square: **4** (2 through the middles of the sides, 2 diagonals).",
        explain: "The trapezium on the slide is isosceles (its slanted sides are equal), so it has 1 line of symmetry. A trapezium that isn't isosceles has none."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A bag contains 5 red counters, 3 blue counters and 2 green counters. One counter is picked at random. What is the probability of selecting a blue counter?",
        interact: [
          { kind: "classify", view: [560, 90], total: 10, hint: "Choose a colour, then tap each counter of that colour.",
            cats: [{ k: "r", t: "Red", c: "#E03131" }, { k: "b", t: "Blue", c: "#2F6FE4" }, { k: "g", t: "Green", c: "#2F9E44" }],
            shapes: [
              { circle: [35, 45, 22], a: "r", fill: "#E03131" }, { circle: [89, 45, 22], a: "r", fill: "#E03131" }, { circle: [143, 45, 22], a: "r", fill: "#E03131" },
              { circle: [197, 45, 22], a: "r", fill: "#E03131" }, { circle: [251, 45, 22], a: "r", fill: "#E03131" }, { circle: [305, 45, 22], a: "b", fill: "#2F6FE4" },
              { circle: [359, 45, 22], a: "b", fill: "#2F6FE4" }, { circle: [413, 45, 22], a: "b", fill: "#2F6FE4" }, { circle: [467, 45, 22], a: "g", fill: "#2F9E44" },
              { circle: [521, 45, 22], a: "g", fill: "#2F9E44" }] },
          { kind: "input", fields: [{ label: "Probability of blue", accept: ["3/10", "0.3", "30%", "3 out of 10"], placeholder: "a/b" }] }
        ],
        answer: "**[3/10]**. There are 5 + 3 + 2 = 10 counters and 3 of them are blue."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Draw an irregular octagon. Explain why it is an octagon.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "select", hint: "Tap every reason that is true for your irregular octagon.", items: [
            ["It has 8 straight sides", true],
            ["It has 8 corners (vertices)", true],
            ["It is a closed shape", true],
            ["Its sides are not all the same length, so it is irregular", true],
            ["All 8 sides must be equal", false],
            ["It must have a curved side", false]] }
        ],
        answer: "Any closed shape with **8 straight sides and 8 corners** is an octagon. It is **irregular** because its sides (or angles) are not all equal."
      }
    ],
    // Review 3 (Week 9 Wednesday)
    [
      {
        type: "mc", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Which sequence shows decimals in ascending order?",
        options: ["0.12, 0.03, 0.126, 0.036", "0.03, 0.126, 0.12, 0.36", "0.03, 0.036, 0.12, 0.126", "0.036, 0.03, 0.12, 0.126"],
        answer: 2,
        explain: "Ascending means smallest to largest: 0.03 < 0.036 < 0.12 < 0.126. B puts 0.126 before 0.12, and D puts 0.036 before 0.03.",
        interact: [{ kind: "numberline", min: 0, max: 0.15, ticks: 0.01, labels: [0, 0.05, 0.1, 0.15], tol: 0.004, items: [["0.03", 0.03], ["0.036", 0.036], ["0.12", 0.12], ["0.126", 0.126]], hint: "Drag each decimal onto the line, then read them from left to right." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use rounding and estimation to solve: 4437 + 2988, 272 + 149, 39 + 43.",
        interact: [
          { kind: "jumps", start: 4400, steps: [3000, 1000, 100], hint: "Round 4437 to 4400 and 2988 to 3000, then jump." },
          { kind: "input", fields: [{ label: "4437 + 2988 ≈", min: 7000, max: 7500 }, { label: "272 + 149 ≈", min: 400, max: 450 }, { label: "39 + 43 ≈", min: 80, max: 85 }] }
        ],
        answer: "About **7400** (4400 + 3000), about **420** (270 + 150) and about **80** (40 + 40). The exact answers are 7425, 421 and 82.",
        explain: "Estimates depend on how you round, so Check accepts 7000 to 7500, 400 to 450 and 80 to 85."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Complete the missing words. Angles are measured in ___. There are ___ degrees in a revolution. There are ___ degrees in a straight line.",
        interact: [
          { kind: "angle", start: 180, reflex: true, degrees: true, names: true, hint: "Drag the arm to make a straight angle, then all the way round to a revolution." },
          { kind: "input", fields: [{ label: "Angles are measured in", accept: ["degrees", "degree", "°"] }, { label: "Degrees in a revolution", value: 360 }, { label: "Degrees in a straight line", value: 180 }] }
        ],
        answer: "Angles are measured in **degrees** (°). There are **360** degrees in a revolution and **180** degrees in a straight line."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Ali has a three out of four chance of picking a red counter from the bag. Record this probability as a fraction.",
        interact: [
          { kind: "classify", view: [240, 90], total: 4, hint: "The bag has 4 counters. Choose a colour, then tap each counter of that colour.",
            cats: [{ k: "r", t: "Red", c: "#F05454" }, { k: "y", t: "Yellow", c: "#E9D92B" }],
            shapes: [{ circle: [35, 45, 22], a: "r", fill: "#F05454" }, { circle: [89, 45, 22], a: "y", fill: "#F2EE5C" }, { circle: [143, 45, 22], a: "r", fill: "#F05454" }, { circle: [197, 45, 22], a: "r", fill: "#F05454" }] },
          { kind: "input", fields: [{ label: "Probability of red", accept: ["3/4"], placeholder: "a/b" }] }
        ],
        answer: "**[3/4]**. 3 of the 4 counters in the bag are red."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Christian visualises and sketches the net for a 3-dimensional object. It has 4 triangles. Draw the 3D object Christian was visualising.",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [{ t: "Christian's object is a …", options: ["triangular pyramid", "square pyramid", "triangular prism", "cube"], a: 0 }] }
        ],
        answer: "A **triangular pyramid** (tetrahedron): 4 triangular faces, 6 edges and 4 vertices.",
        explain: "This reads the net as made of only 4 triangles. A square pyramid also has 4 triangles, but its net needs a square base as well."
      }
    ],
    // Review 4 (Week 9 Thursday)
    [
      {
        type: "tf", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Ava believes 0.6 is smaller than 0.68. Communicate your thinking.",
        answer: true,
        explain: "0.6 = 0.60, which is 60 hundredths. 0.68 is 68 hundredths. 60 hundredths is less than 68 hundredths, so Ava is right.",
        interact: [{ kind: "numberline", min: 0.5, max: 0.7, ticks: 0.01, labels: [0.5, 0.6, 0.7], tol: 0.005, items: [["0.6", 0.6], ["0.68", 0.68]], hint: "Drag both decimals onto the line. Which is further left?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Using a subtraction strategy, solve 5309 − 2006. Explain why you chose that strategy.",
        interact: [
          { kind: "jumps", start: 5309, back: true, steps: [2000, 6, 1000, 1], hint: "Jump back 2000, then back 6." },
          { kind: "input", fields: [{ label: "5309 − 2006 =", value: 3303 }] }
        ],
        answer: "**3303**. Split 2006 into 2000 and 6: 5309 − 2000 = 3309, then 3309 − 6 = 3303. Splitting works well because 2006 is close to a whole thousand."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the following degrees.",
        img: "u20-protractor-a.png",
        interact: [
          { kind: "angle", start: 60, degrees: true, names: true, hint: "Make the same angle as the protractor shows." },
          { kind: "input", fields: [{ label: "The angle is", min: 104, max: 106, suffix: "°" }] }
        ],
        answer: "**105°**. One arm lies on the 0 of the inside (red) scale, so read the inside scale: the other arm is halfway between 100 and 110. It is an obtuse angle.",
        explain: "Measured from the slide's picture, the arm sits at about 105°. Check accepts 104° to 106°. If a student says 75°, they read the outside scale, which starts from the other side."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A coin is tossed once. Are the outcomes heads and tails equally likely? What if it was tossed twice? Communicate your reasoning.",
        interact: [
          { kind: "combos", pick: 2, total: 4, items: [["heads", "#E9B500", 2], ["tails", "#2F6FE4", 2]], hint: "Build each result for 2 tosses." },
          { kind: "choose", rows: [
            { t: "One toss: are heads and tails equally likely?", options: ["Yes", "No"], a: 0 },
            { t: "Two tosses: is each toss still 50–50?", options: ["Yes", "No"], a: 0 },
            { t: "Two tosses: are 1 head and 1 tail as likely as 2 heads?", options: ["Yes, the same", "No, more likely", "No, less likely"], a: 1 }] },
          { kind: "input", fields: [{ label: "Outcomes for 2 tosses (HH, HT, TH, TT)", value: 4 }] }
        ],
        answer: "**Yes**: a coin has 2 sides, so heads and tails each have a [1/2] chance. Tossed twice, each toss is still 50–50. The 4 outcomes HH, HT, TH and TT are equally likely, so 1 head and 1 tail (HT or TH, [2/4]) is **more likely** than 2 heads ([1/4]).",
        explain: "The combos tool lists results without order (HT and TH count as one), so it shows 3 results. Talk through why HT and TH are different outcomes, giving 4."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Nonna's rose garden has an area of 20 m². Is it possible for the length to be 4 metres and the width to be 6 metres? Why or why not?",
        interact: [
          { kind: "areagrid", cells: ["111111", "111111", "111111", "111111"], size: 40 },
          { kind: "choose", rows: [{ t: "Is 4 m by 6 m possible?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "Area of a 4 m by 6 m garden", value: 24, suffix: "m²" }, { label: "If the length is 4 m, the width must be", value: 5, suffix: "m" }] }
        ],
        answer: "**No**. 4 m × 6 m = **24 m²**, not 20 m². For an area of 20 m² with a length of 4 m, the width must be **5 m** (4 × 5 = 20).",
        explain: "The slide reads \"the length to be and 4 metres\". The stray word is removed."
      }
    ],
    // Review 5 (Week 10 Monday)
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which number is not a factor of 56?",
        options: ["8", "7", "6", "2"],
        answer: 2,
        explain: "56 = 7 × 8 = 2 × 28. 56 ÷ 6 = 9 remainder 2, so 6 is not a factor of 56.",
        interact: [{ kind: "numchart", from: 1, to: 56, answer: [1, 2, 4, 7, 8, 14, 28, 56], hint: "Tap every factor of 56. Is 6 one of them?" }]
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals and percentages",
        prompt: "Complete the missing values in the table of fractions, decimals and percentages.",
        interact: [
          { kind: "shade", parts: 10, pct: true, hint: "Tenths: shade [1/10]. Then try half and three-quarters." },
          { kind: "input", fields: [
            { label: "0.5 as a fraction", accept: ["1/2", "5/10", "50/100"], placeholder: "a/b" }, { label: "0.5 as a percentage", accept: ["50%", "50"] },
            { label: "75% as a fraction", accept: ["3/4", "75/100"], placeholder: "a/b" }, { label: "75% as a decimal", value: 0.75 },
            { label: "[1/10] as a decimal", value: 0.1 }, { label: "[1/10] as a percentage", accept: ["10%", "10"] }] }
        ],
        answer: "**[1/2]** = 0.5 = **50%** · **[3/4]** = **0.75** = 75% · [1/10] = **0.1** = **10%**.",
        explain: "The last fraction is cut off on the slide; the slide's file shows it is [1/10]."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the name of the angle that is 90°, 180°, 270° and 360°.",
        interact: [
          { kind: "angle", start: 90, reflex: true, names: true, degrees: true, hint: "Drag the arm to 90°, 180°, 270° and 360°. Read the name each time." },
          { kind: "choose", rows: [
            { t: "90°", options: ["acute", "right", "straight", "reflex", "revolution"], a: 1 },
            { t: "180°", options: ["acute", "right", "straight", "reflex", "revolution"], a: 2 },
            { t: "270°", options: ["acute", "right", "straight", "reflex", "revolution"], a: 3 },
            { t: "360°", options: ["acute", "right", "straight", "reflex", "revolution"], a: 4 }] }
        ],
        answer: "90° is a **right angle**, 180° is a **straight angle**, 270° is a **reflex angle** and 360° is a **revolution** (a full turn)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Is there another type of graph that would best display this information? What could the title be?",
        interact: [
          { kind: "bargraph", max: 16, step: 2, ylabel: "Number of students", xlabel: "Sport", label: "Chart Title", legendW: 120,
            series: [{ l: "6N", c: "#0B2A6F" }, { l: "6H", c: "#1E6BFF" }, { l: "6B", c: "#7FD8F7" }],
            groups: [{ l: "Oztag", v: [15, 12, 6] }, { l: "Soccer", v: [6, 11, 14] }, { l: "Hockey", v: [4, 1, 2] }, { l: "Cricket", v: [7, 8, 10] }] },
          { kind: "select", hint: "Tap every graph that could also display this data well.", items: [
            ["A stacked column graph (one column per sport)", true],
            ["A separate column graph for each class", true],
            ["A line graph", false],
            ["A single pie chart for all three classes", false]] },
          { kind: "choose", rows: [{ t: "Best title", options: ["Chart Title", "Favourite sports of 6N, 6H and 6B", "Sports"], a: 1 }] }
        ],
        answer: "The side-by-side column graph already works well. A **stacked column graph** or a **separate column graph for each class** would also work. A line graph doesn't suit, because the sports are categories, not a change over time. Title: something like **Favourite sports of 6N, 6H and 6B**.",
        explain: "The graph's data isn't labelled on the slide; the bar heights are read from the picture, and the vertical axis label (number of students) is assumed. Answers about graph type can vary, so talk them through."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Which spinner gives you an equally likely chance of landing on a red or green section? A: 4 red, 2 blue, 2 green sections. B: 3 red, 3 blue, 2 green sections. C: 2 red, 5 blue, 2 green sections.",
        interact: [
          { kind: "classify", view: [1000, 260], label: "Spinner A", hint: "Spinner A: choose a colour, then tap each section to count it.", cats: [{ k: "r", t: "Red", c: "#E03131" }, { k: "b", t: "Blue", c: "#2F6FE4" }, { k: "g", t: "Green", c: "#2F9E44" }], shapes: [
              { p: "130.0,130.0 130.0,10.0 141.8,10.6 153.4,12.3 164.8,15.2 175.9,19.1 186.6,24.2 196.7,30.2 206.1,37.2 214.9,45.1", a: "r", fill: "#E03131", deco: "<text x='290' y='145' font-size='40' fill='#333'>Spinner A</text>" },
              { p: "130.0,130.0 214.9,45.1 222.8,53.9 229.8,63.3 235.8,73.4 240.9,84.1 244.8,95.2 247.7,106.6 249.4,118.2 250.0,130.0", a: "b", fill: "#2F6FE4" },
              { p: "130.0,130.0 250.0,130.0 249.4,141.8 247.7,153.4 244.8,164.8 240.9,175.9 235.8,186.6 229.8,196.7 222.8,206.1 214.9,214.9", a: "r", fill: "#E03131" },
              { p: "130.0,130.0 214.9,214.9 206.1,222.8 196.7,229.8 186.6,235.8 175.9,240.9 164.8,244.8 153.4,247.7 141.8,249.4 130.0,250.0", a: "g", fill: "#2F9E44" },
              { p: "130.0,130.0 130.0,250.0 118.2,249.4 106.6,247.7 95.2,244.8 84.1,240.9 73.4,235.8 63.3,229.8 53.9,222.8 45.1,214.9", a: "r", fill: "#E03131" },
              { p: "130.0,130.0 45.1,214.9 37.2,206.1 30.2,196.7 24.2,186.6 19.1,175.9 15.2,164.8 12.3,153.4 10.6,141.8 10.0,130.0", a: "b", fill: "#2F6FE4" },
              { p: "130.0,130.0 10.0,130.0 10.6,118.2 12.3,106.6 15.2,95.2 19.1,84.1 24.2,73.4 30.2,63.3 37.2,53.9 45.1,45.1", a: "r", fill: "#E03131" },
              { p: "130.0,130.0 45.1,45.1 53.9,37.2 63.3,30.2 73.4,24.2 84.1,19.1 95.2,15.2 106.6,12.3 118.2,10.6 130.0,10.0", a: "g", fill: "#2F9E44" }] },
          { kind: "classify", view: [1000, 260], label: "Spinner B", hint: "Spinner B: choose a colour, then tap each section to count it.", cats: [{ k: "r", t: "Red", c: "#E03131" }, { k: "b", t: "Blue", c: "#2F6FE4" }, { k: "g", t: "Green", c: "#2F9E44" }], shapes: [
              { p: "130.0,130.0 130.0,10.0 141.8,10.6 153.4,12.3 164.8,15.2 175.9,19.1 186.6,24.2 196.7,30.2 206.1,37.2 214.9,45.1", a: "r", fill: "#E03131", deco: "<text x='290' y='145' font-size='40' fill='#333'>Spinner B</text>" },
              { p: "130.0,130.0 214.9,45.1 222.8,53.9 229.8,63.3 235.8,73.4 240.9,84.1 244.8,95.2 247.7,106.6 249.4,118.2 250.0,130.0", a: "b", fill: "#2F6FE4" },
              { p: "130.0,130.0 250.0,130.0 249.4,141.8 247.7,153.4 244.8,164.8 240.9,175.9 235.8,186.6 229.8,196.7 222.8,206.1 214.9,214.9", a: "g", fill: "#2F9E44" },
              { p: "130.0,130.0 214.9,214.9 206.1,222.8 196.7,229.8 186.6,235.8 175.9,240.9 164.8,244.8 153.4,247.7 141.8,249.4 130.0,250.0", a: "r", fill: "#E03131" },
              { p: "130.0,130.0 130.0,250.0 118.2,249.4 106.6,247.7 95.2,244.8 84.1,240.9 73.4,235.8 63.3,229.8 53.9,222.8 45.1,214.9", a: "b", fill: "#2F6FE4" },
              { p: "130.0,130.0 45.1,214.9 37.2,206.1 30.2,196.7 24.2,186.6 19.1,175.9 15.2,164.8 12.3,153.4 10.6,141.8 10.0,130.0", a: "g", fill: "#2F9E44" },
              { p: "130.0,130.0 10.0,130.0 10.6,118.2 12.3,106.6 15.2,95.2 19.1,84.1 24.2,73.4 30.2,63.3 37.2,53.9 45.1,45.1", a: "r", fill: "#E03131" },
              { p: "130.0,130.0 45.1,45.1 53.9,37.2 63.3,30.2 73.4,24.2 84.1,19.1 95.2,15.2 106.6,12.3 118.2,10.6 130.0,10.0", a: "b", fill: "#2F6FE4" }] },
          { kind: "classify", view: [1000, 260], label: "Spinner C", hint: "Spinner C: choose a colour, then tap each section to count it.", cats: [{ k: "r", t: "Red", c: "#E03131" }, { k: "b", t: "Blue", c: "#2F6FE4" }, { k: "g", t: "Green", c: "#2F9E44" }], shapes: [
              { p: "130.0,130.0 130.0,10.0 140.5,10.5 150.8,11.8 161.1,14.1 171.0,17.2 180.7,21.2 190.0,26.1 198.8,31.7 207.1,38.1", a: "r", fill: "#E03131", deco: "<text x='290' y='145' font-size='40' fill='#333'>Spinner C</text>" },
              { p: "130.0,130.0 207.1,38.1 214.9,45.1 221.9,52.9 228.3,61.2 233.9,70.0 238.8,79.3 242.8,89.0 245.9,98.9 248.2,109.2", a: "b", fill: "#2F6FE4" },
              { p: "130.0,130.0 248.2,109.2 249.5,119.5 250.0,130.0 249.5,140.5 248.2,150.8 245.9,161.1 242.8,171.0 238.8,180.7 233.9,190.0", a: "b", fill: "#2F6FE4" },
              { p: "130.0,130.0 233.9,190.0 228.3,198.8 221.9,207.1 214.9,214.9 207.1,221.9 198.8,228.3 190.0,233.9 180.7,238.8 171.0,242.8", a: "g", fill: "#2F9E44" },
              { p: "130.0,130.0 171.0,242.8 161.1,245.9 150.8,248.2 140.5,249.5 130.0,250.0 119.5,249.5 109.2,248.2 98.9,245.9 89.0,242.8", a: "b", fill: "#2F6FE4" },
              { p: "130.0,130.0 89.0,242.8 79.3,238.8 70.0,233.9 61.2,228.3 52.9,221.9 45.1,214.9 38.1,207.1 31.7,198.8 26.1,190.0", a: "r", fill: "#E03131" },
              { p: "130.0,130.0 26.1,190.0 21.2,180.7 17.2,171.0 14.1,161.1 11.8,150.8 10.5,140.5 10.0,130.0 10.5,119.5 11.8,109.2", a: "b", fill: "#2F6FE4" },
              { p: "130.0,130.0 11.8,109.2 14.1,98.9 17.2,89.0 21.2,79.3 26.1,70.0 31.7,61.2 38.1,52.9 45.1,45.1 52.9,38.1", a: "g", fill: "#2F9E44" },
              { p: "130.0,130.0 52.9,38.1 61.2,31.7 70.0,26.1 79.3,21.2 89.0,17.2 98.9,14.1 109.2,11.8 119.5,10.5 130.0,10.0", a: "b", fill: "#2F6FE4" }] },
          { kind: "choose", rows: [{ t: "Red and green are equally likely on spinner …", options: ["A", "B", "C"], a: 2 }] }
        ],
        answer: "**Spinner C**. It has the same number of red and green sections (2 each), so landing on red is as likely as landing on green ([2/9] each).",
        explain: "This assumes all the sections on each spinner are the same size, as drawn here."
      }
    ],
    // Review 6 (Week 10 Tuesday)
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The factors of 35 are: 1, 2, 3, 5, 7, 35",
        answer: false,
        explain: "35 = 1 × 35 = 5 × 7, so the factors are 1, 5, 7 and 35. 35 is odd, so 2 is not a factor, and 35 ÷ 3 = 11 remainder 2, so 3 is not a factor.",
        interact: [{ kind: "numchart", from: 1, to: 35, answer: [1, 5, 7, 35], hint: "Tap every factor of 35." }]
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals and percentages",
        prompt: "Tara went shopping for a new laptop. There was a 25% sale on. The ticket price was marked $300. What is the amount Tara will pay? Communicate your reasoning.",
        interact: [
          { kind: "bar", whole: { v: 300, l: "$300", n: "ticket price" }, parts: [{ v: 75, l: "?", n: "25% off", hide: true }, { v: 75, l: "?", n: "", hide: true }, { v: 75, l: "?", n: "", hide: true }, { v: 75, l: "?", n: "", hide: true }], hint: "25% is one quarter. Tap each ? to reveal a quarter of $300." },
          { kind: "input", fields: [{ label: "Tara pays", prefix: "$", value: 225 }] }
        ],
        cubes: { ops: ["÷", "−"], also: ["×"], solve: [{ t: "Find the discount, then subtract", s: "25% = [1/4]. $300 ÷ 4 = $75 off. $300 − $75 = $225." }, { t: "Find what she pays directly", s: "She pays 100% − 25% = 75% = [3/4] of the price. $75 × 3 = $225." }] },
        answer: "**$225**. 25% is a quarter, and a quarter of $300 is $75. $300 − $75 = $225."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Using the protractor, measure how many degrees are in this angle.",
        img: "u20-protractor-b.png",
        interact: [
          { kind: "angle", start: 300, reflex: true, degrees: true, names: true, hint: "Make the same angle as the curved arrow on the protractor." },
          { kind: "input", fields: [{ label: "The angle is", min: 299, max: 301, suffix: "°" }] },
          { kind: "choose", rows: [{ t: "This angle is", options: ["acute", "obtuse", "reflex"], a: 2 }] }
        ],
        answer: "**300°**, a reflex angle. One arm is on 0 of the outside scale; the curved arrow goes the long way round to the other arm at 300. The small angle between the arms is 60°, and 360° − 60° = 300°.",
        explain: "Measured from the slide's picture (the small angle is about 60°). Check accepts 299° to 301°."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "6S were surveying 6W about their interests outside school. Design a question to ask that will identify data on 6W's interests.",
        interact: [{ kind: "select", hint: "Tap every question that would collect data on 6W's interests outside school.", items: [
          ["What is your favourite activity to do outside school?", true],
          ["Which of these do you do after school: sport, music, art, gaming, other?", true],
          ["How many hours a week do you spend on your hobby?", true],
          ["What is your favourite subject at school?", false],
          ["How old are you?", false]] }],
        answer: "Answers vary, for example: **What is your favourite activity to do outside school?** Giving answer choices (sport, music, art, gaming, other) makes the data easier to tally and graph."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Record the equivalent capacity using decimal representations: half a litre, 500 mL, 750 mL, 250 mL.",
        interact: [
          { kind: "shade", parts: 4, pct: true, hint: "This is 1 litre. Each part is 250 mL." },
          { kind: "input", fields: [{ label: "Half a litre", value: 0.5, suffix: "L" }, { label: "500 mL", value: 0.5, suffix: "L" }, { label: "750 mL", value: 0.75, suffix: "L" }, { label: "250 mL", value: 0.25, suffix: "L" }] }
        ],
        answer: "Half a litre = **0.5 L** · 500 mL = **0.5 L** · 750 mL = **0.75 L** · 250 mL = **0.25 L**. There are 1000 mL in 1 L, so divide the millilitres by 1000."
      }
    ],
    // Review 7 (Week 10 Wednesday)
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which number is not a factor of 80?",
        options: ["40", "8", "6", "16"],
        answer: 2,
        explain: "80 = 2 × 40 = 8 × 10 = 16 × 5. 80 ÷ 6 = 13 remainder 2, so 6 is not a factor of 80.",
        interact: [{ kind: "numchart", from: 1, to: 80, answer: [1, 2, 4, 5, 8, 10, 16, 20, 40, 80], hint: "Tap every factor of 80. Is 6 one of them?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Class 6W are going to an aquarium. The cost is $35 per student for entry plus $10 each for a photograph with a seal. There are 30 students in 6W. What is the total cost of the excursion? Explain the strategy used to find a solution.",
        interact: [
          { kind: "bar", whole: { v: 1350, l: "?", n: "total cost", hide: true }, parts: [{ v: 1050, l: "30 × $35", n: "entry" }, { v: 300, l: "30 × $10", n: "photos" }], hint: "Tap the ? to reveal the total." },
          { kind: "input", fields: [{ label: "Total cost", prefix: "$", value: 1350 }] }
        ],
        cubes: { ops: ["×", "+"], solve: [{ t: "Cost per student first", s: "$35 + $10 = $45 for each student. 30 × $45 = 3 × 45 × 10 = $1350." }, { t: "Entry and photos separately", s: "Entry: 30 × $35 = $1050. Photos: 30 × $10 = $300. $1050 + $300 = $1350." }] },
        answer: "**$1350**. Each student costs $35 + $10 = $45, and 30 × $45 = $1350.",
        explain: "This assumes every student has a photograph with the seal (\"$10 each\")."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Measure, record and name the angle.",
        img: "u20-protractor-c.png",
        interact: [
          { kind: "angle", start: 120, degrees: true, names: true, hint: "Make the same angle as the protractor shows." },
          { kind: "input", fields: [{ label: "The angle is", min: 73, max: 76, suffix: "°" }] },
          { kind: "choose", rows: [{ t: "This angle is", options: ["acute", "right", "obtuse"], a: 0 }] }
        ],
        answer: "**About 75°**, an **acute** angle. One arm lies on 0 of the inside scale, so read the inside scale: the other arm is about halfway between 70 and 80.",
        explain: "Measured from the slide's picture, the arm sits at about 74°. Check accepts 73° to 76°. If a student says 105°, they read the outside scale."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is an appropriate vertical scale to represent 6W's data about their favourite hobby? Bike riding 5, soccer 12, crafting 9, bird watching 5, bush walking 6.",
        img: "u20-hobbies.png",
        interact: [
          { kind: "bargraph", max: 12, step: 2, ylabel: "Number of students", xlabel: "Types of hobbies", label: "6W's favourite hobbies",
            series: [{ l: "Students", c: "#8FC31F" }],
            groups: [{ l: "Bike riding", v: [5], c: "#F0E21E" }, { l: "Soccer", v: [12], c: "#8FC31F" }, { l: "Crafting", v: [9], c: "#D6173D" }, { l: "Bird watching", v: [5], c: "#F39325" }, { l: "Bush walking", v: [6], c: "#C76BE0" }] },
          { kind: "choose", rows: [{ t: "Scale", options: ["0 to 12, counting by 1s", "0 to 12, counting by 2s", "0 to 100, counting by 10s", "0 to 6, counting by 1s"], a: 1 }] }
        ],
        answer: "**0 to 12, counting by 2s** (0, 2, 4, 6, 8, 10, 12). That fills the 7 boxes on the axis, reaches the largest value (12) and each odd value sits halfway between two lines.",
        explain: "Several scales could work; the slide's graph has 7 boxes on the vertical axis, so 0 to 12 in 2s is the one that fits. Counting by 1s would need 13 labels."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Rosie catches the 14:48 bus and gets off at 15:30. Where is her start and end location?",
        img: "u20-bus.png",
        interact: [
          { kind: "jumps", time: "24", start: 888, end: 930, steps: [12, 30], hint: "How long is the trip? Jump from 1448 to 1530." },
          { kind: "choose", rows: [
            { t: "Start", options: ["John St near Lake St, Warners Bay", "Charlestown Square, Pearson St, Stand A", "Dudley Road Shops, Whitebridge"], a: 1 },
            { t: "End", options: ["Ntaba Rd opp Dalrymple St, Jewells", "Wommara Ave after John Fisher Rd, Belmont North", "Pacific Hwy opp Macquarie St, Belmont"], a: 1 }] }
        ],
        answer: "Start: **Charlestown Square, Pearson St, Stand A** (14:48). Follow that column down to 15:30: end **Wommara Ave after John Fisher Rd, Belmont North**. The trip takes 42 minutes."
      }
    ],
    // Review 8 (Week 10 Thursday)
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "48 has 10 factors.",
        answer: true,
        explain: "Factor pairs of 48: 1 × 48, 2 × 24, 3 × 16, 4 × 12, 6 × 8. That is 1, 2, 3, 4, 6, 8, 12, 16, 24, 48: 10 factors.",
        interact: [{ kind: "numchart", from: 1, to: 48, answer: [1, 2, 3, 4, 6, 8, 12, 16, 24, 48], hint: "Tap every factor of 48, then count them." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Write the equivalent fraction for the following divisions: 6 ÷ 8, 4 ÷ 5, 2 ÷ 7.",
        interact: [
          { kind: "shade", parts: 8, hint: "6 ÷ 8: share 6 wholes among 8. Each share is 6 eighths. Shade [6/8]." },
          { kind: "input", fields: [{ label: "6 ÷ 8 =", accept: ["6/8", "3/4"], placeholder: "a/b" }, { label: "4 ÷ 5 =", accept: ["4/5"], placeholder: "a/b" }, { label: "2 ÷ 7 =", accept: ["2/7"], placeholder: "a/b" }] }
        ],
        answer: "6 ÷ 8 = **[6/8]** (= [3/4]) · 4 ÷ 5 = **[4/5]** · 2 ÷ 7 = **[2/7]**. The number being divided is the numerator and the divisor is the denominator.",
        explain: "The slide's text was missing from the extract; the question is taken from its picture."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Nichole caught the train from Gosford to Grafton. How long was she on the train?",
        table: [["Destination", "Departure time"], ["Sydney", "07:00"], ["Gosford", "08:30"], ["Newcastle", "10:00"], ["Gloucester", "12:00"], ["Wauchope", "14:30"], ["Kempsey", "15:30"], ["Coffs Harbour", "17:00"], ["Grafton", "18:15"], ["Casino", "19:45"]],
        interact: [
          { kind: "jumps", time: "24", start: 510, end: 1095, steps: [30, 60, 15], hint: "Jump from 0830 to 0900, then by hours, then the minutes left over." },
          { kind: "input", fields: [{ label: "Hours", value: 9 }, { label: "Minutes", value: 45 }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Jump along a time line", s: "08:30 → 09:00 is 30 min. 09:00 → 18:00 is 9 h. 18:00 → 18:15 is 15 min. 9 h + 30 min + 15 min = 9 h 45 min." }, { t: "Hours then minutes", s: "08:30 → 17:30 is 9 h. 17:30 → 18:15 is 45 min. Total 9 h 45 min." }] },
        answer: "**9 hours 45 minutes** (08:30 to 18:15).",
        explain: "The table only gives departure times, so this takes Grafton's 18:15 as the time Nichole got off."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "A class survey shows the number of books students read in a month: 4, 6, 5, 8, 7, 5, 6, 4. Identify a suitable scale for the vertical axis. Explain why your chosen scale is appropriate.",
        interact: [
          { kind: "bargraph", max: 10, step: 1, ylabel: "Number of books", xlabel: "Student", label: "Books read in a month",
            series: [{ l: "Books", c: "#3E86B8" }],
            groups: [{ l: "1", v: [4] }, { l: "2", v: [6] }, { l: "3", v: [5] }, { l: "4", v: [8] }, { l: "5", v: [7] }, { l: "6", v: [5] }, { l: "7", v: [6] }, { l: "8", v: [4] }] },
          { kind: "choose", rows: [{ t: "A suitable scale", options: ["0 to 10, counting by 1s", "0 to 100, counting by 10s", "0 to 50, counting by 5s", "0 to 5, counting by 1s"], a: 0 }] }
        ],
        answer: "**0 to 10, counting by 1s**. The largest value is 8, so the scale needs to go past 8, and the values are small whole numbers, so steps of 1 let you read each bar exactly. Steps of 10 or 5 would make the bars too short to compare.",
        explain: "The slide doesn't say what the graph shows; here each column is one student's number of books. 0 to 8 in 1s would also be fine."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Use the protractors to measure and identify the angles.",
        img: "u20-protractors.png",
        interact: [
          { kind: "angle", start: 180, reflex: true, names: true, degrees: true, hint: "Make each angle shown on the protractors." },
          { kind: "choose", rows: [
            { t: "Top left", options: ["90° right", "180° straight", "270° reflex", "360° revolution"], a: 1 },
            { t: "Top right", options: ["90° right", "180° straight", "270° reflex", "360° revolution"], a: 2 },
            { t: "Bottom left", options: ["90° right", "180° straight", "270° reflex", "360° revolution"], a: 0 },
            { t: "Bottom right", options: ["90° right", "180° straight", "270° reflex", "360° revolution"], a: 3 }] }
        ],
        answer: "Top left: **180°, a straight angle** · Top right: **270°, a reflex angle** · Bottom left: **90°, a right angle** · Bottom right: **360°, a revolution**."
      }
    ]
  ]
});
