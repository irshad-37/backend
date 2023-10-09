require('dotenv').config()
const express = require('express')
const app = express()
//const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/login', (req, res) => {
    res.send('<h1>User login</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app is listening on ${process.env.PORT}`);
})

