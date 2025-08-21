
/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */



/* let suma = 0;                    // Acumulador inicializado
let continuar = true;               // Esto controla el ciclo siempre que sea true

while (continuar){                 // se repite mientras el usuario quiera seguir ingresando números

    let entrada = prompt("Ingresá un número")        // Se solicita una entrada al usuario
    
    if (entrada === null) {                          // Si el usuario cancela el prompt, se rompe el ciclo                                 
        break;
    }

    if(entrada.trim() === "" || isNaN(entrada)){  //Si la entrada está vacía o no es un número, se muestra una alerta y se inicia de nuevo el ciclo
        alert("Entrada inválida");
        continue;
    }else{                                 
    suma += parseFloat(entrada);        // si la entrada es correcta (o sea un número), se lo convierte en entero y se lo acumula
    continuar = confirm("¿Querés ingresar otro número?"); // se pregunta si quiere ingresar otro número, si acepta, el cilo vuelve al principio y el valor ingresado vuelve a pasar por todas las condiciones(filtros) anteriores para luego sumarlo al nùmero ingresado anteriormente.
    }
}

alert(`Los números ingresados suman un total de: ${suma}`);  // si el usuario no quiere seguir agregando numeros, se corta el bucle y se imprime la variable suma que contiene la suma de todos los nùmeros ingresados. */




let contador = 10;

while (contador >=0 ){
    console.log(contador);
    contador--
    
}
console.log("Feliz año nuevo!!");
