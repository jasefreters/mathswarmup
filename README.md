# The Daily Dash

Daily maths warm-ups for **Years 3–6**, filed by the NSW sample scope and sequence. Put it on the projector, pick the year, term, fortnight and day, and run the warm-up.

**Live site:** https://jasefreters.github.io/mathswarmup/

## What's loaded

| Year | Follows | Loaded |
| --- | --- | --- |
| Year 3 | Stage 2 – Year A | — |
| Year 4 | Stage 2 – Year B | Term 4, Weeks 1–2 (Unit 36) |
| Year 5 | Stage 3 – Year A | Term 4, Weeks 1–2 (Unit 16) |
| Year 6 | Stage 3 – Year B | — |

Each unit is a 2-week learning sequence with 8 reviews: Monday to Thursday of each week. A fortnight with no warm-ups yet shows which unit the scope and sequence has there.

To change which scope-and-sequence year a class follows, edit [`config.js`](config.js).

## How it works in class

- **Board:** five quick questions on one screen. Each card shows how students answer it: Tap, Type, Drag, Draw or Discuss.
- **Question view:** click a card to open it full screen and do the activity:
  - drag fractions onto a number line, or slide a marker to a decimal
  - type answers (whole numbers, decimals, fractions like `3/4` or `1 1/2`, money and times)
  - tap to choose, select, put things in order or balance parcels on a scale
  - shade a fraction strip, build a whole from a part, or draw
  - press **Check** to see what's right; anything wrong turns red
- **Done:** when the class gets a question right, its card on the board celebrates with confetti and stays green with a ✓ Done badge. Discussion and drawing questions count as done once the answer is shown. Ticks last for the day; **Clear ticks** resets the board.
- **Show answer** reveals the answer. On number lines it also moves the cards to the right places.
- **Answers** in the top bar reveals every answer on the board. The keyboard shortcut is `A`.
- **Timer:** 3, 5 or 10 minutes.
- **Notes** shows each question's syllabus focus area.
- **Mix it up** builds a random review from every lesson up to the selected day.

## Adding a unit

1. Copy a file in [`units/`](units), for example `units/s2b-unit36.js`, and set `stage`, `ab`, `term`, `ls` (learning sequence 1–5) and `unit`.
2. Put its images in a folder under `img/` and set `img` to that folder.
3. Add a `<script src="units/your-file.js"></script>` line in `index.html` next to the others.

Each question has a `type`: `mc`, `tf` or `sr`. A short response becomes interactive with an `interact` list. The part kinds are `input`, `fractions`, `sum6`, `pair`, `choose`, `select`, `order`, `numberline`, `marker`, `balance`, `shade`, `stack` and `sketch`; the existing units show each one in use. Text can use `**bold**`, `[3/4]` for a fraction and `1[2/4]` for a mixed number.

## Credits

Questions adapted from the NSW Department of Education *Mathematics Stage 2 Year B Unit 36* and *Stage 3 Year A Unit 16 – Review of learning* resources, and from the Stage 2 and Stage 3 sample scope and sequences. © State of New South Wales (Department of Education), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
