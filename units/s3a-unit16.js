/*
  Stage 3 Year A, Unit 16 — Review of learning (Term 4, learning sequence 1: Weeks 1–2).
  Format guide: see README.md ("Adding a unit").
*/
UNITS.push({
  stage: 3, ab: "A", term: 4, ls: 1, unit: 16,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 16 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which of the following includes the **factors** of 30?",
        options: ["1, 2, 3, 4, 6, 8, 15, 30", "2, 4, 6, 10, 15, 30", "1, 2, 3, 5, 6, 10, 15, 30", "3, 6, 8, 9, 15, 30"],
        answer: 2,
        explain: "Every factor pair of 30: 1 × 30, 2 × 15, 3 × 10, 5 × 6."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "**Order** the fractions on a number line from 0 to 1.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 8,
          items: [["[1/2]", 1/2], ["[3/8]", 3/8], ["[1/4]", 1/4], ["[3/4]", 3/4], ["[7/8]", 7/8], ["[4/4]", 1], ["[5/8]", 5/8]] }],
        answer: "[1/4], [3/8], [1/2], [5/8], [3/4], [7/8], [4/4]"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record two 6-digit numbers that, when added together, make a number **close to 1 million**.",
        interact: [{ kind: "sum6", target: 1000000, within: 20000 }],
        answer: "Many answers. For example 499 999 + 500 001 = 1 000 000, or 650 000 + 349 500 = 999 500."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Jesse swam 400 m on Monday, 500 m on Tuesday, 300 m on Wednesday, 600 m on Thursday and 200 m on Friday.\n**Record the distance** Jesse swam using the abbreviation for **kilometres**.",
        interact: [{ kind: "input", fields: [{ label: "Total", value: 2, suffix: "km" }] }],
        answer: "400 + 500 + 300 + 600 + 200 = 2000 m = **2 km**"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Sophie needs to catch the bus to the oval at 3:30 pm and then the 5:45 pm bus home.\n**Record** the times in **24-hour time**.",
        interact: [{ kind: "input", fields: [{ label: "3:30 pm", accept: ["1530"] }, { label: "5:45 pm", accept: ["1745"] }] }],
        answer: "**1530** and **1745**"
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Jeremy says 14 is a **prime number** because it has **factors** of 1, 2, 7 and 14.",
        answer: false,
        explain: "14 has more than two factors, so it is a composite number. A prime number has exactly two factors: 1 and itself."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Each picture shows a fraction. **Order** them on a number line from 0 to 1.",
        img: "unit-fractions-models.png",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 0,
          items: [["strip", 1/4], ["1 third", 1/3], ["[1/10]", 1/10], ["circle", 1/6]] }],
        answer: "[1/10], [1/6] (circle), [1/4] (strip of 4), [1/3] (one third)"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use a **mental strategy** to solve:",
        display: "3597 + 5349",
        interact: [{ kind: "input", fields: [{ value: 8946 }] }],
        answer: "**8946** (e.g. 3600 + 5349 = 8949, then take away 3)"
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Elias trained for the long jump. His jumps measured 1.54 m, 1.43 m and 1.32 m.\n**Estimate** the total distance.",
        interact: [{ kind: "input", fields: [{ label: "About", min: 4.1, max: 4.5, suffix: "m" }] }],
        answer: "About **4.3 m** (1.5 + 1.4 + 1.3 ≈ 4.2 m; the exact total is 4.29 m)"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "**Identify** the number of each of these 2D shapes.",
        img: "2d-shapes.png",
        interact: [{ kind: "input", fields: [
          { label: "isosceles triangles", value: 2 }, { label: "quadrilaterals", value: 10 },
          { label: "equilateral triangles", value: 1 }, { label: "scalene triangles", value: 1 }] }],
        answer: "Isosceles triangles: 2 · quadrilaterals: 10 · equilateral triangles: 1 · scalene triangles: 1",
        explain: "Counting the equilateral triangle separately (it is also isosceles)."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "I am thinking of a number. Its **factors** include **1, 2, 3, 4, 6 and 8**. What number am I?",
        options: ["57", "68", "96", "104"],
        answer: 2,
        explain: "96 ÷ 8 = 12 and 96 ÷ 6 = 16. 57 is odd, and 68 and 104 are not divisible by 3."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "**Order** the unit fractions on a number line from 0 to 1.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 0,
          items: [["[1/8]", 1/8], ["[1/6]", 1/6], ["[1/3]", 1/3], ["[1/10]", 1/10], ["[1/2]", 1/2], ["[1/4]", 1/4], ["[1/5]", 1/5]] }],
        answer: "[1/10], [1/8], [1/6], [1/5], [1/4], [1/3], [1/2]"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the strategies of **levelling** and **constant difference** to solve:",
        interact: [{ kind: "input", fields: [{ label: "456 + 64 =", value: 520 }, { label: "289 − 31 =", value: 258 }] }],
        answer: "456 + 64 → 460 + 60 = **520** · 289 − 31 → 288 − 30 = **258**"
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Find the total **perimeter** of this composite shape.",
        img: "h-shape-perimeter.png",
        interact: [{ kind: "input", fields: [{ label: "Perimeter", value: 128, suffix: "cm" }] }],
        answer: "**128 cm** (25 + 25 + 8 + 8 + 8 + 8 + 9 + 5 + 9 + 9 + 5 + 9)",
        explain: "This takes both gaps as 9 cm deep. Only the bottom gap is labelled."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Tyrell says a **square pyramid** has 4 vertices. Do you agree or disagree? Why?",
        interact: [
          { kind: "choose", rows: [{ t: "Tyrell is", options: ["Correct", "Incorrect"], a: 1 }] },
          { kind: "input", fields: [{ label: "A square pyramid has", value: 5, suffix: "vertices" }] }
        ],
        answer: "Disagree. A square pyramid has **5 vertices**: 4 around the square base and 1 at the apex."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "9 is a **factor** of 48.",
        follow: "Communicate your reasoning.",
        answer: false,
        explain: "48 ÷ 9 = 5 remainder 3. The factors of 48 are 1, 2, 3, 4, 6, 8, 12, 16, 24 and 48."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Record 10%, or one-tenth, of each number.",
        interact: [{ kind: "input", fields: [
          { label: "130", value: 13 }, { label: "250", value: 25 }, { label: "70", value: 7 },
          { label: "620", value: 62 }, { label: "22", value: 2.2 }] }],
        answer: "13 · 25 · 7 · 62 · 2.2"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Which combination of parcels will **balance** a set of scales?",
        interact: [{ kind: "balance", unit: "kg",
          items: [["Parcel A", 47.91], ["Parcel B", 4.003], ["Parcel C", 32.713], ["Parcel D", 11.194]] }],
        answer: "Parcel A on one side, B + C + D on the other: 4.003 + 32.713 + 11.194 = **47.91 kg**"
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Pop's garden needs 60 m of fencing. What could be the **length and width** of the garden?",
        interact: [{ kind: "pair", labels: ["Length", "Width"], unit: "m", rule: "perimeter", target: 60 }],
        answer: "Length + width must equal 30 m. For example 20 m × 10 m, 15 m × 15 m or 25 m × 5 m."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "The playground needs new turf. It is 28 m long and 7 m wide. Mr Bancroft estimates 200 square metres of turf is needed. Is this enough?",
        interact: [
          { kind: "input", fields: [{ label: "Area of the playground", value: 196, suffix: "m²" }] },
          { kind: "choose", rows: [{ t: "Is 200 m² enough?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "Yes. 28 × 7 = **196 m²** (e.g. 30 × 7 = 210, take away 2 × 7 = 14), so 200 m² is enough."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing quantity fractions A",
        prompt: "1[2/4] + [3/4] is **not** equal to:",
        options: ["2[1/4]", "2[2/8]", "[9/4]", "[19/8]"],
        answer: 3,
        explain: "1[2/4] + [3/4] = 2[1/4] = [9/4] = 2[2/8]. But [19/8] = 2[3/8]."
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Sarah wants new athletic shoes that cost $200. There is a **25% discount**. How much will Sarah pay?",
        interact: [{ kind: "input", fields: [{ prefix: "$", value: 150 }] }],
        answer: "25% of $200 = $50, so Sarah pays **$150**"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use **estimation** to decide if this answer is reasonable.",
        img: "subtraction-check.png",
        interact: [
          { kind: "choose", rows: [{ t: "Is 434 207 reasonable?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "Correct answer", value: 428807 }] }
        ],
        answer: "Not reasonable. 434 000 − 5000 ≈ 429 000, and subtracting should give a smaller number. The correct answer is **428 807**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Choose the best unit to measure the **mass** of each item.",
        interact: [{ kind: "choose", rows: [
          { t: "a pencil", options: ["g", "kg", "t"], a: 0 },
          { t: "a watermelon", options: ["g", "kg", "t"], a: 1 },
          { t: "a puppy", options: ["g", "kg", "t"], a: 1 },
          { t: "a truck", options: ["g", "kg", "t"], a: 2 }] }],
        answer: "pencil: grams · watermelon: kilograms · puppy: kilograms · truck: tonnes"
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Which outcomes are **equally likely**?",
        img: "spinner.png",
        interact: [{ kind: "select", hint: "Tap the colours that are equally likely.",
          items: [["Orange", true], ["Blue", true], ["Green", false]] }],
        answer: "Orange and blue are equally likely (each [1/4]). Green covers [2/4], so it is twice as likely."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "1[2/8] − [5/8] = [15/8]",
        follow: "Communicate your reasoning.",
        answer: false,
        explain: "1[2/8] = [10/8], and [10/8] − [5/8] = [5/8]. [15/8] is what you get by adding."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Three gardeners have one open bag of potting mix each. One is [4/5] full, another is [2/5] full and the other is [3/5] full. How much potting mix do they have **altogether**?",
        interact: [{ kind: "input", fields: [{ value: 9/5, suffix: "bags", placeholder: "e.g. 1 1/2" }] }],
        answer: "[4/5] + [2/5] + [3/5] = [9/5] = **1[4/5] bags**"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use **rounding and estimation** to solve.",
        display: "16 429 + 648 957",
        interact: [{ kind: "input", fields: [{ label: "About", min: 660000, max: 670000 }] }],
        answer: "About 16 000 + 649 000 = **665 000** (exact: 665 386)"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Which object in the classroom would be most appropriate to measure in **kilograms**?",
        follow: "Communicate your thinking.",
        answer: "Answers vary: anything heavier than about 1 kg, such as a chair, a schoolbag or a box of books. Light objects like pencils suit grams."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Mrs Leaver needs 1 litre of water, 550 mL of orange juice and 250 mL of milk for a class picnic. How many litres is that? Use **decimal notation**.",
        interact: [{ kind: "input", fields: [{ value: 1.8, suffix: "L" }] }],
        answer: "1 + 0.55 + 0.25 = **1.8 L**"
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "What **fraction** of the hexagon is the blue rhombus?",
        img: "hexagon.png",
        options: ["[3/6]", "[6/12]", "[1/3]", "[2/10]"],
        answer: 2,
        explain: "The rhombus covers 2 of the 6 equal triangles in the hexagon: [2/6] = [1/3]."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "On a road trip a family listens to **10%** of an audio book on day 1 and **one quarter** ([1/4]) on day 2. How much of the book is left?",
        interact: [{ kind: "input", fields: [{ value: 65, suffix: "%" }] }],
        answer: "100% − 10% − 25% = **65%** (or [13/20]) left"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use **estimation** to find the answer.",
        display: "43 893 + 92 107",
        interact: [{ kind: "input", fields: [{ label: "About", min: 135000, max: 137000 }] }],
        answer: "About 44 000 + 92 000 = **136 000**. The exact answer is also 136 000 (893 + 107 makes 1000)."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Record the masses in **decimal notation**.",
        interact: [{ kind: "input", fields: [
          { label: "2 kg and 350 g", value: 2.35, suffix: "kg" },
          { label: "1 kg and 982 g", value: 1.982, suffix: "kg" },
          { label: "7 kg and 43 g", value: 7.043, suffix: "kg" }] }],
        answer: "2.35 kg · 1.982 kg · 7.043 kg"
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Describe how to use a **protractor** to measure an angle less than 90°.",
        answer: "Put the centre point on the vertex. Line up the baseline (0°) with one arm. Read the scale that starts at 0 on that arm, where the other arm crosses. Check the reading is less than 90°."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing quantity fractions A",
        prompt: "Amy says the answer to this **fraction number sentence** is [20/6]. Is she correct?",
        display: "2 + [6/6] + [2/6]",
        answer: true,
        explain: "2 = [12/6], so [12/6] + [6/6] + [2/6] = [20/6]."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Write a **fraction number sentence** and solve:\nyellow circles + white squares + star",
        img: "shapes-grid.png",
        interact: [{ kind: "input", fields: [
          { label: "yellow circles", value: 2/10 }, { label: "white squares", value: 4/10 },
          { label: "star", value: 1/10 }, { label: "total", value: 7/10 }] }],
        answer: "[2/10] + [4/10] + [1/10] = **[7/10]**",
        explain: "Counting only the white squares with nothing on them."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "**Estimate** the total distance.",
        list: [
          "Broken Hill, Wilyakali Country to Wilcannia, Barkindji Country: 197 km",
          "Wilcannia to Dubbo, Wiradjuri Country: 557 km",
          "Dubbo to Gunnedah, Kamilaroi Country: 248 km",
          "Gunnedah to Armidale, Anaiwan Country: 179 km",
          "Armidale to Yamba, Yaegl Country: 258 km"
        ],
        interact: [{ kind: "input", fields: [{ label: "About", min: 1400, max: 1500, suffix: "km" }] }],
        answer: "About 200 + 560 + 250 + 180 + 260 = **1450 km** (exact: 1439 km)"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Interpret the **decimal notation** for these masses.",
        interact: [{ kind: "input", fields: [
          { label: "4.8 kg =", value: 4800, suffix: "g" },
          { label: "0.875 kg =", value: 875, suffix: "g" },
          { label: "1.04 kg =", value: 1040, suffix: "g" }] }],
        answer: "4800 g · 875 g · 1040 g"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Grandma wants to watch **Beyond the news**, **Crime scene** and **Extreme sports update**. Can she watch all of them?",
        visual: { kind: "tvGuide" },
        interact: [{ kind: "choose", rows: [{ t: "Can she watch all three?", options: ["Yes", "No"], a: 0 }] }],
        answer: "Yes. Beyond the news 1931–2000 (Channel 4), Crime scene 2030–2259 (3HD), Extreme sports update from 2328 (Channel 4). None of them overlap."
      }
    ]
  ]
});
