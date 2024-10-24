/** @format */
import "../navBar/cartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
const {totalQuantity} = useContext(CartContext)

   return (  
      <Link to='/cart' className="cartContainer">
         <div className="cartBtn">
            <i className="bi bi-cart"></i> {/*Icono carrito*/}
            <span className="number">{totalQuantity()}</span>
         </div>
      </Link>
      
   );
};

export default CartWidget;
