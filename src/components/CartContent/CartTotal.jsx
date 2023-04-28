import React from 'react'
import { useContext} from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
import { Link } from 'react-router-dom';

const CartTotal = () => {
    const {cart} = useContext(dataContext);

    const total =cart.reduce((acc,el) => acc + el.price * el.quanty , 0);
  return (
    <div className='cartTotal'>
        <h3>total a pagar es : $ {total} </h3>
        <Link className='Btn' to ={"/formulario"}>PAGAR</Link>
        <Link className='Btn' to={"/home"}>SEGUIR COMPRANDO</Link>
    </div>
  )
}

export default CartTotal