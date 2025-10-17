const express = require('express');
const router = express.Router();
const tarefaController = require('../tarefa/tarefaController');

router.get('/tarefas', tarefaController.listar);
router.post('/tarefas', tarefaController.criar);
router.patch('/tarefas/:id/concluir', tarefaController.concluir);
router.patch('/tarefas/:id/reabrir', tarefaController.reabrir);
router.delete('/tarefas/:id', tarefaController.remover);

module.exports = router;