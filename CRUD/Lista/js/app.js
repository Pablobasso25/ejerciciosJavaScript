
import { Gift } from './clases.js'; // Importo la clase Gift


// Variable global para almacenar los datos
let datos = [];

// Capturo el cuerpo de la tabla
const cuerpoTabla = document.querySelector('#cuerpo-tabla');
// capturo modal desde bootstrap (via javascript)
const myModal = new bootstrap.Modal(document.getElementById('modalGift'))


// 1- función para mostrar el modal 
window.mostrarModal = (id) => {

    document.querySelector('#formModal').setAttribute('data-id', id);

    const gift = datos.find((item) => item.id === id);  
    document.querySelector('#giftModal').value = gift.gift;
    document.querySelector('#tipoModal').value = gift.tipo;
    document.querySelector('#tiempoModal').value = gift.tiempo;
    document.querySelector('#precioModal').value = gift.precio;
    document.querySelector('#imagenModal').value = gift.imagen;
    myModal.show()
}

// 2- Función asincrónica para obtener los datos del archivo JSON
const fetchData = async () => {
  try {
    const res = await fetch('data/data.json'); // await: es como decir : Esperá a que esta tarea termine antes de seguir con la siguiente línea
    const datos = await res.json();            // Convierte la respuesta (res) en un objeto JavaScript que se puede usar
    return datos;                              //Devuelve los datos que obtuvo del archivo data.json, de esta manera puedo usarlo en las funciones para diferentes propositos
                                  
  } catch (error) {                            // catch: atrapa el error y lo maneja sin que el programa se rompa " si alfo falla, hago esto"
    console.log('Error al cargar los datos:', error);   //es una variable que contiene información sobre lo que salió mal
  }
};

// 3- Función para cargar la tabla con los datos actuales
const cargarTabla = () => {
  cuerpoTabla.innerHTML = ''; // Limpia la tabla antes de renderizar

  datos.forEach((item) => {
    const fila = document.createElement('tr');

    // Celdas de contenido
    const gift = document.createElement('td');
    gift.textContent = item.gift;

    const tipo = document.createElement('td');
    tipo.textContent = item.tipo;

    const tiempo = document.createElement('td');
    tiempo.textContent = item.tiempo;

    const precio = document.createElement('td');
    precio.textContent = `$${item.precio}`;

    // Celda de botones
    const filaBtn = document.createElement('td');
    const contenedorBtn = document.createElement('div');
    contenedorBtn.className = 'd-flex gap-2';

    // Botón editar
    const btnEditar = document.createElement('button');
    btnEditar.className = 'btn btn-warning btn-sm me-2 btn-editar';
    btnEditar.setAttribute('type', 'button');
    const iconoEditar = document.createElement('i');
    iconoEditar.className = 'bi bi-pencil';
    btnEditar.appendChild(iconoEditar);
    btnEditar.addEventListener("click", () => mostrarModal(item.id));

    // Botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn btn-danger btn-sm me-2 btn-borrar';
    btnEliminar.setAttribute('type', 'button');
    const iconoEliminar = document.createElement('i');
    iconoEliminar.className = 'bi bi-trash';
    btnEliminar.appendChild(iconoEliminar);
    btnEliminar.addEventListener("click", () => borrarGift(item.id));

    // Ensamblo botones
    contenedorBtn.appendChild(btnEditar);
    contenedorBtn.appendChild(btnEliminar);
    filaBtn.appendChild(contenedorBtn);

    // Ensamblo fila completa
    fila.appendChild(gift);
    fila.appendChild(tipo);
    fila.appendChild(tiempo);
    fila.appendChild(precio);
    fila.appendChild(filaBtn);

    cuerpoTabla.appendChild(fila);
  });
};

// 4- Función para agregar un nuevo gift
const agregarGift = (event) => {
  event.preventDefault();

  const id = datos.at(-1)?.id + 1 || 1; // Si el array está vacío, arranca en 1

  // Capturo los valores del formulario
  const gift = document.querySelector('#gift').value;
  const tipo = document.querySelector('#tipo').value;
  const tiempo = document.querySelector('#tiempo').value;
  const precio = document.querySelector('#precio').value;
  const imagen = document.querySelector('#imagen').value;

  // Agrego el nuevo objeto al array
  datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));

  // Limpio el formulario y actualizo la tabla
  document.querySelector('#formGift').reset();

  localStorage.setItem("datos", JSON.stringify(datos));
  cargarTabla();
};



// 5- Función para eliminar un Gift
const borrarGift = (id) => {                              // Declara una función llamada "borrarGift" que recibe un parámetro "id".
  const gift = datos.find((item) => item.id === id);      // Uso el método "find" para encontrar el primer elemento que cumpla la condición y lo guardo en la variable 
  const confirmar = confirm(`¿Eliminar la gift card "${gift.gift}"?`); //El texto incluye el nombre de la gift card (`gift.gift`) para que sea más claro

  if (confirmar) {                                        // devuelve true o false
    datos = datos.filter((item) => item.id !== id);       // Crea un nuevo array con todos los elementos excepto el que tiene el "id" que se quiere eliminar
                                                          // se Usa .filter() para recorrer el array y conservar solo los que no coinciden con ese "id".
    cargarTabla();                                        // se Vuelve a renderizar la tabla en pantalla con el array actualizado                                                     
  }
};

// 6- Función para editar un Gift
const actualizarGift = (event) => {
  event.preventDefault();

  const form = document.querySelector('#formModal');
  const id = parseInt(form.getAttribute('data-id')); // recupero el id del gift que se esta editando-- Este id  fue guardado previamente con "form.setAttribute('data-id', id)" cuando se abrio el modal

  const index = datos.findIndex((item) => item.id === id);  //Busca la posición del gift en el array 'datos'
  if (index === -1) return;                                 //Si no lo encuentra (-1), sale de la función sin hacer nada

  // Capturo los valores actualizados del modal
  const gift = document.querySelector('#giftModal').value.trim();
  const tipo = document.querySelector('#tipoModal').value;
  const tiempo = document.querySelector('#tiempoModal').value;
  const precio = parseFloat(document.querySelector('#precioModal').value);
  const imagen = document.querySelector('#imagenModal').value.trim();

  // Validaciones básicas
  if (gift === '' || gift.length < 3) {
    alert('El nombre del gift no puede estar vacío ni tener menos de 3 caracteres.');
    return;
  }

  // Actualiza el objeto en el array 'datos' con los nuevos valores ingresados en el modal
  datos[index].gift = gift;
  datos[index].tipo = tipo;
  datos[index].tiempo = tiempo;
  datos[index].precio = precio;
  datos[index].imagen = imagen;

  // Cierro el modal y actualizo la tabla
  myModal.hide();
  cargarTabla();
};

/* // función para averiguar si la información de JSON esta en localStorage
export const cargaDeDatos = () =>{

    const baseDeDatos = JSON.parse(localStorage.getItem("datos"));

    if (!baseDeDatos){  //si no existe la baseDeDatos, que la cree
        localStorage.setItem("datos", JSON.stringify(datos)); //convierte el array en un string

    }
} */
const mostrarDatosLocalStorage = () => {
  const datosGuardados = JSON.parse(localStorage.getItem("datos"));

  if (Array.isArray(datosGuardados)) {
    datos = datosGuardados; // Actualiza la variable global
    cargarTabla();          // Renderiza la tabla con esos datos
  } else {
    console.log("No hay datos válidos en localStorage.");
  }
};

// Evento para cargar los datos al iniciar
document.addEventListener('DOMContentLoaded', async () => {
  const datosGuardados = JSON.parse(localStorage.getItem("datos"));

  if (Array.isArray(datosGuardados)) {
    datos = datosGuardados;
  } else {
    datos = await fetchData(); // Si no hay datos en localStorage, carga desde JSON
    localStorage.setItem("datos", JSON.stringify(datos)); // Guarda en localStorage
  }

  cargarTabla();
});


/* // Evento para cargar los datos al iniciar
document.addEventListener('DOMContentLoaded', async () => {
  datos = await fetchData(); // Carga inicial de datos
  cargarTabla();             // Renderiza la tabla
}); */

// Evento para agregar nuevos gifts
document.querySelector('#formGift').addEventListener('submit', agregarGift);

// Evento para actualizar los datos una vez modificados
document.querySelector('#formModal').addEventListener('submit', actualizarGift);

