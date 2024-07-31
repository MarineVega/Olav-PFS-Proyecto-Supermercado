const btnAbrirCarrito = document.querySelector("#btnAbrirCarrito");
const btnCerrarCarrito = document.querySelector("#btnCerrarCarrito");
const modalCarrito = document.querySelector("#modalCarrito");

//modalCarrito.reset();

btnAbrirCarrito.addEventListener("click",() => {    
    modalCarrito.showModal();
    pedido.slice(0, 10).forEach(producto => mostrarProducto(producto, filaCarrito));
});

// modalCarrito.addEventListener("hidden", () => {    
//     const formulario = modalCarrito.find('div');
//     console.log(formulario);
//     formulario[0].reset();
// });

btnCerrarCarrito.addEventListener("click",() => {    
    modalCarrito.close();
});


function mostrarProducto(producto, parentElement) {
    let carritoDiv = document.createElement('div');
    carritoDiv.className = 'itemsCarrito';
    carritoDiv.id = producto.id;
    
    carritoDiv.innerHTML = `
    <p>${producto.nombre} Unitario $ ${producto.precio.toFixed(0)} Cant: ${producto.cantProd.toFixed(0)} Total $ ${producto.cantProd * producto.precio} </p>
    `;
    //añade el nuevo DOM
    parentElement.appendChild(carritoDiv);

};
