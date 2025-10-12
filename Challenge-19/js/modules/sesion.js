export function restaurarSesion() {
  const usuarioLocal = JSON.parse(localStorage.getItem("usuarioActivo_app"));
  const usuarioSession = JSON.parse(sessionStorage.getItem("usuarioActivo_app"));

  if (!usuarioSession && usuarioLocal) {
    sessionStorage.setItem("usuarioActivo_app", JSON.stringify(usuarioLocal));
    actualizarNavbar(); // ← esto actualiza el navbar después de restaurar
  }
}

export function actualizarNavbar() {
  const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo_app")); //Recupera el usuario logueado desde "sessionStorage", si no hay sesión activa, "usuarioActivo será "null

  // se capturan los elementos del DOM que se van a mostrar u ocultar segun el estado de la sesión
  const navUsuario = document.getElementById("navUsuario"); //el saludo con el nombre del usuario
  const navCerrarSesion = document.getElementById("navCerrarSesion"); //el botón para cerrar sesión
  const navIngresar = document.getElementById("navIngresar"); //el botón para abrir el modal de login
  const nombreActivo = document.getElementById("nombreActivo"); //el span donde se muestra el nombre del usuario
  const navMisCompras = document.getElementById("navMisCompras"); //el botón “Mis compras”
  const navCrearCuenta = document.getElementById("navCrearCuenta"); //el botón de "crea tu cuenta"
  const navAdmin = document.getElementById("navAdmin");  // botón panel admin


  if (usuarioActivo) {
    // verificamos si hay algun usuario logueado.Si existe, se muestran los elementos correspondientes
    nombreActivo.textContent = `Hola, ${usuarioActivo.usuario}`;
    navUsuario.style.display = "block"; // muestra el saludo al usuario
    navCerrarSesion.style.display = "block"; // muestra el botón de cerrar sesión
    navIngresar.style.display = "none"; // oculta el botón de "ingresá"
    navMisCompras.style.display = "block"; // activa el acceso a "mis compras"
    navCrearCuenta.style.display = "none"; // oculta el botón "creá tu cuenta"
    navAdmin.style.display = usuarioActivo.rol === "vendedor" ? "block" : "none"; // muestra el botón solo si es administrador


  } else {
    // Si no hay sesión activa, se ocultan los elementos que solo se muestran cuando hay un usuario logueado
    navUsuario.style.display = "none"; // oculta el saludo
    navCerrarSesion.style.display = "none"; // oculta el botón de cerrar sesión
    navIngresar.style.display = "block"; // muestra el botón de "ingresá"
    navMisCompras.style.display = "none"; // oculta el botón "mis compras"
    navCrearCuenta.style.display = "block"; // muestra el botón "creá tu cuenta"
    navAdmin.style.display = "none"; // Ocultar el botón al cerrar sesión

  }

  

  if (usuarioActivo.rol === "vendedor")  {
    navMisCompras.style.display = "none"; // oculta el botón "mis compras"
    navAdmin.style.display = "block"; // muestra el botón si es vendedor
  } else {
    navCerrarSesion.style.display = "block"; // muestra el botón de cerrar sesión
    navIngresar.style.display = "none"; // oculta el botón de "ingresá"
    navMisCompras.style.display = "block"; // activa el acceso a "mis compras"
    navCrearCuenta.style.display = "none"; // oculta el botón "creá tu cuenta"
  }
}

// funcion para cerrar sesión
export function cerrarSesion() {
  sessionStorage.removeItem("usuarioActivo_app"); // Elimina el usuario logueado de sessionStorage, cerrando la sesión
  localStorage.removeItem("usuarioActivo_app"); // Elimina también el dato persistente en localStorage
  actualizarNavbar(); // Llama a actualizarNavbar() para que el navbar se actualice y refleje que ya no hay sesión activa
  alert("Sesión cerrada correctamente"); // mensaje de confirmación al usuario
}



/**
 * Verifica si el usuario activo tiene rol "admin"
 * @returns {boolean}
 */

// función para saber si es administrador
export function esAdmin() {
  const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo_app"));
  return usuarioActivo?.rol === "vendedor";

}
