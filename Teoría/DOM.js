 // Manejo del DOM (Document Object Model)

 // - Selección de elementos 

 ///////////// Métodos basicos ////////////////////  (selector HTML)
 
const myElementById = document.getElementById("id")  //asociado a un unico elemento - devuelve un elemento

const myElementsByClass = document.getElementsByClassName("class")  // asociado a varios elementos que son iguales - devuelve una coleccion de elementos

const myElementsByTag =  document.getElementsByTagName ("tag") // asociado a la etiqueta de los elementos 

 /////////////// Métodos modernos  //////////////////////   (selector CSS)   

document.querySelector(".paragraph")  // devuelve un solo elemento

document.querySelectorAll("paragraph") // devuelve una lista de nodos


 // - Manipulación de elementos   

const title = document.getElementById ("title")  // se guarda en una constante la referencia al objeto
title.textContent = "Hola Javascript"  // puedo modifica el texto que diga "title" por "Hola javascript"

const container = document.querySelector(".container")   // accedo a container
container.innerHTML = "<p>Esto es un párrafo</p>"  // una vez que accedo, puedo hacer cambios en el interior del contenedor, pasandole un componente HTML. Ejemplo: un boton, un parrafo, etc


// - Modificación de atributos  (como ejemplo de utiliza el elemento link)

// Obtención del atributo
const link = document.querySelector("a")  // en este caso accede al link completo
const url = link.getAttribute("href")  // y de esta forma se accede al atributo "href" dentro del link - devuelve el valor del atributo

//Estrablecimiento del atributo (Modificación del atributo)
link.setAttribute("href", "https://pablo.com")  // Le da un valor del atributo y si ya lo tiene, lo sobreecribe

// comprobación de atributo
const hasTarget = link.hasAttribute("target") // pregunta si el elemento tiene ese atributo - devuelve true o false

// Eliminación de atributos
link.removeAttribute("target")


// - Interacción con clases CSS
const box = document.querySelector(".box")   // accedo a la caja
box.classList.add("selected")           // me muestra la lista de clases que tiene y le agrego un nuevo nombre de clases "selected"
box.classList.remove("selected")       // elimina la clase
box.classList.toggle("selected")       // si no existe , la añade y si existe, la elimina



// - cambio el estilo sin que tenga un css asignado
const button = document.querySelector("button")
button.style.backgroundColor = "blue"    // cambia el color del fondo del boton
button.style.color = "white"             // accede al boton y le cambia el color general o sea de las letras
button.style.padding = "10px"             // cambio el padding del boton


/////////////// Creación y eliminación de elementos ////////////////////

// - Creación

const newParagraph = document.createElement("p")
newParagraph.textContent = "Este es un nuevo párrafo creado desde JS"
newParagraph.style.padding = "8px"

container.appendChild(newParagraph)   // le añado al container un nuevo hijo 

// ejemplo: si quiero crear un listado de elementos
const itemsList = document.querySelector("ul")  // primero accedo al contenedor del listado la etiqueta "ul"

const newItems = document.createElement("li")  // luego creo un nuevo elemento
newItems.textContent = "Nuevo elemento"        // le agrego contenido al elemento creado

// Inserción en un lugar concreto
const secondItems = itemsList.children[1]  // accede al segundo elemento 
itemsList.insertBefore(newItems, secondItems) // ahoara si quiero insertar algo antes de este elemento - se lee asi: sobre mi lista de elementos, quiero insertar el newItem antes del secondItem

// Métodos modernos para insertar
itemsList.append(newItems) // lo inserta al final del listado
itemsList.prepend(newItems) // lo inserta al principio del listado 
secondItems.before(newItems)  // accede al elemento de referencia y le inserta antes el nuevo elemento  
secondItems.after(newItems)  // accede al elemento de referencia y le inserta despues el nuevo elemento 

// - Eliminación
newParagraph.remove()  // elimina un elemento 
// Eliminación tradicional
const parent = newParagraph.parentElement 
parent.removeChild(newParagraph)


///////// Elementos del DOM ////////

function showMsg() {
    alert("Clic!")
}

const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg)

sendButton.addEventListener("click", () => {
    alert("Clic con una arrow function!")
})

// Eventos comunes

document.addEventListener("DOMContentLoader", () => {
    console.log("El DOM está completamente cargado")
})

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    // Código
})