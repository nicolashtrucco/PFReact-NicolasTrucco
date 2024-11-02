/** @format */

import { useState } from "react";
import "../ItemCount/itemCount.scss";

const ItemCount = ({ stock, addProduct }) => {
   let [counter, setCounter] = useState(1);

   const handleIncrease = () => {
      if (counter < stock) {
         setCounter(counter + 1);
      }
   };

   const handleDecrease = () => {
      if (counter > 1) {
         setCounter(counter - 1);
      }
   };

   return (
      <div className="container-count">
         <div className="count-Increase-Decrease">
            <button className="decrease" onClick={handleDecrease}>
               -
            </button>
            <p>{counter}</p>
            <button className="increase" onClick={handleIncrease}>
               +
            </button>
         </div>

         <div>
            <button className="button-Add-Cart">
               <p onClick={() => addProduct(counter)}>Agregar al Carrito</p>
            </button>
         </div>
      </div>
   );
};

export default ItemCount;
