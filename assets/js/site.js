/* ==========================================================================
   site.js — rendering for every page. Reads content from data.js.
   No dependencies, no build step.
   ========================================================================== */
(function () {
  "use strict";

  /* --- Small helpers ----------------------------------------------------- */

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  const MONTHS = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];

  /** "2026-09" → "September 2026"; "2026-09-02" → "2 September 2026"; "Present" passes through. */
  function formatDate(value, opts) {
    if (!value) return "";
    const str = String(value).trim();
    if (!/^\d{4}-\d{2}/.test(str)) return str;          // "Present", "Summer 2026", etc.
    const [y, m, d] = str.split("-");
    const month = MONTHS[Number(m) - 1] || "";
    const short = opts && opts.short;
    const name = short ? month.slice(0, 3) : month;
    return d ? `${Number(d)} ${name} ${y}` : `${name} ${y}`;
  }

  function dateRange(start, end) {
    const a = formatDate(start);
    const b = end ? formatDate(end) : "";
    if (!b || a === b) return a;
    return `${a} — ${b}`;
  }

  function readingTime(text) {
    const words = String(text || "").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }

  /* --- Minimal markdown --------------------------------------------------
     Supports: ## / ### headings, - and 1. lists, > quotes, --- rules,
     **bold**, *italic*, `code`, [text](url), ![alt](src), paragraphs.
     Input is escaped first, so post content can never inject raw HTML.
     ---------------------------------------------------------------------- */

  function inline(text) {
    return esc(text)
      .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1">')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function markdown(src) {
    const lines = String(src || "").replace(/\r\n/g, "\n").split("\n");
    const out = [];
    let para = [], list = null, quote = [];

    const flushPara = () => {
      if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; }
    };
    const flushList = () => {
      if (list) { out.push(`<${list.tag}>${list.items.map(i => "<li>" + inline(i) + "</li>").join("")}</${list.tag}>`); list = null; }
    };
    const flushQuote = () => {
      if (quote.length) { out.push("<blockquote>" + inline(quote.join(" ")) + "</blockquote>"); quote = []; }
    };
    const flushAll = () => { flushPara(); flushList(); flushQuote(); };

    for (const raw of lines) {
      const line = raw.trim();

      if (!line) { flushAll(); continue; }

      let m;
      if ((m = line.match(/^(#{2,4})\s+(.*)$/))) {
        flushAll();
        const level = Math.min(m[1].length, 4);
        out.push(`<h${level}>${inline(m[2])}</h${level}>`);
      } else if (/^(-{3,}|\*{3,})$/.test(line)) {
        flushAll(); out.push("<hr>");
      } else if ((m = line.match(/^[-*]\s+(.*)$/))) {
        flushPara(); flushQuote();
        if (!list || list.tag !== "ul") { flushList(); list = { tag: "ul", items: [] }; }
        list.items.push(m[1]);
      } else if ((m = line.match(/^\d+[.)]\s+(.*)$/))) {
        flushPara(); flushQuote();
        if (!list || list.tag !== "ol") { flushList(); list = { tag: "ol", items: [] }; }
        list.items.push(m[1]);
      } else if ((m = line.match(/^>\s?(.*)$/))) {
        flushPara(); flushList();
        quote.push(m[1]);
      } else {
        flushList(); flushQuote();
        para.push(line);
      }
    }
    flushAll();
    return out.join("\n");
  }

  /* --- Theme -------------------------------------------------------------- */

  const THEME_KEY = "jimin-theme";

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function storedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    const btn = $(".theme-toggle");
    if (btn) {
      const dark = theme ? theme === "dark" : systemPrefersDark();
      btn.textContent = dark ? "☀" : "☾";
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") ||
                    (systemPrefersDark() ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* private mode */ }
    applyTheme(next);
  }

  /* --- Header & footer ---------------------------------------------------- */

  const PAGES = [
    { href: "index.html",      label: "Home" },
    { href: "about.html",      label: "About" },
    { href: "experience.html", label: "Experience" },
    { href: "blog.html",       label: "Blog" }
  ];

  function currentPage() {
    const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (file === "" || file === "index.html") return "index.html";
    if (file === "post.html") return "blog.html";
    return file;
  }

  function initials(name) {
    return String(name || "?").trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
  }

  function renderChrome() {
    const here = currentPage();

    const header = $("#site-header");
    if (header) {
      header.className = "site-header";
      header.innerHTML = `
        <div class="wrap site-header__inner">
          <a class="brand" href="index.html">
            <span class="brand__mark">${esc(initials(SITE.name))}</span>
            <span>${esc(SITE.name)}<span class="brand__sub">${esc(SITE.role)}</span></span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Menu"><span></span></button>
          <nav class="nav" id="primary-nav" aria-label="Main">
            ${PAGES.map(p => `<a href="${p.href}"${p.href === here ? ' aria-current="page"' : ""}>${esc(p.label)}</a>`).join("")}
            <button class="theme-toggle" type="button" aria-label="Switch theme">☾</button>
          </nav>
        </div>`;

      const nav = $("#primary-nav", header);
      const toggle = $(".nav-toggle", header);
      const mobile = () => window.matchMedia("(max-width: 760px)").matches;
      const sync = () => { if (mobile()) { nav.hidden = toggle.getAttribute("aria-expanded") !== "true"; } else { nav.hidden = false; } };
      toggle.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", toggle.getAttribute("aria-expanded") === "true" ? "false" : "true");
        sync();
      });
      window.addEventListener("resize", sync);
      sync();

      $(".theme-toggle", header).addEventListener("click", toggleTheme);
      applyTheme(storedTheme());
    }

    const footer = $("#site-footer");
    if (footer) {
      footer.className = "site-footer";
      const links = (SITE.socials || []).filter(s => s.url);
      footer.innerHTML = `
        <div class="wrap site-footer__inner">
          <p>© ${new Date().getFullYear()} ${esc(SITE.name)}. ${esc(SITE.footerNote || "")}</p>
          <nav aria-label="Footer">
            ${PAGES.map(p => `<a href="${p.href}">${esc(p.label)}</a>`).join("")}
            ${links.map(s => `<a href="${esc(s.url)}"${/^https?:/.test(s.url) ? ' target="_blank" rel="noopener"' : ""}>${esc(s.label)}</a>`).join("")}
          </nav>
        </div>`;
    }
  }

  /* --- Shared partials ---------------------------------------------------- */

  const TYPE_LABELS = {
    internship:  "Internship",
    work:        "Work experience",
    course:      "Course",
    achievement: "Milestone"
  };

  function postCard(post) {
    return `
      <a class="card" href="post.html?p=${encodeURIComponent(post.slug)}">
        <div class="meta">${esc(formatDate(post.date))} · ${readingTime(post.body)} min read</div>
        <h3>${esc(post.title)}</h3>
        <p>${esc(post.excerpt || "")}</p>
        <div class="card__foot tag-row">
          ${(post.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}
        </div>
      </a>`;
  }

  function entryCard(item) {
    const ongoing = /present|ongoing/i.test(String(item.end || ""));
    return `
      <article class="entry${ongoing ? " entry--ongoing" : ""}">
        <div class="entry__head">
          <h3 class="entry__title">${esc(item.title)}</h3>
          <span class="entry__org">${esc(item.org)}</span>
        </div>
        <div class="entry__dates">
          <span class="tag">${esc(TYPE_LABELS[item.type] || item.type)}</span>
          <span class="meta">${esc(dateRange(item.start, item.end))}${item.location ? " · " + esc(item.location) : ""}</span>
        </div>
        ${item.summary ? `<p class="entry__summary">${esc(item.summary)}</p>` : ""}
        ${(item.highlights || []).length ? `<ul>${item.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        ${(item.skills || []).length ? `<div class="tag-row">${item.skills.map(s => `<span class="tag">${esc(s)}</span>`).join("")}</div>` : ""}
      </article>`;
  }

  /* --- Page: home --------------------------------------------------------- */

  function renderHome() {
    const leagues = $("#leagues");
    if (leagues) {
      leagues.innerHTML = (SITE.leagues || []).map(l => `
        <div class="league">
          <div class="league__abbr">${esc(l.abbr)}</div>
          <div>
            <div class="league__name">${esc(l.name)}</div>
            <div class="league__meta">${esc(l.country)}${l.note ? " · " + esc(l.note) : ""}</div>
          </div>
        </div>`).join("");
    }

    const stats = $("#stats");
    if (stats) {
      const placements = EXPERIENCE.filter(e => e.type === "internship" || e.type === "work").length;
      const courses    = EXPERIENCE.filter(e => e.type === "course").length;
      stats.innerHTML = [
        { num: placements,      label: "Placements & work experience" },
        { num: courses,         label: "Courses completed" },
        { num: POSTS.length,    label: "Journal entries" },
        { num: (SITE.leagues || []).length, label: "Leagues in the plan" }
      ].map(s => `<div class="stat"><div class="stat__num">${esc(s.num)}</div><div class="stat__label">${esc(s.label)}</div></div>`).join("");
    }

    const recent = $("#recent-experience");
    if (recent) {
      const items = EXPERIENCE.slice(0, 2);
      recent.innerHTML = items.length
        ? items.map(entryCard).join("")
        : `<div class="empty">No experience added yet.</div>`;
    }

    const posts = $("#recent-posts");
    if (posts) {
      const items = POSTS.slice(0, 3);
      posts.innerHTML = items.length
        ? items.map(postCard).join("")
        : `<div class="empty">No journal entries yet.</div>`;
    }
  }

  /* --- Page: about -------------------------------------------------------- */

  function renderAbout() {
    const portrait = $("#portrait");
    if (portrait) {
      portrait.innerHTML = ABOUT.photo
        ? `<img src="${esc(ABOUT.photo)}" alt="${esc(SITE.fullName || SITE.name)}">`
        : esc(initials(SITE.fullName || SITE.name));
    }

    const bio = $("#bio");
    if (bio) bio.innerHTML = (ABOUT.bio || []).map(p => `<p>${inline(p)}</p>`).join("");

    const roadmap = $("#roadmap");
    if (roadmap) {
      roadmap.innerHTML = (ABOUT.roadmap || []).map(s => `
        <div class="step step--${esc(s.status || "upcoming")}">
          <span class="step__badge">${esc(s.stage)}</span>
          <div>
            <div class="step__label">${esc(s.label)}</div>
            <div class="step__detail">${esc(s.detail || "")}</div>
          </div>
        </div>`).join("");
    }

    const skills = $("#skills");
    if (skills) {
      skills.innerHTML = (ABOUT.skills || []).map(g => `
        <div class="card card--tags">
          <h3>${esc(g.group)}</h3>
          <div class="tag-row">${g.items.map(i => `<span class="tag">${esc(i)}</span>`).join("")}</div>
        </div>`).join("");
    }

    const reading = $("#reading");
    if (reading) {
      reading.innerHTML = (ABOUT.reading || []).length
        ? ABOUT.reading.map(r => `
            <div class="read-item">
              <span class="read-item__title">${esc(r.title)}</span>
              <span class="read-item__author">${esc(r.author || "")}</span>
              ${r.note ? `<span class="read-item__note">${esc(r.note)}</span>` : ""}
            </div>`).join("")
        : `<div class="empty">Nothing on the list yet.</div>`;
    }
  }

  /* --- Page: experience --------------------------------------------------- */

  function renderExperience() {
    const list = $("#experience-list");
    const filters = $("#experience-filters");
    if (!list) return;

    const types = Array.from(new Set(EXPERIENCE.map(e => e.type)));
    let active = "all";

    function paint() {
      const items = active === "all" ? EXPERIENCE : EXPERIENCE.filter(e => e.type === active);
      list.innerHTML = items.length
        ? items.map(entryCard).join("")
        : `<div class="empty">Nothing under this filter yet.</div>`;
      if (filters) {
        $$(".chip", filters).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.type === active)));
      }
    }

    if (filters) {
      filters.innerHTML = [{ type: "all", label: "Everything" }]
        .concat(types.map(t => ({ type: t, label: TYPE_LABELS[t] || t })))
        .map(f => `<button class="chip" type="button" data-type="${esc(f.type)}" aria-pressed="false">${esc(f.label)}</button>`)
        .join("");
      filters.addEventListener("click", e => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        active = chip.dataset.type;
        paint();
      });
    }
    paint();
  }

  /* --- Page: blog list ---------------------------------------------------- */

  function renderBlog() {
    const list = $("#post-list");
    const filters = $("#tag-filters");
    if (!list) return;

    const tags = Array.from(new Set(POSTS.flatMap(p => p.tags || []))).sort();
    let active = "all";

    function paint() {
      const items = active === "all" ? POSTS : POSTS.filter(p => (p.tags || []).includes(active));
      list.innerHTML = items.length
        ? items.map(postCard).join("")
        : `<div class="empty">No entries with this tag yet.</div>`;
      if (filters) {
        $$(".chip", filters).forEach(c => c.setAttribute("aria-pressed", String(c.dataset.tag === active)));
      }
    }

    if (filters && tags.length) {
      filters.innerHTML = [{ tag: "all", label: "All entries" }]
        .concat(tags.map(t => ({ tag: t, label: t })))
        .map(f => `<button class="chip" type="button" data-tag="${esc(f.tag)}" aria-pressed="false">${esc(f.label)}</button>`)
        .join("");
      filters.addEventListener("click", e => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        active = chip.dataset.tag;
        paint();
      });
    }
    paint();
  }

  /* --- Page: single post -------------------------------------------------- */

  function renderPost() {
    const root = $("#post");
    if (!root) return;

    const slug = new URLSearchParams(location.search).get("p");
    const index = POSTS.findIndex(p => p.slug === slug);
    const post = POSTS[index];

    if (!post) {
      root.innerHTML = `
        <a class="back-link" href="blog.html">← Back to the blog</a>
        <h1>Entry not found</h1>
        <p class="hero__lede">That link doesn't match an entry. It may have been renamed.</p>
        <a class="btn btn--primary" href="blog.html">See all entries</a>`;
      document.title = `Not found · ${SITE.name}`;
      return;
    }

    document.title = `${post.title} · ${SITE.name}`;
    const desc = $('meta[name="description"]');
    if (desc && post.excerpt) desc.setAttribute("content", post.excerpt);

    const prev = POSTS[index + 1];   // older
    const next = POSTS[index - 1];   // newer

    root.innerHTML = `
      <a class="back-link" href="blog.html">← Back to the blog</a>
      <h1>${esc(post.title)}</h1>
      <div class="post-meta">
        <span class="meta">${esc(formatDate(post.date))} · ${readingTime(post.body)} min read</span>
        <span class="tag-row">${(post.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</span>
      </div>
      ${post.cover ? `<img class="post-cover" src="${esc(post.cover)}" alt="" style="border-radius:var(--radius);margin:1.5rem 0;border:1px solid var(--border)">` : ""}
      <div class="prose">${markdown(post.body)}</div>
      <nav class="post-nav" aria-label="More entries">
        ${next ? `<a class="card" href="post.html?p=${encodeURIComponent(next.slug)}"><span class="meta">Newer entry</span><strong>${esc(next.title)}</strong></a>` : ""}
        ${prev ? `<a class="card" href="post.html?p=${encodeURIComponent(prev.slug)}"><span class="meta">Older entry</span><strong>${esc(prev.title)}</strong></a>` : ""}
      </nav>`;
  }

  /* --- Shared text injection ---------------------------------------------- */

  function fillTokens() {
    $$("[data-site]").forEach(el => {
      const key = el.dataset.site;
      const value = SITE[key];
      if (typeof value === "string") {
        if (el.tagName === "A") { el.href = key === "email" ? `mailto:${value}` : value; el.textContent = value; }
        else el.textContent = value;
      }
    });
  }

  /* --- Boot --------------------------------------------------------------- */

  function init() {
    renderChrome();
    fillTokens();
    renderHome();
    renderAbout();
    renderExperience();
    renderBlog();
    renderPost();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
