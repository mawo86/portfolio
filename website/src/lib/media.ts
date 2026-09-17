// Build-Zeit-Check für Higgsfield-Assets in public/media/.
// Fehlt eine Datei, rendern die Komponenten einen sauberen Fallback,
// statt ein kaputtes <img> oder <video> auszuliefern.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MEDIA_DIR = fileURLToPath(new URL('../../public/media/', import.meta.url));

export function hasMedia(file: string): boolean {
  return fs.existsSync(path.join(MEDIA_DIR, file));
}

export function mediaUrl(file: string): string {
  return `/media/${file}`;
}
