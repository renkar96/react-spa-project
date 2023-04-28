import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import styles from "./card.module.scss";
import { Link, } from 'react-router-dom';


function ItemListContainer() {

  const [items, setitems] = useState([])
  const { categoryName } = useParams();
  
  const getItems = async () => {
    const itemsRef = collection(db, "items")
    const itemsCollection = await getDocs(itemsRef)
    const items = itemsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    categoryName ? setitems(items.filter(item => item.category === categoryName)) : setitems(items);
  }

  useEffect(() => {
    getItems()
  }, [categoryName])

  

  return (

    <div className={styles.principal}>
      {items.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <div className={styles.container}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} width="150" height="150" />
            <h3>$ {item.price}</h3>
            <h3>{item.category}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ItemListContainer