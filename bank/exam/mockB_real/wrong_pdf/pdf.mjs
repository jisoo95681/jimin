import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 680, height: 1000 } });
await pg.emulateMedia({ media: 'print' });
await pg.goto('file:///tmp/gen/mb/PFILE');
await pg.addStyleTag({ content: '.q{break-before:page !important;break-inside:avoid;margin:0 !important}' });
const info = await pg.evaluate(() => {
  const H = 960; const out = [];
  document.querySelectorAll('section.q').forEach(s => { let h = s.getBoundingClientRect().height; const r = [Math.round(h)]; let z = 1; while (h > H && z > 0.80) { z -= 0.02; s.style.zoom = z.toFixed(2); h = s.getBoundingClientRect().height; } if (h > H) { s.style.zoom = '1'; const v = s.querySelector('.vig'); v.style.columnCount = '2'; v.style.columnGap = '16px'; v.querySelectorAll('table,.vtt').forEach(t => t.style.breakInside = 'avoid'); h = s.getBoundingClientRect().height; r.push('cols ' + Math.round(h)); z = 1; while (h > H && z > 0.5) { z -= 0.02; s.style.zoom = z.toFixed(2); h = s.getBoundingClientRect().height; } } r.push('zoom ' + s.style.zoom + ' h' + Math.round(h)); out.push(r.join('>')); });
  return out;
});
console.log(JSON.stringify(info));
await pg.pdf({ path: process.argv[2], format: 'A4', preferCSSPageSize: true, printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
  footerTemplate: '<div style="width:100%;font-size:7.5pt;color:#7a858f;font-family:Liberation Sans,Arial;padding:0 15mm;display:flex;justify-content:space-between"><span>Mock B · wrong-answer notes</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
await b.close();
