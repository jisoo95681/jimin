// Garden: one tree per study day, drawn in 3D with three.js.
// Growth follows focused hours: 2h = 25%, 4h = 50%, 6h = 75%, 8h = 100% (linear in between).
// When a day ends (after 23:59:59) its tree is locked and never changes again. No new trees after the exam day.
// Uses helpers from index.html (loadStudy, saveStudy, daySec, dkey, fromKey, midnight, EXAM, screen, nav, el, app, ...).

const GROW_FULL_SEC = 8 * 3600;
const GARDEN_EPOCH = new Date(2026, 8, 26); // day 0 of the species rotation (first tree: Baobab)
const SPECIES = [
  { name: "Baobab", kind: "baobab", trunk: 0x9c7c64, leaf: 0x7fa34e },
  { name: "Lemon Tree", kind: "round", trunk: 0x7b5a3a, leaf: 0x3f7d3b, fruit: 0xf3d23b, oval: true, size: .85 },
  { name: "Apple Tree", kind: "round", trunk: 0x7a5230, leaf: 0x4f8f3a, fruit: 0xd5392c, size: 1 },
  { name: "Korean Red Pine", kind: "pine", trunk: 0xa4553a, leaf: 0x2f5e3a },
  { name: "Ginkgo", kind: "ginkgo", trunk: 0x6e5840, leaf: 0xe8c33c },
  { name: "Grape Vine", kind: "vine", trunk: 0x6b4a33, leaf: 0x5a9a3c, fruit: 0x5b2a6e },
  { name: "Cherry Blossom", kind: "round", trunk: 0x5a3a30, leaf: 0xf4b3c6, size: 1.05, flat: true },
  { name: "Orange Tree", kind: "round", trunk: 0x7b5a3a, leaf: 0x3d7a3a, fruit: 0xf28c28, size: .9 },
  { name: "Weeping Willow", kind: "willow", trunk: 0x6d5a3e, leaf: 0x9cc45c },
  { name: "Maple", kind: "round", trunk: 0x6a4630, leaf: 0xd4532b, size: 1 },
  { name: "Fir", kind: "cone", trunk: 0x5d4632, leaf: 0x2e5a40 },
  { name: "Palm", kind: "palm", trunk: 0x9d8466, leaf: 0x4e9a3f, fruit: 0x7a5530 },
  { name: "Oak", kind: "round", trunk: 0x6b4d33, leaf: 0x4d7a34, size: 1.2, flat: true },
  { name: "Olive Tree", kind: "round", trunk: 0x7d6a55, leaf: 0x8aa27a, fruit: 0x3c3a2a, size: .8 },
  { name: "Jacaranda", kind: "round", trunk: 0x5e4a3a, leaf: 0x8e6bd1, size: 1.05, flat: true },
  { name: "Birch", kind: "birch", trunk: 0xeeeae2, leaf: 0xb7cf55 }
];

// ---------- Data ----------
const gMod = (n, m) => ((n % m) + m) % m;
const dayDiff = (a, b) => Math.round((midnight(b) - midnight(a)) / 86400000);
const speciesFor = key => gMod(dayDiff(GARDEN_EPOCH, fromKey(key)), SPECIES.length);
const growthOf = sec => Math.min(1, sec / GROW_FULL_SEC);

// Focused seconds for a day, including the part of a still-running timer session that falls on that day.
function focusedSecOn(s, key) {
  let sec = daySec(s, key);
  if (s.timer && s.timer.since) {
    const start = fromKey(key).getTime(), end = start + 86400000;
    const overlap = Math.min(Date.now(), end) - Math.max(s.timer.since, start);
    if (overlap > 0) sec += Math.floor(overlap / 1000);
  }
  return sec;
}

// Lock every finished day (from the first study day up to yesterday, never past the exam day).
function gardenSync() {
  const s = loadStudy();
  s.garden = s.garden || { days: {} };
  const todayKey = dkey(new Date());
  const studied = Object.keys(s.days).filter(k => daySec(s, k) > 0).sort();
  let start = s.garden.start || todayKey;
  if (studied.length && studied[0] < start) start = studied[0];
  let changed = start !== s.garden.start;
  s.garden.start = start;
  const last = midnight(new Date(Math.min(new Date().getTime() - 86400000, EXAM.getTime())));
  for (let d = fromKey(start); d <= last; d.setDate(d.getDate() + 1)) {
    const key = dkey(d);
    if (s.garden.days[key]) continue;
    const sec = focusedSecOn(s, key);
    s.garden.days[key] = { species: speciesFor(key), sec, growth: growthOf(sec) };
    changed = true;
  }
  if (changed) saveStudy(s);
  return s;
}

function gardenToday() {
  const now = new Date();
  if (midnight(now) > midnight(EXAM)) return null; // no new trees after the exam
  const key = dkey(now), sec = focusedSecOn(loadStudy(), key);
  return { key, species: speciesFor(key), sec, growth: growthOf(sec), today: true };
}

function gardenList() {
  const s = gardenSync();
  const list = Object.keys(s.garden.days).sort().map(key => ({ key, ...s.garden.days[key] }));
  const t = gardenToday();
  if (t && !s.garden.days[t.key]) list.push(t);
  return list;
}

function gardenHomeInfo() {
  const t = gardenToday();
  return t ? `${SPECIES[t.species].name} · ${Math.round(t.growth * 100)}%` : "Your garden";
}

// ---------- three.js ----------
let threePromise = null;
function loadThree() {
  if (window.THREE) return Promise.resolve(window.THREE);
  if (!threePromise) threePromise = new Promise((resolve, reject) => {
    const sc = document.createElement("script");
    sc.src = "vendor/three.min.js"; // three.js r128 (MIT), bundled so the garden also works offline
    sc.onload = () => resolve(window.THREE);
    sc.onerror = () => { threePromise = null; reject(new Error("three.js failed to load")); };
    document.head.append(sc);
  });
  return threePromise;
}

function seeded(str) {
  let h = 1779033703 ^ str.length;
  for (let k = 0; k < str.length; k++) { h = Math.imul(h ^ str.charCodeAt(k), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = h >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const smooth = x => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };

// Build one tree. Every part has a growth window [a, b]; update(g) scales parts in as the tree grows.
function buildTree(T, spec, seedKey) {
  const rnd = seeded(seedKey + spec.name), R = (lo, hi) => lo + (hi - lo) * rnd();
  const outer = new T.Group(), root = new T.Group();
  outer.add(root);
  const parts = [];
  const mats = {};
  const mat = c => (mats[c] = mats[c] || new T.MeshStandardMaterial({ color: c, flatShading: true, roughness: .85, metalness: 0 }));
  const up = new T.Vector3(0, 1, 0);
  // Growth windows are written on a 0–1 scale; branches and leaves are pulled earlier so every stage shows visible progress.
  const add = (obj, a, b, mode = "all", parent = root) => {
    if (a < .8) { a *= .7; b = Math.min(.95, b * .82); }
    parent.add(obj);
    parts.push({ obj, a, b: Math.min(1, b), mode, base: obj.scale.clone() });
    return obj;
  };
  function limb(from, dir, len, r0, r1, color) {
    const g = new T.CylinderGeometry(r1, r0, len, 6);
    g.translate(0, len / 2, 0);
    const m = new T.Mesh(g, mat(color));
    m.position.copy(from);
    m.quaternion.setFromUnitVectors(up, dir.clone().normalize());
    return m;
  }
  function blob(pos, r, color, sx = 1, sy = 1, sz = 1, detail = 1) {
    const m = new T.Mesh(new T.IcosahedronGeometry(r, detail), mat(color));
    m.position.copy(pos);
    m.scale.set(sx, sy, sz);
    m.rotation.set(R(0, 3), R(0, 3), R(0, 3));
    return m;
  }
  const V = (x, y, z) => new T.Vector3(x, y, z);
  const around = (n, k, jitter = .3) => (k / n) * Math.PI * 2 + R(-jitter, jitter);

  // A seedling that is only visible before the tree really starts growing.
  const sprout = new T.Group();
  sprout.add(limb(V(0, 0, 0), up, .28, .025, .02, 0x6aa84f));
  const leafA = blob(V(.07, .28, 0), .07, 0x7cc35a, 1.4, .35, .8, 0), leafB = blob(V(-.07, .3, 0), .07, 0x7cc35a, 1.4, .35, .8, 0);
  sprout.add(leafA, leafB);
  outer.add(sprout);

  const k = spec.kind, sz = spec.size || 1;
  if (k === "round") {
    const H = R(1.15, 1.4) * sz;
    add(limb(V(0, 0, 0), up, H, .14 * sz, .09 * sz, spec.trunk), .02, .5, "y");
    const nb = 4 + Math.floor(R(0, 2));
    const tips = [];
    for (let i = 0; i < nb; i++) {
      const ang = around(nb, i), y = H * R(.6, .95), len = R(.55, .85) * sz;
      const dir = V(Math.cos(ang), R(.7, 1.2), Math.sin(ang));
      add(limb(V(0, y, 0), dir, len, .07 * sz, .035 * sz, spec.trunk), .18 + i * .05, .5 + i * .05);
      tips.push(V(0, y, 0).add(dir.normalize().multiplyScalar(len)));
    }
    const blobs = [];
    const nl = 9 + Math.floor(R(0, 4)), spread = .75 * sz, cy = H + .45 * sz;
    for (let i = 0; i < nl; i++) {
      const p = i < tips.length ? tips[i].clone().add(V(0, .15, 0)) : V(R(-spread, spread), cy + R(-.3, .45) * sz, R(-spread, spread));
      const r = R(.42, .62) * sz;
      const a = .28 + R(0, .4);
      blobs.push({ p, r, a });
      add(blob(p, r, spec.leaf, 1, spec.flat ? .72 : .95, 1), a, a + .3);
    }
    if (spec.fruit) {
      const nf = 12 + Math.floor(R(0, 6));
      for (let i = 0; i < nf; i++) {
        const b = blobs[Math.floor(R(0, blobs.length))];
        const d = V(R(-1, 1), R(-1, .4), R(-1, 1)).normalize();
        const p = b.p.clone().add(d.multiplyScalar(b.r * .92));
        const f = blob(p, .085 * (spec.oval ? 1 : 1.1), spec.fruit, 1, spec.oval ? 1.35 : 1, 1, 1);
        const a = R(.8, .9);
        add(f, a, a + .1);
      }
    }
  } else if (k === "pine") {
    const H1 = R(.9, 1.1), H2 = R(.9, 1.2), lean = R(-.35, .35);
    add(limb(V(0, 0, 0), V(lean * .4, 1, 0), H1, .16, .12, spec.trunk), .02, .35, "y");
    const mid = V(lean * .4, 1, 0).normalize().multiplyScalar(H1);
    add(limb(mid, V(-lean, 1, R(-.2, .2)), H2, .12, .07, spec.trunk), .2, .55, "y");
    const top = mid.clone().add(V(-lean, 1, 0).normalize().multiplyScalar(H2));
    const layers = 4 + Math.floor(R(0, 2));
    for (let i = 0; i < layers; i++) {
      const ang = around(layers, i, .5), y = top.y - i * R(.25, .4), len = R(.6, 1);
      const base = V(top.x * (y / top.y), y, 0);
      const dir = V(Math.cos(ang), R(.1, .35), Math.sin(ang));
      add(limb(base, dir, len, .06, .03, spec.trunk), .3 + i * .06, .6 + i * .06);
      const tip = base.clone().add(dir.normalize().multiplyScalar(len));
      const a = .4 + i * .08;
      add(blob(tip.add(V(0, .08, 0)), R(.5, .72), spec.leaf, 1.25, .38, 1.1), a, a + .3);
    }
    add(blob(top.clone().add(V(0, .12, 0)), .6, spec.leaf, 1.3, .4, 1.2), .45, .8);
  } else if (k === "cone") {
    add(limb(V(0, 0, 0), up, 2.6, .13, .05, spec.trunk), .02, .5, "y");
    const tiers = 6;
    for (let i = 0; i < tiers; i++) {
      const y = .45 + i * .38, r = 1.05 - i * .15;
      const c = new T.Mesh(new T.ConeGeometry(r, .75, 8), mat(spec.leaf));
      c.position.set(0, y + .3, 0);
      c.rotation.y = R(0, 2);
      const a = .2 + i * .1;
      add(c, a, a + .35);
    }
  } else if (k === "ginkgo") {
    add(limb(V(0, 0, 0), up, 2.2, .13, .06, spec.trunk), .02, .5, "y");
    const nb = 7;
    for (let i = 0; i < nb; i++) {
      const ang = around(nb, i), y = .7 + i * .2, len = R(.4, .75) * (1 - i / 12);
      const dir = V(Math.cos(ang), R(1, 1.6), Math.sin(ang));
      add(limb(V(0, y, 0), dir, len, .05, .025, spec.trunk), .2 + i * .04, .5 + i * .04);
      const tip = V(0, y, 0).add(dir.normalize().multiplyScalar(len));
      const a = .3 + i * .06;
      add(blob(tip, R(.35, .5) * (1.1 - i / 12), spec.leaf, 1, 1.25, 1), a, a + .3);
    }
    add(blob(V(0, 2.35, 0), .38, spec.leaf, 1, 1.4, 1), .6, .95);
  } else if (k === "baobab") {
    const pts = [[.62, 0], [.66, .15], [.6, .5], [.55, 1], [.48, 1.5], [.36, 1.9], [.28, 2.05], [0, 2.1]].map(([x, y]) => new T.Vector2(x, y));
    add(new T.Mesh(new T.LatheGeometry(pts, 10), mat(spec.trunk)), .02, .55, "y");
    const nb = 6;
    for (let i = 0; i < nb; i++) {
      const ang = around(nb, i), len = R(.5, .8);
      const dir = V(Math.cos(ang), R(.6, 1.1), Math.sin(ang));
      const from = V(Math.cos(ang) * .2, 1.95, Math.sin(ang) * .2);
      add(limb(from, dir, len, .1, .05, spec.trunk), .35 + i * .04, .65 + i * .04);
      const tip = from.clone().add(dir.normalize().multiplyScalar(len));
      const a = .5 + i * .05;
      add(blob(tip.add(V(0, .1, 0)), R(.28, .38), spec.leaf, 1.2, .7, 1.2), a, a + .3);
    }
  } else if (k === "palm") {
    const segs = 8, bend = R(.04, .09);
    let p = V(0, 0, 0), dir = V(0, 1, 0);
    for (let i = 0; i < segs; i++) {
      const s = limb(p, dir, .33, .13 - i * .007, .12 - i * .007, i % 2 ? spec.trunk : 0x8a7358);
      add(s, .02 + i * .05, .15 + i * .06, "y");
      p = p.clone().add(dir.clone().normalize().multiplyScalar(.33));
      dir = V(dir.x + bend, 1, 0);
    }
    const nf = 9;
    for (let i = 0; i < nf; i++) {
      const ang = around(nf, i, .2);
      const frond = new T.Mesh(new T.BoxGeometry(.24, .03, 1.35), mat(spec.leaf));
      frond.geometry.translate(0, 0, .67);
      const g = new T.Group();
      g.position.copy(p);
      g.rotation.y = ang;
      frond.rotation.x = R(.35, .7);
      g.add(frond);
      const a = .45 + i * .04;
      add(g, a, a + .3);
    }
    if (spec.fruit) for (let i = 0; i < 4; i++) add(blob(p.clone().add(V(R(-.15, .15), -.12, R(-.15, .15))), .1, spec.fruit, 1, 1, 1), .85, .98);
  } else if (k === "willow") {
    add(limb(V(0, 0, 0), up, 1.5, .16, .1, spec.trunk), .02, .45, "y");
    for (let i = 0; i < 4; i++) {
      const ang = around(4, i), dir = V(Math.cos(ang), 1.1, Math.sin(ang));
      add(limb(V(0, 1.3, 0), dir, .7, .07, .04, spec.trunk), .2 + i * .05, .5 + i * .05);
    }
    add(blob(V(0, 2.05, 0), .75, spec.leaf, 1.3, .6, 1.3), .35, .7);
    const strands = 34;
    for (let i = 0; i < strands; i++) {
      const ang = (i / strands) * Math.PI * 2, r = R(.75, 1.05), len = R(1, 1.55);
      const s = new T.Mesh(new T.CylinderGeometry(.035, .02, len, 4), mat(spec.leaf));
      s.geometry.translate(0, -len / 2, 0);
      s.position.set(Math.cos(ang) * r, 2.05, Math.sin(ang) * r);
      s.rotation.set(R(-.08, .08), 0, R(-.08, .08));
      const a = .45 + R(0, .35);
      add(s, a, a + .25, "y");
    }
  } else if (k === "vine") {
    // A grape vine trained on a small trellis.
    const post = 0x8a6a4a;
    [-1.1, 1.1].forEach(x => add(limb(V(x, 0, 0), up, 1.25, .045, .04, post), .05, .2, "y"));
    add(limb(V(-1.15, 1.2, 0), V(1, 0, 0), 2.3, .025, .025, post), .1, .25);
    add(limb(V(0, 0, 0), V(.12, 1, .05), .65, .11, .08, spec.trunk), .02, .35, "y");
    add(limb(V(.08, .64, .03), V(-.1, 1, 0), .56, .08, .06, spec.trunk), .15, .45, "y");
    [-1, 1].forEach((side, j) => {
      add(limb(V(0, 1.18, 0), V(side, .03, 0), 1.05, .05, .03, spec.trunk), .3 + j * .05, .6 + j * .05);
      for (let i = 0; i < 5; i++) {
        const x = side * (.2 + i * .2);
        const a = .45 + i * .06;
        add(blob(V(x, 1.28 + R(-.05, .1), R(-.15, .15)), R(.18, .26), spec.leaf, 1.3, .6, 1.1), a, a + .25);
      }
      for (let b = 0; b < 2; b++) {
        const bunch = new T.Group();
        bunch.position.set(side * (.4 + b * .4), 1.12, R(-.05, .1));
        for (let r = 0; r < 4; r++) for (let q = 0; q < 4 - r; q++) {
          const ball = new T.Mesh(new T.IcosahedronGeometry(.055, 1), mat(spec.fruit));
          ball.position.set((q - (3 - r) / 2) * .09 + R(-.02, .02), -r * .085, R(-.04, .04));
          bunch.add(ball);
        }
        const a = R(.8, .9);
        add(bunch, a, a + .1);
      }
    });
  } else if (k === "birch") {
    const trunk = add(limb(V(0, 0, 0), up, 2.3, .1, .06, spec.trunk), .02, .5, "y");
    for (let i = 0; i < 9; i++) {
      const mark = new T.Mesh(new T.BoxGeometry(.07, .025, .02), mat(0x2b2b2b));
      const ang = R(0, 6.28), y = R(.2, 2.1);
      mark.position.set(Math.cos(ang) * .085, y, Math.sin(ang) * .085);
      mark.rotation.y = -ang;
      trunk.add(mark);
    }
    for (let i = 0; i < 6; i++) {
      const ang = around(6, i), y = 1.2 + i * .18, dir = V(Math.cos(ang), 1.4, Math.sin(ang));
      add(limb(V(0, y, 0), dir, .45, .035, .02, spec.trunk), .2 + i * .05, .5 + i * .05);
      const a = .35 + i * .07;
      add(blob(V(0, y, 0).add(dir.normalize().multiplyScalar(.5)), R(.3, .42), spec.leaf, 1, 1.35, 1), a, a + .3);
    }
    add(blob(V(0, 2.45, 0), .32, spec.leaf, 1, 1.4, 1), .6, .95);
  }

  outer.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

  return {
    group: outer,
    update(g) {
      root.scale.setScalar(.35 + .65 * smooth(g));
      const sp = 1 - smooth((g - .03) / .08);
      sprout.visible = sp > .01;
      sprout.scale.setScalar(Math.max(.001, sp));
      parts.forEach(p => {
        const t = smooth((g - p.a) / Math.max(.01, p.b - p.a));
        p.obj.visible = t > .002;
        if (!p.obj.visible) return;
        if (p.mode === "y") p.obj.scale.set(p.base.x * (.35 + .65 * t), p.base.y * t, p.base.z * (.35 + .65 * t));
        else p.obj.scale.set(p.base.x * t, p.base.y * t, p.base.z * t);
      });
    }
  };
}

// A 3D stage: renderer, lights, ground, slow orbit, drag to rotate, gentle sway.
function makeStage(T, host, { trees, radius, target, height }) {
  const renderer = new T.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  host.append(renderer.domElement);
  const scene = new T.Scene();
  scene.background = new T.Color(0xe7f6f6);
  scene.fog = new T.Fog(0xe7f6f6, radius * 2.2, radius * 4.5);
  const camera = new T.PerspectiveCamera(38, 1, .1, 200);
  scene.add(new T.HemisphereLight(0xf4fbff, 0x6f8f7a, .62));
  const sun = new T.DirectionalLight(0xfff6e8, .7);
  sun.position.set(radius * .8, radius * 1.6, radius * .6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  const sc = sun.shadow.camera;
  sc.left = sc.bottom = -radius * 1.2; sc.right = sc.top = radius * 1.2; sc.near = .5; sc.far = radius * 5;
  scene.add(sun);
  trees.forEach(t => scene.add(t.holder));

  let yaw = .6, pitch = .3, dist = radius * 2.7, focus = target.clone(), wantFocus = target.clone(), wantDist = dist;
  let dragging = false, lastX = 0, lastY = 0, idleAt = 0;
  const el3 = renderer.domElement;
  el3.addEventListener("pointerdown", e => { dragging = true; lastX = e.clientX; lastY = e.clientY; try { el3.setPointerCapture(e.pointerId); } catch {} });
  el3.addEventListener("pointermove", e => {
    if (!dragging) return;
    yaw -= (e.clientX - lastX) * .006;
    pitch = Math.max(.08, Math.min(.9, pitch + (e.clientY - lastY) * .004));
    lastX = e.clientX; lastY = e.clientY;
  });
  const stop = () => { dragging = false; idleAt = performance.now(); };
  el3.addEventListener("pointerup", stop);
  el3.addEventListener("pointercancel", stop);
  el3.addEventListener("wheel", e => { e.preventDefault(); wantDist = Math.max(radius * .7, Math.min(radius * 3.2, wantDist * (1 + e.deltaY * .001))); }, { passive: false });

  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host);
  resize();

  let last = performance.now(), running = true;
  function frame(now) {
    if (!host.isConnected) { running = false; renderer.dispose(); return; }
    const dt = Math.min(.05, (now - last) / 1000);
    last = now;
    if (!dragging && now - idleAt > 1500) yaw += dt * .12; // slow orbit
    focus.lerp(wantFocus, .06);
    dist += (wantDist - dist) * .06;
    camera.position.set(focus.x + Math.sin(yaw) * Math.cos(pitch) * dist, focus.y + Math.sin(pitch) * dist + height * .15, focus.z + Math.cos(yaw) * Math.cos(pitch) * dist);
    camera.lookAt(focus);
    trees.forEach(t => t.tick(now / 1000, dt));
    renderer.render(scene, camera);
    if (running) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  return {
    focusOn(pos, d) { wantFocus = pos.clone(); wantDist = d; idleAt = performance.now() + 4000; },
    reset() { wantFocus = target.clone(); wantDist = radius * 2.7; }
  };
}

// A tree on its own patch of grass, growing toward `growth` (animated).
function plantedTree(T, spec, key, growth, pos, delay = 0) {
  const holder = new T.Group();
  holder.position.copy(pos);
  const grass = new T.Mesh(new T.CylinderGeometry(1.25, 1.35, .16, 24), new T.MeshStandardMaterial({ color: 0x74a85a, flatShading: true, roughness: 1 }));
  grass.position.y = -.08;
  grass.receiveShadow = true;
  const soil = new T.Mesh(new T.SphereGeometry(.34, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), new T.MeshStandardMaterial({ color: 0x7a5a3c, flatShading: true, roughness: 1 }));
  soil.scale.y = .35;
  holder.add(grass, soil);
  const tree = buildTree(T, spec, key);
  holder.add(tree.group);
  let shown = 0, goal = growth, startAt = null;
  const phase = Math.random() * 6;
  tree.update(0);
  return {
    holder,
    setGrowth(g) { goal = g; startAt = null; },
    tick(t, dt) {
      if (startAt === null) startAt = t + delay;
      if (t >= startAt && Math.abs(goal - shown) > .0005) {
        shown += (goal - shown) * Math.min(1, dt * 1.6); // ease toward the goal
        if (Math.abs(goal - shown) < .002) shown = goal;
        tree.update(shown);
      }
      tree.group.rotation.z = Math.sin(t * .8 + phase) * .012; // gentle sway
      tree.group.rotation.x = Math.sin(t * .6 + phase * 2) * .008;
    }
  };
}

// ---------- Screens ----------
const pctText = g => `${Math.round(g * 100)}%`;

async function gardenScreen(dir = "fwd") {
  screen(dir);
  backTo = () => gardenScreen("back");
  gardenSync();
  app.append(nav("Menu", () => home("back")));
  const t = gardenToday();
  const card = el("div", { className: "card garden-card" });
  const stage = el("div", { className: "g-stage" });
  if (!t) {
    card.append(el("p", { className: "kicker" }, "Garden"), el("h1", { className: "title" }, "The exam is done"),
      el("p", { className: "sub" }, "Your garden is complete. Every tree stays exactly as you grew it."));
  } else {
    const spec = SPECIES[t.species];
    const date = fromKey(t.key).toLocaleDateString([], { weekday: "long", day: "numeric", month: "long" });
    const title = el("h1", { className: "title g-name" }, spec.name);
    const sub = el("p", { className: "sub", id: "g-sub" });
    card.append(el("p", { className: "kicker" }, "Today's tree"), title, sub, stage);
    const bar = el("div", { className: "g-bar" });
    const fill = el("div", { className: "g-fill" });
    bar.append(fill);
    [25, 50, 75, 100].forEach((p, i) => {
      const m = el("span", { className: "g-mark" });
      m.style.left = `${p}%`;
      m.append(el("i"), el("b", {}, `${(i + 1) * 2}h`));
      bar.append(m);
    });
    const next = el("p", { className: "sub g-next" });
    card.append(bar, next);
    const refresh = g => {
      const cur = gardenToday() || t;
      sub.textContent = `${date} · ${fmtDur(cur.sec)} focused · ${pctText(cur.growth)} grown`;
      fill.style.width = pctText(cur.growth);
      const nextStage = Math.min(4, Math.floor(cur.growth * 4 + 1e-9) + 1);
      next.textContent = cur.growth >= 1 ? "Fully grown today. Well done!"
        : `Next: ${nextStage * 25}% at ${nextStage * 2}h · ${fmtDur(Math.max(0, nextStage * 2 * 3600 - cur.sec))} to go`;
      return cur;
    };
    refresh();
    const btn = el("button", { className: "btn g-btn" }, "Concentration garden");
    btn.onclick = () => gardenAll();
    app.append(card, btn);
    try {
      const T = await loadThree();
      if (!stage.isConnected) return;
      const tree = plantedTree(T, spec, t.key, t.growth, new T.Vector3(0, 0, 0), .35);
      makeStage(T, stage, { trees: [tree], radius: 2.2, target: new T.Vector3(0, 1.25, 0), height: 2.6 });
      // Keep growing live while the timer runs.
      const iv = setInterval(() => {
        if (!stage.isConnected) return clearInterval(iv);
        tree.setGrowth(refresh().growth);
      }, 15000);
    } catch {
      stage.append(el("p", { className: "g-offline" }, "The 3D garden could not load. Close and reopen the app to try again."));
    }
    return;
  }
  const btn = el("button", { className: "btn g-btn" }, "Concentration garden");
  btn.onclick = () => gardenAll();
  app.append(card, btn);
}

async function gardenAll() {
  screen("fwd");
  backTo = () => gardenAll();
  const list = gardenList();
  app.append(nav("Today's tree", () => gardenScreen("back")));
  const full = list.filter(d => d.growth >= 1).length;
  const avg = list.length ? list.reduce((n, d) => n + d.growth, 0) / list.length : 0;
  app.append(el("h1", { className: "title" }, "Concentration garden"),
    el("p", { className: "sub" }, `${plural(list.length, "tree")} · ${full} fully grown · average ${pctText(avg)}`));
  const card = el("div", { className: "card garden-card" });
  const stage = el("div", { className: "g-stage tall" });
  card.append(stage);
  const tiles = el("div", { className: "g-tiles" });
  list.forEach((d, i) => {
    const tile = el("button", { className: "g-tile" + (d.today ? " today" : "") });
    tile.append(el("b", {}, d.today ? "Today" : fromKey(d.key).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })),
      el("span", {}, SPECIES[d.species].name));
    const mini = el("div", { className: "g-mini" }), f = el("div");
    f.style.width = pctText(d.growth);
    mini.append(f);
    tile.append(mini, el("span", { className: "g-pct" }, d.today ? `${pctText(d.growth)} · growing` : pctText(d.growth)));
    tile.onclick = () => stageApi && stageApi.focusOn(positions[i].clone().add(new THREE.Vector3(0, 1.2, 0)), 5.2);
    tiles.append(tile);
  });
  card.append(tiles);
  app.append(card);
  let stageApi = null, positions = [];
  try {
    const T = await loadThree();
    if (!stage.isConnected) return;
    const n = Math.max(1, list.length), cols = Math.ceil(Math.sqrt(n * 1.6)), rows = Math.ceil(n / cols), gap = 2.9;
    positions = list.map((d, i) => new T.Vector3((i % cols - (cols - 1) / 2) * gap, 0, (Math.floor(i / cols) - (rows - 1) / 2) * gap));
    const trees = list.map((d, i) => plantedTree(T, SPECIES[d.species], d.key, d.growth, positions[i], .2 + i * .06));
    const radius = Math.max(3.6, Math.max(cols, rows) * gap * .7);
    stageApi = makeStage(T, stage, { trees, radius, target: new T.Vector3(0, .9, 0), height: 2 });
  } catch {
    stage.append(el("p", { className: "g-offline" }, "The 3D garden could not load. Close and reopen the app to try again."));
  }
}
