// Standalone script (plain JS, no TS import) so it runs with plain `node`.
// Must stay in sync with the PBKDF2 params in src/lib/auth.ts.
// Must match src/lib/auth.ts — Cloudflare Workers' PBKDF2 caps iterations at 100,000.
const PBKDF2_ITERATIONS = 100_000

function toHex(buffer) {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, [
    'deriveBits',
  ])
  const derived = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    256,
  )
  return `pbkdf2$${PBKDF2_ITERATIONS}$${toHex(salt.buffer)}$${toHex(derived)}`
}

const password = process.argv[2]
if (!password) {
  console.error('Usage: node scripts/hash-password.mjs <password>')
  process.exit(1)
}

console.log(await hashPassword(password))
