import React, { useContext } from 'react'
import './CSS/Shopcat.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const Shopcat = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-categorgy'>
        <img className='shopcat-banner' src={props.banner} />
        <div className="shopcat-indexsort">
          <p>
            <span>Showing 1-12</span>Out of 36 products
          </p>
          <div className="shopcat-sort">
            sort by <img src={dropdown_icon} />
          </div>
        </div>
        <div className="shopcat-products">
        {all_product.map((item, i) => {
  if (props.category === item.category) {
    return (
      <Item
        key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    );
  } else {
    return null;
  }
})}

        </div>
        <div className="shopcat-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default Shopcat
