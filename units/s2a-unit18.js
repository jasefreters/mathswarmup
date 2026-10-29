/*
  Stage 2 Year A, Unit 18 — Review of learning (Term 4, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 4, ls: 3, unit: 18,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 18 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "If 36 + 28 = 64, then what is 64 – 28?",
        options: ["28", "36", "38", "64"],
        answer: 1,
        explain: "36 and 28 are the parts and 64 is the whole. Take the 28 away from the whole and 36 is left: 64 – 28 = 36.",
        interact: [{ kind: "bar", whole: { v: 64 }, parts: [{ v: 36, hide: true }, { v: 28 }], hint: "64 is the whole. Take away the 28 part. Tap ? to check." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Identify the features of the graph: title, x-axis, y-axis, categories, data and intervals.",
        interact: [
          { kind: "bargraph", max: 12, step: 1, ylabel: "Number of Students", xlabel: "Mode of Transport", label: "How do students travel to school most days?", series: [{ l: "Students", c: "#4472C4" }], groups: [{ l: "Car", v: [12] }, { l: "Bike", v: [3], c: "#E03C31" }, { l: "Walk", v: [4], c: "#00B050" }, { l: "Public Transport", v: [8], c: "#E9C400" }, { l: "Scooter", v: [3], c: "#7030A0" }], hint: "Title: How do students travel to school most days? Tap a column to read its height." },
          { kind: "choose", rows: [
            { t: "Title", options: ["How do students travel to school most days?", "Number of Students", "Mode of Transport"], a: 0 },
            { t: "x-axis label", options: ["How do students travel to school most days?", "Number of Students", "Mode of Transport"], a: 2 },
            { t: "y-axis label", options: ["How do students travel to school most days?", "Number of Students", "Mode of Transport"], a: 1 },
            { t: "Categories", options: ["Car, bike, walk, public transport, scooter", "0, 1, 2 … 12"], a: 0 },
            { t: "Data", options: ["12, 3, 4, 8 and 3 students", "The title"], a: 0 },
            { t: "Intervals on the scale", options: ["Count by 1s", "Count by 2s", "Count by 5s"], a: 0 }] }
        ],
        answer: "**Title:** How do students travel to school most days? · **x-axis:** Mode of Transport · **y-axis:** Number of Students · **Categories:** car, bike, walk, public transport, scooter · **Data:** car 12, bike 3, walk 4, public transport 8, scooter 3 · **Intervals:** the scale counts by 1s from 0 to 12.",
        explain: "The column heights are read from the slide's graph."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Create a number pattern using multiples of 3. Describe the pattern using words, numbers and symbols.",
        interact: [
          { kind: "numchart", from: 1, to: 30, answer: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], hint: "Tap the multiples of 3, counting by threes from 3." },
          { kind: "choose", rows: [{ t: "The rule is", options: ["+ 3 each time", "+ 2 each time", "double each time"], a: 0 }] }
        ],
        answer: "For example **3, 6, 9, 12, 15, 18 …** In words: start at 3 and add 3 each time. In symbols: + 3. Every number is in the ×3 facts (3 × 1, 3 × 2, 3 × 3 …), and the numbers go odd, even, odd, even."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Name the fraction made. Communicate your reasoning.",
        img: "u18-fold3.png",
        interact: [
          { kind: "shade", parts: 3, hint: "This is the strip after Step 4. Tap one part to shade it." },
          { kind: "choose", rows: [
            { t: "The strip is folded into", options: ["halves", "thirds", "quarters"], a: 1 },
            { t: "Each part is", options: ["[1/2]", "[1/3]", "[1/4]"], a: 1 }] }
        ],
        answer: "**Thirds.** The strip is folded so the two visible parts look the same size, then the last part is folded behind. Opened, it has **3 equal parts**, so each part is [1/3]."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Name the angle used to describe a quarter-turn.",
        interact: [
          { kind: "angle", start: 20, target: "right", hint: "Start with the arms together. Turn the blue arm a quarter of the way around." },
          { kind: "choose", rows: [{ t: "A quarter-turn makes", options: ["a right angle", "a straight angle", "an acute angle"], a: 0 }] }
        ],
        answer: "A **right angle**. A quarter-turn is one quarter of a full turn, like the corner of a book or the hands of a clock at 3 o'clock."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Nat said that all these number sentences are correct: 53 + 25 = 78, 78 – 53 = 25, 78 + 25 = 53.",
        answer: false,
        explain: "53 + 25 = 78 and 78 – 53 = 25 are correct. 78 + 25 = 53 is not: adding to 78 makes a number bigger than 78 (78 + 25 = 103). It should be 78 – 25 = 53.",
        interact: [{ kind: "bar", whole: { v: 78 }, parts: [{ v: 53 }, { v: 25 }], hint: "78 is the whole. 53 and 25 are the parts. Which sentences match the bar?" }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Explain how using software helps to organise and display data.",
        interact: [
          { kind: "bargraph", max: 10, step: 1, ylabel: "Number of Students", xlabel: "House Groups", label: "3B's House Groups", series: [{ l: "Students", c: "#0070C0" }], groups: [{ l: "Wombats", v: [8] }, { l: "Koalas", v: [9], c: "#E03C31" }, { l: "Emus", v: [7], c: "#E9C400" }, { l: "Kangaroos", v: [4], c: "#00B050" }], hint: "3B's House Groups, made with software. Tap a column to read it." },
          { kind: "select", hint: "Tap every way software helps.", items: [
            ["It sorts and counts the data quickly", true],
            ["It draws the columns and scale accurately", true],
            ["It is quick to change to a different type of graph", true],
            ["It adds a neat title, labels and colours", true],
            ["It makes up the data for you", false]] }
        ],
        answer: "Answers vary: software **organises** data into a table, **counts** it quickly and accurately, draws graphs with an **even scale** and neat labels, and lets you **change the display** easily. You still need to collect the data yourself."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the fact families for the following: 2 × 4, 2 × 5, 2 × 6, 2 × 7.",
        interact: [
          { kind: "array", rows: 2, cols: 4, showTotal: true, hint: "This is 2 × 4. Rotate it to see 4 × 2. Change the columns for the other facts." },
          { kind: "cells", cols: 8, w: 76, msg: "Each fact family uses the same three numbers.", grid: [
            ["2 × 4 =", { v: 8 }, "4 × 2 =", { v: 8 }, "8 ÷ 2 =", { v: 4 }, "8 ÷ 4 =", { v: 2 }],
            ["2 × 5 =", { v: 10 }, "5 × 2 =", { v: 10 }, "10 ÷ 2 =", { v: 5 }, "10 ÷ 5 =", { v: 2 }],
            ["2 × 6 =", { v: 12 }, "6 × 2 =", { v: 12 }, "12 ÷ 2 =", { v: 6 }, "12 ÷ 6 =", { v: 2 }],
            ["2 × 7 =", { v: 14 }, "7 × 2 =", { v: 14 }, "14 ÷ 2 =", { v: 7 }, "14 ÷ 7 =", { v: 2 }]] }
        ],
        answer: "**2 × 4 = 8, 4 × 2 = 8, 8 ÷ 2 = 4, 8 ÷ 4 = 2** · 2 × 5 = 10, 5 × 2 = 10, 10 ÷ 2 = 5, 10 ÷ 5 = 2 · 2 × 6 = 12, 6 × 2 = 12, 12 ÷ 2 = 6, 12 ÷ 6 = 2 · 2 × 7 = 14, 7 × 2 = 14, 14 ÷ 2 = 7, 14 ÷ 7 = 2."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the fractions that are part of the same fraction family as [1/3].",
        img: "u18-wall.png",
        interact: [{ kind: "select", hint: "Tap every unit fraction in the thirds family.", items: [["[1/2]", false], ["[1/4]", false], ["[1/5]", false], ["[1/6]", true], ["[1/8]", false], ["[1/10]", false], ["[1/12]", true]] }],
        answer: "**Sixths and twelfths:** [1/6] and [1/12]. Halve each third to get sixths, and halve each sixth to get twelfths. On the fraction wall, 2 sixths line up exactly with 1 third.",
        explain: "The slide has no picture for this question, so the fraction wall from later reviews is shown. It stops at tenths, so twelfths are not on it."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "The pond was measured as 235 cm long. Record its length in metres and centimetres.",
        interact: [
          { kind: "marker", min: 0, max: 3, ticks: 1, minor: 10, target: 2.35, tol: 0.04, label: "pond", msg: "Each big mark is 1 metre and each small mark is 10 cm.", hint: "Each big mark is 1 metre (100 cm). Slide the pin to 235 cm." },
          { kind: "input", fields: [{ label: "Metres", value: 2, suffix: "m" }, { label: "Centimetres", value: 35, suffix: "cm" }] }
        ],
        cubes: { ops: ["÷"], also: ["−"], note: "1 metre = 100 centimetres.", solve: [{ t: "Take out the metres", s: "235 cm = 100 cm + 100 cm + 35 cm = 2 m and 35 cm." }, { t: "Use place value", s: "235 has 2 hundreds, and each hundred centimetres is 1 metre. 2 hundreds = 2 m, 35 cm left over." }] },
        answer: "**2 m 35 cm** (2.35 m). 100 cm = 1 m, so 200 cm = 2 m, with 35 cm left over."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "124 = __ + 96. Which bar model correctly represents the number sentence? Communicate your reasoning. A: 124 on top, 96 and 28 below · B: 96 on top, 124 and 28 below · C: 28 on top, 96 and 124 below · D: 124 on top, 28 and 96 below.",
        options: ["A", "B", "C", "D"],
        answer: 0,
        explain: "124 is the whole, so it goes on top. 96 is one part and the missing number (28) is the other: 96 + 28 = 124. B and C put a smaller number as the whole. D has the parts swapped, so it does not match __ + 96 in the same order.",
        interact: [{ kind: "bar", whole: { v: 124 }, parts: [{ v: 96 }, { v: 28, hide: true }], hint: "Model A. 124 is the whole and 96 is one part. Tap ? to find the other part." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Record labels for these parts of a graph using the data in the table: title, x-axis, y-axis and categories.",
        interact: [
          { kind: "tally", counts: true, hint: "How do students travel to school most days? These are the tallies from the table.", rows: [{ l: "Car", start: 12 }, { l: "Bike", start: 3 }, { l: "Walk", start: 4 }, { l: "Public Transport", start: 8 }, { l: "Scooter", start: 3 }] },
          { kind: "choose", rows: [
            { t: "Title", options: ["How do students travel to school most days?", "Number of students", "Mode of transport"], a: 0 },
            { t: "x-axis", options: ["How do students travel to school most days?", "Number of students", "Mode of transport"], a: 2 },
            { t: "y-axis", options: ["How do students travel to school most days?", "Number of students", "Mode of transport"], a: 1 },
            { t: "Categories", options: ["Car, bike, walk, public transport, scooter", "12, 3, 4, 8, 3"], a: 0 }] }
        ],
        answer: "**Title:** How do students travel to school most days? · **x-axis:** Mode of transport · **y-axis:** Number of students · **Categories:** car, bike, walk, public transport, scooter.",
        explain: "The axes follow the column graph in Review 1: categories along the x-axis, number of students up the y-axis."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the commutative property to create fact families for the following: 4 × 3, 4 × 6, 4 × 9.",
        interact: [
          { kind: "array", rows: 4, cols: 3, showTotal: true, hint: "This is 4 × 3. Rotate it to see 3 × 4. The total stays the same." },
          { kind: "cells", cols: 8, w: 76, msg: "Each fact family uses the same three numbers.", grid: [
            ["4 × 3 =", { v: 12 }, "3 × 4 =", { v: 12 }, "12 ÷ 4 =", { v: 3 }, "12 ÷ 3 =", { v: 4 }],
            ["4 × 6 =", { v: 24 }, "6 × 4 =", { v: 24 }, "24 ÷ 4 =", { v: 6 }, "24 ÷ 6 =", { v: 4 }],
            ["4 × 9 =", { v: 36 }, "9 × 4 =", { v: 36 }, "36 ÷ 4 =", { v: 9 }, "36 ÷ 9 =", { v: 4 }]] }
        ],
        answer: "**4 × 3 = 12, 3 × 4 = 12, 12 ÷ 4 = 3, 12 ÷ 3 = 4** · 4 × 6 = 24, 6 × 4 = 24, 24 ÷ 4 = 6, 24 ÷ 6 = 4 · 4 × 9 = 36, 9 × 4 = 36, 36 ÷ 4 = 9, 36 ÷ 9 = 4. The commutative property: the order of the factors can change and the product stays the same."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Name the fraction made. Communicate your reasoning.",
        img: "u18-fold5.png",
        interact: [
          { kind: "shade", parts: 5, hint: "This is the strip after Step 5. Tap one part to shade it." },
          { kind: "choose", rows: [
            { t: "The strip is folded into", options: ["quarters", "fifths", "sixths"], a: 1 },
            { t: "Each part is", options: ["[1/4]", "[1/5]", "[1/6]"], a: 1 }] }
        ],
        answer: "**Fifths.** One fifth is a bit less than a quarter. Fold it over, check the rest makes 4 more equal parts, then fold them behind. Opened, the strip has **5 equal parts**, so each part is [1/5]."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Name and describe these shapes. Explain how they are similar and how they are different.",
        interact: [
          { kind: "corners", view: [720, 200], r: 22, q: 30, label: "Shape A blue, shape B purple, shape C red", shapes: [
            { l: "A", fill: "#156DFF", p: [[10, 30], [262, 30], [200, 169], [72, 169]], ly: 105 },
            { l: "B", fill: "#8B55FF", p: [[300, 30], [439, 30], [484, 169], [345, 169]], ly: 105 },
            { l: "C", fill: "#D7163B", p: [[540, 30], [698, 30], [698, 169], [540, 169]], ly: 105 }], hint: "Tap a corner to test it with a right angle. Tap again to name the angle." },
          { kind: "choose", rows: [
            { t: "A (blue)", options: ["trapezium", "parallelogram", "rectangle", "pentagon"], a: 0 },
            { t: "B (purple)", options: ["trapezium", "parallelogram", "rectangle", "pentagon"], a: 1 },
            { t: "C (red)", options: ["trapezium", "parallelogram", "rectangle", "pentagon"], a: 2 }] },
          { kind: "select", hint: "Tap every true statement.", items: [
            ["All three have 4 straight sides and 4 corners", true],
            ["All three are quadrilaterals", true],
            ["Only C has 4 right angles", true],
            ["All three have 4 right angles", false],
            ["B and C have 2 pairs of parallel sides; A has only 1 pair", true],
            ["A has 2 pairs of parallel sides", false]] }
        ],
        answer: "A is a **trapezium** (1 pair of parallel sides), B is a **parallelogram** (2 pairs of parallel sides, no right angles) and C is a **rectangle** (2 pairs of parallel sides and 4 right angles). **Similar:** all are quadrilaterals with 4 straight sides and 4 corners. **Different:** only the rectangle has right angles, and the trapezium has only 1 pair of parallel sides.",
        explain: "The red shape on the slide is wider than it is tall (about 158 by 139), so it is named a rectangle, not a square."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "The missing number in this bar model is 28. The whole is 68 and one part is 32.",
        answer: false,
        explain: "68 – 32 = 36, so the missing part is 36, not 28. Check: 32 + 36 = 68.",
        interact: [{ kind: "bar", whole: { v: 68 }, parts: [{ v: 32 }, { v: 36, hide: true }], hint: "68 is the whole and 32 is one part. Tap ? to check the missing part." }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Draw the following line from impossible to certain. Write the words likely, unlikely and equally likely in the correct position on the line. The 0 end is impossible and the 1 end is certain.",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.13, items: [["Impossible", 0], ["Unlikely", 0.25], ["Equally likely", 0.5], ["Likely", 0.75], ["Certain", 1]] }],
        answer: "**Impossible** at the start, then **unlikely**, then **equally likely** in the middle, then **likely**, then **certain** at the end. Unlikely sits between impossible and the middle; likely sits between the middle and certain.",
        explain: "The 0 end of the line is impossible and the 1 end is certain. Any spot between the ends and the middle is accepted for unlikely and likely. The slide before this one asked students to place 'less likely, possible, least likely, most likely, more likely' on a scale; those words compare events and have no fixed place, so that slide is not included."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "This shape has been drawn on grid paper with 1 cm squares. What is the area of this shape? Explain how you know.",
        interact: [
          { kind: "areagrid", size: 52, cells: ["11111111", "11111111", "11111111", "11111111"] },
          { kind: "input", fields: [{ label: "Area", value: 32, suffix: "cm²" }] }
        ],
        answer: "**32 cm²** (32 square centimetres). The rectangle covers 4 rows of 8 squares: 4 × 8 = 32. Each square is 1 cm², so the area is 32 cm².",
        explain: "Counted from the slide's grid: the rectangle is 8 squares long and 4 squares high."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "List 3 equivalent fractions for [1/2].",
        img: "u18-wall.png",
        interact: [
          { kind: "shade", parts: 2, pre: [0], hint: "This is [1/2]." },
          { kind: "shade", parts: 8, hint: "Shade eighths until they match the half." },
          { kind: "input", fields: [
            { label: "", accept: ["2/4", "3/6", "4/8", "5/10", "6/12", "10/20", "50/100"], placeholder: "?/?" },
            { label: "", accept: ["3/6", "4/8", "5/10", "2/4", "6/12", "10/20", "50/100"], placeholder: "?/?" },
            { label: "", accept: ["4/8", "5/10", "2/4", "3/6", "6/12", "10/20", "50/100"], placeholder: "?/?" }] }
        ],
        answer: "For example **[2/4], [3/6], [4/8]** or [5/10]. On the fraction wall, each of these lines up exactly with [1/2]. The bottom number is double the top number."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Describe 3 activities that take around 20 minutes. For example, recess is about 20 minutes.",
        interact: [{ kind: "select", hint: "Tap every activity that takes about 20 minutes.", items: [
          ["Eating lunch at school", true],
          ["Baking a tray of cupcakes in the oven", true],
          ["Watching one episode of a cartoon", true],
          ["Brushing your teeth", false],
          ["Tying your shoelaces", false],
          ["A whole night's sleep", false],
          ["A whole school day", false]] }],
        answer: "Answers vary, for example: eating lunch, baking cupcakes, watching a cartoon episode, walking to school, a short art lesson. Brushing teeth takes about 2 minutes; a school day takes about 6 hours."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "Which answer is correct? The dice shows 8. 8 × 100 = ? Communicate your reasoning.",
        options: ["8", "80", "800", "8000"],
        answer: 2,
        explain: "Multiplying by 100 moves each digit two places to the left: 8 ones become 8 hundreds. 8 × 100 = 800.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 8, shift: true, hint: "Press × 10 twice to multiply by 100." }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Which 2 spinners show an equally likely chance of an event occurring? Communicate your reasoning.",
        img: "u18-spinners.png",
        interact: [{ kind: "select", hint: "Tap the 2 spinners where every colour has the same chance.", items: [["Spinner 1", false], ["Spinner 2", true], ["Spinner 3", true], ["Spinner 4", false]] }],
        answer: "**Spinner 2 and Spinner 3.** Spinner 2 has 4 equal parts, each a different colour, so each colour has a 1 in 4 chance. Spinner 3 has 2 equal halves, so green and blue are equally likely. Spinner 1 has 2 red quarters, so red is more likely. Spinner 4 has more blue than green, so its colours are not equally likely."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Estimate which leaf would have the largest area. Explain how you know. Communicate how you could work it out.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u18-leaves.png", grid: "square" },
          { kind: "choose", rows: [{ t: "Largest area", options: ["The left (wide) leaf", "The right (narrow) leaf"], a: 0 }] },
          { kind: "select", hint: "Tap every good way to work it out.", items: [
            ["Trace each leaf onto 1 cm grid paper and count the squares", true],
            ["Cover each leaf with square tiles and count them", true],
            ["Measure only how long each leaf is", false]] }
        ],
        answer: "The **left leaf**. It is about as long as the right leaf but much wider, so it covers more surface. To work it out, trace each leaf on grid paper (or cover it with square tiles) and count the squares, counting part squares as halves.",
        explain: "The grid over the leaves is for modelling only; the squares are not to scale."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "List an equivalent fraction for [2/3].",
        img: "u18-wall.png",
        interact: [
          { kind: "shade", parts: 3, pre: [0, 1], hint: "This is [2/3]." },
          { kind: "shade", parts: 6, hint: "Shade sixths until they match [2/3]." },
          { kind: "input", fields: [{ label: "[2/3] =", accept: ["4/6", "6/9", "8/12", "10/15", "20/30"], placeholder: "?/?" }] }
        ],
        answer: "**[4/6]** (also 6/9 or 8/12). On the fraction wall, 4 sixths line up exactly with 2 thirds."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "List 5 items that each have a mass of about the same as one kilogram.",
        interact: [{ kind: "select", hint: "Tap every item with a mass of about 1 kilogram.", items: [
          ["A 1 litre bottle of water", true],
          ["A bag of sugar", true],
          ["A bag of flour", true],
          ["A pineapple", true],
          ["A big dictionary", true],
          ["A paperclip", false],
          ["A pencil", false],
          ["A school desk", false],
          ["A car", false]] }],
        answer: "Answers vary, for example: a 1 litre bottle of water, a bag of sugar, a bag of flour, a pineapple, a big dictionary, a bag of potatoes. Check by holding a 1 kg mass in one hand and the item in the other."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "64 multiplied by 10 is 640, 100 is 6400 and 1000 is 64 000. Communicate your reasoning.",
        answer: true,
        explain: "× 10 moves each digit one place left (640), × 100 two places (6400) and × 1000 three places (64 000). All three are correct.",
        interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 64, shift: true, hint: "Press × 10 and watch the digits move. Count how many times for × 100 and × 1000." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "List 3 things you know from the data in the column graph about fun day options.",
        interact: [
          { kind: "bargraph", max: 10, step: 2, minor: 1, ylabel: "Number of students", xlabel: "Activity", label: "Fun day options", series: [{ l: "Students", c: "#FF3333" }], groups: [{ l: "Swimming pool", v: [8] }, { l: "Ten pin bowling", v: [4], c: "#F46A0A" }, { l: "Ice skating", v: [4], c: "#0047AB" }, { l: "Beach day", v: [10], c: "#00B050" }, { l: "Movies", v: [6], c: "#E9C400" }], hint: "Fun day options. Tap a column to read it." },
          { kind: "select", hint: "Tap every true statement.", items: [
            ["Beach day was the most popular", true],
            ["Ten pin bowling and ice skating had the same number of votes", true],
            ["8 students chose the swimming pool", true],
            ["32 students voted altogether", true],
            ["Movies was the least popular", false]] }
        ],
        answer: "Answers vary, for example: **beach day** was the most popular (10). **Ten pin bowling and ice skating** tied for least popular (4 each). 8 chose the swimming pool and 6 chose movies. 8 + 4 + 4 + 10 + 6 = **32** students voted.",
        explain: "The slide's graph has horizontal bars; it is redrawn here as columns with the same values."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Identify 3 differences between a pyramid and a cylinder.",
        interact: [{ kind: "select", hint: "Tap every true difference.", items: [
          ["A pyramid has only flat faces; a cylinder has a curved surface", true],
          ["A pyramid has an apex (a point); a cylinder does not", true],
          ["A pyramid has straight edges; a cylinder's edges are curved", true],
          ["A cylinder has 2 circle faces; a pyramid has 1 base and triangle faces", true],
          ["A cylinder can roll; a pyramid cannot", true],
          ["A pyramid has a circle base", false]] }],
        answer: "Answers vary, for example: a pyramid has only **flat faces**, a cylinder has a **curved surface**; a pyramid has an **apex**, a cylinder has none; a pyramid has **triangle faces** meeting at the apex, a cylinder has **2 circle faces**; a cylinder can **roll**.",
        explain: "Any pyramid works, for example a square pyramid (5 faces, 8 edges, 5 vertices)."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Identify equivalent fractions for [2/4] and [1/3].",
        img: "u18-wall.png",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1], hint: "This is [2/4]." },
          { kind: "shade", parts: 3, pre: [0], hint: "This is [1/3]." },
          { kind: "input", fields: [
            { label: "[2/4] =", accept: ["1/2", "3/6", "4/8", "5/10", "6/12"], placeholder: "?/?" },
            { label: "[1/3] =", accept: ["2/6", "3/9", "4/12", "5/15"], placeholder: "?/?" }] }
        ],
        answer: "[2/4] = **[1/2]** = [3/6] = [4/8] = [5/10]. [1/3] = **[2/6]**. Each pair lines up exactly on the fraction wall."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Which of these nets would make a cube? Explain your reasoning.",
        interact: [
          { kind: "classify", view: [1080, 345], label: "Net A triangle, net B cross of rectangles, net C cross of squares",
            cats: [{ t: "Makes a cube", c: "#22A06B", k: "y" }, { t: "Does not make a cube", c: "#D6408B", k: "n" }],
            shapes: [
              { fill: "#EEF1F6", a: "n", p: "18,278 170,18 323,278", deco: "<polygon points='18,278 170,18 323,278' fill='none' stroke='#333' stroke-width='2.5' pointer-events='none'/><g stroke='#333' stroke-width='2' stroke-dasharray='8 6' pointer-events='none'><line x1='94' y1='148' x2='246' y2='148'/><line x1='94' y1='148' x2='170' y2='278'/><line x1='246' y1='148' x2='170' y2='278'/></g><text x='170' y='340' text-anchor='middle' font-size='28' pointer-events='none'>A</text>" },
              { fill: "#EEF1F6", a: "n", p: "437,3 603,3 603,65 687,65 687,148 603,148 603,315 437,315 437,148 354,148 354,65 437,65", deco: "<polygon points='437,3 603,3 603,65 687,65 687,148 603,148 603,315 437,315 437,148 354,148 354,65 437,65' fill='none' stroke='#333' stroke-width='2.5' pointer-events='none'/><g stroke='#333' stroke-width='2' stroke-dasharray='8 6' pointer-events='none'><line x1='437' y1='65' x2='603' y2='65'/><line x1='437' y1='148' x2='603' y2='148'/><line x1='437' y1='232' x2='603' y2='232'/><line x1='437' y1='65' x2='437' y2='148'/><line x1='603' y1='65' x2='603' y2='148'/></g><text x='520' y='340' text-anchor='middle' font-size='28' pointer-events='none'>B</text>" },
              { fill: "#EEF1F6", a: "y", p: "804,19 890,19 890,105 1062,105 1062,191 890,191 890,278 804,278 804,191 718,191 718,105 804,105", deco: "<polygon points='804,19 890,19 890,105 1062,105 1062,191 890,191 890,278 804,278 804,191 718,191 718,105 804,105' fill='none' stroke='#333' stroke-width='2.5' pointer-events='none'/><g stroke='#333' stroke-width='2' stroke-dasharray='8 6' pointer-events='none'><line x1='804' y1='105' x2='890' y2='105'/><line x1='804' y1='191' x2='890' y2='191'/><line x1='804' y1='105' x2='804' y2='191'/><line x1='890' y1='105' x2='890' y2='191'/><line x1='976' y1='105' x2='976' y2='191'/></g><text x='847' y='340' text-anchor='middle' font-size='28' pointer-events='none'>C</text>" }], hint: "Choose a group, then tap each net. Dashed lines are folds." }
        ],
        answer: "Only **net C** makes a cube: it has **6 equal squares** that fold up with none overlapping. Net A has 4 triangles, so it folds into a triangular pyramid. Net B has 6 faces, but 4 are long rectangles, so it folds into a rectangular prism, not a cube.",
        explain: "Net B looks like a cube net, but measured on the slide its middle faces are twice as long as they are wide, so they are rectangles."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "The place value chart shows 6, 60, 600 and 6000. In 600, the 6 is circled. What is the value of the circled number? Communicate your reasoning.",
        options: ["6 ones", "6 tens", "6 hundreds", "6 thousands"],
        answer: 2,
        explain: "In 600 the 6 is in the hundreds column, so its value is 6 hundreds (600). Each time the 6 moves one place left, its value is 10 times as large.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 600, shift: true, hint: "This is 600. Which column is the 6 in?" }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Is the ninja course the most popular choice? What was the second most popular choice? What was a choice that wasn't the most popular but wasn't the least popular?",
        interact: [
          { kind: "bargraph", max: 14, step: 2, minor: 1, ylabel: "Number of students", xlabel: "Playground choice", label: "Votes for new playground equipment", series: [{ l: "Votes", c: "#1F4E99" }], groups: [{ l: "basketball", v: [8] }, { l: "skate", v: [11] }, { l: "slide", v: [1] }, { l: "climbing", v: [10] }, { l: "net swing", v: [1] }, { l: "tennis", v: [3] }, { l: "flying fox", v: [8] }, { l: "bridge", v: [0] }, { l: "spiderweb", v: [4] }, { l: "ninja", v: [14] }], hint: "Each column is the number of dots on the slide (skate = skate/bike track, slide = twirly slide, climbing = rock climbing, net swing = round net swing, tennis = table tennis, bridge = swinging bridge, spiderweb = spiderweb tower, ninja = ninja course). Tap a column to read it." },
          { kind: "choose", rows: [
            { t: "Is the ninja course the most popular?", options: ["Yes", "No"], a: 0 },
            { t: "Second most popular", options: ["rock climbing", "skate/bike track", "basketball court", "flying fox"], a: 1 }] },
          { kind: "select", hint: "Tap every choice that was neither the most nor the least popular.", items: [["basketball court", true], ["skate/bike track", true], ["twirly slide", true], ["rock climbing", true], ["round net swing", true], ["table tennis", true], ["flying fox", true], ["swinging bridge", false], ["spiderweb tower", true], ["ninja course", false]] }
        ],
        answer: "**Yes**, the ninja course is the most popular (14). The **skate/bike track** is second (11). Any choice except the ninja course and the swinging bridge (0, the least popular) works, for example rock climbing (10).",
        explain: "The slide's dots are counted for each choice: basketball court 8, skate/bike track 11, twirly slide 1, rock climbing 10, round net swing 1, table tennis 3, flying fox 8, swinging bridge 0, spiderweb tower 4, ninja course 14. Red and blue dots are counted together because the slide gives no key."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "This prism was made with cubic centimetre blocks. How many layers does this prism have? What is its volume? How do you know?",
        img: "u18-prism.png",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "This is the top layer: 3 rows of 4 blocks." },
          { kind: "input", fields: [{ label: "Layers", value: 2 }, { label: "Blocks in each layer", value: 12 }, { label: "Volume", value: 24, suffix: "cm³" }] }
        ],
        answer: "**2 layers** of 12 blocks. Each layer is 3 rows of 4 = 12 cubes, and 2 × 12 = 24, so the volume is **24 cm³** (24 cubic centimetres)."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "[1/4] is shown on the number line from 0 to 1. Record the fraction needed to make the whole. Communicate your reasoning.",
        interact: [
          { kind: "shade", parts: 4, pre: [0], hint: "[1/4] is shaded. Shade the parts needed to make the whole." },
          { kind: "input", fields: [{ label: "Fraction needed", accept: ["3/4", "three quarters", "3 quarters"], placeholder: "?/?" }] }
        ],
        answer: "**[3/4]**. The whole is 4 quarters. [1/4] is there, so 3 more quarters are needed: [1/4] + [3/4] = [4/4] = 1."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "If the pencil is 63 mm long, how long is it in centimetres and millimetres?",
        interact: [
          { kind: "marker", min: 0, max: 7, ticks: 1, minor: 10, target: 6.3, tol: 0.04, label: "pencil", msg: "Each big mark is 1 cm and each small mark is 1 mm.", hint: "Each big mark is 1 cm (10 mm). Slide the pin to 63 mm." },
          { kind: "input", fields: [{ label: "Centimetres", value: 6, suffix: "cm" }, { label: "Millimetres", value: 3, suffix: "mm" }] }
        ],
        cubes: { ops: ["÷"], also: ["−"], note: "1 centimetre = 10 millimetres.", solve: [{ t: "Group the tens", s: "63 mm = 6 groups of 10 mm and 3 mm left over = 6 cm 3 mm." }, { t: "Count on the ruler", s: "Count whole centimetres to 6 cm (60 mm), then 3 small marks more: 6 cm 3 mm." }] },
        answer: "**6 cm 3 mm**. 10 mm = 1 cm, so 60 mm = 6 cm, with 3 mm left over."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B: Whole numbers",
        prompt: "When 96 is made 1000 times as large, it makes 9600. Communicate your reasoning.",
        answer: false,
        explain: "1000 times as large moves each digit three places to the left: 96 × 1000 = 96 000. 9600 is only 100 times as large.",
        interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 96, shift: true, hint: "Press × 10 three times to make 96 a thousand times as large." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Playground Equipment Preference: How many students selected the giant slide? How many more students selected the spider web compared to sandpit? The least popular choice was the swings. True or false? Communicate your reasoning.",
        interact: [
          { kind: "bargraph", max: 45, step: 5, minor: 1, ylabel: "Number of students", xlabel: "Playground equipment", label: "Playground Equipment Preference", series: [{ l: "Students", c: "#4472C4" }], groups: [{ l: "giant slide", v: [42] }, { l: "swings", v: [9] }, { l: "sandpit", v: [6] }, { l: "see-saw", v: [12] }, { l: "spider web", v: [21] }, { l: "trampoline", v: [10] }], hint: "Tap a column to run a line across to the scale." },
          { kind: "input", fields: [{ label: "Giant slide", value: 42, suffix: "students" }, { label: "Spider web – sandpit", value: 15, suffix: "more" }] },
          { kind: "choose", rows: [{ t: "The least popular was the swings.", options: ["True", "False"], a: 1 }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Subtract", s: "Spider web 21 – sandpit 6 = 15 more students." }, { t: "Count on", s: "From 6 count on to 21: 6 → 10 is 4, 10 → 21 is 11. 4 + 11 = 15." }] },
        answer: "**42** students chose the giant slide. The spider web had **15 more** than the sandpit (21 – 6 = 15). **False**: the sandpit (6) was the least popular, not the swings (9).",
        explain: "Bar heights are read from the slide's graph: giant slide 42, swings 9, sandpit 6, see-saw 12, spider web 21, trampoline 10."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Which prism has the largest volume? Communicate your reasoning.",
        img: "u18-prisms.png",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "Prism a's top layer is 3 rows of 4. Change it to 2 rows of 3 for prism b." },
          { kind: "input", fields: [{ label: "Prism a", value: 24, suffix: "cubes" }, { label: "Prism b", value: 24, suffix: "cubes" }] },
          { kind: "choose", rows: [{ t: "Largest volume", options: ["a", "b", "They are the same"], a: 2 }] }
        ],
        answer: "**They are the same: 24 cubes each.** Prism a has 2 layers of 12 (3 × 4): 2 × 12 = 24. Prism b has 4 layers of 6 (2 × 3): 4 × 6 = 24. Prism b is taller, but its layers are smaller.",
        explain: "Counted from the slide's pictures, both prisms have a volume of 24 cubes, so neither is larger. 'They are the same' is the correct choice."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Identify [1/2] on both number lines. Communicate your reasoning.",
        interact: [
          { kind: "marker", min: 0, max: 1, divs: 1, labels: [0, 1], target: 0.5, tol: 0.05, label: "1/2", msg: "Half of the way from 0 to 1.", hint: "Number line from 0 to 1. Slide the pin to one half." },
          { kind: "marker", min: 0, max: 2, divs: 1, labels: [0, 2], target: 0.5, tol: 0.1, label: "1/2", msg: "[1/2] is halfway from 0 to 1, not halfway along this line.", hint: "Number line from 0 to 2. Slide the pin to one half." }
        ],
        answer: "On the **0 to 1** line, [1/2] is **halfway along**. On the **0 to 2** line, 1 is halfway, so [1/2] is halfway between 0 and 1, **a quarter of the way along** the line.",
        explain: "The pins accept a spot close to [1/2]. A common mistake is putting [1/2] in the middle of the 0 to 2 line, which is 1."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "What time is shown on this clock? How could it be read a different way?",
        interact: [
          { kind: "clock", time: "2:45" },
          { kind: "input", fields: [{ label: "Time", accept: ["2:45", "02:45"], placeholder: "h:mm" }] },
          { kind: "choose", rows: [{ t: "Another way to read it", options: ["quarter to 3", "quarter past 9", "quarter past 3"], a: 0 }] }
        ],
        answer: "**2:45**, or **quarter to 3** (also 45 minutes past 2, or 15 minutes to 3). The long minute hand points to 9 and the short hour hand is almost at 3.",
        explain: "On the slide the hour hand points exactly at 3. At 2:45 it should sit just before 3, so the clock here shows it a little before 3."
      }
    ]
  ]
});
