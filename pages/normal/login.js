 import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
 
 function login() {
  const[userData,setUserData]=useState({
    email:'',
    password:''
  })
  const router=useRouter();
  const handleLoginData=(e)=>{
   const{name,value}=e.target;
   setUserData((prev)=>({
    ...prev,[name]:value,

}));
console.log(userData);
  }
  const handleLogin=async()=>{
    const formData=new FormData();
    Object.entries(userData).forEach(([key,value])=>{
      formData.append(key,value);
  });
  console.log(formData);

    try {
      const response = await axios.post('http://127.0.0.1:8080/userLogin',formData,{
      headers:{
        'Content-Type':'multipart/form-data',
      }
     });
     const jsonData=response.data;
     console.log(localStorage.getItem("userId"))
     router.push({
      pathname:'/Home',
     })
     
       
    } catch (error) {
      console.log("No user Found");
    }
    
    

  }
   return (
     <div className='container-fluid'>
      <div className='col-sm-6 offset-sm-3'>
        <h3 className='text-center'>Laceup Login</h3>
        <div>
          <input className='form-control'placeholder='Email Address' name='email' type='text' onChange={handleLoginData} onPaste={handleLoginData} value={userData.email}></input>
          
        </div>
        <div className='my-2'><input className='form-control' placeholder='Password' type='password' name='password' onChange={handleLoginData} onPaste={handleLoginData} value={userData.password}></input></div>
      
      <div><button className='btn btn-success' onClick={handleLogin}>Login</button></div>
      </div>
     </div>
   )
 }
 
 export default login