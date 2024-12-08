import Item from "./Item";

const ItemList = ({ products}) => {
  

  return (
    <div className="itemListHeader">
      <h1>Novedades</h1>
      <div className="itemProducts">
        {products.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

