/////////////////////////////////// Reloj digital //////////////////////////////////////

// 1- Creación de elementos
const row = document.createElement("div");
row.className = "d-flex justify-content-center";

const col = document.createElement("div");
col.className = "col-3 card bg-dark text-center p-5 mt-5 mb-5 shadow-sm";
/* col.setAttribute('id', 'shadow') */

const h2 = document.createElement("h2");
h2.setAttribute("id", "reloj");
h2.className = "display-4 text-primary";

// 2- agrego un elemento dentro del otro
const container = document.querySelector(".container");
container.appendChild(row);
row.appendChild(col);
col.appendChild(h2);

// función para el reloj

const actualizarReloj = () => {
  const actual = new Date(); // Creo un objeto Date que representa el momento actual--- "actual" contiene toda la info: hora, minutos, segundos, día, mes, año
  const horas = String(actual.getHours()).padStart(2, "0");
  const minutos = String(actual.getMinutes()).padStart(2, "0");
  const segundos = String(actual.getSeconds()).padStart(2, "0");
  /* - se extrae la hora con getHours (devuelve un número entre 0 y 23); 
     - se convierte en un string para que se pueda aplicar .padStart
     - .padStart: Asegura que el número tenga dos dígitos (2 , '0') el primer parametro es el largo total de la cadena y el segundo es el relleno para que no rompa el formato de dos dígitos 

   */

  const reloj = document.getElementById("reloj");
  reloj.textContent = `${horas}:${minutos}:${segundos}`;
};

setInterval(actualizarReloj, 1000); // cada segundo, se ejecuta actualizarReloj() y actualiza la hora en pantalla

//////////////////////////////// lista de tareas /////////////////////////////////////

const crearTarea = (event) => {
  event.preventDefault();

  const inputTarea = document.getElementById("inputTarea");
  const texto = inputTarea.value.trim();

  // verificar si no se ingresa espacios vacíos
  if (texto === "") {
    mostrarToast("El contenido no puede estar vacío.", "bg-danger");
    inputTarea.focus();
    return;
  }
  // verificar si hay tareas repetidas
  const todasLasTareas = document.querySelectorAll("#listaTareas span");
  const existe = Array.from(todasLasTareas).some(
    (span) => span.textContent === texto
  );

  if (existe) {
    mostrarToast("Ya existe una tarea con ese texto.", "bg-danger");
    inputTarea.focus();
    return;
  }
  // verificar mínimo de caracteres
  if (texto.length < 3) {
    mostrarToast("La tarea debe tener al menos 3 caracteres.", "bg-danger");
    inputTarea.focus();
    return;
  }

  //creo el contendedor de la tarea
  const listGroupItem = document.createElement("div");
  listGroupItem.className =
    "list-group-item d-flex justify-content-between align-items-center bg-dark";

  //creo el contenido de la tarea
  const tareaContent = document.createElement("span");
  tareaContent.className = "flex-grow-1";
  tareaContent.textContent = texto;

  //creo el grupo de botones
  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  // creo el ícono de editar
  const iconoEditar = document.createElement("i");
  iconoEditar.className = "fa-solid fa-pen-to-square";

  // creo el ícono de eliminar
  const iconoEliminar = document.createElement("i");
  iconoEliminar.className = "fa-solid fa-xmark";

  // creo el botón de editar y le agrego el ícono y llamo a la función que va a ejecutar al hacerle click
  const btnEditar = document.createElement("button");
  btnEditar.className = "btn btn-secondary btn-sm mx-2";
  btnEditar.appendChild(iconoEditar);
  btnEditar.addEventListener("click", editarTarea);

  // creo el botón de eliminar y le agrego el ícono y llamo a la función que va a ejecutar al hacerle click
  const btnEliminar = document.createElement("button");
  btnEliminar.className = "btn btn-danger btn-sm";
  btnEliminar.appendChild(iconoEliminar);
  btnEliminar.addEventListener("click", eliminarTarea); //  Esto conecta el botón con una función que se va a ejecutar al hacer clic.

  // ensamblo todos los elementos
  const listaTareas = document.querySelector("#listaTareas");
  listaTareas.appendChild(listGroupItem);
  listGroupItem.appendChild(tareaContent);
  listGroupItem.appendChild(btnGroup);
  btnGroup.appendChild(btnEditar);
  btnGroup.appendChild(btnEliminar);

  // limpia el input despuesd de agregar una tarea
  formularioTarea.reset();

  // llamo a la función agregarToast para que muestre un mensaje al agregar una tarea
  mostrarToast("Tarea agregada con éxito", "bg-success");
};

// Función para editar una tarea de la lista
function editarTarea(event) {
  const boton = event.target.closest("button");
  const tarea = boton.closest(".list-group-item");
  const textoOriginal = tarea.querySelector("span");

  // Crear input con el texto actual
  const input = document.createElement("input");
  input.type = "text";
  input.className = "form-control me-2";
  input.value = textoOriginal.textContent;

  // Reemplazar el span por el input
  tarea.replaceChild(input, textoOriginal);

  // Cambiar ícono a “guardar”
  boton.innerHTML = '<i class="fa-solid fa-check"></i>';

  // Cambiar evento del botón a guardar
  boton.removeEventListener("click", editarTarea);
  boton.addEventListener("click", () => guardarTarea(input, boton));
}

// Función para guardar la tarea editada
function guardarTarea(input, boton) {
  const nuevoTexto = input.value.trim();

  // verificar si no se ingresa espacios vacíos
  if (nuevoTexto === "") {
    mostrarToast("El contenido no puede estar vacío.", "bg-danger");
    input.focus();
    return;
  }
  // verificar si hay tareas repetidas
  const todasLasTareas = document.querySelectorAll("#listaTareas span");
  const existe = Array.from(todasLasTareas).some(
    (span) => span.textContent === nuevoTexto
  );

  if (existe) {
    mostrarToast("Ya existe una tarea con ese texto.", "bg-danger");
    input.focus();
    return;
  }
  // verificar mínimo de caracteres
  if (nuevoTexto.length < 3) {
    mostrarToast("La tarea debe tener al menos 3 caracteres.", "bg-danger");
    input.focus();
    return;
  }

  const tarea = boton.closest(".list-group-item");

  // Creo nuevo span con el texto actualizado
  const nuevoSpan = document.createElement("span");
  nuevoSpan.className = "flex-grow-1";
  nuevoSpan.textContent = nuevoTexto;

  // Reemplazo el input por el span
  tarea.replaceChild(nuevoSpan, input);

  // vuelvo a poner el ícono de “editar”
  boton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

  // Restauro el evento original
  boton.removeEventListener("click", guardarTarea);
  boton.addEventListener("click", editarTarea);

  // Mostrar toast de confirmación
  mostrarToast("Tarea actualizada con Exito.", "bg-success");
}

// Función para eliminar una tarea de la lista
function eliminarTarea(event) {
  const tarea = event.target.closest(".list-group-item"); //event.target: es el botón que fue clickeado ---- closest('.list-group-item') busca el contenedor que contiene a la lista de tareas

  tarea.classList.add("fade-out"); // activa la transición visual
  setTimeout(() => tarea.remove(), 500); // setTimeout espera a que la animación termine antes de eliminar el nodo ---- 500 tiene que coincidir con el tiempo que se le dio en CSS sino no funciona

  //llamo a la función mostrarToast
  mostrarToast("Tarea eliminada.", "bg-secondary");
}

//función para el toast (mensaje flotante)
function mostrarToast(mensaje, color = "bg-dark") {
  // bg-dark por defecto, luego se lo cambia cuando se llam a la función

  const toastElemento = document.getElementById("toastGlobal");
  const toastTexto = document.getElementById("toastMensaje");

  toastTexto.textContent = mensaje;

  // Limpiar clases previas y aplicar nuevo color
  toastElemento.className = `toast align-items-center text-white ${color} border-0`;

  const toast = new bootstrap.Toast(toastElemento, {
    delay: 2000,
    autohide: true,
  });

  toast.show();
}

formularioTarea.addEventListener("submit", crearTarea);
