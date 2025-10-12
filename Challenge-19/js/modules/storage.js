// Este módulo centraliza el acceso a localStorage

const CLAVE_STORAGE = "productos_app"; // Clave única para guardar los productos

/**
 * Obtiene todos los productos guardados en localStorage
 * @returns {Array} - Array de productos o array vacío si no hay nada
 */
export function obtenerProductos() {
  const datos = localStorage.getItem(CLAVE_STORAGE);
  return datos ? JSON.parse(datos) : [];
}

/**
 * Guarda el array completo de productos en localStorage
 * @param {Array} productos - Array de productos actualizado
 */
export function guardarProductos(productos) {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(productos));
}
