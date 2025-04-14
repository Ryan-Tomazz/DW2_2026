let x = [1,2,3,-5,6,-4,7,8,9,10]

function menor(){
    let y = structuredClone(x).sort()
    for (let i = 0;i<x.length; i++){
        if(y[0]==x[i]){
            console.log("Menor valor: " + x[i])
            console.log("Posição: " + i)
        }
    }
}

menor(x)