import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      setProducts(data);
    });
}, []);
  
  return (
    <div>
      {products.map((products) => (
        <Link to={`/products/${products.id}`}>
        <div>
        <h3>{products.title}</h3>
        <img src={products.image} alt={products.title} width="200" height="250" />
        <p>{products.description}</p>
        <p>$ {products.price}</p>
        <p>{products.category}</p>
      </div>
      </Link>
      ))}
    </div>
  )
}

export default ItemListContainer