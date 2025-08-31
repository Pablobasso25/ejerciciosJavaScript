
const productos =
[ { id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 15 },
{ id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 0 },
{ id: 3, nombre: "Silla", precio: 150, categoria: "muebles", stock: 8 },
{ id: 4, nombre: "Monitor", precio: 300, categoria: "tecnologia", stock: 12 },
{ id: 5, nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 0 } ]

//Mostrar todos los productos que tienen stock disponible
//(forma tradicional)
function filtrarConStock(lista) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].stock > 0) {
      resultado.push(lista[i]);
    }
  }
  return resultado;
}
console.log(filtrarConStock(productos));

//(forma moderna)
const conStock = productos.filter(item => item.stock > 0);
console.log("Productos con stock:", conStock);


//Crear un array solo con los nombres y precios de los productos.
//(forma tradicional)
function nombresYPrecios(lista) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push({nombre: lista[i].nombre, precio: lista[i].precio});
  }
  return resultado;
}
console.log(nombresYPrecios(productos));

//(forma moderna)
const nombreYPrecio = productos.map(item => ({nombre: item.nombre, precio: item.precio}));
console.log("Nombres y precios:", nombreYPrecio);


//Filtrar los productos de tecnología que tienen stock
//(forma tradicional)
function filtrarTecnologia(lista) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    if(lista[i].stock > 0 && lista[i].categoria === "tecnologia")
    resultado.push(lista[i]);
  }
  return resultado;
}
console.log("Productos de tecnología con stock: ");
console.log(filtrarTecnologia(productos));

//(forma moderna)
const tecnologiaConStock = productos.filter(item => item.categoria === "tecnologia" && item.stock > 0);
console.log("Tecnología con stock:", tecnologiaConStock);


//Encontrar el producto llamado "Monitor"
//(forma tradicional)
function buscarProductoPorNombre(lista, nombreBuscado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
      return lista[i];  // si la condicion se cumple, devuelve el objeto completo que coincide con el nombre buscaddo
    }
  }
  return null;    //si el bucle termina y no encontro el producto buscado, devulve null (incica que no hubo coincidencias)
}

console.log(buscarProductoPorNombre(productos, "MONITOR"));

const monitor = productos.find(item => item.nombre.toLowerCase() === "monitor");
console.log(monitor);
