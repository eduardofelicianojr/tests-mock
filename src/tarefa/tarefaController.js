const Tarefa = require("./Tarefa");
const { buscarUsuarioPorId } = require('../services/userService');

let tarefas = [];

const tarefaController = {
    listar: (req, res) => {
        res.json(tarefas);
    },

    criar: async (req, res) => {
        const { titulo, descricao, status, userId } = req.body;

        try {
            let responsavel = "Desconhecido";
            if (userId) {
                const usuario = await buscarUsuarioPorId(userId);
                responsavel = usuario.nome;
            }
            const novaTarefa = new Tarefa(titulo, descricao, status, responsavel);
            tarefas.push(novaTarefa);
            res.status(201).json(novaTarefa);
            
        } catch (error) {
            res.status(500).json({ error: "Falha ao criar tarefa com usuário" });
        }
    },

    concluir: (req, res) => {
        const { id } = req.params;
        const tarefa = tarefas[id];
        if (!tarefa) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }
        tarefa.concluida();
        res.json(tarefa);
    },

    reabrir: (req, res) => {
        const { id } = req.params;
        const tarefa = tarefas[id];
        if (!tarefa) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }
        tarefa.reabrir();
        res.json(tarefa);
    },

    remover: (req, res) => {
        const { id } = req.params;
        if (!tarefas[id]) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }
        tarefas.splice(id, 1);
        res.status(200).json({ mensage: "Tarefa removida com sucesso" });
    }
};

module.exports = tarefaController;