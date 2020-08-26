const http = require('http')

// RequestListener
// function rqListener(req, res){ }
// http.createServer(rqListener)
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.write("<h1>hello world!</h1>")
    res.end()
    process.exit(); // kills the request listener
})

server.listen(3000)


