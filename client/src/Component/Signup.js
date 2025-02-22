import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Signup=()=>{
    const [formdata,setFormdata]=useState({
        name:"",
        mailid:"",
        age:"",
        password:""
    })
    const handlechange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
             e.preventDefault();
             axios.post("http://localhost:3001/api/signup",formdata)
                .then((res)=>{
                    alert(res.data.message)
                })
                .catch((err)=>{
                    console.log(err)
                })
    }




    return(
        <>
        <div>
            <h1>SIGNUP</h1>
            <form onSubmit={handleSubmit}>
                <input type ="text" name="name" placeholder="name" onChange={handlechange}/>
                <input type ="text" name="mailid" placeholder="mailid" onChange={handlechange}/>    
                <input type ="text" name="age" placeholder="age" onChange={handlechange}/>
                <input type ="password" name="password" placeholder="password" onChange={handlechange}/>
                <button type="submit">submit</button>
             </form>   
        </div>
        </>
    )

}
export default Signup;