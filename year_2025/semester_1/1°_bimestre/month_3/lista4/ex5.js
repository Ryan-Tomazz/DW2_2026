let x = [1, 2, 3, 40]

function semap(x) {
    let novo = []
    for (let i = 0; i < x.length; i++) {
        novo[i] = Number(x[i] ** 2)
    }
    console.log(novo)
}

function comap(x) {
    let novo = x.map((x) => x * x)
    console.log(novo)
}

semap(x)
comap(x)