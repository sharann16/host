const express=require ('express');
const user=require('../model/User');

const router=express.Router();

router.post("/signup",(req,res)=>{
    const {name,mailid,age,password}=req.body;
    
    user.findOne({mailid})
    .then((result)=>{
        if(result){
            res.json({message:"user already exist"})
        }
        const newuser=new user({
            name,
            mailid,
            age,
            password
        })

         newuser.save()
    })
        .then(()=>{
            res.json({message:"user registered"})
    }).catch((err=>{
        console.log(err)
    }))
})
module.exports=router;

