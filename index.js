const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;

const app = express()

app.use(express.jsom())
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/openapi', require('./routes/openaiRoutes'))

app.listen(port,()=> [
    console.log(`Server listening on port: ${port}`)
])