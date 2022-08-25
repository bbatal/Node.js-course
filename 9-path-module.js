const path = require('path')

// console.log(path.sep);

const filePath = path.join('/content/', '/sub-content/', 'test.txt')
// console.log(filePath);

const base = path.basename(filePath)
// console.log(base);

// returns an absolute path
const abs = path.resolve(__dirname, 'content', 'sub-content', 'test.txt')
console.log(abs);