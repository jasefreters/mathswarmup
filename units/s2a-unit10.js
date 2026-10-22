/*
  Stage 2 Year A, Unit 10 — Review of learning (Term 2, learning sequence 5: Weeks 9–10).
  Format guide: see README.md and CLAUDE.md.
*/
UNITS.push({
  stage: 2, ab: "A", term: 2, ls: 5, unit: 10,
  img: "img/s2/",
  source: "Adapted from NSW Department of Education, Mathematics Stage 2 Year A Unit 10 – Review of learning (CC BY 4.0).",
  reviews: [
    // Review 1
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "98 − 68 = ?",
        options: ["100 − 66", "97 − 65", "101 − 71", "102 − 62"],
        answer: 2,
        explain: "98 − 68 = 30. 101 − 71 = 30 too: both numbers went up by 3, so the difference stays the same. A = 34, B = 32, D = 40. On the slide no option made 30 (C was 101 − 69 = 32), so C is changed to 101 − 71.",
        interact: [{ kind: "jumps", start: 68, end: 98, steps: [1, 10], hint: "Start at 68. Count on to 98. How far is it?" }]
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure B",
        prompt: "Record the direction of the turn of this two-dimensional shape.",
        img: "u10-turn.png",
        interact: [
          { kind: "turns", step: 90, hint: "Tap to turn the arrow a quarter turn clockwise. Watch which way the top goes." },
          { kind: "choose", rows: [
            { t: "Direction", options: ["clockwise", "anticlockwise"], a: 0 },
            { t: "Size of the turn", options: ["quarter turn", "half turn", "full turn"], a: 0 }] }
        ],
        answer: "A **quarter turn clockwise**. The arrow turns the same way as the hands of a clock, and the long bottom side of the trapezium ends up on the left."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Record the number of faces, vertices and edges.",
        img: "u10-pyramid.png",
        interact: [{ kind: "input", fields: [{ label: "Faces", value: 5 }, { label: "Vertices", value: 5 }, { label: "Edges", value: 8 }] }],
        answer: "A square pyramid has **5 faces** (1 square base and 4 triangles), **5 vertices** (4 around the base and 1 at the top) and **8 edges** (4 around the base and 4 up to the top).",
        explain: "The dashed lines show the hidden edges at the back, so count them too."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Use landmarks and directional language to describe the route from the library to the classroom.",
        img: "u10-route.png",
        interact: [
          { kind: "sketch", bgimg: "img/s2/u10-route.png" },
          { kind: "choose", rows: [
            { t: "The route goes underneath the", options: ["hall", "office", "canteen"], a: 1 },
            { t: "Walking down past the canteen, the canteen is on your", options: ["left", "right"], a: 1 },
            { t: "Walking up to the classroom, the playground is on your", options: ["left", "right"], a: 1 }] }
        ],
        answer: "Answers vary, for example: leave the **library** and walk down, turn left, then walk down between the **canteen** (on your right) and the **office**. Turn left and walk along under the office. Turn left and walk up past the **playground** (on your right), then turn right to the **classroom**.",
        explain: "Left and right are for the walker, not the map. Walking down the map, the canteen is on the walker's right."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Record the length of the pink line using the abbreviation for millimetres.",
        img: "u10-ruler.png",
        interact: [
          { kind: "marker", min: 0, max: 7, ticks: 1, minor: 10, target: 6.4, tol: 0.05, label: "end", msg: "The line starts at 0. Count the whole centimetres, then the small millimetre marks." },
          { kind: "input", fields: [{ label: "Length", accept: ["64 mm", "64mm", "64 millimetres"], placeholder: "e.g. 10 mm" }] }
        ],
        answer: "**64 mm**. The line starts at 0 and ends 4 small marks past 6 cm. 6 cm = 60 mm, plus 4 mm."
      }
    ],
    // Review 2
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "The equal sign (=) means 'the same as'.",
        answer: true,
        explain: "The equal sign shows that both sides have the same value, for example 6 + 4 = 7 + 3. It does not mean 'the answer comes next'.",
        interact: [{ kind: "scale", left: "6 + 4", right: "7 + ?", answer: 3 }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Draw an angle. Label the arms and the vertex of the angle.",
        interact: [
          { kind: "angle", start: 60, hint: "Drag the blue arm to make an angle." },
          { kind: "choose", rows: [
            { t: "The two straight lines are the", options: ["arms", "vertex", "sides of a square"], a: 0 },
            { t: "The point where the lines meet is the", options: ["arm", "vertex", "middle"], a: 1 }] },
          { kind: "sketch" }
        ],
        answer: "An angle is made by two **arms** that meet at a point called the **vertex**. Drawings vary."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Record the differences between this pyramid and this prism.",
        img: "u10-pyrprism.png",
        interact: [{ kind: "select", hint: "Tap every true difference.", items: [
          ["The pyramid comes to a point at the top; the prism does not", true],
          ["The pyramid's side faces are triangles; the prism's are rectangles", true],
          ["The prism has two matching ends; the pyramid has one base", true],
          ["The pyramid has 5 faces; the prism has 6 faces", true],
          ["The pyramid has a curved surface", false],
          ["The prism has fewer edges than the pyramid", false]] }],
        answer: "The **pyramid** has 1 square base and triangle faces that meet at a point (5 faces, 5 vertices, 8 edges). The **prism** has 2 matching ends joined by rectangles (6 faces, 8 vertices, 12 edges)."
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Record the positions of the pond, the blue houses and the tree.",
        interact: [
          { kind: "gridref", src: "img/s2/u10-town.png", alt: "Town map with a grid, columns A to I and rows 1 to 10, and a compass", box: [9.1, 3.4, 80.9, 91.7], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], rows: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "Pond", accept: ["C5", "5C"] },
            { label: "Blue house (lower)", accept: ["H4", "4H"] },
            { label: "Blue house (upper)", accept: ["I8", "8I"] },
            { label: "Tree", accept: ["E10", "10E"] }] }
        ],
        answer: "Pond **C5** · Blue houses **H4** and **I8** · Tree **E10**",
        explain: "The map has two blue houses, so the slide's \"blue house\" has two answers. The question asks for both."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Estimate the length of your classroom using metres and centimetres. Communicate your reasoning.",
        interact: [
          { kind: "marker", min: 0, max: 15, ticks: 2, label: "length", hint: "Each big mark is 1 metre. Slide the pin to your estimate." },
          { kind: "choose", rows: [{ t: "A sensible estimate", options: ["about 85 cm", "about 8 m 50 cm", "about 85 m"], a: 1 }] }
        ],
        answer: "Answers vary. Most classrooms are about **7 m to 10 m** long, for example 8 m 50 cm. A metre is about one big step, so pace it out to check.",
        explain: "Classrooms differ, so the choice only checks that the estimate is a sensible size. Have students give their own estimate in metres and centimetres."
      }
    ],
    // Review 3
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "287 − 176 = ?",
        options: ["290 − 173", "280 − 179", "300 − 189", "288 − 170"],
        answer: 2,
        explain: "287 − 176 = 111. 300 − 189 = 111 too: both numbers went up by 13, so the difference stays the same. A = 117, B = 101, D = 118. On the slide no option made 111 (C was 300 − 190 = 110), so C is changed to 300 − 189.",
        interact: [{ kind: "jumps", start: 176, end: 287, steps: [1, 10, 100], hint: "Start at 176. Count on to 287." }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "How are these angles the same? How are they different?",
        img: "u10-angles.png",
        interact: [
          { kind: "angle", start: 30, lengthen: true, hint: "Make the small angle, then make the arms longer. Does the angle change?" },
          { kind: "choose", rows: [
            { t: "The amount of turn between the arms is", options: ["the same", "different"], a: 0 },
            { t: "The length of the arms is", options: ["the same", "different"], a: 1 }] }
        ],
        answer: "**Same:** both angles have the same amount of turn between the arms. **Different:** one has longer arms. Longer arms do not make an angle bigger."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Match the features to the labels: flat surface, curved surface.",
        img: "u10-cylinder.png",
        interact: [{ kind: "choose", rows: [
          { t: "A", options: ["flat surface", "curved surface"], a: 0 },
          { t: "B", options: ["flat surface", "curved surface"], a: 1 }] }],
        answer: "A is a **flat surface** (the circle on top). B is a **curved surface** (the side that wraps around)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Use the grid map and compass directions to record a route from the pond to the tree.",
        interact: [
          { kind: "gridref", src: "img/s2/u10-town.png", alt: "Town map with a grid, columns A to I and rows 1 to 10, and a compass", box: [9.1, 3.4, 80.9, 91.7], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], rows: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "Pond", accept: ["C5", "5C"] },
            { label: "Tree", accept: ["E10", "10E"] },
            { label: "Squares east", value: 2 },
            { label: "Squares north", value: 5 }] }
        ],
        answer: "The pond is in **C5** and the tree is in **E10**. One route: go **east 2 squares** to E5, then **north 5 squares** to E10.",
        explain: "Routes vary (north first, or along the roads). The boxes check the start, the finish and the total moves east and north."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "How many millimetres are there in one centimetre?",
        interact: [
          { kind: "marker", min: 0, max: 3, ticks: 1, minor: 10, target: 1, tol: 0.03, label: "1 cm", hint: "Slide the pin to 1 cm. Count the small marks from 0." },
          { kind: "input", fields: [{ label: "1 cm =", value: 10, suffix: "mm" }] }
        ],
        answer: "**10 mm** in 1 cm. There are 10 small marks in each centimetre on a ruler."
      }
    ],
    // Review 4
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "908 + 667 = 990 + 602. Communicate your reasoning.",
        answer: false,
        explain: "908 + 667 = 1575 and 990 + 602 = 1592. 908 went up by 82 to make 990, but 667 only went down by 65 to make 602, so the totals are not the same.",
        interact: [{ kind: "jumps", start: 908, steps: [600, 60, 7], hint: "Start at 908. Jump + 600, + 60, + 7. Then try 990 + 602." }]
      },
      {
        type: "sr", focus: "Geometric measure A",
        prompt: "Is a right angle a quarter turn? Communicate your reasoning.",
        interact: [
          { kind: "angle", start: 20, target: "right", hint: "Start with the arms together. Turn the blue arm a quarter of the way around." },
          { kind: "choose", rows: [{ t: "Is a right angle a quarter turn?", options: ["Yes", "No"], a: 0 }] }
        ],
        answer: "**Yes.** A full turn goes all the way around. A quarter of a full turn makes a right angle, like the corner of a book or the hands of a clock at 3 o'clock."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "How are these shapes the same? How are they different?",
        interact: [
          { kind: "classify", view: [520, 180], hint: "Choose a group, then tap each shape.", label: "A trapezium and a parallelogram",
            cats: [{ k: "1", t: "1 pair of parallel sides", c: "#F2994A" }, { k: "2", t: "2 pairs of parallel sides", c: "#22A06B" }],
            shapes: [
              { p: "70,30 190,30 225,150 35,150", a: "1", fill: "#8C55FF", deco: "<text x='130' y='170' class='co-lab'>A</text>" },
              { p: "370,30 500,30 420,150 290,150", a: "2", fill: "#0A5FC4", deco: "<text x='395' y='170' class='co-lab'>B</text>" }] },
          { kind: "select", hint: "Tap every true statement.", items: [
            ["Both have 4 sides and 4 vertices", true],
            ["Both have a pair of parallel sides at the top and bottom", true],
            ["Only the parallelogram has 2 pairs of parallel sides", true],
            ["Both have 4 right angles", false],
            ["The trapezium has 3 sides", false]] }
        ],
        answer: "**Same:** both have 4 straight sides and 4 vertices, and both have parallel top and bottom sides. **Different:** A is a **trapezium** with only 1 pair of parallel sides; B is a **parallelogram** with 2 pairs of parallel sides (its slanted sides are parallel too)."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "Use the grid map and compass directions to record a route from the green house to the hospital.",
        interact: [
          { kind: "gridref", src: "img/s2/u10-town.png", alt: "Town map with a grid, columns A to I and rows 1 to 10, and a compass", box: [9.1, 3.4, 80.9, 91.7], cols: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], rows: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] },
          { kind: "input", fields: [
            { label: "Green house", accept: ["F5", "5F"] },
            { label: "Hospital", accept: ["F1", "1F", "E1", "1E"] },
            { label: "Squares south", value: 4 }] }
        ],
        answer: "The green house is in **F5**. The hospital covers **E1 and F1**. One route: go **south 4 squares** from F5 to F1, crossing the road and the river.",
        explain: "The hospital covers two squares, so E1 or F1 is accepted. Going to E1 adds 1 square west. Routes along the roads are fine too."
      },
      {
        type: "sr", focus: "Geometric measure B",
        prompt: "What word is used to describe the distance around a boundary?",
        img: "u10-court.png",
        interact: [
          { kind: "sides", view: [400, 220], label: "The boundary of a basketball court", fill: "#D58B55", poly: [[30, 25], [370, 25], [370, 195], [30, 195]] },
          { kind: "input", fields: [{ label: "The word is", accept: ["perimeter", "the perimeter"] }] }
        ],
        answer: "**Perimeter**. The perimeter is the distance all the way around the boundary, like walking around the outside lines of the court."
      }
    ],
    // Review 5
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "32 − 13 = ?",
        options: ["31 − 10", "30 − 11", "30 − 16", "35 − 10"],
        answer: 1,
        explain: "32 − 13 = 19. 30 − 11 = 19 too: both numbers went down by 2, so the difference stays the same. A = 21, C = 14, D = 25.",
        interact: [{ kind: "jumps", start: 13, end: 32, steps: [1, 10], hint: "Start at 13. Count on to 32." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Which of these activities have a duration of longer than 1 minute? You may select more than one answer.",
        interact: [
          { kind: "clock", time: "12:00", drag: true },
          { kind: "select", items: [["writing your name once", false], ["eating your lunch", true], ["reading a book", true]] }
        ],
        answer: "**Eating your lunch** and **reading a book** both take longer than 1 minute. Writing your name once takes only a few seconds."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Do you think this milk container holds a litre? Communicate your reasoning.",
        img: "u10-milk.png",
        interact: [{ kind: "choose", rows: [{ t: "Does it hold about a litre?", options: ["Yes", "No"], a: 0 }] }],
        answer: "**Yes.** A milk carton like this usually holds **1 litre**. It is about the size of a 1 L jug.",
        explain: "No size is printed on the carton, so this uses the usual size of a milk carton. Accept other answers the class can justify."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Record if these chance events are equally likely, likely or unlikely to occur.",
        interact: [{ kind: "choose", rows: [
          { t: "a. You will eat lunch today", options: ["equally likely", "likely", "unlikely"], a: 1 },
          { t: "b. You roll a 1 on a standard dice", options: ["equally likely", "likely", "unlikely"], a: 2 },
          { t: "c. You choose a black card from a deck of cards", options: ["equally likely", "likely", "unlikely"], a: 0 }] }],
        answer: "a. **Likely** · b. **Unlikely** (1 is only 1 of the 6 faces) · c. **Equally likely** (half the cards are black and half are red).",
        explain: "A deck of cards here means 52 cards with no jokers: 26 black and 26 red."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe this two-dimensional shape.",
        interact: [
          { kind: "mirror", view: [300, 280], label: "A kite with two dashed lines to test", shapes: [{ p: [[150, 20], [230, 100], [150, 260], [70, 100]], fill: "#FF6B3B", lines: [[150, 8, 150, 272], [55, 100, 245, 100]] }] },
          { kind: "select", hint: "Tap every true statement.", items: [
            ["It has 4 sides and 4 vertices", true],
            ["It has 2 pairs of equal sides next to each other", true],
            ["It has 1 line of symmetry", true],
            ["It has 2 pairs of parallel sides", false],
            ["All 4 sides are the same length", false]] }
        ],
        answer: "It is a **kite**: 4 straight sides and 4 vertices. The two short top sides are equal and the two long bottom sides are equal. It has **1 line of symmetry** (top to bottom) and no parallel sides."
      }
    ],
    // Review 6
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "82 − 13 = 85 − 10. Communicate your reasoning.",
        answer: false,
        explain: "82 − 13 = 69 and 85 − 10 = 75. To keep the difference the same, both numbers must change by the same amount: 82 − 13 = 85 − 16.",
        interact: [{ kind: "jumps", start: 82, back: true, steps: [1, 10], hint: "Start at 82. Jump back 10, then back 3." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "What does the 3 represent on the analog clock when the hour hand points to it? When the minute hand points to it?",
        interact: [
          { kind: "clock", time: "3:00", drag: true },
          { kind: "choose", rows: [
            { t: "The hour hand points to the 3", options: ["3 o'clock (the hour is 3)", "15 minutes past", "3 minutes past"], a: 0 },
            { t: "The minute hand points to the 3", options: ["3 o'clock", "15 minutes past (quarter past)", "3 minutes past"], a: 1 }] }
        ],
        answer: "Hour hand on the 3: the hour is **3** (3 o'clock). Minute hand on the 3: **15 minutes past** the hour (quarter past), because each number is 5 minutes and 3 × 5 = 15."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Are these containers more, less or about one litre?",
        img: "u10-containers.png",
        interact: [{ kind: "choose", rows: [
          { t: "A (measuring jug)", options: ["more than 1 L", "less than 1 L", "about 1 L"], a: 2 },
          { t: "B (yoghurt tub)", options: ["more than 1 L", "less than 1 L", "about 1 L"], a: 1 },
          { t: "C (bucket)", options: ["more than 1 L", "less than 1 L", "about 1 L"], a: 0 }] }],
        answer: "A, the measuring jug: **about 1 litre**. B, the small yoghurt tub: **less** than 1 litre. C, the bucket: **more** than 1 litre.",
        explain: "No sizes are shown, so these use typical sizes: a kitchen measuring jug holds about 1 L, a small yoghurt tub about 150 mL and a bucket about 8–10 L."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "What are the possible outcomes of spinning this spinner?",
        img: "u10-spinner.png",
        interact: [
          { kind: "select", hint: "Tap every possible outcome.", items: [["pink", true], ["green", true], ["purple", true], ["blue", true], ["yellow", true], ["orange", false], ["white", false]] },
          { kind: "input", fields: [{ label: "Number of possible outcomes", value: 5 }] }
        ],
        answer: "There are **5** possible outcomes: **pink, green, purple, blue or yellow**. The parts are about the same size, so each colour is about equally likely."
      },
      {
        type: "sr", focus: "Two-dimensional spatial structure A",
        prompt: "Describe and compare these two-dimensional shapes.",
        interact: [
          { kind: "classify", view: [560, 180], hint: "Choose a group, then tap each shape.", label: "A trapezium and a triangle",
            cats: [{ k: "4", t: "4 sides", c: "#22A06B" }, { k: "3", t: "3 sides", c: "#F2994A" }],
            shapes: [
              { p: "75,25 215,25 250,150 40,150", a: "4", fill: "#00235F", deco: "<text x='145' y='170' class='co-lab'>A</text>" },
              { p: "415,25 510,150 320,150", a: "3", fill: "#00235F", deco: "<text x='415' y='170' class='co-lab'>B</text>" }] },
          { kind: "select", hint: "Tap every true statement.", items: [
            ["Both have straight sides and a flat bottom side", true],
            ["A has 4 sides and 4 vertices; B has 3 sides and 3 vertices", true],
            ["A has 1 pair of parallel sides; B has no parallel sides", true],
            ["Both have 1 line of symmetry", true],
            ["Both have a right angle", false]] }
        ],
        answer: "A is a **trapezium**: 4 sides, 4 vertices, 1 pair of parallel sides. B is a **triangle**: 3 sides, 3 vertices, no parallel sides. Both have straight sides and 1 line of symmetry, and neither has a right angle."
      }
    ],
    // Review 7
    [
      {
        type: "mc", focus: "Additive relations A",
        prompt: "78 + 90 = ?",
        options: ["105 + 60", "99 + 69", "80 + 81", "110 + 55"],
        answer: 1,
        explain: "78 + 90 = 168. 99 + 69 = 168 too: 21 was added to 78 and taken from 90, so the total stays the same. A = 165, C = 161, D = 165. On the slide no option made 168 (B was 99 + 67 = 166), so B is changed to 99 + 69.",
        interact: [{ kind: "jumps", start: 78, steps: [10, 90], hint: "Start at 78. Jump + 90." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "What time is shown on each of these analog clocks?",
        interact: [
          { kind: "clock", time: "4:15" },
          { kind: "clock", time: "3:20" },
          { kind: "input", fields: [
            { label: "Clock A", accept: ["4:15", "quarter past 4", "quarter past four", "15 past 4", "fifteen past four"], placeholder: "h:mm" },
            { label: "Clock B", accept: ["3:20", "20 past 3", "twenty past three"], placeholder: "h:mm" }] }
        ],
        answer: "Clock A: **4:15** (quarter past 4) · Clock B: **3:20** (20 past 3)",
        explain: "The times are read from the slide's clocks: A has the minute hand on the 3 and the hour hand just past the 4; B has the minute hand on the 4 and the hour hand between the 3 and the 4."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure A",
        prompt: "Three water bottles each hold 2 litres. Record how many litres there are in total using the abbreviation for litres.",
        img: "u10-bottles.png",
        interact: [
          { kind: "jumps", start: 0, steps: [2], min: 0, max: 8, hint: "Jump 2 litres for each bottle." },
          { kind: "input", fields: [{ label: "Total", accept: ["6 L", "6L", "6 l", "6l"], placeholder: "e.g. 1 L" }] }
        ],
        cubes: { ops: ["×"], also: ["+"], solve: [{ t: "Repeated addition", s: "2 L + 2 L + 2 L = 6 L." }, { t: "Multiply", s: "3 bottles × 2 L = 6 L." }] },
        answer: "**6 L**. 3 bottles of 2 litres: 2 + 2 + 2 = 6, or 3 × 2 = 6."
      },
      {
        type: "sr", focus: "Chance A",
        prompt: "What is the term used to describe any possible result of a chance experiment?",
        interact: [{ kind: "input", fields: [{ label: "The term is", accept: ["outcome", "an outcome", "outcomes"] }] }],
        answer: "An **outcome**. For example, when you flip a coin the possible outcomes are heads or tails."
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "How many minutes are in an hour? How many minutes are in half an hour?",
        interact: [
          { kind: "clock", time: "9:00", drag: true },
          { kind: "input", fields: [{ label: "One hour", value: 60, suffix: "minutes" }, { label: "Half an hour", value: 30, suffix: "minutes" }] }
        ],
        answer: "One hour = **60 minutes**: the minute hand goes all the way around. Half an hour = **30 minutes**: half way around, from the 12 to the 6."
      }
    ],
    // Review 8
    [
      {
        type: "tf", focus: "Additive relations A",
        prompt: "899 + 676 = 1099 + 500. Communicate your reasoning.",
        answer: false,
        explain: "899 + 676 = 1575 and 1099 + 500 = 1599. 899 went up by 200 to make 1099, but 676 went down by 176, not 200. 899 + 676 = 1099 + 476.",
        interact: [{ kind: "jumps", start: 899, steps: [1, 100, 600], hint: "Start at 899. Jump + 1 to 900, then on to add 676." }]
      },
      {
        type: "sr", focus: "Non-spatial measure A",
        prompt: "Read the time on these analog clocks using the terms 'past' or 'to'.",
        interact: [
          { kind: "clock", time: "7:45" },
          { kind: "clock", time: "7:15" },
          { kind: "choose", rows: [
            { t: "Clock A", options: ["quarter past 7", "quarter to 8", "quarter to 7", "half past 7"], a: 1 },
            { t: "Clock B", options: ["quarter past 7", "quarter to 8", "quarter past 3", "half past 7"], a: 0 }] }
        ],
        answer: "Clock A: **quarter to 8** (7:45) · Clock B: **quarter past 7** (7:15)",
        explain: "On the slide clock B's minute hand sits just past the 3; it is read as quarter past 7, and the clock is redrawn showing exactly 7:15."
      },
      {
        type: "sr", focus: "Three-dimensional spatial structure B",
        prompt: "Record the volume of water in litres. Communicate your reasoning.",
        img: "u10-jug.png",
        interact: [
          { kind: "marker", min: 0, max: 1000, divs: 10, majorEvery: 5, labels: [0, 500, 1000], target: 1000, tol: 20, label: "water", hint: "Slide the pin to the water level. Each mark is 100 mL." },
          { kind: "input", fields: [{ label: "Volume", accept: ["1 L", "1L", "1 l", "1l", "1 litre"], placeholder: "e.g. 2 L" }] }
        ],
        answer: "**1 L**. The water is up to the 1000 mL mark, and 1000 mL = 1 litre."
      },
      {
        type: "sr", focus: "Chance B",
        prompt: "Mia stated she had a [1/6] chance to roll a 3 on a standard dice. She planned to roll it 6 times and predicted that she would roll a 3 twice. Is her prediction a good one? Communicate your reasoning.",
        interact: [
          { kind: "choose", rows: [
            { t: "In 6 rolls, how many 3s would you expect?", options: ["0", "about 1", "2", "6"], a: 1 },
            { t: "Could Mia roll a 3 twice?", options: ["Yes, it could happen", "No, it is impossible"], a: 0 }] },
          { kind: "tally", rows: [{ l: "Rolled a 3" }, { l: "Did not roll a 3" }], hint: "Roll a dice 6 times as a class and tally the results." }
        ],
        cubes: { ops: ["÷"], also: ["×"], solve: [{ t: "Share the rolls", s: "A [1/6] chance means about 1 in every 6 rolls. 6 rolls ÷ 6 = about 1 three." }, { t: "Count the faces", s: "A dice has 6 faces and only one is a 3, so in 6 rolls we expect about one 3." }] },
        answer: "Mia's prediction is **not the most likely result**. A [1/6] chance means about **1** three in 6 rolls. Rolling a 3 twice **could** happen, because chance results vary, but once is what we would expect.",
        explain: "The slide gives Mia's statement but no question. The question \"Is her prediction a good one?\" is added, with two parts that each have one answer."
      },
      {
        type: "sr", focus: "Data A",
        prompt: "Create a question to gather data about the most common forms of transport your classmates use to get to school.",
        interact: [
          { kind: "choose", rows: [{ t: "A good survey question", options: ["How do you usually get to school?", "Do you like school?", "What is your favourite car colour?", "How far away do you live?"], a: 0 }] },
          { kind: "select", hint: "Tap the categories that suit your question.", items: [["walk", true], ["car", true], ["bus", true], ["bike or scooter", true], ["Monday", false], ["pizza", false]] }
        ],
        answer: "Answers vary, for example: **How do you usually get to school?** with categories walk, car, bus, bike or scooter, train, other.",
        explain: "The slide asks students to write their own question. The options give the class something to compare; the categories are added to show the data the question collects."
      }
    ]
  ]
});
