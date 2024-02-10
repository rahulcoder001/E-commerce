import React, { createContext, useEffect, useState } from "react";
// import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {}
    for (let index = 0; index <300+1; index++) {
       cart[index]=0;
    }
    return cart;
}


const ShopcontextProvider = (props) =>{
  const [all_product, setAll_Product] = useState([])
  const [cartItems, setCartItems] = useState(getDefaultCart());
  useEffect(() => {
      fetch('http://localhost:4000/allproduct')
      .then((responce)=>responce.json())
      .then((data)=>setAll_Product(data))

      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json'
          },
          body:"",
        })
        .then((responce)=>responce.json())
        .then((data)=>setCartItems(data));
      }
  }, []);
  

  const addTocart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));

    const authToken = localStorage.getItem('auth-token');

    if (authToken) {
        fetch('http://localhost:4000/addtocart', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'auth-token': authToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "itemId": itemID }), // Ensure it is 'itemId', not 'itemID'
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));
    }
};

 
 const removeTOcart = (itemID) => {
  setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));

  if (localStorage.getItem('auth-token')) {
     fetch('http://localhost:4000/removefromcart', {
        method: 'POST',
        headers: {
           Accept: 'application/json',
           'auth-token': localStorage.getItem('auth-token'),
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemID": itemID }),
     })
     .then((response) => {
        if (!response.ok) {
           throw new Error('Network response was not ok');
        }
        return response.json();
     })
     .then((data) => console.log(data))
     .catch((error) => console.error('Error:', error));
  }
};

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