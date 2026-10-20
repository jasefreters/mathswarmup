/*
  Stage 2 Year A, Unit 4 — Review of learning (Term 1, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 1, ls: 4, unit: 4,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 4 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "Which fraction strip has been correctly divided into **halves**?",
        options: [
          { img: "u4-halfA.png", alt: "Strip cut into 4 equal parts" },
          { img: "u4-halfB.png", alt: "Strip cut into 2 equal parts" },
          { img: "u4-halfC.png", alt: "Strip cut into 2 unequal parts" },
          { img: "u4-halfD.png", alt: "Strip cut into 3 unequal parts" }],
        answer: 1,
        explain: "Halves are 2 equal parts. A has 4 parts, C has 2 parts that are not equal, and D has 3 parts.",
        interact: [{ kind: "fold", max: 3 }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "This fraction strip has been partitioned into halves. Draw and label a fraction strip that has been partitioned into quarters.",
        interact: [
          { kind: "shade", parts: 2, hint: "This strip is cut into halves: 2 equal parts." },
          { kind: "fold", max: 3, target: 4 },
          { kind: "input", fields: [{ label: "Each part is", value: 0.25, placeholder: "a/b" }] }
        ],
        answer: "Fold the strip in half, then in half again: 4 equal parts. Label each part **[1/4]**.",
        explain: "On the slide, the halves strip showed 4 parts each labelled [1/2]. It has been redrawn with 2 equal parts."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Estimate your height using metres and centimetres. Communicate your reasoning.",
        interact: [
          { kind: "marker", min: 0, max: 200, divs: 20, majorEvery: 10, labels: [0, 50, 100, 150, 200], label: "me", hint: "This line is 2 metres tall, marked every 10 cm. Slide the pin to where you think your height is." },
          { kind: "input", fields: [{ label: "About", min: 1, max: 1, suffix: "m" }, { label: "and", min: 0, max: 60, suffix: "cm" }] }
        ],
        answer: "Answers vary. Most Year 3 students are about **1 m and 20–40 cm** tall. 1 metre is 100 cm, so start from a metre ruler and add the extra centimetres."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Both these number sentences have an equal difference of 8: 17 − 9 = 8 and 24 − 16 = 8. Record the equal difference of 18 − 11 and 14 − 7.",
        interact: [
          { kind: "jumps", start: 11, end: 18, steps: [1, 2, 5], hint: "How far is it from 11 to 18?" },
          { kind: "jumps", start: 7, end: 14, steps: [1, 2, 5], hint: "How far is it from 7 to 14?" },
          { kind: "input", fields: [{ label: "18 − 11 =", value: 7 }, { label: "14 − 7 =", value: 7 }] }
        ],
        answer: "Both have an equal difference of **7**. Each number in 14 − 7 is 4 less than in 18 − 11, so the difference stays the same."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Name 3 different objects that would be measured using millimetres.",
        interact: [{ kind: "select", hint: "Tap every object that you would measure in millimetres.", items: [["an ant", true], ["the width of a fingernail", true], ["a button", true], ["a pencil lead", true], ["the classroom door", false], ["a football field", false], ["the school hall", false]] }],
        answer: "Answers vary: very small things, like an ant, a fingernail, a button or a pencil lead."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "The fractional part needed to complete this one whole is one third.",
        answer: false,
        explain: "The strip is cut into 4 equal parts (quarters) and 3 are shaded. The missing part is one quarter, [1/4], not one third.",
        interact: [{ kind: "shade", parts: 4, pre: [0, 1, 2], hint: "This strip is one whole. Count the equal parts." }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Tyra had a strip of blue paper she wanted to fold into eighths. Describe the instructions you could give Tyra to make sure she created 8 equal parts.",
        interact: [
          { kind: "fold", max: 4, target: 8 },
          { kind: "input", fields: [{ label: "Folds in half", value: 3 }] }
        ],
        answer: "Fold the strip **in half 3 times**, lining up the ends each time. 1 fold makes 2 parts, 2 folds make 4 parts and 3 folds make **8 equal parts**."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record 3 different benchmarks for measuring length.",
        interact: [{ kind: "select", hint: "Tap every benchmark you could use to estimate a length.", items: [["the width of my finger (about 1 cm)", true], ["my hand span", true], ["a big step (about 1 m)", true], ["my arm span", true], ["a 1 L milk bottle", false], ["one minute", false], ["a 1 kg bag of flour", false]] }],
        answer: "Answers vary, for example the width of a finger (about 1 cm), a hand span, a big step (about 1 m) or an arm span."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Represent the following number sentence using a bar model and calculate the missing value: 72 = ? + 13",
        interact: [
          { kind: "bar", whole: { v: 72, l: "72" }, parts: [{ v: 59, l: "59", hide: true }, { v: 13, l: "13" }] },
          { kind: "scale", left: "72", right: "? + 13", answer: 59 }
        ],
        answer: "**59**. The whole is 72 and one part is 13, so the other part is 72 − 13 = 59."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Describe the features that are similar and different between these 2 shapes: a square and a rectangle.",
        interact: [
          { kind: "corners", view: [560, 200], r: 22, q: 30, shapes: [{ p: [[30, 30], [180, 30], [180, 180], [30, 180]], fill: "#2F6FE4", l: "square", ly: 105 }, { p: [[250, 40], [530, 40], [530, 175], [250, 175]], fill: "#D6408B", l: "rectangle", ly: 108 }], hint: "Tap a corner to test it with a right angle." },
          { kind: "choose", rows: [
            { t: "4 straight sides", options: ["both", "square only", "rectangle only"], a: 0 },
            { t: "4 right angles", options: ["both", "square only", "rectangle only"], a: 0 },
            { t: "opposite sides are equal", options: ["both", "square only", "rectangle only"], a: 0 },
            { t: "all 4 sides are equal", options: ["both", "square only", "rectangle only"], a: 1 }] }
        ],
        answer: "Similar: both have 4 straight sides, 4 corners that are right angles, and opposite sides that are equal. Different: a **square** has all 4 sides equal; a rectangle has 2 long sides and 2 short sides."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "The colours in the fraction strip represent…",
        options: ["[2/8] blue, [3/8] pink and [1/8] grey", "[1/8] blue, [1/8] pink and [1/8] grey", "[2/8] blue, [3/8] pink and [3/8] grey", "[1/8] blue, [3/8] pink and [3/8] grey"],
        answer: 2,
        explain: "The strip has 8 equal parts: 2 blue, 3 pink and 3 grey. Note: on the slide the denominators were cut off and options A and C were the same, so the options have been rewritten so C is correct.",
        interact: [{ kind: "classify", view: [560, 70], hint: "Choose a colour, then tap its parts to count them.",
          cats: [{ k: "b", t: "Blue", c: "#00B0F0" }, { k: "p", t: "Pink", c: "#F06A85" }, { k: "g", t: "Grey", c: "#808080" }],
          shapes: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({ p: (10 + i * 67) + ",10 " + (77 + i * 67) + ",10 " + (77 + i * 67) + ",60 " + (10 + i * 67) + ",60", a: i < 2 ? "b" : i < 5 ? "p" : "g", fill: ["#00B0F0", "#00B0F0", "#F06A85", "#F06A85", "#F06A85", "#808080", "#808080", "#808080"][i] })) }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Draw a rectangle and divide it into thirds. How do you know each part is one third of the whole? Communicate your reasoning.",
        interact: [
          { kind: "shade", parts: 3, hint: "This rectangle is divided into thirds. Tap a part to shade one third." },
          { kind: "choose", rows: [{ t: "How do you know?", options: ["There are 3 parts", "There are 3 equal parts", "One part is shaded"], a: 1 }] }
        ],
        answer: "There are **3 equal parts**, so each part is one third, [1/3], of the whole. If the parts weren't the same size, they wouldn't be thirds."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Complete the sentences. There are ___ mm in 1 cm. There are ___ mm in 3 cm. There are ___ mm in 6 cm.",
        interact: [
          { kind: "jumps", start: 0, steps: [10], hint: "Each jump is 10 mm, which is 1 cm." },
          { kind: "input", fields: [{ label: "1 cm =", value: 10, suffix: "mm" }, { label: "3 cm =", value: 30, suffix: "mm" }, { label: "6 cm =", value: 60, suffix: "mm" }] }
        ],
        answer: "**10 mm** in 1 cm, **30 mm** in 3 cm, **60 mm** in 6 cm. Each centimetre is 10 millimetres.",
        explain: "On the slide, the last sentence was left open (___ mm in ___ cm). It has been set to 6 cm so it can be checked. Any matching pair works, like 50 mm in 5 cm."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use partitioning to solve 13 + 46. Record your thinking.",
        interact: [
          { kind: "pv", cols: ["T", "O"], start: 13, hint: "This is 13. Add 4 tens and 6 ones." },
          { kind: "input", fields: [{ label: "Tens: 10 + 40 =", value: 50 }, { label: "Ones: 3 + 6 =", value: 9 }, { label: "13 + 46 =", value: 59 }] }
        ],
        answer: "10 + 40 = 50 and 3 + 6 = 9, so 50 + 9 = **59**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "Record a shape that has: two pairs of parallel sides, opposite sides that are equal, and all corners the same.",
        interact: [
          { kind: "classify", view: [740, 170], hint: "Choose a group, then tap each shape.",
            cats: [{ k: "y", t: "Has all three", c: "#22A06B" }, { k: "n", t: "Doesn't", c: "#C4372C" }],
            shapes: [
              { p: "15,40 175,40 175,130 15,130", a: "y", fill: "#A3A6AC", deco: "<text x='95' y='160' class='co-lab'>A</text>" },
              { p: "230,40 340,40 340,150 230,150", a: "y", fill: "#A3A6AC", deco: "<text x='285' y='166' class='co-lab'>B</text>" },
              { p: "430,40 560,40 520,130 390,130", a: "n", fill: "#A3A6AC", deco: "<text x='475' y='160' class='co-lab'>C</text>" },
              { p: "620,40 690,40 730,130 580,130", a: "n", fill: "#A3A6AC", deco: "<text x='655' y='160' class='co-lab'>D</text>" }] },
          { kind: "choose", rows: [{ t: "Name a shape that fits", options: ["rectangle", "triangle", "trapezium", "parallelogram"], a: 0 }] }
        ],
        answer: "A **rectangle** (a square fits too). It has 2 pairs of parallel sides, opposite sides are equal, and all 4 corners are right angles."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "During a school fundraiser, Shanice sold [5/8] of the raffle tickets, which left [4/8] of the tickets unsold.",
        answer: false,
        explain: "8 eighths make the whole. 8 − 5 = 3, so [3/8] of the tickets were left unsold, not [4/8].",
        interact: [{ kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4], hint: "The shaded parts are the tickets Shanice sold. Count the parts left." }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the fraction that has been shaded blue. Communicate your reasoning.",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2], hint: "Count the equal parts, then count the shaded parts." },
          { kind: "input", fields: [{ label: "Fraction shaded", value: 0.75, placeholder: "a/b" }] }
        ],
        answer: "**[3/4]** (three-quarters). The strip has 4 equal parts and 3 are shaded."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Complete the sentence: 53 mm is the same as __ cm and __ mm. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 0, end: 53, steps: [10, 1], hint: "Jump in 10s (each 10 mm is 1 cm), then in 1s." },
          { kind: "input", fields: [{ label: "53 mm =", value: 5, suffix: "cm" }, { label: "and", value: 3, suffix: "mm" }] }
        ],
        answer: "**5 cm and 3 mm**. 50 mm is 5 cm (5 lots of 10 mm), and 3 mm are left over."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "To solve 19 + 34, Kenny changed the number sentence to 20 + 33 to find the answer of 53. Record the name of the strategy he used and why it was an efficient strategy.",
        interact: [
          { kind: "scale", left: "19 + 34", right: "20 + ?", answer: 33 },
          { kind: "choose", rows: [
            { t: "Kenny's strategy", options: ["bridging", "levelling", "counting on by ones"], a: 1 },
            { t: "Why is it efficient?", options: ["20 is a friendly number to add to", "It uses bigger numbers", "It changes the answer"], a: 0 }] }
        ],
        answer: "**Levelling.** He took 1 from 34 and gave it to 19, so the total stays the same. 20 + 33 is easier because 20 is a friendly multiple of ten."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Bobbi started getting ready for school at 8 am and it took her 30 minutes. Record the time she finished.",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 480, steps: [5, 10, 30], hint: "Start at 8:00 am and jump on 30 minutes." },
          { kind: "clock", time: "8:00", drag: true },
          { kind: "input", fields: [{ label: "She finished at", accept: ["8:30 am", "8:30", "half past 8", "half past eight"], placeholder: "h:mm am" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Jump on the clock", s: "Start at 8:00. The long hand moves half way round, from 12 to 6: 30 minutes. It's 8:30 am." }, { t: "Count on in fives", s: "8:05, 8:10, 8:15, 8:20, 8:25, 8:30. Six jumps of 5 minutes is 30 minutes." }] },
        answer: "**8:30 am** (half past 8)."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "This array shows…",
        options: ["2 groups of 4", "2 twos are 4", "4 groups of 2", "4 twos are 4"],
        answer: 1,
        explain: "The array has 2 rows of 2, so 2 twos are 4. A and C would need 8 counters, and 4 twos are 8, not 4.",
        interact: [{ kind: "array", rows: 2, cols: 2, showTotal: true, hint: "This is the array: 2 rows of 2." }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the fractions missing from the marked points on this number line.",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 3, tol: 0.06, items: [["[1/3]", 1 / 3], ["[2/3]", 2 / 3]] },
          { kind: "input", fields: [{ label: "First mark", value: 1 / 3, placeholder: "a/b" }, { label: "Second mark", value: 2 / 3, placeholder: "a/b" }] }
        ],
        answer: "**[1/3]** and **[2/3]**. The line from 0 to 1 is cut into 3 equal parts, so each part is one third."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "The term perimeter means…",
        interact: [
          { kind: "sides", label: "Rectangle", view: [400, 200], fill: "#D2ECFC", poly: [[40, 40], [360, 40], [360, 160], [40, 160]] },
          { kind: "choose", rows: [{ t: "Perimeter is", options: ["the space inside a shape", "the distance around the outside of a shape", "the number of corners"], a: 1 }] }
        ],
        answer: "Perimeter is **the distance around the outside** (the boundary) of a shape. Tap each side to trace it."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use the levelling strategy to solve 22 + 36.",
        interact: [
          { kind: "scale", left: "22 + 36", right: "20 + ?", answer: 38 },
          { kind: "input", fields: [{ label: "22 + 36 =", value: 58 }] }
        ],
        answer: "Move 2 from 22 to 36: 20 + 38 = **58**. The total stays the same."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Read and record the time shown on the clock.",
        interact: [
          { kind: "clock", time: "1:30", drag: true },
          { kind: "input", fields: [{ label: "Time", accept: ["1:30", "half past 1", "half past one", "130"], placeholder: "h:mm" }] }
        ],
        answer: "**Half past 1** (1:30). The long hand points to 6 (30 minutes) and the short hand is between 1 and 2.",
        explain: "On the slide, the short hand is drawn a little close to the 2. With the long hand on the 6, the time is half past 1."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Double 5 is 10 so half of 10 must be 5.",
        answer: true,
        explain: "Doubling and halving are the inverse of each other: 5 + 5 = 10, so 10 shared into 2 equal groups is 5.",
        interact: [{ kind: "pack", mode: "share", n: 2, total: 10, thing: "counters", label: "group" }]
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Explain why one-quarter of a ruler would be larger than one-quarter of a pencil.",
        interact: [
          { kind: "bar", hint: "Each top bar is one whole. The blue part shows one quarter of it.", whole: { v: 30, l: "ruler (30 cm)" }, parts: [{ v: 7.5, l: "[1/4]", n: "7.5 cm" }, { v: 22.5, l: " " }] },
          { kind: "bar", hint: " ", whole: { v: 15, l: "pencil (15 cm)" }, parts: [{ v: 3.75, l: "[1/4]" }, { v: 11.25, l: " " }] },
          { kind: "choose", rows: [{ t: "Why?", options: ["The ruler is a bigger whole", "Quarters are always the same size", "The pencil has more parts"], a: 0 }] }
        ],
        answer: "The **whole is bigger**. A quarter is 1 of 4 equal parts of the whole, so a quarter of a long ruler is longer than a quarter of a short pencil.",
        explain: "The bar models assume a 30 cm ruler and a 15 cm pencil."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Calculate the perimeter of this quadrilateral.",
        interact: [
          { kind: "sides", label: "Rectangle, 15 cm by 5 cm", view: [470, 200], fill: "#0B2A6B",
            poly: [[60, 50], [400, 50], [400, 160], [60, 160]],
            dims: [{ from: [62, 30], to: [398, 30] }, { from: [420, 52], to: [420, 158] }, { from: [62, 180], to: [398, 180] }, { from: [40, 52], to: [40, 158] }],
            labels: [{ x: 230, y: 22, t: "15 cm" }, { x: 430, y: 110, t: "5 cm", anchor: "start" }, { x: 230, y: 198, t: "15 cm" }, { x: 30, y: 110, t: "5 cm", anchor: "end" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 40, suffix: "cm" }] }
        ],
        answer: "15 + 5 + 15 + 5 = **40 cm**."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Select 1 strategy from the list (levelling, bridging, compensation) to solve the problem. 32 children are playing and 24 more join. How many children are now playing?",
        interact: [
          { kind: "jumps", start: 32, end: 56, steps: [1, 4, 8, 10, 20], hint: "Bridging: jump 32 + 8 to the next ten (40), then + 16." },
          { kind: "scale", left: "32 + 24", right: "30 + ?", answer: 26 },
          { kind: "input", fields: [{ label: "Children playing", value: 56 }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Bridging", s: "32 + 8 = 40, then 40 + 16 = 56." }, { t: "Levelling", s: "Move 2 from 32 to 24: 30 + 26 = 56." }] },
        answer: "**56 children.** Any of the strategies works, for example bridging: 32 + 8 = 40, 40 + 16 = 56."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Identify and record an object you could measure the length of using the personal benchmark of a step.",
        interact: [{ kind: "select", hint: "Tap every object that is sensible to measure in steps.", items: [["the classroom", true], ["a corridor", true], ["the netball court", true], ["a pencil", false], ["an ant", false], ["a book", false]] }],
        answer: "Answers vary: long things, like the classroom, a corridor or a sports court. A step is about 1 metre."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "Remi recorded 6 multiplied by 5. Which number sentence shows this correctly?",
        options: ["6 + 5 = 11", "6 × 5 = 30", "5 × 6 = 25", "5 × 5 = 25"],
        answer: 1,
        explain: "6 multiplied by 5 is 6 × 5 = 30. 5 × 6 is also 30, so C has the wrong answer.",
        interact: [{ kind: "array", rows: 6, cols: 5, showTotal: true, hint: "6 rows of 5. Rotate it to see 5 rows of 6." }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Identify the fraction needed to complete the whole.",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1], hint: "This strip is one whole. Count the parts that are not shaded." },
          { kind: "input", fields: [{ label: "Fraction needed", value: 0.5, placeholder: "a/b" }] }
        ],
        answer: "**[2/4]** (which is the same as [1/2]). 2 of the 4 quarters are shaded, so 2 more quarters complete the whole."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record 3 events that would each have a duration of approximately 20 minutes.",
        interact: [
          { kind: "clock", time: "9:00", drag: true },
          { kind: "select", hint: "Tap every event that takes about 20 minutes.", items: [["eating lunch", true], ["a short TV episode", true], ["walking to school", true], ["brushing your teeth", false], ["a whole school day", false], ["a sneeze", false]] }
        ],
        answer: "Answers vary, for example eating lunch, a short TV episode or walking to school. On the clock, 20 minutes is the long hand moving from 12 to 4."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Explain what is meant by an ‘efficient strategy’.",
        interact: [{ kind: "choose", rows: [{ t: "An efficient strategy is", options: ["a quick and accurate way to solve a problem", "always counting by ones", "the longest way to solve a problem"], a: 0 }] }],
        answer: "An efficient strategy is a **quick and accurate** way to solve a problem, with the fewest steps, often using friendly numbers like tens."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Estimate the perimeter of your maths workbook. Explain how you determined your estimation.",
        interact: [
          { kind: "sides", label: "Workbook, about 30 cm by 21 cm", view: [360, 440], fill: "#FFE9A8",
            poly: [[60, 40], [300, 40], [300, 400], [60, 400]],
            dims: [{ from: [62, 22], to: [298, 22] }, { from: [320, 42], to: [320, 398] }],
            labels: [{ x: 180, y: 16, t: "about 21 cm" }, { x: 328, y: 222, t: "about 30 cm", anchor: "start" }] },
          { kind: "input", fields: [{ label: "Estimate", min: 80, max: 120, suffix: "cm" }] }
        ],
        answer: "Answers vary. An A4 workbook is about 30 cm by 21 cm: 30 + 21 + 30 + 21 = about **100 cm**. Use a ruler or hand spans to estimate each side, then add them.",
        explain: "The drawing assumes an A4-size workbook (about 30 cm by 21 cm). Estimates from 80 to 120 cm are accepted."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "2 × 4 = 8 and 8 ÷ 4 = 2",
        answer: true,
        explain: "The array has 2 rows of 4 (8 counters). Sharing 8 into 4 columns gives 2 in each, so 8 ÷ 4 = 2.",
        interact: [{ kind: "array", rows: 2, cols: 4, showTotal: true }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "2-eighths of the chocolate bar are showing. Record the fraction of the chocolate bar that is hidden under the wrapper.",
        img: "u4-choc.png",
        interact: [
          { kind: "shade", parts: 8, pre: [0, 1], hint: "The whole bar has 8 equal pieces. The 2 shaded pieces are showing." },
          { kind: "input", fields: [{ label: "Hidden", value: 0.75, placeholder: "a/b" }] }
        ],
        answer: "**[6/8]** is hidden. 8 eighths make the whole bar, and 8 − 2 = 6."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Record how many minutes are in a quarter hour. Communicate your reasoning.",
        interact: [
          { kind: "clock", time: "3:00", drag: true },
          { kind: "input", fields: [{ label: "A quarter hour =", value: 15, suffix: "minutes" }] }
        ],
        answer: "**15 minutes**. An hour is 60 minutes, and a quarter of 60 is 15. The long hand moves from 12 to 3."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Choose the most efficient strategy to solve the following problem. Emma picked 34 flowers in the morning and 28 flowers in the afternoon. How many flowers did she pick in total?",
        interact: [
          { kind: "jumps", start: 34, end: 62, steps: [1, 2, 10, 30], hint: "Compensation: add 30, then take 2 away." },
          { kind: "scale", left: "34 + 28", right: "32 + ?", answer: 30 },
          { kind: "input", fields: [{ label: "Flowers in total", value: 62 }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Compensation", s: "28 is close to 30. 34 + 30 = 64, then take away the extra 2: 62." }, { t: "Levelling", s: "Move 2 from 34 to 28: 32 + 30 = 62." }] },
        answer: "**62 flowers.** Compensation is efficient: 34 + 30 = 64, then 64 − 2 = 62."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Record the length of the eraser in millimetres.",
        img: "u4-eraser.png",
        interact: [
          { kind: "marker", min: 0, max: 6, ticks: 1, minor: 10, target: 3, tol: 0.15, label: "end", msg: "Line up with the end of the eraser. Count the centimetres, then the millimetres." },
          { kind: "input", fields: [{ label: "Length", value: 30, suffix: "mm" }] }
        ],
        answer: "**30 mm** (3 cm). The eraser starts at 0 and ends at 3 cm, and each centimetre is 10 mm.",
        explain: "The length includes the white end of the eraser, which starts at 0 on the ruler."
      }
    ]
  ]
});
