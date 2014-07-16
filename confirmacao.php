<?php
$ch = "";
$chp = "";
$chi = "";
extract($_POST);
$chp = "";
if(isset($_POST['chp'])){
	for($i = 0; $i < count($_POST['chp']); $i++){
		$chp .= " ".$_POST['chp'][$i];
	}
	
}

$nomeArquivo = date('y-m-j-h-i-s').".txt";

$fp = fopen($nomeArquivo, "w");
$escrever = fwrite($fp, "Pedido de ".date('d/m/Y')."\r\nNome da Projeto: ".$nomeP."\r\nNome da Empresa: ".$nomeE."\r\nE-mail: ".$email."\r\nTelefone: ".$tel."\r\nMelhor Contato: ".$ch."\r\nTipo: ".$chp."\r\nInvestimento: ".$chi."\r\nTempo para entrega: ".$tempo."\r\nO que e Importante: ".$importante);
fclose($fp);

echo '<script type="text/javascript">alert("Seu pedido foi armazenado, entraremos em contato por '.$ch.'.");</script>';

header("Location: index.html");


?>