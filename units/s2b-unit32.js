/*
  Stage 2 Year B, Unit 32 — Review of learning (Term 3, learning sequence 2: Weeks 3–4).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 3, ls: 2, unit: 32,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 32 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "Which matches the array? The array has 4 rows of 6.",
        options: ["2 × 12 = 12 × 2", "4 × 6 = 6 × 4", "2 × 6 = 6 × 2", "4 × 12 = 12 × 4"],
        answer: 1,
        explain: "The array has 4 rows of 6 (24 dots). Turn it around and it is 6 rows of 4, so 4 × 6 = 6 × 4.",
        interact: [{ kind: "array", rows: 4, cols: 6, showTotal: true, hint: "This is the array. Press Rotate to see the turnaround fact." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Group the quadrilaterals based on the number of parallel sides: a trapezium, a square, a rectangle, two quadrilaterals and a parallelogram.",
        interact: [
          { kind: "classify", view: [560, 490], label: "Six quadrilaterals to sort", hint: "Choose a group, then tap each quadrilateral that belongs in it.",
            cats: [{ k: "0", t: "No parallel sides", c: "#D9480F" }, { k: "1", t: "1 pair of parallel sides", c: "#2F6FE4" }, { k: "2", t: "2 pairs of parallel sides", c: "#22A06B" }],
            shapes: [
              { p: "25,138 80,15 229,15 285,138", a: "1", fill: "#5B4396" },
              { p: "361,16 477,16 477,132 361,132", a: "2", fill: "#2B2D6B" },
              { p: "37,194 201,194 201,310 37,310", a: "2", fill: "#E0333C" },
              { p: "308,319 336,194 443,194 522,319", a: "1", fill: "#CC4A96" },
              { p: "56,369 160,369 299,407 110,470", a: "0", fill: "#E1BC3A" },
              { p: "302,460 351,370 528,370 479,460", a: "2", fill: "#36914B" }] }
        ],
        answer: "**No parallel sides:** the yellow quadrilateral. **1 pair:** the trapezium and the pink quadrilateral. **2 pairs:** the square, the rectangle and the parallelogram.",
        explain: "The slide labels the pink shape only as a quadrilateral, but its top and bottom sides are parallel, so it has 1 pair of parallel sides (it is a trapezium)."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the largest and smallest number you can make by rearranging these 6 digits: 3, 6, 1, 8, 4, 0.",
        interact: [
          { kind: "order", items: ["3", "6", "1", "8", "4", "0"], answer: [3, 1, 4, 0, 2, 5] },
          { kind: "order", items: ["3", "6", "1", "8", "4", "0"], answer: [2, 5, 0, 4, 1, 3] },
          { kind: "input", fields: [{ label: "Largest", value: 864310 }, { label: "Smallest", value: 103468 }] }
        ],
        answer: "Largest: **864 310** (biggest digit in the biggest place). Smallest: **103 468**. A number can't start with 0, so 1 goes first and 0 goes second.",
        explain: "The first row of digit cards builds the largest number and the second row builds the smallest."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Use the green right-angle tester to work out if the angle of this pizza slice is: a) smaller than a right angle, b) equal to a right angle or c) larger than a right angle.",
        img: "u32-pizza.png",
        interact: [
          { kind: "corners", view: [260, 280], label: "Pizza slice", hint: "Tap the pointed corner of the slice to lay a right angle on it. Tap again to name the angle.",
            shapes: [{ p: [[60, 250], [60, 40], [120, 30], [175, 58], [205, 100]], fill: "#F4C95D", marks: [{ v: 0 }] }] },
          { kind: "choose", rows: [{ t: "The pizza slice angle is", options: ["a) smaller than a right angle", "b) equal to a right angle", "c) larger than a right angle"], a: 0 }] }
        ],
        answer: "**a) smaller than a right angle.** The slice fits inside the right-angle tester with space left over, so it is an acute angle."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Which of these objects are best measured in grams: pencil, water bottle, bus, book, chips? Communicate your reasoning.",
        img: "u32-grams.png",
        interact: [{ kind: "select", hint: "Tap every object that is best measured in grams.", items: [["Pencil", true], ["Water bottle", true], ["Bus", false], ["Book", true], ["Chips", true]] }],
        answer: "**Pencil, water bottle, book and chips.** They are light (less than 1 kilogram), so grams suit them. A bus is very heavy, so it is measured in kilograms or tonnes.",
        explain: "A full water bottle is usually under 1 kg (a 600 mL bottle is about 650 g), so it is counted as grams. Accept kilograms if a student argues for a very large bottle."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "The related multiplication and division facts for the array (4 rows of 6) are: 6 × 4 = 24, 4 × 6 = 24, 24 ÷ 6 = 4, 24 ÷ 4 = 6.",
        answer: true,
        explain: "The array has 4 rows of 6 = 24. Rotating it gives 6 rows of 4. Sharing 24 into 4 rows gives 6 in each, and into 6 columns gives 4 in each.",
        interact: [{ kind: "array", rows: 4, cols: 6, showTotal: true, hint: "4 rows of 6. Rotate it to see 6 rows of 4." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record one similarity and one difference between these shapes: kite and trapezium.",
        img: "u32-kite.png",
        interact: [{ kind: "choose", rows: [
          { t: "Both have 4 sides and 4 corners", options: ["Similarity", "Difference"], a: 0 },
          { t: "Both are quadrilaterals", options: ["Similarity", "Difference"], a: 0 },
          { t: "The trapezium has 1 pair of parallel sides; the kite has none", options: ["Similarity", "Difference"], a: 1 },
          { t: "The kite has 2 pairs of equal sides next to each other", options: ["Similarity", "Difference"], a: 1 }] }],
        answer: "Answers vary. **Similarity:** both have 4 straight sides and 4 corners (both are quadrilaterals). **Difference:** the trapezium has a pair of parallel sides and the kite has none."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record this number in expanded notation: 24 502",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 0, target: 24502, need: "standard", hint: "Use + to build 24 502 in the place value chart." },
          { kind: "input", fields: [{ label: "24 502 =", value: 20000 }, { label: "+", value: 4000 }, { label: "+", value: 500 }, { label: "+", value: 2 }] }
        ],
        answer: "**20 000 + 4000 + 500 + 2**. There are 0 tens, so no tens part is needed."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Describe this angle as: less than a right angle, about the same as a right angle or more than a right angle. Communicate your reasoning.",
        img: "u32-obtuse.png",
        interact: [
          { kind: "angle", target: "greater", start: 60, hint: "Drag the arm to copy the angle in the picture." },
          { kind: "choose", rows: [{ t: "This angle is", options: ["less than a right angle", "about the same as a right angle", "more than a right angle"], a: 2 }] }
        ],
        answer: "**More than a right angle.** The arm opens wider than the corner of a square, so a right-angle tester fits inside it with space left over."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "If you remove an apple from the bag, does the chance of picking an orange next time become: A more likely, B less likely or C the same? Communicate your reasoning.",
        img: "u32-bag.png",
        interact: [{ kind: "choose", rows: [{ t: "Picking an orange becomes", options: ["A more likely", "B less likely", "C the same"], a: 0 }] }],
        answer: "**A more likely.** The number of oranges stays the same but there are fewer apples, so oranges make up a bigger part of the bag."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "Which number sentence matches the partitioned array?",
        img: "u32-split.png",
        options: ["4 × 6 is 4 × 4 and 4 × 1", "4 × 6 is 4 × 5 and 4 × 1", "4 × 6 is 4 × 6 and 4 × 0", "4 × 6 is 6 × 3 and 6 × 1"],
        answer: 1,
        explain: "The red line splits the 4 rows of 6 into 4 rows of 5 and 4 rows of 1. 4 × 5 = 20 and 4 × 1 = 4, and 20 + 4 = 24 = 4 × 6.",
        interact: [{ kind: "array", rows: 4, cols: 5, showTotal: true, hint: "This is the left part. Make 4 rows of 1 for the right part." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "2 shapes have been combined: a triangle on top of a square. Record the: a) name of the new shape, b) key features of the new shape.",
        interact: [
          { kind: "corners", view: [260, 290], label: "A triangle joined to a square", hint: "Tap each corner to test it with a right angle. Tap again to name it.",
            shapes: [{ p: [[40, 125], [130, 20], [220, 125], [220, 270], [40, 270]], fill: "#1A6EF5" }] },
          { kind: "choose", rows: [{ t: "a) The new shape is a", options: ["hexagon", "pentagon", "quadrilateral", "triangle"], a: 1 }] },
          { kind: "select", hint: "b) Tap every key feature of the new shape.", items: [["5 sides", true], ["5 corners (vertices)", true], ["2 right angles", true], ["1 pair of parallel sides", true], ["4 sides", false], ["No straight sides", false]] }
        ],
        answer: "a) A **pentagon**. b) It has **5 sides** and **5 corners**, **2 right angles** at the bottom, 1 pair of parallel sides (the two upright sides) and 1 line of symmetry.",
        explain: "The slide's shape is redrawn here. The joined sides of the triangle and square are no longer sides of the new shape."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the following as decimal numbers: a) 3 tenths and 6 hundredths, b) 1 tenth and 8 hundredths, c) 4 hundredths.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 0, hint: "Build each number in the place value house." },
          { kind: "input", fields: [{ label: "a)", value: 0.36 }, { label: "b)", value: 0.18 }, { label: "c)", value: 0.04 }] }
        ],
        answer: "a) **0.36** · b) **0.18** · c) **0.04**. In c) the 0 holds the tenths place."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "a) Describe the angle of this stapler as acute or obtuse. b) Describe this angle in comparison to a quarter-turn.",
        img: "u32-stapler.png",
        interact: [
          { kind: "angle", names: true, target: "acute", start: 120, hint: "Drag the arm to copy the angle between the red lines." },
          { kind: "choose", rows: [
            { t: "a) The angle is", options: ["acute", "obtuse"], a: 0 },
            { t: "b) Compared with a quarter-turn it is", options: ["less than a quarter-turn", "the same as a quarter-turn", "more than a quarter-turn"], a: 0 }] }
        ],
        answer: "a) **Acute.** b) It is **less than a quarter-turn** (smaller than a right angle). The stapler is only opened a little."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record the volume of each object by counting the cubic centimetre blocks.",
        img: "u32-cubes.png",
        interact: [{ kind: "input", fields: [{ label: "A", value: 14, suffix: "cm³" }, { label: "B", value: 17, suffix: "cm³" }] }],
        answer: "A: **14 cm³** (a bottom layer of 3 × 3 = 9, plus a tower of 2 on the left back column and 3 more on top: 9 + 3 + 2 = 14). B: **17 cm³** (a bottom layer of 14, plus 3 cubes on the second layer at the back right).",
        explain: "Some cubes are hidden. The count assumes every hidden space under a visible cube is filled, so each object is solid with no gaps."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "The number sentence 8 × 6 can be partitioned as 8 × 5 and 8 × 1. Communicate your reasoning.",
        answer: true,
        explain: "6 = 5 + 1, so 8 × 6 = 8 × 5 + 8 × 1 = 40 + 8 = 48.",
        interact: [{ kind: "array", rows: 8, cols: 6, showTotal: true, hint: "8 rows of 6. Picture a line after the fifth column." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Identify which is an example of tessellation. Communicate your reasoning using the terms reflecting, translating and rotating.",
        img: "u32-tess.png",
        interact: [
          { kind: "choose", rows: [{ t: "The tessellation is", options: ["A", "B"], a: 1 }] },
          { kind: "select", hint: "Tap every move that takes one triangle in B onto the other.", items: [["Rotating (a half turn)", true], ["Reflecting (flipping over the diagonal)", true], ["Translating (sliding) only", false]] }
        ],
        answer: "**B.** The two triangles fit together with no gaps or overlaps to make a square. One triangle can be rotated a half turn (or reflected over the diagonal) to fit the other. In A there are gaps between the triangles.",
        explain: "Sliding (translating) alone cannot move one triangle in B onto the other, because they face opposite ways."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the decimals between 0.2 and 0.3 to 2 decimal places.",
        interact: [{ kind: "cells", cols: 11, w: 58, grid: [["0.2", { v: 0.21 }, { v: 0.22 }, { v: 0.23 }, { v: 0.24 }, { v: 0.25 }, { v: 0.26 }, { v: 0.27 }, { v: 0.28 }, { v: 0.29 }, "0.3"]], msg: "Count on in hundredths: 0.21, 0.22, 0.23 …" }],
        answer: "**0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29**"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "At 3 o'clock, the hour hand and minute hand form a quarter turn and have made a right angle. a) At 6 o'clock, what type of angle would be made by the hands? b) How many quarter turns is this equivalent to?",
        interact: [
          { kind: "clock", time: "3:00" },
          { kind: "clock", time: "6:00" },
          { kind: "choose", rows: [
            { t: "a) At 6 o'clock the hands make a", options: ["right angle", "straight angle", "acute angle", "reflex angle"], a: 1 },
            { t: "b) Quarter turns", options: ["1", "2", "3", "4"], a: 1 }] }
        ],
        answer: "a) A **straight angle** (the hands make a straight line). b) **2 quarter turns** (a half turn)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Order the capacity of these containers in millilitres, from smallest to largest.",
        img: "u32-bottles.png",
        interact: [{ kind: "order", items: ["Drink bottle 750 mL", "Glass 240 mL", "Mug 310 mL"], answer: [1, 2, 0] }],
        answer: "**240 mL** (glass), **310 mL** (mug), **750 mL** (drink bottle).",
        explain: "The slide says millimetres, but capacity is measured in millilitres (mL). Smallest to largest is assumed."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "Thomas buys a packet of chips for $2.50 and a drink for $3.75. He pays with a $10 note. How much change does he get? Communicate your reasoning.",
        options: ["$3.75", "$4.25", "$5.75", "$6.25"],
        answer: 0,
        explain: "$2.50 + $3.75 = $6.25. Count on from $6.25 to $10: + $0.75 = $7, + $3 = $10. The change is $3.75.",
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "$2.50 + $3.75 = $6.25. $10 − $6.25 = $3.75." }, { t: "Count on to $10", s: "From $6.25, + $0.75 makes $7, then + $3 makes $10. $0.75 + $3 = $3.75." }] },
        interact: [{ kind: "jumps", start: 6.25, end: 10, money: true, steps: [0.75, 3, 0.25, 1], hint: "Start at the total, $6.25. Count on to $10." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Maddy believes there is only 1 line of symmetry in the tile design. Do you agree or disagree? Communicate your reasoning.",
        img: "u32-tile.png",
        interact: [
          { kind: "choose", rows: [
            { t: "Maddy is", options: ["right: I agree", "wrong: I disagree"], a: 0 },
            { t: "A horizontal fold would", options: ["match", "not match: the shapes would point the other way"], a: 1 }] }
        ],
        answer: "**Agree.** The vertical line down the middle is a line of symmetry: each half is a mirror image of the other. A horizontal fold does not work because the shapes would point the wrong way.",
        explain: "Checked against the slide's tile: the left and right halves are exact reflections, and the top and bottom are not."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Which decimal is larger, 0.7 or 0.37? Communicate your reasoning using a number line.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 10, labelStep: 0.1, tol: 0.03, items: [["0.7", 0.7], ["0.37", 0.37]] },
          { kind: "choose", rows: [{ t: "The larger decimal is", options: ["0.7", "0.37"], a: 0 }] }
        ],
        answer: "**0.7.** 0.7 is 7 tenths (70 hundredths) and 0.37 is only 3 tenths and 7 hundredths (37 hundredths). On the number line 0.7 is further from 0."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the analog times on clock A, clock B and clock C in digital form.",
        interact: [
          { kind: "clock", time: "12:15" },
          { kind: "clock", time: "1:00" },
          { kind: "clock", time: "1:33" },
          { kind: "input", fields: [{ label: "A", accept: ["12:15"], placeholder: "h:mm" }, { label: "B", accept: ["1:00", "01:00"], placeholder: "h:mm" }, { label: "C", accept: ["1:33", "01:33", "1:32", "1:34"], placeholder: "h:mm" }] }
        ],
        answer: "A: **12:15** · B: **1:00** · C: **1:33**",
        explain: "The times are read from the slide's clocks. On clock C the minute hand is 3 marks past the 6 (33 minutes), so 1:32 to 1:34 is accepted."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the area in square centimetres using numerals and words. The square is 4 cm by 4 cm.",
        interact: [
          { kind: "areagrid", cells: ["1111", "1111", "1111", "1111"], size: 56 },
          { kind: "input", fields: [{ label: "Numerals", value: 16, suffix: "cm²" }, { label: "Words", accept: ["sixteen square centimetres", "sixteen square centimeters", "sixteen square centimetre"], placeholder: "in words" }] }
        ],
        answer: "**16 cm²**, **sixteen square centimetres**. 4 rows of 4 squares = 16 squares, and each square is 1 cm²."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "A customer has a $20 note. How much change will the customer receive from $20 after buying these items: a notebook $3.25, a pen $1.50, a book $5.75 and a bookmark $0.80? You will use addition only to solve this problem. Communicate your reasoning.",
        answer: false,
        explain: "Addition finds the total: $3.25 + $1.50 + $5.75 + $0.80 = $11.30. Finding the change is finding the difference: $20 − $11.30 = $8.70. Subtraction (or counting on to find the difference) is needed as well.",
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "$3.25 + $5.75 = $9, + $1.50 = $10.50, + $0.80 = $11.30. $20 − $11.30 = $8.70." }, { t: "Count on to find the difference", s: "From $11.30, + $0.70 = $12, + $8 = $20. The change is $8.70." }] },
        interact: [{ kind: "shop", items: [["Notebook", 3.25], ["Pen", 1.5], ["Book", 5.75], ["Bookmark", 0.8]], budget: 20, hint: "Tap all 4 items, then show the total and the change from $20." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the area of the rectangle in square centimetres using the array.",
        interact: [
          { kind: "areagrid", cells: ["11111111111", "11111111111", "11111111111", "11111111111", "11111111111"], size: 44 },
          { kind: "input", fields: [{ label: "Area", value: 55, suffix: "cm²" }] }
        ],
        answer: "**55 cm²**. 5 rows of 11 squares: 5 × 11 = 55.",
        explain: "Each square in the array is taken to be 1 square centimetre."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the commutative property of multiplication (rearrange the order of numbers) to solve the number sentence: 6 × 3 × 5",
        interact: [
          { kind: "group", op: "×", items: [6, 3, 5] },
          { kind: "input", fields: [{ label: "6 × 3 × 5 =", value: 90 }] }
        ],
        answer: "**90**. Rearrange to 6 × 5 × 3: 6 × 5 = 30, and 30 × 3 = 90. (Or 3 × 5 = 15, and 15 × 6 = 90.)"
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record how many minutes in: a) a half-hour, b) one hour.",
        interact: [
          { kind: "clock", time: "12:00", drag: true },
          { kind: "input", fields: [{ label: "a) A half-hour", value: 30, suffix: "minutes" }, { label: "b) One hour", value: 60, suffix: "minutes" }] }
        ],
        answer: "a) **30 minutes** · b) **60 minutes**. The minute hand goes halfway round in 30 minutes and all the way round in 60 minutes."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the shapes that have parallel sides and/or right angles: rectangle, triangle, circle, trapezium.",
        interact: [
          { kind: "classify", view: [640, 200], label: "A rectangle, a triangle, a circle and a trapezium", hint: "Choose a group, then tap each shape.",
            cats: [{ k: "both", t: "Parallel sides and right angles", c: "#22A06B" }, { k: "ra", t: "Right angles only", c: "#2F6FE4" }, { k: "par", t: "Parallel sides only", c: "#8A3CC4" }, { k: "none", t: "Neither", c: "#D9480F" }],
            shapes: [
              { p: "20,20 120,20 120,180 20,180", a: "both", fill: "#0B2A6B" },
              { p: "160,20 300,180 160,180", a: "ra", fill: "#1A6EF5" },
              { circle: [400, 100, 75], a: "none", fill: "#8EE0FF" },
              { p: "525,25 595,25 625,180 495,180", a: "par", fill: "#7A0015" }] }
        ],
        answer: "**Rectangle:** parallel sides and right angles. **Triangle:** 1 right angle, no parallel sides. **Trapezium:** 1 pair of parallel sides, no right angles. **Circle:** neither.",
        explain: "The slide's triangle is a right-angled triangle and its trapezium has no right angles."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "Which shows effective rounding to estimate the cost of the items? Pizza $2.20, fries $3.30, milkshake $4.75.",
        img: "u32-menu.png",
        options: ["Pizza: $2, Fries: $3, Milkshake: $4", "Pizza: $3, Fries: $4, Milkshake: $5", "Pizza: $3, Fries: $3, Milkshake: $5", "Pizza: $2, Fries: $3, Milkshake: $5"],
        answer: 3,
        explain: "Round each price to the nearest dollar: $2.20 is closer to $2, $3.30 is closer to $3 and $4.75 is closer to $5. The estimate is about $10.",
        interact: [{ kind: "numberline", min: 2, max: 5, ticks: 10, labelStep: 1, tol: 0.1, items: [["$2.20", 2.2], ["$3.30", 3.3], ["$4.75", 4.75]] }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "a) Use the terms rows and columns to describe this array. It is 3 cm wide and 4 cm tall. b) Describe another array with the same area.",
        interact: [
          { kind: "areagrid", cells: ["111", "111", "111", "111"], size: 56 },
          { kind: "input", fields: [{ label: "a) Rows", value: 4 }, { label: "Columns", value: 3 }] },
          { kind: "pair", rule: "area", target: 12, unit: "cm", labels: ["b) Rows", "Columns"], exclude: [[4, 3]] }
        ],
        answer: "a) **4 rows** and **3 columns**: 4 × 3 = 12 cm². b) Answers vary: 2 rows of 6, 6 rows of 2, 1 row of 12 or 12 rows of 1 also make 12 cm².",
        explain: "On the slide the array covers part of the question text. The question is read as: describe the array, then describe another array with the same area."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "This array represents 6 × 8. Record another way that 6 × 8 could be distributed using flexible partitioning.",
        interact: [
          { kind: "array", rows: 6, cols: 8, showTotal: true, hint: "6 rows of 8. Imagine a line splitting the columns or the rows." },
          { kind: "sentence", fields: [{ label: "6 × 8 =", placeholder: "6 x 8 = 6 x 5 + 6 x 3", re: "\\+", msg: "Split 6 × 8 into parts joined with +, like 6 × 5 + 6 × 3.", sample: "6 x 8 = 6 x 4 + 6 x 4" }] }
        ],
        answer: "Answers vary, for example **6 × 5 + 6 × 3 = 30 + 18 = 48**, 6 × 4 + 6 × 4 = 24 + 24, or 3 × 8 + 3 × 8 = 24 + 24. Each makes **48**."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Match the following digital times to the durations: a 49 minutes and 49 seconds, b 0 minutes and 39 seconds, c 10 minutes and 0 seconds, d 9 minutes and 19 seconds.",
        img: "u32-watches.png",
        interact: [{ kind: "choose", rows: [
          { t: "Stopwatch 1 (09:19)", options: ["a", "b", "c", "d"], a: 3 },
          { t: "Stopwatch 2 (00:39)", options: ["a", "b", "c", "d"], a: 1 },
          { t: "Stopwatch 3 (49:49)", options: ["a", "b", "c", "d"], a: 0 },
          { t: "Stopwatch 4 (10:00)", options: ["a", "b", "c", "d"], a: 2 }] }],
        answer: "1 → **d** · 2 → **b** · 3 → **a** · 4 → **c**. On a stopwatch the number before the colon is minutes and the number after it is seconds."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "The person in the middle is facing the park. Describe the amount of turn to face a) the house, b) the beach.",
        img: "u32-map.png",
        interact: [
          { kind: "turns", button: "Quarter turn clockwise", hint: "Each tap is a quarter turn clockwise." },
          { kind: "choose", rows: [
            { t: "a) To face the house", options: ["a quarter turn", "a half turn", "a three-quarter turn", "a full turn"], a: 1 },
            { t: "b) To face the beach", options: ["a quarter turn clockwise", "a quarter turn anticlockwise", "a half turn"], a: 0 }] }
        ],
        answer: "a) A **half turn** (2 quarter turns, either way). b) A **quarter turn clockwise** (or a three-quarter turn anticlockwise). Facing the park (south), clockwise turns to the beach (west).",
        explain: "The slide doesn't say which way the person faces. The figure looks to be walking toward the park, so that is the starting direction."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "$50 is a reasonable estimate for the items below: a basketball $12, a cap $15 and shoes $19. Communicate your reasoning.",
        answer: true,
        explain: "Round to the nearest ten: $10 + $20 + $20 = $50. The exact total is $12 + $15 + $19 = $46, which is close to $50.",
        cubes: { ops: ["+"], solve: [{ t: "Round, then add", s: "$12 → $10, $15 → $20, $19 → $20. $10 + $20 + $20 = $50." }, { t: "Find the exact total", s: "$12 + $15 = $27, + $19 = $46. $46 is only $4 from $50." }] },
        interact: [{ kind: "shop", items: [["Basketball", 12], ["Cap", 15], ["Shoes", 19]], hint: "Tap all 3 items, then show the total." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Estimate the area of the leaf using the square centimetre grid overlay.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u32-leaf.png" },
          { kind: "input", fields: [{ label: "Area is about", min: 32, max: 46, suffix: "cm²" }] }
        ],
        answer: "About **39 cm²** (answers from about 32 to 46 cm² are reasonable). Count the whole squares, then join part squares to make about one whole each. The leaf fills about two-thirds of the 6 cm × 10 cm = 60 cm² rectangle.",
        explain: "The estimate was checked by measuring the leaf on the slide: it covers about 65% of the 60 cm² red rectangle."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use multiples of 10 to partition the array to solve the number sentence: 4 × 16",
        interact: [
          { kind: "array", rows: 4, cols: 16, max: 16, showTotal: true, hint: "4 rows of 16. Split it into 4 rows of 10 and 4 rows of 6." },
          { kind: "input", fields: [{ label: "4 × 10 =", value: 40 }, { label: "4 × 6 =", value: 24 }, { label: "4 × 16 =", value: 64 }] }
        ],
        answer: "4 × 10 = 40 and 4 × 6 = 24, so 4 × 16 = 40 + 24 = **64**."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the times in digital notation using am or pm: a) 20 past 10 in the morning, b) quarter to 5 in the afternoon, c) 10 minutes to 7 in the evening.",
        interact: [
          { kind: "clock", time: "10:20", drag: true },
          { kind: "input", fields: [{ label: "a)", accept: ["10:20 am", "10:20am"], placeholder: "h:mm am/pm" }, { label: "b)", accept: ["4:45 pm", "4:45pm"], placeholder: "h:mm am/pm" }, { label: "c)", accept: ["6:50 pm", "6:50pm"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "a) **10:20 am** · b) **4:45 pm** · c) **6:50 pm**. Quarter to 5 is 15 minutes before 5:00, and 10 minutes to 7 is 10 minutes before 7:00."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Identify and record which measurements on the pencil case refer to the length, width and height. The pencil case is marked 25 cm, 15 cm and 20 cm.",
        img: "u32-pencilcase.png",
        interact: [{ kind: "choose", rows: [
          { t: "Length", options: ["15 cm", "20 cm", "25 cm"], a: 2 },
          { t: "Width", options: ["15 cm", "20 cm", "25 cm"], a: 0 },
          { t: "Height", options: ["15 cm", "20 cm", "25 cm"], a: 1 }] }],
        answer: "Length **25 cm** (the long side along the front) · Width **15 cm** (from front to back) · Height **20 cm** (from the bottom to the top)."
      }
    ]
  ]
});
