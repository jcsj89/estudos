const HomeModel = require('../models/HomeModel');

/*
HomeModel.create({
    titulo: 'um titulo',
    descricao: 'para testes'
}).then(dados => console.log(dados)).catch(e=>console.log(e));
*/
exports.paginainicial = (request,response) => {
    response.render('index');
};

exports.trataPost = (request,response) => {
    response.send('ei sou nova rota de post Jose')
};
