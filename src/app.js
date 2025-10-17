const express = require('express');
const app = express();
const tarefaController = require('../routes/tarefaRoutes');

app.use(express.json());
app.use('/', tarefaRoutes);
app.get('/', (req, res) => {
    res.send( "API de gestão de Tarefas funcionando!");
});

module.exports = app;
