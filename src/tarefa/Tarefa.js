class Tarefa {
    constructor(titulo, descricao, status = "pendente") {
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
    }
    concluida() {
        this.status = "concluida";
    }
    reabrir() {
        this.status = "aberta";
    }
}

module.exports = Tarefa;