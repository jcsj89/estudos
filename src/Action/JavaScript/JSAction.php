<?php

namespace App\Action\JavaScript;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Views\Twig;

final class JSAction
{
    private $view;

    public function __construct( Twig $twig )
    {
        $this->view = $twig;
    }

    public function __invoke( ServerRequestInterface $request, ResponseInterface $response
    ): ResponseInterface {           

        return $this->view->render($response, 'javascript/cap01.twig');
    }

    public function cap01( ServerRequestInterface $request, ResponseInterface $response
    ): ResponseInterface {         

        return $this->view->render($response, 'javascript/cap01.twig');
    } 

    public function cap02( ServerRequestInterface $request, ResponseInterface $response
    ): ResponseInterface {              

        return $this->view->render($response, 'javascript/cap02.twig');
    }       

    
}