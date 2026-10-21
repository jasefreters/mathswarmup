/*
  Stage 2 Year A, Unit 8 — Review of learning (Term 2, learning sequence 3: Weeks 5–6).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 2, ls: 3, unit: 8,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 8 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "Which fraction is placed here on the number line?",
        img: "u8-numline.png",
        options: ["[1/10]", "[1/8]", "[1/6]", "[1/4]"],
        answer: 1,
        explain: "The whole from 0 to 1 is cut into 8 equal parts. The arrow points to the end of the first part, so it is [1/8].",
        interact: [{ kind: "shade", parts: 8, hint: "Count the equal parts between 0 and 1. Shade the part up to the arrow." }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Describe how to get from your classroom to the school office.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u8-school.png" }],
        answer: "Answers vary. Use position words and landmarks, for example: walk out of the classroom, turn left, go past the library and the office is on your right."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the pattern. Describe the rule for the pattern. Record the next 3 numbers in the pattern.",
        img: "u8-pattern.png",
        interact: [
          { kind: "jumps", start: 0, steps: [4], hint: "Each block has 4 dots. Jump + 4 for each block as the towers grow." },
          { kind: "choose", rows: [{ t: "The rule", options: ["add 2 each time", "add 4 each time", "double each time"], a: 1 }] },
          { kind: "input", fields: [{ label: "Next", value: 20 }, { label: "then", value: 24 }, { label: "then", value: 28 }] }
        ],
        answer: "**4, 8, 12, 16** dots. The rule is add 4 (each tower has one more block of 4). The next 3 numbers are **20, 24, 28**.",
        explain: "The pattern is read as the number of dots in each tower (1, 2, 3 and 4 blocks of 4 dots). Counting blocks instead (1, 2, 3, 4, then 5, 6, 7) is also a fair reading."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Starting at 2631: count forwards by hundreds to 3231, count backwards by hundreds to 2131, count forwards by tens to 2721, count backwards by tens to 2581.",
        interact: [
          { kind: "jumps", start: 2631, back: true, steps: [100, 10], hint: "Jump + 100 or + 10 from 2631, or back. Say each number as you land." },
          { kind: "input", fields: [
            { label: "Jumps of 100 forwards to 3231", value: 6 },
            { label: "Jumps of 100 back to 2131", value: 5 },
            { label: "Jumps of 10 forwards to 2721", value: 9 },
            { label: "Jumps of 10 back to 2581", value: 5 }] }
        ],
        answer: "2631, 2731, 2831, 2931, 3031, 3131, **3231** · 2631, 2531, 2431, 2331, 2231, **2131** · 2631, 2641 … 2711, **2721** · 2631, 2621, 2611, 2601, 2591, **2581**"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "If you are standing on the basketball court, facing the canteen, what is on your right? On your left? Behind you?",
        img: "u8-school.png",
        interact: [{ kind: "choose", rows: [
          { t: "On your right", options: ["Library", "Office", "Year 4 and 5", "Hall"], a: 0 },
          { t: "On your left", options: ["Library", "Office", "Year 4 and 5", "Hall"], a: 1 },
          { t: "Behind you", options: ["Library", "Office", "Year 4 and 5", "Hall"], a: 2 }] }],
        answer: "Right: **Library** · Left: **Office** · Behind: **Year 4 and 5**",
        explain: "Facing the canteen means facing the top of the map, so right is the east side and left is the west side."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "[1/8] is the complementary fraction. Communicate your thinking.",
        img: "u8-seveneighths.png",
        answer: true,
        explain: "[7/8] is shaded. [7/8] and [1/8] make 1 whole, so [1/8] is the complementary fraction.",
        interact: [{ kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4, 5, 6], hint: "7 eighths are shaded. How many eighths are left to make the whole?" }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "When orienting a map, we may t_____ the map so that it faces the same way as the ground it represents. I am standing at the cone. To orientate this map, I could turn it to the ______.",
        img: "u8-orient.png",
        interact: [
          { kind: "choose", rows: [{ t: "We may", options: ["tear", "turn", "trace"], a: 1 }] },
          { kind: "reveal", items: [["Which way could I turn it?", "Turn it so the cone on the map points the same way as the real cone. In the picture the map has been turned a quarter turn."]] }
        ],
        answer: "We may **turn** the map. Turn it until the cone on the map lines up with the cone you are standing at.",
        explain: "The second blank depends on where you are standing, so it is a discussion answer."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Rearrange 5 groups of 4 eggs into equal rows to form an array. Describe your array.",
        img: "u8-eggs.png",
        interact: [
          { kind: "array", rows: 1, cols: 1, total: 20, showTotal: true, hint: "Build an array with all 20 eggs." },
          { kind: "input", fields: [{ label: "Total eggs", value: 20 }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Make rows", s: "Put each group of 4 in a row: 5 rows of 4 = 20 eggs." }, { t: "Skip count", s: "4, 8, 12, 16, 20. That's 20 eggs." }] },
        answer: "**5 rows of 4** (or 4 rows of 5) = **20 eggs**. 5 × 4 = 20."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Fill in the blanks. ___ hundreds is equal to one thousand. ___ tens is equal to one hundred. ___ ones is equal to one hundred.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 1 }, hint: "Break the thousand into hundreds, then a hundred into tens or ones." },
          { kind: "input", fields: [{ label: "hundreds = 1 thousand", value: 10 }, { label: "tens = 1 hundred", value: 10 }, { label: "ones = 1 hundred", value: 100 }] }
        ],
        answer: "**10** hundreds = 1 thousand · **10** tens = 1 hundred · **100** ones = 1 hundred"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "If you are standing in the Year 1 block, facing Kindergarten, what is on your right? On your left? Behind you?",
        img: "u8-school.png",
        interact: [{ kind: "choose", rows: [
          { t: "On your right", options: ["Playground", "Canteen", "Library", "Soccer field"], a: 0 },
          { t: "On your left", options: ["Playground", "Canteen", "Library", "Soccer field"], a: 1 },
          { t: "Behind you", options: ["Playground", "Canteen", "Library", "Soccer field"], a: 2 }] }],
        answer: "Right: **Playground** · Left: **Canteen** (and the Hall) · Behind: **Library**",
        explain: "Facing Kindergarten means facing the top of the map."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Partitioned fractions A",
        prompt: "The whole (1) would be marked on the number line at:",
        img: "u8-half.png",
        options: ["A", "B", "C", "D"],
        answer: 0,
        explain: "The shaded part from 0 to [1/2] is one half. Two halves make 1 whole, so 1 is the same distance again past [1/2], at A.",
        interact: [{ kind: "shade", parts: 2, pre: [0], hint: "One half is shaded. How long is the whole?" }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record which playground equipment is in C1. Record the grid reference for the position of the swing.",
        interact: [
          { kind: "gridref", src: "img/s2/u8-playground.png", alt: "Playground map with a grid, columns A to C and rows 1 to 3", box: [15.9, 8.3, 93.5, 88.5], cols: ["A", "B", "C"], rows: ["3", "2", "1"] },
          { kind: "choose", rows: [{ t: "In C1", options: ["slide", "seesaw", "picnic table", "sandpit"], a: 1 }] },
          { kind: "input", fields: [{ label: "The swing is in", accept: ["A2", "2A"] }] }
        ],
        answer: "C1 has the **seesaw**. The swing is in **A2**."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw the array of 2 rows of 6. Record the number sentence. Double the array. Record the new number sentence.",
        interact: [
          { kind: "array", rows: 2, cols: 6, showTotal: true, hint: "This is 2 rows of 6. Add rows to double it." },
          { kind: "input", fields: [{ label: "2 × 6 =", value: 12 }, { label: "Doubled: 4 × 6 =", value: 24 }] }
        ],
        answer: "2 × 6 = **12**. Doubled: 4 × 6 = **24** (or 2 × 12 = 24)."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Rearrange the cards 4, 3, 1, 5 to record the largest possible number and the smallest possible number.",
        interact: [
          { kind: "order", items: ["4", "3", "1", "5"], answer: [3, 0, 1, 2], hint: "Put the cards in order to make the largest number." },
          { kind: "input", fields: [{ label: "Largest", value: 5431 }, { label: "Smallest", value: 1345 }] }
        ],
        answer: "Largest **5431** · Smallest **1345**. Put the biggest digit in the thousands place for the largest number, and the smallest digit there for the smallest."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Which of these is more likely to happen today? A: eating lunch with friends. B: going skiing. Communicate your reasoning.",
        img: "u8-lunch-ski.png",
        interact: [{ kind: "choose", rows: [{ t: "More likely", options: ["A", "B"], a: 0 }] }],
        answer: "**A**. On a school day you eat lunch with friends, but going skiing is unlikely.",
        explain: "Assumes a normal school day."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Partitioned fractions A",
        prompt: "The complementary fraction is [1/8]. Communicate your thinking.",
        img: "u8-fiveeighths.png",
        answer: false,
        explain: "[5/8] is shaded. [5/8] + [3/8] makes 1 whole, so the complementary fraction is [3/8], not [1/8].",
        interact: [{ kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4], hint: "5 eighths are shaded. How many eighths are left?" }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Follow the red path and complete the directions by using the compass. Start at H4. Move ___ to H7. Turn to the ___ and move to D7. Turn to the ___ and move to D6. Turn to the ___ and move to A6.",
        img: "u8-compass.png",
        interact: [{ kind: "choose", rows: [
          { t: "Move … to H7", options: ["north", "south", "east", "west"], a: 0 },
          { t: "Turn to the … to D7", options: ["north", "south", "east", "west"], a: 3 },
          { t: "Turn to the … to D6", options: ["north", "south", "east", "west"], a: 1 },
          { t: "Turn to the … to A6", options: ["north", "south", "east", "west"], a: 3 }] }],
        answer: "Move **north** to H7 · turn to the **west** to D7 · turn to the **south** to D6 · turn to the **west** to A6."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "What is half of 24? Draw an array to communicate your thinking. Record the division number sentence.",
        interact: [
          { kind: "array", rows: 2, cols: 12, showTotal: true, max: 24, hint: "2 rows of 12 is 24. One row is half." },
          { kind: "input", fields: [{ label: "Half of 24 =", value: 12 }, { label: "24 ÷ 2 =", value: 12 }] }
        ],
        answer: "Half of 24 is **12**. 24 ÷ 2 = 12."
      },
      {
        type: "sr", focus: "Representing numbers using place value A",
        prompt: "Record 2 different ways to partition 1458 in non-standard form.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: 1458, target: 1458, need: "nonstandard" },
          { kind: "expr", count: 2, target: 1458, placeholder: "e.g. 14 hundreds + 58 → 1400 + 58", mustUse: { re: "\\+", msg: "Join the parts with +." }, sample: ["1400 + 58", "1300 + 158"] }
        ],
        answer: "Answers vary, for example 14 hundreds + 5 tens + 8 ones (1400 + 50 + 8), or 1 thousand + 3 hundreds + 15 tens + 8 ones (1000 + 300 + 150 + 8)."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Which of these is more likely to happen at school today? A: riding a rollercoaster. B: working at your desk. Communicate your reasoning.",
        img: "u8-ride-desk.png",
        interact: [{ kind: "choose", rows: [{ t: "More likely", options: ["A", "B"], a: 1 }] }],
        answer: "**B**. Working at your desk happens most school days; there is no rollercoaster at school."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "56 = ___ + ___",
        options: ["23 + 23", "70 − 4", "28 + 18", "48 + 8"],
        answer: 3,
        explain: "48 + 8 = 56. On the slide, option D was 48 + 7 = 55, so no option made 56; D has been changed to 48 + 8. (23 + 23 = 46, 70 − 4 = 66, 28 + 18 = 46.)",
        interact: [{ kind: "jumps", start: 48, steps: [1, 2, 8], hint: "Start at 48. How far to 56?" }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Use compass directions to plan and describe a path from the eggs to the check out.",
        interact: [{ kind: "sketch", bgimg: "img/s2/u8-shop.png" }],
        answer: "Answers vary. The eggs are in E6 and the check out is in H2. For example: move east 3 squares to H6, then south 4 squares to H2."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Draw an array of 5 fours. Record the multiplication number sentence.",
        interact: [
          { kind: "array", rows: 1, cols: 4, target: [5, 4], showTotal: true, hint: "Build 5 rows of 4." },
          { kind: "input", fields: [{ label: "5 × 4 =", value: 20 }] }
        ],
        answer: "5 rows of 4: 5 × 4 = **20**."
      },
      {
        type: "sr", focus: "Representing numbers using place value B",
        prompt: "Record the number of thousands, hundreds, tens and ones. Record the number represented.",
        img: "u8-mab.png",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O"], start: { Th: 1, H: 12, T: 11, O: 3 }, hint: "This is what the picture shows. Group 10 hundreds into a thousand and 10 tens into a hundred." },
          { kind: "input", fields: [{ label: "Thousands", value: 1 }, { label: "Hundreds", value: 12 }, { label: "Tens", value: 11 }, { label: "Ones", value: 3 }, { label: "The number", value: 2313 }] }
        ],
        answer: "1 thousand, **12** hundreds, **11** tens and **3** ones: 1000 + 1200 + 110 + 3 = **2313**."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the length of the line.",
        img: "u8-ruler.png",
        interact: [
          { kind: "marker", min: 0, max: 15, ticks: 1, minor: 10, target: 7.35, tol: 0.25, label: "end", msg: "Count the whole centimetres, then the small millimetre marks." },
          { kind: "input", fields: [{ label: "Length", min: 72, max: 75, suffix: "mm" }] }
        ],
        answer: "About **7 cm 3 mm** (73 mm). The line starts at 0 and ends a few marks past 7.",
        explain: "Read from the picture, the line ends between 7.3 cm and 7.4 cm, so 72–75 mm is accepted."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "If 54 − 37 = 17, then 54 + 17 = 34.",
        answer: false,
        explain: "The fact family is 17, 37 and 54: 17 + 37 = 54. 54 + 17 = 71, not 34.",
        interact: [{ kind: "bar", whole: { v: 54, l: "54" }, parts: [{ v: 37, l: "37" }, { v: 17, l: "17" }] }]
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Record an everyday event that is impossible, equally likely or certain to occur today.",
        interact: [{ kind: "choose", rows: [
          { t: "The sun will set tonight", options: ["impossible", "equally likely", "certain"], a: 2 },
          { t: "A coin you flip lands on heads", options: ["impossible", "equally likely", "certain"], a: 1 },
          { t: "A dog drives the school bus", options: ["impossible", "equally likely", "certain"], a: 0 }] }],
        answer: "Answers vary. Certain: the sun sets tonight · Equally likely: a coin lands on heads · Impossible: a dog drives the bus.",
        explain: "The slide asks students for their own events; these examples are added so there is something to sort. Have the class add their own."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the 4 related multiplication and division facts for the array of 5 rows of 3.",
        interact: [
          { kind: "array", rows: 5, cols: 3, showTotal: true, hint: "5 rows of 3. Rotate it for the turnaround fact." },
          { kind: "input", fields: [{ label: "5 × 3 =", value: 15 }, { label: "3 × 5 =", value: 15 }, { label: "15 ÷ 3 =", value: 5 }, { label: "15 ÷ 5 =", value: 3 }] }
        ],
        answer: "5 × 3 = 15 · 3 × 5 = 15 · 15 ÷ 3 = 5 · 15 ÷ 5 = 3"
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "36 + 18 = ? Use the bridging the decades (nearest 10) strategy to solve the problem.",
        interact: [
          { kind: "jumps", start: 36, steps: [4, 10, 14], hint: "Jump to the next ten first: 36 + 4 = 40. Then add the rest." },
          { kind: "input", fields: [{ label: "36 + 18 =", value: 54 }] }
        ],
        answer: "36 + 4 = 40, then 40 + 14 = **54**."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Which would be the most appropriate instrument to measure the length from one side of the playground to the other? Communicate your reasoning.",
        img: "u8-tools.png",
        interact: [{ kind: "choose", rows: [{ t: "Best instrument", options: ["A ruler", "B tape measure", "C trundle wheel"], a: 2 }] }],
        answer: "**C, the trundle wheel**. The playground is many metres long; a ruler or tape measure would need to be moved too many times."
      }
    ],
    // Review 7
    [
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Which number sentences show the relationship of the numbers in the bar model (100 = 68 + 32)? You may select more than one answer.",
        interact: [
          { kind: "bar", whole: { v: 100, l: "100" }, parts: [{ v: 68, l: "68" }, { v: 32, l: "32" }] },
          { kind: "select", items: [["A  100 − 32 = 68", true], ["B  100 − 68 = 32", true], ["C  32 + 100 = 68", false], ["D  32 + 68 = 100", true]] }
        ],
        answer: "**A, B and D**. The parts 68 and 32 make the whole 100. C is wrong: 32 + 100 = 132."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Record all the possible outcomes of this spinner. How would you describe the chance of landing on orange compared to blue?",
        img: "u8-spinner.png",
        interact: [
          { kind: "select", items: [["red", true], ["blue", true], ["yellow", true], ["orange", true], ["green", false]] },
          { kind: "choose", rows: [{ t: "Orange compared to blue", options: ["more likely", "equally likely", "less likely"], a: 1 }] }
        ],
        answer: "Red, blue, yellow, orange. Orange and blue are **equally likely**: each is one quarter of the spinner."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "24 ÷ ? = 6",
        interact: [
          { kind: "pack", mode: "pack", size: 6, total: 24, thing: "counters", label: "group", hint: "Make groups of 6 from 24 counters. How many groups?" },
          { kind: "input", fields: [{ label: "24 ÷ ? = 6. ? =", value: 4 }] }
        ],
        answer: "**4**. 24 ÷ 4 = 6, because 4 × 6 = 24."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "47 + 26 = ? Use the levelling strategy to solve the problem.",
        interact: [
          { kind: "scale", left: "47 + 26", right: "50 + ?", answer: 23 },
          { kind: "input", fields: [{ label: "47 + 26 =", value: 73 }] }
        ],
        answer: "Move 3 from 26 to 47: 50 + 23 = **73**."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Flynn caught the bus to the beach. He left at 10:30 am. If the journey took half an hour, what time did he arrive at the beach?",
        interact: [
          { kind: "jumps", time: true, ampm: true, start: 630, steps: [15, 30, 60], hint: "Start at 10:30 am. Jump half an hour." },
          { kind: "clock", time: "10:30", drag: true },
          { kind: "input", fields: [{ label: "He arrived at", accept: ["11:00 am", "11 am", "11:00", "11.00 am", "11am"], placeholder: "e.g. 9:15 am" }] }
        ],
        cubes: { ops: ["+"], solve: [{ t: "Jump on a timeline", s: "10:30 am + 30 minutes = 11:00 am." }, { t: "Use the clock", s: "Half an hour is 30 minutes. The long hand goes from the 6 round to the 12: 11 o'clock." }] },
        answer: "**11:00 am**. 10:30 am + 30 minutes = 11:00 am."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "If 68 − 39 = 29, then 68 − 29 = 39.",
        answer: true,
        explain: "29 and 39 are the two parts of 68, so taking either part away leaves the other.",
        interact: [{ kind: "bar", whole: { v: 68, l: "68" }, parts: [{ v: 39, l: "39" }, { v: 29, l: "29" }] }]
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "Record all the possible outcomes of drawing out one counter from the bag. Which colour is likely to be drawn? Which colour is unlikely to be drawn? Communicate your thinking.",
        img: "u8-bag.png",
        interact: [
          { kind: "tally", rows: [{ l: "Red", a: 7 }, { l: "Yellow", a: 10 }, { l: "Blue", a: 3 }], hint: "Count the counters of each colour as a tally." },
          { kind: "choose", rows: [
            { t: "Likely", options: ["red", "yellow", "blue"], a: 1 },
            { t: "Unlikely", options: ["red", "yellow", "blue"], a: 2 }] }
        ],
        answer: "Red, yellow or blue. **Yellow** is likely (10 of 20 counters). **Blue** is unlikely (only 3). Red: 7."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "A farmer collected 4 eggs for each of her 4 friends. How many eggs did the farmer collect? The farmer accidentally broke half of the eggs. How many were left?",
        interact: [
          { kind: "array", rows: 4, cols: 4, showTotal: true, hint: "4 friends, 4 eggs each." },
          { kind: "input", fields: [{ label: "Eggs collected", value: 16 }, { label: "Eggs left", value: 8 }] }
        ],
        cubes: { ops: ["×", "÷"], also: ["+", "−"], solve: [{ t: "Array, then halve", s: "4 rows of 4 = 16 eggs. Half of 16 is 8, so 8 were left." }, { t: "Skip count", s: "4, 8, 12, 16. 16 ÷ 2 = 8." }] },
        answer: "**16 eggs** collected (4 × 4). Half broke, so **8 eggs** were left."
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Use these numbers to draw a bar model: 58, 35, 23. Record the complement number sentences to demonstrate your understanding of inverse operations and the complement principle.",
        interact: [
          { kind: "bar", whole: { v: 58, l: "58" }, parts: [{ v: 35, l: "35" }, { v: 23, l: "23" }] },
          { kind: "input", fields: [{ label: "35 + 23 =", value: 58 }, { label: "23 + 35 =", value: 58 }, { label: "58 − 35 =", value: 23 }, { label: "58 − 23 =", value: 35 }] }
        ],
        answer: "58 is the whole; 35 and 23 are the parts. 35 + 23 = 58 · 23 + 35 = 58 · 58 − 35 = 23 · 58 − 23 = 35"
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Record the frequency of each colour. What is the most popular car colour? What is the least popular car colour?",
        img: "u8-tally.png",
        interact: [
          { kind: "input", fields: [{ label: "Blue", value: 7 }, { label: "Green", value: 2 }, { label: "White", value: 10 }, { label: "Silver", value: 9 }] },
          { kind: "choose", rows: [
            { t: "Most popular", options: ["Blue", "Green", "White", "Silver"], a: 2 },
            { t: "Least popular", options: ["Blue", "Green", "White", "Silver"], a: 1 }] }
        ],
        answer: "Blue **7**, Green **2**, White **10**, Silver **9**. Most popular: **white**. Least popular: **green**."
      }
    ]
  ]
});
