/*
  Stage 2 Year B, Unit 26 — Review of learning (Term 2, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 2, ls: 1, unit: 26,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 26 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which number is **closest** to 9 999?",
        options: ["9 899", "9 099", "9 990", "9 909"],
        answer: 2,
        explain: "9 990 is only 9 away from 9 999. 9 909 is 90 away, 9 899 is 100 away and 9 099 is 900 away.",
        interact: [{ kind: "numberline", min: 9000, max: 10000, ticks: 0.01, labelStep: 500, tol: 25, items: [["9 899", 9899], ["9 099", 9099], ["9 990", 9990], ["9 909", 9909]] }]
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Read 136 284 aloud. Next, record this number in expanded notation.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 136284 },
          { kind: "reveal", items: [["136 284", "words"]], button: "Reveal" },
          { kind: "input", fields: [{ label: "136 284 =", value: 100000 }, { label: "+", value: 30000 }, { label: "+", value: 6000 }, { label: "+", value: 200 }, { label: "+", value: 80 }, { label: "+", value: 4 }] }
        ],
        answer: "One hundred and thirty-six thousand, two hundred and eighty-four. **100 000 + 30 000 + 6000 + 200 + 80 + 4**"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is the best way to display data involving large numbers, such as populations? Tally table? Column graph? Or dot plot? Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [{ t: "Best display", options: ["Tally table", "Column graph", "Dot plot"], a: 1 }] }],
        answer: "A **column graph**. Its scale can count in large steps (like millions), so big numbers fit and are easy to compare. Tally marks and dots would mean drawing one mark for every person."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "If this pink strip is [1/2], draw the whole. If it is [1/3], draw the whole. If it is [1/4], draw the whole.",
        interact: [
          { kind: "shade", parts: 2, pre: [0], hint: "If the pink part is one half, the whole is 2 of them." },
          { kind: "shade", parts: 3, pre: [0], hint: "If the pink part is one third, the whole is 3 of them." },
          { kind: "shade", parts: 4, pre: [0], hint: "If the pink part is one quarter, the whole is 4 of them." },
          { kind: "input", fields: [{ label: "[1/2]: strips in the whole", value: 2 }, { label: "[1/3]: strips in the whole", value: 3 }, { label: "[1/4]: strips in the whole", value: 4 }] }
        ],
        answer: "The whole is **2 strips** when the strip is [1/2], **3 strips** when it is [1/3] and **4 strips** when it is [1/4]."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Create a list of categories for a matter of interest about favourite ice-cream flavours. Communicate your reasoning.",
        interact: [
          { kind: "tally", rows: [{ l: "Chocolate" }, { l: "Vanilla" }, { l: "Strawberry" }, { l: "Mint" }, { l: "Other" }], hint: "Here are some categories. Survey the class and tap + for each vote." },
          { kind: "select", items: [["Chocolate", true], ["Vanilla", true], ["Strawberry", true], ["Other", true], ["Cold", false], ["Yummy", false]] }
        ],
        answer: "Answers vary, for example chocolate, vanilla, strawberry, mint and **other**. Each category is a flavour, and an \"other\" category catches everyone else.",
        explain: "The slide asks students to make their own list. 'Cold' and 'Yummy' are describing words, not flavours, so they aren't categories."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "If I rearrange the digits in 546 433, the largest number I can make is 654 433.",
        answer: true,
        explain: "Put the largest digits in the largest places: 6, 5, 4, 4, 3, 3 makes 654 433.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 654433 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record 48 356 in expanded notation.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 48356 },
          { kind: "input", fields: [{ label: "48 356 =", value: 40000 }, { label: "+", value: 8000 }, { label: "+", value: 300 }, { label: "+", value: 50 }, { label: "+", value: 6 }] }
        ],
        answer: "**40 000 + 8000 + 300 + 50 + 6**"
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Create a question that would involve collecting data in categories. Communicate your reasoning.",
        interact: [{ kind: "select", items: [["What is your favourite sport?", true], ["What pet do you have?", true], ["How tall are you in centimetres?", false], ["Which colour do you like best?", true], ["How many hours did you sleep?", false]] }],
        answer: "Answers vary, for example \"What is your favourite sport?\" The answers sort into groups (categories) such as soccer, netball and cricket.",
        explain: "The slide is open-ended. These examples let the class sort category questions from number questions."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "A tree has reached [1/3] of its full height. What is the remaining fraction until the tree is fully grown?",
        interact: [
          { kind: "shade", parts: 3, pre: [0], hint: "The strip is the tree's full height. The shaded third is how tall it is now. Tap the parts still to grow." },
          { kind: "input", fields: [{ label: "Fraction left to grow", value: 2 / 3, placeholder: "a/b" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count the thirds", s: "A whole is 3 thirds. It has grown 1 third, so 2 thirds are left: [2/3]." }, { t: "Subtract from 1", s: "1 − [1/3] = [3/3] − [1/3] = [2/3]." }] },
        answer: "**[2/3]**. The whole height is [3/3], and [3/3] − [1/3] = [2/3]."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Which 3D objects have faces that are all rectangles or squares and two identical parallel bases? Is it a prism, a pyramid or a cylinder? Draw the object and justify your answer.",
        interact: [
          { kind: "choose", rows: [{ t: "It is a", options: ["prism", "pyramid", "cylinder"], a: 0 }] },
          { kind: "sketch" }
        ],
        answer: "A **prism**: a rectangular prism (or a cube). It has two identical, parallel bases, and every face is a rectangle or square. A pyramid has triangle faces meeting at a point, and a cylinder has curved surfaces."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "532 178 in non-standard partitioning is:",
        options: ["520 000 + 178", "400 000 + 130 000 + 2100 + 70 + 8", "500 000 + 30 000 + 2000 + 100 + 70 + 8", "5000 + 3000 + 2000 + 178"],
        answer: 1,
        explain: "400 000 + 130 000 + 2100 + 70 + 8 = 532 178. C is the standard partition, and A and D don't add up to 532 178.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 532178 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition 125 907 in a non-standard way. How many 100s are there in this number?",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 125907, target: 125907, need: "nonstandard" },
          { kind: "input", fields: [{ label: "Hundreds in 125 907", value: 1259 }] }
        ],
        answer: "Answers vary, for example 100 000 + 25 000 + 907. There are **1259 hundreds** in 125 907 (with 7 left over)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Here are the results from a survey. What might the survey have been about? Communicate your reasoning.",
        interact: [
          { kind: "tally", counts: true, rows: [{ l: "Green", start: 11 }, { l: "Blue", start: 8 }] },
          { kind: "choose", rows: [{ t: "A good survey question", options: ["What is your favourite colour?", "How old are you?", "How many pets do you have?"], a: 0 }] }
        ],
        answer: "Answers vary. The categories are colours, so the question might be \"What is your favourite colour?\" Green got 11 votes and blue got 8.",
        explain: "The tallies are read as 11 for green and 8 for blue."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "[3/4] is the same as how many eighths? Show this on a fraction strip.",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "This strip shows [3/4]." },
          { kind: "shade", parts: 8, hint: "Shade the same amount of this strip in eighths." },
          { kind: "input", fields: [{ label: "[3/4] = ? eighths", value: 6 }] }
        ],
        answer: "**[6/8]**. Each quarter is 2 eighths, so 3 quarters are 6 eighths."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record the time shown on the clock in words.",
        interact: [
          { kind: "clock", time: "1:50", drag: true },
          { kind: "choose", rows: [{ t: "The time is", options: ["ten past two", "ten to two", "ten to ten", "two fifty"], a: [1] }] }
        ],
        answer: "**Ten to two** (1:50). The long hand points to the 10, and the short hand is nearly at the 2.",
        explain: "Read from the slide: the longer hand points to the 10 and the shorter hand is just before the 2."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "473 032 in non-standard partitioning is the same as 4 hundred thousands, 5 ten thousands, 23 thousands, 0 hundreds, 0 tens and 32 ones.",
        answer: true,
        explain: "400 000 + 50 000 + 23 000 + 32 = 473 032.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: { HTh: 4, TTh: 5, Th: 23, O: 32 } }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition this number in non-standard forms: 526 342",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 526342, target: 526342, need: "nonstandard" },
          { kind: "expr", count: 1, target: 526342, placeholder: "e.g. 500 000 + 26 342", sample: ["500 000 + 26 342"], mustUse: { re: "\\+", msg: "Join the parts with +." } }
        ],
        answer: "Answers vary, for example 500 000 + 26 342, or 4 hundred thousands + 12 ten thousands + 6342."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "How many students play soccer? How many students play NRL? How many more students play soccer than NRL?",
        img: "u26-sport.png",
        interact: [
          { kind: "jumps", start: 0, steps: [2], hint: "Each ball stands for 2 students. Jump + 2 for each ball." },
          { kind: "input", fields: [{ label: "Soccer", value: 16 }, { label: "NRL", value: 12 }, { label: "How many more", value: 4 }] }
        ],
        cubes: { ops: ["×", "−"], also: ["+"], solve: [{ t: "Count in twos", s: "Soccer has 8 balls: 2, 4, 6 … 16. NRL has 6 balls: 12. 16 − 12 = 4." }, { t: "Compare the balls first", s: "Soccer has 2 more balls than NRL. 2 balls × 2 students = 4 more students." }] },
        answer: "Soccer **16**, NRL **12**, so **4 more** students play soccer. Each ball is 2 students."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Record the missing fraction parts. What is the relationship between halves, quarters and eighths?",
        interact: [
          { kind: "shade", parts: 2, pre: [1], hint: "Halves: one half is showing." },
          { kind: "shade", parts: 4, pre: [0, 3], hint: "Quarters: two quarters are showing." },
          { kind: "shade", parts: 8, pre: [0, 5, 6, 7], hint: "Eighths: four eighths are showing." },
          { kind: "input", fields: [{ label: "Missing halves", value: 1 }, { label: "Missing quarters", value: 2 }, { label: "Missing eighths", value: 4 }] }
        ],
        answer: "Missing: **1 half, 2 quarters and 4 eighths**. 1 half = 2 quarters = 4 eighths. Each time the parts are halved, there are twice as many."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Record the shapes that have parallel sides.",
        interact: [{ kind: "classify", view: [920, 400],
          cats: [{ k: "yes", t: "Has parallel sides", c: "#22A06B" }, { k: "no", t: "No parallel sides", c: "#C4372C" }],
          shapes: [
            { p: "20,180 100,40 180,180", a: "no", fill: "#2F5FD0", deco: "<text x='100' y='140' class='co-name' style='font-size:20px'>triangle</text>" },
            { p: "300,40 360,100 300,160 240,100", a: "yes", fill: "#2F5FD0", deco: "<text x='300' y='105' class='co-name' style='font-size:20px'>square</text>" },
            { p: "500,45 567,93 541,172 459,172 433,93", a: "no", fill: "#2F5FD0", deco: "<text x='500' y='118' class='co-name' style='font-size:20px'>pentagon</text>" },
            { p: "700,40 760,100 700,190 640,100", a: "no", fill: "#2F5FD0", deco: "<text x='700' y='105' class='co-name' style='font-size:20px'>kite</text>" },
            { p: "20,380 60,250 140,250 180,380", a: "yes", fill: "#2F5FD0", deco: "<text x='100' y='325' class='co-name' style='font-size:20px'>trapezium</text>" },
            { p: "240,380 290,250 460,250 410,380", a: "yes", fill: "#2F5FD0", deco: "<text x='350' y='325' class='co-name' style='font-size:20px'>rhombus</text>" },
            { p: "650,315 615,376 545,376 510,315 545,254 615,254", a: "yes", fill: "#2F5FD0", deco: "<text x='580' y='320' class='co-name' style='font-size:20px'>hexagon</text>" },
            { p: "700,260 900,260 900,370 700,370", a: "yes", fill: "#2F5FD0", deco: "<text x='800' y='320' class='co-name' style='font-size:20px'>rectangle</text>" }] }],
        answer: "**Square, trapezium, rhombus, hexagon and rectangle** have parallel sides. The triangle, pentagon and kite do not.",
        explain: "The shape labelled 'rhombus' on the slide is drawn as a slanted parallelogram. Either way, it has two pairs of parallel sides. The hexagon and pentagon are taken as regular."
      }
    ],
    // Review 5
    [
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Which of the following are the same as 94 − 65? You may choose more than one answer.",
        interact: [
          { kind: "jumps", start: 65, end: 94, steps: [5, 9, 10, 20], hint: "Count up from 65 to 94 to find the difference." },
          { kind: "select", items: [["A: 84 − 55", true], ["B: 34 − 5", true], ["C: 84 + 55", false], ["D: 90 − 60", false]] }
        ],
        answer: "**A and B**. 94 − 65 = 29. 84 − 55 = 29 and 34 − 5 = 29, because both numbers moved by the same amount. 90 − 60 = 30, and C adds instead.",
        explain: "Two options are correct, so this is set as a tap-every-correct-answer question rather than a single multiple choice."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Which letter represents 1.2? Communicate your reasoning.",
        img: "u26-numline.png",
        interact: [
          { kind: "marker", min: 0, max: 2, divs: 20, majorEvery: 5, labels: [0, 0.5, 1, 1.5, 2], label: "1.2", hint: "Each small step is one tenth (0.1). Slide the pin to 1.2." },
          { kind: "choose", rows: [{ t: "1.2 is at letter", options: ["A", "B", "C"], a: 2 }] }
        ],
        answer: "**C**. Each small step is one tenth. C is 2 tenths past 1, which is 1.2. A is 0.2 and B is 0.7."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Year 4 have money to spend on sports equipment and would like to collect data to decide what to purchase. Write a question to collect the data. Write four categories to use for data collection.",
        interact: [
          { kind: "choose", rows: [{ t: "A good question", options: ["Which new sports equipment would you most like?", "Do you like sport?", "How fast can you run?"], a: 0 }] },
          { kind: "select", items: [["Soccer balls", true], ["Basketballs", true], ["Skipping ropes", true], ["Cricket set", true], ["Sunny days", false], ["Lunchtime", false]] }
        ],
        answer: "Answers vary, for example \"Which new sports equipment would you most like?\" with categories soccer balls, basketballs, skipping ropes and a cricket set.",
        explain: "The slide is open-ended. Example options are given so the class can test which ones make good categories."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Matt and Lucy are in a race. Matt has run [3/6] of the way and Lucy has run [2/3] of the way. Who is in the lead? Draw fraction strips to show your reasoning.",
        interact: [
          { kind: "shade", parts: 6, hint: "Matt's strip: shade 3 sixths." },
          { kind: "shade", parts: 3, hint: "Lucy's strip: shade 2 thirds." },
          { kind: "choose", rows: [{ t: "Who is in the lead?", options: ["Matt", "Lucy", "They are level"], a: 1 }] }
        ],
        cubes: { ops: [], note: "Compare the fractions; there is nothing to calculate.", solve: [{ t: "Fraction strips", s: "Matt's 3 sixths reach halfway. Lucy's 2 thirds reach further, so Lucy is ahead." }, { t: "Use the same parts", s: "[2/3] = [4/6], and [4/6] is more than [3/6]." }] },
        answer: "**Lucy**. [2/3] = [4/6], which is more than Matt's [3/6] (one half)."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Write the time shown on the clock in words.",
        interact: [
          { kind: "clock", time: "7:10", drag: true },
          { kind: "choose", rows: [{ t: "The time is", options: ["ten past seven", "ten to seven", "seven past two", "ten past two"], a: 0 }] }
        ],
        answer: "**Ten past seven** (7:10). The long hand points to the 2 (10 minutes) and the short hand is just past the 7.",
        explain: "Read from the slide: the longer hand points to the 2 and the shorter hand is just past the 7."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "507 + 599 = 500 + 606",
        answer: true,
        explain: "7 was moved from 507 to 599. 507 + 599 = 1106 and 500 + 606 = 1106.",
        interact: [{ kind: "scale", left: "507 + 599", right: "500 + ?", answer: 606 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Record the number shown.",
        img: "u26-decimal.png",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 2.72 },
          { kind: "input", fields: [{ label: "Number", value: 2.72 }] }
        ],
        answer: "**2.72**: 2 wholes, 7 tenths and 2 hundredths.",
        explain: "In the last strip, the first tenth is cut into hundredths and 2 of them are shaded (read from the slide picture)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Which graph is easier to understand and why?",
        img: "u26-graph1.png",
        interact: [
          { kind: "bargraph", max: 20, step: 5, minor: 1, ylabel: "Books per month", xlabel: "Year group", label: "Column graph of books read per month", series: [{ l: "Books", c: "#0B2A6B" }], groups: [{ l: "Year 4", v: [8] }, { l: "Year 3", v: [12] }, { l: "Year 2", v: [16] }, { l: "Year 1", v: [20] }] },
          { kind: "choose", rows: [{ t: "Easier to read", options: ["the picture graph", "the column graph"], a: [0, 1] }] }
        ],
        answer: "Answers vary. The **column graph** has a scale, so each total is quick to read (Year 1: 20, Year 2: 16, Year 3: 12, Year 4: 8). The picture graph lets you count every book, but it takes longer.",
        explain: "Either answer is accepted, as long as the class gives a reason."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "The blue fraction strip is equal to one whole. What is the fractional quantity of the pink strip? Can you write this in another way?",
        img: "u26-strips.png",
        interact: [{ kind: "input", fields: [{ label: "Pink strip", value: 1.5, placeholder: "a/b" }, { label: "Another way", value: 1.5, placeholder: "e.g. 1 1/2" }] }],
        answer: "**[3/2]** (three halves), which is also **1[1/2]**. The blue whole is 2 halves, and the pink strip is 3 of those halves."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Which of the angles indicated with a red dot are right angles?",
        img: "u26-angles.png",
        interact: [
          { kind: "angle", target: "right", start: 60, label: "Make a right angle to compare." },
          { kind: "choose", rows: [
            { t: "Scissors", options: ["right angle", "not a right angle"], a: 1 },
            { t: "Book corner", options: ["right angle", "not a right angle"], a: 0 },
            { t: "Clock hands", options: ["right angle", "not a right angle"], a: 1 },
            { t: "Crossed pencils", options: ["right angle", "not a right angle"], a: 0 }] }
        ],
        answer: "The **book corner** and the **crossed pencils** make right angles. The scissor blades make a smaller angle, and the clock hands make a larger one.",
        explain: "The pencils are drawn crossing at about 90° on the slide, so they count as a right angle."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which of these number sentences is correct?",
        options: ["59 − 13 = 60 − 14", "49 − 19 = 50 − 18", "155 + 75 = 160 + 80", "68 + 35 = 70 + 37"],
        answer: 0,
        explain: "59 − 13 = 46 and 60 − 14 = 46: both numbers went up by 1, so the difference stays the same. The others don't balance (30 ≠ 32, 230 ≠ 240, 103 ≠ 107). The slide says you may choose more than one, but only A is correct.",
        interact: [{ kind: "scale", left: "59 - 13", right: "60 - ?", answer: 14 }]
      },
      {
        type: "sr", focus: "Representing numbers using place value B: Decimals",
        prompt: "Record the role of zero in these decimals: 0.05, 0.50, 0.005",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 0.05 },
          { kind: "choose", rows: [
            { t: "In 0.05, the zero after the point", options: ["holds the tenths place", "changes nothing"], a: 0 },
            { t: "In 0.50, the last zero", options: ["holds the tenths place", "changes nothing"], a: 1 },
            { t: "In 0.005, the zeros", options: ["hold the tenths and hundredths places", "change nothing"], a: 0 }] }
        ],
        answer: "The zeros before the 5 are **place holders**: 0.05 has no tenths, and 0.005 has no tenths or hundredths. The zero at the end of 0.50 changes nothing: 0.50 = 0.5."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Our class wants to create a data display on their favourite fruit. To collect the data, Group 1 conducts a survey and Group 2 makes observations. What question might Group 1 have asked? What might Group 2 observe?",
        interact: [{ kind: "choose", rows: [
          { t: "Group 1 might ask", options: ["What is your favourite fruit?", "Do you eat lunch?"], a: 0 },
          { t: "Group 2 might observe", options: ["which fruit students bring in their lunchboxes", "how tall students are"], a: 0 }] }],
        cubes: { ops: [], note: "There is nothing to calculate; this is about collecting data.", solve: [{ t: "Survey", s: "Ask each student one clear question and record their answer: \"What is your favourite fruit?\"" }, { t: "Observation", s: "Watch and record without asking, for example the fruit in each lunchbox at fruit break." }] },
        answer: "Answers vary. Group 1: \"What is your favourite fruit?\" Group 2: the fruit students bring or eat at fruit break."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "[4/3]: How many more thirds are needed to make 2 wholes?",
        interact: [
          { kind: "shade", parts: 6, pre: [0, 1, 2, 3], hint: "This strip is 2 wholes cut into thirds. [4/3] is shaded. Tap the thirds still needed." },
          { kind: "input", fields: [{ label: "More thirds needed", value: 2 }] }
        ],
        answer: "**2 more thirds**. 2 wholes are [6/3], and [6/3] − [4/3] = [2/3]."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "What is the area of this rectangle drawn onto 1 cm grid paper?",
        interact: [
          { kind: "areagrid", size: 44, cells: ["000", "111", "111", "111", "111", "111"].map((r) => "00" + r + "00000") },
          { kind: "input", fields: [{ label: "Area", value: 15, suffix: "cm²" }] }
        ],
        answer: "**15 cm²**. The rectangle is 3 squares wide and 5 squares tall: 3 × 5 = 15."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "This number sentence shows equal difference: 68 + 35 = 70 + 37",
        answer: false,
        explain: "68 + 35 = 103 but 70 + 37 = 107, so it isn't even balanced. Adding the same amount to both numbers only keeps the answer the same for subtraction. For addition, you add to one and take from the other: 68 + 35 = 70 + 33.",
        interact: [{ kind: "scale", left: "68 + 35", right: "70 + ?", answer: 33 }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Solve this using standard or non-standard partitioning: 673 − 27 = Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 673, target: 646, need: "standard", hint: "Take away 2 tens and 7 ones. Break a ten when there aren't enough ones." },
          { kind: "input", fields: [{ label: "673 − 27 =", value: 646 }] }
        ],
        answer: "**646**. Rename 673 as 6 hundreds, 6 tens and 13 ones. 13 − 7 = 6 ones, 6 − 2 = 4 tens, 6 hundreds."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Which country recycles the highest percentage of waste? What percentage of rubbish is recycled in Italy? Has Australia achieved its goal to recycle 20% of its rubbish?",
        interact: [
          { kind: "bargraph", max: 20, step: 5, minor: 1, ylabel: "Percentage recycled", xlabel: "Country", label: "Recycling by country", series: [{ l: "Recycled %", c: "#0B2A6B" }],
            groups: [{ l: "Australia", v: [8], c: "#0B2A6B" }, { l: "Italy", v: [12], c: "#C4372C" }, { l: "Spain", v: [16], c: "#2F6FE4" }, { l: "New Zealand", v: [20], c: "#222222" }] },
          { kind: "choose", rows: [{ t: "Highest", options: ["Australia", "Italy", "Spain", "New Zealand"], a: 3 }, { t: "Has Australia reached 20%?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "Italy recycles", value: 12, suffix: "%" }] }
        ],
        answer: "**New Zealand** (20%). Italy recycles **12%**. **No**, Australia recycles about 8%, well short of 20%."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "How many eighths are equal to one whole? How many quarters make 2 wholes? How many wholes do 6 thirds make?",
        interact: [
          { kind: "shade", parts: 8, hint: "One whole in eighths." },
          { kind: "shade", parts: 8, hint: "Two wholes in quarters (each whole has 4 parts)." },
          { kind: "shade", parts: 6, hint: "Thirds: each whole has 3 parts." },
          { kind: "input", fields: [{ label: "Eighths in 1 whole", value: 8 }, { label: "Quarters in 2 wholes", value: 8 }, { label: "Wholes in 6 thirds", value: 2 }] }
        ],
        answer: "**8 eighths** make 1 whole. **8 quarters** make 2 wholes. **6 thirds** make 2 wholes."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Milla is going fishing. She needs to choose the shortest rod. Rod A: 1 m and 30 cm, Rod B: 120 cm, Rod C: 118 cm, Rod D: 1 m 50 cm. Which rod should she choose? Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 100, max: 160, ticks: 0.1, labelStep: 10, tol: 3, items: [["A 1 m 30 cm", 130], ["B 120 cm", 120], ["C 118 cm", 118], ["D 1 m 50 cm", 150]] },
          { kind: "choose", rows: [{ t: "Shortest rod", options: ["A", "B", "C", "D"], a: 2 }] }
        ],
        cubes: { ops: [], note: "Change every length to centimetres, then compare.", solve: [{ t: "Change to centimetres", s: "1 m 30 cm = 130 cm, 1 m 50 cm = 150 cm. 118 < 120 < 130 < 150." }, { t: "Number line", s: "Place each rod on a number line in cm. Rod C is furthest left." }] },
        answer: "**Rod C** (118 cm). In centimetres the rods are 130, 120, 118 and 150 cm."
      }
    ]
  ]
});
