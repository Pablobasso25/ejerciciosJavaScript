import { manejarRegistro } from "./registro.js";
import { manejarLogin } from './login.js';
import { restaurarSesion, actualizarNavbar, cerrarSesion } from "./sesion.js";
import { renderizarProductos } from "./renderizado.js";

// Lógica principal que espera al DOM
document.addEventListener("DOMContentLoaded", () => {
  manejarLogin();
  restaurarSesion(); // esta ya actualiza el navbar si restaura
  actualizarNavbar(); // se llama siempre

  renderizarProductos(); // se llama siempre, sin importar si hay sesión

  manejarRegistro();

  const botonCerrarSesion = document.getElementById('btnCerrarSesion');
  if (botonCerrarSesion) {
    botonCerrarSesion.addEventListener('click', cerrarSesion);
  }
});

