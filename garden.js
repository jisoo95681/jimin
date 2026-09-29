// Garden: one tree per study day, drawn in 3D with three.js.
// Growth follows focused hours: 2h = 25%, 4h = 50%, 6h = 75%, 8h = 100% (linear in between).
// When a day ends (after 23:59:59) its tree is locked and never changes again. No new trees after the exam day.
// Uses helpers from index.html (loadStudy, saveStudy, daySec, dkey, fromKey, midnight, EXAM, screen, nav, el, app, ...).

const GROW_FULL_SEC = 8 * 3600;
const GARDEN_EPOCH = new Date(2026, 8, 26); // the first garden day, whose tree is a Baobab
const SPECIES = [
  { name: "Baobab", kind: "baobab", trunk: 0x9c7c64, leaf: 0x7fa34e },
  { name: "Lemon Tree", kind: "round", trunk: 0x7b5a3a, leaf: 0x3f7d3b, fruit: 0xffdc1f, oval: true, size: .85 },
  { name: "Apple Tree", kind: "round", trunk: 0x7a5230, leaf: 0x4f8f3a, fruit: 0xe3222b, size: 1 },
  { name: "Korean Red Pine", kind: "pine", trunk: 0xa4553a, leaf: 0x2f5e3a },
  { name: "Ginkgo", kind: "ginkgo", trunk: 0x6e5840, leaf: 0xe8c33c },
  { name: "Grape Vine", kind: "vine", trunk: 0x6b4a33, leaf: 0x5a9a3c, fruit: 0x7b2fb0 },
  { name: "Cherry Blossom", kind: "round", trunk: 0x5a3a30, leaf: 0xf2a9c0, flower: [0xffffff, 0xff5c93], size: 1.05, flat: true },
  { name: "Orange Tree", kind: "round", trunk: 0x7b5a3a, leaf: 0x3d7a3a, fruit: 0xff8616, size: .9 },
  { name: "Weeping Willow", kind: "willow", trunk: 0x6d5a3e, leaf: 0x9cc45c },
  { name: "Maple", kind: "round", trunk: 0x6a4630, leaf: 0xd4532b, size: 1 },
  { name: "Fir", kind: "cone", trunk: 0x5d4632, leaf: 0x2e5a40 },
  { name: "Palm", kind: "palm", trunk: 0x9d8466, leaf: 0x4e9a3f, fruit: 0x7a5530 },
  { name: "Oak", kind: "round", trunk: 0x6b4d33, leaf: 0x4d7a34, size: 1.2, flat: true },
  { name: "Olive Tree", kind: "round", trunk: 0x7d6a55, leaf: 0x8aa27a, fruit: 0x55306b, size: .8 },
  { name: "Jacaranda", kind: "round", trunk: 0x5e4a3a, leaf: 0x8e6bd1, flower: [0xe6d8ff, 0x6f3fd6], size: 1.05, flat: true },
  { name: "Birch", kind: "birch", trunk: 0xeeeae2, leaf: 0xb7cf55 }
];

// ---------- Data ----------
const gMod = (n, m) => ((n % m) + m) % m;
const dayDiff = (a, b) => Math.round((midnight(b) - midnight(a)) / 86400000);
// The first day is a Baobab; every day after gets a random species (fixed per date, never the same as the day before).
const speciesMemo = {};
function speciesFor(key) {
  if (key in speciesMemo) return speciesMemo[key];
  const n = dayDiff(GARDEN_EPOCH, fromKey(key));
  let idx;
  if (n === 0) idx = 0;
  else {
    const rnd = seeded("species:" + key);
    if (n < 0) idx = Math.floor(rnd() * SPECIES.length);
    else {
      const prev = new Date(fromKey(key)); prev.setDate(prev.getDate() - 1);
      const avoid = speciesFor(dkey(prev));
      idx = Math.floor(rnd() * (SPECIES.length - 1));
      if (idx >= avoid) idx++;
    }
  }
  return (speciesMemo[key] = idx);
}
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
const easeOut = x => { x = Math.max(0, Math.min(1, x)); return 1 - (1 - x) * (1 - x); };

// Build one tree as a hierarchy: leaves hang on branches, branches on the trunk. Each part grows (uniform scale) inside
// its parent, so everything stays connected at every stage. update(g) takes growth 0–1.
function buildTree(T, spec, seedKey) {
  const rnd = seeded(seedKey + spec.name), R = (lo, hi) => lo + (hi - lo) * rnd();
  const outer = new T.Group(), root = new T.Group();
  outer.add(root);
  const parts = [], links = [];
  const mats = {};
  const mat = c => (mats[c] = mats[c] || new T.MeshStandardMaterial({ color: c, flatShading: true, roughness: .85, metalness: 0 }));
  const up = new T.Vector3(0, 1, 0);
  const V = (x, y, z) => new T.Vector3(x, y, z);
  // Parts are placed in tree coordinates at full size; after building they are re-parented (keeping their place).
  const grow = (obj, a, b, parent = null) => {
    if (a < .8) { a *= 1.25; b = Math.min(.92, b * 1.45); } // spread the stages so 25/50/75% look clearly different
    root.add(obj);
    parts.push({ obj, a, b: Math.min(1, b) });
    if (parent) links.push([parent, obj]);
    return obj;
  };
  function limb(from, dir, len, r0, r1, color) {
    const g = new T.CylinderGeometry(r1, r0, len, 7);
    g.translate(0, len / 2, 0);
    const m = new T.Mesh(g, mat(color));
    m.position.copy(from);
    m.quaternion.setFromUnitVectors(up, dir.clone().normalize());
    m.userData.tip = from.clone().add(dir.clone().normalize().multiplyScalar(len));
    m.userData.at = f => from.clone().add(dir.clone().normalize().multiplyScalar(len * f));
    return m;
  }
  function blob(pos, r, color, sx = 1, sy = 1, sz = 1, detail = 1) {
    const m = new T.Mesh(new T.IcosahedronGeometry(r, detail), mat(color));
    m.position.copy(pos);
    m.scale.set(sx, sy, sz);
    m.rotation.y = R(0, 6.28); // spin around the vertical only, so squashed clusters stay level
    return m;
  }
  // Fruit and flowers use a slightly glossy, glowing material so they stand out against the leaves.
  const bright = {};
  const shiny = c => (bright[c] = bright[c] || new T.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: .28, roughness: .42, metalness: 0 }));
  const features = []; // fruit and flowers, for the gardener to touch or smell
  const around = (n, k, jitter = .3) => (k / n) * Math.PI * 2 + R(-jitter, jitter);
  // Leaf clusters around a branch tip, overlapping the wood so they never float.
  function crown(branch, color, n, r, a, opts = {}) {
    const tip = branch.userData.tip, made = [];
    for (let i = 0; i < n; i++) {
      const off = i === 0 ? V(0, 0, 0) : V(R(-1, 1), R(-.4, .8), R(-1, 1)).normalize().multiplyScalar(r * R(.5, .8));
      const rr = r * (i === 0 ? 1 : R(.7, .9)), sx = opts.sx || 1, sy = opts.sy || 1, sz = opts.sz || 1;
      const b = blob(tip.clone().add(off), rr, color, sx, sy, sz);
      grow(b, Math.max(0, a - .08) + i * .03, a + .3 + i * .03, branch); // leaves start budding with their branch
      made.push({ c: tip.clone().add(off), r: rr, sx, sy, sz });
    }
    return made;
  }
  // A point on the outside of a leaf cluster (so fruit and flowers sit on the surface, never hidden inside).
  const surface = (b, dir, lift = 1) => b.c.clone().add(V(dir.x * b.r * b.sx * lift, dir.y * b.r * b.sy * lift, dir.z * b.r * b.sz * lift));
  const outward = (b, down) => {
    const radial = V(b.c.x, 0, b.c.z);
    if (radial.lengthSq() < .01) radial.set(R(-1, 1), 0, R(-1, 1));
    return radial.normalize().add(V(R(-.7, .7), R(-down, .45), R(-.7, .7))).normalize();
  };
  // Fruit hangs on the outer, lower half of the leaf clusters; appears near full growth.
  function fruitOn(branch, blobs, color, oval, per = 3) {
    blobs.forEach(b => {
      for (let i = 0; i < per; i++) {
        const f = new T.Mesh(new T.SphereGeometry(oval ? .095 : .11, 14, 10), shiny(color));
        f.scale.y = oval ? 1.3 : .95;
        f.position.copy(surface(b, outward(b, .9), .93));
        f.castShadow = true;
        const s = R(.8, .86);
        grow(f, s, s + .08, branch);
        features.push(f);
        if (!oval) { // a little stem and leaf make it read as fruit
          const stem = new T.Mesh(new T.CylinderGeometry(.01, .012, .06, 5), mat(0x5a3d22));
          stem.position.y = .11;
          f.add(stem);
        }
      }
    });
  }
  // Blossoms: five-petal flowers over the whole outside of the canopy.
  function flowersOn(branch, blobs, colors, per = 6) {
    const petal = new T.SphereGeometry(.06, 10, 8);
    blobs.forEach(b => {
      for (let i = 0; i < per; i++) {
        const dir = outward(b, .2), fl = new T.Group();
        const col = colors[Math.floor(R(0, colors.length))];
        for (let k = 0; k < 5; k++) {
          const pt = new T.Mesh(petal, shiny(col));
          const a = k / 5 * Math.PI * 2;
          pt.position.set(Math.cos(a) * .06, 0, Math.sin(a) * .06);
          pt.scale.set(1, .35, 1);
          fl.add(pt);
        }
        const center = new T.Mesh(new T.SphereGeometry(.03, 8, 6), shiny(0xffd84a));
        center.position.y = .01;
        fl.add(center);
        fl.position.copy(surface(b, dir, .96));
        fl.quaternion.setFromUnitVectors(up, dir);
        const s = R(.76, .84);
        grow(fl, s, s + .1, branch);
        features.push(fl);
      }
    });
  }

  // A seedling shown only at the very beginning.
  const sprout = new T.Group();
  sprout.add(limb(V(0, 0, 0), up, .28, .025, .02, 0x6aa84f));
  sprout.add(blob(V(.07, .28, 0), .07, 0x7cc35a, 1.4, .35, .8, 0), blob(V(-.07, .3, 0), .07, 0x7cc35a, 1.4, .35, .8, 0));
  outer.add(sprout);

  const k = spec.kind, sz = spec.size || 1;
  if (k === "round") {
    const H = R(1.15, 1.4) * sz;
    const trunk = grow(limb(V(0, 0, 0), up, H, .14 * sz, .09 * sz, spec.trunk), 0, .45);
    const leader = grow(limb(V(0, H * .98, 0), V(R(-.1, .1), 1, R(-.1, .1)), .45 * sz, .08 * sz, .05 * sz, spec.trunk), .15, .5, trunk);
    const branches = [leader];
    const nb = 4 + Math.floor(R(0, 2));
    for (let i = 0; i < nb; i++) {
      const ang = around(nb, i), y = H * R(.62, .95), len = R(.55, .85) * sz;
      branches.push(grow(limb(V(0, y, 0), V(Math.cos(ang), R(.7, 1.2), Math.sin(ang)), len, .07 * sz, .035 * sz, spec.trunk), .14 + i * .03, .5 + i * .03, trunk));
    }
    branches.forEach((br, i) => {
      const blobs = crown(br, spec.leaf, i === 0 ? 3 : 2, R(.4, .55) * sz, .22 + i * .03, { sy: spec.flat ? .75 : .95 });
      if (spec.fruit) fruitOn(br, blobs, spec.fruit, spec.oval, spec.name.startsWith("Olive") ? 4 : 3);
      if (spec.flower) flowersOn(br, blobs, spec.flower, 10);
    });
  } else if (k === "pine") {
    const lean = R(-.35, .35);
    const d1 = V(lean * .4, 1, 0), d2 = V(-lean, 1, R(-.2, .2));
    const s1 = grow(limb(V(0, 0, 0), d1, R(.9, 1.1), .16, .12, spec.trunk), 0, .35);
    const s2 = grow(limb(s1.userData.tip, d2, R(.9, 1.2), .12, .07, spec.trunk), .15, .5, s1);
    const layers = 4 + Math.floor(R(0, 2));
    for (let i = 0; i < layers; i++) {
      const ang = around(layers, i, .5), base = s2.userData.at(1 - i * .18);
      const br = grow(limb(base, V(Math.cos(ang), R(.1, .35), Math.sin(ang)), R(.6, 1), .06, .03, spec.trunk), .25 + i * .05, .55 + i * .05, s2);
      crown(br, spec.leaf, 2, R(.45, .62), .35 + i * .05, { sx: 1.25, sy: .4, sz: 1.1 });
    }
    const top = grow(limb(s2.userData.tip, up, .2, .05, .03, spec.trunk), .3, .55, s2);
    crown(top, spec.leaf, 2, .55, .45, { sx: 1.3, sy: .42, sz: 1.2 });
  } else if (k === "cone") {
    const trunk = grow(limb(V(0, 0, 0), up, 2.6, .13, .05, spec.trunk), 0, .45);
    for (let i = 0; i < 6; i++) {
      const c = new T.Mesh(new T.ConeGeometry(1.05 - i * .15, .75, 8), mat(spec.leaf));
      c.position.set(0, .75 + i * .38, 0);
      c.rotation.y = R(0, 2);
      grow(c, .15 + i * .07, .5 + i * .07, trunk);
    }
  } else if (k === "ginkgo") {
    const trunk = grow(limb(V(0, 0, 0), up, 2.2, .13, .06, spec.trunk), 0, .45);
    for (let i = 0; i < 7; i++) {
      const ang = around(7, i), y = .7 + i * .2;
      const br = grow(limb(V(0, y, 0), V(Math.cos(ang), R(1, 1.6), Math.sin(ang)), R(.45, .75) * (1 - i / 12), .05, .025, spec.trunk), .15 + i * .04, .5 + i * .04, trunk);
      crown(br, spec.leaf, 2, R(.3, .42) * (1.1 - i / 12), .25 + i * .04, { sy: 1.25 });
    }
    const top = grow(limb(V(0, 2.15, 0), up, .25, .05, .03, spec.trunk), .3, .55, trunk);
    crown(top, spec.leaf, 1, .38, .45, { sy: 1.4 });
  } else if (k === "baobab") {
    const pts = [[.62, 0], [.66, .15], [.6, .5], [.55, 1], [.48, 1.5], [.36, 1.9], [.28, 2.05], [0, 2.1]].map(([x, y]) => new T.Vector2(x, y));
    const trunk = grow(new T.Mesh(new T.LatheGeometry(pts, 10), mat(spec.trunk)), 0, .45);
    for (let i = 0; i < 6; i++) {
      const ang = around(6, i);
      const br = grow(limb(V(Math.cos(ang) * .15, 1.95, Math.sin(ang) * .15), V(Math.cos(ang), R(.6, 1.1), Math.sin(ang)), R(.5, .8), .1, .05, spec.trunk), .25 + i * .04, .6 + i * .04, trunk);
      crown(br, spec.leaf, 2, R(.26, .34), .4 + i * .04, { sx: 1.2, sy: .7, sz: 1.2 });
    }
  } else if (k === "palm") {
    let parent = null, p = V(0, 0, 0), dir = V(0, 1, 0);
    const bend = R(.04, .09);
    for (let i = 0; i < 8; i++) {
      parent = grow(limb(p, dir, .33, .13 - i * .007, .12 - i * .007, i % 2 ? spec.trunk : 0x8a7358), i ? .05 : 0, i ? .3 : .25, parent);
      p = parent.userData.tip;
      dir = V(dir.x + bend, 1, 0);
    }
    for (let i = 0; i < 9; i++) {
      const frond = new T.Mesh(new T.BoxGeometry(.24, .03, 1.35), mat(spec.leaf));
      frond.geometry.translate(0, 0, .67);
      frond.position.copy(p);
      frond.rotation.set(R(.35, .7), around(9, i, .2), 0, "YXZ");
      grow(frond, .35 + i * .03, .65 + i * .03, parent);
    }
    if (spec.fruit) for (let i = 0; i < 4; i++) {
      const c = new T.Mesh(new T.SphereGeometry(.11, 12, 10), shiny(spec.fruit));
      c.position.copy(p.clone().add(V(R(-.16, .16), -.12, R(-.16, .16))));
      grow(c, .8, .9, parent);
      features.push(c);
    }
  } else if (k === "willow") {
    const trunk = grow(limb(V(0, 0, 0), up, 1.5, .16, .1, spec.trunk), 0, .45);
    const top = grow(limb(V(0, 1.45, 0), up, .5, .09, .05, spec.trunk), .15, .45, trunk);
    for (let i = 0; i < 4; i++) {
      const ang = around(4, i);
      const br = grow(limb(V(0, 1.3, 0), V(Math.cos(ang), 1.1, Math.sin(ang)), .7, .07, .04, spec.trunk), .15 + i * .04, .45 + i * .04, trunk);
      crown(br, spec.leaf, 1, .45, .3 + i * .04, { sx: 1.2, sy: .6, sz: 1.2 });
      // Drooping strands hang from each branch tip.
      for (let j = 0; j < 8; j++) {
        const len = R(1, 1.5), a2 = ang + R(-.8, .8), r = R(.1, .45);
        const s = new T.Mesh(new T.CylinderGeometry(.035, .02, len, 4), mat(spec.leaf));
        s.geometry.translate(0, -len / 2, 0);
        s.position.copy(br.userData.tip.clone().add(V(Math.cos(a2) * r, -.05, Math.sin(a2) * r)));
        grow(s, .45 + R(0, .3), .8 + R(0, .15), br);
      }
    }
    crown(top, spec.leaf, 2, .6, .3, { sx: 1.3, sy: .6, sz: 1.3 });
  } else if (k === "vine") {
    const post = 0x8a6a4a;
    [-1.1, 1.1].forEach(x => grow(limb(V(x, 0, 0), up, 1.25, .045, .04, post), 0, .12));
    grow(limb(V(-1.15, 1.2, 0), V(1, 0, 0), 2.3, .025, .025, post), .05, .15);
    const s1 = grow(limb(V(0, 0, 0), V(.12, 1, .05), .65, .11, .08, spec.trunk), 0, .3);
    const s2 = grow(limb(s1.userData.tip, V(-.1, 1, 0), .56, .08, .06, spec.trunk), .12, .4, s1);
    [-1, 1].forEach((side, j) => {
      const arm = grow(limb(s2.userData.tip, V(side, .03, 0), 1.05, .05, .03, spec.trunk), .25 + j * .04, .55 + j * .04, s2);
      for (let i = 0; i < 5; i++) {
        const b = blob(arm.userData.at(.2 + i * .19).add(V(0, .08, R(-.12, .12))), R(.18, .25), spec.leaf, 1.3, .6, 1.1);
        grow(b, .35 + i * .05, .65 + i * .05, arm);
      }
      for (let b = 0; b < 3; b++) {
        const bunch = new T.Group();
        bunch.position.copy(arm.userData.at(.25 + b * .3).add(V(0, -.06, R(-.05, .12))));
        for (let r = 0; r < 4; r++) for (let q = 0; q < 4 - r; q++) {
          const ball = new T.Mesh(new T.SphereGeometry(.06, 10, 8), shiny(spec.fruit));
          ball.position.set((q - (3 - r) / 2) * .09 + R(-.02, .02), -r * .085, R(-.04, .04));
          bunch.add(ball);
        }
        const s = R(.8, .86);
        grow(bunch, s, s + .08, arm);
        features.push(bunch);
      }
    });
  } else if (k === "birch") {
    const trunk = grow(limb(V(0, 0, 0), up, 2.3, .1, .06, spec.trunk), 0, .45);
    for (let i = 0; i < 9; i++) {
      const mark = new T.Mesh(new T.BoxGeometry(.07, .025, .02), mat(0x2b2b2b));
      const ang = R(0, 6.28);
      mark.position.set(Math.cos(ang) * .085, R(.2, 2.1), Math.sin(ang) * .085);
      mark.rotation.y = -ang;
      trunk.add(mark);
    }
    for (let i = 0; i < 6; i++) {
      const ang = around(6, i);
      const br = grow(limb(V(0, 1.2 + i * .18, 0), V(Math.cos(ang), 1.4, Math.sin(ang)), .45, .035, .02, spec.trunk), .15 + i * .04, .5 + i * .04, trunk);
      crown(br, spec.leaf, 2, R(.26, .36), .25 + i * .05, { sy: 1.35 });
    }
    const top = grow(limb(V(0, 2.25, 0), up, .25, .04, .025, spec.trunk), .3, .55, trunk);
    crown(top, spec.leaf, 1, .32, .45, { sy: 1.4 });
  }

  // Re-parent every part under its parent while keeping its place, then remember its full-size scale.
  root.updateMatrixWorld(true);
  links.forEach(([parent, child]) => parent.attach(child));
  parts.forEach(p => (p.base = p.obj.scale.clone()));
  outer.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

  return {
    group: outer,
    features,
    update(g) {
      // The seedling fades only once the young trunk is already taller than it.
      const sp = 1 - smooth((g - .15) / .1);
      sprout.visible = sp > .01;
      sprout.scale.setScalar(Math.max(.001, sp));
      parts.forEach(p => {
        const t = easeOut((g - p.a) / Math.max(.01, p.b - p.a));
        const k = Math.max(t, .0001);
        p.obj.visible = t > .002;
        p.obj.scale.set(p.base.x * k, p.base.y * k, p.base.z * k);
      });
    }
  };
}

// A 3D stage: renderer, lights and a fixed camera (no spinning). Drag to look around; it stays where you leave it.
function makeStage(T, host, { trees, radius, target, height, yaw = .45 }) {
  const renderer = new T.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  host.append(renderer.domElement);
  const scene = new T.Scene();
  scene.background = new T.Color(0xe7f6f6);
  scene.fog = new T.Fog(0xe7f6f6, radius * 2.4, radius * 5);
  const camera = new T.PerspectiveCamera(38, 1, .1, 200);
  scene.add(new T.HemisphereLight(0xf4fbff, 0x6f8f7a, .62));
  const sun = new T.DirectionalLight(0xfff6e8, .7);
  sun.position.set(radius * .8, radius * 1.6, radius * .6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -.0004;
  sun.shadow.normalBias = .02;
  const sc = sun.shadow.camera;
  sc.left = sc.bottom = -radius * 1.6; sc.right = sc.top = radius * 1.6; sc.near = .5; sc.far = radius * 5;
  scene.add(sun);
  const fill = new T.DirectionalLight(0xeaf4ff, .22);
  fill.position.set(-radius, radius * .6, radius * 1.4);
  const rim = new T.DirectionalLight(0xffffff, .28);
  rim.position.set(-radius * .6, radius * 1.1, -radius * 1.4);
  scene.add(fill, rim);
  trees.forEach(t => scene.add(t.holder));

  let pitch = .3, dist = radius * 2.7, focus = target.clone(), wantFocus = target.clone(), wantDist = dist;
  let dragging = false, lastX = 0, lastY = 0;
  const el3 = renderer.domElement;
  el3.addEventListener("pointerdown", e => { dragging = true; lastX = e.clientX; lastY = e.clientY; try { el3.setPointerCapture(e.pointerId); } catch {} });
  el3.addEventListener("pointermove", e => {
    if (!dragging) return;
    yaw -= (e.clientX - lastX) * .006;
    pitch = Math.max(.08, Math.min(.9, pitch + (e.clientY - lastY) * .004));
    lastX = e.clientX; lastY = e.clientY;
  });
  const stop = () => (dragging = false);
  el3.addEventListener("pointerup", stop);
  el3.addEventListener("pointercancel", stop);
  el3.addEventListener("wheel", e => { e.preventDefault(); wantDist = Math.max(radius * .7, Math.min(radius * 3.4, wantDist * (1 + e.deltaY * .001))); }, { passive: false });

  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host);
  resize();

  const hooks = [];
  let last = performance.now(), running = true;
  function frame(now) {
    if (!host.isConnected) { running = false; renderer.dispose(); return; }
    const dt = Math.min(.05, (now - last) / 1000);
    last = now;
    focus.lerp(wantFocus, .08);
    dist += (wantDist - dist) * .08;
    camera.position.set(focus.x + Math.sin(yaw) * Math.cos(pitch) * dist, focus.y + Math.sin(pitch) * dist + height * .15, focus.z + Math.cos(yaw) * Math.cos(pitch) * dist);
    camera.lookAt(focus);
    trees.forEach(t => t.tick(dt));
    hooks.forEach(h => h(now / 1000, dt));
    renderer.render(scene, camera);
    if (running) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  return {
    scene,
    get yaw() { return yaw; },
    onFrame(fn) { hooks.push(fn); return () => hooks.splice(hooks.indexOf(fn), 1); },
    focusOn(pos, d) { wantFocus = pos.clone(); wantDist = d; },
    reset() { wantFocus = target.clone(); wantDist = radius * 2.7; }
  };
}

// A tree on its own patch of grass. It shows `growth` straight away; grow(to) animates it to a new size.
function plantedTree(T, spec, key, growth, pos) {
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
  let shown = growth, goal = growth, speed = 0;
  tree.update(shown);
  return {
    holder, soil,
    features: () => tree.features.filter(f => f.visible),
    get growth() { return shown; },
    grow(to, seconds = 3) { goal = to; speed = Math.abs(to - shown) / seconds; },
    set(to) { shown = goal = to; tree.update(shown); },
    tick(dt) {
      if (shown === goal) return;
      const stepTo = Math.min(Math.abs(goal - shown), speed * dt);
      shown += Math.sign(goal - shown) * stepTo;
      tree.update(shown);
    }
  };
}

// ---------- The gardener (a boy or girl) and sometimes a border collie ----------
// Smooth-shaded, jointed models so they read as characters rather than blocks, with a natural walk:
// legs swing from the hip and bend at the knee, arms swing opposite the legs, and the stride matches the
// distance walked so the feet never slide.
// Materials: skin and fabric are soft and matte; hair and eyes get a light clear-coat sheen.
const soft = (T, c, extra = {}) => new T.MeshStandardMaterial({ color: c, roughness: .72, metalness: 0, ...extra });
const glossy = (T, c, extra = {}) => new T.MeshPhysicalMaterial({ color: c, roughness: .45, metalness: 0, clearcoat: .35, clearcoatRoughness: .4, ...extra });

// A smooth, tapered limb hanging down from its pivot (radius r0 at the top, r1 at the bottom, length len),
// made as one lathe with rounded ends so there are no seams at the joints.
function roundLimb(T, r0, r1, len, mat, seg = 28) {
  const pts = [];
  for (let i = 0; i <= 8; i++) { const a = -Math.PI / 2 + (i / 8) * (Math.PI / 2); pts.push(new T.Vector2(Math.cos(a) * r1, -len + r1 + Math.sin(a) * r1)); }
  for (let i = 0; i <= 8; i++) { const a = (i / 8) * (Math.PI / 2); pts.push(new T.Vector2(Math.cos(a) * r0, -r0 + Math.sin(a) * r0)); }
  return new T.Mesh(new T.LatheGeometry(pts, seg), mat);
}
// A smooth solid of revolution from a rough [radius, height] profile (points are smoothed with a spline).
function smoothLathe(T, profile, mat, seg = 40, samples = 48) {
  const curve = new T.SplineCurve(profile.map(([x, y]) => new T.Vector2(x, y)));
  return new T.Mesh(new T.LatheGeometry(curve.getPoints(samples), seg), mat);
}
const ell = (T, r, sx, sy, sz, mat, x = 0, y = 0, z = 0, seg = 32) => {
  const m = new T.Mesh(new T.SphereGeometry(r, seg, Math.round(seg * .7)), mat);
  m.scale.set(sx, sy, sz); m.position.set(x, y, z);
  return m;
};
// Kept for anything else that still uses a simple capsule.
function capsule(T, r, len, mat) { return roundLimb(T, r, r, len, mat); }

function makeGardener(T, girl) {
  const skin = soft(T, 0xf6d2b8, { roughness: .6 });
  const hairM = glossy(T, girl ? 0x55301c : 0x2c211b);
  const top = soft(T, girl ? 0xf38fab : 0x5fb0de), bottom = soft(T, girl ? 0xf38fab : 0x34486e);
  const white = soft(T, 0xffffff), shoe = glossy(T, girl ? 0xc8563f : 0x2f3645, { clearcoat: .6 });
  const fig = new T.Group(), body = new T.Group();
  fig.add(body);

  // Legs: hip → thigh → knee → shin → shoe.
  const legs = [-1, 1].map(side => {
    const hip = new T.Group();
    hip.position.set(side * .068, .56, 0);
    hip.add(roundLimb(T, .054, .046, .27, girl ? skin : bottom));
    const knee = new T.Group();
    knee.position.y = -.25;
    knee.add(roundLimb(T, .046, .037, .25, skin));
    const sock = smoothLathe(T, [[.036, -.24], [.041, -.21], [.042, -.18], [.039, -.16]], white, 24, 12);
    knee.add(sock);
    const foot = ell(T, .058, 1, .62, 1.7, shoe, 0, -.255, .035, 28);
    knee.add(foot);
    hip.add(knee);
    body.add(hip);
    return { hip, knee };
  });

  // Torso: a softly flared dress for the girl; t-shirt and shorts for the boy.
  if (girl) {
    body.add(smoothLathe(T, [[.001, .35], [.2, .37], [.205, .41], [.17, .52], [.125, .63], [.112, .72], [.128, .8], [.13, .85], [.1, .885], [.045, .9]], top));
    const hem = new T.Mesh(new T.TorusGeometry(.2, .012, 10, 48), white);
    hem.rotation.x = Math.PI / 2; hem.position.y = .375;
    const collar = new T.Mesh(new T.TorusGeometry(.068, .015, 10, 32), white);
    collar.rotation.x = Math.PI / 2; collar.position.y = .888;
    body.add(hem, collar);
  } else {
    body.add(smoothLathe(T, [[.001, .5], [.13, .5], [.138, .56], [.13, .63], [.132, .72], [.145, .81], [.125, .87], [.06, .9]], top));
    body.add(smoothLathe(T, [[.001, .44], [.138, .44], [.142, .5], [.135, .56], [.001, .56]], bottom, 32, 20));
    const neckband = new T.Mesh(new T.TorusGeometry(.06, .012, 10, 32), soft(T, 0x3d8fc0));
    neckband.rotation.x = Math.PI / 2; neckband.position.y = .893;
    body.add(neckband);
  }

  // Head on a neck pivot so it can nod or tilt.
  const neck = new T.Group();
  neck.position.y = .9;
  body.add(neck);
  neck.add(roundLimb(T, .038, .042, .08, skin, 20).translateY(.07));
  const head = ell(T, .145, 1, 1.03, .97, skin, 0, .16, 0, 48);
  neck.add(head);
  [-1, 1].forEach(side => neck.add(ell(T, .03, .6, 1, .9, skin, side * .142, .155, 0, 20))); // ears
  neck.add(ell(T, .015, 1, .8, 1, skin, 0, .135, .142, 16));                                // nose
  // Hair: a rounded cap, a soft fringe and side locks (plus a ponytail for the girl).
  const cap = new T.Mesh(new T.SphereGeometry(.155, 48, 32, 0, Math.PI * 2, 0, Math.PI * .58), hairM);
  cap.position.set(0, .17, -.01); cap.rotation.x = -.32;
  neck.add(cap);
  for (let i = -2; i <= 2; i++) neck.add(ell(T, .05, 1.2, .55, .7, hairM, i * .045, .245 - Math.abs(i) * .012, .108 - Math.abs(i) * .012, 20));
  [-1, 1].forEach(side => neck.add(ell(T, .045, .7, girl ? 1.7 : 1.1, .8, hairM, side * .128, girl ? .12 : .17, .02, 20)));
  let tail = null;
  if (girl) {
    tail = new T.Group();
    tail.position.set(0, .25, -.13);
    tail.add(new T.Mesh(new T.TorusGeometry(.026, .012, 10, 20), soft(T, 0xff5c8a)));
    const lock = smoothLathe(T, [[.001, .02], [.045, 0], [.06, -.07], [.05, -.15], [.025, -.21], [.001, -.23]], hairM, 28, 24);
    lock.position.z = -.02;
    tail.add(lock);
    neck.add(tail);
  }
  // Face: glossy eyes with highlights, brows, blush and a smile.
  const eyeM = glossy(T, 0x2a211d, { clearcoat: 1, clearcoatRoughness: .1, roughness: .2 });
  const shineM = soft(T, 0xffffff, { emissive: 0xffffff, emissiveIntensity: .8 });
  [-1, 1].forEach(side => {
    neck.add(ell(T, .02, 1, 1.35, .55, eyeM, side * .052, .165, .128, 20));
    neck.add(ell(T, .007, 1, 1, 1, shineM, side * .052 + .007, .174, .139, 10));
    const brow = roundLimb(T, .005, .005, .032, hairM, 8);
    brow.rotation.z = Math.PI / 2 + side * .15; brow.position.set(side * .036, .208, .128);
    neck.add(brow);
    neck.add(ell(T, .026, 1, .55, .3, soft(T, 0xff9aa9, { transparent: true, opacity: .5 }), side * .082, .122, .112, 16));
  });
  const smile = new T.Mesh(new T.TorusGeometry(.02, .0045, 8, 20, Math.PI), soft(T, 0xb5505a));
  smile.position.set(0, .108, .137); smile.rotation.z = Math.PI;
  neck.add(smile);

  // Arms: shoulder → upper arm (with sleeve) → elbow → forearm → hand. The right hand carries the can.
  const arms = [-1, 1].map(side => {
    const shoulder = new T.Group();
    shoulder.position.set(side * .142, .845, 0);
    shoulder.add(roundLimb(T, .034, .03, .19, skin));
    const sleeve = roundLimb(T, .05, girl ? .05 : .045, girl ? .1 : .11, top, 28); // short sleeve wrapped around the upper arm
    sleeve.position.y = .012;
    sleeve.scale.set(1, 1, .92);
    shoulder.add(sleeve);
    const elbow = new T.Group();
    elbow.position.y = -.175;
    elbow.add(roundLimb(T, .03, .026, .16, skin));
    elbow.add(ell(T, .033, .9, 1.15, .75, skin, 0, -.172, 0, 20));        // hand
    elbow.add(ell(T, .012, 1, 1.6, 1, skin, side * -.022, -.158, .018, 12)); // thumb
    shoulder.add(elbow);
    body.add(shoulder);
    return { shoulder, elbow };
  });
  const tin = glossy(T, 0x4fb3b5, { metalness: .25, roughness: .35, clearcoat: .6 });
  const can = new T.Group();
  can.add(smoothLathe(T, [[.001, -.075], [.084, -.075], [.088, -.06], [.08, .05], [.072, .075], [.001, .075]], tin, 36, 20));
  const spout = roundLimb(T, .012, .019, .24, tin, 16);
  spout.rotation.x = -(Math.PI - 1.05); spout.position.set(0, 0, .06); // points up and forward
  const rose = smoothLathe(T, [[.001, 0], [.016, 0], [.032, .03], [.001, .032]], tin, 24, 10);
  rose.position.set(0, .115, .235); rose.rotation.x = 1.05;
  const handle = new T.Mesh(new T.TorusGeometry(.058, .011, 10, 24, Math.PI), tin);
  handle.position.set(0, .07, -.01); handle.rotation.y = Math.PI / 2;
  can.add(spout, rose, handle);
  can.position.set(0, -.25, .05);
  arms[1].elbow.add(can);
  const spoutTip = new T.Object3D();
  spoutTip.position.set(0, .13, .25);
  can.add(spoutTip);
  fig.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  fig.scale.setScalar(1.1);

  // Natural gait driven by distance walked. The walk eases in and out (no snapping when starting or stopping).
  let phase = 0, amt = 0, last = performance.now();
  return {
    fig, body, neck, tail, arms, can, spoutTip,
    gait(dist, moving, holdCan, posing = false) {
      const now = performance.now(), dt = Math.min(.05, (now - last) / 1000);
      last = now;
      amt += ((moving ? 1 : 0) - amt) * Math.min(1, dt * 7);
      phase += dist / .5 * Math.PI * 2;
      legs.forEach(({ hip, knee }, i) => {
        const p = phase + i * Math.PI;
        hip.rotation.x = Math.sin(p) * .42 * amt;
        knee.rotation.x = Math.max(0, Math.sin(p - 1.3)) * .75 * amt;
      });
      body.position.y = (Math.abs(Math.cos(phase)) - .5) * .018 * amt;
      body.rotation.z = Math.sin(phase) * .022 * amt;
      if (tail) tail.rotation.x = .15 + Math.sin(phase * 2) * .1 * amt;
      if (posing) return; // a pose (pouring, reaching, smelling) owns the arms
      arms.forEach(({ shoulder, elbow }, i) => {
        if (i === 1 && holdCan) { shoulder.rotation.x = Math.sin(phase + Math.PI) * .12 * amt; elbow.rotation.x = -.35; return; }
        const p = phase + (i + 1) * Math.PI;
        shoulder.rotation.x = Math.sin(p) * .36 * amt;
        elbow.rotation.x = (-.18 - Math.max(0, Math.sin(p)) * .25) * amt - .06;
      });
    }
  };
}

function makeCollie(T) {
  const black = soft(T, 0x1c1a1a, { roughness: .88 }), white = soft(T, 0xf6f3ec, { roughness: .9 });
  const dog = new T.Group(), body = new T.Group();
  dog.add(body);
  // Body: a smooth lathe lying along the dog's length (deep chest, tucked waist).
  const torso = smoothLathe(T, [[.001, -.22], [.07, -.21], [.1, -.15], [.112, -.05], [.118, .05], [.125, .13], [.105, .2], [.06, .235], [.001, .24]], black, 40, 40);
  torso.rotation.x = Math.PI / 2;
  torso.position.set(0, .36, 0);
  torso.scale.set(1, 1, 1.05);
  body.add(torso);
  body.add(ell(T, .1, 1, 1.15, .8, white, 0, .33, .17, 32)); // white chest
  const neckG = new T.Group();
  neckG.position.set(0, .43, .2);
  body.add(neckG);
  neckG.add(ell(T, .092, 1.05, 1, .95, white, 0, -.01, .015, 32)); // white ruff
  neckG.add(ell(T, .085, 1, .95, 1.05, black, 0, .085, .06, 40));  // skull
  const muzzle = smoothLathe(T, [[.001, 0], [.05, .005], [.046, .05], [.034, .09], [.018, .11], [.001, .112]], white, 32, 20);
  muzzle.rotation.x = Math.PI / 2; muzzle.position.set(0, .05, .1); muzzle.scale.set(1, 1, .8);
  neckG.add(muzzle);
  neckG.add(ell(T, .022, 1.2, .9, 1, glossy(T, 0x111111, { clearcoat: 1, roughness: .25 }), 0, .058, .212, 16)); // nose
  neckG.add(ell(T, .026, .6, 1.8, .5, white, 0, .11, .135, 16)); // blaze
  [-1, 1].forEach(side => {
    const ear = smoothLathe(T, [[.001, 0], [.035, .005], [.03, .04], [.014, .075], [.001, .085]], black, 20, 16);
    ear.scale.set(1, 1, .45);
    ear.position.set(side * .05, .15, .045); ear.rotation.set(-.35, 0, side * -.4);
    neckG.add(ear);
    neckG.add(ell(T, .014, 1, 1.1, .7, glossy(T, 0x3a2716, { clearcoat: 1, roughness: .2 }), side * .036, .105, .133, 14));
  });
  // Legs: tapered, black above and white "socks" below, with soft paws.
  const legs = [[.07, .15], [-.07, .15], [.07, -.15], [-.07, -.15]].map(([x, z], i) => {
    const leg = new T.Group();
    leg.position.set(x, .32, z);
    leg.add(roundLimb(T, i < 2 ? .034 : .04, .026, .17, black, 20));
    const low = roundLimb(T, .026, .024, .15, white, 20);
    low.position.y = -.145;
    leg.add(low, ell(T, .03, 1, .6, 1.35, white, 0, -.29, .012, 16));
    body.add(leg);
    return leg;
  });
  // A fluffy, curved tail with a white tip.
  const tail = new T.Group();
  tail.position.set(0, .41, -.21);
  const curve = new T.CatmullRomCurve3([new T.Vector3(0, 0, 0), new T.Vector3(0, -.06, -.08), new T.Vector3(0, -.16, -.12), new T.Vector3(0, -.24, -.08)]);
  tail.add(new T.Mesh(new T.TubeGeometry(curve, 24, .035, 14, false), black));
  tail.add(ell(T, .042, 1, 1.3, 1, white, 0, -.25, -.08, 16));
  tail.add(ell(T, .036, 1, 1, 1, black, 0, 0, 0, 16));
  body.add(tail);
  dog.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  dog.scale.setScalar(1.15);
  let phase = 0, amt = 0, sit = 0, last = performance.now();
  return {
    fig: dog,
    gait(dist, moving, running, sitting, now) {
      const t = performance.now(), dt = Math.min(.05, (t - last) / 1000);
      last = t;
      amt += ((moving ? 1 : 0) - amt) * Math.min(1, dt * 8);
      sit += ((sitting ? 1 : 0) - sit) * Math.min(1, dt * 4); // sits down and stands up smoothly
      phase += dist / (running ? .7 : .38) * Math.PI * 2;
      const amp = (running ? .75 : .5) * amt;
      legs.forEach((leg, i) => {
        const swing = Math.sin(phase + (i === 0 || i === 3 ? 0 : Math.PI)) * amp;
        const sitPose = i < 2 ? .38 : -1.2;
        leg.rotation.x = swing * (1 - sit) + sitPose * sit;
      });
      body.position.y = Math.abs(Math.sin(phase)) * (running ? .03 : .012) * amt - .06 * sit;
      body.rotation.x = -.38 * sit;
      tail.rotation.z = Math.sin(now * (sitting ? 9 : 13)) * .45;
      tail.rotation.x = .2 * sit;
      neckG.rotation.x = .35 * sit + Math.sin(phase * .5) * .05 * (1 - sit);
    }
  };
}

// Move an actor toward a point at a speed, turning smoothly. Returns the distance moved this frame.
function stepToward(actor, target, speed, dt, turnRate = 5) {
  const pos = actor.fig.position, d = target.clone().sub(pos).setY(0);
  const len = d.length();
  if (len < .01) return 0;
  const want = Math.atan2(d.x, d.z);
  let diff = want - actor.fig.rotation.y;
  diff = Math.atan2(Math.sin(diff), Math.cos(diff));
  actor.fig.rotation.y += diff * Math.min(1, dt * turnRate);
  const step = Math.min(len, speed * dt * (Math.abs(diff) > 1.2 ? .3 : 1)); // slow down while turning round
  pos.addScaledVector(d.normalize(), step);
  return step;
}
function turnToward(actor, point, dt, rate = 3) {
  const d = point.clone().sub(actor.fig.position);
  let diff = Math.atan2(d.x, d.z) - actor.fig.rotation.y;
  diff = Math.atan2(Math.sin(diff), Math.cos(diff));
  actor.fig.rotation.y += diff * Math.min(1, dt * rate);
  return Math.abs(diff) < .08;
}
const ease = x => (x = Math.max(0, Math.min(1, x)), x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);

// The watering scene: walk in calmly, water the tree (it grows), maybe touch a fruit or smell the flowers,
// then turn and stroll away. Sometimes a border collie comes along and does its own thing.
function waterTree(T, stage, planted, toGrowth, spec, force = {}) {
  const pick = (key, value) => (key in force ? force[key] : value);
  const girl = pick("girl", Math.random() < .5), fromLeft = pick("fromLeft", Math.random() < .5);
  const kid = makeGardener(T, girl);
  const side = new T.Vector3(Math.cos(stage.yaw), 0, -Math.sin(stage.yaw)).multiplyScalar(fromLeft ? -1 : 1);
  const toCam = new T.Vector3(Math.sin(stage.yaw), 0, Math.cos(stage.yaw));
  const start = side.clone().multiplyScalar(4.2).addScaledVector(toCam, .5);
  const stand = side.clone().multiplyScalar(1.02).addScaledVector(toCam, .3);
  const trunk = new T.Vector3(0, .1, 0);
  kid.fig.position.copy(start);
  kid.fig.rotation.y = Math.atan2(stand.x - start.x, stand.z - start.z);
  stage.scene.add(kid.fig);

  // What happens after watering, if the tree has fruit or flowers by then.
  const blooming = toGrowth >= .86 && (spec.fruit || spec.flower);
  const extra = blooming ? (spec.flower ? "smell" : "touch") : null;

  // Sometimes the border collie comes too.
  const withDog = pick("dog", Math.random() < .6);
  const dogMode = pick("dogMode", ["follow", "ahead", "circle"][Math.floor(Math.random() * 3)]);
  const dog = withDog ? makeCollie(T) : null;
  if (dog) {
    dog.fig.position.copy(start).addScaledVector(side, .5).addScaledVector(toCam, .45);
    dog.fig.rotation.y = kid.fig.rotation.y;
    stage.scene.add(dog.fig);
  }
  const dogSit = stand.clone().addScaledVector(toCam, .55).addScaledVector(side, .25);
  const dogAheadSit = side.clone().multiplyScalar(.6).addScaledVector(toCam, .85);

  const drops = [], dropGeo = new T.SphereGeometry(.024, 8, 6);
  const dropMat = new T.MeshStandardMaterial({ color: 0x7cc4f2, emissive: 0x3b8fd0, emissiveIntensity: .25, transparent: true, opacity: .85, roughness: .15 });
  const WALK = .62; // calm walking speed (units per second)
  let phase = "in", t = 0, grown = false, circleA = 0, reach = null;
  const pickFeature = () => {
    // The feature closest to the kid that is not too high up.
    const kp = kid.fig.position, list = planted.features();
    let best = null, bestD = 1e9;
    list.forEach(f => { const w = new T.Vector3(); f.getWorldPosition(w); const d = w.distanceTo(kp) + Math.max(0, w.y - 1.6) * 2; if (d < bestD) { bestD = d; best = w; } });
    return best;
  };
  const nextPhase = p => { phase = p; t = 0; };

  const stop = stage.onFrame((now, dt) => {
    t += dt;
    let kidMoved = 0;
    if (phase === "in") {
      kidMoved = stepToward(kid, stand, WALK, dt, 3);
      if (kid.fig.position.distanceTo(stand) < .02) nextPhase("face");
    } else if (phase === "face") {
      if (turnToward(kid, trunk, dt, 3) || t > 1.5) nextPhase("pour");
    } else if (phase === "pour") {
      // Raise the can gently, pour for a few seconds, then lower it.
      const up = ease(t / .9), down = ease((t - 4.2) / .8);
      const lift = t < 4.2 ? up : 1 - down;
      kid.arms[1].shoulder.rotation.x = -1.05 * lift;
      kid.arms[1].elbow.rotation.x = -.35 + .15 * lift;
      kid.can.rotation.x = .85 * lift;
      kid.neck.rotation.x = .18 * lift; // looks down at the soil
      if (t > .9 && t < 4.1 && Math.random() < .65) {
        const d = new T.Mesh(dropGeo, dropMat);
        kid.spoutTip.getWorldPosition(d.position);
        d.userData.v = trunk.clone().sub(d.position).setY(0).normalize().multiplyScalar(.45 + Math.random() * .25);
        d.userData.v.y = .15;
        stage.scene.add(d);
        drops.push(d);
      }
      if (t > 1.3 && !grown) { grown = true; planted.grow(toGrowth, 3.2); }
      if (t > 5.1) nextPhase(extra ? "approach" : "turn");
    } else if (phase === "approach") {
      // Step a little closer and reach up to a fruit, or lean in to smell the flowers.
      const close = stand.clone().multiplyScalar(.78);
      kidMoved = stepToward(kid, close, WALK * .7, dt, 3);
      if (kid.fig.position.distanceTo(close) < .02) { reach = pickFeature(); nextPhase(extra); }
    } else if (phase === "touch") {
      // Turn to the fruit, reach up with the free hand and rise onto the toes, then lower again.
      const arm = kid.arms[0], k = t < 2.2 ? ease(t / .8) : 1 - ease((t - 2.2) / .7);
      if (reach) turnToward(kid, reach, dt, 2);
      arm.shoulder.rotation.set(-2.5 * k, 0, -.25 * k);
      arm.elbow.rotation.x = -.25 * k;
      kid.body.position.y = .035 * k;
      kid.neck.rotation.x = -.4 * k; // looks up at the fruit
      if (t > 3) { arm.shoulder.rotation.set(0, 0, 0); kid.body.position.y = 0; nextPhase("turn"); }
    } else if (phase === "smell") {
      const k = t < 2.4 ? ease(t / .9) : 1 - ease((t - 2.4) / .8);
      if (reach) turnToward(kid, reach, dt, 2);
      kid.body.rotation.x = .22 * k;       // lean in
      kid.neck.rotation.x = -.3 * k;        // nose up towards the blossoms
      kid.arms.forEach(a => (a.shoulder.rotation.x = -.25 * k));
      if (t > 3.3) nextPhase("turn");
    } else if (phase === "turn") {
      kid.neck.rotation.x *= .9;
      if (turnToward(kid, start, dt, 2) || t > 2) nextPhase("out");
    } else if (phase === "out") {
      kidMoved = stepToward(kid, start, WALK, dt, 3);
      const far = kid.fig.position.distanceTo(start);
      const fade = Math.min(1, far / 1.2);
      kid.fig.scale.setScalar(1.1 * (.55 + .45 * fade));
      if (far < .05) nextPhase("gone");
    }
    kid.gait(kidMoved, kidMoved > 0 ? 1 : 0, phase !== "pour", ["pour", "touch", "smell"].includes(phase));

    // The border collie.
    if (dog) {
      let target = null, speed = WALK, running = false, sitting = false;
      const kp = kid.fig.position;
      const beside = kp.clone().addScaledVector(side, .35).addScaledVector(toCam, .4);
      if (phase === "in" || phase === "face") {
        if (dogMode === "ahead") { target = dogAheadSit; speed = 2; running = true; }
        else target = beside;
      } else if (phase === "pour") {
        if (dogMode === "circle" && t > .6 && t < 4.6) {
          circleA += dt * 2.6;
          target = kp.clone().add(new T.Vector3(Math.cos(circleA) * .6, 0, Math.sin(circleA) * .6));
          speed = 1.9; running = true;
        } else target = dogMode === "ahead" ? dogAheadSit : dogSit;
      } else if (phase === "out" || phase === "turn") {
        target = kp.clone().addScaledVector(side, .3).addScaledVector(toCam, .45);
        speed = WALK * 1.15;
      } else target = dogMode === "ahead" ? dogAheadSit : dogSit;
      const moved = target ? stepToward(dog, target, speed, dt, running ? 6 : 4) : 0;
      sitting = moved === 0 && phase !== "out";
      if (sitting) turnToward(dog, kp, dt, 2);
      dog.gait(moved, moved > 0 ? 1 : 0, running && moved > 0, sitting, now);
      if (phase === "out") dog.fig.scale.setScalar(1.15 * (.55 + .45 * Math.min(1, dog.fig.position.distanceTo(start) / 1.2)));
    }

    // Water drops fall and disappear into the soil.
    for (let i = drops.length - 1; i >= 0; i--) {
      const d = drops[i];
      d.userData.v.y -= 3.2 * dt;
      d.position.addScaledVector(d.userData.v, dt);
      if (d.position.y < .03) { stage.scene.remove(d); drops.splice(i, 1); }
    }
    if (phase === "gone") {
      stage.scene.remove(kid.fig);
      if (dog) stage.scene.remove(dog.fig);
      stop();
    }
  });
}

// ---------- Screens ----------
const pctText = g => `${Math.round(g * 100)}%`;

// Growth last shown for a day, so we know whether the gardener needs to come and water.
function seenGrowth(key) { const s = loadStudy(); return ((s.garden || {}).seen || {})[key]; }
function markSeen(key, g) { const s = loadStudy(); s.garden = s.garden || { days: {} }; s.garden.seen = { [key]: g }; saveStudy(s); }

async function gardenScreen(dir = "fwd") {
  screen(dir);
  backTo = () => gardenScreen("back");
  gardenSync();
  app.append(nav("Menu", () => home("back")));
  const t = gardenToday();
  const card = el("div", { className: "card garden-card" });
  const btn = el("button", { className: "btn g-btn" }, "Concentration garden");
  btn.onclick = () => gardenAll();
  if (!t) {
    card.append(el("p", { className: "kicker" }, "Garden"), el("h1", { className: "title" }, "The exam is done"),
      el("p", { className: "sub" }, "Your garden is complete. Every tree stays exactly as you grew it."));
    app.append(card, btn);
    return;
  }
  const spec = SPECIES[t.species];
  const date = fromKey(t.key).toLocaleDateString([], { weekday: "long", day: "numeric", month: "long" });
  const stage = el("div", { className: "g-stage" });
  const sub = el("p", { className: "sub", id: "g-sub" });
  card.append(el("p", { className: "kicker" }, "Today's tree"), el("h1", { className: "title g-name" }, spec.name), sub, stage);
  const bar = el("div", { className: "g-bar" });
  const fill = el("div", { className: "g-fill" });
  bar.append(fill);
  [25, 50, 75, 100].forEach((p, i) => {
    const mk = el("span", { className: "g-mark" });
    mk.style.left = `${p}%`;
    mk.append(el("i"), el("b", {}, `${(i + 1) * 2}h`));
    bar.append(mk);
  });
  const next = el("p", { className: "sub g-next" });
  card.append(bar, next);
  const refresh = () => {
    const cur = gardenToday() || t;
    sub.textContent = `${date} · ${fmtDur(cur.sec)} focused · ${pctText(cur.growth)} grown`;
    fill.style.width = pctText(cur.growth);
    const nextStage = Math.min(4, Math.floor(cur.growth * 4 + 1e-9) + 1);
    next.textContent = cur.growth >= 1 ? "Fully grown today. Well done!"
      : `Next: ${nextStage * 25}% at ${nextStage * 2}h · ${fmtDur(Math.max(0, nextStage * 2 * 3600 - cur.sec))} to go`;
    return cur;
  };
  refresh();
  app.append(card, btn);
  try {
    const T = await loadThree();
    if (!stage.isConnected) return;
    const before = seenGrowth(t.key);
    const from = before === undefined ? 0 : Math.min(before, t.growth);
    const tree = plantedTree(T, spec, t.key, from, new T.Vector3(0, 0, 0));
    const st = makeStage(T, stage, { trees: [tree], radius: 2.2, target: new T.Vector3(0, 1.2, 0), height: 2.6 });
    // Grown since the last visit? A gardener comes to water the tree, and it grows to today's size.
    if (t.growth - from > .002) setTimeout(() => stage.isConnected && waterTree(T, st, tree, t.growth, spec), 700);
    markSeen(t.key, t.growth);
    // While the timer runs, keep the tree in step (quietly).
    const iv = setInterval(() => {
      if (!stage.isConnected) return clearInterval(iv);
      const cur = refresh();
      if (cur.growth > tree.growth + .002) { tree.grow(cur.growth, 2); markSeen(t.key, cur.growth); }
    }, 15000);
  } catch {
    stage.append(el("p", { className: "g-offline" }, "The 3D garden could not load. Close and reopen the app to try again."));
  }
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
  let stageApi = null, positions = [];
  list.forEach((d, i) => {
    const tile = el("button", { className: "g-tile" + (d.today ? " today" : "") });
    tile.append(el("b", {}, d.today ? "Today" : fromKey(d.key).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })),
      el("span", {}, SPECIES[d.species].name));
    const mini = el("div", { className: "g-mini" }), f = el("div");
    f.style.width = pctText(d.growth);
    mini.append(f);
    tile.append(mini, el("span", { className: "g-pct" }, d.today ? `${pctText(d.growth)} · growing` : pctText(d.growth)));
    tile.onclick = () => stageApi && positions[i] && stageApi.focusOn(positions[i].clone().add(new THREE.Vector3(0, 1.2, 0)), 5.2);
    tiles.append(tile);
  });
  card.append(tiles);
  app.append(card);
  try {
    const T = await loadThree();
    if (!stage.isConnected) return;
    const n = Math.max(1, list.length), cols = Math.ceil(Math.sqrt(n * 1.6)), rows = Math.ceil(n / cols), gap = 2.9;
    positions = list.map((d, i) => new T.Vector3((i % cols - (cols - 1) / 2) * gap, 0, (Math.floor(i / cols) - (rows - 1) / 2) * gap));
    const trees = list.map((d, i) => plantedTree(T, SPECIES[d.species], d.key, d.growth, positions[i]));
    const radius = Math.max(3.6, Math.max(cols, rows) * gap * .7);
    stageApi = makeStage(T, stage, { trees, radius, target: new T.Vector3(0, .9, 0), height: 2 });
  } catch {
    stage.append(el("p", { className: "g-offline" }, "The 3D garden could not load. Close and reopen the app to try again."));
  }
}
