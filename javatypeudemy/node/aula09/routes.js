const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//rotas da home
route.get('/',homeController.paginainicial);
route.post('/',homeController.trataPost);

//contact routes
route.get('/contato',contatoController.paginainicial);

module.exports = route;
