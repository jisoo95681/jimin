import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const pg = await b.newPage();
await pg.emulateMedia({ media: 'print' });
await pg.goto('file:///home/user/jimin/bank/notes_src/notes.html');
await pg.pdf({ path: process.argv[2], format: 'A4', preferCSSPageSize: true, printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
  footerTemplate: '<div style="width:100%;font-size:7.5pt;color:#7a858f;font-family:Liberation Sans,Arial;padding:0 15mm;display:flex;justify-content:space-between"><span>Mock 6-10 · error notes</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
await b.close();
