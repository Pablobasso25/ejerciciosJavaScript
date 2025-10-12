// js/modules/ui.js
import { eliminarProducto, obtenerProductoPorId } from "./storage.js";
import { renderizarTabla } from "./ui.js";

const cuerpoTabla = document.querySelector("#cuerpo-tabla");

export function renderizarTabla(productos) {
  cuerpoTabla.innerHTML = "";

  productos.forEach((p) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>${p.descripcion}</td>
      <td>$${p.precio}</td>
      <td>${p.categoria}</td>
      <td><img src="${p.imagen}" class="img-thumbnail" width="60"></td>
      <td>${p.stock}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="editarProducto(${p.id})">✏️</button>
        <button class="btn btn-sm btn-danger" onclick="borrarProducto(${p.id})">🗑️</button>
      </td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}