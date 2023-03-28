import NavBar from "./components/Navbar/navbar"
import ItemListContainer from "./components/ItemListContainer"
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <>
      <NavBar icon="https://megamercado.com.co/MERCADOMOVIL.png"/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ItemListContainer/>}/>
        <Route path="/products/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </>
  )
}

export default App
