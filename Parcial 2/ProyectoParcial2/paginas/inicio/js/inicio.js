// =========================================
//  SELECTORES GLOBALES
// =========================================
var saludo_usuario = document.querySelector("#saludo-usuario");
var foto_usuario_nav = document.querySelector("#foto-usuario-nav");
var seccion_admin_boton = document.querySelector("#seccion-subir");
var seccion_formulario_admin = document.querySelector("#seccion-formulario-nuevo");
var btn_toggle_form = document.querySelector("#btn-toggle-form");
var entrada_json = document.querySelector("#archivo-json");
var contenedor_recetas = document.querySelector("#contenedor-recetas");
var btn_salir = document.querySelector("#btn-cerrar-sesion");
var forma_nuevo_postre = document.querySelector("#forma-nuevo-postre");

// Selectores para Favoritos (Visitante)
var btn_ver_favoritos = document.querySelector("#btn-ver-favoritos");
var seccion_favoritos = document.querySelector("#seccion-favoritos");
var contenedor_favoritos = document.querySelector("#contenedor-favoritos");
var btn_cerrar_favoritos = document.querySelector("#btn-cerrar-favoritos");

// =========================================
//  CONTROL DE SESION
// =========================================
var datos_sesion = JSON.parse(localStorage.getItem("sesion_activa"));

if (!datos_sesion) {
    window.location.href = "../../index.html";
} else {
    saludo_usuario.textContent = "¡Hola, " + datos_sesion.nombre + "!";
    
    if (datos_sesion.foto) {
        foto_usuario_nav.src = datos_sesion.foto;
    }
// mostrar botones de administrador
    if (datos_sesion.admin === true) {
        seccion_admin_boton.style.display = "inline-block";
        btn_toggle_form.style.display = "inline-block";
        if(btn_ver_favoritos) btn_ver_favoritos.style.display = "none";
    } else {
        if(btn_ver_favoritos) btn_ver_favoritos.style.display = "inline-block";
    }
}

// =========================================
//  CARGA INICIAL DE DATOS
// =========================================
var lista_actual = [];
var catalogo_previo = localStorage.getItem("catalogo_reposteria");

if (catalogo_previo) {
    lista_actual = JSON.parse(catalogo_previo);
    mostrarRecetas(lista_actual);
}

// =========================================
// MOSTRAR RECETAS 
// =========================================
function mostrarRecetas(lista_a_pintar) {
    contenedor_recetas.innerHTML = "";
    
    if (lista_a_pintar.length === 0) {
        contenedor_recetas.innerHTML = "<p class='mensaje-vacio'>La vitrina está vacía... ¡Hornea algo nuevo! </p>";
        return;
    }

    lista_a_pintar.forEach(function(postre) { //se usa for each en lugar de for para no perder el this
        var html_botones = "";

        if (datos_sesion.admin === true) {
            html_botones = "<button class='btn-accion btn-eliminar' onclick='eliminarPostre(" + postre.id + ")'> Eliminar</button>";
        } else {
            html_botones = "<button class='btn-accion btn-guardar' onclick='guardarFavorito(" + postre.id + ")'> Guardar</button>";
        }

        var html_tarjeta = "<div class='tarjeta-postre' style='border-color: " + postre.color_tema + "'>" +
                "<img src='js/" + postre.imagen_url + "' class='imagen-postre' alt='" + postre.nombre_producto + "'>" +
                "<div class='info-postre'>" +
                    "<span class='categoria-tag' style='background-color: " + postre.color_tema + "'>" + postre.categoria + "</span>" +
                    "<h3 style='color: " + postre.color_tema + "'>" + postre.nombre_producto + "</h3>" +
                    "<p>" + postre.descripcion + "</p>" +
                    "<div class='detalles-inferiores'>" +
                        "<strong>Precio: $" + postre.precio + "</strong>" +
                        "<br><small>Por: " + postre.repostero + "</small>" +
                    "</div>" +
                    "<div class='contenedor-botones-tarjeta'>" + html_botones + "</div>" +
                "</div>" +
            "</div>";
        
        contenedor_recetas.innerHTML += html_tarjeta;
    });
}

// =========================================
//  ADMINISTRADOR
// =========================================
window.eliminarPostre = function(id_a_borrar) {
    if (confirm("¿Estás seguro de que quieres quitar esta delicia de la vitrina?")) {
        lista_actual = lista_actual.filter(function(postre) {
            return postre.id !== id_a_borrar; // return true si se cumple la condicion
        });
        localStorage.setItem("catalogo_reposteria", JSON.stringify(lista_actual));
        mostrarRecetas(lista_actual);
    }
};

btn_toggle_form.addEventListener("click", function() {
    if (seccion_formulario_admin.style.display === "none") {
        seccion_formulario_admin.style.display = "block";
        btn_toggle_form.textContent = "✕ Cerrar Formulario";
    } else {
        seccion_formulario_admin.style.display = "none";
        btn_toggle_form.textContent = "Nuevo Postre";
    }
});

forma_nuevo_postre.addEventListener("submit", function(evento) {
    evento.preventDefault();
    var nuevo_objeto = {
        "id": Date.now(), // date.now es un timestamp
        "nombre_producto": document.querySelector("#nuevo-nombre").value,
        "categoria": document.querySelector("#nueva-categoria").value,
        "precio": document.querySelector("#nuevo-precio").value,
        "repostero": document.querySelector("#nuevo-repostero").value,
        "descripcion": document.querySelector("#nueva-descripcion").value,
        "color_tema": document.querySelector("#nuevo-color").value,
        "imagen_url": document.querySelector("#nueva-url").value || "img/default.jpg"
    };
    lista_actual.push(nuevo_objeto);
    localStorage.setItem("catalogo_reposteria", JSON.stringify(lista_actual));
    mostrarRecetas(lista_actual);
    forma_nuevo_postre.reset(); // se resetea el formulario
    alert("¡Postre añadido con éxito!");
});

// =========================================
// LOGICA DE VISITANTE 
// =========================================
var clave_favs = "favs_" + datos_sesion.correo;

window.guardarFavorito = function(id) {
    var favoritos = JSON.parse(localStorage.getItem(clave_favs)) || [];
    var postre = lista_actual.find(function(p) { return p.id === id; }); //se usa find en lugar de filter para no perder el this
    var ya_existe = favoritos.some(function(p) { return p.id === id; });

    if (!ya_existe) {
        favoritos.push(postre);
        localStorage.setItem(clave_favs, JSON.stringify(favoritos));
        alert("¡Guardado en tus favoritos!");
    } else {
        alert("¡Esta delicia ya está en tu lista!");
    }
};


// Esta funcion se encarga de mostrar los favoritos
function mostrarFavoritos() {
    var favoritos = JSON.parse(localStorage.getItem(clave_favs)) || [];
    contenedor_favoritos.innerHTML = ""; // se limpia el contenedor
    
    if (favoritos.length === 0) {
        contenedor_favoritos.innerHTML = "<p>Aún no tienes favoritos guardados.</p>";
    } else {
        favoritos.forEach(function(postre) {
            var html = "<div class='tarjeta-postre' style='border-color: " + postre.color_tema + "; transform: scale(0.9);'>" +
                    "<div class='info-postre'>" +
                        "<h3>" + postre.nombre_producto + "</h3>" +
                        "<button class='btn-accion btn-eliminar' onclick='quitarFavorito(" + postre.id + ")'>Quitar</button>" +
                    "</div>" +
                "</div>";
            contenedor_favoritos.innerHTML += html;
        });
    }
    seccion_favoritos.style.display = "block";
    seccion_favoritos.scrollIntoView({ behavior: 'smooth' });
}

window.quitarFavorito = function(id) {
    var favoritos = JSON.parse(localStorage.getItem(clave_favs)) || []; // se obtienen los favoritos
    favoritos = favoritos.filter(function(p) { return p.id !== id; }); // return true si se cumple la condicion
    localStorage.setItem(clave_favs, JSON.stringify(favoritos)); // se actualiza el localStorage
    mostrarFavoritos();
};

if(btn_ver_favoritos) btn_ver_favoritos.addEventListener("click", mostrarFavoritos);
if(btn_cerrar_favoritos) btn_cerrar_favoritos.addEventListener("click", function() { 
    seccion_favoritos.style.display = "none"; 
});

// =========================================
// UTILIDADES
// =========================================
entrada_json.addEventListener("change", function(evento) {
    var archivo = evento.target.files[0];
    if (archivo) {
        var lector = new FileReader();
        lector.onload = function(e) {
            lista_actual = JSON.parse(e.target.result);
            localStorage.setItem("catalogo_reposteria", JSON.stringify(lista_actual));
            mostrarRecetas(lista_actual);
        };
        lector.readAsText(archivo);
    }
});

btn_salir.addEventListener("click", function() {
    localStorage.removeItem("sesion_activa");
    window.location.href = "../../index.html";
});