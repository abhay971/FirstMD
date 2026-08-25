// One-off / reusable: convert every PNG/JPG in public/assets to WebP.
//   node scripts/optimize-images.mjs            → converts + deletes originals
//   node scripts/optimize-images.mjs --keep     → converts, keeps originals
//   node scripts/optimize-images.mjs public/assets/articles   → another folder
// Photos are capped at MAX_EDGE px on the long side; transparency is preserved.
import sharp from 'sharp'
import { readdir, stat, unlink } from 'node:fs/promises'
import path from 'node:path'

const DIR = process.argv.find((a) => !a.startsWith('--') && a !== process.argv[0] && a !== process.argv[1]) ?? 'public/assets'
const MAX_EDGE = 2000
const QUALITY = 80
const keep = process.argv.includes('--keep')

const files = (await readdir(DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f))
let before = 0
let after = 0
for (const f of files) {
  const src = path.join(DIR, f)
  const out = path.join(DIR, f.replace(/\.(png|jpe?g)$/i, '.webp'))
  const img = sharp(src)
  const meta = await img.metadata()
  const long = Math.max(meta.width, meta.height)
  const pipeline = long > MAX_EDGE ? img.resize({ width: meta.width >= meta.height ? MAX_EDGE : null, height: meta.height > meta.width ? MAX_EDGE : null }) : img
  await pipeline.webp({ quality: QUALITY, effort: 6 }).toFile(out)
  const a = (await stat(src)).size
  const b = (await stat(out)).size
  before += a
  after += b
  console.log(`${f.padEnd(36)} ${(a / 1024).toFixed(0).padStart(6)}K → ${(b / 1024).toFixed(0).padStart(5)}K  (${meta.width}x${meta.height})`)
  if (!keep) await unlink(src)
}
console.log(`\nTOTAL ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB`)
