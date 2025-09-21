

/////////////////////////////////// Reloj digital //////////////////////////////////////

// 1- Creación de elementos 
const row = document.createElement('div');
row.className = 'd-flex justify-content-center';

const col = document.createElement('div');
col.className = 'col-3 card bg-dark text-center p-5 mt-5';

const h2 = document.createElement('h2');
h2.setAttribute('id', 'reloj');
h2.className = 'display-4 text-primary';

// 2- agrego un elemento dentro del otro
const container = document.querySelector('.container');
container.appendChild(row);
row.appendChild(col);
col.appendChild(h2);


// función para el reloj

const actualizarReloj = () => { 
  const actual = new Date();         // Creo un objeto Date que representa el momento actual--- "actual" contiene toda la info: hora, minutos, segundos, día, mes, año
  const horas = String(actual.getHours()).padStart(2, '0');     
  const minutos = String(actual.getMinutes()).padStart(2, '0');
  const segundos = String(actual.getSeconds()).padStart(2, '0');
  /* - se extrae la hora con getHours (devuelve un número entre 0 y 23); 
     - se convierte en un string para que se pueda aplicar .padStart
     - .padStart: Asegura que el número tenga dos dígitos (2 , '0') el primer parametro es el largo total de la cadena y el segundo es el relleno para que no rompa el formato de dos dígitos 

   */

  const reloj = document.getElementById("reloj");
  reloj.textContent = `${horas}:${minutos}:${segundos}`;
};

setInterval(actualizarReloj, 1000);  // cada segundo, se ejecuta actualizarReloj() y actualiza la hora en pantalla






//////////////////////////////// lista de tareas /////////////////////////////////////

const crearTarea = (event) => {
  event.preventDefault();

  const inputTarea = document.getElementById('inputTarea');
  const texto = inputTarea.value.trim();
  if (texto === "") return;

//creo el contendedor de la tarea
  const listGroupItem = document.createElement('div');
  listGroupItem.className = ('list-group-item d-flex justify-content-between align-items-center');

//creo el contenido de la tarea 
  const tareaContent = document.createElement('span');
  tareaContent.className = 'flex-grow-1';
  tareaContent.textContent = texto;

//creo el grupo de botones 
  const btnGroup = document.createElement('div');
  btnGroup.className = 'btn-group';

// creo el ícono de editar
  const iconoEditar = document.createElement('i');
  iconoEditar.className = ('fa-solid fa-pen-to-square');

// creo el ícono de eliminar
  const iconoEliminar = document.createElement ('i');
  iconoEliminar.className = ('fa-solid fa-xmark')

// creo el botón de editar y le agrego el ícono y llamo a la función que va a ejecutar al hacerle click
  const btnEditar = document.createElement('button');
  btnEditar.className = ('btn btn-warning btn-sm');
  btnEditar.appendChild(iconoEditar);

// creo el botón de eliminar y le agrego el ícono y llamo a la función que va a ejecutar al hacerle click
  const btnEliminar = document.createElement('button');
  btnEliminar.className = ('btn btn-danger btn-sm');
  btnEliminar.appendChild(iconoEliminar);
  btnEliminar.addEventListener('click', eliminarTarea);     //  Esto conecta el botón con una función que se va a ejecutar al hacer clic.

// ensamblo todos los elementos 
  const listaTareas = document.querySelector("#listaTareas");
    listaTareas.appendChild(listGroupItem);
    listGroupItem.appendChild(tareaContent);
    listGroupItem.appendChild(btnGroup)
    btnGroup.appendChild(btnEditar);
    btnGroup.appendChild(btnEliminar);

// limpia el input despuesd de agregar una tarea
    formularioTarea.reset();
  }
  

// Función para eliminar una tarea de la lista
  function eliminarTarea(event) {
  const tarea = event.target.closest('.list-group-item');  //event.target: es el botón que fue clickeado ---- closest('.list-group-item') busca el contenedor que contiene a la lista de tareas
  
  tarea.classList.add('fade-out');  // activa la transición visual
  setTimeout(() => tarea.remove(), 500); // setTimeout espera a que la animación termine antes de eliminar el nodo
}


formularioTarea.addEventListener("submit", crearTarea);


