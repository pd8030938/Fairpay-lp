# Instruções de Configuração - Fairpay Landing Page

## ⚙️ Configuração Inicial Rápida

### 1. Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env` e preencha as informações:

```bash
cp .env.example .env
```

Edite o `.env` com suas credenciais PostgreSQL:
```
DATABASE_URL="postgresql://user:password@localhost:5432/fairpay?schema=public"
```

### 2. Banco de Dados PostgreSQL

#### Opção A: PostgreSQL Local
```bash
# Instale PostgreSQL em sua máquina
# Windows: https://www.postgresql.org/download/windows/
# Mac: brew install postgresql
# Linux: sudo apt-get install postgresql

# Inicie o serviço
# Windows (no PowerShell como Admin):
Start-Service postgresql-x64-16

# Crie o banco de dados:
psql -U postgres
CREATE DATABASE fairpay;
```

#### Opção B: Supabase (Recomendado para Produção)
1. Crie conta em [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Copie a `Connection String` e cole em `.env`
4. Altere `?schema=public` ao final se necessário

### 3. Criar Tabelas com Prisma

```bash
npx prisma migrate dev --name init
```

Isso:
- Cria o arquivo de migração
- Executa a migração
- Gera o cliente Prisma

### 4. Iniciar o Servidor

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 🧪 Testar a API

### Adicionar à Waitlist (POST)
```bash
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@example.com"}'
```

### Listar Todos (GET)
```bash
curl http://localhost:3000/api/waitlist
```

## 📊 Prisma Studio

Visualizar dados no painel visual:
```bash
npx prisma studio
```

Abrirá em `http://localhost:5555`

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)
1. Faça push do projeto para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Configure variáveis de ambiente
5. Deploy automático

### Opção 2: Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🛠️ Troubleshooting

### "ECONNREFUSED" ao rodar migrações
- PostgreSQL não está rodando
- `DATABASE_URL` está incorreta
- Teste com: `psql $DATABASE_URL`

### "Email already exists"
- Email duplicado na waitlist
- Use Prisma Studio para deletar e tentar novamente

### Porta 3000 já em uso
```bash
npm run dev -- -p 3001
```

## 📚 Próximos Passos

1. **Email Marketing**
   - Integrar Sendgrid ou Mailchimp
   - Enviar confirmação ao se cadastrar

2. **Analytics**
   - Google Analytics
   - Evento de "Join Waitlist"

3. **Segurança**
   - Rate limiting na API
   - Validação com captcha

4. **Design**
   - Adicionar logo do Fairpay
   - Customizar cores (brand colors)
   - Responsividade melhorada

## 📖 Documentação Útil

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs)

---

**Desenvolvido para Fairpay** 💳
