            // EJERCICIO 1 //

/* let edad = parseInt(prompt("Ingrese su edad"))

if(edad>=18){
    alert("Su edad es apta para conducir")
}else{
    alert("Ingrese un caracte valido o usted es menor de edad")
    } */

            //EJERCICIO 2 //

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
} while (isNaN(nota) || nota < 0 || nota > 10) ; */


         // EJERCICIO 3 //

let texto = "";                          // variable vacia para poder ir agregando cadenas de texto
let entrada = true;                      // esta variable controla el bucle, mientras "entrada" sea true, el usuario va a poder seguir ingresanto cadenas

while (continuar){
    let texto = prompt("Ingresá un texto");

    if (texto == null){                   // si el usuario presiona cncelar, el texto es null y sale del bucle
        break;
    }

    if 
} 

























/* const letrasDNI = [
  "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X",
  "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
];

let entrada;

do {
  entrada = prompt("🆔 Ingresá tu número de DNI (0 a 99999999):");

  if (entrada === null) {
    break; // El usuario canceló
  }

  let dni = parseInt(entrada);

  if (isNaN(dni)) {
    alert("❌ Eso no es un número válido.");
  } else if (dni < 0 || dni > 99999999) {
    alert("⚠️ El número debe estar entre 0 y 99.999.999.");
  } else {
    let resto = dni % 23;
    let letra = letrasDNI[resto];
    alert(`✅ DNI: ${dni} → Letra: '${letra}'`);
  }

} while (true);
 */