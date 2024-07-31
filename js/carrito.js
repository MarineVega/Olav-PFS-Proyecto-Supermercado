const btnAbrirCarrito = document.querySelector("#btnAbrirCarrito");
const btnCerrarCarrito = document.querySelector("#btnCerrarCarrito");
const modalCarrito = document.querySelector("#modalCarrito");


btnAbrirCarrito.addEventListener("click",() => {    
    modalCarrito.showModal();
    filaCarrito.innerHTML = "";
    pedido.slice(0, 10).forEach(producto => mostrarProducto(producto, filaCarrito));
    
    // Muestro el total de la compra
    totalCarrito.innerHTML = "";

    mostrarTotal(totalCarrito);
    
});

btnCerrarCarrito.addEventListener("click",() => {    
    modalCarrito.close();
});


function mostrarProducto(producto, parentElement) {
    let carritoDiv = document.createElement('div');
    carritoDiv.className = 'itemsCarrito';
    carritoDiv.id = producto.id;
    
    carritoDiv.innerHTML = `
    <ul>${producto.nombre} 
        <li>Unitario $ ${producto.precio.toFixed(0)} </li>
        <li>Cantidad: ${producto.cantProd.toFixed(0)} </li>
        <li>Total $ ${producto.cantProd * producto.precio} </li>        
    </ul>
    `;
    //añade el nuevo DOM
    parentElement.appendChild(carritoDiv);
};

function mostrarTotal(parentElement) {
    let carritoTotalDiv = document.createElement('div');

    // Chequeo el total de la compra para aplicar el descuento del 30% si corresponde
    if (importePagar > 10000) {
        let importeConDescuento = importePagar * 0.7
        
        carritoTotalDiv.innerHTML = `<p class='tachar'> Total $ ${importePagar} </p>
        <p class='importePagar'>Total con dto $ ${importeConDescuento} </p>`;
    } else {
        carritoTotalDiv.innerHTML = `<p class='importePagar'> $ ${importePagar} </p>`;
    };

    parentElement.appendChild(carritoTotalDiv);
};
