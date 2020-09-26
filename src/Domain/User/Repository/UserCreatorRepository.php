<?php

namespace App\Domain\User\Repository;

use PDO;

class UserCreatorRepository
{   
    private $connection;
    
    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }
    
    public function insertUser(array $user): int
    {
        $row = [
            'username' => $user['username'],
            'first_name' => $user['first_name'],
            'last_name' => $user['last_name'],
            'email' => $user['email'],
        ];

        $sql = "INSERT INTO users SET 
        username = :username, 
        first_name = :first_name, 
        last_name = :last_name, 
        email = :email;";

        $this->connection->prepare($sql)->execute($row);

        return (int)$this->connection->lastInsertId();
    }

    public function buscaPorNome(String $nome){
        $row = [ 'nome' => $nome ];
        $query = "SELECT * FROM users WHERE username = :nome";

        $statement = $this->connection->prepare($query);
        //$statement->bindParam(':nome', $nome, PDO::PARAM_STR); 

        $statement->execute($row);
        
        $pessoaArray = $statement->fetch(PDO::FETCH_ASSOC);
        
        return $pessoaArray; 
    }

    public function buscaPorId(int $id){
        $row = [ 'id' => $id ];
        $query = "SELECT * FROM users WHERE id = :id";

        $statement = $this->connection->prepare($query);
        //$statement->bindParam(':nome', $nome, PDO::PARAM_STR); 

        $statement->execute($row);
        
        $pessoaArray = $statement->fetch(PDO::FETCH_ASSOC);
        
        return $pessoaArray; 
    }
    
} //end    