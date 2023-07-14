import React, { useRef, useState } from 'react';
import styles from '../styles/Signup.module.css';
import profilepic from '../public/profile.png';
import Image from 'next/image';
import axios from 'axios';


function Signup() {

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
      <div className='row'>
      <div className='col-sm-12 d-flex justify-content-center my-sm-2'>
          <button className={`${styles.square_button} mx-md-4 mx-sm-2 mx-4`} onClick={()=>ppref.current.click()}>
          <Image src={pp} width={120} height={120} alt='profilepicture'></Image>
        </button>
         <input type='file' className='d-none' ref={ppref} onChange={handleProfilePicture}></input>
         <span className=''></span>
        
          </div>

          <div className='col-sm-6'>
            <input type='text' placeholder='FirstName' className='form-control'     style={{opacity:'0.5'}}></input>
             <span className='text-danger small'></span>
            </div>
            
          <div className='col-sm-6'>
            <input type='text' placeholder='LastName' className='form-control'          style={{opacity:'0.5'}}></input>
            <span className='text-danger small'></span>
</div>
          <div className='col-sm-6 my-sm-2'>
          <input type='text' placeholder='Email' className='form-control'    style={{opacity:'0.5'}}></input>
          <span className='text-danger small'></span>
          </div>
          <div className='col-sm-6 my-sm-2'><input type='Password' placeholder='NewPassword' className='form-control' style={{opacity:'0.5'}}></input>
          <span className='text-danger small'></span>
          </div>
          <div className='col-sm-6'> <input type='text' placeholder='ContactNumber' className='form-control' style={{opacity:'0.5'}}></input>
          <span className='text-danger small'></span>
          </div>
          <div className='col-sm-6'>
          <input type='date' className='form-control' placeholder='DOB'               style={{opacity:'0.5'}}></input>
          <span className='text-danger small'></span>
          </div>
          <div className='col-sm-6 my-sm-2'>
          <input type='text' placeholder='City' className='form-control'     style={{opacity:'0.5'}}></input>
          <span className='text-danger small'></span>
          </div>
          <div className='col-sm-6 my-sm-2'><input type='text' placeholder='State' className='form-control'        style={{opacity:'0.5'}}></input>
          <span className='text-danger small'></span>
          </div>
          <div className='col-sm-6'>  <input type='text' placeholder='StreetAddress' className='form-control' style={{opacity:'0.5'}}></input>
          <span className='text-danger small'></span>
          </div>
          <div className='col-sm-6'>
            <select className='form-select' style={{opacity:'0.5'}}>
              <option selected disabled value=''>Your Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
            <span className='text-danger small'></span>
            
            </div>
           <div className='col-sm-6 d-flex justify-content-sm-center my-3'> <button className='btn btn-success' style={{width:'80%'}}> <span className='bi bi-arrow-right'></span> Signup</button></div>
      
        </div>
      </div>
      
    </div>
   
    </div>

    
    </>


  )
}

export default Signup