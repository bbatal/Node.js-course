const http = require('http');
const {readFileSync, realpath} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeJs = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {

    // console.log(req.url);
    const url = req.url
    // home page
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        // you can pass html in here as well
        res.end()
    }
    // about page
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write("<h1>about page</h1>")
        // you can pass html in here as well
        res.end()
    }

    // styles
    else if(url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        // you can pass html in here as well
        res.end()
    }

    // image/logo
    else if(url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeLogo)
        // you can pass html in here as well
        res.end()
    }

    // styles
    else if(url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeJs)
        // you can pass html in here as well
        res.end()
    }

    // 404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write("resource not found")
        // you can pass html in here as well
        res.end()
    }
    
})

server.listen(5000)