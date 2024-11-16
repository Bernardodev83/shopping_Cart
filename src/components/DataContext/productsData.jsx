import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const productsData = createContext();

const ProductsContext = ({ children }) => {

    const [data, setData] = useState([]);
    const [descriptionProduct, setDescriptionProduct] = useState([])
    const [addCart, setAddCart] = useState([])
    const [count, setCount] = useState(null)
    
    useEffect(() => {
        axios.get('dataJson.json')
        .then(response => setData(response.data))
    },[])

    return (
        <productsData.Provider value={{data, descriptionProduct, setDescriptionProduct, addCart, setAddCart, count, setCount}}>
            {children}
        </productsData.Provider>
    )
    
}

export default ProductsContext