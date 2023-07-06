import React, { useState } from 'react'
import face from '../public/face.jpg';
import styles from '../styles/Homepage.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
function NavBar() {
  const router=useRouter();
  const [sidebar,setSidebar]=useState(false);
  const openSideBar=()=>{
    setSidebar(true);
  }
  const closeSideBar=()=>{
    setSidebar(false);
  }
  const redirectHome=()=>{
      router.push('/Home')
  }
  const redirectCart=()=>{
    router.push('/Cart')
  }
  const redirectDashboard=()=>{
    router.push('/Dashboard')
  }
  const redirectProfile=()=>{
   router.push('/Profile')
  }
  
  return (
    <div className={`${styles.nav} row fixed-top bg-dark`}>
    <div className='col-sm-3 d-flex align-items-center col-12 justify-content-start'>
      {
        sidebar===false?  <button className='btn btn-dark d-block  d-md-none' onClick={openSideBar}>
        <span className='bi bi-list'></span>
      </button> : ''
      }

     {
      sidebar===true? <button className='btn btn-dark d-block d-md-none' onClick={closeSideBar}>
      <span className='bi bi-x'></span>
    </button>:''
     }
      {/* <Image src={laceuplogo} height={50} width={220}></Image> */}
      <h3 className='text-white'><b>Lace up</b></h3>
    </div>
    <div className='col-sm-4 d-md-flex d-sm-none d-none align-items-center justify-content-md-around'>
      <button className={router.pathname==='/Home'?'btn btn-primary':'btn btn-outline-secondary'} onClick={redirectHome}><Link href='/Home' passHref legacyBehavior><a className='text-white'><span className='bi bi-house'></span></a></Link></button>
      <button className={router.pathname==='/Notification'?'btn btn-primary':'btn btn-outline-secondary'} ><span className='bi bi-bell'></span></button>
      <button className={router.pathname==='/Cart'?'btn btn-primary':'btn btn-outline-secondary'} onClick={redirectCart}><span className='bi bi-cart'></span></button>
      <button className={router.pathname==='/Admin'?'btn btn-primary':'btn btn-outline-secondary'} onClick={redirectDashboard}><span className='bi bi-person-fill-gear'></span></button>
     
      
    </div>
    <div className='col-sm-5 d-flex flex-row align-items-center justify-content-around'>
      
  <div className='d-sm-none d-none d-md-block'><input className={`${styles.searchInput} form-control`} placeholder='search shoes'></input></div>
      
      <div className={`${styles.profilediv} d-none d-sm-none d-md-block`}>
        <Image src={face} height={50} width={50} alt='profile picture'></Image>

      </div>

    </div>

   {
     sidebar ? <div className={`${styles.sidebar} row bg-dark d-flex d-md-none`}>

     <div style={{width:'100%',height:'40px'}} className={router.pathname==='/Home'? styles.activeLink : styles.link}>
     <div> <span className='bi bi-house fs-4'></span></div>
     <div><p className='fs-4'>Home</p></div>
     
     </div> 
     
     <div style={{width:'100%',height:'40px'}} className={router.pathname==='/Notification'? styles.activeLink : styles.link}>
     <div> <span className='bi bi-bell fs-4'></span></div>
     <div><p className='fs-4'>Notif</p></div>
     
     </div> 
     
     <div style={{width:'100%',height:'40px'}} className={router.pathname==='/Cart'? styles.activeLink : styles.link}>
     <div> <span className='bi bi-bag fs-3'></span></div>
     <div><p className='fs-4'>Cart</p></div>
     
     </div> 
     
     
     <div style={{width:'100%',height:'40px'}} className={router.pathname==='/Admin'? styles.activeLink : styles.link}>
     <div> <span className='bi bi-person-fill-gear fs-3'></span></div>
     <div><p className='fs-4'>Admin</p></div>
     
     </div> 
     
     <div style={{width:'100%',height:'50px'}} className='d-flex justify-content-around  overflow-hidden'>
           <div className={`${styles.profilediv} `}>
               
           <Image src={face} height={50} width={50} alt='profile picture'></Image>
     
           </div></div>
     
           <div style={{width:'100%',height:'40px'}} className='text-white d-flex justify-content-around'>
     <div> <span className='bi bi-box-arrow-right fs-3'></span></div>
     <div><p className='fs-4'>Logout</p></div>
     
     </div> 
     
          
     </div> : ''

   }


   
  </div>
  )
}

export default NavBar