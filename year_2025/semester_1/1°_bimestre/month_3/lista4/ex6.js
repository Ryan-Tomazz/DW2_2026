let x = [1, 2, 3, 40]

function semfilter(x) {
    let novo = []
    for (let i = 0; i < x.length; i++) {
        if(Number(x[i]) %2 == 0){
            novo.push(Number(x[i]));
        } 
    }
    console.log(novo)
}

function comfilter(x) {
    let novo = x.filter((x) => x % 2 == 0)
    console.log(novo)
}

semfilter(x)
comfilter(x)

