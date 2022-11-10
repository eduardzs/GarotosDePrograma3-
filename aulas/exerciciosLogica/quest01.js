console.log("=============================")
console.log("======== EXERCÍCIO 1 ========")
console.log("=============================")

let dobrar = [2, 4, 8, 16, 32, 64].map((number)=>{
    return number * 2;
})

console.log(dobrar)

console.log("=============================")
console.log("======== EXERCÍCIO 2 ========")
console.log("=============================")

let dobrar2 = [1, 3, 5, 7].map((number2 => {
    return number2 + 2;
}))

console.log(dobrar2)

console.log("=============================")
console.log("======== EXERCÍCIO 3 ========")
console.log("=============================")

let dobrar3 = [0, 1, 4, 9, 16, 25, 36]
for (let index = 0; index < dobrar3.length; index++) {
    const element = dobrar3[index];
    if(element==0){
        console.log(`Próximo Numero é 1`)
    }else{
        let resultado = (dobrar3[index] - dobrar3[index-1]) + 2
        let resultadoFinal = element + resultado
        console.log(resultadoFinal)
    }
}

console.log("=============================")
console.log("======== EXERCÍCIO 4 ========")
console.log("=============================")

let dobrar4 = [4, 16, 36, 64]
for (let index = 0; index < dobrar4.length; index++){
    const element = dobrar4[index]
    if(element == 4){
        console.log(`${4}\n${16}`)
    }else{
        let resultado = (dobrar4[index] - dobrar4[index - 1]) + 8
        let resultadoFinal = element + resultado
        console.log(resultadoFinal)
    }
}



