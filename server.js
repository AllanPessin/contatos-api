const express = require('express');
const database = './database';

const server = express();
server.use(express.json());

contatos = [];

server.get('/', async function(request, response) {
    const contatos = await database.read();
    response.json(contatos);
})

server.get('/:id', function(request, response) {
    const id = request.params.id;
    const result = contatos.filter(contato => contato.id == id)
    response.json(result);
})

server.post('/', function(request, response) {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    const result = await database.create(nome, telefone);

    contatos.push(contato);
    response.status(201).send();
})

server.listen(process.env.PORT || 3000, () => console.log("Server is running!"));