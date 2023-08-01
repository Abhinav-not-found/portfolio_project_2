import React,{useState} from 'react'
import "./Amazon.css"
import img1 from "./Images/sample_product_image1.jpg"
import img2 from "./Images/sample_product_image2.jpg"
import img3 from "./Images/sample_product_image3.jpg"
import shopping_cart from "./Images/shopping-cart-icon-white.png"
export default function Amazon() {
 const [mainImage,setMainImage]=useState(img1);
 const handleMainImage=(image)=>{
    setMainImage(image);
 }
  return (
    <div>
      <div className='wrapper'>
        <div id='small-images'>
            <img className='small-images' onClick={()=>handleMainImage(img1)} src={img1}></img>
            <img className='small-images' onClick={()=>handleMainImage(img2)} src={img2}></img>
            <img className='small-images' onClick={()=>handleMainImage(img3)} src={img3}></img>
        </div>
        <div id='main-image'>
            <img className='main-image' src={mainImage}></img>
        </div>
        <div id='description'>
          <h2 id='product-name'>APPLE iPhone 12 (White, 64 GB)</h2>
          <p id='star-rating'>(4.6)&#9733;</p>
          
          <div>

            <h3 id='price'>&#8377; 77,900</h3><p id='line-through'>&#8377;89,900</p>
          </div>
          <p>Size: <select name='size'>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            </select></p>
          <div className='btn-container'>
            
            <button className='btn'><img className='shp-cart' src={shopping_cart}/>&nbsp;&nbsp;Add to cart</button>
            <button className='btn'><img className='shp-cart' src={shopping_cart}/>&nbsp;&nbsp;Buy now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
