
const fs = require('fs')
const path = require('path')

const ReadStream = fs.createReadStream('../text.txt', 'utf-8')

const WriteStream = fs.createWriteStream('../output.text', 'utf-8')

ReadStream.pipe(WriteStream)

WriteStream.on('finish', ()=> console.log('file has been successfully has been red'))

ReadStream.on('data', (chunk)=> console.log(chunk))