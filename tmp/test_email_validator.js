// Quick validator test that mirrors getEmailValidationError behavior
const EMAIL_REGEX = /^[^\s@]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;
const TLD_WHITELIST = new Set([
  'com','net','org','io','br','co','dev','app','info','tech','cloud','ai','edu','gov','us','uk','ca','de','fr','es','it'
]);

function getTld(email){ const p = email.toLowerCase().split('.'); return p.length>1 ? p[p.length-1] : ''; }
function getEmailValidationError(email){ if (!EMAIL_REGEX.test(email)) return 'Formato de e-mail inválido'; if (!TLD_WHITELIST.has(getTld(email))) return 'Domínio inválido'; return null; }

const cases = [
  'epokmj k@gm.co',
  'PKJFN@fnfj.lak',
  'normal.user@example.com',
  'user+tag@sub.domain.io',
  'bad@domain',
  ' space@domain.com',
  'valid@domain.co',
  'someone@weirdtld.xyz'
];

for (const c of cases) {
  console.log(c, '=>', getEmailValidationError(c));
}
