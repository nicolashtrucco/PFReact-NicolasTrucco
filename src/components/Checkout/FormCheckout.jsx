/** @format */

import "../Checkout/formCheckout.scss";

const FormCheckout = ({
   handleChangeInput,
   handleSubmitForm,
   dataForm,
   emailMatch,
}) => {
   return (
      <form onSubmit={handleSubmitForm}>
         <h1>Comprar</h1>

         <label>Nombre completo</label>
         <input
            type="text"
            name="fullname"
            value={dataForm.fullname}
            onChange={handleChangeInput}
            required
         />

         <label>Numero de Tel.</label>
         <input
            type="number"
            name="phone"
            value={dataForm.phone}
            onChange={handleChangeInput}
            required
         />

         <label>Correo electrónico</label>
         <input
            type="text"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
            required
         />

         <label>Confirmar correo electrónico</label>
         <input
            type="email"
            name="repeatEmail"
            value={dataForm.repeatEmail}
            onChange={handleChangeInput}
            required
         />
         {emailMatch && (
            <p className="emailMatch">Ups, los correos no coinciden.</p>
         )}

         <button type="submit">Comprar</button>
      </form>
   );
};

export default FormCheckout;
