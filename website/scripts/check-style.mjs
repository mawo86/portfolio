// Stilprüfung für veröffentlichte Inhalte (Skill "meine-stimme"): kein Gedankenstrich (—) im Fließtext,
// kein "---" als Trenner im Markdown-Body. Drafts (draft: true) werden übersprungen.
// Aufruf: node scripts/check-style.mjs [--strict]   Exit 1 nur mit --strict, sonst reine Warnung.
import fs from 'node:fs';
import path from 'node:path';

const strict = process.argv.includes('--strict');
const roots = ['src/content/blog', 'src/content/case-studies', 'src/content/loesungen'];
const findings = [];

for (const dir of roots) {
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir).filter(f => /\.mdx?$/.test(f))) {
    const file = path.join(dir, name);
    const text = fs.readFileSync(file, 'utf8');
    const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
    if (fm && /^draft:\s*true/m.test(fm[1])) continue;
    const bodyStart = fm ? fm[0].length : 0;
    const lines = text.split('\n');
    let offset = 0;
    lines.forEach((line, i) => {
      const inBody = offset >= bodyStart;
      offset += line.length + 1;
      if (line.includes('—')) findings.push(`${file}:${i + 1} Gedankenstrich (—)`);
      if (inBody && /^\s*---\s*$/.test(line)) findings.push(`${file}:${i + 1} "---" als Trenner`);
    });
  }
}

if (findings.length) {
  console[strict ? 'error' : 'warn'](`Stil-Check: ${findings.length} Fund(e) in veröffentlichten Inhalten:\n  ` + findings.join('\n  '));
  if (strict) process.exit(1);
} else {
  console.log('Stil-Check: keine Funde in veröffentlichten Inhalten.');
}
