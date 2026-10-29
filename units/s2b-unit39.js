/*
  Stage 2 Year B, Unit 39 — Review of learning (Term 4, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
(function () {
  // Word tiles for sorting (Review 2): 5 columns × 4 rows, each a tappable rectangle with its word.
  const words = [
    ["Banana", "f"], ["Socks", "c"], ["Elephant", "a"], ["Dog", "a"], ["Carrot", "f"],
    ["Train", "t"], ["Helicopter", "t"], ["School bag", "u"], ["T-Shirt", "c"], ["Spoon", "u"],
    ["Orange juice", "f"], ["Chair", "u"], ["Fish", "a"], ["Truck", "t"], ["Shoes", "c"],
    ["Hat", "c"], ["Watermelon", "f"], ["Bike", "t"], ["Gloves", "c"], ["Penguin", "a"]
  ];
  const tiles = words.map(([w, k], i) => {
    const x = 10 + (i % 5) * 120, y = 10 + Math.floor(i / 5) * 62;
    return { p: x + "," + y + " " + (x + 110) + "," + y + " " + (x + 110) + "," + (y + 52) + " " + x + "," + (y + 52), a: k, fill: "#E4E7EC",
      deco: "<text x='" + (x + 55) + "' y='" + (y + 33) + "' text-anchor='middle' font-size='17' fill='#1B1F27' style='pointer-events:none'>" + w + "</text>" };
  });
  const chance = ["impossible", "unlikely", "equally likely", "likely", "certain"];
  const trap = { view: [300, 200], pts: [[90, 30], [210, 30], [280, 170], [20, 170]] };

  UNITS.push({
    stage: 2, ab: "B", term: 4, ls: 4, unit: 39,
    img: "img/s2/",
    source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 39 – Review of learning (CC BY 4.0).",
    reviews: [
      // Review 1
      [
        {
          type: "mc", focus: "Representing numbers using place value B",
          prompt: "The expanded form for 3678 is:",
          options: ["3000 + 7000 + 60 + 8", "8000 + 7000 + 60 + 3", "3000 + 6000 + 70 + 7", "3000 + 600 + 70 + 8"],
          answer: 3,
          explain: "3678 is 3 thousands, 6 hundreds, 7 tens and 8 ones: 3000 + 600 + 70 + 8. The slide's option D read 3000 + 6000 + 70 + 8, which is 9078, so no option was correct. It has been fixed to 3000 + 600 + 70 + 8.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 0, target: 3678, need: "standard", hint: "Build 3678. What is each digit worth?" }]
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Explain why these times are incorrect. Clock A shows 06:75. Clock B shows 55:10.",
          img: "u39-clocks.png",
          interact: [{ kind: "choose", rows: [
            { t: "Clock A (06:75)", options: ["There are only 60 minutes in an hour", "There are only 12 hours on a clock", "It is correct"], a: 0 },
            { t: "Clock B (55:10)", options: ["There are only 60 minutes in an hour", "There are only 24 hours in a day", "It is correct"], a: 1 }] }],
          answer: "Clock A: the minutes can only go from 00 to **59**, so 75 minutes is impossible (75 minutes is 1 hour 15 minutes, so 06:75 would really be 7:15). Clock B: the hours can only go up to 12 (or 23 on a 24-hour clock), so **55** hours is impossible."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Identify 3 pieces of information from this data about the Year 6 fundraiser games.",
          interact: [
            { kind: "bargraph", max: 80, step: 10, ylabel: "Student votes", xlabel: "Potential fundraiser games", label: "Year 6 fundraiser games: student votes for each game", series: [{ l: "Votes", c: "#4472C4" }],
              groups: [{ l: "Footy toss", v: [74] }, { l: "Obstacle circuit", v: [51] }, { l: "Ring toss", v: [36] }, { l: "Disco dance-off", v: [64] }, { l: "Jellybean jar", v: [42] }, { l: "Baby photos", v: [63] }, { l: "Lucky number", v: [38] }, { l: "Prize wheel", v: [65] }, { l: "Lucky dip", v: [64] }, { l: "Coin toss", v: [43] }] },
            { kind: "select", hint: "Tap every statement the graph shows.", items: [["Footy toss got the most votes", true], ["Ring toss got the fewest votes", true], ["Disco dance-off and lucky dip got the same number of votes", true], ["Coin toss got more than 50 votes", false], ["Lucky number got more votes than obstacle circuit", false]] }
          ],
          answer: "Answers vary, for example: footy toss was the most popular (about **74** votes); ring toss was the least popular (about **36**); disco dance-off and lucky dip both got about **64**; 4 games got more than 60 votes.",
          explain: "Vote counts are read from the slide's graph: footy toss 74, obstacle circuit 51, ring toss 36, disco dance-off 64, jellybean jar guessing 42, matching teacher baby photos 63, lucky number 38, prize wheel 65, lucky dip 64, coin toss 43."
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "If you know that 3 × 5 = 15, how could you use that understanding to quickly work out 6 × 5?",
          interact: [
            { kind: "array", rows: 3, cols: 5, showTotal: true, hint: "This is 3 × 5. Add rows to make 6 × 5. How many more rows?" },
            { kind: "choose", rows: [{ t: "6 is", options: ["double 3", "3 more than 5", "half of 3"], a: 0 }] },
            { kind: "input", fields: [{ label: "6 × 5 =", value: 30 }] }
          ],
          answer: "6 is double 3, so 6 × 5 is double 3 × 5. Double 15 is **30**."
        },
        {
          type: "sr", focus: "Geometric measure B: Position",
          prompt: "Use compass directions to describe the route from the surfboard to the crab.",
          interact: [
            { kind: "gridref", src: "img/s2/u39-beach.png", alt: "Beach map on a grid, columns A to J and rows 1 to 7, with a compass showing north at the top", box: [5.6, 6.6, 94.4, 91.3], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], rows: ["1", "2", "3", "4", "5", "6", "7"] },
            { kind: "input", fields: [{ label: "Go east", value: 5, suffix: "squares" }, { label: "then go south", value: 4, suffix: "squares" }] }
          ],
          answer: "The surfboard is in **B2** and the crab is in **G6**. Go **5 squares east** (B to G), then **4 squares south** (2 to 6). Going 4 south then 5 east also works.",
          explain: "North is at the top of the map (the compass). The surfboard sits mostly in square B2."
        }
      ],
      // Review 2
      [
        {
          type: "tf", focus: "Representing numbers using place value B",
          prompt: "Stacey said the value of the 7 in 4789 is 700.",
          answer: true,
          explain: "4789 is 4 thousands, 7 hundreds, 8 tens and 9 ones. The 7 is in the hundreds place, so its value is 700.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 4789, hint: "Look at the column the 7 is in." }]
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "It is 3:47 pm. Maggie wants to attend the Dare Devil Acrobatics at 4 pm. How many minutes until 4 pm?",
          img: "u39-schedule.png",
          interact: [
            { kind: "jumps", time: true, ampm: true, start: 947, end: 960, steps: [1, 3, 10], hint: "Start at 3:47 pm. Jump to 3:50 pm, then to 4:00 pm." },
            { kind: "input", fields: [{ label: "Minutes until 4 pm", value: 13, suffix: "minutes" }] }
          ],
          cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Count on to the hour", s: "3:47 + 3 minutes = 3:50. 3:50 + 10 minutes = 4:00. 3 + 10 = 13 minutes." }, { t: "Take away from 60", s: "4 pm is 60 minutes after 3 pm. 60 − 47 = 13 minutes." }] },
          answer: "**13 minutes** (3 minutes to 3:50 pm, then 10 minutes to 4:00 pm)."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Create a list of categories to sort this data.",
          interact: [{ kind: "classify", view: [610, 258], hint: "Choose a category, then tap each word that belongs in it.",
            cats: [{ k: "f", t: "Food and drink", c: "#F2994A" }, { k: "c", t: "Clothing", c: "#B36AE2" }, { k: "a", t: "Animals", c: "#22A06B" }, { k: "t", t: "Transport", c: "#2F6FE4" }, { k: "u", t: "Things we use", c: "#E9B500" }],
            shapes: tiles }],
          answer: "Answers vary, for example: **food and drink** (banana, carrot, orange juice, watermelon), **clothing** (socks, T-shirt, shoes, hat, gloves), **animals** (elephant, dog, fish, penguin), **transport** (train, helicopter, truck, bike), **things we use** (school bag, spoon, chair).",
          explain: "Other category lists are fine too (for example living and non-living). Fish is sorted with the animals here."
        },
        {
          type: "sr", focus: "Multiplicative relations A",
          prompt: "Find the total of this partially covered array.",
          img: "u39-array.png",
          interact: [
            { kind: "array", rows: 3, cols: 1, showTotal: true, hint: "There are 3 rows. Use the bottom row to count the columns, then build the whole array." },
            { kind: "input", fields: [{ label: "Rows", value: 3 }, { label: "Columns", value: 6 }, { label: "Total", value: 18 }] }
          ],
          answer: "3 rows of 6: 3 × 6 = **18**.",
          explain: "The bottom row shows the edge of a 6th column, so the array is taken as 3 rows of 6."
        },
        {
          type: "sr", focus: "Geometric measure B: Length",
          prompt: "Explain the term perimeter and how it is calculated. Use this rectangle to show your thinking.",
          interact: [
            { kind: "sides", label: "Rectangle 6 cm long and 4 cm wide", view: [420, 230], fill: "#C9D6F2",
              poly: [[90, 50], [330, 50], [330, 170], [90, 170]],
              dims: [{ from: [90, 32], to: [330, 32] }, { from: [70, 50], to: [70, 170] }],
              labels: [{ x: 210, y: 24, t: "6 cm" }, { x: 60, y: 116, t: "4 cm", anchor: "end" }] },
            { kind: "choose", rows: [{ t: "Perimeter is", options: ["the distance all the way around a shape", "the space inside a shape", "the length of one side"], a: 0 }] },
            { kind: "input", fields: [{ label: "Perimeter", value: 20, suffix: "cm" }] }
          ],
          answer: "Perimeter is the **distance around the outside** of a shape. Add the lengths of all the sides: 6 + 4 + 6 + 4 = **20 cm**.",
          explain: "The slide asks for an explanation only. A 6 cm by 4 cm rectangle is added so the class can show it. Opposite sides of a rectangle are equal, so the unlabelled sides are 6 cm and 4 cm."
        }
      ],
      // Review 3
      [
        {
          type: "mc", focus: "Representing numbers using place value B",
          prompt: "40 000 + 8000 + 50 + 6 can be renamed as:",
          options: ["4853", "56 704", "48 056", "48 675"],
          answer: 2,
          explain: "4 ten thousands, 8 thousands, 0 hundreds, 5 tens and 6 ones is 48 056. There are no hundreds, so a 0 holds the hundreds place.",
          interact: [{ kind: "pv", cols: ["TTh", "Th", "H", "T", "O"], start: 0, target: 48056, need: "standard", hint: "Build 40 000 + 8000 + 50 + 6. What goes in the hundreds?" }]
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Match the following terms to am or pm: midnight, midday, noon.",
          interact: [
            { kind: "clock", time: "12:00" },
            { kind: "choose", rows: [
              { t: "Midnight (12:00)", options: ["am", "pm"], a: 0 },
              { t: "Midday (12:00)", options: ["am", "pm"], a: 1 },
              { t: "Noon (12:00)", options: ["am", "pm"], a: 1 }] }
          ],
          answer: "Midnight is **12:00 am** (the start of a new day). Midday and noon are the same time: **12:00 pm**."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Record the missing data in this table.",
          interact: [
            { kind: "tally", hint: "These are the tally marks from the table. Count them in fives.", rows: [{ l: "Pizza", start: 11 }, { l: "Burger", start: 15 }, { l: "Pasta", start: 14 }, { l: "Fish", start: 2 }, { l: "Soup", start: 4 }] },
            { kind: "input", fields: [{ label: "Pizza", value: 11 }, { label: "Burger", value: 15 }, { label: "Pasta", value: 14 }, { label: "Fish", value: 2 }, { label: "Soup", value: 4 }] }
          ],
          answer: "Pizza **11** · Burger **15** · Pasta **14** · Fish **2** · Soup **4**",
          explain: "Tallies read from the slide: pizza 5 + 5 + 1, burger 5 + 5 + 5, pasta 5 + 5 + 4, fish 2, soup 4."
        },
        {
          type: "sr", focus: "Multiplicative relations B",
          prompt: "Rewrite the following number sentences using the associative property: 10 × 6, 7 × 8, 6 × 4.",
          interact: [{ kind: "sentence", fields: [
            { label: "10 × 6", sample: "(5 x 2) x 6 = 5 x (2 x 6)", placeholder: "e.g. (5 x 2) x 6 = 5 x (2 x 6)", re: "^(?=.*6)(?=.*\\(.*=.*\\().*", msg: "Split one number into a multiplication in brackets, then move the brackets: (5 × 2) × 6 = 5 × (2 × 6)." },
            { label: "7 × 8", sample: "7 x (2 x 4) = (7 x 2) x 4", placeholder: "e.g. 7 x (2 x 4) = (7 x 2) x 4", re: "^(?=.*7)(?=.*\\(.*=.*\\().*", msg: "Split 8 into 2 × 4, then move the brackets: 7 × (2 × 4) = (7 × 2) × 4." },
            { label: "6 × 4", sample: "(3 x 2) x 4 = 3 x (2 x 4)", placeholder: "e.g. (3 x 2) x 4 = 3 x (2 x 4)", re: "^(?=.*4)(?=.*\\(.*=.*\\().*", msg: "Split 6 into 3 × 2, then move the brackets: (3 × 2) × 4 = 3 × (2 × 4)." }] }],
          answer: "Answers vary, for example: 10 × 6 = (5 × 2) × 6 = 5 × (2 × 6) = 5 × 12 = **60** · 7 × 8 = 7 × (2 × 4) = (7 × 2) × 4 = 14 × 4 = **56** · 6 × 4 = (3 × 2) × 4 = 3 × (2 × 4) = 3 × 8 = **24**. Changing the grouping does not change the answer."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Does obtaining heads when tossing a coin affect the chance of obtaining heads on the next toss? Explain your thinking to a partner.",
          interact: [{ kind: "choose", rows: [
            { t: "Does the first toss change the next toss?", options: ["Yes", "No"], a: 1 },
            { t: "The chance of heads on the next toss is", options: chance, a: 2 }] }],
          answer: "**No.** The coin does not remember the last toss. Each toss has 2 equally likely outcomes, heads or tails, so the chance of heads is always **equally likely** (1 out of 2)."
        }
      ],
      // Review 4
      [
        {
          type: "tf", focus: "Representing numbers using place value B",
          prompt: "Josh said the expanded notation of 5674 is 5000 + 600 + 40 + 7.",
          answer: false,
          explain: "5674 is 5000 + 600 + 70 + 4. Josh swapped the tens and ones: 5000 + 600 + 40 + 7 is 5647.",
          interact: [{ kind: "pv", cols: ["Th", "H", "T", "O"], start: 5674, hint: "Read each column. How many tens? How many ones?" }]
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: 2D shape",
          prompt: "Draw the different ways you can split a trapezium into 2 or more shapes.",
          interact: [
            { kind: "sketch", shape: trap },
            { kind: "select", hint: "Tap every split that works for this trapezium.", items: [["2 triangles", true], ["1 rectangle and 2 triangles", true], ["1 parallelogram and 1 triangle", true], ["2 smaller trapeziums", true], ["2 circles", false]] }
          ],
          answer: "Answers vary: a diagonal makes **2 triangles**; two lines straight down from the top corners make **a rectangle and 2 triangles**; one line parallel to a slanted side makes **a parallelogram and a triangle**; a line across, parallel to the base, makes **2 trapeziums**."
        },
        {
          type: "sr", focus: "Chance A",
          prompt: "What are all the possible outcomes when rolling two 6-sided dice?",
          interact: [
            { kind: "cells", cols: 7, w: 56, grid: [
              ["#+", "#1", "#2", "#3", "#4", "#5", "#6"],
              ["#1", 2, 3, 4, 5, 6, 7],
              ["#2", 3, 4, 5, 6, 7, 8],
              ["#3", 4, 5, 6, 7, 8, 9],
              ["#4", 5, 6, 7, 8, 9, 10],
              ["#5", 6, 7, 8, 9, 10, 11],
              ["#6", { v: 7 }, { v: 8 }, { v: 9 }, { v: 10 }, { v: 11 }, { v: 12 }]], msg: "Add the number on die 1 (the row) to the number on die 2 (the column)." },
            { kind: "input", fields: [{ label: "Number of possible outcomes", value: 36 }, { label: "Smallest total", value: 2 }, { label: "Largest total", value: 12 }] }
          ],
          answer: "Each die can land on 1 to 6, so there are 6 × 6 = **36** outcomes: (1, 1), (1, 2) … (6, 6). The totals go from **2** to **12**, and 7 is the most common total (6 ways).",
          explain: "The table shows the total for each pair. Students fill in the last row (die 1 shows 6)."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: Area",
          prompt: "Calculate the area of the following two playgrounds. Playground 1: length = 10 m, width = 4 m. Playground 2: length = 5 m, width = 8 m. What do you notice?",
          interact: [
            { kind: "areagrid", cells: ["1111111111", "1111111111", "1111111111", "1111111111"], size: 40 },
            { kind: "areagrid", cells: ["11111", "11111", "11111", "11111", "11111", "11111", "11111", "11111"], size: 40 },
            { kind: "input", fields: [{ label: "Playground 1", value: 40, suffix: "m²" }, { label: "Playground 2", value: 40, suffix: "m²" }] },
            { kind: "choose", rows: [{ t: "I notice", options: ["they have the same area", "playground 1 is bigger", "playground 2 is bigger"], a: 0 }] }
          ],
          cubes: { ops: ["×"], solve: [{ t: "Multiply length by width", s: "10 × 4 = 40 m². 5 × 8 = 40 m²." }, { t: "Halve and double", s: "Halve 10 to get 5 and double 4 to get 8. 5 × 8 is the same as 10 × 4 = 40 m²." }] },
          answer: "Playground 1: 10 × 4 = **40 m²**. Playground 2: 5 × 8 = **40 m²**. They are different shapes but have the **same area**.",
          explain: "Each square in the grids stands for 1 square metre."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Mass",
          prompt: "Name some everyday objects that are measured in grams. Why are grams used instead of kilograms to measure these objects?",
          interact: [
            { kind: "select", hint: "Tap every object you would weigh in grams.", items: [["An apple", true], ["A pencil", true], ["A slice of bread", true], ["A letter", true], ["A car", false], ["A bag of cement", false], ["A person", false]] },
            { kind: "choose", rows: [{ t: "Grams are used because these objects are", options: ["lighter than 1 kilogram", "heavier than 1 kilogram", "very long"], a: 0 }] }
          ],
          answer: "Answers vary: an apple, a pencil, a slice of bread, a letter, a packet of chips. They are **lighter than 1 kilogram**, so grams (1000 g = 1 kg) give a more exact measurement."
        }
      ],
      // Review 5
      [
        {
          type: "mc", focus: "Partitioned Fractions B",
          prompt: "1[1/4] can be renamed as:",
          options: ["[7/4]", "[3/4]", "[5/4]", "[6/4]"],
          answer: 2,
          explain: "1 whole is [4/4]. [4/4] + [1/4] = [5/4].",
          interact: [{ kind: "marker", min: 0, max: 2, divs: 8, majorEvery: 4, labels: [0, 1, 2], label: "1¼", hint: "Each gap is one quarter. Slide the pin to 1[1/4] and count the quarters from 0." }]
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: 2D shape",
          prompt: "Meg rotated the triangle a half-turn each turn. Describe the error in her transformation.",
          img: "u39-meg.png",
          interact: [{ kind: "choose", rows: [
            { t: "Which triangle is wrong?", options: ["1", "2", "3", "4"], a: 3 },
            { t: "What did Meg do?", options: ["a quarter turn", "a half-turn", "nothing"], a: 0 },
            { t: "Triangle 4 should look like", options: ["triangle 1", "triangle 2"], a: 1 }] }],
          answer: "Triangles 1 to 3 are correct half-turns. **Triangle 4** is wrong: Meg made a **quarter turn** (clockwise) instead of a half-turn. A half-turn of triangle 3 would look like **triangle 2**, with the square corner at the top right and the dot at the top left.",
          explain: "The slide shows 4 triangles. Follow the dot: in a half-turn it moves to the opposite corner area."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "A bag has 10 red marbles and 12 blue. Erin removed one red marble. Are the chances of selecting a blue marble still the same? Explain your reasoning.",
          interact: [{ kind: "choose", rows: [
            { t: "Are the chances of blue the same?", options: ["Yes, the same", "No, blue is now more likely", "No, blue is now less likely"], a: 1 }] }],
          cubes: { ops: ["−"], solve: [{ t: "Compare before and after", s: "Before: 12 blue out of 22 marbles. After: 10 − 1 = 9 red, so 12 blue out of 21 marbles." }, { t: "Think about the reds", s: "There are fewer red marbles to pick, but the same number of blue, so blue is a little more likely." }] },
          answer: "**No.** Now there are 9 red and 12 blue (21 marbles). The blue marbles are a bigger share of the bag: 12 out of 21 instead of 12 out of 22, so selecting blue is **slightly more likely**."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure A: 2D shape",
          prompt: "Which one doesn't belong? Communicate your reasoning.",
          interact: [
            { kind: "corners", view: [600, 215], label: "A trapezium, a square turned on its corner and a parallelogram",
              shapes: [{ p: [[40, 160], [190, 160], [160, 60], [70, 60]], l: "A", fill: "#FFDF5D" }, { p: [[300, 30], [375, 105], [300, 180], [225, 105]], l: "B", fill: "#C9D6F2" }, { p: [[410, 160], [530, 160], [580, 60], [460, 60]], l: "C", fill: "#F7C6D0" }] },
            { kind: "choose", rows: [{ t: "Doesn't belong", options: ["A", "B", "C"], a: [0, 1, 2] }] }
          ],
          answer: "Answers vary. **A** (trapezium) has only 1 pair of parallel sides; B and C have 2 pairs. **B** (a square turned on its corner) has 4 right angles and 4 equal sides. **C** (parallelogram) is the only one that leans with no line of symmetry.",
          explain: "Any choice is right if the reason is true. Shape B is drawn as a square turned on its corner, as it appears on the slide."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Order the capacities from smallest to largest.",
          interact: [{ kind: "order", items: ["950 mL", "876 mL", "120 mL", "4856 mL", "95 mL", "762 mL"], answer: [4, 2, 5, 1, 0, 3] }],
          answer: "**95 mL, 120 mL, 762 mL, 876 mL, 950 mL, 4856 mL**"
        }
      ],
      // Review 6
      [
        {
          type: "tf", focus: "Partitioned Fractions B",
          prompt: "Tyler said 1[3/4] is correctly placed on the number line.",
          img: "u39-tyler.png",
          answer: false,
          explain: "Each gap is one quarter. Tyler's label is 2 quarters past 1, which is 1[2/4] (1[1/2]). 1[3/4] is 3 quarters past 1, the last mark before 2.",
          interact: [{ kind: "marker", min: 0, max: 2, divs: 8, majorEvery: 4, labels: [0, 1, 2], label: "1¾", hint: "Count the quarters past 1. Where does 1[3/4] really go?" }]
        },
        {
          type: "sr", focus: "Geometric Measure B: Angles",
          prompt: "Describe this angle compared to a right angle.",
          img: "u39-angle.png",
          interact: [
            { kind: "angle", start: 90, hint: "Start at a right angle. Close the arm to match the picture." },
            { kind: "choose", rows: [{ t: "This angle is", options: ["less than a right angle", "equal to a right angle", "greater than a right angle"], a: 0 }] }
          ],
          answer: "It is **less than a right angle** (an acute angle). The arms are closer together than the corner of a square."
        },
        {
          type: "sr", focus: "Chance B",
          prompt: "Using the chance words on the scale, describe how likely these events could happen: a thunderstorm today, an ice-cream van visiting school tomorrow, a coin toss landing on heads, turning a year older each year.",
          interact: [{ kind: "choose", rows: [
            { t: "A thunderstorm today", options: chance, a: [0, 1, 2, 3] },
            { t: "An ice-cream van visiting school tomorrow", options: chance, a: [0, 1, 3] },
            { t: "A coin toss landing on heads", options: chance, a: 2 },
            { t: "Turning a year older each year", options: chance, a: 4 }] }],
          answer: "A thunderstorm today: answers vary with the weather, usually **unlikely** · An ice-cream van tomorrow: usually **unlikely** · A coin landing on heads: **equally likely** · Turning a year older each year: **certain**.",
          explain: "The first two depend on the day and the school, so several answers are accepted. They cannot be certain."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B",
          prompt: "Draw the top, front and side view of a cube built from 8 centimetre cubes (2 long, 2 wide and 2 high). Record the volume in cubic centimetres.",
          interact: [
            { kind: "sketch", grid: "square" },
            { kind: "choose", rows: [{ t: "Each view is", options: ["a square", "a triangle", "a rectangle that is not a square"], a: 0 }] },
            { kind: "input", fields: [{ label: "Volume", value: 8, suffix: "cm³" }] }
          ],
          answer: "The top, front and side views are all the **same square** (2 cubes by 2 cubes). Volume: 2 × 2 × 2 = **8 cm³**.",
          explain: "The slide gives no size for the cube, so a 2 cm cube built from 8 centimetre cubes is used so there is one volume to record."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: Area",
          prompt: "Calculate the area of this rectangle in square centimetres.",
          interact: [
            { kind: "areagrid", cells: ["11111111", "11111111", "11111111", "11111111"], size: 50 },
            { kind: "input", fields: [{ label: "Area", value: 32, suffix: "cm²" }] }
          ],
          answer: "8 columns × 4 rows = **32 cm²**.",
          explain: "The slide's rectangle covers 8 by 4 grid squares. Each grid square is taken as 1 square centimetre."
        }
      ],
      // Review 7
      [
        {
          type: "mc", focus: "Partitioned Fractions B",
          prompt: "Which fraction should be recorded in the box?",
          img: "u39-box.png",
          options: ["1[1/2]", "1[2/3]", "1[1/4]", "1[3/4]"],
          answer: 0,
          explain: "The line from 0 to 1 is split into 4 equal parts, so each mark is a quarter. The box is 2 quarters past 1: 1[2/4], which is the same as 1[1/2].",
          interact: [{ kind: "marker", min: 0, max: 2, divs: 8, majorEvery: 4, labels: [0, 1, 2], label: "?", hint: "Count the marks from 1 to the box. Each mark is one quarter." }]
        },
        {
          type: "sr", focus: "Geometric Measure B: Angles",
          prompt: "Fill in the spaces with more, less or the same as. An acute angle is ___ than a quarter turn. A right angle is ___ a quarter turn. An obtuse angle is ___ than a quarter turn.",
          interact: [
            { kind: "angle", names: true, start: 90, hint: "Drag the arm to make each angle and compare it with a quarter turn." },
            { kind: "choose", rows: [
              { t: "An acute angle is ___ than a quarter turn.", options: ["more", "less", "the same as"], a: 1 },
              { t: "A right angle is ___ a quarter turn.", options: ["more", "less", "the same as"], a: 2 },
              { t: "An obtuse angle is ___ than a quarter turn.", options: ["more", "less", "the same as"], a: 0 }] }
          ],
          answer: "An acute angle is **less** than a quarter turn. A right angle is **the same as** a quarter turn. An obtuse angle is **more** than a quarter turn."
        },
        {
          type: "sr", focus: "Data A",
          prompt: "Identify 3 pieces of information from this data about gaming devices in homes.",
          interact: [
            { kind: "bargraph", max: 40, step: 10, minor: 5, ylabel: "Number of homes", xlabel: "Types of gaming devices", label: "Gaming devices in homes", series: [{ l: "Homes", c: "#2F9FD8" }],
              groups: [{ l: "Game console", v: [40] }, { l: "Smartphone", v: [35] }, { l: "PC", v: [30] }, { l: "Tablet", v: [21] }, { l: "Handheld", v: [3] }, { l: "VR", v: [2] }] },
            { kind: "select", hint: "Tap every statement the graph shows.", items: [["Game consoles are in the most homes", true], ["VR is in the fewest homes", true], ["More homes have a smartphone than a PC", true], ["More homes have a handheld than a tablet", false], ["Exactly 50 homes have a game console", false]] }
          ],
          answer: "Answers vary, for example: game consoles are the most common (**40** homes); VR is the least common (about **2** homes); 5 more homes have a smartphone (35) than a PC (30).",
          explain: "The slide's graph is a horizontal bar graph. It is redrawn as a column graph with the same values: game console 40, smartphone 35, PC 30, tablet 21, handheld 3, VR 2."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Calculate the volume of this prism using cubic centimetres.",
          img: "u39-cube.png",
          interact: [
            { kind: "array", rows: 3, cols: 3, showTotal: true, hint: "This is one layer: 3 rows of 3. How many layers are there?" },
            { kind: "input", fields: [{ label: "Cubes in one layer", value: 9 }, { label: "Layers", value: 3 }, { label: "Volume", value: 27, suffix: "cm³" }] }
          ],
          answer: "Each layer is 3 × 3 = 9 cubes, and there are 3 layers: 9 × 3 = **27 cm³**.",
          explain: "Each small cube is taken as 1 cubic centimetre."
        },
        {
          type: "sr", focus: "Non-spatial measure B: Time",
          prompt: "Identify four situations where duration is measured in seconds.",
          interact: [{ kind: "select", hint: "Tap every situation you would time in seconds.", items: [["Running a 100 m race", true], ["Holding your breath", true], ["Brushing your teeth", true], ["A countdown to a rocket launch", true], ["A summer holiday", false], ["A school term", false], ["Microwaving a snack", true]] }],
          answer: "Answers vary: a running race, holding your breath, brushing your teeth, a rocket countdown, microwaving food, a commercial on TV. These are short events, so seconds give an exact time."
        }
      ],
      // Review 8
      [
        {
          type: "tf", focus: "Partitioned Fractions B",
          prompt: "Erik said that 1[3/4] is placed correctly on the number line.",
          img: "u39-erik.png",
          answer: false,
          explain: "Each gap on this line is a half. Erik's mark is halfway between 2 and 3, which is 2[1/2]. 1[3/4] is between 1[1/2] and 2, before the 2.",
          interact: [{ kind: "marker", min: 0, max: 3, divs: 12, majorEvery: 4, labels: [0, 1, 2, 3], label: "1¾", hint: "Each gap here is a quarter. Slide the pin to 1[3/4]." }]
        },
        {
          type: "sr", focus: "Geometric Measure B: Angles",
          prompt: "Describe the following angles as less than, equal to, about the same as or greater than a right angle.",
          img: "u39-angles.png",
          interact: [
            { kind: "angle", start: 90, hint: "Make each angle with the arm and compare it with the right angle." },
            { kind: "choose", rows: [
              { t: "Angle 1", options: ["less than", "equal to", "about the same as", "greater than"], a: 0 },
              { t: "Angle 2", options: ["less than", "equal to", "about the same as", "greater than"], a: 1 },
              { t: "Angle 3", options: ["less than", "equal to", "about the same as", "greater than"], a: 3 },
              { t: "Angle 4", options: ["less than", "equal to", "about the same as", "greater than"], a: [1, 2] }] }
          ],
          answer: "1: **less than** a right angle · 2: **equal to** a right angle (it has the square marker) · 3: **greater than** a right angle · 4: **about the same as** a right angle (it looks square but has no marker).",
          explain: "Angle 4 has no right-angle marker, so about the same as is the expected answer; equal to is also accepted."
        },
        {
          type: "sr", focus: "Data B",
          prompt: "Explain why this is not an efficient way to represent this data.",
          img: "u39-travel.png",
          interact: [
            { kind: "tally", hint: "Tally how each student travels to school.", rows: [{ l: "Walk", a: 6 }, { l: "Train", a: 6 }, { l: "Drive", a: 8 }, { l: "Bike", a: 2 }, { l: "Bus", a: 2 }] },
            { kind: "select", hint: "Tap every reason the list is not efficient.", items: [["You have to count every name to find out how many walk", true], ["It is hard to compare the ways of travelling", true], ["You cannot see which is most popular at a glance", true], ["It has too few students", false]] }
          ],
          answer: "The data is a list of names, so you must count each one to compare. A **tally, table or column graph** shows it at a glance: walk 6, train 6, drive **8** (most popular), bike 2, bus 2 (24 students).",
          explain: "Counts are taken from the 24 names on the slide."
        },
        {
          type: "sr", focus: "Three-dimensional spatial structure B: Volume",
          prompt: "Jo made a rectangular prism out of 72 centimetre cubes. It has a base of 8 centimetre cubes. How many layers high is it?",
          interact: [
            { kind: "array", rows: 1, cols: 8, showTotal: true, hint: "Each row is one layer of 8 cubes. Add layers until you reach 72." },
            { kind: "input", fields: [{ label: "Layers", value: 9 }] }
          ],
          cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Divide by the base", s: "72 ÷ 8 = 9, so there are 9 layers." }, { t: "Count by eights", s: "8, 16, 24, 32, 40, 48, 56, 64, 72. That is 9 eights, so 9 layers (8 × 9 = 72)." }] },
          answer: "72 ÷ 8 = **9 layers** high."
        },
        {
          type: "sr", focus: "Two-dimensional spatial structure B: 2D shape",
          prompt: "How many ways can you split this trapezium into other shapes?",
          interact: [
            { kind: "sketch", shape: trap },
            { kind: "select", hint: "Tap every set of shapes you can make by splitting this trapezium.", items: [["2 triangles", true], ["3 triangles", true], ["1 rectangle and 2 triangles", true], ["1 parallelogram and 1 triangle", true], ["2 trapeziums", true], ["1 circle and 1 square", false]] }
          ],
          answer: "Many ways, for example: **2 triangles** (one diagonal), **3 triangles**, **a rectangle and 2 triangles**, **a parallelogram and a triangle**, or **2 trapeziums**. Answers vary."
        }
      ]
    ]
  });
})();
