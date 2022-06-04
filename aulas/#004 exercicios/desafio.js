// Desafio
// 15 * Math.sin(120 * (Math.PI * X))

const asciichart = require('asciichart')

let x = (() => {
    let x = []
    for (let index = 0; index <= 100; index++) {
        x[index] = index;
    }
    return x;
})()
let y = []
for (let index = 0; index < x.length; index++) {
    resultado = 15 * Math.sin(5 * (Math.PI * x[index] + 120));
    y[index] = resultado;
}

let grafico = asciichart.plot(y, {height: 6})
console.log(grafico)