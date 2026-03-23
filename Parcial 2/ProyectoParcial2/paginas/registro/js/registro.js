// Usamos querySelector con el prefijo # para IDs
var forma_registro = document.querySelector("#formulario-registro");

// EVENTO DE REGISTRO

forma_registro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Seleccionamos por ID usando la sintaxis de CSS
    var nombre = document.querySelector("#nombre_completo").value;
    var correo = document.querySelector("#correo_registro").value;
    var clave = document.querySelector("#clave_registro").value;
    var confirmacion = document.querySelector("#clave_verificacion").value;
    var es_admin = document.querySelector("#es_administrador").checked; // Devuelve true si la casilla está marcada
    var preview_img = document.querySelector("#contenedor-foto img");
    var foto_data = preview_img ? preview_img.src : ""; // Si preview_img es null, foto_data es "" para evitar errores

    // Verificamos si las claves son iguales
    if (clave !== confirmacion) {
        alert("¡Las contraseñas no coinciden! Inténtalo de nuevo.");
        return;
    }

    // Guardamos los datos en el localStorage
    var datos_usuario = {
        "nombre": nombre,
        "correo": correo,
        "clave": clave,
        "admin": es_admin,
        "foto": foto_data
    };

    // Guardamos los datos en el localStorage convirtiendo el objeto JSON en una cadena
    localStorage.setItem("usuario_pony", JSON.stringify(datos_usuario));
    alert("¡Registro exitoso! Bienvenido, " + nombre);
    window.location.href = "../../index.html";
});

// También para el evento de la foto
document.querySelector("#foto_perfil").addEventListener("change", function(e) {
    var lector = new FileReader(); // Creamos un objeto FileReader
    // Cuando se lee el archivo
    lector.onload = function() {
        var preview = document.querySelector("#contenedor-foto");
        preview.innerHTML = "<img src='" + lector.result + "'>";
    };
    lector.readAsDataURL(e.target.files[0]); // Agarra el archivo en posicion cero como URL.
});

