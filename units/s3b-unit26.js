/*
  Stage 3 Year B, Unit 26 — Review of learning (Term 2, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 2, ls: 1, unit: 26,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 26 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "sr", focus: "Additive relations B",
        prompt: "I am sorting 75 toy cars into 4 coloured boxes. The purple box has twice as many as the blue box. Which of the following could be correct? You may select more than one answer.",
        interact: [{ kind: "select", hint: "Tap every option that could be correct. Check the total is 75 and purple is double blue.", items: [
          ["A: orange 22, blue 10, green 23, purple 20", true],
          ["B: orange 20, blue 15, green 12, purple 28", false],
          ["C: orange 25, blue 13, green 15, purple 22", false],
          ["D: orange 19, blue 15, green 11, purple 30", true]] }],
        cubes: { ops: ["+", "×"], solve: [{ t: "Check the double first", s: "Purple must be 2 × blue. A: 2 × 10 = 20 ✓. B: 2 × 15 = 30, not 28 ✗. C: 2 × 13 = 26, not 22 ✗. D: 2 × 15 = 30 ✓." }, { t: "Then check the total", s: "A: 22 + 10 + 23 + 20 = 75 ✓. D: 19 + 15 + 11 + 30 = 75 ✓." }] },
        answer: "**A** and **D**. Both add to 75, and purple is double blue (20 = 2 × 10, 30 = 2 × 15). B and C also add to 75, but purple isn't double blue."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "In non-standard partitioning, record how many tens, hundred thousands and millions are in 592 640 173.",
        interact: [
          { kind: "pv", cols: ["HM", "TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 592640173, hint: "Cover the places to the right of the column you want. The digits left over tell you how many." },
          { kind: "input", fields: [{ label: "Tens", value: 59264017 }, { label: "Hundred thousands", value: 5926 }, { label: "Millions", value: 592 }] }
        ],
        answer: "**59 264 017 tens**, **5926 hundred thousands** and **592 millions** (each with some left over)."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What is the mode for K–2? What is the mode for 3–6 students?",
        interact: [
          { kind: "bargraph", max: 14, step: 2, ylabel: "Number of votes", xlabel: "Ideas", label: "Ideas for the new library: votes from K to 2 and 3 to 6",
            series: [{ l: "K to 2", c: "#00B050" }, { l: "3 to 6", c: "#7030A0" }],
            groups: [{ l: "Picture", v: [8, 5] }, { l: "Graphic", v: [3, 12] }, { l: "Pet bird", v: [2, 1] }, { l: "Computer", v: [6, 10] }, { l: "Sofa", v: [9, 9] }] },
          { kind: "choose", rows: [
            { t: "Mode for K–2", options: ["Picture books", "Graphic novels", "A computer", "Sofa and cushions"], a: 3 },
            { t: "Mode for 3–6", options: ["Picture books", "Graphic novels", "A computer", "Sofa and cushions"], a: 1 }] }
        ],
        answer: "K–2: **sofa and cushions** (9 votes). 3–6: **more graphic novels** (12 votes). The mode is the idea with the most votes."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Draw an empty number line starting at 0 and ending at 1. Mark the unit fractions [1/2], [1/4], [1/8] and [1/3] on the number line.",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.035, items: [["[1/2]", 0.5], ["[1/4]", 0.25], ["[1/8]", 0.125], ["[1/3]", 1 / 3]] }],
        answer: "[1/8] is closest to 0, then [1/4], then [1/3], then [1/2] in the middle. The bigger the denominator, the smaller the unit fraction."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Using the scale, record the years for the following events: moved into a new house, met my baby brother, got to Zone in Cross Country.",
        img: "u26-timeline.png",
        interact: [{ kind: "input", fields: [{ label: "Moved into a new house", value: 2023 }, { label: "Met my baby brother", value: 2015 }, { label: "Got to Zone in Cross Country", value: 2022 }] }],
        answer: "Moved into a new house: **2023** · Met my baby brother: **2015** · Got to Zone in Cross Country: **2022**. Each dot is 1 year; count along from a labelled year.",
        explain: "Read from the timeline: each label sits above its year's dot, and the years alternate between the two rows of numbers."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "836 + 1984 + 92. This number sentence accurately represents the following word problem: Brian is getting a new kitchen in his home. So far, he has paid $1984 for the builder, $836 on a new oven and $92 on a kettle.",
        answer: true,
        explain: "The sentence adds all three costs. The order doesn't matter when you add, so 836 + 1984 + 92 = 1984 + 836 + 92 = $2912.",
        interact: [{ kind: "bar", whole: { v: 2912, l: "?", n: "total paid", hide: true }, parts: [{ v: 1984, l: "$1984", n: "builder" }, { v: 836, l: "$836", n: "oven" }, { v: 92, l: "$92", n: "" }] }],
        cubes: { ops: ["+"], solve: [{ t: "Order doesn't matter", s: "Addition is commutative: 836 + 1984 + 92 gives the same total as 1984 + 836 + 92." }, { t: "Find the total", s: "1984 + 836 = 2820, + 92 = $2912." }] }
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Round this number to the nearest million: 274 896 173",
        interact: [
          { kind: "marker", min: 274000000, max: 275000000, divs: 10, majorEvery: 5, labels: [274000000, 274500000, 275000000], label: "274 896 173", hint: "Slide the pin to 274 896 173. Which million is it closer to?" },
          { kind: "input", fields: [{ label: "Nearest million", value: 275000000 }] }
        ],
        answer: "**275 000 000**. The hundred thousands digit is 8, so it is past halfway and rounds up."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What information could be added to interpret this column graph?",
        img: "u26-graph.png",
        interact: [{ kind: "select", hint: "Tap everything that would help someone read the graph.", items: [
          ["A title", true], ["A label on each column (the categories)", true], ["Numbers on the vertical scale", true], ["Axis labels", true], ["A different colour for each column", false], ["Thicker columns", false]] }],
        answer: "A **title**, **category labels** under each column, **numbers on the scale** and **axis labels**. Without them we can see which column is tallest, but not what it means."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Record the equivalent fractions for half in quarters, eighths, sixths and tenths.",
        interact: [
          { kind: "shade", parts: 4, pct: true, hint: "Quarters: shade half." },
          { kind: "shade", parts: 8, pct: true, hint: "Eighths: shade half." },
          { kind: "shade", parts: 6, pct: true, hint: "Sixths: shade half." },
          { kind: "shade", parts: 10, pct: true, hint: "Tenths: shade half." },
          { kind: "input", fields: [{ label: "Quarters", accept: ["2/4"], placeholder: "a/b" }, { label: "Eighths", accept: ["4/8"], placeholder: "a/b" }, { label: "Sixths", accept: ["3/6"], placeholder: "a/b" }, { label: "Tenths", accept: ["5/10"], placeholder: "a/b" }] }
        ],
        answer: "[1/2] = [2/4] = [4/8] = [3/6] = [5/10]. The numerator is always half of the denominator."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "How could you prove this is an equilateral triangle? Communicate your thinking.",
        interact: [
          { kind: "corners", view: [320, 260], deg: true, r: 26, q: 34, shapes: [{ p: [[160, 23], [280, 230.8], [40, 230.8]], fill: "#9FB4E8" }], hint: "Tap a corner to test it, tap again to measure it." },
          { kind: "select", hint: "Tap every way that would prove it.", items: [
            ["Measure all three sides with a ruler: they are the same length", true],
            ["Measure all three angles with a protractor: each is 60°", true],
            ["Fold it: it has 3 lines of symmetry", true],
            ["It has a flat bottom", false],
            ["It points upwards", false]] }
        ],
        answer: "Show that **all three sides are equal** (measure them), or that **all three angles are 60°**. Folding along 3 lines of symmetry also works."
      }
    ],
    // Review 3
    [
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Lisa says, \"I added three to both sides and it made it easier.\" If Lisa was using an efficient strategy, which equation might she have been solving? You may choose more than one answer. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 367, steps: [3], hint: "Try A: add 3 to 367. Where do you land?" },
          { kind: "select", hint: "Tap every equation where adding 3 to both numbers makes it easier.", items: [["A: 5000 − 367", true], ["B: 5004 − 291", false], ["C: 4997 − 497", true], ["D: 2291 − 1116", false]] }
        ],
        answer: "**A** and **C**. A: 5003 − 370 = 4633 (no regrouping). C: 5000 − 500 = 4500. Adding 3 to B or D doesn't make a friendly number.",
        explain: "Adding the same amount to both numbers keeps the difference the same (constant difference)."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "4.293. What is the value of the digit in the tenths place? The hundredths place? The thousandths place? How many thousandths are represented in the number?",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 4.293 },
          { kind: "input", fields: [{ label: "Tenths digit's value", value: 0.2 }, { label: "Hundredths digit's value", value: 0.09 }, { label: "Thousandths digit's value", value: 0.003 }, { label: "Thousandths in the number", value: 4293 }] }
        ],
        answer: "Tenths: **0.2** · Hundredths: **0.09** · Thousandths: **0.003** · The number is **4293 thousandths**."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Write a question that can be answered using this data.",
        interact: [
          { kind: "bargraph", max: 10, step: 2, ylabel: "Hours per week", xlabel: "Year group", label: "Average hours of physical activity per week by year group",
            series: [{ l: "Hours", c: "#3E86B8" }],
            groups: [{ l: "Year 3", v: [5] }, { l: "Year 4", v: [6] }, { l: "Year 5", v: [8] }, { l: "Year 6", v: [9] }] },
          { kind: "select", hint: "Tap every question this graph can answer.", items: [
            ["Which year group is the most active?", true],
            ["How many more hours does Year 6 do than Year 3?", true],
            ["What sport do Year 5 play most?", false],
            ["How many students are in Year 4?", false],
            ["Does activity go up as students get older?", true]] }
        ],
        answer: "Answers vary, for example: Which year group is most active? (Year 6, 9 hours.) How many more hours does Year 6 do than Year 3? (4 hours.)"
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Trish ate [1/4] of a chocolate bar. Her friend Gary ate [1/2] of a different chocolate bar. Trish claims that she had more chocolate than Gary. How could she be correct? Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [660, 280], hint: "Tap Eaten, then tap the part each person ate.",
            cats: [{ k: "e", t: "Eaten", c: "#8B4A1C" }],
            shapes: [
              { p: "20,40 170,40 170,120 20,120", a: "e", fill: "#D9A06B" }, { p: "170,40 320,40 320,120 170,120", fill: "#D9A06B" }, { p: "320,40 470,40 470,120 320,120", fill: "#D9A06B" }, { p: "470,40 620,40 620,120 470,120", fill: "#D9A06B" },
              { p: "20,180 130,180 130,250 20,250", a: "e", fill: "#D9A06B" }, { p: "130,180 240,180 240,250 130,250", fill: "#D9A06B", deco: "<text x='95' y='28' class='co-lab'>Trish's bar</text><text x='88' y='168' class='co-lab'>Gary's bar</text>" }] },
          { kind: "choose", rows: [{ t: "How could Trish be correct?", options: ["Her chocolate bar was bigger", "[1/4] is bigger than [1/2]", "She ate more slowly"], a: 0 }] }
        ],
        cubes: { ops: ["÷"], note: "Compare the wholes before comparing the fractions.", solve: [{ t: "Draw both wholes", s: "Draw Trish's bar more than twice as long as Gary's. Her quarter is then bigger than his half." }, { t: "Use numbers", s: "If Trish's bar is 200 g, [1/4] is 50 g. If Gary's is 60 g, [1/2] is 30 g. 50 g > 30 g." }] },
        answer: "Trish's chocolate bar must have been **more than twice as big** as Gary's. A fraction depends on the size of the whole."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Is this an example of biased data collection? A sports store wanted to find out which sport is most popular in the community. They handed out surveys only at the local football club asking, \"What is your favourite sport?\" Communicate your thinking.",
        interact: [{ kind: "choose", rows: [
          { t: "Is it biased?", options: ["Yes", "No"], a: 0 },
          { t: "Why?", options: ["Only people at a football club were asked", "The question was too short", "Too many people were asked"], a: 0 }] }],
        answer: "**Yes**. People at a football club are likely to choose football, so the results don't represent the whole community. Surveying in many places would be fairer."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "These number combinations are all equal to 100: 77 + 23, 75 + 25, 84 + 16, 81 + 19",
        answer: true,
        explain: "The ones make 10 (7 + 3, 5 + 5, 4 + 6, 1 + 9), and the tens make 90 (70 + 20, 70 + 20, 80 + 10, 80 + 10). 90 + 10 = 100 every time.",
        interact: [{ kind: "group", items: [77, 23, 75, 25, 84, 16, 81, 19] }]
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Draw an empty number line starting at 0 and ending at 1. Mark the following decimals on the number line: 0.275, 0.704, 0.586, 0.931",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.03, items: [["0.275", 0.275], ["0.704", 0.704], ["0.586", 0.586], ["0.931", 0.931]] }],
        answer: "0.275 is just past a quarter, 0.586 just past halfway, 0.704 just past 0.7 and 0.931 close to 1. Use the tenths digit first, then the hundredths."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What is the range of resting heart rates?",
        table: [["Age", "Heart rate (beats per minute)"], ["0–1 month old", "70–190"], ["1–11 months old", "80–160"], ["1–2 years old", "80–130"], ["3–4 years old", "80–120"], ["5–6 years old", "75–115"], ["7–9 years old", "70–110"], ["10 years and older, and adults", "60–100"], ["Well-trained athlete", "40–60"]],
        interact: [{ kind: "input", fields: [{ label: "Highest", value: 190, suffix: "bpm" }, { label: "Lowest", value: 40, suffix: "bpm" }, { label: "Range", value: 150, suffix: "bpm" }] }],
        answer: "Highest 190, lowest 40, so the range is 190 − 40 = **150 beats per minute**.",
        explain: "This takes the range across the whole table. For one age group the range is that row's highest minus lowest, for example 100 − 60 = 40 for adults."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Draw a rectangle. Subdivide the rectangle to represent [1/4] of the area and [1/2] of the area.",
        interact: [
          { kind: "classify", view: [620, 220], hint: "Choose a fraction, then tap the parts it covers. Tap a part again to clear it.",
            cats: [{ k: "q", t: "[1/4] of the area", c: "#F2994A" }, { k: "h", t: "[1/2] of the area", c: "#2F6FE4" }],
            shapes: [{ p: "20,20 170,20 170,200 20,200", a: "q", fill: "#E6F4FD" }, { p: "170,20 320,20 320,200 170,200", a: "h", fill: "#E6F4FD" }, { p: "320,20 470,20 470,200 320,200", a: "h", fill: "#E6F4FD" }, { p: "470,20 600,20 600,200 470,200", fill: "#E6F4FD" }] },
          { kind: "input", fields: [{ label: "Fraction left over", value: 0.25, placeholder: "a/b" }] }
        ],
        answer: "Split the rectangle into 4 equal parts. 1 part is [1/4], 2 parts are [1/2], and [1/4] is left over.",
        explain: "The slide's own question is open (draw any rectangle). The last part is narrower in the picture only so it fits; treat all four parts as equal quarters."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the coordinates for the following: canoeing, archery, campground, hiking.",
        interact: [
          { kind: "plane", range: [-5, 5, -5, 5], points: [{ l: "Canoeing", x: -4, y: -2 }, { l: "Archery", x: -1, y: -1 }, { l: "Campground", x: 3, y: -1 }, { l: "Hiking", x: -2, y: 2 }, { l: "Campfire", x: 2, y: 4 }, { l: "Kitchen", x: 1, y: 1 }] },
          { kind: "input", fields: [
            { label: "Canoeing x", value: -4 }, { label: "y", value: -2 },
            { label: "Archery x", value: -1 }, { label: "y", value: -1 },
            { label: "Campground x", value: 3 }, { label: "y", value: -1 },
            { label: "Hiking x", value: -2 }, { label: "y", value: 2 }] }
        ],
        answer: "Canoeing **(−4, −2)** · Archery **(−1, −1)** · Campground **(3, −1)** · Hiking **(−2, 2)**. Across the x-axis first, then up or down.",
        explain: "The camp map is redrawn as a plain Cartesian plane with the same points. The coordinates are typed as x and y in separate boxes so the negative signs are checked."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "What would be the closest estimated total? 418 + 362 + 257",
        options: ["900", "1000", "1750", "2000"],
        answer: 1,
        explain: "Round to the nearest hundred: 400 + 400 + 300 = 1100, which is closest to 1000. The exact total is 1037.",
        interact: [{ kind: "marker", min: 900, max: 2000, divs: 11, labels: [900, 1000, 1500, 2000], label: "1037", hint: "The exact total is 1037. Slide the pin there. Which option is closest?" }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert the following measurements: 3846 cm = ___ mm, 9.243 km = ___ m, 857 m = ___ km",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O", "t", "h", "th"], start: 3846, shift: true, hint: "cm to mm: × 10. km to m: × 1000. m to km: ÷ 1000." },
          { kind: "input", fields: [{ label: "3846 cm =", value: 38460, suffix: "mm" }, { label: "9.243 km =", value: 9243, suffix: "m" }, { label: "857 m =", value: 0.857, suffix: "km" }] }
        ],
        answer: "**38 460 mm** (× 10) · **9243 m** (× 1000) · **0.857 km** (÷ 1000)"
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Arrange the following numbers in ascending order: 1 632 000, 1 670 900, 2 805 500, 2 970 800",
        interact: [{ kind: "order", items: ["2 805 500", "1 632 000", "2 970 800", "1 670 900"], answer: [1, 3, 0, 2] }],
        answer: "1 632 000, 1 670 900, 2 805 500, 2 970 800. Compare the millions, then the hundred thousands, then the ten thousands."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "What is [3/4] of 8? Record your answer as: I know [3/4] of 8 is ___ because ___ ÷ ___ = ___ and ___ × 3 = ___.",
        interact: [
          { kind: "pack", mode: "share", n: 4, total: 8, thing: "counters", label: "group", hint: "Share the 8 counters into 4 equal groups. Then count 3 of the groups." },
          { kind: "input", fields: [{ label: "[3/4] of 8 is", value: 6 }, { label: "because", value: 8 }, { label: "÷", value: 4 }, { label: "=", value: 2 }, { label: "and", value: 2 }, { label: "× 3 =", value: 6 }] }
        ],
        answer: "I know [3/4] of 8 is **6** because 8 ÷ 4 = 2 and 2 × 3 = 6.",
        explain: "The slide's sentence ends after the division. A multiplication step (2 × 3 = 6) has been added so the sentence reaches the answer."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the following equivalent measurements: 1000 m = ___ km, ___ m = 3 km, 8500 m = ___ km, ___ m = 7.5 km",
        interact: [
          { kind: "jumps", start: 0, steps: [1000, 500], hint: "Each jump of 1000 m is 1 km. A jump of 500 m is half a kilometre." },
          { kind: "input", fields: [{ label: "1000 m =", value: 1, suffix: "km" }, { label: "3 km =", value: 3000, suffix: "m" }, { label: "8500 m =", value: 8.5, suffix: "km" }, { label: "7.5 km =", value: 7500, suffix: "m" }] }
        ],
        answer: "1000 m = **1 km** · **3000 m** = 3 km · 8500 m = **8.5 km** · **7500 m** = 7.5 km"
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "45 921 + 836 = 46 807. Communicate your thinking.",
        answer: false,
        explain: "45 921 + 836 = 46 757. 900 + 800 = 1700 hundreds, so the hundreds digit is 7, not 8. 46 807 is 50 too many.",
        interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: { TTh: 4, Th: 5, H: 17, T: 5, O: 7 }, hint: "This chart shows 45 921 + 836 before regrouping. Group 10 hundreds into a thousand." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the following mass using decimal notation: 8 kilograms and 250 grams, 7200 grams, 6 kilograms and 775 grams.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 8.25, hint: "Kilograms are the ones. 1 gram is 1 thousandth of a kilogram." },
          { kind: "input", fields: [{ label: "8 kg 250 g =", value: 8.25, suffix: "kg" }, { label: "7200 g =", value: 7.2, suffix: "kg" }, { label: "6 kg 775 g =", value: 6.775, suffix: "kg" }] }
        ],
        answer: "**8.25 kg** (8.250) · **7.2 kg** (7.200) · **6.775 kg**"
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Approximate the following decimals to one decimal place: 1.82, 1.27, 1.53, 1.94, 1.38, 1.66",
        interact: [
          { kind: "numberline", min: 1, max: 2, ticks: 10, tol: 0.03, items: [["1.82", 1.82], ["1.27", 1.27], ["1.53", 1.53], ["1.94", 1.94], ["1.38", 1.38], ["1.66", 1.66]] },
          { kind: "input", fields: [{ label: "1.82 ≈", value: 1.8 }, { label: "1.27 ≈", value: 1.3 }, { label: "1.53 ≈", value: 1.5 }, { label: "1.94 ≈", value: 1.9 }, { label: "1.38 ≈", value: 1.4 }, { label: "1.66 ≈", value: 1.7 }] }
        ],
        answer: "1.82 ≈ **1.8** · 1.27 ≈ **1.3** · 1.53 ≈ **1.5** · 1.94 ≈ **1.9** · 1.38 ≈ **1.4** · 1.66 ≈ **1.7**"
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "The whole is equal to 24. What is [1/4] of 24? Communicate your reasoning.",
        interact: [
          { kind: "bar", whole: { v: 24, l: "24", n: "the whole" }, parts: [{ v: 6, l: "6", n: "[1/4]", hide: true }, { v: 6, l: "6", n: "[1/4]", hide: true }, { v: 6, l: "6", n: "[1/4]", hide: true }, { v: 6, l: "6", n: "[1/4]", hide: true }] },
          { kind: "input", fields: [{ label: "[1/4] of 24 =", value: 6 }] }
        ],
        answer: "**6**. 24 shared into 4 equal parts is 6 each: 24 ÷ 4 = 6."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Communicate your reasoning about whether the following statement is true or not: These rectangles have different dimensions, so they can not have the same perimeter.",
        img: "u26-rects.png",
        interact: [
          { kind: "sides", view: [500, 190], label: "Blue rectangle", fill: "#166CFF", poly: [[200, 20], [300, 20], [300, 170], [200, 170]] },
          { kind: "sides", view: [500, 115], label: "Red rectangle", fill: "#D6163B", poly: [[100, 20], [400, 20], [400, 95], [100, 95]] },
          { kind: "input", fields: [{ label: "Blue perimeter", value: 20, suffix: "units" }, { label: "Red perimeter", value: 20, suffix: "units" }] },
          { kind: "choose", rows: [{ t: "Is the statement true?", options: ["True", "Not true"], a: 1 }] }
        ],
        answer: "**Not true.** Count the grid squares: blue is 4 by 6 (4 + 6 + 4 + 6 = 20) and red is 8 by 2 (8 + 2 + 8 + 2 = 20). Different dimensions, same perimeter.",
        explain: "The side lengths are counted from the grid squares on the slide (4 × 6 and 8 × 2)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "What do you consider the closest estimate to the number of books displayed? Communicate your reasoning.",
        img: "u26-books.jpg",
        options: ["100", "150", "200", "250"],
        answer: 1,
        explain: "About 20 books on a shelf. The slide shows 6 shelves (this picture twice), so about 6 × 20 = 120 to 6 × 25 = 150. 150 is the closest option.",
        interact: [{ kind: "jumps", start: 0, steps: [20, 25], hint: "Jump once for each shelf you can see." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "A water bottle holds 1.375 litres of water. After Sam drinks some water, there is 0.842 litres left. How much water did Sam drink?",
        interact: [
          { kind: "bar", whole: { v: 1.375, l: "1.375 L", n: "full bottle" }, parts: [{ v: 0.842, l: "0.842 L", n: "left" }, { v: 0.533, l: "0.533 L", n: "Sam drank", hide: true }] },
          { kind: "input", fields: [{ label: "Sam drank", value: 0.533, suffix: "L" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count up", s: "0.842 + 0.008 = 0.85, + 0.15 = 1, + 0.375 = 1.375. 0.008 + 0.15 + 0.375 = 0.533 L." }, { t: "Subtract", s: "1.375 − 0.842: 1375 thousandths − 842 thousandths = 533 thousandths = 0.533 L." }] },
        answer: "**0.533 litres** (533 mL). 1.375 − 0.842 = 0.533."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Draw an empty number line starting at 0 and ending at 1. Mark the following benchmark numbers on the number line: 0.25, 0.5 and 0.75. Communicate your reasoning.",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.035, items: [["0.25", 0.25], ["0.5", 0.5], ["0.75", 0.75]] }],
        answer: "0.5 is halfway. 0.25 is halfway between 0 and 0.5, and 0.75 is halfway between 0.5 and 1. They split the line into quarters."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Use a number line to record the solution: [2/4] + [1/8] =",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 8, tol: 0.03, items: [["[2/4]", 0.5], ["[4/8]", 0.5], ["[5/8]", 0.625]] },
          { kind: "input", fields: [{ label: "[2/4] + [1/8] =", accept: ["5/8"], placeholder: "a/b" }] }
        ],
        answer: "[2/4] = [4/8], so [4/8] + [1/8] = **[5/8]**."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Calculate the perimeter of this rectangle drawn onto 1 cm × 1 cm grid paper. Communicate your reasoning.",
        img: "u26-grid.png",
        interact: [
          { kind: "sides", view: [560, 300], label: "Rectangle on 1 cm grid paper", fill: "#166CFF", poly: [[130, 20], [430, 20], [430, 260], [130, 260]] },
          { kind: "input", fields: [{ label: "Perimeter", value: 36, suffix: "cm" }] }
        ],
        answer: "The rectangle is **10 cm** long and **8 cm** wide: 10 + 8 + 10 + 8 = **36 cm**.",
        explain: "The side lengths are counted from the grid squares on the slide (10 by 8)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "This is a reasonable estimate: 4500 − 650 = 3200. Communicate your reasoning.",
        answer: false,
        explain: "650 is about 700, and 4500 − 700 = 3800. The exact answer is 3850, so 3200 is about 650 too low.",
        interact: [{ kind: "marker", min: 3000, max: 4500, divs: 15, majorEvery: 5, labels: [3000, 3500, 4000, 4500], label: "?", hint: "Slide the pin to your estimate of 4500 − 650." }]
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "A giant dominoes set is on sale for 20% off the original price of $75. A foam javelin set is on sale for $12 off the original price of $68. Which item has the biggest discount? Communicate your reasoning.",
        interact: [
          { kind: "shade", parts: 10, pct: true, each: 7.5, money: true, hint: "The strip is the $75 dominoes set. Each part is 10%. Shade the 20% discount." },
          { kind: "input", fields: [{ label: "Dominoes discount", prefix: "$", value: 15 }] },
          { kind: "choose", rows: [{ t: "Biggest discount", options: ["Dominoes", "Javelin"], a: 0 }] }
        ],
        cubes: { ops: ["×"], also: ["÷"], solve: [{ t: "Find 10% first", s: "10% of $75 = $7.50, so 20% = $15. $15 > $12." }, { t: "Use a fraction", s: "20% = [1/5]. $75 ÷ 5 = $15 off, more than the $12 off the javelin." }] },
        answer: "The **dominoes set**: 20% of $75 = **$15** off, which is more than $12 off the javelin."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Which states and/or territories have between 100 000 and 150 000 short-term visitor arrivals?",
        img: "u26-map.png",
        interact: [{ kind: "select", hint: "Match the colour in the key, then tap each state or territory.", items: [["WA", false], ["NT", false], ["SA", false], ["QLD", true], ["NSW", false], ["ACT", false], ["VIC", true], ["TAS", false]] }],
        answer: "**Queensland** and **Victoria** (the mid-orange colour, 100 000 to less than 150 000).",
        explain: "Source: adapted from Australian Bureau of Statistics (2023), May 2023."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Ang planted grass in [3/6] of his garden on Monday and [1/3] on Tuesday. What fraction of Ang's garden is left without grass? Draw a bar model or number line to represent your thinking.",
        interact: [
          { kind: "shade", parts: 6, hint: "The strip is Ang's garden in sixths. Shade Monday's [3/6], then Tuesday's [1/3] (how many sixths?)." },
          { kind: "input", fields: [{ label: "Left without grass", accept: ["1/6"], placeholder: "a/b" }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Use sixths", s: "[1/3] = [2/6]. [3/6] + [2/6] = [5/6]. [6/6] − [5/6] = [1/6]." }, { t: "Bar model", s: "Draw a bar of 6 equal parts. Shade 3 for Monday and 2 for Tuesday. 1 part is left." }] },
        answer: "**[1/6]**. [1/3] = [2/6], so he planted [3/6] + [2/6] = [5/6]."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Use the partial timetable to answer: On Monday, Simone was 20 minutes late to HSIE after lunch. How much time did she spend in the lesson? On Thursday, Sam went to Creative arts 45 minutes after lunch ended. What time did Sam arrive? Record your answer in 24-hour time.",
        table: [["12-hour", "24-hour", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["12:30 pm", "12:30", "Maths", "Maths", "Maths", "Maths", "Maths"], ["1:00 pm", "13:00", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch"], ["1:30 pm", "13:30", "HSIE", "HSIE", "Creative arts", "Creative arts", "Science"], ["2:00 pm", "14:00", "HSIE", "Library", "PDHPE", "Creative arts", "Science"], ["2:30 pm", "14:30", "HSIE", "Assembly", "PDHPE", "Creative arts", "Science"], ["3:00 pm", "15:00", "End of school", "End of school", "End of school", "End of school", "End of school"]],
        interact: [
          { kind: "jumps", time: "24", start: 810, end: 900, steps: [10, 20, 30, 45], hint: "Monday: HSIE runs 13:30 to 15:00. Jump from 13:30 + 20 minutes, then on to 15:00." },
          { kind: "input", fields: [{ label: "Simone's time in HSIE", value: 70, suffix: "minutes" }, { label: "Sam arrived at", accept: ["14:15"], placeholder: "hh:mm" }] }
        ],
        cubes: { ops: ["−", "+"], solve: [{ t: "Timeline", s: "HSIE: 13:30 to 15:00 is 90 minutes. 90 − 20 = 70 minutes. Lunch ends 13:30, + 45 minutes = 14:15." }, { t: "Count on", s: "Simone arrives 13:50. 13:50 → 14:00 is 10 min, → 15:00 is 60 min: 70 minutes. Sam: 13:30 + 30 = 14:00, + 15 = 14:15." }] },
        answer: "Simone: **70 minutes** (1 h 10 min). Sam arrived at **14:15**."
      }
    ]
  ]
});
