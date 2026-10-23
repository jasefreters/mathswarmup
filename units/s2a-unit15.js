/*
  Stage 2 Year A, Unit 15 — Review of learning (Term 3, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 3, ls: 5, unit: 15,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 15 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "23 + 15 =",
        options: ["33 + 25", "40 − 2", "30 + 7", "23 − 15"],
        answer: 1,
        explain: "23 + 15 = 38, and 40 − 2 = 38. The others make 58, 37 and 8.",
        interact: [{ kind: "jumps", start: 23, steps: [1, 10], hint: "Start at 23. Jump on 15: one ten, then five ones." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record addition and subtraction number sentences for this bar model.",
        interact: [
          { kind: "bar", whole: { v: 35 }, parts: [{ v: 23 }, { v: 12 }] },
          { kind: "sentence", fields: [
            { label: "Addition", placeholder: "e.g. 23 + 12 = 35", re: "^(?=.*23)(?=.*12)(?=.*35).*\\+", msg: "Use 23, 12 and 35 with a + sign.", sample: "23 + 12 = 35" },
            { label: "Subtraction", placeholder: "e.g. 35 - 12 = 23", re: "^(?=.*23)(?=.*12)(?=.*35).*-", msg: "Use 35, 23 and 12 with a − sign.", sample: "35 - 12 = 23" }] }
        ],
        answer: "**23 + 12 = 35**, 12 + 23 = 35, **35 − 12 = 23**, 35 − 23 = 12. The two parts, 23 and 12, make the whole, 35."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record an object in the classroom that weighs: less than one kilogram, about the same as one kilogram, more than one kilogram.",
        interact: [{ kind: "choose", rows: [
          { t: "A pencil", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 0 },
          { t: "A full 1 litre bottle of water", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 1 },
          { t: "A student's chair", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 2 },
          { t: "An eraser", options: ["less than 1 kg", "about 1 kg", "more than 1 kg"], a: 0 }] }],
        answer: "Answers vary. Less than 1 kg: a pencil, an eraser, a glue stick. About 1 kg: a full 1 litre bottle of water, a large dictionary. More than 1 kg: a chair, a desk, a full school bag."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record whether the following numbers are odd or even: 35, 26, 51. Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "35", options: ["odd", "even"], a: 0 },
          { t: "26", options: ["odd", "even"], a: 1 },
          { t: "51", options: ["odd", "even"], a: 0 },
          { t: "How can you tell?", options: ["Look at the ones digit", "Look at the tens digit", "Count the digits"], a: 0 }] }],
        answer: "35 is **odd**, 26 is **even**, 51 is **odd**. Look at the ones digit: 0, 2, 4, 6 or 8 means even; 1, 3, 5, 7 or 9 means odd. 26 can be shared into 2 equal groups of 13."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "a) Record the sporting equipment found in D4. b) Record the grid reference for the position of the baseball bat and glove.",
        interact: [
          { kind: "gridref", src: "img/s2/u15-sport.png", alt: "Grid with columns A to D and rows 1 to 4 showing sporting equipment", box: [14.7, 2.4, 99.0, 87.1], cols: ["A", "B", "C", "D"], rows: ["4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "a) In D4", accept: ["soccer ball", "a soccer ball", "football", "soccerball", "ball"], placeholder: "equipment" },
            { label: "b) Bat and glove", accept: ["B2", "b2", "B 2"], placeholder: "e.g. A1" }] }
        ],
        answer: "a) A **soccer ball** is in D4 (column D, row 4). b) The baseball bat and glove are in **B2**. Read the letter along the bottom first, then the number up the side."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "45 − 23 = 30 − 8",
        answer: true,
        explain: "45 − 23 = 22 and 30 − 8 = 22. Both sides are 22, so the statement is true. (Take 15 from both 45 and 23 to get 30 − 8: the difference stays the same.)",
        interact: [{ kind: "jumps", start: 45, back: true, steps: [1, 10], hint: "Start at 45 and jump back 23. Then try 30 − 8." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Apply the associative property to balance these scales: 57 + 32 + 8 = 57 + ?",
        interact: [
          { kind: "group", items: [57, 32, 8], hint: "Group two numbers that are easy to add first." },
          { kind: "scale", left: "57 + 32 + 8", right: "57 + ?", answer: 40 },
          { kind: "input", fields: [{ label: "57 + 32 + 8 =", value: 97 }] }
        ],
        answer: "**57 + 32 + 8 = 57 + 40 = 97**. Group 32 + 8 first to make 40, a tidy ten. Changing the grouping does not change the total.",
        explain: "The slide leaves the right-hand pan blank. Here it is set as 57 + ?, so the missing number is the regrouped 32 + 8 = 40."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the following masses using the abbreviation for kilograms: a) five kilograms b) twelve kilograms c) seventy-five kilograms.",
        interact: [{ kind: "input", fields: [
          { label: "a) five kilograms", accept: ["5 kg", "5kg"], placeholder: "e.g. 2 kg" },
          { label: "b) twelve kilograms", accept: ["12 kg", "12kg"], placeholder: "e.g. 2 kg" },
          { label: "c) seventy-five kilograms", accept: ["75 kg", "75kg"], placeholder: "e.g. 2 kg" }] }],
        answer: "a) **5 kg** b) **12 kg** c) **75 kg**. The abbreviation for kilograms is kg, written after the number with a space."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw arrays to model that 9 and 16 are square numbers.",
        interact: [
          { kind: "array", rows: 1, cols: 9, target: [3, 3], showTotal: true, hint: "Build an array of 9 with the same number of rows and columns." },
          { kind: "array", rows: 1, cols: 16, max: 16, target: [4, 4], showTotal: true, hint: "Now build 16 the same way." },
          { kind: "choose", rows: [{ t: "A square number makes an array with", options: ["the same number of rows and columns", "exactly 2 rows", "an odd number of columns"], a: 0 }] }
        ],
        answer: "**3 rows of 3 = 9** and **4 rows of 4 = 16**. Each array has the same number of rows and columns, so it makes a square. That is why 9 and 16 are square numbers."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the missing words: An angle is the amount of t _ _ _ between two a _ _ _.",
        interact: [
          { kind: "angle", hint: "Drag the arm. Watch the turn between the two arms." },
          { kind: "input", fields: [
            { label: "t _ _ _", accept: ["turn"], placeholder: "word" },
            { label: "a _ _ _", accept: ["arms"], placeholder: "word" }] }
        ],
        answer: "An angle is the amount of **turn** between two **arms**."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "54 − 31 =",
        options: ["19 + 4", "31 + 54", "55 − 30", "44 − 41"],
        answer: 0,
        explain: "54 − 31 = 23, and 19 + 4 = 23. The others make 85, 25 and 3. (On the slide option A was 19 + 3 = 22, so no option was correct. It has been changed to 19 + 4.)",
        interact: [{ kind: "jumps", start: 54, back: true, steps: [1, 10], hint: "Start at 54. Jump back 3 tens, then 1 one." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Record the missing number to balance the scales: 58 + 13 = ? + 40",
        interact: [{ kind: "scale", left: "58 + 13", right: "? + 40", answer: 31 }],
        answer: "**31**. 58 + 13 = 71, and 31 + 40 = 71. Both sides are 71, so the scales balance."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "How many clay balls measuring a) one gram b) 100 grams make one kilogram?",
        interact: [
          { kind: "jumps", start: 0, end: 1000, steps: [100], hint: "1 kilogram is 1000 grams. Jump in hundreds to 1000 and count the jumps." },
          { kind: "input", fields: [{ label: "a) 1 gram balls", value: 1000 }, { label: "b) 100 gram balls", value: 10 }] }
        ],
        answer: "a) **1000** one-gram balls b) **10** hundred-gram balls. 1 kg = 1000 g, and 10 × 100 g = 1000 g."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the total of this partially covered array.",
        img: "u15-covered35.png",
        interact: [
          { kind: "array", rows: 1, cols: 5, showTotal: true, hint: "The top shows 5 columns and the side shows 7 rows. Build the whole array." },
          { kind: "input", fields: [{ label: "rows", value: 7 }, { label: "columns", value: 5 }, { label: "Total", value: 35 }] }
        ],
        answer: "**35**. There are 7 rows of 5: 7 × 5 = 35.",
        explain: "Counted from the slide: 5 counters along the top and 7 down the left side (the corner counter is in both)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Record the two-dimensional shapes that have right angles.",
        interact: [
          { kind: "corners", view: [760, 250], label: "Triangle A, tilted square B, rectangle C and rhombus D", shapes: [
            { l: "A", fill: "#8BE0FF", lx: 105, ly: 238, p: [[80, 60], [10, 150], [215, 165]] },
            { l: "B", fill: "#7FD6CC", lx: 330, ly: 238, p: [[330, 30], [410, 110], [330, 190], [250, 110]] },
            { l: "C", fill: "#D7DCFF", lx: 520, ly: 238, p: [[480, 30], [560, 30], [560, 190], [480, 190]] },
            { l: "D", fill: "#B48CD8", lx: 690, ly: 238, p: [[690, 25], [740, 110], [690, 195], [640, 110]] }] },
          { kind: "select", hint: "Tap every shape that has a right angle.", items: [["A", true], ["B", true], ["C", true], ["D", false]] }
        ],
        answer: "**A**, **B** and **C**. Triangle A has one right angle (at the top). B is a square turned on its corner: all 4 angles are right angles. Rectangle C has 4 right angles. Rhombus D has no right angles.",
        explain: "Measured from the slide's shapes: triangle A's top corner is 90°, even though the triangle is tilted. Turning a shape does not change its angles."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "24 + 13 + 6 = 24 + 6 + 13 = 30 + 13 = 43",
        answer: true,
        explain: "Numbers can be added in any order. 24 + 6 = 30 makes a tidy ten, then 30 + 13 = 43. Every step is equal, so it is true.",
        interact: [{ kind: "group", items: [24, 13, 6], hint: "Group the two numbers that make a tidy ten." }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use standard and non-standard partitioning to solve 439 + 59. Which strategy made the calculation easier? Communicate your reasoning.",
        interact: [
          { kind: "input", fields: [
            { label: "Standard: 430 + 50 =", value: 480 }, { label: "9 + 9 =", value: 18 }, { label: "480 + 18 =", value: 498 },
            { label: "Non-standard: 439 + 1 =", value: 440 }, { label: "50 + 8 =", value: 58 }, { label: "440 + 58 =", value: 498 }] },
          { kind: "choose", rows: [{ t: "Which was easier for you?", options: ["Standard partitioning", "Non-standard: make 440 first"], a: [0, 1] }] }
        ],
        answer: "**498**. Standard: 439 = 430 + 9 and 59 = 50 + 9, so 480 + 18 = 498. Non-standard: split 59 into 1 + 50 + 8. 439 + 1 = 440, then 440 + 58 = 498. Answers vary. Many find the non-standard way easier because making 440 (a tidy ten) first avoids a trade.",
        explain: "The partitions follow the slide's diagram: 439 and 59 each split into tens and ones, and 59 split into three parts, with 1 joined to 439."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the masses of the objects using the abbreviation for kilograms: a) bag of flour b) pumpkin.",
        img: "u15-masses.png",
        interact: [{ kind: "input", fields: [
          { label: "a) bag of flour", accept: ["5 kg", "5kg"], placeholder: "? kg" },
          { label: "b) pumpkin", accept: ["3 kg", "3kg"], placeholder: "? kg" }] }],
        answer: "a) The flour balances five 1-kilogram masses, so it is **5 kg**. b) The pumpkin balances three 1-kilogram masses, so it is **3 kg**."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "What is the relationship between the patterns: a) across the rows? b) down each column?",
        interact: [
          { kind: "cells", cols: 2, w: 120, grid: [["#Pattern A", "#Pattern B"], [3, 6], [6, 12], [9, 18], [12, 24], [15, 30], [{ v: 18 }, { v: 36 }]], msg: "Pattern A goes up by 3. Pattern B is double Pattern A." },
          { kind: "choose", rows: [
            { t: "a) Across each row", options: ["Pattern B is double Pattern A", "Pattern B is 3 more than A", "They are the same"], a: 0 },
            { t: "b) Down Pattern A", options: ["adds 3 each time", "adds 6 each time", "doubles each time"], a: 0 },
            { t: "b) Down Pattern B", options: ["adds 6 each time", "adds 3 each time", "adds 2 each time"], a: 0 }] }
        ],
        answer: "a) Across each row, **Pattern B is double Pattern A** (× 2). b) **Pattern A counts by 3s** (multiples of 3) and **Pattern B counts by 6s** (multiples of 6). The next row is 18 and 36."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "a) Record the length and width of the rectangle in centimetres. b) Record the area of the rectangle in square centimetres. Each grid square is 1 cm by 1 cm.",
        interact: [
          { kind: "areagrid", size: 48, cells: ["111", "111", "111", "111", "111", "111"] },
          { kind: "input", fields: [
            { label: "Length", value: 6, suffix: "cm" }, { label: "Width", value: 3, suffix: "cm" },
            { label: "Area", accept: ["18 cm²", "18cm²", "18 cm2", "18cm2", "18 square centimetres", "18"], placeholder: "? cm²" }] }
        ],
        answer: "a) Length **6 cm**, width **3 cm**. b) Area **18 cm²**: 6 rows of 3 squares, 6 × 3 = 18 square centimetres.",
        explain: "Read from the slide's grid: the rectangle covers 3 squares across and 6 squares down."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The number sentence 3 × 5 = can be used to solve:",
        options: ["Michelle baked 3 cakes for each of her 5 friends.", "Michelle baked 3 cakes and 5 cookies.", "Michelle baked 5 cakes and ate 3.", "Michelle baked 15 cakes and shared them equally between 3 friends."],
        answer: 0,
        explain: "3 cakes for each of 5 friends is 5 equal groups of 3: 3 × 5 = 15. B is 3 + 5, C is 5 − 3, D is 15 ÷ 3. (On the slide D was '5 cakes cut into thirds', which is also 5 × 3 = 15 pieces, so it was changed to a sharing problem.)",
        interact: [{ kind: "array", rows: 5, cols: 3, showTotal: true, hint: "5 friends, 3 cakes each: 5 rows of 3." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Choose an efficient strategy to find the difference between the teams' scores. Home has 97 points and Guest has 49 points. Communicate your reasoning for the choice of strategy.",
        img: "u15-scores.png",
        cubes: { ops: ["−"], also: "Difference means how many more: you can count on from 49 to 97.", solve: [{ t: "Count on", s: "49 + 1 = 50, 50 + 47 = 97. 1 + 47 = 48." }, { t: "Compensate", s: "97 − 50 = 47, then add 1 back because 50 is 1 more than 49: 47 + 1 = 48." }] },
        interact: [
          { kind: "jumps", start: 49, end: 97, steps: [1, 10], hint: "Count on from 49 to 97. Jump to 50 first." },
          { kind: "input", fields: [{ label: "Difference", value: 48, suffix: "points" }] }
        ],
        answer: "**48 points**. Answers vary. Count on: 49 + 1 = 50, then 50 + 47 = 97, so 1 + 47 = 48. Or compensate: 97 − 50 = 47, and add 1 back: 48. 49 is close to 50, which makes these strategies quick."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Order the lengths from shortest to longest: 15 m 5 cm, 1 m 95 cm, 5 m 51 cm.",
        interact: [
          { kind: "numberline", min: 0, max: 16, labelStep: 1, items: [["15 m 5 cm", 15.05], ["1 m 95 cm", 1.95], ["5 m 51 cm", 5.51]] },
          { kind: "order", items: ["15 m 5 cm", "1 m 95 cm", "5 m 51 cm"], answer: [1, 2, 0] }
        ],
        answer: "**1 m 95 cm, 5 m 51 cm, 15 m 5 cm**. Compare the metres first: 1 m, 5 m, 15 m. 1 m 95 cm is less than 2 m."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "a) If 10 × 7 = 70, what is 9 × 7? b) If 3 × 7 = 21, what is 6 × 7? c) If 4 × 6 = 24, what is 8 × 6?",
        interact: [
          { kind: "array", rows: 10, cols: 7, showTotal: true, hint: "10 rows of 7. Take away one row to make 9 rows of 7." },
          { kind: "input", fields: [{ label: "a) 9 × 7 =", value: 63 }, { label: "b) 6 × 7 =", value: 42 }, { label: "c) 8 × 6 =", value: 48 }] }
        ],
        answer: "a) **63**: 9 sevens is one seven less than 10 sevens, 70 − 7 = 63. b) **42**: 6 is double 3, so double 21. c) **48**: 8 is double 4, so double 24."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "List 3 differences between a cube and a square pyramid.",
        img: "u15-cubepyramid.png",
        interact: [{ kind: "select", hint: "Tap every true difference.", items: [
          ["A cube has 6 faces; a square pyramid has 5", true],
          ["A cube has 8 vertices; a square pyramid has 5", true],
          ["A cube has 12 edges; a square pyramid has 8", true],
          ["All of a cube's faces are squares; a square pyramid has 4 triangle faces", true],
          ["A square pyramid has an apex where its faces meet at a point", true],
          ["A square pyramid has no square face", false],
          ["A square pyramid has more faces than a cube", false]] }],
        answer: "Answers vary, for example: a cube has **6 faces**, a square pyramid has **5**; a cube has **8 vertices**, a pyramid has **5**; a cube has **12 edges**, a pyramid has **8**; all the cube's faces are squares, but the pyramid has 1 square face and 4 triangular faces that meet at an apex."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Mia has 5 stickers and Sam has 3 times as many. Sam has 8 stickers because 5 + 3 = 8.",
        answer: false,
        explain: "3 times as many means 3 groups of 5: 3 × 5 = 15. Sam has 15 stickers. 5 + 3 adds instead of multiplying.",
        interact: [{ kind: "array", rows: 1, cols: 5, showTotal: true, hint: "This is Mia's 5 stickers. Add rows to show 3 times as many." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record 2 different ways to make $1.65 with coins.",
        interact: [{ kind: "coins", target: 165, hint: "Tap coins to make $1.65, then save it. Make a different combination too." }],
        answer: "Answers vary, for example: **$1 + 50c + 10c + 5c** · **$1 + 20c + 20c + 20c + 5c** · **50c + 50c + 50c + 10c + 5c**."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record an appropriate scaled instrument to measure: a) the length of a highlighter b) the width of the whiteboard c) the length of a basketball court.",
        interact: [{ kind: "choose", rows: [
          { t: "a) Length of a highlighter", options: ["30 cm ruler", "Metre ruler or tape measure", "Trundle wheel"], a: 0 },
          { t: "b) Width of the whiteboard", options: ["30 cm ruler", "Metre ruler or tape measure", "Trundle wheel"], a: 1 },
          { t: "c) Length of a basketball court", options: ["30 cm ruler", "Metre ruler or tape measure", "Trundle wheel"], a: [2, 1] }] }],
        answer: "a) A **30 cm ruler** (a highlighter is shorter than 30 cm). b) A **metre ruler or tape measure** (a whiteboard is a few metres wide). c) A **trundle wheel** or a long tape measure (a basketball court is about 28 m long)."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "How can you split this array of 8 rows of 6 to help you answer 8 × 6? Record the number sentence to match the split array.",
        interact: [
          { kind: "array", rows: 8, cols: 6, showTotal: true, hint: "8 rows of 6. Take away rows to see how the array could be split into two smaller arrays." },
          { kind: "sentence", fields: [{ label: "Split number sentence", placeholder: "e.g. 4 x 6 + 4 x 6 = 48", re: "^\\s*\\d+\\s*x\\s*6\\s*\\+\\s*\\d+\\s*x\\s*6\\s*=\\s*48\\s*$", msg: "Split the rows: write two facts with 6 joined with +, then = 48.", sample: "4 x 6 + 4 x 6 = 48" }] }
        ],
        answer: "For example, split it in half: **4 × 6 + 4 × 6 = 24 + 24 = 48**. Or 5 rows and 3 rows: **5 × 6 + 3 × 6 = 30 + 18 = 48**. So **8 × 6 = 48**."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Can 2 containers with different shapes both have a 1 litre capacity? Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "Can they both hold 1 litre?", options: ["Yes", "No"], a: 0 },
          { t: "Why?", options: ["Capacity is how much a container holds, not its shape", "Tall containers always hold more", "Only bottles can hold 1 litre"], a: 0 }] }],
        answer: "**Yes**. Capacity is the amount a container can hold. A tall thin bottle and a short wide carton can both hold 1 litre. You could check by pouring 1 litre of water from one into the other."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The division sentence that demonstrates the inverse relationship of 7 × 8 = 56 is:",
        options: ["8 × 7 = 56", "56 ÷ 7 = 7", "8 ÷ 56 = 7", "56 ÷ 7 = 8"],
        answer: 3,
        explain: "7 groups of 8 make 56, so 56 shared into 7 groups is 8: 56 ÷ 7 = 8. A is a multiplication (the turnaround fact), B and C are not true.",
        interact: [{ kind: "array", rows: 7, cols: 8, showTotal: true, hint: "7 rows of 8 is 56. How many in each of the 7 rows?" }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Everything is half price: peanut butter $2.50, yoghurt $3.50 and a chocolate bar 50c. a) What is the total cost to buy these items? b) What would the change from $10 be?",
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "$2.50 + $3.50 = $6.00, + 50c = $6.50. $10.00 − $6.50 = $3.50." }, { t: "Count on to $10", s: "Total $6.50. Count on: $6.50 + 50c = $7, + $3 = $10. Change is 50c + $3 = $3.50." }] },
        interact: [
          { kind: "shop", pick: 3, budget: 10, items: [["Peanut butter", 2.5], ["Yoghurt", 3.5], ["Chocolate bar", 0.5]] },
          { kind: "jumps", money: true, start: 6.5, end: 10, steps: [0.5, 1], hint: "Count on from $6.50 to $10." },
          { kind: "input", fields: [
            { label: "a) Total cost", accept: ["$6.50", "6.50", "6.5", "$6.5"], placeholder: "$" },
            { label: "b) Change from $10", accept: ["$3.50", "3.50", "3.5", "$3.5"], placeholder: "$" }] }
        ],
        answer: "a) **$6.50**: $2.50 + $3.50 = $6.00, plus 50c is $6.50. b) **$3.50**: $10.00 − $6.50 = $3.50.",
        explain: "The prices used are the half prices shown on the slide (the crossed-out prices were $5.00, $7.00 and $1.00)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the length of the caterpillar in millimetres.",
        img: "u15-caterpillar.png",
        interact: [
          { kind: "marker", min: 0, max: 8, ticks: 1, minor: 10, target: 4.5, tol: 0.05, label: "end", msg: "The caterpillar starts at 0. Count the whole centimetres, then the small millimetre marks." },
          { kind: "input", fields: [{ label: "Length", value: 45, suffix: "mm" }] }
        ],
        answer: "**45 mm**. The caterpillar starts at 0 and ends at the long half-way mark between 4 cm and 5 cm: 4 cm = 40 mm, plus 5 mm = 45 mm.",
        explain: "On the slide the caterpillar ended a little past the 4 cm 5 mm mark, so it was nudged to end exactly at 45 mm."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the missing number to complete the number sentence: ? × 8 = 64. Communicate your strategy.",
        interact: [
          { kind: "jumps", start: 0, end: 64, steps: [8], hint: "Skip count by 8 from 0 to 64. Count the jumps." },
          { kind: "input", fields: [{ label: "? × 8 = 64. ? =", value: 8 }] }
        ],
        answer: "**8**. 8 × 8 = 64. Strategies vary: skip count by 8 eight times, or think 'double 4 × 8': 4 × 8 = 32, double 32 is 64, or use division: 64 ÷ 8 = 8."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Match these objects to their capacities: milk carton, juice box, teaspoon. Capacities: 250 mL, 5 mL, 1 L.",
        interact: [{ kind: "choose", rows: [
          { t: "1. Milk carton", options: ["250 mL", "5 mL", "1 L"], a: 2 },
          { t: "2. Juice box", options: ["250 mL", "5 mL", "1 L"], a: 0 },
          { t: "3. Teaspoon", options: ["250 mL", "5 mL", "1 L"], a: 1 }] }],
        answer: "Milk carton: **1 L** · juice box: **250 mL** · teaspoon: **5 mL**. 1 L = 1000 mL, so the milk carton holds the most and the teaspoon the least."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The total of this partially covered array is 24.",
        img: "u15-covered20.png",
        answer: false,
        explain: "The top row shows 5 counters, so there are 5 columns. The right side shows 4 counters, so there are 4 rows (the corner counter is in both). 4 rows of 5 is 20, not 24.",
        interact: [{ kind: "array", rows: 4, cols: 5, showTotal: true, hint: "Build the array the counters show: count the top row and the side column." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Calculate the total cost of popcorn, an egg sandwich and a juice tub from the canteen menu. How much change would you receive from $5?",
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "45c + $2.00 + $1.50 = $3.95. $5.00 − $3.95 = $1.05." }, { t: "Round and adjust", s: "Popcorn is 5c less than 50c: 50c + $2.00 + $1.50 = $4.00, so the total is $3.95. Count on from $3.95: + 5c = $4, + $1 = $5. Change is $1.05." }] },
        interact: [
          { kind: "shop", pick: 3, budget: 5, hint: "Tap popcorn, egg sandwich and juice tub to put them in the basket.", items: [["Banana muffin", 1], ["Energy choc balls", 0.5], ["Popcorn", 0.45], ["Custard cup", 0.9], ["Jelly cup", 0.7], ["Bread stick", 0.25], ["Fruit", 0.6], ["Egg sandwich", 2], ["Ham sandwich", 3], ["Salad sandwich", 4], ["Cheese sandwich", 2], ["Juice tub", 1.5], ["Frozen fruit", 1], ["Sweet stick", 1]] },
          { kind: "input", fields: [
            { label: "Total cost", accept: ["$3.95", "3.95"], placeholder: "$" },
            { label: "Change from $5", accept: ["$1.05", "1.05"], placeholder: "$" }] }
        ],
        answer: "Total: **$3.95** (45c + $2.00 + $1.50). Change from $5: **$1.05**.",
        explain: "Prices read from the slide's canteen menu: popcorn 45c, egg sandwich $2.00, juice tub $1.50."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the length of the clay snake in: a) millimetres b) centimetres and millimetres.",
        img: "u15-snake.png",
        interact: [
          { kind: "marker", min: 0, max: 10, ticks: 1, minor: 10, target: 7.3, tol: 0.05, label: "end", msg: "The snake starts at 0. Count the whole centimetres, then the small millimetre marks." },
          { kind: "input", fields: [
            { label: "a)", value: 73, suffix: "mm" },
            { label: "b)", accept: ["7 cm 3 mm", "7cm 3mm", "7 cm and 3 mm", "7cm3mm", "7 cm, 3 mm"], placeholder: "? cm ? mm" }] }
        ],
        answer: "a) **73 mm** b) **7 cm 3 mm**. The snake starts at 0 and ends 3 small marks past 7 cm. 7 cm = 70 mm, and 70 + 3 = 73 mm.",
        explain: "On the slide the snake ended between 7 cm 2 mm and 7 cm 3 mm, so it was redrawn to end exactly at 7 cm 3 mm."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record the number sentence and solve: A tree has 9 branches. Each branch has 6 leaves. How many leaves altogether?",
        cubes: { ops: ["×"], solve: [{ t: "Use a known fact", s: "9 groups of 6: 10 × 6 = 60, take away one 6: 60 − 6 = 54." }, { t: "Double and add", s: "9 × 3 = 27, and 6 is double 3, so double 27: 27 + 27 = 54." }] },
        interact: [
          { kind: "array", rows: 9, cols: 6, showTotal: true, hint: "9 branches, 6 leaves on each: 9 rows of 6." },
          { kind: "sentence", fields: [{ label: "Number sentence", placeholder: "e.g. 9 x 6 = 54", re: "(9\\s*x\\s*6|6\\s*x\\s*9)\\s*=\\s*54|54\\s*=\\s*(9\\s*x\\s*6|6\\s*x\\s*9)", msg: "Use 9 and 6 with ×.", sample: "9 x 6 = 54" }] },
          { kind: "input", fields: [{ label: "Leaves altogether", value: 54, suffix: "leaves" }] }
        ],
        answer: "**9 × 6 = 54**. There are **54 leaves** altogether."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Match the time to the nearest 5-minute mark on an analog clock: 5:48, 5:44, 11:18, 11:28.",
        interact: [
          { kind: "clock", time: "5:48", drag: true },
          { kind: "choose", rows: [
            { t: "1. 5:48 is about…", options: ["20 past 11", "10 to 6", "half-past 11", "quarter to 6"], a: 1 },
            { t: "2. 5:44 is about…", options: ["20 past 11", "10 to 6", "half-past 11", "quarter to 6"], a: 3 },
            { t: "3. 11:18 is about…", options: ["20 past 11", "10 to 6", "half-past 11", "quarter to 6"], a: 0 },
            { t: "4. 11:28 is about…", options: ["20 past 11", "10 to 6", "half-past 11", "quarter to 6"], a: 2 }] }
        ],
        answer: "5:48 ≈ 5:50, **10 to 6** · 5:44 ≈ 5:45, **quarter to 6** · 11:18 ≈ 11:20, **20 past 11** · 11:28 ≈ 11:30, **half-past 11**."
      }
    ]
  ]
});
