import jwt from 'jsonwebtoken'
import chaveSecreta from './secretkey.js'
import validarLogindb from './repositorio/loginRepositorio.js'
import express, { request, response } from 'express'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const pageLogin = async (login, senha) => {
    try {
        let informacao = await validarLogindb(login, senha)
        let token = jwt.sign(informacao, chaveSecreta);
        return token;
    } catch (error) {
        return "Login Invalido :("
    }
}

const validarToken = async (token) => {
    try {
        return jwt.verify(token, chaveSecreta)
    } catch (error) {
        return "Token Invalido :("
    }
}

app.get('/', async (request, response) => {
    response.send('Hello World')
})
app.post('/fazerLogin', async (request, response) => {
    console.log(request.body)
    let token = await pageLogin(request.body.login, request.body.senha)
    response.json({ token })
})
app.post('/validarToken', async(request, response) => {
    console.log(request.body)
    let validartk = await validarToken(request.body.token)
    response.json({validartk})
})
app.listen(3300, () => { console.log("PORT: 3300") })
