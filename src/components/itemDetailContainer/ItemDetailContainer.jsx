/** @format */

import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/dbFireBase.js";

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

   const getProduct = () => {
      const docRef = doc(db, 'products', productId)
      getDoc(docRef)
      .then((dataDb) => {
         const productDb = {id: dataDb.id, ...dataDb.data()}
         setProduct(productDb)
      })
   }

   useEffect(() => {
      getProduct()
   }, [productId]);

   return <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />;
};
