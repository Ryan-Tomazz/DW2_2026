let word = "lol"

function dromo(x){
    let y = x.split('').reverse()
    let z = y.toString().replaceAll(",","")
    if(x == z){ 
        console.log("é um palíndromo")
    } else{ 
        console.log("não é um palíndromo")
    }
}

dromo(word)