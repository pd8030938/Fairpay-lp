// Shared email validator with TLD whitelist and detailed errors
export const EMAIL_REGEX = /^[^\s@]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;

// Whitelisted TLDs — add/remove as needed
export const TLD_WHITELIST = new Set<string>([
  "com",
  "net",
  "org",
  "io",
  "br",
  "co",
  "dev",
  "app",
  "info",
  "tech",
  "cloud",
  "ai",
  "edu",
  "gov",
  "us",
  "uk",
  "ca",
  "de",
  "fr",
  "es",
  "it"
]);

// Disposable email domains blacklist (common providers)
export const DISPOSABLE_DOMAINS = new Set<string>([
  "10minutemail.com",
  "10minutemail.net",
  "dispostable.com",
  "temp-mail.org",
  "temp-mail.io",
  "mailinator.com",
  "maildrop.cc",
  "guerrillamail.com",
  "yopmail.com",
  "trashmail.com",
  "throwawaymail.com",
  "mailnesia.com",
  "getnada.com",
  "tempmail.dev",
  "spamgourmet.com",
  "jetable.org",
  "sharklasers.com"
]);

// Length limits
export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 70;
export const EMAIL_MAX_LENGTH = 150;

export function getEmailTld(email: string) {
  const parts = email.toLowerCase().split(".");
  return parts.length > 1 ? parts[parts.length - 1] : "";
}

export function isAllowedTld(email: string) {
  const tld = getEmailTld(email);
  return TLD_WHITELIST.has(tld);
}

// Returns null when valid, otherwise an error message string
export function getEmailValidationError(email: string): string | null {
  if (!EMAIL_REGEX.test(email)) return "Formato de e-mail inválido";
  const domain = String(email).split("@")[1]?.toLowerCase() || "";
  if (DISPOSABLE_DOMAINS.has(domain)) return "E-mail temporário não permitido";
  if (!isAllowedTld(email)) return "Domínio inválido";
  return null;
}

export const isValidEmail = (email: string) => getEmailValidationError(email) === null;

