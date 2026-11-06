# Notes for the assistant

The user is preparing for CFA Level II (exam 20 Nov 2026). Vignettes and answer keys the user pastes must be saved in `bank/` (see `bank/README.md`), so question sheets and mocks can use every reading. Read `bank/INDEX.md` first after any compaction.

Key notes questions (`keyq.js`): every question has a `day` (the day it was added; a day ends at 2:00 the next morning, Korea time). When adding a batch, append it at the END of the file (ids are numbered per reading in file order, so inserting in the middle would shift saved progress) and call `setDay("YYYY-MM-DD")` before the batch with today's date by that 2:00 rule. The "Questions sorted by days" screen reads this field.
Ethics questions (readings 40-42) in `keyq.js` are grouped into random sessions of 20 (`KQ_SESSMAP`, shown as Session 1, 2, ... under Ethics) and are NOT part of the "Questions sorted by days" lists. A new Ethics question with no session is added to the last session until it has 20 questions, then to a new session.
