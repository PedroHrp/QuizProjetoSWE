function check(){

	let questao1 = document.quiz.questao1.value;
	let questao2 = document.quiz.questao2.value;
	let questao3 = document.quiz.questao3.value;
	let questao4 = document.quiz.questao4.value;
	let questao5 = document.quiz.questao5.value;
	let questao6 = document.quiz.questao6.value;
	let questao7 = document.quiz.questao7.value;
	let questao8 = document.quiz.questao8.value;
	let questao9 = document.quiz.questao9.value;
	let questao10 = document.quiz.questao10.value;

	let resultado = 0;

	if(questao1 == "HyperText Markup Language"){
		resultado++;
	}else if(questao1 == ""){
		alert("Questão 1 não foi respondida!");
	}

    if(questao2 == "<html>"){
		resultado++;
	}else if(questao2 == ""){
		alert("Questão 2 não foi respondida!");
		return false;
	}

	if(questao3 == "Painel Lateral"){
		resultado++;
	}else if(questao3 == ""){
		return false;
	}

	if(questao4 == "link"){
		resultado++;
	}else if(questao4 == ""){
		alert("Questão 4 não foi respondida!");
		quiz.questao4.focus();
		return false;
	}

	if(questao5 == "6"){
		resultado++;
	}else if(questao5 == ""){
		alert("Questão 5 não foi respondida!");	
		quiz.questao5.focus();
		return false;
	}

	if(questao6 == "#meuID"){
		resultado++;
	}else if(questao6 == ""){
		alert("Questão 6 não foi respondida!");		
		quiz.questao6.focus();
		return false;
	}

	if(questao7 == "certa"){
		resultado++;
	}else if(questao7 == ""){
		alert("Questão 7 não foi respondida!");
		return false;
	}

	if(questao8 == "certa"){
		resultado++;
	}else if(questao8 == ""){
		alert("Questão 8 não foi respondida!");
		return false;
	}	

	if(questao9 == "foter"){
		resultado++;
	}else if(questao8 == ""){
		alert("Questão 9 não foi respondida!");	
		quiz.questao9.focus();
		return false;
	}

	if(questao10 == "certa"){
		resultado++;
	}else if(questao10 == ""){
		alert("Questão 10 não foi respondida!");
		return false;
	}

	let aux = 0;
	let mensagens = ["WoW Excelente!","Boa mediano!","Melhor tenta novamente!"];


	if(resultado > 8){
		aux = 0;
	} if( resultado < 8 && resultado > 3){
		aux = 1;
	} if(resultado < 3){
		aux = 2;
	}

	document.getElementById("depois_submit").style.visibility ="visible";
	document.getElementById("mensagem_final").innerHTML = mensagens[aux];
	document.getElementById("resultado_final").innerHTML = "Total de acertos: " + resultado;
}

