

/* Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */


let entrada = prompt("Ingresá un número entre 1 y 50");     // se le pide al usuario que ingrese un número. Lo que escriba se guarda como texto en la variable entrada.

if (entrada === null) {                                     //Si el usuario presiona “Cancelar”, entrada será null. Lo cual hace que termine el programa
    
    alert("Operación cancelada.");

}else if (                                         // se valida que: No esté vacío (trim()), que sea un número (isNaN), Esté dentro del rango (1 a 50)
  entrada.trim() === "" ||                          // si no cumple alguna de estas condiciones, mostramos un alerta de número inválido
  isNaN(entrada) ||
  parseInt(entrada) < 1 ||
  parseInt(entrada) > 50
) {

  alert("Número inválido. Debe estar entre 1 y 50.");

} else {
  let numero = parseInt(entrada);                     //  Si todo está bien, convertimos el texto a número entero y lo guardamos en la variable numero.

    for (let i = numero; i >= 1; i--) {              // Bucle descendente: empieza en el número ingresado y baja hasta 1.
    let linea = "";                                  //se crea una variable vacía para construir la línea actual.
    
     for (let j = 0; j < i; j++) {                  // Segundo bucle: repite el número i exactamente i veces. Ejemplo: si i = 3, se repite 3 veces "333"
    linea += i;                                     // se construye la nueva linea 
    }
    document.writeln(linea + "<br>");
  }
} 



