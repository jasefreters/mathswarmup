/*
  Stage 3 Year A, Unit 15 — Review of learning (Term 3, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 3, ls: 5, unit: 15,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 15 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Choose the **most efficient strategy** to **round each number to the nearest 100** when estimating the total for **6754 + 7892**.",
        options: ["6700 + 7800", "6750 + 7890", "6800 + 7900", "6800 + 7800"],
        answer: 2,
        interact: [{ kind: "marker", min: 6700, max: 6800, divs: 10, majorEvery: 5, labels: [6700, 6750, 6800], label: "6754", hint: "Slide the pin to 6754. Is it closer to 6700 or 6800? Then try 7892 the same way." }],
        explain: "6754 is past 6750, so it rounds up to 6800. 7892 is past 7850, so it rounds up to 7900. 6800 + 7900 = 14 700, close to the real total of 14 646. B rounds to the nearest 10, not 100."
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "**Match** these **decimals** to the **positions** on the **number line**: 1.45, 0.45, 0.80, 1.05",
        img: "u15-letters.png",
        interact: [
          { kind: "numberline", min: 0, max: 2, ticks: 20, tol: 0.06, items: [["1.45", 1.45], ["0.45", 0.45], ["0.80", 0.8], ["1.05", 1.05]] },
          { kind: "choose", rows: [
            { t: "A", options: ["0.45", "0.80", "1.05", "1.45"], a: 0 },
            { t: "B", options: ["0.45", "0.80", "1.05", "1.45"], a: 1 },
            { t: "C", options: ["0.45", "0.80", "1.05", "1.45"], a: 2 },
            { t: "D", options: ["0.45", "0.80", "1.05", "1.45"], a: 3 }] }
        ],
        answer: "A = **0.45** · B = **0.80** · C = **1.05** · D = **1.45**. A is a little less than halfway to 1, B is closer to 1, C is just past 1 and D is a little less than halfway from 1 to 2.",
        explain: "The letters on the slide are only roughly placed, but their order is clear: the smallest decimal is A and the largest is D. Drag the cards onto the scaled number line to check."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "**8.85 m** is: ___ **m** and ___ **cm**.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 8.85, hint: "This is 8.85 metres. 1 hundredth of a metre is 1 centimetre." },
          { kind: "input", fields: [{ label: "8.85 m =", value: 8, suffix: "m" }, { label: "and", value: 85, suffix: "cm" }] }
        ],
        answer: "**8 m and 85 cm**. The 8 is whole metres, and 0.85 m is 85 hundredths of a metre, which is 85 cm (100 cm = 1 m)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Estimate** the total for **213 × 6**, then use the **area model** to solve.",
        interact: [
          { kind: "input", fields: [{ label: "Estimate", min: 1200, max: 1300 }] },
          { kind: "cells", cols: 4, w: 90, grid: [["#×", "#200", "#10", "#3"], ["#6", { v: 1200 }, { v: 60 }, { v: 18 }]], msg: "Multiply 6 by each part of 213." },
          { kind: "input", fields: [{ label: "213 × 6 =", value: 1278 }] }
        ],
        answer: "Estimate: 200 × 6 = **1200** (or 210 × 6 = 1260). Area model: 6 × 200 = 1200, 6 × 10 = 60, 6 × 3 = 18. 1200 + 60 + 18 = **1278**, close to the estimate.",
        explain: "Any sensible estimate from 1200 to 1300 is accepted."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Why might the **expected frequency differ** to the **observed frequency** of an outcome in a **chance experiment**?",
        interact: [{ kind: "select", hint: "Tap every reason that explains the difference.", items: [
          ["Each trial is random, so we can't predict exactly what will happen", true],
          ["Only a small number of trials were done", true],
          ["Someone must have made a mistake counting", false],
          ["The expected frequency tells you exactly what will happen", false]] }],
        answer: "Because chance experiments are **random**: each trial can't be predicted, so the results **vary**. Expected frequency is what we'd predict on average. With a **small number of trials** the observed results can be quite different; with **many more trials** they usually get closer to the expected frequency.",
        explain: "For example, flipping a coin 10 times we expect 5 heads, but getting 3 or 7 heads is common."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "**2357 + 6106 = 8463** Using **estimation**, this answer is **reasonable**.",
        answer: true,
        interact: [{ kind: "marker", min: 8000, max: 9000, divs: 10, majorEvery: 5, labels: [8000, 8500, 9000], label: "8463", hint: "Estimate first: 2400 + 6100 = 8500. Slide the pin to 8463. Is it close?" }],
        explain: "Round to the nearest 100: 2400 + 6100 = 8500. 8463 is very close to 8500, so the answer is reasonable. (It is also exactly right.)"
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "**Represent** each **percentage** as a **common fraction** and a related **equivalent fraction**: A. 25% B. 50% C. 75%",
        interact: [
          { kind: "shade", parts: 4, pct: true, hint: "Each part is one quarter. Shade 25%, 50% or 75%." },
          { kind: "input", fields: [
            { label: "A. 25% common fraction", accept: ["1/4"], placeholder: "a/b" },
            { label: "A. 25% equivalent fraction", accept: ["25/100", "2/8", "3/12", "4/16", "5/20", "10/40", "20/80"], placeholder: "a/b" },
            { label: "B. 50% common fraction", accept: ["1/2"], placeholder: "a/b" },
            { label: "B. 50% equivalent fraction", accept: ["50/100", "2/4", "3/6", "4/8", "5/10", "6/12", "10/20", "25/50"], placeholder: "a/b" },
            { label: "C. 75% common fraction", accept: ["3/4"], placeholder: "a/b" },
            { label: "C. 75% equivalent fraction", accept: ["75/100", "6/8", "9/12", "12/16", "15/20", "30/40", "60/80"], placeholder: "a/b" }] }
        ],
        answer: "A. 25% = **[1/4]** = [25/100] (or [2/8]) · B. 50% = **[1/2]** = [50/100] (or [2/4], [5/10]) · C. 75% = **[3/4]** = [75/100] (or [6/8]).",
        explain: "Per cent means out of 100, so [25/100], [50/100] and [75/100] are the most related equivalent fractions. Other equivalent fractions such as [2/8] or [5/10] are also accepted."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "**Convert**: a) **3650 m** to **km** b) **8 kilometres 250 metres** to **m**",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 3650, shift: true, hint: "This is 3650 m. 1000 m = 1 km, so press ÷10 three times." },
          { kind: "input", fields: [{ label: "a) 3650 m =", value: 3.65, suffix: "km" }, { label: "b) 8 km 250 m =", value: 8250, suffix: "m" }] }
        ],
        answer: "a) **3.65 km** (3650 ÷ 1000) · b) **8250 m** (8 × 1000 = 8000, + 250)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **distributive property** with **partial products** to solve: **4568 × 8**",
        interact: [
          { kind: "cells", cols: 5, w: 90, grid: [["#×", { v: 4000 }, { v: 500 }, { v: 60 }, { v: 8 }], ["#8", { v: 32000 }, { v: 4000 }, { v: 480 }, { v: 64 }]], msg: "Top row: the place value parts of 4568. Bottom row: each part × 8." },
          { kind: "input", fields: [{ label: "4568 × 8 =", value: 36544 }] }
        ],
        answer: "4568 = 4000 + 500 + 60 + 8. 8 × 4000 = 32 000, 8 × 500 = 4000, 8 × 60 = 480, 8 × 8 = 64. 32 000 + 4000 + 480 + 64 = **36 544**."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Is the coin flip game ‘heads or tails’ **fair**? Is the game **random**? **Communicate** your **reasoning**.",
        interact: [{ kind: "choose", rows: [
          { t: "Is it fair?", options: ["Yes: heads and tails are equally likely", "No: heads comes up more often", "No: you can't win"], a: 0 },
          { t: "Is it random?", options: ["Yes: you can't predict the result of a flip", "No: it always lands the same way", "No: you can choose the side"], a: 0 }] }],
        answer: "**Yes, it is fair**: a coin has 2 outcomes that are equally likely, so each player has a [1/2] chance. **Yes, it is random**: no one can predict or control which side lands up on each flip.",
        explain: "This assumes an ordinary, evenly weighted coin that is flipped properly."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "Which **algorithm** has a **place value error**?",
        options: ["433 + 433 = 866", "354 + 485 = 839", "409 + 402 = 811", "337 + 248 = 675"],
        answer: 3,
        interact: [{ kind: "cells", cols: 4, w: 64, grid: [[null, "#H", "#T", "#O"], [null, "3", "3", "7"], ["#+", "2", "4", "8"], ["#=", { v: 5 }, { v: 8 }, { v: 5 }]], msg: "Redo D: 7 + 8 = 15 ones. Write 5 and trade the ten into the tens column." }],
        explain: "In D, 7 + 8 = 15 ones, which is 1 ten and 5 ones. The 1 ten was carried into the hundreds column instead of the tens column, giving 675. The correct answer is 337 + 248 = 585. A, B and C are all correct."
      },
      {
        type: "sr", focus: "Represents number B",
        prompt: "**Complete** the sentences: a) To find **10%** the total amount is **divided** by ___. b) To find **25%** or **one quarter**, the total amount is **divided** by ___. c) To find **50%** the total amount is **divided** by ___.",
        interact: [
          { kind: "shade", parts: 10, pct: true, hint: "Each part is 10%. How many equal parts make the whole?" },
          { kind: "input", fields: [{ label: "a) 10%: divide by", value: 10 }, { label: "b) 25%: divide by", value: 4 }, { label: "c) 50%: divide by", value: 2 }] }
        ],
        answer: "a) **10** (10% = [1/10]) · b) **4** (25% = [1/4]) · c) **2** (50% = [1/2])."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "**Calculate** the **perimeter** of the **rectangle**.",
        interact: [
          { kind: "sides", view: [380, 250], label: "Rectangle 27 cm by 18 cm", fill: "#FFFFFF", poly: [[40, 50], [310, 50], [310, 230], [40, 230]],
            dims: [{ from: [40, 32], to: [310, 32] }, { from: [328, 50], to: [328, 230] }],
            labels: [{ x: 175, y: 22, t: "27 cm" }, { x: 338, y: 145, t: "18 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 90, suffix: "cm" }] }
        ],
        answer: "27 + 18 + 27 + 18 = **90 cm**, or 2 × (27 + 18) = 2 × 45 = 90 cm.",
        explain: "Only one length and one width are labelled. The opposite sides of a rectangle are equal, so the other two sides are also 27 cm and 18 cm."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use the **area model** to **represent** and **solve**: **76 × 42**",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#×", "#70", "#6"], ["#40", { v: 2800 }, { v: 240 }], ["#2", { v: 140 }, { v: 12 }]], msg: "Multiply the row number by the column number in each box." },
          { kind: "input", fields: [{ label: "76 × 42 =", value: 3192 }] }
        ],
        answer: "40 × 70 = 2800, 40 × 6 = 240, 2 × 70 = 140, 2 × 6 = 12. 2800 + 240 + 140 + 12 = **3192**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Select **square kilometres** or **hectares** to identify which unit is used to measure the **area** of: A. a farm B. Australia. **Communicate** your **reasoning**.",
        interact: [{ kind: "choose", rows: [
          { t: "A. a farm", options: ["hectares", "square kilometres"], a: 0 },
          { t: "B. Australia", options: ["hectares", "square kilometres"], a: 1 }] }],
        answer: "A. A farm: **hectares**. A hectare is 100 m by 100 m (10 000 m²), which suits fields and farms. B. Australia: **square kilometres**. A km² is 1000 m by 1000 m (100 hectares), which suits very large areas like states and countries.",
        explain: "Very large farms are sometimes given in km² too, but hectares are the usual unit for farm land."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "**8800** is a **reasonable estimation** for **7659 + 1345**",
        answer: false,
        interact: [{ kind: "marker", min: 8000, max: 10000, divs: 20, majorEvery: 5, labels: [8000, 8500, 9000, 9500, 10000], label: "Estimate", hint: "Round each number to the nearest 100: 7700 + 1300. Slide the pin to that estimate. How far is it from 8800?" }],
        explain: "Round to the nearest 100: 7700 + 1300 = 9000. The real total is 9004. 8800 is about 200 too small, so it isn't a reasonable estimate. 9000 is."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use **place value** to solve: **2134 + 56 + 210** **Communicate** your **reasoning**.",
        interact: [
          { kind: "cells", cols: 5, w: 70, grid: [[null, "#Th", "#H", "#T", "#O"], ["#2134", "2", "1", "3", "4"], ["#56", "0", "0", "5", "6"], ["#210", "0", "2", "1", "0"], ["#Total", { v: 2 }, { v: 3 }, { v: 9 }, { v: 10 }]], msg: "Add each column: thousands, hundreds, tens and ones." },
          { kind: "input", fields: [{ label: "2134 + 56 + 210 =", value: 2400 }] }
        ],
        answer: "Thousands: 2. Hundreds: 1 + 2 = 3. Tens: 3 + 5 + 1 = 9. Ones: 4 + 6 = 10. 2 thousands, 3 hundreds, 9 tens and 10 ones = 2000 + 300 + 90 + 10 = **2400**.",
        explain: "10 ones trade for 1 ten, making 10 tens, which trade for 1 hundred: 2400."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Find **2 buildings** with the **same perimeter**. **Explain** your **reasoning**. (There are two pairs to find.)",
        interact: [
          { kind: "sides", view: [600, 180], label: "Shopping Centre: 6 units by 6 units", fill: "#FFFFFF", poly: [[110, 44], [230, 44], [230, 164], [110, 164]],
            dims: [{ from: [110, 26], to: [230, 26] }, { from: [92, 44], to: [92, 164] }],
            labels: [{ x: 170, y: 18, t: "6 units" }, { x: 82, y: 110, t: "6 units", anchor: "end" }, { x: 250, y: 110, t: "Shopping Centre", anchor: "start" }] },
          { kind: "sides", view: [600, 140], label: "Bank: 8 units by 4 units", fill: "#FFFFFF", poly: [[110, 44], [270, 44], [270, 124], [110, 124]],
            dims: [{ from: [110, 26], to: [270, 26] }, { from: [92, 44], to: [92, 124] }],
            labels: [{ x: 190, y: 18, t: "8 units" }, { x: 82, y: 90, t: "4 units", anchor: "end" }, { x: 290, y: 90, t: "Bank", anchor: "start" }] },
          { kind: "sides", view: [600, 100], label: "Police Station: 6 units by 2 units", fill: "#FFFFFF", poly: [[110, 44], [230, 44], [230, 84], [110, 84]],
            dims: [{ from: [110, 26], to: [230, 26] }, { from: [92, 44], to: [92, 84] }],
            labels: [{ x: 170, y: 18, t: "6 units" }, { x: 82, y: 70, t: "2 units", anchor: "end" }, { x: 250, y: 70, t: "Police Station", anchor: "start" }] },
          { kind: "sides", view: [600, 140], label: "Fire Station: 4 units by 4 units", fill: "#FFFFFF", poly: [[110, 44], [190, 44], [190, 124], [110, 124]],
            dims: [{ from: [110, 26], to: [190, 26] }, { from: [92, 44], to: [92, 124] }],
            labels: [{ x: 150, y: 18, t: "4 units" }, { x: 82, y: 90, t: "4 units", anchor: "end" }, { x: 210, y: 90, t: "Fire Station", anchor: "start" }] },
          { kind: "sides", view: [600, 100], label: "Pool: 13 units by 2 units", fill: "#FFFFFF", poly: [[110, 44], [370, 44], [370, 84], [110, 84]],
            dims: [{ from: [110, 26], to: [370, 26] }, { from: [92, 44], to: [92, 84] }],
            labels: [{ x: 240, y: 18, t: "13 units" }, { x: 82, y: 70, t: "2 units", anchor: "end" }, { x: 390, y: 70, t: "Pool", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Shopping Centre", value: 24, suffix: "units" }, { label: "Bank", value: 24, suffix: "units" }, { label: "Police Station", value: 16, suffix: "units" }, { label: "Fire Station", value: 16, suffix: "units" }, { label: "Pool", value: 30, suffix: "units" }] },
          { kind: "select", hint: "Tap every pair of buildings with the same perimeter.", items: [
            ["Shopping Centre and Bank", true], ["Police Station and Fire Station", true], ["Bank and Pool", false], ["Shopping Centre and Fire Station", false]] }
        ],
        answer: "**Shopping Centre and Bank** both have a perimeter of 24 units (6 + 6 + 6 + 6 and 8 + 4 + 8 + 4). **Police Station and Fire Station** both have 16 units (6 + 2 + 6 + 2 and 4 + 4 + 4 + 4). The Pool is 13 + 2 + 13 + 2 = 30 units.",
        explain: "Side lengths were counted in grid squares on the slide's map (1 unit = 1 square). The map has two matching pairs, so either pair answers the question; both are listed."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Choose the most **appropriate multiplicative strategy** to solve: **278 × 29**",
        interact: [
          { kind: "choose", rows: [{ t: "A good strategy", options: ["Compensation: 278 × 30, then take away one 278", "Count by 29s", "Repeated addition of 278"], a: 0 }] },
          { kind: "cells", cols: 2, w: 110, grid: [["#278 × 30", { v: 8340 }], ["#− 278", { v: 278 }], ["#278 × 29", { v: 8062 }]], msg: "278 × 3 = 834, so 278 × 30 = 8340. Then take away one group of 278." },
          { kind: "input", fields: [{ label: "278 × 29 =", value: 8062 }] }
        ],
        answer: "29 is 1 less than 30, so use **compensation**: 278 × 30 = 8340, then 8340 − 278 = **8062**.",
        explain: "An area model or the multiplication algorithm also works: 278 × 20 = 5560 and 278 × 9 = 2502, 5560 + 2502 = 8062."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Do these **rectangles** have the same **area**? **Communicate** your **reasoning**.",
        interact: [
          { kind: "areagrid", size: 36, cells: ["111", "111", "111", "111", "111", "111"] },
          { kind: "areagrid", size: 36, cells: ["111111", "111111", "111111"] },
          { kind: "input", fields: [{ label: "Tall rectangle", value: 18, suffix: "squares" }, { label: "Wide rectangle", value: 18, suffix: "squares" }] },
          { kind: "choose", rows: [{ t: "Same area?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes.** The tall rectangle is 3 by 6 = **18 squares** and the wide one is 6 by 3 = **18 squares**. It is the same rectangle turned on its side (3 × 6 = 6 × 3).",
        explain: "Counted from the slide's grid: the first rectangle is 3 squares wide and 6 tall, the second is 6 wide and 3 tall."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Which **2-digit by 2-digit** multiplication problem **matches** the **area model**? 20 × 60 = 1200, 20 × 8 = 160, 7 × 60 = 420, 7 × 8 = 56. 1200 + 420 + 160 + 56 = 1836",
        options: ["27 × 68", "80 × 15", "27 × 86", "68 × 20"],
        answer: 0,
        interact: [{ kind: "cells", cols: 3, w: 90, grid: [["#×", "#60", "#8"], ["#20", { v: 1200 }, { v: 160 }], ["#7", { v: 420 }, { v: 56 }]], msg: "Multiply the row number by the column number in each box." }],
        explain: "The sides of the model are 20 + 7 = 27 and 60 + 8 = 68, so it shows 27 × 68 = 1836. C uses 86, not 68."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "**4988 + 955 = 4990 + 953 = 5000 + 943** Which strategy has been used to calculate the answer? **Constant difference**, **bridging**, **levelling** or **addition for subtraction**? **Communicate** your **reasoning**.",
        interact: [
          { kind: "choose", rows: [{ t: "Strategy", options: ["Constant difference", "Bridging", "Levelling", "Addition for subtraction"], a: 2 }] },
          { kind: "input", fields: [{ label: "4988 + 955 =", value: 5943 }] }
        ],
        answer: "**Levelling.** 2 is moved from 955 to 4988 (4990 + 953), then 10 more (5000 + 943). One number goes up and the other goes down by the same amount, so the total stays the same: **5943**.",
        explain: "Constant difference is for subtraction (change both numbers the same way). Here the numbers change in opposite directions, keeping the sum the same, which is levelling. Making 5000 is a friendly target, but the amount is moved between the numbers rather than jumped on, so it isn't bridging."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "**3.75 kg** is the **same** as ___ **kilograms** and ___ **grams**.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 3.75, hint: "This is 3.75 kg. The three places after the point are thousandths of a kilogram: grams." },
          { kind: "input", fields: [{ label: "3.75 kg =", value: 3, suffix: "kg" }, { label: "and", value: 750, suffix: "g" }] }
        ],
        answer: "**3 kilograms and 750 grams**. 0.75 kg = 0.750 kg = 750 g, because 1000 g = 1 kg."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use a **formal algorithm** to solve: **53 × 29**",
        interact: [
          { kind: "cells", cols: 2, w: 110, grid: [["#53 × 9", { v: 477 }], ["#53 × 20", { v: 1060 }], ["#Total", { v: 1537 }]], msg: "Multiply 53 by the ones (9), then by the tens (20), then add." },
          { kind: "input", fields: [{ label: "53 × 29 =", value: 1537 }] }
        ],
        answer: "53 × 9 = **477**. 53 × 20 = **1060**. 477 + 1060 = **1537**.",
        explain: "Check: 53 × 30 = 1590, and 1590 − 53 = 1537."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "**Compare** the **properties** of these **three-dimensional objects**.",
        img: "u15-objects.png",
        interact: [
          { kind: "choose", rows: [
            { t: "Object 1 (left)", options: ["Rectangular prism", "Square-based pyramid", "Triangular prism"], a: 0 },
            { t: "Object 2 (right)", options: ["Rectangular prism", "Square-based pyramid", "Triangular prism"], a: 1 }] },
          { kind: "cells", cols: 3, w: 110, grid: [["#", "#Prism", "#Pyramid"], ["#Faces", { v: 6 }, { v: 5 }], ["#Edges", { v: 12 }, { v: 8 }], ["#Vertices", { v: 8 }, { v: 5 }]], msg: "Count the faces, edges and vertices of each object. Dashed lines are hidden edges." }
        ],
        answer: "**Rectangular prism:** 6 rectangular faces, 12 edges, 8 vertices; opposite faces are the same. **Square-based pyramid:** 1 square base and 4 triangular faces (5 faces), 8 edges, 5 vertices; the triangles meet at the apex. Both have a rectangular or square base and flat faces.",
        explain: "The dashed lines show hidden edges, so count them too."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "To solve **4 × 18** mentally, you can **factorise** 18 into **2 × 9**. **Communicate** your **reasoning**.",
        answer: true,
        interact: [{ kind: "array", rows: 4, cols: 18, showTotal: true, hint: "4 rows of 18. Can you see it as 4 × 2 × 9 = 8 × 9?" }],
        explain: "18 = 2 × 9, so 4 × 18 = 4 × 2 × 9 = 8 × 9 = 72. Factorising turns it into a fact we know."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Record a **formal algorithm** to **solve**: **5367 + 880 + 14**",
        interact: [
          { kind: "cells", cols: 5, w: 64, grid: [[null, "#Th", "#H", "#T", "#O"], [null, "5", "3", "6", "7"], [null, null, "8", "8", "0"], ["#+", null, null, "1", "4"], ["#=", { v: 6 }, { v: 2 }, { v: 6 }, { v: 1 }]], msg: "Start with the ones. Trade 10 ones for 1 ten, 10 tens for 1 hundred, and so on." },
          { kind: "input", fields: [{ label: "5367 + 880 + 14 =", value: 6261 }] }
        ],
        answer: "Ones: 7 + 0 + 4 = 11, write 1, trade 1 ten. Tens: 6 + 8 + 1 + 1 = 16, write 6, trade 1 hundred. Hundreds: 3 + 8 + 1 = 12, write 2, trade 1 thousand. Thousands: 5 + 1 = 6. Total **6261**."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "**Convert**: a) **7.5 kg** into **grams** b) **375 g** into **kilograms**",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 7.5, shift: true, hint: "This is 7.5 kg. 1 kg = 1000 g, so press ×10 three times." },
          { kind: "input", fields: [{ label: "a) 7.5 kg =", value: 7500, suffix: "g" }, { label: "b) 375 g =", value: 0.375, suffix: "kg" }] }
        ],
        answer: "a) 7.5 × 1000 = **7500 g** · b) 375 ÷ 1000 = **0.375 kg**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "**Model** your answer using a **diagram**: **34 ÷ 8 =**",
        interact: [
          { kind: "pack", total: 34, size: 8, label: "group", thing: "counters", hint: "Make groups of 8. How many full groups? How many are left over?" },
          { kind: "input", fields: [{ label: "34 ÷ 8 =", value: 4 }, { label: "remainder", value: 2 }] }
        ],
        answer: "**4 groups of 8** with **2 left over**, so 34 ÷ 8 = **4 remainder 2** (4 × 8 = 32, 32 + 2 = 34).",
        explain: "The remainder can also be written as a fraction of a group: 4 [2/8] = 4 [1/4], or 4.25."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "**Record** the **length** of the shark using **decimal notation**: 5 metres 34 centimetres.",
        img: "u15-shark.png",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 5.34, hint: "5 whole metres, and 34 cm is 34 hundredths of a metre." },
          { kind: "input", fields: [{ label: "Length", value: 5.34, suffix: "m" }] }
        ],
        answer: "**5.34 m**. 100 cm = 1 m, so 34 cm = 0.34 m.",
        explain: "The slide labels this Three-dimensional spatial structure, but it is a length conversion, so it is filed under Geometric measure."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Jane set up 23 rows of chairs. Each row has 14 chairs. How many chairs are there altogether?",
        options: ["345", "324", "322", "233"],
        answer: 2,
        interact: [{ kind: "cells", cols: 3, w: 90, grid: [["#×", "#20", "#3"], ["#10", { v: 200 }, { v: 30 }], ["#4", { v: 80 }, { v: 12 }]], msg: "Multiply the row number by the column number in each box." }],
        cubes: { ops: ["×"], solve: [{ t: "Area model", s: "23 × 14: 20 × 10 = 200, 3 × 10 = 30, 20 × 4 = 80, 3 × 4 = 12. 200 + 30 + 80 + 12 = 322." }, { t: "Split one number", s: "23 × 14 = 23 × 10 + 23 × 4 = 230 + 92 = 322." }] },
        explain: "23 rows of 14 is 23 × 14 = 322 chairs."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Mia said **bridging** is the most **efficient strategy** to **solve** **74 357 + 6869**. Is she **correct**? **Communicate** your **reasoning**.",
        interact: [
          { kind: "jumps", start: 74357, steps: [643, 6226], hint: "Bridge to 75 000 first (+643), then add the rest of 6869 (+6226)." },
          { kind: "select", hint: "Tap every strategy that is efficient for 74 357 + 6869.", items: [
            ["Bridging: + 643 to make 75 000, then + 6226", true],
            ["Compensation: + 7000, then − 131", true],
            ["Counting on by ones", false],
            ["Counting on by tens", false]] },
          { kind: "input", fields: [{ label: "74 357 + 6869 =", value: 81226 }] }
        ],
        answer: "Bridging **works well**: 74 357 + 643 = 75 000, then 75 000 + 6226 = **81 226**. But **compensation** is just as efficient: 74 357 + 7000 = 81 357, then − 131 = 81 226. So Mia's strategy is efficient, though not the only efficient one.",
        explain: "Which strategy is most efficient depends on the student. Accept any well-reasoned answer: bridging or compensation both give 81 226 in two easy steps."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "**Convert**: a) 2250 **kilograms** to **tonnes** b) 9.5 **tonnes** to **kilograms** **Communicate** your **reasoning**.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 2250, shift: true, hint: "This is 2250 kg. 1000 kg = 1 tonne, so press ÷10 three times." },
          { kind: "input", fields: [{ label: "a) 2250 kg =", value: 2.25, suffix: "t" }, { label: "b) 9.5 t =", value: 9500, suffix: "kg" }] }
        ],
        answer: "a) 2250 ÷ 1000 = **2.25 t** · b) 9.5 × 1000 = **9500 kg**. 1 tonne = 1000 kg."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Use your knowledge of **multiples** to **partition** and **divide**: **954 ÷ 6**",
        interact: [
          { kind: "cells", cols: 4, w: 90, grid: [["#÷ 6", { v: 600 }, { v: 300 }, { v: 54 }], ["#Quotient", { v: 100 }, { v: 50 }, { v: 9 }]], msg: "Split 954 into multiples of 6: 600, 300 and 54. Then divide each part by 6." },
          { kind: "input", fields: [{ label: "954 ÷ 6 =", value: 159 }] }
        ],
        answer: "954 = **600 + 300 + 54**, all multiples of 6. 600 ÷ 6 = 100, 300 ÷ 6 = 50, 54 ÷ 6 = 9. 100 + 50 + 9 = **159**.",
        explain: "Check: 6 × 159 = 954. Other partitions work too, such as 900 + 54 (150 + 9)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "**Complete** the sentences. The **grid-map reference** is used to ___. The **number plane** is used to ___.",
        img: "u15-maps.png",
        interact: [{ kind: "choose", rows: [
          { t: "The grid-map reference is used to", options: ["locate an area (a square) on a map, using a letter and a number", "locate an exact point, using coordinates (x, y)", "measure distance in kilometres"], a: 0 },
          { t: "The number plane is used to", options: ["locate an area (a square) on a map, using a letter and a number", "locate an exact point, using coordinates (x, y)", "measure distance in kilometres"], a: 1 }] }],
        answer: "The grid-map reference is used to **locate a region (square) on a map**, for example the pond is in A4. The number plane is used to **locate an exact point** where the grid lines cross, using coordinates such as (3, 5)."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "A school orders 43 packs of pencils. Each pack contains 29 pencils. 1247 pencils have been ordered.",
        answer: true,
        interact: [{ kind: "cells", cols: 3, w: 90, grid: [["#×", "#40", "#3"], ["#20", { v: 800 }, { v: 60 }], ["#9", { v: 360 }, { v: 27 }]], msg: "Multiply the row number by the column number in each box." }],
        cubes: { ops: ["×"], solve: [{ t: "Area model", s: "43 × 29: 40 × 20 = 800, 3 × 20 = 60, 40 × 9 = 360, 3 × 9 = 27. 800 + 60 + 360 + 27 = 1247." }, { t: "Compensation", s: "43 × 30 = 1290, then take away one pack of 43: 1290 − 43 = 1247." }] },
        explain: "43 packs × 29 pencils = 1247 pencils, so the statement is true."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use a **bar model** or **empty number line** to solve: **4.21 – 2.43** **Communicate** your **reasoning**.",
        interact: [
          { kind: "jumps", start: 2.43, end: 4.21, steps: [0.07, 0.5, 1, 0.21], hint: "Count up from 2.43 to 4.21: to 2.5, then 3, then 4, then 4.21. Add up the jumps." },
          { kind: "input", fields: [{ label: "4.21 − 2.43 =", value: 1.78 }] }
        ],
        answer: "Count up from 2.43: + 0.07 = 2.5, + 0.5 = 3, + 1 = 4, + 0.21 = 4.21. The jumps add to 0.07 + 0.5 + 1 + 0.21 = **1.78**.",
        explain: "Check: 2.43 + 1.78 = 4.21."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "A truck weighs 6.7 tonnes. It is loaded with 760 kilograms of fruit. It delivers 345 kilograms to the first fruit shop. How much does the truck weigh now?",
        interact: [
          { kind: "jumps", start: 6700, steps: [760, 345], back: true, hint: "6.7 t = 6700 kg. Jump on 760 kg for the fruit, then back 345 kg for the delivery." },
          { kind: "input", fields: [{ label: "The truck now weighs", value: 7115, suffix: "kg" }] }
        ],
        cubes: { ops: ["+", "−"], note: "1 tonne = 1000 kg, so 6.7 t = 6700 kg.", solve: [{ t: "Step by step", s: "6700 + 760 = 7460 kg. 7460 − 345 = 7115 kg." }, { t: "Find the change first", s: "The truck keeps 760 − 345 = 415 kg of fruit. 6700 + 415 = 7115 kg." }] },
        answer: "**7115 kg**, which is **7.115 t**. 6.7 t = 6700 kg; 6700 + 760 = 7460 kg; 7460 − 345 = 7115 kg."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "A factory produces 6240 litres of juice. Each bottle holds 24 litres. How many full bottles can be filled?",
        interact: [
          { kind: "cells", cols: 3, w: 90, grid: [["#÷ 24", { v: 4800 }, { v: 1440 }], ["#Bottles", { v: 200 }, { v: 60 }]], msg: "Split 6240 into 4800 (24 × 200) and 1440 (24 × 60). Then divide each part by 24." },
          { kind: "input", fields: [{ label: "Full bottles", value: 260 }] }
        ],
        cubes: { ops: ["÷"], solve: [{ t: "Partition into multiples of 24", s: "6240 = 4800 + 1440. 4800 ÷ 24 = 200 and 1440 ÷ 24 = 60. 200 + 60 = 260 bottles." }, { t: "Halve both numbers", s: "6240 ÷ 24 = 3120 ÷ 12 = 1560 ÷ 6 = 260 bottles." }] },
        answer: "**260 full bottles**. 6240 ÷ 24 = 260, with nothing left over (24 × 260 = 6240)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Erolyn asks, “What pets do you have?” How can Erolyn **refine** her **question** to be able to **obtain numerical data**?",
        interact: [{ kind: "choose", rows: [{ t: "A better question", options: ["How many pets do you have?", "What is your favourite pet?", "Do you have a pet?", "What colour is your pet?"], a: 0 }] }],
        answer: "Ask **“How many pets do you have?”** The answers are numbers (0, 1, 2, 3…), so the data is **numerical**. “What pets do you have?” gives words (dog, cat, fish), which is categorical data.",
        explain: "Other numerical refinements also work, such as “How many dogs do you have?”"
      }
    ]
  ]
});
