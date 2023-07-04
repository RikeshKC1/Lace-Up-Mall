import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';


function Home() {
  // const imageArray="https://cdn-images.farfetch-contents.com/19/51/74/53/19517453_43785045_1000.jpg"
  const imageArray = [
    "https://cdn-images.farfetch-contents.com/19/51/74/53/19517453_43785045_1000.jpg",
    "https://cdn-images.farfetch-contents.com/19/51/74/53/19517453_43784647_1000.jpg",
    "https://cdn-images.farfetch-contents.com/19/51/74/53/19517453_43782561_1000.jpg"
  ];
  
  const [index, setIndex] = useState(0);
  const [newImage, setNewImage] = useState(imageArray[0]);
  
  useEffect(() => {
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex + 1) % imageArray.length);
      setNewImage(imageArray[index]);
    }, 2000);
    
  }, [index]);
  
  return (
    <>
    <Head>
      <title>
        Home
      </title>
    </Head>
    <main>
      <div className='container-fluid'>
        <NavBar/>
        <div className={`${styles.backgroundImage} row d-flex flex-column flex-md-row`} style={{height:'100vh'}}>

          <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
           <div className='row'>
           <div className={`${styles.cardShadow} card w-100 border`}>
              <Image src='https://cdn-images.farfetch-contents.com/19/51/74/53/19517453_43785045_1000.jpg' width={400} height={400} alt='jordan1' className='card-img-top'></Image>
              <div className='card-body'>
              <p className='text-center text-dark'>New Available Product</p>
                <h5 className='card-title'><b>Jordan</b></h5>
                <p className='card-text'>Air Jordan 1 High OG "True Blue" sneakers</p>
                {/* <p className='card-text fs-4'><span className='badge bg-danger'>$118</span></p> */}
                <button className='btn btn-outline-dark mx-2'><span className='bi bi-cart'>Cart</span></button>
                <button className='btn btn-outline-dark'><span className='bi bi-currency-dollar'>BuyNow</span></button>
                <button className='btn btn-outline-dark mx-2'><span className='bi bi-eye'></span></button>
              </div>
            </div>
           </div>
          </div>
          <div className={` ${styles.newImage} col-12 col-md-6 d-flex justify-content-center`}>
              <div className='row' style={{width:'400px'}}>
                <Image src={newImage}  height={500} width={400} alt='new Available Shoes Image'></Image>
              </div>
          </div>
          
        </div>
        <div className='row d-flex'>
        <div className='col-sm-6 d-flex justify-content-end'>
            <p className='text-black-50 text-center'>Category</p>
          </div>
          <div  className='col-sm-6 d-flex justify-content-end'>
            <select className='form-select' style={{width:'210px'}}>
            <option selected disabled>Select Shoes Category</option>
            <option>Jordan</option>
            <option>Adidas</option>
            <option>Puma</option>
            <option>Reebok</option>
            </select>
          </div>
        </div>
        <p><b>Adidas</b></p>
        <div className='row overflow-auto flex-nowrap'>
          
          
        <div className='col-sm-5  col-md-3'>
              <div className='card overflow-hidden border'>
                <Image src='https://cdn-images.farfetch-contents.com/20/20/01/22/20200122_50083225_1000.jpg' height={260} width={280}></Image>
                <div className='card-body'>
                  <p>Cozy ZX 8000 sneakers</p>
                  <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
                </div>
              </div>
            </div>
            


            <div className='col-sm-5  col-md-3'>
              <div className='card overflow-hidden border'>
                <Image src='https://cdn-images.farfetch-contents.com/20/20/01/22/20200122_50083225_1000.jpg' height={260} width={280}></Image>
                <div className='card-body'>
                  <p>Cozy ZX 8000 sneakers</p>
                  <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
                </div>
              </div>
            </div>


            <div className='col-sm-5  col-md-3'>
              <div className='card overflow-hidden border'>
                <Image src='https://cdn-images.farfetch-contents.com/20/20/01/22/20200122_50083225_1000.jpg' height={260} width={280}></Image>
                <div className='card-body'>
                  <p>Cozy ZX 8000 sneakers</p>
                  <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
                </div>
              </div>
            </div>


            <div className='col-sm-5  col-md-3'>
              <div className='card overflow-hidden border'>
                <Image src='https://cdn-images.farfetch-contents.com/20/20/01/22/20200122_50083225_1000.jpg' height={260} width={280}></Image>
                <div className='card-body'>
                  <p>Cozy ZX 8000 sneakers</p>
                  <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
                </div>
              </div>
            </div>


            <div className='col-sm-5  col-md-3'>
              <div className='card overflow-hidden border'>
                <Image src='https://cdn-images.farfetch-contents.com/20/20/01/22/20200122_50083225_1000.jpg' height={260} width={280}></Image>
                <div className='card-body'>
                  <p>Cozy ZX 8000 sneakers</p>
                  <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
                </div>
              </div>
            </div>

            <div className='col-sm-5  col-md-3'>
              <div className='card overflow-hidden border'>
                <Image src='https://cdn-images.farfetch-contents.com/20/20/01/22/20200122_50083225_1000.jpg' height={260} width={280}></Image>
                <div className='card-body'>
                  <p>Cozy ZX 8000 sneakers</p>
                  <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
                </div>
              </div>
            </div>

        </div>

        <p className='text-center text-black-50'>Mens Section</p>
        <div className={`row overflow-auto flex-nowrap`}>
        <div className='col-8 col-sm-6 col-md-3'>
     <div className='border card overflow-hidden'>
       <Image  src='https://cdn-images.farfetch-contents.com/17/67/69/95/17676995_36975927_1000.jpg' height={260} width={280}></Image>
    <div className='card-body'>
    <h5 className='card-title'>adidas</h5>
    <p className='card-text'>x Sean Wotherspoon Superstar "Superearth" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>



<div className='col-5 col-md-3'>
     <div className='card overflow-hidden border'>
       <Image  src='https://cdn-images.farfetch-contents.com/17/67/69/95/17676995_36975927_1000.jpg' height={260} width={280}></Image>
    <div className='card-body'>
    <h5 className='card-title'>adidas</h5>
    <p className='card-text'>x Sean Wotherspoon Superstar "Superearth" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>





<div className='col-5 col-md-3'>
     <div className='card overflow-hidden border'>
       <Image  src='https://cdn-images.farfetch-contents.com/17/67/69/95/17676995_36975927_1000.jpg' height={260} width={280}></Image>
    <div className='card-body'>
    <h5 className='card-title'>adidas</h5>
    <p className='card-text'>x Sean Wotherspoon Superstar "Superearth" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>




<div className='col-5 col-md-3'>
     <div className='card overflow-hidden border'>
       <Image  src='https://cdn-images.farfetch-contents.com/17/67/69/95/17676995_36975927_1000.jpg' height={260} width={280}></Image>
    <div className='card-body'>
    <h5 className='card-title'>adidas</h5>
    <p className='card-text'>x Sean Wotherspoon Superstar "Superearth" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>




<div className='col-5 col-md-3'>
     <div className='card overflow-hidden border'>
       <Image  src='https://cdn-images.farfetch-contents.com/17/67/69/95/17676995_36975927_1000.jpg' height={260} width={280}></Image>
    <div className='card-body'>
    <h5 className='card-title'>adidas</h5>
    <p className='card-text'>x Sean Wotherspoon Superstar "Superearth" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>




<div className='col-5 col-md-3'>
     <div className='card overflow-hidden border'>
       <Image  src='https://cdn-images.farfetch-contents.com/17/67/69/95/17676995_36975927_1000.jpg' height={260} width={280}></Image>
    <div className='card-body'>
    <h5 className='card-title'>adidas</h5>
    <p className='card-text'>x Sean Wotherspoon Superstar "Superearth" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>  
            </div>
            <br></br>

            <p className='text-center text-black-50'>Womens Section</p>
        <div className='row overflow-auto flex-nowrap'>


        <div className='col-5 col-md-3'>
     <div className='card overflow-hidden'>
       <Image  src='https://cdn-images.farfetch-contents.com/19/98/69/44/19986944_45187364_1000.jpg' height={260} width={280}></Image>

    <div className='card-body'>
    <h5 className='card-title'>jordan</h5>
    <p className='card-text'>Air Jordan 1 "Washed Pink" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>


<div className='col-5 col-md-3'>
     <div className='card overflow-hidden'>
       <Image  src='https://cdn-images.farfetch-contents.com/19/98/69/44/19986944_45187364_1000.jpg' height={260} width={280}></Image>

    <div className='card-body'>
    <h5 className='card-title'>jordan</h5>
    <p className='card-text'>Air Jordan 1 "Washed Pink" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>



<div className='col-5 col-md-3'>
     <div className='card overflow-hidden'>
       <Image  src='https://cdn-images.farfetch-contents.com/19/98/69/44/19986944_45187364_1000.jpg' height={260} width={280}></Image>

    <div className='card-body'>
    <h5 className='card-title'>jordan</h5>
    <p className='card-text'>Air Jordan 1 "Washed Pink" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>




<div className='col-5 col-md-3'>
     <div className='card overflow-hidden'>
       <Image  src='https://cdn-images.farfetch-contents.com/19/98/69/44/19986944_45187364_1000.jpg' height={260} width={280}></Image>

    <div className='card-body'>
    <h5 className='card-title'>jordan</h5>
    <p className='card-text'>Air Jordan 1 "Washed Pink" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>


<div className='col-5 col-md-3'>
     <div className='card overflow-hidden'>
       <Image  src='https://cdn-images.farfetch-contents.com/19/98/69/44/19986944_45187364_1000.jpg' height={260} width={280}></Image>

    <div className='card-body'>
    <h5 className='card-title'>jordan</h5>
    <p className='card-text'>Air Jordan 1 "Washed Pink" sneakers</p>
    <div>
    <button className='btn'><span className='bi bi-cart lead'></span></button>
    <button className='btn'><span className='bi bi-eye lead'></span></button>
    </div>
  </div>
</div>
</div>

         
        </div>
       
        </div>
        

     
    </main>
    </>
  )
}

export default Home