<?php

namespace App\Domain\User\Service;

use App\Domain\User\Repository\UserCreatorRepository;
use App\Exception\ValidationException;

/**
 * Service.
 */
final class UserCreator
{
    /**
     * @var UserCreatorRepository
     */
    private $repository;

    /**
     * The constructor.
     *
     * @param UserCreatorRepository $repository The repository
     */
    public function __construct( UserCreatorRepository $repository )
    {
        $this->repository = $repository;
    }

    
    public function createUser( array $data ): int
    {        
        //$this->validateNewUser($data);

        // Insert user
        $userId = $this->repository->insertUser($data);

        // Logging here: User created successfully
        //$this->logger->info(sprintf('User created successfully: %s', $userId));

        return $userId;
    }

    public function buscaPorNome(String $nome){        

        $username = $this->repository->buscaPorNome($nome);        

        return $username; 
    }

    public function buscaPorId(int $nome){        

        $username = $this->repository->buscaPorId($nome);        

        return $username; 
    }

    
    private function validateNewUser(array $data): void
    {
        $errors = [];

        // Here you can also use your preferred validation library

        if (empty( $data['username'])) {
            $errors['username'] = 'Input required';
        }

        if (empty( $data['email'])) {
            $errors['email'] = 'Input required';
        } elseif ( filter_var( $data['email'], FILTER_VALIDATE_EMAIL) === false) {
            $errors['email'] = 'Invalid email address';
        }

        if ( $errors ) {
            throw new ValidationException('Please check your input', $errors);
        }
    }
}