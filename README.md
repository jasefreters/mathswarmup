# Warm-Up Hub

A classroom warm-up board for **Stage 3 Mathematics**, built from my scope and sequence. Put it on the projector, pick the week and day, and run the warm-up.

**Term 4, Weeks 1–2** (Unit 16 review of learning) is loaded so far.

## What it does

- **Daily board:** five quick questions (multiple choice / true or false + short response) and a number sense activity on one screen.
- **Spotlight:** click any question to show it full screen. Use ← → to move between questions and `Esc` to go back.
- **Timer:** 3, 5 or 10 minutes.
- **Answers:** press **Answers** (or `A`) to reveal every answer. In spotlight, `A` reveals just that question.
- **Click to check:** tap a multiple-choice or true/false option to mark it right or wrong.
- **Notes:** shows the syllabus focus area for each question.
- **Mix it up:** builds a random review from every lesson up to the selected day (spaced practice).

## Adding or editing warm-ups

All content lives in [`data.js`](data.js). Images go in `img/`. The comment at the top of `data.js` explains the format. To add a new week, copy a week block and change the questions.

## Hosting on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, then pick `main` and `/ (root)`.
4. The site will be live at `https://<your-username>.github.io/warmup-hub/`.

## Credits

Questions adapted from NSW Department of Education, *Mathematics Stage 3 Year A Unit 16 – Review of learning*. © State of New South Wales (Department of Education), 2025, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
