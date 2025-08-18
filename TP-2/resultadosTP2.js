            // EJERCICIO 1 //

/* let edad = parseInt(prompt("Ingrese su edad"))

if(edad>=18){
    alert("Su edad es apta para conducir")
}else{
    alert("Ingrese un caracte valido o usted es menor de edad")
    } */

            ///EJERCICIO 2 ///

/* let nota;

do{
    nota = parseInt(prompt("Ingresar nota del 0 al 10"));

    if (isNaN(nota)){
        alert("Introduce un número válido")
    }
    else if (nota < 0 || nota > 10){
        alert("Número erróneo");
    }else if (nota >= 0 && nota <= 2){
        alert("Muy deficiente");
    }else if (nota >= 3 && nota <= 4){
        alert("Insuficiente");
    }else if (nota >= 5 && nota <= 6){
        alert("Suficiente");
    }else if (nota == 7){
        alert("Bien");
    }else if (nota >= 8 && nota <= 9){
        alert("Notable");
    }else if (nota == 10) {
        alert("Sobresaliente");
    }
} while (isNaN(nota) || nota < 0 || nota > 10) ; */          //El bucle se repite si la nota no es un número válido o está fuera del rango. Se detiene cuando el usuario ingresa un número entre 0 y 10.



         /// EJERCICIO 3 ///

/* let texto = "";                                                   // variable vacia para poder ir agregando cadenas de texto
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

alert("Cadenas concatenadas: " + texto); */





















/* let letrasDNI = [
  "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X",
  "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
];

let entrada;

do {
  entrada = prompt("Ingresá tu número de DNI (0 a 99999999):");

  if (entrada === null) {
    break;                                                            // El usuario cancela
  }

  let dni = parseInt(entrada);

  if (isNaN(dni)) {
    alert("Número inválido");
  } else if (dni < 0 || dni > 99999999) {
    alert("El número debe estar entre 0 y 99.999.999.");
  } else {
    let resto = dni % 23;
    let letra = letrasDNI[resto];
    alert(`DNI: ${dni} → Letra: '${letra}'`);
  }

} while (true); */

do{
    let entrada = parseInt(prompt("Ingrese el dni:"));

    
    if(isNaN(entrada) || entrada<0 || entrada>99999999){
        alert("El valor ingresado esta fuera de los limites o esta vacio");
    }
    else{
      let resto = entrada % 23;
      let letra = "";
     /*Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) */ 
      switch(resto)
      {
        case 0: letra = "T";
        break;
        
        case 1:letra = "R";
        break;

        case 2:letra = "W";
        break;

        case 3:letra = "A";
        break;

        case 4:letra = "G";
        break;

        case 5:letra = "M";
        break;

        case 6:letra = "Y";
        break;

        case 7:letra = "F";
        break;

        case 8:letra = "P";
        break;

        case 9:letra = "D";
        break;

         /*Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) */ 

        case 10:letra = "X";
        break;

        case 11:letra = "B";
        break;

        case 12:letra = "N";
        break;

        case 13:letra = "J";
        break;

        case 14:letra = "Z";
        break;

        case 15:letra = "S";
        break;

        case 16:letra = "Q";
        break;

        case 17:letra = "V";
        break;

        case 18:letra = "H";
        break;

        case 19:letra = "L";
        break;

        case 20:letra = "C";
        break;

        case 21:letra = "K";
        break;

        case 22:letra = "E";
        break;
      }
      alert("El dni es " + entrada + " La letra es " + letra);
    }

    let respuesta=confirm("Precione cancelar para terminar el programa?");
    if(!respuesta){
        break;
    }
}while(true);