const express=require('express');
const mongoose=require('mongoose');
const cros=require('cors');
// require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cros());

mongoose.connect('mongodb://localhost:27017/signup')
.then(()=>console.log('connected to mongodb'))
.catch((err)=>console.log(err));


const route=require('./routes/auth')
app.use('/api',route);

app.listen(3001,()=>{console.log('server is running on port 3001')});