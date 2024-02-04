import React, { useContext } from 'react'
import './Cartitem.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const Cartitems = () => {
    const {totalamount,all_product,cartItems,removeTOcart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
            <div className="cartitems-format cartitems-main">
                <img className='cart-product-icon' src={e.image} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cart-quantity' >{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='remove_icon'src={remove_icon} onClick={()=>{removeTOcart(e.id)}} alt="" />
                <hr/>
            </div>
          </div>
        }
        return null;
      })}
      <div className="cartitemdown">
        <div className="cart-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-totalitems">
               <p>Subtotal</p>
               <p>${totalamount()}</p>
            </div>
            <hr/>
            <div className="cartitems-totalitems">
               <p>SHipping Fee</p>
               <p>Free</p>
            </div>
            <hr/>
            <div className="cartitems-totalitems">
              <h3>Total</h3>
              <h3>${totalamount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode">
          <p>If you have a Promocode, Enter it here</p>
          <div className="promobox">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitems
