/*
  Stage 3 Year B, Unit 36 — Review of learning (Term 4, learning sequence 1: Weeks 1–2).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 4, ls: 1, unit: 36,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 36 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "Liam drank [2/4] of a bottle of juice in the morning and [1/8] in the afternoon. How much of the juice did he drink in total?",
        options: ["[3/4]", "[5/8]", "[3/10]", "[4/8]"],
        answer: 1,
        explain: "[2/4] is the same as [4/8]. Then [4/8] + [1/8] = [5/8]. You can't add the tops and the bottoms: [3/12] or [3/10] would be less than he drank in the morning.",
        interact: [{ kind: "shade", parts: 8, hint: "The bottle is cut into eighths. Shade [2/4] (that's 4 eighths), then shade [1/8] more." }],
        cubes: { ops: ["+"], note: "Make the denominators the same before adding.", solve: [{ t: "Rename the quarters", s: "[2/4] = [4/8], so [4/8] + [1/8] = [5/8]." }, { t: "Use a picture", s: "Shade half a strip of 8 parts (4 parts), then 1 more part. 5 of the 8 parts are shaded: [5/8]." }] }
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Draw a picture or diagram to show an example of when [1/2] is larger than [3/4]. Label both fractions in your drawing and explain why the [1/2] is bigger.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "Use **different-sized wholes**. For example, [1/2] of a large pizza is more pizza than [3/4] of a small pizza. Draw a long strip cut in half and a much shorter strip cut into quarters: the half of the long strip is longer than 3 quarters of the short one.",
        explain: "Fractions can only be compared fairly when they are fractions of the same whole. When the wholes are different sizes, a smaller fraction can be a bigger amount."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Remy needed to solve 5988 + 955. Here is how she worked it out. What strategy did she use? Was it the most efficient strategy? Explain your reasoning.",
        img: "u36-remy-add.png",
        interact: [
          { kind: "jumps", start: 5988, steps: [2, 10, 12, 943, 955], hint: "Model Remy's thinking: jump +2 to 5990, then +10 to 6000. Or jump +12 straight to 6000." },
          { kind: "choose", rows: [{ t: "What strategy did she use?", options: ["Compensation: move an amount from one number to the other", "Split each number into place values", "Count back from 5988"], a: 0 }] },
          { kind: "input", fields: [{ label: "5988 + 955 =", value: 6943 }] }
        ],
        answer: "Remy used **compensation** (bridging to a friendly number): she moved 2 from 955 to make 5990 + 953, then 10 more to make 6000 + 943 = **6943**. It works, but moving **12 in one step** (5988 + 12 = 6000, 955 − 12 = 943) would be quicker.",
        explain: "Efficiency is a discussion point: her strategy is a good one, but she did it in two steps when one step of 12 would reach 6000 straight away."
      },
      {
        type: "sr", focus: "Non spatial measure B: Mass",
        prompt: "Nana Julie has a playdough recipe that requires 1276 g of flour. How many kilograms of flour is in the playdough?",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 1276, shift: true, hint: "There are 1000 g in 1 kg. Divide by 1000: every digit moves 3 places to the right." },
          { kind: "input", fields: [{ label: "1276 g =", value: 1.276, suffix: "kg" }] }
        ],
        cubes: { ops: ["÷"], solve: [{ t: "Divide by 1000", s: "1000 g = 1 kg, so 1276 g ÷ 1000 = 1.276 kg." }, { t: "Split it", s: "1276 g = 1000 g + 276 g = 1 kg + 0.276 kg = 1.276 kg." }] },
        answer: "**1.276 kg**. There are 1000 g in a kilogram, so divide 1276 by 1000."
      },
      {
        type: "sr", focus: "Non spatial measure B: Time",
        prompt: "Emma started reading her book at 3:17 pm and finished at 4:12 pm. How much time did she spend reading?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 917, end: 972, steps: [1, 3, 5, 10], hint: "Jump from 3:17 pm to 3:20 pm, then to 4:00 pm, then to 4:12 pm." },
          { kind: "input", fields: [{ label: "Time spent reading", value: 55, suffix: "minutes" }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Count on", s: "3:17 → 3:20 is 3 min, 3:20 → 4:00 is 40 min, 4:00 → 4:12 is 12 min. 3 + 40 + 12 = 55 minutes." }, { t: "Hour and back", s: "3:17 to 4:17 is 1 hour. 4:12 is 5 minutes earlier, so 60 − 5 = 55 minutes." }] },
        answer: "**55 minutes**. 3 minutes to 3:20, 40 minutes to 4:00 and 12 minutes to 4:12."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "Shannen and Jenni were baking pies for a school fundraiser. In the morning, Shannen baked [2/3] of the pies. In the afternoon, Jenni baked another [1/6] of the pies. Together they baked [5/6] of the total number of pies needed.",
        answer: true,
        explain: "[2/3] = [4/6]. Then [4/6] + [1/6] = [5/6], so the statement is true.",
        interact: [{ kind: "shade", parts: 6, hint: "The pies needed are cut into sixths. Shade [2/3] (4 sixths), then [1/6] more." }],
        cubes: { ops: ["+"], note: "Make the denominators the same before adding.", solve: [{ t: "Rename the thirds", s: "[2/3] = [4/6], so [4/6] + [1/6] = [5/6]." }, { t: "Use a picture", s: "Shade 4 of 6 parts for Shannen and 1 more part for Jenni: 5 of 6 parts are shaded." }] }
      },
      {
        type: "sr", focus: "Representing quantity fractions A",
        prompt: "Taj painted [1/4] of a wall and Idris painted [1/2] of a different wall. Taj said he had painted more than Idris. Explain how he could be correct.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "Taj could be correct if **his wall is much bigger** than Idris's wall. For example, [1/4] of a 20 m wall is 5 m, but [1/2] of a 6 m wall is only 3 m.",
        explain: "Draw a long wall cut into quarters and a short wall cut in half. The fraction only tells you the part of its own whole."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Remy needed to solve 4009 – 3997. Here is how she worked it out. What strategy did she use? Was it the most efficient strategy? Explain your reasoning.",
        img: "u36-remy-sub.png",
        interact: [
          { kind: "jumps", start: 3997, end: 4009, steps: [1, 3, 9, 10], hint: "Another way: count on from 3997 to 4000, then on to 4009." },
          { kind: "choose", rows: [{ t: "What strategy did she use?", options: ["Constant difference: add the same amount to both numbers", "Split each number into place values", "Rounding the answer"], a: 0 }] },
          { kind: "input", fields: [{ label: "4009 − 3997 =", value: 12 }] }
        ],
        answer: "Remy used **constant difference**: she added 3 to both numbers, so 4012 − 4000 = **12**. It is efficient, because the numbers are very close together. Counting on (3 to 4000, then 9 to 4009) is just as quick.",
        explain: "Adding the same amount to both numbers keeps the difference the same. Either strategy is a reasonable answer for 'most efficient' if the student explains it."
      },
      {
        type: "sr", focus: "Non spatial measure B: Mass",
        prompt: "Draw the table and fill in the missing grams, kilograms and tonnes.",
        interact: [
          { kind: "pv", cols: ["HTh", "TTh", "Th", "H", "T", "O", "t", "h", "th"], start: 10000, shift: true, hint: "1000 g = 1 kg and 1000 kg = 1 t. Divide by 1000 to go up a unit; multiply by 1000 to go down." },
          { kind: "cells", cols: 4, w: 150, free: true, msg: "1000 g = 1 kg and 1000 kg = 1 t.", grid: [["#Rubbish produced per person", "#Grams (g)", "#Kilograms (kg)", "#Tonnes (t)"], ["Per week", "10 000 g", { v: 10 }, { v: 0.01 }], ["Per year", { v: 520000 }, "520 kg", { v: 0.52 }]] }
        ],
        answer: "Per week: 10 000 g = **10 kg** = **0.01 t**. Per year: **520 000 g** = 520 kg = **0.52 t**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: Area",
        prompt: "The parallelogram has a base of 44 cm and a height of 36 cm. What is the area of this parallelogram? Record your solution.",
        interact: [
          { kind: "sketch", bgimg: "img/s3/u36-para.png" },
          { kind: "input", fields: [{ label: "Area", value: 1584, suffix: "cm²" }] }
        ],
        answer: "**1584 cm²**. Cut the triangle off one end and move it to the other end to make a rectangle 44 cm by 36 cm. Area = base × height = 44 × 36 = 1584 cm².",
        explain: "44 × 36 = 40 × 36 + 4 × 36 = 1440 + 144 = 1584."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "How much more is [2/5] than [3/10]?",
        options: ["[2/5]", "[1/5]", "[2/10]", "[1/10]"],
        answer: 3,
        explain: "[2/5] = [4/10]. Then [4/10] − [3/10] = [1/10].",
        interact: [{ kind: "shade", parts: 10, hint: "Shade [2/5] of the strip (4 tenths). How many more tenths is that than [3/10]?" }]
      },
      {
        type: "sr", focus: "Represents number B",
        prompt: "Amira is saving her pocket money. She has [1/4] of her money left after purchasing a birthday present for her friend. What percentage of her money did she spend?",
        interact: [
          { kind: "shade", parts: 4, pct: true, hint: "Shade the part she spent: everything except the [1/4] she has left." },
          { kind: "input", fields: [{ label: "She spent", value: 75, suffix: "%" }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Whole minus the part left", s: "She spent 1 − [1/4] = [3/4] of her money. [3/4] = 75%." }, { t: "Use percentages first", s: "[1/4] = 25% left, so 100% − 25% = 75% spent." }] },
        answer: "**75%**. She has [1/4] (25%) left, so she spent [3/4], which is 75%."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use addition for subtraction on an empty number line to solve: 4009 – 2997",
        interact: [
          { kind: "jumps", start: 2997, end: 4009, steps: [3, 9, 10, 1000], hint: "Count on from 2997: jump to 3000, then to 4000, then to 4009. Add up the jumps." },
          { kind: "input", fields: [{ label: "4009 − 2997 =", value: 1012 }] }
        ],
        answer: "**1012**. 2997 + 3 = 3000, + 1000 = 4000, + 9 = 4009. The jumps add to 3 + 1000 + 9 = 1012."
      },
      {
        type: "sr", focus: "Non spatial measure B: Mass",
        prompt: "Darvin buys 4 kg of red lollies, a box of chocolate weighing 3.75 kg, a 1.25 kg box of cupcakes and a 1.5 kg container of ice cream. How much mass is this altogether? Record your answer in grams and kilograms.",
        interact: [
          { kind: "group", items: [4, 3.75, 1.25, 1.5], hint: "Group two masses that make a whole number of kilograms first." },
          { kind: "input", fields: [{ label: "Kilograms", value: 10.5, suffix: "kg" }, { label: "Grams", value: 10500, suffix: "g" }] }
        ],
        cubes: { ops: ["+"], also: ["×"], note: "× 1000 to change kilograms into grams.", solve: [{ t: "Make friendly pairs", s: "3.75 + 1.25 = 5 kg. 4 + 1.5 = 5.5 kg. 5 + 5.5 = 10.5 kg = 10 500 g." }, { t: "Add in grams", s: "4000 + 3750 + 1250 + 1500 = 10 500 g = 10.5 kg." }] },
        answer: "**10.5 kg**, which is **10 500 g**."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: Volume",
        prompt: "Naomi said a box with a length of 4 cm, a width of 3 cm, and a height of 2 cm has a volume of 48 cm³. Is she correct? Communicate your reasoning.",
        interact: [
          { kind: "areagrid", cells: ["1111", "1111", "1111"], hint: "This is the bottom layer of 1 cm cubes: 4 by 3. The box is 2 layers high." },
          { kind: "choose", rows: [{ t: "Is Naomi correct?", options: ["Yes", "No"], a: 1 }] },
          { kind: "input", fields: [{ label: "Volume", value: 24, suffix: "cm³" }] }
        ],
        answer: "**No.** The volume is 4 × 3 × 2 = **24 cm³**. One layer has 4 × 3 = 12 cubes and there are 2 layers. 48 cm³ is double the real volume.",
        explain: "Naomi may have multiplied by 2 one time too many (4 × 3 × 2 × 2 = 48)."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "The difference between [2/3] and [3/6] is [1/6].",
        answer: true,
        explain: "[2/3] = [4/6]. [4/6] − [3/6] = [1/6], so it is true.",
        interact: [{ kind: "shade", parts: 6, hint: "Shade [2/3] of the strip (4 sixths). How many more sixths is that than [3/6]?" }]
      },
      {
        type: "sr", focus: "Represents number B",
        prompt: "Record the fraction, decimal and percentage for the shaded area.",
        img: "u36-grid.png",
        interact: [{ kind: "input", fields: [{ label: "Fraction", accept: ["75/100", "3/4"], placeholder: "?/?" }, { label: "Decimal", value: 0.75 }, { label: "Percentage", value: 75, suffix: "%" }] }],
        answer: "**[75/100]** (or [3/4]) = **0.75** = **75%**. 75 of the 100 squares are shaded.",
        explain: "Count it: the top 5 rows have 8 shaded squares each (40) and the bottom 5 rows have 7 each (35). 40 + 35 = 75."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Matthew worked out this decimal equation: 4.25 – 2.5 = 4.10. What error did Matthew make? Correct the equation.",
        interact: [
          { kind: "pv", cols: ["O", "t", "h"], start: 4.25, hint: "Show 4.25. The 5 in 2.5 is 5 tenths, not 5 hundredths. Take away 2 ones and 5 tenths." },
          { kind: "input", fields: [{ label: "4.25 − 2.5 =", value: 1.75 }] }
        ],
        answer: "Matthew didn't **line up the place values** (the decimal points), so he subtracted digits from the wrong places. 2.5 is 2 ones and 5 tenths. **4.25 − 2.5 = 1.75**.",
        explain: "Check with addition: 1.75 + 2.5 = 4.25. His answer 4.10 is more than 4.25 − 2, so it can't be right."
      },
      {
        type: "sr", focus: "Non spatial measure B: Mass",
        prompt: "Convert the weight of these crocodiles to kilograms. Which crocodile is the heaviest?",
        interact: [
          { kind: "cells", cols: 3, w: 150, free: true, msg: "Divide the grams by 1000 to get kilograms.", grid: [["#Crocodile", "#Grams (g)", "#Kilograms (kg)"], ["A", "10 000 g", { v: 10 }], ["B", "1687 g", { v: 1.687 }], ["C", "12 876 g", { v: 12.876 }]] },
          { kind: "choose", rows: [{ t: "Heaviest crocodile", options: ["A", "B", "C"], a: 2 }] }
        ],
        answer: "A = **10 kg**, B = **1.687 kg**, C = **12.876 kg**. Crocodile **C** is the heaviest.",
        explain: "The masses in the slide are very light for real crocodiles (these must be baby crocodiles), but the conversions are what matter."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B: 2DS Shape",
        prompt: "You have a square on a piece of paper. If you reflect the square over a line, where will the new square be? Then, if you rotate the original square 90 degrees, how will it look? Describe what happens to the square with each transformation.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "**Reflect:** the new square is on the other side of the line, the same distance from it, like a mirror image. It is the same size and shape. **Rotate 90°:** the square looks exactly the same, because a square has 4 equal sides and 4 right angles. Only the corners have moved to new positions.",
        explain: "Mark one corner of the square with a dot so the class can see where it goes after each transformation."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "What values are missing from the table?",
        table: [["Number of squares", "1", "2", "3", "4", "5", "6", "7"], ["Number of sides", "4", "8", "12", "?", "?", "?", "?"]],
        options: ["18, 22, 26, 32", "16, 24, 28, 32", "16, 20, 24, 28", "16, 22, 26, 30"],
        answer: 2,
        explain: "Each square has 4 sides, so the number of sides is 4 × the number of squares: 4 × 4 = 16, 4 × 5 = 20, 4 × 6 = 24, 4 × 7 = 28.",
        interact: [{ kind: "jumps", start: 12, steps: [4], hint: "Each new square adds 4 more sides. Jump +4 from 12." }]
      },
      {
        type: "sr", focus: "Represent quantity fractions B",
        prompt: "What fraction of the shape is black? Record any equivalent fractions.",
        img: "u36-black.png",
        interact: [
          { kind: "shade", parts: 8, hint: "Draw lines to cut the square into 8 equal small triangles. How many small triangles does the black part cover? Shade that many eighths." },
          { kind: "input", fields: [{ label: "Fraction that is black", value: 0.25, placeholder: "?/?" }, { label: "Equivalent fraction", value: 0.25, placeholder: "?/?" }, { label: "Another equivalent fraction", value: 0.25, placeholder: "?/?" }] }
        ],
        answer: "**[1/4]** is black. Equivalent fractions include **[2/8]**, [4/16] and [25/100].",
        explain: "Cut the square into quarters with a vertical and a horizontal line, then each quarter along its diagonal: 8 equal triangles. The black part covers 2 of them, so it is [2/8] = [1/4]. Any fraction equal to [1/4] is accepted in the equivalent boxes."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use partitioning to solve: 193.628 + 3207.84",
        interact: [
          { kind: "bar", whole: { v: 3401.468, l: "?", hide: true }, parts: [{ v: 193.628, l: "193.628" }, { v: 3207.84, l: "3207.84" }] },
          { kind: "input", fields: [{ label: "193.628 + 3207.84 =", value: 3401.468 }] }
        ],
        answer: "**3401.468**. Partition: 3000 + (100 + 200) + 90 + (3 + 7) + (0.6 + 0.8) + 0.04 + 0.028 → 3000 + 300 + 90 + 10 + 1.4 + 0.068 = 3401.468.",
        explain: "Line up the place values. 3207.84 has no thousandths, so think of it as 3207.840."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Robbie ran 5.2 kilometres in one lap and 3.75 kilometres in another lap. Calculate the total distance he travelled in metres.",
        interact: [
          { kind: "bar", whole: { v: 8.95, l: "?", n: "total", hide: true }, parts: [{ v: 5.2, l: "5.2 km", n: "lap 1" }, { v: 3.75, l: "3.75 km", n: "lap 2" }] },
          { kind: "input", fields: [{ label: "Total distance", value: 8950, suffix: "m" }] }
        ],
        cubes: { ops: ["+"], also: ["×"], note: "× 1000 to change kilometres into metres.", solve: [{ t: "Add, then convert", s: "5.2 + 3.75 = 8.95 km. 8.95 × 1000 = 8950 m." }, { t: "Convert, then add", s: "5200 m + 3750 m = 8950 m." }] },
        answer: "**8950 m**. 5.2 km = 5200 m and 3.75 km = 3750 m, so 5200 + 3750 = 8950 m."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Using words, describe the chance of spinning green or pink.",
        img: "u36-spinner.png",
        interact: [{ kind: "choose", rows: [
          { t: "Chance of spinning green", options: ["Impossible", "Unlikely", "Even chance", "Likely", "Certain"], a: 1 },
          { t: "Chance of spinning green or pink", options: ["Impossible", "Unlikely", "Even chance", "Likely", "Certain"], a: 3 }] }],
        answer: "The spinner has 6 equal parts: 2 green, 2 pink, 1 blue, 1 orange. Green on its own is **unlikely** (2 out of 6). Green **or** pink is **likely** (4 out of 6), because more than half the spinner is green or pink.",
        explain: "The slide's wording could mean green or pink together, or each colour on its own. Both readings are checked here: green alone (and pink alone) is unlikely, and green or pink together is likely."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "Keely has accurately completed the table. Communicate your reasoning.",
        table: [["Number of hexagons", "4", "5", "6", "7", "8", "9", "10"], ["Number of sides", "24", "30", "36", "42", "48", "54", "60"]],
        answer: true,
        explain: "A hexagon has 6 sides, so the number of sides is 6 × the number of hexagons: 6 × 4 = 24, 6 × 5 = 30, … 6 × 10 = 60. Every value is correct.",
        interact: [{ kind: "jumps", start: 24, steps: [6], hint: "Each extra hexagon adds 6 sides. Jump +6 from 24 and compare with the table." }]
      },
      {
        type: "sr", focus: "Represent quantity fractions B",
        prompt: "Scarlett has 84 apples to sort into boxes. She puts [2/4] of the apples into one large box. How many apples did Scarlett put in the large box?",
        interact: [
          { kind: "shade", parts: 4, pct: true, each: 21, hint: "84 apples shared into 4 equal parts is 21 in each part. Shade [2/4]." },
          { kind: "input", fields: [{ label: "Apples in the large box", value: 42 }] }
        ],
        cubes: { ops: ["÷", "×"], solve: [{ t: "One quarter first", s: "84 ÷ 4 = 21, so [1/4] is 21. [2/4] is 2 × 21 = 42." }, { t: "Use a half", s: "[2/4] = [1/2]. Half of 84 is 42." }] },
        answer: "**42 apples**. [2/4] is the same as [1/2], and half of 84 is 42."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Use an efficient strategy to determine the total combined high jump height for each school.",
        table: [["Student", "School", "Height"], ["Joesphine", "Happy Valley PS", "1.61 m"], ["Yin Lee", "Happy Valley PS", "1.51 m"], ["Zoran", "Mountain Top PS", "1.47 m"], ["Mitchell", "Galaxy PS", "1.55 m"], ["Carolina", "Galaxy PS", "1.59 m"], ["Zeinab", "Mountain Top PS", "1.54 m"]],
        interact: [{ kind: "input", fields: [{ label: "Happy Valley PS", value: 3.12, suffix: "m" }, { label: "Mountain Top PS", value: 3.01, suffix: "m" }, { label: "Galaxy PS", value: 3.14, suffix: "m" }] }],
        cubes: { ops: ["+"], solve: [{ t: "Ones, then the rest", s: "Each pair has 1 + 1 = 2 m, then add the decimals: Happy Valley 0.61 + 0.51 = 1.12 → 3.12 m. Mountain Top 0.47 + 0.54 = 1.01 → 3.01 m. Galaxy 0.55 + 0.59 = 1.14 → 3.14 m." }, { t: "Compensation", s: "1.47 + 1.54 = 1.50 + 1.51 = 3.01 m. 1.55 + 1.59 = 1.55 + 1.60 − 0.01 = 3.14 m. 1.61 + 1.51 = 1.60 + 1.52 = 3.12 m." }] },
        answer: "Happy Valley PS: **3.12 m** · Mountain Top PS: **3.01 m** · Galaxy PS: **3.14 m**. Galaxy PS has the greatest combined height."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Jamie has a piece of string that is 2.4 metres long. She cuts off a piece that is 1.3 metres long for a project. How long is the remaining piece of string? If Jamie needs a total length of 2.5 metres for another project, does she have enough string left?",
        interact: [
          { kind: "bar", whole: { v: 2.4, l: "2.4 m", n: "whole string" }, parts: [{ v: 1.3, l: "1.3 m", n: "cut off" }, { v: 1.1, l: "1.1 m", n: "left", hide: true }] },
          { kind: "input", fields: [{ label: "Remaining string", value: 1.1, suffix: "m" }] },
          { kind: "choose", rows: [{ t: "Enough for 2.5 m?", options: ["Yes", "No"], a: 1 }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Subtract", s: "2.4 − 1.3 = 1.1 m left. 1.1 m is less than 2.5 m, so no." }, { t: "Count on", s: "1.3 + 1 = 2.3, + 0.1 = 2.4. That's 1.1 m. She is 1.4 m short of 2.5 m." }] },
        answer: "**1.1 m** is left. **No**, it is not enough: she needs 2.5 m, which is 1.4 m more than she has. (Even the whole 2.4 m string was shorter than 2.5 m.)"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B: 3DS Objects",
        prompt: "Draw the front, side and top view for a triangular prism.",
        interact: [{ kind: "sketch", grid: "square" }],
        answer: "For a triangular prism lying on its rectangular face, with a triangle facing you: **front view** is a **triangle**, **side view** is a **rectangle**, and **top view** is a **rectangle** with a line along the middle (the top edge).",
        explain: "The views depend on how the prism is placed. If it is turned so a rectangle faces you, the front view is a rectangle and the side view is the triangle."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Multiplicative relations B",
        prompt: "Which value did Sierra incorrectly record in this table of values?",
        table: [["Number of clocks", "4", "5", "6", "7", "8"], ["Total batteries needed", "16", "20", "24", "30", "32"]],
        options: ["20", "16", "32", "30"],
        answer: 3,
        explain: "Each clock needs 4 batteries (16 ÷ 4 = 4). 7 clocks need 7 × 4 = 28 batteries, not 30.",
        interact: [{ kind: "jumps", start: 16, steps: [4], hint: "Each extra clock adds 4 batteries. Jump +4 from 16 and compare with the table." }]
      },
      {
        type: "sr", focus: "Represent quantity fractions B",
        prompt: "Lucy ate [3/5] of a pizza and Audrey ate [2/10] of the same pizza. What fraction of the pizza did they eat altogether?",
        interact: [
          { kind: "shade", parts: 10, hint: "The pizza is cut into tenths. Shade [3/5] (6 tenths) for Lucy, then [2/10] for Audrey." },
          { kind: "input", fields: [{ label: "Altogether", accept: ["8/10", "4/5"], placeholder: "?/?" }] }
        ],
        cubes: { ops: ["+"], note: "Make the denominators the same before adding.", solve: [{ t: "Rename the fifths", s: "[3/5] = [6/10], so [6/10] + [2/10] = [8/10]." }, { t: "Simplify", s: "[8/10] = [4/5]." }] },
        answer: "**[8/10]** of the pizza, which is the same as **[4/5]**."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Class 5D are going on a zoo excursion. There are 25 students and 3 adults attending. Students pay the student price. Find the total cost for zoo entry.",
        table: [["Zoo entry", "Cost"], ["Adults", "$25"], ["Students/Concession", "$18"], ["Children (3 – 14 years)", "$14"], ["Family (2 adults/2 chn)", "$65"]],
        interact: [
          { kind: "bar", whole: { v: 525, l: "?", n: "total cost", hide: true }, parts: [{ v: 450, l: "25 × $18", n: "students" }, { v: 75, l: "3 × $25", n: "adults" }] },
          { kind: "input", fields: [{ label: "Total cost", value: 525, prefix: "$" }] }
        ],
        cubes: { ops: ["×", "+"], solve: [{ t: "Each group, then add", s: "Students: 25 × $18 = $450. Adults: 3 × $25 = $75. $450 + $75 = $525." }, { t: "Friendly numbers", s: "25 × 18 = 25 × 20 − 25 × 2 = 500 − 50 = 450. Then + 75 = $525." }] },
        answer: "**$525**. 25 students × $18 = $450, and 3 adults × $25 = $75. $450 + $75 = $525.",
        explain: "The slide's table has both a student price ($18) and a children's price ($14), and Year 5 students are also children. 'Students pay the student price' was added so there is one answer. At the children's price it would be 25 × $14 + $75 = $425, which is worth discussing."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "Mehan has 2 pieces of wood. One is 150 centimetres long, and the other is 1.2 metres long. Which piece is longer, and by how much? Convert the measurements to the same unit to compare the lengths accurately.",
        interact: [
          { kind: "bar", whole: { v: 150, l: "150 cm" }, parts: [{ v: 120, l: "1.2 m = 120 cm" }, { v: 30, l: "?", hide: true }] },
          { kind: "choose", rows: [{ t: "Longer piece", options: ["150 cm piece", "1.2 m piece"], a: 0 }] },
          { kind: "input", fields: [{ label: "Longer by", value: 30, suffix: "cm" }] }
        ],
        cubes: { ops: ["−"], also: ["×"], note: "1 m = 100 cm.", solve: [{ t: "Change to centimetres", s: "1.2 m = 120 cm. 150 − 120 = 30 cm." }, { t: "Change to metres", s: "150 cm = 1.5 m. 1.5 − 1.2 = 0.3 m = 30 cm." }] },
        answer: "The **150 cm** piece is longer, by **30 cm** (0.3 m). 1.2 m = 120 cm, and 150 − 120 = 30."
      },
      {
        type: "sr", focus: "Geometric measure B: Angles",
        prompt: "Draw and describe an adjacent angle.",
        interact: [{ kind: "sketch" }],
        answer: "**Adjacent angles** are two angles that sit **side by side**: they share a **vertex** (corner point) and **one arm**, and they don't overlap. For example, a right angle split by a line into a 30° angle and a 60° angle.",
        explain: "Draw two arms from one point, then a third arm between them. The two angles either side of the middle arm are adjacent."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations B",
        prompt: "Silas is buying packs of markers. He multiplied each pack by 6 to determine the total number of markers.",
        table: [["Number of packs", "4", "6", "7", "9", "11"], ["Total number of markers", "28", "42", "49", "63", "77"]],
        answer: false,
        explain: "4 × 6 = 24, not 28. Every total is 7 × the number of packs (4 × 7 = 28, 6 × 7 = 42, … 11 × 7 = 77), so he multiplied by 7, not 6.",
        interact: [{ kind: "cells", cols: 6, w: 70, msg: "Multiply each number of packs by 6.", grid: [["#Packs", "4", "6", "7", "9", "11"], ["#× 6", { v: 24 }, { v: 36 }, { v: 42 }, { v: 54 }, { v: 66 }]] }]
      },
      {
        type: "sr", focus: "Represent quantity fractions B",
        prompt: "Ethan cycled 5[1/8] kilometres on Monday, 3[3/4] kilometres on Tuesday, and 4[2/8] kilometres on Wednesday. How many kilometres did he cycle altogether?",
        interact: [
          { kind: "shade", parts: 8, hint: "Add the fraction parts in eighths: [1/8] + [6/8] + [2/8]. Shade them. Is it more than one whole?" },
          { kind: "input", fields: [{ label: "Altogether", value: 13.125, suffix: "km", placeholder: "e.g. 2 1/8" }] }
        ],
        cubes: { ops: ["+"], note: "Add the wholes, then the fractions.", solve: [{ t: "Wholes, then fractions", s: "5 + 3 + 4 = 12. [1/8] + [3/4] + [2/8] = [1/8] + [6/8] + [2/8] = [9/8] = 1[1/8]. 12 + 1[1/8] = 13[1/8] km." }, { t: "Bridge to whole numbers", s: "5[1/8] + 3[3/4] = 8[7/8]. 8[7/8] + 4[2/8] = 13[1/8] km." }] },
        answer: "**13[1/8] km**. Wholes: 5 + 3 + 4 = 12. Fractions: [1/8] + [6/8] + [2/8] = [9/8] = 1[1/8]. 12 + 1[1/8] = 13[1/8]."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Solve 9001 - 589. Communicate and compare your solution with a partner.",
        interact: [
          { kind: "jumps", start: 589, end: 9001, steps: [1, 10, 11, 400, 1000], hint: "One way: count on from 589. Jump to 600, then 9000, then 9001." },
          { kind: "input", fields: [{ label: "9001 − 589 =", value: 8412 }] }
        ],
        answer: "**8412**. Counting on: 589 + 11 = 600, + 8400 = 9000, + 1 = 9001, and 11 + 8400 + 1 = 8412. Or constant difference: 9001 − 589 = 9012 − 600 = 8412."
      },
      {
        type: "sr", focus: "Geometric measure B: Length",
        prompt: "A garden is 3.2 metres long and 1.6 metres wide. You have fence sections that are 0.8 metres long. How many sections of fencing will you need to go around the entire garden?",
        interact: [
          { kind: "sides", view: [470, 250], label: "A rectangular garden 3.2 m long and 1.6 m wide", fill: "#8CC56B", poly: [[40, 50], [380, 50], [380, 220], [40, 220]],
            dims: [{ from: [40, 28], to: [380, 28] }, { from: [404, 50], to: [404, 220] }],
            labels: [{ t: "3.2 m", x: 210, y: 20 }, { t: "1.6 m", x: 416, y: 142, anchor: "start" }] },
          { kind: "input", fields: [{ label: "Fence sections needed", value: 12 }] }
        ],
        cubes: { ops: ["÷", "+"], also: ["×"], solve: [{ t: "Sections on each side", s: "3.2 ÷ 0.8 = 4 sections on each long side. 1.6 ÷ 0.8 = 2 on each short side. 4 + 2 + 4 + 2 = 12." }, { t: "Perimeter first", s: "Perimeter = 3.2 + 1.6 + 3.2 + 1.6 = 9.6 m. 9.6 ÷ 0.8 = 12 sections." }] },
        answer: "**12 sections**. Each long side takes 4 sections (4 × 0.8 = 3.2) and each short side takes 2 (2 × 0.8 = 1.6). 4 + 2 + 4 + 2 = 12."
      },
      {
        type: "sr", focus: "Non spatial measure B: Time",
        prompt: "Ella walked the dog at 3:55 pm. If she walked for 2 hours and 35 minutes, what time did she get home?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 955, steps: [5, 30, 60], hint: "Jump on 2 hours, then 5 minutes to the hour, then 30 more minutes." },
          { kind: "input", fields: [{ label: "She got home at", accept: ["6:30 pm", "6:30", "18:30", "6:30pm"], placeholder: "e.g. 4:15 pm" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Hours, then minutes", s: "3:55 pm + 2 hours = 5:55 pm. + 5 min = 6:00 pm. + 30 min = 6:30 pm." }, { t: "Round to the hour", s: "3:55 + 5 min = 4:00. 2 h 35 min − 5 min = 2 h 30 min. 4:00 + 2 h 30 min = 6:30 pm." }] },
        answer: "**6:30 pm**. 3:55 pm + 2 hours = 5:55 pm, then + 35 minutes = 6:30 pm."
      }
    ]
  ]
});
