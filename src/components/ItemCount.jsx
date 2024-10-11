import { useState } from "react"
import '../components/itemCount.scss'

const ItemCount = () => {

  let [counter, setCounter] = useState(1)

  const increase = ()=> {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)

    if (counter <= 1) {
      setCounter(counter = 1)
    }
  }



  return (
    <div className="container-count">

      <div className="count-Increase-Decrease">
        
        <button className="increase" onClick={increase}>+</button>
        <p>{counter}</p>
        <button className="decrease" onClick={decrease}>-</button>
      </div>

      <div>
        <button className="button-Add-Cart"> 
          <p>Agregar al Carrito</p>
        </button>
      </div>

    </div>
  )
}

export default ItemCount