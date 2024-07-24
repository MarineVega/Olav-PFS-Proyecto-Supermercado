const producto = {
    "nombre":"arroz",
    "cantidad":35,
    "precio":1500
}

console.log("Del producto " + producto.nombre + " tengo " + producto.cantidad + " unidades que valen c/u $ " + producto.precio);

// Arreglo de json
const product = [{
    "nombre":"arroz",
    "cantidad":35,
    "precio":1500
},
{
    "nombre":"fideos",
    "cantidad":40,
    "precio":1700
}
]

// Objeto
const productos = [{
    nombre:"arroz",
    cantidad:35,
    precio:1500
},
{
    nombre:"fideos",
    cantidad:40,
    precio:1700
}
]

console.log(productos)

// Agregar un producto
let yerba = {
    nombre:"yerba",
    cantidad:100,
    precio:2000
}

productos.push(yerba)

console.log(productos)

console.log(productos[2].cantidad);
productos[2].cantidad--

console.log(productos[2].cantidad);

document.querySelector("ul li").innerHTML = `El producto ${productos[0].nombre} tiene un stock de ${productos[0].cantidad}`;


