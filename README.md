# ✅ Gerenciador de Tarefas (To-Do App)

Projeto desenvolvido em **Node.js + Express**, com testes automatizados usando **Jest e Supertest**.  
O objetivo é implementar um CRUD simples de tarefas, seguindo os critérios de avaliação com 4 dimensões, e incluindo testes unitários, integração, aceitação e mock de API.

---

## ✅ ✅ Tecnologias Utilizadas
- Node.js
- Express
- Jest
- Supertest

---

##  Estrutura de Pastas

projeto/
├─ src/
│ ├─ tarefa/
│ │ ├─ Tarefa.js
│ │ └─ tarefaController.js
│ ├─ routes/
│ │ └─ tarefaRoutes.js
│ ├─ services/
│ │ └─ externalService.js
│ └─ app.js
├─ tests/
│ ├─ tarefa.test.js
│ ├─ tarefa.routes.test.js
│ ├─ tarefa.acceptance.test.js
│ └─ mocks/
│ └─ externalService.mock.test.js
├─ package.json
└─ README.md

## Instalar Dependências
```bash
npm install

## Caso falte o Supertest ou Jest:
npm install jest supertest --save-dev

## Rodar testes
npm test
npx jest --coverage

## Rotas da API
GET /tarefas

POST /tarefas
Body: { "titulo": "...", "descricao": "..." }

PATCH /tarefas/:id/concluir

PATCH /tarefas/:id/reabrir

DELETE /tarefas/:id

## API mockada
GET /api/external/notify

Autor: Eduardo L Feliciano Jr.
Data: 17/10/2025

