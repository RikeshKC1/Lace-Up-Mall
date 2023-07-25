import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Update.module.css';
import Image from 'next/image';
import axios from 'axios';
import noImage from '../../public/no_image.png';
import { curdSchema } from '<hello>/src/schemas/crud';
import { useFormik } from 'formik';
 export default function Crud({brands}){

    
  
   const getmainimg=useRef();
   const get_extra_image_1=useRef();
   const get_extra_image_2=useRef();
   const get_extra_image_3=useRef();
   const [mainImg,setMainImg]=useState(noImage);
   const[extraImg1,setExtraImg1]=useState(noImage);
   const[extraImg2,setExtraImg2]=useState(noImage);
   const[extraImg3,setExtraImg3]=useState(noImage);
   
  
   const handleMainImg= async(e)=>{
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
    const handleExtraImage1=async(e)=>{
          
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
        setExtraImg1(`http://localhost:8080/images/${jsonData.temp_file_name}`);
        console.log(mainImg);



       
    }

    const handleExtraImage2=async(e)=>{
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
        setExtraImg2(`http://localhost:8080/images/${jsonData.temp_file_name}`);



    }

      


    const handleExtraImage3=async(e)=>{

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
        setExtraImg3(`http://localhost:8080/images/${jsonData.temp_file_name}`);
        console.log(mainImg);




    }


   const[add,setAdd]=useState(false);
   const handleAdd=()=>{
     setAdd(true);
   }
   const handleCut=()=>{
      setAdd(false);
   }

   const initialValues={
      shoeName:'',
      shoeDescription:'',
      shoeBrand:'',
      shoePrice:'',
      S:'',
      M:'',
      L:'',
      XL:'',
      XXL:'',
      shoeColor:'',
      shoeType:''
   }
const{values,errors,handleBlur,handleChange,handleSubmit,touched}=useFormik({
      initialValues:initialValues,
      validationSchema:curdSchema,
      onSubmit:(values,action)=>{
         action.resetForm();
      }
});

const[imageInputType,setImageInputType]=useState(true);
const handleImageInputType=()=>{
   setImageInputType(!imageInputType);
}

const[imageLink,setImageLink]=useState({
   mainImg:'',
   extraImg1:'',
   extraImg2:'',
   extraImg3:'',
 });



const handleImageLink=(e)=>{
   const{name,value}=e.target;
   setImageLink((prevImageLink)=>({
        ...prevImageLink,[name]:value,
   }));


}

const[alert,setAlert]=useState(false);
const handleSetAlert=()=>{
   setAlert(true);
   setTimeout(()=>{
      setAlert(false);
   },5000)
}

const handleAddShoesBtn=async()=>{
  if(Object.keys(errors).length==0){
   const formData=new FormData();
    if(mainImg === noImage && extraImg1 === noImage && extraImg2  === noImage && extraImg3 === noImage){
               Object.entries(imageLink).forEach(([key,value])=>{
                  formData.append(key,value);
               });

    }else{
      formData.append('mainImg',mainImg);
      formData.append('extraImg1',extraImg1);
      formData.append('extraImg2',extraImg2);
      formData.append('extraImg3',extraImg3);
      
    }

   Object.entries(values).forEach(([key,value])=>{
        formData.append(key,value);
   });
   
   try{
      const response=await axios.post("http://localhost:8080/addShoes",formData,{
         headers:{
            "Content-Type":"multipart/form-data"
         }
      });
      const jsonData=await response.data;
      const status=response.status;
      if(status===200){
        handleSetAlert
       

      }
     
   }catch(err){
      console.log(err);
   }
   
 

   
  


}

}



    return (
    
    <div className="container-fluid">
      <>
     {
      alert ?  <div class="alert alert-success" role="alert">
      <h4>A new pair of shoes has been successfully added.</h4>
   </div> : ''
     }
      </>
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
            <form onSubmit={handleSubmit}>
            <div className='row d-flex justify-content-center'>
              
               <div className='col-sm-6'>
                  <span className='small text-danger'>{errors.shoeName}</span>
                  <input type='text' className='form-control my-2' placeholder='Shoes FullName' name='shoeName' onChange={handleChange} onBlur={handleBlur} value={values.shoeName}></input>
                   <span className='small text-black-50'>Select shoe Brand</span>
                  <select className='form-select my-2' value={values.shoeBrand} name='shoeBrand' onChange={handleChange} onBlur={handleBlur}>
                      {
                        brands.map((brand)=>( 
                           <option value={brand.brandId}>{brand.brandName}</option>
                        ))

                        }
                  </select>
                  <span className='small text-danger'>{errors.shoeBrand}</span>
                  <br></br>
                  <span className='text-black-50 small'>Amount of shoes</span>
                  <div className='row d-flex justify-content-lg-between'>
                     <input className='form-control' placeholder='S' style={{width:'70px'}} name='S' value={values.S} onChange={handleChange}></input>
                     <input className='form-control' placeholder='M' style={{width:'70px'}} name='M' value={values.M} onChange={handleChange}></input>
                     <input className='form-control' placeholder='L' style={{width:'70px'}} name='L' value={values.L} onChange={handleChange}></input>
                     <input className='form-control' placeholder='XL' style={{width:'70px'}} name='XL' value={values.XL} onChange={handleChange}></input>
                     <input className='form-control' placeholder='XXL' style={{width:'70px'}} name='XXL' value={values.XXL} onChange={handleChange}></input>
                  </div>
                  <span className='small text-danger'>{errors.S}</span>
                  <span className='small text-danger'>{errors.M}</span>
                  <span className='small text-danger'>{errors.L}</span>
                  <span className='small text-danger'>{errors.XL}</span>
                  <span className='small text-danger'>{errors.XXL}</span>
                  
                  
               <br></br> 
               <span className='small text-black-50'>Select shoes type</span>
               <select className='form-select' value={values.shoeType} defaultValue={values.shoeType} name='shoeType' onChange={handleChange} onBlur={handleBlur}>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
               </select>
               <span className='text-danger small'>{errors.shoeType}</span>
               <br></br>
               <button className='btn btn-secondary'><span className='bi bi-arrow-clockwise' onClick={handleImageInputType}></span></button>
               <br></br>
               {
                  imageInputType === true ? <> <span className= 'text-black-50 small'>Select Main Picture</span>
                  <br></br>
                   <button  onClick={()=>getmainimg.current.click()} style={{height:'120px',width:'120px',overflow:'hidden'}} >
                    <Image src={mainImg} alt='mainImage' height={120} width={120}></Image>
                   </button>
                   <input type='file' className='d-none' ref={getmainimg} onChange={handleMainImg} required></input>
                   <br></br>  </>:<> <br></br><input className='form-control' placeholder='Main Image Link' name='mainImg' onChange={handleImageLink} onPaste={handleImageLink} value={imageLink.mainImg} ></input>  </>  }
               
               </div>
               <div className='col-sm-6'>
               <textarea className='form-control' placeholder='Shoes Description' name='shoeDescription' value={values.shoeDescription} onChange={handleChange}></textarea>
               <span className='text-danger small'>{errors.shoeDescription}</span>
               <input className='form-control my-2' type='text' placeholder='Shoes Price' name='shoePrice' value={values.shoePrice} onChange={handleChange}></input>
               <span className='text-danger small'>{errors.shoePrice}</span>
               <input className='form-control' placeholder='Shoes Color' name='shoeColor' value={values.shoeColor} onChange={handleChange} onBlur={handleBlur}></input>
               <span className='text-danger small'>{errors.shoeColor}</span>
                
                <div className='row'>
                  <div className='col-md-6 d-flex align-items-center'>
                    {
                     imageInputType === true ? <><span className='text-black-50 my-3 small'>Extra Picture1</span>
                     <button  onClick={()=>get_extra_image_1.current.click()} style={{height:'100px',width:'100px',overflow:'hidden'}}>
                        <Image src={extraImg1} alt='extraImgae1' height={120} width={120}></Image>
                       </button>
                       <input type='file' className='d-none' ref={get_extra_image_1} onChange={handleExtraImage1} required></input>  </> : <><br></br> <input className='form-control' placeholder='Extra Image1 Link' name='extraImg1' onChange={handleImageLink} onPaste={handleImageLink} value={imageLink.extraImg1}></input></>
                    }
                  </div>

                  <div className='col-md-6'>
                    {
                     imageInputType === true ? <>  <span className='text-black-50 my-3 small'>Extra Picture2</span>
                     <button  onClick={()=>get_extra_image_2.current.click()} style={{height:'100px',width:'100px',overflow:'hidden'}}>
                        <Image src={extraImg2} alt='extraImage2' height={120} width={120}></Image>
                       </button>
                       <input type='file' className='d-none' ref={get_extra_image_2} onChange={handleExtraImage2} required></input> </> : <><input className='form-control' placeholder='Extra Image2 Link' name='extraImg2' onChange={handleImageLink} onPaste={handleImageLink} value={imageLink.extraImg2}></input></>
                    }
                  </div>

                  <div className='col-md-6'>
                    {
                     imageInputType ===true ? <> <span className='text-black-50 my-3 small'>Extra Picture3</span>
                     <button  onClick={()=>get_extra_image_3.current.click()} style={{height:'100px',width:'100px',overflow:'hidden'}}>
                        <Image src={extraImg3} alt='extraImage3' height={120} width={120}></Image>
                       </button>
                       <input type='file' className='d-none' ref={get_extra_image_3} onChange={handleExtraImage3} required></input>
      </> :<><input className='form-control' placeholder='Extra Iimage3 Link' name='extraImg3' onChange={handleImageLink} onPaste={handleImageLink} value={imageLink.extraImg3}></input></>
                    }
                  </div>
                
                 </div>
               </div>
              
               <div className='mx-auto'> <br></br><button className='btn btn-primary' type='submit' onClick={handleAddShoesBtn}>Add Shoes</button></div>
              
            </div>

            </form>
          </div>
         
      </div> : ''
      }
       
    </div>
  )
}



export async function getStaticProps(){
   const res=await axios.get("http://localhost:8080/getBrands");
   const brands=await res.data;

   return{
      props:{
         brands,
      }
   }
}

