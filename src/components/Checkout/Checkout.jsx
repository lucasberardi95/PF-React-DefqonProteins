import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {
    const {cart, vaciarCart, total} = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    //Funciones y validaciones: 

    const handleForm = (event) => {
        event.preventDefault();

        //Verifico que los campos esten completos:
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        //Valido que los campos del email coincidan 
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        //Objeto de la orden: 

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cart.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCart();
                    })
                    .catch((error) => {
                        console.error("Error al crear la orden", error);
                        setError("Se produjo un error al crear la orden");
                    })
            })
            .catch((error) => {
                console.error("Error al actualizar el stock", error);
                setError("Se produjo un error al actualizar el stock de los productos, vuelva más tarde");
            })
    }

    return (


        <div className="text-white">
            <h2 className="text-white">Checkout</h2>
            <form onSubmit={handleForm} className="formulario">
                {cart.map(producto => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p> Precio $: {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <p>Total Compra: {total} </p>
                <hr />

                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}> {error} </p>}
                <button className="btn btn-outline-light" type="submit"> Finalizar Compra </button>
            </form>
            {
                ordenId && (
                    <strong className="text-center">¡Gracias por tu compra! Tu número de Orden es {ordenId} </strong>
                )
            }
        </div>
    )
}

export default Checkout