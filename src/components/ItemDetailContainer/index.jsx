import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from "../ItemListContainer/card.module.scss";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams ();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => 
          setProduct(data));
    }, [id]);

  return (
            
            <div className={styles.containeruno}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="200" height="250" />
            <p>{product.description}</p>
            <p>$ {product.price}</p>
            <p>{product.category}</p>
            </div>
            
  )
}

export default ItemDetailContainer