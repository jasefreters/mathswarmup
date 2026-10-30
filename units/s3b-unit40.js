/*
  Stage 3 Year B, Unit 40 — Review of learning (Term 4, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 4, ls: 5, unit: 40,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 40 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1 (Week 9 Monday)
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "The price tag says $1099.99. Estimate 50% of this price.",
        img: "u40-tag.png",
        options: ["$50", "$250", "$100", "$500"],
        answer: 3,
        explain: "$1099.99 is about $1100. 50% is half, and half of $1100 is $550. $500 is the closest option.",
        interact: [{ kind: "shade", parts: 2, pct: true, each: 550, money: true, hint: "The strip is the whole price, about $1100. Shade 50%." }]
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Place the integers 15, −17, 11, −3 and 4 along the number line. Communicate your reasoning.",
        interact: [{ kind: "numberline", min: -20, max: 20, labelStep: 10, ticks: 1, tol: 1.2, items: [["15", 15], ["−17", -17], ["11", 11], ["−3", -3], ["4", 4]] }],
        answer: "From left to right: **−17, −3, 4, 11, 15**. Negative numbers sit to the left of 0. −17 is 17 steps left of 0, so it is close to −20. Positive numbers sit to the right of 0."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Feed the animals runs from 11:40 am to 1:10 pm. A student jumped 11:40 am → 12:00 pm → 1:00 pm → 1:10 pm on a number line. Does the number line accurately show calculating the elapsed time? Explain your answer. What was the total elapsed time?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 700, end: 790, steps: [10, 20, 60], hint: "Start at 11:40 am. Jump to 12:00 pm, then to 1:00 pm, then to 1:10 pm." },
          { kind: "choose", rows: [{ t: "Is the number line accurate?", options: ["Yes", "No"], a: 0 }] },
          { kind: "input", fields: [{ label: "Total elapsed time", value: 1, suffix: "h" }, { label: "", value: 30, suffix: "min" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Add the jumps", s: "20 min + 1 h + 10 min = 1 h 30 min." }, { t: "Count to friendly times", s: "11:40 am → 1:10 pm: 11:40 → 12:40 → 1:10 is 1 h + 30 min." }] },
        answer: "**Yes**. The jumps are 20 min (11:40 am to 12:00 pm), 1 h (12:00 pm to 1:00 pm) and 10 min (1:00 pm to 1:10 pm). Total: **1 h 30 min** (90 minutes)."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "On each spin, which colours have a [2/8] chance of occurring? Communicate your reasoning.",
        img: "u40-spinner8.png",
        interact: [{ kind: "select", hint: "The spinner has 8 equal parts. Tap every colour that covers 2 of them.", items: [["Yellow", true], ["Blue", false], ["Red", true], ["Purple", false], ["Green", true]] }],
        answer: "**Yellow, red and green**. The spinner has 8 equal parts. Yellow, red and green each cover 2 parts, so each has a [2/8] chance. Blue and purple each cover 1 part, a [1/8] chance."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Represent 2 hours 15 minutes as a fraction and a decimal.",
        interact: [
          { kind: "shade", parts: 4, hint: "This strip is 1 hour. Each part is 15 minutes. Shade 15 minutes." },
          { kind: "input", fields: [{ label: "As a fraction (hours)", accept: ["2 1/4", "21/4", "2¼", "9/4"], placeholder: "e.g. 2 1/4" }, { label: "As a decimal (hours)", value: 2.25 }] }
        ],
        answer: "**2[1/4] hours** and **2.25 hours**. 15 minutes is a quarter of an hour (15 ÷ 60 = [1/4] = 0.25).",
        explain: "Type the mixed number with a space, like 2 1/4. [9/4] is also accepted."
      }
    ],
    // Review 2 (Week 9 Tuesday)
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "The total shop is $150. ‘Take $10 off your total shop’ saves you more than ‘25% off your total shop’.",
        img: "u40-receipt.png",
        answer: false,
        explain: "25% of $150 is a quarter: $150 ÷ 4 = $37.50. $37.50 off saves more than $10 off.",
        interact: [{ kind: "shade", parts: 4, pct: true, each: 37.5, money: true, hint: "The strip is the $150 shop. Shade 25% to see the saving." }],
        cubes: { ops: ["÷", "−"], note: "25% is a quarter.", solve: [{ t: "Work out 25%", s: "$150 ÷ 4 = $37.50. $37.50 is more than $10." }, { t: "Compare the prices", s: "$150 − $10 = $140, but $150 − $37.50 = $112.50. The 25% deal costs less." }] },
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Phil rolled a die and moved from the Café to Deliveries. Record this movement on a number line. What number did he roll?",
        img: "u40-hotel.png",
        interact: [
          { kind: "jumps", start: 1, end: -5, steps: [1], back: true, min: -6, max: 6, hint: "The Café is floor 1. Deliveries is floor −5. Jump back 1 floor at a time." },
          { kind: "input", fields: [{ label: "He rolled a", value: 6 }] }
        ],
        answer: "He rolled a **6**. From the Café (1) down to Deliveries (−5) is 1 step to 0, then 5 more steps to −5: 1 + 5 = 6.",
        cubes: { ops: ["−"], note: "Floors below the Lobby (0) are negative.", solve: [{ t: "Count the jumps", s: "1 → 0 → −1 → −2 → −3 → −4 → −5 is 6 jumps." }, { t: "Find the difference", s: "1 − (−5) = 1 + 5 = 6." }] }
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "Shows and events: list the events that are 30 mins in duration.",
        interact: [{ kind: "select", hint: "Tap every event that lasts exactly 30 minutes.", items: [
          ["Meet and greet: 0900–0930", true], ["Animal show: 1030–1100", true], ["Dance spectacular: 1045–1145", false], ["Feed the animals: 1145–1300", false],
          ["Magic show: 1230–1330", false], ["Lunch with characters: 1315–1415", false], ["Character parade: 1445–1530", false], ["Demolition derby: 1530–1630", false],
          ["Dare devil acrobatics: 1600–1630", true], ["Band: 1715–1745", true], ["Cooking demonstration: 1745–1900", false], ["Horse riding: 1800–1900", false],
          ["Miraculous motorbikes: 1830–1915", false], ["Laser show: 2015–2045", true], ["Fireworks display: 2045–2115", true]] }],
        answer: "**Meet and greet, Animal show, Dare devil acrobatics, Band, Laser show and Fireworks display**. Each runs for exactly 30 minutes. Fireworks crosses the hour: 2045 → 2100 is 15 min, then 2100 → 2115 is 15 min.",
        explain: "The event times are typed from the phone screens on the slide. The all-day events (show bag pavilion and rides) last much longer than 30 minutes."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Express the probability of the arrow landing on each colour as a fraction.",
        img: "u40-spinner6.png",
        interact: [{ kind: "input", fields: [{ label: "Green", value: 0.5, placeholder: "?/?" }, { label: "Yellow", value: 1 / 6, placeholder: "?/?" }, { label: "Red", value: 1 / 6, placeholder: "?/?" }, { label: "Blue", value: 1 / 6, placeholder: "?/?" }] }],
        answer: "Green **[1/2]** (or [3/6]) · Yellow **[1/6]** · Red **[1/6]** · Blue **[1/6]**. Green is half the circle. The other half is split into 3 equal parts, and half of a third is a sixth.",
        explain: "Any equivalent fraction is accepted, like [3/6] for green."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "Find the area of the composite shape. The sides are 8 cm (top), 8 cm, 10 cm, 6 cm, 18 cm (bottom) and 14 cm (left).",
        interact: [
          { kind: "sketch", bgimg: "img/s3/u40-lshape.png" },
          { kind: "expr", count: 2, target: 172, placeholder: "e.g. 8 x 14 + 10 x 6", sample: ["8 x 14 + 10 x 6", "8 x 8 + 18 x 6"] }
        ],
        answer: "**172 cm²**. Cut it upright: 8 × 14 = 112 and 10 × 6 = 60, 112 + 60 = 172. Or cut it across: 8 × 8 = 64 and 18 × 6 = 108, 64 + 108 = 172. (Or 18 × 14 − 10 × 8 = 252 − 80 = 172.)",
        explain: "Draw a line on the shape to split it into two rectangles, then write the two number sentences."
      }
    ],
    // Review 3 (Week 9 Wednesday)
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "The scooter was $975 and is now 25% off. Estimate the price of this scooter.",
        img: "u40-scooter.png",
        options: ["$250", "$800", "$750", "$500"],
        answer: 2,
        explain: "$975 is about $1000. 25% of $1000 is $250, so the price is about $1000 − $250 = $750. (Exactly: $975 − $243.75 = $731.25.)",
        interact: [{ kind: "shade", parts: 4, pct: true, each: 250, money: true, hint: "The strip is about $1000. Each quarter is 25%. Shade what you still pay." }],
        cubes: { ops: ["÷", "−"], note: "25% is a quarter.", solve: [{ t: "Round, then take a quarter", s: "$975 ≈ $1000. $1000 ÷ 4 = $250. $1000 − $250 = $750." }, { t: "Keep 75%", s: "75% is three quarters: 3 × $250 = $750." }] },
      },
      {
        type: "sr", focus: "Represents numbers A",
        prompt: "Which decimal is larger? 7.5 or 7.361. Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 7, max: 8, labelStep: 0.5, ticks: 10, tol: 0.04, items: [["7.5", 7.5], ["7.361", 7.361]] },
          { kind: "choose", rows: [{ t: "The larger decimal is", options: ["7.5", "7.361"], a: 0 }] }
        ],
        answer: "**7.5** is larger. Both have 7 ones. Compare the tenths: 5 tenths is more than 3 tenths. More digits does not make a decimal larger (7.5 = 7.500)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Draw a diagram to show how to translate, rotate and reflect this triangle.",
        interact: [{ kind: "sketch", grid: "square", shape: { view: [600, 300], pts: [[60, 220], [160, 220], [110, 120]] }, shapeFill: "rgba(23,102,255,.35)", shapeStroke: "#1766FF" }],
        answer: "Answers vary. **Translate**: slide the triangle without turning it. **Rotate**: turn it about a point, for example a half turn so it points down. **Reflect**: flip it over a mirror line so it is a mirror image. It stays the same size and shape each time."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "John tossed a coin 10 times. It landed on heads 7 times and on tails 3 times. The next time he tosses a coin, John is sure it will land on heads. Is this possible? Communicate your reasoning.",
        interact: [
          { kind: "choose", rows: [{ t: "Heads on the next toss is", options: ["Impossible", "Possible but not certain", "Certain"], a: 1 }] },
          { kind: "input", fields: [{ label: "Chance of heads on the next toss", value: 0.5, placeholder: "?/?" }] }
        ],
        answer: "It is **possible, but not certain**. Each toss has 2 equally likely outcomes, so the chance of heads is always **[1/2]**. The earlier tosses do not change the next one."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Explain why there is a need for a formal unit larger than the cubic centimetre to measure volume.",
        interact: [{ kind: "select", hint: "Tap every reason that makes sense.", items: [
          ["Large spaces like a room would take millions of cubic centimetres", true],
          ["Big numbers of cm³ are hard to count, say and compare", true],
          ["A cubic metre holds 1 000 000 cm³, so it is easier for large objects", true],
          ["Cubic centimetres can only measure liquids", false]] }],
        answer: "Cubic centimetres are tiny. A large space, like a classroom or a shipping container, would need millions of them. A larger unit, the **cubic metre** (m³ = 100 cm × 100 cm × 100 cm = 1 000 000 cm³), gives smaller numbers that are easier to work with."
      }
    ],
    // Review 4 (Week 9 Thursday)
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "On a number line from −50 to 50, a sticky note with −25 is placed halfway between −50 and 0. A sticky note with 5 is placed just to the left of 0. The sticky notes are placed in the correct positions on the number line. Communicate your reasoning.",
        answer: false,
        explain: "−25 is in the right place, halfway between −50 and 0. But 5 is a positive number, so it belongs just to the right of 0. The spot where it was placed is about −5.",
        interact: [{ kind: "numberline", min: -50, max: 50, labelStep: 25, ticks: 0.2, tol: 3, items: [["−25", -25], ["5", 5]] }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Sam bought 3.75 kg of grapes and 2.5 kg of watermelon for afternoon snacks. He worked out he had 5.4 kg in total. Was he correct? What is the correct total?",
        interact: [
          { kind: "bar", whole: { v: 6.25, l: "?", n: "total", hide: true }, parts: [{ v: 3.75, l: "3.75 kg", n: "grapes" }, { v: 2.5, l: "2.5 kg", n: "watermelon" }] },
          { kind: "choose", rows: [{ t: "Was Sam correct?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "Correct total", value: 6.25, suffix: "kg" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Line up the decimal points", s: "3.75 + 2.50 = 6.25 kg." }, { t: "Split", s: "3 + 2 = 5 and 0.75 + 0.5 = 1.25, so 5 + 1.25 = 6.25 kg." }] },
        answer: "**No**. The correct total is **6.25 kg**. Sam probably did not line up the place values (2.5 is 2.50, not 2.05 or 0.25)."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "Describe the path of the trapezium using the words translate, rotate and reflect.",
        img: "u40-trapezium.png",
        interact: [{ kind: "choose", rows: [
          { t: "Step 1", options: ["translate", "rotate", "reflect"], a: 0 },
          { t: "Step 2", options: ["translate", "rotate", "reflect"], a: 1 },
          { t: "Step 3", options: ["translate", "rotate", "reflect"], a: 2 },
          { t: "Step 4", options: ["translate", "rotate", "reflect"], a: 0 }] }],
        answer: "**Translate** right, **rotate** a half turn (it is upside down), **reflect** over the grey mirror line (upright again), then **translate** right. Follow the black dot to check each step."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "During a game of ‘Scissors, Paper, Rock’ Ayesha has won every round using ‘Scissors’. She is sure she will win the next round using ‘Scissors’ again. Is this possible? Explain your reasoning.",
        interact: [
          { kind: "choose", rows: [{ t: "Winning the next round is", options: ["Impossible", "Possible but not certain", "Certain"], a: 1 }] },
          { kind: "input", fields: [{ label: "Chance her opponent shows Paper (so Scissors wins)", value: 1 / 3, placeholder: "?/?" }] }
        ],
        answer: "It is **possible, but not certain**. Her opponent can show scissors, paper or rock. Scissors only wins against paper, so if the opponent picks at random her chance of winning is **[1/3]**. Past wins do not change the next round.",
        explain: "This assumes the opponent picks at random."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2D shapes",
        prompt: "What does not change when translating, reflecting or rotating a shape? Position, orientation or size?",
        interact: [{ kind: "select", hint: "Tap what stays the same for all three moves.", items: [["Position", false], ["Orientation", false], ["Size", true]] }],
        answer: "**Size** (and shape). The position always changes. Orientation changes when you reflect or rotate, but stays the same when you translate."
      }
    ],
    // Review 5 (Week 10 Monday)
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "21, 28, 35, 42, 49, 56, 63, 70, 77. What number would come next?",
        options: ["90", "85", "84", "83"],
        answer: 2,
        explain: "The pattern goes up by 7 each time (multiples of 7). 77 + 7 = 84.",
        interact: [{ kind: "jumps", start: 21, end: 84, steps: [7], hint: "Jump in sevens from 21. Where do you land after 77?" }]
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Kai can have 50%, 0.5 or [1/5] of the chocolate bar. Which choice gives him the most chocolate?",
        interact: [
          { kind: "shade", parts: 10, pct: true, hint: "The strip is the whole bar. Shade 50%, then shade [1/5] (2 parts) to compare." },
          { kind: "choose", rows: [{ t: "The most chocolate is", options: ["50%", "0.5", "[1/5]", "50% and 0.5 (they are equal)"], a: 3 }] }
        ],
        cubes: { ops: ["÷"], note: "Change them all to the same form.", solve: [{ t: "Make them all percentages", s: "50% = 50%, 0.5 = 50%, [1/5] = 20%." }, { t: "Make them all decimals", s: "50% = 0.5, 0.5 = 0.5, [1/5] = 1 ÷ 5 = 0.2." }] },
        answer: "**50% and 0.5** give the same amount: half the bar. [1/5] is only 20% (0.2), so it gives the least.",
        explain: "50% and 0.5 are equal, so there is no single ‘most’. The last option names both."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Name the types of angles found on this straight line.",
        img: "u40-line-angles.png",
        interact: [
          { kind: "angle", start: 40, names: true, hint: "Drag the arm to match the red angle, then the yellow angle." },
          { kind: "choose", rows: [
            { t: "Red angle", options: ["acute", "right", "obtuse", "straight"], a: 0 },
            { t: "Yellow angle", options: ["acute", "right", "obtuse", "straight"], a: 2 },
            { t: "Both together", options: ["acute", "right", "obtuse", "straight"], a: 3 }] }
        ],
        answer: "The red angle is **acute** (less than 90°). The yellow angle is **obtuse** (between 90° and 180°). Together they make a **straight angle** (180°)."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Draw a table and record the number of each coloured ball using tally marks.",
        interact: [
          { kind: "classify", view: [700, 270], mark: "outline", label: "42 coloured balls", hint: "Choose a colour, then tap each ball of that colour as you count it.",
            cats: [{ k: "R", t: "Red", c: "#8B1A1A" }, { k: "B", t: "Blue", c: "#0B4F8A" }, { k: "Y", t: "Yellow", c: "#8A6A00" }, { k: "P", t: "Purple", c: "#3D1F80" }, { k: "O", t: "Orange", c: "#8A4B00" }, { k: "G", t: "Green", c: "#2E6B1F" }],
            shapes: [
            { circle: [178, 54, 23], fill: "#FFDD55", a: "Y" },
            { circle: [157, 121, 23], fill: "#8C52FF", a: "P" },
            { circle: [46, 158, 23], fill: "#FFDD55", a: "Y" },
            { circle: [237, 142, 23], fill: "#8C52FF", a: "P" },
            { circle: [313, 99, 23], fill: "#FF3B3B", a: "R" },
            { circle: [370, 128, 23], fill: "#FF3B3B", a: "R" },
            { circle: [428, 95, 23], fill: "#FFDD55", a: "Y" },
            { circle: [497, 99, 23], fill: "#8C52FF", a: "P" },
            { circle: [461, 162, 23], fill: "#8C52FF", a: "P" },
            { circle: [591, 62, 23], fill: "#FF3B3B", a: "R" },
            { circle: [673, 28, 23], fill: "#FFDD55", a: "Y" },
            { circle: [649, 132, 23], fill: "#38B6FF", a: "B" },
            { circle: [130, 186, 23], fill: "#FF3B3B", a: "R" },
            { circle: [219, 223, 23], fill: "#8C52FF", a: "P" },
            { circle: [326, 223, 23], fill: "#38B6FF", a: "B" },
            { circle: [584, 196, 23], fill: "#FFDD55", a: "Y" },
            { circle: [640, 208, 23], fill: "#7ED957", a: "G" },
            { circle: [36, 51, 23], fill: "#FF3B3B", a: "R" },
            { circle: [67, 97, 23], fill: "#FF3B3B", a: "R" },
            { circle: [147, 63, 23], fill: "#38B6FF", a: "B" },
            { circle: [248, 69, 23], fill: "#38B6FF", a: "B" },
            { circle: [119, 133, 23], fill: "#38B6FF", a: "B" },
            { circle: [307, 139, 23], fill: "#38B6FF", a: "B" },
            { circle: [368, 68, 23], fill: "#8C52FF", a: "P" },
            { circle: [464, 69, 23], fill: "#38B6FF", a: "B" },
            { circle: [577, 96, 23], fill: "#FFDD55", a: "Y" },
            { circle: [656, 60, 23], fill: "#38B6FF", a: "B" },
            { circle: [625, 153, 23], fill: "#F89A36", a: "O" },
            { circle: [367, 173, 23], fill: "#F89A36", a: "O" },
            { circle: [429, 169, 23], fill: "#38B6FF", a: "B" },
            { circle: [531, 162, 23], fill: "#FF3B3B", a: "R" },
            { circle: [210, 169, 23], fill: "#FFDD55", a: "Y" },
            { circle: [41, 189, 23], fill: "#F89A36", a: "O" },
            { circle: [272, 184, 23], fill: "#F89A36", a: "O" },
            { circle: [136, 220, 23], fill: "#38B6FF", a: "B" },
            { circle: [188, 237, 23], fill: "#F89A36", a: "O" },
            { circle: [287, 233, 23], fill: "#FF3B3B", a: "R" },
            { circle: [382, 233, 23], fill: "#FF3B3B", a: "R" },
            { circle: [438, 221, 23], fill: "#FF3B3B", a: "R" },
            { circle: [520, 230, 23], fill: "#38B6FF", a: "B" },
            { circle: [611, 233, 23], fill: "#38B6FF", a: "B" },
            { circle: [73, 232, 23], fill: "#8C52FF", a: "P" }] },
          { kind: "tally", rows: [{ l: "Red" }, { l: "Blue" }, { l: "Yellow" }, { l: "Purple" }, { l: "Orange" }, { l: "Green" }], hint: "Record each colour with tally marks." },
          { kind: "input", fields: [{ label: "Red", value: 10 }, { label: "Blue", value: 12 }, { label: "Yellow", value: 7 }, { label: "Purple", value: 7 }, { label: "Orange", value: 5 }, { label: "Green", value: 1 }] }
        ],
        answer: "Red **10** · Blue **12** · Yellow **7** · Purple **7** · Orange **5** · Green **1**. That is 42 balls in all.",
        explain: "Counts are from the slide picture, including balls partly hidden behind others."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Express the probability of drawing each colour ball from the bag as a fraction.",
        img: "u40-bag.png",
        interact: [{ kind: "input", fields: [{ label: "Red", value: 0.5, placeholder: "?/?" }, { label: "Purple", value: 1 / 3, placeholder: "?/?" }, { label: "Blue", value: 1 / 6, placeholder: "?/?" }] }],
        answer: "There are 6 balls. Red **[3/6]** ([1/2]) · Purple **[2/6]** ([1/3]) · Blue **[1/6]**.",
        explain: "Any equivalent fraction is accepted."
      }
    ],
    // Review 6 (Week 10 Tuesday)
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "74 ÷ 6 = 12 remainder 2",
        answer: true,
        explain: "12 × 6 = 72, and 74 − 72 = 2. So 74 ÷ 6 = 12 remainder 2.",
        interact: [{ kind: "pack", total: 74, size: 6, label: "group", thing: "counters", hint: "Put 6 counters in each group. How many groups, and how many are left?" }]
      },
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "The teddy bear costs $79.99 and is 25% off. The boy says: ‘I estimate the discount to be about $40, so the new price of the teddy bear would be about $40.’ Is he correct? Communicate your reasoning.",
        img: "u40-teddy.png",
        interact: [
          { kind: "shade", parts: 4, pct: true, each: 20, money: true, hint: "The strip is about $80. Shade 25% to see the discount." },
          { kind: "choose", rows: [{ t: "Is he correct?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "Discount about", prefix: "$", min: 19, max: 21 }, { label: "New price about", prefix: "$", min: 59, max: 61 }] }
        ],
        cubes: { ops: ["÷", "−"], note: "25% is a quarter.", solve: [{ t: "Round first", s: "$79.99 ≈ $80. 25% of $80 = $80 ÷ 4 = $20. $80 − $20 = $60." }, { t: "Check his thinking", s: "A $40 discount would be 50% (half), not 25%." }] },
        answer: "**No**. 25% is a quarter. A quarter of about $80 is about **$20**, so the new price is about **$60**. He worked out 50% instead of 25%."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Name the angles. How many degrees are in each angle?",
        img: "u40-three-angles.png",
        interact: [
          { kind: "angle", start: 90, reflex: true, names: true, degrees: true, hint: "Drag the arm to make each angle." },
          { kind: "choose", rows: [
            { t: "1.", options: ["right", "straight", "revolution"], a: 2 },
            { t: "2.", options: ["right", "straight", "revolution"], a: 0 },
            { t: "3.", options: ["right", "straight", "revolution"], a: 1 }] },
          { kind: "input", fields: [{ label: "1.", value: 360, suffix: "°" }, { label: "2.", value: 90, suffix: "°" }, { label: "3.", value: 180, suffix: "°" }] }
        ],
        answer: "1. **Revolution, 360°** · 2. **Right angle, 90°** · 3. **Straight angle, 180°**."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Explain why this graph could be considered misleading.",
        img: "u40-potato.png",
        interact: [{ kind: "select", hint: "Tap every reason the graph could mislead.", items: [
          ["The potatoes grow in width and height, so the 2023 potato looks far more than 4 times bigger", true],
          ["The years are not evenly spaced (2019 to 2023 is a 4-year gap)", true],
          ["It is hard to read exact values from the tops of the potatoes", true],
          ["The title makes a big claim from a small percentage", true],
          ["The vertical axis starts at 0", false]] }],
        answer: "Picture size exaggerates the change: the potatoes get wider as well as taller, so the growth looks huge. The gaps between years are uneven, there are no clear values, and the title ‘couch potato nation’ makes a big claim. The axis only goes to 20%, so most children do not spend more than 3 hours watching TV.",
        explain: "Several answers are reasonable. The point is that the picture, not the data, creates the impression."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3DS Objects",
        prompt: "Is this shape a prism or a pyramid? Communicate your reasoning.",
        img: "u40-prism.png",
        interact: [
          { kind: "choose", rows: [{ t: "This shape is a", options: ["prism", "pyramid"], a: 0 }] },
          { kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Edges", value: 9 }, { label: "Vertices", value: 6 }] }
        ],
        answer: "A **prism** (a triangular prism). It has 2 identical, parallel triangle faces joined by 3 rectangles. A pyramid has one base and triangle faces that meet at a single point (apex). It has **5 faces, 9 edges and 6 vertices**."
      }
    ],
    // Review 7 (Week 10 Wednesday)
    [
      {
        type: "sr", focus: "Represents numbers B",
        prompt: "Which of these are integers? A: 3.5 · B: 0 · C: −63 · D: [2/3]",
        interact: [{ kind: "select", hint: "Tap every integer.", items: [["A: 3.5", false], ["B: 0", true], ["C: −63", true], ["D: [2/3]", false]] }],
        answer: "**B (0)** and **C (−63)**. Integers are whole numbers and their negatives, including 0. 3.5 and [2/3] are not whole numbers.",
        explain: "The slide is multiple choice but two options are integers, so this is a tap-all question."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "36 × 0.4 = 14.4. Use the number sentence to help solve: 36 × 0.04 and 3.6 × 4. Communicate your reasoning.",
        interact: [{ kind: "input", fields: [{ label: "36 × 0.04 =", value: 1.44 }, { label: "3.6 × 4 =", value: 14.4 }] }],
        answer: "36 × 0.04 = **1.44**: 0.04 is 0.4 ÷ 10, so the answer is 14.4 ÷ 10. 3.6 × 4 = **14.4**: 3.6 is 36 ÷ 10 and 4 is 0.4 × 10, so the answer is unchanged."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "How many degrees in the highlighted angle? How many degrees in the adjacent angle?",
        img: "u40-protractor.png",
        interact: [{ kind: "input", fields: [{ label: "Highlighted angle", value: 60, suffix: "°" }, { label: "Adjacent angle", value: 120, suffix: "°" }] }],
        answer: "The highlighted angle is **60°** (read the scale that starts at 0 on the left). The adjacent angle is **120°**, because angles on a straight line add to 180°: 180 − 60 = 120."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Describe the differences in play choices between K–2 and 3–6 students.",
        interact: [
          { kind: "bargraph", max: 22, step: 2, ylabel: "Number of students", xlabel: "Places", label: "Lunchtime places",
            series: [{ l: "K to 2", c: "#4472C4" }, { l: "3 to 6", c: "#ED7D31" }],
            groups: [{ l: "Sandpit", v: [8, 2] }, { l: "Adventure playground", v: [9, 9] }, { l: "Sports field", v: [0, 20] }, { l: "Tree house", v: [7, 2] }, { l: "Library", v: [5, 5] }, { l: "Concrete areas", v: [15, 12] }] },
          { kind: "choose", rows: [
            { t: "Most popular for K–2", options: ["Sandpit", "Sports field", "Concrete areas", "Library"], a: 2 },
            { t: "Most popular for 3–6", options: ["Sandpit", "Sports field", "Concrete areas", "Library"], a: 1 }] }
        ],
        answer: "K–2 students like the **concrete areas** most (15) and **no** K–2 students use the sports field. 3–6 students like the **sports field** most (20). More K–2 students use the sandpit (8 v 2) and tree house (7 v 2). Both groups are equal for the adventure playground (9) and library (5)."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Angles at a point are called? What is the total of these angles?",
        img: "u40-point.png",
        interact: [
          { kind: "choose", rows: [{ t: "They are called", options: ["angles on a straight line", "angles at a point", "right angles"], a: 1 }] },
          { kind: "input", fields: [{ label: "Total", value: 360, suffix: "°" }] }
        ],
        answer: "**Angles at a point**. Together they make a full turn (a revolution), so they total **360°**."
      }
    ],
    // Review 8 (Week 10 Thursday)
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "3478 × 19. When solving this equation, estimating by rounding to 3500 × 20 helps check if the exact answer is reasonable.",
        answer: true,
        explain: "3500 × 20 = 70 000, which is easy to work out. The exact answer is 66 082, which is close to 70 000, so the estimate shows it is reasonable.",
        interact: [{ kind: "input", fields: [{ label: "3500 × 20 =", value: 70000 }] }]
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "1, 8, 4, 7. Using these numbers, demonstrate the effect grouping symbols can have on the answer.",
        interact: [{ kind: "input", fields: [{ label: "1 + 8 × 4 + 7 =", value: 40 }, { label: "(1 + 8) × 4 + 7 =", value: 43 }, { label: "1 + 8 × (4 + 7) =", value: 89 }, { label: "(1 + 8) × (4 + 7) =", value: 99 }] }],
        answer: "1 + 8 × 4 + 7 = **40** · (1 + 8) × 4 + 7 = **43** · 1 + 8 × (4 + 7) = **89** · (1 + 8) × (4 + 7) = **99**. Same numbers, same operations, but the brackets change what is worked out first, so the answer changes.",
        explain: "The slide gives only the numbers. These four sentences are one example; students can make their own."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "All these angles are the same size. What can you tell about the size of these angles?",
        img: "u40-star.png",
        interact: [{ kind: "input", fields: [{ label: "Number of angles", value: 6 }, { label: "Total around the point", value: 360, suffix: "°" }, { label: "Each angle", value: 60, suffix: "°" }] }],
        answer: "There are **6** equal angles at a point. Angles at a point add to **360°**, so each angle is 360 ÷ 6 = **60°** (acute)."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Explain what the distribution of data shows about pulse rates.",
        interact: [
          { kind: "bargraph", max: 140, step: 20, ylabel: "Pulse rate (BPM)", xlabel: "Students", label: "Pulse rate",
            series: [{ l: "Resting", c: "#4472C4" }, { l: "After exercise", c: "#ED7D31" }],
            groups: [{ l: "Keira", v: [80, 110] }, { l: "Marli", v: [86, 98] }, { l: "Bella", v: [78, 100] }, { l: "Bayah", v: [82, 120] }, { l: "Kenji", v: [70, 96] }, { l: "Koen", v: [84, 111] }, { l: "Monaro", v: [76, 116] }, { l: "Tahnee", v: [82, 124] }, { l: "Kody", v: [88, 118] }, { l: "Naomi", v: [76, 116] }] },
          { kind: "choose", rows: [{ t: "After exercise, every student's pulse rate", options: ["went down", "stayed the same", "went up"], a: 2 }] }
        ],
        answer: "Every student's pulse rate is **higher after exercise**. Resting rates are close together (about 70–88 BPM). After exercise they are higher and more spread out (about 96–124 BPM). Kenji has the lowest resting rate and Tahnee the highest after exercise.",
        explain: "Bar heights are read from the slide graph, to the nearest beat or two."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Time",
        prompt: "How much time has elapsed between 3:45 and 6:00?",
        interact: [
          { kind: "jumps", time: true, start: 225, end: 360, steps: [15, 60], hint: "Start at 3:45. Jump to the next hour, then count on in hours." },
          { kind: "input", fields: [{ label: "Elapsed time", value: 2, suffix: "h" }, { label: "", value: 15, suffix: "min" }] }
        ],
        answer: "**2 hours 15 minutes**. 3:45 → 4:00 is 15 min, then 4:00 → 6:00 is 2 h.",
        explain: "This takes both times as the same part of the day (for example, both pm)."
      }
    ]
  ]
});
