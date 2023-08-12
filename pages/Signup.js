import React, { useRef, useState } from 'react';
import styles from '../styles/Signup.module.css';
import profilepic from '../public/profile.png';
import Image from 'next/image';
import axios from 'axios';
import { useFormik } from 'formik';
import { signUpSchema } from '<hello>/src/schemas';
import Link from 'next/link';
import { useRouter } from 'next/router';


function Signup() {

  const router=useRouter();
  const initialValues={
   firstName:'',
   lastName:'',
   email:'',
   newPassword:'',
   contactNumber:'',
   dob:'',
   city:'',
   state:'',
   streetAddress:'',
   gender:'',
  }

 const {values,errors,handleBlur,handleChange,handleSubmit,touched}= useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
     console.log(values);
      // action.resetForm();

      

    }
    



  });
  console.log(errors);


  const handleSubmitBtn=async()=>{
    if(Object.keys(errors).length===0){
      const formData=new FormData();
          
      formData.append('pp',pp);
      formData.append('userType',"Normal");
     Object.entries(values).forEach(([key,value])=>{
         formData.append(key,value);
     });
     const response = await axios.post("http://localhost:8080/signup",formData,{
      headers:{
        "Content-Type":'multipart/form-data',
      }
     });
     const jsonData=await response.data;
     const status=  response.status;
      if(status===200){
          router.push({
            pathname:'/Home',
            query:jsonData.user_id,
          });
      }



      
    }else{
        console.log("fill all the data");
    }
    
  }







  const[pp,setPp]=useState(profilepic);
  const ppref=useRef();

  const handleProfilePicture=async(e)=>{

    const selectedFile=e.target.files[0];
    const formData=new FormData();
    formData.append('file',selectedFile);
    const response = await axios.post('http://127.0.0.1:8080/upload_temp_pp',formData,{
      headers:{
        'Content-Type':'multipart/form-data',
      }
     });
     const jsonData=await response.data;
     console.log(jsonData.filename);
     setPp(`http://localhost:8080/images/${jsonData.filename}`);
     console.log(pp);
      
  }

  return (
    <>
  
    {/* <div className={`${styles.rocket}`}></div> */}
    <div className={`container-fluid ${styles.body} d-flex flex-column justify-content-center`}>
    <h3 className='text-white text-center'>Laceup Register</h3>
    <div className='row my-4'>
    <div className='col-sm-6 offset-sm-3'>
    <form onSubmit={handleSubmit}>
      <div className='row'>
       
      <div className='col-sm-12 d-flex justify-content-center my-sm-2'>
          <button className={`${styles.square_button} mx-md-4 mx-sm-2 mx-4`} onClick={()=>ppref.current.click()}>
          <Image src={pp} width={120} height={120} alt='profilepicture'></Image>
        </button>
        <input type='file' className='d-none' ref={ppref} onChange={handleProfilePicture} required></input>
         <span className='text-danger small'></span>
        
          </div>

          <div className='col-sm-6'>
            <input type='text' placeholder='FirstName' className='form-control'  name='firstName'  style={{opacity:'0.5'}} value={values.firstName} onChange={handleChange} onBlur={handleBlur}></input>
             <span className='text-danger small'>{errors.firstName && touched.firstName ? errors.firstName : ''}</span>
            </div>
            
          <div className='col-sm-6'>
            <input type='text' placeholder='LastName' className='form-control' name='lastName' style={{opacity:'0.5'}}  value={values.lastName} onChange={handleChange} onBlur={handleBlur}></input>
            <span className='text-danger small'>{errors.lastName && errors.lastName ? errors.lastName:''}</span>
</div>
          <div className='col-sm-6 my-sm-2'>
          <input type='text' placeholder='Email' className='form-control'  name='email'  style={{opacity:'0.5'}} value={values.email} onChange={handleChange} onBlur={handleBlur}></input>
          <span className='text-danger small'>{errors.email && touched.email ? errors.email : ''}</span>
          </div>
          <div className='col-sm-6 my-sm-2'><input type='Password' placeholder='NewPassword' className='form-control' name='newPassword' style={{opacity:'0.5'}} value={values.newPassword} onChange={handleChange} onBlur={handleBlur}></input>
          <span className='text-danger small'>{errors.newPassword && touched.newPassword ? errors.newPassword : ''}</span>
          </div>
          <div className='col-sm-6'> <input type='text' placeholder='ContactNumber' className='form-control' name='contactNumber' style={{opacity:'0.5'}} value={values.contactNumber} onChange={handleChange} onBlur={handleBlur}></input>
          <span className='text-danger small'>{errors.contactNumber && touched.contactNumber ? errors.contactNumber : ""}</span>
          </div>
          <div className='col-sm-6'>
           <div className='d-flex'>
           <button className='btn bg-white' disabled style={{opacity:'0.5'}}>DOB</button>
          <input type='date' className='form-control'   name='dob'  style={{opacity:'0.5'}}value={values.dob} onChange={handleChange} onBlur={handleBlur}></input></div>
          <span className='text-danger small'>{errors.dob && touched.dob ? errors.dob : ""}</span>

    
          </div>
          <div className='col-sm-6 my-sm-2'>
          <input type='text' placeholder='City' className='form-control'  name='city' style={{opacity:'0.5'}} value={values.city} onChange={handleChange} onBlur={handleBlur}></input>
          <span className='text-danger small'>{errors.city && touched.city ? errors.city : ""}</span>
          </div>
          <div className='col-sm-6 my-sm-2'><input type='text' placeholder='State' className='form-control' name='state' style={{opacity:'0.5'}} value={values.state} onChange={handleChange} onBlur={handleBlur}></input>
          <span className='text-danger small'>{errors.state && touched.state ? errors.state : ""}</span>
          </div>
          <div className='col-sm-6'>  <input type='text' placeholder='StreetAddress' className='form-control' name='streetAddress' style={{opacity:'0.5'}} value={values.streetAddress} onChange={handleChange} onBlur={handleBlur}></input>
          <span className='text-danger small'>{errors.streetAddress && touched.streetAddress ? errors.streetAddress : ''}</span>
          </div>
          <div className='col-sm-6'>
            <select className='form-select' style={{opacity:'0.5'}} name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}>
              <option disabled value='select'>Your Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
            <span className='text-danger small'>{errors.gender && touched.gender ? errors.gender : ""}</span>
            
            </div>
           <div className='col-sm-6 d-flex justify-content-sm-center my-3 '><button className='btn btn-success' type='submit' onClick={handleSubmitBtn} >Signup</button></div>
          
        </div>
        </form>
      </div>
      
    </div>
    <div className='row d-flex justify-content-center'>
    <div className='col-sm-6 d-flex justify-content-center align-items-center'>Already have an Account?<button className='btn'><Link passHref legacyBehavior href='/'><a className='text-decoration-none'> Login</a></Link></button></div>
    </div>

    <div className='row d-flex justify-content-center'>
    <div className='col-sm-6 d-flex justify-content-center align-items-center'>Admin Login?<button className='btn'><Link passHref legacyBehavior href='/'><a className='text-decoration-none'> Login</a></Link></button></div>
    </div>

   
    </div>
 

    
    </>


  )
}

export default Signup