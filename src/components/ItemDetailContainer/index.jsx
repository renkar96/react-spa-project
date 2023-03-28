import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams ();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => console.log(response.json()))
        .then((data) => {
          setProduct(data);
        });
    }, [id]);
    console.log(product)
  return (
    <div>
        {product.map((product)=>(
            <div>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="200" height="250" />
            <p>{product.description}</p>
            <p>$ {product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
    </div>
  )
}

export default ItemDetailContainer