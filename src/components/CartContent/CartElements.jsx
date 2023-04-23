import { useContext} from "react";
import { dataContext } from "../Context/DataContext";

import React from 'react'

const CartElements = () => { 
    const {cart} = useContext(dataContext);
  return  cart.map((item)=>{
    return (
        <div className="cartContent" key={item.id}>
            <img src={item.image} alt={item.title} width="150" height="150" />
            <h3>{item.title}</h3>
            <p>$ {item.price}</p>
            <p>{item.category}</p>
        </div>
    )

  })
}

export default CartElements