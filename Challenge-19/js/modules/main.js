import { manejarRegistro } from "./registro.js";
import { manejarLogin } from './login.js';
import { restaurarSesion, actualizarNavbar, cerrarSesion } from "./sesion.js";

// Lógica principal que espera al DOM
document.addEventListener("DOMContentLoaded", () => {
  manejarLogin();
  restaurarSesion(); // esta ya actualiza el navbar si restaura

  // Si no se restauró nada, actualizamos igual
  if (sessionStorage.getItem('usuarioActivo_app')) {
    actualizarNavbar();
  }

  manejarRegistro();

  const botonCerrarSesion = document.getElementById('btnCerrarSesion');
  if (botonCerrarSesion) {
    botonCerrarSesion.addEventListener('click', cerrarSesion);
  }

  
});