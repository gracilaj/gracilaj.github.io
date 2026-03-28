import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(__dirname, '..', 'public', 'gracila.pdf')

let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'
const offsets = []

function obj(n, body) {
  offsets[n] = Buffer.byteLength(pdf, 'latin1')
  pdf += `${n} 0 obj\n${body}\nendobj\n`
}

obj(1, '<< /Type /Catalog /Pages 2 0 R >>')
obj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
obj(
  3,
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
)
const stream =
  'BT /F1 14 Tf 72 720 Td (Placeholder: replace public/gracila.pdf with your real CV.) Tj 0 -24 Td (Jake Gracila - Portfolio) Tj ET'
obj(4, `<< /Length ${Buffer.byteLength(stream, 'latin1')} >>\nstream\n${stream}\nendstream`)
obj(5, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')

const xrefPos = Buffer.byteLength(pdf, 'latin1')
let xref = 'xref\n0 6\n0000000000 65535 f \n'
for (let i = 1; i <= 5; i++) {
  xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
pdf += xref
pdf += 'trailer\n<< /Size 6 /Root 1 0 R >>\n'
pdf += `startxref\n${xrefPos}\n%%EOF\n`

fs.writeFileSync(out, pdf, 'latin1')
console.log('Wrote', out, fs.statSync(out).size, 'bytes')
