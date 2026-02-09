
//diferentes eventos de java y diferentes usando adeventlistener
//seleccionar uno de cada uno y hacer cualquier accion como cambiar colores, tamaños, contenido...
//hacer intervalo automatico


let contenido = document.querySelector("#contenedor_contenido");
const boton = document.querySelector("#boton");
let bandera = false;

function cambiarWidth(width){
    contenido.style.width = width;
}

function cambiarTamanio(){
    console.log("cambiar tamaño");
    contenido.style.width = "800px";
    contenido.style.height = "800px";
}

function cambiarColor(color) {
    contenido.style.background =color;
}

boton.addEventListener('click', () => {
    if(bandera){
        cambiarColor("white");
        cambiarWidth("500px");
        bandera=false;
    } else{
        bandera=true;
        cambiarColor("blue");
        cambiarWidth("1000px");
    }

}); // en html puede ser  onclick="cambiarColor()"

setInterval(cambiarTamanio, 1000);
