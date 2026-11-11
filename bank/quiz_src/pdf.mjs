import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const pg = await b.newPage();
await pg.goto('file:///tmp/gen/sub/quiz.html');
await pg.pdf({ path: process.argv[2], format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
 footerTemplate: '<div style="width:100%;font-size:8pt;color:#777;font-family:Liberation Sans,Arial;padding:0 12mm;display:flex;justify-content:space-between"><span>Concept quiz · Practice sets 1-8</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
await b.close();
