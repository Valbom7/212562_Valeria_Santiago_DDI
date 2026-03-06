const apikey = 'live_QKrB2v4weAdfXTZeH0FFqVe8l7FZPdcBIqsckHQ5ZuC7M1lDR8VUjXkboY9OhTQ3'
const url = 
'https://api.thecatapi.com/v1/breeds?api_key=' + apikey;

const contenedor_gatos = document.querySelector("#contenedor_gatos");
const contenedor_gato = document.querySelector(".contenedor_gato");

window.addEventListener('DOMContentLoaded', () => {
    const usuarioActual = JSON.parse(localStorage.getItem('usuario_actual'));
    if (!usuarioActual) {
        window.location.href = '../../index.html';
        return;
    }

    document.getElementById('user-name').textContent = usuarioActual.nombre_completo;

    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('usuario_actual');
        window.location.href = '../../index.html';
    });

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            datos.forEach(breed => {
                const clone = contenedor_gato.cloneNode(true);
                clone.querySelector("#foto").src = `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`;
                clone.querySelector(".nombre h1").textContent = breed.name;
                clone.querySelector(".origen h2").textContent = breed.origin;
                clone.querySelector(".descripcion p").textContent = breed.description;
                clone.querySelector(".temperamento p").textContent = breed.temperament;
                contenedor_gatos.appendChild(clone);
            });
            contenedor_gato.remove();
        })
        .catch(error => console.error("Error al obtener la lista:", error));
});

function MostrarDetalles(urlDetalle){
    fetch(urlDetalle).then(respuesta => respuesta.json()).then(gato => {
        
    });
}