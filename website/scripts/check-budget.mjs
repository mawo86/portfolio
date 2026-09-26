// Größen-Budget als Warnung: meldet Seiten und Assets, die über der Schwelle liegen.
// Bricht den Build nie ab (Exit 0), damit CI nur warnt. Schwellen unten anpassen.
// Aufruf: node scripts/check-budget.mjs [dist]
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? 'dist');
const BUDGET = {
  html: 120 * 1024,      // einzelne HTML-Seite (inkl. Inline-CSS/JS und Finder-Daten)
  asset: 200 * 1024,     // einzelnes JS/CSS-Bundle
  image: 400 * 1024,     // einzelnes Bild (OG-Bilder, Media)
  totalAssets: 600 * 1024, // Summe aller JS+CSS in _astro/
};

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'pagefind') walk(p); }
    else files.push(p);
  }
})(root);

const kb = n => `${(n / 1024).toFixed(0)} KB`;
const warn = [];
let totalAssets = 0;
for (const f of files) {
  const size = fs.statSync(f).size;
  const rel = path.relative(root, f);
  if (f.endsWith('.html') && size > BUDGET.html) warn.push(`${rel}: ${kb(size)} (Budget ${kb(BUDGET.html)})`);
  else if (/\.(js|css)$/.test(f)) { totalAssets += size; if (size > BUDGET.asset) warn.push(`${rel}: ${kb(size)} (Budget ${kb(BUDGET.asset)})`); }
  else if (/\.(png|jpe?g|webp|avif|gif)$/.test(f) && size > BUDGET.image) warn.push(`${rel}: ${kb(size)} (Budget ${kb(BUDGET.image)})`);
}
if (totalAssets > BUDGET.totalAssets) warn.push(`Summe JS+CSS: ${kb(totalAssets)} (Budget ${kb(BUDGET.totalAssets)})`);

console.log(`Größen-Budget: ${files.length} Dateien, JS+CSS gesamt ${kb(totalAssets)}.`);
if (warn.length) {
  console.log(`\n::warning::${warn.length} Datei(en) über Budget`);
  for (const w of warn) console.log(`  ⚠ ${w}`);
} else {
  console.log('Alles im Budget.');
}
