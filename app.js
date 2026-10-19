(function () {
  "use strict";
  const YEARS = window.YEARS, UNITS = window.UNITS, SCOPE = window.SCOPE || [];
  const TYPE = { mc: "Multiple choice", tf: "True or false", sr: "Short response" };
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const DAYNAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const $ = (id) => document.getElementById(id);

  // ---------- helpers ----------
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function fmt(s) {
    return esc(s)
      .replace(/(\d+)?\[(\d+)\/(\d+)\]/g, (m, w, n, d) =>
        '<span class="mixed">' + (w ? "<span>" + w + "</span>" : "") + '<span class="fr"><span>' + n + "</span><span>" + d + "</span></span></span>")
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
  }
  // ---------- CUBES word-problem strategy ----------
  // The teacher picks Circle, Underline or Box, then taps words in the question to mark them.
  // Marked words that sit next to each other join into one shape, drawn over the text.
  function tokenText(raw, g, counter) {
    return raw.replace(/\*\*/g, "").split(/(\s+)/).map((chunk) => {
      if (!chunk) return "";
      if (/^\s+$/.test(chunk)) return chunk.includes("\n") ? "<br>" : " ";
      const m = chunk.match(/^([“"'(]*)(.*?)([.,?!:;”"')]*)$/);
      if (!m[2]) return esc(chunk);
      return esc(m[1]) + "<span class='tk' data-w='" + counter.n++ + "' data-g='" + g + "'>" + fmt(m[2]) + "</span>" + esc(m[3]);
    }).join("");
  }
  const CUBE_STEPS = [
    ["c", "C", "Circle", "the numbers.", "What do I know about each number? What are the units?", "Tap the numbers and their units to circle them."],
    ["u", "U", "Underline", "the question.", "What am I being asked to solve?", "Tap the words of the question to underline them."],
    ["b", "B", "Box", "the key words.", "Am I going to add, subtract, multiply or divide?", "Tap the key words to box them."],
    ["e", "E", "Evaluate", "and draw.", "Which operation do I need? What information don't I need? Draw it if that helps."],
    ["s", "S", "Solve", "and check.", "Show your working, step by step. Does the answer make sense? How can I double-check?"]
  ];
  const OPS = [["+", "add"], ["−", "subtract"], ["×", "multiply"], ["÷", "divide"]];
  const marks = { c: new Set(), u: new Set(), b: new Set(), tool: null };
  function resetMarks() { marks.c.clear(); marks.u.clear(); marks.b.clear(); marks.tool = null; }
  function cubesHTML(q) {
    const c = q.cubes;
    let h = "<div class='cubes' data-cubes><div class='cubes-bar' role='group' aria-label='CUBES strategy'>" +
      CUBE_STEPS.map(([k, L, name]) => "<button class='cube cube-" + k + "' data-cube='" + k + "' aria-pressed='false'><b>" + L + "</b>" + name + "</button>").join("") +
      "<button class='btn cube-clear' data-clearmarks hidden>Clear marks</button></div>";
    CUBE_STEPS.forEach(([k, , name, rest, ask, how]) => {
      h += "<div class='cube-panel cube-" + k + "' data-panel='" + k + "' hidden><p class='cube-say'><b>" + name + "</b> " + rest + " <span>" + ask + "</span></p>";
      if (how) h += "<p class='cube-how'>" + how + "</p>";
      if (k === "e") {
        h += c.ops.length
          ? "<div class='ops' role='group' aria-label='Choose the operation'>" + OPS.map(([s, n]) => "<button class='op' data-op='" + s + "' aria-label='" + n + "'>" + s + "</button>").join("") + "</div><p class='feedback' data-opfb aria-live='polite'></p>"
          : "<p class='cube-note'>" + fmt(c.note || "No calculation is needed for this one.") + "</p>";
      }
      if (k === "s") h += "<ol class='ways'>" + c.solve.map((w) => "<li><b>" + fmt(w.t) + "</b><span>" + fmt(w.s) + "</span></li>").join("") + "</ol>";
      h += "</div>";
    });
    return h + "</div>";
  }
  function onCube(b) {
    const k = b.dataset.cube, box = b.closest("[data-cubes]"), tile = b.closest(".tile");
    const on = b.getAttribute("aria-pressed") !== "true";
    box.querySelectorAll("[data-cube]").forEach((x) => x.setAttribute("aria-pressed", on && x === b));
    box.querySelectorAll("[data-panel]").forEach((p) => (p.hidden = !(on && p.dataset.panel === k)));
    marks.tool = on && "cub".includes(k) ? k : null;
    ["c", "u", "b"].forEach((t) => tile.classList.toggle("tool-" + t, marks.tool === t));
  }
  function onToken(tk) {
    const set = marks[marks.tool], i = +tk.dataset.w;
    set.has(i) ? set.delete(i) : set.add(i);
    drawMarks();
  }
  function drawMarks() {
    const q = $("spotBody").querySelector(".q");
    if (!q) return;
    let layer = q.querySelector(".marks");
    if (!layer) { layer = document.createElement("div"); layer.className = "marks"; q.appendChild(layer); }
    layer.innerHTML = "";
    const base = q.getBoundingClientRect(), tok = (i) => q.querySelector(".tk[data-w='" + i + "']");
    let any = false;
    ["u", "b", "c"].forEach((t) => {
      const ids = [...marks[t]].sort((a, b) => a - b);
      const runs = [];
      ids.forEach((i) => { const r = runs[runs.length - 1]; if (r && i === r[1] + 1 && tok(i).dataset.g === tok(r[1]).dataset.g) r[1] = i; else runs.push([i, i]); });
      runs.forEach(([a, z]) => {
        const range = document.createRange();
        range.setStartBefore(tok(a)); range.setEndAfter(tok(z));
        const lines = [];
        [...range.getClientRects()].filter((r) => r.width > 0.5 && r.height > 0.5).forEach((r) => {
          const ln = lines.find((l) => Math.abs((l.top + l.bottom) / 2 - (r.top + r.bottom) / 2) < r.height / 2);
          if (ln) { ln.left = Math.min(ln.left, r.left); ln.right = Math.max(ln.right, r.right); ln.top = Math.min(ln.top, r.top); ln.bottom = Math.max(ln.bottom, r.bottom); }
          else lines.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
        });
        lines.forEach((l) => {
          const d = document.createElement("span"), px = t === "c" ? 7 : 4, py = t === "c" ? 3 : 2;
          d.className = "mk mk-" + t;
          d.style.left = l.left - base.left - px + "px"; d.style.width = l.right - l.left + 2 * px + "px";
          if (t === "u") { d.style.top = l.bottom - base.top + 1 + "px"; }
          else { d.style.top = l.top - base.top - py + "px"; d.style.height = l.bottom - l.top + 2 * py + "px"; }
          layer.appendChild(d);
        });
        any = true;
      });
    });
    const clr = $("spotBody").querySelector("[data-clearmarks]");
    if (clr) clr.hidden = !any;
  }
  function onOp(b) {
    const c = items()[state.spot].q.cubes, op = b.dataset.op, box = b.closest("[data-panel]"), fb = box.querySelector("[data-opfb]");
    const good = c.ops.includes(op) || (c.also || []).includes(op);
    b.classList.remove("ok", "no"); b.classList.add(good ? "ok" : "no");
    const picked = [...box.querySelectorAll(".op.ok")].map((x) => x.dataset.op);
    const name = (s) => OPS.find((o) => o[0] === s)[1];
    if (!good) { fb.className = "feedback no"; fb.textContent = "Not this time. Look at the boxed key words again."; return; }
    if (c.ops.every((o) => picked.includes(o))) {
      fb.className = "feedback ok";
      fb.textContent = "✓ Yes! " + (c.ops.length > 1 ? "This takes " + c.ops.length + " steps: " + c.ops.map(name).join(", then ") + "." : "We need to " + name(c.ops[0]) + ".") +
        ((c.also || []).length && !c.ops.includes(op) ? " (" + name(op) + " can work too.)" : "");
    } else { fb.className = "feedback ok"; fb.textContent = c.ops.includes(op) ? "Good! Is there another step?" : name(op) + " can work, but there's a more direct way. Try another."; }
  }

  function parseNum(raw) {
    let s = String(raw).toLowerCase().replace(/[$,%]/g, "").trim();
    s = s.replace(/\s*[a-zµ²³]+\.?$/i, "").trim();
    if (/^\d{1,3}( \d{3})+(\.\d+)?$/.test(s)) s = s.replace(/ /g, "");
    let m;
    if ((m = s.match(/^(\d+)\s+(\d+)\s*\/\s*(\d+)$/))) return +m[3] ? +m[1] + m[2] / m[3] : null;
    if ((m = s.match(/^(\d+)\s*\/\s*(\d+)$/))) return +m[2] ? m[1] / m[2] : null;
    if (/^\d*\.?\d+$/.test(s)) return parseFloat(s);
    return null;
  }
  const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9/]/g, "").replace(/^0+(?=\d)/, "");
  const close = (a, b) => Math.abs(a - b) < 1e-6 * Math.max(1, Math.abs(b));
  const fmtN = (n) => (Math.round(n * 1000) / 1000).toLocaleString("en-AU").replace(/,/g, " ");
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const store = {
    get() { try { return JSON.parse(localStorage.getItem("dailydash") || "{}"); } catch (e) { return {}; } },
    set(v) { try { localStorage.setItem("dailydash", JSON.stringify(v)); } catch (e) {} }
  };
  const ICON = {
    drag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/></svg>',
    type: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h1M11 10h1M15 10h1M7 14h10"/></svg>',
    tap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11V5a2 2 0 1 1 4 0v6l4 1a2 2 0 0 1 1.5 2.3L17.6 20H9.5L6 15.5a1.6 1.6 0 0 1 2.4-2.1L9 14"/></svg>',
    draw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l4-1L19 8l-3-3L5 16z"/></svg>',
    talk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16v10H9l-5 4z"/></svg>'
  };

  // ---------- state ----------
  const saved = store.get();
  const state = { year: saved.year || null, term: saved.term || 4, ls: saved.ls || 1, day: saved.day || 0, mixed: null, spot: -1 };
  if (!YEARS.some((y) => y.year === state.year)) state.year = (YEARS.find((y) => unitsFor(y).length) || YEARS[0]).year;
  if (saved.notes) document.body.classList.add("notes");

  function yearCfg() { return YEARS.find((y) => y.year === state.year); }
  function unitsFor(y) { return UNITS.filter((u) => u.stage === y.stage && u.ab === y.ab); }
  function currentUnit() { const y = yearCfg(); return UNITS.find((u) => u.stage === y.stage && u.ab === y.ab && u.term === state.term && u.ls === state.ls); }
  function scopeFor(term, ls) { const y = yearCfg(); return SCOPE.find((s) => s.stage === y.stage && s.ab === y.ab && s.term === term && s.ls === ls); }
  function weekOf(ls, d) { return (ls - 1) * 2 + 1 + Math.floor(d / 4); }
  function items() {
    if (state.mixed) return state.mixed;
    const u = currentUnit();
    return u ? u.reviews[state.day].map((q, i) => ({ q, unit: u, key: qKey(u, state.day, i) })) : [];
  }
  const qKey = (u, d, i) => "S" + u.stage + u.ab + "-" + u.unit + "-" + d + "-" + i;

  // Completed questions are remembered for today only, so tomorrow's board starts fresh.
  const today = new Date().toDateString();
  const done = new Set((() => { try { const v = JSON.parse(localStorage.getItem("dailydash-done") || "{}"); return v.date === today ? v.keys : []; } catch (e) { return []; } })());
  const celebrate = new Set();
  function saveDone() { try { localStorage.setItem("dailydash-done", JSON.stringify({ date: today, keys: [...done] })); } catch (e) {} }
  function markDone() {
    const it = items()[state.spot];
    if (!it || done.has(it.key)) return;
    done.add(it.key); celebrate.add(it.key); saveDone();
  }
  function save() { store.set({ year: state.year, term: state.term, ls: state.ls, day: state.day, notes: document.body.classList.contains("notes") }); }

  // ---------- static visuals ----------
  const VIS = {
    bars(v) { let h = ""; for (let i = 0; i < v[0]; i++) h += "<i class='" + (i < v[1] ? "f" : "") + "'></i>"; return "<span class='bars' role='img' aria-label='" + v[1] + " of " + v[0] + " parts shaded'>" + h + "</span>"; },
    digital(v) { return "<div class='digital' role='img' aria-label='Digital clock showing " + v.time + "'>" + v.time + "</div>"; },
    barline(v) {
      const x0 = 30, x1 = 490, X = (n) => x0 + (x1 - x0) * n / v.max;
      let s = "<svg class='figure' viewBox='0 0 520 96' role='img' aria-label='Bar on a number line from 0 to " + v.max + "'>";
      s += "<rect class='fillbar' x='" + x0 + "' y='30' width='" + (X(v.value) - x0) + "' height='22' rx='2'/>";
      if (v.den > 1) for (let i = 1; i < v.value * v.den; i++) s += "<line x1='" + X(i / v.den) + "' x2='" + X(i / v.den) + "' y1='30' y2='52' stroke='#2A1A08' stroke-width='2' stroke-dasharray='4 3'/>";
      s += "<line class='ln' x1='" + (x0 - 10) + "' x2='" + (x1 + 12) + "' y1='56' y2='56'/>";
      const step = v.den > 1 ? 1 / v.den : 1;
      for (let t = 0; t <= v.max + 1e-9; t += step) {
        const major = Math.abs(t - Math.round(t)) < 1e-9;
        s += "<line class='ln' x1='" + X(t) + "' x2='" + X(t) + "' y1='" + (major ? 46 : 50) + "' y2='" + (major ? 66 : 62) + "'/>";
        if (major) s += "<text x='" + X(t) + "' y='88' text-anchor='middle' font-size='18'>" + Math.round(t) + "</text>";
      }
      return s + "</svg>";
    },
    rect(v) {
      const W = 240, H = Math.round(W * v.h / v.w);
      return "<svg class='figure' style='max-width:340px' viewBox='0 0 320 " + (H + 50) + "' role='img' aria-label='Rectangle " + v.w + " by " + v.h + " " + v.unit + "'>" +
        "<rect class='rectf' x='20' y='34' width='" + W + "' height='" + H + "' rx='2'/>" +
        "<text x='" + (20 + W / 2) + "' y='24' text-anchor='middle' font-size='18'>" + v.w + " " + v.unit + "</text>" +
        "<text x='" + (W + 30) + "' y='" + (34 + H / 2 + 6) + "' font-size='18'>" + v.h + " " + v.unit + "</text></svg>";
    },
    tvGuide() {
      const rows = [
        ["3HD", [["5:28pm", "Vet to the rescue!"], ["6:33pm", "Antiques world"], ["7:31pm", "Journey to space"], ["8:30pm", "Crime scene"], ["10:59pm", "Forgotten"], ["12:15am", "League cup final"]]],
        ["Channel 4", [["1750", "Robot wars extreme"], ["1833", "Cartoon frenzy!"], ["1903", "World news"], ["1931", "Beyond the news"], ["2000", "Airport emergency"], ["2030", "Movie: Space Wars"], ["2328", "Extreme sports update"], ["2345", "International darts"]]]
      ];
      return "<div class='guide'>" + rows.map(([ch, shows]) => "<table class='tv'><tr><th colspan='2'>" + ch + "</th></tr>" +
        shows.map(([t, n]) => "<tr><td>" + t + "</td><td>" + esc(n) + "</td></tr>").join("") + "</table>").join("") + "</div>";
    }
  };

  // ---------- interactive parts ----------
  // Each kind: html(part, preview) → markup; init(el, part) after insert; check(el, part) → {ok: true|false|null, msg}; reveal(el, part) optional.
  const W = {
    input: {
      html(p, pv) {
        return "<div class='fields'>" + p.fields.map((f, i) =>
          "<label class='field'>" + (f.label ? "<span>" + fmt(f.label) + "</span>" : "") + (f.prefix ? "<span>" + esc(f.prefix) + "</span>" : "") +
          "<input class='inp" + (p.fields.length === 1 ? " wide" : "") + "' data-f='" + i + "' autocomplete='off' spellcheck='false' inputmode='text'" +
          (f.placeholder ? " placeholder='" + esc(f.placeholder) + "'" : "") + (pv ? " disabled" : "") + ">" +
          (f.suffix ? "<span class='unit'>" + esc(f.suffix) + "</span>" : "") + "</label>").join("") + "</div>";
      },
      check(el, p) {
        let all = true, filled = true;
        p.fields.forEach((f, i) => {
          const inp = el.querySelector("[data-f='" + i + "']"), v = inp.value.trim();
          inp.classList.remove("ok", "no");
          if (!v) { filled = false; return; }
          let ok;
          if (f.accept) ok = f.accept.map(norm).includes(norm(v));
          else { const n = parseNum(v); ok = n != null && (f.value != null ? close(n, f.value) : n >= f.min && n <= f.max); }
          inp.classList.add(ok ? "ok" : "no"); if (!ok) all = false;
        });
        if (!filled) return { ok: null, msg: "Fill in every box first." };
        return { ok: all };
      }
    },
    fractions: {
      html(p, pv) {
        let h = "<div class='fields'>";
        for (let i = 0; i < p.count; i++) h += "<input class='inp' data-f='" + i + "' placeholder='?/?' autocomplete='off' aria-label='Fraction " + (i + 1) + "'" + (pv ? " disabled" : "") + ">";
        return h + "</div>";
      },
      check(el, p) {
        const seen = new Set(), ex = (p.exclude || []).map(norm);
        let n = 0, all = true, dup = false, excl = false;
        el.querySelectorAll(".inp").forEach((inp) => {
          inp.classList.remove("ok", "no");
          const v = inp.value.trim(); if (!v) return; n++;
          const key = norm(v), val = parseNum(v);
          let ok = /\//.test(v) && val != null && close(val, p.value);
          if (ok && ex.includes(key)) { ok = false; excl = true; }
          if (ok && seen.has(key)) { ok = false; dup = true; }
          seen.add(key);
          inp.classList.add(ok ? "ok" : "no"); if (!ok) all = false;
        });
        const need = p.min || p.count;
        if (n < need) return { ok: null, msg: "Write at least " + need + " fractions, like 3/6." };
        return { ok: all, msg: all ? null : excl ? "That one was given in the question. Find a different one." : dup ? "Each fraction needs to be different." : null };
      }
    },
    sum6: {
      html(p, pv) {
        const box = (i) => "<input class='inp' data-f='" + i + "' maxlength='6' inputmode='numeric' placeholder='6 digits' autocomplete='off' aria-label='6-digit number " + (i + 1) + "'" + (pv ? " disabled" : "") + ">";
        return "<div class='sum6'><div class='row'><span></span>" + box(0) + "</div><div class='row'><span>+</span>" + box(1) + "</div>" + (pv ? "" : "<div class='total' data-total>?</div>") + "</div>";
      },
      init(el) {
        const upd = () => {
          const a = el.querySelectorAll(".inp"), x = a[0].value, y = a[1].value;
          el.querySelector("[data-total]").textContent = /^\d+$/.test(x) && /^\d+$/.test(y) ? fmtN(+x + +y) : "?";
        };
        el.querySelectorAll(".inp").forEach((i) => i.addEventListener("input", () => { i.value = i.value.replace(/\D/g, ""); upd(); }));
      },
      check(el, p) {
        const a = [...el.querySelectorAll(".inp")];
        let six = true;
        a.forEach((i) => { i.classList.remove("ok", "no"); if (!/^[1-9]\d{5}$/.test(i.value)) { six = false; if (i.value) i.classList.add("no"); } });
        if (!six) return { ok: a.some((i) => !i.value) ? null : false, msg: "Each number needs exactly 6 digits." };
        const sum = +a[0].value + +a[1].value, off = Math.abs(sum - p.target), ok = off <= p.within;
        a.forEach((i) => i.classList.add(ok ? "ok" : "no"));
        return { ok, msg: (ok ? "Total " + fmtN(sum) + ". Only " + fmtN(off) + " away from 1 million!" : "Total " + fmtN(sum) + " is " + fmtN(off) + " away from 1 million. Can you get closer?") };
      }
    },
    pair: {
      html(p, pv) {
        return "<div class='fields'>" + p.labels.map((l, i) => "<label class='field'><span>" + esc(l) + "</span><input class='inp' data-f='" + i + "' autocomplete='off'" + (pv ? " disabled" : "") + "><span class='unit'>" + esc(p.unit) + "</span></label>").join("") + "</div>";
      },
      check(el, p) {
        const a = [...el.querySelectorAll(".inp")], L = parseNum(a[0].value), Wd = parseNum(a[1].value);
        a.forEach((i) => i.classList.remove("ok", "no"));
        if (L == null || Wd == null) return { ok: null, msg: "Enter a length and a width." };
        const val = p.rule === "area" ? L * Wd : 2 * (L + Wd);
        const excluded = (p.exclude || []).some(([x, y]) => (close(L, x) && close(Wd, y)) || (close(L, y) && close(Wd, x)));
        const ok = L > 0 && Wd > 0 && close(val, p.target) && !excluded;
        a.forEach((i) => i.classList.add(ok ? "ok" : "no"));
        const calc = p.rule === "area" ? "Area = " + fmtN(L) + " × " + fmtN(Wd) + " = " + fmtN(val) + " " + p.unit + "²" : "Perimeter = 2 × (" + fmtN(L) + " + " + fmtN(Wd) + ") = " + fmtN(val) + " " + p.unit;
        return { ok, msg: calc + (excluded ? ". That's the same rectangle — try different side lengths." : ok ? ". It works!" : ". It needs to be " + p.target + (p.rule === "area" ? " " + p.unit + "²." : " " + p.unit + ".")) };
      }
    },
    choose: {
      html(p, pv) {
        return p.rows.map((r, ri) => "<div class='choice-row'><span>" + fmt(r.t) + "</span><span class='pills' role='group'>" +
          r.options.map((o, oi) => "<button class='pill' data-r='" + ri + "' data-o='" + oi + "' aria-pressed='false'" + (pv ? " disabled" : "") + ">" + fmt(o) + "</button>").join("") + "</span></div>").join("");
      },
      init(el) {
        el.addEventListener("click", (e) => {
          const b = e.target.closest(".pill"); if (!b) return;
          el.querySelectorAll(".pill[data-r='" + b.dataset.r + "']").forEach((x) => { x.setAttribute("aria-pressed", x === b); x.classList.remove("ok", "no"); });
        });
      },
      check(el, p) {
        let all = true, done = true;
        p.rows.forEach((r, ri) => {
          const b = el.querySelector(".pill[data-r='" + ri + "'][aria-pressed='true']");
          if (!b) { done = false; return; }
          const ok = [].concat(r.a).includes(+b.dataset.o);
          b.classList.add(ok ? "ok" : "no"); if (!ok) all = false;
        });
        return done ? { ok: all } : { ok: null, msg: "Choose an answer for every row." };
      }
    },
    select: {
      html(p, pv) {
        return (p.hint ? "<p class='ph'>" + esc(p.hint) + "</p>" : "") + "<span class='pills'>" +
          p.items.map((it, i) => "<button class='pill' data-i='" + i + "' aria-pressed='false'" + (pv ? " disabled" : "") + ">" + fmt(it[0]) + "</button>").join("") + "</span>";
      },
      init(el) { el.addEventListener("click", (e) => { const b = e.target.closest(".pill"); if (!b) return; b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"); el.querySelectorAll(".pill").forEach((x) => x.classList.remove("ok", "no")); }); },
      check(el, p) {
        const on = [...el.querySelectorAll(".pill[aria-pressed='true']")];
        if (!on.length) return { ok: null, msg: "Tap at least one." };
        let all = true;
        el.querySelectorAll(".pill").forEach((b) => {
          const want = p.items[+b.dataset.i][1], got = b.getAttribute("aria-pressed") === "true";
          if (got) b.classList.add(want ? "ok" : "no");
          if (want !== got) all = false;
        });
        return { ok: all, msg: all ? null : "Not quite — check which ones you chose and which you left out." };
      }
    },
    order: {
      html(p, pv) {
        return "<div class='slots' data-slots></div><div class='tray2' data-tray>" +
          p.items.map((t, i) => "<button class='tok' data-i='" + i + "'" + (pv ? " disabled" : "") + ">" + esc(t) + "</button>").join("") + "</div>";
      },
      init(el) {
        const slots = el.querySelector("[data-slots]"), tray = el.querySelector("[data-tray]");
        const num = () => slots.querySelectorAll(".tok").forEach((t, i) => { t.querySelector(".n") ? (t.querySelector(".n").textContent = i + 1) : t.insertAdjacentHTML("afterbegin", "<span class='n'>" + (i + 1) + "</span>"); });
        el.addEventListener("click", (e) => {
          const t = e.target.closest(".tok"); if (!t) return;
          el.querySelectorAll(".tok").forEach((x) => x.classList.remove("ok", "no"));
          if (t.parentNode === tray) slots.appendChild(t);
          else { const n = t.querySelector(".n"); if (n) n.remove(); tray.appendChild(t); }
          num();
        });
      },
      check(el, p) {
        const seq = [...el.querySelectorAll("[data-slots] .tok")];
        if (seq.length < p.items.length) return { ok: null, msg: "Tap every item, in order." };
        let all = true;
        seq.forEach((t, i) => { const ok = +t.dataset.i === p.answer[i]; t.classList.add(ok ? "ok" : "no"); if (!ok) all = false; });
        return { ok: all };
      }
    },
    numberline: {
      html(p, pv) {
        const chips = p.items.map((it, i) => "<span class='chipd' data-i='" + i + "' role='button' aria-label='" + esc(it[0].replace(/\[(\d+)\/(\d+)\]/g, "$1 over $2")) + "'>" + fmt(it[0]) + "</span>").join("");
        if (pv) return "<div class='nl-tray' style='border-style:solid'>" + chips + "</div>";
        let tr = "<div class='nl-axis'></div>";
        const span = p.max - p.min;
        if (p.ticks) for (let i = 0; i <= p.ticks * span; i++) { const v = p.min + i / p.ticks; tr += "<i class='nl-tick" + (Math.abs(v - Math.round(v)) < 1e-9 ? " major" : "") + "' style='left:" + ((v - p.min) / span * 100) + "%'></i>"; }
        for (let v = Math.ceil(p.min); v <= p.max; v++) tr += "<i class='nl-tick major' style='left:" + ((v - p.min) / span * 100) + "%'></i><span class='nl-lab' style='left:" + ((v - p.min) / span * 100) + "%'>" + v + "</span>";
        return "<div class='nl'><div class='nl-tray' data-tray>" + chips + "</div><div class='nl-track' data-track>" + tr + "</div></div>";
      },
      init(el, p) {
        const tray = el.querySelector("[data-tray]"), track = el.querySelector("[data-track]");
        el._layout = () => layoutChips(track);
        el.querySelectorAll(".chipd").forEach((chip) => dragChip(chip, tray, track, p));
      },
      check(el, p) {
        const chips = [...el.querySelectorAll(".chipd")];
        if (chips.some((c) => !c.classList.contains("placed"))) return { ok: null, msg: "Drag every card onto the number line." };
        const tol = p.tol || (p.max - p.min) * 0.06;
        let all = true;
        chips.forEach((c) => {
          const t = p.items[+c.dataset.i][1], v = +c.dataset.v;
          let ok = Math.abs(v - t) <= tol;
          chips.forEach((o) => { if (o === c) return; const t2 = p.items[+o.dataset.i][1], v2 = +o.dataset.v; if (Math.abs(t - t2) > 1e-9 && Math.sign(v - v2) !== Math.sign(t - t2)) ok = false; });
          c.classList.remove("ok", "no"); c.classList.add(ok ? "ok" : "no"); if (!ok) all = false;
        });
        return { ok: all, msg: all ? null : "Look again at the red cards — are they in the right order and in about the right place?" };
      },
      reveal(el, p) {
        const track = el.querySelector("[data-track]");
        el.querySelectorAll(".chipd").forEach((c) => { const t = p.items[+c.dataset.i][1]; placeChip(c, track, (t - p.min) / (p.max - p.min), p); c.classList.remove("no"); c.classList.add("ok"); });
        layoutChips(track);
      }
    },
    marker: {
      html(p, pv) {
        if (pv) return "";
        const span = p.max - p.min;
        let tr = "<div class='nl-axis'></div>";
        if (p.minor) for (let i = 0; i <= p.minor * span; i++) tr += "<i class='nl-tick minor' style='left:" + (i / (p.minor * span) * 100) + "%'></i>";
        for (let i = 0; i <= p.ticks * span; i++) tr += "<i class='nl-tick' style='left:" + (i / (p.ticks * span) * 100) + "%'></i>";
        for (let v = Math.ceil(p.min); v <= p.max; v++) tr += "<i class='nl-tick major' style='left:" + ((v - p.min) / span * 100) + "%'></i><span class='nl-lab' style='left:" + ((v - p.min) / span * 100) + "%'>" + v + "</span>";
        tr += "<span class='pin' data-pin style='left:4%'><b>" + esc(p.label) + "</b><i></i></span>";
        return "<div class='nl'><div class='nl-track' data-track style='height:120px'>" + tr + "</div></div>";
      },
      init(el, p) {
        const track = el.querySelector("[data-track]"), pin = el.querySelector("[data-pin]");
        pin.addEventListener("pointerdown", (e) => {
          e.preventDefault(); pin.setPointerCapture(e.pointerId); pin.classList.remove("ok", "no");
          const move = (ev) => { const r = track.getBoundingClientRect(); const f = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width)); pin.style.left = f * 100 + "%"; pin.dataset.v = p.min + f * (p.max - p.min); };
          move(e);
          const up = () => { pin.removeEventListener("pointermove", move); pin.removeEventListener("pointerup", up); };
          pin.addEventListener("pointermove", move); pin.addEventListener("pointerup", up);
        });
      },
      check(el, p) {
        const pin = el.querySelector("[data-pin]");
        if (pin.dataset.v == null) return { ok: null, msg: "Drag the marker to where it belongs." };
        const ok = Math.abs(+pin.dataset.v - p.target) <= p.tol;
        pin.classList.remove("ok", "no"); pin.classList.add(ok ? "ok" : "no");
        return { ok, msg: ok ? null : "Not quite. Count the tenths and hundredths again." };
      },
      reveal(el, p) { const pin = el.querySelector("[data-pin]"); pin.style.left = ((p.target - p.min) / (p.max - p.min)) * 100 + "%"; pin.dataset.v = p.target; pin.classList.add("ok"); }
    },
    balance: {
      html(p, pv) {
        const parcels = "<div class='parcels'>" + p.items.map((it, i) => "<button class='parcel' data-i='" + i + "' data-side=''" + (pv ? " disabled" : "") + ">" + esc(it[0]) + "<small>" + it[1] + " " + p.unit + "</small></button>").join("") + "</div>";
        if (pv) return parcels;
        return "<div class='scale'><p class='ph'>Tap a parcel to put it on the left pan, tap again for the right pan, and again to take it off.</p>" +
          "<div class='beam-wrap'><div class='post'></div><div class='beam' data-beam><div class='pan l' data-pan='L'></div><div class='pan r' data-pan='R'></div></div></div>" +
          "<div class='totals'><span data-tot='L'>0 " + p.unit + "</span><span data-tot='R'>0 " + p.unit + "</span></div>" + parcels + "</div>";
      },
      init(el, p) {
        const upd = () => {
          const sum = { L: 0, R: 0 }, names = { L: [], R: [] };
          el.querySelectorAll(".parcel").forEach((b) => { const s = b.dataset.side; if (s) { sum[s] += p.items[+b.dataset.i][1]; names[s].push(p.items[+b.dataset.i][0].replace("Parcel ", "")); } });
          ["L", "R"].forEach((s) => { el.querySelector("[data-pan='" + s + "']").innerHTML = names[s].map((n) => "<span>" + esc(n) + "</span>").join(""); el.querySelector("[data-tot='" + s + "']").textContent = fmtN(sum[s]) + " " + p.unit; });
          const tot = sum.L + sum.R || 1, deg = Math.max(-12, Math.min(12, (sum.R - sum.L) / tot * 24));
          el.querySelector("[data-beam]").style.transform = "rotate(" + deg + "deg)";
          el._sum = sum;
        };
        el.addEventListener("click", (e) => { const b = e.target.closest(".parcel"); if (!b) return; b.dataset.side = { "": "L", L: "R", R: "" }[b.dataset.side]; upd(); });
        upd();
      },
      check(el) {
        const s = el._sum;
        if (!s || !s.L || !s.R) return { ok: null, msg: "Put parcels on both pans." };
        const ok = close(s.L, s.R);
        return { ok, msg: ok ? "Both pans: " + fmtN(s.L) + " " + "kg. Balanced!" : "Left " + fmtN(s.L) + " kg, right " + fmtN(s.R) + " kg. Not balanced yet." };
      }
    },
    shade: {
      html(p, pv) {
        let h = "<div class='shade' role='group' aria-label='Strip of " + p.parts + " parts'>";
        for (let i = 0; i < p.parts; i++) h += "<button aria-pressed='false' aria-label='Part " + (i + 1) + "'" + (pv ? " disabled" : "") + "></button>";
        return h + "</div>" + (pv ? "" : "<p class='readout' data-read>Tap the parts to shade them.</p>");
      },
      init(el, p) {
        el.addEventListener("click", (e) => {
          const b = e.target.closest(".shade button"); if (!b) return;
          b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true");
          const n = el.querySelectorAll(".shade [aria-pressed='true']").length;
          el.querySelector("[data-read]").innerHTML = fmt("Shaded: [" + n + "/" + p.parts + "]") + (n * 2 === p.parts ? " — exactly half" : n * 2 < p.parts ? " — less than half" : " — more than half");
        });
      }
    },
    stack: {
      html(p, pv) {
        return "<div class='stackwrap'><div class='stack' data-stack><i>" + fmt(p.label) + "</i></div>" + (pv ? "" :
          "<div class='part'><div class='checkrow'><button class='btn' data-add>Add " + fmt(p.label) + "</button><button class='btn' data-rem>Remove</button></div><p class='readout' data-read></p></div>") + "</div>";
      },
      init(el, p) {
        const st = el.querySelector("[data-stack]");
        const upd = () => { const n = st.children.length; el.querySelector("[data-read]").innerHTML = n + " part" + (n > 1 ? "s" : "") + " = " + fmt("[" + n + "/6]"); };
        el.querySelector("[data-add]").onclick = () => { if (st.children.length < 12) st.insertAdjacentHTML("beforeend", "<i></i>"); upd(); };
        el.querySelector("[data-rem]").onclick = () => { if (st.children.length > 1) st.lastElementChild.remove(); upd(); };
        upd();
      },
      check(el, p) { const n = el.querySelector("[data-stack]").children.length; return { ok: n === p.target, msg: n === p.target ? "6 sixths make one whole jug!" : n + " parts is " + (n < p.target ? "not enough" : "too many") + " for a whole." }; }
    },
    sketch: {
      html(p, pv) { return pv ? "" : "<div class='sketch' data-sketch><canvas></canvas></div><div class='checkrow'><button class='btn' data-clear>Clear drawing</button></div>"; },
      init(el, p) {
        const box = el.querySelector("[data-sketch]"), cv = box.querySelector("canvas"), ctx = cv.getContext("2d");
        const ink = getComputedStyle(document.body).color, faint = getComputedStyle(document.documentElement).getPropertyValue("--line");
        const setup = () => {
          const r = box.getBoundingClientRect(), d = window.devicePixelRatio || 1;
          cv.width = r.width * d; cv.height = r.height * d; ctx.setTransform(d, 0, 0, d, 0, 0);
          if (p.grid === "triangle") { ctx.fillStyle = faint; const s = 36, h = s * 0.866; for (let y = 10, row = 0; y < r.height; y += h, row++) for (let x = (row % 2) * s / 2 + 10; x < r.width; x += s) { ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill(); } }
          ctx.strokeStyle = ink; ctx.lineWidth = 4; ctx.lineCap = "round"; ctx.lineJoin = "round";
        };
        setup();
        let drawing = false;
        const pt = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
        cv.addEventListener("pointerdown", (e) => { drawing = true; cv.setPointerCapture(e.pointerId); const [x, y] = pt(e); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + .1, y); ctx.stroke(); });
        cv.addEventListener("pointermove", (e) => { if (!drawing) return; const [x, y] = pt(e); ctx.lineTo(x, y); ctx.stroke(); });
        cv.addEventListener("pointerup", () => { drawing = false; });
        el.querySelector("[data-clear]").onclick = () => { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); setup(); };
      }
    }
  };

  // number line drag helpers
  function placeChip(chip, track, f, p) {
    f = Math.min(1, Math.max(0, f));
    chip.classList.add("placed"); chip.classList.remove("float");
    chip.style.left = f * 100 + "%"; chip.style.top = "";
    chip.dataset.v = p.min + f * (p.max - p.min);
    if (chip.parentNode !== track) track.appendChild(chip);
  }
  function layoutChips(track) {
    const chips = [...track.querySelectorAll(".chipd.placed")].sort((a, b) => a.dataset.v - b.dataset.v);
    const w = track.getBoundingClientRect().width || 1, rowsEnd = [];
    chips.forEach((c) => {
      const x = parseFloat(c.style.left) / 100 * w, cw = c.offsetWidth + 8;
      let r = rowsEnd.findIndex((end) => x - cw / 2 >= end);
      if (r < 0) { r = rowsEnd.length; rowsEnd.push(0); }
      rowsEnd[r] = x + cw / 2;
      const stem = 16 + r * 60;
      c.style.bottom = 46 + stem + "px"; c.style.setProperty("--stem", stem + "px");
    });
    track.style.height = Math.max(170, 46 + 16 + rowsEnd.length * 60 + 64) + "px";
  }
  function dragChip(chip, tray, track, p) {
    chip.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      chip.classList.remove("ok", "no", "placed");
      chip.classList.add("dragging", "float");
      chip.style.bottom = ""; chip.style.left = e.clientX + "px"; chip.style.top = e.clientY + "px";
      layoutChips(track);
      const move = (ev) => { chip.style.left = ev.clientX + "px"; chip.style.top = ev.clientY + "px"; };
      const up = (ev) => {
        window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); window.removeEventListener("pointercancel", up);
        chip.classList.remove("dragging", "float"); chip.style.top = "";
        const r = track.getBoundingClientRect();
        if (ev.type === "pointerup" && ev.clientY > r.top - 30 && ev.clientY < r.bottom + 30 && ev.clientX > r.left - 40 && ev.clientX < r.right + 40) placeChip(chip, track, (ev.clientX - r.left) / r.width, p);
        else { chip.style.left = ""; delete chip.dataset.v; tray.appendChild(chip); }
        layoutChips(track);
      };
      window.addEventListener("pointermove", move); window.addEventListener("pointerup", up); window.addEventListener("pointercancel", up);
    });
  }

  // ---------- question rendering ----------
  function hintFor(q) {
    if (q.type !== "sr") return [ICON.tap, "Tap"];
    const k = (q.interact || []).map((p) => p.kind);
    if (k.includes("numberline") || k.includes("marker")) return [ICON.drag, "Drag"];
    if (k.includes("sketch")) return [ICON.draw, "Draw"];
    if (k.some((x) => ["choose", "select", "order", "balance", "shade", "stack"].includes(x))) return [ICON.tap, "Tap"];
    if (k.length) return [ICON.type, "Type"];
    return [ICON.talk, "Discuss"];
  }
  function optHTML(o) {
    if (typeof o === "string") return "<span>" + fmt(o) + "</span>";
    if (o.bars) return VIS.bars(o.bars);
    if (o.img) return "<img src='" + o.imgSrc + "' alt='" + esc(o.alt || "") + "'>";
    return "";
  }
  function qHTML(it, i, spot) {
    const q = it.q, u = it.unit;
    const [icon, label] = hintFor(q);
    let h = "<div class='tile-head'><span class='num'>" + (i + 1) + "</span><span class='chip'>" + TYPE[q.type] + "</span>" +
      (it.from ? "<span class='hint'>" + esc(it.from) + "</span>" : "<span class='hint'>" + icon + label + "</span>") + "</div><div class='q'>";
    const counter = { n: 0 }, txt = (s, g) => (q.cubes && spot ? tokenText(s, g, counter) : fmt(s));
    h += "<p class='prompt'>" + txt(q.prompt, 0) + "</p>";
    if (q.display) h += "<div class='display'>" + fmt(q.display) + "</div>";
    if (q.list) h += "<ul class='list'>" + q.list.map((x, li) => "<li>" + txt(x, li + 1) + "</li>").join("") + "</ul>";
    if (q.visual) h += VIS[q.visual.kind](q.visual);
    if (q.img) h += "<figure class='pic'><img src='" + u.img + q.img + "' alt=''></figure>";
    if (q.type === "mc") {
      const hasImg = q.options.some((o) => typeof o !== "string");
      h += "<ol class='opts" + (hasImg ? " grid4" : "") + "'>" + q.options.map((o, k) => {
        if (o.img) o.imgSrc = u.img + o.img;
        return "<li><button class='opt' data-i='" + k + "'><span class='let'>" + "ABCD"[k] + "</span>" + optHTML(o) + "</button></li>";
      }).join("") + "</ol>";
    }
    if (q.type === "tf") h += "<ol class='opts tf'>" + ["True", "False"].map((o, k) => "<li><button class='opt' data-i='" + k + "'>" + o + "</button></li>").join("") + "</ol>";
    if (q.follow) h += "<p class='follow'>" + fmt(q.follow) + "</p>";
    if (!spot && q.interact) {
      const pv = q.interact.map((p) => W[p.kind].html(p, true)).filter(Boolean);
      if (pv.length) h += pv.map((x) => "<div class='part'>" + x + "</div>").join("");
    }
    h += "</div>";
    if (spot && q.cubes) h += cubesHTML(q);
    if (spot) h += actHTML(q);
    h += answerHTML(q);
    if (q.focus) h += "<div class='note'><span class='lbl'>Syllabus focus</span>" + esc(q.focus) + "</div>";
    return h;
  }
  function actHTML(q) {
    if (q.type !== "sr") return "<p class='feedback' data-fb aria-live='polite'></p>";
    if (!q.interact) return "<div class='act'><p class='open-note'>" + ICON.talk + "Think, then share with a partner. Reveal the answer when you're ready.</p></div>";
    const checkable = q.interact.some((p) => W[p.kind].check);
    return "<div class='act'>" + q.interact.map((p, k) => "<div class='part' data-part='" + k + "'>" + W[p.kind].html(p, false) + "</div>").join("") +
      (checkable ? "<div class='checkrow'><button class='btn primary' data-check>Check</button><button class='btn' data-reset>Start again</button><p class='feedback' data-fb aria-live='polite'></p></div>" : "") + "</div>";
  }
  function answerHTML(q) {
    let main;
    if (q.type === "mc") main = "<b>" + "ABCD"[q.answer] + "</b>" + (typeof q.options[q.answer] === "string" ? " &nbsp;" + fmt(q.options[q.answer]) : "");
    else if (q.type === "tf") main = "<b>" + (q.answer ? "True" : "False") + "</b>";
    else main = fmt(q.answer);
    return "<div class='ans'><span class='lbl'>Answer</span><p>" + main + "</p>" + (q.explain ? "<p>" + fmt(q.explain) + "</p>" : "") + "</div>";
  }

  // ---------- navigation ----------
  function renderNav() {
    $("years").innerHTML = YEARS.map((y) => "<button data-year='" + y.year + "' aria-pressed='" + (y.year === state.year) + "'>Year " + y.year + "</button>").join("");
    const us = unitsFor(yearCfg());
    $("terms").innerHTML = [1, 2, 3, 4].map((t) => "<button data-term='" + t + "' class='" + (us.some((u) => u.term === t) ? "has" : "") + "' aria-pressed='" + (t === state.term) + "'>Term " + t + "</button>").join("");
    $("seqs").innerHTML = [1, 2, 3, 4, 5].map((l) => "<button data-ls='" + l + "' class='" + (us.some((u) => u.term === state.term && u.ls === l) ? "has" : "") + "' aria-pressed='" + (l === state.ls) + "'>" + (l * 2 - 1) + "–" + l * 2 + "</button>").join("");
    const u = currentUnit();
    if (!u) { $("days").innerHTML = ""; return; }
    let h = "";
    for (let w = 0; w * 4 < u.reviews.length; w++) {
      h += "<div class='wk'><span>Week " + weekOf(u.ls, w * 4) + "</span><div>";
      for (let d = w * 4; d < Math.min(u.reviews.length, w * 4 + 4); d++) h += "<button class='day' data-day='" + d + "' aria-pressed='" + (!state.mixed && d === state.day) + "' aria-label='Week " + weekOf(u.ls, d) + " " + DAYNAMES[d % 4] + "'>" + DAYS[d % 4] + "</button>";
      h += "</div></div>";
    }
    h += "<div class='wk'><span>Revision</span><div><button class='day mix' id='bMix' aria-pressed='" + !!state.mixed + "' title='Random questions from every review so far'>" + (state.mixed ? "Shuffle again" : "Mix it up") + "</button>" +
      (items().some((it) => done.has(it.key)) ? "<button class='day mix' id='bClear' title='Untick the questions on this board'>Clear ticks</button>" : "") + "</div></div>";
    $("days").innerHTML = h;
  }
  function renderBoard() {
    const y = yearCfg(), u = currentUnit();
    const stageLbl = "Year " + y.year + " · Stage " + y.stage + " Year " + y.ab;
    if (!u) {
      const sc = scopeFor(state.term, state.ls);
      $("eyebrow").textContent = stageLbl;
      $("title").textContent = "Term " + state.term + " · Weeks " + (state.ls * 2 - 1) + "–" + state.ls * 2;
      $("board").innerHTML = "<div class='empty'><h3>No warm-ups here yet</h3>" +
        (sc ? "<p>The scope and sequence has <b>Stage " + sc.stage + " – Unit " + sc.unit + "</b> in this fortnight. Add its Review of learning to fill these days.</p><ul>" + sc.focus.slice(0, 5).map((f) => "<li>" + esc(f) + "</li>").join("") + "</ul>"
          : "<p>There's no unit in the scope and sequence for this fortnight.</p>") + "</div>";
      $("source").textContent = "";
      return;
    }
    $("source").textContent = u.source;
    if (state.mixed) {
      $("eyebrow").textContent = stageLbl + " · Mixed review";
      $("title").textContent = "Mixed review";
    } else {
      $("eyebrow").textContent = stageLbl + " · Unit " + u.unit + " · Review " + (state.day + 1);
      $("title").textContent = "Week " + weekOf(u.ls, state.day) + " · " + DAYNAMES[state.day % 4];
    }
    $("board").innerHTML = items().map((it, i) => {
      const isDone = done.has(it.key);
      return "<article class='tile t-" + it.q.type + (isDone ? " done" : "") + "' tabindex='0' data-i='" + i + "' aria-label='Question " + (i + 1) + (isDone ? ", done" : "") + ". Open it.'>" +
        qHTML(it, i, false) + (isDone ? "<span class='done-badge' aria-hidden='true'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12.5l4.5 4.5L19 7.5'/></svg>Done</span>" : "") + "</article>";
    }).join("");
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $("board").querySelectorAll(".tile").forEach((t) => {
      const key = items()[+t.dataset.i].key;
      if (celebrate.has(key)) { celebrate.delete(key); if (!reduce) confetti(t); }
    });
  }

  function confetti(tile) {
    const layer = document.createElement("span");
    layer.className = "confetti";
    const colours = ["#2449D8", "#1B8A55", "#FFD23F", "#F2994A", "#E5484D", "#8A3CC4", "#4FC6CF"];
    let h = "";
    for (let i = 0; i < 46; i++) {
      const a = Math.random() * Math.PI * 2, dist = 90 + Math.random() * 170;
      h += "<i style='--x:" + Math.round(Math.cos(a) * dist) + "px;--y:" + Math.round(Math.sin(a) * dist * 0.7 - 40) + "px;--r:" + Math.round(Math.random() * 720 - 360) + "deg;" +
        "--d:" + Math.round(Math.random() * 140) + "ms;background:" + colours[i % colours.length] + ";" + (i % 3 ? "" : "border-radius:50%;") + "'></i>";
    }
    layer.innerHTML = h;
    tile.appendChild(layer);
    tile.classList.add("pop");
    setTimeout(() => { layer.remove(); tile.classList.remove("pop"); }, 1900);
  }
  function render() { renderNav(); renderBoard(); save(); }

  function buildMix() {
    const y = yearCfg(), pool = { choice: [], sr: [] };
    unitsFor(y).forEach((u) => {
      if (u.term > state.term || (u.term === state.term && u.ls > state.ls)) return;
      u.reviews.forEach((rev, d) => {
        if (u.term === state.term && u.ls === state.ls && d > state.day) return;
        rev.forEach((q, i) => (q.type === "sr" ? pool.sr : pool.choice).push({ q, unit: u, key: qKey(u, d, i), from: "Wk " + weekOf(u.ls, d) + (u.term !== state.term ? " T" + u.term : "") + " " + DAYS[d % 4] }));
      });
    });
    const out = [...shuffle(pool.choice).slice(0, 1), ...shuffle(pool.sr).slice(0, 4)];
    return out.length ? out : null;
  }

  // ---------- spotlight ----------
  // The timer moves into the question view so the class can still see it.
  const timerHome = () => $("timer").parentNode.id === "spotTimer" && $("bAns").parentNode.insertBefore($("timer"), $("bAns"));
  function openSpot(i) { $("spotTimer").appendChild($("timer")); state.spot = i; $("spot").hidden = false; document.body.style.overflow = "hidden"; renderSpot(); $("sClose").focus(); }
  function closeSpot() {
    timerHome();
    const i = state.spot; state.spot = -1; $("spot").hidden = true; document.body.style.overflow = ""; $("spotBody").innerHTML = "";
    renderNav(); renderBoard();
    const t = $("board").querySelector("[data-i='" + i + "']"); if (t) t.focus({ preventScroll: true });
  }
  function renderSpot() {
    const list = items(), it = list[state.spot], q = it.q;
    resetMarks();
    $("spotBody").innerHTML = "<article class='tile t-" + q.type + "'>" + qHTML(it, state.spot, true) + "</article>";
    $("sCount").textContent = "Question " + (state.spot + 1) + " of " + list.length;
    $("sPrev").disabled = state.spot === 0;
    $("sNext").disabled = state.spot === list.length - 1;
    setSpotAns(false);
    if (q.interact) $("spotBody").querySelectorAll("[data-part]").forEach((el) => { const p = q.interact[+el.dataset.part]; if (W[p.kind].init) W[p.kind].init(el, p); });
  }
  function setSpotAns(on) {
    const a = $("spotBody").querySelector(".ans"); if (a) a.classList.toggle("show", on);
    $("sAns").setAttribute("aria-pressed", on); $("sAns").textContent = on ? "Hide answer" : "Show answer";
    if (on) {
      const q = items()[state.spot].q, fb = $("spotBody").querySelector("[data-fb]");
      if (fb) { fb.className = "feedback"; fb.textContent = ""; }
      if (q.interact) $("spotBody").querySelectorAll("[data-part]").forEach((el) => { const p = q.interact[+el.dataset.part]; if (W[p.kind].reveal) W[p.kind].reveal(el, p); });
      if (q.type !== "sr") $("spotBody").querySelectorAll(".opt").forEach((b) => { if (+b.dataset.i === correctIndex(q)) b.classList.add("right"); });
      // Discussion, drawing and exploring questions have nothing to check, so seeing the answer completes them.
      if (q.type === "sr" && !(q.interact || []).some((p) => W[p.kind].check)) markDone();
    }
  }
  function correctIndex(q) { return q.type === "mc" ? q.answer : q.answer ? 0 : 1; }
  function moveSpot(d) { const n = state.spot + d; if (n >= 0 && n < items().length) { state.spot = n; renderSpot(); } }
  function runCheck() {
    const q = items()[state.spot].q, fb = $("spotBody").querySelector("[data-fb]");
    let ok = true, msg = null;
    for (const el of $("spotBody").querySelectorAll("[data-part]")) {
      const p = q.interact[+el.dataset.part]; if (!W[p.kind].check) continue;
      const r = W[p.kind].check(el, p);
      if (r.ok === null) { fb.className = "feedback no"; fb.textContent = r.msg; return; }
      if (!r.ok) ok = false;
      if (r.msg && (!r.ok || !msg)) msg = r.msg;
    }
    fb.className = "feedback " + (ok ? "ok" : "no");
    fb.textContent = (ok ? "✓ Correct! " : "Not quite. ") + (msg || (ok ? "Well done." : "Check the red ones and try again."));
    if (ok) markDone();
  }

  // ---------- events ----------
  document.addEventListener("click", (e) => {
    const t = e.target;
    let b;
    if ((b = t.closest("[data-year]"))) { state.year = +b.dataset.year; state.mixed = null; state.day = 0; render(); return; }
    if ((b = t.closest("[data-term]"))) { state.term = +b.dataset.term; state.ls = 1; state.day = 0; state.mixed = null; render(); return; }
    if ((b = t.closest("[data-ls]"))) { state.ls = +b.dataset.ls; state.day = 0; state.mixed = null; render(); return; }
    if ((b = t.closest("[data-day]"))) { state.day = +b.dataset.day; state.mixed = null; render(); return; }
    if (t.closest("#bMix")) { state.mixed = buildMix(); render(); return; }
    if (t.closest("#bClear")) { items().forEach((it) => done.delete(it.key)); saveDone(); render(); return; }
    if ((b = t.closest("#board .tile"))) { openSpot(+b.dataset.i); return; }
    if ((b = t.closest("#spotBody .opt"))) {
      const q = items()[state.spot].q, ok = +b.dataset.i === correctIndex(q), fb = $("spotBody").querySelector("[data-fb]");
      b.classList.add(ok ? "right" : "wrong");
      fb.className = "feedback " + (ok ? "ok" : "no");
      fb.innerHTML = ok ? "✓ Correct!" + (q.explain ? " " + fmt(q.explain) : "") : "Not quite — try again.";
      if (ok) markDone();
      return;
    }
    if ((b = t.closest("#spotBody [data-cube]"))) { onCube(b); return; }
    if ((b = t.closest("#spotBody .tk")) && marks.tool) { onToken(b); return; }
    if (t.closest("#spotBody [data-clearmarks]")) { resetMarks(); $("spotBody").querySelectorAll("[data-cube]").forEach((x) => x.getAttribute("aria-pressed") === "true" && "cub".includes(x.dataset.cube) && (marks.tool = x.dataset.cube)); drawMarks(); return; }
    if ((b = t.closest("#spotBody [data-op]"))) { onOp(b); return; }
    if (t.closest("#spotBody [data-check]")) { runCheck(); return; }
    if (t.closest("#spotBody [data-reset]")) { renderSpot(); return; }
  });
  $("board").addEventListener("keydown", (e) => { const tile = e.target.closest(".tile"); if (tile && e.target === tile && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openSpot(+tile.dataset.i); } });
  $("spotBody").addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target.matches(".inp")) { e.preventDefault(); runCheck(); } });
  function toggleAnswers() { const on = document.body.classList.toggle("answers"); $("bAns").setAttribute("aria-pressed", on); }
  $("bAns").onclick = toggleAnswers;
  $("bNotes").onclick = () => { const on = document.body.classList.toggle("notes"); $("bNotes").setAttribute("aria-pressed", on); save(); };
  $("bNotes").setAttribute("aria-pressed", document.body.classList.contains("notes"));
  $("bFull").onclick = () => { try { if (document.fullscreenElement) document.exitFullscreen(); else { const p = document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); if (p && p.catch) p.catch(() => {}); } } catch (e) {} };
  $("sClose").onclick = closeSpot;
  $("sPrev").onclick = () => moveSpot(-1);
  $("sNext").onclick = () => moveSpot(1);
  $("sAns").onclick = () => setSpotAns($("sAns").getAttribute("aria-pressed") !== "true");
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (state.spot >= 0) {
      if (k === "escape") closeSpot();
      else if (k === "arrowright") moveSpot(1);
      else if (k === "arrowleft") moveSpot(-1);
      else if (k === "a") setSpotAns($("sAns").getAttribute("aria-pressed") !== "true");
    } else if (k === "a") toggleAnswers();
  });
  window.addEventListener("resize", () => { $("spotBody").querySelectorAll("[data-part]").forEach((el) => el._layout && el._layout()); drawMarks(); });

  // ---------- timer ----------
  const ICON_PLAY = "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M7 4l13 8-13 8z'/></svg>";
  const ICON_PAUSE = "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M6 4h4v16H6zM14 4h4v16h-4z'/></svg>";
  const ICON_RESET = "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.6'><path d='M4 12a8 8 0 1 0 3-6.2M4 4v5h5'/></svg>";
  const tm = { total: 300, left: 300, run: false, id: null, end: 0 };
  function tDraw() {
    const s = Math.max(0, Math.ceil(tm.left)), done = s === 0;
    $("tRead").textContent = done ? "Time!" : Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    $("timer").classList.toggle("warn", tm.run && s <= 30 && s > 0);
    $("timer").classList.toggle("done", done);
    $("tGo").innerHTML = done ? ICON_RESET : tm.run ? ICON_PAUSE : ICON_PLAY;
    $("tGo").setAttribute("aria-label", done ? "Reset timer" : tm.run ? "Pause timer" : "Start timer");
  }
  function tTick() { tm.left = (tm.end - Date.now()) / 1000; if (tm.left <= 0) { tm.left = 0; tStop(); } tDraw(); }
  function tStop() { tm.run = false; clearInterval(tm.id); }
  $("tGo").onclick = () => {
    if (tm.left <= 0) { tm.left = tm.total; tDraw(); return; }
    if (tm.run) { tTick(); tStop(); } else { tm.run = true; tm.end = Date.now() + tm.left * 1000; tm.id = setInterval(tTick, 250); }
    tDraw();
  };
  document.querySelectorAll(".timer .mins").forEach((b) => (b.onclick = () => {
    tStop(); tm.total = tm.left = +b.dataset.m * 60;
    document.querySelectorAll(".timer .mins").forEach((x) => x.setAttribute("aria-pressed", x === b));
    tDraw();
  }));

  tDraw();
  render();
})();
