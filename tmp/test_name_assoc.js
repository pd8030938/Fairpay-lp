// Local test implementation mirroring nameAssociation logic
function normalize(text) {
  return text
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();
}
function tokensFromName(name) {
  const n = normalize(name);
  return n.split(/\s+/).filter((t) => t.length >= 2);
}
function getEmailLocalPart(email) { return String(email).split("@")[0].toLowerCase(); }
function getEmailNameAssociationError(name, email){ if (!name || !email) return 'Nome e e-mail são obrigatórios'; const tokens = tokensFromName(name); if (!tokens.length) return 'Nome muito curto'; const local = getEmailLocalPart(email).replace(/[^a-z0-9]/g, ''); const found = tokens.some((t) => local.includes(t)); if (!found) return 'Email não parece estar associado ao nome'; return null; }

const cases = [
  { name: 'Pedro Manuel', email: 'pedro.manuel@example.com' },
  { name: 'John Smith', email: 'j.smith@gmail.com' },
  { name: 'Alice', email: 'bob@example.com' },
  { name: 'Test User', email: 't!@domain.com' },
  { name: 'Ana Maria', email: 'amaria@domain.com' }
];

for (const c of cases) {
  console.log(c, '=>', getEmailNameAssociationError(c.name, c.email));
}
