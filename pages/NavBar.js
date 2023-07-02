import React from 'react'
import face from '../public/face.jpg';
import styles from '../styles/Homepage.module.css';
import laceuplogo from '../public/laceuplogo.png';
import Link from 'next/link'
import Image from 'next/image'
function NavBar() {
  return (
    <div className={`${styles.nav} row fixed-top bg-dark `}>
    <div className='col-sm-3 d-flex align-items-center col-12 justify-content-start'>
    <button className='btn btn-dark d-block  d-md-none'>
        <span className='bi bi-list'></span>
      </button>
      {/* <Image src={laceuplogo} height={50} width={220}></Image> */}
      <h3 className='text-white'><b>Lace up</b></h3>
    </div>
    <div className='col-sm-3 d-md-flex d-sm-none d-none align-items-center justify-content-md-around'>
      <Link passHref legacyBehavior href='/' ><a className={`${styles.whitelink}`}>Home</a></Link>
      <Link passHref legacyBehavior href='/' ><a className={`${styles.whitelink}`}>Cart</a></Link>
      <Link passHref legacyBehavior href='/' ><a className={`${styles.whitelink}`}>Notification</a></Link>
      
    </div>
    <div className='col-sm-6 d-flex flex-row align-items-center justify-content-around'>
      
  <div className='d-sm-none d-none d-md-block'><input className='form-control' placeholder='search shoes'></input></div>
      
      <div className={`${styles.profilediv} d-none d-sm-none d-md-block`}>
        <Image src={face} height={50} width={50} alt='profile picture'></Image>

      </div>

    </div>
  </div>
  )
}

export default NavBar