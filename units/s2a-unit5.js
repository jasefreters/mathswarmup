/*
  Stage 2 Year A, Unit 5 — Review of learning (Term 1, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 1, ls: 5, unit: 5,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 5 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "4 thousands, 8 hundreds, 4 tens and 6 ones is **recorded** as…",
        options: ["4648", "4846", "6484", "4864"],
        answer: 1,
        explain: "4 thousands = 4000, 8 hundreds = 800, 4 tens = 40 and 6 ones = 6. 4000 + 800 + 40 + 6 = 4846.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 4846 }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "The data question “What is your favourite food?” could include response categories such as chocolate, fruit, pizza and cake. Record 2 more categories for this question. Communicate your reasoning.",
        interact: [{ kind: "select", hint: "Tap every one that could be a category for “What is your favourite food?”", items: [["pasta", true], ["sushi", true], ["blue", false], ["noodles", true], ["Monday", false], ["soccer", false]] }],
        answer: "Answers vary, for example **pasta** and **sushi**. A category must be a kind of food, because that is what the question asks about."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Draw a rectangular fraction strip partitioned into fifths.",
        interact: [
          { kind: "shade", parts: 5, hint: "This strip is partitioned into 5 equal parts. Tap a part to shade it." },
          { kind: "choose", rows: [{ t: "Each part is", options: ["[1/4]", "[1/5]", "[1/10]"], a: 1 }, { t: "How many fifths make the whole strip?", options: ["4", "5", "10"], a: 1 }] }
        ],
        answer: "A strip cut into **5 equal parts**. Each part is one-fifth ([1/5]), and 5 fifths make the whole."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Order the following lengths from shortest to longest: 6 m and 35 cm, 5 m and 95 cm, 6 m and 53 cm. Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 5, max: 7, ticks: 10, tol: 0.06, items: [["6 m 35 cm", 6.35], ["5 m 95 cm", 5.95], ["6 m 53 cm", 6.53]] },
          { kind: "order", items: ["6 m and 35 cm", "5 m and 95 cm", "6 m and 53 cm"], answer: [1, 0, 2] }
        ],
        answer: "5 m and 95 cm, 6 m and 35 cm, 6 m and 53 cm. Compare the metres first (5 is less than 6), then the centimetres (35 cm is less than 53 cm)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Draw this triangle. Next draw the same triangle in 2 different orientations.",
        interact: [
          { kind: "classify", label: "A triangle and five triangles to sort", view: [1000, 175],
            hint: "This is the triangle on the left. Choose a group, then tap each triangle on the right.",
            cats: [{ k: "same", t: "Same triangle, turned or flipped", c: "#22A06B" }, { k: "diff", t: "A different triangle", c: "#D6408B" }],
            shapes: [
              { p: "200,20 300,20 300,120", a: "same", deco: "<polygon points='20,20 120,20 20,120' fill='#0B2A6B' pointer-events='none'/><text x='60' y='158' class='co-lab' style='font-size:18px'>This triangle</text><line x1='155' y1='10' x2='155' y2='150' stroke='#D6DEEA' stroke-width='3'/>" },
              { p: "350,120 450,120 450,20", a: "same" },
              { p: "500,20 500,120 600,120", a: "same" },
              { p: "650,120 750,120 700,33", a: "diff" },
              { p: "800,20 980,120 800,120", a: "diff" }] },
          { kind: "sketch" }
        ],
        answer: "Answers vary. Turning or flipping the triangle changes its **orientation**, but it is still the same triangle: the same size, with the same right angle and two equal sides.",
        explain: "The triangle on the slide is a right-angled triangle with two equal sides."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "6000 + 200 + 40 + 6 is the same as 6 thousands, 2 hundreds, 4 tens and 6 ones, which is also the same as 6246.",
        answer: true,
        explain: "All three show 6 thousands, 2 hundreds, 4 tens and 6 ones.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 6246 }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Create a list of categories for a matter of interest about favourite school subjects. Communicate your reasoning.",
        interact: [{ kind: "select", hint: "Tap every one that could be a category for favourite school subjects.", items: [["Mathematics", true], ["English", true], ["Recess", false], ["Science", true], ["Creative arts", true], ["Thursday", false]] }],
        answer: "Answers vary, for example **Mathematics, English, Science, Creative arts, PDHPE and HSIE**. Each category is a subject taught at school. Recess and Thursday are not subjects."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Draw the following fraction strip and partition it into thirds. Shade one-third of the fraction strip.",
        interact: [
          { kind: "shade", parts: 3, hint: "This strip is partitioned into thirds. Shade one-third." },
          { kind: "input", fields: [{ label: "Fraction shaded", value: 1 / 3, placeholder: "a/b" }] }
        ],
        answer: "A strip cut into **3 equal parts** with **1 part shaded**: one-third ([1/3])."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Estimate the length of the classroom using a step as the benchmark. Communicate your reasoning.",
        interact: [{ kind: "jumps", start: 0, min: 0, max: 20, steps: [1, 5], hint: "Count the steps as a student walks along the classroom: + 1 for each step." }],
        answer: "Answers vary. Many classrooms are about 12 to 18 steps long. Walk heel to toe so each step is about the same size."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "Draw a basic map of the classroom.",
        interact: [{ kind: "sketch" }],
        answer: "Answers vary. A map is a bird's-eye view: show the door, windows, desks and the teacher's desk from above."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "Using non-standard partitioning, how many **hundreds** are in 2560?",
        options: ["5", "56", "25", "6"],
        answer: 2,
        explain: "2 thousands are 20 hundreds. 20 hundreds + 5 hundreds = 25 hundreds, and 60 left over. Break the thousands on the chart to see it.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 2560 }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Record a question for a matter of interest about pets where the information can be recorded in categories.",
        interact: [{ kind: "choose", rows: [{ t: "Which question has answers that are categories?", options: ["What kind of pet do you have?", "How many centimetres tall is your pet?", "What time did you feed your pet?"], a: 0 }] }],
        answer: "Answers vary, for example **What kind of pet do you have?** The answers are categories such as dog, cat, fish and bird."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the fraction shaded.",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "Count the equal parts, then count the shaded parts." },
          { kind: "input", fields: [{ label: "Fraction shaded", value: 0.75, placeholder: "a/b" }] }
        ],
        answer: "**[3/4]** (three-quarters). The strip has 4 equal parts and 3 are shaded."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Complete the sentences. 10 mm is the same as __ cm. 2 cm is the same as __ mm. 30 mm is the same as __ cm. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 0, min: 0, max: 30, steps: [10, 1], hint: "Each jump of 10 mm is 1 cm." },
          { kind: "input", fields: [{ label: "10 mm =", value: 1, suffix: "cm" }, { label: "2 cm =", value: 20, suffix: "mm" }, { label: "30 mm =", value: 3, suffix: "cm" }] }
        ],
        answer: "10 mm = **1 cm** · 2 cm = **20 mm** · 30 mm = **3 cm**. There are 10 mm in every centimetre."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Draw the arrow that should replace the question mark to complete the pattern: up, right, down, left, up, ? Communicate your reasoning.",
        interact: [
          { kind: "turns", step: 90 },
          { kind: "choose", rows: [{ t: "The next arrow points", options: ["up", "right", "down", "left"], a: 1 }] }
        ],
        answer: "The arrow points **right**. Each arrow is a quarter turn clockwise from the one before: up, right, down, left, up, right."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value A: Whole numbers",
        prompt: "5097 can be written in standard place value form as 5000 + 900 + 7.",
        answer: false,
        explain: "5097 has 0 hundreds and 9 tens, so it is 5000 + 90 + 7.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 5097 }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Use the tally table to answer: Which eye colour was least frequent? Which eye colour has a frequency of less than 10 but more than 5? How many more students in 3W have brown eyes than green eyes?",
        img: "u5-tally.png",
        interact: [
          { kind: "bargraph", max: 10, step: 2, minor: 1, ylabel: "Frequency", xlabel: "Eye colour", label: "Eye colour of students in 3W", legendW: 60,
            series: [{ l: "3W", c: "#2F6FE4" }], groups: [{ l: "Blue", v: [7] }, { l: "Green", v: [2] }, { l: "Brown", v: [10] }, { l: "Hazel", v: [5] }] },
          { kind: "choose", rows: [
            { t: "Least frequent", options: ["Blue", "Green", "Brown", "Hazel"], a: 1 },
            { t: "Less than 10 but more than 5", options: ["Blue", "Green", "Brown", "Hazel"], a: 0 }] },
          { kind: "input", fields: [{ label: "Brown − green", value: 8, suffix: "more students" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Compare the bars", s: "Brown is 10 and green is 2. 10 − 2 = 8." }, { t: "Count on", s: "From 2, count on to 10: 3, 4, 5, 6, 7, 8, 9, 10. That's 8 more." }] },
        answer: "**Green** (2) · **Blue** (7) · **8 more** students have brown eyes (10 − 2 = 8)."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the fractions missing from the number line.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 3, tol: 0.06, items: [["[1/3]", 1 / 3], ["[2/3]", 2 / 3]] },
          { kind: "input", fields: [{ label: "First mark", value: 1 / 3, placeholder: "a/b" }, { label: "Second mark", value: 2 / 3, placeholder: "a/b" }] }
        ],
        answer: "**[1/3]** and **[2/3]**. The line from 0 to [3/3] (1 whole) is cut into 3 equal parts."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record the following lengths using the abbreviations for millimetres and centimetres: 35 centimetres, 78 millimetres, 3 centimetres and 46 millimetres.",
        interact: [
          { kind: "choose", rows: [{ t: "millimetres", options: ["mm", "cm", "m"], a: 0 }, { t: "centimetres", options: ["mm", "cm", "m"], a: 1 }] },
          { kind: "input", fields: [{ label: "35 centimetres", accept: ["35 cm"] }, { label: "78 millimetres", accept: ["78 mm"] }, { label: "3 centimetres and 46 millimetres", accept: ["3 cm 46 mm", "3 cm and 46 mm", "76 mm", "7 cm 6 mm"] }] }
        ],
        answer: "**35 cm** · **78 mm** · **3 cm 46 mm**. (46 mm is more than 1 cm, so this is the same as 76 mm, or 7 cm 6 mm.)",
        explain: "The slide's third length mixes units, and 46 mm is more than a centimetre. Both 3 cm 46 mm and 76 mm (7 cm 6 mm) are accepted."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "These rectangles are made using the same unit. What is the area of each rectangle? Which one has the largest area?",
        interact: [
          { kind: "areagrid", size: 56, cells: ["111", "111", "111"] },
          { kind: "areagrid", size: 56, cells: ["1111", "1111", "1111"] },
          { kind: "input", fields: [{ label: "Blue rectangle", value: 9, suffix: "units" }, { label: "Pink rectangle", value: 12, suffix: "units" }] },
          { kind: "choose", rows: [{ t: "Largest area", options: ["blue (first)", "pink (second)"], a: 1 }] }
        ],
        answer: "Blue: **9 units** (3 rows of 3) · Pink: **12 units** (3 rows of 4). The **pink** rectangle has the largest area."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "What would the **next two numbers** be in this number sequence? 35, 40, 45, ___, ___",
        options: ["55, 65", "46, 47", "47, 49", "50, 55"],
        answer: 3,
        explain: "The sequence counts by fives: 35, 40, 45, 50, 55.",
        interact: [{ kind: "jumps", start: 35, min: 30, max: 60, steps: [5, 1] }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is one way to organise data collected about students' favourite ice cream flavours?",
        interact: [{ kind: "select", hint: "Tap every way that would organise the data.", items: [["a tally table", true], ["a column graph", true], ["a list of flavours with how many votes each", true], ["one number", false]] }],
        answer: "Answers vary: a **tally table**, a frequency table, a list or a column graph. Each sorts the votes into flavour categories so they can be counted and compared."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Sienna has one-quarter of a fraction strip. How many more quarters does she need to create the whole fraction strip?",
        interact: [
          { kind: "shade", parts: 4, pre: [0], hint: "Sienna has 1 quarter. Shade quarters until the whole strip is shaded." },
          { kind: "input", fields: [{ label: "More quarters needed", value: 3 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "A whole strip is 4 quarters. She has 1, so count on: 2, 3, 4. That's 3 more." }, { t: "Subtract", s: "4 quarters − 1 quarter = 3 quarters." }] },
        answer: "**3 more quarters**. 4 quarters make the whole, and [1/4] + [3/4] = [4/4]."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "The term ‘perimeter’ is used to describe…",
        interact: [
          { kind: "sides", label: "Rectangle", view: [380, 200], fill: "#BFE6F7", poly: [[40, 40], [340, 40], [340, 160], [40, 160]] },
          { kind: "choose", rows: [{ t: "Perimeter is", options: ["the distance around the outside of a shape", "the space inside a shape", "how heavy a shape is"], a: 0 }] }
        ],
        answer: "**The distance around the outside** (the boundary) of a shape. Tap each side to trace the perimeter."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Describe the cube using the terms: face, edge, vertex.",
        img: "u5-cube.png",
        interact: [
          { kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 12 }, { label: "Vertices", value: 8 }] },
          { kind: "choose", rows: [{ t: "Each face is a", options: ["square", "triangle", "circle"], a: 0 }] }
        ],
        answer: "A cube has **6 faces** (all squares), **12 edges** where two faces meet, and **8 vertices** (corners) where three edges meet."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The numbers 3, 58 and 845 are all **odd**.",
        answer: false,
        explain: "58 ends in 8, so it is even. 3 and 845 end in 3 and 5, so they are odd.",
        interact: [{ kind: "pack", mode: "pack", size: 2, total: 58, thing: "counters", label: "pair", hint: "Put 58 counters into pairs. Is there one left over?" }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Record one piece of information presented in this column graph.",
        interact: [
          { kind: "bargraph", max: 10, step: 1, ylabel: "Number of Students", xlabel: "House Groups", label: "3B's House Groups", legendW: 60,
            series: [{ l: "3B", c: "#2F6FE4" }], groups: [{ l: "Wombats", v: [8] }, { l: "Koalas", v: [9] }, { l: "Emus", v: [7] }, { l: "Kangaroos", v: [4] }] },
          { kind: "select", hint: "Tap every statement that the graph shows.", items: [["Koalas has the most students.", true], ["Kangaroos has 4 students.", true], ["Emus has more students than Wombats.", false], ["Wombats has 10 students.", false]] }
        ],
        answer: "Answers vary, for example: Koalas has the most students (9). Kangaroos has the fewest (4). Wombats has 8 and Emus has 7."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "If this is [3/4], what fractional part is needed to complete the whole?",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "This shows [3/4]. Shade the part needed to complete the whole." },
          { kind: "input", fields: [{ label: "Part needed", value: 0.25, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count the quarters", s: "A whole is [4/4]. There are 3 quarters, so 1 more quarter is needed." }, { t: "Subtract", s: "[4/4] − [3/4] = [1/4]." }] },
        answer: "**[1/4]** (one-quarter). [3/4] + [1/4] = [4/4], one whole."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Calculate and record the perimeter of this shape.",
        interact: [
          { kind: "sides", label: "Parallelogram with sides of 6 metres and 4 metres", view: [420, 250], fill: "#A2CC5E",
            poly: [[145, 60], [384, 60], [340, 212], [101, 212]],
            dims: [{ from: [147, 40], to: [382, 40] }, { from: [122, 56], to: [78, 208] }],
            labels: [{ x: 265, y: 30, t: "6 metres" }, { x: 88, y: 132, t: "4 metres", anchor: "end" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 20, suffix: "m" }] }
        ],
        answer: "**20 m**. The opposite sides of a parallelogram are equal: 6 + 4 + 6 + 4 = 20 m.",
        explain: "Only two sides are labelled. The opposite sides are taken to be equal (6 m and 4 m), as in any parallelogram."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "The term ‘mass’ means…",
        interact: [{ kind: "choose", rows: [{ t: "Mass is", options: ["how heavy something is", "how long something is", "how much space is inside something", "how hot something is"], a: 0 }] }],
        answer: "**How heavy something is**: the amount of matter in an object. We measure mass in grams (g) and kilograms (kg)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Identify the missing number in the following number pattern. 16, 20, 24, 28, __, 36",
        options: ["34", "30", "32", "29"],
        answer: 2,
        explain: "The pattern counts by fours: 28 + 4 = 32, and 32 + 4 = 36.",
        interact: [{ kind: "jumps", start: 16, min: 16, max: 36, steps: [4] }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "How many more students in 3B are in the Koalas house than the Emus house? Which house has the lowest number of students from 3B? Do you think the data for the houses would be the same in other classes? Why or why not?",
        interact: [
          { kind: "bargraph", max: 10, step: 1, ylabel: "Number of Students", xlabel: "House Groups", label: "3B's House Groups", legendW: 60,
            series: [{ l: "3B", c: "#2F6FE4" }], groups: [{ l: "Wombats", v: [8] }, { l: "Koalas", v: [9] }, { l: "Emus", v: [7] }, { l: "Kangaroos", v: [4] }] },
          { kind: "input", fields: [{ label: "Koalas − Emus", value: 2, suffix: "more students" }] },
          { kind: "choose", rows: [{ t: "Lowest number", options: ["Wombats", "Koalas", "Emus", "Kangaroos"], a: 3 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Read the bars", s: "Koalas is 9 and Emus is 7. 9 − 7 = 2." }, { t: "Count on", s: "From 7, count on to 9: 8, 9. That's 2 more." }] },
        answer: "**2 more** (9 − 7) · **Kangaroos** (4) · Probably not: each class has different students, so the numbers in each house would change."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "[2/8] of this chocolate bar is showing. Record the fraction of the chocolate bar that is hidden.",
        img: "u5-choc.png",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1], hint: "The shaded pieces are the [2/8] showing. Shade the hidden pieces." },
          { kind: "input", fields: [{ label: "Fraction hidden", value: 0.75, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count the eighths", s: "The whole bar is [8/8]. 2 eighths show, so 8 − 2 = 6 eighths are hidden." }, { t: "Count on", s: "From 2 eighths, count on to 8: 3, 4, 5, 6, 7, 8. That's 6 eighths." }] },
        answer: "**[6/8]** of the bar is hidden. [2/8] + [6/8] = [8/8], the whole bar. ([6/8] is the same as [3/4].)"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record events that have a duration of approximately: 1 minute, 5 minutes, 20 minutes. Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "Washing your hands", options: ["1 minute", "5 minutes", "20 minutes"], a: 0 },
          { t: "Eating an apple", options: ["1 minute", "5 minutes", "20 minutes"], a: 1 },
          { t: "Watching a TV episode", options: ["1 minute", "5 minutes", "20 minutes"], a: 2 }] }],
        answer: "Answers vary, for example: washing your hands (about 1 minute), eating an apple (about 5 minutes), watching a TV episode (about 20 minutes).",
        explain: "The slide asks students to think of their own events, so these three are examples to sort before the class adds its own."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Record an event that is likely to happen today. Record an event that is unlikely to happen today. Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "We will eat lunch at school.", options: ["likely", "unlikely"], a: 0 },
          { t: "It will snow in our playground.", options: ["likely", "unlikely"], a: 1 },
          { t: "A kangaroo will visit our classroom.", options: ["likely", "unlikely"], a: 1 },
          { t: "It will be dark tonight.", options: ["likely", "unlikely"], a: 0 }] }],
        answer: "Answers vary. Likely: we will eat lunch at school. Unlikely: it will snow in our playground.",
        explain: "The slide asks students to record their own events, so these four are examples to sort before the class adds its own."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The following number pattern is **decreasing** by a **constant amount**. 85, 80, 75, 70, 65",
        answer: true,
        explain: "Each number is 5 less than the one before, so it decreases by 5 every time.",
        interact: [{ kind: "jumps", start: 85, min: 60, max: 85, back: true, steps: [5] }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "The school canteen is collecting data from students by asking them about their favourite lunch choices. Explain how this data could be used to help make decisions.",
        interact: [{ kind: "select", hint: "Tap every decision the data could help with.", items: [["Make more of the most popular lunches", true], ["Stop selling lunches that nobody chooses", true], ["Change the time of the school bell", false], ["Plan new lunches students might like", true]] }],
        answer: "Answers vary. The canteen could make more of the most popular lunches, stop selling ones nobody buys, and waste less food."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Record the fraction shown.",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2, 3], hint: "From 0 to 1" },
          { kind: "shade", parts: 4, pre: [0], hint: "From 1 to 2" },
          { kind: "input", fields: [{ label: "Fraction shown", value: 1.25, placeholder: "a/b" }] }
        ],
        answer: "**[5/4]** (five-quarters), which is the same as 1[1/4]. Each whole from 0 to 1 and 1 to 2 is cut into 4 quarters, and 5 quarters are shaded.",
        explain: "The number line runs from 0 to 2 with 4 equal parts in each whole. 5 parts are shaded."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Complete the sentences: A quarter-hour is the same as ___ minutes. A half-hour is the same as ___ minutes. An hour is the same as ___ minutes.",
        interact: [
          { kind: "clock", time: "12:00", drag: true },
          { kind: "input", fields: [{ label: "A quarter-hour", value: 15, suffix: "minutes" }, { label: "A half-hour", value: 30, suffix: "minutes" }, { label: "An hour", value: 60, suffix: "minutes" }] }
        ],
        answer: "A quarter-hour = **15 minutes** · a half-hour = **30 minutes** · an hour = **60 minutes**."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Draw a clock face showing a quarter past 6.",
        interact: [
          { kind: "clock", time: "6:00", drag: true },
          { kind: "choose", rows: [
            { t: "The long (minute) hand points to", options: ["3", "6", "9", "12"], a: 0 },
            { t: "The short (hour) hand points", options: ["just past the 6", "just before the 6", "to the 3"], a: 0 }] }
        ],
        answer: "The minute hand points to the **3** (15 minutes past) and the hour hand is **just past the 6**."
      }
    ]
  ]
});
