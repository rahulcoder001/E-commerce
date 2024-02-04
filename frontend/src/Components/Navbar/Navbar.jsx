import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_drop from '../Assets/nav_drop.png'
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {gettotalitems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }
  
  
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img  src={logo} alt=""/>
            <p>MERABAJAR</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_drop} alt="" />
        <ul ref={menuRef}className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}} ><Link style={{textDecoration: 'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}} ><Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link>  {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} ><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
      <div className='nav-login-cart'>
        <button ><Link style={{textDecoration: 'none',color:"black"}} to='/login'>Login</Link></button>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>{gettotalitems()}</div>
      </div>
    </div>
  )
}

export default Navbar
