// Garden: one tree per study day, drawn in 3D with three.js.
// Growth follows focused hours: 2h = 25%, 4h = 50%, 6h = 75%, 8h = 100% (linear in between). Trees grow like real ones:
// seedling with seed leaves, then a leafy sapling that branches out and gets taller; fruit trees blossom, then set fruit.
// When a day ends (after 23:59:59) its tree is locked and never changes again. No new trees after the exam day.
// Uses helpers from index.html (loadStudy, saveStudy, daySec, dkey, fromKey, midnight, EXAM, screen, nav, el, app, ...).

const GROW_FULL_SEC = 8 * 3600;
const GARDEN_EPOCH = new Date(2026, 8, 26); // the first garden day, whose tree is a Baobab
// leaf: colour of the mature leaves (young leaves start out green when "green" is given: autumn colours come with age).
// bark: bark pattern. shape: leaf outline. bloom: blossom colours on fruit trees (flowers first, then fruit). flower: a flowering tree.
const SPECIES = [
  { name: "Baobab", kind: "baobab", bark: "smooth", trunk: 0xa88a74, leaf: 0x6f9a45, shape: "digit", leafSize: .17 },
  { name: "Lemon Tree", kind: "round", bark: "smooth", form: "citrus", trunk: 0x7b5a3a, leaf: 0x2f6e30, shape: "oval", leafSize: .19, fruit: 0xffdc1f, oval: true, bloom: [0xffffff, 0xfff6e0] },
  { name: "Apple Tree", kind: "round", bark: "scaly", form: "apple", trunk: 0x7a5230, leaf: 0x4f8f3a, shape: "oval", leafSize: .21, fruit: 0xd8232a, bloom: [0xffffff, 0xffd0dc] },
  { name: "Korean Red Pine", kind: "pine", bark: "plates", trunk: 0xa4553a, leaf: 0x2f5e3a, shape: "pompom", leafSize: .32 },
  { name: "Ginkgo", kind: "ginkgo", bark: "fissured", trunk: 0x6e5840, leaf: 0xf0c419, green: 0x76a83a, shape: "fan", leafSize: .19 },
  { name: "Grape Vine", kind: "vine", bark: "fissured", trunk: 0x6b4a33, leaf: 0x4f8f35, shape: "grape", leafSize: .26, fruit: 0x5b2a86, bloom: [0xd4e28e] },
  { name: "Cherry Blossom", kind: "round", bark: "lenticel", form: "cherry", trunk: 0x5a3a30, leaf: 0x5b9440, shape: "oval", leafSize: .18, flower: [0xffd9e4, 0xffb0c8, 0xffffff] },
  { name: "Orange Tree", kind: "round", bark: "smooth", form: "citrus", trunk: 0x7b5a3a, leaf: 0x2d6a30, shape: "oval", leafSize: .2, fruit: 0xff8616, bloom: [0xffffff, 0xfff6e0] },
  { name: "Weeping Willow", kind: "willow", bark: "fissured", trunk: 0x6d5a3e, leaf: 0x9cc45c, shape: "lance", leafSize: .14 },
  { name: "Maple", kind: "round", bark: "scaly", form: "maple", trunk: 0x6a4630, leaf: 0xd4532b, green: 0x5e9a3a, shape: "maple", leafSize: .24 },
  { name: "Fir", kind: "cone", bark: "smooth", trunk: 0x6a5a4c, leaf: 0x2f5f42, shape: "brush", leafSize: .4 },
  { name: "Palm", kind: "palm", bark: "rings", trunk: 0x9d8466, leaf: 0x4e9a3f, shape: "leaflet", leafSize: .34, fruit: 0x6f5a2e, bloom: [0xf3e3a0] },
  { name: "Oak", kind: "round", bark: "fissured", form: "oak", trunk: 0x6b4d33, leaf: 0x4d7a34, shape: "oak", leafSize: .22 },
  { name: "Olive Tree", kind: "round", bark: "fissured", form: "olive", trunk: 0x7d6a55, leaf: 0x8aa27a, shape: "lance", leafSize: .17, fruit: 0x3d2440, small: true, bloom: [0xf6f2d6] },
  { name: "Jacaranda", kind: "round", bark: "scaly", form: "jacaranda", trunk: 0x5e4a3a, leaf: 0x5e9a45, shape: "leaflet", leafSize: .15, flower: [0xb79cf0, 0x8a62dc, 0x9d7ae6] },
  { name: "Birch", kind: "birch", bark: "birch", trunk: 0xeeeae2, leaf: 0x9cc04a, shape: "tri", leafSize: .16 }
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

// ---------- Trees ----------
// Each tree is a branching skeleton (trunk → limbs → side branches → twigs) with real leaves on the twigs, drawn with a
// few instanced meshes (wood, leaves, blossoms, fruit) so hundreds of leaves stay cheap.
// Growth follows real trees: a seedling with two seed leaves, then a slim leafy sapling whose branches appear one by one
// (each starts once its parent has grown that far) while the whole tree gets taller and the trunk thickens. Leaves on the
// young stem fall once the crown has formed. Fruit trees blossom first (~60–80%), the petals fall, small green fruit
// sets and swells, and it ripens to its colour by 100%. Flowering trees stay in bloom at the end.

// Shared shapes (built once).
const TREE_GEO = {};
function geoColor(T, g, fn) {
  const p = g.attributes.position, c = [];
  for (let i = 0; i < p.count; i++) { const k = fn(p.getX(i), p.getY(i), p.getZ(i)); c.push(k[0], k[1], k[2]); }
  g.setAttribute("color", new T.Float32BufferAttribute(c, 3));
  return g;
}
function mergeGeo(T, list) {
  const P = [], N = [], C = [];
  list.forEach(g => {
    g = g.index ? g.toNonIndexed() : g;
    P.push(...g.attributes.position.array); N.push(...g.attributes.normal.array); C.push(...g.attributes.color.array);
  });
  const out = new T.BufferGeometry();
  out.setAttribute("position", new T.Float32BufferAttribute(P, 3));
  out.setAttribute("normal", new T.Float32BufferAttribute(N, 3));
  out.setAttribute("color", new T.Float32BufferAttribute(C, 3));
  return out;
}
// Leaf outlines: the stalk end is at (0, 0) and the tip at y = 1 (unit length; each leaf is scaled to size).
function leafOutline(kind) {
  const pts = [], N = 7;
  const side = fx => {
    for (let i = 0; i <= N; i++) { const t = i / N; pts.push([fx(t), t]); }
    for (let i = N - 1; i > 0; i--) { const t = i / N; pts.push([-fx(t), t]); }
  };
  const S = (t, p, q) => Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(t, p))), q);
  if (kind === "oval") side(t => .3 * S(t, .8, .85));
  else if (kind === "lance") side(t => .11 * S(t, .7, .8));
  else if (kind === "leaflet") side(t => .08 * S(t, .6, .7));
  else if (kind === "digit1") side(t => .21 * S(t, .7, .75));
  else if (kind === "tri") side(t => .4 * S(t, .5, 1.1) * (1 + .05 * Math.sin(t * 40)));
  else if (kind === "oak") side(t => .27 * S(t, .9, .7) * (.78 + .26 * Math.sin(t * Math.PI * 8 + 1)));
  else if (kind === "maple" || kind === "grape") {
    // Palmate: five lobes around the centre of the blade (deep and pointed for maple, shallow for grape).
    const deep = kind === "maple" ? .55 : .2, sharp = kind === "maple" ? 3 : 1.5, cy = .46, M = 50;
    pts.push([0, 0]);
    for (let i = 0; i <= M; i++) {
      const a = -Math.PI / 2 + .3 + i / M * (2 * Math.PI - .6);
      const lobe = Math.pow(.5 + .5 * Math.cos(5 * (a - Math.PI / 2)), sharp), r = .5 * (1 - deep + deep * lobe);
      pts.push([r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  } else if (kind === "fan") {
    // Ginkgo: a fan with a notch in the middle of the outer edge.
    pts.push([0, 0]);
    for (let i = 0; i <= 16; i++) {
      const a = (35 + i / 16 * 110) * Math.PI / 180, r = .95 * (1 - .22 * Math.exp(-Math.pow((a - Math.PI / 2) / .1, 2)));
      pts.push([r * Math.cos(a) * .8, r * Math.sin(a)]);
    }
  }
  return pts;
}
function leafGeometry(T, kind) {
  if (TREE_GEO["leaf" + kind]) return TREE_GEO["leaf" + kind];
  let g;
  if (kind === "brush" || kind === "pompom") {
    // Conifer needles: a bottle-brush spray (fir) or a radiating tuft (pine).
    const tris = [];
    const needle = (b, tip, w) => {
      const side = new T.Vector3().subVectors(tip, b).cross(new T.Vector3(0, 1, .3)).normalize().multiplyScalar(w);
      tris.push(b.x - side.x, b.y - side.y, b.z - side.z, b.x + side.x, b.y + side.y, b.z + side.z, tip.x, tip.y, tip.z);
    };
    const V3 = (x, y, z) => new T.Vector3(x, y, z);
    if (kind === "brush") {
      for (let k = 0; k < 10; k++) {
        const y = k / 10 * .9;
        [[1, .15], [-1, .15], [.55, .8], [-.55, .8]].forEach(([dx, dz]) => needle(V3(0, y, 0), V3(dx * .2, y + .14, dz * .14), .014));
      }
    } else {
      for (let k = 0; k < 18; k++) {
        const th = Math.sqrt(k / 18) * 1.25, ph = k * 2.4;
        needle(V3(0, 0, 0), V3(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)), .025);
      }
    }
    g = new T.BufferGeometry();
    g.setAttribute("position", new T.Float32BufferAttribute(tris, 3));
    g.computeVertexNormals();
    geoColor(T, g, (x, y, z) => { const k = .7 + .45 * Math.min(1, Math.hypot(x, z) * 3 + (kind === "pompom" ? y * .5 : 0)); return [k, k, k]; });
  } else if (kind === "digit") {
    // Palmately compound leaf (baobab): five leaflets spreading from the tip of the stalk.
    const parts = [];
    for (let k = 0; k < 5; k++) {
      const sh = new T.Shape();
      leafOutline("digit1").forEach(([x, y], i) => (i ? sh.lineTo(x, y) : sh.moveTo(x, y)));
      const one = new T.ShapeGeometry(sh);
      const p = one.attributes.position;
      for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i); p.setZ(i, x * x * 1.2 - y * y * .15); }
      one.scale(.75, .75, .75);
      one.rotateZ((k - 2) * .42);
      one.computeVertexNormals();
      parts.push(geoColor(T, one, (x, y) => { const c = .82 + .25 * Math.hypot(x, y); return [c, c, c]; }));
    }
    g = mergeGeo(T, parts);
  } else {
    const sh = new T.Shape();
    leafOutline(kind).forEach(([x, y], i) => (i ? sh.lineTo(x, y) : sh.moveTo(x, y)));
    g = new T.ShapeGeometry(sh);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i); p.setZ(i, x * x * .9 - y * y * .2); } // cupped, tip curls down
    g.computeVertexNormals();
    geoColor(T, g, (x, y) => { const k = .82 + .22 * y; return [k, k, k]; });
  }
  return (TREE_GEO["leaf" + kind] = g);
}
// A small cluster of five-petal flowers facing +z (blossoms grow in clusters, like apple blossom), yellow centres.
function flowerGeometry(T) {
  if (TREE_GEO.flower) return TREE_GEO.flower;
  const one = flowerOne(T), parts = [];
  [[0, 0, .06, 0, 0], [.42, .25, 0, .5, .3], [-.38, .32, 0, -.4, .4], [.05, -.45, 0, .2, -.5]].forEach(([x, y, z, ry, rx], i) => {
    const g = one.clone();
    if (i) g.scale(.8, .8, .8);
    g.rotateX(rx); g.rotateY(ry); g.translate(x, y, z);
    parts.push(g);
  });
  return (TREE_GEO.flower = mergeGeo(T, parts));
}
function flowerOne(T) {
  const parts = [];
  for (let k = 0; k < 5; k++) {
    const sh = new T.Shape(), N = 5;
    for (let i = 0; i <= N; i++) { const t = i / N; const x = .4 * Math.pow(Math.sin(Math.PI * Math.pow(t, .65)), .6); i ? sh.lineTo(x, t) : sh.moveTo(x, t); }
    for (let i = N - 1; i > 0; i--) { const t = i / N; sh.lineTo(-.4 * Math.pow(Math.sin(Math.PI * Math.pow(t, .65)), .6), t); }
    const g = new T.ShapeGeometry(sh);
    g.scale(.5, .5, .5);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) p.setZ(i, p.getY(i) * p.getY(i) * .5);
    g.rotateZ(k / 5 * Math.PI * 2);
    g.computeVertexNormals();
    parts.push(geoColor(T, g, () => [1, 1, 1]));
  }
  const c = new T.CircleGeometry(.09, 6);
  c.translate(0, 0, .03);
  parts.push(geoColor(T, c, () => [1, .82, .25]));
  return mergeGeo(T, parts);
}
function fruitGeometry(T, bunch) {
  const key = bunch ? "bunch" : "fruit";
  if (TREE_GEO[key]) return TREE_GEO[key];
  let g;
  if (!bunch) g = geoColor(T, new T.SphereGeometry(1, 10, 7), () => [1, 1, 1]);
  else {
    // A bunch of grapes: rows of berries getting fewer towards the bottom.
    const parts = [];
    [6, 5, 4, 3, 2, 1].forEach((n, r) => {
      for (let i = 0; i < n; i++) {
        const a = i / n * Math.PI * 2 + r, rad = n === 1 ? 0 : .07 * n / 2.2;
        const s = new T.SphereGeometry(.12, 8, 6);
        s.translate(Math.cos(a) * rad, -.08 - r * .17, Math.sin(a) * rad);
        parts.push(geoColor(T, s, () => [1 - r * .05, 1 - r * .05, 1 - r * .05]));
      }
    });
    g = mergeGeo(T, parts);
  }
  return (TREE_GEO[key] = g);
}
// Bark: a grey-scale pattern drawn once per bark type (tinted per branch by the instance colour) and also used as a
// bump map, so the trunk shows furrows, plates, lenticels or rings instead of a flat colour.
const BARK_TEX = {};
function barkTexture(T, kind) {
  if (BARK_TEX[kind]) return BARK_TEX[kind];
  const S = 256, cv = document.createElement("canvas");
  cv.width = cv.height = S;
  const c = cv.getContext("2d"), rnd = seeded("bark-" + kind), R = (a, b) => a + (b - a) * rnd();
  const gray = (v, a = 1) => `rgba(${v | 0},${v | 0},${v | 0},${a})`;
  // Each element is drawn nine times (shifted by a tile) so the pattern repeats seamlessly around and along a branch.
  const each = (n, make) => {
    for (let i = 0; i < n; i++) {
      const draw = make();
      for (const dx of [-S, 0, S]) for (const dy of [-S, 0, S]) { c.save(); c.translate(dx, dy); draw(); c.restore(); }
    }
  };
  const rrect = (x, y, w, h, r) => { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); };
  const base = { smooth: 225, birch: 244, lenticel: 205, rings: 205, plates: 95, fissured: 200, scaly: 140 }[kind];
  c.fillStyle = gray(base);
  c.fillRect(0, 0, S, S);
  if (kind === "fissured") {
    // Deep vertical furrows between long, interlacing ridges (oak, willow, olive, ginkgo, vine).
    each(34, () => {
      const x0 = R(0, S), ph = R(0, 6.28), w = R(2.5, 7), amp = R(3, 10), v = R(35, 85);
      return () => { c.strokeStyle = gray(v, .9); c.lineWidth = w; c.beginPath(); for (let y = -8; y <= S + 8; y += 8) { const x = x0 + Math.sin(y * .045 + ph) * amp; y < 0 ? c.moveTo(x, y) : c.lineTo(x, y); } c.stroke(); };
    });
    each(24, () => {
      const x0 = R(0, S), ph = R(0, 6.28), amp = R(2, 7);
      return () => { c.strokeStyle = gray(240, .45); c.lineWidth = 2; c.beginPath(); for (let y = -8; y <= S + 8; y += 8) { const x = x0 + Math.sin(y * .05 + ph) * amp; y < 0 ? c.moveTo(x, y) : c.lineTo(x, y); } c.stroke(); };
    });
  } else if (kind === "plates" || kind === "scaly") {
    // Irregular plates separated by dark cracks: big flaky plates (pine), small scales (apple, maple, jacaranda).
    const big = kind === "plates";
    each(big ? 80 : 170, () => {
      const x = R(0, S), y = R(0, S), w = big ? R(18, 42) : R(8, 20), h = big ? R(28, 64) : R(10, 28), v = big ? R(155, 230) : R(185, 235), r = R(2, 6);
      return () => { c.fillStyle = gray(v); rrect(x, y, w, h, r); c.fill(); };
    });
  } else if (kind === "lenticel") {
    // Cherry: smooth, shiny bark with short horizontal lenticel stripes.
    each(170, () => { const x = R(0, S), y = R(0, S), w = R(6, 24), h = R(1.5, 3.5), v = R(55, 105); return () => { c.fillStyle = gray(v, .85); c.fillRect(x, y, w, h); }; });
    each(10, () => { const y = R(0, S); return () => { c.fillStyle = gray(170, .35); c.fillRect(0, y, S, R(2, 5)); }; });
  } else if (kind === "birch") {
    // Birch: white, papery bark with black horizontal marks and a few dark chevrons.
    each(80, () => { const x = R(0, S), y = R(0, S), w = R(6, 36), h = R(2, 6), v = R(20, 60); return () => { c.fillStyle = gray(v, .9); rrect(x, y, w, h, 1.5); c.fill(); }; });
    each(5, () => { const x = R(0, S), y = R(0, S), w = R(24, 40); return () => { c.fillStyle = gray(45, .85); c.beginPath(); c.moveTo(x, y); c.lineTo(x + w / 2, y + w * .45); c.lineTo(x + w, y); c.lineTo(x + w / 2, y + w * .2); c.closePath(); c.fill(); }; });
    each(40, () => { const x = R(0, S), y = R(0, S), w = R(20, 70); return () => { c.fillStyle = gray(205, .6); c.fillRect(x, y, w, 1); }; });
  } else if (kind === "rings") {
    // Palm: rings left by old leaf bases, with fibres in between.
    for (let y = 0; y < S; y += 128) { c.fillStyle = gray(135); c.fillRect(0, y, S, 6); c.fillStyle = gray(235, .6); c.fillRect(0, y + 6, S, 4); }
    each(90, () => { const x = R(0, S), y = R(0, S), h = R(6, 22), v = R(150, 195); return () => { c.fillStyle = gray(v, .45); c.fillRect(x, y, 1.5, h); }; });
  } else {
    // Smooth bark (baobab, fir, citrus): faint horizontal wrinkles and a few vertical streaks.
    each(70, () => {
      const x0 = R(0, S), y0 = R(0, S), len = R(30, 130), ph = R(0, 6.28), v = R(120, 170), w = R(.8, 1.8);
      return () => { c.strokeStyle = gray(v, .25); c.lineWidth = w; c.beginPath(); for (let x = 0; x <= len; x += 6) { const y = y0 + Math.sin(x * .06 + ph) * 2; x ? c.lineTo(x0 + x, y) : c.moveTo(x0 + x, y); } c.stroke(); };
    });
    each(25, () => { const x = R(0, S), y = R(0, S), h = R(20, 70); return () => { c.fillStyle = gray(150, .18); c.fillRect(x, y, R(2, 5), h); }; });
  }
  // Fine grain.
  const im = c.getImageData(0, 0, S, S), d = im.data;
  for (let i = 0; i < d.length; i += 4) { const n = (rnd() - .5) * 20; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
  c.putImageData(im, 0, 0);
  const tex = new T.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = T.RepeatWrapping;
  tex.repeat.set(1, 2);
  return (BARK_TEX[kind] = tex);
}
function woodMat(T, kind) {
  const key = "wood-" + kind;
  if (!TREE_MAT[key]) { const tex = barkTexture(T, kind); TREE_MAT[key] = new T.MeshStandardMaterial({ map: tex, bumpMap: tex, bumpScale: kind === "smooth" ? .2 : .9, roughness: .95, metalness: 0 }); }
  return TREE_MAT[key];
}
const TREE_MAT = {};
function treeMats(T) {
  if (TREE_MAT.wood) return TREE_MAT;
  TREE_MAT.wood = new T.MeshStandardMaterial({ roughness: .95, metalness: 0 });
  TREE_MAT.leaf = new T.MeshStandardMaterial({ vertexColors: true, roughness: .72, metalness: 0, side: T.DoubleSide });
  TREE_MAT.bloom = new T.MeshStandardMaterial({ vertexColors: true, roughness: .6, metalness: 0, side: T.DoubleSide, emissive: 0xffffff, emissiveIntensity: .08 });
  TREE_MAT.fruit = new T.MeshStandardMaterial({ vertexColors: true, roughness: .42, metalness: 0 });
  TREE_MAT.mark = new T.MeshStandardMaterial({ color: 0x2b2b2b, roughness: 1 });
  return TREE_MAT;
}

function buildTree(T, spec, seedKey, lod = 1) {
  const rnd = seeded(seedKey + spec.name), R = (lo, hi) => lo + (hi - lo) * rnd();
  const V = (x, y, z) => new T.Vector3(x, y, z), UP = V(0, 1, 0);
  const outer = new T.Group(), root = new T.Group();
  outer.add(root);
  const mats = treeMats(T);
  const nodes = [], sets = { leaf: [], bloom: [], fruit: [], mark: [] }, statics = [];
  const dense = lod ? 1 : .45; // fewer, larger leaves when many trees are on screen
  const k = spec.kind;

  // A straight piece of wood growing from its base during [a, b]; its base sits on its parent at fraction "at".
  function seg(parent, at, dir, len, r, a, dur, o = {}) {
    dir = dir.clone().normalize();
    const n = {
      parent, at, dir, len, r, a, b: Math.min(.8, a + dur), color: o.color ?? spec.trunk, yOnly: o.yOnly,
      q: new T.Quaternion().setFromUnitVectors(UP, dir), s: 0, pos: V(0, 0, 0), cur: new T.Quaternion(), curDir: V(0, 1, 0)
    };
    if (o.young) n.q0 = new T.Quaternion().setFromUnitVectors(UP, o.young.clone().normalize());
    n.full = parent ? parent.full.clone().addScaledVector(parent.dir, at * parent.len) : (o.origin || V(0, 0, 0)).clone();
    n.origin = n.full.clone();
    nodes.push(n);
    return n;
  }
  // When a segment has grown to fraction f of its length (so children there never float).
  const reach = (n, f) => n.a + (n.b - n.a) * (1 - Math.sqrt(Math.max(0, 1 - Math.min(1, f))));
  // A gently curving limb of a few segments, each slightly thinner than the last.
  function limb(parent, at, dir, len, r, a, dur, o = {}) {
    const n = o.segs || 3, out = [];
    let p = parent, pat = at, d = dir.clone().normalize(), rr = r, t0 = a;
    for (let i = 0; i < n; i++) {
      const s = seg(p, pat, d, len / n, rr, t0, dur / n * 1.4, o);
      out.push(s);
      p = s; pat = 1; rr *= .72;
      t0 = s.a + (s.b - s.a) * .7;
      const w = o.wiggle ?? .12;
      d = d.clone().add(o.bend || V(0, 0, 0)).add(V(R(-w, w), R(-w, w), R(-w, w))).normalize();
    }
    return out;
  }
  // A direction at angle th from d, turned by ph around it.
  function spread(d, th, ph) {
    const ref = Math.abs(d.y) < .9 ? UP : V(1, 0, 0);
    const u = V(0, 0, 0).crossVectors(d, ref).normalize(), v = V(0, 0, 0).crossVectors(d, u).normalize();
    return d.clone().multiplyScalar(Math.cos(th)).add(u.multiplyScalar(Math.cos(ph) * Math.sin(th))).add(v.multiplyScalar(Math.sin(ph) * Math.sin(th))).normalize();
  }
  // Hang something on segment n at fraction f: it points along dirW and faces normW (world directions at full size).
  function attach(set, n, f, dirW, normW, size, a, b, extra = {}) {
    const y = dirW.clone().normalize(), z = normW.clone().sub(y.clone().multiplyScalar(normW.dot(y)));
    if (z.lengthSq() < 1e-4) z.copy(spread(y, Math.PI / 2, 0)); else z.normalize();
    const x = V(0, 0, 0).crossVectors(y, z);
    const qW = new T.Quaternion().setFromRotationMatrix(new T.Matrix4().makeBasis(x, y, z));
    const inv = n.q.clone().invert();
    const off = (extra.off || V(0, 0, 0)).clone().applyQuaternion(inv);
    const item = { ...extra, n, f, off, q: inv.multiply(qW), size, a, b };
    sets[set].push(item);
    return item;
  }
  // Leaves spiral up a twig (about 137° apart, like real shoots), angled up and out with the blade facing the light.
  let phyl = R(0, 6.28);
  function leaves(n, count, o = {}) {
    const from = o.from ?? .25, size = (o.size || spec.leafSize) / Math.sqrt(dense);
    const cnt = Math.max(1, Math.round(count * dense));
    for (let i = 0; i < cnt; i++) {
      const f = from + (1 - from) * (cnt === 1 ? 1 : i / (cnt - 1));
      phyl += 2.4;
      const around = spread(n.dir, Math.PI / 2, phyl), elev = o.elev ?? .55;
      const dirW = around.clone().multiplyScalar(Math.cos(elev)).add(n.dir.clone().multiplyScalar(Math.sin(elev)));
      if (o.droop) dirW.y -= o.droop;
      const normW = (o.face || UP).clone().add(around.clone().multiplyScalar(.35)).add(V(R(-.3, .3), 0, R(-.3, .3)));
      const a = reach(n, f) + R(0, .03);
      attach("leaf", n, f, dirW, normW, size * R(.8, 1.15), a, a + .1, { off: around.multiplyScalar(n.r * (1 - .28 * f)), shed: o.shed, tint: R(.86, 1.12) });
    }
    for (let i = 0; i < (o.tip || 0); i++) { // a little rosette at the tip
      const d = spread(n.dir, R(.35, .7), i / o.tip * 6.28 + R(0, 1)), a = reach(n, 1) + R(0, .03);
      attach("leaf", n, 1, d, (o.face || UP).clone().add(d.clone().multiplyScalar(.4)), size * R(.75, 1), a, a + .1, { shed: o.shed, tint: R(.86, 1.12) });
    }
  }
  // Blossoms and fruit on a twig. Fruit trees: more blossoms than fruit (not every flower sets), petals fall before
  // the fruit forms in the same place.
  function flowersAndFruit(n, nb, nf) {
    for (let i = 0; i < nb; i++) {
      const f = R(.65, 1), around = spread(n.dir, Math.PI / 2, R(0, 6.28));
      const face = around.clone().multiplyScalar(.7).add(UP.clone().multiplyScalar(.6)).add(n.dir.clone().multiplyScalar(.3));
      const flowering = !!spec.flower;
      const a = flowering ? R(.62, .76) : R(.56, .64);
      if (i >= nf && rnd() > dense) continue; // lighter when many trees are on screen
      const size = (flowering ? R(.2, .25) : R(.19, .24)) * (k === "vine" || spec.small || k === "palm" ? .55 : 1);
      const item = attach("bloom", n, f, n.dir, face, size, a, a + .06, {
        off: around.clone().multiplyScalar(n.r + .04), fall: flowering ? 0 : R(.77, .83), color: spec.flower ? spec.flower[i % spec.flower.length] : spec.bloom[i % spec.bloom.length]
      });
      if (i < nf && spec.fruit) {
        const r = k === "vine" ? .34 : spec.small ? .04 : k === "palm" ? .12 : spec.oval ? .085 : .1;
        const fa = Math.max(item.fall || .8, .8) + R(0, .03);
        attach("fruit", n, f, UP, V(0, 0, 1), r, fa, 1, { off: around.clone().multiplyScalar(n.r), hang: k === "vine" ? 0 : r * 1.15, sy: spec.oval ? 1.3 : spec.small ? 1.25 : 1 });
      }
    }
  }

  // ----- Shapes of the different trees -----
  // A broadleaf tree: short trunk, 4–6 main limbs, side branches on each limb, then leafy twigs.
  function broadleaf(o) {
    const trunk = limb(null, 0, V(R(-.06, .06), 1, R(-.06, .06)), o.H, o.r, 0, .2, { segs: 2, wiggle: o.twist || .05 });
    const top = trunk[trunk.length - 1];
    trunk.forEach(t => leaves(t, 5, { from: .3, shed: .55 })); // leaves on the young stem fall once the crown has formed
    const twigs = [];
    const scaffold = l => {
      l.forEach((sg, j) => {
        for (let q = 0; q < (j === 0 ? 1 : 2); q++) {
          const f = R(.35, 1), d2 = spread(sg.dir, R(.5, .95), R(0, 6.28)).add(V(0, o.up, 0)).normalize();
          const sub = limb(sg, f, d2, o.L * R(.35, .5) * (1 - j * .15), sg.r * .65, reach(sg, f), .2, { segs: 2, bend: V(0, -o.droop * .8, 0), wiggle: .15 });
          sub.forEach(s2 => {
            for (let w = 0; w < o.tw; w++) {
              const f2 = R(.3, 1), d3 = spread(s2.dir, R(.5, 1), R(0, 6.28)).add(V(0, .2, 0)).normalize();
              twigs.push(seg(s2, f2, d3, o.L * R(.14, .22), s2.r * .6, reach(s2, f2), .12));
            }
          });
          twigs.push(sub[sub.length - 1]);
        }
      });
      twigs.push(l[l.length - 1]);
    };
    // Main limbs fan out where the trunk divides...
    for (let i = 0; i < o.n; i++) {
      const at = i === 0 ? 1 : R(.45, 1);
      const d = spread(UP, o.th * R(.8, 1.15), i / o.n * 6.283 + R(-.35, .35));
      scaffold(limb(top, at, d, o.L * R(.85, 1.1), top.r * .72 * R(.85, 1), reach(top, at) + i * .012, .3, { segs: 3, bend: V(0, -o.droop, 0), wiggle: o.wiggle || .14 }));
    }
    // ...and a few limbs leave the trunk lower down, reaching out sideways before turning up.
    for (let i = 0; i < (o.low || 0); i++) {
      const host = trunk[0], at = R(.55, .95), d = spread(UP, R(1.1, 1.4), R(0, 6.28));
      scaffold(limb(host, at, d, o.L * R(.7, .9), host.r * .55, reach(host, at), .3, { segs: 3, bend: V(0, .12, 0), wiggle: o.wiggle || .14 }));
    }
    twigs.forEach(t => leaves(t, o.lpt, { from: .15, tip: 2 }));
    if (spec.fruit || spec.flower) twigs.forEach((t, i) => {
      if (spec.flower) flowersAndFruit(t, o.fpt || 4, 0);
      else if (rnd() < o.fruitChance) flowersAndFruit(t, 3, 1);
      else if (rnd() < .6) flowersAndFruit(t, 2, 0);
    });
  }
  const FORMS = {
    // apple: short trunk, open vase of wide-angled limbs; citrus: low, dense and rounded, branching near the ground;
    // cherry: spreading; oak: massive, nearly horizontal limbs and a broad crown; maple: dense, rounded;
    // olive: gnarled and twisted, several limbs from low down; jacaranda: an open umbrella.
    apple: { H: .8, r: .12, n: 4, th: 1.05, L: 1.05, droop: .12, up: .2, tw: 3, lpt: 7, fruitChance: .22, low: 1 },
    citrus: { H: .45, r: .1, n: 5, th: .85, L: .95, droop: .05, up: .35, tw: 3, lpt: 8, fruitChance: .2, low: 2 },
    cherry: { H: .9, r: .13, n: 5, th: 1.1, L: 1.15, droop: .1, up: .15, tw: 3, lpt: 5, fpt: 5, low: 1 },
    oak: { H: .95, r: .18, n: 4, th: 1.25, L: 1.3, droop: 0, up: .12, tw: 3, lpt: 8, twist: .12, wiggle: .25, low: 2 },
    maple: { H: 1, r: .13, n: 5, th: .8, L: 1.15, droop: .05, up: .3, tw: 3, lpt: 7, low: 1 },
    olive: { H: .6, r: .15, n: 3, th: .9, L: 1, droop: .1, up: .2, tw: 3, lpt: 10, twist: .3, wiggle: .22, fruitChance: .32, low: 2 },
    jacaranda: { H: 1.1, r: .13, n: 5, th: 1.2, L: 1.25, droop: -.06, up: .05, tw: 3, lpt: 9, fpt: 5 }
  };

  if (k === "round") broadleaf(FORMS[spec.form]);
  else if (k === "willow") {
    // Weeping willow: upright limbs, then long thin shoots that arch over and hang almost to the ground.
    const trunk = limb(null, 0, V(R(-.05, .05), 1, 0), 1.1, .16, 0, .3, { segs: 2, wiggle: .08 });
    const top = trunk[1];
    trunk.forEach(t => leaves(t, 3, { from: .4, shed: .4 }));
    for (let i = 0; i < 5; i++) {
      const l = limb(top, R(.6, 1), spread(UP, R(.45, .7), i / 5 * 6.283 + R(-.3, .3)), R(.8, 1), top.r * .7, reach(top, .8) + i * .01, .25, { segs: 2, wiggle: .1 });
      l.forEach(sg => {
        for (let q = 0; q < 3; q++) {
          const d = spread(sg.dir, R(.6, 1), R(0, 6.28));
          d.y = Math.abs(d.y) * .4 + .1;
          const strand = limb(sg, R(.4, 1), d, R(1.2, 1.6), .025, reach(sg, .7), .3, { segs: 5, bend: V(0, -.5, 0), wiggle: .05, color: 0x8a7a48 });
          strand.forEach(s => leaves(s, 6, { from: 0, elev: .15, droop: .55, face: V(0, .3, 1) }));
        }
      });
    }
  } else if (k === "birch") {
    // Birch: one slender white trunk to the top; thin ascending branches with drooping tips; small triangular leaves.
    const trunk = limb(null, 0, UP, 2.5, .085, 0, .45, { segs: 4, wiggle: .04 });
    trunk.forEach(t => leaves(t, 2, { from: .3, shed: .45 }));
    for (let i = 0; i < 14; i++) {
      const h = .35 + .6 * i / 13, sg = trunk[Math.min(3, Math.floor(h * 4))], f = h * 4 - Math.floor(h * 4);
      const len = (1.15 - h * .75) * R(.8, 1.1) * .85;
      const l = limb(sg, f, spread(UP, R(.6, .9), i * 2.4), len, .03, reach(sg, f), .22, { segs: 2, bend: V(0, -.15, 0), color: 0xd9d3c8 });
      l.forEach(s => {
        for (let q = 0; q < 2; q++) {
          const f2 = R(.3, 1), tw = seg(s, f2, spread(s.dir, R(.5, .9), R(0, 6.28)).add(V(0, -.3, 0)), len * .3, .012, reach(s, f2), .12, { color: 0x5a4436 });
          leaves(tw, 5, { from: .1, tip: 1 });
        }
        leaves(s, 4, { from: .5 });
      });
    }
    trunk[0].color = 0xb9b2a6; // older, rougher bark at the base
  } else if (k === "ginkgo") {
    // Ginkgo: tall trunk with sparse branches rising at ~45°; fan leaves in little clusters on short spur shoots.
    const trunk = limb(null, 0, UP, 2.3, .12, 0, .4, { segs: 4, wiggle: .05 });
    trunk.forEach(t => leaves(t, 3, { from: .3, shed: .45 }));
    for (let i = 0; i < 11; i++) {
      const h = .3 + .65 * i / 10, sg = trunk[Math.min(3, Math.floor(h * 4))], f = h * 4 - Math.floor(h * 4);
      const l = limb(sg, f, spread(UP, R(.6, .85), i * 2.4), (1.05 - h * .6) * R(.85, 1.1), .045, reach(sg, f), .25, { segs: 2, bend: V(0, .05, 0) });
      l.forEach(s => { for (let c = 0; c < 3; c++) { const f2 = R(.25, 1); const spur = seg(s, f2, spread(s.dir, 1, R(0, 6.28)), .05, .012, reach(s, f2), .08); leaves(spur, 0, { tip: 5 }); } });
    }
    const crownTop = trunk[3];
    leaves(crownTop, 4, { from: .5, tip: 4 });
  } else if (k === "pine") {
    // Korean red pine: a leaning, curving trunk (reddish above), bare below; branches in the upper half reach out and
    // turn up at the ends, carrying tufts of long needles.
    const lean = R(-.3, .3);
    const trunk = limb(null, 0, V(lean * .3, 1, R(-.1, .1)), 2.5, .14, 0, .4, { segs: 4, wiggle: .15, bend: V(-lean * .15, 0, 0) });
    trunk.forEach((t, i) => (t.color = new T.Color(0x6e5c4e).lerp(new T.Color(0xc4683c), i / 3).getHex())); // red, flaky bark higher up
    trunk.forEach(t => leaves(t, 2, { from: .3, shed: .45 }));
    for (let i = 0; i < 8; i++) {
      const h = .45 + .5 * i / 7, sg = trunk[Math.min(3, Math.floor(h * 4))], f = h * 4 - Math.floor(h * 4);
      const l = limb(sg, f, spread(UP, R(1.1, 1.4), i * 2.4), (1.25 - h * .7) * R(.85, 1.1), .06, reach(sg, f), .25, { segs: 3, bend: V(0, .12, 0), wiggle: .15, color: 0xb8653e });
      l.forEach((s, j) => {
        if (j) for (let q = 0; q < 2; q++) { const f2 = R(.4, 1), tw = seg(s, f2, spread(s.dir, R(.6, 1), R(0, 6.28)).add(V(0, .4, 0)), .22, .018, reach(s, f2), .12); leaves(tw, 2, { from: .5, elev: 1.2, tip: 2 }); }
        leaves(s, 1, { from: 1, elev: 1.2 });
      });
      leaves(l[2], 0, { tip: 3 });
    }
    leaves(trunk[3], 3, { from: .6, elev: 1.3, tip: 3 });
  } else if (k === "cone") {
    // Fir: a straight trunk with whorls of branches, longest at the bottom; flat sprays of needles on side twigs.
    const trunk = limb(null, 0, UP, 2.8, .13, 0, .45, { segs: 3, wiggle: .02 });
    for (let w = 0; w < 11; w++) {
      const h = .12 + .83 * w / 10, sg = trunk[Math.min(2, Math.floor(h * 3))], f = h * 3 - Math.floor(h * 3);
      const L = .15 + .9 * (1 - h), nb = w > 7 ? 4 : 5;
      for (let i = 0; i < nb; i++) {
        const l = limb(sg, f, spread(UP, R(1.4, 1.6), i / nb * 6.283 + w), L, .022, reach(sg, f), .2, { segs: 2, bend: V(0, .06, 0), wiggle: .06 });
        l.forEach(s => {
          const side = V(0, 0, 0).crossVectors(UP, s.dir).normalize();
          for (let q = 0; q < 3; q++) {
            const f2 = (q + 1) / 3.5, sd = q % 2 ? 1 : -1;
            const tw = seg(s, f2, s.dir.clone().multiplyScalar(.75).add(side.clone().multiplyScalar(sd * .65)), L * .32, .008, reach(s, f2), .1);
            leaves(tw, 3, { from: 0, elev: 1.57, face: UP });
          }
          leaves(s, 4, { from: 0, elev: 1.57, face: UP });
        });
      }
    }
    leaves(trunk[2], 3, { from: .7, elev: 1.57, face: V(1, 0, 0) });
  } else if (k === "baobab") {
    // Grandidier's baobab (Madagascar): a very tall, straight, cylindrical trunk with smooth reddish-grey bark, slightly
    // flared at the base; a flat-topped crown of near-horizontal main branches that turn up at the ends, plus a few side
    // branches lower on the trunk; dense flat pads of palmate leaves. Young baobabs are slender; the trunk swells with age.
    const pts = [[.46, 0], [.43, .06], [.38, .2], [.355, .5], [.345, 1], [.33, 1.5], [.3, 1.85], [.25, 2.05], [.16, 2.15], [0, 2.18]].map(([x, y]) => new T.Vector2(x, y));
    const tex = barkTexture(T, "smooth").clone();
    tex.needsUpdate = true;
    tex.repeat.set(2, 3);
    const lathe = new T.Mesh(new T.LatheGeometry(pts, lod ? 32 : 16), new T.MeshStandardMaterial({ color: spec.trunk, map: tex, bumpMap: tex, bumpScale: .15, roughness: .9 }));
    root.add(lathe);
    statics.push(g => { const w = .24 + .76 * g * g; lathe.scale.set(w, 1, w); });
    const crownLimb = (origin, ph, th, len, r, a) => {
      const l = limb(null, 0, spread(UP, th, ph), len, r, a, .35, { segs: 3, bend: V(0, .14, 0), wiggle: .1, origin });
      l.forEach((sg, j) => {
        for (let q = 0; q < 2; q++) {
          const f = R(.3, 1), side = spread(sg.dir, R(.5, .9), R(0, 6.28));
          side.y = Math.abs(side.y) * .4 + .05;
          const sub = limb(sg, f, side, len * R(.3, .45), sg.r * .6, reach(sg, f), .18, { segs: 2, bend: V(0, .12, 0), wiggle: .15 });
          sub.forEach(sb => { const tw = seg(sb, R(.5, 1), spread(sb.dir, .5, R(0, 6.28)).add(V(0, .25, 0)), .16, .02, reach(sb, .8), .1); leaves(tw, 3, { from: .3, tip: 5, elev: .2, face: UP }); });
        }
        leaves(sg, 2, { from: .6, tip: j === 2 ? 5 : 0, elev: .2, face: UP });
      });
    };
    for (let i = 0; i < 6; i++) crownLimb(V(0, 2.1, 0), i / 6 * 6.283 + R(-.3, .3), R(1, 1.35), R(.75, 1), .12, R(0, .05));
    for (let i = 0; i < 2; i++) crownLimb(V(0, R(1.55, 1.85), 0), R(0, 6.28), R(1.25, 1.45), R(.7, .9), .09, R(.05, .12));
  } else if (k === "palm") {
    // Palm: establishment phase first (fronds standing up at the ground while the stem gets its full width), then the
    // trunk rises. Feather-like fronds: a curved stalk with many leaflets on both sides.
    let p = null, dir = V(0, 1, 0);
    const bend = R(.04, .09), trunk = [];
    for (let i = 0; i < 8; i++) {
      p = seg(p, 1, dir, .33, .13 - i * .007, .12 + i * .08, .18, { yOnly: true, color: i % 2 ? spec.trunk : 0x8a7358 });
      trunk.push(p);
      dir = V(dir.x + bend, 1, 0);
    }
    const top = p;
    for (let i = 0; i < 11; i++) {
      const ph = i / 11 * 6.283 + R(-.2, .2), th = R(.9, 1.35), a = i * .02;
      let par = top, at = 1;
      for (let j = 0; j < 4; j++) {
        const d = spread(UP, th + j * .32, ph), young = spread(UP, .2 + j * .08, ph);
        const s = seg(par, at, d, .36, .03 - j * .005, a + j * .04, .2, { young, color: 0x6f8a3a });
        const side = V(0, 0, 0).crossVectors(d, UP).normalize();
        for (let q = 0; q < Math.round(7 * dense); q++) {
          const f = (q + .5) / Math.round(7 * dense);
          [-1, 1].forEach(sd => {
            const dw = side.clone().multiplyScalar(sd * .85).add(d.clone().multiplyScalar(.45)).add(V(0, -.3, 0));
            attach("leaf", s, f, dw, UP, spec.leafSize * (j === 3 ? .7 : 1) / Math.sqrt(dense) * R(.85, 1.1), reach(s, f), reach(s, f) + .1, { tint: R(.88, 1.1) });
          });
        }
        par = s; at = 1;
      }
    }
    for (let i = 0; i < 5; i++) flowersAndFruit(top, 1, 1);
  } else if (k === "vine") {
    // Grape vine on a trellis: the stem climbs to the wire, two arms run along it, green shoots rise from the arms with
    // lobed leaves; tiny flower clusters come first, then bunches of grapes that turn from green to purple.
    const postM = new T.MeshStandardMaterial({ color: 0x8a6a4a, roughness: .95 });
    [-1.1, 1.1].forEach(x => { const m = new T.Mesh(new T.CylinderGeometry(.04, .045, 1.25, 8), postM); m.position.set(x, .625, 0); root.add(m); });
    const wire = new T.Mesh(new T.CylinderGeometry(.012, .012, 2.3, 6), postM);
    wire.rotation.z = Math.PI / 2; wire.position.set(0, 1.2, 0); root.add(wire);
    const stem = limb(null, 0, V(.12, 1, .05), 1.18, .1, .02, .35, { segs: 2, wiggle: .1 });
    leaves(stem[0], 3, { from: .4, shed: .55 });
    leaves(stem[1], 3, { from: .2, shed: .55 });
    [-1, 1].forEach(sd => {
      const arm = limb(stem[1], 1, V(sd, .02, 0), 1.05, .05, reach(stem[1], 1), .3, { segs: 4, wiggle: .05 });
      arm.forEach(s => {
        const shoot = limb(s, R(.3, .9), V(R(-.25, .25), 1, R(-.35, .35)), R(.3, .45), .018, reach(s, .6), .18, { segs: 2, color: 0x7d6b3c, wiggle: .2 });
        shoot.forEach(sh => leaves(sh, 2, { from: .3, tip: 1, elev: .3, face: V(0, .4, 1) }));
        flowersAndFruit(s, 1, 1);
      });
    });
  }

  // Seedling: two seed leaves on a little green stem; shown only at the very start.
  const sprout = new T.Group();
  const stemM = new T.Mesh(new T.CylinderGeometry(.018, .025, .26, 6), new T.MeshStandardMaterial({ color: 0x6aa84f, roughness: .8 }));
  stemM.position.y = .13;
  sprout.add(stemM);
  [-1, 1].forEach(sd => {
    const l = new T.Mesh(leafGeometry(T, "oval"), new T.MeshStandardMaterial({ color: 0x7cc35a, roughness: .7, side: T.DoubleSide, vertexColors: true }));
    l.scale.setScalar(.13); l.position.y = .25; l.rotation.set(-1.25, 0, sd * 1.35);
    sprout.add(l);
  });
  outer.add(sprout);

  // Instanced meshes.
  const col = new T.Color();
  const mk = (geo, mat, count, shadow = true) => {
    const m = new T.InstancedMesh(geo, mat, Math.max(1, count));
    m.count = count; m.frustumCulled = false; m.castShadow = shadow; m.receiveShadow = true;
    m.setColorAt(0, col.set(0xffffff)); // every instanced mesh carries colours, so the shared materials always match
    root.add(m);
    return m;
  };
  const woodGeo = TREE_GEO["wood" + lod] || (TREE_GEO["wood" + lod] = new T.CylinderGeometry(.72, 1, 1, lod ? 8 : 5, 1, true).translate(0, .5, 0));
  const wood = mk(woodGeo, woodMat(T, spec.bark || "fissured"), nodes.length);
  nodes.forEach((n, i) => wood.setColorAt(i, col.setHex(n.color).multiplyScalar(R(.9, 1.08))));
  const leafMesh = mk(leafGeometry(T, spec.shape), mats.leaf, sets.leaf.length);
  leafMesh.receiveShadow = false;
  const bloomMesh = mk(flowerGeometry(T), mats.bloom, sets.bloom.length, false);
  sets.bloom.forEach((it, i) => bloomMesh.setColorAt(i, col.setHex(it.color)));
  const fruitMesh = mk(fruitGeometry(T, k === "vine"), mats.fruit, sets.fruit.length);
  const markMesh = mk(new T.BoxGeometry(1, .3, .3), mats.mark, sets.mark.length, false);
  const leafBase = new T.Color(spec.green ?? spec.leaf), leafAutumn = new T.Color(spec.leaf);
  const unripe = new T.Color(0x6f9e3a), ripe = new T.Color(spec.fruit ?? 0xffffff);

  // Fruit and blossoms the gardener can reach for (a few placeholders that follow them).
  const features = [];
  const pickFrom = sets.fruit.length ? sets.fruit : sets.bloom;
  pickFrom.forEach((it, i) => { if (i % 2 === 0 && features.length < 14) { const o = new T.Object3D(); it.feat = o; root.add(o); features.push(o); } });
  if (sets.fruit.length) sets.bloom.forEach((it, i) => { if (i % 3 === 0 && features.length < 24) { const o = new T.Object3D(); it.feat = o; root.add(o); features.push(o); } });

  const M = new T.Matrix4(), S = V(1, 1, 1), P = V(0, 0, 0), Qt = new T.Quaternion(), ZERO = new T.Matrix4().makeScale(0, 0, 0);
  const prog = (g, a, b) => easeOut((g - a) / Math.max(.01, b - a));
  let firstColor = true;
  function place(list, mesh, scaleOf, colorOf, thick) {
    let any = false;
    list.forEach((it, i) => {
      const n = it.n, s = n.s > .002 ? scaleOf(it) : 0;
      if (it.feat) it.feat.visible = s > .5;
      if (s < .003) { mesh.setMatrixAt(i, ZERO); return; }
      any = true;
      P.copy(it.off).applyQuaternion(n.cur).multiplyScalar(n.yOnly ? 1 : Math.max(n.s, .05) * thick).add(n.pos).addScaledVector(n.curDir, it.f * n.len * n.s);
      if (it.hang) P.y -= it.hang * s;
      Qt.copy(n.cur).multiply(it.q);
      S.setScalar(it.size * s);
      if (it.sy) S.y *= it.sy;
      M.compose(P, Qt, S);
      mesh.setMatrixAt(i, M);
      if (it.feat) it.feat.position.copy(P);
      if (colorOf) mesh.setColorAt(i, colorOf(it));
    });
    mesh.visible = any; // nothing to draw (e.g. blossoms before they open or after they fall)
    mesh.instanceMatrix.needsUpdate = true;
    if (colorOf && mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }

  return {
    group: outer,
    features,
    update(g) {
      const sp = 1 - smooth((g - .1) / .12);
      sprout.visible = sp > .01;
      sprout.scale.setScalar(Math.max(.001, sp * .75));
      // The whole tree gets taller through the day; the trunk thickens with age; a young tree's leaves are already
      // nearly full size.
      const h = k === "vine" ? 1 : .14 + .86 * (1 - Math.pow(1 - Math.min(1, g), 1.5));
      root.scale.setScalar(h);
      const thick = .55 + .45 * g, big = Math.pow(1 / h, .45), mature = smooth((g - .1) / .6);
      statics.forEach(f => f(g));
      const gs = Math.min(1, g / .62); // the branching structure (and its leaves) forms by ~60%; then blossom and fruit
      nodes.forEach((n, i) => {
        n.s = prog(gs, n.a, n.b);
        if (n.q0) n.cur.copy(n.q0).slerp(n.q, mature); else n.cur.copy(n.q);
        n.curDir.set(0, 1, 0).applyQuaternion(n.cur);
        if (n.parent) n.pos.copy(n.parent.pos).addScaledVector(n.parent.curDir, n.at * n.parent.len * n.parent.s);
        else n.pos.copy(n.origin);
        if (n.s < .002) { wood.setMatrixAt(i, ZERO); return; }
        const rr = n.yOnly ? n.r : n.r * Math.max(n.s, .05) * thick;
        M.compose(n.pos, n.cur, S.set(rr, n.len * n.s, rr));
        wood.setMatrixAt(i, M);
      });
      wood.instanceMatrix.needsUpdate = true;
      if (wood.instanceColor) wood.instanceColor.needsUpdate = true;
      // Leaves (autumn colour with age for maple and ginkgo).
      const autumn = spec.green ? smooth((g - .7) / .28) : 0;
      const recolor = firstColor || spec.green;
      place(sets.leaf, leafMesh, it => prog(gs, it.a, it.b) * (it.shed ? 1 - smooth((gs - it.shed) / .12) : 1) * big,
        recolor ? it => col.copy(leafBase).lerp(leafAutumn, autumn).multiplyScalar(it.tint) : null, thick);
      place(sets.bloom, bloomMesh, it => prog(g, it.a, it.b) * (it.fall ? 1 - smooth((g - it.fall) / .05) : 1), null, thick);
      const ripeK = smooth((g - .88) / .12);
      place(sets.fruit, fruitMesh, it => smooth((g - it.a) / .04) * (.3 + .7 * smooth((g - it.a) / (1.02 - it.a))),
        it => col.copy(unripe).lerp(ripe, ripeK), thick);
      place(sets.mark, markMesh, it => it.n.s, null, thick);
      firstColor = false;
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
  let last = performance.now(), running = true, dirty = true;
  new ResizeObserver(() => (dirty = true)).observe(host);
  function frame(now) {
    if (!host.isConnected) { running = false; renderer.dispose(); return; }
    const dt = Math.min(.05, (now - last) / 1000);
    last = now;
    const moving = focus.distanceTo(wantFocus) > .001 || Math.abs(wantDist - dist) > .001;
    focus.lerp(wantFocus, .08);
    dist += (wantDist - dist) * .08;
    camera.position.set(focus.x + Math.sin(yaw) * Math.cos(pitch) * dist, focus.y + Math.sin(pitch) * dist + height * .15, focus.z + Math.cos(yaw) * Math.cos(pitch) * dist);
    camera.lookAt(focus);
    let changed = moving || dragging || hooks.length > 0 || dirty;
    trees.forEach(t => { if (t.tick(dt)) changed = true; });
    hooks.forEach(h => h(now / 1000, dt));
    // Only draw when something changed: a still garden costs almost no battery.
    if (changed) { renderer.render(scene, camera); dirty = false; }
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
function plantedTree(T, spec, key, growth, pos, lod = 1) {
  const holder = new T.Group();
  holder.position.copy(pos);
  const grass = new T.Mesh(new T.CylinderGeometry(1.25, 1.35, .16, 48), new T.MeshStandardMaterial({ color: 0x74a85a, roughness: 1 }));
  grass.position.y = -.08;
  grass.receiveShadow = true;
  const soil = new T.Mesh(new T.SphereGeometry(.34, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2), new T.MeshStandardMaterial({ color: 0x7a5a3c, roughness: 1 }));
  soil.scale.y = .35;
  holder.add(grass, soil);
  const tree = buildTree(T, spec, key, lod);
  holder.add(tree.group);
  let shown = growth, goal = growth, speed = 0;
  tree.update(shown);
  return {
    holder, soil,
    features: () => tree.features.filter(f => f.visible),
    get growth() { return shown; },
    grow(to, seconds = 3) { goal = to; speed = Math.abs(to - shown) / seconds; },
    set(to) { shown = goal = to; tree.update(shown); },
    tick(dt) { // returns true while the tree is changing (so the stage knows to redraw)
      if (shown === goal) return false;
      const stepTo = Math.min(Math.abs(goal - shown), speed * dt);
      shown += Math.sign(goal - shown) * stepTo;
      tree.update(shown);
      return true;
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
function smoothLathe(T, profile, mat, seg = 36, samples = 40) {
  const curve = new T.SplineCurve(profile.map(([x, y]) => new T.Vector2(x, y)));
  return new T.Mesh(new T.LatheGeometry(curve.getPoints(samples), seg), mat);
}
const ell = (T, r, sx, sy, sz, mat, x = 0, y = 0, z = 0, seg = 28) => {
  const m = new T.Mesh(new T.SphereGeometry(r, seg, Math.round(seg * .7)), mat);
  m.scale.set(sx, sy, sz); m.position.set(x, y, z);
  return m;
};
// Kept for anything else that still uses a simple capsule.
function capsule(T, r, len, mat) { return roundLimb(T, r, r, len, mat); }

// Soft "skin" with a velvety sheen and a hint of warm glow, so it reads as soft rather than painted wood.
const skinMat = (T, c) => new T.MeshPhysicalMaterial({ color: c, roughness: .5, metalness: 0, sheen: new T.Color(0xffd6c8), clearcoat: .08, clearcoatRoughness: .6, emissive: 0x5a2618, emissiveIntensity: .1 });
// A chubby limb: rounder in the middle than at the ends (like a cartoon arm or leg), one seamless piece.
function chubbyLimb(T, r0, r1, len, mat, bulge = 1.12, seg = 28) {
  const pts = [];
  for (let i = 0; i <= 10; i++) { const a = -Math.PI / 2 + (i / 10) * (Math.PI / 2); pts.push(new T.Vector2(Math.cos(a) * r1, -len + r1 + Math.sin(a) * r1)); }
  const mid = (r0 + r1) / 2 * bulge;
  pts.push(new T.Vector2(mid, -len / 2));
  for (let i = 0; i <= 10; i++) { const a = (i / 10) * (Math.PI / 2); pts.push(new T.Vector2(Math.cos(a) * r0, -r0 + Math.sin(a) * r0)); }
  const curve = new T.SplineCurve(pts);
  return new T.Mesh(new T.LatheGeometry(curve.getPoints(40), seg), mat);
}
// A soft round shadow under a character's feet so they sit on the grass instead of floating.
let blobTex = null;
function blobShadow(T, r) {
  if (!blobTex) {
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const g = c.getContext("2d"), grad = g.createRadialGradient(64, 64, 4, 64, 64, 62);
    grad.addColorStop(0, "rgba(20,40,20,.55)"); grad.addColorStop(1, "rgba(20,40,20,0)");
    g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
    blobTex = new T.CanvasTexture(c);
  }
  const m = new T.Mesh(new T.PlaneGeometry(r * 2, r * 2), new T.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = .006; m.renderOrder = 1;
  return m;
}
// Big cartoon eyes: white, coloured iris, pupil, two sparkles and an upper lash line. Returns the eye group (for blinking).
function cartoonEye(T, iris) {
  const eye = new T.Group();
  eye.add(ell(T, .045, 1, 1.15, .45, soft(T, 0xffffff, { roughness: .25 }), 0, 0, 0, 32));
  eye.add(ell(T, .031, 1, 1.12, .45, glossy(T, iris, { clearcoat: 1, clearcoatRoughness: .05, roughness: .3 }), 0, -.004, .012, 32));
  eye.add(ell(T, .016, 1, 1.12, .45, glossy(T, 0x120c0a, { clearcoat: 1, clearcoatRoughness: .05 }), 0, -.004, .019, 24));
  const spark = soft(T, 0xffffff, { emissive: 0xffffff, emissiveIntensity: 1 });
  eye.add(ell(T, .009, 1, 1, .5, spark, .012, .014, .024, 12), ell(T, .005, 1, 1, .5, spark, -.01, -.016, .024, 10));
  const lash = new T.Mesh(new T.TorusGeometry(.046, .007, 10, 32, Math.PI * .95), soft(T, 0x1e1512, { roughness: .4 }));
  lash.rotation.z = Math.PI * .025; lash.scale.set(1, 1.15, 1); lash.position.z = .004;
  eye.add(lash);
  return eye;
}

function makeGardener(T, girl) {
  const skin = skinMat(T, 0xf9d6c1);
  const hairM = soft(T, girl ? 0x5b331f : 0x3a2a20, { roughness: .82 }); // matte hair, no shiny highlight
  const top = soft(T, girl ? 0xf48fb1 : 0x5fb3e4, { roughness: .8 }), bottom = soft(T, girl ? 0xf48fb1 : 0x3a5ba0, { roughness: .85 });
  const white = soft(T, 0xffffff), shoe = glossy(T, girl ? 0xe0526b : 0xf2f2f2, { clearcoat: .8, clearcoatRoughness: .2 });
  const sole = soft(T, girl ? 0xffffff : 0x8a93a6);
  const fig = new T.Group(), body = new T.Group();
  fig.add(body, blobShadow(T, .32));

  // Short, chubby legs with chunky shoes (chibi proportions).
  const legs = [-1, 1].map(side => {
    const hip = new T.Group();
    hip.position.set(side * .07, .43, 0);
    hip.add(chubbyLimb(T, .06, .052, .22, girl ? skin : bottom));
    const knee = new T.Group();
    knee.position.y = -.2;
    knee.add(chubbyLimb(T, .052, .045, .2, skin));
    knee.add(smoothLathe(T, [[.044, -.2], [.05, -.17], [.052, -.14], [.049, -.12]], white, 28, 12)); // sock
    const shoeG = new T.Group();
    shoeG.position.set(0, -.205, .03);
    shoeG.add(ell(T, .066, 1, .7, 1.55, shoe, 0, 0, 0, 36));
    shoeG.add(ell(T, .068, 1.02, .22, 1.58, sole, 0, -.035, 0, 36));
    knee.add(shoeG);
    hip.add(knee);
    body.add(hip);
    return { hip, knee };
  });

  // Torso: a round, soft body. The girl wears a flared dress with puff sleeves; the boy a t-shirt and shorts.
  let torso;
  if (girl) {
    torso = smoothLathe(T, [[.001, .28], [.25, .3], [.255, .34], [.2, .46], [.155, .56], [.145, .64], [.16, .72], [.15, .77], [.1, .8], [.04, .81]], top, 56, 60);
    const hem = new T.Mesh(new T.TorusGeometry(.25, .016, 12, 64), white);
    hem.rotation.x = Math.PI / 2; hem.position.y = .302;
    const collar = new T.Mesh(new T.TorusGeometry(.085, .02, 12, 40), white);
    collar.rotation.x = Math.PI / 2; collar.position.y = .79;
    body.add(hem, collar);
  } else {
    torso = smoothLathe(T, [[.001, .42], [.16, .42], [.175, .5], [.17, .6], [.175, .7], [.16, .77], [.1, .805], [.04, .81]], top, 56, 60);
    body.add(smoothLathe(T, [[.001, .33], [.17, .33], [.178, .38], [.17, .45], [.001, .45]], bottom, 48, 24));
    const band = new T.Mesh(new T.TorusGeometry(.072, .016, 12, 40), soft(T, 0x3d93c8));
    band.rotation.x = Math.PI / 2; band.position.y = .8;
    body.add(band);
  }
  body.add(torso);

  // Big round head (about a third of the height), smooth cheeks, small nose, big eyes.
  const neck = new T.Group();
  neck.position.y = .8;
  body.add(neck);
  neck.add(chubbyLimb(T, .05, .055, .07, skin, 1, 24).translateY(.06));
  const HC = .19; // head centre height above the neck
  neck.add(ell(T, .205, 1.04, .98, .98, skin, 0, HC, 0, 52));
  [-1, 1].forEach(side => {
    neck.add(ell(T, .038, .55, 1, .9, skin, side * .205, HC - .005, 0, 24));        // ears
    const blush = ell(T, .038, 1, .55, .25, soft(T, 0xff8fa3, { transparent: true, opacity: .35 }), side * .108, HC - .055, .158, 24); // soft blush on the face
    blush.rotation.y = side * .6; neck.add(blush);
  });
  neck.add(ell(T, .016, 1.1, .8, 1, skin, 0, HC - .03, .205, 16)); // nose
  const eyes = [-1, 1].map(side => {
    const e = cartoonEye(T, girl ? 0x6b3f23 : 0x2f5f8a);
    e.position.set(side * .078, HC + .005, .178);
    e.rotation.y = side * .32; e.rotation.x = -.05;
    neck.add(e);
    return e;
  });
  [-1, 1].forEach(side => {
    const brow = chubbyLimb(T, .007, .006, .05, hairM, 1, 10);
    brow.rotation.z = Math.PI / 2 + side * .12; brow.position.set(side * .052 + side * .025, HC + .078, .186);
    neck.add(brow);
  });
  const smile = new T.Mesh(new T.TorusGeometry(.026, .006, 10, 24, Math.PI), soft(T, 0xb84a58));
  smile.position.set(0, HC - .085, .19); smile.rotation.set(-.2, 0, Math.PI);
  neck.add(smile);

  // Hair: a glossy rounded cap, a swept fringe of soft locks, side locks; the girl gets a ponytail with a bow.
  const cap = new T.Mesh(new T.SphereGeometry(.218, 64, 40, 0, Math.PI * 2, 0, Math.PI * .56), hairM);
  cap.position.set(0, HC + .012, -.012); cap.rotation.x = -.38;
  neck.add(cap);
  // One smooth swept fringe over the forehead (a slice of a slightly larger sphere), plus two soft sweeping locks.
  const fringe = new T.Mesh(new T.SphereGeometry(.224, 64, 40, 0, Math.PI * 2, 0, Math.PI * .3), hairM);
  fringe.position.set(0, HC + .014, .004); fringe.rotation.set(.36, 0, -.1); // edge sits just above the brows
  neck.add(fringe);
  [[-1, .15], [1, .125]].forEach(([side, y]) => {
    const sweep = ell(T, .08, 1.3, .42, .6, hairM, side * .085, HC + y, .135, 40);
    sweep.rotation.set(.55, side * -.25, side * -.45);
    neck.add(sweep);
  });
  [-1, 1].forEach(side => { const s = ell(T, .07, .6, girl ? 1.9 : 1.1, .85, hairM, side * .19, girl ? HC - .07 : HC + .02, -.01, 28); s.rotation.z = side * .12; neck.add(s); });
  if (!girl) { const tuft = ell(T, .05, .8, 1.3, .8, hairM, .03, HC + .23, -.02, 20); tuft.rotation.z = -.5; neck.add(tuft); }
  let tail = null;
  if (girl) {
    tail = new T.Group();
    tail.position.set(0, HC + .1, -.2);
    const bowM = glossy(T, 0xff4f86, { clearcoat: .6 });
    [-1, 1].forEach(side => { const loop = ell(T, .045, 1.2, .8, .5, bowM, side * .045, 0, .015, 20); loop.rotation.z = side * .4; tail.add(loop); });
    tail.add(ell(T, .018, 1, 1, 1, bowM, 0, 0, .02, 12));
    const lock = smoothLathe(T, [[.001, .02], [.06, 0], [.08, -.09], [.068, -.18], [.035, -.25], [.001, -.27]], hairM, 40, 30);
    lock.position.z = -.03; lock.rotation.x = .25;
    tail.add(lock);
    neck.add(tail);
  }

  // Short chubby arms with round mitten hands; the girl has puff sleeves. The right hand carries the can.
  const arms = [-1, 1].map(side => {
    const shoulder = new T.Group();
    shoulder.position.set(side * .165, .74, 0);
    shoulder.add(chubbyLimb(T, .052, .046, .17, skin, 1.1));
    const sleeve = girl ? ell(T, .07, 1, .85, 1, top, 0, -.01, 0, 32) : chubbyLimb(T, .058, .054, .1, top, 1.02);
    if (!girl) sleeve.position.y = .025;
    shoulder.add(sleeve);
    const elbow = new T.Group();
    elbow.position.y = -.155;
    elbow.add(chubbyLimb(T, .046, .041, .14, skin, 1.1));
    elbow.add(ell(T, .05, 1, 1.05, .85, skin, 0, -.152, 0, 28));
    elbow.add(ell(T, .017, 1, 1.5, 1, skin, side * -.032, -.136, .02, 16));
    shoulder.add(elbow);
    body.add(shoulder);
    return { shoulder, elbow };
  });
  const tin = glossy(T, 0x4fb3b5, { metalness: .25, roughness: .3, clearcoat: .7 });
  const can = new T.Group();
  can.add(smoothLathe(T, [[.001, -.075], [.084, -.075], [.09, -.06], [.082, .05], [.072, .075], [.001, .075]], tin, 40, 24));
  const spout = roundLimb(T, .013, .02, .24, tin, 20);
  spout.rotation.x = -(Math.PI - 1.05); spout.position.set(0, 0, .06);
  const rose = smoothLathe(T, [[.001, 0], [.016, 0], [.033, .03], [.001, .033]], tin, 28, 12);
  rose.position.set(0, .115, .235); rose.rotation.x = 1.05;
  const handle = new T.Mesh(new T.TorusGeometry(.058, .012, 12, 28, Math.PI), tin);
  handle.position.set(0, .07, -.01); handle.rotation.y = Math.PI / 2;
  can.add(spout, rose, handle);
  can.position.set(0, -.22, .05);
  arms[1].elbow.add(can);
  const spoutTip = new T.Object3D();
  spoutTip.position.set(0, .13, .25);
  can.add(spoutTip);
  fig.traverse(o => { if (o.isMesh && o.material !== blobTex) { o.castShadow = !o.material.transparent; o.receiveShadow = true; } });
  fig.scale.setScalar(1.12);

  // Natural gait driven by distance walked, easing in and out; plus breathing and blinking so they feel alive.
  let phase = 0, amt = 0, last = performance.now(), nextBlink = 1 + Math.random() * 2, blink = 0, clock = 0;
  return {
    fig, body, neck, tail, arms, can, spoutTip,
    gait(dist, moving, holdCan, posing = false) {
      const now = performance.now(), dt = Math.min(.05, (now - last) / 1000);
      last = now; clock += dt;
      amt += ((moving ? 1 : 0) - amt) * Math.min(1, dt * 7);
      phase += dist / .42 * Math.PI * 2;
      legs.forEach(({ hip, knee }, i) => {
        const p = phase + i * Math.PI;
        hip.rotation.x = Math.sin(p) * .45 * amt;
        knee.rotation.x = Math.max(0, Math.sin(p - 1.3)) * .7 * amt;
      });
      body.position.y = (Math.abs(Math.cos(phase)) - .5) * .02 * amt;
      body.rotation.z = Math.sin(phase) * .025 * amt;
      torso.scale.set(1 + Math.sin(clock * 2.2) * .008, 1, 1 + Math.sin(clock * 2.2) * .012); // breathing
      if (tail) tail.rotation.x = Math.sin(phase * 2) * .12 * amt + Math.sin(clock * 1.5) * .03;
      // Blink every few seconds.
      if (clock > nextBlink) { blink = .14; nextBlink = clock + 2 + Math.random() * 3; }
      blink = Math.max(0, blink - dt);
      const lid = blink > 0 ? Math.max(.08, Math.abs(blink - .07) / .07) : 1;
      eyes.forEach(e => (e.scale.y = lid));
      if (posing) return; // a pose (pouring, reaching, smelling) owns the arms
      arms.forEach(({ shoulder, elbow }, i) => {
        if (i === 1 && holdCan) { shoulder.rotation.x = Math.sin(phase + Math.PI) * .12 * amt; shoulder.rotation.z = -.08; elbow.rotation.x = -.3; return; }
        const p = phase + (i + 1) * Math.PI;
        shoulder.rotation.x = Math.sin(p) * .4 * amt;
        shoulder.rotation.z = (i ? -1 : 1) * .12; // arms rest slightly away from the body
        elbow.rotation.x = (-.18 - Math.max(0, Math.sin(p)) * .25) * amt - .08;
      });
    }
  };
}

function makeCollie(T) {
  const black = new T.MeshPhysicalMaterial({ color: 0x1d1b1b, roughness: .7, sheen: new T.Color(0x6a6a6a), metalness: 0 });
  const white = new T.MeshPhysicalMaterial({ color: 0xf7f4ee, roughness: .8, sheen: new T.Color(0xffffff), metalness: 0 });
  const dog = new T.Group(), body = new T.Group();
  dog.add(body, blobShadow(T, .36));
  // A round, fluffy body.
  const torso = smoothLathe(T, [[.001, -.21], [.08, -.2], [.12, -.14], [.132, -.04], [.138, .06], [.14, .13], [.115, .2], [.06, .23], [.001, .235]], black, 56, 50);
  torso.rotation.x = Math.PI / 2; torso.position.set(0, .34, 0);
  body.add(torso);
  body.add(ell(T, .115, 1, 1.15, .85, white, 0, .31, .16, 40)); // white chest
  const neckG = new T.Group();
  neckG.position.set(0, .42, .2);
  body.add(neckG);
  // A smooth neck joining the head to the body, with a white throat.
  const neckM = chubbyLimb(T, .072, .088, .2, black, 1.04);
  neckM.rotation.x = .84; neckM.position.set(0, .07, .04);
  neckG.add(neckM);
  const throat = ell(T, .058, .95, 1.6, .55, white, 0, .015, .09, 32);
  throat.rotation.x = .75;
  neckG.add(throat);
  // Big round head with a short soft muzzle.
  neckG.add(ell(T, .11, 1.05, .98, 1, black, 0, .1, .05, 48));
  const muzzle = smoothLathe(T, [[.001, 0], [.058, .005], [.055, .045], [.042, .075], [.02, .092], [.001, .095]], white, 40, 24);
  muzzle.rotation.x = Math.PI / 2; muzzle.position.set(0, .06, .1); muzzle.scale.set(1, 1, .8);
  neckG.add(muzzle);
  neckG.add(ell(T, .028, 1.25, .85, 1, glossy(T, 0x111111, { clearcoat: 1, roughness: .2 }), 0, .075, .195, 20)); // nose
  neckG.add(ell(T, .03, .7, 1.9, .5, white, 0, .135, .142, 20)); // blaze
  const tongue = ell(T, .02, 1, .5, 1.3, soft(T, 0xf07a8a), 0, .033, .175, 14);
  neckG.add(tongue);
  [-1, 1].forEach(side => {
    const ear = smoothLathe(T, [[.001, 0], [.042, .006], [.038, .045], [.02, .085], [.001, .095]], black, 28, 18);
    ear.scale.set(1, 1, .5);
    ear.position.set(side * .065, .185, .025); ear.rotation.set(-.2, 0, side * -.45);
    neckG.add(ear);
    const eye = new T.Group();
    eye.add(ell(T, .026, 1, 1.1, .6, glossy(T, 0x2a1a0e, { clearcoat: 1, clearcoatRoughness: .05, roughness: .2 }), 0, 0, 0, 24));
    eye.add(ell(T, .008, 1, 1, .5, soft(T, 0xffffff, { emissive: 0xffffff, emissiveIntensity: 1 }), .008, .009, .014, 10));
    eye.position.set(side * .045, .122, .135); eye.rotation.y = side * .35;
    neckG.add(eye);
  });
  // Short, sturdy legs with round white paws.
  const legs = [[.075, .14], [-.075, .14], [.075, -.14], [-.075, -.14]].map(([x, z], i) => {
    const leg = new T.Group();
    leg.position.set(x, .3, z);
    leg.add(chubbyLimb(T, i < 2 ? .042 : .05, .034, .15, black, 1.08, 24));
    const low = chubbyLimb(T, .034, .032, .13, white, 1.05, 24);
    low.position.y = -.13;
    leg.add(low, ell(T, .038, 1, .62, 1.3, white, 0, -.265, .014, 24));
    body.add(leg);
    return leg;
  });
  // A big fluffy tail with a white tip.
  const tail = new T.Group();
  tail.position.set(0, .4, -.2);
  const curve = new T.CatmullRomCurve3([new T.Vector3(0, 0, 0), new T.Vector3(0, -.05, -.09), new T.Vector3(0, -.15, -.14), new T.Vector3(0, -.25, -.1)]);
  tail.add(new T.Mesh(new T.TubeGeometry(curve, 32, .045, 20, false), black));
  tail.add(ell(T, .052, 1, 1.3, 1, white, 0, -.26, -.1, 24), ell(T, .046, 1, 1, 1, black, 0, 0, 0, 20));
  body.add(tail);
  dog.traverse(o => { if (o.isMesh) { o.castShadow = !o.material.transparent; o.receiveShadow = true; } });
  dog.scale.setScalar(1.15);
  let phase = 0, amt = 0, sit = 0, last = performance.now();
  return {
    fig: dog,
    gait(dist, moving, running, sitting, now) {
      const t = performance.now(), dt = Math.min(.05, (t - last) / 1000);
      last = t;
      amt += ((moving ? 1 : 0) - amt) * Math.min(1, dt * 8);
      sit += ((sitting ? 1 : 0) - sit) * Math.min(1, dt * 4);
      phase += dist / (running ? .62 : .34) * Math.PI * 2;
      const amp = (running ? .75 : .5) * amt;
      legs.forEach((leg, i) => {
        const swing = Math.sin(phase + (i === 0 || i === 3 ? 0 : Math.PI)) * amp;
        leg.rotation.x = swing * (1 - sit) + (i < 2 ? .38 : -1.2) * sit;
      });
      body.position.y = Math.abs(Math.sin(phase)) * (running ? .03 : .012) * amt - .06 * sit;
      body.rotation.x = -.38 * sit;
      tail.rotation.z = Math.sin(now * (sitting ? 9 : 13)) * .45;
      tail.rotation.x = .2 * sit;
      neckG.rotation.x = .3 * sit + Math.sin(phase * .5) * .05 * (1 - sit);
      tongue.scale.y = .5 + (running ? .3 : 0) + Math.sin(now * 12) * .08 * amt; // panting
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
  // Flowering trees: smell the blossoms. Fruit trees: smell the blossoms while in flower, touch the fruit once it is ripe.
  const inFlower = spec.flower ? toGrowth >= .8 : spec.bloom && toGrowth >= .62 && toGrowth <= .8;
  const ripe = spec.fruit && toGrowth >= .9;
  const extra = inFlower ? "smell" : ripe ? "touch" : null;

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
    const lod = list.length > 6 ? 0 : 1; // lighter trees when the garden gets big
    const trees = list.map((d, i) => plantedTree(T, SPECIES[d.species], d.key, d.growth, positions[i], lod));
    const radius = Math.max(3.6, Math.max(cols, rows) * gap * .7);
    stageApi = makeStage(T, stage, { trees, radius, target: new T.Vector3(0, .9, 0), height: 2 });
  } catch {
    stage.append(el("p", { className: "g-offline" }, "The 3D garden could not load. Close and reopen the app to try again."));
  }
}
