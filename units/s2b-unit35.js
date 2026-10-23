/*
  Stage 2 Year B, Unit 35 — Review of learning (Term 3, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "B", term: 3, ls: 5, unit: 35,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year B Unit 35 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "94 − ? = 67",
        options: ["24", "27", "37", "34"],
        answer: 1,
        explain: "Count on from 67 to 94: 67 + 3 = 70, 70 + 20 = 90, 90 + 4 = 94. That is 3 + 20 + 4 = 27. Check: 94 − 27 = 67.",
        interact: [{ kind: "jumps", start: 67, end: 94, steps: [1, 3, 10], hint: "Count on from 67 to 94. Add up the jumps." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "79 − 15 = ?? − ?? Write a different subtraction with two 2-digit numbers that has the same answer. Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 79, back: true, steps: [1, 5, 10], min: 60, max: 85, hint: "Jump back 15 from 79. Then move both numbers the same amount and see that the gap stays the same." },
          { kind: "expr", count: 2, target: 64, placeholder: "e.g. 84 − 20", sample: ["84 − 20", "80 − 16"], mustUse: { re: "^(?!\\s*79\\s*[-−–]\\s*15\\s*$)\\s*\\d{2}\\s*[-−–]\\s*\\d{2}\\s*$", msg: "Use a subtraction of two 2-digit numbers, different from 79 − 15." } }
        ],
        answer: "Answers vary, for example **84 − 20** or **80 − 16**. 79 − 15 = 64. If you add the same amount to both numbers (79 + 5 = 84, 15 + 5 = 20), the difference stays 64.",
        explain: "The slide shows 79 − 15 = ?? − ?? with no further numbers, so it is read as an equivalent subtraction (constant difference). Any two 2-digit numbers 64 apart are correct."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record the objects that have a mass of about 1 kilogram.",
        img: "u35-mass1.png",
        interact: [{ kind: "select", hint: "Tap every object that has a mass of about 1 kilogram.", items: [["A: car", false], ["B: lettuce", true], ["C: apple", false], ["D: tray of eggs", true]] }],
        answer: "**B** (lettuce) and **D** (tray of eggs). A car is about 1000 kg or more, and an apple is only about 150 g.",
        explain: "A large lettuce is about 1 kg, and a tray of about 20 eggs is a little over 1 kg (about 60 g each). Both are much closer to 1 kg than the car or the apple."
      },
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Record the first ten multiples of 6.",
        interact: [
          { kind: "numchart", from: 1, to: 60, answer: [6, 12, 18, 24, 30, 36, 42, 48, 54, 60], hint: "Count by sixes and tap each multiple." },
          { kind: "cells", cols: 5, grid: [[{ v: 6 }, { v: 12 }, { v: 18 }, { v: 24 }, { v: 30 }], [{ v: 36 }, { v: 42 }, { v: 48 }, { v: 54 }, { v: 60 }]], msg: "Count on by 6 each time." }
        ],
        answer: "**6, 12, 18, 24, 30, 36, 42, 48, 54, 60**"
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Start at the school office. Go east past the canteen. Head south when you reach the long jump pit. What area can you see when you look east?",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u35-map.png" },
          { kind: "choose", rows: [{ t: "Looking east I can see the…", options: ["Playground", "Soccer field", "Library", "Handball courts"], a: 1 }] }
        ],
        answer: "The **soccer field**. From the office (D4), go east past the canteen, basketball court and library to the long jump pit (H4). Head south to the seating area, then look east: the soccer field is there.",
        explain: "The compass shows north at the top, so east is to the right and south is down."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "The missing number is 21: 54 + 17 = 98 − ? Communicate your reasoning.",
        answer: false,
        explain: "54 + 17 = 71. 98 − 21 = 77, not 71. The missing number is 27, because 98 − 27 = 71.",
        interact: [{ kind: "scale", left: "54 + 17", right: "98 − ?", answer: 27 }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Find the missing number: 27 + 8 = ? + 15. Communicate your reasoning.",
        interact: [{ kind: "scale", left: "27 + 8", right: "? + 15", answer: 20 }],
        answer: "**20**. 27 + 8 = 35, and 20 + 15 = 35. Both sides are equal."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the mass in grams. Communicate your reasoning.",
        img: "u35-kettle.png",
        interact: [{ kind: "input", fields: [{ label: "Mass", value: 500, suffix: "g" }] }],
        answer: "**500 g**. The mass is ½ kg. 1 kg = 1000 g, and half of 1000 g is 500 g."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the distributive property to solve 7 × 8.",
        interact: [
          { kind: "array", rows: 7, cols: 8, showTotal: true, hint: "This is 7 rows of 8. Split it into 5 rows of 8 and 2 rows of 8 (or split the columns into 5 and 3)." },
          { kind: "expr", count: 1, target: 56, placeholder: "e.g. 5 x 8 + 2 x 8", sample: ["5 x 8 + 2 x 8"], mustUse: { re: "[x×X*].*[+].*[x×X*]", msg: "Split one factor: write it as two multiplications added together, like 5 × 8 + 2 × 8." } }
        ],
        answer: "**7 × 8 = 56**. For example 5 × 8 + 2 × 8 = 40 + 16 = 56, or 7 × 5 + 7 × 3 = 35 + 21 = 56."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Use the words less than, greater than, equal to or about the same to compare these angles to a right angle.",
        img: "u35-angles.png",
        interact: [
          { kind: "angle", start: 90, hint: "Drag the arm to match each angle and compare it with a right angle." },
          { kind: "choose", rows: [
            { t: "Angle A", options: ["less than", "equal to", "greater than"], a: 0 },
            { t: "Angle B", options: ["less than", "equal to", "greater than"], a: 2 },
            { t: "Angle C", options: ["less than", "equal to", "greater than"], a: 0 },
            { t: "Angle D", options: ["less than", "equal to", "greater than"], a: 2 }] }
        ],
        answer: "A: **less than** a right angle · B: **greater than** · C: **less than** · D: **greater than** a right angle.",
        explain: "None of the four angles is close to a right angle, so 'equal to' and 'about the same' are not used. A and C are narrow; B and D open wider than the corner of a page."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations B",
        prompt: "Which is the most efficient way to regroup when solving 527 + 83?",
        options: ["527 + 80 + 3", "520 + 7 + 80 + 3", "500 + 27 + 83", "500 + 27 + 80 + 3"],
        answer: 0,
        explain: "Keep 527 whole and only split 83: 527 + 80 = 607, 607 + 3 = 610. The other ways split both numbers into more parts, which takes more steps."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Regroup each number using place value and complete the calculation: 86 − 54",
        interact: [{ kind: "input", fields: [{ label: "86 =", value: 80 }, { label: "+", value: 6 }, { label: "54 =", value: 50 }, { label: "+", value: 4 }, { label: "Tens: 80 − 50 =", value: 30 }, { label: "Ones: 6 − 4 =", value: 2 }, { label: "86 − 54 =", value: 32 }] }],
        answer: "86 = 80 + 6 and 54 = 50 + 4. 80 − 50 = 30 and 6 − 4 = 2. 30 + 2 = **32**."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the mass of the objects in grams.",
        img: "u35-scales.png",
        interact: [{ kind: "input", fields: [{ label: "A: 2 kg 250 g =", value: 2250, suffix: "g" }, { label: "B: 3 kg 500 g =", value: 3500, suffix: "g" }, { label: "C: 1 kg 750 g =", value: 1750, suffix: "g" }] }],
        answer: "A: **2250 g** · B: **3500 g** · C: **1750 g**. Each kilogram is 1000 g."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "This array is partially hidden. How many counters are there in the entire array?",
        img: "u35-array.png",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [4, 6], hint: "Count the counters along the top row and down the side. Build the whole array." },
          { kind: "input", fields: [{ label: "Rows", value: 4 }, { label: "Counters in each row", value: 6 }, { label: "Total", value: 24, suffix: "counters" }] }
        ],
        answer: "The top row shows 6 counters and the side shows 4 rows. 4 × 6 = **24 counters**."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Use the square-centimetre grid to estimate the area of this rock.",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u35-rock.png" },
          { kind: "input", fields: [{ label: "Area is about", min: 18, max: 24, suffix: "cm²" }] }
        ],
        answer: "About **21 cm²** (any estimate from 18 to 24 cm² is reasonable). Count the whole squares the rock covers (about 15), then join the part squares to make about 6 more.",
        explain: "The grid is 7 squares across and 5 down. The rock fills most of the middle three rows and parts of the top and bottom rows."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations B",
        prompt: "65 − 43 can be regrouped as 6 tens and 5 ones minus 4 tens and 3 ones.",
        answer: true,
        explain: "65 = 6 tens and 5 ones, 43 = 4 tens and 3 ones. 6 tens − 4 tens = 2 tens, 5 ones − 3 ones = 2 ones, so 65 − 43 = 22."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "? − 15 = 19. Jacob chose to use trial and error to solve the problem. Sophie wanted to use an inverse operation. Which strategy is more efficient? Communicate your reasoning.",
        interact: [
          { kind: "scale", left: "? − 15", right: "19", answer: 34 },
          { kind: "choose", rows: [{ t: "More efficient strategy", options: ["Jacob: trial and error", "Sophie: inverse operation"], a: 1 }] }
        ],
        answer: "**34**. Sophie's inverse operation is more efficient: 19 + 15 = 34 in one step. Trial and error may need many guesses."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record the mass of the objects in kilograms and grams.",
        img: "u35-objects.png",
        interact: [{ kind: "input", fields: [
          { label: "Laptop 1115 g =", value: 1, suffix: "kg" }, { label: "", value: 115, suffix: "g" },
          { label: "Potatoes 3250 g =", value: 3, suffix: "kg" }, { label: "", value: 250, suffix: "g" },
          { label: "Pumpkin 4899 g =", value: 4, suffix: "kg" }, { label: "", value: 899, suffix: "g" }] }],
        answer: "Laptop: **1 kg 115 g** · Potatoes: **3 kg 250 g** · Pumpkin: **4 kg 899 g**. Every 1000 g is 1 kg."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "This area model is covered with paint. Record the multiplication sentence to show the total number of squares in the entire grid.",
        img: "u35-paint.png",
        interact: [
          { kind: "array", rows: 1, cols: 1, target: [6, 5], hint: "Count the squares across the top and down the side. Build the whole grid." },
          { kind: "expr", count: 1, target: 30, placeholder: "e.g. 6 x 5", sample: ["6 x 5"], mustUse: { re: "^\\s*(6\\s*[x×X*]\\s*5|5\\s*[x×X*]\\s*6)\\s*$", msg: "Count the rows and the columns, then multiply them." } }
        ],
        answer: "**6 × 5 = 30** squares (or 5 × 6 = 30). The grid has 6 rows of 5 squares."
      },
      {
        type: "mc", focus: "Two-dimensional spatial structure B",
        prompt: "If you combine the 3 shapes, which shape can they form?",
        img: "u35-pieces.png",
        options: [{ img: "u35-optA.png", alt: "A four-sided shape with a square top and one slanted side" }, { img: "u35-optB.png", alt: "Parallelogram" }, { img: "u35-optC.png", alt: "Square" }],
        answer: 1,
        explain: "Put one triangle on each end of the rectangle, with the second triangle turned around. The slanted sides become the two slanted ends of a parallelogram. The slide labelled shape A a rhombus, but it is not one (its sides are not all equal), so the label has been removed."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Multiplicative relations A",
        prompt: "What is the 5th term in a sequence starting with 3 and increasing by 5 each step?",
        options: ["25", "15", "23", "28"],
        answer: 2,
        explain: "3, 8, 13, 18, 23. The 5th term is 23.",
        interact: [{ kind: "jumps", start: 3, steps: [5], max: 30, hint: "Start at 3 and jump by 5. Count the terms as you land." }]
      },
      {
        type: "sr", focus: "Additive relations A",
        prompt: "Mario has 160 coins. He loses 47 coins while running around. How many coins does he have left? Represent this problem using a bar model and a number line.",
        cubes: { ops: ["−"], also: ["+"], solve: [{ t: "Jump back on a number line", s: "160 − 40 = 120, 120 − 7 = 113 coins." }, { t: "Count on from 47", s: "47 + 3 = 50, 50 + 100 = 150, 150 + 10 = 160. 3 + 100 + 10 = 113 coins." }] },
        interact: [
          { kind: "bar", whole: { v: 160, l: "160" }, parts: [{ v: 47, l: "47", n: "lost" }, { v: 113, l: "113", hide: true, n: "left" }] },
          { kind: "jumps", start: 160, back: true, steps: [1, 7, 10, 40], min: 100, hint: "Jump back 47 from 160." },
          { kind: "input", fields: [{ label: "Coins left", value: 113 }] }
        ],
        answer: "160 − 47 = **113 coins**."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Find the perimeter of the square. Communicate your reasoning.",
        interact: [
          { kind: "sides", view: [300, 280], label: "A square with sides of 12 m", fill: "#C9D6F2",
            poly: [[70, 60], [230, 60], [230, 220], [70, 220]],
            dims: [{ from: [70, 38], to: [230, 38] }],
            labels: [{ x: 150, y: 26, t: "12 m" }] },
          { kind: "input", fields: [{ label: "Perimeter", value: 48, suffix: "m" }] }
        ],
        answer: "**48 m**. A square has 4 equal sides, so each side is 12 m: 12 + 12 + 12 + 12 = 48 m (or 4 × 12 = 48).",
        explain: "The slide asks to estimate, but the side length is given and every side of a square is equal, so the exact perimeter can be found."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Use the associative property to regroup the factors into multiples of 10 and record the totals. a) 5 × 70 b) 4 × 60 c) 7 × 80",
        interact: [{ kind: "sentence", fields: [
          { label: "a) 5 × 70 becomes", placeholder: "5 x (7 x 10) = …", re: "^\\s*5\\s*x\\s*\\(\\s*(7\\s*x\\s*10|10\\s*x\\s*7)\\s*\\)\\s*=\\s*350\\s*$", msg: "Write 70 as 7 × 10 in brackets, then the total, like 5 × (7 × 10) = 350.", sample: "5 x (7 x 10) = 350" },
          { label: "b) 4 × 60 becomes", placeholder: "4 x (6 x 10) = …", re: "^\\s*4\\s*x\\s*\\(\\s*(6\\s*x\\s*10|10\\s*x\\s*6)\\s*\\)\\s*=\\s*240\\s*$", msg: "Write 60 as 6 × 10 in brackets, then the total.", sample: "4 x (6 x 10) = 240" },
          { label: "c) 7 × 80 becomes", placeholder: "7 x (8 x 10) = …", re: "^\\s*7\\s*x\\s*\\(\\s*(8\\s*x\\s*10|10\\s*x\\s*8)\\s*\\)\\s*=\\s*560\\s*$", msg: "Write 80 as 8 × 10 in brackets, then the total.", sample: "7 x (8 x 10) = 560" }] }],
        answer: "a) 5 × (7 × 10) = 35 × 10 = **350** · b) 4 × (6 × 10) = 24 × 10 = **240** · c) 7 × (8 × 10) = 56 × 10 = **560**"
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Order the capacities from lowest to highest.",
        img: "u35-capacity.png",
        interact: [{ kind: "order", items: ["Bucket 9000 mL", "Can 330 mL", "Bottle 750 mL", "Container 5500 mL"], answer: [1, 2, 3, 0] }],
        answer: "**330 mL, 750 mL, 5500 mL, 9000 mL** (can, bottle, red container, bucket)."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "The coloured tiles are showing multiples of 3.",
        img: "u35-tiles.png",
        answer: false,
        explain: "There is 1 blue, 4 green, 7 red and 10 orange tiles. Each colour has 3 more than the last, but 1, 4, 7 and 10 are not multiples of 3 (multiples of 3 are 3, 6, 9, 12 …). The running totals 1, 5, 12, 22 are not all multiples of 3 either.",
        interact: [{ kind: "input", fields: [{ label: "Blue", value: 1 }, { label: "Green", value: 4 }, { label: "Red", value: 7 }, { label: "Orange", value: 10 }] }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Toby chose to use a vertical algorithm to solve 800 − 7. Is this an efficient strategy? Communicate your reasoning.",
        interact: [
          { kind: "jumps", start: 800, back: true, steps: [1, 7], min: 790, hint: "Jump back 7 from 800." },
          { kind: "choose", rows: [{ t: "Is the vertical algorithm efficient here?", options: ["Yes, it is the quickest way", "No, counting back 7 in your head is quicker"], a: 1 }] },
          { kind: "input", fields: [{ label: "800 − 7 =", value: 793 }] }
        ],
        answer: "**No.** 800 − 7 = **793**. Counting back 7 (800 → 793) is quick in your head. The algorithm needs trading across two zeros, which takes longer and is easy to get wrong."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "My dog Kara is 850 mm tall. What is Kara's height in centimetres?",
        img: "u35-dog.png",
        cubes: { ops: ["÷"], solve: [{ t: "Divide by 10", s: "There are 10 mm in 1 cm. 850 ÷ 10 = 85 cm." }, { t: "Count in tens", s: "80 cm = 800 mm and 5 cm = 50 mm, so 850 mm = 85 cm." }] },
        interact: [{ kind: "input", fields: [{ label: "Kara's height", value: 85, suffix: "cm" }] }],
        answer: "**85 cm**. 10 mm = 1 cm, so 850 mm ÷ 10 = 85 cm."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Complete the number sentences: 27 = ? × 3 and 27 ÷ 3 = ?",
        interact: [
          { kind: "array", rows: 3, cols: 9, showTotal: true, hint: "27 counters in 3 rows. How many in each row?" },
          { kind: "input", fields: [{ label: "27 =", value: 9, suffix: "× 3" }, { label: "27 ÷ 3 =", value: 9 }] }
        ],
        answer: "27 = **9** × 3 and 27 ÷ 3 = **9**. Multiplication and division are related."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record these times using am or pm notation: a) 10 to 9 in the morning b) 5 o'clock in the evening",
        interact: [
          { kind: "clock", time: "8:50" },
          { kind: "input", fields: [{ label: "a)", accept: ["8:50 am", "8:50am", "8.50 am"], placeholder: "h:mm am/pm" }, { label: "b)", accept: ["5:00 pm", "5 pm", "5pm", "5:00pm", "5.00 pm"], placeholder: "h:mm am/pm" }] }
        ],
        answer: "a) **8:50 am** · b) **5:00 pm**. Morning times are am and afternoon or evening times are pm."
      }
    ],
    // Review 7
    [
      {
        type: "sr", focus: "Multiplicative relations A",
        prompt: "Double 12 is the same as… You may choose more than one answer.",
        interact: [{ kind: "select", hint: "Tap every answer that equals double 12.", items: [["A: 12 × 12", false], ["B: 2 × 12", true], ["C: 2 + 12", false], ["D: 2 twelves", true]] }],
        answer: "**B** and **D**. Double 12 = 12 + 12 = 24, which is 2 × 12 or 2 twelves. 12 × 12 = 144 and 2 + 12 = 14."
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "Complete the algorithm by grouping units: 286 + 437",
        interact: [
          { kind: "pv", cols: ["H", "T", "O"], start: 0, hint: "Build 286, then add 437. When a place has 10 or more, group 10 ones into a ten and 10 tens into a hundred." },
          { kind: "input", fields: [{ label: "Ones: 6 + 7 =", value: 13 }, { label: "Tens: 80 + 30 + 10 =", value: 120 }, { label: "Hundreds: 200 + 400 + 100 =", value: 700 }, { label: "286 + 437 =", value: 723 }] }
        ],
        answer: "6 + 7 = 13 ones: write 3, regroup 1 ten. 8 + 3 + 1 = 12 tens: write 2, regroup 1 hundred. 2 + 4 + 1 = 7 hundreds. **286 + 437 = 723**."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert these measurements to metres.",
        img: "u35-measure.png",
        interact: [{ kind: "input", fields: [{ label: "A: 2 m and 56 cm =", value: 2.56, suffix: "m" }, { label: "B: 134 cm =", value: 1.34, suffix: "m" }] }],
        answer: "A: **2.56 m** · B: **1.34 m**. 100 cm = 1 m, so 56 cm = 0.56 m and 134 cm = 1 m 34 cm = 1.34 m."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Farmer Taran plants a garden bed with carrots in 12 rows of 7 seedlings each. Record the problem as a number sentence and solve it.",
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Split the 12 rows", s: "10 × 7 = 70 and 2 × 7 = 14. 70 + 14 = 84 seedlings." }, { t: "Double and double again", s: "3 × 7 = 21, 6 × 7 = 42, 12 × 7 = 84 seedlings." }] },
        interact: [
          { kind: "array", rows: 1, cols: 7, target: [12, 7], hint: "Build 12 rows of 7 seedlings." },
          { kind: "expr", count: 1, target: 84, placeholder: "e.g. 12 x 7", sample: ["12 x 7"], mustUse: { re: "^\\s*(12\\s*[x×X*]\\s*7|7\\s*[x×X*]\\s*12)\\s*$", msg: "Write the number sentence with the rows and the seedlings in each row." } }
        ],
        answer: "**12 × 7 = 84** seedlings."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "I want to survey 60 Stage 2 students to find out what their favourite playground games are. What is the most efficient method to collect and record this data? Communicate your reasoning.",
        img: "u35-data.png",
        interact: [{ kind: "choose", rows: [{ t: "Most efficient method", options: ["A tally chart", "Writing every name and game in a list", "A pie chart", "A column graph"], a: 0 }] }],
        answer: "A **tally chart**. List the games, then make one tally mark for each student's vote. It is quick to record 60 answers, and tallies group in fives so they are easy to count. The results can be shown in a column graph afterwards.",
        explain: "Graphs display data after it is collected. A list of every name is slower to write and harder to count."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Multiplicative relations A",
        prompt: "Double 20 = 20 × 2",
        answer: true,
        explain: "Double 20 = 20 + 20 = 40, and 20 × 2 = 40.",
        interact: [{ kind: "array", rows: 2, cols: 10, showTotal: true, hint: "2 rows of 10 is double 10. What would double 20 look like?" }]
      },
      {
        type: "sr", focus: "Additive relations B",
        prompt: "I have $10 to spend. I buy a chocolate bar for $2.50, a fruit bowl for $5.25 and a drink for $1.90. Do I have enough money to also buy a packet of chips for $2?",
        cubes: { ops: ["+", "−"], solve: [{ t: "Add, then compare", s: "$2.50 + $5.25 = $7.75. $7.75 + $1.90 = $9.65. $10 − $9.65 = $0.35 left, which is less than $2." }, { t: "Add all four", s: "$9.65 + $2 = $11.65, which is more than $10." }] },
        interact: [
          { kind: "shop", items: [["Chocolate bar", 2.5], ["Fruit bowl", 5.25], ["Drink", 1.9], ["Chips", 2]], budget: 10, hint: "Tap the chocolate bar, fruit bowl and drink. Show the total. Then try adding the chips." },
          { kind: "input", fields: [{ label: "Money left after 3 items", value: 0.35, prefix: "$" }] },
          { kind: "choose", rows: [{ t: "Can I also buy the chips?", options: ["Yes", "No"], a: 1 }] }
        ],
        answer: "**No.** The 3 items cost $9.65, so only **$0.35** is left. The chips cost $2."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "In a bean bag throwing competition, Tegan completed 3 throws. Convert these measurements to metres: a) 265 centimetres b) 280 centimetres c) 190 centimetres",
        cubes: { ops: ["÷"], solve: [{ t: "Split into metres and centimetres", s: "265 cm = 200 cm + 65 cm = 2 m 65 cm = 2.65 m." }, { t: "Divide by 100", s: "100 cm = 1 m, so 265 ÷ 100 = 2.65 m, 280 ÷ 100 = 2.8 m, 190 ÷ 100 = 1.9 m." }] },
        interact: [{ kind: "input", fields: [{ label: "a) 265 cm =", value: 2.65, suffix: "m" }, { label: "b) 280 cm =", value: 2.8, suffix: "m" }, { label: "c) 190 cm =", value: 1.9, suffix: "m" }] }],
        answer: "a) **2.65 m** · b) **2.80 m** · c) **1.90 m**"
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "There are 20 rows with 8 seats per row in a movie theatre. Complete the related number sentences: 20 × 8 = ? and ? ÷ ? = 20",
        cubes: { ops: ["×", "÷"], solve: [{ t: "Use a known fact", s: "2 × 8 = 16, so 20 × 8 = 160 seats." }, { t: "Use the inverse", s: "160 seats shared into rows of 8: 160 ÷ 8 = 20 rows." }] },
        interact: [
          { kind: "array", rows: 2, cols: 8, showTotal: true, hint: "This is 2 rows of 8. How many in 20 rows?" },
          { kind: "input", fields: [{ label: "20 × 8 =", value: 160 }, { label: "", value: 160, suffix: "÷" }, { label: "", value: 8, suffix: "= 20" }] }
        ],
        answer: "20 × 8 = **160** and **160 ÷ 8 = 20**."
      },
      {
        type: "sr", focus: "Data B",
        prompt: "Sir Taxalot is travelling to 3 small villages to collect money for the king. The chart shows how many people have paid the tax. What is the total number of people who have paid the tax?",
        img: "u35-tax.png",
        cubes: { ops: ["+", "×"], solve: [{ t: "Count the symbols first", s: "7 + 8 + 9 = 24 symbols. Each symbol is 10 people, so 24 × 10 = 240 people." }, { t: "Find each village", s: "70 + 80 + 90 = 240 people." }] },
        interact: [{ kind: "input", fields: [{ label: "Village 1", value: 70 }, { label: "Village 2", value: 80 }, { label: "Village 3", value: 90 }, { label: "Total", value: 240, suffix: "people" }] }],
        answer: "70 + 80 + 90 = **240 people**.",
        explain: "The slide asks for the total number of people visited, but the chart shows only people who paid the tax. The question now asks how many paid, which the chart answers."
      }
    ]
  ]
});
