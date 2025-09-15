//////////////////////////////  Clases, classList y métodos de classLists ////////////////////////////////////

const titulo = document.querySelector(".titulo");

titulo.classList.add("grande");  // agrega un clase al elemento que se puede modificar en css
titulo.classList.remove("chico")  // elimina una clase

const valor = titulo.classList.item(1)  // devuelve el valor de la clase - en este caso devuelve grande
document.writeln(valor)  


