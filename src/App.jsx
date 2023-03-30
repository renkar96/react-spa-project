import NavBar from "./components/Navbar/navbar"
import ItemListContainer from "./components/ItemListContainer"
import Home from "./components/Home"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Navigate, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar icon="https://megamercado.com.co/MERCADOMOVIL.png"/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route path="/products/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </>
  )
}

export default App
