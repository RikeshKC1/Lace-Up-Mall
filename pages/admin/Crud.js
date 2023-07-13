import React, { useRef, useState } from 'react';
import styles from '../../styles/Update.module.css';
import Image from 'next/image';
import axios from 'axios';
import noImage from '../../public/no_image.png';
  function Crud(){



   
   const getfile=useRef();
   const [mainImg,setMainImg]=useState(noImage);

  
   const handleFile= async(e)=>{
          const selectedFile=e.target.files[0];
          const formData=new FormData();
          formData.append('file',selectedFile);
      
    const response = await axios.post('http://127.0.0.1:8080/upload_temp_img',formData,{
             headers:{
               'Content-Type':'multipart/form-data',
             }
            });
            const jsonData=await response.data;
            console.log(jsonData.temp_file_name);
            setMainImg(`http://localhost:8080/images/${jsonData.temp_file_name}`);
            console.log(mainImg);

           
   }
   const[add,setAdd]=useState(false);
   const handleAdd=()=>{
     setAdd(true);
   }
   const handleCut=()=>{
      setAdd(false);
   }
    return (
    
    <div className="container-fluid">
        <div className={` ${add?styles.blur:''} row d-flex align-items-center justify-content-around`} style={{height:'100vh',width:'100%'}}>
   
            <div className={`${styles.box} d-flex  flex-column align-items-center justify-content-around rounded`} style={{height:'200px',width:'200px'}}>
            <span className='badge bg-secondary'><b>DashBoard</b></span>
               <button className='btn btn-outline-danger'><span className='bi bi-clipboard2-check'> DashBoard</span></button>
               
            </div>
            <div className={`${styles.box} d-flex align-items-center justify-content-around flex-column rounded`} style={{height:'200px',width:'200px'}}>
               <span className='badge bg-secondary'><b>Add new Shoes</b></span>
               <button className='btn btn-outline-danger' onClick={handleAdd}><span className='bi bi-bag-plus'> Add Shoes</span></button>
            </div>
           
            <div className={`${styles.box} d-flex align-items-center justify-content-around flex-column rounded`} style={{height:'200px',width:'200px'}}>
               <span className='badge bg-secondary'>Update Shoes</span>
               <button className='btn btn-outline-danger'><span className='"bi bi-wrench-adjustable-circle'> Update Shoes</span></button>
            </div>
            <div className={`${styles.box} d-flex align-items-center justify-content-around flex-column rounded`} style={{height:'200px',width:'200px'}}>
               <span className='badge bg-secondary'>Remove Shoes</span>
               <button className='btn btn-outline-danger'><span className='bi bi-trash'> Remove Shoes</span></button>
            </div>
        </div>



        {
         add===true? <div className={`${styles.model} row mt-5 d-flex align-items-center justify-content-center`}>
         <div className={`${styles.innerModel} `}>
            <button className={`btn btn-danger ${styles.xbtn}`} onClick={handleCut}><span className='bi bi-bi bi-x'></span></button>
            <h5 className='text-center text-dark my-4'>Add New Shoes</h5>
            <div className='row d-flex justify-content-center'>
               <div className='col-sm-6'>
                  <input type='text' className='form-control my-2' placeholder='Shoes FullName' name='name'></input>

                  <select className='form-select my-2' value=''>
                     <option selected disabled value=''>Select Shoes Brand</option>
                     <option selected value=''>Adidas</option>
                     <option selected value=''>Jordan</option>
                     <option selected value=''>Nike</option>
                  </select>
                  <span className='text-black-50'>Amount of shoes</span>
                  <div className='row d-flex justify-content-lg-between'>
                     <input className='form-control' placeholder='S' style={{width:'70px'}}></input>
                     <input className='form-control' placeholder='M' style={{width:'70px'}}></input>
                     <input className='form-control' placeholder='L' style={{width:'70px'}}></input>
                     <input className='form-control' placeholder='XL' style={{width:'70px'}}></input>
                     <input className='form-control' placeholder='XXL' style={{width:'70px'}}></input>
                  </div>
                  
               <br></br>
                <span className='text-black-50'>Select Main Picture</span>
                <br></br>
                 <button className='btn btn-dark' onClick={()=>getfile.current.click()}>
                 <span className='bi bi-card-image'></span>

                 </button>
                 <Image src={mainImg} className='mx-2' alt='Main picture' width={120} height={100}></Image>
                 <input type='file' className='d-none' ref={getfile} onChange={handleFile}></input>
                 <br></br>
               
               </div>
               <div className='col-sm-6'>
               <textarea className='form-control' placeholder='Shoes Description' name='des'></textarea>
               <input className='form-control my-2' type='text' placeholder='Shoes Price'></input>
               <input className='form-control' placeholder='Shoes Color'></input>
               <br></br>
               <span className='text-black-50 my-3'>Select Extra Pictures</span>
               <br></br>
               <div className=''> <button className='btn btn-dark'><span className='bi bi-card-image'></span></button>

                  
                   
                              </div>
               </div>
            </div>
          </div>
      </div> : ''
      }
       
    </div>
  )
}

export default Crud