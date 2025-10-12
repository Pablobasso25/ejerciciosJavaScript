/* // index.js
document.addEventListener("DOMContentLoaded", () => {
  const productos = JSON.parse(localStorage.getItem("productos_app")) || [];
  const contenedor = document.getElementById("contenedorProductos");

  if (!contenedor) {
    console.warn("No se encontró el contenedor de productos");
    return;
  }

  if (productos.length === 0) {
    contenedor.innerHTML = "<p class='text-center text-muted'>No hay productos disponibles.</p>";
    return;
  }

  productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text fw-bold">$${producto.precio}</p>
          <a href="detalleDelProducto.html?id=${producto.id}" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}); */

import { renderizarProductos } from "./renderizado.js";

document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos();
});