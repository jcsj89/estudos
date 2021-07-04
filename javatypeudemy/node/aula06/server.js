const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('hello world <h1>Jose</h1>');
});

app.listen(3000,() => {
    console.log('Acesso http://localhost:3000');
    console.log('Servidor executando ...');

});