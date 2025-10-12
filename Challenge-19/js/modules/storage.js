// js/modules/storage.js
const CLAVE = "productos";

export function obtenerProductos() {
  return JSON.parse(localStorage.getItem(CLAVE)) || [];
}

export function guardarProductos(productos) {
  localStorage.setItem(CLAVE, JSON.stringify(productos));
}

export function eliminarProducto(id) {
  const productos = obtenerProductos().filter(p => p.id !== id);
  guardarProductos(productos);
}

export function obtenerProductoPorId(id) {
  return obtenerProductos().find(p => p.id === id);
}