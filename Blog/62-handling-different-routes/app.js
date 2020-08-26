const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log("In first middleware");
    next(); // Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log("In last middleware");
    res.send("<h1>Hello from express!</h1>");
    // should send response now. 
})

app.listen(3000);
