let salario = 2000.00

function reajuste(x){
    let ganho = 1
    let percentual = 1
    if(x>0 & x<=400.00){
        ganho = x*0.15
        percentual = "15%"
    } else if(x>=400.01 & x<=800.00){
        ganho = x*0.12
        percentual = "12%"
    } else if(x>=800.01 && x<=1200.00){
        ganho = (x*0.1) - 0.001
        percentual = "10%"
    } else if(x>= 1200.01 && x<=2000.01){
        ganho = x*0.07
        percentual = "7%"
    } else {
        ganho = x*0.04
        percentual = "4%"
    }

    let nsalario = ganho + salario 
    console.log("novo salário: "+nsalario)
    console.log("reajuste: "+ganho)
    console.log("percentual aplicado: "+percentual)
}

reajuste(salario)