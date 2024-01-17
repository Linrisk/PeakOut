const express = require('express');
const db = require('./db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})