import '../itemDetailContainer/itemDetail.scss'

const ItemDetail = ({product}) => {
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
            <button className='buttonEvent'>{product.event}</button>

          </div>
        </div>

     

    </div>
  )
}

export default ItemDetail