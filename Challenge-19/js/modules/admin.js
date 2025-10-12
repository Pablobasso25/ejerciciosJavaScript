/* 
// Maneja todo el flujo del panel de administración

import { Producto } from "./producto.js";
import { obtenerProductos, guardarProductos } from "./storage.js";
import { renderizarTabla, renderizarProductos } from "./renderizado.js";
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


// Evento para agregar un nuevo producto desde el formulario

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
    nombre,
    descripcionProducto,
    precioProducto,
    categoriaProducto,
    imagenProducto,
    stockProducto,
  );

  // Lo agregamos al array y lo guardamos
  productos.push(nuevoProducto);
  guardarProductos(productos);

  // Limpiamos el formulario y actualizamos la tabla
  document.querySelector("#formProducto").reset();
  renderizarTabla(productos);
}); */

/* import { renderizarProductos } from "./renderizado.js";

document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos();
}); */


import { Producto } from "./producto.js";
import { obtenerProductos, guardarProductos } from "./storage.js";
import { renderizarTabla, renderizarUsuarios } from "./renderizado.js";

import { restaurarSesion, esAdmin } from "./sesion.js";

document.addEventListener("DOMContentLoaded", () => {
  restaurarSesion();

  const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo_app"));
  if (!usuarioActivo || !esAdmin()) {
    alert("Acceso denegado. Esta sección es solo para vendedores.");
    window.location.href = "index.html";
    return;
  }

  let productos = obtenerProductos();
  renderizarTabla(productos);
  renderizarUsuarios();

  const form = document.querySelector("#formProducto");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombreAdmin").value.trim();
    const descripcion = document.querySelector("#descripcionAdmin").value.trim();
    const precio = parseFloat(document.querySelector("#precioAdmin").value);
    const categoria = document.querySelector("#categoriaAdmin").value;
    const imagen = document.querySelector("#imagenAdmin").value.trim();
    const stock = parseInt(document.querySelector("#stockAdmin").value);

    if (!nombre || !descripcion || isNaN(precio) || !categoria || !imagen || isNaN(stock)) {
      alert("Todos los campos son obligatorios y deben ser válidos.");
      return;
    }

    const id = productos.at(-1)?.id + 1 || 1;
    const nuevoProducto = new Producto(id, nombre, descripcion, precio, categoria, imagen, stock);

    productos.push(nuevoProducto);
    guardarProductos(productos);
    renderizarTabla(productos);
    

    form.reset();
  });
});

// Evento para actualizar producto desde el modal
document.querySelector("#formModal").addEventListener("submit", (e) => {
  e.preventDefault();

  const id = parseInt(e.target.getAttribute("data-id"));
  let productos = obtenerProductos();
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) {
    alert("Producto no encontrado");
    return;
  }

  // Capturamos los valores actualizados del modal
  const nombre = document.querySelector("#nombreModal").value.trim();
  const descripcion = document.querySelector("#descripcionModal").value.trim();
  const precio = parseFloat(document.querySelector("#precioModal").value);
  const categoria = document.querySelector("#categoriaModal").value;
  const imagen = document.querySelector("#imagenModal").value.trim();
  const stock = parseInt(document.querySelector("#stockModal").value);

  // Validación básica
  if (!nombre || !descripcion || isNaN(precio) || !categoria || !imagen || isNaN(stock)) {
    alert("Todos los campos son obligatorios y deben ser válidos.");
    return;
  }

  // Actualizamos el producto en el array
  productos[index].nombre = nombre;
  productos[index].descripcion = descripcion;
  productos[index].precio = precio;
  productos[index].categoria = categoria;
  productos[index].imagen = imagen;
  productos[index].stock = stock;

  guardarProductos(productos);
  renderizarTabla(productos);





  // Cerramos el modal
  bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
});


// Función global para eliminar un producto por ID
window.eliminarProducto = (id) => {
  if (!confirm("¿Estás seguro de que querés eliminar este producto?")) return;

  let productos = obtenerProductos();
  const nuevosProductos = productos.filter(p => p.id !== id);

  guardarProductos(nuevosProductos);
  renderizarTabla(nuevosProductos);
  
};
