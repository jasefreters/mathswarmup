/*
  Stage 2 Year B, Unit 27 — Review of learning (Term 2, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 2, ls: 2, unit: 27,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 27 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "Which number is not a multiple of 4?",
        options: ["4", "10", "12", "24"],
        answer: 1,
        explain: "Count by fours: 4, 8, 12, 16, 20, 24. 10 is skipped, so it is not a multiple of 4.",
        interact: [{ kind: "jumps", start: 0, end: 24, steps: [4], hint: "Jump in fours from 0. Do you land on each number?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "How can doubling the answer help to generate a ×8 fact? 4 × 3 = ?, 4 × 5 = ?, 4 × 10 = ? Communicate your reasoning.",
        interact: [
          { kind: "array", rows: 4, cols: 3, showTotal: true, hint: "This is 4 × 3. Double the rows to make 8 × 3." },
          { kind: "input", fields: [{ label: "4 × 3 =", value: 12 }, { label: "8 × 3 =", value: 24 }, { label: "4 × 5 =", value: 20 }, { label: "8 × 5 =", value: 40 }, { label: "4 × 10 =", value: 40 }, { label: "8 × 10 =", value: 80 }] }
        ],
        answer: "4 × 3 = 12, so 8 × 3 = **24** · 4 × 5 = 20, so 8 × 5 = **40** · 4 × 10 = 40, so 8 × 10 = **80**. 8 is double 4, so the ×8 answer is double the ×4 answer."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the number 459 062 on the place value house. Record 459 062 using expanded notation.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 0, target: 459062, need: "standard", hint: "Use + to build 459 062 in the houses." },
          { kind: "input", fields: [{ label: "459 062 =", value: 400000 }, { label: "+", value: 50000 }, { label: "+", value: 9000 }, { label: "+", value: 60 }, { label: "+", value: 2 }] }
        ],
        answer: "**400 000 + 50 000 + 9000 + 60 + 2**. There are 0 hundreds, so no hundreds part is needed."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Write a question to get information about this matter of interest: school subjects.",
        interact: [{ kind: "select", hint: "Tap every question that would collect information about school subjects.", items: [["What is your favourite school subject?", true], ["Which subject do you find the most challenging?", true], ["How many hours of homework do you do?", false], ["Which subject would you like more time for?", true], ["What is your favourite colour?", false]] }],
        answer: "Answers vary, for example: What is your favourite school subject? Which subject do you find the most challenging?"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Read and record the analog times shown on clock A, clock B and clock C.",
        interact: [
          { kind: "clock", time: "2:45" },
          { kind: "clock", time: "10:20" },
          { kind: "clock", time: "5:05" },
          { kind: "input", fields: [{ label: "Clock A", accept: ["2:45", "quarter to 3", "quarter to three"], placeholder: "h:mm" }, { label: "Clock B", accept: ["10:20", "20 past 10", "twenty past ten"], placeholder: "h:mm" }, { label: "Clock C", accept: ["5:05", "5 past 5", "five past five"], placeholder: "h:mm" }] }
        ],
        answer: "Clock A: **2:45** (quarter to 3) · Clock B: **10:20** (20 past 10) · Clock C: **5:05** (5 past 5)",
        explain: "The times are read from where the hands point on the slide's clocks."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "32 is double 8. Communicate your reasoning.",
        answer: false,
        explain: "Double 8 is 16. 32 is double 16 (or 4 eights).",
        interact: [{ kind: "array", rows: 2, cols: 8, showTotal: true, hint: "This is double 8. Is it 32?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the multiples for 3 and 6. How are the multiples of 3 and 6 connected? Communicate your reasoning.",
        interact: [
          { kind: "numchart", from: 1, to: 30, answer: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], hint: "Tap the multiples of 3. Then look at every second one." },
          { kind: "input", fields: [{ label: "Multiples of 6:", value: 6 }, { label: "", value: 12 }, { label: "", value: 18 }, { label: "", value: 24 }, { label: "", value: 30 }] },
          { kind: "choose", rows: [{ t: "How are they connected?", options: ["Every second multiple of 3 is a multiple of 6", "They have no numbers the same", "Multiples of 6 are odd"], a: 0 }] }
        ],
        answer: "Multiples of 3: 3, 6, 9, 12, 15, 18 … Multiples of 6: 6, 12, 18, 24, 30 … **6 is double 3**, so every second multiple of 3 is a multiple of 6."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Partition the number 601 478 in two different ways using non-standard forms.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 601478, target: 601478, need: "nonstandard" },
          { kind: "expr", count: 2, target: 601478, placeholder: "e.g. 600 000 + 1478", mustUse: { re: "\\d\\s*\\d{3}[^\\d]|\\d{4}", msg: "That looks like the standard partition. Group some places together, like 1478." }, sample: ["600 000 + 1478", "601 000 + 478"] }
        ],
        answer: "Answers vary, for example 600 000 + 1478, or 601 000 + 400 + 78, or 60 ten thousands + 14 hundreds + 78 ones."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Write a list of categories for the survey question: How often should we have school sport?",
        interact: [{ kind: "select", hint: "Tap every category that answers the question.", items: [["Every day", true], ["A few times a week", true], ["Once a week", true], ["Once a fortnight", true], ["Soccer", false], ["Basketball", false], ["Never", true]] }],
        answer: "Answers vary: every day, a few times a week, once a week, once a fortnight, never. The categories must answer 'how often', not 'which sport'."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Draw the top view of this 3D object.",
        img: "u27-pyramid.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "The top view is", options: ["a square with lines from each corner to the middle", "a triangle", "a square with nothing inside", "a circle"], a: 0 }] }
        ],
        answer: "A **square** with a line from each corner to the point in the middle. Looking down on a square pyramid, you see its square base and the 4 triangular faces meeting at the top."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "Which would create the largest array?",
        options: ["6 × 3", "4 eights", "2 tens", "3 × 9"],
        answer: 1,
        explain: "6 × 3 = 18, 4 eights = 32, 2 tens = 20, 3 × 9 = 27. 32 is the largest.",
        interact: [{ kind: "array", rows: 4, cols: 8, showTotal: true, hint: "Build each array and compare the totals." }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "The number sentence 2 × 12 can be rewritten as 2 × (2 × 6). Rewrite the number sentence in as many ways as possible using regrouping. Which grouping is easiest to solve and why?",
        interact: [{ kind: "expr", count: 3, target: 24, placeholder: "e.g. 2 x (3 x 4)", mustUse: { re: "\\(", msg: "Use brackets to show the regrouping, like 2 × (3 × 4)." }, sample: ["2 x (3 x 4)", "(2 x 2) x 6", "(2 x 6) x 2"] }],
        answer: "Answers vary: 2 × (3 × 4), (2 × 2) × 6 = 4 × 6, (2 × 3) × 4 = 6 × 4, 2 × (2 × 2 × 3). Every one equals **24**. Many find (2 × 2) × 6 = 4 × 6 easiest, because 4 × 6 is a known fact."
      },
      {
        type: "sr", focus: "Represents number using place value B",
        prompt: "Use partitioning to represent 3 different number combinations for ordering 12 600 glue sticks. Glue sticks come as a pallet of 10 000, a tower of 1000, a box of 100, a 10 pack or a single stick.",
        img: "u27-glue.png",
        interact: [{ kind: "expr", count: 3, target: 12600, placeholder: "e.g. 10000 + 2 x 1000 + 6 x 100", sample: ["10000 + 2 x 1000 + 6 x 100", "12 x 1000 + 6 x 100", "126 x 100"] }],
        cubes: { ops: ["+", "×"], solve: [{ t: "Use the biggest packs first", s: "1 pallet (10 000) + 2 towers (2000) + 6 boxes (600) = 12 600." }, { t: "Rename the thousands", s: "12 600 = 12 towers (12 000) + 6 boxes (600), or 126 boxes of 100." }] },
        answer: "Answers vary, for example: 1 pallet + 2 towers + 6 boxes · 12 towers + 6 boxes · 126 boxes · 1 pallet + 2 towers + 60 ten packs."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is your favourite type of movie or TV show? The tally shows animation 7, comedy 3, action 9 and documentary 1. What other ways of presenting this data would be effective? Communicate your reasoning.",
        interact: [
          { kind: "bargraph", max: 10, step: 2, minor: 1, ylabel: "Number of students", xlabel: "Type of movie or TV show", label: "Column graph of favourite movie types", series: [{ l: "Students", c: "#2F6FE4" }], groups: [{ l: "Animation", v: [7] }, { l: "Comedy", v: [3] }, { l: "Action", v: [9] }, { l: "Documentary", v: [1] }] },
          { kind: "select", hint: "Tap every display that would suit this data.", items: [["Column graph", true], ["Picture graph", true], ["Table", true], ["Dot plot", true], ["Line graph", false]] }
        ],
        answer: "A **column graph**, **picture graph**, **dot plot** or **table** would work, because the data is counts in categories. A line graph is not suitable: it shows change over time.",
        explain: "The tally counts are read from the slide's tally marks: animation 7, comedy 3, action 9, documentary 1."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Match the container to the correct capacity: A is a 2 L bottle, B is a 1500 mL milk bottle and C is a 1250 mL yoghurt tub.",
        img: "u27-containers.png",
        interact: [{ kind: "choose", rows: [
          { t: "A (2 L)", options: ["1 litre 500 mL", "1 litre 250 mL", "2000 mL"], a: 2 },
          { t: "B (1500 mL)", options: ["1 litre 500 mL", "1 litre 250 mL", "2000 mL"], a: 0 },
          { t: "C (1250 mL)", options: ["1 litre 500 mL", "1 litre 250 mL", "2000 mL"], a: 1 }] }],
        answer: "A: 2 L = **2000 mL** · B: 1500 mL = **1 litre 500 mL** · C: 1250 mL = **1 litre 250 mL**. 1 litre = 1000 mL."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "I roll a 9-sided dice. I must either double or halve my roll before adding it to the starting number. The starting number is 55 and the target number is 63. The only way to reach the target number is by rolling a 9.",
        answer: false,
        explain: "63 − 55 = 8. Double 4 is 8, so rolling a 4 works. Rolling 9 gives 18 (double) or 4.5 (half), and neither makes 8.",
        interact: [{ kind: "jumps", start: 55, end: 63, steps: [1, 4, 8], hint: "How far is it from 55 to 63? Which roll doubled or halved makes that jump?" }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Find the total of the partially covered area model. The top row shows 6 squares and the left column shows 5 squares.",
        img: "u27-area.png",
        interact: [
          { kind: "array", rows: 5, cols: 6, showTotal: true, hint: "Rebuild the covered model: 5 rows of 6." },
          { kind: "input", fields: [{ label: "Total", value: 30, suffix: "squares" }] }
        ],
        answer: "**30 squares**. The top row shows 6 columns and the side shows 5 rows: 5 × 6 = 30.",
        explain: "The covered model is read as 6 columns by 5 rows from the squares showing along the top and the left edge."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "On the number line and tenths strip, which of the following would be closer to 1: 14 tenths, 6 tenths or 11 tenths?",
        interact: [
          { kind: "numberline", min: 0, max: 2, ticks: 10, labelStep: 0.5, tol: 0.05, items: [["14 tenths", 1.4], ["6 tenths", 0.6], ["11 tenths", 1.1]] },
          { kind: "choose", rows: [{ t: "Closest to 1", options: ["14 tenths", "6 tenths", "11 tenths"], a: 2 }] }
        ],
        answer: "**11 tenths** (1.1) is only 1 tenth from 1. 14 tenths (1.4) and 6 tenths (0.6) are each 4 tenths away."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "The graphs show mountain bike trail usage. Which season had the busier trails? Look carefully at the scale on each graph.",
        interact: [
          { kind: "bargraph", max: 200, step: 50, minor: 10, ylabel: "Riders in summer", xlabel: "MTB trail difficulty rating", label: "MTB trail usage in summer", series: [{ l: "Summer", c: "#3B6EF6" }], groups: [{ l: "Easy", v: [145], c: "#4CC764" }, { l: "Intermediate", v: [185], c: "#3B6EF6" }, { l: "Difficult", v: [85], c: "#BFC9CC" }, { l: "Extreme", v: [45], c: "#24292E" }] },
          { kind: "bargraph", max: 100, step: 20, minor: 10, ylabel: "Riders in winter", xlabel: "MTB trail difficulty rating", label: "MTB trail usage in winter", series: [{ l: "Winter", c: "#3B6EF6" }], groups: [{ l: "Easy", v: [92], c: "#4CC764" }, { l: "Intermediate", v: [75], c: "#3B6EF6" }, { l: "Difficult", v: [23], c: "#BFC9CC" }, { l: "Extreme", v: [13], c: "#24292E" }] },
          { kind: "choose", rows: [{ t: "Busier season", options: ["Summer", "Winter"], a: 0 }] }
        ],
        answer: "**Summer**. The winter bars look tall, but its scale only goes to 100. Summer has about 460 riders and winter about 200.",
        explain: "Bar heights are read from the slide's graphs, so the totals are approximate."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Which ribbon is the longest? Write its length using metres and centimetres. Ribbon A: 125 cm. Ribbon B: 1 m 30 cm. Ribbon C: 140 cm.",
        interact: [
          { kind: "numberline", min: 100, max: 150, ticks: 0.2, labelStep: 10, tol: 2, items: [["A", 125], ["B", 130], ["C", 140]] },
          { kind: "choose", rows: [{ t: "Longest ribbon", options: ["A", "B", "C"], a: 2 }] },
          { kind: "input", fields: [{ label: "Length", value: 1, suffix: "m" }, { label: "", value: 40, suffix: "cm" }] }
        ],
        answer: "**Ribbon C**, **1 m 40 cm**. Ribbon B is 1 m 30 cm = 130 cm, and A is 125 cm."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Find the numbers that are 10, 100 and 1000 times larger than the number rolled: 9.",
        options: ["9, 90, 9000", "90, 900, 9000", "10, 100, 1000", "99, 990, 9900"],
        answer: 1,
        explain: "9 × 10 = 90, 9 × 100 = 900, 9 × 1000 = 9000. Each digit moves 1, 2 or 3 places to the left.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 9, shift: true }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Write the related multiplication and division number sentences for: 42, 6 and 7.",
        interact: [
          { kind: "array", rows: 6, cols: 7, showTotal: true, hint: "6 rows of 7. Rotate it to see 7 rows of 6." },
          { kind: "input", fields: [{ label: "6 × 7 =", value: 42 }, { label: "7 × 6 =", value: 42 }, { label: "42 ÷ 6 =", value: 7 }, { label: "42 ÷ 7 =", value: 6 }] }
        ],
        answer: "6 × 7 = 42 · 7 × 6 = 42 · 42 ÷ 6 = 7 · 42 ÷ 7 = 6"
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Determine the decimal number presented here. Each strip is 1 whole cut into tenths. Record this number in a decimal place value house.",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], hint: "Strip 1" },
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4], hint: "Strip 2" },
          { kind: "shade", parts: 10, pre: [0], hint: "Strip 3" },
          { kind: "pv", cols: ["H", "T", "O", "t", "h"], start: 0, hint: "Build the number in the place value house." },
          { kind: "input", fields: [{ label: "Decimal", value: 1.6 }] }
        ],
        answer: "**1.6**. One strip is fully shaded (1 whole), then 5 tenths and 1 more tenth: 1 + 0.5 + 0.1 = 1.6.",
        explain: "The slide shows three tenths strips: 10, 5 and 1 tenth shaded. They are read together as 16 tenths = 1.6."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "The column graph and the table show pieces of rubbish collected by each class. How are the representations of data similar and different? Which one is easier to interpret and why?",
        table: [["Class", "KD", "KJ", "1H", "1/2L", "2B", "3P", "3/4F", "4A", "5D", "5/6R", "6W"], ["Pieces of rubbish", "15", "19", "22", "25", "21", "22", "27", "34", "30", "26", "35"]],
        interact: [
          { kind: "bargraph", max: 40, step: 5, minor: 1, ylabel: "Pieces of rubbish", xlabel: "Class", label: "Column graph of rubbish collected", series: [{ l: "Rubbish", c: "#0B2A6B" }], groups: [{ l: "KD", v: [15] }, { l: "KJ", v: [19] }, { l: "1H", v: [22] }, { l: "1/2L", v: [25] }, { l: "2B", v: [21] }, { l: "3P", v: [22] }, { l: "3/4F", v: [27] }, { l: "4A", v: [34] }, { l: "5D", v: [30] }, { l: "5/6R", v: [26] }, { l: "6W", v: [35] }] },
          { kind: "choose", rows: [
            { t: "Quickest to see which class collected the most", options: ["Column graph", "Table"], a: 0 },
            { t: "Quickest to find exactly how many 2B collected", options: ["Column graph", "Table"], a: 1 }] }
        ],
        answer: "Both show the same data. The **column graph** makes it quick to compare (6W is the tallest). The **table** gives exact numbers (2B collected 21). Answers vary on which is easier."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Write each mass using the abbreviation for kilogram. A pumpkin has a mass of 3 kilograms. A watermelon has a mass of 7 kilograms.",
        interact: [{ kind: "input", fields: [{ label: "Pumpkin", accept: ["3 kg"], placeholder: "e.g. 5 kg" }, { label: "Watermelon", accept: ["7 kg"], placeholder: "e.g. 5 kg" }] }],
        answer: "Pumpkin: **3 kg** · Watermelon: **7 kg**"
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "The number is 56. The number shown in the place value house is 100 times larger than 56. The house shows 5 thousands, 6 hundreds, 0 tens and 0 ones.",
        answer: true,
        explain: "The house shows 5600. 56 × 100 = 5600: each digit moves 2 places to the left.",
        interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 56, shift: true, houses: false }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Which equation is not in the fact family for 32 ÷ 8? Choose from 32 ÷ 8, 32 ÷ 7, 32 ÷ 4, 32 ÷ 2. Communicate your reasoning.",
        interact: [
          { kind: "pack", mode: "share", n: 7, total: 32, thing: "counters", label: "group", hint: "Share 32 counters into 7 groups. Is anything left over?" },
          { kind: "choose", rows: [{ t: "Not in the fact family", options: ["32 ÷ 8", "32 ÷ 7", "32 ÷ 4", "32 ÷ 2"], a: 1 }] }
        ],
        answer: "**32 ÷ 7**. 7 is not a factor of 32 (32 ÷ 7 leaves a remainder). 32 ÷ 8 = 4 and 32 ÷ 4 = 8 are in the fact family with 4 × 8 = 32.",
        explain: "Strictly, 32 ÷ 2 is not in the 4, 8, 32 family either. The slide's intended answer is 32 ÷ 7, the only division that does not share evenly."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Use the place value house to record: 6 wholes as a decimal, 6 tenths as a decimal, 6 hundredths as a decimal. Is the decimal point and zero necessary? Why or why not?",
        interact: [
          { kind: "pv", cols: ["T", "O", "t", "h"], start: 6, shift: true, hint: "Start with 6 ones. Press ÷ 10 to make tenths, then hundredths." },
          { kind: "input", fields: [{ label: "6 wholes", value: 6 }, { label: "6 tenths", value: 0.6 }, { label: "6 hundredths", value: 0.06 }] },
          { kind: "choose", rows: [{ t: "Is the 0 in 0.06 necessary?", options: ["Yes, it holds the tenths place", "No, it can be left out"], a: 0 }] }
        ],
        answer: "**6**, **0.6** and **0.06**. The decimal point shows where the ones end. The zero in 0.06 holds the tenths place; without it, 0.6 would be a different number."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "What is missing from this graph?",
        img: "u27-animals.png",
        interact: [{ kind: "select", hint: "Tap everything the graph is missing.", items: [["A title", true], ["A label on the vertical axis", true], ["A label on the horizontal axis", true], ["Bars", false], ["Numbers on the scale", false], ["The animal names", false]] }],
        answer: "A **title** and **axis labels**: we don't know what the numbers count or what the graph is about."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Explain the term equally likely and give an example.",
        interact: [{ kind: "select", hint: "Tap every example of equally likely outcomes.", items: [["Tossing a coin: heads or tails", true], ["Rolling a die: a 2 or a 5", true], ["A spinner half red, half blue: red or blue", true], ["A bag with 9 red and 1 blue: red or blue", false], ["Rain or no rain tomorrow", false]] }],
        answer: "**Equally likely** means each outcome has the same chance of happening. Example: tossing a coin, heads and tails are equally likely."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Starting at 804, what are the numbers 10, 100 and 1000 times larger?",
        options: ["× 10 = 4800, × 100 = 48 000, × 1000 = 480 000", "× 10 = 840, × 100 = 8400, × 1000 = 84 000", "× 10 = 8040, × 100 = 80 400, × 1000 = 804 000", "× 10 = 8400, × 100 = 84 000, × 1000 = 840 000"],
        answer: 2,
        explain: "Multiplying by 10 moves each digit one place left: 804 → 8040 → 80 400 → 804 000. The 0 tens stays in the number.",
        interact: [{ kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O"], start: 804, shift: true }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Apply the associative property to find the pair of number sentences that have the same total: 7 × 2 × 2, 7 × 2 × 4, 4 × 7 × 2. Communicate your reasoning.",
        interact: [
          { kind: "group", op: "×", items: [7, 2, 4] },
          { kind: "select", hint: "Tap the two number sentences with the same total.", items: [["7 × 2 × 2", false], ["7 × 2 × 4", true], ["4 × 7 × 2", true]] },
          { kind: "input", fields: [{ label: "Same total", value: 56 }] }
        ],
        answer: "**7 × 2 × 4** and **4 × 7 × 2** both equal **56**: they use the same numbers in a different order and grouping. 7 × 2 × 2 = 28."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Partition using quantity values and bridge to the nearest decade to solve: 149 + 63, 465 + 156, 244 + 87",
        interact: [
          { kind: "jumps", start: 149, steps: [1, 10, 50, 100], hint: "149 + 1 = 150 bridges to the decade. Then add the rest." },
          { kind: "input", fields: [{ label: "149 + 63 =", value: 212 }, { label: "465 + 156 =", value: 621 }, { label: "244 + 87 =", value: 331 }] }
        ],
        answer: "149 + 1 = 150, + 62 = **212** · 465 + 5 = 470, + 151 = **621** · 244 + 6 = 250, + 81 = **331**"
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Class 4P asked the survey question: What do you like about lunch? Responses included: sandwiches, playing outside, juice, talking with friends, ice cream. Refine this question so students only give answers about food.",
        interact: [{ kind: "choose", rows: [{ t: "Best refined question", options: ["What do you like about lunch?", "What is your favourite food to eat at lunch?", "Do you like lunch?", "What do you do at lunch?"], a: 1 }] }],
        answer: "Answers vary, for example: **What is your favourite food to eat at lunch?** Naming 'food' stops answers like playing outside."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Which of these polygons have parallel sides? Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [720, 260], hint: "Choose a group, then tap each polygon.",
            cats: [{ k: "y", t: "Has parallel sides", c: "#22A06B" }, { k: "n", t: "No parallel sides", c: "#D9480F" }],
            shapes: [
              { p: "120,20 214,88 178,198 62,198 26,88", a: "n", fill: "#7FD8F7" },
              { p: "300,30 430,30 430,210 300,210", a: "y", fill: "#FF6B7F" },
              { p: "520,30 580,30 580,140 660,140 660,210 520,210", a: "y", fill: "#6FA0FF" }] },
          { kind: "select", hint: "Tap each polygon with parallel sides.", items: [["Pentagon", false], ["Rectangle", true], ["L-shape", true]] }
        ],
        answer: "The **rectangle** and the **L-shape**. Their opposite sides go in the same direction and never meet. The regular pentagon has no parallel sides."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "In the number 4873, there are 4 thousands, 8 tens and 3 ones. Communicate your reasoning.",
        answer: false,
        explain: "4873 is 4 thousands, 8 hundreds, 7 tens and 3 ones. The 8 is in the hundreds place.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 4873 }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Solve 40 × 6. Communicate your strategy.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 24, shift: true, hint: "4 × 6 = 24. Press × 10 to make 40 × 6." },
          { kind: "input", fields: [{ label: "40 × 6 =", value: 240 }] }
        ],
        answer: "**240**. 4 × 6 = 24, and 40 is 10 times 4, so 40 × 6 = 24 × 10 = 240."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use standard partitioning to solve 574 − 68. Use non-standard partitioning to solve 473 − 28. Why do you think non-standard partitioning has been used?",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 473, target: 445, hint: "There aren't 8 ones in 473. Break a ten into 10 ones, then take away 28." },
          { kind: "input", fields: [{ label: "574 − 68 =", value: 506 }, { label: "473 − 28 =", value: 445 }] },
          { kind: "choose", rows: [{ t: "Why rename 473?", options: ["There aren't enough ones, so a ten is renamed as 10 ones", "It makes the number bigger", "It is always faster"], a: 0 }] }
        ],
        answer: "574 − 68 = **506** · 473 − 28 = **445**. 473 is renamed as 400 + 60 + 13 because 3 ones is not enough to take away 8."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Would it be efficient to represent this data in a tally table? Why or why not?",
        img: "u27-fruit.png",
        interact: [{ kind: "choose", rows: [{ t: "Efficient as a tally?", options: ["Yes", "No"], a: 1 }, { t: "Why?", options: ["The numbers are too large to tally", "There are too few fruits", "Tallies only work for colours"], a: 0 }] }],
        answer: "**No**. The purchases are in the hundreds of thousands (up to 400 000). Drawing that many tally marks would take far too long."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Draw this isosceles triangle after a 3-quarter turn clockwise. Communicate your thinking.",
        img: "u27-triangle.png",
        interact: [
          { kind: "turns", hint: "Each tap is a quarter turn clockwise. Make 3 quarter turns and watch where the point ends up." },
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "After a 3-quarter turn clockwise, the point faces", options: ["up", "right", "down", "left"], a: 3 }] }
        ],
        answer: "The point (top corner) faces **left**. A 3-quarter turn clockwise moves the top to the right, then down, then to the left.",
        explain: "The slide doesn't say which direction to turn, so clockwise is assumed. Anticlockwise would leave the point facing right."
      }
    ]
  ]
});
