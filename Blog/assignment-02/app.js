const express = require('express');

const app = express();

app.use('/users', (req, res, next)=> {
    console.log("'/users' middleware");
    res.send('<h1>Hello Users</h1>');
})

// No need to use the '/' route b/c its default when not passed.
// app.use('/', (req, res, next)=> { 
// })
app.use('/', (req, res, next) => {
    console.log("'/' middleware");
    res.send('<h1>Hello From Express!</h1>');
})

app.listen(3000);