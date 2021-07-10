const { request, response } = require("express");

exports.middlewareGlobal = (request, response, next) => {
    response.locals.errors = request.flash('errors');  
    response.locals.success = request.flash('success');   
    response.locals.user = request.session.user;
    
    next();
}

exports.checkCsrf = (err, request, response, next) => {
    if(err){
        console.log(err);
        return response.render('404');        
    }    
    next();
}

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken = request.csrfToken();    
    next();
}

exports.usersRequired = (request, response, next) => {
    if(!request.session.user){
        request.flash('errors', 'Voce precisa fazer login.');        
        
        request.session.save( () => response.redirect('/') );        
        return;
    }
    next();
};