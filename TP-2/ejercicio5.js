

/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: Input:  40773821   Output: ‘L’  */


let entrada;                          // variable que va a guardar lo que el usuario escriba en el prompt

do{
  entrada = prompt("Ingresá tu número de DNI (0 a 99999999)");   // Lo que escriba se guarda en 'entrada'
 
  if (entrada === null)              // Si el usuario presiona "Cancelar", el valor de entrada es null. En ese caso, sale del bucle con 'break'
    break; 

    if (entrada.trim() === "" || isNaN(entrada) || parseInt(entrada) < 0 || parseInt(entrada) > 99999999) {   // se valida que: no este vacio (trim()), sea un numero (isNaN detecta si NO es un número), Esté dentro del rango permitido (0 a 99.999.999) 

    alert("Entrada inválida. Ingresá un número entre 0 y 99999999.");   // Si la entrada no es válida, se muestra un mensaje y usamos 'continue' para volver a pedir el DNI
    continue;                                                          // continue hace que  vuelva a 'entrada'
  }


let dni = parseInt(entrada);    // si el valor ingresado es correcto, se convierte lo ingresado a números y se gusarda en la variable 'dni'

let resto = dni % 23;     // se calcula el resto del numero ingresado, Este número tiene que estar entre 0 y 22

let letra;                // se declara la variable que va a guardar la letra correspondiente

switch (resto) {
    case 0: letra = "T";    // Cada caso representa un posible resto
     break;
    case 1: letra = "R";
     break;
    case 2: letra = "W";
     break;
    case 3: letra = "A";
     break;
    case 4: letra = "G";
     break;
    case 5: letra = "M";
     break;
    case 6: letra = "Y";
     break;
    case 7: letra = "F";
     break;
    case 8: letra = "P";
     break;
    case 9: letra = "D";
     break;
    case 10: letra = "X";
     break;
    case 11: letra = "B";
     break;
    case 12: letra = "N";
     break;
    case 13: letra = "J";
     break;
    case 14: letra = "Z";
     break;
    case 15: letra = "S";
     break;
    case 16: letra = "Q";
     break;
    case 17: letra = "V";
     break;
    case 18: letra = "H";
     break;
    case 19: letra = "L";
     break;
    case 20: letra = "C";
     break;
    case 21: letra = "K";
     break;
    case 22: letra = "E";
     break;
}

alert(`La letra correspondiente al DNI ${dni} es: ${letra}`);


} while (true);     // el bucle se repite hasta que el usuario presione cancelar