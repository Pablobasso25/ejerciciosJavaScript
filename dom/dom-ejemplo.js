
const text = document.getElementById("text")
const button = document.getElementById("button")
const list = document.getElementById("list")

//agregar una tarea
function addTask () {

    if (text.value === "") return 

    const newElement = document.createElement("li")   // Primero creo un elemento nuevo        
    newElement.textContent = text.value

    newElement.addEventListener("click", () => {     // all hacerle clck en la tarea de la lista, la elimina
        newElement.remove()
    })

    list.appendChild(newElement)   // agrego el nuevo elemento al listado

    text.value = ""  // una vez que se agrega la tarea, se limpia el input

}

button.addEventListener("click", addTask) //cuando se haga click, que llame a la funcion "agregar tarea"

text.addEventListener("keypress", (event) => {   // se agrega tarea tambien al hacer enter
    if (event.key === "Enter") {
        addTask()
    }
})