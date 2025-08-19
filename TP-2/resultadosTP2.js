
/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas
 concatenadas con un guión -. */




let texto = "";                                                   // variable vacia para poder ir agregando cadenas de texto
let resultado = true;                                             // esta variable controla el bucle, mientras "resultado" sea true, el usuario va a poder seguir ingresanto cadenas de textos.

while (resultado) {                                               // Se ejecuta el bucle mientras que el usuario quiera seguir.
    let entrada = prompt("Ingresá un texto");                     // si el usuario presiona "cancelar" el texto es null

    if (entrada === null) {                                       // si texto ingresado es null, sale del bucle y el programa no pregunta más.
        break;
    }

    if (texto === "") {                                           //Si es la primera vez que se ingresa un texto
        texto = entrada;                                          // se guarda la cadena en la variable texto, sin el guión
    } else {
        texto += "-" + entrada;                                   // cuando ingresa un segundo texto, primero coloca un guion y luego concatena el siguiente texto
    }

    resultado = confirm("¿Querés ingresar otra cadena de texto?"); // Si el usuario presiona "Aceptar", resultado sigue siendo true y el bucle repite.
}

alert("Cadenas concatenadas: " + texto);























