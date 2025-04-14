let x = ["onitorrinco", "elefante", "pessego", "sorte", "Deus", "helicoptero"]

function ordena(x) {
    x.sort((a, b) => a.length - b.length);
    console.log(x);
}

ordena(x)