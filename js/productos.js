// Array de productos
const productos = [
    { id: 1, nombre: 'Trapo de piso', precio: 655, img: '../assets/img/trapo.jpg', stock: 15 },
    { id: 2, nombre: 'Antigrasa Concentrado', precio: 1825, img: '../assets/img/antigrasa.jpg', stock: 4 },
    { id: 3, nombre: 'Desodorante Poet', precio: 1965, img: '../assets/img/desodorante-poet.jpg', stock: 10 },
    { id: 4, nombre: 'Detergente', precio: 990, img: '../assets/img/detergente.jpg', stock: 12 },
    { id: 5, nombre: 'Esponja Multiuso', precio: 655, img: '../assets/img/esponja.jpg', stock: 40 },
    { id: 6, nombre: 'Lavandina', precio: 1200, img: '../assets/img/lavandina.jpg', stock: 2 },
    { id: 7, nombre: 'Limpia vidrio', precio: 2455, img: '../assets/img/limpia-vidrio.jpg', stock: 8 },
    { id: 8, nombre: 'Esponja para vidrios', precio: 1860, img: '../assets/img/limpia-vidrio2.jpg', stock: 1 },
    { id: 9, nombre: 'Poet Lavanda', precio: 1655, img: '../assets/img/poet.jpg', stock: 12 },
    { id: 10, nombre: 'Virulana x 12u.', precio: 690, img: '../assets/img/virulana.jpg', stock: 9 },
];
//Array de compra de productos
let pedido = [];
let importePagar = 0; 


///Función para crear y añadir un producto al DOM
function agregarProducto(producto, parentElement) {
    let productDiv = document.createElement('div');
    productDiv.className = 'items';
    productDiv.id = producto.id;

    productDiv.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <div class="precio-stock">
            <p>$${producto.precio.toFixed(2)}</p>
            <p class="stock">Stock: ${producto.stock}</p>
        </div>
        <label class="cantidad" for="cantidad${producto.id}">Cantidad:</label>
        <input class="entrada" type="number" name="cantidad${producto.id}" min="0" step="1">
        <button class="btnAgregar">Agregar</button>
    `;
//añade el nuevo DOM
    parentElement.appendChild(productDiv);
};

// Seleccionar los elementos contenedores donde se añadirán los productos
let fila1 = document.getElementById('fila1');
let fila2 = document.getElementById('fila2');

// Añadir los productos a las filas, SLICE es un metodo que permite tomar parte del arreglo
productos.slice(0, 5).forEach(producto => agregarProducto(producto, fila1));
productos.slice(5).forEach(producto => agregarProducto(producto, fila2));

//Calcula el total a pagar sin tener en cuenta si hay descuento
function montoTotal(arregloPedido) {
    let importeTotal = 0;
     
    for (let i = 0; i < arregloPedido.length; i++) {
        importeTotal+= arregloPedido[i].cantProd * arregloPedido[i].precio;
    }
   
    return importeTotal;
}

//Calcula la cantidad de productos del carrito
function calcularCarrito(arregloPedido) {
    let nroTotal = 0;
    for (let j = 0; j < arregloPedido.length; j++) {
        nroTotal += arregloPedido[j].cantProd;
    }
    return nroTotal;
};

// calcula el stock actualizado creando una copia del arreglo original.
function calcularStock(productos, pedido) {
    let productosActualizados = [];
    for (let i = 0; i < productos.length; i++) {
        productosActualizados.push({ ...productos[i] });
    }

    for (let i = 0; i < pedido.length; i++) {
        const itemPedido = pedido[i];
        for (let j = 0; j < productosActualizados.length; j++) {
            if (productosActualizados[j].id === itemPedido.id) {
                productosActualizados[j].stock -= itemPedido.cantProd;
                break;
            }
        }
    }

    return productosActualizados;
}

//Agrega los productos seleccionados al carrito y al arreglo pedido
document.addEventListener('DOMContentLoaded', function () {
    let botonesAgregar = document.querySelectorAll('button');
    let cantidadCarrito = document.getElementById('cantidad-carrito');
    let totalItems = 0;
    

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function () {
            let itemDiv = this.closest('.items');
            let inputCantidad = itemDiv.querySelector('.entrada');
            let precioElemento = itemDiv.querySelector('.precio-stock p').textContent;
            let stockElemento = itemDiv.querySelector('.stock').textContent;
            let precio = parseFloat(precioElemento.replace('$', ''));
            let stock = parseInt(stockElemento.match(/\d+/)[0]);
            let cantidad = parseInt(inputCantidad.value);

            if ((cantidad <= stock) && (cantidad>=0)) {
                //si existe acualiza la cantidad
                let encontro = 0;
                for (let i = 0; i < pedido.length; i++) {
                    if (pedido[i].id === parseInt(itemDiv.id)) {
                        pedido[i].cantProd = cantidad;
                        encontro = 1;
                    };
                };

                // Añadir el producto al array de pedido sino existe
                if (encontro === 0) {

                    pedido.push({
                        id: parseInt(itemDiv.id),
                        nombre: itemDiv.querySelector('h2').textContent,
                        precio: precio,
                        cantProd: cantidad
                    });
                };
                // Actualizar el stock de productos
                calcularStock(productos, pedido);

                // Actualizar el stock en el etiqueda del DOM
                let productosActualizados = calcularStock(productos, pedido);
                for (let i = 0; i < productosActualizados.length; i++) {
                    const productoElemento = document.getElementById(productosActualizados[i].id);
                    productoElemento.querySelector('.stock').textContent = `Stock: ${productosActualizados[i].stock}`;
                };

                //calcula la cantidad de productos añadidos al carrito  
                totalItems = calcularCarrito(pedido);
                
                // Actualizar la cantidad en el carrito
                cantidadCarrito.textContent = totalItems;

                // Imprimir el contenido inicial del arreglo pedido en un alert 
                //esto es para probar, lo pone como texto
                //alert('Contenido inicial del arreglo pedido:\n' + JSON.stringify(pedido, null, 2));

                
            } else {
                alert('Cantidad no válida. Verifica el stock disponible.');
            };

            //importe a pagar
            importePagar = montoTotal(pedido)
        });
    });
});
