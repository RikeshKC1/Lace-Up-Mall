import Image from 'next/image'
import React, { useState } from 'react'
import profile from '../public/face.jpg';
import styles from '../styles/Profile.module.css';
import NavBar from './NavBar';
import Link from 'next/link';
import Head from 'next/head';
import { Col } from 'react-bootstrap';


function Profile() {
  return (
    <div className='conatiner-fluid'>
      <Head>
        <title>Profile</title>
      </Head>
        <NavBar></NavBar>
         <div className='row d-flex my-5 align-items-center'>
          <div className='col-md-4 col-12 d-flex justify-content-center flex-column align-items-center'>
          <div className={`${styles.pp} mx-3`}>
             <Image  src={profile} height={180} width={180} alt='profile picture'></Image>
           </div>
           <p className='mx-5'><b>Arun Chaudhary</b></p>
            <p className='mx-4'>Kathmandu,Maitidevi</p>
            <p className='mx-4 text-primary'>arunchy600@gmail.com</p>
           <div className='mx-5'> <button className='btn btn-outline-dark btn-sm'><span className='bi bi-pen'> Edit</span></button></div>
          </div>
          <div className='col-md-8'>
          
           
          </div>
         
           
         </div>
         <div className='row'>
          
           <p className='text-center text-black-50'>Your Recently Viewed</p>
           <div className='row'>
            <Col md={4} sm={12} className={`${styles.imageContainer} d-flex justify-content-center`} >
              <Image src='https://cdn-images.farfetch-contents.com/13/15/75/38/13157538_14718351_1000.jpg' height={300} width={280}></Image>
              
                 <div>
                <button className='btn btn-outline-dark mx-2 btn-sm'><span className='bi bi-cart'></span></button>
                <button className='btn btn-outline-dark btn-sm'><span className='bi bi-currency-dollar'></span></button>
                <button className='btn btn-outline-dark mx-2 btn-sm'><span className='bi bi-eye '></span></button>
                
              </div> 
              
            </Col>

            <Col md={4} sm={12} className='d-flex justify-content-center align-items-start'>
              <Image src='https://cdn-images.farfetch-contents.com/17/37/18/27/17371827_37699721_1000.jpg' height={300} width={280}></Image>
              
               <div className={``}>
                <button className='btn btn-outline-dark mx-2 btn-sm'><span className='bi bi-cart'></span></button>
                <button className='btn btn-outline-dark btn-sm'><span className='bi bi-currency-dollar'></span></button>
                <button className='btn btn-outline-dark mx-2 btn-sm'><span className='bi bi-eye '></span></button>
                
              </div> 
              
              </Col>


            <Col md={4} sm={12} className='d-flex justify-content-center align-items-start'>
              <Image src='https://cdn-images.farfetch-contents.com/19/41/84/65/19418465_45093037_1000.jpg' height={300} width={280}></Image>
            
                <button className='btn btn-outline-dark mx-2 btn-sm'><span className='bi bi-cart'></span></button>
                <button className='btn btn-outline-dark btn-sm'><span className='bi bi-currency-dollar'></span></button>
                <button className='btn btn-outline-dark mx-2 btn-sm'><span className='bi bi-eye '></span></button>
                
            
              </Col>
           
           </div>

         
         </div>
         <div className='row'>
          <p className='text-center'><b>Recommended for you</b></p>
          <div className='row'>
            <Col sm={12} md={4} className='d-flex flex-column align-items-center'>
              <Image src='https://cdn-images.farfetch-contents.com/20/24/82/50/20248250_50390341_1000.jpg' height={300} width={280}></Image>
              <div className='card-body'>
                <h5 className='card-title'>A-COLD-WAll</h5>
              </div>
            </Col>
            <Col sm={12} md={4} className='card border-0'>
              <Image src='https://cdn-images.farfetch-contents.com/20/22/03/39/20220339_50105599_1000.jpg' height={300} width={280}></Image>
              <div className='card-body'>
                <h5 className='card-title'>Nike</h5>
              </div>
            </Col>
            <Col sm={12} md={4} className='card border-0'>
              <Image src='https://cdn-images.farfetch-contents.com/13/55/56/93/13555693_21559125_1000.jpg' height={300} width={280}></Image>
              <div className='card-body'>
                <h5 className='card-title'>Nike</h5>
              </div>
            </Col>
          </div>
         </div>

         
    </div>
  )
}

export default Profile