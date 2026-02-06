# Fairpay - Landing Page

Uma landing page moderna construída com **Next.js**, **TypeScript**, **Tailwind CSS** e **Prisma** para capturar leads através de uma waitlist.

## 📋 Estrutura do Projeto

```
fairpay-lp/
├── src/
│   ├── app/                # Rotas e Páginas (App Router)
│   │   ├── api/            # API Routes (base de dados)
│   │   │   └── waitlist/
│   │   │       └── route.ts # POST/GET para a waitlist
│   │   ├── layout.tsx      # Configuração de Fontes e SEO
│   │   └── page.tsx        # Landing Page (AIDA)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ui/             # Botões, Inputs, Cards
│   │   ├── Hero.tsx        # Seção Hero
│   │   ├── Features.tsx    # Diferenciais
│   │   ├── Countdown.tsx   # Relógio de urgência
│   │   └── WaitlistForm.tsx# Formulário de cadastro
│   └── lib/                # Configurações
│       └── prisma.ts       # Cliente Prisma
├── prisma/                 # Esquema do Banco de Dados
│   └── schema.prisma       # Modelo WaitlistEntry
├── public/                 # Imagens e assets
├── .env                    # Variáveis de ambiente
├── package.json
└── README.md
```

## 🚀 Como Começar

### 1. Configurar o Banco de Dados

Crie um arquivo `.env` na raiz do projeto:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/fairpay?schema=public"
```

### 2. Inicializar o Prisma

```bash
npx prisma migrate dev --name init
```

Isso criará as tabelas no PostgreSQL automaticamente.

### 3. Executar o Servidor de Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 📦 Componentes

### Hero
Seção de apresentação principal com chamada à ação.

### Features
Grid com 4 diferenciais (Rápido, Seguro, Simples, Confiável).

### Countdown
Timer countdown até o lançamento (2026-03-30).

### WaitlistForm
Formulário para capturar emails e nomes dos leads.

### API /api/waitlist
- **POST**: Adiciona um novo email à waitlist
- **GET**: Retorna todos os emails cadastrados

## 🔧 Tecnologias Utilizadas

- **Next.js 15+** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilos utilitários
- **Prisma ORM** - Gerenciamento de banco de dados
- **PostgreSQL** - Banco de dados
- **ESLint** - Linting de código

## 📝 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `DATABASE_URL` | String de conexão PostgreSQL. **Use a URL do session pooler** (ex.: `postgresql://user:pass@<host>.pooler.supabase.com:5432/postgres`) ou a connection string direta ao host primário para evitar problemas com prepared statements. |
| `DB_WRITE_CONCURRENCY` | (Opcional) Limita concorrência de gravações quando o fallback está ativo. Valor padrão: `2`. |
| `PG_SSL_ROOT_CERT` | (Opcional) CA PEM **ou** base64-encoded PEM do certificado do servidor PostgreSQL para verificação SSL no fallback. |
| `MONITORING_WEBHOOK_URL` | (Opcional) URL para envio de eventos de monitoramento (ex.: Sentry, webhook interno). |

⚠️ **NUNCA commitar `.env` para o GitHub!** Adicione à `.gitignore`.

---

### Recomendações importantes sobre poolers (pgbouncer / Supabase)

- Prisma usa *prepared statements* internamente. Se você estiver usando um *transaction pooler*, prepared statements podem não existir entre conexões e você verá erros como "prepared statement 's0' already exists" ou "prepared statement 's3' does not exist".
- A melhor prática é usar **session pooling** (ou conexão direta ao host primário). Se você usa Supabase, prefira a URL do *session pooler* (porta 5432) ou a connection string direta do host.

Exemplo de `DATABASE_URL` (session pooler):

```env
DATABASE_URL=postgresql://postgres:secret@aws-1-eu-west-1.pooler.supabase.com:5432/postgres
```

Se o seu Postgres usar um CA customizado, defina `PG_SSL_ROOT_CERT` com o PEM ou sua versão base64. No PowerShell você pode fazer:

```powershell
$b = [Convert]::ToBase64String([IO.File]::ReadAllBytes('rds-ca.pem'))
setx PG_SSL_ROOT_CERT $b
```

### Verificação automática (startup)

- O projeto inclui um verificador de startup que detecta se `DATABASE_URL` aponta para um pooler e loga recomendações. Procure nos logs por mensagens como:
  - `Detected session pooler (GOOD) - host=...` — indica que estamos usando session pooling.
  - `Detected a pooler host (...) on port ... - check pooling mode` — indica atenção.

- **Modo estrito (opcional):** para impedir boot acidental com um pooler/transaction pooling, defina `DB_POOLING_STRICT=1` no ambiente de staging/produção. Nesse modo, se for detectado um host que contenha "pooler" o processo **vai falhar** na inicialização até que você confirme explicitamente configurando `DB_ALLOW_POOLER=1`.

  - Recomendado apenas para ambientes de staging/prod quando quiser bloquear deploys com configuração de pooling arriscada.
  - Exemplo (Vercel): adicione `DB_POOLING_STRICT` na seção de Environment Variables de projeto (valor: `1`) para exigir correção antes do deploy.

---

## ✅ Checklist de deploy (produção)

Siga estes passos ao configurar o ambiente de produção para garantir que o app rode sem problemas relacionados ao pooler/SSL/monitoramento:

1. Defina `DATABASE_URL` com a URL do *session pooler* (ex.: `postgresql://...pooler.supabase.com:5432/postgres`) ou, preferencialmente, use a connection string do host primário.
2. Verifique SSL: se seu provedor usa CA customizada, defina `PG_SSL_ROOT_CERT` com o PEM (ou base64 do PEM).
3. Configure monitoramento: defina `MONITORING_WEBHOOK_URL` para receber eventos (ex.: alertas quando o fallback é acionado).
4. (Opcional) Ative `DB_POOLING_STRICT=1` em staging para bloquear deploys que apontem para um pooler sem validação, e remova/defina `DB_ALLOW_POOLER=1` apenas quando consciente.
5. Defina `DB_WRITE_CONCURRENCY` para o nível desejado (padrão `2`), caso use a mitigação de semáforo para writes concorrentes.

### Exemplos rápidos

- Vercel: Project Settings → Environment Variables
  - Add `DATABASE_URL`, `MONITORING_WEBHOOK_URL`, `PG_SSL_ROOT_CERT` (base64), `DB_POOLING_STRICT=1` (optional)

- Heroku: `heroku config:set DATABASE_URL=... MONITORING_WEBHOOK_URL=...`

- Docker (compose):

```yaml
services:
  web:
    image: fairpay:latest
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - MONITORING_WEBHOOK_URL=${MONITORING_WEBHOOK_URL}
      - PG_SSL_ROOT_CERT=${PG_SSL_ROOT_CERT}
      - DB_POOLING_STRICT=1
```

---

Se quiser, eu posso adicionar um pequeno script de CI que valida a `DATABASE_URL` (faz parse e garante que não aponta para um pooler, ou que `DB_ALLOW_POOLER=1` esteja setado) e falha o pipeline quando as condições não forem atendidas — quer que eu adicione isso também?

### Observabilidade

- Em ambiente de desenvolvimento há um endpoint dev `GET /api/db-metrics` que retorna contadores (escritas totais e quantas vezes o fallback foi utilizado). Não exponha isso em produção.
- Configure `MONITORING_WEBHOOK_URL` para receber notificações quando o fallback for acionado e assim detectar regressões em tempo real.

---


## 🎯 Modelo de Landing Page (AIDA)

1. **Atenção** (Hero) - Captar a atenção com headline poderoso
2. **Interesse** (Features) - Mostrar os diferenciais
3. **Desejo** (Countdown) - Criar urgência
4. **Ação** (WaitlistForm) - Capturar o lead

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📊 Monitorar Logs

Durante desenvolvimento, os logs da base de dados são exibidos. Para desativar:

```typescript
// src/lib/prisma.ts
new PrismaClient({
  // log: ["query"], // Remova esta linha
})
```

## 🐛 Troubleshooting

### Erro de conexão com PostgreSQL
- Verifique se o PostgreSQL está rodando
- Confirme a `DATABASE_URL` está correta
- Teste a conexão com: `psql postgresql://user:password@localhost:5432/fairpay`

### Erro: "Already exists in the database"
Se tentar criar a waitlist dos endpoints duplicados:
```bash
npx prisma migrate reset
```

## 📞 Próximos Passos

- [ ] Integrar com email provider (Sendgrid, Mailchimp)
- [ ] Adicionar analytics (Google Analytics, Mixpanel)
- [ ] Implementar captcha
- [ ] Designs de favicon e og:image
- [ ] Deploy no Vercel

---

**Desenvolvido para Fairpay** 💳

---

## 🧾 Appendix: Checks, CI and Troubleshooting (detalhado)

### 1) CI check (exemplo GitHub Actions)
Adicione um job simples que valida `DATABASE_URL` antes do deploy. Ele falha se detectar um *pooler* no host (contendo `pooler`) a menos que `DB_ALLOW_POOLER=1` esteja setado.

```yaml
# .github/workflows/db-pooling-check.yml
name: DB Pooling Check
on: [push, pull_request]
jobs:
  check-db-pooling:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Validate DATABASE_URL
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          DB_ALLOW_POOLER: ${{ secrets.DB_ALLOW_POOLER || '' }}
        run: |
          node -e "const u=new URL(process.env.DATABASE_URL); const host=u.hostname||''; if(host.includes('pooler') && String(process.env.DB_ALLOW_POOLER||'')!=='1'){ console.error('ERROR: DATABASE_URL points to a pooler host: '+host); process.exit(1);} console.log('DB check OK - host='+host)"
```

> Dica: coloque `DATABASE_URL` em GitHub Secrets (não no repo). Use `DB_ALLOW_POOLER=1` para exceções controladas.

### 2) Comandos úteis e testes locais
- Rodar teste de concorrência (reproduz o problema / testa fallback):
  - node tmp/repro_prisma_s0_with_retry.js
- Ver métricas em dev: GET http://localhost:3000/api/db-metrics
- Ver log persistente de fallbacks: tmp/db_fallbacks.log
- Ver logs de startup com o verificador: ao iniciar `npm run dev` procure por `Detected session pooler (GOOD)` ou `Detected a pooler host`.

### 3) SSL e `PG_SSL_ROOT_CERT`
- Se o seu banco usa um CA customizado, defina `PG_SSL_ROOT_CERT` com o PEM (ou base64 do PEM). Exemplo (PowerShell):

```powershell
$b = [Convert]::ToBase64String([IO.File]::ReadAllBytes('rds-ca.pem'))
setx PG_SSL_ROOT_CERT $b
```

- No Vercel/Heroku: adicione a variável `PG_SSL_ROOT_CERT` (base64) nas Environment Variables do projeto.

### 4) O que fazer em caso de boot bloqueado (rollback rápido)
- Se `DB_POOLING_STRICT=1` estiver ativado e o boot falhar por detectar pooler, duas opções rápidas:
  1. Em staging: defina `DB_ALLOW_POOLER=1` temporariamente para permitir o deploy enquanto corrige a infra.
  2. Em emergências: remova `DB_POOLING_STRICT` do ambiente (ou defina como `0`) e reinicie.

### 5) Observabilidade / Alertas
- Configure `MONITORING_WEBHOOK_URL` (Sentry, Slack webhook, webhook.site) para receber eventos:
  - `db_startup` — evento de startup contendo host/port/pooler
  - `db_fallback` — quando fallback pg foi usado (email detalhado opcional)
  - `db_fallback_failure` — quando o fallback falhar

Exemplo de payload enviado (JSON):
```json
{ "type": "db_fallback", "message": "email=test@example.com", "timestamp": "2026-02-04T…Z" }
```

---

Se quiser, posso criar o workflow de CI real no repositório (`.github/workflows/db-pooling-check.yml`) e adicionar um pequeno job de integração que roda o `tmp/repro_prisma_s0_with_retry.js` em um ambiente controlado (opcional). Quer que eu crie o workflow agora? (responda "criar-ci")
