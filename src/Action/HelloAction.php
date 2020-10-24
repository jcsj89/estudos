<?php

namespace App\Action;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Views\Twig;

final class HelloAction
{
    private $twig;

    public function __construct(Twig $twig)
    {
        $this->twig = $twig;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface {
        $viewData = [
            'name' => 'World',
            'notifications' => [
                'message' => 'You are good!'
            ],
        ];
        
        return $this->twig->render($response, 'hello.twig', $viewData);
    }

    public function sessao(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface {
        
        $viewData = [
            'session' => $_SESSION,
            'session2' => var_dump($_SESSION),
            'sessionid' => session_id()

        ];
        
        return $this->twig->render($response, 'hello.twig', $viewData);
    }
}