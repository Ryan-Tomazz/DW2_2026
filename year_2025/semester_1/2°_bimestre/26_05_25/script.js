function buscarCep(){
    const cep = document.getElementById("cep").value;
    const url = `https://brasilapi.com.br/api/isbn/v1/${cep}`

     if (!(cep.length === 10 || cep.length === 13)) {
        alert("ISBN inválido. O código deve conter exatamente 10 ou 13 dígitos numéricos.");
        return;
    }

    fetch(url)
        .then((Response)=>
        {
            return Response.json();
        })
        .then((data)=>{
            document.getElementById("logradouro").value = data.isbn
            document.getElementById("bairro").value = data.title
            document.getElementById("cidade").value = data.authors
            document.getElementById("estado").value = data.publisher
            document.getElementById("numero").value = data.subjects
        })
        .catch((error)=>{
            alert("O código ISBN deve possuir somente números.")
        })
}