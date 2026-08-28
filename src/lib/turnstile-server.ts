export async function verifyTurnstileToken(
  token: string,
  secret: string,
  remoteip: string | null,
): Promise<boolean> {
  try {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({ secret, response: token, remoteip: remoteip ?? '' }),
    })
    if (!verifyRes.ok) return false
    const result = (await verifyRes.json()) as { success: boolean }
    return result.success
  } catch {
    return false
  }
}
