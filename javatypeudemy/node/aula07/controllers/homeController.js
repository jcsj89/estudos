exports.paginainicial = (request,response) => {
    response.send(`
        <form action="/" method="post">
            nome do cliente: <input type="text" name="nome"></input>
            outro campo: <input type="text" name="outro"></input>
            <button>Post</button>
        </form>`
    );
};

exports.trataPost = (request,response) => {
    response.send('ei sou nova rota de post Jose')
};
