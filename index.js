const express = require('express')
require('dotenv').config()


const app = express()


app.get('/', (req,res) => {
    res.json({success: "Welcome to Homepage"})
})


app.get('/product', (req,res) => {
    res.json({success: "this is product"})
})


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})