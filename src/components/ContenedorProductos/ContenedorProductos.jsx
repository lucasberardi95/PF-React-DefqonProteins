import Producto from "../Producto/Producto"

const ContenedorProductos = () => {
    const props = {
        nombre: 'Pan',
        precio: 600
    };
    return (
        <div>
            <Producto nombre='Arroz' precio={100}/>
            <Producto nombre='Atun' precio={800}/>
            <Producto { ...props}/>
        </div>
    )
}

export default ContenedorProductos