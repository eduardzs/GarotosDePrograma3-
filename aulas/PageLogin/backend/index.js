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

import { JsonWebTokenError } from 'jsonwebtoken'
import chaveSecreta from './secretkey.js'

function pageLogin (login, senha){
    
}