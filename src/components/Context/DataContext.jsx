import { createContext, useState, useEffect } from "react";


export const dataContext = createContext();

const DataProvider = ({ children}) => {



    const [cart, setCart] = useState([])
    

    return (
        <dataContext.Provider value={{  cart , setCart }}>
            {children}
        </dataContext.Provider>
    )
};

export default DataProvider;