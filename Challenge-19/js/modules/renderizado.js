

import { obtenerProductos } from "./storage.js";

export function renderizarProductos() {
  const productos = obtenerProductos();
  const grilla = document.querySelector(".row.g-3.mt-3");
  if (grilla) renderizarTarjetas(productos, grilla);
}

export function renderizarTabla(productos) {
  const contenedor = document.querySelector("#cuerpo-tabla");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  productos.forEach((producto) => {
    const fila = document.createElement("tr");
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
    contenedor.appendChild(fila);
  });
}

function renderizarTarjetas(productos, contenedor) {
  contenedor.innerHTML = "";
  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "col-12 col-sm-6 col-md-3 col-lg-3";
    tarjeta.innerHTML = `
      <div class="producto-card2 ">
        <span class="etiqueta-descuento">-10%</span>
        <div class="card-img-box">
          <img src="${producto.imagen}" alt="${producto.nombre}" />
        </div>
        <div class="fw-bold fs-6">${producto.nombre}</div>
        <div class="precio-color fs-6 fw-bold">$${producto.precio}</div>
        <div class="descripcion">${producto.descripcion}</div>        
        <div class="envio-gratis text-success fw-bold">
          <i class="fas fa-shipping-fast me-2 text-success"></i> Envío gratis
        </div>
      </div>
    `;
    contenedor.appendChild(tarjeta);
  });
}


// Función global para mostrar el modal de edición
window.mostrarModal = (id) => {
  const productos = obtenerProductos();
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    alert("Producto no encontrado");
    return;
  }

  // Precargamos los datos en el modal
  document.querySelector("#formModal").setAttribute("data-id", id);
  document.querySelector("#nombreModal").value = producto.nombre;
  document.querySelector("#descripcionModal").value = producto.descripcion;
  document.querySelector("#precioModal").value = producto.precio;
  document.querySelector("#categoriaModal").value = producto.categoria;
  document.querySelector("#imagenModal").value = producto.imagen;
  document.querySelector("#stockModal").value = producto.stock;

  bootstrap.Modal.getOrCreateInstance(document.getElementById("modalProducto")).show();
};



export function renderizarUsuarios() {
  try {
    const usuarios = JSON.parse(localStorage.getItem("usuarios_app")) || [];
    const contenedor = document.querySelector("#cuerpo-usuarios");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    usuarios.forEach(usuario => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        <td>${usuario.rol}</td>
        <td>${new Date(usuario.fechaRegistro).toLocaleDateString()}</td>
      `;
      contenedor.appendChild(fila);
    });
  } catch (error) {
    console.error("Error al renderizar usuarios:", error);
  }
}

