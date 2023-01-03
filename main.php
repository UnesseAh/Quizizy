<?php

include_once "connect.php";

$db = new Database();

$statement = $db->pdo->prepare("SELECT * FROM questions");
$statement->execute();
$questions = $statement->fetchAll(PDO::FETCH_ASSOC);

$json = json_encode($questions, JSON_PRETTY_PRINT);

echo $json;
// file_put_contents('questions.json', $json); 