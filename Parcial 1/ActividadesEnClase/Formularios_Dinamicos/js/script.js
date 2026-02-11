const nombre = document.querySelector("#input-txt-nombre");
const apellido = document.querySelector("#input-txt-apellido");
const boton = document.querySelector("#boton_enviar");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    const usuario = new Usuario(nombre.value, apellido.value);
    console.log(usuario);
    const nombre_info = document.createElement("h2");
    nombre_info.textContent = usuario.nombre;
    
    document.body.appendChild(nombre_info);

    const apellido_info = document.createElement("h3");
    apellido_info.textContent = usuario.apellido;

    document.body.appendChild(apellido_info);
})

class Usuario{
    constructor(nom, ape){

        this.nombre = nom;
        this.apellido = ape;
    }
}
