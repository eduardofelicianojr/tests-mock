const request = require('supertest');
const app = require('../src/app');

describe('Rotas de Tarefas (API)', () => {

    test('GET /tarefas - Deve listar todas as tarefas', async () => {
        const response = await request(app).get('/tarefas');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });

    test('POST /tarefas - Deve criar uma nova tarefa', async () => {
        const novaTarefa = { titulo: "Realizar atividade de ESW", descricao: "Atividade avaliativa da disciplina" };
        const response = await request(app).post('/tarefas').send(novaTarefa);
        expect(response.status).toBe(201);
        expect(response.body.titulo).toBe(novaTarefa.titulo);
        expect(response.body.descricao).toBe(novaTarefa.descricao);
        expect(response.body.status).toBe("pendente");
    }); 
    test('PATCH /tarefas/:id/concluir - Deve concluir uma tarefa e atualizar o status', async () => {
        const response = await request(app).patch('/tarefas/0/concluir');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("concluida");
    });
    test('PATCH /tarefas/:id/reabrir - Deve reabrir uma tarefa e atualizar o status', async () => {
        const response = await request(app).patch('/tarefas/0/reabrir');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("aberta");
    });
    test('DELETE /tarefas/:id - Deve remover uma tarefa', async () => {
        const response = await request(app).delete('/tarefas/0');
        expect(response.status).toBe(200);
        expect(response.body.mensage).toBe("Tarefa removida com sucesso");
    });
});
