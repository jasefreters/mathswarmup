/*
  Stage 2 Year B, Unit 30 — Review of learning (Term 2, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 2, ls: 5, unit: 30,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 30 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Andrea builds an array with 4 rows of 5 counters. Which set of number sentences correctly shows the related multiplication and division facts?",
        options: ["4 × 5 = 20, 5 × 4 = 20, 20 ÷ 4 = 5, 20 ÷ 5 = 4", "4 × 5 = 9, 5 × 4 = 9, 20 ÷ 4 = 5, 20 ÷ 5 = 4", "4 × 5 = 20, 5 × 4 = 20, 20 ÷ 4 = 4, 20 ÷ 5 = 5", "4 × 5 = 20, 5 × 2 = 20, 4 ÷ 20 = 5, 5 ÷ 20 = 4"],
        answer: 0,
        explain: "4 rows of 5 is 20 counters. The fact family uses 4, 5 and 20: 4 × 5 = 20, 5 × 4 = 20, 20 ÷ 4 = 5 and 20 ÷ 5 = 4. B adds instead of multiplying, C has the division answers swapped, and D uses 5 × 2 and divides the small number by the big one.",
        cubes: { ops: ["×", "÷"], solve: [{ t: "Count the array", s: "4 rows of 5: 5, 10, 15, 20. So 4 × 5 = 20 and, turned around, 5 × 4 = 20." }, { t: "Undo the multiplication", s: "Share 20 into 4 rows: 5 in each, so 20 ÷ 4 = 5. Share 20 into 5 columns: 4 in each, so 20 ÷ 5 = 4." }] },
        interact: [{ kind: "array", rows: 4, cols: 5, showTotal: true, hint: "Andrea's array: 4 rows of 5. Rotate it to see 5 rows of 4." }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Draw and label the angle using the terms: arm, angle, vertex. Which term goes on each label?",
        img: "u30-anglelabels.png",
        interact: [
          { kind: "angle", start: 120, hint: "Drag the arm. Point to the two arms, the vertex and the angle between them." },
          { kind: "choose", rows: [
            { t: "Label 1", options: ["arm", "angle", "vertex"], a: 0 },
            { t: "Label 2", options: ["arm", "angle", "vertex"], a: 1 },
            { t: "Label 3", options: ["arm", "angle", "vertex"], a: 2 },
            { t: "Label 4", options: ["arm", "angle", "vertex"], a: 0 }] }
        ],
        answer: "1. **arm** · 2. **angle** (the amount of turn between the arms, shown by the dashed arc) · 3. **vertex** (where the arms meet) · 4. **arm**",
        explain: "The slide has 4 labels and only 3 terms, because the angle has 2 arms: labels 1 and 4 both point to an arm."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name the following three-dimensional object. Identify the number of faces, vertices and edges.",
        img: "u30-pyramid.png",
        interact: [
          { kind: "choose", rows: [{ t: "The object is a", options: ["square pyramid", "triangular prism", "cube", "cone"], a: 0 }] },
          { kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Vertices", value: 5 }, { label: "Edges", value: 8 }] }
        ],
        answer: "A **square pyramid**: **5 faces** (1 square base and 4 triangles), **5 vertices** (4 around the base and 1 at the apex) and **8 edges** (4 around the base and 4 up to the apex)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Tessa started at the fire station and made a quarter turn down the road to go to the bank. Describe Tessa's quarter turn as a type of angle.",
        img: "u30-town.png",
        cubes: { ops: [], note: "Name the turn; there is nothing to calculate.", solve: [{ t: "Act it out", s: "Stand facing south (down the road), then turn to face west towards the bank. Your arm sweeps through a square corner." }, { t: "Use the angle maker", s: "A quarter turn is one quarter of a full turn: the arms make a square corner, a right angle." }] },
        interact: [
          { kind: "angle", names: true, start: 40, target: "right", hint: "Drag the arm to show Tessa's quarter turn." },
          { kind: "choose", rows: [{ t: "Tessa's quarter turn is", options: ["an acute angle", "a right angle", "an obtuse angle", "a straight angle"], a: 1 }] }
        ],
        answer: "A **right angle**. Tessa walks south down the road from the fire station, then makes a quarter turn (to the right) to face west towards the bank. A quarter turn is a right angle."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "How many minutes remain until the next hour on the digital times? a) 4:48 b) 12:54 c) 7:39",
        interact: [
          { kind: "jumps", time: true, start: 288, end: 300, steps: [1, 2, 10], hint: "Start at 4:48 and jump on to 5:00. Add up the jumps." },
          { kind: "input", fields: [{ label: "a) 4:48", value: 12, suffix: "minutes" }, { label: "b) 12:54", value: 6, suffix: "minutes" }, { label: "c) 7:39", value: 21, suffix: "minutes" }] }
        ],
        answer: "a) **12 minutes** (4:48 → 5:00) · b) **6 minutes** (12:54 → 1:00) · c) **21 minutes** (7:39 → 8:00). An hour has 60 minutes, so 60 − 48 = 12, 60 − 54 = 6 and 60 − 39 = 21."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The following fact family is accurately recorded: 8 × 2 = 16, 2 × 8 = 16, 16 ÷ 2 = 8, 2 ÷ 16 = 8",
        answer: false,
        explain: "The last sentence is wrong. 2 ÷ 16 is not 8; a division in this fact family starts with the total, 16. It should be 16 ÷ 8 = 2.",
        interact: [{ kind: "array", rows: 2, cols: 8, showTotal: true, hint: "2 rows of 8 = 16. Share 16 into 8 columns: how many in each?" }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Identify which of the following shapes contain a right angle using an angle tester: triangle, parallelogram, trapezium, square.",
        interact: [
          { kind: "corners", view: [1080, 238], r: 22, q: 30, hint: "Tap a corner to lay the angle tester on it. Tap again to name the angle.", shapes: [
            { p: [[30, 40], [150, 40], [30, 158]], fill: "#F4A3B4", l: "triangle", lx: 80, ly: 226 },
            { p: [[340, 40], [465, 40], [429, 158], [308, 158]], fill: "#F4A3B4", l: "parallelogram", lx: 386, ly: 226 },
            { p: [[620, 40], [726, 77], [726, 150], [620, 185]], fill: "#F4A3B4", l: "trapezium", lx: 673, ly: 226 },
            { p: [[890, 40], [998, 40], [998, 145], [890, 145]], fill: "#F4A3B4", l: "square", lx: 944, ly: 226 }] },
          { kind: "select", hint: "Tap every shape that contains a right angle.", items: [["triangle", true], ["parallelogram", false], ["trapezium", false], ["square", true]] }
        ],
        answer: "The **triangle** (its top-left corner) and the **square** (all 4 corners) contain right angles. The parallelogram and the trapezium have no right angles: their corners are either smaller or larger than the angle tester.",
        explain: "The shapes are redrawn from the slide, where each sits against an angle tester. The trapezium has 2 parallel upright sides, but its top and bottom slope, so none of its corners is square."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name the following three-dimensional object. Identify the number of faces, vertices and edges.",
        img: "u30-triprism.png",
        interact: [
          { kind: "choose", rows: [{ t: "The object is a", options: ["triangular pyramid", "triangular prism", "square pyramid", "rectangular prism"], a: 1 }] },
          { kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Vertices", value: 6 }, { label: "Edges", value: 9 }] }
        ],
        answer: "A **triangular prism**: **5 faces** (2 triangles and 3 rectangles), **6 vertices** (3 on each triangle) and **9 edges** (3 on each triangle and 3 joining them)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Use landmarks and directional language to describe a route from the school to the supermarket.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u30-roads.png" }],
        answer: "Answers vary. For example: leave the school and follow the road to the left (west), passing the forest on your right. At the end of the road, turn left (south) onto the outer road. The supermarket is on your left, next to the house.",
        explain: "Any route that follows the roads and names landmarks (the forest, the houses, the farm) and directions (left, right, north, south, east, west) is correct. Trace the route on the map as the class describes it."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the following lengths using a combination of metres and centimetres. For example, 1.25 m = 1 m and 25 cm. 7.59 m, 9.14 m, 10.72 m, 15.5 m, 12.1 m, 22.09 m",
        interact: [{ kind: "input", fields: [
          { label: "7.59 m =", value: 7, suffix: "m" }, { label: "and", value: 59, suffix: "cm" },
          { label: "9.14 m =", value: 9, suffix: "m" }, { label: "and", value: 14, suffix: "cm" },
          { label: "10.72 m =", value: 10, suffix: "m" }, { label: "and", value: 72, suffix: "cm" },
          { label: "15.5 m =", value: 15, suffix: "m" }, { label: "and", value: 50, suffix: "cm" },
          { label: "12.1 m =", value: 12, suffix: "m" }, { label: "and", value: 10, suffix: "cm" },
          { label: "22.09 m =", value: 22, suffix: "m" }, { label: "and", value: 9, suffix: "cm" }] }],
        answer: "7 m 59 cm · 9 m 14 cm · 10 m 72 cm · **15 m 50 cm** · **12 m 10 cm** · **22 m 9 cm**. The digits after the point are hundredths of a metre, which are centimetres: 0.5 m = 0.50 m = 50 cm, 0.1 m = 10 cm and 0.09 m = 9 cm."
      }
    ],
    // Review 3
    [
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Which number sentences have been accurately recorded to represent fact families for multiples of 2 and 4 and 5 and 10? There may be more than one correct answer. Tap every correct set.",
        interact: [
          { kind: "array", rows: 2, cols: 9, showTotal: true, hint: "Build each fact with an array to check the total." },
          { kind: "select", items: [
            ["A: 2 × 9 = 18, 9 × 2 = 18, 18 ÷ 2 = 9, 18 ÷ 9 = 2", true],
            ["B: 4 × 6 = 24, 6 × 4 = 24, 24 ÷ 4 = 6, 24 ÷ 6 = 4", true],
            ["C: 2 × 10 = 22, 10 × 2 = 22, 20 ÷ 2 = 10, 20 ÷ 10 = 2", false],
            ["D: 5 × 8 = 40, 8 × 5 = 40, 40 ÷ 5 = 8, 40 ÷ 8 = 5", true]] }
        ],
        answer: "**A**, **B** and **D**. In C, 2 × 10 is 20, not 22, so the multiplication facts are wrong (the division facts are right).",
        explain: "The slide lets students choose more than one option, so this is a tap-every-correct-one question."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Match each angle to its description: less than a right angle, about the same as a right angle, greater than a right angle.",
        img: "u30-angles.png",
        interact: [
          { kind: "angle", start: 90, hint: "Drag the arm to copy each angle. Compare it with the right angle." },
          { kind: "choose", rows: [
            { t: "Angle A", options: ["less than a right angle", "about the same as a right angle", "greater than a right angle"], a: 2 },
            { t: "Angle B", options: ["less than a right angle", "about the same as a right angle", "greater than a right angle"], a: 0 },
            { t: "Angle C", options: ["less than a right angle", "about the same as a right angle", "greater than a right angle"], a: 1 }] }
        ],
        answer: "A: **greater than** a right angle (about 135°) · B: **less than** a right angle (about 45°) · C: **about the same as** a right angle",
        explain: "The angles were measured from the slide: A is about 135°, B about 45° and C about 90°."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Sketch a pyramid showing depth. Think about the 2D shapes that can be seen.",
        img: "u30-pyramid.png",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [
            { t: "The side faces are", options: ["rectangles", "triangles", "circles"], a: 1 },
            { t: "The base of this pyramid is a", options: ["square", "triangle", "circle"], a: 0 }] }
        ],
        answer: "A square pyramid has a **square base** and **4 triangular faces** that meet at the apex. To show depth, draw the base as a slanted square (a parallelogram), mark the apex above its centre and join it to each corner. Dashed lines show the edges you cannot see."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Use the grid map to locate the position of the ship, mermaid, treasure chest and sharks.",
        interact: [
          { kind: "gridref", src: "img/s2/u30-treasure.png", alt: "Treasure island map with a grid, columns A to F and rows 1 to 4", box: [6.4, 11.2, 93.1, 89.1], cols: ["A", "B", "C", "D", "E", "F"], rows: ["4", "3", "2", "1"] },
          { kind: "input", fields: [{ label: "Ship", accept: ["A4", "4A"], placeholder: "e.g. B3" }, { label: "Mermaid", accept: ["F2", "2F"], placeholder: "e.g. B3" }, { label: "Treasure chest", accept: ["F4", "4F"], placeholder: "e.g. B3" }, { label: "Sharks", accept: ["A1", "1A"], placeholder: "e.g. B3" }] }
        ],
        answer: "Ship: **A4** · Mermaid: **F2** · Treasure chest: **F4** · Sharks: **A1**. Read the letter across first, then the number up."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Place the following lengths in order from shortest to longest: 129 cm, 1.36 m, 130 cm, 1.4 m",
        interact: [
          { kind: "numberline", min: 120, max: 150, ticks: 1, labelStep: 10, tol: 2, items: [["129 cm", 129], ["1.36 m", 136], ["130 cm", 130], ["1.4 m", 140]] },
          { kind: "order", items: ["129 cm", "1.36 m", "130 cm", "1.4 m"], answer: [0, 2, 1, 3] }
        ],
        answer: "**129 cm**, **130 cm**, **1.36 m** (136 cm), **1.4 m** (140 cm). Rename the metres in centimetres to compare: 1 m = 100 cm."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Ralph says the following is a correct fact family: 4 × 5 = 20, 2 × 10 = 20, 20 ÷ 4 = 5, 20 ÷ 10 = 2",
        answer: false,
        explain: "Every sentence is true, but they are not one fact family. A fact family uses the same three numbers: 4, 5 and 20 give 4 × 5 = 20, 5 × 4 = 20, 20 ÷ 4 = 5 and 20 ÷ 5 = 4. Ralph has mixed in a second family (2, 10 and 20).",
        cubes: { ops: ["×", "÷"], solve: [{ t: "Check the numbers", s: "Circle the three numbers in each sentence. 4 × 5 = 20 uses 4, 5, 20 but 2 × 10 = 20 uses 2, 10, 20, so they belong to different families." }, { t: "Build the arrays", s: "4 rows of 5 turned around is 5 rows of 4, never 2 rows of 10. So the turnaround of 4 × 5 = 20 is 5 × 4 = 20." }] },
        interact: [{ kind: "array", rows: 4, cols: 5, showTotal: true, hint: "4 rows of 5. Rotate it. Does it ever become 2 rows of 10?" }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Match the angles to the number of quarter turns: a. 1 quarter turn, b. 2 quarter turns, c. 3 quarter turns, d. 4 quarter turns.",
        img: "u30-turns.png",
        interact: [
          { kind: "angle", names: true, reflex: true, start: 90, hint: "Drag the arm one quarter turn at a time and read the angle's name." },
          { kind: "choose", rows: [
            { t: "a. 1 quarter turn", options: ["reflex angle", "straight angle", "angle of revolution", "right angle"], a: 3 },
            { t: "b. 2 quarter turns", options: ["reflex angle", "straight angle", "angle of revolution", "right angle"], a: 1 },
            { t: "c. 3 quarter turns", options: ["reflex angle", "straight angle", "angle of revolution", "right angle"], a: 0 },
            { t: "d. 4 quarter turns", options: ["reflex angle", "straight angle", "angle of revolution", "right angle"], a: 2 }] }
        ],
        answer: "a. 1 quarter turn: **right angle** (4) · b. 2 quarter turns: **straight angle** (2) · c. 3 quarter turns: **reflex angle** (1) · d. 4 quarter turns: **angle of revolution** (3)"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Sketch a prism showing depth. Think about the 2D shapes that can be seen.",
        img: "u30-rectprism.png",
        interact: [
          { kind: "sketch", grid: "triangle" },
          { kind: "choose", rows: [
            { t: "This prism is a", options: ["rectangular prism", "triangular prism", "square pyramid"], a: 0 },
            { t: "Its faces are", options: ["6 rectangles", "2 triangles and 3 rectangles", "5 triangles"], a: 0 }] }
        ],
        answer: "A **rectangular prism** has **6 rectangular faces**. To show depth, draw the front rectangle, draw a matching rectangle up and to the side, and join the corners. Dashed lines show the hidden edges."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Complete the number of quarter turns. 1. To face east, I make ___ quarter turn right from north. 2. To face south, I make ___ quarter turns left from east. 3. To face north, I make ___ quarter turns left from south.",
        img: "u30-compass.png",
        interact: [
          { kind: "turns", step: 90, hint: "The arrow starts facing north. Each tap is a quarter turn right (clockwise)." },
          { kind: "input", fields: [{ label: "1. North to east (right)", value: 1 }, { label: "2. East to south (left)", value: 3 }, { label: "3. South to north (left)", value: 2 }] }
        ],
        answer: "1. **1** quarter turn right (north → east) · 2. **3** quarter turns left (east → north → west → south) · 3. **2** quarter turns left (south → east → north)",
        explain: "Turning left from east to south takes 3 quarter turns. (1 quarter turn right would also get there, but the question asks for left turns.)"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Estimate and then calculate the perimeter of the quadrilateral.",
        interact: [
          { kind: "sides", label: "Rectangle 29 cm long and 8 cm wide", view: [480, 200], fill: "#C9D6F2",
            poly: [[80, 50], [380, 50], [380, 133], [80, 133]],
            dims: [{ from: [80, 32], to: [380, 32] }, { from: [80, 151], to: [380, 151] }, { from: [60, 50], to: [60, 133] }, { from: [400, 50], to: [400, 133] }],
            labels: [{ x: 230, y: 24, t: "29 cm" }, { x: 230, y: 178, t: "29 cm" }, { x: 50, y: 98, t: "8 cm", anchor: "end" }, { x: 410, y: 98, t: "8 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Estimate", min: 50, max: 100, suffix: "cm" }, { label: "Perimeter", value: 74, suffix: "cm" }] }
        ],
        answer: "Estimate: about **70 cm** (30 + 30 + 10 + 10 = 80, a little high). Perimeter: 29 + 29 + 8 + 8 = **74 cm**.",
        explain: "Any sensible estimate from 50 cm to 100 cm is accepted."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which of the following lists the decimals in ascending order?",
        options: ["0.56, 0.65, 0.6, 0.61", "0.56, 0.6, 0.61, 0.65", "0.61, 0.6, 0.56, 0.65", "0.65, 0.61, 0.6, 0.56"],
        answer: 1,
        explain: "Ascending means smallest to largest. Write each in hundredths: 0.56, 0.60, 0.61, 0.65. D is in descending order.",
        interact: [{ kind: "numberline", min: 0.5, max: 0.7, ticks: 100, labelStep: 0.05, tol: 0.006, items: [["0.56", 0.56], ["0.65", 0.65], ["0.6", 0.6], ["0.61", 0.61]] }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Name the angle in comparison to quarter turns. a) One quarter turn is a ___ angle. b) Less than one quarter turn is an ___ angle. c) More than one quarter turn and less than 2 quarter turns is an ___ angle. d) Equal to 2 quarter turns is a ___ angle. e) More than 2 quarter turns and less than 4 quarter turns is a ___ angle. f) Equal to 4 quarter turns is an ___.",
        interact: [
          { kind: "angle", names: true, reflex: true, start: 60, hint: "Drag the arm through each number of quarter turns and read the name." },
          { kind: "choose", rows: [
            { t: "a) 1 quarter turn", options: ["acute", "right", "obtuse", "straight", "reflex", "angle of revolution"], a: 1 },
            { t: "b) less than 1 quarter turn", options: ["acute", "right", "obtuse", "straight", "reflex", "angle of revolution"], a: 0 },
            { t: "c) between 1 and 2 quarter turns", options: ["acute", "right", "obtuse", "straight", "reflex", "angle of revolution"], a: 2 },
            { t: "d) 2 quarter turns", options: ["acute", "right", "obtuse", "straight", "reflex", "angle of revolution"], a: 3 },
            { t: "e) between 2 and 4 quarter turns", options: ["acute", "right", "obtuse", "straight", "reflex", "angle of revolution"], a: 4 },
            { t: "f) 4 quarter turns", options: ["acute", "right", "obtuse", "straight", "reflex", "angle of revolution"], a: 5 }] }
        ],
        answer: "a) **right** · b) **acute** · c) **obtuse** · d) **straight** · e) **reflex** · f) **angle of revolution**",
        explain: "The slide's sentence d) read \"an straight angle\"; it is written as \"a straight angle\" here."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record the capacity of a 2-litre milk container using the abbreviation for litres.",
        img: "u30-milk.png",
        interact: [{ kind: "input", fields: [{ label: "Capacity", accept: ["2 L", "2L", "2 l", "2l"], placeholder: "e.g. 1 L" }] }],
        answer: "**2 L**. The abbreviation for litres is a capital L, written after the number with a space."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "A bag contains 2 red grapes and 6 green grapes. Describe the likelihood of picking a red grape and the likelihood of picking a green grape using the words equally likely, likely or unlikely.",
        cubes: { ops: [], also: ["+"], note: "Compare the two amounts; no calculation is needed beyond the total.", solve: [{ t: "Compare the colours", s: "There are 6 green and only 2 red, so green is picked more often: green is likely and red is unlikely." }, { t: "Out of the total", s: "2 + 6 = 8 grapes. Red is 2 out of 8 (less than half): unlikely. Green is 6 out of 8 (more than half): likely." }] },
        interact: [{ kind: "choose", rows: [
          { t: "Picking a red grape", options: ["equally likely", "likely", "unlikely"], a: 2 },
          { t: "Picking a green grape", options: ["equally likely", "likely", "unlikely"], a: 1 }] }],
        answer: "Red: **unlikely** (2 out of 8). Green: **likely** (6 out of 8). There are 3 times as many green grapes as red ones."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Sort the following polygons into 2 groups. Group 1: polygons that have parallel sides. Group 2: polygons that do not have parallel sides.",
        interact: [{ kind: "classify", view: [720, 335], label: "Six polygons: triangle, square, parallelogram, rhombus, kite and rectangle", hint: "Choose a group, then tap each polygon.",
          cats: [{ k: "p", t: "Group 1: parallel sides", c: "#2F8F4E" }, { k: "n", t: "Group 2: no parallel sides", c: "#D9480F" }],
          shapes: [
            { p: "60,140 180,140 120,40", a: "n", fill: "#0B2A6B", deco: "<text x='120' y='26' font-size='22' text-anchor='middle' fill='#333' style='pointer-events:none'>1. triangle</text>" },
            { p: "310,40 410,40 410,140 310,140", a: "p", fill: "#495057", deco: "<text x='360' y='26' font-size='22' text-anchor='middle' fill='#333' style='pointer-events:none'>2. square</text>" },
            { p: "510,140 590,40 700,40 620,140", a: "p", fill: "#F7A8B8", deco: "<text x='605' y='26' font-size='22' text-anchor='middle' fill='#333' style='pointer-events:none'>3. parallelogram</text>" },
            { p: "40,300 100,200 216,200 156,300", a: "p", fill: "#D7193F", deco: "<text x='128' y='186' font-size='22' text-anchor='middle' fill='#333' style='pointer-events:none'>4. rhombus</text>" },
            { p: "360,198 405,238 360,325 315,238", a: "n", fill: "#1C6EF2", deco: "<text x='360' y='186' font-size='22' text-anchor='middle' fill='#333' style='pointer-events:none'>5. kite</text>" },
            { p: "510,212 700,212 700,292 510,292", a: "p", fill: "#6B001C", deco: "<text x='605' y='186' font-size='22' text-anchor='middle' fill='#333' style='pointer-events:none'>6. rectangle</text>" }] }],
        answer: "Group 1 (parallel sides): **square, parallelogram, rhombus, rectangle**. Group 2 (no parallel sides): **triangle, kite**.",
        explain: "The slide's kite was drawn as a diamond that looks like a rhombus (which does have parallel sides). It is redrawn here with a short top and a long bottom, so it is clearly a kite with no parallel sides."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "The following decimals are correctly arranged in ascending order: 0.3, 0.4, 0.35, 0.36. Communicate your reasoning.",
        answer: false,
        explain: "Write each in hundredths: 0.30, 0.40, 0.35, 0.36. 0.4 is the largest, so it should be last: 0.3, 0.35, 0.36, 0.4.",
        interact: [{ kind: "numberline", min: 0.3, max: 0.4, ticks: 100, labelStep: 0.05, tol: 0.004, items: [["0.3", 0.3], ["0.4", 0.4], ["0.35", 0.35], ["0.36", 0.36]] }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the digital times for the times displayed on the analog clocks to the minute.",
        img: "u30-clocks.png",
        interact: [
          { kind: "clock", time: "4:11", drag: true },
          { kind: "input", fields: [
            { label: "A", accept: ["4:11", "04:11"], placeholder: "h:mm" },
            { label: "B", accept: ["8:27", "08:27"], placeholder: "h:mm" },
            { label: "C", accept: ["1:45", "01:45"], placeholder: "h:mm" },
            { label: "D", accept: ["7:01", "07:01"], placeholder: "h:mm" },
            { label: "E", accept: ["2:20", "02:20"], placeholder: "h:mm" },
            { label: "F", accept: ["10:08"], placeholder: "h:mm" }] }
        ],
        answer: "A **4:11** · B **8:27** · C **1:45** · D **7:01** · E **2:20** · F **10:08**. Count by fives to the last number the minute hand passed, then count on the small marks.",
        explain: "The times were read from the slide's clocks by measuring where each minute hand points. The slide's hour hands are drawn roughly, so go by the minute hand. Drag the clock's long hand to model each time with the class."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "1000 mL is equal to ___ litre.",
        interact: [{ kind: "input", fields: [{ label: "1000 mL =", value: 1, suffix: "litre" }] }],
        answer: "1000 mL = **1 litre**. The prefix milli means one thousandth, so 1000 millilitres make 1 litre."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Ryan is rolling a 6-sided dice twice. Does the outcome of the first roll affect the chance of rolling a 3 on the second roll? Communicate your reasoning.",
        cubes: { ops: [], note: "Think about chance; there is nothing to calculate.", solve: [{ t: "Look at the dice", s: "Every roll has the same 6 faces, so a 3 is always 1 of 6 equally likely outcomes." }, { t: "Think about memory", s: "The dice does not remember the first roll. Each roll starts fresh, so the first result changes nothing." }] },
        interact: [{ kind: "choose", rows: [
          { t: "Does the first roll affect the second?", options: ["Yes", "No"], a: 1 },
          { t: "Chance of a 3 on the second roll", options: ["1 in 6", "2 in 6", "it depends on the first roll"], a: 0 }] }],
        answer: "**No**. Each roll is independent: the dice still has 6 faces, so the chance of a 3 is **1 in 6** on every roll, whatever the first roll showed."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Do the 2 rectangles have the same area? Rectangle 1 is 4 squares long and 3 squares wide. Rectangle 2 is 2 squares wide and 6 squares long. Communicate your thinking.",
        interact: [
          { kind: "areagrid", cells: ["1111", "1111", "1111"], size: 48 },
          { kind: "areagrid", cells: ["11", "11", "11", "11", "11", "11"], size: 48 },
          { kind: "input", fields: [{ label: "Rectangle 1", value: 12, suffix: "squares" }, { label: "Rectangle 2", value: 12, suffix: "squares" }] },
          { kind: "choose", rows: [{ t: "Same area?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes**. Rectangle 1 is 3 rows of 4 = **12 squares**. Rectangle 2 is 6 rows of 2 = **12 squares**. They are different shapes but cover the same area.",
        explain: "The rectangle sizes are counted from the slide's grid."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing numbers using place value B",
        prompt: "Which clue would help you identify the decimal 0.43?",
        options: ["It is less than 0.5 and the hundredths digit is 3.", "It is greater than 0.5 and the tenths digit is 3.", "It is equal to [1/3].", "It is greater than 0.4 and the hundredths digit is 4."],
        answer: 0,
        explain: "0.43 is 4 tenths and 3 hundredths. It is less than 0.5 and its hundredths digit is 3, so A fits. B is wrong (0.43 is less than 0.5, and its tenths digit is 4). C is wrong ([1/3] is about 0.33). D is wrong (the hundredths digit is 3, not 4).",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 100, labelStep: 0.1, tol: 0.015, items: [["0.43", 0.43]] }]
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "How many of each workshop could be held in 2 hours? Painting = 60 minutes, photography = one hour, drawing = 30 minutes, origami = [1/2] an hour.",
        cubes: { ops: ["÷"], also: ["+"], solve: [{ t: "Change hours to minutes", s: "2 hours = 120 minutes. 120 ÷ 60 = 2 painting or photography workshops. 120 ÷ 30 = 4 drawing or origami workshops." }, { t: "Count on", s: "Jump 60 + 60 to reach 120: 2 workshops. Jump 30 + 30 + 30 + 30 to reach 120: 4 workshops." }] },
        interact: [
          { kind: "jumps", start: 0, end: 120, steps: [30, 60], hint: "Minutes from 0 to 120 (2 hours). Jump by each workshop's length." },
          { kind: "input", fields: [{ label: "Painting", value: 2 }, { label: "Photography", value: 2 }, { label: "Drawing", value: 4 }, { label: "Origami", value: 4 }] }
        ],
        answer: "Painting **2** · Photography **2** · Drawing **4** · Origami **4**. 2 hours = 120 minutes. One hour (60 minutes) fits twice; half an hour (30 minutes) fits 4 times.",
        explain: "The slide's table is cut off at Drawing; the hidden fourth row (origami, [1/2] an hour) is included here."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record the capacities of the containers from smallest to largest capacity. Use millilitres (mL) when recording. Shampoo 500 mL, juice box 250 mL, water bottle 1500 mL, mouthwash 750 mL, olive oil 1000 mL.",
        img: "u30-containers.png",
        interact: [
          { kind: "numberline", min: 0, max: 1600, ticks: 0.02, labelStep: 500, tol: 60, items: [["500 mL", 500], ["250 mL", 250], ["1500 mL", 1500], ["750 mL", 750], ["1000 mL", 1000]] },
          { kind: "order", items: ["shampoo 500 mL", "juice box 250 mL", "water bottle 1500 mL", "mouthwash 750 mL", "olive oil 1000 mL"], answer: [1, 0, 3, 4, 2] }
        ],
        answer: "**250 mL** (juice box), **500 mL** (shampoo), **750 mL** (mouthwash), **1000 mL** (olive oil), **1500 mL** (water bottle)."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Emily spins the spinner. List all the possible outcomes of one spin. What does the term outcome mean in chance experiments?",
        img: "u30-spinner.png",
        cubes: { ops: [], note: "List and describe; there is nothing to calculate.", solve: [{ t: "Look at the spinner", s: "Name each colour section: green, blue, red, yellow. Each one is a possible outcome." }, { t: "Act it out", s: "Spin a paper clip on a pencil many times and record where it lands. Only those 4 colours ever come up." }] },
        interact: [
          { kind: "combos", pick: 1, total: 4, items: [["green", "#6DB33F", 1], ["blue", "#1E9BD7", 1], ["red", "#F0434B", 1], ["yellow", "#FBDC3C", 1]] },
          { kind: "choose", rows: [{ t: "An outcome is", options: ["a possible result of an experiment", "the number of times you spin", "the colour you hope for"], a: 0 }] }
        ],
        answer: "**4 outcomes**: green, blue, red, yellow. An **outcome** is a possible result of a chance experiment, such as where the spinner lands."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record and compare the volume of these 2 objects made from cubic-centimetre blocks.",
        img: "u30-cubes.png",
        interact: [
          { kind: "input", fields: [{ label: "Object 1 (left)", value: 6, suffix: "cm³" }, { label: "Object 2 (right)", value: 4, suffix: "cm³" }] },
          { kind: "choose", rows: [{ t: "Larger volume", options: ["object 1", "object 2", "they are the same"], a: 0 }] }
        ],
        answer: "Object 1: 2 columns of 3 = **6 cm³**. Object 2: 1 column of 4 = **4 cm³**. Object 1 has the larger volume, by **2 cm³**, even though object 2 is taller.",
        explain: "Counted from the slide: object 1 is 2 stacks of 3 blocks side by side; object 2 is 1 stack of 4."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing numbers using place value B",
        prompt: "0.25 is equal to [1/2] because they both contain the numeral 2. Communicate your reasoning.",
        answer: false,
        explain: "Sharing a digit does not make numbers equal. 0.25 is 25 hundredths, which is [1/4]. [1/2] is 0.5 (50 hundredths), so 0.25 is only half of [1/2].",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 20, labelStep: 0.25, tol: 0.03, items: [["0.25", 0.25], ["[1/2]", 0.5]] }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the following as digital times: 20 minutes and 39 seconds, 35 minutes and 10 seconds, 42 seconds.",
        interact: [{ kind: "input", fields: [
          { label: "20 minutes 39 seconds", accept: ["20:39", "0:20:39", "00:20:39"], placeholder: "mm:ss" },
          { label: "35 minutes 10 seconds", accept: ["35:10", "0:35:10", "00:35:10"], placeholder: "mm:ss" },
          { label: "42 seconds", accept: ["0:42", "00:42", "0:00:42", "00:00:42"], placeholder: "mm:ss" }] }],
        answer: "**20:39** · **35:10** · **0:42** (or 00:42). On a stopwatch, the minutes come before the colon and the seconds after it.",
        explain: "These are durations, written as minutes:seconds like a stopwatch."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "The capacities of 5 containers are: 430 mL, 870 mL, 250 mL, 610 mL, 990 mL. Order the containers from smallest to largest capacity.",
        interact: [
          { kind: "numberline", min: 0, max: 1000, ticks: 0.02, labelStep: 250, tol: 40, items: [["430 mL", 430], ["870 mL", 870], ["250 mL", 250], ["610 mL", 610], ["990 mL", 990]] },
          { kind: "order", items: ["430 mL", "870 mL", "250 mL", "610 mL", "990 mL"], answer: [2, 0, 3, 1, 4] }
        ],
        answer: "**250 mL**, **430 mL**, **610 mL**, **870 mL**, **990 mL**. Compare the hundreds digits first."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "A bag contains 5 red, 4 purple and 3 orange marbles. You draw one marble at a time and do not put it back. Which colour is most likely to be drawn first? Why? If you draw a red marble first, how does that affect the likelihood of drawing another red marble next? Which colour is now least likely to be drawn?",
        img: "u30-marbles.png",
        cubes: { ops: ["−"], solve: [{ t: "Compare the counts", s: "Red has the most marbles (5), so it is most likely first. After taking 1 red out: 5 − 1 = 4 red, 4 purple, 3 orange." }, { t: "Act it out", s: "Take one red counter out of a bag of 5 red, 4 purple, 3 orange. Red and purple now have the same number, and orange still has the fewest." }] },
        interact: [
          { kind: "input", fields: [{ label: "Red left after 1 red is drawn", value: 4 }, { label: "Marbles left", value: 11 }] },
          { kind: "choose", rows: [
            { t: "Most likely first", options: ["red", "purple", "orange"], a: 0 },
            { t: "Another red next is", options: ["more likely than before", "less likely than before", "unchanged"], a: 1 },
            { t: "Now least likely", options: ["red", "purple", "orange"], a: 2 }] }
        ],
        answer: "**Red** is most likely first: it has the most marbles (5 of 12). After a red is drawn and not put back, there are **4 red** of 11 left, so another red is **less likely** than before, and red and purple are now equally likely. **Orange** (3) is still the least likely."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Sketch the top, front and side views of the three-dimensional object displayed.",
        img: "u30-prism.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [
            { t: "Top view", options: ["a triangle", "a rectangle", "a circle"], a: 1 },
            { t: "Front view", options: ["a triangle", "a rectangle", "a square pyramid"], a: 1 },
            { t: "Side view", options: ["a triangle", "a rectangle", "a hexagon"], a: 0 }] }
        ],
        answer: "The object is a **triangular prism** lying on a rectangular face. Top view: a **rectangle** (with a line along the ridge). Front view (the long side): a **rectangle**. Side view (the end): a **triangle**.",
        explain: "Front is taken as looking at the long side of the prism, and side as looking at its triangular end."
      }
    ]
  ]
});
