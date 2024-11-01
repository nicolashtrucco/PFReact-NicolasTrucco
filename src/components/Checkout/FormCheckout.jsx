import '../Checkout/formCheckout.scss'

const FormCheckout = ( {handleChangeInput, handleSubmitForm, dataForm} ) => {
  return (
    
    <form onSubmit={handleSubmitForm}>
            <h1>Iniciar Sesión</h1>

            <label>Nombre completo</label>
            <input type="text" name='fullname' value={dataForm.fullname} onChange={handleChangeInput}/>

            <label>Numero de Tel.</label>
            <input type="number" name='phone' value={dataForm.phone} onChange={handleChangeInput}/>

            <label>Correo electrónico</label>
            <input type="text" name='email' value={dataForm.email} onChange={handleChangeInput}/>

            <label>Confirmar correo electrónico</label>
            <input type="email" name='email' value={dataForm.email} onChange={handleChangeInput}/>
            <p className="emailMatch">Ups, los correos no coinciden.</p>


            <button type="submit">Ingresar</button>

            <h2>Olvidaste tu contraseña? <span>Recuperar.</span></h2>
        </form>
    
  )
}

export default FormCheckout