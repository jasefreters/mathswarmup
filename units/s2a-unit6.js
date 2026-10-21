/*
  Stage 2 Year A, Unit 6 — Review of learning (Term 2, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 2, ls: 1, unit: 6,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 6 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which number sentence is equivalent to 4 + 3 + 2 + 6?",
        options: ["5 + 4 + 2 + 6", "4 + 3 + 2 + 1 + 5", "4 + 3 + 2 + 2 + 2", "2 + 2 + 3 + 2 + 3"],
        answer: 1,
        explain: "4 + 3 + 2 + 6 = 15. B keeps 4 + 3 + 2 and splits the 6 into 1 + 5, so it is also 15. A = 17, C = 13, D = 12.",
        interact: [{ kind: "group", items: [4, 3, 2, 6] }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record this number in words.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 3651, houses: true, hint: "Read the thousands house first, then the ones house." },
          { kind: "choose", rows: [{ t: "3651 in words", options: ["three thousand, six hundred and fifty-one", "three hundred and sixty-five, one", "three thousand, sixty-five and one"], a: 0 }] }
        ],
        answer: "**Three thousand, six hundred and fifty-one**"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Create a list of possible categories for this question: What is the most common eye colour in our class?",
        interact: [{ kind: "select", items: [["brown", true], ["blue", true], ["green", true], ["hazel", true], ["grey", true], ["tall", false], ["curly", false], ["red", false]] }],
        answer: "Possible categories: **brown, blue, green, hazel, grey**. Hair or height words are not eye colours.",
        explain: "The slide asks students to create their own list; example categories have been added to tap."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "What fraction of the shape is blue? What fraction of the shape is white?",
        img: "u6-fraction.png",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1, 5], hint: "The same 8 equal parts in a strip. Count the shaded parts." },
          { kind: "input", fields: [{ label: "Blue", value: 3 / 8, placeholder: "a/b" }, { label: "White", value: 5 / 8, placeholder: "a/b" }] }
        ],
        answer: "Blue: **[3/8]** · White: **[5/8]**. The shape has 8 equal parts: 3 are blue and 5 are white."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "This equal arm balance shows that 3 pencils has the same mass as 6 rulers. If the mass of the book is 6 pencils, what is the mass of the book in rulers?",
        img: "u6-balance1.png",
        interact: [
          { kind: "bar", whole: { v: 12, l: "12 rulers", n: "1 book", hide: true }, parts: [{ v: 2, l: "2", n: "pencil" }, { v: 2, l: "2", n: "pencil" }, { v: 2, l: "2", n: "pencil" }, { v: 2, l: "2", n: "pencil" }, { v: 2, l: "2", n: "pencil" }, { v: 2, l: "2", n: "pencil" }], hint: "3 pencils = 6 rulers, so 1 pencil = 2 rulers. The book is 6 pencils. Tap the ? to check." },
          { kind: "input", fields: [{ label: "The book =", value: 12, suffix: "rulers" }] }
        ],
        cubes: { ops: ["×"], also: ["+", "÷"], solve: [{ t: "One pencil first", s: "3 pencils = 6 rulers, so 1 pencil = 2 rulers. 6 pencils = 6 × 2 = 12 rulers." }, { t: "Double", s: "6 pencils is double 3 pencils, so it is double 6 rulers: 12 rulers." }] },
        answer: "**12 rulers**. 1 pencil = 2 rulers, so 6 pencils = 12 rulers."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "15 + 7 = 22 + 7",
        answer: false,
        explain: "15 + 7 = 22, but 22 + 7 = 29. The two sides are not equal.",
        interact: [{ kind: "jumps", start: 15, steps: [1, 5, 7], hint: "Jump + 7 from 15. Where do you land?" }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Complete this sequence: 1230, 1330, 1430, ____, ____, ____, 1830, ____. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 1230, steps: [100], hint: "Jump + 100 each time." },
          { kind: "input", fields: [{ label: "4th", value: 1530 }, { label: "5th", value: 1630 }, { label: "6th", value: 1730 }, { label: "8th", value: 1930 }] }
        ],
        answer: "1230, 1330, 1430, **1530, 1630, 1730**, 1830, **1930**. Each number is 100 more: the hundreds digit goes up by 1."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Would a tally table be an efficient way to collect data on eye colour in your class? When is a tally chart not an efficient method? Communicate your reasoning.",
        interact: [
          { kind: "tally", rows: [{ l: "brown" }, { l: "blue" }, { l: "green" }, { l: "hazel" }], counts: true, hint: "Try it: tap + for each student's eye colour." },
          { kind: "choose", rows: [
            { t: "Efficient for eye colour in our class?", options: ["Yes", "No"], a: 0 },
            { t: "A tally chart is not efficient when…", options: ["there is a very large amount of data", "there are only a few categories", "the class is small"], a: 0 }] }
        ],
        answer: "**Yes**: a class is a small group with a few colours, so tally marks are quick to make and count. A tally is not efficient for very large amounts of data (for example, a whole state) because there would be too many marks to count."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Draw a fraction strip. Use your knowledge of what half looks like to divide your strip into thirds.",
        interact: [
          { kind: "shade", parts: 3, hint: "A third is a bit less than half. 3 equal parts make the whole strip." },
          { kind: "input", fields: [{ label: "Each part is", value: 1 / 3, placeholder: "a/b" }] }
        ],
        answer: "Each part is **[1/3]**. A third is smaller than a half, so each third ends a little before the halfway mark."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Order these units of time from shortest to longest: one minute, one hour, one second.",
        interact: [{ kind: "order", items: ["one minute", "one hour", "one second"], answer: [2, 0, 1] }],
        answer: "**One second, one minute, one hour**. 60 seconds make a minute and 60 minutes make an hour."
      }
    ],
    // Review 3
    [
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Which of the following are equivalent to 12 + 13? You may select more than one answer.",
        interact: [
          { kind: "jumps", start: 12, steps: [1, 3, 10], hint: "12 + 13 lands on…" },
          { kind: "select", items: [["A  13 + 12", true], ["B  13 − 12", false], ["C  30 − 5", true], ["D  13 + 14", false]] }
        ],
        answer: "**A and C**. 12 + 13 = 25. 13 + 12 = 25 (turnaround) and 30 − 5 = 25. 13 − 12 = 1 and 13 + 14 = 27."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "One thousand is the same as: ___ hundreds, ___ tens, ___ ones.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1000, hint: "Break the thousand into hundreds, then tens, then ones." },
          { kind: "input", fields: [{ label: "Hundreds", value: 10 }, { label: "Tens", value: 100 }, { label: "Ones", value: 1000 }] }
        ],
        answer: "**10 hundreds**, **100 tens** or **1000 ones**."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is missing that would help us understand the data?",
        img: "u6-picgraph.png",
        interact: [{ kind: "select", items: [["A title (what question was asked)", true], ["A key (how many each picture stands for)", true], ["An axis label (for example, Food)", true], ["Brighter colours", false], ["Bigger pictures", false]] }],
        answer: "A **title**, a **key** showing what each picture stands for, and **labels** for the axes (for example, Food and Number of students)."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "How many quarters of the strip are shown by the blue parts? What fraction of the strip is shown by the orange part?",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "The strip has 4 equal parts. The shaded parts are the blue ones." },
          { kind: "input", fields: [{ label: "Blue quarters", value: 3 }, { label: "Orange", value: 1 / 4, placeholder: "a/b" }] }
        ],
        answer: "Blue: **3 quarters** ([3/4]) · Orange: **[1/4]**"
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the time shown on this clock.",
        img: "u6-clock.png",
        interact: [
          { kind: "clock", time: "4:15", drag: true },
          { kind: "input", fields: [{ label: "Time", accept: ["4:15", "quarter past 4", "quarter past four"], placeholder: "h:mm" }] }
        ],
        answer: "**4:15** (quarter past 4). The long hand points to the 3 (15 minutes) and the short hand is just past the 4.",
        explain: "The time was read from the hands: the long hand points to 3 and the short hand is a little past 4."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "25 − 14 = 28 − 17",
        answer: true,
        explain: "Both equal 11. Adding 3 to both numbers keeps the difference the same.",
        interact: [{ kind: "jumps", start: 14, end: 25, steps: [1, 10], hint: "Count on from 14 to 25." }]
      },
      {
        type: "sr", focus: "Representing number using place value B",
        prompt: "Arrange the digits 3, 8 and 6 to form different 3-digit numbers. Then sort the 3-digit numbers into ascending order.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 386, hint: "Use the chart to build each number." },
          { kind: "order", items: ["683", "368", "863", "386", "836", "638"], answer: [1, 3, 5, 0, 4, 2] }
        ],
        answer: "**368, 386, 638, 683, 836, 863**. Compare the hundreds first, then the tens.",
        explain: "The slide asks for 4 different numbers. All 6 possible numbers are given here so the class can order them; any 4 in ascending order are also correct."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What data has been collected? How is it represented?",
        img: "u6-pets.png",
        interact: [{ kind: "choose", rows: [
          { t: "Data collected", options: ["the class's pets", "favourite colours", "eye colours"], a: 0 },
          { t: "Represented as a", options: ["dot plot", "tally chart", "picture graph"], a: 0 },
          { t: "How many dogs?", options: ["3", "4", "2"], a: 1 }] }],
        answer: "The **class's pets** (dog, cat, bird, fish), shown as a **dot plot**. Each dot is one pet: 4 dogs, 2 cats, 0 birds and 3 fish."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the fraction shown in grey that completes one whole.",
        interact: [
          { kind: "shade", parts: 7, pre: [0, 1, 2, 3, 4, 5], hint: "The shaded parts are the purple ones. How many parts are left?" },
          { kind: "input", fields: [{ label: "Grey", value: 1 / 7, placeholder: "a/b" }] }
        ],
        answer: "**[1/7]**. The strip has 7 equal parts: [6/7] is purple and [1/7] is grey, which makes [7/7], one whole."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Describe the three-dimensional object using the words face, edge and vertex.",
        img: "u6-prism.png",
        interact: [
          { kind: "choose", rows: [{ t: "This object is a", options: ["triangular prism", "rectangular prism", "pyramid"], a: 0 }] },
          { kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Edges", value: 9 }, { label: "Vertices", value: 6 }] }
        ],
        answer: "A **triangular prism**: **5 faces** (2 triangles and 3 rectangles), **9 edges** and **6 vertices**."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "17 − 9 + 13 is the same as:",
        options: ["21", "8", "22", "39"],
        answer: 0,
        explain: "17 − 9 = 8, then 8 + 13 = 21.",
        interact: [{ kind: "jumps", start: 17, back: true, steps: [1, 3, 9, 10], hint: "Jump back 9, then forward 13." }]
      },
      {
        type: "sr", focus: "Representing number using place value A",
        prompt: "Partition 3725 in non-standard form.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 3725, target: 3725, need: "nonstandard" },
          { kind: "expr", count: 1, target: 3725, placeholder: "e.g. 3000 + 600 + 125", mustUse: { re: "\\+", msg: "Join the parts with +." }, sample: ["3000 + 600 + 125"] }
        ],
        answer: "Answers vary, for example 37 hundreds + 25 ones, 3000 + 600 + 125, or 2 thousands + 17 hundreds + 25 ones."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What data could be represented by this graph? Record possible labels for the 2 axes.",
        interact: [
          { kind: "bargraph", max: 10, step: 1, label: "Column graph with no labels", series: [{ l: "", c: "#2F6FE4" }], groups: [{ l: "?", v: [7] }, { l: "?", v: [5] }, { l: "?", v: [9] }, { l: "?", v: [2] }, { l: "?", v: [4] }] },
          { kind: "choose", rows: [
            { t: "Label for the side axis (up)", options: ["Number of students", "Favourite colour", "Day of the week"], a: 0 },
            { t: "Label for the bottom axis (along)", options: ["a category, like Favourite colour", "Number of students", "How many"], a: 0 }] }
        ],
        answer: "Answers vary, for example our class's favourite colours (pink 7, yellow 5, blue 9, green 2, orange 4). The bottom axis names the categories (Favourite colour); the side axis counts them (Number of students).",
        explain: "The graph on the slide has no labels. The column heights were read from the picture as 7, 5, 9, 2 and 4."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "What is the missing fraction quantity that completes one whole?",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3], hint: "The grey ? part is the same length as 4 of these parts." },
          { kind: "input", fields: [{ label: "Missing part", value: 4 / 8, placeholder: "a/b" }] }
        ],
        answer: "**[4/8]** (one half). The strip is 8 equal parts: 4 are shown and 4 are missing.",
        explain: "The grey part is not divided on the slide. It measures the same as 4 of the blue eighths, so the answer is [4/8], which is [1/2]."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Describe a path from where you are sitting to the classroom door.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "select", items: [["forward", true], ["turn left", true], ["turn right", true], ["past the …", true], ["next to …", true], ["heavier", false]] }
        ],
        answer: "Answers vary. Use direction and position words, for example: walk forward 5 steps, turn left at the reading corner, go past the bookshelf, and the door is on your right."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "24 + 37 = 61 and 61 − 37 = 24 are related number facts.",
        answer: true,
        explain: "They use the same three numbers: 24 and 37 are the parts and 61 is the whole.",
        interact: [{ kind: "bar", whole: { v: 61, l: "61" }, parts: [{ v: 24, l: "24" }, { v: 37, l: "37" }] }]
      },
      {
        type: "sr", focus: "Representing number using place value B",
        prompt: "1326: How many hundreds are in the hundreds place?",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1326 },
          { kind: "input", fields: [{ label: "Hundreds in the hundreds place", value: 3 }] }
        ],
        answer: "**3 hundreds** (300). Altogether 1326 has 13 hundreds, but only 3 are in the hundreds place."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is the recommended daily screen time for a 9 year old?",
        interact: [
          { kind: "bargraph", max: 2, step: 0.5, ylabel: "Hours of screen time", xlabel: "Age (years)", label: "Recommended daily screen time for children in Australia", series: [{ l: "Hours", c: "#A9B1E8" }],
            groups: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((a) => ({ l: String(a), v: [a < 2 ? 0 : a < 5 ? 1 : 2] })) },
          { kind: "input", fields: [{ label: "9 year old", value: 2, suffix: "hours" }] }
        ],
        answer: "**2 hours** a day (source: Australian Institute of Family Studies)."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "This strip has 8 equal parts: yellow, yellow, blue, yellow, green, green, yellow, yellow. What fraction is represented by blue, yellow and green?",
        interact: [
          { kind: "tally", rows: [{ l: "blue" }, { l: "yellow" }, { l: "green" }], counts: true, hint: "Tap + for each part as you count its colour." },
          { kind: "input", fields: [{ label: "Blue", value: 1 / 8, placeholder: "a/b" }, { label: "Yellow", value: 5 / 8, placeholder: "a/b" }, { label: "Green", value: 2 / 8, placeholder: "a/b" }] }
        ],
        answer: "Blue **[1/8]** · Yellow **[5/8]** · Green **[2/8]** (= [1/4]). Together they make [8/8], one whole."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Make a list of objects in your classroom that are shorter than one metre.",
        interact: [{ kind: "select", items: [["a pencil", true], ["a ruler", true], ["a book", true], ["a chair seat", true], ["the classroom door (height)", false], ["the whiteboard", false], ["the length of the room", false]] }],
        answer: "Answers vary: a pencil, a ruler, a book, a lunchbox, a chair seat. The door, whiteboard and room are longer than 1 metre.",
        explain: "The slide asks students for their own list; example objects have been added to sort."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "50 − 7 − 3 − 10 = ?",
        options: ["12 + 18 + 10", "7 + 13 + 10", "10 + 3 + 7 + 50", "12 + 8 + 5"],
        answer: 1,
        explain: "50 − 7 − 3 − 10 = 30, and 7 + 13 + 10 = 30. On the slide, D was 12 + 8 + 10, which also makes 30, so D has been changed to 12 + 8 + 5 (25) to leave one correct answer.",
        interact: [{ kind: "jumps", start: 50, back: true, steps: [3, 7, 10], hint: "Jump back 7, then 3, then 10." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the bridging the decade strategy to solve 43 + 58.",
        interact: [
          { kind: "jumps", start: 43, steps: [7, 10, 50, 1], hint: "Jump + 7 to reach the next ten (50), then add the rest of 58." },
          { kind: "input", fields: [{ label: "43 + 58 =", value: 101 }] }
        ],
        answer: "**101**. 43 + 7 = 50, then 50 + 51 = 101 (58 = 7 + 51)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is the most common way to travel to school? How many more students travel by car than by walking? How many students were surveyed?",
        interact: [
          { kind: "bargraph", max: 12, step: 1, ylabel: "Number of Students", xlabel: "Mode of Transport", label: "How do students travel to school most days?", series: [{ l: "Students", c: "#4472C4" }],
            groups: [{ l: "Car", v: [12] }, { l: "Bike", v: [3] }, { l: "Walk", v: [4] }, { l: "Public Transport", v: [8] }, { l: "Scooter", v: [3] }] },
          { kind: "choose", rows: [{ t: "Most common", options: ["Car", "Bike", "Walk", "Public Transport", "Scooter"], a: 0 }] },
          { kind: "input", fields: [{ label: "Car − Walk", value: 8 }, { label: "Surveyed", value: 30 }] }
        ],
        cubes: { ops: ["−", "+"], solve: [{ t: "Read each bar", s: "Car 12, Bike 3, Walk 4, Public Transport 8, Scooter 3. Car − Walk = 12 − 4 = 8." }, { t: "Add all the bars", s: "12 + 3 + 4 + 8 + 3 = 30 students." }] },
        answer: "**Car** · **8 more** (12 − 4) · **30 students** (12 + 3 + 4 + 8 + 3)"
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Sarah said 4-eighths are yellow and Bella said one-half is yellow. Who is correct? Communicate your reasoning.",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 2, 4, 6], hint: "The shaded parts are the yellow ones." },
          { kind: "choose", rows: [{ t: "Who is correct?", options: ["Sarah", "Bella", "Both", "Neither"], a: 2 }] }
        ],
        answer: "**Both**. 4 of the 8 equal parts are yellow, which is [4/8], and [4/8] is the same as [1/2]."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Describe the turn each shape has made. Use words such as quarter, half and full turn.",
        img: "u6-turns.png",
        interact: [{ kind: "choose", rows: [
          { t: "1. Green arrow", options: ["quarter turn", "half turn", "full turn"], a: 0 },
          { t: "2. Blue shape", options: ["quarter turn", "half turn", "full turn"], a: 2 },
          { t: "3. Yellow shape", options: ["quarter turn", "half turn", "full turn"], a: 1 }] }],
        answer: "1. **Quarter turn** (clockwise: up to right) · 2. **Full turn** (it ends facing the same way) · 3. **Half turn** (right to left)",
        explain: "Shape 2 looks the same before and after, so it is taken as a full turn (no change is also acceptable to discuss)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "The balance is level, so 16 + 8 − 7 = 27 − 9 + 3.",
        answer: false,
        explain: "16 + 8 − 7 = 17, but 27 − 9 + 3 = 21. The two sides are not equal, so the balance would not be level.",
        interact: [{ kind: "jumps", start: 16, back: true, steps: [3, 7, 8, 9], hint: "Work out each side: 16 + 8 − 7, then 27 − 9 + 3." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use this bar model to complete the number sentences: 70 − 17 = ___, 70 − 54 = ___, 70 = ___ + ___",
        interact: [
          { kind: "bar", whole: { v: 70, l: "70" }, parts: [{ v: 17, l: "17" }, { v: 54, l: "54" }] },
          { kind: "input", fields: [{ label: "70 − 17 =", value: 54 }, { label: "70 − 54 =", value: 17 }, { label: "70 =", accept: ["17", "54"] }, { label: "+", accept: ["54", "17"] }] }
        ],
        answer: "70 − 17 = **54** · 70 − 54 = **17** · 70 = **17 + 54**"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Compare the column graph and tally table. Which do you find easier to understand? Communicate your reasoning.",
        interact: [
          { kind: "bargraph", max: 12, step: 1, ylabel: "Number of Students", xlabel: "Mode of Transport", label: "How do students travel to school most days?", series: [{ l: "Students", c: "#4472C4" }],
            groups: [{ l: "Car", v: [12] }, { l: "Bike", v: [3] }, { l: "Walk", v: [4] }, { l: "Public Transport", v: [8] }, { l: "Scooter", v: [3] }] },
          { kind: "tally", rows: [{ l: "Car", start: 12 }, { l: "Bike", start: 3 }, { l: "Walk", start: 4 }, { l: "Public Transport", start: 8 }, { l: "Scooter", start: 3 }], counts: true },
          { kind: "choose", rows: [
            { t: "Easier to compare at a glance", options: ["column graph", "tally table"], a: 0 },
            { t: "Shows the exact count in each row", options: ["column graph", "tally table"], a: 1 }] }
        ],
        answer: "Answers vary. The **column graph** makes it quick to see which is biggest and compare. The **tally table** shows exact counts that are easy to check."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Record the missing fractions on the number line: 0, [1/4], [2/4], [3/4], 1, ___, ___, ___, 2.",
        interact: [
          { kind: "jumps", start: 0, min: 0, max: 2, steps: [0.25], hint: "Each jump is one quarter." },
          { kind: "input", fields: [{ label: "After 1", value: 5 / 4, placeholder: "a/b" }, { label: "Next", value: 6 / 4, placeholder: "a/b" }, { label: "Next", value: 7 / 4, placeholder: "a/b" }] }
        ],
        answer: "**[5/4], [6/4], [7/4]** (also 1[1/4], 1[2/4], 1[3/4]). Each mark is one more quarter."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Use the blue square to calculate the area of the larger white rectangle.",
        img: "u6-area.png",
        interact: [
          { kind: "areagrid", size: 56, cells: ["1111", "1111", "1111"] },
          { kind: "input", fields: [{ label: "Area", value: 12, suffix: "blue squares" }] }
        ],
        answer: "**12 blue squares**. 4 squares fit along and 3 fit down: 3 rows of 4 = 12.",
        explain: "Measured from the picture, the rectangle is about 4 squares long and 3 squares high."
      }
    ]
  ]
});
