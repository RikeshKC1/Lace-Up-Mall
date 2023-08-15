import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import styles from '../styles/Cart.module.css';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import axios from 'axios';


let cartData;
export default function Cart() {
const router=useRouter();
const[cartData,setCartData]=useState([]);

useEffect(()=>{

  const userId=localStorage.getItem("userId");
  console.log(userId)
    axios.get(`http://localhost:8080/getAllCart/${userId}`).then(response=>{
      setCartData(response.data);
    }).catch(error=>{
     console.log(error);
    });

})





  const[stock,setStock]=useState();
  const[price,setPrice]=useState();

  const handleSize=(e)=>{
    setStock(e.target.value);
  }
  const handlePrice=(e)=>{
    setPrice(e.target.value)
  }







  return (
    <>
     <Head>
            <title>Cart</title>
        </Head>
       <main>
       <div className='container-fluid'>
        <NavBar></NavBar>
               <div className='row mt-5'>
                <h3 className='text-center'><span className='bi bi-bag'> <b>My Cart</b></span></h3>
               </div>
               <div className='row d-flex flex-column-reverse flex-lg-row my-auto'>
                <div className='col-lg-8 col-12'>

                  {
                    cartData.map(item=>(
                      <div className='row border'>
                      <div className='col-md-7 d-flex align-items-center'>
                        <Image src={item.shoes_details.shoeDisplayPicture} alt='shoes' height={200} width={180}></Image>
                        <div className='mx-sm-2'>
                          <h5>{item.shoes_details.shoeBrand.brandName}</h5>
                          <p>{item.shoes_details.shoeName}</p>
                          <select className='form-select form-select-sm' onChange={handleSize}>
                            <option value={item.shoes_details.shoe_size_S }>S</option>
                            <option value={item.shoes_details.shoe_size_L} >L</option>
                            <option value={item.shoes_details.shoe_size_XL} >XL</option>
                            <option value={item.shoes_details.shoe_size_XXL} >XXL</option>

                          </select>
                          <p className='text-info'>{stock===0?'Out Of stock':'In stock'}</p>
                        </div>
                      </div>
                      <div className='col-md-5 d-flex flex-column'>
                        <div className='d-flex justify-content-between'>
                          <p>Each</p>
                          <p>Quantity</p>
                          <p>Total</p>
  
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p>{item.shoes_details.shoePrice}</p>
                          <select className='form-select form-select-sm' style={{height:'40px',width:'100px'}} onChange={handlePrice}>
                            <option  value={item.shoes_details.shoePrice*1}>1</option>
                            <option value={item.shoes_details.shoePrice*2}>2</option>
                            <option value={item.shoes_details.shoePrice*3}>3</option>
                            <option value={item.shoes_details.shoePrice*4}>4</option>
                            <option value={item.shoes_details.shoePrice*5}>5</option>
                          </select>
                          <p className='text-primary'>{item.shoes_details.shoePrice}</p>
  
                        </div>
                         <div className='mx-auto my-auto'><button className='btn btn-outline-dark'><span>Buy</span></button></div>
                      </div>
                    </div>
                    ))
                  };

         

                

            </div>

                <div className='col-lg-4 col-8 '>
                      <p className='text-center text-black-50'>Counter</p>
                      <h6 className='text-center'>x Bad Bunny Forum Buckle Low "Blue </h6>
                      <div className='row d-flex align-items-center'>

                      <div className='col-sm-6 '>
                      <Image src='https://cdn-images.farfetch-contents.com/19/49/30/16/19493016_43409810_1000.jpg' height={180} width={150}></Image>
                      </div>

                      <div className='col-sm-6'>
                        <p>Size: S</p>
                        <p>Quantity: 1</p>
                        <p>Total: Rs5000</p>

                      </div>
                      <div className='mx-auto' style={{width:'180px'}}> <button className='btn btn-outline-dark mx-auto'>Proceed to pay</button></div>

                      </div>
                      

                </div>
               


               </div>

       </div>

    


       </main>
    
    </>
  )
}





