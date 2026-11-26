# Reviewer

Multiple-choice quiz from class handouts. Pick a term, subject, handouts, and how many questions.

## Folder layout

```
index.html                 the page
app/                       app code (style.css, app.js), no need to touch
data/
  catalog.js               list of every term, subject and handout
  <term>/<subject>/*.js    one question bank per handout
handouts/                  original PDFs (local only, not uploaded; see .gitignore)
  <term>/<subject>/*.pdf
```

## Adding a handout

1. Put the PDF in `handouts/<term>/<subject>/`.
2. Create its question bank in `data/<term>/<subject>/` (same file name, `.js`).
3. Add one entry to `data/catalog.js` (and a new term/subject block if it's new).

Question format:

```js
{
  question: "…",
  choices: ["A", "B", "C", "D"],
  answer: 0,            // index of the correct choice (0–3)
  explanation: "…"
}
```

Choices are shuffled every time, so the correct one doesn't always appear in the same spot.
