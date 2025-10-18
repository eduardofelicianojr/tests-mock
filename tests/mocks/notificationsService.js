module.exports = {
  enviarNotificacao: jest.fn().mockResolvedValue({
    sucesso: true,
    mensagem: 'Notificação de Mock enviada com sucesso'
  })
};