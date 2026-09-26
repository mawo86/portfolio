// Prüft interne Links im gebauten dist/-Ordner: Ziel-Datei vorhanden, Anker vorhanden.
// Externe Links werden nicht abgerufen (kein Netz nötig, keine Flakes).
// Aufruf: node scripts/check-links.mjs [dist]   Exit-Code 1 bei kaputten Links.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? 'dist');
const htmlFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
})(root);

const idCache = new Map();
function idsOf(file) {
  if (!idCache.has(file)) {
    const html = fs.readFileSync(file, 'utf8');
    const ids = new Set();
    for (const m of html.matchAll(/\s(?:id|name)=["']([^"']+)["']/g)) ids.add(m[1]);
    idCache.set(file, ids);
  }
  return idCache.get(file);
}

function resolveTarget(urlPath) {
  // "/blog/" -> dist/blog/index.html, "/rss.xml" -> dist/rss.xml, "/og/x.png" -> dist/og/x.png
  const clean = decodeURIComponent(urlPath.replace(/\/+$/, '')) || '/';
  const candidates = clean === '/'
    ? [path.join(root, 'index.html')]
    : [path.join(root, clean), path.join(root, clean, 'index.html'), path.join(root, clean + '.html')];
  return candidates.find(c => fs.existsSync(c) && fs.statSync(c).isFile());
}

const broken = [];
let checked = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const pagePath = '/' + path.relative(root, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  for (const m of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)) {
    let href = m[1].replace(/&#38;|&amp;/g, '&');
    if (!href || /^(https?:|mailto:|tel:|data:|javascript:|#$)/.test(href)) continue;
    if (href.startsWith('//')) continue;
    checked++;
    let [pathPart, hash] = href.split('#');
    pathPart = pathPart.split('?')[0];
    let targetFile;
    if (pathPart === '') targetFile = file;               // reiner Anker auf der Seite selbst
    else if (pathPart.startsWith('/')) targetFile = resolveTarget(pathPart);
    else targetFile = resolveTarget(path.posix.join(path.posix.dirname(pagePath), pathPart));
    if (!targetFile) { broken.push(`${pagePath} → ${href} (Ziel fehlt)`); continue; }
    if (hash && targetFile.endsWith('.html') && !idsOf(targetFile).has(hash)) {
      broken.push(`${pagePath} → ${href} (Anker #${hash} fehlt)`);
    }
  }
}

console.log(`Link-Check: ${htmlFiles.length} Seiten, ${checked} interne Verweise geprüft.`);
if (broken.length) {
  console.error(`\n${broken.length} kaputte interne Links:\n  ` + [...new Set(broken)].join('\n  '));
  process.exit(1);
}
console.log('Keine kaputten internen Links.');
