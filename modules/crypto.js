const crypto = require('crypto')

// const hash = crypto.createHash('sha256')

// hash.update('Nomankhial')

// const data = hash.digest('hex')
// console.log(data)

// ? MD5 algo
const md5Hash = crypto.createHash('md5').update('Nomankhial').digest('hex')

// ? SHA-1 algo
const SHA_1 = crypto.createHash('SHA-1').update('Nomankhial').digest('hex')

console.log(SHA_1)
// console.log(md5Hash)
// SHA-512
const sha512 = crypto.createHash('sha512').update('Nomankhial').digest('hex');
console.log('SHA-512:', sha512);
