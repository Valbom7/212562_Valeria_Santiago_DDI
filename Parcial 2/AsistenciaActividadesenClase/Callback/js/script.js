class Usuario{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    callback(funcion = null){
        if(typeof funcion === "function"){
            console.log("Este es el callback dentro de usuario");
            funcion(this.nombre);
        }

    }
}

const usuarioActual = new Usuario("Valeria", "valeria@example.com");

usuarioActual.callback((nombre) => {
    console.log(`Hola, ${nombre}!, tu correo es ${usuarioActual.correo}`);
});