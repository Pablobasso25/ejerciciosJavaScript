

/* Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1 */

let entrada = prompt("Ingrese un texto").toLowerCase();
let vocales = "";

for( let i = 0 ; i < entrada.length ; i++ ){
    let letra = entrada.charAt(i)
    if( 'aeiouAEIOU'.includes(letra) ){  // includes(letra) si encuentra algo que esta en la condicion lo suma adentro de vocales
        vocales ++;   //Vocales++ hace que cuente, por ende es un contador

    }

}
document.writeln("La cantidad de vocales son:" + vocales);