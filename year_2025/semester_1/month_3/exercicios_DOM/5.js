let nome = document.getElementById("nome-completo")
let botao = document.getElementById("btn-boas-vindas")

function boasVindas(nome){
    botao.onclick = function(){ alert('Seja bem vindo ' + nome.value);}
}

boasVindas(nome)