


/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */


function parImpar(numero){
    if(numero % 2 === 0){
        return "El número ingresado es par"
    }else {
        return "El número ingresado es impar"
    }
}

// ahora le pido los datos al usuario y se verifica

let entrada = prompt("Ingresá un nímero entero");

if (entrada === null || entrada.trim() === "" || isNaN(entrada)) {     //si se cancela, si se ingresa un espacio vacío o una letra
    alert("Entrada inválida. Por favor ingresá un número entero (ej: 1, 4, 45, 32)")
}else {
    let numero = parseInt(entrada);       //si lo ingresado es válido, se convierte en número entero

    let resultado = parImpar(numero);     // se utiliza la función
    document.writeln(resultado);          //se muestra en pantalla
}      


// ejemplo de como se puede reutilizar la función 
let numeros = [3, 10, 7, 22, 15];

for (let i = 0; i <numeros.length; i++){
    let resultado = parImpar(numeros[i]);
    document.writeln("El número " + numeros[i] + ": " + resultado + "<br>");
}




/* let entrada = prompt("Ingrese un número entero");

if (entrada === null || entrada.trim() === "" || isNaN(entrada)) {
    alert("entrada inválida. Por favor ingresa un número entero (ej: 1, 4, 56, 32)")
}else{
    let numero = parseInt(entrada);     // si las entrdas son válidas, se guardan en la variable numero 
    
    function parImpar(numero){
    
    if (numero % 2 === 0) {
        return "El número ingresado es par"
    }else{
        return "El número ingresado es impar"
    }
}
    let resultado = parImpar(numero);
    document.writeln(resultado);
} */