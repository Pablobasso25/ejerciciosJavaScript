import { obtenerProductos } from "./storage.js";

// Capturamos el cuerpo de la tabla donde se mostrarán los productos
const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// Capturamos el modal de Bootstrap para poder abrirlo desde JS
const modal = new bootstrap.Modal(document.getElementById("modalProducto"));

/**
 * Renderiza la tabla con los productos actuales
 * @param {Array} productos - Array de productos a mostrar
 */
export function renderizarTabla(productos) {
  cuerpoTabla.innerHTML = ""; // Limpiamos la tabla antes de renderizar

  productos.forEach((producto) => {
    const fila = document.createElement("tr");

    // Creacion de cada celda con los datos clave
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precioOriginal}</td>
      <td>${producto.descuentoProducto}</td>
      <td>${producto.vendedorProducto}</td>
      <td>
        <button class="btn btn-warning btn-sm me-2" onclick="mostrarModal(${producto.id})">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${producto.id})">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    `;

    cuerpoTabla.appendChild(fila);
  });
}

/**
 * Muestra el modal de edición con los datos del producto seleccionado
 * @param {number} id - ID del producto a editar
 */
window.mostrarModal = (id) => {
  const productos = obtenerProductos();
  const producto = productos.find((p) => p.id === id);

  // Cargamos los datos en los inputs del modal
  document.querySelector("#formModal").setAttribute("data-id", id);
  document.querySelector("#nombreModal").value = producto.nombre;
  document.querySelector("#opinionesModal").value = producto.opiniones;
  document.querySelector("#precioOriginalModal").value = producto.precioOriginal;
  document.querySelector("#precioDescModal").value = producto.precioDesProducto;
  document.querySelector("#descuentoProductoModal").value = producto.descuentoProducto;
  document.querySelector("#nombreVendedorModal").value = producto.vendedorProducto;
  document.querySelector("#cantidadVentasModal").value = producto.cantidadVentas;
  document.querySelector("#imagen1ProductoModal").value = producto.imagen1;
  document.querySelector("#imagen2ProductoModal").value = producto.imagen2;
  document.querySelector("#imagen3ProductoModal").value = producto.imagen3;

  modal.show(); // Mostramos el modal
};