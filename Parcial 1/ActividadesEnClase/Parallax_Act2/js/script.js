const titulo = document.querySelector(".Titulo");
const spe = document.querySelector("#spe");
const logo = document.querySelector("#logo");
const uno= document.querySelector("#uno");

window.addEventListener("scroll", ()=>{
    titulo.style.right = window.scrollY *2 + "px";
    spe.style.left = window.scrollY *2 + "px";
    logo.style.right= window.scrollY*.5 + "px";
});