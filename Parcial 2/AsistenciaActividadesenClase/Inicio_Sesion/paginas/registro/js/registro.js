const formulario = document.querySelector('#form-registro'); 

class Usuario {
    constructor(correo, contrasena, nombre_completo) {
        this.correo = correo;
        this.contrasena = contrasena;
        this.nombre_completo = nombre_completo;
    }
}

function registrarUsuario() {
    const datos = Object.fromEntries(new FormData(formulario));
    const confirmar_contrasena = document.querySelector('#contrasena-confirmar-registro').value;
    const nombre_completo = `${datos.nombre} ${datos.apellido}`; // Asumiendo que tus inputs tienen name="nombre" y name="apellido"

    if (Object.values(datos).some(valor => valor === '')) {
        alert('Todos los campos son obligatorios');
        return;
    }

    if (datos.contrasena !== confirmar_contrasena) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const existe = usuariosGuardados.find(u => u.correo === datos.correo);
    if (existe) {
        alert('Este correo ya está registrado');
        return;
    }

    const nuevoUsuario = new Usuario(datos.correo, datos.contrasena, nombre_completo);
    usuariosGuardados.push(nuevoUsuario);
    
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    alert('Registro exitoso. Redirigiendo...');
    setTimeout(() => {
        window.location.href = '../../index.html';
    }, 2000);
}

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        registrarUsuario();
    });
}