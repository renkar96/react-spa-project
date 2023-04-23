import { createContext, useState, useEffect } from "react";
import db from "../../../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const dataContext = createContext();

const DataProvider = ({ Children }) => {

    const [items, setitems] = useState([])
    const itemsRef = collection(db, "items")
    const { categoryName } = useParams();

    const getItems = async () => {
        const itemsCollection = await getDocs(itemsRef)
        const items = itemsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        categoryName ? setitems(items.filter(item => item.category === categoryName)) : setitems(items);
    }

    useEffect(() => {
        getItems()
    }, [])


    return (
        <dataContext.Provider value={{ items }}>
            {Children}
        </dataContext.Provider>
    )
};

export default DataProvider;