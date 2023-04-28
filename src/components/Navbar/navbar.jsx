import "./NavBar.css"
import React from 'react'
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";
import { useContext} from "react";
import { dataContext } from "../Context/DataContext";



const NavBar = ({icon}) => {
  const {cart} = useContext(dataContext);
  return (
    <div className="nav-container">
      <div >
      <img src={icon} alt="" width="200" height="160"/>
      </div>
          <nav className=" navbar">
          <Link className="navbarButton" to="/home" >INICIO</Link>
          <Link className="navbarButton" to="/category/men's clothing" >MEN'S CLOTHING</Link>
          <Link className="navbarButton" to="/category/women's clothing" >WOMEN'S CLOTHING</Link>
          <Link className="navbarButton" to="/category/jewelery" >JEWELERY</Link>
          <Link  to={"/cart"}>  <h1><CartWidget/> </h1>  </Link>
          <Link to={"/cart"}> <h3>{cart.length > 0 ? < TotalItems/> : null} </h3></Link>
          </nav>
      </div>
  )
}

export default NavBar