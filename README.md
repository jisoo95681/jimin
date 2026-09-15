# Jimin — Physiotherapy Journal

A personal website documenting the journey from GCSEs to becoming a physiotherapist
for a professional baseball club (NPB, KBO or MLB).

It's a plain static site — HTML, CSS and JavaScript. No frameworks, no build step,
nothing to install. Open `index.html` in a browser and it works.

## Pages

| Page | What's on it |
| --- | --- |
| `index.html` | Home — intro, target leagues, stats, scroll-reveal panels, latest experience and entries |
| `about.html` | Bio, the step-by-step route into the profession, skills, reading list |
| `experience.html` | Full log of internships, work experience, courses and milestones (filterable) |
| `blog.html` | All journal entries (filterable by tag) |
| `post.html` | Renders a single entry — linked as `post.html?p=the-slug` |

---

## How to update the site

**Everything you'll ever need to edit lives in one file: `assets/js/data.js`.**

Open it in any text editor. It's split into four labelled sections. Save the file,
refresh the browser, and the change is live. Don't touch the HTML files — they fill
themselves in from this data.

### 1. Your details — `SITE`

Name, tagline, intro paragraph, email address and social links.
Set a social link's `url` to `""` to hide that button.

### 2. About page — `ABOUT`

- `photo` — path to a photo, e.g. `"assets/img/jimin.jpg"`. Leave it as `""` to show the initial instead.
- `bio` — a list of paragraphs.
- `roadmap` — the steps from GCSEs to the goal. Each has a `status` of `"current"`, `"upcoming"` or `"goal"`, which controls how it's highlighted. Move `"current"` down the list as you progress.
- `skills` and `reading` — grouped tags and the book/course list.

### 3. Adding experience — `EXPERIENCE`

Add a new block at the **top** of the list (newest first):

```js
{
  type: "internship",                 // internship | work | course | achievement
  title: "Work experience week",
  org: "Name of the clinic or club",
  location: "City, UK",
  start: "2027-02",                   // YYYY-MM (or YYYY-MM-DD)
  end: "2027-02",                     // or "Present" for something ongoing
  summary: "One or two sentences on what the placement was.",
  highlights: [
    "Something specific you did or observed.",
    "Something you learned from it."
  ],
  skills: ["Taping", "Assessment"]
},
```

The `type` decides the label and which filter button it appears under. An entry with
`end: "Present"` gets a highlighted marker on the timeline.

### 4. Adding a journal entry — `POSTS`

Add a new block at the **top** of the list:

```js
{
  slug: "short-url-name",             // lowercase, hyphens, no spaces — must be unique
  title: "The title of the entry",
  date: "2027-03-15",                 // YYYY-MM-DD
  tags: ["Work experience", "Study"],
  cover: "",                          // optional image, e.g. "assets/img/clinic.jpg"
  excerpt: "One or two sentences shown on the blog list and the home page.",
  body: `
Write the entry here, between the backticks.

## A heading

Leave a blank line between paragraphs.

- A bullet point
- Another one

> A pulled-out quote.

**Bold text**, *italic text*, and [a link](https://example.com).
`
},
```

The reading time and the newer/older links at the bottom of each entry are worked
out automatically.

**Formatting you can use in `body`:**

| Write this | Get |
| --- | --- |
| `## Heading` | A section heading |
| `### Heading` | A smaller heading |
| `- item` | A bulleted list |
| `1. item` | A numbered list |
| `> quote` | A pulled-out quote |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `[text](url)` | A link |
| `![description](assets/img/photo.jpg)` | An image |
| `---` | A horizontal divider |

### 5. The scrolling picture panels — `PANELS`

The three panels on the home page (pitcher, batter, outfielder). As you scroll,
the picture slides sideways and uncovers the text that was sitting behind it.

```js
{
  image: "assets/img/pitcher.svg",
  alt: "A short description of the picture, for screen readers.",
  side: "right",                      // which side the picture ENDS UP on: "right" or "left"
  eyebrow: "The pitcher",
  title: "An arm on a countdown",
  body: [
    "First paragraph.",
    "Second paragraph."
  ]
},
```

Alternate `side` between `"right"` and `"left"` so the panels don't all slide
the same way. Add or remove panels freely — the effect is applied to however
many there are.

#### Swapping the drawings for photographs

The three pictures are SVG illustrations I drew, because I couldn't download
photos and most baseball photography is copyrighted. To use a real photo
instead, drop it into `assets/img/` and change one line:

```js
image: "assets/img/pitcher.jpg",
```

Portrait-shaped images work best (the panel is 6:7). Anything else gets
cropped to fit rather than squashed. If you want photos, look for ones
released under a licence that allows reuse — [Unsplash](https://unsplash.com)
and [Pexels](https://pexels.com) are both free for this, and searching
"baseball pitcher" on either will turn up plenty. Avoid pulling photos off
Google Images or a team's website; those are almost always someone else's
copyright.

### Adding photos

Drop image files into `assets/img/`, then refer to them as
`assets/img/your-file.jpg` in `data.js`. Resize large photos before adding them —
anything over about 1600px wide just makes the page slow to load.

### Two things to watch for

1. **Keep the commas.** Every block in a list ends with `},` — if one goes missing, the page will come up blank.
2. **Apostrophes are fine** inside `"..."` and `` `...` ``. If you need a double quote inside a `"..."` string, use `'...'` for that string instead.

If a page ever comes up blank, press `F12` in the browser, open the **Console** tab,
and the error message will name the line in `data.js` that's the problem.

---

## Previewing locally

Just double-click `index.html` — it works straight from the file system.

For a closer match to the live site, run a local server from this folder:

```bash
python3 -m http.server 8000
```

then visit <http://localhost:8000>.

---

## Publishing with GitHub Pages

The site is already set up to publish as-is. On GitHub:

1. Go to the repository → **Settings** → **Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Pick the `main` branch and the `/ (root)` folder, then **Save**.

After a minute or two the site is live at
`https://jisoo95681.github.io/jimin/`.

Every push to `main` republishes it automatically.

---

## How the scrolling effect works

Each panel's picture starts on top of the text and slides sideways to uncover
it as the panel scrolls into view.

Where the browser supports it, this uses a CSS **scroll-driven animation**
(`animation-timeline: view()`), so the picture tracks your scroll position
directly and runs on the compositor — it stays smooth even on a slow phone.
Browsers without that support fall back to an `IntersectionObserver` that
triggers the same movement as a one-second transition when the panel comes
into view. Both paths only animate `transform` and `opacity`, which is what
keeps it from stuttering.

Three things are handled deliberately:

- **Below 820px** there's no room to slide sideways, so panels stack — picture on top, text underneath.
- **If someone has "reduce motion" turned on** in their system settings, nothing moves; everything is simply shown in place.
- **The finished, readable layout is the CSS default.** The "covering" position is only ever applied *on top* of that. So if the JavaScript fails or a browser doesn't understand the animation, the worst case is a plain two-column section — the text can't get stuck hidden behind the picture.

## Changing the name or colours

- **Name and titles** — `SITE.name` in `data.js` covers the header, footer and page titles. The `<title>` tags in the five HTML files are set individually.
- **Colours** — the palette is at the top of `assets/css/style.css`, under `:root`. `--accent` is the orange used throughout; `--navy` is the dark blue. Dark mode is handled automatically and there's a toggle in the header.
- **Fonts** — Sora for headings, Inter for body text, loaded from Google Fonts in each HTML file's `<head>`.
