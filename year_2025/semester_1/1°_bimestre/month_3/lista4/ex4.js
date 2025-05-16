let v1 = [10,20,30]
let v2 = structuredClone(v1)

v2[0] = 5
v2.push(40)

console.log(v1)
console.log(v2)