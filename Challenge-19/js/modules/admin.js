
// Maneja todo el flujo del panel de administración

import { Producto } from "./producto.js";
import { obtenerProductos, guardarProductos } from "./storage.js";
import { renderizarTabla } from "./renderizado.js";
import { restaurarSesion, esAdmin} from "./sesion.js";


// Verifica si hay sesión activa y si el usuario tiene rol "vendedor"
restaurarSesion(); // Restaura sesión si viene de otra página

const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo_app"));

if (!usuarioActivo || !esAdmin()) {
  alert("Acceso denegado. Esta sección es solo para vendedores.");
  window.location.href = "index.html"; // Redirige al home
}

// Inicializamos el array de productos desde localStorage
let productos = obtenerProductos();

// Renderizamos la tabla al cargar la página
renderizarTabla(productos);

/**
 * Evento para agregar un nuevo producto desde el formulario
 */
document.querySelector("#formProducto").addEventListener("submit", (event) => {
  event.preventDefault(); // Evitamos que se recargue la página

  // Calculamos el nuevo ID automáticamente
  const id = productos.at(-1)?.id + 1 || 1;

  // Capturamos los valores del formulario
  const nombre = document.querySelector("#nombreAdmin").value;
  const descripcionProducto = document.querySelector("#descripcionAdmin").value;
  const precioProducto = document.querySelector("#precioAdmin").value;
  const categoriaProducto = document.querySelector("#categoriaAdmin").value;
  const imagenProducto = document.querySelector("#imagenAdmin").value;
  const stockProducto = document.querySelector("#stockAdmin").value;

  // Creamos el nuevo producto
  const nuevoProducto = new Producto(
    id,
    imagenProducto,
    nombre,
    descripcionProducto,
    precioProducto,
    categoriaProducto,
    stockProducto,
  );

  // Lo agregamos al array y lo guardamos
  productos.push(nuevoProducto);
  guardarProductos(productos);

  // Limpiamos el formulario y actualizamos la tabla
  document.querySelector("#formProducto").reset();
  renderizarTabla(productos);
});