
//esto solo para modulos nativos que no tiene promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)


import { readFile } from 'node:fs/promises' 

console.log('Leyendo el primer archivo...')
const text = await readFile('./archivo.txt','utf-8')
console.log('primer texto: ',text)


console.log('Leyendo el segundo archivo...')
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log(text2)


