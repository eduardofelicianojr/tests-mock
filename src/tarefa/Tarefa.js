class Tarefa {
    constructor(titulo, descricao, status = 'pendente', responsavel = 'Desconhecido') {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.responsavel = responsavel;
    }
    concluida() {
        this.status = "concluida";
    }
    reabrir() {
        this.status = "aberta";
    }
}

module.exports = Tarefa;