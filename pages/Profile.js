import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import profile from '../public/face.jpg';
import styles from '../styles/Profile.module.css';
import NavBar from './NavBar';
import Link from 'next/link';
import Head from 'next/head';
import Footer from './Footer';
import axios from 'axios';



export default function Profile() {
  const [userData,setUserData]=useState([]);
useEffect(()=>{
  const userId=localStorage.getItem("userId");
   axios.get(`http://localhost:8080/getUser/${userId}`).then(response=>{
    setUserData(response.data);
   }).catch(error=>{
    console.log(error)
   })
},[])

console.log(userData);


  return (
    <div className='conatiner-fluid'>
      <Head>
        <title>Profile</title>
      </Head>
        <NavBar></NavBar>
         <div className='row d-flex my-5 align-items-center'>
          <div className='col-md-4 col-12 d-flex justify-content-center flex-column align-items-center'>
          <div className={`${styles.pp} mx-3`}>
             <Image  src={userData.profilePicture} height={180} width={180} alt='profile picture'></Image>
           </div>
           <p className='mx-5'><b>{userData.firstName} {userData.lastName}</b></p>
            <p className='mx-4'>{userData.city} {userData.streetAddress}</p>
            <p className='mx-4 text-primary'>{userData.email}</p>
           <div className='mx-5'> <button className='btn btn-outline-dark btn-sm' value={userData.userId}><span className='bi bi-pen'> Edit</span></button></div>
          </div>
          <div className='col-md-8'>
          
           
          </div>
         
           
         </div>
         <p className='text-center'>Shoe Gallery</p>
         <div className='row'>
          <div className='col-sm-4 border border-top-0  border-bottom-0 d-flex flex-column align-items-sm-center'><Image src='https://cdn-images.farfetch-contents.com/20/83/96/83/20839683_50681641_1000.jpg' height={300} width={250} alt='gallery shoes'></Image>
            <div><p><b>Adidas</b></p>Bad Bunny Response CL Sneakers</div>
          </div>
          <div className='col-sm-4 border  border-top-0 border-bottom-0 d-flex flex-column align-items-sm-center'><Image src='https://cdn-images.farfetch-contents.com/20/83/96/83/20839683_50681641_1000.jpg' height={300} width={250} alt='gallery shoes'></Image>
          <div><p><b>Adidas</b></p>Bad Bunny Response CL Sneakers</div>
          </div>
          <div className='col-sm-4 border border-top-0 border-bottom-0 d-flex flex-column align-items-sm-center'><Image src='https://cdn-images.farfetch-contents.com/20/83/96/83/20839683_50681641_1000.jpg' height={300} width={250} alt='gallery shoes'></Image>
          <div><p><b>Adidas</b></p>Bad Bunny Response CL Sneakers</div>
          </div>
           

         
    </div>
    <Footer></Footer>
    </div>
  )
}


