import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './cart.scss'

const CartContainer = () => {
    const {cart, totalPrice, deleteProductInCart} = useContext(CartContext)

  return (
    <div>
        <h1>Tú carrito.</h1>
        {
            cart.map((productCart) => (
                <div key={productCart.id}>
                    <img src={productCart.img} alt="" />
                    <p>{productCart.name}</p>
                    <p>precio c/u: {productCart.price}</p>
                    <p>cantidad: {productCart.quantity}</p>
                    <p>total: {productCart.price * productCart.quantity} </p>
                    <button onClick={() => deleteProductInCart(productCart.id)}>X</button>
                </div>

            ))
        }

        <div>
            
            <h2>Precio Total: {totalPrice()}</h2>

        </div>
    </div>
  )
}

export default CartContainer


