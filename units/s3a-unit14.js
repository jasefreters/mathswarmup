/*
  Stage 3 Year A, Unit 14 — Review of learning (Term 3, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 3, ls: 4, unit: 14,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 14 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "The **value** of the 7 in the decimal number **2.379** is…",
        options: ["7", "7 tenths", "7 hundredths", "7 thousandths"],
        answer: 2,
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 2.379, hint: "This is 2.379. Which column is the 7 in?" }],
        explain: "2.379 is 2 ones, 3 tenths, 7 hundredths and 9 thousandths. The 7 is in the second place after the decimal point, so it is worth 7 hundredths (0.07)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "**5.125 m** a) What does the **5** represent in this number? b) What does the **125** represent in this number? c) How can **5.125 m** be **renamed** to an equivalent length?",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 5.125, hint: "This is 5.125 metres. 1 thousandth of a metre is 1 millimetre." },
          { kind: "choose", rows: [
            { t: "a) The 5 represents", options: ["5 metres", "5 centimetres", "5 millimetres"], a: 0 },
            { t: "b) The 125 represents", options: ["125 metres", "125 centimetres", "125 millimetres"], a: 2 }] },
          { kind: "input", fields: [{ label: "c) 5.125 m =", value: 5125, suffix: "mm" }, { label: "c) 5.125 m =", value: 512.5, suffix: "cm" }] }
        ],
        answer: "a) **5 whole metres**. b) **125 thousandths of a metre**, which is **125 mm** (12.5 cm). c) 5.125 m = **5 m 125 mm** = **5125 mm** = **512.5 cm**.",
        explain: "There are 1000 mm in a metre, so each thousandth of a metre is 1 mm."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**248 × 6** **Partition** 248 into its **place value parts** to help solve this **equation**.",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#×", { v: 200 }, { v: 40 }, { v: 8 }], ["#6", { v: 1200 }, { v: 240 }, { v: 48 }]], msg: "Top row: the place value parts of 248 (A, B and C). Bottom row: each part × 6." },
          { kind: "input", fields: [{ label: "248 × 6 =", value: 1488 }] }
        ],
        answer: "248 = 200 + 40 + 8 (parts A, B and C of the bar). 6 × 200 = 1200, 6 × 40 = 240, 6 × 8 = 48. 1200 + 240 + 48 = **1488**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Identify** which triangle is: a) equilateral b) isosceles c) scalene",
        interact: [{ kind: "classify", view: [580, 230], hint: "Tap a classification, then tap the triangle that matches it.",
          cats: [{ k: "A", t: "a) equilateral", c: "#2E7D32" }, { k: "B", t: "b) isosceles", c: "#1565C0" }, { k: "C", t: "c) scalene", c: "#C2185B" }],
          shapes: [
            { p: "80,25 25,185 135,185", a: "B", fill: "#FF914D", deco: "<text x='80' y='215' class='co-lab'>1</text>" },
            { p: "180,62 337,40 278,187", a: "A", fill: "#7ADCDF", deco: "<text x='265' y='215' class='co-lab'>2</text>" },
            { p: "380,40 555,119 398,144", a: "C", fill: "#E2A8EF", deco: "<text x='450' y='190' class='co-lab'>3</text>" }] }],
        answer: "a) Equilateral: **triangle 2** (3 equal sides) · b) Isosceles: **triangle 1** (2 equal sides) · c) Scalene: **triangle 3** (no equal sides).",
        explain: "Measured on the slide: triangle 1 has two long sides of the same length, triangle 2 has three equal sides (it is just turned), and triangle 3's sides are all different."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "**Record** the **coordinates** of each star on the **first quadrant** of the **Cartesian plane**: a) purple b) green c) blue d) orange",
        interact: [
          { kind: "plane", range: [0, 8, 0, 8], points: [{ l: "a) purple", x: 6, y: 6 }, { l: "b) green", x: 1, y: 5 }, { l: "c) blue", x: 2, y: 2 }, { l: "d) orange", x: 5, y: 3 }], hint: "Tap a star to trace it to each axis. Read across (x) first, then up (y)." },
          { kind: "input", fields: [
            { label: "a) Purple x", value: 6 }, { label: "a) Purple y", value: 6 },
            { label: "b) Green x", value: 1 }, { label: "b) Green y", value: 5 },
            { label: "c) Blue x", value: 2 }, { label: "c) Blue y", value: 2 },
            { label: "d) Orange x", value: 5 }, { label: "d) Orange y", value: 3 }] }
        ],
        answer: "a) Purple **(6, 6)** · b) Green **(1, 5)** · c) Blue **(2, 2)** · d) Orange **(5, 3)**. Go across the x-axis first, then up the y-axis."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "**4.725** The value of **2** in this number is **2 hundredths**.",
        answer: true,
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 4.725, hint: "This is 4.725. Which column is the 2 in?" }],
        explain: "4.725 is 4 ones, 7 tenths, 2 hundredths and 5 thousandths. The 2 is worth 2 hundredths (0.02)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "15.5 cm is **15 centimetres and 5 millimetres** or **15 [1/2] centimetres**. **Use this** to **interpret** and **record** these **measurements**: a) 43.5 cm b) 84.75 cm c) 61.25 m",
        interact: [
          { kind: "input", fields: [
            { label: "a) 43.5 cm =", value: 43, suffix: "cm" }, { label: "and", value: 5, suffix: "mm" },
            { label: "b) 84.75 cm =", value: 84, suffix: "cm" }, { label: "and", value: 7.5, suffix: "mm" },
            { label: "c) 61.25 m =", value: 61, suffix: "m" }, { label: "and", value: 25, suffix: "cm" }] },
          { kind: "choose", rows: [
            { t: "a) 43.5 cm as a mixed number", options: ["43 [1/2] cm", "43 [1/5] cm", "43 [5/100] cm"], a: 0 },
            { t: "b) 84.75 cm as a mixed number", options: ["84 [1/4] cm", "84 [3/4] cm", "84 [7/5] cm"], a: 1 },
            { t: "c) 61.25 m as a mixed number", options: ["61 [1/4] m", "61 [1/2] m", "61 [2/5] m"], a: 0 }] }
        ],
        answer: "a) **43 cm and 5 mm**, or **43 [1/2] cm** · b) **84 cm and 7.5 mm**, or **84 [3/4] cm** · c) **61 m and 25 cm**, or **61 [1/4] m**.",
        explain: "0.75 cm is three quarters of a centimetre, which is 7.5 mm (there are 10 mm in 1 cm). 0.25 m is a quarter of a metre, which is 25 cm."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**2564 × 3** Use the **distributive property** with **partial products** to solve this problem.",
        interact: [
          { kind: "cells", cols: 5, w: 90, grid: [["#×", { v: 2000 }, { v: 500 }, { v: 60 }, { v: 4 }], ["#3", { v: 6000 }, { v: 1500 }, { v: 180 }, { v: 12 }]], msg: "Top row: the place value parts of 2564. Bottom row: each part × 3." },
          { kind: "input", fields: [{ label: "2564 × 3 =", value: 7692 }] }
        ],
        answer: "2564 = 2000 + 500 + 60 + 4. 3 × 2000 = 6000, 3 × 500 = 1500, 3 × 60 = 180, 3 × 4 = 12. 6000 + 1500 + 180 + 12 = **7692**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Match** the **triangle** with its **classification**.",
        interact: [{ kind: "choose", rows: [
          { t: "1. equilateral", options: ["A. no equal sides and no equal angles", "B. 3 equal sides and 3 equal angles", "C. 2 equal sides and 2 equal angles"], a: 1 },
          { t: "2. isosceles", options: ["A. no equal sides and no equal angles", "B. 3 equal sides and 3 equal angles", "C. 2 equal sides and 2 equal angles"], a: 2 },
          { t: "3. scalene", options: ["A. no equal sides and no equal angles", "B. 3 equal sides and 3 equal angles", "C. 2 equal sides and 2 equal angles"], a: 0 }] }],
        answer: "1. Equilateral = **B** (3 equal sides and 3 equal angles) · 2. Isosceles = **C** (2 equal sides and 2 equal angles) · 3. Scalene = **A** (no equal sides and no equal angles)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "**Record** the **coordinates** of each dinosaur on the **Cartesian plane**: a) green b) blue c) purple d) orange",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ l: "a) green", x: -5, y: -2 }, { l: "b) blue", x: -2, y: 2 }, { l: "c) purple", x: 4, y: 5 }, { l: "d) orange", x: 3, y: -3 }], hint: "Tap a dinosaur to trace it to each axis. Read across (x) first, then up or down (y)." },
          { kind: "input", fields: [
            { label: "a) Green x", value: -5 }, { label: "a) Green y", value: -2 },
            { label: "b) Blue x", value: -2 }, { label: "b) Blue y", value: 2 },
            { label: "c) Purple x", value: 4 }, { label: "c) Purple y", value: 5 },
            { label: "d) Orange x", value: 3 }, { label: "d) Orange y", value: -3 }] }
        ],
        answer: "a) Green **(−5, −2)** · b) Blue **(−2, 2)** · c) Purple **(4, 5)** · d) Orange **(3, −3)**. Left of 0 is negative x; below 0 is negative y."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers A",
        prompt: "**6, 4, 5, 7** The **largest decimal** that can be made by arranging these numbers is:",
        options: ["4.567", "6.574", "7.654", "7.645"],
        answer: 2,
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 0, hint: "Build the largest decimal with one each of 6, 4, 5 and 7. Which digit should go in the ones column?" }],
        explain: "Put the largest digit in the place with the biggest value: 7 ones, then 6 tenths, 5 hundredths and 4 thousandths. 7.654 is bigger than 7.645 because 5 hundredths is more than 4 hundredths."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Sofia ran 2600 m. How many kilometres did she run?",
        interact: [
          { kind: "marker", min: 0, max: 3000, divs: 30, majorEvery: 10, labels: [0, 1000, 2000, 3000], label: "2600 m", hint: "Each big tick is 1000 m, which is 1 km. Slide the pin to 2600 m." },
          { kind: "input", fields: [{ label: "2600 m =", value: 2.6, suffix: "km" }] }
        ],
        cubes: { ops: ["÷"], note: "1 km = 1000 m.", solve: [{ t: "Count the thousands", s: "2600 m is 2000 m and 600 m. 2000 m = 2 km and 600 m = 0.6 km, so 2.6 km." }, { t: "Divide by 1000", s: "2600 ÷ 1000 = 2.6. Every digit moves three places to the right." }] },
        answer: "**2.6 km** (2 km and 600 m). There are 1000 m in 1 km, so 2600 ÷ 1000 = 2.6."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **area model** to solve: **24 × 45 =**",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#×", "#40", "#5"], ["#4", { v: 160 }, { v: 20 }], ["#20", { v: 800 }, { v: 100 }]], msg: "Multiply the row number by the column number in each box." },
          { kind: "input", fields: [{ label: "24 × 45 =", value: 1080 }] }
        ],
        answer: "4 × 40 = 160, 4 × 5 = 20, 20 × 40 = 800, 20 × 5 = 100. 160 + 20 + 800 + 100 = **1080**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Match** the **quadrilateral** with its **classification**.",
        interact: [{ kind: "choose", rows: [
          { t: "1. square", options: ["A", "B", "C", "D"], a: 1 },
          { t: "2. rectangle", options: ["A", "B", "C", "D"], a: 2 },
          { t: "3. parallelogram", options: ["A", "B", "C", "D"], a: 0 },
          { t: "4. rhombus", options: ["A", "B", "C", "D"], a: 3 }] }],
        table: [["", "Classification"], ["A", "2 pairs of equal sides and 2 pairs of equal angles"], ["B", "4 equal sides and 4 equal angles"], ["C", "2 pairs of equal sides and 4 equal angles"], ["D", "4 equal sides and 2 pairs of equal angles"]],
        answer: "1. Square = **B** · 2. Rectangle = **C** · 3. Parallelogram = **A** · 4. Rhombus = **D**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Identify** the a) **regular** polygon b) **irregular** polygon. **Communicate** your **reasoning**.",
        interact: [
          { kind: "classify", view: [460, 230], hint: "Tap a group, then tap the polygon that belongs in it.",
            cats: [{ k: "R", t: "a) regular polygon", c: "#2E7D32" }, { k: "I", t: "b) irregular polygon", c: "#C2185B" }],
            shapes: [
              { p: "30,20 100,20 100,60 170,60 170,205 100,205 100,165 30,165", a: "I", fill: "#B9C4D6", deco: "<text x='100' y='225' class='co-lab'>1</text>" },
              { p: "424.7,138.8 386.8,176.7 333.2,176.7 295.3,138.8 295.3,85.2 333.2,47.3 386.8,47.3 424.7,85.2", a: "R", fill: "#B9C4D6", deco: "<text x='360' y='210' class='co-lab'>2</text>" }] },
          { kind: "choose", rows: [{ t: "Why is shape 2 regular?", options: ["All its sides and all its angles are equal", "It has 8 sides", "It has no straight sides"], a: 0 }] }
        ],
        answer: "a) **Shape 2** is a regular octagon: all 8 sides are the same length and all 8 angles are equal. b) **Shape 1** is irregular: it also has 8 sides, but they are different lengths and some angles are reflex.",
        explain: "Both shapes have 8 sides, so counting sides alone doesn't decide it. Regular means every side and every angle is equal."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "0.725 is **greater than** 0.072 **Communicate** your **reasoning**.",
        answer: true,
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 10, tol: 0.04, items: [["0.725", 0.725], ["0.072", 0.072]] }],
        explain: "Compare the tenths first: 0.725 has 7 tenths and 0.072 has 0 tenths. So 0.725 is much greater. On the number line 0.725 is near 3 quarters and 0.072 is close to 0."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "What is the **perimeter** of each shape?",
        interact: [
          { kind: "sides", view: [200, 190], label: "A: square with a side of 3 m", fill: "#FFFFFF", poly: [[40, 50], [160, 50], [160, 170], [40, 170]],
            dims: [{ from: [40, 32], to: [160, 32] }],
            labels: [{ x: 100, y: 22, t: "3 m" }, { x: 8, y: 70, t: "A", anchor: "start" }] },
          { kind: "sides", view: [220, 200], label: "B: triangle with a 5 m base", fill: "#FFFFFF", poly: [[110, 20], [180, 141], [40, 141]],
            dims: [{ from: [40, 162], to: [180, 162] }],
            labels: [{ x: 110, y: 190, t: "5 m" }, { x: 8, y: 40, t: "B", anchor: "start" }] },
          { kind: "sides", view: [300, 150], label: "C: rectangle 7 m by 2 m", fill: "#FFFFFF", poly: [[60, 40], [270, 40], [270, 120], [60, 120]],
            dims: [{ from: [60, 22], to: [270, 22] }, { from: [40, 40], to: [40, 120] }],
            labels: [{ x: 165, y: 14, t: "7 m" }, { x: 8, y: 30, t: "C", anchor: "start" }, { x: 30, y: 86, t: "2 m", anchor: "end" }] },
          { kind: "input", fields: [{ label: "A", value: 12, suffix: "m" }, { label: "B", value: 15, suffix: "m" }, { label: "C", value: 18, suffix: "m" }] }
        ],
        answer: "A: 3 + 3 + 3 + 3 = **12 m** · B: 5 + 5 + 5 = **15 m** · C: 7 + 2 + 7 + 2 = **18 m**.",
        explain: "Only one side is labelled on A and B. A is a square, so all 4 sides are 3 m. B is drawn as an equilateral triangle, so we take all 3 sides as 5 m."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **area model** to solve: **32 × 54**",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#×", "#50", "#4"], ["#2", { v: 100 }, { v: 8 }], ["#30", { v: 1500 }, { v: 120 }]], msg: "Multiply the row number by the column number in each box." },
          { kind: "input", fields: [{ label: "32 × 54 =", value: 1728 }] }
        ],
        answer: "2 × 50 = 100, 2 × 4 = 8, 30 × 50 = 1500, 30 × 4 = 120. 100 + 8 + 1500 + 120 = **1728**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **area model** to **calculate** the **area** of this **rectangle**: 32 m long and 8 m wide.",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#×", { v: 30 }, { v: 2 }], ["#8", { v: 240 }, { v: 16 }]], msg: "Split 32 into tens and ones, then multiply each part by 8." },
          { kind: "input", fields: [{ label: "Area", value: 256, suffix: "m²" }] }
        ],
        answer: "Split 32 into 30 + 2. 8 × 30 = 240 and 8 × 2 = 16. 240 + 16 = **256 m²**."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "**Draw** the **net** for this **three-dimensional shape**.",
        img: "u14-pyramid.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [{ t: "The net needs", options: ["1 square and 4 triangles", "2 squares and 4 triangles", "1 square and 3 triangles", "4 triangles only"], a: 0 }] }
        ],
        answer: "It is a **square-based pyramid**. Its net is **1 square** with **4 triangles**, one joined to each side of the square, so they fold up to meet at the top."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "Which **fraction** would be **located** at the **blue** line?",
        img: "u14-blueline.png",
        options: ["[1/4]", "[1/2]", "[1/5]", "[1/3]"],
        answer: 3,
        interact: [{ kind: "numberline", min: 0, max: 1, tol: 0.035, items: [["[1/4]", 0.25], ["[1/2]", 0.5], ["[1/5]", 0.2], ["[1/3]", 1 / 3]] }],
        explain: "The middle tick is [1/2]. The blue line splits the distance from 0 to 1 into 3 equal parts and sits at the first one, so it is [1/3]. [1/4] would be halfway between 0 and [1/2], a little closer to 0."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "This **rectangle** has a **perimeter** of **16 metres**. **Draw** and **label** a **rectangle** with the **same perimeter** but **different side lengths**.",
        interact: [
          { kind: "sides", view: [300, 170], label: "Rectangle 5 m by 3 m", fill: "#FFFFFF", poly: [[60, 40], [260, 40], [260, 150], [60, 150]],
            dims: [{ from: [60, 22], to: [260, 22] }, { from: [40, 40], to: [40, 150] }],
            labels: [{ x: 160, y: 14, t: "5 m" }, { x: 30, y: 100, t: "3 m", anchor: "end" }] },
          { kind: "sketch", grid: "square" },
          { kind: "sentence", fields: [{ label: "Perimeter of your rectangle", placeholder: "2 x (length + width) = 16", re: "^(?!.*\\(\\s*(5\\s*\\+\\s*3|3\\s*\\+\\s*5)\\s*\\))\\s*2\\s*x\\s*\\(\\s*\\d+(\\.\\d+)?\\s*\\+\\s*\\d+(\\.\\d+)?\\s*\\)\\s*=\\s*16\\s*$", msg: "Write 2 x (length + width) = 16 with side lengths different from 5 m and 3 m.", sample: "2 x (6 + 2) = 16" }] }
        ],
        answer: "Any rectangle whose length and width add to **8 m**, for example **6 m by 2 m** (6 + 2 + 6 + 2 = 16 m), **7 m by 1 m**, or a **4 m by 4 m** square.",
        explain: "Half the perimeter is 16 ÷ 2 = 8 m, so the length + width must be 8 m. Decimal sides like 4.5 m by 3.5 m also work."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Choose** the most **appropriate multiplicative strategy** to solve: **732 × 45** **Communicate** your **reasoning**.",
        interact: [
          { kind: "choose", rows: [{ t: "A good strategy", options: ["Area model: split 45 into 40 + 5", "Count by 45s", "Repeated addition of 732"], a: 0 }] },
          { kind: "cells", cols: 4, w: 90, grid: [["#×", "#700", "#30", "#2"], ["#40", { v: 28000 }, { v: 1200 }, { v: 80 }], ["#5", { v: 3500 }, { v: 150 }, { v: 10 }]], msg: "Multiply the row number by the column number in each box." },
          { kind: "input", fields: [{ label: "732 × 45 =", value: 32940 }] }
        ],
        answer: "An **area model** (or the multiplication algorithm) works well, because both numbers are large. 732 × 40 = 29 280 and 732 × 5 = 3660. 29 280 + 3660 = **32 940**.",
        explain: "Other efficient strategies are fine, such as 732 × 45 = 732 × 90 ÷ 2, or the standard algorithm."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Both **rectangles** have a **perimeter** of **24 metres**. Do they have the **same area**? **Communicate** your **reasoning**.",
        interact: [
          { kind: "areagrid", size: 34, cells: ["11111111", "11111111", "11111111", "11111111"] },
          { kind: "areagrid", size: 34, cells: ["11111", "11111", "11111", "11111", "11111", "11111", "11111"] },
          { kind: "input", fields: [{ label: "Area of the 8 m by 4 m rectangle", value: 32, suffix: "m²" }, { label: "Area of the 5 m by 7 m rectangle", value: 35, suffix: "m²" }] },
          { kind: "choose", rows: [{ t: "Same area?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No.** 8 × 4 = **32 m²** and 5 × 7 = **35 m²**. Both perimeters are 24 m, but the 5 m by 7 m rectangle is closer to a square, so it has the bigger area.",
        explain: "Each square on the grids is 1 m². Check the perimeters: 8 + 4 + 8 + 4 = 24 m and 5 + 7 + 5 + 7 = 24 m."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "**Identify** the **three-dimensional shapes** from these **nets**.",
        img: "u14-nets.png",
        interact: [{ kind: "choose", rows: [
          { t: "Net A", options: ["Triangular prism", "Triangular pyramid", "Square-based pyramid", "Cube"], a: 0 },
          { t: "Net B", options: ["Triangular prism", "Triangular pyramid", "Square-based pyramid", "Cube"], a: 1 }] }],
        answer: "A: **triangular prism** (3 rectangles and 2 triangles) · B: **triangular pyramid** (4 triangles)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "“Eight is bigger than four so one eighth must be bigger than one quarter.”",
        img: "u14-eighth.png",
        answer: false,
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 8, tol: 0.035, items: [["[1/4]", 0.25], ["[1/8]", 0.125]] }],
        explain: "When a whole is cut into 8 equal parts, each part is smaller than when it is cut into 4. [1/8] is half of [1/4], so [1/8] belongs between 0 and [1/4], not past it. The bigger the denominator, the smaller the unit fraction."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "**Record** these measurements using **kilograms** and **grams**: a) 3.06 kg b) 53.25 kg c) 7.308 kg",
        interact: [
          { kind: "pv", cols: ["T", "O", "t", "h", "th"], start: 7.308, hint: "This is 7.308 kg. The digits after the decimal point are thousandths of a kilogram: grams." },
          { kind: "input", fields: [
            { label: "a) 3.06 kg =", value: 3, suffix: "kg" }, { label: "and", value: 60, suffix: "g" },
            { label: "b) 53.25 kg =", value: 53, suffix: "kg" }, { label: "and", value: 250, suffix: "g" },
            { label: "c) 7.308 kg =", value: 7, suffix: "kg" }, { label: "and", value: 308, suffix: "g" }] }
        ],
        answer: "a) **3 kg 60 g** · b) **53 kg 250 g** · c) **7 kg 308 g**. 1 kg = 1000 g, so the three places after the decimal point are grams: 0.06 = 0.060 kg = 60 g, 0.25 = 0.250 kg = 250 g."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**38 ÷ 6** a) Draw an **array** to model the equation. b) **Record** the **inverse multiplication** number sentence.",
        interact: [
          { kind: "pack", total: 38, size: 6, label: "row", thing: "dots", hint: "Make rows of 6. How many full rows? How many are left over?" },
          { kind: "array", rows: 6, cols: 6, showTotal: true, hint: "6 rows of 6 is 36. The 2 left over can't make another full row." },
          { kind: "input", fields: [{ label: "38 ÷ 6 =", value: 6 }, { label: "remainder", value: 2 }] },
          { kind: "sentence", fields: [{ label: "Inverse multiplication", placeholder: "? x ? + ? = 38", re: "^\\s*(6\\s*x\\s*6\\s*\\+\\s*2|2\\s*\\+\\s*6\\s*x\\s*6)\\s*=\\s*38\\s*$|^\\s*38\\s*=\\s*(6\\s*x\\s*6\\s*\\+\\s*2|2\\s*\\+\\s*6\\s*x\\s*6)\\s*$", msg: "Use the 6 rows of 6 and the 2 left over.", sample: "6 x 6 + 2 = 38" }] }
        ],
        answer: "a) **6 rows of 6** with **2 left over**, so 38 ÷ 6 = **6 remainder 2**. b) **6 × 6 + 2 = 38**.",
        explain: "38 is not a multiple of 6, so the array can't be complete: 6 × 6 = 36 and 6 × 7 = 42. The inverse sentence must add the remainder."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Calculate** the **area** of this **rectangle**: 9 m long and 6 m wide.",
        interact: [
          { kind: "areagrid", size: 40, cells: ["111111111", "111111111", "111111111", "111111111", "111111111", "111111111"] },
          { kind: "input", fields: [{ label: "Area", value: 54, suffix: "m²" }] }
        ],
        answer: "6 rows of 9: 6 × 9 = **54 m²**.",
        explain: "Each square on the grid stands for 1 m²."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "**1800 hours** is read as **eighteen-hundred hours**. Using 24-hour time language, write how we would read: a) 1400 hours b) 1630 hours c) 0630 hours",
        interact: [
          { kind: "clock", time: "4:30", h24: true },
          { kind: "choose", rows: [
            { t: "a) 1400 hours", options: ["fourteen-hundred hours", "four hundred hours", "one thousand four hundred hours"], a: 0 },
            { t: "b) 1630 hours", options: ["sixteen-thirty hours", "four-thirty hours", "one six three zero"], a: 0 },
            { t: "c) 0630 hours", options: ["six-thirty pm", "zero six-thirty hours", "sixty-thirty hours"], a: 1 }] }
        ],
        answer: "a) **fourteen-hundred hours** · b) **sixteen-thirty hours** · c) **zero six-thirty hours** (also said oh six-thirty hours)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "This number line shows **0 to 60 minutes**. Which letter would represent **40 minutes**?",
        img: "u14-minutes.png",
        options: ["A", "B", "C", "D"],
        answer: 2,
        interact: [{ kind: "marker", min: 0, max: 60, divs: 12, majorEvery: 6, labels: [0, 30, 60], label: "40 min", hint: "Each small tick is 5 minutes. Slide the pin to 40 minutes, then compare with the letters." }],
        explain: "40 minutes is [40/60] = [2/3] of the hour. C sits two thirds of the way from 0 to 1. A is 15 minutes ([1/4]), B is 20 minutes ([1/3]) and D is 45 minutes ([3/4])."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "**Convert** these measurements from **grams** to **kilograms**: a) 306 g b) 2305 g c) 9338 g",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 2305, shift: true, hint: "This is 2305 g. Divide by 1000 to change grams to kilograms: press ÷10 three times." },
          { kind: "input", fields: [{ label: "a) 306 g =", value: 0.306, suffix: "kg" }, { label: "b) 2305 g =", value: 2.305, suffix: "kg" }, { label: "c) 9338 g =", value: 9.338, suffix: "kg" }] }
        ],
        answer: "a) **0.306 kg** · b) **2.305 kg** · c) **9.338 kg**. 1000 g = 1 kg, so divide by 1000: every digit moves three places to the right."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use your knowledge of **multiples** to **partition** and **divide**: **1628 ÷ 4**",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#÷ 4", { v: 1600 }, { v: 28 }], ["#Quotient", { v: 400 }, { v: 7 }]], msg: "Split 1628 into multiples of 4, then divide each part by 4." },
          { kind: "input", fields: [{ label: "1628 ÷ 4 =", value: 407 }] }
        ],
        answer: "Split 1628 into **1600 + 28**, both multiples of 4. 1600 ÷ 4 = 400 and 28 ÷ 4 = 7. 400 + 7 = **407**.",
        explain: "Check: 4 × 407 = 1628. Other partitions of multiples of 4 work too, such as 1200 + 400 + 28."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Which **area** would be **calculated** using **square kilometres**? swimming pool or local park? **Communicate** your **reasoning**.",
        interact: [{ kind: "choose", rows: [
          { t: "Measured in square kilometres", options: ["swimming pool", "local park"], a: 1 },
          { t: "A swimming pool is best measured in", options: ["square centimetres", "square metres", "square kilometres"], a: 1 }] }],
        answer: "The **local park**. A square kilometre is a square 1000 m by 1000 m, so it suits large areas like parks, suburbs and farms. A swimming pool is only about 25 m or 50 m long, so its area is measured in **square metres**.",
        explain: "Of the two, the park is the only one big enough for square kilometres. A small local park might also be given in square metres or hectares; even larger areas such as suburbs or national parks are where km² really fits."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "**Convert** to **12-hour time** using **am or pm notation**: a) 2330 hours b) 1745 hours c) 0815 hours",
        interact: [
          { kind: "clock", time: "5:45", h24: true, drag: true },
          { kind: "input", fields: [
            { label: "a) 2330 hours =", accept: ["11:30 pm", "11:30pm", "11.30 pm", "11.30pm"], placeholder: "h:mm am/pm" },
            { label: "b) 1745 hours =", accept: ["5:45 pm", "5:45pm", "5.45 pm", "5.45pm"], placeholder: "h:mm am/pm" },
            { label: "c) 0815 hours =", accept: ["8:15 am", "8:15am", "8.15 am", "8.15am"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "a) **11:30 pm** · b) **5:45 pm** · c) **8:15 am**. For hours 13 to 23, take away 12 and use pm. Hours before 12 are am."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "On a number line, [3/4] is **closer to one** than [5/8].",
        answer: true,
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 8, tol: 0.035, items: [["[3/4]", 0.75], ["[5/8]", 0.625]] }],
        explain: "[3/4] = [6/8]. It is [2/8] away from 1, but [5/8] is [3/8] away from 1. So [3/4] is closer to one."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "**Convert** these measurements from **kilograms** to **tonnes**: a) 3650 kg b) 6605 kg c) 8002 kg",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 3650, shift: true, hint: "This is 3650 kg. 1000 kg = 1 tonne, so press ÷10 three times." },
          { kind: "input", fields: [{ label: "a) 3650 kg =", value: 3.65, suffix: "t" }, { label: "b) 6605 kg =", value: 6.605, suffix: "t" }, { label: "c) 8002 kg =", value: 8.002, suffix: "t" }] }
        ],
        answer: "a) **3.65 t** (3.650 t) · b) **6.605 t** · c) **8.002 t**. 1000 kg = 1 tonne, so divide by 1000."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use repeated halving to solve: 4 identical bicycles cost $5408, what is the cost of one bicycle?",
        interact: [
          { kind: "bar", whole: { v: 5408, l: "$5408", n: "4 bicycles" }, parts: [{ v: 1352, l: "$1352", n: "1 bicycle", hide: true }, { v: 1352, l: "$1352", n: "", hide: true }, { v: 1352, l: "$1352", n: "", hide: true }, { v: 1352, l: "$1352", n: "", hide: true }] },
          { kind: "input", fields: [{ label: "Half of $5408 (2 bicycles)", value: 2704, prefix: "$" }, { label: "Half again (1 bicycle)", value: 1352, prefix: "$" }] }
        ],
        cubes: { ops: ["÷"], note: "Dividing by 4 is the same as halving twice.", solve: [{ t: "Halve, then halve again", s: "Half of 5408 = 2704 (the cost of 2 bicycles). Half of 2704 = 1352 (the cost of 1 bicycle)." }, { t: "Check by multiplying", s: "1352 × 4 = 5408 ✓, or double 1352 = 2704 and double 2704 = 5408." }] },
        answer: "**$1352**. Half of $5408 is $2704 (2 bicycles), and half of $2704 is $1352 (1 bicycle)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Calculate** the **area** of this **rectangle**: 7 km wide and 8 km long.",
        interact: [
          { kind: "areagrid", size: 36, cells: ["1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111"] },
          { kind: "input", fields: [{ label: "Area", value: 56, suffix: "km²" }] }
        ],
        answer: "8 rows of 7: 7 × 8 = **56 km²**.",
        explain: "Each square on the grid stands for 1 km² (a square 1 km by 1 km)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Seb needs to choose an **appropriate vertical scale** for this graph to represent the following **number of books read each month**. Jan: 2, Feb: 5, Mar: 9, Apr: 12. What would be an **appropriate vertical scale**?",
        interact: [
          { kind: "choose", rows: [{ t: "A good vertical scale", options: ["0 to 12, counting by 2s", "0 to 100, counting by 10s", "0 to 4, counting by 1s", "0 to 1000, counting by 100s"], a: 0 }] },
          { kind: "bargraph", max: 12, step: 2, ylabel: "Books read", xlabel: "Month", label: "Books read each month",
            series: [{ l: "Books", c: "#3E86B8" }],
            groups: [{ l: "Jan", v: [2] }, { l: "Feb", v: [5] }, { l: "Mar", v: [9] }, { l: "Apr", v: [12] }] }
        ],
        answer: "**Start at 0 and count by 2s up to 12** (or 14). The biggest value is 12, and 6 or 7 grid lines fit the graph. Odd values like 5 and 9 sit halfway between two lines.",
        explain: "Counting by 1s to 12 also works if there is room for 12 grid lines. A scale counting by 10s would squash the columns too much to read."
      }
    ]
  ]
});
