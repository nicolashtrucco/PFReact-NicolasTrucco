import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './cart.scss'
import { Link } from "react-router-dom"

const CartContainer = () => {
    const { cart, totalPrice, deleteProductInCart, DeleteCart } = useContext(CartContext);
  
    if (cart.length === 0) {
      return (
        <div className="cart-container ">
          <h2 className="emptyH2">No hay productos en el carrito.</h2>
          <Link to={'/'} className="emptyLink">Volver al inicio</Link>
        </div>
      );
    }
  
    return (
      <div className="cart-container">
        <h1>Tú carrito.</h1>
        {
          cart.map((productCart) => (
            <div className="cart-product" key={productCart.id}>
              <img src={productCart.img} alt={productCart.name} />
              <p>{productCart.name}</p>
              <p>Precio c/u: {productCart.price}</p>
              <p>Cantidad: {productCart.quantity}</p>
              <p>Total: {productCart.price * productCart.quantity} </p>
              <button onClick={() => deleteProductInCart(productCart.id)}>X</button>
            </div>
          ))
        }
  
        <div className="cart-summary">
          <div>
            <h2>Precio Total: {totalPrice()}</h2>
          </div>
          <div className="delete-cart">
            <button onClick={() => DeleteCart()}>Borrar</button>
          </div>
        </div>
      </div>
    );
  }
  

export default CartContainer


