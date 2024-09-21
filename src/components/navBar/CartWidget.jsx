/** @format */
import "../navBar/cartWidget.scss";

const CartWidget = () => {
   return (
      <div className="cartContainer">
         <div className="cartBtn">
            <i className="bi bi-cart"></i> {/*Icono carrito*/}
            <span className="number">0</span>
         </div>
      </div>
   );
};

export default CartWidget;
