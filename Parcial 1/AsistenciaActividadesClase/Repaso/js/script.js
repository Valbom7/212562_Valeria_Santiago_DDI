// declaramos una variable y asignamos la referencia a nuestra etiqueta con el id cuadro

document.body.style.background = "red";
let cuadro = document.querySelector("#cuadro");

cuadro.style.background = 'blue';
cuadro.style.width = '600px';

console.log(cuadro);