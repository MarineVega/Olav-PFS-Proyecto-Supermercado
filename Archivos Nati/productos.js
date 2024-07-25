/*
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
*/


document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregar = document.querySelectorAll('button');
    const cantidadCarrito = document.getElementById('cantidad-carrito');
    let totalimporte=0;
    let totalItems = 0;
    let importe=0;
    let cantidad=0;
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function() {
            inputCantidad = this.closest('.items').querySelector('.entrada');
            importe=this.closest('.items').querySelector('p').textContent;
            cantidad = parseInt(inputCantidad.value);
            
            // aca quizas podriamos mejorarlo agregando en un array el producto con la cantidad 
            // y si es el mismo que le modifican la cantidad buscarlo y colocarle la correcta.
           
            // Eliminar el signo '$' y convertir a número y saca el total
            importe = parseFloat(importe.replace('$', ''))*cantidad;
            totalItems += cantidad;
            totalimporte +=importe;
            cantidadCarrito.textContent = totalItems;
            alert(totalimporte)
        });
    });
});