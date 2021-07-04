exports.paginainicial = (request,response) => {
    response.render('index');
};

exports.trataPost = (request,response) => {
    response.send('ei sou nova rota de post Jose')
};
