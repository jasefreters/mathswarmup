# The Daily Dash — guidance for adding content

Daily maths warm-ups for Years 3–6 (NSW). Static site: `index.html`, `app.js`, `config.js`, `scope.js`, one file per unit in `units/`, images in `img/`. Hosted on GitHub Pages from `main`.

## Every question must be hands-on

The teacher's rule: **each question is optimised for interactivity.** When adding or converting a question:

1. **Make the picture the activity.** If students would count, sort, compare, measure or locate things in an image, redraw it as an interactive SVG instead of showing a static picture plus typed boxes.
   - Counting or sorting shapes and objects → `classify` (tap a category, then tap each shape; live tallies, optional `total` for fraction tallies).
   - Placing values → `numberline` (drag cards) or `marker` (slide a pin).
   - Ordering → `order`. Grouping or weighing → `balance`, `select`, `choose`.
   - Fractions of a whole → `shade` (strip) or `stack` (build a whole from a part).
   - Drawing or constructing → `sketch`.
2. **Typing (`input`, `fractions`, `pair`, `sum6`) is for the final number only**, after the students have manipulated the visual. It is never the only interaction when there is a picture to work with.
3. **Word problems** get a `cubes` field (`ops`, optional `also` and `note`, and two `solve` methods). The teacher marks numbers, the question and key words live in class. Never pre-set the words or numbers to mark.
4. **Open discussion questions** are the exception. Use them only when there is genuinely nothing to manipulate.
5. Keep the board calm. Interactions appear only in the question view, and the board shows a quiet preview.

Before publishing, run every question through a browser with the correct answer and check that each Check passes.

## Filing units

`config.js` maps Year 3–6 to a stage and a scope-and-sequence year (A/B). `scope.js` lists which unit sits in each term and 2-week learning sequence (`ls` 1–5). Each unit has 8 reviews: Monday to Thursday of each week. Do not add the daily number sense activities.
