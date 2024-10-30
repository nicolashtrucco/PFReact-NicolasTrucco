/** @format */
import "../navBar/cartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
const {totalQuantity} = useContext(CartContext)
const total = totalQuantity()

   return (  
      <Link to='/cart' className="cartContainer">
         <div className="cartBtn">
            <i className="bi bi-cart"></i> {/*Icono carrito*/}
            <span className="number">{total >= 1 && total}</span>
         </div>
      </Link>
      
   );
};

export default CartWidget;
