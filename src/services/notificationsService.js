const axios = require('axios');

async function enviarNotificacao(dados) {
  // Exemplo de chamada real para API externa
  const response = await axios.post('https://api-notificacoes.com/enviar', dados);
  return response.data;
}

module.exports = {
  enviarNotificacao
};
