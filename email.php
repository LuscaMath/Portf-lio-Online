<?php

$destinatario = "lucas.peres@outlook.com";

$nome = $_REQUEST['nome'];
$email = $_REQUEST['email'];
$mensagem = $_REQUEST['mensagem'];

$body = "===================================" . "\n";
$body = $body . "FALE COMIGO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Mensagem: " . $mensagem . "\n\n";
$body = $body . "===================================" . "\n";

mail($destinatario, $assunto , $body, "From: $email\r\n");

echo '<script>' + 'alert("Email Enviado com Sucesso")' + '</script>'


?>