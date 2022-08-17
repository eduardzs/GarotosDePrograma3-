const fullFile = './datadb.json'
import fs from 'fs/promises';

async function db() {
  try {
    const data = await fs.readFile(fullFile, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

async function validarLogindb (usuario = '', senha = ''){
  const data = await db()
  return data.find(data=>data.usuario == usuario && data.senha == senha)
  
}

// let resultado = validarLogindb('Eduardo', '43729076')
// resultado.then(result=>console.log(result))