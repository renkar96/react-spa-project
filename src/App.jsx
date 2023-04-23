import NavBar from "./components/Navbar/navbar"
import ItemListContainer from "./components/ItemListContainer"
import Home from "./components/Home"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Navigate, Route, Routes } from "react-router-dom"
import cartWidget from "./components/CartWidget"
import DataProvider from "./components/Context/DataContext"


function App() {
  
  return (
    <>
    <DataProvider>
      <NavBar icon="https://www.mattelsa.net/media/Home/LogoMattelsa.svg"/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<cartWidget/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </DataProvider>
    </>
  )
}

export default App
