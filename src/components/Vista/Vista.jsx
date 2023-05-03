import './Vista.css'
import { useState } from 'react'
export const Vista = () => {
    const [ModoOscuro, SetModoOscuro] = useState(false);

    const cambiarModo =()=>{
        SetModoOscuro(!ModoOscuro)
    }

    const estilo = ModoOscuro ? 'oscuro' : 'claro';

    return (
        <div className={estilo}>
            <button onClick={ cambiarModo }> {ModoOscuro ? 'oscuro' : 'claro'}</button>
            <h2>Componente Vista</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, enim!</p>
        </div>
    )
}
