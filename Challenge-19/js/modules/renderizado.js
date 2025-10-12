/* import { obtenerProductos } from "./storage.js";

// Capturamos el cuerpo de la tabla donde se mostrarán los productos
const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// Capturamos el modal de Bootstrap para poder abrirlo desde JS
const modal = new bootstrap.Modal(document.getElementById("modalProducto"));


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
} */

/*   import { obtenerProductos } from "./storage.js";

// Renderiza productos según el contexto (admin o index)
export function renderizarProductos() {
  const productos = obtenerProductos();

  const tabla = document.querySelector("#cuerpo-tabla");
  const grilla = document.querySelector(".row.g-3.mt-3");

  if (tabla) {
    renderizarTabla(productos, tabla);
  }

  if (grilla) {
    renderizarTarjetas(productos, grilla);
  }
}

// Renderiza en formato tabla (admin.html)
function renderizarTabla(productos, contenedor) {
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

// Renderiza en formato tarjeta (index.html)
function renderizarTarjetas(productos, contenedor) {
  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "col-12 col-sm-6 col-md-3 col-lg-3";
    tarjeta.innerHTML = `
      <div class="producto-card2 bg-white">
        <span class="etiqueta-descuento">-10%</span>
        <div class="card-img-box">
          <img src="${producto.imagen}" alt="${producto.nombre}" />
        </div>
        <div class="fw-bold">${producto.nombre}</div>
        <div>$${producto.precio}</div>
        <div>${producto.descripcion}</div>
        <div id="precio-original">$${Math.round(producto.precio * 1.1)}</div>
        <div class="envio-gratis">
          <i class="fas fa-shipping-fast me-2"></i> Envío gratis
        </div>
      </div>
    `;
    contenedor.appendChild(tarjeta);
  });
}


// Muestra el modal de edición con los datos del producto seleccionado

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


export { renderizarTabla };
 */

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
      <div class="producto-card2 bg-white">
        <span class="etiqueta-descuento">-10%</span>
        <div class="card-img-box">
          <img src="${producto.imagen}" alt="${producto.nombre}" />
        </div>
        <div class="fw-bold">${producto.nombre}</div>
        <div>$${producto.precio}</div>
        <div>${producto.descripcion}</div>
        <div id="precio-original">$${Math.round(producto.precio * 1.1)}</div>
        <div class="envio-gratis">
          <i class="fas fa-shipping-fast me-2"></i> Envío gratis
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

