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
    let s = String(raw).toLowerCase().replace(/[$,%°]/g, "").replace(/\u2212/g, "-").trim();
    s = s.replace(/\s*[a-zµ²³]+\.?$/i, "").trim();
    if (/^-\s*\d/.test(s)) { const n = parseNum(s.replace(/^-\s*/, "")); return n == null ? null : -n; }
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

  // Safe arithmetic for typed number sentences: digits, + − × ÷, x, *, /, brackets.
  function evalExpr(raw) {
    const s = String(raw).replace(/[×xX]/g, "*").replace(/÷/g, "/").replace(/[−–]/g, "-").replace(/\s|,/g, "");
    if (!/^[\d.+\-*/()]+$/.test(s)) return null;
    let i = 0;
    const num = () => { const m = s.slice(i).match(/^\d+(\.\d+)?/); if (!m) throw 0; i += m[0].length; return parseFloat(m[0]); };
    const fac = () => { if (s[i] === "(") { i++; const v = add(); if (s[i++] !== ")") throw 0; return v; } if (s[i] === "-") { i++; return -fac(); } return num(); };
    const mul = () => { let v = fac(); while (s[i] === "*" || s[i] === "/") { const o = s[i++], r = fac(); v = o === "*" ? v * r : v / r; } return v; };
    const add = () => { let v = mul(); while (s[i] === "+" || s[i] === "-") { const o = s[i++], r = mul(); v = o === "+" ? v + r : v - r; } return v; };
    try { const v = add(); return i === s.length && isFinite(v) ? v : null; } catch (e) { return null; }
  }
  // Australian English number words, for read-aloud answers.
  function numWords(n) {
    if (n == null) return "";
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const lt100 = (x) => (x < 20 ? ones[x] : tens[Math.floor(x / 10)] + (x % 10 ? "-" + ones[x % 10] : ""));
    const lt1000 = (x, and) => { const h = Math.floor(x / 100), r = x % 100; return (h ? ones[h] + " hundred" + (r ? " and " : "") : (and && r ? "and " : "")) + (r ? lt100(r) : ""); };
    if (n === 0) return "zero";
    const parts = []; let x = Math.floor(n);
    [[1e9, "billion"], [1e6, "million"], [1e3, "thousand"]].forEach(([v, w]) => { const k = Math.floor(x / v); if (k) { parts.push(lt1000(k) + " " + w); x %= v; } });
    if (x) parts.push(lt1000(x, parts.length > 0 && x < 100));
    return parts.join(", ").replace(/, and /, " and ");
  }
  const money = (c) => (c >= 100 ? "$" + (c / 100).toFixed(2) : c + "c");
  const coinName = (c) => (c >= 100 ? "$" + c / 100 : c + "c");
  // Place value columns (m = value in thousandths, so decimals stay exact).
  const PV = {
    HM: { name: "Hundred millions", m: 1e11 }, TM: { name: "Ten millions", m: 1e10 }, M: { name: "Millions", m: 1e9 }, HTh: { name: "Hundred thousands", m: 1e8 }, TTh: { name: "Ten thousands", m: 1e7 }, Th: { name: "Thousands", m: 1e6 },
    H: { name: "Hundreds", m: 1e5 }, T: { name: "Tens", m: 1e4 }, O: { name: "Ones", m: 1e3 }, t: { name: "Tenths", m: 100 }, h: { name: "Hundredths", m: 10 }, th: { name: "Thousandths", m: 1 }
  };
  // Houses: whole numbers are read in groups of three (hundreds, tens, ones of each house).
  const PV_HOUSE = { HM: ["Millions", "H"], TM: ["Millions", "T"], M: ["Millions", "O"], HTh: ["Thousands", "H"], TTh: ["Thousands", "T"], Th: ["Thousands", "O"], H: ["Ones", "H"], T: ["Ones", "T"], O: ["Ones", "O"], t: ["Decimals", "Tenths"], h: ["Decimals", "Hundredths"], th: ["Decimals", "Thousandths"] };
  const HOUSE_INFO = { Millions: [1e6, "million"], Thousands: [1e3, "thousand"], Ones: [1, ""], Decimals: [1, ""] };
  function pvHouses(p) {
    if (p.houses === false || !(p.houses || p.cols.some((k) => ["TTh", "HTh", "M", "TM", "HM"].includes(k)))) return null;
    const out = [];
    p.cols.forEach((k, i) => { const n = PV_HOUSE[k][0], g = out[out.length - 1]; if (g && g.name === n) g.cols.push(i); else out.push({ name: n, cols: [i], unit: HOUSE_INFO[n][0], word: HOUSE_INFO[n][1] }); });
    return out;
  }
  function jFmt(p, v) {
    if (p.time) { const t = ((Math.round(v) % 1440) + 1440) % 1440, hh = Math.floor(t / 60), mm = String(t % 60).padStart(2, "0"); return p.time === "24" ? String(hh).padStart(2, "0") + mm : (hh % 12 || 12) + ":" + mm + (p.ampm ? (hh >= 12 ? " pm" : " am") : ""); }
    if (p.money) return "$" + v.toFixed(2);
    return fmtN(v);
  }
  function jFmtStep(p, n) { if (p.time) return n >= 60 && n % 60 === 0 ? n / 60 + " h" : n + " min"; if (p.money) return "$" + (n % 1 ? n.toFixed(2) : n); return fmtN(n); }
  const angleKey = (d) => (d === 90 ? "right" : d < 90 ? "less" : "greater");
  // Stage 3 names: acute, right, obtuse, straight, reflex (a revolution at 360°).
  const angleName = (d) => (Math.abs(d - 90) < 0.5 ? "right" : d < 90 ? "acute" : Math.abs(d - 180) < 0.5 ? "straight" : d < 180 ? "obtuse" : d >= 359.5 ? "revolution" : "reflex");
  const angleWord = (d) => (d === 90 ? "A right angle" : d >= 179 ? "A straight angle — greater than a right angle" : d < 90 ? "Less than a right angle" : "Greater than a right angle");

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
        const val = p.rule === "area" || p.rule === "product" ? L * Wd : 2 * (L + Wd);
        const excluded = (p.exclude || []).some(([x, y]) => (close(L, x) && close(Wd, y)) || (close(L, y) && close(Wd, x)));
        const ok = L > 0 && Wd > 0 && close(val, p.target) && !excluded;
        a.forEach((i) => i.classList.add(ok ? "ok" : "no"));
        const calc = p.rule === "product" ? fmtN(L) + " × " + fmtN(Wd) + " = " + fmtN(val) : p.rule === "area" ? "Area = " + fmtN(L) + " × " + fmtN(Wd) + " = " + fmtN(val) + " " + p.unit + "²" : "Perimeter = 2 × (" + fmtN(L) + " + " + fmtN(Wd) + ") = " + fmtN(val) + " " + p.unit;
        return { ok, msg: calc + (excluded ? ". That's the same rectangle — try different side lengths." : ok ? ". It works!" : ". It needs to be " + p.target + (p.rule === "product" ? "." : p.rule === "area" ? " " + p.unit + "²." : " " + p.unit + ".")) };
      }
    },
    choose: {
      html(p, pv) {
        if (pv && p.rows.length > 2) return "";
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
        if (p.ticks) for (let i = 0; i <= Math.round(p.ticks * span); i++) { const v = p.min + i / p.ticks; tr += "<i class='nl-tick' style='left:" + ((v - p.min) / span * 100) + "%'></i>"; }
        const ls = p.labelStep || 1;
        for (let v = Math.ceil(p.min / ls) * ls; v <= p.max + 1e-9; v += ls) tr += "<i class='nl-tick major' style='left:" + ((v - p.min) / span * 100) + "%'></i><span class='nl-lab' style='left:" + ((v - p.min) / span * 100) + "%'>" + fmtN(v) + "</span>";
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
        if (p.divs) {
          for (let i = 0; i <= p.divs; i++) tr += "<i class='nl-tick" + (i % (p.majorEvery || p.divs) ? "" : " major") + "' style='left:" + (i / p.divs * 100) + "%'></i>";
          (p.labels || [p.min, p.max]).forEach((v) => { tr += "<span class='nl-lab' style='left:" + ((v - p.min) / span * 100) + "%'>" + fmtN(v) + "</span>"; });
          tr += "<span class='pin' data-pin style='left:4%'><b>" + esc(p.label) + "</b><i></i></span>";
          return (p.hint ? "<p class='ph'>" + esc(p.hint) + "</p>" : "") + "<div class='nl'><div class='nl-track' data-track style='height:120px'>" + tr + "</div></div><p class='readout' data-mkread></p>";
        }
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
          const move = (ev) => { const r = track.getBoundingClientRect(); const f = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width)); pin.style.left = f * 100 + "%"; pin.dataset.v = p.min + f * (p.max - p.min); const rd = el.querySelector("[data-mkread]"); if (rd && p.show) rd.textContent = p.show(+pin.dataset.v); };
          move(e);
          const up = () => { pin.removeEventListener("pointermove", move); pin.removeEventListener("pointerup", up); };
          pin.addEventListener("pointermove", move); pin.addEventListener("pointerup", up);
        });
      },
      check(el, p) {
        const pin = el.querySelector("[data-pin]");
        if (p.target == null) return { ok: true };
        if (pin.dataset.v == null) return { ok: null, msg: "Drag the marker to where it belongs." };
        const ok = Math.abs(+pin.dataset.v - p.target) <= p.tol;
        pin.classList.remove("ok", "no"); pin.classList.add(ok ? "ok" : "no");
        return { ok, msg: ok ? null : p.msg || "Not quite. Count the tenths and hundredths again." };
      },
      reveal(el, p) { if (p.target == null) return; const pin = el.querySelector("[data-pin]"); pin.style.left = ((p.target - p.min) / (p.max - p.min)) * 100 + "%"; pin.dataset.v = p.target; pin.classList.add("ok"); }
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
        for (let i = 0; i < p.parts; i++) h += "<button aria-pressed='" + (p.pre || []).includes(i) + "' aria-label='Part " + (i + 1) + "'" + (pv ? " disabled" : "") + "></button>";
        return h + "</div>" + (pv ? "" : "<p class='readout' data-read>" + esc(p.hint || "Tap the parts to shade them.") + "</p>");
      },
      init(el, p) {
        el.addEventListener("click", (e) => {
          const b = e.target.closest(".shade button"); if (!b) return;
          b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true");
          read();
        });
        const read = () => {
          const n = el.querySelectorAll(".shade [aria-pressed='true']").length;
          if (p.pct) { el.querySelector("[data-read]").innerHTML = fmt("Shaded: [" + n + "/" + p.parts + "]") + " = " + fmtN((n / p.parts) * 100) + "%" + (p.each ? " = " + (p.money ? "$" : "") + fmtN(n * p.each) : ""); return; }
          el.querySelector("[data-read]").innerHTML = fmt("Shaded: [" + n + "/" + p.parts + "]") + (n * 2 === p.parts ? " — exactly half" : n * 2 < p.parts ? " — less than half" : " — more than half");
        };
        if ((p.pre || []).length) read();
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
    // Open number line: the teacher adds jumps to model counting on or back. Landing points are shown, the total of the jumps is not.
    jumps: {
      html(p, pv) {
        if (pv) return "";
        const steps = p.steps || [1, 10, 100];
        const btns = steps.map((n) => "<button class='btn jl-step' data-step='" + n + "'>+" + jFmtStep(p, n) + "</button>").join("") +
          (p.back ? steps.map((n) => "<button class='btn jl-step' data-step='" + -n + "'>−" + jFmtStep(p, n) + "</button>").join("") : "");
        return "<p class='ph'>" + esc(p.hint || "Add jumps to count on" + (p.back ? " or back" : "") + ". Each jump shows where you land.") + "</p>" +
          "<div class='jl'><div class='jl-track' data-track></div></div>" +
          "<div class='checkrow jl-tools'>" + btns + "<label class='field'><span class='unit'>Jump by</span><input class='inp jl-custom' inputmode='decimal' autocomplete='off' aria-label='Jump size'></label><button class='btn' data-jgo>Jump</button><button class='btn' data-jundo>Undo</button><button class='btn' data-jclear>Clear</button></div>";
      },
      init(el, p) {
        el._pts = [p.start];
        const draw = () => {
          const pts = el._pts, track = el.querySelector("[data-track]");
          let lo = Math.min(p.start, p.end ?? p.start, ...pts), hi = Math.max(p.start, p.end ?? p.start, ...pts);
          if (p.min != null) lo = Math.min(lo, p.min); if (p.max != null) hi = Math.max(hi, p.max);
          const pad = (hi - lo || 10) * 0.06; lo -= pad; hi += pad;
          const X = (v) => ((v - lo) / (hi - lo)) * 100;
          let h = "<div class='jl-axis'></div>";
          const mark = (v, cls, row) => "<i class='jl-tick " + cls + "' style='left:" + X(v) + "%'></i><span class='jl-lab " + cls + (row ? " r" + row : "") + "' style='left:" + X(v) + "%'>" + esc(jFmt(p, v)) + "</span>";
          h += mark(p.start, "start", 0);
          if (p.end != null) h += mark(p.end, "end", 0);
          for (let i = 1; i < pts.length; i++) {
            const a = pts[i - 1], b = pts[i], l = Math.min(X(a), X(b)), w = Math.abs(X(b) - X(a));
            h += "<span class='jl-arc" + (b < a ? " back" : "") + "' style='left:" + l + "%;width:" + w + "%;height:" + Math.max(22, Math.min(80, w * 3)) + "px'><b>" + (b < a ? "−" : "+") + esc(jFmtStep(p, Math.abs(b - a))) + "</b></span>";
            if (!(p.end != null && Math.abs(b - p.end) < 1e-9)) h += mark(b, "land", i % 2 ? 1 : 2);
          }
          track.innerHTML = h;
        };
        const jump = (n) => { if (!isFinite(n) || !n) return; const last = el._pts[el._pts.length - 1]; el._pts.push(Math.round((last + n) * 1000) / 1000); draw(); };
        el.addEventListener("click", (e) => {
          const b = e.target.closest(".jl-step"); if (b) { jump(+b.dataset.step); return; }
          if (e.target.closest("[data-jgo]")) { const v = parseNum(el.querySelector(".jl-custom").value.replace(/^-/, "")); const neg = /^\s*-/.test(el.querySelector(".jl-custom").value); jump(v == null ? NaN : neg ? -v : v); return; }
          if (e.target.closest("[data-jundo]")) { if (el._pts.length > 1) el._pts.pop(); draw(); return; }
          if (e.target.closest("[data-jclear]")) { el._pts = [p.start]; draw(); }
        });
        el.querySelector(".jl-custom").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); el.querySelector("[data-jgo]").click(); } });
        draw();
      }
    },
    // Coin purse: tap coins in to make an amount; save each combination found.
    coins: {
      html(p, pv) {
        if (pv) return "";
        const set = p.coins || [5, 10, 20, 50, 100, 200];
        return "<p class='ph'>" + esc(p.hint || "Tap coins to put them in the purse. Tap a coin in the purse to take it out.") + "</p>" +
          "<div class='cn-bank'>" + set.map((c) => "<button class='cn" + (c >= 100 ? " gold" : "") + "' data-coin='" + c + "' aria-label='" + coinName(c) + "'>" + coinName(c) + "</button>").join("") + "</div>" +
          "<div class='cn-purse' data-purse></div><p class='readout' data-cnread></p>" +
          (p.target ? "<div class='checkrow'><button class='btn' data-cnsave>Save this combination</button></div><ol class='cn-saved' data-saved></ol>" : "");
      },
      init(el, p) {
        el._p = []; el._saved = [];
        const upd = () => {
          el.querySelector("[data-purse]").innerHTML = el._p.length ? el._p.map((c, i) => "<button class='cn" + (c >= 100 ? " gold" : "") + "' data-out='" + i + "'>" + coinName(c) + "</button>").join("") : "<span class='ph'>The purse is empty.</span>";
          const t = el._p.reduce((a, b) => a + b, 0);
          el.querySelector("[data-cnread]").textContent = el._p.length + " coin" + (el._p.length === 1 ? "" : "s") + (p.showTotal === false ? "" : " · total " + money(t));
          const sv = el.querySelector("[data-saved]"); if (sv) sv.innerHTML = el._saved.map((c) => "<li>" + c.map(coinName).join(" + ") + "</li>").join("");
        };
        el.addEventListener("click", (e) => {
          const a = e.target.closest("[data-coin]"); if (a) { if (el._p.length < 12) el._p.push(+a.dataset.coin); el._p.sort((x, y) => y - x); upd(); return; }
          const o = e.target.closest("[data-out]"); if (o) { el._p.splice(+o.dataset.out, 1); upd(); return; }
          if (e.target.closest("[data-cnsave]")) {
            const r = W.coins.check(el, p); const fb = el.querySelector("[data-cnread]");
            if (!r.ok) { fb.textContent = r.msg; return; }
            const key = el._p.join(","); if (!el._saved.some((s) => s.join(",") === key)) el._saved.push(el._p.slice());
            el._p = []; upd();
          }
        });
        upd();
      },
      check(el, p) {
        const cur = el._p.length ? el._p : el._saved[el._saved.length - 1] || [];
        if (!cur.length) return { ok: null, msg: "Put some coins in the purse first." };
        const t = cur.reduce((a, b) => a + b, 0);
        if (p.count && cur.length !== p.count) return { ok: false, msg: "Use exactly " + p.count + " coins." };
        if (p.mix && !(cur.some((c) => c >= 100) && cur.some((c) => c < 100))) return { ok: false, msg: "Use both gold and silver coins." };
        if (p.target && t !== p.target) return { ok: false, msg: "That makes " + money(t) + ". It needs to make " + money(p.target) + "." };
        return { ok: true, msg: cur.map(coinName).join(" + ") + " = " + money(t) + (el._saved.length > 1 ? ". " + el._saved.length + " combinations found." : "") };
      }
    },
    // Combinations: build a selection, save it; duplicates (in any order) are spotted.
    combos: {
      html(p, pv) {
        if (pv) return "";
        return "<p class='ph'>Tap " + p.pick + " to make a combination, then save it.</p><div class='cb-bank'>" + p.items.map((it, i) => "<button class='cb-i' data-ci='" + i + "' style='--k:" + it[1] + "'>" + esc(it[0]) + "</button>").join("") + "</div>" +
          "<div class='cb-cur' data-cur></div><div class='checkrow'><button class='btn' data-cbsave>Save combination</button><button class='btn' data-cbclear>Clear</button></div><p class='readout' data-cbread></p><div class='cb-list' data-cblist></div>";
      },
      init(el, p) {
        el._cur = []; el._found = [];
        const chip = (i) => "<span class='cb-dot' style='--k:" + p.items[i][1] + "'>" + esc(p.items[i][0]) + "</span>";
        const upd = (msg) => {
          el.querySelector("[data-cur]").innerHTML = el._cur.map(chip).join("") || "<span class='ph'>Choose " + p.pick + "…</span>";
          el.querySelector("[data-cblist]").innerHTML = el._found.map((c) => "<div class='cb-row'>" + c.map(chip).join("") + "</div>").join("");
          el.querySelector("[data-cbread]").textContent = msg || el._found.length + " combination" + (el._found.length === 1 ? "" : "s") + " found";
        };
        el.addEventListener("click", (e) => {
          const b = e.target.closest("[data-ci]");
          if (b) { const i = +b.dataset.ci, used = el._cur.filter((x) => x === i).length; if (el._cur.length < p.pick && used < (p.items[i][2] || p.pick)) el._cur.push(i); upd(); return; }
          if (e.target.closest("[data-cbclear]")) { el._cur = []; upd(); return; }
          if (e.target.closest("[data-cbsave]")) {
            if (el._cur.length < p.pick) { upd("Choose " + p.pick + " first."); return; }
            const key = el._cur.slice().sort().join(","); if (el._found.some((c) => c.slice().sort().join(",") === key)) { el._cur = []; upd("You already have that one — order doesn't matter."); return; }
            el._found.push(el._cur.slice().sort()); el._cur = []; upd();
          }
        });
        upd();
      },
      check(el, p) {
        if (!el._found.length) return { ok: null, msg: "Save some combinations first." };
        const ok = el._found.length === p.total;
        return { ok, msg: ok ? "All " + p.total + " combinations found!" : el._found.length + " found so far. There are more." };
      }
    },
    // Grid map: tap a square to see its grid reference.
    gridref: {
      html(p, pv) {
        let h = "<div class='gr'><img src='" + p.src + "' alt='" + esc(p.alt || "Grid map") + "'><div class='gr-grid' style='left:" + p.box[0] + "%;top:" + p.box[1] + "%;width:" + (p.box[2] - p.box[0]) + "%;height:" + (p.box[3] - p.box[1]) + "%;grid-template-columns:repeat(" + p.cols.length + ",1fr);grid-template-rows:repeat(" + p.rows.length + ",1fr)'>";
        p.rows.forEach((r) => p.cols.forEach((c) => { h += "<button class='gr-c' data-ref='" + c + r + "'" + (pv ? " disabled" : "") + " aria-label='" + c + r + "'></button>"; }));
        return h + "</div></div>" + (pv ? "" : "<p class='readout' data-grread>Tap a square to see its grid reference.</p>");
      },
      init(el) { el.addEventListener("click", (e) => { const b = e.target.closest(".gr-c"); if (!b) return; el.querySelectorAll(".gr-c").forEach((x) => x.classList.toggle("on", x === b)); el.querySelector("[data-grread]").textContent = "Grid reference: " + b.dataset.ref; }); }
    },
    // Number sentences that show a property: each must be true (both sides equal) and fit its pattern.
    sentence: {
      html(p, pv) {
        if (pv) return "";
        return "<div class='fields col'>" + p.fields.map((f, i) => "<label class='field'><span>" + fmt(f.label) + "</span><input class='inp wide' data-f='" + i + "' placeholder='" + esc(f.placeholder || "") + "' autocomplete='off' spellcheck='false'></label>").join("") + "</div>";
      },
      check(el, p) {
        let all = true, filled = true, why = null;
        p.fields.forEach((f, i) => {
          const inp = el.querySelector("[data-f='" + i + "']"), v = inp.value.trim(); inp.classList.remove("ok", "no");
          if (!v) { filled = false; return; }
          const sides = v.split("="), vals = sides.map(evalExpr);
          let ok = sides.length === 2 && vals.every((x) => x != null) && close(vals[0], vals[1]);
          if (!ok && !why) why = "Check that both sides of “" + v + "” are equal.";
          if (ok && !new RegExp(f.re).test(v.replace(/[×X*]/g, "x").replace(/[−–]/g, "-"))) { ok = false; why = why || f.msg; }
          inp.classList.add(ok ? "ok" : "no"); if (!ok) all = false;
        });
        if (!filled) return { ok: null, msg: "Write a number sentence in every box." };
        return { ok: all, msg: all ? null : why };
      }
    },
    // Bar model: the whole on top, its parts below in proportion. Tap a ? to reveal it.
    bar: {
      html(p, pv) {
        const tot = p.whole.v, seg = (q, i, top) => "<div class='bm-seg" + (top ? " top" : "") + (q.hide ? " hid" : "") + "' style='flex:" + q.v + "'" + (q.hide && !pv ? " role='button' tabindex='0' data-bm='" + i + "'" : "") + "><span data-bml='" + i + "'>" + (q.hide ? "?" : fmt(q.l || fmtN(q.v))) + "</span>" + (q.n ? "<small>" + esc(q.n) + "</small>" : "") + "</div>";
        return (pv ? "" : "<p class='ph'>" + esc(p.hint || "The top bar is the whole. The parts below add up to it. Tap a ? to reveal it.") + "</p>") +
          "<div class='bm'><div class='bm-row'>" + seg(p.whole, "w", true) + "</div><div class='bm-row'>" + p.parts.map((q, i) => seg(q, i)).join("") + "</div></div>";
      },
      init(el, p) {
        el.addEventListener("click", (e) => {
          const b = e.target.closest("[data-bm]"); if (!b) return;
          const k = b.dataset.bm, q = k === "w" ? p.whole : p.parts[+k], sp = b.querySelector("[data-bml]"), on = sp.textContent === "?";
          sp.innerHTML = on ? fmt(q.l || fmtN(q.v)) : "?"; b.classList.toggle("shown", on);
        });
      }
    },
    // Folding a paper strip in half: each fold doubles the equal parts.
    fold: {
      html(p, pv) {
        if (pv) return "";
        return "<div class='fd-strip' data-fd></div><div class='checkrow'><button class='btn primary-soft' data-fdgo>Fold in half</button><button class='btn' data-fdun>Unfold</button></div><p class='readout' data-fdread></p>";
      },
      init(el, p) {
        el._f = 0;
        const upd = () => {
          const n = Math.pow(2, el._f), strip = el.querySelector("[data-fd]");
          strip.style.setProperty("--n", n); strip.innerHTML = "<i></i>".repeat(n);
          el.querySelector("[data-fdread]").textContent = el._f + " fold" + (el._f === 1 ? "" : "s") + " → " + n + " equal part" + (n === 1 ? "" : "s");
        };
        el.addEventListener("click", (e) => {
          if (e.target.closest("[data-fdgo]") && el._f < (p.max || 5)) { el._f++; upd(); }
          if (e.target.closest("[data-fdun]")) { el._f = 0; upd(); }
        });
        upd();
      },
      check(el, p) { if (!p.target) return { ok: true }; const n = Math.pow(2, el._f), ok = n === p.target; return { ok, msg: ok ? null : "That makes " + n + " parts. It needs " + p.target + "." }; },
      reveal(el, p) { if (p.target) { el._f = Math.round(Math.log2(p.target)); el.querySelector("[data-fdun]").click(); for (let i = 0; i < Math.round(Math.log2(p.target)); i++) el.querySelector("[data-fdgo]").click(); } }
    },
    // Balance: both sides of an equation must weigh the same. Type the missing number to level the beam.
    scale: {
      html(p, pv) {
        const side = (t, k) => "<div class='sc-side'>" + t.split("?").map(esc).join(k ? "<input class='inp sc-inp' data-f='0' inputmode='numeric' autocomplete='off' aria-label='Missing number'" + (pv ? " disabled" : "") + ">" : "") + "</div>";
        return "<div class='sc'><div class='sc-beam' data-scb><div class='sc-pan'>" + side(p.left, p.left.includes("?")) + "</div><div class='sc-pan'>" + side(p.right, p.right.includes("?")) + "</div></div><div class='sc-post'></div></div>" +
          (pv ? "" : "<div class='checkrow'><button class='btn' data-sctot aria-pressed='false'>Show each side's total</button></div><p class='readout' data-scread></p>");
      },
      init(el, p) {
        const val = (t) => { const v = el.querySelector(".sc-inp").value.trim(); return evalExpr(t.replace("?", v === "" ? "0" : v)); };
        const upd = () => {
          const L = val(p.left), R = val(p.right), d = L == null || R == null ? 0 : Math.max(-1, Math.min(1, (R - L) / Math.max(1, Math.abs(L), Math.abs(R)) * 4));
          el.querySelector("[data-scb]").style.transform = "rotate(" + (d * 9).toFixed(1) + "deg)";
          const on = el.querySelector("[data-sctot]").getAttribute("aria-pressed") === "true";
          el.querySelector("[data-scread]").textContent = !on || L == null || R == null ? "" : "Left side = " + fmtN(L) + " · Right side = " + fmtN(R) + (close(L, R) ? " · Balanced!" : "");
        };
        el.addEventListener("input", upd);
        el.addEventListener("click", (e) => { const b = e.target.closest("[data-sctot]"); if (!b) return; b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"); upd(); });
        upd();
      },
      check(el, p) {
        const inp = el.querySelector(".sc-inp"), v = parseNum(inp.value); inp.classList.remove("ok", "no");
        if (v == null) return { ok: null, msg: "Type the missing number first." };
        const ok = close(v, p.answer); inp.classList.add(ok ? "ok" : "no");
        return { ok, msg: ok ? "Both sides are equal. The scale balances." : "The scale doesn't balance yet." };
      }
    },
    // Bar graph: tap a bar to run a guide line across to the scale.
    bargraph: {
      html(p, pv) {
        const W_ = 640, H = 362, L = 70, B = 290, T = 20, R = 20 + (p.legendW || 150), ph = B - T, X0 = L, X1 = W_ - R;
        const y = (v) => B - (v / p.max) * ph, gw = (X1 - X0) / p.groups.length, ns = p.series.length, bw = Math.min(46, (gw * 0.7) / ns);
        let s = "<svg viewBox='0 0 " + W_ + " " + H + "' class='bg' role='img' aria-label='" + esc(p.label || "Bar graph") + "'>";
        if (p.minor) for (let v = 0; v <= p.max; v += p.minor) s += "<line class='bg-mi' x1='" + X0 + "' x2='" + X1 + "' y1='" + y(v) + "' y2='" + y(v) + "'/>";
        for (let v = 0; v <= p.max; v += p.step) s += "<line class='bg-gl' x1='" + X0 + "' x2='" + X1 + "' y1='" + y(v) + "' y2='" + y(v) + "'/><text class='bg-n' x='" + (X0 - 10) + "' y='" + (y(v) + 6) + "'>" + v + "</text>";
        s += "<line class='bg-ax' x1='" + X0 + "' y1='" + T + "' x2='" + X0 + "' y2='" + B + "'/><line class='bg-ax' x1='" + X0 + "' y1='" + B + "' x2='" + X1 + "' y2='" + B + "'/><g data-bgg></g>";
        p.groups.forEach((g, gi) => {
          const cx = X0 + gw * (gi + 0.5), x0 = cx - (bw * ns + 8 * (ns - 1)) / 2;
          g.v.forEach((v, si) => { const x = x0 + si * (bw + 8); s += "<rect class='bg-bar' data-bgb='" + gi + "-" + si + "' x='" + x + "' y='" + y(v) + "' width='" + bw + "' height='" + (B - y(v)) + "' fill='" + p.series[si].c + "'" + (pv ? " style='pointer-events:none'" : "") + "/>"; });
          s += "<text class='bg-l' x='" + cx + "' y='" + (B + 24) + "'>" + esc(g.l) + "</text>";
        });
        p.series.forEach((se, si) => { s += "<rect x='" + (X1 + 24) + "' y='" + (T + 10 + si * 30) + "' width='20' height='20' fill='" + se.c + "'/><text class='bg-lg' x='" + (X1 + 52) + "' y='" + (T + 26 + si * 30) + "'>" + esc(se.l) + "</text>"; });
        if (p.ylabel) s += "<text class='bg-al' transform='translate(20 " + (T + ph / 2) + ") rotate(-90)'>" + esc(p.ylabel) + "</text>";
        if (p.xlabel) s += "<text class='bg-al' x='" + (X0 + X1) / 2 + "' y='" + (H - 6) + "'>" + esc(p.xlabel) + "</text>";
        return (pv ? "" : "<p class='ph'>" + esc(p.hint || "Tap a bar to run a line across to the scale.") + "</p>") + "<div class='bg-pic'>" + s + "</svg></div>";
      },
      init(el, p) {
        const on = new Set(), B = 290, T = 20, ph = B - T;
        el.addEventListener("click", (e) => {
          const b = e.target.closest("[data-bgb]"); if (!b) return;
          const k = b.dataset.bgb; on.has(k) ? on.delete(k) : on.add(k);
          el.querySelectorAll("[data-bgb]").forEach((r) => r.classList.toggle("on", on.has(r.dataset.bgb)));
          let h = ""; on.forEach((k2) => { const r = el.querySelector("[data-bgb='" + k2 + "']"), yy = +r.getAttribute("y"); h += "<line class='bg-guide' x1='70' x2='" + (+r.getAttribute("x") + +r.getAttribute("width")) + "' y1='" + yy + "' y2='" + yy + "'/>"; });
          el.querySelector("[data-bgg]").innerHTML = h; void ph; void T;
        });
      }
    },
    // Corner tester: tap a corner to lay a right-angle tester on it, tap again to name the angle.
    corners: {
      html(p, pv) {
        let svg = "<svg viewBox='0 0 " + p.view[0] + " " + p.view[1] + "' class='co' role='img' aria-label='" + esc(p.label || "Shapes with corners to test") + "'>";
        p.shapes.forEach((sh, si) => {
          svg += "<polygon points='" + sh.p.map((q) => q.join(",")).join(" ") + "' fill='" + (sh.fill || "#0B2A6B") + "' class='co-shape'/>";
          if (sh.l) { const cx = sh.p.reduce((a, q) => a + q[0], 0) / sh.p.length, cy = sh.p.reduce((a, q) => a + q[1], 0) / sh.p.length; svg += "<text x='" + (sh.lx ?? cx) + "' y='" + (sh.ly ?? cy) + "' class='co-name'>" + esc(sh.l) + "</text>"; }
          svg += "<g data-cog='" + si + "'></g>";
          (sh.marks || sh.p.map((_, v) => ({ v }))).forEach((m, mi) => {
            const [x, y] = sh.p[m.v];
            if (m.l) { const g = W.corners.geo(sh, m); svg += "<text x='" + (x + Math.cos(g.mid) * (g.r + 18)) + "' y='" + (y + Math.sin(g.mid) * (g.r + 18)) + "' class='co-lab'>" + esc(m.l) + "</text>"; }
            svg += "<circle class='co-hit' cx='" + x + "' cy='" + y + "' r='" + (p.hit || 18) + "' data-co='" + si + "-" + mi + "'" + (pv ? " style='pointer-events:none'" : "") + "/>";
          });
        });
        svg += "</svg>";
        return (pv ? "" : "<p class='ph'>" + esc(p.hint || "Tap a corner to test it with a right angle. Tap again to name the angle.") + "</p>") + "<div class='co-pic'>" + svg + "</div>" + (pv ? "" : "<p class='readout' data-coread></p>");
      },
      // Interior angle at a vertex (or the outside angle when m.ext), found by testing which side is inside.
      geo(sh, m) {
        const P = sh.p, n = P.length, V = P[m.v], A = P[(m.v + n - 1) % n], B = P[(m.v + 1) % n];
        const a1 = Math.atan2(A[1] - V[1], A[0] - V[0]), a2 = Math.atan2(B[1] - V[1], B[0] - V[0]);
        let d = (a2 - a1 + 4 * Math.PI) % (2 * Math.PI);
        const inside = (x, y) => { let c = false; for (let i = 0, j = n - 1; i < n; j = i++) { const [xi, yi] = P[i], [xj, yj] = P[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c; } return c; };
        const mid = a1 + d / 2, ins = inside(V[0] + 6 * Math.cos(mid), V[1] + 6 * Math.sin(mid));
        let s = 1; if (ins === !!m.ext) { d = 2 * Math.PI - d; s = -1; }
        const r = m.r || Math.max(14, Math.min(30, 0.3 * Math.min(Math.hypot(A[0] - V[0], A[1] - V[1]), Math.hypot(B[0] - V[0], B[1] - V[1]))));
        return { V, a1, s, th: d, deg: (d * 180) / Math.PI, mid: a1 + (s * d) / 2, r };
      },
      init(el, p) {
        el._st = {};
        const draw = (si) => {
          const sh = p.shapes[si], g = el.querySelector("[data-cog='" + si + "']"); let h = "";
          (sh.marks || sh.p.map((_, v) => ({ v }))).forEach((m, mi) => {
            const st = el._st[si + "-" + mi] || 0; if (!st) return;
            const G = W.corners.geo(sh, m), [x, y] = G.V, e = G.a1 + G.s * G.th, r = G.r;
            const P = (a, R) => (x + R * Math.cos(a)).toFixed(1) + " " + (y + R * Math.sin(a)).toFixed(1);
            const q = p.q || 34, u = G.a1, w = G.a1 + G.s * Math.PI / 2;
            h += "<path class='co-sq' d='M " + x + " " + y + " L " + P(u, q) + " L " + (x + q * Math.cos(u) + q * Math.cos(w)).toFixed(1) + " " + (y + q * Math.sin(u) + q * Math.sin(w)).toFixed(1) + " L " + P(w, q) + " Z'/>";
            if (st === 2) h += Math.abs(G.deg - 90) < 0.5 ? "<path class='co-arc' d='M " + P(u, 14) + " L " + (x + 14 * Math.cos(u) + 14 * Math.cos(w)).toFixed(1) + " " + (y + 14 * Math.sin(u) + 14 * Math.sin(w)).toFixed(1) + " L " + P(w, 14) + "' fill='none'/>"
              : "<path class='co-arc' d='M " + x + " " + y + " L " + P(u, r) + " A " + r + " " + r + " 0 " + (G.th > Math.PI ? 1 : 0) + " " + (G.s > 0 ? 1 : 0) + " " + P(e, r) + " Z'/>";
          });
          g.innerHTML = h;
        };
        const read = () => {
          const out = [];
          p.shapes.forEach((sh, si) => (sh.marks || sh.p.map((_, v) => ({ v }))).forEach((m, mi) => {
            if (el._st[si + "-" + mi] !== 2) return; const G = W.corners.geo(sh, m), nm = angleName(G.deg);
            out.push((m.l || sh.l || "") + (m.l || sh.l ? ": " : "") + (m.l || sh.l ? nm : nm[0].toUpperCase() + nm.slice(1)) + " angle" + (p.deg ? " (" + Math.round(G.deg) + "°)" : ""));
          }));
          el.querySelector("[data-coread]").textContent = out.join(" · ");
        };
        el.addEventListener("click", (e) => {
          const c = e.target.closest("[data-co]"); if (!c) return;
          const k = c.dataset.co; el._st[k] = ((el._st[k] || 0) + 1) % 3; draw(+k.split("-")[0]); read();
        });
      }
    },
    // Cartesian plane: tap a point to drop guide lines to both axes; tap a grid point to plot it.
    plane: {
      html(p, pv) {
        const [x0, x1, y0, y1] = p.range || [-6, 6, -6, 6], c = 30, pad = 26, W_ = (x1 - x0) * c + 2 * pad, H = (y1 - y0) * c + 2 * pad;
        const X = (x) => pad + (x - x0) * c, Y = (y) => pad + (y1 - y) * c;
        let s = "<svg viewBox='0 0 " + W_ + " " + H + "' class='pl' role='img' aria-label='Cartesian plane'>";
        for (let x = x0; x <= x1; x++) s += "<line class='pl-g' x1='" + X(x) + "' y1='" + Y(y0) + "' x2='" + X(x) + "' y2='" + Y(y1) + "'/>";
        for (let y = y0; y <= y1; y++) s += "<line class='pl-g' x1='" + X(x0) + "' y1='" + Y(y) + "' x2='" + X(x1) + "' y2='" + Y(y) + "'/>";
        s += "<line class='pl-ax' x1='" + X(x0) + "' y1='" + Y(0) + "' x2='" + X(x1) + "' y2='" + Y(0) + "'/><line class='pl-ax' x1='" + X(0) + "' y1='" + Y(y0) + "' x2='" + X(0) + "' y2='" + Y(y1) + "'/>";
        for (let x = x0; x <= x1; x++) if (x) s += "<text class='pl-n' data-xn='" + x + "' x='" + X(x) + "' y='" + (Y(0) + 17) + "'>" + (x < 0 ? "−" + -x : x) + "</text>";
        for (let y = y0; y <= y1; y++) if (y) s += "<text class='pl-n' data-yn='" + y + "' x='" + (X(0) - 12) + "' y='" + (Y(y) + 5) + "'>" + (y < 0 ? "−" + -y : y) + "</text>";
        s += "<text class='pl-n' x='" + (X(0) - 10) + "' y='" + (Y(0) + 17) + "'>0</text><text class='pl-axl' x='" + (X(x1) + 12) + "' y='" + (Y(0) + 5) + "'>x</text><text class='pl-axl' x='" + X(0) + "' y='" + (Y(y1) - 10) + "'>y</text>";
        s += "<g data-plg></g>";
        if (!pv) for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) s += "<circle class='pl-hit' cx='" + X(x) + "' cy='" + Y(y) + "' r='11' data-pt='" + x + "," + y + "'/>";
        (p.points || []).forEach((q, i) => { s += "<circle class='pl-pt' cx='" + X(q.x) + "' cy='" + Y(q.y) + "' r='8' data-pp='" + i + "'/><text class='pl-pl' x='" + (X(q.x) + 12) + "' y='" + (Y(q.y) - 10) + "'>" + esc(q.l) + "</text>"; });
        return (pv ? "" : "<p class='ph'>" + esc(p.hint || "Tap a point to trace it back to each axis. Tap any grid point to plot it.") + "</p>") + "<div class='pl-pic'>" + s + "</svg></div>" + (pv ? "" : "<div class='checkrow'><button class='btn' data-plclear>Clear</button></div><p class='readout' data-plread></p>");
      },
      init(el, p) {
        const [x0, , , y1] = p.range || [-6, 6, -6, 6], c = 30, pad = 26, X = (x) => pad + (x - x0) * c, Y = (y) => pad + (y1 - y) * c;
        el._g = new Set(); el._d = new Set();
        const draw = () => {
          let h = "";
          el._g.forEach((i) => { const q = p.points[i]; h += "<path class='pl-guide' d='M " + X(q.x) + " " + Y(q.y) + " L " + X(q.x) + " " + Y(0) + " M " + X(q.x) + " " + Y(q.y) + " L " + X(0) + " " + Y(q.y) + "'/>"; });
          el._d.forEach((k) => { const [x, y] = k.split(",").map(Number); h += "<circle class='pl-dot' cx='" + X(x) + "' cy='" + Y(y) + "' r='6'/><text class='pl-dl' x='" + (X(x) + 9) + "' y='" + (Y(y) + 20) + "'>(" + x + ", " + y + ")</text>"; });
          el.querySelector("[data-plg]").innerHTML = h;
          el.querySelectorAll("[data-xn],[data-yn]").forEach((t) => t.classList.remove("on"));
          el._g.forEach((i) => { const q = p.points[i]; el.querySelector("[data-xn='" + q.x + "']")?.classList.add("on"); el.querySelector("[data-yn='" + q.y + "']")?.classList.add("on"); });
          el.querySelector("[data-plread]").textContent = el._g.size ? "Go across the x-axis first, then up or down the y-axis." : "";
        };
        el.addEventListener("click", (e) => {
          const t = e.target.closest("[data-pt]"); if (e.target.closest("[data-plclear]")) { el._g.clear(); el._d.clear(); draw(); return; }
          if (!t) return;
          const [x, y] = t.dataset.pt.split(",").map(Number), i = (p.points || []).findIndex((q) => q.x === x && q.y === y);
          if (i >= 0) el._g.has(i) ? el._g.delete(i) : el._g.add(i); else el._d.has(t.dataset.pt) ? el._d.delete(t.dataset.pt) : el._d.add(t.dataset.pt);
          draw();
        });
      }
    },
    // Mirror lines: tap a dashed line to reflect the shape in it. A true line of symmetry lands on itself.
    mirror: {
      html(p, pv) {
        let s = "<svg viewBox='0 0 " + p.view[0] + " " + p.view[1] + "' class='mr' role='img' aria-label='" + esc(p.label || "Shapes with lines to test for symmetry") + "'>";
        p.shapes.forEach((sh, si) => {
          s += "<polygon points='" + sh.p.map((q) => q.join(",")).join(" ") + "' class='mr-shape' fill='" + (sh.fill || "#0B2A6B") + "'/><g data-mrg='" + si + "'></g>";
          if (sh.l) s += "<text class='co-lab mr-name' x='" + (sh.lx ?? sh.p.reduce((a, q) => a + q[0], 0) / sh.p.length) + "' y='" + (sh.ly ?? Math.max(...sh.p.map((q) => q[1])) + 46) + "'>" + esc(sh.l) + "</text>";
          (sh.lines || []).forEach((L, li) => { const seg = "x1='" + L[0] + "' y1='" + L[1] + "' x2='" + L[2] + "' y2='" + L[3] + "'"; s += "<g class='mr-l' data-ml='" + si + "-" + li + "'><line " + seg + " class='mr-hit'/><line " + seg + " class='mr-line'/></g>"; });
        });
        return (pv ? "" : "<p class='ph'>" + esc(p.hint || "Predict first. Then tap a dashed line to fold the shape over it.") + "</p>") + "<div class='mr-pic'>" + s + "</svg></div>" + (pv ? "" : "<p class='readout' data-mrread></p>");
      },
      init(el, p) {
        el._on = {};
        const refl = ([x, y], [ax, ay, bx, by]) => { const dx = bx - ax, dy = by - ay, t = ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy), fx = ax + t * dx, fy = ay + t * dy; return [2 * fx - x, 2 * fy - y]; };
        const upd = () => {
          const out = [];
          p.shapes.forEach((sh, si) => {
            let h = "", found = 0;
            (sh.lines || []).forEach((L, li) => {
              const g = el.querySelector("[data-ml='" + si + "-" + li + "']"), on = el._on[si + "-" + li];
              const R = sh.p.map((q) => refl(q, L)), ok = R.every((r) => sh.p.some((q) => Math.hypot(q[0] - r[0], q[1] - r[1]) < 1.5));
              g.classList.toggle("yes", !!on && ok); g.classList.toggle("no", !!on && !ok);
              if (on) { h += "<polygon class='mr-ghost" + (ok ? " yes" : "") + "' points='" + R.map((q) => q.map((v) => v.toFixed(1)).join(",")).join(" ") + "'/>"; if (ok) found++; }
            });
            el.querySelector("[data-mrg='" + si + "']").innerHTML = h;
            if (Object.keys(el._on).some((k) => el._on[k] && k.startsWith(si + "-"))) out.push((sh.l ? sh.l + ": " : "") + found + " line" + (found === 1 ? "" : "s") + " of symmetry found");
          });
          el.querySelector("[data-mrread]").textContent = out.join(" · ");
        };
        el.addEventListener("click", (e) => { const g = e.target.closest("[data-ml]"); if (!g) return; el._on[g.dataset.ml] = !el._on[g.dataset.ml]; upd(); });
      }
    },
    // Pack (fill groups of a set size) or share (deal one to each group in turn), with the leftovers shown.
    pack: {
      html(p, pv) {
        if (pv) return "";
        const btn = p.mode === "share" ? "Deal one to each " + p.label : "Fill a " + p.label + " with " + p.size;
        return "<p class='ph'>" + esc(p.hint || (p.mode === "share" ? "Share the " + p.thing + " out one at a time." : "Put " + p.size + " " + p.thing + " in each " + p.label + ".")) + "</p>" +
          "<div class='pk-pool' data-pool></div><div class='pk-groups' data-groups></div>" +
          "<div class='checkrow'><button class='btn primary-soft' data-pkgo>" + esc(btn) + "</button>" + (p.mode === "share" ? "" : "<button class='btn' data-pkrest>Put the rest in a " + esc(p.label) + "</button>") + "<button class='btn' data-pkundo>Undo</button></div>";
      },
      init(el, p) {
        const groups = p.mode === "share" ? Array.from({ length: p.n }, () => 0) : [];
        el._g = groups; el._hist = [];
        const icon = "<i class='pk-c'></i>";
        const upd = () => {
          const used = el._g.reduce((a, b) => a + b, 0), left = p.total - used;
          el._left = left;
          el.querySelector("[data-pool]").innerHTML = "<span>" + left + " " + esc(p.thing) + " left</span><div>" + icon.repeat(left) + "</div>";
          el.querySelector("[data-groups]").innerHTML = el._g.map((n, i) => "<div class='pk-g'><b>" + esc(p.label) + " " + (i + 1) + "</b><div>" + icon.repeat(n) + "</div></div>").join("") || "<p class='ph'>No " + esc(p.label) + "s yet.</p>";
        };
        el.addEventListener("click", (e) => {
          const left = el._left;
          if (e.target.closest("[data-pkgo]")) {
            if (p.mode === "share") { if (left <= 0) return; el._hist.push(el._g.slice()); let k = left; for (let i = 0; i < el._g.length && k > 0; i++, k--) el._g[i]++; }
            else { if (left < p.size) return; el._hist.push(el._g.slice()); el._g.push(p.size); }
            upd();
          }
          if (e.target.closest("[data-pkrest]") && left > 0) { el._hist.push(el._g.slice()); el._g.push(left); upd(); }
          if (e.target.closest("[data-pkundo]") && el._hist.length) { el._g = el._hist.pop(); upd(); }
        });
        upd();
      }
    },
    // Array builder: change rows and columns; rotate to show the turnaround fact.
    array: {
      html(p, pv) {
        return (pv ? "" : "<p class='ph'>" + esc(p.hint || "Change the rows and columns to build the array.") + "</p>") + "<div class='ar-wrap'><div class='ar' data-ar></div></div>" +
          (pv ? "" : "<div class='checkrow ar-ctl'><span class='unit'>Rows</span><button class='btn' data-ar='r-'>−</button><button class='btn' data-ar='r+'>+</button>" +
            (p.fixCols ? "" : "<span class='unit'>Columns</span><button class='btn' data-ar='c-'>−</button><button class='btn' data-ar='c+'>+</button>") +
            "<button class='btn' data-ar='rot'>Rotate</button></div><p class='readout' data-arread></p>");
      },
      init(el, p) {
        el._r = p.rows || 1; el._c = p.cols || 1;
        const upd = () => {
          const g = el.querySelector("[data-ar]"); g.style.gridTemplateColumns = "repeat(" + el._c + ", 26px)";
          g.innerHTML = "<i></i>".repeat(el._r * el._c);
          const rd = el.querySelector("[data-arread]"); if (rd) rd.textContent = el._r + " row" + (el._r > 1 ? "s" : "") + " of " + el._c + (p.showTotal ? " = " + el._r * el._c : "");
        };
        el._upd = upd;
        el.addEventListener("click", (e) => {
          const b = e.target.closest("button[data-ar]"); if (!b) return;
          const a = b.dataset.ar, mx = p.max || 12;
          if (a === "r+" && el._r < mx) el._r++; if (a === "r-" && el._r > 1) el._r--;
          if (a === "c+" && el._c < mx) el._c++; if (a === "c-" && el._c > 1) el._c--;
          if (a === "rot" && !p.fixCols) [el._r, el._c] = [el._c, el._r];
          upd();
        });
        upd();
      },
      check(el, p) {
        if (p.target) { const ok = el._r === p.target[0] && el._c === p.target[1]; return { ok, msg: ok ? null : "This array is " + el._r + " rows of " + el._c + ". It needs " + p.target[0] + " rows of " + p.target[1] + "." }; }
        if (p.total) { const ok = el._r * el._c === p.total; return { ok, msg: ok ? el._r + " rows of " + el._c + " makes " + p.total + "." : "This array has " + el._r * el._c + ". It needs " + p.total + "." }; }
        return { ok: true };
      },
      reveal(el, p) { if (p.target) { el._r = p.target[0]; el._c = p.target[1]; el._upd(); } }
    },
    // Calendar: tap days to count them.
    calendar: {
      html(p, pv) {
        if (pv) return "";
        const DOW = ["S", "M", "T", "W", "T", "F", "S"];
        return "<p class='ph'>" + esc(p.hint || "Tap each day as you count.") + "</p><div class='cal-wrap'>" + p.months.map((m, mi) => {
          let h = "<div class='cal'><b>" + esc(m.name) + "</b><div class='cal-g'>" + DOW.map((d) => "<span class='cal-h'>" + d + "</span>").join("") + "<span></span>".repeat(m.start);
          for (let d = 1; d <= m.days; d++) h += "<button class='cal-d" + ((m.mark || []).includes(d) ? " mark" : "") + "' data-d='" + mi + "-" + d + "'>" + d + "</button>";
          return h + "</div></div>";
        }).join("") + "</div><p class='readout' data-calread>0 days counted</p>";
      },
      init(el) {
        el.addEventListener("click", (e) => { const b = e.target.closest(".cal-d"); if (!b) return; b.classList.toggle("on"); const n = el.querySelectorAll(".cal-d.on").length; el.querySelector("[data-calread]").textContent = n + " day" + (n === 1 ? "" : "s") + " counted"; });
      }
    },
    // Analogue clock showing a time; optionally the minute hand can be dragged (the hour hand follows).
    clock: {
      html(p) {
        let h = "<div class='clk-w'><svg viewBox='0 0 220 220' class='clk' role='img' aria-label='Analogue clock'><circle cx='110' cy='110' r='100' class='clk-f'/>";
        for (let i = 0; i < 60; i++) { const a = (i * 6 * Math.PI) / 180, r1 = i % 5 ? 92 : 86; h += "<line x1='" + (110 + r1 * Math.sin(a)) + "' y1='" + (110 - r1 * Math.cos(a)) + "' x2='" + (110 + 98 * Math.sin(a)) + "' y2='" + (110 - 98 * Math.cos(a)) + "' class='clk-t" + (i % 5 ? "" : " big") + "'/>"; }
        for (let n = 1; n <= 12; n++) { const a = (n * 30 * Math.PI) / 180; h += "<text x='" + (110 + 72 * Math.sin(a)) + "' y='" + (110 - 72 * Math.cos(a) + 7) + "' class='clk-n'>" + n + "</text>"; }
        if (p.h24) for (let n = 1; n <= 12; n++) { const a = (n * 30 * Math.PI) / 180; h += "<text x='" + (110 + 50 * Math.sin(a)) + "' y='" + (110 - 50 * Math.cos(a) + 5) + "' class='clk-n24'>" + (n === 12 ? "00" : n + 12) + "</text>"; }
        return h + "<line class='clk-hh' x1='110' y1='110' x2='110' y2='60'/><line class='clk-mh' x1='110' y1='110' x2='110' y2='30'/><circle cx='110' cy='110' r='6' class='clk-c'/></svg></div>" + (p.drag ? "<p class='ph'>Drag the long hand to move the time.</p>" : "");
      },
      init(el, p) {
        const svg = el.querySelector("svg"), hh = svg.querySelector(".clk-hh"), mh = svg.querySelector(".clk-mh");
        const set = (mins) => { el._m = ((mins % 720) + 720) % 720; const ma = (el._m % 60) * 6, ha = (el._m / 60) * 30;
          const pt = (a, r) => [110 + r * Math.sin((a * Math.PI) / 180), 110 - r * Math.cos((a * Math.PI) / 180)];
          const [mx, my] = pt(ma, 80), [hx, hy] = pt(ha, 52); mh.setAttribute("x2", mx); mh.setAttribute("y2", my); hh.setAttribute("x2", hx); hh.setAttribute("y2", hy); };
        const [H, M] = String(p.time || "12:00").split(":").map(Number); set((H % 12) * 60 + M);
        if (p.drag) {
          let last = null;
          svg.addEventListener("pointerdown", (e) => {
            e.preventDefault(); svg.setPointerCapture(e.pointerId);
            const mv = (ev) => { const r = svg.getBoundingClientRect(), x = ev.clientX - r.left - r.width / 2, y = ev.clientY - r.top - r.height / 2; let a = (Math.atan2(x, -y) * 180) / Math.PI; if (a < 0) a += 360; const m = Math.round(a / 6) % 60; let base = Math.floor(el._m / 60) * 60; if (last != null) { if (last > 45 && m < 15) base += 60; if (last < 15 && m > 45) base -= 60; } last = m; set(base + m); };
            mv(e); const up = () => { svg.removeEventListener("pointermove", mv); svg.removeEventListener("pointerup", up); last = null; };
            svg.addEventListener("pointermove", mv); svg.addEventListener("pointerup", up);
          });
        }
      }
    },
    // Number chart puzzle: a piece of a hundred chart with some numbers missing.
    cells: {
      html(p, pv) {
        let h = "<div class='cells' style='grid-template-columns:repeat(" + p.cols + ", minmax(0, " + (p.w || 64) + "px))'>"; let k = 0;
        p.grid.forEach((row) => row.forEach((c) => {
          if (c === null) h += "<span></span>";
          else if (typeof c === "number") h += "<span class='cell given'>" + c + "</span>";
          else if (typeof c === "string") h += "<span class='cell given" + (c.startsWith("#") ? " head" : "") + "'>" + fmt(c.replace(/^#/, "")) + "</span>";
          else h += "<input class='inp cell' data-f='" + k++ + "' inputmode='" + (p.free ? "text" : "numeric") + "' autocomplete='off' aria-label='Missing number'" + (pv ? " disabled" : "") + ">";
        }));
        return h + "</div>";
      },
      check(el, p) {
        const want = []; p.grid.forEach((row) => row.forEach((c) => { if (c && typeof c === "object") want.push(c.v); }));
        let all = true, filled = true;
        el.querySelectorAll("input.cell").forEach((inp, i) => { inp.classList.remove("ok", "no"); if (!inp.value.trim()) { filled = false; return; } const n = parseNum(inp.value), ok = n != null && close(n, want[i]); inp.classList.add(ok ? "ok" : "no"); if (!ok) all = false; });
        return filled ? { ok: all, msg: all ? null : p.msg || "Remember: down a row adds 10, across adds 1." } : { ok: null, msg: "Fill in every box first." };
      }
    },
    // Quarter turns: turn the shape and build the repeating pattern.
    turns: {
      html(p, pv) {
        if (pv) return "";
        return "<div class='tn-row' data-tn></div><div class='checkrow'><button class='btn' data-tngo>" + esc(p.button || "Quarter turn clockwise") + "</button><button class='btn' data-tnclear>Start again</button></div>";
      },
      init(el, p) {
        const arrow = "<svg viewBox='0 0 100 100' class='tn-s'><polygon points='50,8 88,50 64,50 64,92 36,92 36,50 12,50' /></svg>";
        el._k = [0];
        const upd = () => { el.querySelector("[data-tn]").innerHTML = el._k.map((d) => "<span class='tn-i' style='transform:rotate(" + d + "deg)'>" + arrow + "</span>").join(""); };
        el.addEventListener("click", (e) => {
          if (e.target.closest("[data-tngo]") && el._k.length < 12) { el._k.push(el._k[el._k.length - 1] + (p.step || 90)); upd(); }
          if (e.target.closest("[data-tnclear]")) { el._k = [0]; upd(); }
        });
        upd();
      }
    },
    // Tap to reveal: the class answers aloud first, then the teacher reveals each answer.
    reveal: {
      html(p, pv) {
        return "<div class='rv'>" + p.items.map((it, i) => "<div class='rv-i'><span class='rv-q'>" + fmt(it[0]) + "</span>" +
          (pv ? "" : "<button class='btn rv-b' data-rv='" + i + "'>" + esc(p.button || "Reveal") + "</button><span class='rv-a' data-rva='" + i + "' hidden>" + fmt(it[1] === "words" ? numWords(parseNum(it[0])) : it[1]) + "</span>") + "</div>").join("") + "</div>";
      },
      init(el) { el.addEventListener("click", (e) => { const b = e.target.closest("[data-rv]"); if (!b) return; const a = el.querySelector("[data-rva='" + b.dataset.rv + "']"); a.hidden = !a.hidden; b.textContent = a.hidden ? "Reveal" : "Hide"; }); },
      reveal(el) { el.querySelectorAll("[data-rva]").forEach((a) => (a.hidden = false)); }
    },
    // Group: tap two or more numbers, then Group them, to show regrouping strategies.
    group: {
      html(p, pv) {
        return (pv ? "" : "<p class='ph'>Tap numbers, then press Group to join them. Tap a grouped number to undo its group.</p>") +
          "<div class='gp'>" + p.items.map((it, i) => (i ? "<span class='gp-op'>" + esc(p.op || "+") + "</span>" : "") + "<button class='gp-n' data-g='" + i + "'" + (pv ? " disabled" : "") + ">" + fmt(String(it)) + "</button>").join("") + "</div>" +
          (pv ? "" : "<div class='checkrow'><button class='btn' data-gpgo>Group</button><button class='btn' data-gpclear>Clear groups</button></div>");
      },
      init(el) {
        const COLS = ["#2F6FE4", "#F2994A", "#22A06B", "#D6408B", "#8A3CC4"];
        let next = 0;
        el.addEventListener("click", (e) => {
          const n = e.target.closest(".gp-n");
          if (n) {
            if (n.dataset.grp) { const g = n.dataset.grp; el.querySelectorAll(".gp-n[data-grp='" + g + "']").forEach((x) => { delete x.dataset.grp; x.style.borderColor = ""; x.style.background = ""; }); return; }
            n.classList.toggle("sel"); return;
          }
          if (e.target.closest("[data-gpgo]")) {
            const sel = [...el.querySelectorAll(".gp-n.sel")]; if (sel.length < 2) return;
            const c = COLS[next++ % COLS.length];
            sel.forEach((x) => { x.classList.remove("sel"); x.dataset.grp = next; x.style.borderColor = c; x.style.background = c + "22"; });
          }
          if (e.target.closest("[data-gpclear]")) el.querySelectorAll(".gp-n").forEach((x) => { delete x.dataset.grp; x.classList.remove("sel"); x.style.borderColor = ""; x.style.background = ""; });
        });
      }
    },
    // Number sentences: each box takes a sentence such as 18 x 10; each must make the target.
    expr: {
      html(p, pv) {
        if (pv) return "";
        let h = "<div class='fields'>";
        for (let i = 0; i < p.count; i++) h += "<label class='field'><input class='inp wide expr-inp' data-f='" + i + "' placeholder='" + esc(p.placeholder || "e.g. 10 x 18") + "' autocomplete='off' aria-label='Number sentence " + (i + 1) + "'" + (pv ? " disabled" : "") + "><span class='unit'>= " + fmtN(p.target) + "</span></label>";
        return h + "</div>";
      },
      check(el, p) {
        const seen = new Set(); let all = true, n = 0, why = null;
        el.querySelectorAll(".inp").forEach((inp) => {
          inp.classList.remove("ok", "no"); const v = inp.value.trim(); if (!v) return; n++;
          const val = evalExpr(v), key = v.replace(/\s/g, "").toLowerCase();
          let ok = val != null && close(val, p.target);
          if (ok && p.mustUse && !new RegExp(p.mustUse.re).test(v)) { ok = false; why = p.mustUse.msg; }
          if (ok && seen.has(key)) { ok = false; why = "Each number sentence needs to be different."; }
          seen.add(key); inp.classList.add(ok ? "ok" : "no"); if (!ok) all = false;
        });
        if (n < (p.min || p.count)) return { ok: null, msg: "Write " + (p.min || p.count) + " number sentences." };
        return { ok: all, msg: all ? null : why };
      }
    },
    // Place value chart: counters in columns, with trades to show standard and non-standard partitions.
    pv: {
      start(p) {
        const cols = p.cols.map((k) => PV[k]), c = cols.map(() => 0);
        if (typeof p.start === "number") { let rest = Math.round(p.start * 1000); cols.forEach((col, i) => { c[i] = Math.floor(rest / col.m); rest -= c[i] * col.m; }); }
        else if (p.start) cols.forEach((col, i) => { c[i] = p.start[p.cols[i]] || 0; });
        return c;
      },
      html(p, pv) {
        const cols = p.cols.map((k) => PV[k]), c0 = W.pv.start(p);
        const cell = (c, i) => {
          let t = "<td><div class='pv-n' data-n='" + i + "'>" + c0[i] + "</div><div class='pv-dots' data-dots='" + i + "'>" + "<i></i>".repeat(Math.min(c0[i], 30)) + "</div>";
          if (!pv) {
            t += "<div class='pv-pm'><button class='pv-b' data-pv='-' data-i='" + i + "' aria-label='Take one " + c.name + "'>−</button><button class='pv-b' data-pv='+' data-i='" + i + "' aria-label='Add one " + c.name + "'>+</button></div><div class='pv-tr'>";
            if (i > 0) t += "<button class='pv-t' data-pv='group' data-i='" + i + "' title='Group 10 into 1 of the column to the left'>← group 10</button>";
            if (i < cols.length - 1) t += "<button class='pv-t' data-pv='break' data-i='" + i + "' title='Break 1 into 10 of the column to the right'>break 1 →</button>";
            t += "</div>";
          }
          return t + "</td>";
        };
        const hs = pvHouses(p), cls = (i) => {
          const k = [];
          if (p.cols[i] === "t" && i > 0) k.push("pv-dec");
          if (hs && i > 0 && PV_HOUSE[p.cols[i]][0] !== PV_HOUSE[p.cols[i - 1]][0]) k.push("pv-hs");
          if (hs) k.push("pv-h-" + PV_HOUSE[p.cols[i]][0].toLowerCase());
          return k.length ? " class='" + k.join(" ") + "'" : "";
        };
        let head = "<tr>" + cols.map((c, i) => "<th" + cls(i) + ">" + c.name + "</th>").join("") + "</tr>";
        if (hs) head = "<tr class='pv-houses'>" + hs.map((g, gi) => "<th colspan='" + g.cols.length + "' class='pv-house pv-h-" + g.name.toLowerCase() + (gi ? " pv-hs" : "") + "'>" + g.name + "</th>").join("") + "</tr>" +
          "<tr class='pv-hto'>" + cols.map((c, i) => "<th" + cls(i) + " title='" + c.name + "'>" + PV_HOUSE[p.cols[i]][1] + "</th>").join("") + "</tr>";
        let h = (p.hint && !pv ? "<p class='ph'>" + esc(p.hint) + "</p>" : "") + "<div class='pvw'><table class='pv" + (hs ? " pv-housed" : "") + "'>" + head + "<tr>" + cols.map((c, i) => cell(c, i).replace(/^<td>/, "<td" + cls(i) + ">")).join("") + "</tr>" +
          (hs && !pv ? "<tr class='pv-read' data-pvread hidden>" + hs.map((g, gi) => "<td colspan='" + g.cols.length + "' class='pv-h-" + g.name.toLowerCase() + (gi ? " pv-hs" : "") + "' data-hread='" + gi + "'></td>").join("") + "</tr>" : "") + "</table></div>";
        if (!pv && p.shift) h += "<div class='checkrow'><button class='btn primary-soft' data-pvshift='1'>× 10</button><button class='btn primary-soft' data-pvshift='-1'>÷ 10</button><button class='btn' data-pvreset>Reset chart</button><span class='readout' data-pvmult></span></div>";
        if (!pv) h += "<p class='pv-expr' data-expr></p><div class='checkrow'>" + (pvHouses(p) ? "<button class='btn' data-pvhouses aria-pressed='false'>Read each house</button>" : "") + "<button class='btn' data-pvtotal aria-pressed='false'>Show the number</button><span class='pv-total' data-total hidden></span></div>";
        return h;
      },
      init(el, p) {
        const cols = p.cols.map((k) => PV[k]), unit = PV[p.cols[p.cols.length - 1]].m;
        const c = W.pv.start(p);
        el._c = c; const c0 = c.slice(); el._m = 0;
        const total = () => el._c.reduce((s, n, i) => s + n * cols[i].m, 0) / 1000;
        el._total = total;
        const upd = () => {
          el._c.forEach((n, i) => {
            el.querySelector("[data-n='" + i + "']").textContent = n;
            el.querySelector("[data-dots='" + i + "']").innerHTML = "<i></i>".repeat(Math.min(n, 30)) + (n > 30 ? "<span>…</span>" : "");
          });
          const parts = el._c.map((n, i) => n ? n + " " + (n === 1 ? cols[i].name.replace(/s$/, "") : cols[i].name).toLowerCase() : "").filter(Boolean);
          const ex = el.querySelector("[data-expr]"); if (ex) ex.textContent = parts.length ? parts.join(" + ") : "Use + to add counters.";
          const t = el.querySelector("[data-total]"); if (t) t.textContent = "= " + fmtN(total());
          const hs = pvHouses(p);
          if (hs) hs.forEach((g, gi) => { const v = g.cols.reduce((a, i) => a + el._c[i] * cols[i].m, 0) / 1000 / g.unit, td = el.querySelector("[data-hread='" + gi + "']"); if (td) td.textContent = fmtN(v) + (g.word ? " " + g.word : ""); });
          const m = el.querySelector("[data-pvmult]"); if (m) m.textContent = el._m ? (el._m > 0 ? "× " : "÷ ") + fmtN(Math.pow(10, Math.abs(el._m))) + " — every digit moved " + Math.abs(el._m) + " place" + (Math.abs(el._m) > 1 ? "s" : "") + (el._m > 0 ? " left" : " right") : "";
        };
        el._upd = upd;
        el.addEventListener("click", (e) => {
          const b = e.target.closest("[data-pv]"), tt = e.target.closest("[data-pvtotal]");
          const hb = e.target.closest("[data-pvhouses]");
          if (hb) { const on = hb.getAttribute("aria-pressed") !== "true"; hb.setAttribute("aria-pressed", on); el.querySelector("[data-pvread]").hidden = !on; hb.textContent = on ? "Hide the houses" : "Read each house"; return; }
          if (tt) { const on = tt.getAttribute("aria-pressed") !== "true"; tt.setAttribute("aria-pressed", on); el.querySelector("[data-total]").hidden = !on; tt.textContent = on ? "Hide the number" : "Show the number"; return; }
          const sh = e.target.closest("[data-pvshift]");
          if (sh) { const d = +sh.dataset.pvshift, k = el._c;
            if (d > 0 ? k[0] : k[k.length - 1]) { el.querySelector("[data-pvmult]").textContent = "There's no column for that digit to move into."; return; }
            el._c = d > 0 ? k.slice(1).concat(0) : [0].concat(k.slice(0, -1)); el._m += d; upd(); return; }
          if (e.target.closest("[data-pvreset]")) { el._c = c0.slice(); el._m = 0; upd(); return; }
          if (!b) return;
          const i = +b.dataset.i, a = b.dataset.pv, k = el._c;
          if (a === "+") k[i]++;
          else if (a === "-" && k[i] > 0) k[i]--;
          else if (a === "break" && k[i] > 0) { k[i]--; k[i + 1] += 10; }
          else if (a === "group" && k[i] >= 10) { k[i] -= 10; k[i - 1]++; }
          upd();
        });
        void unit; upd();
      },
      check(el, p) {
        if (p.target == null) return { ok: true };
        const t = el._total(), c = el._c, ok = close(t, p.target), ns = c.some((n) => n > 9);
        if (!ok) return { ok: false, msg: "The chart shows " + fmtN(t) + ". It needs to make " + fmtN(p.target) + "." };
        if (p.need === "nonstandard" && !ns) return { ok: false, msg: "That's the standard partition. Break apart a counter to make a non-standard one." };
        if (p.need === "standard" && ns) return { ok: false, msg: "Group any column with 10 or more to show the standard partition." };
        return { ok: true, msg: "It makes " + fmtN(p.target) + "." };
      }
    },
    // Area grid: tap each square in the shape to number it as you count.
    areagrid: {
      html(p, pv) {
        const rows = p.cells.length, cols = p.cells[0].length;
        let h = (pv ? "" : "<p class='ph'>Tap each square as you count it.</p>") + "<div class='ag' style='grid-template-columns:repeat(" + cols + ",1fr);max-width:" + cols * (pv ? 34 : p.size || 64) + "px'>";
        p.cells.forEach((row, r) => [...row].forEach((ch, c) => { h += ch === "1" ? "<button class='ag-c in' data-c='" + r + "-" + c + "'" + (pv ? " disabled" : "") + " aria-label='Square'></button>" : "<span class='ag-c'></span>"; }));
        return h + "</div>" + (pv ? "" : "<p class='readout' data-agread>0 squares counted</p>");
      },
      init(el, p) {
        el._order = [];
        const upd = () => {
          el.querySelectorAll(".ag-c.in").forEach((b) => { const k = el._order.indexOf(b.dataset.c); b.textContent = k >= 0 ? k + 1 : ""; b.classList.toggle("on", k >= 0); });
          el.querySelector("[data-agread]").textContent = el._order.length + " square" + (el._order.length === 1 ? "" : "s") + " counted";
        };
        el._upd = upd;
        el.addEventListener("click", (e) => { const b = e.target.closest(".ag-c.in"); if (!b) return; const k = el._order.indexOf(b.dataset.c); k >= 0 ? el._order.splice(k, 1) : el._order.push(b.dataset.c); upd(); });
        upd();
      },
      reveal(el) { el._order = [...el.querySelectorAll(".ag-c.in")].map((b) => b.dataset.c); el._upd(); }
    },
    // Angle maker: drag the arm; the class sees how it compares with a right angle.
    angle: {
      html(p, pv) {
        if (pv) return "";
        return (p.label ? "<p class='part-h'>" + fmt(p.label) + "</p>" : "") + "<div class='angw'><svg viewBox='0 0 340 230' class='ang' role='img' aria-label='Angle maker. Drag the blue arm.'>" +
          "<path class='ang-arc' d=''/><path class='ang-sq' d='' /><line class='ang-arm' x1='60' y1='190' x2='300' y2='190'/><line class='ang-arm move' x1='60' y1='190' x2='60' y2='30'/><circle class='ang-v' cx='60' cy='190' r='6'/><circle class='ang-h' r='14' cx='60' cy='30'/></svg></div>" +
          "<p class='readout' data-angread></p>" + (p.lengthen ? "<div class='checkrow'><button class='btn' data-anglen aria-pressed='false'>Make the arms longer</button></div>" : "");
      },
      init(el, p) {
        const svg = el.querySelector("svg"), arm = svg.querySelector(".move"), h = svg.querySelector(".ang-h"), arc = svg.querySelector(".ang-arc"), sq = svg.querySelector(".ang-sq");
        // The vertex sits in the middle so the arm stays in view at every angle, up to a full turn.
        let L = p.reflex ? 105 : 140; const vx = 170, vy = p.reflex ? 125 : 175, fixed = svg.querySelector(".ang-arm:not(.move)");
        svg.setAttribute("viewBox", "0 0 340 " + (p.reflex ? 250 : 200));
        fixed.setAttribute("x1", vx); fixed.setAttribute("y1", vy); fixed.setAttribute("x2", vx + L); fixed.setAttribute("y2", vy); arm.setAttribute("x1", vx); arm.setAttribute("y1", vy); svg.querySelector(".ang-v").setAttribute("cx", vx); svg.querySelector(".ang-v").setAttribute("cy", vy);
        const set = (deg) => {
          deg = Math.max(5, Math.min(p.reflex ? 360 : 180, deg)); for (const snap of [90, 180, 270, 360]) if (Math.abs(deg - snap) < 4) deg = snap;
          el._deg = deg; const r = (deg * Math.PI) / 180, x = vx + L * Math.cos(r), y = vy - L * Math.sin(r);
          arm.setAttribute("x2", x); arm.setAttribute("y2", y); h.setAttribute("cx", x); h.setAttribute("cy", y);
          const R = 40, ax = vx + R * Math.cos(r), ay = vy - R * Math.sin(r);
          arc.setAttribute("d", deg === 90 ? "" : deg >= 360 ? "M " + (vx + R) + " " + vy + " A " + R + " " + R + " 0 1 0 " + (vx - R) + " " + vy + " A " + R + " " + R + " 0 1 0 " + (vx + R) + " " + vy : "M " + (vx + R) + " " + vy + " A " + R + " " + R + " 0 " + (deg > 180 ? 1 : 0) + " 0 " + ax + " " + ay);
          sq.setAttribute("d", deg === 90 ? "M " + (vx + 22) + " " + vy + " L " + (vx + 22) + " " + (vy - 22) + " L " + vx + " " + (vy - 22) : "");
          if (p.names) { const n = angleName(deg); el.querySelector("[data-angread]").textContent = "This is " + (/^[aeiou]/.test(n) ? "an " : "a ") + n + " angle" + (p.degrees ? " (" + Math.round(deg) + "°)" : "") + "."; return; }
          el.querySelector("[data-angread]").textContent = "This angle is " + angleWord(deg).replace(/^A /, "a ").replace(/^L/, "l").replace(/^G/, "g") + (p.degrees ? " (" + Math.round(deg) + "°)" : "") + ".";
        };
        el._set = set;
        const pt = (e) => { const r = svg.getBoundingClientRect(), sx = 340 / r.width; return [(e.clientX - r.left) * sx, (e.clientY - r.top) * sx]; };
        svg.addEventListener("pointerdown", (e) => {
          e.preventDefault(); svg.setPointerCapture(e.pointerId);
          const mv = (ev) => { const [x, y] = pt(ev); let d = (Math.atan2(vy - y, x - vx) * 180) / Math.PI; if (p.reflex && d < 0) d += 360; if (p.reflex && el._deg > 300 && d < 60) d = 360; else if (!p.reflex && d < -90) d = 180; set(d); };
          mv(e);
          const up = () => { svg.removeEventListener("pointermove", mv); svg.removeEventListener("pointerup", up); };
          svg.addEventListener("pointermove", mv); svg.addEventListener("pointerup", up);
        });
        el.addEventListener("click", (e) => { const b = e.target.closest("[data-anglen]"); if (!b) return; const on = b.getAttribute("aria-pressed") !== "true"; b.setAttribute("aria-pressed", on); b.textContent = on ? "Make the arms shorter" : "Make the arms longer"; L = on ? 150 : 85; fixed.setAttribute("x2", vx + L); set(el._deg); });
        if (p.lengthen) { L = 85; fixed.setAttribute("x2", vx + L); }
        set(p.start || 120);
      },
      check(el, p) {
        if (!p.target) return { ok: true };
        if (p.names) { const n = angleName(el._deg), ok = n === p.target; return { ok, msg: ok ? null : "That is " + (/^[aeiou]/.test(n) ? "an " : "a ") + n + " angle. Try to make " + (/^[aeiou]/.test(p.target) ? "an " : "a ") + p.target + " angle." }; }
        const w = angleKey(el._deg), ok = w === p.target;
        return { ok, msg: ok ? null : "That angle is " + angleWord(el._deg).toLowerCase() + ". " + { less: "Make it smaller than a right angle.", right: "Make a right angle, like the corner of a book.", greater: "Open it wider than a right angle." }[p.target] };
      },
      reveal(el, p) { if (p.target) el._set({ less: 50, right: 90, greater: 130, acute: 50, obtuse: 130, straight: 180, reflex: 250, revolution: 360 }[p.target]); }
    },
    // Number chart: tap the numbers that belong (factors, multiples…).
    numchart: {
      html(p, pv) {
        if (pv) return "";
        let h = (p.hint ? "<p class='ph'>" + esc(p.hint) + "</p>" : "") + "<div class='nc'>";
        for (let n = p.from; n <= p.to; n++) h += "<button class='nc-n' data-n='" + n + "' aria-pressed='false'>" + n + "</button>";
        return h + "</div>";
      },
      init(el) { el.addEventListener("click", (e) => { const b = e.target.closest(".nc-n"); if (!b) return; b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"); el.querySelectorAll(".nc-n").forEach((x) => x.classList.remove("ok", "no", "miss")); }); },
      check(el, p) {
        const on = [...el.querySelectorAll(".nc-n[aria-pressed='true']")].map((b) => +b.dataset.n);
        if (!on.length) return { ok: null, msg: "Tap the numbers first." };
        let all = true;
        el.querySelectorAll(".nc-n").forEach((b) => {
          const n = +b.dataset.n, want = p.answer.includes(n), got = on.includes(n);
          if (got) b.classList.add(want ? "ok" : "no");
          if (want !== got) all = false;
        });
        const missing = p.answer.filter((n) => !on.includes(n)).length;
        return { ok: all, msg: all ? null : missing ? "Some are missing. Think in pairs: if one number works, what does it pair with?" : "The red ones don't belong." };
      },
      reveal(el, p) { el.querySelectorAll(".nc-n").forEach((b) => { const on = p.answer.includes(+b.dataset.n); b.setAttribute("aria-pressed", on); b.classList.toggle("ok", on); }); }
    },
    // Shop: tap items into the basket. The total stays hidden until the class has worked it out.
    shop: {
      html(p, pv) {
        const cards = "<div class='shop'>" + p.items.map((it, i) => "<button class='shop-i' data-i='" + i + "' aria-pressed='false'" + (pv ? " disabled" : "") + "><span>" + esc(it[0]) + "</span><b>$" + it[1].toFixed(2) + "</b></button>").join("") + "</div>";
        if (pv) return cards;
        return "<p class='ph'>" + esc(p.hint || (p.pick ? "Tap " + p.pick + " items to put them in the basket." : "Tap items to put them in the basket.")) + "</p>" + cards +
          "<p class='shop-basket' data-basket>Basket: empty</p><div class='checkrow'><button class='btn' data-shoptotal aria-pressed='false'>Show the total</button><span class='pv-total' data-stotal hidden></span></div>";
      },
      init(el, p) {
        const upd = () => {
          const on = [...el.querySelectorAll(".shop-i[aria-pressed='true']")].map((b) => p.items[+b.dataset.i]);
          el._sum = on.reduce((s, it) => s + it[1], 0); el._n = on.length;
          el.querySelector("[data-basket]").textContent = "Basket: " + (on.length ? on.map((it) => it[0]).join(", ") : "empty");
          el.querySelector("[data-stotal]").textContent = "$" + el._sum.toFixed(2) + (p.budget ? (el._sum <= p.budget ? " — $" + (p.budget - el._sum).toFixed(2) + " left from $" + p.budget : " — $" + (el._sum - p.budget).toFixed(2) + " over budget") : "");
        };
        el._sum = 0; el._n = 0;
        el.addEventListener("click", (e) => {
          const b = e.target.closest(".shop-i");
          if (b) { b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true"); upd(); return; }
          const t = e.target.closest("[data-shoptotal]");
          if (t) { const on = t.getAttribute("aria-pressed") !== "true"; t.setAttribute("aria-pressed", on); el.querySelector("[data-stotal]").hidden = !on; t.textContent = on ? "Hide the total" : "Show the total"; }
        });
        upd();
      },
      check(el, p) {
        if (!el._n) return { ok: null, msg: "Put some items in the basket first." };
        if (p.pick && el._n !== p.pick) return { ok: false, msg: "Choose exactly " + p.pick + " items." };
        if (p.budget && el._sum > p.budget) return { ok: false, msg: "That's over the budget. Swap an item for a cheaper one." };
        return { ok: true, msg: "Total: $" + el._sum.toFixed(2) + (p.budget ? ", $" + (p.budget - el._sum).toFixed(2) + " left." : ".") };
      }
    },
    // Tap each side of a shape to mark it as counted. Lengths are left for the class to add.
    sides: {
      html(p, pv) {
        const pts = p.poly, n = pts.length;
        let svg = "<svg viewBox='0 0 " + p.view[0] + " " + p.view[1] + "' role='img' aria-label='" + esc(p.label || "Shape with sides to tap") + "'>" +
          "<polygon points='" + pts.map((q) => q.join(",")).join(" ") + "' fill='" + (p.fill || "#FFDF5D") + "'/>";
        for (let i = 0; i < n; i++) {
          const [a, b] = [pts[i], pts[(i + 1) % n]], seg = "x1='" + a[0] + "' y1='" + a[1] + "' x2='" + b[0] + "' y2='" + b[1] + "'";
          svg += "<g class='sd' data-sd='" + i + "'><line " + seg + " class='sd-hit'/><line " + seg + " class='sd-line'/></g>";
        }
        // Dimension arrows show exactly which length each label measures.
        const head = (x, y, dx, dy) => { const L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, w = 6, h = 11;
          return "<polygon class='sd-dimh' points='" + x + "," + y + " " + (x - ux * h - uy * w) + "," + (y - uy * h + ux * w) + " " + (x - ux * h + uy * w) + "," + (y - uy * h - ux * w) + "'/>"; };
        svg += (p.dims || []).map((d) => { const [x1, y1] = d.from, [x2, y2] = d.to;
          return "<line class='sd-dim' x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "'/>" + head(x2, y2, x2 - x1, y2 - y1) + head(x1, y1, x1 - x2, y1 - y2); }).join("");
        svg += (p.labels || []).map((l) => "<text x='" + l.x + "' y='" + l.y + "' text-anchor='" + (l.anchor || "middle") + "' class='sd-lab" + (l.halo ? " halo" : "") + "'>" + esc(l.t) + "</text>").join("") + "</svg>";
        return (pv ? "" : "<p class='ph'>Tap each side as you count it. It turns green.</p>") + "<div class='cl-pic sd-pic'>" + svg + "</div>" +
          (pv ? "" : "<p class='readout' data-sdread>0 of " + n + " sides marked</p>");
      },
      init(el, p) {
        const upd = () => { const k = el.querySelectorAll(".sd.on").length; el.querySelector("[data-sdread]").textContent = k + " of " + p.poly.length + " sides marked" + (k === p.poly.length ? " ✓ every side counted" : ""); };
        el._upd = upd;
        el.addEventListener("click", (e) => { const g = e.target.closest(".sd"); if (!g) return; g.classList.toggle("on"); upd(); });
      },
      reveal(el) { el.querySelectorAll(".sd").forEach((g) => g.classList.add("on")); el._upd(); }
    },
    // Tap-to-sort: choose a category, then tap shapes in the picture to colour them.
    classify: {
      html(p, pv) {
        const shape = (s, i) => {
          const fill = s.fill || "#A3A6AC", attrs = " data-s='" + i + "' fill='" + fill + "' class='cl-shape'";
          let el = s.circle ? "<circle cx='" + s.circle[0] + "' cy='" + s.circle[1] + "' r='" + s.circle[2] + "'" + attrs + "/>" : "<polygon points='" + s.p + "'" + attrs + "/>";
          return el + (s.deco || "");
        };
        const svg = "<div class='cl-pic'><svg viewBox='0 0 " + p.view[0] + " " + p.view[1] + "' role='img' aria-label='" + esc(p.label || "Shapes to sort") + "'>" +
          (p.bg ? "<rect width='" + p.view[0] + "' height='" + p.view[1] + "' rx='6' fill='" + p.bg + "'/>" : "") + p.shapes.map(shape).join("") + "</svg></div>";
        const cats = "<div class='cl-cats' role='group' aria-label='Categories'>" + p.cats.map((c, i) =>
          "<button class='cl-cat' data-cat='" + i + "' aria-pressed='" + (i === 0 && !pv) + "' style='--k:" + c.c + "'" + (pv ? " disabled" : "") + "><i></i>" + fmt(c.t) + "<b data-tally='" + i + "'>" + (p.total ? fmt("[0/" + p.total + "]") : "0") + "</b></button>").join("") + "</div>";
        return (pv ? "" : "<p class='ph'>" + esc(p.hint || "Choose a group, then tap each shape that belongs in it. Tap a shape again to take it out.") + "</p>") + cats + svg;
      },
      init(el, p) {
        el._paint = {};
        const upd = () => {
          p.cats.forEach((c, i) => { const n = Object.values(el._paint).filter((v) => v === i).length; el.querySelector("[data-tally='" + i + "']").innerHTML = p.total ? fmt("[" + n + "/" + p.total + "]") : n; });
          el.querySelectorAll(".cl-shape").forEach((s) => {
            const v = el._paint[s.dataset.s], sh = p.shapes[+s.dataset.s];
            s.classList.remove("ok", "no");
            if (v == null) { s.setAttribute("fill", sh.fill || "#A3A6AC"); s.style.stroke = ""; }
            else if (p.mark === "outline") { s.setAttribute("fill", sh.fill || "#A3A6AC"); s.style.stroke = p.cats[v].c; }
            else { s.setAttribute("fill", p.cats[v].c); s.style.stroke = ""; }
            s.classList.toggle("painted", v != null);
          });
        };
        el._upd = upd;
        el.addEventListener("click", (e) => {
          const cat = e.target.closest(".cl-cat");
          if (cat) { el.querySelectorAll(".cl-cat").forEach((b) => b.setAttribute("aria-pressed", b === cat)); return; }
          const s = e.target.closest(".cl-shape"); if (!s) return;
          const cur = +el.querySelector(".cl-cat[aria-pressed='true']").dataset.cat, k = s.dataset.s;
          el._paint[k] === cur ? delete el._paint[k] : (el._paint[k] = cur);
          upd();
        });
      },
      check(el, p) {
        if (!Object.keys(el._paint).length) return { ok: null, msg: "Tap the shapes to sort them first." };
        let all = true;
        el._upd();
        el.querySelectorAll(".cl-shape").forEach((s) => {
          const want = p.shapes[+s.dataset.s].a, got = el._paint[s.dataset.s];
          const ok = want == null ? got == null : got === p.cats.findIndex((c) => c.k === want);
          if (!ok) all = false;
          if (got != null || want != null) s.classList.add(ok ? "ok" : "no");
        });
        return { ok: all, msg: all ? null : "The shapes with a red dashed outline need another look." };
      },
      reveal(el, p) {
        el._paint = {};
        p.shapes.forEach((s, i) => { if (s.a != null) el._paint[i] = p.cats.findIndex((c) => c.k === s.a); });
        el._upd();
      }
    },
    sketch: {
      html(p, pv) { return pv ? "" : "<div class='sketch' data-sketch><canvas></canvas></div><div class='checkrow'><button class='btn' data-clear>Clear drawing</button></div>"; },
      init(el, p) {
        const box = el.querySelector("[data-sketch]"), cv = box.querySelector("canvas"), ctx = cv.getContext("2d");
        const ink = getComputedStyle(document.body).color, faint = getComputedStyle(document.documentElement).getPropertyValue("--line");
        const setup = () => {
          const r = box.getBoundingClientRect(), d = window.devicePixelRatio || 1;
          cv.width = r.width * d; cv.height = r.height * d; ctx.setTransform(d, 0, 0, d, 0, 0);
          if (p.bgimg && el._bg && el._bg.complete) { const im = el._bg, sc = Math.min(r.width / im.naturalWidth, r.height / im.naturalHeight); ctx.drawImage(im, (r.width - im.naturalWidth * sc) / 2, (r.height - im.naturalHeight * sc) / 2, im.naturalWidth * sc, im.naturalHeight * sc); }
          if (p.shape) { ctx.fillStyle = p.shapeFill || "rgba(112,48,160,.25)"; ctx.strokeStyle = p.shapeStroke || "#7030A0"; ctx.lineWidth = 3; const sc = Math.min(r.width / p.shape.view[0], r.height / p.shape.view[1]), ox = (r.width - p.shape.view[0] * sc) / 2, oy = (r.height - p.shape.view[1] * sc) / 2; ctx.beginPath(); p.shape.pts.forEach(([x, y], k) => (k ? ctx.lineTo : ctx.moveTo).call(ctx, ox + x * sc, oy + y * sc)); ctx.closePath(); ctx.fill(); ctx.stroke(); }
          if (p.grid === "square") { ctx.strokeStyle = faint; ctx.lineWidth = 1; for (let x = 0; x < r.width; x += 36) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, r.height); ctx.stroke(); } for (let y = 0; y < r.height; y += 36) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(r.width, y); ctx.stroke(); } }
          if (p.grid === "triangle") { ctx.fillStyle = faint; const s = 36, h = s * 0.866; for (let y = 10, row = 0; y < r.height; y += h, row++) for (let x = (row % 2) * s / 2 + 10; x < r.width; x += s) { ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill(); } }
          ctx.strokeStyle = ink; ctx.lineWidth = 4; ctx.lineCap = "round"; ctx.lineJoin = "round";
        };
        if (p.bgimg) { el._bg = new Image(); el._bg.onload = setup; el._bg.src = p.bgimg; }
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
    if (k.includes("numberline") || k.includes("marker") || k.includes("jumps") || k.includes("angle")) return [ICON.drag, "Drag"];
    if (k.includes("sketch")) return [ICON.draw, "Draw"];
    if (k.some((x) => ["choose", "select", "order", "balance", "shade", "stack", "classify", "sides", "pv", "areagrid", "numchart", "shop", "reveal", "group", "pack", "array", "calendar", "cells", "turns", "clock", "coins", "combos", "gridref", "corners", "plane", "mirror", "bar", "fold", "scale", "bargraph"].includes(x))) return [ICON.tap, "Tap"];
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
    if (q.table) { let k = 50; h += "<div class='qt-w'><table class='qt'>" + q.table.map((row, ri) => "<tr>" + row.map((c) => (ri ? "<td>" : "<th>") + txt(String(c), k++) + (ri ? "</td>" : "</th>")).join("") + "</tr>").join("") + "</table></div>"; }
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
    if (!spot && q.interact && q.type === "sr") {
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
    if (q.type !== "sr") return (q.interact ? "<div class='act'>" + q.interact.map((p, k) => "<div class='part' data-part='" + k + "'>" + W[p.kind].html(p, false) + "</div>").join("") + "</div>" : "") +
      "<p class='feedback' data-fb aria-live='polite'></p>";
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
  const ANSWER_KINDS = new Set(["input", "fractions", "sum6", "pair", "choose", "select", "order", "expr", "sentence", "cells", "scale"]);
  function runCheck() {
    const q = items()[state.spot].q, fb = $("spotBody").querySelector("[data-fb]");
    let ok = true, msg = null;
    // When a question has answer boxes or choices, they alone decide. The visual tools support the
    // teacher's modelling and never block an answer; they decide only when they are the answer.
    const els = [...$("spotBody").querySelectorAll("[data-part]")].filter((el) => W[q.interact[+el.dataset.part].kind].check);
    const answers = els.filter((el) => ANSWER_KINDS.has(q.interact[+el.dataset.part].kind));
    for (const el of answers.length ? answers : els) {
      const p = q.interact[+el.dataset.part];
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

  // GitHub Pages lets browsers reuse the page for 10 minutes. If a newer version has been
  // published since this copy loaded, reload once so the class sees the latest questions.
  (function () {
    if (!/github\.io$/.test(location.hostname)) return;
    const me = [...document.scripts].map((x) => x.src).find((x) => /app\.js\?v=/.test(x)); if (!me) return;
    const v = me.split("?v=")[1];
    fetch("index.html?check=" + Date.now(), { cache: "no-store" }).then((r) => r.text()).then((t) => {
      const m = t.match(/app\.js\?v=(\d+)/); if (!m || m[1] === v) return;
      try { if (sessionStorage.getItem("dd-reloaded") === m[1]) return; sessionStorage.setItem("dd-reloaded", m[1]); } catch (e) { return; }
      location.reload();
    }).catch(() => {});
  })();
})();
