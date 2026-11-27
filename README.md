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

## Reviewer notes

Each subject can have a study-notes page (e.g. `data/pre-finals/it-service-management/reviewer.html`).
Set `notes:` on the subject in `catalog.js` and the start screen links to it.
Wrap answers in `class="a"` so the page's "Hide answers" self-test mode can blur them.

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
