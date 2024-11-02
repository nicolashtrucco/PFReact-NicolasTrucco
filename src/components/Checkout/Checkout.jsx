/** @format */

import { useState, useContext } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import db from "../../db/dbFireBase.js";
import { Link } from "react-router-dom";
import "../Checkout/checkout.scss";

const Checkout = () => {
   const [dataForm, setDataForm] = useState({
      fullname: "",
      phone: "",
      email: "",
      repeatEmail: "",
   });

   const [orderId, setOrderId] = useState(null);
   const { cart, totalPrice, DeleteCart } = useContext(CartContext);

   const [emailMatch, setEmailMatch] = useState(false);

   const handleChangeInput = (event) => {
      setDataForm({ ...dataForm, [event.target.name]: event.target.value });
   };

   const handleSubmitForm = (event) => {
      event.preventDefault();
      const order = {
         buyer: { ...dataForm },
         products: [...cart],
         total: totalPrice(),
         date: Timestamp.now(),
      };

      if (dataForm.email === dataForm.repeatEmail) {
         uploadOrder(order);
         setEmailMatch(false);
      } else {
         setEmailMatch(true);
      }
   };

   const uploadOrder = (newOrder) => {
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, newOrder)
         .then((response) => {
            setOrderId(response.id);
         })
         .finally(() => {
            DeleteCart();
         });
   };

   return (
      <div>
         {orderId ? (
            <div>
               <h2>Orden enviada con exito</h2>
               <p>
                  Id de su orden: <span>{orderId}</span>
               </p>
               <Link to="/" className="checkoutHome">
                  Volver al Inicio
               </Link>
            </div>
         ) : (
            <FormCheckout
               handleChangeInput={handleChangeInput}
               handleSubmitForm={handleSubmitForm}
               dataForm={dataForm}
               emailMatch={emailMatch}
            />
         )}
      </div>
   );
};

export default Checkout;
