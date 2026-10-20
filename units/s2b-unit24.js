/*
  Stage 2 Year B, Unit 24 — Review of learning (Term 1, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 1, ls: 4, unit: 24,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 24 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Partitioned fractions B",
        prompt: "Which of these is **equivalent** to one half?",
        options: ["[3/8]", "[2/8]", "[4/8]", "[5/8]"],
        answer: 2,
        explain: "Half of 8 eighths is 4 eighths, so [4/8] = [1/2].",
        interact: [{ kind: "shade", parts: 8, hint: "This strip is cut into eighths. Shade half of it." }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Pippa folded her paper strip into equal parts like this. Place the fractions on her strip and label each part.",
        interact: [
          { kind: "fold", max: 3, target: 4 },
          { kind: "numberline", min: 0, max: 1, ticks: 4, tol: 0.06, items: [["[1/4]", 0.25], ["[2/4]", 0.5], ["[3/4]", 0.75], ["[4/4]", 1]] },
          { kind: "input", fields: [{ label: "Each part is", value: 0.25, placeholder: "a/b" }] }
        ],
        answer: "Pippa's strip has **4 equal parts**, so each part is [1/4]. The marks are [1/4], [2/4], [3/4] and [4/4] (one whole).",
        explain: "The slide asks to draw “Linda's” paper strip, but the strip belongs to Pippa, so the name has been corrected."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Name something you would measure with a 30 cm ruler, a metre ruler and a trundle wheel. Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "A pencil", options: ["30 cm ruler", "metre ruler", "trundle wheel"], a: 0 },
          { t: "The width of the classroom door", options: ["30 cm ruler", "metre ruler", "trundle wheel"], a: 1 },
          { t: "Around the school oval", options: ["30 cm ruler", "metre ruler", "trundle wheel"], a: 2 }] }],
        answer: "Answers vary. A 30 cm ruler for short things like a pencil or a book. A metre ruler for things about a metre long, like a door or a desk. A trundle wheel for long distances, like the oval or a corridor.",
        explain: "The slide asks students to name their own objects. These three are examples so the class has something to check."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the compensation strategy to solve 373 − 47. Communicate your thinking.",
        interact: [
          { kind: "jumps", start: 373, back: true, steps: [50, 10, 3], hint: "Take away 50 (that's 3 too many), then add 3 back." },
          { kind: "input", fields: [{ label: "373 − 47 =", value: 326 }] }
        ],
        answer: "**326**. 373 − 50 = 323. I took away 3 too many, so add 3 back: 323 + 3 = 326."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Describe the features of this cylinder.",
        img: "u24-cylinder.png",
        interact: [{ kind: "input", fields: [{ label: "Flat faces", value: 2 }, { label: "Curved surfaces", value: 1 }, { label: "Edges", value: 2 }, { label: "Vertices", value: 0 }] }],
        answer: "A cylinder has **2 flat faces** (circles), **1 curved surface**, **2 curved edges** and **no vertices**. It can roll and it can stack."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Partitioned fractions B",
        prompt: "2 quarters is equivalent to one half.",
        answer: true,
        explain: "4 quarters make a whole, so 2 quarters make half: [2/4] = [1/2].",
        interact: [{ kind: "shade", parts: 4, hint: "Shade 2 quarters. Is it exactly half?" }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Write a fraction that is smaller than one half but bigger than one quarter.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 24, tol: 0.03, items: [["[1/4]", 0.25], ["[1/2]", 0.5], ["[1/3]", 1 / 3], ["[3/8]", 0.375]] },
          { kind: "input", fields: [{ label: "My fraction", min: 0.2501, max: 0.4999, placeholder: "a/b" }] }
        ],
        answer: "Answers vary, for example [1/3], [3/8] or [2/5]. They all sit between [1/4] and [1/2] on the fraction wall and the number line."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "If your desk is about 120 cm long, estimate the height of your classroom door. Communicate your thinking.",
        interact: [
          { kind: "jumps", start: 0, steps: [120, 50, 10], hint: "Jump one desk length (120 cm). How much more would reach the top of the door?" },
          { kind: "input", fields: [{ label: "Door height", min: 180, max: 240, suffix: "cm" }] }
        ],
        answer: "About **200 cm** (2 m). The door is taller than one desk length (120 cm) but less than two desk lengths (240 cm).",
        explain: "Any estimate from 180 cm to 240 cm is accepted. Most classroom doors are about 2 m tall."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use regrouping to solve 373 + 47. Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { H: 3, T: 11, O: 10 }, target: 420, need: "standard", hint: "These are the counters for 373 + 47 joined together. Group 10 ones into a ten, then 10 tens into a hundred." },
          { kind: "input", fields: [{ label: "373 + 47 =", value: 420 }] }
        ],
        answer: "**420**. 3 + 7 = 10 ones, which is 1 ten. 7 + 4 + 1 = 12 tens, which is 1 hundred and 2 tens. 3 + 1 = 4 hundreds."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Clara drew around her shoe onto centimetre grid paper. She used arrays to estimate the area. The area of Clara's shoe must be more than ___ and less than ___ square centimetres.",
        img: "u24-shoe.png",
        interact: [
          { kind: "array", rows: 8, cols: 2, max: 12, showTotal: true, hint: "The light rectangle inside the shoe is 8 rows of 2. Then build the rectangle the shoe fits inside: 10 rows of 4." },
          { kind: "input", fields: [{ label: "More than", value: 16, suffix: "cm²" }, { label: "Less than", value: 40, suffix: "cm²" }] }
        ],
        answer: "More than **16** cm² and less than **40** cm². The shoe covers the 8 × 2 array inside it (16 squares) and fits inside a 10 × 4 array (40 squares).",
        explain: "The outer array is read from the blue and red lines on the slide: 10 squares tall and 4 squares wide."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "What fraction needs to be shaded to complete one **whole**?",
        options: ["[1/4]", "[2/4]", "[3/4]", "[4/4]"],
        answer: 2,
        explain: "1 quarter is shaded. 3 more quarters make 4 quarters, which is one whole.",
        interact: [{ kind: "shade", parts: 4, pre: [0], hint: "1 quarter is shaded. Shade the rest to make one whole." }]
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Which is larger, [2/3] or [2/6]?",
        interact: [
          { kind: "shade", parts: 3, hint: "Thirds: shade [2/3]." },
          { kind: "shade", parts: 6, hint: "Sixths: shade [2/6]." },
          { kind: "choose", rows: [{ t: "Larger", options: ["[2/3]", "[2/6]"], a: 0 }] }
        ],
        answer: "**[2/3]** is larger. Thirds are bigger pieces than sixths, so 2 thirds is more than 2 sixths. ([2/3] = [4/6].)"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert 175 millimetres into centimetres, and 40 centimetres into millimetres.",
        interact: [
          { kind: "jumps", start: 0, steps: [10, 100, 5], hint: "10 mm = 1 cm. Jump to 175 mm and count the centimetres." },
          { kind: "input", fields: [{ label: "175 mm =", value: 17.5, suffix: "cm" }, { label: "40 cm =", value: 400, suffix: "mm" }] }
        ],
        answer: "175 mm = **17.5 cm** (17 cm 5 mm) · 40 cm = **400 mm**. There are 10 mm in 1 cm."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use regrouping to solve 284 − 76. Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 284, target: 208, need: "standard", hint: "Take away 7 tens and 6 ones. Break a ten into 10 ones first." },
          { kind: "input", fields: [{ label: "284 − 76 =", value: 208 }] }
        ],
        answer: "**208**. Break 1 ten into 10 ones: 14 − 6 = 8 ones. 7 − 7 = 0 tens. 2 hundreds."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Ryder made this prism using blocks. What is the volume of this prism? Communicate your thinking.",
        img: "u24-prism.png",
        interact: [
          { kind: "array", rows: 3, cols: 3, showTotal: true, hint: "This is the top layer: 3 rows of 3 blocks." },
          { kind: "input", fields: [{ label: "Blocks in one layer", value: 9 }, { label: "Layers", value: 2 }, { label: "Volume", value: 18, suffix: "blocks" }] }
        ],
        answer: "**18 blocks** (cubes). Each layer is 3 × 3 = 9 blocks, and there are 2 layers: 9 + 9 = 18."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "Two thirds are needed to complete one whole.",
        answer: true,
        explain: "1 third is shaded. 2 more thirds make 3 thirds, which is one whole.",
        interact: [{ kind: "shade", parts: 3, pre: [0], hint: "1 third is shaded. Shade the rest to make one whole." }]
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Which is larger, [3/4] or [5/8]?",
        interact: [
          { kind: "shade", parts: 4, hint: "Quarters: shade [3/4]." },
          { kind: "shade", parts: 8, hint: "Eighths: shade [5/8]." },
          { kind: "choose", rows: [{ t: "Larger", options: ["[3/4]", "[5/8]"], a: 0 }] }
        ],
        answer: "**[3/4]** is larger. [3/4] = [6/8], and [6/8] is more than [5/8]."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Describe this box using the words length, width and height.",
        img: "u24-box.png",
        interact: [{ kind: "input", fields: [{ label: "Length", value: 30, suffix: "cm" }, { label: "Width", value: 20, suffix: "cm" }, { label: "Height", value: 12, suffix: "cm" }] }],
        answer: "The box is **30 cm long**, **20 cm wide** and **12 cm high**."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use partitioning and regrouping strategies to find 2 numbers that combine to make 573. Communicate your thinking.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 573 },
          { kind: "expr", count: 2, target: 573, placeholder: "e.g. 500 + 73", sample: ["500 + 73", "400 + 173"], mustUse: { re: "^\\s*\\d+\\s*\\+\\s*\\d+\\s*$", msg: "Write 2 numbers joined with +." } }
        ],
        answer: "Answers vary, for example 500 + 73, 400 + 173, 550 + 23 or 286 + 287."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "This shows one array of 6 fours. What other arrays can be made for 24? Have you recorded all possible arrays? How do you know?",
        interact: [
          { kind: "array", rows: 6, cols: 4, total: 24, max: 24, showTotal: true, hint: "Change the rows and columns. Keep 24 squares each time." },
          { kind: "expr", count: 4, target: 24, placeholder: "e.g. 4 x 6", sample: ["1 x 24", "2 x 12", "3 x 8", "4 x 6"], mustUse: { re: "^\\s*\\d+\\s*[x×*]\\s*\\d+\\s*$", msg: "Write each array as rows × columns, like 4 × 6." } }
        ],
        answer: "1 × 24, 2 × 12, 3 × 8 and 4 × 6 (and their turnarounds: 24 × 1, 12 × 2, 8 × 3, 6 × 4). That's all of them: we tried every number of rows from 1 to 24, and only 1, 2, 3, 4, 6, 8, 12 and 24 share 24 equally."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "35 243 in **expanded notation** is",
        options: ["3 000 + 50 000 + 200 + 40 + 3", "35 000 + 200 + 400 + 3", "30 000 + 5000 + 200 + 40 + 3", "30 000 + 500 + 2 000 + 40 + 3"],
        answer: 2,
        explain: "3 ten thousands, 5 thousands, 2 hundreds, 4 tens and 3 ones.",
        interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 35243 }]
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Why is a quarter of this length of string more than a quarter of this length of ribbon?",
        img: "u24-string.png",
        interact: [{ kind: "choose", rows: [{ t: "Because", options: ["the string is longer than the ribbon", "a quarter of anything is the same size", "the ribbon is wider"], a: 0 }] }],
        answer: "The **string is longer** than the ribbon. When the wholes are different sizes, their quarters are different sizes too. The size of a fraction depends on the size of the whole."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "What does perimeter mean?",
        interact: [
          { kind: "sides", view: [320, 200], label: "Rectangle", poly: [[30, 30], [290, 30], [290, 170], [30, 170]] },
          { kind: "choose", rows: [{ t: "Perimeter is", options: ["the distance around the outside of a shape", "the space inside a shape", "the number of corners"], a: 0 }] }
        ],
        answer: "Perimeter is the **total distance around the outside** (the boundary) of a shape. Tap each side as you trace around it."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use partitioning and regrouping strategies to solve 583 + 67.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { H: 5, T: 14, O: 10 }, target: 650, need: "standard", hint: "These are the counters for 583 + 67 joined together. Group 10 ones into a ten, then 10 tens into a hundred." },
          { kind: "input", fields: [{ label: "583 + 67 =", value: 650 }] }
        ],
        answer: "**650**. Partition: 500 + (80 + 60) + (3 + 7) = 500 + 140 + 10 = 650."
      },
      {
        type: "sr", focus: "Data A: Tally tables",
        prompt: "Mrs Matthews made this tally table of the languages spoken by the students in her class. Complete these sentences about the data: More students speak … Fewer students speak …",
        table: [["Language", "Tally"], ["Arabic", "卌 |||"], ["Cantonese", "|||"], ["Gamilaraay", "卌 ||"], ["Vietnamese", "||"], ["Wiradjuri", "卌 卌 卌 |"]],
        interact: [
          { kind: "input", fields: [{ label: "Arabic", value: 8 }, { label: "Cantonese", value: 3 }, { label: "Gamilaraay", value: 7 }, { label: "Vietnamese", value: 2 }, { label: "Wiradjuri", value: 16 }] },
          { kind: "choose", rows: [
            { t: "Most students speak", options: ["Arabic", "Cantonese", "Gamilaraay", "Vietnamese", "Wiradjuri"], a: 4 },
            { t: "Fewest students speak", options: ["Arabic", "Cantonese", "Gamilaraay", "Vietnamese", "Wiradjuri"], a: 3 }] }
        ],
        answer: "Arabic 8, Cantonese 3, Gamilaraay 7, Vietnamese 2, Wiradjuri 16. For example: more students speak **Wiradjuri** than any other language; fewer students speak **Vietnamese** than any other language. More students speak Arabic than Gamilaraay.",
        explain: "The sentences are open on the slide, so the check uses the most and fewest. Any true comparison is fine for discussion."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "The number 507 218 can be read as fifty-seven thousand, two hundred and eighteen.",
        answer: false,
        explain: "507 218 is five hundred and seven thousand, two hundred and eighteen. The 5 is in the hundred thousands place.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 507218 }]
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "How many fifths are equal to one whole? How many thirds make one whole? How many wholes do 6 sixths make?",
        interact: [
          { kind: "shade", parts: 5, hint: "Fifths" },
          { kind: "shade", parts: 3, hint: "Thirds" },
          { kind: "shade", parts: 6, hint: "Sixths" },
          { kind: "input", fields: [{ label: "Fifths in one whole", value: 5 }, { label: "Thirds in one whole", value: 3 }, { label: "6 sixths make", value: 1, suffix: "whole" }] }
        ],
        answer: "**5 fifths**, **3 thirds**, and 6 sixths make **1 whole**."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "What is the time to the minute? Record your answer in words.",
        img: "u24-clock.png",
        interact: [
          { kind: "clock", time: "2:49", drag: true },
          { kind: "input", fields: [{ label: "In words", accept: ["eleven minutes to three", "eleven to three", "11 minutes to 3", "two forty-nine", "two forty nine", "two forty-nine pm", "forty-nine minutes past two", "49 minutes past 2", "eleven minutes to three pm"] }] }
        ],
        answer: "**Eleven minutes to three** (two forty-nine pm)."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Avery used a vertical algorithm to solve 347 + 428. Her teacher asked her to explain what the 1 meant in her recording. What could Avery say? Communicate your reasoning.",
        table: [["", "H", "T", "O"], ["", "", "1", ""], ["", "3", "4", "7"], ["+", "4", "2", "8"], ["=", "7", "7", "5"]],
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: { H: 7, T: 6, O: 15 }, target: 775, need: "standard", hint: "These are the counters for 347 + 428 joined together. 7 + 8 = 15 ones. Group 10 of them." },
          { kind: "choose", rows: [{ t: "The 1 means", options: ["1 one", "1 ten", "1 hundred"], a: 1 }] }
        ],
        answer: "The 1 is **1 ten**. 7 + 8 = 15 ones, which is 1 ten and 5 ones. She wrote the 5 in the ones and carried the 1 ten to the tens column: 1 + 4 + 2 = 7 tens."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "This jar has equal numbers of yellow and blue marbles. List the outcomes when 3 marbles are randomly selected from this jar.",
        interact: [{ kind: "combos", pick: 3, total: 4, items: [["yellow", "#F2C200", 3], ["blue", "#2F6FE4", 3]] }],
        answer: "4 outcomes: **3 yellow**, **2 yellow and 1 blue**, **1 yellow and 2 blue**, **3 blue**."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "600 000 + 90 000 + 3000 + 400 + 1 is **expanded notation** for",
        options: ["693 401", "690 341", "693 041", "694 301"],
        answer: 0,
        explain: "6 hundred thousands, 9 ten thousands, 3 thousands, 4 hundreds, 0 tens and 1 one.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 0 }]
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "This ribbon has been split into 2 equal parts. Label the halves. Next, show and label 3 halves.",
        interact: [
          { kind: "numberline", min: 0, max: 2, ticks: 2, tol: 0.08, items: [["[1/2]", 0.5], ["[2/2]", 1], ["[3/2]", 1.5], ["[4/2]", 2]] },
          { kind: "input", fields: [{ label: "3 halves =", value: 1.5, placeholder: "1 1/2", suffix: "ribbons" }] }
        ],
        answer: "Each part is [1/2]; two halves make 1 whole ribbon. **3 halves** is one whole ribbon and another half: 1[1/2]."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "The clock shows 2:49 pm. How long until 3:00 pm?",
        img: "u24-clock.png",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 889, end: 900, steps: [1, 5, 10], hint: "Jump from 2:49 pm to 3:00 pm." },
          { kind: "input", fields: [{ label: "Time until 3:00 pm", value: 11, suffix: "minutes" }] }
        ],
        answer: "**11 minutes**. 2:49 + 1 minute = 2:50, + 10 minutes = 3:00."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Corey used a vertical algorithm to solve 798 − 93. Is this the most efficient strategy he could have used? Communicate your reasoning.",
        table: [["", "H", "T", "O"], ["", "7", "9", "8"], ["−", "", "9", "3"], ["=", "7", "0", "5"]],
        interact: [
          { kind: "jumps", start: 798, back: true, steps: [90, 3, 100], hint: "Try it mentally: jump back 90, then 3." },
          { kind: "choose", rows: [{ t: "Most efficient?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "798 − 93 =", value: 705 }] }
        ],
        answer: "Answers vary. His answer **705** is correct, but it isn't the most efficient strategy: there's no regrouping, so a mental strategy is quicker. 798 − 90 = 708, − 3 = 705.",
        explain: "This is a reasoning question. The check expects “No”, but accept a well-argued “Yes” in discussion."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Ravi is going to spin this spinner 12 times. Predict how many times the spinner will land on purple.",
        interact: [
          { kind: "classify", view: [300, 300], mark: "outline", total: 9, label: "Spinner with 9 equal parts: orange, green and purple",
            hint: "Tap each purple part to count it.",
            cats: [{ k: "p", t: "Purple", c: "#FFE45C" }],
            shapes: [
            { p: "150,150 105.5,27.8 116.4,24.4 127.4,22.0 138.7,20.5 150.0,20.0 161.3,20.5 172.6,22.0 183.6,24.4 194.5,27.8", fill: "#F06A00", a: null },
            { p: "150,150 194.5,27.8 204.9,32.2 215.0,37.4 224.6,43.5 233.6,50.4 241.9,58.1 249.6,66.4 256.5,75.4 262.6,85.0", fill: "#5DB800", a: null },
            { p: "150,150 262.6,85.0 267.8,95.1 272.2,105.5 275.6,116.4 278.0,127.4 279.5,138.7 280.0,150.0 279.5,161.3 278.0,172.6", fill: "#86308C", a: "p" },
            { p: "150,150 278.0,172.6 275.6,183.6 272.2,194.5 267.8,204.9 262.6,215.0 256.5,224.6 249.6,233.6 241.9,241.9 233.6,249.6", fill: "#F06A00", a: null },
            { p: "150,150 233.6,249.6 224.6,256.5 215.0,262.6 204.9,267.8 194.5,272.2 183.6,275.6 172.6,278.0 161.3,279.5 150.0,280.0", fill: "#5DB800", a: null },
            { p: "150,150 150.0,280.0 138.7,279.5 127.4,278.0 116.4,275.6 105.5,272.2 95.1,267.8 85.0,262.6 75.4,256.5 66.4,249.6", fill: "#86308C", a: "p" },
            { p: "150,150 66.4,249.6 58.1,241.9 50.4,233.6 43.5,224.6 37.4,215.0 32.2,204.9 27.8,194.5 24.4,183.6 22.0,172.6", fill: "#F06A00", a: null },
            { p: "150,150 22.0,172.6 20.5,161.3 20.0,150.0 20.5,138.7 22.0,127.4 24.4,116.4 27.8,105.5 32.2,95.1 37.4,85.0", fill: "#5DB800", a: null },
            { p: "150,150 37.4,85.0 43.5,75.4 50.4,66.4 58.1,58.1 66.4,50.4 75.4,43.5 85.0,37.4 95.1,32.2 105.5,27.8", fill: "#86308C", a: "p" }
            ] },
          { kind: "input", fields: [{ label: "Prediction", value: 4, suffix: "times" }] }
        ],
        cubes: { ops: ["÷", "×"], solve: [{ t: "Use the fraction", s: "3 of the 9 parts are purple: [3/9] = [1/3]. A third of 12 spins is 12 ÷ 3 = 4." }, { t: "Count around", s: "Each lap of the 9 parts has 3 purple. 12 spins is about 1[1/3] laps, so about 3 + 1 = 4." }] },
        answer: "About **4 times**. 3 of the 9 equal parts are purple, which is [1/3] of the spinner, and [1/3] of 12 is 4. It might not be exactly 4, because spinning is random."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "605 124 = 600 000 + 50 000 + 100 + 20 + 4",
        answer: false,
        explain: "605 124 has 0 ten thousands and 5 thousands, so it is 600 000 + 5000 + 100 + 20 + 4.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 605124 }]
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "How many wholes can you make with 7 halves? How many halves will be left over? How can we represent 7 halves as wholes and fractions?",
        interact: [
          { kind: "numberline", min: 0, max: 4, ticks: 2, tol: 0.12, items: [["[7/2]", 3.5]] },
          { kind: "input", fields: [{ label: "Wholes", value: 3 }, { label: "Halves left over", value: 1 }, { label: "7 halves =", value: 3.5, placeholder: "3 1/2" }] }
        ],
        answer: "**3 wholes** and **1 half** left over: [7/2] = 3[1/2]."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "List 3 things you might do between 9:00 am and 3:00 pm.",
        img: "u24-day.png",
        interact: [{ kind: "select", items: [["Have a maths lesson", true], ["Eat dinner", false], ["Play at recess", true], ["Sleep in bed", false], ["Eat lunch at school", true], ["Watch the sunrise", false]] }],
        answer: "Answers vary, for example a maths lesson, recess and lunch at school. 9:00 am to 3:00 pm is the school day, from morning, past midday, into the afternoon."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Stevie solved 628 − 53 using a vertical algorithm. Use the table to represent her thinking with MAB materials.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 628, target: 575, need: "standard", hint: "Take away 5 tens and 3 ones. Break a hundred into 10 tens first." },
          { kind: "cells", cols: 4, w: 90, msg: "Break 1 hundred into 10 tens: 12 tens − 5 tens = 7 tens.", grid: [
            ["#", "#H", "#T", "#O"],
            ["#628", 6, 2, 8],
            ["#− 53", null, 5, 3],
            ["#=", { v: 5 }, { v: 7 }, { v: 5 }]] }
        ],
        answer: "**575**. 8 − 3 = 5 ones. 2 tens − 5 tens can't be done, so break 1 hundred into 10 tens: 12 − 5 = 7 tens. 5 hundreds are left.",
        explain: "The slide shows Stevie's answer as 775, but 628 − 53 = 575. The hundreds digit should be 5 because one hundred was traded."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Use the grid reference to write the location of the orange books, the green books and the red books.",
        interact: [
          { kind: "gridref", src: "img/s2/u24-shelf.png", alt: "Bookshelf with a grid, columns A to C and rows 1 to 3", box: [13.3, 1.6, 91.2, 88.6], cols: ["A", "B", "C"], rows: ["3", "2", "1"] },
          { kind: "input", fields: [{ label: "Orange books", accept: ["A3"] }, { label: "Green books", accept: ["C1"] }, { label: "Red books", accept: ["A1"] }] }
        ],
        answer: "Orange books **A3** · green books **C1** · red books **A1**. Read the letter across the bottom first, then the number up the side."
      }
    ]
  ]
});
