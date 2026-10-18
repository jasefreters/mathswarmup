/*
  Warm-up content. Edit this file to add or change warm-ups — no other code needs to change.

  Text formatting:
    **bold**        bold text
    [3/4]           a stacked fraction
    1[2/4]          a mixed number
    new line (\n)   line break

  Question types:
    mc  multiple choice   options: [...], answer: index of correct option (0 = A)
    tf  true or false     answer: true / false
    sr  short response
    ns  number sense activity (shown as the last tile on the board)

  Optional fields on any question:
    display  a big centred line (numbers, fractions, an equation)
    list     a short list shown under the prompt
    img      an image in the img/ folder
    html     a built-in visual: "sixDigitBoxes", "tvGuide", "chocolateBlock"
    follow   a closing instruction such as "Communicate your reasoning."
    answer / explain   shown when answers are revealed
    focus    syllabus focus area (shown in teacher notes)
*/

window.WARMUPS = {
  title: "Warm-Up Hub",
  subtitle: "Stage 3 Mathematics",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 16 – Review of learning (CC BY 4.0).",
  terms: [
    {
      term: 4,
      unit: "Unit 16",
      weeks: [
        {
          week: 1,
          days: [
            {
              label: "Review 1",
              questions: [
                {
                  type: "mc", focus: "Multiplicative relations A",
                  prompt: "Which of the following includes the **factors** of 30?",
                  options: ["1, 2, 3, 4, 6, 8, 15, 30", "2, 4, 6, 10, 15, 30", "1, 2, 3, 5, 6, 10, 15, 30", "3, 6, 8, 9, 15, 30"],
                  answer: 2,
                  explain: "Every factor pair of 30: 1 × 30, 2 × 15, 3 × 10, 5 × 6."
                },
                {
                  type: "sr", focus: "Representing quantity fractions A",
                  prompt: "Draw a number line from 0 to 1. **Order** the following fractions:",
                  display: "[1/2]  [3/8]  [1/4]  [3/4]  [7/8]  [4/4]  [5/8]",
                  answer: "[1/4], [3/8], [1/2], [5/8], [3/4], [7/8], [4/4]"
                },
                {
                  type: "sr", focus: "Additive relations A",
                  prompt: "Record two 6-digit numbers that, when added together, make a number **close to 1 million**.",
                  html: "sixDigitBoxes",
                  answer: "Many answers. For example 499 999 + 500 001 = 1 000 000, or 650 000 + 349 500 = 999 500."
                },
                {
                  type: "sr", focus: "Geometric measure A: Length",
                  prompt: "Jesse swam 400 m on Monday, 500 m on Tuesday, 300 m on Wednesday, 600 m on Thursday and 200 m on Friday.\n**Record the distance** Jesse swam using the abbreviation for **kilometres**.",
                  answer: "400 + 500 + 300 + 600 + 200 = 2000 m = **2 km**"
                },
                {
                  type: "sr", focus: "Non-spatial measure A: Time",
                  prompt: "Sophie needs to catch the bus to the oval at 3:30 pm and then the 5:45 pm bus home.\n**Record** the times in **24-hour time**.",
                  answer: "**1530** and **1745**"
                },
                {
                  type: "ns", title: "Determining products and factors", focus: "Multiplicative relations A",
                  prompt: "Each machine multiplies the length of a lolly. Which machines are needed to make each lolly? Complete the table.",
                  img: "lolly-machines.png", img2: "lolly-table-products.png",
                  answer: "21: × 3, × 7 · 24: × 2, × 2, × 2, × 3 · 28: × 2, × 2, × 7 · 30: × 2, × 3, × 5 · 45: × 3, × 3, × 5"
                }
              ]
            },
            {
              label: "Review 2",
              questions: [
                {
                  type: "tf", focus: "Multiplicative relations A",
                  prompt: "Jeremy says 14 is a **prime number** because it has **factors** of 1, 2, 7 and 14.",
                  answer: false,
                  explain: "14 has more than two factors, so it is a composite number. A prime number has exactly two factors: 1 and itself."
                },
                {
                  type: "sr", focus: "Representing quantity fractions A",
                  prompt: "On a number line from 0 to 1, **order** the following fractions:",
                  img: "unit-fractions-models.png",
                  answer: "[1/10] (one tenth), [1/6] (circle), [1/4] (column of 4), [1/3] (one third)"
                },
                {
                  type: "sr", focus: "Additive relations A",
                  prompt: "Use a **mental strategy** to solve:",
                  display: "3597 + 5349",
                  answer: "**8946** (e.g. 3600 + 5349 = 8949, then take away 3)"
                },
                {
                  type: "sr", focus: "Geometric measure A: Length",
                  prompt: "Elias trained for the long jump. His jumps measured 1.54 m, 1.43 m and 1.32 m.\n**Estimate** the total distance using an appropriate unit of measure.",
                  answer: "About **4.3 m** (1.5 + 1.4 + 1.3 ≈ 4.2 m; the exact total is 4.29 m)"
                },
                {
                  type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
                  prompt: "**Identify** the number of each of these 2D shapes:",
                  list: ["isosceles triangles", "quadrilaterals", "equilateral triangles", "scalene triangles"],
                  img: "2d-shapes.png",
                  answer: "Count together on the board. Equilateral: 3 equal sides. Isosceles: 2 equal sides. Scalene: no equal sides. Quadrilaterals: any 4-sided shape."
                },
                {
                  type: "ns", title: "Prime and composite numbers", focus: "Multiplicative relations A",
                  prompt: "Use the lolly machines. Is each length **prime, composite or neither**? Record its factors and a multiplicative sentence.",
                  img: "lolly-machines.png", img2: "lolly-table-prime.png",
                  answer: "12 = 1 × 2 × 2 × 3 · missing rows: 36 (2 × 2 × 3 × 3) and 48 (2 × 2 × 3 × 4) · 54 = 2 × 3 × 3 × 3 · 63 = 3 × 3 × 7 · 72 = 2 × 2 × 2 × 3 × 3. All are composite."
                }
              ]
            },
            {
              label: "Review 3",
              questions: [
                {
                  type: "mc", focus: "Multiplicative relations A",
                  prompt: "I am thinking of a number. Its **factors** include **1, 2, 3, 4, 6 and 8**. What number am I?",
                  options: ["57", "68", "96", "104"],
                  answer: 2,
                  explain: "96 ÷ 8 = 12 and 96 ÷ 6 = 16. 57 is odd, 68 and 104 are not divisible by 3."
                },
                {
                  type: "sr", focus: "Representing quantity fractions A",
                  prompt: "**Order** the unit fractions in ascending order on a number line from 0 to 1.",
                  display: "[1/8]  [1/6]  [1/3]  [1/10]  [1/2]  [1/4]  [1/5]",
                  answer: "[1/10], [1/8], [1/6], [1/5], [1/4], [1/3], [1/2]"
                },
                {
                  type: "sr", focus: "Additive relations A",
                  prompt: "Use the strategies of **levelling** and **constant difference** to solve:",
                  display: "456 + 64\n289 − 31",
                  answer: "456 + 64 → 460 + 60 = **520** · 289 − 31 → 288 − 30 = **258**"
                },
                {
                  type: "sr", focus: "Geometric measure A: Length",
                  prompt: "Find the total **perimeter** of this composite shape:",
                  img: "h-shape-perimeter.png",
                  answer: "**128 cm** (25 + 25 + 8 + 8 + 8 + 8 + 9 + 5 + 9 + 9 + 5 + 9), taking both gaps as 9 cm deep"
                },
                {
                  type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
                  prompt: "Tyrell says a **square pyramid** has 4 vertices. Do you agree or disagree? Why?",
                  answer: "Disagree. A square pyramid has **5 vertices**: 4 around the square base and 1 at the apex."
                },
                {
                  type: "ns", title: "Factors of a number", focus: "Multiplicative relations A",
                  prompt: "Amira is thinking of a number. Its **factors** include 1, 2, 3 and 4.",
                  list: ["Jake says it is 48", "Malik says it is 24", "Lucy says it is 71"],
                  follow: "Who is correct and why?",
                  answer: "Jake and Malik are both correct: 1, 2, 3 and 4 are factors of 24 and 48. Lucy is not: 71 is prime, so its only factors are 1 and 71."
                }
              ]
            },
            {
              label: "Review 4",
              questions: [
                {
                  type: "tf", focus: "Multiplicative relations A",
                  prompt: "9 is a **factor** of 48.",
                  follow: "Communicate your reasoning.",
                  answer: false,
                  explain: "48 ÷ 9 = 5 remainder 3. The factors of 48 are 1, 2, 3, 4, 6, 8, 12, 16, 24 and 48."
                },
                {
                  type: "sr", focus: "Represents numbers B",
                  prompt: "Record 10%, or one-tenth, of the following:",
                  display: "130   250   70   620   22",
                  answer: "13 · 25 · 7 · 62 · 2.2"
                },
                {
                  type: "sr", focus: "Additive relations A",
                  prompt: "Which combination of parcels will **balance** a set of scales?",
                  img: "parcels.png",
                  answer: "Parcel A on one side, B + C + D on the other: 4.003 + 32.713 + 11.194 = **47.91 kg**"
                },
                {
                  type: "sr", focus: "Geometric measure A: Length",
                  prompt: "Pop's garden needs 60 m of fencing. What could be the **length and width** of the garden?",
                  follow: "Communicate your thinking.",
                  answer: "Length + width must equal 30 m. For example 20 m × 10 m, 15 m × 15 m or 25 m × 5 m."
                },
                {
                  type: "sr", focus: "Two-dimensional spatial structure A: Area",
                  prompt: "The playground needs new turf. It is 28 metres long and 7 metres wide. Mr Bancroft estimates 200 square metres of turf is needed. Is this enough? **Explain** the strategies you used.",
                  answer: "Yes. 28 × 7 = **196 m²** (e.g. 30 × 7 = 210, take away 2 × 7 = 14), so 200 m² is enough."
                },
                {
                  type: "ns", title: "Determining factors", focus: "Multiplicative relations A",
                  prompt: "Identify as many **factors** as possible.",
                  display: "64",
                  answer: "1, 2, 4, 8, 16, 32, 64"
                }
              ]
            }
          ]
        },
        {
          week: 2,
          days: [
            {
              label: "Review 5",
              questions: [
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
                  answer: "25% of $200 = $50, so Sarah pays **$150**"
                },
                {
                  type: "sr", focus: "Additive relations A",
                  prompt: "Use **estimation** to determine the reasonableness of this answer.",
                  img: "subtraction-check.png",
                  follow: "Communicate your thinking.",
                  answer: "Not reasonable. 434 000 − 5000 ≈ 429 000, and subtracting should give a smaller number, not a bigger one. The correct answer is **428 807**."
                },
                {
                  type: "sr", focus: "Non-spatial measure A: Mass",
                  prompt: "Identify the suitable unit to measure the **mass** of each item: grams, kilograms or tonnes.",
                  list: ["a pencil", "a watermelon", "a puppy", "a truck"],
                  answer: "pencil: grams · watermelon: kilograms · puppy: kilograms · truck: tonnes"
                },
                {
                  type: "sr", focus: "Chance A",
                  prompt: "Identify the possible outcomes which are **equally likely**.",
                  img: "spinner.png",
                  follow: "Communicate your thinking.",
                  answer: "Orange and blue are equally likely (each [1/4]). Green covers [2/4], so it is twice as likely."
                },
                {
                  type: "ns", title: "Adding and subtracting fractions in area models", focus: "Representing quantity fractions A",
                  prompt: "Record at least 4 **addition or subtraction** sentences that match image A.\nRecord at least 4 that match image B.",
                  img: "area-models-add.png",
                  answer: "Many answers. A: [3/6] + [2/6] + [1/6] = [6/6], 1 − [3/6] = [3/6] … B: [4/6] + [3/6] + [2/6] = [9/6] = 1[3/6], 1[3/6] − [4/6] = [5/6] …"
                }
              ]
            },
            {
              label: "Review 6",
              questions: [
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
                  follow: "Share your strategies for finding the solution.",
                  answer: "[4/5] + [2/5] + [3/5] = [9/5] = **1[4/5] bags**"
                },
                {
                  type: "sr", focus: "Additive relations A",
                  prompt: "Use **rounding and estimation** to solve this number sentence.",
                  display: "16 429 + 648 957",
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
                  prompt: "Mrs Leaver is organising a class picnic and needs 1 litre of water, 550 mL of orange juice and 250 mL of milk. How many litres does she need?\nAnswer using **decimal notation**.",
                  answer: "1 + 0.55 + 0.25 = **1.8 L**"
                },
                {
                  type: "ns", title: "Calculating fractions in area models", focus: "Representing quantity fractions A",
                  prompt: "Use the **area models** to solve:",
                  display: "2 − [6/6] =\n2 − [1/3] =\n2 − [2/3] =",
                  img: "area-models-subtract.png",
                  answer: "1 · 1[2/3] · 1[1/3]"
                }
              ]
            },
            {
              label: "Review 7",
              questions: [
                {
                  type: "mc", focus: "Representing quantity fractions B",
                  prompt: "What **fraction** of the hexagon is the blue rhombus?",
                  img: "hexagon.png",
                  options: ["[3/6]", "[6/12]", "[1/3]", "[2/10]"],
                  answer: 2,
                  explain: "The rhombus covers 2 of the 6 equal triangles in the hexagon: [2/6] = [1/3]. ([3/6] and [6/12] describe the red trapezium.)"
                },
                {
                  type: "sr", focus: "Representing quantity fractions A",
                  prompt: "A family goes on a road trip. On the first day they listen to **10%** of an audio book. On the second day they listen to **one quarter** ([1/4]) of the book. How much of the book do they have left to listen to?",
                  follow: "Use a bar model or number line to show your thinking.",
                  answer: "100% − 10% − 25% = **65%** (or [13/20]) left"
                },
                {
                  type: "sr", focus: "Additive relations A",
                  prompt: "Use **estimation** to find the answer.",
                  display: "43 893 + 92 107",
                  follow: "Justify the reasonableness of your solution.",
                  answer: "About 44 000 + 92 000 = **136 000**. Exact answer: 136 000 (893 + 107 makes 1000)."
                },
                {
                  type: "sr", focus: "Non-spatial measure A: Mass",
                  prompt: "Record the following masses in **decimal notation**:",
                  list: ["2 kilograms and 350 grams", "1 kilogram and 982 grams", "7 kilograms and 43 grams"],
                  answer: "2.35 kg · 1.982 kg · 7.043 kg"
                },
                {
                  type: "sr", focus: "Geometric measure A: Angles",
                  prompt: "Describe how to use a **protractor** to measure an angle less than 90°.",
                  answer: "Put the centre point on the vertex. Line up the baseline (0°) with one arm. Read the scale that starts at 0 on that arm, where the other arm crosses. Check the reading is less than 90°."
                },
                {
                  type: "ns", title: "Equivalent fractions, decimals and percentages", focus: "Representing quantity fractions B",
                  prompt: "Place each value in the magic square so every row, column and diagonal adds to **1[1/2]**.",
                  img: "magic-square.png",
                  answer: "Top: [1/5], [7/10], 0.6 · Middle: 90%, [1/2], [1/10] · Bottom: 40%, [3/10], 0.8"
                }
              ]
            },
            {
              label: "Review 8",
              questions: [
                {
                  type: "tf", focus: "Representing quantity fractions A",
                  prompt: "When Amy completes this **fraction number sentence** her answer is [20/6]. Is Amy's solution true or false?",
                  display: "2 + [6/6] + [2/6]",
                  answer: true,
                  explain: "2 = [12/6], so [12/6] + [6/6] + [2/6] = [20/6]."
                },
                {
                  type: "sr", focus: "Representing quantity fractions A",
                  prompt: "Write the following as a **fraction number sentence** and solve:\nyellow circles + white squares + star",
                  img: "shapes-grid.png",
                  answer: "[2/10] + [4/10] + [1/10] = **[7/10]** (counting only the white squares with nothing on them)"
                },
                {
                  type: "sr", focus: "Additive relations A",
                  prompt: "**Estimate** the total distance:",
                  list: [
                    "Broken Hill, Wilyakali Country to Wilcannia, Barkindji Country: 197 km",
                    "Wilcannia to Dubbo, Wiradjuri Country: 557 km",
                    "Dubbo to Gunnedah, Kamilaroi Country: 248 km",
                    "Gunnedah to Armidale, Anaiwan Country: 179 km",
                    "Armidale to Yamba, Yaegl Country: 258 km"
                  ],
                  follow: "Communicate the reasonableness of your estimation.",
                  answer: "About 200 + 560 + 250 + 180 + 260 = **1450 km** (exact: 1439 km)"
                },
                {
                  type: "sr", focus: "Non-spatial measure A: Mass",
                  prompt: "Interpret the **decimal notation** for these masses:",
                  list: ["4.8 kg is the same as ___ g", "0.875 kg is the same as ___ g", "1.04 kg is the same as ___ g"],
                  answer: "4800 g · 875 g · 1040 g"
                },
                {
                  type: "sr", focus: "Non-spatial measure A: Time",
                  prompt: "Grandma wants to watch **Beyond the news**, **Crime scene** and **Extreme sports update** on different channels. Will she be able to watch all of them?",
                  html: "tvGuide",
                  follow: "Communicate your thinking.",
                  answer: "Yes. Beyond the news 1931–2000 (Channel 4), Crime scene 2030–2259 (3HD), Extreme sports update from 2328 (Channel 4). None of them overlap."
                },
                {
                  type: "ns", title: "Solving problems with fractions (same denominator)", focus: "Representing quantity fractions A",
                  prompt: "I eat [1/5] of a block of chocolate and you eat [3/5] of the same block. How much of the block has been eaten?",
                  list: ["What percentage of the chocolate did I eat?", "What percentage of the chocolate did you eat?"],
                  html: "chocolateBlock",
                  answer: "[4/5] has been eaten. I ate 20%, you ate 60% (80% altogether)."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
