# The Daily Dash — guidance for adding content

Daily maths warm-ups for Years 3–6 (NSW). Static site: `index.html`, `app.js`, `config.js`, `scope.js`, one file per unit in `units/`, images in `img/`. Hosted on GitHub Pages from `main`.

## Every question must be hands-on

The teacher's rule: **each question is optimised for interactivity.** When adding or converting a question:

1. **Make the picture the activity.** If students would count, sort, compare, measure or locate things in an image, redraw it as an interactive SVG instead of showing a static picture plus typed boxes.
   - Counting or sorting shapes and objects → `classify` (tap a category, then tap each shape; live tallies, optional `total` for fraction tallies).
   - **Every perimeter question** (with or without a picture) → `sides`: redraw the shape, tap each side to turn it green, with a count of sides marked. Never total the lengths; the teacher does that with the class. Draw a dimension arrow (`dims`) for every labelled length so it is clear which side or gap each label measures. Leave unlabelled sides unlabelled, as in the source.
   - Placing values → `numberline` (drag cards) or `marker` (slide a pin).
   - Ordering → `order`. Grouping or weighing → `balance`, `select`, `choose`.
   - Fractions of a whole → `shade` (strip) or `stack` (build a whole from a part).
   - Drawing or constructing → `sketch`.
   - Counting on or back, time spans, change → `jumps` (open number line). Place value, ×10/÷10, trades → `pv` (`shift: true` for ×10 and ÷10). Charts with ten thousands or more are grouped into houses (Millions, Thousands, Ones, each with H T O) automatically, with a Read each house button; `houses: false` turns this off.
   - Area by counting squares → `areagrid`. Arrays and the turnaround fact → `array`. Sharing or packing → `pack`.
   - Angles → `angle` (drag the arm; `names` for acute/obtuse/straight/reflex) or `corners` (tap a corner of a drawn shape to lay a right-angle tester on it, tap again to name it).
   - Symmetry → `mirror` (tap a dashed line to fold the shape over it). Coordinates → `plane` (Cartesian) or `gridref` (map grid).
   - Part–part–whole word problems → `bar` (bar model; tap a ? to reveal the unknown). Missing numbers in equations → `scale` (a balance that levels when both sides are equal). Folding paper strips → `fold`. Reading graphs → `bargraph` (tap a bar to run a guide line to the scale). Pictures of shaded parts → `shade` with `pre` so the class reads the picture.
   - Money → `coins` (`mix: true` requires gold and silver) or `shop`. Combinations → `combos`. Calendars, clocks and number charts → `calendar`, `clock`, `numchart`, `cells`.
2. **Typing (`input`, `fractions`, `pair`, `sum6`) is for the final number only**, after the students have manipulated the visual. It is never the only interaction when there is a picture to work with.
3. **Word problems** get a `cubes` field (`ops`, optional `also` and `note`, and two `solve` methods). The teacher marks numbers, the question and key words live in class. Never pre-set the words or numbers to mark.
4. **Open discussion questions** are the exception. Use them only when there is genuinely nothing to manipulate.
5. Keep the board calm. Interactions appear only in the question view, and the board shows a quiet preview.

Before publishing, run every question through a browser with the correct answer and check that each Check passes.

## Filing units

`config.js` maps Year 3–6 to a stage and a scope-and-sequence year (A/B). `scope.js` lists which unit sits in each term and 2-week learning sequence (`ls` 1–5). Each unit has 8 reviews: Monday to Thursday of each week. Do not add the daily number sense activities.

## Standards for every addition

These are the teacher's decisions so far. Apply them to all new content without being asked.

- **Name and layout:** The Daily Dash. Year 3–6 tabs, then term, then fortnight, then day (Monday to Thursday of each week). The board stays clean and minimal to keep cognitive load low.
- **No daily number sense activities.** Classes run their own.
- **Interactivity first** (see above). Redraw pictures as interactive SVG whenever students would work with them.
- **Word problems:** no bold text in the prompt. Add a `cubes` field with `ops` (+ `also`/`note` where needed) and two `solve` methods. Circle, Underline and Box are teacher-led: the teacher taps the words live, and adjacent words join into one shape. Never pre-set the words or numbers to mark.
- **Perimeter:** tap-the-sides with dimension arrows, no running total (see above).
- **Done state:** a correct Check (or the correct multiple-choice or true/false option) marks the question done. The card plays confetti on return to the board and stays green with a Done badge. Questions with no check are done when the answer is shown.
- **Timer** is visible on the board and inside every question.
- **No faux bold:** the school font has one weight. School-font text is set to regular weight with `font-synthesis: none`, and answer emphasis is a soft highlight, not bold.
- **School font:** question text uses `--f-school`, which is NSW Pre-cursive Solid when it's installed on the device, falling back to the free Google font Edu NSW ACT Foundation. Never commit the NSW font file to the public repo, because its licence isn't confirmed for web hosting.
- **Answers:** work out and verify every answer yourself, and flag any assumption in `explain` (for example, an unlabelled length).
- **Filing:** units go to their term and learning sequence from the scope and sequence (5 two-week sequences per term). Current mapping: Year 3 = Stage 2 A, Year 4 = Stage 2 B, Year 5 = Stage 3 A, Year 6 = Stage 3 B (`config.js`).
- **Publishing:** commit to `main` on `jasefreters/mathswarmup` (GitHub Pages). Before pushing, run every question in a browser with its correct answer and check it passes.
