import { Link } from "react-router-dom";

const Item = ({ product }) => {
   return (
       <div className="itemProduct">
           <div className="image">
               <img src={product.img} alt={product.name} />
           </div>
           <div className="itemPriceName">
               <h3>{product.name}</h3>
               <p>Precio: {product.price} USD</p>
           </div>
           <p className="description">{product.description}</p>
           <div className="itemFooter"> 
               <Link to={`/movie/${product.id}`}><h6 className="readMore">Ver detalles</h6></Link>
               <div className="itemButton">
               <Link to={`/movie/${product.id}`}><button>{product.event}</button></Link>
               </div>
           </div>
       </div>
   );
};

export default Item;

 
