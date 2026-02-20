/**
 * Safe fetch that handles non-JSON responses (e.g. HTML error pages).
 * Prevents "Unexpected token in JSON" when API returns errors as HTML/text.
 */
export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const text = await res.text();

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  if (!text || !text.trim()) {
    throw new Error("API returned empty response");
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(
      `API returned invalid JSON (response may be HTML or plain text)`
    );
  }
}
