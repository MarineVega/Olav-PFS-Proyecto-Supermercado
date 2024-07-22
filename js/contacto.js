let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");
let btnEnviar = document.getElementById("enviar");
let infoContacto = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); //previene la acción del form de actualizar la página

    infoContacto[0] = nombre.value;
    infoContacto[1] = apellido.value;
    infoContacto[2] = email.value;
    infoContacto[3] = telefono.value;
    infoContacto[4] = consulta.value;

    console.log(`Su nombre es ${infoContacto[0]}`);

    let blob = new Blob([infoContacto], { type: "text/plain;charset=utf-8"});

    saveAs(blob, "contacto.txt");
})