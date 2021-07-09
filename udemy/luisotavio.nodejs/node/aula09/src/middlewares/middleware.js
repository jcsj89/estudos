const { request, response } = require("express");

exports.middlewareGlobal = (request, response, next) => {
    response.locals.umaVarLocal = 'var local requisicao';
    console.log('middleware global');
    next();
}

exports.checkCsrf = (err, request, response, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return response.render('404');
    }    
}

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken = request.csrfToken();    
    next();
}