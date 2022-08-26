// you can do synchronously(blocking), asynchronously(non-blocking)
const { readFileSync, writeFileSync, read, write } = require('fs')
console.log('start');
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
console.log('done with this task');
console.log('starting the next one');