import React from 'react'
import { useContext} from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
import { HiPlus,HiMinus } from "react-icons/hi";


const CartItemCounter = ({ item ,  }) => {
    const { cart, setCart, buyProducts } = useContext(dataContext);

    const decrese = () => {

        const producto = cart.find((producto) => producto.id == item.id)
        const itemrepeat = cart.find((producto) => producto.id == item.id)?true:false;

        itemrepeat.quanty !==1 && producto.quanty --
        setCart( [...cart] )
    }
  return (
    <>
    <h1 className='counter-button' onClick={decrese}><HiMinus/></h1>
    <h3>{item.quanty}</h3>
    <h1 className='counter-button' onClick={() => buyProducts(item)}><HiPlus/></h1>
    </>
  )
}

export default CartItemCounter