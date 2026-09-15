# Jimin — Physiotherapy Journal

A personal website documenting the journey from GCSEs to becoming a physiotherapist
for a professional baseball club (NPB, KBO or MLB).

It's a plain static site — HTML, CSS and JavaScript. No frameworks, no build step,
nothing to install. Open `index.html` in a browser and it works.

## Pages

| Page | What's on it |
| --- | --- |
| `index.html` | Home — intro, target leagues, stats, latest experience and entries |
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

## Changing the name or colours

- **Name and titles** — `SITE.name` in `data.js` covers the header, footer and page titles. The `<title>` tags in the five HTML files are set individually.
- **Colours** — the palette is at the top of `assets/css/style.css`, under `:root`. `--accent` is the orange used throughout; `--navy` is the dark blue. Dark mode is handled automatically and there's a toggle in the header.
- **Fonts** — Sora for headings, Inter for body text, loaded from Google Fonts in each HTML file's `<head>`.
