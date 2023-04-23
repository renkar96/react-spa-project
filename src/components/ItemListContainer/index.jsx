import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import styles from "./card.module.scss";
import { Link,  } from 'react-router-dom';


function ItemListContainer() {
  const {items} = useContext (dataContext);

  return (
    
      <div className={styles.principal}>
        {items.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`}>
          <div  className={styles.container}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} width="150" height="150" />
            <p>$ {item.price}</p>
            <p>{item.category}</p>
            <button>Agregar</button>
            <button>Ver mas</button>
          </div>
          </Link>
        ))}
      </div>
  )
}

export default ItemListContainer