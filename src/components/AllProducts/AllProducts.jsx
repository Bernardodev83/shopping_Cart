import { useContext } from "react"
import { productsData } from "../DataContext/productsData"

import { ItemCounts } from "../ItemCounts/ItemCounts"
import { TotalProducts } from "../TotalProducts/TotalProducts"
import './AllProducts.css'

export const AllProducts = () => {

  const { addCart, setAddCart } = useContext(productsData)

  const btnDelete = (id) => {
  
    const userDelete = addCart.find((item) => item.id === id)
    
    const newCard = addCart.filter((item) => {
      return item !== userDelete
    })
    setAddCart(newCard)
} 



  return addCart.length > 0 ?(
    <>
      {addCart.map((product) => (
        <div className="containerProductADD" key={product.id}>
          <div className="containerImageADD">
            <img src={product.image} className="addProductImage"/>
          </div>
          <div className="containerTitle">
            <h2>{product.title}</h2>
          </div>
           <ItemCounts product = {product} />
          <h2 className="price">{product.price * product.quantity} $</h2>
           <h2 className="deleteIcon" onClick={()=>btnDelete(product.id)}>✖</h2>
        </div>
      ))}
       <TotalProducts />
    </>
  ) : (
      <h2 className="cartvacio">containerTitle</h2>
  )
}
