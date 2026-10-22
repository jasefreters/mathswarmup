/*
  Stage 3 Year A, Unit 10 — Review of learning (Term 2, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 2, ls: 5, unit: 10,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 10 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "Which **unit fraction** is **closest** to [1/2]?",
        options: ["[1/5]", "[1/4]", "[1/3]", "[1/8]"],
        answer: 2,
        explain: "The fewer parts the whole is cut into, the bigger each part. Of these, [1/3] is the biggest, so it sits closest to [1/2]. It is only [1/6] away.",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.03, items: [["[1/2]", 0.5], ["[1/5]", 0.2], ["[1/4]", 0.25], ["[1/3]", 1 / 3], ["[1/8]", 0.125]] }]
      },
      {
        type: "sr", focus: "Geometric measure B: Angles (Stage 2 content reviewed)",
        prompt: "**Name** the angle that can be described as **less than a quarter turn**.",
        interact: [
          { kind: "angle", names: true, target: "acute", start: 120, label: "Drag the arm to make an angle smaller than a quarter turn." },
          { kind: "choose", rows: [{ t: "Less than a quarter turn is", options: ["an acute angle", "a right angle", "an obtuse angle", "a straight angle"], a: 0 }] }
        ],
        answer: "An **acute angle**. A quarter turn is a right angle (90°), and an acute angle is smaller than that."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Use the **base** of each object to **name** the **pyramids** and **prisms**.",
        img: "u10-objects.png",
        interact: [{ kind: "choose", rows: [
          { t: "A", options: ["square pyramid", "triangular pyramid", "rectangular prism", "triangular prism"], a: 0 },
          { t: "B", options: ["square pyramid", "triangular pyramid", "rectangular prism", "triangular prism"], a: 1 },
          { t: "C", options: ["square pyramid", "triangular pyramid", "rectangular prism", "triangular prism"], a: 2 },
          { t: "D", options: ["square pyramid", "triangular pyramid", "rectangular prism", "triangular prism"], a: 3 }] }],
        answer: "A **square pyramid** · B **triangular pyramid** · C **rectangular prism** · D **triangular prism**. A pyramid's faces meet at a point; a prism has the same shape at both ends."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Record the missing part of these sentences. The **grid-map reference** system gives an ____ location. The **Cartesian plane** gives a ____ location.",
        interact: [{ kind: "choose", rows: [
          { t: "The grid-map reference system gives an … location.", options: ["area", "specific point"], a: 0 },
          { t: "The Cartesian plane gives a … location.", options: ["area", "specific point"], a: 1 }] }],
        answer: "A grid-map reference gives an **area** location (a whole square, like B3). The Cartesian plane gives a **specific point** location, like (2, 5)."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "**Calculate** the **perimeter** of this shape.",
        interact: [
          { kind: "sides", view: [300, 280], label: "Isosceles triangle with sides 12 cm, 12 cm and 8 cm", fill: "#002664", poly: [[150, 20], [222, 224], [78, 224]],
            dims: [{ from: [80, 246], to: [220, 246] }, { from: [61, 214], to: [130, 20] }, { from: [239, 214], to: [170, 20] }],
            labels: [{ x: 150, y: 270, t: "8 cm" }, { x: 88, y: 112, t: "12 cm", anchor: "end" }, { x: 212, y: 112, t: "12 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 32, suffix: "cm" }] }
        ],
        answer: "12 + 12 + 8 = **32 cm**."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "These **fractions** are **correctly ordered** on the number line.",
        img: "u10-line2.png",
        answer: false,
        explain: "[1/6] is smaller than [1/4], so it belongs between 0 and [1/4], not after [1/2]. Correct order: [1/6], [1/4], [1/3], [1/2].",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.03, items: [["[1/4]", 0.25], ["[1/3]", 1 / 3], ["[1/2]", 0.5], ["[1/6]", 1 / 6]] }]
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Estella faced the **front** of the classroom, then made a **half turn** to the **right**. Mark the **vertex** and draw the **invisible arms** of the angle she made.",
        interact: [
          { kind: "angle", names: true, degrees: true, target: "straight", start: 30, label: "The fixed arm is where Estella started. Turn the other arm to show a half turn." },
          { kind: "choose", rows: [{ t: "A half turn makes", options: ["a right angle (90°)", "a straight angle (180°)", "a reflex angle (270°)", "a revolution (360°)"], a: 1 }] }
        ],
        answer: "A half turn is a **straight angle (180°)**. The vertex is where Estella stands; one arm points to the front and the other points to the back of the room."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "**Sketch** the 3D object from the **top view**.",
        img: "u10-hexprism.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "From the top you see a", options: ["hexagon", "rectangle", "pentagon", "triangle"], a: 0 }] }
        ],
        answer: "A **hexagon**. Looking straight down on a hexagonal prism you see only its top face."
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "**Identify** and **record** the **coordinates** for the pink book, the orange book and the green book.",
        interact: [
          { kind: "plane", range: [0, 8, 0, 8], points: [{ l: "pink", x: 0, y: 6 }, { l: "red", x: 1, y: 5 }, { l: "orange", x: 2, y: 0 }, { l: "purple", x: 5, y: 7 }, { l: "blue", x: 4, y: 3 }, { l: "green", x: 6, y: 4 }], hint: "Tap a book to trace it to each axis. Read across (x) first, then up (y)." },
          { kind: "input", fields: [
            { label: "Pink book x", value: 0 }, { label: "Pink book y", value: 6 },
            { label: "Orange book x", value: 2 }, { label: "Orange book y", value: 0 },
            { label: "Green book x", value: 6 }, { label: "Green book y", value: 4 }] }
        ],
        answer: "Pink book **(0, 6)** · Orange book **(2, 0)** · Green book **(6, 4)**. Go across the x-axis first, then up the y-axis."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Two rectangles have the same perimeter of 20 cm but different dimensions (length and width). **Draw** both rectangles to show how this is possible. **Communicate** your **reasoning**.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "sentence", fields: [{ label: "Rectangle 1 perimeter = Rectangle 2 perimeter", placeholder: "2 × (length + width) = 2 × (length + width)",
            re: "^(?=\\s*2\\s*x\\s*\\(\\s*(?:1\\s*\\+\\s*9|9\\s*\\+\\s*1|2\\s*\\+\\s*8|8\\s*\\+\\s*2|3\\s*\\+\\s*7|7\\s*\\+\\s*3|4\\s*\\+\\s*6|6\\s*\\+\\s*4|5\\s*\\+\\s*5)\\s*\\))\\s*2\\s*x\\s*\\(\\s*(\\d+)\\s*\\+\\s*(\\d+)\\s*\\)\\s*=\\s*2\\s*x\\s*\\((?!\\s*\\1\\s*\\+\\s*\\2\\s*\\))(?!\\s*\\2\\s*\\+\\s*\\1\\s*\\))\\s*(\\d+)\\s*\\+\\s*(\\d+)\\s*\\)\\s*$",
            msg: "Write two different rectangles with a perimeter of 20 cm, like 2 × (6 + 4) = 2 × (7 + 3).", sample: "2 x (6 + 4) = 2 x (7 + 3)" }] }
        ],
        answer: "Answers vary. Length + width must make 10 cm, because the perimeter is double that. For example **6 cm × 4 cm** and **7 cm × 3 cm**: 6 + 4 + 6 + 4 = 20 and 7 + 3 + 7 + 3 = 20. (Also 8 × 2, 9 × 1 or the 5 × 5 square.)",
        explain: "Any two different whole-number rectangles whose length and width add to 10 cm are accepted."
      }
    ],
    // Review 3
    [
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Which statement about these fractions is **correct**? You may select **more than one** answer.",
        interact: [
          { kind: "numberline", min: 0, max: 1, tol: 0.03, items: [["[1/2]", 0.5], ["[1/3]", 1 / 3], ["[1/5]", 0.2], ["[1/6]", 1 / 6], ["[1/8]", 0.125]] },
          { kind: "select", hint: "Tap every correct statement.", items: [
            ["A: [1/3] is smaller than [1/2].", true],
            ["B: [1/6] and [1/8] are both larger than [1/2].", false],
            ["C: [1/8] and [1/5] are both smaller than [1/2].", true],
            ["D: [1/3] and [1/6] are both larger than [1/2].", false]] }
        ],
        answer: "**A** and **C** are correct. [1/2] is the largest unit fraction after 1 whole, so every other unit fraction ([1/3], [1/5], [1/6], [1/8]) is smaller than [1/2].",
        explain: "The slide is multiple choice with more than one right answer, so it is set as tap-every-correct-statement."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the words missing from these sentences. An angle that is **90°** is a ____ angle. An angle that is **180°** is a ____ angle. An angle that is **360°** is an angle of ____.",
        interact: [
          { kind: "angle", names: true, degrees: true, reflex: true, start: 90, label: "Turn the arm to 90°, 180° and all the way round to 360°." },
          { kind: "choose", rows: [
            { t: "90° is a … angle", options: ["right", "straight", "acute", "reflex"], a: 0 },
            { t: "180° is a … angle", options: ["right", "straight", "obtuse", "reflex"], a: 1 },
            { t: "360° is an angle of …", options: ["a quarter turn", "a half turn", "revolution (a full turn)"], a: 2 }] }
        ],
        answer: "90° is a **right** angle · 180° is a **straight** angle · 360° is an angle of **revolution** (one full turn)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "**Sketch** the **net** of this **prism**.",
        img: "u10-prism.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "The net is made of", options: ["6 rectangles", "4 rectangles and 2 triangles", "5 rectangles", "1 rectangle and 4 triangles"], a: 0 }] }
        ],
        answer: "A rectangular prism has **6 rectangular faces**, in 3 matching pairs. For example, a row of 4 rectangles (top, front, bottom, back) with an end rectangle on each side."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "**Identify** and **record** the **coordinates** for each star.",
        interact: [
          { kind: "plane", range: [-6, 7, -6, 6], points: [{ l: "cyan", x: -3, y: 2 }, { l: "purple", x: 5, y: 5 }, { l: "orange", x: 3, y: -2 }, { l: "green", x: -4, y: -4 }], hint: "Tap a star to trace it to each axis. Read across (x) first, then up or down (y)." },
          { kind: "input", fields: [
            { label: "Cyan star x", value: -3 }, { label: "Cyan star y", value: 2 },
            { label: "Purple star x", value: 5 }, { label: "Purple star y", value: 5 },
            { label: "Orange star x", value: 3 }, { label: "Orange star y", value: -2 },
            { label: "Green star x", value: -4 }, { label: "Green star y", value: -4 }] }
        ],
        answer: "Cyan **(−3, 2)** · Purple **(5, 5)** · Orange **(3, −2)** · Green **(−4, −4)**."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "The distance from Riverdale to Pine Hill is **12 kilometres**. **Record** the **distance** using the **correct abbreviation**.",
        interact: [{ kind: "choose", rows: [{ t: "12 kilometres =", options: ["12 km", "12 Km", "12 kms", "12 k"], a: 0 }] }],
        answer: "**12 km**. The abbreviation is lower case, has no full stop and no s, even for more than 1 kilometre."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "These fractions have been **ordered incorrectly** on the number line.",
        img: "u10-line4.png",
        answer: false,
        explain: "The order [1/8], [1/4], [1/3], [1/2] is correct: the bigger the denominator, the smaller the unit fraction. So the statement is false. (On the slide [1/4] and [1/3] are not placed exactly, but the order is right.)",
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.03, items: [["[1/8]", 0.125], ["[1/4]", 0.25], ["[1/3]", 1 / 3], ["[1/2]", 0.5]] }]
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the words missing from this sentence. When measuring an **angle** using a **protractor**, you need to make sure to place the ____ point of the protractor on the ____ of the angle.",
        img: "u10-protractor.png",
        interact: [{ kind: "choose", rows: [
          { t: "Place the … point of the protractor", options: ["centre", "zero", "end"], a: 0 },
          { t: "on the … of the angle", options: ["vertex", "arm", "middle"], a: 0 }] }],
        answer: "Place the **centre** point of the protractor on the **vertex** of the angle. Then line up the baseline (0°) with one arm."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "**Visualise** folding these **nets**. **Name** the **3D objects** they form.",
        img: "u10-nets.png",
        interact: [{ kind: "choose", rows: [
          { t: "Left net", options: ["triangular prism", "square pyramid", "rectangular prism", "triangular pyramid"], a: 0 },
          { t: "Middle net", options: ["triangular prism", "square pyramid", "rectangular prism", "triangular pyramid"], a: 1 },
          { t: "Right net", options: ["triangular prism", "square pyramid", "rectangular prism", "triangular pyramid"], a: 2 }] }],
        answer: "Left: **triangular prism** (3 rectangles and 2 triangles) · Middle: **square pyramid** (1 square and 4 triangles) · Right: **rectangular prism** (6 rectangles)."
      },
      {
        type: "sr", focus: "Geometric measure B: Position",
        prompt: "**Identify** and **record** the **coordinates** for each star.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "cyan", x: -5, y: 5 }, { l: "purple", x: 1, y: 1 }, { l: "orange", x: 1, y: -3 }, { l: "green", x: -2, y: -5 }], hint: "Tap a star to trace it to each axis. Read across (x) first, then up or down (y)." },
          { kind: "input", fields: [
            { label: "Cyan star x", value: -5 }, { label: "Cyan star y", value: 5 },
            { label: "Purple star x", value: 1 }, { label: "Purple star y", value: 1 },
            { label: "Orange star x", value: 1 }, { label: "Orange star y", value: -3 },
            { label: "Green star x", value: -2 }, { label: "Green star y", value: -5 }] }
        ],
        answer: "Cyan **(−5, 5)** · Purple **(1, 1)** · Orange **(1, −3)** · Green **(−2, −5)**."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "**Convert** and **record** the following to km: 3800 m, 1200 m, 7400 m",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 3800, shift: true, hint: "m to km: ÷ 1000. Shift the digits 3 places to the right." },
          { kind: "input", fields: [{ label: "3800 m =", value: 3.8, suffix: "km" }, { label: "1200 m =", value: 1.2, suffix: "km" }, { label: "7400 m =", value: 7.4, suffix: "km" }] }
        ],
        answer: "3800 m = **3.8 km** · 1200 m = **1.2 km** · 7400 m = **7.4 km**. There are 1000 m in 1 km, so divide by 1000."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "5187 − 402 − 218 =",
        options: ["4567", "5979", "4568", "5807"],
        answer: 0,
        explain: "5187 − 402 = 4785. 4785 − 218 = 4567. (Or take away 620 in one go: 402 + 218 = 620, and 5187 − 620 = 4567.)",
        interact: [{ kind: "jumps", start: 5187, back: true, steps: [400, 2, 200, 18], hint: "Jump back 402 (400 and 2), then back 218 (200 and 18)." }]
      },
      {
        type: "sr", focus: "Geometric measure A: Position",
        prompt: "Kelly faced the **front** of the classroom, then made a **three-quarter turn** to the **right**. Mark the **vertex** and draw the **invisible arms** of the angle she made.",
        interact: [
          { kind: "angle", names: true, degrees: true, reflex: true, target: "reflex", start: 90, label: "The fixed arm is where Kelly started. Turn the other arm three-quarters of the way round." },
          { kind: "choose", rows: [{ t: "A three-quarter turn makes", options: ["a right angle (90°)", "a straight angle (180°)", "a reflex angle (270°)", "a revolution (360°)"], a: 2 }] }
        ],
        answer: "A three-quarter turn is a **reflex angle of 270°**. The vertex is where Kelly stands. One arm points to the front, and after turning right three quarters she faces the wall on her left."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "**Convert and record** these capacities: 4215 mL to litres, 62 mL to litres, 6.5 L to millilitres, 7.006 L to millilitres",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 4215, shift: true, hint: "mL to L: ÷ 1000. L to mL: × 1000." },
          { kind: "input", fields: [{ label: "4215 mL =", value: 4.215, suffix: "L" }, { label: "62 mL =", value: 0.062, suffix: "L" }, { label: "6.5 L =", value: 6500, suffix: "mL" }, { label: "7.006 L =", value: 7006, suffix: "mL" }] }
        ],
        answer: "4215 mL = **4.215 L** · 62 mL = **0.062 L** · 6.5 L = **6500 mL** · 7.006 L = **7006 mL**. 1 L = 1000 mL."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "**Complete** the sentence: The term ‘**probability**’ is used to describe …",
        interact: [{ kind: "choose", rows: [{ t: "Probability describes", options: ["how likely it is that something will happen", "how many times something has happened", "the total of a set of data", "the most common result"], a: 0 }] }],
        answer: "… **how likely it is that something will happen**, from impossible to certain. It can be written as a word, a fraction, a decimal or a percentage."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Record which distance is **longer**: **3 km** or **2500 m**? **Communicate** your reasoning.",
        interact: [
          { kind: "marker", min: 0, max: 3000, divs: 6, labels: [0, 1000, 2000, 3000], label: "2500 m", hint: "The line runs from 0 m to 3000 m (3 km). Slide the pin to 2500 m." },
          { kind: "input", fields: [{ label: "3 km =", value: 3000, suffix: "m" }] },
          { kind: "choose", rows: [{ t: "Longer distance", options: ["3 km", "2500 m"], a: 0 }] }
        ],
        answer: "**3 km** is longer. 3 km = 3000 m, and 3000 m is 500 m more than 2500 m."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Zara said that the **sum** of 24 000, 456 and 3090 is **27 546**.",
        answer: true,
        explain: "24 000 + 3090 = 27 090. 27 090 + 456 = 27 546. Zara is right.",
        interact: [{ kind: "bar", whole: { v: 27546, l: "?", n: "sum", hide: true }, parts: [{ v: 24000, l: "24 000" }, { v: 3090, l: "3090" }, { v: 456, l: "456" }] }]
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "**Convert** and **record** these as **24-hour time**: 1:45 am, 8:38 am, 1:30 pm, 10:47 pm",
        interact: [
          { kind: "clock", time: "1:45", h24: true, drag: true },
          { kind: "input", fields: [
            { label: "1:45 am", accept: ["01:45", "0145", "1:45"], placeholder: "hh:mm" },
            { label: "8:38 am", accept: ["08:38", "0838", "8:38"], placeholder: "hh:mm" },
            { label: "1:30 pm", accept: ["13:30", "1330"], placeholder: "hh:mm" },
            { label: "10:47 pm", accept: ["22:47", "2247"], placeholder: "hh:mm" }] }
        ],
        answer: "1:45 am = **01:45** · 8:38 am = **08:38** · 1:30 pm = **13:30** · 10:47 pm = **22:47**. For pm times, add 12 to the hour."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Record the **unit of measure** most suitable to measure the **capacity** of each container.",
        img: "u10-containers.png",
        interact: [{ kind: "choose", rows: [
          { t: "A: cup", options: ["millilitres (mL)", "litres (L)"], a: 0 },
          { t: "B: watering can", options: ["millilitres (mL)", "litres (L)"], a: 1 },
          { t: "C: water bottle", options: ["millilitres (mL)", "litres (L)"], a: [0, 1] }] }],
        answer: "A cup: **millilitres** · B watering can: **litres** · C water bottle: **millilitres** (most bottles hold 500 to 750 mL), or litres for a large bottle.",
        explain: "Both units are accepted for the water bottle, since bottles range from about 500 mL to 1 L or more."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A 6-sided die is rolled. **Record all** possible **outcomes**.",
        interact: [{ kind: "select", hint: "Tap every possible outcome.", items: [["0", false], ["1", true], ["2", true], ["3", true], ["4", true], ["5", true], ["6", true], ["7", false]] }],
        answer: "**1, 2, 3, 4, 5 and 6**: 6 possible outcomes, each equally likely."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Calculate and record the total length of 3 items measuring 6 mm, 30 cm and 1.2 m.",
        interact: [
          { kind: "input", fields: [{ label: "6 mm =", value: 6, suffix: "mm" }, { label: "30 cm =", value: 300, suffix: "mm" }, { label: "1.2 m =", value: 1200, suffix: "mm" }, { label: "Total length", value: 1506, suffix: "mm" }] }
        ],
        cubes: { ops: ["+"], note: "Convert to the same unit first.", solve: [{ t: "Convert to millimetres", s: "6 mm + 300 mm + 1200 mm = 1506 mm." }, { t: "Convert to metres", s: "0.006 m + 0.3 m + 1.2 m = 1.506 m." }] },
        answer: "Change everything to the same unit: 6 mm + 300 mm + 1200 mm = **1506 mm**, which is 150.6 cm or **1.506 m**."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Maria picked 468 apples and 327 oranges from her garden. She sold 254 pieces of fruit at the market. Which number sentence matches the problem?",
        options: ["468 + 327 + 254", "468 + 327 − 254", "468 − 327 + 254", "327 + 468 + 254"],
        answer: 1,
        explain: "Add the fruit she picked (468 + 327 = 795), then subtract the 254 she sold: 795 − 254 = 541 pieces left.",
        interact: [{ kind: "bar", whole: { v: 795, l: "468 + 327", n: "fruit picked" }, parts: [{ v: 254, l: "254", n: "sold" }, { v: 541, l: "?", n: "left", hide: true }] }],
        cubes: { ops: ["+", "−"], solve: [{ t: "Picked, then sold", s: "Picked: 468 + 327. Sold means take away: − 254. So 468 + 327 − 254." }, { t: "Check the others", s: "A and D add the sold fruit, and C takes away the oranges. Only B adds what she picked and subtracts what she sold." }] }
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "**Convert** and **record** these as **12-hour time** using **am** or **pm** notation: 14:45, 06:38, 21:47, 11:15",
        interact: [
          { kind: "clock", time: "2:45", h24: true, drag: true },
          { kind: "input", fields: [
            { label: "14:45", accept: ["2:45 pm", "2:45pm", "2.45 pm"], placeholder: "h:mm am/pm" },
            { label: "06:38", accept: ["6:38 am", "6:38am", "6.38 am"], placeholder: "h:mm am/pm" },
            { label: "21:47", accept: ["9:47 pm", "9:47pm", "9.47 pm"], placeholder: "h:mm am/pm" },
            { label: "11:15", accept: ["11:15 am", "11:15am", "11.15 am"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "14:45 = **2:45 pm** · 06:38 = **6:38 am** · 21:47 = **9:47 pm** · 11:15 = **11:15 am**. For hours after 12, subtract 12 and use pm."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Order and record these capacities from **smallest** to **largest**: 7.05 L, 7071 mL, 2.62 L, 2999 mL",
        interact: [{ kind: "order", items: ["7.05 L", "7071 mL", "2.62 L", "2999 mL"], answer: [2, 3, 0, 1] }],
        answer: "**2.62 L, 2999 mL, 7.05 L, 7071 mL**. In millilitres: 2620, 2999, 7050, 7071."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "**Complete** the sentence: The term ‘**frequency**’ is used to describe …",
        interact: [{ kind: "choose", rows: [{ t: "Frequency describes", options: ["how likely something is to happen", "how often something happens: the number of times an outcome occurs", "the biggest number in the data", "the chance of an impossible event"], a: 1 }] }],
        answer: "… **how often something happens**: the number of times an outcome or result occurs, for example rolling a 6 four times in 20 rolls."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Suzie wants to **display data** to show the height of a plant’s growth over time. **Record** the name of a **suitable data display** she could use.",
        interact: [{ kind: "choose", rows: [{ t: "A suitable display", options: ["a line graph", "a pie chart", "a picture graph", "a Venn diagram"], a: 0 }] }],
        answer: "A **line graph**. It shows how something changes over time: time along the bottom, height up the side."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "The **levelling strategy** is an **efficient** strategy to solve 4988 + 955.",
        answer: true,
        explain: "4988 is only 12 away from 5000. Move 12 from 955 to 4988: 5000 + 943 = 5943. The total stays the same and the sum is easy.",
        interact: [{ kind: "jumps", start: 4988, steps: [12, 900, 43], hint: "Jump 12 to reach 5000, then add the 943 that is left." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Sally missed the **07:14** train from Liverpool to Sefton. What **time** is the **next** train from Liverpool to Sefton?",
        img: "u10-timetable.png",
        interact: [
          { kind: "choose", rows: [{ t: "The next train that stops at Sefton leaves Liverpool at", options: ["07:17", "07:21", "07:34", "07:48"], a: 2 }] },
          { kind: "input", fields: [{ label: "It arrives at Sefton at", accept: ["07:48", "0748", "7:48", "7:48 am"], placeholder: "hh:mm" }] }
        ],
        answer: "The **07:34** from Liverpool, arriving at Sefton at 07:48. The 07:21 train does not stop at Sefton (there is a dash in its Sefton row).",
        explain: "The answer is the 07:34 departure from Liverpool. Its arrival time at Sefton (07:48) is also recorded."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "The water level without the metal ball is 90 mL. The water level with the metal ball is 130 mL. Record the change in water level to show the object's volume in mL.",
        img: "u10-cylinders.png",
        interact: [
          { kind: "jumps", start: 90, end: 130, steps: [10], hint: "Count up from 90 mL to 130 mL." },
          { kind: "input", fields: [{ label: "Volume of the ball", value: 40, suffix: "mL" }] }
        ],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Subtract", s: "130 mL − 90 mL = 40 mL." }, { t: "Count up", s: "90 + 10 = 100, + 30 = 130. That's 40 mL." }] },
        answer: "130 − 90 = **40 mL**. The ball pushes aside (displaces) 40 mL of water, so its volume is 40 mL, which is 40 cm³."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A jar contains 5 different flavoured lollies: strawberry, lemon, apple, grape and orange. 1 lolly is picked at random. **Record all** possible **outcomes**.",
        interact: [{ kind: "select", hint: "Tap every possible outcome.", items: [["strawberry", true], ["cherry", false], ["lemon", true], ["apple", true], ["mint", false], ["grape", true], ["orange", true]] }],
        answer: "**Strawberry, lemon, apple, grape or orange**: 5 possible outcomes."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Billy made a **timeline**. Use the **scale** to determine and record the **year** Billy’s baby brother was born.",
        img: "u10-timeline.png",
        interact: [
          { kind: "jumps", start: 2014, steps: [1], hint: "Each centimetre is 1 year. Jump 1 year for each centimetre from Billy's birth to the baby brother mark." },
          { kind: "input", fields: [{ label: "Baby brother born in", value: 2022 }] }
        ],
        answer: "**2022**. The baby brother mark is at 8 cm, and 1 cm = 1 year, so 2014 + 8 = 2022."
      }
    ]
  ]
});
