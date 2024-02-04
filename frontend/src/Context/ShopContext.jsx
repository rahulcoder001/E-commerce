import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
       cart[index]=0;
    }
    return cart;
}


const ShopcontextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())


    const addTocart = (itemID)=>{
      setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
    }
    const removeTOcart = (itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
      }
      const totalamount = () => {
        let totalprice = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let iteminfo = all_product.find((product) => product.id === Number(item));
            totalprice += iteminfo.new_price * cartItems[item];
          }
        }
        return totalprice;
      };
      const gettotalitems = () => {
        let totalitems = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            totalitems +=cartItems[item];
          }
        }
        return totalitems;
      };
      
      const contextvalue = {gettotalitems,totalamount,all_product,cartItems,addTocart,removeTOcart};
    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopcontextProvider;