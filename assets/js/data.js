/* ==========================================================================
   data.js — ALL WEBSITE CONTENT LIVES HERE.
   To update the site, edit this one file. No build step, no install.
   Everything else (HTML/CSS) reads from here automatically.
   ========================================================================== */

const SITE = {
  name: "Jimin",
  fullName: "Jimin",
  role: "Aspiring Sports Physiotherapist",
  tagline: "Documenting the road from GCSEs to the dugout.",
  intro:
    "I'm a GCSE student working towards becoming a physiotherapist for a professional baseball club. " +
    "This site is my logbook: the internships, the work experience, the reading, and the days it doesn't go to plan.",
  location: "United Kingdom",
  email: "hello@example.com",           // ← replace with a real contact address
  footerNote: "Built and maintained by Jimin.",

  // Set a link to "" to hide that button.
  socials: [
    { label: "Instagram", url: "" },
    { label: "LinkedIn",  url: "" },
    { label: "Email",     url: "mailto:hello@example.com" }
  ],

  // The three leagues she's aiming at. Edit freely.
  leagues: [
    { abbr: "NPB", name: "Nippon Professional Baseball", country: "Japan",       note: "Twelve clubs, year-round conditioning culture." },
    { abbr: "KBO", name: "Korea Baseball Organization",  country: "South Korea", note: "Ten clubs, dense schedule, huge fanbase." },
    { abbr: "MLB", name: "Major League Baseball",        country: "USA / Canada", note: "Thirty clubs, deepest sports-medicine staffing." }
  ]
};

/* --------------------------------------------------------------------------
   ABOUT PAGE
   -------------------------------------------------------------------------- */

const ABOUT = {
  photo: "",   // e.g. "assets/img/jimin.jpg" — leave "" for the initial badge

  bio: [
    "I'm Jimin, and I want to work pitch-side. Specifically, I want to be the physiotherapist who keeps a professional baseball squad on the field — in NPB, the KBO, or MLB.",
    "Baseball is a sport of repeated, one-sided, extremely fast movements. A pitcher's shoulder and elbow take a load almost nothing else in sport matches, and a season is long enough that recovery is as much a part of the job as treatment. That combination — biomechanics, rehabilitation, and the day-to-day grind of a long season — is what pulled me in.",
    "Right now I'm at the start: GCSEs, weekend work experience, and as much reading as I can get through. I started this site so the journey is written down as it happens rather than remembered wrong later."
  ],

  // Shown as the "Route" list on the About page.
  roadmap: [
    { stage: "Now",        label: "GCSEs",                    detail: "Biology, PE and Maths as the core subjects for a physiotherapy route.", status: "current" },
    { stage: "Next",       label: "A-Levels / Level 3",       detail: "Biology plus PE or Psychology — the usual entry requirement for a BSc.", status: "upcoming" },
    { stage: "University", label: "BSc (Hons) Physiotherapy", detail: "An HCPC-approved, CSP-accredited degree. Placements across the NHS.", status: "upcoming" },
    { stage: "Register",   label: "HCPC registration",        detail: "Required to practise as a physiotherapist in the UK.", status: "upcoming" },
    { stage: "Specialise", label: "Sports & exercise physio", detail: "Post-grad study, pitch-side qualifications, and club-side experience.", status: "upcoming" },
    { stage: "Goal",       label: "Professional baseball",    detail: "A medical / performance role with an NPB, KBO or MLB organisation.", status: "goal" }
  ],

  skills: [
    { group: "Studying now",   items: ["Biology", "PE", "Maths", "Korean", "Japanese"] },
    { group: "Building",       items: ["Anatomy basics", "Injury screening", "Taping", "Note-taking & case write-ups"] },
    { group: "Interested in",  items: ["Throwing biomechanics", "Shoulder & elbow rehab", "Return-to-play protocols", "Load management"] }
  ],

  // Books, papers, courses, channels — anything she's learning from.
  reading: [
    { title: "Anatomy Trains",                       author: "Thomas Myers",       note: "Slow read. Good for seeing the body as connected chains." },
    { title: "The Arm",                              author: "Jeff Passan",        note: "How professional baseball actually treats pitching elbows." },
    { title: "Gray's Anatomy for Students",          author: "Drake, Vogl & Mitchell", note: "Reference book — dipping in, not reading cover to cover." }
  ]
};

/* --------------------------------------------------------------------------
   EXPERIENCE — internships, work experience, courses, achievements.
   type: "internship" | "work" | "course" | "achievement"
   Newest first. `end: "Present"` marks an ongoing entry.
   -------------------------------------------------------------------------- */

const EXPERIENCE = [
  {
    type: "work",
    title: "Weekend assistant",
    org: "Local physiotherapy clinic",
    location: "United Kingdom",
    start: "2026-09",
    end: "Present",
    summary:
      "Front-of-house and observation hours in a private musculoskeletal clinic. Setting up treatment rooms, resetting equipment between patients, and observing assessments where the patient has given consent.",
    highlights: [
      "Observed initial assessments and watched how a subjective history shapes the objective tests that follow.",
      "Learned how a clinic actually runs — notes, consent, room turnaround, and how much of the job is communication.",
      "Started keeping a written log of each session's takeaway, which became the blog on this site."
    ],
    skills: ["Observation", "Clinical etiquette", "Note-taking"]
  },
  {
    type: "course",
    title: "Emergency First Aid at Work (Level 3)",
    org: "Accredited training provider",
    location: "United Kingdom",
    start: "2026-07",
    end: "2026-07",
    summary:
      "One-day certificated first aid course covering primary survey, CPR, choking, bleeding and recovery position.",
    highlights: [
      "Practised CPR and recovery position on manikins until the sequence was automatic.",
      "First qualification on the way to a pitch-side award later on."
    ],
    skills: ["First aid", "CPR", "Emergency response"]
  },
  {
    type: "internship",
    title: "Work experience week",
    org: "School placement — sports therapy",
    location: "United Kingdom",
    start: "2026-06",
    end: "2026-06",
    summary:
      "A week of school-arranged work experience shadowing a sports therapist working with amateur teams.",
    highlights: [
      "Shadowed warm-up and cool-down protocols across three training sessions.",
      "Saw an acute ankle injury managed from pitch to ice within minutes.",
      "Wrote up three short case notes afterwards to practise structuring observations."
    ],
    skills: ["Shadowing", "Warm-up protocols", "Acute injury awareness"]
  },
  {
    type: "achievement",
    title: "Started this journal",
    org: "Personal project",
    location: "Online",
    start: "2026-05",
    end: "2026-05",
    summary:
      "Set up a public log of the journey towards sports physiotherapy — experience, study notes, and honest write-ups of what's working.",
    highlights: [
      "Committed to writing one entry per month, even the uneventful ones."
    ],
    skills: ["Reflection", "Writing"]
  }
];

/* --------------------------------------------------------------------------
   BLOG POSTS — newest first.
   `body` supports simple markdown:
     ## Heading      ### Smaller heading
     - bullet point       1. numbered point
     > quote
     **bold**   *italic*   [link](https://…)   ![alt](assets/img/photo.jpg)
   Blank line = new paragraph.
   -------------------------------------------------------------------------- */

const POSTS = [
  {
    slug: "why-baseball",
    title: "Why baseball, and why the medical room",
    date: "2026-09-02",
    tags: ["Goals", "Baseball"],
    cover: "",
    excerpt:
      "Every sport has injuries. Baseball has a specific one, repeated thousands of times a season, and a whole branch of sports medicine built around it.",
    body: `
People ask why baseball when I've grown up somewhere it's barely on television. The honest answer is that I got curious about one injury and couldn't stop reading.

## One movement, thousands of times

A pitch is one of the fastest motions the human body produces. The shoulder rotates at a speed that would tear most tissue, and the elbow absorbs a force that sits close to the failure point of the ulnar collateral ligament — the UCL. Then the pitcher does it again. And again. Across a season that runs from spring into autumn.

That means the medical staff aren't only treating injuries after they happen. They're managing a countdown.

## What the job actually looks like

From what I've read and been told, a club physiotherapist's week is:

- Daily screening — range of motion, soreness, sleep, how the arm feels today
- Pre-game preparation and post-game recovery
- Rehab programming for anyone on the injured list
- Long conversations with strength coaches and the pitching staff
- Travel. A lot of travel

> The interesting part isn't the treatment table. It's the decision about whether someone plays tomorrow.

## Three leagues

NPB, the KBO and MLB all take conditioning seriously, and all three do it slightly differently. Japanese clubs are known for volume and routine; Korean clubs for an intense schedule in a small league; MLB for the deepest medical staffing in the sport. I'd like to work in any of them — which is part of why I'm learning Korean and Japanese alongside everything else.

That's a long way off. For now it's GCSEs, and it's writing things down.
`
  },
  {
    slug: "first-week-work-experience",
    title: "What a week of work experience actually taught me",
    date: "2026-06-21",
    tags: ["Work experience", "Reflection"],
    cover: "",
    excerpt:
      "I expected to learn about injuries. I mostly learned about how people talk to patients when they're frightened.",
    body: `
My school placement was a week with a sports therapist working mainly with amateur teams. I went in with a notebook full of questions about injuries. I came out having written mostly about conversations.

## Day one: I was in the way

Nobody tells you where to stand. I spent the first morning slightly too close to everything, and the therapist eventually told me — kindly — to find a spot and stay in it until I was asked. That was the most useful correction of the week.

## The assessment is mostly listening

Watching a subjective history taken properly was the thing that changed how I think about this job. Before anyone touched the patient, there were five minutes of questions:

1. When did it start, and what were you doing?
2. Where exactly, and does it move?
3. What makes it worse, what makes it better?
4. How are you sleeping?
5. What do you need to get back to?

The hands-on tests afterwards were quick, because the questions had already narrowed it down.

## An ankle, on the Thursday

Someone rolled an ankle in training. It went from pitch to ice in under two minutes, and the calm of it was the impressive part — no rushing, no crowding, one person talking to the player and everyone else doing a job.

> Speed came from having done it before, not from moving fast.

## What I'm taking forward

- Write notes the same day. Memory is worse than I think it is.
- Learn the vocabulary properly so I'm not guessing at what I'm hearing.
- Being useful as a student mostly means being quiet, early, and where you said you'd be.
`
  },
  {
    slug: "gcse-subjects-for-physio",
    title: "Picking GCSE subjects with physiotherapy in mind",
    date: "2026-05-14",
    tags: ["Study", "Goals"],
    cover: "",
    excerpt:
      "Nothing at GCSE closes the door on physiotherapy, but a few choices make the next two steps considerably easier.",
    body: `
I did a lot of reading before choosing options, and the summary is simpler than I expected: universities care about your A-Levels, and A-Level Biology is what most physiotherapy courses want. So GCSEs are about getting to that starting line in good shape.

## What I'm taking, and why

- **Biology** — non-negotiable. It's the foundation of everything that follows.
- **PE** — anatomy, movement and training principles, taught as a subject rather than picked up sideways.
- **Maths** — needed for the sciences, and for reading research later without guessing.
- **Korean and Japanese** — not required by anyone. Entirely because of where I want to end up.

## What I learned looking at entry requirements

Most UK physiotherapy degrees ask for Biology at A-Level plus one other subject, and a grade in GCSE Maths and English. Nearly all of them want relevant experience — which is why the work experience page on this site matters more than it looks.

> Experience isn't a tie-breaker on a physiotherapy application. It's close to a requirement.

## The plan from here

Get the grades. Keep the placement hours going. Keep writing it down.
`
  }
];
