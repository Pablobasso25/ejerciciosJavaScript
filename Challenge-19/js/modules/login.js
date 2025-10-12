import { actualizarNavbar} from "./sesion.js";

export function manejarLogin() {
  const form = document.querySelector('#loginModal form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuarioIngresado = document.getElementById('loginUsuario').value.trim(); //capturo el valor ingresado en el nombre de usuario
    const passwordIngresada = document.getElementById('loginPassword').value; //capturo el valor ingresado en la contraseña

    const usuarios = JSON.parse(localStorage.getItem('usuarios_app')) || [];  //Recupera la lista de usuarios que fue guardada en "localStorage" durante el registro, si no hay usuarios guardados, se usa un array vacío como fallback
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuarioIngresado && u.password === passwordIngresada); //Busca en la lista un usuario que tenga el mismo nombre de usuario y contraseña que los ingresados, si lo encuentra lo guarda en usuarioEncontrado.

    if (!usuarioEncontrado) {  // Si no se encontró ningún usuario que coincida, se muestra un mensaje de error y se cancela el login
      alert("Usuario o contraseña incorrectos");
      return;
    }

    alert(`¡Bienvenido, ${usuarioEncontrado.nombre}!`);  // mensaje de bienvenida
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();  //cierra el modal utilizando bootstrap

    sessionStorage.setItem('usuarioActivo_app', JSON.stringify(usuarioEncontrado));  // se guarda al usuario logueado en sessionStorage, lo que te permite mantener la sesión activa mientras el navegador esté abierto
    localStorage.setItem('usuarioActivo_app', JSON.stringify(usuarioEncontrado));  // tambien se guarda en localStorage para que al volver al home siga la sesión abierta
    actualizarNavbar();
  });
}

// función para recuperar la sesión si se perdio al navegar entre páginas
export function restaurarSesion(){

  const usuarioLocal = JSON.parse(localStorage.getItem('usuarioActivo'));
  const usuarioSession = JSON.parse(sessionStorage.getItem('usuarioActivo'));
  
  if (!usuarioSession && usuarioLocal) {
    sessionStorage.setItem('usuarioActivo', JSON.stringify(usuarioLocal));
  }
}
