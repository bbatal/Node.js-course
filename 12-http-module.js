const http = require('http')

// both parameters are objects
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        // we cn cheat and put the write in the end
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('Welcome to the ABOUT page yoo')
    }
    else {
    res.end(`
        <h1>this page could not be colococated yu gi boy</h1>
        <p>it is ovaaa</p>
        <p>you have been terminated..</p>
        <a href='/'> Link back </a>
    `)
}
})

server.listen(5000)