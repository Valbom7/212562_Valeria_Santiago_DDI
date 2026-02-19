
document.addEventListener('DOMContentLoaded', () => {
    const seccionesHijos = document.querySelectorAll('.tarjeta-hijo');

    // Efecto Parallax sensible al mouse
    document.addEventListener('mousemove', (e) => {
        seccionesHijos.forEach(tarjeta => {
            const imagen = tarjeta.querySelector('.img-parallax');
            const textoFondo = tarjeta.querySelector('.texto-trasero');
            
  
            const moverX = (window.innerWidth / 2 - e.pageX) / 25;
            const moverY = (window.innerHeight / 2 - e.pageY) / 25;

            if (imagen) {
                imagen.style.transform = `translateX(${moverX}px) translateY(${moverY}px)`;
            }

            if (textoFondo) {
                textoFondo.style.transform = `translateX(${-moverX / 2}px) translateY(${-moverY / 2}px)`;
            }
        });
    });

    //  Sistema de revelado al hacer scroll (Intersection Observer)
    const opciones = {
        threshold: 0.2, 
        rootMargin: "0px 0px -50px 0px"
    };

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('activo');
                observador.unobserve(entrada.target);
            }
        });
    }, opciones);

    document.querySelectorAll('.revelar').forEach(el => {
        observador.observe(el);
    });

});