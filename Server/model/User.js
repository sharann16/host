const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    name:String,
    mailid:String,
    age:Number,
    password:String
})

const User=mongoose.model('student',Userschema)
module.exports=User;