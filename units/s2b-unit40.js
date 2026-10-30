/*
  Stage 2 Year B, Unit 40 — Review of learning (Term 4, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 4, ls: 5, unit: 40,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 40 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1 (Week 9 Monday)
    [
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Which of these number sentences are correct? Communicate your thinking.",
        display: "A: 249 + 368 = 500 + 100 + 17\nB: 249 + 368 = 200 + 300 + 40 + 60 + 9 + 8\nC: 249 + 368 = 7 + 10 + 100 + 500\nD: 368 + 249 = 300 + 200 + 68 + 49",
        interact: [
          { kind: "jumps", start: 249, end: 617, steps: [8, 60, 300], hint: "Start at 249 and add 368 in parts: 300, then 60, then 8." },
          { kind: "select", hint: "Tap every number sentence that is correct.", items: [["A", true], ["B", true], ["C", true], ["D", true]] }
        ],
        answer: "**All four are correct.** 249 + 368 = **617**. A: 500 + 100 + 17 = 617. B: 200 + 300 + 40 + 60 + 9 + 8 = 617. C: 7 + 10 + 100 + 500 = 617. D: 300 + 200 + 68 + 49 = 617. They show different ways to partition and regroup the same sum.",
        explain: "The slide is multiple choice with one answer, but every option equals 617. It is set as 'tap every correct one' so the class can discuss each partition."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition and record 57 403 using non-standard form.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 57403, target: 57403, need: "nonstandard", hint: "Break a counter into 10 of the next place to make a non-standard partition." },
          { kind: "expr", count: 2, target: 57403, placeholder: "e.g. 50 000 + 7403", mustUse: { re: "\\d\\s*\\d{3}[^\\d]|\\d{4}", msg: "That looks like the standard partition. Group some places together, like 7403." }, sample: ["50 000 + 7403", "57 000 + 403"] }
        ],
        answer: "Answers vary, for example **50 000 + 7403**, **57 000 + 403**, or 57 thousands + 40 tens + 3 ones."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record 3 situations where the duration would be measured in seconds.",
        interact: [{ kind: "select", hint: "Tap every situation that would be measured in seconds.", items: [["Running 100 metres", true], ["Tying your shoelaces", true], ["Sneezing", true], ["Brushing your teeth", true], ["Sleeping at night", false], ["A school term", false], ["A summer holiday", false]] }],
        answer: "Answers vary, for example: **running 100 metres**, **tying your shoelaces**, **a sneeze**, brushing your teeth, writing your name. Short events are measured in seconds; a night's sleep is measured in hours and a school term in weeks."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Write a question you could ask to collect data from your class. For example: What is your favourite animal?",
        interact: [{ kind: "select", hint: "Tap every question that would collect data from your class.", items: [["How do you travel to school?", true], ["What is your favourite sport?", true], ["How many pets do you have?", true], ["What month is your birthday?", true], ["What is 5 + 5?", false], ["Is it raining in Paris today?", false]] }],
        answer: "Answers vary, for example: How do you travel to school? What is your favourite sport? How many pets do you have? A good question gives an answer from every student that can be counted and compared."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Read the following times.",
        display: "9:15          9:30",
        interact: [
          { kind: "clock", time: "9:15", drag: true },
          { kind: "choose", rows: [
            { t: "9:15 is", options: ["quarter past 9", "quarter to 9", "half past 9"], a: 0 },
            { t: "9:30 is", options: ["quarter past 9", "half past 9", "half past 3"], a: 1 }] }
        ],
        answer: "**9:15** is 15 minutes past 9, or **quarter past 9**. **9:30** is 30 minutes past 9, or **half past 9**.",
        explain: "The slide shows two digital clocks reading 9:15 and 9:30."
      }
    ],
    // Review 2 (Week 9 Tuesday)
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "An algorithm is the most efficient strategy to solve 873 – 73. Communicate your thinking.",
        answer: false,
        explain: "873 – 73 can be done in your head: take away 73 and you are left with 800. Writing out an algorithm takes longer.",
        interact: [{ kind: "jumps", start: 873, end: 800, back: true, steps: [3, 70], hint: "Jump back 73 from 873. Where do you land?" }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition and record 75 301 using non-standard form.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 75301, target: 75301, need: "nonstandard", hint: "Break a counter into 10 of the next place to make a non-standard partition." },
          { kind: "expr", count: 2, target: 75301, placeholder: "e.g. 70 000 + 5301", mustUse: { re: "\\d\\s*\\d{3}[^\\d]|\\d{4}", msg: "That looks like the standard partition. Group some places together, like 5301." }, sample: ["70 000 + 5301", "75 000 + 301"] }
        ],
        answer: "Answers vary, for example **70 000 + 5301**, **75 000 + 301**, or 753 hundreds + 1 one."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "It is 6:36 pm. Lachlan must be home by 8:00 pm. How much time does he have to get home?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 1116, end: 1200, steps: [4, 20, 60], hint: "Start at 6:36 pm. Jump to 6:40, then 7:00, then 8:00." },
          { kind: "input", fields: [{ label: "Hours", value: 1, suffix: "h" }, { label: "Minutes", value: 24, suffix: "min" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "6:36 → 6:40 is 4 minutes. 6:40 → 7:00 is 20 minutes. 7:00 → 8:00 is 1 hour. 1 hour + 24 minutes." }, { t: "Count back", s: "8:00 back 1 hour is 7:00. 7:00 back 24 minutes is 6:36. So 1 hour 24 minutes." }] },
        answer: "**1 hour 24 minutes.** 6:36 to 6:40 is 4 minutes, 6:40 to 7:00 is 20 minutes, and 7:00 to 8:00 is 1 hour.",
        explain: "The slide shows 6:36 pm as the time now."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "List some ways that data can be collected.",
        interact: [{ kind: "select", hint: "Tap every way to collect data.", items: [["A survey or questionnaire", true], ["Asking questions and keeping a tally", true], ["Watching and recording (observation)", true], ["Measuring or counting things", true], ["Guessing the answers", false]] }],
        answer: "Answers vary, for example: **surveys and questionnaires**, **interviews with a tally**, **observing** and recording, **measuring or counting**, or a show of hands."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "What strategies could be used to estimate the area of this rectangle in square centimetres? Record your thinking.",
        interact: [
          { kind: "areagrid", size: 48, cells: ["1111111", "1111111", "1111111"] },
          { kind: "select", hint: "Tap every strategy that would help estimate the area in square centimetres.", items: [["Lay a 1 cm grid over it and count the squares", true], ["Count how many 1 cm squares fit along one row, then count the rows", true], ["Compare it with something about 1 cm² in size, like a fingertip", true], ["Measure around the edge with a ruler", false]] }
        ],
        answer: "Answers vary, for example: **cover it with a 1 cm grid** and count the squares, or **count the squares in one row and the number of rows** (7 squares in a row, 3 rows makes 21 cm² for this grid). Measuring around the edge gives the perimeter, not the area.",
        explain: "The slide's rectangle has no size, so the grid shows a rectangle 7 squares long and 3 rows high to model counting."
      }
    ],
    // Review 3 (Week 9 Wednesday)
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "745 – ___ = 227. The missing number is:",
        options: ["525", "518", "508", "962"],
        answer: 1,
        explain: "Count on from 227 to 745: 227 + 3 = 230, + 70 = 300, + 445 = 745. 3 + 70 + 445 = 518. Check: 745 – 518 = 227.",
        interact: [{ kind: "jumps", start: 227, end: 745, steps: [3, 70, 400, 45], hint: "Count on from 227 to 745. Add up the jumps." }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Order and record as decimals on the number line: 14 tenths, 12 tenths, 18 tenths.",
        interact: [
          { kind: "numberline", min: 0, max: 2, ticks: 10, tol: 0.05, items: [["14 tenths", 1.4], ["12 tenths", 1.2], ["18 tenths", 1.8]] },
          { kind: "input", fields: [{ label: "14 tenths =", value: 1.4 }, { label: "12 tenths =", value: 1.2 }, { label: "18 tenths =", value: 1.8 }] }
        ],
        answer: "**1.2, 1.4, 1.8**. 10 tenths make 1, so 12 tenths = 1.2, 14 tenths = 1.4 and 18 tenths = 1.8."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "At which time would you eat breakfast: 7:00 am or 7:00 pm? What time would you eat lunch: 12:00 am or 12:00 pm?",
        interact: [{ kind: "choose", rows: [
          { t: "Breakfast", options: ["7:00 am", "7:00 pm"], a: 0 },
          { t: "Lunch", options: ["12:00 am", "12:00 pm"], a: 1 }] }],
        answer: "Breakfast at **7:00 am** (morning). Lunch at **12:00 pm** (midday). 12:00 am is midnight."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Data was collected from 60 students about their favourite ice cream flavour: chocolate swirl 24, strawberry dream 21, sweet caramel 12, vanilla surprise 3. Represent this data using a column graph.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u40-colgraph.png" },
          { kind: "input", fields: [{ label: "Chocolate swirl", value: 24 }, { label: "Strawberry dream", value: 21 }, { label: "Sweet caramel", value: 12 }, { label: "Vanilla surprise", value: 3 }] },
          { kind: "choose", rows: [{ t: "The tallest column is", options: ["chocolate swirl", "strawberry dream", "sweet caramel", "vanilla surprise"], a: 0 }] }
        ],
        answer: "Draw 4 columns, one for each flavour, up to **24, 21, 12 and 3**. Chocolate swirl is the tallest, vanilla surprise the shortest. The graph needs a title, axis labels and a scale (24 + 21 + 12 + 3 = 60 students).",
        explain: "Blank axes with a scale of 0 to 25 are provided so the columns can be drawn on the board."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: volume",
        prompt: "Sketch a rectangular prism to show its depth.",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [{ t: "Depth is how far it goes", options: ["from front to back", "from bottom to top", "from left to right"], a: 0 }] }
        ],
        answer: "Draw the front rectangle, a matching rectangle set back and up, and join the corners. The joining lines show the **depth**: how far the prism goes **from front to back**. Length goes left to right and height goes bottom to top."
      }
    ],
    // Review 4 (Week 9 Thursday)
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "731 – ___ = 209. The missing number is 508.",
        answer: false,
        explain: "Count on from 209 to 731: 209 + 1 = 210, + 90 = 300, + 431 = 731. 1 + 90 + 431 = 522, so the missing number is 522. Check: 731 – 508 = 223, not 209.",
        interact: [{ kind: "jumps", start: 209, end: 731, steps: [1, 90, 400, 31], hint: "Count on from 209 to 731. Add up the jumps." }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "On the number line, [1/2] is marked at A, 1 is marked at B and 1.5 is marked at C. Record the missing fraction or decimal for A, B and C.",
        interact: [
          { kind: "numberline", min: 0, max: 2, ticks: 10, tol: 0.06, items: [["A: [1/2]", 0.5], ["B: 1", 1], ["C: 1.5", 1.5]] },
          { kind: "input", fields: [{ label: "A: [1/2] as a decimal", value: 0.5 }, { label: "B: 1 as a decimal", value: 1, placeholder: "e.g. 1.0" }, { label: "C: 1.5 as a fraction", accept: ["1 1/2", "1½", "3/2", "one and a half", "1 and a half"], placeholder: "e.g. 1 1/2" }] }
        ],
        answer: "A: [1/2] = **0.5** · B: 1 = **1.0** · C: 1.5 = **1 [1/2]**",
        explain: "On the slide, the fractions are written above the line (½, 1, C) and the decimals below (A, B, 1.5), with arrows at ½, 1 and 1½."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Copy the hexagon. Divide it into two or more different shapes. Label the shapes.",
        interact: [
          { kind: "sketch", grid: "triangle", shape: { view: [240, 220], pts: [[60, 10], [180, 10], [240, 110], [180, 210], [60, 210], [0, 110]] }, shapeFill: "rgba(0,176,80,.3)", shapeStroke: "#00B050" },
          { kind: "select", hint: "Tap every set of shapes you can make by splitting a hexagon.", items: [["2 trapeziums", true], ["6 triangles", true], ["1 rectangle and 2 triangles", true], ["3 rhombuses", true], ["2 circles", false]] }
        ],
        answer: "Answers vary, for example: one line across the middle makes **2 trapeziums**; lines from each corner to the centre make **6 triangles**; two lines make **a rectangle and 2 triangles**; three lines to the centre make **3 rhombuses**."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Write a definition for the words: outcome, chance, trial.",
        interact: [{ kind: "choose", rows: [
          { t: "Outcome", options: ["a possible result", "how likely something is to happen", "doing the experiment once"], a: 0 },
          { t: "Chance", options: ["a possible result", "how likely something is to happen", "doing the experiment once"], a: 1 },
          { t: "Trial", options: ["a possible result", "how likely something is to happen", "doing the experiment once"], a: 2 }] }],
        answer: "**Outcome:** a possible result, such as rolling a 4. **Chance:** how likely something is to happen. **Trial:** doing the experiment one time, such as one roll of the dice."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2DS Shapes",
        prompt: "Create and record a tessellating design by reflecting, translating and rotating the triangle.",
        interact: [
          { kind: "sketch", grid: "triangle", shape: { view: [240, 220], pts: [[120, 10], [230, 200], [10, 200]] }, shapeFill: "rgba(23,175,8,.35)", shapeStroke: "#17AF08" },
          { kind: "choose", rows: [
            { t: "Flip the triangle over a line", options: ["reflect", "translate", "rotate"], a: 0 },
            { t: "Slide the triangle", options: ["reflect", "translate", "rotate"], a: 1 },
            { t: "Turn the triangle", options: ["reflect", "translate", "rotate"], a: 2 }] }
        ],
        answer: "Answers vary. Triangles **tessellate**: they fit together with no gaps or overlaps. **Reflect** (flip) the triangle to fill the gap beside it, **translate** (slide) to make a row, and **rotate** (turn) to fit it point down."
      }
    ],
    // Review 5 (Week 10 Monday)
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Find the correct related facts for this array.",
        options: ["4 × 7 = 28, 7 × 4 = 28, 28 – 7 = 4, 28 = 4 × 7", "4 × 7 = 24, 24 = 4 × 7, 24 = 7 × 4, 7 × 4 = 24", "28 ÷ 7 = 4, 4 × 7 = 28, 28 ÷ 4 = 7, 7 × 4 = 28", "12 + 12 = 24, 12 × 2 = 24, 24 ÷ 12 = 2, 24 ÷ 2 = 12"],
        answer: 2,
        explain: "The array has 7 rows of 4, which is 28. C is the fact family for 4, 7 and 28. A has 28 – 7 = 4, which is wrong (28 – 7 = 21). B says 4 × 7 = 24. D is about 24, not 28.",
        interact: [{ kind: "array", rows: 7, cols: 4, showTotal: true, hint: "7 rows of 4. Turn it around to see 4 rows of 7." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Solve this problem using the most efficient strategy. Communicate your thinking. 127 + 55 + 63 =",
        interact: [
          { kind: "group", items: [127, 55, 63], hint: "Find two numbers that make a friendly number." },
          { kind: "input", fields: [{ label: "127 + 55 + 63 =", value: 245 }] }
        ],
        answer: "**245.** Add 127 + 63 first: 7 + 3 makes a ten, so 127 + 63 = 190. Then 190 + 55 = 245."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Copy the parallelogram, then draw its reflection.",
        interact: [
          { kind: "sketch", grid: "square", shape: { view: [400, 200], pts: [[60, 20], [180, 20], [160, 100], [40, 100]] }, shapeFill: "rgba(0,176,80,.35)", shapeStroke: "#00B050" },
          { kind: "choose", rows: [{ t: "Reflected over a mirror line, the parallelogram", options: ["leans the opposite way", "looks exactly the same", "becomes a rectangle"], a: 0 }] }
        ],
        answer: "Draw a mirror line next to the parallelogram. Each corner is copied the same distance on the other side of the line. The reflection is the same size and shape but **leans the opposite way**."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "If you roll a 10-sided dice, what is the chance you will roll a 10? If you have 2 dice, what is the chance you will roll two 10s?",
        interact: [
          { kind: "input", fields: [{ label: "One 10-sided dice: a 10", accept: ["1 in 10", "1/10", "1 out of 10", "0.1"], placeholder: "1 in ?" }, { label: "Two 10-sided dice: two 10s", accept: ["1 in 100", "1/100", "1 out of 100", "0.01"], placeholder: "1 in ?" }] },
          { kind: "choose", rows: [{ t: "Rolling two 10s is", options: ["very unlikely", "likely", "certain"], a: 0 }] }
        ],
        answer: "One dice: **1 in 10**, because there are 10 equally likely outcomes and one of them is 10. Two dice: **1 in 100**, because there are 10 × 10 = 100 possible pairs and only one is 10 and 10. That is very unlikely."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "In a collection of 15 green counters and 35 red counters, what is the chance of choosing a red counter?",
        interact: [
          { kind: "input", fields: [{ label: "Counters altogether", value: 50 }, { label: "Chance of red", accept: ["35 in 50", "35/50", "35 out of 50", "7/10", "7 in 10", "7 out of 10", "0.7"], placeholder: "? in 50" }] },
          { kind: "choose", rows: [{ t: "Choosing red is", options: ["unlikely", "likely", "certain", "impossible"], a: 1 }] }
        ],
        cubes: { ops: ["+"], note: "The total goes on the bottom of the chance.", solve: [{ t: "Find the total first", s: "15 + 35 = 50 counters. 35 of them are red, so the chance is 35 in 50." }, { t: "Simplify", s: "35 in 50 is the same as 7 in 10, because 35 ÷ 5 = 7 and 50 ÷ 5 = 10. More than half are red, so it is likely." }] },
        answer: "**35 in 50** (or 7 in 10). There are 15 + 35 = 50 counters and 35 are red. More than half are red, so choosing red is **likely**."
      }
    ],
    // Review 6 (Week 10 Tuesday)
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "A number ending in zero is always a multiple of 10. Communicate your reasoning.",
        answer: true,
        explain: "Multiples of 10 are 10, 20, 30 … 100, 110 … Every one ends in 0, and every whole number ending in 0 is some number of tens, so it is a multiple of 10.",
        interact: [{ kind: "numchart", from: 1, to: 100, answer: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], hint: "Tap the numbers that end in 0. Are they all in the counting by tens pattern?" }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Shania has $20.00 to buy her lunch. She wants a pie, a chocolate milk and an orange. How much did Shania spend? How much change will she get? Pies $5.50, sausage rolls $4.50, flavoured milk $3.00, all fruit 80c, yoghurt $2.50.",
        interact: [
          { kind: "shop", budget: 20, items: [["Pie", 5.5], ["Sausage roll", 4.5], ["Flavoured milk", 3], ["Fruit", 0.8], ["Yoghurt", 2.5]], hint: "Tap the pie, the flavoured milk and the fruit to put them in the basket." },
          { kind: "input", fields: [{ label: "Spent", prefix: "$", value: 9.3 }, { label: "Change", prefix: "$", value: 10.7 }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "$5.50 + $3.00 + $0.80 = $9.30. $20.00 − $9.30 = $10.70." }, { t: "Count on for the change", s: "$9.30 + 70c = $10.00, + $10.00 = $20.00. The change is $10.70." }] },
        answer: "Shania spent **$9.30** ($5.50 + $3.00 + 80c) and gets **$10.70** change.",
        explain: "The chocolate milk is a flavoured milk ($3.00) and the orange is fruit (80c)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Draw an angle that could be created by the open door and label the arms and the vertex.",
        img: "u40-door.png",
        interact: [
          { kind: "angle", start: 30, hint: "Drag the arm to open the door. The fixed arm is the door frame, the moving arm is the door." },
          { kind: "choose", rows: [
            { t: "The vertex is at", options: ["the hinges", "the door handle", "the top of the door"], a: 0 },
            { t: "The arms are", options: ["the door and the door frame (or wall)", "the handle and the floor"], a: 0 }] }
        ],
        answer: "The **vertex** is where the door is hinged to the frame. One **arm** is the door and the other arm is the door frame or wall. The more the door opens, the bigger the angle."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Write an event that is likely to happen today. Write an event that is unlikely to happen today.",
        interact: [{ kind: "choose", rows: [
          { t: "We will do some maths today.", options: ["likely", "unlikely"], a: 0 },
          { t: "Someone will sharpen a pencil.", options: ["likely", "unlikely"], a: 0 },
          { t: "It will snow inside our classroom.", options: ["likely", "unlikely"], a: 1 },
          { t: "Our class will fly to the moon.", options: ["likely", "unlikely"], a: 1 }] }],
        answer: "Answers vary. Likely: we will do some maths today, someone will sharpen a pencil. Unlikely: it will snow inside our classroom. (Flying to the moon is so unlikely it is close to impossible.)"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3DS Objects",
        prompt: "Draw the top view of a cube.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "The top view of a cube is", options: ["a square", "a triangle", "a circle", "a rectangle that is not a square"], a: 0 }] }
        ],
        answer: "A **square**. Looking straight down on a cube you see only its top face, and every face of a cube is a square."
      }
    ],
    // Review 7 (Week 10 Wednesday)
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which facts match the fact family 6, 4 and 24?",
        options: ["24 ÷ 4 = 24, 4 ÷ 24 = 6, 6 × 4 = 24, 4 × 24 = 6", "6 ÷ 4 = 24, 4 × 6 = 24, 4 ÷ 24 = 6, 24 ÷ 6 = 4", "6 + 4 = 24, 24 – 6 = 4, 4 × 6 = 24, 6 × 4 = 24", "6 × 4 = 24, 24 ÷ 4 = 6, 4 × 6 = 24, 24 ÷ 6 = 4"],
        answer: 3,
        explain: "D has two multiplication facts and the two division facts that undo them. A, B and C each contain a wrong fact (for example 24 ÷ 4 = 24, 6 ÷ 4 = 24 and 6 + 4 = 24).",
        interact: [{ kind: "array", rows: 4, cols: 6, showTotal: true, hint: "4 rows of 6 make 24. Share 24 into 4 rows: 6 in each." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use your knowledge of multiples of 10 to solve 70 × 4. Communicate your thinking.",
        interact: [
          { kind: "array", rows: 4, cols: 7, showTotal: true, hint: "Each dot is a ten. 4 rows of 7 tens." },
          { kind: "input", fields: [{ label: "7 × 4 =", value: 28 }, { label: "70 × 4 = 28 tens =", value: 280 }] }
        ],
        answer: "**280.** 70 is 7 tens. 7 × 4 = 28, so 7 tens × 4 = 28 tens = 280."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "For each angle, decide if it is less than, equal to, about the same as, or greater than a right angle.",
        img: "u40-angles.png",
        interact: [
          { kind: "angle", start: 90, hint: "Make each angle with the arm and compare it with the right angle." },
          { kind: "choose", rows: [
            { t: "A", options: ["less than", "equal to", "about the same as", "greater than"], a: 3 },
            { t: "B", options: ["less than", "equal to", "about the same as", "greater than"], a: 0 },
            { t: "C", options: ["less than", "equal to", "about the same as", "greater than"], a: [1, 2] }] }
        ],
        answer: "A is **greater than** a right angle (obtuse). B is **less than** a right angle (acute). C is **equal to** a right angle: the small square marks a right angle."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Create a list or table to organise the data about gaming devices in homes.",
        interact: [
          { kind: "bargraph", max: 40, step: 10, minor: 5, ylabel: "Number of homes", xlabel: "Types of gaming devices", label: "Gaming devices in homes", series: [{ l: "Homes", c: "#2F9FD8" }],
            groups: [{ l: "Game console", v: [40] }, { l: "Smartphone", v: [35] }, { l: "PC", v: [30] }, { l: "Tablet", v: [21] }, { l: "Handheld", v: [3] }, { l: "VR", v: [2] }] },
          { kind: "cells", cols: 2, w: 150, free: false, msg: "Run a line from the top of each bar across to the scale.", grid: [
            ["#Device", "#Homes"],
            ["Game console", { v: 40 }],
            ["Smartphone", { v: 35 }],
            ["PC", { v: 30 }],
            ["Tablet", { v: 21 }],
            ["Handheld", { v: 3 }],
            ["VR", { v: 2 }]] }
        ],
        answer: "Game console **40** · Smartphone **35** · PC **30** · Tablet **21** · Handheld **3** · VR **2**. A table puts the devices in one column and the number of homes in the next.",
        explain: "The slide's graph is a horizontal bar graph. It is redrawn as a column graph with the same values; tablet, handheld and VR are read between gridlines (about 21, 3 and 2)."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Record 5 items that have right angles that you can see in the classroom.",
        interact: [{ kind: "select", hint: "Tap every item that has a right angle.", items: [["The corner of a book", true], ["The corner of the whiteboard", true], ["The corner of a window", true], ["The corner of a door", true], ["The corner of a desk", true], ["A round clock face", false], ["A ball", false]] }],
        answer: "Answers vary, for example: the corner of a **book**, the **whiteboard**, a **window**, a **door** and a **desk**. Check each one with a right-angle tester, such as the corner of a sheet of paper."
      }
    ],
    // Review 8 (Week 10 Thursday)
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Fact families help us recall number facts quickly. They show the inverse relationship between multiplication and division. (Fact family: 32, 8 and 4.)",
        answer: true,
        explain: "The fact family 4, 8 and 32 gives 4 × 8 = 32, 8 × 4 = 32, 32 ÷ 4 = 8 and 32 ÷ 8 = 4. Division undoes multiplication, so knowing one fact gives you all four.",
        interact: [{ kind: "array", rows: 4, cols: 8, showTotal: true, hint: "4 rows of 8 make 32. How many ways can you read this array?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "48 students are arranged into teams with the same number in each. How many teams are there and how many students might be in each?",
        interact: [
          { kind: "array", rows: 6, cols: 8, showTotal: true, hint: "Each row is a team. Change the rows and columns to find other ways to make 48." },
          { kind: "pair", labels: ["Teams", "Students in each team"], unit: "", rule: "product", target: 48 }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Find factor pairs", s: "Think of facts that make 48: 6 × 8, 4 × 12, 3 × 16, 2 × 24. Each pair gives a number of teams and students in each." }, { t: "Share into teams", s: "Choose a number of teams, such as 4. 48 ÷ 4 = 12, so 4 teams of 12." }] },
        answer: "Answers vary: **6 teams of 8**, 8 teams of 6, 4 teams of 12, 12 teams of 4, 3 teams of 16, 16 teams of 3, 2 teams of 24 or 24 teams of 2. The number of teams × students in each must make 48."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "How many angles are there in a single door in your classroom? Communicate your reasoning.",
        interact: [
          { kind: "corners", view: [220, 300], label: "A door", hint: "Tap each corner of the door to test it with a right angle.",
            shapes: [{ p: [[40, 20], [180, 20], [180, 280], [40, 280]], fill: "#1A6EF5" }] },
          { kind: "input", fields: [{ label: "Angles in the door", value: 4 }] }
        ],
        answer: "**4 angles.** A door is a rectangle, so it has 4 corners, and each corner is a **right angle**. (When it opens, the door also makes an angle with the frame.)",
        explain: "The answer counts the corners of the door's flat face. Students may also mention the angle made with the frame when it opens."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Use the tally marks to create a dot plot.",
        interact: [
          { kind: "tally", hint: "These are the tally marks. Count them in fives.", rows: [{ l: "performing arts", start: 5 }, { l: "sports", start: 8 }, { l: "visual arts", start: 2 }, { l: "technology", start: 3 }, { l: "athletics", start: 4 }, { l: "hobbies", start: 7 }] },
          { kind: "sketch", bgimg: "img/s2/u40-dotplot.png" },
          { kind: "input", fields: [{ label: "performing arts", value: 5, suffix: "dots" }, { label: "sports", value: 8, suffix: "dots" }, { label: "visual arts", value: 2, suffix: "dots" }, { label: "technology", value: 3, suffix: "dots" }, { label: "athletics", value: 4, suffix: "dots" }, { label: "hobbies", value: 7, suffix: "dots" }] }
        ],
        answer: "Draw one dot for each tally mark, stacked above each category: performing arts **5**, sports **8**, visual arts **2**, technology **3**, athletics **4**, hobbies **7**.",
        explain: "Tallies read from the slide: 5, 5 + 3, 2, 3, 4 and 5 + 2. The slide's wording 'tally marks to about to create' is read as 'tally marks to create'."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "John said the time was quarter past 10. How many minutes is that past 10? Sandreen said the time was quarter to 10. How many minutes is that before 10?",
        interact: [
          { kind: "clock", time: "10:15", drag: true },
          { kind: "input", fields: [{ label: "Quarter past 10:", value: 15, suffix: "minutes past 10" }, { label: "Quarter to 10:", value: 15, suffix: "minutes before 10" }] }
        ],
        answer: "Quarter past 10 is **15 minutes past 10** (10:15). Quarter to 10 is **15 minutes before 10** (9:45). An hour is 60 minutes, and a quarter of 60 is 15."
      }
    ]
  ]
});
