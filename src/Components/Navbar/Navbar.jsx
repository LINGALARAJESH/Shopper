import React, {  useContext, useState,useRef } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import icon from "../Assets/cart_icon.png"
import {Link} from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from "../Assets/nav_dropdown.png"
export const Navbar = () => {
  
   const [menu,setMenu] = useState("Shop");
   const {getTotalCartItems} = useContext(ShopContext)
   const menuRef =useRef();

   const dropdown_toggle=(e)=>{
     menuRef.current.classList.toggle("nav-menu-visible");
     e.target.classList.toggle('open');
   }


  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/" >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:"none"}} to="/mens" >Men</Link>{menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:"none"}}  to="/womens">Women</Link>{menu==="Women"?<hr/>:<></>}</li>
            <li  onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
        <div className="nav-login-cart">
           <Link to="/login" ><button>login</button></Link>
           <Link to="/cart" ><img src={icon} alt="" /></Link>
            <div className="nav-cart-count">
            {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}
