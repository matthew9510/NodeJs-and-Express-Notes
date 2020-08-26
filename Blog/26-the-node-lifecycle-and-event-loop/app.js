const http = require('http')

// RequestListener
// function rqListener(req, res){ }
// http.createServer(rqListener)
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit(); // kills the request listener
})

server.listen(3000)


