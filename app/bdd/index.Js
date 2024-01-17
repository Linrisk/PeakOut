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


// Route for creating a user
app.post('/api/createUser', (req,res)=> {

    const username = req.body.userName;
    const firstName= req.body.firstName;
    const lastName= req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    
    db.query("INSERT INTO user (pseudo_user, firstName_user, lastName_user, mail_user, phone_user) VALUES  (?,?,?,?,?)",[username,firstName,lastName,email,phone], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   })

    

