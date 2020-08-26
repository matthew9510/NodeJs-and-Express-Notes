const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded())

app.use('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</form>")
})

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/add-product')
})

app.use('/', (req, res, next) => {
    res.send('<h1> Welcome to my express app! </h1> ')
})

app.listen(4000);