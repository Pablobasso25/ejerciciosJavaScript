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
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>${producto.categoria}</td>
      <td>$${producto.precio}</td>
      <td>${producto.stock}</td>
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
  document.querySelector("#descripcionModal").value = producto.descripcion;
  document.querySelector("#precioModal").value = producto.precio;
  document.querySelector("#categoriaModal").value = producto.categoria;
  document.querySelector("#imagenModal").value = producto.imagen;
  document.querySelector("#stockModal").value = producto.stock;

  modal.show(); // Mostramos el modal
};