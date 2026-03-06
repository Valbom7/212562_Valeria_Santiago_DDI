const url = "https://pokeapi.co/api/v2/pokemon";
//crear el objeto XMLHttpRequest que se encarga de hacer peticiones http de forma asincrona

const xhr = new XMLHttpRequest();

//configurar que tipo de peticion vamos a hacer.
// el primer parametro es el metodo, el 2 es la url de donde se hara la peticion y el 3 es un booleano que indica si la peticion es asincrona o no, en este caso es true porque queremos que sea asincrona.
xhr.open('GET', url, true);

// establecemos la cabecera de la peticion, en este caso le decimos que el tipo de contenido que vamos a enviar es json, esto es importante para que el servidor sepa como interpretar los datos que le estamos enviando.
xhr.setRequestHeader('Content-Type', 'application/json');

// ahora vamos a definir la funcion que se ejecutara cuando la peticion cambie de estado.
//0=UNSENT, 1=OPENED, 2=HEADERS_RECEIVED, 3=LOADING, 4=DONE
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        // verificar si la peticion se ha completado con exito
        if (xhr.status >= 200 && xhr.status < 300) {
            //conversion
            const response = JSON.parse(xhr.responseText);
            console.log(response);
        }
        else {
            //manejamos el error mostrando en consola en el caso que el estatus de la respuesta no sea 200
            console.error('Error en la peticion', xhr.status, xhr.statusText);
        }
    }
}

xhr.onerror = () => {
    console.error('Error en la peticion');
}

xhr.ontimeout = () => {
    console.error('La peticion ha tardado demasiado tiempo');
}

xhr.timeout = 5000; // tiempo de espera en milisegundos, en este caso 5 segundos

// enviamos la peticion como es get enviamos null, si fuera post o put enviariamos un objeto con los datos a enviar, pero en este caso no es necesario porque solo queremos obtener datos.
xhr.send(null);