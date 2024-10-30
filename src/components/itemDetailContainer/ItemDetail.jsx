/** @format */

import "../itemDetailContainer/itemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
   return (
      <div className="itemDetailContainer">
         <div className="itemDetailImg">
            <img src={product.img} alt="" />
         </div>
         <div className="itemDetailDescription">
            <h2>{product.name}</h2>
            <p className="paragraphDescription">{product.description}</p>
            <div className="eventProduct">
               <p className="paragraphPrice">${product.price} USD</p>
               {hideItemCount === true ? (
                  <Link to={"/cart"}  className="paragraphPriceBlue">Terminar mi compra</Link>
               ) : (
                  <ItemCount stock={product.stock} addProduct={addProduct} />
               )}
            </div>
         </div>
      </div>
   );
};

export default ItemDetail;
