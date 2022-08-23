// var jwt = require('jsonwebtoken');
// var chaveSecreta = 'sosdfgyuisdfgyhu'
// var informacao = {
//     nome: 'Eduardo',
//     idade: 18,
//     cidade: 'Veredinha - MG'
// }

// // var token = jwt.sign(informacao, chaveSecreta);
// // console.log(token)

// var resultadoToken = jwt.verify ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiRWR1YXJkbyIsImlkYWRlIjoxOCwiY2lkYWRlIjoiVmVyZWRpbmhhIiwiaWF0IjoxNjYwNjkxODg1fQ.VucPgamqib3OeRtibPSXZeII01vSlia7N5t15rKclPs', chaveSecreta)

// console.log(resultadoToken)

import jwt from 'jsonwebtoken'
import chaveSecreta from './secretkey.js'
import validarLogindb from './repositorio/loginRepositorio.js'

async function pageLogin(login, senha) {
    try {
        let informacao = await validarLogindb(login, senha)
        let token = jwt.sign(informacao, chaveSecreta);
        return token;
    } catch (error) {
        return "Deu erro"
    }
}

pageLogin("Eduardo", "43729076").then((data) => console.log(data))