const boxClick = document.querySelector('.p-click');
boxClick.addEventListener('click', () => {
    boxClick.style.backgroundColor = 'black';
    boxClick.innerText = '¡Click!';
});

window.onload = () => {
    const boxLoad = document.querySelector('.p-onload');
    boxLoad.style.border = '5px solid gold';
    console.log("Página cargada");
};

const boxMove = document.querySelector('.p-move');
boxMove.addEventListener('mousemove', (e) => {
    boxMove.innerText = 'Hola';
});

const boxScroll = document.querySelector('.p-scroll');
window.addEventListener('scroll', () => {
    let rotation = window.scrollY / 5;
    boxScroll.style.transform = 'rotate(45deg) scale(1.5);';
});

const boxParallax = document.querySelector('.p-parallax');
window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    boxParallax.style.backgroundPositionY = offset * 0.5 + "px";
});