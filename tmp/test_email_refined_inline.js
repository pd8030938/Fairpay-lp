// Inline copy of key logic to test rules quickly
const EMAIL_REGEX = /^(?!\.)(?!.*\.\.)(?!.*\.$)[A-Za-z0-9][A-Za-z0-9._%+-]{0,63}@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;
const DOMAIN_SUGGESTIONS = { 'gml.com':'gmail.com', 'gamil.com':'gmail.com', 'hotml.com':'hotmail.com' };
function getDomainSuggestion(domain){ return DOMAIN_SUGGESTIONS[domain.toLowerCase()] || null }
function getEmailValidationError(email){ if(!email||typeof email!=='string') return 'Formato de e-mail inválido'; if(email.length>150) return 'Email muito longo'; const local = String(email).split('@')[0]||''; if(local.startsWith('.')) return 'Formato de e-mail inválido: ponto no início do local-part não permitido'; if(local.endsWith('.')) return 'Formato de e-mail inválido: ponto no final do local-part não permitido'; if(local.includes('..')) return 'Formato de e-mail inválido: pontos consecutivos no local-part não são permitidos'; if(!EMAIL_REGEX.test(email)) return 'Formato de e-mail inválido'; const domain = String(email).split('@')[1]||''; const tld = domain.split('.').pop()||''; if(tld.length<2) return 'TLD inválido (muito curto)'; if(!/^[A-Za-z]+$/.test(tld)) return 'TLD inválido'; const suggestion = getDomainSuggestion(domain); if(suggestion) return `Domínio parece inválido. Você quis dizer "${suggestion}"?`; return null }

const cases = [
  '.pedro@example.com',
  'pedro.@example.com',
  'pe..dro@example.com',
  'pedro.manuel@gmail.com',
  'user@gml.com',
  'user@hotml.com',
  'user@domain.c',
  'user@domain.1',
  'bad#user@example.com',
  'user%name+tag@sub.example.co'
];
for(const c of cases){ console.log(c,'=>', getEmailValidationError(c) || 'valid'); }
