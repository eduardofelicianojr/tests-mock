describe('Tarefas com usuário mockado', () => {
  beforeEach(() => {
    jest.resetModules(); // 🔄 limpa o cache de require
  });

  test('Cria tarefa com usuário vindo do mock', async () => {
    jest.mock('../../src/services/userService', () => ({
      buscarUsuarioPorId: jest.fn().mockResolvedValue({ nome: 'Usuário Mockado' })
    }));

    const request = require('supertest');
    const app = require('../../src/app'); // só importa depois do mock

    const resposta = await request(app)
      .post('/tarefas')
      .send({
        titulo: 'Testar mock',
        descricao: 'Mock de usuário',
        userId: 1
      });

    expect(resposta.status).toBe(201);
    expect(resposta.body.responsavel).toBe('Usuário Mockado');
  });
});
