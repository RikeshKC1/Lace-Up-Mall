import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'
import styles from '../styles/Cart.module.css';

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
               <div className='row'>
                <div className='col-sm-6'>
         
                </div>
               </div>

       </div>

    


       </main>
    
    </>
  )
}

export default Cart