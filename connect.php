<?php
class Database {
    public $pdo;

    public function __construct(){
        $dsn = 'mysql:host=localhost;dbname=quizizy';
        $username = 'root';
        $password = '';

        $this->pdo = new PDO($dsn, $username, $password);
    }

    public function __destruct(){
        $this->pdo = NULL;
    }
}


