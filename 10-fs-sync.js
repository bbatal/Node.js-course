// you can do synchronously(blocking), asynchronously(non-blocking)
const { readFileSync, writeFileSync, read, write } = require('fs')

// read from file system
// we need to provide path to that specific file and what the encoding is (utf-8 in this case)
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);
writeFileSync(
    './content/third.tx', 
    `Here is the result :  ${first}, ${second}`, 
    {flag: 'a'}
)