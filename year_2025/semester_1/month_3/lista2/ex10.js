//Crie um código que conte a quantidade de palavras em um textos.
let x = " vocè é inrifsof, sfosfo, sofso, osfos, fsof, foso, sfos,, sofsof, fosfo,      "

function palavras(x){
    let y = x.length
    let z = x.trim()//porque o trim não funciona
    let a = z.replaceAll(" ","").length
    let esp = y-a
    let words = esp++
    console.log("A quantidade de palavras é "+words);
}
console.log(palavras(x))