import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cross_icon.png'

const Listproduct = () => {
const [allproduct , setAllproduct] = useState([]);
const fetchinfo = async ()=>{
  await fetch('http://localhost:4000/allproduct')
  .then((res)=>res.json())
  .then((data)=>{setAllproduct(data)})
}

useEffect(()=>{
   fetchinfo();
},[])

const remove_product = async (id)=>{
  await fetch('http://localhost:4000/removeproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
      "Content-Type":'application/json'
    },
    body:JSON.stringify({id:id})
  })
  await fetchinfo();
}
  return (
    <div className='list-product'>
      <h1>All product List</h1>
      <div className="formatmain">
        <p>Products</p>
        <p>Title</p>
        <p>Old price </p>
        <p>New price</p>
        <p>category</p>
        <p>Remove</p>
      </div>
      <div className="allproduct">
        <hr/>
           {allproduct.map((product,index)=>{
                  return <>
                   <div key={index} className="formatmain listfprmat">
                       <img src={product.image} alt="" className="producticon" />
                       <p>{product.name}</p>
                       <p>${product.old_price}</p>
                       <p>${product.new_price}</p>
                       <p>{product.category}</p>
                       <img onClick={()=>{remove_product(product.id)}} className='remove-icon'src={cross_icon} alt="" />
                  </div>
                  <hr/>
                  </>
           })}
      </div>
      
    </div>
  )
}

export default Listproduct
