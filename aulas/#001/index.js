// console.log('Hello, World')

let nome = document.getElementById('root');
nome.innerHTML = '<p>Hello, World</p>'


//Variáveis
let num1 = 18
let texto = 'Eduardo'
// alert(18 + 'Eduardo')

let valor1 = document.getElementById('valores').value
let valor2 = document.getElementById('valores2').value
document.getElementById('total').innerHTML = "<h1>" + 'A Soma de ' + valor1 + ' e ' + valor2 + ' é igual a ' + (parseFloat(valor1) + parseFloat(valor2)) + "</h1>"
