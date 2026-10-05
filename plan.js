// ---------- Study plan (6th home card) ----------
// A day-by-day plan from today (D-46) to the exam, built from the 45-day revision strategy:
//   D-46…D-39  one topic a day (its readings, revised by doing CFAI questions) + one Fixed Income chapter a day
//   D-38       Fixed Income day
//   D-46…D-28  20 Ethics questions a day; CFAI website questions finished by D-28; all 25 formula sheets solid by D-28
//   D-37…D-22  Test bank pass 1 (mixed, timed sets from D-27)
//   D-21       Mock 1 → D-20/D-19 review → D-18…D-13 Test bank pass 2 (wrong + guessed only) + Mock 1 weak topics
//   D-12…D-10  Weak-topic timed sets → D-9 Mock 2 → D-8…D-3 mistakes + Ethics → D-2 light → D-1 rest
// Question quotas are not fixed: each day's quota = what is left ÷ the days left for it, so a short day is spread
// over the rest and a big day lowers tomorrow's number. Ticking readings marks them on the progression tracker,
// and mock scores go to the tracker's "Mock exam" row.
//
// Stored on this device under "cfa-plan":
// { totals: { cfai, tb, tb2 }, order: [topic…], logs: { date: { cfai|tb1|tb2|eth: [{ n, w }] } },
//   ticks: { date: { blockId | "r:<reading>": true } }, fnames: [25], fscores: { i: [[date, 1-3]] }, fdue: { date: [i] },
//   mocks: { m1|m2: { topic: [right, total] } }, errors: [{ id, d, src, topic, type, what, rule, rt }] }
const PLAN_KEY = "cfa-plan";
const PLAN_TOPICS = ["Quantitative Methods", "Economics", "Financial Statement Analysis", "Corporate Issuers", "Equity Valuation",
  "Derivatives", "Alternative Investments", "Portfolio Management"]; // the 8 topic days (Ethics is 20 questions a day instead)
const PLAN_SHORT = {
  "Quantitative Methods": "Quant", "Economics": "Economics", "Financial Statement Analysis": "FSA", "Corporate Issuers": "Corporate Issuers",
  "Equity Valuation": "Equity", "Fixed Income": "Fixed Income", "Derivatives": "Derivatives", "Alternative Investments": "Alternatives",
  "Portfolio Management": "PM", "Ethical and Professional Standards": "Ethics"
};
// Fixed Income, one chapter a day alongside the topic days. Reading 3 is long, so it gets two days.
const PLAN_FI = [
  { t: "FI · Term Structure and Interest Rate Dynamics", s: "term structure", r: [23] },
  { t: "FI · The Arbitrage-Free Valuation Framework", s: "arbitrage-free", r: [24] },
  { t: "FI · Bonds with Embedded Options (1): callable, putable, OAS", s: "embedded options 1", r: [25] },
  { t: "FI · Bonds with Embedded Options (2): effective duration/convexity, convertibles", s: "embedded options 2", r: [25] },
  { t: "FI · Credit Analysis Models", s: "credit models", r: [26] },
  { t: "FI · Credit Default Swaps", s: "CDS", r: [27] },
  { t: "FI · CFAI questions on readings 1–3, redo your FI mistakes", r: [] },
  { t: "FI · CFAI questions on readings 4–5, redo your FI mistakes", r: [] }
];
const ERR_TYPES = [
  ["Concept gap", "Redo questions on it until you get it right twice"],
  ["Formula", "Add it to your formula recall"],
  ["Misread", "Slow down on the question stem; underline what is asked"],
  ["Calculation", "Write the steps; check calculator mode and signs"],
  ["Timing", "Do timed sets (≈3 min a question)"]
];
const ERR_SOURCES = ["CFAI website", "Test bank", "Mock 1", "Mock 2", "Schweser", "This app"];
const ETH_DAILY = 20;
const COUNTERS = {
  cfai: { name: "CFAI website questions", total: p => p.totals.cfai },
  tb1: { name: "Test bank · pass 1", total: p => p.totals.tb },
  tb2: { name: "Test bank · pass 2 (wrong + guessed only)", total: p => p.totals.tb2 ?? planSum(p, "tb1", "w") },
  eth: { name: "Ethics questions", total: () => null }
};

function loadPlan() {
  let p = {};
  try { p = JSON.parse(localStorage.getItem(PLAN_KEY)) || {}; } catch {}
  return {
    totals: {}, order: PLAN_TOPICS.slice(), logs: {}, ticks: {}, fnames: [], fscores: {}, fdue: {}, mocks: {}, errors: [], ...p
  };
}
function savePlan(p) { try { localStorage.setItem(PLAN_KEY, JSON.stringify(p)); } catch {} }

// The reading numbers on the progression tracker, per topic (1–42, in the tracker's order).
function planReadings() {
  const out = {};
  let n = 0;
  PT_TOPICS.forEach(([topic, , readings]) => {
    if (topic === "Mock Exam" || topic === "Daily Quick Questions") return;
    out[topic] = readings.map(title => ({ id: ++n, title }));
  });
  return out;
}
const planReadingTitle = id => { for (const rs of Object.values(planReadings())) { const r = rs.find(x => x.id === id); if (r) return r.title; } return ""; };

const planDate = d => { const x = midnight(EXAM); x.setDate(x.getDate() - d); return x; };
const planDLeft = (date = new Date()) => Math.round((midnight(EXAM) - midnight(date)) / 86400000);

// Mock 1's three weakest topics (lowest %), once its scores are in.
function planWeak(p) {
  const m = p.mocks.m1 || {};
  return Object.entries(m).filter(([, [r, t]]) => t > 0).map(([k, [r, t]]) => [k, r / t]).sort((a, b) => a[1] - b[1]).slice(0, 3).map(([k]) => k);
}
const weakText = p => { const w = planWeak(p); return w.length ? w.map(t => PLAN_SHORT[t]).join(", ") : "your weakest topics (enter Mock 1 scores to see them)"; };

// ---- The plan itself: one entry per day, D-46 … D-1 ----
function buildPlan(p) {
  const R = planReadings(), days = [];
  const day = (d, phase, title, blocks) => days.push({ d, key: dkey(planDate(d)), phase, title, blocks });
  const eth = () => ({ id: "eth", kind: "count", c: "eth", title: `Ethics · ${ETH_DAILY} questions`, note: "Every day until D-28. Note the standard you missed, not just the answer." });
  const cfai = note => ({ id: "cfai", kind: "count", c: "cfai", title: "CFAI website questions", note });
  const tb1 = note => ({ id: "tb1", kind: "count", c: "tb1", title: "Test bank · pass 1", note });
  const form = (all = false) => ({ id: "form", kind: "formula", all, title: all ? "Formulas · all 25 from memory (≈20 min)" : "Formulas · today's sheets from memory", note: all ? "Write each sheet on a blank page, then check and score it." : "Write them on a blank page first, then check and score each one." });
  const check = (id, title, note, extra = {}) => ({ id, kind: "check", title, note, ...extra });

  p.order.forEach((topic, i) => {
    const fi = PLAN_FI[i];
    day(46 - i, "Topic days + Fixed Income", `${PLAN_SHORT[topic]} + FI ${fi.s || "questions"}`, [
      { id: "topic", kind: "read", topic, title: `${topic} · revise every reading`, note: "Revise by doing questions, not by re-reading. Tick each reading when you are done with it.", r: R[topic].map(x => x.id) },
      cfai(`Today: questions on ${PLAN_SHORT[topic]}.`),
      fi.r.length ? { id: "fi", kind: "read", topic: "Fixed Income", title: fi.t, note: "Schweser summary first, then that reading's questions.", r: fi.r }
        : check("fi", fi.t, "Then redo every FI question you have got wrong so far.", { topic: "Fixed Income" }),
      eth(), form()
    ]);
  });
  day(38, "Fixed Income day", "Fixed Income · full day", [
    check("fi-timed", "Fixed Income · timed mixed vignettes", "≈3 min a question, then review every one.", { topic: "Fixed Income" }),
    check("fi-redo", "Redo every Fixed Income mistake so far", "Use your error log and the app's incorrect questions.", { errTopic: "Fixed Income" }),
    cfai("Whatever is left, mixed topics."), eth(), form()
  ]);
  for (let d = 37; d >= 28; d--) {
    day(d, "CFAI finish + Test bank pass 1", d === 28 ? "Finish CFAI · all formulas solid" : "CFAI questions + Test bank pass 1", [
      cfai(d === 28 ? "Last day: finish them all." : "Mixed topics: whatever is left."),
      tb1("Flag every guess. Guesses count as wrong for pass 2."), eth(), form(d === 28)
    ]);
  }
  for (let d = 27; d >= 22; d--) {
    day(d, "Test bank pass 1 · mixed & timed", d === 24 ? "Test bank, mixed timed sets · half-day buffer" : "Test bank, mixed timed sets", [
      tb1("Timed sets of 4–6 vignettes from different topics (≈3 min a question), then review."),
      d === 24 ? check("buffer", "Buffer half-day", "Catch up on anything behind, or rest.") : null, form(true)
    ].filter(Boolean));
  }
  day(21, "Mock 1", "MOCK 1", [
    { id: "mock", kind: "mock", m: "m1", title: "Mock 1 · CFAI mock exam", note: "Two sessions of 2h12m (44 questions each), starting at 14:30 like the real exam. Enter your scores by topic afterwards." }
  ]);
  day(20, "Mock 1 review", "Mock 1 review", [
    check("rev1", "Review every Mock 1 question", "Including the ones you got right by guessing. Log each mistake in the error log.", { errLog: true }),
    form(true)
  ]);
  day(19, "Mock 1 review", "Mock 1 review + weakest topic", [
    check("rev1b", "Finish the Mock 1 review", "", { errLog: true }),
    check("weak", "Weakest topic: targeted questions", "", { weak: true }), form(true)
  ]);
  for (let d = 18; d >= 13; d--) {
    day(d, "Test bank pass 2 + weak topics", d === 15 ? "Test bank pass 2 + weak topics · half-day buffer" : "Test bank pass 2 + weak topics", [
      { id: "tb2", kind: "count", c: "tb2", title: "Test bank · pass 2 (wrong + guessed only)", note: "Write the rule you missed into the error log." },
      check("weak", "Weak topics from Mock 1", "", { weak: true }),
      d === 15 ? check("buffer", "Buffer half-day", "Catch up on anything behind, or rest.") : null, form(true)
    ].filter(Boolean));
  }
  for (let d = 12; d >= 10; d--) {
    day(d, "Weak topics · timed sets", "Weak topics · mixed timed sets", [
      check("timed", "Mixed timed vignette set", "4–6 vignettes, ≈3 min a question, weak topics first.", { weak: true }),
      check("errs", "Re-test your error log", "", { retest: true }), form(true)
    ]);
  }
  day(9, "Mock 2", "MOCK 2", [
    { id: "mock", kind: "mock", m: "m2", title: "Mock 2 · CFAI mock exam", note: "Same conditions as the exam: 14:30 start, two sessions of 2h12m. Enter your scores by topic afterwards." }
  ]);
  for (let d = 8; d >= 3; d--) {
    day(d, "Mistakes + Ethics", d === 8 ? "Mock 2 review + Ethics" : "Mistakes only + Ethics", [
      d === 8 ? check("rev2", "Review every Mock 2 question", "Log each mistake in the error log.", { errLog: true })
        : check("errs", "Re-test your error log", "Only what you have got wrong or found confusing.", { retest: true }),
      check("eth-late", "Ethics · 1 hour of questions", "Ethics is often decisive near the pass line and rewards late review.", { topic: "Ethical and Professional Standards" }),
      check("hi", "High-weight concepts you confuse", "FSA, Equity, Fixed Income, PM."), form(true)
    ]);
  }
  day(2, "Taper", "Light review", [
    check("light", "Formula sheets + error-log highlights", "Stop by early evening."),
    check("pack", "Pack for the exam", "Admission ticket · passport/ID · approved calculator + spare battery")
  ]);
  day(1, "Taper", "Rest", [
    check("pass", "One relaxed pass over the formula sheets", ""),
    check("route", "Route and timing", "Plan to arrive early for the 14:30 start. Sleep early.")
  ]);
  return days;
}

// ---- Counters and quotas ----
const planLog = (p, key, c) => ((p.logs[key] || {})[c] || []);
const planDayN = (p, key, c, f = "n") => planLog(p, key, c).reduce((s, x) => s + (x[f] || 0), 0);
function planSum(p, c, f = "n", before = null) {
  return Object.keys(p.logs).filter(k => before === null || k < before).reduce((s, k) => s + planDayN(p, k, c, f), 0);
}
// Today's quota: what is left at the start of the day ÷ the planned days left (including this one).
function planQuota(p, plan, c, key) {
  if (c === "eth") return ETH_DAILY;
  const total = COUNTERS[c].total(p);
  if (!total) return null;
  const sched = plan.filter(x => x.blocks.some(b => b.c === c)).map(x => x.key);
  const left = Math.max(0, total - planSum(p, c, "n", key));
  const daysLeft = Math.max(1, sched.filter(k => k >= key).length);
  return Math.ceil(left / daysLeft);
}
function planBlockDone(p, plan, day, b) {
  const t = p.ticks[day.key] || {};
  if (b.kind === "read") return b.r.every(id => t["r:" + id]);
  if (b.kind === "count") { const q = b.overdue || planQuota(p, plan, b.c, day.key); return q !== null && planDayN(p, day.key, b.c) >= q; }
  if (b.kind === "formula") { const due = planDue(p, day.key, b.all); return due.length > 0 && due.every(i => planFScored(p, i, day.key)); }
  if (b.kind === "mock") return Object.values(p.mocks[b.m] || {}).some(([, tt]) => tt > 0);
  return !!t[b.id];
}
const planDayDone = (p, plan, day) => day.blocks.filter(b => planBlockDone(p, plan, day, b)).length;

// ---- Formula sheets: 4 a day until D-28 (never-recalled and shaky ones first), then all 25 every day ----
const FS = 25;
const planFName = (p, i) => p.fnames[i] || `Formula sheet ${i + 1}`;
const planFLast = (p, i) => { const s = p.fscores[i] || []; return s.length ? s[s.length - 1] : null; };
const planFScored = (p, i, key) => (p.fscores[i] || []).some(([k]) => k === key);
function planDue(p, key, all) {
  if (all) return [...Array(FS).keys()];
  if (p.fdue[key]) return p.fdue[key];
  if (key > dkey(new Date())) return []; // chosen on the day itself, from how the recalls have gone
  const now = fromKey(key);
  const prio = i => {
    const l = planFLast(p, i);
    if (!l) return 1000 - i;                                   // never recalled: first, in order
    const days = (now - fromKey(l[0])) / 86400000;
    return days * (4 - l[1]) + (l[1] === 1 ? 50 : 0);          // shaky and long-ago come back sooner
  };
  const due = [...Array(FS).keys()].sort((a, b) => prio(b) - prio(a)).slice(0, 4);
  p.fdue[key] = due; savePlan(p);
  return due;
}
const planSolid = p => [...Array(FS).keys()].filter(i => (planFLast(p, i) || [])[1] === 3).length;

// ---- Progression tracker links ----
function ptMark(readingId, key, on) {
  const pt = loadPT(), k = readingId + "|" + key;
  let marks = (pt.cells[k] || []).filter(m => !(m.t === "r" && m.src === "plan"));
  if (on && !marks.some(m => m.t === "r")) marks.push({ t: "r", d: 3, src: "plan" });
  if (marks.length) pt.cells[k] = marks; else delete pt.cells[k];
  savePT(pt);
}
function ptMock(key, right, total) {
  const pt = loadPT(), k = "mock|" + key;
  let marks = (pt.cells[k] || []).filter(m => !(m.t === "q" && m.src === "plan"));
  if (total > 0) marks = marks.filter(m => m.t !== "q").concat({ t: "q", s: Math.round(right / total * 100), right, n: total, sets: 1, src: "plan" });
  if (marks.length) pt.cells[k] = marks; else delete pt.cells[k];
  savePT(pt);
}

// ---- Home card ----
function planHomeInfo() {
  const p = loadPlan(), plan = buildPlan(p), key = dkey(new Date()), day = plan.find(x => x.key === key);
  if (!day) return planDLeft() > 46 ? "Starts at D-46" : "Good luck!";
  return `${dday(new Date())} · ${planDayDone(p, plan, day)}/${day.blocks.length} done`;
}

// ---- Screens ----
let planView = "today";
function planScreen(dir = "fwd", view = planView, dateKey = null) {
  planView = view;
  screen(dir);
  backTo = () => planScreen("back", planView, dateKey);
  app.append(nav("Menu", () => home("back")));
  const tabs = el("div", { className: "pl-tabs" });
  [["today", "Today"], ["timeline", "All days"], ["formulas", "Formulas"], ["errors", "Mistakes"], ["mocks", "Mocks"], ["setup", "Setup"]].forEach(([v, t]) => {
    const b = el("button", { className: "pl-tab" + (v === view ? " on" : "") }, t);
    b.onclick = () => { if (v !== view || dateKey) planScreen(v === "today" ? "back" : "fwd", v); };
    tabs.append(b);
  });
  app.append(tabs);
  const p = loadPlan(), plan = buildPlan(p);
  if (view === "today") planDay(p, plan, dateKey || dkey(new Date()));
  else if (view === "timeline") planTimeline(p, plan);
  else if (view === "formulas") planFormulas(p);
  else if (view === "errors") planErrors(p);
  else if (view === "mocks") planMocks(p);
  else planSetup(p, plan);
}

function planDay(p, plan, key) {
  const todayKey = dkey(new Date()), isToday = key === todayKey;
  let day = plan.find(x => x.key === key);
  if (!day) {
    // Before the plan starts or after the exam: show the nearest day.
    day = key < plan[0].key ? plan[0] : plan[plan.length - 1];
    key = day.key;
  }
  const date = fromKey(key), done = planDayDone(p, plan, day);
  const head = el("div", { className: "pl-head" });
  head.append(el("p", { className: "kicker" }, `${dday(date)} · ${date.toLocaleDateString([], { weekday: "long", day: "numeric", month: "long" })}${isToday ? " · today" : ""}`),
    el("h1", { className: "title" }, day.title), el("p", { className: "sub", style: "margin:0" }, day.phase));
  const ring = el("div", { className: "pl-ring" });
  ring.style.setProperty("--f", (done / day.blocks.length * 100).toFixed(1));
  ring.append(el("b", {}, `${done}/${day.blocks.length}`));
  const top = el("div", { className: "pl-top" });
  top.append(head, ring);
  app.append(top);

  // Focused hours from the Timer, against an 8-hour day.
  if (isToday) {
    const sec = todayFocusSec(), bar = el("div", { className: "pl-hours" });
    const fill = el("i"); fill.style.width = Math.min(100, sec / (8 * 3600) * 100) + "%";
    const track = el("div", { className: "pl-bar" }); track.append(fill);
    bar.append(el("span", {}, `Focused today ${fmtDur(sec)} of 8h`), track);
    const go = el("button", { className: "btn ghost small" }, "Timer"); go.onclick = () => studyTimer();
    bar.append(go);
    app.append(bar);
  }

  // Readings left unticked on earlier days: one tap to finish them here.
  if (isToday) {
    const owed = [];
    plan.filter(x => x.key < key).forEach(x => x.blocks.filter(b => b.kind === "read").forEach(b => {
      const left = b.r.filter(id => !(p.ticks[x.key] || {})["r:" + id]);
      if (left.length) owed.push([x, b, left]);
    }));
    if (owed.length) {
      const c = el("div", { className: "card pl-owed" });
      c.append(el("p", { className: "kicker" }, "Still open from earlier days"));
      owed.forEach(([x, b, left]) => left.forEach(id => {
        const row = el("label", { className: "pl-read" });
        const cb = el("input", { type: "checkbox" });
        cb.onchange = () => { const q = loadPlan(); (q.ticks[x.key] = q.ticks[x.key] || {})["r:" + id] = cb.checked; savePlan(q); ptMark(id, x.key, cb.checked); row.classList.toggle("done", cb.checked); };
        row.append(cb, el("span", {}, `${planReadingTitle(id)}`), el("small", {}, `${dday(fromKey(x.key))} · ${PLAN_SHORT[b.topic] || ""}`));
        c.append(row);
      }));
      app.append(c);
    }
  }

  day.blocks.forEach(b => app.append(planBlock(p, plan, day, b)));

  // Overdue question counters: still questions left after their last planned day.
  if (isToday) ["cfai", "tb1", "tb2"].forEach(c => {
    const sched = plan.filter(x => x.blocks.some(b => b.c === c)), total = COUNTERS[c].total(p);
    if (!sched.length || !total || day.blocks.some(b => b.c === c) || key <= sched[sched.length - 1].key) return;
    const left = total - planSum(p, c);
    if (left > 0) app.append(planBlock(p, plan, day, { id: c, kind: "count", c, title: `${COUNTERS[c].name} · overdue`, note: `${left} still left after its last planned day. Fit them in today.`, overdue: left }));
  });

  // Next days, so tomorrow is never a surprise.
  const idx = plan.indexOf(day), next = plan.slice(idx + 1, idx + 3);
  if (next.length) {
    const c = el("div", { className: "pl-next" });
    c.append(el("p", { className: "label" }, "Coming up"));
    next.forEach(x => {
      const b = el("button", { className: "pl-day" });
      b.append(el("span", { className: "pl-d" }, dday(fromKey(x.key))), el("span", { className: "pl-t" }, x.title), el("span", { className: "chev" }, "›"));
      b.onclick = () => planScreen("fwd", "today", x.key);
      c.append(b);
    });
    app.append(c);
  }
  if (!isToday) {
    const back = el("button", { className: "btn ghost", style: "margin-top:14px" }, "Back to today");
    back.onclick = () => planScreen("back", "today");
    app.append(back);
  }
}

function planBlock(p, plan, day, b) {
  const card = el("div", { className: "card pl-block" });
  const doneNow = () => planBlockDone(loadPlan(), buildPlan(loadPlan()), day, b);
  const head = el("div", { className: "pl-bh" });
  const tick = el("span", { className: "pl-tick" });
  head.append(tick, el("h3", {}, b.title));
  card.append(head);
  if (b.note) card.append(el("p", { className: "sub pl-note" }, b.note));
  const refresh = () => {
    card.classList.toggle("done", doneNow());
    const r = document.querySelector(".pl-ring");
    if (r) {
      const q = loadPlan(), pl = buildPlan(q), d = pl.find(x => x.key === day.key), n = d ? planDayDone(q, pl, d) : 0;
      if (d) { r.style.setProperty("--f", (n / d.blocks.length * 100).toFixed(1)); r.querySelector("b").textContent = `${n}/${d.blocks.length}`; }
    }
  };

  if (b.kind === "read") {
    const t = p.ticks[day.key] || {};
    b.r.forEach(id => {
      const row = el("label", { className: "pl-read" + (t["r:" + id] ? " done" : "") });
      const cb = el("input", { type: "checkbox", checked: !!t["r:" + id] });
      cb.onchange = () => {
        const q = loadPlan(); (q.ticks[day.key] = q.ticks[day.key] || {})["r:" + id] = cb.checked; savePlan(q);
        ptMark(id, day.key, cb.checked);
        row.classList.toggle("done", cb.checked); refresh();
      };
      row.append(cb, el("span", {}, planReadingTitle(id)));
      card.append(row);
    });
    card.append(el("p", { className: "pl-hint" }, "Ticked readings show as deep revision on the progression tracker."));
  } else if (b.kind === "count") {
    card.append(planCounter(day, b, refresh));
  } else if (b.kind === "formula") {
    const due = planDue(p, day.key, b.all);
    const list = el("div", { className: "pl-flist" });
    due.forEach(i => list.append(planFRow(i, day.key, refresh)));
    if (!due.length) list.append(el("p", { className: "sub" }, "Chosen on the day, from how your recalls have gone."));
    card.append(list);
    if (b.all) { const s = el("p", { className: "pl-hint" }, `${planSolid(p)}/25 solid`); card.append(s); }
  } else if (b.kind === "mock") {
    const go = el("button", { className: "btn" }, "Enter scores by topic");
    go.onclick = () => planScreen("fwd", "mocks");
    const sc = p.mocks[b.m] || {}, tot = Object.values(sc).reduce((a, [r, t]) => [a[0] + r, a[1] + t], [0, 0]);
    if (tot[1]) card.append(el("p", { className: "pl-big" }, `${Math.round(tot[0] / tot[1] * 100)}%  ·  ${tot[0]}/${tot[1]}`));
    const row = el("div", { className: "row" }); row.append(go); card.append(row);
  } else {
    const t = p.ticks[day.key] || {};
    const row = el("div", { className: "row", style: "margin-top:8px" });
    const cb = el("button", { className: "btn" + (t[b.id] ? " ghost" : "") }, t[b.id] ? "Done ✓" : "Mark done");
    cb.onclick = () => {
      const q = loadPlan(), tt = (q.ticks[day.key] = q.ticks[day.key] || {});
      tt[b.id] = !tt[b.id]; savePlan(q);
      cb.textContent = tt[b.id] ? "Done ✓" : "Mark done"; cb.classList.toggle("ghost", tt[b.id]); refresh();
    };
    row.append(cb);
    if (b.weak) card.insertBefore(el("p", { className: "pl-weak" }, `Weak topics: ${weakText(p)}`), card.children[1] || null);
    if (b.errLog || b.retest || b.errTopic) {
      const e = el("button", { className: "btn ghost" }, b.retest ? "Re-test mistakes" : "Error log");
      e.onclick = () => b.retest ? planRetest() : planScreen("fwd", "errors");
      row.append(e);
    }
    const qt = b.topic || (b.weak && planWeak(p)[0]) || b.errTopic;
    if (qt && QUESTIONS.some(q => q.topic === qt)) {
      const qb = el("button", { className: "btn ghost" }, `10 quick ${PLAN_SHORT[qt]} questions`);
      qb.onclick = () => planQuick(qt);
      row.append(qb);
    }
    card.append(row);
  }
  if (b.kind === "read" && b.topic && QUESTIONS.some(q => q.topic === b.topic)) {
    const qb = el("button", { className: "btn ghost small", style: "margin-top:10px" }, `10 quick ${PLAN_SHORT[b.topic]} questions in this app`);
    qb.onclick = () => planQuick(b.topic);
    card.append(qb);
  }
  card.classList.toggle("done", planBlockDone(p, plan, day, b));
  return card;
}

function planQuick(topic) {
  const list = shuffle(QUESTIONS.filter(q => q.topic === topic)).slice(0, 10);
  begin(list, false, true);
  backTo = () => planScreen("back", "today");
}

// Question counter: log each sitting as "done / wrong"; shows today's quota, the running total and the accuracy.
function planCounter(day, b, refresh) {
  const box = el("div", { className: "pl-count" });
  const draw = () => {
    box.innerHTML = "";
    const p = loadPlan(), plan = buildPlan(p), c = b.c;
    const n = planDayN(p, day.key, c), w = planDayN(p, day.key, c, "w");
    const quota = b.overdue || planQuota(p, plan, c, day.key), total = COUNTERS[c].total(p);
    const big = el("div", { className: "pl-cnum" });
    big.append(el("b", {}, String(n)), el("span", {}, quota === null ? " done" : ` / ${quota} today`));
    box.append(big);
    if (quota) { const tr = el("div", { className: "pl-bar" }), f = el("i"); f.style.width = Math.min(100, n / quota * 100) + "%"; tr.append(f); box.append(tr); }
    const facts = [];
    if (n) facts.push(`${Math.round((n - w) / n * 100)}% right today`);
    if (c !== "eth" && total) {
      const all = planSum(p, c);
      facts.push(`${all} / ${total} overall · ${Math.max(0, total - all)} left`);
    } else if (c !== "eth") facts.push("Set your total in Setup to get a daily quota");
    if (c === "eth") { const all = planSum(p, "eth"), aw = planSum(p, "eth", "w"); if (all) facts.push(`${all} done so far · ${Math.round((all - aw) / all * 100)}% right`); }
    if (c === "tb1" && planSum(p, "tb1", "w")) facts.push(`${planSum(p, "tb1", "w")} wrong/guessed → your pass 2`);
    box.append(el("p", { className: "pl-hint" }, facts.join(" · ")));
    if (c !== "eth" && !total) {
      const set = el("button", { className: "btn ghost small" }, "Setup"); set.onclick = () => planScreen("fwd", "setup"); box.append(set);
    }
    const add = el("div", { className: "pl-add" });
    const fn = el("input", { className: "field small", type: "number", inputMode: "numeric", min: 0, placeholder: "done" });
    const fw = el("input", { className: "field small", type: "number", inputMode: "numeric", min: 0, placeholder: "wrong" });
    const ok = el("button", { className: "btn small" }, "Add");
    ok.onclick = () => {
      const dn = Math.max(0, parseInt(fn.value, 10) || 0), wr = Math.min(dn, Math.max(0, parseInt(fw.value, 10) || 0));
      if (!dn) { fn.focus(); return; }
      const q = loadPlan(), L = (q.logs[day.key] = q.logs[day.key] || {});
      (L[c] = L[c] || []).push({ n: dn, w: wr });
      savePlan(q); draw(); refresh();
    };
    add.append(fn, el("span", { className: "pl-sl" }, "done ·"), fw, el("span", { className: "pl-sl" }, c === "tb1" ? "wrong or guessed" : "wrong"), ok);
    const sets = planLog(p, day.key, c);
    if (sets.length) {
      const undo = el("button", { className: "link-btn" }, `Undo last (${sets[sets.length - 1].n})`);
      undo.onclick = () => { const q = loadPlan(); q.logs[day.key][c].pop(); savePlan(q); draw(); refresh(); };
      add.append(undo);
    }
    box.append(add);
  };
  draw();
  return box;
}

// One formula sheet: name + 1/2/3 recall score for that day.
function planFRow(i, key, refresh) {
  const row = el("div", { className: "pl-frow" });
  const draw = () => {
    row.innerHTML = "";
    const p = loadPlan(), today = (p.fscores[i] || []).find(([k]) => k === key), last = planFLast(p, i);
    const name = el("div", { className: "pl-fname" });
    name.append(el("span", {}, planFName(p, i)), el("small", {}, last ? `last ${["", "shaky", "nearly", "solid"][last[1]]} · ${dday(fromKey(last[0]))}` : "not recalled yet"));
    const btns = el("div", { className: "pl-fbtn" });
    [[1, "Shaky"], [2, "Nearly"], [3, "Solid"]].forEach(([v, t]) => {
      const b = el("button", { className: `s${v}` + (today && today[1] === v ? " on" : "") }, t);
      b.onclick = () => {
        const q = loadPlan(), arr = (q.fscores[i] = (q.fscores[i] || []).filter(([k]) => k !== key));
        if (!(today && today[1] === v)) arr.push([key, v]);
        arr.sort((a, b) => a[0] < b[0] ? -1 : 1);
        savePlan(q); draw(); if (refresh) refresh();
      };
      btns.append(b);
    });
    row.append(name, btns);
  };
  draw();
  return row;
}

function planTimeline(p, plan) {
  const todayKey = dkey(new Date());
  app.append(el("h1", { className: "title" }, "All days"), el("p", { className: "sub" }, `${dday(new Date())} · tap a day to see or log it`));
  let phase = null, list = null;
  plan.forEach(x => {
    if (x.phase !== phase) {
      phase = x.phase;
      app.append(el("p", { className: "label" }, phase));
      list = el("div", { className: "card list pl-list" });
      app.append(list);
    }
    const n = planDayDone(p, plan, x), past = x.key < todayKey;
    const b = el("button", { className: "pl-day" + (x.key === todayKey ? " today" : "") + (/^MOCK/.test(x.title) ? " mock" : "") });
    const st = el("span", { className: "pl-st" + (n === x.blocks.length ? " full" : n ? " part" : past ? " miss" : "") });
    st.style.setProperty("--f", (n / x.blocks.length * 100).toFixed(1));
    const dd = fromKey(x.key);
    b.append(el("span", { className: "pl-d" }, dday(dd)), el("span", { className: "pl-date" }, `${DOW[dd.getDay()]} ${dd.getDate()}/${dd.getMonth() + 1}`),
      el("span", { className: "pl-t" }, x.title), st);
    b.onclick = () => planScreen("fwd", "today", x.key);
    list.append(b);
  });
  requestAnimationFrame(() => { const t = document.querySelector(".pl-day.today"); if (t) t.scrollIntoView({ block: "center" }); });
}

function planFormulas(p) {
  const key = dkey(new Date());
  app.append(el("h1", { className: "title" }, "Formula sheets"),
    el("p", { className: "sub" }, `${planSolid(p)}/25 solid · goal: all solid by D-28 (${dkey(planDate(28)).slice(5).replace("-", "/")}). Score a sheet after writing it from memory.`));
  const bar = el("div", { className: "pl-bar big" }), f = el("i"); f.style.width = planSolid(p) / FS * 100 + "%"; bar.append(f); app.append(bar);
  const c = el("div", { className: "card" });
  [...Array(FS).keys()].forEach(i => c.append(planFRow(i, key)));
  app.append(c);
  app.append(el("p", { className: "pl-hint" }, "Names: Setup → Formula sheet names."));
}

function planErrors(p) {
  app.append(el("h1", { className: "title" }, "Mistakes"),
    el("p", { className: "sub" }, "Log mistakes from the CFAI website, the test bank and mocks. The rule you write is what you re-test before the exam."));
  // Counts by type, with what fixes each type.
  const counts = el("div", { className: "pl-types" });
  ERR_TYPES.forEach(([t, fix]) => {
    const n = p.errors.filter(e => e.type === t).length;
    const d = el("div", { className: "pl-type" });
    d.append(el("b", {}, String(n)), el("span", {}, t), el("small", {}, fix));
    counts.append(d);
  });
  app.append(counts);
  const row = el("div", { className: "row" });
  const left = p.errors.filter(e => (e.rt || 0) < 2).length;
  const rt = el("button", { className: "btn", disabled: !p.errors.length }, `Re-test (${left} to go)`); rt.onclick = () => planRetest();
  const wn = wrongList().length, nb = el("button", { className: "btn ghost", disabled: !wn }, `App's incorrect questions (${wn})`);
  nb.onclick = () => { notes(); backTo = () => planScreen("back", "errors"); };
  row.append(rt, nb);
  app.append(row);

  // Add a mistake: quick to fill in between questions.
  const form = el("div", { className: "card", style: "margin-top:16px" });
  form.append(el("p", { className: "kicker" }, "Add a mistake"));
  const sel = (opts, val) => { const s = el("select", { className: "field" }); opts.forEach(o => s.append(el("option", { value: o }, PLAN_SHORT[o] || o))); if (val) s.value = val; return s; };
  const last = p.errors[p.errors.length - 1] || {};
  const sTopic = sel(TOPICS, last.topic), sSrc = sel(ERR_SOURCES, last.src), sType = sel(ERR_TYPES.map(x => x[0]));
  const what = el("textarea", { className: "field", rows: 2, placeholder: "What I did wrong (e.g. used option-free duration for a callable bond)" });
  const rule = el("textarea", { className: "field", rows: 2, placeholder: "Rule to remember (e.g. callable: use effective duration; it shortens as rates fall)" });
  const g = el("div", { className: "pl-form" });
  g.append(sTopic, sSrc, sType);
  const save = el("button", { className: "btn" }, "Save");
  save.onclick = () => {
    if (!what.value.trim() && !rule.value.trim()) { what.focus(); return; }
    const q = loadPlan();
    q.errors.push({ id: Date.now(), d: dkey(new Date()), topic: sTopic.value, src: sSrc.value, type: sType.value, what: what.value.trim(), rule: rule.value.trim(), rt: 0 });
    savePlan(q); planScreen("up", "errors");
  };
  form.append(g, what, rule, save);
  app.append(form);

  // The log, newest first, filterable by topic.
  if (p.errors.length) {
    const filt = sel(["All topics", ...TOPICS]);
    const list = el("div");
    const draw = () => {
      list.innerHTML = "";
      p.errors.slice().reverse().filter(e => filt.value === "All topics" || e.topic === filt.value).forEach(e => {
        const c = el("div", { className: "card pl-err" });
        const m = el("div", { className: "meta" });
        m.append(el("span", {}, `${PLAN_SHORT[e.topic]} · ${e.type}`), el("span", {}, `${e.src} · ${e.d.slice(5).replace("-", "/")}${e.rt >= 2 ? " · learnt ✓" : ""}`));
        c.append(m);
        if (e.what) c.append(el("p", { style: "margin:0 0 6px" }, e.what));
        if (e.rule) c.append(el("p", { className: "pl-rule" }, e.rule));
        const del = el("button", { className: "link-btn" }, "Delete");
        del.onclick = () => { if (!confirm("Delete this mistake?")) return; const q = loadPlan(); q.errors = q.errors.filter(x => x.id !== e.id); savePlan(q); planScreen("up", "errors"); };
        c.append(del);
        list.append(c);
      });
    };
    filt.onchange = draw;
    app.append(el("p", { className: "label" }, `Your log (${p.errors.length})`), filt, list);
    draw();
  }
}

// Re-test: see the mistake, recall the rule, then reveal it. Two "Got it"s in a row and it counts as learnt.
function planRetest() {
  const p = loadPlan();
  const deckE = shuffle(p.errors.filter(e => (e.rt || 0) < 2));
  let k = 0;
  const draw = () => {
    screen("fwd");
    app.append(nav("Mistakes", () => planScreen("back", "errors")));
    if (k >= deckE.length) {
      const c = el("div", { className: "card" });
      c.append(el("p", { className: "kicker" }, "Done"), el("p", { className: "sub" }, deckE.length ? "That's every open mistake for now." : "No open mistakes. Log some first."));
      const b = el("button", { className: "btn" }, "Back"); b.onclick = () => planScreen("back", "errors");
      c.append(b); app.append(c); return;
    }
    const e = deckE[k];
    const c = el("div", { className: "card" });
    c.append(el("p", { className: "kicker" }, `${k + 1} / ${deckE.length} · ${PLAN_SHORT[e.topic]} · ${e.type}`));
    c.append(el("p", { className: "q" }, e.what || "(no description)"), el("p", { className: "sub" }, "What is the rule? Say it before you reveal it."));
    const ans = el("p", { className: "pl-rule", hidden: true }, e.rule || "(no rule written)");
    const row = el("div", { className: "row" });
    const show = el("button", { className: "btn" }, "Reveal");
    show.onclick = () => {
      ans.hidden = false; row.innerHTML = "";
      const mark = good => { const q = loadPlan(), x = q.errors.find(y => y.id === e.id); if (x) x.rt = good ? (x.rt || 0) + 1 : 0; savePlan(q); k++; draw(); };
      const a = el("button", { className: "btn" }, "Got it"), b = el("button", { className: "btn ghost" }, "Still shaky");
      a.onclick = () => mark(true); b.onclick = () => mark(false);
      row.append(a, b);
    };
    row.append(show);
    c.append(ans, row);
    app.append(c);
  };
  draw();
}

function planMocks(p) {
  app.append(el("h1", { className: "title" }, "Mocks"),
    el("p", { className: "sub" }, "Enter correct / total per topic. Mock 1's three weakest topics become your focus from D-19 to D-10. Scores also go to the tracker's Mock exam row."));
  [["m1", "Mock 1", 21], ["m2", "Mock 2", 9]].forEach(([m, name, d]) => {
    const c = el("div", { className: "card" });
    const sc = p.mocks[m] || {};
    const totEl = el("p", { className: "pl-big" });
    c.append(el("p", { className: "kicker" }, `${name} · D-${d} · ${planDate(d).toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" })}`), totEl);
    const grid = el("div", { className: "pl-mock" });
    const upd = () => {
      const q = loadPlan(), s = q.mocks[m] || {};
      const tot = Object.values(s).reduce((a, [r, t]) => [a[0] + r, a[1] + t], [0, 0]);
      totEl.textContent = tot[1] ? `${Math.round(tot[0] / tot[1] * 100)}% · ${tot[0]}/${tot[1]}` : "No scores yet";
      ptMock(dkey(planDate(d)), tot[0], tot[1]);
    };
    TOPICS.forEach(t => {
      const [r, tt] = sc[t] || ["", ""];
      const fr = el("input", { className: "field small", type: "number", inputMode: "numeric", min: 0, value: r === "" ? "" : r, placeholder: "right" });
      const ft = el("input", { className: "field small", type: "number", inputMode: "numeric", min: 0, value: tt === "" ? "" : tt, placeholder: "of" });
      const pct = el("span", { className: "pl-pct" });
      const show = () => {
        const a = parseInt(fr.value, 10), b = parseInt(ft.value, 10);
        if (b > 0 && a >= 0) { const v = Math.round(Math.min(a, b) / b * 100); pct.textContent = v + "%"; pct.style.background = `var(${ptScoreVar(v)})`; }
        else { pct.textContent = "–"; pct.style.background = ""; }
      };
      const save = () => {
        const q = loadPlan(), a = parseInt(fr.value, 10), b = parseInt(ft.value, 10);
        q.mocks[m] = q.mocks[m] || {};
        if (b > 0 && a >= 0) q.mocks[m][t] = [Math.min(a, b), b]; else delete q.mocks[m][t];
        savePlan(q); show(); upd();
      };
      fr.oninput = ft.oninput = save;
      show();
      grid.append(el("span", { className: "pl-mt" }, PLAN_SHORT[t]), fr, ft, pct);
    });
    c.append(grid);
    app.append(c);
    upd();
  });
  const w = planWeak(p), m2 = p.mocks.m2 || {};
  if (w.length) {
    const c = el("div", { className: "card" });
    c.append(el("p", { className: "kicker" }, "Weakest in Mock 1"), el("p", { style: "margin:0" }, w.map(t => PLAN_SHORT[t]).join(" · ")));
    const imp = w.filter(t => m2[t] && p.mocks.m1[t]).map(t => `${PLAN_SHORT[t]} ${Math.round(p.mocks.m1[t][0] / p.mocks.m1[t][1] * 100)}% → ${Math.round(m2[t][0] / m2[t][1] * 100)}%`);
    if (imp.length) c.append(el("p", { className: "sub", style: "margin:8px 0 0" }, imp.join(" · ")));
    app.append(c);
  }
}

function planSetup(p, plan) {
  app.append(el("h1", { className: "title" }, "Setup"), el("p", { className: "sub" }, "Change these any time; the quotas adjust straight away."));
  const c = el("div", { className: "card" });
  c.append(el("p", { className: "kicker" }, "Question totals"));
  const num = (label, get, set, hint) => {
    const row = el("div", { className: "pl-set" });
    const f = el("input", { className: "field", type: "number", inputMode: "numeric", min: 0, value: get() ?? "", placeholder: "count" });
    f.oninput = () => { const q = loadPlan(), v = parseInt(f.value, 10); set(q, v > 0 ? v : null); savePlan(q); };
    const lab = el("div"); lab.append(el("span", {}, label), el("small", {}, hint));
    row.append(lab, f);
    c.append(row);
  };
  num("CFAI website questions left", () => p.totals.cfai, (q, v) => (q.totals.cfai = v), "Finished by D-28");
  num("Test bank questions (all)", () => p.totals.tb, (q, v) => (q.totals.tb = v), "Pass 1 from D-37 to D-22");
  num("Test bank pass 2 (optional)", () => p.totals.tb2, (q, v) => (q.totals.tb2 = v), "Leave empty to use the wrong + guessed you log in pass 1");
  app.append(c);

  const o = el("div", { className: "card" });
  o.append(el("p", { className: "kicker" }, "Topic days · order"), el("p", { className: "sub" }, "One topic a day from D-46. Move a topic up or down; days already done keep their ticks."));
  const list = el("div");
  const drawOrder = () => {
    list.innerHTML = "";
    const q = loadPlan();
    q.order.forEach((t, i) => {
      const row = el("div", { className: "pl-ord" });
      const up = el("button", { className: "link-btn", disabled: i === 0 }, "↑"), dn = el("button", { className: "link-btn", disabled: i === q.order.length - 1 }, "↓");
      const mv = d => { const r = loadPlan(); [r.order[i], r.order[i + d]] = [r.order[i + d], r.order[i]]; savePlan(r); drawOrder(); };
      up.onclick = () => mv(-1); dn.onclick = () => mv(1);
      row.append(el("span", { className: "pl-d" }, dday(planDate(46 - i))), el("span", { className: "pl-t" }, t), up, dn);
      list.append(row);
    });
  };
  drawOrder();
  o.append(list);
  app.append(o);

  const f = el("div", { className: "card" });
  f.append(el("p", { className: "kicker" }, "Formula sheet names"));
  [...Array(FS).keys()].forEach(i => {
    const inp = el("input", { className: "field pl-fin", value: p.fnames[i] || "", placeholder: `Formula sheet ${i + 1}` });
    inp.oninput = () => { const q = loadPlan(); q.fnames[i] = inp.value.trim(); savePlan(q); };
    f.append(inp);
  });
  app.append(f);

  const x = el("div", { className: "row" });
  const ex = el("button", { className: "btn ghost" }, "Export plan (CSV)");
  ex.onclick = () => planExport();
  x.append(ex);
  app.append(x);
}

async function planExport() {
  const p = loadPlan(), plan = buildPlan(p);
  const esc = s => `"${String(s).replace(/"/g, '""')}"`;
  const rows = [["D-", "Date", "Phase", "Day", "Task", "Done", "Questions done", "Wrong"]];
  plan.forEach(x => x.blocks.forEach(b => rows.push([
    `D-${x.d}`, x.key, x.phase, x.title, b.title, planBlockDone(p, plan, x, b) ? "yes" : "",
    b.c ? planDayN(p, x.key, b.c) || "" : "", b.c ? planDayN(p, x.key, b.c, "w") || "" : ""
  ])));
  rows.push([]);
  rows.push(["Mistakes"], ["Date", "Topic", "Source", "Type", "What", "Rule", "Re-tested"]);
  p.errors.forEach(e => rows.push([e.d, e.topic, e.src, e.type, e.what, e.rule, e.rt || 0]));
  const name = `CFA-study-plan-${today()}.csv`;
  const file = new File(["﻿" + rows.map(r => r.map(esc).join(",")).join("\n")], name, { type: "text/csv" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: "CFA study plan" }); return; } catch (e) { if (e.name === "AbortError") return; }
  }
  const a = el("a", { href: URL.createObjectURL(file), download: name });
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
