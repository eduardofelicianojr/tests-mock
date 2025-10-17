const Tarefa = require("../src/tarefa/Tarefa");

describe("Tarefa", () => { 
    it("Deve criar uma tarefa com os status corretos", () => {
        const tarefa = new Tarefa("Estudar", "Estudar para a atividade de ESW!");
        expect(tarefa.titulo).toBe("Estudar");
        expect(tarefa.descricao).toBe("Estudar para a atividade de ESW!");
        expect(tarefa.status).toBe("pendente");
    });

    test("Deve marcar a tarefa como concluida", () => {
        const tarefa = new Tarefa("Estudar", "Estudar para a atividade de ESW!");
        tarefa.concluida();
        expect(tarefa.status).toBe("concluida");
    });
    test("Deve reabrir a tarefa", () => {
        const tarefa = new Tarefa("Estudar", "Estudar para a atividade de ESW!");
        tarefa.concluida();
        tarefa.reabrir();
        expect(tarefa.status).toBe("aberta");
    });
});