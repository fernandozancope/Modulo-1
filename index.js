const express = require('express');

const server = express();

// localhost:3000/teste

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "neme": "Fernando" }

const users = ['Fernando', 'Bruna', 'Prin'];

server.get('/users/:index', (req, res) => {
    const { index } = req.params;

    return res.json(users[index]);
})

server.listen(3000);