import { ListProducts } from "./components/ListProducts/ListProducts"
import { Header } from "./components/Header/Header"
import { AllProducts } from "./components/AllProducts/AllProducts"
import { ProductDescription } from "./components/ProductDescription/ProductDescription"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductsContext from "./components/DataContext/productsData"


import './App.css'

function App() {

  return (
    <>
      <ProductsContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ListProducts />}></Route>
            <Route path="allproducts" element={<AllProducts />}></Route>
            <Route path="productDescription" element={<ProductDescription />}></Route>
          </Routes>
        </BrowserRouter>
     </ProductsContext>
      
    </>
  )
}

export default App
