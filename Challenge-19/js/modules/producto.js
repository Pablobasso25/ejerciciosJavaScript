// producto.js
export class Producto {
  constructor(id, nombre, descripcion, precio, categoria, imagen, stock) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
    this.stock = stock;
  }
}