
/* Eliminar el primer elemento de un array: 
Crea una función que reciba un array y elimine su primer elemento usando .shift(). */



//función para agregar utilizada en el ejercicio 2
function agregarAlFinal (elementoNuevo){
    elementos.push(elementoNuevo);
    return elementoNuevo;
}


// funcion pra eliminar el primer elemento
function eliminarElemento (){
   return elementos.shift();
}


let elementos = [];
let opcion;

do{
    opcion = prompt(
        "Menú de elementos:\n" +
        "• 1 Agregar un elemento\n" +
        "• 2 Ver lista de elementos\n" +
        "• 3 Eliminar el primer elemento\n" +
        "• 4 Salir"
    );

    switch (opcion) {
        case "1":
            let nuevoElemento = prompt("Ingresá un elemento");
            if (nuevoElemento !== null && nuevoElemento.trim() !== "") {
                let nuevo = agregarAlFinal (nuevoElemento)
                alert("Elemento agregado con exito");
            } else{
                alert("Entrada inválida");
            }
            break;

        case "2":
            if (elementos.length > 0) {
                alert("Lista de elementos:\n" + elementos.join("\n"));
            } else{
                alert("La lista está vacia");
            }
            break;

        case "3":
            if (elementos.length > 0) {
                let eliminado = eliminarElemento ()
                alert("Elemento eliminado:" + eliminado);
            } else {
                alert("No hay elementos para eliminar");
            }
            break;

        case "4":
            alert("¡¡Nos vemos pronto!!");
            break;
    
        default:
            alert("Opción inválida. Elegí entre 1 y 4");
            break;
    }
} while (opcion !== "4");
























































let agregar;
let array = [];

function eliminarPrimero (eliminarElemento){
    array.shift(eliminarElemento);
    return eliminarElemento
}

do{
    agregar = prompt("¿Qué querés agregar a la lista? (Cancelar para salir)")
    
if (agregar !== null && agregar.trim() !== "") {
    let agregado = agregarAlFinal(agregar)           //una vez que la entrada es válida, se crea una variable nueva para guardar los nuevos ingresos 
    alert("Agregaste: " + agregado + " a la lista");
} else if (agregar !== null){
    alert("Entrada inválida")
}
} while (confirm("¿Querés agregar algo más?"))      

document.writeln("Lista completa:" + array.join(", "))









 //////////////// Otra forma más dinámica de hacerlo //////////////

// Pido al usuario cuántos números quiere ingresar
let cantidad = prompt("¿Cuántos números vas a ingresar?");
let numeros = [];

if (
  cantidad === null ||            // si se canceló la entrada 
  cantidad.trim() === "" ||         // si está vacía o llena de espacios
  isNaN(cantidad) ||              // si no es un número
  parseInt(cantidad) < 1          // si es menor que 1
) {
  alert("Cantidad inválida. Tenes que ingresar un número mayor a 0.");
} else {
  cantidad = parseInt(cantidad);
  
  // Se pide cada número y lo guardamos en el array
  for (let i = 0; i < cantidad; i++) {
    let entrada = prompt("Ingresá el número #" + (i + 1));   // forma dinámica de pedir números, se suma 1 porque los indices comienzan en 0  
    
    if (
      entrada === null ||          // El usuario presionó "Cancelar"
      entrada.trim() === "" ||     // La entrada está vacía o son solo espacios
      isNaN(entrada)               // La entrada no es un número
    ) {
      alert("Entrada inválida. Se usará 0 por defecto.");
      numeros.push(0);            //evita que el programa se rompa por una entrada inválida y garantiza que el array siempre reciba un número en este caso un 0
    } else {                      
      numeros.push(parseFloat(entrada)); // si se ingesa un número válido se lo agrega al array "numeros"
    }
  }
  
  
  function encontrarMayor(arrayNumeros) {
    let mayor = arrayNumeros[0];
  
    for (let i = 1; i < arrayNumeros.length; i++) {
      if (arrayNumeros[i] > mayor) {
        mayor = arrayNumeros[i];
      }
    }
  
    return mayor;
  }
  
  
  let mayor = encontrarMayor(numeros);
  
  document.writeln("Los números ingresados son: " + numeros.join(", ") + "<br>");   //.join(", ") agega un aspacio despues de la coma.
  document.writeln("El número mayor es: " + mayor);
} 
