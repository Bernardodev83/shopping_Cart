import { useContext } from "react"
import { productsData } from "../DataContext/productsData"



import './Header.css'

import logoCart from '../../assets/icon-cart-white.svg'
import { Link } from 'react-router-dom'

export const Header = () => {

  const { count, addCart, setCount } = useContext(productsData)

   const quanty = addCart.reduce((acc, curr) => acc + curr.quantity, 0)
  setCount(quanty)

  return (
    <>
      <div className="containerHeader">
         <Link to='/' className='toLink'><h1 className="home">Home</h1></Link>
           <h2 className="titleShoping">Plis Shoping</h2>
        <Link to='allproducts' className='toLink'>
            <div className='content_cartIcon'>
                  <img className='logoCart' src={logoCart} />
            <div className='countIcon'>{ count }</div>
              </div>
        </Link>    
      </div>     
    </>
  )
}
