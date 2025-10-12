
// Maneja todo el flujo del panel de administración

import { Producto } from "./productos.js";
import { obtenerProductos, guardarProductos } from "./storage.js";
import { renderizarTabla } from "./renderizado.js";
import { restaurarSesion, esAdmin} from "./sesion.js";


// Verifica si hay sesión activa y si el usuario tiene rol "vendedor"
restaurarSesion(); // Restaura sesión si viene de otra página

const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo"));

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
  const opiniones = document.querySelector("#opinionesAdmin").value;
  const precioOriginal = document.querySelector("#precioOriginalAdmin").value;
  const precioDesProducto = document.querySelector("#precioDescAdmin").value;
  const descuentoProducto = document.querySelector("#descuentoProductoAdmin").value;
  const vendedorProducto = document.querySelector("#nombreVendedorAdmin").value;
  const cantidadVentas = document.querySelector("#cantidadVentasAdmin").value;
  const imagen1 = document.querySelector("#imagen1ProductoAdmin").value;
  const imagen2 = document.querySelector("#imagen2ProductoAdmin").value;
  const imagen3 = document.querySelector("#imagen3ProductoAdmin").value;

  // Creamos el nuevo producto
  const nuevoProducto = new Producto(
    id,
    imagen1,
    imagen2,
    imagen3,
    nombre,
    opiniones,
    precioOriginal,
    precioDesProducto,
    descuentoProducto,
    vendedorProducto,
    cantidadVentas
  );

  // Lo agregamos al array y lo guardamos
  productos.push(nuevoProducto);
  guardarProductos(productos);

  // Limpiamos el formulario y actualizamos la tabla
  document.querySelector("#formProducto").reset();
  renderizarTabla(productos);
});