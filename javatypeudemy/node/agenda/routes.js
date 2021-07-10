const express = require('express');
const route = express.Router();
const { usersRequired } = require('./src/middlewares/middleware');

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

//rotas da home
route.get('/',homeController.index);

//rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

//rotas de contato
route.get('/contato/index', usersRequired, contatoController.index);
route.post('/contato/register', usersRequired, contatoController.register);

module.exports = route;
