/* const promesa = new Promise((resolve, reject) => {
    let exito = true; // Cambia a false para probar el rechazo
    setTimeout(() => {
        if(exito){
            resolve("La tarea finalizo");
        } else {
            reject("La tarea falló");
        }
    }, 1000);
});

promesa.then((resultado)=> {
    console.log(resultado);
}).catch((error) => {
    console.error(error);
});

*/
/*
let peticionFetch = new Promise((resolve, reject) => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                reject("Error en la respuesta");
            }
        })
        .then(data => resolve(data))
        .catch(error => reject("Error en la petición: " + error));
});

peticionFetch.then(data => {
    console.log(data);
    const resultEl = document.getElementById("result");
    if(resultEl) resultEl.textContent = JSON.stringify(data);
}).catch(error => {
    console.error(error);
    const resultEl = document.getElementById("result");
    if(resultEl) resultEl.textContent = error;
}); */

// promesa para una pantalla de carga con espera de 1 o 2 segundos.

const promesaCarga = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pantalla de carga completada");
    }, 2000);
});

promesaCarga.then((mensaje) => {
    console.log(mensaje);
    const cargandoEl = document.querySelector("#cargando");
    if(cargandoEl) cargandoEl.textContent = mensaje;
}).catch((error) => {
    console.error(error);
    const cargandoEl = document.querySelector("#cargando");
    if(cargandoEl) cargandoEl.textContent = error;
});

