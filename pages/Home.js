import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function Home({newProduct}) {
  const imageArray = [
    newProduct[0].shoeDisplayPicture,newProduct[0].shoeExtraPicture1,newProduct[0].shoeExtraPicture2,newProduct[0].shoeExtraPicture3];
  console.log(newProduct);
  const [index, setIndex] = useState(0);
  const [newImage, setNewImage] = useState(imageArray[0]);
  const router=useRouter();

  
  useEffect(() => {
    setTimeout(() => {
      setIndex(prevIndex => (prevIndex + 1) % imageArray.length);
      setNewImage(imageArray[index]);
    }, 2000);    
    
  },[index]);

  
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
              <Image src={newProduct[0].shoeDisplayPicture} width={400} height={400} alt={newProduct[0].shoeName} className='card-img-top'></Image>
              <div className='card-body'>
              <p className='text-center text-dark'>New Available Product</p>
                <h5 className='card-title'><b>{newProduct[0].shoeBrand.brandName}</b></h5>
                <p className='card-text'>{newProduct[0].shoeName}</p>
                <p className='card-text fs-4'><span className='badge bg-dark'>Rs {newProduct[0].shoePrice}</span></p>
                <button className='btn btn-outline-dark mx-2'><span className='bi bi-cart'>Cart</span></button>
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
            <option selected disabled value=''>Select Shoes Category</option>
            <option value=''>Jordan</option>
            <option value=''>Adidas</option>
            <option value=''>Puma</option>
            <option value=''>Reebok</option>
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

        <Footer></Footer>
       
        </div>
        

     
    </main>
    </>
  )
}

export async function getStaticProps(){
   const response=await axios.get("http://localhost:8080/get_latest_product");
   const newProduct=response.data;
   

   return{
    props:{
      newProduct,
    }
   }


}

 