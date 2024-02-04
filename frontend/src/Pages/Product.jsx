import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcurm from '../Components/Breadcrum/Breadcurm'
import Producdisplay from '../Components/ProductDisplay/Producdisplay'
import Description from '../Components/Description/Description'
import Reletedproduct from '../Components/Reletedproduct/Reletedproduct'

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_product.find((e) => e.id === Number(productID));

  return (
    <div>
      <Breadcurm product={product} />
      <Producdisplay product={product}/>
      <Description/>
      <Reletedproduct/>
    </div>
  )
}

export default Product

