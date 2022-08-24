const fullFile = './repositorio/datadb.json'
import fs from 'fs/promises';

const db = async () => {
  try {
    const data = await fs.readFile(fullFile, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

const validarLogindb = async(login = '', senha = '') => {
  const data = await db()
  let { usuario } = data.dadosLogin.find((dados) => dados.login.usuario == login && dados.login.senha == senha)
  return usuario
}

export default validarLogindb
