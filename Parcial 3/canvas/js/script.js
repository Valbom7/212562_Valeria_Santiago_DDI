import { Cuadrado } from "./figuras.js";

const canvas = document.querySelector("#lienzo");
const ctx = canvas.getContext("2d");
const figuras = [];

const posicionCursor =  {
    iniciales: {x:0, y:0},
    finales: {x:0, y:0},
}

let presionado = false;

canvas.addEventListener("mousedown", (event => alPresionar(event)));
canvas.addEventListener("mouseup", (event => alSoltar(event)));
canvas.addEventListener("mousemove", (event => mientrasPresiona(event)));


function alPresionar(event){
    posicionCursor.iniciales.x = event.offsetX;
    posicionCursor.iniciales.y = event.offsetY;
    presionado = true;
}

function mientrasPresiona(event){
    posicionCursor.finales.x = event.offsetX;
        posicionCursor.finales.y = event.offsetY;
    if(presionado){
        
    }
}

function alSoltar(event){
    posicionCursor.finales.x = event.offsetX;
    posicionCursor.finales.y = event.offsetY;

    const x = Math.min(posicionCursor.iniciales.x, posicionCursor.finales.x);
    const y = Math.min(posicionCursor.iniciales.y, posicionCursor.finales.y);

    const alto = Math.abs(posicionCursor.finales.y - posicionCursor.iniciales.y);
    const ancho = Math.abs(posicionCursor.finales.x - posicionCursor.iniciales.x);

    const cuadro = new Cuadrado(posicionCursor, "red", "black", 2);

    figuras.push(cuadro);

    cuadro.Dibujar(ctx);
    presionado = false;
   
}

function dibujarLinea(){
    limpiarCanvas();
    ctx.beginPath();
    ctx.moveTo(posicionCursor.iniciales.x, posicionCursor.iniciales.y);
    ctx.lineTo(posicionCursor.finales.x, posicionCursor.finales.y);
    ctx.stroke();
}

function limpiarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

