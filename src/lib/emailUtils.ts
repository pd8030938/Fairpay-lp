// Email utilities: stricter local-part rules, domain typo suggestions, and validation messages

// Local part rules:
// - Must start with alphanumeric
// - No leading dot, no trailing dot, no consecutive dots
// - Allowed chars: letters, numbers, . _ % + -
// - Max length 64

export const EMAIL_REGEX = /^(?!\.)(?!.*\.\.)(?!.*\.$)[A-Za-z0-9][A-Za-z0-9._%+-]{0,63}@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;

// Common domain typo suggestions
const DOMAIN_SUGGESTIONS: Record<string, string> = {
  'gml.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmal.com': 'gmail.com',
  'hotml.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'hotmial.com': 'hotmail.com',
  'yaho.com': 'yahoo.com',
  'yahho.com': 'yahoo.com',
  'outlok.com': 'outlook.com',
  'outllok.com': 'outlook.com',
  'gmai.com': 'gmail.com'
};

export function getDomainSuggestion(domain: string): string | null {
  const d = domain.toLowerCase();
  if (DOMAIN_SUGGESTIONS[d]) return DOMAIN_SUGGESTIONS[d];
  return null;
}

// Validate and return null if valid, otherwise a message string
export function getEmailValidationError(email: string): string | null {
  if (typeof email !== 'string' || !email) return 'Formato de e-mail inválido';

  // quick length guard
  if (email.length > 150) return 'Email muito longo';

  // Early domain/TLD checks (before regex) so we can return explicit TLD errors
  const domain = String(email).split('@')[1] || '';
  const tld = domain.split('.').pop() || '';
  if (tld && tld.length < 2) return 'TLD inválido (muito curto)';
  if (tld && !/^[A-Za-z]+$/.test(tld)) return 'TLD inválido';

  // Provide specific feedback for local-part issues before regex match (so we catch trailing-dot cases)
  const local = String(email).split('@')[0] || '';
  if (local.startsWith('.')) return 'Formato de e-mail inválido: ponto no início do local-part não permitido';
  if (local.endsWith('.')) return 'Formato de e-mail inválido: ponto no final do local-part não permitido';
  if (local.includes('..')) return 'Formato de e-mail inválido: pontos consecutivos no local-part não são permitidos';

  // Basic regex check
  if (!EMAIL_REGEX.test(email)) {
    // invalid chars or general format
    return 'Formato de e-mail inválido';
  }

  // Domain suggestion check
  const suggestion = getDomainSuggestion(domain);
  if (suggestion) return `Domínio parece inválido. Você quis dizer "${suggestion}"?`;

  return null;
}
