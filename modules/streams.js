
const fs = require('fs')
const path = require('path')

const ReadStream = fs.createReadStream('../text.txt', {
    encoding: 'utf-8',
    highWaterMark: 4
})

const WriteStream = fs.createWriteStream('../output.text', {
    encoding:"utf-8",
    highWaterMark: 4
} )

// fs.mkdir('./NomanKhial', ()=>console.log('directory created'))

// fs.rmdir('./NomanKhial' ,(err)=> console.log('folder removed'))

// fs.mkdirSync('tools/calculators')
// fs.rmdirSync('tools/calculators')
// fs.rmdirSync('tools')

// fs.mkdirSync('mobiles')

ReadStream.pipe(WriteStream)

WriteStream.on('finish', (chucnk)=> console.log('file has been successfully has been red', chucnk))

ReadStream.on('data', (chunk)=> console.log(chunk))