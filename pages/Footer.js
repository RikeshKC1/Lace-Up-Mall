import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className='row bg-dark'>
        <div className='col-sm-4 text-white'>
            <h5>Connect with us</h5>
            <div>
                <button className={`${styles.circular}  btn btn-secondary`}><span className='bi bi-facebook'></span></button>
                <button className={`${styles.circular}  btn btn-secondary`}><span className='bi bi-instagram'></span></button>
                <button className={`${styles.circular}  btn btn-secondary`}><span className='bi bi-twitter'></span></button>
            </div>
        </div>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'></div>
    </div>
  )
}

export default Footer