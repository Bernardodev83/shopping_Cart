import { useContext } from "react"
import { productsData } from "../DataContext/productsData"




import './ItemCounts.css'

export const ItemCounts = ({product}) => {

  const { addCart, setAddCart} = useContext(productsData)
  
  const BtnPlus= () => {

    const plusProduct = addCart.find((item) => item.id === product.id)

    plusProduct.quantity > 0 &&
      setAddCart(addCart.map((item) => (item.id === product.id ? { ...product, quantity: plusProduct.quantity + 1 } : item)))
    
   

  }



  const BtnMinus= () => {
      
    const minusProduct = addCart.find((item) => item.id === product.id)
    
    minusProduct.quantity !== 1 &&
      setAddCart(addCart.map((item) => (item.id === product.id ? { ...product, quantity: minusProduct.quantity - 1 } : item)))
   

  }

  


  return (
      <>
    <div className="btnMinus" onClick={BtnMinus}>-</div>
      <p className='quantity'>{product.quantity}</p>
      <div className="btnPlus" onClick={BtnPlus}>+</div>
    </>
  )
}
