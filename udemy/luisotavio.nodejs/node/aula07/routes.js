const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//rotas da home
route.get('/',homeController.paginainicial);
route.post('/',homeController.trataPost);

//contact routes
route.get('/contato',contatoController.paginainicial);

module.exports = route;
