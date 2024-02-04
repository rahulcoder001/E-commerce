import React, { useContext } from 'react'
import './Productdisplay.css'
import srat_icon from '../Assets/star_icon.png'
import srat_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const Producdisplay = (props) => {
    const {product} = props;
    const {addTocart} = useContext(ShopContext);
  return (
    <div className='productdispaly'>
        <div className="productdisLeft">
              <div className="prodis-img-list">
                  <img src={product.image} />
                  <img src={product.image} />
                  <img src={product.image} />
                  <img src={product.image} />
              </div>
              <div className="prodis-img">
                <img className='prodis-main-img' src={product.image} />
              </div>
        </div>
        <div className="productdisright">
                <h1>{product.name}</h1>
                <div className="prodis-right-star">
                    <img src={srat_icon} alt="" />
                    <img src={srat_icon} alt="" />
                    <img src={srat_icon} alt="" />
                    <img src={srat_icon} alt="" />
                    <img src={srat_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="prodis-right-price">
                     <div className="old_price">
                        ${product.old_price}
                     </div>
                     <div className="new_price">
                        ${product.new_price}
                     </div>
                </div>
                <div className="prodis_description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id placeat itaque expedita veritatis. Totam vel, ea labore voluptates saepe qui architecto officiis reprehenderit! Illum ex assumenda at culpa. Quae accusamus totam debitis dicta esse.
                </div>
                <div className="prodis_size">
                    <h1>Select Size</h1>
                    <div className="prodis-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
                <p className='prodis-right-category'><span>Category :</span>Women,T-shirt, Crop top</p>
                <p className='prodis-right-category'><span>Tag :</span>Modern,Latest</p>
        </div>
      
    </div>
  )
}

export default Producdisplay
