import { useState, useEffect } from "react"
import { getProduct } from "../../data/data.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
  const { productId } = useParams()
    
    useEffect( () => {
        getProduct(productId)
        .then((data) => setProduct(data))
    }, [productId])

  return (
    <ItemDetail product={product}/>
  )
}
