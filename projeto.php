<?php ?>
<link href="css/projeto.css" rel="stylesheet" type="text/css" />
<form method="post" action="confirmacao.php">
	<h1></h1>
	<h2></h2>
	<div>
		<h3>Qual &eacute; o nome do Projeto?</h3>
		<input type="text" placeholder="" id="nomeP" name="nomeP" />
	</div>
	<div>
		<h3>Qual seu nome/nome da empresa onde trabalha?</h3>
		<input type="text" placeholder="" id="nomeE" name="nomeE" />
	</div>
	<div>
		<h3>Qual &eacute; seu e-mail empresarial ou de contato?</h3>
		<input type="text" placeholder="" id="email" name="email" />
	</div>
	<div>
		<h3>Qual &eacute; seu telefone de contato?</h3>
		<input type="text" placeholder="" id="tel" name="tel" />
	</div>
	<div>
		<h3>Qual &eacute; a melhor maneira, para voc&ecirc;, de fazer contato?</h3>
		<input type="checkbox" value="Telefone" id="ch" name="ch" />Telefone
		<input type="checkbox" value="e-mail" id="ch" name="ch" />E-mail
	</div>
	<div>
		<h3>Que tipo de projeto voc&ecirc; pretende criar?</h3>
		<input type="checkbox" value="Para tablets/smartphones" id="chp" name="chp[]" />Para tablets/smartphones
		<input type="checkbox" value="Para Desktop(Maquina pessoal/empresarial)" id="chp" name="chp[]" />Para Desktop(Maquina pessoal/empresarial)
		<input type="checkbox" value="Para Web" id="chp" name="chp[]" />Para Web
	</div>
	<div>
		<h3>Qual o valor que voc&ecirc; deseja investir?</h3>
		<input type="checkbox" value="menos de R$500,00" id="chi" name="chi[]" />menos de R$500,00
		<input type="checkbox" value="de R$500,00 a R$1.500,00" id="chi" name="chi" />de R$500,00 a R$1.500,00
		<input type="checkbox" value="de R$1.500,00 a R$5.000,00" id="chi" name="chi" />de R$1.500,00 a R$5.000,00
		<input type="checkbox" value="de R$5.000,00 a R$20.000,00" id="chi" name="chi" />de R$5.000,00 a R$20.000,00
		<input type="checkbox" value="mais de R$20.000,00" id="chi" name="chi" />mais de R$20.000,00
	</div>
	<div>
		<h3>Voc&ecirc; precisa do projeto:</h3>
		<select id="tempo" name="tempo">
			<option>Imediatamente</option>
			<option>em um mes</option>
			<option>em um semestre(6 meses)</option>
			<option>em um ano (12 meses)</option>
		</select>
	</div>
	<div>
		<h3>Para voc&ecirc;, o que &eacute; mais importante no projeto?</h3>
		<input type="text" placeholder="" id="importante" name="importante" />
	</div>
	<div>
		<input type="submit" onclick="" value="Enviar Projeto" style="margin: 23px;" />
	</div>
</form>