<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Routing\RouteCollectorProxy;
use Slim\App;

return function (App $app) {
    $app->get('/', \App\Action\HomeAction::class)->setName('home');
    $app->get('/hello', \App\Action\HelloAction::class);
    $app->post('/users', \App\Action\UserCreateAction::class);
    $app->post('/username', \App\Action\UserCreateAction::class .':buscaNome');

    $app->get('/user', \App\Action\UserCreateAction::class .':teste');

    $app->get('/session', \App\Action\HelloAction::class .':sessao');

    ##########################################################
    /* JAVASCRIPT */
    $app->group('/js', function ( RouteCollectorProxy $group ) {
    	$group->get('/cap01', \App\Action\JavaScript\JSAction::class . ':cap01');
        $group->get('/cap02', \App\Action\JavaScript\JSAction::class . ':cap02');
        $group->get('/cap03', \App\Action\JavaScript\JSAction::class . ':cap03');		

	});
};

