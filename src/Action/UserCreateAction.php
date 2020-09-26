<?php

namespace App\Action;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use App\Domain\User\Service\UserCreator;

final class UserCreateAction
{
    private $userCreator;

    public function __construct( UserCreator $userCreator )
    {
        $this->userCreator = $userCreator;
    }

    public function __invoke( ServerRequestInterface $request, ResponseInterface $response
    ): ResponseInterface {
        // Collect input from the HTTP request
        $data = (array) $request->getParsedBody();        

        // Invoke the Domain with inputs and retain the result
        $userId = $this->userCreator->createUser($data);

        // Transform the result into the JSON representation
        $result = [
            'user_id' => $userId
        ];

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(201);
    }

    public function teste(ServerRequestInterface $request, ResponseInterface $response
    ): ResponseInterface{        

        $data2 = [  "username" => "jose",
                    "first_name" => "jose",
                    "last_name" => "santana",
                    "email" => "teste" ];     

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($data2));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(201);
    }

    public function buscaNome(ServerRequestInterface $request, ResponseInterface $response
    ): ResponseInterface{    

        $data = (array) $request->getParsedBody(); 

        // Invoke the Domain with inputs and retain the result
        $userId = $this->userCreator->buscaPorId( $data['id'] );

        // Transform the result into the JSON representation
        $result = [
            'user_id' => $userId
        ];

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(201);
    }
}