import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import "../itemListContainer/itemListContainer.scss";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/dbFireBase.js";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()


  const getProducts = () => {
    const collectionName = collection(db, 'products')
    getDocs(collectionName)
    .then((dataDb)=> {
      const productsDb = dataDb.docs.map((productDb)=>{
        return {id: productDb.id, ...productDb.data()}
      })

      setProducts(productsDb)
      
    })
  }

  const getProductsByCategory = () => {
    const collectionName = collection(db, 'products')
    const q = query(collectionName, where('category', '==', categoryId))
    getDocs(q)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb)=>{
          return{id: productDb.id, ...productDb.data()}
        })
        setProducts(productsDb)
      })
  }
  useEffect(() => {
    if(categoryId){
      getProductsByCategory()
    } else {
      getProducts()
    }
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
