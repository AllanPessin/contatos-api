const express = require('express');
const database = './database';

const server = express();
server.use(express.json());

contatos = [];

server.get('/', async function(request, response) {
    const contatos = await database.read();
    response.json(contatos);
})

server.get('/:id', async function(request, response) {
    const id = request.params.id;
    const result = contatos.filter(contato => contato.id == id)
    response.json(result);
})

server.post('/', async function(request, response) {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    const result = await database.create(nome, telefone);

    contatos.push(contato);
    response.status(201).send();
})

server.put('/:id', async function(request, response) {
    const id = request.params.id;
    const nome = request.params.nome;
    const telefone = request.params.telefone;

    const result = await database.update(id, nome, telefone);
    response.status(200).send();
})

server.delete('/:id', async function(request, response ){
    const id = request.params.id;

    const result = await database.delete(id);
    response.status(200).send();
})

server.listen(process.env.PORT || 3000, () => console.log("Server is running!"));