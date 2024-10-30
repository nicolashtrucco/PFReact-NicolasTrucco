/** @format */

import { useState, useEffect } from "react";
import { getProduct } from "../../data/data.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

export const ItemDetailContainer = () => {
   const [product, setProduct] = useState({});
   const { addProductInCart } = useContext(CartContext);
   const { productId } = useParams();
   const [hideItemCount, setHideItemCount] = useState(false)

   const addProduct = (counter) => {
      const productCart = { ...product, quantity: counter };
      addProductInCart(productCart)
      //Estado mostrar/ocultar ItemCount
      setHideItemCount(true)
   };

   useEffect(() => {
      getProduct(productId).then((data) => setProduct(data));
   }, [productId]);

   return <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />;
};
