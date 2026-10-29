/*
  Stage 3 Year A, Unit 18 — Review of learning (Term 4, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "A", term: 4, ls: 3, unit: 18,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year A Unit 18 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "Which letter shows the solution to 3 − 7 = ? On the number line, A is at −5, B is at −4, C is at −2 and D is at 0.",
        options: ["A (−5)", "B (−4)", "C (−2)", "D (0)"],
        answer: 1,
        explain: "Start at 3 and jump back 7: 3 back to 0 is 3 jumps, then 4 more jumps lands on −4. 3 − 7 = −4.",
        interact: [{ kind: "jumps", start: 3, steps: [1], back: true, min: -5, max: 5, hint: "Start at 3. Jump back 7 ones. Where do you land?" }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Nat tosses a coin. Which word describes the **probability** of it landing on heads?",
        interact: [
          { kind: "marker", min: 0, max: 1, divs: 2, majorEvery: 1, labels: [0, 0.5, 1], label: "Heads", hint: "0 is impossible, 1 is certain. Slide the pin to show the chance of heads." },
          { kind: "choose", rows: [{ t: "Heads is…", options: ["Impossible", "Equally likely", "Certain"], a: 1 }] }
        ],
        answer: "**Equally likely**. A coin has 2 sides, so heads and tails each have a chance of [1/2]. It sits in the middle of the line, halfway between impossible (0) and certain (1)."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Halving can be used to solve 6 × 500 by halving 6 (= 3) and doubling 500 (= 1000), then 3 × 1000 = 3000. Record how to use **halving** to solve 8 × 5000.",
        interact: [{ kind: "input", fields: [{ label: "Half of 8 =", value: 4 }, { label: "Double 5000 =", value: 10000 }, { label: "8 × 5000 =", value: 40000 }] }],
        answer: "Halve 8 to get **4** and double 5000 to get **10 000**. Then 4 × 10 000 = **40 000**. (You could keep going: 2 × 20 000 or 1 × 40 000.)"
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Which fraction is closest to **one-half**? Use the number line to show your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 2, tol: 0.04, items: [["[1/5]", 0.2], ["[1/8]", 0.125], ["[1/4]", 0.25], ["[1/3]", 1 / 3]] },
          { kind: "choose", rows: [{ t: "Closest to [1/2]", options: ["[1/5]", "[1/8]", "[1/4]", "[1/3]"], a: 3 }] }
        ],
        answer: "**[1/3]**. Unit fractions get smaller as the denominator gets bigger, so [1/3] is the biggest card and sits closest to [1/2]. [1/8] is furthest away.",
        explain: "The slide's fraction cards are cut off; the images show [1/5], [1/8], [1/4] and [1/3]."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Record the size of the **angle** shown on the **protractor**.",
        img: "u18-protractor.png",
        interact: [
          { kind: "angle", degrees: true, names: true, start: 60 },
          { kind: "input", fields: [{ label: "Angle", value: 130, suffix: "°" }] }
        ],
        answer: "**130°**. One arm sits on 0 on the left, so read the outer scale that starts at 0 on that side. The angle is wider than a right angle (obtuse), so it is 130°, not 50°.",
        explain: "Read from the slide: the arms run along the left 0 line and through 130 on the outer scale (50 on the inner scale)."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "Faiyaz calculated that 3 − 5 = −2.",
        answer: true,
        explain: "Start at 3 and jump back 5: 2, 1, 0, −1, −2. So 3 − 5 = −2.",
        interact: [{ kind: "jumps", start: 3, steps: [1], back: true, min: -5, max: 5, hint: "Start at 3 and jump back 5 ones." }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Write the **definition** of the word **probability**.",
        interact: [
          { kind: "marker", min: 0, max: 1, divs: 2, majorEvery: 1, labels: [0, 0.5, 1], label: "Chance", hint: "Probability runs from 0 (impossible) to 1 (certain)." },
          { kind: "select", hint: "Tap every statement that describes probability.", items: [
            ["How likely it is that something will happen", true],
            ["A number from 0 (impossible) to 1 (certain)", true],
            ["It can be written as a fraction, decimal or percentage", true],
            ["The number of times something has already happened", false],
            ["Always a whole number", false]] }
        ],
        answer: "Probability is **how likely it is that an event will happen**. It is measured from 0 (impossible) to 1 (certain), and can be written as a fraction, decimal or percentage."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record how to use **halving** to find the product of 8 × 500.",
        interact: [{ kind: "input", fields: [{ label: "Half of 8 =", value: 4 }, { label: "Double 500 =", value: 1000 }, { label: "8 × 500 =", value: 4000 }] }],
        answer: "Halve 8 to get **4** and double 500 to get **1000**. Then 4 × 1000 = **4000**."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Which **fraction card** doesn't belong? The cards are: a grid of 10 squares with one square left unshaded (marked ?), the words 1-eighth, the fraction [1/8], and a circle cut into 8 equal parts with 1 part shaded. Explain your reasoning.",
        interact: [
          { kind: "shade", parts: 10, pre: [0, 1, 3, 4, 5, 6, 7, 8, 9], hint: "The grid card: 10 equal parts." },
          { kind: "shade", parts: 8, pre: [0], hint: "The circle card: 8 equal parts." },
          { kind: "choose", rows: [{ t: "Doesn't belong", options: ["The grid", "1-eighth", "[1/8]", "The circle"], a: 0 }] }
        ],
        answer: "**The grid**. The words, the fraction and the circle all show **one-eighth**. The grid has 10 equal parts, so it shows tenths ([1/10] unshaded, [9/10] shaded), not eighths.",
        explain: "The grid card on the slide has 10 parts with one blank ? square; whichever part you read, it is in tenths, so it is the odd one out."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Stormi measured one side of the regular octagon and found its length was 6 cm. What is the perimeter of the shape?",
        interact: [
          { kind: "sides", view: [320, 260], fill: "#1A6BFF", label: "Regular octagon",
            poly: [[252.4, 153.3], [198.3, 207.4], [121.7, 207.4], [67.6, 153.3], [67.6, 76.7], [121.7, 22.6], [198.3, 22.6], [252.4, 76.7]],
            dims: [{ from: [121.7, 225], to: [198.3, 225] }],
            labels: [{ x: 160, y: 252, t: "6 cm" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 48, suffix: "cm" }] }
        ],
        cubes: { ops: ["×"], also: ["+"], note: "Regular means every side is the same length.", solve: [{ t: "Count the sides", s: "An octagon has 8 sides, all 6 cm. 8 × 6 = 48 cm." }, { t: "Repeated addition", s: "6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 = 48 cm." }] },
        answer: "**48 cm**. A regular octagon has 8 equal sides: 8 × 6 cm = 48 cm."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "Frankie has $5 but wants to buy a $12 book. Which letter shows the amount she borrows?",
        options: ["$5", "$6", "$7", "$8"],
        answer: 2,
        explain: "5 − 12 = −7. She is $7 short, so she borrows $7. Check: $5 + $7 = $12.",
        interact: [{ kind: "jumps", start: 5, steps: [1], back: true, min: -9, max: 9, hint: "Start at 5 and jump back 12 to spend $12. How far below 0 do you land?" }],
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Below zero", s: "5 − 12 = −7. She is $7 below zero, so she borrows $7." }, { t: "Count on", s: "From $5 up to $12 is 7 jumps, so she needs $7 more." }] }
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "A 10-sided dice has the numbers 1 to 10. How many **different numbers** can you roll? What is the **probability** of rolling an 8? What is the probability of rolling a 2?",
        interact: [
          { kind: "shade", parts: 10, hint: "Each part is one face of the dice. Shade the face with 8." },
          { kind: "input", fields: [{ label: "Different numbers", value: 10 }, { label: "Probability of 8", value: 0.1, placeholder: "a/b" }, { label: "Probability of 2", value: 0.1, placeholder: "a/b" }] }
        ],
        answer: "**10** different numbers. Each number is 1 face out of 10, so the probability of an 8 is **[1/10]** and the probability of a 2 is also **[1/10]** (0.1 or 10%)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Both shapes have the same **area** in **square centimetres**. The first shape is a grid of 1 cm squares. What could be the **length** and **width** of the second shape?",
        interact: [
          { kind: "areagrid", size: 48, cells: ["111111", "111111", "111111", "111111"] },
          { kind: "pair", labels: ["Length", "Width"], unit: "cm", rule: "area", target: 24, exclude: [[6, 4]] }
        ],
        answer: "The first shape is 6 × 4 = **24 cm²**. The second shape could be **8 cm × 3 cm** (it looks long and thin), or 12 cm × 2 cm, or 24 cm × 1 cm.",
        explain: "The slide gives no lengths, so each grid square is taken as 1 cm². Any rectangle with area 24 cm² other than 6 × 4 is accepted; the blue rectangle's shape suggests 8 cm × 3 cm."
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals and percentages",
        prompt: "Record the missing **equivalent** benchmark fractions, decimals and percentages.",
        interact: [{ kind: "cells", cols: 3, w: 120, free: true, grid: [
          ["#Fraction", "#Decimal", "#Percentage"],
          [{ v: 0.25 }, "0.25", { v: 25 }],
          [{ v: 0.5 }, { v: 0.5 }, "50%"],
          [{ v: 0.75 }, "0.75", { v: 75 }],
          [{ v: 1 }, { v: 1 }, "100%"]], msg: "Write fractions like 1/4 and percentages like 25%." }],
        answer: "[1/4] = 0.25 = **25%** · **[1/2]** = **0.5** = 50% · **[3/4]** = 0.75 = **75%** · **[1/1]** (one whole) = **1** = 100%"
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D Shapes",
        prompt: "Rory said this is an **isosceles triangle** because it has 2 equal sides and 2 equal angles. Is he correct? Draw and label a diagram to show your reasoning.",
        interact: [
          { kind: "corners", view: [340, 150], deg: true, r: 26, q: 34, shapes: [{ p: [[20, 75], [320, 15], [320, 135]], fill: "#D7143C" }], hint: "Tap a corner to test it, tap again to measure it." },
          { kind: "choose", rows: [{ t: "Is Rory correct?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes**. The two long sides are the same length, and the two angles at the short side are equal. Both are properties of an isosceles triangle.",
        explain: "The slide triangle has two equal long sides meeting at a sharp point; it is redrawn with the same shape."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "The solution to 9 − 11 is an **even negative integer**.",
        answer: true,
        explain: "9 − 11 = −2. −2 is below zero (negative), a whole number (integer) and in the 2 times table (even).",
        interact: [{ kind: "jumps", start: 9, steps: [1], back: true, min: -11, max: 11, hint: "Start at 9 and jump back 11 ones." }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Jen randomly gets a handball from the bag. The bag has 1 blue handball and 3 pink handballs. Which **fraction** describes the probability of her getting the blue handball? Record your reasoning.",
        interact: [
          { kind: "shade", parts: 4, pre: [0], hint: "4 handballs: 1 blue, 3 pink." },
          { kind: "numberline", min: 0, max: 1, ticks: 4, tol: 0.06, items: [["Blue", 0.25]] },
          { kind: "input", fields: [{ label: "Probability of blue", value: 0.25, placeholder: "a/b" }] }
        ],
        answer: "**[1/4]**. There are 4 handballs and 1 is blue, so 1 chance out of 4."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "**Partition** the composite shape to find the **area** in **square metres**. Each square is 1 square metre. Record your reasoning.",
        interact: [
          { kind: "areagrid", size: 48, cells: ["00111100", "00111100", "11111111", "11111111"] },
          { kind: "input", fields: [{ label: "Top rectangle (4 × 2)", value: 8, suffix: "m²" }, { label: "Bottom rectangle (8 × 2)", value: 16, suffix: "m²" }, { label: "Total area", value: 24, suffix: "m²" }] }
        ],
        answer: "Split it into two rectangles: top 4 × 2 = 8 m², bottom 8 × 2 = 16 m². Total **24 m²**.",
        explain: "The slide has no scale, so each square is taken as 1 m²."
      },
      {
        type: "sr", focus: "Represents numbers B: Decimals and percentages",
        prompt: "Braxton knows that a 10% discount off the price of a game for $120 is $12. How much would he save with discounts of 20%, 25% and 40%?",
        interact: [
          { kind: "shade", parts: 10, pct: true, each: 12, money: true, hint: "Each part is 10% of $120 = $12. Shade the discount." },
          { kind: "input", fields: [{ label: "20% saves", prefix: "$", value: 24 }, { label: "25% saves", prefix: "$", value: 30 }, { label: "40% saves", prefix: "$", value: 48 }] }
        ],
        cubes: { ops: ["×", "÷"], also: ["+"], solve: [{ t: "Build from 10%", s: "10% = $12. 20% = 2 × $12 = $24. 40% = 4 × $12 = $48. 25% = 20% + 5% = $24 + $6 = $30." }, { t: "Use fractions", s: "25% = [1/4], and $120 ÷ 4 = $30. 20% = [1/5], and $120 ÷ 5 = $24." }] },
        answer: "20%: **$24** · 25%: **$30** · 40%: **$48**"
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record 2 other ways of communicating the **time**: 1800 hours. Be prepared to share your responses.",
        interact: [
          { kind: "clock", time: "6:00", h24: true },
          { kind: "select", hint: "Tap every way of saying 1800 hours.", items: [["6:00 pm", true], ["6 o'clock in the evening", true], ["18:00", true], ["6:00 am", false], ["8:00 pm", false]] }
        ],
        answer: "**6:00 pm**, **6 o'clock in the evening** or **18:00**. 1800 hours is 18 − 12 = 6 hours after midday."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Represents numbers A: Decimals and percentages",
        prompt: "A number has 3 ones, 5 tenths, 4 hundredths and 9 thousandths. Which letter matches this number?",
        options: ["9453", "9.453", "53.49", "3.549"],
        answer: 3,
        explain: "Ones . tenths hundredths thousandths: 3 . 5 4 9 = 3.549.",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 0, hint: "Build 3 ones, 5 tenths, 4 hundredths and 9 thousandths." }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Jordie needs to roll a '6' to win a boardgame. Record the **probability** of him rolling a '6' as a **fraction**.",
        interact: [
          { kind: "shade", parts: 6, hint: "Each part is one face of the dice. Shade the 6." },
          { kind: "input", fields: [{ label: "Probability of a 6", value: 1 / 6, placeholder: "a/b" }] }
        ],
        answer: "**[1/6]**. A dice has 6 faces and only one of them is a 6."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "A soccer field has an area of 486 square metres. One side (the width) measures 6 metres. What is the length of the soccer field?",
        interact: [
          { kind: "bar", hint: "The field is 6 rows, each 1 metre wide. Tap a ? to see how many square metres are in one row.", whole: { v: 486, l: "486 m²", n: "whole field" }, parts: [{ v: 81, l: "81", hide: true }, { v: 81, l: "81", hide: true }, { v: 81, l: "81", hide: true }, { v: 81, l: "81", hide: true }, { v: 81, l: "81", hide: true }, { v: 81, l: "81", hide: true }] },
          { kind: "input", fields: [{ label: "Length", value: 81, suffix: "m" }] }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide", s: "Area = length × width, so length = 486 ÷ 6. 480 ÷ 6 = 80 and 6 ÷ 6 = 1, so 81 m." }, { t: "Think multiplication", s: "6 × ? = 486. 6 × 80 = 480, 6 more is 6 × 1. 6 × 81 = 486, so 81 m." }] },
        answer: "**81 metres**. 486 ÷ 6 = 81. Check: 81 × 6 = 486 m²."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Two pastry chefs have each opened a bag of flour. One bag is five-eighths ([5/8]) full and the other is six-eighths ([6/8]) full. How much flour do the chefs have altogether? Use a bar model to represent your thinking.",
        interact: [
          { kind: "bar", whole: { v: 11, l: "[11/8] = 1[3/8] bags", n: "altogether", hide: true }, parts: [{ v: 5, l: "[5/8]", n: "bag 1" }, { v: 6, l: "[6/8]", n: "bag 2" }] },
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4], hint: "Bag 1: [5/8] full." },
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5], hint: "Bag 2: [6/8] full." },
          { kind: "input", fields: [{ label: "Altogether (bags)", value: 11 / 8, placeholder: "a/b or 1 a/b" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Add the eighths", s: "5 eighths + 6 eighths = 11 eighths = [11/8]." }, { t: "Make a whole", s: "Bag 1 needs [3/8] more to be full. Take [3/8] from bag 2 to fill it: 1 full bag, and [3/8] is left in bag 2. 1[3/8] bags." }] },
        answer: "**[11/8]** or **1[3/8] bags** of flour. 5 eighths + 6 eighths = 11 eighths. 8 eighths make a whole bag, with 3 eighths left over."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Is **3 kg 250 g** the same as **3.25 kg**? Record your reasoning.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h", "th"], start: 3.25, hint: "Kilograms: 1 g is one thousandth of a kilogram, so 250 g is 0.250 kg." },
          { kind: "choose", rows: [{ t: "3 kg 250 g = 3.25 kg?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes**. 1000 g = 1 kg, so 250 g = [250/1000] kg = 0.250 kg = 0.25 kg. 3 kg + 0.25 kg = 3.25 kg."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Represents numbers A",
        prompt: "One hundredth and 7 thousandths is equivalent to 0.017",
        answer: true,
        explain: "1 hundredth = 0.01 and 7 thousandths = 0.007. 0.01 + 0.007 = 0.017 (0 tenths, 1 hundredth, 7 thousandths).",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 0, hint: "Build 1 hundredth and 7 thousandths. Read the number." }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Which **decade** on the timeline had more than one important event occur?",
        img: "u18-timeline.png",
        interact: [{ kind: "select", hint: "Tap every decade with more than one event.", items: [["1930s", false], ["1940s", true], ["1960s", false], ["1970s", false], ["2010s", false], ["2020s", true]] }],
        answer: "The **1940s** (first plastic moulding machine and the first binding brick) and the **2020s** (LEGO Braille bricks and 90 years of play).",
        explain: "The slide asks for one decade, but two decades on the timeline have two events each, so both are the answer. The plant-based bricks sit just before 2020 (2010s)."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "This is the **top view** of a **prism** made of cubic centimetres (cm³). The prism has **5 layers**. What is the **volume** of the prism?",
        interact: [
          { kind: "areagrid", size: 56, cells: ["1111", "1111", "1111"] },
          { kind: "input", fields: [{ label: "Cubes in one layer", value: 12 }, { label: "Volume", value: 60, suffix: "cm³" }] }
        ],
        answer: "One layer has 4 × 3 = 12 cubes. 5 layers: 12 × 5 = **60 cm³**."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Tash had fully charged her laptop. In the morning, she used 30% of the battery charge. She used one-half ([1/2]) of the battery's charge after lunch. On the way home she used 0.15 of the laptop's power. How much charge was left? Use a bar model to represent your reasoning.",
        interact: [
          { kind: "bar", whole: { v: 100, l: "100%", n: "full charge" }, parts: [{ v: 30, l: "30%", n: "morning" }, { v: 50, l: "[1/2] = 50%", n: "after lunch" }, { v: 15, l: "0.15 = 15%", n: "home" }, { v: 5, l: "5%", n: "left", hide: true }] },
          { kind: "shade", parts: 20, pct: true, hint: "Each part is 5% of the battery. Shade what she used." },
          { kind: "input", fields: [{ label: "Charge left", value: 5, suffix: "%" }] }
        ],
        cubes: { ops: ["+", "−"], note: "Change everything to percentages first: [1/2] = 50%, 0.15 = 15%.", solve: [{ t: "Add what she used", s: "30% + 50% + 15% = 95%. 100% − 95% = 5% left." }, { t: "Subtract one at a time", s: "100% − 30% = 70%. 70% − 50% = 20%. 20% − 15% = 5% left." }] },
        answer: "**5%** (0.05 or [1/20]) was left. She used 30% + 50% + 15% = 95%."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D Objects",
        prompt: "Record the name of this **3D object**. Which of the object's **properties** did you use to support your reasoning?",
        img: "u18-hexprism.png",
        interact: [
          { kind: "choose", rows: [{ t: "Name", options: ["Hexagonal prism", "Hexagonal pyramid", "Pentagonal prism", "Rectangular prism"], a: 0 }] },
          { kind: "select", hint: "Tap every property this object has.", items: [["2 hexagon faces that are the same (top and base)", true], ["6 rectangular side faces", true], ["8 faces, 18 edges and 12 vertices", true], ["It comes to a point (apex)", false], ["5 rectangular side faces", false]] }
        ],
        answer: "A **hexagonal prism**. It has 2 matching hexagon faces joined by 6 rectangles: 8 faces, 18 edges and 12 vertices. It has no apex, so it isn't a pyramid."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Represents numbers A: Decimals and percentages",
        prompt: "Which sequence correctly shows the decimal numbers 3.180, 1.083, 0.183, 8.013 in **ascending order**?",
        options: ["1.083, 0.183, 3.180, 8.013", "0.183, 1.083, 8.013, 3.180", "0.183, 1.083, 3.180, 8.013", "3.180, 1.083, 0.183, 8.013"],
        answer: 2,
        explain: "Ascending means smallest to largest. Compare the ones first: 0, 1, 3, 8. So 0.183, 1.083, 3.180, 8.013. The slide had the same sequence for B and C and no correct option, so C now shows the correct order.",
        interact: [{ kind: "numberline", min: 0, max: 9, items: [["3.180", 3.18], ["1.083", 1.083], ["0.183", 0.183], ["8.013", 8.013]] }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Piper is collecting **categorical data** about favourite foods. She is planning to use this survey question: \"How many servings of fruit do you eat on a school day?\" Would this question provide categorical data about favourite foods? Explain your reasoning.",
        interact: [
          { kind: "choose", rows: [{ t: "Categorical data about favourite foods?", options: ["Yes", "No"], a: 1 }] },
          { kind: "select", hint: "Tap every question that would collect categorical data about favourite foods.", items: [["What is your favourite food?", true], ["Which of these foods do you like best: pizza, pasta, sushi or tacos?", true], ["How many servings of fruit do you eat on a school day?", false], ["How many grams of food do you eat at lunch?", false]] }
        ],
        answer: "**No**. The answers would be numbers (0, 1, 2, 3 servings), which is numerical data, and it asks about fruit, not favourite foods. A better question: What is your favourite food?"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Calculate and record the **volume** of the **rectangular prism** in **cubic centimetres** (cm³). The prism is 2 cubes wide, 4 cubes long and 3 cubes high.",
        interact: [
          { kind: "areagrid", size: 56, cells: ["1111", "1111"] },
          { kind: "input", fields: [{ label: "Cubes in one layer", value: 8 }, { label: "Layers", value: 3 }, { label: "Volume", value: 24, suffix: "cm³" }] }
        ],
        answer: "One layer is 4 × 2 = 8 cubes. 3 layers: 8 × 3 = **24 cm³**.",
        explain: "Counted from the slide's picture: the top shows 2 × 4 cubes and the prism is 3 cubes tall."
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "A gardener has 2 packets of 60 seeds that have been opened. One packet is seven-tenths ([7/10]) full. The second packet is four-tenths ([4/10]) empty. How many seeds does the gardener have altogether? Use a bar model to support your reasoning.",
        interact: [
          { kind: "shade", parts: 10, pct: true, each: 6, pre: [0, 1, 2, 3, 4, 5, 6], hint: "Packet 1: each tenth is 6 seeds." },
          { kind: "shade", parts: 10, pct: true, each: 6, pre: [0, 1, 2, 3, 4, 5], hint: "Packet 2: [4/10] empty, so [6/10] full." },
          { kind: "bar", whole: { v: 78, l: "78 seeds", n: "altogether", hide: true }, parts: [{ v: 42, l: "42", n: "packet 1: seven-tenths" }, { v: 36, l: "36", n: "packet 2: six-tenths" }] },
          { kind: "input", fields: [{ label: "Seeds altogether", value: 78 }] }
        ],
        cubes: { ops: ["÷", "×", "+"], also: ["−"], note: "Four-tenths empty means six-tenths full.", solve: [{ t: "Find each packet", s: "[1/10] of 60 = 6. Packet 1: 7 × 6 = 42. Packet 2: 10 − 4 = 6 tenths full, 6 × 6 = 36. 42 + 36 = 78 seeds." }, { t: "Add the tenths first", s: "[7/10] + [6/10] = [13/10] of a packet. 13 × 6 = 78 seeds." }] },
        answer: "**78 seeds**. Packet 1: [7/10] of 60 = 42. Packet 2 is [4/10] empty, so [6/10] full: 36. 42 + 36 = 78."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "**Estimate** the length of a swimming pool. Explain your reasoning.",
        interact: [{ kind: "choose", rows: [{ t: "A good estimate", options: ["2.5 m", "25 m", "250 m", "2.5 km"], a: 1 }] }],
        answer: "About **25 m** (or 50 m for an Olympic pool). It takes many strokes to swim one length, and a classroom is about 8–10 m long, so a pool is about 3 classrooms long.",
        explain: "Estimates vary; 25 m (a school or local pool) is the best of these options. 50 m Olympic pools are also correct in class discussion."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Represents numbers A: Decimals and percentages",
        prompt: "**One thousandth** is larger than **one hundredth**.",
        answer: false,
        explain: "One hundredth = 0.01 = 10 thousandths. One thousandth = 0.001, which is 10 times smaller.",
        interact: [{ kind: "pv", cols: ["O", "t", "h", "th"], start: 0.01, hint: "This is one hundredth. Trade it for thousandths: how many do you get?" }]
      },
      {
        type: "sr", focus: "Data A",
        prompt: "This data display compares the school's high jump records from 2015 to 2025. It could be shown as a column graph, a line graph or a table. Which would be **least helpful** for Stage 2 students to see the **change over time**? Explain your reasoning.",
        interact: [
          { kind: "bargraph", line: true, max: 2, step: 0.5, ylabel: "Height jumped (m)", xlabel: "Year", label: "High jump records 2015 to 2025",
            series: [{ l: "Height", c: "#0B2A6B" }],
            groups: [{ l: "2015", v: [1.21] }, { l: "2016", v: [1.24] }, { l: "2017", v: [1.24] }, { l: "2018", v: [1.26] }, { l: "2019", v: [1.29] }, { l: "2020", v: [1.32] }, { l: "2021", v: [1.37] }, { l: "2022", v: [1.37] }, { l: "2023", v: [1.37] }, { l: "2024", v: [1.39] }, { l: "2025", v: [1.41] }] },
          { kind: "choose", rows: [{ t: "Least helpful", options: ["Column graph", "Line graph", "Table"], a: 2 }] }
        ],
        answer: "The **table**. You have to read and compare every number to see the change. The line graph shows the change over time best: the line climbs, and flat parts (2021–2023) show no change."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Use the information in the table to find the **volume** of each **rectangular prism** in **cubic metres** (m³). The base is 9 m by 6 m.",
        interact: [{ kind: "cells", cols: 4, w: 110, grid: [
          ["#Base", "#5 layers", "#10 layers", "#100 layers"],
          ["9 m × 6 m", { v: 270 }, { v: 540 }, { v: 5400 }]], msg: "Base = 9 × 6 = 54 m². Multiply by the number of layers." }],
        answer: "Base: 9 × 6 = 54 m². 5 layers: **270 m³** · 10 layers: **540 m³** · 100 layers: **5400 m³**."
      },
      {
        type: "sr", focus: "Representing quantity fractions B",
        prompt: "Chris had a chocolate bar with 18 blocks. He gave 50% to Marcus, one-sixth ([1/6]) to Sonja and he ate the rest. How many blocks did he eat?",
        interact: [
          { kind: "areagrid", size: 52, cells: ["111111", "111111", "111111"] },
          { kind: "bar", whole: { v: 18, l: "18 blocks", n: "whole bar" }, parts: [{ v: 9, l: "9", n: "Marcus 50%" }, { v: 3, l: "3", n: "Sonja one-sixth" }, { v: 6, l: "6", n: "Chris", hide: true }] },
          { kind: "input", fields: [{ label: "Blocks Chris ate", value: 6 }] }
        ],
        cubes: { ops: ["÷", "−"], solve: [{ t: "Find each share", s: "50% of 18 = 9. [1/6] of 18 = 3. 18 − 9 − 3 = 6 blocks." }, { t: "Use fractions", s: "50% = [3/6]. [3/6] + [1/6] = [4/6], so Chris ate [2/6] = [1/3] of 18 = 6 blocks." }] },
        answer: "**6 blocks**. Marcus: 50% of 18 = 9. Sonja: [1/6] of 18 = 3. 18 − 9 − 3 = 6.",
        explain: "The slide's bar is a 6 × 3 grid, so it has 18 blocks."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "It's morning and an **analog clock** has the minute hand pointing to the 2, with the hour hand pointing to just after the 10. What is the time? Record your answer in **24-hour time**.",
        interact: [
          { kind: "clock", time: "10:10", h24: true, drag: true },
          { kind: "input", fields: [{ label: "24-hour time", accept: ["1010", "10:10", "1010 hours"], placeholder: "hhmm" }] }
        ],
        answer: "**1010** (10:10 am). The minute hand on 2 is 10 minutes past, and the hour hand just after 10 means 10 o'clock has passed. It's morning, so it stays 10."
      }
    ]
  ]
});
