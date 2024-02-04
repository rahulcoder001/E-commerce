import React from 'react'
import './Breadcrum.css' 
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcurm = (props) => {
    const {product} = props;
  return (
    <div className='breadcum'>
       HOME <img src={arrow_icon} /> SHOP <img src={arrow_icon} /> {product.category} <img src={arrow_icon} />{product.name}
    </div>
  )
}

export default Breadcurm
