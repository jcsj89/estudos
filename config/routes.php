<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\App;

return function (App $app) {
    $app->get('/', \App\Action\HomeAction::class)->setName('home');
    $app->get('/hello', \App\Action\HelloAction::class);
    $app->post('/users', \App\Action\UserCreateAction::class);
    $app->post('/username', '\App\Action\UserCreateAction:buscaNome');

    $app->get('/user', '\App\Action\UserCreateAction:teste');
};
