const { getEmailValidationError, getDomainSuggestion, EMAIL_REGEX } = require('../src/lib/emailUtils');

const cases = [
  { email: '.pedro@example.com', expect: 'Formato de e-mail inválido: ponto no início do local-part não permitido' },
  { email: 'pedro.@example.com', expect: 'Formato de e-mail inválido: ponto no final do local-part não permitido' },
  { email: 'pe..dro@example.com', expect: 'Formato de e-mail inválido: pontos consecutivos no local-part não são permitidos' },
  { email: 'pedro.manuel@gmail.com', expect: null },
  { email: 'user@gml.com', expectSuggestion: 'gmail.com' },
  { email: 'user@hotml.com', expectSuggestion: 'hotmail.com' },
  { email: 'user@domain.c', expect: 'TLD inválido (muito curto)' },
  { email: 'user@domain.1', expect: 'TLD inválido' },
  { email: 'bad#user@example.com', expect: 'Formato de e-mail inválido' }
];

for (const c of cases) {
  const err = getEmailValidationError(c.email);
  console.log(c.email, '=>', err || 'valid');
  if (c.expectSuggestion) console.log(' suggestion:', getDomainSuggestion(c.email.split('@')[1]));
}
