import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from "./itemDetailContainer.module.scss";
import { doc, getDoc } from 'firebase/firestore';
import db from "../../../db/firebase-config";

const ItemDetailContainer = () => {
  const [item, setitem] = useState({})
  const {id} = useParams()
  const itemRef = doc(db , "items" , id)

  const getItem = async () =>{
    const itemDoc = await getDoc(itemRef)
    setitem(itemDoc.data());
    
  }

  useEffect (() => {
    getItem()
  } ,[])

  return (
            
            <div className={styles.containerUnoPrincipal}>
              <div className={styles.containeruno}>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} width="200" height="250" />
                <p>{item.description}</p>
                <p>$ {item.price}</p>
                <p>{item.category}</p>
              </div>
            </div>
            
  )
}

export default ItemDetailContainer