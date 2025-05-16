let x = 6
let z = 8
let y = 10

function tri(x, y, z) {
    let a = 1
    if (x > z & x > y) {
        a = x
    } else if (z > x & z > y) {
        a = z
        z = x
        x = a
    } else {
        a = y
        y = x
        x = a
    }

    if (x >= y + z) {
        console.log("não forma triângulo")
    } else {
        if (x ** 2 > y ** 2 + z ** 2) {
            console.log("triangulo obtusangulo")
        } else {
            if (x ** 2 < y ** 2 + z ** 2) {
                console.log("triangulo obtusangulo")
            }
            if (z == y && y == x) {
                console.log("triangulo equilatero")
            } else if (z == y || x == y || x == z) {
                console.log("triangulo isosceles")
            } else if (x ** 2 == y ** 2 + z ** 2) {
                console.log("triângulo retangulo")
            }
        }
    }
}
tri(x, y, z)