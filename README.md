# 🍽️ API - Tindko Balança Self-Service

Backend do sistema de pesagem de pratos e adicionais para restaurantes self-service.

---

## ⚙️ Tecnologias

- Node.js + Express
- Prisma ORM
- PostgreSQL
- Zod (validação)
- PNPM
- Estrutura modular por contextos (`/modules`)
- Comandas físicas
- DTOs organizados por módulo

---

## 🚀 Como rodar

```bash
pnpm install
pnpm dev
```

Crie um arquivo `.env` com as variáveis:

```env
DATABASE_URL="postgresql://usuario:senha@host:porta/tindko_dev_balanca"
PORT=3001
```

---

## 🧱 Estrutura de pastas

```bash
src/
└── modules/
    └── balanca/
        ├── controllers/
        ├── dto/
        ├── routes/
        ├── services/
```

---

## 📦 Endpoints da API

### 🔹 Comandas

| Método | Rota                    | Descrição             |
| ------ | ----------------------- | --------------------- |
| POST   | `/api/balanca/comandas` | Cria uma nova comanda |

**Exemplo de JSON:**

```json
{
  "numero": 1,
  "status": "livre"
}
```

---

### 🔹 Pedidos

| Método | Rota                                          | Descrição                       |
| ------ | --------------------------------------------- | ------------------------------- |
| POST   | `/api/balanca/pedidos`                        | Cria um novo pedido             |
| PATCH  | `/api/balanca/pedidos/status`                 | Atualiza status de um pedido    |
| GET    | `/api/balanca/pedidos`                        | Lista todos os pedidos          |
| GET    | `/api/balanca/pedidos/abertos`                | Lista somente pedidos abertos   |
| GET    | `/api/balanca/pedidos/fechados`               | Lista somente pedidos fechados  |
| GET    | `/api/balanca/pedidos/aberto/:numero_comanda` | Busca pedido aberto por comanda |

**Exemplo de criação:**

```json
{
  "numero_comanda": 1,
  "responsavel_id": "uuid-funcionario",
  "responsavel_nome": "João Silva"
}
```

---

### 🔹 Pesagens

| Método | Rota                    | Descrição             |
| ------ | ----------------------- | --------------------- |
| POST   | `/api/balanca/pesagens` | Cria uma nova pesagem |

**Exemplo:**

```json
{
  "pedido_id": "uuid-do-pedido",
  "categoria_id": "buffet",
  "peso_gramas": 550,
  "preco_por_kg": 48.5,
  "responsavel_id": "uuid-funcionario",
  "responsavel_nome": "João Silva"
}
```

---

### 🔹 Adicionais (Ex: bebida, sobremesa extra)

| Método | Rota                      | Descrição                   |
| ------ | ------------------------- | --------------------------- |
| POST   | `/api/balanca/adicionais` | Cria um adicional no pedido |

**Exemplo:**

```json
{
  "pedido_id": "uuid-do-pedido",
  "produto_id": "refri-350ml",
  "nome_produto": "Refrigerante",
  "quantidade": 2,
  "valor_unitario": 6.5,
  "origem": "garcom",
  "responsavel_id": "uuid-do-garcom",
  "responsavel_nome": "Maria"
}
```

---

## 📥 Insomnia

### ✅ Importar Collection

Clique no botão abaixo para importar a coleção no Insomnia (ou cole o JSON manualmente):

[![Run in Insomnia](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Tindko%20Balan%C3%A7a&uri=https%3A%2F%2Fgist.githubusercontent.com%2Fyour-gist-id%2Fraw%2Finsomnia-collection.json)

> ⚠️ Substitua `your-gist-id` acima com o link real do seu Gist ou JSON exportado.

---

## ✍️ Autor

Desenvolvido por seu pai trem bala.
