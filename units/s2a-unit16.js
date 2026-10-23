/*
  Stage 2 Year A, Unit 16 — Review of learning (Term 4, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 4, ls: 1, unit: 16,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 16 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "Which image shows a half?",
        img: "u16-halves.png",
        options: ["A", "B", "C", "D"],
        answer: 0,
        explain: "A is split into 2 equal parts with 1 part shaded: one half. B has both halves shaded (the whole). C shows [1/3] and D shows [1/4].",
        interact: [{ kind: "shade", parts: 2, hint: "This strip has 2 equal parts. Shade one half. Which picture matches?" }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "How many parts make a whole: a) eighths b) quarters c) halves?",
        interact: [
          { kind: "fold", max: 3, target: 8 },
          { kind: "input", fields: [{ label: "a) eighths", value: 8 }, { label: "b) quarters", value: 4 }, { label: "c) halves", value: 2 }] }
        ],
        answer: "a) **8 eighths** b) **4 quarters** c) **2 halves** make one whole. The name of the part tells how many equal parts the whole is split into."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Write 3 equivalent number sentences for 45 − 17.",
        interact: [
          { kind: "jumps", start: 17, end: 45, steps: [1, 3, 10], hint: "Count on from 17 to 45 to find the difference. Then move both numbers by the same amount." },
          { kind: "expr", count: 3, target: 28, placeholder: "e.g. 48 - 20", sample: ["48 - 20", "50 - 22", "40 - 12"] }
        ],
        answer: "Answers vary. 45 − 17 = **28**, so any sentence that equals 28 works, for example **48 − 20**, **50 − 22**, **40 − 12** or 20 + 8. Adding or taking the same amount from both numbers keeps the difference the same."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Order the following lengths from shortest to longest: 1020 cm, 1 m 25 cm, 300 cm, 2 m 85 cm.",
        interact: [
          { kind: "numberline", min: 0, max: 11, labelStep: 1, items: [["1020 cm", 10.2], ["1 m 25 cm", 1.25], ["300 cm", 3], ["2 m 85 cm", 2.85]] },
          { kind: "order", items: ["1020 cm", "1 m 25 cm", "300 cm", "2 m 85 cm"], answer: [1, 3, 2, 0] }
        ],
        answer: "**1 m 25 cm, 2 m 85 cm, 300 cm, 1020 cm**. Change them all to the same unit: 125 cm, 285 cm, 300 cm, 1020 cm. 1020 cm is 10 m 20 cm."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Estimate in minutes how long the following events take: recess, brushing your teeth, travelling to school, eating breakfast.",
        interact: [{ kind: "choose", rows: [
          { t: "Recess", options: ["about 2 minutes", "about 10 minutes", "about 30 minutes", "about 3 hours"], a: [2, 1] },
          { t: "Brushing your teeth", options: ["about 2 minutes", "about 10 minutes", "about 30 minutes", "about 3 hours"], a: 0 },
          { t: "Travelling to school", options: ["about 2 minutes", "about 10 minutes", "about 30 minutes", "about 3 hours"], a: [1, 0, 2] },
          { t: "Eating breakfast", options: ["about 2 minutes", "about 10 minutes", "about 30 minutes", "about 3 hours"], a: [1, 2] }] }],
        answer: "Answers vary. Recess: **about 20 to 30 minutes** · brushing your teeth: **about 2 minutes** · travelling to school: depends on how far you live, often **5 to 30 minutes** · eating breakfast: **about 10 to 15 minutes**.",
        explain: "These are estimates, so more than one choice is accepted for recess, travelling and breakfast. Only 3 hours is ruled out for every event."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "If [1/4] of a length is shaded, then shading another [2/4] will make the whole length.",
        answer: false,
        explain: "[1/4] + [2/4] = [3/4]. The whole is [4/4], so one more quarter is still unshaded. It needs another [3/4], not [2/4].",
        interact: [{ kind: "shade", parts: 4, pre: [0], hint: "One quarter is shaded. Shade 2 more quarters. Is the whole strip shaded?" }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "What do you know about folding halves that can help you when folding quarters and eighths?",
        interact: [
          { kind: "fold", max: 3 },
          { kind: "choose", rows: [
            { t: "Fold halves in half again to make", options: ["quarters", "thirds", "eighths"], a: 0 },
            { t: "Fold quarters in half again to make", options: ["eighths", "sixths", "tenths"], a: 0 }] }
        ],
        answer: "Each new fold in half doubles the number of equal parts. **Fold once: 2 halves. Fold the halves in half: 4 quarters. Fold the quarters in half: 8 eighths.** A quarter is half of a half, and an eighth is half of a quarter."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Apply the compensation strategy to solve 76 − 48.",
        interact: [
          { kind: "jumps", start: 76, back: true, steps: [2, 10, 50], hint: "Jump back 50 (a tidy number). Then jump forward 2, because 50 is 2 more than 48." },
          { kind: "input", fields: [{ label: "76 − 50 =", value: 26 }, { label: "26 + 2 =", value: 28 }, { label: "76 − 48 =", value: 28 }] }
        ],
        answer: "**28**. 48 is close to 50. 76 − 50 = 26. I took away 2 too many, so add 2 back: 26 + 2 = 28."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Name 3 lengths that could be recorded using millimetres.",
        interact: [{ kind: "select", hint: "Tap every length that is small enough to record in millimetres.", items: [
          ["The length of an ant", true], ["The thickness of a 10c coin", true], ["The width of a fingernail", true], ["The length of a paper clip", true],
          ["The length of the school oval", false], ["The distance from Sydney to Newcastle", false]] }],
        answer: "Answers vary, for example: the **length of an ant**, the **thickness of a coin**, the **width of a fingernail**, the length of a paper clip. Millimetres are for short lengths, or when we need to be very accurate."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: 2D shapes",
        prompt: "A quadrilateral has four sides, two pairs of parallel sides and all angles are equal. What is the name of the quadrilateral and how do you know?",
        interact: [
          { kind: "corners", view: [760, 250], label: "Rectangle A, rhombus B, parallelogram C and trapezium D", shapes: [
            { l: "A", fill: "#8BE0FF", lx: 95, ly: 238, p: [[20, 60], [170, 60], [170, 190], [20, 190]] },
            { l: "B", fill: "#7FD6CC", lx: 285, ly: 238, p: [[285, 30], [345, 110], [285, 190], [225, 110]] },
            { l: "C", fill: "#D7DCFF", lx: 480, ly: 238, p: [[430, 60], [570, 60], [530, 190], [390, 190]] },
            { l: "D", fill: "#B48CD8", lx: 670, ly: 238, p: [[630, 60], [710, 60], [750, 190], [590, 190]] }] },
          { kind: "choose", rows: [
            { t: "The quadrilateral is a", options: ["rectangle", "rhombus", "parallelogram", "trapezium"], a: 0 },
            { t: "How do you know?", options: ["All 4 angles are right angles and opposite sides are parallel", "It has only one pair of parallel sides", "All sides are equal but the angles are not"], a: 0 }] }
        ],
        answer: "A **rectangle**. It has 2 pairs of parallel sides, and all 4 angles are equal: each is a right angle (4 × 90° = 360°). A rhombus and a parallelogram also have 2 pairs of parallel sides, but their angles are not all equal.",
        explain: "A square also fits the description, because a square is a special rectangle. Square is not offered as a choice, so rectangle is the one answer."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "How many more fifths are needed to make the whole length? 2 fifths are shown.",
        options: ["[4/5]", "[1/5]", "[3/5]", "[2/5]"],
        answer: 2,
        explain: "The whole is [5/5]. [2/5] are shown, and 5 − 2 = 3, so [3/5] more are needed.",
        interact: [{ kind: "shade", parts: 5, pre: [0, 1], hint: "2 fifths are shaded. Shade more fifths until the whole length is shaded." }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Answer true or false: a) [1/3] is less than [1/2] b) [2/3] is closer to 1 than [1/3] is c) [2/3] is larger than [1/2]",
        interact: [
          { kind: "shade", parts: 2, hint: "Halves. Shade one half." },
          { kind: "shade", parts: 3, hint: "Thirds. Shade one third, then two thirds." },
          { kind: "choose", rows: [
            { t: "a) [1/3] is less than [1/2]", options: ["True", "False"], a: 0 },
            { t: "b) [2/3] is closer to 1 than [1/3] is", options: ["True", "False"], a: 0 },
            { t: "c) [2/3] is larger than [1/2]", options: ["True", "False"], a: 0 }] }
        ],
        answer: "a) **True**: the more parts a whole is split into, the smaller each part, so a third is smaller than a half. b) **True**: [2/3] is only [1/3] away from 1, but [1/3] is [2/3] away. c) **True**: [2/3] is more than half of the strip."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Using a number line, solve 109 + 87.",
        interact: [
          { kind: "jumps", start: 109, steps: [1, 10, 80], hint: "Start at 109. Jump 1 to make 110, then jump on the rest of 87." },
          { kind: "input", fields: [{ label: "109 + 87 =", value: 196 }] }
        ],
        answer: "**196**. For example: 109 + 1 = 110, 110 + 80 = 190, 190 + 6 = 196. (1 + 80 + 6 = 87.)"
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "a) How many millimetres in a centimetre? b) How many centimetres in a metre?",
        interact: [
          { kind: "marker", min: 0, max: 3, ticks: 1, minor: 10, label: "end", hint: "Each big mark is 1 cm. Count the small millimetre marks between 0 and 1 cm." },
          { kind: "input", fields: [{ label: "a) 1 cm =", value: 10, suffix: "mm" }, { label: "b) 1 m =", value: 100, suffix: "cm" }] }
        ],
        answer: "a) **10 mm** = 1 cm b) **100 cm** = 1 m. (So 1 m = 1000 mm.)"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: 3D objects",
        prompt: "Sketch the net of this prism.",
        img: "u16-prism.png",
        interact: [
          { kind: "sketch", grid: "square" },
          { kind: "choose", rows: [
            { t: "How many faces does the net need?", options: ["6", "4", "8"], a: 0 },
            { t: "The faces are", options: ["rectangles", "triangles", "circles"], a: 0 }] }
        ],
        answer: "The prism is a **rectangular prism**, so its net has **6 rectangles**: a row of 4 (front, side, back, side) with the top and bottom attached to one of them. Opposite faces match in size. Other arrangements work too, as long as it folds into the prism."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "Liam cuts a ribbon into 3 pieces. Each piece is the same length. Liam says he has divided the ribbon into thirds.",
        answer: true,
        explain: "Thirds are 3 equal parts of a whole. Each piece is the same length, so each is [1/3] of the ribbon.",
        interact: [{ kind: "shade", parts: 3, hint: "The ribbon is cut into 3 equal pieces. Tap one piece. What fraction is it?" }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Answer true or false: a) [1/3] is less than [2/5] b) [1/3] is larger than [1/5] c) [2/5] is closer to [1/2] than [1/3] is",
        interact: [
          { kind: "numberline", min: 0, max: 1, ticks: 0, labelStep: 1, tol: 0.04, items: [["[1/5]", 0.2], ["[1/3]", 1 / 3], ["[2/5]", 0.4], ["[1/2]", 0.5]] },
          { kind: "choose", rows: [
            { t: "a) [1/3] is less than [2/5]", options: ["True", "False"], a: 0 },
            { t: "b) [1/3] is larger than [1/5]", options: ["True", "False"], a: 0 },
            { t: "c) [2/5] is closer to [1/2] than [1/3] is", options: ["True", "False"], a: 0 }] }
        ],
        answer: "a) **True**: [1/3] is a bit more than [1/4] and [2/5] is a bit less than [1/2], so [1/3] < [2/5]. b) **True**: thirds are bigger parts than fifths. c) **True**: on the number line, [2/5] sits just before [1/2]; [1/3] is further away.",
        explain: "The slide's last statement read '[2/5] is closer to [1/2] than [1/3]', which could also mean '[2/5] is closer to [1/2] than it is to [1/3]' (that would be false). It has been reworded to '… than [1/3] is' so there is one answer: true ([2/5] is [1/10] from [1/2]; [1/3] is [1/6] from [1/2])."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "a) $5 is the same as ? cents. b) 400 cents is the same as $?. c) $7.60 is the same as ? cents. d) 300 cents is the same as $?.",
        interact: [
          { kind: "coins", target: 400, hint: "Make 400 cents with coins. How many dollars is that?" },
          { kind: "input", fields: [
            { label: "a) $5 =", value: 500, suffix: "cents" },
            { label: "b) 400 cents =", accept: ["$4", "4", "$4.00", "4.00"], placeholder: "$" },
            { label: "c) $7.60 =", value: 760, suffix: "cents" },
            { label: "d) 300 cents =", accept: ["$3", "3", "$3.00", "3.00"], placeholder: "$" }] }
        ],
        answer: "a) **500 cents** b) **$4** c) **760 cents** d) **$3**. There are 100 cents in $1, so $7.60 = 700 cents + 60 cents = 760 cents."
      },
      {
        type: "sr", focus: "Geometric measure A: Length",
        prompt: "Order the following lengths from longest to shortest: 295 cm, 3 m 5 cm, 375 cm, 1 m 95 cm.",
        interact: [
          { kind: "numberline", min: 0, max: 4, labelStep: 1, ticks: 10, tol: 0.15, items: [["295 cm", 2.95], ["3 m 5 cm", 3.05], ["375 cm", 3.75], ["1 m 95 cm", 1.95]] },
          { kind: "order", items: ["295 cm", "3 m 5 cm", "375 cm", "1 m 95 cm"], answer: [2, 1, 0, 3] }
        ],
        answer: "**375 cm, 3 m 5 cm, 295 cm, 1 m 95 cm**. In centimetres: 375, 305, 295, 195. Careful: 3 m 5 cm is 305 cm, not 350 cm."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A: Area",
        prompt: "Estimate and then record the area of the rectangle.",
        interact: [
          { kind: "areagrid", size: 48, cells: ["111111111", "111111111", "111111111", "111111111", "111111111", "111111111", "111111111"] },
          { kind: "input", fields: [
            { label: "Estimate", min: 1, max: 200, suffix: "squares" },
            { label: "Area", value: 63, suffix: "squares" }] }
        ],
        answer: "**63 squares**. The rectangle is 9 squares long and 7 squares wide: 7 rows of 9, 7 × 9 = 63. Estimates vary.",
        explain: "Read from the slide's grid: the rectangle covers 9 squares across and 7 squares down. On the slide its edges sit slightly off the grid lines; here it is drawn exactly on the squares."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "What are the related facts for this array of 4 rows of 7?",
        options: ["4 × 7 = 28, 7 × 4 = 28, 28 ÷ 4 = 7, 28 ÷ 7 = 4", "4 × 8 = 32, 8 × 4 = 32, 32 ÷ 4 = 8, 32 ÷ 8 = 4", "4 × 7 = 25, 7 × 4 = 25, 25 ÷ 4 = 7, 25 ÷ 7 = 4", "3 × 7 = 28, 7 × 3 = 28, 28 ÷ 3 = 7, 28 ÷ 7 = 4"],
        answer: 0,
        explain: "4 rows of 7 is 28. The fact family uses 4, 7 and 28: 4 × 7 = 28, 7 × 4 = 28, 28 ÷ 4 = 7, 28 ÷ 7 = 4. B is a 4 by 8 array, C has the wrong total and D uses 3 rows.",
        interact: [{ kind: "array", rows: 4, cols: 7, showTotal: true, hint: "4 rows of 7. Turn it around to see 7 × 4." }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Label the number line with the fractions.",
        interact: [{ kind: "numberline", min: 0, max: 1, ticks: 6, labelStep: 1, tol: 0.05, items: [["[1/6]", 1 / 6], ["[2/6]", 2 / 6], ["[3/6]", 3 / 6], ["[4/6]", 4 / 6], ["[5/6]", 5 / 6], ["[6/6]", 1]] }],
        answer: "The line from 0 to 1 is split into 6 equal parts: **[1/6], [2/6], [3/6], [4/6], [5/6]** and **[6/6]** at 1. [6/6] is one whole.",
        explain: "The slide shows six [1/6] pieces laid along the line. Here the class labels each mark by counting the sixths."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Heather went to the canteen and bought a cupcake for $3 and 75 cents. How much change did she receive from $10?",
        cubes: { ops: ["−"], solve: [{ t: "Count on", s: "$3.75 + 25c = $4.00, + $6 = $10. Change is $6 + 25c = $6.25." }, { t: "Take away", s: "$10.00 − $3.00 = $7.00, $7.00 − 75c = $6.25." }] },
        interact: [
          { kind: "jumps", money: true, start: 3.75, end: 10, steps: [0.25, 1], hint: "Count on from $3.75 to $10. Jump to $4 first." },
          { kind: "input", fields: [{ label: "Change", accept: ["$6.25", "6.25"], placeholder: "$" }] }
        ],
        answer: "**$6.25**. $3.75 + 25c = $4, and $4 + $6 = $10, so the change is $6.25."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Name items that have an estimated mass: more than 1 kg, the same as 1 kg, less than 1 kg.",
        interact: [{ kind: "choose", rows: [
          { t: "A school bag full of books", options: ["more than 1 kg", "the same as 1 kg", "less than 1 kg"], a: 0 },
          { t: "A 1 kg bag of flour", options: ["more than 1 kg", "the same as 1 kg", "less than 1 kg"], a: 1 },
          { t: "An apple", options: ["more than 1 kg", "the same as 1 kg", "less than 1 kg"], a: 2 },
          { t: "A full 1 litre bottle of water", options: ["more than 1 kg", "the same as 1 kg", "less than 1 kg"], a: 1 },
          { t: "A watermelon", options: ["more than 1 kg", "the same as 1 kg", "less than 1 kg"], a: 0 },
          { t: "A pencil", options: ["more than 1 kg", "the same as 1 kg", "less than 1 kg"], a: 2 }] }],
        answer: "Answers vary. More than 1 kg: a full school bag, a watermelon, a chair. The same as 1 kg: a 1 kg bag of flour or sugar, a 1 litre bottle of water. Less than 1 kg: an apple, a pencil, a glue stick."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Write a sentence explaining what 'possible' and 'likely' mean in a chance experiment.",
        interact: [{ kind: "choose", rows: [
          { t: "Possible means", options: ["it can happen", "it will definitely happen", "it can never happen"], a: 0 },
          { t: "Likely means", options: ["it will probably happen", "it can never happen", "it will definitely happen"], a: 0 },
          { t: "Rolling a number less than 6 on a dice is", options: ["likely", "impossible", "unlikely"], a: 0 },
          { t: "Rolling a 6 on a dice is", options: ["possible but unlikely", "impossible", "certain"], a: 0 }] }],
        answer: "**Possible** means something can happen, even if the chance is small. **Likely** means it will probably happen: there is a good chance. For example, rolling a 6 is possible but unlikely; rolling a number less than 6 is likely."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "A square number is the result of multiplying a number by itself. Communicate your reasoning.",
        answer: true,
        explain: "4 × 4 = 16, so 16 is a square number. Its array has the same number of rows and columns, so it makes a square.",
        interact: [{ kind: "array", rows: 4, cols: 4, showTotal: true, hint: "4 rows of 4. Change the array so the rows and columns stay equal." }]
      },
      {
        type: "sr", focus: "Partitioned fractions B",
        prompt: "Use the fraction wall. Record a fraction equivalent to: a) [1/2] b) [4/5] c) [2/3] d) [3/4]",
        img: "u16-wall.png",
        interact: [{ kind: "input", fields: [
          { label: "a) [1/2] =", accept: ["2/4", "3/6", "4/8", "5/10", "6/12", "10/20"], placeholder: "?/?" },
          { label: "b) [4/5] =", accept: ["8/10", "12/15", "16/20"], placeholder: "?/?" },
          { label: "c) [2/3] =", accept: ["4/6", "6/9", "8/12"], placeholder: "?/?" },
          { label: "d) [3/4] =", accept: ["6/8", "9/12", "12/16"], placeholder: "?/?" }] }],
        answer: "a) **[2/4], [3/6], [4/8]** or **[5/10]** b) **[8/10]** c) **[4/6]** d) **[6/8]**. On the wall, equivalent fractions end at the same place."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Ryan went to the canteen and bought a custard cup, an egg salad, a frozen fruit and a flavoured milk for lunch. How much did Ryan spend? What was his change from $20?",
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then subtract", s: "90c + $7.00 + $1.00 + $2.00 = $10.90. $20.00 − $10.90 = $9.10." }, { t: "Round and adjust", s: "Custard cup is 10c less than $1: $1 + $7 + $1 + $2 = $11, so the total is $10.90. Count on: $10.90 + 10c = $11, + $9 = $20. Change is $9.10." }] },
        interact: [
          { kind: "shop", pick: 4, budget: 20, hint: "Tap the custard cup, egg salad, frozen fruit and flavoured milk.", items: [["Banana muffin", 1], ["Energy choc balls", 0.5], ["Popcorn", 0.45], ["Custard cup", 0.9], ["Jelly cup", 0.7], ["Breadsticks", 0.25], ["Fruit", 0.6], ["Greek salad", 6.5], ["Garden salad", 6], ["Chicken salad", 8], ["Tuna salad", 8], ["Egg salad", 7], ["Fruit salad", 4.5], ["Chicken burger", 5.5], ["Beef burger", 5.5], ["Chicken wrap", 6], ["Beef lasagna", 5], ["Cheese pizza", 3.5], ["Sausage roll", 4], ["Juice tub", 1.5], ["Frozen fruit", 1], ["Sweet stick", 1], ["Frozen yoghurt", 2], ["Juice", 2.5], ["Flavoured milk", 2], ["Water 600 mL", 2], ["Egg sandwich", 2], ["Ham sandwich", 3], ["Salad sandwich", 4], ["Cheese sandwich", 2]] },
          { kind: "input", fields: [
            { label: "Ryan spent", accept: ["$10.90", "10.90", "10.9", "$10.9"], placeholder: "$" },
            { label: "Change from $20", accept: ["$9.10", "9.10", "9.1", "$9.1"], placeholder: "$" }] }
        ],
        answer: "Ryan spent **$10.90** (90c + $7.00 + $1.00 + $2.00). His change from $20 was **$9.10**.",
        explain: "Prices read from the slide's canteen menu: custard cup 90c, egg salad $7.00, frozen fruit $1.00, flavoured milk $2.00."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Mass",
        prompt: "Name 3 items that have a mass of about one kilogram.",
        interact: [{ kind: "select", hint: "Tap every item that has a mass of about 1 kg.", items: [
          ["A 1 litre bottle of water", true], ["A bag of sugar", true], ["A pineapple", true], ["A large dictionary", true],
          ["A paper clip", false], ["A car", false], ["A feather", false]] }],
        answer: "Answers vary, for example: a **1 litre bottle of water**, a **1 kg bag of sugar or flour**, a **pineapple**, a large dictionary. Check by comparing with a 1 kg mass on a balance."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A: Volume",
        prompt: "Name 3 familiar everyday containers that hold one litre.",
        interact: [{ kind: "select", hint: "Tap every container that holds about 1 litre.", items: [
          ["A carton of milk", true], ["A large bottle of juice", true], ["A 1 litre measuring jug", true], ["A large water bottle", true],
          ["A teaspoon", false], ["A bathtub", false], ["A drink can", false]] }],
        answer: "Answers vary, for example: a **milk carton**, a **juice bottle**, a **1 litre measuring jug** or a large water bottle. A drink can holds about 375 mL, much less than 1 litre."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "What are the related facts for this fact triangle?",
        img: "u16-triangle.png",
        options: ["4 × 7 = 28, 7 × 4 = 28, 28 ÷ 4 = 7, 28 ÷ 7 = 4", "4 × 6 = 32, 6 × 4 = 32, 32 ÷ 4 = 6, 32 ÷ 6 = 4", "6 × 4 = 24, 4 × 6 = 24, 24 ÷ 6 = 4, 24 ÷ 4 = 6", "6 × 7 = 28, 6 × 3 = 28, 29 ÷ 3 = 7, 27 ÷ 7 = 4"],
        answer: 2,
        explain: "The triangle shows 24 at the top and 6 and 4 at the bottom: 6 × 4 = 24, 4 × 6 = 24, 24 ÷ 6 = 4, 24 ÷ 4 = 6. A uses 28, B says 4 × 6 = 32 (false), and D has facts that are not true.",
        interact: [{ kind: "array", rows: 4, cols: 6, showTotal: true, hint: "4 rows of 6 makes 24. Share the 24 into 4 rows, or into 6 columns." }]
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Continue the patterns: a) 5, 10, 15, … b) 16, 12, 8, … c) 12, 14, 16, …",
        interact: [
          { kind: "cells", cols: 8, w: 56, msg: "a) counts on by 5, b) counts back by 4, c) counts on by 2.", grid: [
            [5, 10, 15, { v: 20 }, { v: 25 }, { v: 30 }, { v: 35 }, { v: 40 }],
            [16, 12, 8, { v: 4 }, { v: 0 }, null, null, null],
            [12, 14, 16, { v: 18 }, { v: 20 }, { v: 22 }, { v: 24 }, { v: 26 }]] }
        ],
        answer: "a) **20, 25, 30, 35, 40** (count on by 5) b) **4, 0** (count back by 4) c) **18, 20, 22, 24, 26** (count on by 2)."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Koby has $12.50 to spend at the canteen. Create a list of items he could buy that adds up as close as possible to $12.50.",
        cubes: { ops: ["+", "−"], also: "Take each price away from $12.50 to see how much Koby has left to spend.", solve: [{ t: "Start with a big item", s: "Chicken salad $8.00. $12.50 − $8.00 = $4.50 left. Fruit salad is $4.50. $8.00 + $4.50 = $12.50." }, { t: "Pair two items", s: "Greek salad $6.50 + chicken wrap $6.00 = $12.50 exactly." }] },
        interact: [
          { kind: "shop", budget: 12.5, hint: "Tap items to put them in Koby's basket. Get as close to $12.50 as you can without going over.", items: [["Banana muffin", 1], ["Energy choc balls", 0.5], ["Popcorn", 0.45], ["Custard cup", 0.9], ["Jelly cup", 0.7], ["Breadsticks", 0.25], ["Fruit", 0.6], ["Greek salad", 6.5], ["Garden salad", 6], ["Chicken salad", 8], ["Tuna salad", 8], ["Egg salad", 7], ["Fruit salad", 4.5], ["Chicken burger", 5.5], ["Beef burger", 5.5], ["Chicken wrap", 6], ["Beef lasagna", 5], ["Cheese pizza", 3.5], ["Sausage roll", 4], ["Juice tub", 1.5], ["Frozen fruit", 1], ["Sweet stick", 1], ["Frozen yoghurt", 2], ["Juice", 2.5], ["Flavoured milk", 2], ["Water 600 mL", 2], ["Egg sandwich", 2], ["Ham sandwich", 3], ["Salad sandwich", 4], ["Cheese sandwich", 2]] },
          { kind: "input", fields: [{ label: "Closest total", accept: ["$12.50", "12.50", "12.5", "$12.5"], placeholder: "$" }] }
        ],
        answer: "Answers vary. Koby can spend **exactly $12.50**, for example: chicken salad $8.00 + fruit salad $4.50 · Greek salad $6.50 + chicken wrap $6.00 · chicken burger $5.50 + egg salad $7.00 · beef lasagna $5.00 + juice $2.50 + sausage roll $4.00 + banana muffin $1.00.",
        explain: "Prices read from the slide's canteen menu. Several lists make exactly $12.50, so the closest total is $12.50."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "Why do we need a formal unit smaller than the kilogram? Name 3 items that can be measured in grams.",
        interact: [
          { kind: "choose", rows: [{ t: "We need grams because", options: ["many objects are much lighter than 1 kilogram", "kilograms are too small", "grams measure length"], a: 0 }] },
          { kind: "select", hint: "Tap every item that would be measured in grams.", items: [
            ["An apple", true], ["A slice of bread", true], ["A letter", true], ["A pencil", true],
            ["A car", false], ["A bag of cement", false], ["A person", false]] }
        ],
        answer: "Many objects are **much lighter than 1 kg**, so a smaller unit lets us measure them accurately. 1 kg = 1000 g. Answers vary for items, for example: an **apple**, a **slice of bread**, a **letter**, a pencil."
      },
      {
        type: "sr", focus: "Geometric measure A: Angles",
        prompt: "Identify 3 angles found in the classroom. For example, the angle between the arms of the clock.",
        interact: [
          { kind: "angle", hint: "Drag the arm to copy an angle you can see in the classroom." },
          { kind: "select", hint: "Tap every place where you can find an angle.", items: [
            ["Between the arms of the clock", true], ["The corner of a book", true], ["Where two walls meet", true], ["Between the blades of open scissors", true], ["An open door and its frame", true],
            ["The edge of a round plate", false], ["The middle of a blank wall", false]] }
        ],
        answer: "Answers vary, for example: the **corner of a book**, where **two walls meet**, the blades of **open scissors**, an **open door** and its frame, the hands of the clock. An angle is the amount of turn between two arms that meet at a point."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Fact families help us recall number facts quickly by showing the inverse relationship between multiplication and division, and how the commutative property works in multiplication.",
        answer: true,
        explain: "The fact family for 4, 6 and 24 is 4 × 6 = 24, 6 × 4 = 24 (turnaround, commutative), 24 ÷ 4 = 6 and 24 ÷ 6 = 4 (division undoes multiplication, inverse). Knowing one fact gives you all four.",
        interact: [{ kind: "array", rows: 4, cols: 6, showTotal: true, hint: "4 rows of 6. Read it as 6 × 4 too, then share 24 into 4 rows." }]
      },
      {
        type: "sr", focus: "Partitioned fractions A",
        prompt: "Record the complementary fractional part to recreate the whole: a) 3 quarters b) one-half c) 5 eighths d) 2 quarters e) 3 tenths f) 7 eighths",
        interact: [
          { kind: "shade", parts: 4, pre: [0, 1, 2] },
          { kind: "shade", parts: 2, pre: [0] },
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4] },
          { kind: "shade", parts: 4, pre: [0, 1] },
          { kind: "shade", parts: 10, pre: [0, 1, 2] },
          { kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5, 6] },
          { kind: "input", fields: [
            { label: "a) 3 quarters +", accept: ["1/4", "1 quarter", "one quarter"], placeholder: "?/?" },
            { label: "b) one-half +", accept: ["1/2", "2/4", "one half", "one-half"], placeholder: "?/?" },
            { label: "c) 5 eighths +", accept: ["3/8", "3 eighths", "three eighths"], placeholder: "?/?" },
            { label: "d) 2 quarters +", accept: ["2/4", "1/2", "2 quarters", "two quarters"], placeholder: "?/?" },
            { label: "e) 3 tenths +", accept: ["7/10", "7 tenths", "seven tenths"], placeholder: "?/?" },
            { label: "f) 7 eighths +", accept: ["1/8", "1 eighth", "one eighth"], placeholder: "?/?" }] }
        ],
        answer: "a) **[1/4]** b) **[1/2]** c) **[3/8]** d) **[2/4]** e) **[7/10]** f) **[1/8]**. The two parts together make one whole: [4/4], [2/2], [8/8] or [10/10]."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "You bought something from the canteen and received $2.50 in change. What might you have bought if you started with $10? List the possibilities.",
        cubes: { ops: ["−", "+"], also: "First find how much was spent: $10 − $2.50. Then find items that add to that amount.", solve: [{ t: "Find the amount spent", s: "$10.00 − $2.50 = $7.50. Egg salad $7.00 + energy choc balls 50c = $7.50." }, { t: "Count on from the change", s: "$2.50 + $7.50 = $10. Chicken burger $5.50 + flavoured milk $2.00 = $7.50." }] },
        interact: [
          { kind: "shop", budget: 10, hint: "Tap items until there is $2.50 left from $10.", items: [["Banana muffin", 1], ["Energy choc balls", 0.5], ["Popcorn", 0.45], ["Custard cup", 0.9], ["Jelly cup", 0.7], ["Breadsticks", 0.25], ["Fruit", 0.6], ["Greek salad", 6.5], ["Garden salad", 6], ["Chicken salad", 8], ["Tuna salad", 8], ["Egg salad", 7], ["Fruit salad", 4.5], ["Chicken burger", 5.5], ["Beef burger", 5.5], ["Chicken wrap", 6], ["Beef lasagna", 5], ["Cheese pizza", 3.5], ["Sausage roll", 4], ["Juice tub", 1.5], ["Frozen fruit", 1], ["Sweet stick", 1], ["Frozen yoghurt", 2], ["Juice", 2.5], ["Flavoured milk", 2], ["Water 600 mL", 2], ["Egg sandwich", 2], ["Ham sandwich", 3], ["Salad sandwich", 4], ["Cheese sandwich", 2]] },
          { kind: "input", fields: [{ label: "Amount spent", accept: ["$7.50", "7.50", "7.5", "$7.5"], placeholder: "$" }] }
        ],
        answer: "You spent **$7.50** ($10 − $2.50). Answers vary, for example: egg salad $7.00 + energy choc balls 50c · chicken burger $5.50 + flavoured milk $2.00 · Greek salad $6.50 + banana muffin $1.00 · garden salad $6.00 + juice tub $1.50 · beef lasagna $5.00 + juice $2.50 · cheese pizza $3.50 + sausage roll $4.00.",
        explain: "Prices read from the slide's canteen menu."
      },
      {
        type: "sr", focus: "Non-spatial measure B: Mass",
        prompt: "Sandra has a bag of rice that weighs 1.5 kilograms. Her friend says it weighs 1 kg and 500 g. Are they both correct? Explain your reasoning.",
        cubes: { ops: ["+"], also: "1 kg = 1000 g, so half a kilogram is 500 g.", solve: [{ t: "Split the kilograms", s: "1.5 kg = 1 kg + 0.5 kg. Half of 1000 g is 500 g, so 1.5 kg = 1 kg 500 g." }, { t: "Change to grams", s: "1.5 kg = 1500 g. 1 kg 500 g = 1000 g + 500 g = 1500 g. They are the same." }] },
        interact: [
          { kind: "jumps", start: 0, steps: [500, 1000], hint: "Each jump is in grams. Jump 1000 g (1 kg), then 500 g." },
          { kind: "choose", rows: [{ t: "Are they both correct?", options: ["Yes", "No"], a: 0 }] },
          { kind: "input", fields: [{ label: "1.5 kg =", value: 1500, suffix: "g" }] }
        ],
        answer: "**Yes, they are both correct.** 1.5 kg means 1 and a half kilograms. Half a kilogram is 500 g, so 1.5 kg = 1 kg 500 g = **1500 g**."
      },
      {
        type: "sr", focus: "Non-spatial measure A: Time",
        prompt: "Read the following times to the minute: clock 1, clock 2, clock 3, clock 4 and clock 5.",
        interact: [
          { kind: "clock", time: "10:30" },
          { kind: "clock", time: "10:15" },
          { kind: "clock", time: "1:15" },
          { kind: "clock", time: "6:00" },
          { kind: "clock", time: "6:45" },
          { kind: "input", fields: [
            { label: "Clock 1", accept: ["10:30", "half past 10", "half past ten", "half-past 10"], placeholder: "h:mm" },
            { label: "Clock 2", accept: ["10:15", "quarter past 10", "quarter past ten"], placeholder: "h:mm" },
            { label: "Clock 3", accept: ["1:15", "quarter past 1", "quarter past one"], placeholder: "h:mm" },
            { label: "Clock 4", accept: ["6:00", "6 o'clock", "six o'clock", "6"], placeholder: "h:mm" },
            { label: "Clock 5", accept: ["6:45", "quarter to 7", "quarter to seven"], placeholder: "h:mm" }] }
        ],
        answer: "Clock 1: **10:30** (half past 10) · Clock 2: **10:15** (quarter past 10) · Clock 3: **1:15** (quarter past 1) · Clock 4: **6:00** (6 o'clock) · Clock 5: **6:45** (quarter to 7)",
        explain: "Times read from the slide's clocks. The slide's hour hands were drawn loosely (clock 2's points at the 10 and clock 5's points at the 7), so the clocks are redrawn with the hour hand in the right place for each time."
      }
    ]
  ]
});
