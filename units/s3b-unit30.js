/*
  Stage 3 Year B, Unit 30 — Review of learning (Term 2, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 2, ls: 5, unit: 30,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 30 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "[2/5] of this ribbon is 14 metres long. How long is the ribbon?",
        options: ["14 m", "35 m", "70 m", "7 m"],
        answer: 1,
        explain: "[2/5] is 14 m, so [1/5] is 14 ÷ 2 = 7 m. The whole ribbon is 5 fifths: 5 × 7 = 35 m.",
        interact: [{ kind: "bar", hint: "The top bar is the whole ribbon. Tap each ? to reveal one fifth.", whole: { v: 35, l: "35 m", n: "whole ribbon", hide: true }, parts: [{ v: 14, l: "14 m", n: "[2/5]" }, { v: 7, l: "7 m", n: "[1/5]", hide: true }, { v: 7, l: "7 m", n: "[1/5]", hide: true }, { v: 7, l: "7 m", n: "[1/5]", hide: true }] }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Explain why a protractor has 2 scales.",
        img: "u30-protractor.png",
        interact: [{ kind: "choose", rows: [{ t: "A protractor has 2 scales because…", options: ["you can measure an angle from either side: each scale starts at 0° on a different arm", "one scale is for big angles and one is for small angles", "one scale is in degrees and one is in centimetres"], a: 0 }] }],
        answer: "The two scales both run from **0° to 180°**, but in opposite directions. Line up 0° with one arm of the angle, whichever side it is on, and read the scale that starts at that 0°."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name the type of prism.",
        img: "u30-prism.png",
        interact: [{ kind: "choose", rows: [{ t: "This is a…", options: ["triangular prism", "rectangular prism", "pentagonal prism", "hexagonal prism", "pentagonal pyramid"], a: 2 }] }],
        answer: "A **pentagonal prism**. Its two matching ends are pentagons (5 sides), joined by 5 rectangular faces. A prism is named after the shape of its ends."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the coordinates of each animal on the first quadrant of the Cartesian plane: rhinoceros, crocodile, shark, ostrich.",
        interact: [
          { kind: "plane", range: [0, 7, 0, 7], points: [{ l: "Rhinoceros", x: 1, y: 6 }, { l: "Crocodile", x: 4, y: 4 }, { l: "Shark", x: 2, y: 2 }, { l: "Ostrich", x: 6, y: 1 }] },
          { kind: "input", fields: [
            { label: "Rhinoceros x", value: 1 }, { label: "y", value: 6 },
            { label: "Crocodile x", value: 4 }, { label: "y", value: 4 },
            { label: "Shark x", value: 2 }, { label: "y", value: 2 },
            { label: "Ostrich x", value: 6 }, { label: "y", value: 1 }] }
        ],
        answer: "Rhinoceros **(1, 6)** · Crocodile **(4, 4)** · Shark **(2, 2)** · Ostrich **(6, 1)**. Go across the x-axis first, then up the y-axis.",
        explain: "The animal pictures are redrawn as labelled points in the same positions on the plane."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "“Cool Cola is more popular than Super Soda.” Do you agree or disagree? Communicate your reasoning.",
        interact: [
          { kind: "bargraph", line: true, max: 700, step: 100, ylabel: "Drinks sold (thousands)", xlabel: "Month (2023)", label: "2023 drink sales: drinks sold by each company each month", legendW: 160,
            series: [{ l: "Cool Cola", c: "#C8102E" }, { l: "Super Soda", c: "#1F6FEB" }],
            groups: [{ l: "Apr", v: [100, 300] }, { l: "May", v: [150, 320] }, { l: "Jun", v: [300, 350] }, { l: "Jul", v: [500, 365] }, { l: "Aug", v: [700, 385] }, { l: "Sep", v: [300, 200] }, { l: "Oct", v: [400, 565] }, { l: "Nov", v: [170, 670] }] },
          { kind: "choose", rows: [
            { t: "Do you agree?", options: ["Agree", "Disagree"], a: 1 },
            { t: "Why?", options: ["Super Soda sold more drinks in total over the 8 months", "Cool Cola had the highest month (August)", "Cool Cola's line is red"], a: 0 }] }
        ],
        answer: "**Disagree.** Cool Cola sold more in July to October and had the single best month (about 700 000 in August), but Super Soda sold more in April, May, June and November. In total Super Soda sold about **3 150 000** drinks and Cool Cola about **2 620 000**.",
        explain: "Values are read from the slide's graph to the nearest 5000 or so and plotted in thousands (700 = 700 000). Accept a reasoned answer either way if students argue about a particular month (for example, Cool Cola was more popular in winter), but over the whole period the claim isn't supported."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "The chocolate bar is [4/5] of the whole bar and it is 24 cm long. The whole chocolate bar is 30 cm.",
        answer: true,
        explain: "4 fifths are 24 cm, so 1 fifth is 24 ÷ 4 = 6 cm. The whole bar is 5 × 6 = 30 cm.",
        interact: [{ kind: "bar", hint: "The top bar is the whole chocolate bar. Tap a ? to reveal it.", whole: { v: 30, l: "30 cm", n: "whole bar", hide: true }, parts: [{ v: 24, l: "24 cm", n: "[4/5]" }, { v: 6, l: "6 cm", n: "[1/5]", hide: true }] }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Which 2 lines are perpendicular?",
        img: "u30-lines.png",
        interact: [{ kind: "choose", rows: [{ t: "Perpendicular lines", options: ["A and B", "A and C", "B and D", "C and D", "A and D"], a: 2 }] }],
        answer: "**B and D**. Line B is vertical and line D is horizontal, so they meet at a right angle (90°)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name the shape this net would create.",
        img: "u30-net.png",
        interact: [{ kind: "choose", rows: [{ t: "This net folds into a…", options: ["cube", "rectangular prism", "triangular prism", "square pyramid"], a: 1 }] }],
        answer: "A **rectangular prism**. The net has 6 rectangular faces in 3 matching pairs: 4 long faces in a row, and an end face on the top and bottom."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates of each animal on the Cartesian plane: rooster, pig, cow, goat.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "Rooster", x: -4, y: 4 }, { l: "Pig", x: 1, y: 1 }, { l: "Cow", x: -3, y: -3 }, { l: "Goat", x: 4, y: -5 }] },
          { kind: "input", fields: [
            { label: "Rooster x", value: -4 }, { label: "y", value: 4 },
            { label: "Pig x", value: 1 }, { label: "y", value: 1 },
            { label: "Cow x", value: -3 }, { label: "y", value: -3 },
            { label: "Goat x", value: 4 }, { label: "y", value: -5 }] }
        ],
        answer: "Rooster **(−4, 4)** · Pig **(1, 1)** · Cow **(−3, −3)** · Goat **(4, −5)**. Across the x-axis first, then up or down.",
        explain: "The animal pictures are redrawn as labelled points in the same positions. The x and y values go in separate boxes so the negative signs are checked."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Convert between kilograms and tonnes: 2.75 t, 0.25 t, 5250 kg",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 2.75, shift: true, hint: "1 t = 1000 kg. Tonnes to kilograms: × 1000. Kilograms to tonnes: ÷ 1000." },
          { kind: "input", fields: [{ label: "2.75 t =", value: 2750, suffix: "kg" }, { label: "0.25 t =", value: 250, suffix: "kg" }, { label: "5250 kg =", value: 5.25, suffix: "t" }] }
        ],
        answer: "2.75 t = **2750 kg** · 0.25 t = **250 kg** · 5250 kg = **5.25 t**. There are 1000 kg in a tonne."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "You are unsure if a rug will fit your lounge room. You know that [3/4] of the rug is 96 cm. How long is the whole rug?",
        options: ["128 cm", "384 cm", "72 cm", "32 cm"],
        answer: 0,
        explain: "[3/4] is 96 cm, so [1/4] is 96 ÷ 3 = 32 cm. The whole rug is 4 × 32 = 128 cm. (32 cm is only one quarter; 72 cm is [3/4] of 96.)",
        interact: [{ kind: "bar", whole: { v: 128, l: "128 cm", n: "whole rug", hide: true }, parts: [{ v: 96, l: "96 cm", n: "[3/4]" }, { v: 32, l: "32 cm", n: "[1/4]", hide: true }] }],
        cubes: { ops: ["÷", "×"], solve: [{ t: "Find one quarter", s: "96 ÷ 3 = 32 cm is one quarter. 4 quarters: 4 × 32 = 128 cm." }, { t: "Add the missing part", s: "Three quarters is 96 cm. Add one more quarter (32 cm): 96 + 32 = 128 cm." }] }
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the size of the orange angle. Communicate your reasoning.",
        img: "u30-angle1.png",
        interact: [{ kind: "input", fields: [{ label: "Orange angle", value: 60, suffix: "°" }] }],
        answer: "**60°**. The two black arms make a right angle (90°). The blue angle is 30°, so the orange angle is 90° − 30° = 60°."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Draw the top, front and side view of this 3D object.",
        img: "u30-object.png",
        interact: [{ kind: "classify", view: [650, 200], label: "Grids for the front, side and top views", hint: "Tap a square to shade it. Start from the bottom-left corner of each grid.",
          cats: [{ k: "v", t: "Shaded", c: "#2F6FE4" }],
          shapes: [
            { p: "22,42 68,42 68,88 22,88", fill: "#E3E9F4", deco: "<text x='120' y='28' class='co-lab'>Front</text>" },
            { p: "72,42 118,42 118,88 72,88", fill: "#E3E9F4" },
            { p: "122,42 168,42 168,88 122,88", fill: "#E3E9F4" },
            { p: "172,42 218,42 218,88 172,88", fill: "#E3E9F4" },
            { p: "22,92 68,92 68,138 22,138", fill: "#E3E9F4", a: "v" },
            { p: "72,92 118,92 118,138 72,138", fill: "#E3E9F4" },
            { p: "122,92 168,92 168,138 122,138", fill: "#E3E9F4" },
            { p: "172,92 218,92 218,138 172,138", fill: "#E3E9F4" },
            { p: "22,142 68,142 68,188 22,188", fill: "#E3E9F4", a: "v" },
            { p: "72,142 118,142 118,188 72,188", fill: "#E3E9F4", a: "v" },
            { p: "122,142 168,142 168,188 122,188", fill: "#E3E9F4", a: "v" },
            { p: "172,142 218,142 218,188 172,188", fill: "#E3E9F4" },
            { p: "252,42 298,42 298,88 252,88", fill: "#E3E9F4", deco: "<text x='325' y='28' class='co-lab'>Side</text>" },
            { p: "302,42 348,42 348,88 302,88", fill: "#E3E9F4" },
            { p: "352,42 398,42 398,88 352,88", fill: "#E3E9F4" },
            { p: "252,92 298,92 298,138 252,138", fill: "#E3E9F4", a: "v" },
            { p: "302,92 348,92 348,138 302,138", fill: "#E3E9F4", a: "v" },
            { p: "352,92 398,92 398,138 352,138", fill: "#E3E9F4" },
            { p: "252,142 298,142 298,188 252,188", fill: "#E3E9F4", a: "v" },
            { p: "302,142 348,142 348,188 302,188", fill: "#E3E9F4", a: "v" },
            { p: "352,142 398,142 398,188 352,188", fill: "#E3E9F4" },
            { p: "432,42 478,42 478,88 432,88", fill: "#E3E9F4", deco: "<text x='530' y='28' class='co-lab'>Top</text>" },
            { p: "482,42 528,42 528,88 482,88", fill: "#E3E9F4" },
            { p: "532,42 578,42 578,88 532,88", fill: "#E3E9F4" },
            { p: "582,42 628,42 628,88 582,88", fill: "#E3E9F4" },
            { p: "432,92 478,92 478,138 432,138", fill: "#E3E9F4", a: "v" },
            { p: "482,92 528,92 528,138 482,138", fill: "#E3E9F4", a: "v" },
            { p: "532,92 578,92 578,138 532,138", fill: "#E3E9F4", a: "v" },
            { p: "582,92 628,92 628,138 582,138", fill: "#E3E9F4" },
            { p: "432,142 478,142 478,188 432,188", fill: "#E3E9F4", a: "v" },
            { p: "482,142 528,142 528,188 482,188", fill: "#E3E9F4", a: "v" },
            { p: "532,142 578,142 578,188 532,188", fill: "#E3E9F4", a: "v" },
            { p: "582,142 628,142 628,188 582,188", fill: "#E3E9F4" }] }],
        answer: "**Front:** 3 squares in a row with 1 more square on top at the left (an L shape). **Side:** a 2 by 2 square (the object is 2 cubes deep and 2 cubes high at the back). **Top:** a 3 by 2 rectangle of 6 squares.",
        explain: "The object is 3 cubes wide and 2 cubes deep, with the left-hand column 2 cubes high. The grids are spare-sized on purpose so students decide how many squares each view needs; the check expects each view drawn from the bottom-left corner (front of the object at the bottom of the top view)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Describe the changes to coordinates when a point is reflected across an axis. The red point is at (−3, 2).",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "P", x: -3, y: 2 }], hint: "Tap P to read its coordinates. Then tap the grid to plot where P lands after each reflection." },
          { kind: "input", fields: [
            { label: "Reflected across the x-axis: x", value: -3 }, { label: "y", value: -2 },
            { label: "Reflected across the y-axis: x", value: 3 }, { label: "y", value: 2 }] },
          { kind: "choose", rows: [
            { t: "Across the x-axis…", options: ["the y-coordinate changes sign", "the x-coordinate changes sign", "nothing changes"], a: 0 },
            { t: "Across the y-axis…", options: ["the y-coordinate changes sign", "the x-coordinate changes sign", "nothing changes"], a: 1 }] }
        ],
        answer: "Across the **x-axis**: (−3, 2) → **(−3, −2)**, the y-coordinate changes sign. Across the **y-axis**: (−3, 2) → **(3, 2)**, the x-coordinate changes sign. The point stays the same distance from the mirror axis.",
        explain: "The point is read from the slide's plane at (−3, 2)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Describe the arrangement of cubic-centimetre blocks in terms of layers.",
        img: "u30-layers.png",
        interact: [
          { kind: "array", rows: 2, cols: 4 },
          { kind: "input", fields: [{ label: "Cubes in one layer", value: 8 }, { label: "Number of layers", value: 4 }, { label: "Volume", value: 32, suffix: "cm³" }] }
        ],
        answer: "Each layer is **4 cubes long and 2 cubes wide: 8 cubes**. There are **4 layers**, so 4 × 8 = **32 cubic centimetres**.",
        explain: "Counted from the slide's picture: 4 cubes along the front, 2 along the side, 4 high. The array shows one layer from above."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "You know that [3/5] of the stick is 18 cm. This means the whole stick is 35 cm.",
        answer: false,
        explain: "[3/5] is 18 cm, so [1/5] is 18 ÷ 3 = 6 cm. The whole stick is 5 × 6 = 30 cm, not 35 cm.",
        interact: [{ kind: "bar", whole: { v: 30, l: "30 cm", n: "whole stick", hide: true }, parts: [{ v: 18, l: "18 cm", n: "[3/5]" }, { v: 6, l: "6 cm", n: "[1/5]", hide: true }, { v: 6, l: "6 cm", n: "[1/5]", hide: true }] }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the size of the orange angle. Communicate your reasoning.",
        img: "u30-angle2.png",
        interact: [
          { kind: "expr", count: 1, target: 120, placeholder: "e.g. 360 − 30 − …" },
          { kind: "input", fields: [{ label: "Orange angle", value: 120, suffix: "°" }] }
        ],
        answer: "**120°**. Angles at a point add to 360°. 30° + 70° + 80° + 60° = 240°, so the orange angle is 360° − 240° = 120°."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name the type of pyramid.",
        img: "u30-pyramid.png",
        interact: [{ kind: "choose", rows: [{ t: "This is a…", options: ["triangular pyramid", "square pyramid", "pentagonal pyramid", "hexagonal pyramid", "pentagonal prism"], a: 2 }] }],
        answer: "A **pentagonal pyramid**. Its base is a pentagon (5 sides) and 5 triangular faces meet at the apex. A pyramid is named after the shape of its base."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Describe the changes to coordinates when this point is translated 6 units left, across the y-axis.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "Q", x: 5, y: 1 }], hint: "Tap Q to read it. Count 6 squares to the left and tap where Q lands." },
          { kind: "input", fields: [{ label: "Q starts at x", value: 5 }, { label: "y", value: 1 }, { label: "After the translation x", value: -1 }, { label: "y", value: 1 }] },
          { kind: "choose", rows: [{ t: "What changes?", options: ["Only the x-coordinate (it goes down by 6)", "Only the y-coordinate", "Both coordinates change sign"], a: 0 }] }
        ],
        answer: "(5, 1) → **(−1, 1)**. Sliding left changes only the **x-coordinate**: 5 − 6 = −1. The y-coordinate stays 1 because the point doesn't move up or down.",
        explain: "The slide asks about a translation \"across an axis\" without saying how far or which way, so there was no single answer. The move is set as 6 units left so the point crosses the y-axis."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "A rectangular prism is built using 1 cm cubes. One layer has 12 cubes. The prism has 5 layers. What is the volume of the prism?",
        interact: [
          { kind: "array", rows: 3, cols: 4 },
          { kind: "input", fields: [{ label: "Volume", value: 60, suffix: "cm³" }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Layers × cubes", s: "5 layers of 12 cubes: 5 × 12 = 60 cubes = 60 cm³." }, { t: "Repeated addition", s: "12 + 12 + 12 + 12 + 12 = 60 cm³." }] },
        answer: "**60 cm³**. 5 layers × 12 cubes = 60 cubes, and each cube is 1 cm³.",
        explain: "The array shows one possible layer of 12 cubes (3 by 4). Any 12-cube layer gives the same volume."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "Which strategy is most efficient to calculate 398 + 276?",
        options: ["Add 398 + 200, then +70, then +6", "Round 398 to 400, add 276, then subtract 2", "Use repeated addition of 10", "Write the numbers in words and estimate"],
        answer: 1,
        explain: "398 is just 2 less than 400. 400 + 276 = 676, then 676 − 2 = 674. Strategy A also works but takes three steps with harder numbers. C is very slow and D only gives an estimate.",
        interact: [{ kind: "jumps", start: 398, steps: [2, 276], back: true, hint: "Try B: jump +2 to make 400, then +276, then −2 to take the extra 2 back off." }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "What is the total of the angles at a point in this diagram? Communicate your reasoning.",
        img: "u30-glass.png",
        interact: [
          { kind: "angle", reflex: true, names: true, degrees: true, start: 300, hint: "Drag the arm all the way around." },
          { kind: "input", fields: [{ label: "Total of the angles at the point", value: 360, suffix: "°" }] }
        ],
        answer: "**360°**. The angles around the circled point make one full turn (a revolution), so they always add to 360°, however many angles there are."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record this measurement using millilitres (mL) and litres (L).",
        img: "u30-jug.png",
        interact: [
          { kind: "marker", min: 0, max: 1000, divs: 20, majorEvery: 2, labels: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], label: "water", hint: "Each small mark on the jug is 50 mL. Slide the pin to the water level." },
          { kind: "input", fields: [{ label: "Millilitres", value: 450, suffix: "mL" }, { label: "Litres", value: 0.45, suffix: "L" }] }
        ],
        answer: "**450 mL = 0.45 L**. The water is halfway between 400 mL and 500 mL. 1000 mL = 1 L, so 450 mL = [450/1000] L = 0.45 L.",
        explain: "The jug's scale has a small mark every 50 mL. The water sits on the mark between 400 and 500."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "In a chance experiment, which number is most likely to be rolled on a standard 6-sided die? Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [{ t: "Most likely number", options: ["1", "2", "3", "4", "5", "6", "They are all equally likely"], a: 6 }] }],
        answer: "**They are all equally likely.** A fair die has 6 faces and each number is on 1 face, so each number has a chance of [1/6].",
        explain: "This assumes a fair die. In a real experiment some numbers may come up more often by chance, but none is more likely."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Draw this shape including the dot after it has been: a. translated b. reflected c. rotated.",
        interact: [
          { kind: "sketch", bgimg: "img/s3/u30-parallelogram.png" },
          { kind: "select", hint: "Tap everything that stays the same after a translation, a reflection and a rotation.", items: [["The size of the shape", true], ["The side lengths", true], ["The angles", true], ["Where the shape is", false], ["Where the dot is on the page", false]] }
        ],
        answer: "Drawings vary. **Translated:** the same shape slid along, the dot still near the bottom-right corner. **Reflected:** flipped over a line, so the parallelogram leans the other way and the dot is on the opposite side. **Rotated:** turned (for example a half turn), so the dot moves to the top-left. The shape's size and angles never change.",
        explain: "Open drawing task. The select checks the key idea: these transformations move the shape but keep its size and angles."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "A school collected 485 cans on Monday and 376 cans on Tuesday. They donated 214 cans to a food bank. To find how many cans are left, you calculate 485 + 376 − 214.",
        answer: true,
        explain: "Add what was collected, then take away what was donated: 485 + 376 = 861, and 861 − 214 = 647 cans left.",
        interact: [{ kind: "bar", whole: { v: 861, l: "485 + 376 = 861", n: "cans collected" }, parts: [{ v: 214, l: "214", n: "donated" }, { v: 647, l: "647", n: "left", hide: true }] }],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "485 + 376 = 861. 861 − 214 = 647 cans." }, { t: "Subtract first", s: "485 − 214 = 271. 271 + 376 = 647 cans. Same answer." }] }
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Name each type of angle and give a possible range of degrees for each.",
        img: "u30-angles.png",
        interact: [
          { kind: "angle", reflex: true, names: true, degrees: true, start: 45, hint: "Drag the arm to make angles A, B and C." },
          { kind: "choose", rows: [
            { t: "A", options: ["acute", "obtuse", "reflex", "revolution"], a: 3 },
            { t: "B", options: ["acute", "obtuse", "reflex", "revolution"], a: 0 },
            { t: "C", options: ["acute", "obtuse", "reflex", "revolution"], a: 2 }] },
          { kind: "choose", rows: [
            { t: "Range for A", options: ["exactly 360°", "between 0° and 90°", "between 90° and 180°", "between 180° and 360°"], a: 0 },
            { t: "Range for B", options: ["exactly 360°", "between 0° and 90°", "between 90° and 180°", "between 180° and 360°"], a: 1 },
            { t: "Range for C", options: ["exactly 360°", "between 0° and 90°", "between 90° and 180°", "between 180° and 360°"], a: 3 }] }
        ],
        answer: "**A: revolution**, exactly 360° (one full turn). **B: acute**, between 0° and 90° (about 45°). **C: reflex**, between 180° and 360° (about 225°)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record these capacities in another way: 1.5 L, 0.75 L, 1250 mL",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 1.5, shift: true, hint: "1 L = 1000 mL. Litres to millilitres: × 1000. Millilitres to litres: ÷ 1000." },
          { kind: "input", fields: [{ label: "1.5 L =", value: 1500, suffix: "mL" }, { label: "0.75 L =", value: 750, suffix: "mL" }, { label: "1250 mL =", value: 1.25, suffix: "L" }] }
        ],
        answer: "1.5 L = **1500 mL** · 0.75 L = **750 mL** · 1250 mL = **1.25 L**. Also: 1.5 L = 1 L 500 mL and 1250 mL = 1 L 250 mL.",
        explain: "The slide's text overlaps (it repeats the question twice). The question is tidied to one sentence."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Eight balls are placed in a bag: 2 red, 3 purple, 2 blue and 1 yellow. One ball is selected from the bag. Record the probability of each outcome using a fraction.",
        interact: [
          { kind: "classify", view: [620, 130], label: "Eight balls in a bag", hint: "Choose a colour, then tap each ball of that colour to count it.", total: 8,
            cats: [{ k: "r", t: "Red", c: "#E53935" }, { k: "p", t: "Purple", c: "#8E44EC" }, { k: "b", t: "Blue", c: "#29A8F0" }, { k: "y", t: "Yellow", c: "#F5C518" }],
            shapes: [
              { circle: [45, 50, 32], fill: "#E53935", a: "r" }, { circle: [120, 85, 32], fill: "#E53935", a: "r" },
              { circle: [190, 45, 32], fill: "#8E44EC", a: "p" }, { circle: [265, 85, 32], fill: "#8E44EC", a: "p" }, { circle: [345, 90, 32], fill: "#8E44EC", a: "p" },
              { circle: [420, 45, 32], fill: "#29A8F0", a: "b" }, { circle: [500, 90, 32], fill: "#29A8F0", a: "b" },
              { circle: [575, 40, 32], fill: "#F5C518", a: "y" }] },
          { kind: "input", fields: [
            { label: "P(red)", accept: ["2/8", "1/4"], placeholder: "a/b" }, { label: "P(purple)", accept: ["3/8"], placeholder: "a/b" },
            { label: "P(blue)", accept: ["2/8", "1/4"], placeholder: "a/b" }, { label: "P(yellow)", accept: ["1/8"], placeholder: "a/b" }] }
        ],
        answer: "Red **[2/8]** ([1/4]) · Purple **[3/8]** · Blue **[2/8]** ([1/4]) · Yellow **[1/8]**. The fractions add to [8/8] = 1.",
        explain: "The balls are redrawn from the slide: 2 red, 3 purple, 2 blue and 1 yellow."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Match each transformation to the correct term: translate, reflect, rotate.",
        img: "u30-transform.png",
        interact: [{ kind: "choose", rows: [
          { t: "A (triangle)", options: ["translate", "reflect", "rotate"], a: 0 },
          { t: "B (trapezium)", options: ["translate", "reflect", "rotate"], a: 1 },
          { t: "C (hexagon)", options: ["translate", "reflect", "rotate"], a: 2 }] }],
        answer: "**A: translate** (slid, the dot stays in the same place on the shape). **B: reflect** (flipped, the dot moves from the right corner to the left corner). **C: rotate** (a half turn, the dot moves from bottom-right to top-left).",
        explain: "Each term is used once. Because a hexagon is so symmetrical, C could also be made by a reflection, so the half turn is the answer once A and B are matched."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "To solve 764 − 399, two students used different strategies. Ava: 764 − 400 = 364, then + 1. Noah: 764 − 300 − 90 − 9. Which statement is correct?",
        options: ["Ava's strategy is more efficient", "Noah's strategy is more efficient", "Both strategies are equally efficient", "Neither strategy will work"],
        answer: 0,
        explain: "Both give 365. Ava rounds 399 to 400 (one easy subtraction) and adds back the 1 she took away too many. Noah needs three subtractions, so Ava's strategy is more efficient.",
        interact: [{ kind: "jumps", start: 764, steps: [400, 300, 90, 9, 1], back: true, hint: "Try Ava's way: jump back 400, then forward 1. Then try Noah's three jumps back." }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "The train left the station at 6:45 am and arrived at the next station at 7:30 am. Use a bridging strategy mentally to calculate the elapsed time. Record your calculation on an empty number line.",
        interact: [
          { kind: "jumps", time: "12", ampm: true, start: 405, end: 450, steps: [5, 15, 30], hint: "Jump from 6:45 am to the next o'clock (7:00 am), then on to 7:30 am." },
          { kind: "input", fields: [{ label: "Elapsed time", value: 45, suffix: "minutes" }] }
        ],
        cubes: { ops: ["+"], also: ["−"], solve: [{ t: "Bridge to the hour", s: "6:45 → 7:00 is 15 minutes. 7:00 → 7:30 is 30 minutes. 15 + 30 = 45 minutes." }, { t: "Count back", s: "7:30 back to 7:00 is 30 minutes, back to 6:45 is 15 more: 45 minutes." }] },
        answer: "**45 minutes**. 6:45 am + 15 min = 7:00 am, + 30 min = 7:30 am."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record 2125 millilitres using litres.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 2125, shift: true, hint: "1000 mL = 1 L. Divide by 1000: move each digit 3 places to the right." },
          { kind: "input", fields: [{ label: "2125 mL =", value: 2.125, suffix: "L" }] }
        ],
        answer: "**2.125 L**. 2000 mL is 2 L and 125 mL is 0.125 L, so 2125 mL = 2.125 L (2 L 125 mL)."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Taj is designing a game using a bag with 8 counters: 2 red, 1 blue, 3 orange and 2 purple. A player draws one counter at random. Record all possible outcomes and assign a fraction to show the probability of drawing each colour. Which outcomes are not equally likely? Communicate your reasoning.",
        interact: [
          { kind: "input", fields: [
            { label: "P(red)", accept: ["2/8", "1/4"], placeholder: "a/b" }, { label: "P(blue)", accept: ["1/8"], placeholder: "a/b" },
            { label: "P(orange)", accept: ["3/8"], placeholder: "a/b" }, { label: "P(purple)", accept: ["2/8", "1/4"], placeholder: "a/b" }] },
          { kind: "choose", rows: [
            { t: "Most likely", options: ["Red", "Blue", "Orange", "Purple"], a: 2 },
            { t: "Least likely", options: ["Red", "Blue", "Orange", "Purple"], a: 1 },
            { t: "Equally likely pair", options: ["Red and purple", "Red and blue", "Orange and purple"], a: 0 }] }
        ],
        cubes: { ops: ["÷"], note: "Each counter is 1 out of 8.", solve: [{ t: "Count out of 8", s: "Red 2 of 8, blue 1 of 8, orange 3 of 8, purple 2 of 8: [2/8], [1/8], [3/8], [2/8]." }, { t: "Compare", s: "Orange has the most counters (3), blue the fewest (1). Red and purple both have 2, so only they are equally likely." }] },
        answer: "Outcomes: red, blue, orange, purple. Red **[2/8]**, blue **[1/8]**, orange **[3/8]**, purple **[2/8]**. They are **not equally likely** because the colours have different numbers of counters: orange is most likely and blue least likely. Only red and purple are equally likely to each other."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Sam found the area of this composite L-shape by splitting it across: 1 × 4 = 4 and 2 × 7 = 14, so 4 + 14 = 18 cm². Each square is 1 cm². Record a different way to calculate the area.",
        interact: [
          { kind: "areagrid", cells: ["1111000", "1111111", "1111111"], size: 56 },
          { kind: "choose", rows: [{ t: "A different way", options: ["Split it down: 4 × 3 = 12 and 3 × 2 = 6, then 12 + 6", "Make a 7 × 3 rectangle (21) and take away the empty 3 × 1 corner (3)", "Both of these"], a: 2 }] },
          { kind: "input", fields: [{ label: "Area", value: 18, suffix: "cm²" }] }
        ],
        answer: "**18 cm²** either way. Split it down: 4 × 3 = 12 and 3 × 2 = 6, 12 + 6 = 18. Or fill in the missing corner: 7 × 3 = 21, 21 − 3 = 18.",
        explain: "The slide's working says 4 + 14 = 28 cm², which is an adding error: 4 + 14 = 18. The question shows the corrected working. The shape is 7 squares long and 3 high, with a 3 by 1 gap at the top right (counted from the slide's grid)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "A theatre sold 468 tickets on Friday and 395 tickets on Saturday. The theatre holds 1000 people. To find how many seats are left, you calculate 468 + 395 − 1000.",
        answer: false,
        explain: "468 + 395 − 1000 = −137, which can't be a number of seats. Take the tickets away from the 1000 seats: 1000 − 468 − 395 = 137 seats left (or 1000 − (468 + 395)).",
        interact: [{ kind: "bar", whole: { v: 1000, l: "1000", n: "seats" }, parts: [{ v: 468, l: "468", n: "Friday" }, { v: 395, l: "395", n: "Saturday" }, { v: 137, l: "137", n: "left", hide: true }] }],
        cubes: { ops: ["+", "−"], solve: [{ t: "Add the tickets first", s: "468 + 395 = 863. 1000 − 863 = 137 seats." }, { t: "Take away one at a time", s: "1000 − 468 = 532. 532 − 395 = 137 seats." }] }
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "The movie started at 18:20 and finished at 20:45. Use a bridging strategy mentally to calculate the elapsed time. Record your calculation on an empty number line.",
        interact: [
          { kind: "jumps", time: "24", start: 1100, end: 1245, steps: [5, 15, 40, 60], hint: "Jump from 18:20 to the next o'clock (19:00), then jump in hours, then on to 20:45." },
          { kind: "input", fields: [{ label: "Hours", value: 2, suffix: "h" }, { label: "Minutes", value: 25, suffix: "min" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Bridge to the hour", s: "18:20 → 19:00 is 40 min. 19:00 → 20:00 is 1 h. 20:00 → 20:45 is 45 min. 40 + 45 = 85 min = 1 h 25 min, + 1 h = 2 h 25 min." }, { t: "Hours first", s: "18:20 + 2 h = 20:20. 20:20 → 20:45 is 25 min. 2 h 25 min." }] },
        answer: "**2 hours 25 minutes** (145 minutes). 18:20 + 40 min = 19:00, + 1 h = 20:00, + 45 min = 20:45."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record what happened to the water level when the rock was added to the container.",
        img: "u30-beakers.png",
        interact: [
          { kind: "input", fields: [{ label: "Water level before", value: 20, suffix: "mL" }, { label: "Water level after", value: 40, suffix: "mL" }, { label: "The level rose by", value: 20, suffix: "mL" }] },
          { kind: "choose", rows: [{ t: "The volume of the rock is…", options: ["20 cm³", "40 cm³", "60 cm³"], a: 0 }] }
        ],
        answer: "The water level **rose from 20 mL to 40 mL**, up by **20 mL**. The rock pushed aside (displaced) 20 mL of water, so its volume is about **20 cm³** (1 mL = 1 cm³)."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "A jar contains red and blue lollies. You take a sample of 10 lollies, record the colour, and return them each time. Your sample results were: Red, Blue, Red, Red, Blue, Red, Red, Blue, Red, Red. Which colour lolly is likely to make up most of the jar? Communicate your reasoning.",
        interact: [
          { kind: "tally", rows: [{ l: "Red", a: 7 }, { l: "Blue", a: 3 }], counts: true, hint: "Read the results one at a time and add a tally mark for each." },
          { kind: "choose", rows: [{ t: "Most of the jar is likely to be…", options: ["Red", "Blue", "Can't tell at all"], a: 0 }] }
        ],
        answer: "**Red.** The sample had 7 red and 3 blue ([7/10] red). Each lolly was put back, so the sample is a fair picture of the jar, which probably has more red than blue. It's an estimate: a bigger sample would give more confidence."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Identify which shape is: a regular polygon, an irregular polygon, not a polygon.",
        interact: [
          { kind: "classify", view: [620, 230], label: "Three shapes: A, B and C",
            cats: [{ k: "r", t: "Regular polygon", c: "#8E44EC" }, { k: "i", t: "Irregular polygon", c: "#00A651" }, { k: "n", t: "Not a polygon", c: "#E89A0C" }],
            shapes: [
              { p: "181,100 180,103 179,106 176,109 172,111 168,113 165,115 162,117 160,119 159,121 159,123 159,126 160,130 161,134 162,138 163,142 163,146 161,149 159,151 156,153 152,153 148,152 144,151 140,150 136,149 133,149 131,149 129,150 127,152 125,155 123,158 121,162 119,166 116,169 113,170 110,171 107,170 104,169 101,166 99,162 97,158 95,155 93,152 91,150 89,149 87,149 84,149 80,150 76,151 72,152 68,153 64,153 61,151 59,149 57,146 57,142 58,138 59,134 60,130 61,126 61,123 61,121 60,119 58,117 55,115 52,113 48,111 44,109 41,106 40,103 39,100 40,97 41,94 44,91 48,89 52,87 55,85 58,83 60,81 61,79 61,77 61,74 60,70 59,66 58,62 57,58 57,54 59,51 61,49 64,47 68,47 72,48 76,49 80,50 84,51 87,51 89,51 91,50 93,48 95,45 97,42 99,38 101,34 104,31 107,30 110,29 113,30 116,31 119,34 121,38 123,42 125,45 127,48 129,50 131,51 133,51 136,51 140,50 144,49 148,48 152,47 156,47 159,49 161,51 163,54 163,58 162,62 161,66 160,70 159,74 159,77 159,79 160,81 162,83 165,85 168,87 172,89 176,91 179,94 180,97", fill: "#D9D9D9", a: "n", deco: "<text x='110' y='210' class='co-lab'>A</text>" },
              { p: "310,30 385,85 357,170 263,170 235,85", fill: "#D9D9D9", a: "r", deco: "<text x='310' y='210' class='co-lab'>B</text>" },
              { p: "470,70 560,40 530,180 440,140 520,130", fill: "#D9D9D9", a: "i", deco: "<text x='500' y='210' class='co-lab'>C</text>" }] },
          { kind: "choose", rows: [
            { t: "Regular polygon", options: ["A", "B", "C"], a: 1 },
            { t: "Irregular polygon", options: ["A", "B", "C"], a: 2 },
            { t: "Not a polygon", options: ["A", "B", "C"], a: 0 }] }
        ],
        answer: "**B** is a regular polygon (a pentagon with equal sides and equal angles). **C** is an irregular polygon (straight sides, but not all equal). **A** is not a polygon because its sides are curved.",
        explain: "The shapes are redrawn from the slide. A has curved, bumpy edges (like the slide's cloud shape), which is what makes it not a polygon."
      }
    ]
  ]
});
