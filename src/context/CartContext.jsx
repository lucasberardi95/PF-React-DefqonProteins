import { useState, createContext } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    console.log(cart);

    //Funcion para agregar productos al carro: 
    const agregarProducto = (item, cantidad) => {
        
        const productoExistente = cart.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCart(prev => [...prev, { item, cantidad }]);
        } else {
            const updatedCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
        }
    }

    //Funcion para eliminar productos del carro: 

    const eliminarProducto = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id);
        setCart(updatedCart);
    }

    //Funcion para vaciar el carro de compras:
    
    const vaciarCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, agregarProducto, eliminarProducto, vaciarCart }}>
            {children}

        </CartContext.Provider>
    )
}