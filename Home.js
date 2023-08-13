import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import axios from 'axios';
import { faFemale } from '@fortawesome/free-solid-svg-icons';


export default function Home({newProduct,male,female,category}) {
  const imageArray = [
    newProduct[0].shoeDisplayPicture,newProduct[0].shoeExtraPicture1,newProduct[0].shoeExtraPicture2,newProduct[0].shoeExtraPicture3];
  console.log(newProduct);
  const [index, setIndex] = useState(0);
  const [newImage, setNewImage] = useState(imageArray[0]);
  const router=useRouter();
  const [shoesCategory,setShoesCategory]=useState(category);

  const {id}=router.query;
  console.log(id);
    // useEffect(() => {
  //   setTimeout(() => {
  //     setIndex(prevIndex => (prevIndex + 1) % imageArray.length);
  //     setNewImage(imageArray[index]);
  //   }, 2000);    
    
  // },[index]);

  const fetchByCategory= async(e)=>{
    const id=e.target.value;
    const response = await axios.get(`http://localhost:8080/getByCategory/${id}`).then(response=>{
        setShoesCategory(response.data);
    })
    .catch(error=>{
      console.log("An error occurred: ",error);
    })
        
  }
  const addToCart=async(e)=>{
    const userId=id;
    const shoeId=e.target.value;
    
  }



  
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
                <button className='btn btn-outline-dark mx-2' onClick={addToCart}><span className='bi bi-cart'>Cart</span></button>
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
            <select className='form-select' style={{width:'210px'}} onChange={fetchByCategory}>
              <option value='0' disabled>Select Shoes on Category</option>
            <option value='2'>Jordan</option>
            <option value='1'>Adidas</option>
            <option value='3'>Nike</option>
            <option value='4'>Puma</option>
            <option value='5'>Reebok</option>
            </select>
          </div>
        </div>
        <p><b></b></p>
        <div className='row overflow-auto flex-nowrap'>

      {
        shoesCategory.map(item=>(

          <div className='col-sm-5  col-md-3'>
          <div className='card overflow-hidden border'>
            <Image src={item.shoeDisplayPicture} height={260} width={280}></Image>
            <div className='card-body'>
              <p>{item.shoeName}</p>
              <div>
<button className='btn' value={item.shoeId} onClick={addToCart}><span className='bi bi-cart lead'></span></button>
<button className='btn' value={item.shoeId}><span className='bi bi-eye lead'></span></button>
</div>
            </div>
          </div>
        </div>
        


        ))
      };
          
          
        




           
        </div>

        <p className='text-center text-black-50'>Mens Section</p>
        <div className={`row overflow-auto flex-nowrap`}>

          {
            male.map(item=>(

              
        <div className='col-8 col-sm-6 col-md-3' key={item.shoeId}>
        <div className='border card overflow-hidden'>
          <Image  src={item.shoeDisplayPicture} height={260} width={280}></Image>
       <div className='card-body'>
       <h5 className='card-title'>{item.shoeBrand.brandName}</h5>
       <p className='card-text'>x Sean Wotherspoon Superstar "Superearth" sneakers</p>
       <div>
       <button className='btn' value={item.shoeId} onClick={addToCart}><span className='bi bi-cart lead'></span></button>
       <button className='btn' value={item.shoeId}><span className='bi bi-eye lead'></span></button>
       </div>
     </div>
   </div>
   </div>
   

            ))
          }




 
            </div>
            <br></br>

            <p className='text-center text-black-50'>Womens Section</p>
        <div className='row overflow-auto flex-nowrap'>

          {

            female.map(item=>(
              <div className='col-5 col-md-3' key={item.shoeId}>
              <div className='card overflow-hidden'>
                <Image  src={item.shoeDisplayPicture} height={260} width={280}></Image>
         
             <div className='card-body'>
             <h5 className='card-title'>{item.shoeBrand.brandName}</h5>
             <p className='card-text'>{item.shoeName}</p>
             <div>
             <button className='btn' value={item.shoeId} onClick={addToCart}><span className='bi bi-cart lead'></span></button>
             <button className='btn' value={item.shoeId}><span className='bi bi-eye lead'></span></button>
             </div>
           </div>
         </div>
         </div>
            ))
         
          };


        


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

    const maleShoes=await axios.get("http://localhost:8080/getshoes/Male");
    const male=maleShoes.data;

    const femaleShoes=await axios.get("http://localhost:8080/getshoes/Female");
    const female=femaleShoes.data;

    const categoryShoes=await axios.get("http://localhost:8080/getshoes/2");
    const category=categoryShoes.data;
   return{
    props:{
      newProduct,
      male,
      female,
      category
    }
   }


}

 