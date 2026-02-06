// Helpers to check if an email local-part is reasonably associated with a user's name
function normalize(text: string) {
  return text
    .normalize("NFKD")
    .replace(/\p{M}/gu, "") // remove diacritics
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();
}

function tokensFromName(name: string) {
  const n = normalize(name);
  return n
    .split(/\s+/)
    .filter((t) => t.length >= 2);
}

export function sanitizeName(name: string) {
  const parts = normalize(name).split(/\s+/).filter(Boolean);
  return parts.map((p) => p[0].toUpperCase() + p.slice(1)).join(" ");
}

export function getEmailLocalPart(email: string) {
  return String(email).split("@")[0].toLowerCase();
}

// Simple profanity list — extend as needed
const PROHIBITED_WORDS = new Set<string>([
  "palavrão",
  "offensive",
  "xinga"
]);

// Returns null if name is acceptable, otherwise an error message
export function getNameValidationError(name: string): string | null {
  if (!name) return "Nome é obrigatório";
  const lower = name.toLowerCase();
  for (const w of PROHIBITED_WORDS) {
    if (lower.includes(w)) return "Nome contém palavras inválidas";
  }
  const tokens = tokensFromName(name);
  if (!tokens.length) return "Nome muito curto";
  return null;
}

// Backwards-compatible check (kept but not used by server anymore)
export function getEmailNameAssociationError(name: string, email: string): string | null {
  if (!name || !email) return "Nome e e-mail são obrigatórios";
  const tokens = tokensFromName(name);
  if (!tokens.length) return "Nome muito curto";
  const local = getEmailLocalPart(email).replace(/[^a-z0-9]/g, ""); // remove separators for matching

  // Accept association if at least one name token appears in local part
  const found = tokens.some((t) => local.includes(t));
  if (!found) return "Email não parece estar associado ao nome";
  return null;
}

export function isEmailAssociatedWithName(name: string, email: string) {
  return getEmailNameAssociationError(name, email) === null;
}
