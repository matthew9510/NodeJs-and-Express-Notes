const http = require('http');

const express = require('express')

const app = express();

app.use((res, req, next) => {
    console.log("In first middleware");
    next(); // Allows the request to continue to the next middleware in line
})


app.use((res, req, next) => {
    console.log("In last middleware");
    // should send response now. 
})


const server = http.createServer(app);

server.listen(3000);
