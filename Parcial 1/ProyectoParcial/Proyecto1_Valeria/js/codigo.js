document.addEventListener('DOMContentLoaded', () => {
    // Aparecer personaje
    setTimeout(() => {
        const personaje = document.querySelector('.personaje-img');
        if (personaje) personaje.classList.add('aparecer');
    }, 150);

    // Función de revelado al bajar (Scroll Reveal)
    const observarScroll = () => {
        const elementos = document.querySelectorAll('.revelar');
        elementos.forEach(el => {
            const posicion = el.getBoundingClientRect().top;
            if (posicion < window.innerHeight - 100) {
                el.classList.add('activo');
            }
        });
    };

    window.addEventListener('scroll', observarScroll);
    observarScroll();

    // Efecto Parallax Caballo
    window.addEventListener('scroll', () => {
        const caballo = document.getElementById('caballoParallax');
        if (caballo) {
            let valor = window.scrollY;
            caballo.style.transform = `translateX(${valor * 0.4}px)`;
        }
    });
});