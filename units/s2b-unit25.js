/*
  Stage 2 Year B, Unit 25 — Review of learning (Term 1, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 1, ls: 5, unit: 25,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 25 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "60 × 3 is the same as:",
        options: ["60 groups of 10, 3 tens and 180", "6 groups of 3 tens, 18 tens and 180", "6 groups of 3 tens, 120 tens and 180", "6 groups of 100, 18 tens and 180"],
        answer: 1,
        explain: "60 is 6 tens. 6 tens × 3 = 18 tens, and 18 tens = 180.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: { T: 18 }, hint: "This is 18 tens. Group 10 tens into 1 hundred to see 180." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Write a definition for the term 'statistical question'.",
        interact: [{ kind: "select", hint: "A statistical question has many different answers that we collect as data. Tap every statistical question.", items: [
          ["What is the favourite sport of the students in our class?", true], ["How old is our teacher?", false],
          ["How many hours do Year 4 students sleep each night?", true], ["What colour is my pencil case?", false]] }],
        answer: "A **statistical question** is one that we answer by collecting data, and the answers vary. For example: What is the favourite sport of the students in our class?",
        explain: "The slide asks for a definition only. Sorting example questions gives the class something to check."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the missing fraction parts.",
        interact: [
          { kind: "shade", parts: 2, pre: [1], hint: "Halves: one half is shown. Tap the missing part." },
          { kind: "shade", parts: 3, pre: [0], hint: "Thirds: one third is shown. Tap the missing parts." },
          { kind: "shade", parts: 4, pre: [0, 3], hint: "Quarters: two quarters are shown. Tap the missing parts." },
          { kind: "shade", parts: 8, pre: [0, 5, 6, 7], hint: "Eighths: four eighths are shown. Tap the missing parts." },
          { kind: "input", fields: [{ label: "Halves strip: missing", value: 1 / 2, placeholder: "a/b" }, { label: "Thirds strip: missing", value: 2 / 3, placeholder: "a/b" }, { label: "Quarters strip: missing", value: 2 / 4, placeholder: "a/b" }, { label: "Eighths strip: missing", value: 4 / 8, placeholder: "a/b" }] }
        ],
        answer: "[1/2] · [1/3] + [1/3] = [2/3] · [1/4] + [1/4] = [2/4] · four eighths, [4/8]. Each strip makes 1 whole."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Which scaled instrument would be the most appropriate to use to measure the length of a laptop, a desk and a swimming pool? Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "a laptop", options: ["30 cm ruler", "metre ruler", "tape measure", "trundle wheel"], a: 0 },
          { t: "a desk", options: ["30 cm ruler", "metre ruler", "tape measure", "trundle wheel"], a: [1, 2] },
          { t: "a swimming pool", options: ["30 cm ruler", "metre ruler", "tape measure", "trundle wheel"], a: [3, 2] }] }],
        answer: "Laptop: a **30 cm ruler** (it is shorter than 30 cm or close to it). Desk: a **metre ruler** or tape measure. Swimming pool: a **trundle wheel** or long tape measure, because it is many metres long."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Describe the route from the blue houses to the pond.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u25-map.png" },
          { kind: "choose", rows: [{ t: "The pond is ___ of the blue houses.", options: ["north-east", "south-west", "south-east", "north-west"], a: 1 }] }
        ],
        answer: "Answers vary. For example: from the blue houses, walk south past the red house, then turn west and walk past the hospital to the pond. The pond is **south-west** of the blue houses."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "7 × 10 = 700",
        answer: false,
        explain: "7 × 10 = 70. Each digit moves one place to the left: 7 ones become 7 tens. 700 is 7 × 100.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: 7, shift: true, hint: "Press × 10 once." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Data was collected from students in class KD about their favourite sports. Represent this data in a dot plot.",
        table: [["Sport", "Number of students"], ["Football", "8"], ["AFL", "7"], ["Netball", "4"], ["Tennis", "2"]],
        interact: [
          { kind: "shade", parts: 10, hint: "Football: shade one part for each student." },
          { kind: "shade", parts: 10, hint: "AFL: shade one part for each student." },
          { kind: "shade", parts: 10, hint: "Netball: shade one part for each student." },
          { kind: "shade", parts: 10, hint: "Tennis: shade one part for each student." },
          { kind: "choose", rows: [{ t: "Which sport has the most dots?", options: ["Football", "AFL", "Netball", "Tennis"], a: 0 }] },
          { kind: "input", fields: [{ label: "Students surveyed", value: 21 }] }
        ],
        answer: "A dot plot with one dot for each student: Football 8, AFL 7, Netball 4, Tennis 2. That's 21 students. Each dot stands for 1 student."
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the missing fraction parts.",
        interact: [
          { kind: "shade", parts: 2, pre: [1], hint: "Halves" },
          { kind: "shade", parts: 6, pre: [0, 1, 2], hint: "Sixths" },
          { kind: "shade", parts: 3, pre: [0], hint: "Thirds" },
          { kind: "shade", parts: 10, pre: [0, 1, 2, 3, 4, 5], hint: "Tenths" },
          { kind: "input", fields: [{ label: "Halves strip: missing", value: 1 / 2, placeholder: "a/b" }, { label: "Sixths strip: missing", value: 3 / 6, placeholder: "a/b" }, { label: "Thirds strip: missing", value: 2 / 3, placeholder: "a/b" }, { label: "Tenths strip: missing", value: 4 / 10, placeholder: "a/b" }] }
        ],
        answer: "[1/2] · [3/6] · [2/3] · [4/10]. The parts in each strip make 1 whole."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Which quadrilateral has the greater perimeter?",
        interact: [
          { kind: "sides", label: "Trapezium with sides 6 cm, 5 cm and 10 cm", view: [420, 250], fill: "#E9DDFF",
            poly: [[80, 47], [278, 47], [340, 202], [21, 202]],
            dims: [{ from: [80, 30], to: [278, 30] }, { from: [292, 41], to: [354, 196] }, { from: [21, 222], to: [340, 222] }],
            labels: [{ x: 179, y: 22, t: "6 cm" }, { x: 360, y: 118, t: "5 cm", anchor: "start" }, { x: 180, y: 242, t: "10 cm" }] },
          { kind: "sides", label: "Square with sides of 5 cm", view: [260, 220], fill: "#D9F5E5",
            poly: [[20, 20], [180, 20], [180, 180], [20, 180]],
            dims: [{ from: [200, 22], to: [200, 178] }, { from: [22, 200], to: [178, 200] }],
            labels: [{ x: 210, y: 104, t: "5 cm", anchor: "start" }, { x: 100, y: 216, t: "5 cm" }] },
          { kind: "input", fields: [{ label: "Trapezium perimeter", value: 26, suffix: "cm" }, { label: "Square perimeter", value: 20, suffix: "cm" }] },
          { kind: "choose", rows: [{ t: "Greater perimeter", options: ["the trapezium", "the square"], a: 0 }] }
        ],
        answer: "The **trapezium**: 6 + 5 + 10 + 5 = 26 cm. The square: 4 × 5 = 20 cm.",
        explain: "The trapezium's left side isn't labelled. Both slanted sides are drawn the same, so it is taken as 5 cm."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Name the shapes below that have right angles.",
        interact: [
          { kind: "corners", view: [640, 310], r: 22, q: 30, shapes: [
            { p: [[96, 22], [166, 92], [96, 162], [26, 92]], fill: "#9B3A92", l: "A" },
            { p: [[241, 28], [418, 28], [418, 132], [241, 132]], fill: "#FFC000", l: "B" },
            { p: [[624, 80], [621.9, 96], [615.7, 111], [605.8, 123.8], [593, 133.7], [578, 139.9], [562, 142], [546, 139.9], [531, 133.7], [518.2, 123.8], [508.3, 111], [502.1, 96], [500, 80], [502.1, 64], [508.3, 49], [518.2, 36.2], [531, 26.3], [546, 20.1], [562, 18], [578, 20.1], [593, 26.3], [605.8, 36.2], [615.7, 49], [621.9, 64]], fill: "#00ABC1", l: "C", marks: [] },
            { p: [[128, 182], [241, 182], [241, 293]], fill: "#9BBB4E", l: "D", lx: 210, ly: 215 },
            { p: [[378, 165], [511, 165], [541, 267], [351, 267]], fill: "#F04535", l: "E" }] },
          { kind: "select", hint: "Tap every shape that has a right angle.", items: [["A (square)", true], ["B (rectangle)", true], ["C (circle)", false], ["D (triangle)", true], ["E (trapezium)", false]] }
        ],
        answer: "The **square** (A), the **rectangle** (B) and the **right-angled triangle** (D). The circle has no corners, and the trapezium's angles are not right angles."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "9 × 60 =",
        options: ["480", "460", "540", "54"],
        answer: 2,
        explain: "9 × 6 tens = 54 tens = 540.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: { T: 54 }, hint: "This is 54 tens. Group 10 tens into 1 hundred." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Create a statistical question to ask a group of students about their favourite food.",
        interact: [{ kind: "select", hint: "Tap every question that would collect data about favourite food.", items: [
          ["What is your favourite fruit?", true], ["Do you like pizza?", false], ["Which lunch order is your favourite: wrap, pie, sushi or salad?", true], ["What did I have for breakfast?", false]] }],
        answer: "Answers vary, for example: What is your favourite fruit? A good statistical question lets everyone give an answer and the answers vary.",
        explain: "\"Do you like pizza?\" collects data, but only yes or no about one food, not favourites. It is treated as not the best question here."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Which one does not belong in each group?",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.04, items: [["[3/5]", 0.6], ["[1/2]", 0.5], ["[4/8]", 0.5], ["[6/8]", 0.75], ["[4/6]", 2 / 3], ["[2/5]", 0.4], ["[4/10]", 0.4], ["[2/3]", 2 / 3]] },
          { kind: "choose", rows: [
            { t: "Group 1", options: ["3-fifths", "one-half", "4-eighths"], a: 0 },
            { t: "Group 2", options: ["3-quarters", "6-eighths", "4-sixths"], a: 2 },
            { t: "Group 3", options: ["4-tenths", "one-half", "2-fifths"], a: 1 },
            { t: "Group 4", options: ["4-sixths", "2-thirds", "3-fifths"], a: 2 }] }
        ],
        answer: "Group 1: **3-fifths** (one-half = 4-eighths). Group 2: **4-sixths** (3-quarters = 6-eighths). Group 3: **one-half** (4-tenths = 2-fifths). Group 4: **3-fifths** (4-sixths = 2-thirds).",
        explain: "The slide shows four groups. Each group has two equivalent fractions and one that does not belong."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "The perimeter of this rectangle is 30 cm. One side is 8 cm. What is the length of side A?",
        interact: [
          { kind: "sides", label: "Rectangle with one side 8 cm and side A", view: [380, 340], fill: "#E1F1FB",
            poly: [[80, 20], [300, 20], [300, 295], [80, 295]],
            dims: [{ from: [60, 22], to: [60, 293] }, { from: [82, 315], to: [298, 315] }],
            labels: [{ x: 50, y: 162, t: "8 cm", anchor: "end" }, { x: 190, y: 336, t: "A" }] },
          { kind: "input", fields: [{ label: "Side A", value: 7, suffix: "cm" }] }
        ],
        cubes: { ops: ["−", "÷"], solve: [{ t: "Take away the two 8 cm sides", s: "30 − 8 − 8 = 14 cm for the other two sides. 14 ÷ 2 = 7 cm." }, { t: "Use half the perimeter", s: "One length and one width make half the perimeter: 30 ÷ 2 = 15. 15 − 8 = 7 cm." }] },
        answer: "**7 cm**. 8 + 7 + 8 + 7 = 30 cm."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "This arrow points right. If it moves one quarter turn clockwise, draw what it would look like.",
        interact: [
          { kind: "turns" },
          { kind: "choose", rows: [{ t: "After a quarter turn clockwise, the arrow points", options: ["up", "down", "left", "right"], a: 1 }] },
          { kind: "sketch" }
        ],
        answer: "The arrow points **down**. A quarter turn clockwise moves it like the hands of a clock: right → down.",
        explain: "The turning tool's first arrow points up. Press once so it points right like the slide's arrow, then once more."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "30 × 4 = 3 × 10 × 4 = 12 × 10 = 120",
        answer: true,
        explain: "30 is 3 tens. 3 × 4 = 12, so 12 tens = 120.",
        interact: [{ kind: "pv", cols: ["H", "T", "O"], start: 12, shift: true, hint: "This is 12. Press × 10 to make 12 tens." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Label each axis of the column graph. Create a title for the column graph.",
        interact: [
          { kind: "bargraph", max: 6, step: 1, label: "Column graph of favourite sports with no labels", legendW: 20, series: [{ l: "", c: "#2F6FE4" }],
            groups: [{ l: "soccer", v: [6] }, { l: "tennis", v: [1] }, { l: "cricket", v: [4] }, { l: "netball", v: [4] }, { l: "hockey", v: [1] }, { l: "AFL", v: [3] }, { l: "rugby", v: [5] }] },
          { kind: "choose", rows: [
            { t: "Label for the horizontal axis", options: ["Sport", "Number of students"], a: 0 },
            { t: "Label for the vertical axis", options: ["Sport", "Number of students"], a: 1 }] }
        ],
        answer: "Horizontal axis: **Sport**. Vertical axis: **Number of students**. Title (answers vary): Our class's favourite sports.",
        explain: "The last bar on the slide is \"rugby league\". It is shortened to \"rugby\" so the labels fit."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Draw fraction strips to show which is bigger: [3/4] or [5/8]?",
        interact: [
          { kind: "shade", parts: 4, hint: "Shade 3 quarters." },
          { kind: "shade", parts: 8, hint: "Shade 5 eighths." },
          { kind: "choose", rows: [{ t: "Bigger", options: ["[3/4]", "[5/8]"], a: 0 }] }
        ],
        answer: "**[3/4]** is bigger. [3/4] = [6/8], and [6/8] is more than [5/8]."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert 105 millimetres into centimetres, and 27 centimetres into millimetres.",
        interact: [
          { kind: "marker", min: 0, max: 15, ticks: 1, minor: 10, target: 10.5, tol: 0.15, label: "105 mm" },
          { kind: "input", fields: [{ label: "105 mm =", value: 10.5, suffix: "cm" }, { label: "27 cm =", value: 270, suffix: "mm" }] }
        ],
        answer: "105 mm = **10.5 cm** (10 cm and 5 mm). 27 cm = **270 mm**. There are 10 mm in 1 cm."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Which of the following items is about a kilogram? banana, glue stick, laptop, a bucket of water, pencil case, you",
        interact: [{ kind: "select", hint: "Tap the items that are about 1 kg.", items: [["banana", false], ["glue stick", false], ["laptop", true], ["a bucket of water", false], ["pencil case", false], ["you", false]] }],
        answer: "The **laptop** (about 1 to 2 kg). A banana, glue stick and pencil case are much lighter. A bucket of water and you are much heavier.",
        explain: "A full pencil case can weigh up to about half a kilogram, so the laptop is taken as the best answer."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "146, 155, 164, 173. This pattern increases…",
        options: ["by 8", "by 9", "by 7", "by 10"],
        answer: 1,
        explain: "146 + 9 = 155, 155 + 9 = 164, 164 + 9 = 173.",
        interact: [{ kind: "jumps", start: 146, steps: [1, 9, 10], hint: "Jump from 146 to 155. How big was the jump?" }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Which season had the most bike riders use the extreme trail? Which season had the most bike riders use the intermediate trail? Which season had the least bike riders use the easy trail?",
        img: "u25-trails.png",
        interact: [
          { kind: "bargraph", max: 200, step: 50, minor: 10, ylabel: "Riders", xlabel: "Season", label: "The four graphs redrawn on one scale", legendW: 150, hint: "The same data on one scale. Tap a bar to run a line across to the scale.",
            series: [{ l: "Easy", c: "#4CC764" }, { l: "Intermediate", c: "#356DF8" }, { l: "Difficult", c: "#BFC8CF" }, { l: "Extreme", c: "#24272B" }],
            groups: [{ l: "Summer", v: [145, 186, 85, 44] }, { l: "Autumn", v: [145, 160, 85, 55] }, { l: "Winter", v: [92, 75, 23, 14] }, { l: "Spring", v: [88, 134, 175, 114] }] },
          { kind: "choose", rows: [
            { t: "Most riders on the extreme trail", options: ["summer", "autumn", "winter", "spring"], a: 3 },
            { t: "Most riders on the intermediate trail", options: ["summer", "autumn", "winter", "spring"], a: 0 },
            { t: "Least riders on the easy trail", options: ["summer", "autumn", "winter", "spring"], a: 3 }] }
        ],
        answer: "Extreme trail: **spring** (about 115 riders). Intermediate trail: **summer** (about 185). Easy trail, least: **spring** (about 88, just under winter's 92).",
        explain: "Watch the scales: the winter graph goes up to 100, the others to 200. Read from the pictures, spring's easy bar is about 88 and winter's is about 92."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Draw fraction strips to show how these fractions are equivalent: 2-quarters and 1-half.",
        interact: [
          { kind: "shade", parts: 4, hint: "Shade 2 quarters." },
          { kind: "shade", parts: 2, hint: "Shade 1 half." },
          { kind: "choose", rows: [{ t: "Do they cover the same amount?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes**. 2 quarters cover exactly the same part of the strip as 1 half: [2/4] = [1/2]."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record if the following activities would be measured in minutes or seconds.",
        interact: [{ kind: "choose", rows: [
          { t: "Reading a short story", options: ["minutes", "seconds"], a: 0 },
          { t: "Taking a shower", options: ["minutes", "seconds"], a: 0 },
          { t: "Counting to 20", options: ["minutes", "seconds"], a: 1 },
          { t: "Eating lunch", options: ["minutes", "seconds"], a: 0 }] }],
        answer: "Reading a short story: minutes · Taking a shower: minutes · Counting to 20: **seconds** · Eating lunch: minutes"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "This net can be folded to make a three-dimensional object. What object will it make when folded? Describe the faces, edges and vertices of the object.",
        interact: [
          { kind: "classify", view: [330, 255], cats: [{ k: "f", t: "Faces", c: "#F2994A" }], hint: "Tap each face of the net to count it.",
            shapes: [
              { p: "17,90 91,90 91,165 17,165", a: "f", fill: "#EEF2F8", deco: "<polygon points='17,90 91,90 91,165 17,165' fill='none' stroke='#17233F' stroke-width='2' pointer-events='none'/>" }, { p: "91,90 165,90 165,165 91,165", a: "f", fill: "#EEF2F8", deco: "<polygon points='91,90 165,90 165,165 91,165' fill='none' stroke='#17233F' stroke-width='2' pointer-events='none'/>" },
              { p: "165,90 239,90 239,165 165,165", a: "f", fill: "#EEF2F8", deco: "<polygon points='165,90 239,90 239,165 165,165' fill='none' stroke='#17233F' stroke-width='2' pointer-events='none'/>" }, { p: "239,90 313,90 313,165 239,165", a: "f", fill: "#EEF2F8", deco: "<polygon points='239,90 313,90 313,165 239,165' fill='none' stroke='#17233F' stroke-width='2' pointer-events='none'/>" },
              { p: "239,15 313,15 313,90 239,90", a: "f", fill: "#EEF2F8", deco: "<polygon points='239,15 313,15 313,90 239,90' fill='none' stroke='#17233F' stroke-width='2' pointer-events='none'/>" }, { p: "239,165 313,165 313,240 239,240", a: "f", fill: "#EEF2F8", deco: "<polygon points='239,165 313,165 313,240 239,240' fill='none' stroke='#17233F' stroke-width='2' pointer-events='none'/>" }] },
          { kind: "choose", rows: [{ t: "Object", options: ["cube", "triangular prism", "square pyramid", "cylinder"], a: 0 }] },
          { kind: "input", fields: [{ label: "Faces", value: 6 }, { label: "Edges", value: 12 }, { label: "Vertices", value: 8 }] }
        ],
        answer: "A **cube**: 6 square faces, 12 edges and 8 vertices."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "94, 104, 114, 124. This pattern increases by multiples of 10.",
        answer: true,
        explain: "Each number is 10 more than the one before. The numbers themselves are not multiples of 10, but each jump is 10.",
        interact: [{ kind: "jumps", start: 94, steps: [10], hint: "Jump + 10 from 94." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Write a definition for the term 'many-to-one scale'.",
        interact: [{ kind: "choose", rows: [
          { t: "1 picture = 1 student", options: ["one-to-one", "many-to-one"], a: 0 },
          { t: "1 picture = 5 students", options: ["one-to-one", "many-to-one"], a: 1 },
          { t: "Each step on a column graph = 10 people", options: ["one-to-one", "many-to-one"], a: 1 }] }],
        answer: "A **many-to-one scale** is when one symbol or one step on a graph stands for more than one thing, for example 1 picture = 5 students.",
        explain: "The slide asks for a definition only. Sorting examples gives the class something to check."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "How many quarters make one and 3-quarters? How many wholes do 12-sixths make? Communicate your reasoning.",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2, 3], hint: "One whole" },
          { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "3 quarters" },
          { kind: "shade", parts: 6, pre: [0, 1, 2, 3, 4, 5], hint: "6 sixths" },
          { kind: "shade", parts: 6, pre: [0, 1, 2, 3, 4, 5], hint: "6 more sixths" },
          { kind: "input", fields: [{ label: "One and 3-quarters =", value: 7, suffix: "quarters" }, { label: "12-sixths =", value: 2, suffix: "wholes" }] }
        ],
        answer: "**7 quarters**: 4 quarters make 1 whole, plus 3 more. **2 wholes**: 6 sixths make 1 whole, so 12 sixths make 2."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Daniella sets her timer for 2 minutes. How many seconds until the timer rings?",
        interact: [
          { kind: "jumps", start: 0, steps: [60, 30, 10], hint: "1 minute is 60 seconds. Jump + 60 for each minute." },
          { kind: "input", fields: [{ label: "Seconds", value: 120 }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Multiply", s: "1 minute = 60 seconds. 2 × 60 = 120 seconds." }, { t: "Add the minutes", s: "60 + 60 = 120 seconds." }] },
        answer: "**120 seconds**"
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "How many minutes are in two and a half hours?",
        interact: [
          { kind: "jumps", start: 0, steps: [60, 30], hint: "Jump + 60 for each hour and + 30 for the half hour." },
          { kind: "input", fields: [{ label: "Minutes", value: 150 }] }
        ],
        answer: "**150 minutes**. 60 + 60 + 30 = 150."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "An example of an increasing number pattern by a constant amount is:",
        options: ["44, 55, 66, 77, 88", "45, 76, 89, 100", "23, 25, 27, 30", "59, 63, 66, 67"],
        answer: 0,
        explain: "44, 55, 66, 77, 88 goes up by 11 every time. The others go up by different amounts.",
        interact: [{ kind: "jumps", start: 44, steps: [11], hint: "Jump + 11 from 44." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "She sells seashells by the seashore. Use tally marks to create a table identifying how many times each letter appears in the sentence.",
        interact: [{ kind: "cells", cols: 2, w: 130, msg: "Count each letter again. Capital S counts as an s.", grid: [
          ["#Letter", "#Count"], ["s", { v: 8 }], ["h", { v: 4 }], ["e", { v: 7 }], ["l", { v: 4 }], ["a", { v: 2 }],
          ["b", { v: 1 }], ["y", { v: 1 }], ["t", { v: 1 }], ["o", { v: 1 }], ["r", { v: 1 }]] }],
        answer: "s 8 · e 7 · h 4 · l 4 · a 2 · b, y, t, o, r 1 each. That's 30 letters.",
        explain: "The capital S in \"She\" is counted as an s."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "How many thirds in one and 2-thirds?",
        interact: [
          { kind: "shade", parts: 3, pre: [0, 1, 2], hint: "One whole" },
          { kind: "shade", parts: 3, pre: [0, 1], hint: "2 thirds" },
          { kind: "input", fields: [{ label: "One and 2-thirds =", value: 5, suffix: "thirds" }] }
        ],
        answer: "**5 thirds**. 3 thirds make 1 whole, plus 2 more thirds: [5/3]."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record these digital times in words: 01:30, 11:45, 06:15, 04:15",
        interact: [
          { kind: "clock", time: "1:30", drag: true },
          { kind: "choose", rows: [
            { t: "01:30", options: ["half past one", "quarter past one", "half past twelve"], a: 0 },
            { t: "11:45", options: ["quarter past eleven", "quarter to twelve", "quarter to eleven"], a: 1 },
            { t: "06:15", options: ["quarter past six", "quarter to six", "half past six"], a: 0 },
            { t: "04:15", options: ["quarter to four", "quarter past four", "half past four"], a: 1 }] }
        ],
        answer: "01:30 half past one · 11:45 quarter to twelve · 06:15 quarter past six · 04:15 quarter past four"
      },
      {
        type: "sr", focus: "Geometric measure: Length",
        prompt: "Record the length of this paper clip in millimetres.",
        img: "u25-clip.png",
        interact: [
          { kind: "jumps", start: 0, steps: [10, 1], hint: "Jump + 10 for each whole centimetre, then + 1 for each millimetre." },
          { kind: "input", fields: [{ label: "Length", min: 27, max: 29, suffix: "mm" }] }
        ],
        answer: "About **28 mm** (2 cm and 8 mm).",
        explain: "Read from the picture, the clip ends at about 2.8 cm, so 27 mm to 29 mm is accepted."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "An example of a decreasing number pattern by a constant amount is: 134, 130, 126, 122",
        answer: true,
        explain: "Each number is 4 less than the one before.",
        interact: [{ kind: "jumps", start: 134, back: true, steps: [4], hint: "Jump back 4 from 134." }]
      },
      {
        type: "sr", focus: "Data B",
        prompt: "What makes data representations in the media effective?",
        interact: [{ kind: "select", hint: "Tap the features that make a graph easy to read and trust.", items: [
          ["a clear title", true], ["labelled axes", true], ["a scale that starts at 0", true], ["a key when colours are used", true],
          ["lots of decorations and 3D effects", false], ["a scale that skips numbers to make bars look bigger", false]] }],
        answer: "Answers vary. An effective graph has a clear title, labelled axes, an even scale that starts at 0, a key if needed, and no clutter. The data should be easy to read and not misleading.",
        explain: "The slide is open-ended. The list gives the class features to sort and discuss."
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "How many wholes can you make with 5-halves? How many halves will be left over? How can we represent 5-halves as wholes and fractions? Record your thinking.",
        interact: [
          { kind: "shade", parts: 2, pre: [0, 1], hint: "2 halves" },
          { kind: "shade", parts: 2, pre: [0, 1], hint: "2 more halves" },
          { kind: "shade", parts: 2, pre: [0], hint: "1 more half" },
          { kind: "input", fields: [{ label: "Wholes", value: 2 }, { label: "Halves left over", value: 1 }, { label: "5-halves =", value: 2.5, placeholder: "e.g. 2 1/2" }] }
        ],
        answer: "**2 wholes** and **1 half** left over. 5-halves = 2[1/2]."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "How long is left until twelve o'clock for the following times? 11:55 and 11:44",
        interact: [
          { kind: "jumps", time: true, start: 704, end: 720, steps: [1, 5, 10], hint: "Start at 11:44. Jump to the next 5 minutes, then on to 12:00." },
          { kind: "input", fields: [{ label: "From 11:55", value: 5, suffix: "minutes" }, { label: "From 11:44", value: 16, suffix: "minutes" }] }
        ],
        answer: "11:55 → **5 minutes** · 11:44 → **16 minutes** (1 minute to 11:45, then 15 more)."
      },
      {
        type: "sr", focus: "Geometric measure: Angles",
        prompt: "Record three angles found in your classroom.",
        interact: [
          { kind: "angle", start: 120, label: "Make each angle with the arm." },
          { kind: "choose", rows: [
            { t: "The corner of a book", options: ["less than a right angle", "a right angle", "greater than a right angle"], a: 1 },
            { t: "Scissors opened a little", options: ["less than a right angle", "a right angle", "greater than a right angle"], a: 0 },
            { t: "A laptop opened wide", options: ["less than a right angle", "a right angle", "greater than a right angle"], a: 2 }] }
        ],
        answer: "Answers vary. For example: the corner of a book or desk (a right angle), scissors opened a little (less than a right angle), a laptop opened wide (greater than a right angle).",
        explain: "The slide is open-ended. Classroom examples are given so the class can compare each with a right angle."
      }
    ]
  ]
});
