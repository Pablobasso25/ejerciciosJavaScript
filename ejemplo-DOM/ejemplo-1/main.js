




// Seleccionar Elementos del DOM
const title = document.getElementById("title");
console.log(title.innerText);

const mainDiv = document.querySelector(".main-div");
const listItems = document.querySelectorAll("ul.list > li");

// Modificar Elementos del DOM
// - Cambiar contenido
title.innerText = "Manipulando el DOM";
title.innerHTML = "<strong>Nuevo</strong> título";   // agrega un nuevo elemento HTML y si la existe, lo sobrescribe

// - Modificar atributos y clases
const image = document.querySelector("img");
image.setAttribute("src", "./assets/descarga.png"); // setAttribute modifica el atributo 
image.classList.add("img-responsive");             // añade una nueva clase 
// - Estilos
mainDiv.style.backgroundColor = "#ffcc00";     // añade estilos en linea

// Crear y Eliminar Elementos del DOM
// - Crear elementos
const newDiv = document.createElement("div");
newDiv.innerText = "Soy un div nuevo";
document.body.appendChild(newDiv);     //hijo de body

// - Eliminar elementos
const oldDiv = document.querySelector(".old-div");
document.body.removeChild(oldDiv);    // hijos de body

// Eventos en el DOM
// - Escuchar eventos (opción 1)
const button = document.querySelector("button");
/* button.addEventListener("click", function () {          // esta función se puede declarar aqui dentro, o crear fuera y luego invocarla o  
	alert("¡Botón presionado!");
}); */

// Evento con parámetros  (opción 2)
function showMessage(message) {     // se crea la función y se la pasa como callback 
	alert(message);
}

button.addEventListener("click", function () {  // en vez de crear un función anonima, se pasa como callback la función creada
	showMessage("¡Mensaje personalizado!");
});

// Crear una lista dinámica
const input = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("dynamicList");

addButton.addEventListener("click", function () {
	if (input.value.trim() !== "") {                   // verifica si el valor del input no esta vacio
		const newItem = document.createElement("li");   // si pasa la verificación, se guarda en una variable que va creando la lista desordenada
		newItem.innerText = input.value;              // se añade el valor ingersado al newItem, en este caso es una cadena de texto
		list.appendChild(newItem);                   // a la lista le añadimos como hijo el newItem
		input.value = "";                            // Limpiar el input     
	}
});

// Filtrado de elementos del DOM
const filterInput = document.getElementById("filterInput");   
const itemsList = document.getElementById("itemsList");

filterInput.addEventListener("keyup", function () {    // keyup se activa cuando se presiona y se suelta una tecla del teclado
	const term = filterInput.value.toLowerCase();      // se guarda el valor ingresado por el usuario
	const items = itemsList.getElementsByTagName("li"); // se captura los elementos que tengan la etiqueta "li" devuelve un array  de elementos

	Array.from(items).forEach(function (item) {       // se utiliza un bucle para recorrer el array      
		if (item.textContent.toLowerCase().indexOf(term) !== -1) {   // "si existe term (el contenido que el usuario escriba) dentro del array items", devuelve la posisión y si no encuentra nada, devuelve -1
			item.style.display = "block";              // si existe la palabra o lo que este buscando, lo devuelve como un bloque
		} else {
			item.style.display = "none";              // si no existe, no lo muestra en el html
		}
	});
});

// Drag and Drop   (arrastrar y soltar)
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', function() {
    setTimeout(() => { this.style.display = 'none'; }, 0);  // esto evita que se vea el elemento cuando se comienza a arrastrar
});

dropzone.addEventListener('dragover', function(e) {     // evento mientras se arrstra
    e.preventDefault();
});

dropzone.addEventListener('drop', function() {          // evento cuando se suelta
    draggable.style.display = 'block';
    this.append(draggable);                            // cuando se suelta, se añade como hijo de dropzone
});