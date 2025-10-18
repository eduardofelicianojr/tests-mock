jest.mock('../../src/services/userService', () => ({
  buscarUsuarioPorId: jest.fn().mockResolvedValue({
    id: 1,
    nome: 'Usuário Mockado',
    email: 'usuario@teste.com'
  })
}));
