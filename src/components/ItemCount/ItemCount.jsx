import { Link } from 'react-router-dom';
import { useState } from 'react'
const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);
    
    const incrementar =()=>{
        if(contador < stock){
        setContador(contador + 1);
        }  
    }
    const disminuir =()=>{
        if(contador > inicial){
        setContador(contador - 1);
        }   
    }
    return (
        <>
        <div>
            <button className='btn btn-dark' onClick={disminuir}> - </button>
            <p> {contador} </p>
            <button className='btn btn-dark' onClick={incrementar}> + </button>
        </div>
        <button className='btn btn-dark' onClick={()=>funcionAgregar(contador)}> Agregar al carrito </button>
        <Link to="/" className='btn btn-dark'> Seguir Comprando</Link>
        </>
        
    )
}

export default ItemCount
