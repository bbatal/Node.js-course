// asynchronously(non-blocking)
const { readFile, writeFile, } = require('fs')

// callback hell
readFile(
    './content/first.txt',
    'utf8',
     (err, result) => {
        if(err) {console.log('err : ' + err); return;}
        const first =  result;
        readFile(
            './content/second.txt', 
            'utf-8', 
            (err, result) => {
                if(err) {console.log('err : ' + err); return;}
                const second = result;
                writeFile('./content/result-async.txt', 
                `Here is the result : ${first}, ${second}`,
                { flag: 'a' },
                (err, result) => {
                    if(err) {console.log('err : ' + err); return;}
                    console.log(result);
                }
                )
            })
     },
    )