# jimin

CFA Level 2 quiz. It's a web app you can install on iPhone and iPad.

- `index.html`: the quiz app. It opens on a menu: **Exam style questions** or **Quick questions**. Each mode lists the 10 CFA Level II topics with their question counts, plus **Create custom** to build a worksheet with a chosen number from each topic.
- `vignettes.js`: exam-style vignettes (case text, exhibits, item-set questions). The Cascadia Teachers' Retirement Fund vignette is a practice variant of the PWPF case with changed names, numbers and answers.
- `questions.js`: quick concept questions. Add new questions here. Each question has a `topic` (one of the 10 CFA topics) and a `reading`.
- **Exam style**: one vignette per screen, with its exhibits on top and its questions below. Pick answers, tap **Check answers** to see results and explanations, then **Next vignette →**. Choose the topic and how many vignettes.
- **Quiz options**: choose the topic and how many questions (5 / 10 / 15 / 20 / All). A timer runs during the quiz. **Pause** stops it and lets you **Resume** or **Quit** (you still get results for what you answered). Leaving the app pauses automatically.
- **Study timer**: a full-screen page with one Concentrate/Pause button (white page when idle, navy while concentrating). It shows today's total focused time, keeps counting while the screen is locked or the app is closed, and shows on the lock screen as "Now Playing" with a play/pause control. Each session is added to that day in the calendar (split at midnight).
- **Study calendar**: months slide sideways (tabs or swipe); September–November 2026 with a D-day countdown to the exam (Fri 20 Nov 2026, 14:30). Tap a day to plan tasks, see its sessions, and add hours manually; hours add up per day and per month.
- **Wrong answers**: every missed question is saved on the device. You can practice them (answering correctly removes them), save them as a `.txt` file (Share → Save to Files, Notes, Goodnotes…), or use Print → PDF.
- `concept_questions.md`: the same questions as a printable list with an answer key
- `manifest.json`, `sw.js`, `icons/`: these let it install to the home screen and work offline

## Put it on your iPhone / iPad

1. Host the folder at an https:// address. Two options:
   - **GitHub Pages**: Settings → Pages → Deploy from a branch → pick the branch and `/ (root)`.
     On a free GitHub plan this needs a **public** repo.
   - **Netlify Drop** (the repo stays private): download this folder, go to https://app.netlify.com/drop,
     and drag the folder in. You get a link right away.
2. On the iPhone/iPad, open the link in **Safari**.
3. Tap **Share** → **Add to Home Screen** → **Add**.

It opens full-screen from its own icon and works without internet after the first visit.

## Getting updates

Updates go live about 1 minute after a push. Then:
- **Home-screen app**: swipe it away in the app switcher and open it again.
- **Safari**: reload the page.

The version at the bottom of the app (e.g. `v4 · 2026-09-25`) shows which version you have.
