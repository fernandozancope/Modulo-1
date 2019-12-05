const express = require('express');

const server = express();

// localhost:3000/teste

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "neme": "Fernando" }

server.get('/teste', (req, res) => {
    const nome = req.query.nome;

    return res.json({ message: `Olá ${nome}` });
})

server.listen(3000);