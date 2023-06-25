import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cash from '../public/cash.png'

function Shopping() {
  return (
    <div className='container-fluid'>
        <Head>
            <title>Shopping</title>
            <meta name='description' content='This is shopping application'></meta>
        </Head>

        <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link href="#" legacyBehavior passHref><a className="navbar-brand">Shopping.Com</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <Link href="#" passHref legacyBehavior><a className="nav-link">Home</a></Link> 
      </li>
      <li className="nav-item">
        <Link legacyBehavior passHref href=""><a className="nav-link">Link</a></Link>
      </li>
      <li className="nav-item dropdown">
        <Link href="" legacyBehavior passHref>
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link passHref legacyBehavior href=""><a className="dropdown-item">Action</a></Link>
          <Link passHref legacyBehavior href=""><a className="dropdown-item">Another action</a></Link>
          <div className="dropdown-divider"></div>
          <Link passHref legacyBehavior href=""><a className="dropdown-item" href="#">Something else here</a></Link>
        </div>
      </li>
      <li className="nav-item">
        <Link href="" legacyBehavior passHref><a className="nav-link disabled">Disabled</a></Link>
      </li>
    </ul>
    <form className="form-inline d-flex mx-auto">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>

        <div className="row mt-4 p-5 bg-dark text-white rounded">
  <div className='col-sm-8'>
  <h1>Shopping.Com</h1>
  <p>Welcome to shopping.com - the ultimate destination for all your shopping needs! We're excited to offer you a wide selection of products from some of the best brands and vendors in the industry. From fashion and beauty to electronics and home goods, our website has everything you need to find the perfect item at the best price. Our easy-to-use interface and intuitive search feature make it simple to find what you're looking for, and our secure checkout process ensures that your shopping experience is safe and hassle-free. Whether you're shopping for yourself or looking for a gift, we're confident that you'll find exactly what you need on shopping.com. Thank you for choosing us as your go-to shopping destination, and happy browsing!</p>
  <buttton className="btn btn-danger">Get Started 
  <span className='bi bi-arrow-right-short'></span>

  </buttton>
</div>

 
  <div className='col-sm-4 position-relative' style={{top:"0px",left:"0px"}}>
    <Image src={cash} height="420" width="420"></Image>
  </div>


  </div>
  
</div>


  )
}

export default Shopping