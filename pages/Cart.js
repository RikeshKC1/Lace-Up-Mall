import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'
import styles from '../styles/Cart.module.css';
import Image from 'next/image';


function Cart() {
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

                <div className='row border'>
                    <div className='col-md-7 d-flex align-items-center'>
                      <Image src='https://cdn-images.farfetch-contents.com/19/49/30/16/19493016_43409810_1000.jpg' alt='shoes' height={200} width={180}></Image>
                      <div className='mx-sm-2'>
                        <h5>Adidas</h5>
                        <p>x Bad Bunny Forum Buckle Low "Blue Tint" sneakers</p>
                         <p>Size: S</p>
                        <p>In Stock</p>
                      </div>
                    </div>
                    <div className='col-md-5 d-flex flex-column'>
                      <div className='d-flex justify-content-between'>
                        <p>Each</p>
                        <p>Quantity</p>
                        <p>Total</p>

                      </div>
                      <div className='d-flex justify-content-between'>
                        <p>Rs 5000</p>
                        <select className='form-select form-select-sm' style={{height:'40px',width:'100px'}}>
                          <option selected value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </select>
                        <p className='text-primary'>Rs 5000</p>

                      </div>
                       <div className='mx-auto my-auto'><button className='btn btn-outline-dark'><span>Buy</span></button></div>
                    </div>
                  </div>

                  <div className='row border'>
                    <div className='col-md-7  d-flex align-items-center'>
                      <Image src='https://cdn-images.farfetch-contents.com/19/49/30/16/19493016_43409810_1000.jpg' alt='shoes' height={200} width={180}></Image>
                      <div className='mx-sm-2'>
                        <h5>Adidas</h5>
                        <p>x Bad Bunny Forum Buckle Low "Blue Tint" sneakers</p>
                         <p>Size: S</p>
                        <p>In Stock</p>
                      </div>
                    </div>
                    <div className='col-md-5 d-flex flex-column'>
                      <div className='d-flex justify-content-between'>
                        <p>Each</p>
                        <p>Quantity</p>
                        <p>Total</p>

                      </div>
                      <div className=' d-flex justify-content-between'>
                        <p>Rs 5000</p>
                        <select className='form-select form-select-sm' style={{height:'40px',width:'100px'}}>
                          <option selected value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </select>
                        <p className='text-primary'>Rs 5000</p>

                      </div>
                       <div className='mx-auto my-auto'><button className='btn btn-outline-dark'><span>Buy</span></button></div>
                    </div>
                  </div>

                  <div className='row border'>
                    <div className='col-md-7  d-flex align-items-center'>
                      <Image src='https://cdn-images.farfetch-contents.com/19/49/30/16/19493016_43409810_1000.jpg' alt='shoes' height={200} width={180}></Image>
                      <div className='mx-sm-2'>
                        <h5>Adidas</h5>
                        <p>x Bad Bunny Forum Buckle Low "Blue Tint" sneakers</p>
                         <p>Size: S</p>
                        <p>In Stock</p>
                      </div>
                    </div>
                    <div className='col-md-5 d-flex flex-column'>
                      <div className='d-flex justify-content-between'>
                        <p>Each</p>
                        <p>Quantity</p>
                        <p>Total</p>

                      </div>
                      <div className=' d-flex justify-content-between'>
                        <p>Rs 5000</p>
                        <select className='form-select form-select-sm' style={{height:'40px',width:'100px'}}>
                          <option selected value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </select>
                        <p className='text-primary'>Rs 5000</p>

                      </div>
                       <div className='mx-auto my-auto'><button className='btn btn-outline-dark'><span>Buy</span></button></div>
                    </div>
                  </div>
                   

                  <div className='row border'>
                    <div className='col-md-7  d-flex align-items-center'>
                      <Image src='https://cdn-images.farfetch-contents.com/19/49/30/16/19493016_43409810_1000.jpg' alt='shoes' height={200} width={180}></Image>
                      <div className='mx-sm-2'>
                        <h5>Adidas</h5>
                        <p>x Bad Bunny Forum Buckle Low "Blue Tint" sneakers</p>
                         <p>Size: S</p>
                        <p>In Stock</p>
                      </div>
                    </div>
                    <div className='col-md-5 d-flex flex-column'>
                      <div className='d-flex justify-content-between'>
                        <p>Each</p>
                        <p>Quantity</p>
                        <p>Total</p>

                      </div>
                      <div className=' d-flex justify-content-between'>
                        <p>Rs 5000</p>
                        <select className='form-select form-select-sm' style={{height:'40px',width:'100px'}}>
                          <option selected value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </select>
                        <p className='text-primary'>Rs 5000</p>

                      </div>
                       <div className='mx-auto my-auto'><button className='btn btn-outline-dark'><span>Buy</span></button></div>
                    </div>
                  </div>


                </div>

                <div className='col-lg-4 col-8 border'>
                      <p className='text-center text-black-50'>Counter</p>
                      <h6 className='text-center'>x Bad Bunny Forum Buckle Low "Blue </h6>
                      <div className='row d-flex align-items-center'>

                      <div className='col-sm-6'>
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

export default Cart