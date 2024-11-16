import { useContext } from "react"
import { productsData } from "../DataContext/productsData"

import './ProductDescription.css'
import { Link } from "react-router-dom"



export const ProductDescription = () => {

    const { descriptionProduct, addCart, setAddCart} = useContext(productsData)


    const addProductCart = (productDescription) => {

        const productRepeat = addCart.find((item) => item.id === productDescription.id);

        if (productRepeat) {
            setAddCart(addCart.map((item) => (item.id === productDescription.id ? { ...productDescription, quantity: productRepeat.quantity + 1 } : item)))
    
        } else {
            setAddCart([...addCart, productDescription])
            
        }

    }


  return (
      <>
          {descriptionProduct.map((productDescription) => (
              <div className="containerProduct" key={productDescription.id}>
                          <div className="container_image_product">
                               <img src={productDescription.image} className="image_card_product"/>
                          </div>
                          <div className="card_info_product">
                              <h3 className="card_description_product">Description Product</h3>
                              <p className="textDescription">{productDescription.description}</p>
                              <h2 className="card_price_product">Price : {productDescription.price}$</h2>   
                  </div>
                  <div className="containerBTN">
                      <Link to='/'>
                          <button className="paginaPrincipal btn">Volver Pagina Pricipal</button>
                      </Link>
                      
                      <button className="AddCart btn" onClick={()=>addProductCart(productDescription)}>añadir al carrito</button>
                  </div>  
                 </div>
                 
          ) )}
          
    </>
  )
}
