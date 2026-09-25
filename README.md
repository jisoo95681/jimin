# jimin

CFA Level 2 concept (개념) quiz. It's a web app you can install on iPhone and iPad.

- `index.html`: the quiz app
- `questions.js`: the question bank. Add new questions here.
- **Quiz options**: choose the topic and how many questions (5 / 10 / 15 / 20 / All). A timer runs during the quiz. **Pause** stops it and lets you **Resume** or **Quit** (you still get results for what you answered). Leaving the app pauses automatically.
- **오답 노트**: every missed question is saved on the device. You can practice them (answering correctly removes them), save them as a `.txt` file (Share → Save to Files, Notes, Goodnotes…), or use Print → PDF.
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
