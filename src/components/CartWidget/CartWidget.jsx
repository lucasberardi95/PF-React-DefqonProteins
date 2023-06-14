import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, useSearchParams } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);

    const imgCarrito = '/src/img/imgcarritoprote-removebg-preview.png'

    return (
        <div>
            <Link to='/cart'>
                <img className='imgCarrito' src='/src/img/imgcarritoprote-removebg-preview.png' alt="Carrito" />
                {
                    cantidadTotal > 0 && <span> {cantidadTotal} </span>
                }
            </Link>
        </div>
    )
}

export default CartWidget
