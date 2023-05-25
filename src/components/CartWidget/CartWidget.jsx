import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = '/src/img/imgcarritoprote-removebg-preview.png'


    return (
        <div>
            <img className='imgCarrito' src='/src/img/imgcarritoprote-removebg-preview.png' alt="Carrito" />
            <strong> 3 </strong>
        </div>
    )
}

export default CartWidget
