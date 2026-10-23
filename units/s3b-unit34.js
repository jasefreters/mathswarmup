/*
  Stage 3 Year B, Unit 34 — Review of learning (Term 3, learning sequence 4: Weeks 7–8).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 3, ab: "B", term: 3, ls: 4, unit: 34,
  img: "img/s3/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 3 Year B Unit 34 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "0.75 is equivalent to:",
        options: ["25%", "50%", "75%", "45%"],
        answer: 2,
        explain: "0.75 is 75 hundredths, and per cent means out of 100, so 0.75 = 75%. It is also [3/4].",
        interact: [{ kind: "shade", parts: 4, pct: true, hint: "0.75 = [3/4]. Shade 3 quarters and read the percentage." }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "The distance between Sydney and Melbourne is best measured in: a) kilometres b) metres. Communicate your reasoning.",
        interact: [{ kind: "choose", rows: [
          { t: "Best unit", options: ["Kilometres", "Metres"], a: 0 },
          { t: "Why?", options: ["It is a very long distance, so metres would give a huge number", "Metres are more exact, so they are always better", "Kilometres are for short distances"], a: 0 }] }],
        answer: "**Kilometres**. Sydney to Melbourne is about 900 km by road (about 900 000 m). Kilometres keep the number small and easy to understand."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Select an efficient multiplicative strategy to solve 15 × 800. Communicate your reasoning.",
        interact: [
          { kind: "select", hint: "Tap every strategy that works well.", items: [
            ["15 × 8 = 120, then × 100 = 12 000", true],
            ["Double and halve: 30 × 400 = 12 000", true],
            ["Split 15: (10 × 800) + (5 × 800) = 8000 + 4000", true],
            ["Add 800 fifteen times", false]] },
          { kind: "input", fields: [{ label: "15 × 800", value: 12000 }] }
        ],
        answer: "**12 000**. For example, 15 × 8 = 120 and 120 × 100 = 12 000. Doubling and halving (30 × 400) or splitting 15 into 10 + 5 also work. Repeated addition is slow.",
        explain: "Any of the first three strategies is efficient. The class can compare which one they find quickest."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Which of these quadrilaterals have diagonals as lines of symmetry? You may select more than one answer.",
        interact: [
          { kind: "mirror", view: [600, 220], label: "Trapezium A, square B and parallelogram C with their diagonals dashed", hint: "Each dashed line is a diagonal. Predict, then tap a diagonal to fold the shape over it.",
            shapes: [
              { p: [[40, 160], [75, 50], [145, 50], [180, 160]], fill: "#9FB4E8", l: "A", ly: 200, lines: [[40, 160, 145, 50], [75, 50, 180, 160]] },
              { p: [[300, 35], [370, 105], [300, 175], [230, 105]], fill: "#9FB4E8", l: "B", ly: 205, lines: [[300, 35, 300, 175], [230, 105, 370, 105]] },
              { p: [[430, 50], [530, 50], [565, 160], [465, 160]], fill: "#9FB4E8", l: "C", ly: 200, lines: [[430, 50, 565, 160], [530, 50, 465, 160]] }] },
          { kind: "select", hint: "Tap every shape whose diagonals are lines of symmetry.", items: [["A", false], ["B", true], ["C", false]] }
        ],
        answer: "**B** only. Folding B along either diagonal makes the halves match exactly. The trapezium (A) and the parallelogram (C) don't match when folded along a diagonal."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Which spinner shows red as more likely to be spun? Communicate your reasoning.",
        img: "u34-spinners.png",
        interact: [{ kind: "choose", rows: [
          { t: "Spinner", options: ["A", "B", "C"], a: 1 },
          { t: "Why?", options: ["Red covers half of B, more than on A or C", "B has the fewest colours", "Red is at the top of B"], a: 0 }] }],
        answer: "**Spinner B**. Red covers [1/2] of B. On A red is [1/3], and on C it is less than [1/4]. The bigger the red part, the more likely red is."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "# This symbol means percentage.",
        answer: false,
        explain: "# is the hash (number) symbol. The percentage symbol is %."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Convert the following distances: a) 100 m is equivalent to __ km. b) 10 m is equivalent to __ km. c) 1250 m is equal to __ kilometres.",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 1250, shift: true, hint: "1000 m = 1 km, so divide by 1000: press ÷ 10 three times." },
          { kind: "input", fields: [{ label: "a) 100 m", value: 0.1, suffix: "km" }, { label: "b) 10 m", value: 0.01, suffix: "km" }, { label: "c) 1250 m", value: 1.25, suffix: "km" }] }
        ],
        answer: "a) **0.1 km** b) **0.01 km** c) **1.25 km**. There are 1000 m in 1 km, so divide the metres by 1000."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "9 slices of pepperoni are needed for 3 pizza slices. How many slices of pepperoni are needed for 24 pizza slices?",
        interact: [
          { kind: "jumps", start: 0, steps: [9], hint: "Each jump of 9 pepperoni covers 3 pizza slices. How many jumps make 24 pizza slices?" },
          { kind: "input", fields: [{ label: "Pepperoni slices", value: 72 }] }
        ],
        cubes: { ops: ["×", "÷"], solve: [{ t: "Scale up", s: "24 pizza slices is 8 lots of 3 (24 ÷ 3 = 8), so 8 × 9 = 72 pepperoni." }, { t: "Find one slice first", s: "9 ÷ 3 = 3 pepperoni per pizza slice, so 24 × 3 = 72." }] },
        answer: "**72** slices of pepperoni. 24 ÷ 3 = 8, and 8 × 9 = 72."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "The shape has been translated, reflected and rotated. a) What has changed about the shape? b) What has stayed the same?",
        img: "u34-transform1.png",
        interact: [
          { kind: "select", hint: "a) Tap everything that has changed.", items: [["Its position", true], ["Which way it faces or leans", true], ["Its size", false], ["Its side lengths", false], ["Its angles", false]] },
          { kind: "select", hint: "b) Tap everything that stayed the same.", items: [["Its size", true], ["Its side lengths", true], ["Its angles", true], ["Its shape", true], ["Its position", false]] }
        ],
        answer: "a) **Position and orientation** change: the shape has slid, flipped or turned. b) **Size, shape, side lengths and angles** stay the same."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "The expected probability of rolling a 6 is 1 out of 6. Which observed result is more reasonable: 2 sixes in 13 rolls, or 17 sixes in 18 rolls? Communicate your reasoning.",
        interact: [
          { kind: "numberline", min: 0, max: 1, tol: 0.04, items: [["[1/6] expected", 1 / 6], ["[2/13]", 2 / 13], ["[17/18]", 17 / 18]] },
          { kind: "choose", rows: [{ t: "More reasonable", options: ["2 sixes in 13 rolls", "17 sixes in 18 rolls"], a: 0 }] }
        ],
        answer: "**2 sixes in 13 rolls**. [2/13] is very close to [1/6] (about 2 in every 12 or 13 rolls). 17 sixes in 18 rolls is nearly every roll, far from 1 in 6."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Represents numbers B",
        prompt: "25% is equivalent to:",
        options: ["[2/5]", "0.25", "2.5", "[1/2]"],
        answer: 1,
        explain: "25% means 25 out of 100 = 0.25 = [1/4]. [2/5] = 40%, 2.5 = 250% and [1/2] = 50%.",
        interact: [{ kind: "shade", parts: 4, pct: true, hint: "Shade 1 quarter. What percentage is it?" }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Both rectangles have an area of 24 m². Which rectangle has the largest perimeter? Communicate your reasoning.",
        interact: [
          { kind: "sides", view: [420, 130], label: "Blue rectangle 12 m by 2 m", fill: "#CFE0FF", poly: [[90, 50], [390, 50], [390, 100], [90, 100]],
            dims: [{ from: [90, 30], to: [390, 30] }, { from: [70, 50], to: [70, 100] }],
            labels: [{ x: 240, y: 22, t: "12 m" }, { x: 58, y: 82, t: "2 m", anchor: "end" }] },
          { kind: "sides", view: [420, 150], label: "Red rectangle 8 m by 3 m", fill: "#FFD3D3", poly: [[90, 50], [290, 50], [290, 125], [90, 125]],
            dims: [{ from: [90, 30], to: [290, 30] }, { from: [70, 50], to: [70, 125] }],
            labels: [{ x: 190, y: 22, t: "8 m" }, { x: 58, y: 95, t: "3 m", anchor: "end" }] },
          { kind: "choose", rows: [{ t: "Largest perimeter", options: ["Blue (12 m by 2 m)", "Red (8 m by 3 m)", "They are the same"], a: 0 }] }
        ],
        answer: "The **blue rectangle**. Blue: 12 + 2 + 12 + 2 = 28 m. Red: 8 + 3 + 8 + 3 = 22 m. The same area can have different perimeters; the long, thin rectangle has the larger one.",
        explain: "Only one length and one width are labelled on each rectangle, as on the slide. Opposite sides of a rectangle are equal."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "A printer prints 15 pages every 5 seconds. How many pages does it print in 1 minute?",
        interact: [
          { kind: "jumps", start: 0, steps: [15], hint: "Each jump of 15 pages is 5 seconds. How many jumps fit in 60 seconds?" },
          { kind: "input", fields: [{ label: "Pages in 1 minute", value: 180 }] }
        ],
        cubes: { ops: ["×", "÷"], note: "1 minute = 60 seconds.", solve: [{ t: "Count the 5-second lots", s: "60 ÷ 5 = 12 lots, and 12 × 15 = 180 pages." }, { t: "Pages per second", s: "15 ÷ 5 = 3 pages each second, and 3 × 60 = 180 pages." }] },
        answer: "**180 pages**. 1 minute is 60 seconds, which is 12 lots of 5 seconds. 12 × 15 = 180."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Label what is happening to the shape in each box: reflect, translate or rotate.",
        img: "u34-transform2.png",
        interact: [{ kind: "choose", rows: [
          { t: "A", options: ["Reflect", "Translate", "Rotate"], a: 1 },
          { t: "B", options: ["Reflect", "Translate", "Rotate"], a: 0 },
          { t: "C", options: ["Reflect", "Translate", "Rotate"], a: 2 }] }],
        answer: "A: **translate** (slid across, the dot is still bottom right). B: **reflect** (flipped, the dot is now bottom left). C: **rotate** (turned a quarter turn, the dot has moved to the top).",
        explain: "Follow the dot. The trapezium looks the same when flipped, so only the dot shows the reflection."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the coordinates of each heart on the Cartesian plane: a) green b) yellow c) purple d) blue.",
        interact: [
          { kind: "plane", range: [-6, 6, -6, 6], points: [{ x: -4, y: 5, l: "a" }, { x: 5, y: 3, l: "b" }, { x: 2, y: -1, l: "c" }, { x: -3, y: -4, l: "d" }] },
          { kind: "input", fields: [
            { label: "a) green x", value: -4 }, { label: "y", value: 5 },
            { label: "b) yellow x", value: 5 }, { label: "y", value: 3 },
            { label: "c) purple x", value: 2 }, { label: "y", value: -1 },
            { label: "d) blue x", value: -3 }, { label: "y", value: -4 }] }
        ],
        answer: "a) green **(−4, 5)** b) yellow **(5, 3)** c) purple **(2, −1)** d) blue **(−3, −4)**. Go across the x-axis first, then up or down the y-axis.",
        explain: "The hearts are drawn as labelled points. Each coordinate is typed as an x box and a y box so negative signs are checked properly."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Represents numbers B",
        prompt: "75%, 0.75 and [2/4] are equivalent.",
        answer: false,
        explain: "75% = 0.75 = [3/4]. [2/4] is only half (50% or 0.5), so the three are not all equivalent.",
        interact: [{ kind: "shade", parts: 4, pct: true, hint: "Shade [2/4]. Is it 75%?" }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Convert these measurements between metres and kilometres: a) 967 m b) 8.24 km c) 7308 m",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 967, shift: true, hint: "m → km: ÷ 1000 (÷ 10 three times). km → m: × 1000." },
          { kind: "input", fields: [{ label: "a) 967 m", value: 0.967, suffix: "km" }, { label: "b) 8.24 km", value: 8240, suffix: "m" }, { label: "c) 7308 m", value: 7.308, suffix: "km" }] }
        ],
        answer: "a) **0.967 km** b) **8240 m** c) **7.308 km**. 1 km = 1000 m."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Calculate: a) 24.15 × 10 = b) 3.106 × 100 = c) 7.8 ÷ 10 = d) 9.1 ÷ 100 =",
        interact: [
          { kind: "pv", cols: ["H", "T", "O", "t", "h", "th"], start: 24.15, shift: true, hint: "Press × 10 or ÷ 10. The digits move; the decimal point stays put." },
          { kind: "input", fields: [{ label: "a) 24.15 × 10", value: 241.5 }, { label: "b) 3.106 × 100", value: 310.6 }, { label: "c) 7.8 ÷ 10", value: 0.78 }, { label: "d) 9.1 ÷ 100", value: 0.091 }] }
        ],
        answer: "a) **241.5** b) **310.6** c) **0.78** d) **0.091**. × 10 moves each digit one place left; ÷ 100 moves each digit two places right."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "This is one way this composite L-shape could be dissected to calculate its area. Draw a different way it may be dissected and calculate the area.",
        interact: [
          { kind: "sketch", bgimg: "img/s3/u34-lshape.png" },
          { kind: "choose", rows: [{ t: "A different dissection", options: ["Cut straight down from the inside corner: 6 cm × 4 cm and 6 cm × 9 cm", "Cut along the dotted line: 12 cm × 4 cm and 6 cm × 5 cm", "Cut from corner to corner with a diagonal line"], a: 0 }] },
          { kind: "input", fields: [{ label: "Area", value: 78, suffix: "cm²" }] }
        ],
        answer: "Cut down from the inside corner: **6 × 4 = 24** and **6 × 9 = 54**, so the area is **78 cm²**. Check with the slide's cut: 12 × 4 = 48 and 6 × 5 = 30, also 78 cm².",
        explain: "The top width (12 cm) and the right height (9 cm) are not labelled. They come from 6 + 6 = 12 and 4 + 5 = 9."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Identify the right angle, angles on a straight line and angles embedded at a point.",
        img: "u34-angles.png",
        interact: [{ kind: "choose", rows: [
          { t: "Right angle", options: ["A", "B", "C"], a: 2 },
          { t: "Angles on a straight line", options: ["A", "B", "C"], a: 0 },
          { t: "Angles embedded at a point", options: ["A", "B", "C"], a: 1 }] }],
        answer: "Right angle: **C** (green). Angles on a straight line: **A** (pink, two arms meeting on a straight line, adding to 180°). Angles at a point: **B** (blue, lines all the way around a point, adding to 360°)."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "If we have [2/6] of a length, how much more is needed to create the whole?",
        options: ["[3/6]", "[4/6]", "[2/6]", "[1/6]"],
        answer: 1,
        explain: "The whole is [6/6]. [6/6] − [2/6] = [4/6].",
        interact: [{ kind: "shade", parts: 6, pre: [0, 1], hint: "[2/6] is shaded. Tap the parts still needed to make the whole." }]
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record these equivalent measurements using decimal notation. a) 215 mm = ____ centimetres b) 625 cm = ____ metres c) 3475 m = ____ kilometres",
        interact: [
          { kind: "pv", cols: ["Th", "H", "T", "O", "t", "h", "th"], start: 215, shift: true, hint: "mm → cm: ÷ 10. cm → m: ÷ 100. m → km: ÷ 1000." },
          { kind: "input", fields: [{ label: "a) 215 mm", value: 21.5, suffix: "cm" }, { label: "b) 625 cm", value: 6.25, suffix: "m" }, { label: "c) 3475 m", value: 3.475, suffix: "km" }] }
        ],
        answer: "a) **21.5 cm** b) **6.25 m** c) **3.475 km**."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Record this number sentence with brackets to make this equation correct: 3 + 5 × 9 = 72",
        interact: [{ kind: "sentence", fields: [
          { label: "With brackets", placeholder: "e.g. (3 + 5) × 9 = 72", re: "^\\s*\\(\\s*3\\s*\\+\\s*5\\s*\\)\\s*x\\s*9\\s*=\\s*72\\s*$", msg: "Keep the numbers in the same order and add brackets so the equation is true.", sample: "(3 + 5) x 9 = 72" }] }],
        answer: "**(3 + 5) × 9 = 72**. Brackets are worked out first: 8 × 9 = 72. Without them, × comes first: 3 + 45 = 48."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "A student dissected this composite L-shape to calculate its area. a) Is this an effective way to dissect the shape? b) Communicate your reasoning. c) Draw how you would dissect the composite L-shape to calculate its area.",
        interact: [
          { kind: "choose", rows: [
            { t: "a) Effective?", options: ["Yes", "No"], a: 1 },
            { t: "b) Why?", options: ["The diagonal makes two shapes that are not rectangles, so their areas are harder to find", "It makes too many pieces", "You can never cut an L-shape"], a: 0 }] },
          { kind: "sketch", bgimg: "img/s3/u34-lshape2.png" }
        ],
        answer: "a) **No**. b) The diagonal cut makes two shapes that are not rectangles, so length × width doesn't work. c) Cut straight across (or straight down) from the inside corner to make **two rectangles**, then add their areas."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Match the triangle to the classification. 1. equilateral 2. isosceles 3. scalene. A. no equal sides and no equal angles B. 3 equal sides and 3 equal angles C. 2 equal sides and 2 equal angles",
        interact: [
          { kind: "corners", view: [600, 210], deg: true, r: 24, q: 30, hint: "Tap a corner twice to measure its angle. Compare the angles in each triangle.",
            shapes: [
              { p: [[40, 180], [160, 180], [100, 76.1]], fill: "#7ED957" },
              { p: [[230, 180], [330, 180], [280, 40]], fill: "#FF66EE" },
              { p: [[380, 180], [560, 180], [438.8, 78.2]], fill: "#FFC000" }] },
          { kind: "choose", rows: [
            { t: "1. Equilateral (green)", options: ["A", "B", "C"], a: 1 },
            { t: "2. Isosceles (pink)", options: ["A", "B", "C"], a: 2 },
            { t: "3. Scalene (yellow)", options: ["A", "B", "C"], a: 0 }] }
        ],
        answer: "1. Equilateral → **B** (3 equal sides, 3 equal angles). 2. Isosceles → **C** (2 equal sides, 2 equal angles). 3. Scalene → **A** (no equal sides, no equal angles).",
        explain: "The triangles are redrawn so their corners can be measured: green 60°, 60°, 60°; pink about 70°, 70°, 39°; yellow 60°, 40°, 80°."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "The total length is 30 m. (3 of the 5 equal parts measure 21 m.)",
        answer: false,
        explain: "3 parts = 21 m, so 1 part = 21 ÷ 3 = 7 m. The whole is 5 × 7 = 35 m, not 30 m.",
        interact: [{ kind: "shade", parts: 5, pre: [0, 1, 2], hint: "These 3 parts are 21 m. What is 1 part? What are all 5?" }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Convert these measurements between grams and kilograms: a) 480 g b) 86.25 kg c) 3508 g",
        interact: [
          { kind: "pv", cols: ["TTh", "Th", "H", "T", "O", "t", "h", "th"], start: 480, shift: true, houses: false, hint: "g → kg: ÷ 1000. kg → g: × 1000." },
          { kind: "input", fields: [{ label: "a) 480 g", value: 0.48, suffix: "kg" }, { label: "b) 86.25 kg", value: 86250, suffix: "g" }, { label: "c) 3508 g", value: 3.508, suffix: "kg" }] }
        ],
        answer: "a) **0.48 kg** b) **86 250 g** c) **3.508 kg**. 1 kg = 1000 g."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Solve: a) (24 ÷ 3) × 2 = b) 11 + (16 ÷ 4) = c) (4 × 9) + (15 ÷ 3) =",
        interact: [{ kind: "input", fields: [{ label: "a) (24 ÷ 3) × 2", value: 16 }, { label: "b) 11 + (16 ÷ 4)", value: 15 }, { label: "c) (4 × 9) + (15 ÷ 3)", value: 41 }] }],
        answer: "a) 8 × 2 = **16** b) 11 + 4 = **15** c) 36 + 5 = **41**. Work out the brackets first."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Nat is calculating the area of a parallelogram. Explain what she is doing in each step.",
        img: "u34-nat.png",
        interact: [
          { kind: "choose", rows: [
            { t: "Step 1", options: ["She draws the perpendicular height and cuts off a triangle", "She measures the slanted side", "She halves the parallelogram"], a: 0 },
            { t: "Step 2", options: ["She moves the triangle to the other end to make a rectangle", "She makes the shape bigger", "She turns the parallelogram over"], a: 0 }] },
          { kind: "input", fields: [{ label: "Area of the parallelogram", value: 16, suffix: "squares" }] }
        ],
        answer: "Step 1: she draws the **perpendicular height** (red) and cuts off the triangle. Step 2: she **moves the triangle** to the other side, making a **rectangle** with the same base and height. Area = base × height = 4 × 4 = **16 squares**.",
        explain: "The area isn't asked on the slide; it is added as a check. Base and height are each 4 grid squares."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Name this object.",
        img: "u34-prism.png",
        interact: [{ kind: "choose", rows: [{ t: "Name", options: ["Hexagonal prism", "Hexagonal pyramid", "Pentagonal prism", "Cylinder"], a: 0 }] }],
        answer: "A **hexagonal prism**. It has two hexagon faces at each end joined by 6 rectangular faces."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Representing quantity fractions B",
        prompt: "5 of the 8 equal parts measure 35 cm. The remaining part of the length equals:",
        options: ["56 cm", "15 cm", "35 cm", "21 cm"],
        answer: 3,
        explain: "5 parts = 35 cm, so 1 part = 7 cm. 3 parts remain: 3 × 7 = 21 cm.",
        interact: [{ kind: "shade", parts: 8, pre: [0, 1, 2, 3, 4], hint: "These 5 parts are 35 cm. What is 1 part? How many parts are left?" }]
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "Record these measurements using tonnes and kilograms: a) 4.5 t b) 37.05 t c) 61.90 t",
        interact: [{ kind: "input", fields: [
          { label: "a) 4.5 t", value: 4, suffix: "t" }, { label: "and", value: 500, suffix: "kg" },
          { label: "b) 37.05 t", value: 37, suffix: "t" }, { label: "and", value: 50, suffix: "kg" },
          { label: "c) 61.90 t", value: 61, suffix: "t" }, { label: "and", value: 900, suffix: "kg" }] }],
        answer: "a) **4 t 500 kg** b) **37 t 50 kg** c) **61 t 900 kg**. 1 t = 1000 kg, so 0.5 t = 500 kg, 0.05 t = 50 kg and 0.9 t = 900 kg."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Complete these number sentences by recording the missing numbers: a) 7 × __ = 14 + 21 b) __ × 8 = 2 × 32 c) 4 × __ = 70 − 10",
        interact: [
          { kind: "scale", left: "7 × ?", right: "14 + 21", answer: 5 },
          { kind: "scale", left: "? × 8", right: "2 × 32", answer: 8 },
          { kind: "scale", left: "4 × ?", right: "70 − 10", answer: 15 }
        ],
        answer: "a) **5** (7 × 5 = 35) b) **8** (8 × 8 = 64) c) **15** (4 × 15 = 60). Both sides of = must be equal."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Record the missing words: The area of a triangle is a)______ the area of a b)______ with the same c)______ and d)______. Words: half, height, base length, parallelogram.",
        interact: [{ kind: "choose", rows: [
          { t: "a)", options: ["half", "height", "base length", "parallelogram"], a: 0 },
          { t: "b)", options: ["half", "height", "base length", "parallelogram"], a: 3 },
          { t: "c)", options: ["half", "height", "base length", "parallelogram"], a: [2, 1] },
          { t: "d)", options: ["half", "height", "base length", "parallelogram"], a: [1, 2] }] }],
        answer: "The area of a triangle is **half** the area of a **parallelogram** with the same **base length** and **height**.",
        explain: "c) and d) can be in either order (base length and height, or height and base length), so either is marked correct."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Record these measurements using decimal notation: a) 6 kilograms and 80 grams b) 23 kilograms and 150 grams c) 42 kilograms and 500 grams",
        interact: [
          { kind: "pv", cols: ["T", "O", "t", "h", "th"], start: 6.08, hint: "Grams are thousandths of a kilogram: 80 g = 0.080 kg." },
          { kind: "input", fields: [{ label: "a)", value: 6.08, suffix: "kg" }, { label: "b)", value: 23.15, suffix: "kg" }, { label: "c)", value: 42.5, suffix: "kg" }] }
        ],
        answer: "a) **6.08 kg** b) **23.15 kg** c) **42.5 kg**. 80 g = 0.080 kg, 150 g = 0.150 kg, 500 g = 0.500 kg."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Representing quantity fractions B",
        prompt: "Stacey and Erin collected 42 golf balls. Stacey collected [2/3] of the golf balls. She collected 28 in total.",
        answer: true,
        explain: "[1/3] of 42 = 42 ÷ 3 = 14, so [2/3] = 2 × 14 = 28.",
        interact: [{ kind: "bar", whole: { v: 42, l: "42", n: "golf balls" }, parts: [{ v: 14, l: "14", n: "Stacey", hide: true }, { v: 14, l: "14", n: "Stacey", hide: true }, { v: 14, l: "14", n: "Erin", hide: true }] }],
        cubes: { ops: ["÷", "×"], solve: [{ t: "Find one third", s: "42 ÷ 3 = 14, then 2 × 14 = 28." }, { t: "Multiply first", s: "2 × 42 = 84, then 84 ÷ 3 = 28." }] }
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "A chef places 3.75 kg of flour, 300 g of butter and 1 kg 125 g of sugar in a bowl. What is the total mass of all ingredients? Record your answer in grams and kilograms.",
        interact: [
          { kind: "bar", whole: { v: 5175, l: "?", n: "total mass", hide: true }, parts: [{ v: 3750, l: "3.75 kg", n: "flour" }, { v: 300, l: "300 g", n: "" }, { v: 1125, l: "1 kg 125 g", n: "sugar" }] },
          { kind: "input", fields: [{ label: "Grams", value: 5175, suffix: "g" }, { label: "Kilograms", value: 5.175, suffix: "kg" }] }
        ],
        cubes: { ops: ["+"], note: "Change every mass to the same unit first.", solve: [{ t: "All in grams", s: "3750 g + 300 g + 1125 g = 5175 g = 5.175 kg." }, { t: "All in kilograms", s: "3.75 + 0.3 + 1.125 = 5.175 kg = 5175 g." }] },
        answer: "**5175 g** = **5.175 kg**. 3.75 kg = 3750 g and 1 kg 125 g = 1125 g; 3750 + 300 + 1125 = 5175."
      },
      {
        type: "sr", focus: "Multiplicative relations B",
        prompt: "Describe the pattern of multiples using words.",
        img: "u34-pentagons.png",
        interact: [
          { kind: "jumps", start: 0, steps: [5], hint: "Jump + 5 for each pentagon." },
          { kind: "cells", cols: 4, w: 90, grid: [["#Pentagons", "1", "2", "3"], ["#Sticks", { v: 5 }, { v: 10 }, { v: 15 }]] },
          { kind: "choose", rows: [{ t: "The pattern", options: ["Multiples of 5: add 5 sticks for each new pentagon", "Add 1 stick each time", "Double the sticks each time"], a: 0 }] }
        ],
        answer: "**5, 10, 15, …** The number of sticks goes up by 5 each time, because each new pentagon uses 5 more sticks. Sticks = 5 × number of pentagons.",
        explain: "The pentagons in the picture don't share sides, so each one needs its own 5 sticks."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "If the area of this parallelogram is 100 cm², what is the area of the triangle? Communicate your reasoning.",
        img: "u34-paratri.png",
        interact: [
          { kind: "choose", rows: [{ t: "Why?", options: ["The triangle has the same base and height, so it is half the parallelogram", "The triangle is the same as the parallelogram", "The triangle is a quarter of the parallelogram"], a: 0 }] },
          { kind: "input", fields: [{ label: "Area of the triangle", value: 50, suffix: "cm²" }] }
        ],
        answer: "**50 cm²**. The triangle has the same base (10 cm) and height (10 cm) as the parallelogram, so its area is half: 100 ÷ 2 = 50 cm². The dashed diagonal splits the parallelogram into two equal triangles."
      },
      {
        type: "sr", focus: "Non-spatial measure B",
        prompt: "A bush hike started at 8:15 am and finished at 3:25 pm. How much time has elapsed?",
        interact: [
          { kind: "jumps", time: "12", ampm: true, start: 495, end: 925, steps: [60, 10, 5], hint: "Jump from 8:15 am to 3:25 pm. Try jumps of 1 hour first, then minutes." },
          { kind: "input", fields: [{ label: "Hours", value: 7, suffix: "h" }, { label: "Minutes", value: 10, suffix: "min" }] }
        ],
        cubes: { ops: ["−"], solve: [{ t: "Count on", s: "8:15 am → 12:15 pm is 4 h. 12:15 pm → 3:15 pm is 3 h. 3:15 pm → 3:25 pm is 10 min. Total 7 h 10 min." }, { t: "Use 24-hour time", s: "3:25 pm = 1525. 1525 − 0815 = 7 h 10 min." }] },
        answer: "**7 hours 10 minutes**. 8:15 am to 3:15 pm is 7 hours, then 10 more minutes to 3:25 pm."
      }
    ]
  ]
});
