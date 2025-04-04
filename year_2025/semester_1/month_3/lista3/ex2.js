let x = 1
let z = 5
let y = 3

function tri(x, y, z) {
    let a = 1
    if (x >= z) {
        if (x >= y) {
            a = x
        }
    } else {
        if (z >= y) {
            a = z
        } else { a = y }
    }
    x = a

    if (x >= y + z) {
        console.log("não forma triângulo")
    } else {
        if (z == y == x) {
            console.log("triangulo equilatero")
        } else if (z == y || x == y || x == z) {
            console.log(x,y,z)
            console.log("triangulo isosceles")
        } else if (x ** 2 == y ** 2 + z ** 2) {
            console.log("triângulo retangulo")
        } else if (x ** 2 > y ** 2 + z ** 2) {
            console.log("triangulo obtusangulo")
        } else { console.log("triangulo acutangulo") }


    }

}
tri(x, y, z)