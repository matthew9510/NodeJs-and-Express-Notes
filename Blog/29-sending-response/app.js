const http = require('http')

// RequestListener
// function rqListener(req, res){ }
// http.createServer(rqListener)
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my NodeJs server</h1></body>')
    res.write('</html>');
    res.end();

})

server.listen(3000)


