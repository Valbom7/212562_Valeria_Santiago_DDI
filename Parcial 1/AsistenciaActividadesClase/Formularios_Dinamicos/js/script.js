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

function cambiarNumero(event){
    console.log(event.target.value);
    const numeroElementos = event.target.value;
    const contenido = document.querySelector("#contenedor_correos");
    contenido.innerHTML = " ";
    for(i=1; i<= event.target.value; i++){
        
         const htmlAgregar =  `<label for="correo-${i}">Ingrese el correo ${i}</label>
            <input type="email" name="correo-${i}" id="correo-${i}">
            <br></br>`;
        contenido.innerHTML+= htmlAgregar;
    }
   
}

class Usuario{
    constructor(nom, ape){

        this.nombre = nom;
        this.apellido = ape;
    }
}
