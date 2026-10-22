/*
  Stage 3 Year A, Unit 11 — Review of learning (Term 3, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 3, ls: 1, unit: 11,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 11 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which rectangle’s **perimeter** can be found using this **area model**?",
        img: "u11-areamodel.png",
        options: ["74 m by 22 m", "64 m by 12 m", "73 m by 12 m", "74 m by 12 m"],
        answer: 2,
        explain: "The area model splits the sides into 70 + 3 = 73 and 10 + 2 = 12. So the rectangle is 73 m by 12 m. Its area is 700 + 30 + 140 + 6 = 876 m², and its perimeter is 73 + 12 + 73 + 12 = 170 m.",
        interact: [{ kind: "cells", cols: 2, w: 120, grid: [["#Length", "#Width"], [{ v: 73 }, { v: 12 }]], msg: "Add the parts along each side: 70 + 3 and 10 + 2." }]
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "**Arrange** these numbers in **ascending** order: 7 258 369, 8 258 258, 8 963 789, 8 963 798, 7 258 147",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 8963789, hint: "Compare the millions first, then each house from the left until the digits differ." },
          { kind: "order", items: ["7 258 369", "8 258 258", "8 963 789", "8 963 798", "7 258 147"], answer: [4, 0, 1, 2, 3] }
        ],
        answer: "**7 258 147, 7 258 369, 8 258 258, 8 963 789, 8 963 798**. Ascending means smallest to largest. 8 963 789 and 8 963 798 only differ in the tens: 8 tens is less than 9 tens."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Sally faces the **front** of the classroom and makes a **quarter turn** to her **right**. Draw the **vertex** and **arms** of the angle she forms.",
        interact: [
          { kind: "angle", names: true, degrees: true, target: "right", start: 30, label: "The fixed arm is where Sally started. Turn the other arm a quarter of the way round." },
          { kind: "choose", rows: [{ t: "A quarter turn makes", options: ["an acute angle", "a right angle (90°)", "a straight angle (180°)", "a reflex angle (270°)"], a: 1 }] }
        ],
        answer: "A quarter turn is a **right angle (90°)**. The vertex is where Sally stands. One arm points to the front of the room and the other points to the wall on her right."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "**Record** the name of a **prism** that has a **rectangle** as its **base**.",
        interact: [{ kind: "choose", rows: [{ t: "A prism with a rectangle base is a", options: ["rectangular prism", "rectangular pyramid", "triangular prism", "cylinder"], a: 0 }] }],
        answer: "A **rectangular prism**, for example a shoebox or a brick. A prism is named after its base, and it has the same rectangle at both ends."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "**Calculate** and **record** the **perimeter** of this triangle.",
        interact: [
          { kind: "sides", view: [320, 270], label: "Triangle with three sides of 82 cm", fill: "#002664", poly: [[160, 30], [260, 203], [60, 203]],
            dims: [{ from: [60, 228], to: [260, 228] }, { from: [41, 192], to: [141, 19] }, { from: [279, 192], to: [179, 19] }],
            labels: [{ x: 160, y: 256, t: "82 cm" }, { x: 76, y: 100, t: "82 cm", anchor: "end" }, { x: 244, y: 100, t: "82 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 246, suffix: "cm" }] }
        ],
        answer: "82 + 82 + 82 = **246 cm**. All 3 sides are 82 cm, so it is also 3 × 82 = 246 cm."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "24 × 50 = 6 × (4 × 50), which we can then think about as 6 × 200 = 1200.",
        answer: true,
        explain: "24 = 6 × 4, so 24 × 50 = 6 × 4 × 50. Group 4 × 50 first to make 200, then 6 × 200 = 1200. Check: 24 × 50 = 1200.",
        interact: [{ kind: "array", rows: 6, cols: 4, hint: "6 rows of 4 make 24. Each dot stands for 50." }]
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "**Round** 8 963 258 to the **nearest**: thousand, ten thousand, hundred thousand, million.",
        interact: [
          { kind: "pv", cols: ["M", "HTh", "TTh", "Th", "H", "T", "O"], start: 8963258, hint: "Find the place you are rounding to, then look at the digit to its right: 5 or more rounds up." },
          { kind: "input", fields: [
            { label: "Nearest thousand", value: 8963000 },
            { label: "Nearest ten thousand", value: 8960000 },
            { label: "Nearest hundred thousand", value: 9000000 },
            { label: "Nearest million", value: 9000000 }] }
        ],
        answer: "Thousand: **8 963 000** · Ten thousand: **8 960 000** · Hundred thousand: **9 000 000** · Million: **9 000 000**. For the hundred thousand, 8 963 258 is between 8 900 000 and 9 000 000, and the 6 ten thousands round it up."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Use the symbol for **degrees** to **record** the **size** of the following **angles**: right angle, angle of revolution, straight angle.",
        interact: [
          { kind: "angle", names: true, degrees: true, reflex: true, start: 90, label: "Drag the arm to show each angle." },
          { kind: "input", fields: [
            { label: "Right angle", accept: ["90°", "90 °"], placeholder: "e.g. 45°" },
            { label: "Angle of revolution", accept: ["360°", "360 °"], placeholder: "e.g. 45°" },
            { label: "Straight angle", accept: ["180°", "180 °"], placeholder: "e.g. 45°" }] }
        ],
        answer: "Right angle **90°** · Angle of revolution **360°** · Straight angle **180°**. The small raised circle ° is the symbol for degrees."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "**Visualise** and **sketch** this three-dimensional object from its **top view**.",
        img: "u11-pyramid.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "From the top you see", options: ["a square with lines from each corner to the centre", "a triangle", "a plain square", "a circle"], a: 0 }] }
        ],
        answer: "**A square with its diagonals drawn in**. This is a square pyramid. Looking straight down you see the square base, and the 4 sloping edges run from each corner to the apex in the centre."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "**Draw** and **label** 2 rectangles with the **same perimeter** but **different dimensions**.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "sentence", fields: [{ label: "Rectangle 1 perimeter = Rectangle 2 perimeter", placeholder: "2 × (length + width) = 2 × (length + width)",
            re: "^\\s*2\\s*x\\s*\\(\\s*(\\d+(?:\\.\\d+)?)\\s*\\+\\s*(\\d+(?:\\.\\d+)?)\\s*\\)\\s*=\\s*2\\s*x\\s*\\((?!\\s*\\1\\s*\\+\\s*\\2\\s*\\))(?!\\s*\\2\\s*\\+\\s*\\1\\s*\\))\\s*(\\d+(?:\\.\\d+)?)\\s*\\+\\s*(\\d+(?:\\.\\d+)?)\\s*\\)\\s*$",
            msg: "Write two different rectangles with the same perimeter, like 2 × (6 + 4) = 2 × (7 + 3).", sample: "2 x (6 + 4) = 2 x (7 + 3)" }] }
        ],
        answer: "Answers vary. Keep length + width the same, because the perimeter is double that. For example **6 cm × 4 cm** and **7 cm × 3 cm**: both have a perimeter of 6 + 4 + 6 + 4 = 7 + 3 + 7 + 3 = **20 cm**.",
        explain: "The slide gives no perimeter, so any two different rectangles whose length + width sums match are accepted."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "A bus company owns 34 buses. Each bus has 28 seats. If 50% of the seats are filled, how many passengers are there?",
        options: ["476", "474", "976", "952"],
        answer: 0,
        explain: "34 × 28 = 952 seats. 50% is half: 952 ÷ 2 = 476 passengers. (952 is all the seats, not the filled ones.)",
        interact: [{ kind: "bar", whole: { v: 952, l: "34 × 28", n: "seats" }, parts: [{ v: 476, l: "?", n: "filled (50%)", hide: true }, { v: 476, l: "empty (50%)" }] }],
        cubes: { ops: ["×", "÷"], solve: [{ t: "All the seats, then half", s: "34 × 28 = 952 seats. 50% = half, so 952 ÷ 2 = 476." }, { t: "Half the buses first", s: "Half of 34 buses is 17 full buses' worth: 17 × 28 = 476." }] }
      },
      {
        type: "sr", focus: "Represents numbers A: Decimals and percentages",
        prompt: "**Order** these decimals in **descending** order: 1.369, 1.258, 1.896, 1.895",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 1.896, hint: "All have 1 one. Compare the tenths, then the hundredths, then the thousandths." },
          { kind: "order", items: ["1.369", "1.258", "1.896", "1.895"], answer: [2, 3, 0, 1] }
        ],
        answer: "**1.896, 1.895, 1.369, 1.258**. Descending means largest to smallest. 1.896 and 1.895 only differ in the thousandths: 6 thousandths is more than 5."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "**Record** one thing you need to remember to do when using a **protractor** to **measure** an **angle**.",
        interact: [{ kind: "select", hint: "Tap every tip that is correct.", items: [
          ["Put the centre point of the protractor on the vertex.", true],
          ["Line up the baseline (0°) with one arm.", true],
          ["Read the scale that starts at 0° on that arm.", true],
          ["Put the curved edge of the protractor on the vertex.", false],
          ["Always read the outside scale, whatever the angle.", false]] }],
        answer: "Any one of: place the **centre point on the vertex**; line up the **0° baseline with one arm**; read the scale that **starts at 0°** on that arm. Then check: an acute angle must read less than 90°.",
        explain: "The slide asks for one thing. Here the class taps all three correct tips and rules out the two wrong ones."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "**Visualise** and **sketch** the **net** for this **cylinder**.",
        img: "u11-cylinder.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "The net of a cylinder is", options: ["2 circles and 1 rectangle", "2 circles and 2 rectangles", "1 circle and 1 triangle", "3 rectangles"], a: 0 }] }
        ],
        answer: "**2 circles and 1 rectangle**. The curved surface unrolls into a rectangle, with a circle touching its top edge and another touching its bottom edge. The rectangle's length is the distance around the circle."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Tobi ran 1 kilometre and 700 metres. **Record** this distance using the **abbreviation** for **kilometres**.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 1700, shift: true, hint: "1700 m in km: ÷ 1000. Shift the digits 3 places to the right." },
          { kind: "input", fields: [{ label: "1 km and 700 m =", value: 1.7, suffix: "km" }] }
        ],
        answer: "**1.7 km**. 700 m is 700 of the 1000 metres in a kilometre, which is 0.7 km. The abbreviation is km: lower case, no full stop, no s."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "A baker has an order for 224 cupcakes. Each tray holds 24 cupcakes. He will need to make 11 trays of cupcakes to complete this order.",
        answer: false,
        explain: "9 trays hold 9 × 24 = 216 cupcakes, which leaves 8 more. So he needs 10 trays (224 ÷ 24 = 9 remainder 8). 11 trays would hold 264, which is 2 more trays than he needs.",
        interact: [{ kind: "pack", total: 224, size: 24, label: "tray", thing: "cupcakes" }],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "224 ÷ 24 = 9 remainder 8. The 8 left over need one more tray: 10 trays." }, { t: "Multiply to check", s: "10 × 24 = 240, enough. 9 × 24 = 216, not enough. 11 trays is too many." }] }
      },
      {
        type: "sr", focus: "Represents numbers A: Whole numbers",
        prompt: "**Record** the missing **integers**.",
        img: "u11-intline.png",
        interact: [{ kind: "cells", cols: 11, w: 52, grid: [
          [null, "#a", null, null, "#b", null, null, null, "#c", null, null],
          [-10, { v: -9 }, -8, -7, { v: -6 }, -5, -4, -3, { v: -2 }, -1, 0]], msg: "Count up by 1 from −10 towards 0." }],
        answer: "a = **−9** · b = **−6** · c = **−2**. Left of zero the numbers are negative, and they get closer to 0 as you move right."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Zacharia faced the **front** of the classroom and made a **three-quarter turn** to his **left**. Draw the **vertex** and **arms** of the angle he formed.",
        interact: [
          { kind: "angle", names: true, degrees: true, reflex: true, target: "reflex", start: 90, label: "The fixed arm is where Zacharia started. Turn the other arm three-quarters of the way round." },
          { kind: "choose", rows: [{ t: "A three-quarter turn makes", options: ["a right angle (90°)", "a straight angle (180°)", "a reflex angle (270°)", "a revolution (360°)"], a: 2 }] }
        ],
        answer: "A three-quarter turn is a **reflex angle of 270°**. The vertex is where Zacharia stands. One arm points to the front, and after turning left three quarters of the way he faces the wall on his right."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "**Identify** and **record** the name of the **three-dimensional object** from its **net**.",
        img: "u11-net.png",
        interact: [{ kind: "choose", rows: [{ t: "This net folds into a", options: ["rectangular prism", "triangular prism", "square pyramid", "cylinder"], a: 0 }] }],
        answer: "A **rectangular prism**. The net has 6 faces: 4 long rectangles and 2 small squares for the ends."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Leon swam 3670 m. **Record** this distance in **kilometres**.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 3670, shift: true, hint: "m to km: ÷ 1000. Shift the digits 3 places to the right." },
          { kind: "input", fields: [{ label: "3670 m =", value: 3.67, suffix: "km" }] }
        ],
        answer: "**3.67 km**. There are 1000 m in 1 km, so divide by 1000: 3670 ÷ 1000 = 3.67."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "What is the **missing value** in this equation: 4 × 40 = ? × 20",
        options: ["9", "10", "7", "8"],
        answer: 3,
        explain: "4 × 40 = 160. 160 ÷ 20 = 8, so 4 × 40 = 8 × 20. Or: 20 is half of 40, so the other number doubles: 4 × 2 = 8.",
        interact: [{ kind: "scale", left: "4 x 40", right: "? x 20", answer: 8 }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Create** a **factor tree** for 42.",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "sentence", fields: [{ label: "42 as a product of prime numbers", placeholder: "42 = ? x ? x ?",
            re: "^\\s*42\\s*=\\s*(?:(?:2|3|7)\\s*x\\s*){2}(?:2|3|7)\\s*$",
            msg: "Keep splitting until every branch ends in a prime number.", sample: "42 = 2 x 3 x 7" }] }
        ],
        answer: "42 → **6 × 7**, then 6 → **2 × 3**. The branches end in the primes **2, 3 and 7**, so 42 = 2 × 3 × 7. (Starting with 2 × 21 or 3 × 14 ends with the same primes.)"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Arlo’s mum told him that art classes start at 18:15. **Record** the time art classes start in **12-hour time** using **am** or **pm** notation.",
        interact: [
          { kind: "clock", time: "6:15", h24: true, drag: true },
          { kind: "input", fields: [{ label: "18:15 =", accept: ["6:15 pm", "6:15pm", "6.15 pm", "6.15pm"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "**6:15 pm**. 18 − 12 = 6, and hours after 12 are in the afternoon or evening, so pm."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "**Convert** the following: 3000 mL = ? L, 300 mL = ? L, 30 mL = ? L, 3 mL = ? L",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 3000, shift: true, hint: "mL to L: ÷ 1000. Shift the digits 3 places to the right." },
          { kind: "input", fields: [{ label: "3000 mL =", value: 3, suffix: "L" }, { label: "300 mL =", value: 0.3, suffix: "L" }, { label: "30 mL =", value: 0.03, suffix: "L" }, { label: "3 mL =", value: 0.003, suffix: "L" }] }
        ],
        answer: "3000 mL = **3 L** · 300 mL = **0.3 L** · 30 mL = **0.03 L** · 3 mL = **0.003 L**. 1 L = 1000 mL, so divide by 1000. Each one is a tenth of the one before."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Chandra walked 27 m on Monday, 94 m on Tuesday and 2400 cm on Wednesday. How many metres did he walk that week?",
        interact: [
          { kind: "bar", whole: { v: 145, l: "?", n: "total", hide: true }, parts: [{ v: 27, l: "27 m", n: "Mon" }, { v: 94, l: "94 m", n: "Tue" }, { v: 24, l: "2400 cm", n: "Wed" }] },
          { kind: "input", fields: [{ label: "2400 cm =", value: 24, suffix: "m" }, { label: "Total", value: 145, suffix: "m" }] }
        ],
        cubes: { ops: ["+"], note: "Change 2400 cm to metres first.", solve: [{ t: "Convert, then add", s: "2400 cm ÷ 100 = 24 m. 27 + 94 + 24 = 145 m." }, { t: "Make friendly numbers", s: "94 + 24 = 118. 118 + 27 = 145 m." }] },
        answer: "2400 cm = 24 m (100 cm in 1 m). 27 + 94 + 24 = **145 m**."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Ivy rode her bike 27 km a day for a total of 5 days. She rode 135 km in total.",
        answer: true,
        explain: "27 × 5 = (20 × 5) + (7 × 5) = 100 + 35 = 135 km. Ivy did ride 135 km.",
        interact: [{ kind: "jumps", start: 0, steps: [27], hint: "Jump 27 km for each day she rode." }],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Split 27", s: "20 × 5 = 100 and 7 × 5 = 35. 100 + 35 = 135 km." }, { t: "Use 25", s: "25 × 5 = 125, plus 2 × 5 = 10. 125 + 10 = 135 km." }] }
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **area model** to solve: 387 × 8",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#×", "#300", "#80", "#7"], ["#8", { v: 2400 }, { v: 640 }, { v: 56 }]], msg: "Multiply 8 by each part: 300, 80 and 7." },
          { kind: "input", fields: [{ label: "387 × 8 =", value: 3096 }] }
        ],
        answer: "Split 387 into 300 + 80 + 7. 8 × 300 = 2400, 8 × 80 = 640, 8 × 7 = 56. 2400 + 640 + 56 = **3096**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Luka’s grandad told him that Taekwondo finishes at 6:45 pm. **Record** the time Taekwondo finishes in **24-hour time**.",
        interact: [
          { kind: "clock", time: "6:45", h24: true, drag: true },
          { kind: "input", fields: [{ label: "6:45 pm =", accept: ["18:45", "1845"], placeholder: "hh:mm" }] }
        ],
        answer: "**18:45**. For pm times, add 12 to the hour: 6 + 12 = 18."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "**Record** the **appropriate unit** to **measure** the **capacities** of these containers.",
        img: "u11-containers.png",
        interact: [{ kind: "choose", rows: [
          { t: "A: bucket", options: ["millilitres (mL)", "litres (L)"], a: 1 },
          { t: "B: drink bottle", options: ["millilitres (mL)", "litres (L)"], a: [0, 1] },
          { t: "C: bath", options: ["millilitres (mL)", "litres (L)"], a: 1 }] }],
        answer: "A bucket: **litres** · B drink bottle: **millilitres** (most hold 500 to 750 mL), or litres for a big bottle · C bath: **litres**.",
        explain: "Both units are accepted for the drink bottle, since bottles range from about 500 mL to 1 L or more."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Find the total length in cm of these 3 items measuring 10 mm, 30 cm and 8.4 m.",
        interact: [
          { kind: "input", fields: [{ label: "10 mm =", value: 1, suffix: "cm" }, { label: "30 cm =", value: 30, suffix: "cm" }, { label: "8.4 m =", value: 840, suffix: "cm" }, { label: "Total length", value: 871, suffix: "cm" }] }
        ],
        cubes: { ops: ["+"], note: "Convert to centimetres first.", solve: [{ t: "Convert to cm", s: "10 mm = 1 cm, 8.4 m = 840 cm. 1 + 30 + 840 = 871 cm." }, { t: "Convert to mm, then back", s: "10 + 300 + 8400 = 8710 mm. 8710 ÷ 10 = 871 cm." }] },
        answer: "10 mm = 1 cm, 8.4 m = 840 cm. 1 + 30 + 840 = **871 cm**."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "8 × 238 =",
        options: ["(8 × 300) + (8 × 8)", "(2 × 800) + (8 × 30) + (8 × 8)", "(8 × 200) + (8 × 30) + (8 × 8)", "(8 × 200) + (8 × 80) + (8 × 3)"],
        answer: 2,
        explain: "238 = 200 + 30 + 8, so 8 × 238 = (8 × 200) + (8 × 30) + (8 × 8) = 1600 + 240 + 64 = 1904. A uses 300, B uses 800 and D mixes up the tens and ones.",
        interact: [{ kind: "cells", cols: 4, w: 90, grid: [["#×", "#200", "#30", "#8"], ["#8", { v: 1600 }, { v: 240 }, { v: 64 }]], msg: "Multiply 8 by each part of 238." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Solve** using a **formal algorithm**: 896 ÷ 2",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 896, hint: "Share the hundreds, then the tens, then the ones into 2 equal groups. Break 1 ten into 10 ones when you need to." },
          { kind: "cells", cols: 4, w: 64, grid: [[null, { v: 4 }, { v: 4 }, { v: 8 }], ["#2 )", "8", "9", "6"]], msg: "8 ÷ 2, then 9 ÷ 2 with 1 left over, then 16 ÷ 2." }
        ],
        answer: "8 hundreds ÷ 2 = 4 hundreds. 9 tens ÷ 2 = 4 tens, remainder 1 ten. Carry it: 16 ones ÷ 2 = 8 ones. 896 ÷ 2 = **448**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "A train **arrives** at **Redfern** at 09:03. **Record** the time it **leaves Ashfield**.",
        img: "u11-timetable.png",
        interact: [
          { kind: "jumps", start: 8 * 60 + 48, end: 9 * 60 + 3, time: true, ampm: true, steps: [1, 5], hint: "Count on from Ashfield to Redfern to check the times." },
          { kind: "input", fields: [{ label: "It leaves Ashfield at", accept: ["08:48", "0848", "8:48", "8:48 am"], placeholder: "hh:mm" }] }
        ],
        answer: "**08:48**. Find the train that reaches Redfern at 09:03 and read up its column to the Ashfield row. Ashfield to Redfern takes 15 minutes."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "**Order** the following **capacities** from **largest** to **smallest**: 6.23 L, 6.023 L, 6324 mL",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 6.023, hint: "Change each to litres (or mL) first, then compare the tenths." },
          { kind: "order", items: ["6.23 L", "6.023 L", "6324 mL"], answer: [2, 0, 1] }
        ],
        answer: "**6324 mL, 6.23 L, 6.023 L**. In millilitres: 6324, 6230 and 6023."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Which graph **best represents** the number of **siblings** in this class? **Communicate** your **reasoning**.",
        interact: [
          { kind: "bargraph", label: "Graph 1: bar graph of the number of siblings", max: 10, step: 2, ylabel: "How many people", xlabel: "Graph 1 · Number of siblings", series: [{ l: "People", c: "#C86DD7" }],
            groups: [{ l: "none", v: [3] }, { l: "one", v: [10] }, { l: "two", v: [8] }, { l: "three", v: [4] }, { l: "four", v: [3] }] },
          { kind: "bargraph", line: true, label: "Graph 2: line graph of the number of siblings", max: 10, step: 2, ylabel: "How many people", xlabel: "Graph 2 · Number of siblings", series: [{ l: "People", c: "#6A2BD9" }],
            groups: [{ l: "four", v: [3] }, { l: "three", v: [4] }, { l: "two", v: [8] }, { l: "one", v: [10] }, { l: "none", v: [3] }] },
          { kind: "choose", rows: [{ t: "The best graph is", options: ["Graph 1: the bar graph", "Graph 2: the line graph"], a: 0 }] }
        ],
        answer: "**The bar graph**. The number of siblings is separate categories (none, one, two…), so each gets its own bar. A line graph joins the points, which suggests a change over time or values in between, like 1.5 siblings, that make no sense here.",
        explain: "Both graphs show the same data. The slide's bar graph has horizontal bars; it is redrawn here with columns so the class can tap each bar."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "A bag has 9 soccer shirts. A club buys 344 bags. The distributive property is being used to calculate the total: 9 × 344 = (9 × 300) + (9 × 40) + (9 × 4) = 2700 + 360 + 36 = 3096",
        answer: true,
        explain: "344 is split into 300 + 40 + 4 and each part is multiplied by 9. That is the distributive property. 2700 + 360 + 36 = 3096 shirts, so every step is right.",
        interact: [{ kind: "cells", cols: 4, w: 90, grid: [["#×", "#300", "#40", "#4"], ["#9", { v: 2700 }, { v: 360 }, { v: 36 }]], msg: "Multiply 9 by each part of 344." }],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Distributive property", s: "9 × 300 = 2700, 9 × 40 = 360, 9 × 4 = 36. 2700 + 360 + 36 = 3096." }, { t: "Use 10 lots", s: "10 × 344 = 3440. Take away 1 lot: 3440 − 344 = 3096." }] }
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **area model** to calculate your answer and record the **remainder** for: 48 ÷ 5",
        interact: [
          { kind: "pack", mode: "share", n: 5, total: 48, label: "group", thing: "counters" },
          { kind: "cells", cols: 2, w: 90, grid: [["#×", { v: 9 }], ["#5", { v: 45 }]], msg: "Find the biggest multiple of 5 that fits in 48." },
          { kind: "input", fields: [{ label: "48 ÷ 5 =", value: 9 }, { label: "remainder", value: 3 }] }
        ],
        answer: "The biggest area with a side of 5 that fits in 48 is 5 × 9 = 45. 48 − 45 = 3 left over. 48 ÷ 5 = **9 remainder 3**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "**Record** the time the 08:35 train from **Lidcombe** arrives at **Summer Hill**.",
        img: "u11-timetable2.png",
        interact: [
          { kind: "jumps", start: 8 * 60 + 35, end: 8 * 60 + 51, time: true, ampm: true, steps: [1, 5], hint: "Count on from 08:35 to the Summer Hill time." },
          { kind: "input", fields: [{ label: "It arrives at Summer Hill at", accept: ["08:51", "0851", "8:51", "8:51 am"], placeholder: "hh:mm" }] }
        ],
        answer: "**08:51**. Find 08:35 in the Lidcombe row and read down the same column to Summer Hill. The trip takes 16 minutes."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "**Identify** and **record** which of the following **capacities** is the **smallest**: 8.13 L, 8314 L, 8323 L",
        interact: [{ kind: "choose", rows: [{ t: "The smallest capacity is", options: ["8.13 L", "8314 L", "8323 L"], a: 0 }] }],
        answer: "**8.13 L**. It is just over 8 litres, while the others are more than 8000 litres. (If they were millilitres, 8314 mL = 8.314 L and 8323 mL = 8.323 L, so 8.13 L is still the smallest.)",
        explain: "The slide gives all three in litres; 8314 and 8323 may have been meant as mL. 8.13 L is the smallest either way."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "How many **years** were there **between** starting school and moving house?",
        img: "u11-timeline.png",
        interact: [
          { kind: "jumps", start: 5, end: 10, steps: [1], hint: "Started school is at 5 cm and moved house is at 10 cm. Jump 1 year for each centimetre." },
          { kind: "input", fields: [{ label: "Years between", value: 5, suffix: "years" }] }
        ],
        answer: "**5 years**. Starting school is at 5 cm and moving house is at 10 cm. 10 − 5 = 5 cm, and 1 cm = 1 year."
      }
    ]
  ]
});
