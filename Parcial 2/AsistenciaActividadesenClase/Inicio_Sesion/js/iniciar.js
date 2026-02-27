const formulario = document.querySelector('#form'); 
const btn_registrarse = document.querySelector('#btn-registrarse');

function iniciarSesion() {
    const datos = Object.fromEntries(new FormData(formulario));

    if (datos.correo === '' || datos.contrasena === '') {
        alert('Por favor, completa todos los campos');
        return;
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValidado = usuariosGuardados.find(u => 
        u.correo === datos.correo && u.contrasena === datos.contrasena
    );

    if (usuarioValidado) {
        alert(`¡Bienvenido de nuevo, ${usuarioValidado.nombre_completo}!`);
    } else {
        alert('Correo o contraseña incorrectos');
    }
}

if (btn_registrarse) {
    btn_registrarse.addEventListener('click', () => {
        window.location.href = 'paginas/registro/registro.html';
    });
}

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        iniciarSesion();
    });
}