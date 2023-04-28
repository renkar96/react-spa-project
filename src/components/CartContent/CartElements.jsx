import { useContext} from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
import CartItemCounter from "./CartItemCounter";
import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";

const CartElements = () => { 
  const {cart , setCart } = useContext(dataContext);

  const deleteProduct = (id) =>{
    const foundId = cart.find((element) => element.id === id );

    const newCart = cart.filter((element)=>{
      return element !== foundId;
    });

    setCart(newCart);
  }

  return(
  <div className="cartContentContainer1"> 
    <div className="cartContentContainer">
      {cart.map((item)=>(
            <div className="cartContent" key={item.id}>
                <div className="vista">
                  <img src={item.image} alt={item.title} width="150" height="150" />
                  <h3>{item.title}</h3>
                  <CartItemCounter item={item} />
                  <h3>$ {item.price * item.quanty}</h3>
                  <h1 onClick={() => deleteProduct(item.id)}><HiOutlineTrash/></h1>
                </div> 
            </div>
      ))}
    </div>
  </div>
  )
}

export default CartElements