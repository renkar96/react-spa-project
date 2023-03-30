import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from "./card.module.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {categoryName} = useParams();
  if (categoryName) {
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.filter((product)=>product.category === categoryName));
      });
  }, [categoryName]);
    
  }
  else 
    {
      useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
    }, []);
      
    }
  return (
    <div>
      {products.map((products) => (
        <Link to={`/products/${products.id}`}>
        <div className={styles.card}>
        <div className={styles.container}>
        <h3>{products.title}</h3>
        <img src={products.image} alt={products.title} width="200" height="250" />
        <p>{products.description}</p>
        <p>$ {products.price}</p>
        <p>{products.category}</p>
      </div>
      </div>
      </Link>
      ))}
    </div>
  )
}

export default ItemListContainer