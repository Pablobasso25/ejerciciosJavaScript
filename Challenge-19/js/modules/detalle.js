// 1. Leemos los productos guardados en localStorage
const productos = JSON.parse(localStorage.getItem("productos_app")) || [];

// 2. Obtenemos el ID del producto desde la URL (ej: detallesDelProducto.html?id=3)
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")) || productos.at(-1)?.id; // Si no hay ID, muestra el último

// 3. Buscamos el producto correspondiente
const producto = productos.find(p => p.id === id);

// 4. Si no se encuentra, mostramos un mensaje de error
if (!producto) {
  document.body.innerHTML = "<h2 class='text-center text-danger'>Producto no encontrado</h2>";
  throw new Error("Producto no encontrado");
}

// 5. Inyectamos los datos en el DOM usando los IDs definidos en el HTML
document.querySelector("#imagenProducto").src = producto.imagen;
document.querySelector("#imagenProducto").alt = producto.nombre;
document.querySelector("#nombreProducto").textContent = producto.nombre;
document.querySelector("#descripcionProducto").textContent = producto.descripcion;
document.querySelector("#precioProducto").textContent = `$${producto.precio}`;


// 6. fecha de entrega
document.querySelector("#entregaProducto").textContent = "15 y 20 de octubre";