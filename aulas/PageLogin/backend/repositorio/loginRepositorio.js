const fullFile = './repositorio/datadb.json'
import fs from 'fs/promises';

async function db() {
  try {
    const data = await fs.readFile(fullFile, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

async function validarLogindb (login = '', senha = ''){
  const data = await db()
  let {usuario} = data.dadosLogin.find((dados)=>dados.login.usuario == login && dados.login.senha == senha)
  return usuario
}

// let resultado = validarLogindb('Eduardo', '43729076')
// resultado.then(result=>console.log(result))

export default validarLogindb
