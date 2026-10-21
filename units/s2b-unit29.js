/*
  Stage 2 Year B, Unit 29 — Review of learning (Term 2, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 2, ls: 4, unit: 29,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 29 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "4321 rounded to the nearest multiple of 1000 is:",
        options: ["4000", "4300", "5000", "4330"],
        answer: 0,
        explain: "4321 sits between 4000 and 5000. It is less than halfway (4500), so it rounds down to 4000. 4300 and 4330 are not multiples of 1000.",
        interact: [{ kind: "numberline", min: 4000, max: 5000, ticks: 0.01, labelStep: 500, tol: 30, items: [["4321", 4321]] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "This is a cube. How many faces, edges and vertices does it have?",
        img: "u29-cube.png",
        interact: [{ kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 12 }, { label: "Vertices", value: 8 }] }],
        answer: "**6 faces**, **12 edges** and **8 vertices**. Each face is a square: 4 edges on the top, 4 on the bottom and 4 going up the sides."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "A quarter turn from A to B forms a right angle. How many right angles would be needed to perform 2 quarter turns?",
        interact: [
          { kind: "angle", start: 90, hint: "Drag the arm one quarter turn, then another." },
          { kind: "input", fields: [{ label: "Right angles", value: 2 }] },
          { kind: "choose", rows: [{ t: "2 quarter turns make", options: ["a full turn", "a half turn (a straight angle)", "a right angle"], a: 1 }] }
        ],
        answer: "**2 right angles**. Each quarter turn is one right angle, so 2 quarter turns make a half turn: a straight line."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the fact family triangle to create 2 multiplication and 2 division number sentences. The triangle shows 18 at the top and 6 and 3 at the bottom.",
        img: "u29-fact18.png",
        interact: [
          { kind: "array", rows: 3, cols: 6, showTotal: true, hint: "3 rows of 6. Rotate it to see 6 rows of 3." },
          { kind: "sentence", fields: [
            { label: "Multiplication", re: "^\\s*(6\\s*x\\s*3|3\\s*x\\s*6)\\s*=\\s*18\\s*$", msg: "Use 6, 3 and 18 with ×.", placeholder: "e.g. 6 x 3 = 18", sample: "6 x 3 = 18" },
            { label: "Multiplication", re: "^\\s*(6\\s*x\\s*3|3\\s*x\\s*6)\\s*=\\s*18\\s*$", msg: "Use 6, 3 and 18 with ×.", sample: "3 x 6 = 18" },
            { label: "Division", re: "^\\s*18\\s*[÷/]\\s*[36]\\s*=\\s*[36]\\s*$", msg: "Start with 18 and divide by 6 or 3.", placeholder: "e.g. 18 ÷ 6 = 3", sample: "18 ÷ 6 = 3" },
            { label: "Division", re: "^\\s*18\\s*[÷/]\\s*[36]\\s*=\\s*[36]\\s*$", msg: "Start with 18 and divide by 6 or 3.", sample: "18 ÷ 3 = 6" }] }
        ],
        answer: "6 × 3 = 18 · 3 × 6 = 18 · 18 ÷ 6 = 3 · 18 ÷ 3 = 6"
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Use minutes to describe the duration of these events: recess, a soccer game.",
        interact: [{ kind: "input", fields: [{ label: "Recess", min: 10, max: 45, suffix: "minutes" }, { label: "Soccer game", min: 30, max: 120, suffix: "minutes" }] }],
        answer: "Answers vary. Recess is usually about **20 to 30 minutes**. A soccer game is about **40 to 90 minutes** (junior games are shorter).",
        explain: "Any sensible estimate is accepted: recess 10 to 45 minutes, a soccer game 30 to 120 minutes."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "Emily rolled five 0–9 dice. Her digits were 7, 3, 1, 4, 9. The smallest number she could make by arranging the digits is 14 379.",
        answer: false,
        explain: "Put the digits from smallest to largest: 1, 3, 4, 7, 9. The smallest number is 13 479, which is less than 14 379.",
        cubes: { ops: [], note: "Order the digits; there is nothing to calculate.", solve: [{ t: "Smallest digit first", s: "Write the digits in order from smallest: 1, 3, 4, 7, 9 → 13 479." }, { t: "Compare", s: "13 479 and 14 379 both start with 1 ten thousand. 3 thousands is less than 4 thousands, so 13 479 is smaller." }] },
        interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 14379, houses: false, hint: "Look at the thousands. Could a smaller digit go there?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "I have a three-dimensional object with 5 faces, 8 edges and 5 vertices. Use the information to draw a simple sketch of this object.",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [{ t: "The object is a", options: ["triangular prism", "square pyramid", "cube", "cone"], a: 1 }] }
        ],
        answer: "A **square pyramid**: a square base (4 edges) with 4 triangles meeting at the top (4 more edges). 5 faces, 8 edges, 5 vertices.",
        explain: "A triangular prism also has 5 faces, but it has 9 edges and 6 vertices."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Start at the bookstore facing the welcome sign. Move forward 1 square. Make a right-angled turn to face the post office. Move forward 4 squares. Make a quarter turn to the right and move forward 1 square. Which building is on the left?",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u29-town.png" },
          { kind: "choose", rows: [{ t: "On the left", options: ["Post office", "Bank", "Hardware store", "Fire station"], a: 1 }] }
        ],
        answer: "The **bank**. From the bookstore, 1 square west onto the road. Turn right to face north (the post office). 4 squares north, then a quarter turn right to face east and 1 square forward. Facing east, the bank is on your left.",
        explain: "The route is traced on the slide's town map: the bookstore is in the bottom row, middle column."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "4 × 3 = 12. Use it to solve 4 × 6. 5 × 4 = 20. Use it to solve 5 × 8.",
        img: "u29-arrays.png",
        interact: [
          { kind: "array", rows: 4, cols: 3, showTotal: true, hint: "This is 4 × 3. Double the columns to make 4 × 6." },
          { kind: "input", fields: [{ label: "4 × 6 =", value: 24 }, { label: "5 × 8 =", value: 40 }] }
        ],
        answer: "4 × 6 = **24** (double 12) · 5 × 8 = **40** (double 20). 6 is double 3 and 8 is double 4, so each answer doubles.",
        explain: "The slide shows the arrays with no instructions. The question is written from the arrays: double a known fact."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3D objects",
        prompt: "Sketch the top and side view of this hexagonal prism.",
        img: "u29-hexprism.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [
            { t: "Top view", options: ["a rectangle", "a hexagon", "a triangle"], a: 1 },
            { t: "Side view", options: ["a hexagon", "a circle", "rectangles side by side"], a: 2 }] }
        ],
        answer: "Top view: a **hexagon**. Side view: **rectangles side by side** (the rectangular faces you can see), making one large rectangle."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "Which is the closest thousand to 7492?",
        options: ["7490", "7000", "8000", "7500"],
        answer: 1,
        explain: "7492 is between 7000 and 8000. It is less than 7500 (halfway), so the closest thousand is 7000. 7490 and 7500 are not thousands.",
        interact: [{ kind: "numberline", min: 7000, max: 8000, ticks: 0.01, labelStep: 500, tol: 30, items: [["7492", 7492]] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Sketch a rectangular prism showing depth. Think about the 2D shapes that can be seen.",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [
            { t: "Its faces are", options: ["rectangles", "triangles", "circles"], a: 0 },
            { t: "Number of faces", options: ["4", "6", "8"], a: 1 }] }
        ],
        answer: "A rectangular prism has **6 rectangular faces**. A sketch showing depth usually shows 3 of them: the front, the top and one side, which look like parallelograms when drawn at an angle."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the grid references for the mountains, the mermaid and the treasure chest.",
        interact: [
          { kind: "gridref", src: "img/s2/u29-treasure.png", alt: "Treasure island map with a grid, columns A to F and rows 1 to 4", box: [6.4, 11.2, 93.1, 89.1], cols: ["A", "B", "C", "D", "E", "F"], rows: ["4", "3", "2", "1"] },
          { kind: "input", fields: [{ label: "Mountains", accept: ["C4", "4C"], placeholder: "e.g. A1" }, { label: "Mermaid", accept: ["F2", "2F"], placeholder: "e.g. A1" }, { label: "Treasure chest", accept: ["F4", "4F"], placeholder: "e.g. A1" }] }
        ],
        answer: "Mountains: **C4** · Mermaid: **F2** · Treasure chest: **F4**. Read the letter across first, then the number up."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use this fact 3 × 7 = 21 to solve: 6 × 7, 9 × 7, 12 × 7.",
        interact: [
          { kind: "array", rows: 3, cols: 7, showTotal: true, hint: "This is 3 × 7. Add rows of 7 to make 6, 9 and 12 rows." },
          { kind: "input", fields: [{ label: "6 × 7 =", value: 42 }, { label: "9 × 7 =", value: 63 }, { label: "12 × 7 =", value: 84 }] }
        ],
        answer: "6 × 7 = **42** (double 21) · 9 × 7 = **63** (3 lots of 21) · 12 × 7 = **84** (double 42)"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Record the capacity in L and mL: 3250 mL = ___ L ___ mL",
        interact: [{ kind: "input", fields: [{ label: "3250 mL =", value: 3, suffix: "L" }, { label: "", value: 250, suffix: "mL" }] }],
        answer: "3250 mL = **3 L 250 mL**. 1000 mL = 1 L, so 3000 mL = 3 L, with 250 mL left over."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "2780 is 780 more than 2000 and 220 less than 3000.",
        answer: true,
        explain: "2000 + 780 = 2780 and 2780 + 220 = 3000. Both parts are true.",
        interact: [{ kind: "jumps", start: 2000, end: 3000, steps: [700, 80, 200, 20], hint: "Jump from 2000 to 2780, then on to 3000." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Sketch a triangular prism.",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [{ t: "Its faces are", options: ["3 triangles and 2 rectangles", "2 triangles and 3 rectangles", "5 triangles"], a: 1 }] }
        ],
        answer: "A triangular prism has **2 triangular faces** (the ends) joined by **3 rectangular faces**: 5 faces, 9 edges and 6 vertices."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Follow these directions. Starting at D2 move north 1 square. Turn west and head to C3. Turn north. Head 2 squares up to C5. What animal are you viewing? What direction do you need to head to see the zebra?",
        interact: [
          { kind: "gridref", src: "img/s2/u29-zoo.png", alt: "Zoo map with a grid, columns A to E and rows 1 to 5, and a key of animals", box: [8.0, 8.25, 89.96, 66.15], cols: ["A", "B", "C", "D", "E"], rows: ["5", "4", "3", "2", "1"] },
          { kind: "input", fields: [{ label: "Animal", accept: ["giraffe", "a giraffe", "the giraffe"] }] },
          { kind: "choose", rows: [{ t: "To see the zebra, head", options: ["north", "south", "east", "west"], a: 1 }] }
        ],
        answer: "D2 → north to D3 → west to C3 → north 2 squares to C5: the **giraffe**. The zebra is in C4, 1 square below, so head **south**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Partially covered array. How many rows are there in this array? How many dots are in each row? What is the total number of dots in the array?",
        img: "u29-covered.png",
        interact: [
          { kind: "array", rows: 1, cols: 1, showTotal: true, hint: "Rebuild the covered array from the dots you can see along the top and the side." },
          { kind: "input", fields: [{ label: "Rows", value: 5 }, { label: "Dots in each row", value: 9 }, { label: "Total", value: 45, suffix: "dots" }] }
        ],
        answer: "**5 rows** of **9 dots**: 5 × 9 = **45 dots**.",
        explain: "Read from the slide: 9 dots show along the top and 5 down the left side."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Compare and order the lengths in metres and centimetres: garden bed 2 m 75 cm, desk 82 cm, door 130 cm. Communicate your thinking.",
        interact: [
          { kind: "numberline", min: 0, max: 300, ticks: 0.1, labelStep: 50, tol: 8, items: [["2 m 75 cm", 275], ["82 cm", 82], ["130 cm", 130]] },
          { kind: "order", items: ["2 m 75 cm", "82 cm", "130 cm"], answer: [1, 2, 0] }
        ],
        answer: "Shortest to longest: **82 cm**, **130 cm** (1 m 30 cm), **2 m 75 cm** (275 cm). Rename them all in centimetres to compare: 1 m = 100 cm."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "These are the first 3 terms in a sequence: 1423, 1323, 1223. What is the sixth term in this sequence?",
        options: ["1123", "923", "823", "1523"],
        answer: 1,
        explain: "The pattern subtracts 100 each time: 1423, 1323, 1223, 1123 (4th), 1023 (5th), 923 (6th).",
        interact: [{ kind: "jumps", start: 1423, steps: [100], back: true, hint: "Jump back 100 for each new term." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "How many cubes make up this object? Each cube has 6 faces. How many cube faces are hidden from view?",
        img: "u29-cubes.png",
        interact: [{ kind: "input", fields: [{ label: "Cubes", value: 5 }, { label: "Faces you can see", value: 10 }, { label: "Hidden faces", value: 20 }] }],
        answer: "**5 cubes**: 2 on the top layer and 3 on the bottom (one is hidden under the back top cube). 5 × 6 = 30 faces. You can see **10** (3 tops, 3 on the left front, 4 on the right front), so **20** are hidden.",
        explain: "The slide does not say what counts as a hidden face. Here it means any cube face you cannot see in this view, including faces pressed against another cube. One face, under the back top cube, is only partly visible and is counted as seen. The hidden bottom cube is assumed because the back top cube must rest on something."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "In this set of 16 cards, I am more likely to draw a red card than a black card. Do you agree with this statement? Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [720, 236], bg: "#DDE3EC", label: "16 playing cards", hint: "Choose a colour, then tap each card.",
            cats: [{ k: "r", t: "Red", c: "#E03131" }, { k: "b", t: "Black", c: "#343A40" }],
            shapes: [
              { p: "6,6 82,6 82,110 6,110", a: "b", fill: "#FFFFFF", deco: "<text x='44' y='72' font-size='44' text-anchor='middle' fill='#222' style='pointer-events:none'>♣</text>" },
              { p: "94,6 170,6 170,110 94,110", a: "b", fill: "#FFFFFF", deco: "<text x='132' y='72' font-size='44' text-anchor='middle' fill='#222' style='pointer-events:none'>♣</text>" },
              { p: "182,6 258,6 258,110 182,110", a: "r", fill: "#FFFFFF", deco: "<text x='220' y='72' font-size='44' text-anchor='middle' fill='#C92A2A' style='pointer-events:none'>♥</text>" },
              { p: "270,6 346,6 346,110 270,110", a: "b", fill: "#FFFFFF", deco: "<text x='308' y='72' font-size='44' text-anchor='middle' fill='#222' style='pointer-events:none'>♣</text>" },
              { p: "358,6 434,6 434,110 358,110", a: "r", fill: "#FFFFFF", deco: "<text x='396' y='72' font-size='44' text-anchor='middle' fill='#C92A2A' style='pointer-events:none'>♥</text>" },
              { p: "446,6 522,6 522,110 446,110", a: "b", fill: "#FFFFFF", deco: "<text x='484' y='72' font-size='44' text-anchor='middle' fill='#222' style='pointer-events:none'>♣</text>" },
              { p: "534,6 610,6 610,110 534,110", a: "r", fill: "#FFFFFF", deco: "<text x='572' y='72' font-size='44' text-anchor='middle' fill='#C92A2A' style='pointer-events:none'>♥</text>" },
              { p: "622,6 698,6 698,110 622,110", a: "r", fill: "#FFFFFF", deco: "<text x='660' y='72' font-size='44' text-anchor='middle' fill='#C92A2A' style='pointer-events:none'>♥</text>" },
              { p: "6,124 82,124 82,228 6,228", a: "b", fill: "#FFFFFF", deco: "<text x='44' y='190' font-size='44' text-anchor='middle' fill='#222' style='pointer-events:none'>♠</text>" },
              { p: "94,124 170,124 170,228 94,228", a: "b", fill: "#FFFFFF", deco: "<text x='132' y='190' font-size='44' text-anchor='middle' fill='#222' style='pointer-events:none'>♠</text>" },
              { p: "182,124 258,124 258,228 182,228", a: "r", fill: "#FFFFFF", deco: "<text x='220' y='190' font-size='44' text-anchor='middle' fill='#C92A2A' style='pointer-events:none'>♦</text>" },
              { p: "270,124 346,124 346,228 270,228", a: "r", fill: "#FFFFFF", deco: "<text x='308' y='190' font-size='44' text-anchor='middle' fill='#C92A2A' style='pointer-events:none'>♦</text>" },
              { p: "358,124 434,124 434,228 358,228", a: "b", fill: "#FFFFFF", deco: "<text x='396' y='190' font-size='44' text-anchor='middle' fill='#222' style='pointer-events:none'>♠</text>" },
              { p: "446,124 522,124 522,228 446,228", a: "b", fill: "#FFFFFF", deco: "<text x='484' y='190' font-size='44' text-anchor='middle' fill='#222' style='pointer-events:none'>♠</text>" },
              { p: "534,124 610,124 610,228 534,228", a: "r", fill: "#FFFFFF", deco: "<text x='572' y='190' font-size='44' text-anchor='middle' fill='#C92A2A' style='pointer-events:none'>♦</text>" },
              { p: "622,124 698,124 698,228 622,228", a: "r", fill: "#FFFFFF", deco: "<text x='660' y='190' font-size='44' text-anchor='middle' fill='#C92A2A' style='pointer-events:none'>♦</text>" }] },
          { kind: "input", fields: [{ label: "Red cards", value: 8 }, { label: "Black cards", value: 8 }] },
          { kind: "choose", rows: [{ t: "Do you agree?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No**. There are **8 red** cards (hearts and diamonds) and **8 black** cards (clubs and spades), so red and black are **equally likely**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use 5 × 9 = 45 to complete the following number sentences: 45 ÷ 9 = ?, 45 ÷ ? = 9. Show these numbers in a fact family triangle.",
        interact: [
          { kind: "array", rows: 5, cols: 9, showTotal: true, hint: "5 rows of 9 = 45. How many rows? How many in each row?" },
          { kind: "input", fields: [{ label: "45 ÷ 9 =", value: 5 }, { label: "45 ÷", value: 5, suffix: "= 9" }, { label: "Top of the triangle", value: 45 }] }
        ],
        answer: "45 ÷ 9 = **5** · 45 ÷ **5** = 9. The fact family triangle has **45** at the top and **5** and **9** in the bottom corners."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Record 3 familiar objects that each have a mass of about one kilogram (kg). Communicate your reasoning.",
        interact: [{ kind: "select", hint: "Tap every object that has a mass of about 1 kg.", items: [["A 1 litre bottle of water", true], ["A paperclip", false], ["A 1 kg bag of flour", true], ["A school bus", false], ["A pineapple", true], ["A feather", false]] }],
        answer: "Answers vary, for example a **1 litre bottle of water**, a **bag of flour or sugar** and a **pineapple**. Hold a 1 kg mass in one hand and the object in the other to compare."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "3 groups of 5 tens = 5 groups of 3 tens",
        answer: true,
        explain: "3 groups of 5 tens = 15 tens = 150. 5 groups of 3 tens = 15 tens = 150. Turning the array around does not change the total.",
        interact: [{ kind: "array", rows: 3, cols: 5, showTotal: true, hint: "Each dot is a ten. Rotate the array: is the total the same?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record the capacity of a 1-litre milk container using the abbreviation for litres.",
        interact: [{ kind: "input", fields: [{ label: "Capacity", accept: ["1 L", "1L", "1 l"], placeholder: "e.g. 2 L" }] }],
        answer: "**1 L**. The abbreviation for litres is a capital L."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Taran tossed a coin 20 times and recorded her findings. She had tossed 15 heads and 5 tails. What is the chance that the next toss will be tails? Communicate your reasoning.",
        cubes: { ops: [], note: "The earlier results do not change the chance; there is nothing to calculate.", solve: [{ t: "Look at the coin", s: "A coin has 2 sides, heads and tails, so tails is 1 out of 2 outcomes." }, { t: "Think about memory", s: "The coin does not remember the 15 heads. Each toss starts fresh, so heads and tails stay equally likely." }] },
        interact: [{ kind: "choose", rows: [
          { t: "Chance of tails", options: ["5 in 20", "1 in 2 (equally likely)", "15 in 20", "impossible"], a: 1 },
          { t: "Do the earlier tosses change it?", options: ["Yes", "No"], a: 1 }] }],
        answer: "**1 in 2**: heads and tails are **equally likely** on every toss. The 15 heads and 5 tails do not change the next toss."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Fact families: 8 × 6 = 48, 6 × 8 = 48, 48 ÷ 8 = 6, 48 ÷ 6 = 8. Create your own fact families for these numbers: 24, 55, 72.",
        interact: [{ kind: "sentence", fields: [
          { label: "24 (×)", re: "^\\s*\\d+\\s*x\\s*\\d+\\s*=\\s*24\\s*$", msg: "Write a multiplication that equals 24, like 4 x 6 = 24.", placeholder: "e.g. 4 x 6 = 24", sample: "4 x 6 = 24" },
          { label: "24 (÷)", re: "^\\s*24\\s*[÷/]\\s*\\d+\\s*=\\s*\\d+\\s*$", msg: "Start with 24, like 24 ÷ 6 = 4.", placeholder: "e.g. 24 ÷ 6 = 4", sample: "24 ÷ 6 = 4" },
          { label: "55 (×)", re: "^\\s*\\d+\\s*x\\s*\\d+\\s*=\\s*55\\s*$", msg: "Write a multiplication that equals 55.", sample: "5 x 11 = 55" },
          { label: "55 (÷)", re: "^\\s*55\\s*[÷/]\\s*\\d+\\s*=\\s*\\d+\\s*$", msg: "Start with 55.", sample: "55 ÷ 5 = 11" },
          { label: "72 (×)", re: "^\\s*\\d+\\s*x\\s*\\d+\\s*=\\s*72\\s*$", msg: "Write a multiplication that equals 72.", sample: "8 x 9 = 72" },
          { label: "72 (÷)", re: "^\\s*72\\s*[÷/]\\s*\\d+\\s*=\\s*\\d+\\s*$", msg: "Start with 72.", sample: "72 ÷ 9 = 8" }] }],
        answer: "Answers vary, for example: 4 × 6 = 24, 6 × 4 = 24, 24 ÷ 4 = 6, 24 ÷ 6 = 4 · 5 × 11 = 55, 11 × 5 = 55, 55 ÷ 5 = 11, 55 ÷ 11 = 5 · 8 × 9 = 72, 9 × 8 = 72, 72 ÷ 8 = 9, 72 ÷ 9 = 8"
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Record the chance terms (likely, equally likely, unlikely) to complete each sentence. a. It is ___ it will snow in Sydney during summer. b. It is ___ you will see your classmates at school. c. When you flip a coin, it is ___ that it will land on heads as on tails.",
        interact: [{ kind: "choose", rows: [
          { t: "a. Snow in Sydney in summer", options: ["likely", "equally likely", "unlikely"], a: 2 },
          { t: "b. See your classmates at school", options: ["likely", "equally likely", "unlikely"], a: 0 },
          { t: "c. A coin lands heads as tails", options: ["likely", "equally likely", "unlikely"], a: 1 }] }],
        answer: "a. **unlikely** · b. **likely** · c. **equally likely**",
        explain: "The slide's sentence c said a coin will land on \"heads or tails\". Landing on heads or tails is certain, so it is reworded to compare heads with tails, which are equally likely."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "What is the second smallest number formed by rearranging the digits within 54 321?",
        options: ["54 312", "12 345", "12 354", "54 123"],
        answer: 2,
        explain: "The smallest is 12 345 (digits from smallest to largest). Swapping the last two digits gives the next one up: 12 354. 54 312 is the second largest."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "The milk carton has a capacity of 1 L. Use this information to estimate the capacities of the other objects: a yoghurt tub, a cup, a drink can and a large water bottle.",
        img: "u29-containers.png",
        interact: [{ kind: "choose", rows: [
          { t: "Yoghurt tub", options: ["about 1 L", "about 150 mL", "about 10 L"], a: 1 },
          { t: "Cup", options: ["about 250 mL", "about 2 L", "about 20 L"], a: 0 },
          { t: "Drink can", options: ["about 3 L", "about 5 mL", "about 375 mL"], a: 2 },
          { t: "Water bottle", options: ["about 500 mL", "about 1 L", "about 15 L"], a: 2 }] }],
        answer: "Estimates vary: yoghurt tub about **150 mL**, cup about **250 mL**, drink can about **375 mL** (all less than 1 L). The large water bottle holds about **15 L**, many milk cartons."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "I have a bag of pink and blue marbles. List all the possible outcomes for randomly picking any 3 marbles.",
        img: "u29-marbles.png",
        interact: [{ kind: "combos", pick: 3, total: 4, items: [["pink", "#E0559A", 3], ["blue", "#2F6FE4", 3]] }],
        answer: "**4 outcomes**: 3 pink · 2 pink and 1 blue · 1 pink and 2 blue · 3 blue.",
        explain: "The order the marbles are picked in is not counted, so pink, pink, blue is the same outcome as blue, pink, pink. The bag has 6 of each colour, so every outcome is possible."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Sophie solved 60 × 4 using the following strategy: 6 × 10 × 4 = 6 × 4 × 10 = 24 × 10 = 240. Do you think this is an efficient strategy? Communicate your reasoning. Solve 70 × 5 using the same strategy.",
        cubes: { ops: ["×"], solve: [{ t: "Sophie's strategy", s: "70 × 5 = 7 × 10 × 5 = 7 × 5 × 10 = 35 × 10 = 350." }, { t: "Place value", s: "7 × 5 = 35 ones. 70 × 5 is 7 tens × 5 = 35 tens = 350." }] },
        interact: [
          { kind: "group", op: "×", items: [7, 10, 5] },
          { kind: "input", fields: [{ label: "7 × 5 =", value: 35 }, { label: "35 × 10 =", value: 350 }, { label: "70 × 5 =", value: 350 }] },
          { kind: "choose", rows: [{ t: "Is it efficient?", options: ["Yes: a known fact, then × 10", "No: counting by fours is quicker"], a: 0 }] }
        ],
        answer: "Yes. It uses a known fact (6 × 4) and then × 10. 70 × 5 = 7 × 10 × 5 = 7 × 5 × 10 = 35 × 10 = **350**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "What is similar and different about these two-dimensional shapes: a rectangle, a triangle and a square?",
        interact: [
          { kind: "corners", view: [600, 220], r: 22, q: 30, hint: "Tap a corner to test it with a right angle.", shapes: [
            { p: [[20, 20], [110, 20], [110, 180], [20, 180]], fill: "#B5174F", l: "rectangle", ly: 210 },
            { p: [[180, 180], [340, 180], [260, 30]], fill: "#467F2E", l: "triangle", ly: 210 },
            { p: [[420, 25], [575, 25], [575, 180], [420, 180]], fill: "#2F7FFF", l: "square", ly: 210 }] },
          { kind: "select", hint: "Tap every true statement.", items: [["They are all 2D shapes with straight sides", true], ["They all have 4 sides", false], ["The rectangle and the square have 4 right angles", true], ["The triangle has 3 sides and 3 corners", true], ["The square has 4 equal sides", true], ["They are all the same size", false]] }
        ],
        answer: "Similar: all are **polygons** with straight sides. Different: the triangle has **3 sides**; the rectangle and square have **4 sides and 4 right angles**, and only the square has 4 equal sides."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "Pick 4 consecutive digits (1–9). Form the largest and smallest possible numbers. The difference between those numbers is 3087.",
        answer: true,
        explain: "1, 2, 3, 4: 4321 − 1234 = 3087. 5, 6, 7, 8: 8765 − 5678 = 3087. It works for any 4 consecutive digits.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 4321, hint: "Build the largest number. Then the smallest. How far apart are they?" }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Sort these containers in order from smallest estimated capacity to largest estimated capacity.",
        img: "u29-containers.png",
        interact: [{ kind: "order", items: ["milk carton", "drink can", "water bottle", "yoghurt tub", "cup"], answer: [3, 4, 1, 0, 2] }],
        answer: "**Yoghurt tub** (about 150 mL), **cup** (about 250 mL), **drink can** (about 375 mL), **milk carton** (1 L), **water bottle** (about 15 L).",
        explain: "These are estimates: a standard drink can holds 375 mL and a cup about 250 mL. A large mug could hold more than a can."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "The bag has 6 pink and 6 blue marbles. Remove 1 blue marble from this bag. Has this action changed the chance of picking a pink marble next? Communicate your reasoning.",
        img: "u29-marbles.png",
        interact: [
          { kind: "input", fields: [{ label: "Pink left", value: 6 }, { label: "Blue left", value: 5 }] },
          { kind: "choose", rows: [
            { t: "Has the chance changed?", options: ["Yes", "No"], a: 0 },
            { t: "Now pink is", options: ["more likely than blue", "less likely than blue", "equally likely as blue"], a: 0 }] }
        ],
        answer: "**Yes**. Before, 6 pink and 6 blue were equally likely. With 6 pink and 5 blue, a pink marble is now **more likely**.",
        explain: "The marbles are counted from the slide: 6 pink and 6 blue."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Kieran solved 25 × 8 using 2 strategies. Strategy 1: 25 × 8 = 25 × 4 × 2 = 100 × 2 = 200. Strategy 2: 25 × 8 = 25 × 4 × 2 = 25 × 2 × 4 = 50 × 4 = 200. Which strategy do you prefer? Why?",
        cubes: { ops: ["×"], note: "Both strategies split 8 into 4 × 2.", solve: [{ t: "Strategy 1", s: "25 × 4 = 100 first, then 100 × 2 = 200." }, { t: "Strategy 2", s: "25 × 2 = 50 first, then 50 × 4 = 200." }] },
        interact: [
          { kind: "group", op: "×", items: [25, 4, 2] },
          { kind: "input", fields: [{ label: "25 × 4 =", value: 100 }, { label: "25 × 2 =", value: 50 }, { label: "25 × 8 =", value: 200 }] },
          { kind: "choose", rows: [{ t: "I prefer", options: ["Strategy 1", "Strategy 2"], a: [0, 1] }] }
        ],
        answer: "Both give **200**. Answers vary: many prefer **Strategy 1** because 25 × 4 = 100 and × 2 is then easy; Strategy 2 needs one more step."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "A line of symmetry is a line that divides a shape into 2 halves that match. How many lines of symmetry does each shape have?",
        interact: [
          { kind: "mirror", view: [600, 260], hint: "Predict first. Then tap a dashed line to fold the shape over it.", shapes: [
            { p: [[20, 40], [110, 40], [110, 200], [20, 200]], fill: "#B5174F", l: "rectangle", lines: [[65, 25, 65, 215], [5, 120, 125, 120], [20, 40, 110, 200]] },
            { p: [[180, 200], [340, 200], [260, 50]], fill: "#467F2E", l: "triangle", lines: [[260, 35, 260, 215], [180, 200, 312, 118]] },
            { p: [[410, 50], [560, 50], [560, 200], [410, 200]], fill: "#2F7FFF", l: "square", lines: [[485, 35, 485, 215], [395, 125, 575, 125], [410, 50, 560, 200], [560, 50, 410, 200]] }] },
          { kind: "input", fields: [{ label: "Rectangle", value: 2 }, { label: "Triangle", value: 1 }, { label: "Square", value: 4 }] }
        ],
        answer: "Rectangle: **2** (across and down) · Triangle: **1** (down the middle) · Square: **4** (across, down and both diagonals). A rectangle's diagonal is not a line of symmetry.",
        explain: "The slide's triangle has two equal sides and a longer base (isosceles), so it has 1 line of symmetry. An equilateral triangle would have 3."
      }
    ]
  ]
});
