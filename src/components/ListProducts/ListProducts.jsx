import { useContext } from "react"
import { productsData } from "../DataContext/productsData"

import './ListProducts.css'
import { Link } from "react-router-dom"

export const ListProducts = () => {
    const { data, descriptionProduct, setDescriptionProduct } = useContext(productsData)


    const getProductDescription = (product) => {
        setDescriptionProduct([product])
        descriptionProduct
    }
    

  return (
      <>
       <div className="container_products">
              {data.map((product) => (
                <Link to='productDescription' key={product.id} className="linkDescriptio">
                      <div className="borderShodaow" onClick={() => getProductDescription(product)}>
                      <div className="card_content">
                          <div className="container_image">
                               <img src={product.image} className="image_card"/>
                          </div>
                          <div className="card_info">
                              <h3 className="card_description">
                                  Name Product
                               </h3>
                              <h2 className="titleProduct">{product.title}</h2>
                              <h2 className="card_price">{product.price} $</h2>   
                           </div>
                      </div> 
                  </div>  
                </Link>
                
           ))}   
       </div>   
      </>
  )
}
