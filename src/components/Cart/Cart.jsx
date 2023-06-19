import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, vaciarCart, total, cantidadTotal} = useContext(CartContext);

    if(cantidadTotal === 0) {
        return (
            <>
            <h2 className="text-white"> Carro vacio </h2>
            <Link className="btn btn-outline-light" to='/'> Seguir comprando </Link></>
        )
    }
    return (
        <div className="text-white" >
            {cart.map(producto => <CartItem key={producto.item.id} {...producto}/>)}
            <h3> Total: ${total} </h3>
            <h3> Cantidad total: {cantidadTotal} </h3>
            <button className="btn btn-outline-light" onClick={vaciarCart}> Vaciar carro de compras </button>
            <Link className="btn btn-outline-light" to='/checkout'> Finalizar compra </Link>
        </div>
    )
}

export default Cart