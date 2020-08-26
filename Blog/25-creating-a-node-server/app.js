const http = require('http')

// RequestListener
// function rqListener(req, res){ }
// http.createServer(rqListener)
const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(3000)


