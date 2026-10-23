/*
  Stage 3 Year A, Unit 13 — Review of learning (Term 3, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 3, ls: 3, unit: 13,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 13 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The **factors** for **12** are 1, 2, 4, 6, 12 and…",
        options: ["5", "3", "8", "10"],
        answer: 1,
        interact: [{ kind: "array", rows: 3, cols: 4, showTotal: true, hint: "Build arrays of 12. Each row count and column count is a factor." }],
        explain: "3 × 4 = 12, so 3 is a factor of 12. 5, 8 and 10 don't divide 12 evenly. The factors of 12 are 1, 2, 3, 4, 6 and 12."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "12 has been modelled as 3 rows of 4 and as 1 row of 12. **Demonstrate** another way to model **12**.",
        img: "u13-model12.png",
        interact: [
          { kind: "array", rows: 3, cols: 4, showTotal: true, hint: "Change the rows and columns to build a different array of 12." },
          { kind: "pair", labels: ["Rows", "Columns"], unit: "", rule: "product", target: 12, exclude: [[3, 4], [1, 12]] }
        ],
        answer: "**2 rows of 6** (or 6 rows of 2) = 12. Other models work too, such as 6 + 6, 4 + 4 + 4, or jumps of 3 on a number line.",
        explain: "The pictures already show 3 × 4 and 1 × 12, so the array check asks for 2 × 6 or 6 × 2."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Match** the triangles to their **classification**.",
        interact: [{ kind: "classify", view: [620, 240], hint: "Tap a classification, then tap the triangle that matches it.",
          cats: [{ k: "A", t: "A. equilateral", c: "#2E7D32" }, { k: "B", t: "B. isosceles", c: "#1565C0" }, { k: "C", t: "C. scalene", c: "#EF6C00" }],
          shapes: [
            { p: "30,40 30,200 180,120", a: "B", fill: "#215732", deco: "<text x='70' y='228' class='co-lab'>1</text>" },
            { p: "220,50 380,50 300,188.6", a: "A", fill: "#7AA244", deco: "<text x='295' y='228' class='co-lab'>2</text>" },
            { p: "420,200 600,200 600,90", a: "C", fill: "#91E09B", deco: "<text x='540' y='228' class='co-lab'>3</text>" }] }],
        answer: "1 = **B isosceles** (two equal sides) · 2 = **A equilateral** (three equal sides) · 3 = **C scalene** (no equal sides; it is also right-angled)."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "**Round 4 681 222** to the nearest: thousand, ten thousand, hundred thousand, million.",
        interact: [
          { kind: "marker", min: 4000000, max: 5000000, divs: 10, majorEvery: 5, labels: [4000000, 4500000, 5000000], label: "4 681 222", hint: "Slide the pin to 4 681 222. Which million is it closer to?" },
          { kind: "input", fields: [{ label: "Nearest thousand", value: 4681000 }, { label: "Nearest ten thousand", value: 4680000 }, { label: "Nearest hundred thousand", value: 4700000 }, { label: "Nearest million", value: 5000000 }] }
        ],
        answer: "Thousand: **4 681 000** · Ten thousand: **4 680 000** · Hundred thousand: **4 700 000** · Million: **5 000 000**. Look at the digit to the right of the place you round to: 5 or more rounds up."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "You have been asked to fill a mystery bag with counters, some are red and some are blue. You need to ensure that it is twice as likely to pick a red counter than a blue counter. Record how many red and blue counters you would put in the bag to make this happen.",
        interact: [{ kind: "select", hint: "Tap every bag that makes red twice as likely as blue.", items: [
          ["2 red, 1 blue", true], ["4 red, 2 blue", true], ["3 red, 2 blue", false], ["2 red, 4 blue", false], ["6 red, 3 blue", true], ["10 red, 8 blue", false]] }],
        cubes: { ops: ["×"], note: "Twice as likely means twice as many red counters as blue.", solve: [{ t: "Start small", s: "Put in 1 blue, then double it for red: 2 red. 2 out of 3 chances are red, 1 out of 3 is blue." }, { t: "Scale it up", s: "Any number of blue works if red is double: 3 blue and 6 red, or 5 blue and 10 red." }] },
        answer: "Red must be **double** blue, for example **2 red and 1 blue**, 4 red and 2 blue, or 6 red and 3 blue."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "**4** is a factor of **32**.",
        answer: true,
        interact: [{ kind: "array", rows: 4, cols: 8, showTotal: true, hint: "4 rows of 8: is it exactly 32?" }],
        explain: "4 × 8 = 32, so 32 divides into 4 equal groups with nothing left over."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use an **area model** to solve 1384 ÷ 4",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#÷ 4", "#1200", "#160", "#24"], ["#Quotient", { v: 300 }, { v: 40 }, { v: 6 }]], msg: "Divide each part of 1384 by 4." },
          { kind: "input", fields: [{ label: "1384 ÷ 4 =", value: 346 }] }
        ],
        answer: "Split 1384 into 1200 + 160 + 24, the multiples of 4. 1200 ÷ 4 = 300, 160 ÷ 4 = 40, 24 ÷ 4 = 6. 300 + 40 + 6 = **346**.",
        explain: "Check: 4 × 346 = 1384. Other partitions work too, such as 800 + 400 + 160 + 24."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "a) Name a quadrilateral that **does not have a line of symmetry**. b) Name a quadrilateral that has a **diagonal line of symmetry**. c) Name a quadrilateral that has **rotational symmetry**.",
        interact: [{ kind: "choose", rows: [
          { t: "a) No line of symmetry", options: ["Square", "Parallelogram", "Kite", "Rectangle"], a: 1 },
          { t: "b) A diagonal line of symmetry", options: ["Rectangle", "Parallelogram", "Rhombus", "Trapezium"], a: 2 },
          { t: "c) Rotational symmetry", options: ["Kite", "Rectangle", "Trapezium"], a: 1 }] }],
        answer: "a) A **parallelogram** (that isn't a rectangle or rhombus), or an irregular quadrilateral. b) A **rhombus**, a **square** or a **kite**. c) A **rectangle**, square, rhombus or parallelogram.",
        explain: "A rectangle's lines of symmetry run through the middles of its sides, not its diagonals. A parallelogram has no lines of symmetry but does have rotational symmetry (order 2). A kite and a trapezium do not look the same after a half turn."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "**Order** these **decimals** in **ascending order**: 0.26, 0.126, 1.26, 0.62",
        interact: [
          { kind: "numberline", min: 0, max: 1.5, ticks: 10, tol: 0.04, items: [["0.26", 0.26], ["0.126", 0.126], ["1.26", 1.26], ["0.62", 0.62]] },
          { kind: "order", items: ["0.26", "0.126", "1.26", "0.62"], answer: [1, 0, 3, 2] }
        ],
        answer: "**0.126, 0.26, 0.62, 1.26**. Compare the ones first, then the tenths: 0.126 has 1 tenth, 0.26 has 2 tenths, 0.62 has 6 tenths, and 1.26 has 1 one."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "**Discuss** the **differences** between the **expected** and **observed** results of the 2 spinner trials. The spinner has equal parts of blue, green, red and yellow.",
        table: [["Colour", "12 trials: expected", "12 trials: observed", "80 trials: expected", "80 trials: observed"], ["blue", 3, 6, 20, 18], ["green", 3, 3, 20, 18], ["red", 3, 2, 20, 21], ["yellow", 3, 1, 20, 23]],
        interact: [
          { kind: "bargraph", max: 8, step: 1, ylabel: "Count", xlabel: "Colour", label: "12 trials: expected and observed", series: [{ l: "Expected", c: "#9AA5B1" }, { l: "Observed", c: "#3E86B8" }],
            groups: [{ l: "Blue", v: [3, 6] }, { l: "Green", v: [3, 3] }, { l: "Red", v: [3, 2] }, { l: "Yellow", v: [3, 1] }] },
          { kind: "bargraph", max: 25, step: 5, ylabel: "Count", xlabel: "Colour", label: "80 trials: expected and observed", series: [{ l: "Expected", c: "#9AA5B1" }, { l: "Observed", c: "#3E86B8" }],
            groups: [{ l: "Blue", v: [20, 18] }, { l: "Green", v: [20, 18] }, { l: "Red", v: [20, 21] }, { l: "Yellow", v: [20, 23] }] },
          { kind: "choose", rows: [
            { t: "Which trial's results were closer to the expected counts?", options: ["12 trials", "80 trials"], a: 1 },
            { t: "What usually happens with more trials?", options: ["Observed results get closer to expected", "Observed results get further from expected", "Nothing changes"], a: 0 }] }
        ],
        answer: "With **12 trials** the results were far from expected (blue 6 instead of 3, yellow only 1). With **80 trials** every colour was within 3 of the expected 20. The **more trials** you do, the closer the observed results usually get to the expected probability of [1/4] for each colour."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "The **factors** for **30** are 1, 2, 3, 5, 6, 10, 30 and…",
        options: ["4", "12", "15", "20"],
        answer: 2,
        interact: [{ kind: "array", rows: 2, cols: 15, showTotal: true, max: 30, hint: "Build arrays of 30. Which factor pair is missing?" }],
        explain: "2 × 15 = 30, so 15 is a factor. The factor pairs of 30 are 1 × 30, 2 × 15, 3 × 10 and 5 × 6. 4, 12 and 20 don't divide 30 evenly."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Solve 5329 × 6** using the **distributive property**.",
        interact: [
          { kind: "cells", cols: 5, w: 90, grid: [["#×", "#5000", "#300", "#20", "#9"], ["#6", { v: 30000 }, { v: 1800 }, { v: 120 }, { v: 54 }]], msg: "Multiply each part of 5329 by 6." },
          { kind: "input", fields: [{ label: "5329 × 6 =", value: 31974 }] }
        ],
        answer: "5329 = 5000 + 300 + 20 + 9. 6 × 5000 = 30 000, 6 × 300 = 1800, 6 × 20 = 120, 6 × 9 = 54. 30 000 + 1800 + 120 + 54 = **31 974**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Match** the **2D shapes** to their **classification**.",
        interact: [{ kind: "classify", view: [700, 220], hint: "Tap a classification, then tap the shape that matches it.",
          cats: [{ k: "A", t: "A. regular triangle", c: "#2E7D32" }, { k: "B", t: "B. irregular quadrilateral", c: "#1565C0" }, { k: "C", t: "C. irregular triangle", c: "#EF6C00" }, { k: "D", t: "D. regular quadrilateral", c: "#C2185B" }],
          shapes: [
            { p: "30,170 170,170 100,48.8", a: "A", fill: "#86409A", deco: "<text x='95' y='205' class='co-lab'>1</text>" },
            { p: "200,50 200,170 380,110", a: "C", fill: "#E2CCE0", deco: "<text x='270' y='205' class='co-lab'>2</text>" },
            { p: "410,50 530,50 530,170 410,170", a: "D", fill: "#9AAAFC", deco: "<text x='465' y='205' class='co-lab'>3</text>" },
            { p: "560,110 625,75 690,110 625,145", a: "B", fill: "#8C52FF", deco: "<text x='620' y='205' class='co-lab'>4</text>" }] }],
        answer: "1 = **A regular triangle** (equilateral) · 2 = **C irregular triangle** (isosceles) · 3 = **D regular quadrilateral** (square) · 4 = **B irregular quadrilateral** (rhombus).",
        explain: "A regular shape has all sides equal and all angles equal. The rhombus has 4 equal sides, but its angles aren't equal, so it is irregular."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "**Record** the **integers** at A, B, C and D on the **number line**.",
        img: "u13-numline.png",
        interact: [
          { kind: "marker", min: -4, max: 4, divs: 8, majorEvery: 1, labels: [-4, -1, 1, 3, 4], label: "?", hint: "The same number line. Slide the pin to each arrow and count the ticks from a labelled number." },
          { kind: "input", fields: [{ label: "A", value: -3 }, { label: "B", value: -2 }, { label: "C", value: 0 }, { label: "D", value: 2 }] }
        ],
        answer: "A = **−3** · B = **−2** · C = **0** · D = **2**. Each tick is 1. Count right from −4 or left from 1."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "**Convert** and **record** as **24-hour time**: a) 6:25 am b) 8:45 pm c) 11:58 pm",
        interact: [
          { kind: "clock", time: "8:45", h24: true, drag: true },
          { kind: "input", fields: [{ label: "a) 6:25 am =", accept: ["06:25", "0625", "6:25"], placeholder: "hh:mm" }, { label: "b) 8:45 pm =", accept: ["20:45", "2045"], placeholder: "hh:mm" }, { label: "c) 11:58 pm =", accept: ["23:58", "2358"], placeholder: "hh:mm" }] }
        ],
        answer: "a) **06:25** · b) **20:45** · c) **23:58**. Morning times keep their hour (with a leading zero). For pm times, add 12 to the hour.",
        explain: "The slide writes 6.25 am with a full stop; it is the same time as 6:25 am."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "**3** is a factor of **20**.",
        answer: false,
        interact: [{ kind: "pack", total: 20, size: 3, label: "group", thing: "counters", hint: "Make groups of 3. Is anything left over?" }],
        explain: "20 ÷ 3 = 6 remainder 2. 3 × 6 = 18 and 3 × 7 = 21, so 3 doesn't divide 20 evenly. The factors of 20 are 1, 2, 4, 5, 10 and 20."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **area model** to solve: 29 × 38",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#×", "#30", "#8"], ["#20", { v: 600 }, { v: 160 }], ["#9", { v: 270 }, { v: 72 }]], msg: "Multiply the row number by the column number in each box." },
          { kind: "input", fields: [{ label: "29 × 38 =", value: 1102 }] }
        ],
        answer: "20 × 30 = 600, 20 × 8 = 160, 9 × 30 = 270, 9 × 8 = 72. 600 + 160 + 270 + 72 = **1102**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **area model** to **calculate** and **record** the **area** of the rectangle in **square centimetres**. Each square is 1 cm².",
        interact: [
          { kind: "areagrid", size: 26, cells: ["1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111", "1111111"] },
          { kind: "cells", cols: 3, w: 90, grid: [["#×", "#10", "#3"], ["#7", { v: 70 }, { v: 21 }]], msg: "Split 13 into 10 and 3, then multiply each part by 7." },
          { kind: "input", fields: [{ label: "Area", value: 91, suffix: "cm²" }] }
        ],
        answer: "The rectangle is 7 cm wide and 13 cm long. Split 13 into 10 + 3: 7 × 10 = 70 and 7 × 3 = 21. 70 + 21 = **91 cm²**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Record** the **factors** of **36**.",
        interact: [
          { kind: "array", rows: 6, cols: 6, showTotal: true, max: 36, hint: "Build arrays of 36 to find factor pairs." },
          { kind: "numchart", from: 1, to: 36, answer: [1, 2, 3, 4, 6, 9, 12, 18, 36], hint: "Tap every factor of 36." }
        ],
        answer: "**1, 2, 3, 4, 6, 9, 12, 18, 36**. Factor pairs: 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Is this the **net** of a **3D object**? **Communicate** your **reasoning**.",
        img: "u13-net.png",
        interact: [{ kind: "choose", rows: [
          { t: "Is it a net?", options: ["Yes", "No"], a: 0 },
          { t: "Which object does it fold into?", options: ["Square-based pyramid", "Triangular prism", "Cube", "Triangular pyramid"], a: 0 }] }],
        answer: "**Yes**. It has 1 square and 4 triangles, the faces of a **square-based pyramid**. The triangles above and below the square fold up, and the other two triangles fold round to close the left and right sides, so all 4 triangles meet at the apex."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "What is the **answer** to this **equation**? 3475 + 2246",
        options: ["5611", "5711", "56 111", "5721"],
        answer: 3,
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 5, H: 6, T: 11, O: 11 }, hint: "These are all the counters from 3475 and 2246 together. Group 10 ones into a ten and 10 tens into a hundred, then read the total." }],
        explain: "5 + 6 = 11 ones (trade 10 ones for 1 ten), 7 + 4 + 1 = 12 tens (trade for 1 hundred), 4 + 2 + 1 = 7 hundreds, 3 + 2 = 5 thousands. 5721. A and B forget a trade, and C writes 11 in the ones place without trading."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "When solving **289 × 36** using a **multiplication algorithm**, which statement is correct? **Communicate** your **reasoning**.",
        interact: [{ kind: "choose", rows: [
          { t: "Which is correct?", options: ["a. Multiply 289 by 6 and then 289 by 3", "b. Multiply 289 by 6 and then 289 by 30"], a: 1 },
          { t: "Why?", options: ["The 3 in 36 is worth 30", "You always multiply by the smallest digit first", "36 = 6 + 3"], a: 0 }] }],
        answer: "**b**. 36 = 30 + 6, so 289 × 36 = 289 × 6 + 289 × 30 = 1734 + 8670 = **10 404**. The 3 is in the tens place, so it is worth 30, not 3."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "This table shows the **dimensions of 3 rectangles** with the same **perimeter**. a) **Calculate the area** for each rectangle. b) **Identify** which rectangle has the **largest** and **smallest area**.",
        table: [["", "Length", "Width", "Perimeter", "Area"], ["A", "20 m", "5 m", "50 m", "?"], ["B", "22 m", "3 m", "50 m", "?"], ["C", "18 m", "7 m", "50 m", "?"]],
        interact: [
          { kind: "input", fields: [{ label: "Area of A", value: 100, suffix: "m²" }, { label: "Area of B", value: 66, suffix: "m²" }, { label: "Area of C", value: 126, suffix: "m²" }] },
          { kind: "choose", rows: [
            { t: "Largest area", options: ["A", "B", "C"], a: 2 },
            { t: "Smallest area", options: ["A", "B", "C"], a: 1 }] }
        ],
        answer: "A: 20 × 5 = **100 m²** · B: 22 × 3 = **66 m²** · C: 18 × 7 = **126 m²**. **C** has the largest area and **B** the smallest. With the same perimeter, the closer the rectangle is to a square, the bigger its area."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Partition 329** into **place value** parts and solve **329 × 4** using the **area model**.",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#×", { v: 300 }, { v: 20 }, { v: 9 }], ["#4", { v: 1200 }, { v: 80 }, { v: 36 }]], msg: "Top row: the place value parts of 329. Bottom row: each part × 4." },
          { kind: "input", fields: [{ label: "329 × 4 =", value: 1316 }] }
        ],
        answer: "329 = 300 + 20 + 9. 4 × 300 = 1200, 4 × 20 = 80, 4 × 9 = 36. 1200 + 80 + 36 = **1316**."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "The water level without the rock is **300 mL**. The water level with the rock is **550 mL**. Why does the **water level increase** when the rock is placed in the jug?",
        img: "u13-rock.png",
        interact: [
          { kind: "choose", rows: [{ t: "Why does the level rise?", options: ["The rock takes up space and pushes the water up", "The rock makes more water", "The rock is heavy, so it soaks up water"], a: 0 }] },
          { kind: "input", fields: [{ label: "Volume of the rock", value: 250, suffix: "cm³" }] }
        ],
        answer: "The rock **takes up space** (it has volume), so it **displaces** the water and pushes the level up. The rise is 550 − 300 = 250 mL, so the rock's volume is about **250 cm³** (1 mL = 1 cm³)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "This **equation** has been solved **correctly**. 1286 − 439 = 847",
        img: "u13-subtract.png",
        answer: true,
        interact: [{ kind: "jumps", start: 439, steps: [1, 10, 100, 400], hint: "Check by adding: count on from 439 to 1286." }],
        explain: "The trades are right: 1 thousand becomes 10 hundreds (12 hundreds), 1 ten becomes 10 ones (16 ones). 16 − 9 = 7, 7 − 3 = 4, 12 − 4 = 8. Check: 847 + 439 = 1286."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Choose the most **appropriate multiplicative strategy** to solve 6412 × 59. **Communicate** your **reasoning**.",
        interact: [
          { kind: "select", hint: "Tap every strategy that would be efficient.", items: [
            ["6412 × 60, then subtract 6412 (59 is 1 less than 60)", true],
            ["Area model: 6412 × 50 + 6412 × 9", true],
            ["Add 6412 fifty-nine times", false],
            ["Count by 59s", false]] },
          { kind: "input", fields: [{ label: "6412 × 59 =", value: 378308 }] }
        ],
        answer: "59 is close to 60, so **compensation** is efficient: 6412 × 60 = 384 720, then 384 720 − 6412 = **378 308**. The area model or algorithm (6412 × 50 = 320 600 and 6412 × 9 = 57 708) also works.",
        explain: "The slide asks for the most appropriate strategy, which is a matter of reasoning. Both compensation and the area model or algorithm are accepted; repeated addition and skip counting are not efficient."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Farmer Jessie wants to turn one of her paddocks into a space for alpacas. Which paddock has the larger area for the alpacas? a) Length: 35 m Width: 5 m b) Length: 29 m Width: 9 m",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#a) ×", "#30", "#5"], ["#5", { v: 150 }, { v: 25 }], ["#b) ×", "#20", "#9"], ["#9", { v: 180 }, { v: 81 }]], msg: "Split each length into tens and ones, then multiply by the width." },
          { kind: "input", fields: [{ label: "Area of a)", value: 175, suffix: "m²" }, { label: "Area of b)", value: 261, suffix: "m²" }] },
          { kind: "choose", rows: [{ t: "The larger paddock is", options: ["a)", "b)"], a: 1 }] }
        ],
        cubes: { ops: ["×"], note: "Area = length × width.", solve: [{ t: "Area model", s: "a) 30 × 5 + 5 × 5 = 150 + 25 = 175 m². b) 20 × 9 + 9 × 9 = 180 + 81 = 261 m²." }, { t: "Compensation", s: "a) 35 × 5 = 35 × 10 ÷ 2 = 175 m². b) 29 × 9 = 30 × 9 − 9 = 270 − 9 = 261 m²." }] },
        answer: "a) 35 × 5 = **175 m²** · b) 29 × 9 = **261 m²**. Paddock **b)** has the larger area, by 86 m²."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Match** the **area model** to the corresponding **algorithm**.",
        img: "u13-match.png",
        interact: [{ kind: "choose", rows: [
          { t: "Area model 1", options: ["A", "B", "C"], a: 2 },
          { t: "Area model 2", options: ["A", "B", "C"], a: 1 },
          { t: "Area model 3", options: ["A", "B", "C"], a: 0 }] }],
        answer: "1 → **C** (251 × 7: 1400 + 350 + 7 = 1757) · 2 → **B** (640 × 5: 3000 + 200 + 0 = 3200) · 3 → **A** (743 × 3: 2100 + 120 + 9 = 2229)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "This measuring jug contains **250 mL** of water. Use the **change in water level** to **compare** the volumes of the **apple** and the **can of beans** when each is **submerged** in the jug.",
        img: "u13-jugs.png",
        interact: [
          { kind: "jumps", start: 250, steps: [50, 100, 250], min: 0, max: 1000, hint: "Count on from 250 mL to each new water level." },
          { kind: "input", fields: [{ label: "Volume of the apple", value: 250, suffix: "cm³" }, { label: "Volume of the can", value: 500, suffix: "cm³" }] },
          { kind: "choose", rows: [{ t: "Compare", options: ["The can is about twice the volume of the apple", "They have the same volume", "The apple has a larger volume"], a: 0 }] }
        ],
        answer: "With the apple the level is 500 mL: 500 − 250 = **250 mL**, so the apple is about **250 cm³**. With the can the level is 750 mL: 750 − 250 = **500 mL**, so the can is about **500 cm³**. The can's volume is about **twice** the apple's.",
        explain: "Read from the pictures: the apple jug is at the 500 mL mark, and the can jug is halfway between 700 and 800 mL (750 mL)."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which is the best strategy to make a **reasonable estimate** for **62 134 − 289**?",
        options: ["62 000 − 300 = 61 700", "62 100 − 200 = 61 900", "63 000 − 300 = 62 700", "62 000 − 200 = 61 800"],
        answer: 0,
        explain: "Round 62 134 down to 62 000 (nearest thousand) and 289 up to 300 (nearest hundred). B and D round 289 to 200, which is wrong, and C rounds 62 134 up to 63 000. The exact answer is 61 845. D's answer happens to be closer, but only because its two rounding mistakes cancel out."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "17 ÷ 4 = a) Draw an **array** to model the equation. b) Record the **division** number sentence. c) Record an **inverse multiplication** number sentence.",
        interact: [
          { kind: "pack", total: 17, size: 4, label: "row", thing: "counters", hint: "Make rows of 4. How many rows, and how many are left over?" },
          { kind: "input", fields: [{ label: "17 ÷ 4 =", value: 4 }, { label: "remainder", value: 1 }] },
          { kind: "sentence", fields: [{ label: "Inverse multiplication sentence", placeholder: "e.g. 4 × 4 + 1 = 17", sample: "4 x 4 + 1 = 17", re: "4\\s*x\\s*4|4x4", msg: "Use 4 × 4 and add the remainder." }] }
        ],
        answer: "The array has **4 rows of 4** with **1** left over. b) 17 ÷ 4 = **4 r 1** · c) **4 × 4 + 1 = 17**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Record** an **example** of a location that would be measured in: a) hectares b) square kilometres",
        interact: [{ kind: "choose", rows: [
          { t: "A local park", options: ["hectares (ha)", "square kilometres (km²)"], a: 0 },
          { t: "A school's grounds", options: ["hectares (ha)", "square kilometres (km²)"], a: 0 },
          { t: "The state of NSW", options: ["hectares (ha)", "square kilometres (km²)"], a: 1 },
          { t: "The country of Australia", options: ["hectares (ha)", "square kilometres (km²)"], a: 1 }] }],
        answer: "a) **Hectares**: a park, a school, a sports ground or a small farm (1 ha = 10 000 m²). b) **Square kilometres**: a suburb, a city, a state or a country (1 km² = 100 ha)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "23 ÷ 3 =",
        interact: [
          { kind: "pack", mode: "share", n: 3, total: 23, label: "group", thing: "counters" },
          { kind: "input", fields: [{ label: "23 ÷ 3 =", value: 7 }, { label: "remainder", value: 2 }] }
        ],
        answer: "**7 remainder 2**. 3 × 7 = 21 and 23 − 21 = 2 left over."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Julia swam 1.2 km on Monday, 800 m on Tuesday and 2400 m on Wednesday. How many kilometres did Julia swim that week?",
        interact: [
          { kind: "bar", whole: { v: 4400, l: "?", n: "total", hide: true }, parts: [{ v: 1200, l: "1.2 km", n: "Mon" }, { v: 800, l: "800 m", n: "Tue" }, { v: 2400, l: "2400 m", n: "Wed" }] },
          { kind: "input", fields: [{ label: "Julia swam", value: 4.4, suffix: "km" }] }
        ],
        cubes: { ops: ["+"], note: "1 km = 1000 m. Change everything to the same unit first.", solve: [{ t: "Change to kilometres", s: "800 m = 0.8 km and 2400 m = 2.4 km. 1.2 + 0.8 + 2.4 = 4.4 km." }, { t: "Change to metres", s: "1.2 km = 1200 m. 1200 + 800 + 2400 = 4400 m = 4.4 km." }] },
        answer: "**4.4 km**. 1.2 km + 0.8 km + 2.4 km = 4.4 km (4400 m)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "Using **place value** to **check**, the answer to this algorithm is **correct**. 124 + 124 + 124 + 124 + 124 = 1500",
        img: "u13-add124.png",
        answer: false,
        interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: { H: 5, T: 10, O: 20 }, hint: "These are 5 lots of 124: 5 hundreds, 10 tens and 20 ones. Group the tens and ones, then read the total." }],
        explain: "Ones: 5 × 4 = 20. Tens: 5 × 2 tens = 10 tens = 100. Hundreds: 5 × 1 hundred = 500. 500 + 100 + 20 = 620, not 1500."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Partition 7248** into multiples of **6** to **solve**: 7248 ÷ 6 =",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#÷ 6", "#6000", "#1200", "#48"], ["#Quotient", { v: 1000 }, { v: 200 }, { v: 8 }]], msg: "Divide each multiple of 6 by 6." },
          { kind: "input", fields: [{ label: "7248 ÷ 6 =", value: 1208 }] }
        ],
        answer: "7248 = 6000 + 1200 + 48. 6000 ÷ 6 = 1000, 1200 ÷ 6 = 200, 48 ÷ 6 = 8. 1000 + 200 + 8 = **1208**.",
        explain: "Check: 6 × 1208 = 7248."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "**Round** the length **7945 m** and width **2808 m** to the **nearest kilometre**. **Record** the **approximate area** of Pittwater in **square kilometres** (km²).",
        img: "u13-pittwater.png",
        interact: [
          { kind: "input", fields: [{ label: "Length", value: 8, suffix: "km" }, { label: "Width", value: 3, suffix: "km" }, { label: "Approximate area", value: 24, suffix: "km²" }] }
        ],
        answer: "7945 m ≈ **8 km** and 2808 m ≈ **3 km**. The area is about 8 × 3 = **24 km²**.",
        explain: "Pittwater is treated as a rectangle, as outlined on the map."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Miss Green is organising the school athletics carnival. She has 696 students to put into 50 m sprint races. If it is an 8-lane track, how many races will there be? Identify the partial quotients on this area model to solve the problem.",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#÷ 8", "#640", "#56"], ["#Quotient", { v: 80 }, { v: 7 }]], msg: "640 ÷ 8 and 56 ÷ 8." },
          { kind: "input", fields: [{ label: "Number of races", value: 87 }] }
        ],
        cubes: { ops: ["÷"], note: "Each race holds 8 students, one per lane.", solve: [{ t: "Partial quotients", s: "696 = 640 + 56. 640 ÷ 8 = 80 and 56 ÷ 8 = 7. 80 + 7 = 87 races." }, { t: "Check with multiplication", s: "87 × 8 = 640 + 56 = 696. Every lane in every race is full." }] },
        answer: "**87 races**. 640 ÷ 8 = 80 and 56 ÷ 8 = 7, so 80 + 7 = 87.",
        explain: "The slide's area model shows 696 split into 640 and 56 along a side of 8. The slide says \"50 m metre\"; this is written as 50 m."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Use **decimal notation** to record these lengths in **kilometres** (km): a) 2356 m b) 65 777 m c) 129 m",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O", "t", "h", "th"], houses: false, start: 2.356, hint: "1000 m = 1 km, so each metre is 1 thousandth of a kilometre." },
          { kind: "input", fields: [{ label: "a) 2356 m =", value: 2.356, suffix: "km" }, { label: "b) 65 777 m =", value: 65.777, suffix: "km" }, { label: "c) 129 m =", value: 0.129, suffix: "km" }] }
        ],
        answer: "a) **2.356 km** · b) **65.777 km** · c) **0.129 km**. Divide by 1000: the digits move three places to the right of the decimal point."
      }
    ]
  ]
});
