const request = require('supertest');
const app = require('../src/app');

describe('Testes de aceitação das Tarefas', () => {
    test('Deve listar todas as tarefas: criar, listar, concluir, reabrir e remover tarefa', async () => {
        const criar = await request(app)
            .post('/tarefas')
            .send({ titulo: "Realizar atividade de ESW", descricao: "Atividade avaliativa da disciplina" });    

            expect(criar.status).toBe(201);
            expect(criar.body.titulo).toBe("Realizar atividade de ESW");
            expect(criar.body.descricao).toBe("Atividade avaliativa da disciplina");
            expect(criar.body.status).toBe("pendente");

        const listar = await request(app).get('/tarefas');
            expect(listar.status).toBe(200);
            expect(listar.body.length).toBe(1); 

        const concluir = await request(app).patch('/tarefas/0/concluir');
            expect(concluir.status).toBe(200);
            expect(concluir.body.status).toBe("concluida"); 

        const reabrir = await request(app).patch('/tarefas/0/reabrir');
            expect(reabrir.status).toBe(200);
            expect(reabrir.body.status).toBe("aberta");

        const remover = await request(app).delete('/tarefas/0');
            expect(remover.status).toBe(200);
            
        const listarDepoisRemover = await request(app).get('/tarefas');
            expect(listarDepoisRemover.status).toBe(200);
            expect(listarDepoisRemover.body.length).toBe(0); 
    });
});
