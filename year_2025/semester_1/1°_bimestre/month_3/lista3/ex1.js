let x = 0
let y = 0

function quadrante (x,y){
if(x>0 & y>0){
    console.log("Q1")
}else if(y>0 & x<0){
    console.log("Q2")
} else if(y<0 & x<0){
    console.log("Q3")
} else if(y<0 & x>0){
    console.log("Q4")
} else { console.log("origem")}
}

quadrante(x,y)