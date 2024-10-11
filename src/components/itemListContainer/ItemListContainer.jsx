import { useState, useEffect } from "react";
import { getProducts } from "../../data/data.js";
import ItemList from "./ItemList.jsx";
import "../itemListContainer/itemListContainer.scss";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()


  useEffect(() => {
    getProducts()
      .then((data) => {
        if(categoryId){
          const filterProducts = data.filter( (product) => product.category === categoryId )
          setProducts(filterProducts)
        } else{
          setProducts(data)
        }
        })
      .catch((err) => console.log(err));
  }, [categoryId])

  return (
    <>
      <div className="itemListContainerMajor">
      </div>

      <div className="itemListContainer">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
