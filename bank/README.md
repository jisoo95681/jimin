# Vignette and answer bank

Purpose: keep every vignette the user has pasted, with the answer key, so that question sheets and mocks can be built from all 42 readings even after the chat is compacted.

- `INDEX.md`: counts per reading and where each vignette lives (rebuild: `python3 bank/index.py`).
- `vignettes.js` (repo root): 68 curated vignettes used by the app (text, questions, answers, reasons).
- `bank/*.json`: pasted vignettes. Each item: `id`, `source`, `readings` (reading numbers, first = main), `title`, `body` (vignette text and exhibits as pasted, tables tab-separated), `questions` [`n`, `q`, `options` [A, B, C], `answer`, `why`].
- Answer keys are the CFA Institute / test bank keys, never the user's own picks.
- `ingest_lib.py`: parser for the portal paste format (see `parse_msg`, `segment`).

## Rules for the assistant
1. When the user pastes vignettes (text) or sends photos, save them here straight away: parse text with `ingest_lib.py` from the transcript instead of retyping it; transcribe photos by hand, keeping numbers and signs exactly (graphs become a short text description).
2. Skip a vignette already in the bank (compare the first words of the body), tag every item with its reading numbers, rebuild `INDEX.md`, commit and push.
3. Keep every reading represented; tell the user which readings are still empty.
4. After a compaction, read `bank/INDEX.md` first, then load only the vignettes needed.
