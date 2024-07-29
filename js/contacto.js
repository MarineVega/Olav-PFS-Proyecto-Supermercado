function esValidoEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function mostrarMensajeError(elementId, mensaje) {
    var errorElemento = document.getElementById(elementId);    
    errorElemento.innerText = mensaje;
}

function resetMesajesError(){
    // levanto todos los elementos que tengan la clase mensaje-error
    let errorElementos = document.querySelectorAll('.mensaje-error');
    errorElementos.forEach(function(elemento) {
        elemento.innerText = "";
    });
}

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");

let btnEnviar = document.getElementById("enviar");

let infoContacto = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); //previene la acción del form de actualizar la página
    
    // Reseteo los mensajes de error
    resetMesajesError();
    
    let esValido = true;
    
    // Valido los campos
    if (nombre.value === "") {
        mostrarMensajeError("nombreError", "Por favor ingrese nombre.");        
        esValido = false;
    }

    if (apellido.value === "") {
        mostrarMensajeError("apellidoError", "Por favor ingrese apellido.");
        esValido = false;
    }

    if (!esValidoEmail(email.value)) {
        mostrarMensajeError("emailError", "Por favor ingrese un correo electrónico válido.");
        esValido = false;
    }
   
    if ((telefono.value.length < 10) || (telefono.value.length > 12)) {
        mostrarMensajeError("telefonoError", "El teléfono debe tener entre 10 y 12 dígitos.");
        esValido = false;
    }

    if (consulta.value === "") {
        mostrarMensajeError("consultaError", "Por favor ingrese su consulta.");
        esValido = false;
    }

    if (esValido) {
        infoContacto[0] = nombre.value;
        infoContacto[1] = apellido.value;
        infoContacto[2] = email.value;
        infoContacto[3] = telefono.value;
        infoContacto[4] = consulta.value;
    
        let blob = new Blob([infoContacto], { type: "text/plain;charset=utf-8"});
    
        saveAs(blob, "contacto.txt");     
    }

})