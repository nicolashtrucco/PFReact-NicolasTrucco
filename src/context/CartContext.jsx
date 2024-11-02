/** @format */

import { createContext, useState } from "react";

//*Creamos el contexto
const CartContext = createContext();

const CartProvide = ({ children }) => {
   const [cart, setCart] = useState([]);

   //*Funcion agregar productos al carrito
   const addProductInCart = (newProduct) => {
      const condition = isInCart(newProduct.id);

      if (condition) {
         const newCart = cart.map((productCart) => {
            if (productCart.id === newProduct.id) {
               const newQuantity = productCart.quantity + newProduct.quantity;

               if (newQuantity > productCart.stock) {
                  alert("Estas superando el stock actual");
                  return productCart;
               } else {
                  // Utilizamos "newQuantity" en lugar de recalcular la cantidad
                  return { ...productCart, quantity: newQuantity };
               }
            } else {
               return productCart;
            }
         });

         setCart(newCart);
      } else {
         setCart([...cart, newProduct]);
      }
   };

   //* Funcion detectar productos duplicados
   const isInCart = (idProduct) => {
      return cart.some((productCart) => productCart.id === idProduct);
   };

   //* Funcion calcular la cantidad total de productos
   const totalQuantity = () => {
      const quantity = cart.reduce(
         (total, productCart) => total + productCart.quantity,
         0
      );
      return quantity;
   };

   //* Funcion calcular precio TOTAL
   const totalPrice = () => {
      const price = cart.reduce(
         (total, productCart) =>
            total + productCart.price * productCart.quantity,
         0
      );
      return price;
   };

   //* Funcion borrar items por id
   const deleteProductInCart = (idProduct) => {
      const productFilter = cart.filter(
         (productCart) => productCart.id !== idProduct
      );
      setCart(productFilter);
   };

   //* Funcion borrar todos los items
   const DeleteCart = () => {
      setCart([]);
   };

   return (
      <CartContext.Provider
         value={{
            cart,
            addProductInCart,
            totalQuantity,
            totalPrice,
            deleteProductInCart,
            DeleteCart,
            isInCart,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};

export { CartContext, CartProvide };
