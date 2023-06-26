import React, { useRef, useState } from 'react'
import styles from '../styles/Update.module.css';
import Image from 'next/image';
import chart from '../public/chart.png';

function Update() {
   const getfile=useRef();
   const handleFile=(e)=>{
          const selectedFile=e.target.files[0];
          console.log(selectedFile);
          console.log(selectedFile.name);
   }
   const[add,setAdd]=useState(false);
   const handleAdd=()=>{
     setAdd(true);
   }
   const handleCut=()=>{
      setAdd(false);
   }
  return (

    <div className={`${styles.background}  container-fluid`}>

      {
         add===true? <div className={`${styles.model} row mt-5 d-flex align-items-center justify-content-center`}>
         <div className={`${styles.innerModel} `}>
            <button className={`btn btn-danger ${styles.xbtn}`} onClick={handleCut}><span className='bi bi-bi bi-x'></span></button>
            <h4 className='text-center text-secondary'>Add New Shoes</h4>
            <div className='row d-flex justify-content-center'>
               <div className='col-sm-6'>
                  <input type='text' className='form-control my-2' placeholder='Shoes FullName' name='name'></input>
                  <textarea className='form-control' placeholder='Shoes Description' name='des'></textarea>
                  <select className='form-select my-2' value=''>
                     <option selected disabled value=''>Select Shoes Brand</option>
                     <option selected value=''>Adidas</option>
                     <option selected value=''>Jordan</option>
                     <option selected value=''>Nike</option>
                  </select>
                  <input className='form-control' type='text' placeholder='Shoes Price'></input>
                <span className='text-black-50 my-2'>Select Main Picture</span>
                <br></br>
                 <button className='btn btn-secondary' onClick={()=>getfile.current.click()}>
                 <span className='bi bi-card-image '></span>
                 </button>
                 <input type='file' className='d-none' ref={getfile} onChange={handleFile}></input>
                 <br></br>
                 <div className='my-4 d-flex justify-content-center align-items-center' style={{width:'100%'}} ><button className={`${styles.addpic} btn btn-primary`}>Add</button></div>
               </div>
            </div>
          </div>
      </div> : ''
      }

      



<div className={`row  d-flex justify-content-around`}>
    <div className={`${styles.box} my-4`} style={{height:'200px',width:'250px'}}>
     <div className='d-flex justify-content-between'>      <span className='bi bi-pie-chart-fill text-primary fs-4'></span>
     <Image src={chart} height={60} width={60}></Image>
     </div>
     <div className='row d-flex flex-row'> <p className='text-black-50 d-block'>Total Sales</p> 
     <p className='text-success d-block'> 12.24%</p> 
     </div>
     <h4><b>$ 1,240,500</b></h4>
    </div>
    <div className={`${styles.box} my-4`} style={{height:'150px',width:'250px'}}></div>
    <div className={`${styles.box} my-4`} style={{height:'150px',width:'250px'}}></div>
    <div className={`${styles.box} my-4`} style={{height:'150px',width:'250px'}}></div>
   
</div>

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
       
    </div>
  )
}

export default Update