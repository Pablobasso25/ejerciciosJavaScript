// js/modules/admin.js
import { Producto } from "./producto.js";
import { obtenerProductos, guardarProductos, eliminarProducto, obtenerProductoPorId } from "./storage.js";
import { renderizarTabla } from "./ui.js";

// Carga inicial
let productos = obtenerProductos();
renderizarTabla(productos);

// Agregar producto
document.querySelector("#formProducto").addEventListener("submit", (e) => {
  e.preventDefault();

  const id = productos.at(-1)?.id + 1 || 1;
  const nuevo = new Producto(
    id,
    nombre.value,
    descripcion.value,
    parseFloat(precio.value),
    categoria.value,
    imagen.value,
    parseInt(stock.value)
  );

  productos.push(nuevo);
  guardarProductos(productos);
  renderizarTabla(productos);
  e.target.reset();
});

// Editar producto
window.editarProducto = (id) => {
  const producto = obtenerProductoPorId(id);
  if (!producto) return;

  formEditar.setAttribute("data-id", id);
  nombreEditar.value = producto.nombre;
  descripcionEditar.value = producto.descripcion;
  precioEditar.value = producto.precio;
  categoriaEditar.value = producto.categoria;
  imagenEditar.value = producto.imagen;
  stockEditar.value = producto.stock;

  new bootstrap.Modal(modalEditar).show();
};

// Guardar edición
formEditar.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = parseInt(formEditar.getAttribute("data-id"));
  const index = productos.findIndex(p => p.id === id);

  productos[index] = new Producto(
    id,
    nombreEditar.value,
    descripcionEditar.value,
    parseFloat(precioEditar.value),
    categoriaEditar.value,
    imagenEditar.value,
    parseInt(stockEditar.value)
  );

  guardarProductos(productos);
  renderizarTabla(productos);
  bootstrap.Modal.getInstance(modalEditar).hide();
});

// Eliminar
window.borrarProducto = (id) => {
  if (!confirm("¿Eliminar este producto?")) return;
  eliminarProducto(id);
  productos = obtenerProductos();
  renderizarTabla(productos);
};