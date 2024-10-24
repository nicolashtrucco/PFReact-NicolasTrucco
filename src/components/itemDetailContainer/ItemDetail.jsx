import '../itemDetailContainer/itemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product, addProduct}) => {
  return (
    <div className="itemDetailContainer">
    
        
        <div className='itemDetailImg'>
          <img src={product.img} alt="" />
        </div>
        <div className='itemDetailDescription'>
          <h2 >{product.name}</h2>
          <p className="paragraphDescription">{product.description}</p>
          <div className='eventProduct'>
            <p className="paragraphPrice">${product.price} USD</p>
          <ItemCount stock={product.stock} addProduct={addProduct}/>
          </div>
            

        </div>

     

    </div>
  )
}

export default ItemDetail