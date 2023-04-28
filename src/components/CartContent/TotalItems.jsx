import React from 'react'
import { useContext} from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
    const {cart} = useContext(dataContext);

    const itemQuanty =cart.reduce((acc,el) => acc + el.quanty , 0);
  return (
    <span className='cart-items-total'>{itemQuanty}</span>
  )
}

export default TotalItems