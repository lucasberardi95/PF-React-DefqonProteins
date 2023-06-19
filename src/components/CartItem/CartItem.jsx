import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CartContext);
    return (
        <div>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: {item.precio} </p>
            <button className='btn btn-outline-light' onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem