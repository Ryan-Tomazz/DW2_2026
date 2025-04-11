const x = [1,2,3,4,5]
function comreverse(z){
    let y = z.reverse()
    console.log(y)
}
function semreverse(z){
    let novo = []
    for( let y = z.length-1, i = 0; i<z.length;i++,y-- ){
        novo += x[y]
    } 
    console.log(novo)
}


semreverse(x)