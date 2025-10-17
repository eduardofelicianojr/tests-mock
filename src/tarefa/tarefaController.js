const Tarefa = require("../src/tarefa/Tarefa");

let tarefas = []; 

const tarefaController = {
    listar: (req, res) => {
        res.json(tarefas);
    },

    criar: (req, res) => {  
        const { titulo, descricao } = req.body;
        const novaTarefa = new Tarefa(titulo, descricao);
        tarefas.push(novaTarefa);
        res.status(201).json(novaTarefa);
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
        res.status(204).send();
    }
};

module.exports = tarefaController;