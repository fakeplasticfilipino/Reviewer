// Reviewer quiz app. Question banks register themselves via registerBank().
(function () {
  const BANKS = {};
  window.registerBank = function (id, questions) { BANKS[id] = questions; };

  const $ = (id) => document.getElementById(id);
  const termSel = $("term"), subjectSel = $("subject"), handoutBox = $("handouts");
  const countInput = $("count"), availableEl = $("available"), errorEl = $("setup-error");

  // Quiz state
  let pool = [];        // source questions for this session (endless mode refills from here)
  let quiz = [];        // questions served so far / queued
  let index = 0;
  let correct = 0, wrong = 0;
  let missed = [];
  let endless = false;
  let answered = false;

  // ---------- helpers ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // Shuffle a question's choices while keeping track of the correct one
  function prepare(q) {
    const order = shuffle(q.choices.map((_, i) => i));
    return { ...q, choices: order.map((i) => q.choices[i]), answer: order.indexOf(q.answer) };
  }
  function show(screen) {
    ["setup", "quiz", "results"].forEach((s) => ($(s).hidden = s !== screen));
    window.scrollTo(0, 0);
  }
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error("Could not load " + src));
      document.head.appendChild(s);
    });
  }
  async function ensureLoaded(handouts) {
    for (const h of handouts) if (!BANKS[h.id]) await loadScript(h.file);
  }
  const currentTerm = () => CATALOG.find((t) => t.id === termSel.value);
  const currentSubject = () => currentTerm().subjects.find((s) => s.id === subjectSel.value);
  const selectedHandouts = () => {
    const ids = [...handoutBox.querySelectorAll("input:checked")].map((c) => c.value);
    return currentSubject().handouts.filter((h) => ids.includes(h.id));
  };
  const selectedMode = () => document.querySelector('input[name="mode"]:checked').value;

  // ---------- setup screen ----------
  function fillTerms() {
    termSel.innerHTML = CATALOG.map((t) => `<option value="${t.id}">${t.name}</option>`).join("");
    fillSubjects();
  }
  function fillSubjects() {
    subjectSel.innerHTML = currentTerm().subjects
      .map((s) => `<option value="${s.id}">${s.name}</option>`).join("");
    fillHandouts();
  }
  async function fillHandouts() {
    const subject = currentSubject();
    const notesLink = $("notes-link");
    notesLink.hidden = !subject.notes;
    if (subject.notes) notesLink.href = subject.notes;
    const handouts = subject.handouts;
    handoutBox.innerHTML = handouts.map((h) => `
      <label class="check">
        <input type="checkbox" value="${h.id}" checked>
        <span>${h.title}</span>
        <small data-count-for="${h.id}"></small>
      </label>`).join("");
    try { await ensureLoaded(handouts); } catch (e) { errorEl.textContent = e.message; }
    handouts.forEach((h) => {
      const el = handoutBox.querySelector(`[data-count-for="${h.id}"]`);
      if (el && BANKS[h.id]) el.textContent = BANKS[h.id].length + " Qs";
    });
    updateAvailable();
  }
  function poolSize() {
    return selectedHandouts().reduce((n, h) => n + (BANKS[h.id] ? BANKS[h.id].length : 0), 0);
  }
  function updateAvailable() {
    const n = poolSize();
    availableEl.textContent = `(${n} available)`;
    countInput.max = n;
  }

  termSel.addEventListener("change", fillSubjects);
  subjectSel.addEventListener("change", fillHandouts);
  handoutBox.addEventListener("change", updateAvailable);
  document.querySelectorAll('input[name="mode"]').forEach((r) =>
    r.addEventListener("change", () => ($("count-field").hidden = selectedMode() === "endless"))
  );
  document.querySelectorAll(".chip").forEach((b) =>
    b.addEventListener("click", () => {
      countInput.value = b.dataset.count === "all" ? poolSize() : b.dataset.count;
    })
  );

  $("start").addEventListener("click", async () => {
    errorEl.textContent = "";
    const handouts = selectedHandouts();
    if (!handouts.length) return (errorEl.textContent = "Pick at least one handout.");
    try { await ensureLoaded(handouts); } catch (e) { return (errorEl.textContent = e.message); }

    const all = handouts.flatMap((h) => BANKS[h.id].map((q) => ({ ...q, source: h.title })));
    if (selectedMode() === "endless") return startQuiz(all, true);

    let n = parseInt(countInput.value, 10);
    if (!n || n < 1) return (errorEl.textContent = "Enter how many questions you want.");
    startQuiz(shuffle(all).slice(0, Math.min(n, all.length)), false);
  });

  // ---------- quiz screen ----------
  function startQuiz(questions, isEndless) {
    endless = isEndless;
    pool = questions;
    quiz = shuffle(pool).map(prepare);
    index = 0; correct = 0; wrong = 0; missed = [];
    updateTally();
    show("quiz");
    renderQuestion();
  }

  // Endless mode: when a round runs out, queue a fresh shuffle of the whole pool
  function refill() {
    let next = shuffle(pool);
    // Avoid showing the same question twice in a row across rounds
    if (next.length > 1 && next[0].question === quiz[quiz.length - 1].question) {
      next.push(next.shift());
    }
    quiz = quiz.concat(next.map(prepare));
  }

  function updateTally() {
    $("count-ok").textContent = correct;
    $("count-bad").textContent = wrong;
  }

  function renderQuestion() {
    const q = quiz[index];
    answered = false;
    if (endless) {
      const round = Math.floor(index / pool.length) + 1;
      const inRound = (index % pool.length) + 1;
      $("progress").textContent = `Round ${round} · ${inRound} of ${pool.length}`;
      $("bar-fill").style.width = ((inRound - 1) / pool.length) * 100 + "%";
    } else {
      $("progress").textContent = `Question ${index + 1} of ${quiz.length}`;
      $("bar-fill").style.width = (index / quiz.length) * 100 + "%";
    }
    $("q-source").textContent = q.source;
    $("question").textContent = q.question;
    $("feedback").hidden = true;
    $("next").hidden = true;

    const box = $("choices");
    box.innerHTML = "";
    q.choices.forEach((c, i) => {
      const b = document.createElement("button");
      b.className = "choice";
      b.innerHTML = `<span class="letter">${"ABCD"[i]}</span><span></span>`;
      b.lastChild.textContent = c;
      b.addEventListener("click", () => answer(i));
      box.appendChild(b);
    });
  }

  function answer(picked) {
    if (answered) return;
    answered = true;
    const q = quiz[index];
    const buttons = [...$("choices").children];
    buttons.forEach((b) => (b.disabled = true));
    buttons[q.answer].classList.add("correct");

    const right = picked === q.answer;
    if (right) correct++;
    else {
      wrong++;
      buttons[picked].classList.add("wrong");
      missed.push({ ...q, picked });
    }
    updateTally();

    const fb = $("feedback");
    fb.className = right ? "good" : "bad";
    fb.innerHTML = `<strong>${right ? "Correct!" : "Not quite."}</strong><span></span>`;
    fb.lastChild.textContent = q.explanation || "";
    fb.hidden = false;

    const last = !endless && index + 1 >= quiz.length;
    $("next").textContent = last ? "See results" : "Next";
    $("next").hidden = false;
    $("next").focus();
  }

  $("next").addEventListener("click", () => {
    index++;
    if (endless && index >= quiz.length) refill();
    if (index < quiz.length) renderQuestion();
    else showResults();
  });
  $("end").addEventListener("click", showResults);

  // Keyboard: 1-4 or A-D to answer
  document.addEventListener("keydown", (e) => {
    if ($("quiz").hidden) return;
    const k = e.key.toLowerCase();
    const i = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
    const buttons = [...$("choices").children];
    if (i >= 0 && buttons[i] && !buttons[i].disabled) buttons[i].click();
  });

  // ---------- results screen ----------
  function showResults() {
    const total = correct + wrong;
    const pct = total ? Math.round((correct / total) * 100) : 0;
    $("final-score").textContent = `${correct} / ${total} (${pct}%)`;
    $("final-msg").textContent =
      total === 0 ? "No questions answered." :
      `✓ ${correct} correct · ✗ ${wrong} wrong. ` + (
        pct === 100 ? "Perfect score!" :
        pct >= 80 ? "Great job, almost there." :
        pct >= 60 ? "Decent. Review the ones you missed below." :
        "Keep going. Go through the missed items and try again.");

    // In endless mode the same question can be missed more than once; list it once
    const seen = new Set();
    const unique = missed.filter((m) => !seen.has(m.question) && seen.add(m.question));
    $("retry-missed").hidden = unique.length === 0;

    const review = $("review");
    review.innerHTML = unique.length ? "<h2>Missed questions</h2>" : "";
    unique.forEach((m) => {
      const d = document.createElement("div");
      d.className = "review-item";
      d.innerHTML = `<p><strong></strong></p><p class="yours"></p><p class="right"></p><p class="muted"></p>`;
      const p = d.querySelectorAll("p");
      p[0].firstChild.textContent = m.question;
      p[1].textContent = "Your answer: " + m.choices[m.picked];
      p[2].textContent = "Correct: " + m.choices[m.answer];
      p[3].textContent = m.explanation || "";
      review.appendChild(d);
    });
    show("results");
  }

  $("retry-missed").addEventListener("click", () => {
    const seen = new Set();
    const unique = missed.filter((m) => !seen.has(m.question) && seen.add(m.question));
    // Rebuild from the original order (prepare() reshuffles choices again)
    startQuiz(unique.map(({ picked, ...q }) => {
      const orig = q.choices[q.answer];
      return { ...q, answer: q.choices.indexOf(orig) };
    }), endless);
  });
  $("restart").addEventListener("click", () => show("setup"));

  fillTerms();
})();
