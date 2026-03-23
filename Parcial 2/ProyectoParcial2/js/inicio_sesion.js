var formulario = document.querySelector("#formulario-acceso"); // Se llama a la ID del formulario

// EVENTO DE INICIO DE SESIÓN
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evitamos el comportamiento por defecto

    // Seleccionamos por ID el valor del correo y clave
    var correo_ingresado = document.querySelector("#correo").value;
    var clave_ingresada = document.querySelector("#clave").value;

    // Verificamos si el correo y clave son correctos
    var datos_en_memoria = localStorage.getItem("usuario_pony");

    // Si el correo y clave son correctos
    if (datos_en_memoria) {
        var usuario = JSON.parse(datos_en_memoria);

        if (correo_ingresado === usuario.correo && clave_ingresada === usuario.clave) {
            localStorage.setItem("sesion_activa", JSON.stringify(usuario)); // Guardamos el usuario en sesión saca la alerta y redirecciona al inicio.
            alert("¡Hola de nuevo, " + usuario.nombre + "!");
            window.location.href = "paginas/inicio/inicio.html";
        } else {
            alert("El correo o la contraseña son incorrectos.");
        }
    } else {
        alert("No hay ningún poni registrado aún.");
    }
});


// EVENTO PARA CAMBIAR EL TITULO DEL FORMULARIO (Apariencia entre Administrador y Usuario regular)
var selectorTipo = document.querySelector("#tipo-usuario");
var tituloForm = document.querySelector("#titulo-formulario");

// Seleccionamos el selector de tipo de usuario
selectorTipo.addEventListener("change", function() {
    // Si el tipo de usuario es "administrador" y si no es "visitante"
    if (this.value === "administrador") {
        tituloForm.textContent = "Acceso de Staff";
        tituloForm.style.color = "#db2777";
    } else {
        tituloForm.textContent = "Iniciar Sesión";
        tituloForm.style.color = "var(--marrón-chocolate)";
    }
});