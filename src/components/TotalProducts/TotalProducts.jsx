
import { useContext } from "react"
import { productsData } from "../DataContext/productsData"



import './TotalProducts.css'

export const TotalProducts = () => {

    const { addCart, setCount, count } = useContext(productsData)
    
  const total = addCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  
 
  const quanty = addCart.reduce((acc, curr) => acc + curr.quantity, 0)
  setCount(quanty)
  

  return (
    <div className="totalProducts"> <h2>Total a Pagar es :</h2>{Number(total.toFixed(2))} $ </div>
  )
}
