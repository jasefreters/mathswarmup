/*
  Stage 2 Year A, Unit 9 — Review of learning (Term 2, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 2, ls: 4, unit: 9,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 9 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which numbers are arranged in ascending order?",
        options: ["4092, 4911, 4367, 3489", "3489, 4092, 4367, 4911", "3489, 4367, 4092, 4911", "4911, 4367, 4092, 3489"],
        answer: 1,
        explain: "Ascending means smallest to largest. 3489 has the fewest thousands. Then compare the hundreds: 4092 (0 hundreds), 4367 (3 hundreds), 4911 (9 hundreds). D is in descending order.",
        interact: [{ kind: "order", items: ["4092", "4911", "4367", "3489"], answer: [3, 0, 2, 1] }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe a rhombus using the terms: side, vertex, parallel.",
        interact: [
          { kind: "classify", view: [300, 180], hint: "Tap the rhombus to count its sides as a class.", label: "A rhombus", total: 1,
            cats: [{ k: "r", t: "Rhombus", c: "#22A06B" }],
            shapes: [{ p: "40,150 110,29 250,29 180,150", a: "r", fill: "#B9A5F7" }] },
          { kind: "select", items: [["It has 4 sides that are all the same length", true], ["It has 4 vertices (corners)", true], ["It has 2 pairs of parallel sides", true], ["It has 3 vertices", false], ["All of its angles must be right angles", false]] }
        ],
        answer: "A rhombus has **4 equal sides** and **4 vertices**. Its opposite sides are **parallel**, so it has 2 pairs of parallel sides. (A square is a special rhombus with right angles.)"
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Describe the route taken using landmarks and directional language.",
        img: "u9-route.png",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u9-route.png" },
          { kind: "choose", rows: [
            { t: "Walking down the map past the canteen, the canteen is on your", options: ["left", "right"], a: 1 },
            { t: "At the same time, the office is on your", options: ["left", "right"], a: 0 },
            { t: "Walking up the map to the classroom, the playground is on your", options: ["left", "right"], a: 1 }] }
        ],
        answer: "Answers vary, for example: start at the **library** and walk down. Turn left, then right, and walk down between the **canteen** (on your right) and the **office** (on your left). Turn left and walk along under the office. Turn left and walk up between the office and the **playground** (on your right). Turn right, then left, to finish at the **classroom**.",
        explain: "Left and right are for the walker, not the map: walking down the map you face south, so east (the office) is on your left."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw a number line starting at 2. Record the next five numbers in the pattern, increasing by 4. Record the pattern on your number line.",
        interact: [
          { kind: "jumps", start: 2, steps: [4], min: 0, max: 24, hint: "Start at 2. Jump + 4 five times." },
          { kind: "input", fields: [{ label: "1st", value: 6 }, { label: "2nd", value: 10 }, { label: "3rd", value: 14 }, { label: "4th", value: 18 }, { label: "5th", value: 22 }] }
        ],
        answer: "2, **6, 10, 14, 18, 22**. Each jump is + 4."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Are all shapes with 4 sides rectangles? Communicate your thinking.",
        interact: [
          { kind: "classify", view: [770, 180], hint: "Choose a group, then tap each 4-sided shape.",
            cats: [{ k: "r", t: "Rectangle", c: "#22A06B" }, { k: "n", t: "Not a rectangle", c: "#C4372C" }],
            shapes: [
              { p: "15,40 175,40 175,130 15,130", a: "r", fill: "#D6173C", deco: "<text x='95' y='170' class='co-lab'>A</text>" },
              { p: "290,25 345,85 290,145 235,85", a: "n", fill: "#55B0FA", deco: "<text x='290' y='172' class='co-lab'>B</text>" },
              { p: "380,130 415,40 490,40 525,130", a: "n", fill: "#F2994A", deco: "<text x='452' y='170' class='co-lab'>C</text>" },
              { p: "600,25 640,65 600,150 560,65", a: "n", fill: "#22A06B", deco: "<text x='600' y='174' class='co-lab'>D</text>" },
              { p: "665,130 685,45 745,60 755,125", a: "n", fill: "#B9A5F7", deco: "<text x='710' y='170' class='co-lab'>E</text>" }] },
          { kind: "choose", rows: [{ t: "Are all 4-sided shapes rectangles?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No.** A rectangle has 4 sides **and** 4 right angles. A rhombus (B), trapezium (C), kite (D) and the shape E all have 4 sides but are not rectangles."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "The nearest thousand to 4763 is 5000. Communicate your reasoning.",
        answer: true,
        explain: "4763 is between 4000 and 5000. It is past the halfway mark, 4500, so it is closer to 5000.",
        interact: [{ kind: "marker", min: 4000, max: 5000, divs: 10, majorEvery: 5, labels: [4000, 4500, 5000], target: 4763, tol: 15, label: "4763", hint: "Slide the pin to 4763. Is it closer to 4000 or 5000?", msg: "Each small step is 100. 4763 is between 4700 and 4800." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Match the features of the prism labelled A, B and C with the terms: face, vertex, edge.",
        img: "u9-prism.png",
        interact: [{ kind: "choose", rows: [
          { t: "A", options: ["face", "vertex", "edge"], a: 2 },
          { t: "B", options: ["face", "vertex", "edge"], a: 1 },
          { t: "C", options: ["face", "vertex", "edge"], a: 0 }] }],
        answer: "A is an **edge**, B is a **vertex**, C is a **face**.",
        explain: "Arrow A points to the middle of a line where two faces meet (an edge). Arrow B points to the bottom back corner (a vertex), where three edges meet."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the locations of the hose, the trampoline and the soccer goal.",
        interact: [
          { kind: "gridref", src: "img/s2/u9-garden.png", alt: "Backyard map with a grid, columns A to D and rows 1 to 4", box: [13.9, 2.1, 98.1, 86.9], cols: ["A", "B", "C", "D"], rows: ["4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "Hose", accept: ["A1", "1A"] },
            { label: "Trampoline", accept: ["C4", "4C"] },
            { label: "Soccer goal", accept: ["A3", "3A"] }] }
        ],
        answer: "Hose **A1** · Trampoline **C4** · Soccer goal **A3**"
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the number of groups and the number in each group.",
        img: "u9-nests.png",
        interact: [
          { kind: "pack", mode: "pack", size: 5, total: 15, thing: "eggs", label: "nest", hint: "Put 5 eggs in each nest, like the picture." },
          { kind: "input", fields: [{ label: "Groups (nests)", value: 3 }, { label: "In each group", value: 5 }] }
        ],
        answer: "**3 groups** of **5** eggs. 3 × 5 = 15 eggs."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "How many minutes are in one hour? How many minutes are in half an hour? Communicate your reasoning.",
        interact: [
          { kind: "clock", time: "1:00", drag: true },
          { kind: "input", fields: [{ label: "One hour", value: 60, suffix: "minutes" }, { label: "Half an hour", value: 30, suffix: "minutes" }] }
        ],
        answer: "One hour = **60 minutes**: the minute hand goes all the way around. Half an hour = **30 minutes**: half way around, from the 12 to the 6."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "What is the largest number that can be formed by rearranging the digits in 4213?",
        options: ["4231", "4312", "4321", "4132"],
        answer: 2,
        explain: "Put the largest digit in the thousands place, the next largest in the hundreds, and so on: 4, 3, 2, 1 makes 4321.",
        interact: [{ kind: "order", items: ["4", "2", "1", "3"], answer: [0, 3, 1, 2] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Describe the features of the cylinder using the terms: flat surface, curved surface.",
        interact: [
          { kind: "classify", view: [460, 260], label: "A cylinder", hint: "Choose a surface type, then tap each surface of the cylinder.",
            cats: [{ k: "f", t: "Flat surface", c: "#22A06B" }, { k: "c", t: "Curved surface", c: "#F2994A" }],
            shapes: (() => {
              const arc = (cy, a0, a1) => { const pts = []; for (let i = 0; i <= 24; i++) { const t = a0 + (a1 - a0) * i / 24; pts.push((230 + 85 * Math.cos(t)).toFixed(1) + "," + (cy + 24 * Math.sin(t)).toFixed(1)); } return pts; };
              const side = arc(36, 0, Math.PI).concat(arc(220, Math.PI, 0)).join(" ");
              return [
                { p: side, a: "c", fill: "#C9DDF2" },
                { p: arc(36, 0, 2 * Math.PI).join(" "), a: "f", fill: "#E6EEF8" },
                { p: arc(220, 0, 2 * Math.PI).join(" "), a: "f", fill: "#AFC8E6",
                  deco: "<g fill='none' stroke='#17233F' stroke-width='2.5' pointer-events='none'><polyline points='" + arc(36, 0, 2 * Math.PI).join(" ") + "'/><polyline points='" + arc(220, 0, Math.PI).join(" ") + "'/><polyline stroke-dasharray='6 6' points='" + arc(220, Math.PI, 2 * Math.PI).join(" ") + "'/><line x1='145' y1='36' x2='145' y2='220'/><line x1='315' y1='36' x2='315' y2='220'/></g>" }];
            })() },
          { kind: "input", fields: [{ label: "Flat surfaces", value: 2 }, { label: "Curved surfaces", value: 1 }] }
        ],
        answer: "A cylinder has **2 flat surfaces** (circles, one at each end) and **1 curved surface** that wraps around. It can roll on its curved surface and stack on its flat surfaces.",
        explain: "The bottom flat surface is drawn as if the cylinder were see-through, so it can be tapped."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Using grid references and compass directions, describe the route from the apple tree to the bus stop.",
        interact: [
          { kind: "gridref", src: "img/s2/u9-town.png", alt: "Town map with a grid, columns A to I and rows 1 to 10, and a compass", box: [9.1, 3.4, 80.9, 91.7], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], rows: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "Apple tree", accept: ["E10", "10E"] },
            { label: "Bus stop", accept: ["A6", "6A"] },
            { label: "Squares west", value: 4 },
            { label: "Squares south", value: 4 }] }
        ],
        answer: "The apple tree is in **E10** and the bus stop is in **A6**. One route: go **west 4 squares** to A10, then **south 4 squares** to A6. Other routes (for example south first, or following the roads) are fine if they are described with grid references and compass directions.",
        explain: "The route is open. The boxes check the start, the finish and the total moves west and south."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Choose a multiple of 4 and record it as an array and as a multiplication number sentence.",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "Keep 4 in each row. Change the number of rows to choose your multiple." },
          { kind: "sentence", fields: [{ label: "Number sentence", placeholder: "e.g. 3 × 4 = 12", re: "^\\s*(\\d+\\s*x\\s*4|4\\s*x\\s*\\d+)\\s*=\\s*\\d+\\s*$", msg: "Multiply a number by 4.", sample: "3 x 4 = 12" }] }
        ],
        answer: "Answers vary, for example 3 rows of 4: **3 × 4 = 12**. Other multiples of 4: 4, 8, 16, 20, 24 …"
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "If it's a quarter to five, how many minutes are there until 5 o'clock?",
        interact: [
          { kind: "clock", time: "4:45", drag: true },
          { kind: "jumps", time: true, start: 285, end: 300, steps: [5, 15], hint: "Start at 4:45. Jump to 5:00." },
          { kind: "input", fields: [{ label: "Minutes until 5 o'clock", value: 15 }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on", s: "4:45 + 15 minutes = 5:00. So there are 15 minutes." }, { t: "Use the clock", s: "A quarter to five means the minute hand is on the 9. From the 9 to the 12 is 3 fives: 15 minutes." }] },
        answer: "**15 minutes**. A quarter to five is 4:45; 15 more minutes makes 5:00."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "857 321 is the largest number that can be made by rearranging these digits. Communicate your reasoning.",
        img: "u9-cards.png",
        answer: false,
        explain: "The digits are 8, 3, 7, 5, 2 and 1 (the ace is 1). Largest to smallest they are 8, 7, 5, 3, 2, 1, so the largest number is 875 321. 857 321 swaps the 7 and the 5.",
        interact: [{ kind: "order", items: ["8", "3", "7", "5", "2", "1 (ace)"], answer: [0, 2, 3, 1, 4, 5] }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Which 2D shapes can you see on this 3D object?",
        img: "u9-triprism.png",
        interact: [
          { kind: "select", items: [["triangle", true], ["rectangle", true], ["circle", false], ["pentagon", false]] },
          { kind: "input", fields: [{ label: "Triangles", value: 2 }, { label: "Rectangles", value: 3 }] }
        ],
        answer: "**Triangles** and **rectangles**. This triangular prism has 2 triangle faces (the ends) and 3 rectangle faces.",
        explain: "Only one triangle and two rectangles are in full view; the dashed lines show the hidden faces."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the path from the Pasta to the Check out. Use grid references, compass directions and directional language.",
        interact: [
          { kind: "gridref", src: "img/s2/u9-shop.png", alt: "Supermarket map with a grid, columns A to J and rows 1 to 10, and a compass", box: [8.2, 3.3, 73.8, 92.0], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], rows: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "Pasta", accept: ["D8", "8D"] },
            { label: "Check out", accept: ["G2", "2G"] },
            { label: "Squares east", value: 3 },
            { label: "Squares south", value: 6 }] }
        ],
        answer: "The Pasta is in **D8** and the Check out is in **G2**. For example: walk **east 3 squares** past the Chips to G8, then turn right and walk **south 6 squares**, past the Snack shelf, to the Check out in G2.",
        explain: "Routes vary (for example south first, or around the shelves). The boxes check the start, the finish and the total moves east and south."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Halve the array. Record a number sentence using a division sign (÷).",
        interact: [
          { kind: "array", rows: 3, cols: 6, showTotal: true, hint: "This is the array: 3 rows of 6. Halve it by taking away half of the columns." },
          { kind: "sentence", fields: [{ label: "Number sentence", placeholder: "e.g. 18 ÷ 2 = 9", re: "^\\s*18\\s*[÷/]\\s*2\\s*=\\s*9\\s*$", msg: "Start with the whole array, 18, and divide by 2.", sample: "18 ÷ 2 = 9" }] }
        ],
        answer: "The array has 3 rows of 6 = 18. Half of it is 3 rows of 3 = 9. **18 ÷ 2 = 9**."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Create a list of categories to collect data for this question: What is the favourite game played at lunchtime?",
        interact: [{ kind: "choose", rows: [{ t: "A good list of categories", options: ["red, blue, green, yellow", "handball, soccer, tag, skipping, other", "Monday, Tuesday, Wednesday", "apples, bananas, oranges"], a: 1 }] }],
        answer: "Answers vary, for example **handball, soccer, tag, skipping, other**. The categories must be games, and an \"other\" category catches any game not on the list.",
        explain: "The slide asks students to make their own list. The options give the class something to compare; have them add their own categories."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value A",
        prompt: "Find 3974 recorded in standard place value form.",
        options: ["2000 + 1900 + 74", "3 thousands, 974 ones", "3000 + 970 + 4", "3 thousands, 9 hundreds, 7 tens and 4 ones"],
        answer: 3,
        explain: "Standard form uses each place once: 3 thousands, 9 hundreds, 7 tens and 4 ones. A, B and C all make 3974 but are non-standard partitions.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 3, H: 9, T: 7, O: 4 }, hint: "This is 3974. Read each column." }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Is this a net of a cube? Communicate your reasoning.",
        interact: [
          { kind: "classify", view: [320, 230], total: 6, label: "A net made of squares", hint: "Tap each square face to count it.",
            cats: [{ k: "f", t: "Faces counted", c: "#22A06B" }],
            shapes: [[0, 0], [0, 1], [0, 2], [1, 1], [2, 1], [3, 1]].map(([c, r]) => ({ p: (20 + c * 70) + "," + (10 + r * 70) + " " + (90 + c * 70) + "," + (10 + r * 70) + " " + (90 + c * 70) + "," + (80 + r * 70) + " " + (20 + c * 70) + "," + (80 + r * 70), a: "f", fill: "#DDEFFB" })) },
          { kind: "choose", rows: [{ t: "Is it a net of a cube?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes.** It has 6 squares. The row of 4 wraps around to make 4 sides, and the squares above and below the first square fold over to make the top and the bottom, with no gaps or overlaps."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Match the chance term with the everyday event: equally likely, likely, unlikely.",
        interact: [{ kind: "choose", rows: [
          { t: "It snowing at school today", options: ["equally likely", "likely", "unlikely"], a: 2 },
          { t: "A coin flip landing on heads", options: ["equally likely", "likely", "unlikely"], a: 0 },
          { t: "You attending school on Monday", options: ["equally likely", "likely", "unlikely"], a: 1 }] }],
        answer: "Snowing at school: **unlikely** · A coin landing on heads: **equally likely** (heads or tails) · Attending school on Monday: **likely**.",
        explain: "The slide said \"a coin flip landing on heads or tails\". Landing on heads or tails is certain, so the event is changed to landing on heads, which is equally likely as tails."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "2 × 6 = 6 × 2. Draw the arrays.",
        interact: [
          { kind: "array", rows: 2, cols: 6, showTotal: true, hint: "This is 2 rows of 6. Tap Rotate to see 6 rows of 2." },
          { kind: "input", fields: [{ label: "2 × 6 =", value: 12 }, { label: "6 × 2 =", value: 12 }] }
        ],
        answer: "2 rows of 6 = **12** and 6 rows of 2 = **12**. It is the same array turned around, so 2 × 6 = 6 × 2."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Record the total amount of plants found in the playground.",
        interact: [
          { kind: "bargraph", label: "Plants in our playground", max: 20, step: 5, minor: 1, ylabel: "Number of plants",
            series: [{ l: "Plants", c: "#2F6FE4" }],
            groups: [{ l: "roses", v: [5], c: "#EE2B3B" }, { l: "sunflowers", v: [7], c: "#E8A623" }, { l: "grass tree", v: [15], c: "#74BF44" }, { l: "eucalyptus", v: [18], c: "#AD62A8" }] },
          { kind: "input", fields: [{ label: "Roses", value: 5 }, { label: "Sunflowers", value: 7 }, { label: "Grass trees", value: 15 }, { label: "Eucalyptus trees", value: 18 }, { label: "Total", value: 45 }] }
        ],
        answer: "5 + 7 + 15 + 18 = **45 plants**.",
        explain: "On the slide the sunflower and eucalyptus bars end between the scale marks (about 6½ and 17½). The graph is redrawn with lines for every 1 so the bars read exactly 7 and 18."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value A",
        prompt: "2324 = 2 thousands, 3 hundreds and 24 ones, or 2000 + 300 + 24. Communicate your reasoning.",
        answer: true,
        explain: "2000 + 300 + 24 = 2324. 24 ones is the same as 2 tens and 4 ones, so both are non-standard ways to write 2324.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 2, H: 3, O: 24 }, hint: "2 thousands, 3 hundreds and 24 ones. Trade 10 ones for a ten." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Identify 3 everyday containers that hold about one litre.",
        img: "u9-jug.png",
        interact: [{ kind: "select", items: [["milk carton", true], ["teaspoon", false], ["large juice bottle", true], ["bath tub", false], ["drink bottle", true], ["egg cup", false], ["swimming pool", false]] }],
        answer: "Answers vary, for example a **milk carton**, a **large juice bottle** and a **drink bottle**. The jug shows 1 litre is 1000 mL.",
        explain: "Container sizes vary, so accept any sensible container the class can justify. The list is added so there is something to sort."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Record the outcomes when spinning this spinner. Communicate your reasoning.",
        img: "u9-spinner.png",
        interact: [
          { kind: "select", items: [["red", true], ["yellow", true], ["blue", false], ["green", false]] },
          { kind: "choose", rows: [{ t: "Red compared to yellow", options: ["more likely", "equally likely", "less likely"], a: 1 }] }
        ],
        answer: "The outcomes are **red** or **yellow**. Each colour covers half of the spinner, so red and yellow are **equally likely**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the 4 related facts for the array using the symbols × and ÷.",
        interact: [
          { kind: "array", rows: 4, cols: 5, showTotal: true, fixCols: false, hint: "4 rows of 5. Rotate it for the turnaround fact." },
          { kind: "sentence", fields: [
            { label: "Multiply", placeholder: "e.g. 4 × 5 = 20", re: "^\\s*(4\\s*x\\s*5|5\\s*x\\s*4)\\s*=\\s*20\\s*$", msg: "Multiply the rows by the columns.", sample: "4 x 5 = 20" },
            { label: "Turnaround", placeholder: "e.g. 5 × 4 = 20", re: "^\\s*(4\\s*x\\s*5|5\\s*x\\s*4)\\s*=\\s*20\\s*$", msg: "Swap the two numbers you multiplied.", sample: "5 x 4 = 20" },
            { label: "Divide", placeholder: "e.g. 20 ÷ 4 = 5", re: "^\\s*20\\s*[÷/]\\s*(4|5)\\s*=\\s*(5|4)\\s*$", msg: "Start with 20 ÷ …", sample: "20 ÷ 4 = 5" },
            { label: "Divide", placeholder: "e.g. 20 ÷ 5 = 4", re: "^\\s*20\\s*[÷/]\\s*(4|5)\\s*=\\s*(5|4)\\s*$", msg: "Start with 20 ÷ …", sample: "20 ÷ 5 = 4" }] }
        ],
        answer: "4 × 5 = 20 · 5 × 4 = 20 · 20 ÷ 4 = 5 · 20 ÷ 5 = 4",
        explain: "The slide's array was 4 rows of 4. A square array only has 2 different facts (4 × 4 = 16 and 16 ÷ 4 = 4), so the array is changed to 4 rows of 5 to give 4 related facts."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Measure the length of the pencil in millimetres. Communicate your reasoning.",
        img: "u9-pencil.png",
        interact: [
          { kind: "marker", min: 0, max: 20, ticks: 1, minor: 10, target: 11.1, tol: 0.3, label: "end", msg: "The tip is at 0. Count the whole centimetres to the end, then the small millimetre marks." },
          { kind: "input", fields: [{ label: "Length", min: 109, max: 113, suffix: "mm" }] }
        ],
        answer: "About **111 mm**. The tip starts at 0 and the eraser ends just past 11 cm. 11 cm = 110 mm, plus about 1 mm.",
        explain: "Read from the picture, the pencil ends 1 mm or so past 11 cm, so 109–113 mm is accepted. 110 mm is a fair answer."
      }
    ],
    // Review 7
    [
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Which of these show 6724 partitioned in non-standard form? You may select more than one answer.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: { H: 67, O: 24 }, hint: "67 hundreds and 24 ones. Trade 10 hundreds for a thousand." },
          { kind: "select", items: [["A  6000 + 700 + 20 + 4", false], ["B  6 thousands, 7 hundreds, 2 tens and 4 ones", false], ["C  67 hundreds and 24 ones", true], ["D  600 + 70 + 20 + 4", false]] }
        ],
        answer: "**C only.** 67 hundreds and 24 ones = 6700 + 24 = 6724. A and B are standard form. D is 600 + 70 + 20 + 4 = 694, not 6724.",
        explain: "The slide says you may select more than one, but only C is a non-standard partition of 6724. D looks close but has lost a place: it makes 694."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record which container holds more, less and about the same as one litre. Communicate your reasoning.",
        img: "u9-containers.png",
        interact: [{ kind: "choose", rows: [
          { t: "Juice box", options: ["more than 1 L", "less than 1 L", "about 1 L"], a: 1 },
          { t: "Milk bottle", options: ["more than 1 L", "less than 1 L", "about 1 L"], a: 0 },
          { t: "Soft drink bottle", options: ["more than 1 L", "less than 1 L", "about 1 L"], a: 2 }] }],
        answer: "Juice box: **less** than 1 litre (about 250 mL). Milk bottle: **more** than 1 litre (2 or 3 L). Soft drink bottle: **about the same** as 1 litre.",
        explain: "No sizes are printed on the containers, so these use typical sizes. Discuss if the class knows different sizes."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "If I draw out 1 marble, which colour do you predict is most likely to be drawn? Which colour do you predict is least likely to be drawn? Communicate your reasoning.",
        img: "u9-bag.png",
        interact: [
          { kind: "tally", rows: [{ l: "Red", a: 7 }, { l: "Yellow", a: 10 }, { l: "Blue", a: 3 }], hint: "Count the marbles of each colour as a tally." },
          { kind: "choose", rows: [
            { t: "Most likely", options: ["red", "yellow", "blue"], a: 1 },
            { t: "Least likely", options: ["red", "yellow", "blue"], a: 2 }] }
        ],
        answer: "**Yellow** is most likely (10 of the 20 marbles). **Blue** is least likely (only 3). There are 7 red."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Place the numbers 8, 2 and 16 into a fact family triangle. Record the related facts using the ×, ÷ and = symbols.",
        interact: [
          { kind: "array", rows: 2, cols: 8, showTotal: true, hint: "2 rows of 8 = 16. 16 goes at the top of the triangle; 2 and 8 go at the bottom." },
          { kind: "sentence", fields: [
            { label: "Multiply", placeholder: "e.g. 2 × 8 = 16", re: "^\\s*(2\\s*x\\s*8|8\\s*x\\s*2)\\s*=\\s*16\\s*$", msg: "Multiply 2 and 8.", sample: "2 x 8 = 16" },
            { label: "Turnaround", placeholder: "e.g. 8 × 2 = 16", re: "^\\s*(2\\s*x\\s*8|8\\s*x\\s*2)\\s*=\\s*16\\s*$", msg: "Swap the two numbers you multiplied.", sample: "8 x 2 = 16" },
            { label: "Divide", placeholder: "e.g. 16 ÷ 2 = 8", re: "^\\s*16\\s*[÷/]\\s*(2|8)\\s*=\\s*(8|2)\\s*$", msg: "Start with 16 ÷ …", sample: "16 ÷ 2 = 8" },
            { label: "Divide", placeholder: "e.g. 16 ÷ 8 = 2", re: "^\\s*16\\s*[÷/]\\s*(2|8)\\s*=\\s*(8|2)\\s*$", msg: "Start with 16 ÷ …", sample: "16 ÷ 8 = 2" }] }
        ],
        answer: "16 at the top, 2 and 8 at the bottom. 2 × 8 = 16 · 8 × 2 = 16 · 16 ÷ 2 = 8 · 16 ÷ 8 = 2"
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the lengths in metres and centimetres: 154 cm, 672 cm, 205 cm.",
        interact: [
          { kind: "marker", min: 0, max: 7, ticks: 10, label: "length", hint: "Each big mark is 1 metre and each small mark is 10 cm. Slide the pin to each length." },
          { kind: "input", fields: [
            { label: "154 cm = m", value: 1 }, { label: "and cm", value: 54 },
            { label: "672 cm = m", value: 6 }, { label: "and cm", value: 72 },
            { label: "205 cm = m", value: 2 }, { label: "and cm", value: 5 }] }
        ],
        answer: "154 cm = **1 m 54 cm** · 672 cm = **6 m 72 cm** · 205 cm = **2 m 5 cm**. 100 cm = 1 m."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value A",
        prompt: "9826 = 98 hundreds and 26 ones, or 9800 + 26. Communicate your reasoning.",
        answer: true,
        explain: "98 hundreds is 9800, and 9800 + 26 = 9826. Both are non-standard ways to write 9826.",
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { H: 98, O: 26 }, hint: "98 hundreds and 26 ones. Trade to check it makes 9826." }]
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Harry filled a measuring jug 6 times to fill the bucket. Record the capacity of the bucket in litres.",
        img: "u9-bucket.png",
        interact: [
          { kind: "jumps", start: 0, steps: [1], min: 0, max: 8, hint: "The full jug holds 1000 mL, which is 1 litre. Jump + 1 for each jug." },
          { kind: "input", fields: [{ label: "Capacity of the bucket", value: 6, suffix: "L" }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Jump on a number line", s: "Each full jug is 1 L. Six jumps of 1 L land on 6 L." }, { t: "Multiply", s: "6 jugs × 1 L = 6 L (6 × 1000 mL = 6000 mL)." }] },
        answer: "**6 litres**. The jug holds 1000 mL = 1 L, and 6 × 1 L = 6 L."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Record the clothing combinations that can be made with the blue shorts.",
        interact: [
          { kind: "combos", pick: 2, total: 3, items: [["blue shorts", "#2F6FE4", 1], ["red T-shirt", "#E03131", 1], ["yellow T-shirt", "#E9B500", 1], ["orange T-shirt", "#F2994A", 1]] },
          { kind: "input", fields: [{ label: "Combinations", value: 3 }] }
        ],
        answer: "**3 combinations**: blue shorts + red T-shirt · blue shorts + yellow T-shirt · blue shorts + orange T-shirt.",
        explain: "Each outfit is the blue shorts with one T-shirt, so pairs of two T-shirts don't count."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Explain the strategy used to represent the word problem. Lucy created 3 paintings. Her friend Thomas created 4 times as many paintings.",
        interact: [
          { kind: "array", rows: 1, cols: 3, fixCols: true, showTotal: true, hint: "1 row of 3 is Lucy's paintings. Add rows until there are 4 rows of 3 for Thomas." },
          { kind: "choose", rows: [{ t: "The strategy is", options: ["an array: 4 rows of 3", "a tally chart", "a number line counting back"], a: 0 }] },
          { kind: "input", fields: [{ label: "Thomas's paintings", value: 12 }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Array", s: "Lucy's 3 paintings are one row. 4 times as many is 4 rows of 3 = 12." }, { t: "Repeated addition", s: "3 + 3 + 3 + 3 = 12. Thomas created 12 paintings." }] },
        answer: "The model is an **array**: 1 row of 3 for Lucy, then 4 rows of 3 for Thomas. 4 × 3 = **12 paintings**.",
        explain: "The slide's model is a grid: one row of 3 squares turns into 4 rows of 3."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Explain the term 'perimeter'.",
        interact: [
          { kind: "sides", view: [380, 210], label: "A rectangle", fill: "#FFDF5D", poly: [[40, 30], [340, 30], [340, 180], [40, 180]] },
          { kind: "choose", rows: [{ t: "Perimeter is", options: ["the space inside a shape", "the distance all the way around the outside of a shape", "how heavy a shape is"], a: 1 }] }
        ],
        answer: "Perimeter is the **distance all the way around the outside** of a shape. Trace each side of the rectangle: the perimeter is all the side lengths added together."
      }
    ]
  ]
});
