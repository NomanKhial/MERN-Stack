
const os = require('os')

// console.log(os.version())


console.log(os.arch()) //! returns the architecture of cpu
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
// console.log(totalMemGB)

console.log(os.type())
console.log(os.release())
console.log(os.version())
console.log(os.networkInterfaces())
console.log(os.EOL)