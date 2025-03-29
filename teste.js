let numero = 16
let ehprimo = true
if(numero >0){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero%divisor === 0 ){
            ehprimo = false;
            break;
        }
    } console.log(ehprimo)
} else { console.log("ele é um numero negativo, não é possivél ser primo")}


