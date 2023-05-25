const productos = [
    { nombre: "Ena TRUEMADE", precio: 1500, id: 1, img: '/src/img/ena.jpg'},
    { nombre: "Gold Standart 100%", precio: 2500, id: 2, img: '/src/img/gold.jpg'},
    { nombre: "Star NUTRITION", precio: 1500, id: 3, img: '/src/img/star.jpg'},
    { nombre: "Xtrenght Advanced", precio: 2000, id: 4, img: '/src/img/xtrenght.jpg'},
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
