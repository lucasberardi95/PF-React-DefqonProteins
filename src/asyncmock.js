const productos = [
    { nombre: "Ena TRUEMADE", precio: 1500,stock: 10, id: '1', img: '/src/img/ena.jpg', idCat: '2' },
    { nombre: "Gold Standart 100%", precio: 2500,stock: 10, id: '2', img: '/src/img/gold.jpg', idCat: '2' },
    { nombre: "Star NUTRITION", precio: 1500,stock: 10, id: '3', img: '/src/img/star.jpg', idCat: '3' },
    { nombre: "Xtrenght Advanced", precio: 2000,stock: 5, id: '4', img: '/src/img/xtrenght.jpg', idCat: '3' },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}