let x = [1,2,3,4,5]

function comreverse(x){
    let y = structuredClone(x)
    console.log(y.reverse())
}
function semreverse(x){
    let novo = []
    for( let y = x.length-1, i = 0; i<x.length;i++,y-- ){
        novo[i] = Number(x[y])
    } 
    console.log(novo)
}

console.log(x)
semreverse(x)
comreverse(x)