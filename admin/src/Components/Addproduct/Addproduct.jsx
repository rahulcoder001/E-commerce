import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg'
const Addproduct = () => {
      const [image,setImage] = useState(false);
      const [prodis,setProdis] = useState({
        name:"" ,
        image:"",
        cataegory:"women",
        new_price:"",
        old_price:""
      });
      const imageHandler = (e) =>{
            setImage(e.target.files[0]);
      }
      const changeHandler = (e)=>{
            setProdis({...prodis,[e.target.name]:e.target.value}) 
      }
      const Add_product  = async () =>{
        console.log(prodis);
        let responceData;
        let product  = prodis;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
          method:'POST',
          headers:{
            Accept:'application/json',
          },
          body:formData,
        }).then((resp)=> resp.json()).then((data)=>{responceData=data});
          if(responceData.success){
            product.image = responceData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
              method:'POST',
              headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify(product)
            }).then((resp)=>resp.json()).then((data)=>{
              data.success?alert("Product Added"):alert("Failed")
            });
          }
      }

  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={prodis.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
         <div className="addproduct-price">
         <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={prodis.old_price} onChange={changeHandler} type="number" name='old_price' placeholder='type here' />
        </div>
        <div className="addproduct-itemfield">
            <p>Offer-Price</p>
            <input value={prodis.new_price} onChange={changeHandler} type="number" name='new_price' placeholder='type here' />
        </div>
         </div>
         <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={prodis.cataegory} onChange={changeHandler} name="cataegory"  className='product-selector'>

              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="Kids">Kids</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
              <img src={image?URL.createObjectURL(image):upload_area} className='uploadarea' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
        </div>
           <button onClick={()=>{Add_product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default Addproduct
