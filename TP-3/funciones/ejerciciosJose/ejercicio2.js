
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numeros = [];
let entrada;
/* Primero declaro un array vacío llamado numeros donde voy a guardar todos los valores numéricos que el usuario ingrese. También creo una variable entrada para capturar lo que el usuario escriba en cada prompt." */

do {
  entrada = prompt("Ingresá un número (o presioná cancelar para terminar):");
/* Uso un bucle do...while para pedir números al usuario. El bucle se ejecuta al menos una vez y sigue hasta que el usuario presione Cancelar. */

  if (entrada !== null && entrada.trim() !== "" && !isNaN(entrada)) {

    numeros.push(parseFloat(entrada));

  }else {
    alert("Entrada inválida. Por favor ingresá un número válido")
  }
/* Verifico que la entrada no sea null , que no esté vacía (trim() elimina espacios), y que sea un número (!isNaN). Si pasa la validación, convierto la entrada a número decimal con parseFloat() y la guardo en el array "numeros", si no pas le muestro una alerta de entrada inválida. */

} while (entrada !== null);
/* El bucle se repite mientras el usuario no presione Cancelar. */


function encontrarMayor(numeros){
    let mayor = numeros[0];      // se inicializa la variable con el primer valor del array [0] porque todavia no sabemos cúal es el número mayor que ingrese el usuario. ejemplo: si el array el [12, 45,7,89], al principo va a ser mayor=12, luego el bucle va comparando a medida que recorre el array si hay algún número mayor a 12

    for (let i = 1; i < numeros.length; i++){    // let i = 1 porqie ya se utilizzo el indice 0 para inicializar "mayor"
        if(numeros[i] > mayor){    //En cada vuelta del bucle, se compara el número actual (numeros[i]) con el valor guardado en mayor.
            mayor = numeros[i];    // si encuentra uno más grande, se actualiza el valor de "mayor" con el nuevo valor encontrado
        }                          //se repite este proceso haasta que se recorre todo el array
    }
    return mayor;        //termina la funcion y devuelve el valor que quedo guardado en la variable mayor despues de recorrer todo el array, este valor puede ser guardado, mostrado y usado en otra ocacion (en este caso return seria el valor del numero mayor)
}

// forma de mostrar resultado 1) creando una variable que contenga la función actualizada (valor de return)
let resultado = encontrarMayor(numeros);      
document.writeln("El número mayor es: " + resultado);

/* •Cuando se va a reutilizar el resultado más de una vez
• para hacer cálculos adicionales con ese valor
• para guardar el resultado y usarlo después (por ejemplo, en otra función, en una condición, etc.)
 */


// forma de mostrar resultado 2) directamente colocando la función actualizada (valor de return)
document.writeln("El número mayor es: " + encontrarMayor(numeros));

/* • Cuando solo se necesita mostrar el resultado una vez
• Cuando no se va a reutilizar el valor*/



/* //////////////// Otra forma más dinámica de hacerlo //////////////

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
} */











