/*
  Stage 3 Year A, Unit 3 — Review of learning (Term 1, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 1, ls: 3, unit: 3,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 3 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "3234 − 2999. Communicate your strategy.",
        options: ["234", "235", "2335", "236"],
        answer: 1,
        explain: "Count up from 2999: + 1 makes 3000, then + 234 makes 3234. 1 + 234 = 235.",
        interact: [{ kind: "jumps", start: 2999, end: 3234, steps: [1, 200, 34], hint: "Count up from 2999 to 3234. Jump to 3000 first." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Which measuring tool would be best to measure the length of your desk? You can choose more than one.",
        img: "u3-tools.png",
        interact: [{ kind: "select", hint: "Tap every tool that would suit a desk.", items: [["trundle wheel", false], ["30 cm ruler", true], ["tape measure", true], ["sewing tape measure", true], ["phone map app", false], ["metre ruler", true]] }],
        answer: "A **tape measure** or a **metre ruler** is best. A 30 cm ruler or a sewing tape measure also work. A trundle wheel and a map app are for long distances.",
        explain: "A 30 cm ruler works but must be moved along several times."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use partitioning to solve the following problem: 5780 + 9431 =",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 5780, hint: "This is 5780. Add 9 thousands, 4 hundreds, 3 tens and 1 one, then group any 10s." },
          { kind: "input", fields: [{ label: "5000 + 9000 =", value: 14000 }, { label: "700 + 400 =", value: 1100 }, { label: "80 + 30 =", value: 110 }, { label: "0 + 1 =", value: 1 }, { label: "Total", value: 15211 }] }
        ],
        answer: "**15 211**. 14 000 + 1100 + 110 + 1 = 15 211."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Place these numbers in ascending order: 6 302 095, 5 671 210, 6 219 305, 5 842 199",
        interact: [{ kind: "order", items: ["6 302 095", "5 671 210", "6 219 305", "5 842 199"], answer: [1, 3, 2, 0] }],
        answer: "5 671 210, 5 842 199, 6 219 305, 6 302 095. Compare the millions first, then the hundred thousands."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "After visiting the elephant in C2, I turn and face East. Which animal do I see? What is the grid reference for this animal?",
        interact: [
          { kind: "gridref", src: "img/s3/u3-zoo.png", alt: "Zoo map with a grid, columns A to E and rows 1 to 5", box: [6.06, 1.41, 96.34, 94.23], cols: ["A", "B", "C", "D", "E"], rows: ["5", "4", "3", "2", "1"] },
          { kind: "choose", rows: [{ t: "I see the", options: ["giraffe", "parrot", "hippo", "zebra"], a: 1 }] },
          { kind: "input", fields: [{ label: "Grid reference", accept: ["D2"] }] }
        ],
        answer: "The **parrot**, in **D2**. East is to the right on this map, so from C2 you look along row 2 to D2."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "6321 + 145 + 33 = 6499",
        answer: true,
        explain: "6321 + 145 = 6466, and 6466 + 33 = 6499.",
        interact: [{ kind: "jumps", start: 6321, steps: [100, 40, 5, 30, 3], hint: "Start at 6321. Jump + 100, + 40, + 5, then + 30 and + 3." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record 3 items that would be measured in metres. Record 3 items that would not be measured using metres.",
        interact: [{ kind: "select", hint: "Tap the items you would measure in metres.", items: [["length of a swimming pool", true], ["width of a fingernail", false], ["height of a tree", true], ["distance from Sydney to Perth", false], ["length of the classroom", true], ["length of an ant", false], ["height of a door", true], ["length of a pencil", false]] }],
        answer: "Answers vary. Metres: a swimming pool, a tree, the classroom, a door. Not metres: a fingernail or an ant (millimetres), a pencil (centimetres), Sydney to Perth (kilometres)."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "This bar model shows a subtraction problem. Record the subtraction problem and find the missing number. Communicate your reasoning.",
        interact: [
          { kind: "bar", whole: { v: 678, l: "678" }, parts: [{ v: 409, l: "409" }, { v: 269, l: "269", hide: true }] },
          { kind: "input", fields: [{ label: "678 − 409 =", value: 269 }] }
        ],
        answer: "**678 − 409 = 269**. The whole is 678 and one part is 409, so the missing part is 678 − 409. Check: 409 + 269 = 678."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Regroup this number in standard and non-standard forms: 50 678 912",
        interact: [
          { kind: "pv", cols: ["TM", "M", "HTh", "TTh", "Th", "H", "T", "O"], start: 50678912 },
          { kind: "expr", count: 2, target: 50678912, placeholder: "e.g. 50 000 000 + 678 912", sample: ["50 000 000 + 600 000 + 70 000 + 8000 + 900 + 10 + 2", "50 000 000 + 678 000 + 912"], mustUse: { re: "\\+", msg: "Join the parts with +." } }
        ],
        answer: "Standard: 50 000 000 + 600 000 + 70 000 + 8000 + 900 + 10 + 2. Non-standard (answers vary): 50 000 000 + 678 000 + 912, or 506 hundred thousands + 789 hundreds + 12 ones."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Convert 560 m to centimetres. Convert 432 cm to millimetres.",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 560, shift: true, hint: "1 m = 100 cm, so press × 10 twice. 1 cm = 10 mm, so × 10 once." },
          { kind: "input", fields: [{ label: "560 m =", value: 56000, suffix: "cm" }, { label: "432 cm =", value: 4320, suffix: "mm" }] }
        ],
        answer: "**56 000 cm** (560 × 100) and **4320 mm** (432 × 10)."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which strategy has been used to solve 338 + 57?",
        display: "338 + 2 = 340, plus 55 is 395",
        options: ["Levelling", "Bridging", "Constant difference", "Addition for subtraction"],
        answer: 1,
        explain: "The student jumped to the next ten (340) first, then added the rest. That is bridging to a friendly number.",
        interact: [{ kind: "jumps", start: 338, end: 395, steps: [2, 55], hint: "Jump + 2 to the friendly number 340, then + 55." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "How many metres are there in 7 kilometres?",
        interact: [
          { kind: "jumps", start: 0, end: 7000, steps: [1000], hint: "Each jump is 1 km = 1000 m." },
          { kind: "input", fields: [{ label: "7 km =", value: 7000, suffix: "m" }] }
        ],
        answer: "**7000 m**. 1 km = 1000 m, so 7 × 1000 = 7000."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Which strategy is this student explaining? \"To work out 4998 + 955 more easily, I can take 2 from 955 and add it to 4998. The equation becomes 5000 + 953 =\"",
        interact: [
          { kind: "scale", left: "4998 + 955", right: "5000 + ?", answer: 953 },
          { kind: "choose", rows: [{ t: "Strategy", options: ["Levelling", "Bridging", "Constant difference", "Addition for subtraction"], a: 0 }] },
          { kind: "input", fields: [{ label: "5000 + 953 =", value: 5953 }] }
        ],
        answer: "**Levelling**. Moving 2 from one addend to the other keeps the total the same: 4998 + 955 = 5000 + 953 = **5953**."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Use place value to partition these decimals: 4.39, 6.70, 1.295",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 1.295, hint: "This is 1.295. Change the counters to show 4.39 and 6.70 too." },
          { kind: "input", fields: [{ label: "4.39 =", value: 4 }, { label: "+", value: 0.3 }, { label: "+", value: 0.09 }, { label: "6.70 =", value: 6 }, { label: "+", value: 0.7 }, { label: "1.295 =", value: 1 }, { label: "+", value: 0.2 }, { label: "+", value: 0.09 }, { label: "+", value: 0.005 }] }
        ],
        answer: "4.39 = 4 + 0.3 + 0.09 · 6.70 = 6 + 0.7 (0 hundredths) · 1.295 = 1 + 0.2 + 0.09 + 0.005"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Combine 2 of the shapes below to create another shape.",
        interact: [
          { kind: "sketch", bgimg: "img/s3/u3-blocks.png" },
          { kind: "choose", rows: [
            { t: "Square + triangle, sharing a side, makes a", options: ["pentagon", "hexagon", "octagon"], a: 0 },
            { t: "Two trapeziums, long sides together, make a", options: ["rectangle", "hexagon", "triangle"], a: 1 }] }
        ],
        answer: "Answers vary. A square and a triangle make a **pentagon** (a house shape). Two trapeziums make a **hexagon**. Two triangles make a rhombus."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Constant difference has been used to solve 5009 − 3997.",
        display: "5009 − 3997 → 5013 − 4000 = 1013",
        answer: false,
        explain: "Constant difference adds the same amount to both numbers. Here 4 was added to 5009 but only 3 to 3997, so the difference changed. It should be 5012 − 4000 = 1012.",
        interact: [{ kind: "jumps", start: 3997, end: 5009, steps: [3, 1000, 9], hint: "Count up from 3997: + 3 to 4000, + 1000 to 5000, + 9 to 5009." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "The school office is 20 m long. Calculate how many school offices would fit along a 100 m length. Then along a 1 km length.",
        interact: [
          { kind: "jumps", start: 0, end: 100, steps: [20], hint: "Each jump is one office: 20 m." },
          { kind: "input", fields: [{ label: "Along 100 m", value: 5, suffix: "offices" }, { label: "Along 1 km", value: 50, suffix: "offices" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Skip count", s: "20, 40, 60, 80, 100: that's 5 offices. 1 km = 1000 m, which is 10 lots of 100 m, so 10 × 5 = 50 offices." }, { t: "Divide", s: "100 ÷ 20 = 5. 1000 ÷ 20 = 50." }] },
        answer: "**5 offices** along 100 m and **50 offices** along 1 km (1000 ÷ 20)."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the levelling strategy to solve 3997 + 988 =",
        interact: [
          { kind: "scale", left: "3997 + 988", right: "4000 + ?", answer: 985 },
          { kind: "input", fields: [{ label: "3997 + 988 =", value: 4985 }] }
        ],
        answer: "**4985**. Move 3 from 988 to 3997: 4000 + 985 = 4985."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Order these decimals from smallest to largest: 1.45, 1.90, 1.391",
        interact: [
          { kind: "numberline", min: 1.3, max: 2, ticks: 10, tol: 0.03, items: [["1.45", 1.45], ["1.90", 1.9], ["1.391", 1.391]] },
          { kind: "order", items: ["1.45", "1.90", "1.391"], answer: [2, 0, 1] }
        ],
        answer: "1.391, 1.45, 1.90. Compare the tenths: 3 tenths, 4 tenths, 9 tenths."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Explain a strategy that can be used to estimate an area in square centimetres.",
        interact: [
          { kind: "areagrid", size: 44, cells: ["0011100", "0111110", "1111111", "1111111", "0111110", "0011100"] },
          { kind: "input", fields: [{ label: "This shape covers about", min: 28, max: 32, suffix: "cm²" }] }
        ],
        answer: "Answers vary. Place a 1 cm grid over the shape and count the whole squares. Then put part squares together to make about one whole each, and add them on. This shape covers 30 squares, so about 30 cm².",
        explain: "Each square in the grid stands for 1 cm²."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "28 × __ = 84",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explain: "28, 56, 84: that's 3 lots of 28. 28 × 3 = 84.",
        interact: [{ kind: "jumps", start: 0, end: 84, steps: [28], hint: "Jump in 28s. How many jumps reach 84?" }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Convert 2.7 km into metres. Communicate your reasoning.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t"], start: 2.7, shift: true, hint: "1 km = 1000 m. Press × 10 three times." },
          { kind: "input", fields: [{ label: "2.7 km =", value: 2700, suffix: "m" }] }
        ],
        answer: "**2700 m**. 2.7 × 1000 = 2700: each digit moves 3 places to the left."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Is using a vertical algorithm an efficient strategy to solve 1232 − 698? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 1232, back: true, steps: [700, 2, 100], hint: "Try compensation: jump back 700, then forward 2." },
          { kind: "choose", rows: [{ t: "Is a vertical algorithm the most efficient?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "1232 − 698 =", value: 534 }] }
        ],
        answer: "**No**, a mental strategy is quicker. 698 is close to 700: 1232 − 700 = 532, then add back 2 to get **534**.",
        explain: "Accept reasoning either way. A vertical algorithm works, but needs several trades."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the definition of a product. Record the definition of a factor.",
        interact: [
          { kind: "array", rows: 4, cols: 6, showTotal: true, hint: "This array shows 4 × 6 = 24." },
          { kind: "choose", rows: [
            { t: "In 4 × 6 = 24, the product is", options: ["4", "6", "24"], a: 2 },
            { t: "The factors are", options: ["4 and 6", "6 and 24", "4 and 24"], a: 0 }] }
        ],
        answer: "A **product** is the answer when numbers are multiplied. A **factor** is a number that is multiplied by another number to make a product. In 4 × 6 = 24, 4 and 6 are factors and 24 is the product."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "The time is 6:42 pm. How much time until the next hour? Record your thinking.",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 1122, end: 1140, steps: [1, 5, 10, 15], hint: "Jump from 6:42 pm to 7:00 pm." },
          { kind: "input", fields: [{ label: "Time until 7:00 pm", value: 18, suffix: "minutes" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count up", s: "6:42 + 8 min = 6:50, + 10 min = 7:00. 8 + 10 = 18 minutes." }, { t: "Subtract from 60", s: "60 − 42 = 18 minutes." }] },
        answer: "**18 minutes** (until 7:00 pm)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "98 ÷ __ = 7. The missing number is 12.",
        answer: false,
        explain: "7 × 12 = 84, not 98. 7 × 14 = 98, so the missing number is 14.",
        interact: [{ kind: "jumps", start: 0, end: 98, steps: [7, 14, 70], hint: "Jump in 7s, or 70 then 28. How many 7s make 98?" }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Write a definition for the term 'perimeter'.",
        interact: [
          { kind: "sides", view: [320, 220], label: "Irregular shape", poly: [[30, 40], [200, 40], [200, 110], [290, 110], [290, 190], [30, 190]] },
          { kind: "choose", rows: [{ t: "Perimeter is", options: ["the space inside a shape", "the distance around the outside of a shape", "the number of corners"], a: 1 }] }
        ],
        answer: "**Perimeter** is the total distance around the outside of a shape. Tap every side: the perimeter is all of those lengths added together."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Is using a vertical algorithm an efficient strategy to solve 876 − 698? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 876, back: true, steps: [700, 2, 100], hint: "Try compensation: jump back 700, then forward 2." },
          { kind: "choose", rows: [{ t: "Is a vertical algorithm the most efficient?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "876 − 698 =", value: 178 }] }
        ],
        answer: "**No**, a mental strategy is quicker. 876 − 700 = 176, then add back 2 to get **178**.",
        explain: "Accept reasoning either way. A vertical algorithm works, but needs trades across every column."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Using place value partitioning solve: 4 × 412 =",
        interact: [
          { kind: "cells", cols: 4, w: 110, msg: "Multiply 4 by each part: 400, 10 and 2.", grid: [["#×", "#400", "#10", "#2"], ["#4", { v: 1600 }, { v: 40 }, { v: 8 }]] },
          { kind: "input", fields: [{ label: "4 × 412 =", value: 1648 }] }
        ],
        answer: "**1648**. 4 × 400 = 1600, 4 × 10 = 40, 4 × 2 = 8. 1600 + 40 + 8 = 1648."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Write the following as digital times.",
        interact: [
          { kind: "clock", time: "3:25" },
          { kind: "clock", time: "7:20" },
          { kind: "input", fields: [{ label: "Green clock", accept: ["3:25"], placeholder: "h:mm" }, { label: "Blue clock", accept: ["7:20"], placeholder: "h:mm" }] }
        ],
        answer: "**3:25** and **7:20**.",
        explain: "The clocks are redrawn from the slide: the first shows 25 past 3 and the second 20 past 7."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Sarah arranges 24 rows of chairs, with 8 chairs in each row. How many chairs does Sarah set up in total?",
        options: ["192", "96", "32", "240"],
        answer: 0,
        explain: "24 × 8 = 20 × 8 + 4 × 8 = 160 + 32 = 192.",
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Split 24", s: "20 × 8 = 160 and 4 × 8 = 32. 160 + 32 = 192." }, { t: "Double, double, double", s: "24 × 2 = 48, × 2 = 96, × 2 = 192." }] },
        interact: [{ kind: "cells", cols: 3, w: 110, msg: "Multiply 8 by each part of 24: 20 and 4.", grid: [["#×", "#20", "#4"], ["#8", { v: 160 }, { v: 32 }]] }]
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "What are the possible dimensions of a rectangle with a perimeter of 42 cm?",
        interact: [
          { kind: "sides", view: [320, 200], label: "Rectangle", poly: [[30, 40], [290, 40], [290, 160], [30, 160]] },
          { kind: "pair", labels: ["length", "width"], unit: "cm", rule: "perimeter", target: 42 }
        ],
        answer: "Answers vary. The length and width must add to 21 cm: for example 20 × 1, 15 × 6, 12 × 9 or 10.5 × 10.5 cm.",
        explain: "A rectangle has 2 lengths and 2 widths, so length + width = 42 ÷ 2 = 21 cm."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "A farmer picked 2188 tomatoes in the morning, 3122 in the afternoon and 1542 the next day. How many tomatoes were picked altogether?",
        interact: [
          { kind: "group", items: [2188, 3122, 1542] },
          { kind: "input", fields: [{ label: "Altogether", value: 6852, suffix: "tomatoes" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Partition", s: "2000 + 3000 + 1000 = 6000. 188 + 122 + 542 = 852. 6000 + 852 = 6852." }, { t: "Friendly pairs", s: "2188 + 3122 = 5310. 5310 + 1542 = 6852." }] },
        answer: "**6852 tomatoes**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use your knowledge of multiplying one-digit numbers by multiples of 100 to estimate 94 × 8. Communicate your reasoning.",
        interact: [
          { kind: "marker", min: 0, max: 200, divs: 20, majorEvery: 10, labels: [0, 50, 100, 150, 200], target: 94, tol: 3, label: "94", hint: "Slide the pin to 94. Which friendly number is it close to?", msg: "94 is between 90 and 100." },
          { kind: "input", fields: [{ label: "94 × 8 is about", min: 720, max: 800 }] }
        ],
        answer: "About **800**. 94 is close to 100, and 100 × 8 = 800. (The exact answer is 752, so 800 is a slight overestimate.)"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Draw the top, front and side views of this object.",
        img: "u3-prism.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [
            { t: "Looking at the triangular end", options: ["triangle", "rectangle", "circle"], a: 0 },
            { t: "Looking from the top", options: ["triangle", "rectangle", "circle"], a: 1 },
            { t: "Looking at the long side", options: ["triangle", "rectangle", "circle"], a: 1 }] }
        ],
        answer: "It is a **triangular prism**. The end view is a triangle. The top view is a rectangle with a line along the middle (the ridge). The long side view is a rectangle."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "A librarian wants to place 96 books equally onto 6 shelves. Each shelf will have 8 books.",
        answer: false,
        explain: "6 × 8 = 48, not 96. 96 ÷ 6 = 16, so each shelf will have 16 books.",
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Split 96", s: "60 ÷ 6 = 10 and 36 ÷ 6 = 6. 10 + 6 = 16 books." }, { t: "Check the claim", s: "6 shelves × 8 books = 48 books. That's only half of 96." }] },
        interact: [{ kind: "pack", mode: "share", n: 6, total: 96, thing: "books", label: "shelf", hint: "Deal the 96 books onto 6 shelves." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Convert 4:30 pm to 24-hour time. Convert 22:00 to 12-hour time.",
        interact: [
          { kind: "clock", time: "4:30", h24: true },
          { kind: "input", fields: [{ label: "4:30 pm =", accept: ["16:30"], placeholder: "hh:mm" }, { label: "22:00 =", accept: ["10:00 pm", "10 pm", "10:00pm", "10pm"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "**16:30** (4 + 12 = 16) and **10:00 pm** (22 − 12 = 10)."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "A museum recorded its visitor numbers. On Monday 9789 people visited, on Tuesday 4214 people visited and on Wednesday there were 5673 visitors. What is the difference between the number of people who attended on Monday and Tuesday compared to Wednesday?",
        interact: [
          { kind: "bar", whole: { v: 14003, l: "9789 + 4214", n: "Monday and Tuesday" }, parts: [{ v: 5673, l: "5673", n: "Wednesday" }, { v: 8330, l: "8330", n: "difference", hide: true }] },
          { kind: "input", fields: [{ label: "Monday + Tuesday", value: 14003 }, { label: "Difference", value: 8330, suffix: "people" }] }
        ],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "9789 + 4214 = 14 003. 14 003 − 5673 = 8330." }, { t: "Compensate", s: "9789 + 4214: 9800 + 4203 = 14 003. 14 003 − 5673: 14 003 − 5700 = 8303, + 27 = 8330." }] },
        answer: "**8330 people**. Monday and Tuesday: 9789 + 4214 = 14 003. 14 003 − 5673 = 8330."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the area model and the distributive property to show 32 × 4.",
        interact: [
          { kind: "cells", cols: 3, w: 110, msg: "Multiply 4 by each part of 32: 30 and 2.", grid: [["#×", "#30", "#2"], ["#4", { v: 120 }, { v: 8 }]] },
          { kind: "input", fields: [{ label: "32 × 4 =", value: 128 }] }
        ],
        answer: "**128**. 32 × 4 = (30 × 4) + (2 × 4) = 120 + 8 = 128."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "This rhombus has been made by combining 2 triangles. Draw a hexagon that is made by combining triangles.",
        img: "u3-rhombus.png",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [{ t: "A regular hexagon can be made from how many equilateral triangles?", options: ["2", "4", "6", "8"], a: 2 }] }
        ],
        answer: "Answers vary. A regular hexagon is made from **6** equilateral triangles around a centre point. Other hexagons can be made from 4 triangles."
      }
    ]
  ]
});
